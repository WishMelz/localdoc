import{Y as r,n as f}from"./index.663c003f.js";var C=`<template>
  <t-time-picker v-model="value" @change="timechange" @open="open" @close="close" @pick="pick" />
</template>

<script>
export default {
  name: 'hms',
  data() {
    return {
      value: '12:20:30',
    };
  },
  methods: {
    timechange(time) {
      console.log(time);
    },
    open() {
      console.log('open');
    },
    close() {
      console.log('close');
    },
    pick(v) {
      console.log(v);
    },
  },
};
<\/script>
`,x=`<template>
  <t-time-picker v-model="value" @change="timechange" @open="open" @close="close" @pick="pick" />
</template>

<script setup>
import { ref } from 'vue';

const value = ref('12:20:30');
const timechange = (time) => {
  console.log(time);
};
const open = () => {
  console.log('open');
};
const close = () => {
  console.log('close');
};
const pick = (v) => {
  console.log(v);
};
<\/script>
`,P=`<template>
  <t-space direction="vertical">
    <h3>\u65F6\u5206\u9009\u62E9</h3>
    <t-time-picker format="HH:mm" />
    <h3>\u6BEB\u79D2\u9009\u62E9</h3>
    <t-time-picker default-value="12:59:59:000" format="HH:mm:ss:SSS" />
  </t-space>
</template>
`,y=`<template>
  <t-space direction="vertical">
    <h3>\u65F6\u5206\u9009\u62E9</h3>
    <t-time-picker format="HH:mm" />
    <h3>\u6BEB\u79D2\u9009\u62E9</h3>
    <t-time-picker default-value="12:59:59:000" format="HH:mm:ss:SSS" />
  </t-space>
</template>
`,_=`<template>
  <t-time-picker :steps="[1, 2, 3]" />
</template>
`,D=`<template>
  <t-time-picker :steps="[1, 2, 3]" />
</template>
`,w=`<template>
  <t-time-picker v-model="value" format="A hh:mm:ss" placeholder="\u9009\u62E9\u65F6\u95F4" />
</template>

<script>
export default {
  name: 'twelveHours',
  data() {
    return {
      value: 'PM 10:20:30',
    };
  },
};
<\/script>
`,V=`<template>
  <t-time-picker v-model="value" format="A hh:mm:ss" placeholder="\u9009\u62E9\u65F6\u95F4" />
</template>

<script setup>
import { ref } from 'vue';

const value = ref('PM 10:20:30');
<\/script>
`,H=`<template>
  <t-space>
    <t-time-range-picker class="demos" clearable v-model="time" format="HH:mm:ss" allow-input @pick="handleRangePick" />
  </t-space>
</template>

<script>
export default {
  name: 'timeRange',
  data() {
    return {
      time: ['00:00:00', '23:59:59'],
    };
  },
  methods: {
    handleRangePick(v) {
      console.log('picked range time is', v);
    },
  },
};
<\/script>
`,B=`<template>
  <t-space>
    <t-time-range-picker class="demos" clearable v-model="time" format="HH:mm:ss" allow-input @pick="handleRangePick" />
  </t-space>
</template>

<script setup>
import { ref } from 'vue';

const time = ref(['00:00:00', '23:59:59']);
const handleRangePick = (v) => {
  console.log('picked range time is', v);
};
<\/script>
`,R=`<template>
  <t-space direction="vertical">
    <h3>\u5141\u8BB8\u8F93\u5165</h3>
    <t-time-picker v-model="time1" allowInput @blur="blur" @focus="focus" />
    <h3>\u7981\u6B62\u8F93\u5165</h3>
    <t-time-picker v-model="time2" :allowInput="false" />
  </t-space>
</template>

<script>
export default {
  name: 'canInput',
  data() {
    return {
      time1: '20:22:33',
      time2: '22:22:22',
    };
  },
  methods: {
    blur(v) {
      console.log('blur');
      console.log(v);
    },
    focus(v) {
      console.log('focus');
      console.log(v);
    },
  },
};
<\/script>
`,S=`<template>
  <t-space direction="vertical">
    <h3>\u5141\u8BB8\u8F93\u5165</h3>
    <t-time-picker v-model="time1" allowInput @blur="blur" @focus="focus" />
    <h3>\u7981\u6B62\u8F93\u5165</h3>
    <t-time-picker v-model="time2" :allowInput="false" />
  </t-space>
</template>

<script setup>
import { ref } from 'vue';

const time1 = ref('20:22:33');
const time2 = ref('22:22:22');
const blur = (v) => {
  console.log('blur');
  console.log(v);
};
const focus = (v) => {
  console.log('focus');
  console.log(v);
};
<\/script>
`,T=`<template>
  <t-space direction="vertical">
    <h3>\u5177\u5907\u6E05\u7A7A\u6309\u94AE</h3>
    <t-time-picker v-model="time1" clearable />
    <h3>\u7981\u6B62\u6E05\u7A7A\u6309\u94AE</h3>
    <t-time-picker :clearable="false" />
  </t-space>
</template>

<script>
export default {
  name: 'clearable',
  data() {
    return {
      time1: '11:12:10',
    };
  },
};
<\/script>
`,I=`<template>
  <t-space direction="vertical">
    <h3>\u5177\u5907\u6E05\u7A7A\u6309\u94AE</h3>
    <t-time-picker v-model="time1" clearable />
    <h3>\u7981\u6B62\u6E05\u7A7A\u6309\u94AE</h3>
    <t-time-picker :clearable="false" />
  </t-space>
</template>

<script setup>
import { ref } from 'vue';

const time1 = ref('11:12:10');
<\/script>
`,q=`<template>
  <t-space direction="vertical">
    <h3>\u7981\u7528\u6574\u4E2A\u9009\u62E9\u5668</h3>
    <t-time-picker v-model="time1" :disabled="true" />
    <h3>\u7981\u7528\u6307\u5B9A\u65F6\u95F4</h3>
    <t-time-picker :disable-time="disableTime" />
    <h3>\u7981\u7528\u6307\u5B9A\u65F6\u95F4 \u540C\u65F6\u5C55\u793A\u7981\u7528\u7684\u65F6\u95F4\u9009\u9879</h3>
    <t-time-picker :disable-time="disableTime" :hideDisabledTime="false" />
  </t-space>
</template>

<script>
export default {
  name: 'Disabled',
  data() {
    return {
      time1: '11:12:10',
    };
  },
  methods: {
    disableTime(h) {
      const disableHour = [1, 2, 3];
      if (h > 4) {
        return {
          hour: disableHour,
          minute: [30, 31, 32, 33, 34],
        };
      }
      return {
        hour: disableHour,
      };
    },
  },
};
<\/script>
`,L=`<template>
  <t-space direction="vertical">
    <h3>\u7981\u7528\u6574\u4E2A\u9009\u62E9\u5668</h3>
    <t-time-picker v-model="time1" :disabled="true" />
    <h3>\u7981\u7528\u6307\u5B9A\u65F6\u95F4</h3>
    <t-time-picker :disable-time="disableTime" />
    <h3>\u7981\u7528\u6307\u5B9A\u65F6\u95F4 \u540C\u65F6\u5C55\u793A\u7981\u7528\u7684\u65F6\u95F4\u9009\u9879</h3>
    <t-time-picker :disable-time="disableTime" :hideDisabledTime="false" />
  </t-space>
</template>

<script setup>
import { ref } from 'vue';

const time1 = ref('11:12:10');
const disableTime = (h) => {
  const disableHour = [1, 2, 3];
  if (h > 4) {
    return {
      hour: disableHour,
      minute: [30, 31, 32, 33, 34],
    };
  }
  return {
    hour: disableHour,
  };
};
<\/script>
`,M=`<template>
  <t-space direction="vertical">
    <t-radio-group v-model="usage" variant="default-filled">
      <t-radio-button value="single">\u5355\u72EC\u4F7F\u7528\u9762\u677F</t-radio-button>
      <t-radio-button value="combine">\u7EC4\u5408\u5176\u4ED6\u7EC4\u4EF6\u4F7F\u7528</t-radio-button>
    </t-radio-group>
    <t-time-picker-panel :value="value" @change="handleChange" v-if="usage === 'single'" />
    <t-popup v-else>
      <t-input :style="{ width: '200px' }" :value="inputValue" readonly placeholder="\u914D\u5408\u8F93\u5165\u6846\u7EC4\u4EF6\u7EC4\u5408\u4F7F\u7528"></t-input>
      <t-time-picker-panel slot="content" :value="value" @change="handleChange" />
    </t-popup>
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      usage: 'single',
      value: '11:11:11',
      inputValue: '',
    };
  },
  methods: {
    handleChange(v) {
      this.value = v;
      this.inputValue = v;
    },
  },
};
<\/script>
`,$=`<template>
  <t-space direction="vertical">
    <t-radio-group v-model="usage" variant="default-filled">
      <t-radio-button value="single">\u5355\u72EC\u4F7F\u7528\u9762\u677F</t-radio-button>
      <t-radio-button value="combine">\u7EC4\u5408\u5176\u4ED6\u7EC4\u4EF6\u4F7F\u7528</t-radio-button>
    </t-radio-group>
    <t-time-picker-panel :value="value" @change="handleChange" v-if="usage === 'single'" />
    <t-popup v-else>
      <t-input :style="{ width: '200px' }" :value="inputValue" readonly placeholder="\u914D\u5408\u8F93\u5165\u6846\u7EC4\u4EF6\u7EC4\u5408\u4F7F\u7528"></t-input>
      <t-time-picker-panel slot="content" :value="value" @change="handleChange" />
    </t-popup>
  </t-space>
</template>
<script setup>
import { ref } from 'vue';

const usage = ref('single');
const value = ref('11:11:11');
const inputValue = ref('');
const handleChange = (v) => {
  value.value = v;
  inputValue.value = v;
};
<\/script>
`,s=[{name:"allowInput",type:"Boolean",defaultValue:!1,options:[]},{name:"borderless",type:"Boolean",defaultValue:!1,options:[]},{name:"clearable",type:"Boolean",defaultValue:!1,options:[]},{name:"disabled",type:"Boolean",defaultValue:!1,options:[]},{name:"enableTimePicker",type:"Boolean",defaultValue:!1,options:[]},{name:"mode",type:"enum",defaultValue:"date",options:[{label:"year",value:"year"},{label:"quarter",value:"quarter"},{label:"month",value:"month"},{label:"week",value:"week"},{label:"date",value:"date"}]},{name:"presetsPlacement",type:"enum",defaultValue:"bottom",options:[{label:"left",value:"left"},{label:"top",value:"top"},{label:"right",value:"right"},{label:"bottom",value:"bottom"}]}],h=[{name:"allowInput",type:"Boolean",defaultValue:!1,options:[]},{name:"autoSwap",type:"Boolean",defaultValue:!0,options:[]},{name:"borderless",type:"Boolean",defaultValue:!1,options:[]},{name:"clearable",type:"Boolean",defaultValue:!1,options:[]},{name:"disabled",type:"Boolean",defaultValue:!1,options:[]},{name:"enableTimePicker",type:"Boolean",defaultValue:!1,options:[]},{name:"mode",type:"enum",defaultValue:"date",options:[{label:"year",value:"year"},{label:"quarter",value:"quarter"},{label:"month",value:"month"},{label:"week",value:"week"},{label:"date",value:"date"}]},{name:"presetsPlacement",type:"enum",defaultValue:"bottom",options:[{label:"left",value:"left"},{label:"top",value:"top"},{label:"right",value:"right"},{label:"bottom",value:"bottom"}]}];const m={};m.setup=(e,l)=>{const t=r(s),n=[{label:"timePicker",value:"timePicker",config:s},{label:"timeRangePicker",value:"timeRangePicker",config:h}],a={timePicker:'<t-time-picker v-bind="configProps" />',timeRangePicker:'<t-time-range-picker v-bind="configProps" />'},o=r(`<template>${a[n[0].value].trim()}</template>`);function d(i){t.value=n.find(v=>v.value===i).config,o.value=`<template>${a[i].trim()}</template>`}return{configList:t,panelList:n,usageCode:o,onPanelChange:d}};var c=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("base-usage",{attrs:{code:e.usageCode,"config-list":e.configList,"panel-list":e.panelList},on:{PanelChange:e.onPanelChange},scopedSlots:e._u([{key:"timePicker",fn:function(n){var a=n.configProps;return[t("t-time-picker",e._b({},"t-time-picker",a,!1))]}},{key:"timeRangePicker",fn:function(n){var a=n.configProps;return[t("t-time-range-picker",e._b({},"t-time-range-picker",a,!1))]}}])})},g=[];c._withStripped=!0;const p={};var u=f(m,c,g,!1,b,null,null,null);function b(e){for(let l in p)this[l]=p[l]}u.options.__file="../src/time-picker/_usage/index.vue";var j=function(){return u.exports}();export{C as D,j as U,x as a,P as b,y as c,_ as d,D as e,w as f,V as g,H as h,B as i,R as j,S as k,T as l,I as m,q as n,L as o,M as p,$ as q};
