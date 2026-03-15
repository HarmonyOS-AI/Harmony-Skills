# HarmonyOS SDK Kit Index

本索引列出所有 Kit 及其包含的 API 模块。搜索 API 时，先根据功能定位 Kit，再到对应模块中查找具体接口。

- SDK 版本: HarmonyOS 6.0.1 (API 21)
- SDK 路径: `sdk/` (相对于本 skill 目录)

---

## OpenHarmony Kits (47 个)

### AVSessionKit
**音视频会话管理，媒体播放控制**

- Kit 文件: `sdk/openharmony/ets/kits/@kit.AVSessionKit.d.ts`
- 模块列表:
  - `@ohos.multimedia.avCastPicker`
  - `@ohos.multimedia.avInputCastPicker`
  - `@ohos.multimedia.avCastPickerParam`
  - `@ohos.multimedia.avsession`

### AbilityKit
**应用组件模型，Ability 生命周期管理**

- Kit 文件: `sdk/openharmony/ets/kits/@kit.AbilityKit.d.ts`
- 模块列表:
  - `@ohos.ability.ability`
  - `@ohos.ability.errorCode`
  - `@ohos.ability.featureAbility`
  - `@ohos.ability.particleAbility`
  - `@ohos.abilityAccessCtrl`
  - `@ohos.app.ability.Ability`
  - `@ohos.app.ability.AbilityConstant`
  - `@ohos.app.ability.AbilityLifecycleCallback`
  - `@ohos.app.ability.abilityManager`
  - `@ohos.app.ability.AbilityStage`
  - `@ohos.app.ability.ActionExtensionAbility`
  - `@ohos.app.ability.ApplicationStateChangeCallback`
  - `@ohos.app.ability.appManager`
  - `@ohos.app.ability.appRecovery`
  - `@ohos.app.ability.autoFillManager`
  - `@ohos.app.ability.autoStartupManager`
  - `@ohos.app.ability.ChildProcess`
  - `@ohos.app.ability.childProcessManager`
  - `@ohos.app.ability.ChildProcessArgs`
  - `@ohos.app.ability.ChildProcessOptions`
  - `@ohos.app.ability.common`
  - `@ohos.app.ability.Configuration`
  - `@ohos.app.ability.ConfigurationConstant`
  - `@ohos.app.ability.contextConstant`
  - `@ohos.app.ability.dataUriUtils`
  - `@ohos.app.ability.dialogRequest`
  - `@ohos.app.ability.EnvironmentCallback`
  - `@ohos.app.ability.errorManager`
  - `@ohos.app.ability.ExtensionAbility`
  - `@ohos.app.ability.insightIntent`
  - `@ohos.app.ability.InsightIntentContext`
  - `@ohos.app.ability.InsightIntentExecutor`
  - `@ohos.app.ability.InsightIntentDecorator`
  - `@ohos.app.ability.InsightIntentEntryExecutor`
  - `@ohos.app.ability.OpenLinkOptions`
  - `@ohos.app.ability.ShareExtensionAbility`
  - `@ohos.app.ability.StartOptions`
  - `@ohos.app.ability.UIAbility`
  - `@ohos.app.ability.UIExtensionAbility`
  - `@ohos.app.ability.UIExtensionContentSession`
  - `@ohos.app.ability.Want`
  - `@ohos.app.ability.wantConstant`
  - `@ohos.app.ability.wantAgent`
  - `@ohos.application.uriPermissionManager`
  - `@ohos.bundle.bundleManager`
  - `@ohos.bundle`
  - `@ohos.bundle.defaultAppManager`
  - `@ohos.bundle.launcherBundleManager`
  - `@ohos.bundle.overlay`
  - `@ohos.continuation.continuationManager`
  - `@ohos.app.ability.continueManager`
  - `@system.package`
  - `@ohos.privacyManager`
  - `@ohos.app.ability.EmbeddedUIExtensionAbility`
  - `@ohos.app.appstartup.StartupConfig`
  - `@ohos.app.appstartup.StartupConfigEntry`
  - `@ohos.app.appstartup.StartupListener`
  - `@ohos.app.appstartup.StartupTask`
  - `@ohos.app.appstartup.startupManager`
  - `@ohos.app.ability.sendableContextManager`
  - `@ohos.ability.screenLockFileManager`
  - `@ohos.app.ability.AtomicServiceOptions`
  - `@ohos.app.ability.EmbeddableUIAbility`
  - `@ohos.app.ability.PhotoEditorExtensionAbility`
  - `@ohos.bundle.shortcutManager`
  - `@ohos.app.ability.application`
  - `@ohos.app.ability.CompletionHandler`
  - `@ohos.app.ability.AppServiceExtensionAbility`
  - `@ohos.app.ability.kioskManager`
  - `@ohos.app.ability.CompletionHandlerForAtomicService`
  - `@ohos.app.ability.CompletionHandlerForAbilityStartCallback`

### AccessibilityKit
**无障碍服务，辅助功能**

- Kit 文件: `sdk/openharmony/ets/kits/@kit.AccessibilityKit.d.ts`
- 模块列表:
  - `@ohos.accessibility`
  - `@ohos.accessibility.GesturePath`
  - `@ohos.accessibility.GesturePoint`
  - `@ohos.application.AccessibilityExtensionAbility`

### AdsKit
**广告服务，广告展示**

- Kit 文件: `sdk/openharmony/ets/kits/@kit.AdsKit.d.ts`
- 模块列表:
  - `@ohos.advertising.AdComponent`
  - `@ohos.advertising.AdsServiceExtensionAbility`
  - `@ohos.advertising.AutoAdComponent`
  - `@ohos.advertising`
  - `@ohos.identifier.oaid`

### ArkData
**数据管理，关系型数据库、分布式数据、数据同步**

- Kit 文件: `sdk/openharmony/ets/kits/@kit.ArkData.d.ts`
- 模块列表:
  - `@ohos.data.cloudData`
  - `@ohos.data.cloudExtension`
  - `@ohos.data.commonType`
  - `@ohos.data.dataAbility`
  - `@ohos.data.dataShare`
  - `@ohos.data.dataSharePredicates`
  - `@ohos.data.distributedDataObject`
  - `@ohos.data.distributedKVStore`
  - `@ohos.data.preferences`
  - `@ohos.data.relationalStore`
  - `@ohos.data.unifiedDataChannel`
  - `@ohos.data.uniformTypeDescriptor`
  - `@ohos.data.uniformDataStruct`
  - `@ohos.data.ValuesBucket`
  - `@ohos.data.sendablePreferences`
  - `@ohos.data.sendableRelationalStore`
  - `@ohos.data.intelligence`
  - `@ohos.data.UdmfComponents`

