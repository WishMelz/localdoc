import{Y as s,n as m}from"./index.663c003f.js";var x=`<template>
  <t-space size="24px">
    <t-button theme="default" variant="base">\u586B\u5145\u6309\u94AE</t-button>
    <t-button theme="default" variant="outline">\u63CF\u8FB9\u6309\u94AE</t-button>
    <t-button theme="default" variant="dashed">\u865A\u6846\u6309\u94AE</t-button>
    <t-button theme="default" variant="text">\u6587\u5B57\u6309\u94AE</t-button>
  </t-space>
</template>
`,f=`<template>
  <t-space size="24px">
    <t-button theme="default" variant="base">\u586B\u5145\u6309\u94AE</t-button>
    <t-button theme="default" variant="outline">\u63CF\u8FB9\u6309\u94AE</t-button>
    <t-button theme="default" variant="dashed">\u865A\u6846\u6309\u94AE</t-button>
    <t-button theme="default" variant="text">\u6587\u5B57\u6309\u94AE</t-button>
  </t-space>
</template>
`,y=`<template>
  <t-space size="24px">
    <t-button theme="primary">
      <add-icon slot="icon" />
      \u65B0\u5EFA
    </t-button>
    <t-button variant="outline">
      <cloud-upload-icon slot="icon" />
      \u4E0A\u4F20\u6587\u4EF6
    </t-button>
    <t-button shape="circle" theme="primary">
      <discount-icon slot="icon" />
    </t-button>
    <t-button shape="circle" theme="primary">
      <cloud-download-icon slot="icon" />
    </t-button>
    <t-button variant="outline" :icon="renderIcon"> \u641C\u7D22 </t-button>
  </t-space>
</template>

<script lang="jsx">
import {
  AddIcon, CloudUploadIcon, SearchIcon, DiscountIcon, CloudDownloadIcon,
} from 'tdesign-icons-vue';

export default {
  components: {
    AddIcon,
    CloudUploadIcon,
    DiscountIcon,
    CloudDownloadIcon,
  },
  methods: {
    renderIcon() {
      return <SearchIcon />;
    },
  },
};
<\/script>
`,C=`<template>
  <t-space size="24px">
    <t-button theme="primary">
      <add-icon slot="icon" />
      \u65B0\u5EFA
    </t-button>
    <t-button variant="outline">
      <cloud-upload-icon slot="icon" />
      \u4E0A\u4F20\u6587\u4EF6
    </t-button>
    <t-button shape="circle" theme="primary">
      <discount-icon slot="icon" />
    </t-button>
    <t-button shape="circle" theme="primary">
      <cloud-download-icon slot="icon" />
    </t-button>
    <t-button variant="outline" :icon="renderIcon"> \u641C\u7D22 </t-button>
  </t-space>
</template>

<script setup lang="jsx">
import {
  AddIcon, CloudUploadIcon, SearchIcon, DiscountIcon, CloudDownloadIcon,
} from 'tdesign-icons-vue';

const renderIcon = () => <SearchIcon />;
<\/script>
`,z=`<template>
  <t-space direction="vertical">
    <t-space>
      <t-button variant="outline" ghost>\u5E7D\u7075\u6309\u94AE</t-button>
      <t-button variant="dashed" ghost>\u5E7D\u7075\u6309\u94AE</t-button>
      <t-button variant="text" ghost>\u5E7D\u7075\u6309\u94AE</t-button>
    </t-space>
    <t-space>
      <t-button variant="outline" theme="primary" ghost>\u5E7D\u7075\u6309\u94AE</t-button>
      <t-button variant="dashed" theme="primary" ghost>\u5E7D\u7075\u6309\u94AE</t-button>
      <t-button variant="text" theme="primary" ghost>\u5E7D\u7075\u6309\u94AE</t-button>
    </t-space>
    <t-space>
      <t-button variant="outline" theme="success" ghost>\u5E7D\u7075\u6309\u94AE</t-button>
      <t-button variant="dashed" theme="success" ghost>\u5E7D\u7075\u6309\u94AE</t-button>
      <t-button variant="text" theme="success" ghost>\u5E7D\u7075\u6309\u94AE</t-button>
    </t-space>
    <t-space>
      <t-button variant="outline" theme="warning" ghost>\u5E7D\u7075\u6309\u94AE</t-button>
      <t-button variant="dashed" theme="warning" ghost>\u5E7D\u7075\u6309\u94AE</t-button>
      <t-button variant="text" theme="warning" ghost>\u5E7D\u7075\u6309\u94AE</t-button>
    </t-space>
    <t-space>
      <t-button variant="outline" theme="danger" ghost>\u5E7D\u7075\u6309\u94AE</t-button>
      <t-button variant="dashed" theme="danger" ghost>\u5E7D\u7075\u6309\u94AE</t-button>
      <t-button variant="text" theme="danger" ghost>\u5E7D\u7075\u6309\u94AE</t-button>
    </t-space>
  </t-space>
</template>
`,_=`<template>
  <t-space direction="vertical">
    <t-space>
      <t-button variant="outline" ghost>\u5E7D\u7075\u6309\u94AE</t-button>
      <t-button variant="dashed" ghost>\u5E7D\u7075\u6309\u94AE</t-button>
      <t-button variant="text" ghost>\u5E7D\u7075\u6309\u94AE</t-button>
    </t-space>
    <t-space>
      <t-button variant="outline" theme="primary" ghost>\u5E7D\u7075\u6309\u94AE</t-button>
      <t-button variant="dashed" theme="primary" ghost>\u5E7D\u7075\u6309\u94AE</t-button>
      <t-button variant="text" theme="primary" ghost>\u5E7D\u7075\u6309\u94AE</t-button>
    </t-space>
    <t-space>
      <t-button variant="outline" theme="success" ghost>\u5E7D\u7075\u6309\u94AE</t-button>
      <t-button variant="dashed" theme="success" ghost>\u5E7D\u7075\u6309\u94AE</t-button>
      <t-button variant="text" theme="success" ghost>\u5E7D\u7075\u6309\u94AE</t-button>
    </t-space>
    <t-space>
      <t-button variant="outline" theme="warning" ghost>\u5E7D\u7075\u6309\u94AE</t-button>
      <t-button variant="dashed" theme="warning" ghost>\u5E7D\u7075\u6309\u94AE</t-button>
      <t-button variant="text" theme="warning" ghost>\u5E7D\u7075\u6309\u94AE</t-button>
    </t-space>
    <t-space>
      <t-button variant="outline" theme="danger" ghost>\u5E7D\u7075\u6309\u94AE</t-button>
      <t-button variant="dashed" theme="danger" ghost>\u5E7D\u7075\u6309\u94AE</t-button>
      <t-button variant="text" theme="danger" ghost>\u5E7D\u7075\u6309\u94AE</t-button>
    </t-space>
  </t-space>
</template>
`,w=`<template>
  <t-space direction="vertical" align="center">
    <t-button block theme="primary" variant="base">\u586B\u5145\u6309\u94AE</t-button>
    <t-button block variant="outline">\u63CF\u8FB9\u6309\u94AE</t-button>
    <t-button block variant="dashed">\u865A\u6846\u6309\u94AE</t-button>
    <t-button block variant="text">\u6587\u5B57\u6309\u94AE</t-button>
  </t-space>
</template>
<style lang="less" scoped>
.t-button {
  min-width: 320px;
  max-width: 640px;
}
</style>
`,D=`<template>
  <t-space direction="vertical" align="center">
    <t-button block theme="primary" variant="base">\u586B\u5145\u6309\u94AE</t-button>
    <t-button block variant="outline">\u63CF\u8FB9\u6309\u94AE</t-button>
    <t-button block variant="dashed">\u865A\u6846\u6309\u94AE</t-button>
    <t-button block variant="text">\u6587\u5B57\u6309\u94AE</t-button>
  </t-space>
</template>
<style lang="less" scoped>
.t-button {
  min-width: 320px;
  max-width: 640px;
}
</style>
`,I=`<template>
  <t-space direction="vertical">
    <t-space>
      <t-button theme="default">\u586B\u5145\u6309\u94AE</t-button>
      <t-button variant="outline" theme="default">\u63CF\u8FB9\u6309\u94AE</t-button>
      <t-button variant="dashed" theme="default">\u865A\u6846\u6309\u94AE</t-button>
      <t-button variant="text" theme="default">\u6587\u5B57\u6309\u94AE</t-button>
    </t-space>
    <t-space>
      <t-button theme="primary">\u586B\u5145\u6309\u94AE</t-button>
      <t-button variant="outline" theme="primary">\u63CF\u8FB9\u6309\u94AE</t-button>
      <t-button variant="dashed" theme="primary">\u865A\u6846\u6309\u94AE</t-button>
      <t-button variant="text" theme="primary">\u6587\u5B57\u6309\u94AE</t-button>
    </t-space>
    <t-space>
      <t-button theme="danger">\u586B\u5145\u6309\u94AE</t-button>
      <t-button variant="outline" theme="danger">\u63CF\u8FB9\u6309\u94AE</t-button>
      <t-button variant="dashed" theme="danger">\u865A\u6846\u6309\u94AE</t-button>
      <t-button variant="text" theme="danger">\u6587\u5B57\u6309\u94AE</t-button>
    </t-space>
    <t-space>
      <t-button theme="warning">\u586B\u5145\u6309\u94AE</t-button>
      <t-button variant="outline" theme="warning">\u63CF\u8FB9\u6309\u94AE</t-button>
      <t-button variant="dashed" theme="warning">\u865A\u6846\u6309\u94AE</t-button>
      <t-button variant="text" theme="warning">\u6587\u5B57\u6309\u94AE</t-button>
    </t-space>
    <t-space>
      <t-button theme="success">\u586B\u5145\u6309\u94AE</t-button>
      <t-button variant="outline" theme="success">\u63CF\u8FB9\u6309\u94AE</t-button>
      <t-button variant="dashed" theme="success">\u865A\u6846\u6309\u94AE</t-button>
      <t-button variant="text" theme="success">\u6587\u5B57\u6309\u94AE</t-button>
    </t-space>
  </t-space>
</template>
`,k=`<template>
  <t-space direction="vertical">
    <t-space>
      <t-button theme="default">\u586B\u5145\u6309\u94AE</t-button>
      <t-button variant="outline" theme="default">\u63CF\u8FB9\u6309\u94AE</t-button>
      <t-button variant="dashed" theme="default">\u865A\u6846\u6309\u94AE</t-button>
      <t-button variant="text" theme="default">\u6587\u5B57\u6309\u94AE</t-button>
    </t-space>
    <t-space>
      <t-button theme="primary">\u586B\u5145\u6309\u94AE</t-button>
      <t-button variant="outline" theme="primary">\u63CF\u8FB9\u6309\u94AE</t-button>
      <t-button variant="dashed" theme="primary">\u865A\u6846\u6309\u94AE</t-button>
      <t-button variant="text" theme="primary">\u6587\u5B57\u6309\u94AE</t-button>
    </t-space>
    <t-space>
      <t-button theme="danger">\u586B\u5145\u6309\u94AE</t-button>
      <t-button variant="outline" theme="danger">\u63CF\u8FB9\u6309\u94AE</t-button>
      <t-button variant="dashed" theme="danger">\u865A\u6846\u6309\u94AE</t-button>
      <t-button variant="text" theme="danger">\u6587\u5B57\u6309\u94AE</t-button>
    </t-space>
    <t-space>
      <t-button theme="warning">\u586B\u5145\u6309\u94AE</t-button>
      <t-button variant="outline" theme="warning">\u63CF\u8FB9\u6309\u94AE</t-button>
      <t-button variant="dashed" theme="warning">\u865A\u6846\u6309\u94AE</t-button>
      <t-button variant="text" theme="warning">\u6587\u5B57\u6309\u94AE</t-button>
    </t-space>
    <t-space>
      <t-button theme="success">\u586B\u5145\u6309\u94AE</t-button>
      <t-button variant="outline" theme="success">\u63CF\u8FB9\u6309\u94AE</t-button>
      <t-button variant="dashed" theme="success">\u865A\u6846\u6309\u94AE</t-button>
      <t-button variant="text" theme="success">\u6587\u5B57\u6309\u94AE</t-button>
    </t-space>
  </t-space>
</template>
`,q=`<template>
  <t-space>
    <t-button disabled>\u586B\u5145\u6309\u94AE</t-button>
    <t-button loading>\u52A0\u8F7D\u4E2D</t-button>
  </t-space>
</template>
`,S=`<template>
  <t-space>
    <t-button disabled>\u586B\u5145\u6309\u94AE</t-button>
    <t-button loading>\u52A0\u8F7D\u4E2D</t-button>
  </t-space>
</template>
`,V=`<template>
  <t-space direction="vertical">
    <t-space>
      <t-button theme="primary" size="small" variant="base">\u586B\u5145\u6309\u94AE</t-button>
      <t-button size="small" variant="outline">\u63CF\u8FB9\u6309\u94AE</t-button>
      <t-button size="small" variant="dashed">\u865A\u6846\u6309\u94AE</t-button>
      <t-button size="small" variant="text">\u6587\u5B57\u6309\u94AE</t-button>
    </t-space>
    <t-space>
      <t-button theme="primary" size="medium" variant="base">\u586B\u5145\u6309\u94AE</t-button>
      <t-button size="medium" variant="outline">\u63CF\u8FB9\u6309\u94AE</t-button>
      <t-button size="medium" variant="dashed">\u865A\u6846\u6309\u94AE</t-button>
      <t-button size="medium" variant="text">\u6587\u5B57\u6309\u94AE</t-button>
    </t-space>
    <t-space>
      <t-button theme="primary" size="large" variant="base">\u586B\u5145\u6309\u94AE</t-button>
      <t-button size="large" variant="outline">\u63CF\u8FB9\u6309\u94AE</t-button>
      <t-button size="large" variant="dashed">\u865A\u6846\u6309\u94AE</t-button>
      <t-button size="large" variant="text">\u6587\u5B57\u6309\u94AE</t-button>
    </t-space>
  </t-space>
</template>
`,P=`<template>
  <t-space direction="vertical">
    <t-space>
      <t-button theme="primary" size="small" variant="base">\u586B\u5145\u6309\u94AE</t-button>
      <t-button size="small" variant="outline">\u63CF\u8FB9\u6309\u94AE</t-button>
      <t-button size="small" variant="dashed">\u865A\u6846\u6309\u94AE</t-button>
      <t-button size="small" variant="text">\u6587\u5B57\u6309\u94AE</t-button>
    </t-space>
    <t-space>
      <t-button theme="primary" size="medium" variant="base">\u586B\u5145\u6309\u94AE</t-button>
      <t-button size="medium" variant="outline">\u63CF\u8FB9\u6309\u94AE</t-button>
      <t-button size="medium" variant="dashed">\u865A\u6846\u6309\u94AE</t-button>
      <t-button size="medium" variant="text">\u6587\u5B57\u6309\u94AE</t-button>
    </t-space>
    <t-space>
      <t-button theme="primary" size="large" variant="base">\u586B\u5145\u6309\u94AE</t-button>
      <t-button size="large" variant="outline">\u63CF\u8FB9\u6309\u94AE</t-button>
      <t-button size="large" variant="dashed">\u865A\u6846\u6309\u94AE</t-button>
      <t-button size="large" variant="text">\u6587\u5B57\u6309\u94AE</t-button>
    </t-space>
  </t-space>
</template>
`,U=`<template>
  <t-space direction="vertical">
    <t-space>
      <t-button theme="primary" shape="rectangle" variant="base">\u586B\u5145\u6309\u94AE</t-button>
      <t-button theme="primary" shape="square" variant="base"><calendar-icon slot="icon" /></t-button>
      <t-button theme="primary" shape="round" variant="base">\u586B\u5145\u6309\u94AE</t-button>
      <t-button theme="primary" shape="circle" variant="base"><calendar-icon slot="icon" /></t-button>
    </t-space>
    <t-space>
      <t-button shape="rectangle" variant="outline">\u63CF\u8FB9\u6309\u94AE</t-button>
      <t-button shape="square" variant="outline"><calendar-icon slot="icon" /></t-button>
      <t-button shape="round" variant="outline">\u63CF\u8FB9\u6309\u94AE</t-button>
      <t-button shape="circle" variant="outline"><calendar-icon slot="icon" /></t-button>
    </t-space>
    <t-space>
      <t-button shape="rectangle" variant="dashed">\u865A\u6846\u6309\u94AE</t-button>
      <t-button shape="square" variant="dashed"><calendar-icon slot="icon" /></t-button>
      <t-button shape="round" variant="dashed">\u865A\u6846\u6309\u94AE</t-button>
      <t-button shape="circle" variant="dashed"><calendar-icon slot="icon" /></t-button>
    </t-space>
    <t-space>
      <t-button shape="rectangle" variant="text">\u6587\u5B57\u6309\u94AE</t-button>
      <t-button shape="square" variant="text"><calendar-icon slot="icon" /></t-button>
      <t-button shape="round" variant="text">\u6587\u5B57\u6309\u94AE</t-button>
      <t-button shape="circle" variant="text"><calendar-icon slot="icon" /></t-button>
    </t-space>
  </t-space>
</template>
<script>
import { CalendarIcon } from 'tdesign-icons-vue';

export default {
  components: {
    CalendarIcon,
  },
};
<\/script>
`,j=`<template>
  <t-space direction="vertical">
    <t-space>
      <t-button theme="primary" shape="rectangle" variant="base">\u586B\u5145\u6309\u94AE</t-button>
      <t-button theme="primary" shape="square" variant="base"><calendar-icon slot="icon" /></t-button>
      <t-button theme="primary" shape="round" variant="base">\u586B\u5145\u6309\u94AE</t-button>
      <t-button theme="primary" shape="circle" variant="base"><calendar-icon slot="icon" /></t-button>
    </t-space>
    <t-space>
      <t-button shape="rectangle" variant="outline">\u63CF\u8FB9\u6309\u94AE</t-button>
      <t-button shape="square" variant="outline"><calendar-icon slot="icon" /></t-button>
      <t-button shape="round" variant="outline">\u63CF\u8FB9\u6309\u94AE</t-button>
      <t-button shape="circle" variant="outline"><calendar-icon slot="icon" /></t-button>
    </t-space>
    <t-space>
      <t-button shape="rectangle" variant="dashed">\u865A\u6846\u6309\u94AE</t-button>
      <t-button shape="square" variant="dashed"><calendar-icon slot="icon" /></t-button>
      <t-button shape="round" variant="dashed">\u865A\u6846\u6309\u94AE</t-button>
      <t-button shape="circle" variant="dashed"><calendar-icon slot="icon" /></t-button>
    </t-space>
    <t-space>
      <t-button shape="rectangle" variant="text">\u6587\u5B57\u6309\u94AE</t-button>
      <t-button shape="square" variant="text"><calendar-icon slot="icon" /></t-button>
      <t-button shape="round" variant="text">\u6587\u5B57\u6309\u94AE</t-button>
      <t-button shape="circle" variant="text"><calendar-icon slot="icon" /></t-button>
    </t-space>
  </t-space>
</template>
<script setup>
import { CalendarIcon } from 'tdesign-icons-vue';
<\/script>
`,d=[{name:"block",type:"Boolean",defaultValue:!1,options:[]},{name:"disabled",type:"Boolean",defaultValue:!1,options:[]},{name:"loading",type:"Boolean",defaultValue:!1,options:[]},{name:"shape",type:"enum",defaultValue:"rectangle",options:[{label:"rectangle",value:"rectangle"},{label:"square",value:"square"},{label:"round",value:"round"},{label:"circle",value:"circle"}]},{name:"size",type:"enum",defaultValue:"medium",options:[{label:"small",value:"small"},{label:"medium",value:"medium"},{label:"large",value:"large"}]},{name:"type",type:"enum",defaultValue:"button",options:[{label:"submit",value:"submit"},{label:"reset",value:"reset"},{label:"button",value:"button"}]},{name:"variant",type:"enum",defaultValue:"base",options:[{label:"base",value:"base"},{label:"outline",value:"outline"},{label:"dashed",value:"dashed"},{label:"text",value:"text"}]}];const r={};r.setup=(t,n)=>{const e=s(d),a=[{label:"button",value:"button"}],o={button:'<t-button v-bind="configProps">\u786E\u5B9A</t-button>'},u=s(`<template>${o[a[0].value].trim()}</template>`);function c(p){u.value=`<template>${o[p].trim()}</template>`}return{configList:e,panelList:a,usageCode:u,onPanelChange:c}};var b=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("base-usage",{attrs:{code:t.usageCode,"config-list":t.configList,"panel-list":t.panelList},on:{PanelChange:t.onPanelChange},scopedSlots:t._u([{key:"button",fn:function(a){var o=a.configProps;return[e("t-button",t._b({},"t-button",o,!1),[t._v("\u786E\u5B9A")])]}}])})},h=[];b._withStripped=!0;const i={};var l=m(r,b,h,!1,v,null,null,null);function v(t){for(let n in i)this[n]=i[n]}l.options.__file="../src/button/_usage/index.vue";var L=function(){return l.exports}();export{x as D,L as U,f as a,y as b,C as c,z as d,_ as e,w as f,D as g,I as h,k as i,q as j,S as k,V as l,P as m,U as n,j as o};
