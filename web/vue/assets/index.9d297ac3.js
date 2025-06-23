import{Y as l,n as m}from"./index.663c003f.js";var C=`<template>
  <t-space>
    <t-switch size="large"></t-switch>
    <t-switch size="large" v-model="checked" @change="onChange"></t-switch>
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      checked: true,
    };
  },
  methods: {
    onChange(val) {
      console.log(val);
    },
  },
};
<\/script>
`,k=`<template>
  <t-space>
    <t-switch size="large"></t-switch>
    <t-switch size="large" v-model="checked" @change="onChange"></t-switch>
  </t-space>
</template>

<script setup>
import { ref } from 'vue';

const checked = ref(true);
const onChange = (val) => {
  console.log(val);
};
<\/script>
`,f=`<template>
  <t-space direction="vertical">
    <div class="tdesign-demo-block-row">
      <t-switch size="large" v-model="slotChecked">
        <template v-slot:label="slotProps">{{ slotProps.value ? '\u5F00' : '\u5173' }}</template>
      </t-switch>
      <t-switch size="large">
        <template v-slot:label="slotProps">
          <template v-if="slotProps.value">
            <check-icon />
          </template>
          <template v-else>
            <close-icon />
          </template>
        </template>
      </t-switch>
    </div>

    <div class="tdesign-demo-block-row">
      <t-switch size="large" v-model="checked" :label="['\u5F00', '\u5173']"></t-switch>
      <t-switch size="large" :label="['\u5F00', '\u5173']"></t-switch>
    </div>

    <div class="tdesign-demo-block-row">
      <t-switch size="large" v-model="renderChecked" :label="[renderActiveContent, renderInactiveContent]"></t-switch>
      <t-switch size="large" :label="[renderActiveContent, renderInactiveContent]"></t-switch>
    </div>

    <div class="tdesign-demo-block-row">
      <t-switch size="large" v-model="renderChecked2" :label="renderContent"></t-switch>
      <t-switch size="large" :label="renderContent"></t-switch>
    </div>
  </t-space>
</template>
<script lang="jsx">
import { CloseIcon, CheckIcon } from 'tdesign-icons-vue';

export default {
  components: { CloseIcon, CheckIcon },
  data() {
    return {
      checked: true,
      renderChecked: true,
      renderChecked2: true,
      slotChecked: true,
    };
  },
  methods: {
    renderActiveContent() {
      return <CheckIcon />;
    },
    renderInactiveContent() {
      return <CloseIcon />;
    },
    renderContent(h, data) {
      return data.value ? <CheckIcon /> : <CloseIcon />;
    },
  },
};
<\/script>
`,b=`<template>
  <t-space direction="vertical">
    <div class="tdesign-demo-block-row">
      <t-switch size="large" v-model="slotChecked">
        <template v-slot:label="slotProps">{{ slotProps.value ? '\u5F00' : '\u5173' }}</template>
      </t-switch>
      <t-switch size="large">
        <template v-slot:label="slotProps">
          <template v-if="slotProps.value">
            <check-icon />
          </template>
          <template v-else>
            <close-icon />
          </template>
        </template>
      </t-switch>
    </div>

    <div class="tdesign-demo-block-row">
      <t-switch size="large" v-model="checked" :label="['\u5F00', '\u5173']"></t-switch>
      <t-switch size="large" :label="['\u5F00', '\u5173']"></t-switch>
    </div>

    <div class="tdesign-demo-block-row">
      <t-switch size="large" v-model="renderChecked" :label="[renderActiveContent, renderInactiveContent]"></t-switch>
      <t-switch size="large" :label="[renderActiveContent, renderInactiveContent]"></t-switch>
    </div>

    <div class="tdesign-demo-block-row">
      <t-switch size="large" v-model="renderChecked2" :label="renderContent"></t-switch>
      <t-switch size="large" :label="renderContent"></t-switch>
    </div>
  </t-space>
</template>
<script setup lang="jsx">
import { ref } from 'vue';
import { CloseIcon, CheckIcon } from 'tdesign-icons-vue';

const checked = ref(true);
const renderChecked = ref(true);
const renderChecked2 = ref(true);
const slotChecked = ref(true);
const renderActiveContent = () => <CheckIcon />;
const renderInactiveContent = () => <CloseIcon />;
const renderContent = (h, data) => (data.value ? <CheckIcon /> : <CloseIcon />);
<\/script>
`,z=`<template>
  <t-space break-line>
    <t-switch size="large" v-model="checked1"></t-switch>
    <t-switch size="large" loading v-model="checked2"></t-switch>
    <t-switch size="large" disabled></t-switch>
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      checked1: true,
      checked2: true,
    };
  },
};
<\/script>
`,_=`<template>
  <t-space break-line>
    <t-switch size="large" v-model="checked1"></t-switch>
    <t-switch size="large" loading v-model="checked2"></t-switch>
    <t-switch size="large" disabled></t-switch>
  </t-space>
</template>

<script setup>
import { ref } from 'vue';

const checked1 = ref(true);
const checked2 = ref(true);
<\/script>
`,I=`<template>
  <t-space break-line>
    <t-switch size="large" v-model="checked"></t-switch>
    <t-switch size="medium"></t-switch>
    <t-switch size="small"></t-switch>
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      checked: true,
    };
  },
};
<\/script>
`,x=`<template>
  <t-space break-line>
    <t-switch size="large" v-model="checked"></t-switch>
    <t-switch size="medium"></t-switch>
    <t-switch size="small"></t-switch>
  </t-space>
</template>

<script setup>
import { ref } from 'vue';

const checked = ref(true);
<\/script>
`,v=[{name:"disabled",type:"Boolean",defaultValue:!1,options:[]},{name:"loading",type:"Boolean",defaultValue:!1,options:[]},{name:"size",type:"enum",defaultValue:"medium",options:[{label:"small",value:"small"},{label:"medium",value:"medium"},{label:"large",value:"large"}]},{name:"value",type:"Boolean",defaultValue:!1,options:[]}];const i={};i.setup=(e,t)=>{const n=l(v),s=[{label:"switch",value:"switch"}],c={switch:'<t-switch v-bind="configProps" />'},a=l(`<template>${c[s[0].value].trim()}</template>`);function h(p){a.value=`<template>${c[p].trim()}</template>`}return{configList:n,panelList:s,usageCode:a,onPanelChange:h}};var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("base-usage",{attrs:{code:e.usageCode,"config-list":e.configList,"panel-list":e.panelList},on:{PanelChange:e.onPanelChange},scopedSlots:e._u([{key:"switch",fn:function(s){var c=s.configProps;return[n("t-switch",e._b({},"t-switch",c,!1))]}}])})},u=[];r._withStripped=!0;const o={};var d=m(i,r,u,!1,w,null,null,null);function w(e){for(let t in o)this[t]=o[t]}d.options.__file="../src/switch/_usage/index.vue";var P=function(){return d.exports}();export{C as D,P as U,k as a,f as b,b as c,z as d,_ as e,I as f,x as g};
