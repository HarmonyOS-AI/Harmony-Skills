## **意图注册配置操作步骤**

1. 账号登录：
   1. 通过“[华为开发者联盟](https://developer.huawei.com/consumer/cn/) > 管理中心 > 生态服务 > 智慧服务 > 小艺开放平台（原HarmonyOS服务开放平台） > 意图框架”，进入意图注册入口。

      如发布渠道为“智能体/小艺对话”只能使用与应用上架相同的账号登录。反之发布渠道为“插件市场”无特殊账号要求。

      ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d5/v3/cQ5PWbRoSxSXQBFIQM68_g/zh-cn_image_0000002370462624.png?HW-CC-KV=V1&HW-CC-Date=20260403T124511Z&HW-CC-Expire=86400&HW-CC-Sign=55DCD0539B0A275DB7CED3F91822CB615A2A5FE18D41D1817A92D3B6926A7A83 "点击放大")
   2. 点击“立即体验”即可进入意图注册入口。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1c/v3/XgwxU4mrRnecpqaJ_GbZ-Q/zh-cn_image_0000002370462696.png?HW-CC-KV=V1&HW-CC-Date=20260403T124511Z&HW-CC-Expire=86400&HW-CC-Sign=BCAFD2CB4EBEA905B834D3D3CA9046EDC058C4E2B7E2E0D045FC9AC64E8071A5 "点击放大")
2. 注册意图集
   1. 如图，点击“注册意图”。

      ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a8/v3/e9cnf1aITVCl1Yh6XOPYbw/zh-cn_image_0000002404182437.png?HW-CC-KV=V1&HW-CC-Date=20260403T124511Z&HW-CC-Expire=86400&HW-CC-Sign=21D4118ABEE507B16FA004C7444B1619FB8FDE5876AC57357E3F21164290649F "点击放大")
   2. 选择“MCP协议”并填写基本信息创建意图集。
      1. 意图集（插件）名称：需唯一标识。
      2. 意图集（插件）描述：开发者自定义插件描述信息。
      3. 分类：按业务场景选择。
      4. MCP服务配置：填写MCP URL（服务器地址信息，不含鉴权信息）。
      5. 认证信息配置：对应鉴权信息（注意放在Header/Query）。
      6. 协议类型：根据情况选择，提供SSE/Streamable两种。

      ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/08/v3/rqZIJyk3R-ms6I74tXtPOA/zh-cn_image_0000002370622864.png?HW-CC-KV=V1&HW-CC-Date=20260403T124511Z&HW-CC-Expire=86400&HW-CC-Sign=A7778B01B9900868AB9775AA97F70607C1A1099A27754062452D57C3B5C142F6 "点击放大")
3. 编辑：创建后自动进入”插件编辑“页面。
   1. 编辑基本信息：
      1. 开发者品牌：该信息是对外露出的品牌传播名（注意和企业账号，公司名称区别开）。
      2. 图标：192\*192。
      3. 使用描述：需使用Markdown格式。（需对server的功能概述、apikey申请方式表达准确清晰）。

      ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/52/v3/D8IFgJYITnyAk6CZCkMkSw/zh-cn_image_0000002370631568.png?HW-CC-KV=V1&HW-CC-Date=20260403T124511Z&HW-CC-Expire=86400&HW-CC-Sign=7ED297F9966ACFBC332473D699B387C14CE43DC8CE10B24DBEAA8CC5E03DB95B "点击放大")
4. 工具检查：保存后切换至"工具"页签。若基本信息配置无误，工具列表中会根据基本信息内容自动生成1条/多条信息。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6c/v3/jRZADyL3TTuEcrRcQdFf3Q/zh-cn_image_0000002404278633.png?HW-CC-KV=V1&HW-CC-Date=20260403T124511Z&HW-CC-Expire=86400&HW-CC-Sign=30D538890909F72E82BF2E38785379BBB88B32096D34C809E421CD7A3CE1F03E "点击放大")
   1. 出现工具列表：请检查工具入参，参数是否重复或者缺失，参数类型是否正确。若一切无误，则配置成功。

      ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9a/v3/n3BdtQZQR-GbcJxMZuSjfA/zh-cn_image_0000002370479076.png?HW-CC-KV=V1&HW-CC-Date=20260403T124511Z&HW-CC-Expire=86400&HW-CC-Sign=96A78BF73CDFE741A19F748B48D04E072E98CC1C39BBFEF5383A18DC1960ADC9 "点击放大")
   2. 未出现工具列表：请等候几分钟重新进入，后台加载存在延时；如若重新进入后，仍未加载出工具信息，可能是插件的链接和鉴权信息配置错误。多次尝试后仍未解决，请通过邮箱联系华为意图框架同学（hagservice@huawei.com） 。
5. 审核：切换至“发布”页签，点击“提交审核”。
   1. 选择发布渠道，点击确定，提交审核。
      1. 智能体：开发者上架MCP Server，仅供开发者自己开发的智能体来调用。
      2. 小艺对话：开发者上架MCP Server，可供开发者自己开发的智能体调用，也可供小艺APP主对话调用（当前暂不支持开发者独立在小艺主对话上线该能力，需联系华为意图框架同学）。
      3. 插件市场：开发者上架MCP server，可供开发者自己开发的智能体调用，也可供平台上其他开发者开发智能体时调用（回到开发者源头平台去开服）。

      ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/76/v3/39QccIwCSjWLqBWVMkjfKA/zh-cn_image_0000002404278877.png?HW-CC-KV=V1&HW-CC-Date=20260403T124511Z&HW-CC-Expire=86400&HW-CC-Sign=C16AE5452065B839EE519D3C2D7EF0785ED14EB5B647F25AEB6199F24D572FDB "点击放大")
   2. 提交审核后，请耐心等待平台相关审核流程完成；完成后即可在“[华为开发者联盟](https://developer.huawei.com/consumer/cn/) > 管理中心 > 生态服务 > 智慧服务 > 小艺开放平台（原HarmonyOS服务开放平台） > 意图框架 > 小艺插件市场”中找到您的工具。