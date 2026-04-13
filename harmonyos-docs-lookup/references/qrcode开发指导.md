生成并显示二维码，具体用法请参考[qrcode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-basic-qrcode)。

## 创建qrcode组件

在pages/index目录下的hml文件中创建一个qrcode组件。

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml-->
2. <div class="container">
3. <qrcode value="Hello"></qrcode>
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
6. align-items: center;
7. justify-content: center;
8. background-color: #F1F3F5;
9. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b4/v3/5YgLowxESh6wt4JgCxQpBQ/zh-cn_image_0000002566868485.png?HW-CC-KV=V1&HW-CC-Date=20260403T131227Z&HW-CC-Expire=86400&HW-CC-Sign=6D26D960356E28220B217AD8302D10AC1F77FE3EF189669A583B9DE2E03AF3C4)

说明

qrcode组件在创建的时候value的值为必填项。

## 设置组件类型

通过设置qrcode的type属性来选择按钮类型，如定义qrcode为矩形二维码、圆形二维码。

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml-->
2. <div class="container">
3. <select onchange="settype">
4. <option for="{{bcol_list}}" value="{{$item}}">{{$item}}</option>
5. </select>
6. <qrcode value="Hello" type="{{qr_type}}"></qrcode>
7. </div>
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
10. select{
11. margin-top: 50px;
12. margin-bottom: 50px;
13. }
```

收起

自动换行

深色代码主题

复制

```
1. // index.js
2. export default {
3. data: {
4. qr_type: 'rect',
5. bcol_list: ['rect','circle']
6. },
7. settype(e) {
8. this.qr_type = e.newValue
9. },
10. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/40/v3/LmQhXDc5TAa2O9DzBaLNlw/zh-cn_image_0000002566708505.gif?HW-CC-KV=V1&HW-CC-Date=20260403T131227Z&HW-CC-Expire=86400&HW-CC-Sign=9B86C459E4FD43BFE44FDE869F2789D79FC0A964D828957F969C19800DED5B1D)

## 设置样式

通过color和background-color样式为二维码设置显示颜色和背景颜色。

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml-->
2. <div class="container">
3. <qrcode value="Hello" type="rect"></qrcode>
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
6. align-items: center;
7. justify-content: center;
8. background-color: #F1F3F5;
9. }
10. qrcode{
11. width: 300px;
12. height: 300px;
13. color: blue;  background-color: #ffffff;
14. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8f/v3/LHdkOQE-RoSv8WpuRnK_yg/zh-cn_image_0000002535788708.png?HW-CC-KV=V1&HW-CC-Date=20260403T131227Z&HW-CC-Expire=86400&HW-CC-Sign=C83F4A23C563616AFD6F2B0F1C233526F80015725F7279D3D6EC866030013860)

说明

* width和height不一致时，取二者较小值作为二维码的边长，且最终生成的二维码居中显示。
* width和height只设置一个时，取设置的值作为二维码的边长。都不设置时，使用200px作为默认边长。

## 场景示例

在本场景中将二维码与输入框绑定，通过改变输入框的内容改变二维码。

收起

自动换行

深色代码主题

复制

```
1. <!-- xxx.hml-->
2. <div class="container">
3. <input style="margin-bottom: 100px;" onchange="change"></input>
4. <qrcode value="{{textVal}}"></qrcode>
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
5. flex-direction: column;
6. align-items: center;
7. justify-content: center;
8. background-color: #F1F3F5;
9. }
10. qrcode{
11. width: 400px;
12. height: 400px;
13. }
```

收起

自动换行

深色代码主题

复制

```
1. // index.js
2. export default{
3. data: {
4. textVal: ''
5. },
6. change(e){
7. this.textVal = e.value
8. }
9. }
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/33/v3/NRjPAN5MQwCF_sQadDCL9g/zh-cn_image_0000002535948654.gif?HW-CC-KV=V1&HW-CC-Date=20260403T131227Z&HW-CC-Expire=86400&HW-CC-Sign=ED174A2B50D89074D3E68B7A62734DE568438F59641854C3244E960C7AF9CDA4)