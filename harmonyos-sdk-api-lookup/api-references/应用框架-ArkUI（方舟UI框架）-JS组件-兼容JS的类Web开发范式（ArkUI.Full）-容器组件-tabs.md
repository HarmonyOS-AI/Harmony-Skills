说明

从API version 4开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。

tab页签容器。

## 权限列表

PhonePC/2in1TabletTVWearable

无

## 子组件

PhonePC/2in1TabletTVWearable

仅支持<[tab-bar](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-container-tab-bar)>和<[tab-content](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-container-tab-content)>。

## 属性

PhonePC/2in1TabletTVWearable

除支持[通用属性](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-common-attributes)外，还支持如下属性：

展开

| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| index | number | 0 | 否 | 当前处于激活态的tab索引。 |
| vertical | boolean | false | 否 | 是否为纵向的tab，默认为false，可选值为：  - false：tabbar和tabcontent上下排列。  - true：tabbar和tabcontent左右排列。 |

## 样式

PhonePC/2in1TabletTVWearable

支持[通用样式](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-common-styles)。

## 事件

PhonePC/2in1TabletTVWearable

除支持[通用事件](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-common-events)外，还支持如下事件：

展开

| 名称 | 参数 | 描述 |
| --- | --- | --- |
| change | { index: indexValue } | tab页签切换后触发，动态修改index值不会触发该回调。 |

## 示例

PhonePC/2in1TabletTVWearable

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div class="container">
3. <tabs class = "tabs" index="0" vertical="false" onchange="change">
4. <tab-bar class="tab-bar" mode="fixed">
5. <text class="tab-text">Home</text>
6. <text class="tab-text">Index</text>
7. <text class="tab-text">Detail</text>
8. </tab-bar>
9. <tab-content class="tabcontent" scrollable="true">
10. <div class="item-content" >
11. <text class="item-title">First screen</text>
12. </div>
13. <div class="item-content" >
14. <text class="item-title">Second screen</text>
15. </div>
16. <div class="item-content" >
17. <text class="item-title">Third screen</text>
18. </div>
19. </tab-content>
20. </tabs>
21. </div>
```

收起

自动换行

深色代码主题

复制

```
1. /* xxx.css */
2. .container {
3. flex-direction: column;
4. justify-content: flex-start;
5. align-items: center;
6. }
7. .tabs {
8. width: 100%;
9. }
10. .tabcontent {
11. width: 100%;
12. height: 80%;
13. justify-content: center;
14. }
15. .item-content {
16. height: 100%;
17. justify-content: center;
18. }
19. .item-title {
20. font-size: 60px;
21. }
22. .tab-bar {
23. margin: 10px;
24. height: 60px;
25. border-color: #007dff;
26. border-width: 1px;
27. }
28. .tab-text {
29. width: 300px;
30. text-align: center;
31. }
```

收起

自动换行

深色代码主题

复制

```
1. // xxx.js
2. export default {
3. change: function(e) {
4. console.info("Tab index: " + e.index);
5. },
6. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/98/v3/Wrl6wbi-S3-51zJIyc5NpA/zh-cn_image_0000002568759840.gif?HW-CC-KV=V1&HW-CC-Date=20260511T040219Z&HW-CC-Expire=86400&HW-CC-Sign=BC8B61E833E94F9F09610C87D49D827DABAAD4EAAE40F6D4CA48B74C9E664DF0)