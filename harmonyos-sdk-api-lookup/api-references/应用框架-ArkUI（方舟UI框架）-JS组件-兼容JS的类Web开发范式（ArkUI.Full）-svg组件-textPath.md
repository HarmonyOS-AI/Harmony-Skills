沿路径绘制文本。

说明

* 该组件从API version 7开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。
* 按指定的路径绘制文本，可嵌套子标签tspan分段。
* 只支持被父元素标签text嵌套。

## 权限列表

PhonePC/2in1TabletTVWearable

无

## 子组件

PhonePC/2in1TabletTVWearable

[tspan](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-svg-tspan)。

## 属性

PhonePC/2in1TabletTVWearable

支持以下表格中的属性。

展开

| 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| id | string | - | 组件的唯一标识。 |
| path | string | 0 | 设置路径的形状。  字母指令表示的意义如下：  - M = moveto  - L = lineto  - H = horizontal lineto  - V = vertical lineto  - C = curveto  - S = smooth curveto  - Q = quadratic Bezier curve  - T = smooth quadratic Bezier curveto  - A = elliptical Arc  - Z = closepath  默认值：0 |
| startOffset | <length>|<percentage> | 0 | 设置文本沿path绘制的起始偏移。  默认值：0 |
| font-size | <length> | 30px | 设置文本的尺寸。  默认值：30px |
| fill | <color> | black | 字体填充颜色。  默认值：black |
| by | number | - | 相对被指定动画的属性偏移值，from默认为原属性值。 |
| opacity | number | 1 | 元素的透明度，取值范围为0到1，1表示为不透明，0表示为完全透明。支持属性动画。  默认值：1 |
| fill-opacity | number | 1.0 | 字体填充透明度。  默认值：1.0 |
| stroke | <color> | black | 绘制字体边框并指定颜色。  默认值：black |
| stroke-width | number | 1 | 字体边框宽度。  默认值：1px |
| stroke-opacity | number | 1.0 | 字体边框透明度。  默认值：1.0 |

## 示例

PhonePC/2in1TabletTVWearable

textPath属性示例，textpath文本内容沿着属性path中的路径绘制文本，起点偏移20%的path长度。（绘制的元素<path>曲线仅做参照）

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div class="container">
3. <svg fill="#00FF00" x="50">
4. <path d="M40,360 Q360,360 360,180 Q360,40 200,40 Q40,40 40,160 Q40,280 180,280 Q280,280 300,200" stroke="red" fill="none"></path>
5. <text>
6. <textpath fill="blue" startOffset="20%" path="M40,360 Q360,360 360,180 Q360,40 200,40 Q40,40 40,160 Q40,280 180,280 Q280,280 300,200" font-size="30px">
7. This is textpath test.
8. </textpath>
9. </text>
10. </svg>
11. </div>
```

收起

自动换行

深色代码主题

复制

```
1. /* xxx.css */
2. .container {
3. flex-direction: row;
4. justify-content: flex-start;
5. align-items: flex-start;
6. height: 1200px;
7. width: 600px;
8. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/30/v3/0DwL4RQKSISTULgE99ccTw/zh-cn_image_0000002599359145.png?HW-CC-KV=V1&HW-CC-Date=20260511T040519Z&HW-CC-Expire=86400&HW-CC-Sign=8746F3C50DBE7E9092F93A003DEF0D9865B974138E808ACE432A73598951B12F)

