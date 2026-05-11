说明

从API version 4开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。

使用CanvasRenderingContext2D在[canvas画布组件](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-canvas-canvas)上进行绘制，绘制对象可以是矩形、文本、图片等。

**示例：**

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div>
3. <canvas ref="canvas1" style="width: 200px; height: 150px; background-color: #ffff00;"></canvas>
4. <input type="button" style="width: 180px; height: 60px;" value="handleClick" onclick="handleClick" />
5. <input type="button" style="width: 180px; height: 60px;" value="antialias" onclick="antialias" />
6. </div>
```

收起

自动换行

深色代码主题

复制

```
1. // xxx.js
2. export default {
3. handleClick() {
4. const el = this.$refs.canvas1;
5. const ctx = el.getContext('2d');
6. ctx.beginPath();
7. ctx.arc(100, 75, 50, 0, 6.28);
8. ctx.stroke();
9. },
10. antialias() {
11. const el = this.$refs.canvas1;
12. const ctx = el.getContext('2d', { antialias: true });
13. ctx.beginPath();
14. ctx.arc(100, 75, 50, 0, 6.28);
15. ctx.stroke();
16. }
17. }
```

* 示意图（关闭抗锯齿）

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cb/v3/sKwBW8uuQrKwu0f0q_pDNA/zh-cn_image_0000002599359101.png?HW-CC-KV=V1&HW-CC-Date=20260511T040406Z&HW-CC-Expire=86400&HW-CC-Sign=C73AB4BD924512E33008EC497C107A9E23E36A2CDD7C125C0264B2AC080BFBAC)
* 示意图（开启抗锯齿）

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/66/v3/FEbKUWiQTUy_bbZh07sieg/zh-cn_image_0000002568919508.png?HW-CC-KV=V1&HW-CC-Date=20260511T040406Z&HW-CC-Expire=86400&HW-CC-Sign=B5CD80E402465661B4F86FF315078D05F3439C20F11F6DAFDA548ED8376F761C)

## 属性

PhonePC/2in1TabletTVWearable

展开

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| [fillStyle](/consumer/cn/doc/harmonyos-references/js-components-canvas-canvasrenderingcontext2d#fillstyle) | <color> | [CanvasGradient](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-canvas-canvasgradient) | [CanvasPattern](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-components-canvas-canvaspattern) | 指定绘制的填充色。  - 类型为<color>时，表示设置填充区域的颜色。  - 类型为CanvasGradient时，表示渐变对象，使用 createLinearGradient()方法创建。  - 类型为CanvasPattern时，使用 createPattern()方法创建。  超出取值范围填充为黑色。 |
| [lineWidth](/consumer/cn/doc/harmonyos-references/js-components-canvas-canvasrenderingcontext2d#linewidth) | number | 设置绘制线条的宽度。 |
| [strokeStyle](/consumer/cn/doc/harmonyos-references/js-components-canvas-canvasrenderingcontext2d#strokestyle) | <color> | [CanvasGradient](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-canvas-canvasgradient) | [CanvasPattern](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-components-canvas-canvaspattern) | 设置描边的颜色。  - 类型为<color>时，表示设置描边使用的颜色。  - 类型为CanvasGradient时，表示渐变对象，使用 createLinearGradient()方法创建。  - 类型为CanvasPattern时，使用 createPattern()方法创建。 |
| [lineCap](/consumer/cn/doc/harmonyos-references/js-components-canvas-canvasrenderingcontext2d#linecap) | string | 指定线端点的样式，可选值为：  - butt：线端点以方形结束。  - round：线端点以圆形结束。  - square：线端点以方形结束，该样式下会增加一个长度和线段厚度相同，宽度是线段厚度一半的矩形。  默认值：butt |
| [lineJoin](/consumer/cn/doc/harmonyos-references/js-components-canvas-canvasrenderingcontext2d#linejoin) | string | 指定线段间相交的交点样式，可选值为：  - round：在线段相连处绘制一个扇形，扇形的圆角半径是线段的宽度。  - bevel：在线段相连处使用三角形为底填充， 每个部分矩形拐角独立。  - miter：在相连部分的外边缘处进行延伸，使其相交于一点，形成一个菱形区域，该属性可以通过设置miterLimit属性展现效果。  默认值：miter |
| [miterLimit](/consumer/cn/doc/harmonyos-references/js-components-canvas-canvasrenderingcontext2d#miterlimit) | number | 设置斜接面限制值，该值指定了线条相交处内角和外角的距离。  默认值：10 |
| [font](/consumer/cn/doc/harmonyos-references/js-components-canvas-canvasrenderingcontext2d#font) | string | 设置文本绘制中的字体样式。  语法：ctx.font="font-style font-weight font-size font-family"5+  - font-style(可选)，用于指定字体样式，支持如下几种样式：normal, italic。  - font-weight(可选)，用于指定字体的粗细，支持如下几种类型：normal, bold, bolder, lighter, 100, 200, 300, 400, 500, 600, 700, 800, 900。  - font-size(可选)，指定字号和行高，单位只支持px。  - font-family(可选)，指定字体系列，支持如下几种类型：sans-serif, serif, monospace。  默认值："normal normal 14px sans-serif" |
| [textAlign](/consumer/cn/doc/harmonyos-references/js-components-canvas-canvasrenderingcontext2d#textalign) | string | 设置文本绘制中的文本对齐方式，可选值为：  - left：文本左对齐。  - right：文本右对齐。  - center：文本居中对齐。  - start：文本对齐界线开始的地方。  - end：文本对齐界线结束的地方。  ltr布局模式下start和left一致，rtl布局模式下start和right一致。  默认值：left |
| [textBaseline](/consumer/cn/doc/harmonyos-references/js-components-canvas-canvasrenderingcontext2d#textbaseline) | string | 设置文本绘制中的水平对齐方式，可选值为：  - alphabetic：文本基线是标准的字母基线。  - top：文本基线在文本块的顶部。  - hanging：文本基线是悬挂基线。  - middle：文本基线在文本块的中间。  - ideographic：文字基线是表意字基线；如果字符本身超出了alphabetic 基线，那么ideographic基线位置在字符本身的底部。  - bottom：文本基线在文本块的底部。 与 ideographic 基线的区别在于 ideographic 基线不需要考虑下行字母。  默认值： alphabetic |
| [globalAlpha](/consumer/cn/doc/harmonyos-references/js-components-canvas-canvasrenderingcontext2d#globalalpha) | number | 设置透明度。  范围为[0.0, 1.0]，0.0为完全透明，1.0为完全不透明。若给定值小于0.0，则取值0.0；若给定值大于1.0，则取值1.0。 |
| [lineDashOffset](/consumer/cn/doc/harmonyos-references/js-components-canvas-canvasrenderingcontext2d#linedashoffset) | number | 设置画布的虚线偏移量，精度为float。  默认值：0.0 |
| [globalCompositeOperation](/consumer/cn/doc/harmonyos-references/js-components-canvas-canvasrenderingcontext2d#globalcompositeoperation) | string | 设置合成操作的方式。类型字段可选值有source-over，source-atop，source-in，source-out，destination-over，destination-atop，destination-in，destination-out，lighter，copy，xor。具体请参考[类型字段说明](/consumer/cn/doc/harmonyos-references/js-components-canvas-canvasrenderingcontext2d#globalcompositeoperation)。  默认值：source-over |
| [shadowBlur](/consumer/cn/doc/harmonyos-references/js-components-canvas-canvasrenderingcontext2d#shadowblur) | number | 设置绘制阴影时的模糊级别，值越大越模糊，精度为float。  默认值：0.0 |
| [shadowColor](/consumer/cn/doc/harmonyos-references/js-components-canvas-canvasrenderingcontext2d#shadowcolor) | <color> | 设置绘制阴影时的阴影颜色。 |
| [shadowOffsetX](/consumer/cn/doc/harmonyos-references/js-components-canvas-canvasrenderingcontext2d#shadowoffsetx) | number | 设置绘制阴影时和原有对象的水平偏移值。 |
| [shadowOffsetY](/consumer/cn/doc/harmonyos-references/js-components-canvas-canvasrenderingcontext2d#shadowoffsety) | number | 设置绘制阴影时和原有对象的垂直偏移值。 |
| [imageSmoothingEnabled](/consumer/cn/doc/harmonyos-references/js-components-canvas-canvasrenderingcontext2d#imagesmoothingenabled) | boolean | 用于设置绘制图片时是否进行图像平滑度调整，true为启用，false为不启用。  默认值：true |

### fillStyle

PhonePC/2in1TabletTVWearable

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div>
3. <canvas ref="canvas" style="width: 200px; height: 150px; "></canvas>
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
6. ctx.fillStyle = '#0000ff';
7. ctx.fillRect(20, 20, 150, 100);
8. }
9. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e6/v3/9AucnIGrQjCFKIuoJriAqg/zh-cn_image_0000002599479051.png?HW-CC-KV=V1&HW-CC-Date=20260511T040406Z&HW-CC-Expire=86400&HW-CC-Sign=82C82229336196CBDC275EC990DB75FA0907985CEBEAE443F19DDF4F11566A60)

### lineWidth

PhonePC/2in1TabletTVWearable

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div>
3. <canvas ref="canvas" style="width: 200px; height: 150px; "></canvas>
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
6. ctx.lineWidth = 5;
7. ctx.strokeRect(25, 25, 85, 105);
8. }
9. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/40/v3/ce9kd9ZzSb-5Z8d-_Ohtzw/zh-cn_image_0000002568759860.png?HW-CC-KV=V1&HW-CC-Date=20260511T040406Z&HW-CC-Expire=86400&HW-CC-Sign=7DCB17BFC5A88A52EA4CE3C43250FBA2F83DE8D5D3C58FCC1CC1C26133DBF379)

### strokeStyle

PhonePC/2in1TabletTVWearable

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div>
3. <canvas ref="canvas" style="width: 200px; height: 150px; "></canvas>
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
6. ctx.lineWidth = 10;
7. ctx.strokeStyle = '#0000ff';
8. ctx.strokeRect(25, 25, 155, 105);
9. }
10. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cf/v3/kHIwaeaOQteGFAUvWi7_zQ/zh-cn_image_0000002599359103.png?HW-CC-KV=V1&HW-CC-Date=20260511T040406Z&HW-CC-Expire=86400&HW-CC-Sign=283A44CDA73FF878CC7195CFAC32C8E23A0B8F9288EDBF364F7F7535E7BE8C69)

### lineCap

PhonePC/2in1TabletTVWearable

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div>
3. <canvas ref="canvas" style="width: 200px; height: 150px; "></canvas>
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
6. ctx.lineWidth = 8;
7. ctx.beginPath();
8. ctx.lineCap = 'round';
9. ctx.moveTo(30, 50);
10. ctx.lineTo(220, 50);
11. ctx.stroke();
12. }
13. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/43/v3/s1RNSRmXQVqVJ7I-oqch4Q/zh-cn_image_0000002568919510.png?HW-CC-KV=V1&HW-CC-Date=20260511T040406Z&HW-CC-Expire=86400&HW-CC-Sign=CFB652F95D037221B58F347C174F92F64D193D4932D3DC34C579DCC302B323C9)

### lineJoin

PhonePC/2in1TabletTVWearable

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div>
3. <canvas ref="canvas" style="width: 200px; height: 150px; "></canvas>
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
6. ctx.beginPath();
7. ctx.lineWidth = 8;
8. ctx.lineJoin = 'miter';
9. ctx.moveTo(30, 30);
10. ctx.lineTo(120, 60);
11. ctx.lineTo(30, 110);
12. ctx.stroke();
13. }
14. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f1/v3/0omHRMGnROOqK0VRReHu2g/zh-cn_image_0000002599479053.png?HW-CC-KV=V1&HW-CC-Date=20260511T040406Z&HW-CC-Expire=86400&HW-CC-Sign=CF9CEA662C6E98F75937A4624BD4A3EF4B475CD07604DB69A14F650681BE9E5D)

### miterLimit

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
5. const ctx = el.getContext('2d');
6. ctx.lineWidth =14;
7. ctx.lineJoin = 'miter';
8. ctx.miterLimit = 3;
9. ctx.moveTo(30, 30);
10. ctx.lineTo(120, 60);
11. ctx.lineTo(30, 70);
12. ctx.stroke();
13. }
14. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/32/v3/q2rmeipdT16UKustHbn39Q/zh-cn_image_0000002568759862.png?HW-CC-KV=V1&HW-CC-Date=20260511T040406Z&HW-CC-Expire=86400&HW-CC-Sign=0A44A0EDC1DCC3287137BDFBF769889B867DAF9AF01914440978960C0C568E95)

### font

PhonePC/2in1TabletTVWearable

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div>
3. <canvas ref="canvas" style="width: 200px; height: 150px; "></canvas>
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
6. ctx.font = '30px sans-serif';
7. ctx.fillText("Hello World", 20, 60);
8. }
9. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/33/v3/Jq4fnRo9QkeN1rAL5a6WQA/zh-cn_image_0000002599359105.png?HW-CC-KV=V1&HW-CC-Date=20260511T040406Z&HW-CC-Expire=86400&HW-CC-Sign=BC12D9E03578B71A56A44A9B0CFCE7A33F31B1F5ECBE9F3B4E1C81F5261BA08D)

### textAlign

PhonePC/2in1TabletTVWearable

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div>
3. <canvas ref="canvas" style="width: 200px; height: 150px; "></canvas>
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
6. ctx.strokeStyle = '#0000ff';
7. ctx.moveTo(140, 10);
8. ctx.lineTo(140, 160);
9. ctx.stroke();
10. ctx.font = '18px sans-serif';
11. // Show the different textAlign values
12. ctx.textAlign = 'start';
13. ctx.fillText('textAlign=start', 140, 60);
14. ctx.textAlign = 'end';
15. ctx.fillText('textAlign=end', 140, 80);
16. ctx.textAlign = 'left';
17. ctx.fillText('textAlign=left', 140, 100);
18. ctx.textAlign = 'center';
19. ctx.fillText('textAlign=center',140, 120);
20. ctx.textAlign = 'right';
21. ctx.fillText('textAlign=right',140, 140);
22. }
23. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/18/v3/D7GNe1nkSTm8rBBKFlx8WA/zh-cn_image_0000002568919512.png?HW-CC-KV=V1&HW-CC-Date=20260511T040406Z&HW-CC-Expire=86400&HW-CC-Sign=E962A3FA695679C3744142DC40B62BB1CB94397913B1889E6888F5ED0AB4FF77)

### textBaseline

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
5. const ctx = el.getContext('2d');
6. ctx.strokeStyle = '#0000ff';
7. ctx.moveTo(0, 120);
8. ctx.lineTo(400, 120);
9. ctx.stroke();
10. ctx.font = '20px sans-serif';
11. ctx.textBaseline = 'top';
12. ctx.fillText('Top', 10, 120);
13. ctx.textBaseline = 'bottom';
14. ctx.fillText('Bottom', 55, 120);
15. ctx.textBaseline = 'middle';
16. ctx.fillText('Middle', 125, 120);
17. ctx.textBaseline = 'alphabetic';
18. ctx.fillText('Alphabetic', 195, 120);
19. ctx.textBaseline = 'hanging';
20. ctx.fillText('Hanging', 295, 120);
21. }
22. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/97/v3/cvq63Mv8TtG4wu5mT9408w/zh-cn_image_0000002599479055.png?HW-CC-KV=V1&HW-CC-Date=20260511T040406Z&HW-CC-Expire=86400&HW-CC-Sign=B733C4E084F476DF476370A7A50151D339EFE3B8FC1571FE021E436DB8BF6E4C)

### globalAlpha

PhonePC/2in1TabletTVWearable

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div>
3. <canvas ref="canvas" style="width: 200px; height: 150px; "></canvas>
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
6. ctx.fillStyle = 'rgb(255,0,0)';
7. ctx.fillRect(0, 0, 50, 50);
8. ctx.globalAlpha = 0.4;
9. ctx.fillStyle = 'rgb(0,0,255)';
10. ctx.fillRect(50, 50, 50, 50);

12. }
13. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a5/v3/J0osI-dFTkSmRD9ViXgTNg/zh-cn_image_0000002568759864.png?HW-CC-KV=V1&HW-CC-Date=20260511T040406Z&HW-CC-Expire=86400&HW-CC-Sign=C40E5FED12875E038F23BF28DC54FE5FB88271A428C1E8E5FD37549EBEC01433)

### lineDashOffset

PhonePC/2in1TabletTVWearable

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div>
3. <canvas ref="canvas" style="width: 200px; height: 150px; background-color: #ffff00;"></canvas>
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
6. ctx.arc(100, 75, 50, 0, 6.28);
7. ctx.setLineDash([10,20]);
8. ctx.lineDashOffset = 10.0;
9. ctx.stroke();
10. }
11. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/28/v3/12-bndKMSc23WbczLscXvA/zh-cn_image_0000002599359107.png?HW-CC-KV=V1&HW-CC-Date=20260511T040406Z&HW-CC-Expire=86400&HW-CC-Sign=42CBB8783B1B3B1FEAD0CFDF45822E1AB3573EE77139DB47176F2224A285673A)

### globalCompositeOperation

PhonePC/2in1TabletTVWearable

类型字段说明。

展开

| 值 | 描述 |
| --- | --- |
| source-over | 在现有绘制内容上显示新绘制内容，属于默认值。 |
| source-atop | 在现有绘制内容顶部显示新绘制内容。 |
| source-in | 在现有绘制内容中显示新绘制内容。 |
| source-out | 在现有绘制内容之外显示新绘制内容。 |
| destination-over | 在新绘制内容上方显示现有绘制内容。 |
| destination-atop | 在新绘制内容顶部显示现有绘制内容。 |
| destination-in | 在新绘制内容中显示现有绘制内容。 |
| destination-out | 在新绘制内容外显示现有绘制内容。 |
| lighter | 显示新绘制内容和现有绘制内容。 |
| copy | 显示新绘制内容而忽略现有绘制内容。 |
| xor | 使用异或操作对新绘制内容与现有绘制内容进行融合。 |

**示例：**

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div>
3. <canvas ref="canvas" style="width: 200px; height: 150px; "></canvas>
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
6. ctx.fillStyle = 'rgb(255,0,0)';
7. ctx.fillRect(20, 20, 50, 50);
8. ctx.globalCompositeOperation = 'source-over';
9. ctx.fillStyle = 'rgb(0,0,255)';
10. ctx.fillRect(50, 50, 50, 50);
11. // Start drawing second example
12. ctx.fillStyle = 'rgb(255,0,0)';
13. ctx.fillRect(120, 20, 50, 50);
14. ctx.globalCompositeOperation = 'destination-over';
15. ctx.fillStyle = 'rgb(0,0,255)';
16. ctx.fillRect(150, 50, 50, 50);
17. }
18. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/11/v3/FVcGTyjeRgW2NhxIHX9vLA/zh-cn_image_0000002568919514.png?HW-CC-KV=V1&HW-CC-Date=20260511T040406Z&HW-CC-Expire=86400&HW-CC-Sign=68CF5319E2B1A55013F44EC8DD2E6AB5C47DAC3912864DBC8A3C31F86435FEF5)

示例中，新绘制内容是蓝色矩形，现有绘制内容是红色矩形。

### shadowBlur

PhonePC/2in1TabletTVWearable

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div>
3. <canvas ref="canvas" style="width: 200px; height: 150px; "></canvas>
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
6. ctx.shadowBlur = 30;
7. ctx.shadowColor = 'rgb(0,0,0)';
8. ctx.fillStyle = 'rgb(255,0,0)';
9. ctx.fillRect(20, 20, 100, 80);
10. }
11. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b/v3/o-76eYn0QJ2vPWZsZm4Wbg/zh-cn_image_0000002599479057.png?HW-CC-KV=V1&HW-CC-Date=20260511T040406Z&HW-CC-Expire=86400&HW-CC-Sign=F34F0E2035F7F2BF64CF7980F1599706436611E0AAAD761425CFA74EB5BAA4F3)

### shadowColor

PhonePC/2in1TabletTVWearable

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div>
3. <canvas ref="canvas" style="width: 200px; height: 150px;"></canvas>
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
6. ctx.shadowBlur = 30;
7. ctx.shadowColor = 'rgb(0,0,255)';
8. ctx.fillStyle = 'rgb(255,0,0)';
9. ctx.fillRect(30, 30, 100, 100);
10. }
11. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c5/v3/b_dCMmjrQ4i7kI1M50IbOQ/zh-cn_image_0000002568759866.png?HW-CC-KV=V1&HW-CC-Date=20260511T040406Z&HW-CC-Expire=86400&HW-CC-Sign=EF5BDB4D7E25CBB4D7B661CCF82A0C3EEF3FEAB9FC87C5D0B50FC0BFA18A3B6A)

### shadowOffsetX

PhonePC/2in1TabletTVWearable

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div>
3. <canvas ref="canvas" style="width: 200px; height: 150px;"></canvas>
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
6. ctx.shadowBlur = 10;
7. ctx.shadowOffsetX = 20;
8. ctx.shadowColor = 'rgb(0,0,0)';
9. ctx.fillStyle = 'rgb(255,0,0)';
10. ctx.fillRect(20, 20, 100, 80);
11. }
12. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a2/v3/zH0mpBzeSCm7bV_9d9iZKw/zh-cn_image_0000002599359109.png?HW-CC-KV=V1&HW-CC-Date=20260511T040406Z&HW-CC-Expire=86400&HW-CC-Sign=E86392D26F57AE880DA4F89E0C13CD22565C0DDB7AB57E39016EA7C32734029F)

### shadowOffsetY

PhonePC/2in1TabletTVWearable

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div>
3. <canvas ref="canvas" style="width: 200px; height: 150px; "></canvas>
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
6. ctx.shadowBlur = 10;
7. ctx.shadowOffsetY = 20;
8. ctx.shadowColor = 'rgb(0,0,0)';
9. ctx.fillStyle = 'rgb(255,0,0)';
10. ctx.fillRect(30, 30, 100, 100);
11. }
12. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/46/v3/tvKRjezaQZ-At0acSZiAFg/zh-cn_image_0000002568919516.png?HW-CC-KV=V1&HW-CC-Date=20260511T040406Z&HW-CC-Expire=86400&HW-CC-Sign=9073292687BD80E13A861E90C27B1EE95B8DB083944312969A0B1E0721576225)

### imageSmoothingEnabled

PhonePC/2in1TabletTVWearable

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div>
3. <canvas ref="canvas" style="width: 200px; height: 150px; "></canvas>
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
6. var img = new Image();
7. // 'common/image/example.jpg'需要替换为开发者所需的图像资源文件
8. img.src = 'common/image/example.jpg';
9. img.onload = function() {
10. ctx.imageSmoothingEnabled = false;
11. ctx.drawImage(img, 0, 0, 400, 200);
12. };
13. }
14. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/21/v3/zkAm6t_-TzumK9NKMc2FRw/zh-cn_image_0000002599479059.png?HW-CC-KV=V1&HW-CC-Date=20260511T040406Z&HW-CC-Expire=86400&HW-CC-Sign=4CE484441E030A380636D21D52D8F528A6152A114CDD13A0BC0F6F79F4AF32C5)

## 方法

PhonePC/2in1TabletTVWearable

### fillRect

PhonePC/2in1TabletTVWearable

fillRect(x: number, y: number, width:number, height: number): void

填充一个矩形。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

展开

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| x | number | 是 | 指定矩形左上角点的x坐标。  单位：vp |
| y | number | 是 | 指定矩形左上角点的y坐标。  单位：vp |
| width | number | 是 | 指定矩形的宽度。  单位：vp |
| height | number | 是 | 指定矩形的高度。  单位：vp |

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
6. ctx.fillRect(20, 20, 200, 150);
7. }
8. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8/v3/qZ7NCC7xTI-L8hhGG1SeYA/zh-cn_image_0000002568759868.png?HW-CC-KV=V1&HW-CC-Date=20260511T040406Z&HW-CC-Expire=86400&HW-CC-Sign=4B343EDBBA6CC411D074A09B955B94109371BB27DB4A4D0CF1E393110C9C3AB3)

### clearRect

PhonePC/2in1TabletTVWearable

clearRect(x: number, y: number, width:number, height: number): void

删除指定区域内的绘制内容。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

展开

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| x | number | 是 | 指定矩形上的左上角x坐标。  单位：vp |
| y | number | 是 | 指定矩形上的左上角y坐标。  单位：vp |
| width | number | 是 | 指定矩形的宽度。  单位：vp |
| height | number | 是 | 指定矩形的高度。  单位：vp |

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
6. ctx.fillStyle = 'rgb(0,0,255)';
7. ctx.fillRect(100, 100, 200, 200);
8. ctx.clearRect(110, 110, 80, 50);
9. }
10. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6b/v3/VrElTzH5T1S70sN2EhW7wA/zh-cn_image_0000002599359111.png?HW-CC-KV=V1&HW-CC-Date=20260511T040406Z&HW-CC-Expire=86400&HW-CC-Sign=B97ECBE6CEDE2CB56C9E35C96CEF44B106CD8A31C81499C61DC246E11F7250FA)

### strokeRect

PhonePC/2in1TabletTVWearable

strokeRect(x: number, y: number, width:number, height: number): void

绘制具有边框的矩形，矩形内部不填充。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

展开

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| x | number | 是 | 指定矩形的左上角x坐标。  单位：vp |
| y | number | 是 | 指定矩形的左上角y坐标。  单位：vp |
| width | number | 是 | 指定矩形的宽度。  单位：vp |
| height | number | 是 | 指定矩形的高度。  单位：vp |

**示例：**

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
5. const ctx = el.getContext('2d');
6. ctx.strokeRect(100, 100, 200, 150);
7. }
8. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d5/v3/4A3bl14RSbSFnZwYRFknBQ/zh-cn_image_0000002568919518.png?HW-CC-KV=V1&HW-CC-Date=20260511T040406Z&HW-CC-Expire=86400&HW-CC-Sign=954C7343E1F4512C8D5D0CDBC336FFBD8197487BCA66BA85491DB7B1F4047827)

### fillText

PhonePC/2in1TabletTVWearable

fillText(text: string, x: number, y: number): void

绘制填充类文本。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

展开

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| text | string | 是 | 需要绘制的文本内容。 |
| x | number | 是 | 需要绘制的文本的左下角x坐标。  单位：vp |
| y | number | 是 | 需要绘制的文本的左下角y坐标。  单位：vp |

**示例：**

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div>
3. <canvas ref="canvas" style="width: 200px; height: 150px; "></canvas>
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
6. ctx.font = '35px sans-serif';
7. ctx.fillText("Hello World!", 10, 60);
8. }
9. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cd/v3/NsCiAQr7TESRM719sGm6Iw/zh-cn_image_0000002599479061.png?HW-CC-KV=V1&HW-CC-Date=20260511T040406Z&HW-CC-Expire=86400&HW-CC-Sign=E43723987A78D6F43BE5E5D3690451E0E18E6576AA6CE08ECB2F1C8EE3C82294)

### strokeText

PhonePC/2in1TabletTVWearable

strokeText(text: string, x: number, y: number): void

绘制描边类文本。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

展开

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| text | string | 是 | 需要绘制的文本内容。 |
| x | number | 是 | 需要绘制的文本的左下角x坐标。  单位：vp |
| y | number | 是 | 需要绘制的文本的左下角y坐标。  单位：vp |

**示例：**

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div>
3. <canvas ref="canvas" style="width: 200px; height: 150px; "></canvas>
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
6. ctx.font = '25px sans-serif';
7. ctx.strokeText("Hello World!", 10, 60);
8. }
9. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/11/v3/GIGIU0THQuWdCJm_OTTk9Q/zh-cn_image_0000002568759870.png?HW-CC-KV=V1&HW-CC-Date=20260511T040406Z&HW-CC-Expire=86400&HW-CC-Sign=098E6D26962B5148F1D1D0DE86336300621DF67840DDFEFD169EA74060D71B39)

### measureText

PhonePC/2in1TabletTVWearable

measureText(text: string): TextMetrics

该方法返回一个文本测算的对象，通过该对象可以获取指定文本的宽度值。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

展开

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| text | string | 是 | 需要进行测量的文本。 |

**返回值：**

展开

| 类型 | 说明 |
| --- | --- |
| TextMetrics | 包含指定字体的宽度，该宽度可以通过TextMetrics.width来获取。 |

**示例：**

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div>
3. <canvas ref="canvas" style="width: 200px; height: 150px;"></canvas>
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
6. ctx.font = '20px sans-serif';
7. var txt = 'Hello World';
8. ctx.fillText("width:" + ctx.measureText(txt).width, 20, 60);
9. ctx.fillText(txt, 20, 110);
10. }
11. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ef/v3/zbhjDaS8S62Yvv1KN-aqqA/zh-cn_image_0000002599359113.png?HW-CC-KV=V1&HW-CC-Date=20260511T040406Z&HW-CC-Expire=86400&HW-CC-Sign=507D3B20AF24A73A0DA918B347ACA4FD0B73BAD925DFC0A3A2D82226A60F5CE9)

### stroke

PhonePC/2in1TabletTVWearable

stroke(): void

进行边框绘制操作。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**示例：**

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div>
3. <canvas ref="canvas" style="width: 200px; height: 150px; "></canvas>
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
6. ctx.moveTo(25, 25);
7. ctx.lineTo(25, 250);
8. ctx.lineWidth = '6';
9. ctx.strokeStyle = 'rgb(0,0,255)';
10. ctx.stroke();
11. }
12. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fb/v3/vIsPQF3lQfyqsINmiIALgw/zh-cn_image_0000002568919520.png?HW-CC-KV=V1&HW-CC-Date=20260511T040406Z&HW-CC-Expire=86400&HW-CC-Sign=A2DB2CA1AC47ECCD258B5FFAF24A13D56E216803777279601211CADC3DFBBCF6)

### beginPath

PhonePC/2in1TabletTVWearable

beginPath(): void

创建一个新的绘制路径。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**示例：**

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
5. const ctx = el.getContext('2d');
6. ctx.beginPath();
7. ctx.lineWidth = '6';
8. ctx.strokeStyle = '#0000ff';
9. ctx.moveTo(15, 80);
10. ctx.lineTo(280, 80);
11. ctx.stroke();
12. }
13. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5f/v3/4CJjQXi5To60GTr9GSWhZQ/zh-cn_image_0000002599479063.png?HW-CC-KV=V1&HW-CC-Date=20260511T040406Z&HW-CC-Expire=86400&HW-CC-Sign=7B8D8F9D7F5A839C78520F18744601D755B46865E67CB8109BA5786F0A851C4C)

### moveTo

PhonePC/2in1TabletTVWearable

moveTo(x: number, y: number): void

路径从当前点移动到指定点。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

展开

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| x | number | 是 | 指定位置的x坐标。  单位：vp |
| y | number | 是 | 指定位置的y坐标。  单位：vp |

**示例：**

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div>
3. <canvas ref="canvas" style="width: 200px; height: 150px; "></canvas>
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
6. ctx.beginPath();
7. ctx.moveTo(10, 10);
8. ctx.lineTo(280, 160);
9. ctx.stroke();
10. }
11. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a3/v3/YxBm2cyCRFydoTG9rmfgeQ/zh-cn_image_0000002568759872.png?HW-CC-KV=V1&HW-CC-Date=20260511T040406Z&HW-CC-Expire=86400&HW-CC-Sign=399E3FFE01D06831A4310F9B91E0734CB6FD70C67C703D10D4A02A23EB4E79BA)

### lineTo

PhonePC/2in1TabletTVWearable

lineTo(x: number, y: number): void

从当前点到指定点进行路径连接。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

展开

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| x | number | 是 | 指定位置的x坐标。  单位：vp |
| y | number | 是 | 指定位置的y坐标。  单位：vp |

**示例：**

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div>
3. <canvas ref="canvas" style="width: 200px; height: 150px; "></canvas>
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
6. ctx.beginPath();
7. ctx.moveTo(10, 10);
8. ctx.lineTo(280, 160);
9. ctx.stroke();
10. }
11. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fb/v3/BUYwaTjjTBaHFuyonm3mSw/zh-cn_image_0000002599359115.png?HW-CC-KV=V1&HW-CC-Date=20260511T040406Z&HW-CC-Expire=86400&HW-CC-Sign=971D97CA9A9E373359F5B471C26B824B9A10C6A1C960C57F5B71E6BA8F4BB243)

### closePath

PhonePC/2in1TabletTVWearable

closePath(): void

结束当前路径形成一个封闭路径。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**示例：**

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div>
3. <canvas ref="canvas" style="width: 200px; height: 150px;"></canvas>
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
6. ctx.beginPath();
7. ctx.moveTo(30, 30);
8. ctx.lineTo(110, 30);
9. ctx.lineTo(70, 90);
10. ctx.closePath();
11. ctx.stroke();
12. }
13. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/90/v3/X4MF3ECcT4Ozk0OlVffBqA/zh-cn_image_0000002568919522.png?HW-CC-KV=V1&HW-CC-Date=20260511T040406Z&HW-CC-Expire=86400&HW-CC-Sign=3E6A10A099ADE90DE791357EED05A0B64DB93C57A28B567FF750B89D0AD8AA8F)

### createPattern

PhonePC/2in1TabletTVWearable

createPattern(image: Image, repetition: string): Object

通过指定图像和重复方式创建图片填充的模板。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

展开

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| image | Image | 是 | 图源对象，具体参考[Image对象](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-canvas-image)。 |
| repetition | string | 是 | 设置图像重复的方式，取值为：'repeat'、'repeat-x'、 'repeat-y'、'no-repeat'。 |

**返回值：**

展开

| 类型 | 说明 |
| --- | --- |
| Object | 指定图像填充的Pattern对象。 |

**示例：**

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div>
3. <canvas ref="canvas" style="width: 1000px; height: 1000px;"></canvas>
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
6. var img = new Image();
7. // 'common/images/example.jpg'需要替换为开发者所需的图像资源文件
8. img.src = 'common/images/example.jpg';
9. var pat = ctx.createPattern(img, 'repeat');
10. ctx.fillStyle = pat;
11. ctx.fillRect(0, 0, 500, 500);
12. }
13. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/db/v3/hQOQtyeORmq3QQDpgG93ig/zh-cn_image_0000002599479065.png?HW-CC-KV=V1&HW-CC-Date=20260511T040406Z&HW-CC-Expire=86400&HW-CC-Sign=99D4E72C9451D420DC1BACB667874F34C0EEC55743AB4672E0D5CDC5A9A1DC62)

### bezierCurveTo

PhonePC/2in1TabletTVWearable

bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void

创建三次贝塞尔曲线的路径。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

展开

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| cp1x | number | 是 | 第一个贝塞尔参数的x坐标值。  单位：vp |
| cp1y | number | 是 | 第一个贝塞尔参数的y坐标值。  单位：vp |
| cp2x | number | 是 | 第二个贝塞尔参数的x坐标值。  单位：vp |
| cp2y | number | 是 | 第二个贝塞尔参数的y坐标值。  单位：vp |
| x | number | 是 | 路径结束时的x坐标值。  单位：vp |
| y | number | 是 | 路径结束时的y坐标值。  单位：vp |

**示例：**

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div>
3. <canvas ref="canvas" style="width: 200px; height: 150px;"></canvas>
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
6. ctx.beginPath();
7. ctx.moveTo(10, 10);
8. ctx.bezierCurveTo(20, 100, 200, 100, 200, 20);
9. ctx.stroke();
10. }
11. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fc/v3/WPo1mQa5S66mlrEqLsPwHw/zh-cn_image_0000002568759874.png?HW-CC-KV=V1&HW-CC-Date=20260511T040406Z&HW-CC-Expire=86400&HW-CC-Sign=BCA0AEDC17005EF11CD5E3A1936FAE9B46AB2DEAF252670F6C32B37ACF073A55)

### quadraticCurveTo

PhonePC/2in1TabletTVWearable

quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void

创建二次贝塞尔曲线的路径。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

展开

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| cpx | number | 是 | 贝塞尔参数的x坐标值。  单位：vp |
| cpy | number | 是 | 贝塞尔参数的y坐标值。  单位：vp |
| x | number | 是 | 路径结束时的x坐标值。  单位：vp |
| y | number | 是 | 路径结束时的y坐标值。  单位：vp |

**示例：**

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div>
3. <canvas ref="canvas" style="width: 200px; height: 150px; "></canvas>
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
6. ctx.beginPath();
7. ctx.moveTo(20, 20);
8. ctx.quadraticCurveTo(100, 100, 200, 20);
9. ctx.stroke();
10. }
11. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2b/v3/ojyjRHc6RHOTzG1Pfcec3g/zh-cn_image_0000002599359117.png?HW-CC-KV=V1&HW-CC-Date=20260511T040406Z&HW-CC-Expire=86400&HW-CC-Sign=CB2839F98058826B04DFEEFA1E6A5473989841DFE24BB334346BE797D38A4019)

### arc

PhonePC/2in1TabletTVWearable

arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, counterclockwise?: boolean): void

绘制弧线路径。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

展开

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| x | number | 是 | 弧线圆心的x坐标值。  单位：vp |
| y | number | 是 | 弧线圆心的y坐标值。  单位：vp |
| radius | number | 是 | 弧线的圆半径。  单位：vp |
| startAngle | number | 是 | 弧线的起始弧度。  单位：vp |
| endAngle | number | 是 | 弧线的终止弧度。  单位：vp |
| counterclockwise | boolean | 否 | 是否逆时针绘制圆弧，true为逆时针，false为顺时针。  默认值：false |

**示例：**

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div>
3. <canvas ref="canvas" style="width: 200px; height: 150px;"></canvas>
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
6. ctx.beginPath();
7. ctx.arc(100, 75, 50, 0, 6.28);
8. ctx.stroke();
9. }
10. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d4/v3/KdZEBN4SRliMLpDEs2uCBw/zh-cn_image_0000002568919524.png?HW-CC-KV=V1&HW-CC-Date=20260511T040406Z&HW-CC-Expire=86400&HW-CC-Sign=A5D48DA949154FA3B08B955CEF68A32C6C1AB7C686C84C307A06E29B850C47E3)

### arcTo

PhonePC/2in1TabletTVWearable

arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void

依据圆弧经过的点和圆弧半径创建圆弧路径。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

展开

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| x1 | number | 是 | 圆弧经过的第一个点的x坐标值。  单位：vp |
| y1 | number | 是 | 圆弧经过的第一个点的y坐标值。  单位：vp |
| x2 | number | 是 | 圆弧经过的第二个点的x坐标值。  单位：vp |
| y2 | number | 是 | 圆弧经过的第二个点的y坐标值。  单位：vp |
| radius | number | 是 | 圆弧的圆半径值。  单位：vp |

**示例：**

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div>
3. <canvas ref="canvas" style="width: 200px; height: 150px;"></canvas>
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
6. ctx.moveTo(100, 20);
7. ctx.arcTo(150, 20, 150, 70, 50); // Create an arc
8. ctx.stroke();
9. }
10. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f6/v3/1iSd-S0jR2euVTJMQknyPg/zh-cn_image_0000002599479067.png?HW-CC-KV=V1&HW-CC-Date=20260511T040406Z&HW-CC-Expire=86400&HW-CC-Sign=2828FA65C415EFE9981C04DB7E62DF324E518425C89ED7D73CDD3E6395A54D9E)

### ellipse

PhonePC/2in1TabletTVWearable

ellipse(x: number, y: number, radiusX: number, radiusY: number, rotation: number, startAngle: number, endAngle: number, counterclockwise?: number): void

在规定的矩形区域绘制一个椭圆。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

展开

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| x | number | 是 | 椭圆圆心的x轴坐标。  单位：vp |
| y | number | 是 | 椭圆圆心的y轴坐标。  单位：vp |
| radiusX | number | 是 | 椭圆x轴的半径长度。  单位：vp |
| radiusY | number | 是 | 椭圆y轴的半径长度。  单位：vp |
| rotation | number | 是 | 椭圆的旋转角度，单位为弧度。  单位：vp |
| startAngle | number | 是 | 椭圆绘制的起始点角度，以弧度表示。  单位：vp |
| endAngle | number | 是 | 椭圆绘制的结束点角度，以弧度表示。  单位：vp |
| counterclockwise | number | 否 | 是否以逆时针方向绘制椭圆，0为顺时针，1为逆时针。其它数值均按默认值处理。  单位：vp  默认值：0 |

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
6. ctx.beginPath();
7. ctx.ellipse(200, 200, 50, 100, Math.PI * 0.25, Math.PI * 0.5, Math.PI, 1);
8. ctx.stroke();
9. }
10. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3e/v3/lVg9lyw3TSuFSeHaWq63pw/zh-cn_image_0000002568759876.png?HW-CC-KV=V1&HW-CC-Date=20260511T040406Z&HW-CC-Expire=86400&HW-CC-Sign=077C40B7D3D625E1AEB55E24F48C148BA0E3C171CC995CE06A826C803B14F291)

### rect

PhonePC/2in1TabletTVWearable

rect(x: number, y: number, width: number, height: number): void

创建矩形路径。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

展开

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| x | number | 是 | 指定矩形的左上角x坐标值。  单位：vp |
| y | number | 是 | 指定矩形的左上角y坐标值。  单位：vp |
| width | number | 是 | 指定矩形的宽度。  单位：vp |
| height | number | 是 | 指定矩形的高度。  单位：vp |

**示例：**

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div>
3. <canvas ref="canvas" style="width: 200px; height: 150px; "></canvas>
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
6. ctx.rect(20, 20, 100, 100); // Create a 100*100 rectangle at (20, 20)
7. ctx.stroke(); // Draw it
8. }
9. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/92/v3/Nn35Qnp6R16o2XrCHrcbLA/zh-cn_image_0000002599359119.png?HW-CC-KV=V1&HW-CC-Date=20260511T040406Z&HW-CC-Expire=86400&HW-CC-Sign=2B66C7DC804D5161C87D304262EE296273BA62E2F7462CE3AF9C534A47080936)

### fill

PhonePC/2in1TabletTVWearable

fill(): void

对封闭路径进行填充。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**示例：**

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div>
3. <canvas ref="canvas" style="width: 200px; height: 150px;"></canvas>
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
6. ctx.rect(20, 20, 100, 100); // Create a 100*100 rectangle at (20, 20)
7. ctx.fill(); // Draw it in default setting
8. }
9. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7f/v3/71mukJPHSnGu8gagqvVL4A/zh-cn_image_0000002568919526.png?HW-CC-KV=V1&HW-CC-Date=20260511T040406Z&HW-CC-Expire=86400&HW-CC-Sign=A10724AC67E552AEA6290E41E3CA9944514BE57286CC26954EE3228AA2C4032C)

### clip

PhonePC/2in1TabletTVWearable

clip(): void

设置当前路径为剪切路径。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**示例：**

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div>
3. <canvas ref="canvas" style="width: 500px; height: 500px;"></canvas>
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
6. ctx.rect(100, 100, 200, 200);
7. ctx.stroke();
8. ctx.clip();
9. // Draw red rectangle after clip
10. ctx.fillStyle = "rgb(255,0,0)";
11. ctx.fillRect(100, 100, 150, 150);
12. }
13. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/44/v3/5Q45ClokTTu5MQ5-l2ttWw/zh-cn_image_0000002599479069.png?HW-CC-KV=V1&HW-CC-Date=20260511T040406Z&HW-CC-Expire=86400&HW-CC-Sign=79EEA708EAA529456740984BB6D6BA9E19C24E0E62B541C73A1A54D279BADD3B)

### rotate

PhonePC/2in1TabletTVWearable

rotate(rotate: number): void

针对当前坐标轴进行顺时针旋转。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

展开

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| rotate | number | 是 | 设置顺时针旋转的弧度值，可以通过Math.PI / 180将角度转换为弧度值。  单位：vp |

**示例：**

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div>
3. <canvas ref="canvas" style="width: 200px; height: 150px;"></canvas>
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
6. ctx.rotate(45 * Math.PI / 180); // Rotate the rectangle 45 degrees
7. ctx.fillRect(70, 20, 50, 50);
8. }
9. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/39/v3/0FtcE7HXS3-MtORqC7plOw/zh-cn_image_0000002568759878.png?HW-CC-KV=V1&HW-CC-Date=20260511T040406Z&HW-CC-Expire=86400&HW-CC-Sign=5E9CDA0C85E38FB14AD45DD9C0AE60342FFEAF98397988F7A293763D4C05C66E)

### scale

PhonePC/2in1TabletTVWearable

scale(x: number, y: number): void

设置canvas画布的缩放变换属性，后续的绘制操作将按照缩放比例进行缩放。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

展开

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| x | number | 是 | 设置水平方向的缩放值。  单位：vp |
| y | number | 是 | 设置垂直方向的缩放值。  单位：vp |

**示例：**

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div>
3. <canvas ref="canvas" style="width: 200px; height: 150px;"></canvas>
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
6. ctx.strokeRect(10, 10, 25, 25);
7. ctx.scale(2, 2);// Scale to 200%
8. ctx.strokeRect(10, 10, 25, 25);
9. }
10. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/75/v3/n79imkfQSq-CJ_mtFvzYsg/zh-cn_image_0000002599359121.png?HW-CC-KV=V1&HW-CC-Date=20260511T040406Z&HW-CC-Expire=86400&HW-CC-Sign=8727B2AC9DE238985DE25EEC0B756C59AD213463177A0D7C1D278B24427F6B26)

### transform

PhonePC/2in1TabletTVWearable

transform(scaleX: number, skewX: number, skewY: number, scaleY: number, translateX: number, translateY: number): void

transform方法对应一个变换矩阵，想对一个图形进行变化的时候，只要设置此变换矩阵相应的参数，对图形的各个定点的坐标分别乘以这个矩阵，就能得到新的定点的坐标。矩阵变换效果可叠加。

说明

变换后的坐标计算方式（x和y为变换前坐标，x'和y'为变换后坐标）：

* x' = scaleX \* x + skewY \* y + translateX
* y' = skewX \* x + scaleY \* y + translateY

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

展开

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| scaleX | number | 是 | 指定水平缩放值。  单位：vp |
| skewX | number | 是 | 指定水平倾斜值。  单位：vp |
| skewY | number | 是 | 指定垂直倾斜值。  单位：vp |
| scaleY | number | 是 | 指定垂直缩放值。  单位：vp |
| translateX | number | 是 | 指定水平移动值。  单位：vp |
| translateY | number | 是 | 指定垂直移动值。  单位：vp |

**示例：**

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div>
3. <canvas ref="canvas" style="width: 200px; height: 150px;"></canvas>
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
6. ctx.fillStyle = 'rgb(0,0,0)';
7. ctx.fillRect(0, 0, 100, 100);
8. ctx.transform(1, 0.5, -0.5, 1, 10, 10);
9. ctx.fillStyle = 'rgb(255,0,0)';
10. ctx.fillRect(0, 0, 100, 100);
11. ctx.transform(1, 0.5, -0.5, 1, 10, 10);
12. ctx.fillStyle = 'rgb(0,0,255)';
13. ctx.fillRect(0, 0, 100, 100);
14. }
15. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f9/v3/k52vPxKfQgOdOAPxvDU9Fw/zh-cn_image_0000002568919528.png?HW-CC-KV=V1&HW-CC-Date=20260511T040406Z&HW-CC-Expire=86400&HW-CC-Sign=259304989D712A1A1E45DA0CDCC9B15DD1B645D4F19A8B2F375002F5EB9F334A)

### setTransform

PhonePC/2in1TabletTVWearable

setTransform(scaleX: number, skewX: number, skewY: number, scaleY: number, translateX: number, translateY: number): void

setTransform方法使用的参数和transform()方法相同，但setTransform()方法会重置现有的变换矩阵并创建新的变换矩阵。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

展开

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| scaleX | number | 是 | 指定水平缩放值。  单位：vp |
| skewX | number | 是 | 指定水平倾斜值。  单位：vp |
| skewY | number | 是 | 指定垂直倾斜值。  单位：vp |
| scaleY | number | 是 | 指定垂直缩放值。  单位：vp |
| translateX | number | 是 | 指定水平移动值。  单位：vp |
| translateY | number | 是 | 指定垂直移动值。  单位：vp |

**示例：**

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div>
3. <canvas ref="canvas" style="width: 200px; height: 150px;"></canvas>
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
6. ctx.fillStyle = 'rgb(255,0,0)';
7. ctx.fillRect(0, 0, 100, 100);
8. ctx.setTransform(1,0.5, -0.5, 1, 10, 10);
9. ctx.fillStyle = 'rgb(0,0,255)';
10. ctx.fillRect(0, 0, 100, 100);
11. }
12. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b0/v3/W_Exxvi0QGe_QsKXZaWIog/zh-cn_image_0000002599479071.png?HW-CC-KV=V1&HW-CC-Date=20260511T040406Z&HW-CC-Expire=86400&HW-CC-Sign=2832B8D5294917C0B48910CE4809639231D3FBBA8F463E53EF1A671E9DCD0F9D)

### translate

PhonePC/2in1TabletTVWearable

translate(x: number, y: number): void

移动当前坐标系的原点。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

展开

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| x | number | 是 | 设置水平平移量。  单位：vp |
| y | number | 是 | 设置竖直平移量。  单位：vp |

**示例：**

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div>
3. <canvas ref="canvas" style="width: 200px; height: 150px;"></canvas>
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
6. ctx.fillRect(10, 10, 50, 50);
7. ctx.translate(70, 70);
8. ctx.fillRect(10, 10, 50, 50);
9. }
10. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d4/v3/g3O3OQatQZq1dD1hMVlGFQ/zh-cn_image_0000002568759880.png?HW-CC-KV=V1&HW-CC-Date=20260511T040406Z&HW-CC-Expire=86400&HW-CC-Sign=A770B71A278A10CCD8531125431C9BB598CA0B3EDD860BC6A5D082567F6C8437)

### createPath2D6+

PhonePC/2in1TabletTVWearable

createPath2D(path: Path2D, cmds: string): Path2D

创建一个Path2D对象。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

展开

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| path | Path2D | 是 | Path2D对象。 |
| cmds | string | 是 | SVG的Path描述字符串。 |

**返回值：**

[Path2D对象](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-canvas-path2d)

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
6. var path1 = ctx.createPath2D();
7. path1.moveTo(100, 100);
8. path1.lineTo(200, 100);
9. path1.lineTo(100, 200);
10. path1.closePath();
11. ctx.stroke(path1);
12. var path2 = ctx.createPath2D("M150 150 L50 250 L250 250 Z");
13. ctx.stroke(path2);
14. var path3 = ctx.createPath2D(path2);
15. ctx.stroke(path3);
16. }
17. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f/v3/emyqkcBsTAWaQYewUZ-A5Q/zh-cn_image_0000002599359123.png?HW-CC-KV=V1&HW-CC-Date=20260511T040406Z&HW-CC-Expire=86400&HW-CC-Sign=265BE1301B2C5665ABC19A83E437675DE5E9190EA9B813D1D04195DFD8450DA1)

### drawImage

PhonePC/2in1TabletTVWearable

drawImage(image: Image | PixelMap, sx: number, sy: number, sWidth: number, sHeight: number, dx: number, dy: number, dWidth: number, dHeight: number):void

进行图像绘制。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

展开

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| image | Image | PixelMap9+ | 是 | 图片资源，请参考[Image对象](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-canvas-image) 或[PixelMap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-pixelmap)对象。 |
| sx | number | 是 | 裁切源图像时距离源图像左上角的x坐标值。  单位：vp |
| sy | number | 是 | 裁切源图像时距离源图像左上角的y坐标值。  单位：vp |
| sWidth | number | 是 | 裁切源图像时需要裁切的宽度。  单位：vp |
| sHeight | number | 是 | 裁切源图像时需要裁切的高度。  单位：vp |
| dx | number | 是 | 绘制区域左上角在x轴的位置。  单位：vp |
| dy | number | 是 | 绘制区域左上角在y 轴的位置。  单位：vp |
| dWidth | number | 是 | 绘制区域的宽度。  单位：vp |
| dHeight | number | 是 | 绘制区域的高度。  单位：vp |

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
4. var test = this.$refs.canvas;
5. var ctx = test.getContext('2d');
6. var img = new Image();
7. // 'common/image/test.jpg'需要替换为开发者所需的图像资源文件
8. img.src = 'common/image/test.jpg';
9. ctx.drawImage(img, 0, 0, 200, 200, 10, 10, 200, 200);
10. }
11. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/50/v3/IWFfB7JDQ5SaGm65gqloHw/zh-cn_image_0000002568919530.png?HW-CC-KV=V1&HW-CC-Date=20260511T040406Z&HW-CC-Expire=86400&HW-CC-Sign=3D1CBEC68323CDE0D71785A0AB7178C5319688747825A9221305E815F3FB0CAC)

### restore

PhonePC/2in1TabletTVWearable

restore(): void

对保存的绘图上下文进行恢复。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**示例：**

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div>
3. <canvas ref="canvas" style="width: 200px; height: 150px; background-color: #ffff00;"></canvas>
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
6. ctx.restore();
7. }
8. }
```

