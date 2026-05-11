说明

从API version 4开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。

图片对象。

## 属性

PhonePC/2in1TabletTVWearable

展开

| 属性 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| src | string | - | 是 | 图片资源的路径。 |
| width | <length> | 0px | 否 | 图片的宽度。 |
| height | <length> | 0px | 否 | 图片的高度。 |
| onload | Function | - | 否 | 图片加载成功后触发该事件，无参数。 |
| onerror | Function | - | 否 | 图片加载失败后触发该事件，无参数。 |

## 示例

PhonePC/2in1TabletTVWearable

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div>
3. <canvas ref="canvas" style="width: 500px; height: 500px; "></canvas>
4. </div>
```

收起

自动换行

深色代码主题

复制

```
1. // xxx.js
2. export default {
3. onShow() {
4. const el = this.$refs.canvas;
5. var ctx = el.getContext('2d');
6. var img = new Image();
7. // 图片路径建议放在common目录下
8. img.src = 'common/images/example.jpg';
9. img.onload = function () {
10. console.log('Image load success');
11. ctx.drawImage(img, 0, 0, 360, 250);
12. };
13. img.onerror = function () {
14. console.error('Image load fail');
15. };
16. }
17. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/51/v3/87hrQRY7RouX6sOeO2HKGw/zh-cn_image_0000002599359127.png?HW-CC-KV=V1&HW-CC-Date=20260511T040410Z&HW-CC-Expire=86400&HW-CC-Sign=8406BB8D8BA40D77C3B91C2F50018361F8AF54621617C39A09E2B4CC9A1302D0)