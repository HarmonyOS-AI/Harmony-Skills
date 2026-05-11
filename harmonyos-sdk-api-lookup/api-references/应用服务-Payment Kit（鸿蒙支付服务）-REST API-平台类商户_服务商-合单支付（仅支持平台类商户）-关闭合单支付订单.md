## 功能介绍

开发者可以调用该接口关闭已创建的合单支付订单。

## 场景描述

用户在开发者的应用中创建订单时，开发者服务器同步在华为支付创建订单完成。用户需要取消订单重新创建，开发者服务器在取消订单前可调用该接口关闭华为支付的订单。

## 接口原型

* **承载协议：** HTTPS POST
* **接口方向：** 开发者服务器 -> 华为支付服务器
* **接口URL：** https://petalpay-developer.cloud.huawei.com.cn/api/v1/partner/combined/orders/close

  说明：元服务预下单接口请使用<https://petalpay-developer.cloud.huawei.com.cn/api/v1/partner/combined/orders/close>
* **数据格式：**

  请求消息：Content-Type: application/json

  响应消息：Content-Type: application/json

## 请求参数

**Request Header**

展开

| 参数 | 是否必选 | 参数类型 | 描述 |
| --- | --- | --- | --- |
| Content-Type | 是 | String | 取值为：application/json; charset=UTF-8 |
| PayMercAuth | 是 | String | 取值为：[PayMercAuth](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/payment-model#paymercauth)的JSON字符串 |

**Request Body**

展开

| 参数 | 是否必选 | 类型 | 说明 |
| --- | --- | --- | --- |
| combinedMercOrderNo | 是 | String | 合单支付商户主订单号，由商户在创建合单支付订单时生成，商户需保证订单信息唯一性。最大长度46。 |

## 请求示例

收起

自动换行

深色代码主题

复制

```
1. POST /api/v1/partner/combined/orders/close HTTP/1.1
2. Content-Type: application/json;charset=UTF-8
3. PayMercAuth: {"callerId":"10132120***","traceId":"202305151026422776499","time":1684117602555,"authId":"120291744647139***","headerSign":"u+H1Oe3fXV9mGCES89XA7tSjp8+********************lOG7eAFfwjEWJu5JyvY5KunSeE6DiKs=","bodySign":"yWDtXOBqDoItPgHmF57L6U5G7F/*******************asPj10iUIFeaszpiRT2aQDaqLGaxvta6J5UxIUmAp+wGdV/juGEvQ="}
4. Accept: application/json
5. {
6. "combinedMercOrderNo": "czl00120240705***"
7. }
```

## 响应参数

**Response Header**

展开

| 参数 | 是否必选 | 参数类型 | 描述 |
| --- | --- | --- | --- |
| Content-Type | 是 | String | 取值为：application/json; charset=UTF-8 |

**Response Body**

展开

| 参数 | 是否必选 | 参数类型 | 描述 |
| --- | --- | --- | --- |
| resultCode | 是 | String | 返回码，“000000”表示成功，其他表示异常，请参见[错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/payment-error-code-rest#公共错误码说明)。 |
| resultDesc | 是 | String | 结果描述。 |
| subCode | 否 | String | 业务错误码。 |
| subDesc | 否 | String | 业务错误描述信息。 |
| sign | 是 | String | 签名值。用于开发者对响应报文进行防篡改验证。 |

## 响应示例

收起

自动换行

深色代码主题

复制

```
1. HTTP/1.1 200 OK
2. Content-Type: application/json; charset=UTF-8
3. {
4. "resultCode": "000000",
5. "resultDesc": "Success.",
6. "sign": "MEQCIEIWzdpziRyTi8vhwWHFu********************0YAMabeCgTDG77e+2XJItvq/ZkIcCN5/B20pQ=="
7. }
```

## 错误码

**resultCode**非400000的错误码请查看[公共错误码说明](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/payment-error-code-rest#公共错误码说明)。

展开

| **返回码** | **错误码** | **错误描述** | 解决方案 |
| --- | --- | --- | --- |
| 400000 | UNKNOW\_ERROR | 服务暂不可用，请稍后重试 | 稍后重试。 |
| 400000 | INVALID\_ARGUMENTS | 参数不合法 | 检查请求参数。 |
| 400000 | INVALID\_MERCNO | 无效商户号 | 检查入参商户号是否正确。 |
| 400000 | MERC\_ORDER\_NOT\_EXIST | 商户订单号不存在 | 检查入参订单号是否正确。 |