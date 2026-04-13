提供菜单组件，作为临时性弹出窗口，用于展示用户可执行的操作，具体用法请参考[menu](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-basic-menu)。

## 创建menu组件

在pages/index目录下的hml文件中创建一个menu组件，添加target、type、title属性。

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml-->
2. <div class="container">
3. <text class="title-text" id="textId">show menu</text>
4. <menu target="textId" type="click" title="title">
5. <option value="Item 1">Item 1</option>
6. <option value="Item 2">Item 2</option>
7. <option value="Item 3">Item 3</option>
8. </menu>
9. </div>
```

收起

自动换行

深色代码主题

复制

```
1. /* xxx.css */
2. .container{
3. width: 100%;
4. height: 100%;
5. flex-direction: column;
6. background-color: #F1F3F5;
7. align-items: center;
8. justify-content: center;
9. width: 100%;
10. }
11. .title-text{
12. font-size: 35px;
13. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f6/v3/mGnC-IE_QnaME68BeWpOUQ/zh-cn_image_0000002566708501.png?HW-CC-KV=V1&HW-CC-Date=20260403T131219Z&HW-CC-Expire=86400&HW-CC-Sign=599E18B2E94D1944489CF50A2D78BA27A68D42A07EEB2CB823061680D4A9D2F2)

说明

* menu仅支持[option](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-basic-option)子组件。
* menu组件不支持focusable、disabled属性。

## 设置样式

为menu组件设置样式，例如字体颜色、大小、字符间距等。

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml-->
2. <div class="container">
3. <text class="title-text" id="textId">show menu</text>
4. <menu target="textId" type="click" title="title">
5. <option value="Item 1">Item 1</option>
6. <option value="Item 2">Item 2</option>
7. <option value="Item 3">Item 3</option>
8. </menu>
9. </div>
```

收起

自动换行

深色代码主题

复制

```
1. /* xxx.css */
2. .container{
3. width: 100%;
4. height: 100%;
5. flex-direction: column;
6. background-color: #F1F3F5;
7. align-items: center;
8. justify-content: center;
9. width: 100%;
10. }
11. .title-text{
12. font-size: 35px;
13. background-color: #5a5aee;
14. color: white;
15. width: 70%;
16. text-align: center;
17. height: 85px;
18. border-radius: 12px;
19. }
20. .menu{
21. text-color: blue;
22. font-size: 35px;
23. letter-spacing: 2px;
24. }
25. option{
26. color: #6a6aef;
27. font-size: 30px;
28. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/14/v3/cPwk6TMLR_KvFnqQfnQM_Q/zh-cn_image_0000002535788704.png?HW-CC-KV=V1&HW-CC-Date=20260403T131219Z&HW-CC-Expire=86400&HW-CC-Sign=C4E9789C7BBA1729B3CE7B6E644D04A774445DB6D9BF31A6332C43028799B9B6)

## 绑定事件

为menu组件绑定oncancel事件（取消操作时触发）。

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml-->
2. <div class="container">
3. <text  class="title-text" id="textId" onclick="textClick">show menu</text>
4. <menu  title="title" oncancel="cancel" id="menuId">
5. <option value="Item 1">Item 1</option>
6. <option value="Item 2">Item 2</option>
7. <option value="Item 3">Item 3</option>
8. </menu>
9. </div>
```

收起

自动换行

深色代码主题

复制

```
1. /* xxx.css */
2. .container{
3. width: 100%;
4. height: 100%;
5. flex-direction: column;
6. background-color: #F1F3F5;
7. width: 100%;
8. }
9. .title-text{
10. font-size: 35px;
11. background-color: #5a5aee;
12. color: white;
13. width: 70%;
14. text-align: center;
15. height: 85px;
16. border-radius: 12px;
17. margin-top: 500px;
18. margin-left: 15%;
19. }
20. menu{
21. text-color: blue;
22. font-size: 35px;
23. letter-spacing: 2px;
24. }
25. option{
26. color: #6a6aef;
27. font-size: 30px;
28. }
```

收起

自动换行

深色代码主题

复制

```
1. // xxx.js
2. import promptAction from '@ohos.promptAction';
3. export default {
4. cancel() {
5. promptAction.showToast({
6. message: "cancel"
7. })
8. },
9. textClick() {
10. this.$element("menuId").show({ x: 175,y: 590 });
11. }
12. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/19/v3/4FzhUMyjRoCg9bk8hS7fXw/zh-cn_image_0000002535948650.gif?HW-CC-KV=V1&HW-CC-Date=20260403T131219Z&HW-CC-Expire=86400&HW-CC-Sign=C5EA8DA8A48A326994E6F0DB12AF7C7C0C318CBFF4093587DECE0521B71C7043)