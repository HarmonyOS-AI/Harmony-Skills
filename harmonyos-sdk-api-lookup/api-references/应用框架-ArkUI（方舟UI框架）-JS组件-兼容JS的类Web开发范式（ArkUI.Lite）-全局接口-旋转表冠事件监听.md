本模块提供为当前页面设置旋转表冠事件监听器的能力，支持注册页面级的旋转表冠事件监听器。仅支持配备旋转表冠的设备。

说明

本模块首批接口从API version 24开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

## setMonitorForCrownEvents

PhonePC/2in1TabletTVWearableLite Wearable

setMonitorForCrownEvents(handler: Function): void

为当前页面设置旋转表冠事件监听器，当旋转表冠事件触发时，监听器会触发回调。

该监听器在发生[页面路由](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-router)时将自动移除，使用[clearMonitorForCrownEvents()](/consumer/cn/doc/harmonyos-references/js-lite-common-monitorcrownevents#clearmonitorforcrownevents)接口可手动移除。

说明

* 当发生页面路由时，监听器将自动移除，因此建议在页面的onShow[生命周期](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-lite-framework-lifecycle)回调中调用此接口。
* 每个页面仅支持设置一个监听器，新注册的监听器会覆盖之前的监听器，系统将使用最后一次调用此接口时传入的监听器。
* 请勿在[app.js](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/js-framework-js-file)中使用此函数，其行为未定义。

**系统能力：** SystemCapability.ArkUI.ArkUI.Lite

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

PhonePC/2in1TabletTVWearableLite Wearable

clearMonitorForCrownEvents(): void

清除当前页面的旋转表冠事件监听器。

**系统能力：** SystemCapability.ArkUI.ArkUI.Lite

**模型约束：** 此接口仅可在FA模型下使用。

## 示例

PhonePC/2in1TabletTVWearableLite Wearable

### 示例1（设置旋转表冠事件监听器）

PhonePC/2in1TabletTVWearableLite Wearable

该示例介绍了，如何通过[setMonitorForCrownEvents](/consumer/cn/doc/harmonyos-references/js-lite-common-monitorcrownevents#setmonitorforcrownevents)为页面设置旋转表冠事件监听器，并通过监听器的回调返回值控制Slider组件是否响应旋转表冠事件。

从API version 24开始，新增[setMonitorForCrownEvents](/consumer/cn/doc/harmonyos-references/js-lite-common-monitorcrownevents#setmonitorforcrownevents)接口和[clearMonitorForCrownEvents](/consumer/cn/doc/harmonyos-references/js-lite-common-monitorcrownevents#clearmonitorforcrownevents)接口。

收起

自动换行

深色代码主题

复制

```
1. /* xxx.css */
2. .container {
3. flex-direction: column;
4. justify-content: center;
5. align-items: center;
6. width: 100%;
7. height: 100%;
8. }
9. .title {
10. width: 80%;
11. font-size: 30px;
12. text-align: center;
13. border-width: 2px;
14. border-color: aliceblue;
15. margin: 5px;
16. }
```

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div class="container">
3. <text class="title" onclick="flagChange">flagChange</text>
4. <text class="title" onclick="clearMonitor">clearMonitor</text>
5. <text>slider start value is {{startValue}}</text>
6. <text>slider current value is {{currentValue}}</text>
7. <text>slider end value is {{endValue}}</text>
8. <slider min="0" max="100" value="{{value}}" ref="sliderObj"
9. onchange="setValue" style="margin-top: 10%; width: 80%;height: 1%"></slider>
10. </div>
```

收起

自动换行

深色代码主题

复制

```
1. // xxx.js
2. export default {
3. data: {
4. value: 0,
5. startValue: 0,
6. currentValue: 0,
7. endValue: 100,
8. flag: false
9. },
10. onShow() {
11. this.$refs.sliderObj.rotation({ focus: true });
12. setMonitorForCrownEvents((event) => {
13. console.error('event.timestamp: ' + event.timestamp + '\n' + 'event.angularVelocity: ' +
14. event.angularVelocity + '\n' + 'event.degree:' + event.degree);
15. return this.flag;
16. })
17. },
18. setValue(e) {
19. this.currentValue = e.value;
20. },
21. clearMonitor() {
22. clearMonitorForCrownEvents();
23. },
24. flagChange() {
25. this.flag = !this.flag;
26. }
27. }
```