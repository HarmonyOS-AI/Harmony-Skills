toolbar为页面工具栏组件，用于展示针对当前界面的操作选项，可作为页面的一级导航。具体用法请参考[toolbar](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-basic-toolbar)。

## 创建toolbar组件

在pages/index目录下的hml文件中创建一个toolbar组件。

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div class="container">
3. <toolbar style="background-color: #F1F3F5;">
4. <toolbar-item value="item1"></toolbar-item>
5. <toolbar-item value="item2"></toolbar-item>
6. </toolbar>
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
10. toolbar-item{
11. font-size: 35px;
12. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/dd/v3/aLBixRyzSxmKh77ezG5LUA/zh-cn_image_0000002566868479.gif?HW-CC-KV=V1&HW-CC-Date=20260403T131215Z&HW-CC-Expire=86400&HW-CC-Sign=5F63D3D4C6D4DD61CB99743803D369E64569C6782EC7CBE9C98274D61210C035)

## 添加子组件

toolbar组件仅支持toolbar-item为子组件，页面最多可以展示5个toolbar-item子组件，如果存在6个及以上toolbar-item，则保留前面4个，后续的将收纳到工具栏上的更多项中，通过点击更多项弹窗进行展示。并且更多项展示的组件样式采用系统默认样式，toolbar-item上设置的自定义样式不生效。

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div class="container">
3. <toolbar>
4. <toolbar-item value="item1"></toolbar-item>
5. <toolbar-item value="item2"></toolbar-item>
6. <toolbar-item value="item3"></toolbar-item>
7. <toolbar-item value="item4"></toolbar-item>
8. <toolbar-item value="item5"></toolbar-item>
9. <toolbar-item value="item6"></toolbar-item>
10. </toolbar>
11. </div>
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
10. toolbar-item{
11. font-size: 35px;
12. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9c/v3/tnEviaNVT12aY3oVBuZg3w/zh-cn_image_0000002566708499.gif?HW-CC-KV=V1&HW-CC-Date=20260403T131215Z&HW-CC-Expire=86400&HW-CC-Sign=4C353DAC5D729350BD9104B7407343208D9813F24ED6630E0A8880F9F27668FC)

## 设置样式

设置position样式控制toolbar组件的位置，并设置子组件toolbar-item的字体颜色、大小及背景色。

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div class="container">
3. <toolbar style="position: fixed;bottom: 5%;width: 100%;background-color: #F1F3F5;">
4. <toolbar-item value="item1" icon="common/images/1.png" class="toolbarActive"></toolbar-item>
5. <toolbar-item value="item2" icon="common/images/2.png"></toolbar-item>
6. <toolbar-item value="item3" icon="common/images/1.png"></toolbar-item>
7. <toolbar-item value="item4" icon="common/images/2.png"></toolbar-item>
8. </toolbar>
9. </div>
```

收起

自动换行

深色代码主题

复制

```
1. /* xxx.css */
2. .container {
3. background-color: #F1F3F5;
4. flex-direction: column;
5. width: 100%;
6. height: 100%;
7. justify-content: center;
8. align-items: center;
9. }
10. toolbar-item{
11. font-size: 35px;
12. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ed/v3/4RYbkCp7RlaknsEB32EqAw/zh-cn_image_0000002535788702.png?HW-CC-KV=V1&HW-CC-Date=20260403T131215Z&HW-CC-Expire=86400&HW-CC-Sign=6268E3C1424101DFCF1D37B53F0BB70169C1BB1D6E1DC2D7FC323F1D0280FB26)

## 绑定事件

分别给toolbar-item绑定单击事件和长按事件，单击后文本变红，长按时文本变蓝。

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div class="container">
3. <toolbar style="position: fixed;top: 50%;width: 100%;background-color: #F1F3F5;">
4. <toolbar-item value="item1" icon="common/images/1.png" style="color: {{itemColor}};" onclick="itemClick"></toolbar-item>
5. <toolbar-item value="item2" icon="common/images/2.png"  style="color: {{itemColor}}"></toolbar-item>
6. <toolbar-item value="item3" icon="common/images/3.png"  style="color: {{itemColor}}" onlongpress="itemLongPress"></toolbar-item>
7. </toolbar>
8. </div>
```

收起

自动换行

深色代码主题

复制

```
1. /* xxx.css */
2. .container {
3. background-color: #F1F3F5;
4. flex-direction: column;
5. width: 100%;
6. height: 100%;
7. justify-content: center;
8. align-items: center;
9. }
10. toolbar-item{
11. font-size: 35px;
12. }
```

收起

自动换行

深色代码主题

复制

```
1. // xxx.js
2. import promptAction from '@ohos.promptAction';
3. export default {
4. data:{
5. itemColor:'black'
6. },
7. itemClick(){
8. this.itemColor= "red";
9. promptAction.showToast({duration:2000,message:'item click'});
10. },
11. itemLongPress(){
12. promptAction.showToast({duration:2000,message:'item long press'});
13. this.itemColor= "blue";
14. },
15. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e7/v3/k7odf6KqTcSKDEhm3KnzHg/zh-cn_image_0000002535948648.gif?HW-CC-KV=V1&HW-CC-Date=20260403T131215Z&HW-CC-Expire=86400&HW-CC-Sign=8DA783428A6EABE8E439D31FD1553FCC8B9CA0876A5EBB9C0D79AE5277053977)

说明

toolbar组件不支持添加事件和方法，但其子组件toolbar-item支持。

## 场景示例

本场景中开发者可点击toolbar-item组件，改变当前组件文本颜色并更换相对应的图片内容。

使用for循环创建toolbar-item组件并添加点击事件，点击后获得索引值进行存储。设置文本颜色时，判断当前索引值是否为储存的值，若相同则设置为红色，不同则使用默认颜色。

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div class="container">
3. <image src="{{imgList[active]}}"></image>
4. <toolbar style="position: fixed;bottom: 5%;width: 100%;background-color: #F1F3F5;">
5. <toolbar-item value="{{ item.option}}" icon="{{item.icon}}" style="color: {{active == $idx?'red':'black'}};background-color: {{active== $idx?'#dbe7f1':'#F1F3F5'}};" for="{{item in itemList}}" onclick="itemClick({{$idx}})"></toolbar-item>
6. </toolbar>
7. </div>
```

收起

自动换行

深色代码主题

复制

```
1. /* xxx.css */
2. .container {
3. background-color: #F1F3F5;
4. flex-direction: column;
5. width: 100%;
6. justify-content: center;
7. align-items: center;
8. }
9. toolbar-item{
10. font-size: 35px;
11. }
```

收起

自动换行

深色代码主题

复制

```
1. // xxx.js
2. export default {
3. data:{
4. active: 0,
5. imgList:["common/images/1.png","common/images/2.png","common/images/3.png","common/images/4.png"],
6. itemList:[
7. {option:'item1',icon:'common/images/1.png'},
8. {option:'item2',icon:'common/images/2.png'},
9. {option:'item3',icon:'common/images/3.png'},
10. {option:'item4',icon:'common/images/4.png'},
11. ]
12. },
13. itemClick(id){
14. this.active= id;
15. },
16. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/92/v3/qE5xHQvBSvOP6fwhKQhnRg/zh-cn_image_0000002566868481.gif?HW-CC-KV=V1&HW-CC-Date=20260403T131215Z&HW-CC-Expire=86400&HW-CC-Sign=CF9E48EF5E4E05B386E92838D66D7BB85A87D49A0F47421E8F5F5A3D83834FC4)