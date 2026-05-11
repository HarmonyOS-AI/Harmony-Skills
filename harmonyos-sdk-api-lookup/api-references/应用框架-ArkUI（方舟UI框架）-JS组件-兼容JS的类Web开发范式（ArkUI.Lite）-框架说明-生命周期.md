## 应用生命周期

PhonePC/2in1TabletTVWearableLite Wearable

在app.js中可以定义如下应用生命周期函数：

展开

| 属性 | 类型 | 描述 | 触发时机 |
| --- | --- | --- | --- |
| onCreate | () => void | 应用创建 | 当应用创建时调用。 |
| onDestroy | () => void | 应用销毁 | 当应用退出时触发。 |

## 页面生命周期

PhonePC/2in1TabletTVWearableLite Wearable

在页面JS文件中可以定义如下页面生命周期函数：

说明

请注意不要在生命周期函数中执行复杂耗时操作，以避免影响页面切换性能。

展开

| 属性 | 类型 | 描述 | 触发时机 |
| --- | --- | --- | --- |
| onInit | () => void | 页面初始化 | 页面数据初始化完成时触发，只触发一次。 |
| onReady | () => void | 页面创建完成 | 页面创建完成时触发，只触发一次。 |
| onShow | () => void | 页面显示 | 页面显示时触发。 |
| onHide | () => void | 页面消失 | 页面消失时触发。 |
| onDestroy | () => void | 页面销毁 | 页面销毁时触发。 |

页面A的生命周期接口的调用顺序：

* 打开页面A：onInit() -> onReady() -> onShow()
* 在页面A打开页面B：onHide() -> onDestroy()
* 从页面B返回页面A：onInit() -> onReady() -> onShow()
* 退出页面A：onHide() -> onDestroy()
* 页面隐藏到后台运行：onHide()
* 页面从后台运行恢复到前台：onShow()

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8/v3/KvlyR9yAR7em3lnYA1Z9Vw/zh-cn_image_0000002599359227.png?HW-CC-KV=V1&HW-CC-Date=20260511T040614Z&HW-CC-Expire=86400&HW-CC-Sign=D0EC8E3B5C4999D3212CBCF1C314CBDB590A139C34420B32E05E467A72D99368)