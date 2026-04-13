ArcSwiper是弧形轮播组件，在圆形屏幕场景下使用，提供弧形轮播显示能力。具体用法请参考[ArcSwiper](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-arcswiper)。

在使用ArcSwiper组件之前，需要在代码中先导入ArcSwiper模块。

收起

自动换行

深色代码主题

复制

```
1. import {
2. ArcSwiper,
3. ArcSwiperAttribute,
4. ArcDotIndicator,
5. ArcDirection,
6. ArcSwiperController
7. } from '@kit.ArkUI';
```

[ArcSwiperStyles.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/ScrollableComponent/entry/src/main/ets/pages/arcSwiper/ArcSwiperStyles.ets#L16-L24)

## 设置导航点样式

ArcSwiper提供了默认的弧形导航点样式，导航点默认显示在ArcSwiper下方居中位置，开发者也可以通过[indicator](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-arcswiper#indicator)属性自定义弧形导航点的样式。

通过indicator属性，开发者可以设置弧形导航点的方向，同时也可以设置导航点和被选中导航点的颜色。

* 导航点使用默认样式

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. ArcSwiper() {
  2. Text('0')
  3. .width(233)
  4. .height(233)
  5. .backgroundColor(Color.Gray)
  6. .textAlign(TextAlign.Center)
  7. .fontSize(30)

  9. Text('1')
  10. .width(233)
  11. .height(233)
  12. .backgroundColor(Color.Green)
  13. .textAlign(TextAlign.Center)
  14. .fontSize(30)

  16. Text('2')
  17. .width(233)
  18. .height(233)
  19. .backgroundColor(Color.Pink)
  20. .textAlign(TextAlign.Center)
  21. .fontSize(30)
  22. }
  ```

  [ArcSwiperStyles.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/ScrollableComponent/entry/src/main/ets/pages/arcSwiper/ArcSwiperStyles.ets#L35-L58)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7f/v3/Jg22-2ezQKm7RBarnNACFg/zh-cn_image_0000002535948390.png?HW-CC-KV=V1&HW-CC-Date=20260403T125941Z&HW-CC-Expire=86400&HW-CC-Sign=745899A494EAA510B4EEFA81D8280B52E4DC6637693E48D9E7595EB64330CE8C)
* 自定义导航点样式

  导航点位于ArcSwiper组件6点钟方向，导航点颜色设为红色，被选中导航点颜色为蓝色。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. ArcSwiper() {
  2. // ···
  3. }
  4. .indicator(
  5. new ArcDotIndicator()
  6. .arcDirection(ArcDirection.SIX_CLOCK_DIRECTION) // 设置导航点位于6点钟方向
  7. .itemColor(Color.Red) // 设置导航点颜色为红色
  8. .selectedItemColor(Color.Blue) // 设置选中导航点颜色为蓝色
  9. )
  ```

  [ArcSwiperStyles.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/ScrollableComponent/entry/src/main/ets/pages/arcSwiper/ArcSwiperStyles.ets#L62-L93)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c3/v3/mxCWGua5TliDs3DYxS4kOw/zh-cn_image_0000002566868223.png?HW-CC-KV=V1&HW-CC-Date=20260403T125941Z&HW-CC-Expire=86400&HW-CC-Sign=FB9BFFEF7C57576377B716A2E888760B4790824A9FA4A85DD19D70308CFAB523)

## 控制页面切换方式

ArcSwiper支持滑动手指、点击导航点、旋转表冠和控制控制器四种方式切换页面。以下示例展示通过控制控制器和旋转表冠翻页的方法。

* 控制控制器翻页。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. // 导入ArcButton和ArcSwiper模块
  2. import {
  3. ArcButton,
  4. ArcButtonOptions,
  5. ArcButtonStatus,
  6. ArcButtonStyleMode,
  7. ArcButtonPosition,
  8. ArcSwiper,
  9. ArcSwiperAttribute, // ArcSwiper的属性依赖ArcSwiperAttribute对象导入，不建议删除该对象的引入。
  10. ArcSwiperController,
  11. // ···
  12. } from '@kit.ArkUI';
  13. // ···
  14. @Entry
  15. @Component
  16. export struct ArcSwiperToggle {
  17. private wearableSwiperController: ArcSwiperController = new ArcSwiperController();

  19. build() {
  20. // ···
  21. Column({ space: 12 }) {
  22. // ···
  23. Stack() {
  24. ArcSwiper(
  25. this.wearableSwiperController
  26. ) {
  27. // ···
  28. }
  29. .vertical(true)
  30. .indicator(false)

  32. // ···


  35. Column() {
  36. ArcButton({
  37. options: new ArcButtonOptions({
  38. label: 'previous',
  39. position: ArcButtonPosition.TOP_EDGE,
  40. styleMode: ArcButtonStyleMode.EMPHASIZED_LIGHT,
  41. onClick: () => {
  42. this.wearableSwiperController.showPrevious(); // 通过controller切换到前一页
  43. }
  44. })
  45. })

  47. Blank()

  49. ArcButton({
  50. options: new ArcButtonOptions({
  51. label: 'next',
  52. position: ArcButtonPosition.BOTTOM_EDGE,
  53. styleMode: ArcButtonStyleMode.EMPHASIZED_LIGHT,
  54. onClick: () => {
  55. this.wearableSwiperController.showNext(); // 通过controller切换到后一页
  56. }
  57. })
  58. })
  59. }.width('100%').height('100%')
  60. }
  61. // ···
  62. }
  63. // ···
  64. }
  65. }
  ```

  [ArcSwiperToggle.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/ScrollableComponent/entry/src/main/ets/pages/arcSwiper/ArcSwiperToggle.ets#L16-L145)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9/v3/SU55bBPMTMKotaC-6WCoHQ/zh-cn_image_0000002566708243.gif?HW-CC-KV=V1&HW-CC-Date=20260403T125941Z&HW-CC-Expire=86400&HW-CC-Sign=FAE225570AE243B1AD82FFFBFDF44D82016FD0AA6E7B96F49F50BF7D88F1290E)
* 旋转表冠翻页。

  ArcSwiper在获得焦点时能够响应旋转表冠的操作，用户可以通过旋转表冠来滑动ArcSwiper，从而浏览数据。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. ArcSwiper(
  2. // ···
  3. ) {
  4. // ···
  5. }
  6. // ···

  8. .focusable(true)
  9. .focusOnTouch(true)
  10. .defaultFocus(true)
  ```

  [ArcSwiperToggle.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/ScrollableComponent/entry/src/main/ets/pages/arcSwiper/ArcSwiperToggle.ets#L52-L98)

  还可以通过设置[digitalCrownSensitivity](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-arcswiper#digitalcrownsensitivity)属性来调整表冠对事件响应的灵敏度，以适应不同规模的数据处理。在处理大量数据时，可以提高响应事件的灵敏度；而在处理少量数据时，则可以降低灵敏度设置。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. ArcSwiper(
  2. // ···
  3. ) {
  4. // ···
  5. }
  6. // ···

  8. .digitalCrownSensitivity(CrownSensitivity.MEDIUM)
  ```

  [ArcSwiperToggle.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/ScrollableComponent/entry/src/main/ets/pages/arcSwiper/ArcSwiperToggle.ets#L51-L102)

## 设置轮播方向

ArcSwiper支持水平和垂直方向上进行轮播，主要通过[vertical](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-arcswiper#vertical)属性控制。

当vertical为true时，表示在垂直方向上进行轮播；为false时，表示在水平方向上进行轮播。vertical默认值为false。

* 设置水平方向上轮播。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. ArcSwiper() {
  2. // ···
  3. }
  4. .indicator(true)
  5. .vertical(false)
  ```

  [ArcSwiperHorizontal.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/ScrollableComponent/entry/src/main/ets/pages/arcSwiper/ArcSwiperHorizontal.ets#L30-L57)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2c/v3/5rlhMy1nRJ6auq6Tcb-HNA/zh-cn_image_0000002535948390.png?HW-CC-KV=V1&HW-CC-Date=20260403T125941Z&HW-CC-Expire=86400&HW-CC-Sign=FB11CFF858DA5DD4775AB7AF55C015087BE6016A6F7473B939217C2ED98A7EA1)
* 设置垂直方向轮播，导航点设为3点钟方向。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. ArcSwiper() {
  2. // ···
  3. }
  4. .indicator(new ArcDotIndicator()
  5. .arcDirection(ArcDirection.THREE_CLOCK_DIRECTION))
  6. .vertical(true)
  ```

  [ArcSwiperVertical.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/ScrollableComponent/entry/src/main/ets/pages/arcSwiper/ArcSwiperVertical.ets#L33-L61)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/94/v3/-xPQZw1_RG-bCCBssvtywQ/zh-cn_image_0000002535788446.png?HW-CC-KV=V1&HW-CC-Date=20260403T125941Z&HW-CC-Expire=86400&HW-CC-Sign=A83B640B3F780B2D336CF80F63C926904D5AA8EA2959498A5B630AA2FB67AFBB)

## 自定义切换动画

ArcSwiper支持通过[customContentTransition](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-arcswiper#customcontenttransition)设置自定义切换动画，可以在回调中对视窗内所有页面逐帧设置透明度、缩放比例、位移、渲染层级等属性，从而实现自定义切换动画效果。

收起

自动换行

深色代码主题

复制

```
1. import { Decimal } from '@kit.ArkTS';
2. import {
3. ArcSwiper,
4. ArcSwiperAttribute, // ArcSwiper的属性依赖ArcSwiperAttribute对象导入，不建议删除该对象的引入。
5. ArcDotIndicator,
6. ArcDirection,
7. ArcSwiperController
8. } from '@kit.ArkUI';
9. // ···

11. @Entry
12. @Component
13. export struct ArcSwiperAction {
14. private MIN_SCALE: number = 0.1;
15. @State backgroundColors: Color[] = [Color.Green, Color.Blue, Color.Yellow, Color.Pink, Color.Gray, Color.Orange];
16. @State opacityList: number[] = [];
17. @State scaleList: number[] = [];

19. aboutToAppear(): void {
20. for (let i = 0; i < this.backgroundColors.length; i++) {
21. this.opacityList.push(1.0);
22. this.scaleList.push(1.0);
23. }
24. }

26. build() {
27. // ···
28. Column({ space: 12 }) {
29. // ···
30. ArcSwiper() {
31. ForEach(this.backgroundColors, (backgroundColor: Color, index: number) => {
32. Text(index.toString())
33. .width(233)
34. .height(233)
35. .fontSize(50)
36. .textAlign(TextAlign.Center)
37. .backgroundColor(backgroundColor)
38. .opacity(this.opacityList[index])
39. .scale({ x: this.scaleList[index], y: this.scaleList[index] })
40. })
41. }
42. .customContentTransition({
43. timeout: 1000,
44. transition: (proxy: SwiperContentTransitionProxy) => {
45. if (proxy.position <= -1 || proxy.position >= 1) {
46. // 页面完全滑出视窗外时，重置属性值
47. this.opacityList[proxy.index] = 1.0;
48. this.scaleList[proxy.index] = 1.0;
49. } else {
50. let position: number = Decimal.abs(proxy.position).toNumber();
51. this.opacityList[proxy.index] = 1 - position;
52. this.scaleList[proxy.index] =
53. this.MIN_SCALE + (1 - this.MIN_SCALE) * (1 - position);
54. }
55. }
56. })
57. // ···
58. }
59. .width('100%')
60. // ···
61. }
62. }
```

[ArcSwiperAction.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/ScrollableComponent/entry/src/main/ets/pages/arcSwiper/ArcSwiperAction.ets#L16-L94)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/89/v3/j1oxtCf9TEa1oyL4q84ddQ/zh-cn_image_0000002535948392.gif?HW-CC-KV=V1&HW-CC-Date=20260403T125941Z&HW-CC-Expire=86400&HW-CC-Sign=CDA4EB7CF061B41C7DC0E568E79FC8AFF233EE111EE5E5E261CBE9D2238B04A3)

## 实现侧滑返回

ArcSwiper的滑动事件会与侧滑返回冲突，可以通过[onGestureRecognizerJudgeBegin](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-gesture-blocking-enhancement#ongesturerecognizerjudgebegin)去判断ArcSwiper是否滑动到开头去拦截ArcSwiper的滑动手势，实现再次左滑返回上一页的功能。

收起

自动换行

深色代码主题

复制

```
1. import {
2. ArcSwiper,
3. ArcSwiperAttribute, // ArcSwiper的属性依赖ArcSwiperAttribute对象导入，不建议删除该对象的引入。
4. ArcDotIndicator,
5. ArcDirection,
6. ArcSwiperController
7. } from '@kit.ArkUI';
8. // ···

10. @Entry
11. @Component
12. export struct ArcSwiperSideSlip {
13. @State backgroundColors: Color[] = [Color.Green, Color.Blue, Color.Yellow, Color.Pink, Color.Gray, Color.Orange];
14. innerSelectedIndex: number = 0;

16. build() {
17. // ···
18. Column({ space: 12 }) {
19. // ···
20. ArcSwiper() {
21. ForEach(this.backgroundColors, (backgroundColor: Color, index: number) => {
22. Text(index.toString())
23. .width(233)
24. .height(233)
25. .fontSize(50)
26. .textAlign(TextAlign.Center)
27. .backgroundColor(backgroundColor)
28. })
29. }
30. .onAnimationStart((index: number, targetIndex: number) => {
31. this.innerSelectedIndex = targetIndex;
32. })
33. .onGestureRecognizerJudgeBegin((event: BaseGestureEvent, current: GestureRecognizer,
34. others: Array<GestureRecognizer>): GestureJudgeResult => { // 在识别器即将要成功时，根据当前组件状态，设置识别器使能状态
35. if (current) {
36. let target = current.getEventTargetInfo();
37. if (target && current.isBuiltIn() && current.getType() == GestureControl.GestureType.PAN_GESTURE) {
38. let swiperTarget = target as ScrollableTargetInfo;
39. if (swiperTarget instanceof ScrollableTargetInfo &&
40. (swiperTarget.isBegin() || this.innerSelectedIndex === 0)) { // 此处判断swiperTarget.isBegin()或innerSelectedIndex === 0，表明ArcSwiper滑动到开头
41. let panEvent = event as PanGestureEvent;
42. if (panEvent && panEvent.offsetX > 0 && (swiperTarget.isBegin() || this.innerSelectedIndex === 0)) {
43. return GestureJudgeResult.REJECT;
44. }
45. }
46. }
47. }
48. return GestureJudgeResult.CONTINUE;
49. })
50. // ···
51. }
52. .width('100%')
53. // ···
54. }
55. }
```

[ArcSwiperSideSlip.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/ScrollableComponent/entry/src/main/ets/pages/arcSwiper/ArcSwiperSideSlip.ets#L16-L87)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/62/v3/90LN26DkRwm6c84X2Q3LbA/zh-cn_image_0000002566868225.gif?HW-CC-KV=V1&HW-CC-Date=20260403T125941Z&HW-CC-Expire=86400&HW-CC-Sign=4AEC49361D1547E7D19B5980B5E4C1AEFE3ED6F9BFE93CC3C1EB6952036D3085)