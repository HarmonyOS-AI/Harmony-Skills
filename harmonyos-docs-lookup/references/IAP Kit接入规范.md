为了确保用户获得良好的支付体验，IAP Kit制定了应用接入IAP Kit的设计规范，请开发者遵照执行，否则可能影响应用上架。具体要求如下：

## 界面设计规范

1. 请不要在应用商品购买页展示支付方式栏目信息，包括支付方式logo、支付方式名称（如“华为支付”、“鸿蒙支付”、“应用内支付”等）等信息。建议采用购买、订阅等按钮确认用户购买或订阅意愿。用户点击按钮确认购买或订阅意愿后，应用直接拉起IAP Kit收银台完成购买流程。
2. 建议应用在商品购买页拉起IAP Kit收银台时，展示加载动效，保证应用购买的流畅性，提升用户体验。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f4/v3/YJ-qILuiTYG5o-OqmfOXnA/zh-cn_image_0000002413014396.png?HW-CC-KV=V1&HW-CC-Date=20260403T152832Z&HW-CC-Expire=86400&HW-CC-Sign=5366929C3322A2AD3B9817DAF41D71F8AEAD75A5D5CF597894395CCE2E84E253 "点击放大")

## 接入限制

数字商品（虚拟商品）要求通过IAP Kit接入购买能力，不能独立对接支付宝、微信支付等三方支付，否则可能影响应用上架。