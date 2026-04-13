Canvas提供画布组件，用于自定义绘制图形，开发者使用CanvasRenderingContext2D对象和OffscreenCanvasRenderingContext2D对象在Canvas组件上进行绘制，绘制对象可以是基础形状、文本、图片等。

## 使用画布组件绘制自定义图形

可以由以下三种形式在画布绘制自定义图形：

* 使用[CanvasRenderingContext2D](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-canvasrenderingcontext2d)对象在Canvas画布上绘制。

收起

自动换行

深色代码主题

复制

```
1. @Entry
2. @Component
3. struct CanvasExample1 {
4. // 用来配置CanvasRenderingContext2D对象的参数，包括是否开启抗锯齿，true表明开启抗锯齿。
5. private settings: RenderingContextSettings = new RenderingContextSettings(true);
6. // 用来创建CanvasRenderingContext2D对象，通过在canvas中调用CanvasRenderingContext2D对象来绘制。
7. private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);

9. build() {
10. Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {
11. // 在canvas中调用CanvasRenderingContext2D对象。
12. Canvas(this.context)
13. .width('100%')
14. .height('100%')
15. .backgroundColor('#F5DC62')
16. .onReady(() => {
17. // 可以在这里绘制内容。
18. this.context.strokeRect(50, 50, 200, 150);
19. })
20. }
21. .width('100%')
22. .height('100%')
23. }
24. }
```

