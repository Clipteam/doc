---
sidebar_position: 6
title: Advanced Blocks API Usage
---
## Add/remove blocks in one times.
ClipCC provides support for add/remove blocks in one times. You can use ``api.addBlocks(blocks: BlockPrototype[])`` and ``api.removeBlocks(blocksOpcode: string[])`` to implement them.
## Menu
ClipCC provides support for menu input since version 3.1.2. The correct way to define a menu's inputs is to define a ``menu`` property within parameter.
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
If you want to define a menu that cannot embed reporters, then set the ``field`` property to true.
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
## Hat
There's a simple example illustrating how to define a block of type ``HAT``:
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
When the block is dragged into the workspace, the entire project will be under the illusion of "unstoppable" but no scripts are being executed. The editor checks every frame to see if this HAT is triggerred. The hat block will only be called normally if the previous frame returns ``false`` and the current frame returns ``true``.