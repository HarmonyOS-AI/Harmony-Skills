param是为开发人员提供用于操作系统参数的工具，该工具只支持标准系统。

## 环境要求

* 获取hdc工具，执行hdc shell。
* 正常连接设备。

## param工具命令列表

展开

| 选项 | 说明 |
| --- | --- |
| -h | 获取param支持的命令。 |
| ls [-r] [name] | 显示匹配name的系统参数信息。带"-r"则根据参数权限获取信息，不带"-r"则直接获取参数信息。 |
| get [name] | 获取指定name系统参数的值；若不指定任何name，则返回所有系统参数。 |
| set name value | 设置指定name系统参数的值为value。 |
| wait name [value] [timeout] | 同步等待指定name系统参数与指定值value匹配。value支持模糊匹配，如"\*"表示任何值，"val\*"表示只匹配前三个val字符。timeout为等待时间（单位：s），不设置则默认为30s。 |
| save | 保存persist参数到工作空间。 |

## 获取param支持的命令

* 获取param支持的命令，命令格式如下：

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. param -h
  ```

## 获取系统参数信息

* 显示匹配name的系统参数信息，命令格式如下：

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. param ls [-r] [name]
  ```

  **示例**

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/86/v3/v_J3CKExQOWk5uyuPiS4Vg/zh-cn_image_0000002566708737.png?HW-CC-KV=V1&HW-CC-Date=20260403T142744Z&HW-CC-Expire=86400&HW-CC-Sign=E5E2AA5B38AFC4E701A9C4029FFD9FBB203723CD58DD92732C309CB982C83975)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b2/v3/tN7FEl6XQOWiOlhTvA-T2g/zh-cn_image_0000002535788940.png?HW-CC-KV=V1&HW-CC-Date=20260403T142744Z&HW-CC-Expire=86400&HW-CC-Sign=F84B4EE695285E0EC95F77A293A2A9E0BE3C1D9BA809A8CA7F4C41F2BFC83758)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1e/v3/u895ibn0Tl-5RbAe7cbFaA/zh-cn_image_0000002535948888.png?HW-CC-KV=V1&HW-CC-Date=20260403T142744Z&HW-CC-Expire=86400&HW-CC-Sign=44073FD96A8FE88D9E5C12EF1106E74AFC2A66E31B2F3C4CC56384B139E99813)

## 获取系统参数的值

* 获取指定name系统参数的值，命令格式如下：

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. param get [name]
  ```

  **示例**

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1c/v3/KsCZGFDSSjSVvMkyJTRv5w/zh-cn_image_0000002566868719.png?HW-CC-KV=V1&HW-CC-Date=20260403T142744Z&HW-CC-Expire=86400&HW-CC-Sign=30C68E30E0A328B8D90D4C30FB16EEE1F48D5CD86480FF3512CBA7E5E7CBB028)

## 设置系统参数的值

* 设置指定name系统参数的值为value，命令格式如下：

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. param set name value
  ```

  **示例**

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/07/v3/czBRtB4iSL-o8lC24xS25Q/zh-cn_image_0000002566708739.png?HW-CC-KV=V1&HW-CC-Date=20260403T142744Z&HW-CC-Expire=86400&HW-CC-Sign=D87AFFE6D6459215535EF3C299BE40030F66A8C3EB018DC58188109AA6AD1D03)

## 等待系统参数值匹配

* 同步等待指定name系统参数与指定值value匹配，命令格式如下：

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. param wait name [value] [timeout]
  ```

  **示例**

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4/v3/ZDhmX2ymQJ-TMBBS2KEnxw/zh-cn_image_0000002535788942.png?HW-CC-KV=V1&HW-CC-Date=20260403T142744Z&HW-CC-Expire=86400&HW-CC-Sign=EF968784A1A3FEB276E63D0DF1D2724F6EEA302873EE8EAF5CD7FA6B09D49A47)

## 保存persist(可持久化)参数

* 保存persist(可持久化)参数到工作空间，命令格式如下：

  收起

  自动换行

  深色代码主题

  复制

  ```
  1. param save
  ```

  **示例**

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/58/v3/ypDOz6s_Sn-vFUUcHRpTbA/zh-cn_image_0000002535948890.png?HW-CC-KV=V1&HW-CC-Date=20260403T142744Z&HW-CC-Expire=86400&HW-CC-Sign=16946A6804E08454E44C76EE055157F1AFC08EF4D72B0091B0F34495FA3B219D)