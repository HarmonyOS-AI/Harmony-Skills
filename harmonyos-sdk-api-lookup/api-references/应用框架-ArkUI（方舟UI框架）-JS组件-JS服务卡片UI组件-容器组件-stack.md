堆叠容器，子组件按照顺序依次入栈，后一个子组件覆盖前一个子组件。

说明

从API version 8 开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。

## 子组件

PhonePC/2in1TabletTVWearable

支持。

## 属性

PhonePC/2in1TabletTVWearable

支持[通用属性](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-service-widget-common-attributes)。

## 样式

PhonePC/2in1TabletTVWearable

支持[通用样式](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-service-widget-common-styles)。

## 事件

PhonePC/2in1TabletTVWearable

支持[通用事件](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-service-widget-common-events)。

## 示例

PhonePC/2in1TabletTVWearable

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <stack class="stack-parent">
3. <div class="back-child bd-radius"></div>
4. <div class="positioned-child bd-radius"></div>
5. <div class="front-child bd-radius"></div>
6. </stack>
```

收起

自动换行

深色代码主题

复制

```
1. /* xxx.css */
2. .stack-parent {
3. width: 400px;
4. height: 400px;
5. margin: 50px;
6. background-color: #ffffff;
7. border-width: 1px;
8. border-style: solid;
9. }
10. .back-child {
11. width: 300px;
12. height: 300px;
13. background-color: #3f56ea;
14. }
15. .front-child {
16. width: 100px;
17. height: 100px;
18. background-color: #00bfc9;
19. }
20. .positioned-child {
21. width: 100px;
22. height: 100px;
23. left: 50px;
24. top: 50px;
25. background-color: #47cc47;
26. }
27. .bd-radius {
28. border-radius: 16px;
29. }
```

**4×4卡片**

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e9/v3/p2mqQ6llQPOXhVYCHw-iDw/zh-cn_image_0000002568760082.png?HW-CC-KV=V1&HW-CC-Date=20260511T040901Z&HW-CC-Expire=86400&HW-CC-Sign=36796EDB80CE81D3E97CF8386CB9214B8BCEA00C95EE48BFF88682D85272793F)