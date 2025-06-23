import{Y as p,n as u}from"./index.663c003f.js";var _=`<template>
  <t-space style="width: 100%" direction="vertical">
    <t-alert theme="info" :message="infoMessage" />
    <t-alert theme="success" message="\u8FD9\u662F\u4E00\u6761\u6210\u529F\u7684\u6D88\u606F\u63D0\u793A" />
    <t-alert theme="warning">
      <template #message> \u8FD9\u662F\u4E00\u6761\u8B66\u793A\u4FE1\u606F </template>
    </t-alert>
    <t-alert theme="error"> \u8FD9\u662F\u4E00\u6761\u5931\u8D25\u4FE1\u606F\u63D0\u793A </t-alert>
  </t-space>
</template>
<script lang="jsx">
export default {
  data() {
    return {
      infoMessage: () => <div>\u8FD9\u662F\u4E00\u6761\u666E\u901A\u7684\u6D88\u606F\u63D0\u793A</div>,
    };
  },
};
<\/script>
`,x=`<template>
  <t-space style="width: 100%" direction="vertical">
    <t-alert theme="info" :message="infoMessage" />
    <t-alert theme="success" message="\u8FD9\u662F\u4E00\u6761\u6210\u529F\u7684\u6D88\u606F\u63D0\u793A" />
    <t-alert theme="warning">
      <template #message> \u8FD9\u662F\u4E00\u6761\u8B66\u793A\u4FE1\u606F </template>
    </t-alert>
    <t-alert theme="error"> \u8FD9\u662F\u4E00\u6761\u5931\u8D25\u4FE1\u606F\u63D0\u793A </t-alert>
  </t-space>
</template>
<script setup lang="jsx">
import { ref } from 'vue';

const infoMessage = ref(() => <div>\u8FD9\u662F\u4E00\u6761\u666E\u901A\u7684\u6D88\u606F\u63D0\u793A</div>);
<\/script>
`,C=`<template>
  <t-space style="width: 100%">
    <t-alert theme="info" message="\u8FD9\u662F\u4E00\u6761\u666E\u901A\u7684\u6D88\u606F\u63D0\u793A" close>
      <template #operation>
        <span @click="handleOperation">\u76F8\u5173\u64CD\u4F5C</span>
      </template>
    </t-alert>
  </t-space>
</template>
<script lang="jsx">
export default {
  methods: {
    handleOperation() {
      alert('operation clicked');
    },
  },
};
<\/script>
`,w=`<template>
  <t-space style="width: 100%">
    <t-alert theme="info" message="\u8FD9\u662F\u4E00\u6761\u666E\u901A\u7684\u6D88\u606F\u63D0\u793A" close>
      <template #operation>
        <span @click="handleOperation">\u76F8\u5173\u64CD\u4F5C</span>
      </template>
    </t-alert>
  </t-space>
</template>
<script setup lang="jsx">
const handleOperation = () => {
  alert('operation clicked');
};
<\/script>
`,y=`<template>
  <t-space style="width: 100%">
    <t-alert theme="info" title="\u8FD9\u662F\u4E00\u6761\u666E\u901A\u7684\u6D88\u606F\u63D0\u793A" message="\u8FD9\u662F\u4E0E\u666E\u901A\u7684\u6D88\u606F\u63D0\u793A\u76F8\u5173\u7684\u6587\u5B57\u8F85\u52A9\u8BF4\u660E" close>
      <template #operation>
        <span @click="handleOperation">\u76F8\u5173\u64CD\u4F5C</span>
      </template>
    </t-alert>
  </t-space>
</template>
<script lang="jsx">
export default {
  methods: {
    handleOperation() {
      alert('operation clicked');
    },
  },
};
<\/script>
`,b=`<template>
  <t-space style="width: 100%">
    <t-alert theme="info" title="\u8FD9\u662F\u4E00\u6761\u666E\u901A\u7684\u6D88\u606F\u63D0\u793A" message="\u8FD9\u662F\u4E0E\u666E\u901A\u7684\u6D88\u606F\u63D0\u793A\u76F8\u5173\u7684\u6587\u5B57\u8F85\u52A9\u8BF4\u660E" close>
      <template #operation>
        <span @click="handleOperation">\u76F8\u5173\u64CD\u4F5C</span>
      </template>
    </t-alert>
  </t-space>
</template>
<script setup lang="jsx">
const handleOperation = () => {
  alert('operation clicked');
};
<\/script>
`,k=`<template>
  <t-space style="width: 100%">
    <t-alert theme="info" close :max-line="2">
      <span>\u8FD9\u662F\u6298\u53E0\u7684\u7B2C\u4E00\u6761\u6D88\u606F</span>
      <span>\u8FD9\u662F\u6298\u53E0\u7684\u7B2C\u4E8C\u6761\u6D88\u606F</span>
      <span>\u8FD9\u662F\u6298\u53E0\u7684\u7B2C\u4E09\u6761\u6D88\u606F</span>
      <span>\u8FD9\u662F\u6298\u53E0\u7684\u7B2C\u56DB\u6761\u6D88\u606F</span>
      <span>\u8FD9\u662F\u6298\u53E0\u7684\u7B2C\u4E94\u6761\u6D88\u606F</span>
      <span>\u8FD9\u662F\u6298\u53E0\u7684\u7B2C\u516D\u6761\u6D88\u606F</span>
    </t-alert>
  </t-space>
</template>
`,D=`<template>
  <t-space style="width: 100%">
    <t-alert theme="info" close :max-line="2">
      <span>\u8FD9\u662F\u6298\u53E0\u7684\u7B2C\u4E00\u6761\u6D88\u606F</span>
      <span>\u8FD9\u662F\u6298\u53E0\u7684\u7B2C\u4E8C\u6761\u6D88\u606F</span>
      <span>\u8FD9\u662F\u6298\u53E0\u7684\u7B2C\u4E09\u6761\u6D88\u606F</span>
      <span>\u8FD9\u662F\u6298\u53E0\u7684\u7B2C\u56DB\u6761\u6D88\u606F</span>
      <span>\u8FD9\u662F\u6298\u53E0\u7684\u7B2C\u4E94\u6761\u6D88\u606F</span>
      <span>\u8FD9\u662F\u6298\u53E0\u7684\u7B2C\u516D\u6761\u6D88\u606F</span>
    </t-alert>
  </t-space>
</template>
`,f=[{name:"close",type:"Boolean",defaultValue:!1,options:[]},{name:"theme",type:"enum",defaultValue:"info",options:[{label:"success",value:"success"},{label:"info",value:"info"},{label:"warning",value:"warning"},{label:"error",value:"error"}]}];const r={};r.setup=(e,t)=>{const n=p(f),a=[{label:"alert",value:"alert"}],s={alert:'<t-alert message="\u8FD9\u662F\u4E00\u6761\u4FE1\u606F" v-bind="configProps" />'},l=p(`<template>${s[a[0].value].trim()}</template>`);function m(d){l.value=`<template>${s[d].trim()}</template>`}return{configList:n,panelList:a,usageCode:l,onPanelChange:m}};var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("base-usage",{attrs:{code:e.usageCode,"config-list":e.configList,"panel-list":e.panelList},on:{PanelChange:e.onPanelChange},scopedSlots:e._u([{key:"alert",fn:function(a){var s=a.configProps;return[n("t-alert",e._b({attrs:{message:"\u8FD9\u662F\u4E00\u6761\u4FE1\u606F"}},"t-alert",s,!1))]}}])})},g=[];i._withStripped=!0;const o={};var c=u(r,i,g,!1,h,null,null,null);function h(e){for(let t in o)this[t]=o[t]}c.options.__file="../src/alert/_usage/index.vue";var O=function(){return c.exports}();export{_ as D,O as U,x as a,C as b,w as c,y as d,b as e,k as f,D as g};
