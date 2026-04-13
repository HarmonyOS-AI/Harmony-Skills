DevEco Studio为开发者提供了UI预览功能，方便查看UI效果并随时调整页面布局。预览支持页面预览和组件预览。图1中左侧图标![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d6/v3/e0I14OWdT-eYmTJy73aMQA/zh-cn_image_0000002535948684.png?HW-CC-KV=V1&HW-CC-Date=20260403T131445Z&HW-CC-Expire=86400&HW-CC-Sign=44DF14EF4B0431779598B8413784361C0E2A90BCFAB6B1F3CA4E6D1C062A354B)表示页面预览，右侧图标![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b1/v3/YtXxu-niTJirTsl11S_xLQ/zh-cn_image_0000002566868515.png?HW-CC-KV=V1&HW-CC-Date=20260403T131445Z&HW-CC-Expire=86400&HW-CC-Sign=D35FE89C384BA935EE1386444E916D363C06FCF1528F37245CAF610A96EABD02)表示组件预览。

说明

操作系统和真机设备的差异可能导致预览效果与真机效果不同。预览效果仅作参考，实际效果以真机为准。

**图1** 预览图标

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/44/v3/tP_l5D7QRCaW9e1GNXURuw/zh-cn_image_0000002566708535.png?HW-CC-KV=V1&HW-CC-Date=20260403T131445Z&HW-CC-Expire=86400&HW-CC-Sign=01AEA650931D4A9B99769F1F23ADC1A129B1D675312BFC9F8076662F0D590E66)

## 页面预览

ArkTS应用/元服务均支持页面预览。页面预览通过在工程的ets文件中，给自定义组件添加[@Entry](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-create-custom-components#entry)装饰器，即可以查看当前UI页面效果。

* 启动方式：选中需要预览的ets页面，点击右侧侧边栏的Previewer按钮，启动页面预览。
* 热加载：在启动页面预览的前提下，添加、删除或修改UI组件后，通过Ctrl+S保存，预览器会同步刷新预览效果，无需重新启动预览。
* 路由能力：支持通过路由能力进行页面切换查看其它页面预览效果。

在页面预览的基础上，提供了极速预览和Inspector双向预览两种特性。下面将详细说明这两种特性。

### 极速预览

支持在修改组件的属性时，无需使用Ctrl+S进行保存，可以直接观察到修改后的预览效果。极速预览默认开启，若需关闭，点击预览器右上角按钮![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e2/v3/U1-GrK8WScmg7Iff5qxl9A/zh-cn_image_0000002535788738.png?HW-CC-KV=V1&HW-CC-Date=20260403T131445Z&HW-CC-Expire=86400&HW-CC-Sign=A8804748D48F26AB033A93C7DCD49F10D8667251AF12C900BC78048905C09D3D)即可。

注意

部分应用场景不支持极速预览：

* 不显示的组件。
* 新增或删除组件。
* 包含private变量或无类型的controller的组件。
* 使用了[@Builder](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-builder)、[@Style](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-style)、[@Extend](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-extend)等装饰器的组件。
* 修改使用import导入外部组件/模块的组件。
* 修改状态变量。

效果如图2所示：

**图2** 极速预览演示图

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f3/v3/NZuQDKkbQFabNNVA4E25og/zh-cn_image_0000002535948686.gif?HW-CC-KV=V1&HW-CC-Date=20260403T131445Z&HW-CC-Expire=86400&HW-CC-Sign=372CDEF945BD2538F607C0449397DE5D745739FB8113197BEA38B07479B38D25)

### inspector双向预览

支持ets文件与预览器的双向预览。使用时，点击预览器界面图标![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d4/v3/2DqzHilaRFqeV0ryUBSTEQ/zh-cn_image_0000002566868517.png?HW-CC-KV=V1&HW-CC-Date=20260403T131445Z&HW-CC-Expire=86400&HW-CC-Sign=48F515C795B59F1514454575043F30B85F169AE0E67D1647A2C34936DE37C2EA)开启双向预览功能。

开启双向预览功能后，支持代码编辑器、UI界面和组件树之间的联动：

1. 选中预览器界面中的组件，组件树上对应的组件将被选中，同时代码编辑器中的布局文件中对应的代码块高亮显示。
2. 选中布局文件中的代码块，预览器界面将高亮显示，组件树上的组件节点将呈现被选中的状态。
3. 选中组件树中的组件，对应的代码块和预览器界面将高亮显示。
4. 在预览界面，通过组件的属性面板修改可修改的属性或样式。预览界面的修改会自动同步到代码编辑器中，并实时刷新预览器界面。代码编辑器中的源码修改也会实时刷新预览器界面，并更新组件树信息及组件属性。

