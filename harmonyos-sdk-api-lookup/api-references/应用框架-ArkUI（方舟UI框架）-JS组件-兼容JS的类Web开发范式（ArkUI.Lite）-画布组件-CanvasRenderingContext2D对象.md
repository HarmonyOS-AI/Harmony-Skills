使用CanvasRenderingContext2D在canvas画布组件上进行绘制，绘制对象可以是矩形、文本。

**示例：**

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div>
3. <canvas ref="canvas1" style="width: 200px; height: 150px; background-color: #ffff00;"></canvas>
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
4. const el = this.$refs.canvas1;
5. const ctx = el.getContext('2d');
6. ctx.beginPath();
7. ctx.arc(100, 75, 50, 0, 6.28);
8. ctx.stroke();
9. },
10. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2b/v3/TLwQ0E4SQReHvTA7CbzkTQ/zh-cn_image_0000002568760070.png?HW-CC-KV=V1&HW-CC-Date=20260511T040746Z&HW-CC-Expire=86400&HW-CC-Sign=35BFA62FC9EC06B79CB8E281E8A5BE6B17D18F7B58710B6C6852D750B139055A)

## fillRect()

PhonePC/2in1TabletTVWearableLite Wearable

填充一个矩形。

**参数：**

展开

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| x | number | 指定矩形左上角点的x坐标。 |
| y | number | 指定矩形左上角点的y坐标。 |
| width | number | 指定矩形的宽度。 |
| height | number | 指定矩形的高度。 |

**示例：**

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1d/v3/2hPg-z85SrW9ycpizKOEVQ/zh-cn_image_0000002599359311.png?HW-CC-KV=V1&HW-CC-Date=20260511T040746Z&HW-CC-Expire=86400&HW-CC-Sign=DDB91F31C75F888A10451218F690D4824E8C7FFB37ABA5E848A48C9DD1F28D2B)

收起

自动换行

深色代码主题

复制

```
1. ctx.fillRect(20, 20, 200, 150);
```

## fillStyle

PhonePC/2in1TabletTVWearableLite Wearable

指定绘制的填充色。

**参数：**

展开

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| color | <color> | 设置填充区域的颜色。 |

**示例：**

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/96/v3/0WZGp9igRImQsZDPG2zWRw/zh-cn_image_0000002568919718.png?HW-CC-KV=V1&HW-CC-Date=20260511T040746Z&HW-CC-Expire=86400&HW-CC-Sign=E4983ABF0E923E72D7BC17A94A4E9A67EE99E445E5636E85687D8EBF2855A91A)

收起

自动换行

深色代码主题

复制

```
1. ctx.fillStyle = '#0000ff';
2. ctx.fillRect(20, 20, 150, 100);
```

## strokeRect()

PhonePC/2in1TabletTVWearableLite Wearable

绘制具有边框的矩形，矩形内部不填充。

**参数：**

展开

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| x | number | 指定矩形的左上角x坐标。 |
| y | number | 指定矩形的左上角y坐标。 |
| width | number | 指定矩形的宽度。 |
| height | number | 指定矩形的高度。 |

**示例：**

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/55/v3/FZIL8wIcTeWZ2qDREDYbkg/zh-cn_image_0000002599479261.png?HW-CC-KV=V1&HW-CC-Date=20260511T040746Z&HW-CC-Expire=86400&HW-CC-Sign=845BBF69802D333CD1BA554EA39244A6F0F0D90F843B210F00585C0D3ABB721E)

收起

自动换行

深色代码主题

复制

```
1. ctx.strokeRect(30, 30, 200, 150);
```

## fillText()

PhonePC/2in1TabletTVWearableLite Wearable

绘制填充类文本。

**参数：**

展开

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| text | string | 需要绘制的文本内容。 |
| x | number | 需要绘制的文本的左下角x坐标。 |
| y | number | 需要绘制的文本的左下角y坐标。 |

**示例：**

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1/v3/HspXN4xRQYO7rJXvTrhTYw/zh-cn_image_0000002568760072.png?HW-CC-KV=V1&HW-CC-Date=20260511T040746Z&HW-CC-Expire=86400&HW-CC-Sign=7E27CCD647CCB95005D0869CDD5BAF0D16E126FC2BADDF5C0E691D3800CF5C0A)

收起

自动换行

深色代码主题

复制

```
1. ctx.font = '35px sans-serif';
2. ctx.fillText("Hello World!", 20, 60);
```

## lineWidth

PhonePC/2in1TabletTVWearableLite Wearable

指定绘制线条的宽度值。

**参数：**

展开

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| lineWidth | number | 设置绘制线条的宽度。 |

