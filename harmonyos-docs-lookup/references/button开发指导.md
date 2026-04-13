button是按钮组件，其类型包括胶囊按钮、圆形按钮、文本按钮、弧形按钮、下载按钮。具体用法请参考[button API](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-basic-button)。

## 创建button组件

在pages/index目录下的hml文件中创建一个button组件。

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div class="container">
3. <button  type="capsule" value="Capsule button"></button>
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
5. flex-direction: column;
6. justify-content: center;
7. align-items: center;
8. background-color: #F1F3F5;
9. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/04/v3/yE4aKu7nQsu7zFZO8hstsg/zh-cn_image_0000002535948630.png?HW-CC-KV=V1&HW-CC-Date=20260403T131144Z&HW-CC-Expire=86400&HW-CC-Sign=B5DA06ED3E2D770FB6EECB6DC7A9CF16CDA697990A0C8D7FCB829FE18ECFD374)

## 设置button类型

通过设置button的type属性来选择按钮类型，如定义button为圆形按钮、文本按钮等。

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div class="container">
3. <button class="circle" type="circle" >+</button>
4. <button class="text" type="text"> button</button>
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
5. background-color: #F1F3F5;
6. flex-direction: column;
7. align-items: center;
8. justify-content: center;
9. }
10. .circle {
11. font-size: 120px;
12. background-color: blue;
13. radius: 72px;
14. }
15. .text {
16. margin-top: 30px;
17. text-color: white;
18. font-size: 30px;
19. font-style: normal;
20. background-color: blue;
21. width: 50%;
22. height: 100px;
23. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b1/v3/kedIBukTRkeMNJB3IM_5cQ/zh-cn_image_0000002566868463.png?HW-CC-KV=V1&HW-CC-Date=20260403T131144Z&HW-CC-Expire=86400&HW-CC-Sign=026063C7798686017741504440788273A9CDA583EC9FC8F04FF5112108E6C344)

说明

* button组件使用的icon图标如果来自云端路径，需要添加网络访问权限 ohos.permission.INTERNET。

如果需要添加ohos.permission.INTERNET权限，则在resources文件夹下的config.json文件里进行权限配置。

收起

自动换行

深色代码主题

复制

```
1. <!-- config.json -->
2. "module": {
3. "reqPermissions": [{
4. "name": "ohos.permission.INTERNET"
5. }],
6. }
```

## 显示下载进度

为button组件添加setProgress方法，来实时显示下载进度条的进度。

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div class="container">
3. <button class="button download" type="download" id="download-btn" onclick="setProgress">{{downloadText}}</button>
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
5. background-color: #F1F3F5;
6. flex-direction: column;
7. align-items: center;
8. justify-content: center;
9. }
10. .download {
11. width: 280px;
12. text-color: white;
13. background-color: #007dff;
14. }
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
5. percent: 0,
6. downloadText: "Download",
7. isPaused: true,
8. intervalId : null,
9. },
10. start(){
11. this.intervalId = setInterval(()=>{
12. if(this.percent <100){
13. this.percent += 1;
14. this.downloadText = this.percent+ "%";
15. } else{
16. promptAction.showToast({
17. message: "Download succeeded."
18. })
19. this.paused()
20. this.downloadText = "Download";
21. this.percent = 0;
22. this.isPaused = true;
23. }
24. },100)
25. },
26. paused(){
27. clearInterval(this.intervalId);
28. this.intervalId = null;
29. },
30. setProgress(e) {
31. if(this.isPaused){
32. promptAction.showToast({
33. message: "Started Downloading"
34. })
35. this.start();
36. this.isPaused = false;
37. }else{
38. promptAction.showToast({
39. message: "Paused."
40. })
41. this.paused();
42. this.isPaused = true;
43. }
44. }
45. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/90/v3/Tzsz_Tx0SVGTy0CclAqHNQ/zh-cn_image_0000002566708483.gif?HW-CC-KV=V1&HW-CC-Date=20260403T131144Z&HW-CC-Expire=86400&HW-CC-Sign=D89F5C12D06DFB1ED3A00DD4A791D4880322F6BB16BEB1AED7382A1C4DB3A791)

说明

setProgress方法只支持button的类型为download。

## 场景示例

在本场景中，开发者可根据输入的文本内容进行button类型切换。

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml -->
2. <div class="container">
3. <div class="input-item">
4. <input class="input-text" id="change" type="{{mytype}}"  placeholder="{{myholder}}"
5. style="background-color:{{mystyle1}};
6. placeholder-color:{{mystyle2}};flex-grow:{{myflex}};"name="{{myname}}" value="{{myvalue}}"></input>
7. </div>
8. <div class="input-item">
9. <div class="doc-row">
10. <input type="button" class="select-button color-3" value="text" onclick="changetype3"></input>
11. <input type="button" class="select-button color-3" value="data" onclick="changetype4"></input>
12. </div>
13. </div>
14. </div>
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
5. background-color: #F1F3F5;
6. }
7. .input-item {
8. margin-bottom: 80px;
9. flex-direction: column;
10. }
11. .doc-row {
12. justify-content: center;
13. margin-left: 30px;
14. margin-right: 30px;
15. }
16. .input-text {
17. height: 80px;
18. line-height: 80px;
19. padding-left: 30px;
20. padding-right: 30px;
21. margin-left: 30px;
22. margin-right: 30px;
23. margin-top:100px;
24. border: 3px solid;
25. border-color: #999999;
26. font-size: 30px;
27. background-color: #ffffff;
28. font-weight: 400;
29. }
30. .select-button {
31. width: 35%;
32. text-align: center;
33. height: 70px;
34. padding-top: 10px;
35. padding-bottom: 10px;
36. margin-top: 30px;
37. font-size: 30px;
38. color: #ffffff;
39. }
40. .color-3 {
41. background-color: #0598db;
42. }
```

收起

自动换行

深色代码主题

复制

```
1. // xxx.js
2. export default {
3. data: {
4. myflex: '',
5. myholder: 'Enter text.',
6. myname: '',
7. mystyle1: "#ffffff",
8. mystyle2: "#ff0000",
9. mytype: 'text',
10. myvalue: '',
11. },
12. onInit() {
13. },
14. changetype3() {
15. this.myflex = '';
16. this.myholder = 'Enter text.';
17. this.myname = '';
18. this.mystyle1 = "#ffffff";
19. this.mystyle2 = "#FF0000";
20. this.mytype = 'text';
21. this.myvalue = '';
22. },
23. changetype4() {
24. this.myflex = '';
25. this.myholder = 'Enter a date.';
26. this.myname = '';
27. this.mystyle1 = "#ffffff";
28. this.mystyle2 = "#FF0000";
29. this.mytype = 'date';
30. this.myvalue = '';
31. },
32. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3f/v3/hLgMoGUjSE6RHAbjQcpt4w/zh-cn_image_0000002535788686.gif?HW-CC-KV=V1&HW-CC-Date=20260403T131144Z&HW-CC-Expire=86400&HW-CC-Sign=1E17DFB0673C2A13784B25DBDF84FFEB8CB8348C5455B03110B78A31E5ADB8EB)