当页面信息较多时，为了让用户能够聚焦于当前显示的内容，需要对页面内容进行分类，提高页面空间利用率。[Tabs](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabs)组件可以在一个页面内快速实现视图内容的切换，一方面提升查找信息的效率，另一方面精简用户单次获取到的信息量。

## 基本布局

Tabs组件的页面组成包含两个部分，分别是[TabContent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabcontent)和[TabBar](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabcontent#tabbar)。TabContent是内容页，TabBar是导航页签栏，页面结构如下图所示，根据不同的导航类型，布局会有区别，可以分为底部导航、顶部导航、侧边导航，其导航栏分别位于底部、顶部和侧边。

**图1** Tabs组件布局示意图

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a3/v3/-xcjTKiEQlGMKHV3KwaYbA/zh-cn_image_0000002566868057.png?HW-CC-KV=V1&HW-CC-Date=20260403T125811Z&HW-CC-Expire=86400&HW-CC-Sign=BE7E8205F7B70747A35BF3CB98F12DE00C46B796332802FE879AC7F3D469BF9B)

说明

* TabContent组件不支持设置通用宽度属性，其宽度默认撑满Tabs父组件。
* TabContent组件不支持设置通用高度属性，其高度由Tabs父组件高度与TabBar组件高度决定。

Tabs使用花括号包裹TabContent，如图2，其中TabContent显示相应的内容页。

**图2** Tabs与TabContent使用

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a7/v3/IWyjx-qASA2bQ5Jfu2sndQ/zh-cn_image_0000002566708077.png?HW-CC-KV=V1&HW-CC-Date=20260403T125811Z&HW-CC-Expire=86400&HW-CC-Sign=D49336997B2E09F671E79B757A1D92B2C0B9FA77892427CB3B0F116F32597456)

每一个TabContent对应的内容需要有一个页签，可以通过TabContent的tabBar属性进行配置。在如下TabContent组件上设置tabBar属性，可以设置其对应页签中的内容，tabBar作为内容的页签。

收起

自动换行

深色代码主题

复制

```
1. TabContent() {
2. // app.string.homepage_content资源文件中的value值为“首页的内容”
3. Text($r('app.string.homepage_content'))
4. .fontSize(30)
5. }
6. // app.string.homepage资源文件中的value值为“首页”
7. .tabBar($r('app.string.homepage'))
```

