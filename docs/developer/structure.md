---
sidebar_position: 3
title: Structure
---
In the previous page, We demonstrate how to create an extension. Now, we're going to demonstrate exactly how the extension works.

## Extension Format

The ClipCC extension must be packaged as a ``*.ccx`` file in zip format.

The root directory inside the ``*.ccx`` file must contain the ``info.json`` and ``main.js`` files.

## Extension info

The ``info.json`` in the root directory inside the extension file is the basic information of the extension, and the fields in this file must be filled in the way specified below. If the required fields are missing, the extension should be rejected for loading; if there are useless fields, no response will be made to the useless fields.
```json
{
    "id": "extension.example",
    "author": "Clip Team",
    "version": "1.0.0",
    "icon": "assets/icon.jpg",
    "inset_icon": "assets/inset_icon.svg",
    "api": 1,
    "optional": false,
    "dependency": {
        "anothor.extension": "0.1.0"
    }
}
```

### Field description
> marked with optional means this option is optional, otherwise it must be filled in.

**id**: ID of the plugin, must be unique, the recommended writing method is Author ID. It is not recommended to use multiple . Split IDs, if necessary, each . must have at least one legal character between them.

**author**: the name of the author, either as a string or as a list.

**version**: version.

**icon**: header image of the plugin.

**inset_icon**: small icon of the plugin.

**api**: the API version identifier (standard version), if the current editor does not support the API, the extension should be refused to be loaded.

**optional**: (optional) whether the extension is optional, default is false, if set to true, it means that the extension is optional, not loaded will not affect the project file. If false, it means that the extension must be loaded to ensure that the project file opens properly, for example, if the extension adds a new blocks.

**dependency**: (Optional) The dependent extension, the key is the extension ID and the value is the version of the dependency. The version number has the following format: ``1.2.0`` means the version can only be ``1.2.0``; ``1.2.*`` means the version number can be ``1.2.0``, ``1.2.1``, etc., ``*`` can appear more than once in the match, but it must indicate a complete paragraph in the version number, i.e. ``1.2.3*`` is not legal, and ``*`` cannot appear in a version number match containing ``^`` or ``~``; ``^1.2.3`` means the version number is greater than equal to ``1.2.3`` but less than ``2.0.0``; ``~1.2.3`` means the version number is greater than or equal to ``1.2.3`` but less than ``1.3.0``.
## Entry
The following is a minimal implementation of an extension based on the CommonJS specification.
```javascript
const { Extension } = require('clipcc-extension');
class HelloExtension extends Extension {
    onInit() { /* ... */}
    onUninit() { /* ... */ }
}

module.exports = HelloExtension;
```
The main.js in the internal root of the extension file is the entry file for the extension, which will be loaded into the editor and executed when the extension is loaded into the editor.

The entry file must explicitly export a class that should implement the ``onInit`` and ``onUninit`` methods (but is not mandatory) to respond to load and unload events.

We recommend you export as CommonJS, i.e. export to ``module.exports``.