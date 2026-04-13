## 概述

FFRT并发队列提供了设置任务优先级（Priority）和队列并发度的能力，使得队列中的任务能同时在多个线程上执行，获得更高的并行效果。

* **队列并发度**：通过队列最大并发度设置，可以控制同一时刻同时执行的任务数量。这有助于避免任务并发过多对系统资源造成冲击，从而保证系统的稳定性和性能。
* **任务优先级**：用户可以为每个任务设置优先级，不同的任务将严格按照优先级进行调度和执行。相同优先级的任务按照排队顺序执行，高优先级的任务将优先于低优先级的任务执行，确保关键任务能够及时处理。

## 示例：银行服务系统

举例实现一个银行服务系统，每个客户向系统提交一个服务请求，可以区分普通用户和VIP用户，VIP用户的服务请求可以优先得到执行。银行系统中有2个窗口，可以并行取出用户提交的服务请求办理。

可以利用FFRT的并行队列范式做如下建模：

* **排队逻辑**：并行队列。
* **服务窗口**：并行队列的并发度，同时也对应FFRT Worker数量。
* **用户等级**：并行队列任务优先级。

实现代码如下所示：

收起

自动换行

深色代码主题

复制

```
1. #include <iostream>
2. #include <unistd.h>
3. #include "ffrt/ffrt.h" // 来自 OpenHarmony 第三方库 "@ppd/ffrt"

5. class BankQueueSystem {
6. private:
7. std::unique_ptr<ffrt::queue> queue_;

9. public:
10. BankQueueSystem(const char *name, int concurrency)
11. {
12. queue_ = std::make_unique<ffrt::queue>(
13. ffrt::queue_concurrent, name, ffrt::queue_attr().max_concurrency(concurrency));
14. std::cout << "bank system has been initialized" << std::endl;
15. }

17. ~BankQueueSystem()
18. {
19. queue_ = nullptr;
20. std::cout << "bank system has been destroyed" << std::endl;
21. }

23. // 开始排队，即提交队列任务
24. ffrt::task_handle Enter(const std::function<void()>& func, const char *name, ffrt_queue_priority_t level, int delay)
25. {
26. return queue_->submit_h(func, ffrt::task_attr().name(name).priority(level).delay(delay));
27. }

29. // 退出排队，即取消队列任务
30. int Exit(const ffrt::task_handle &t)
31. {
32. return queue_->cancel(t);
33. }

35. // 等待排队，即等待队列任务
36. void Wait(const ffrt::task_handle& handle)
37. {
38. queue_->wait(handle);
39. }
40. };

42. void BankBusiness()
43. {
44. usleep(100 * 1000);
45. std::cout << "saving or withdraw ordinary customer" << std::endl;
46. }

48. void BankBusinessVIP()
49. {
50. usleep(100 * 1000);
51. std::cout << "saving or withdraw VIP" << std::endl;
52. }

54. int main()
55. {
56. BankQueueSystem bankQueue("Bank", 2);

58. auto task1 = bankQueue.Enter(BankBusiness, "customer1", ffrt_queue_priority_low, 0);
59. auto task2 = bankQueue.Enter(BankBusiness, "customer2", ffrt_queue_priority_low, 0);
60. // VIP享受更优先的服务
61. auto task3 = bankQueue.Enter(BankBusinessVIP, "customer3 vip", ffrt_queue_priority_high, 0);
62. auto task4 = bankQueue.Enter(BankBusiness, "customer4", ffrt_queue_priority_low, 0);
63. auto task5 = bankQueue.Enter(BankBusiness, "customer5", ffrt_queue_priority_low, 0);

65. // 取消客户4的服务
66. bankQueue.Exit(task4);

68. // 等待所有的客户服务完成
69. bankQueue.Wait(task5);
70. return 0;
71. }
```

## 接口说明

上述样例中涉及到主要的FFRT的接口包括：

展开

| 名称 | 描述 |
| --- | --- |
| class [task\_attr](https://gitcode.com/openharmony/resourceschedule_ffrt/blob/master/docs/ffrt-api-guideline-cpp.md#task_attr) | 任务属性类。 |
| class [queue\_attr](https://gitcode.com/openharmony/resourceschedule_ffrt/blob/master/docs/ffrt-api-guideline-cpp.md#queue_attr) | 队列属性类。 |
| class [queue](https://gitcode.com/openharmony/resourceschedule_ffrt/blob/master/docs/ffrt-api-guideline-cpp.md#queue) | 队列类。 |

说明

* 如何使用FFRT C++ API详见：[FFRT C++接口三方库使用指导](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ffrt-development-guideline#using-ffrt-c-api-1)。
* 使用FFRT C接口或C++接口时，都可以通过FFRT C++接口三方库简化头文件包含，即使用#include "ffrt/ffrt.h"头文件包含语句。

## 约束限制

并发队列最大并发度建议控制在合理范围内，配置过大超过Worker线程数没有意义，配置过小可能导致系统资源利用率不足。