### save

PhonePC/2in1TabletTVWearable

save(): void

对当前的绘图上下文进行保存。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**示例：**

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div>
3. <canvas ref="canvas" style="width: 200px; height: 150px; background-color: #ffff00;"></canvas>
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
6. ctx.save();
7. }
8. }
```

### createLinearGradient6+

PhonePC/2in1TabletTVWearable

createLinearGradient(x0: number, y0: number, x1: number, y1: number): Object

创建一个线性渐变色，返回CanvasGradient对象，请参考[CanvasGradient对象](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-canvas-canvasgradient)。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

展开

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| x0 | number | 是 | 起点的x轴坐标。  单位：vp |
| y0 | number | 是 | 起点的y轴坐标。  单位：vp |
| x1 | number | 是 | 终点的x轴坐标。  单位：vp |
| y1 | number | 是 | 终点的y轴坐标。  单位：vp |

**返回值：**

展开

| 类型 | 说明 |
| --- | --- |
| Object | 返回创建的CanvasGradient对象。 |

**示例：**

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div>
3. <canvas ref="canvas" style="width: 500px; height: 500px; background-color: #ffff00;"></canvas>
4. <input type="button" style="width: 180px; height: 60px;" value="fillStyle" onclick="handleClick" />
5. </div>
```

收起

