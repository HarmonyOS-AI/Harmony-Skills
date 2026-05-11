说明

从API version 4开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。

堆叠容器，子组件按照顺序依次入栈，后一个子组件覆盖前一个子组件。

## 权限列表

PhonePC/2in1TabletTVWearable

无

## 子组件

PhonePC/2in1TabletTVWearable

支持。

## 属性

PhonePC/2in1TabletTVWearable

支持[通用属性](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-common-attributes)。

## 样式

PhonePC/2in1TabletTVWearable

支持[通用样式](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-common-styles)。

## 事件

PhonePC/2in1TabletTVWearable

支持[通用事件](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-common-events)。

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
5. background-color: #ffffff;
6. border-width: 1px;
7. border-style: solid;
8. }
9. .back-child {
10. width: 300px;
11. height: 300px;
12. background-color: #3f56ea;
13. }
14. .front-child {
15. width: 100px;
16. height: 100px;
17. background-color: #00bfc9;
18. }
19. .positioned-child {
20. width: 100px;
21. height: 100px;
22. left: 50px;
23. top: 50px;
24. background-color: #47cc47;
25. }
26. .bd-radius {
27. border-radius: 16px;
28. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c8/v3/MdXAf3FLSNeFWOFyUdu03w/zh-cn_image_0000002599359081.png?HW-CC-KV=V1&HW-CC-Date=20260511T040207Z&HW-CC-Expire=86400&HW-CC-Sign=DE0C4A30C13211E5F21E538C16366F93005FDC43CA62E6A588823EE5F404D400)