import{Y as i,n as v}from"./index.663c003f.js";var x=`<template>
  <t-space direction="vertical">
    <!-- \u65B9\u5F0F\u4E00\uFF1A t-tab-panel \u65B9\u5F0F -->
    <t-tabs v-model="value">
      <!-- \u9ED8\u8BA4\u63D2\u69FD \u548C \u5177\u540D\u63D2\u69FD\uFF08panel\uFF09\u90FD\u662F\u7528\u6765\u6E32\u67D3\u9762\u677F\u5185\u5BB9 -->
      <t-tab-panel value="first" label="\u9009\u9879\u53611" :destroyOnHide="false">
        <p style="padding: 25px">\u9009\u9879\u53611\u7684\u5185\u5BB9\uFF0C\u4F7F\u7528 t-tab-panel \u6E32\u67D3</p>
      </t-tab-panel>
      <t-tab-panel value="second" label="\u9009\u9879\u53612" :destroyOnHide="false">
        <p slot="panel" style="padding: 25px">\u9009\u9879\u53612\u7684\u5185\u5BB9\uFF0C\u4F7F\u7528 t-tab-panel \u6E32\u67D3</p>
      </t-tab-panel>
      <t-tab-panel value="third" label="\u9009\u9879\u53613" :panel="panelRender" />
    </t-tabs>

    <!-- \u65B9\u5F0F\u4E8C\uFF1A\u4F7F\u7528 list \u5B9A\u4E49 Tab -->
    <t-tabs v-model="tab" :list="tabList" />
  </t-space>
</template>

<script lang="jsx">
export default {
  data() {
    return {
      value: 'first',
      tab: 1,
      tabList: [
        {
          label: '\u9009\u9879\u5361\u4E00',
          value: 1,
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          panel: (h) => <p style="padding: 25px">\u8FD9\u662F\u9009\u9879\u5361\u4E00\u7684\u5185\u5BB9\uFF0C\u4F7F\u7528 t-tabs \u6E32\u67D3</p>,
        },
        {
          label: '\u9009\u9879\u5361\u4E8C',
          value: 2,
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          panel: (h) => <p style="padding: 25px">\u8FD9\u662F\u9009\u9879\u5361\u4E8C\u7684\u5185\u5BB9\uFF0C\u4F7F\u7528 t-tabs \u6E32\u67D3</p>,
        },
        {
          label: '\u9009\u9879\u5361\u4E09',
          value: 3,
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          panel: (h) => <p style="padding: 25px">\u8FD9\u662F\u9009\u9879\u5361\u4E09\u7684\u5185\u5BB9\uFF0C\u4F7F\u7528 t-tabs \u6E32\u67D3</p>,
        },
      ],
    };
  },
  methods: {
    panelRender() {
      return <p style="padding: 25px;">\u9009\u9879\u53613\u7684\u5185\u5BB9\uFF0C\u4F7F\u7528 t-tab-panel \u6E32\u67D3</p>;
    },
  },
};
<\/script>
`,h=`<template>
  <t-space direction="vertical">
    <!-- \u65B9\u5F0F\u4E00\uFF1A t-tab-panel \u65B9\u5F0F -->
    <t-tabs v-model="value">
      <!-- \u9ED8\u8BA4\u63D2\u69FD \u548C \u5177\u540D\u63D2\u69FD\uFF08panel\uFF09\u90FD\u662F\u7528\u6765\u6E32\u67D3\u9762\u677F\u5185\u5BB9 -->
      <t-tab-panel value="first" label="\u9009\u9879\u53611" :destroyOnHide="false">
        <p style="padding: 25px">\u9009\u9879\u53611\u7684\u5185\u5BB9\uFF0C\u4F7F\u7528 t-tab-panel \u6E32\u67D3</p>
      </t-tab-panel>
      <t-tab-panel value="second" label="\u9009\u9879\u53612" :destroyOnHide="false">
        <p slot="panel" style="padding: 25px">\u9009\u9879\u53612\u7684\u5185\u5BB9\uFF0C\u4F7F\u7528 t-tab-panel \u6E32\u67D3</p>
      </t-tab-panel>
      <t-tab-panel value="third" label="\u9009\u9879\u53613" :panel="panelRender" />
    </t-tabs>

    <!-- \u65B9\u5F0F\u4E8C\uFF1A\u4F7F\u7528 list \u5B9A\u4E49 Tab -->
    <t-tabs v-model="tab" :list="tabList" />
  </t-space>
</template>

<script setup lang="jsx">
import { ref } from 'vue';

const value = ref('first');
const tab = ref(1);
const tabList = ref([
  {
    label: '\u9009\u9879\u5361\u4E00',
    value: 1,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    panel: (h) => <p style="padding: 25px">\u8FD9\u662F\u9009\u9879\u5361\u4E00\u7684\u5185\u5BB9\uFF0C\u4F7F\u7528 t-tabs \u6E32\u67D3</p>,
  },
  {
    label: '\u9009\u9879\u5361\u4E8C',
    value: 2,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    panel: (h) => <p style="padding: 25px">\u8FD9\u662F\u9009\u9879\u5361\u4E8C\u7684\u5185\u5BB9\uFF0C\u4F7F\u7528 t-tabs \u6E32\u67D3</p>,
  },
  {
    label: '\u9009\u9879\u5361\u4E09',
    value: 3,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    panel: (h) => <p style="padding: 25px">\u8FD9\u662F\u9009\u9879\u5361\u4E09\u7684\u5185\u5BB9\uFF0C\u4F7F\u7528 t-tabs \u6E32\u67D3</p>,
  },
]);
const panelRender = () => <p style="padding: 25px;">\u9009\u9879\u53613\u7684\u5185\u5BB9\uFF0C\u4F7F\u7528 t-tab-panel \u6E32\u67D3</p>;
<\/script>
`,y=`<template>
  <t-space direction="vertical" size="32px">
    <t-space>
      <t-radio-group variant="default-filled" v-model="theme">
        <t-radio-button value="normal">\u5E38\u89C4\u578B</t-radio-button>
        <t-radio-button value="card">\u5361\u7247\u578B</t-radio-button>
      </t-radio-group>
    </t-space>
    <t-tabs :value="value" :theme="theme" @change="(newValue) => (value = newValue)">
      <t-tab-panel value="first">
        <template #label> <home-icon style="margin-right: 4px" /> \u9996\u9875 </template>
        <p style="padding: 25px">\u9996\u9875\u7684\u5185\u5BB9</p>
      </t-tab-panel>
      <t-tab-panel value="second">
        <template #label> <calendar-icon style="margin-right: 4px" /> \u65E5\u7A0B </template>
        <p style="padding: 25px">\u65E5\u7A0B\u7684\u5185\u5BB9</p>
      </t-tab-panel>
      <t-tab-panel value="third">
        <template #label> <layers-icon style="margin-right: 4px" /> \u4E8B\u9879 </template>
        <p style="padding: 25px">\u4E8B\u9879\u7684\u5185\u5BB9</p>
      </t-tab-panel>
    </t-tabs>
  </t-space>
</template>

<script>
import { HomeIcon, CalendarIcon, LayersIcon } from 'tdesign-icons-vue';

export default {
  components: {
    HomeIcon,
    CalendarIcon,
    LayersIcon,
  },
  data() {
    return {
      theme: 'normal',
      value: 'first',
    };
  },
};
<\/script>
`,D=`<template>
  <t-space direction="vertical" size="32px">
    <t-space>
      <t-radio-group variant="default-filled" v-model="theme">
        <t-radio-button value="normal">\u5E38\u89C4\u578B</t-radio-button>
        <t-radio-button value="card">\u5361\u7247\u578B</t-radio-button>
      </t-radio-group>
    </t-space>
    <t-tabs :value="value" :theme="theme" @change="(newValue) => (value = newValue)">
      <t-tab-panel value="first">
        <template #label> <home-icon style="margin-right: 4px" /> \u9996\u9875 </template>
        <p style="padding: 25px">\u9996\u9875\u7684\u5185\u5BB9</p>
      </t-tab-panel>
      <t-tab-panel value="second">
        <template #label> <calendar-icon style="margin-right: 4px" /> \u65E5\u7A0B </template>
        <p style="padding: 25px">\u65E5\u7A0B\u7684\u5185\u5BB9</p>
      </t-tab-panel>
      <t-tab-panel value="third">
        <template #label> <layers-icon style="margin-right: 4px" /> \u4E8B\u9879 </template>
        <p style="padding: 25px">\u4E8B\u9879\u7684\u5185\u5BB9</p>
      </t-tab-panel>
    </t-tabs>
  </t-space>
</template>

<script setup>
import { ref } from 'vue';
import { HomeIcon, CalendarIcon, LayersIcon } from 'tdesign-icons-vue';

const theme = ref('normal');
const value = ref('first');
<\/script>
`,w=`<template>
  <t-tabs
    :value="value"
    theme="card"
    :addable="true"
    @add="addTab"
    @remove="removeTab"
    @change="changeTab"
    style="width: 100%"
  >
    <t-tab-panel
      v-for="data in panelData"
      :key="data.value"
      :value="data.value"
      :label="data.label"
      :removable="data.removable"
    >
      <p style="padding: 25px">{{ data.content }}</p>
    </t-tab-panel>
  </t-tabs>
</template>

<script>
let id = 0;

export default {
  data() {
    return {
      value: 'first',
      panelData: [
        {
          value: 'first',
          label: '\u539F\u6709\u9009\u9879\u5361',
          removable: true,
          content: '\u539F\u6709\u9009\u9879\u5361\u5185\u5BB9',
        },
        {
          value: 'second',
          label: '\u539F\u6709\u9009\u9879\u5361',
          removable: true,
          content: '\u539F\u6709\u9009\u9879\u5361\u5185\u5BB9',
        },
      ],
    };
  },

  methods: {
    addTab() {
      this.panelData = [
        ...this.panelData,
        {
          value: \`\${id}\`,
          label: '\u65B0\u9009\u9879\u5361',
          removable: true,
          content: '\u65B0\u9009\u9879\u5361\u5185\u5BB9',
        },
      ];
      this.value = \`\${id}\`;
      id += 1;
    },
    removeTab(item) {
      const index = this.panelData.findIndex((data) => data.value === item.value);
      if (index < 0) return false;
      this.panelData.splice(index, 1);
      if (this.value === item.value && this.panelData.length) {
        this.value = this.panelData[Math.max(index - 1, 0)].value;
      }
    },
    changeTab(newValue) {
      this.value = newValue;
    },
  },
};
<\/script>
`,V=`<template>
  <t-tabs
    :value="value"
    theme="card"
    :addable="true"
    @add="addTab"
    @remove="removeTab"
    @change="changeTab"
    style="width: 100%"
  >
    <t-tab-panel
      v-for="data in panelData"
      :key="data.value"
      :value="data.value"
      :label="data.label"
      :removable="data.removable"
    >
      <p style="padding: 25px">{{ data.content }}</p>
    </t-tab-panel>
  </t-tabs>
</template>

<script setup>
import { ref } from 'vue';

let id = 0;
const value = ref('first');
const panelData = ref([
  {
    value: 'first',
    label: '\u539F\u6709\u9009\u9879\u5361',
    removable: true,
    content: '\u539F\u6709\u9009\u9879\u5361\u5185\u5BB9',
  },
  {
    value: 'second',
    label: '\u539F\u6709\u9009\u9879\u5361',
    removable: true,
    content: '\u539F\u6709\u9009\u9879\u5361\u5185\u5BB9',
  },
]);
const addTab = () => {
  panelData.value = [
    ...panelData.value,
    {
      value: \`\${id}\`,
      label: '\u65B0\u9009\u9879\u5361',
      removable: true,
      content: '\u65B0\u9009\u9879\u5361\u5185\u5BB9',
    },
  ];
  value.value = \`\${id}\`;
  id += 1;
};
const removeTab = (item) => {
  const index = panelData.value.findIndex((data) => data.value === item.value);
  if (index < 0) return false;
  panelData.value.splice(index, 1);
  if (value.value === item.value && panelData.value.length) {
    value.value = panelData.value[Math.max(index - 1, 0)].value;
  }
};
const changeTab = (newValue) => {
  value.value = newValue;
};
<\/script>
`,C=`<template>
  <t-space direction="vertical">
    <t-tabs :value="value1" size="medium" @change="(newValue) => (value1 = newValue)">
      <t-tab-panel value="first" label="\u9009\u9879\u53611">
        <p style="padding: 25px">\u9009\u9879\u53611</p>
      </t-tab-panel>
      <t-tab-panel value="second" label="\u9009\u9879\u53612">
        <p style="padding: 25px">\u9009\u9879\u53612</p>
      </t-tab-panel>
      <t-tab-panel value="third" label="\u9009\u9879\u53613">
        <p style="padding: 25px">\u9009\u9879\u53613</p>
      </t-tab-panel>
    </t-tabs>

    <t-tabs :value="value2" size="large" @change="(newValue) => (value2 = newValue)">
      <t-tab-panel value="first" label="\u9009\u9879\u53611">
        <p style="padding: 25px">\u9009\u9879\u53611</p>
      </t-tab-panel>
      <t-tab-panel value="second" label="\u9009\u9879\u53612">
        <p style="padding: 25px">\u9009\u9879\u53612</p>
      </t-tab-panel>
      <t-tab-panel value="third" label="\u9009\u9879\u53613">
        <p style="padding: 25px">\u9009\u9879\u53613</p>
      </t-tab-panel>
    </t-tabs>
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      value1: 'first',
      value2: 'first',
    };
  },
};
<\/script>
`,_=`<template>
  <t-space direction="vertical">
    <t-tabs :value="value1" size="medium" @change="(newValue) => (value1 = newValue)">
      <t-tab-panel value="first" label="\u9009\u9879\u53611">
        <p style="padding: 25px">\u9009\u9879\u53611</p>
      </t-tab-panel>
      <t-tab-panel value="second" label="\u9009\u9879\u53612">
        <p style="padding: 25px">\u9009\u9879\u53612</p>
      </t-tab-panel>
      <t-tab-panel value="third" label="\u9009\u9879\u53613">
        <p style="padding: 25px">\u9009\u9879\u53613</p>
      </t-tab-panel>
    </t-tabs>

    <t-tabs :value="value2" size="large" @change="(newValue) => (value2 = newValue)">
      <t-tab-panel value="first" label="\u9009\u9879\u53611">
        <p style="padding: 25px">\u9009\u9879\u53611</p>
      </t-tab-panel>
      <t-tab-panel value="second" label="\u9009\u9879\u53612">
        <p style="padding: 25px">\u9009\u9879\u53612</p>
      </t-tab-panel>
      <t-tab-panel value="third" label="\u9009\u9879\u53613">
        <p style="padding: 25px">\u9009\u9879\u53613</p>
      </t-tab-panel>
    </t-tabs>
  </t-space>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref('first');
const value2 = ref('first');
<\/script>
`,T=`<template>
  <t-space direction="vertical">
    <t-tabs :value="value1" @change="(newValue) => (value1 = newValue)">
      <t-tab-panel value="first" label="\u9009\u9879\u53611">
        <p style="padding: 25px">\u9009\u9879\u53611</p>
      </t-tab-panel>
      <t-tab-panel value="second" label="\u9009\u9879\u53612">
        <p style="padding: 25px">\u9009\u9879\u53612</p>
      </t-tab-panel>
      <t-tab-panel value="third" label="\u9009\u9879\u53613">
        <p style="padding: 25px">\u9009\u9879\u53613</p>
      </t-tab-panel>
    </t-tabs>

    <t-tabs :value="value2" theme="card" @change="(newValue) => (value2 = newValue)">
      <t-tab-panel value="first" label="\u9009\u9879\u53611">
        <p style="padding: 25px">\u9009\u9879\u53611</p>
      </t-tab-panel>
      <t-tab-panel value="second" label="\u9009\u9879\u53612">
        <p style="padding: 25px">\u9009\u9879\u53612</p>
      </t-tab-panel>
      <t-tab-panel value="third" label="\u9009\u9879\u53613">
        <p style="padding: 25px">\u9009\u9879\u53613</p>
      </t-tab-panel>
    </t-tabs>
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      value1: 'first',
      value2: 'first',
    };
  },
};
<\/script>
`,z=`<template>
  <t-space direction="vertical">
    <t-tabs :value="value1" @change="(newValue) => (value1 = newValue)">
      <t-tab-panel value="first" label="\u9009\u9879\u53611">
        <p style="padding: 25px">\u9009\u9879\u53611</p>
      </t-tab-panel>
      <t-tab-panel value="second" label="\u9009\u9879\u53612">
        <p style="padding: 25px">\u9009\u9879\u53612</p>
      </t-tab-panel>
      <t-tab-panel value="third" label="\u9009\u9879\u53613">
        <p style="padding: 25px">\u9009\u9879\u53613</p>
      </t-tab-panel>
    </t-tabs>

    <t-tabs :value="value2" theme="card" @change="(newValue) => (value2 = newValue)">
      <t-tab-panel value="first" label="\u9009\u9879\u53611">
        <p style="padding: 25px">\u9009\u9879\u53611</p>
      </t-tab-panel>
      <t-tab-panel value="second" label="\u9009\u9879\u53612">
        <p style="padding: 25px">\u9009\u9879\u53612</p>
      </t-tab-panel>
      <t-tab-panel value="third" label="\u9009\u9879\u53613">
        <p style="padding: 25px">\u9009\u9879\u53613</p>
      </t-tab-panel>
    </t-tabs>
  </t-space>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref('first');
const value2 = ref('first');
<\/script>
`,$=`<template>
  <t-space direction="vertical" size="32px">
    <t-space>
      <t-radio-group variant="default-filled" v-model="placement">
        <t-radio-button value="top">top</t-radio-button>
        <t-radio-button value="right">right</t-radio-button>
        <t-radio-button value="bottom">bottom</t-radio-button>
        <t-radio-button value="left">left</t-radio-button>
      </t-radio-group>
    </t-space>
    <t-tabs :value="value" :placement="placement" @change="(newValue) => (value = newValue)">
      <t-tab-panel value="first" label="\u9009\u9879\u53611">
        <p style="padding: 25px">\u9009\u9879\u53611</p>
      </t-tab-panel>
      <t-tab-panel value="second" label="\u9009\u9879\u53612">
        <p style="padding: 25px">\u9009\u9879\u53612</p>
      </t-tab-panel>
      <t-tab-panel value="third" label="\u9009\u9879\u53613">
        <p style="padding: 25px">\u9009\u9879\u53613</p>
      </t-tab-panel>
    </t-tabs>
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      placement: 'top',
      value: 'first',
    };
  },
};
<\/script>
`,P=`<template>
  <t-space direction="vertical" size="32px">
    <t-space>
      <t-radio-group variant="default-filled" v-model="placement">
        <t-radio-button value="top">top</t-radio-button>
        <t-radio-button value="right">right</t-radio-button>
        <t-radio-button value="bottom">bottom</t-radio-button>
        <t-radio-button value="left">left</t-radio-button>
      </t-radio-group>
    </t-space>
    <t-tabs :value="value" :placement="placement" @change="(newValue) => (value = newValue)">
      <t-tab-panel value="first" label="\u9009\u9879\u53611">
        <p style="padding: 25px">\u9009\u9879\u53611</p>
      </t-tab-panel>
      <t-tab-panel value="second" label="\u9009\u9879\u53612">
        <p style="padding: 25px">\u9009\u9879\u53612</p>
      </t-tab-panel>
      <t-tab-panel value="third" label="\u9009\u9879\u53613">
        <p style="padding: 25px">\u9009\u9879\u53613</p>
      </t-tab-panel>
    </t-tabs>
  </t-space>
</template>

<script setup>
import { ref } from 'vue';

const placement = ref('top');
const value = ref('first');
<\/script>
`,I=`<template>
  <t-tabs :value="value" theme="card" :addable="true" @add="addTab" @remove="removeTab" @change="changeTab">
    <t-tab-panel
      v-for="data in panelData"
      :key="data.value"
      :value="data.value"
      :label="data.label"
      :removable="data.removable"
    >
      <p style="padding: 25px">{{ data.content }}</p>
    </t-tab-panel>
  </t-tabs>
</template>

<script>
let id = 0;

export default {
  data() {
    return {
      value: 'first',
      panelData: [
        {
          value: 'first',
          label: '\u539F\u6709\u9009\u9879\u5361',
          removable: false,
          content: '\u539F\u6709\u9009\u9879\u5361\u5185\u5BB9',
        },
        {
          value: 'second',
          label: '\u539F\u6709\u9009\u9879\u5361',
          removable: true,
          content: '\u539F\u6709\u9009\u9879\u5361\u5185\u5BB9',
        },
      ],
    };
  },

  methods: {
    addTab() {
      this.panelData = [
        ...this.panelData,
        {
          value: \`\${id}\`,
          label: \`\u65B0\u9009\u9879\u5361\${id}\`,
          removable: true,
          content: '\u65B0\u9009\u9879\u5361\u5185\u5BB9',
        },
      ];
      this.value = \`\${id}\`;
      id += 1;
    },
    removeTab(item) {
      const index = this.panelData.findIndex((data) => data.value === item.value);
      if (index < 0) return false;
      this.panelData.splice(index, 1);
      if (this.value === item.value) {
        this.value = this.panelData[index - 1].value;
      }
    },
    changeTab(newValue) {
      this.value = newValue;
    },
  },
};
<\/script>
`,L=`<template>
  <t-tabs :value="value" theme="card" :addable="true" @add="addTab" @remove="removeTab" @change="changeTab">
    <t-tab-panel
      v-for="data in panelData"
      :key="data.value"
      :value="data.value"
      :label="data.label"
      :removable="data.removable"
    >
      <p style="padding: 25px">{{ data.content }}</p>
    </t-tab-panel>
  </t-tabs>
</template>

<script setup>
import { ref } from 'vue';

let id = 0;
const value = ref('first');
const panelData = ref([
  {
    value: 'first',
    label: '\u539F\u6709\u9009\u9879\u5361',
    removable: false,
    content: '\u539F\u6709\u9009\u9879\u5361\u5185\u5BB9',
  },
  {
    value: 'second',
    label: '\u539F\u6709\u9009\u9879\u5361',
    removable: true,
    content: '\u539F\u6709\u9009\u9879\u5361\u5185\u5BB9',
  },
]);
const addTab = () => {
  panelData.value = [
    ...panelData.value,
    {
      value: \`\${id}\`,
      label: \`\u65B0\u9009\u9879\u5361\${id}\`,
      removable: true,
      content: '\u65B0\u9009\u9879\u5361\u5185\u5BB9',
    },
  ];
  value.value = \`\${id}\`;
  id += 1;
};
const removeTab = (item) => {
  const index = panelData.value.findIndex((data) => data.value === item.value);
  if (index < 0) return false;
  panelData.value.splice(index, 1);
  if (value.value === item.value) {
    value.value = panelData.value[index - 1].value;
  }
};
const changeTab = (newValue) => {
  value.value = newValue;
};
<\/script>
`,k=`<template>
  <t-space direction="vertical" style="width: 100%" size="32px">
    <t-radio-group variant="default-filled" v-model="theme">
      <t-radio-button value="normal">\u5E38\u89C4\u578B</t-radio-button>
      <t-radio-button value="card">\u5361\u7247\u578B</t-radio-button>
    </t-radio-group>
    <t-radio-group variant="default-filled" v-model="scrollPosition">
      <t-radio-button value="auto">Auto</t-radio-button>
      <t-radio-button value="start">Start</t-radio-button>
      <t-radio-button value="center">Center</t-radio-button>
      <t-radio-button value="end">End</t-radio-button>
    </t-radio-group>
    <t-tabs v-model="value" :theme="theme" :scrollPosition="scrollPosition">
      <t-tab-panel v-for="(item, index) in 30" :key="index" :value="index + ''" :label="\`\u9009\u9879\u5361\${index + 1}\`">
        <p style="padding: 25px">\u9009\u9879\u5361{{ index + 1 }}</p>
      </t-tab-panel>
    </t-tabs>
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      theme: 'normal',
      value: '21',
      scrollPosition: 'auto',
    };
  },
};
<\/script>
`,S=`<template>
  <t-space direction="vertical" style="width: 100%" size="32px">
    <t-radio-group variant="default-filled" v-model="theme">
      <t-radio-button value="normal">\u5E38\u89C4\u578B</t-radio-button>
      <t-radio-button value="card">\u5361\u7247\u578B</t-radio-button>
    </t-radio-group>
    <t-radio-group variant="default-filled" v-model="scrollPosition">
      <t-radio-button value="auto">Auto</t-radio-button>
      <t-radio-button value="start">Start</t-radio-button>
      <t-radio-button value="center">Center</t-radio-button>
      <t-radio-button value="end">End</t-radio-button>
    </t-radio-group>
    <t-tabs v-model="value" :theme="theme" :scrollPosition="scrollPosition">
      <t-tab-panel v-for="(item, index) in 30" :key="index" :value="index + ''" :label="\`\u9009\u9879\u5361\${index + 1}\`">
        <p style="padding: 25px">\u9009\u9879\u5361{{ index + 1 }}</p>
      </t-tab-panel>
    </t-tabs>
  </t-space>
</template>

<script setup>
import { ref } from 'vue';

const theme = ref('normal');
const value = ref('21');
const scrollPosition = ref('auto');
<\/script>
`,H=`<template>
  <t-space direction="vertical" size="36px">
    <t-space>
      <t-radio-group variant="default-filled" v-model="theme">
        <t-radio-button value="normal">\u5E38\u89C4\u578B</t-radio-button>
        <t-radio-button value="card">\u5361\u7247\u578B</t-radio-button>
      </t-radio-group>
    </t-space>
    <t-tabs :value="value" :theme="theme" @change="(newValue) => (value = newValue)">
      <t-tab-panel value="first" :label="\`\u9009\u9879\u53611\`">
        <p style="padding: 25px">{{ \`\u9009\u9879\u53611\u7684\u5185\u5BB9\` }}</p>
      </t-tab-panel>
      <t-tab-panel value="second" :label="\`\u9009\u9879\u53612\`" :disabled="true">
        <p style="padding: 25px">{{ \`\u9009\u9879\u53612\u7684\u5185\u5BB9\` }}</p>
      </t-tab-panel>
      <t-tab-panel value="third" :label="\`\u9009\u9879\u53613\`">
        <p style="padding: 25px">{{ \`\u9009\u9879\u53613\u7684\u5185\u5BB9\` }}</p>
      </t-tab-panel>
    </t-tabs>
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      theme: 'normal',
      value: 'first',
    };
  },
};
<\/script>
`,R=`<template>
  <t-space direction="vertical" size="36px">
    <t-space>
      <t-radio-group variant="default-filled" v-model="theme">
        <t-radio-button value="normal">\u5E38\u89C4\u578B</t-radio-button>
        <t-radio-button value="card">\u5361\u7247\u578B</t-radio-button>
      </t-radio-group>
    </t-space>
    <t-tabs :value="value" :theme="theme" @change="(newValue) => (value = newValue)">
      <t-tab-panel value="first" :label="\`\u9009\u9879\u53611\`">
        <p style="padding: 25px">{{ \`\u9009\u9879\u53611\u7684\u5185\u5BB9\` }}</p>
      </t-tab-panel>
      <t-tab-panel value="second" :label="\`\u9009\u9879\u53612\`" :disabled="true">
        <p style="padding: 25px">{{ \`\u9009\u9879\u53612\u7684\u5185\u5BB9\` }}</p>
      </t-tab-panel>
      <t-tab-panel value="third" :label="\`\u9009\u9879\u53613\`">
        <p style="padding: 25px">{{ \`\u9009\u9879\u53613\u7684\u5185\u5BB9\` }}</p>
      </t-tab-panel>
    </t-tabs>
  </t-space>
</template>

<script setup>
import { ref } from 'vue';

const theme = ref('normal');
const value = ref('first');
<\/script>
`,c=[{name:"addable",type:"Boolean",defaultValue:!1,options:[]},{name:"disabled",type:"Boolean",defaultValue:!1,options:[]},{name:"placement",type:"enum",defaultValue:"top",options:[{label:"left",value:"left"},{label:"top",value:"top"},{label:"bottom",value:"bottom"},{label:"right",value:"right"}]},{name:"size",type:"enum",defaultValue:"medium",options:[{label:"medium",value:"medium"},{label:"large",value:"large"}]},{name:"theme",type:"enum",defaultValue:"normal",options:[{label:"normal",value:"normal"},{label:"card",value:"card"}]}];const s={};s.setup=(e,a)=>{const n=i(c),t=[{label:"tabs",value:"tabs"}],l={tabs:`
        <t-tabs v-bind="configProps">
          <t-tab-panel :value="1" label="\u9009\u9879\u53611">
            <p style="margin: 20px">\u9009\u9879\u53611\u5185\u5BB9\u533A</p>
          </t-tab-panel>
          <t-tab-panel :value="2" label="\u9009\u9879\u53612">
            <p style="margin: 20px">\u9009\u9879\u53612\u5185\u5BB9\u533A</p>
          </t-tab-panel>
          <t-tab-panel :value="3" label="\u9009\u9879\u53613">
            <p style="margin: 20px">\u9009\u9879\u53613\u5185\u5BB9\u533A</p>
          </t-tab-panel>
        </t-tabs>
      `},p=i(`<template>${l[t[0].value].trim()}</template>`);function u(b){p.value=`<template>${l[b].trim()}</template>`}return{configList:n,panelList:t,usageCode:p,onPanelChange:u}};var r=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("base-usage",{attrs:{code:e.usageCode,"config-list":e.configList,"panel-list":e.panelList},on:{PanelChange:e.onPanelChange},scopedSlots:e._u([{key:"tabs",fn:function(t){var l=t.configProps;return[n("t-tabs",e._b({},"t-tabs",l,!1),[n("t-tab-panel",{attrs:{value:1,label:"\u9009\u9879\u53611"}},[n("p",{staticStyle:{margin:"20px"}},[e._v("\u9009\u9879\u53611\u5185\u5BB9\u533A")])]),n("t-tab-panel",{attrs:{value:2,label:"\u9009\u9879\u53612"}},[n("p",{staticStyle:{margin:"20px"}},[e._v("\u9009\u9879\u53612\u5185\u5BB9\u533A")])]),n("t-tab-panel",{attrs:{value:3,label:"\u9009\u9879\u53613"}},[n("p",{staticStyle:{margin:"20px"}},[e._v("\u9009\u9879\u53613\u5185\u5BB9\u533A")])])],1)]}}])})},m=[];r._withStripped=!0;const o={};var d=v(s,r,m,!1,f,null,null,null);function f(e){for(let a in o)this[a]=o[a]}d.options.__file="../src/tabs/_usage/index.vue";var j=function(){return d.exports}();export{x as D,j as U,h as a,y as b,D as c,w as d,V as e,C as f,_ as g,T as h,z as i,$ as j,P as k,I as l,L as m,k as n,S as o,H as p,R as q};