自动换行

深色代码主题

复制

```
1. // xxx.js
2. export default {
3. handleClick() {
4. const el = this.$refs.canvas;
5. const ctx = el.getContext('2d');
6. // Linear gradient: start(50,0) end(300,100)
7. var gradient = ctx.createLinearGradient(50,0, 300,100);
8. // Add three color stops
9. gradient.addColorStop(0.0, '#ff0000');
10. gradient.addColorStop(0.5, '#ffffff');
11. gradient.addColorStop(1.0, '#00ff00');
12. // Set the fill style and draw a rectangle
13. ctx.fillStyle = gradient;
14. ctx.fillRect(0, 0, 500, 500);
15. }
16. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/0b/v3/HhvQpzjnRO2PH0fRty_dXA/zh-cn_image_0000002599479073.png?HW-CC-KV=V1&HW-CC-Date=20260511T040406Z&HW-CC-Expire=86400&HW-CC-Sign=871D8015179807B2C2E1F90F91A7B4E0F4A8461794B41CAD505275B8557FD3F5)

### createRadialGradient6+

PhonePC/2in1TabletTVWearable

createRadialGradient(x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): Object

创建一个径向渐变色，返回CanvasGradient对象，请参考CanvasGradient。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

展开

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| x0 | number | 是 | 起始圆的x轴坐标。  单位：vp |
| y0 | number | 是 | 起始圆的y轴坐标。  单位：vp |
| r0 | number | 是 | 起始圆的半径。必须是非负且有限的。  单位：vp |
| x1 | number | 是 | 终点圆的x轴坐标。  单位：vp |
| y1 | number | 是 | 终点圆的y轴坐标。  单位：vp |
| r1 | number | 是 | 终点圆的半径。必须为非负且有限的。  单位：vp |

**返回值：**

展开

| 类型 | 说明 |
| --- | --- |
| Object | 返回创建的CanvasGradient对象。 |

**示例：**

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div>
3. <canvas ref="canvas" style="width: 500px; height: 500px; background-color: #ffff00;"></canvas>
4. <input type="button" style="width: 180px; height: 60px;" value="fillStyle" onclick="handleClick" />
5. </div>
```

