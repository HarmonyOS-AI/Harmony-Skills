**问题现象**

使用云存储上传文件失败，HiLog提示“404:Product does not exist”。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a2/v3/wYtKEgpoTVq6TBbesMmD8w/zh-cn_image_0000002440934292.png?HW-CC-KV=V1&HW-CC-Date=20260403T151750Z&HW-CC-Expire=86400&HW-CC-Sign=4BB1A48142435B077C50643572DD7653A629983E3B235D1B5DCC36A1CCE77186)

**解决措施**

此错误由云存储服务端返回，原因是云存储服务未开通。请[开通云存储服务](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cloudfoundation-enable-storage)。