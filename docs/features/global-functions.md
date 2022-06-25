---
sidebar_position: 4
title: Global Functions
---

This feature allows you to call an function (or "custom block") everywhere.

![Global function](/img/global-function.gif)

## How to
1. Click 'Functions' in category menu.
2. Click 'Make a Function' button.
3. customize your block by yourself, then check 'Global function'.
4. Click 'Ok'.
5. Define this function, You can call it everywhere.
## Tips
1. In principle, global functions should not be duplicated, and we cannot guarantee the consequences of this behavior.
2. When calling a global function, the target(sprite) being manipulated is the caller, not the callee.
If there are blocks in the global function that can only be used by a sprite or stage, and the corresponding (sprite/stage) is not correct when calling, the behavior is undefined.