**示例：**

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ec/v3/ScpfoMROTsObyqSlHdZ2cw/zh-cn_image_0000002599359313.png?HW-CC-KV=V1&HW-CC-Date=20260511T040746Z&HW-CC-Expire=86400&HW-CC-Sign=CCF567DCC59388FD2B2B7A726346285C395D95169A6A813C9A2044B4F3382FDA)

收起

自动换行

深色代码主题

复制

```
1. ctx.lineWidth = 5;
2. ctx.strokeRect(25, 25, 85, 105);
```

## strokeStyle

PhonePC/2in1TabletTVWearableLite Wearable

设置描边的颜色。

**参数：**

展开

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| color | <color> | 指定描边使用的颜色 |

**示例：**

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/30/v3/Az75ZqYdQkWDZdXLAt93bg/zh-cn_image_0000002568919720.png?HW-CC-KV=V1&HW-CC-Date=20260511T040746Z&HW-CC-Expire=86400&HW-CC-Sign=7283AA99618F97179F873EB3E8746ED219F8A5D0E49B700393F4FC69A91303FE)

收起

自动换行

深色代码主题

复制

```
1. ctx.lineWidth = 10;
2. ctx.strokeStyle = '#0000ff';
3. ctx.strokeRect(25, 25, 155, 105);
```

### stroke()5+

PhonePC/2in1TabletTVWearableLite Wearable

进行边框绘制操作。

**示例：**

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6f/v3/PI6viVFIQDuY1-pjrnAsLw/zh-cn_image_0000002599479263.png?HW-CC-KV=V1&HW-CC-Date=20260511T040746Z&HW-CC-Expire=86400&HW-CC-Sign=CA89C3CED6E39B74E6652FFB1DA1FF6FC576618D8A0C560CAFC169787E6B00BA)

收起

自动换行

深色代码主题

复制

```
1. ctx.moveTo(25, 25);
2. ctx.lineTo(25, 105);
3. ctx.strokeStyle = 'rgb(0,0,255)';
4. ctx.stroke();
```

### beginPath()5+

PhonePC/2in1TabletTVWearableLite Wearable

创建一个新的绘制路径。

**示例：**

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/35/v3/_KO_fo9zStynkfhNeaZJEQ/zh-cn_image_0000002568760074.png?HW-CC-KV=V1&HW-CC-Date=20260511T040746Z&HW-CC-Expire=86400&HW-CC-Sign=913001000507F46E6173D4F3DE8E87DF48E52A543ECEFD27DBCBF656ED1A85A7)

收起

自动换行

深色代码主题

复制

```
1. ctx.beginPath();
2. ctx.lineWidth = 6;
3. ctx.strokeStyle = '#0000ff';
4. ctx.moveTo(15, 80);
5. ctx.lineTo(280, 80);
6. ctx.stroke();
```

### moveTo()5+

PhonePC/2in1TabletTVWearableLite Wearable

路径从当前点移动到指定点。

**参数：**

展开

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| x | number | 指定位置的x坐标。 |
| y | number | 指定位置的y坐标。 |

**示例：**

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4b/v3/AlGNJUxyRaW1OeD_aOb3MA/zh-cn_image_0000002599359315.png?HW-CC-KV=V1&HW-CC-Date=20260511T040746Z&HW-CC-Expire=86400&HW-CC-Sign=76AC0B751474AE24CC4B870A764FA2E8D91FB0893DA7466492594326F78FA45C)

收起

自动换行

深色代码主题

复制

```
1. ctx.beginPath();
2. ctx.moveTo(10, 10);
3. ctx.lineTo(280, 160);
4. ctx.stroke();
```

### lineTo()5+

PhonePC/2in1TabletTVWearableLite Wearable

从当前点到指定点进行路径连接。

**参数：**

展开

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| x | number | 指定位置的x坐标。 |
| y | number | 指定位置的y坐标。 |

**示例：**

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b5/v3/cTYXbSncQfuisBCezqaRJg/zh-cn_image_0000002568919722.png?HW-CC-KV=V1&HW-CC-Date=20260511T040746Z&HW-CC-Expire=86400&HW-CC-Sign=3F329FEB3BFB97A5BFB942A16CC58DB6F244F197195C8CD2B242D8FB36492805)

收起

自动换行

深色代码主题

复制

```
1. ctx.beginPath();
2. ctx.moveTo(10, 10);
3. ctx.lineTo(280, 160);
4. ctx.stroke();
```

### closePath()5+

PhonePC/2in1TabletTVWearableLite Wearable

结束当前路径形成一个封闭路径。

**示例：**

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/31/v3/tsGcua-HSPK14R9odHRBmQ/zh-cn_image_0000002599479265.png?HW-CC-KV=V1&HW-CC-Date=20260511T040746Z&HW-CC-Expire=86400&HW-CC-Sign=1234B773E6033C202920141B940B2D71A520E9597CCE7BC146C3A44C63F7F2C9)

