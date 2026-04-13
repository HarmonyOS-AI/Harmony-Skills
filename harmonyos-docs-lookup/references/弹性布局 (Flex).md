## 概述

弹性布局（[Flex](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-flex)）提供更加有效的方式对容器中的子元素进行排列、对齐和分配剩余空间。常用于页面头部导航栏的均匀分布、页面框架的搭建、多行数据的排列等。

容器默认存在主轴与交叉轴，子元素默认沿主轴排列，子元素在主轴方向的尺寸称为主轴尺寸，在交叉轴方向的尺寸称为交叉轴尺寸。

**图1** 主轴为水平方向的Flex容器示意图

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/82/v3/IFuGrPyiQyCrwB1zgQevHg/zh-cn_image_0000002566868025.png?HW-CC-KV=V1&HW-CC-Date=20260403T125758Z&HW-CC-Expire=86400&HW-CC-Sign=28C82FBE027F87231878AF045F79AEB2259ECFC83640202D0D25BFC9353FEF24)

## 基本概念

* 主轴：Flex组件布局方向的轴线，子元素默认沿着主轴排列。主轴开始的位置称为主轴起始点，结束位置称为主轴结束点。
* 交叉轴：垂直于主轴方向的轴线。交叉轴开始的位置称为交叉轴起始点，结束位置称为交叉轴结束点。

## 布局方向

在弹性布局中，容器的子元素可以按照任意方向排列。通过设置[FlexOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-flex#flexoptions对象说明)的参数direction，可以决定主轴的方向，从而控制子元素的排列方向。

**图2** 弹性布局方向图

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bf/v3/ZTcMQ9ttSOS69uS--G0YvQ/zh-cn_image_0000002566708045.png?HW-CC-KV=V1&HW-CC-Date=20260403T125758Z&HW-CC-Expire=86400&HW-CC-Sign=2E92D1F3D43BE79364703D9172205FFB9A557E91D1B27C4A73EE659FEE6138F5)

