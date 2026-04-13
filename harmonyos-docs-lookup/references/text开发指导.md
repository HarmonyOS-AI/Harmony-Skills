text是文本组件，用于呈现一段文本信息。具体用法请参考[text API](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-basic-text)。

## 创建text组件

在pages/index目录下的hml文件中创建一个text组件。

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div class="container" style="text-align: center;justify-content: center; align-items: center;">
3. <text>Hello World</text>
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
6. align-items: center;
7. justify-content: center;
8. background-color: #F1F3F5;
9. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/79/v3/R1erl7yXRjSYxhnQj2Z1tg/zh-cn_image_0000002566868457.png?HW-CC-KV=V1&HW-CC-Date=20260403T131135Z&HW-CC-Expire=86400&HW-CC-Sign=DCC4021FD9333346B5F1C23155F36CA549D0CFB4E37C1D164B89542CF7A522F4)

## 设置text组件样式和属性

* 添加文本样式

  设置color、font-size、allow-scale、word-spacing、text-align属性分别为文本添加颜色、大小、缩放、文本之间的间距和文本在水平方向的对齐方式。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. <!-- xxx.hml -->
  2. <div class="container" style="background-color:#F1F3F5;flex-direction: column;justify-content: center; align-items: center;">
  3. <text style="color: blueviolet; font-size: 40px; allow-scale:true">
  4. This is a passage
  5. </text>
  6. <text style="color: blueviolet; font-size: 40px; margin-top: 20px; allow-scale:true;word-spacing: 20px;text-align: center">
  7. This is a passage
  8. </text>
  9. </div>
  ```

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. /* xxx.css */
  2. .container {
  3. display: flex;
  4. width: 100%;
  5. height: 100%;
  6. flex-direction: column;
  7. align-items: center;
  8. justify-content: center;
  9. background-color: #F1F3F5;
  10. }
  ```

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/68/v3/C1GwSELLQSWZohFXztk3KQ/zh-cn_image_0000002566708477.png?HW-CC-KV=V1&HW-CC-Date=20260403T131135Z&HW-CC-Expire=86400&HW-CC-Sign=FDD3E80075183CD1BBD7FECCEA55DAD594680D3748998A68C6924BBBA5D45272)
* 添加划线

  设置text-decoration和text-decoration-color属性为文本添加划线和划线颜色，text-decoration枚举值请参考 text自有样式。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. <!-- xxx.hml -->
  2. <div class="container" style="background-color:#F1F3F5;">
  3. <text style="text-decoration:underline">
  4. This is a passage
  5. </text>
  6. <text style="text-decoration:line-through;text-decoration-color: red">
  7. This is a passage
  8. </text>
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
  6. align-items: center;
  7. justify-content: center;
  8. }
  9. text{
  10. font-size: 50px;
  11. }
  ```

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/17/v3/KFgIF3YVSWCzLQ7CVy-slg/zh-cn_image_0000002535788680.png?HW-CC-KV=V1&HW-CC-Date=20260403T131135Z&HW-CC-Expire=86400&HW-CC-Sign=5684D25C73B457F7BA1DD47C5C0DF5C71AD31ECB5B994859E4EB5D7F29C50D24)
* 隐藏文本内容

  当文本内容过多而显示不全时，添加text-overflow属性将隐藏内容以省略号的形式展现。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. <!-- xxx.hml -->
  2. <div class="container">
  3. <text class="text">
  4. This is a passage
  5. </text>
  6. </div>
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
  6. align-items: center;
  7. background-color: #F1F3F5;
  8. justify-content: center;
  9. }
  10. .text{
  11. width: 200px;
  12. max-lines: 1;
  13. text-overflow:ellipsis;
  14. }
  ```

  说明

  + text-overflow样式需要与max-lines样式配套使用，设置了最大行数的情况下生效。
  + max-lines属性设置文本最多可以展示的行数。

  ​ ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fe/v3/YIGcKEYyRQ-93NEZa197xg/zh-cn_image_0000002535948626.png?HW-CC-KV=V1&HW-CC-Date=20260403T131135Z&HW-CC-Expire=86400&HW-CC-Sign=9038C0D56522ED81EE98CC4FD7A41BA09680C9D0C5017E2266CDDA3A14EF268C)
* text组件支持[Span](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-basic-span)子组件

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. <!-- xxx.hml -->
  2. <div class="container" style="justify-content: center; align-items: center;flex-direction: column;background-color: #F1F3F5;  width: 100%;height: 100%;">
  3. <text style="font-size: 45px;">
  4. This is a passage
  5. </text>
  6. <text style="font-size: 45px;">
  7. <span style="color: aqua;">This </span><span style="color: #F1F3F5;">      1
  8. </span>
  9. <span style="color: blue;"> is a </span>    <span style="color: #F1F3F5;">      1    </span>
  10. <span style="color: red;">  passage </span>
  11. </text>
  12. </div>
  ```

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c0/v3/8BAI8hZBQjK7L-TAIpNLyw/zh-cn_image_0000002566868459.png?HW-CC-KV=V1&HW-CC-Date=20260403T131135Z&HW-CC-Expire=86400&HW-CC-Sign=50566F3EAA55679EE7669DDC6C983D0FC5FC029E19451B43364F87C60D573969)

  说明

  + 当使用Span子组件组成文本段落时，如果Span属性样式异常（例如：font-weight设置为1000），将导致文本段落显示异常。
  + 在使用Span子组件时，注意text组件内不能存在文本内容，如果存在文本内容也只会显示子组件Span里的内容。

## 场景示例

text组件通过数据绑定展示文本内容，Span组件通过设置show属性来实现文本内容的隐藏和显示。

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div class="container">
3. <div style="align-items: center;justify-content: center;">
4. <text class="title">
5. {{ content }}
6. </text>
7. <switch checked="true" onchange="test"></switch>
8. </div>
9. <text class="span-container" style="color: #ff00ff;">
10. <span show="{{isShow}}">  {{ content  }}  </span>
11. <span style="color: white;">
12. 1
13. </span>
14. <span style="color: #f76160">Hide clip </span>
15. </text>
16. </div>
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
5. align-items: center;
6. flex-direction: column;
7. justify-content: center;
8. background-color: #F1F3F5;
9. }
10. .title {
11. font-size: 26px;
12. text-align:center;
13. width: 200px;
14. height: 200px;
15. }
```

收起

自动换行

深色代码主题

复制

```
1. // xxx.js
2. export default {
3. data: {
4. isShow:true,
5. content: 'Hello World'
6. },
7. onInit(){    },
8. test(e) {
9. this.isShow = e.checked
10. }
11. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f2/v3/99OhZhwbSWWfPO1A4KEGrw/zh-cn_image_0000002566708479.gif?HW-CC-KV=V1&HW-CC-Date=20260403T131135Z&HW-CC-Expire=86400&HW-CC-Sign=E21326F2CBD1F25E14215C337C33564B53B759A842963BD0EC0B9F9B1D9E0DCC)