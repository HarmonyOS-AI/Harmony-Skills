**问题现象**

通过“使用指定的实例”方式初始化云存储实例时，调用业务接口（如调用uploadFile接口上传文件）失败，出现如下错误提示：

* app日志提示“"state":65”

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b8/v3/cvUTX9PVQ8GRWnUVRkYDfw/zh-cn_image_0000002474214461.png?HW-CC-KV=V1&HW-CC-Date=20260403T151758Z&HW-CC-Expire=86400&HW-CC-Sign=3712F341FF2E773A2523B2CB708ACC640CE735CB0BD913511FB56798F15AFF34)
* upload进程的日志提示“404 Not Found”（通过设置“No filters”模式、过滤“C01C50”关键字查找）

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/be/v3/7Xhwk08cROSX2BANtQrErA/zh-cn_image_0000002440774624.png?HW-CC-KV=V1&HW-CC-Date=20260403T151758Z&HW-CC-Expire=86400&HW-CC-Sign=66EA43AD0DA4CB028418AB902258F164DF2FC8736B7753483009D4F99E2929CB "点击放大")

**解决措施**

出现此问题，原因是当前云侧不存在该存储实例，或传入的存储实例名称错误。

请检查您传入的存储实例名称，确保云侧存在该存储实例，且传入的存储实例名称与云侧存储实例名称完全一致。