收起

自动换行

深色代码主题

复制

```
1. // xxx.js
2. export default {
3. handleClick() {
4. const el = this.$refs.canvas;
5. const ctx = el.getContext('2d');
6. // Radial gradient: inner circle(200,200,r:50) outer circle(200,200,r:200)
7. var gradient = ctx.createRadialGradient(200,200,50, 200,200,200);
8. // Add three color stops
9. gradient.addColorStop(0.0, '#ff0000');
10. gradient.addColorStop(0.5, '#ffffff');
11. gradient.addColorStop(1.0, '#00ff00');
12. // Set the fill style and draw a rectangle
13. ctx.fillStyle = gradient;
14. ctx.fillRect(0, 0, 500, 500);
15. }
16. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/86/v3/eHF2JwSKRIekjFjXwgkmng/zh-cn_image_0000002568759882.png?HW-CC-KV=V1&HW-CC-Date=20260511T040406Z&HW-CC-Expire=86400&HW-CC-Sign=6D682A0C86382C2E4F1D9D84554C4DD54DA5DFAA1A8CF1B2E74DD3E783064FA9)

### createImageData

PhonePC/2in1TabletTVWearable

createImageData(width: number, height: number): ImageData

创建新的、空白的、指定大小的ImageData对象，请参考[ImageData对象](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-canvas-imagedata)。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

展开

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| width | number | 是 | ImageData的宽度。  单位：vp |
| height | number | 是 | ImageData的高度。  单位：vp |

**返回值：**

展开

| 类型 | 说明 |
| --- | --- |
| [ImageData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-canvas-imagedata) | 返回创建的ImageData对象。 |

**示例：**

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div>
3. <canvas ref="canvas" style="width: 200px; height: 150px; background-color: #ffff00;"></canvas>
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
6. var imageData = ctx.createImageData(50, 100);  // Create ImageData with 50px width and 100px height
7. }
8. }
```

