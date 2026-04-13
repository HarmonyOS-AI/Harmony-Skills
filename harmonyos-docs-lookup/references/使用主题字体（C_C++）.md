## 场景介绍

主题字体，特指系统**主题应用**中能使用的字体，属于一种特殊的自定义字体。可以通过相关接口调用使能主题应用中的主题字体。

## 实现机制

**图1** 主题字体的切换和使用

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/56/v3/SnpB8IbdRCKfdECs53Q4_w/zh-cn_image_0000002566868847.jpg?HW-CC-KV=V1&HW-CC-Date=20260403T145449Z&HW-CC-Expire=86400&HW-CC-Sign=B1DFA3B7F052D45F0659C0AE66F8A5FDEABF97DC63DA6B1BE687DB34D4FF285E)

针对主题字的切换使用，应用方应确保订阅主题字变更事件，当接收字体变更事件后，由应用方主动调用页面刷新才能实现主题字的切换，否则主题字只能在重启应用后才生效；主题字的绘制需要使用OH\_Drawing\_GetFontCollectionGlobalInstance来获取全局字体集对象，仅该接口返回的对象拥有主题字体信息。

说明

由OH\_Drawing\_CreateSharedFontCollection创建的字体集对象不包含主题字信息，无法用于绘制主题字。

## 接口说明

注册使用主题字体的常用接口如下表所示，详细接口说明请参考[Drawing](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing)。

展开

| 接口名 | 描述 |
| --- | --- |
| OH\_Drawing\_FontCollection\* OH\_Drawing\_GetFontCollectionGlobalInstance(void) | 获取全局的字体集对象OH\_Drawing\_FontCollection。 |
| [onConfigurationUpdate()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-ability#abilityonconfigurationupdate) | 系统配置更新时调用。  主题应用当前仅提供ArkTS接口发布变更事件，需要应用自行处理进行跨语言调用。 |

## 开发步骤

1. 请确保在设备系统**主题应用**中，能成功应用一项主题字体。
2. 在应用入口文件（默认工程中为EntryAbility.ets）中重写onConfigurationUpdate函数，以响应fontId变更，适配主题字体的切换和页面刷新，重写方式可参考[主题字变更事件](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/theme-font-arkts#开发步骤)。

   系统配置信息（即示例中的newConfig）变化时，会自动触发onConfigurationUpdate函数。应用可从系统发送的配置信息获取fontId，通过判断是否与应用本地保存的fontId一致来识别主题字的切换。若不一致则刷新本地fontId，并调用C++代码刷新排版结果。从ArkTS到C++的调用通路需应用根据实际情况选取调用方式，本示例不作推荐。跨语言调用可参考[Node-API简介](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/napi-introduction)。
3. 导入C++侧依赖，本步骤及之后均为主题字体在C++侧的使用

   在工程的src/main/cpp/CMakeLists.txt文件中添加以下lib。

   收起

   自动换行

   深色代码主题

   复制

   ```
   1. libnative_drawing.so
   ```

   导入头文件。

   收起

   自动换行

   深色代码主题

   复制

   ```
   1. #include <native_drawing/drawing_font_collection.h>
   2. #include <native_drawing/drawing_text_typography.h>
   3. #include <native_drawing/drawing_register_font.h>
   ```
4. 创建字体管理器。

   说明

   注册主题字体作用于字体管理集全局对象，故必须使用OH\_Drawing\_GetFontCollectionGlobalInstance获取全局字体集对象进行绘制。如若使用OH\_Drawing\_CreateSharedFontCollection或OH\_Drawing\_CreateFontCollection创建字体集对象，无法使用主题字体。OH\_Drawing\_GetFontCollectionGlobalInstance获取的全局字体集不允许释放，释放会造成字体绘制紊乱问题。

   收起

   自动换行

   深色代码主题

   复制

   ```
   1. OH_Drawing_FontCollection *fontCollection = OH_Drawing_GetFontCollectionGlobalInstance();
   ```
5. OH\_Drawing\_SetTextStyleFontFamilies()接口可以用来指定字体家族名，从而实现使用指定字体。但使用主题字体，不需要使用OH\_Drawing\_SetTextStyleFontFamilies()接口指定字体，否则行为变更为优先使用指定字体，而不是主题字体。

   收起

   自动换行

   深色代码主题

   复制

   ```
   1. OH_Drawing_TextStyle *myTextStyle = OH_Drawing_CreateTextStyle();
   2. // const char* myFontFamilies[] = {"otherFontFamilyName"};
   3. // 注意不要使用此接口来指定字体
   4. // OH_Drawing_SetTextStyleFontFamilies(textStyle, 1, myFontFamilies);
   ```
6. 设置段落文本内容为"Hello World. \nThis is the theme font."，此时该段落文本将应用主题字体。

   收起

   自动换行

   深色代码主题

   复制

   ```
   1. // 设置其他文本样式
   2. OH_Drawing_SetTextStyleColor(myTextStyle, OH_Drawing_ColorSetArgb(0xFF, 0x00, 0x00, 0x00));
   3. // 设置字体大小为100.0
   4. OH_Drawing_SetTextStyleFontSize(myTextStyle, 100.0);
   5. // 创建一个段落样式对象，以设置排版风格
   6. OH_Drawing_TypographyStyle *typographyStyle = OH_Drawing_CreateTypographyStyle();
   7. OH_Drawing_SetTypographyTextAlign(typographyStyle, TEXT_ALIGN_LEFT); // 设置段落样式为左对齐
   8. // 创建一个段落生成器
   9. OH_Drawing_TypographyCreate *handler = OH_Drawing_CreateTypographyHandler(typographyStyle, fontCollection);
   10. // 在段落生成器中设置文本样式
   11. OH_Drawing_TypographyHandlerPushTextStyle(handler, myTextStyle);
   12. // 在段落生成器中设置文本内容
   13. const char *text = "Hello World. \nThis is the theme font.";
   14. OH_Drawing_TypographyHandlerAddText(handler, text);
   15. // 通过段落生成器生成段落
   16. OH_Drawing_Typography *typography = OH_Drawing_CreateTypography(handler);
   ```

## 效果展示

以下展示了在系统**主题应用**中切换使用不同主题字体后，对应的文字渲染效果。

不同主题字体显示效果不同，此处仅示意。

**图2** 主题字体1的效果

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bb/v3/oZMbaY4YRuqdPOIy7pq2RQ/zh-cn_image_0000002535949018.png?HW-CC-KV=V1&HW-CC-Date=20260403T145449Z&HW-CC-Expire=86400&HW-CC-Sign=380EA370986F1A8D59C54B4E109BD3505AB8EBB28975FADEE9CE7CA904ACB73F)

**图3** 主题字体2的效果

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b8/v3/zPVaT7ahRc-UZGW7oCdcsg/zh-cn_image_0000002566868851.png?HW-CC-KV=V1&HW-CC-Date=20260403T145449Z&HW-CC-Expire=86400&HW-CC-Sign=E585DCEF2434125206D8D435B92722FDFABE6BA26FADDFFA38F815E5A779ECD0)