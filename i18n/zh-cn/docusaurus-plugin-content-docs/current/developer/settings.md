---
sidebar_position: 9
title: 设置
---

设置项被定义在扩展文件内部根目录下的 `settings.json` 文件中，用于添加设置项到编辑器。扩展的全部设置项在扩展被载入时就会添加到编辑器中，而不是启用时。即用户可以在扩展并没有被启用的时候修改该扩展的设置项。

## 数据格式
```json title="settings.json"
[
    {
        "id": "option1",
        "type": "boolean",
        "default": false
    },
    {
        "id": "option2",
        "type": "number",
        "default": 0
    }
]
```
所有的设置项均以 `object` 形式定义，其最终在设置中的顺序与 `settings.json` 顺序一致，基本键值说明如下：

**id**：设置项的 ID，注意在扩展载入后，实际的 ID 为你的扩展 ID 后加上设置项的 ID，如上述 `option1` 的实际 id 为 `your.extension.id.option1`，其中 `your.extension.id` 是你的扩展 ID，其被定义于 `info.json`。这确保了插件间的设置不会出现冲突。

**type**：设置项类型，对应了在设置中的控件类型，具体取值见后。

**default**：默认值，如果对应的控件是可输入的，那么默认值同时会作为该控件的 placeholder 属性。当设置被用户恢复默认值时，该设置项将被设置为此值。
## 类型
### Boolean（布尔值）
这个设置项是一个布尔类型，其值只能是 `true` 或者 `false`，对应的控件为 `Switch`。
```json
{
    "id": "option",
    "type": "boolean",
    "default": false
}
```
### Number（数字）
这个设置项是一个数字类型，对应的控件为 `Input`。
```json
{
    "id": "option",
    "type": "number",
    "default": 0,
    "max": 20,
    "min": 1,
    "precision": 0
}
```

**max**：（可选）限定数字的最大值。

**min**：（可选）限定数字的最小值。

**precision**：（可选）限定数字的小数点后位数，`0` 表示限定为整数。
### Selector (选择器)
这个设置项是一个字符串类型，对应的控件为 `Selector`
```json
{
    "id": "option",
    "type": "selector",
    "default": "apple",
    "options": [{
        "id": "apple",
        "message": "message.apple"
    }, {
        "id": "boy",
        "message": "message.boy"
    }, {
        "id": "cat",
        "message": "message.cat"
    }, {
        "id": "dog",
        "message": "message.dog"
    }]
}
```
**items**：设置选择器的全部选项，每个选项应当以一个对象的形式说明，这个对象的 `id` 表示该选项的值，`message` 表示对应的翻译 ID。
## 翻译
设置项应当有翻译文本以及（可选的）描述文本。如果一个设置项没有设置描述文本的翻译，那么不会显示其描述文本。
```json
{
    "your.extension.id.settings.option1": "Option 1",
    "your.extension.id.settings.option1.description": "Help message for option 1"
}
```
如上述内容所示，设置项翻译的键应当为 `your.extension.id.settings` 加上设置项 ID 的形式，对应的描述文本的键应在其后面添加 `.description`。
## 接口
```javascript
function getSettings (id: string): any;
```
效果: 获取设置中某项的值