效果如图3所示：

**图3** inspector双向预览演示图

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/db/v3/qs_LO43sQD2z5mGYitcIPA/zh-cn_image_0000002566708537.gif?HW-CC-KV=V1&HW-CC-Date=20260403T131445Z&HW-CC-Expire=86400&HW-CC-Sign=8F634F880BBA5E5BD05400B309BB01C495A66D7F4F9AD711B2653DE21BEC0CB2)

## 组件预览

ArkTS应用/元服务支持组件预览功能。组件预览通过在自定义组件前添加[@Preview](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-component-previewer#preview装饰器)装饰器实现。在单个源文件中，最多可以使用10个@Preview装饰自定义组件。启动方式：

* 当组件被@Entry和@Preview装饰时，点击右侧侧边栏的Previewer按钮，启动页面预览，页面加载成功后，点击![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d4/v3/le4Txj-0SCaBWsMqu-kdMQ/zh-cn_image_0000002566868515.png?HW-CC-KV=V1&HW-CC-Date=20260403T131445Z&HW-CC-Expire=86400&HW-CC-Sign=C06D81A85C3020DAE8BDC331AA0A44B59A68295C5DFEBCC0F9E34AC02D3169E0)，切换到组件预览。
* 当组件仅被@Preview装饰时，点击右侧侧边栏的Previewer按钮，则默认为组件预览。

组件预览时，使用@Preview装饰器的默认属性（请参考[PreviewParams](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-component-previewer#previewparams9)）进行效果显示。可以通过设置@Preview的参数，指定预览设备的相关属性，包括设备类型、屏幕形状等。

@Preview的使用参考如下示例：

收起

自动换行

深色代码主题

复制

```
1. @Entry
2. @Preview
3. @Component
4. struct ComponentPreviewOne {
5. build() {
6. Column() {
7. Text('this is component previewer One')
8. .height(80)
9. .fontSize(30)
10. // $r('app.media.startIcon')需要替换为开发者所需的图像资源文件
11. Image($r('app.media.startIcon'))
12. .height(300)
13. .width(300)
14. }
15. }
16. }

18. @Preview
19. @Component
20. struct ComponentPreviewTwo {
21. build() {
22. Column() {
23. Text('this is component previewer Two')
24. .height(80)
25. .fontSize(30)
26. .fontColor(Color.Pink)
27. // $r('app.media.startIcon')需要替换为开发者所需的图像资源文件
28. Image($r('app.media.startIcon'))
29. .height(300)
30. .width(300)
31. }
32. }
33. }
```

效果如图4所示：

**图4** 组件预览效果图

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5b/v3/ZcGXqpfITfGLDdedMeCB5g/zh-cn_image_0000002535788740.png?HW-CC-KV=V1&HW-CC-Date=20260403T131445Z&HW-CC-Expire=86400&HW-CC-Sign=478888C1BE18E39ADDF1A81F6F342433A73B52E8B27CC5C7B83C8299A71418AA)

## 动态修改分辨率

同一个应用/元服务可以运行在多个设备上，因不同设备的屏幕分辨率、形状、大小等不同，开发者需要在不同的设备上查看应用/元服务的UI布局和交互效果。预览支持动态修改分辨率，方便开发者随时查看不同设备上的页面显示效果。启动方式：启动页面预览后，点击右上角![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c9/v3/WJY1XiLbRbSlIq4OrpvEyw/zh-cn_image_0000002535948688.png?HW-CC-KV=V1&HW-CC-Date=20260403T131445Z&HW-CC-Expire=86400&HW-CC-Sign=A7CD6B2382C1A70D1B7A7FD6806CECF00C964F86580A709633F7C086320485F0)，即可拖动页面选中框动态修改当前设备的屏幕大小。

效果如图5所示：

**图5** 动态修改分辨率效果图

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e0/v3/X2X0GTIHQIOTTh3Z5HGSLw/zh-cn_image_0000002566868519.gif?HW-CC-KV=V1&HW-CC-Date=20260403T131445Z&HW-CC-Expire=86400&HW-CC-Sign=C5BE3B36C7D6E526C691B59C8C0B4A6EC43C7BC8E98E0B4754DB43AE2D9A2916)