### ArkGraphics2D
**2D 图形绘制，Canvas、自定义绘制**

- Kit 文件: `sdk/openharmony/ets/kits/@kit.ArkGraphics2D.d.ts`
- 模块列表:
  - `@ohos.effectKit`
  - `@ohos.graphics.colorSpaceManager`
  - `@ohos.graphics.sendableColorSpaceManager`
  - `@ohos.graphics.hdrCapability`
  - `@ohos.graphics.displaySync`
  - `@ohos.graphics.common2D`
  - `@ohos.graphics.drawing`
  - `@ohos.graphics.text`
  - `@ohos.graphics.uiEffect`

### ArkGraphics3D
**3D 图形渲染引擎**

- Kit 文件: `sdk/openharmony/ets/kits/@kit.ArkGraphics3D.d.ts`
- 模块列表:
  - `@ohos.graphics.scene`

### ArkTS
**ArkTS 语言运行时基础能力**

- Kit 文件: `sdk/openharmony/ets/kits/@kit.ArkTS.d.ts`
- 模块列表:
  - `@ohos.buffer`
  - `@ohos.convertxml`
  - `@ohos.process`
  - `@ohos.taskpool`
  - `@ohos.uri`
  - `@ohos.url`
  - `@ohos.util.ArrayList`
  - `@ohos.util`
  - `@ohos.util.Deque`
  - `@ohos.util.HashMap`
  - `@ohos.util.HashSet`
  - `@ohos.util.LightWeightMap`
  - `@ohos.util.LightWeightSet`
  - `@ohos.util.LinkedList`
  - `@ohos.util.List`
  - `@ohos.util.PlainArray`
  - `@ohos.util.Queue`
  - `@ohos.util.Stack`
  - `@ohos.util.TreeMap`
  - `@ohos.util.TreeSet`
  - `@ohos.util.Vector`
  - `@ohos.fastbuffer`
  - `@ohos.worker`
  - `@ohos.xml`
  - `@ohos.util.json`
  - `@arkts.lang`
  - `@arkts.utils`
  - `@arkts.collections`
  - `@ohos.util.stream`
  - `@arkts.math.Decimal`

### ArkUI
**声明式 UI 开发框架，组件、动画、状态管理**

- Kit 文件: `sdk/openharmony/ets/kits/@kit.ArkUI.d.ts`
- 模块列表:
  - `@ohos.animator`
  - `@ohos.atomicservice.AtomicServiceNavigation`
  - `@ohos.atomicservice.AtomicServiceSearch`
  - `@ohos.arkui.advanced.ArcButton`
  - `@ohos.arkui.advanced.Chip`
  - `@ohos.atomicservice.NavPushPathHelper`
  - `@ohos.arkui.advanced.ChipGroup`
  - `@ohos.arkui.advanced.ComposeListItem`
  - `@ohos.arkui.advanced.ComposeTitleBar`
  - `@ohos.arkui.advanced.Counter`
  - `@ohos.arkui.advanced.Dialog`
  - `@ohos.arkui.advanced.DialogV2`
  - `@ohos.arkui.advanced.EditableTitleBar`
  - `@ohos.arkui.advanced.ExceptionPrompt`
  - `@ohos.arkui.advanced.Filter`
  - `@ohos.arkui.advanced.FormMenu`
  - `@ohos.arkui.advanced.GridObjectSortComponent`
  - `@ohos.arkui.advanced.Popup`
  - `@ohos.arkui.advanced.ProgressButton`
  - `@ohos.arkui.advanced.ProgressButtonV2`
  - `@ohos.arkui.advanced.SegmentButton`
  - `@ohos.arkui.advanced.SelectionMenu`
  - `@ohos.arkui.advanced.SelectTitleBar`
  - `@ohos.arkui.advanced.SplitLayout`
  - `@ohos.arkui.advanced.SubHeader`
  - `@ohos.arkui.advanced.SwipeRefresher`
  - `@ohos.arkui.advanced.TabTitleBar`
  - `@ohos.arkui.advanced.ToolBar`
  - `@ohos.arkui.advanced.ToolBarV2`
  - `@ohos.arkui.advanced.TreeView`
  - `@ohos.atomicservice.InterstitialDialogAction`
  - `@ohos.arkui.componentSnapshot`
  - `@ohos.arkui.componentUtils`
  - `@ohos.arkui.dragController`
  - `@ohos.arkui.drawableDescriptor`
  - `@ohos.arkui.inspector`
  - `@ohos.arkui.node`
  - `@ohos.arkui.observer`
  - `@ohos.arkui.StateManagement`
  - `@ohos.arkui.shape`
  - `@ohos.arkui.UIContext`
  - `@ohos.curves`
  - `@ohos.atomicservice.AtomicServiceWeb`
  - `@ohos.display`
  - `@ohos.font`
  - `@ohos.matrix4`
  - `@ohos.measure`
  - `@ohos.mediaquery`
  - `@ohos.PiPWindow`
  - `@ohos.window.floatingBall`
  - `@ohos.pluginComponent`
  - `@ohos.prompt`
  - `@ohos.promptAction`
  - `@ohos.router`
  - `@ohos.screenshot`
  - `@ohos.uiAppearance`
  - `@ohos.window`
  - `@system.app`
  - `@system.configuration`
  - `@system.mediaquery`
  - `@system.prompt`
  - `@system.router`
  - `@ohos.arkui.ArcList`
  - `@ohos.arkui.ArcAlphabetIndexer`
  - `@ohos.arkui.ArcScrollBar`
  - `@ohos.arkui.theme`
  - `@ohos.arkui.advanced.FoldSplitContainer`
  - `@ohos.arkui.uiExtension`
  - `@ohos.arkui.advanced.FullScreenLaunchComponent`
  - `@ohos.atomicservice.AtomicServiceTabs`
  - `@ohos.arkui.modifier`
  - `@ohos.arkui.Prefetcher`
  - `@ohos.arkui.advanced.DownloadFileButton`
  - `@ohos.arkui.advanced.MultiNavigation`
  - `@ohos.arkui.advanced.ArcSlider`
  - `@ohos.arkui.ArcSwiper`
  - `@ohos.arkui.advanced.SubHeaderV2`
  - `@ohos.arkui.advanced.SegmentButtonV2`
  - `@ohos.atomicservice.HalfScreenLaunchComponent`
  - `@ohos.arkui.UIContext`

