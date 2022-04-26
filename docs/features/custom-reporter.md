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
1. Currently ClipCC is undefined for short-circuiting operations of logical operations and the order in which parameters are calculated. This issue may be fixed later, but you should still make sure that your current project does not have behavior that depends on these features.
2. For the safety of your project's running, **please keep recursive calls to a minimum.**
3. You cannot edit the type of your custom block.
4. To avoid confusing the parameters with the custom reporter, we adjusted the original colors.