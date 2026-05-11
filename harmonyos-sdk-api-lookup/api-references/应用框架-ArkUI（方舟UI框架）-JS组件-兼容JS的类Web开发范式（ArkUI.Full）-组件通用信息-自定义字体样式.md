自定义字体可以是从项目中的字体文件中加载的字体，字体格式支持ttf和otf。

说明

从API version 4开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。

## 定义font-face

PhonePC/2in1TabletTVWearable

收起

自动换行

深色代码主题

复制

```
1. // xxx.js
2. @font-face {
3. font-family: font;
4. src: url('/common/font.ttf');
5. }
```

**font-family：**

自定义字体的名称。

**src：**

自定义字体的来源，支持如下类别：

* 项目中的字体文件：通过url指定项目中的字体文件路径(只支持绝对路径，详情请参见[资源和文件访问规则](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/js-framework-file#文件访问规则)章节)。
* 不支持设置多个src。

## 使用font-face

PhonePC/2in1TabletTVWearable

可以在style中定义font-face，然后在font-family样式中指定该font-face的名称，从而应用font-face定义的字体。

**示例：**

页面布局：

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div>
3. <text class="demo-text">测试自定义字体</text>
4. </div>
```

页面样式：

收起

自动换行

深色代码主题

复制

```
1. /*xxx.css*/
2. @font-face {
3. font-family: font;
4. src: url("/common/font.ttf");
5. }
6. .demo-text {
7. font-family: font;
8. }
```