### ArkWeb
**Web 组件和 Web 应用开发能力**

- Kit 文件: `sdk/openharmony/ets/kits/@kit.ArkWeb.d.ts`
- 模块列表:
  - `@ohos.web.netErrorList`
  - `@ohos.web.WebNativeMessagingExtensionAbility`
  - `@ohos.web.webNativeMessagingExtensionManager`
  - `@ohos.web.webview`

### AssetStoreKit
**关键资产存储，加密敏感数据存储**

- Kit 文件: `sdk/openharmony/ets/kits/@kit.AssetStoreKit.d.ts`
- 模块列表:
  - `@ohos.security.asset`

### AudioKit
**音频管理，音量、音频流、音频焦点**

- Kit 文件: `sdk/openharmony/ets/kits/@kit.AudioKit.d.ts`
- 模块列表:
  - `@ohos.multimedia.audio`
  - `@ohos.multimedia.audioHaptic`
  - `@ohos.multimedia.avVolumePanel`

### BackgroundTasksKit
**后台任务，长时任务、延时任务**

- Kit 文件: `sdk/openharmony/ets/kits/@kit.BackgroundTasksKit.d.ts`
- 模块列表:
  - `@ohos.resourceschedule.backgroundTaskManager`
  - `@ohos.resourceschedule.backgroundProcessManager`
  - `@ohos.bundleState`
  - `@ohos.reminderAgent`
  - `@ohos.reminderAgentManager`
  - `@ohos.resourceschedule.deviceStandby`
  - `@ohos.resourceschedule.usageStatistics`
  - `@ohos.resourceschedule.workScheduler`
  - `@ohos.WorkSchedulerExtensionAbility`

### BasicServicesKit
**基础服务，应用信息、系统配置、国际化**

- Kit 文件: `sdk/openharmony/ets/kits/@kit.BasicServicesKit.d.ts`
- 模块列表:
  - `@ohos.account.appAccount`
  - `@ohos.customization.customConfig`
  - `@ohos.account.distributedAccount`
  - `@ohos.account.osAccount`
  - `@ohos.app.ability.PrintExtensionAbility`
  - `@ohos.base`
  - `@ohos.batteryInfo`
  - `@ohos.deviceAttest`
  - `@ohos.deviceInfo`
  - `@ohos.pasteboard`
  - `@ohos.power`
  - `@ohos.print`
  - `@ohos.scan`
  - `@ohos.request`
  - `@ohos.request.cacheDownload`
  - `@ohos.runningLock`
  - `@ohos.screenLock`
  - `@ohos.settings`
  - `@ohos.systemDateTime`
  - `@ohos.systemTime`
  - `@ohos.thermal`
  - `@ohos.usb`
  - `@ohos.usbManager`
  - `@ohos.usbManager.serial`
  - `@ohos.wallpaper`
  - `@ohos.zlib`
  - `@ohos.commonEventManager`
  - `@ohos.events.emitter`
  - `@system.battery`
  - `@system.brightness`
  - `@system.device`
  - `@system.request`
  - `@ohos.resourceschedule.systemload`

### CalendarKit
**日历和日程管理**

- Kit 文件: `sdk/openharmony/ets/kits/@kit.CalendarKit.d.ts`
- 模块列表:
  - `@ohos.calendarManager`

### CameraKit
**相机能力，拍照、录像**

- Kit 文件: `sdk/openharmony/ets/kits/@kit.CameraKit.d.ts`
- 模块列表:
  - `@ohos.multimedia.camera`
  - `@ohos.multimedia.cameraPicker`

### ConnectivityKit
**短距通信，蓝牙、WiFi、NFC**

- Kit 文件: `sdk/openharmony/ets/kits/@kit.ConnectivityKit.d.ts`
- 模块列表:
  - `@ohos.bluetooth.a2dp`
  - `@ohos.bluetooth.access`
  - `@ohos.bluetooth.baseProfile`
  - `@ohos.bluetooth.ble`
  - `@ohos.bluetooth.connection`
  - `@ohos.bluetooth.constant`
  - `@ohos.bluetooth.common`
  - `@ohos.bluetooth`
  - `@ohos.bluetooth.hfp`
  - `@ohos.bluetooth.hid`
  - `@ohos.bluetooth.map`
  - `@ohos.bluetooth.pan`
  - `@ohos.bluetooth.pbap`
  - `@ohos.bluetooth.opp`
  - `@ohos.bluetooth.socket`
  - `@ohos.bluetooth.wearDetection`
  - `@ohos.bluetoothManager`
  - `@ohos.connectedTag`
  - `@ohos.nfc.cardEmulation`
  - `@ohos.nfc.controller`
  - `@ohos.nfc.tag`
  - `@ohos.secureElement`
  - `@ohos.wifi`
  - `@ohos.wifiext`
  - `@ohos.wifiManager`
  - `@ohos.wifiManagerExt`
  - `@system.bluetooth`

### ContactsKit
**联系人管理**

- Kit 文件: `sdk/openharmony/ets/kits/@kit.ContactsKit.d.ts`
- 模块列表:
  - `@ohos.contact`

### CoreFileKit
**文件基础能力，文件访问和管理**

- Kit 文件: `sdk/openharmony/ets/kits/@kit.CoreFileKit.d.ts`
- 模块列表:
  - `@ohos.application.BackupExtensionAbility`
  - `@ohos.file.BackupExtensionContext`
  - `@ohos.file.cloudSync`
  - `@ohos.file.cloudSyncManager`
  - `@ohos.file.environment`
  - `@ohos.file.fileAccess`
  - `@ohos.file.fileuri`
  - `@ohos.file.fs`
  - `@ohos.file.hash`
  - `@ohos.file.picker`
  - `@ohos.file.securityLabel`
  - `@ohos.file.statvfs`
  - `@ohos.file.storageStatistics`
  - `@ohos.file.keyManager`
  - `@ohos.fileshare`

