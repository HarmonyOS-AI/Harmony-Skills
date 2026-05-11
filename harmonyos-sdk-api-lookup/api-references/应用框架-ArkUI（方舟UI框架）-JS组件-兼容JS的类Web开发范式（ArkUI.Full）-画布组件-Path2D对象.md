路径对象，支持通过对象的接口进行路径的描述，并通过Canvas的[stroke](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-canvas-canvasrenderingcontext2d#stroke)接口进行绘制。

说明

本模块首批接口从API version 4开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

## addPath

PhonePC/2in1TabletTVWearable

addPath(path: Object): void

将另一个路径添加到当前的路径对象中。

**参数：**

展开

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| path | Object | 需要添加到当前路径的路径对象。 |

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
6. var path1 = ctx.createPath2D("M250 150 L150 350 L350 350 Z");
7. var path2 = ctx.createPath2D();
8. path2.addPath(path1);
9. ctx.stroke(path2);
10. }
11. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/05/v3/CMNuiLExR6mcl--FCP2dlw/zh-cn_image_0000002599479077.png?HW-CC-KV=V1&HW-CC-Date=20260511T040419Z&HW-CC-Expire=86400&HW-CC-Sign=DEEE4ABE6420B67CBAE67A92A947A75B396AE2CB7E1F17E2251D41CFA10953D5)

## setTransform

PhonePC/2in1TabletTVWearable

setTransform(scaleX: number, skewX: number, skewY: number, scaleY: number, translateX: number, translateY: number): void

设置路径变换矩阵。

**参数：**

展开

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| scaleX | number | x轴的缩放比例。 |
| skewX | number | x轴的倾斜角度。 |
| skewY | number | y轴的倾斜角度。 |
| scaleY | number | y轴的缩放比例。 |
| translateX | number | x轴的平移距离。 |
| translateY | number | y轴的平移距离。 |

**示例：**

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div>
3. <canvas ref="canvas" style="width: 300px; height: 250px; background-color: #ffff00;"></canvas>
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
6. var path = ctx.createPath2D("M250 150 L150 350 L350 350 Z");
7. path.setTransform(0.8, 0, 0, 0.4, 0, 0);
8. ctx.stroke(path);
9. }
10. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/82/v3/_HRfbVPbQIaeZeoUlyRo9A/zh-cn_image_0000002568759886.png?HW-CC-KV=V1&HW-CC-Date=20260511T040419Z&HW-CC-Expire=86400&HW-CC-Sign=C10E46E5F93A22E0A2C37315CBDE0F15D52F4F60145AE3BF5FFB7723C3B9E363)

## closePath

PhonePC/2in1TabletTVWearable

closePath(): void

将路径的当前点移回到路径的起点，当前点到起点间画一条直线。如果形状已经闭合或只有一个点，则此功能不执行任何操作。

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
6. var path = ctx.createPath2D();
7. path.moveTo(200, 100);
8. path.lineTo(300, 100);
9. path.lineTo(200, 200);
10. path.closePath();
11. ctx.stroke(path);
12. }
13. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/33/v3/Vj2JGmx3R_C3Hg6s5eHbTw/zh-cn_image_0000002599359129.png?HW-CC-KV=V1&HW-CC-Date=20260511T040419Z&HW-CC-Expire=86400&HW-CC-Sign=403FEED3D61F3304F5BAAF3B6D4D2590AAE428FAD5B7CE616CDA4BC46CFBED73)

## moveTo

PhonePC/2in1TabletTVWearable

moveTo(x: number, y: number): void

将路径的当前坐标点移动到目标点，移动过程中不绘制线条。

**参数：**

展开

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| x | number | 目标点X轴坐标。 |
| y | number | 目标点Y轴坐标。 |

**示例：**

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div>
3. <canvas ref="canvas" style="width: 300px; height: 250px; background-color: #ffff00;"></canvas>
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
6. var path = ctx.createPath2D();
7. path.moveTo(50, 100);
8. path.lineTo(250, 100);
9. path.lineTo(150, 200);
10. path.closePath();
11. ctx.stroke(path);
12. }
13. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/83/v3/3HkysklJRhCbTRizqDhmiw/zh-cn_image_0000002568919536.png?HW-CC-KV=V1&HW-CC-Date=20260511T040419Z&HW-CC-Expire=86400&HW-CC-Sign=E5361531A6E5E1EB46A5D7DCD3C99C9C344AED079370E209A11E8C37F068154B)

