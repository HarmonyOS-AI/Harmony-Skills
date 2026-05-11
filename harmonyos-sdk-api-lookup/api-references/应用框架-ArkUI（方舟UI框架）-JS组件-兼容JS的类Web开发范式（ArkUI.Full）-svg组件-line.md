说明

该组件从API version 7开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。

绘制线条。

## 权限列表

PhonePC/2in1TabletTVWearable

无

## 子组件

PhonePC/2in1TabletTVWearable

支持[animate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-svg-animate)、[animateMotion](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-svg-animatemotion)、[animateTransform](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-svg-animatetransform)。

## 属性

PhonePC/2in1TabletTVWearable

支持Svg组件[通用属性](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-svg-common-attributes)和以下属性。

展开

| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| id | string | - | 否 | 组件的唯一标识。 |
| x1 | <length>|<percentage> | - | 否 | 设置线条起点的x轴坐标。支持属性动画。 |
| y1 | <length>|<percentage> | - | 否 | 设置线条起点的y轴坐标。支持属性动画。 |
| x2 | <length>|<percentage> | - | 否 | 设置线条终点的x轴坐标。支持属性动画。 |
| y2 | <length>|<percentage> | - | 否 | 设置线条终点的y轴坐标。支持属性动画。 |

## 示例

PhonePC/2in1TabletTVWearable

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div class="container">
3. <svg width="400" height="400">
4. <line x1="10" x2="300" y1="50" y2="50" stroke-width="4" fill="white" stroke="blue"></line>
5. <line x1="10" x2="300" y1="100" y2="100" stroke-width="4" fill="white" stroke="blue"></line>
6. <line x1="10" x2="300" y1="150" y2="150" stroke-width="10" stroke="red" stroke-dasharray="5 3"
7. stroke-dashoffset="3"></line>
8. <!--round：在路径的末端延伸半个圆，直径等于线宽-->
9. <line x1="10" x2="300" y1="200" y2="200" stroke-width="10" stroke="black" stroke-linecap="round"></line>
10. <!--butt：不在路径两端扩展-->
11. <line x1="10" x2="300" y1="220" y2="220" stroke-width="10" stroke="black" stroke-linecap="butt"></line>
12. <!-- square：在路径的末端延伸一个矩形，宽度等于线宽的一半，高度等于线宽 -->
13. <line x1="10" x2="300" y1="240" y2="240" stroke-width="10" stroke="black" stroke-linecap="square"></line>
14. </svg>
15. </div>
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/19/v3/ihq2bOjtTMWDYF8M2THszg/zh-cn_image_0000002599359139.png?HW-CC-KV=V1&HW-CC-Date=20260511T040504Z&HW-CC-Expire=86400&HW-CC-Sign=F46E5733DB9E2F08D5D4422D21CEBBF027452F2310D35E042D01B647F8588903)