### createImageData

PhonePC/2in1TabletTVWearable

createImageData(imageData: ImageData): ImageData

根据一个现有的ImageData对象，重新创建一个宽、高相同但不会复制图像数据的ImageData对象，请参考[ImageData对象](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-canvas-imagedata)。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

展开

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| imageData | [ImageData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-canvas-imagedata) | 是 | 复制现有的ImageData对象。 |

**返回值：**

展开

| 类型 | 说明 |
| --- | --- |
| [ImageData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-canvas-imagedata) | 返回创建的ImageData对象。 |

**示例：**

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div>
3. <canvas ref="canvas" style="width: 200px; height: 150px; background-color: #ffff00;"></canvas>
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
6. var imageData = ctx.createImageData(50, 100);  // Create ImageData with 50px width and 100px height
7. var newImageData = ctx.createImageData(imageData);  // Create ImageData using the input imageData
8. }
9. }
```

### getImageData

PhonePC/2in1TabletTVWearable

getImageData(sx: number, sy: number, sw: number, sh: number): ImageData

以当前canvas指定区域内的像素创建[ImageData对象](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-canvas-imagedata)。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

展开

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sx | number | 是 | 需要输出的区域的左上角x坐标。  单位：vp |
| sy | number | 是 | 需要输出的区域的左上角y坐标。  单位：vp |
| sw | number | 是 | 需要输出的区域的宽度。  单位：vp |
| sh | number | 是 | 需要输出的区域的高度。  单位：vp |

**返回值：**

展开

| 类型 | 说明 |
| --- | --- |
| [ImageData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-canvas-imagedata) | 返回包含指定区域像素的ImageData对象。 |

**示例：**

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div>
3. <canvas id="getImageData" style="width: 200px; height: 150px; background-color: #ffff00;"></canvas>
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
4. const test = this.$element('getImageData')
5. const ctx = test.getContext('2d');
6. var imageData = ctx.getImageData(0, 0, 280, 300);
7. }
8. }
```

