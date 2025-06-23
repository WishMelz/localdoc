import{Y as a,n as u}from"./index.663c003f.js";var C=`<template>
  <t-descriptions title="Shipping address">
    <t-descriptions-item label="Name">TDesign</t-descriptions-item>
    <t-descriptions-item label="Telephone Number">139****0609</t-descriptions-item>
    <t-descriptions-item label="Area">China Tencent Headquarters</t-descriptions-item>
    <t-descriptions-item label="Address"
    >Shenzhen Penguin Island D1 4A Mail Center<template #content>asds</template></t-descriptions-item
    >
  </t-descriptions>
</template>
`,f=`<template>
  <t-descriptions title="Shipping address">
    <t-descriptions-item label="Name">TDesign</t-descriptions-item>
    <t-descriptions-item label="Telephone Number">139****0609</t-descriptions-item>
    <t-descriptions-item label="Area">China Tencent Headquarters</t-descriptions-item>
    <t-descriptions-item label="Address"
    >Shenzhen Penguin Island D1 4A Mail Center<template #content>asds</template></t-descriptions-item
    >
  </t-descriptions>
</template>
`,A=`<template>
  <t-descriptions title="Shipping address" bordered :column="3">
    <t-descriptions-item label="Name">TDesign</t-descriptions-item>
    <t-descriptions-item label="Telephone Number">139****0609</t-descriptions-item>
    <t-descriptions-item label="Area">China Tencent Headquarters</t-descriptions-item>
    <t-descriptions-item label="Address">Shenzhen Penguin Island D1 4A Mail Center</t-descriptions-item>
  </t-descriptions>
</template>
`,y=`<template>
  <t-descriptions title="Shipping address" bordered :column="3">
    <t-descriptions-item label="Name">TDesign</t-descriptions-item>
    <t-descriptions-item label="Telephone Number">139****0609</t-descriptions-item>
    <t-descriptions-item label="Area">China Tencent Headquarters</t-descriptions-item>
    <t-descriptions-item label="Address">Shenzhen Penguin Island D1 4A Mail Center</t-descriptions-item>
  </t-descriptions>
</template>
`,T=`<template>
  <t-space direction="vertical">
    <t-checkbox v-model="checked">colon</t-checkbox>
    <t-descriptions title="Shipping address" bordered :colon="checked" :column="3">
      <t-descriptions-item label="Name">TDesign</t-descriptions-item>
      <t-descriptions-item label="Telephone Number">139****0609</t-descriptions-item>
      <t-descriptions-item label="Area">China Tencent Headquarters</t-descriptions-item>
      <t-descriptions-item label="Address">Shenzhen Penguin Island D1 4A Mail Center</t-descriptions-item>
    </t-descriptions>
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      checked: false,
    };
  },
};
<\/script>
`,D=`<template>
  <t-space direction="vertical">
    <t-checkbox v-model="checked">colon</t-checkbox>
    <t-descriptions title="Shipping address" bordered :colon="checked" :column="3">
      <t-descriptions-item label="Name">TDesign</t-descriptions-item>
      <t-descriptions-item label="Telephone Number">139****0609</t-descriptions-item>
      <t-descriptions-item label="Area">China Tencent Headquarters</t-descriptions-item>
      <t-descriptions-item label="Address">Shenzhen Penguin Island D1 4A Mail Center</t-descriptions-item>
    </t-descriptions>
  </t-space>
</template>

<script setup>
import { ref } from 'vue';

const checked = ref(false);
<\/script>
`,_=`<template>
  <t-space direction="vertical">
    <t-row>
      <span>layout\uFF1A</span>
      <t-radio-group v-model="layout" :options="layoutOptions"></t-radio-group>
    </t-row>

    <t-row>
      <span>itemLayout\uFF1A</span>
      <t-radio-group v-model="itemLayout" :options="itemLayoutOptions"></t-radio-group>
    </t-row>

    <t-descriptions title="Shipping address" bordered :layout="layout" :item-layout="itemLayout" :column="3">
      <t-descriptions-item label="Name">TDesign</t-descriptions-item>
      <t-descriptions-item label="Telephone Number">139****0609</t-descriptions-item>
      <t-descriptions-item label="Area">China Tencent Headquarters</t-descriptions-item>
      <t-descriptions-item label="Address">Shenzhen Penguin Island D1 4A Mail Center</t-descriptions-item>
    </t-descriptions>
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      layout: 'horizontal',
      itemLayout: 'horizontal',
      layoutOptions: ['horizontal', 'vertical'],
      itemLayoutOptions: ['horizontal', 'vertical'],
    };
  },
};
<\/script>
`,x=`<template>
  <t-space direction="vertical">
    <t-row>
      <span>layout\uFF1A</span>
      <t-radio-group v-model="layout" :options="layoutOptions"></t-radio-group>
    </t-row>

    <t-row>
      <span>itemLayout\uFF1A</span>
      <t-radio-group v-model="itemLayout" :options="itemLayoutOptions"></t-radio-group>
    </t-row>

    <t-descriptions title="Shipping address" bordered :layout="layout" :item-layout="itemLayout" :column="3">
      <t-descriptions-item label="Name">TDesign</t-descriptions-item>
      <t-descriptions-item label="Telephone Number">139****0609</t-descriptions-item>
      <t-descriptions-item label="Area">China Tencent Headquarters</t-descriptions-item>
      <t-descriptions-item label="Address">Shenzhen Penguin Island D1 4A Mail Center</t-descriptions-item>
    </t-descriptions>
  </t-space>
</template>

<script setup>
import { ref } from 'vue';

const layout = ref('horizontal');
const itemLayout = ref('horizontal');
const layoutOptions = ref(['horizontal', 'vertical']);
const itemLayoutOptions = ref(['horizontal', 'vertical']);
<\/script>
`,z=`<template>
  <t-space direction="vertical">
    <t-radio-group v-model="column" :options="columnOptions"></t-radio-group>
    <t-descriptions bordered :column="column">
      <t-descriptions-item label="Name">TDesign</t-descriptions-item>
      <t-descriptions-item label="Telephone Number">139****0609</t-descriptions-item>
      <t-descriptions-item label="Area">China Tencent Headquarters</t-descriptions-item>
      <t-descriptions-item label="Address">Shenzhen Penguin Island D1 4A Mail Center</t-descriptions-item>
    </t-descriptions>
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      columnOptions: [2, 3, 4],
      column: 2,
    };
  },
};
<\/script>
`,S=`<template>
  <t-space direction="vertical">
    <t-radio-group v-model="column" :options="columnOptions"></t-radio-group>
    <t-descriptions bordered :column="column">
      <t-descriptions-item label="Name">TDesign</t-descriptions-item>
      <t-descriptions-item label="Telephone Number">139****0609</t-descriptions-item>
      <t-descriptions-item label="Area">China Tencent Headquarters</t-descriptions-item>
      <t-descriptions-item label="Address">Shenzhen Penguin Island D1 4A Mail Center</t-descriptions-item>
    </t-descriptions>
  </t-space>
</template>

<script setup>
import { ref } from 'vue';

const columnOptions = ref([2, 3, 4]);
const column = ref(2);
<\/script>
`,N=`<template>
  <t-descriptions
    title="Shipping address"
    bordered
    :label-style="{ width: '100px', textAlign: 'left' }"
    :content-style="{ textAlign: 'right' }"
    :column="3"
  >
    <t-descriptions-item label="Name">TDesign</t-descriptions-item>
    <t-descriptions-item label="Telephone Number">139****0609</t-descriptions-item>
    <t-descriptions-item label="Area">China Tencent Headquarters</t-descriptions-item>
    <t-descriptions-item label="Address">Shenzhen Penguin Island D1 4A Mail Center</t-descriptions-item>
  </t-descriptions>
</template>
`,P=`<template>
  <t-descriptions
    title="Shipping address"
    bordered
    :label-style="{ width: '100px', textAlign: 'left' }"
    :content-style="{ textAlign: 'right' }"
    :column="3"
  >
    <t-descriptions-item label="Name">TDesign</t-descriptions-item>
    <t-descriptions-item label="Telephone Number">139****0609</t-descriptions-item>
    <t-descriptions-item label="Area">China Tencent Headquarters</t-descriptions-item>
    <t-descriptions-item label="Address">Shenzhen Penguin Island D1 4A Mail Center</t-descriptions-item>
  </t-descriptions>
</template>
`,h=[{name:"bordered",type:"Boolean",defaultValue:!1,options:[]},{name:"colon",type:"Boolean",defaultValue:!1,options:[]},{name:"size",type:"enum",defaultValue:"medium",options:[{label:"large",value:"large"},{label:"medium",value:"medium"},{label:"small",value:"small"}]},{name:"layout",type:"enum",defaultValue:"horizontal",options:[{label:"horizontal",value:"horizontal"},{label:"vertical",value:"vertical"}]},{name:"itemLayout",type:"enum",defaultValue:"horizontal",options:[{label:"horizontal",value:"horizontal"},{label:"vertical",value:"vertical"}]}];const l={};l.setup=(e,n)=>{const t=a(h),i=[{label:"descriptions",value:"descriptions"}],s={descriptions:`
        <t-descriptions title="Shipping address" v-bind="configProps">
          <t-descriptions-item label="Name">TDesign</t-descriptions-item>
          <t-descriptions-item label="Telephone Number">139****0609</t-descriptions-item>
          <t-descriptions-item label="Area">China Tencent Headquarters</t-descriptions-item>
          <t-descriptions-item label="Address">Shenzhen Penguin Island D1 4A Mail Center</t-descriptions-item>
        </t-descriptions>
      `},o=a(`<template>${s[i[0].value].trim()}</template>`);function c(m){o.value=`<template>${s[m].trim()}</template>`}return{configList:t,panelList:i,usageCode:o,onPanelChange:c}};var p=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("base-usage",{attrs:{code:e.usageCode,"config-list":e.configList,"panel-list":e.panelList},on:{PanelChange:e.onPanelChange},scopedSlots:e._u([{key:"descriptions",fn:function(i){var s=i.configProps;return[t("t-descriptions",e._b({attrs:{title:"Shipping address"}},"t-descriptions",s,!1),[t("t-descriptions-item",{attrs:{label:"Name"}},[e._v("TDesign")]),t("t-descriptions-item",{attrs:{label:"Telephone Number"}},[e._v("139****0609")]),t("t-descriptions-item",{attrs:{label:"Area"}},[e._v("China Tencent Headquarters")]),t("t-descriptions-item",{attrs:{label:"Address"}},[e._v("Shenzhen Penguin Island D1 4A Mail Center")])],1)]}}])})},b=[];p._withStripped=!0;const r={};var d=u(l,p,b,!1,g,null,null,null);function g(e){for(let n in r)this[n]=r[n]}d.options.__file="../src/descriptions/_usage/index.vue";var L=function(){return d.exports}();export{C as D,L as U,f as a,A as b,y as c,T as d,D as e,_ as f,x as g,z as h,S as i,N as j,P as k};
