交互式组件，提供单选框功能。

说明

从API version 8 开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。

## 属性

PhonePC/2in1TabletTVWearable

除支持[通用属性](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-service-widget-common-attributes)外，还支持如下属性：

展开

| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| type | string | radio | 是 | input组件类型，当前仅支持radio类型：  - "radio"：定义单选按钮，允许在多个拥有相同name值的选项中选中其中一个。 |
| checked | boolean | false | 否 | 当前组件是否选中，true表示选中，false表示未选中。 |
| name | string | - | 否 | input组件的名称。 |
| value | string | - | 否 | input组件的value值，类型为radio时必填且相同name值的选项该值唯一。 |

## 样式

PhonePC/2in1TabletTVWearable

支持[通用样式](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-service-widget-common-styles)。

## 事件

PhonePC/2in1TabletTVWearable

展开

| 名称 | 参数 | 描述 |
| --- | --- | --- |
| change | $event.checkedItem | radio单选框的checked状态发生变化时触发该事件，返回选中的组件value值。 |
| click | - | 点击动作触发该事件。 |

## 示例

PhonePC/2in1TabletTVWearable

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div class="content">
3. <input type="radio" checked='true' name="radioSample" value="radio1" onchange="onRadioChange"></input>
4. <input type="radio" checked='false' name="radioSample" value="radio2" onchange="onRadioChange"></input>
5. <input type="radio" checked='false' name="radioSample" value="radio3" onchange="onRadioChange"></input>
6. </div>
```

收起

自动换行

深色代码主题

复制

```
1. /* xxx.css */
2. .content{
3. width: 100%;
4. height: 200px;
5. justify-content: center;
6. align-items: center;
7. }
```

收起

自动换行

深色代码主题

复制

```
1. {
2. "actions": {
3. "onRadioChange":{
4. "action": "message",
5. "params": {
6. "checkedRadio": "$event.checkedItem"
7. }
8. }
9. }
10. }
```

**4\*4卡片**

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f0/v3/YvTvInIoQHiHU3jjMWpP_g/zh-cn_image_0000002599479277.gif?HW-CC-KV=V1&HW-CC-Date=20260511T040927Z&HW-CC-Expire=86400&HW-CC-Sign=1995001B9857DF0E24DE0D797EB58FE18C3E653813145026E8220F41CA7DB4BB)