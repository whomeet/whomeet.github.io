(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{60:function(e,n,t){"use strict";t.r(n);var a=t(0),l=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"content"},[t("h3",{attrs:{id:"eslint-使用帮助"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#eslint-使用帮助","aria-hidden":"true"}},[e._v("#")]),e._v(" ESLint 使用帮助")]),t("h4",{attrs:{id:"推荐使用vscode，本文档使用vscode进行说明，其他编辑器自行处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#推荐使用vscode，本文档使用vscode进行说明，其他编辑器自行处理","aria-hidden":"true"}},[e._v("#")]),e._v(" 推荐使用"),t("code",[e._v("VSCode")]),e._v("，本文档使用"),t("code",[e._v("VSCode")]),e._v("进行说明，其他编辑器自行处理")]),t("h4",{attrs:{id:"规则使用eslint-config-alloy规范，如对此规范不了解可点击这里查看"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#规则使用eslint-config-alloy规范，如对此规范不了解可点击这里查看","aria-hidden":"true"}},[e._v("#")]),e._v(" 规则使用"),t("code",[e._v("eslint-config-alloy")]),e._v("规范，如对此规范不了解"),t("a",{attrs:{href:"https://github.com/AlloyTeam/eslint-config-alloy",target:"_blank",rel:"noopener noreferrer"}},[e._v("可点击这里查看")])]),t("hr"),t("p",[e._v("1.在扩展中安装ESLint插件")]),t("p",[e._v("2.添加"),t("code",[e._v("eslint-config-alloy")])]),t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("npm install --save-dev eslint babel-eslint eslint-config-alloy\n\nwith vue:\n\nnpm install --save-dev eslint babel-eslint vue-eslint-parser@2.0.1-beta.2 eslint-plugin-vue@3 eslint-config-alloy\n\nwith TypeScript\n\nnpm install --save-dev eslint typescript typescript-eslint-parser eslint-plugin-typescript eslint-config-alloy\n\n")])]),t("p",[e._v("3.添加"),t("code",[e._v(".eslintrc")]),e._v("和"),t("code",[e._v(".eslintignore")]),e._v("文件")]),t("p",[e._v(".eslintrc:")]),t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('module.exports = {\n    extends: [\n        //\'eslint-config-alloy\',\n        // 如果是vue则使用这个\n        //\'eslint-config-alloy/vue\',\n        // 如果是react则使用这个\n        //\'eslint-config-alloy/react\'\n    ],\n    globals: {\n        // 这里填入你的项目需要的全局变量\n        // 这里值为 false 表示这个全局变量不允许被重新赋值，比如：\n        //\n        // jQuery: false,\n        // $: false\n    },\n    rules: {\n    \t// 推荐新项目不要打开规则，尽量去适应这份规则\n        // "vue/order-in-components": "off",\n        // 关闭强制使用"==="\n        // "eqeqeq": ["off"],\n        // 关闭函数名前空格检测\n        // "space-before-function-paren": [\'off\'],\n        // 允许使用for-in\n        "guard-for-in": [\'off\'],\n        // debugger\n        // "no-debugger": [\'off\']\n    }\n};\n')])]),t("p",[e._v(".eslintignore:")]),t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("/build\n/dist\n...不使用规则检查的文件\n")])]),t("p",[e._v("4.在"),t("code",[e._v("VSCode")]),e._v("设置里打开eslint检查与保存时自动修复")]),t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('    "eslint.autoFixOnSave": true,\n    "eslint.validate": [\n        "javascript",\n        "javascriptreact",\n        "html",\n        {\n            "language": "vue",\n            "autoFix": true\n        },\n        {\n            "language": "typescript",\n            "autoFix": true\n        },\n        {\n            "language": "typescriptreact",\n            "autoFix": true\n        }\n    ],\n    "eslint.enable": true\n')])]),t("p",[e._v("5.如果某些代码不想使用某些规则来规范，可以在代码前添加注释，例如：")]),t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("/* eslint-disable no-new */\n\t\n或\n\t\n/* eslint-disable */\n")])]),t("p",[e._v("6.推荐不要分号（"),t("a",{attrs:{href:"http://inimino.org/~inimino/blog/javascript_semicolons",target:"_blank",rel:"noopener noreferrer"}},[e._v("英文好可以看这篇讲解")]),e._v("）。")]),t("p",[e._v("7.推荐使用eslint来规范代码，对于多人合作开发，极大的提高工作效率，不用去阅读“烂代码”是多么的清爽。推荐尽量去适应这份规则，如果配置不好，也可以参考"),t("a",{attrs:{href:"http://www.alloyteam.com/2017/08/13065/",target:"_blank",rel:"noopener noreferrer"}},[e._v("AlloyTeam ESLint 配置指南")])])])}],!1,null,null,null);n.default=l.exports}}]);