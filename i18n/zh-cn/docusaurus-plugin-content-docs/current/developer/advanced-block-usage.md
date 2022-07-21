---
sidebar_position: 6
title: 进阶积木 API 用法
---
## 一次性添加/删除积木
ClipCC 提供一次性添加/删除积木的支持。 你可以使用 ``api.addBlocks(blocks: BlockPrototype[])`` 和 ``api.removeBlocks(blocksOpcode: string[])`` 来实现它们。
## 菜单
ClipCC 从 3.1.2 开始提供对菜单输入的支持。正确定义菜单的方式是在 parameter 属性内定义包含菜单项的``menu``属性。
```javascript
param: {
    PARAMETER: {
        type: type.ParameterType.STRING,
       menu: [{
           messageId: 'example.extension.menu.type',
           value: 'type'
            }, {
                   messageId: 'example.extension.menu.rainbow',
                   value: 'rainbow'
            }, {
                  messageId: 'example.extension.menu.zoom',
                  value: 'zoom'
            }],
           default: 'rainbow'
      }
}
```
如果你想定义一个不可动态输入的菜单, 那么你可以将``field`` 属性设置为 true.
```javascript
param: {
    PARAMETER: {
        type: type.ParameterType.STRING,
        default: 'something',
        field: true,
        menu: [...]
      }
},
```
## 帽状积木
这个简单的实例阐述了如何定义一个 ``HAT`` 类型的积木:
```javascript
api.addBlock({
        opcode: 'example.hat',
        type: type.BlockType.HAT,
        messageId: 'example.hat',
        categoryId: 'example.category',
        param: {
            CONDITION: {
                type: type.ParameterType.BOOLEAN
            }
        },
        function: (args) => {
            if (!!hasReported) {
                window.hasReported = false;
                return false;
            }
            const result = !!args.CONDITION;
            if (result) {
                hasReported = true;
                return true;
            }
            return false;
        }
});
```
当积木被拖拽至工作区后，项目会进入“假”运行状态（绿旗高亮，但没有脚本被触发）。编辑器每帧都会检查该 HAT 是否被触发。只有当上一帧返回``false``且当前帧返回``true``时积木才会正常被调用。

## 树状积木
ClipCC 从 3.1.4 开始提供对树状积木的支持。以下是一个定义树状积木的定义：
```javascript title="index.js"
api.addBlock({
    opcode: 'example.if',
    type: type.BlockType.COMMAND,
    messageId: 'example.if',
    categoryId: 'example.category',
    branchCount: 1,
    param: {
        COND: {
            type: type.ParameterType.BOOLEAN
        }
    },
    function: (args, util) => {
        // If the condition is true, start the branch.
        if (!!args.COND) util.startBranch(1, false);
    }
});
```
```json title="en.json"
{
    "example.if": "if [COND] [SUBSTACK]"
}
```
　　你需要在 BlockPrototype 中指定 "branchCount", 它意味着树状积木的分支数量。 你还需要在语言文件中以 [SUBSTACKX] 的命名方式定义分支参数。
　　对于一个树状积木, 你可以通过 util 对象中的 startBranch 方法来进行流程控制。
```javascript
/**
* 在当前积木下触发某个分支
* @param {number} branchNum 触发分支的编号 (i.e., 1, 2).
* @param {boolean} isLoop 这个分支是否是一个循环
*/
startBranch (branchNum, isLoop) {...}
```
当 ``isLoop`` 参数被设为 true 时, 积木将被重复调用，直到startBranch 不再被触发。当被设为 false 时, 当前积木将被立刻跳出。 当``branchNum``参数未被指定时, 默认为1。这里有一个关于流程控制的 [更为详细的范例](https://github.com/SimonShiki/neurons).

编写这类积木通常需要对线程和调度器进行修改, 所以你需要对 Scratch/ClipCC 的代码具有一定程度上的理解。通常情况下，我们不推荐你定义这类积木。
