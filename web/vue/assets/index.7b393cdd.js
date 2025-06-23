import{Y as r,n as u}from"./index.663c003f.js";var g=`<template>
  <t-calendar />
</template>
`,y=`<template>
  <t-calendar />
</template>
`,w=`<template>
  <t-space direction="vertical" size="large">
    <t-space size="small" align="center">
      <label>\u8BF7\u9009\u62E9\u98CE\u683C\uFF1A</label>
      <t-select v-model="theme">
        <t-option v-for="item in options" :key="item.value" :value="item.value" :label="item.label" />
      </t-select>
      <t-button theme="primary" @click="toCurrent()"> \u4ECA\u5929\uFF08\u5F53\u524D\u9AD8\u4EAE\u65E5\u671F\uFF09 </t-button>
    </t-space>
    <div>
      <label>\u65E5\u671F\u8865\u96F6\uFF1A</label>
      <t-switch v-model="fillWithZero" size="large" />
    </div>
    <t-calendar ref="myCalendar" :theme="theme" :is-show-weekend-default="true" :fill-with-zero="fillWithZero" />
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      theme: 'card',
      fillWithZero: true,
      options: [
        { value: 'full', label: '\u5168\u5C4F\u98CE\u683C' },
        { value: 'card', label: '\u5361\u7247\u98CE\u683C' },
      ],
    };
  },
  methods: {
    toCurrent() {
      if (this.$refs.myCalendar) {
        this.$refs.myCalendar.toCurrent();
      }
    },
  },
};
<\/script>

<style scoped>
.demo-select-base {
  width: 200px;
  display: inline-block;
  margin: 0 10px 0 0;
}
</style>
`,C=`<template>
  <t-space direction="vertical" size="large">
    <t-space size="small" align="center">
      <label>\u8BF7\u9009\u62E9\u98CE\u683C\uFF1A</label>
      <t-select v-model="theme">
        <t-option v-for="item in options" :key="item.value" :value="item.value" :label="item.label" />
      </t-select>
      <t-button theme="primary" @click="toCurrent()"> \u4ECA\u5929\uFF08\u5F53\u524D\u9AD8\u4EAE\u65E5\u671F\uFF09 </t-button>
    </t-space>
    <div>
      <label>\u65E5\u671F\u8865\u96F6\uFF1A</label>
      <t-switch v-model="fillWithZero" size="large" />
    </div>
    <t-calendar ref="myCalendar" :theme="theme" :is-show-weekend-default="true" :fill-with-zero="fillWithZero" />
  </t-space>
</template>

<script setup>
import { ref } from 'vue';

const myCalendar = ref();
const theme = ref('card');
const fillWithZero = ref(true);
const options = ref([
  {
    value: 'full',
    label: '\u5168\u5C4F\u98CE\u683C',
  },
  {
    value: 'card',
    label: '\u5361\u7247\u98CE\u683C',
  },
]);
const toCurrent = () => {
  if (myCalendar.value) {
    myCalendar.value.toCurrent();
  }
};
<\/script>

<style scoped>
.demo-select-base {
  width: 200px;
  display: inline-block;
  margin: 0 10px 0 0;
}
</style>
`,x=`<template>
  <t-space direction="vertical">
    <t-form layout="inline">
      <t-form-item label="\u81EA\u5DF1\u6307\u5B9A\u5E74\uFF1A">
        <t-input v-model="year" />
      </t-form-item>
      <t-form-item label="\u81EA\u5DF1\u6307\u5B9A\u5E74\u6708\uFF1A">
        <t-input v-model="month" />
      </t-form-item>
    </t-form>

    <h2>\u5355\u4E2A\u9AD8\u4EAE\u65E5\u671F</h2>
    <t-calendar :value="value" :year="year" :month="month" />

    <br />

    <h2>\u591A\u4E2A\u9AD8\u4EAE\u65E5\u671F</h2>
    <!-- \u8FD9\u91CC\u8BF7\u6CE8\u610F multiple \u5C5E\u6027\uFF08\u9700\u8981\u8BBE\u4E3A true\uFF09 -->
    <t-calendar multiple :value="valueList" :year="year" :month="month" />
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      year: '1998',
      month: '11',
      value: '1998-11-11', // new Date(1998, 10, 11)
      valueList: ['1998-10-27', '1998-11-11', '1998-11-12', '1998-11-13', '1998-12-05'],
    };
  },
};
<\/script>
`,k=`<template>
  <t-space direction="vertical">
    <t-form layout="inline">
      <t-form-item label="\u81EA\u5DF1\u6307\u5B9A\u5E74\uFF1A">
        <t-input v-model="year" />
      </t-form-item>
      <t-form-item label="\u81EA\u5DF1\u6307\u5B9A\u5E74\u6708\uFF1A">
        <t-input v-model="month" />
      </t-form-item>
    </t-form>

    <h2>\u5355\u4E2A\u9AD8\u4EAE\u65E5\u671F</h2>
    <t-calendar :value="value" :year="year" :month="month" />

    <br />

    <h2>\u591A\u4E2A\u9AD8\u4EAE\u65E5\u671F</h2>
    <!-- \u8FD9\u91CC\u8BF7\u6CE8\u610F multiple \u5C5E\u6027\uFF08\u9700\u8981\u8BBE\u4E3A true\uFF09 -->
    <t-calendar multiple :value="valueList" :year="year" :month="month" />
  </t-space>
</template>

<script setup>
import { ref } from 'vue';

const year = ref('1998');
const month = ref('11');
const value = ref('1998-11-11');
// new Date(1998, 10, 11)
const valueList = ref(['1998-10-27', '1998-11-11', '1998-11-12', '1998-11-13', '1998-12-05']);
<\/script>
`,D=`<template>
  <t-space direction="vertical">
    <t-select v-model="mode" class="demo-select-base">
      <t-option v-for="item in options" :key="item.value" :value="item.value" :label="item.label" />
    </t-select>
    <t-calendar :mode="mode"></t-calendar>
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      mode: 'year',
      options: [
        { value: 'month', label: '\u65E5\u5386' },
        { value: 'year', label: '\u6708\u5386' },
      ],
    };
  },
};
<\/script>

<style scoped>
.demo-select-base {
  width: 200px;
  display: inline-block;
  margin: 0 10px 0 0;
}
</style>
`,W=`<template>
  <t-space direction="vertical">
    <t-select v-model="mode" class="demo-select-base">
      <t-option v-for="item in options" :key="item.value" :value="item.value" :label="item.label" />
    </t-select>
    <t-calendar :mode="mode"></t-calendar>
  </t-space>
</template>

<script setup>
import { ref } from 'vue';

const mode = ref('year');
const options = ref([
  {
    value: 'month',
    label: '\u65E5\u5386',
  },
  {
    value: 'year',
    label: '\u6708\u5386',
  },
]);
<\/script>

<style scoped>
.demo-select-base {
  width: 200px;
  display: inline-block;
  margin: 0 10px 0 0;
}
</style>
`,z=`<template>
  <t-space direction="vertical">
    <t-space size="small" align="center">
      <label>\u65E5\u5386\u7684\u7B2C\u4E00\u5217\u4E3A\uFF1A</label>
      <t-select v-model="firstDayOfWeek" class="demo-select-base">
        <t-option v-for="item in options" :key="item.value" :value="item.value" :label="item.label" />
      </t-select>
    </t-space>
    <t-calendar :firstDayOfWeek="firstDayOfWeek"></t-calendar>
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      firstDayOfWeek: 3,
      options: [
        { value: 1, label: '\u5468\u4E00' },
        { value: 2, label: '\u5468\u4E8C' },
        { value: 3, label: '\u5468\u4E09' },
        { value: 4, label: '\u5468\u56DB' },
        { value: 5, label: '\u5468\u4E94' },
        { value: 6, label: '\u5468\u516D' },
        { value: 7, label: '\u5468\u65E5' },
      ],
    };
  },
};
<\/script>

<style scoped>
.demo-select-base {
  width: 200px;
  display: inline-block;
  margin: 0 10px 0 0;
}
</style>
`,P=`<template>
  <t-space direction="vertical">
    <t-space size="small" align="center">
      <label>\u65E5\u5386\u7684\u7B2C\u4E00\u5217\u4E3A\uFF1A</label>
      <t-select v-model="firstDayOfWeek" class="demo-select-base">
        <t-option v-for="item in options" :key="item.value" :value="item.value" :label="item.label" />
      </t-select>
    </t-space>
    <t-calendar :firstDayOfWeek="firstDayOfWeek"></t-calendar>
  </t-space>
</template>

<script setup>
import { ref } from 'vue';

const firstDayOfWeek = ref(3);
const options = ref([
  {
    value: 1,
    label: '\u5468\u4E00',
  },
  {
    value: 2,
    label: '\u5468\u4E8C',
  },
  {
    value: 3,
    label: '\u5468\u4E09',
  },
  {
    value: 4,
    label: '\u5468\u56DB',
  },
  {
    value: 5,
    label: '\u5468\u4E94',
  },
  {
    value: 6,
    label: '\u5468\u516D',
  },
  {
    value: 7,
    label: '\u5468\u65E5',
  },
]);
<\/script>

<style scoped>
.demo-select-base {
  width: 200px;
  display: inline-block;
  margin: 0 10px 0 0;
}
</style>
`,j=`<template>
  <div class="controllerConfig-demo">
    <div v-if="controllerConfig" style="margin: 12px 0">
      <fieldset>
        <legend>\u63A7\u4EF6\u5168\u5C40</legend>
        <p>
          <label>\u662F\u5426\u663E\u793A\uFF08\u5168\u90E8\u63A7\u4EF6\uFF09\uFF1A</label>
          <t-switch v-model="controllerConfig.visible"></t-switch>
        </p>
        <p>
          <label>\u662F\u5426\u7981\u7528\uFF08\u5168\u90E8\u63A7\u4EF6\uFF09\uFF1A</label>
          <t-switch v-model="controllerConfig.disabled"></t-switch>
        </p>
      </fieldset>

      <fieldset>
        <legend>\u63A7\u4EF6\u5C40\u90E8</legend>
        <p>
          <label>\u662F\u5426\u663E\u793A\u201C\u5E74\u4EFD\u9009\u62E9\u201D\u63A7\u4EF6\uFF1A</label>
          <t-switch v-model="controllerConfig.year.visible"></t-switch>
          <label>\u662F\u5426\u7981\u7528\u201C\u5E74\u4EFD\u9009\u62E9\u201D\u63A7\u4EF6\uFF1A</label>
          <t-switch v-model="controllerConfig.year.selectProps.disabled"></t-switch>
        </p>
        <p>
          <label>\u662F\u5426\u663E\u793A\u201C\u6708\u4EFD\u9009\u62E9\u201D\u63A7\u4EF6\uFF1A</label>
          <t-switch v-model="controllerConfig.month.visible"></t-switch>
          <label>\u662F\u5426\u7981\u7528\u201C\u6708\u4EFD\u9009\u62E9\u201D\u63A7\u4EF6\uFF1A</label>
          <t-switch v-model="controllerConfig.month.selectProps.disabled"></t-switch>
        </p>
        <p>
          <label>\u662F\u5426\u663E\u793A\u201C\u6A21\u5F0F\u5207\u6362\u201D\u63A7\u4EF6\uFF1A</label>
          <t-switch v-model="controllerConfig.mode.visible"></t-switch>
          <label>\u662F\u5426\u7981\u7528\u201C\u6A21\u5F0F\u5207\u6362\u201D\u63A7\u4EF6\uFF1A</label>
          <t-switch v-model="controllerConfig.mode.radioGroupProps.disabled"></t-switch>
        </p>
        <p>
          <label>\u662F\u5426\u7981\u7528\u201C\u9690\u85CF\u5468\u672B\u201D\u63A7\u4EF6\uFF1A</label>
          <t-switch v-model="controllerConfig.weekend.hideWeekendButtonProps.disabled"></t-switch>
          <label>\u662F\u5426\u7981\u7528\u201C\u663E\u793A\u5468\u672B\u201D\u63A7\u4EF6\uFF1A</label>
          <t-switch v-model="controllerConfig.weekend.showWeekendButtonProps.disabled"></t-switch>
          <label>\u662F\u5426\u663E\u793A\u201C\u9690\u85CF\\\u663E\u793A\u5468\u672B\u201D\u63A7\u4EF6\uFF1A</label>
          <t-switch v-model="controllerConfig.weekend.visible"></t-switch>
        </p>
        <p>
          <label>\u662F\u5426\u7981\u7528\u201C\u4ECA\u5929\u201D\u6309\u94AE\u63A7\u4EF6\uFF1A</label>
          <t-switch v-model="controllerConfig.current.currentDayButtonProps.disabled"></t-switch>
          <label>\u662F\u5426\u7981\u7528\u201C\u672C\u6708\u201D\u6309\u94AE\u63A7\u4EF6\uFF1A</label>
          <t-switch v-model="controllerConfig.current.currentMonthButtonProps.disabled"></t-switch>
          <label>\u662F\u5426\u663E\u793A\u201C\u4ECA\u5929\\\u672C\u6708\u201D\u63A7\u4EF6\uFF1A</label>
          <t-switch v-model="controllerConfig.current.visible"></t-switch>
        </p>
      </fieldset>
    </div>
    <t-calendar :controllerConfig="controllerConfig.visible ? controllerConfig : false"></t-calendar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      controllerConfig: {
        visible: true,
        disabled: false, // \u662F\u5426\u7981\u7528\uFF08\u5168\u90E8\u63A7\u4EF6\uFF09
        // \u5E74\u4EFD\u9009\u62E9\u6846\u7EC4\u4EF6\u76F8\u5173\u8BBE\u7F6E
        year: {
          visible: true, // \u662F\u5426\u663E\u793A
          selectProps: {
            // \u7528\u4E8E\u900F\u4F20props\u7ED9\u8BE5select\u7EC4\u4EF6
            disabled: false,
            size: 'small',
          },
        },
        // \u6708\u4EFD\u9009\u62E9\u6846\u7EC4\u4EF6\u76F8\u5173\u8BBE\u7F6E
        month: {
          visible: true, // \u662F\u5426\u663E\u793A\uFF08\u201Cyear\u201D\u6A21\u5F0F\u4E0B\u672C\u8EAB\u662F\u4E0D\u663E\u793A\u8BE5\u7EC4\u4EF6\u7684\uFF09
          selectProps: {
            // \u7528\u4E8E\u900F\u4F20props\u7ED9\u8BE5select\u7EC4\u4EF6
            disabled: false,
            size: 'small',
          },
        },
        // \u6A21\u5F0F\u5207\u6362\u5355\u9009\u7EC4\u4EF6\u8BBE\u7F6E
        mode: {
          visible: true, // \u662F\u5426\u663E\u793A
          radioGroupProps: {
            disabled: false,
            size: 'small',
          },
        },
        // \u9690\u85CF\\\u663E\u793A\u5468\u672B\u6309\u94AE\u7EC4\u4EF6\u76F8\u5173\u8BBE\u7F6E
        weekend: {
          visible: true, // \u662F\u5426\u663E\u793A
          showWeekendButtonProps: {
            // \u7528\u4E8E\u900F\u4F20props\u7ED9\u663E\u793A\u5468\u672B\u6309\u94AE\u7EC4\u4EF6
            disabled: false,
            size: 'medium',
          },
          hideWeekendButtonProps: {
            // \u7528\u4E8E\u900F\u4F20props\u7ED9\u9690\u85CF\u5468\u672B\u6309\u94AE\u7EC4\u4EF6
            disabled: false,
            variant: 'base',
            size: 'medium',
          },
        },
        // \u201C\u4ECA\u5929\\\u672C\u6708\u201D\u6309\u94AE\u7EC4\u4EF6\u76F8\u5173\u8BBE\u7F6E
        current: {
          visible: true, // \u662F\u5426\u663E\u793A
          currentDayButtonProps: {
            // \u7528\u4E8E\u900F\u4F20props\u7ED9\u201C\u4ECA\u5929\u201D\u94AE\u7EC4\u4EF6\uFF08\u201Cmonth\u201D\u6A21\u5F0F\u4E0B\u6709\u6548\uFF09
            disabled: false,
            size: 'small',
            theme: 'warning',
          },
          currentMonthButtonProps: {
            // \u7528\u4E8E\u900F\u4F20props\u7ED9\u201C\u672C\u6708\u201D\u6309\u94AE\u7EC4\u4EF6\uFF08\u201Cyear\u201D\u6A21\u5F0F\u4E0B\u6709\u6548\uFF09
            disabled: false,
            size: 'small',
            theme: 'success',
          },
        },
      },
    };
  },
};
<\/script>

<style scoped>
.controllerConfig-demo fieldset {
  border: solid 1px #eee;
  padding: 10px 20px 10px 0;
  margin-bottom: 10px;
}
.controllerConfig-demo fieldset legend {
  margin-left: 20px;
  padding: 0 10px;
}
.controllerConfig-demo fieldset p {
  margin-bottom: 5px;
}
.controllerConfig-demo fieldset p label {
  margin-left: 20px;
}
</style>
`,_=`<template>
  <div class="controllerConfig-demo">
    <div v-if="controllerConfig" style="margin: 12px 0">
      <fieldset>
        <legend>\u63A7\u4EF6\u5168\u5C40</legend>
        <p>
          <label>\u662F\u5426\u663E\u793A\uFF08\u5168\u90E8\u63A7\u4EF6\uFF09\uFF1A</label>
          <t-switch v-model="controllerConfig.visible"></t-switch>
        </p>
        <p>
          <label>\u662F\u5426\u7981\u7528\uFF08\u5168\u90E8\u63A7\u4EF6\uFF09\uFF1A</label>
          <t-switch v-model="controllerConfig.disabled"></t-switch>
        </p>
      </fieldset>

      <fieldset>
        <legend>\u63A7\u4EF6\u5C40\u90E8</legend>
        <p>
          <label>\u662F\u5426\u663E\u793A\u201C\u5E74\u4EFD\u9009\u62E9\u201D\u63A7\u4EF6\uFF1A</label>
          <t-switch v-model="controllerConfig.year.visible"></t-switch>
          <label>\u662F\u5426\u7981\u7528\u201C\u5E74\u4EFD\u9009\u62E9\u201D\u63A7\u4EF6\uFF1A</label>
          <t-switch v-model="controllerConfig.year.selectProps.disabled"></t-switch>
        </p>
        <p>
          <label>\u662F\u5426\u663E\u793A\u201C\u6708\u4EFD\u9009\u62E9\u201D\u63A7\u4EF6\uFF1A</label>
          <t-switch v-model="controllerConfig.month.visible"></t-switch>
          <label>\u662F\u5426\u7981\u7528\u201C\u6708\u4EFD\u9009\u62E9\u201D\u63A7\u4EF6\uFF1A</label>
          <t-switch v-model="controllerConfig.month.selectProps.disabled"></t-switch>
        </p>
        <p>
          <label>\u662F\u5426\u663E\u793A\u201C\u6A21\u5F0F\u5207\u6362\u201D\u63A7\u4EF6\uFF1A</label>
          <t-switch v-model="controllerConfig.mode.visible"></t-switch>
          <label>\u662F\u5426\u7981\u7528\u201C\u6A21\u5F0F\u5207\u6362\u201D\u63A7\u4EF6\uFF1A</label>
          <t-switch v-model="controllerConfig.mode.radioGroupProps.disabled"></t-switch>
        </p>
        <p>
          <label>\u662F\u5426\u7981\u7528\u201C\u9690\u85CF\u5468\u672B\u201D\u63A7\u4EF6\uFF1A</label>
          <t-switch v-model="controllerConfig.weekend.hideWeekendButtonProps.disabled"></t-switch>
          <label>\u662F\u5426\u7981\u7528\u201C\u663E\u793A\u5468\u672B\u201D\u63A7\u4EF6\uFF1A</label>
          <t-switch v-model="controllerConfig.weekend.showWeekendButtonProps.disabled"></t-switch>
          <label>\u662F\u5426\u663E\u793A\u201C\u9690\u85CF\\\u663E\u793A\u5468\u672B\u201D\u63A7\u4EF6\uFF1A</label>
          <t-switch v-model="controllerConfig.weekend.visible"></t-switch>
        </p>
        <p>
          <label>\u662F\u5426\u7981\u7528\u201C\u4ECA\u5929\u201D\u6309\u94AE\u63A7\u4EF6\uFF1A</label>
          <t-switch v-model="controllerConfig.current.currentDayButtonProps.disabled"></t-switch>
          <label>\u662F\u5426\u7981\u7528\u201C\u672C\u6708\u201D\u6309\u94AE\u63A7\u4EF6\uFF1A</label>
          <t-switch v-model="controllerConfig.current.currentMonthButtonProps.disabled"></t-switch>
          <label>\u662F\u5426\u663E\u793A\u201C\u4ECA\u5929\\\u672C\u6708\u201D\u63A7\u4EF6\uFF1A</label>
          <t-switch v-model="controllerConfig.current.visible"></t-switch>
        </p>
      </fieldset>
    </div>
    <t-calendar :controllerConfig="controllerConfig.visible ? controllerConfig : false"></t-calendar>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const controllerConfig = reactive({
  visible: true,
  disabled: false,
  // \u662F\u5426\u7981\u7528\uFF08\u5168\u90E8\u63A7\u4EF6\uFF09
  // \u5E74\u4EFD\u9009\u62E9\u6846\u7EC4\u4EF6\u76F8\u5173\u8BBE\u7F6E
  year: {
    visible: true,
    // \u662F\u5426\u663E\u793A
    selectProps: {
      // \u7528\u4E8E\u900F\u4F20props\u7ED9\u8BE5select\u7EC4\u4EF6
      disabled: false,
      size: 'small',
    },
  },
  // \u6708\u4EFD\u9009\u62E9\u6846\u7EC4\u4EF6\u76F8\u5173\u8BBE\u7F6E
  month: {
    visible: true,
    // \u662F\u5426\u663E\u793A\uFF08\u201Cyear\u201D\u6A21\u5F0F\u4E0B\u672C\u8EAB\u662F\u4E0D\u663E\u793A\u8BE5\u7EC4\u4EF6\u7684\uFF09
    selectProps: {
      // \u7528\u4E8E\u900F\u4F20props\u7ED9\u8BE5select\u7EC4\u4EF6
      disabled: false,
      size: 'small',
    },
  },
  // \u6A21\u5F0F\u5207\u6362\u5355\u9009\u7EC4\u4EF6\u8BBE\u7F6E
  mode: {
    visible: true,
    // \u662F\u5426\u663E\u793A
    radioGroupProps: {
      disabled: false,
      size: 'small',
    },
  },
  // \u9690\u85CF\\\u663E\u793A\u5468\u672B\u6309\u94AE\u7EC4\u4EF6\u76F8\u5173\u8BBE\u7F6E
  weekend: {
    visible: true,
    // \u662F\u5426\u663E\u793A
    showWeekendButtonProps: {
      // \u7528\u4E8E\u900F\u4F20props\u7ED9\u663E\u793A\u5468\u672B\u6309\u94AE\u7EC4\u4EF6
      disabled: false,
      size: 'medium',
    },
    hideWeekendButtonProps: {
      // \u7528\u4E8E\u900F\u4F20props\u7ED9\u9690\u85CF\u5468\u672B\u6309\u94AE\u7EC4\u4EF6
      disabled: false,
      variant: 'base',
      size: 'medium',
    },
  },
  // \u201C\u4ECA\u5929\\\u672C\u6708\u201D\u6309\u94AE\u7EC4\u4EF6\u76F8\u5173\u8BBE\u7F6E
  current: {
    visible: true,
    // \u662F\u5426\u663E\u793A
    currentDayButtonProps: {
      // \u7528\u4E8E\u900F\u4F20props\u7ED9\u201C\u4ECA\u5929\u201D\u94AE\u7EC4\u4EF6\uFF08\u201Cmonth\u201D\u6A21\u5F0F\u4E0B\u6709\u6548\uFF09
      disabled: false,
      size: 'small',
      theme: 'warning',
    },
    currentMonthButtonProps: {
      // \u7528\u4E8E\u900F\u4F20props\u7ED9\u201C\u672C\u6708\u201D\u6309\u94AE\u7EC4\u4EF6\uFF08\u201Cyear\u201D\u6A21\u5F0F\u4E0B\u6709\u6548\uFF09
      disabled: false,
      size: 'small',
      theme: 'success',
    },
  },
});
<\/script>

<style scoped>
.controllerConfig-demo fieldset {
  border: solid 1px #eee;
  padding: 10px 20px 10px 0;
  margin-bottom: 10px;
}
.controllerConfig-demo fieldset legend {
  margin-left: 20px;
  padding: 0 10px;
}
.controllerConfig-demo fieldset p {
  margin-bottom: 5px;
}
.controllerConfig-demo fieldset p label {
  margin-left: 20px;
}
</style>
`,T=`<template>
  <t-calendar :range="range"></t-calendar>
</template>

<script>
export default {
  data() {
    return {
      range: [
        '2018-08', // new Date(2017, 7),
        '2028-04', // new Date(2027, 3),
      ],
    };
  },
};
<\/script>
`,$=`<template>
  <t-calendar :range="range"></t-calendar>
</template>

<script setup>
import { ref } from 'vue';

const range = ref([
  '2018-08',
  // new Date(2017, 7),
  '2028-04', // new Date(2027, 3),
]);
<\/script>
`,B=`<template>
  <div class="tdesign-demo-block-column-large">
    <t-space direction="vertical">
      <h3>\u4F7F\u7528\u63D2\u69FD</h3>
      <t-calendar>
        <template slot="week" slot-scope="scope">
          {{ scope.day === 7 ? '\u661F\u671F\u5929' : \`\u661F\u671F\${scope.day}\` }}
        </template>
      </t-calendar>
    </t-space>

    <t-space direction="vertical">
      <h3>\u4F7F\u7528week\u5C5E\u6027 - Array</h3>
      <t-calendar :week="week" :firstDayOfWeek="7"></t-calendar>
    </t-space>

    <t-space direction="vertical">
      <h3>\u4F7F\u7528week\u5C5E\u6027 - TNode</h3>
      <t-calendar :week="renderWeek"></t-calendar>
    </t-space>
  </div>
</template>

<script lang="jsx">
export default {
  data() {
    return {
      week: ['\u661F\u671F1', '\u661F\u671F2', '\u661F\u671F3', '\u661F\u671F4', '\u661F\u671F5', '\u661F\u671F6', '\u661F\u671F\u5929'],
    };
  },
  methods: {
    renderWeek(h, params) {
      if (params.day === 3) return <span style="color:#dd4a68">\u5468\u4E09\u5566</span>;
      if (params.day === 6 || params.day === 7) return <span style="color:#0052d9">\u653E\u5047\u5566</span>;
      return <span>{\`\u661F\u671F\${params.day}\`}</span>;
    },
  },
};
<\/script>
`,M=`<template>
  <div class="tdesign-demo-block-column-large">
    <t-space direction="vertical">
      <h3>\u4F7F\u7528\u63D2\u69FD</h3>
      <t-calendar>
        <template slot="week" slot-scope="scope">
          {{ scope.day === 7 ? '\u661F\u671F\u5929' : \`\u661F\u671F\${scope.day}\` }}
        </template>
      </t-calendar>
    </t-space>

    <t-space direction="vertical">
      <h3>\u4F7F\u7528week\u5C5E\u6027 - Array</h3>
      <t-calendar :week="week" :firstDayOfWeek="7"></t-calendar>
    </t-space>

    <t-space direction="vertical">
      <h3>\u4F7F\u7528week\u5C5E\u6027 - TNode</h3>
      <t-calendar :week="renderWeek"></t-calendar>
    </t-space>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue';

const week = ref(['\u661F\u671F1', '\u661F\u671F2', '\u661F\u671F3', '\u661F\u671F4', '\u661F\u671F5', '\u661F\u671F6', '\u661F\u671F\u5929']);
const renderWeek = (h, params) => {
  if (params.day === 3) return <span style="color:#dd4a68">\u5468\u4E09\u5566</span>;
  if (params.day === 6 || params.day === 7) return <span style="color:#0052d9">\u653E\u5047\u5566</span>;
  return <span>{\`\u661F\u671F\${params.day}\`}</span>;
};
<\/script>
`,L=`<template>
  <div class="tdesign-demo-block-column-large">
    <t-calendar
      @cell-click="cellClick"
      @cell-double-click="cellDoubleClick"
      @cell-right-click="cellRightClick"
      @month-change="monthChange"
      @controller-change="controllerChange"
    ></t-calendar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // \u5355\u5143\u683C\u5355\u51FB\u548C\u53CC\u51FB\u4E8B\u4EF6\u5171\u5B58\u7684\u65F6\u5019\uFF0C\u53CC\u51FB\u4E8B\u4EF6\u4F1A\u89E6\u53D1\u5355\u51FB\u4E8B\u4EF6\uFF08\u4E24\u6B21\uFF09\uFF0C\u8FD9\u201C\u53EF\u80FD\u4E0D\u662F\u201D\u6B63\u786E\u7684\u6548\u679C\uFF0C
      // \u8FD9\u79CD\u573A\u666F\u4E0B\u5EFA\u8BAE\u5BF9\u5355\u51FB\u4E8B\u4EF6\u8FDB\u884C\u5EF6\u8FDF\u5904\u7406\uFF08\u8BE6\u89C1\u4E0B\u9762 cellClick \u548C cellDoubleClick \u7684\u4EE3\u7801\uFF09
      cellClickTimmer: null,
    };
  },
  methods: {
    cellClick(options) {
      clearTimeout(this.cellClickTimmer); // \u7528\u4E8E\u5728\u53CC\u51FB\u4E8B\u4EF6\u4E2D\u53D6\u6D88\u6389\u989D\u5916\u89E6\u53D1\u7684\u4E00\u6B21\u5355\u51FB\u4E8B\u4EF6
      this.cellClickTimmer = setTimeout(() => {
        console.log(\`\u9F20\u6807\u5DE6\u952E\u5355\u51FB\u5355\u5143\u683C \${options.cell.formattedDate}\`);
      }, 300);
    },
    cellDoubleClick(options) {
      clearTimeout(this.cellClickTimmer); // \u7528\u4E8E\u5728\u53CC\u51FB\u4E8B\u4EF6\u4E2D\u53D6\u6D88\u6389\u989D\u5916\u89E6\u53D1\u53E6\u5916\u4E00\u6B21\u5355\u51FB\u4E8B\u4EF6
      console.log(\`\u9F20\u6807\u53CC\u51FB\u5355\u5143\u683C \${options.cell.formattedDate}\`);
    },
    cellRightClick(options) {
      console.log(\`\u9F20\u6807\u53F3\u952E\u70B9\u51FB\u5143\u683C \${options.cell.formattedDate}\`);
    },
    monthChange(options) {
      console.log(\`\u6708\u4EFD\u5207\u6362 \${options.year}-\${options.month}\`);
    },
    controllerChange(data) {
      console.log('\u63A7\u4EF6\u503C\u53D8\u5316', data);
    },
  },
};
<\/script>

<style scoped>
.demo-list {
  max-height: 130px;
  overflow: auto;
  border: 1px solid #eeeeee;
  border-top: none 0;
  border-bottom: none 0;
}
</style>
`,S=`<template>
  <div class="tdesign-demo-block-column-large">
    <t-calendar
      @cell-click="cellClick"
      @cell-double-click="cellDoubleClick"
      @cell-right-click="cellRightClick"
      @month-change="monthChange"
      @controller-change="controllerChange"
    ></t-calendar>
  </div>
</template>

<script setup>
import { ref } from 'vue';
// \u5355\u5143\u683C\u5355\u51FB\u548C\u53CC\u51FB\u4E8B\u4EF6\u5171\u5B58\u7684\u65F6\u5019\uFF0C\u53CC\u51FB\u4E8B\u4EF6\u4F1A\u89E6\u53D1\u5355\u51FB\u4E8B\u4EF6\uFF08\u4E24\u6B21\uFF09\uFF0C\u8FD9\u201C\u53EF\u80FD\u4E0D\u662F\u201D\u6B63\u786E\u7684\u6548\u679C\uFF0C
// \u8FD9\u79CD\u573A\u666F\u4E0B\u5EFA\u8BAE\u5BF9\u5355\u51FB\u4E8B\u4EF6\u8FDB\u884C\u5EF6\u8FDF\u5904\u7406\uFF08\u8BE6\u89C1\u4E0B\u9762 cellClick \u548C cellDoubleClick \u7684\u4EE3\u7801\uFF09
const cellClickTimmer = ref(null);
const cellClick = (options) => {
  clearTimeout(cellClickTimmer.value); // \u7528\u4E8E\u5728\u53CC\u51FB\u4E8B\u4EF6\u4E2D\u53D6\u6D88\u6389\u989D\u5916\u89E6\u53D1\u7684\u4E00\u6B21\u5355\u51FB\u4E8B\u4EF6
  cellClickTimmer.value = setTimeout(() => {
    console.log(\`\u9F20\u6807\u5DE6\u952E\u5355\u51FB\u5355\u5143\u683C \${options.cell.formattedDate}\`);
  }, 300);
};
const cellDoubleClick = (options) => {
  clearTimeout(cellClickTimmer.value); // \u7528\u4E8E\u5728\u53CC\u51FB\u4E8B\u4EF6\u4E2D\u53D6\u6D88\u6389\u989D\u5916\u89E6\u53D1\u53E6\u5916\u4E00\u6B21\u5355\u51FB\u4E8B\u4EF6
  console.log(\`\u9F20\u6807\u53CC\u51FB\u5355\u5143\u683C \${options.cell.formattedDate}\`);
};
const cellRightClick = (options) => {
  console.log(\`\u9F20\u6807\u53F3\u952E\u70B9\u51FB\u5143\u683C \${options.cell.formattedDate}\`);
};
const monthChange = (options) => {
  console.log(\`\u6708\u4EFD\u5207\u6362 \${options.year}-\${options.month}\`);
};
const controllerChange = (data) => {
  console.log('\u63A7\u4EF6\u503C\u53D8\u5316', data);
};
<\/script>

<style scoped>
.demo-list {
  max-height: 130px;
  overflow: auto;
  border: 1px solid #eeeeee;
  border-top: none 0;
  border-bottom: none 0;
}
</style>
`,Y=`<template>
  <t-calendar>
    <div slot="head">\u{1F5D3} TDesign\u5F00\u53D1\u8BA1\u5212</div>
  </t-calendar>
</template>
`,O=`<template>
  <t-calendar>
    <div slot="head">\u{1F5D3} TDesign\u5F00\u53D1\u8BA1\u5212</div>
  </t-calendar>
</template>
`,Z=`<template>
  <t-calendar>
    <template slot="cellAppend" slot-scope="data">
      <div v-if="getShow(data)" class="cell-append-demo-outer">
        <t-tag theme="success" variant="light" size="small" class="activeTag" style="width: 100%">
          {{ data.mode == 'month' ? '\u6211\u4EEC\u7684\u7EAA\u5FF5\u65E5' : '\u6211\u4EEC\u7684\u7EAA\u5FF5\u6708' }}
        </t-tag>
        <t-tag theme="warning" variant="light" size="small" class="activeTag" style="width: 100%">
          {{ data.mode == 'month' ? '\u5BB6\u5EAD\u805A\u4F1A' : '\u5BB6\u5EAD\u805A\u4F1A' }}
        </t-tag>
      </div>
    </template>
  </t-calendar>
</template>

<script>
import dayjs from 'dayjs';

export default {
  methods: {
    getShow(data) {
      return data.mode === 'month'
        ? dayjs().format('YYYY-MM-DD') === data.formattedDate
        : data.date.getMonth() === new Date().getMonth();
    },
  },
};
<\/script>
`,N=`<template>
  <t-calendar>
    <template slot="cellAppend" slot-scope="data">
      <div v-if="getShow(data)" class="cell-append-demo-outer">
        <t-tag theme="success" variant="light" size="small" class="activeTag" style="width: 100%">
          {{ data.mode == 'month' ? '\u6211\u4EEC\u7684\u7EAA\u5FF5\u65E5' : '\u6211\u4EEC\u7684\u7EAA\u5FF5\u6708' }}
        </t-tag>
        <t-tag theme="warning" variant="light" size="small" class="activeTag" style="width: 100%">
          {{ data.mode == 'month' ? '\u5BB6\u5EAD\u805A\u4F1A' : '\u5BB6\u5EAD\u805A\u4F1A' }}
        </t-tag>
      </div>
    </template>
  </t-calendar>
</template>

<script setup>
import dayjs from 'dayjs';

const getShow = (data) => data.mode === 'month'
  ? dayjs().format('YYYY-MM-DD') === data.formattedDate
  : data.date.getMonth() === new Date().getMonth();
<\/script>
`,V=`<template>
  <t-calendar>
    <div slot="cell" slot-scope="data" class="outerWrapper">
      <div class="number">{{ displayNum(data) }}</div>
      <template v-if="isShow(data)">
        <div class="slotWrapper">
          <div v-for="(item, index) in dataList" :key="index" class="item">
            <span :class="item.value"></span>
            {{ item.label }}
          </div>
        </div>
        <div class="shadow" />
      </template>
    </div>
  </t-calendar>
</template>

<script>
import dayjs from 'dayjs';

export default {
  data() {
    return {
      dataList: [
        {
          value: 'error',
          label: '\u9519\u8BEF\u4E8B\u4EF6',
        },
        {
          value: 'warning',
          label: '\u8B66\u544A\u4E8B\u4EF6',
        },
        {
          value: 'success',
          label: '\u6B63\u5E38\u4E8B\u4EF6',
        },
      ],
    };
  },
  methods: {
    isShow(data) {
      return data.mode === 'month' ? dayjs(data.formattedDate).date() === 15 : dayjs(data.formattedDate).month() === 7;
    },
    displayNum(cellData) {
      if (cellData.mode === 'month') {
        return cellData.date.getDate();
      }
      return cellData.date.getMonth() + 1;
    },
  },
};
<\/script>

<style lang="less" scoped>
.outerWrapper {
  width: 100%;
  height: 100%;
  position: relative;

  .shadow {
    position: absolute;
    width: 100%;
    height: 22px;
    bottom: 0;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%);
  }
  .number {
    font-weight: 600;
    position: absolute;
    right: 0;
    font-size: 14px;
    line-height: 22px;
  }
  .item {
    position: relative;
    display: flex;
    align-items: center;
    color: var(--td-text-color-secondary);
    font-size: 14px;
    line-height: 22px;
    span {
      display: block;
      left: 1px;
      width: 5px;
      height: 5px;
      border-radius: 10px;
      margin-right: 4px;
    }
  }
  .error {
    background: var(--td-error-color);
  }
  .warning {
    background: var(--td-warning-color);
  }
  .success {
    background: var(--td-success-color);
  }

  .slotWrapper {
    position: absolute;
    bottom: 2px;
    left: 5px;
  }
}
</style>
`,R=`<template>
  <t-calendar>
    <div slot="cell" slot-scope="data" class="outerWrapper">
      <div class="number">{{ displayNum(data) }}</div>
      <template v-if="isShow(data)">
        <div class="slotWrapper">
          <div v-for="(item, index) in dataList" :key="index" class="item">
            <span :class="item.value"></span>
            {{ item.label }}
          </div>
        </div>
        <div class="shadow" />
      </template>
    </div>
  </t-calendar>
</template>

<script setup>
import { ref } from 'vue';
import dayjs from 'dayjs';

const dataList = ref([
  {
    value: 'error',
    label: '\u9519\u8BEF\u4E8B\u4EF6',
  },
  {
    value: 'warning',
    label: '\u8B66\u544A\u4E8B\u4EF6',
  },
  {
    value: 'success',
    label: '\u6B63\u5E38\u4E8B\u4EF6',
  },
]);
const isShow = (data) => data.mode === 'month' ? dayjs(data.formattedDate).date() === 15 : dayjs(data.formattedDate).month() === 7;
const displayNum = (cellData) => {
  if (cellData.mode === 'month') {
    return cellData.date.getDate();
  }
  return cellData.date.getMonth() + 1;
};
<\/script>

<style lang="less" scoped>
.outerWrapper {
  width: 100%;
  height: 100%;
  position: relative;

  .shadow {
    position: absolute;
    width: 100%;
    height: 22px;
    bottom: 0;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%);
  }
  .number {
    font-weight: 600;
    position: absolute;
    right: 0;
    font-size: 14px;
    line-height: 22px;
  }
  .item {
    position: relative;
    display: flex;
    align-items: center;
    color: var(--td-text-color-secondary);
    font-size: 14px;
    line-height: 22px;
    span {
      display: block;
      left: 1px;
      width: 5px;
      height: 5px;
      border-radius: 10px;
      margin-right: 4px;
    }
  }
  .error {
    background: var(--td-error-color);
  }
  .warning {
    background: var(--td-warning-color);
  }
  .success {
    background: var(--td-success-color);
  }

  .slotWrapper {
    position: absolute;
    bottom: 2px;
    left: 5px;
  }
}
</style>
`,A=`<template>
  <t-calendar :head="renderHead" :cell="renderCell"> </t-calendar>
</template>

<script lang="jsx">
import dayjs from 'dayjs';

export default {
  methods: {
    renderHead(h, params) {
      let title = params.filterDate.getFullYear();
      if (params.mode === 'month') {
        title += \`-\${params.filterDate.getMonth() + 1}\`;
      }
      title += ' \u5DE5\u4F5C\u5B89\u6392';
      return <div>{title}</div>;
    },
    renderCell(h, params) {
      const dataList = [
        {
          value: 'error',
          label: '\u9519\u8BEF\u4E8B\u4EF6',
        },
        {
          value: 'warning',
          label: '\u8B66\u544A\u4E8B\u4EF6',
        },
        {
          value: 'success',
          label: '\u6B63\u5E38\u4E8B\u4EF6',
        },
      ];
      return (
        <div class="calendar-slot-props-api-demo">
          {(params.mode === 'month'
            ? dayjs(params.formattedDate).date() === 15
            : dayjs(params.formattedDate).month() === 7) && (
            <span>
              <div class="calendar-slot-props-api-demo-slot-wrapper">
                {dataList.map((item) => (
                  <div class="item">
                    <span class={item.value}></span>
                    {item.label}
                  </div>
                ))}
              </div>
              <div class="shadow" />
            </span>
          )}
          <div class="number">
            {params.mode === 'year' ? dayjs(params.formattedDate).month() : dayjs(params.formattedDate).date()}
          </div>
        </div>
      );
    },
  },
};
<\/script>
<style lang="less">
.calendar-slot-props-api-demo {
  width: 100%;
  height: 100%;
  position: relative;

  .shadow {
    position: absolute;
    width: 100%;
    height: 12px;
    bottom: 0;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%);
  }
  .number {
    font-weight: bold;
    position: absolute;
    top: 3px;
    right: 5px;
    font-size: 14px;
  }
  .item {
    position: relative;
    display: flex;
    align-items: center;
    color: var(--td-text-color-secondary);
    span {
      display: block;
      left: 1px;
      width: 5px;
      height: 5px;
      border-radius: 10px;
      margin-right: 4px;
    }
  }
  .error {
    background: var(--td-error-color);
  }
  .warning {
    background: var(--td-warning-color);
  }
  .success {
    background: var(--td-success-color);
  }
}
.calendar-slot-props-api-demo-slot-wrapper {
  position: absolute;
  bottom: 2px;
  left: 5px;
}
</style>
`,G=`<template>
  <t-calendar :head="renderHead" :cell="renderCell"> </t-calendar>
</template>

<script setup lang="jsx">
import dayjs from 'dayjs';

const renderHead = (h, params) => {
  let title = params.filterDate.getFullYear();
  if (params.mode === 'month') {
    title += \`-\${params.filterDate.getMonth() + 1}\`;
  }
  title += ' \u5DE5\u4F5C\u5B89\u6392';
  return <div>{title}</div>;
};
const renderCell = (h, params) => {
  const dataList = [
    {
      value: 'error',
      label: '\u9519\u8BEF\u4E8B\u4EF6',
    },
    {
      value: 'warning',
      label: '\u8B66\u544A\u4E8B\u4EF6',
    },
    {
      value: 'success',
      label: '\u6B63\u5E38\u4E8B\u4EF6',
    },
  ];
  return (
    <div class="calendar-slot-props-api-demo">
      {(params.mode === 'month'
        ? dayjs(params.formattedDate).date() === 15
        : dayjs(params.formattedDate).month() === 7) && (
        <span>
          <div class="calendar-slot-props-api-demo-slot-wrapper">
            {dataList.map((item) => (
              <div class="item">
                <span class={item.value}></span>
                {item.label}
              </div>
            ))}
          </div>
          <div class="shadow" />
        </span>
      )}
      <div class="number">
        {params.mode === 'year' ? dayjs(params.formattedDate).month() : dayjs(params.formattedDate).date()}
      </div>
    </div>
  );
};
<\/script>

<style lang="less">
.calendar-slot-props-api-demo {
  width: 100%;
  height: 100%;
  position: relative;

  .shadow {
    position: absolute;
    width: 100%;
    height: 12px;
    bottom: 0;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%);
  }

  .number {
    font-weight: bold;
    position: absolute;
    top: 3px;
    right: 5px;
    font-size: 14px;
  }

  .item {
    position: relative;
    display: flex;
    align-items: center;
    color: var(--td-text-color-secondary);

    span {
      display: block;
      left: 1px;
      width: 5px;
      height: 5px;
      border-radius: 10px;
      margin-right: 4px;
    }
  }

  .error {
    background: var(--td-error-color);
  }

  .warning {
    background: var(--td-warning-color);
  }

  .success {
    background: var(--td-success-color);
  }
}

.calendar-slot-props-api-demo-slot-wrapper {
  position: absolute;
  bottom: 2px;
  left: 5px;
}
</style>
`,v=[{name:"controllerConfig",type:"Boolean",defaultValue:!1,options:[]},{name:"fillWithZero",type:"Boolean",defaultValue:!1,options:[]},{name:"isShowWeekendDefault",type:"Boolean",defaultValue:!0,options:[]},{name:"mode",type:"enum",defaultValue:"month",options:[{label:"month",value:"month"},{label:"year",value:"year"}]},{name:"preventCellContextmenu",type:"Boolean",defaultValue:!1,options:[]},{name:"theme",type:"enum",defaultValue:"full",options:[{label:"full",value:"full"},{label:"card",value:"card"}]}];const i={};i.setup=(n,e)=>{const t=r(v),l=[{label:"calendar",value:"calendar"}],a={calendar:'<t-calendar v-bind="configProps" />'},o=r(`<template>${a[l[0].value].trim()}</template>`);function p(m){o.value=`<template>${a[m].trim()}</template>`}return{configList:t,panelList:l,usageCode:o,onPanelChange:p}};var d=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("base-usage",{attrs:{code:n.usageCode,"config-list":n.configList,"panel-list":n.panelList},on:{PanelChange:n.onPanelChange},scopedSlots:n._u([{key:"calendar",fn:function(l){var a=l.configProps;return[t("t-calendar",n._b({},"t-calendar",a,!1))]}}])})},f=[];d._withStripped=!0;const s={};var c=u(i,d,f,!1,h,null,null,null);function h(n){for(let e in s)this[e]=s[e]}c.options.__file="../src/calendar/_usage/index.vue";var H=function(){return c.exports}();export{g as D,H as U,y as a,w as b,C as c,x as d,k as e,D as f,W as g,z as h,P as i,j,_ as k,T as l,$ as m,B as n,M as o,L as p,S as q,Y as r,O as s,Z as t,N as u,V as v,R as w,A as x,G as y};
