从API version 18开始支持ArcButton。ArcButton是弧形按钮组件，用于圆形屏幕。为手表用户提供强调、普通、警告等样式按钮。具体用法请参考[ArcButton](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-arkui-advanced-arcbutton)。

## 创建按钮

ArcButton通过调用以下接口来创建。

收起

自动换行

深色代码主题

复制

```
1. ArcButton({
2. options: new ArcButtonOptions({
3. label: 'OK',
4. position: ArcButtonPosition.TOP_EDGE,
5. styleMode: ArcButtonStyleMode.EMPHASIZED_LIGHT,
6. // ···
7. })
8. })
```

[ButtonAlignTop.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/ButtonComponent/entry/src/main/ets/pages/ButtonAlignTop.ets#L27-L43)

其中，[label](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-arkui-advanced-arcbutton#arcbuttonoptions)设置按钮文字，[position](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-arkui-advanced-arcbutton#arcbuttonoptions)设置按钮类型，[styleMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-arkui-advanced-arcbutton#arcbuttonoptions)设置按钮样式。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/38/v3/STF7jURoRE2n0mh1KSawlw/zh-cn_image_0000002566708253.png?HW-CC-KV=V1&HW-CC-Date=20260403T125958Z&HW-CC-Expire=86400&HW-CC-Sign=129419A2DB98CE683825AED6A881ABB514965B6603176BA85C563E3A2264D04F)

## 设置按钮类型

ArcButton有上弧形按钮和下弧形按钮两种类型。使用[position](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-arkui-advanced-arcbutton#arcbuttonoptions)设置按钮类型。

* 下弧形按钮（默认类型）。

  通过将[position](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-arkui-advanced-arcbutton#arcbuttonoptions)属性设置为ArcButtonPosition.BOTTOM\_EDGE，可以将按钮设置为下弧形按钮。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. ArcButton({
  2. options: new ArcButtonOptions({
  3. label: 'OK',
  4. position: ArcButtonPosition.BOTTOM_EDGE,
  5. styleMode: ArcButtonStyleMode.EMPHASIZED_LIGHT,
  6. // ···
  7. })

  9. })
  ```

  [ButtonAlignBottom.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/ButtonComponent/entry/src/main/ets/pages/ButtonAlignBottom.ets#L27-L45)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d4/v3/Lq9WcXfyTmOzOOBkgwQvZA/zh-cn_image_0000002535788458.png?HW-CC-KV=V1&HW-CC-Date=20260403T125958Z&HW-CC-Expire=86400&HW-CC-Sign=6C3566EC24BB123A2E7889D00D24F2ADAA92B1FC0F404EF5670F636C6BAE6DB0)
* 上弧形按钮。

  通过将[position](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-arkui-advanced-arcbutton#arcbuttonoptions)属性设置为ArcButtonPosition.TOP\_EDGE，可以将按钮设置为上弧形按钮。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. ArcButton({
  2. options: new ArcButtonOptions({
  3. label: 'OK',
  4. position: ArcButtonPosition.TOP_EDGE,
  5. styleMode: ArcButtonStyleMode.EMPHASIZED_LIGHT,
  6. // ···
  7. })
  8. })
  ```

  [ButtonAlignTop.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/ButtonComponent/entry/src/main/ets/pages/ButtonAlignTop.ets#L27-L43)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/47/v3/gV8cUzmhRw6hUGGldF-j1Q/zh-cn_image_0000002535948404.png?HW-CC-KV=V1&HW-CC-Date=20260403T125958Z&HW-CC-Expire=86400&HW-CC-Sign=0F3E637D0759F5E633B3A48581BB81209AD079A1EA1FDD6EA6BE181AD76F942F)

## 自定义样式

* 设置背景色。

  使用[backgroundColor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-arkui-advanced-arcbutton#arcbuttonoptions)属性设置按钮的背景色。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. ArcButton({
  2. options: new ArcButtonOptions({
  3. label: 'OK',
  4. styleMode: ArcButtonStyleMode.CUSTOM,
  5. backgroundColor: ColorMetrics.resourceColor('#707070')
  6. })
  7. })
  ```

  [ButtonBcgColor.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/ButtonComponent/entry/src/main/ets/pages/ButtonBcgColor.ets#L23-L31)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/98/v3/xokIf3vZSYWjaLKKLHYbxA/zh-cn_image_0000002566868237.png?HW-CC-KV=V1&HW-CC-Date=20260403T125958Z&HW-CC-Expire=86400&HW-CC-Sign=A74DD32B60B02B5BB2F4240C0AD4D563C1F5FF37D7A311A178E63A356FC713F8)
* 设置文本颜色。

  使用[fontColor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-arkui-advanced-arcbutton#arcbuttonoptions)属性设置按钮的文本颜色。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. ArcButton({
  2. options: new ArcButtonOptions({
  3. label: 'OK',
  4. styleMode: ArcButtonStyleMode.CUSTOM,
  5. backgroundColor: ColorMetrics.resourceColor('#E84026'),
  6. fontColor: ColorMetrics.resourceColor('#707070')
  7. })
  8. })
  ```

  [ButtonFontColor.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/ButtonComponent/entry/src/main/ets/pages/ButtonFontColor.ets#L23-L32)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6c/v3/I03Smq88ThC9IXP0iW5GOw/zh-cn_image_0000002566708255.png?HW-CC-KV=V1&HW-CC-Date=20260403T125958Z&HW-CC-Expire=86400&HW-CC-Sign=955E7B19A31613BA7A6874D2618BF5E4813F046A52472D76BC0BF2C795CCF2DD)
* 设置阴影颜色。

  使用[shadowEnabled](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-arkui-advanced-arcbutton#arcbuttonoptions)属性启用按钮阴影，并通过[shadowColor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-arkui-advanced-arcbutton#arcbuttonoptions)属性设置按钮的阴影颜色。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. ArcButton({
  2. options: new ArcButtonOptions({
  3. label: 'OK',
  4. shadowEnabled: true,
  5. shadowColor: ColorMetrics.resourceColor('#ffec1022')
  6. })
  7. })
  ```

  [ButtonShadow.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/ButtonComponent/entry/src/main/ets/pages/ButtonShadow.ets#L23-L31)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5e/v3/jQJGuB07TsG6SpqHtPhsDA/zh-cn_image_0000002535788460.png?HW-CC-KV=V1&HW-CC-Date=20260403T125958Z&HW-CC-Expire=86400&HW-CC-Sign=57827D39275A48E40361A5BAF3C356D2201FDAC469F4FCDD97EA2EA391CB46A0)

## 添加事件

* 绑定onClick事件来响应点击操作后的自定义行为。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. ArcButton({
  2. options: new ArcButtonOptions({
  3. label: 'OK',
  4. // ···
  5. onClick: () => {
  6. hilog.info(DOMAIN, TAG, 'ArcButton onClick');
  7. },
  8. })
  9. })
  ```

  [ButtonAlignTop.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/ButtonComponent/entry/src/main/ets/pages/ButtonAlignTop.ets#L28-L44)
* 绑定onTouch事件来响应触摸操作后的自定义行为。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. ArcButton({
  2. options: new ArcButtonOptions({
  3. label: 'OK',
  4. // ···
  5. onTouch: (event: TouchEvent) => {
  6. hilog.info(DOMAIN, TAG, 'ArcButton onTouch');
  7. }
  8. })

  10. })
  ```

  [ButtonAlignBottom.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/ButtonComponent/entry/src/main/ets/pages/ButtonAlignBottom.ets#L28-L44)

## 场景示例

在亮度设置界面，进度条显示当前亮度为30%。点击重置后，亮度值将被重置为默认的50%。

运行该示例需要Wearable设备的支持。在src/main目录下的工程配置文件[module.json5](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/module-configuration-file)中[deviceTypes标签](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/module-configuration-file#devicetypes标签)内配置wearable。

收起

自动换行

深色代码主题

复制

```
1. "module": {
2. // ···
3. "deviceTypes": [
4. "wearable"
5. ],
6. // ···
7. }
```

[module.json5](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/ButtonComponent/entry/src/main/module.json5#L17-L70)

收起

自动换行

深色代码主题

复制

```
1. import { LengthMetrics, LengthUnit, ArcButton, ArcButtonOptions, ArcButtonStyleMode } from '@kit.ArkUI';

3. const BRIGHT_NESS_VALUE = 30;
4. const BRIGHT_NESS_VALUE_DEFAULT = 50;

6. @Entry
7. @ComponentV2
8. struct BrightnessPage {
9. @Local brightnessValue: number = BRIGHT_NESS_VALUE;
10. private defaultBrightnessValue: number = BRIGHT_NESS_VALUE_DEFAULT;

12. build() {
13. RelativeContainer() {
14. // 请将$r('app.string.Brightness')替换为实际资源文件，在本示例中该资源文件的value值为"设置亮度"
15. Text($r('app.string.Brightness'))
16. .fontColor(Color.White)
17. .id('id_brightness_set_text')
18. .fontSize(24)
19. .margin({ top: 16 })
20. .alignRules({
21. middle: { anchor: '__container__', align: HorizontalAlign.Center }
22. })

24. Text(`${this.brightnessValue} %`)
25. .fontColor(Color.White)
26. .id('id_brightness_min_text')
27. .margin({ left: 16 })
28. .alignRules({
29. start: { anchor: '__container__', align: HorizontalAlign.Start },
30. center: { anchor: '__container__', align: VerticalAlign.Center }
31. })

33. Slider({
34. value: this.brightnessValue,
35. min: 0,
36. max: 100,
37. style: SliderStyle.InSet
38. })
39. .blockColor('#191970')
40. .trackColor('#ADD8E6')
41. .selectedColor('#4169E1')
42. .width(150)
43. .id('id_brightness_slider')
44. .margin({ left: 16, right: 16 })
45. .onChange((value: number, mode: SliderChangeMode) => {
46. this.brightnessValue = value;
47. })
48. .alignRules({
49. center: { anchor: 'id_brightness_min_text', align: VerticalAlign.Center },
50. start: { anchor: 'id_brightness_min_text', align: HorizontalAlign.End }
51. })

53. ArcButton({
54. options: new ArcButtonOptions({
55. // 请将$r('app.string.Reset')替换为实际资源文件，在本示例中该资源文件的value值为"重置"
56. label: $r('app.string.Reset'),
57. styleMode: ArcButtonStyleMode.EMPHASIZED_LIGHT,
58. fontSize: new LengthMetrics(19, LengthUnit.FP),
59. onClick: () => {
60. this.brightnessValue = this.defaultBrightnessValue;
61. }
62. })
63. })
64. .alignRules({
65. middle: { anchor: '__container__', align: HorizontalAlign.Center },
66. bottom: { anchor: '__container__', align: VerticalAlign.Bottom }
67. })
68. }
69. .height('100%')
70. .width('100%')
71. .backgroundColor(Color.Black)
72. }
73. }
```

[ButtonBrightness.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/ButtonComponent/entry/src/main/ets/pages/ButtonBrightness.ets#L16-L90)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cd/v3/vNoG-Q_bRfG2o42gpndeig/zh-cn_image_0000002535948406.png?HW-CC-KV=V1&HW-CC-Date=20260403T125958Z&HW-CC-Expire=86400&HW-CC-Sign=B2806F76F879DBDBBC6476F6088B986B1E28713F9FFDA5CA3A91F6795AFD00B6)