提供在页面中动态添加组件，并为动态添加的组件设置属性与样式的能力。

说明

* 从API version 8开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。

## createElement

PhonePC/2in1TabletTVWearable

createElement(tag: string): Element

创建一个组件对象。

**参数：**

展开

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| tag | string | 是 | 组件名称。 |

**返回值：**

展开

| 类型 | 说明 |
| --- | --- |
| Element | 对应tag名称的组件对象。 |

收起

自动换行

深色代码主题

复制

```
1. let newImage = dom.createElement('image')
```

## setAttribute

PhonePC/2in1TabletTVWearable

setAttribute(name: string, value: string): void

动态设置组件的属性。

**参数：**

展开

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| name | string | 是 | 属性名称。 |
| value | string | 是 | 属性值。 |

收起

自动换行

深色代码主题

复制

```
1. newImage.setAttribute('src', 'common/testImage.jpg')
```

## setStyle

PhonePC/2in1TabletTVWearable

setStyle(name: string, value: string): boolean

动态设置组件的样式。

**参数：**

展开

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| name | string | 是 | 样式名称。 |
| value | string | 是 | 样式值。 |

**返回值：**

展开

| 类型 | 说明 |
| --- | --- |
| boolean | 设置成功时返回true，失败时返回false。 |

收起

自动换行

深色代码主题

复制

```
1. newImage.setStyle('width', '120px')
```

## addChild

PhonePC/2in1TabletTVWearable

addChild(child: Element): void

将动态创建的组件添加到父组件当中。

**参数：**

展开

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| child | Element | 是 | 组件对象。 |

收起

自动换行

深色代码主题

复制

```
1. newDiv.addChild(newImage)
```

## 示例

PhonePC/2in1TabletTVWearable

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div class="container">
3. <div id="parentDiv" class="parent"></div>
4. <button onclick="appendDiv" class="btn">动态创建div</button>
5. <button onclick="appendImage" class="btn">动态创建image到创建的div中</button>
6. </div>
```

收起

自动换行

深色代码主题

复制

```
1. /* xxx.css */
2. .container {
3. flex-direction: column;
4. align-items: center;
5. width: 100%;
6. }

8. .parent {
9. flex-direction: column;
10. }

12. .btn {
13. width: 70%;
14. height: 60px;
15. margin: 15px;
16. }
```

收起

自动换行

深色代码主题

复制

```
1. // xxx.js
2. let newDiv = null
3. let newImage = null

5. export default {
6. appendDiv() {
7. let parent = this.$element('parentDiv')
8. newDiv = dom.createElement('div')
9. newDiv.setStyle('width', '150px')
10. newDiv.setStyle('height', '150px')
11. newDiv.setStyle('backgroundColor', '#AEEEEE')
12. newDiv.setStyle('marginTop', '15px')
13. parent.addChild(newDiv)
14. },
15. appendImage() {
16. newImage = dom.createElement('image')
17. newImage.setAttribute('src', 'common/testImage.jpg')
18. newImage.setStyle('width', '120px')
19. newImage.setStyle('height', '120px')
20. newDiv.addChild(newImage)
21. }
22. }
```