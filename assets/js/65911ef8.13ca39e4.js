"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[631],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=r,h=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return n?o.createElement(h,a(a({ref:t},u),{},{components:n})):o.createElement(h,a({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7088:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],l={sidebar_position:9,title:"Interacting with extension"},c=void 0,s={unversionedId:"developer/interacting-with-extension",id:"developer/interacting-with-extension",title:"Interacting with extension",description:"Interaction between extensions is achieved by exposing a function, where a member function of the extension prototype is exposed using the `registerGlobalFunction function, allowing other extensions to call it via the callGlobalFunction` function. Note that getting an instance of an extension directly in another extension is also not prohibited, but results in undefined behavior.",source:"@site/docs/developer/interacting-with-extension.md",sourceDirName:"developer",slug:"/developer/interacting-with-extension",permalink:"/developer/interacting-with-extension",editUrl:"https://github.com/Clipteam/doc/edit/master/docs/developer/interacting-with-extension.md",tags:[],version:"current",lastUpdatedBy:"SimonShiki",lastUpdatedAt:1657847312,formattedLastUpdatedAt:"7/15/2022",sidebarPosition:9,frontMatter:{sidebar_position:9,title:"Interacting with extension"},sidebar:"docs",previous:{title:"Interacting with editor",permalink:"/developer/interacting-with-editor"},next:{title:"Settings",permalink:"/developer/settings"}},u={},p=[{value:"Example",id:"example",level:2},{value:"Prototype",id:"prototype",level:2}],d={toc:p};function f(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Interaction between extensions is achieved by exposing a function, where a member function of the extension prototype is exposed using the ",(0,i.kt)("inlineCode",{parentName:"p"},"registerGlobalFunction")," function, allowing other extensions to call it via the ",(0,i.kt)("inlineCode",{parentName:"p"},"callGlobalFunction")," function. Note that getting an instance of an extension directly in another extension is also not prohibited, but results in undefined behavior."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="src/index.js"',title:'"src/index.js"'},"class HelloExtension {\n    onInit() {\n        api.registerGlobalFunction('helloWorld', this.helloWorld);\n    }\n\n    helloWorld() {\n        console.log('Hello, world!');\n    }\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"registerGlobalFunction(name, func)"),": accepts two parameters, the global function name and the function object, the function name is recommended to use the extension . function name to prevent conflicts with other extended functions. If a name is already occupied, then the later registered function should not be loaded and an error will be thrown."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"unregisterGlobalFunction(name)"),": Delete a global function that has been registered. Note that you should only delete global functions that you have registered, otherwise the behavior is undefined. After the extension is uninstalled, the global functions registered by the extension should be deleted."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"callGlobalFunction(name, ...arg)"),": Accepts a function name, followed by a list of arguments, to call the corresponding function. If the corresponding function does not exist, an error should be thrown."),(0,i.kt)("h2",{id:"prototype"},"Prototype"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"function registerGlobalFunction(name, func): void;\nfunction unregisterGlobalFunction(name): void;\nfunction callGlobalFunction(name, ...arg): any;\n")))}f.isMDXComponent=!0}}]);