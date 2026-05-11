js标签中包含了实例名称、页面路由信息。

展开

| 标签 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| name | string | default | 是 | 标识JS实例的名字。 |
| pages | Array | - | 是 | 路由信息，详见“[pages](/consumer/cn/doc/harmonyos-references/js-lite-framework-js-tag#pages)”。 |

说明

name、pages标签配置需在配置文件中的“js”标签中完成设置。

## pages

PhonePC/2in1TabletTVWearableLite Wearable

定义每个页面的路由信息，每个页面由页面路径和页面名组成，页面的文件名即为页面名，例如：

收起

自动换行

深色代码主题

复制

```
1. {
2. // ...
3. "pages": [
4. "pages/index/index",
5. "pages/detail/detail"
6. ]
7. // ...
8. }
```

说明

* 应用首页固定为"pages/index/index"。
* 页面文件名不能使用组件名称，比如：text.hml、button.hml等。

## 示例

PhonePC/2in1TabletTVWearableLite Wearable

收起

自动换行

深色代码主题

复制

```
1. {
2. "app": {
3. "bundleName": "com.example.player",
4. "version": {
5. "code": 1,
6. "name": "1.0"
7. },
8. "vendor": "example"
9. },
10. "module": {
11. // ...
12. "js": [
13. {
14. "name": "default",
15. "pages": [
16. "pages/index/index",
17. "pages/detail/detail"
18. ]
19. }
20. ],
21. "abilities": [
22. {
23. // ...
24. }
25. ]
26. }
27. }
```