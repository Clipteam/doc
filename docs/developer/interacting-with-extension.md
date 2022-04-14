---
sidebar_position: 8
title: Interacting with extension
---

Interaction between extensions is achieved by exposing a function, where a member function of the extension prototype is exposed using the ``registerGlobalFunction`` function, allowing other extensions to call it via the ``callGlobalFunction`` function. Note that getting an instance of an extension directly in another extension is also not prohibited, but results in undefined behavior.

## Example
```javascript
class HelloExtension {
    onInit() {
        api.registerGlobalFunction('helloWorld', this.helloWorld);
    }

    helloWorld() {
        console.log('Hello, world!');
    }
}
```

**registerGlobalFunction(name, func)**: accepts two parameters, the global function name and the function object, the function name is recommended to use the extension . function name to prevent conflicts with other extended functions. If a name is already occupied, then the later registered function should not be loaded and an error will be thrown.

**unregisterGlobalFunction(name)**: Delete a global function that has been registered. Note that you should only delete global functions that you have registered, otherwise the behavior is undefined. After the extension is uninstalled, the global functions registered by the extension should be deleted.


**callGlobalFunction(name, ...arg)**: Accepts a function name, followed by a list of arguments, to call the corresponding function. If the corresponding function does not exist, an error should be thrown.

## Prototype

```javascript
function registerGlobalFunction(name, func): void;
function unregisterGlobalFunction(name): void;
function callGlobalFunction(name, ...arg): any;
```