## lineTo

PhonePC/2in1TabletTVWearable

lineTo(x: number, y: number): void

从当前点绘制一条直线到目标点。

**参数：**

展开

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| x | number | 目标点X轴坐标。 |
| y | number | 目标点Y轴坐标。 |

**示例：**

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div>
3. <canvas ref="canvas" style="width: 400px; height: 450px; background-color: #ffff00;"></canvas>
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
6. var path = ctx.createPath2D();
7. path.moveTo(100, 100);
8. path.lineTo(100, 200);
9. path.lineTo(200, 200);
10. path.lineTo(200, 100);
11. path.closePath();
12. ctx.stroke(path);
13. }
14. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/52/v3/o55GoHjCSXylrTx55vmTNw/zh-cn_image_0000002599479079.png?HW-CC-KV=V1&HW-CC-Date=20260511T040419Z&HW-CC-Expire=86400&HW-CC-Sign=DB8AAACC5ABF7A042FC663536BAC068F7561866F8FB36F72056246D39692A52F)

## bezierCurveTo

PhonePC/2in1TabletTVWearable

bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void

创建三次贝塞尔曲线的路径。

**参数：**

展开

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| cp1x | number | 第一个贝塞尔参数的x坐标值。 |
| cp1y | number | 第一个贝塞尔参数的y坐标值。 |
| cp2x | number | 第二个贝塞尔参数的x坐标值。 |
| cp2y | number | 第二个贝塞尔参数的y坐标值。 |
| x | number | 路径结束时的x坐标值。 |
| y | number | 路径结束时的y坐标值。 |

**示例：**

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div>
3. <canvas ref="canvas" style="width: 300px; height: 250px; background-color: #ffff00;"></canvas>
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
6. var path = ctx.createPath2D();
7. path.moveTo(10, 10);
8. path.bezierCurveTo(20, 100, 200, 100, 200, 20);
9. ctx.stroke(path);
10. }
11. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fa/v3/0z3JotNIQF6gtZsI-NSzHw/zh-cn_image_0000002568759888.png?HW-CC-KV=V1&HW-CC-Date=20260511T040419Z&HW-CC-Expire=86400&HW-CC-Sign=828832332F65E04867D4FEF343BBB8793B424A3615742A5366576F957294A22A)

## quadraticCurveTo

PhonePC/2in1TabletTVWearable

quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void

创建二次贝塞尔曲线的路径。

**参数：**

展开

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| cpx | number | 贝塞尔参数的x坐标值。 |
| cpy | number | 贝塞尔参数的y坐标值。 |
| x | number | 路径结束时的x坐标值。 |
| y | number | 路径结束时的y坐标值。 |

**示例：**

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div>
3. <canvas ref="canvas" style="width: 300px; height: 250px; background-color: #ffff00;"></canvas>
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
6. var path = ctx.createPath2D();
7. path.moveTo(10, 10);
8. path.quadraticCurveTo(100, 100, 200, 20);
9. ctx.stroke(path);
10. }
11. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/93/v3/Rl8vuKV4SeG_uFmbTKi6Tg/zh-cn_image_0000002599359131.png?HW-CC-KV=V1&HW-CC-Date=20260511T040419Z&HW-CC-Expire=86400&HW-CC-Sign=C9096EB3AE5305877D2291A11D59099791C4479719F0642EE54189243351E08C)

## arc

PhonePC/2in1TabletTVWearable

arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, counterclockwise?: boolean): void

绘制弧线路径。

**参数：**

展开

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| x | number | 是 | 弧线圆心的x坐标值。 |
| y | number | 是 | 弧线圆心的y坐标值。 |
| radius | number | 是 | 弧线的圆半径。 |
| startAngle | number | 是 | 弧线的起始弧度。 |
| endAngle | number | 是 | 弧线的终止弧度。 |
| counterclockwise | boolean | 否 | 是否逆时针绘制圆弧，true为逆时针，false为顺时针。  默认值：false |

