import{D as c,e as l,f as r,g as d,h as _}from"./toggle.b066ea5f.js";import{D as m,b as v}from"./plugin.df6cd943.js";import{U as p,D as g,a as f,b as h,c as u,d as b,e as C,f as N,g as y,h as P,i as x}from"./index.83abb254.js";import{P as S}from"./prism.a27ccf6a.js";import{n as D}from"./index.663c003f.js";var I=`<template>
  <t-space>
    <t-button variant="outline" @click="openSomeNotification">\u70B9\u51FB\u6253\u5F00\u591A\u4E2A\u901A\u77E5</t-button>
    <t-button variant="outline" @click="closeAll" id="t-demo-msg-close-all">\u70B9\u51FB\u5173\u95ED\u6240\u6709\u901A\u77E5</t-button>
  </t-space>
</template>

<script>
export default {
  methods: {
    openSomeNotification() {
      this.$notify.info({ title: '\u8FD9\u662F\u7B2C\u4E00\u6761\u901A\u77E5' });
      this.$notify.warning({ title: '\u8FD9\u662F\u7B2C\u4E8C\u6761\u901A\u77E5' });
      this.$notify.error({ title: '\u8FD9\u662F\u7B2C\u4E09\u6761\u901A\u77E5' });
    },
    closeAll() {
      this.$notify.closeAll();
    },
  },
};
<\/script>
`,k=`<template>
  <t-space>
    <t-button variant="outline" @click="openSomeNotification">\u70B9\u51FB\u6253\u5F00\u591A\u4E2A\u901A\u77E5</t-button>
    <t-button variant="outline" @click="closeAll" id="t-demo-msg-close-all">\u70B9\u51FB\u5173\u95ED\u6240\u6709\u901A\u77E5</t-button>
  </t-space>
</template>

<script setup>
import { NotifyPlugin } from 'tdesign-vue';

const openSomeNotification = () => {
  NotifyPlugin.info({
    title: '\u8FD9\u662F\u7B2C\u4E00\u6761\u901A\u77E5',
  });
  NotifyPlugin.warning({
    title: '\u8FD9\u662F\u7B2C\u4E8C\u6761\u901A\u77E5',
  });
  NotifyPlugin.error({
    title: '\u8FD9\u662F\u7B2C\u4E09\u6761\u901A\u77E5',
  });
};
const closeAll = () => {
  NotifyPlugin.closeAll();
};
<\/script>
`,A=`<template>
  <t-space direction="vertical" :size="42">
    <t-space direction="vertical">
      <p>\u63D2\u4EF6\u8C03\u7528</p>
      <!-- this.$notify \u548C this.$notification \u90FD\u652F\u6301\uFF0C\u4E24\u8005\u7B49\u4EF7 -->
      <t-space>
        <t-button
          variant="outline"
          @click="
            $notify.info({ title: '\u6807\u9898\u540D\u79F0', icon: false, content: '\u7528\u6237\u8868\u793A\u666E\u901A\u64CD\u4F5C\u7684\u6D88\u606F\u901A\u77E5', duration: 1000 })
          "
        >1000ms</t-button
        >

        <!-- \u81EA\u5B9A\u4E49 Icon \u793A\u4F8B -->
        <t-button
          variant="outline"
          @click="
            $notify.info({ title: '\u6807\u9898\u540D\u79F0', icon: iconRender, content: '\u7528\u6237\u8868\u793A\u64CD\u4F5C\u9519\u8BEF\u7684\u6D88\u606F\u901A\u77E5', duration: 2000 })
          "
        >2000ms</t-button
        >

        <t-button
          variant="outline"
          @click="$notify('info', { title: '\u6807\u9898\u540D\u79F0', content: '\u7528\u6237\u8868\u793A\u64CD\u4F5C\u5F15\u8D77\u4E00\u5B9A\u540E\u679C\u7684\u6D88\u606F\u901A\u77E5' })"
        >\u9ED8\u8BA4\u65F6\u957F</t-button
        >
        <!-- 0 \u8868\u793A\u6C38\u8FDC\u4E0D\u81EA\u52A8\u6D88\u5931 -->
        <t-button
          variant="outline"
          @click="
            $notify.info({
              title: '\u6807\u9898\u540D\u79F0',
              content: '\u7528\u6237\u8868\u793A\u64CD\u4F5C\u5F15\u8D77\u4E25\u91CD\u540E\u679C\u7684\u6D88\u606F\u901A\u77E5',
              duration: 0,
              closeBtn: true,
            })
          "
        >
          \u6C38\u4E45\u663E\u793A
        </t-button>
      </t-space>
    </t-space>

    <!-- NotifyPlugin \u548C NotificationPlugin \u90FD\u652F\u6301\uFF0C\u4E24\u8005\u7B49\u4EF7 -->
    <t-space direction="vertical">
      <p>\u51FD\u6570\u8C03\u7528</p>
      <t-space>
        <t-button variant="outline" @click="NotifyPlugin.info({ title: '\u6807\u9898', content: '\u7528\u6237\u8868\u793A\u666E\u901A\u64CD\u4F5C\u4FE1\u606F\u63D0\u793A' })"
        >info</t-button
        >
        <t-button variant="outline" @click="NotifyPlugin.success({ title: '\u6807\u9898', content: '\u7528\u6237\u8868\u793A\u64CD\u4F5C\u987A\u5229\u8FBE\u6210' })"
        >success</t-button
        >
        <t-button
          variant="outline"
          @click="NotifyPlugin('warning', { title: '\u6807\u9898', content: '\u7528\u6237\u8868\u793A\u64CD\u4F5C\u5F15\u8D77\u4E00\u5B9A\u540E\u679C' })"
        >warning</t-button
        >
        <t-button
          variant="outline"
          @click="NotifyPlugin('error', { title: '\u6807\u9898', content: '\u7528\u6237\u8868\u793A\u64CD\u4F5C\u5F15\u8D77\u4E25\u91CD\u7684\u540E\u679C' })"
        >error</t-button
        >
      </t-space>
    </t-space>
  </t-space>
</template>

<script lang="jsx">
import { NotifyPlugin } from 'tdesign-vue';
import { CloseCircleFilledIcon } from 'tdesign-icons-vue';

export default {
  data() {
    return {
      NotifyPlugin,
    };
  },
  methods: {
    iconRender() {
      return <CloseCircleFilledIcon size="24px" style={{ color: 'rgb(227, 77, 89)', marginRight: '8px' }} />;
    },
  },
};
<\/script>
`,T=`<template>
  <t-space direction="vertical" :size="42">
    <t-space direction="vertical">
      <p>\u63D2\u4EF6\u8C03\u7528</p>
      <!-- this.$notify \u548C this.$notification \u90FD\u652F\u6301\uFF0C\u4E24\u8005\u7B49\u4EF7 -->
      <t-space>
        <t-button
          variant="outline"
          @click="
            $notify.info({ title: '\u6807\u9898\u540D\u79F0', icon: false, content: '\u7528\u6237\u8868\u793A\u666E\u901A\u64CD\u4F5C\u7684\u6D88\u606F\u901A\u77E5', duration: 1000 })
          "
        >1000ms</t-button
        >

        <!-- \u81EA\u5B9A\u4E49 Icon \u793A\u4F8B -->
        <t-button
          variant="outline"
          @click="
            $notify.info({ title: '\u6807\u9898\u540D\u79F0', icon: iconRender, content: '\u7528\u6237\u8868\u793A\u64CD\u4F5C\u9519\u8BEF\u7684\u6D88\u606F\u901A\u77E5', duration: 2000 })
          "
        >2000ms</t-button
        >

        <t-button
          variant="outline"
          @click="$notify('info', { title: '\u6807\u9898\u540D\u79F0', content: '\u7528\u6237\u8868\u793A\u64CD\u4F5C\u5F15\u8D77\u4E00\u5B9A\u540E\u679C\u7684\u6D88\u606F\u901A\u77E5' })"
        >\u9ED8\u8BA4\u65F6\u957F</t-button
        >
        <!-- 0 \u8868\u793A\u6C38\u8FDC\u4E0D\u81EA\u52A8\u6D88\u5931 -->
        <t-button
          variant="outline"
          @click="
            $notify.info({
              title: '\u6807\u9898\u540D\u79F0',
              content: '\u7528\u6237\u8868\u793A\u64CD\u4F5C\u5F15\u8D77\u4E25\u91CD\u540E\u679C\u7684\u6D88\u606F\u901A\u77E5',
              duration: 0,
              closeBtn: true,
            })
          "
        >
          \u6C38\u4E45\u663E\u793A
        </t-button>
      </t-space>
    </t-space>

    <!-- NotifyPlugin \u548C NotificationPlugin \u90FD\u652F\u6301\uFF0C\u4E24\u8005\u7B49\u4EF7 -->
    <t-space direction="vertical">
      <p>\u51FD\u6570\u8C03\u7528</p>
      <t-space>
        <t-button variant="outline" @click="NotifyPlugin.info({ title: '\u6807\u9898', content: '\u7528\u6237\u8868\u793A\u666E\u901A\u64CD\u4F5C\u4FE1\u606F\u63D0\u793A' })"
        >info</t-button
        >
        <t-button variant="outline" @click="NotifyPlugin.success({ title: '\u6807\u9898', content: '\u7528\u6237\u8868\u793A\u64CD\u4F5C\u987A\u5229\u8FBE\u6210' })"
        >success</t-button
        >
        <t-button
          variant="outline"
          @click="NotifyPlugin('warning', { title: '\u6807\u9898', content: '\u7528\u6237\u8868\u793A\u64CD\u4F5C\u5F15\u8D77\u4E00\u5B9A\u540E\u679C' })"
        >warning</t-button
        >
        <t-button
          variant="outline"
          @click="NotifyPlugin('error', { title: '\u6807\u9898', content: '\u7528\u6237\u8868\u793A\u64CD\u4F5C\u5F15\u8D77\u4E25\u91CD\u7684\u540E\u679C' })"
        >error</t-button
        >
      </t-space>
    </t-space>
  </t-space>
</template>

<script setup lang="jsx">
import { NotifyPlugin } from 'tdesign-vue';
import { CloseCircleFilledIcon } from 'tdesign-icons-vue';

const iconRender = () => (
  <CloseCircleFilledIcon
    size="24px"
    style={{
      color: 'rgb(227, 77, 89)',
      marginRight: '8px',
    }}
  />
);
<\/script>
`,o=function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("td-doc-content",{ref:"tdDocContent",attrs:{"page-status":"hidden"}},[t("td-doc-header",{ref:"tdDocHeader",attrs:{slot:"doc-header",spline:"message",platform:"web"},slot:"doc-header"},[t("td-doc-badge",{attrs:{slot:"badge",label:"coverage",message:"96.04%"},slot:"badge"})],1),t("td-doc-tabs",{ref:"tdDocTabs",attrs:{tab:i.tab}}),t("div",{directives:[{name:"show",rawName:"v-show",value:i.tab==="demo",expression:"tab === 'demo'"}]},[t("div",{attrs:{name:"DEMO"}},[t("nav",{staticClass:"tdesign-toc_container"},[t("ol",{staticClass:"tdesign-toc_list"},[t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u57FA\u7840\u7684\u6D88\u606F\u901A\u77E5"}},[i._v("\u57FA\u7840\u7684\u6D88\u606F\u901A\u77E5")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u5E26\u56FE\u6807\u7684\u6D88\u606F\u901A\u77E5"}},[i._v("\u5E26\u56FE\u6807\u7684\u6D88\u606F\u901A\u77E5")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u5E26\u64CD\u4F5C\u7684\u6D88\u606F\u901A\u77E5"}},[i._v("\u5E26\u64CD\u4F5C\u7684\u6D88\u606F\u901A\u77E5")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u4F4D\u7F6E\u63A7\u5236"}},[i._v("\u4F4D\u7F6E\u63A7\u5236")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u5173\u95ED\u63D0\u793A"}},[i._v("\u5173\u95ED\u63D0\u793A")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u5173\u95ED\u591A\u4E2A\u6D88\u606F\u901A\u77E5"}},[i._v("\u5173\u95ED\u591A\u4E2A\u6D88\u606F\u901A\u77E5")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u63D2\u4EF6\u8C03\u7528\u4E0E\u51FD\u6570\u5F0F\u8C03\u7528"}},[i._v("\u63D2\u4EF6\u8C03\u7528\u4E0E\u51FD\u6570\u5F0F\u8C03\u7528")])])])]),t("Usage"),t("h3",{attrs:{id:"\u57FA\u7840\u7684\u6D88\u606F\u901A\u77E5"}},[i._v("\u57FA\u7840\u7684\u6D88\u606F\u901A\u77E5 "),t("a",{staticClass:"header-anchor",attrs:{href:"#\u57FA\u7840\u7684\u6D88\u606F\u901A\u77E5"}})]),t("p",[i._v("\u57FA\u7840\u6D88\u606F\u901A\u77E5\uFF0C\u53EF\u624B\u52A8\u5173\u95ED\u4E5F\u53EF\u81EA\u52A8\u9000\u51FA\u3002")]),t("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--notification-base tdesign-demo-item--notification"},[t("td-doc-demo",{attrs:{"demo-name":"base",languages:"OptionsAPI,CompositionAPI","data-OptionsAPI":i.DemoexamplebaseCode,"data-CompositionAPI":i.DemoexamplebaseCompositionCode,language:"markup"}},[t("div",{attrs:{slot:"action"},slot:"action"},[t("Stackblitz",{attrs:{"demo-name":"base","component-name":" notification"}}),t("Codesandbox",{attrs:{"demo-name":"base","component-name":" notification"}})],1),t("div",{staticClass:"tdesign-demo-item__body"},[t("Demoexamplebase")],1)])],1),t("h3",{attrs:{id:"\u5E26\u56FE\u6807\u7684\u6D88\u606F\u901A\u77E5"}},[i._v("\u5E26\u56FE\u6807\u7684\u6D88\u606F\u901A\u77E5 "),t("a",{staticClass:"header-anchor",attrs:{href:"#\u5E26\u56FE\u6807\u7684\u6D88\u606F\u901A\u77E5"}})]),t("p",[i._v("\u5E26\u56FE\u6807\u7684\u6D88\u606F\u901A\u77E5\u63D0\u4F9B\u4E24\u79CD\u60C5\u51B5\uFF1A\u666E\u901A\u6D88\u606F\u901A\u77E5\u548C\u91CD\u8981\u6D88\u606F\u901A\u77E5\uFF08\u5982\uFF1A\u7CFB\u7EDF\u9519\u8BEF\u7B49\uFF09\u3002")]),t("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--notification-icon tdesign-demo-item--notification"},[t("td-doc-demo",{attrs:{"demo-name":"icon",languages:"OptionsAPI,CompositionAPI","data-OptionsAPI":i.DemoexampleiconCode,"data-CompositionAPI":i.DemoexampleiconCompositionCode,language:"markup"}},[t("div",{attrs:{slot:"action"},slot:"action"},[t("Stackblitz",{attrs:{"demo-name":"icon","component-name":" notification"}}),t("Codesandbox",{attrs:{"demo-name":"icon","component-name":" notification"}})],1),t("div",{staticClass:"tdesign-demo-item__body"},[t("Demoexampleicon")],1)])],1),t("h3",{attrs:{id:"\u5E26\u64CD\u4F5C\u7684\u6D88\u606F\u901A\u77E5"}},[i._v("\u5E26\u64CD\u4F5C\u7684\u6D88\u606F\u901A\u77E5 "),t("a",{staticClass:"header-anchor",attrs:{href:"#\u5E26\u64CD\u4F5C\u7684\u6D88\u606F\u901A\u77E5"}})]),t("p",[i._v("\u5E26\u6709\u64CD\u4F5C\u7684\u6D88\u606F\u901A\u77E5\u4E3A\u7528\u6237\u63D0\u4F9B\u4E0B\u4E00\u6B65\u884C\u52A8\u70B9\uFF0C\u5728\u6D88\u606F\u63D0\u793A\u6846\u4E2D\u8FDB\u884C\u7B80\u8981\u5FEB\u6377\u7684\u4EA4\u4E92\u3002")]),t("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--notification-operation tdesign-demo-item--notification"},[t("td-doc-demo",{attrs:{"demo-name":"operation",languages:"OptionsAPI,CompositionAPI","data-OptionsAPI":i.DemoexampleoperationCode,"data-CompositionAPI":i.DemoexampleoperationCompositionCode,language:"markup"}},[t("div",{attrs:{slot:"action"},slot:"action"},[t("Stackblitz",{attrs:{"demo-name":"operation","component-name":" notification"}}),t("Codesandbox",{attrs:{"demo-name":"operation","component-name":" notification"}})],1),t("div",{staticClass:"tdesign-demo-item__body"},[t("Demoexampleoperation")],1)])],1),t("h3",{attrs:{id:"\u4F4D\u7F6E\u63A7\u5236"}},[i._v("\u4F4D\u7F6E\u63A7\u5236 "),t("a",{staticClass:"header-anchor",attrs:{href:"#\u4F4D\u7F6E\u63A7\u5236"}})]),t("p",[i._v("\u5168\u5C40\u63D0\u793A\u663E\u793A\u4F4D\u7F6E\u53EF\u63A7\u5236\uFF0C"),t("code",[i._v("placement")]),i._v(" \u7528\u4E8E\u63A7\u5236\u5927\u6982\u4F4D\u7F6E\uFF0C"),t("code",[i._v("offset")]),i._v(" \u7528\u4E8E\u8BBE\u7F6E\u76F8\u5BF9\u4E8E "),t("code",[i._v("placement")]),i._v(" \u6240\u5728\u4F4D\u7F6E\u7684\u504F\u79FB")]),t("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--notification-placement tdesign-demo-item--notification"},[t("td-doc-demo",{attrs:{"demo-name":"placement",languages:"OptionsAPI,CompositionAPI","data-OptionsAPI":i.DemoexampleplacementCode,"data-CompositionAPI":i.DemoexampleplacementCompositionCode,language:"markup"}},[t("div",{attrs:{slot:"action"},slot:"action"},[t("Stackblitz",{attrs:{"demo-name":"placement","component-name":" notification"}}),t("Codesandbox",{attrs:{"demo-name":"placement","component-name":" notification"}})],1),t("div",{staticClass:"tdesign-demo-item__body"},[t("Demoexampleplacement")],1)])],1),t("h3",{attrs:{id:"\u5173\u95ED\u63D0\u793A"}},[i._v("\u5173\u95ED\u63D0\u793A "),t("a",{staticClass:"header-anchor",attrs:{href:"#\u5173\u95ED\u63D0\u793A"}})]),t("p",[i._v("\u5982\u679C\u4E0D\u5E0C\u671B\u901A\u8FC7\u8BA1\u65F6\u5173\u95ED\uFF0C\u6216\u8005\u7528\u6237\u70B9\u51FB\u6309\u94AE\u5173\u95ED\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5173\u95ED\u51FD\u6570\u3002")]),t("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--notification-toggle tdesign-demo-item--notification"},[t("td-doc-demo",{attrs:{"demo-name":"toggle",languages:"OptionsAPI,CompositionAPI","data-OptionsAPI":i.DemoexampletoggleCode,"data-CompositionAPI":i.DemoexampletoggleCompositionCode,language:"markup"}},[t("div",{attrs:{slot:"action"},slot:"action"},[t("Stackblitz",{attrs:{"demo-name":"toggle","component-name":" notification"}}),t("Codesandbox",{attrs:{"demo-name":"toggle","component-name":" notification"}})],1),t("div",{staticClass:"tdesign-demo-item__body"},[t("Demoexampletoggle")],1)])],1),t("h3",{attrs:{id:"\u5173\u95ED\u591A\u4E2A\u6D88\u606F\u901A\u77E5"}},[i._v("\u5173\u95ED\u591A\u4E2A\u6D88\u606F\u901A\u77E5 "),t("a",{staticClass:"header-anchor",attrs:{href:"#\u5173\u95ED\u591A\u4E2A\u6D88\u606F\u901A\u77E5"}})]),t("p",[i._v("\u53EF\u4EE5\u901A\u8FC7"),t("code",[i._v("closeAll")]),i._v("\u540C\u65F6\u5173\u95ED\u591A\u4E2A\u6D88\u606F\u901A\u77E5\u3002")]),t("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--notification-close-all tdesign-demo-item--notification"},[t("td-doc-demo",{attrs:{"demo-name":"close-all",languages:"OptionsAPI,CompositionAPI","data-OptionsAPI":i.DemoexamplecloseallCode,"data-CompositionAPI":i.DemoexamplecloseallCompositionCode,language:"markup"}},[t("div",{attrs:{slot:"action"},slot:"action"},[t("Stackblitz",{attrs:{"demo-name":"close-all","component-name":" notification"}}),t("Codesandbox",{attrs:{"demo-name":"close-all","component-name":" notification"}})],1),t("div",{staticClass:"tdesign-demo-item__body"},[t("Demoexamplecloseall")],1)])],1),t("h3",{attrs:{id:"\u63D2\u4EF6\u8C03\u7528\u4E0E\u51FD\u6570\u5F0F\u8C03\u7528"}},[i._v("\u63D2\u4EF6\u8C03\u7528\u4E0E\u51FD\u6570\u5F0F\u8C03\u7528 "),t("a",{staticClass:"header-anchor",attrs:{href:"#\u63D2\u4EF6\u8C03\u7528\u4E0E\u51FD\u6570\u5F0F\u8C03\u7528"}})]),t("p",[i._v("\u652F\u6301\u63D2\u4EF6\u5F0F\u8C03\u7528 "),t("code",[i._v("this.$notify")]),i._v(" \u548C\u51FD\u6570\u5F0F\u8C03\u7528 "),t("code",[i._v("NotifyPlugin")]),i._v(" \u4E24\u79CD\u65B9\u5F0F\uFF0C\u4E24\u79CD\u65B9\u5F0F\u53C2\u6570\u5B8C\u5168\u4E00\u6837\u3002")]),t("p",[i._v("\u793A\u4F8B\uFF1A"),t("code",[i._v("NotifyPlugin.warning('\u8BF7\u8F93\u5165\u4FE1\u606F')")]),i._v(" \u6216 "),t("code",[i._v("this.$notify.warning('\u8BF7\u8F93\u5165\u4FE1\u606F')")])]),t("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--notification-plugin tdesign-demo-item--notification"},[t("td-doc-demo",{attrs:{"demo-name":"plugin",languages:"OptionsAPI,CompositionAPI","data-OptionsAPI":i.DemoexamplepluginCode,"data-CompositionAPI":i.DemoexamplepluginCompositionCode,language:"markup"}},[t("div",{attrs:{slot:"action"},slot:"action"},[t("Stackblitz",{attrs:{"demo-name":"plugin","component-name":" notification"}}),t("Codesandbox",{attrs:{"demo-name":"plugin","component-name":" notification"}})],1),t("div",{staticClass:"tdesign-demo-item__body"},[t("Demoexampleplugin")],1)])],1)],1),t("td-contributors",{attrs:{platform:"web",framework:"vue","component-name":"notification"}})],1),t("div",{directives:[{name:"show",rawName:"v-show",value:i.tab==="api",expression:"tab === 'api'"}],attrs:{name:"API"}},[t("nav",{staticClass:"tdesign-toc_container"},[t("ol",{staticClass:"tdesign-toc_list"},[t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#notification-props"}},[i._v("Notification Props")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#notification-events"}},[i._v("Notification Events")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#notificationoptions"}},[i._v("NotificationOptions")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#notificationplugin"}},[i._v("NotificationPlugin")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#notificationplugin-info"}},[i._v("NotificationPlugin.info")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#notificationplugin-warning"}},[i._v("NotificationPlugin.warning")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#notificationplugin-error"}},[i._v("NotificationPlugin.error")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#notificationplugin-success"}},[i._v("NotificationPlugin.success")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#notificationplugin-close"}},[i._v("NotificationPlugin.close")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#notificationplugin-closeall"}},[i._v("NotificationPlugin.closeAll")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#notificationplugin-config"}},[i._v("NotificationPlugin.config")])])])]),t("h3",{attrs:{id:"notification-props"}},[i._v("Notification Props "),t("a",{staticClass:"header-anchor",attrs:{href:"#notification-props"}})]),t("table",[t("thead",[t("tr",[t("th",[i._v("\u540D\u79F0")]),t("th",[i._v("\u7C7B\u578B")]),t("th",[i._v("\u9ED8\u8BA4\u503C")]),t("th",[i._v("\u8BF4\u660E")]),t("th",[i._v("\u5FC5\u4F20")])])]),t("tbody",[t("tr",[t("td",[i._v("closeBtn")]),t("td",[i._v("String / Boolean / Slot / Function")]),t("td",[i._v("undefined")]),t("td",[i._v("\u5173\u95ED\u6309\u94AE\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49\u3002\u503C\u4E3A true \u663E\u793A\u9ED8\u8BA4\u5173\u95ED\u6309\u94AE\uFF0C\u503C\u4E3A false \u4E0D\u663E\u793A\u5173\u95ED\u6309\u94AE\u3002\u503C\u7C7B\u578B\u4E3A string \u5219\u76F4\u63A5\u663E\u793A\u503C\uFF0C\u5982\uFF1A\u201C\u5173\u95ED\u201D\u3002\u503C\u7C7B\u578B\u4E3A TNode\uFF0C\u5219\u8868\u793A\u5448\u73B0\u81EA\u5B9A\u4E49\u6309\u94AE\u793A\u4F8B\u3002TS \u7C7B\u578B\uFF1A"),t("code",[i._v("string | boolean | TNode")]),i._v("\u3002"),t("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts",target:"_blank",rel:"noopener noreferrer"}},[i._v("\u901A\u7528\u7C7B\u578B\u5B9A\u4E49")])]),t("td",[i._v("N")])]),t("tr",[t("td",[i._v("content")]),t("td",[i._v("String / Slot / Function")]),t("td",[i._v("-")]),t("td",[i._v("\u81EA\u5B9A\u4E49\u5185\u5BB9\u3002TS \u7C7B\u578B\uFF1A"),t("code",[i._v("string | TNode")]),i._v("\u3002"),t("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts",target:"_blank",rel:"noopener noreferrer"}},[i._v("\u901A\u7528\u7C7B\u578B\u5B9A\u4E49")])]),t("td",[i._v("N")])]),t("tr",[t("td",[i._v("default")]),t("td",[i._v("String / Slot / Function")]),t("td",[i._v("-")]),t("td",[i._v("\u81EA\u5B9A\u4E49\u5185\u5BB9\uFF0C\u540C content\u3002TS \u7C7B\u578B\uFF1A"),t("code",[i._v("string | TNode")]),i._v("\u3002"),t("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts",target:"_blank",rel:"noopener noreferrer"}},[i._v("\u901A\u7528\u7C7B\u578B\u5B9A\u4E49")])]),t("td",[i._v("N")])]),t("tr",[t("td",[i._v("duration")]),t("td",[i._v("Number")]),t("td",[i._v("3000")]),t("td",[i._v("\u6D88\u606F\u663E\u793A\u65F6\u957F\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2\u3002\u503C\u4E3A 0 \u8868\u793A\u6C38\u4E45\u663E\u793A")]),t("td",[i._v("N")])]),t("tr",[t("td",[i._v("footer")]),t("td",[i._v("String / Slot / Function")]),t("td",[i._v("-")]),t("td",[i._v("\u7528\u4E8E\u81EA\u5B9A\u4E49\u5E95\u90E8\u5185\u5BB9\u3002TS \u7C7B\u578B\uFF1A"),t("code",[i._v("string | TNode")]),i._v("\u3002"),t("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts",target:"_blank",rel:"noopener noreferrer"}},[i._v("\u901A\u7528\u7C7B\u578B\u5B9A\u4E49")])]),t("td",[i._v("N")])]),t("tr",[t("td",[i._v("icon")]),t("td",[i._v("Boolean / Slot / Function")]),t("td",[i._v("true")]),t("td",[i._v("\u7528\u4E8E\u81EA\u5B9A\u4E49\u6D88\u606F\u901A\u77E5\u524D\u9762\u7684\u56FE\u6807\uFF0C\u4F18\u5148\u7EA7\u5927\u4E8E theme \u8BBE\u5B9A\u7684\u56FE\u6807\u3002\u503C\u4E3A false \u5219\u4E0D\u663E\u793A\u56FE\u6807\uFF0C\u503C\u4E3A true \u663E\u793A theme \u8BBE\u5B9A\u56FE\u6807\u3002TS \u7C7B\u578B\uFF1A"),t("code",[i._v("boolean | TNode")]),i._v("\u3002"),t("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts",target:"_blank",rel:"noopener noreferrer"}},[i._v("\u901A\u7528\u7C7B\u578B\u5B9A\u4E49")])]),t("td",[i._v("N")])]),t("tr",[t("td",[i._v("theme")]),t("td",[i._v("String")]),t("td",[i._v("info")]),t("td",[i._v("\u6D88\u606F\u7C7B\u578B\u3002\u53EF\u9009\u9879\uFF1Ainfo/success/warning/error\u3002TS \u7C7B\u578B\uFF1A"),t("code",[i._v("NotificationThemeList")]),i._v(" "),t("code",[i._v("type NotificationThemeList = 'info' | 'success' | 'warning' | 'error'")]),i._v("\u3002"),t("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/tree/develop/src/notification/type.ts",target:"_blank",rel:"noopener noreferrer"}},[i._v("\u8BE6\u7EC6\u7C7B\u578B\u5B9A\u4E49")])]),t("td",[i._v("N")])]),t("tr",[t("td",[i._v("title")]),t("td",[i._v("String / Slot / Function")]),t("td",[i._v("-")]),t("td",[i._v("\u6807\u9898\u3002TS \u7C7B\u578B\uFF1A"),t("code",[i._v("string | TNode")]),i._v("\u3002"),t("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts",target:"_blank",rel:"noopener noreferrer"}},[i._v("\u901A\u7528\u7C7B\u578B\u5B9A\u4E49")])]),t("td",[i._v("N")])]),t("tr",[t("td",[i._v("onCloseBtnClick")]),t("td",[i._v("Function")]),t("td"),t("td",[i._v("TS \u7C7B\u578B\uFF1A"),t("code",[i._v("(context: { e: MouseEvent }) => void")]),t("br"),i._v("\u70B9\u51FB\u5173\u95ED\u6309\u94AE\u65F6\u89E6\u53D1")]),t("td",[i._v("N")])]),t("tr",[t("td",[i._v("onDurationEnd")]),t("td",[i._v("Function")]),t("td"),t("td",[i._v("TS \u7C7B\u578B\uFF1A"),t("code",[i._v("() => void")]),t("br"),i._v("\u8BA1\u65F6\u7ED3\u675F\u65F6\u89E6\u53D1")]),t("td",[i._v("N")])])])]),t("h3",{attrs:{id:"notification-events"}},[i._v("Notification Events "),t("a",{staticClass:"header-anchor",attrs:{href:"#notification-events"}})]),t("table",[t("thead",[t("tr",[t("th",[i._v("\u540D\u79F0")]),t("th",[i._v("\u53C2\u6570")]),t("th",[i._v("\u63CF\u8FF0")])])]),t("tbody",[t("tr",[t("td",[i._v("close-btn-click")]),t("td",[t("code",[i._v("(context: { e: MouseEvent })")])]),t("td",[i._v("\u70B9\u51FB\u5173\u95ED\u6309\u94AE\u65F6\u89E6\u53D1")])]),t("tr",[t("td",[i._v("duration-end")]),t("td",[i._v("-")]),t("td",[i._v("\u8BA1\u65F6\u7ED3\u675F\u65F6\u89E6\u53D1")])])])]),t("h3",{attrs:{id:"notificationoptions"}},[i._v("NotificationOptions "),t("a",{staticClass:"header-anchor",attrs:{href:"#notificationoptions"}})]),t("table",[t("thead",[t("tr",[t("th",[i._v("\u540D\u79F0")]),t("th",[i._v("\u7C7B\u578B")]),t("th",[i._v("\u9ED8\u8BA4\u503C")]),t("th",[i._v("\u8BF4\u660E")]),t("th",[i._v("\u5FC5\u4F20")])])]),t("tbody",[t("tr",[t("td",[i._v("attach")]),t("td",[i._v("String / Function")]),t("td",[i._v("'body'")]),t("td",[i._v("\u6307\u5B9A\u6D88\u606F\u901A\u77E5\u6302\u8F7D\u7684\u7236\u8282\u70B9\u3002\u6570\u636E\u7C7B\u578B\u4E3A String \u65F6\uFF0C\u4F1A\u88AB\u5F53\u4F5C\u9009\u62E9\u5668\u5904\u7406\uFF0C\u8FDB\u884C\u8282\u70B9\u67E5\u8BE2\u3002\u793A\u4F8B\uFF1A'body' \u6216 () => document.body\u3002TS \u7C7B\u578B\uFF1A"),t("code",[i._v("AttachNode")]),i._v("\u3002"),t("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts",target:"_blank",rel:"noopener noreferrer"}},[i._v("\u901A\u7528\u7C7B\u578B\u5B9A\u4E49")])]),t("td",[i._v("N")])]),t("tr",[t("td",[i._v("offset")]),t("td",[i._v("Array")]),t("td",[i._v("-")]),t("td",[i._v("\u76F8\u5BF9\u4E8E placement \u7684\u504F\u79FB\u91CF\uFF0C\u793A\u4F8B\uFF1A[-10, 20] \u6216 ['10em', '8rem']\u3002TS \u7C7B\u578B\uFF1A"),t("code",[i._v("Array<string | number>")])]),t("td",[i._v("N")])]),t("tr",[t("td",[i._v("placement")]),t("td",[i._v("String")]),t("td",[i._v("top-right")]),t("td",[i._v("\u6D88\u606F\u5F39\u51FA\u4F4D\u7F6E\u3002\u53EF\u9009\u9879\uFF1Atop-left/top-right/bottom-left/bottom-right\u3002TS \u7C7B\u578B\uFF1A"),t("code",[i._v("NotificationPlacementList")]),i._v(" "),t("code",[i._v("type NotificationPlacementList = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'")]),i._v("\u3002"),t("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/tree/develop/src/notification/type.ts",target:"_blank",rel:"noopener noreferrer"}},[i._v("\u8BE6\u7EC6\u7C7B\u578B\u5B9A\u4E49")])]),t("td",[i._v("N")])]),t("tr",[t("td",[i._v("zIndex")]),t("td",[i._v("Number")]),t("td",[i._v("6000")]),t("td",[i._v("\u6D88\u606F\u901A\u77E5\u5C42\u7EA7")]),t("td",[i._v("N")])]),t("tr",[t("td",[t("code",[i._v("NotificationProps")])]),t("td",[i._v("-")]),t("td",[i._v("-")]),t("td",[i._v("\u7EE7\u627F "),t("code",[i._v("NotificationProps")]),i._v(" \u4E2D\u7684\u5168\u90E8 API")]),t("td",[i._v("N")])])])]),t("h3",{attrs:{id:"notificationplugin"}},[i._v("NotificationPlugin "),t("a",{staticClass:"header-anchor",attrs:{href:"#notificationplugin"}})]),t("p",[i._v("\u540C\u65F6\u4E5F\u652F\u6301 "),t("code",[i._v("this.$notification")]),i._v("\u3002")]),t("table",[t("thead",[t("tr",[t("th",[i._v("\u53C2\u6570\u540D\u79F0")]),t("th",[i._v("\u53C2\u6570\u7C7B\u578B")]),t("th",[i._v("\u53C2\u6570\u9ED8\u8BA4\u503C")]),t("th",[i._v("\u53C2\u6570\u8BF4\u660E")])])]),t("tbody",[t("tr",[t("td",[i._v("theme")]),t("td",[i._v("String")]),t("td",[i._v("info")]),t("td",[i._v("\u5FC5\u9700\u3002\u6D88\u606F\u7C7B\u578B\u3002\u53EF\u9009\u9879\uFF1Ainfo/success/warning/error\u3002TS \u7C7B\u578B\uFF1A"),t("code",[i._v("NotificationThemeList")])])]),t("tr",[t("td",[i._v("options")]),t("td",[i._v("Object")]),t("td",[i._v("-")]),t("td",[i._v("\u5FC5\u9700\u3002\u6D88\u606F\u901A\u77E5\u5185\u5BB9\u3002TS \u7C7B\u578B\uFF1A"),t("code",[i._v("NotificationOptions")])])])])]),t("h3",{attrs:{id:"notificationplugin-info"}},[i._v("NotificationPlugin.info "),t("a",{staticClass:"header-anchor",attrs:{href:"#notificationplugin-info"}})]),t("p",[i._v("\u540C\u65F6\u4E5F\u652F\u6301 "),t("code",[i._v("this.$notification.info")]),i._v("\u3002")]),t("table",[t("thead",[t("tr",[t("th",[i._v("\u53C2\u6570\u540D\u79F0")]),t("th",[i._v("\u53C2\u6570\u7C7B\u578B")]),t("th",[i._v("\u53C2\u6570\u9ED8\u8BA4\u503C")]),t("th",[i._v("\u53C2\u6570\u8BF4\u660E")])])]),t("tbody",[t("tr",[t("td",[i._v("options")]),t("td",[i._v("Object")]),t("td",[i._v("-")]),t("td",[i._v("\u5FC5\u9700\u3002\u6D88\u606F\u901A\u77E5\u5185\u5BB9\u3002TS \u7C7B\u578B\uFF1A"),t("code",[i._v("NotificationInfoOptions")]),i._v(" "),t("code",[i._v("type NotificationInfoOptions = Omit<NotificationOptions, 'theme'>")]),i._v("\u3002"),t("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/tree/develop/src/notification/type.ts",target:"_blank",rel:"noopener noreferrer"}},[i._v("\u8BE6\u7EC6\u7C7B\u578B\u5B9A\u4E49")])])])])]),t("p",[i._v("\u63D2\u4EF6\u8FD4\u56DE\u503C\uFF1A"),t("code",[i._v("Promise<NotificationInstance>")])]),t("h3",{attrs:{id:"notificationplugin-warning"}},[i._v("NotificationPlugin.warning "),t("a",{staticClass:"header-anchor",attrs:{href:"#notificationplugin-warning"}})]),t("p",[i._v("\u540C\u65F6\u4E5F\u652F\u6301 "),t("code",[i._v("this.$notification.warning")]),i._v("\u3002")]),t("table",[t("thead",[t("tr",[t("th",[i._v("\u53C2\u6570\u540D\u79F0")]),t("th",[i._v("\u53C2\u6570\u7C7B\u578B")]),t("th",[i._v("\u53C2\u6570\u9ED8\u8BA4\u503C")]),t("th",[i._v("\u53C2\u6570\u8BF4\u660E")])])]),t("tbody",[t("tr",[t("td",[i._v("options")]),t("td",[i._v("Object")]),t("td",[i._v("-")]),t("td",[i._v("\u5FC5\u9700\u3002\u6D88\u606F\u901A\u77E5\u5185\u5BB9\u3002TS \u7C7B\u578B\uFF1A"),t("code",[i._v("NotificationInfoOptions")])])])])]),t("p",[i._v("\u63D2\u4EF6\u8FD4\u56DE\u503C\uFF1A"),t("code",[i._v("Promise<NotificationInstance>")])]),t("h3",{attrs:{id:"notificationplugin-error"}},[i._v("NotificationPlugin.error "),t("a",{staticClass:"header-anchor",attrs:{href:"#notificationplugin-error"}})]),t("p",[i._v("\u540C\u65F6\u4E5F\u652F\u6301 "),t("code",[i._v("this.$notification.error")]),i._v("\u3002")]),t("table",[t("thead",[t("tr",[t("th",[i._v("\u53C2\u6570\u540D\u79F0")]),t("th",[i._v("\u53C2\u6570\u7C7B\u578B")]),t("th",[i._v("\u53C2\u6570\u9ED8\u8BA4\u503C")]),t("th",[i._v("\u53C2\u6570\u8BF4\u660E")])])]),t("tbody",[t("tr",[t("td",[i._v("options")]),t("td",[i._v("Object")]),t("td",[i._v("-")]),t("td",[i._v("\u5FC5\u9700\u3002\u6D88\u606F\u901A\u77E5\u5185\u5BB9\u3002TS \u7C7B\u578B\uFF1A"),t("code",[i._v("NotificationInfoOptions")])])])])]),t("p",[i._v("\u63D2\u4EF6\u8FD4\u56DE\u503C\uFF1A"),t("code",[i._v("Promise<NotificationInstance>")])]),t("h3",{attrs:{id:"notificationplugin-success"}},[i._v("NotificationPlugin.success "),t("a",{staticClass:"header-anchor",attrs:{href:"#notificationplugin-success"}})]),t("p",[i._v("\u540C\u65F6\u4E5F\u652F\u6301 "),t("code",[i._v("this.$notification.success")]),i._v("\u3002")]),t("table",[t("thead",[t("tr",[t("th",[i._v("\u53C2\u6570\u540D\u79F0")]),t("th",[i._v("\u53C2\u6570\u7C7B\u578B")]),t("th",[i._v("\u53C2\u6570\u9ED8\u8BA4\u503C")]),t("th",[i._v("\u53C2\u6570\u8BF4\u660E")])])]),t("tbody",[t("tr",[t("td",[i._v("options")]),t("td",[i._v("Object")]),t("td",[i._v("-")]),t("td",[i._v("\u5FC5\u9700\u3002\u6D88\u606F\u901A\u77E5\u5185\u5BB9\u3002TS \u7C7B\u578B\uFF1A"),t("code",[i._v("NotificationInfoOptions")])])])])]),t("p",[i._v("\u63D2\u4EF6\u8FD4\u56DE\u503C\uFF1A"),t("code",[i._v("Promise<NotificationInstance>")])]),t("h3",{attrs:{id:"notificationplugin-close"}},[i._v("NotificationPlugin.close "),t("a",{staticClass:"header-anchor",attrs:{href:"#notificationplugin-close"}})]),t("p",[i._v("\u540C\u65F6\u4E5F\u652F\u6301 "),t("code",[i._v("this.$notification.close")]),i._v("\u3002")]),t("table",[t("thead",[t("tr",[t("th",[i._v("\u53C2\u6570\u540D\u79F0")]),t("th",[i._v("\u53C2\u6570\u7C7B\u578B")]),t("th",[i._v("\u53C2\u6570\u9ED8\u8BA4\u503C")]),t("th",[i._v("\u53C2\u6570\u8BF4\u660E")])])]),t("tbody",[t("tr",[t("td",[i._v("options")]),t("td",[i._v("Object")]),t("td",[i._v("-")]),t("td",[i._v("\u5FC5\u9700\u3002\u8BE5\u63D2\u4EF6\u53C2\u6570\u4E3A $Notification.info() \u7B49\u63D2\u4EF6\u6267\u884C\u540E\u7684\u8FD4\u56DE\u503C\u3002\u793A\u4F8B\uFF1A"),t("code",[i._v("const msg = $Notification.info({}); $Notification.close(msg)")]),i._v("\u3002TS \u7C7B\u578B\uFF1A"),t("code",[i._v("Promise<NotificationInstance>")])])])])]),t("h3",{attrs:{id:"notificationplugin-closeall"}},[i._v("NotificationPlugin.closeAll "),t("a",{staticClass:"header-anchor",attrs:{href:"#notificationplugin-closeall"}})]),t("p",[i._v("\u540C\u65F6\u4E5F\u652F\u6301 "),t("code",[i._v("this.$notification.closeAll")]),i._v("\u3002")]),t("table",[t("thead",[t("tr",[t("th",[i._v("\u53C2\u6570\u540D\u79F0")]),t("th",[i._v("\u53C2\u6570\u7C7B\u578B")]),t("th",[i._v("\u53C2\u6570\u9ED8\u8BA4\u503C")]),t("th",[i._v("\u53C2\u6570\u8BF4\u660E")])])]),t("tbody",[t("tr",[t("td",[i._v("--")]),t("td",[i._v("-")]),t("td",[i._v("-")]),t("td",[i._v("-")])])])]),t("h3",{attrs:{id:"notificationplugin-config"}},[i._v("NotificationPlugin.config "),t("a",{staticClass:"header-anchor",attrs:{href:"#notificationplugin-config"}})]),t("p",[i._v("\u540C\u65F6\u4E5F\u652F\u6301 "),t("code",[i._v("this.$notification.config")]),i._v("\u3002")]),t("table",[t("thead",[t("tr",[t("th",[i._v("\u53C2\u6570\u540D\u79F0")]),t("th",[i._v("\u53C2\u6570\u7C7B\u578B")]),t("th",[i._v("\u53C2\u6570\u9ED8\u8BA4\u503C")]),t("th",[i._v("\u53C2\u6570\u8BF4\u660E")])])]),t("tbody",[t("tr",[t("td",[i._v("notify")]),t("td",[i._v("Object")]),t("td",[i._v("-")]),t("td",[i._v("\u5FC5\u9700\u3002\u6D88\u606F\u901A\u77E5\u63D2\u4EF6\u5168\u5C40\u914D\u7F6E\u3002TS \u7C7B\u578B\uFF1A"),t("code",[i._v("NotificationOptions")])])])])])]),t("div",{directives:[{name:"show",rawName:"v-show",value:i.tab==="design",expression:"tab === 'design'"}],attrs:{name:"DESIGN"}},[t("nav",{staticClass:"tdesign-toc_container"},[t("ol",{staticClass:"tdesign-toc_list"},[t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u4F55\u65F6\u4F7F\u7528"}},[i._v("\u4F55\u65F6\u4F7F\u7528")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u4E0E\u9875\u9762\u5E03\u5C40\u76F8\u5173"}},[i._v("\u4E0E\u9875\u9762\u5E03\u5C40\u76F8\u5173")]),t("ol",{staticClass:"tdesign-toc_list"})]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u63A8\u8350-\u614E\u7528\u793A\u4F8B"}},[i._v("\u63A8\u8350/\u614E\u7528\u793A\u4F8B")]),t("ol",{staticClass:"tdesign-toc_list"})]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u76F8\u4F3C\u7EC4\u4EF6"}},[i._v("\u76F8\u4F3C\u7EC4\u4EF6")])])])]),t("h3",{attrs:{id:"\u4F55\u65F6\u4F7F\u7528"}},[i._v("\u4F55\u65F6\u4F7F\u7528 "),t("a",{staticClass:"header-anchor",attrs:{href:"#\u4F55\u65F6\u4F7F\u7528"}})]),t("p",[i._v("\u9700\u8981\u63D0\u9192\u7528\u6237\u6765\u81EA\u7CFB\u7EDF\u7684\u6D88\u606F\uFF0C\u4E14\u4E0D\u6253\u65AD\u7528\u6237\uFF1B")]),t("p",[i._v("\u5E26\u6709\u89E3\u91CA\u63CF\u8FF0\u7684\u63D0\u9192\u5185\u5BB9\u3002")]),t("h3",{attrs:{id:"\u4E0E\u9875\u9762\u5E03\u5C40\u76F8\u5173"}},[i._v("\u4E0E\u9875\u9762\u5E03\u5C40\u76F8\u5173 "),t("a",{staticClass:"header-anchor",attrs:{href:"#\u4E0E\u9875\u9762\u5E03\u5C40\u76F8\u5173"}})]),t("h5",{attrs:{id:"\u6D88\u606F\u901A\u77E5\u5EFA\u8BAE\u60AC\u6D6E\u51FA\u73B0\u5728\u9875\u9762\u53F3\u4E0A\u89D2\u3001\u5DE6\u4E0B\u89D2\u6216\u53F3\u4E0B\u89D2\uFF0C\u907F\u514D\u5BF9\u9875\u9762\u4E3B\u8981\u5185\u5BB9\u7684\u5E72\u6270\u3002"}},[i._v("\u6D88\u606F\u901A\u77E5\u5EFA\u8BAE\u60AC\u6D6E\u51FA\u73B0\u5728\u9875\u9762\u53F3\u4E0A\u89D2\u3001\u5DE6\u4E0B\u89D2\u6216\u53F3\u4E0B\u89D2\uFF0C\u907F\u514D\u5BF9\u9875\u9762\u4E3B\u8981\u5185\u5BB9\u7684\u5E72\u6270\u3002 "),t("a",{staticClass:"header-anchor",attrs:{href:"#\u6D88\u606F\u901A\u77E5\u5EFA\u8BAE\u60AC\u6D6E\u51FA\u73B0\u5728\u9875\u9762\u53F3\u4E0A\u89D2\u3001\u5DE6\u4E0B\u89D2\u6216\u53F3\u4E0B\u89D2\uFF0C\u907F\u514D\u5BF9\u9875\u9762\u4E3B\u8981\u5185\u5BB9\u7684\u5E72\u6270\u3002"}})]),t("div",{staticClass:"legend"},[t("div",{staticClass:"item"},[t("img",{attrs:{src:"https://tdesign.gtimg.com/site/design/guide/notification/notification-1@2x.png"}}),t("em",[i._v("\u56FE\u793A\uFF1A\u53F3\u4E0A\u89D2")])]),t("div",{staticClass:"item"},[t("img",{attrs:{src:"https://tdesign.gtimg.com/site/design/guide/notification/notification-2@2x.png"}}),t("em",[i._v("\u56FE\u793A\uFF1A\u5DE6\u4E0B\u89D2")])]),t("div",{staticClass:"item"},[t("img",{attrs:{src:"https://tdesign.gtimg.com/site/design/guide/notification/notification-3@2x.png"}}),t("em",[i._v("\u56FE\u793A\uFF1A\u53F3\u4E0B\u89D2")])])]),t("h3",{attrs:{id:"\u63A8\u8350-\u614E\u7528\u793A\u4F8B"}},[i._v("\u63A8\u8350/\u614E\u7528\u793A\u4F8B "),t("a",{staticClass:"header-anchor",attrs:{href:"#\u63A8\u8350-\u614E\u7528\u793A\u4F8B"}})]),t("h5",{attrs:{id:"\u5F53\u5B58\u5728\u591A\u4E2A\u53CD\u9988\u540C\u65F6\u89E6\u53D1\u65F6\uFF0C\u907F\u514D\u51FA\u73B0\u591A\u4E2A\u6D88\u606F\u63D0\u793A\u4E92\u76F8\u91CD\u53E0\u3002"}},[i._v("\u5F53\u5B58\u5728\u591A\u4E2A\u53CD\u9988\u540C\u65F6\u89E6\u53D1\u65F6\uFF0C\u907F\u514D\u51FA\u73B0\u591A\u4E2A\u6D88\u606F\u63D0\u793A\u4E92\u76F8\u91CD\u53E0\u3002 "),t("a",{staticClass:"header-anchor",attrs:{href:"#\u5F53\u5B58\u5728\u591A\u4E2A\u53CD\u9988\u540C\u65F6\u89E6\u53D1\u65F6\uFF0C\u907F\u514D\u51FA\u73B0\u591A\u4E2A\u6D88\u606F\u63D0\u793A\u4E92\u76F8\u91CD\u53E0\u3002"}})]),t("div",{staticClass:"legend"},[t("div",{staticClass:"item"},[t("img",{attrs:{src:"https://tdesign.gtimg.com/site/design/guide/notification/notification-4@2x.png"}}),t("img",{staticClass:"tag",attrs:{src:"https://tdesign.gtimg.com/site/doc/good.png"}})]),t("div",{staticClass:"item"},[t("img",{attrs:{src:"https://tdesign.gtimg.com/site/design/guide/notification/notification-5@2x.png"}}),t("img",{staticClass:"tag",attrs:{src:"https://tdesign.gtimg.com/site/doc/bad.png"}})])]),t("h3",{attrs:{id:"\u76F8\u4F3C\u7EC4\u4EF6"}},[i._v("\u76F8\u4F3C\u7EC4\u4EF6 "),t("a",{staticClass:"header-anchor",attrs:{href:"#\u76F8\u4F3C\u7EC4\u4EF6"}})]),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"left"}},[i._v("\u76F8\u4F3C\u7EC4\u4EF6")]),t("th",{staticStyle:{"text-align":"left"}},[i._v("\u4F55\u65F6\u4F7F\u7528")])])]),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"left"}},[t("a",{attrs:{href:"./notification"}},[i._v("\u6D88\u606F\u901A\u77E5")])]),t("td",{staticStyle:{"text-align":"left"}},[i._v("\u9700\u8981\u63D0\u9192\u7528\u6237\u6765\u81EA\u7CFB\u7EDF\u7684\u6D88\u606F\uFF0C\u4E14\u4E0D\u6253\u65AD\u7528\u6237\uFF1B\u5E26\u6709\u89E3\u91CA\u63CF\u8FF0\u7684\u63D0\u9192\u5185\u5BB9\u3002")])]),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[t("a",{attrs:{href:"./message"}},[i._v("\u5168\u5C40\u63D0\u793A")])]),t("td",{staticStyle:{"text-align":"left"}},[i._v("\u901A\u5E38\u8DDF\u968F\u5728\u7528\u6237\u64CD\u4F5C\u4E4B\u540E\uFF0C\u5BF9\u7528\u6237\u7684\u64CD\u4F5C\u4F5C\u51FA\u8F7B\u91CF\u3001\u5373\u65F6\u7684\u53CD\u9988\uFF1B\u81EA\u52A8\u6D88\u5931\uFF0C\u4E0D\u5E26\u5176\u4ED6\u4EA4\u4E92\u64CD\u4F5C\uFF1B\u53CD\u9988\u5185\u5BB9\u7B80\u77ED\u3002")])]),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[t("a",{attrs:{href:"./alert"}},[i._v("\u8B66\u544A")])]),t("td",{staticStyle:{"text-align":"left"}},[i._v("\u8B66\u544A\u5E38\u7528\u4E8E\u627F\u8F7D\u7AD9\u5185\u76F8\u5173\u4EA7\u54C1\u67D0\u9879\u529F\u80FD\u7684\u89E3\u91CA\u8BF4\u660E\u3001\u4F7F\u7528\u6CE8\u610F\u4E8B\u9879\u7B49\uFF0C\u7F6E\u4E8E\u5185\u5BB9\u5C55\u793A\u533A\u57DF\u9876\u90E8\uFF0C\u975E\u60AC\u6D6E\u5C42\u3002")])])])])]),t("div",{staticStyle:{"margin-top":"48px"}},[t("td-doc-history",{key:i.lastUpdated,attrs:{time:i.lastUpdated}})],1),t("td-doc-footer",{attrs:{slot:"doc-footer"},slot:"doc-footer"})],1)},w=[];o._withStripped=!0;const $={components:{Usage:p,Demoexamplebase:c,Demoexampleicon:l,Demoexampleoperation:r,Demoexampleplacement:d,Demoexampletoggle:_,Demoexamplecloseall:m,Demoexampleplugin:v},data(){return{DemoexamplebaseCode:g,DemoexamplebaseCompositionCode:f,DemoexampleiconCode:h,DemoexampleiconCompositionCode:u,DemoexampleoperationCode:b,DemoexampleoperationCompositionCode:C,DemoexampleplacementCode:N,DemoexampleplacementCompositionCode:y,DemoexampletoggleCode:P,DemoexampletoggleCompositionCode:x,DemoexamplecloseallCode:I,DemoexamplecloseallCompositionCode:k,DemoexamplepluginCode:A,DemoexamplepluginCompositionCode:T}},computed:{lastUpdated(){return this.tab==="design"?1739008828e3:1740128904e3},tab:{get(){return this.$route.query.tab||"demo"},set(i){this.$route.query.tab!==i&&this.$router.push({query:{tab:i}})}}},mounted(){const{tdDocContent:i,tdDocHeader:e,tdDocTabs:t}=this.$refs;e&&(e.docInfo={title:"Notification \u6D88\u606F\u901A\u77E5",desc:"\u8F7B\u91CF\u7EA7\u7684\u5168\u5C40\u6D88\u606F\u63D0\u793A\u548C\u786E\u8BA4\u673A\u5236\uFF0C\u51FA\u73B0\u548C\u6D88\u5931\u65F6\u9700\u8981\u6709\u7F13\u52A8\u52A8\u753B\u3002"}),document.title="Notification \u6D88\u606F\u901A\u77E5 | TDesign",t&&(t.tabs=[{tab:"demo",name:"\u793A\u4F8B"},{tab:"api",name:"API"},{tab:"design",name:"\u6307\u5357"}],t.onchange=({detail:s})=>this.tab=s),S.highlightAll(),this.$emit("loaded",()=>{i.pageStatus="show"})}},n={};var a=D($,o,w,!1,O,null,null,null);function O(i){for(let e in n)this[e]=n[e]}a.options.__file="../src/notification/notification.md";var B=function(){return a.exports}();export{B as default};