### CryptoArchitectureKit
**加解密算法框架，对称/非对称加密、哈希**

- Kit 文件: `sdk/openharmony/ets/kits/@kit.CryptoArchitectureKit.d.ts`
- 模块列表:
  - `@ohos.security.cryptoFramework`
  - `@system.cipher`

### DataLossPreventionKit
**数据防丢失，数据备份恢复**

- Kit 文件: `sdk/openharmony/ets/kits/@kit.DataLossPreventionKit.d.ts`
- 模块列表:
  - `@ohos.dlpPermission`

### DataProtectionKit
**数据保护，数据分类分级**

- Kit 文件: `sdk/openharmony/ets/kits/@kit.DataProtectionKit.d.ts`
- 模块列表:
  - `@ohos.dlpPermission`
  - `@ohos.security.identifySensitiveContent`

### DeviceCertificateKit
**设备证书管理**

- Kit 文件: `sdk/openharmony/ets/kits/@kit.DeviceCertificateKit.d.ts`
- 模块列表:
  - `@ohos.security.cert`
  - `@ohos.security.certManager`
  - `@ohos.security.certManagerDialog`

### DistributedServiceKit
**分布式软总线，设备发现与通信**

- Kit 文件: `sdk/openharmony/ets/kits/@kit.DistributedServiceKit.d.ts`
- 模块列表:
  - `@ohos.distributedDeviceManager`
  - `@ohos.distributedHardware.deviceManager`
  - `@ohos.distributedsched.abilityConnectionManager`
  - `@ohos.distributedsched.linkEnhance`
  - `@ohos.application.DistributedExtensionAbility`
  - `@ohos.application.DistributedExtensionContext`
  - `@ohos.distributedsched.proxyChannelManager`

### DriverDevelopmentKit
**驱动开发框架，外设驱动开发**

- Kit 文件: `sdk/openharmony/ets/kits/@kit.DriverDevelopmentKit.d.ts`
- 模块列表:
  - `@ohos.app.ability.DriverExtensionAbility`
  - `@ohos.driver.deviceManager`

### DrmKit
**数字版权管理**

- Kit 文件: `sdk/openharmony/ets/kits/@kit.DrmKit.d.ts`
- 模块列表:
  - `@ohos.multimedia.drm`

### FormKit
**卡片（Widget）开发框架**

- Kit 文件: `sdk/openharmony/ets/kits/@kit.FormKit.d.ts`
- 模块列表:
  - `@ohos.app.form.formBindingData`
  - `@ohos.app.form.FormExtensionAbility`
  - `@ohos.app.form.formInfo`
  - `@ohos.app.form.formProvider`
  - `@ohos.application.formError`
  - `@ohos.app.form.FormEditExtensionAbility`
  - `@ohos.app.form.LiveFormExtensionAbility`

### IMEKit
**输入法框架，自定义输入法**

- Kit 文件: `sdk/openharmony/ets/kits/@kit.IMEKit.d.ts`
- 模块列表:
  - `@ohos.inputMethod`
  - `@ohos.inputMethodEngine`
  - `@ohos.InputMethodExtensionAbility`
  - `@ohos.InputMethodExtensionContext`
  - `@ohos.InputMethodSubtype`
  - `@ohos.inputMethodList`
  - `@ohos.inputMethod.Panel`

### IPCKit
**进程间通信 IPC/RPC 机制**

- Kit 文件: `sdk/openharmony/ets/kits/@kit.IPCKit.d.ts`
- 模块列表:
  - `@ohos.rpc`

### ImageKit
**图片编解码和处理**

- Kit 文件: `sdk/openharmony/ets/kits/@kit.ImageKit.d.ts`
- 模块列表:
  - `@ohos.multimedia.image`
  - `@ohos.multimedia.sendableImage`
  - `@ohos.multimedia.videoProcessingEngine`

### InputKit
**输入设备管理，键盘、鼠标、触摸屏**

- Kit 文件: `sdk/openharmony/ets/kits/@kit.InputKit.d.ts`
- 模块列表:
  - `@ohos.multimodalInput.gestureEvent`
  - `@ohos.multimodalInput.infraredEmitter`
  - `@ohos.multimodalInput.inputConsumer`
  - `@ohos.multimodalInput.inputDevice`
  - `@ohos.multimodalInput.inputDeviceCooperate`
  - `@ohos.multimodalInput.inputEvent`
  - `@ohos.multimodalInput.intentionCode`
  - `@ohos.multimodalInput.keyCode`
  - `@ohos.multimodalInput.keyEvent`
  - `@ohos.multimodalInput.mouseEvent`
  - `@ohos.multimodalInput.pointer`
  - `@ohos.multimodalInput.touchEvent`

### LocalizationKit
**地理编码、逆地理编码**

- Kit 文件: `sdk/openharmony/ets/kits/@kit.LocalizationKit.d.ts`
- 模块列表:
  - `@ohos.i18n`
  - `@ohos.intl`
  - `@ohos.resourceManager`
  - `@ohos.sendableResourceManager`

### LocationKit
**定位服务，GNSS、网络定位**

- Kit 文件: `sdk/openharmony/ets/kits/@kit.LocationKit.d.ts`
- 模块列表:
  - `@ohos.geolocation`
  - `@ohos.geoLocationManager`
  - `@ohos.app.ability.FenceExtensionAbility`
  - `@ohos.app.ability.FenceExtensionContext`
  - `@system.geolocation`

### MDMKit
**企业设备管理，MDM 策略**

- Kit 文件: `sdk/openharmony/ets/kits/@kit.MDMKit.d.ts`
- 模块列表:
  - `@ohos.enterprise.accountManager`
  - `@ohos.enterprise.adminManager`
  - `@ohos.enterprise.applicationManager`
  - `@ohos.enterprise.bluetoothManager`
  - `@ohos.enterprise.browser`
  - `@ohos.enterprise.bundleManager`
  - `@ohos.enterprise.deviceControl`
  - `@ohos.enterprise.deviceInfo`
  - `@ohos.enterprise.deviceSettings`
  - `@ohos.enterprise.EnterpriseAdminExtensionAbility`
  - `@ohos.enterprise.locationManager`
  - `@ohos.enterprise.networkManager`
  - `@ohos.enterprise.restrictions`
  - `@ohos.enterprise.securityManager`
  - `@ohos.enterprise.systemManager`
  - `@ohos.enterprise.telephonyManager`
  - `@ohos.enterprise.usbManager`
  - `@ohos.enterprise.wifiManager`

