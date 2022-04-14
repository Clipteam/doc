---
sidebar_position: 5
title: Add a block
---
This page describes how to add a block to the editor.
## Example
To access the extension API, you can require the ``api`` object.
```javascript
const { api } = require('clipcc-extension');
```
### Add blocks
Before you can add a block, you must add a category.
```javascript
api.addCategory({
    categoryId: 'your.category.id',
    messageId: 'your.category.id',
    color: '#339900' // HEX color code
});
```
The categoryId is the unique identifier of the category, and the messageId is the text that will be displayed in the category(If you haven't written i18n).
Now we need to require the ``type`` object to define the type of the block.
```javascript
const { type } = require('clipcc-extension');
```
then we can add a block.
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
The opcode is the unique identifier of the block, and the messageId is the text that will be displayed in the block(If you haven't written i18n). The categoryId is the category that the block belongs to. The param is the parameter of the block, and the function is the function that will be executed when the block is executed. The function will receive the parameter as an argument.

**We recommend using arrow functions instead of defining them in the class**, because ``this`` may be lost.
### Remove blocks
For some reasons, you may want to remove a block.
```javascript
api.removeBlock('your.block.id');
```
If you want to remove a category, you can use
```javascript
api.removeCategory('your.category.id');
```
It will remove all the blocks in that category. We recommend you remove the category when the extension is unloaded.
## Prototype
### Category
```javascript
class CategoryPrototype {
    categoryId: string;
    messageId: string;
    color: string;
}

function addCategory(category: CategoryPrototype): void;
function removeCategory(categoryId: string): void;
```
### Block
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