### putImageData

PhonePC/2in1TabletTVWearable

putImageData(imageData: ImageData, dx: number, dy: number, dirtyX: number, dirtyY: number, dirtyWidth: number, dirtyHeight: number): void

使用ImageData数据裁剪后填充至新的矩形区域。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

展开

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| imageData | [ImageData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-canvas-imagedata) | 是 | 包含像素值的ImageData对象。 |
| dx | number | 是 | 填充区域在x轴方向的偏移量。  单位：vp |
| dy | number | 是 | 填充区域在y轴方向的偏移量。  单位：vp |
| dirtyX | number | 是 | 源图像数据矩形裁切范围左上角距离源图像左上角的x轴偏移量。  单位：vp |
| dirtyY | number | 是 | 源图像数据矩形裁切范围左上角距离源图像左上角的y轴偏移量。  单位：vp |
| dirtyWidth | number | 是 | 源图像数据矩形裁切范围的宽度。  单位：vp |
| dirtyHeight | number | 是 | 源图像数据矩形裁切范围的高度。  单位：vp |

**示例：**

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div>
3. <canvas id="putImageData" style="width: 200px; height: 150px; background-color: #D5D5D5;"></canvas>
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
4. const test = this.$element('putImageData')
5. const ctx = test.getContext('2d');
6. var imgData = ctx.createImageData(100, 100);
7. for (var i = 0; i < imgData.data.length; i += 4) {
8. imgData.data[i + 0] = 39;
9. imgData.data[i + 1] = 135;
10. imgData.data[i + 2] = 217;
11. imgData.data[i + 3] = 255;
12. }
13. ctx.putImageData(imgData, 10, 10, 0, 0, 100, 50);
14. }
15. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/aa/v3/LM9hEDTfS9aA6Cxh82s-OA/zh-cn_image_0000002599359125.png?HW-CC-KV=V1&HW-CC-Date=20260511T040406Z&HW-CC-Expire=86400&HW-CC-Sign=53370BFF01C9D038D1072963215FBEBF19B137F5E8D03008771164E6BA47AB0A)

