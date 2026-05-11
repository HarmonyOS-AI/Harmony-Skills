说明

从API version 4开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。

ImageData对象可以存储[canvas组件](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-canvas-canvas)渲染的像素数据。

## 属性

PhonePC/2in1TabletTVWearable

展开

| 属性 | 类型 | 描述 |
| --- | --- | --- |
| width | number | 矩形区域实际像素宽度。 |
| height | number | 矩形区域实际像素高度。 |
| data | <Uint8ClampedArray> | 一维数组，保存了相应的颜色数据，数据值范围为0到255。 |

## 示例

PhonePC/2in1TabletTVWearable

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div>
3. <canvas ref="canvas" style="width: 500px; height: 500px; background-color: #ffff00;"></canvas>
4. </div>
```

收起

自动换行

深色代码主题

复制

```
1. // xxx.js
2. import promptAction from '@ohos.promptAction';
3. export default {
4. onShow() {
5. const el =this.$refs.canvas;
6. const ctx = el.getContext('2d');
7. ctx.fillRect(0,0,200,200);
8. var imageData = ctx.createImageData(1,1);
9. promptAction.showToast({
10. message:imageData,
11. duration:5000
12. })
13. }
14. }
```