说明

从API version 4开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。

渐变对象。

## addColorStop

PhonePC/2in1TabletTVWearable

addColorStop(offset: number, color: string): void

设置渐变断点值，包括偏移和颜色。

**参数：**

展开

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| offset | number | 设置渐变点距离起点的位置占总体长度的比例，范围为0到1。 |
| color | string | 设置渐变的颜色。 |

**示例：**

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
2. export default {
3. onShow() {
4. const el = this.$refs.canvas;
5. const ctx = el.getContext('2d');
6. const gradient = ctx.createLinearGradient(50, 0, 300, 100);
7. gradient.addColorStop(0.0, '#ff0000')
8. gradient.addColorStop(0.5, '#ffffff')
9. gradient.addColorStop(1.0, '#00ff00')
10. ctx.fillStyle = gradient
11. ctx.fillRect(0, 0, 300, 300)
12. }
13. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ef/v3/LoJSia7dRNuvVqBI2gqY5w/zh-cn_image_0000002568919534.png?HW-CC-KV=V1&HW-CC-Date=20260511T040413Z&HW-CC-Expire=86400&HW-CC-Sign=FEAB789513EDD86B76B32871747B01195B4A95FE39F901A790F3470FD3B1F7F4)