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