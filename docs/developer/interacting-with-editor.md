---
sidebar_position: 8
title: Interacting with editor
---

You can interact with the editor by using the ``api.getXXXInstance()``

## Example
```javascript
const { api } = require('clipcc-extension');
// ...
const GUI = api.getGuiInstance();
const VM = api.getVmInstance();
const Block = api.getBlockInstance();
```
Now you can modify something in the editor. Here's an example.
```javascript
// Get the frame rate.
const frameRate = VM.runtime.frameRate;
// Modify the frame rate.
VM.runtime.setFrameRate(30);
```
You can also override a class or function.
```javascript
const originalFunc = vm.runtime.sequencer.stepThread.prototype;
vm.runtime.sequencer.stepThread.prototype = function(thread) {
    console.log('current thread:', thread);
    originalFunc.call(this, thread);
};
```
:::caution

The result of all operations on the instance depends entirely on the editor's implementation, whose stability and feasibility are not guaranteed and may change from version to version.

:::

:::caution

In community version, the Block instance is unavailable in player.

:::

## Prototype

```javascript
function getVmInstance(): Object;
function getGuiInstance(): Object;
function getStageCanvas(): HTMLCanvasElement;
function getBlockInstance(): Object;
```