[TabsLayout.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/ScrollableComponent/entry/src/main/ets/pages/tabs/TabsLayout.ets#L26-L34)

设置多个内容时，需在Tabs内按照顺序放置。

收起

自动换行

深色代码主题

复制

```
1. Tabs() {
2. TabContent() {
3. // app.string.homepage_content资源文件中的value值为“首页的内容”
4. Text($r('app.string.homepage_content'))
5. .fontSize(30)
6. }
7. // app.string.homepage资源文件中的value值为“首页”
8. .tabBar($r('app.string.homepage'))

10. TabContent() {
11. // app.string.recommend_content资源文件中的value值为“推荐的内容”
12. Text($r('app.string.recommend_content'))
13. .fontSize(30)
14. }
15. // app.string.recommend资源文件中的value值为“推荐”
16. .tabBar($r('app.string.recommend'))

18. TabContent() {
19. // app.string.discover_content资源文件中的value值为“发现的内容”
20. Text($r('app.string.discover_content'))
21. .fontSize(30)
22. }
23. // app.string.discover资源文件中的value值为“发现”
24. .tabBar($r('app.string.discover'))

26. TabContent() {
27. // app.string.mine_content资源文件中的value值为“我的内容”
28. Text($r('app.string.mine_content'))
29. .fontSize(30)
30. }
31. // app.string.mine_content资源文件中的value值为“我的”
32. .tabBar($r('app.string.mine'))
33. }
```

[TabsLayout.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/ScrollableComponent/entry/src/main/ets/pages/tabs/TabsLayout.ets#L24-L60)

## 底部导航

底部导航是应用中最常见的一种导航方式。底部导航位于应用一级页面的底部，用户打开应用，能够分清整个应用的功能分类，以及页签对应的内容，并且其位于底部更加方便用户单手操作。底部导航一般作为应用的主导航形式存在，其作用是将用户关心的内容按照功能进行分类，迎合用户使用习惯，方便在不同模块间的内容切换。

**图3** 底部导航栏

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fb/v3/2KJbMgn2RWKPcpzb41gN8A/zh-cn_image_0000002535788280.gif?HW-CC-KV=V1&HW-CC-Date=20260403T125811Z&HW-CC-Expire=86400&HW-CC-Sign=3E4398FECF15F77F9016D58E339BCA5FDAA062C489382FD8369A4E5C0D1C52B3)

导航栏位置使用Tabs的barPosition参数进行设置。默认情况下，导航栏位于顶部，此时，barPosition为BarPosition.Start。设置为底部导航时，需要将barPosition设置为BarPosition.End。

收起

自动换行

深色代码主题

复制

```
1. Tabs({ barPosition: BarPosition.End }) {
2. // TabContent的内容：首页、发现、推荐、我的
3. // ···
4. }
```

[BottomTabBar.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/ScrollableComponent/entry/src/main/ets/pages/tabs/BottomTabBar.ets#L24-L58)

底部导航栏可通过设置TabContent的[BottomTabBarStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabcontent#bottomtabbarstyle9)来实现底部页签样式，详细示例请参考：[示例9（设置底部页签使用symbol图标）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabcontent#示例9设置底部页签使用symbol图标)。

## 顶部导航

当内容分类较多，用户对不同内容的浏览概率相差不大，需要经常快速切换时，一般采用顶部导航模式进行设计，作为对底部导航内容的进一步划分，常见一些资讯类应用对内容的分类为关注、视频、数码，或者主题应用中对主题进行进一步划分为图片、视频、字体等。

**图4** 顶部导航栏

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/84/v3/h6YHsUg1QnCbxIOGA33ueg/zh-cn_image_0000002535948228.gif?HW-CC-KV=V1&HW-CC-Date=20260403T125811Z&HW-CC-Expire=86400&HW-CC-Sign=1800CC0EA67516DC87531B61241EAC7E0868C9177A9F94D3FFE84DD15EF1F51D)

收起

自动换行

深色代码主题

复制

```
1. Tabs({ barPosition: BarPosition.Start }) {
2. // TabContent的内容:关注、视频、游戏、数码、科技、体育、影视
3. // ···
4. }
```

[TopTabBar.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/ScrollableComponent/entry/src/main/ets/pages/tabs/TopTabBar.ets#L24-L64)

## 侧边导航

侧边导航是应用较为少见的一种导航模式，更多适用于横屏界面，用于对应用进行导航操作，由于用户的视觉习惯是从左到右，侧边导航栏默认为左侧侧边栏。

**图5** 侧边导航栏

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fb/v3/rondGS7aQgaIg48NbbVMGA/zh-cn_image_0000002566868059.png?HW-CC-KV=V1&HW-CC-Date=20260403T125811Z&HW-CC-Expire=86400&HW-CC-Sign=57421E70DB471CE1DEC60D1F407D777824A1D19F33671A78B61596D52CBB8733)

实现侧边导航栏需要将Tabs的[vertical](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabs#vertical)属性设置为true，vertical默认值为false，表明内容页和导航栏垂直方向排列。

收起

自动换行

深色代码主题

复制

```
1. Tabs({ barPosition: BarPosition.Start }) {
2. // TabContent的内容:首页、发现、推荐、我的
3. // ···
4. }
5. // ···
6. .vertical(true)
7. .barWidth(100)
8. .barHeight(200)
```

[SideTabBar.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/ScrollableComponent/entry/src/main/ets/pages/tabs/SideTabBar.ets#L24-L63)

说明

* vertical为false时，tabbar的宽度默认为撑满屏幕的宽度，需要设置[barWidth](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabs#barwidth)为合适值。
* vertical为true时，tabbar的高度默认为实际内容的高度，需要设置[barHeight](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabs#barheight)为合适值。

## 限制导航栏的滑动切换

默认情况下，导航栏都支持滑动切换，在一些内容信息量需要进行多级分类的页面，如支持底部导航+顶部导航组合的情况下，底部导航栏的滑动效果与顶部导航出现冲突，此时需要限制底部导航的滑动，避免引起不好的用户体验。

**图6** 限制底部导航栏滑动

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/16/v3/ACuKhHBmSiWnlfcgbkEolA/zh-cn_image_0000002566708079.gif?HW-CC-KV=V1&HW-CC-Date=20260403T125811Z&HW-CC-Expire=86400&HW-CC-Sign=0C8DA19E8512798578253ADC73AEBAB90BCEBBD63065EE43C24EA30352264A2C)

控制滑动切换的属性为scrollable，默认值为true，表示可以滑动，若要限制滑动切换页签则需要设置为false。

收起

自动换行

深色代码主题

复制

```
1. Tabs({ barPosition: BarPosition.End }) {
2. TabContent() {
3. Column() {
4. Tabs() {
5. // 顶部导航栏内容
6. // ···
7. }
8. }
9. .backgroundColor('#ff08a8f1')
10. .width('100%')
11. }
12. // app.string.homepage资源文件中的value值为“首页”
13. .tabBar($r('app.string.homepage'))

15. // 其他TabContent内容：发现、推荐、我的
16. // ···
17. }
18. // ···
19. .scrollable(false)
```

[SwipeLockedTabBar.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/ScrollableComponent/entry/src/main/ets/pages/tabs/SwipeLockedTabBar.ets#L24-L97)

## 固定导航栏

当内容分类较为固定且不具有拓展性时，例如底部导航内容分类一般固定，分类数量一般在3-5个，此时使用固定导航栏。固定导航栏不可滚动，无法被拖拽滚动，内容均分tabBar的宽度。

**图7** 固定导航栏

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c3/v3/nCRrlpDhTsiq2l26Zb4s-g/zh-cn_image_0000002535788282.gif?HW-CC-KV=V1&HW-CC-Date=20260403T125811Z&HW-CC-Expire=86400&HW-CC-Sign=C2ACB0F4725D58E13754AB1177DFDE4C9BFEF14600EBBCFDA84CE3049D751E3A)

Tabs的[barMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabs#barmode10)属性用于控制导航栏是否可以滚动，默认值为BarMode.Fixed。

收起

自动换行

深色代码主题

复制

```
1. Tabs({ barPosition: BarPosition.End }) {
2. // TabContent的内容：首页、发现、推荐、我的
3. // ···
4. }
5. .barMode(BarMode.Fixed)
```

[FixedTabBar.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/ScrollableComponent/entry/src/main/ets/pages/tabs/FixedTabBar.ets#L24-L58)

## 滚动导航栏

滚动导航栏可以用于顶部导航栏或者侧边导航栏的设置，内容分类较多，屏幕宽度无法容纳所有分类页签的情况下，需要使用可滚动的导航栏，支持用户点击和滑动来加载隐藏的页签内容。

**图8** 可滚动导航栏

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d7/v3/YAcsRX3-QhOdk8BYGwMH3w/zh-cn_image_0000002535948230.gif?HW-CC-KV=V1&HW-CC-Date=20260403T125811Z&HW-CC-Expire=86400&HW-CC-Sign=3AFEA82E13AD9F4DE6B633E6895B02DA33483001190F7924854FA9EBB6D18CF2)

滚动导航栏需要设置Tabs组件的barMode属性，默认值为BarMode.Fixed表示为固定导航栏，BarMode.Scrollable表示可滚动导航栏。

收起

自动换行

深色代码主题

复制

```
1. Tabs({ barPosition: BarPosition.Start }) {
2. // TabContent的内容：关注、视频、游戏、数码、科技、体育、影视、人文、艺术、自然、军事
3. // ···
4. }
5. .barMode(BarMode.Scrollable)
```

[ScrollableTabBar.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/ScrollableComponent/entry/src/main/ets/pages/tabs/ScrollableTabBar.ets#L24-L86)

## 自定义导航栏

对于底部导航栏，一般作为应用主页面功能区分，为了更好的用户体验，会组合文字以及对应语义图标表示页签内容，这种情况下，需要自定义导航页签的样式。

**图9** 自定义导航栏

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7b/v3/wFp-sF_9T82Q5AkT2nVQDw/zh-cn_image_0000002566868061.png?HW-CC-KV=V1&HW-CC-Date=20260403T125811Z&HW-CC-Expire=86400&HW-CC-Sign=8E27FE12EBD88FE2AB60F90CF2273956D8C10503711230CB7FA8DC01F6274072)

系统默认情况下采用了下划线标识当前活跃的页签，而自定义导航栏需要自行实现相应的样式，用于区分当前活跃页签和未活跃页签。

设置自定义导航栏需要使用tabBar的参数，以其支持的CustomBuilder的方式传入自定义的函数组件样式。例如这里声明tabBuilder的自定义函数组件，传入参数包括页签文字title，对应位置index，以及选中状态和未选中状态的图片资源。通过当前活跃的currentIndex和页签对应的targetIndex匹配与否，决定UI显示的样式。

收起

自动换行

深色代码主题

复制

```
1. @State currentIndex: number = 0;

3. @Builder
4. tabBuilder(title: ResourceStr, targetIndex: number, selectedImg: Resource, normalImg: Resource) {
5. Column() {
6. Image(this.currentIndex === targetIndex ? selectedImg : normalImg)
7. .size({ width: 25, height: 25 })
8. Text(title)
9. .fontColor(this.currentIndex === targetIndex ? '#1698CE' : '#6B6B6B')
10. }
11. .width('100%')
12. .height(50)
13. .justifyContent(FlexAlign.Center)
14. }
```

[CustomTabBar.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/ScrollableComponent/entry/src/main/ets/pages/tabs/CustomTabBar.ets#L20-L35)

在TabContent对应tabBar属性中传入自定义函数组件，并传递相应的参数。

收起

自动换行

深色代码主题

复制

```
1. TabContent() {
2. Column() {
3. // app.string.mine_content资源文件中的value值为“我的内容”
4. Text($r('app.string.mine_content'))
5. }
6. .width('100%')
7. .height('100%')
8. .backgroundColor('#007DFF')
9. }
10. // app.string.mine资源文件中的value值为“我的”
11. .tabBar(this.tabBuilder($r('app.string.mine'), 0, $r('app.media.mine_selected'), $r('app.media.mine_normal')))
```

[CustomTabBar.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/ScrollableComponent/entry/src/main/ets/pages/tabs/CustomTabBar.ets#L42-L54)

## 切换至指定页签

在不使用自定义导航栏时，默认的Tabs会实现切换逻辑。在使用了自定义导航栏后，默认的Tabs仅实现滑动内容页和点击页签时内容页的切换逻辑，页签切换逻辑需要自行实现。即用户滑动内容页和点击页签时，页签栏需要同步切换至内容页对应的页签。

**图10** 内容页和页签不联动

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d/v3/_qcxmUbiQh-Yxcc-AQK-tA/zh-cn_image_0000002566708081.gif?HW-CC-KV=V1&HW-CC-Date=20260403T125811Z&HW-CC-Expire=86400&HW-CC-Sign=7ABBAB4D3AB8A36BAC24C0697CD1AF381D555E04A297B79AE319BFF7AADF0984)

从API version 18开始，支持使用Tabs提供的[onSelected](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabs#onselected18)事件方法，监听索引index的变化，并将选中元素的index值传递给selectIndex，实现页签的切换。

收起

自动换行

深色代码主题

复制

```
1. @Entry
2. @Component
3. export struct ContentPageNoAndTabLinkage {

5. @State selectIndex: number = 0;
6. @Builder tabBuilder(title: Resource, targetIndex: number) {
7. Column() {
8. Text(title)
9. .fontColor(this.selectIndex === targetIndex ? '#1698CE' : '#6B6B6B')
10. }
11. }
12. build() {
13. NavDestination() {
14. Column({ space: 12 }) {
15. // ...
16. Tabs({ barPosition: BarPosition.End }) {
17. TabContent() {
18. // app.string.homepage_content资源文件中的value值为“首页内容”
19. Text($r('app.string.homepage_content')).width('100%').height('100%').backgroundColor('rgb(213,213,213)')
20. .fontSize(40).fontColor(Color.Black).textAlign(TextAlign.Center)
21. // app.string.homepage资源文件中的value值为“首页”
22. }.tabBar(this.tabBuilder($r('app.string.homepage'), 0))

24. TabContent() {
25. // app.string.discover_content资源文件中的value值为“发现内容”
26. Text($r('app.string.discover_content')).width('100%').height('100%').backgroundColor('rgb(112,112,112)')
27. .fontSize(40).fontColor(Color.Black).textAlign(TextAlign.Center)
28. // app.string.discover资源文件中的value值为“发现”
29. }.tabBar(this.tabBuilder($r('app.string.discover'), 1))

31. TabContent() {
32. // app.string.recommend_content资源文件中的value值为“推荐内容”
33. Text($r('app.string.recommend_content')).width('100%').height('100%').backgroundColor('rgb(39,135,217)')
34. .fontSize(40).fontColor(Color.Black).textAlign(TextAlign.Center)
35. // app.string.recommend资源文件中的value值为“推荐”
36. }.tabBar(this.tabBuilder($r('app.string.recommend'), 2))

38. TabContent() {
39. // app.string.mine_content资源文件中的value值为“我的内容”
40. Text($r('app.string.mine_content')).width('100%').height('100%').backgroundColor('rgb(0,74,175)')
41. .fontSize(40).fontColor(Color.Black).textAlign(TextAlign.Center)
42. }
43. // app.string.mine资源文件中的value值为“我的”
44. .tabBar(this.tabBuilder($r('app.string.mine'), 3))
45. }
46. .animationDuration(0)
47. .backgroundColor('#F1F3F5')
48. .onSelected((index: number) => {
49. this.selectIndex = index;
50. })
51. // ...
52. }
53. .width('100%')
54. // ...
55. }
56. // ...
57. }
58. }
```

[ContentPageNoAndTabLinkage.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/ScrollableComponent/entry/src/main/ets/pages/tabs/ContentPageNoAndTabLinkage.ets#L16-L86)

**图11** 内容页和页签联动

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d9/v3/jO4gmHw7RoWYqWpeWWbyrg/zh-cn_image_0000002535788284.gif?HW-CC-KV=V1&HW-CC-Date=20260403T125811Z&HW-CC-Expire=86400&HW-CC-Sign=7D958461F41EF5B6EB1BBD7DF2D6FF0538B8101E95DD3383A370AC902E56E311)

若希望不滑动内容页和点击页签也能实现内容页和页签的切换，可以将currentIndex传给Tabs的index参数，通过改变currentIndex来实现跳转至指定索引值对应的TabContent内容。也可以使用[TabsController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabs#tabscontroller)，TabsController是Tabs组件的控制器，用于控制Tabs组件进行内容页切换。通过TabsController的changeIndex方法来实现跳转至指定索引值对应的TabContent内容。

收起

自动换行

深色代码主题

复制

```
1. // ...
2. @State currentIndex: number = 2;
3. @State currentAnimationMode: AnimationMode = AnimationMode.CONTENT_FIRST;
4. private controller: TabsController = new TabsController();

6. // ...
7. Tabs({ barPosition: BarPosition.End, index: this.currentIndex, controller: this.controller }) {
8. // ...
9. }
10. .animationDuration(0)
11. .height(300)
12. .animationMode(this.currentAnimationMode)
13. .onChange((index: number) => {
14. this.currentIndex = index;
15. })

17. // app.string.ContentWillChange_animationMode资源文件中的value值为“动态修改animationMode”
18. Button($r('app.string.ContentWillChange_animationMode')).width('50%').margin({ top: 20 })
19. .onClick(()=>{
20. if (this.currentAnimationMode === AnimationMode.CONTENT_FIRST) {
21. this.currentAnimationMode = AnimationMode.ACTION_FIRST;
22. } else if (this.currentAnimationMode === AnimationMode.ACTION_FIRST) {
23. this.currentAnimationMode = AnimationMode.NO_ANIMATION;
24. } else if (this.currentAnimationMode === AnimationMode.NO_ANIMATION) {
25. this.currentAnimationMode = AnimationMode.CONTENT_FIRST_WITH_JUMP;
26. } else if (this.currentAnimationMode === AnimationMode.CONTENT_FIRST_WITH_JUMP) {
27. this.currentAnimationMode = AnimationMode.ACTION_FIRST_WITH_JUMP;
28. } else if (this.currentAnimationMode === AnimationMode.ACTION_FIRST_WITH_JUMP) {
29. this.currentAnimationMode = AnimationMode.CONTENT_FIRST;
30. }
31. })

33. // app.string.ContentWillChange_changeIndex资源文件中的value值为“动态修改index”
34. Button($r('app.string.ContentWillChange_changeIndex')).width('50%').margin({ top: 20 })
35. .onClick(() => {
36. this.currentIndex = (this.currentIndex + 1) % 4;
37. })

39. Button('changeIndex').width('50%').margin({ top: 20 })
40. .onClick(() => {
41. let index = (this.currentIndex + 1) % 4;
42. this.controller.changeIndex(index);
43. })
```

[ContentWillChange.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/ScrollableComponent/entry/src/main/ets/pages/tabs/ContentWillChange.ets#L18-L165)

**图12** 切换指定页签

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3b/v3/BOcJwOu3TRefNIyvWxTA5A/zh-cn_image_0000002535948232.gif?HW-CC-KV=V1&HW-CC-Date=20260403T125811Z&HW-CC-Expire=86400&HW-CC-Sign=FDDB3223218E548D8BE03CE6C0AF7FBF64C474A1C1C64712518544F235ACD454)

开发者可以通过Tabs组件的[onContentWillChange](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabs#oncontentwillchange12)接口，设置自定义拦截回调函数。拦截回调函数在下一个页面即将展示时被调用，如果回调返回true，新页面可以展示；如果回调返回false，新页面不会展示，仍显示原来页面。

收起

自动换行

深色代码主题

复制

```
1. Tabs({ barPosition: BarPosition.End, index: this.currentIndex, controller: this.controllerTwo }) {
2. // ...
3. }
4. // ...
5. .onContentWillChange((currentIndex, comingIndex) => {
6. if (comingIndex === 2) {
7. return false;
8. }
9. return true;
10. })
```

[ContentWillChange.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/ScrollableComponent/entry/src/main/ets/pages/tabs/ContentWillChange.ets#L171-L216)

**图13** 支持开发者自定义页面切换拦截事件

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8d/v3/erfslDH6Qkis_bSpqjgh2A/zh-cn_image_0000002566868063.gif?HW-CC-KV=V1&HW-CC-Date=20260403T125811Z&HW-CC-Expire=86400&HW-CC-Sign=94B4B3681630871DC6C87929AFAEFDE23C1BCE5A9AF757E7C7C8F7FC51B8CFDF)

## 支持适老化

在适老化大字体场景下，底部页签提供大字体弹窗显示内容。当组件识别到大字体时，基于设置的文字和图标等内容，构建长按提示弹窗。当用户长按弹窗后，滑动到下一个页签位置时，使用新页签的弹窗提示内容替换上一个页签提示内容，抬手关闭弹窗并切换到对应TabContent内容页。

说明

弹窗只适用于底部页签BottomTabBarStyle。

**图14** 在适老化场景下通过长按底部页签显示适老化弹窗。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a0/v3/J5Yd7LcZSJeMcigReFPt8A/zh-cn_image_0000002566708083.gif?HW-CC-KV=V1&HW-CC-Date=20260403T125811Z&HW-CC-Expire=86400&HW-CC-Sign=1F9B3EF5AB13BF8EF4F92B8247EDE89EE27A9CDDDBE54F43D80EBDDB7A2BE67D)

收起

自动换行

深色代码主题

复制

```
1. @Entry
2. @Component
3. export struct AgeFriendlyTabs {

5. build() {
6. NavDestination() {
7. Column() {
8. Tabs({ barPosition: BarPosition.End }) {
9. TabContent() {
10. Column().width('100%').height('100%').backgroundColor(Color.Pink)
11. }.tabBar(new BottomTabBarStyle($r('sys.media.ohos_app_icon'), 'OverLength'))

13. TabContent() {
14. Column().width('100%').height('100%').backgroundColor(Color.Yellow)
15. }.tabBar(new BottomTabBarStyle($r('sys.media.ohos_app_icon'), 'SixLine'))

17. TabContent() {
18. Column().width('100%').height('100%').backgroundColor(Color.Blue)
19. }.tabBar(new BottomTabBarStyle($r('sys.media.ohos_app_icon'), 'Blue'))

21. TabContent() {
22. Column().width('100%').height('100%').backgroundColor(Color.Green)
23. }.tabBar(new BottomTabBarStyle($r('sys.media.ohos_app_icon'), 'Green'))
24. }
25. .vertical(false)
26. .scrollable(true)
27. .barMode(BarMode.Fixed)
28. .width('100%')
29. .backgroundColor(0xF1F3F5)
30. }.width('80%').height(200)
31. .margin({ top: 200 })
32. }
33. }
34. }
```

## 控制页面缓存数

从API version 19开始，开发者可以通过[cachedMaxCount](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabs#cachedmaxcount19)接口，设置子组件的最大缓存个数和缓存模式。默认情况下Tabs创建时会一次性预加载所有TabContent，而且已加载的页面不会释放，可能会带来性能内存问题。此时可以设置[cachedMaxCount](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabs#cachedmaxcount19)属性控制缓存的页面数量，设置此属性后不会进行页面预加载，使用懒加载机制(仅切换到页面时才加载)，当切换页面时根据所设置的[TabsCacheMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabs#tabscachemode19枚举说明)决定保留缓存或者释放页面。

说明

* TabsCacheMode枚举值为CACHE\_BOTH\_SIDE时，缓存当前显示的子组件和其两侧的子组件。
* TabsCacheMode枚举值为CACHE\_LATEST\_SWITCHED时，缓存当前显示的子组件和最近切换过的子组件。
* 存在翻页动画时，从页面1直接切换到页面3，翻页动画会包含页面2，页面2也会被加载，如果此时页面2不在缓存范围内，页面切换完成后会立马释放。

**图15** 在页面缓存场景下通过点击yellow按键切换界面。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a8/v3/5ThgSEOMTK2tLWWTcrg2hg/zh-cn_image_0000002535788286.gif?HW-CC-KV=V1&HW-CC-Date=20260403T125811Z&HW-CC-Expire=86400&HW-CC-Sign=D8D6C9CDD7FA46BBE4A6870DD2C253A7991EADB826BE6A7C402E09E8CCAC1404)

收起

自动换行

深色代码主题

复制

```
1. @Entry
2. @Component
3. export struct NumberOfCachesTabBar {
4. build() {
5. // ···
6. Tabs({ barPosition: BarPosition.Start }) {
7. TabContent() {
8. MyComponent({ color: '#00CB87' })
9. }.tabBar(SubTabBarStyle.of('green'))

11. TabContent() {
12. MyComponent({ color: '#007DFF' })
13. }.tabBar(SubTabBarStyle.of('blue'))

15. TabContent() {
16. MyComponent({ color: '#FFBF00' })
17. }.tabBar(SubTabBarStyle.of('yellow'))

19. TabContent() {
20. MyComponent({ color: '#E67C92' })
21. }.tabBar(SubTabBarStyle.of('pink'))

23. TabContent() {
24. MyComponent({ color: '#FF0000' })
25. }.tabBar(SubTabBarStyle.of('red'))
26. }
27. .width(360)
28. .height(296)
29. .backgroundColor('#F1F3F5')
30. .cachedMaxCount(1, TabsCacheMode.CACHE_BOTH_SIDE)
31. // ···
32. }
33. }

35. @Component
36. struct MyComponent {
37. private color: string = '';

39. aboutToAppear(): void {
40. console.info('aboutToAppear backgroundColor:' + this.color);
41. }

43. aboutToDisappear(): void {
44. console.info('aboutToDisappear backgroundColor:' + this.color);
45. }

47. build() {
48. Column()
49. .width('100%')
50. .height('100%')
51. .backgroundColor(this.color)
52. }
53. }
```

[NumberOfCachesTabBar.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/ScrollableComponent/entry/src/main/ets/pages/tabs/NumberOfCachesTabBar.ets#L16-L84)

基于以上示例代码为例，不同场景下的缓存策略如下：

1. 如图16所示，使用默认翻页动画，CACHE\_BOTH\_SIDE模式，n设置为2，点击TabBar切换到yellow页，TabContent1~3被缓存。再切换到red页，TabContent1、2释放，TabContent3~5被缓存。

   **图16** 默认翻页动画，CACHE\_BOTH\_SIDE模式示意图

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/97/v3/k9zAQTi0QxKh-znVzhJq7A/zh-cn_image_0000002535948234.png?HW-CC-KV=V1&HW-CC-Date=20260403T125811Z&HW-CC-Expire=86400&HW-CC-Sign=B79151F2F9EDFFC0A0938DC9C53305E3DE23C75DE7E7B5AFE28E3FC75C7008A6)
2. 如图17所示，使用默认翻页动画，CACHE\_LATEST\_SWITCHED模式，n设置为2，点击TabBar切换到yellow页，TabContent1、3被缓存，TabContent2释放。再切换到red页，TabContent1、3、5被缓存，TabContent4释放。

   **图17** 默认翻页动画，CACHE\_LATEST\_SWITCHED模式示意图

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2/v3/jdikPs6bSeONE8vtrfevGw/zh-cn_image_0000002566868065.png?HW-CC-KV=V1&HW-CC-Date=20260403T125811Z&HW-CC-Expire=86400&HW-CC-Sign=403C261D854B3A6C48B7C9B777DDF842F88C90A615CD9FA908DA4CA22E71AFD8)
3. 如图18所示，关闭翻页动画，CACHE\_BOTH\_SIDE模式，n设置为2，点击TabBar切换到yellow页，TabContent1、3被缓存。再切换到red页，TabContent3、5被缓存，TabContent1释放。

   **图18** 关闭翻页动画，CACHE\_BOTH\_SIDE模式示意图

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e6/v3/-hiiDxi-Si20EIb5HH1rzA/zh-cn_image_0000002566708085.png?HW-CC-KV=V1&HW-CC-Date=20260403T125811Z&HW-CC-Expire=86400&HW-CC-Sign=EF3C27983F11F7140BAF0E7A8C9F52BD5DB10C28E419FB70AFDDD4EEB2B3E3E3)
4. 如图19所示，关闭翻页动画，CACHE\_LATEST\_SWITCHED模式，n设置为2，点击TabBar切换到yellow页，TabContent1、3被缓存。再切换到red页，TabContent1、3、5被缓存。

   **图19** 关闭翻页动画，CACHE\_LATEST\_SWITCHED模式示意图

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/35/v3/8BmMjSTsRg6A7Ar8zYwGSw/zh-cn_image_0000002535788288.png?HW-CC-KV=V1&HW-CC-Date=20260403T125811Z&HW-CC-Expire=86400&HW-CC-Sign=30A3A51BD6F9D47D448AC8EE87BF1A5228144DD6E9FD7A114831AC46B0473D7C)

## 示例代码

* [基于Tabs组件实现常见导航样式](https://gitcode.com/HarmonyOS_Samples/multi-tab-navigation)
* [基于Tab组件实现增删Tab的功能](https://gitcode.com/HarmonyOS_Samples/handle-tabs)