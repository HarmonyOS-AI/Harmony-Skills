rating是评分组件，用于展示用户对某项内容的评价等级。具体用法请参考[rating](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-basic-rating)。

## 创建rating组件

在pages/index目录下的hml文件中创建一个rating组件。

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div class="container">
3. <rating></rating>
4. </div>
```

收起

自动换行

深色代码主题

复制

```
1. /* xxx.css */
2. .container {
3. width: 100%;
4. height: 100%;
5. display: flex;
6. justify-content: center;
7. align-items: center;
8. background-color: #F1F3F5;
9. }
10. .rating {
11. width: 80%;
12. height: 150px;
13. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/dc/v3/zN4o8y0NQaiBXTA7Krd8IA/zh-cn_image_0000002566868471.gif?HW-CC-KV=V1&HW-CC-Date=20260403T131159Z&HW-CC-Expire=86400&HW-CC-Sign=B1D1598419F7E99F7698A05D2A3AFFE1372A4377AE4B5D53950339C7691D63F8)

## 设置评分星级

rating组件通过设置numstars和rating属性设置评分条的星级总数和当前评星数。

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div class="container">
3. <rating numstars="6" rating="5">
4. </rating>
5. </div>
```

收起

自动换行

深色代码主题

复制

```
1. /* xxx.css */
2. .container {
3. width: 100%;
4. height: 100%;
5. display: flex;
6. justify-content: center;
7. align-items: center;
8. background-color: #F1F3F5;
9. }
10. .rating {
11. width: 80%;
12. height: 150px;
13. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4b/v3/XT08QXZlQGCAsHcrtiMzSg/zh-cn_image_0000002566708491.gif?HW-CC-KV=V1&HW-CC-Date=20260403T131159Z&HW-CC-Expire=86400&HW-CC-Sign=6559C69A535AE9C0B8D32570A3D7FB1C02C262630C820AE8909448CA2F076026)

## 设置评分样式

rating组件通过star-background、star-foreground和star-secondary属性设置单个星级未选择、选中和选中的次级背景图片。

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div class="container">
3. <div style="width: 500px;height: 500px;align-items: center;justify-content: center;flex-direction: column;">
4. <rating numstars="5" rating="1" class="myrating" style="width: {{ratewidth}}; height:{{rateheight}};
5. star-background: {{backstar}}; star-secondary: {{secstar}};star-foreground: {{forestar}};rtl-flip: true;">
6. </rating>
7. </div>
8. </div>
```

收起

自动换行

深色代码主题

复制

```
1. /* xxx.css */
2. .container {
3. width: 100%;
4. height: 100%;
5. flex-direction: column;
6. align-items: center;
7. justify-content: center;
8. background-color: #F1F3F5;
9. }
```

收起

自动换行

深色代码主题

复制

```
1. // index.js
2. export default {
3. data: {
4. backstar: 'common/love.png',
5. secstar: 'common/love.png',
6. forestar: 'common/love1.png',
7. ratewidth: '400px',
8. rateheight: '150px'
9. },
10. onInit(){
11. }
12. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/de/v3/jKo4Hh_iS5ay3uB0OlEsng/zh-cn_image_0000002535788694.gif?HW-CC-KV=V1&HW-CC-Date=20260403T131159Z&HW-CC-Expire=86400&HW-CC-Sign=95F3B58AC80830354B7C7372E7BFD93C496200D4E8512070495804DB58348D22)

说明

* star-background、star-secondary、star-foreground属性的星级图源必须全部设置，否则默认的星级颜色为灰色，提示图源设置错误。
* star-background、star-secondary、star-foreground属性只支持本地路径图片，图片格式为png和jpg。

## 绑定事件