收起

自动换行

深色代码主题

复制

```
1. ctx.beginPath();
2. ctx.moveTo(30, 30);
3. ctx.lineTo(110, 30);
4. ctx.lineTo(70, 90);
5. ctx.closePath();
6. ctx.stroke();
```

## font

PhonePC/2in1TabletTVWearableLite Wearable

设置文本绘制中的字体样式。

**参数：**

展开

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| value | string | 字体样式支持：sans-serif, serif, monospace，该属性默认值为30px HYQiHei-65S。 |

**示例：**

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2a/v3/L0JPxXfcQqm6RILYFN4TIw/zh-cn_image_0000002568760076.png?HW-CC-KV=V1&HW-CC-Date=20260511T040746Z&HW-CC-Expire=86400&HW-CC-Sign=AC6623F71B7D54E28A53BBCB87A45F46007DBF05AA5D34654C603E14FFB146E0)

收起

自动换行

深色代码主题

复制

```
1. ctx.font = '30px sans-serif';
2. ctx.fillText("Hello World", 20, 60);
```

## textAlign

PhonePC/2in1TabletTVWearableLite Wearable

设置文本绘制中的文本对齐方式。

**参数：**

展开

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| align | string | 可选值为：  - left（默认）：文本左对齐；  - right：文本右对齐；  - center：文本居中对齐； |

**示例：**

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/24/v3/Ev_QZoYbSUSezQ18yA1nkw/zh-cn_image_0000002599359317.png?HW-CC-KV=V1&HW-CC-Date=20260511T040746Z&HW-CC-Expire=86400&HW-CC-Sign=7AA87106C37BD65586DC558E98BEF21FFE02751B1C94AAC52689DBFB6CE83D1B)

收起

自动换行

深色代码主题

复制

```
1. ctx.strokeStyle = '#0000ff';
2. ctx.moveTo(140, 10);
3. ctx.lineTo(140, 160);
4. ctx.stroke();

6. ctx.font = '18px sans-serif';

8. // Show the different textAlign values
9. ctx.textAlign = 'left';
10. ctx.fillText('textAlign=left', 140, 100);
11. ctx.textAlign = 'center';
12. ctx.fillText('textAlign=center',140, 120);
13. ctx.textAlign = 'right';
14. ctx.fillText('textAlign=right',140, 140);
```

## arc()5+

PhonePC/2in1TabletTVWearableLite Wearable

绘制弧线路径。

**参数：**

展开

| 参数 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| x | number | 是 | 弧线圆心的x坐标值，单位：vp。 |
| y | number | 是 | 弧线圆心的y坐标值，单位：vp。 |
| radius | number | 是 | 弧线的圆半径，单位：vp。 |
| startAngle | number | 是 | 弧线的起始弧度，单位：弧度。 |
| endAngle | number | 是 | 弧线的终止弧度，单位：弧度。 |
| anticlockwise | boolean | 否 | 是否逆时针绘制圆弧。  true：逆时针方向绘制弧线。  false：顺时针方向绘制弧线。  默认值：false。 |

**示例：**

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/07/v3/XsY-WAP-QBukOBZagWBtSA/zh-cn_image_0000002568919724.png?HW-CC-KV=V1&HW-CC-Date=20260511T040746Z&HW-CC-Expire=86400&HW-CC-Sign=1FC3C24E6E9B08FF3C652E244355C319C8B089FDC9D511D224C9F5AF0B4AD618)

收起

自动换行

深色代码主题

复制

```
1. ctx.beginPath();
2. ctx.arc(100, 75, 50, 0, 6.28);
3. ctx.stroke();
```

### rect()5+

PhonePC/2in1TabletTVWearableLite Wearable

创建矩形路径。

**参数：**

展开

| 参数 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| x | number | 是 | 指定矩形的左上角x坐标值，单位：vp。 |
| y | number | 是 | 指定矩形的左上角y坐标值，单位：vp。 |
| width | number | 是 | 指定矩形的宽度，单位：vp。 |
| height | number | 是 | 指定矩形的高度，单位：vp。 |

**示例：**

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1c/v3/rP-esFVfTPiY7hSaVoL73g/zh-cn_image_0000002599479267.png?HW-CC-KV=V1&HW-CC-Date=20260511T040746Z&HW-CC-Expire=86400&HW-CC-Sign=40981A763528A1CB5EA1E3CA47CDAD4F1C4095CE01438A962E8CA5735B78A157)

收起

自动换行

深色代码主题

复制

```
1. ctx.rect(20, 20, 100, 100); // Create a 100*100 rectangle at (20, 20)
2. ctx.stroke(); // Draw it
```