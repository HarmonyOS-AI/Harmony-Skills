Button是按钮组件，通常用于响应用户的点击操作，其类型包括胶囊按钮、圆形按钮、普通按钮、圆角矩形按钮。Button作为容器使用时可以通过添加子组件实现包含文字、图片等元素的按钮。具体用法请参考[Button](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-button)。

## 创建按钮

Button通过调用接口来创建，接口调用有以下两种形式：

* 通过label和[ButtonOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-button#buttonoptions对象说明)创建不包含子组件的按钮。以ButtonOptions中的type和stateEffect为例。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. Button(label?: ResourceStr, options?: { type?: ButtonType, stateEffect?: boolean })
  ```

  其中，label用来设置按钮文字，type用于设置Button类型，stateEffect属性设置Button是否开启点击效果。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. Button('Ok', { type: ButtonType.Normal, stateEffect: true })
  2. .borderRadius(8)
  3. .backgroundColor(0x317aff)
  4. .width(90)
  5. .height(40)
  ```

  [CreateButton.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/ChooseComponent/entry/src/main/ets/pages/button/CreateButton.ets#L36-L42)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9d/v3/-i32agLgRfWllADenw-QRg/zh-cn_image_0000002566708245.png?HW-CC-KV=V1&HW-CC-Date=20260403T125954Z&HW-CC-Expire=86400&HW-CC-Sign=932BACB076F55C651CECB3CA6C7D0182C5E752190C51D81F59DF10B685EF3B64)
* 通过[ButtonOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-button#buttonoptions对象说明)创建包含子组件的按钮。以ButtonOptions中的type和stateEffect为例。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. Button(options?: {type?: ButtonType, stateEffect?: boolean})
  ```

  只支持包含一个子组件，子组件可以是基础组件或者容器组件。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. Button({ type: ButtonType.Normal, stateEffect: true }) {
  2. Row() {
  3. // 请将$r('app.media.loading')替换为实际资源文件
  4. Image($r('app.media.loading')).width(20).height(40).margin({ left: 12 })
  5. Text('loading').fontSize(12).fontColor(0xffffff).margin({ left: 5, right: 12 })
  6. }.alignItems(VerticalAlign.Center)
  7. }.borderRadius(8).backgroundColor(0x317aff).width(90).height(40)
  ```

  [CreateButton.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/ChooseComponent/entry/src/main/ets/pages/button/CreateButton.ets#L59-L67)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/75/v3/137T1Rz3TRSx4TBKbnp3Fg/zh-cn_image_0000002535788448.png?HW-CC-KV=V1&HW-CC-Date=20260403T125954Z&HW-CC-Expire=86400&HW-CC-Sign=62231AC2EC7D58418B9ED8668EB1F9D1A57FA9FD85ECCD2CAECBAFCD2B136886)

## 设置按钮类型

Button有四种可选类型，分别为胶囊类型（Capsule）、圆形按钮（Circle）、普通按钮（Normal）和圆角矩形按钮（ROUNDED\_RECTANGLE），通过type进行设置。

* 胶囊按钮（默认类型）。

  此类型按钮的圆角自动设置为高度的一半，不支持通过borderRadius属性重新设置圆角。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. Button('Disable', { type: ButtonType.Capsule, stateEffect: false })
  2. .backgroundColor(0x317aff)
  3. .width(90)
  4. .height(40)
  ```

  [SetButtonType.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/ChooseComponent/entry/src/main/ets/pages/button/SetButtonType.ets#L39-L44)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/54/v3/-DHk11mOSwWxeibAvalN4w/zh-cn_image_0000002535948396.png?HW-CC-KV=V1&HW-CC-Date=20260403T125954Z&HW-CC-Expire=86400&HW-CC-Sign=953BE48AC6AAA5BE9D4EC6AFBB8170529F056B2F5645D37CB140FFA706604698)
* 圆形按钮。

  此类型按钮为圆形，不支持通过borderRadius属性重新设置圆角。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. Button('Circle', { type: ButtonType.Circle, stateEffect: false })
  2. .backgroundColor(0x317aff)
  3. .width(90)
  4. .height(90)
  ```

  [SetButtonType.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/ChooseComponent/entry/src/main/ets/pages/button/SetButtonType.ets#L57-L62)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/08/v3/MPXgSpJXQ9SwKxStqkiXiQ/zh-cn_image_0000002566868227.png?HW-CC-KV=V1&HW-CC-Date=20260403T125954Z&HW-CC-Expire=86400&HW-CC-Sign=25D1F108A9FD83F0D4F38B29E78E0F57C12E292EB4FC5C01560F4D3D07FBBDEF)
* 普通按钮。

  此类型的按钮默认圆角为0，支持通过borderRadius属性重新设置圆角。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. Button('Ok', { type: ButtonType.Normal, stateEffect: true })
  2. .borderRadius(8)
  3. .backgroundColor(0x317aff)
  4. .width(90)
  5. .height(40)
  ```

  [SetButtonType.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/ChooseComponent/entry/src/main/ets/pages/button/SetButtonType.ets#L74-L80)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b/v3/VNrzjujBTZaYVMlKvv7wsg/zh-cn_image_0000002566708247.png?HW-CC-KV=V1&HW-CC-Date=20260403T125954Z&HW-CC-Expire=86400&HW-CC-Sign=1C4AD59415D4B5305D98D0ABB591B4196A00AB975F2218C1454D8FA5864FB41B)
* 圆角矩形按钮。

  当[controlSize](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-button#controlsize11)为NORMAL时，默认圆角大小为20vp，[controlSize](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-button#controlsize11)为SMALL时，圆角大小为14vp，支持通过borderRadius属性重新设置圆角。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. Button('Disable', { type: ButtonType.ROUNDED_RECTANGLE, stateEffect: true })
  2. .backgroundColor(0x317aff)
  3. .width(90)
  4. .height(40)
  ```

  [SetButtonType.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/ChooseComponent/entry/src/main/ets/pages/button/SetButtonType.ets#L90-L95)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a6/v3/HgEYdIt0TlC7gSNMyiTBDA/zh-cn_image_0000002535948396.png?HW-CC-KV=V1&HW-CC-Date=20260403T125954Z&HW-CC-Expire=86400&HW-CC-Sign=B7B42D2D792D15E7D9D5FADD48E1B6E6FC4BDDE150BF9D136E537C9DC3137279)

## 自定义样式

* 设置边框弧度。

  使用通用属性来自定义按钮样式。例如通过borderRadius属性设置按钮的边框弧度。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. Button('circle border', { type: ButtonType.Normal })
  2. .borderRadius(20)
  3. .height(40)
  ```

  [ButtonCustomStyle.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/ChooseComponent/entry/src/main/ets/pages/button/ButtonCustomStyle.ets#L40-L44)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/29/v3/rRT4mPT6TtSsaA0xYH_odA/zh-cn_image_0000002535788452.png?HW-CC-KV=V1&HW-CC-Date=20260403T125954Z&HW-CC-Expire=86400&HW-CC-Sign=C67B63CE8CF1D9B880B61C6FC2C68DB6CA8614ECE96C2C0DFD2585395B6C6894)
* 设置文本样式。

  通过添加文本样式设置按钮文本的展示样式。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. Button('font style', { type: ButtonType.Normal })
  2. .fontSize(20)
  3. .fontColor(Color.Pink)
  4. .fontWeight(800)
  ```

  [ButtonCustomStyle.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/ChooseComponent/entry/src/main/ets/pages/button/ButtonCustomStyle.ets#L58-L63)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/67/v3/42R7s7k4SZKtMravof5i5w/zh-cn_image_0000002535948398.png?HW-CC-KV=V1&HW-CC-Date=20260403T125954Z&HW-CC-Expire=86400&HW-CC-Sign=2AEF539A31B0A206F8DE38A13703186343A82E8B6AF9BF9D3E317FBD40B5FC90)
* 设置背景颜色。

  添加backgroundColor属性设置按钮的背景颜色。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. Button('background color').backgroundColor(0xF55A42)
  ```

  [ButtonCustomStyle.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/ChooseComponent/entry/src/main/ets/pages/button/ButtonCustomStyle.ets#L74-L76)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c6/v3/qn2q8vObTRKFiN3jiN_1jw/zh-cn_image_0000002566868231.png?HW-CC-KV=V1&HW-CC-Date=20260403T125954Z&HW-CC-Expire=86400&HW-CC-Sign=794BFDC57BAB7EA2AA60093C25815B98972C85030ECFED197ED59AD55F67E737)
* 创建功能型按钮。

  创建删除操作的按钮。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. Button({ type: ButtonType.Circle, stateEffect: true }) {
  2. // 请将$r('app.media.ic_public_delete_filled3')替换为实际资源文件
  3. Image($r('app.media.ic_public_delete_filled')).width(30).height(30)
  4. }.width(55).height(55).margin({ 'left': 20 }).backgroundColor(0xF55A42)
  ```

  [ButtonCustomStyle.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/ChooseComponent/entry/src/main/ets/pages/button/ButtonCustomStyle.ets#L83-L88)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/54/v3/cSj6IwAsS7WoF8suRcNuaQ/zh-cn_image_0000002566708251.png?HW-CC-KV=V1&HW-CC-Date=20260403T125954Z&HW-CC-Expire=86400&HW-CC-Sign=200463BFCF614358B9967F5A8439C705D9D900A60800E1699FAFB5946030A58B)

## 添加事件

Button组件通常用于触发某些操作，可以绑定onClick事件来响应点击操作后的自定义行为。

收起

自动换行

深色代码主题

复制

```
1. Button('Ok', { type: ButtonType.Normal, stateEffect: true })
2. .onClick(()=>{
3. hilog.info(DOMAIN, 'testTag', 'Button onClick');
4. }).margin(10)
```

[ButtonCaseLogin.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/ChooseComponent/entry/src/main/ets/pages/button/ButtonCaseLogin.ets#L34-L39)

## 场景示例

* 用于启动操作。

  可以用按钮启动任何用户界面元素，按钮会根据用户的操作触发相应的事件。例如，在List容器里通过点击按钮进行页面跳转。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. const DOMAIN = 0x0000;
  2. // xxx.ets
  3. @Entry
  4. @Component
  5. export struct ButtonCaseTouch {
  6. pathStack: NavPathStack = new NavPathStack();

  8. @Builder
  9. PageMap(name: string) {
  10. if (name === 'first_page') {
  11. pageOneTmp()
  12. } else if (name === 'second_page') {
  13. pageTwoTmp()
  14. } else if (name === 'third_page') {
  15. pageThreeTmp()
  16. }
  17. }

  19. build() {
  20. NavDestination() {
  21. Navigation(this.pathStack) {
  22. List({ space: 4 }) {
  23. ListItem() {
  24. Button('First').onClick(() => {
  25. this.pathStack.pushPath({ name: 'first_page' });
  26. })
  27. .width('100%')
  28. }

  30. ListItem() {
  31. Button('Second').onClick(() => {
  32. this.pathStack.pushPath({ name: 'second_page' });
  33. })
  34. .width('100%')
  35. }

  37. ListItem() {
  38. Button('Third').onClick(() => {
  39. this.pathStack.pushPath({ name: 'third_page' });
  40. })
  41. .width('100%')
  42. }
  43. }
  44. .listDirection(Axis.Vertical)
  45. .backgroundColor(0xDCDCDC).padding(20)
  46. }
  47. .mode(NavigationMode.Stack)
  48. .navDestination(this.PageMap)
  49. }
  50. }
  51. }

  53. // pageOne
  54. @Component
  55. export struct pageOneTmp {
  56. pathStack: NavPathStack = new NavPathStack();

  58. build() {
  59. NavDestination() {
  60. Column() {
  61. Text('first_page')
  62. }.width('100%').height('100%')
  63. }.title('pageOne')
  64. .onBackPressed(() => {
  65. const popDestinationInfo = this.pathStack.pop(); // 弹出路由栈栈顶元素
  66. // 请将$r('app.string.return_value')替换为实际资源文件，在本示例中该资源文件的value值为"返回值"
  67. hilog.info(DOMAIN, 'testTag', 'pop' + $r('app.string.return_value') + JSON.stringify(popDestinationInfo));
  68. return true;
  69. })
  70. .onReady((context: NavDestinationContext) => {
  71. this.pathStack = context.pathStack;
  72. })
  73. }
  74. }

  76. // pageTwo
  77. @Component
  78. export struct pageTwoTmp {
  79. pathStack: NavPathStack = new NavPathStack();

  81. build() {
  82. NavDestination() {
  83. Column() {
  84. Text('second_page')
  85. }.width('100%').height('100%')
  86. }.title('pageTwo')
  87. .onBackPressed(() => {
  88. const popDestinationInfo = this.pathStack.pop(); // 弹出路由栈栈顶元素
  89. // 请将$r('app.string.return_value')替换为实际资源文件，在本示例中该资源文件的value值为"返回值"
  90. hilog.info(DOMAIN, 'testTag', 'pop' + $r('app.string.return_value') + JSON.stringify(popDestinationInfo));
  91. return true;
  92. })
  93. .onReady((context: NavDestinationContext) => {
  94. this.pathStack = context.pathStack;
  95. })
  96. }
  97. }

  99. // pageThree
  100. @Component
  101. export struct pageThreeTmp {
  102. pathStack: NavPathStack = new NavPathStack();

  104. build() {
  105. NavDestination() {
  106. Column() {
  107. Text('third_page')
  108. }.width('100%').height('100%')
  109. }.title('pageThree')
  110. .onBackPressed(() => {
  111. const popDestinationInfo = this.pathStack.pop(); // 弹出路由栈栈顶元素
  112. /// 请将$r('app.string.return_value')替换为实际资源文件，在本示例中该资源文件的value值为"返回值"
  113. hilog.info(DOMAIN, 'testTag', 'pop' + $r('app.string.return_value') + JSON.stringify(popDestinationInfo));
  114. return true;
  115. })
  116. .onReady((context: NavDestinationContext) => {
  117. this.pathStack = context.pathStack;
  118. })
  119. }
  120. }
  ```

  [ButtonCaseTouch.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/ChooseComponent/entry/src/main/ets/pages/button/ButtonCaseTouch.ets#L17-L138)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/0f/v3/GAQgKPqdR0KkaStHQbnTkw/zh-cn_image_0000002535788454.gif?HW-CC-KV=V1&HW-CC-Date=20260403T125954Z&HW-CC-Expire=86400&HW-CC-Sign=EDBC4750EB0465A3060D97AC2ABBBA997594AE20F292C494EEBDAC18FF40DAD8)
* 用于提交表单。

  在用户登录/注册页面，使用按钮进行登录或注册操作。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. // xxx.ets
  2. const DOMAIN = 0x0000;
  3. @Entry
  4. @Component
  5. export struct ButtonCaseLogin {
  6. build() {
  7. NavDestination() {
  8. Column() {
  9. TextInput({ placeholder: 'input your username' }).margin({ top: 20 })
  10. TextInput({ placeholder: 'input your password' }).type(InputType.Password).margin({ top: 20 })
  11. Button('Register').width(300).margin({ top: 20 })
  12. .onClick(() => {
  13. // 需要执行的操作
  14. })
  15. // ···
  16. }.padding(20)
  17. }
  18. }
  19. }
  ```

  [ButtonCaseLogin.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/ChooseComponent/entry/src/main/ets/pages/button/ButtonCaseLogin.ets#L17-L45)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f9/v3/WuJh8mAYTT6-Kdfaxffakg/zh-cn_image_0000002535948402.png?HW-CC-KV=V1&HW-CC-Date=20260403T125954Z&HW-CC-Expire=86400&HW-CC-Sign=3E6DD200B207779060BB8EAAF0BC1D9BDC068DADADAE9D11DC67D99369759240)
* 悬浮按钮。

  在可以滑动的界面，滑动时按钮始终保持悬浮状态。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. // xxx.ets
  2. @Entry
  3. @Component
  4. export struct HoverButtonExample {
  5. private arr: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  6. build() {
  7. NavDestination() {
  8. Stack() {
  9. List({ space: 20, initialIndex: 0 }) {
  10. ForEach(this.arr, (item: number) => {
  11. ListItem() {
  12. Text('' + item)
  13. .width('100%')
  14. .height(100)
  15. .fontSize(16)
  16. .textAlign(TextAlign.Center)
  17. .borderRadius(10)
  18. .backgroundColor(0xFFFFFF)
  19. }
  20. }, (item: number) => item.toString())
  21. }.width('90%')

  23. Button() {
  24. // 请将$r('app.media.ic_public_add')替换为实际资源文件
  25. Image($r('app.media.ic_public_add'))
  26. .width(50)
  27. .height(50)
  28. }
  29. .width(60)
  30. .height(60)
  31. .position({ x: '80%', y: 600 })
  32. .shadow({ radius: 10 })
  33. .onClick(() => {
  34. // 需要执行的操作
  35. })
  36. }
  37. .width('100%')
  38. .height('100%')
  39. .backgroundColor(0xDCDCDC)
  40. .padding({ top: 5 })
  41. }
  42. }
  43. }
  ```

  [HoverButtonExample.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/ChooseComponent/entry/src/main/ets/pages/button/HoverButtonExample.ets#L16-L60)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cf/v3/6JkDcWgDSWC0064_6GygWg/zh-cn_image_0000002566868233.gif?HW-CC-KV=V1&HW-CC-Date=20260403T125954Z&HW-CC-Expire=86400&HW-CC-Sign=9CD12069809BCF4D4CD6AE0C7208D7055AE49B6EE887A79A8041C6DAE5E3E767)