向rating组件添加change事件，打印当前评分。

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div class="container">
3. <rating numstars="5" rating="0" onchange="showrating"></rating>
4. </div>
```

收起

自动换行

深色代码主题

复制

```
1. /* xxx.css */
2. .container {
3. width: 100%;
4. height: 100%;
5. display: flex;
6. justify-content: center;
7. align-items: center;
8. background-color: #F1F3F5;
9. }
10. .rating {
11. width: 80%;
12. height: 150px;
13. }
```

收起

自动换行

深色代码主题

复制

```
1. // xxx.js
2. import promptAction from '@ohos.promptAction';
3. export default {
4. showrating(e) {
5. promptAction.showToast({
6. message: '当前评分' + e.rating
7. })
8. }
9. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f6/v3/4v6gGwrpQ1CPDrnpE8W50w/zh-cn_image_0000002535948640.gif?HW-CC-KV=V1&HW-CC-Date=20260403T131159Z&HW-CC-Expire=86400&HW-CC-Sign=9213423696B75E9E22279C60EB8147F3AE65B3B36F42235344CE1103217681DF)

## 场景示例

开发者可以通过改变开关状态切换星级背景图，通过改变滑动条的值调整星级总数。

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div style="width: 100%;height:100%;flex-direction: column;align-items: center;background-color: #F1F3F5;">
3. <div style="width: 500px;height: 500px;align-items: center;justify-content: center;flex-direction: column;">
4. <rating numstars="{{stars}}" rating="{{rate}}" stepsize="{{step}}" onchange="showrating" class="myrating"
5. style="width: {{ratewidth}};height:{{rateheight}};star-background: {{backstar}};star-secondary: {{secstar}};
6. star-foreground: {{forestar}};rtl-flip: true;"></rating>
7. </div>
8. <div style="flex-direction: column;width: 80%;align-items: center;">
9. <div style="width: 100%;height: 100px;align-items: center;justify-content: space-around;">
10. <text>替换自定义图片</text>
11. <switch checked="false" showtext="true" onchange="setstar"></switch>
12. </div>
13. <div style="width: 100%;height:120px;margin-top: 50px;margin-bottom: 50px;flex-direction: column;align-items: center;
14. justify-content: space-around;">
15. <text>numstars   {{stars}}</text>
16. <slider id="sli1" min="0" max="10" value="5" step="1" onchange="setnumstars"></slider>
17. </div>
18. <div style="width: 100%;height:120px;flex-direction: column;align-items: center;justify-content: space-around;">
19. <text>rating   {{rate}}</text>
20. <slider id="sli2" min="0" max="10" value="{{rate}}" step="0.5" onchange="setrating"></slider>
21. </div>
22. </div>
23. </div>
```

收起

自动换行

深色代码主题

复制

```
1. /* xxx.css */
2. .myrating:active {
3. width: 500px;
4. height: 100px;
5. }
6. .switch{
7. font-size: 40px;
8. }
```

收起

自动换行

深色代码主题

复制

```
1. // xxx.js
2. import promptAction from '@ohos.promptAction';
3. export default {
4. data: {
5. backstar: '',
6. secstar: '',
7. forestar: '',
8. stars: 5,
9. ratewidth: '300px',
10. rateheight: '60px',
11. step: 0.5,
12. rate: 0
13. },
14. onInit(){
15. },
16. setstar(e) {
17. if (e.checked == true) {
18. this.backstar = '/common/love.png'
19. this.secstar = 'common/love.png'
20. this.forestar = 'common/love1.png'
21. } else {
22. this.backstar = ''
23. this.secstar = ''
24. this.forestar = ''
25. }
26. },
27. setnumstars(e) {
28. this.stars = e.progress
29. this.ratewidth = 60 * parseInt(this.stars) + 'px'
30. },
31. setstep(e) {
32. this.step = e.progress
33. },
34. setrating(e){
35. this.rate = e.progress
36. },
37. showrating(e) {
38. this.rate = e.rating
39. promptAction.showToast({
40. message: '当前评分' + e.rating
41. })
42. }
43. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4b/v3/y2fbdRK-TQammWNxdiEguw/zh-cn_image_0000002566868473.gif?HW-CC-KV=V1&HW-CC-Date=20260403T131159Z&HW-CC-Expire=86400&HW-CC-Sign=D2627865CBFD56622E0C1A412D5AE56E00E2B7D33C6FAD0AD1D449A5BF9AEEB6)