---
sidebar_position: 1
title: 自定义帧率
---

此功能可以为动画和游戏项目提供更流畅的显示体验。

![Custom FPS](/img/custom-fps.gif)

~~The fps of this gif is 15, which seems laggy~~
## 如何使用
1. 点击主菜单中的 “其他”
2. 点击 “设置”
3. 查找 “播放器” -> “帧率” 并设置一个值
4. 查看效果
## 注意
1. 此功能会破坏没有垂直同步支持的项目，最典型的特征是是你的动画或游戏运行速度会更快，一个可能的解决方案是检测帧率并根据它调整运动的速度。
2. You shouldn't use this feature to speed up your calculations, please use "Turbo Mode" instead.
3. The legal values for this feature are 10 to 240. too low and too high values can disrupt the Scratch's VM.