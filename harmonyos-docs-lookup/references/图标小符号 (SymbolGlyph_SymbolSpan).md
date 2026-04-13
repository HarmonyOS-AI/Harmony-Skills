SymbolGlyph是图标小符号组件，便于使用精美的图标，如渲染多色图标和使用动效图标。SymbolSpan作为Text组件的子组件，可在文本中穿插显示图标小符号。具体用法请参考[SymbolGlyph](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-symbolglyph)和[SymbolSpan](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-symbolspan)组件的API文档。

## 创建图标

SymbolGlyph通过$r引用Resource资源来创建，目前仅支持系统预置的Symbol资源名。

相关资源可参考[系统图标](https://developer.huawei.com/consumer/cn/doc/design-guides/system-icons-0000001929854962)。

收起

自动换行

深色代码主题

复制

```
1. SymbolGlyph($r('sys.symbol.ohos_folder_badge_plus'))
2. .fontSize(96)
3. .renderingStrategy(SymbolRenderingStrategy.SINGLE)
4. .fontColor([Color.Black, Color.Green, Color.White])
```

[CreatSymbolGlyph.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/TextComponent/entry/src/main/ets/pages/symbol/CreatSymbolGlyph.ets#L25-L30)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/11/v3/sPrX1KzUQGGtg2A14IGqkg/zh-cn_image_0000002566708187.png?HW-CC-KV=V1&HW-CC-Date=20260403T125905Z&HW-CC-Expire=86400&HW-CC-Sign=BC452C6E93DA477C2E111BF9A6051E105A97A7909FA8B252840C8BED7FC5DA0C)

## 添加到文本中

[SymbolSpan](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-symbolspan)可作为[Text](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-text)的子组件用于显示图标小符号。可以在一个Text组件内添加多个SymbolSpan，从而展示一串连续的图标。

* 创建SymbolSpan。

  SymbolSpan组件需嵌入在Text组件中才能显示，单独使用不会呈现任何内容。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. Text() {
  2. SymbolSpan($r('sys.symbol.ohos_trash'))
  3. .fontWeight(FontWeight.Normal)
  4. .fontSize(96)
  5. }
  ```

  [SymbolAddToText.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/TextComponent/entry/src/main/ets/pages/symbol/SymbolAddToText.ets#L29-L35)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1a/v3/pR6G1of1SFWtTAjjy6eAow/zh-cn_image_0000002535788390.png?HW-CC-KV=V1&HW-CC-Date=20260403T125905Z&HW-CC-Expire=86400&HW-CC-Sign=FC6843E4391FB58BE953A30C8B3E74C84EC97EE24D71BDA435AF4787472CB3D2)
* 通过[fontSize](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-symbolspan#fontsize)属性设置SymbolSpan的大小。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. Row() {
  2. Column() {
  3. Text('48')
  4. Text() {
  5. SymbolSpan($r('sys.symbol.ohos_folder_badge_plus'))
  6. .fontSize(48)
  7. .renderingStrategy(SymbolRenderingStrategy.SINGLE)
  8. .fontColor([Color.Black, Color.Green, Color.White])
  9. }
  10. }

  12. Column() {
  13. Text('72')
  14. Text() {
  15. SymbolSpan($r('sys.symbol.ohos_folder_badge_plus'))
  16. .fontSize(72)
  17. .renderingStrategy(SymbolRenderingStrategy.SINGLE)
  18. .fontColor([Color.Black, Color.Green, Color.White])
  19. }
  20. }

  22. Column() {
  23. Text('96')
  24. Text() {
  25. SymbolSpan($r('sys.symbol.ohos_folder_badge_plus'))
  26. .fontSize(96)
  27. .renderingStrategy(SymbolRenderingStrategy.SINGLE)
  28. .fontColor([Color.Black, Color.Green, Color.White])
  29. }
  30. }
  31. }
  ```

  [SymbolAddToText.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/TextComponent/entry/src/main/ets/pages/symbol/SymbolAddToText.ets#L39-L71)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/56/v3/ZiASXD8uQfiAF33aFyhl4A/zh-cn_image_0000002535948336.png?HW-CC-KV=V1&HW-CC-Date=20260403T125905Z&HW-CC-Expire=86400&HW-CC-Sign=53A2BA73BB329967721382487CE6055CCFC0E3B9DA8E7FD82963DE0624E58405)
* 通过[fontWeight](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-symbolspan#fontweight)属性设置SymbolSpan组件的粗细。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. Row() {
  2. Column() {
  3. Text('Light')
  4. Text() {
  5. SymbolSpan($r('sys.symbol.ohos_trash'))
  6. .fontWeight(FontWeight.Lighter)
  7. .fontSize(96)
  8. }
  9. }

  11. Column() {
  12. Text('Normal')
  13. Text() {
  14. SymbolSpan($r('sys.symbol.ohos_trash'))
  15. .fontWeight(FontWeight.Normal)
  16. .fontSize(96)
  17. }
  18. }

  20. Column() {
  21. Text('Bold')
  22. Text() {
  23. SymbolSpan($r('sys.symbol.ohos_trash'))
  24. .fontWeight(FontWeight.Bold)
  25. .fontSize(96)
  26. }
  27. }
  28. }
  ```

  [SymbolAddToText.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/TextComponent/entry/src/main/ets/pages/symbol/SymbolAddToText.ets#L75-L104)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8c/v3/JC0Xuf7pSaav2HzO3v83bw/zh-cn_image_0000002566868169.png?HW-CC-KV=V1&HW-CC-Date=20260403T125905Z&HW-CC-Expire=86400&HW-CC-Sign=928D632115FE3BCC6FD5890EE5E6B8B852C5FBE1C797E7B7B425220F0C14B692)
* 通过[fontColor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-symbolspan#fontcolor)属性设置SymbolSpan的颜色。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. Row() {
  2. Column() {
  3. Text('Black')
  4. Text() {
  5. SymbolSpan($r('sys.symbol.ohos_folder_badge_plus'))
  6. .fontSize(96)
  7. .fontColor([Color.Black])
  8. }
  9. }

  11. Column() {
  12. Text('Green')
  13. Text() {
  14. SymbolSpan($r('sys.symbol.ohos_folder_badge_plus'))
  15. .fontSize(96)
  16. .fontColor([Color.Green])
  17. }
  18. }

  20. Column() {
  21. Text('Pink')
  22. Text() {
  23. SymbolSpan($r('sys.symbol.ohos_folder_badge_plus'))
  24. .fontSize(96)
  25. .fontColor([Color.Pink])
  26. }
  27. }
  28. }
  ```

  [SymbolAddToText.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/TextComponent/entry/src/main/ets/pages/symbol/SymbolAddToText.ets#L108-L137)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/26/v3/1ZLfkZVaT-S5ohssZjCY2A/zh-cn_image_0000002566708189.png?HW-CC-KV=V1&HW-CC-Date=20260403T125905Z&HW-CC-Expire=86400&HW-CC-Sign=747B5BEC3DAD162B3AD76FE6122FA78324998A5B92C05A53CF4CB1C0CCAA721B)
* 通过[renderingStrategy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-symbolspan#renderingstrategy)属性设置SymbolSpan的渲染策略。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. Row() {
  2. Column() {
  3. // 请将$r('app.string.single_color')替换为实际资源文件，在本示例中该资源文件的value值为"单色"
  4. Text($r('app.string.single_color'));
  5. Text() {
  6. SymbolSpan($r('sys.symbol.ohos_folder_badge_plus'))
  7. .fontSize(96)
  8. .renderingStrategy(SymbolRenderingStrategy.SINGLE)
  9. .fontColor([Color.Black, Color.Green, Color.White])
  10. }
  11. }

  13. Column() {
  14. // 请将$r('app.string.multi_color')替换为实际资源文件，在本示例中该资源文件的value值为"多色"
  15. Text($r('app.string.multi_color'));
  16. Text() {
  17. SymbolSpan($r('sys.symbol.ohos_folder_badge_plus'))
  18. .fontSize(96)
  19. .renderingStrategy(SymbolRenderingStrategy.MULTIPLE_COLOR)
  20. .fontColor([Color.Black, Color.Green, Color.White])
  21. }
  22. }

  24. Column() {
  25. // 请将$r('app.string.hierarchical')替换为实际资源文件，在本示例中该资源文件的value值为"分层"
  26. Text($r('app.string.hierarchical'));
  27. Text() {
  28. SymbolSpan($r('sys.symbol.ohos_folder_badge_plus'))
  29. .fontSize(96)
  30. .renderingStrategy(SymbolRenderingStrategy.MULTIPLE_OPACITY)
  31. .fontColor([Color.Black, Color.Green, Color.White])
  32. }
  33. }
  34. }
  ```

  [SymbolAddToText.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/TextComponent/entry/src/main/ets/pages/symbol/SymbolAddToText.ets#L141-L176)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/45/v3/7yEAj5CDTVSUlxP4aumhiA/zh-cn_image_0000002535788394.png?HW-CC-KV=V1&HW-CC-Date=20260403T125905Z&HW-CC-Expire=86400&HW-CC-Sign=A8914218F7672DDDD66649806E3C02176BA1867340A28F9E8EE8F0B3C01C090C)
* 通过[effectStrategy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-symbolspan#effectstrategy)属性设置SymbolSpan的动效策略。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. Row() {
  2. Column() {
  3. // 请将$r('app.string.no_action')替换为实际资源文件，在本示例中该资源文件的value值为"无动效"
  4. Text($r('app.string.no_action'));
  5. Text() {
  6. SymbolSpan($r('sys.symbol.ohos_wifi'))
  7. .fontSize(96)
  8. .effectStrategy(SymbolEffectStrategy.NONE)
  9. }
  10. }

  12. Column() {
  13. // 请将$r('app.string.overall_scaling_animation_effect')替换为实际资源文件，在本示例中该资源文件的value值为"整体缩放动效"
  14. Text($r('app.string.overall_scaling_animation_effect'));
  15. Text() {
  16. SymbolSpan($r('sys.symbol.ohos_wifi'))
  17. .fontSize(96)
  18. .effectStrategy(SymbolEffectStrategy.SCALE)
  19. }
  20. }

  22. Column() {
  23. // 请将$r('app.string.hierarchical_animation')替换为实际资源文件，在本示例中该资源文件的value值为"层级动效"
  24. Text($r('app.string.hierarchical_animation'));
  25. Text() {
  26. SymbolSpan($r('sys.symbol.ohos_wifi'))
  27. .fontSize(96)
  28. .effectStrategy(SymbolEffectStrategy.HIERARCHICAL)
  29. }
  30. }
  31. }
  ```

  [SymbolAddToText.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/TextComponent/entry/src/main/ets/pages/symbol/SymbolAddToText.ets#L181-L213)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/91/v3/-3LKfrzcQKWLZgfpqVETzw/zh-cn_image_0000002535948340.gif?HW-CC-KV=V1&HW-CC-Date=20260403T125905Z&HW-CC-Expire=86400&HW-CC-Sign=4FA3EE6954AF954AAB1FF8D11492198EF6B04021FD86BD43200A219CD37619E2)
* SymbolSpan不支持通用事件。

## 自定义图标动效

相较于effectStrategy属性在启动时即触发动效，可以通过以下两种方式来控制动效的播放状态，以及选择更多样化的动效策略。

关于effectStrategy属性与symbolEffect属性的多种动态属性使用及生效原则，详情请参阅[SymbolGlyph.symbolEffect](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-symbolglyph#symboleffect12-1)属性的说明。

* 通过设置SymbolEffect属性，可以同时配置SymbolGlyph的动效策略和播放状态。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. @State isActive: boolean = true;
  ```

  [SymbolCustomIconAnimation.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/TextComponent/entry/src/main/ets/pages/symbol/SymbolCustomIconAnimation.ets#L22-L24)

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. Column() {
  2. // 请将$r('app.string.variable_color_animation')替换为实际资源文件，在本示例中该资源文件的value值为"可变颜色动效"
  3. Text($r('app.string.variable_color_animation'));
  4. SymbolGlyph($r('sys.symbol.ohos_wifi'))
  5. .fontSize(96)
  6. .symbolEffect(new HierarchicalSymbolEffect(EffectFillStyle.ITERATIVE), this.isActive)
  7. // 请将$r('app.string.off')替换为实际资源文件，在本示例中该资源文件的value值为"关闭"
  8. // 请将$r('app.string.on')替换为实际资源文件，在本示例中该资源文件的value值为"播放"
  9. Button(this.isActive ? $r('app.string.off') : $r('app.string.on')).onClick(() => {
  10. this.isActive = !this.isActive;
  11. })
  12. }
  ```

  [SymbolCustomIconAnimation.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/TextComponent/entry/src/main/ets/pages/symbol/SymbolCustomIconAnimation.ets#L40-L53)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ec/v3/3XYLuxhPTN2D1BJDCtVDdw/zh-cn_image_0000002566868171.gif?HW-CC-KV=V1&HW-CC-Date=20260403T125905Z&HW-CC-Expire=86400&HW-CC-Sign=92D7A00F37D49649EB1CC63C3EA9574C3FAECA5B1343E65A78F3E12D0D2A1CE1)
* 通过设置SymbolEffect属性，可以同时指定SymbolGlyph的动画效果策略及其播放触发条件。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. @State triggerValueReplace: number = 0;
  ```

  [SymbolCustomIconAnimation.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/TextComponent/entry/src/main/ets/pages/symbol/SymbolCustomIconAnimation.ets#L25-L29)

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. Column() {
  2. // 请将$r('app.string.bounce_animation')替换为实际资源文件，在本示例中该资源文件的value值为"弹跳动效"
  3. Text($r('app.string.bounce_animation'));
  4. SymbolGlyph($r('sys.symbol.ellipsis_message_1'))
  5. .fontSize(96)
  6. .fontColor([Color.Gray])
  7. .symbolEffect(new BounceSymbolEffect(EffectScope.WHOLE, EffectDirection.UP),
  8. this.triggerValueReplace)
  9. Button('trigger').onClick(() => {
  10. this.triggerValueReplace = this.triggerValueReplace + 1;
  11. })
  12. }
  ```

  [SymbolCustomIconAnimation.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/TextComponent/entry/src/main/ets/pages/symbol/SymbolCustomIconAnimation.ets#L56-L69)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c9/v3/iCZiA4GARAitl9I5rr3nbg/zh-cn_image_0000002566708191.gif?HW-CC-KV=V1&HW-CC-Date=20260403T125905Z&HW-CC-Expire=86400&HW-CC-Sign=465AF412E1FE14D0BFC8FC579FC7567ED5BB54433D71279ABB1B936125BDB9AD)
* 从API version 20开始，支持通过设置SymbolEffect属性为[ReplaceSymbolEffect](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-symbolglyph#replacesymboleffect12)，设置[ReplaceEffectType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-symbolglyph#replaceeffecttype20枚举说明)为ReplaceEffectType.SLASH\_OVERLAY，可以指定SymbolGlyph的禁用动画效果及其播放触发条件。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. @State triggerValueReplace: number = 0;
  2. replaceFlag: boolean = true;
  3. @State renderMode: number = 1;
  ```

  [SymbolCustomIconAnimation.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/TextComponent/entry/src/main/ets/pages/symbol/SymbolCustomIconAnimation.ets#L26-L33)

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. Column() {
  2. // 请将$r('app.string.disable_animation')替换为实际资源文件，在本示例中该资源文件的value值为"禁用动效"
  3. Text($r('app.string.disable_animation'));
  4. SymbolGlyph(this.replaceFlag ? $r('sys.symbol.eye_slash') : $r('sys.symbol.eye'))
  5. .fontSize(96)
  6. .renderingStrategy(this.renderMode)
  7. .symbolEffect(new ReplaceSymbolEffect(EffectScope.LAYER, ReplaceEffectType.SLASH_OVERLAY),
  8. this.triggerValueReplace)
  9. Button('trigger').onClick(() => {
  10. this.replaceFlag = !this.replaceFlag;
  11. this.triggerValueReplace = this.triggerValueReplace + 1;
  12. })
  13. }
  ```

  [SymbolCustomIconAnimation.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/TextComponent/entry/src/main/ets/pages/symbol/SymbolCustomIconAnimation.ets#L72-L86)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/21/v3/V9NPxbCSQkapwHYocqz8KQ/zh-cn_image_0000002535788396.gif?HW-CC-KV=V1&HW-CC-Date=20260403T125905Z&HW-CC-Expire=86400&HW-CC-Sign=51B3EE9227BA35FDF6B5B4BF9C26542E82D2CA4B2F7B685DFEA189F2C93DCCE4)
* 从API version 20开始，支持通过设置SymbolEffect属性为[ReplaceSymbolEffect](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-symbolglyph#replacesymboleffect12)，设置[ReplaceEffectType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-symbolglyph#replaceeffecttype20枚举说明)为ReplaceEffectType.CROSS\_FADE，可以指定SymbolGlyph的快速替换动画效果及其播放触发条件。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. @State triggerValueReplace: number = 0;
  2. replaceFlag: boolean = true;
  ```

  [SymbolCustomIconAnimation.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/TextComponent/entry/src/main/ets/pages/symbol/SymbolCustomIconAnimation.ets#L27-L31)

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. Column() {
  2. // 请将$r('app.string.quick_replacement_animation')替换为实际资源文件，在本示例中该资源文件的value值为"快速替换动效"
  3. Text($r('app.string.quick_replacement_animation'));
  4. SymbolGlyph(this.replaceFlag ? $r('sys.symbol.checkmark_circle') : $r('sys.symbol.repeat_1'))
  5. .fontSize(96)
  6. .symbolEffect(new ReplaceSymbolEffect(EffectScope.WHOLE, ReplaceEffectType.CROSS_FADE),
  7. this.triggerValueReplace)
  8. Button('trigger').onClick(() => {
  9. this.replaceFlag = !this.replaceFlag;
  10. this.triggerValueReplace = this.triggerValueReplace + 1;
  11. })
  12. }
  ```

  [SymbolCustomIconAnimation.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/TextComponent/entry/src/main/ets/pages/symbol/SymbolCustomIconAnimation.ets#L89-L102)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bd/v3/XqvrA_-1QHaI91AaSw7KzQ/zh-cn_image_0000002535948342.gif?HW-CC-KV=V1&HW-CC-Date=20260403T125905Z&HW-CC-Expire=86400&HW-CC-Sign=7D84D579E1406F34198035E50A25A1CC0E7D8A3D8CCCFFB6E5D1BAFEF63DF864)

## 设置阴影和渐变色

* 从API version 20开始，支持通过[symbolShadow](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-symbolglyph#symbolshadow20)接口实现了symbolGlyph组件显示阴影效果。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. @State isActive: boolean = true;

  3. options: ShadowOptions = {
  4. radius: 10.0,
  5. color: Color.Blue,
  6. offsetX: 10,
  7. offsetY: 10,
  8. };
  ```

  [SymbolShadowAndColor.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/TextComponent/entry/src/main/ets/pages/symbol/SymbolShadowAndColor.ets#L22-L31)

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. Column() {
  2. // 请将$r('app.string.shadow_ability')替换为实际资源文件，在本示例中该资源文件的value值为"阴影能力"
  3. Text($r('app.string.shadow_ability'));
  4. SymbolGlyph($r('sys.symbol.ohos_wifi'))
  5. .fontSize(96)
  6. .symbolEffect(new HierarchicalSymbolEffect(EffectFillStyle.ITERATIVE), !this.isActive)
  7. .symbolShadow(this.options)
  8. // 请将$r('app.string.off')替换为实际资源文件，在本示例中该资源文件的value值为"关闭"
  9. // 请将$r('app.string.on')替换为实际资源文件，在本示例中该资源文件的value值为"播放"
  10. Button(!this.isActive ? $r('app.string.off') : $r('app.string.on')).onClick(() => {
  11. this.isActive = !this.isActive;
  12. })
  13. }
  ```

  [SymbolShadowAndColor.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/TextComponent/entry/src/main/ets/pages/symbol/SymbolShadowAndColor.ets#L47-L61)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6c/v3/BsF7bOhCSiGScR6xRVDq9w/zh-cn_image_0000002566868175.gif?HW-CC-KV=V1&HW-CC-Date=20260403T125905Z&HW-CC-Expire=86400&HW-CC-Sign=768027952D52B1EF11BDE81786C724E5F2B28D4712E415972DBA349685D732C2)
* 从API version 20开始，支持通过[shaderStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-symbolglyph#shaderstyle20)接口实现了symbolGlyph组件显示渐变色效果。

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. radialGradientOptions: RadialGradientOptions = {
  2. center: ['50%', '50%'],
  3. radius: '20%',
  4. colors: [[Color.Red, 0.0], [Color.Blue, 0.3], [Color.Green, 0.5]],
  5. repeating: true,
  6. };
  ```

  [SymbolShadowAndColor.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/TextComponent/entry/src/main/ets/pages/symbol/SymbolShadowAndColor.ets#L33-L40)

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. Column() {
  2. // 请将$r('app.string.radial_gradient')替换为实际资源文件，在本示例中该资源文件的value值为"径向渐变"
  3. Text($r('app.string.radial_gradient'))
  4. .fontSize(18)
  5. .fontColor(0xCCCCCC)
  6. .textAlign(TextAlign.Center)
  7. SymbolGlyph($r('sys.symbol.ohos_folder_badge_plus'))
  8. .fontSize(96)
  9. .shaderStyle([new RadialGradientStyle(this.radialGradientOptions)])
  10. }
  ```

  [SymbolShadowAndColor.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/TextComponent/entry/src/main/ets/pages/symbol/SymbolShadowAndColor.ets#L64-L75)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d4/v3/HcePVFrySMm0nNW0HoB-rA/zh-cn_image_0000002566708195.jpg?HW-CC-KV=V1&HW-CC-Date=20260403T125905Z&HW-CC-Expire=86400&HW-CC-Sign=97F17293727FA4FC5E84EB7B3F916898A3F24849E0EEE3699B2035794C0105CF)

## 添加事件

SymbolGlyph组件可以添加通用事件，例如绑定[onClick](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-events-click#onclick)、[onTouch](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-events-touch#ontouch)等事件来响应操作。

收起

自动换行

深色代码主题

复制

```
1. @State wifiColor: ResourceColor = Color.Black;
```

[SymbolAddEvent.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/TextComponent/entry/src/main/ets/pages/symbol/SymbolAddEvent.ets#L21-L23)

收起

自动换行

深色代码主题

复制

```
1. SymbolGlyph($r('sys.symbol.ohos_wifi'))
2. .fontSize(96)
3. .fontColor([this.wifiColor])
4. .onClick(() => {
5. this.wifiColor = Color.Gray;
6. })
```

[SymbolAddEvent.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/TextComponent/entry/src/main/ets/pages/symbol/SymbolAddEvent.ets#L29-L36)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e3/v3/xffhuqXLRWuLaFp4nTUXRg/zh-cn_image_0000002535788400.gif?HW-CC-KV=V1&HW-CC-Date=20260403T125905Z&HW-CC-Expire=86400&HW-CC-Sign=DB3106A965E861A6298CE7A65ADD5C9435CAAD8A51AB7026F8668605BFED7A48)

## 场景示例

该示例通过symbolEffect、fontSize、fontColor属性展示了播放列表的效果。

收起

自动换行

深色代码主题

复制

```
1. // resourceGetString封装工具，从资源中获取字符串
2. import resourceGetString from '../../common/resource';

4. @Entry
5. @Component
6. struct SymbolMusicDemo {
7. @State triggerValueReplace: number = 0;
8. @State symbolSources: Resource[] =
9. [$r('sys.symbol.repeat'), $r('sys.symbol.repeat_1'), $r('sys.symbol.arrow_left_arrow_right')];
10. @State symbolSourcesIndex: number = 0;
11. @State symbolText: string[] = [
12. // 请将$r('app.string.play_in_order')替换为实际资源文件，在本示例中该资源文件的value值为"顺序播放"
13. this.getUIContext()
14. .getHostContext()!.resourceManager.getStringSync($r('app.string.play_in_order').id),
15. // 请将$r('app.string.play_in_single_repeat')替换为实际资源文件，在本示例中该资源文件的value值为"单曲循环"
16. this.getUIContext()
17. .getHostContext()!.resourceManager.getStringSync($r('app.string.play_in_single_repeat').id),
18. // 请将$r('app.string.shuffle_play')替换为实际资源文件，在本示例中该资源文件的value值为"随机播放"
19. this.getUIContext()
20. .getHostContext()!.resourceManager.getStringSync($r('app.string.shuffle_play').id),
21. ];
22. @State symbolTextIndex: number = 0;
23. @State fontColorValue: ResourceColor = Color.Grey;
24. @State fontColorValue1: ResourceColor = '#E8E8E8';

26. build() {
27. Column({ space: 10 }) {
28. Row() {
29. Text() {
30. // 请将$r('app.string.current_playlist')替换为实际资源文件，在本示例中该资源文件的value值为"当前播放列表"
31. Span(this.getUIContext()
32. .getHostContext()!.resourceManager.getStringSync($r('app.string.current_playlist').id))
33. .fontSize(20)
34. .fontWeight(FontWeight.Bolder)
35. Span('（101）')
36. }
37. }

39. Row() {
40. Row({ space: 5 }) {
41. SymbolGlyph(this.symbolSources[this.symbolSourcesIndex])
42. .symbolEffect(new ReplaceSymbolEffect(EffectScope.WHOLE), this.triggerValueReplace)
43. .fontSize(20)
44. .fontColor([this.fontColorValue])
45. Text(this.symbolText[this.symbolTextIndex])
46. .fontColor(this.fontColorValue)
47. }
48. .onClick(() => {
49. this.symbolTextIndex++;
50. this.symbolSourcesIndex++;
51. this.triggerValueReplace++;
52. if (this.symbolSourcesIndex > (this.symbolSources.length - 1)) {
53. this.symbolSourcesIndex = 0;
54. this.triggerValueReplace = 0;
55. }
56. if (this.symbolTextIndex > (this.symbolText.length - 1)) {
57. this.symbolTextIndex = 0;
58. }
59. })
60. .width('75%')

62. Row({ space: 5 }) {
63. Text() {
64. SymbolSpan($r('sys.symbol.arrow_down_circle_badge_vip_circle_filled'))
65. .fontColor([this.fontColorValue])
66. .fontSize(20)
67. }

69. Text() {
70. SymbolSpan($r('sys.symbol.heart_badge_plus'))
71. .fontColor([this.fontColorValue])
72. .fontSize(20)
73. }

75. Text() {
76. SymbolSpan($r('sys.symbol.ohos_trash'))
77. .fontColor([this.fontColorValue])
78. .fontSize(20)
79. }
80. }
81. .width('25%')
82. }

84. Divider().width(5).color(this.fontColorValue1).width('98%')
85. Row() {
86. Row() {
87. // 请将$r('app.string.song')替换为实际资源文件，在本示例中该资源文件的value值为"歌曲一"
88. Text($r('app.string.song'))
89. }.width('82%')

91. Row({ space: 5 }) {
92. SymbolGlyph($r('sys.symbol.play_arrow_triangle_2_circlepath'))
93. .fontColor([this.fontColorValue])
94. .fontSize(20)
95. SymbolGlyph($r('sys.symbol.trash'))
96. .fontColor([this.fontColorValue])
97. .fontSize(20)
98. }
99. }

101. Divider().width(5).color(this.fontColorValue1).width('98%')
102. Row() {
103. Row() {
104. // 请将$r('app.string.song_again')替换为实际资源文件，在本示例中该资源文件的value值为"歌曲二"
105. Text($r('app.string.song_again'))
106. }.width('82%')

108. Row({ space: 5 }) {
109. SymbolGlyph($r('sys.symbol.play_arrow_triangle_2_circlepath'))
110. .fontColor([this.fontColorValue])
111. .fontSize(20)
112. SymbolGlyph($r('sys.symbol.trash'))
113. .fontColor([this.fontColorValue])
114. .fontSize(20)
115. }
116. }

118. Divider().width(5).color(this.fontColorValue1).width('98%')
119. Row() {
120. Row() {
121. // 请将$r('app.string.again_song')替换为实际资源文件，在本示例中该资源文件的value值为"歌曲三"
122. Text($r('app.string.again_song'))
123. }.width('82%')

125. Row({ space: 5 }) {
126. SymbolGlyph($r('sys.symbol.play_arrow_triangle_2_circlepath'))
127. .fontColor([this.fontColorValue])
128. .fontSize(20)
129. SymbolGlyph($r('sys.symbol.trash'))
130. .fontColor([this.fontColorValue])
131. .fontSize(20)
132. }
133. }

135. Divider().width(5).color(this.fontColorValue1).width('98%')
136. Row() {
137. Row() {
138. // 请将$r('app.string.song_repeat')替换为实际资源文件，在本示例中该资源文件的value值为"歌曲四"
139. Text($r('app.string.song_repeat'))
140. }.width('82%')

142. Row({ space: 5 }) {
143. SymbolGlyph($r('sys.symbol.play_arrow_triangle_2_circlepath'))
144. .fontColor([this.fontColorValue])
145. .fontSize(20)
146. SymbolGlyph($r('sys.symbol.trash'))
147. .fontColor([this.fontColorValue])
148. .fontSize(20)
149. }
150. }

152. Divider().width(5).color(this.fontColorValue1).width('98%')
153. Row() {
154. Row() {
155. // 请将$r('app.string.repeat_song')替换为实际资源文件，在本示例中该资源文件的value值为"歌曲五"
156. Text($r('app.string.repeat_song'))
157. }.width('82%')

159. Row({ space: 5 }) {
160. SymbolGlyph($r('sys.symbol.play_arrow_triangle_2_circlepath'))
161. .fontColor([this.fontColorValue])
162. .fontSize(20)
163. SymbolGlyph($r('sys.symbol.trash'))
164. .fontColor([this.fontColorValue])
165. .fontSize(20)
166. }
167. }

169. Divider().width(5).color(this.fontColorValue1).width('98%')
170. Row() {
171. Row() {
172. // 请将$r('app.string.song_play')替换为实际资源文件，在本示例中该资源文件的value值为"歌曲六"
173. Text($r('app.string.song_play'))
174. }.width('82%')

176. Row({ space: 5 }) {
177. SymbolGlyph($r('sys.symbol.play_arrow_triangle_2_circlepath'))
178. .fontColor([this.fontColorValue])
179. .fontSize(20)
180. SymbolGlyph($r('sys.symbol.trash'))
181. .fontColor([this.fontColorValue])
182. .fontSize(20)
183. }
184. }

186. Divider().width(5).color(this.fontColorValue1).width('98%')
187. Row() {
188. Row() {
189. // 请将$r('app.string.play_song')替换为实际资源文件，在本示例中该资源文件的value值为"歌曲七"
190. Text($r('app.string.play_song'))
191. }.width('82%')

193. Row({ space: 5 }) {
194. SymbolGlyph($r('sys.symbol.play_arrow_triangle_2_circlepath'))
195. .fontColor([this.fontColorValue])
196. .fontSize(20)
197. SymbolGlyph($r('sys.symbol.trash'))
198. .fontColor([this.fontColorValue])
199. .fontSize(20)
200. }
201. }

203. Divider().width(5).color(this.fontColorValue1).width('98%')
204. Column() {
205. // 请将$r('app.string.off')替换为实际资源文件，在本示例中该资源文件的value值为"关闭"
206. Text($r('app.string.off'))
207. }
208. .alignItems(HorizontalAlign.Center)
209. .width('98%')
210. }
211. .alignItems(HorizontalAlign.Start)
212. .width('100%')
213. .height(400)
214. .padding({
215. left: 10,
216. top: 10
217. })
218. }
219. }
```

[SymbolSceneExample.ets](https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20251117/ArkUISample/TextComponent/entry/src/main/ets/pages/symbol/SymbolSceneExample.ets#L18-L234)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/69/v3/-x20uNusT7aw71Opk-o2gw/zh-cn_image_0000002535948346.gif?HW-CC-KV=V1&HW-CC-Date=20260403T125905Z&HW-CC-Expire=86400&HW-CC-Sign=E937FD204F13F6BB9DDA3359C87267A388ABFA47B57CC29E31B1C68821746404)