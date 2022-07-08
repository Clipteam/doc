---
sidebar_position: 2
title: 基础教程
---

本教程将通过编写一个简单的扩展来说明编写ClipCC扩展的基本流程。


:::tip  准备工作
1. 你需要一台状态良好的电脑，为了您的设备安全，请不要使用**手机**，**空调**，**遥控器**等设备开发
2. 你需要安装 **Node.js** 和 **npm** （安装 Node.js 的时候应该已经自带了），当然你也可以使用 **Yarn** 
3. 用于编写代码的编辑器，我们推荐 **VSCode**，请切记不要使用**记事本**编写代码！
:::

## 创建新项目

```shell
npm -g install clipcc-extension-cli # 如果你使用Yarn 请替换为yarn global add clipcc-extension-cli
mkdir example-extension # 将example-extension替换为你的扩展名称（必须要是英文！）
cd example-extension
npm init # 如果你使用Yarn 请替换为yarn init
ccext-cli
```

在最后一步中，ccext-cli会询问有关扩展信息的问题。我们将使用``JavaScript（CommonJS）``进行开发，所以请选择JavaScript作为你的编程语言。~~虽然我更喜欢TypeScript~~


![Image loading...](/img/extension-cli-zh.jpg)

回答问题后，ccext-cli将自动安装所需依赖，并自动生成一个空的ClipCC扩展项目

## 编写扩展

你的扩展目录应该看起来像这样

```
assets/
- icon.jpg
- inset_icon.svg
locales/
- en.json
index.js
info.json
package.json
webpack.config.js
```

locales 目录用于存放不同语言的翻译文本，assets 用于存放插件资源，index.js 是注册模块/实现功能的主文件，info.json 是插件信息

让我们先打开 index.js 并填入以下内容

```javascript title="index.js"
const {api, type, extension} = require('clipcc-extension');
class ExampleExtension extends Extension {
    onInit() {
        api.addCategory({
            // 替换为<你的扩展id>.category 下同
            categoryId: 'clipteam.example.category', 
            messageId: 'clipteam.example.category',
            color: '#339900'
        });
        api.addBlock({
            opcode: 'clipteam.example.return',
            type: type.BlockType.REPORTER,
            messageId: 'clipteam.example.return',
            categoryId: 'clipteam.example.category',
            param: {
                VALUE: {
                    type: type.ParameterType.STRING,
                    default: 'Hello World!'
                }
            },
            function: args => this.ReturnValue(args.VALUE)
        });
        api.addBlock({
            opcode: 'clipteam.example.helloworld',
            type: type.BlockType.COMMAND,
            messageId: 'clipteam.example.helloworld',
            categoryId: 'clipteam.example.category',
            function: args => this.HelloWorld()
        });
    }
    onUninit() {
        api.removeCategory('clipteam.example.category');
    }
    ReturnValue(VALUE) {
        return VALUE;
    }
    HelloWorld() {
        console.log("Hello World!");
        alert("Hello World!");
    }
}
module.exports = ExampleExtension;
```

:::tip 注意  
返回值只能是 **String**、**Number** 或 **Boolean** 返回其他类型可能导致作品加载失败  
:::

然后打开 locales/en.json 填入以下内容

```json title="locales/en.json"
{
    "clipteam.example.name": "Example",
    "clipteam.example.category": "Example",
    "clipteam.example.description": "ClipCC example extension",
    "clipteam.example.return": "return [VALUE]",
    "clipteam.example.helloworld": "Hello World!"
}
```

编写完成后，在项目根目录下运行 `npm run build` （或 `yarn build`），生成的插件（.ccx文件）可以在 dist/ 目录下找到，然后你就可以将生成的插件导入到ClipCC内了。

![Exmaple](https://s3.jpg.cm/2021/08/22/IbEuKQ.png)
