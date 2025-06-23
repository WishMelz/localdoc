import{Y as s,n as d}from"./index.663c003f.js";var h=`<template>
  <t-space direction="vertical">
    <t-textarea v-model="value" placeholder="\u8BF7\u8F93\u5165\u63CF\u8FF0\u6587\u6848" name="description" @change="onChange" />

    <t-textarea
      v-model="value2"
      placeholder="\u8BF7\u8F93\u5165\u6587\u6848\uFF0C\u9AD8\u5EA6\u53EF\u81EA\u9002\u5E94\uFF1Bautosize=true"
      name="description"
      :autosize="true"
    />

    <t-textarea
      v-model="value3"
      placeholder="\u8BF7\u8F93\u5165\u6587\u6848\uFF0C\u9AD8\u5EA6\u53EF\u81EA\u9002\u5E94\uFF0C\u6700\u5C0F3\u884C\uFF0C\u6700\u59275\u884C\uFF1Bautosize={minRows: 3, maxRows: 5}"
      name="description"
      :autosize="{ minRows: 3, maxRows: 5 }"
    />
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      value: '',
      value2: '',
      value3: '',
    };
  },
  methods: {
    onChange(value, e) {
      console.log('onChange\uFF1A', value, e);
    },
  },
};
<\/script>
`,y=`<template>
  <t-space direction="vertical">
    <t-textarea v-model="value" placeholder="\u8BF7\u8F93\u5165\u63CF\u8FF0\u6587\u6848" name="description" @change="onChange" />

    <t-textarea
      v-model="value2"
      placeholder="\u8BF7\u8F93\u5165\u6587\u6848\uFF0C\u9AD8\u5EA6\u53EF\u81EA\u9002\u5E94\uFF1Bautosize=true"
      name="description"
      :autosize="true"
    />

    <t-textarea
      v-model="value3"
      placeholder="\u8BF7\u8F93\u5165\u6587\u6848\uFF0C\u9AD8\u5EA6\u53EF\u81EA\u9002\u5E94\uFF0C\u6700\u5C0F3\u884C\uFF0C\u6700\u59275\u884C\uFF1Bautosize={minRows: 3, maxRows: 5}"
      name="description"
      :autosize="{ minRows: 3, maxRows: 5 }"
    />
  </t-space>
</template>
<script setup>
import { ref } from 'vue';

const value = ref('');
const value2 = ref('');
const value3 = ref('');
const onChange = (value, e) => {
  console.log('onChange\uFF1A', value, e);
};
<\/script>
`,_=`<template>
  <t-space direction="vertical">
    <t-textarea
      v-model="value"
      tips="\u8FD9\u91CC\u53EF\u4EE5\u653E\u4E00\u4E9B\u63D0\u793A\u6587\u5B57"
      placeholder="\u8BF7\u8F93\u5165\u63CF\u8FF0\u6587\u6848\uFF0C\u6587\u672C\u957F\u5EA6\u6700\u591A20\uFF0Cmaxlength=20"
      :maxlength="20"
    ></t-textarea>

    <t-textarea
      v-model="value2"
      placeholder="\u8BF7\u8F93\u5165\u63CF\u8FF0\u6587\u6848\uFF0C\u6700\u591A20\u5B57\u7B26\uFF08\u4E00\u4E2A\u6C49\u5B57\u5360\u4E24\u4E2A\u5B57\u7B26\u957F\u5EA6\uFF09\uFF0Cmaxcharacter=20"
      :maxcharacter="20"
    ></t-textarea>
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      value: '',
      value2: '',
    };
  },
  methods: {},
};
<\/script>
<style></style>
`,C=`<template>
  <t-space direction="vertical">
    <t-textarea
      v-model="value"
      tips="\u8FD9\u91CC\u53EF\u4EE5\u653E\u4E00\u4E9B\u63D0\u793A\u6587\u5B57"
      placeholder="\u8BF7\u8F93\u5165\u63CF\u8FF0\u6587\u6848\uFF0C\u6587\u672C\u957F\u5EA6\u6700\u591A20\uFF0Cmaxlength=20"
      :maxlength="20"
    ></t-textarea>

    <t-textarea
      v-model="value2"
      placeholder="\u8BF7\u8F93\u5165\u63CF\u8FF0\u6587\u6848\uFF0C\u6700\u591A20\u5B57\u7B26\uFF08\u4E00\u4E2A\u6C49\u5B57\u5360\u4E24\u4E2A\u5B57\u7B26\u957F\u5EA6\uFF09\uFF0Cmaxcharacter=20"
      :maxcharacter="20"
    ></t-textarea>
  </t-space>
</template>
<script setup>
import { ref } from 'vue';

const value = ref('');
const value2 = ref('');
<\/script>
`,w=`<template>
  <t-textarea
    v-model="value"
    placeholder="\u8BF7\u8F93\u5165"
    @keypress="onKeypress"
    @keydown="onKeydown"
    @keyup="onKeyup"
    @focus="onFocus"
    @blur="onBlur"
  />
</template>
<script>
export default {
  data() {
    return {
      value: '',
    };
  },
  methods: {
    onKeypress(value, e) {
      console.log('onKeypress: ', value, e);
    },
    onKeydown(value, e) {
      console.log('onKeydown: ', value, e);
    },
    onKeyup(value, e) {
      console.log('onKeyup: ', value, e);
    },

    onFocus(value, e) {
      console.log('onFocus: ', value, e);
    },
    onBlur(value, e) {
      console.log('onBlur: ', value, e);
    },
  },
};
<\/script>
`,K=`<template>
  <t-textarea
    v-model="value"
    placeholder="\u8BF7\u8F93\u5165"
    @keypress="onKeypress"
    @keydown="onKeydown"
    @keyup="onKeyup"
    @focus="onFocus"
    @blur="onBlur"
  />
</template>
<script setup>
import { ref } from 'vue';

const value = ref('');
const onKeypress = (value, e) => {
  console.log('onKeypress: ', value, e);
};
const onKeydown = (value, e) => {
  console.log('onKeydown: ', value, e);
};
const onKeyup = (value, e) => {
  console.log('onKeyup: ', value, e);
};
const onFocus = (value, e) => {
  console.log('onFocus: ', value, e);
};
const onBlur = (value, e) => {
  console.log('onBlur: ', value, e);
};
<\/script>
`,b=`<template>
  <t-space direction="vertical">
    <t-textarea disabled default-value="\u7981\u7528\u72B6\u6001" />
    <t-textarea readonly default-value="\u53EA\u8BFB\u72B6\u6001" />
    <t-textarea default-value="\u666E\u901A\u72B6\u6001" tips="\u8FD9\u662F\u666E\u901A\u6587\u672C\u63D0\u793A" />
    <t-textarea status="success" default-value="\u6210\u529F\u72B6\u6001" tips="\u6821\u9A8C\u901A\u8FC7\u6587\u672C\u63D0\u793A" />
    <t-textarea status="warning" default-value="\u8B66\u544A\u72B6\u6001" tips="\u6821\u9A8C\u4E0D\u901A\u8FC7\u6587\u672C\u63D0\u793A" />
    <t-textarea status="error" default-value="\u9519\u8BEF\u72B6\u6001" tips="\u6821\u9A8C\u5B58\u5728\u4E25\u91CD\u95EE\u9898\u6587\u672C\u63D0\u793A" />
  </t-space>
</template>
`,z=`<template>
  <t-space direction="vertical">
    <t-textarea disabled default-value="\u7981\u7528\u72B6\u6001" />
    <t-textarea readonly default-value="\u53EA\u8BFB\u72B6\u6001" />
    <t-textarea default-value="\u666E\u901A\u72B6\u6001" tips="\u8FD9\u662F\u666E\u901A\u6587\u672C\u63D0\u793A" />
    <t-textarea status="success" default-value="\u6210\u529F\u72B6\u6001" tips="\u6821\u9A8C\u901A\u8FC7\u6587\u672C\u63D0\u793A" />
    <t-textarea status="warning" default-value="\u8B66\u544A\u72B6\u6001" tips="\u6821\u9A8C\u4E0D\u901A\u8FC7\u6587\u672C\u63D0\u793A" />
    <t-textarea status="error" default-value="\u9519\u8BEF\u72B6\u6001" tips="\u6821\u9A8C\u5B58\u5728\u4E25\u91CD\u95EE\u9898\u6587\u672C\u63D0\u793A" />
  </t-space>
</template>
`,m=[{name:"autofocus",type:"Boolean",defaultValue:!1,options:[]},{name:"autosize",type:"Boolean",defaultValue:!1,options:[]},{name:"disabled",type:"Boolean",defaultValue:!1,options:[]},{name:"readonly",type:"Boolean",defaultValue:!1,options:[]}];const u={};u.setup=(e,n)=>{const a=s(m),t=[{label:"textarea",value:"textarea"}],o={textarea:'<t-textarea placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" v-bind="configProps" />'},l=s(`<template>${o[t[0].value].trim()}</template>`);function i(v){l.value=`<template>${o[v].trim()}</template>`}return{configList:a,panelList:t,usageCode:l,onPanelChange:i}};var p=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("base-usage",{attrs:{code:e.usageCode,"config-list":e.configList,"panel-list":e.panelList},on:{PanelChange:e.onPanelChange},scopedSlots:e._u([{key:"textarea",fn:function(t){var o=t.configProps;return[a("t-textarea",e._b({attrs:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}},"t-textarea",o,!1))]}}])})},x=[];p._withStripped=!0;const r={};var c=d(u,p,x,!1,f,null,null,null);function f(e){for(let n in r)this[n]=r[n]}c.options.__file="../src/textarea/_usage/index.vue";var B=function(){return c.exports}();export{h as D,B as U,y as a,_ as b,C as c,w as d,K as e,b as f,z as g};
