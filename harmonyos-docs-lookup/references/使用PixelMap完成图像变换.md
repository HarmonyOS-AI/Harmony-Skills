图片处理指对PixelMap进行相关的操作，如获取图片信息、裁剪、缩放、偏移、旋转、翻转、设置透明度、读写像素数据等。图片处理主要包括图像变换、[位图操作](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/image-pixelmap-operation)，本文介绍图像变换。

## 开发步骤

图像变换相关API的详细介绍请参见[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-pixelmap)。

1. 完成[图片解码](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/image-decoding)，获取PixelMap对象。
2. 获取图片信息。

   收起

   自动换行

   深色代码主题

   复制

   ```
   1. import { BusinessError } from '@kit.BasicServicesKit';
   2. // 获取图片大小。
   3. pixelMap.getImageInfo().then( (info : image.ImageInfo) => {
   4. console.info('info.width = ' + info.size.width);
   5. console.info('info.height = ' + info.size.height);
   6. }).catch((err : BusinessError) => {
   7. console.error("Failed to obtain the image pixel map information.And the error is: " + err);
   8. });
   ```
3. 进行图像变换操作。

   原图：

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/95/v3/jqaVLejzQwCHJuZC2lstQg/zh-cn_image_0000002535948950.jpeg?HW-CC-KV=V1&HW-CC-Date=20260403T144107Z&HW-CC-Expire=86400&HW-CC-Sign=5F11F783393F2DA69DE1362F42405AFCEA44C030B6F900CD4F927ACF6AE3B403)

   * 裁剪

     收起

     自动换行

     深色代码主题

     复制

     ```
     1. // x：裁剪起始点横坐标0。
     2. // y：裁剪起始点纵坐标0。
     3. // height：裁剪高度400，方向为从上往下（裁剪后的图片高度为400）。
     4. // width：裁剪宽度400，方向为从左到右（裁剪后的图片宽度为400）。
     5. pixelMap.crop({x: 0, y: 0, size: { height: 400, width: 400 } });
     ```

     ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b0/v3/fDO28p9GRjKkNWF-4iLCrg/zh-cn_image_0000002566868781.jpeg?HW-CC-KV=V1&HW-CC-Date=20260403T144107Z&HW-CC-Expire=86400&HW-CC-Sign=49A7CC81B45D483AE88D4547C6220FF681B6D2AC94B38799B6EC2D8FA1141F34)
   * 缩放

     收起

     自动换行

     深色代码主题

     复制

     ```
     1. // 宽为原来的0.5。
     2. // 高为原来的0.5。
     3. pixelMap.scale(0.5, 0.5);
     ```

     ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b8/v3/PZA52ErPQ_GOmX3X1UeB_A/zh-cn_image_0000002566708801.jpeg?HW-CC-KV=V1&HW-CC-Date=20260403T144107Z&HW-CC-Expire=86400&HW-CC-Sign=EA4D8A34AFB740E96050CEA6CBD72F04241B6CC871CCE04C76E26C18EA94B511)
   * 偏移

     收起

     自动换行

     深色代码主题

     复制

     ```
     1. // 向下偏移100。
     2. // 向右偏移100。
     3. pixelMap.translate(100, 100);
     ```

     ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/0a/v3/Kr-3zC8eQc6qDsL6pH7Qhw/zh-cn_image_0000002535789006.jpeg?HW-CC-KV=V1&HW-CC-Date=20260403T144107Z&HW-CC-Expire=86400&HW-CC-Sign=14094ED6BDDAB20FE94AE71D6813F62825DA15006FEBCB6690D9568C84D6D804)
   * 旋转

     收起

     自动换行

     深色代码主题

     复制

     ```
     1. // 顺时针旋转90°。
     2. pixelMap.rotate(90);
     ```

     ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/93/v3/iPzQJ-nvRNWc9vfzf2ApAw/zh-cn_image_0000002535948952.jpeg?HW-CC-KV=V1&HW-CC-Date=20260403T144107Z&HW-CC-Expire=86400&HW-CC-Sign=D615C99BD781C22211C601A552BDC6C5FEACC381DB6F0E221FAAA32F9F2AC4E7)
   * 翻转

     收起

     自动换行

     深色代码主题

     复制

     ```
     1. // 垂直翻转。
     2. pixelMap.flip(false, true);
     ```

     ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b3/v3/DZl7grX2Ra2wPV7xscKxrg/zh-cn_image_0000002566868783.jpeg?HW-CC-KV=V1&HW-CC-Date=20260403T144107Z&HW-CC-Expire=86400&HW-CC-Sign=E86809210D24D23A6F9132B470199FC84AF6E23D380F73A6A8BA1199837543CA)

     收起

     自动换行

     深色代码主题

     复制

     ```
     1. // 水平翻转。
     2. pixelMap.flip(true, false);
     ```

     ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8d/v3/tXDYc2gmQSOQJVZz9IC0Ew/zh-cn_image_0000002566708803.jpeg?HW-CC-KV=V1&HW-CC-Date=20260403T144107Z&HW-CC-Expire=86400&HW-CC-Sign=B1C24B5139A671305C9929FF65EC75893C29D47289B40BDCC055774A96E52545)
   * 透明度

     收起

     自动换行

     深色代码主题

     复制

     ```
     1. // 透明度0.5。
     2. pixelMap.opacity(0.5);
     ```

     ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b0/v3/MYRU1cx-Q4i3sFXKPSg1Mg/zh-cn_image_0000002535789008.png?HW-CC-KV=V1&HW-CC-Date=20260403T144107Z&HW-CC-Expire=86400&HW-CC-Sign=99927DC7DEE0380239799AF4B1448FADE86B1D76A9A7E7FE453B8FFB283AB8FB)

## 示例代码

* [拼图](https://gitcode.com/HarmonyOS_Samples/game-puzzle)