textpath与tspan组合示例与效果图

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div class="container">
3. <svg fill="#00FF00" x="50">
4. <path d="M40,360 Q360,360 360,180 Q360,40 200,40 Q40,40 40,160 Q40,280 180,280 Q280,280 300,200" stroke="red" fill="none"></path>
5. <text>
6. <textpath fill="blue" startOffset="20%" path="M40,360 Q360,360 360,180 Q360,40 200,40 Q40,40 40,160 Q40,280 180,280 Q280,280 300,200" font-size="15px">
7. <tspan dx="-50px" fill="red">This is tspan onTextPath.</tspan>
8. <tspan font-size="25px">Let's play.</tspan>
9. <tspan font-size="30px" fill="#00FF00">12345678912354567891234567891234567891234567891234567890</tspan>
10. </textpath>
11. </text>
12. </svg>
13. </div>
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b7/v3/kg3TO34XRJWtQqxVIRVT9Q/zh-cn_image_0000002568919552.png?HW-CC-KV=V1&HW-CC-Date=20260511T040519Z&HW-CC-Expire=86400&HW-CC-Sign=4CF3CFFECC984A9292DC672C2BD627A3799945C9B3231FC23B26273B5F6E66F2)

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div class="container">
3. <svg fill="#00FF00" x="50">
4. <path d="M40,360 Q360,360 360,180 Q360,40 200,40 Q40,40 40,160 Q40,280 180,280 Q280,280 300,200" stroke="red" fill="none"></path>
5. <text>
6. <textpath fill="#D2691E" path="M40,360 Q360,360 360,180 Q360,40 200,40 Q40,40 40,160 Q40,280 180,280 Q280,280 300,200" font-size="30px" stroke="black" stroke-width="1" >
7. This is TextPath.
8. <tspan font-size="20px" fill="red">This is tspan onTextPath.</tspan>
9. <tspan font-size="30px">Let's play.</tspan>
10. <tspan font-size="40px" fill="#00FF00"  stroke="blue" stroke-width="2">12345678912354567891234567891234567891234567891234567890
11. </tspan>
12. </textpath>
13. </text>
14. </svg>
15. </div>
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5d/v3/hrOZZSuHTZu9eST4fPRz5g/zh-cn_image_0000002599479095.png?HW-CC-KV=V1&HW-CC-Date=20260511T040519Z&HW-CC-Expire=86400&HW-CC-Sign=F2765D08608C027547EB2B630579B94A097227C8C9D016CD721B7B4DFDDDAA1D)

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div class="container">
3. <svg fill="#00FF00" x="50">
4. <path d="M40,360 Q360,360 360,180 Q360,40 200,40 Q40,40 40,160 Q40,280 180,280 Q280,280 300,200" stroke="red" fill="none">
5. </path>
6. <!--      数值百分比    -->
7. <text>
8. <textpath fill="#D2691E" path="M40,360 Q360,360 360,180 Q360,40 200,40 Q40,40 40,160 Q40,280 180,280 Q280,280 300,200" font-size="30px">
9. This is TextPath.
10. <tspan x="50" fill="blue">This is first tspan.</tspan>
11. <tspan x="50%">This is second tspan.</tspan>
12. <tspan dx="10%">12345678912354567891234567891234567891234567891234567890</tspan>
13. </textpath>
14. </text>
15. </svg>
16. </div>
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8c/v3/uvP0F_PaSBGy1nlgCjB9-w/zh-cn_image_0000002568759904.png?HW-CC-KV=V1&HW-CC-Date=20260511T040519Z&HW-CC-Expire=86400&HW-CC-Sign=959FE211E5C7DA5CE175BC5F235A87D22215271548F4D7198E6E7DF41232F43B)

startOffset属性动画，文本绘制时起点偏移从10%运动到40%，不绘制超出path长度范围的文本。

收起

自动换行

深色代码主题

复制

```
1. /* xxx.css */
2. .container {
3. flex-direction: row;
4. justify-content: flex-start;
5. align-items: flex-start;
6. height: 3000px;
7. width: 1080px;
8. }
```

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div class="container">
3. <svg fill="#00FF00">
4. <path d="M40,360 Q360,360 360,180 Q360,40 200,40 Q40,40 40,160 Q40,280 180,280 Q280,280 300,200" stroke="red" fill="none"></path>
5. <text>
6. <textpath fill="blue" startOffset="10%" path="M40,360 Q360,360 360,180 Q360,40 200,40 Q40,40 40,160 Q40,280 180,280 Q280,280 300,200" font-size="15px">
7. <tspan dx="-50px" fill="red">This is tspan onTextPath.</tspan>
8. <tspan font-size="25px">Let's play.</tspan>
9. <tspan font-size="30px" fill="#00FF00">12345678912354567891234567891234567891234567891234567890</tspan>
10. <animate attributeName="startOffset" from="10%" to="40%" dur="3s" repeatCount="indefinite"></animate>
11. </textpath>
12. </text>
13. </svg>
14. </div>
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ca/v3/XEWdnBmCQ7W8eLrtBvVbqg/zh-cn_image_0000002599359147.gif?HW-CC-KV=V1&HW-CC-Date=20260511T040519Z&HW-CC-Expire=86400&HW-CC-Sign=8EC15CFB6AEBEF5E9E1FD99CD8A71C895374528174B40A300E8E845282EFDBF3)

textpath与tspan组合属性动画与效果图

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div class="container">
3. <svg fill="#00FF00">
4. <path d="M40,360 Q360,360 360,180 Q360,40 200,40 Q40,40 40,160 Q40,280 180,280 Q280,280 300,200" stroke="red" fill="none">
5. </path>
6. <text>
7. <textpath fill="#D2691E" path="M40,360 Q360,360 360,180 Q360,40 200,40 Q40,40 40,160 Q40,280 180,280 Q280,280 300,200" font-size="30px">
8. This is TextPath.
9. <tspan x="50" fill="blue">
10. tspan attribute x|rotate
11. <animate attributeName="x" from="50" to="100" dur="5s" repeatCount="indefinite"></animate>
12. <animate attributeName="rotate" from="0" to="360" dur="5s" repeatCount="indefinite"></animate>
13. </tspan>
14. <tspan x="30%">tspan static.</tspan>
15. <tspan>
16. tspan attribute dx|opacity
17. <animate attributeName="dx" from="0%" to="30%" dur="3s" repeatCount="indefinite"></animate>
18. <animate attributeName="opacity" from="0.01" to="0.99" dur="3s" repeatCount="indefinite"></animate>
19. </tspan>
20. <tspan dx="5%">tspan move</tspan>
21. </textpath>
22. </text>
23. </svg>
24. </div>
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/26/v3/TBFi1Z8YQDer8eqV-IlTbw/zh-cn_image_0000002568919554.gif?HW-CC-KV=V1&HW-CC-Date=20260511T040519Z&HW-CC-Expire=86400&HW-CC-Sign=B1262D8A351C5AE576D593CE7032094259BE93928416D15FF11305AB802F2046)