[CanvasRenderingContext2D.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/CustomCanvas/entry/src/main/ets/pages/canvas/CanvasRenderingContext2D.ets#L15-L40)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b2/v3/9Nz0bqG3RdOYusLBAS_LZw/zh-cn_image_0000002566868377.jpg?HW-CC-KV=V1&HW-CC-Date=20260403T130602Z&HW-CC-Expire=86400&HW-CC-Sign=223C10896BC81AF62BEA61E9034F95B8AE19B207A31FC8650E6CD218732C02E4)

* 离屏绘制是指将需要绘制的内容先绘制在缓存区，再将其转换成图片，一次性绘制到Canvas上，加快了绘制速度。过程为：

  1. 通过transferToImageBitmap方法将离屏画布最近渲染的图像创建为一个ImageBitmap对象。
  2. 通过CanvasRenderingContext2D对象的transferFromImageBitmap方法显示给定的ImageBitmap对象。

  具体使用参考[OffscreenCanvasRenderingContext2D](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-offscreencanvasrenderingcontext2d)对象。

收起

自动换行

深色代码主题

复制

```
1. @Entry
2. @Component
3. struct CanvasExample2 {
4. // 用来配置CanvasRenderingContext2D对象和OffscreenCanvasRenderingContext2D对象的参数，包括是否开启抗锯齿。true表明开启抗锯齿
5. private settings: RenderingContextSettings = new RenderingContextSettings(true);
6. private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);
7. // 用来创建OffscreenCanvas对象，width为离屏画布的宽度，height为离屏画布的高度。通过在canvas中调用OffscreenCanvasRenderingContext2D对象来绘制。
8. private offCanvas: OffscreenCanvas = new OffscreenCanvas(600, 600);

10. build() {
11. Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {
12. Canvas(this.context)
13. .width('100%')
14. .height('100%')
15. .backgroundColor('#F5DC62')
16. .onReady(() => {
17. let offContext = this.offCanvas.getContext('2d', this.settings);
18. // 可以在这里绘制内容
19. offContext.strokeRect(50, 50, 200, 150);
20. // 将离屏绘制渲染的图像在普通画布上显示
21. let image = this.offCanvas.transferToImageBitmap();
22. this.context.transferFromImageBitmap(image);
23. })
24. }
25. .width('100%')
26. .height('100%')
27. }
28. }
```

[OffScreenDrawing.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/CustomCanvas/entry/src/main/ets/pages/canvas/OffScreenDrawing.ets#L19-L48)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/16/v3/RrYCX-hQTxyqzsu2arG3rQ/zh-cn_image_0000002566868377.jpg?HW-CC-KV=V1&HW-CC-Date=20260403T130602Z&HW-CC-Expire=86400&HW-CC-Sign=46CDB3DC69EC6531EDDF5A69D5D690588A72ACECEB67D051098DCFD3BE77C12D)

说明

在画布组件中，通过CanvasRenderingContext2D对象和OffscreenCanvasRenderingContext2D对象在Canvas组件上进行绘制时调用的接口相同，另外，接口参数如无特别说明，单位均为vp。

* 在Canvas上加载Lottie动画时，需要先按照如下方式下载Lottie。

收起

自动换行

深色代码主题

复制

```
1. import lottie from '@ohos/lottie'
```

[OffScreenDrawing.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/CustomCanvas/entry/src/main/ets/pages/canvas/OffScreenDrawing.ets#L15-L17)

具体接口请参考[lottie](https://gitcode.com/openharmony-tpc/lottieArkTS)。

## 初始化画布组件

onReady(event: () => void)是Canvas组件初始化完成时的事件回调，调用该事件后，可获取Canvas组件的确定宽高，进一步使用CanvasRenderingContext2D对象和OffscreenCanvasRenderingContext2D对象调用相关API进行图形绘制。

收起

自动换行

深色代码主题

复制

```
1. Canvas(this.context)
2. .width('100%')
3. .height('100%')
4. .backgroundColor('#F5DC62')
5. .onReady(() => {
6. this.context.fillStyle = '#0097D4';
7. this.context.fillRect(50, 50, 100, 100);
8. })
```

[InitCanvasComponent.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/CustomCanvas/entry/src/main/ets/pages/canvas/InitCanvasComponent.ets#L23-L32)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/61/v3/TsuzDyWaSZeZn4QLuTbqnA/zh-cn_image_0000002566708395.jpg?HW-CC-KV=V1&HW-CC-Date=20260403T130602Z&HW-CC-Expire=86400&HW-CC-Sign=991E7CE80BFCD53B467AFB78E92D85AC8B2BC6BD5BF7A21B716240F5D96FA681)

## 画布组件绘制方式

在Canvas组件的事件回调onReady()被调用之后，开发者可以直接使用Canvas组件进行绘制。或者可以脱离Canvas组件和onReady()生命周期，单独定义Path2D对象构造理想的路径，并在onReady()调用之后使用Canvas组件进行绘制。

* 通过CanvasRenderingContext2D对象直接调用相关API进行绘制。

收起

自动换行

深色代码主题

复制

```
1. Canvas(this.context)
2. .width('100%')
3. .height('100%')
4. .backgroundColor('#F5DC62')
5. .onReady(() => {
6. this.context.beginPath();
7. this.context.moveTo(50, 50);
8. this.context.lineTo(280, 160);
9. this.context.stroke();
10. })
```

[CanvasComponentDrawingMethod.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/CustomCanvas/entry/src/main/ets/pages/canvas/CanvasComponentDrawingMethod.ets#L27-L38)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ee/v3/cFS4QmO7SPCJ6FbrMTQCnw/zh-cn_image_0000002535788600.jpg?HW-CC-KV=V1&HW-CC-Date=20260403T130602Z&HW-CC-Expire=86400&HW-CC-Sign=275BEF781FD8696142E5FBDFD7E7483F19171A81075DFE8D0B87940E5C9CB5CD)

* 先单独定义path2D对象构造理想的路径，再通过调用CanvasRenderingContext2D对象和OffscreenCanvasRenderingContext2D对象的stroke接口或者fill接口进行绘制，具体使用可以参考[Path2D](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-components-canvas-path2d)对象。

收起

自动换行

深色代码主题

复制

```
1. Canvas(this.context2)
2. .width('100%')
3. .height('100%')
4. .backgroundColor('#F5DC62')
5. .onReady(() => {
6. let region = new Path2D();
7. region.arc(100, 75, 50, 0, 6.28);
8. this.context2.stroke(region);
9. })
```

[CanvasComponentDrawingMethod.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/CustomCanvas/entry/src/main/ets/pages/canvas/CanvasComponentDrawingMethod.ets#L42-L52)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9b/v3/76bh07U-Tru-wzc5ZdtmXA/zh-cn_image_0000002535948546.jpg?HW-CC-KV=V1&HW-CC-Date=20260403T130602Z&HW-CC-Expire=86400&HW-CC-Sign=A3495343C0294AE98DFDF023E61B7E595A9767DF22E9C262F12CB6452E4F539B)

## 画布组件常用方法

OffscreenCanvasRenderingContext2D对象和CanvasRenderingContext2D对象提供了大量的属性和方法，可以用来绘制文本、图形，处理像素等，是Canvas组件的核心。常用接口有[fill](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-canvasrenderingcontext2d#fill)（对封闭路径进行填充）、[clip](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-canvasrenderingcontext2d#clip)（设置当前路径为剪切路径）、[stroke](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-canvasrenderingcontext2d#stroke)（进行边框绘制操作）等等，同时提供了[fillStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-canvasrenderingcontext2d#fillstyle)（指定绘制的填充色）、[globalAlpha](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-canvasrenderingcontext2d#globalalpha)（设置透明度）与[strokeStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-canvasrenderingcontext2d#strokestyle)（设置描边的颜色）等属性修改绘制内容的样式。将通过以下几个方面简单介绍画布组件常见使用方法：

* 绘制基础形状。

  可以通过[arc](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-canvasrenderingcontext2d#arc)（绘制弧线路径）、 [ellipse](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-canvasrenderingcontext2d#ellipse)（绘制一个椭圆）、[rect](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-canvasrenderingcontext2d#rect)（创建矩形路径）等接口绘制基础形状。

收起

自动换行

深色代码主题

复制

```
1. Canvas(this.context)
2. .width('100%')
3. .height('100%')
4. .backgroundColor('#F5DC62')
5. .onReady(() => {
6. // 绘制矩形
7. this.context.beginPath();
8. this.context.rect(100, 50, 100, 100);
9. this.context.stroke();
10. // 绘制圆形
11. this.context.beginPath();
12. this.context.arc(150, 250, 50, 0, 6.28);
13. this.context.stroke();
14. // 绘制椭圆
15. this.context.beginPath();
16. this.context.ellipse(150, 450, 50, 100, Math.PI * 0.25, Math.PI * 0, Math.PI * 2);
17. this.context.stroke();
18. })
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/58/v3/FQh7V5ZyRU6KsQ9lVLWFOA/zh-cn_image_0000002566868379.jpg?HW-CC-KV=V1&HW-CC-Date=20260403T130602Z&HW-CC-Expire=86400&HW-CC-Sign=03EBEF2B9F1D54409B4175911E3350484F7D49FE4A627FE4E9D01AA429A4ED2F)

* 绘制文本。

  可以通过[fillText](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-canvasrenderingcontext2d#filltext)（文本填充）、[strokeText](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-canvasrenderingcontext2d#stroketext)（文本描边）等接口进行文本绘制，示例中设置了font为50像素高加粗的"sans-serif"字体，然后调用fillText方法在(50, 100)处绘制文本"Hello World!"，设置strokeStyle为红色，lineWidth为2，font为50像素高加粗的"sans-serif"字体，然后调用strokeText方法在(50, 150)处绘制文本"Hello World!"的轮廓。

收起

自动换行

深色代码主题

复制

```
1. Canvas(this.context)
2. .width('100%')
3. .height('100%')
4. .backgroundColor('#F5DC62')
5. .onReady(() => {
6. // 文本填充
7. this.context.font = '50px bolder sans-serif';
8. this.context.fillText('Hello World!', 50, 100);
9. // 文本描边
10. this.context.strokeStyle = '#ff0000';
11. this.context.lineWidth = 2;
12. this.context.font = '50px bolder sans-serif';
13. this.context.strokeText('Hello World!', 50, 150);
14. })
```

[CanvasComponentText.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/CustomCanvas/entry/src/main/ets/pages/canvas/CanvasComponentText.ets#L23-L38)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9d/v3/c5m3fISkSCer8O4q_BFDIA/zh-cn_image_0000002566708397.jpg?HW-CC-KV=V1&HW-CC-Date=20260403T130602Z&HW-CC-Expire=86400&HW-CC-Sign=868ACA4B808B62C571695496143A32C3B2A69985DE75F0C1CB56F171D5349491)

* 绘制文本边框。

  可以通过[measureText](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-canvasrenderingcontext2d#measuretext)（文本测量）计算绘制文本的宽度和高度，使用测量的宽度和高度作为边框的尺寸。在示例中，设置textBaseline为'top'，font为30像素的"monospace"字体，通过measureText测量出文本的宽度和高度，然后调用fillText方法在(20, 100)处绘制文本"Hello World!"，并调用strokeRect方法在同一位置使用测量的宽度和高度绘制相应尺寸的边框。接着，设置font为60像素的粗体"sans-serif"字体，再次通过measureText测量文本的宽度和高度，接着调用fillText方法在(20, 150)处绘制文本"Hello World!"，并调用strokeRect方法在同一位置使用测量的宽度和高度绘制对应尺寸的边框。

收起

自动换行

深色代码主题

复制

```
1. // xxx.ets
2. @Entry
3. @Component
4. struct CanvasComponentTextBorder {
5. drawText: string = 'Hello World'
6. private settings: RenderingContextSettings = new RenderingContextSettings(true);
7. private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);

9. build() {
10. Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {
11. Canvas(this.context)
12. .width('100%')
13. .height('100%')
14. .backgroundColor('#F5DC62')
15. .onReady(() => {
16. // 文本的水平对齐方式为'top'
17. this.context.textBaseline = 'top';
18. // 文本字号为30px，字体系列为monospace
19. this.context.font = '30px monospace';
20. let textWidth = this.context.measureText(this.drawText).width;
21. let textHeight = this.context.measureText(this.drawText).height;
22. this.context.fillText(this.drawText, 20, 100);
23. this.context.strokeRect(20, 100, textWidth, textHeight);
24. // 文本字体粗细为粗体，字号为60px，字体系列为sans-serif
25. this.context.font = 'bold 60px sans-serif';
26. textWidth = this.context.measureText(this.drawText).width;
27. textHeight = this.context.measureText(this.drawText).height;
28. this.context.fillText(this.drawText, 20, 150);
29. this.context.strokeRect(20, 150, textWidth, textHeight);
30. })
31. }
32. .width('100%')
33. .height('100%')
34. }
35. }
```

[CanvasComponentTextBorder.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/CustomCanvas/entry/src/main/ets/pages/canvas/CanvasComponentTextBorder.ets#L15-L51)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3d/v3/5jpCiRmKTLy0ZlaMTlU_rQ/zh-cn_image_0000002535788602.png?HW-CC-KV=V1&HW-CC-Date=20260403T130602Z&HW-CC-Expire=86400&HW-CC-Sign=E9767C84F4FE0B4CE03C23A2770244B7C93BDFCC630BE5E1FC6C6793ECE62794)

* 使用自定义字体绘制文本。

  从API version 20开始，可以通过[getGlobalInstance](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-graphics-text#getglobalinstance)获取应用全局字体管理器的实例，然后使用[loadFontSync](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-graphics-text#loadfontsync)接口从设置的路径中加载自定义字体并通过[font](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-canvasrenderingcontext2d#font)（设置文本绘制中的字体样式）接口设置文本绘制中的字体样式，接着通过[fillText](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-canvasrenderingcontext2d#filltext)（绘制填充类文本）、[strokeText](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-canvasrenderingcontext2d#stroketext)（绘制描边类文本）等接口进行文本绘制。

收起

自动换行

深色代码主题

复制

```
1. import { text } from '@kit.ArkGraphics2D';

3. @Entry
4. @Component
5. struct CustomFont {
6. private settings: RenderingContextSettings = new RenderingContextSettings(true);
7. private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);

9. build() {
10. Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {
11. Canvas(this.context)
12. .width('100%')
13. .height('100%')
14. .backgroundColor('#F5DC62')
15. .onReady(() => {
16. // 加载自定义字体
17. let fontCollection = text.FontCollection.getGlobalInstance();
18. fontCollection.loadFontSync('customFont', $rawfile('customFont.ttf'));
19. this.context.font = '30vp customFont';
20. this.context.fillText('Hello World!', 20, 50);
21. this.context.strokeText('Hello World!', 20, 100);
22. })
23. }
24. .width('100%')
25. .height('100%')
26. }
27. }
```

[CanvasComponentCustomFontsDrawText.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/CustomCanvas/entry/src/main/ets/pages/canvas/CanvasComponentCustomFontsDrawText.ets#L15-L43)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/0c/v3/kRkVRZbDRWKqXT5eoO5FYA/zh-cn_image_0000002535948548.jpeg?HW-CC-KV=V1&HW-CC-Date=20260403T130602Z&HW-CC-Expire=86400&HW-CC-Sign=60DE9AE61E99CD9426238E8C54256C67ED7CD962ED8DEFFD1658B8D1EA538916)

* 绘制图片和图像像素信息处理。

  可以通过[drawImage](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-canvasrenderingcontext2d#drawimage)（图像绘制）、[putImageData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-canvasrenderingcontext2d#putimagedata)（使用[ImageData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-components-canvas-imagedata)数据填充新的矩形区域）等接口绘制图片，通过[createImageData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-canvasrenderingcontext2d#createimagedata)（创建新的ImageData 对象）、[getPixelMap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-canvasrenderingcontext2d#getpixelmap)（以当前canvas指定区域内的像素创建[PixelMap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-pixelmap)对象）、[getImageData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-canvasrenderingcontext2d#getimagedata)（以当前canvas指定区域内的像素创建ImageData对象）等接口进行图像像素信息处理。

收起

自动换行

深色代码主题

复制

```
1. @Entry
2. @Component
3. struct CanvasComponentDrawingPictureAndImagePixel {
4. private settings: RenderingContextSettings = new RenderingContextSettings(true);
5. private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);
6. private offCanvas: OffscreenCanvas = new OffscreenCanvas(600, 600);
7. // "/common/images/image.png"需要替换为开发者所需的图像资源文件
8. private img: ImageBitmap = new ImageBitmap('/common/images/image.png');

10. build() {
11. Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {
12. Canvas(this.context)
13. .width('100%')
14. .height('100%')
15. .backgroundColor('#F5DC62')
16. .onReady(() => {
17. let offContext = this.offCanvas.getContext('2d', this.settings);
18. // 使用drawImage接口将图片画在（0，0）为起点，宽高130的区域
19. offContext.drawImage(this.img, 0, 0, 130, 130);
20. // 使用getImageData接口，获得canvas组件区域中，（50，50）为起点，宽高130范围内的绘制内容
21. let imageData = offContext.getImageData(50, 50, 130, 130);
22. // 使用putImageData接口将得到的ImageData画在起点为（150， 150）的区域中
23. offContext.putImageData(imageData, 150, 150);
24. // 将离屏绘制的内容画到canvas组件上
25. let image = this.offCanvas.transferToImageBitmap();
26. this.context.transferFromImageBitmap(image);
27. })
28. }
29. .width('100%')
30. .height('100%')
31. }
32. }
```

[CanvasComponentDrawingPictureAndImagePixel.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/CustomCanvas/entry/src/main/ets/pages/canvas/CanvasComponentDrawingPictureAndImagePixel.ets#L15-L48)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c9/v3/Jswj4eMYSq6Ufl4L5-w0Sw/zh-cn_image_0000002566868381.png?HW-CC-KV=V1&HW-CC-Date=20260403T130602Z&HW-CC-Expire=86400&HW-CC-Sign=0957234275DFDCD1F74EB640BF5C3ED576CE0341EFB16D6B2B366944C910F43B)

* 其他方法。

  Canvas中还提供其他类型的方法。渐变（[CanvasGradient](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-components-canvas-canvasgradient)对象）相关的方法：[createLinearGradient](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-canvasrenderingcontext2d#createlineargradient)（创建一个线性渐变色）、[createRadialGradient](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-canvasrenderingcontext2d#createradialgradient)（创建一个径向渐变色）等。

收起

自动换行

深色代码主题

复制

```
1. Canvas(this.context)
2. .width('100%')
3. .height('100%')
4. .backgroundColor('#F5DC62')
5. .onReady(() => {
6. // 创建一个径向渐变色的CanvasGradient对象
7. let grad = this.context.createRadialGradient(200, 200, 50, 200, 200, 200);
8. // 为CanvasGradient对象设置渐变断点值，包括偏移和颜色
9. grad.addColorStop(0.0, '#E87361');
10. grad.addColorStop(0.5, '#FFFFF0');
11. grad.addColorStop(1.0, '#BDDB69');
12. // 用CanvasGradient对象填充矩形
13. this.context.fillStyle = grad;
14. this.context.fillRect(0, 0, 400, 400);
15. })
```

[CanvasComponentOtherMethods.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/CustomCanvas/entry/src/main/ets/pages/canvas/CanvasComponentOtherMethods.ets#L23-L39)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/71/v3/LLgg0hBURfWt0A4MyRqCgg/zh-cn_image_0000002566708399.jpg?HW-CC-KV=V1&HW-CC-Date=20260403T130602Z&HW-CC-Expire=86400&HW-CC-Sign=A3E4763BD9A9DBC2120175025F1B911701B48DF567DFCCE66E589E932B3F7A28)

## 使用状态变量驱动画布刷新

可以使用状态变量来驱动Canvas刷新，将变化的数据通过@Watch监听，并绑定自定义的draw()方法。当数据刷新时，@Watch绑定的方法会执行绘制逻辑，使Canvas刷新。

收起

自动换行

深色代码主题

复制

```
1. @Entry
2. @Component
3. struct CanvasContentUpdate {
4. private settings: RenderingContextSettings = new RenderingContextSettings(true);
5. private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);
6. @State @Watch('draw')content: string = 'Hello World';

8. draw() {
9. this.context.clearRect(0, 0, 400, 200); // 清空Canvas的内容
10. this.context.fillText(this.content, 50, 100); // 重新绘制
11. }

13. build() {
14. Column() {
15. Canvas(this.context)
16. .width('100%')
17. .height('25%')
18. .backgroundColor('rgb(39, 135, 217)')
19. .onReady(() => {
20. this.context.font = '65px sans-serif';
21. this.context.fillText(this.content, 50, 100);
22. })
23. TextInput({
24. text:$$this.content // 修改文本输入框里的内容时，状态变量的更新会驱动Canvas刷新
25. })
26. .fontSize(35)
27. }
28. .width('100%')
29. .height('100%')
30. }
31. }
```

[CanvasContentUpdate.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/CustomCanvas/entry/src/main/ets/pages/canvas/CanvasContentUpdate.ets#L15-L47)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/be/v3/LzUWTGjHSGC003RHcsCrCg/zh-cn_image_0000002535788604.gif?HW-CC-KV=V1&HW-CC-Date=20260403T130602Z&HW-CC-Expire=86400&HW-CC-Sign=1E9A9DAB68E95BC7B4D3985DEC7FD574A051CEEF7970785FCC9DBD01823920ED)

## 控制在画布组件不可见时不进行绘制

可以使用以下两种方式监听Canvas组件可见性，避免不可见时仍在无效绘制。

* 从API version 13开始，使用[setOnVisibleAreaApproximateChange](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-uicommonevent#setonvisibleareaapproximatechange)接口监听Canvas组件可见性。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. import { ColorMetrics } from '@kit.ArkUI';

  3. @Entry
  4. @Component
  5. struct Page {
  6. private canvasContext: CanvasRenderingContext2D = new CanvasRenderingContext2D()
  7. private timerId: number = -1;

  9. drawRandomCircle(): void {
  10. let center: [number, number] = [Math.random() * 200 + 50, Math.random() * 200 + 50]
  11. let radius: number = Math.random() * 20 + 10
  12. let color: ColorMetrics =
  13. ColorMetrics.rgba(Math.floor(Math.random() * 255), Math.floor(Math.random() * 255),
  14. Math.floor(Math.random() * 255))

  16. // 清空原先内容与画布状态
  17. this.canvasContext.reset()

  19. // 开始绘制
  20. this.canvasContext.fillStyle = color.color
  21. let path: Path2D = new Path2D()
  22. path.ellipse(center[0], center[1], radius, radius, 0, 0, Math.PI * 2)
  23. this.canvasContext.fill(path)
  24. }

  26. build() {
  27. Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {
  28. Canvas(this.canvasContext)
  29. .width(300)
  30. .height(300)
  31. .onReady(() => {
  32. let frameNode = this.canvasContext.canvas;
  33. frameNode.commonEvent.setOnVisibleAreaApproximateChange({ ratios: [0.0] },
  34. (isVisible: boolean, currentRatio: number) => {
  35. // canvas不可见
  36. if (!isVisible && currentRatio <= 0) {
  37. clearInterval(this.timerId)
  38. this.timerId = -2
  39. }
  40. // canvas可见
  41. if (isVisible) {
  42. if (this.timerId == -2) {
  43. this.timerId = setInterval(() => {
  44. this.drawRandomCircle()
  45. }, 500)
  46. }
  47. }
  48. })
  49. })
  50. Button("draw sth")
  51. .onClick(() => {
  52. if (this.timerId < 0) {
  53. this.timerId = setInterval(() => {
  54. this.drawRandomCircle()
  55. }, 500)
  56. }
  57. })
  58. }
  59. .width('100%')
  60. .height('100%')
  61. }
  62. }
  ```

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d5/v3/_dZGObJBQ6egXg2pQPFFbg/zh-cn_image_0000002535948550.gif?HW-CC-KV=V1&HW-CC-Date=20260403T130602Z&HW-CC-Expire=86400&HW-CC-Sign=DAC62438829ED63C1D62154C45BCE7DE4DF8DA4E25C8DA233EF183BB4790864B)
* 从API version 17开始，使用[onVisibleAreaApproximateChange](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-component-visible-area-change-event#onvisibleareaapproximatechange17)接口监听Canvas组件可见性。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. import { ColorMetrics } from '@kit.ArkUI';

  3. @Entry
  4. @Component
  5. struct Page {
  6. private canvasContext: CanvasRenderingContext2D = new CanvasRenderingContext2D()
  7. private timerId: number = -1;

  9. drawRandomCircle(): void {
  10. let center: [number, number] = [Math.random() * 200 + 50, Math.random() * 200 + 50]
  11. let radius: number = Math.random() * 20 + 10
  12. let color: ColorMetrics =
  13. ColorMetrics.rgba(Math.floor(Math.random() * 255), Math.floor(Math.random() * 255),
  14. Math.floor(Math.random() * 255))

  16. // 清空原先内容与画布状态
  17. this.canvasContext.reset()

  19. // 开始绘制
  20. this.canvasContext.fillStyle = color.color
  21. let path: Path2D = new Path2D()
  22. path.ellipse(center[0], center[1], radius, radius, 0, 0, Math.PI * 2)
  23. this.canvasContext.fill(path)
  24. }

  26. build() {
  27. Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {
  28. Canvas(this.canvasContext)
  29. .width(300)
  30. .height(300)
  31. .onVisibleAreaApproximateChange({ ratios: [0.0] },
  32. (isVisible: boolean, currentRatio: number) => {
  33. // canvas不可见
  34. if (!isVisible && currentRatio <= 0) {
  35. clearInterval(this.timerId)
  36. this.timerId = -2
  37. }
  38. // canvas可见
  39. if (isVisible) {
  40. if (this.timerId == -2) {
  41. this.timerId = setInterval(() => {
  42. this.drawRandomCircle()
  43. }, 500)
  44. }
  45. }
  46. })
  47. Button("draw sth")
  48. .onClick(() => {
  49. if (this.timerId < 0) {
  50. this.timerId = setInterval(() => {
  51. this.drawRandomCircle()
  52. }, 500)
  53. }
  54. })
  55. }
  56. .width('100%')
  57. .height('100%')
  58. }
  59. }
  ```

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ad/v3/ijnaccarQzW6quJ8WU80og/zh-cn_image_0000002566868383.gif?HW-CC-KV=V1&HW-CC-Date=20260403T130602Z&HW-CC-Expire=86400&HW-CC-Sign=15633D0F564ED7B0A1A0859E6C2292DC05D7A4025F59F73B204E884F41A9DFAA)

## 场景示例

* 绘制规则基础形状。

收起

自动换行

深色代码主题

复制

```
1. @Entry
2. @Component
3. struct ClearRect {
4. private settings: RenderingContextSettings = new RenderingContextSettings(true);
5. private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);

7. build() {
8. Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {
9. Canvas(this.context)
10. .width('100%')
11. .height('100%')
12. .backgroundColor('#F5DC62')
13. .onReady(() => {
14. // 设定填充样式，填充颜色设为蓝色
15. this.context.fillStyle = '#0097D4';
16. // 以(50, 50)为左上顶点，画一个宽高200的矩形
17. this.context.fillRect(50, 50, 200, 200);
18. // 以(70, 70)为左上顶点，清除宽150高100的区域
19. this.context.clearRect(70, 70, 150, 100);
20. })
21. }
22. .width('100%')
23. .height('100%')
24. }
25. }
```

[DrawingRegularBaseShape.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/CustomCanvas/entry/src/main/ets/pages/canvas/DrawingRegularBaseShape.ets#L15-L41)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/66/v3/DbacYHxxQU6NzGchVHsI6w/zh-cn_image_0000002566708401.jpg?HW-CC-KV=V1&HW-CC-Date=20260403T130602Z&HW-CC-Expire=86400&HW-CC-Sign=5ACA94227C27867B59F408D05C810B90D405C4FBBBB80F36160C5FF8B4D889B9)

* 绘制不规则图形。

收起

自动换行

深色代码主题

复制

```
1. @Entry
2. @Component
3. struct Path2d {
4. private settings: RenderingContextSettings = new RenderingContextSettings(true);
5. private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);

7. build() {
8. Row() {
9. Column() {
10. Canvas(this.context)
11. .width('100%')
12. .height('100%')
13. .backgroundColor('#F5DC62')
14. .onReady(() => {
15. // 使用Path2D的接口构造一个五边形
16. let path = new Path2D();
17. path.moveTo(150, 50);
18. path.lineTo(50, 150);
19. path.lineTo(100, 250);
20. path.lineTo(200, 250);
21. path.lineTo(250, 150);
22. path.closePath();
23. // 设定填充色为蓝色
24. this.context.fillStyle = '#0097D4';
25. // 使用填充的方式，将Path2D描述的五边形绘制在canvas组件内部
26. this.context.fill(path);
27. })
28. }
29. .width('100%')
30. }
31. .height('100%')
32. }
33. }
```

[DrawIrregularFigures.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/CustomCanvas/entry/src/main/ets/pages/canvas/DrawIrregularFigures.ets#L15-L49)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a8/v3/jUWyj_DaQ6CmYR5AClwYgQ/zh-cn_image_0000002535788606.jpg?HW-CC-KV=V1&HW-CC-Date=20260403T130602Z&HW-CC-Expire=86400&HW-CC-Sign=D967BB632D75E2307B88543BC3A29E8C5F14ED137785C7795711469C4FF03072)

* 绘制可拖动的光标。

  可以通过[beginPath](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-canvasrenderingcontext2d#beginpath)、[moveTo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-canvasrenderingcontext2d#moveto)、[lineTo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-canvasrenderingcontext2d#lineto)和[arc](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-canvasrenderingcontext2d#arc)方法设置光标的位置，使用[stroke](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-canvasrenderingcontext2d#stroke)和[fill](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-canvasrenderingcontext2d#fill)方法绘制光标，将是否按下和位置变化通过@Watch监听，并绑定自定义的drawCursor()方法。当拖动光标时，@Watch绑定的方法会执行绘制逻辑，计算并更新光标的颜色和位置。

收起

自动换行

深色代码主题

复制

```
1. @Entry
2. @Component
3. struct CursorMoving {
4. // 监听是否按下，刷新光标颜色
5. @State @Watch('drawCursor') isTouchDown: boolean = false;
6. // 监听位置变化，刷新页面
7. @State @Watch('drawCursor') cursorPosition: RectPosition = {
8. x: 0,
9. y: 0,
10. width: 0,
11. height: 0,
12. };
13. private settings: RenderingContextSettings = new RenderingContextSettings(true);
14. private canvasContext: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);
15. private sw: number = 360; // Canvas固定宽度
16. private sh: number = 270; // Canvas固定高度
17. private cursorWH: number = 50; // 光标区域宽高
18. private dashedLineW: number = 7; // 光标宽高
19. private arcRadius: number = 6; // 光标中心圆半径
20. private isReadyMove: boolean = false;
21. private touchPosition: Position = {
22. x: 0,
23. y: 0,
24. };
25. private cursorCenterPosition: Position = {
26. x: 0,
27. y: 0,
28. };

30. build() {
31. Column() {
32. // 绘制光标
33. Canvas(this.canvasContext)
34. .width(this.sw)
35. .height(this.sh)
36. .backgroundColor('#D5D5D5')
37. .onReady(() => {
38. this.cursorPosition.x = (this.sw - this.cursorWH) / 2;
39. this.cursorPosition.y = (this.sh - this.cursorWH) / 2;
40. this.cursorPosition.width = this.cursorWH;
41. this.cursorPosition.height = this.cursorWH;
42. this.cursorCenterPosition = {
43. x: this.cursorPosition.x + this.cursorPosition.width / 2,
44. y: this.cursorPosition.y + this.cursorPosition.height / 2
45. };
46. this.drawCursor();
47. })
48. .onTouch(event => {
49. if (event.type === TouchType.Down) {
50. this.isReadyMove = this.isTouchCursorArea(event.touches[0]);
51. if (this.isReadyMove) {
52. this.isTouchDown = true;
53. }

55. this.touchPosition = {
56. x: event.touches[0].displayX,
57. y: event.touches[0].displayY
58. };
59. } else if (event.type === TouchType.Move) {
60. if (this.isReadyMove) {
61. let moveX = event.changedTouches[0].displayX - this.touchPosition.x;
62. let moveY = event.changedTouches[0].displayY - this.touchPosition.y;
63. this.touchPosition = {
64. x: event.changedTouches[0].displayX,
65. y: event.changedTouches[0].displayY
66. };
67. this.cursorPosition.x += moveX;
68. this.cursorPosition.y += moveY;

70. this.cursorCenterPosition = {
71. x: this.cursorPosition.x + this.cursorPosition.width / 2,
72. y: this.cursorPosition.y + this.cursorPosition.height / 2
73. };
74. // 光标区域中心点位置限制
75. if (this.cursorCenterPosition.x < 0) {
76. this.cursorPosition.x = -this.cursorPosition.width / 2;
77. }
78. if (this.cursorCenterPosition.y < 0) {
79. this.cursorPosition.y = -this.cursorPosition.height / 2;
80. }
81. if (this.cursorCenterPosition.x > this.sw) {
82. this.cursorPosition.x = this.sw - this.cursorPosition.width / 2;
83. }
84. if (this.cursorCenterPosition.y > this.sh) {
85. this.cursorPosition.y = this.sh - this.cursorPosition.height / 2;
86. }
87. }
88. } else {
89. this.isTouchDown = false;
90. }
91. });
92. }
93. .height('100%')
94. .width('100%')
95. .justifyContent(FlexAlign.Center)
96. }

98. // 绘制裁剪框
99. drawCursor() {
100. // 算出菱形四个点
101. let positionL: Position = { x: this.cursorPosition.x, y: this.cursorPosition.y + this.cursorPosition.height / 2 };
102. let positionT: Position = { x: this.cursorPosition.x + this.cursorPosition.width / 2, y: this.cursorPosition.y };
103. let positionR: Position = {
104. x: this.cursorPosition.x + this.cursorPosition.width,
105. y: this.cursorPosition.y + this.cursorPosition.height / 2
106. };
107. let positionB: Position = {
108. x: this.cursorPosition.x + this.cursorPosition.width / 2,
109. y: this.cursorPosition.y + this.cursorPosition.height
110. };
111. let lineWidth = 2;
112. this.canvasContext.clearRect(0, 0, this.sw, this.sh);
113. this.canvasContext.lineWidth = lineWidth;
114. this.canvasContext.strokeStyle = this.isTouchDown ? '#ff1a5cae' : '#ffffffff';

116. // 画出四角
117. this.canvasContext.beginPath();
118. this.canvasContext.moveTo(positionL.x + this.dashedLineW, positionL.y - this.dashedLineW);
119. this.canvasContext.lineTo(positionL.x, positionL.y);
120. this.canvasContext.lineTo(positionL.x + this.dashedLineW, positionL.y + this.dashedLineW);

122. this.canvasContext.moveTo(positionT.x - this.dashedLineW, positionT.y + this.dashedLineW);
123. this.canvasContext.lineTo(positionT.x, positionT.y);
124. this.canvasContext.lineTo(positionT.x + this.dashedLineW, positionT.y + this.dashedLineW);

126. this.canvasContext.moveTo(positionR.x - this.dashedLineW, positionR.y - this.dashedLineW);
127. this.canvasContext.lineTo(positionR.x, positionR.y);
128. this.canvasContext.lineTo(positionR.x - this.dashedLineW, positionR.y + this.dashedLineW);

130. this.canvasContext.moveTo(positionB.x - this.dashedLineW, positionB.y - this.dashedLineW);
131. this.canvasContext.lineTo(positionB.x, positionB.y);
132. this.canvasContext.lineTo(positionB.x + this.dashedLineW, positionB.y - this.dashedLineW);

134. this.canvasContext.stroke();

136. // 画出中心圆
137. this.canvasContext.beginPath();
138. this.canvasContext.strokeStyle = this.isTouchDown ? '#ff1a5cae' : '#ff9ba59b';
139. this.canvasContext.fillStyle = this.isTouchDown ? '#ff1a5cae' : '#ff9ba59b';
140. this.canvasContext.arc(this.cursorPosition.x + this.cursorPosition.width / 2,
141. this.cursorPosition.y + this.cursorPosition.width / 2, this.arcRadius, 0, 2 * Math.PI);
142. this.canvasContext.fill();
143. this.canvasContext.stroke();

145. // 画出四条线
146. this.canvasContext.beginPath();
147. this.canvasContext.lineWidth = 0.7;
148. this.canvasContext.moveTo(positionL.x, positionL.y);
149. this.canvasContext.lineTo(0, positionL.y);

151. this.canvasContext.moveTo(positionT.x, positionT.y);
152. this.canvasContext.lineTo(positionT.x, 0);

154. this.canvasContext.moveTo(positionR.x, positionR.y);
155. this.canvasContext.lineTo(this.sw, positionR.y);

157. this.canvasContext.moveTo(positionB.x, positionB.y);
158. this.canvasContext.lineTo(positionB.x, this.sh);

160. this.canvasContext.stroke();
161. }

163. // 判断点击位置是否在棱形中
164. isTouchCursorArea(touch: TouchObject) {
165. let tempLength = Math.sqrt((touch.x - this.cursorCenterPosition.x) * (touch.x - this.cursorCenterPosition.x) +
166. (touch.y - this.cursorCenterPosition.y) * (touch.y - this.cursorCenterPosition.y));
167. if (tempLength < (this.cursorWH / 2 / 1.414)) {
168. return true;
169. }
170. return false;
171. }
172. }

174. export interface RectPosition {
175. x: number;
176. y: number;
177. height: number;
178. width: number;
179. };

181. export interface Position {
182. x: number;
183. y: number;
184. };
```

[DrawDraggableCursor.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/CustomCanvas/entry/src/main/ets/pages/canvas/DrawDraggableCursor.ets#L15-L200)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/86/v3/wNxyUMzsT0uffkCjbW-nCQ/zh-cn_image_0000002535948552.gif?HW-CC-KV=V1&HW-CC-Date=20260403T130602Z&HW-CC-Expire=86400&HW-CC-Sign=3B8C228205E7245613E14CD8575E3E84D63D7CCF384F843305014C84ABEE5952)

## 示例代码

* [自定义Canvas画布](https://gitcode.com/HarmonyOS_Samples/custom-canvas)