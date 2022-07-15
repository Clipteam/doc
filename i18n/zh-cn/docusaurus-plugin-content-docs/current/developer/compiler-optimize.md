---
sidebar_position: 11
title: 编译器优化
---
:::caution
以下所涉及的扩展API能处于草案阶段，所涉及的内容可能在未来被修改。
:::

ClipCC 提供对扩展积木的编译器接口支持。如果你想为你的积木使用编译器 , 你需要在你的积木原型内添加一个``compile``函数。

```javascript
api.addBlock({
    opcode: 'your.block.id',
    type: type.BlockType.REPORTER,
    messageId: 'your.block.id',
    categoryId: 'your.category.id',
    param: {
        VALUE: {
            type: type.ParameterType.STRING,
            default: 'Hello World!'
        }
    },
    function: args => args.VALUE,
    compile: (args, isWrap, variablePool, thread) => {
        return "..."; // The snippet of JavaScript code
    }
});
```
如果你不指定``compile``函数, 编译器将会回退到兼容层来运行你的积木。

对于一个返回 Promise 的积木, 你需要响应 ``isWrap`` 来确认是否需要刷新舞台。你可以使用 ``yield;`` 来暂停线程并等待舞台刷新。对于一个"BRANCH"积木, 你必须指定该函数，否则你的积木将无法在编译器模式下运行。

目前返回的代码片段仅可访问 ``BlockUtility(util)`` 对象和自定义函数的参数。