### putImageData

PhonePC/2in1TabletTVWearable

putImageData(imageData: ImageData, dx: number, dy: number): void

使用ImageData数据填充新的矩形区域。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

展开

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| imageData | [ImageData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-canvas-imagedata) | 是 | 包含像素值的ImageData对象。 |
| dx | number | 是 | 填充区域在x轴方向的偏移量。  单位：vp |
| dy | number | 是 | 填充区域在y轴方向的偏移量。  单位：vp |

**示例：**

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div>
3. <canvas id="putImageData" style="width: 200px; height: 150px; background-color: #ffff00;"></canvas>
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
4. const test = this.$element('putImageData')
5. const ctx = test.getContext('2d');
6. var imgData = ctx.createImageData(100, 100);
7. for (var i = 0; i < imgData.data.length; i += 4) {
8. imgData.data[i + 0] = 255;
9. imgData.data[i + 1] = 0;
10. imgData.data[i + 2] = 0;
11. imgData.data[i + 3] = 255;
12. }
13. ctx.putImageData(imgData, 10, 10);
14. }
15. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/76/v3/OHfSrc4XT-CfrEr2-oANdA/zh-cn_image_0000002568919532.png?HW-CC-KV=V1&HW-CC-Date=20260511T040406Z&HW-CC-Expire=86400&HW-CC-Sign=F97D103B7CEFEDD664380AEACC7ABE700458ABE94242A4C5CEF4ADFE6DFFBEB5)

