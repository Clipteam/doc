"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[993],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9882:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:7,title:"Localization"},s=void 0,c={unversionedId:"developer/i18n",id:"developer/i18n",title:"Localization",description:"Translatation file",source:"@site/docs/developer/i18n.md",sourceDirName:"developer",slug:"/developer/i18n",permalink:"/developer/i18n",editUrl:"https://github.com/Clipteam/doc/edit/master/docs/developer/i18n.md",tags:[],version:"current",lastUpdatedBy:"SimonShiki",lastUpdatedAt:1657847312,formattedLastUpdatedAt:"7/15/2022",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Localization"},sidebar:"docs",previous:{title:"Advanced Blocks API Usage",permalink:"/developer/advanced-block-usage"},next:{title:"Interacting with editor",permalink:"/developer/interacting-with-editor"}},p={},u=[{value:"Translatation file",id:"translatation-file",level:2},{value:"Structure",id:"structure",level:2},{value:"Conflict",id:"conflict",level:2}],d={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"translatation-file"},"Translatation file"),(0,o.kt)("p",null,"All translations are named ",(0,o.kt)("inlineCode",{parentName:"p"},"<lang>.json")," in the locale folder, ",(0,o.kt)("inlineCode",{parentName:"p"},"<lang>")," should be a specific language number, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"en"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"zh-cn"),", etc. The languages supported in the editor are listed in the corresponding translation documentation of the editor."),(0,o.kt)("h2",{id:"structure"},"Structure"),(0,o.kt)("p",null,"For a specific JSON file, the following format should be satisfied"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "message.id.1": "this is message 1",\n    "message.id.2": "this is message 2"\n}\n')),(0,o.kt)("p",null,"In the above format, the JSON file must have an object consisting of only key-value pairs, where the key must be a legal string satisfying ",(0,o.kt)("inlineCode",{parentName:"p"},"[a-zA-Z0-9-.]")," which is the translation ID, and the value must be a string type, which is the corresponding translation content."),(0,o.kt)("h2",{id:"conflict"},"Conflict"),(0,o.kt)("p",null,"Multiple extensions may provide translations for the same translation ID, in which case the later loaded extension should overwrite the previously loaded translation. In particular, the translation that specifies the body of the editor must be the first one loaded."),(0,o.kt)("p",null,"For example, the extension A translation file ",(0,o.kt)("inlineCode",{parentName:"p"},"en.json")," looks like this."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "message.say": "Hello!",\n    "message.world": "World!"\n}\n')),(0,o.kt)("p",null,"Extension B translates the file ",(0,o.kt)("inlineCode",{parentName:"p"},"en.json")," as follows."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "message.say": "How are you?",\n    "message.hi": "Hi!"\n}\n')),(0,o.kt)("p",null,"If extension A is loaded first and extension B is loaded second, then the final translation loaded into the editor will be equivalent to the following, and you can see that the contents of ",(0,o.kt)("inlineCode",{parentName:"p"},"message.say")," are overwritten."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "message.say": "How are you?",\n    "message.world": "World!",\n    "message.hi": "Hi!"\n}\n')))}f.isMDXComponent=!0}}]);