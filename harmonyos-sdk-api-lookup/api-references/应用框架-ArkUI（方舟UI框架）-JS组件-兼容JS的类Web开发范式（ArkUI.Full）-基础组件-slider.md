说明

从API version 4开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。

滑动条组件，用来快速调节设置值，如音量、亮度等。

## 子组件

PhonePC/2in1TabletTVWearable

不支持。

## 属性

PhonePC/2in1TabletTVWearable

除支持[通用属性](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-common-attributes)外，还支持以下属性：

展开

| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| min | number | 0 | 否 | 滑动选择器的最小值。 |
| max | number | 100 | 否 | 滑动选择器的最大值。 |
| step | number | 1 | 否 | 每次滑动的步长。 |
| value | number | 0 | 否 | 滑动选择器的初始值。 |
| mode5+ | string | outset | 否 | 滑动条样式：  - outset：滑块在滑杆上；  - inset：滑块在滑杆内。 |
| showsteps5+ | boolean | false | 否 | 是否显示步长标识。true表示显示步长标识，false表示不显示步长标识。 |
| showtips5+ | boolean | false | 否 | 滑动时是否有气泡提示百分比。true表示有气泡提示百分比，false表示没有气泡提示百分比。 |

## 样式

PhonePC/2in1TabletTVWearable

除支持[通用样式](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-common-styles)外，还支持如下样式：

展开

| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| color | <color> | #19000000 | 否 | 滑动条的背景颜色。 |
| selected-color | <color> | #ff007dff | 否 | 滑动条的已选择颜色。 |
| block-color | <color> | #ffffff | 否 | 滑动条的滑块颜色。 |

## 事件

PhonePC/2in1TabletTVWearable

除支持[通用事件](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-common-events)外，还支持如下事件：

展开

| 名称 | 参数 | 描述 |
| --- | --- | --- |
| change | ChangeEvent | 选择值发生变化时触发该事件。 |

**表1** ChangeEvent

展开

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| value5+ | number | 当前slider的进度值。 |
| mode5+ | string | 当前change事件的类型，可选值为：  - start：slider的值开始改变。  - move：slider的值跟随手指拖动中。  - end：slider的值结束改变。  - click：slider的值在点击进度条后改变。 |

## 示例

PhonePC/2in1TabletTVWearable

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div class="container">
3. <slider min="0" max="100" value="{{ value }}" mode="outset" showtips="true"></slider>
4. <slider class="slider" min="0" max="100" value="{{ value }}" step="20" mode="inset"  showtips="true"></slider>
5. <slider class="slider" min="0" max="100" value="{{ value }}" showsteps="true" step="20" mode="inset"  showtips="false"></slider>
6. </div>
```

收起

自动换行

深色代码主题

复制

```
1. /* xxx.css */
2. .container {
3. flex-direction: column;
4. justify-content: center;
5. align-items: center;
6. }
7. .slider{
8. margin-top: 100px;
9. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e6/v3/XPPvU4LbS12x5yjxUv77EA/zh-cn_image_0000002568759854.png?HW-CC-KV=V1&HW-CC-Date=20260511T040325Z&HW-CC-Expire=86400&HW-CC-Sign=334B28BEF63327A918318DD26B8F550C042527C7E4BDF36849057714C4168392)