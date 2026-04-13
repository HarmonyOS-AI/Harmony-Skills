## 概述

线性布局（LinearLayout）是开发中最常用的布局，通过线性容器[Row](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-row)和[Column](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-column)构建。线性布局是其他布局的基础，其子元素在线性方向上（水平方向和垂直方向）依次排列。线性布局的排列方向由所选容器组件决定，Row容器内子元素按照水平方向排列，Column容器内子元素按照垂直方向排列。根据不同的排列方向，开发者可选择使用Row或Column容器创建线性布局。

说明

在复杂界面中使用多组件嵌套时，若布局组件的嵌套层数过深或嵌套的组件数量过多，将会产生额外开销。建议通过移除冗余节点、利用布局边界减少布局计算、合理采用渲染控制语法及布局组件方法来优化性能。最佳实践请参考[布局优化指导](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-improve-layout-performance)。

**图1** Column容器内子元素排列示意图

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/24/v3/qVk3GigcS1SPxajhQcyOxg/zh-cn_image_0000002535788226.png?HW-CC-KV=V1&HW-CC-Date=20260403T125750Z&HW-CC-Expire=86400&HW-CC-Sign=D45B735AA647285EE8B5CDA74089B6BE8862FA969E65F5C468BFA90F04ECCA50)

**图2** Row容器内子元素排列示意图

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/0a/v3/gWuJG5QjT4yQu4om5TKrnQ/zh-cn_image_0000002535948172.png?HW-CC-KV=V1&HW-CC-Date=20260403T125750Z&HW-CC-Expire=86400&HW-CC-Sign=17D665AF1B855F8E487E49B88A709D5659E86B6438152B5430692FC81C59A5AC)

## 基本概念

