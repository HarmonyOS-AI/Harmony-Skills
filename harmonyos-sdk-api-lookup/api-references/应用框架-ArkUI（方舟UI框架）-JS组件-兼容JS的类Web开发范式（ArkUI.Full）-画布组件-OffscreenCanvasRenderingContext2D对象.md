说明

从API version 7开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。

使用OffscreenCanvasRenderingContext2D在[OffscreenCanvas对象](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-canvas-offscreencanvas)上进行绘制，绘制对象可以是矩形、文本、图片等。

## 属性

PhonePC/2in1TabletTVWearable

除支持与[CanvasRenderingContext2D对象](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-canvas-canvasrenderingcontext2d)相同的属性外，还支持如下属性：

展开

| 属性 | 类型 | 描述 |
| --- | --- | --- |
| filter | string | 设置图像的滤镜。  支持的滤镜效果如下：  - blur：给图像设置高斯模糊。  - brightness：给图片应用一种线性乘法，使其看起来更亮或更暗。  - contrast：调整图像的对比度。  - drop-shadow：给图像设置一个阴影效果。  - grayscale：将图像转换为灰度图像。  - hue-rotate：给图像应用色相旋转。  - invert：反转输入图像。  - opacity：调整图像的透明程度。  - saturate：转换图像饱和度。  - sepia：将图像转换为深褐色。 |

**示例：**

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div style="width: 500px; height: 500px;">
3. <canvas ref="canvasId" style="width: 500px; height: 500px; padding: 80px; background-color: rgb(213, 213, 213);"></canvas>
4. </div>
```

收起

自动换行

深色代码主题

复制

```
1. // xxx.js
2. export default {
3. onShow(){
4. var ctx = this.$refs.canvasId.getContext('2d');
5. var offscreen = new OffscreenCanvas(360, 500);
6. var offCanvas2 = offscreen.getContext("2d");
7. var img = new Image();
8. // 'common/images/flower.jpg'需要替换为开发者所需的图像资源文件
9. img.src = 'common/images/flower.jpg';
10. offCanvas2.drawImage(img, 0, 0, 100, 100);
11. offCanvas2.filter = 'blur(5px)';
12. offCanvas2.drawImage(img, 100, 0, 100, 100);

14. offCanvas2.filter = 'grayscale(50%)';
15. offCanvas2.drawImage(img, 200, 0, 100, 100);

17. offCanvas2.filter = 'hue-rotate(90deg)';
18. offCanvas2.drawImage(img, 0, 100, 100, 100);

20. offCanvas2.filter = 'invert(100%)';
21. offCanvas2.drawImage(img, 100, 100, 100, 100);

23. offCanvas2.filter = 'drop-shadow(8px 8px 10px green)';
24. offCanvas2.drawImage(img, 200, 100, 100, 100);

26. offCanvas2.filter = 'brightness(0.4)';
27. offCanvas2.drawImage(img, 0, 200, 100, 100);

29. offCanvas2.filter = 'opacity(25%)';
30. offCanvas2.drawImage(img, 100, 200, 100, 100);

32. offCanvas2.filter = 'saturate(30%)';
33. offCanvas2.drawImage(img, 200, 200, 100, 100);

35. offCanvas2.filter = 'sepia(60%)';
36. offCanvas2.drawImage(img, 0, 300, 100, 100);

38. offCanvas2.filter = 'contrast(200%)';
39. offCanvas2.drawImage(img, 100, 300, 100, 100);
40. var bitmap = offscreen.transferToImageBitmap();
41. ctx.transferFromImageBitmap(bitmap);
42. }
43. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e6/v3/VCx-WhWSRD6ech0w7aCs7g/zh-cn_image_0000002568919540.png?HW-CC-KV=V1&HW-CC-Date=20260511T040427Z&HW-CC-Expire=86400&HW-CC-Sign=E93DEAA0B12E92D1E212796D559EE27B3F9C29F783977C6676CC181AEA3070A8)

## 方法

PhonePC/2in1TabletTVWearable

除支持与CanvasRenderingContext2D对象相同的方法外，还支持如下方法：

### isPointInPath

PhonePC/2in1TabletTVWearable

isPointInPath(path?: Path2D, x: number, y: number): boolean

判断指定点是否在路径的区域内。

**参数：**

展开

| 参数名 | 参数类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| path | Path2D | 否 | 可选对象，指定用来判断的路径。若没有设置，则使用当前路径。 |
| x | number | 是 | 待判断点的x轴坐标。 |
| y | number | 是 | 待判断点的y轴坐标。 |

**返回值：**

展开

| 类型 | 说明 |
| --- | --- |
| boolean | 指定点是否在路径的区域内。返回true时，指定点在路径区域内。返回false时，指定点不在路径区域内。 |

**示例：**

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div class="container" style="width: 500px; height: 500px;">
3. <text class="textsize">In path:{{textValue}}</text>
4. <canvas ref="canvas" style="width: 500px; height: 500px; background-color: #ffff00;"></canvas>
5. </div>
```

收起

自动换行

深色代码主题

复制

```
1. /* xxx.css */
2. .container {
3. display: flex;
4. flex-direction: column;
5. background-color: #F1F3F5;
6. align-items: center;
7. justify-content: center;
8. width: 100%;
9. height: 100%;
10. }

12. canvas {
13. width: 600px;
14. height: 600px;
15. background-color: #fdfdfd;
16. border: none;
17. }

