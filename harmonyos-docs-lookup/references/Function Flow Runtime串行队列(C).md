## 概述

FFRT串行队列基于协程调度模型实现，提供高效的消息队列功能，支持异步通信、流量削峰、无锁化状态和资源管理以及架构解耦等多种业务场景。FFRT串行队列支持以下功能：

* **​队列创建销毁**​，支持创建和销毁队列，创建时可指定队列名称和优先级。每个队列功能上相当于一个单独的线程，队列中的任务相对于用户线程异步执行。
* **任务延迟**​，支持在任务提交时设置延迟时间（delay），单位为微秒（us）。延迟任务将在uptime（提交时刻+延迟时间）后调度执行。
* **​串行调度**​，同一队列中的任务按照uptime升序排列，严格串行执行。确保队列中上一个任务完成后，下一个任务才会开始执行。
* **​任务取消**​，支持根据任务句柄取消未出队的任务。若任务已开始执行或执行完成，则无法取消。
* **​任务等待**​，支持根据任务句柄等待任务完成。指定任务完成时，队列中所有uptime早于该任务的任务均已执行完成。
* **任务优先级**​，支持在任务提交时设置单个任务的优先级。优先级仅在任务出队后相对于系统其他负载生效，不影响同一队列内任务的串行顺序。若未设置任务优先级，则默认继承队列的优先级。

## 示例：异步日志系统

举例实现一个异步日志系统，主线程将日志任务提交到队列，后台线程从队列中取出任务并写入文件。这种方式既能保证日志的顺序性，又能避免文件写入操作阻塞主线程。

借助FFRT并行化框架API，开发者只需专注于业务逻辑的实现，无需关注异步线程管理、线程安全及调度效率等问题。

用例简化了异常处理和线程安全相关的一些逻辑，实现代码如下所示：

收起

自动换行

深色代码主题

复制

```
1. #include <stdio.h>
2. #include <stdlib.h>
3. #include <string.h>
4. #include <unistd.h>
5. #include "ffrt/ffrt.h" // 来自 OpenHarmony 第三方库 "@ppd/ffrt"

7. typedef struct {
8. FILE *logFile;          // 日志文件指针
9. ffrt_queue_t queue;     // 任务队列
10. } logger_t;

12. // 全局Logger变量
13. logger_t* g_logger = NULL;

15. // 初始化日志系统
16. logger_t *logger_create(const char *filename)
17. {
18. logger_t *logger = (logger_t *)malloc(sizeof(logger_t));
19. if (!logger) {
20. perror("Failed to allocate memory for logger_t");
21. return NULL;
22. }

24. // 打开日志文件
25. logger->logFile = fopen(filename, "a");
26. if (!logger->logFile) {
27. perror("Failed to open log file");
28. free(logger);
29. return NULL;
30. }
31. printf("Log file opened: %s\n", filename);

33. // 创建任务队列
34. logger->queue = ffrt_queue_create(ffrt_queue_serial, "logger_queue_c", NULL);
35. if (!logger->queue) {
36. perror("Failed to create queue");
37. fclose(logger->logFile);
38. free(logger);
39. return NULL;
40. }

42. return logger;
43. }

45. // 销毁日志系统
46. void logger_destroy(logger_t *logger)
47. {
48. if (logger) {
49. // 销毁队列
50. if (logger->queue) {
51. ffrt_queue_destroy(logger->queue);
52. }

54. // 关闭日志文件
55. if (logger->logFile) {
56. fclose(logger->logFile);
57. printf("Log file closed\n");
58. }

60. free(logger);
61. }
62. }

64. // 日志任务
65. void write_task(void *arg)
66. {
67. char *message = (char *)arg;
68. if (g_logger && g_logger->logFile) {
69. fprintf(g_logger->logFile, "%s\n", message);
70. fflush(g_logger->logFile);
71. }

73. free(message);
74. }

76. // 添加日志任务
77. void logger_log(logger_t *logger, const char *message)
78. {
79. if (!logger || !logger->queue) {
80. return;
81. }

83. // 复制消息字符串
84. char *messageCopy = strdup(message);
85. if (!messageCopy) {
86. perror("Failed to allocate memory for message");
87. return;
88. }

90. ffrt_queue_submit_f(logger->queue, write_task, messageCopy, NULL);
91. }

93. int main()
94. {
95. // 初始化全局logger
96. g_logger = logger_create("log_c.txt");
97. if (!g_logger) {
98. return -1;
99. }

101. // 使用全局logger添加日志任务
102. logger_log(g_logger, "Log message 1");
103. logger_log(g_logger, "Log message 2");
104. logger_log(g_logger, "Log message 3");

106. // 模拟主线程继续执行其他任务
107. sleep(1);

109. // 销毁全局logger
110. logger_destroy(g_logger);
111. g_logger = NULL;
112. return 0;
113. }
```

说明

ffrt\_queue\_submit\_h\_f接口可以接收裸函数指针任务作为参数，如果任务存在前后处理可以参见[ffrt\_alloc\_auto\_managed\_function\_storage\_base](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ffrt-api-guideline-c#ffrt_alloc_auto_managed_function_storage_base)函数查看如何构造任务结构体。

## 接口说明

上述样例中涉及到主要的FFRT的接口包括：

展开

| 名称 | 描述 |
| --- | --- |
| [ffrt\_queue\_create](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ffrt-api-guideline-c#ffrt_queue_t) | 创建队列。 |
| [ffrt\_queue\_destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ffrt-api-guideline-c#ffrt_queue_t) | 销毁队列。 |
| [ffrt\_queue\_submit\_f](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ffrt-api-guideline-c#ffrt_queue_t) | 向队列提交一个任务。  **说明**：从API version 20开始，支持该接口。 |

说明

* 如何使用FFRT C++ API详见：[FFRT C++接口三方库使用指导](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ffrt-development-guideline#using-ffrt-c-api-1)。
* 使用FFRT C接口或C++接口时，都可以通过FFRT C++接口三方库简化头文件包含，即使用#include "ffrt/ffrt.h"头文件包含语句。

## 约束限制

* **避免提交超长任务** FFRT内置进程级队列任务超时检测机制。当串行任务执行时间超过预设阈值（默认30秒）时，系统将打印和上报异常日志，并触发预设的进程超时回调函数（如已配置）。
* **同步原语使用规范** 在提交给FFRT的任务闭包中，避免使用std::mutex、std::condition\_variable和std::recursive\_mutex，标准库同步原语会长时间占用FFRT Worker线程。请替换为FFRT提供的同步原语：ffrt::mutex、ffrt::condition\_variable或ffrt::recursive\_mutex，其用法与标准库相同。
* **全局变量中的队列管理** 若在全局变量中管理串行队列，随业务进程销毁，测试程序中需注意生命周期解耦问题。在测试用例结束时，需显式释放串行队列，其他资源可随全局变量释放。原因是全局变量在主函数结束后析构，而串行队列的释放依赖于FFRT框架中的其他资源，此时这些资源可能已被销毁。