(1) "tspan attribute x|rotate" 文本绘制起点偏移从50px运动到100px，顺时针旋转0度到360度。

(2) "tspan attribute dx|opacity" 在 "tspan static." 绘制结束后再开始绘制，向后偏移量从0%运动到30%，透明度从浅到深变化。

(3) "tspan move" 在上一段tspan绘制完成后，向后偏移5%的距离进行绘制，呈现跟随前一段tspan移动的效果。

textpath与tspan组合属性动画与效果图

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div class="container">
3. <svg fill="#00FF00">
4. <path d="M40,360 Q360,360 360,180 Q360,40 200,40 Q40,40 40,160 Q40,280 180,280 Q280,280 300,200" stroke="red"
5. fill="none">
6. </path>
7. <text>
8. <textpath fill="#D2691E" path="M40,360 Q360,360 360,180 Q360,40 200,40 Q40,40 40,160 Q40,280 180,280 Q280,280 300,200" font-size="30px">
9. This is TextPath.
10. <tspan dx="20" fill="blue">
11. tspan attribute fill|fill-opacity
12. <animate attributeName="fill" from="blue" to="red" dur="3s" repeatCount="indefinite"></animate>
13. <animate attributeName="fill-opacity" from="0.01" to="0.99" dur="3s" repeatCount="indefinite"></animate>
14. </tspan>
15. <tspan dx="20" fill="blue">
16. tspan attribute font-size
17. <animate attributeName="font-size" from="10" to="50" dur="3s" repeatCount="indefinite"></animate>
18. </tspan>
19. </textpath>
20. <tspan font-size="30">Single tspan</tspan>
21. </text>
22. </svg>
23. </div>
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9f/v3/5CTjsZjqTA-BsbeswwnpeQ/zh-cn_image_0000002599479097.gif?HW-CC-KV=V1&HW-CC-Date=20260511T040519Z&HW-CC-Expire=86400&HW-CC-Sign=1D7DA76F14252BA694FFDA19BD23BFBB3084B1B1E79AEA2B10842FA6DABCAE66)

(1) "This is TextPath." 在path上无偏移绘制第一段文本内容，大小30px，颜色"#D2691E"。

(2) "tspan attribute fill|fill-opacity" 相对上一段文本结束后偏移20px，颜色从蓝到红，透明度从浅到深。

(3) "tspan attribute font-size" 绘制起点相对上一段结束后偏移20px，起点静止，字体大小从10px到50px，整体长度持续拉长。

(4) "Single tspan" 在上一段的尾部做水平绘制，呈现跟随上一段运动的效果。

textpath与tspan组合属性动画与效果图

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div class="container">
3. <svg fill="#00FF00">
4. <path d="M40,360 Q360,360 360,180 Q360,40 200,40 Q40,40 40,160 Q40,280 180,280 Q280,280 300,200" stroke="red"
5. fill="none">
6. </path>
7. <text>
8. <textpath fill="#D2691E" path="M40,360 Q360,360 360,180 Q360,40 200,40 Q40,40 40,160 Q40,280 180,280 Q280,280 300,200" font-size="30px">
9. This is TextPath.
10. <tspan dx="20" fill="blue">
11. tspan attribute stroke
12. <animate attributeName="stroke" from="red" to="#00FF00" dur="3s" repeatCount="indefinite"></animate>
13. </tspan>
14. <tspan dx="20" fill="white" stroke="red">
15. tspan attribute stroke-width-opacity
16. <animate attributeName="stroke-width" from="1" to="5" dur="3s" repeatCount="indefinite"></animate>
17. <animate attributeName="stroke-opacity" from="0.01" to="0.99" dur="3s" repeatCount="indefinite"></animate>
18. </tspan>
19. </textpath>
20. </text>
21. </svg>
22. </div>
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e5/v3/Y_09ntvmRle4DvHNOK8XKg/zh-cn_image_0000002568759906.gif?HW-CC-KV=V1&HW-CC-Date=20260511T040519Z&HW-CC-Expire=86400&HW-CC-Sign=D88F63118E726AF0678E51C41B6FB4CF6FB78F8D743C2D1D108E5A0C000148FF)

(1) "tspan attribute stroke" 轮廓颜色从红色逐渐转变成绿色。

(2) "tspan attribute stroke-width-opacity" 轮廓宽度从细1px转变粗5px，透明度从浅到深。