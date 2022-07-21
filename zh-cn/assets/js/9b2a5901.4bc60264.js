"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[598],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,f=d["".concat(i,".").concat(m)]||d[m]||s[m]||o;return t?r.createElement(f,l(l({ref:n},u),{},{components:t})):r.createElement(f,l({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},346:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return s}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),l=["components"],p={sidebar_position:6,title:"\u8fdb\u9636\u79ef\u6728 API \u7528\u6cd5"},i=void 0,c={unversionedId:"developer/advanced-block-usage",id:"developer/advanced-block-usage",title:"\u8fdb\u9636\u79ef\u6728 API \u7528\u6cd5",description:"\u4e00\u6b21\u6027\u6dfb\u52a0/\u5220\u9664\u79ef\u6728",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/developer/advanced-block-usage.md",sourceDirName:"developer",slug:"/developer/advanced-block-usage",permalink:"/zh-cn/developer/advanced-block-usage",editUrl:"https://github.com/Clipteam/doc/edit/master/i18n/zh-cn/docusaurus-plugin-content-docs/current/developer/advanced-block-usage.md",tags:[],version:"current",lastUpdatedBy:"Simon Shiki",lastUpdatedAt:1658364822,formattedLastUpdatedAt:"2022/7/21",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"\u8fdb\u9636\u79ef\u6728 API \u7528\u6cd5"},sidebar:"docs",previous:{title:"\u6dfb\u52a0\u79ef\u6728",permalink:"/zh-cn/developer/block"},next:{title:"\u672c\u5730\u5316",permalink:"/zh-cn/developer/i18n"}},u={},s=[{value:"\u4e00\u6b21\u6027\u6dfb\u52a0/\u5220\u9664\u79ef\u6728",id:"\u4e00\u6b21\u6027\u6dfb\u52a0\u5220\u9664\u79ef\u6728",level:2},{value:"\u83dc\u5355",id:"\u83dc\u5355",level:2},{value:"\u5e3d\u72b6\u79ef\u6728",id:"\u5e3d\u72b6\u79ef\u6728",level:2},{value:"\u6811\u72b6\u79ef\u6728",id:"\u6811\u72b6\u79ef\u6728",level:2}],d={toc:s};function m(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u4e00\u6b21\u6027\u6dfb\u52a0\u5220\u9664\u79ef\u6728"},"\u4e00\u6b21\u6027\u6dfb\u52a0/\u5220\u9664\u79ef\u6728"),(0,o.kt)("p",null,"ClipCC \u63d0\u4f9b\u4e00\u6b21\u6027\u6dfb\u52a0/\u5220\u9664\u79ef\u6728\u7684\u652f\u6301\u3002 \u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"api.addBlocks(blocks: BlockPrototype[])")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"api.removeBlocks(blocksOpcode: string[])")," \u6765\u5b9e\u73b0\u5b83\u4eec\u3002"),(0,o.kt)("h2",{id:"\u83dc\u5355"},"\u83dc\u5355"),(0,o.kt)("p",null,"ClipCC \u4ece 3.1.2 \u5f00\u59cb\u63d0\u4f9b\u5bf9\u83dc\u5355\u8f93\u5165\u7684\u652f\u6301\u3002\u6b63\u786e\u5b9a\u4e49\u83dc\u5355\u7684\u65b9\u5f0f\u662f\u5728 parameter \u5c5e\u6027\u5185\u5b9a\u4e49\u5305\u542b\u83dc\u5355\u9879\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"menu"),"\u5c5e\u6027\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"param: {\n    PARAMETER: {\n        type: type.ParameterType.STRING,\n       menu: [{\n           messageId: 'example.extension.menu.type',\n           value: 'type'\n            }, {\n                   messageId: 'example.extension.menu.rainbow',\n                   value: 'rainbow'\n            }, {\n                  messageId: 'example.extension.menu.zoom',\n                  value: 'zoom'\n            }],\n           default: 'rainbow'\n      }\n}\n")),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u5b9a\u4e49\u4e00\u4e2a\u4e0d\u53ef\u52a8\u6001\u8f93\u5165\u7684\u83dc\u5355, \u90a3\u4e48\u4f60\u53ef\u4ee5\u5c06",(0,o.kt)("inlineCode",{parentName:"p"},"field")," \u5c5e\u6027\u8bbe\u7f6e\u4e3a true."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"param: {\n    PARAMETER: {\n        type: type.ParameterType.STRING,\n        default: 'something',\n        field: true,\n        menu: [...]\n      }\n},\n")),(0,o.kt)("h2",{id:"\u5e3d\u72b6\u79ef\u6728"},"\u5e3d\u72b6\u79ef\u6728"),(0,o.kt)("p",null,"\u8fd9\u4e2a\u7b80\u5355\u7684\u5b9e\u4f8b\u9610\u8ff0\u4e86\u5982\u4f55\u5b9a\u4e49\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"HAT")," \u7c7b\u578b\u7684\u79ef\u6728:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"api.addBlock({\n        opcode: 'example.hat',\n        type: type.BlockType.HAT,\n        messageId: 'example.hat',\n        categoryId: 'example.category',\n        param: {\n            CONDITION: {\n                type: type.ParameterType.BOOLEAN\n            }\n        },\n        function: (args) => {\n            if (!!hasReported) {\n                window.hasReported = false;\n                return false;\n            }\n            const result = !!args.CONDITION;\n            if (result) {\n                hasReported = true;\n                return true;\n            }\n            return false;\n        }\n});\n")),(0,o.kt)("p",null,"\u5f53\u79ef\u6728\u88ab\u62d6\u62fd\u81f3\u5de5\u4f5c\u533a\u540e\uff0c\u9879\u76ee\u4f1a\u8fdb\u5165\u201c\u5047\u201d\u8fd0\u884c\u72b6\u6001\uff08\u7eff\u65d7\u9ad8\u4eae\uff0c\u4f46\u6ca1\u6709\u811a\u672c\u88ab\u89e6\u53d1\uff09\u3002\u7f16\u8f91\u5668\u6bcf\u5e27\u90fd\u4f1a\u68c0\u67e5\u8be5 HAT \u662f\u5426\u88ab\u89e6\u53d1\u3002\u53ea\u6709\u5f53\u4e0a\u4e00\u5e27\u8fd4\u56de",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"\u4e14\u5f53\u524d\u5e27\u8fd4\u56de",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"\u65f6\u79ef\u6728\u624d\u4f1a\u6b63\u5e38\u88ab\u8c03\u7528\u3002"),(0,o.kt)("h2",{id:"\u6811\u72b6\u79ef\u6728"},"\u6811\u72b6\u79ef\u6728"),(0,o.kt)("p",null,"ClipCC \u4ece 3.1.4 \u5f00\u59cb\u63d0\u4f9b\u5bf9\u6811\u72b6\u79ef\u6728\u7684\u652f\u6301\u3002\u4ee5\u4e0b\u662f\u4e00\u4e2a\u5b9a\u4e49\u6811\u72b6\u79ef\u6728\u7684\u5b9a\u4e49\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},"api.addBlock({\n    opcode: 'example.if',\n    type: type.BlockType.COMMAND,\n    messageId: 'example.if',\n    categoryId: 'example.category',\n    branchCount: 1,\n    param: {\n        COND: {\n            type: type.ParameterType.BOOLEAN\n        }\n    },\n    function: (args, util) => {\n        // If the condition is true, start the branch.\n        if (!!args.COND) util.startBranch(1, false);\n    }\n});\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="en.json"',title:'"en.json"'},'{\n    "example.if": "if [COND] [SUBSTACK]"\n}\n')),(0,o.kt)("p",null,'\u3000\u3000\u4f60\u9700\u8981\u5728 BlockPrototype \u4e2d\u6307\u5b9a "branchCount", \u5b83\u610f\u5473\u7740\u6811\u72b6\u79ef\u6728\u7684\u5206\u652f\u6570\u91cf\u3002 \u4f60\u8fd8\u9700\u8981\u5728\u8bed\u8a00\u6587\u4ef6\u4e2d\u4ee5 ',"[SUBSTACKX]"," \u7684\u547d\u540d\u65b9\u5f0f\u5b9a\u4e49\u5206\u652f\u53c2\u6570\u3002\n\u3000\u3000\u5bf9\u4e8e\u4e00\u4e2a\u6811\u72b6\u79ef\u6728, \u4f60\u53ef\u4ee5\u901a\u8fc7 util \u5bf9\u8c61\u4e2d\u7684 startBranch \u65b9\u6cd5\u6765\u8fdb\u884c\u6d41\u7a0b\u63a7\u5236\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n* \u5728\u5f53\u524d\u79ef\u6728\u4e0b\u89e6\u53d1\u67d0\u4e2a\u5206\u652f\n* @param {number} branchNum \u89e6\u53d1\u5206\u652f\u7684\u7f16\u53f7 (i.e., 1, 2).\n* @param {boolean} isLoop \u8fd9\u4e2a\u5206\u652f\u662f\u5426\u662f\u4e00\u4e2a\u5faa\u73af\n*/\nstartBranch (branchNum, isLoop) {...}\n")),(0,o.kt)("p",null,"\u5f53 ",(0,o.kt)("inlineCode",{parentName:"p"},"isLoop")," \u53c2\u6570\u88ab\u8bbe\u4e3a true \u65f6, \u79ef\u6728\u5c06\u88ab\u91cd\u590d\u8c03\u7528\uff0c\u76f4\u5230startBranch \u4e0d\u518d\u88ab\u89e6\u53d1\u3002\u5f53\u88ab\u8bbe\u4e3a false \u65f6, \u5f53\u524d\u79ef\u6728\u5c06\u88ab\u7acb\u523b\u8df3\u51fa\u3002 \u5f53",(0,o.kt)("inlineCode",{parentName:"p"},"branchNum"),"\u53c2\u6570\u672a\u88ab\u6307\u5b9a\u65f6, \u9ed8\u8ba4\u4e3a1\u3002\u8fd9\u91cc\u6709\u4e00\u4e2a\u5173\u4e8e\u6d41\u7a0b\u63a7\u5236\u7684 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SimonShiki/neurons"},"\u66f4\u4e3a\u8be6\u7ec6\u7684\u8303\u4f8b"),"."),(0,o.kt)("p",null,"\u7f16\u5199\u8fd9\u7c7b\u79ef\u6728\u901a\u5e38\u9700\u8981\u5bf9\u7ebf\u7a0b\u548c\u8c03\u5ea6\u5668\u8fdb\u884c\u4fee\u6539, \u6240\u4ee5\u4f60\u9700\u8981\u5bf9 Scratch/ClipCC \u7684\u4ee3\u7801\u5177\u6709\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u7684\u7406\u89e3\u3002\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u4e0d\u63a8\u8350\u4f60\u5b9a\u4e49\u8fd9\u7c7b\u79ef\u6728\u3002"))}m.isMDXComponent=!0}}]);