### MechanicKit
**机械组件**

- Kit 文件: `sdk/openharmony/ets/kits/@kit.MechanicKit.d.ts`
- 模块列表:
  - `@ohos.distributedHardware.mechanicManager`

### MediaKit
**音视频编解码、播放、录制**

- Kit 文件: `sdk/openharmony/ets/kits/@kit.MediaKit.d.ts`
- 模块列表:
  - `@ohos.multimedia.media`

### MediaLibraryKit
**媒体库管理，音视频图片资源访问**

- Kit 文件: `sdk/openharmony/ets/kits/@kit.MediaLibraryKit.d.ts`
- 模块列表:
  - `@ohos.file.photoAccessHelper`
  - `@ohos.file.sendablePhotoAccessHelper`
  - `@ohos.multimedia.movingphotoview`
  - `@ohos.file.AlbumPickerComponent`
  - `@ohos.file.PhotoPickerComponent`
  - `@ohos.file.RecentPhotoComponent`

### MindSporeLiteKit
**端侧 AI 推理框架**

- Kit 文件: `sdk/openharmony/ets/kits/@kit.MindSporeLiteKit.d.ts`
- 模块列表:
  - `@ohos.ai.mindSporeLite`

### MultimodalAwarenessKit
**多模态感知，设备状态感知**

- Kit 文件: `sdk/openharmony/ets/kits/@kit.MultimodalAwarenessKit.d.ts`
- 模块列表:
  - `@ohos.multimodalAwareness.deviceStatus`
  - `@ohos.multimodalAwareness.metadataBinding`
  - `@ohos.multimodalAwareness.motion`
  - `@ohos.multimodalAwareness.onScreen`
  - `@ohos.stationary`
  - `@ohos.multimodalAwareness.userStatus`

### NetworkKit
**网络通信，HTTP、WebSocket、Socket**

- Kit 文件: `sdk/openharmony/ets/kits/@kit.NetworkKit.d.ts`
- 模块列表:
  - `@ohos.net.connection`
  - `@ohos.net.ethernet`
  - `@ohos.net.http`
  - `@ohos.net.mdns`
  - `@ohos.net.policy`
  - `@ohos.net.sharing`
  - `@ohos.net.socket`
  - `@ohos.net.statistics`
  - `@ohos.net.vpn`
  - `@ohos.net.webSocket`
  - `@ohos.net.vpnExtension`
  - `@ohos.net.networkSecurity`
  - `@ohos.app.ability.VpnExtensionAbility`
  - `@ohos.net.eap`
  - `@ohos.net.netFirewall`

### NotificationKit
**通知服务，通知发布和管理**

- Kit 文件: `sdk/openharmony/ets/kits/@kit.NotificationKit.d.ts`
- 模块列表:
  - `@ohos.notificationManager`
  - `@system.notification`

### PerformanceAnalysisKit
**性能分析，性能调优**

- Kit 文件: `sdk/openharmony/ets/kits/@kit.PerformanceAnalysisKit.d.ts`
- 模块列表:
  - `@ohos.faultLogger`
  - `@ohos.hiviewdfx.hiAppEvent`
  - `@ohos.hichecker`
  - `@ohos.hidebug`
  - `@ohos.hilog`
  - `@ohos.hiTraceChain`
  - `@ohos.hiTraceMeter`
  - `@ohos.hiviewdfx.jsLeakWatcher`
  - `@ohos.hiviewdfx.FaultLogExtensionAbility`
  - `@ohos.hiviewdfx.FaultLogExtensionContext`

### SensorServiceKit
**传感器服务，加速度、陀螺仪等**

- Kit 文件: `sdk/openharmony/ets/kits/@kit.SensorServiceKit.d.ts`
- 模块列表:
  - `@ohos.sensor`
  - `@ohos.vibrator`
  - `@system.sensor`
  - `@system.vibrator`

### TelephonyKit
**电话服务，蜂窝网络、SIM 卡管理**

- Kit 文件: `sdk/openharmony/ets/kits/@kit.TelephonyKit.d.ts`
- 模块列表:
  - `@ohos.telephony.data`
  - `@ohos.telephony.observer`
  - `@ohos.telephony.radio`
  - `@ohos.telephony.sim`
  - `@ohos.telephony.sms`
  - `@ohos.telephony.vcard`
  - `@ohos.telephony.call`
  - `@ohos.telephony.esim`

### TestKit
**测试框架，单元测试、UI 测试**

- Kit 文件: `sdk/openharmony/ets/kits/@kit.TestKit.d.ts`
- 模块列表:
  - `@ohos.app.ability.abilityDelegatorRegistry`
  - `@ohos.application.testRunner`
  - `@ohos.UiTest`
  - `@ohos.test.PerfTest`
  - `@ohos.UiTest`

### UniversalKeystoreKit
**密钥库，密钥管理、证书链**

- Kit 文件: `sdk/openharmony/ets/kits/@kit.UniversalKeystoreKit.d.ts`
- 模块列表:
  - `@ohos.security.huks`

### UserAuthenticationKit
**用户认证，生物识别、PIN 码**

- Kit 文件: `sdk/openharmony/ets/kits/@kit.UserAuthenticationKit.d.ts`
- 模块列表:
  - `@ohos.userIAM.faceAuth`
  - `@ohos.userIAM.userAccessCtrl`
  - `@ohos.userIAM.userAuth`
  - `@ohos.userIAM.userAuthIcon`

---

## HMS Kits - 华为特有服务 (50 个)

### AREngine
**AR 增强现实引擎**
  @since 5.1.0(18)

- Kit 文件: `sdk/hms/ets/kits/@kit.AREngine.d.ts`
- 模块列表:
  - `@hms.core.ar.arengine`
  - `@hms.core.ar.arview`

### AccountKit
**华为帐号服务**
  @since 4.1.0(11)

