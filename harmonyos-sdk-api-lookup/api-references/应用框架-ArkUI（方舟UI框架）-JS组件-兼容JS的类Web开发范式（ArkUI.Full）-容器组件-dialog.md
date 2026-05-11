说明

从API version 4开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。

自定义弹窗容器。

## 权限列表

PhonePC/2in1TabletTVWearable

无

## 子组件

PhonePC/2in1TabletTVWearable

支持单个子组件。

## 属性

PhonePC/2in1TabletTVWearable

除支持[通用属性](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-common-attributes)外，支持如下属性：

展开

| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| dragable7+ | boolean | false | 否 | 设置对话框是否支持拖拽。true表示支持拖拽，false表示不支持拖拽。 |

说明

弹窗类组件不支持focusable、click-effect属性。

## 样式

PhonePC/2in1TabletTVWearable

仅支持[通用样式](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-common-styles)中的width、height、margin、margin-[left | top | right | bottom]、margin-[start | end]样式。

## 事件

PhonePC/2in1TabletTVWearable

不支持[通用事件](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-common-events)，仅支持如下事件：

展开

| 名称 | 参数 | 描述 |
| --- | --- | --- |
| cancel | - | 用户点击非dialog区域触发取消弹窗时触发的事件。 |
| show7+ | - | 对话框弹出时触发该事件。 |
| close7+ | - | 对话框关闭时触发该事件。 |

## 方法

PhonePC/2in1TabletTVWearable

不支持[通用方法](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-common-methods)，仅支持如下方法。

展开

| 名称 | 参数 | 描述 |
| --- | --- | --- |
| show | - | 弹出对话框。 |
| close | - | 关闭对话框。 |

说明

dialog属性、样式均不支持动态更新。

## 示例

PhonePC/2in1TabletTVWearable

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div class="doc-page">
3. <div class="btn-div">
4. <button type="capsule" value="Click here" class="btn" onclick="showDialog"></button>
5. </div>
6. <dialog id="simpledialog" dragable="true" class="dialog-main" oncancel="cancelDialog">
7. <div class="dialog-div">
8. <div class="inner-txt">
9. <text class="txt" ondoubleclick="doubleclick">Simple dialog</text>
10. </div>
11. <div class="inner-btn">
12. <button type="capsule" value="Cancel" onclick="cancelSchedule" class="btn-txt"></button>
13. <button type="capsule" value="Confirm" onclick="setSchedule" class="btn-txt"></button>
14. </div>
15. </div>
16. </dialog>
17. </div>
```

收起

自动换行

深色代码主题

复制

```
1. /* xxx.css */
2. .doc-page {
3. flex-direction: column;
4. justify-content: center;
5. align-items: center;
6. }
7. .btn-div {
8. width: 100%;
9. height: 200px;
10. flex-direction: column;
11. align-items: center;
12. justify-content: center;
13. }
14. .btn {
15. background-color: #F2F2F2;
16. text-color: #0D81F2;
17. }
18. .txt {
19. color: #000000;
20. font-weight: bold;
21. font-size: 39px;
22. }
23. .dialog-main {
24. width: 500px;
25. }
26. .dialog-div {
27. flex-direction: column;
28. align-items: center;
29. }
30. .inner-txt {
31. width: 400px;
32. height: 160px;
33. flex-direction: column;
34. align-items: center;
35. justify-content: space-around;
36. }
37. .inner-btn {
38. width: 400px;
39. height: 120px;
40. justify-content: space-around;
41. align-items: center;
42. }
43. .btn-txt {
44. background-color: #F2F2F2;
45. text-color: #0D81F2;
46. }
```

收起

自动换行

深色代码主题

复制

```
1. // xxx.js
2. import promptAction from '@ohos.promptAction';
3. export default {
4. showDialog() {
5. this.$element('simpledialog').show()
6. },
7. cancelDialog() {
8. promptAction.showToast({
9. message: 'Dialog cancelled'
10. })
11. },
12. cancelSchedule() {
13. this.$element('simpledialog').close()
14. promptAction.showToast({
15. message: 'Successfully cancelled'
16. })
17. },
18. setSchedule() {
19. this.$element('simpledialog').close()
20. promptAction.showToast({
21. message: 'Successfully confirmed'
22. })
23. },
24. doubleclick(){
25. promptAction.showToast({
26. message: 'doubleclick'
27. })
28. }
29. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3f/v3/xPsobbS5Tkeqw5XHQBeYTg/zh-cn_image_0000002568759832.gif?HW-CC-KV=V1&HW-CC-Date=20260511T040141Z&HW-CC-Expire=86400&HW-CC-Sign=1ECFA0ABD41FE0EB0EA45C20F85FC2B4729EDBB2421FF17E1113AA6AACCF79C1)