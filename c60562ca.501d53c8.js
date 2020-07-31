(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{101:function(e,n,t){"use strict";var a=t(0),l=t.n(a),r=t(98),s=t(95),o=t(47),c=t.n(o);const i=37,p=39;n.a=function(e){const{block:n,children:t,defaultValue:o,values:b,groupId:d}=e,{tabGroupChoices:u,setTabGroupChoices:m}=Object(r.a)(),[j,O]=Object(a.useState)(o);if(null!=d){const e=u[d];null!=e&&e!==j&&b.some(n=>n.value===e)&&O(e)}const g=e=>{O(e),null!=d&&m(d,e)},v=[];return l.a.createElement("div",null,l.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":n})},b.map(({value:e,label:n})=>l.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===e,className:Object(s.a)("tabs__item",c.a.tabItem,{"tabs__item--active":j===e}),key:e,ref:e=>v.push(e),onKeyDown:e=>((e,n,t)=>{switch(t.keyCode){case p:((e,n)=>{const t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()})(e,n);break;case i:((e,n)=>{const t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()})(e,n)}})(v,e.target,e),onFocus:()=>g(e),onClick:()=>g(e)},n))),l.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(t).filter(e=>e.props.value===j)[0]))}},102:function(e,n,t){"use strict";var a=t(0),l=t.n(a);n.a=function(e){return l.a.createElement("div",null,e.children)}},82:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return d}));var a=t(2),l=t(6),r=(t(0),t(93)),s=t(101),o=t(102),c={title:"Script Options"},i={unversionedId:"denon/configuration/script",id:"denon/configuration/script",isDocsHomePage:!1,title:"Script Options",description:"For the sake of brevity Typescript example omit the import for the DenonConfig:",source:"@site/docs/denon/configuration/script.md",permalink:"/docs/denon/configuration/script",editUrl:"https://github.com/denosaurs/website/edit/master/website/docs/denon/configuration/script.md",lastUpdatedBy:"Qu4k",lastUpdatedAt:1596187485,sidebar:"denon",previous:{title:"Introduction",permalink:"/docs/denon/configuration/introduction"},next:{title:"Watcher Options",permalink:"/docs/denon/configuration/watcher"}},p=[{value:"Scripts",id:"scripts",children:[]},{value:"Script Options",id:"script-options",children:[{value:"Environment variables",id:"environment-variables",children:[]},{value:"Permissions",id:"permissions",children:[]},{value:"File watching",id:"file-watching",children:[]},{value:"Import Map",id:"import-map",children:[]},{value:"TS config",id:"ts-config",children:[]},{value:"Unstable",id:"unstable",children:[]},{value:"Inspect and InspectBrk",id:"inspect-and-inspectbrk",children:[]},{value:"Cert",id:"cert",children:[]},{value:"Log",id:"log",children:[]}]}],b={rightToc:p};function d(e){var n=e.components,t=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"For the sake of brevity Typescript example omit the import for the ",Object(r.b)("inlineCode",{parentName:"p"},"DenonConfig"),":"),Object(r.b)("p",{parentName:"div"},Object(r.b)("inlineCode",{parentName:"p"},'import { DenonConfig } from "https://deno.land/x/denon/mod.ts";')))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Denon")," takes inspiration from the awesome ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/umbopepato/velociraptor"}),"velociraptor")," module in the way it handles scripts."),Object(r.b)("h2",{id:"scripts"},"Scripts"),Object(r.b)("p",null,"Scripts are declared inside the ",Object(r.b)("inlineCode",{parentName:"p"},"scripts")," object and are identified by a name:"),Object(r.b)(s.a,{groupId:"configuration-format",defaultValue:"json",values:[{label:"JSON",value:"json"},{label:"YML",value:"yaml"},{label:"Typescript",value:"typescript"}],mdxType:"Tabs"},Object(r.b)(o.a,{value:"json",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="denon.json"',title:'"denon.json"'}),'{\n  "scripts": {\n    // they all resolve to `deno run app.ts` when you run `denon start`\n    "start": "app.ts",\n    // OR\n    "start": "run app.ts",\n    // OR\n    "start": "deno run app.ts"\n  }\n}\n'))),Object(r.b)(o.a,{value:"yaml",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml",metastring:'title="denon.yml"',title:'"denon.yml"'}),'\nscripts:\n  # they all resolve to `deno run app.ts` when you run `denon start`\n  start: "app.ts"\n  # OR\n  start: "run app.ts"\n  # OR\n  start: "deno run app.ts"\n\n\n'))),Object(r.b)(o.a,{value:"typescript",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript",metastring:'title="denon.config.ts"',title:'"denon.config.ts"'}),'export default <DenonConfig>{\n  scripts: {\n    // they all resolve to `deno run app.ts` when you run `denon start`\n    start: "app.ts",\n    // OR\n    start: "run app.ts",\n    // OR\n    start: "deno run app.ts",\n  },\n};\n')))),Object(r.b)("p",null,"Scripts can also be defined by a complex object:"),Object(r.b)(s.a,{groupId:"configuration-format",defaultValue:"json",values:[{label:"JSON",value:"json"},{label:"YML",value:"yaml"},{label:"Typescript",value:"typescript"}],mdxType:"Tabs"},Object(r.b)(o.a,{value:"json",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="denon.json"',title:'"denon.json"'}),'{\n  "scripts": {\n    "start": {\n      "cmd": "deno run app.ts",\n      // with an optional description that\n      // is shown when you run `denon` to list\n      // all the available\n      "desc": "Run the main server.",\n\n      // available options...\n      // they are described in the next paragraph\n      "allow": ["env", "write"],\n      "unstable": true\n\n      // running `denon start` will resolve in\n      // deno run --allow-env --allow-write --unstable app.ts\n    }\n  }\n}\n'))),Object(r.b)(o.a,{value:"yaml",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml",metastring:'title="denon.yml"',title:'"denon.yml"'}),'\nscripts:\n  start:\n    cmd: "deno run app.ts"\n    # with an optional description that\n    # is shown when you run `denon` to list\n    # all the available\n    desc: "Run the main server."\n\n    # avaiable options\n    # they are described in the next paragraph\n    allow:\n      - env\n      - write\n    unstable: true\n\n# running `denon start` will resolve in\n# deno run --allow-env --allow-write --unstable app.ts\n\n'))),Object(r.b)(o.a,{value:"typescript",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript",metastring:'title="denon.config.ts"',title:'"denon.config.ts"'}),'export default <DenonConfig>{\n  scripts: {\n    start: {\n      cmd: "deno run app.ts",\n      // with an optional description that\n      // is shown when you run `denon` to list\n      // all the available\n      desc: "Run the main server.",\n\n      // available options...\n      // they are described in the next paragraph\n      allow: ["env", "write"],\n      unstable: true\n\n      // running `denon start` will resolve in\n      // deno run --allow-env --allow-write --unstable app.ts\n    }\n  }\n};\n')))),Object(r.b)("h2",{id:"script-options"},"Script Options"),Object(r.b)("p",null,"Options can be script specific or be declared as global in the root of the config file."),Object(r.b)("h3",{id:"environment-variables"},"Environment variables"),Object(r.b)("p",null,"Environment variables can be provided as an object and are passed directly to the child process."),Object(r.b)(s.a,{groupId:"configuration-format",defaultValue:"json",values:[{label:"JSON",value:"json"},{label:"YML",value:"yaml"},{label:"Typescript",value:"typescript"}],mdxType:"Tabs"},Object(r.b)(o.a,{value:"json",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="denon.json"',title:'"denon.json"'}),'{\n  // globally applied to all scripts\n  "env": { "TOKEN": "SUPER SECRET TOKEN" },\n\n  "scripts": {\n    "start": {\n      "cmd": "deno run app.ts",\n      "desc": "Run the main server.",\n\n      // made available only in the\n      // `start` script\n      "env": { "PORT": 3000 }\n    }\n  }\n}\n'))),Object(r.b)(o.a,{value:"yaml",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml",metastring:'title="denon.yml"',title:'"denon.yml"'}),'\n# globally applied to all scripts:\nenv:\n  TOKEN: "super secret token"\n\nscripts:\n  start:\n    cmd: "deno run app.ts"\n    desc: "Run the main server."\n\n    # made available only in the\n    # `start` script\n    env:\n      PORT: 3000\n\n'))),Object(r.b)(o.a,{value:"typescript",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript",metastring:'title="denon.config.ts"',title:'"denon.config.ts"'}),'export default <DenonConfig>{\n  // globally applied to all scripts\n  env: { "TOKEN": "SUPER SECRET TOKEN" },\n\n  scripts: {\n    start: {\n      cmd: "deno run app.ts",\n      desc: "Run the main server.",\n\n      // made available only in the\n      // `start` script\n      env: { "PORT": 3000 }\n    }\n  }\n};\n')))),Object(r.b)("h3",{id:"permissions"},"Permissions"),Object(r.b)("p",null,"Permission can be granted to child processes. You can provide specific permissions for each script,\nbut you can also declare permissions globally, following the same format."),Object(r.b)(s.a,{groupId:"configuration-format",defaultValue:"json",values:[{label:"JSON",value:"json"},{label:"YML",value:"yaml"},{label:"Typescript",value:"typescript"}],mdxType:"Tabs"},Object(r.b)(o.a,{value:"json",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="denon.json"',title:'"denon.json"'}),'{\n  // globally applied to all scripts\n  // as object ...\n  "allow": {\n    "read": "/etc,/tmp", // --allow-read=/etc,/tmp\n    "env": true // --allow-env\n  },\n  // ... or as array\n  "allow": [\n    "run", // --allow-run\n    "net" // --allow-net\n  ],\n\n  "scripts": {\n    "start": {\n      "cmd": "deno run app.ts",\n\n      // specific for a single script\n      // as object ...\n      "allow": {\n        "read": "/etc,/tmp", // --allow-read=/etc,/tmp\n        "env": true // --allow-env\n      },\n      // ... or as array\n      "allow": [\n        "run", // --allow-run\n        "net" // --allow-net\n      ]\n    }\n  }\n}\n'))),Object(r.b)(o.a,{value:"yaml",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml",metastring:'title="denon.yml"',title:'"denon.yml"'}),'\n# globally applied to all scripts\n# as object ...\nallow:\n  read: "/etc,/tmp" # --allow-read=/etc,/tmp\n  env: true # --allow-env\n# ... or as array\nallow:\n  - "run" # --allow-run\n  - "net" # --allow -net\n\nscripts:\n  start:\n    cmd: deno run app.ts\n\n    # specific for a single script\n    # as object ...\n    allow:\n      read: "/etc,/tmp" # --allow-read=/etc,/tmp\n      env: true # --allow-env\n    # ... or as array\n    allow:\n      - "run" # --allow-run\n      - "net" # --allow -net\n\n\n\n\n\n\n\n'))),Object(r.b)(o.a,{value:"typescript",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript",metastring:'title="denon.config.ts"',title:'"denon.config.ts"'}),'export default <DenonConfig>{\n  // globally applied to all scripts\n  // as object ...\n  allow: {\n    read: "/etc,/tmp", // --allow-read=/etc,/tmp\n    env: true // --allow-env\n  },\n  // ... or as array\n  allow: [\n    "run", // --allow-run\n    "net" // --allow-net\n  ],\n\n  scripts: {\n    start: {\n      cmd: "deno run app.ts",\n\n      // specific for a single script\n      // as object ...\n      allow: {\n        read: "/etc,/tmp", // --allow-read=/etc,/tmp\n        env: true // --allow-env\n      },\n      // ... or as array\n      allow: [\n        "run", // --allow-run\n        "net" // --allow-net\n      ]\n    }\n  }\n};\n')))),Object(r.b)("h3",{id:"file-watching"},"File watching"),Object(r.b)("p",null,"While file watching is a core feature of ",Object(r.b)("inlineCode",{parentName:"p"},"denon")," you always have the option\nof disabling file watching and run a script only once:"),Object(r.b)(s.a,{groupId:"configuration-format",defaultValue:"json",values:[{label:"JSON",value:"json"},{label:"YML",value:"yaml"},{label:"Typescript",value:"typescript"}],mdxType:"Tabs"},Object(r.b)(o.a,{value:"json",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="denon.json"',title:'"denon.json"'}),'{\n  // globally applied to all scripts\n  // now denon will essentialy be a script runner\n  "watch": false,\n\n  "scripts": {\n    "start": {\n      "cmd": "deno run app.ts",\n      "desc": "Run the main server.",\n\n      // you can still enable watch on a script-by-script basis\n      "watch": true\n    }\n  }\n}\n'))),Object(r.b)(o.a,{value:"yaml",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml",metastring:'title="denon.yml"',title:'"denon.yml"'}),"\n# globally applied to all scripts\n# not denon will essentially be a script runner\nwatch: false\n\nscripts:\n  cmd: deno run app.ts\n  desc: Run the main server.\n\n  # you can still enable watch on a script-by-script basis\n  watch: false\n\n\n\n\n"))),Object(r.b)(o.a,{value:"typescript",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript",metastring:'title="denon.config.ts"',title:'"denon.config.ts"'}),'export default <DenonConfig>{\n  // globally applied to all scripts\n  // now denon will essentialy be a script runner\n  watch: false,\n\n  scripts: {\n    start: {\n      cmd: "deno run app.ts",\n      desc: "Run the main server.",\n\n      // you can still enable watch on a script-by-script basis\n      watch: true\n    }\n  }\n};\n')))),Object(r.b)("h3",{id:"import-map"},"Import Map"),Object(r.b)("p",null,"Load import map file. Take a look a at the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://deno.land/manual/linking_to_external_code/import_maps"}),"official docs")," for additional info."),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"This feature in unstable in the current version of the deno executable."))),Object(r.b)(s.a,{groupId:"configuration-format",defaultValue:"json",values:[{label:"JSON",value:"json"},{label:"YML",value:"yaml"},{label:"Typescript",value:"typescript"}],mdxType:"Tabs"},Object(r.b)(o.a,{value:"json",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="denon.json"',title:'"denon.json"'}),'{\n  "scripts": {\n    "start": {\n      "cmd": "deno run app.ts",\n      "desc": "Run the main server.",\n\n      "importmap": "importmap.json"\n    }\n  }\n}\n'))),Object(r.b)(o.a,{value:"yaml",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml",metastring:'title="denon.yml"',title:'"denon.yml"'}),'\nscripts:\n  cmd: deno run app.ts\n  desc: Run the main server.\n\n  importmap: "importmap.json"\n\n\n\n\n'))),Object(r.b)(o.a,{value:"typescript",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript",metastring:'title="denon.config.ts"',title:'"denon.config.ts"'}),'export default <DenonConfig>{\n  scripts: {\n    start: {\n      cmd: "deno run app.ts",\n      desc: "Run the main server.",\n\n      importmap: "importmap.json"\n    }\n  }\n};\n')))),Object(r.b)("h3",{id:"ts-config"},"TS config"),Object(r.b)("p",null,"Load tsconfig.json configuration file:"),Object(r.b)(s.a,{groupId:"configuration-format",defaultValue:"json",values:[{label:"JSON",value:"json"},{label:"YML",value:"yaml"},{label:"Typescript",value:"typescript"}],mdxType:"Tabs"},Object(r.b)(o.a,{value:"json",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="denon.json"',title:'"denon.json"'}),'{\n  "scripts": {\n    "start": {\n      "cmd": "deno run app.ts",\n      "desc": "Run the main server.",\n\n      "tsconfig": "tsconfig.json"\n    }\n  }\n}\n'))),Object(r.b)(o.a,{value:"yaml",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml",metastring:'title="denon.yml"',title:'"denon.yml"'}),'\nscripts:\n  cmd: deno run app.ts\n  desc: Run the main server.\n\n  tsconfig: "tsconfig.json"\n\n\n\n\n'))),Object(r.b)(o.a,{value:"typescript",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript",metastring:'title="denon.config.ts"',title:'"denon.config.ts"'}),'export default <DenonConfig>{\n  scripts: {\n    start: {\n      cmd: "deno run app.ts",\n      desc: "Run the main server.",\n\n      tsconfig: "tsconfig.json"\n    }\n  }\n};\n')))),Object(r.b)("h3",{id:"unstable"},"Unstable"),Object(r.b)("p",null,"Enable if the script is using unstable features of deno runtime:"),Object(r.b)(s.a,{groupId:"configuration-format",defaultValue:"json",values:[{label:"JSON",value:"json"},{label:"YML",value:"yaml"},{label:"Typescript",value:"typescript"}],mdxType:"Tabs"},Object(r.b)(o.a,{value:"json",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="denon.json"',title:'"denon.json"'}),'{\n  "scripts": {\n    "start": {\n      "cmd": "deno run app.ts",\n      "desc": "Run the main server.",\n\n      "unstable": true\n    }\n  }\n}\n'))),Object(r.b)(o.a,{value:"yaml",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml",metastring:'title="denon.yml"',title:'"denon.yml"'}),"\nscripts:\n  cmd: deno run app.ts\n  desc: Run the main server.\n\n  unstable: true\n\n\n\n\n"))),Object(r.b)(o.a,{value:"typescript",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript",metastring:'title="denon.config.ts"',title:'"denon.config.ts"'}),'export default <DenonConfig>{\n  scripts: {\n    start: {\n      cmd: "deno run app.ts",\n      desc: "Run the main server.",\n\n      unstable: true\n    }\n  }\n};\n')))),Object(r.b)("h3",{id:"inspect-and-inspectbrk"},"Inspect and InspectBrk"),Object(r.b)("p",null,"Activate inspector on ",Object(r.b)("inlineCode",{parentName:"p"},"host:port"),". If ",Object(r.b)("inlineCode",{parentName:"p"},"inspectBrk")," is used the executions breaks at the start of the user script:"),Object(r.b)(s.a,{groupId:"configuration-format",defaultValue:"json",values:[{label:"JSON",value:"json"},{label:"YML",value:"yaml"},{label:"Typescript",value:"typescript"}],mdxType:"Tabs"},Object(r.b)(o.a,{value:"json",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="denon.json"',title:'"denon.json"'}),'{\n  "scripts": {\n    "start": {\n      "cmd": "deno run app.ts",\n      "desc": "Run the main server.",\n\n      "inspect": "127.0.0.1:9229",\n      // OR\n      "inspectBrk": "127.0.0.1:9229"\n    }\n  }\n}\n'))),Object(r.b)(o.a,{value:"yaml",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml",metastring:'title="denon.yml"',title:'"denon.yml"'}),'\nscripts:\n  cmd: deno run app.ts\n  desc: Run the main server.\n\n  inspect: "127.0.0.1:9229",\n  # OR\n  inspectBrk: "127.0.0.1:9229"\n\n\n\n\n'))),Object(r.b)(o.a,{value:"typescript",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript",metastring:'title="denon.config.ts"',title:'"denon.config.ts"'}),'export default <DenonConfig>{\n  scripts: {\n    start: {\n      cmd: "deno run app.ts",\n      desc: "Run the main server.",\n\n      inspect: "127.0.0.1:9229",\n      // OR\n      inspectBrk: "127.0.0.1:9229"\n    }\n  }\n};\n')))),Object(r.b)("h4",{id:"lockfile"},"Lockfile"),Object(r.b)("p",null,"Check the specified lock file:"),Object(r.b)(s.a,{groupId:"configuration-format",defaultValue:"json",values:[{label:"JSON",value:"json"},{label:"YML",value:"yaml"},{label:"Typescript",value:"typescript"}],mdxType:"Tabs"},Object(r.b)(o.a,{value:"json",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="denon.json"',title:'"denon.json"'}),'{\n  "scripts": {\n    "start": {\n      "cmd": "deno run app.ts",\n      "desc": "Run the main server.",\n\n      "lock": "lock.json"\n    }\n  }\n}\n'))),Object(r.b)(o.a,{value:"yaml",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml",metastring:'title="denon.yml"',title:'"denon.yml"'}),'\nscripts:\n  cmd: deno run app.ts\n  desc: Run the main server.\n\n  lock: "lock.json"\n\n\n\n\n'))),Object(r.b)(o.a,{value:"typescript",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript",metastring:'title="denon.config.ts"',title:'"denon.config.ts"'}),'export default <DenonConfig>{\n  scripts: {\n    start: {\n      cmd: "deno run app.ts",\n      desc: "Run the main server.",\n\n      lock: "lock.json"\n    }\n  }\n};\n')))),Object(r.b)("h3",{id:"cert"},"Cert"),Object(r.b)("p",null,"Load certificate authority from PEM encoded file:"),Object(r.b)(s.a,{groupId:"configuration-format",defaultValue:"json",values:[{label:"JSON",value:"json"},{label:"YML",value:"yaml"},{label:"Typescript",value:"typescript"}],mdxType:"Tabs"},Object(r.b)(o.a,{value:"json",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="denon.json"',title:'"denon.json"'}),'{\n  "scripts": {\n    "start": {\n      "cmd": "deno run app.ts",\n      "desc": "Run the main server.",\n\n      "cert": "cert.pem"\n    }\n  }\n}\n'))),Object(r.b)(o.a,{value:"yaml",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml",metastring:'title="denon.yml"',title:'"denon.yml"'}),'\nscripts:\n  cmd: deno run app.ts\n  desc: Run the main server.\n\n  cert: "cert.pem"\n\n\n\n\n'))),Object(r.b)(o.a,{value:"typescript",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript",metastring:'title="denon.config.ts"',title:'"denon.config.ts"'}),'export default <DenonConfig>{\n  scripts: {\n    start: {\n      cmd: "deno run app.ts",\n      desc: "Run the main server.",\n\n      cert: "cert.pem"\n    }\n  }\n};\n')))),Object(r.b)("h3",{id:"log"},"Log"),Object(r.b)("p",null,"Set log level: (possible values: ",Object(r.b)("inlineCode",{parentName:"p"},"debug"),", ",Object(r.b)("inlineCode",{parentName:"p"},"info"),")"),Object(r.b)(s.a,{groupId:"configuration-format",defaultValue:"json",values:[{label:"JSON",value:"json"},{label:"YML",value:"yaml"},{label:"Typescript",value:"typescript"}],mdxType:"Tabs"},Object(r.b)(o.a,{value:"json",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="denon.json"',title:'"denon.json"'}),'{\n  "scripts": {\n    "start": {\n      "cmd": "deno run app.ts",\n      "desc": "Run the main server.",\n\n      "log": "debug" // or "info"\n    }\n  }\n}\n'))),Object(r.b)(o.a,{value:"yaml",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml",metastring:'title="denon.yml"',title:'"denon.yml"'}),'\nscripts:\n  cmd: deno run app.ts\n  desc: Run the main server.\n\n  log: "debug" # or "info"\n\n\n\n\n'))),Object(r.b)(o.a,{value:"typescript",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript",metastring:'title="denon.config.ts"',title:'"denon.config.ts"'}),'export default <DenonConfig>{\n  scripts: {\n    start: {\n      cmd: "deno run app.ts",\n      desc: "Run the main server.",\n\n      log: "debug" // or "info"\n    }\n  }\n};\n')))))}d.isMDXComponent=!0},93:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var a=t(0),l=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=l.a.createContext({}),p=function(e){var n=l.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},b=function(e){var n=p(e.components);return l.a.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return l.a.createElement(l.a.Fragment,{},n)}},u=l.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),b=p(t),u=a,m=b["".concat(s,".").concat(u)]||b[u]||d[u]||r;return t?l.a.createElement(m,o(o({ref:n},i),{},{components:t})):l.a.createElement(m,o({ref:n},i))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,s=new Array(r);s[0]=u;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var i=2;i<r;i++)s[i]=t[i];return l.a.createElement.apply(null,s)}return l.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},95:function(e,n,t){"use strict";function a(e){var n,t,l="";if("string"==typeof e||"number"==typeof e)l+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(l&&(l+=" "),l+=t);else for(n in e)e[n]&&(l&&(l+=" "),l+=n);return l}n.a=function(){for(var e,n,t=0,l="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(l&&(l+=" "),l+=n);return l}},97:function(e,n,t){"use strict";var a=t(0);const l=Object(a.createContext)(void 0);n.a=l},98:function(e,n,t){"use strict";var a=t(0),l=t(97);n.a=function(){const e=Object(a.useContext)(l.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}}}]);