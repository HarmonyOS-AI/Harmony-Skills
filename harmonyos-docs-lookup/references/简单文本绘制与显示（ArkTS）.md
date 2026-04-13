## 场景介绍

在一个简单的用户界面中，可能只需要展示几行静态文本，例如标签、按钮上的文字、菜单项或状态栏中的提示信息。此时，开发者只需要选择合适的字体、大小和颜色即可完成渲染。

## 相关属性

此场景示例，涉及到的文本样式属性如下，具体及更多文本样式可参考[TextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-graphics-text#textstyle)。

* color：字体颜色，默认为白色。请注意与画布颜色进行区分，以保证文本的正常显示。
* fontSize：字体大小，浮点数，默认为14.0，单位为物理像素px。

## 开发步骤

1. 通过context获取到Canvas画布对象。

   收起

   自动换行

   深色代码主题

   复制

   ```
   1. let canvas = context.canvas;
   ```
2. 初始化文本样式，此处设置字体颜色为红色，字体大小为50。

   收起

   自动换行

   深色代码主题

   复制

   ```
   1. // 获取文本样式
   2. let myTextStyle: text.TextStyle = {
   3. // 文本颜色
   4. color: {
   5. alpha: 255,
   6. red: 255,
   7. green: 0,
   8. blue: 0
   9. },
   10. // 文本大小
   11. fontSize: 100
   12. };
   ```
3. 初始化段落样式。

   收起

   自动换行

   深色代码主题

   复制

   ```
   1. let myParagraphStyle: text.ParagraphStyle = {
   2. textStyle: myTextStyle,
   3. };
   ```
4. 初始化段落对象，并添加文本。

   收起

   自动换行

   深色代码主题

   复制

   ```
   1. let fontCollection = text.FontCollection.getGlobalInstance();
   2. let ParagraphGraphBuilder = new text.ParagraphBuilder(myParagraphStyle, fontCollection);
   3. // 更新文本样式
   4. ParagraphGraphBuilder.pushStyle(myTextStyle);
   5. // 添加文本
   6. ParagraphGraphBuilder.addText("Hello World");
   ```
5. 排版段落并进行文本绘制。

   收起

   自动换行

   深色代码主题

   复制

   ```
   1. // 生成段落
   2. let paragraph = ParagraphGraphBuilder.build();
   3. // 布局
   4. paragraph.layoutSync(1250);
   5. // 绘制文本
   6. paragraph.paint(canvas, 0, 100);
   ```

## 效果展示

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/94/v3/U_bXn9x0TYywdF3vptiqZw/zh-cn_image_0000002535789074.png?HW-CC-KV=V1&HW-CC-Date=20260403T145517Z&HW-CC-Expire=86400&HW-CC-Sign=F001850C876EF749B8540095E04B84F245ABAAD4E5522E09CD73574AD5F56F65)