import{Y as a,n as r}from"./index.663c003f.js";var g=`<template>
  <t-space>
    <t-checkbox>\u672A\u9009\u4E2D\u9879</t-checkbox>
    <t-checkbox indeterminate>\u534A\u9009\u72B6\u6001</t-checkbox>
    <t-checkbox :checked="true">\u9009\u4E2D\u9879</t-checkbox>
    <t-checkbox disabled :checked="false">\u672A\u9009\u7981\u7528\u9879</t-checkbox>
    <t-checkbox disabled :checked="true">\u9009\u4E2D\u7981\u7528\u9879</t-checkbox>
  </t-space>
</template>

<style scoped>
.t-checkbox + .t-checkbox {
  margin-left: 16px;
}
</style>
`,m=`<template>
  <t-space>
    <t-checkbox>\u672A\u9009\u4E2D\u9879</t-checkbox>
    <t-checkbox indeterminate>\u534A\u9009\u72B6\u6001</t-checkbox>
    <t-checkbox :checked="true">\u9009\u4E2D\u9879</t-checkbox>
    <t-checkbox disabled :checked="false">\u672A\u9009\u7981\u7528\u9879</t-checkbox>
    <t-checkbox disabled :checked="true">\u9009\u4E2D\u7981\u7528\u9879</t-checkbox>
  </t-space>
</template>

<style scoped>
.t-checkbox + .t-checkbox {
  margin-left: 16px;
}
</style>
`,f=`<template>
  <t-space direction="vertical" size="24px">
    <div>\u9009\u4E2D\u503C: {{ checked }}</div>
    <t-space direction="vertical">
      <!-- name \u975E\u5FC5\u9700 -->
      <t-checkbox-group v-model="checked" :options="['\u9009\u9879\u4E00', '\u9009\u9879\u4E8C', '\u9009\u9879\u4E09']" name="city"></t-checkbox-group>
      <t-button @click="checked = ['\u9009\u9879\u4E8C']" size="small">\u91CD\u7F6E</t-button>
    </t-space>
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      checked: ['\u9009\u9879\u4E8C'],
    };
  },
};
<\/script>
`,C=`<template>
  <t-space direction="vertical" size="24px">
    <div>\u9009\u4E2D\u503C: {{ checked }}</div>
    <t-space direction="vertical">
      <!-- name \u975E\u5FC5\u9700 -->
      <t-checkbox-group v-model="checked" :options="['\u9009\u9879\u4E00', '\u9009\u9879\u4E8C', '\u9009\u9879\u4E09']" name="city"></t-checkbox-group>
      <t-button @click="checked = ['\u9009\u9879\u4E8C']" size="small">\u91CD\u7F6E</t-button>
    </t-space>
  </t-space>
</template>

<script setup>
import { ref } from 'vue';

const checked = ref(['\u9009\u9879\u4E8C']);
<\/script>
`,_=`<template>
  <t-space direction="vertical" size="48px">
    <t-space direction="vertical">
      <div>\u65B9\u5F0F\u4E00\uFF1A\u4E1A\u52A1\u4FA7\u81EA\u5B9A\u4E49\u5168\u9009\u529F\u80FD\u3002\u9009\u4E2D\u503C: {{ value1.join(',') }}</div>
      <div>
        <t-checkbox :checked="checkAll" :indeterminate="indeterminate" :onChange="handleSelectAll">\u5168\u9009</t-checkbox>
      </div>
      <t-checkbox-group v-model="value1" :options="options1" @change="onChange1" />
    </t-space>

    <!-- key \u662F\u907F\u514D\u91CD\u590D\u6E32\u67D3\u7684\u5173\u952E\uFF1BCheckbox.key is the key point of list render -->
    <!-- \u6570\u636E\u91CF\u5927\u7684\u60C5\u51B5\u4E0B\uFF0C\u4E0D\u5EFA\u8BAE\u4F7F\u7528\u8FD9\u79CD\u65B9\u5F0F\uFF1A\u56E0 Vue2 \u6846\u67B6\u4E2D\uFF0C\u7236\u7EC4\u4EF6 CheckboxGroup \u9009\u4E2D\u9879\u53D8\u5316\uFF0C\u5B50\u7EC4\u4EF6 Checkbox \u4E00\u5B9A\u5168\u91CF\u91CD\u65B0\u6E32\u67D3\u3002 -->
    <t-space direction="vertical">
      <div>
        \u65B9\u5F0F\u4E8C\uFF1A\u7EC4\u4EF6\u5185\u7F6E\u5168\u9009\u529F\u80FD\uFF0C\u4F7F\u7528\u63D2\u69FD\u5B9A\u4E49\u9009\u9879\u3002\u26A0\uFE0F\u6CE8\u610F\uFF1A\u6570\u636E\u91CF\u5927\u65F6\uFF0C\u4E0D\u5EFA\u8BAE\u4F7F\u7528\u8FD9\u79CD\u65B9\u5F0F\u3002\u9009\u4E2D\u503C:
        {{ value2.join(', ') }}\u3002
      </div>
      <t-checkbox-group v-model="value2" @change="onChange2">
        <t-checkbox key="1" :checkAll="true" label="\u5168\u9009" />
        <t-checkbox key="2" value="\u9009\u9879\u4E00">\u9009\u9879\u4E00</t-checkbox>
        <t-checkbox key="3" label="\u9009\u9879\u4E8C" value="\u9009\u9879\u4E8C" :disabled="true" />
        <t-checkbox key="4" label="\u9009\u9879\u4E09" value="\u9009\u9879\u4E09" />
      </t-checkbox-group>
    </t-space>

    <!-- \u6570\u636E\u91CF\u5927\u7684\u60C5\u51B5\u4E0B\uFF0C\u5EFA\u8BAE\u4F7F\u7528\u8FD9\u79CD\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u907F\u514D\u9009\u4E2D\u9879\u91CD\u590D\u6E32\u67D3 -->
    <t-space direction="vertical">
      <div>
        \u65B9\u5F0F\u4E09\uFF1A\u7EC4\u4EF6\u5185\u7F6E\u5168\u9009\u529F\u80FD\uFF0C\u4F7F\u7528 \`options\` \u5B9A\u4E49\u9009\u9879\u3002\u6570\u636E\u91CF\u5927\u65F6\uFF0C\u53EF\u4EE5\u907F\u514D\u6240\u6709\u5143\u7D20\u91CD\u65B0\u6E32\u67D3\u3002\u9009\u4E2D\u503C:
        {{ value3.join(', ') }}
      </div>
      <t-checkbox-group v-model="value3" :options="options2" @change="onChange3" />
    </t-space>

    <!-- \u6570\u636E\u91CF\u5927\u7684\u60C5\u51B5\u4E0B\uFF0C\u5EFA\u8BAE\u4F7F\u7528\u8FD9\u79CD\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u907F\u514D\u9009\u4E2D\u9879\u91CD\u590D\u6E32\u67D3 -->
    <t-space direction="vertical">
      <div>
        \u65B9\u5F0F\u56DB\uFF1A\u7EC4\u4EF6\u5185\u7F6E\u5168\u9009\u529F\u80FD\uFF0C\`options\` \u5B9A\u4E49\u9009\u9879\u5217\u8868\uFF0C\u63D2\u69FD\u5B9A\u4E49\u9009\u9879\u5185\u5BB9\u3002\u6570\u636E\u91CF\u5927\u65F6\uFF0C\u53EF\u4EE5\u907F\u514D\u6240\u6709\u5143\u7D20\u91CD\u65B0\u6E32\u67D3\u3002
      </div>
      <t-checkbox-group :defaultValue="['\u9009\u9879\u4E00']" :options="options3">
        <template #label="{ data: { label, value, checkAll }, index }">
          <span v-if="checkAll">{{ label }}</span>
          <span v-else> {{ label }}\uFF08{{ value }}/{{ index }}\uFF09 </span>
        </template>
      </t-checkbox-group>
    </t-space>
  </t-space>
</template>

<script lang="jsx">
const OPTION_LIST = [
  { label: '\u5168\u9009', checkAll: true },
  { value: '\u9009\u9879\u4E00', label: '\u9009\u9879\u4E00' },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  { value: '\u9009\u9879\u4E8C', label: (h) => <div>\u9009\u9879\u4E8C</div> },
  { value: '\u9009\u9879\u4E09', label: '\u9009\u9879\u4E09' },
];

const OPTION_LIST3 = [
  { label: '\u5168\u9009', checkAll: true },
  { value: 'optionA', label: '\u9009\u9879\u4E00' },
  { value: 'optionB', label: '\u9009\u9879\u4E8C' },
  { value: 'optionC', label: '\u9009\u9879\u4E09' },
];

export default {
  data() {
    return {
      value1: ['\u9009\u9879\u4E00'],
      options1: [
        { value: '\u9009\u9879\u4E00', label: () => <div>\u9009\u9879\u4E00</div> },
        { value: '\u9009\u9879\u4E8C', label: '\u9009\u9879\u4E8C' },
        { value: '\u9009\u9879\u4E09', label: '\u9009\u9879\u4E09' },
      ],
      value2: ['\u9009\u9879\u4E00'],
      value3: ['\u9009\u9879\u4E00', '\u9009\u9879\u4E8C', '\u9009\u9879\u4E09'],
      options2: [...OPTION_LIST],
      options3: OPTION_LIST3,
    };
  },
  computed: {
    checkAll() {
      return this.options1.length === this.value1.length;
    },
    indeterminate() {
      return !!(this.options1.length > this.value1.length && this.value1.length);
    },
  },
  methods: {
    handleSelectAll(checked) {
      this.value1 = checked ? ['\u9009\u9879\u4E00', '\u9009\u9879\u4E8C', '\u9009\u9879\u4E09'] : [];
    },
    onChange1(val) {
      console.log(this.value1, val);
    },
    onChange2(val) {
      console.log(this.value2, val);
    },
    onChange3(val) {
      console.log(this.value3, val);
    },
  },
};
<\/script>
`,y=`<template>
  <t-space direction="vertical" size="48px">
    <t-space direction="vertical">
      <div>\u65B9\u5F0F\u4E00\uFF1A\u4E1A\u52A1\u4FA7\u81EA\u5B9A\u4E49\u5168\u9009\u529F\u80FD\u3002\u9009\u4E2D\u503C: {{ value1.join(',') }}</div>
      <div>
        <t-checkbox :checked="checkAll" :indeterminate="indeterminate" :onChange="handleSelectAll">\u5168\u9009</t-checkbox>
      </div>
      <t-checkbox-group v-model="value1" :options="options1" @change="onChange1" />
    </t-space>

    <!-- key \u662F\u907F\u514D\u91CD\u590D\u6E32\u67D3\u7684\u5173\u952E\uFF1BCheckbox.key is the key point of list render -->
    <!-- \u6570\u636E\u91CF\u5927\u7684\u60C5\u51B5\u4E0B\uFF0C\u4E0D\u5EFA\u8BAE\u4F7F\u7528\u8FD9\u79CD\u65B9\u5F0F\uFF1A\u56E0 Vue2 \u6846\u67B6\u4E2D\uFF0C\u7236\u7EC4\u4EF6 CheckboxGroup \u9009\u4E2D\u9879\u53D8\u5316\uFF0C\u5B50\u7EC4\u4EF6 Checkbox \u4E00\u5B9A\u5168\u91CF\u91CD\u65B0\u6E32\u67D3\u3002 -->
    <t-space direction="vertical">
      <div>
        \u65B9\u5F0F\u4E8C\uFF1A\u7EC4\u4EF6\u5185\u7F6E\u5168\u9009\u529F\u80FD\uFF0C\u4F7F\u7528\u63D2\u69FD\u5B9A\u4E49\u9009\u9879\u3002\u26A0\uFE0F\u6CE8\u610F\uFF1A\u6570\u636E\u91CF\u5927\u65F6\uFF0C\u4E0D\u5EFA\u8BAE\u4F7F\u7528\u8FD9\u79CD\u65B9\u5F0F\u3002\u9009\u4E2D\u503C:
        {{ value2.join(', ') }}\u3002
      </div>
      <t-checkbox-group v-model="value2" @change="onChange2">
        <t-checkbox key="1" :checkAll="true" label="\u5168\u9009" />
        <t-checkbox key="2" value="\u9009\u9879\u4E00">\u9009\u9879\u4E00</t-checkbox>
        <t-checkbox key="3" label="\u9009\u9879\u4E8C" value="\u9009\u9879\u4E8C" :disabled="true" />
        <t-checkbox key="4" label="\u9009\u9879\u4E09" value="\u9009\u9879\u4E09" />
      </t-checkbox-group>
    </t-space>

    <!-- \u6570\u636E\u91CF\u5927\u7684\u60C5\u51B5\u4E0B\uFF0C\u5EFA\u8BAE\u4F7F\u7528\u8FD9\u79CD\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u907F\u514D\u9009\u4E2D\u9879\u91CD\u590D\u6E32\u67D3 -->
    <t-space direction="vertical">
      <div>
        \u65B9\u5F0F\u4E09\uFF1A\u7EC4\u4EF6\u5185\u7F6E\u5168\u9009\u529F\u80FD\uFF0C\u4F7F\u7528 \`options\` \u5B9A\u4E49\u9009\u9879\u3002\u6570\u636E\u91CF\u5927\u65F6\uFF0C\u53EF\u4EE5\u907F\u514D\u6240\u6709\u5143\u7D20\u91CD\u65B0\u6E32\u67D3\u3002\u9009\u4E2D\u503C:
        {{ value3.join(', ') }}
      </div>
      <t-checkbox-group v-model="value3" :options="options2" @change="onChange3" />
    </t-space>

    <!-- \u6570\u636E\u91CF\u5927\u7684\u60C5\u51B5\u4E0B\uFF0C\u5EFA\u8BAE\u4F7F\u7528\u8FD9\u79CD\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u907F\u514D\u9009\u4E2D\u9879\u91CD\u590D\u6E32\u67D3 -->
    <t-space direction="vertical">
      <div>
        \u65B9\u5F0F\u56DB\uFF1A\u7EC4\u4EF6\u5185\u7F6E\u5168\u9009\u529F\u80FD\uFF0C\`options\` \u5B9A\u4E49\u9009\u9879\u5217\u8868\uFF0C\u63D2\u69FD\u5B9A\u4E49\u9009\u9879\u5185\u5BB9\u3002\u6570\u636E\u91CF\u5927\u65F6\uFF0C\u53EF\u4EE5\u907F\u514D\u6240\u6709\u5143\u7D20\u91CD\u65B0\u6E32\u67D3\u3002
      </div>
      <t-checkbox-group :defaultValue="['\u9009\u9879\u4E00']" :options="options3">
        <template #label="{ data: { label, value, checkAll }, index }">
          <span v-if="checkAll">{{ label }}</span>
          <span v-else> {{ label }}\uFF08{{ value }}/{{ index }}\uFF09 </span>
        </template>
      </t-checkbox-group>
    </t-space>
  </t-space>
</template>

<script setup lang="jsx">
import { ref, computed } from 'vue';

const OPTION_LIST = [
  {
    label: '\u5168\u9009',
    checkAll: true,
  },
  {
    value: '\u9009\u9879\u4E00',
    label: '\u9009\u9879\u4E00',
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  {
    value: '\u9009\u9879\u4E8C',
    label: () => <div>\u9009\u9879\u4E8C</div>,
  },
  {
    value: '\u9009\u9879\u4E09',
    label: '\u9009\u9879\u4E09',
  },
];
const OPTION_LIST3 = [
  {
    label: '\u5168\u9009',
    checkAll: true,
  },
  {
    value: 'optionA',
    label: '\u9009\u9879\u4E00',
  },
  {
    value: 'optionB',
    label: '\u9009\u9879\u4E8C',
  },
  {
    value: 'optionC',
    label: '\u9009\u9879\u4E09',
  },
];
const value1 = ref(['\u9009\u9879\u4E00']);
const options1 = ref([
  {
    value: '\u9009\u9879\u4E00',
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    label: (h) => <div>\u9009\u9879\u4E00</div>,
  },
  {
    value: '\u9009\u9879\u4E8C',
    label: '\u9009\u9879\u4E8C',
  },
  {
    value: '\u9009\u9879\u4E09',
    label: '\u9009\u9879\u4E09',
  },
]);
const value2 = ref(['\u9009\u9879\u4E00']);
const value3 = ref(['\u9009\u9879\u4E00', '\u9009\u9879\u4E8C', '\u9009\u9879\u4E09']);
const options2 = ref([...OPTION_LIST]);
const options3 = ref(OPTION_LIST3);
const checkAll = computed(() => options1.value.length === value1.value.length);
const indeterminate = computed(() => !!(options1.value.length > value1.value.length && value1.value.length));
const handleSelectAll = (checked) => {
  value1.value = checked ? ['\u9009\u9879\u4E00', '\u9009\u9879\u4E8C', '\u9009\u9879\u4E09'] : [];
};
const onChange1 = (val) => {
  console.log(value1.value, val);
};
const onChange2 = (val) => {
  console.log(value2.value, val);
};
const onChange3 = (val) => {
  console.log(value3.value, val);
};
<\/script>
`,A=`<template>
  <t-space direction="vertical" size="36px">
    <!-- \u5355\u4E2A Checkbox \u53D7\u63A7\u6A21\u5F0F -->
    <t-space>
      <t-checkbox v-model="checked1" @change="onChange1">\u8BED\u6CD5\u7CD6\uFF08v-model\uFF09</t-checkbox>
      <t-checkbox :checked="true" @change="onChange2">\u53D7\u63A7\u5C5E\u6027</t-checkbox>
      <t-checkbox :defaultChecked="false" :onChange="onChange2">\u975E\u53D7\u63A7\u5C5E\u6027</t-checkbox>
    </t-space>
    <!-- \u590D\u9009\u6846\u6846\u7EC4\u53D7\u63A7\u6A21\u5F0F -->
    <t-checkbox-group :value="checked2" :options="options" :onChange="onChange5" />
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      checked1: true,
      checked2: [1],
      options: [
        { label: '\u5168\u9009', checkAll: true },
        { value: 1, label: '\u53D7\u63A7\u6A21\u5F0F\u9009\u9879\u4E00' },
        { value: 2, label: '\u53D7\u63A7\u6A21\u5F0F\u9009\u9879\u4E8C' },
        { value: 3, label: '\u53D7\u63A7\u6A21\u5F0F\u9009\u9879\u4E09' },
      ],
    };
  },
  methods: {
    onChange1(val) {
      console.log('change:', this.checked1, val);
    },
    onChange2(value, context) {
      console.log('change: ', value, context);
    },
    onChange5(value, context) {
      this.checked2 = value;
      console.log('change: ', value, context);
    },
  },
};
<\/script>

<style scoped>
.t-checkbox + .t-checkbox {
  margin-left: 16px;
}
</style>
`,I=`<template>
  <t-space direction="vertical" size="36px">
    <!-- \u5355\u4E2A Checkbox \u53D7\u63A7\u6A21\u5F0F -->
    <t-space>
      <t-checkbox v-model="checked1" @change="onChange1">\u8BED\u6CD5\u7CD6\uFF08v-model\uFF09</t-checkbox>
      <t-checkbox :checked="true" @change="onChange2">\u53D7\u63A7\u5C5E\u6027</t-checkbox>
      <t-checkbox :defaultChecked="false" :onChange="onChange2">\u975E\u53D7\u63A7\u5C5E\u6027</t-checkbox>
    </t-space>
    <!-- \u590D\u9009\u6846\u6846\u7EC4\u53D7\u63A7\u6A21\u5F0F -->
    <t-checkbox-group :value="checked2" :options="options" :onChange="onChange5" />
  </t-space>
</template>

<script setup>
import { ref } from 'vue';

const checked1 = ref(true);
const checked2 = ref([1]);
const options = ref([
  {
    label: '\u5168\u9009',
    checkAll: true,
  },
  {
    value: 1,
    label: '\u53D7\u63A7\u6A21\u5F0F\u9009\u9879\u4E00',
  },
  {
    value: 2,
    label: '\u53D7\u63A7\u6A21\u5F0F\u9009\u9879\u4E8C',
  },
  {
    value: 3,
    label: '\u53D7\u63A7\u6A21\u5F0F\u9009\u9879\u4E09',
  },
]);
const onChange1 = (val) => {
  console.log('change:', checked1.value, val);
};
const onChange2 = (value, context) => {
  console.log('change: ', value, context);
};
const onChange5 = (value, context) => {
  checked2.value = value;
  console.log('change: ', value, context);
};
<\/script>

<style scoped>
.t-checkbox + .t-checkbox {
  margin-left: 16px;
}
</style>
`,d=[{name:"checkAll",type:"Boolean",defaultValue:!1,options:[]},{name:"checked",type:"Boolean",defaultValue:!1,options:[]},{name:"disabled",type:"Boolean",defaultValue:!1,options:[]},{name:"indeterminate",type:"Boolean",defaultValue:!1,options:[]},{name:"readonly",type:"Boolean",defaultValue:!1,options:[]}];const i={};i.setup=(e,n)=>{const t=a(d),c=[{label:"checkbox",value:"checkbox"}],o={checkbox:'<t-checkbox v-bind="configProps">\u57FA\u7840\u591A\u9009\u6846</t-checkbox>'},l=a(`<template>${o[c[0].value].trim()}</template>`);function u(v){l.value=`<template>${o[v].trim()}</template>`}return{configList:t,panelList:c,usageCode:l,onPanelChange:u}};var h=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("base-usage",{attrs:{code:e.usageCode,"config-list":e.configList,"panel-list":e.panelList},on:{PanelChange:e.onPanelChange},scopedSlots:e._u([{key:"checkbox",fn:function(c){var o=c.configProps;return[t("t-checkbox",e._b({},"t-checkbox",o,!1),[e._v("\u57FA\u7840\u591A\u9009\u6846")])]}}])})},k=[];h._withStripped=!0;const s={};var p=r(i,h,k,!1,b,null,null,null);function b(e){for(let n in s)this[n]=s[n]}p.options.__file="../src/checkbox/_usage/index.vue";var O=function(){return p.exports}();export{g as D,O as U,m as a,f as b,C as c,_ as d,y as e,A as f,I as g};