### getPixelMap9+

PhonePC/2in1TabletTVWearable

getPixelMap(sx: number, sy: number, sw: number, sh: number): PixelMap

获取用当前canvas指定区域内的像素创建的PixelMap对象。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

展开

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sx | number | 是 | 指定区域的左上角x坐标。  单位：vp |
| sy | number | 是 | 指定区域的左上角y坐标。  单位：vp |
| sw | number | 是 | 指定区域的宽度。  单位：vp |
| sh | number | 是 | 指定区域的高度。  单位：vp |

**返回值：**

展开

| 类型 | 说明 |
| --- | --- |
| [PixelMap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-pixelmap) | 返回包含指定区域像素的PixelMap对象。 |

**示例：**

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div>
3. <canvas id="canvasId" style="width: 200px; height: 150px; background-color: #ffff00;"></canvas>
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
4. const test = this.$element('canvasId')
5. const ctx = test.getContext('2d');
6. var pixelMap = ctx.getPixelMap(0, 0, 280, 300);
7. }
8. }
```

### setLineDash

PhonePC/2in1TabletTVWearable

setLineDash(segments: Array): void

设置画布的虚线样式。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

展开

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| segments | Array | 是 | 作为数组用来描述线段如何交替和间距长度。 |

**示例：**

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div>
3. <canvas ref="canvas" style="width: 200px; height: 150px; background-color: #ffff00;"></canvas>
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
6. ctx.arc(100, 75, 50, 0, 6.28);
7. ctx.setLineDash([10,20]);
8. ctx.stroke();
9. }
10. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5d/v3/MsexB0B8Tyu497Cx9T-KGw/zh-cn_image_0000002599479075.png?HW-CC-KV=V1&HW-CC-Date=20260511T040406Z&HW-CC-Expire=86400&HW-CC-Sign=D34C69773068AB9B245FBE6C6A8D87FF131545FCE07A1AD72170904401CBC6C2)

### getLineDash

PhonePC/2in1TabletTVWearable

getLineDash(): Array

获得当前画布的虚线样式。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**返回值：**

展开

| 类型 | 说明 |
| --- | --- |
| Array | 返回数组，该数组用来描述线段如何交替和间距长度。 |

**示例：**

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div>
3. <canvas ref="canvas" style="width: 200px; height: 150px; "></canvas>
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
6. var info = ctx.getLineDash();
7. }
8. }
```

### transferFromImageBitmap7+

PhonePC/2in1TabletTVWearable

transferFromImageBitmap(bitmap: ImageBitmap): void

显示给定的[ImageBitmap对象](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-canvas-imagebitmap)。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

展开

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bitmap | [ImageBitmap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-canvas-imagebitmap) | 是 | 待显示的ImageBitmap对象。 |

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
6. var canvas = this.$refs.canvas.getContext('2d');
7. var offscreen = new OffscreenCanvas(500,500);
8. var offscreenCanvasCtx = offscreen.getContext("2d");
9. offscreenCanvasCtx.fillRect(0, 0, 200, 200);

11. var bitmap = offscreen.transferToImageBitmap();
12. canvas.transferFromImageBitmap(bitmap);
13. }
14. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/92/v3/H9BQH6H4R4G0skoX_4_9zw/zh-cn_image_0000002568759884.png?HW-CC-KV=V1&HW-CC-Date=20260511T040406Z&HW-CC-Expire=86400&HW-CC-Sign=4BFEFB8267AE9D055169A3203922E98BF47E2B3AAB3CF50AE7225C2A4315FD22)