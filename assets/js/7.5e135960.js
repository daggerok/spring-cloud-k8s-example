(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{206:function(a,s,t){"use strict";t.r(s);var e=t(0),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"jar"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jar","aria-hidden":"true"}},[a._v("#")]),a._v(" jar")]),a._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#clone-repository"}},[a._v("clone repository")])]),t("li",[t("a",{attrs:{href:"#compile"}},[a._v("compile")])]),t("li",[t("a",{attrs:{href:"#run"}},[a._v("run")])]),t("li",[t("a",{attrs:{href:"#tear-down"}},[a._v("tear down")])])])]),t("p"),a._v(" "),t("h2",{attrs:{id:"clone-repository"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#clone-repository","aria-hidden":"true"}},[a._v("#")]),a._v(" clone repository")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone --depth"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" --no-single-branch https://github.com/daggerok/spring-cloud-k8s-example app "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$_")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h2",{attrs:{id:"compile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compile","aria-hidden":"true"}},[a._v("#")]),a._v(" compile")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("./mvnw -DskipTests\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h2",{attrs:{id:"run"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#run","aria-hidden":"true"}},[a._v("#")]),a._v(" run")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("java -jar infrastructure/eureka/target/*.jar\njava -jar apps/product/target/*.jar\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("h2",{attrs:{id:"tear-down"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tear-down","aria-hidden":"true"}},[a._v("#")]),a._v(" tear down")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("killall")]),a._v(" -9 java "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# or CTRL+C in terminal for each started app")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);