import{Y as i,n as p}from"./index.663c003f.js";var _=`<template>
  <t-space direction="vertical">
    <t-message theme="info">\u7528\u4E8E\u8868\u793A\u666E\u901A\u64CD\u4F5C\u4FE1\u606F\u63D0\u793A</t-message>
    <t-message theme="success">\u7528\u4E8E\u8868\u793A\u64CD\u4F5C\u987A\u5229\u8FBE\u6210</t-message>
    <t-message theme="warning">\u7528\u4E8E\u8868\u793A\u64CD\u4F5C\u5F15\u8D77\u4E00\u5B9A\u540E\u679C</t-message>
    <t-message theme="error">\u7528\u4E8E\u8868\u793A\u64CD\u4F5C\u5F15\u8D77\u4E25\u91CD\u7684\u540E\u679C</t-message>
    <t-message theme="question">\u7528\u4E8E\u5E2E\u52A9\u7528\u6237\u64CD\u4F5C\u7684\u4FE1\u606F\u63D0\u793A</t-message>
  </t-space>
</template>
`,b=`<template>
  <t-space direction="vertical">
    <t-message theme="info">\u7528\u4E8E\u8868\u793A\u666E\u901A\u64CD\u4F5C\u4FE1\u606F\u63D0\u793A</t-message>
    <t-message theme="success">\u7528\u4E8E\u8868\u793A\u64CD\u4F5C\u987A\u5229\u8FBE\u6210</t-message>
    <t-message theme="warning">\u7528\u4E8E\u8868\u793A\u64CD\u4F5C\u5F15\u8D77\u4E00\u5B9A\u540E\u679C</t-message>
    <t-message theme="error">\u7528\u4E8E\u8868\u793A\u64CD\u4F5C\u5F15\u8D77\u4E25\u91CD\u7684\u540E\u679C</t-message>
    <t-message theme="question">\u7528\u4E8E\u5E2E\u52A9\u7528\u6237\u64CD\u4F5C\u7684\u4FE1\u606F\u63D0\u793A</t-message>
  </t-space>
</template>
`,C=`<template>
  <t-space direction="vertical">
    <t-message theme="loading">\u7528\u4E8E\u8868\u793A\u64CD\u4F5C\u6B63\u5728\u751F\u6548\u7684\u8FC7\u7A0B\u4E2D</t-message>
    <t-message :theme="status1">\u7528\u4E8E\u8868\u793A\u64CD\u4F5C\u987A\u5229\u8FBE\u6210(10s)</t-message>
    <t-message :theme="status2">\u7528\u4E8E\u8868\u793A\u666E\u901A\u64CD\u4F5C\u5931\u8D25\u4E2D\u65AD(10s)</t-message>
    <t-button :disabled="isDisabled" @click="reset">\u91CD\u7F6E</t-button>
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      status1: 'loading',
      status2: 'loading',
    };
  },
  computed: {
    isDisabled() {
      return this.status1 === 'loading' && this.status2 === 'loading';
    },
  },
  mounted() {
    this.fn1();
    this.fn2();
  },
  methods: {
    fn1() {
      setTimeout(() => {
        this.status1 = 'success';
      }, 10000);
    },
    fn2() {
      setTimeout(() => {
        this.status2 = 'warning';
      }, 10000);
    },
    reset() {
      this.status1 = 'loading';
      this.status2 = 'loading';
      this.fn1();
      this.fn2();
    },
  },
};
<\/script>
`,x=`<template>
  <t-space direction="vertical">
    <t-message theme="loading">\u7528\u4E8E\u8868\u793A\u64CD\u4F5C\u6B63\u5728\u751F\u6548\u7684\u8FC7\u7A0B\u4E2D</t-message>
    <t-message :theme="status1">\u7528\u4E8E\u8868\u793A\u64CD\u4F5C\u987A\u5229\u8FBE\u6210(10s)</t-message>
    <t-message :theme="status2">\u7528\u4E8E\u8868\u793A\u666E\u901A\u64CD\u4F5C\u5931\u8D25\u4E2D\u65AD(10s)</t-message>
    <t-button :disabled="isDisabled" @click="reset">\u91CD\u7F6E</t-button>
  </t-space>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue';

const status1 = ref('loading');
const status2 = ref('loading');
const isDisabled = computed(() => status1.value === 'loading' && status2.value === 'loading');
const fn1 = () => {
  setTimeout(() => {
    status1.value = 'success';
  }, 10000);
};
const fn2 = () => {
  setTimeout(() => {
    status2.value = 'warning';
  }, 10000);
};
const reset = () => {
  status1.value = 'loading';
  status2.value = 'loading';
  fn1();
  fn2();
};
onMounted(() => {
  fn1();
  fn2();
});
<\/script>
`,d=[{name:"closeBtn",type:"Boolean",defaultValue:!1,options:[]},{name:"icon",type:"Boolean",defaultValue:!0,options:[]},{name:"theme",type:"enum",defaultValue:"info",options:[{label:"info",value:"info"},{label:"success",value:"success"},{label:"warning",value:"warning"},{label:"error",value:"error"},{label:"question",value:"question"},{label:"loading",value:"loading"}]}];const m={};m.setup=(e,t)=>{const s=i(d),n=[{label:"message",value:"message"}],a={message:'<t-message v-bind="configProps" :duration="0" content="\u8FD9\u91CC\u662F Message \u4FE1\u606F" />'},o=i(`<template>${a[n[0].value].trim()}</template>`);function g(c){o.value=`<template>${a[c].trim()}</template>`}return{configList:s,panelList:n,usageCode:o,onPanelChange:g}};var u=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("base-usage",{attrs:{code:e.usageCode,"config-list":e.configList,"panel-list":e.panelList},on:{PanelChange:e.onPanelChange},scopedSlots:e._u([{key:"message",fn:function(n){var a=n.configProps;return[s("t-message",e._b({attrs:{duration:0,content:"\u8FD9\u91CC\u662F Message \u4FE1\u606F"}},"t-message",a,!1))]}}])})},f=[];u._withStripped=!0;const l={};var r=p(m,u,f,!1,v,null,null,null);function v(e){for(let t in l)this[t]=l[t]}r.options.__file="../src/message/_usage/index.vue";var D=function(){return r.exports}();export{_ as D,D as U,b as a,C as b,x as c};
