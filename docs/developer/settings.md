---
sidebar_position: 9
title: Settings
---

Settings are defined in the ``settings.json`` file in the internal root of the extension file and are used to add settings to the editor. All settings of the extension are added to the editor when the extension is loaded, not when it is enabled. That is, the user can modify the extension's settings while the extension is not enabled.
## Structure
```json
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
All setting items are defined in ``object``, and their final order in settings is the same as settings.json order, with the following basic key descriptions.

**id**: ID of the setting item, note that after the extension is loaded, the actual ID is your extension ID followed by the ID of the setting item, e.g. the actual id of ``option1`` above is ``your.extension.id.option1``, where ``your.extension.id`` is your extension ID, which is defined in ``info.json``. This ensures that This ensures that there are no conflicts between the settings of the plugins.

**type**: the type of the setting item, which corresponds to the type of the control in the setting, see below for details.

**default**: the default value, which is also used as the placeholder property of the control if the corresponding control is inputtable. When the default value is restored by the user, the item will be set to this value.
## Type
### Boolean
This setting is a Boolean type that can only have a value of ``true`` or ``false`` and uses the ``Switch`` component.
```json
{
    "id": "option",
    "type": "boolean",
    "default": false
}
```
### Number
This setting item is a numeric type and uses the ``Input`` component.
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
**max**: *(Optional)* Limit the maximum value of the number.

**min**: *(Optional)* The minimum value of the number.

**precision**: *(Optional)* Limit the number of decimal places of the number, ``0`` means limit to integer.
### Selector
This setting item is a string type and uses ``Selector`` component.
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
**items**: set all options of the selector, each option should be described in an object, the id of this object indicates the value of the option, and message indicates the corresponding translation ID.
## Translation
Setting items should have translated text and (optionally) description text. If a setting item does not have a translation of the description text set, then its description text will not be displayed.
```json
{
    "your.extension.id.settings.option1": "Option 1",
    "your.extension.id.settings.option1.description": "Help message for option 1"
}
```
As shown above, the key for the settings translation should be of the connect between ``your.extension.id.settings`` and the settings ID, and the corresponding key for the description text should have ``.description`` appended to it.
## Interface
```javascript
function getSettings (id: string): any;
```
Effect: Get the value of the setting item with the specified ID.