- Kit 文件: `sdk/hms/ets/kits/@kit.AccountKit.d.ts`
- 模块列表:
  - `@hms.core.authentication`
  - `@hms.core.account.extendservice`
  - `@hms.core.account.LoginComponent`
  - `@hms.core.account.realname`
  - `@hms.core.account.shippingAddress`
  - `@hms.core.account.minorsProtection`
  - `@hms.core.account.invoiceAssistant`

### AgentFrameworkKit
**智能代理框架**
  @since 6.0.0(20)

- Kit 文件: `sdk/hms/ets/kits/@kit.AgentFrameworkKit.d.ts`
- 模块列表:
  - `@hms.ai.AgentFramework`

### AppGalleryKit
**应用市场服务，应用分发、应用更新**
  @since 5.0.3(15)

- Kit 文件: `sdk/hms/ets/kits/@kit.AppGalleryKit.d.ts`
- 模块列表:
  - `@hms.core.appgalleryservice.appInfoManager`
  - `@hms.core.appgalleryservice.productViewManager`
  - `@hms.core.appgalleryservice.moduleInstallManager`
  - `@hms.core.appgalleryservice.updateManager`
  - `@hms.core.appgalleryservice.attributionManager`
  - `@hms.core.appgalleryservice.attributionTestManager`
  - `@hms.core.appgalleryservice.privacyManager`
  - `@hms.bundle.sceneManager`
  - `@hms.core.appgalleryservice.commentManager`

### AppLinkingKit
**应用链接，深度链接**
  @since 5.0.3(15)

- Kit 文件: `sdk/hms/ets/kits/@kit.AppLinkingKit.d.ts`
- 模块列表:
  - `@hms.bundle.applinking.deferredLink`

### CallKit
**通话能力**
  @since 4.1.0(11)

- Kit 文件: `sdk/hms/ets/kits/@kit.CallKit.d.ts`
- 模块列表:
  - `@hms.telephony.voipCall`

### CallServiceKit
**跨设备通话服务**
  @since 5.0.2(14)

- Kit 文件: `sdk/hms/ets/kits/@kit.CallServiceKit.d.ts`
- 模块列表:
  - `@hms.telephony.voipCall`
  - `@hms.telephony.CallerInfoQueryExtensionAbility`
  - `@hms.telephony.CallerInfoQueryExtensionContext`

### CarKit
**车载应用开发**
  @since 4.1.0(11)

- Kit 文件: `sdk/hms/ets/kits/@kit.CarKit.d.ts`
- 模块列表:
  - `@hms.carService.navigationInfoMgr`
  - `@hms.carService.smartMobilityCommon`

### CloudFoundationKit
**云基础服务**
  @since 5.0.0(12)

- Kit 文件: `sdk/hms/ets/kits/@kit.CloudFoundationKit.d.ts`
- 模块列表:
  - `@hms.core.deviceCloudGateway.cloudCommon`
  - `@hms.core.deviceCloudGateway.cloudFunction`
  - `@hms.core.deviceCloudGateway.cloudStorage`
  - `@hms.core.deviceCloudGateway.cloudDatabase`
  - `@hms.core.deviceCloudGateway.cloudResPrefetch`

### CoreSpeechKit
**核心语音能力**
  @since 4.1.0(11)

- Kit 文件: `sdk/hms/ets/kits/@kit.CoreSpeechKit.d.ts`
- 模块列表:
  - `@hms.ai.speechRecognizer`
  - `@hms.ai.textToSpeech`

### CoreVisionKit
**核心视觉能力，图像分析**
  @since 4.1.0(11)

- Kit 文件: `sdk/hms/ets/kits/@kit.CoreVisionKit.d.ts`
- 模块列表:
  - `@hms.ai.ocr.textRecognition`
  - `@hms.ai.face.faceDetector`
  - `@hms.ai.face.faceComparator`
  - `@hms.ai.vision.subjectSegmentation`
  - `@hms.ai.vision.visionBase`
  - `@hms.ai.vision.objectDetection`
  - `@hms.ai.vision.skeletonDetection`

### DataAugmentationKit
**数据增强**
  @since 6.0.0(20)

- Kit 文件: `sdk/hms/ets/kits/@kit.DataAugmentationKit.d.ts`
- 模块列表:
  - `@hms.data.rag`
  - `@hms.data.retrieval`
  - `@hms.data.knowledgeProcessor`
  - `@hms.data.localChatModel`

### DesktopExtensionKit
  @since 6.0.0(20)

- Kit 文件: `sdk/hms/ets/kits/@kit.DeskTopExtensionKit.d.ts`
- 模块列表:
  - `@hms.pcService.statusBarManager`
  - `@hms.pcService.StatusBarViewExtensionAbility`

### DeviceSecurityKit
**设备安全服务**
  @since since

- Kit 文件: `sdk/hms/ets/kits/@kit.DeviceSecurityKit.d.ts`
- 模块列表:
  - `@hms.security.safetyDetect`
  - `@hms.security.deviceCertificate`
  - `@hms.security.securityAudit`
  - `@hms.security.trustedAppService`
  - `@hms.security.businessRiskIntelligentDetection`
  - `@hms.security.antifraudPicker`
  - `@hms.security.trustedAuthentication`
  - `@hms.security.dlpAntiPeep`

### EnterpriseDataGuardKit
**企业数据卫士**
  @since 4.1.0(11)

- Kit 文件: `sdk/hms/ets/kits/@kit.EnterpriseDataGuardKit.d.ts`
- 模块列表:
  - `@hms.pcService.fileGuard`
  - `@hms.pcService.recoveryKeyService`

### EnterpriseSpaceKit
**企业空间，企业数据隔离**
  @since 6.0.0(20)

- Kit 文件: `sdk/hms/ets/kits/@kit.EnterpriseSpaceKit.d.ts`
- 模块列表:
  - `@hms.enterpriseSpaceService.fileTransfer`
  - `@hms.enterpriseSpaceService.spaceManager`

### FileManagerServiceKit
**文件管理服务**
  @since 5.0.5(17)

- Kit 文件: `sdk/hms/ets/kits/@kit.FileManagerServiceKit.d.ts`
- 模块列表:
  - `@hms.filemanagement.fileManagerService`

### GameServiceKit
**游戏服务**
  @since 4.1.0(11)

