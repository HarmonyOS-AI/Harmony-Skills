Toggle组件提供状态按钮样式、勾选框样式和开关样式，一般用于两种状态之间的切换。具体用法请参考[Toggle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-toggle)。

## 创建切换按钮

Toggle通过调用[ToggleOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-toggle#toggleoptions18对象说明)来创建，具体调用形式如下：

收起

自动换行

深色代码主题

复制

```
1. Toggle(options: { type: ToggleType, isOn?: boolean })
```

其中，ToggleType为开关类型，包括Button、Checkbox和Switch，isOn为切换按钮的状态。

API version 11开始，Checkbox默认样式由圆角方形变为圆形。

接口调用有以下两种形式：

* 创建不包含子组件的Toggle。

  当ToggleType为Checkbox或者Switch时，用于创建不包含子组件的Toggle：

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. Toggle({ type: ToggleType.Checkbox, isOn: false }).id('toggle1') // 请开发者替换为实际的id
  2. Toggle({ type: ToggleType.Checkbox, isOn: true }).id('toggle2') // 请开发者替换为实际的id
  ```

  [CreateToggle.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/ChooseComponent/entry/src/main/ets/pages/toggle/CreateToggle.ets#L30-L33)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/85/v3/VqlVOVOaRjqcN-C2P8wd-g/zh-cn_image_0000002535788462.png?HW-CC-KV=V1&HW-CC-Date=20260403T130007Z&HW-CC-Expire=86400&HW-CC-Sign=38020E7A7F7D6C1F24E0833582A43A880623606E7A15689146533155C48A5AC9)

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. Toggle({ type: ToggleType.Switch, isOn: false }).id('toggle3') // 请开发者替换为实际的id
  2. Toggle({ type: ToggleType.Switch, isOn: true }).id('toggle4') // 请开发者替换为实际的id
  ```

  [CreateToggle.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/ChooseComponent/entry/src/main/ets/pages/toggle/CreateToggle.ets#L39-L42)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8d/v3/Q-_t3vMzRn6JU55XqfML2w/zh-cn_image_0000002535948410.png?HW-CC-KV=V1&HW-CC-Date=20260403T130007Z&HW-CC-Expire=86400&HW-CC-Sign=11058AD6AABC95538614388A7BAB60B896F7D66EF854CA92A730DB85656C7EAB)
* 创建包含子组件的Toggle。

  当ToggleType为Button时，只能包含一个子组件，如果子组件有文本设置，则相应的文本内容会显示在按钮上。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. Toggle({ type: ToggleType.Button, isOn: false }) {
  2. Text('status button')
  3. .fontColor('#182431')
  4. .fontSize(12)
  5. }.width(100).id('toggle5') // 请开发者替换为实际的id

  7. Toggle({ type: ToggleType.Button, isOn: true }) {
  8. Text('status button')
  9. .fontColor('#182431')
  10. .fontSize(12)
  11. }.width(100).id('toggle6') // 请开发者替换为实际的id
  ```

  [CreateToggle.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/ChooseComponent/entry/src/main/ets/pages/toggle/CreateToggle.ets#L61-L73)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b4/v3/5n74oi2ySD-FryYMhZLdCQ/zh-cn_image_0000002566868241.png?HW-CC-KV=V1&HW-CC-Date=20260403T130007Z&HW-CC-Expire=86400&HW-CC-Sign=165FC89F5D647E0AE56470A199A818D83DA11019BF79066C7BFD88F097957CD5)

## 自定义样式

* 通过selectedColor属性设置Toggle打开选中后的背景颜色。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. Toggle({ type: ToggleType.Button, isOn: true }) {
  2. Text('status button')
  3. .fontColor('#182431')
  4. .fontSize(12)
  5. }.width(100)
  6. .selectedColor(Color.Pink)
  7. // ···

  9. Toggle({ type: ToggleType.Checkbox, isOn: true })
  10. .selectedColor(Color.Pink)
  11. // ···
  12. Toggle({ type: ToggleType.Switch, isOn: true })
  13. .selectedColor(Color.Pink)
  14. // ···
  ```

  [ToggleCustomStyle.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/ChooseComponent/entry/src/main/ets/pages/toggle/ToggleCustomStyle.ets#L31-L52)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1d/v3/AGkZmrJVR1aBmXBT6zoYkw/zh-cn_image_0000002566708261.png?HW-CC-KV=V1&HW-CC-Date=20260403T130007Z&HW-CC-Expire=86400&HW-CC-Sign=138700A64790AE4CC2389A4B96B1C499EDF90C74D70D8CBCC3DE48AE3D27F460)
* 通过switchPointColor属性设置Switch类型的圆形滑块颜色，仅对type为ToggleType.Switch生效。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. Toggle({ type: ToggleType.Switch, isOn: false })
  2. .switchPointColor(Color.Pink)
  3. // ···
  4. Toggle({ type: ToggleType.Switch, isOn: true })
  5. .switchPointColor(Color.Pink)
  6. // ···
  ```

  [ToggleCustomStyle.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/ChooseComponent/entry/src/main/ets/pages/toggle/ToggleCustomStyle.ets#L60-L71)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/71/v3/euAHQozJSLmDppUOevH6NQ/zh-cn_image_0000002535788466.png?HW-CC-KV=V1&HW-CC-Date=20260403T130007Z&HW-CC-Expire=86400&HW-CC-Sign=40C81DB4F96F830FEF2188C5B420008E06E0B75AE5EFB72BB27B9B9A850E7AE2)

## 添加事件

除支持[通用事件](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-events)外，Toggle还用于选中和取消选中后触发某些操作，可以绑定onChange事件来响应操作后的自定义行为。

收起

自动换行

深色代码主题

复制

```
1. Toggle({ type: ToggleType.Switch, isOn: false })
2. .onChange((isOn: boolean) => {
3. if(isOn) {
4. // 需要执行的操作
5. // ···
6. }
7. })
```

[CreateToggle.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/ChooseComponent/entry/src/main/ets/pages/toggle/CreateToggle.ets#L44-L54)

## 场景示例

Toggle用于切换蓝牙开关状态。

收起

自动换行

深色代码主题

复制

```
1. // xxx.ets
2. import { promptAction } from '@kit.ArkUI';

4. @Entry
5. @Component
6. export struct ToggleSample {
7. @State message: string = 'off';
8. pathStack: NavPathStack = new NavPathStack();

10. build() {
11. // ···
12. Column({ space: 8 }) {
13. Column({ space: 8 }) {
14. Text('Bluetooth Mode: ' + this.message)
15. .id('message')
16. Row() {
17. Text('Bluetooth')
18. Blank()
19. Toggle({ type: ToggleType.Switch })
20. .id('toggle') // 请开发者替换为实际的id
21. .onChange((isOn: boolean) => {
22. if (isOn) {
23. this.message = 'on';
24. promptAction.openToast({ 'message': 'Bluetooth is on.' });
25. } else {
26. this.message = 'off';
27. promptAction.openToast({ 'message': 'Bluetooth is off.' });
28. }
29. })
30. }.width('100%')
31. }
32. .alignItems(HorizontalAlign.Start)
33. .backgroundColor('#fff')
34. .borderRadius(12)
35. .padding(12)
36. .width('100%')
37. }
38. .width('100%')
39. .height('100%')
40. .padding({ left: 12, right: 12 })
41. // ···
42. .backgroundColor('#f1f2f3')
43. // 请将$r('app.string.ToggleCaseExample_title')替换为实际资源文件，在本示例中该资源文件的value值为"toggle蓝牙示例"
44. .title($r('app.string.ToggleCaseExample_title'))
45. }
46. }
```

[ToggleCaseExample.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/ChooseComponent/entry/src/main/ets/pages/toggle/ToggleCaseExample.ets#L16-L69)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/60/v3/afguYZHZSgmh-nV1maUcZg/zh-cn_image_0000002535948412.gif?HW-CC-KV=V1&HW-CC-Date=20260403T130007Z&HW-CC-Expire=86400&HW-CC-Sign=28F736A5B2423B79F5442244A1579665FBA08887E12BB800B6F17D80A11B1145)