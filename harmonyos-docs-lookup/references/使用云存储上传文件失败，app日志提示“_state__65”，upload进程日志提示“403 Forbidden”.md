**问题现象**

使用云存储上传文件失败，出现如下错误提示：

* app日志提示“"state":65”

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/93/v3/37jL_tecQ9Ov-LUGQEDpmg/zh-cn_image_0000002474214289.png?HW-CC-KV=V1&HW-CC-Date=20260403T151754Z&HW-CC-Expire=86400&HW-CC-Sign=6B57C31D8015EE264FE4C1197898DD96C896F9A5AA6598BF011231E1830599E7)
* upload进程的日志提示“403 Forbidden”（通过设置“No filters”模式、过滤“C01C50”关键字查找）

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bc/v3/zShnIfo0QcaKVzmhxv908g/zh-cn_image_0000002440774452.png?HW-CC-KV=V1&HW-CC-Date=20260403T151754Z&HW-CC-Expire=86400&HW-CC-Sign=A573ACB413A1A23F8436CD66F14AF7E0CB38561B7A18187B047DD6AFACB45D00)

**解决措施**

出现此问题，可按照如下步骤排查和解决：

1. 请确认应用的签名方式正确。当前Cloud Foundation Kit支持[关联注册应用进行自动签名](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-signing#section20943184413328)和[手动签名](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-signing#section297715173233)两种方式。
2. 请确认已通过[AuthProvider](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cloudfoundation-cloudcommon#section136610231214)获取用户凭据。未配置用户凭据的情况下，服务端会返回“403 Forbidden”错误。