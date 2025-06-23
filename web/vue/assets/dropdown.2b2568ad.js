import{D as i,j as r,k as m,l as p,m as l,n as c,o as v,p as _,q as g,r as u}from"./icon.1cfd67f7.js";import{D as w,b as h}from"./slot.0ad3daba.js";import{U as C,D as b,a as f,b as x,c as D,d as P,e as I,f as k,g as A,h as y,i as S,j as O,k as N,l as T,m as M,n as z,o as $,p as E,q as H,r as j,s as U}from"./index.ecd789cb.js";import{P as q}from"./prism.a27ccf6a.js";import{n as B}from"./index.663c003f.js";import"./discount.0512a96b.js";var F=`<template>
  <div>
    <t-dropdown :options="options" :minColumnWidth="88">
      <t-button variant="text">\u4E0B\u62C9\u83DC\u5355</t-button>
    </t-dropdown>
  </div>
</template>
<script>
export default {
  data() {
    return {
      options: [
        {
          content: '\u64CD\u4F5C\u4E00',
          value: 1,
          onClick: () => this.$message.success('\u64CD\u4F5C\u4E00'),
        },
        {
          content: '\u64CD\u4F5C\u4E8C',
          value: 2,
          onClick: () => this.$message.success('\u64CD\u4F5C\u4E8C'),
        },
        {
          content: '\u64CD\u4F5C\u4E09',
          value: 3,
          onClick: () => this.$message.success('\u64CD\u4F5C\u4E09'),
        },
        {
          content: '\u64CD\u4F5C\u56DB',
          value: 4,
          onClick: () => this.$message.success('\u64CD\u4F5C\u56DB'),
        },
      ],
    };
  },
};
<\/script>
`,W=`<template>
  <div>
    <t-dropdown :options="options" :minColumnWidth="88">
      <t-button variant="text">\u4E0B\u62C9\u83DC\u5355</t-button>
    </t-dropdown>
  </div>
</template>
<script setup>
import { MessagePlugin } from 'tdesign-vue';
import { ref } from 'vue';

const options = ref([
  {
    content: '\u64CD\u4F5C\u4E00',
    value: 1,
    onClick: () => MessagePlugin.success('\u64CD\u4F5C\u4E00'),
  },
  {
    content: '\u64CD\u4F5C\u4E8C',
    value: 2,
    onClick: () => MessagePlugin.success('\u64CD\u4F5C\u4E8C'),
  },
  {
    content: '\u64CD\u4F5C\u4E09',
    value: 3,
    onClick: () => MessagePlugin.success('\u64CD\u4F5C\u4E09'),
  },
  {
    content: '\u64CD\u4F5C\u56DB',
    value: 4,
    onClick: () => MessagePlugin.success('\u64CD\u4F5C\u56DB'),
  },
]);
<\/script>
`,R=`<template>
  <t-space direction="vertical">
    <t-space direction="vertical">
      <h4>\u652F\u6301\u76F4\u63A5\u4F7F\u7528 t-dropdown-menu</h4>
      <t-dropdown :min-column-width="88" @click="clickHandler">
        <t-button variant="text">\u4E0B\u62C9\u83DC\u5355</t-button>
        <t-dropdown-menu>
          <t-dropdown-item :value="1">
            \u64CD\u4F5C\u4E00
            <t-dropdown-menu>
              <t-dropdown-item :value="11">\u64CD\u4F5C1-1</t-dropdown-item>
              <t-dropdown-item :value="12">
                \u64CD\u4F5C1-2
                <t-dropdown-menu>
                  <t-dropdown-item :value="111">\u64CD\u4F5C1-1-1</t-dropdown-item>
                  <t-dropdown-item :value="112">\u64CD\u4F5C1-1-2</t-dropdown-item>
                </t-dropdown-menu>
              </t-dropdown-item>
            </t-dropdown-menu>
          </t-dropdown-item>

          <t-dropdown-item :value="2">
            \u64CD\u4F5C\u4E8C
            <t-dropdown-menu>
              <t-dropdown-item :value="21">
                \u64CD\u4F5C2-1
                <t-dropdown-menu>
                  <t-dropdown-item :value="211">\u64CD\u4F5C2-1-1</t-dropdown-item>
                  <t-dropdown-item :value="212" theme="error" @click="handleClick">
                    <div><t-icon name="error-circle"></t-icon>\u5371\u9669\u64CD\u4F5C</div>
                  </t-dropdown-item>
                </t-dropdown-menu>
              </t-dropdown-item>
              <t-dropdown-item :value="22"> \u64CD\u4F5C2-2 </t-dropdown-item>
            </t-dropdown-menu>
          </t-dropdown-item>

          <t-dropdown-item :value="3"> \u64CD\u4F5C\u4E09 </t-dropdown-item>
        </t-dropdown-menu>
      </t-dropdown>
    </t-space>
    <t-space direction="vertical">
      <h4>\u517C\u5BB9\u5386\u53F2\u7248\u672C \u901A\u8FC7 dropdown \u5177\u540D\u63D2\u69FD\u7684\u4F7F\u7528</h4>
      <t-dropdown :min-column-width="88" @click="clickHandler">
        <t-button variant="text">\u4E0B\u62C9\u83DC\u5355</t-button>
        <template #dropdown>
          <t-dropdown-menu>
            <t-dropdown-item :value="1">
              \u64CD\u4F5C\u4E00
              <t-dropdown-menu>
                <t-dropdown-item :value="11">\u64CD\u4F5C1-1</t-dropdown-item>
                <t-dropdown-item :value="12">
                  \u64CD\u4F5C1-2
                  <t-dropdown-menu>
                    <t-dropdown-item :value="111">\u64CD\u4F5C1-1-1</t-dropdown-item>
                    <t-dropdown-item :value="112">\u64CD\u4F5C1-1-2</t-dropdown-item>
                  </t-dropdown-menu>
                </t-dropdown-item>
              </t-dropdown-menu>
            </t-dropdown-item>
            <t-dropdown-item :value="2"> \u64CD\u4F5C\u4E8C </t-dropdown-item>
            <t-dropdown-item :value="3"> \u64CD\u4F5C\u4E09 </t-dropdown-item>
          </t-dropdown-menu>
        </template>
      </t-dropdown>
    </t-space>
  </t-space>
</template>
<script>
import { MessagePlugin } from 'tdesign-vue';

export default {
  methods: {
    clickHandler(data) {
      console.log(data, 'data');
      if (data.value !== 212) MessagePlugin.success(\`\u9009\u4E2D\u3010\${data.value}\u3011\`);
    },
    handleClick() {
      MessagePlugin.success('\u70B9\u51FB \u64CD\u4F5C2-1-2');
    },
  },
};
<\/script>
`,G=`<template>
  <t-space direction="vertical">
    <t-space direction="vertical">
      <h4>\u652F\u6301\u76F4\u63A5\u4F7F\u7528 t-dropdown-menu</h4>
      <t-dropdown :min-column-width="88" @click="clickHandler">
        <t-button variant="text">\u4E0B\u62C9\u83DC\u5355</t-button>
        <t-dropdown-menu>
          <t-dropdown-item :value="1">
            \u64CD\u4F5C\u4E00
            <t-dropdown-menu>
              <t-dropdown-item :value="11">\u64CD\u4F5C1-1</t-dropdown-item>
              <t-dropdown-item :value="12">
                \u64CD\u4F5C1-2
                <t-dropdown-menu>
                  <t-dropdown-item :value="111">\u64CD\u4F5C1-1-1</t-dropdown-item>
                  <t-dropdown-item :value="112">\u64CD\u4F5C1-1-2</t-dropdown-item>
                </t-dropdown-menu>
              </t-dropdown-item>
            </t-dropdown-menu>
          </t-dropdown-item>

          <t-dropdown-item :value="2">
            \u64CD\u4F5C\u4E8C
            <t-dropdown-menu>
              <t-dropdown-item :value="21">
                \u64CD\u4F5C2-1
                <t-dropdown-menu>
                  <t-dropdown-item :value="211">\u64CD\u4F5C2-1-1</t-dropdown-item>
                  <t-dropdown-item :value="212" theme="error" @click="handleClick">
                    <div><t-icon name="error-circle"></t-icon>\u5371\u9669\u64CD\u4F5C</div>
                  </t-dropdown-item>
                </t-dropdown-menu>
              </t-dropdown-item>
              <t-dropdown-item :value="22"> \u64CD\u4F5C2-2 </t-dropdown-item>
            </t-dropdown-menu>
          </t-dropdown-item>

          <t-dropdown-item :value="3"> \u64CD\u4F5C\u4E09 </t-dropdown-item>
        </t-dropdown-menu>
      </t-dropdown>
    </t-space>
    <t-space direction="vertical">
      <h4>\u517C\u5BB9\u5386\u53F2\u7248\u672C \u901A\u8FC7 dropdown \u5177\u540D\u63D2\u69FD\u7684\u4F7F\u7528</h4>
      <t-dropdown :min-column-width="88" @click="clickHandler">
        <t-button variant="text">\u4E0B\u62C9\u83DC\u5355</t-button>
        <template #dropdown>
          <t-dropdown-menu>
            <t-dropdown-item :value="1">
              \u64CD\u4F5C\u4E00
              <t-dropdown-menu>
                <t-dropdown-item :value="11">\u64CD\u4F5C1-1</t-dropdown-item>
                <t-dropdown-item :value="12">
                  \u64CD\u4F5C1-2
                  <t-dropdown-menu>
                    <t-dropdown-item :value="111">\u64CD\u4F5C1-1-1</t-dropdown-item>
                    <t-dropdown-item :value="112">\u64CD\u4F5C1-1-2</t-dropdown-item>
                  </t-dropdown-menu>
                </t-dropdown-item>
              </t-dropdown-menu>
            </t-dropdown-item>
            <t-dropdown-item :value="2"> \u64CD\u4F5C\u4E8C </t-dropdown-item>
            <t-dropdown-item :value="3"> \u64CD\u4F5C\u4E09 </t-dropdown-item>
          </t-dropdown-menu>
        </template>
      </t-dropdown>
    </t-space>
  </t-space>
</template>
<script setup>
import { MessagePlugin } from 'tdesign-vue';

const clickHandler = (data) => {
  console.log(data, 'data');
  if (data.value !== 212) MessagePlugin.success(\`\u9009\u4E2D\u3010\${data.value}\u3011\`);
};
const handleClick = () => {
  MessagePlugin.success('\u70B9\u51FB \u64CD\u4F5C2-1-2');
};
<\/script>
`,d=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("td-doc-content",{ref:"tdDocContent",attrs:{"page-status":"hidden"}},[t("td-doc-header",{ref:"tdDocHeader",attrs:{slot:"doc-header",spline:"navigation",platform:"web"},slot:"doc-header"},[t("td-doc-badge",{attrs:{slot:"badge",label:"coverage",message:"86.53%"},slot:"badge"})],1),t("td-doc-tabs",{ref:"tdDocTabs",attrs:{tab:e.tab}}),t("div",{directives:[{name:"show",rawName:"v-show",value:e.tab==="demo",expression:"tab === 'demo'"}]},[t("div",{attrs:{name:"DEMO"}},[t("nav",{staticClass:"tdesign-toc_container"},[t("ol",{staticClass:"tdesign-toc_list"},[t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u6587\u5B57\u4E0B\u62C9\u83DC\u5355"}},[e._v("\u6587\u5B57\u4E0B\u62C9\u83DC\u5355")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u6309\u94AE\u4E0B\u62C9\u83DC\u5355"}},[e._v("\u6309\u94AE\u4E0B\u62C9\u83DC\u5355")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u5E26\u5206\u5272\u7EBF\u4E0B\u62C9\u83DC\u5355"}},[e._v("\u5E26\u5206\u5272\u7EBF\u4E0B\u62C9\u83DC\u5355")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u591A\u5C42\u4E0B\u62C9\u83DC\u5355"}},[e._v("\u591A\u5C42\u4E0B\u62C9\u83DC\u5355")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u5E26\u7981\u7528\u64CD\u4F5C\u9879\u7684\u4E0B\u62C9\u83DC\u5355"}},[e._v("\u5E26\u7981\u7528\u64CD\u4F5C\u9879\u7684\u4E0B\u62C9\u83DC\u5355")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u81EA\u5B9A\u4E49\u5176\u4ED6\u5C5E\u6027\u7684\u4E0B\u62C9\u83DC\u5355"}},[e._v("\u81EA\u5B9A\u4E49\u5176\u4ED6\u5C5E\u6027\u7684\u4E0B\u62C9\u83DC\u5355")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u5B9A\u4E49\u6700\u5927\u9AD8\u5EA6\u7684\u4E0B\u62C9\u83DC\u5355"}},[e._v("\u5B9A\u4E49\u6700\u5927\u9AD8\u5EA6\u7684\u4E0B\u62C9\u83DC\u5355")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u81EA\u5B9A\u4E49\u4E3B\u9898\u7684\u4E0B\u62C9\u83DC\u5355"}},[e._v("\u81EA\u5B9A\u4E49\u4E3B\u9898\u7684\u4E0B\u62C9\u83DC\u5355")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u5411\u5DE6\u5C55\u5F00\u7684\u4E0B\u62C9\u83DC\u5355"}},[e._v("\u5411\u5DE6\u5C55\u5F00\u7684\u4E0B\u62C9\u83DC\u5355")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u5E26\u56FE\u6807\u7684\u4E0B\u62C9\u83DC\u5355"}},[e._v("\u5E26\u56FE\u6807\u7684\u4E0B\u62C9\u83DC\u5355")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u7ED1\u5B9A\u70B9\u51FB\u4E8B\u4EF6\u7684\u4E0B\u62C9\u83DC\u5355"}},[e._v("\u7ED1\u5B9A\u70B9\u51FB\u4E8B\u4EF6\u7684\u4E0B\u62C9\u83DC\u5355")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u901A\u8FC7\u63D2\u69FD\u65B9\u5F0F\u4F7F\u7528\u4E0B\u62C9\u83DC\u5355"}},[e._v("\u901A\u8FC7\u63D2\u69FD\u65B9\u5F0F\u4F7F\u7528\u4E0B\u62C9\u83DC\u5355")])])])]),t("Usage"),t("h3",{attrs:{id:"\u6587\u5B57\u4E0B\u62C9\u83DC\u5355"}},[e._v("\u6587\u5B57\u4E0B\u62C9\u83DC\u5355 "),t("a",{staticClass:"header-anchor",attrs:{href:"#\u6587\u5B57\u4E0B\u62C9\u83DC\u5355"}})]),t("p",[e._v("\u6587\u5B57\u6309\u94AE\u89E6\u53D1\u4E0B\u62C9\u83DC\u5355\u3002\u5E38\u7528\u4E8E\u7A7A\u95F4\u6781\u5EA6\u53D7\u9650\u7684\u6536\u7EB3\u64CD\u4F5C\u573A\u666F\uFF0C\u4E00\u822C\u7528\u4E8E\u8868\u683C\u5185\u8BE6\u60C5\u64CD\u4F5C\u7684\u6536\u7EB3\u3002")]),t("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--dropdown-base tdesign-demo-item--dropdown"},[t("td-doc-demo",{attrs:{"demo-name":"base",languages:"OptionsAPI,CompositionAPI","data-OptionsAPI":e.DemoexamplebaseCode,"data-CompositionAPI":e.DemoexamplebaseCompositionCode,language:"markup"}},[t("div",{attrs:{slot:"action"},slot:"action"},[t("Stackblitz",{attrs:{"demo-name":"base","component-name":" dropdown"}}),t("Codesandbox",{attrs:{"demo-name":"base","component-name":" dropdown"}})],1),t("div",{staticClass:"tdesign-demo-item__body"},[t("Demoexamplebase")],1)])],1),t("h3",{attrs:{id:"\u6309\u94AE\u4E0B\u62C9\u83DC\u5355"}},[e._v("\u6309\u94AE\u4E0B\u62C9\u83DC\u5355 "),t("a",{staticClass:"header-anchor",attrs:{href:"#\u6309\u94AE\u4E0B\u62C9\u83DC\u5355"}})]),t("p",[e._v("\u666E\u901A\u6309\u94AE\u89E6\u53D1\u4E0B\u62C9\u83DC\u5355\u3002\u5E38\u7528\u4E8E\u64CD\u4F5C\u6536\u7EB3\u573A\u666F\u3002")]),t("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--dropdown-button tdesign-demo-item--dropdown"},[t("td-doc-demo",{attrs:{"demo-name":"button",languages:"OptionsAPI,CompositionAPI","data-OptionsAPI":e.DemoexamplebuttonCode,"data-CompositionAPI":e.DemoexamplebuttonCompositionCode,language:"markup"}},[t("div",{attrs:{slot:"action"},slot:"action"},[t("Stackblitz",{attrs:{"demo-name":"button","component-name":" dropdown"}}),t("Codesandbox",{attrs:{"demo-name":"button","component-name":" dropdown"}})],1),t("div",{staticClass:"tdesign-demo-item__body"},[t("Demoexamplebutton")],1)])],1),t("h3",{attrs:{id:"\u5E26\u5206\u5272\u7EBF\u4E0B\u62C9\u83DC\u5355"}},[e._v("\u5E26\u5206\u5272\u7EBF\u4E0B\u62C9\u83DC\u5355 "),t("a",{staticClass:"header-anchor",attrs:{href:"#\u5E26\u5206\u5272\u7EBF\u4E0B\u62C9\u83DC\u5355"}})]),t("p",[e._v("\u901A\u8FC7\u5206\u5272\u7EBF\u533A\u5206\u4E0D\u540C\u7684\u4E0B\u62C9\u83DC\u5355\u64CD\u4F5C\u3002\u5E38\u7528\u4E8E\u9700\u8981\u533A\u5206\u4E0D\u540C\u64CD\u4F5C\u7ED3\u679C\u7684\u573A\u666F\u3002")]),t("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--dropdown-split tdesign-demo-item--dropdown"},[t("td-doc-demo",{attrs:{"demo-name":"split",languages:"OptionsAPI,CompositionAPI","data-OptionsAPI":e.DemoexamplesplitCode,"data-CompositionAPI":e.DemoexamplesplitCompositionCode,language:"markup"}},[t("div",{attrs:{slot:"action"},slot:"action"},[t("Stackblitz",{attrs:{"demo-name":"split","component-name":" dropdown"}}),t("Codesandbox",{attrs:{"demo-name":"split","component-name":" dropdown"}})],1),t("div",{staticClass:"tdesign-demo-item__body"},[t("Demoexamplesplit")],1)])],1),t("h3",{attrs:{id:"\u591A\u5C42\u4E0B\u62C9\u83DC\u5355"}},[e._v("\u591A\u5C42\u4E0B\u62C9\u83DC\u5355 "),t("a",{staticClass:"header-anchor",attrs:{href:"#\u591A\u5C42\u4E0B\u62C9\u83DC\u5355"}})]),t("p",[e._v("\u5E26\u903B\u8F91\u5C42\u7EA7\u5173\u7CFB\u7684\u64CD\u4F5C\u4E0B\u62C9\u83DC\u5355\u3002\u5E38\u7528\u4E8E\u9700\u8981\u6536\u7EB3\u591A\u5C42\u903B\u8F91\u7684\u64CD\u4F5C\u573A\u666F\u3002")]),t("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--dropdown-multiple tdesign-demo-item--dropdown"},[t("td-doc-demo",{attrs:{"demo-name":"multiple",languages:"OptionsAPI,CompositionAPI","data-OptionsAPI":e.DemoexamplemultipleCode,"data-CompositionAPI":e.DemoexamplemultipleCompositionCode,language:"markup"}},[t("div",{attrs:{slot:"action"},slot:"action"},[t("Stackblitz",{attrs:{"demo-name":"multiple","component-name":" dropdown"}}),t("Codesandbox",{attrs:{"demo-name":"multiple","component-name":" dropdown"}})],1),t("div",{staticClass:"tdesign-demo-item__body"},[t("Demoexamplemultiple")],1)])],1),t("h3",{attrs:{id:"\u5E26\u7981\u7528\u64CD\u4F5C\u9879\u7684\u4E0B\u62C9\u83DC\u5355"}},[e._v("\u5E26\u7981\u7528\u64CD\u4F5C\u9879\u7684\u4E0B\u62C9\u83DC\u5355 "),t("a",{staticClass:"header-anchor",attrs:{href:"#\u5E26\u7981\u7528\u64CD\u4F5C\u9879\u7684\u4E0B\u62C9\u83DC\u5355"}})]),t("p",[e._v("\u4E0B\u62C9\u83DC\u5355\u7684\u64CD\u4F5C\u9879\u53EF\u4EE5\u8BBE\u7F6E\u7981\u7528\u3002\u5E38\u7528\u4E8E\u7981\u7528\u90E8\u5206\u64CD\u4F5C\u9879\u7684\u573A\u666F\u3002")]),t("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--dropdown-disabled tdesign-demo-item--dropdown"},[t("td-doc-demo",{attrs:{"demo-name":"disabled",languages:"OptionsAPI,CompositionAPI","data-OptionsAPI":e.DemoexampledisabledCode,"data-CompositionAPI":e.DemoexampledisabledCompositionCode,language:"markup"}},[t("div",{attrs:{slot:"action"},slot:"action"},[t("Stackblitz",{attrs:{"demo-name":"disabled","component-name":" dropdown"}}),t("Codesandbox",{attrs:{"demo-name":"disabled","component-name":" dropdown"}})],1),t("div",{staticClass:"tdesign-demo-item__body"},[t("Demoexampledisabled")],1)])],1),t("h3",{attrs:{id:"\u81EA\u5B9A\u4E49\u5176\u4ED6\u5C5E\u6027\u7684\u4E0B\u62C9\u83DC\u5355"}},[e._v("\u81EA\u5B9A\u4E49\u5176\u4ED6\u5C5E\u6027\u7684\u4E0B\u62C9\u83DC\u5355 "),t("a",{staticClass:"header-anchor",attrs:{href:"#\u81EA\u5B9A\u4E49\u5176\u4ED6\u5C5E\u6027\u7684\u4E0B\u62C9\u83DC\u5355"}})]),t("p",[e._v("\u4E0B\u62C9\u83DC\u5355\u4F9D\u8D56 "),t("code",[e._v("Popup")]),e._v(" \u7EC4\u4EF6\uFF0C\u53EF\u4EE5\u900F\u4F20\u81EA\u5B9A\u4E49 "),t("code",[e._v("Popup")]),e._v(" \u7EC4\u4EF6\u7684\u5C5E\u6027\u3002")]),t("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--dropdown-custom tdesign-demo-item--dropdown"},[t("td-doc-demo",{attrs:{"demo-name":"custom",languages:"OptionsAPI,CompositionAPI","data-OptionsAPI":e.DemoexamplecustomCode,"data-CompositionAPI":e.DemoexamplecustomCompositionCode,language:"markup"}},[t("div",{attrs:{slot:"action"},slot:"action"},[t("Stackblitz",{attrs:{"demo-name":"custom","component-name":" dropdown"}}),t("Codesandbox",{attrs:{"demo-name":"custom","component-name":" dropdown"}})],1),t("div",{staticClass:"tdesign-demo-item__body"},[t("Demoexamplecustom")],1)])],1),t("h3",{attrs:{id:"\u5B9A\u4E49\u6700\u5927\u9AD8\u5EA6\u7684\u4E0B\u62C9\u83DC\u5355"}},[e._v("\u5B9A\u4E49\u6700\u5927\u9AD8\u5EA6\u7684\u4E0B\u62C9\u83DC\u5355 "),t("a",{staticClass:"header-anchor",attrs:{href:"#\u5B9A\u4E49\u6700\u5927\u9AD8\u5EA6\u7684\u4E0B\u62C9\u83DC\u5355"}})]),t("p",[e._v("\u4E0B\u62C9\u83DC\u5355\u652F\u6301\u5B9A\u4E49\u6700\u5927\u9AD8\u5EA6\u3002")]),t("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--dropdown-long tdesign-demo-item--dropdown"},[t("td-doc-demo",{attrs:{"demo-name":"long",languages:"OptionsAPI,CompositionAPI","data-OptionsAPI":e.DemoexamplelongCode,"data-CompositionAPI":e.DemoexamplelongCompositionCode,language:"markup"}},[t("div",{attrs:{slot:"action"},slot:"action"},[t("Stackblitz",{attrs:{"demo-name":"long","component-name":" dropdown"}}),t("Codesandbox",{attrs:{"demo-name":"long","component-name":" dropdown"}})],1),t("div",{staticClass:"tdesign-demo-item__body"},[t("Demoexamplelong")],1)])],1),t("h3",{attrs:{id:"\u81EA\u5B9A\u4E49\u4E3B\u9898\u7684\u4E0B\u62C9\u83DC\u5355"}},[e._v("\u81EA\u5B9A\u4E49\u4E3B\u9898\u7684\u4E0B\u62C9\u83DC\u5355 "),t("a",{staticClass:"header-anchor",attrs:{href:"#\u81EA\u5B9A\u4E49\u4E3B\u9898\u7684\u4E0B\u62C9\u83DC\u5355"}})]),t("p",[e._v("\u4E0B\u62C9\u83DC\u5355\u7684\u83DC\u5355\u9879\u90FD\u652F\u6301\u81EA\u5B9A\u4E49\u4E3B\u9898\uFF0C\u6839\u636E\u5177\u4F53\u573A\u666F\u4F7F\u7528\u3002")]),t("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--dropdown-theme tdesign-demo-item--dropdown"},[t("td-doc-demo",{attrs:{"demo-name":"theme",languages:"OptionsAPI,CompositionAPI","data-OptionsAPI":e.DemoexamplethemeCode,"data-CompositionAPI":e.DemoexamplethemeCompositionCode,language:"markup"}},[t("div",{attrs:{slot:"action"},slot:"action"},[t("Stackblitz",{attrs:{"demo-name":"theme","component-name":" dropdown"}}),t("Codesandbox",{attrs:{"demo-name":"theme","component-name":" dropdown"}})],1),t("div",{staticClass:"tdesign-demo-item__body"},[t("Demoexampletheme")],1)])],1),t("h3",{attrs:{id:"\u5411\u5DE6\u5C55\u5F00\u7684\u4E0B\u62C9\u83DC\u5355"}},[e._v("\u5411\u5DE6\u5C55\u5F00\u7684\u4E0B\u62C9\u83DC\u5355 "),t("a",{staticClass:"header-anchor",attrs:{href:"#\u5411\u5DE6\u5C55\u5F00\u7684\u4E0B\u62C9\u83DC\u5355"}})]),t("p",[e._v("\u4E0B\u62C9\u83DC\u5355\u652F\u6301\u5411\u5DE6\u4FA7\u5C55\u5F00\u3002")]),t("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--dropdown-left tdesign-demo-item--dropdown"},[t("td-doc-demo",{attrs:{"demo-name":"left",languages:"OptionsAPI,CompositionAPI","data-OptionsAPI":e.DemoexampleleftCode,"data-CompositionAPI":e.DemoexampleleftCompositionCode,language:"markup"}},[t("div",{attrs:{slot:"action"},slot:"action"},[t("Stackblitz",{attrs:{"demo-name":"left","component-name":" dropdown"}}),t("Codesandbox",{attrs:{"demo-name":"left","component-name":" dropdown"}})],1),t("div",{staticClass:"tdesign-demo-item__body"},[t("Demoexampleleft")],1)])],1),t("h3",{attrs:{id:"\u5E26\u56FE\u6807\u7684\u4E0B\u62C9\u83DC\u5355"}},[e._v("\u5E26\u56FE\u6807\u7684\u4E0B\u62C9\u83DC\u5355 "),t("a",{staticClass:"header-anchor",attrs:{href:"#\u5E26\u56FE\u6807\u7684\u4E0B\u62C9\u83DC\u5355"}})]),t("p",[e._v("\u4E0B\u62C9\u83DC\u5355\u652F\u6301\u914D\u7F6E\u83DC\u5355\u9879\u7684\u524D\u7F6E\u56FE\u6807\u3002")]),t("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--dropdown-icon tdesign-demo-item--dropdown"},[t("td-doc-demo",{attrs:{"demo-name":"icon",languages:"OptionsAPI,CompositionAPI","data-OptionsAPI":e.DemoexampleiconCode,"data-CompositionAPI":e.DemoexampleiconCompositionCode,language:"markup"}},[t("div",{attrs:{slot:"action"},slot:"action"},[t("Stackblitz",{attrs:{"demo-name":"icon","component-name":" dropdown"}}),t("Codesandbox",{attrs:{"demo-name":"icon","component-name":" dropdown"}})],1),t("div",{staticClass:"tdesign-demo-item__body"},[t("Demoexampleicon")],1)])],1),t("h3",{attrs:{id:"\u7ED1\u5B9A\u70B9\u51FB\u4E8B\u4EF6\u7684\u4E0B\u62C9\u83DC\u5355"}},[e._v("\u7ED1\u5B9A\u70B9\u51FB\u4E8B\u4EF6\u7684\u4E0B\u62C9\u83DC\u5355 "),t("a",{staticClass:"header-anchor",attrs:{href:"#\u7ED1\u5B9A\u70B9\u51FB\u4E8B\u4EF6\u7684\u4E0B\u62C9\u83DC\u5355"}})]),t("p",[e._v("\u4E0B\u62C9\u83DC\u5355\u7684\u64CD\u4F5C\u9879\u7ED1\u5B9A click \u4E8B\u4EF6\uFF0C\u5E38\u7528\u4E8E\u9700\u8981\u5BF9\u6BCF\u4E2A\u64CD\u4F5C\u9879\u7ED1\u5B9A\u4E0D\u540C\u7684 click \u4E8B\u4EF6\u7684\u573A\u666F\u3002")]),t("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--dropdown-event tdesign-demo-item--dropdown"},[t("td-doc-demo",{attrs:{"demo-name":"event",languages:"OptionsAPI,CompositionAPI","data-OptionsAPI":e.DemoexampleeventCode,"data-CompositionAPI":e.DemoexampleeventCompositionCode,language:"markup"}},[t("div",{attrs:{slot:"action"},slot:"action"},[t("Stackblitz",{attrs:{"demo-name":"event","component-name":" dropdown"}}),t("Codesandbox",{attrs:{"demo-name":"event","component-name":" dropdown"}})],1),t("div",{staticClass:"tdesign-demo-item__body"},[t("Demoexampleevent")],1)])],1),t("h3",{attrs:{id:"\u901A\u8FC7\u63D2\u69FD\u65B9\u5F0F\u4F7F\u7528\u4E0B\u62C9\u83DC\u5355"}},[e._v("\u901A\u8FC7\u63D2\u69FD\u65B9\u5F0F\u4F7F\u7528\u4E0B\u62C9\u83DC\u5355 "),t("a",{staticClass:"header-anchor",attrs:{href:"#\u901A\u8FC7\u63D2\u69FD\u65B9\u5F0F\u4F7F\u7528\u4E0B\u62C9\u83DC\u5355"}})]),t("p",[e._v("\u4E0B\u62C9\u83DC\u5355\u64CD\u4F5C\u9879\u652F\u6301\u901A\u8FC7\u63D2\u69FD\u7684\u65B9\u5F0F\u4F20\u9012\u64CD\u4F5C\u9879\u3002")]),t("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--dropdown-slot tdesign-demo-item--dropdown"},[t("td-doc-demo",{attrs:{"demo-name":"slot",languages:"OptionsAPI,CompositionAPI","data-OptionsAPI":e.DemoexampleslotCode,"data-CompositionAPI":e.DemoexampleslotCompositionCode,language:"markup"}},[t("div",{attrs:{slot:"action"},slot:"action"},[t("Stackblitz",{attrs:{"demo-name":"slot","component-name":" dropdown"}}),t("Codesandbox",{attrs:{"demo-name":"slot","component-name":" dropdown"}})],1),t("div",{staticClass:"tdesign-demo-item__body"},[t("Demoexampleslot")],1)])],1)],1),t("td-contributors",{attrs:{platform:"web",framework:"vue","component-name":"dropdown"}})],1),t("div",{directives:[{name:"show",rawName:"v-show",value:e.tab==="api",expression:"tab === 'api'"}],attrs:{name:"API"}},[t("nav",{staticClass:"tdesign-toc_container"},[t("ol",{staticClass:"tdesign-toc_list"},[t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#dropdown-props"}},[e._v("Dropdown Props")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#dropdown-events"}},[e._v("Dropdown Events")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#dropdownitem-props"}},[e._v("DropdownItem Props")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#dropdownitem-events"}},[e._v("DropdownItem Events")])])])]),t("h3",{attrs:{id:"dropdown-props"}},[e._v("Dropdown Props "),t("a",{staticClass:"header-anchor",attrs:{href:"#dropdown-props"}})]),t("table",[t("thead",[t("tr",[t("th",[e._v("\u540D\u79F0")]),t("th",[e._v("\u7C7B\u578B")]),t("th",[e._v("\u9ED8\u8BA4\u503C")]),t("th",[e._v("\u8BF4\u660E")]),t("th",[e._v("\u5FC5\u4F20")])])]),t("tbody",[t("tr",[t("td",[e._v("direction")]),t("td",[e._v("String")]),t("td",[e._v("right")]),t("td",[e._v("\u591A\u5C42\u7EA7\u64CD\u4F5C\u65F6\uFF0C\u5B50\u5C42\u7EA7\u5C55\u5F00\u65B9\u5411\u3002\u53EF\u9009\u9879\uFF1Aleft/right")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("disabled")]),t("td",[e._v("Boolean")]),t("td",[e._v("false")]),t("td",[e._v("\u662F\u5426\u7981\u7528\u7EC4\u4EF6")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("hideAfterItemClick")]),t("td",[e._v("Boolean")]),t("td",[e._v("true")]),t("td",[e._v("\u70B9\u51FB\u9009\u9879\u540E\u662F\u5426\u81EA\u52A8\u9690\u85CF\u5F39\u7A97")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("maxColumnWidth")]),t("td",[e._v("String / Number")]),t("td",[e._v("100")]),t("td",[e._v("\u9009\u9879\u6700\u5927\u5BBD\u5EA6\uFF0C\u5185\u5BB9\u8D85\u51FA\u65F6\uFF0C\u663E\u793A\u4E3A\u7701\u7565\u53F7\u3002\u503C\u4E3A\u5B57\u7B26\u4E32\u65F6\uFF0C\u503C\u5C31\u662F\u6700\u5927\u5BBD\u5EA6\uFF1B\u503C\u4E3A\u6570\u5B57\u65F6\uFF0C\u5355\u4F4D\uFF1Apx")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("maxHeight")]),t("td",[e._v("Number")]),t("td",[e._v("300")]),t("td",[e._v("\u5F39\u7A97\u6700\u5927\u9AD8\u5EA6\uFF0C\u5355\u4F4D\uFF1Apx \u3002\u7EDF\u4E00\u63A7\u5236\u6BCF\u4E00\u5217\u7684\u9AD8\u5EA6")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("minColumnWidth")]),t("td",[e._v("String / Number")]),t("td",[e._v("10")]),t("td",[e._v("\u9009\u9879\u6700\u5C0F\u5BBD\u5EA6\u3002\u503C\u4E3A\u5B57\u7B26\u4E32\u65F6\uFF0C\u503C\u5C31\u662F\u6700\u5C0F\u5BBD\u5EA6\uFF1B\u503C\u4E3A\u6570\u5B57\u65F6\uFF0C\u5355\u4F4D\uFF1Apx")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("options")]),t("td",[e._v("Array")]),t("td",[e._v("[]")]),t("td",[e._v("\u4E0B\u62C9\u64CD\u4F5C\u9879\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("Array<DropdownOption>")]),e._v(" "),t("code",[e._v("type DropdownOption = { children?: Array<TdDropdownItemProps> } & TdDropdownItemProps & Record<string, any>")]),e._v("\u3002"),t("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/tree/develop/src/dropdown/type.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("\u8BE6\u7EC6\u7C7B\u578B\u5B9A\u4E49")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("placement")]),t("td",[e._v("String")]),t("td",[e._v("bottom-left")]),t("td",[e._v("\u5F39\u7A97\u5B9A\u4F4D\u65B9\u5F0F\uFF0C\u53EF\u9009\u503C\u540C Popup \u7EC4\u4EF6\u3002\u53EF\u9009\u9879\uFF1Atop/left/right/bottom/top-left/top-right/bottom-left/bottom-right/left-top/left-bottom/right-top/right-bottom")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("popupProps")]),t("td",[e._v("Object")]),t("td",[e._v("-")]),t("td",[e._v("\u900F\u4F20 Popup \u7EC4\u4EF6\u5C5E\u6027\uFF0C\u65B9\u4FBF\u66F4\u52A0\u81EA\u7531\u5730\u63A7\u5236\u3002\u6BD4\u5982\u4F7F\u7528 popupProps.overlayStyle \u8BBE\u7F6E\u6D6E\u5C42\u6837\u5F0F\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("PopupProps")]),e._v("\uFF0C"),t("a",{attrs:{href:"./popup?tab=api"}},[e._v("Popup API Documents")]),e._v("\u3002"),t("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/tree/develop/src/dropdown/type.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("\u8BE6\u7EC6\u7C7B\u578B\u5B9A\u4E49")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("trigger")]),t("td",[e._v("String")]),t("td",[e._v("hover")]),t("td",[e._v("\u89E6\u53D1\u4E0B\u62C9\u663E\u793A\u7684\u65B9\u5F0F\u3002\u53EF\u9009\u9879\uFF1Ahover/click/focus/context-menu")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("onClick")]),t("td",[e._v("Function")]),t("td"),t("td",[e._v("TS \u7C7B\u578B\uFF1A"),t("code",[e._v("(dropdownItem: DropdownOption, context: { e: MouseEvent }) => void")]),t("br"),e._v("\u4E0B\u62C9\u64CD\u4F5C\u9879\u70B9\u51FB\u65F6\u89E6\u53D1")]),t("td",[e._v("N")])])])]),t("h3",{attrs:{id:"dropdown-events"}},[e._v("Dropdown Events "),t("a",{staticClass:"header-anchor",attrs:{href:"#dropdown-events"}})]),t("table",[t("thead",[t("tr",[t("th",[e._v("\u540D\u79F0")]),t("th",[e._v("\u53C2\u6570")]),t("th",[e._v("\u63CF\u8FF0")])])]),t("tbody",[t("tr",[t("td",[e._v("click")]),t("td",[t("code",[e._v("(dropdownItem: DropdownOption, context: { e: MouseEvent })")])]),t("td",[e._v("\u4E0B\u62C9\u64CD\u4F5C\u9879\u70B9\u51FB\u65F6\u89E6\u53D1")])])])]),t("h3",{attrs:{id:"dropdownitem-props"}},[e._v("DropdownItem Props "),t("a",{staticClass:"header-anchor",attrs:{href:"#dropdownitem-props"}})]),t("table",[t("thead",[t("tr",[t("th",[e._v("\u540D\u79F0")]),t("th",[e._v("\u7C7B\u578B")]),t("th",[e._v("\u9ED8\u8BA4\u503C")]),t("th",[e._v("\u8BF4\u660E")]),t("th",[e._v("\u5FC5\u4F20")])])]),t("tbody",[t("tr",[t("td",[e._v("active")]),t("td",[e._v("Boolean")]),t("td",[e._v("false")]),t("td",[e._v("\u662F\u5426\u9AD8\u4EAE\u5F53\u524D\u64CD\u4F5C\u9879")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("content")]),t("td",[e._v("String / Slot / Function")]),t("td",[e._v("''")]),t("td",[e._v("\u4E0B\u62C9\u64CD\u4F5C\u9879\u5185\u5BB9\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("string | TNode")]),e._v("\u3002"),t("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("\u901A\u7528\u7C7B\u578B\u5B9A\u4E49")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("disabled")]),t("td",[e._v("Boolean")]),t("td",[e._v("false")]),t("td",[e._v("\u662F\u5426\u7981\u7528\u64CD\u4F5C\u9879")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("divider")]),t("td",[e._v("Boolean")]),t("td",[e._v("false")]),t("td",[e._v("\u662F\u5426\u663E\u793A\u64CD\u4F5C\u9879\u4E4B\u95F4\u7684\u5206\u9694\u7EBF\uFF08\u5206\u9694\u7EBF\u9ED8\u8BA4\u5728\u4E0B\u65B9\uFF09")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("prefixIcon")]),t("td",[e._v("Slot / Function")]),t("td",[e._v("-")]),t("td",[e._v("\u7EC4\u4EF6\u524D\u7F6E\u56FE\u6807\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("TNode")]),e._v("\u3002"),t("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("\u901A\u7528\u7C7B\u578B\u5B9A\u4E49")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("theme")]),t("td",[e._v("String")]),t("td",[e._v("default")]),t("td",[e._v("\u4E0B\u62C9\u83DC\u5355\u9009\u9879\u4E3B\u9898\u3002\u53EF\u9009\u9879\uFF1Adefault/success/warning/error\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("DropdownItemTheme")]),e._v(" "),t("code",[e._v("type DropdownItemTheme = 'default' | 'success' | 'warning' | 'error'")]),e._v("\u3002"),t("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/tree/develop/src/dropdown/type.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("\u8BE6\u7EC6\u7C7B\u578B\u5B9A\u4E49")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("value")]),t("td",[e._v("String / Number / Object")]),t("td",[e._v("-")]),t("td",[e._v("\u4E0B\u62C9\u64CD\u4F5C\u9879\u552F\u4E00\u6807\u8BC6\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("string | number | { [key: string]: any }")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("onClick")]),t("td",[e._v("Function")]),t("td"),t("td",[e._v("TS \u7C7B\u578B\uFF1A"),t("code",[e._v("(dropdownItem: DropdownOption, context: { e: MouseEvent }) => void")]),t("br"),e._v("\u70B9\u51FB\u65F6\u89E6\u53D1")]),t("td",[e._v("N")])])])]),t("h3",{attrs:{id:"dropdownitem-events"}},[e._v("DropdownItem Events "),t("a",{staticClass:"header-anchor",attrs:{href:"#dropdownitem-events"}})]),t("table",[t("thead",[t("tr",[t("th",[e._v("\u540D\u79F0")]),t("th",[e._v("\u53C2\u6570")]),t("th",[e._v("\u63CF\u8FF0")])])]),t("tbody",[t("tr",[t("td",[e._v("click")]),t("td",[t("code",[e._v("(dropdownItem: DropdownOption, context: { e: MouseEvent })")])]),t("td",[e._v("\u70B9\u51FB\u65F6\u89E6\u53D1")])])])])]),t("div",{directives:[{name:"show",rawName:"v-show",value:e.tab==="design",expression:"tab === 'design'"}],attrs:{name:"DESIGN"}},[t("nav",{staticClass:"tdesign-toc_container"},[t("ol",{staticClass:"tdesign-toc_list"},[t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u4F55\u65F6\u4F7F\u7528"}},[e._v("\u4F55\u65F6\u4F7F\u7528")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u4E0E\u5E03\u5C40\u76F8\u5173"}},[e._v("\u4E0E\u5E03\u5C40\u76F8\u5173")]),t("ol",{staticClass:"tdesign-toc_list"})]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u63A8\u8350-\u614E\u7528\u793A\u4F8B"}},[e._v("\u63A8\u8350/\u614E\u7528\u793A\u4F8B")]),t("ol",{staticClass:"tdesign-toc_list"})]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u76F8\u4F3C\u7EC4\u4EF6"}},[e._v("\u76F8\u4F3C\u7EC4\u4EF6")])])])]),t("h3",{attrs:{id:"\u4F55\u65F6\u4F7F\u7528"}},[e._v("\u4F55\u65F6\u4F7F\u7528 "),t("a",{staticClass:"header-anchor",attrs:{href:"#\u4F55\u65F6\u4F7F\u7528"}})]),t("p",[e._v("\u5F53\u9700\u8981\u5728\u4E0D\u5F71\u54CD\u9875\u9762\u7ED3\u6784\u7684\u60C5\u51B5\u4E0B\uFF0C\u96C6\u6210\u591A\u79CD\u64CD\u4F5C\u65F6\uFF1B")]),t("p",[e._v("\u5F53\u529F\u80FD\u6A21\u5757\u5165\u53E3\u8F83\u591A\uFF0C\u9700\u6536\u7EB3\u90E8\u5206\u4F4E\u9891\u5165\u53E3\uFF0C\u51CF\u5C11\u5BF9\u7A7A\u95F4\u7684\u5360\u7528\u65F6\u3002")]),t("h3",{attrs:{id:"\u4E0E\u5E03\u5C40\u76F8\u5173"}},[e._v("\u4E0E\u5E03\u5C40\u76F8\u5173 "),t("a",{staticClass:"header-anchor",attrs:{href:"#\u4E0E\u5E03\u5C40\u76F8\u5173"}})]),t("h5",{attrs:{id:"\u4E0B\u62C9\u83DC\u5355\u5728\u9875\u9762\u5185\u56DB\u4E2A\u533A\u57DF\u4F1A\u6709\u4E0D\u540C\u7684\u5E03\u5C40\u65B9\u5F0F\u3002"}},[e._v("\u4E0B\u62C9\u83DC\u5355\u5728\u9875\u9762\u5185\u56DB\u4E2A\u533A\u57DF\u4F1A\u6709\u4E0D\u540C\u7684\u5E03\u5C40\u65B9\u5F0F\u3002 "),t("a",{staticClass:"header-anchor",attrs:{href:"#\u4E0B\u62C9\u83DC\u5355\u5728\u9875\u9762\u5185\u56DB\u4E2A\u533A\u57DF\u4F1A\u6709\u4E0D\u540C\u7684\u5E03\u5C40\u65B9\u5F0F\u3002"}})]),t("div",{staticClass:"legend"},[t("div",{staticClass:"item"},[t("img",{attrs:{src:"https://tdesign.gtimg.com/site/design/guide/dropdown/dropdown-1@2x.png"}}),t("em",[e._v("\u56FE\u793A\uFF1A\u5728\u5DE6\u4E0A\u89D2\uFF0C\u5411\u53F3\u4E0B\u89D2\u5C55\u5F00")])]),t("div",{staticClass:"item"},[t("img",{attrs:{src:"https://tdesign.gtimg.com/site/design/guide/dropdown/dropdown-2@2x.png"}}),t("em",[e._v("\u56FE\u793A\uFF1A\u5728\u53F3\u4E0A\u89D2\uFF0C\u5411\u5DE6\u4E0B\u89D2\u5C55\u5F00")])])]),t("div",{staticClass:"legend"},[t("div",{staticClass:"item"},[t("img",{attrs:{src:"https://tdesign.gtimg.com/site/design/guide/dropdown/dropdown-3@2x.png"}}),t("em",[e._v("\u56FE\u793A\uFF1A\u5728\u5DE6\u4E0B\u89D2\uFF0C\u5411\u53F3\u4E0A\u89D2\u5C55\u5F00")])]),t("div",{staticClass:"item"},[t("img",{attrs:{src:"https://tdesign.gtimg.com/site/design/guide/dropdown/dropdown-4@2x.png"}}),t("em",[e._v("\u56FE\u793A\uFF1A\u5728\u53F3\u4E0B\u89D2\uFF0C\u5411\u5DE6\u4E0A\u89D2\u5C55\u5F00\u3002")])])]),t("hr"),t("h3",{attrs:{id:"\u63A8\u8350-\u614E\u7528\u793A\u4F8B"}},[e._v("\u63A8\u8350/\u614E\u7528\u793A\u4F8B "),t("a",{staticClass:"header-anchor",attrs:{href:"#\u63A8\u8350-\u614E\u7528\u793A\u4F8B"}})]),t("h5",{attrs:{id:"\u9488\u5BF9\u91CD\u8981\u6216\u903B\u8F91\u76F8\u53CD\u7684\u64CD\u4F5C\uFF0C\u5E94\u4E0E\u5176\u4ED6\u64CD\u4F5C\u8FDB\u884C\u533A\u5206\uFF0C\u5E76\u81F3\u964D\u4F4E\u4F18\u5148\u7EA7\u51CF\u5C11\u8BEF\u89E6\u3002"}},[e._v("\u9488\u5BF9\u91CD\u8981\u6216\u903B\u8F91\u76F8\u53CD\u7684\u64CD\u4F5C\uFF0C\u5E94\u4E0E\u5176\u4ED6\u64CD\u4F5C\u8FDB\u884C\u533A\u5206\uFF0C\u5E76\u81F3\u964D\u4F4E\u4F18\u5148\u7EA7\u51CF\u5C11\u8BEF\u89E6\u3002 "),t("a",{staticClass:"header-anchor",attrs:{href:"#\u9488\u5BF9\u91CD\u8981\u6216\u903B\u8F91\u76F8\u53CD\u7684\u64CD\u4F5C\uFF0C\u5E94\u4E0E\u5176\u4ED6\u64CD\u4F5C\u8FDB\u884C\u533A\u5206\uFF0C\u5E76\u81F3\u964D\u4F4E\u4F18\u5148\u7EA7\u51CF\u5C11\u8BEF\u89E6\u3002"}})]),t("div",{staticClass:"legend"},[t("div",{staticClass:"item"},[t("img",{attrs:{src:"https://tdesign.gtimg.com/site/design/guide/dropdown/dropdown-5@2x.png"}}),t("img",{staticClass:"tag",attrs:{src:"https://tdesign.gtimg.com/site/doc/good.png"}})]),t("div",{staticClass:"item"},[t("img",{attrs:{src:"https://tdesign.gtimg.com/site/design/guide/dropdown/dropdown-6@2x.png"}}),t("img",{staticClass:"tag",attrs:{src:"https://tdesign.gtimg.com/site/doc/bad.png"}})])]),t("hr"),t("h5",{attrs:{id:"\u5F53\u83DC\u5355\u9879\u8FC7\u591A\u65F6\uFF0C\u5E94\u5BF9\u5176\u8FDB\u884C\u5206\u7C7B\u6216\u5206\u7EA7\u663E\u793A\uFF0C\u907F\u514D\u83DC\u5355\u592A\u957F\uFF0C\u9020\u6210\u64CD\u4F5C\u4E0D\u4FBF\u3002"}},[e._v("\u5F53\u83DC\u5355\u9879\u8FC7\u591A\u65F6\uFF0C\u5E94\u5BF9\u5176\u8FDB\u884C\u5206\u7C7B\u6216\u5206\u7EA7\u663E\u793A\uFF0C\u907F\u514D\u83DC\u5355\u592A\u957F\uFF0C\u9020\u6210\u64CD\u4F5C\u4E0D\u4FBF\u3002 "),t("a",{staticClass:"header-anchor",attrs:{href:"#\u5F53\u83DC\u5355\u9879\u8FC7\u591A\u65F6\uFF0C\u5E94\u5BF9\u5176\u8FDB\u884C\u5206\u7C7B\u6216\u5206\u7EA7\u663E\u793A\uFF0C\u907F\u514D\u83DC\u5355\u592A\u957F\uFF0C\u9020\u6210\u64CD\u4F5C\u4E0D\u4FBF\u3002"}})]),t("div",{staticClass:"legend"},[t("div",{staticClass:"item"},[t("img",{attrs:{src:"https://tdesign.gtimg.com/site/design/guide/dropdown/dropdown-7@2x.png"}}),t("img",{staticClass:"tag",attrs:{src:"https://tdesign.gtimg.com/site/doc/good.png"}})]),t("div",{staticClass:"item"},[t("img",{attrs:{src:"https://tdesign.gtimg.com/site/design/guide/dropdown/dropdown-8@2x.png"}}),t("img",{staticClass:"tag",attrs:{src:"https://tdesign.gtimg.com/site/doc/bad.png"}})])]),t("hr"),t("h3",{attrs:{id:"\u76F8\u4F3C\u7EC4\u4EF6"}},[e._v("\u76F8\u4F3C\u7EC4\u4EF6 "),t("a",{staticClass:"header-anchor",attrs:{href:"#\u76F8\u4F3C\u7EC4\u4EF6"}})]),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"left"}},[e._v("\u7EC4\u4EF6\u540D")]),t("th",{staticStyle:{"text-align":"left"}},[e._v("\u4F55\u65F6\u4F7F\u7528")])])]),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"left"}},[t("a",{attrs:{href:"./dropdown"}},[e._v("\u4E0B\u62C9\u83DC\u5355")])]),t("td",{staticStyle:{"text-align":"left"}},[e._v("\u5F53\u9700\u8981\u5728\u4E0D\u5F71\u54CD\u9875\u9762\u7ED3\u6784\u7684\u60C5\u51B5\u4E0B\uFF0C\u96C6\u6210\u591A\u79CD\u64CD\u4F5C\u65F6\uFF1B\u5F53\u529F\u80FD\u6A21\u5757\u5165\u53E3\u8F83\u591A\uFF0C\u9700\u6536\u7EB3\u90E8\u5206\u4F4E\u9891\u5165\u53E3\uFF0C\u51CF\u5C11\u5BF9\u7A7A\u95F4\u7684\u5360\u7528\u65F6\u3002")])]),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[t("a",{attrs:{href:"./select"}},[e._v("\u9009\u62E9\u5668")])]),t("td",{staticStyle:{"text-align":"left"}},[e._v("\u9700\u8981\u5728\u6709\u9650\u7684\u7A7A\u95F4\u5C55\u793A\u5927\u91CF\u9009\u9879\uFF0C\u7528\u6765\u8FDB\u884C\u6570\u636E\u5904\u7406\u65F6\u3002")])])])])]),t("div",{staticStyle:{"margin-top":"48px"}},[t("td-doc-history",{key:e.lastUpdated,attrs:{time:e.lastUpdated}})],1),t("td-doc-footer",{attrs:{slot:"doc-footer"},slot:"doc-footer"})],1)},J=[];d._withStripped=!0;const K={components:{Usage:C,Demoexamplebase:i,Demoexamplebutton:r,Demoexamplesplit:m,Demoexamplemultiple:p,Demoexampledisabled:l,Demoexamplecustom:c,Demoexamplelong:v,Demoexampletheme:_,Demoexampleleft:g,Demoexampleicon:u,Demoexampleevent:w,Demoexampleslot:h},data(){return{DemoexamplebaseCode:b,DemoexamplebaseCompositionCode:f,DemoexamplebuttonCode:x,DemoexamplebuttonCompositionCode:D,DemoexamplesplitCode:P,DemoexamplesplitCompositionCode:I,DemoexamplemultipleCode:k,DemoexamplemultipleCompositionCode:A,DemoexampledisabledCode:y,DemoexampledisabledCompositionCode:S,DemoexamplecustomCode:O,DemoexamplecustomCompositionCode:N,DemoexamplelongCode:T,DemoexamplelongCompositionCode:M,DemoexamplethemeCode:z,DemoexamplethemeCompositionCode:$,DemoexampleleftCode:E,DemoexampleleftCompositionCode:H,DemoexampleiconCode:j,DemoexampleiconCompositionCode:U,DemoexampleeventCode:F,DemoexampleeventCompositionCode:W,DemoexampleslotCode:R,DemoexampleslotCompositionCode:G}},computed:{lastUpdated(){return this.tab==="design"?1739008828e3:1740128904e3},tab:{get(){return this.$route.query.tab||"demo"},set(e){this.$route.query.tab!==e&&this.$router.push({query:{tab:e}})}}},mounted(){const{tdDocContent:e,tdDocHeader:o,tdDocTabs:t}=this.$refs;o&&(o.docInfo={title:"Dropdown \u4E0B\u62C9\u83DC\u5355",desc:"\u7528\u4E8E\u627F\u8F7D\u8FC7\u591A\u7684\u64CD\u4F5C\u96C6\u5408\uFF0C\u901A\u8FC7\u4E0B\u62C9\u62D3\u5C55\u7684\u5F62\u5F0F\uFF0C\u6536\u7EB3\u66F4\u591A\u7684\u64CD\u4F5C\u3002"}),document.title="Dropdown \u4E0B\u62C9\u83DC\u5355 | TDesign",t&&(t.tabs=[{tab:"demo",name:"\u793A\u4F8B"},{tab:"api",name:"API"},{tab:"design",name:"\u6307\u5357"}],t.onchange=({detail:s})=>this.tab=s),q.highlightAll(),this.$emit("loaded",()=>{e.pageStatus="show"})}},n={};var a=B(K,d,J,!1,L,null,null,null);function L(e){for(let o in n)this[o]=n[o]}a.options.__file="../src/dropdown/dropdown.md";var et=function(){return a.exports}();export{et as default};
