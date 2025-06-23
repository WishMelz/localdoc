import{Y as s,n as d}from"./index.663c003f.js";var g=`<template>
  <t-space direction="vertical" size="60px">
    <t-slider v-model="value1" @change-end="handleChangeEnd" />
    <t-slider :value="value2" range :tooltipProps="tooltipProps" :label="renderLabel" @change="handleChange" />
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      value1: 12,
      value2: [30, 70],
      tooltipProps: {},
    };
  },
  methods: {
    renderLabel(h, { value, position }) {
      console.log(\`the position is \${position}\`);
      return \`\${value}\`;
    },
    handleChangeEnd(endValue) {
      console.log('the change end value is:', endValue);
    },
    handleChange(v) {
      if (v[1] <= 80) {
        this.value2 = v;
      }
    },
  },
};
<\/script>
`,f=`<template>
  <t-space direction="vertical" size="60px">
    <t-slider v-model="value1" @change-end="handleChangeEnd" />
    <t-slider :value="value2" range :tooltipProps="tooltipProps" :label="renderLabel" @change="handleChange" />
  </t-space>
</template>
<script setup>
import { ref, reactive } from 'vue';

const value1 = ref(12);
const value2 = ref([30, 70]);
const tooltipProps = reactive({});
const renderLabel = (h, { value, position }) => {
  console.log(\`the position is \${position}\`);
  return \`\${value}\`;
};
const handleChangeEnd = (endValue) => {
  console.log('the change end value is:', endValue);
};
const handleChange = (v) => {
  if (v[1] <= 80) {
    value2.value = v;
  }
};
<\/script>
`,y=`<template>
  <t-space :style="{ height: '300px' }" size="60px">
    <t-slider v-model="value1" :layout="layout" :show-tooltip="true" />
    <t-slider v-model="value2" :layout="layout" range :show-tooltip="true" />
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      value1: 12,
      value2: [30, 70],
      layout: 'vertical',
    };
  },
};
<\/script>
<style scoped>
.vertical-block {
  display: inline-block;
  padding: 30px 24px;
  height: 300px;
}
</style>
`,b=`<template>
  <t-space :style="{ height: '300px' }" size="60px">
    <t-slider v-model="value1" :layout="layout" :show-tooltip="true" />
    <t-slider v-model="value2" :layout="layout" range :show-tooltip="true" />
  </t-space>
</template>
<script setup>
import { ref } from 'vue';

const value1 = ref(12);
const value2 = ref([30, 70]);
const layout = ref('vertical');
<\/script>
<style scoped>
.vertical-block {
  display: inline-block;
  padding: 30px 24px;
  height: 300px;
}
</style>
`,k=`<template>
  <t-space direction="vertical" size="60px">
    <t-slider v-model="value1" disabled :show-tooltip="true" />
    <t-slider v-model="value2" disabled range :show-tooltip="true" />
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      value1: 12,
      value2: [30, 70],
    };
  },
};
<\/script>
<style>
.block {
  padding: 30px 24px;
}
</style>
`,w=`<template>
  <t-space direction="vertical" size="60px">
    <t-slider v-model="value1" disabled :show-tooltip="true" />
    <t-slider v-model="value2" disabled range :show-tooltip="true" />
  </t-space>
</template>
<script setup>
import { ref } from 'vue';

const value1 = ref(12);
const value2 = ref([30, 70]);
<\/script>
<style>
.block {
  padding: 30px 24px;
}
</style>
`,P=`<template>
  <t-space direction="vertical" size="60px">
    <t-slider v-model="value1" :show-tooltip="true" :marks="marks1" />
    <t-slider v-model="value2" range :show-tooltip="true" :marks="marks2" />
  </t-space>
</template>
<script lang="jsx">
export default {
  data() {
    return {
      value1: 12,
      value2: [30, 70],
      marks1: {
        0: '0\xB0C',
        20: '20\xB0C',
        40: '40\xB0C',
        60: '60\xB0C',
        80: <span style="color: #0052d9">80\xB0C</span>,
        100: <span style="color: #0052d9">100\xB0C</span>,
      },
      marks2: {
        0: '0\xB0C',
        20: '20\xB0C',
        40: '40\xB0C',
        60: '60\xB0C',
        80: <span style="color: #0052d9">80\xB0C</span>,
        100: '100\xB0C',
      },
    };
  },
};
<\/script>
<style>
.block {
  padding: 30px 24px;
}
</style>
`,_=`<template>
  <t-space direction="vertical" size="60px">
    <t-slider v-model="value1" :show-tooltip="true" :marks="marks1" />
    <t-slider v-model="value2" range :show-tooltip="true" :marks="marks2" />
  </t-space>
</template>
<script setup lang="jsx">
import { ref, reactive } from 'vue';

const value1 = ref(12);
const value2 = ref([30, 70]);
const marks1 = reactive({
  0: '0\xB0C',
  20: '20\xB0C',
  40: '40\xB0C',
  60: '60\xB0C',
  80: <span style="color: #0052d9">80\xB0C</span>,
  100: <span style="color: #0052d9">100\xB0C</span>,
});
const marks2 = reactive({
  0: '0\xB0C',
  20: '20\xB0C',
  40: '40\xB0C',
  60: '60\xB0C',
  80: <span style="color: #0052d9">80\xB0C</span>,
  100: '100\xB0C',
});
<\/script>
<style>
.block {
  padding: 30px 24px;
}
</style>
`,z=`<template>
  <t-space :style="{ height: '300px' }" size="60px">
    <t-slider v-model="value1" @change="change" :layout="layout" vertical :show-tooltip="true" :marks="marks1" />
    <t-slider v-model="value2" :layout="layout" vertical range :show-tooltip="true" :marks="marks2" />
  </t-space>
</template>
<script lang="jsx">
export default {
  data() {
    return {
      value1: 12,
      value2: [30, 70],
      layout: 'vertical',
      marks1: {
        0: '0\xB0C',
        20: '20\xB0C',
        40: '40\xB0C',
        60: '60\xB0C',
        80: <span style="color: #0052d9">80\xB0C</span>,
        100: <span style="color: #0052d9">100\xB0C</span>,
      },
      marks2: {
        0: '0\xB0C',
        20: '20\xB0C',
        40: '40\xB0C',
        60: '60\xB0C',
        80: <span style="color: #0052d9">80\xB0C</span>,
        100: <span style="color: #0052d9">100\xB0C</span>,
      },
    };
  },
  methods: {
    change(value) {
      console.log('change value', value);
    },
  },
};
<\/script>
`,N=`<template>
  <t-space :style="{ height: '300px' }" size="60px">
    <t-slider v-model="value1" @change="change" :layout="layout" vertical :show-tooltip="true" :marks="marks1" />
    <t-slider v-model="value2" :layout="layout" vertical range :show-tooltip="true" :marks="marks2" />
  </t-space>
</template>
<script setup lang="jsx">
import { ref, reactive } from 'vue';

const value1 = ref(12);
const value2 = ref([30, 70]);
const layout = ref('vertical');
const marks1 = reactive({
  0: '0\xB0C',
  20: '20\xB0C',
  40: '40\xB0C',
  60: '60\xB0C',
  80: <span style="color: #0052d9">80\xB0C</span>,
  100: <span style="color: #0052d9">100\xB0C</span>,
});
const marks2 = reactive({
  0: '0\xB0C',
  20: '20\xB0C',
  40: '40\xB0C',
  60: '60\xB0C',
  80: <span style="color: #0052d9">80\xB0C</span>,
  100: <span style="color: #0052d9">100\xB0C</span>,
});
const change = (value) => {
  console.log('change value', value);
};
<\/script>
`,D=`<template>
  <t-space direction="vertical" size="60px">
    <t-slider v-model="value1" :show-tooltip="true" :inputNumberProps="inputNumberProps" :step="0.1" />
    <t-slider v-model="value2" range :show-tooltip="true" :inputNumberProps="inputNumberProps" />
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      value1: 12,
      value2: [30, 70],
      inputNumberProps: { theme: 'column', autoWidth: true },
    };
  },
};
<\/script>
`,V=`<template>
  <t-space direction="vertical" size="60px">
    <t-slider v-model="value1" :show-tooltip="true" :inputNumberProps="inputNumberProps" :step="0.1" />
    <t-slider v-model="value2" range :show-tooltip="true" :inputNumberProps="inputNumberProps" />
  </t-space>
</template>
<script setup>
import { ref, reactive } from 'vue';

const value1 = ref(12);
const value2 = ref([30, 70]);
const inputNumberProps = reactive({
  theme: 'column',
  autoWidth: true,
});
<\/script>
`,L=`<template>
  <t-space :style="{ height: '300px' }" size="60px">
    <t-slider v-model="value1" :layout="layout" :show-tooltip="true" :inputNumberProps="inputNumberProps" />
    <t-slider v-model="value2" :layout="layout" range :show-tooltip="true" :inputNumberProps="inputNumberProps" />
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      value1: 12,
      value2: [30, 70],
      inputNumberProps: { theme: 'column' },
      layout: 'vertical',
    };
  },
};
<\/script>
`,$=`<template>
  <t-space :style="{ height: '300px' }" size="60px">
    <t-slider v-model="value1" :layout="layout" :show-tooltip="true" :inputNumberProps="inputNumberProps" />
    <t-slider v-model="value2" :layout="layout" range :show-tooltip="true" :inputNumberProps="inputNumberProps" />
  </t-space>
</template>
<script setup>
import { ref, reactive } from 'vue';

const value1 = ref(12);
const value2 = ref([30, 70]);
const inputNumberProps = reactive({
  theme: 'column',
});
const layout = ref('vertical');
<\/script>
`,j=`<template>
  <t-space direction="vertical" size="60px">
    <t-slider v-model="value1" :show-tooltip="true" :step="step" />
    <t-slider v-model="value2" range :show-tooltip="true" :step="step" />
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      value1: 12,
      value2: [28, 80],
      step: 4,
    };
  },
};
<\/script>
<style>
.block {
  padding: 30px 24px;
}
</style>
`,E=`<template>
  <t-space direction="vertical" size="60px">
    <t-slider v-model="value1" :show-tooltip="true" :step="step" />
    <t-slider v-model="value2" range :show-tooltip="true" :step="step" />
  </t-space>
</template>
<script setup>
import { ref } from 'vue';

const value1 = ref(12);
const value2 = ref([28, 80]);
const step = ref(4);
<\/script>
<style>
.block {
  padding: 30px 24px;
}
</style>
`,B=`<template>
  <t-space direction="vertical" size="60px">
    <t-slider v-model="value1" :show-tooltip="true" :max="max" :min="min" :marks="marks" />

    <t-slider v-model="value2" range :show-tooltip="true" :max="max" :min="min" :marks="marks" />
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      value1: 12,
      value2: [12, 20],
      min: 10,
      max: 30,
      marks: {
        10: 'min:10',
        30: 'max:30',
      },
    };
  },
};
<\/script>
`,S=`<template>
  <t-space direction="vertical" size="60px">
    <t-slider v-model="value1" :show-tooltip="true" :max="max" :min="min" :marks="marks" />

    <t-slider v-model="value2" range :show-tooltip="true" :max="max" :min="min" :marks="marks" />
  </t-space>
</template>
<script setup>
import { ref, reactive } from 'vue';

const value1 = ref(12);
const value2 = ref([12, 20]);
const min = ref(10);
const max = ref(30);
const marks = reactive({
  10: 'min:10',
  30: 'max:30',
});
<\/script>
`,v=[{name:"disabled",type:"Boolean",defaultValue:!1,options:[]},{name:"inputNumberProps",type:"Boolean",defaultValue:!1,options:[]},{name:"label",type:"Boolean",defaultValue:!0,options:[]},{name:"layout",type:"enum",defaultValue:"horizontal",options:[{label:"vertical",value:"vertical"},{label:"horizontal",value:"horizontal"}]},{name:"range",type:"Boolean",defaultValue:!1,options:[]}];const p={};p.setup=(e,n)=>{const t=s(v),a=[{label:"slider",value:"slider"}],l={slider:'<t-slider v-bind="configProps" />'},o=s(`<template>${l[a[0].value].trim()}</template>`);function m(c){o.value=`<template>${l[c].trim()}</template>`}return{configList:t,panelList:a,usageCode:o,onPanelChange:m}};var i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("base-usage",{attrs:{code:e.usageCode,"config-list":e.configList,"panel-list":e.panelList},on:{PanelChange:e.onPanelChange},scopedSlots:e._u([{key:"slider",fn:function(a){var l=a.configProps;return[t("t-slider",e._b({},"t-slider",l,!1))]}}])})},h=[];i._withStripped=!0;const r={};var u=d(p,i,h,!1,x,null,null,null);function x(e){for(let n in r)this[n]=r[n]}u.options.__file="../src/slider/_usage/index.vue";var M=function(){return u.exports}();export{g as D,M as U,f as a,y as b,b as c,k as d,w as e,P as f,_ as g,z as h,N as i,D as j,V as k,L as l,$ as m,j as n,E as o,B as p,S as q};
