---
sidebar_position: 4
title: Load
---

## Dependencies
Extensions are allowed to have one or more dependencies, and all extensions that an extension depends on must be loaded before that extension. If there is no direct or indirect dependency between two extensions, the order in which the two extensions are loaded is random.
## Loading Mode
The loading mode of extensions is divided into active loading and passive loading, and their unloading behavior in the editor is different.

Active loading is the editor or the user's active request to load an extension; and when loading an extension, if the extension has a dependency, then its dependency is implicitly loaded behavior is called passive loading.

If an extension is both actively and passively loaded in the loading chain, then its loading mode is active loading.

If an extension is passively loaded, then he should not be actively unloaded.
## Load Order
When an extension is loaded, all its dependencies must be loaded before the extension, and all its dependencies are loaded in passive mode.

When an extension is unloaded, all its dependencies that are not in active loading mode are unloaded after the extension, and all extensions that depend on the extension are unloaded before the extension.
## Event
The extension responds to a specific event by calling the relevant method of the plugin directly through the editor, e.g. for calling the onInit event of extension A, i.e. calling ``a.onInit()`` directly, where a represents an instance of extension A.

When an extension instance does not define an event, the editor calls the event without giving a warning or error, and should skip the call. For example, if an extension does not have an onInit event, then the extension should be loaded normally, but not in response to an onInit event.

#### Here are all the events for extensions and their explanations.

**onInit()**: triggered when the plugin is enabled. In this event, the extension should finish adding content to the editor.

**beforeProjectLoadExtension(data, extensions)**: When the editor loads a project file, this event is triggered before loading the extensions required by the project. This event is sent to all plugins, whether they are loaded or not.

**beforeProjectLoad(data, extensions)**: This event is triggered when the editor is loading a project. The parameter data means the data of the current project, and the parameter extensions means the extensions needed by the current project. In this event, the extensions should complete the replacement of the old version of the project to ensure that it fits the new version. Note that if the original project is identical to the current environment, this event will still be triggered and the extension should not modify the project at this time. This event in the extension should provide judgment to ensure that the version migration is correct.

**beforeProjectSave(data)**: This event is triggered when the editor is saving a project. The argument data represents the data of the current project.

**onUninit()**: triggered when the plugin is disabled. In this event, the extension should complete the deletion of the content added to the editor.