- Kit 文件: `sdk/hms/ets/kits/@kit.GameServiceKit.d.ts`
- 模块列表:
  - `@hms.core.gameservice.gameplayer`
  - `@hms.core.gameservice.gameperformance`
  - `@hms.core.gameservice.gamenearbytransfer`

### GraphicsAccelerateKit
**图形加速**
  @since 6.0.0(20)

- Kit 文件: `sdk/hms/ets/kits/@kit.GraphicsAccelerateKit.d.ts`
- 模块列表:
  - `@hms.gameAcceleration.assetDownloadManager`
  - `@hms.gameAcceleration.AssetAccelerationExtensionAbility`
  - `@hms.gameAcceleration.AssetAccelerationExtensionContext`
  - `@hms.gameAcceleration.launchAcceleration`

### HealthServiceKit
**健康服务**
  @since 5.0.0(12)

- Kit 文件: `sdk/hms/ets/kits/@kit.HealthServiceKit.d.ts`
- 模块列表:
  - `@hms.health.store`
  - `@hms.health.service`

### IAPKit
**应用内购买，商品管理、订单处理**
  @since 4.1.0(11)

- Kit 文件: `sdk/hms/ets/kits/@kit.IAPKit.d.ts`
- 模块列表:
  - `@hms.core.iap`

### IntentsKit
**意图框架**
  @since 4.1.0(11)

- Kit 文件: `sdk/hms/ets/kits/@kit.IntentsKit.d.ts`
- 模块列表:
  - `@hms.ai.insightIntent`
  - `@hms.ai.insightIntent.InsightIntentUIExtensionAbility`

### LiveViewKit
**实况窗**
  @since 4.1.0(11)

- Kit 文件: `sdk/hms/ets/kits/@kit.LiveViewKit.d.ts`
- 模块列表:
  - `@hms.core.liveview.liveViewManager`
  - `@hms.core.liveview.LiveViewLockScreenExtensionAbility`
  - `@hms.core.liveview.LiveViewLockScreenExtensionContext`

### MapKit
**地图服务，地图显示、导航**
  @since 4.1.0(11)

- Kit 文件: `sdk/hms/ets/kits/@kit.MapKit.d.ts`
- 模块列表:
  - `@hms.core.map.mapCommon`
  - `@hms.core.map.map`
  - `@hms.core.map.MapComponent`
  - `@hms.core.map.staticMap`
  - `@hms.core.map.site`
  - `@hms.core.map.navi`
  - `@hms.core.map.sceneMap`
  - `@hms.core.map.petalMaps`

### NaturalLanguageKit
**自然语言处理**
  @since 5.0.0(12)

- Kit 文件: `sdk/hms/ets/kits/@kit.NaturalLanguageKit.d.ts`
- 模块列表:
  - `@hms.ai.nlp.textProcessing`
  - `@hms.ai.nlp.textProcessing`

### NearLinkKit
**星闪（NearLink）短距通信**
  @since 5.0.1(13)

- Kit 文件: `sdk/hms/ets/kits/@kit.NearLinkKit.d.ts`
- 模块列表:
  - `@hms.nearlink.advertising`
  - `@hms.nearlink.scan`
  - `@hms.nearlink.constant`
  - `@hms.nearlink.manager`
  - `@hms.nearlink.remoteDevice`
  - `@hms.nearlink.ssap`
  - `@hms.nearlink.dataTransfer`

### NetworkBoostKit
**网络加速**
  @since 5.0.0(12)

- Kit 文件: `sdk/hms/ets/kits/@kit.NetworkBoostKit.d.ts`
- 模块列表:
  - `@hms.networkboost.netquality`
  - `@hms.networkboost.handover`
  - `@hms.networkboost.netBoost`

### OnlineAuthenticationKit
**在线认证**
  @since 4.1.0(11)

- Kit 文件: `sdk/hms/ets/kits/@kit.OnlineAuthenticationKit.d.ts`
- 模块列表:
  - `@hms.security.fido`
  - `@hms.security.ifaa`
  - `@hms.security.soter`
  - `@hms.security.fido2`

### PDFKit
**PDF 文档处理**
  @since 5.0.0(12)

- Kit 文件: `sdk/hms/ets/kits/@kit.PDFKit.d.ts`
- 模块列表:
  - `@hms.officeservice.pdfservice`
  - `@hms.officeservice.PdfView`

### PaymentKit
**支付服务**
  @since 4.1.0(11)

- Kit 文件: `sdk/hms/ets/kits/@kit.PaymentKit.d.ts`
- 模块列表:
  - `@hms.core.payment.paymentService`
  - `@hms.core.payment.ecnyPaymentService`
  - `@hms.core.payment.realNameService`
  - `@hms.core.payment.thirdPaymentService`

### Penkit
**手写笔能力**
  @since 5.0.0(12)

- Kit 文件: `sdk/hms/ets/kits/@kit.Penkit.d.ts`
- 模块列表:
  - `@hms.stylus.HandwriteComponent`
  - `@hms.stylus.handwrite`
  - `@hms.stylus.handwrite`
  - `@hms.officeservice.imageFeaturePicker`
  - `@hms.officeservice.stylusInteraction`

### PreviewKit
**文件预览**
  @since 4.1.0(11)

- Kit 文件: `sdk/hms/ets/kits/@kit.PreviewKit.d.ts`
- 模块列表:
  - `@hms.filemanagement.filepreview`
  - `@hms.pcService.openFileBoost`

### PushKit
**消息推送服务**
  @since 4.1.0(11)

- Kit 文件: `sdk/hms/ets/kits/@kit.PushKit.d.ts`
- 模块列表:
  - `@hms.core.AAID`
  - `@hms.core.push.pushCommon`
  - `@hms.core.push.PushExtensionAbility`
  - `@hms.core.push.PushExtensionContext`
  - `@hms.core.push.pushService`
  - `@hms.core.push.RemoteLocationExtensionAbility`
  - `@hms.core.push.RemoteLocationExtensionContext`
  - `@hms.core.push.RemoteNotificationExtensionAbility`
  - `@hms.core.push.RemoteNotificationExtensionContext`
  - `@hms.core.push.serviceNotification`
  - `@hms.core.push.VoIPExtensionAbility`
  - `@hms.core.push.VoIPExtensionContext`

### ReaderKit
**阅读器服务**
  @since 5.0.4(16)