* 布局容器：具有布局能力的容器组件，可以承载其他元素作为其子元素，布局容器会对其子元素进行尺寸计算和布局排列。
* 布局子元素：布局容器内部的元素。
* 主轴：线性布局容器在布局方向上的轴线，子元素默认沿主轴排列。Row容器主轴为水平方向，Column容器主轴为垂直方向（图示可参考弹性布局[基本概念](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-layout-development-flex-layout#基本概念)中的主轴）。
* 交叉轴：垂直于主轴方向的轴线。Row容器交叉轴为垂直方向，Column容器交叉轴为水平方向（图示可参考弹性布局[基本概念](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-layout-development-flex-layout#基本概念)中的交叉轴）。
* 间距：布局子元素的间距。

## 布局子元素在排列方向上的间距

在布局容器内，可以通过space属性设置排列方向上子元素的间距，使各子元素在排列方向上有等间距效果。

### Column容器内排列方向上的间距

**图3** Column容器内排列方向的间距图

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/43/v3/lkhVJ4kvTLqk9qrPxxXv6Q/zh-cn_image_0000002566868005.png?HW-CC-KV=V1&HW-CC-Date=20260403T125750Z&HW-CC-Expire=86400&HW-CC-Sign=DAA6D108A988F103A3318D96593F8A3658CBDAC71C829CD2B16E7D56457FA12D)

收起

自动换行

深色代码主题

复制

```
1. Column({ space: 20 }) {
2. Text('space: 20').fontSize(15).fontColor(Color.Gray).width('90%')
3. Row().width('90%').height(50).backgroundColor(0xF5DEB3)
4. Row().width('90%').height(50).backgroundColor(0xD2B48C)
5. Row().width('90%').height(50).backgroundColor(0xF5DEB3)
6. }.width('100%')
```

[ColumnLayoutExample.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/MultipleLayoutProject/entry/src/main/ets/pages/linearlayout/ColumnLayoutExample.ets#L20-L27)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/af/v3/j0L8xvFoQpibVzpqbLKF3g/zh-cn_image_0000002566708023.png?HW-CC-KV=V1&HW-CC-Date=20260403T125750Z&HW-CC-Expire=86400&HW-CC-Sign=D5D279C28AA3523579371ED00EE62F205B10C75F025A2BD2A43B37DCBE48699B)

### Row容器内排列方向上的间距

**图4** Row容器内排列方向的间距图

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/65/v3/XUYZiXKbRku10GY78wsKGg/zh-cn_image_0000002535788228.png?HW-CC-KV=V1&HW-CC-Date=20260403T125750Z&HW-CC-Expire=86400&HW-CC-Sign=EE493896AA276E1358A200D656D79FA70F2BBF0FA1D06D23470695536BA0096E)

收起

自动换行

深色代码主题

复制

```
1. Row({ space: 35 }) {
2. Text('space: 35').fontSize(15).fontColor(Color.Gray)
3. Row().width('10%').height(150).backgroundColor(0xF5DEB3)
4. Row().width('10%').height(150).backgroundColor(0xD2B48C)
5. Row().width('10%').height(150).backgroundColor(0xF5DEB3)
6. }.width('90%')
```

[RowLayoutExample.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/MultipleLayoutProject/entry/src/main/ets/pages/linearlayout/RowLayoutExample.ets#L20-L27)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c6/v3/qzIeP7gAT62bwDQf6p3y5A/zh-cn_image_0000002535948174.png?HW-CC-KV=V1&HW-CC-Date=20260403T125750Z&HW-CC-Expire=86400&HW-CC-Sign=240B54DDD4FA707CE4307FFA0208FE433FA436AABA8CBA98126106BDE6E44BA4)

## 布局子元素在主轴上的排列方式

在布局容器内，可以通过[justifyContent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-column#justifycontent8)属性设置子元素在容器主轴上的排列方式。可以从主轴起始位置开始排布，也可以从主轴结束位置开始排布，或者均匀分割主轴的空间。

### Column容器内子元素在垂直方向上的排列

**图5** Column容器内子元素在垂直方向上的排列图

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/29/v3/sGdYu_wBT0OgeAPY7IYE-A/zh-cn_image_0000002566868007.png?HW-CC-KV=V1&HW-CC-Date=20260403T125750Z&HW-CC-Expire=86400&HW-CC-Sign=A023A3B1FF0E25B8A9159CB41E9FB898F6E1A4E46D92FCA2231C82098078FA17)

* justifyContent(FlexAlign.Start，默认值)：元素在垂直方向首端对齐，第一个元素与行首对齐，同时后续的元素与前一个对齐。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. Column({}) {
  2. Column() {
  3. }.width('80%').height(50).backgroundColor(0xF5DEB3)

  5. Column() {
  6. }.width('80%').height(50).backgroundColor(0xD2B48C)

  8. Column() {
  9. }.width('80%').height(50).backgroundColor(0xF5DEB3)
  10. }.width('100%').height(300).backgroundColor('rgb(242,242,242)').justifyContent(FlexAlign.Start)
  ```

  [ColumnLayoutJustifyContentStart.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/MultipleLayoutProject/entry/src/main/ets/pages/linearlayout/ColumnLayoutJustifyContentStart.ets#L20-L38)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/58/v3/fmYzsqxUStmaWUQKteeF1g/zh-cn_image_0000002566708025.png?HW-CC-KV=V1&HW-CC-Date=20260403T125750Z&HW-CC-Expire=86400&HW-CC-Sign=3E2F71285CBCDF9D828727C94D3914811C89A8758F00567897FA758AA3D3F314)
* justifyContent(FlexAlign.Center)：元素在垂直方向中心对齐，第一个元素与行首的距离与最后一个元素与行尾距离相同。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. Column({}) {
  2. Column() {
  3. }.width('80%').height(50).backgroundColor(0xF5DEB3)

  5. Column() {
  6. }.width('80%').height(50).backgroundColor(0xD2B48C)

  8. Column() {
  9. }.width('80%').height(50).backgroundColor(0xF5DEB3)
  10. }.width('100%').height(300).backgroundColor('rgb(242,242,242)').justifyContent(FlexAlign.Center)
  ```

  [ColumnLayoutJustifyContentCenter.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/MultipleLayoutProject/entry/src/main/ets/pages/linearlayout/ColumnLayoutJustifyContentCenter.ets#L20-L31)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/54/v3/a-z7CeMoSiuxpI0Saoe86g/zh-cn_image_0000002535788230.png?HW-CC-KV=V1&HW-CC-Date=20260403T125750Z&HW-CC-Expire=86400&HW-CC-Sign=633B96CC5C7DAFB14A40053AFA26E6A69A5190DF136392F3E6A6E13AC7CC372A)
* justifyContent(FlexAlign.End)：元素在垂直方向尾部对齐，最后一个元素与行尾对齐，其他元素与后一个对齐。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. Column({}) {
  2. Column() {
  3. }.width('80%').height(50).backgroundColor(0xF5DEB3)

  5. Column() {
  6. }.width('80%').height(50).backgroundColor(0xD2B48C)

  8. Column() {
  9. }.width('80%').height(50).backgroundColor(0xF5DEB3)
  10. }.width('100%').height(300).backgroundColor('rgb(242,242,242)').justifyContent(FlexAlign.End)
  ```

  [ColumnLayoutJustifyContentEnd.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/MultipleLayoutProject/entry/src/main/ets/pages/linearlayout/ColumnLayoutJustifyContentEnd.ets#L20-L31)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/97/v3/7606B_RERgO-YIxdqu0Q9g/zh-cn_image_0000002535948176.png?HW-CC-KV=V1&HW-CC-Date=20260403T125750Z&HW-CC-Expire=86400&HW-CC-Sign=B435B9FC6F0579D148B45913591EA4163E49C2808B0918D4E138B9A74C739F74)
* justifyContent(FlexAlign.SpaceBetween)：垂直方向均匀分配元素，相邻元素之间距离相同。第一个元素与行首对齐，最后一个元素与行尾对齐。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. Column({}) {
  2. Column() {
  3. }.width('80%').height(50).backgroundColor(0xF5DEB3)

  5. Column() {
  6. }.width('80%').height(50).backgroundColor(0xD2B48C)

  8. Column() {
  9. }.width('80%').height(50).backgroundColor(0xF5DEB3)
  10. }.width('100%').height(300).backgroundColor('rgb(242,242,242)').justifyContent(FlexAlign.SpaceBetween)
  ```

  [ColumnLayoutJustifyContentSpaceBetween.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/MultipleLayoutProject/entry/src/main/ets/pages/linearlayout/ColumnLayoutJustifyContentSpaceBetween.ets#L20-L31)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ee/v3/UJh0UpqcQ16QnHPIiyt41w/zh-cn_image_0000002566868009.png?HW-CC-KV=V1&HW-CC-Date=20260403T125750Z&HW-CC-Expire=86400&HW-CC-Sign=E1F0655758836AA09A8DA0765A275E90FB29CDC6E57EA391A86C8CCAD14ADD0E)
* justifyContent(FlexAlign.SpaceAround)：垂直方向均匀分配元素，相邻元素之间距离相同。第一个元素到行首的距离和最后一个元素到行尾的距离是相邻元素之间距离的一半。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. Column({}) {
  2. Column() {
  3. }.width('80%').height(50).backgroundColor(0xF5DEB3)

  5. Column() {
  6. }.width('80%').height(50).backgroundColor(0xD2B48C)

  8. Column() {
  9. }.width('80%').height(50).backgroundColor(0xF5DEB3)
  10. }.width('100%').height(300).backgroundColor('rgb(242,242,242)').justifyContent(FlexAlign.SpaceAround)
  ```

  [ColumnLayoutJustifyContentSpaceAround.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/MultipleLayoutProject/entry/src/main/ets/pages/linearlayout/ColumnLayoutJustifyContentSpaceAround.ets#L20-L31)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ec/v3/M-kMuIM3SUuPEidwd0TRUg/zh-cn_image_0000002566708027.png?HW-CC-KV=V1&HW-CC-Date=20260403T125750Z&HW-CC-Expire=86400&HW-CC-Sign=0AE97E080FE132F5C81D9A51848087C901F6AF827207F298D41C72433755952C)
* justifyContent(FlexAlign.SpaceEvenly)：垂直方向均匀分配元素，相邻元素之间的距离、第一个元素与行首的间距、最后一个元素到行尾的间距都完全一样。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. Column({}) {
  2. Column() {
  3. }.width('80%').height(50).backgroundColor(0xF5DEB3)

  5. Column() {
  6. }.width('80%').height(50).backgroundColor(0xD2B48C)

  8. Column() {
  9. }.width('80%').height(50).backgroundColor(0xF5DEB3)
  10. }.width('100%').height(300).backgroundColor('rgb(242,242,242)').justifyContent(FlexAlign.SpaceEvenly)
  ```

  [ColumnLayoutJustifyContentSpaceEvenly.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/MultipleLayoutProject/entry/src/main/ets/pages/linearlayout/ColumnLayoutJustifyContentSpaceEvenly.ets#L20-L31)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/15/v3/Tqlc6rkTS_aIuyjYGCLaCg/zh-cn_image_0000002535788232.png?HW-CC-KV=V1&HW-CC-Date=20260403T125750Z&HW-CC-Expire=86400&HW-CC-Sign=7C118EEC2A8D70AD75C4E32062518390C5E6B5E47E6A7496C16356813011112D)

### Row容器内子元素在水平方向上的排列

**图6** Row容器内子元素在水平方向上的排列图

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/16/v3/H7c4Vn6FRe6GfV_TmF7v4A/zh-cn_image_0000002535948178.png?HW-CC-KV=V1&HW-CC-Date=20260403T125750Z&HW-CC-Expire=86400&HW-CC-Sign=73EB058C2CD14C2ADE3383C3253E7C30FB8A58AAF2012DCEC609410F7B060F4E)

* justifyContent(FlexAlign.Start，默认值)：元素在水平方向首端对齐，第一个元素与行首对齐，同时后续的元素与前一个对齐。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. Row({}) {
  2. Column() {
  3. }.width('20%').height(30).backgroundColor(0xF5DEB3)

  5. Column() {
  6. }.width('20%').height(30).backgroundColor(0xD2B48C)

  8. Column() {
  9. }.width('20%').height(30).backgroundColor(0xF5DEB3)
  10. }.width('100%').height(200).backgroundColor('rgb(242,242,242)').justifyContent(FlexAlign.Start)
  ```

  [RowLayoutJustifyContentStart.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/MultipleLayoutProject/entry/src/main/ets/pages/linearlayout/RowLayoutJustifyContentStart.ets#L20-L38)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/49/v3/b9QOjKoaQoyGKp4kXVygdQ/zh-cn_image_0000002566868011.png?HW-CC-KV=V1&HW-CC-Date=20260403T125750Z&HW-CC-Expire=86400&HW-CC-Sign=481322342159C4EB33CA2DB42CD00567BA2367CA0EDB652E15274ADD7E12D20B)
* justifyContent(FlexAlign.Center)：元素在水平方向中心对齐，第一个元素与行首的距离与最后一个元素与行尾距离相同。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. Row({}) {
  2. Column() {
  3. }.width('20%').height(30).backgroundColor(0xF5DEB3)

  5. Column() {
  6. }.width('20%').height(30).backgroundColor(0xD2B48C)

  8. Column() {
  9. }.width('20%').height(30).backgroundColor(0xF5DEB3)
  10. }.width('100%').height(200).backgroundColor('rgb(242,242,242)').justifyContent(FlexAlign.Center)
  ```

  [RowLayoutJustifyContentCenter.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/MultipleLayoutProject/entry/src/main/ets/pages/linearlayout/RowLayoutJustifyContentCenter.ets#L20-L31)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a1/v3/O8di_DnXRIOa3W7p8icg8A/zh-cn_image_0000002566708029.png?HW-CC-KV=V1&HW-CC-Date=20260403T125750Z&HW-CC-Expire=86400&HW-CC-Sign=E7B8B5713A8A8C46A638A4FD4827E56F4DB22E55010B11B2212CDED8EC53DB0C)
* justifyContent(FlexAlign.End)：元素在水平方向尾部对齐，最后一个元素与行尾对齐，其他元素与后一个对齐。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. Row({}) {
  2. Column() {
  3. }.width('20%').height(30).backgroundColor(0xF5DEB3)

  5. Column() {
  6. }.width('20%').height(30).backgroundColor(0xD2B48C)

  8. Column() {
  9. }.width('20%').height(30).backgroundColor(0xF5DEB3)
  10. }.width('100%').height(200).backgroundColor('rgb(242,242,242)').justifyContent(FlexAlign.End)
  ```

  [RowLayoutJustifyContentEnd.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/MultipleLayoutProject/entry/src/main/ets/pages/linearlayout/RowLayoutJustifyContentEnd.ets#L20-L31)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4c/v3/ycZQOYZFSTKkG95-qui5-g/zh-cn_image_0000002535788234.png?HW-CC-KV=V1&HW-CC-Date=20260403T125750Z&HW-CC-Expire=86400&HW-CC-Sign=E61D94D14DCD684243F9B48F1B2D00BE6FC56A38E74B5099B2E7098D2C338F32)
* justifyContent(FlexAlign.SpaceBetween)：水平方向均匀分配元素，相邻元素之间距离相同。第一个元素与行首对齐，最后一个元素与行尾对齐。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. Row({}) {
  2. Column() {
  3. }.width('20%').height(30).backgroundColor(0xF5DEB3)

  5. Column() {
  6. }.width('20%').height(30).backgroundColor(0xD2B48C)

  8. Column() {
  9. }.width('20%').height(30).backgroundColor(0xF5DEB3)
  10. }.width('100%').height(200).backgroundColor('rgb(242,242,242)').justifyContent(FlexAlign.SpaceBetween)
  ```

  [RowLayoutJustifyContentSpaceBetween.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/MultipleLayoutProject/entry/src/main/ets/pages/linearlayout/RowLayoutJustifyContentSpaceBetween.ets#L20-L31)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b9/v3/Q0gmn6M0QUqqQFh_iZx45A/zh-cn_image_0000002535948180.png?HW-CC-KV=V1&HW-CC-Date=20260403T125750Z&HW-CC-Expire=86400&HW-CC-Sign=DB75581F0FDAD5A0763B1630BF1C7B5D9B273CE4E72ED2F15CF46C0416644443)
* justifyContent(FlexAlign.SpaceAround)：水平方向均匀分配元素，相邻元素之间距离相同。第一个元素到行首的距离和最后一个元素到行尾的距离是相邻元素之间距离的一半。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. Row({}) {
  2. Column() {
  3. }.width('20%').height(30).backgroundColor(0xF5DEB3)

  5. Column() {
  6. }.width('20%').height(30).backgroundColor(0xD2B48C)

  8. Column() {
  9. }.width('20%').height(30).backgroundColor(0xF5DEB3)
  10. }.width('100%').height(200).backgroundColor('rgb(242,242,242)').justifyContent(FlexAlign.SpaceAround)
  ```

  [RowLayoutJustifyContentSpaceAround.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/MultipleLayoutProject/entry/src/main/ets/pages/linearlayout/RowLayoutJustifyContentSpaceAround.ets#L20-L31)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/0b/v3/XJPDdfXPRlOLLvj7RcsbtQ/zh-cn_image_0000002566868013.png?HW-CC-KV=V1&HW-CC-Date=20260403T125750Z&HW-CC-Expire=86400&HW-CC-Sign=7BA2018F0A0D029947D034FDD6ACF8643F8D4E941508DE3506A4F68D879FB613)
* justifyContent(FlexAlign.SpaceEvenly)：水平方向均匀分配元素，相邻元素之间的距离、第一个元素与行首的间距、最后一个元素到行尾的间距都完全一样。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. Row({}) {
  2. Column() {
  3. }.width('20%').height(30).backgroundColor(0xF5DEB3)

  5. Column() {
  6. }.width('20%').height(30).backgroundColor(0xD2B48C)

  8. Column() {
  9. }.width('20%').height(30).backgroundColor(0xF5DEB3)
  10. }.width('100%').height(200).backgroundColor('rgb(242,242,242)').justifyContent(FlexAlign.SpaceEvenly)
  ```

  [RowLayoutJustifyContentSpaceEvenly.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/MultipleLayoutProject/entry/src/main/ets/pages/linearlayout/RowLayoutJustifyContentSpaceEvenly.ets#L20-L31)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/76/v3/p_gE8u2QS7O4AyFCa0DjgA/zh-cn_image_0000002566708031.png?HW-CC-KV=V1&HW-CC-Date=20260403T125750Z&HW-CC-Expire=86400&HW-CC-Sign=12533C43C6A7180B39B2B0B7585A5D1F54BB2B0E80B88E6256E71FBCDECBE8ED)

## 布局子元素在交叉轴上的对齐方式

在布局容器内，可以通过[alignItems](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-column#alignitems)属性设置子元素在交叉轴（排列方向的垂直方向）上的对齐方式，且在各类尺寸屏幕中表现一致。其中，交叉轴为垂直方向时，取值为[VerticalAlign](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-appendix-enums#verticalalign)类型，水平方向取值为[HorizontalAlign](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-appendix-enums#horizontalalign)类型。

[alignSelf](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-flex-layout#alignself)属性用于控制单个子元素在容器交叉轴上的对齐方式，其优先级高于alignItems属性，如果设置了alignSelf属性，则在单个子元素上会覆盖alignItems属性。

### Column容器内子元素在水平方向上的排列

**图7** Column容器内子元素在水平方向上的排列图

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/35/v3/x7ZHbUH7Rcam9XJvFw88Zg/zh-cn_image_0000002535788236.png?HW-CC-KV=V1&HW-CC-Date=20260403T125750Z&HW-CC-Expire=86400&HW-CC-Sign=DB52CB0E20BCD99392172DAAB4EFBA363CF6C3D07FC686BB0DB9D23F6C12D1AC)

* HorizontalAlign.Start：子元素在水平方向左对齐。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. Column({}) {
  2. Column() {
  3. }.width('80%').height(50).backgroundColor(0xF5DEB3)

  5. Column() {
  6. }.width('80%').height(50).backgroundColor(0xD2B48C)

  8. Column() {
  9. }.width('80%').height(50).backgroundColor(0xF5DEB3)
  10. }.width('100%').alignItems(HorizontalAlign.Start).backgroundColor('rgb(242,242,242)')
  ```

  [RowLayoutHorizontalAlignStart.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/MultipleLayoutProject/entry/src/main/ets/pages/linearlayout/RowLayoutHorizontalAlignStart.ets#L20-L49)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b5/v3/SBhcHewgTK6IPEmYoOzn8w/zh-cn_image_0000002535948182.png?HW-CC-KV=V1&HW-CC-Date=20260403T125750Z&HW-CC-Expire=86400&HW-CC-Sign=087F57D49A73D619216DFAB248FA6748BE086AD7575EAD0246589D398A030CE6)
* HorizontalAlign.Center（默认值）：子元素在水平方向居中对齐。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. Column({}) {
  2. Column() {
  3. }.width('80%').height(50).backgroundColor(0xF5DEB3)

  5. Column() {
  6. }.width('80%').height(50).backgroundColor(0xD2B48C)

  8. Column() {
  9. }.width('80%').height(50).backgroundColor(0xF5DEB3)
  10. }.width('100%').alignItems(HorizontalAlign.Center).backgroundColor('rgb(242,242,242)')
  ```

  [RowLayoutHorizontalAlignCenter.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/MultipleLayoutProject/entry/src/main/ets/pages/linearlayout/RowLayoutHorizontalAlignCenter.ets#L20-L31)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/0c/v3/x91NIM62R4OSwZKADW5MCg/zh-cn_image_0000002566868015.png?HW-CC-KV=V1&HW-CC-Date=20260403T125750Z&HW-CC-Expire=86400&HW-CC-Sign=B71EAEAE8CE3D895CC89DC767EC054B55057B6DD45D558FC6AA01FCC6BDDCE02)
* HorizontalAlign.End：子元素在水平方向右对齐。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. Column({}) {
  2. Column() {
  3. }.width('80%').height(50).backgroundColor(0xF5DEB3)

  5. Column() {
  6. }.width('80%').height(50).backgroundColor(0xD2B48C)

  8. Column() {
  9. }.width('80%').height(50).backgroundColor(0xF5DEB3)
  10. }.width('100%').alignItems(HorizontalAlign.End).backgroundColor('rgb(242,242,242)')
  ```

  [RowLayoutHorizontalAlignEnd.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/MultipleLayoutProject/entry/src/main/ets/pages/linearlayout/RowLayoutHorizontalAlignEnd.ets#L20-L31)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8c/v3/zjKtZbyGSgq-aa_wchEjvA/zh-cn_image_0000002566708033.png?HW-CC-KV=V1&HW-CC-Date=20260403T125750Z&HW-CC-Expire=86400&HW-CC-Sign=BC12969E3A0AD935F2CF8BA52744479F45C527F1F63DB215B72E22595BB620F4)

### Row容器内子元素在垂直方向上的排列

**图8** Row容器内子元素在垂直方向上的排列图

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cf/v3/2GPkDx88TmyPTAKWIAHziA/zh-cn_image_0000002535788238.png?HW-CC-KV=V1&HW-CC-Date=20260403T125750Z&HW-CC-Expire=86400&HW-CC-Sign=2D95752B2B161EBC6AFD78C7DA667F32CC4071E9446FC9AFD3EAF7D39C06C548)

* VerticalAlign.Top：子元素在垂直方向顶部对齐。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. Row({}) {
  2. Column() {
  3. }.width('20%').height(30).backgroundColor(0xF5DEB3)

  5. Column() {
  6. }.width('20%').height(30).backgroundColor(0xD2B48C)

  8. Column() {
  9. }.width('20%').height(30).backgroundColor(0xF5DEB3)
  10. }.width('100%').height(200).alignItems(VerticalAlign.Top).backgroundColor('rgb(242,242,242)')
  ```

  [RowLayoutVerticalAlignTop.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/MultipleLayoutProject/entry/src/main/ets/pages/linearlayout/RowLayoutVerticalAlignTop.ets#L20-L31)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b6/v3/wIOFwA1zTNqiazHVoL9-gw/zh-cn_image_0000002535948184.png?HW-CC-KV=V1&HW-CC-Date=20260403T125750Z&HW-CC-Expire=86400&HW-CC-Sign=4B70785AE2690AE081A78C9581E7BE6209E8523F43FA12D4307D7B0FE7A7F002)
* VerticalAlign.Center（默认值）：子元素在垂直方向居中对齐。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. Row({}) {
  2. Column() {
  3. }.width('20%').height(30).backgroundColor(0xF5DEB3)

  5. Column() {
  6. }.width('20%').height(30).backgroundColor(0xD2B48C)

  8. Column() {
  9. }.width('20%').height(30).backgroundColor(0xF5DEB3)
  10. }.width('100%').height(200).alignItems(VerticalAlign.Center).backgroundColor('rgb(242,242,242)')
  ```

  [RowLayoutVerticalAlignCenter.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/MultipleLayoutProject/entry/src/main/ets/pages/linearlayout/RowLayoutVerticalAlignCenter.ets#L20-L31)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3d/v3/iJrWwHeiSFOuz_kYWYKPbQ/zh-cn_image_0000002566868017.png?HW-CC-KV=V1&HW-CC-Date=20260403T125750Z&HW-CC-Expire=86400&HW-CC-Sign=6259FAEB67374F51D782EEE9C29D2D74FAAD75ACF7D2428E82304D151FC5D028)
* VerticalAlign.Bottom：子元素在垂直方向底部对齐。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. Row({}) {
  2. Column() {
  3. }.width('20%').height(30).backgroundColor(0xF5DEB3)

  5. Column() {
  6. }.width('20%').height(30).backgroundColor(0xD2B48C)

  8. Column() {
  9. }.width('20%').height(30).backgroundColor(0xF5DEB3)
  10. }.width('100%').height(200).alignItems(VerticalAlign.Bottom).backgroundColor('rgb(242,242,242)')
  ```

  [RowLayoutVerticalAlignBottom.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/MultipleLayoutProject/entry/src/main/ets/pages/linearlayout/RowLayoutVerticalAlignBottom.ets#L20-L31)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6c/v3/mP2yLfCtR-eMzxXH5KKekA/zh-cn_image_0000002566708035.png?HW-CC-KV=V1&HW-CC-Date=20260403T125750Z&HW-CC-Expire=86400&HW-CC-Sign=41FF98B034D87FD8BCA80246CD890FA47EE18613B50FD0359F25EDCFC7805829)

## 自适应拉伸

在线性布局下，常用空白填充组件[Blank](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-blank)，在容器主轴方向自动填充空白空间，达到自适应拉伸效果。Row和Column作为容器，只需要添加宽高为百分比，当屏幕宽高发生变化时，会产生自适应效果。

收起

自动换行

深色代码主题

复制

```
1. @Entry
2. @Component
3. struct BlankExample {
4. build() {
5. Column() {
6. Row() {
7. Text('Bluetooth').fontSize(18)
8. Blank()
9. Toggle({ type: ToggleType.Switch, isOn: true })
10. }.backgroundColor(0xFFFFFF).borderRadius(15).padding({ left: 12 }).width('100%')
11. }.backgroundColor(0xEFEFEF).padding(20).width('100%')
12. }
13. }
```

[BlankExample.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/MultipleLayoutProject/entry/src/main/ets/pages/linearlayout/BlankExample.ets#L15-L29)

**图9** 竖屏（自适应屏幕窄边）

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4f/v3/N4t_7_k-RdGa858Y_rkOtg/zh-cn_image_0000002535788240.png?HW-CC-KV=V1&HW-CC-Date=20260403T125750Z&HW-CC-Expire=86400&HW-CC-Sign=0A20F3ED1E7BAFC0E83DA8E2EA83026B7E3E93B393C7EB59EDCF788D11F9E4BB)

**图10** 横屏（自适应屏幕宽边）

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3f/v3/zuNvoYgUTFSGf695apcz5A/zh-cn_image_0000002535948186.png?HW-CC-KV=V1&HW-CC-Date=20260403T125750Z&HW-CC-Expire=86400&HW-CC-Sign=64B92D0654F8A2D3DB38AA491EB80824ADDB4C6C750F9312944E53391D5A7B96)

## 自适应缩放

自适应缩放是指子元素随容器尺寸的变化而按照预设的比例自动调整尺寸，适应各种不同大小的设备。在线性布局中，可以使用以下两种方法实现自适应缩放。

* 父容器尺寸确定时，使用[layoutWeight](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-size#layoutweight)属性设置子元素和兄弟元素在主轴上的权重，忽略元素本身尺寸设置，使它们在任意尺寸的设备下自适应占满剩余空间。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. @Entry
  2. @Component
  3. struct LayoutWeightExample {
  4. build() {
  5. Column() {
  6. Text('1:2:3').width('100%')
  7. Row() {
  8. Column() {
  9. Text('layoutWeight(1)')
  10. .textAlign(TextAlign.Center)
  11. }.layoutWeight(1).backgroundColor(0xF5DEB3).height('100%')

  13. Column() {
  14. Text('layoutWeight(2)')
  15. .textAlign(TextAlign.Center)
  16. }.layoutWeight(2).backgroundColor(0xD2B48C).height('100%')

  18. Column() {
  19. Text('layoutWeight(3)')
  20. .textAlign(TextAlign.Center)
  21. }.layoutWeight(3).backgroundColor(0xF5DEB3).height('100%')

  23. }.backgroundColor(0xffd306).height('30%')

  25. Text('2:5:3').width('100%')
  26. Row() {
  27. Column() {
  28. Text('layoutWeight(2)')
  29. .textAlign(TextAlign.Center)
  30. }.layoutWeight(2).backgroundColor(0xF5DEB3).height('100%')

  32. Column() {
  33. Text('layoutWeight(5)')
  34. .textAlign(TextAlign.Center)
  35. }.layoutWeight(5).backgroundColor(0xD2B48C).height('100%')

  37. Column() {
  38. Text('layoutWeight(3)')
  39. .textAlign(TextAlign.Center)
  40. }.layoutWeight(3).backgroundColor(0xF5DEB3).height('100%')
  41. }.backgroundColor(0xffd306).height('30%')
  42. }
  43. }
  44. }
  ```

  [LayoutWeightExample.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/MultipleLayoutProject/entry/src/main/ets/pages/linearlayout/LayoutWeightExample.ets#L15-L60)

  **图11** 横屏

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a0/v3/0xBxm-gUQrKa79CBm5erPw/zh-cn_image_0000002566868019.png?HW-CC-KV=V1&HW-CC-Date=20260403T125750Z&HW-CC-Expire=86400&HW-CC-Sign=B8CFB6244546F027F87A7C4BE419EEF1E3BD05D518FA8831BF5D8CDF837256A2)

  **图12** 竖屏

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e6/v3/OGuwx87pTTScYh1LjtKmTA/zh-cn_image_0000002566708037.png?HW-CC-KV=V1&HW-CC-Date=20260403T125750Z&HW-CC-Expire=86400&HW-CC-Sign=358032172AA9FF7B542B5ADD2A9BD245239C9DB3A985F6B12D03EB6AB2221778)
* 父容器尺寸确定时，使用百分比设置子元素和兄弟元素的宽度，使他们在任意尺寸的设备下保持固定的自适应占比。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. @Entry
  2. @Component
  3. struct WidthExample {
  4. build() {
  5. Column() {
  6. Row() {
  7. Column() {
  8. Text('left width 20%')
  9. .textAlign(TextAlign.Center)
  10. }.width('20%').backgroundColor(0xF5DEB3).height('100%')

  12. Column() {
  13. Text('center width 50%')
  14. .textAlign(TextAlign.Center)
  15. }.width('50%').backgroundColor(0xD2B48C).height('100%')

  17. Column() {
  18. Text('right width 30%')
  19. .textAlign(TextAlign.Center)
  20. }.width('30%').backgroundColor(0xF5DEB3).height('100%')
  21. }.backgroundColor(0xffd306).height('30%')
  22. }
  23. }
  24. }
  ```

  [WidthExample.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/MultipleLayoutProject/entry/src/main/ets/pages/linearlayout/WidthExample.ets#L15-L40)

  **图13** 横屏

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/af/v3/KTncWomnSuOW9WIa6fao7Q/zh-cn_image_0000002535788242.png?HW-CC-KV=V1&HW-CC-Date=20260403T125750Z&HW-CC-Expire=86400&HW-CC-Sign=0B2D4C4C09B49DE0574F452C89E46233019DED4EB29D0BAC2A5CF8886090ED4E)

  **图14** 竖屏

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8d/v3/BLpXJCeoRz2BdtNS-qoqlQ/zh-cn_image_0000002535948188.png?HW-CC-KV=V1&HW-CC-Date=20260403T125750Z&HW-CC-Expire=86400&HW-CC-Sign=0771DAF2054D7AC06558328A7E8688F579B3B18B6DBD69FCC1A3C13E70038D58)

## 自适应延伸

自适应延伸是指在不同尺寸设备下，当页面的内容超出屏幕大小而无法完全显示时，可以通过滚动条进行拖动展示。对于线性布局，这种方法适用于容器中内容无法一屏展示的场景。通常有以下两种实现方式。

* [在List中添加滚动条](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-layout-development-create-list#添加滚动条)：当List子项过多一屏放不下时，可以将每一项子元素放置在不同的组件中，通过滚动条进行拖动展示。可以通过[scrollBar](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-scroll#scrollbar)属性设置滚动条的常驻状态，[edgeEffect](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-scroll#edgeeffect)属性设置拖动到内容最末端的回弹效果。
* 使用[Scroll](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-scroll)组件：在线性布局中，开发者可以进行垂直方向或者水平方向的布局。当一屏无法完全显示时，可以在Column或Row组件的外层包裹一个可滚动的容器组件Scroll来实现可滑动的线性布局。

  垂直方向布局中使用Scroll组件：

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. @Entry
  2. @Component
  3. struct ScrollVerticalExample {
  4. scroller: Scroller = new Scroller();
  5. private arr: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  7. build() {
  8. Scroll(this.scroller) {
  9. Column() {
  10. ForEach(this.arr, (item?:number|undefined) => {
  11. if(item != undefined){
  12. Text(item.toString())
  13. .width('90%')
  14. .height(150)
  15. .backgroundColor(0xFFFFFF)
  16. .borderRadius(15)
  17. .fontSize(16)
  18. .textAlign(TextAlign.Center)
  19. .margin({ top: 10 })
  20. }
  21. }, (item:number) => item.toString())
  22. }.width('100%')
  23. }
  24. .backgroundColor(0xDCDCDC)
  25. .scrollable(ScrollDirection.Vertical) // 滚动方向为垂直方向
  26. .scrollBar(BarState.On) // 滚动条常驻显示
  27. .scrollBarColor(Color.Gray) // 滚动条颜色
  28. .scrollBarWidth(10) // 滚动条宽度
  29. .edgeEffect(EdgeEffect.Spring) // 滚动到边沿后回弹
  30. }
  31. }
  ```

  [ScrollVerticalExample.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/MultipleLayoutProject/entry/src/main/ets/pages/linearlayout/ScrollVerticalExample.ets#L15-L47)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8e/v3/rr5w9Fa1R0urt12vAEzzHw/zh-cn_image_0000002566868021.gif?HW-CC-KV=V1&HW-CC-Date=20260403T125750Z&HW-CC-Expire=86400&HW-CC-Sign=AB5E287E2A5E8306D2EDAB933ECF0940B07B5037C0FADC29D9CA0D8436E865B4)

  水平方向布局中使用Scroll组件：

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. @Entry
  2. @Component
  3. struct ScrollHorizontalExample {
  4. scroller: Scroller = new Scroller();
  5. private arr: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  7. build() {
  8. Scroll(this.scroller) {
  9. Row() {
  10. ForEach(this.arr, (item?:number|undefined) => {
  11. if(item != undefined){
  12. Text(item.toString())
  13. .height('90%')
  14. .width(150)
  15. .backgroundColor(0xFFFFFF)
  16. .borderRadius(15)
  17. .fontSize(16)
  18. .textAlign(TextAlign.Center)
  19. .margin({ left: 10 })
  20. }
  21. })
  22. }.height('100%')
  23. }
  24. .backgroundColor(0xDCDCDC)
  25. .scrollable(ScrollDirection.Horizontal) // 滚动方向为水平方向
  26. .scrollBar(BarState.On) // 滚动条常驻显示
  27. .scrollBarColor(Color.Gray) // 滚动条颜色
  28. .scrollBarWidth(10) // 滚动条宽度
  29. .edgeEffect(EdgeEffect.Spring) // 滚动到边沿后回弹
  30. }
  31. }
  ```

  [ScrollHorizontalExample.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/MultipleLayoutProject/entry/src/main/ets/pages/linearlayout/ScrollHorizontalExample.ets#L15-L47)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/67/v3/lmL-tyBmRiOcaA98URlspw/zh-cn_image_0000002566708039.gif?HW-CC-KV=V1&HW-CC-Date=20260403T125750Z&HW-CC-Expire=86400&HW-CC-Sign=0662AAC4207971FA1D45F95537C0BD2880072A513F0BAD8DFB1B345246543C1F)