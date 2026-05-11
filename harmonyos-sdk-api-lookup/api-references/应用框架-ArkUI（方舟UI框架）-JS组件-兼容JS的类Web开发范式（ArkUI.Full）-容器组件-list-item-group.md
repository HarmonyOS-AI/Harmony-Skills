说明

从API version 4开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。

<[list](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-container-list)>的子组件，用来展示分组，宽度默认充满list组件。

* 使用该组件时父元素list组件的样式columns必须为1，否则功能异常。
* 由于父元素list组件的align-items默认样式为stretch，该组件宽度默认充满list组件。设置父元素list组件的align-items样式为非stretch来生效自定义宽度。

## 权限列表

PhonePC/2in1TabletTVWearable

无

## 子组件

PhonePC/2in1TabletTVWearable

仅支持<[list-item](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-container-list-item)>。

## 属性

PhonePC/2in1TabletTVWearable

除支持[通用属性](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-common-attributes)外，还支持如下属性：

展开

| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| type | string | default | 否 | list-item-group类型，同一list支持多种type的list-item-group，相同type的list-item-group需要确保渲染后的视图布局也完全相同，当type固定时，使用show属性代替if属性，确保视图布局不变。 |

说明

* 通用属性中的id用来标识一个group。list中相关的函数的入参以及事件的信息皆以此标识一个唯一的group。

## 样式

PhonePC/2in1TabletTVWearable

除支持[通用样式](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-common-styles)外，还支持如下样式：

展开

| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| flex-direction | string | row | 否 | flex容器主轴方向。可选项有：  - column：垂直方向从上到下  - row：水平方向从左到右 |
| justify-content | string | flex-start | 否 | flex容器当前行的主轴对齐格式。可选项有：  - flex-start：项目位于容器的开头。  - flex-end：项目位于容器的结尾。  - center：项目位于容器的中心。  - space-between：项目位于各行之间留有空白的容器内。  - space-around：项目位于各行之前、之间、之后都留有空白的容器内。  - space-evenly5+: 均匀排列每个元素，每个元素之间的间隔相等。 |

## 事件

PhonePC/2in1TabletTVWearable

除支持[通用事件](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-common-events)外，还支持如下事件：

展开

| 名称 | 参数 | 描述 |
| --- | --- | --- |
| groupclick | { groupid: string } | group点击事件。  groupid：被点击的group的id。 |
| groupcollapse | { groupid: string } | group收拢事件。  groupid：收拢的group的id。  当不输入参数或者groupid为空时收拢所有分组。 |
| groupexpand | { groupid: string } | group展开事件。  groupid：展开的group的id。  当不输入参数或者groupid为空时展开所有分组。 |

## 方法

PhonePC/2in1TabletTVWearable

支持[通用方法](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-common-methods)。

## 示例

PhonePC/2in1TabletTVWearable

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div class="doc-page">
3. <list style="width: 100%;" id="mylist">
4. <list-item class="top-list-item" clickeffect="false">
5. <div class="item-div">
6. <div class="item-child">
7. <button type="capsule" value="Collapse first" onclick="collapseOne"></button>
8. <button type="capsule" value="Expand first" onclick="expandOne"></button>
9. </div>
10. <div class="item-child">
11. <button type="capsule" value="Collapse all" onclick="collapseAll"></button>
12. <button type="capsule" value="Expand all" onclick="expandAll"></button>
13. </div>
14. </div>
15. </list-item>
16. <list-item-group for="listgroup in list" id="{{listgroup.value}}" ongroupcollapse="collapse" ongroupexpand="expand">
17. <list-item type="item" style="background-color:#FFF0F5;height:95px;">
18. <div class="item-group-child">
19. <text>One---{{listgroup.value}}</text>
20. </div>
21. </list-item>
22. <list-item type="item" style="background-color: #87CEFA;height:145px;" primary="true">
23. <div class="item-group-child">
24. <text>Primary---{{listgroup.value}}</text>
25. </div>
26. </list-item>
27. </list-item-group>
28. </list>
29. </div>
```

收起

自动换行

深色代码主题

复制

```
1. /* xxx.css */
2. .doc-page {
3. flex-direction: column;
4. }
5. .top-list-item {
6. width:100%;
7. background-color:#D4F2E7;
8. }
9. .item-div {
10. flex-direction:column;
11. align-items:center;
12. justify-content:space-around;
13. height:240px;
14. }
15. .item-child {
16. width:100%;
17. height:60px;
18. justify-content:space-around;
19. align-items:center;
20. }
21. .item-group-child {
22. justify-content: center;
23. align-items: center;
24. width:100%;
25. }
```

收起

自动换行

深色代码主题

复制

```
1. // xxx.js
2. import promptAction from '@ohos.promptAction';
3. export default {
4. data: {
5. direction: 'column',
6. list: [],
7. listAdd: []
8. },
9. onInit() {
10. this.list = []
11. this.listAdd = []
12. for (var i = 1; i <= 3; i++) {
13. var dataItem = {
14. value: 'GROUP' + i,
15. };
16. this.list.push(dataItem);
17. }
18. },
19. collapseOne(e) {
20. this.$element('mylist').collapseGroup({
21. groupid: 'GROUP1'
22. })
23. },
24. expandOne(e) {
25. this.$element('mylist').expandGroup({
26. groupid: 'GROUP1'
27. })
28. },
29. collapseAll(e) {
30. this.$element('mylist').collapseGroup({
31. groupid: ''
32. })
33. },
34. expandAll(e) {
35. this.$element('mylist').expandGroup({
36. groupid: ''
37. })
38. },
39. collapse(e) {
40. promptAction.showToast({
41. message: 'Close ' + e.groupid
42. })
43. },
44. expand(e) {
45. promptAction.showToast({
46. message: 'Open ' + e.groupid
47. })
48. }
49. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a3/v3/sPSBdJptSf-tEhG9XcBXtQ/zh-cn_image_0000002599359079.gif?HW-CC-KV=V1&HW-CC-Date=20260511T040156Z&HW-CC-Expire=86400&HW-CC-Sign=EC7CF50AE129801F2D2AF0A944EB75325777C7E125A8EE8B5938E144E72F361B)