* FlexDirection.Row（默认值）：主轴为水平方向，子元素从起始端沿着水平方向开始排布。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. Flex({ direction: FlexDirection.Row }) {
  2. Text('1').width('33%').height(50).backgroundColor('#F5DEB3')
  3. Text('2').width('33%').height(50).backgroundColor('#D2B48C')
  4. Text('3').width('33%').height(50).backgroundColor('#F5DEB3')
  5. }
  6. .height(70)
  7. .width('90%')
  8. .padding(10)
  9. .backgroundColor('#AFEEEE')
  ```

  [FlexDirectionRow.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/MultipleLayoutProject/entry/src/main/ets/pages/flexlayout/FlexDirectionRow.ets#L20-L30)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/23/v3/PMb7S857QYK0qgFAsJHkug/zh-cn_image_0000002535788248.png?HW-CC-KV=V1&HW-CC-Date=20260403T125758Z&HW-CC-Expire=86400&HW-CC-Sign=CF97DA759C21345265328039081DEAB45090CE6D42DFD7C2BBA4BD5B5C7BE909)
* FlexDirection.RowReverse：主轴为水平方向，子元素从终点端沿着FlexDirection.Row相反的方向开始排布。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. Flex({ direction: FlexDirection.RowReverse }) {
  2. Text('1').width('33%').height(50).backgroundColor('#F5DEB3')
  3. Text('2').width('33%').height(50).backgroundColor('#D2B48C')
  4. Text('3').width('33%').height(50).backgroundColor('#F5DEB3')
  5. }
  6. .height(70)
  7. .width('90%')
  8. .padding(10)
  9. .backgroundColor('#AFEEEE')
  ```

  [FlexDirectionRowReverse.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/MultipleLayoutProject/entry/src/main/ets/pages/flexlayout/FlexDirectionRowReverse.ets#L20-L30)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b7/v3/i4dphhcKRaGqkWBxivvcNQ/zh-cn_image_0000002535948196.png?HW-CC-KV=V1&HW-CC-Date=20260403T125758Z&HW-CC-Expire=86400&HW-CC-Sign=7B286DBF90A2B45789EDFAE7B29D09C421E40B6EF21B417254D5BCB25D04380E)
* FlexDirection.Column：主轴为垂直方向，子元素从起始端沿着垂直方向开始排布。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. Flex({ direction: FlexDirection.Column }) {
  2. Text('1').width('100%').height(50).backgroundColor('#F5DEB3')
  3. Text('2').width('100%').height(50).backgroundColor('#D2B48C')
  4. Text('3').width('100%').height(50).backgroundColor('#F5DEB3')
  5. }
  6. .height(70)
  7. .width('90%')
  8. .padding(10)
  9. .backgroundColor('#AFEEEE')
  ```

  [FlexDirectionColumn.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/MultipleLayoutProject/entry/src/main/ets/pages/flexlayout/FlexDirectionColumn.ets#L20-L30)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c0/v3/kE5CuzZ1RMeDrx_6Q48fcw/zh-cn_image_0000002566868027.png?HW-CC-KV=V1&HW-CC-Date=20260403T125758Z&HW-CC-Expire=86400&HW-CC-Sign=2034214D057E49123A7C9763BC67CA5E7A8EC3E19623ECD28225D40969FF7752)
* FlexDirection.ColumnReverse：主轴为垂直方向，子元素从终点端沿着FlexDirection.Column相反的方向开始排布。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. Flex({ direction: FlexDirection.ColumnReverse }) {
  2. Text('1').width('100%').height(50).backgroundColor('#F5DEB3')
  3. Text('2').width('100%').height(50).backgroundColor('#D2B48C')
  4. Text('3').width('100%').height(50).backgroundColor('#F5DEB3')
  5. }
  6. .height(70)
  7. .width('90%')
  8. .padding(10)
  9. .backgroundColor('#AFEEEE')
  ```

  [FlexDirectionColumnReverse.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/MultipleLayoutProject/entry/src/main/ets/pages/flexlayout/FlexDirectionColumnReverse.ets#L20-L30)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a2/v3/_ztqwl8dSTWI8euQboDEhg/zh-cn_image_0000002566708047.png?HW-CC-KV=V1&HW-CC-Date=20260403T125758Z&HW-CC-Expire=86400&HW-CC-Sign=E712E8A127BDABFA089A5275A31A026078A24FEC4528BECA8AB58E7D012D7F29)

## 布局换行

弹性布局分为单行布局和多行布局。默认情况下，Flex容器中的子元素都排在一条线（又称“轴线”）上。wrap属性控制当子元素主轴尺寸之和大于容器主轴尺寸时，Flex是单行布局还是多行布局。在多行布局时，通过交叉轴方向，确认新行排列方向。

* FlexWrap.NoWrap（默认值）：不换行。如果子元素的宽度总和大于父元素的宽度，则子元素会被压缩宽度。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. Flex({ wrap: FlexWrap.NoWrap }) {
  2. Text('1').width('50%').height(50).backgroundColor('#F5DEB3')
  3. Text('2').width('50%').height(50).backgroundColor('#D2B48C')
  4. Text('3').width('50%').height(50).backgroundColor('#F5DEB3')
  5. }
  6. .width('90%')
  7. .padding(10)
  8. .backgroundColor('#AFEEEE')
  ```

  [FlexWrapNoWrap.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/MultipleLayoutProject/entry/src/main/ets/pages/flexlayout/FlexWrapNoWrap.ets#L20-L29)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/0e/v3/90wS0VCYRhWEa11PA4vNFg/zh-cn_image_0000002535788250.png?HW-CC-KV=V1&HW-CC-Date=20260403T125758Z&HW-CC-Expire=86400&HW-CC-Sign=1640CBAABF27EAB9D48B61BE4BB174EDFFBF4D38A0BF8D10BF30F7DABF5C149C)
* FlexWrap.Wrap：换行，每一行子元素按照主轴方向排列。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. Flex({ wrap: FlexWrap.Wrap }) {
  2. Text('1').width('50%').height(50).backgroundColor('#F5DEB3')
  3. Text('2').width('50%').height(50).backgroundColor('#D2B48C')
  4. Text('3').width('50%').height(50).backgroundColor('#D2B48C')
  5. }
  6. .width('90%')
  7. .padding(10)
  8. .backgroundColor('#AFEEEE')
  ```

  [FlexWrapWrap.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/MultipleLayoutProject/entry/src/main/ets/pages/flexlayout/FlexWrapWrap.ets#L20-L29)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/0e/v3/npdqxFr9S4qF5G514sqq0w/zh-cn_image_0000002535948198.png?HW-CC-KV=V1&HW-CC-Date=20260403T125758Z&HW-CC-Expire=86400&HW-CC-Sign=BA612A89D8948CC8355F5FC49A85506EBC6E0FDCDDA04EEA3E7B37A5154E8362)
* FlexWrap.WrapReverse：换行，每一行子元素按照主轴反方向排列。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. Flex({ wrap: FlexWrap.WrapReverse}) {
  2. Text('1').width('50%').height(50).backgroundColor('#F5DEB3')
  3. Text('2').width('50%').height(50).backgroundColor('#D2B48C')
  4. Text('3').width('50%').height(50).backgroundColor('#F5DEB3')
  5. }
  6. .width('90%')
  7. .padding(10)
  8. .backgroundColor('#AFEEEE')
  ```

  [FlexWrapWrapReverse.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/MultipleLayoutProject/entry/src/main/ets/pages/flexlayout/FlexWrapWrapReverse.ets#L20-L29)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e5/v3/Lt4mZJ7aSUmCwYKfqhv3pQ/zh-cn_image_0000002566868029.png?HW-CC-KV=V1&HW-CC-Date=20260403T125758Z&HW-CC-Expire=86400&HW-CC-Sign=E0B7B304ACA07232CECAFE1BA24C5E9F5E1262222AC1AECB57ABBDFD0B3FEA79)

## 主轴对齐方式

通过justifyContent参数设置子元素在主轴方向的对齐方式。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f4/v3/LF1FGDf0SkKFIqfsVlfhyw/zh-cn_image_0000002566708049.png?HW-CC-KV=V1&HW-CC-Date=20260403T125758Z&HW-CC-Expire=86400&HW-CC-Sign=78D806FF71958215D2EEDE49ED2F4ACE70A26A1AFC83ACF7952B927CE96BD179)

* FlexAlign.Start（默认值）：子元素在主轴方向起始端对齐， 第一个子元素与父元素边沿对齐，其他元素与前一个元素对齐。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. Flex({ justifyContent: FlexAlign.Start }) {
  2. Text('1').width('20%').height(50).backgroundColor('#F5DEB3')
  3. Text('2').width('20%').height(50).backgroundColor('#D2B48C')
  4. Text('3').width('20%').height(50).backgroundColor('#F5DEB3')
  5. }
  6. .width('90%')
  7. .padding({ top: 10, bottom: 10 })
  8. .backgroundColor('#AFEEEE')
  ```

  [FlexAlignStart.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/MultipleLayoutProject/entry/src/main/ets/pages/flexlayout/FlexAlignStart.ets#L20-L42)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b4/v3/GiIdBamMQ1KvE8AVYdCx2w/zh-cn_image_0000002535788252.png?HW-CC-KV=V1&HW-CC-Date=20260403T125758Z&HW-CC-Expire=86400&HW-CC-Sign=B2930AB3DFCFCB26749DFD916DC264582A9419C8F9A804BD45F739C83EA6E9A9)
* FlexAlign.Center：子元素在主轴方向居中对齐。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. Flex({ justifyContent: FlexAlign.Center }) {
  2. Text('1').width('20%').height(50).backgroundColor('#F5DEB3')
  3. Text('2').width('20%').height(50).backgroundColor('#D2B48C')
  4. Text('3').width('20%').height(50).backgroundColor('#F5DEB3')
  5. }
  6. .width('90%')
  7. .padding({ top: 10, bottom: 10 })
  8. .backgroundColor('#AFEEEE')
  ```

  [FlexAlignCenter.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/MultipleLayoutProject/entry/src/main/ets/pages/flexlayout/FlexAlignCenter.ets#L20-L29)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fb/v3/YO6pX_0GSdaulHu3H_T3yQ/zh-cn_image_0000002535948200.png?HW-CC-KV=V1&HW-CC-Date=20260403T125758Z&HW-CC-Expire=86400&HW-CC-Sign=DF24214939556BA6CD85B266BDEC27FA55AB0851D1D383D511606BEAF51855FA)
* FlexAlign.End：子元素在主轴方向终点端对齐，最后一个子元素与父元素边沿对齐，其他元素与后一个元素对齐。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. Flex({ justifyContent: FlexAlign.End }) {
  2. Text('1').width('20%').height(50).backgroundColor('#F5DEB3')
  3. Text('2').width('20%').height(50).backgroundColor('#D2B48C')
  4. Text('3').width('20%').height(50).backgroundColor('#F5DEB3')
  5. }
  6. .width('90%')
  7. .padding({ top: 10, bottom: 10 })
  8. .backgroundColor('#AFEEEE')
  ```

  [FlexAlignEnd.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/MultipleLayoutProject/entry/src/main/ets/pages/flexlayout/FlexAlignEnd.ets#L20-L29)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7d/v3/xSCeQGV7T1mwbp4Se06-nA/zh-cn_image_0000002566868031.png?HW-CC-KV=V1&HW-CC-Date=20260403T125758Z&HW-CC-Expire=86400&HW-CC-Sign=FA79FB3EB0B857D3F7F6A73F0DEAF5A10B5A61B423CC1B5564D2815DEB9ED078)
* FlexAlign.SpaceBetween：Flex主轴方向均匀分配弹性元素，相邻子元素之间距离相同。第一个子元素和最后一个子元素与父元素边沿对齐。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. Flex({ justifyContent: FlexAlign.SpaceBetween }) {
  2. Text('1').width('20%').height(50).backgroundColor('#F5DEB3')
  3. Text('2').width('20%').height(50).backgroundColor('#D2B48C')
  4. Text('3').width('20%').height(50).backgroundColor('#F5DEB3')
  5. }
  6. .width('90%')
  7. .padding({ top: 10, bottom: 10 })
  8. .backgroundColor('#AFEEEE')
  ```

  [FlexAlignSpaceBetween.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/MultipleLayoutProject/entry/src/main/ets/pages/flexlayout/FlexAlignSpaceBetween.ets#L20-L29)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/12/v3/Nr4LVbnRS_WaZJSYeu3iSg/zh-cn_image_0000002566708051.png?HW-CC-KV=V1&HW-CC-Date=20260403T125758Z&HW-CC-Expire=86400&HW-CC-Sign=47D68513ABC1B4D255E037186FCA42D945F28C899B5E0713A0B673BF758AAF92)
* FlexAlign.SpaceAround：Flex主轴方向均匀分配弹性元素，相邻子元素之间距离相同。第一个子元素到主轴起始端的距离和最后一个子元素到主轴终点端的距离是相邻元素之间距离的一半。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. Flex({ justifyContent: FlexAlign.SpaceAround }) {
  2. Text('1').width('20%').height(50).backgroundColor('#F5DEB3')
  3. Text('2').width('20%').height(50).backgroundColor('#D2B48C')
  4. Text('3').width('20%').height(50).backgroundColor('#F5DEB3')
  5. }
  6. .width('90%')
  7. .padding({ top: 10, bottom: 10 })
  8. .backgroundColor('#AFEEEE')
  ```

  [FlexAlignSpaceAround.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/MultipleLayoutProject/entry/src/main/ets/pages/flexlayout/FlexAlignSpaceAround.ets#L20-L29)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c1/v3/b5Xj23hXTiGFNT39qItOiA/zh-cn_image_0000002535788254.png?HW-CC-KV=V1&HW-CC-Date=20260403T125758Z&HW-CC-Expire=86400&HW-CC-Sign=91637C53570B055C30BD9BE4BCC8BC3211EF197014CBF12B722A5E2C50C12677)
* FlexAlign.SpaceEvenly：Flex主轴方向元素等间距布局，相邻子元素之间的间距、第一个子元素与主轴起始端的间距、最后一个子元素到主轴终点端的间距均相等。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. Flex({ justifyContent: FlexAlign.SpaceEvenly }) {
  2. Text('1').width('20%').height(50).backgroundColor('#F5DEB3')
  3. Text('2').width('20%').height(50).backgroundColor('#D2B48C')
  4. Text('3').width('20%').height(50).backgroundColor('#F5DEB3')
  5. }
  6. .width('90%')
  7. .padding({ top: 10, bottom: 10 })
  8. .backgroundColor('#AFEEEE')
  ```

  [FlexAlignSpaceEvenly.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/MultipleLayoutProject/entry/src/main/ets/pages/flexlayout/FlexAlignSpaceEvenly.ets#L20-L29)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ea/v3/qCpjwPSdTmWKRBx6JGngdg/zh-cn_image_0000002535948202.png?HW-CC-KV=V1&HW-CC-Date=20260403T125758Z&HW-CC-Expire=86400&HW-CC-Sign=9A765F64093F89FFCAF192033194400B6188AA82D003085A9BE9056942ECC8CF)

## 交叉轴对齐方式

容器和子元素都可以设置交叉轴对齐方式，且子元素设置的对齐方式优先级较高。

### 容器组件设置交叉轴对齐

可以通过设置[FlexOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-flex#flexoptions对象说明)的参数alignItems，设置子元素在交叉轴的对齐方式。

* ItemAlign.Auto：使用Flex容器中默认配置。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. Flex({ alignItems: ItemAlign.Auto }) {
  2. Text('1').width('33%').height(30).backgroundColor('#F5DEB3')
  3. Text('2').width('33%').height(40).backgroundColor('#D2B48C')
  4. Text('3').width('33%').height(50).backgroundColor('#F5DEB3')
  5. }
  6. .size({ width: '90%', height: 80 })
  7. .padding(10)
  8. .backgroundColor('#AFEEEE')
  ```

  [FlexItemAlignAuto.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/MultipleLayoutProject/entry/src/main/ets/pages/flexlayout/FlexItemAlignAuto.ets#L20-L29)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2c/v3/AXsvQ4fSTHmaUgFzSij5tg/zh-cn_image_0000002566868033.png?HW-CC-KV=V1&HW-CC-Date=20260403T125758Z&HW-CC-Expire=86400&HW-CC-Sign=CD2136A94F6381F0302A6C9C778285A7EAB812A243CA5A84A229ECA162BDC3D0)
* ItemAlign.Start：交叉轴方向首部对齐。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. Flex({ alignItems: ItemAlign.Start }) {
  2. Text('1').width('33%').height(30).backgroundColor('#F5DEB3')
  3. Text('2').width('33%').height(40).backgroundColor('#D2B48C')
  4. Text('3').width('33%').height(50).backgroundColor('#F5DEB3')
  5. }
  6. .size({ width: '90%', height: 80 })
  7. .padding(10)
  8. .backgroundColor('#AFEEEE')
  ```

  [FlexItemAlignStart.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/MultipleLayoutProject/entry/src/main/ets/pages/flexlayout/FlexItemAlignStart.ets#L20-L62)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e0/v3/VfWIZ-whQripDkYZyDIuNA/zh-cn_image_0000002566708053.png?HW-CC-KV=V1&HW-CC-Date=20260403T125758Z&HW-CC-Expire=86400&HW-CC-Sign=14FA447DAADE5F333E8A47B0E1E746B8C411760A3B1B0C4ECE4DE08141D306DA)
* ItemAlign.Center：交叉轴方向居中对齐。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. Flex({ alignItems: ItemAlign.Center }) {
  2. Text('1').width('33%').height(30).backgroundColor('#F5DEB3')
  3. Text('2').width('33%').height(40).backgroundColor('#D2B48C')
  4. Text('3').width('33%').height(50).backgroundColor('#F5DEB3')
  5. }
  6. .size({ width: '90%', height: 80 })
  7. .padding(10)
  8. .backgroundColor('#AFEEEE')
  ```

  [FlexItemAlignCenter.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/MultipleLayoutProject/entry/src/main/ets/pages/flexlayout/FlexItemAlignCenter.ets#L20-L29)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/43/v3/uSumdo1STXuoqjNy5hgcBQ/zh-cn_image_0000002535788256.png?HW-CC-KV=V1&HW-CC-Date=20260403T125758Z&HW-CC-Expire=86400&HW-CC-Sign=D7AA53758551E2A9BDD68E6609763DF9AD7F6DD363CC0138441A6EB3F152B273)
* ItemAlign.End：交叉轴方向底部对齐。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. Flex({ alignItems: ItemAlign.End }) {
  2. Text('1').width('33%').height(30).backgroundColor('#F5DEB3')
  3. Text('2').width('33%').height(40).backgroundColor('#D2B48C')
  4. Text('3').width('33%').height(50).backgroundColor('#F5DEB3')
  5. }
  6. .size({ width: '90%', height: 80 })
  7. .padding(10)
  8. .backgroundColor('#AFEEEE')
  ```

  [FlexItemAlignEnd.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/MultipleLayoutProject/entry/src/main/ets/pages/flexlayout/FlexItemAlignEnd.ets#L20-L29)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/96/v3/EU1wtskOSd6qNuuOYr0hBA/zh-cn_image_0000002535948204.png?HW-CC-KV=V1&HW-CC-Date=20260403T125758Z&HW-CC-Expire=86400&HW-CC-Sign=40D1102BBADCEF54AC0CD8616D0CE8867B09DF8F59526063C7F3B56E0627CE17)
* ItemAlign.Stretch：交叉轴方向拉伸填充，在未设置尺寸时，拉伸到容器尺寸。元素在Flex容器中，沿交叉轴方向拉伸填充。容器为Flex且设置[FlexWrap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-appendix-enums#flexwrap)为FlexWrap.Wrap或FlexWrap.WrapReverse时，元素拉伸到与当前行或列交叉轴长度最长的元素尺寸。其余情况下，无论元素尺寸是否设置，均拉伸到容器尺寸。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. Flex({ alignItems: ItemAlign.Stretch }) {
  2. Text('1').width('33%').backgroundColor('#F5DEB3')
  3. Text('2').width('33%').backgroundColor('#D2B48C')
  4. Text('3').width('33%').backgroundColor('#F5DEB3')
  5. }
  6. .size({ width: '90%', height: 80 })
  7. .padding(10)
  8. .backgroundColor('#AFEEEE')
  ```

  [FlexItemAlignStretch.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/MultipleLayoutProject/entry/src/main/ets/pages/flexlayout/FlexItemAlignStretch.ets#L20-L29)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9b/v3/5brKa08tRxywmD7WwNkb6w/zh-cn_image_0000002566868035.png?HW-CC-KV=V1&HW-CC-Date=20260403T125758Z&HW-CC-Expire=86400&HW-CC-Sign=EEACB2BD7E3BB28B5D8F2CC4074AEF1ADA539B8BFDA90EC4B8855A5B95928BC9)
* ItemAlign.Baseline：交叉轴方向文本基线对齐。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. Flex({ alignItems: ItemAlign.Baseline }) {
  2. Text('1').width('33%').height(30).backgroundColor('#F5DEB3')
  3. Text('2').width('33%').height(40).backgroundColor('#D2B48C')
  4. Text('3').width('33%').height(50).backgroundColor('#F5DEB3')
  5. }
  6. .size({ width: '90%', height: 80 })
  7. .padding(10)
  8. .backgroundColor('#AFEEEE')
  ```

  [FlexItemAlignBaseline.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/MultipleLayoutProject/entry/src/main/ets/pages/flexlayout/FlexItemAlignBaseline.ets#L20-L29)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/80/v3/F67DMT1bQ5Cdq8nJMRZy2Q/zh-cn_image_0000002566708055.png?HW-CC-KV=V1&HW-CC-Date=20260403T125758Z&HW-CC-Expire=86400&HW-CC-Sign=E8098219FED784BE982C397C7DC83685469CEA88C9692A6A4862D5763FF1792D)

### 子元素设置交叉轴对齐

子元素的[alignSelf](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-flex-layout#alignself)属性也可以设置子元素在父容器交叉轴的对齐方式，且会覆盖Flex布局容器中alignItems配置。如下例所示：

收起

自动换行

深色代码主题

复制

```
1. Flex({ direction: FlexDirection.Row, alignItems: ItemAlign.Center }) { // 容器组件设置子元素居中
2. Text('alignSelf Start').width('25%').height(80)
3. .alignSelf(ItemAlign.Start)
4. .backgroundColor('#F5DEB3')
5. Text('alignSelf Baseline')
6. .alignSelf(ItemAlign.Baseline)
7. .width('25%')
8. .height(80)
9. .backgroundColor('#D2B48C')
10. Text('alignSelf Baseline').width('25%').height(100)
11. .backgroundColor('#F5DEB3')
12. .alignSelf(ItemAlign.Baseline)
13. Text('no alignSelf').width('25%').height(100)
14. .backgroundColor('#D2B48C')
15. Text('no alignSelf').width('25%').height(100)
16. .backgroundColor('#F5DEB3')

18. }.width('90%').height(220).backgroundColor('#AFEEEE')
```

[FlexAlignSelf.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/MultipleLayoutProject/entry/src/main/ets/pages/flexlayout/FlexAlignSelf.ets#L20-L39)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ed/v3/pBNN5gsqQ0C6HMTCl1sxlg/zh-cn_image_0000002535788258.png?HW-CC-KV=V1&HW-CC-Date=20260403T125758Z&HW-CC-Expire=86400&HW-CC-Sign=AC5CC171541B3490182F19B203CA7CBAB045AF91E53678244DF51039F1D4549C)

上例中，Flex容器中alignItems设置交叉轴子元素的对齐方式为居中，子元素自身设置了alignSelf属性的情况，覆盖父组件的alignItems值，表现为alignSelf的定义。

### 内容对齐

可以通过[alignContent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-flex#flexoptions对象说明)参数设置子元素各行在交叉轴剩余空间内的对齐方式，只在多行的Flex布局中生效，可选值有：

* FlexAlign.Start：子元素各行与交叉轴起点对齐。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. Flex({ justifyContent: FlexAlign.SpaceBetween, wrap: FlexWrap.Wrap, alignContent: FlexAlign.Start }) {
  2. Text('1').width('30%').height(20).backgroundColor('#F5DEB3')
  3. Text('2').width('60%').height(20).backgroundColor('#D2B48C')
  4. Text('3').width('40%').height(20).backgroundColor('#D2B48C')
  5. Text('4').width('30%').height(20).backgroundColor('#F5DEB3')
  6. Text('5').width('20%').height(20).backgroundColor('#D2B48C')
  7. }
  8. .width('90%')
  9. .height(100)
  10. .backgroundColor('#AFEEEE')
  ```

  [FlexAlignCenterFlexAlignStart.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/MultipleLayoutProject/entry/src/main/ets/pages/flexlayout/FlexAlignCenterFlexAlignStart.ets#L20-L50)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6c/v3/W4CHgVrRRsCPhCmPctwNpw/zh-cn_image_0000002535948206.png?HW-CC-KV=V1&HW-CC-Date=20260403T125758Z&HW-CC-Expire=86400&HW-CC-Sign=3ED66892BA2D1FFF8711F245FE74527114EF5CC641137D534C558F0EF1D50586)
* FlexAlign.Center：子元素各行在交叉轴方向居中对齐。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. Flex({ justifyContent: FlexAlign.SpaceBetween, wrap: FlexWrap.Wrap, alignContent: FlexAlign.Center }) {
  2. Text('1').width('30%').height(20).backgroundColor('#F5DEB3')
  3. Text('2').width('60%').height(20).backgroundColor('#D2B48C')
  4. Text('3').width('40%').height(20).backgroundColor('#D2B48C')
  5. Text('4').width('30%').height(20).backgroundColor('#F5DEB3')
  6. Text('5').width('20%').height(20).backgroundColor('#D2B48C')
  7. }
  8. .width('90%')
  9. .height(100)
  10. .backgroundColor('#AFEEEE')
  ```

  [FlexAlignCenterFlexAlignCenter.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/MultipleLayoutProject/entry/src/main/ets/pages/flexlayout/FlexAlignCenterFlexAlignCenter.ets#L20-L31)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/15/v3/sUcmMPSTRbCWzXm-d578Fw/zh-cn_image_0000002566868037.png?HW-CC-KV=V1&HW-CC-Date=20260403T125758Z&HW-CC-Expire=86400&HW-CC-Sign=B87B6873FECAB45B3C9CE7C35CC1E313454A47E5F0477EC91A3C54B7271DA577)
* FlexAlign.End：子元素各行与交叉轴终点对齐。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. Flex({ justifyContent: FlexAlign.SpaceBetween, wrap: FlexWrap.Wrap, alignContent: FlexAlign.End }) {
  2. Text('1').width('30%').height(20).backgroundColor('#F5DEB3')
  3. Text('2').width('60%').height(20).backgroundColor('#D2B48C')
  4. Text('3').width('40%').height(20).backgroundColor('#D2B48C')
  5. Text('4').width('30%').height(20).backgroundColor('#F5DEB3')
  6. Text('5').width('20%').height(20).backgroundColor('#D2B48C')
  7. }
  8. .width('90%')
  9. .height(100)
  10. .backgroundColor('#AFEEEE')
  ```

  [FlexAlignCenterFlexAlignEnd.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/MultipleLayoutProject/entry/src/main/ets/pages/flexlayout/FlexAlignCenterFlexAlignEnd.ets#L20-L31)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f4/v3/IFApK70PROGJawKtaQizuQ/zh-cn_image_0000002566708057.png?HW-CC-KV=V1&HW-CC-Date=20260403T125758Z&HW-CC-Expire=86400&HW-CC-Sign=35D2F1B02C80936058E3CF5332235D833702FEFA3FBB0D5619077C146F516F2F)
* FlexAlign.SpaceBetween：子元素各行与交叉轴两端对齐，各行间垂直间距平均分布。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. Flex({ justifyContent: FlexAlign.SpaceBetween, wrap: FlexWrap.Wrap, alignContent: FlexAlign.SpaceBetween }) {
  2. Text('1').width('30%').height(20).backgroundColor('#F5DEB3')
  3. Text('2').width('60%').height(20).backgroundColor('#D2B48C')
  4. Text('3').width('40%').height(20).backgroundColor('#D2B48C')
  5. Text('4').width('30%').height(20).backgroundColor('#F5DEB3')
  6. Text('5').width('20%').height(20).backgroundColor('#D2B48C')
  7. }
  8. .width('90%')
  9. .height(100)
  10. .backgroundColor('#AFEEEE')
  ```

  [FlexAlignCenterFlexAlignSpaceBetween.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/MultipleLayoutProject/entry/src/main/ets/pages/flexlayout/FlexAlignCenterFlexAlignSpaceBetween.ets#L20-L31)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/62/v3/vghDlLKNR2mAf5PnWoxnTw/zh-cn_image_0000002535788260.png?HW-CC-KV=V1&HW-CC-Date=20260403T125758Z&HW-CC-Expire=86400&HW-CC-Sign=0748A2596B05F03770E26FF4A396F42F5436CEBD58AB30DA98A981FDAE7A04B3)
* FlexAlign.SpaceAround：子元素各行间距相等，是元素首尾行与交叉轴两端距离的两倍。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. Flex({ justifyContent: FlexAlign.SpaceBetween, wrap: FlexWrap.Wrap, alignContent: FlexAlign.SpaceAround }) {
  2. Text('1').width('30%').height(20).backgroundColor('#F5DEB3')
  3. Text('2').width('60%').height(20).backgroundColor('#D2B48C')
  4. Text('3').width('40%').height(20).backgroundColor('#D2B48C')
  5. Text('4').width('30%').height(20).backgroundColor('#F5DEB3')
  6. Text('5').width('20%').height(20).backgroundColor('#D2B48C')
  7. }
  8. .width('90%')
  9. .height(100)
  10. .backgroundColor('#AFEEEE')
  ```

  [FlexAlignCenterFlexAlignSpaceAround.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/MultipleLayoutProject/entry/src/main/ets/pages/flexlayout/FlexAlignCenterFlexAlignSpaceAround.ets#L20-L31)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e7/v3/sEP9-W1CTueKyQ3PwVBV0Q/zh-cn_image_0000002535948208.png?HW-CC-KV=V1&HW-CC-Date=20260403T125758Z&HW-CC-Expire=86400&HW-CC-Sign=04A68A9FCFB93F0C3F0A839577307C04B1A41FAF3309F91E8BF76791674D78D1)
* FlexAlign.SpaceEvenly: 子元素各行间距，子元素首尾行与交叉轴两端距离都相等。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. Flex({ justifyContent: FlexAlign.SpaceBetween, wrap: FlexWrap.Wrap, alignContent: FlexAlign.SpaceEvenly }) {
  2. Text('1').width('30%').height(20).backgroundColor('#F5DEB3')
  3. Text('2').width('60%').height(20).backgroundColor('#D2B48C')
  4. Text('3').width('40%').height(20).backgroundColor('#D2B48C')
  5. Text('4').width('30%').height(20).backgroundColor('#F5DEB3')
  6. Text('5').width('20%').height(20).backgroundColor('#D2B48C')
  7. }
  8. .width('90%')
  9. .height(100)
  10. .backgroundColor('#AFEEEE')
  ```

  [FlexAlignCenterFlexAlignSpaceEvenly.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/MultipleLayoutProject/entry/src/main/ets/pages/flexlayout/FlexAlignCenterFlexAlignSpaceEvenly.ets#L20-L31)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/08/v3/rayOr3FsTXiToWbmoHSeyA/zh-cn_image_0000002566868039.png?HW-CC-KV=V1&HW-CC-Date=20260403T125758Z&HW-CC-Expire=86400&HW-CC-Sign=BC43C814A322FD49532C6FF017629832C4362B2B2954F09884D069F3A9A3B75E)

## 自适应拉伸

在弹性布局父组件尺寸过小时，通过子元素的以下属性设置其在父容器的占比，达到自适应布局。

* [flexBasis](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-flex-layout#flexbasis)：设置子元素在父容器主轴方向上的基准尺寸。如果设置了该属性，则子项占用的空间为该属性所设置的值；如果没设置该属性，那子项的空间为width/height的值。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. Flex() {
  2. Text('flexBasis("auto")')
  3. .flexBasis('auto')// 未设置width以及flexBasis值为auto，内容自身宽度
  4. .height(100)
  5. .backgroundColor('#F5DEB3')
  6. Text('flexBasis("auto")'+' width("40%")')
  7. .width('40%')
  8. .flexBasis('auto')// 设置width以及flexBasis值auto，使用width的值
  9. .height(100)
  10. .backgroundColor('#D2B48C')

  12. Text('flexBasis(100)') // 未设置width以及flexBasis值为100，宽度为100vp
  13. .flexBasis(100)
  14. .height(100)
  15. .backgroundColor('#F5DEB3')

  17. Text('flexBasis(100)')
  18. .flexBasis(100)
  19. .width(200)// flexBasis值为100，覆盖width的设置值，宽度为100vp
  20. .height(100)
  21. .backgroundColor('#D2B48C')
  22. }.width('90%').height(120).padding(10).backgroundColor('#AFEEEE')
  ```

  [FlexBasis.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/MultipleLayoutProject/entry/src/main/ets/pages/flexlayout/FlexBasis.ets#L20-L43)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/51/v3/ydB_MwR3T-a9XzV5wJt5yQ/zh-cn_image_0000002566708059.png?HW-CC-KV=V1&HW-CC-Date=20260403T125758Z&HW-CC-Expire=86400&HW-CC-Sign=51E519C30CF6D1B9FE43AE006B57B5578521C3AA83A00D664E137EAC871395CB)
* [flexGrow](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-flex-layout#flexgrow)：设置父容器的剩余空间分配给此属性所在组件的比例，用于分配父组件的剩余空间。下述示例运行需要保证设备为横屏状态，否则运行效果可能存在差异。

收起

自动换行

深色代码主题

复制

```
1. Flex() {
2. Text('flexGrow(1)')
3. .flexGrow(1)
4. .width(100)
5. .height(100)
6. .backgroundColor('#F5DEB3')
7. Text('flexGrow(4)')
8. .flexGrow(4)
9. .width(100)
10. .height(100)
11. .backgroundColor('#D2B48C')

13. Text('no flexGrow')
14. .width(100)
15. .height(100)
16. .backgroundColor('#F5DEB3')
17. }.width(360).height(120).padding(10).backgroundColor('#AFEEEE')
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/95/v3/63JwMbKfRrGO7bPKF8hPnA/zh-cn_image_0000002535788262.png?HW-CC-KV=V1&HW-CC-Date=20260403T125758Z&HW-CC-Expire=86400&HW-CC-Sign=E2677438DB742EF79C0C72249BCDAEF3038AEC24671CE704DB16689199346467)

父容器宽度360vp，三个子元素原始宽度均为100vp，左右padding为20vp，总和320vp，剩余空间40vp根据flexGrow值的占比分配给子元素，未设置flexGrow的子元素不参与分配。

第一个元素以及第二个元素以1:4分配剩下的40vp。第一个元素为100vp+40vp \* 1/5=108vp，第二个元素为100vp+40vp \* 4/5=132vp。

* [flexShrink](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-flex-layout#flexshrink): 当父容器空间不足时，子元素的压缩比例。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. Flex({ direction: FlexDirection.Row }) {
  2. Text('flexShrink(3)')
  3. .flexShrink(3)
  4. .width(200)
  5. .height(100)
  6. .backgroundColor('#F5DEB3')

  8. Text('no flexShrink')
  9. .width(200)
  10. .height(100)
  11. .backgroundColor('#D2B48C')

  13. Text('flexShrink(2)')
  14. .flexShrink(2)
  15. .width(200)
  16. .height(100)
  17. .backgroundColor('#F5DEB3')
  18. }.width(400).height(120).padding(10).backgroundColor('#AFEEEE')
  ```

  [FlexShrink.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/MultipleLayoutProject/entry/src/main/ets/pages/flexlayout/FlexShrink.ets#L20-L39)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/11/v3/_kCoAj6PSeOHt4hrhf3LGQ/zh-cn_image_0000002535948210.png?HW-CC-KV=V1&HW-CC-Date=20260403T125758Z&HW-CC-Expire=86400&HW-CC-Sign=D3282AE033B4432C5F53008CA21B038BA684858DE98E40D2C3697BA0EE9C934B)

  父容器宽度400vp，三个子元素原始宽度为200vp，左右padding为20vp，父容器给子元素的布局空间为380vp，超出父容器空间220vp。

  将第一个元素和第三个元素以3:2的压缩比例进行压缩，直至不再超出父容器提供的布局空间。第一个元素为200vp - (220vp / 5) \* 3=68vp，第三个元素为200vp - (220vp / 5) \* 2=112vp。

## 场景示例

使用弹性布局，可以实现子元素沿水平方向排列，两端对齐，子元素间距平分，垂直方向上子元素居中的效果。

收起

自动换行

深色代码主题

复制

```
1. @Entry
2. @Component
3. struct FlexExample {
4. build() {
5. Column() {
6. Column({ space: 5 }) {
7. Flex({
8. direction: FlexDirection.Row,
9. wrap: FlexWrap.NoWrap,
10. justifyContent: FlexAlign.SpaceBetween,
11. alignItems: ItemAlign.Center
12. }) {
13. Text('1').width('30%').height(50).backgroundColor('#F5DEB3')
14. Text('2').width('30%').height(50).backgroundColor('#D2B48C')
15. Text('3').width('30%').height(50).backgroundColor('#F5DEB3')
16. }
17. .height(70)
18. .width('90%')
19. .backgroundColor('#AFEEEE')
20. }.width('100%').margin({ top: 5 })
21. }.width('100%')
22. }
23. }
```

[FlexExample.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/MultipleLayoutProject/entry/src/main/ets/pages/flexlayout/FlexExample.ets#L15-L39)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2d/v3/kZX1Ef6ERmC68Z_AOBSdHg/zh-cn_image_0000002566868041.png?HW-CC-KV=V1&HW-CC-Date=20260403T125758Z&HW-CC-Expire=86400&HW-CC-Sign=CB83CBD170411ECE77B0EB64F0DC779167B42BA02A380793EDCD943F1F3BD332)