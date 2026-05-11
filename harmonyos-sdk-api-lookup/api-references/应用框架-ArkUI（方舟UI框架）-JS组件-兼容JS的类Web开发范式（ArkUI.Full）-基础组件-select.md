下拉选择按钮，可使用下拉菜单展示并选择内容。

说明

从API version 4开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。

## 子组件

PhonePC/2in1TabletTVWearable

支持<[option](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-basic-option)>。

## 属性

PhonePC/2in1TabletTVWearable

支持[通用属性](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-common-attributes)。

## 样式

PhonePC/2in1TabletTVWearable

除支持[通用样式](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-common-styles)外，还支持如下样式：

展开

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| font-family | string | 否 | 字体样式列表，用逗号分隔。列表中第一个系统中存在的字体样式或者通过[自定义字体](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-common-customizing-font)指定的字体样式，会被选中作为当前文本的字体样式。  默认值：sans-serif |

## 事件

PhonePC/2in1TabletTVWearable

除支持[通用事件](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-common-events)外，还支持如下事件：

展开

| 名称 | 参数 | 描述 |
| --- | --- | --- |
| change | {newValue: newValue} | 选择下拉选项后触发该事件，返回值为一个对象，其中newValue为选中项option的value值。 |

说明

select组件不支持click事件。

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
2. <div class="container">
3. <select>
4. <option for="{{ array }}" value="{{ $item.value }}">
5. {{ $item.name }}
6. </option>
7. </select>
8. </div>
```

收起

自动换行

深色代码主题

复制

```
1. /* xxx.css */
2. .container {
3. display: flex;
4. justify-content: center;
5. align-items: center;
6. width: 100%;
7. height: 100%;
8. }
```

收起

自动换行

深色代码主题

复制

```
1. // xxx.js
2. export default {
3. data: {
4. array: [
5. {
6. "value": "下拉选项0", "name": "选项0"
7. },
8. {
9. "value": "下拉选项1", "name": "选项1"
10. },
11. {
12. "value": "下拉选项2", "name": "选项2"
13. },
14. {
15. "value": "下拉选项3", "name": "选项3"
16. },
17. ]
18. }
19. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cd/v3/VBfkSKPqQTmfeQl0C0E5Mg/zh-cn_image_0000002599479045.png?HW-CC-KV=V1&HW-CC-Date=20260511T040322Z&HW-CC-Expire=86400&HW-CC-Sign=D5DE0EDDD95973342453171F5FDEE10D421A7FB6662D66D94F7F6BB271B7BCD8)