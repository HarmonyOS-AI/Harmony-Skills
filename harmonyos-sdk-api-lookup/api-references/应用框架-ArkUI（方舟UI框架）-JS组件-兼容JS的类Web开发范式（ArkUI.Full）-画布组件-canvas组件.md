说明

从API version 4开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。

提供画布组件。用于自定义绘制图形。

## 权限列表

PhonePC/2in1TabletTVWearable

无

## 子组件

PhonePC/2in1TabletTVWearable

不支持。

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

除支持[通用方法](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-common-methods)外，还支持如下方法：

### getContext

PhonePC/2in1TabletTVWearable

getContext(type: '2d', options?: ContextAttrOptions): CanvasRenderingContext2D

获取canvas绘图上下文。不支持在onInit和onReady中进行调用。

**参数：**

展开

| 参数名 | 参数类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| type | string | 是 | 设置为'2d'，返回值为2D绘制对象，该对象可用于在画布组件上绘制矩形、文本、图片等。 |
| options6+ | ContextAttrOptions | 否 | 当前仅支持配置是否开启抗锯齿功能，默认为关闭。 |

**返回值：**

展开

| 类型 | 说明 |
| --- | --- |
| [CanvasRenderingContext2D](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-canvas-canvasrenderingcontext2d) | 用于在画布组件上绘制矩形、文本、图片等。 |

### toDataURL6+

PhonePC/2in1TabletTVWearable

toDataURL(type?: string, quality?: number): string

生成一个包含图片展示的URL。

**参数：**

展开

| 参数名 | 参数类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| type | string | 否 | 可选参数，用于指定图像格式，默认格式为image/png。 |
| quality | number | 否 | 在指定图片格式为image/jpeg或image/webp的情况下，可以从0到1的区间内选择图片的质量。如果超出取值范围，将会使用默认值0.92。 |

**返回值：**

展开

| 类型 | 说明 |
| --- | --- |
| string | 图像的URL地址。 |

## ContextAttrOptions6+

PhonePC/2in1TabletTVWearable

用于配置Canvas渲染上下文属性的选项对象。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

展开

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| antialias | boolean | 否 | 是 | 是否开启抗锯齿功能。  true表示开启抗锯齿功能；false表示不开启抗锯齿功能。  默认值：false |

## 示例

PhonePC/2in1TabletTVWearable

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div style="margin: 100; flex-direction: column">
3. <canvas ref="canvas1" style="width: 200px; height: 150px; background-color: rgb(213, 213, 213);"></canvas>
4. <input type="button" style="width: 180px; height: 60px; margin: 13;" value="fillStyle" onclick="handleClick" />
5. </div>
```

收起

自动换行

深色代码主题

复制

```
1. // xxx.js
2. export default {
3. handleClick() {
4. const el = this.$refs.canvas1;
5. var dataURL = el.toDataURL();
6. console.info(dataURL);
7. // "data:image/png;base64,xxxxxxxx..."
8. }
9. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3/v3/XPlmMJ59Q-iPyUNJwELAVA/zh-cn_image_0000002568759858.png?HW-CC-KV=V1&HW-CC-Date=20260511T040403Z&HW-CC-Expire=86400&HW-CC-Sign=5CEBA796A06F42678A4AF3BD649632E5520FAD5277FA9CB2DC8E836D3A0534B7)