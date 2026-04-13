[Swiper](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-swiper)组件提供滑动轮播显示的能力。Swiper本身是一个容器组件，当设置了多个子组件后，可以对这些子组件进行轮播显示。通常，在一些应用首页显示推荐的内容时，需要用到轮播显示的能力。

针对复杂页面场景，可以使用Swiper组件的预加载机制，利用主线程的空闲时间来提前构建和布局绘制组件，优化滑动体验。

## 布局与约束

Swiper作为一个容器组件，如果设置了自身尺寸属性，则在轮播显示过程中均以该尺寸生效。如果自身尺寸属性未被设置，则分两种情况：如果设置了[prevMargin](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-swiper#prevmargin10)或者[nextMargin](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-swiper#nextmargin10)属性，则Swiper自身尺寸会跟随其父组件；如果未设置prevMargin或者nextMargin属性，则会自动根据子组件的大小设置自身的尺寸。

## 循环播放

通过[loop](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-swiper#loop)属性控制是否循环播放，该属性默认值为true。

当loop为true时，在显示第一页或最后一页时，可以继续往前切换到前一页或者往后切换到后一页。如果loop为false，则在第一页或最后一页时，无法继续向前或者向后切换页面。

* loop为true

收起

自动换行

深色代码主题

复制

```
1. Swiper() {
2. Text('0')
3. .width('90%')
4. .height('100%')
5. .backgroundColor(Color.Gray)
6. .textAlign(TextAlign.Center)
7. .fontSize(30)

9. Text('1')
10. .width('90%')
11. .height('100%')
12. .backgroundColor(Color.Green)
13. .textAlign(TextAlign.Center)
14. .fontSize(30)

16. Text('2')
17. .width('90%')
18. .height('100%')
19. .backgroundColor(Color.Pink)
20. .textAlign(TextAlign.Center)
21. .fontSize(30)
22. }
23. // ···
24. .loop(true)
```

[SwiperLoop.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/ScrollableComponent/entry/src/main/ets/pages/swiper/SwiperLoop.ets#L24-L51)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b2/v3/S-L0St67TJCps6TTmYWXxw/zh-cn_image_0000002566868211.gif?HW-CC-KV=V1&HW-CC-Date=20260403T125937Z&HW-CC-Expire=86400&HW-CC-Sign=5CBCA958E082773E14D9CDF9A61A9C7C174FBBD66C7CA55DF766D6715C8E37EC)

* loop为false

收起

自动换行

深色代码主题

复制

```
1. Swiper() {
2. // ···
3. }
4. // ···
5. .loop(false)
```

[SwiperLoop.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/ScrollableComponent/entry/src/main/ets/pages/swiper/SwiperLoop.ets#L55-L84)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/eb/v3/LMZKdsLSTlmd0SuwhhniSg/zh-cn_image_0000002566708231.gif?HW-CC-KV=V1&HW-CC-Date=20260403T125937Z&HW-CC-Expire=86400&HW-CC-Sign=41680BE1752FC2D529C54B11A1D457B87D60F68C26015A726F7E01460436281E)

## 自动轮播

Swiper通过设置[autoPlay](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-swiper#autoplay)属性，控制是否自动轮播子组件。该属性默认值为false。

autoPlay为true时，会自动切换播放子组件，子组件与子组件之间的播放间隔通过interval属性设置。interval属性默认值为3000，单位毫秒。

收起

自动换行

深色代码主题

复制

```
1. Swiper() {
2. // ···
3. }
4. // ···
5. .loop(true)
6. .autoPlay(true)
7. .interval(1000)
```

[SwiperAutoPlay.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/ScrollableComponent/entry/src/main/ets/pages/swiper/SwiperAutoPlay.ets#L24-L55)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a0/v3/MOf5YfCnS42y137oBzTqQQ/zh-cn_image_0000002535788434.gif?HW-CC-KV=V1&HW-CC-Date=20260403T125937Z&HW-CC-Expire=86400&HW-CC-Sign=2D7C08F419CE39C39118ABACD9C13BDD0E4E69AC0B9C219FB7E5CE4C06EADE1E)

## 导航点样式

Swiper提供了默认的导航点样式和导航点箭头样式，导航点默认显示在Swiper下方居中位置，开发者也可以通过[indicator](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-swiper#indicator)属性自定义导航点的位置和样式，导航点箭头默认不显示。

通过indicator属性，开发者可以设置导航点相对于Swiper组件上下左右四个方位的位置，同时也可以设置每个导航点的尺寸、颜色、蒙层和被选中导航点的颜色。

* 导航点使用默认样式

收起

自动换行

深色代码主题

复制

```
1. Swiper() {
2. Text('0')
3. .width('90%')
4. .height('100%')
5. .backgroundColor(Color.Gray)
6. .textAlign(TextAlign.Center)
7. .fontSize(30)

9. Text('1')
10. .width('90%')
11. .height('100%')
12. .backgroundColor(Color.Green)
13. .textAlign(TextAlign.Center)
14. .fontSize(30)

16. Text('2')
17. .width('90%')
18. .height('100%')
19. .backgroundColor(Color.Pink)
20. .textAlign(TextAlign.Center)
21. .fontSize(30)
22. }
```

[SwiperIndicatorStyle.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/ScrollableComponent/entry/src/main/ets/pages/swiper/SwiperIndicatorStyle.ets#L25-L48)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/04/v3/S_qTJ4gSSX2puDL1u-u1-A/zh-cn_image_0000002535948382.png?HW-CC-KV=V1&HW-CC-Date=20260403T125937Z&HW-CC-Expire=86400&HW-CC-Sign=7F8C9DAF4B8D4014CD7339F265DA1D3A643B0261D9301B2A50C9F14AF11159EF)

* 自定义导航点样式

选中的导航点，直径设为30vp，且颜色为蓝色；未选中的导航点，直径设为15vp，颜色设为红色。

收起

自动换行

深色代码主题

复制

```
1. Swiper() {
2. // ···
3. }
4. // ···
5. .indicator(
6. Indicator.dot()
7. .left(0)
8. .itemWidth(15)
9. .itemHeight(15)
10. .selectedItemWidth(30)
11. .selectedItemHeight(15)
12. .color(Color.Red)
13. .selectedColor(Color.Blue)
14. )
```

[SwiperIndicatorStyle.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/ScrollableComponent/entry/src/main/ets/pages/swiper/SwiperIndicatorStyle.ets#L53-L91)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c2/v3/-EQyIMwbQVO7KXGG9f9dPQ/zh-cn_image_0000002566868213.png?HW-CC-KV=V1&HW-CC-Date=20260403T125937Z&HW-CC-Expire=86400&HW-CC-Sign=F3642E22E66E4B886E14548CB6CDD7BA1DE229C0D8536A9EE0E2E16B167EBF76)

Swiper通过设置[displayArrow](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-swiper#displayarrow10)属性，可以控制导航点箭头的大小、位置、颜色，底板的大小及颜色，以及鼠标悬停时是否显示箭头。

* 箭头使用默认样式

收起

自动换行

深色代码主题

复制

```
1. Swiper() {
2. // ···
3. }
4. // ···
5. .displayArrow(true, false)
```

[SwiperIndicatorStyle.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/ScrollableComponent/entry/src/main/ets/pages/swiper/SwiperIndicatorStyle.ets#L95-L124)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/98/v3/MDnafqJMQpCTxj0FaS-2Vg/zh-cn_image_0000002566708233.gif?HW-CC-KV=V1&HW-CC-Date=20260403T125937Z&HW-CC-Expire=86400&HW-CC-Sign=4586EEEC1DCC0D52C346A8CD8399193585283712ED4957CB1B1449C3CFB6B1F6)

* 自定义箭头样式

箭头显示在组件两侧，大小为18vp，导航点箭头颜色设为蓝色。

收起

自动换行

深色代码主题

复制

```
1. Swiper() {
2. // ···
3. }
4. // ···
5. .displayArrow({
6. showBackground: true,
7. isSidebarMiddle: true,
8. backgroundSize: 24,
9. backgroundColor: Color.White,
10. arrowSize: 18,
11. arrowColor: Color.Blue
12. }, false)
```

[SwiperIndicatorStyle.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/ScrollableComponent/entry/src/main/ets/pages/swiper/SwiperIndicatorStyle.ets#L128-L164)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/64/v3/cfSNPoXMT-GTOZkwN0lKSg/zh-cn_image_0000002535788438.gif?HW-CC-KV=V1&HW-CC-Date=20260403T125937Z&HW-CC-Expire=86400&HW-CC-Sign=C244EDF123FA0790BEF062F1780EFF8CC704439099383D1D36CDC8819F7EB91A)

## 页面切换方式

Swiper支持手指滑动、点击导航点和通过控制器三种方式切换页面，以下示例展示通过控制器切换页面的方法。

收起

自动换行

深色代码主题

复制

```
1. @Entry
2. @Component
3. export struct SwiperPageSwitchMethod {
4. private swiperBackgroundColors: Color[] = [Color.Blue, Color.Brown, Color.Gray, Color.Green, Color.Orange,
5. Color.Pink, Color.Red, Color.Yellow];
6. private swiperAnimationMode: (SwiperAnimationMode | boolean | undefined)[] = [undefined, true, false,
7. SwiperAnimationMode.NO_ANIMATION, SwiperAnimationMode.DEFAULT_ANIMATION, SwiperAnimationMode.FAST_ANIMATION];
8. private swiperController: SwiperController = new SwiperController();
9. private animationModeIndex: number = 0;
10. private animationMode: (SwiperAnimationMode | boolean | undefined) = undefined;
11. @State animationModeStr: string = 'undefined';
12. @State targetIndex: number = 0;

14. aboutToAppear(): void {
15. this.toSwiperAnimationModeStr();
16. }

18. build() {
19. // ···
20. Column({ space: 5 }) {
21. Swiper(this.swiperController) {
22. ForEach(this.swiperBackgroundColors, (backgroundColor: Color, index: number) => {
23. Text(index.toString())
24. .width(250)
25. .height(250)
26. .backgroundColor(backgroundColor)
27. .textAlign(TextAlign.Center)
28. .fontSize(30)
29. })
30. }
31. // ···
32. .indicator(true)

34. Row({ space: 12 }) {
35. Button('showNext')
36. .onClick(() => {
37. this.swiperController.showNext(); // 通过controller切换到后一页
38. })
39. Button('showPrevious')
40. .onClick(() => {
41. this.swiperController.showPrevious(); // 通过controller切换到前一页
42. })
43. }.margin(5)

45. Row({ space: 12 }) {
46. Text('Index:')
47. Button(this.targetIndex.toString())
48. .onClick(() => {
49. this.targetIndex = (this.targetIndex + 1) % this.swiperBackgroundColors.length;
50. })
51. }.margin(5)
52. Row({ space: 12 }) {
53. Text('AnimationMode:')
54. Button(this.animationModeStr)
55. .onClick(() => {
56. this.animationModeIndex = (this.animationModeIndex + 1) % this.swiperAnimationMode.length;
57. this.toSwiperAnimationModeStr();
58. })
59. }.margin(5)

61. Row({ space: 12 }) {
62. Button('changeIndex(' + this.targetIndex + ', ' + this.animationModeStr + ')')
63. .onClick(() => {
64. this.swiperController.changeIndex(this.targetIndex, this.animationMode); // 通过controller切换到指定页
65. })
66. }.margin(5)
67. }
68. // ···
69. }

71. private toSwiperAnimationModeStr() {
72. this.animationMode = this.swiperAnimationMode[this.animationModeIndex];
73. if ((this.animationMode === true) || (this.animationMode === false)) {
74. this.animationModeStr = '' + this.animationMode;
75. } else if ((this.animationMode === SwiperAnimationMode.NO_ANIMATION) ||
76. (this.animationMode === SwiperAnimationMode.DEFAULT_ANIMATION) ||
77. (this.animationMode === SwiperAnimationMode.FAST_ANIMATION)) {
78. this.animationModeStr = SwiperAnimationMode[this.animationMode];
79. } else {
80. this.animationModeStr = 'undefined';
81. }
82. }
83. }
```

[SwiperPageSwitchMethod.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/ScrollableComponent/entry/src/main/ets/pages/swiper/SwiperPageSwitchMethod.ets#L18-L119)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/39/v3/xcSKA026Sh-anx-asYs31g/zh-cn_image_0000002535948384.gif?HW-CC-KV=V1&HW-CC-Date=20260403T125937Z&HW-CC-Expire=86400&HW-CC-Sign=0041143BA64DAB9357DC1781EE3447C17339D6405431B4C7409363121106231B)

## 轮播方向

Swiper支持水平和垂直方向上进行轮播，主要通过[vertical](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-swiper#vertical)属性控制。

当vertical为true时，表示在垂直方向上进行轮播；为false时，表示在水平方向上进行轮播。vertical默认值为false。

* 设置水平方向上轮播。

收起

自动换行

深色代码主题

复制

```
1. Swiper(
2. // ···
3. ) {
4. // ···
5. }
6. // ···
7. .indicator(true)
8. .vertical(false)
```

[SwiperDirection.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/ScrollableComponent/entry/src/main/ets/pages/swiper/SwiperDirection.ets#L28-L62)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fd/v3/3UUpAX3mTguJ8a_AgaNMDg/zh-cn_image_0000002566868217.png?HW-CC-KV=V1&HW-CC-Date=20260403T125937Z&HW-CC-Expire=86400&HW-CC-Sign=BF241C21414B7105C132D6777186872A5864D1B562CB973D73EA22F798035977)

* 设置垂直方向轮播。

收起

自动换行

深色代码主题

复制

```
1. Swiper(
2. // ···
3. ) {
4. // ···
5. }
6. // ···
7. .indicator(true)
8. .vertical(true)
```

[SwiperDirection.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/ScrollableComponent/entry/src/main/ets/pages/swiper/SwiperDirection.ets#L79-L113)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/52/v3/PrbDvBtuR8G7DvwUhv09mQ/zh-cn_image_0000002566708237.png?HW-CC-KV=V1&HW-CC-Date=20260403T125937Z&HW-CC-Expire=86400&HW-CC-Sign=BE2F015B9018DE1652922E26D0E6B9F850E5C2899F2F7D25A045DB4360E7ED5B)

## 每页显示多个子页面

Swiper支持在一个页面内同时显示多个子组件，通过[displayCount](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-swiper#displaycount8)属性设置。

收起

自动换行

深色代码主题

复制

```
1. Swiper() {
2. Text('0')
3. .width(250)
4. .height(250)
5. .backgroundColor(Color.Gray)
6. .textAlign(TextAlign.Center)
7. .fontSize(30)
8. Text('1')
9. .width(250)
10. .height(250)
11. .backgroundColor(Color.Green)
12. .textAlign(TextAlign.Center)
13. .fontSize(30)
14. Text('2')
15. .width(250)
16. .height(250)
17. .backgroundColor(Color.Pink)
18. .textAlign(TextAlign.Center)
19. .fontSize(30)
20. Text('3')
21. .width(250)
22. .height(250)
23. .backgroundColor(Color.Yellow)
24. .textAlign(TextAlign.Center)
25. .fontSize(30)
26. }
27. // ···
28. .indicator(true)
29. .displayCount(2)
30. }
```

[SwiperMultiPage.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/ScrollableComponent/entry/src/main/ets/pages/swiper/SwiperMultiPage.ets#L24-L58)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c4/v3/6fVrhPcyR265t9Pr_udR1A/zh-cn_image_0000002535788440.png?HW-CC-KV=V1&HW-CC-Date=20260403T125937Z&HW-CC-Expire=86400&HW-CC-Sign=21232970FBF5C03DBC5640D3E3727654027123C4104B601AEE34A6BEA6D69AD4)

## 自定义切换动画

Swiper支持通过[customContentTransition](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-swiper#customcontenttransition12)设置自定义切换动画，可以在回调中对视窗内所有页面逐帧设置透明度、缩放比例、位移、渲染层级等属性实现自定义切换动画。

收起

自动换行

深色代码主题

复制

```
1. @Entry
2. @Component
3. export struct SwiperCustomAnimation {
4. private DISPLAY_COUNT: number = 2;
5. private MIN_SCALE: number = 0.75;
6. @State backgroundColors: Color[] = [Color.Green, Color.Blue, Color.Yellow, Color.Pink, Color.Gray, Color.Orange];
7. @State opacityList: number[] = [];
8. @State scaleList: number[] = [];
9. @State translateList: number[] = [];
10. @State zIndexList: number[] = [];

12. aboutToAppear(): void {
13. for (let i = 0; i < this.backgroundColors.length; i++) {
14. this.opacityList.push(1.0);
15. this.scaleList.push(1.0);
16. this.translateList.push(0.0);
17. this.zIndexList.push(0);
18. }
19. }

21. build() {
22. // ···
23. Column({ space: 12 }) {
24. // ···
25. Swiper() {
26. ForEach(this.backgroundColors, (backgroundColor: Color, index: number) => {
27. Text(index.toString())
28. .width('100%')
29. .height('100%')
30. .fontSize(50)
31. .textAlign(TextAlign.Center)
32. .backgroundColor(backgroundColor)
33. .opacity(this.opacityList[index])
34. .scale({ x: this.scaleList[index], y: this.scaleList[index] })
35. .translate({ x: this.translateList[index] })
36. .zIndex(this.zIndexList[index])
37. })
38. }
39. .height(300)
40. .indicator(false)
41. .displayCount(this.DISPLAY_COUNT, true)
42. .customContentTransition({
43. timeout: 1000,
44. transition: (proxy: SwiperContentTransitionProxy) => {
45. if (proxy.position <= proxy.index % this.DISPLAY_COUNT ||
46. proxy.position >= this.DISPLAY_COUNT + proxy.index % this.DISPLAY_COUNT) {
47. // 同组页面完全滑出视窗外时，重置属性值
48. this.opacityList[proxy.index] = 1.0;
49. this.scaleList[proxy.index] = 1.0;
50. this.translateList[proxy.index] = 0.0;
51. this.zIndexList[proxy.index] = 0;
52. } else {
53. // 同组页面未滑出视窗外时，对同组中左右两个页面，逐帧根据position修改属性值
54. if (proxy.index % this.DISPLAY_COUNT === 0) {
55. this.opacityList[proxy.index] = 1 - proxy.position / this.DISPLAY_COUNT;
56. this.scaleList[proxy.index] =
57. this.MIN_SCALE + (1 - this.MIN_SCALE) * (1 - proxy.position / this.DISPLAY_COUNT);
58. this.translateList[proxy.index] = -proxy.position * proxy.mainAxisLength +
59. (1 - this.scaleList[proxy.index]) * proxy.mainAxisLength / 2.0;
60. } else {
61. this.opacityList[proxy.index] = 1 - (proxy.position - 1) / this.DISPLAY_COUNT;
62. this.scaleList[proxy.index] =
63. this.MIN_SCALE + (1 - this.MIN_SCALE) * (1 - (proxy.position - 1) / this.DISPLAY_COUNT);
64. this.translateList[proxy.index] = -(proxy.position - 1) * proxy.mainAxisLength -
65. (1 - this.scaleList[proxy.index]) * proxy.mainAxisLength / 2.0;
66. }
67. this.zIndexList[proxy.index] = -1;
68. }
69. }
70. })
71. // ···
72. }
73. .width('100%')
74. // ···
75. }
76. }
```

[SwiperCustomAnimation.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/ScrollableComponent/entry/src/main/ets/pages/swiper/SwiperCustomAnimation.ets#L18-L109)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cf/v3/ckrNaE3bSiWD3S0jChR8Gw/zh-cn_image_0000002535948388.gif?HW-CC-KV=V1&HW-CC-Date=20260403T125937Z&HW-CC-Expire=86400&HW-CC-Sign=961491C091A5D18204D7D25EF98DCB66C5A701D2C3BBAE9010ED1D632B54B93A)

## Swiper与Tabs联动

Swiper选中的元素改变时，会通过[onSelected](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-swiper#onselected18)回调事件，将元素的索引值index返回。通过调用[tabsController.changeIndex(index)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabs#changeindex)方法来实现Tabs页签的切换。

收起

自动换行

深色代码主题

复制

```
1. // xxx.ets
2. class MyDataSource implements IDataSource {
3. private list: number[] = [];

5. constructor(list: number[]) {
6. this.list = list;
7. }

9. totalCount(): number {
10. return this.list.length;
11. }

13. getData(index: number): number {
14. return this.list[index];
15. }

17. registerDataChangeListener(listener: DataChangeListener): void {
18. }

20. unregisterDataChangeListener() {
21. }
22. }

24. @Entry
25. @Component
26. export struct SwiperAndTabsLinkage {
27. @State fontColor: string = '#182431';
28. @State selectedFontColor: string = '#007DFF';
29. @State currentIndex: number = 0;
30. private list: number[] = [];
31. private tabsController: TabsController = new TabsController();
32. private swiperController: SwiperController = new SwiperController();
33. private swiperData: MyDataSource = new MyDataSource([]);
34. private context = this.getUIContext().getHostContext() as common.UIAbilityContext;

36. aboutToAppear(): void {
37. for (let i = 0; i <= 9; i++) {
38. this.list.push(i);
39. }
40. this.swiperData = new MyDataSource(this.list);
41. }

43. @Builder tabBuilder(index: number, name: string) {
44. Column() {
45. Text(name)
46. .fontColor(this.currentIndex === index ? this.selectedFontColor : this.fontColor)
47. .fontSize(16)
48. .fontWeight(this.currentIndex === index ? 500 : 400)
49. .lineHeight(22)
50. .margin({ top: 17, bottom: 7 })
51. Divider()
52. .strokeWidth(2)
53. .color('#007DFF')
54. .opacity(this.currentIndex === index ? 1 : 0)
55. }.width('20%')
56. }

58. build() {
59. // ...
60. Column() {
61. Tabs({ barPosition: BarPosition.Start, controller: this.tabsController }) {
62. ForEach(this.list, (index: number) =>{
63. // 请在resources\base\element\string.json文件中配置name为'swiper_text1' ，value为非空字符串的资源
64. TabContent().tabBar(this.tabBuilder(index,
65. this.context.resourceManager.getStringByNameSync('swiper_text1') + this.list[index]))
66. })
67. }
68. .onTabBarClick((index: number) => {
69. this.currentIndex = index;
70. this.swiperController.changeIndex(index, true);
71. })
72. .barMode(BarMode.Scrollable)
73. .backgroundColor('#F1F3F5')
74. .height(56)
75. .width('100%')

77. Swiper(this.swiperController) {
78. LazyForEach(this.swiperData, (item: string) => {
79. Text(item.toString())
80. .onAppear(()=>{
81. console.info('onAppear ' + item.toString());
82. })
83. .onDisAppear(()=>{
84. console.info('onDisAppear ' + item.toString());
85. })
86. .width('100%')
87. .height('40%')
88. .backgroundColor(0xAFEEEE)
89. .textAlign(TextAlign.Center)
90. .fontSize(30)
91. }, (item: string) => item)
92. }
93. .loop(false)
94. .onSelected((index: number) => {
95. console.info('onSelected:' + index);
96. this.currentIndex = index;
97. this.tabsController.changeIndex(index);
98. })
99. }
100. // ...
101. }
102. }
```

[SwiperAndTabsLinkage.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/ScrollableComponent/entry/src/main/ets/pages/swiper/SwiperAndTabsLinkage.ets#L18-L132)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/48/v3/RuKGA_RtQLS_t2iaUvgs2Q/zh-cn_image_0000002566868219.gif?HW-CC-KV=V1&HW-CC-Date=20260403T125937Z&HW-CC-Expire=86400&HW-CC-Sign=926CCDC2E3EB88F2604586FE1A9E932F19BC9D549A55E13209C40360D4B3B830)

## 设置圆点导航点间距

针对圆点导航点，可以通过DotIndicator的[space](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-swiper#space19)属性来设置圆点导航点的间距。

收起

自动换行

深色代码主题

复制

```
1. Swiper(
2. // ···
3. ) {
4. // ···
5. }
6. .indicator(new DotIndicator()
7. .space(this.space)
8. // ···
9. )
```

[SwiperIgnoreComponentSize.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/ScrollableComponent/entry/src/main/ets/pages/swiper/SwiperIgnoreComponentSize.ets#L77-L116)

## 导航点忽略组件大小

当导航点的[bottom](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-swiper#bottom)设为0之后，导航点的底部与Swiper的底部还会有一定间距。如果希望消除该间距，可通过调用bottom(bottom, ignoreSize)属性来进行设置。将ignoreSize设置为true，即可忽略导航点组件大小，达到消除该间距的目的。

* 圆点导航点忽略组件大小。

收起

自动换行

深色代码主题

复制

```
1. Swiper(
2. // ···
3. ) {
4. // ···
5. }
6. .indicator(new DotIndicator()
7. // ···
8. .bottom(LengthMetrics.vp(0), this.ignoreSize) // true
9. // ···
10. )
```

[SwiperIgnoreComponentSize.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/ScrollableComponent/entry/src/main/ets/pages/swiper/SwiperIgnoreComponentSize.ets#L78-L115)

* 数字导航点忽略组件大小。

收起

自动换行

深色代码主题

复制

```
1. Swiper(
2. // ···
3. ) {
4. // ···
5. }
6. .indicator(new DigitIndicator()
7. .bottom(LengthMetrics.vp(0), true)
8. )
```

[SwiperDigitIndicatorIgnoreComponentSize.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/ScrollableComponent/entry/src/main/ets/pages/swiper/SwiperDigitIndicatorIgnoreComponentSize.ets#L61-L82)

圆点导航点设置间距及忽略组件大小完整示例代码如下：

收起

自动换行

深色代码主题

复制

```
1. import { LengthMetrics } from '@kit.ArkUI';
2. // ···


5. class MyDataSource implements IDataSource {
6. private list: number[] = [];

8. constructor(list: number[]) {
9. this.list = list;
10. }

12. totalCount(): number {
13. return this.list.length;
14. }

16. getData(index: number): number {
17. return this.list[index];
18. }

20. registerDataChangeListener(listener: DataChangeListener): void {
21. }

23. unregisterDataChangeListener() {
24. }
25. }

27. @Entry
28. @Component
29. export struct SwiperIgnoreComponentSize {

31. @State space: LengthMetrics = LengthMetrics.vp(0);
32. @State spacePool: LengthMetrics[] = [LengthMetrics.vp(0), LengthMetrics.px(3), LengthMetrics.vp(10)];
33. @State spaceIndex: number = 0;

35. @State ignoreSize: boolean = false;
36. @State ignoreSizePool: boolean[] = [false, true];
37. @State ignoreSizeIndex: number = 0;

39. private swiperController1: SwiperController = new SwiperController();
40. private data1: MyDataSource = new MyDataSource([]);

42. aboutToAppear(): void {
43. let list1: number[] = [];
44. for (let i = 1; i <= 10; i++) {
45. list1.push(i);
46. }
47. this.data1 = new MyDataSource(list1);
48. }

50. build() {
51. // ···
52. Scroll() {
53. Column({ space: 20 }) {
54. Swiper(
55. this.swiperController1
56. ) {
57. LazyForEach(this.data1, (item: string) => {
58. Text(item.toString())
59. .width('90%')
60. .height(120)
61. .backgroundColor(0xAFEEEE)
62. .textAlign(TextAlign.Center)
63. .fontSize(30)
64. }, (item: string) => item)
65. }
66. .indicator(new DotIndicator()
67. .space(this.space)
68. .bottom(LengthMetrics.vp(0), this.ignoreSize) // true
69. .itemWidth(15)
70. .itemHeight(15)
71. .selectedItemWidth(15)
72. .selectedItemHeight(15)
73. .color(Color.Gray)
74. .selectedColor(Color.Blue)
75. )
76. .displayArrow({
77. showBackground: true,
78. isSidebarMiddle: true,
79. backgroundSize: 24,
80. backgroundColor: Color.White,
81. arrowSize: 18,
82. arrowColor: Color.Blue
83. }, false)

85. Column({ space: 4 }) {
86. Button('spaceIndex:' + this.spaceIndex).onClick(() => {
87. this.spaceIndex = (this.spaceIndex + 1) % this.spacePool.length;
88. this.space = this.spacePool[this.spaceIndex];
89. }).margin(10)

91. Button('ignoreSizeIndex:' + this.ignoreSizeIndex).onClick(() => {
92. this.ignoreSizeIndex = (this.ignoreSizeIndex + 1) % this.ignoreSizePool.length;
93. this.ignoreSize = this.ignoreSizePool[this.ignoreSizeIndex];
94. }).margin(10)
95. }.margin(2)
96. }.width('100%')
97. }
98. // ···
99. }
100. }
```

[SwiperIgnoreComponentSize.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/ScrollableComponent/entry/src/main/ets/pages/swiper/SwiperIgnoreComponentSize.ets#L16-L151)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/50/v3/KoJ2Z8ubSRibV-adcGaeXw/zh-cn_image_0000002566708239.gif?HW-CC-KV=V1&HW-CC-Date=20260403T125937Z&HW-CC-Expire=86400&HW-CC-Sign=DA5EB4F447075EE781EC611C6C62297FF136C2BDE12DF4707B86E1E7AA6FC777)

## 保持可见内容位置不变

Swiper通过设置[maintainVisibleContentPosition](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-swiper#maintainvisiblecontentposition20)属性，可在使用LazyForEach懒加载数据时（如通过onDataAdd新增数据），保持当前可见内容位置不变，避免因数据增删导致的视图跳动。该属性默认值为false。

maintainVisibleContentPosition为true时，显示区域上方或前方插入或删除数据时可见内容位置不变。

关于数据[LazyForEach：数据懒加载](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-rendering-control-lazyforeach)的具体使用，可参考数据懒加载章节中的示例。

收起

自动换行

深色代码主题

复制

```
1. // xxx.ets
2. class MyDataSource implements IDataSource {
3. private listeners: DataChangeListener[] = [];
4. private dataArray: string[] = ['0', '1', '2', '3', '4', '5', '6'];

6. public totalCount(): number {
7. return this.dataArray.length;
8. }

10. public getData(index: number): string | undefined {
11. return this.dataArray[index];
12. }

14. public addData(index: number, data: string): void {
15. this.dataArray.splice(index, 0, data);
16. this.listeners.forEach(listener => {
17. listener.onDataAdd(index);
18. })
19. }

21. public deleteData(index: number): void {
22. this.dataArray.splice(index, 1);
23. this.listeners.forEach(listener => {
24. listener.onDataDelete(index);
25. })
26. }

28. registerDataChangeListener(listener: DataChangeListener): void {
29. if (this.listeners.indexOf(listener) < 0) {
30. hilog.info(DOMAIN, 'testTag', 'add listener');
31. this.listeners.push(listener);
32. }
33. }

35. unregisterDataChangeListener(listener: DataChangeListener): void {
36. const pos = this.listeners.indexOf(listener);
37. if (pos >= 0) {
38. hilog.info(DOMAIN, 'testTag', 'remove listener');
39. this.listeners.splice(pos, 1);
40. }
41. }
42. }

44. @Entry
45. @Component
46. export struct SwiperVisibleContentPosition {
47. private data: MyDataSource = new MyDataSource();
48. @State index: number = 3;

50. build() {
51. // ...
52. Column({ space: 12 }) {
53. // ...
54. Swiper() {
55. LazyForEach(this.data, (item: string) => {
56. Text(item.toString())
57. .width('90%')
58. .height(160)
59. .backgroundColor(0xAFEEEE)
60. .textAlign(TextAlign.Center)
61. .fontSize(30)
62. })
63. }
64. .onChange((index) => {
65. this.index = index;
66. })
67. .index(3)
68. .maintainVisibleContentPosition(true)
69. // ...

71. Column({ space: 12 }) {
72. Text('index:' + this.index).fontSize(20)
73. Row() {
74. // 在LazyForEach索引为0的位置添加数据
75. Button('header data add').height(30).onClick(() => {
76. this.data.addData(0, 'header Data');
77. })
78. // 删除LazyForEach索引为0的位置数据
79. Button('header data delete').height(30).onClick(() => {
80. this.data.deleteData(0);
81. })
82. }
83. }.margin(5)
84. // ...
85. }.width('100%')
86. .margin({ top: 5 })
87. // ...
88. }
89. }
```

[SwiperVisibleContentPosition.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/ScrollableComponent/entry/src/main/ets/pages/swiper/SwiperVisibleContentPosition.ets#L21-L135)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/02/v3/IWS4VxsmQsurM92WsxOt4Q/zh-cn_image_0000002535788444.gif?HW-CC-KV=V1&HW-CC-Date=20260403T125937Z&HW-CC-Expire=86400&HW-CC-Sign=95BCA0AA84B54C8647F3BEE2BA8EAD7278F8ADE43ADFCF392EDF3714954793F5)

## 示例代码

* [短视频切换](https://gitcode.com/HarmonyOS_Samples/short-video)