展示网页内容的组件。

说明

该组件从API version 6开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。

## 权限列表

PhonePC/2in1TabletTVWearable

访问在线网页时需添加网络权限：ohos.permission.INTERNET。

## 约束

PhonePC/2in1TabletTVWearable

web组件不跟随转场动画。一个页面仅支持一个web组件。

## 子组件

PhonePC/2in1TabletTVWearable

不支持。

## 属性

PhonePC/2in1TabletTVWearable

展开

| 名称 | 参数类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| src | string | - | 否 | 设置需要显示网页的地址，网址的域名必须为https协议且经过ICP备案。不传入时不显示网页内容。 |
| id | string | - | 否 | 组件的唯一标识。当需要通过JS代码调用组件方法（如reload）时必填，不传入时无法通过$element获取组件实例。 |

## 样式

PhonePC/2in1TabletTVWearable

不支持通用样式设置。

## 事件

PhonePC/2in1TabletTVWearable

仅支持如下事件：

展开

| 名称 | 参数 | 描述 |
| --- | --- | --- |
| pagestart | {url: string} | 加载网页时触发。 |
| pagefinish | {url: string} | 网页加载结束时触发。 |
| error | {url: string, errorCode: number, description: string} | 加载网页出现错误时触发或打开网页出错时触发。错误码的详细介绍请参见[Webview错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-webview)、[通用错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)。 |

## 方法

PhonePC/2in1TabletTVWearable

仅支持如下方法：

展开

| 名称 | 参数 | 描述 |
| --- | --- | --- |
| reload | - | 重新加载页面。 |

## 示例

PhonePC/2in1TabletTVWearable

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div style="height: 500px; width: 500px; flex-direction: column;">
3. <button onclick="reloadWeb">click to reload</button>
4. <web src="www.example.com" id="web" onpagestart="pageStart" onpagefinish="pageFinish" on:error="pageError"></web>
5. </div>
```

收起

自动换行

深色代码主题

复制

```
1. // xxx.js
2. export default {
3. reloadWeb() {
4. this.$element('web').reload()
5. },

7. pageStart: function(e) {
8. console.info('web pageStart: ' + e.url)
9. },

11. pageFinish: function(e) {
12. console.info('web pageFinish: ' + e.url)
13. },

15. pageError: function(e) {
16. console.info('web pageError url: ' + e.url)
17. console.info('web pageError errorCode: ' + e.errorCode)
18. console.info('web pageError description: ' + e.description)
19. }
20. }
```