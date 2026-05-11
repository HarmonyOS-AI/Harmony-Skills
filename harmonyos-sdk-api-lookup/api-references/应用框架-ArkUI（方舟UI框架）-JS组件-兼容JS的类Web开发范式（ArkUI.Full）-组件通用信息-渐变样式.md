说明

从API version 4开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。

组件普遍支持在style或css中设置可以平滑过渡两个或多个指定的颜色。

开发框架支持线性渐变（linear-gradient）和重复线性渐变（repeating-linear-gradient）两种渐变效果。

## 线性渐变/重复线性渐变

PhonePC/2in1TabletTVWearable

使用渐变样式，需要定义过渡方向和过渡颜色。

### 过渡方向

PhonePC/2in1TabletTVWearable

通过direction或者angle指定过渡方向。

* direction：指定方向进行渐变。
* angle：指定角度进行渐变。

收起

自动换行

深色代码主题

复制

```
1. // xxx.js
2. background: linear-gradient(direction/angle, color, color, ...);
3. background: repeating-linear-gradient(direction/angle, color, color, ...);
```

### 过渡颜色

PhonePC/2in1TabletTVWearable

支持以下四种方式：#ff0000、#ffff0000、rgb(255, 0, 0)、rgba(255, 0, 0, 1)，需要指定至少两种颜色。

**参数：**

展开

| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| direction | to <side-or-corner> <side-or-corner> = [left | right] | [top | bottom] | to bottom (由上到下渐变) | 否 | 指定过渡方向，如：to left (从右向左渐变) ；或者  to bottom right (从左上角到右下角)。 |
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

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/97/v3/Ood8SZg2RYe5xGs_PYaGGw/zh-cn_image_0000002568919476.png?HW-CC-KV=V1&HW-CC-Date=20260511T040120Z&HW-CC-Expire=86400&HW-CC-Sign=CE508855F95EF1413D18E853F05F37AC9740C7A4705A822CEE7F5754AF894007)
2. 45度夹角渐变。

   收起

   自动换行

   深色代码主题

   复制

   ```
   1. /* 45度夹角，从红色渐变到绿色 */
   2. background: linear-gradient(45deg, rgb(255,0,0),rgb(0, 255, 0));
   ```

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5a/v3/HvYYN8HKS8q1ZrCEYjmjUg/zh-cn_image_0000002599479019.png?HW-CC-KV=V1&HW-CC-Date=20260511T040120Z&HW-CC-Expire=86400&HW-CC-Sign=306A9DA81026EE726A3F5A6A6C19DA904DCACE560C84FC4E8748D3B5C851716A)
3. 设置方向从左向右渐变。

   收起

   自动换行

   深色代码主题

   复制

   ```
   1. /* 从左向右渐变，在距离左边90px和距离左边360px (600*0.6) 之间270px宽度形成渐变 */
   2. background: linear-gradient(to right, rgb(255,0,0) 90px, rgb(0, 255, 0) 60%);
   ```

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/28/v3/RI1NZfxCQE6WWmRJQpLUew/zh-cn_image_0000002568759828.png?HW-CC-KV=V1&HW-CC-Date=20260511T040120Z&HW-CC-Expire=86400&HW-CC-Sign=BAE86E0687AD33528105BEEFD1FE8EF213C0E0C7194EED91C5D3B844D9514CBD)
4. 重复渐变。

   收起

   自动换行

   深色代码主题

   复制

   ```
   1. /* 从左向右重复渐变，重复渐变区域30px（60-30）透明度0.5 */
   2. background: repeating-linear-gradient(to right, rgba(255, 255, 0, 1) 30px,rgba(0, 0, 255, .5) 60px);
   ```

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/65/v3/6MGBvt88SEaoCkOSVPdyMg/zh-cn_image_0000002599359071.png?HW-CC-KV=V1&HW-CC-Date=20260511T040120Z&HW-CC-Expire=86400&HW-CC-Sign=1DCAC5A77CB02A53BA57FACDC1EA3D8034CEE1440F0611F10D655C94F547F7D7)