import{Y as o,n as g}from"./index.663c003f.js";var C=`<template>
  <t-range-input />
</template>
`,b=`<template>
  <t-range-input />
</template>
`,x=`<template>
  <t-space direction="vertical">
    <t-range-input size="small" />
    <t-range-input />
    <t-range-input size="large" />
  </t-space>
</template>
`,y=`<template>
  <t-space direction="vertical">
    <t-range-input size="small" />
    <t-range-input />
    <t-range-input size="large" />
  </t-space>
</template>
`,h=`<template>
  <t-space direction="vertical">
    <t-range-input status="success" />
    <t-range-input status="warning" />
    <t-range-input status="error" />
  </t-space>
</template>
`,D=`<template>
  <t-space direction="vertical">
    <t-range-input status="success" />
    <t-range-input status="warning" />
    <t-range-input status="error" />
  </t-space>
</template>
`,w=`<template>
  <t-range-input-popup :panel="panel" />
</template>

<script lang="jsx">
export default {
  data() {
    return {
      panel: () => <div>hello world</div>,
    };
  },
};
<\/script>
`,z=`<template>
  <t-range-input-popup :panel="panel" />
</template>

<script setup lang="jsx">
import { ref } from 'vue';

const panel = ref(() => <div>hello world</div>);
<\/script>
`,d=[{name:"borderless",type:"Boolean",defaultValue:!1,options:[]},{name:"clearable",type:"Boolean",defaultValue:!1,options:[]},{name:"disabled",type:"Boolean",defaultValue:!1,options:[]},{name:"readonly",type:"Boolean",defaultValue:!1,options:[]},{name:"showClearIconOnEmpty",type:"Boolean",defaultValue:!1,options:[]},{name:"size",type:"enum",defaultValue:"medium",options:[{label:"small",value:"small"},{label:"medium",value:"medium"},{label:"large",value:"large"}]},{name:"status",type:"enum",defaultValue:"default",options:[{label:"default",value:"default"},{label:"success",value:"success"},{label:"warning",value:"warning"},{label:"error",value:"error"}]}];const r={};r.setup=(e,n)=>{const a=o(d),t=[{label:"rangeInput",value:"rangeInput"}],l={rangeInput:'<t-range-input v-bind="configProps" />'},s=o(`<template>${l[t[0].value].trim()}</template>`);function m(c){s.value=`<template>${l[c].trim()}</template>`}return{configList:a,panelList:t,usageCode:s,onPanelChange:m}};var i=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("base-usage",{attrs:{code:e.usageCode,"config-list":e.configList,"panel-list":e.panelList},on:{PanelChange:e.onPanelChange},scopedSlots:e._u([{key:"rangeInput",fn:function(t){var l=t.configProps;return[a("t-range-input",e._b({},"t-range-input",l,!1))]}}])})},f=[];i._withStripped=!0;const p={};var u=g(r,i,f,!1,v,null,null,null);function v(e){for(let n in p)this[n]=p[n]}u.options.__file="../src/range-input/_usage/index.vue";var V=function(){return u.exports}();export{C as D,V as U,b as a,x as b,y as c,h as d,D as e,w as f,z as g};
