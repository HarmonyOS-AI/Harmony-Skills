组件普遍支持在style或css中设置渐变样式，可以平稳过渡两个或多个指定的颜色。

说明

从API version 8开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。

开发框架支持线性渐变 (linear-gradient)和重复线性渐变 (repeating-linear-gradient)两种渐变效果。

## 线性渐变/重复线性渐变

PhonePC/2in1TabletTVWearable

使用渐变样式，需要定义过渡方向和过渡颜色。

### 过渡方向

PhonePC/2in1TabletTVWearable

通过direction或者angle指定过渡方向。

* direction：进行方向渐变。
* angle：进行角度渐变。

收起

自动换行

深色代码主题

复制

```
1. background: linear-gradient(direction/angle, color, color, ...);
2. background: repeating-linear-gradient(direction/angle, color, color, ...);
```

### 过渡颜色

PhonePC/2in1TabletTVWearable

支持以下四种方式：#ff0000、#ffff0000、rgb(255, 0, 0)、rgba(255, 0, 0, 1)，需要指定至少两种颜色。

**参数：**

展开

| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| direction | to <side-or-corner> <side-or-corner> = [left | right] || [top | bottom] | to bottom (由上到下渐变) | 否 | 指定过渡方向，如：to left (从右向左渐变) ，或者to bottom right (从左上角到右下角)。 |
| angle | <deg> | 180deg | 否 | 指定过渡方向，以元素几何中心为坐标原点，水平方向为X轴，angle指定了渐变线与Y轴的夹角(顺时针方向)。 |
| color | <color> [<length>|<percentage>] | - | 是 | 定义使用渐变样式区域内颜色的渐变效果。 |

**示例：**

1. 默认渐变方向为从上向下渐变。

   收起

   自动换行

   深色代码主题

   复制

   ```
   1. #gradient {
   2. height: 300px;
   3. width: 600px;
   4. /* 从顶部开始向底部由红色向绿色渐变 */
   5. background: linear-gradient(red, #00ff00);
   6. }
   ```

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/38/v3/DS4iSAw1QgKMtASmz7cAUg/zh-cn_image_0000002568760078.png?HW-CC-KV=V1&HW-CC-Date=20260511T040832Z&HW-CC-Expire=86400&HW-CC-Sign=1B9E957302EFBA6C41B39E3681C062249BFE918F55FDB8505C3FEA29F06ABD1E)
2. 45度夹角渐变。

   收起

   自动换行

   深色代码主题

   复制

   ```
   1. /* 45度夹角，从红色渐变到绿色 */
   2. background: linear-gradient(45deg, rgb(255, 0, 0),rgb(0, 255, 0));
   ```

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/33/v3/2XjutreSRWKNxrSg8ZtRgg/zh-cn_image_0000002599359319.png?HW-CC-KV=V1&HW-CC-Date=20260511T040832Z&HW-CC-Expire=86400&HW-CC-Sign=B7EA61ADAD23BBBD43E2D7C44AC5F48B55AA858320955695CB621C8C777E1404)
3. 设置方向从左向右渐变。

   收起

   自动换行

   深色代码主题

   复制

   ```
   1. /* 从左向右渐变，在距离左边90px和距离左边360px (600*0.6) 之间270px宽度形成渐变 */
   2. background: linear-gradient(to right, rgb(255, 0, 0) 90px, rgb(0, 255, 0) 60%);
   ```

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6b/v3/tmL6aYgMQCybbVLOiFTIag/zh-cn_image_0000002568919726.png?HW-CC-KV=V1&HW-CC-Date=20260511T040832Z&HW-CC-Expire=86400&HW-CC-Sign=D3E9F27FB94A8E6B1197CEBA4554826D4626FC3D53A1516A34CD5BB1E148FB73)
4. 重复渐变。

   收起

   自动换行

   深色代码主题

   复制

   ```
   1. /* 从左向右重复渐变，重复渐变区域30px（60-30）透明度0.5 */
   2. background: repeating-linear-gradient(to right, rgba(255, 255, 0, 1) 30vp,rgba(0, 0, 255, .5) 60vp);
   ```

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c4/v3/_tOvSnpCRZ-3veaeqKlAwA/zh-cn_image_0000002599479269.png?HW-CC-KV=V1&HW-CC-Date=20260511T040832Z&HW-CC-Expire=86400&HW-CC-Sign=F07BCD05CA4F58E461BF6E4303DCB46FCD69865C1752424D9FC590BA08A432F3)