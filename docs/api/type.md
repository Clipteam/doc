---
title: type
---

```typescript
namespace type {
    enum BlockType {
        COMMAND = 1,
        REPORTER = 2,
        BOOLEAN = 3,
        BRANCH = 4,
        HAT = 5
    }

    enum ParameterType {
        NUMBER = 1,
        STRING = 2,
        BOOLEAN = 3,
        COLOR = 5,
        MATRIX = 6,
        NOTE = 7,
        ANGLE = 8,
        IMAGE = 99
    }

    enum ShadowType {
        NO_SHADOW = false,
        ANGLE =  { type: 'math_angle', fieldName: 'NUM' },
        COLOR = { type: 'colour_picker', fieldName: 'COLOUR' },
        NUMBER = { type: 'math_number', fieldName: 'NUM' },
        STRING = { type: 'text', fieldName: 'TEXT' },
        MATRIX = { type: 'matrix', fieldName: 'MATRIX' },
        NOTE = { type: 'note', fieldName: 'NOTE' }
    }

    interface ExtensionInfo {
        id: string;
        version: string;
        author: string | string[];
        icon: string;
        inset_icon: string;
        api: number;
        optional?: boolean;
        dependency: { [key: string]: string };
    }

    interface SettingsItemBoolean {
        id: string;
        type: "boolean";
        default: boolean;
    }

    interface SettingsItemNumber {
        id: string;
        type: "number";
        default: number;
        max?: number;
        min?: number;
        precision?: number;
    }

    interface SettingsItemSelector {
        id: string;
        type: "selector";
        default: string;
        items: string[];
    }

    type SettingsItem = SettingsItemBoolean | SettingsItemNumber | SettingsItemSelector;

    interface BlockPrototype {
        opcode: string;
        type: BlockType;
        option?: BlockOption;
        param?: { [key: string]: ParameterPrototype };
        messageId: string;
        categoryId: string;
        function: Function;
    }

    interface BlockOption {
        terminal?: boolean;
        monitor?: boolean;
    }

    interface ParameterPrototype {
        type: ParameterType;
        default?: any;
        menu?: MenuItemPrototype[];
        field?: boolean;
        shadow?: ShadowPrototype;
    }

    interface MenuItemPrototype {
        messageId: string;
        value: any;
    }

    interface ShadowPrototype {
        type: string;
        fieldName: string;
    }

    interface CategoryPrototype {
        categoryId: string;
        messageId: string;
        color: string;
    }
}
```
