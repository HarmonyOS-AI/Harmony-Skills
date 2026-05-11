## 功能介绍

此接口用于查询消耗型/非消耗型/非续期订阅商品的订单最新状态。

## 场景描述

在开发者服务器收到IAP服务端关键事件通知后，调用该接口获取消耗型/非消耗型/非续期订阅商品订单的最新状态。

## 接口原型

* **承载协议：** HTTPS POST
* **接口方向：** 开发者服务器 -> IAP服务器
* **接口URL：** {rootUrl}/order/harmony/v1/application/order/status/query

  说明：rootUrl具体请参见[站点信息](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/iap-rest-common-statement#站点信息)。
* **数据格式：**

  请求消息：Content-Type: application/json; charset=UTF-8

  响应消息：Content-Type: application/json; charset=UTF-8

## 请求参数

### Request Header

展开

| 参数 | 是否必选 | 参数类型 | 描述 |
| --- | --- | --- | --- |
| Content-Type | 是 | String | 取值为：application/json;charset=UTF-8 |
| Authorization | 是 | String | 认证信息，使用JWT进行鉴权，具体请参见[Authorization说明](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/iap-jwt-description#authorization说明)。 |

### Request Body

展开

| 参数 | 是否必选 | 参数类型 | 描述 |
| --- | --- | --- | --- |
| purchaseOrderId | 是 | String | 具体一笔订单中对应的购买订单号ID。最大长度256。 |
| purchaseToken | 是 | String | 商品的购买Token，发起购买和查询订单信息均会返回。最大长度256。 |

## 请求示例

更多语言及详细的代码示例，请参考[IAP Kit-Sample-ServerDemo](https://gitcode.com/HarmonyOS_Samples/iapkit-sample-serverdemo)。

收起

自动换行

深色代码主题

复制

```
1. POST /order/harmony/v1/application/order/status/query
2. Content-Type: application/json;charset=UTF-8
3. Authorization: Bearer ***.***.***
4. Accept: application/json
5. {
6. "purchaseToken": "***.*.***",
7. "purchaseOrderId": "***.***"
8. }
```

## 响应参数

### Response Header

展开

| 参数 | 是否必选 | 参数类型 | 描述 |
| --- | --- | --- | --- |
| Content-Type | 是 | String | 取值为：application/json;charset=UTF-8 |

### Response Body

展开

| 参数 | 是否必选 | 参数类型 | 描述 |
| --- | --- | --- | --- |
| responseCode | 是 | String | 返回码。  0：成功。  其他：失败，具体请参见[错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/iap-server-error-code)。 |
| responseMessage | 否 | String | 响应描述。 |
| jwsPurchaseOrder | 是 | String | 已购订单相关状态信息的JWS格式数据。可参见对[返回结果验签](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/iap-verifying-signature)处理，验签通过后解码获取相关订单状态信息，具体请参见表[PurchaseOrderPayload](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/iap-server-data-model#purchaseorderpayload)说明。 |

## 响应示例

收起

自动换行

深色代码主题

复制

```
1. HTTP/1.1 200 OK
2. Content-Type: application/json;charset=UTF-8
3. {
4. "responseCode": "0",
5. "responseMessage": "success",
6. "jwsPurchaseOrder": "***"
7. }
```