---
sidebar_position: 10
title: Compiler Optimization
---
:::caution
The following extension APIs are in draft and the following are subject to change in the future.
:::

ClipCC provides compiler API support for extension blocks. If you want to use the compiler for your blocks , you should add a compile function in the prototype of your block.

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
If you do not specify a compile function, the compiler will fallback to the compatibility layer to run your blocks.

For a "Promised" block, you should respond to ``isWrap`` to determine if the stage needs to be refreshed. You can use ``yield;`` to pause the thread and request a refresh of the stage. For a "BRANCH" block, you must refer a compile function unless your block won't work in compiler mode.

This code snippet currently only allows access to ``BlockUtility(util)`` objects and function parameters.