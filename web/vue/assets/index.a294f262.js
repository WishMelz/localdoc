import{Y as c,n as f}from"./index.663c003f.js";var C=`<template>
  <t-space direction="vertical">
    <t-date-picker mode="year" clearable allow-input />
    <t-date-range-picker mode="year" clearable allow-input />
  </t-space>
</template>
`,y=`<template>
  <t-space direction="vertical">
    <t-date-picker mode="year" clearable allow-input />
    <t-date-range-picker mode="year" clearable allow-input />
  </t-space>
</template>
`,x=`<template>
  <t-space direction="vertical">
    <t-date-picker mode="month" clearable allow-input />
    <t-date-range-picker mode="month" clearable allow-input />
  </t-space>
</template>
`,D=`<template>
  <t-space direction="vertical">
    <t-date-picker mode="month" clearable allow-input />
    <t-date-range-picker mode="month" clearable allow-input />
  </t-space>
</template>
`,w=`<template>
  <t-space direction="vertical">
    <t-date-picker mode="quarter" clearable allow-input />
    <t-date-range-picker mode="quarter" clearable allow-input />
  </t-space>
</template>
`,Y=`<template>
  <t-space direction="vertical">
    <t-date-picker mode="quarter" clearable allow-input />
    <t-date-range-picker mode="quarter" clearable allow-input />
  </t-space>
</template>
`,j=`<template>
  <t-space direction="vertical">
    <t-date-picker mode="week" clearable allow-input :first-day-of-week="weekStart" />

    <t-date-range-picker mode="week" clearable allow-input :first-day-of-week="weekStart" />
  </t-space>
</template>
<script>
// \u5982\u679C\u914D\u5408 firstDayOfWeek API \u4F7F\u7528\uFF0C\u8BF7\u4F7F\u7528 dayjs \u540C\u6B65\u4FEE\u6539 weekStart\uFF0C\u5426\u5219\u90E8\u5206\u65E5\u671F\u9009\u62E9\u4F1A\u7528\u5F02\u5E38
import dayjs from 'dayjs';
import updateLocale from 'dayjs/plugin/updateLocale';

dayjs.extend(updateLocale);

dayjs.updateLocale('zh-cn', {
  weekStart: 2,
});

export default {
  data() {
    return {
      weekStart: 2,
    };
  },
};
<\/script>
`,P=`<template>
  <t-space direction="vertical">
    <t-date-picker mode="week" clearable allow-input :first-day-of-week="weekStart" />

    <t-date-range-picker mode="week" clearable allow-input :first-day-of-week="weekStart" />
  </t-space>
</template>
<script setup>
// \u5982\u679C\u914D\u5408 firstDayOfWeek API \u4F7F\u7528\uFF0C\u8BF7\u4F7F\u7528 dayjs \u540C\u6B65\u4FEE\u6539 weekStart\uFF0C\u5426\u5219\u90E8\u5206\u65E5\u671F\u9009\u62E9\u4F1A\u7528\u5F02\u5E38
import { ref } from 'vue';

import dayjs from 'dayjs';
import updateLocale from 'dayjs/plugin/updateLocale';

dayjs.extend(updateLocale);

dayjs.updateLocale('zh-cn', {
  weekStart: 2,
});
const weekStart = ref(2);
<\/script>
`,M=`<template>
  <t-space direction="vertical">
    <t-date-picker v-model="date2" @change="handleChange" :firstDayOfWeek="3" :inputProps="inputProps" readonly />
    <t-date-picker
      v-model="date"
      placeholder="\u53EF\u6E05\u9664\u3001\u53EF\u8F93\u5165\u7684\u65E5\u671F\u9009\u62E9\u5668"
      clearable
      allow-input
      @change="handleChange"
    />
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      date: '',
      date2: '',
      inputProps: { inputClass: 'test-inputClass' },
    };
  },
  methods: {
    handleChange(value, context) {
      console.log('onChange:', value, context);
      console.log('timestamp:', context.dayjsValue.valueOf());
      console.log('YYYYMMDD:', context.dayjsValue.format('YYYYMMDD'));
    },
  },
};
<\/script>
`,_=`<template>
  <t-space direction="vertical">
    <t-date-picker v-model="date2" @change="handleChange" :firstDayOfWeek="3" :inputProps="inputProps" />
    <t-date-picker
      v-model="date"
      placeholder="\u53EF\u6E05\u9664\u3001\u53EF\u8F93\u5165\u7684\u65E5\u671F\u9009\u62E9\u5668"
      clearable
      allow-input
      @change="handleChange"
    />
  </t-space>
</template>

<script setup>
import { ref, reactive } from 'vue';

const date = ref('');
const date2 = ref('');
const inputProps = reactive({
  inputClass: 'test-inputClass',
});
const handleChange = (value, context) => {
  console.log('onChange:', value, context);
  console.log('timestamp:', context.dayjsValue.valueOf());
  console.log('YYYYMMDD:', context.dayjsValue.format('YYYYMMDD'));
};
<\/script>
`,V=`<template>
  <t-space direction="vertical">
    <t-date-picker v-model="date" placeholder="\u652F\u6301\u65E5\u671F\u7684\u591A\u9009" clearable multiple @change="handleChange" />
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      date: ['2024-01-04'],
    };
  },
  methods: {
    handleChange(value, context) {
      console.log('onChange:', value, context);
      console.log('timestamp:', context.dayjsValue.valueOf());
      console.log('YYYYMMDD:', context.dayjsValue.format('YYYYMMDD'));
    },
  },
};
<\/script>
`,I=`<template>
  <t-space direction="vertical">
    <t-date-picker v-model="date" placeholder="\u53EF\u6E05\u9664\u3001\u53EF\u8F93\u5165\u7684\u65E5\u671F\u9009\u62E9\u5668" clearable multiple @change="handleChange" />
  </t-space>
</template>

<script setup>
import { ref } from 'vue';

const date = ref(['2000-01-04', '2000-01-03', '2000-01-05']);
const handleChange = (value, context) => {
  console.log('onChange:', value, context);
  console.log('timestamp:', context.dayjsValue.valueOf());
  console.log('YYYYMMDD:', context.dayjsValue.format('YYYYMMDD'));
};
<\/script>
`,L=`<template>
  <t-space direction="vertical">
    <t-date-picker enable-time-picker allow-input clearable />
    <t-date-picker enable-time-picker allow-input clearable format="YYYY-MM-DD a hh:mm:ss" />
  </t-space>
</template>
`,B=`<template>
  <t-space direction="vertical">
    <t-date-picker enable-time-picker allow-input clearable />
    <t-date-picker enable-time-picker allow-input clearable format="YYYY-MM-DD a hh:mm:ss" />
  </t-space>
</template>
`,O=`<template>
  <t-space direction="vertical">
    <t-date-range-picker allow-input clearable @pick="onPick" @change="onChange" />
    <t-date-range-picker enable-time-picker allow-input clearable @pick="onPick" @change="onChange" />
  </t-space>
</template>

<script>
export default {
  methods: {
    onPick(value, context) {
      console.log('onPick:', value, context);
    },
    onChange(value, context) {
      console.log('onChange:', value, context);
      console.log(
        'timestamp:',
        context.dayjsValue.map((d) => d.valueOf()),
      );
      console.log(
        'YYYYMMDD:',
        context.dayjsValue.map((d) => d.format('YYYYMMDD')),
      );
    },
  },
};
<\/script>
`,S=`<template>
  <t-space direction="vertical">
    <t-date-range-picker allow-input clearable @pick="onPick" @change="onChange" />
    <t-date-range-picker enable-time-picker allow-input clearable @pick="onPick" @change="onChange" />
  </t-space>
</template>

<script setup>
const onPick = (value, context) => {
  console.log('onPick:', value, context);
};
const onChange = (value, context) => {
  console.log('onChange:', value, context);
  console.log(
    'timestamp:',
    context.dayjsValue.map((d) => d.valueOf()),
  );
  console.log(
    'YYYYMMDD:',
    context.dayjsValue.map((d) => d.format('YYYYMMDD')),
  );
};
<\/script>
`,q=`<template>
  <t-space direction="vertical">
    <t-date-range-picker v-model="range1" :presets="presets" />
    <t-date-range-picker v-model="range2" :presets="presets" enable-time-picker />
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      presets: {
        \u6700\u8FD17\u5929: [new Date(+new Date() - 86400000 * 6), new Date()],
        \u6700\u8FD13\u5929: [new Date(+new Date() - 86400000 * 2), new Date()],
        \u4ECA\u5929: [new Date(), new Date()],
      },
      range1: ['2022-01-01', '2022-08-08'],
      range2: ['2022-01-01 00:00:00', '2022-08-08 23:59:59'],
    };
  },
};
<\/script>
`,W=`<template>
  <t-space direction="vertical">
    <t-date-range-picker v-model="range1" :presets="presets" />
    <t-date-range-picker v-model="range2" :presets="presets" enable-time-picker />
  </t-space>
</template>

<script setup>
import { ref, reactive } from 'vue';

const presets = reactive({
  \u6700\u8FD17\u5929: [new Date(+new Date() - 86400000 * 6), new Date()],
  \u6700\u8FD13\u5929: [new Date(+new Date() - 86400000 * 2), new Date()],
  \u4ECA\u5929: [new Date(), new Date()],
});
const range1 = ref(['2022-01-01', '2022-08-08']);
const range2 = ref(['2022-01-01 00:00:00', '2022-08-08 23:59:59']);
<\/script>
`,R=`<template>
  <t-space direction="vertical">
    <t-date-picker
      placeholder="\u7981\u7528\u6628\u5929\u3001\u524D\u5929"
      :disable-date="[dayjs().subtract(1, 'day').format(), dayjs().subtract(2, 'day').format()]"
    />
    <t-date-picker
      placeholder="\u660E\u540E\u4E09\u5929\u7981\u7528"
      :disable-date="{
        from: dayjs().add(1, 'day').format(),
        to: dayjs().add(3, 'day').format(),
      }"
    />
    <t-date-picker placeholder="\u7981\u7528\u6240\u6709\u5468\u516D" :disable-date="(date) => dayjs(date).day() === 6" />
    <t-date-picker
      placeholder="\u7981\u7528\u6700\u8FD1 3 \u5929\u5916\u7684\u65E5\u671F"
      :disable-date="{
        before: dayjs().subtract(3, 'day').format(),
        after: dayjs().add(3, 'day').format(),
      }"
    />
    <t-date-picker
      placeholder="\u7981\u7528\u65E5\u671F\u7CBE\u786E\u5230\u65F6\u95F4"
      enable-time-picker
      :disable-date="{ before: dayjs().subtract(1, 'day').format() }"
      :disable-time="disableTime"
    />
    <t-date-range-picker
      placeholder="\u7981\u7528\u6700\u8FD1 5 \u5929\u5916\u7684\u65E5\u671F"
      :disable-date="{
        before: dayjs().subtract(5, 'day').format(),
        after: dayjs().add(5, 'day').format(),
      }"
    />
  </t-space>
</template>

<script>
import dayjs from 'dayjs';

export default {
  data() {
    return { dayjs };
  },
  methods: {
    disableTime: (time) => {
      if (dayjs(time).format('YYYY-MM-DD') === dayjs().format('YYYY-MM-DD')) {
        return {
          hour: [0, 1, 2, 3, 4, 5, 6],
        };
      }
      return {};
    },
  },
};
<\/script>
`,T=`<template>
  <t-space direction="vertical">
    <t-date-picker
      placeholder="\u7981\u7528\u6628\u5929\u3001\u524D\u5929"
      :disable-date="[dayjs().subtract(1, 'day').format(), dayjs().subtract(2, 'day').format()]"
    />
    <t-date-picker
      placeholder="\u660E\u540E\u4E09\u5929\u7981\u7528"
      :disable-date="{
        from: dayjs().add(1, 'day').format(),
        to: dayjs().add(3, 'day').format(),
      }"
    />
    <t-date-picker placeholder="\u7981\u7528\u6240\u6709\u5468\u516D" :disable-date="(date) => dayjs(date).day() === 6" />
    <t-date-picker
      placeholder="\u7981\u7528\u6700\u8FD1 3 \u5929\u5916\u7684\u65E5\u671F"
      :disable-date="{
        before: dayjs().subtract(3, 'day').format(),
        after: dayjs().add(3, 'day').format(),
      }"
    />
    <t-date-picker
      placeholder="\u7981\u7528\u65E5\u671F\u7CBE\u786E\u5230\u65F6\u95F4"
      enable-time-picker
      :disable-date="{ before: dayjs().subtract(1, 'day').format() }"
      :disable-time="disableTime"
    />
    <t-date-range-picker
      placeholder="\u7981\u7528\u6700\u8FD1 5 \u5929\u5916\u7684\u65E5\u671F"
      :disable-date="{
        before: dayjs().subtract(5, 'day').format(),
        after: dayjs().add(5, 'day').format(),
      }"
    />
  </t-space>
</template>

<script setup>
import dayjs from 'dayjs';

const disableTime = (time) => {
  if (dayjs(time).format('YYYY-MM-DD') === dayjs().format('YYYY-MM-DD')) {
    return {
      hour: [0, 1, 2, 3, 4, 5, 6],
    };
  }
  return {};
};
<\/script>
`,z=`<template>
  <t-space direction="vertical">
    <t-radio-group v-model="startWeek" variant="default-filled">
      <t-radio-button v-for="i in list" :key="i" :value="i">{{ i }}</t-radio-button>
    </t-radio-group>

    <t-date-picker :first-day-of-week="startWeek" />
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      startWeek: 1,
      list: [1, 2, 3, 4, 5, 6, 7],
    };
  },
};
<\/script>
`,A=`<template>
  <t-space direction="vertical">
    <t-radio-group v-model="startWeek" variant="default-filled">
      <t-radio-button v-for="i in list" :key="i" :value="i">{{ i }}</t-radio-button>
    </t-radio-group>

    <t-date-picker :first-day-of-week="startWeek" />
  </t-space>
</template>

<script setup>
import { ref } from 'vue';

const startWeek = ref(1);
const list = ref([1, 2, 3, 4, 5, 6, 7]);
<\/script>
`,$=`<template>
  <t-space direction="vertical">
    <t-date-picker clearable :prefix-icon="renderPrefixIcon">
      <template #suffixIcon>
        <lock-on-icon />
      </template>
    </t-date-picker>
  </t-space>
</template>

<script lang="jsx">
import { BrowseIcon, LockOnIcon } from 'tdesign-icons-vue';

export default {
  components: {
    LockOnIcon,
  },
  data() {
    return {
      renderPrefixIcon: () => <BrowseIcon />,
    };
  },
};
<\/script>
`,J=`<template>
  <t-space direction="vertical">
    <t-date-picker clearable :prefix-icon="renderPrefixIcon">
      <template #suffixIcon>
        <lock-on-icon />
      </template>
    </t-date-picker>
  </t-space>
</template>

<script setup lang="jsx">
import { ref } from 'vue';
import { BrowseIcon, LockOnIcon } from 'tdesign-icons-vue';

const renderPrefixIcon = ref(() => <BrowseIcon />);
<\/script>
`,U=`<template>
  <t-space direction="vertical">
    <div class="date-picker-panel-border">
      <t-date-picker-panel @panel-click="handlePanelClick" @cell-click="handleCellClick" :on-change="handleChange" />
    </div>
    <div class="date-picker-panel-border">
      <t-date-picker-panel
        enable-time-picker
        @panel-click="handlePanelClick"
        @cell-click="handleCellClick"
        :on-change="handleChange"
      />
    </div>

    <div class="date-picker-panel-border">
      <t-date-range-picker-panel
        @panel-click="handlePanelClick"
        @cell-click="handleCellClick"
        :on-change="handleChange"
        :value="['2022-02-16', '2022-02-21']"
      />
    </div>
    <div class="date-picker-panel-border">
      <t-date-range-picker-panel
        enable-time-picker
        @panel-click="handlePanelClick"
        @cell-click="handleCellClick"
        :on-change="handleChange"
      />
    </div>
  </t-space>
</template>

<script>
export default {
  methods: {
    handleChange(value) {
      console.log('onChange value', value);
    },
    handleCellClick(value) {
      console.log('onCellClick value', value);
    },
    handlePanelClick(ctx) {
      console.log('onPanelClick', ctx);
    },
  },
};
<\/script>

<style>
.date-picker-panel-border {
  border: 1px solid var(--td-border-level-2-color);
  width: fit-content;
  border-radius: 3;
}
</style>
`,E=`<template>
  <t-space direction="vertical">
    <div class="date-picker-panel-border">
      <t-date-picker-panel @panel-click="handlePanelClick" @cell-click="handleCellClick" :on-change="handleChange" />
    </div>
    <div class="date-picker-panel-border">
      <t-date-picker-panel
        enable-time-picker
        @panel-click="handlePanelClick"
        @cell-click="handleCellClick"
        :on-change="handleChange"
      />
    </div>

    <div class="date-picker-panel-border">
      <t-date-range-picker-panel
        @panel-click="handlePanelClick"
        @cell-click="handleCellClick"
        :on-change="handleChange"
        :value="['2022-02-16', '2022-02-21']"
      />
    </div>
    <div class="date-picker-panel-border">
      <t-date-range-picker-panel
        enable-time-picker
        @panel-click="handlePanelClick"
        @cell-click="handleCellClick"
        :on-change="handleChange"
      />
    </div>
  </t-space>
</template>

<script setup>
const handleChange = (value) => {
  console.log('onChange value', value);
};
const handleCellClick = (value) => {
  console.log('onCellClick value', value);
};
const handlePanelClick = (ctx) => {
  console.log('onPanelClick', ctx);
};
<\/script>

<style>
.date-picker-panel-border {
  border: 1px solid var(--td-border-level-2-color);
  width: fit-content;
  border-radius: 3;
}
</style>
`,F=`<template>
  <t-space direction="vertical">
    <t-date-range-picker v-model="range" cancel-range-select-limit />
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      range: ['', ''],
    };
  },
};
<\/script>
`,G=`<template>
  <t-space direction="vertical">
    <t-date-range-picker v-model="range" cancel-range-select-limit />
  </t-space>
</template>

<script setup>
import { ref } from 'vue';

const range = ref(['', '']);
<\/script>
`,i=[{name:"allowInput",type:"Boolean",defaultValue:!1,options:[]},{name:"borderless",type:"Boolean",defaultValue:!1,options:[]},{name:"clearable",type:"Boolean",defaultValue:!1,options:[]},{name:"disabled",type:"Boolean",defaultValue:!1,options:[]},{name:"enableTimePicker",type:"Boolean",defaultValue:!1,options:[]},{name:"mode",type:"enum",defaultValue:"date",options:[{label:"year",value:"year"},{label:"quarter",value:"quarter"},{label:"month",value:"month"},{label:"week",value:"week"},{label:"date",value:"date"}]},{name:"presetsPlacement",type:"enum",defaultValue:"bottom",options:[{label:"left",value:"left"},{label:"top",value:"top"},{label:"right",value:"right"},{label:"bottom",value:"bottom"}]}],v=[{name:"allowInput",type:"Boolean",defaultValue:!1,options:[]},{name:"borderless",type:"Boolean",defaultValue:!1,options:[]},{name:"clearable",type:"Boolean",defaultValue:!1,options:[]},{name:"disabled",type:"Boolean",defaultValue:!1,options:[]},{name:"enableTimePicker",type:"Boolean",defaultValue:!1,options:[]},{name:"mode",type:"enum",defaultValue:"date",options:[{label:"year",value:"year"},{label:"quarter",value:"quarter"},{label:"month",value:"month"},{label:"week",value:"week"},{label:"date",value:"date"}]},{name:"presetsPlacement",type:"enum",defaultValue:"bottom",options:[{label:"left",value:"left"},{label:"top",value:"top"},{label:"right",value:"right"},{label:"bottom",value:"bottom"}]}];const p={};p.setup=(e,l)=>{const a=c(i),n=[{label:"datePicker",value:"datePicker",config:i},{label:"dateRangePicker",value:"dateRangePicker",config:v}],t={datePicker:'<t-date-picker v-bind="configProps" />',dateRangePicker:'<t-date-range-picker v-bind="configProps" />'},o=c(`<template>${t[n[0].value].trim()}</template>`);function u(r){a.value=n.find(k=>k.value===r).config,o.value=`<template>${t[r].trim()}</template>`}return{configList:a,panelList:n,usageCode:o,onPanelChange:u}};var s=function(){var e=this,l=e.$createElement,a=e._self._c||l;return a("base-usage",{attrs:{code:e.usageCode,"config-list":e.configList,"panel-list":e.panelList},on:{PanelChange:e.onPanelChange},scopedSlots:e._u([{key:"datePicker",fn:function(n){var t=n.configProps;return[a("t-date-picker",e._b({},"t-date-picker",t,!1))]}},{key:"dateRangePicker",fn:function(n){var t=n.configProps;return[a("t-date-range-picker",e._b({},"t-date-range-picker",t,!1))]}}])})},g=[];s._withStripped=!0;const d={};var m=f(p,s,g,!1,h,null,null,null);function h(e){for(let l in d)this[l]=d[l]}m.options.__file="../src/date-picker/_usage/index.vue";var H=function(){return m.exports}();export{G as A,C as D,H as U,y as a,x as b,D as c,w as d,Y as e,j as f,P as g,M as h,_ as i,V as j,I as k,L as l,B as m,O as n,S as o,q as p,W as q,R as r,T as s,z as t,A as u,$ as v,J as w,U as x,E as y,F as z};
