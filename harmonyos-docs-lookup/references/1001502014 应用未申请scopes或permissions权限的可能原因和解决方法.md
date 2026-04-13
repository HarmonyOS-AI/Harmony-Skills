**问题现象**

调用接口报错1001502014 应用未申请scopes或permissions权限。

**可能原因**

1. 没有申请对应的账号权限。
2. 权限申请成功后，最迟会在25小时后生效。
3. 使用[获取风险等级](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/account-get-risklevel)能力，但未申请获取风险等级权限。

**解决措施**

1. 申请对应权限，请见[申请账号权限](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/account-config-permissions)章节。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/84/v3/4Z8_FKxvS7qxbUchQrs3wg/zh-cn_image_0000002497063284.png?HW-CC-KV=V1&HW-CC-Date=20260403T150544Z&HW-CC-Expire=86400&HW-CC-Sign=03AD49FCC7A241189FB002FE2A6DC6163C8A1E7C818B95D71CA3794630D61BF0 "点击放大")
2. 权限申请通过后，您可通过修改应用工程 > app.json5中的versionCode触发权限生效。

   **图1** 修改前  
   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/73/v3/9j79wRjoRieAymVHmB_QQQ/zh-cn_image_0000002528823271.png?HW-CC-KV=V1&HW-CC-Date=20260403T150544Z&HW-CC-Expire=86400&HW-CC-Sign=5B29D2EF87035FF4891D7AFEE81BEFBB5420DF1EB695FC1A03C7E9A1E5BD5221)

   **图2** 修改后  
   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a8/v3/2oeMZ1QFRMeuxim3go4qGw/zh-cn_image_0000002528943239.png?HW-CC-KV=V1&HW-CC-Date=20260403T150544Z&HW-CC-Expire=86400&HW-CC-Sign=7F3339929C84909DB619E186A3780CE4C4FA07FE5C899526D444E86A9F1D2A9C)
3. 确认是否需要使用获取风险等级能力，如需使用，请参考[获取风险等级](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/account-get-risklevel)申请对应权限。