19. .textsize {
20. font-size: 40px;
21. }
```

收起

自动换行

深色代码主题

复制

```
1. // xxx.js
2. export default {
3. data: {
4. textValue: false
5. },
6. onShow(){
7. var canvas = this.$refs.canvas.getContext('2d');
8. var offscreen = new OffscreenCanvas(500,500);
9. var offscreenCanvasCtx = offscreen.getContext("2d");

11. offscreenCanvasCtx.rect(10, 10, 100, 100);
12. offscreenCanvasCtx.fill();
13. this.textValue = offscreenCanvasCtx.isPointInPath(30, 70);

15. var bitmap = offscreen.transferToImageBitmap();
16. canvas.transferFromImageBitmap(bitmap);
17. }
18. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f2/v3/IBcZU9y_RXC6aYPodprdwA/zh-cn_image_0000002599479083.png?HW-CC-KV=V1&HW-CC-Date=20260511T040427Z&HW-CC-Expire=86400&HW-CC-Sign=7ABB05CDA0BF042A49DB7F57BE64EB60744D9CE45305BCE4F03B6DB57A477499)

### isPointInStroke

PhonePC/2in1TabletTVWearable

isPointInStroke(path?: Path2D, x: number, y: number): boolean

判断指定点是否在路径的边缘线上。

**参数：**

展开

| 参数名 | 参数类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| path | Path2D | 否 | 可选对象，指定用来判断的路径。若没有设置，则使用当前路径。 |
| x | number | 是 | 待判断点的x轴坐标。 |
| y | number | 是 | 待判断点的y轴坐标。 |

**返回值：**

展开

| 类型 | 说明 |
| --- | --- |
| boolean | 指定点是否在路径的区域内。 |

**示例：**

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div class="container" style="width: 500px; height: 500px;">
3. <text class="textsize">In stroke:{{textValue}}</text>
4. <canvas ref="canvas" style="width: 500px; height: 500px; background-color: #ffff00;"></canvas>
5. </div>
```

收起

自动换行

深色代码主题

复制

```
1. /* xxx.css */
2. .container {
3. display: flex;
4. flex-direction: column;
5. background-color: #F1F3F5;
6. align-items: center;
7. justify-content: center;
8. width: 100%;
9. height: 100%;
10. }

12. canvas {
13. width: 600px;
14. height: 600px;
15. background-color: #fdfdfd;
16. border: none;
17. }

19. .textsize {
20. font-size: 40px;
21. }
```

收起

自动换行

深色代码主题

复制

```
1. // xxx.js
2. export default {
3. data: {
4. textValue: false
5. },
6. onShow(){
7. var canvas = this.$refs.canvas.getContext('2d');
8. var offscreen = new OffscreenCanvas(500,500);
9. var offscreenCanvasCtx = offscreen.getContext("2d");

11. offscreenCanvasCtx.rect(10, 10, 100, 100);
12. offscreenCanvasCtx.stroke();
13. this.textValue = offscreenCanvasCtx.isPointInStroke(50, 10);

15. var bitmap = offscreen.transferToImageBitmap();
16. canvas.transferFromImageBitmap(bitmap);
17. }
18. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f0/v3/bHlyk9rLQh-EA1VcP6t8xw/zh-cn_image_0000002568759892.png?HW-CC-KV=V1&HW-CC-Date=20260511T040427Z&HW-CC-Expire=86400&HW-CC-Sign=80E22168003707AFCF3A7ACE77C5AF3729C6D83CA610F3D986415035E7E7CB86)

### resetTransform

PhonePC/2in1TabletTVWearable

resetTransform(): void

**示例：**

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div class="container" style="width: 500px; height: 500px;">
3. <text class="textsize">In path:{{textValue}}</text>
4. <canvas ref="canvas" style="width: 500px; height: 500px; background-color: #ffff00;"></canvas>
5. </div>
```

收起

自动换行

深色代码主题

复制

```
1. /* xxx.css */
2. .container {
3. display: flex;
4. flex-direction: column;
5. background-color: #F1F3F5;
6. align-items: center;
7. justify-content: center;
8. width: 100%;
9. height: 100%;
10. }

12. canvas {
13. width: 600px;
14. height: 600px;
15. background-color: #fdfdfd;
16. border: none;
17. }

19. .textsize {
20. font-size: 40px;
21. }
```

收起

自动换行

深色代码主题

复制

```
1. // xxx.js
2. export default {
3. data:{
4. textValue:0
5. },
6. onShow(){
7. var canvas = this.$refs.canvas.getContext('2d');
8. var offscreen = new OffscreenCanvas(500,500);
9. var offscreenCanvasCtx = offscreen.getContext("2d");

11. offscreenCanvasCtx.transform(1, 0, 1.7, 1, 0, 0);
12. offscreenCanvasCtx.fillStyle = '#a9a9a9';
13. offscreenCanvasCtx.fillRect(40, 40, 50, 20);
14. offscreenCanvasCtx.fillRect(40, 90, 50, 20);

16. // Non-skewed rectangles
17. offscreenCanvasCtx.resetTransform();
18. offscreenCanvasCtx.fillStyle = '#ff0000';
19. offscreenCanvasCtx.fillRect(40, 40, 50, 20);
20. offscreenCanvasCtx.fillRect(40, 90, 50, 20);

22. var bitmap = offscreen.transferToImageBitmap();
23. canvas.transferFromImageBitmap(bitmap);
24. }
25. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ce/v3/4k-LS8VRSkmsfFiS3yKvCA/zh-cn_image_0000002599359135.png?HW-CC-KV=V1&HW-CC-Date=20260511T040427Z&HW-CC-Expire=86400&HW-CC-Sign=93C3B42BA818A980D5C506B68DC4825845A0C2B80F32F92A04E1DD78D5E3578A)