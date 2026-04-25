# 大对象与资源生命周期性能参考

本参考用于 ArkTS / HarmonyOS 插件实现中涉及大对象、图像帧、PDF 页、纹理、文件句柄或 MethodChannel 大字节传输的场景。主规则只提示检查项；需要判断代码是否会卡顿、泄漏或在大文件下崩溃时，再读取本文件。

## 1. PixelMap + MethodChannel data

### 风险模式

同一次渲染既把 native `PixelMap` 缓存在 Map 中，又通过 `data` 返回 `Uint8Array`。Dart 侧如果优先使用 `data`，通常不会持有 native 地址，也就不会触发 `releaseBuffer`。结果是 native 图像对象和 Dart 字节数组同时存在，快速滑动或多页预览时容易内存上涨。

错误示例：

```typescript
const pixelMap = page.getAreaPixelMap(matrix, outputWidth, outputHeight, false, backgroundFill);
const buffer = new ArrayBuffer(outputWidth * outputHeight * 4);
pixelMap.readPixelsToBufferSync(buffer);

const address = this.nextBufferAddress++;
this.bufferMap.set(address, pixelMap);

resultMap.set('addr', address);
resultMap.set('data', new Uint8Array(buffer));
result.success(resultMap);
```

正确示例：返回 `data` 时立即释放 native 图像对象。

```typescript
const pixelMap = page.getAreaPixelMap(matrix, outputWidth, outputHeight, false, backgroundFill);
try {
  const buffer = new ArrayBuffer(outputWidth * outputHeight * 4);
  pixelMap.readPixelsToBufferSync(buffer);

  resultMap.set('data', new Uint8Array(buffer));
  result.success(resultMap);
} finally {
  pixelMap.release();
}
```

正确示例：如果走地址模式，不要同时返回 `data`，并保证 Dart dispose 必达释放。

```typescript
const pixelMap = page.getAreaPixelMap(matrix, outputWidth, outputHeight, false, backgroundFill);
const address = this.nextBufferAddress++;
this.bufferMap.set(address, pixelMap);

resultMap.set('addr', address);
resultMap.set('size', outputWidth * outputHeight * 4);
result.success(resultMap);
```

## 2. PdfPage / PdfDocument 生命周期

### 风险模式

PDF API 返回的 `PdfPage`、`PdfDocument` 通常持有 native 资源。只读取尺寸或渲染页面后不释放，会在多页滚动、预览缩略图、重复打开关闭时累积页面对象。

错误示例：

```typescript
const page = doc.getPage(pageIndex);
const width = page.getWidth();
const height = page.getHeight();
result.success({ width: width, height: height });
```

正确示例：

```typescript
const page = doc.getPage(pageIndex);
try {
  const width = page.getWidth();
  const height = page.getHeight();
  result.success({ width: width, height: height });
} finally {
  page.release();
}
```

`PdfDocument` 也要在 close、detach、异常清理路径释放：

```typescript
const doc = this.docMap.get(docId);
if (doc !== undefined) {
  doc.releaseDocument();
  this.docMap.delete(docId);
}
```

## 3. 大字节传输与渲染尺寸上限

### 风险模式

`width * height * 4` 会直接决定 RGBA 帧大小。PDF 页、图片、视频帧、截图如果按原始尺寸或高倍缩放全量传回 Dart，单帧可能达到几十 MB，并在 native、JS/ArkTS、Dart、Flutter 图像层形成多份副本。

错误示例：

```typescript
const outputWidth = requestedWidth;
const outputHeight = requestedHeight;
const buffer = new ArrayBuffer(outputWidth * outputHeight * 4);
```

正确示例：先计算上限，必要时降采样。

```typescript
const maxPixels = 8000000;
let outputWidth = requestedWidth;
let outputHeight = requestedHeight;
const requestedPixels = outputWidth * outputHeight;

if (requestedPixels > maxPixels) {
  const scale = Math.sqrt(maxPixels / requestedPixels);
  outputWidth = Math.max(1, Math.floor(outputWidth * scale));
  outputHeight = Math.max(1, Math.floor(outputHeight * scale));
}

const buffer = new ArrayBuffer(outputWidth * outputHeight * 4);
```

优先考虑的替代路径：

- 按视口渲染，而不是整页渲染。
- 按瓦片分块渲染，而不是一次性返回整张图。
- 大图预览先降采样，用户放大后再局部高清。
- 使用真实 Texture / PixelMap 直通，避免 MethodChannel 传全量字节。

## 4. 滚动、预览和播放缓存

### 风险模式

列表、PDF 预览、图片墙、视频缩略图如果无上限缓存 `Image`、`PixelMap`、`ArrayBuffer` 或 `Future<Image>`，快速滑动后会保留所有访问过的页面或帧。

错误示例：

```dart
final pageCache = <int, Future<ui.Image>>{};

Future<ui.Image> pageImage(int pageNumber) {
  return pageCache.putIfAbsent(pageNumber, () => renderPage(pageNumber));
}
```

正确示例：使用有上限的 LRU，并在淘汰时释放图像。

```dart
final pageCache = LinkedHashMap<int, Future<ui.Image>>();
const maxCachedPages = 8;

Future<ui.Image> pageImage(int pageNumber) {
  final cached = pageCache.remove(pageNumber);
  if (cached != null) {
    pageCache[pageNumber] = cached;
    return cached;
  }

  final future = renderPage(pageNumber);
  pageCache[pageNumber] = future;
  while (pageCache.length > maxCachedPages) {
    final key = pageCache.keys.first;
    pageCache.remove(key)?.then((image) => image.dispose());
  }
  return future;
}
```

## 5. Review 结论模板

看到大对象链路时，至少回答这四个问题：

1. 资源从哪里创建，在哪里释放，异常路径是否释放。
2. 单次数据最大可能多大，是否由外部文件尺寸决定。
3. 是否同时保留 native 对象和跨语言大字节副本。
4. 高频调用场景是否有限流、降采样、缓存上限或淘汰。

如果任一问题答案不清楚，应把它作为性能或稳定性风险指出，再决定是否需要补实现、补验证或改架构。
