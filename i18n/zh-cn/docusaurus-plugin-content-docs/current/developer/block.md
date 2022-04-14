---
sidebar_position: 5
title: 添加积木
---
本篇将会演示如何添加积木。
## 示例
要想访问扩展接口，我们首先要引入 ``api``实例。
```javascript
const { api } = require('clipcc-extension');
```
### 添加积木
在添加积木之前，我们需要先添加一个分类。
```javascript
api.addCategory({
    categoryId: 'your.category.id',
    messageId: 'your.category.id',
    color: '#339900' // HEX color code
});
```
``categoryId`` 是该分类的唯一标识符, ``messageId``是用于标识该分类的语言文本，将会作为该分类的显示名称（在没有语言文件的情况下）。
现在我们需要引入 ``type`` 实例来定义积木的类型。
```javascript
const { type } = require('clipcc-extension');
```
现在我们可以添加一个积木了。
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
    function: args => args.VALUE;
});
```
``opcode`` 是该积木的唯一标识符, ``messageId``是用于标识该分类的语言文本，将会作为该分类的显示名称（在没有语言文件的情况下）。 ``categoryId``用于标明该积木来自于哪里。 ``param``是该积木的参数, 函数则用于定义该函数的运行行为。

**我们推荐使用箭头函数而不是在类中定义函数**, 因为扩展可能会在执行过程中丢失 ``this`` 指向。
### 移除积木
因为一些原因，你可能会想移除一个积木。
```javascript
api.removeBlock('your.block.id');
```
如果你想移除一个分类，你可以使用
```javascript
api.removeCategory('your.category.id');
```
它将会移除该分类以及其包含的所有积木。我们推荐你在卸载扩展时使用该方法。
## 原型
### 分类
```javascript
class CategoryPrototype {
    categoryId: string;
    messageId: string;
    color: string;
}

function addCategory(category: CategoryPrototype): void;
function removeCategory(categoryId: string): void;
```
### 积木
```javascript
interface BlockPrototype {
    opcode: string;
    type: BlockType;
    option?: BlockOption;
    messageId: string;
    categoryId: string;
    function: Function;
    param?: { [key: string]: ParameterPrototype };
}

enum BlockType {
    COMMAND, REPORTER, BOOLEAN, BRANCH, HAT
}

class ParameterPrototype {
    type: ParameterType;
    default: any;
    shadow: ShadowPrototype;
}

enum ParameterType {
    NUMBER, STRING, BOOLEAN, ANY
}

class ShadowPrototype {
    type: string;
    fieldName: string;
}

class BlockOption {
    terminal?: boolean;
    monitor?: boolean;
}

function addBlock(block: BlockPrototype): void;
function removeBlock(opcode: string): void;
```