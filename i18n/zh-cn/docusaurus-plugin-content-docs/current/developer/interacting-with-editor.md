---
sidebar_position: 8
title: 与编辑器交互
---

你可以使用 ``api.getXXXInstance()`` 访问编辑器实例。

## 示例
```javascript
const { api } = require('clipcc-extension');
// ...
const GUI = api.getGuiInstance();
const VM = api.getVmInstance();
const Block = api.getBlockInstance();
```
现在你可以修改和访问该实例了，以下是一个例子：
```javascript
// Get the frame rate.
const frameRate = VM.runtime.frameRate;
// Modify the frame rate.
VM.runtime.setFrameRate(30);
```
你也可以覆写某个类的函数。
```javascript
const originalFunc = vm.runtime.sequencer.stepThread.prototype;
vm.runtime.sequencer.stepThread.prototype = function(thread) {
    console.log('current thread:', thread);
    originalFunc.call(this, thread);
};
```
:::caution

扩展可以获取编辑器的一些实例，通过直接修改或调用实例的方式完成更为复杂的功能，但对于实例的所有操作的结果完全取决于编辑器的实现，其稳定性和可行性不被保证，在版本间可能存在变动。

:::

:::caution

在社区版中，Block 实例是无法在播放器环境下访问的。

:::

## 原型

```javascript
function getVmInstance(): Object;
function getGuiInstance(): Object;
function getStageCanvas(): HTMLCanvasElement;
function getBlockInstance(): Object;
```