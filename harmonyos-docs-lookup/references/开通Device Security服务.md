在开通Device Security服务前，请先参考“[应用开发准备](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/application-dev-overview)”完成基本准备工作，再继续进行以下开发活动。

说明

Device Security包括应用设备状态检测、安全检测、可信应用服务、业务风险检测能力、数字盾服务，开发者请根据实际使用场景，选择开启某个或者多个能力开关。

1. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)网站，选择“开发与服务”。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/32/v3/6XtRZRhfR_OmqHIR7ZPfiA/zh-cn_image_0000002515108437.png?HW-CC-KV=V1&HW-CC-Date=20260403T134505Z&HW-CC-Expire=86400&HW-CC-Sign=0FE8867D1F4A54EDE8A6ACDA20891A14E33A6DA687F2C6775007657C02865A59 "点击放大")
2. 在项目列表中找到需要开通Device Security服务的项目。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1a/v3/kOwXZjqcQgO3dtFsyg5HFA/zh-cn_image_0000002514988437.png?HW-CC-KV=V1&HW-CC-Date=20260403T134505Z&HW-CC-Expire=86400&HW-CC-Sign=7C5ADD0CF2A59DF6319BC752669AF5C0344B4C6DBC842B804A7CEEB329355302 "点击放大")
3. 选择“开放能力管理”Tab页，找到需要使用的功能，点击左侧的按钮，开通相应的功能。
   * **应用设备状态检测**：勾选“应用设备状态检测”并点击“保存”，接入“应用设备状态检测”。

     ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1/v3/HuqtN4WnRnue1MNF2iSBiw/zh-cn_image_0000002482788476.png?HW-CC-KV=V1&HW-CC-Date=20260403T134505Z&HW-CC-Expire=86400&HW-CC-Sign=FDB4677B6BE73EB8B41299A6A3C20EBDFB9031788E3F71AE4509861EB45AD783 "点击放大")
   * **安全检测**：勾选“安全检测服务”并点击“保存”，接入“安全检测服务”。

     ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/da/v3/4yFtaMNjTWiCmWoVwd-f6A/zh-cn_image_0000002514988433.png?HW-CC-KV=V1&HW-CC-Date=20260403T134505Z&HW-CC-Expire=86400&HW-CC-Sign=FAB013E019B501BAA28920FE9683217A6F912270DBB922D5B07B840CBC6DFDE5 "点击放大")
   * **可信应用服务**：勾选“可信应用服务”并点击“保存”，接入“可信应用服务”。

     说明

     开通“可信应用服务”需要先申请进入允许清单，请将Developer ID、公司名称、应用名称、申请使用的服务和使用该服务的场景，发送到agconnect@huawei.com。AGC运营将审核相关材料，通过后将为您配置受限开放服务使用的名单，审核周期为1-3个工作日，请耐心等待。

     ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d0/v3/wVOeYXRtQemZK40ieRkmow/zh-cn_image_0000002482908442.png?HW-CC-KV=V1&HW-CC-Date=20260403T134505Z&HW-CC-Expire=86400&HW-CC-Sign=1FEE44A30C5AFE818664A260C74878CEF8E9F1180A15CE7558ED6AECB2FC63B6 "点击放大")
   * **业务风险检测****-涉诈剧本检测**：点击“涉诈剧本检测”右侧申请按钮，接入“涉诈剧本检测”，审核通过后勾选对应服务并点击“保存”该服务配置。

     ① 在申请“涉诈剧本检测”前，需要在[华为开发者联盟](https://developer.huawei.com/consumer/cn/)网站上注册成为开发者，并完成[企业开发者实名认证](https://developer.huawei.com/consumer/cn/doc/start/edrna-0000001062678489)。

     ② 点击“涉诈剧本检测”右侧申请按钮，接入“涉诈剧本检测”。

     ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/49/v3/e-zoc1RKR6uxdLhk3sHS9A/zh-cn_image_0000002531057860.png?HW-CC-KV=V1&HW-CC-Date=20260403T134505Z&HW-CC-Expire=86400&HW-CC-Sign=563198F9BA761D37D44F211D3255E7324417F69F8CDD17B9F5CBB79864DDD128 "点击放大")

     ③ 参考“申请原因”中的模板，提供申请必需的相关信息，包含Developer ID、公司名称、应用名称、使用场景、使用该服务的合法基础（应用使用该服务时需在其隐私声明中进行个人数据声明及用途说明，详细参考[个人数据处理说明](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/devicesecurity-personal-data)，并将合法基础的相关证明上传至申请附件），然后点击“提交”按钮。

     ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b0/v3/hhYl8ytSSAOAuHmj7s-tmw/zh-cn_image_0000002530676194.png?HW-CC-KV=V1&HW-CC-Date=20260403T134505Z&HW-CC-Expire=86400&HW-CC-Sign=30907865ECE1E5880BAF8C0FD1FECD5AC2581C401E199DC6F14A5759E4FB7C6A "点击放大")

     说明

     提交申请后，AGC运营将审核相关材料，通过后则可保存对应的服务配置，审核周期为1-3个工作日，请耐心等待。
   * **数字盾服务**：点击“数字盾服务”右侧申请按钮，接入“数字盾服务”，审核通过后勾选对应服务并点击“保存”该服务配置。

     ① 在申请“数字盾服务”前，需要在[华为开发者联盟](https://developer.huawei.com/consumer/cn/)网站上注册成为开发者，并完成[企业开发者实名认证](https://developer.huawei.com/consumer/cn/doc/start/edrna-0000001062678489)。

     ② 点击“数字盾服务”右侧申请按钮，接入“数字盾服务”，审核通过后勾选对应服务并点击“保存”该服务配置。

     ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4d/v3/VaVI9r_HSHuRvjsxvVusmQ/zh-cn_image_0000002515108439.png?HW-CC-KV=V1&HW-CC-Date=20260403T134505Z&HW-CC-Expire=86400&HW-CC-Sign=2D6FDB50FA76FD96B3ECF5BD4AC37B475899032D815426BCFB6E72FE7C348B5E "点击放大")

     说明

     请您在申请框填写“数字盾服务”申请原因和应用场景。AGC运营将审核相关材料，通过后则可保存对应的服务配置，审核周期为1-3个工作日，请耐心等待。
4. 申请Profile（.p7b）文件，具体操作请参见[申请调试Profile](https://developer.huawei.com/consumer/cn/doc/app/agc-help-debug-profile-0000002248181278)。

   说明

   在开通服务后，需要重新申请Profile（.p7b）文件。