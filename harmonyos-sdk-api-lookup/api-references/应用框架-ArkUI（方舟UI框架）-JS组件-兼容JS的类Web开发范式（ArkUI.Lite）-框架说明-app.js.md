## 应用生命周期4+

PhonePC/2in1TabletTVWearableLite Wearable

每个应用可以在app.js自定义应用级生命周期的实现逻辑，包括：

* onCreate：在应用生成时被调用的生命周期函数。
* onDestroy：在应用销毁时被调用的生命周期函数。

以下示例仅在生命周期函数中打印对应日志：

收起

自动换行

深色代码主题

复制

```
1. // app.js
2. export default {
3. onCreate() {
4. console.info('Application onCreate');
5. },
6. onDestroy() {
7. console.info('Application onDestroy');
8. },
9. }
```

## 应用对象10+

PhonePC/2in1TabletTVWearableLite Wearable

展开

| 属性 | 类型 | 描述 |
| --- | --- | --- |
| getApp | Function | 提供getApp()全局方法，可以在页面js文件中获取app.js中暴露的数据对象。 |

说明

应用对象是全局数据，其在整个应用消亡之前都会一直占用JS内存。尽管应用对象可为不同页面共享数据提供便利，但因为小型设备本身内存比较小，也应谨慎使用。如果过度使用，则容易造成应用在进入复杂page页面时，内存不够而出现异常。

示例如下：

在 app.js 中声明应用对象:

收起

自动换行

深色代码主题

复制

```
1. // app.js
2. export default {
3. data: {
4. test: "by getApp"
5. },
6. onCreate() {
7. console.info('Application onCreate');
8. },
9. onDestroy() {
10. console.info('Application onDestroy');
11. },
12. };
```

在具体的页面中访问应用对象：

收起

自动换行

深色代码主题

复制

```
1. // index.js
2. export default {
3. data: {
4. title: ""
5. },
6. onInit() {
7. if (typeof getApp !== 'undefined') {
8. var appData = getApp().data;
9. if (typeof appData !== 'undefined') {
10. this.title = appData.name; // read from app data
11. }
12. }
13. },
14. clickHandler() {
15. if (typeof getApp !== 'undefined') {
16. var appData = getApp().data;
17. if (typeof appData !== 'undefined') {
18. appData.name = this.title; // write to app data
19. }
20. }
21. }
22. }
```

说明

为了应用可在不支持getApp的低版本上正常运行，代码中应进行兼容性处理，即在使用getApp前先判断其是否可用。