**示例：**

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div>
3. <canvas ref="canvas" style="width: 300px; height: 250px; background-color: #ffff00;"></canvas>
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
6. var path = ctx.createPath2D();
7. path.arc(100, 75, 50, 0, 6.28);
8. ctx.stroke(path);
9. }
10. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f/v3/CMsAvg2qQMiNk0h0b6tk3A/zh-cn_image_0000002568919538.png?HW-CC-KV=V1&HW-CC-Date=20260511T040419Z&HW-CC-Expire=86400&HW-CC-Sign=4BB285DA12F9910D4CF5FF215FBBB275D912883F43671281B7336800D81448EA)

## arcTo

PhonePC/2in1TabletTVWearable

arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void

依据圆弧经过的点和圆弧半径创建圆弧路径。

**参数：**

展开

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| x1 | number | 圆弧经过的第一个点的x坐标值。 |
| y1 | number | 圆弧经过的第一个点的y坐标值。 |
| x2 | number | 圆弧经过的第二个点的x坐标值。 |
| y2 | number | 圆弧经过的第二个点的y坐标值。 |
| radius | number | 圆弧的圆半径值。 |

**示例：**

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div>
3. <canvas ref="canvas" style="width: 300px; height: 250px; background-color: #ffff00;"></canvas>
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
6. var path = ctx.createPath2D();
7. path.arcTo(150, 20, 150, 70, 50);
8. ctx.stroke(path);
9. }
10. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bc/v3/FujTLbqtQNS7E7veRcu5jA/zh-cn_image_0000002599479081.png?HW-CC-KV=V1&HW-CC-Date=20260511T040419Z&HW-CC-Expire=86400&HW-CC-Sign=C1FBE7B6758F3483592412438AC80338DEB1E59DA5493BFA1607EAF1169AF660)

## ellipse

PhonePC/2in1TabletTVWearable

ellipse(x: number, y: number, radiusX: number, radiusY: number, rotation: number, startAngle: number, endAngle: number, counterclockwise?: number): void

在规定的矩形区域绘制一个椭圆。

**参数：**

展开

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| x | number | 是 | 椭圆圆心的x轴坐标。 |
| y | number | 是 | 椭圆圆心的y轴坐标。 |
| radiusX | number | 是 | 椭圆x轴的半径长度。 |
| radiusY | number | 是 | 椭圆y轴的半径长度。 |
| rotation | number | 是 | 椭圆的旋转角度，单位为弧度。 |
| startAngle | number | 是 | 椭圆绘制的起始点角度，以弧度表示。 |
| endAngle | number | 是 | 椭圆绘制的结束点角度，以弧度表示。 |
| counterclockwise | number | 否 | 是否以逆时针方向绘制椭圆，0为顺时针，1为逆时针。其它数值均按默认值处理。  默认值：0 |

**示例：**

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div>
3. <canvas ref="canvas" style="width: 500px; height: 450px; background-color: #ffff00;"></canvas>
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
6. var path = ctx.createPath2D();
7. path.ellipse(200, 200, 50, 100, Math.PI * 0.25, Math.PI * 0.5, Math.PI, 1);
8. ctx.stroke(path);
9. }
10. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/39/v3/4nAnkhIPQPabgK1b158ztg/zh-cn_image_0000002568759890.png?HW-CC-KV=V1&HW-CC-Date=20260511T040419Z&HW-CC-Expire=86400&HW-CC-Sign=EBCBFA7A721EF70A34F0B17F905B1B525BAAC49AC64B347746B6D951C12BA9B0)

## rect

PhonePC/2in1TabletTVWearable

rect(x: number, y: number, width: number, height: number): void

创建矩形路径。

**参数：**

展开

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| x | number | 指定矩形的左上角x坐标值。 |
| y | number | 指定矩形的左上角y坐标值。 |
| width | number | 指定矩形的宽度。 |
| height | number | 指定矩形的高度。 |

**示例：**

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div>
3. <canvas ref="canvas" style="width: 500px; height: 450px; background-color: #ffff00;"></canvas>
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
6. var path = ctx.createPath2D();
7. path.rect(20, 20, 100, 100);
8. ctx.stroke(path);
9. }
10. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4e/v3/Q1hz6eCmSkKH-6ewxeW1EQ/zh-cn_image_0000002599359133.png?HW-CC-KV=V1&HW-CC-Date=20260511T040419Z&HW-CC-Expire=86400&HW-CC-Sign=672A9FED61C53BDCDF2BF31AF092E56AD52044D73536C792DA3C28CC3606D7AC)