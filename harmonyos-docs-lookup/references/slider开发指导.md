slider为滑动条组件，用来快速调节音量、亮度等。具体用法请参考[slider](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-basic-slider)。

## 创建slider组件

在pages/index目录下的hml文件中创建一个slider组件。

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div class="container">
3. <slider></slider>
4. </div>
```

收起

自动换行

深色代码主题

复制

```
1. /* xxx.css */
2. .container {
3. width: 100%;
4. height: 100%;
5. background-color: #F1F3F5;
6. flex-direction: column;
7. justify-content: center;
8. align-items: center;
9. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/28/v3/iQ_C-J85TYCXGVSwu2Atbg/zh-cn_image_0000002566708493.gif?HW-CC-KV=V1&HW-CC-Date=20260403T131203Z&HW-CC-Expire=86400&HW-CC-Sign=15179ADDA3D5DBE57988456C96C3972CB9CE09F86B4B8D598555275ABAE0C494)

## 设置样式和属性

slider组件通过color、selected-color、block-color样式分别为滑动条设置背景颜色、已选择颜色和滑块颜色。

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div class="container">
3. <slider class= "sli"></slider>
4. </div>
```

收起

自动换行

深色代码主题

复制

```
1. /* xxx.css */
2. .container {
3. width: 100%;
4. height: 100%;
5. flex-direction: column;
6. justify-content: center;
7. align-items: center;
8. background-color: #F1F3F5;
9. }
10. .sli{
11. color: #fcfcfc;
12. scrollbar-color: aqua;
13. background-color: #b7e3f3;
14. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/79/v3/RU4f1JmETVeYd9aMS-18VQ/zh-cn_image_0000002535788696.gif?HW-CC-KV=V1&HW-CC-Date=20260403T131203Z&HW-CC-Expire=86400&HW-CC-Sign=23062843534D556921B9D5040681988FAD8948588477F4D259B569DAEA162276)

通过添加min、max、value、step、mode属性分别为滑动条设置最小值、最大值、初始值、滑动步长和滑动条样式。

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div class="container">
3. <slider min="0" max="100" value="1" step="2" mode="inset" showtips="true"></slider>
4. </div>
```

收起

自动换行

深色代码主题

复制

```
1. /* xxx.css */
2. .container {
3. width: 100%;
4. height: 100%;
5. flex-direction: column;
6. justify-content: center;
7. align-items: center;
8. background-color: #F1F3F5;
9. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4e/v3/59zqs38iTlq-brz_jjEXkQ/zh-cn_image_0000002535948642.gif?HW-CC-KV=V1&HW-CC-Date=20260403T131203Z&HW-CC-Expire=86400&HW-CC-Sign=8F64D12BD48612C207A0B9A1443331EC4338E681C3F6E8A9509C1822A3FAA6E7)

说明

mode属性为滑动条样式，可选值为：

* outset：滑块在滑杆上。
* inset：滑块在滑杆内。

## 绑定事件

向slider组件添加change事件，添加时需要传入ChangeEvent参数。

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div class="container">
3. <text>slider start value is {{startValue}}</text>
4. <text>slider current value is {{currentValue}}</text>
5. <text>slider end value is {{endValue}}</text>
6. <slider min="0" max="100" value="{{value}}" onchange="setValue"></slider>
7. </div>
```

收起

自动换行

深色代码主题

复制

```
1. /* xxx.css */
2. .container {
3. width: 100%;
4. height: 100%;
5. flex-direction: column;
6. justify-content: center;
7. align-items: center;
8. background-color: #F1F3F5;
9. }
```

收起

自动换行

深色代码主题

复制

```
1. // xxx.js
2. export default {
3. data: {
4. value: 0,
5. startValue: 0,
6. currentValue: 0,
7. endValue: 0,
8. },
9. setValue(e) {
10. if (e.mode === "start") {
11. this.value = e.value;
12. this.startValue = e.value;
13. } else if (e.mode === "move") {
14. this.value = e.value;
15. this.currentValue = e.value;
16. } else if (e.mode === "end") {
17. this.value = e.value;
18. this.endValue = e.value;
19. }
20. }
21. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/20/v3/I2Ix6yrcTEyuCLR1DzylkA/zh-cn_image_0000002566868475.gif?HW-CC-KV=V1&HW-CC-Date=20260403T131203Z&HW-CC-Expire=86400&HW-CC-Sign=578EB92764EF5EC32C5895DBD8F8C9CD9509D387E9D26656982945A5FCDD9E27)

## 场景示例

开发者可以通过调整滑动条的值来改变图片大小，并且动态打印当前图片的宽和高。

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div class="container">
3. <image src="common/landscape3.jpg" style=" width: {{WidthVal}}px;height:{{HeightVal}}px;margin-top: -150px;"></image>
4. <div class="txt">
5. <slider min="0" max="100" value="{{value}}" onchange="setValue"></slider>
6. <text>The width of this picture is {{WidthVal}}</text>
7. <text>The height of this picture is {{HeightVal}}</text>
8. </div>
9. </div>
```

收起

自动换行

深色代码主题

复制

```
1. /* xxx.css */
2. .container {
3. width: 100%;
4. height: 100%;
5. flex-direction: column;
6. justify-content: center;
7. align-items: center;
8. background-color: #F1F3F5;
9. }
10. .text{
11. flex-direction: column;
12. justify-content: center;
13. align-items: center;
14. position: fixed;
15. top: 65%;
16. }
17. .text{
18. margin-top: 30px;
19. }
```

收起

自动换行

深色代码主题

复制

```
1. // xxx.js
2. export default{
3. data: {
4. value: 0,
5. WidthVal: 200,
6. HeightVal: 200
7. },
8. setValue(e) {
9. this.WidthVal = 200 + e.value;
10. this.HeightVal = 200 + e.value
11. }
12. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/84/v3/kxgpnapuT7651BrtsUJFnQ/zh-cn_image_0000002566708495.gif?HW-CC-KV=V1&HW-CC-Date=20260403T131203Z&HW-CC-Expire=86400&HW-CC-Sign=2B94E78E51D00AEE7845CBF0FD0C7755184779724EA47CAE69C0502CC154CD8E)