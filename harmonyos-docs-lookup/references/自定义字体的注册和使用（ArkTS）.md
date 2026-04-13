## 场景介绍

自定义字体是指开发者根据应用需求创建或选择的字体，通常用于实现特定的文字风格或满足独特的设计要求。当应用需要使用特定的文本样式和字符集时，可以注册并使用自定义字体进行文本渲染。

## 实现流程

**自定义字体的注册**是指将字体文件（如ttf、otf文件等）从应用资源注册到系统中，使得应用能够使用这些字体进行文本渲染。注册过程是将字体文件通过字体管理接口注册到系统字体库中，以便在应用中进行调用。

**自定义字体的使用**是指在应用中显式指定使用已注册的自定义字体进行文本渲染。开发者可以根据需要选择特定的文本样式（如常规、粗体、斜体等），并将其应用到UI元素、文本控件或其他文本展示区域，以满足设计要求并提供视觉效果的一致性。

## 接口说明

自定义字体注册和使用的常用接口如下表所示，详细接口说明请见[@ohos.graphics.text (文本模块)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-graphics-text)。

展开

| 接口 | 描述 |
| --- | --- |
| loadFontSync(name: string, path: string | Resource): void | 同步接口，将路径对应的文件，以name作为使用的别名，注册自定义字体。  **说明：**  需保证使用自定义字体时，自定义字体已完成注册，非性能严格要求场景下，建议使用同步接口。 |
| loadFont(name: string, path: string | Resource): Promise<void> | 使用指定的别名和文件路径注册对应字体，使用Promise异步回调。此接口从API version 14开始支持。 |
| unloadFontSync(name: string): void | 同步接口，注销指定别名的字体。此接口从API version 20开始支持。 |
| unloadFont(name: string): Promise<void> | 使用指定的别名注销对应字体，使用Promise异步回调。此接口从API version 20开始支持。 |

## 开发步骤

1. 导入依赖的相关模块。

   收起

   自动换行

   深色代码主题

   复制

   ```
   1. import { NodeController, FrameNode, RenderNode, DrawContext } from '@kit.ArkUI'
   2. import { UIContext } from '@kit.ArkUI'
   3. import { text } from '@kit.ArkGraphics2D'
   ```
2. 注册自定义字体。有以下两种方式：

   收起

   自动换行

   深色代码主题

   复制

   ```
   1. // 注册自定义字体
   2. // 方式一：/system/fonts/NotoSansMalayalamUI-SemiBold.ttf文件仅为示例路径，应用根据自身实际填写文件路径
   3. fontCollection.loadFontSync(familyName, 'file:///system/fonts/NotoSansMalayalamUI-SemiBold.ttf')
   4. // 方式二：确保已经将自定义字体myFontFile.ttf文件放在本应用工程的entry/src/main/resources/rawfile目录
   5. // fontCollection.loadFontSync(familyName, $rawfile('myFontFile.ttf'))
   ```
3. 使用自定义字体。

   收起

   自动换行

   深色代码主题

   复制

   ```
   1. // 使用自定义字体
   2. let myFontFamily: Array<string> = [familyName] // 如果已经注册自定义字体，填入自定义字体的字体家族名
   3. // 设置文本样式
   4. let myTextStyle: text.TextStyle = {
   5. color: {
   6. alpha: 255,
   7. red: 255,
   8. green: 0,
   9. blue: 0
   10. },
   11. fontSize: 30,
   12. // 在文本样式中加入可使用的自定义字体
   13. fontFamilies: myFontFamily
   14. };
   ```
4. 创建段落样式，并使用字体管理器实例构造段落生成器ParagraphBuilder实例。

   收起

   自动换行

   深色代码主题

   复制

   ```
   1. // 创建一个段落样式对象，以设置排版风格
   2. let myParagraphStyle: text.ParagraphStyle = {
   3. textStyle: myTextStyle,
   4. align: 3,
   5. wordBreak: text.WordBreak.NORMAL
   6. };
   7. // 创建一个段落生成器
   8. let paragraphBuilder = new text.ParagraphBuilder(myParagraphStyle, fontCollection)
   ```
5. 生成段落。

   收起

   自动换行

   深色代码主题

   复制

   ```
   1. // 在段落生成器中设置文本样式
   2. paragraphBuilder.pushStyle(myTextStyle);
   3. // 在段落生成器中设置文本内容
   4. paragraphBuilder.addText("Custom font test");
   5. // 通过段落生成器生成段落
   6. let paragraph = paragraphBuilder.build();
   ```
6. 如果需要释放自定义字体，可以使用unloadFontSync接口。

   收起

   自动换行

   深色代码主题

   复制

   ```
   1. // 注销自定义字体
   2. fontCollection.unloadFontSync(familyName)
   3. // 注销之后需要刷新使用该fontCollection的节点
   4. newNode.invalidate()
   ```

## 效果展示

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2d/v3/BKff3O0uSEyii7zZnQUQSg/zh-cn_image_0000002535949016.png?HW-CC-KV=V1&HW-CC-Date=20260403T145442Z&HW-CC-Expire=86400&HW-CC-Sign=D66AA559C9FAFC6AA2EC3AE73ADF465E6975E1F6A88B70D34510EB4D86E947F0)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/99/v3/WDHStfuHRES5jRyMP0dVHA/zh-cn_image_0000002566868849.png?HW-CC-KV=V1&HW-CC-Date=20260403T145442Z&HW-CC-Expire=86400&HW-CC-Sign=D87CFC853F43458CD1532FAC8D18DA2DF06955B9FCFC73FC9C54BDB218338ADC)