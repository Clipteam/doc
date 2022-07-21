"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[74],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9915:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),l=["components"],i={sidebar_position:2,title:"Basic tutorial"},p=void 0,s={unversionedId:"developer/basic",id:"developer/basic",title:"Basic tutorial",description:"This tutorial will illustrate the basic process of writing ClipCC extensions by demonstrating the writing of a simple extension.",source:"@site/docs/developer/basic.md",sourceDirName:"developer",slug:"/developer/basic",permalink:"/developer/basic",editUrl:"https://github.com/Clipteam/doc/edit/master/docs/developer/basic.md",tags:[],version:"current",lastUpdatedBy:"SimonShiki",lastUpdatedAt:1657290809,formattedLastUpdatedAt:"7/8/2022",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Basic tutorial"},sidebar:"docs",previous:{title:"Get started",permalink:"/developer/get-started"},next:{title:"Structure",permalink:"/developer/structure"}},c={},u=[{value:"Preparation",id:"preparation",level:2},{value:"Create a new project",id:"create-a-new-project",level:2},{value:"Write an extension",id:"write-an-extension",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This tutorial will illustrate the basic process of writing ClipCC extensions by demonstrating the writing of a simple extension."),(0,a.kt)("h2",{id:"preparation"},"Preparation"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"you need a computer with acceptable performance. for device safety, please do not developing by smartphone\ud83e\udd14."),(0,a.kt)("li",{parentName:"ol"},"you need to install Node.js and npm (you can also use yarn instead).")),(0,a.kt)("h2",{id:"create-a-new-project"},"Create a new project"),(0,a.kt)("p",null,"To make it easier to write the extension, please go to your working folder and then run the following commands in order."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm -g install clipcc-extension-cli # You can also replace it with yarn global add clipcc-extension-cli\nmkdir example-extension # example-extension can be replaced with the name of your own extension project\ncd example-extension\nnpm init # can also be replaced with yarn init\nccext-cli\n")),(0,a.kt)("p",null,"In the last step, the ClipCC extension development scaffold will ask questions about the extension information. please note that we will use ",(0,a.kt)("inlineCode",{parentName:"p"},"JavaScript(CommonJS)")," for development, so please choose JavaScript as your programming language.",(0,a.kt)("del",{parentName:"p"},"Although I prefer TypeScript")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://s3.jpg.cm/2021/08/22/IbEeHG.png",alt:"Image loading..."})),(0,a.kt)("p",null,"After answering the questions, the scaffold will automatically install the dependencies and wait for the installation to complete before creating a new ClipCC extension project."),(0,a.kt)("h2",{id:"write-an-extension"},"Write an extension"),(0,a.kt)("p",null,"After running, the contents of your folder should look like this."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"assets/\n- icon.jpg\n- inset_icon.svg\nlocales/\n- en.json\nindex.js\ninfo.json\npackage.json\nwebpack.config.js\n")),(0,a.kt)("p",null,"The locales directory is used to store the text of the block in different languages, assets is used to store the plugin resources, index.js is the main file to register the block/implement the function, and info.json is the plugin information."),(0,a.kt)("p",null,"First, open index.js and fill in the following content."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const {api, type, extension} = require('clipcc-extension');\nclass ExampleExtension extends Extension {\n    onInit() {\n        api.addCategory({\n            categoryId: 'clipteam.example.category',\n            messageId: 'clipteam.example.category',\n            color: '#339900'\n        });\n        api.addBlock({\n            opcode: 'clipteam.example.return',\n            type: type.BlockType.REPORTER,\n            messageId: 'clipteam.example.return',\n            categoryId: 'clipteam.example.category',\n            param: {\n                VALUE: {\n                    type: type.ParameterType.STRING,\n                    default: 'Hello World!'\n                }\n            },\n            function: args => this.ReturnValue(args.VALUE)\n        });\n        api.addBlock({\n            opcode: 'clipteam.example.helloworld',\n            type: type.BlockType.COMMAND,\n            messageId: 'clipteam.example.helloworld',\n            categoryId: 'clipteam.example.category',\n            function: args => this.HelloWorld()\n        });\n    }\n    onUninit() {\n        api.removeCategory('clipteam.example.category');\n    }\n    ReturnValue(VALUE) {\n        return VALUE;\n    }\n    HelloWorld() {\n        console.log(\"Hello World!\");\n        alert(\"Hello World!\");\n    }\n}\nmodule.exports = ExampleExtension;\n")),(0,a.kt)("p",null,"Then open locales/en.json and fill in"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "clipteam.example.name": "Example",\n    "clipteam.example.category": "Example",\n    "clipteam.example.description": "ClipCC example extension",\n    "clipteam.example.return": "return [VALUE]",\n    "clipteam.example.helloworld": "Hello World!"\n}\n')),(0,a.kt)("p",null,"After writing, run ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run build")," in the project top-level folder and the generated plugin can be found under dist/. Afterwards, import the generated plugin directly into ClipCC 3.1 and it will work as follows."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://s3.jpg.cm/2021/08/22/IbEuKQ.png",alt:"Exmaple"})))}m.isMDXComponent=!0}}]);