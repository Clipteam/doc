---
sidebar_position: 8
title: 与扩展交互
---

扩展间交互通过暴露一个函数实现，在扩展中，使用 `registerGlobalFunction` 函数将扩展原型中的某一个成员函数暴露，允许其他扩展通过 `callGlobalFunction` 函数调用。注意，在其他扩展中直接获取某一个扩展的实例同样也是不被禁止的，但其结果是未定义的行为。

## 示例
```javascript title="src/index.js"
class HelloExtension {
    onInit() {
        api.registerGlobalFunction('helloWorld', this.helloWorld);
    }

    helloWorld() {
        console.log('Hello, world!');
    }
}
```

**registerGlobalFunction(name, func)**：接受两个参数，分别表示全局函数名和函数对象，函数名推荐使用 `扩展名.函数名` 的形式，以防止与其他扩展的函数冲突。如果某个名称已经被占用了，那么后注册的函数不应当被载入，并抛出一个错误。

**unregisterGlobalFunction(name)**：删除某个已经注册的全局函数，注意，你应当只删除自己注册的全局函数，否则行为未定义。在扩展被卸载后，该扩展注册的全局函数应当被删除。

**callGlobalFunction(name, ...arg)**：接受一个函数名，后面跟随着参数列表，用来调用对应的函数。如果对应的函数不存在，则应当抛出一个错误。

## 原型

```javascript
function registerGlobalFunction(name, func): void;
function unregisterGlobalFunction(name): void;
function callGlobalFunction(name, ...arg): any;
```