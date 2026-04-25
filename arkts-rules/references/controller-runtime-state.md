# Controller attach 与运行态状态示例

## 读取时机

已命中 `SKILL.md` 的“运行态时序与状态保持规则”，并且需要示例、gate 写法或反例时读取本文件。

## Controller attach 反例

```typescript
// 错误：controller 对象存在，不代表已经与 ArkUI Web 组件绑定。
aboutToAppear(): void {
  this.controller.runJavaScript('window.__ready = true;');
}

// 错误：带返回值的方法不能绕过 attach gate 提前返回。
currentUrl(result: MethodResult): void {
  let url: string = this.controller.getUrl();
  result.success(url);
}
```

## Controller attach gate 示例

```typescript
import { webview } from '@kit.ArkWeb';

type ControllerTask = () => void;

interface MethodResult {
  success(value: string): void;
  error(code: string, message: string): void;
}

class WebControllerAttachGate {
  private isControllerAttached: boolean = false;
  private pendingTasks: ControllerTask[] = [];

  public runWhenAttached(task: ControllerTask): void {
    if (this.isControllerAttached) {
      task();
      return;
    }
    this.pendingTasks.push(task);
  }

  public markAttached(): void {
    if (this.isControllerAttached) {
      return;
    }
    this.isControllerAttached = true;
    this.flush();
  }

  public markDetached(): void {
    this.isControllerAttached = false;
    this.pendingTasks = [];
  }

  private flush(): void {
    let tasks: ControllerTask[] = this.pendingTasks;
    this.pendingTasks = [];
    for (let index: number = 0; index < tasks.length; index++) {
      tasks[index]();
    }
  }
}

class WebControllerBridge {
  private controller: webview.WebviewController = new webview.WebviewController();
  private attachGate: WebControllerAttachGate = new WebControllerAttachGate();

  public getController(): webview.WebviewController {
    return this.controller;
  }

  public onControllerAttached(): void {
    this.attachGate.markAttached();
  }

  public loadUrl(url: string): void {
    this.attachGate.runWhenAttached((): void => {
      this.controller.loadUrl(url);
    });
  }

  public runJavaScript(script: string): void {
    this.attachGate.runWhenAttached((): void => {
      this.controller.runJavaScript(script);
    });
  }

  public currentUrl(result: MethodResult): void {
    this.attachGate.runWhenAttached((): void => {
      let url: string = this.controller.getUrl();
      result.success(url);
    });
  }
}
```

ArkUI 组件侧把 attached 回调接到同一个 gate：

```typescript
Web({ src: '', controller: this.webControllerBridge.getController() })
  .onControllerAttached((): void => {
    this.webControllerBridge.onControllerAttached();
  });
```

## 运行态对象重建反例

```typescript
public setScale(scale: number): void {
  this.session.setScale(scale);
}

private recreateSession(): void {
  this.session = this.manager.createSession();
  this.session.commitConfig();
  this.session.start();
}
```

## 运行态对象重建恢复示例

```typescript
private scale: number = 1.0;

public setScale(scale: number): void {
  this.scale = scale;
  this.applyRuntimeSettings();
}

private recreateSession(): void {
  this.session = this.manager.createSession();
  this.session.commitConfig();
  this.applyRuntimeSettings();
  this.session.start();
}

private applyRuntimeSettings(): void {
  this.session.setScale(this.scale);
}
```
