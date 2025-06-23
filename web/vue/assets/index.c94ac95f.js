import{Y as o,n as m}from"./index.663c003f.js";var g=`<template>
  <t-space direction="vertical" style="max-width: 500px">
    <t-input @focus="onFocus" />
    <t-input v-model="input" placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9\uFF08\u6709\u9ED8\u8BA4\u503C\uFF09" @enter="onEnter" @change="onChange" />
    <t-input v-model="count" label="\u4EF7\u683C\uFF1A" type="number" suffix="\u5143" @change="onNumberChange" @focus="onNumberFocus" />

    <t-input placeholder="Search Input">
      <template #suffixIcon>
        <search-icon :style="{ cursor: 'pointer' }" />
      </template>
    </t-input>
  </t-space>
</template>

<script>
import { SearchIcon } from 'tdesign-icons-vue';

export default {
  components: { SearchIcon },

  data() {
    return {
      input: '\u6709\u9ED8\u8BA4\u503C',
      count: undefined,
    };
  },

  methods: {
    onFocus(val) {
      console.log(val, typeof val);
    },
    onEnter() {
      console.log('trigger enter');
    },
    onChange(val) {
      console.log('onChange', this.input, val);
    },
    onNumberChange(val) {
      console.log('onNumberChange', this.count, val);
    },
    onNumberFocus(val) {
      console.log(val);
    },
  },
};
<\/script>
`,b=`<template>
  <t-space direction="vertical" style="max-width: 500px">
    <t-input @focus="onFocus" />
    <t-input v-model="input" placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9\uFF08\u6709\u9ED8\u8BA4\u503C\uFF09" @enter="onEnter" @change="onChange" />
    <t-input v-model="count" label="\u4EF7\u683C\uFF1A" type="number" suffix="\u5143" @change="onNumberChange" @focus="onNumberFocus" />

    <t-input placeholder="Search Input">
      <template #suffixIcon>
        <search-icon :style="{ cursor: 'pointer' }" />
      </template>
    </t-input>
  </t-space>
</template>

<script setup>
import { ref } from 'vue';
import { SearchIcon } from 'tdesign-icons-vue';

const input = ref('\u6709\u9ED8\u8BA4\u503C');
const count = ref(undefined);
const onFocus = (val) => {
  console.log(val, typeof val);
};
const onEnter = () => {
  console.log('trigger enter');
};
const onChange = (val) => {
  console.log('onChange', input.value, val);
};
const onNumberChange = (val) => {
  console.log('onNumberChange', count.value, val);
};
const onNumberFocus = (val) => {
  console.log(val);
};
<\/script>
`,y=`<template>
  <t-space direction="vertical" style="max-width: 500px">
    <t-input-adornment prepend="http://">
      <t-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" />
    </t-input-adornment>

    <t-input-adornment append=".com">
      <t-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" />
    </t-input-adornment>

    <t-input-adornment prepend="http://" append=".com">
      <t-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" />
    </t-input-adornment>
  </t-space>
</template>
`,w=`<template>
  <t-space direction="vertical" style="max-width: 500px">
    <t-input-adornment prepend="http://">
      <t-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" />
    </t-input-adornment>

    <t-input-adornment append=".com">
      <t-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" />
    </t-input-adornment>

    <t-input-adornment prepend="http://" append=".com">
      <t-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" />
    </t-input-adornment>
  </t-space>
</template>
`,C=`<template>
  <t-space direction="vertical" style="max-width: 500px">
    <t-input-group separate>
      <t-input :style="{ width: '100px' }" default-value="0731" />
      <t-input default-value="12345677" />
    </t-input-group>

    <t-input-group separate>
      <t-input />
      <t-input />
    </t-input-group>

    <t-input-group>
      <t-input />
      <t-input />
    </t-input-group>

    <t-input-group separate>
      <t-input :style="{ width: '100px' }" default-value="0731" />
      <span :style="{ lineHeight: '32px' }">&nbsp;-&nbsp;</span>
      <t-input :style="{ width: '100px' }" default-value="12345" />
      <t-input :style="{ width: '100px' }" default-value="678901" />
      <t-input :style="{ width: '100px' }" />
    </t-input-group>
  </t-space>
</template>
`,_=`<template>
  <t-space direction="vertical" style="max-width: 500px">
    <t-input-group separate>
      <t-input :style="{ width: '100px' }" default-value="0731" />
      <t-input default-value="12345677" />
    </t-input-group>

    <t-input-group separate>
      <t-input />
      <t-input />
    </t-input-group>

    <t-input-group>
      <t-input />
      <t-input />
    </t-input-group>

    <t-input-group separate>
      <t-input :style="{ width: '100px' }" default-value="0731" />
      <span :style="{ lineHeight: '32px' }">&nbsp;-&nbsp;</span>
      <t-input :style="{ width: '100px' }" default-value="12345" />
      <t-input :style="{ width: '100px' }" default-value="678901" />
      <t-input :style="{ width: '100px' }" />
    </t-input-group>
  </t-space>
</template>
`,D=`<template>
  <t-input clearable v-model="value" placeholder="\u8BF7\u8F93\u5165" @clear="onClear" style="max-width: 500px" />
</template>

<script>
export default {
  data() {
    return {
      value: 'Hello TDesign',
    };
  },
  methods: {
    onClear() {
      console.log('clear');
    },
  },
};
<\/script>
`,I=`<template>
  <t-input clearable v-model="value" placeholder="\u8BF7\u8F93\u5165" @clear="onClear" style="max-width: 500px" />
</template>

<script setup>
import { ref } from 'vue';

const value = ref('Hello TDesign');
const onClear = () => {
  console.log('clear');
};
<\/script>
`,V=`<template>
  <t-space direction="vertical" style="max-width: 500px">
    <t-input type="password" default-value="520 TDesign">
      <lock-on-icon slot="prefix-icon"></lock-on-icon>
    </t-input>
    <!-- \u4F7F\u7528 function \u7684\u5F62\u5F0F\u5B9A\u4E49 icon -->
    <t-input type="password" default-value="520 TDesign" :prefix-icon="renderPrefixIcon" />
  </t-space>
</template>
<script lang="jsx">
import { LockOnIcon } from 'tdesign-icons-vue';

export default {
  components: {
    LockOnIcon,
  },
  methods: {
    renderPrefixIcon() {
      return <LockOnIcon></LockOnIcon>;
    },
  },
};
<\/script>
`,N=`<template>
  <t-space direction="vertical" style="max-width: 500px">
    <t-input type="password" default-value="520 TDesign">
      <lock-on-icon slot="prefix-icon"></lock-on-icon>
    </t-input>
    <!-- \u4F7F\u7528 function \u7684\u5F62\u5F0F\u5B9A\u4E49 icon -->
    <t-input type="password" default-value="520 TDesign" :prefix-icon="renderPrefixIcon" />
  </t-space>
</template>
<script setup lang="jsx">
import { LockOnIcon } from 'tdesign-icons-vue';

const renderPrefixIcon = () => <LockOnIcon></LockOnIcon>;
<\/script>
`,S=`<template>
  <t-space class="t-demo__input-status" :size="80" style="max-width: 800px">
    <t-space direction="vertical">
      <t-input disabled default-value="\u7981\u7528\u72B6\u6001" />
      <t-input readonly default-value="\u53EA\u8BFB\u72B6\u6001" />
    </t-space>
    <t-space direction="vertical">
      <t-input default-value="\u6210\u529F\u72B6\u6001" />
      <t-input status="success" default-value="\u6210\u529F\u72B6\u6001" />
      <t-input status="warning" default-value="\u8B66\u544A\u72B6\u6001" />
      <t-input status="error" default-value="\u9519\u8BEF\u72B6\u6001" />
    </t-space>
    <t-space direction="vertical">
      <t-input default-value="\u666E\u901A\u72B6\u6001" tips="\u8FD9\u662F\u666E\u901A\u6587\u672C\u63D0\u793A" />
      <t-input status="success" default-value="\u6210\u529F\u72B6\u6001" tips="\u6821\u9A8C\u901A\u8FC7\u6587\u672C\u63D0\u793A" />
      <t-input status="warning" default-value="\u8B66\u544A\u72B6\u6001" tips="\u6821\u9A8C\u4E0D\u901A\u8FC7\u6587\u672C\u63D0\u793A" />
      <t-input status="error" default-value="\u9519\u8BEF\u72B6\u6001" tips="\u6821\u9A8C\u5B58\u5728\u4E25\u91CD\u95EE\u9898\u6587\u672C\u63D0\u793A" />
    </t-space>
  </t-space>
</template>

<style>
.t-demo__input-status .t-space-item {
  margin-bottom: 12px;
}
</style>
`,T=`<template>
  <t-space class="t-demo__input-status" :size="80" style="max-width: 800px">
    <t-space direction="vertical">
      <t-input disabled default-value="\u7981\u7528\u72B6\u6001" />
      <t-input readonly default-value="\u53EA\u8BFB\u72B6\u6001" />
    </t-space>
    <t-space direction="vertical">
      <t-input default-value="\u6210\u529F\u72B6\u6001" />
      <t-input status="success" default-value="\u6210\u529F\u72B6\u6001" />
      <t-input status="warning" default-value="\u8B66\u544A\u72B6\u6001" />
      <t-input status="error" default-value="\u9519\u8BEF\u72B6\u6001" />
    </t-space>
    <t-space direction="vertical">
      <t-input default-value="\u666E\u901A\u72B6\u6001" tips="\u8FD9\u662F\u666E\u901A\u6587\u672C\u63D0\u793A" />
      <t-input status="success" default-value="\u6210\u529F\u72B6\u6001" tips="\u6821\u9A8C\u901A\u8FC7\u6587\u672C\u63D0\u793A" />
      <t-input status="warning" default-value="\u8B66\u544A\u72B6\u6001" tips="\u6821\u9A8C\u4E0D\u901A\u8FC7\u6587\u672C\u63D0\u793A" />
      <t-input status="error" default-value="\u9519\u8BEF\u72B6\u6001" tips="\u6821\u9A8C\u5B58\u5728\u4E25\u91CD\u95EE\u9898\u6587\u672C\u63D0\u793A" />
    </t-space>
  </t-space>
</template>

<style>
.t-demo__input-status .t-space-item {
  margin-bottom: 12px;
}
</style>
`,k=`<template>
  <t-space direction="vertical" style="max-width: 500px">
    <t-input size="large" placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" />
    <t-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" />
    <t-input size="small" placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" />
  </t-space>
</template>
`,z=`<template>
  <t-space direction="vertical" style="max-width: 500px">
    <t-input size="large" placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" />
    <t-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" />
    <t-input size="small" placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" />
  </t-space>
</template>
`,L=`<template>
  <t-space direction="vertical" style="max-width: 500px">
    <t-input default-value="\u5DE6\u5BF9\u9F50" align="left" />
    <t-input default-value="\u5C45\u4E2D\u5BF9\u9F50" align="center" />
    <t-input default-value="\u53F3\u5BF9\u9F50" align="right" />
  </t-space>
</template>
`,P=`<template>
  <t-space direction="vertical" style="max-width: 500px">
    <t-input default-value="\u5DE6\u5BF9\u9F50" align="left" />
    <t-input default-value="\u5C45\u4E2D\u5BF9\u9F50" align="center" />
    <t-input default-value="\u53F3\u5BF9\u9F50" align="right" />
  </t-space>
</template>
`,F=`<template>
  <t-input auto-width default-value="\u5BBD\u5EA6\u81EA\u9002\u5E94" style="max-width: 500px" />
</template>
`,$=`<template>
  <t-input auto-width default-value="\u5BBD\u5EA6\u81EA\u9002\u5E94" style="max-width: 500px" />
</template>
`,O=`<template>
  <t-space direction="vertical" :size="24" style="max-width: 500px">
    <!-- \u5185\u7F6E -->
    <t-input
      v-model="input1"
      :maxlength="5"
      show-limit-number
      placeholder="\u5185\u7F6E\u5B57\u6570\u9650\u5236\uFF0C\u6700\u5927\u6587\u672C\u957F\u5EA6\uFF0C\u4E00\u4E2A\u4E2D\u6587\u5B57\u7B49\u4E8E\u4E00\u4E2A\u957F\u5EA6"
    />

    <t-input
      v-model="input2"
      :maxcharacter="10"
      show-limit-number
      placeholder="\u5185\u7F6E\u5B57\u6570\u9650\u5236\uFF0C\u6700\u5927\u5B57\u7B26\u6570\u91CF\u9650\u5236\uFF0C\u4E00\u4E2A\u4E2D\u6587\u5B57\u7B49\u4E8E\u4E24\u4E2A\u5B57\u7B26"
    />

    <t-input
      v-model="input3"
      :maxlength="5"
      show-limit-number
      allow-input-over-max
      placeholder="\u5185\u7F6E\u5B57\u6570\u9650\u5236\uFF0C\u5B57\u6570\u8D85\u51FA\u65F6\u5141\u8BB8\u7EE7\u7EED\u8F93\u5165"
      :tips="errorTips"
      :status="errorTips ? 'error' : ''"
      @validate="onValidate"
    />

    <!-- \u81EA\u5B9A\u4E49 -->
    <t-input v-model="input4" :maxlength="5" :suffix="suffix" placeholder="\u81EA\u5B9A\u4E49\u5B57\u6570\u9650\u5236\u6587\u672C" />
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      errorTips: '',
    };
  },

  computed: {
    suffix() {
      return \`\${[...this.input4].length}/5\`;
    },
  },

  methods: {
    onValidate({ error }) {
      this.errorTips = error ? '\u8F93\u5165\u5185\u5BB9\u957F\u5EA6\u4E0D\u5141\u8BB8\u8D85\u8FC7 5 \u4E2A\u5B57' : '';
    },
  },
};
<\/script>
`,B=`<template>
  <t-space direction="vertical" :size="24" style="max-width: 500px">
    <!-- \u5185\u7F6E -->
    <t-input
      v-model="input1"
      :maxlength="5"
      show-limit-number
      placeholder="\u5185\u7F6E\u5B57\u6570\u9650\u5236\uFF0C\u6700\u5927\u6587\u672C\u957F\u5EA6\uFF0C\u4E00\u4E2A\u4E2D\u6587\u5B57\u7B49\u4E8E\u4E00\u4E2A\u957F\u5EA6"
    />

    <t-input
      v-model="input2"
      :maxcharacter="10"
      show-limit-number
      placeholder="\u5185\u7F6E\u5B57\u6570\u9650\u5236\uFF0C\u6700\u5927\u5B57\u7B26\u6570\u91CF\u9650\u5236\uFF0C\u4E00\u4E2A\u4E2D\u6587\u5B57\u7B49\u4E8E\u4E24\u4E2A\u5B57\u7B26"
    />

    <t-input
      v-model="input3"
      :maxlength="5"
      show-limit-number
      allow-input-over-max
      placeholder="\u5185\u7F6E\u5B57\u6570\u9650\u5236\uFF0C\u5B57\u6570\u8D85\u51FA\u65F6\u5141\u8BB8\u7EE7\u7EED\u8F93\u5165"
      :tips="errorTips"
      :status="errorTips ? 'error' : ''"
      @validate="onValidate"
    />

    <!-- \u81EA\u5B9A\u4E49 -->
    <t-input v-model="input4" :maxlength="5" :suffix="suffix" placeholder="\u81EA\u5B9A\u4E49\u5B57\u6570\u9650\u5236\u6587\u672C" />
  </t-space>
</template>
<script setup>
import { ref, computed } from 'vue';

const input1 = ref('');
const input2 = ref('');
const input3 = ref('');
const input4 = ref('');
const errorTips = ref('');
const suffix = computed(() => \`\${[...input4.value].length}/5\`);
const onValidate = ({ error }) => {
  errorTips.value = error ? '\u8F93\u5165\u5185\u5BB9\u957F\u5EA6\u4E0D\u5141\u8BB8\u8D85\u8FC7 5 \u4E2A\u5B57' : '';
};
<\/script>
`,E=`<template>
  <t-input
    v-model="input"
    :status="inputStatus"
    :format="format"
    placeholder="\u8BF7\u8F93\u5165\u6570\u5B57"
    :tips="tips"
    style="max-width: 500px"
  />
</template>
<script>
export default {
  data() {
    return {
      input: '',
    };
  },
  computed: {
    inputStatus() {
      if (isNaN(+this.input)) {
        return 'error';
      }
      return '';
    },
    tips() {
      if (!this.inputStatus) {
        return '';
      }
      return '\u8BF7\u8F93\u5165\u6570\u5B57';
    },
  },
  methods: {
    format(val) {
      const reg = /(\\d)(?=(?:\\d{3})+$)/g;
      const str = val.replace(reg, '$1,');
      return str;
    },
  },
};
<\/script>
`,j=`<template>
  <t-input
    v-model="input"
    :status="inputStatus"
    :format="format"
    placeholder="\u8BF7\u8F93\u5165\u6570\u5B57"
    :tips="tips"
    style="max-width: 500px"
  />
</template>
<script setup>
import { ref, computed } from 'vue';

const input = ref('');
const inputStatus = computed(() => {
  if (isNaN(+input.value)) {
    return 'error';
  }
  return '';
});
const tips = computed(() => {
  if (!inputStatus.value) {
    return '';
  }
  return '\u8BF7\u8F93\u5165\u6570\u5B57';
});
const format = (val) => {
  const reg = /(\\d)(?=(?:\\d{3})+$)/g;
  const str = val.replace(reg, '$1,');
  return str;
};
<\/script>
`,H=`<template>
  <t-space direction="vertical" style="max-width: 500px">
    <t-input placeholder="please input" clearable />
    <t-input placeholder="borderless input" borderless clearable />
  </t-space>
</template>
<script><\/script>
`,v=[{name:"align",type:"enum",defaultValue:"left",options:[{label:"left",value:"left"},{label:"center",value:"center"},{label:"right",value:"right"}]},{name:"autofocus",type:"Boolean",defaultValue:!1,options:[]},{name:"autoWidth",type:"Boolean",defaultValue:!1,options:[]},{name:"borderless",type:"Boolean",defaultValue:!1,options:[]},{name:"clearable",type:"Boolean",defaultValue:!1,options:[]},{name:"disabled",type:"Boolean",defaultValue:!1,options:[]},{name:"readonly",type:"Boolean",defaultValue:!1,options:[]},{name:"showClearIconOnEmpty",type:"Boolean",defaultValue:!1,options:[]},{name:"size",type:"enum",defaultValue:"medium",options:[{label:"small",value:"small"},{label:"medium",value:"medium"},{label:"large",value:"large"}]},{name:"status",type:"enum",defaultValue:"",options:[{label:"default",value:""},{label:"success",value:"success"},{label:"warning",value:"warning"},{label:"error",value:"error"}]},{name:"type",type:"enum",defaultValue:"text",options:[{label:"text",value:"text"},{label:"number",value:"number"},{label:"url",value:"url"},{label:"tel",value:"tel"},{label:"password",value:"password"},{label:"search",value:"search"},{label:"submit",value:"submit"},{label:"hidden",value:"hidden"}]}];const u={};u.setup=(n,t)=>{const e=o(v),a=[{label:"input",value:"input"}],l={input:'<t-input v-bind="configProps" />'},p=o(`<template>${l[a[0].value].trim()}</template>`);function c(d){p.value=`<template>${l[d].trim()}</template>`}return{configList:e,panelList:a,usageCode:p,onPanelChange:c}};var s=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("base-usage",{attrs:{code:n.usageCode,"config-list":n.configList,"panel-list":n.panelList},on:{PanelChange:n.onPanelChange},scopedSlots:n._u([{key:"input",fn:function(a){var l=a.configProps;return[e("t-input",n._b({},"t-input",l,!1))]}}])})},f=[];s._withStripped=!0;const i={};var r=m(u,s,f,!1,h,null,null,null);function h(n){for(let t in i)this[t]=i[t]}r.options.__file="../src/input/_usage/index.vue";var M=function(){return r.exports}();export{g as D,M as U,b as a,y as b,w as c,C as d,_ as e,D as f,I as g,V as h,N as i,S as j,T as k,k as l,z as m,L as n,P as o,F as p,$ as q,O as r,B as s,E as t,j as u,H as v};
