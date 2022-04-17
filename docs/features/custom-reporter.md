---
sidebar_position: 2
title: Custom Reporter
---

This feature is suitable for projects that require a lot of recursive operations or need to compress program content. you can eliminate unnecessary variables and blocks by customizing a reporter.

![custom-reporter](/img/custom-reporter.png)

## How to
1. Click 'Functions' in category menu.
2. Click 'Make a Function' button.
3. customize your reporter by yourself, then check 'Custom reporter'.
4. Click 'Ok'.
5. Define this function, You should return something at last.

## Tips
1. ~~Reporter won't work when you click it.~~Blocks that contain custom reporters that do not return anything will be skipped for execution. It's caused by Scratch thread scheduling system. We'll fix this until we refactor the VM.
2. For the safety of your project's running, **please keep recursive calls to a minimum.**
3. You cannot edit the type of your custom block.
4. To avoid confusing the parameters with the custom reporter, we adjusted the original colors.