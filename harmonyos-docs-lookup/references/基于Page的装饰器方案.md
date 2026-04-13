开发者使用@InsightIntentPage装饰器进行基于Page的意图声明，可快速将已有的Page页面接入意图框架，以购买电影票的意图为例，详细说明如下：

1. 装饰器添加位置：基于Page的装饰器需要添加在Entry页面组件上，建议在目标页面中进行声明。

   收起

   自动换行

   深色代码主题

   复制

   ```
   1. import { InsightIntentPage } from '@kit.AbilityKit';

   3. @Builder
   4. export function PurchaseMovieTicketsIntentPageBuilder(pageName: string, param: object) {
   5. PurchaseMovieTicketsIntentPage({ param: param });
   6. }

   8. @InsightIntentPage({
   9. intentName: 'PurchaseMovieTickets',
   10. domain: 'PurchaseTickets',
   11. intentVersion: '1.0.1',
   12. displayName: '购买电影票',
   13. llmDescription: '用于在线购买电影票，允许用户选择指定影院、电影和场次时间进行购票。在用户明确表达购票需求，且已提供所有必要信息（cinema, film, time）时使用。如果信息不全或者用户只是查询电影信息、放映时间或票价，不应调用此工具。',
   14. uiAbility: 'EntryAbility',
   15. pagePath: './ets/pages/MainPage',
   16. navDestinationName: 'PurchaseMovieTicketsIntentPage',
   17. parameters: {
   18. "type": "object",
   19. "properties": {
   20. "cinema": {
   21. "type": "string",
   22. "description": "目标影院名称，仅支持平台合作的影院"
   23. },
   24. "film": {
   25. "type": "string",
   26. "description": "目标电影名称，需为当前上映或即将上映且在影院排片列表中的电影"
   27. },
   28. "time": {
   29. "type": "string",
   30. "description": "放映时间，必须为未来的场次，且需为影院当天有效排片时间；时间格式应为'YYYY-MM-DD HH:MM'（例如'2025-07-01 19:30'）"
   31. }
   32. },
   33. "required": ["cinema", "film", "time"]
   34. }
   35. })
   36. @Entry
   37. @Component
   38. struct PurchaseMovieTicketsIntentPage {
   39. param: object = new Object();
   40. cinema: string = '';
   41. film: string = '';
   42. time: string = '';
   43. aboutToAppear(): void {
   44. this.cinema= this.param?.['cinema'];
   45. this.film = this.param?.['film'];
   46. this.time = this.param?.['time'];
   47. }
   48. build() {
   49. NavDestination(){
   50. Text(`${this.cinema} ${this.film} ${this.time}`)
   51. .fontSize(30)
   52. .fontWeight(FontWeight.Bolder)
   53. }
   54. .title('IntentPage')
   55. .width('100%')
   56. }
   57. }
   ```
2. 装饰器的字段说明以及示例：@InsightIntentPage字段以及具体说明如下。

   展开

   | 字段名称 | 类型 | 必选 | 说明 |
   | --- | --- | --- | --- |
   | intentName | string | 是 | 意图名称，最大长度：64。 |
   | domain | string | 是 | 意图所属的功能垂域。 |
   | intentVersion | string | 是 | 意图的版本号，用于兼容性管理。 |
   | displayName | string | 是 | 意图的展示名称，用于界面显示，最大长度：64。 |
   | llmDescription | string | 否 | 意图的描述，详细描述该意图可实现的能力，便于大模型理解并调用。 |
   | parameters | Record<string, object> | 否 | 意图参数定义，描述参数类型以及含义。 |
   | uiAbility | string | 否 | 页面依赖的UiAbility名，如果不传递默认使用EntryAbility。 |
   | pagePath | string | 是 | Navigation组件所在页面的路径，路径基于Module的根目录的相对路径。 |
   | navDestinationName | string | 否 | Navigation子页面名称，如果不填写，则跳转到pagePath指定的页面。 |

   为便于大模型理解和调用，相关参数定义需要遵照[自定义意图相关信息定义规范](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/intents-skill-all-rec-specification)。
