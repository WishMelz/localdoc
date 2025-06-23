import{Y as r,n as d}from"./index.663c003f.js";var v=`<template>
  <t-space>
    <t-link theme="primary">\u8DF3\u8F6C\u94FE\u63A5</t-link>
  </t-space>
</template>
`,x=`<template>
  <t-space>
    <t-link theme="primary">\u8DF3\u8F6C\u94FE\u63A5</t-link>
  </t-space>
</template>
`,b=`<template>
  <t-space>
    <t-link theme="default" underline> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
    <t-link theme="primary" underline> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
    <t-link theme="danger" underline> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
    <t-link theme="warning" underline> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
    <t-link theme="success" underline> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
  </t-space>
</template>
`,z=`<template>
  <t-space>
    <t-link theme="default" underline> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
    <t-link theme="primary" underline> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
    <t-link theme="danger" underline> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
    <t-link theme="warning" underline> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
    <t-link theme="success" underline> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
  </t-space>
</template>
`,C=`<template>
  <t-space>
    <t-link theme="default" :prefix-icon="renderPrefixIcon" :onClick="clickLink"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
    <t-link theme="primary" underline href="https://tdesign.tencent.com/" target="_self">
      <link-icon slot="prefix-icon"></link-icon>
      \u8DF3\u8F6C\u94FE\u63A5
    </t-link>
    <t-link theme="danger" hover="color" href="https://tdesign.tencent.com/" target="_blank" @click="clickLink">
      <jump-icon slot="suffixIcon" />
      \u8DF3\u8F6C\u94FE\u63A5
    </t-link>
    <t-link theme="warning" :suffixIcon="renderSuffixIcon" disabled> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
  </t-space>
</template>

<script lang="jsx">
import { LinkIcon, JumpIcon } from 'tdesign-icons-vue';

export default {
  components: {
    LinkIcon,
    JumpIcon,
  },
  data() {
    return {
      renderPrefixIcon: () => <LinkIcon />,
      renderSuffixIcon: () => <JumpIcon />,
    };
  },
  methods: {
    clickLink(e) {
      console.log('\u89E6\u53D1', e);
    },
  },
};
<\/script>
`,_=`<template>
  <t-space>
    <t-link theme="default" :prefix-icon="renderPrefixIcon" :onClick="clickLink"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
    <t-link theme="primary" underline href="https://tdesign.tencent.com/" target="_self">
      <link-icon slot="prefix-icon"></link-icon>
      \u8DF3\u8F6C\u94FE\u63A5
    </t-link>
    <t-link theme="danger" hover="color" href="https://tdesign.tencent.com/" target="_blank" @click="clickLink">
      <jump-icon slot="suffixIcon" />
      \u8DF3\u8F6C\u94FE\u63A5
    </t-link>
    <t-link theme="warning" :suffixIcon="renderSuffixIcon" disabled> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
  </t-space>
</template>

<script setup lang="jsx">
import { ref } from 'vue';
import { LinkIcon, JumpIcon } from 'tdesign-icons-vue';

const renderPrefixIcon = ref(() => <LinkIcon />);
const renderSuffixIcon = ref(() => <JumpIcon />);
const clickLink = (e) => {
  console.log('\u89E6\u53D1', e);
};
<\/script>
`,y=`<template>
  <t-space direction="vertical">
    <t-space>
      <t-link theme="default" hover="underline"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
      <t-link theme="primary" hover="underline"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
      <t-link theme="danger" hover="underline"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
      <t-link theme="warning" hover="underline"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
      <t-link theme="success" hover="underline"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
    </t-space>
    <t-space>
      <t-link theme="default" hover="color"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
      <t-link theme="primary" hover="color"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
      <t-link theme="danger" hover="color"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
      <t-link theme="warning" hover="color"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
      <t-link theme="success" hover="color"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
    </t-space>
    <t-space>
      <t-link theme="default" hover="color" underline> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
      <t-link theme="primary" hover="color" underline> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
      <t-link theme="danger" hover="color" underline> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
      <t-link theme="warning" hover="color" underline> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
      <t-link theme="success" hover="color" underline> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
    </t-space>
  </t-space>
</template>
`,I=`<template>
  <t-space direction="vertical">
    <t-space>
      <t-link theme="default" hover="underline"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
      <t-link theme="primary" hover="underline"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
      <t-link theme="danger" hover="underline"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
      <t-link theme="warning" hover="underline"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
      <t-link theme="success" hover="underline"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
    </t-space>
    <t-space>
      <t-link theme="default" hover="color"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
      <t-link theme="primary" hover="color"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
      <t-link theme="danger" hover="color"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
      <t-link theme="warning" hover="color"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
      <t-link theme="success" hover="color"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
    </t-space>
    <t-space>
      <t-link theme="default" hover="color" underline> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
      <t-link theme="primary" hover="color" underline> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
      <t-link theme="danger" hover="color" underline> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
      <t-link theme="warning" hover="color" underline> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
      <t-link theme="success" hover="color" underline> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
    </t-space>
  </t-space>
</template>
`,L=`<template>
  <t-space>
    <t-link theme="default"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
    <t-link theme="primary"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
    <t-link theme="danger"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
    <t-link theme="warning"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
    <t-link theme="success"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
  </t-space>
</template>
`,w=`<template>
  <t-space>
    <t-link theme="default"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
    <t-link theme="primary"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
    <t-link theme="danger"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
    <t-link theme="warning"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
    <t-link theme="success"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
  </t-space>
</template>
`,j=`<template>
  <t-space>
    <t-link theme="default" disabled @click="clickLink"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
    <t-link theme="primary" underline disabled @click="clickLink"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
    <t-link theme="danger" hover="color" disabled @click="clickLink"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
    <t-link theme="warning" hover="underline" disabled :onClick="clickLink"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
    <t-link theme="success" disabled @click="clickLink">
      <jump-icon slot="suffixIcon" />
      \u8DF3\u8F6C\u94FE\u63A5
    </t-link>
  </t-space>
</template>

<script lang="jsx">
import { JumpIcon } from 'tdesign-icons-vue';

export default {
  components: {
    JumpIcon,
  },
  methods: {
    clickLink() {
      console.log('\u4E0D\u89E6\u53D1');
    },
  },
};
<\/script>
`,D=`<template>
  <t-space>
    <t-link theme="default" disabled @click="clickLink"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
    <t-link theme="primary" underline disabled @click="clickLink"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
    <t-link theme="danger" hover="color" disabled @click="clickLink"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
    <t-link theme="warning" hover="underline" disabled :onClick="clickLink"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
    <t-link theme="success" disabled @click="clickLink">
      <jump-icon slot="suffixIcon" />
      \u8DF3\u8F6C\u94FE\u63A5
    </t-link>
  </t-space>
</template>

<script setup lang="jsx">
import { JumpIcon } from 'tdesign-icons-vue';

const clickLink = () => {
  console.log('\u4E0D\u89E6\u53D1');
};
<\/script>
`,J=`<template>
  <t-space direction="vertical">
    <t-space>
      <t-link theme="default" size="small"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
      <t-link theme="primary" size="small"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
      <t-link theme="danger" size="small"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
      <t-link theme="warning" size="small" disabled>\u8DF3\u8F6C\u94FE\u63A5</t-link>
      <t-link theme="success" size="small">
        <jump-icon slot="suffix-icon" />
        \u8DF3\u8F6C\u94FE\u63A5
      </t-link>
    </t-space>
    <t-space>
      <t-link theme="default" size="medium"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
      <t-link theme="primary" size="medium"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
      <t-link theme="danger" size="medium"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
      <t-link theme="warning" size="medium" disabled>\u8DF3\u8F6C\u94FE\u63A5</t-link>
      <t-link theme="success" size="medium">
        <jump-icon slot="suffix-icon" />
        \u8DF3\u8F6C\u94FE\u63A5
      </t-link>
    </t-space>
    <t-space>
      <t-link theme="default" size="large"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
      <t-link theme="primary" size="large"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
      <t-link theme="danger" size="large"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
      <t-link theme="warning" size="large" disabled>\u8DF3\u8F6C\u94FE\u63A5</t-link>
      <t-link theme="success" size="large">
        <jump-icon slot="suffix-icon" />
        \u8DF3\u8F6C\u94FE\u63A5
      </t-link>
    </t-space>
  </t-space>
</template>

<script lang="jsx">
import { JumpIcon } from 'tdesign-icons-vue';

export default {
  components: {
    JumpIcon,
  },
};
<\/script>
`,P=`<template>
  <t-space direction="vertical">
    <t-space>
      <t-link theme="default" size="small"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
      <t-link theme="primary" size="small"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
      <t-link theme="danger" size="small"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
      <t-link theme="warning" size="small" disabled>\u8DF3\u8F6C\u94FE\u63A5</t-link>
      <t-link theme="success" size="small">
        <jump-icon slot="suffix-icon" />
        \u8DF3\u8F6C\u94FE\u63A5
      </t-link>
    </t-space>
    <t-space>
      <t-link theme="default" size="medium"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
      <t-link theme="primary" size="medium"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
      <t-link theme="danger" size="medium"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
      <t-link theme="warning" size="medium" disabled>\u8DF3\u8F6C\u94FE\u63A5</t-link>
      <t-link theme="success" size="medium">
        <jump-icon slot="suffix-icon" />
        \u8DF3\u8F6C\u94FE\u63A5
      </t-link>
    </t-space>
    <t-space>
      <t-link theme="default" size="large"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
      <t-link theme="primary" size="large"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
      <t-link theme="danger" size="large"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
      <t-link theme="warning" size="large" disabled>\u8DF3\u8F6C\u94FE\u63A5</t-link>
      <t-link theme="success" size="large">
        <jump-icon slot="suffix-icon" />
        \u8DF3\u8F6C\u94FE\u63A5
      </t-link>
    </t-space>
  </t-space>
</template>

<script setup lang="jsx">
import { JumpIcon } from 'tdesign-icons-vue';
<\/script>
`,u=[{name:"disabled",type:"Boolean",defaultValue:!1,options:[]},{name:"underline",type:"Boolean",defaultValue:!1,options:[]},{name:"theme",type:"enum",defaultValue:"default",options:[{label:"default",value:"default"},{label:"primary",value:"primary"},{label:"danger",value:"danger"},{label:"warning",value:"warning"},{label:"success",value:"success"}]},{name:"hover",type:"enum",defaultValue:"underline",options:[{label:"underline",value:"underline"},{label:"color",value:"color"}]},{name:"size",type:"enum",defaultValue:"medium",options:[{label:"small",value:"small"},{label:"medium",value:"medium"},{label:"large",value:"large"}]}];const o={};o.setup=(n,e)=>{const t=r(u),i=[{label:"link",value:"link"}],l={link:'<t-link v-bind="configProps">\u8DF3\u8F6C\u94FE\u63A5</t-link>'},a=r(`<template>${l[i[0].value].trim()}</template>`);function k(p){a.value=`<template>${l[p].trim()}</template>`}return{configList:t,panelList:i,usageCode:a,onPanelChange:k}};var c=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("base-usage",{attrs:{code:n.usageCode,"config-list":n.configList,"panel-list":n.panelList},on:{PanelChange:n.onPanelChange},scopedSlots:n._u([{key:"link",fn:function(i){var l=i.configProps;return[t("t-link",n._b({},"t-link",l,!1),[n._v("\u8DF3\u8F6C\u94FE\u63A5")])]}}])})},h=[];c._withStripped=!0;const s={};var m=d(o,c,h,!1,f,null,null,null);function f(n){for(let e in s)this[e]=s[e]}m.options.__file="../src/link/_usage/index.vue";var S=function(){return m.exports}();export{v as D,S as U,x as a,b,z as c,C as d,_ as e,y as f,I as g,L as h,w as i,j,D as k,J as l,P as m};
