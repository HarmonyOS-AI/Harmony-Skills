本模块提供为当前页面设置旋转表冠事件监听器的能力，支持注册页面级的旋转表冠事件监听器。仅支持配备旋转表冠的设备。

说明

本模块首批接口从API version 24开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

## setMonitorForCrownEvents

PhonePC/2in1TabletTVWearable

setMonitorForCrownEvents(handler: Function): void

为当前页面设置旋转表冠事件监听器，当旋转表冠事件触发时，监听器会触发回调。

该监听器在发生[页面路由](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-router)时将自动移除，使用[clearMonitorForCrownEvents()](/consumer/cn/doc/harmonyos-references/js-components-common-monitorcrownevents#clearmonitorforcrownevents)接口可手动移除。

说明

* 当发生页面路由时，监听器将自动移除，因此建议在页面的onShow[生命周期](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/js-framework-lifecycle)回调中调用此接口。
* 每个页面仅支持设置一个监听器，新注册的监听器会覆盖之前的监听器，系统将使用最后一次调用此接口时传入的监听器。
* 请勿在[app.js](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/js-framework-js-file)中使用此函数，其行为未定义。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**模型约束：** 此接口仅可在FA模型下使用。

**参数：**

展开

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| handler | Function | 是 | 旋转表冠事件发生后执行该回调。回调格式为(event)=>{ return false/true; }。  返回true时，旋转表冠事件不再分发给获焦的组件。  返回false时，旋转表冠事件会继续分发给获焦组件。当回调的返回值异常时，例如返回值为undefined或无返回值，默认取值为false。  可通过入参获取旋转表冠事件信息，事件信息请参见**表1 CrownEvent对象属性列表**。 |

**表1** CrownEvent对象属性列表

展开

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| timestamp | number | 否 | 否 | 时间戳。 |
| angularVelocity | number | 否 | 否 | 旋转角速度，表示每秒转的角度。  逆时针旋转表冠时旋转角速度为正数，顺时针旋转表冠时旋转角速度为负数。  单位：度/s |
| degree | number | 否 | 否 | 相对旋转角度。  逆时针旋转表冠时相对旋转角度为正数，顺时针旋转表冠时相对旋转角度为负数。  单位：度。  取值范围：[-360, 360] |

## clearMonitorForCrownEvents

PhonePC/2in1TabletTVWearable

clearMonitorForCrownEvents(): void

清除当前页面的旋转表冠事件监听器。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**模型约束：** 此接口仅可在FA模型下使用。

## 示例

PhonePC/2in1TabletTVWearable

### 示例1（设置旋转表冠事件监听器）

PhonePC/2in1TabletTVWearable

该示例介绍了，如何通过[setMonitorForCrownEvents](/consumer/cn/doc/harmonyos-references/js-components-common-monitorcrownevents#setmonitorforcrownevents)为页面设置旋转表冠事件监听器，并通过监听器的回调返回值控制List组件是否响应旋转表冠事件。

从API version 24开始，新增[setMonitorForCrownEvents](/consumer/cn/doc/harmonyos-references/js-components-common-monitorcrownevents#setmonitorforcrownevents)接口和[clearMonitorForCrownEvents](/consumer/cn/doc/harmonyos-references/js-components-common-monitorcrownevents#clearmonitorforcrownevents)接口。

收起

自动换行

深色代码主题

复制

```
1. /* xxx.css */
2. .container {
3. flex-direction: column;
4. width: 100%;
5. margin-top: 10px;
6. align-items: center;
7. }
8. .title {
9. text-align: center;
10. font-size: 50px;
11. font-weight: 500;
12. margin-left: 12px;
13. }

15. .text {
16. font-size: 50px;
17. font-weight: 500;
18. margin-left: 200px;
19. }
20. .listItem {
21. width: 100%;
22. height: 100px;
23. line-height: 60px;
24. border-bottom: 1px solid #DEDEDE;
25. font-size: 20px;
26. }
27. .btn{
28. width: 380px;
29. height: 100px;
30. font-size: 36px;
31. margin: 10px;
32. }
```

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div class="container">
3. <text class="title">
4. {{ title }}
5. </text>
6. <button class="btn" type="capsule" value="clearMonitor" onclick="clearMonitor"></button>
7. <button class="btn" type="capsule" value="flagChange" onclick="flagChange"></button>
8. <list class="list" focusable="true" scrollpage="true">
9. <list-item for="{{ array }}" class="listItem">
10. <text class="text" onclick="toggleShow" show="{{ visible }}">{{ $item.value }}</text>
11. </list-item>
12. </list>
13. </div>
```

收起

自动换行

深色代码主题

复制

```
1. // xxx.js
2. export default {
3. data: {
4. title: 'TestPage',
5. count: 0,
6. display: true,
7. array: [
8. { 'value': 'TestListItem0' },
9. { 'value': 'TestListItem1' },
10. { 'value': 'TestListItem2' },
11. { 'value': 'TestListItem3' },
12. { 'value': 'TestListItem4' },
13. { 'value': 'TestListItem5' },
14. { 'value': 'TestListItem6' },
15. { 'value': 'TestListItem7' },
16. { 'value': 'TestListItem8' },
17. { 'value': 'TestListItem9' },
18. ],
19. flag: false
20. },
21. onShow() {
22. setMonitorForCrownEvents((event) => {
23. console.info('event timestamp is: ', event.timeStamp, ', angularVelocity is: ',
24. event.angularVelocity);
25. console.info('rotate is: ', event.rotate);
26. return this.flag;
27. })
28. },
29. flagChange() {
30. this.flag = !this.flag;
31. },
32. clearMonitor() {
33. clearMonitorForCrownEvents();
34. }
35. }
```