"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[579],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),h=s(n),u=r,v=h["".concat(l,".").concat(u)]||h[u]||c[u]||i;return n?o.createElement(v,a(a({ref:t},p),{},{components:n})):o.createElement(v,a({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=h;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:r,a[1]=d;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8556:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return d},metadata:function(){return s},toc:function(){return c}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],d={sidebar_position:4,title:"Load"},l=void 0,s={unversionedId:"developer/load",id:"developer/load",title:"Load",description:"Dependencies",source:"@site/docs/developer/load.md",sourceDirName:"developer",slug:"/developer/load",permalink:"/developer/load",editUrl:"https://github.com/Clipteam/doc/edit/master/docs/developer/load.md",tags:[],version:"current",lastUpdatedBy:"SinanGentoo",lastUpdatedAt:1649904903,formattedLastUpdatedAt:"4/14/2022",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Load"},sidebar:"docs",previous:{title:"Structure",permalink:"/developer/structure"},next:{title:"Add a block",permalink:"/developer/block"}},p={},c=[{value:"Dependencies",id:"dependencies",level:2},{value:"Loading Mode",id:"loading-mode",level:2},{value:"Load Order",id:"load-order",level:2},{value:"Event",id:"event",level:2},{value:"Here are all the events for extensions and their explanations.",id:"here-are-all-the-events-for-extensions-and-their-explanations",level:4}],h={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"dependencies"},"Dependencies"),(0,i.kt)("p",null,"Extensions are allowed to have one or more dependencies, and all extensions that an extension depends on must be loaded before that extension. If there is no direct or indirect dependency between two extensions, the order in which the two extensions are loaded is random."),(0,i.kt)("h2",{id:"loading-mode"},"Loading Mode"),(0,i.kt)("p",null,"The loading mode of extensions is divided into active loading and passive loading, and their unloading behavior in the editor is different."),(0,i.kt)("p",null,"Active loading is the editor or the user's active request to load an extension; and when loading an extension, if the extension has a dependency, then its dependency is implicitly loaded behavior is called passive loading."),(0,i.kt)("p",null,"If an extension is both actively and passively loaded in the loading chain, then its loading mode is active loading."),(0,i.kt)("p",null,"If an extension is passively loaded, then he should not be actively unloaded."),(0,i.kt)("h2",{id:"load-order"},"Load Order"),(0,i.kt)("p",null,"When an extension is loaded, all its dependencies must be loaded before the extension, and all its dependencies are loaded in passive mode."),(0,i.kt)("p",null,"When an extension is unloaded, all its dependencies that are not in active loading mode are unloaded after the extension, and all extensions that depend on the extension are unloaded before the extension."),(0,i.kt)("h2",{id:"event"},"Event"),(0,i.kt)("p",null,"The extension responds to a specific event by calling the relevant method of the plugin directly through the editor, e.g. for calling the onInit event of extension A, i.e. calling ",(0,i.kt)("inlineCode",{parentName:"p"},"a.onInit()")," directly, where a represents an instance of extension A."),(0,i.kt)("p",null,"When an extension instance does not define an event, the editor calls the event without giving a warning or error, and should skip the call. For example, if an extension does not have an onInit event, then the extension should be loaded normally, but not in response to an onInit event."),(0,i.kt)("h4",{id:"here-are-all-the-events-for-extensions-and-their-explanations"},"Here are all the events for extensions and their explanations."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"onInit()"),": triggered when the plugin is enabled. In this event, the extension should finish adding content to the editor."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"beforeProjectLoadExtension(data, extensions)"),": When the editor loads a project file, this event is triggered before loading the extensions required by the project. This event is sent to all plugins, whether they are loaded or not."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"beforeProjectLoad(data, extensions)"),": This event is triggered when the editor is loading a project. The parameter data means the data of the current project, and the parameter extensions means the extensions needed by the current project. In this event, the extensions should complete the replacement of the old version of the project to ensure that it fits the new version. Note that if the original project is identical to the current environment, this event will still be triggered and the extension should not modify the project at this time. This event in the extension should provide judgment to ensure that the version migration is correct."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"beforeProjectSave(data)"),": This event is triggered when the editor is saving a project. The argument data represents the data of the current project."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"onUninit()"),": triggered when the plugin is disabled. In this event, the extension should complete the deletion of the content added to the editor."))}u.isMDXComponent=!0}}]);