Progress是进度条显示组件，显示内容通常为目标操作的当前进度。具体用法请参考[Progress](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-progress)。

## 创建进度条

Progress通过调用接口来创建，接口调用方式如下：

收起

自动换行

深色代码主题

复制

```
1. Progress(options: {value: number, total?: number, type?: ProgressType})
```

其中，value用于设置初始进度值，total用于设置进度总长度，type用于设置Progress样式。

收起

自动换行

深色代码主题

复制

```
1. Progress({ value: 24, total: 100, type: ProgressType.Linear }) // 创建一个进度总长为100，初始进度值为24的线性进度条
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d9/v3/zkizjVNAQ3yHXBlKFX2MFw/zh-cn_image_0000002535948418.png?HW-CC-KV=V1&HW-CC-Date=20260403T130019Z&HW-CC-Expire=86400&HW-CC-Sign=8351BB783CA8381B8E34F0C1609FF09BE369741D2872F83576712816F5A07B42)

## 设置进度条样式

Progress有5种可选类型，通过ProgressType可以设置进度条样式。ProgressType类型包括：ProgressType.Linear（线性样式）、 ProgressType.Ring（环形无刻度样式）、ProgressType.ScaleRing（环形有刻度样式）、ProgressType.Eclipse（圆形样式）和ProgressType.Capsule（胶囊样式）。

* 线性样式进度条（默认类型）

  说明

  从API version 9开始，组件高度大于宽度时，自适应垂直显示；组件高度等于宽度时，保持水平显示。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. Progress({ value: 20, total: 100, type: ProgressType.Linear }).width(200).height(50)
  2. Progress({ value: 20, total: 100, type: ProgressType.Linear }).width(50).height(200)
  ```

  [Index.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/InfoComponent/ProgressProject/entry/src/main/ets/pages/Index.ets#L36-L39)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2d/v3/GqM97KMkQWuQcN7j8DKQNA/zh-cn_image_0000002566868249.png?HW-CC-KV=V1&HW-CC-Date=20260403T130019Z&HW-CC-Expire=86400&HW-CC-Sign=B0581C2260FED347BBA5DFEBDE77441F021366E84BC2B00BC4AF534E5620854B)
* 环形无刻度样式进度条

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. // 从左往右，1号环形进度条，默认前景色为蓝色渐变，默认strokeWidth进度条宽度为2.0vp
  2. Progress({ value: 40, total: 150, type: ProgressType.Ring }).width(100).height(100)
  3. // 从左往右，2号环形进度条
  4. Progress({ value: 40, total: 150, type: ProgressType.Ring }).width(100).height(100)
  5. .color(Color.Grey)    // 进度条前景色为灰色
  6. .style({ strokeWidth: 15})    // 设置strokeWidth进度条宽度为15.0vp
  ```

  [Index.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/InfoComponent/ProgressProject/entry/src/main/ets/pages/Index.ets#L43-L50)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a5/v3/5RkgUHzDQfShjiRMVo4DOQ/zh-cn_image_0000002566708269.png?HW-CC-KV=V1&HW-CC-Date=20260403T130019Z&HW-CC-Expire=86400&HW-CC-Sign=5BEC5587AC12A8702A32A2516E6BC12DF92D3A5409D4C1AF6516BB4FC90DCC91)
* 环形有刻度样式进度条

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. Progress({ value: 20, total: 150, type: ProgressType.ScaleRing }).width(100).height(100)
  2. .backgroundColor(Color.Black)
  3. .style({ scaleCount: 20, scaleWidth: 5 })    // 设置环形有刻度进度条总刻度数为20，刻度宽度为5vp
  4. Progress({ value: 20, total: 150, type: ProgressType.ScaleRing }).width(100).height(100)
  5. .backgroundColor(Color.Black)
  6. .style({ strokeWidth: 15, scaleCount: 20, scaleWidth: 5 })    // 设置环形有刻度进度条宽度15，总刻度数为20，刻度宽度为5vp
  7. Progress({ value: 20, total: 150, type: ProgressType.ScaleRing }).width(100).height(100)
  8. .backgroundColor(Color.Black)
  9. .style({ strokeWidth: 15, scaleCount: 20, scaleWidth: 3 })    // 设置环形有刻度进度条宽度15，总刻度数为20，刻度宽度为3vp
  ```

  [Index.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/InfoComponent/ProgressProject/entry/src/main/ets/pages/Index.ets#L55-L65)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e3/v3/jmguaWCySca6OqvnDko0Xw/zh-cn_image_0000002535788474.png?HW-CC-KV=V1&HW-CC-Date=20260403T130019Z&HW-CC-Expire=86400&HW-CC-Sign=E1443A116EAF5AF57B7DEC8ADCDBE6FBB487EE2B811D6554CD30C9444FB5785A)
* 圆形样式进度条

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. // 从左往右，1号圆形进度条，默认前景色为蓝色
  2. Progress({ value: 10, total: 150, type: ProgressType.Eclipse }).width(100).height(100)
  3. // 从左往右，2号圆形进度条，指定前景色为灰色
  4. Progress({ value: 20, total: 150, type: ProgressType.Eclipse }).color(Color.Grey).width(100).height(100)
  ```

  [Index.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/InfoComponent/ProgressProject/entry/src/main/ets/pages/Index.ets#L70-L75)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b2/v3/mlufHM0nSuWAVEKaIBY92g/zh-cn_image_0000002535948420.png?HW-CC-KV=V1&HW-CC-Date=20260403T130019Z&HW-CC-Expire=86400&HW-CC-Sign=CBF40DE2F6934E0DD5476D281F29C95C138E22C7029A8B84F18895D5634B67BF)
* 胶囊样式进度条

  说明

  + 头尾两端圆弧处的进度展示效果与ProgressType.Eclipse样式一致。
  + 中段处的进度展示效果为矩形状长条，与ProgressType.Linear线性样式相似。
  + 组件高度大于宽度时，自适应垂直显示。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. Progress({ value: 10, total: 150, type: ProgressType.Capsule }).width(100).height(50)
  2. Progress({ value: 20, total: 150, type: ProgressType.Capsule }).width(50).height(100).color(Color.Grey)
  3. Progress({ value: 50, total: 150, type: ProgressType.Capsule }).width(50).height(100).color(Color.Blue).backgroundColor(Color.Black)
  ```

  [Index.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/InfoComponent/ProgressProject/entry/src/main/ets/pages/Index.ets#L80-L84)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cb/v3/CoCGBp5jTBmGDcXsuYIbXQ/zh-cn_image_0000002566868253.png?HW-CC-KV=V1&HW-CC-Date=20260403T130019Z&HW-CC-Expire=86400&HW-CC-Sign=6274D8622D5ADF462F40541E49B838334768F3EC8CD4DEEEA2FAFCC435943DBE)

## 场景示例

更新当前进度值，如应用安装进度条，可通过点击Button增加progressValue，value属性将progressValue设置给Progress组件，进度条组件即会触发刷新，更新当前进度。

收起

自动换行

深色代码主题

复制

```
1. @Entry
2. @Component
3. struct ProgressCase1 {
4. @State progressValue: number = 0;    // 设置进度条初始值为0
5. build() {
6. Column() {
7. Column() {
8. Progress({value:0, total:100, type:ProgressType.Capsule}).width(200).height(50).value(this.progressValue)
9. Row().width('100%').height(5)
10. // 请将$r('app.string.progress_add')替换为实际资源文件，在本示例中该资源文件的value值为"进度条+5"
11. Button($r('app.string.progress_add'))
12. .onClick(()=>{
13. this.progressValue += 5;
14. if (this.progressValue > 100){
15. this.progressValue = 0;
16. }
17. })
18. }
19. }.width('100%').height('100%')
20. }
21. }
```

[ProgressCase1.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/InfoComponent/ProgressProject/entry/src/main/ets/pages/ProgressCase1.ets#L15-L36)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/13/v3/_Ge8B_7DSfOwNg9vlvosHw/zh-cn_image_0000002566708271.gif?HW-CC-KV=V1&HW-CC-Date=20260403T130019Z&HW-CC-Expire=86400&HW-CC-Sign=6EAC78F10A9B1B3C0DDE10BD5125964C192A139761BD6E0D84827D44299597B4)