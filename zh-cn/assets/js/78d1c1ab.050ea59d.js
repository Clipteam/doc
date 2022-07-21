"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[166],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(t),f=o,m=d["".concat(c,".").concat(f)]||d[f]||s[f]||i;return t?r.createElement(m,a(a({ref:n},p),{},{components:t})):r.createElement(m,a({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6718:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],l={sidebar_position:9,title:"\u4e0e\u6269\u5c55\u4ea4\u4e92"},c=void 0,u={unversionedId:"developer/interacting-with-extension",id:"developer/interacting-with-extension",title:"\u4e0e\u6269\u5c55\u4ea4\u4e92",description:"\u6269\u5c55\u95f4\u4ea4\u4e92\u901a\u8fc7\u66b4\u9732\u4e00\u4e2a\u51fd\u6570\u5b9e\u73b0\uff0c\u5728\u6269\u5c55\u4e2d\uff0c\u4f7f\u7528 registerGlobalFunction \u51fd\u6570\u5c06\u6269\u5c55\u539f\u578b\u4e2d\u7684\u67d0\u4e00\u4e2a\u6210\u5458\u51fd\u6570\u66b4\u9732\uff0c\u5141\u8bb8\u5176\u4ed6\u6269\u5c55\u901a\u8fc7 callGlobalFunction \u51fd\u6570\u8c03\u7528\u3002\u6ce8\u610f\uff0c\u5728\u5176\u4ed6\u6269\u5c55\u4e2d\u76f4\u63a5\u83b7\u53d6\u67d0\u4e00\u4e2a\u6269\u5c55\u7684\u5b9e\u4f8b\u540c\u6837\u4e5f\u662f\u4e0d\u88ab\u7981\u6b62\u7684\uff0c\u4f46\u5176\u7ed3\u679c\u662f\u672a\u5b9a\u4e49\u7684\u884c\u4e3a\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/developer/interacting-with-extension.md",sourceDirName:"developer",slug:"/developer/interacting-with-extension",permalink:"/zh-cn/developer/interacting-with-extension",editUrl:"https://github.com/Clipteam/doc/edit/master/i18n/zh-cn/docusaurus-plugin-content-docs/current/developer/interacting-with-extension.md",tags:[],version:"current",lastUpdatedBy:"SimonShiki",lastUpdatedAt:1657847312,formattedLastUpdatedAt:"2022/7/15",sidebarPosition:9,frontMatter:{sidebar_position:9,title:"\u4e0e\u6269\u5c55\u4ea4\u4e92"},sidebar:"docs",previous:{title:"\u4e0e\u7f16\u8f91\u5668\u4ea4\u4e92",permalink:"/zh-cn/developer/interacting-with-editor"},next:{title:"\u8bbe\u7f6e",permalink:"/zh-cn/developer/settings"}},p={},s=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u539f\u578b",id:"\u539f\u578b",level:2}],d={toc:s};function f(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u6269\u5c55\u95f4\u4ea4\u4e92\u901a\u8fc7\u66b4\u9732\u4e00\u4e2a\u51fd\u6570\u5b9e\u73b0\uff0c\u5728\u6269\u5c55\u4e2d\uff0c\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"registerGlobalFunction")," \u51fd\u6570\u5c06\u6269\u5c55\u539f\u578b\u4e2d\u7684\u67d0\u4e00\u4e2a\u6210\u5458\u51fd\u6570\u66b4\u9732\uff0c\u5141\u8bb8\u5176\u4ed6\u6269\u5c55\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"callGlobalFunction")," \u51fd\u6570\u8c03\u7528\u3002\u6ce8\u610f\uff0c\u5728\u5176\u4ed6\u6269\u5c55\u4e2d\u76f4\u63a5\u83b7\u53d6\u67d0\u4e00\u4e2a\u6269\u5c55\u7684\u5b9e\u4f8b\u540c\u6837\u4e5f\u662f\u4e0d\u88ab\u7981\u6b62\u7684\uff0c\u4f46\u5176\u7ed3\u679c\u662f\u672a\u5b9a\u4e49\u7684\u884c\u4e3a\u3002"),(0,i.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="src/index.js"',title:'"src/index.js"'},"class HelloExtension {\n    onInit() {\n        api.registerGlobalFunction('helloWorld', this.helloWorld);\n    }\n\n    helloWorld() {\n        console.log('Hello, world!');\n    }\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"registerGlobalFunction(name, func)"),"\uff1a\u63a5\u53d7\u4e24\u4e2a\u53c2\u6570\uff0c\u5206\u522b\u8868\u793a\u5168\u5c40\u51fd\u6570\u540d\u548c\u51fd\u6570\u5bf9\u8c61\uff0c\u51fd\u6570\u540d\u63a8\u8350\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"\u6269\u5c55\u540d.\u51fd\u6570\u540d")," \u7684\u5f62\u5f0f\uff0c\u4ee5\u9632\u6b62\u4e0e\u5176\u4ed6\u6269\u5c55\u7684\u51fd\u6570\u51b2\u7a81\u3002\u5982\u679c\u67d0\u4e2a\u540d\u79f0\u5df2\u7ecf\u88ab\u5360\u7528\u4e86\uff0c\u90a3\u4e48\u540e\u6ce8\u518c\u7684\u51fd\u6570\u4e0d\u5e94\u5f53\u88ab\u8f7d\u5165\uff0c\u5e76\u629b\u51fa\u4e00\u4e2a\u9519\u8bef\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"unregisterGlobalFunction(name)"),"\uff1a\u5220\u9664\u67d0\u4e2a\u5df2\u7ecf\u6ce8\u518c\u7684\u5168\u5c40\u51fd\u6570\uff0c\u6ce8\u610f\uff0c\u4f60\u5e94\u5f53\u53ea\u5220\u9664\u81ea\u5df1\u6ce8\u518c\u7684\u5168\u5c40\u51fd\u6570\uff0c\u5426\u5219\u884c\u4e3a\u672a\u5b9a\u4e49\u3002\u5728\u6269\u5c55\u88ab\u5378\u8f7d\u540e\uff0c\u8be5\u6269\u5c55\u6ce8\u518c\u7684\u5168\u5c40\u51fd\u6570\u5e94\u5f53\u88ab\u5220\u9664\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"callGlobalFunction(name, ...arg)"),"\uff1a\u63a5\u53d7\u4e00\u4e2a\u51fd\u6570\u540d\uff0c\u540e\u9762\u8ddf\u968f\u7740\u53c2\u6570\u5217\u8868\uff0c\u7528\u6765\u8c03\u7528\u5bf9\u5e94\u7684\u51fd\u6570\u3002\u5982\u679c\u5bf9\u5e94\u7684\u51fd\u6570\u4e0d\u5b58\u5728\uff0c\u5219\u5e94\u5f53\u629b\u51fa\u4e00\u4e2a\u9519\u8bef\u3002"),(0,i.kt)("h2",{id:"\u539f\u578b"},"\u539f\u578b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"function registerGlobalFunction(name, func): void;\nfunction unregisterGlobalFunction(name): void;\nfunction callGlobalFunction(name, ...arg): any;\n")))}f.isMDXComponent=!0}}]);