相对于私有事件，大部分组件都可以绑定如下事件。

展开

| 名称 | 参数 | 描述 |
| --- | --- | --- |
| click | - | 点击动作触发该事件。 |
| longpress | - | 长按动作触发该事件。 |
| swipe5+ | SwipeEvent | 组件上快速滑动后触发。 |

SwipeEvent 基础事件对象属性列表（继承BaseEvent）

展开

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| direction | string | 滑动方向，可能值有：  1. left：向左滑动；  2. right：向右滑动；  3. up：向上滑动；  4. down：向下滑动。 |