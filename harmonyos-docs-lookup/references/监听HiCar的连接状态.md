## 场景介绍

生态应用可以通过监听智慧出行连接状态接口获取连接信息，适配HiCar业务（如：应用流转）。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ed/v3/vj8K9ozHQ92U6skf0e9UcQ/zh-cn_image_0000002481508030.png?HW-CC-KV=V1&HW-CC-Date=20260403T141422Z&HW-CC-Expire=86400&HW-CC-Sign=B883D92B694A515E70B009197219E1A8B0ABC5CA246E8C2233365793E195E37A "点击放大")

## 接口说明

监听HiCar的连接状态使用接口如下：

展开

| 接口名 | 描述 |
| --- | --- |
| [on('smartMobilityStatus')](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/car-smartmobilitycommon#section6447182819393) | 注册智慧出行连接状态的监听。 |
| [off('smartMobilityStatus')](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/car-smartmobilitycommon#section1962104712398) | 取消注册智慧出行连接状态的监听。 |

## 开发流程

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f4/v3/1GglF9HwSdatf-vj3eAIyw/zh-cn_image_0000002513711447.png?HW-CC-KV=V1&HW-CC-Date=20260403T141422Z&HW-CC-Expire=86400&HW-CC-Sign=1E27C36D4FB19D70184765D8531AE921694DB52D370206B91ABBA967B46C77F2 "点击放大")

## 开发步骤

1. 导入相关模块。

   收起

   自动换行

   深色代码主题

   复制

   ```
   1. import { smartMobilityCommon } from '@kit.CarKit';
   2. import { hilog } from '@kit.PerformanceAnalysisKit';
   ```
2. 监听HiCar连接状态。

   应用在适配HiCar时，需要注册智慧出行连接状态的监听，用于对应的业务逻辑处理。

   收起

   自动换行

   深色代码主题

   复制

   ```
   1. try {
   2. // 获取SmartMobilityAwareness实例
   3. let awareness: smartMobilityCommon.SmartMobilityAwareness = smartMobilityCommon.getSmartMobilityAwareness();

   5. // 业务类型
   6. let types: smartMobilityCommon.SmartMobilityType[] = [smartMobilityCommon.SmartMobilityType.HICAR];

   8. // 智慧出行连接状态回调函数
   9. const callBack = (info: smartMobilityCommon.SmartMobilityInfo) => {
   10. hilog.info(0x0000, 'testTag', 'Received smart mobility info: ', JSON.stringify(info));
   11. if (info.status === smartMobilityCommon.SmartMobilityStatus.RUNNING) {
   12. // 连接成功通知
   13. } else if (info.status === smartMobilityCommon.SmartMobilityStatus.IDLE) {
   14. // 断开连接通知
   15. }
   16. };

   18. // 注册智慧出行连接状态的监听
   19. awareness.on('smartMobilityStatus', types, callBack);
   20. } catch (e) {
   21. // 捕获接口调用异常时的错误码并做相应处理
   22. hilog.error(0x0000, 'testTag', `on smart mobility status listener error, error code: ${e?.code}`);
   23. }
   ```
3. 取消监听。

   在应用退出时，需要取消之前注册的监听，减少系统不必要的资源消耗。

   收起

   自动换行

   深色代码主题

   复制

   ```
   1. try {
   2. // 获取SmartMobilityAwareness实例
   3. let awareness: smartMobilityCommon.SmartMobilityAwareness = smartMobilityCommon.getSmartMobilityAwareness();
   4. // 业务类型
   5. let types: smartMobilityCommon.SmartMobilityType[] = [smartMobilityCommon.SmartMobilityType.HICAR];
   6. // 取消注册智慧出行连接状态的监听
   7. awareness.off('smartMobilityStatus', types);
   8. } catch (e) {
   9. // 捕获接口调用异常时的错误码并做相应处理
   10. hilog.error(0x0000, 'testTag', `off smart mobility status listener error, error code: ${e?.code}`);
   11. }
   ```