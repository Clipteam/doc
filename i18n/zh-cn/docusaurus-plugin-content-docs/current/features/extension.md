---
sidebar_position: 3
title: 扩展
---

你可以在 ClipCC 中加载 Scratch 扩展。不仅如此, ClipCC 引入了一个新的、更加强大、开放的扩展系统。它不仅允许扩展添加功能性积木，还可以通过修改编辑器内的内容或是引入 Node.js 模块来实现更加强大的功能。我们希望它能够帮助你更好的发挥自己的创意。

![扩展](/img/extension.png)

## 如何使用
### 安装一个扩展
你可以从在线扩展商店或者从本地上传来安装一个扩展。
1. 点击分类栏中的“添加扩展”按钮。
2. 点击“上传”或“在线获取”来获取扩展。
3. 勾选你喜欢的扩展, 然后返回并确认来加载它们。
4. 现在你可以在项目中使用扩展了！
### 制作一个扩展
我们编写了制作扩展的基本教程和相关文档。请访问[这里](/developer/at-first)。
## 注意
1. ClipCC 扩展与原版 Scratch 扩展不兼容。因此不支持在 Turbowarp, adacraft 和 E羊icques等编辑器中加载。
2. 社区版 ClipCC 对第三方扩展有很严格的限制, 请参考 [这里](/community).
3. 桌面版 (tauri 版除外) ClipCC 可以在启动时加载扩展。 你可以把你需要启动时加载的扩展文件放在程序目录下的``/extensions``文件夹中。
4. ClipCC 扩展可以存储在 .cc3 项目文件中并在启动中被加载， 不过它默认不会保存带有可选标识的扩展。你可以在设置中调整它。
5. 目前 Scratch 原版扩展不能保存在项目文件中。