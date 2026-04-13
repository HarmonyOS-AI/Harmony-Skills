## 场景介绍

主题字体，特指系统**主题应用**中能使用的字体，属于一种特殊的自定义字体，可以通过相关接口调用使能主题应用中的主题字体。

## 实现机制

**图1** 主题字体的切换和使用

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b1/v3/bZfPQfrhSZuXIKatNsj0gA/zh-cn_image_0000002566868847.jpg?HW-CC-KV=V1&HW-CC-Date=20260403T145438Z&HW-CC-Expire=86400&HW-CC-Sign=768E77E2671F66439AFA214895716FEC4724E6A9FEB06DCDBAFD6D7733EAB0AA)

针对主题字的切换使用，应用方应确保订阅主题字体变更事件，当接收到字体变更事件后，由应用方主动调用页面刷新才能实现主题字的切换，否则主题字只能在重启应用后才生效。

## 接口说明

注册使用主题字体的常用接口如下表所示，详细接口说明请见[@ohos.graphics.text (文本模块)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-graphics-text)。

展开

| 接口 | 描述 |
| --- | --- |
| getGlobalInstance(): FontCollection | 获取应用全局字体集的实例。 |

## 开发步骤

1. 请确保在设备系统**主题应用**中，能成功应用一项主题字体。
2. 导入依赖的相关模块。

   收起

   自动换行

   深色代码主题

   复制

   ```
   1. import { text } from '@kit.ArkGraphics2D';
   ```
3. 使用getGlobalInstance()接口获取全局字体集对象，系统框架在注册主题字体过程中仅会将主题字体信息传入全局字体集对象中。

   收起

   自动换行

   深色代码主题

   复制

   ```
   1. // 获取字体管理器全局FontCollection实例
   2. let fontCollection = text.FontCollection.getGlobalInstance();
   ```
4. 创建段落样式，并使用字体管理器实例构造段落生成器ParagraphBuilder实例，用于生成段落。

   说明

   在生成段落对象设置段落样式入参时，不能指定fontFamilies属性，否则会变为优先使用指定字体而非主题字体。

   若未在系统**主题应用**中设置一项主题字体，则将使用系统默认字体进行绘制。

   收起

   自动换行

   深色代码主题

   复制

   ```
   1. // 设置文本样式
   2. let myTextStyle: text.TextStyle = {
   3. color: { alpha: 255, red: 255, green: 0, blue: 0 },
   4. fontSize: 33
   5. };
   6. // 创建一个段落样式对象，以设置排版风格
   7. let myParagraphStyle: text.ParagraphStyle = {
   8. textStyle: myTextStyle,
   9. align: 3,
   10. wordBreak:text.WordBreak.NORMAL
   11. };
   12. // 创建一个段落生成器
   13. let paragraphGraphBuilder = new text.ParagraphBuilder(myParagraphStyle, fontCollection);
   ```
5. 设置文本样式，添加文本内容，并生成段落文本用于后续文本的绘制显示。

   收起

   自动换行

   深色代码主题

   复制

   ```
   1. // 在段落生成器中设置文本样式
   2. paragraphGraphBuilder.pushStyle(myTextStyle);
   3. // 在段落生成器中设置文本内容
   4. paragraphGraphBuilder.addText("Hello World. \nThis is the theme font.");
   5. // 通过段落生成器生成段落
   6. let paragraph = paragraphGraphBuilder.build();
   ```
6. 创建渲染节点，并保存到数组。（此处示例代码为简化逻辑，采用数组作为容器，实际开发中应结合应用情况选择更恰当的容器来保证节点的添加与删除对应。）

   收起

   自动换行

   深色代码主题

   复制

   ```
   1. // 创建渲染节点数组
   2. const renderNodeMap: Array<RenderNode> = new Array();
   3. // 创建节点控制器
   4. class MyNodeController extends NodeController {
   5. private rootNode: FrameNode | null = null;
   6. makeNode(uiContext: UIContext): FrameNode {
   7. this.rootNode = new FrameNode(uiContext);
   8. if (this.rootNode == null) {
   9. return this.rootNode;
   10. }
   11. const renderNode = this.rootNode.getRenderNode();
   12. if (renderNode != null) {
   13. renderNode.frame = { x: 0, y: 0, width: 300, height: 50 };
   14. renderNode.pivot = { x: 0, y: 0 };
   15. }
   16. return this.rootNode;
   17. }
   18. addNode(node: RenderNode): void {
   19. if (this.rootNode == null) {
   20. return;
   21. }
   22. const renderNode = this.rootNode.getRenderNode();
   23. if (renderNode != null) {
   24. renderNode.appendChild(node);
   25. // 将节点添加到渲染节点数组中
   26. renderNodeMap.push(node);
   27. }
   28. }
   29. clearNodes(): void {
   30. if (this.rootNode == null) {
   31. return;
   32. }
   33. const renderNode = this.rootNode.getRenderNode();
   34. if (renderNode != null) {
   35. renderNode.clearChildren();
   36. // 将节点从渲染节点数组中移除
   37. renderNodeMap.pop();
   38. }
   39. }
   40. }
   ```
7. 创建渲染节点更新函数，并导出函数，供其他文件（如：EntryAbility.ets）使用；重绘制节点目的为更新排版中字体信息，若不更新字体信息，使用之前残留结果，可能造成文字乱码。

   收起

   自动换行

   深色代码主题

   复制

   ```
   1. // 导出渲染节点更新函数
   2. export function updateRenderNodeData() {
   3. renderNodeMap.forEach((node) => {
   4. // 主动触发节点重绘制
   5. node.invalidate();
   6. });
   7. }
   ```
8. 在EntryAbility.ets中接收主题字变更事件，并调用渲染节点更新函数。

   收起

   自动换行

   深色代码主题

   复制

   ```
   1. import { AbilityConstant, Configuration, UIAbility, Want } from '@kit.AbilityKit';
   2. import { hilog } from '@kit.PerformanceAnalysisKit';
   3. import { window } from '@kit.ArkUI';
   4. import { updateRenderNodeData } from '../pages/Index';

   6. // ...

   8. export default class EntryAbility extends UIAbility {
   9. preFontId = "";
   10. // ...

   12. onConfigurationUpdate(newConfig: Configuration): void {
   13. let fontId = newConfig.fontId;
   14. if (fontId && fontId !== this.preFontId) {
   15. this.preFontId = fontId;
   16. updateRenderNodeData();
   17. // ...
   18. }
   19. }
   20. }
   ```

## 效果展示

以下展示了在系统**主题应用**中切换使用不同主题字体后，对应的文字渲染效果。

不同主题字体显示效果不同，此处仅示意。

**图2** 主题字体1的效果

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f1/v3/e7Gw3bODR2iOjY_7kW9bhQ/zh-cn_image_0000002566708865.png?HW-CC-KV=V1&HW-CC-Date=20260403T145438Z&HW-CC-Expire=86400&HW-CC-Sign=85A17C8535DCD6336BBD3A50A712B6AA050EDBF9D5F94DD8CB0294BD76789CC1)

**图3** 主题字体2的效果

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/88/v3/76qY0y38TZi2AW159vvr0A/zh-cn_image_0000002535789070.png?HW-CC-KV=V1&HW-CC-Date=20260403T145438Z&HW-CC-Expire=86400&HW-CC-Sign=86A32AA989B22763CA820F23582FAFF2B8D3D2B69517B78BF914B7D2B17D358F)