3. 装饰器的添加方式：装饰器可以直接手动添加，同时也支持一键生成装饰器，建议使用后者，此方式需要安装相应插件，详细步骤如下。
   1. 打开CodeGenie插件：在DevEco Studio右侧边栏点击CodeGenie或输入快捷键Alt/Option+U，可以进入DevEco CodeGenie。若使用非最新版本的DevEco Studio，可通过[下载中心](https://developer.huawei.com/consumer/cn/download/deveco-codegenie)获取并使用相关功能，具体请参考[插件获取及安装](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-codegenie#section18337533718)。

      ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/40/v3/XJzDYDyYS1CNVrj2xQrlhA/zh-cn_image_0000002402202277.png?HW-CC-KV=V1&HW-CC-Date=20260403T124412Z&HW-CC-Expire=86400&HW-CC-Sign=4D70C95DC2512EEE506B79CB2AE6032BC28328B9D495C06A7E4465BEE3CA583D "点击放大")
   2. 框选想要接入意图框架功能的代码。

      ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c4/v3/khbURVjySC6LNffU6vnmrg/zh-cn_image_0000002402283005.png?HW-CC-KV=V1&HW-CC-Date=20260403T124412Z&HW-CC-Expire=86400&HW-CC-Sign=31A991C18D8D48D9C24A1CD099711A560EAC94841F0C6C67637C467934E22E64 "点击放大")
   3. 在选中的代码块上右键CodeGenie > Insight Intent > 选择适合的装饰器。

      ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7c/v3/60ZZm63ITNqzvfCSpOKSNg/zh-cn_image_0000002368683178.png?HW-CC-KV=V1&HW-CC-Date=20260403T124412Z&HW-CC-Expire=86400&HW-CC-Sign=0F308C75509BB495136D88A9471F258B8EBF19D21AED9C019C55F25894C64FFD "点击放大")
   4. 在DevEco CodeGenie对话框中对意图定义，功能，参数等进行描述。

      ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/21/v3/GQYPYNxuTjiqbjzCh2aQBg/zh-cn_image_0000002402202953.png?HW-CC-KV=V1&HW-CC-Date=20260403T124412Z&HW-CC-Expire=86400&HW-CC-Sign=DC4FFA23FA1BD9AE4F50BF7FB8F0029763973B9ACE43B38C08ECEFC3E6A1623F "点击放大")
   5. 回车或者点击发送按钮，即可生成对应的装饰器内容。

      ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3f/v3/UMMzNKtUSUiSTQLuAcIS3Q/zh-cn_image_0000002368523474.png?HW-CC-KV=V1&HW-CC-Date=20260403T124412Z&HW-CC-Expire=86400&HW-CC-Sign=C11DB61F8CF64D5A6029A27A7D616B21690BA9F12AC4F4D8730451F3B42F390C "点击放大")
   6. 将光标放置于要插入装饰器的位置，点击插入图标，即可在对应位置插入装饰器。

      插入前：

      ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/13/v3/XmNppjMET4am8hpDGypaJA/zh-cn_image_0000002407408805.png?HW-CC-KV=V1&HW-CC-Date=20260403T124412Z&HW-CC-Expire=86400&HW-CC-Sign=424609A7955A969FFD69508F0E96A3B1C75C146F3B80E9205B1B1C94ACCF39D4 "点击放大")

      插入后：

      ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2c/v3/7857WGGvRc-wPC32sxQLTQ/zh-cn_image_0000002407528689.png?HW-CC-KV=V1&HW-CC-Date=20260403T124412Z&HW-CC-Expire=86400&HW-CC-Sign=B601F69F0426DEF54F3A10A41466BB102710299D23AA5F303D1BC882086178B9 "点击放大")
4. 装饰器的使用约束和说明：
   * 仅支持Navigation页面架构跳转。
   * 该跳转不能有自定义上下文依赖，比如必须打开前置页面才能跳转，开发者需要进行验证，确认兜底策略。
   * 跳转页面时，默认使用Navigation页面栈进行push，如果开发者需要实现其他跳转逻辑，则需要自行适配。