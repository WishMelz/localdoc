import{Y as r,n as v}from"./index.663c003f.js";var _=`<template>
  <t-rate :default-value="value" />
</template>
<script>
export default {
  data() {
    return {
      value: 3,
    };
  },
};
<\/script>
`,g=`<template>
  <t-rate :default-value="value" />
</template>
<script setup>
import { ref } from 'vue';

const value = ref(3);
<\/script>
`,C=`<template>
  <t-rate v-model="value" :count="7" />
</template>
<script>
export default {
  data() {
    return {
      value: 3,
    };
  },
};
<\/script>
`,b=`<template>
  <t-rate v-model="value" :count="7" />
</template>
<script setup>
import { ref } from 'vue';

const value = ref(3);
<\/script>
`,D=`<template>
  <t-rate show-text v-model="value" />
</template>
<script>
export default {
  data() {
    return {
      value: 4,
    };
  },
};
<\/script>
`,w=`<template>
  <t-rate show-text v-model="value" />
</template>
<script setup>
import { ref } from 'vue';

const value = ref(4);
<\/script>
`,I=`<template>
  <t-space direction="vertical">
    <h3>\u672A\u8BC4\u5206\u72B6\u6001</h3>
    <t-rate />
    <h3>\u6EE1\u5206\u72B6\u6001</h3>
    <t-rate v-model="value1" />
    <h3>\u534A\u661F\u72B6\u6001</h3>
    <t-rate v-model="value2" allow-half />
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      value1: 5,
      value2: 4.5,
    };
  },
};
<\/script>
`,L=`<template>
  <t-space direction="vertical">
    <h3>\u672A\u8BC4\u5206\u72B6\u6001</h3>
    <t-rate />
    <h3>\u6EE1\u5206\u72B6\u6001</h3>
    <t-rate v-model="value1" />
    <h3>\u534A\u661F\u72B6\u6001</h3>
    <t-rate v-model="value2" allow-half />
  </t-space>
</template>
<script setup>
import { ref } from 'vue';

const value1 = ref(5);
const value2 = ref(4.5);
<\/script>
`,P=`<template>
  <t-space direction="vertical">
    <h3>16px</h3>
    <t-rate v-model="value" size="16px" />
    <h3>24px</h3>
    <t-rate v-model="value" />
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      value: 5,
    };
  },
};
<\/script>
`,S=`<template>
  <t-space direction="vertical">
    <h3>16px</h3>
    <t-rate v-model="value" size="16px" />
    <h3>24px</h3>
    <t-rate v-model="value" />
  </t-space>
</template>
<script setup>
import { ref } from 'vue';

const value = ref(5);
<\/script>
`,y=`<template>
  <t-space direction="vertical">
    <t-rate v-model="value1">
      <template #icon>
        <star-icon />
      </template>
    </t-rate>
    <t-rate v-model="value2">
      <template #icon>
        <logo-github-icon />
      </template>
    </t-rate>
    <t-rate v-model="value3" allow-half color="var(--td-error-color-7)">
      <template #icon>
        <heart-filled-icon />
      </template>
    </t-rate>
  </t-space>
</template>
<script>
import { StarIcon, LogoGithubIcon, HeartFilledIcon } from 'tdesign-icons-vue';

export default {
  components: {
    StarIcon,
    LogoGithubIcon,
    HeartFilledIcon,
  },
  data() {
    return {
      value1: 1,
      value2: 2,
      value3: 2.5,
    };
  },
};
<\/script>
`,z=`<template>
  <t-space direction="vertical">
    <t-rate v-model="value1">
      <template #icon>
        <star-icon />
      </template>
    </t-rate>
    <t-rate v-model="value2">
      <template #icon>
        <logo-github-icon />
      </template>
    </t-rate>
    <t-rate v-model="value3" allow-half color="var(--td-error-color-7)">
      <template #icon>
        <heart-filled-icon />
      </template>
    </t-rate>
  </t-space>
</template>
<script setup>
import { ref } from 'vue';
import { StarIcon, LogoGithubIcon, HeartFilledIcon } from 'tdesign-icons-vue';

const value1 = ref(1);
const value2 = ref(2);
const value3 = ref(2.5);
<\/script>
`,d=[{name:"allowHalf",type:"Boolean",defaultValue:!1,options:[]},{name:"disabled",type:"Boolean",defaultValue:!1,options:[]},{name:"showText",type:"Boolean",defaultValue:!1,options:[]}];const s={};s.setup=(e,t)=>{const n=r(d),a=[{label:"rate",value:"rate"}],o={rate:`
        <t-rate
          v-bind="configProps"
        ></t-rate>
      `},l=r(`<template>${o[a[0].value].trim()}</template>`);function m(u){l.value=`<template>${o[u].trim()}</template>`}return{configList:n,panelList:a,usageCode:l,onPanelChange:m}};var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("base-usage",{attrs:{code:e.usageCode,"config-list":e.configList,"panel-list":e.panelList},on:{PanelChange:e.onPanelChange},scopedSlots:e._u([{key:"rate",fn:function(a){var o=a.configProps;return[n("t-rate",e._b({},"t-rate",o,!1))]}}])})},f=[];i._withStripped=!0;const p={};var c=v(s,i,f,!1,h,null,null,null);function h(e){for(let t in p)this[t]=p[t]}c.options.__file="../src/rate/_usage/index.vue";var F=function(){return c.exports}();export{_ as D,F as U,g as a,C as b,b as c,D as d,w as e,I as f,L as g,P as h,S as i,y as j,z as k};