- Kit 文件: `sdk/hms/ets/kits/@kit.ReaderKit.d.ts`
- 模块列表:
  - `@hms.core.readerservice.bookParser`
  - `@hms.core.readerservice.readerComponent`

### RemoteCommunicationKit
**远程通信**
  @since 4.1.0(11)

- Kit 文件: `sdk/hms/ets/kits/@kit.RemoteCommunicationKit.d.ts`
- 模块列表:
  - `@hms.collaboration.rcp`
  - `@hms.collaboration.urpc`

### RingtoneKit
**铃声管理**
  @since 5.0.0(12)

- Kit 文件: `sdk/hms/ets/kits/@kit.RingtoneKit.d.ts`
- 模块列表:
  - `@hms.core.ringtone`

### ScanKit
**二维码扫码**
  @since 4.1.0(11)

- Kit 文件: `sdk/hms/ets/kits/@kit.ScanKit.d.ts`
- 模块列表:
  - `@hms.core.scan.scanCore`
  - `@hms.core.scan.scanBarcode`
  - `@hms.core.scan.customScan`
  - `@hms.core.scan.detectBarcode`
  - `@hms.core.scan.generateBarcode`

### ScenarioFusionKit
**场景融合**
  @since 4.1.0(11)

- Kit 文件: `sdk/hms/ets/kits/@kit.ScenarioFusionKit.d.ts`
- 模块列表:
  - `@hms.core.atomicserviceComponent.atomicserviceUi`
  - `@hms.core.atomicserviceComponent.atomicservice`
  - `@hms.core.scenarioFusionComponent.fileUriService`
  - `@hms.core.atomicserviceComponent.atomicserviceInput`

### ScreenTimeGuardKit
**屏幕时间管理**
  @since 6.0.0(20)

- Kit 文件: `sdk/hms/ets/kits/@kit.ScreenTimeGuardKit.d.ts`
- 模块列表:
  - `@hms.utilityApplication.screenTimeGuard.guardService`
  - `@hms.utilityApplication.screenTimeGuard.appPicker`
  - `@hms.utilityApplication.screenTimeGuard.TimeGuardExtensionContext`
  - `@hms.utilityApplication.screenTimeGuard.TimeGuardExtensionAbility`

### ServiceCollaborationKit
**服务协同，跨设备服务流转**
  @since 4.1.0(11)

- Kit 文件: `sdk/hms/ets/kits/@kit.ServiceCollaborationKit.d.ts`
- 模块列表:
  - `@hms.collaboration.camera`
  - `@hms.collaboration.service`
  - `@hms.collaboration.CollaborationDevicePicker`
  - `@hms.collaboration.devicePicker`

### ShareKit
**华为分享，跨设备分享**
  @since 4.1.0(11)

- Kit 文件: `sdk/hms/ets/kits/@kit.ShareKit.d.ts`
- 模块列表:
  - `@hms.collaboration.systemShare`
  - `@hms.collaboration.harmonyShare`

### SpatialReconKit
**空间重建，3D 建模**
  @since 6.0.1(21)

- Kit 文件: `sdk/hms/ets/kits/@kit.SpatialReconKit.d.ts`
- 模块列表:
  - `@hms.graphics.spatialRender`

### SpeechKit
**语音服务，语音识别、语音合成**
  @since 5.0.0(12)

- Kit 文件: `sdk/hms/ets/kits/@kit.SpeechKit.d.ts`
- 模块列表:
  - `@hms.ai.textReader`
  - `@hms.ai.AICaption`

### StatusBarExtensionKit
**状态栏扩展**
  @since 5.0.0(12)

- Kit 文件: `sdk/hms/ets/kits/@kit.StatusBarExtensionKit.d.ts`
- 模块列表:
  - `@hms.pcService.statusBarManager`
  - `@hms.pcService.StatusBarViewExtensionAbility`

### StoreKit
**应用市场服务（已废弃，使用 AppGalleryKit）**
  @since 4.1.0(11)

- Kit 文件: `sdk/hms/ets/kits/@kit.StoreKit.d.ts`
- 模块列表:
  - `@hms.core.appgalleryservice.appInfoManager`
  - `@hms.core.appgalleryservice.productViewManager`
  - `@hms.core.appgalleryservice.moduleInstallManager`
  - `@hms.core.appgalleryservice.updateManager`
  - `@hms.core.appgalleryservice.attributionManager`
  - `@hms.core.appgalleryservice.attributionTestManager`
  - `@hms.core.appgalleryservice.privacyManager`
  - `@hms.bundle.sceneManager`

### UIDesignKit
**UI 设计辅助**
  @since 5.0.0(12)

- Kit 文件: `sdk/hms/ets/kits/@kit.UIDesignKit.d.ts`
- 模块列表:
  - `@hms.hds.hdsDrawable`
  - `@hms.hds.symbolRegister`
  - `@hms.hds.HdsSideBar`
  - `@hms.hds.HdsSideMenu`
  - `@hms.hds.hdsBaseComponent`
  - `@hms.hds.HdsActionBar`
  - `@hms.hds.HdsSnackBar`
  - `@hms.hds.HdsStyle`
  - `@hms.hds.HdsVisualComponent`

### VisionKit
**视觉 AI，文档扫描、卡证识别、活体检测**
  @since 5.0.0(12)

- Kit 文件: `sdk/hms/ets/kits/@kit.VisionKit.d.ts`
- 模块列表:
  - `@hms.ai.interactiveLiveness`
  - `@hms.ai.visionImageAnalyzer`
  - `@hms.ai.DocumentScanner`
  - `@hms.ai.CardRecognition`

### WalletKit
**华为钱包，卡券管理**
  @since 5.0.0(12)

- Kit 文件: `sdk/hms/ets/kits/@kit.WalletKit.d.ts`
- 模块列表:
  - `@hms.core.payment.walletPass`
  - `@hms.core.payment.walletTransitCard`

### WearEngine
**手表应用引擎**
  @since 5.0.0(12)

- Kit 文件: `sdk/hms/ets/kits/@kit.WearEngine.d.ts`
- 模块列表:
  - `@hms.health.wearEngine`

### WeatherServiceKit
**天气服务**
  @since 5.0.0(12)

- Kit 文件: `sdk/hms/ets/kits/@kit.WeatherServiceKit.d.ts`
- 模块列表:
  - `@hms.core.weather`
