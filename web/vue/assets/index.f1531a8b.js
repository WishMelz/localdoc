import{Y as p,n as u}from"./index.663c003f.js";var g=`<template>
  <t-space direction="vertical">
    <t-collapse :default-value="[1]" @change="handlePanelChange">
      <t-collapse-panel header="\u8FD9\u662F\u4E00\u4E2A\u6298\u53E0\u6807\u9898">
        \u8FD9\u90E8\u5206\u662F\u6BCF\u4E2A\u6298\u53E0\u9762\u677F\u6298\u53E0\u6216\u5C55\u5F00\u7684\u5185\u5BB9\uFF0C\u53EF\u6839\u636E\u4E0D\u540C\u4E1A\u52A1\u6216\u7528\u6237\u7684\u4F7F\u7528\u8BC9\u6C42\uFF0C\u8FDB\u884C\u81EA\u5B9A\u4E49\u586B\u5145\u3002\u53EF\u4EE5\u662F\u7EAF\u6587\u672C\u3001\u56FE\u6587\u3001\u5B50\u5217\u8868\u7B49\u5185\u5BB9\u5F62\u5F0F\u3002
      </t-collapse-panel>
      <t-collapse-panel destroy-on-collapse header="\u8BBE\u7F6E\u9ED8\u8BA4\u5C55\u5F00\u9879">
        \u8FD9\u90E8\u5206\u662F\u6BCF\u4E2A\u6298\u53E0\u9762\u677F\u6298\u53E0\u6216\u5C55\u5F00\u7684\u5185\u5BB9\uFF0C\u53EF\u6839\u636E\u4E0D\u540C\u4E1A\u52A1\u6216\u7528\u6237\u7684\u4F7F\u7528\u8BC9\u6C42\uFF0C\u8FDB\u884C\u81EA\u5B9A\u4E49\u586B\u5145\u3002\u53EF\u4EE5\u662F\u7EAF\u6587\u672C\u3001\u56FE\u6587\u3001\u5B50\u5217\u8868\u7B49\u5185\u5BB9\u5F62\u5F0F\u3002
      </t-collapse-panel>
      <t-collapse-panel header="\u81EA\u5B9A\u4E49\u6298\u53E0\u9762\u677F\u5185\u5BB9">
        <t-space direction="vertical" style="width: 100%">
          <t-tag-input v-model="tags1" clearable />
          <t-tag-input :value="tags2" label="Controlled: " clearable />
          <t-tag-input :default-value="tags3" label="UnControlled: " clearable />
        </t-space>
      </t-collapse-panel>
      <t-collapse-panel header="\u5D4C\u5957\u6298\u53E0\u9762\u677F">
        <t-collapse default-expand-all>
          <t-collapse-panel header="\u5B50\u9762\u677F1"> \u8FD9\u662F\u5B50\u9762\u677F1 </t-collapse-panel>
          <t-collapse-panel header="\u5B50\u9762\u677F2"> \u8FD9\u662F\u5B50\u9762\u677F2 </t-collapse-panel>
          <t-collapse-panel header="\u5B50\u9762\u677F3"> \u8FD9\u662F\u5B50\u9762\u677F3 </t-collapse-panel>
          <t-collapse-panel header="\u5B50\u9762\u677F4"> \u8FD9\u662F\u5B50\u9762\u677F4 </t-collapse-panel>
        </t-collapse>
      </t-collapse-panel>
    </t-collapse>
    <div style="margin-top: 10px">\u5F53\u524D\u5C55\u5F00\u9879:{{ currentItem }}</div>
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      currentItem: [1],
      tags1: ['Vue', 'React'],
      tags2: ['Vue', 'React'],
      tags3: ['Vue', 'React'],
    };
  },
  methods: {
    handlePanelChange(val) {
      this.currentItem = val;
    },
  },
};
<\/script>
`,x=`<template>
  <t-space direction="vertical">
    <t-collapse :default-value="[1]" @change="handlePanelChange">
      <t-collapse-panel header="\u8FD9\u662F\u4E00\u4E2A\u6298\u53E0\u6807\u9898">
        \u8FD9\u90E8\u5206\u662F\u6BCF\u4E2A\u6298\u53E0\u9762\u677F\u6298\u53E0\u6216\u5C55\u5F00\u7684\u5185\u5BB9\uFF0C\u53EF\u6839\u636E\u4E0D\u540C\u4E1A\u52A1\u6216\u7528\u6237\u7684\u4F7F\u7528\u8BC9\u6C42\uFF0C\u8FDB\u884C\u81EA\u5B9A\u4E49\u586B\u5145\u3002\u53EF\u4EE5\u662F\u7EAF\u6587\u672C\u3001\u56FE\u6587\u3001\u5B50\u5217\u8868\u7B49\u5185\u5BB9\u5F62\u5F0F\u3002
      </t-collapse-panel>
      <t-collapse-panel destroy-on-collapse header="\u8BBE\u7F6E\u9ED8\u8BA4\u5C55\u5F00\u9879">
        \u8FD9\u90E8\u5206\u662F\u6BCF\u4E2A\u6298\u53E0\u9762\u677F\u6298\u53E0\u6216\u5C55\u5F00\u7684\u5185\u5BB9\uFF0C\u53EF\u6839\u636E\u4E0D\u540C\u4E1A\u52A1\u6216\u7528\u6237\u7684\u4F7F\u7528\u8BC9\u6C42\uFF0C\u8FDB\u884C\u81EA\u5B9A\u4E49\u586B\u5145\u3002\u53EF\u4EE5\u662F\u7EAF\u6587\u672C\u3001\u56FE\u6587\u3001\u5B50\u5217\u8868\u7B49\u5185\u5BB9\u5F62\u5F0F\u3002
      </t-collapse-panel>
      <t-collapse-panel header="\u81EA\u5B9A\u4E49\u6298\u53E0\u9762\u677F\u5185\u5BB9">
        <t-space direction="vertical" style="width: 100%">
          <t-tag-input v-model="tags1" clearable />
          <t-tag-input :value="tags2" label="Controlled: " clearable />
          <t-tag-input :default-value="tags3" label="UnControlled: " clearable />
        </t-space>
      </t-collapse-panel>
      <t-collapse-panel header="\u5D4C\u5957\u6298\u53E0\u9762\u677F">
        <t-collapse default-expand-all>
          <t-collapse-panel header="\u5B50\u9762\u677F1"> \u8FD9\u662F\u5B50\u9762\u677F1 </t-collapse-panel>
          <t-collapse-panel header="\u5B50\u9762\u677F2"> \u8FD9\u662F\u5B50\u9762\u677F2 </t-collapse-panel>
          <t-collapse-panel header="\u5B50\u9762\u677F3"> \u8FD9\u662F\u5B50\u9762\u677F3 </t-collapse-panel>
          <t-collapse-panel header="\u5B50\u9762\u677F4"> \u8FD9\u662F\u5B50\u9762\u677F4 </t-collapse-panel>
        </t-collapse>
      </t-collapse-panel>
    </t-collapse>
    <div style="margin-top: 10px">\u5F53\u524D\u5C55\u5F00\u9879:{{ currentItem }}</div>
  </t-space>
</template>
<script setup>
import { ref } from 'vue';

const currentItem = ref([1]);
const tags1 = ref(['Vue', 'React']);
const tags2 = ref(['Vue', 'React']);
const tags3 = ref(['Vue', 'React']);
const handlePanelChange = (val) => {
  currentItem.value = val;
};
<\/script>
`,C=`<template>
  <t-space direction="vertical">
    <t-collapse v-model="currentItem" expand-mutex @change="handlePanelChange">
      <t-collapse-panel value="0" header="\u8FD9\u662F\u4E00\u4E2A\u6298\u53E0\u6807\u9898">
        \u8FD9\u90E8\u5206\u662F\u6BCF\u4E2A\u6298\u53E0\u9762\u677F\u6298\u53E0\u6216\u5C55\u5F00\u7684\u5185\u5BB9\uFF0C\u53EF\u6839\u636E\u4E0D\u540C\u4E1A\u52A1\u6216\u7528\u6237\u7684\u4F7F\u7528\u8BC9\u6C42\uFF0C\u8FDB\u884C\u81EA\u5B9A\u4E49\u586B\u5145\u3002\u53EF\u4EE5\u662F\u7EAF\u6587\u672C\u3001\u56FE\u6587\u3001\u5B50\u5217\u8868\u7B49\u5185\u5BB9\u5F62\u5F0F\u3002
      </t-collapse-panel>
      <t-collapse-panel value="1">
        <template #header>\u8FD9\u662F\u4E00\u4E2A\u6298\u53E0\u6807\u9898</template>
        <template #default
        >\u8FD9\u90E8\u5206\u662F\u6BCF\u4E2A\u6298\u53E0\u9762\u677F\u6298\u53E0\u6216\u5C55\u5F00\u7684\u5185\u5BB9\uFF0C\u53EF\u6839\u636E\u4E0D\u540C\u4E1A\u52A1\u6216\u7528\u6237\u7684\u4F7F\u7528\u8BC9\u6C42\uFF0C\u8FDB\u884C\u81EA\u5B9A\u4E49\u586B\u5145\u3002\u53EF\u4EE5\u662F\u7EAF\u6587\u672C\u3001\u56FE\u6587\u3001\u5B50\u5217\u8868\u7B49\u5185\u5BB9\u5F62\u5F0F\u3002</template
        >
      </t-collapse-panel>
      <t-collapse-panel value="2">
        <template #header>\u8FD9\u662F\u4E00\u4E2A\u6298\u53E0\u6807\u9898</template>
        \u8FD9\u90E8\u5206\u662F\u6BCF\u4E2A\u6298\u53E0\u9762\u677F\u6298\u53E0\u6216\u5C55\u5F00\u7684\u5185\u5BB9\uFF0C\u53EF\u6839\u636E\u4E0D\u540C\u4E1A\u52A1\u6216\u7528\u6237\u7684\u4F7F\u7528\u8BC9\u6C42\uFF0C\u8FDB\u884C\u81EA\u5B9A\u4E49\u586B\u5145\u3002\u53EF\u4EE5\u662F\u7EAF\u6587\u672C\u3001\u56FE\u6587\u3001\u5B50\u5217\u8868\u7B49\u5185\u5BB9\u5F62\u5F0F\u3002
      </t-collapse-panel>
      <t-collapse-panel value="3" header="\u8FD9\u662F\u4E00\u4E2A\u6298\u53E0\u6807\u9898">
        \u8FD9\u90E8\u5206\u662F\u6BCF\u4E2A\u6298\u53E0\u9762\u677F\u6298\u53E0\u6216\u5C55\u5F00\u7684\u5185\u5BB9\uFF0C\u53EF\u6839\u636E\u4E0D\u540C\u4E1A\u52A1\u6216\u7528\u6237\u7684\u4F7F\u7528\u8BC9\u6C42\uFF0C\u8FDB\u884C\u81EA\u5B9A\u4E49\u586B\u5145\u3002\u53EF\u4EE5\u662F\u7EAF\u6587\u672C\u3001\u56FE\u6587\u3001\u5B50\u5217\u8868\u7B49\u5185\u5BB9\u5F62\u5F0F\u3002
      </t-collapse-panel>
    </t-collapse>
    <div style="margin-top: 10px">\u5F53\u524D\u5C55\u5F00\u9879\uFF1A{{ currentItem }}</div>
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      currentItem: [],
    };
  },
  methods: {
    handlePanelChange(val) {
      console.log(val);
    },
  },
};
<\/script>
`,k=`<template>
  <t-space direction="vertical">
    <t-collapse v-model="currentItem" expand-mutex @change="handlePanelChange">
      <t-collapse-panel value="0" header="\u8FD9\u662F\u4E00\u4E2A\u6298\u53E0\u6807\u9898">
        \u8FD9\u90E8\u5206\u662F\u6BCF\u4E2A\u6298\u53E0\u9762\u677F\u6298\u53E0\u6216\u5C55\u5F00\u7684\u5185\u5BB9\uFF0C\u53EF\u6839\u636E\u4E0D\u540C\u4E1A\u52A1\u6216\u7528\u6237\u7684\u4F7F\u7528\u8BC9\u6C42\uFF0C\u8FDB\u884C\u81EA\u5B9A\u4E49\u586B\u5145\u3002\u53EF\u4EE5\u662F\u7EAF\u6587\u672C\u3001\u56FE\u6587\u3001\u5B50\u5217\u8868\u7B49\u5185\u5BB9\u5F62\u5F0F\u3002
      </t-collapse-panel>
      <t-collapse-panel value="1">
        <template #header>\u8FD9\u662F\u4E00\u4E2A\u6298\u53E0\u6807\u9898</template>
        <template #default
        >\u8FD9\u90E8\u5206\u662F\u6BCF\u4E2A\u6298\u53E0\u9762\u677F\u6298\u53E0\u6216\u5C55\u5F00\u7684\u5185\u5BB9\uFF0C\u53EF\u6839\u636E\u4E0D\u540C\u4E1A\u52A1\u6216\u7528\u6237\u7684\u4F7F\u7528\u8BC9\u6C42\uFF0C\u8FDB\u884C\u81EA\u5B9A\u4E49\u586B\u5145\u3002\u53EF\u4EE5\u662F\u7EAF\u6587\u672C\u3001\u56FE\u6587\u3001\u5B50\u5217\u8868\u7B49\u5185\u5BB9\u5F62\u5F0F\u3002</template
        >
      </t-collapse-panel>
      <t-collapse-panel value="2">
        <template #header>\u8FD9\u662F\u4E00\u4E2A\u6298\u53E0\u6807\u9898</template>
        \u8FD9\u90E8\u5206\u662F\u6BCF\u4E2A\u6298\u53E0\u9762\u677F\u6298\u53E0\u6216\u5C55\u5F00\u7684\u5185\u5BB9\uFF0C\u53EF\u6839\u636E\u4E0D\u540C\u4E1A\u52A1\u6216\u7528\u6237\u7684\u4F7F\u7528\u8BC9\u6C42\uFF0C\u8FDB\u884C\u81EA\u5B9A\u4E49\u586B\u5145\u3002\u53EF\u4EE5\u662F\u7EAF\u6587\u672C\u3001\u56FE\u6587\u3001\u5B50\u5217\u8868\u7B49\u5185\u5BB9\u5F62\u5F0F\u3002
      </t-collapse-panel>
      <t-collapse-panel value="3" header="\u8FD9\u662F\u4E00\u4E2A\u6298\u53E0\u6807\u9898">
        \u8FD9\u90E8\u5206\u662F\u6BCF\u4E2A\u6298\u53E0\u9762\u677F\u6298\u53E0\u6216\u5C55\u5F00\u7684\u5185\u5BB9\uFF0C\u53EF\u6839\u636E\u4E0D\u540C\u4E1A\u52A1\u6216\u7528\u6237\u7684\u4F7F\u7528\u8BC9\u6C42\uFF0C\u8FDB\u884C\u81EA\u5B9A\u4E49\u586B\u5145\u3002\u53EF\u4EE5\u662F\u7EAF\u6587\u672C\u3001\u56FE\u6587\u3001\u5B50\u5217\u8868\u7B49\u5185\u5BB9\u5F62\u5F0F\u3002
      </t-collapse-panel>
    </t-collapse>
    <div style="margin-top: 10px">\u5F53\u524D\u5C55\u5F00\u9879\uFF1A{{ currentItem }}</div>
  </t-space>
</template>
<script setup>
import { ref } from 'vue';

const currentItem = ref([]);
const handlePanelChange = (val) => {
  console.log(val);
};
<\/script>
`,y=`<template>
  <t-space direction="vertical">
    <t-collapse :expand-icon-placement="direction" :expand-on-row-click="!onlyIcon">
      <t-collapse-panel value="0" header="\u8FD9\u662F\u4E00\u4E2A\u6298\u53E0\u6807\u9898">
        \u8FD9\u90E8\u5206\u662F\u6BCF\u4E2A\u6298\u53E0\u9762\u677F\u6298\u53E0\u6216\u5C55\u5F00\u7684\u5185\u5BB9\uFF0C\u53EF\u6839\u636E\u4E0D\u540C\u4E1A\u52A1\u6216\u7528\u6237\u7684\u4F7F\u7528\u8BC9\u6C42\uFF0C\u8FDB\u884C\u81EA\u5B9A\u4E49\u586B\u5145\u3002\u53EF\u4EE5\u662F\u7EAF\u6587\u672C\u3001\u56FE\u6587\u3001\u5B50\u5217\u8868\u7B49\u5185\u5BB9\u5F62\u5F0F\u3002
      </t-collapse-panel>
      <t-collapse-panel value="1">
        <template #header>\u8FD9\u662F\u4E00\u4E2A\u6298\u53E0\u6807\u9898</template>
        <template #default
        >\u8FD9\u90E8\u5206\u662F\u6BCF\u4E2A\u6298\u53E0\u9762\u677F\u6298\u53E0\u6216\u5C55\u5F00\u7684\u5185\u5BB9\uFF0C\u53EF\u6839\u636E\u4E0D\u540C\u4E1A\u52A1\u6216\u7528\u6237\u7684\u4F7F\u7528\u8BC9\u6C42\uFF0C\u8FDB\u884C\u81EA\u5B9A\u4E49\u586B\u5145\u3002\u53EF\u4EE5\u662F\u7EAF\u6587\u672C\u3001\u56FE\u6587\u3001\u5B50\u5217\u8868\u7B49\u5185\u5BB9\u5F62\u5F0F\u3002</template
        >
      </t-collapse-panel>
      <t-collapse-panel value="2">
        <template #expandIcon><star-icon /></template>
        <template #header>\u81EA\u5B9A\u4E49icon1</template>
        \u8FD9\u90E8\u5206\u662F\u6BCF\u4E2A\u6298\u53E0\u9762\u677F\u6298\u53E0\u6216\u5C55\u5F00\u7684\u5185\u5BB9\uFF0C\u53EF\u6839\u636E\u4E0D\u540C\u4E1A\u52A1\u6216\u7528\u6237\u7684\u4F7F\u7528\u8BC9\u6C42\uFF0C\u8FDB\u884C\u81EA\u5B9A\u4E49\u586B\u5145\u3002\u53EF\u4EE5\u662F\u7EAF\u6587\u672C\u3001\u56FE\u6587\u3001\u5B50\u5217\u8868\u7B49\u5185\u5BB9\u5F62\u5F0F\u3002
      </t-collapse-panel>
      <t-collapse-panel value="3" :expand-icon="renderLogo" header="\u81EA\u5B9A\u4E49icon2">
        \u8FD9\u90E8\u5206\u662F\u6BCF\u4E2A\u6298\u53E0\u9762\u677F\u6298\u53E0\u6216\u5C55\u5F00\u7684\u5185\u5BB9\uFF0C\u53EF\u6839\u636E\u4E0D\u540C\u4E1A\u52A1\u6216\u7528\u6237\u7684\u4F7F\u7528\u8BC9\u6C42\uFF0C\u8FDB\u884C\u81EA\u5B9A\u4E49\u586B\u5145\u3002\u53EF\u4EE5\u662F\u7EAF\u6587\u672C\u3001\u56FE\u6587\u3001\u5B50\u5217\u8868\u7B49\u5185\u5BB9\u5F62\u5F0F\u3002
      </t-collapse-panel>
    </t-collapse>
    <t-space>
      <t-radio-group v-model="direction">
        <t-radio value="left">\u5DE6\u8FB9</t-radio>
        <t-radio value="right">\u53F3\u8FB9</t-radio>
      </t-radio-group>
    </t-space>
    <div style="margin-top: 10px">
      <t-checkbox v-model="onlyIcon">\u4EC5\u56FE\u6807\u54CD\u5E94\u70B9\u51FB</t-checkbox>
    </div>
  </t-space>
</template>
<script lang="jsx">
import { StarIcon, LogoGithubIcon } from 'tdesign-icons-vue';

export default {
  components: {
    StarIcon,
  },
  data() {
    return {
      direction: 'left',
      onlyIcon: false,
    };
  },
  methods: {
    renderLogo() {
      return <LogoGithubIcon />;
    },
  },
};
<\/script>
`,I=`<template>
  <t-space direction="vertical">
    <t-collapse :expand-icon-placement="direction" :expand-on-row-click="!onlyIcon">
      <t-collapse-panel value="0" header="\u8FD9\u662F\u4E00\u4E2A\u6298\u53E0\u6807\u9898">
        \u8FD9\u90E8\u5206\u662F\u6BCF\u4E2A\u6298\u53E0\u9762\u677F\u6298\u53E0\u6216\u5C55\u5F00\u7684\u5185\u5BB9\uFF0C\u53EF\u6839\u636E\u4E0D\u540C\u4E1A\u52A1\u6216\u7528\u6237\u7684\u4F7F\u7528\u8BC9\u6C42\uFF0C\u8FDB\u884C\u81EA\u5B9A\u4E49\u586B\u5145\u3002\u53EF\u4EE5\u662F\u7EAF\u6587\u672C\u3001\u56FE\u6587\u3001\u5B50\u5217\u8868\u7B49\u5185\u5BB9\u5F62\u5F0F\u3002
      </t-collapse-panel>
      <t-collapse-panel value="1">
        <template #header>\u8FD9\u662F\u4E00\u4E2A\u6298\u53E0\u6807\u9898</template>
        <template #default
        >\u8FD9\u90E8\u5206\u662F\u6BCF\u4E2A\u6298\u53E0\u9762\u677F\u6298\u53E0\u6216\u5C55\u5F00\u7684\u5185\u5BB9\uFF0C\u53EF\u6839\u636E\u4E0D\u540C\u4E1A\u52A1\u6216\u7528\u6237\u7684\u4F7F\u7528\u8BC9\u6C42\uFF0C\u8FDB\u884C\u81EA\u5B9A\u4E49\u586B\u5145\u3002\u53EF\u4EE5\u662F\u7EAF\u6587\u672C\u3001\u56FE\u6587\u3001\u5B50\u5217\u8868\u7B49\u5185\u5BB9\u5F62\u5F0F\u3002</template
        >
      </t-collapse-panel>
      <t-collapse-panel value="2">
        <template #expandIcon><star-icon /></template>
        <template #header>\u81EA\u5B9A\u4E49icon1</template>
        \u8FD9\u90E8\u5206\u662F\u6BCF\u4E2A\u6298\u53E0\u9762\u677F\u6298\u53E0\u6216\u5C55\u5F00\u7684\u5185\u5BB9\uFF0C\u53EF\u6839\u636E\u4E0D\u540C\u4E1A\u52A1\u6216\u7528\u6237\u7684\u4F7F\u7528\u8BC9\u6C42\uFF0C\u8FDB\u884C\u81EA\u5B9A\u4E49\u586B\u5145\u3002\u53EF\u4EE5\u662F\u7EAF\u6587\u672C\u3001\u56FE\u6587\u3001\u5B50\u5217\u8868\u7B49\u5185\u5BB9\u5F62\u5F0F\u3002
      </t-collapse-panel>
      <t-collapse-panel value="3" :expand-icon="renderLogo" header="\u81EA\u5B9A\u4E49icon2">
        \u8FD9\u90E8\u5206\u662F\u6BCF\u4E2A\u6298\u53E0\u9762\u677F\u6298\u53E0\u6216\u5C55\u5F00\u7684\u5185\u5BB9\uFF0C\u53EF\u6839\u636E\u4E0D\u540C\u4E1A\u52A1\u6216\u7528\u6237\u7684\u4F7F\u7528\u8BC9\u6C42\uFF0C\u8FDB\u884C\u81EA\u5B9A\u4E49\u586B\u5145\u3002\u53EF\u4EE5\u662F\u7EAF\u6587\u672C\u3001\u56FE\u6587\u3001\u5B50\u5217\u8868\u7B49\u5185\u5BB9\u5F62\u5F0F\u3002
      </t-collapse-panel>
    </t-collapse>
    <t-space>
      <t-radio-group v-model="direction">
        <t-radio value="left">\u5DE6\u8FB9</t-radio>
        <t-radio value="right">\u53F3\u8FB9</t-radio>
      </t-radio-group>
    </t-space>
    <div style="margin-top: 10px">
      <t-checkbox v-model="onlyIcon">\u4EC5\u56FE\u6807\u54CD\u5E94\u70B9\u51FB</t-checkbox>
    </div>
  </t-space>
</template>
<script setup lang="jsx">
import { ref } from 'vue';
import { StarIcon, LogoGithubIcon } from 'tdesign-icons-vue';

const direction = ref('left');
const onlyIcon = ref(false);
const renderLogo = () => <LogoGithubIcon />;
<\/script>
`,_=`<template>
  <t-collapse>
    <t-collapse-panel value="0" header="\u8FD9\u662F\u4E00\u4E2A\u6298\u53E0\u6807\u9898\u53EF\u4EE5\u8BBE\u7F6E\u53F3\u4FA7\u64CD\u4F5C\u533A\u57DF" :disabled="disable0">
      <template #headerRightContent>
        <t-checkbox v-model="disable0">\u7981\u7528</t-checkbox>
        <t-button size="small" :style="{ marginLeft: '8px' }">\u64CD\u4F5C</t-button>
      </template>
      \u8FD9\u90E8\u5206\u662F\u6BCF\u4E2A\u6298\u53E0\u9762\u677F\u6298\u53E0\u6216\u5C55\u5F00\u7684\u5185\u5BB9\uFF0C\u53EF\u6839\u636E\u4E0D\u540C\u4E1A\u52A1\u6216\u7528\u6237\u7684\u4F7F\u7528\u8BC9\u6C42\uFF0C\u8FDB\u884C\u81EA\u5B9A\u4E49\u586B\u5145\u3002\u53EF\u4EE5\u662F\u7EAF\u6587\u672C\u3001\u56FE\u6587\u3001\u5B50\u5217\u8868\u7B49\u5185\u5BB9\u5F62\u5F0F\u3002
    </t-collapse-panel>
    <t-collapse-panel value="1" header="\u8FD9\u662F\u4E00\u4E2A\u6298\u53E0\u6807\u9898\u53EF\u4EE5\u8BBE\u7F6E\u53F3\u4FA7\u64CD\u4F5C\u533A\u57DF" :disabled="disable1">
      <template #headerRightContent>
        <t-checkbox v-model="disable1">\u7981\u7528</t-checkbox>
        <t-button size="small" :style="{ marginLeft: '8px' }">\u64CD\u4F5C</t-button>
      </template>
      \u8FD9\u90E8\u5206\u662F\u6BCF\u4E2A\u6298\u53E0\u9762\u677F\u6298\u53E0\u6216\u5C55\u5F00\u7684\u5185\u5BB9\uFF0C\u53EF\u6839\u636E\u4E0D\u540C\u4E1A\u52A1\u6216\u7528\u6237\u7684\u4F7F\u7528\u8BC9\u6C42\uFF0C\u8FDB\u884C\u81EA\u5B9A\u4E49\u586B\u5145\u3002\u53EF\u4EE5\u662F\u7EAF\u6587\u672C\u3001\u56FE\u6587\u3001\u5B50\u5217\u8868\u7B49\u5185\u5BB9\u5F62\u5F0F\u3002
    </t-collapse-panel>
    <t-collapse-panel value="2" header="\u8FD9\u662F\u4E00\u4E2A\u6298\u53E0\u6807\u9898\u53EF\u4EE5\u8BBE\u7F6E\u53F3\u4FA7\u64CD\u4F5C\u533A\u57DF" :disabled="disable2">
      <template #headerRightContent>
        <t-checkbox v-model="disable2">\u7981\u7528</t-checkbox>
        <t-button size="small" :style="{ marginLeft: '8px' }">\u64CD\u4F5C</t-button>
      </template>
      \u8FD9\u90E8\u5206\u662F\u6BCF\u4E2A\u6298\u53E0\u9762\u677F\u6298\u53E0\u6216\u5C55\u5F00\u7684\u5185\u5BB9\uFF0C\u53EF\u6839\u636E\u4E0D\u540C\u4E1A\u52A1\u6216\u7528\u6237\u7684\u4F7F\u7528\u8BC9\u6C42\uFF0C\u8FDB\u884C\u81EA\u5B9A\u4E49\u586B\u5145\u3002\u53EF\u4EE5\u662F\u7EAF\u6587\u672C\u3001\u56FE\u6587\u3001\u5B50\u5217\u8868\u7B49\u5185\u5BB9\u5F62\u5F0F\u3002
    </t-collapse-panel>
    <t-collapse-panel value="3" header="\u8FD9\u662F\u4E00\u4E2A\u6298\u53E0\u6807\u9898\u53EF\u4EE5\u8BBE\u7F6E\u53F3\u4FA7\u64CD\u4F5C\u533A\u57DF" :disabled="disable3">
      <template #headerRightContent>
        <t-checkbox v-model="disable3">\u7981\u7528</t-checkbox>
        <t-button size="small" :style="{ marginLeft: '8px' }">\u64CD\u4F5C</t-button>
      </template>
      \u8FD9\u90E8\u5206\u662F\u6BCF\u4E2A\u6298\u53E0\u9762\u677F\u6298\u53E0\u6216\u5C55\u5F00\u7684\u5185\u5BB9\uFF0C\u53EF\u6839\u636E\u4E0D\u540C\u4E1A\u52A1\u6216\u7528\u6237\u7684\u4F7F\u7528\u8BC9\u6C42\uFF0C\u8FDB\u884C\u81EA\u5B9A\u4E49\u586B\u5145\u3002\u53EF\u4EE5\u662F\u7EAF\u6587\u672C\u3001\u56FE\u6587\u3001\u5B50\u5217\u8868\u7B49\u5185\u5BB9\u5F62\u5F0F\u3002
    </t-collapse-panel>
  </t-collapse>
</template>
<script>
export default {
  data() {
    return {
      disable0: false,
      disable1: true,
      disable2: false,
      disable3: true,
    };
  },
};
<\/script>
`,L=`<template>
  <t-collapse>
    <t-collapse-panel value="0" header="\u8FD9\u662F\u4E00\u4E2A\u6298\u53E0\u6807\u9898\u53EF\u4EE5\u8BBE\u7F6E\u53F3\u4FA7\u64CD\u4F5C\u533A\u57DF" :disabled="disable0">
      <template #headerRightContent>
        <t-checkbox v-model="disable0">\u7981\u7528</t-checkbox>
        <t-button size="small" :style="{ marginLeft: '8px' }">\u64CD\u4F5C</t-button>
      </template>
      \u8FD9\u90E8\u5206\u662F\u6BCF\u4E2A\u6298\u53E0\u9762\u677F\u6298\u53E0\u6216\u5C55\u5F00\u7684\u5185\u5BB9\uFF0C\u53EF\u6839\u636E\u4E0D\u540C\u4E1A\u52A1\u6216\u7528\u6237\u7684\u4F7F\u7528\u8BC9\u6C42\uFF0C\u8FDB\u884C\u81EA\u5B9A\u4E49\u586B\u5145\u3002\u53EF\u4EE5\u662F\u7EAF\u6587\u672C\u3001\u56FE\u6587\u3001\u5B50\u5217\u8868\u7B49\u5185\u5BB9\u5F62\u5F0F\u3002
    </t-collapse-panel>
    <t-collapse-panel value="1" header="\u8FD9\u662F\u4E00\u4E2A\u6298\u53E0\u6807\u9898\u53EF\u4EE5\u8BBE\u7F6E\u53F3\u4FA7\u64CD\u4F5C\u533A\u57DF" :disabled="disable1">
      <template #headerRightContent>
        <t-checkbox v-model="disable1">\u7981\u7528</t-checkbox>
        <t-button size="small" :style="{ marginLeft: '8px' }">\u64CD\u4F5C</t-button>
      </template>
      \u8FD9\u90E8\u5206\u662F\u6BCF\u4E2A\u6298\u53E0\u9762\u677F\u6298\u53E0\u6216\u5C55\u5F00\u7684\u5185\u5BB9\uFF0C\u53EF\u6839\u636E\u4E0D\u540C\u4E1A\u52A1\u6216\u7528\u6237\u7684\u4F7F\u7528\u8BC9\u6C42\uFF0C\u8FDB\u884C\u81EA\u5B9A\u4E49\u586B\u5145\u3002\u53EF\u4EE5\u662F\u7EAF\u6587\u672C\u3001\u56FE\u6587\u3001\u5B50\u5217\u8868\u7B49\u5185\u5BB9\u5F62\u5F0F\u3002
    </t-collapse-panel>
    <t-collapse-panel value="2" header="\u8FD9\u662F\u4E00\u4E2A\u6298\u53E0\u6807\u9898\u53EF\u4EE5\u8BBE\u7F6E\u53F3\u4FA7\u64CD\u4F5C\u533A\u57DF" :disabled="disable2">
      <template #headerRightContent>
        <t-checkbox v-model="disable2">\u7981\u7528</t-checkbox>
        <t-button size="small" :style="{ marginLeft: '8px' }">\u64CD\u4F5C</t-button>
      </template>
      \u8FD9\u90E8\u5206\u662F\u6BCF\u4E2A\u6298\u53E0\u9762\u677F\u6298\u53E0\u6216\u5C55\u5F00\u7684\u5185\u5BB9\uFF0C\u53EF\u6839\u636E\u4E0D\u540C\u4E1A\u52A1\u6216\u7528\u6237\u7684\u4F7F\u7528\u8BC9\u6C42\uFF0C\u8FDB\u884C\u81EA\u5B9A\u4E49\u586B\u5145\u3002\u53EF\u4EE5\u662F\u7EAF\u6587\u672C\u3001\u56FE\u6587\u3001\u5B50\u5217\u8868\u7B49\u5185\u5BB9\u5F62\u5F0F\u3002
    </t-collapse-panel>
    <t-collapse-panel value="3" header="\u8FD9\u662F\u4E00\u4E2A\u6298\u53E0\u6807\u9898\u53EF\u4EE5\u8BBE\u7F6E\u53F3\u4FA7\u64CD\u4F5C\u533A\u57DF" :disabled="disable3">
      <template #headerRightContent>
        <t-checkbox v-model="disable3">\u7981\u7528</t-checkbox>
        <t-button size="small" :style="{ marginLeft: '8px' }">\u64CD\u4F5C</t-button>
      </template>
      \u8FD9\u90E8\u5206\u662F\u6BCF\u4E2A\u6298\u53E0\u9762\u677F\u6298\u53E0\u6216\u5C55\u5F00\u7684\u5185\u5BB9\uFF0C\u53EF\u6839\u636E\u4E0D\u540C\u4E1A\u52A1\u6216\u7528\u6237\u7684\u4F7F\u7528\u8BC9\u6C42\uFF0C\u8FDB\u884C\u81EA\u5B9A\u4E49\u586B\u5145\u3002\u53EF\u4EE5\u662F\u7EAF\u6587\u672C\u3001\u56FE\u6587\u3001\u5B50\u5217\u8868\u7B49\u5185\u5BB9\u5F62\u5F0F\u3002
    </t-collapse-panel>
  </t-collapse>
</template>
<script setup>
import { ref } from 'vue';

const disable0 = ref(false);
const disable1 = ref(true);
const disable2 = ref(false);
const disable3 = ref(true);
<\/script>
`,P=`<template>
  <t-space direction="vertical">
    <t-collapse :expand-icon="showArrow" :disabled="disabled" :borderless="borderless" @change="handlePanelChange">
      <t-collapse-panel value="0" header="\u8FD9\u662F\u4E00\u4E2A\u6298\u53E0\u6807\u9898">
        \u8FD9\u90E8\u5206\u662F\u6BCF\u4E2A\u6298\u53E0\u9762\u677F\u6298\u53E0\u6216\u5C55\u5F00\u7684\u5185\u5BB9\uFF0C\u53EF\u6839\u636E\u4E0D\u540C\u4E1A\u52A1\u6216\u7528\u6237\u7684\u4F7F\u7528\u8BC9\u6C42\uFF0C\u8FDB\u884C\u81EA\u5B9A\u4E49\u586B\u5145\u3002\u53EF\u4EE5\u662F\u7EAF\u6587\u672C\u3001\u56FE\u6587\u3001\u5B50\u5217\u8868\u7B49\u5185\u5BB9\u5F62\u5F0F\u3002
      </t-collapse-panel>
      <t-collapse-panel value="1">
        <template #header>\u8FD9\u662F\u4E00\u4E2A\u6298\u53E0\u6807\u9898</template>
        <template #default
        >\u8FD9\u90E8\u5206\u662F\u6BCF\u4E2A\u6298\u53E0\u9762\u677F\u6298\u53E0\u6216\u5C55\u5F00\u7684\u5185\u5BB9\uFF0C\u53EF\u6839\u636E\u4E0D\u540C\u4E1A\u52A1\u6216\u7528\u6237\u7684\u4F7F\u7528\u8BC9\u6C42\uFF0C\u8FDB\u884C\u81EA\u5B9A\u4E49\u586B\u5145\u3002\u53EF\u4EE5\u662F\u7EAF\u6587\u672C\u3001\u56FE\u6587\u3001\u5B50\u5217\u8868\u7B49\u5185\u5BB9\u5F62\u5F0F\u3002</template
        >
      </t-collapse-panel>
      <t-collapse-panel value="2">
        <template #header>\u8FD9\u662F\u4E00\u4E2A\u6298\u53E0\u6807\u9898</template>
        \u8FD9\u90E8\u5206\u662F\u6BCF\u4E2A\u6298\u53E0\u9762\u677F\u6298\u53E0\u6216\u5C55\u5F00\u7684\u5185\u5BB9\uFF0C\u53EF\u6839\u636E\u4E0D\u540C\u4E1A\u52A1\u6216\u7528\u6237\u7684\u4F7F\u7528\u8BC9\u6C42\uFF0C\u8FDB\u884C\u81EA\u5B9A\u4E49\u586B\u5145\u3002\u53EF\u4EE5\u662F\u7EAF\u6587\u672C\u3001\u56FE\u6587\u3001\u5B50\u5217\u8868\u7B49\u5185\u5BB9\u5F62\u5F0F\u3002
      </t-collapse-panel>
      <t-collapse-panel value="3" header="\u8FD9\u662F\u4E00\u4E2A\u6298\u53E0\u6807\u9898">
        \u8FD9\u90E8\u5206\u662F\u6BCF\u4E2A\u6298\u53E0\u9762\u677F\u6298\u53E0\u6216\u5C55\u5F00\u7684\u5185\u5BB9\uFF0C\u53EF\u6839\u636E\u4E0D\u540C\u4E1A\u52A1\u6216\u7528\u6237\u7684\u4F7F\u7528\u8BC9\u6C42\uFF0C\u8FDB\u884C\u81EA\u5B9A\u4E49\u586B\u5145\u3002\u53EF\u4EE5\u662F\u7EAF\u6587\u672C\u3001\u56FE\u6587\u3001\u5B50\u5217\u8868\u7B49\u5185\u5BB9\u5F62\u5F0F\u3002
      </t-collapse-panel>
    </t-collapse>
    <div class="button-area">
      <t-checkbox v-model="disabled">\u5168\u90E8\u7981\u7528</t-checkbox>
      <t-checkbox v-model="borderless">\u65E0\u8FB9\u6846\u6A21\u5F0F</t-checkbox>
      <t-checkbox v-model="showArrow">\u663E\u793A\u7BAD\u5934</t-checkbox>
    </div>
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      disabled: false,
      borderless: false,
      showArrow: true,
    };
  },
  methods: {
    handlePanelChange(val) {
      console.log(val);
    },
  },
};
<\/script>
`,w=`<template>
  <t-space direction="vertical">
    <t-collapse :expand-icon="showArrow" :disabled="disabled" :borderless="borderless" @change="handlePanelChange">
      <t-collapse-panel value="0" header="\u8FD9\u662F\u4E00\u4E2A\u6298\u53E0\u6807\u9898">
        \u8FD9\u90E8\u5206\u662F\u6BCF\u4E2A\u6298\u53E0\u9762\u677F\u6298\u53E0\u6216\u5C55\u5F00\u7684\u5185\u5BB9\uFF0C\u53EF\u6839\u636E\u4E0D\u540C\u4E1A\u52A1\u6216\u7528\u6237\u7684\u4F7F\u7528\u8BC9\u6C42\uFF0C\u8FDB\u884C\u81EA\u5B9A\u4E49\u586B\u5145\u3002\u53EF\u4EE5\u662F\u7EAF\u6587\u672C\u3001\u56FE\u6587\u3001\u5B50\u5217\u8868\u7B49\u5185\u5BB9\u5F62\u5F0F\u3002
      </t-collapse-panel>
      <t-collapse-panel value="1">
        <template #header>\u8FD9\u662F\u4E00\u4E2A\u6298\u53E0\u6807\u9898</template>
        <template #default
        >\u8FD9\u90E8\u5206\u662F\u6BCF\u4E2A\u6298\u53E0\u9762\u677F\u6298\u53E0\u6216\u5C55\u5F00\u7684\u5185\u5BB9\uFF0C\u53EF\u6839\u636E\u4E0D\u540C\u4E1A\u52A1\u6216\u7528\u6237\u7684\u4F7F\u7528\u8BC9\u6C42\uFF0C\u8FDB\u884C\u81EA\u5B9A\u4E49\u586B\u5145\u3002\u53EF\u4EE5\u662F\u7EAF\u6587\u672C\u3001\u56FE\u6587\u3001\u5B50\u5217\u8868\u7B49\u5185\u5BB9\u5F62\u5F0F\u3002</template
        >
      </t-collapse-panel>
      <t-collapse-panel value="2">
        <template #header>\u8FD9\u662F\u4E00\u4E2A\u6298\u53E0\u6807\u9898</template>
        \u8FD9\u90E8\u5206\u662F\u6BCF\u4E2A\u6298\u53E0\u9762\u677F\u6298\u53E0\u6216\u5C55\u5F00\u7684\u5185\u5BB9\uFF0C\u53EF\u6839\u636E\u4E0D\u540C\u4E1A\u52A1\u6216\u7528\u6237\u7684\u4F7F\u7528\u8BC9\u6C42\uFF0C\u8FDB\u884C\u81EA\u5B9A\u4E49\u586B\u5145\u3002\u53EF\u4EE5\u662F\u7EAF\u6587\u672C\u3001\u56FE\u6587\u3001\u5B50\u5217\u8868\u7B49\u5185\u5BB9\u5F62\u5F0F\u3002
      </t-collapse-panel>
      <t-collapse-panel value="3" header="\u8FD9\u662F\u4E00\u4E2A\u6298\u53E0\u6807\u9898">
        \u8FD9\u90E8\u5206\u662F\u6BCF\u4E2A\u6298\u53E0\u9762\u677F\u6298\u53E0\u6216\u5C55\u5F00\u7684\u5185\u5BB9\uFF0C\u53EF\u6839\u636E\u4E0D\u540C\u4E1A\u52A1\u6216\u7528\u6237\u7684\u4F7F\u7528\u8BC9\u6C42\uFF0C\u8FDB\u884C\u81EA\u5B9A\u4E49\u586B\u5145\u3002\u53EF\u4EE5\u662F\u7EAF\u6587\u672C\u3001\u56FE\u6587\u3001\u5B50\u5217\u8868\u7B49\u5185\u5BB9\u5F62\u5F0F\u3002
      </t-collapse-panel>
    </t-collapse>
    <div class="button-area">
      <t-checkbox v-model="disabled">\u5168\u90E8\u7981\u7528</t-checkbox>
      <t-checkbox v-model="borderless">\u65E0\u8FB9\u6846\u6A21\u5F0F</t-checkbox>
      <t-checkbox v-model="showArrow">\u663E\u793A\u7BAD\u5934</t-checkbox>
    </div>
  </t-space>
</template>
<script setup>
import { ref } from 'vue';

const disabled = ref(false);
const borderless = ref(false);
const showArrow = ref(true);
const handlePanelChange = (val) => {
  console.log(val);
};
<\/script>
`,h=[{name:"borderless",type:"Boolean",defaultValue:!1,options:[]},{name:"defaultExpandAll",type:"Boolean",defaultValue:!1,options:[]},{name:"disabled",type:"Boolean",defaultValue:!1,options:[]},{name:"expandIcon",type:"Boolean",defaultValue:!0,options:[]},{name:"expandIconPlacement",type:"enum",defaultValue:"left",options:[{label:"left",value:"left"},{label:"right",value:"right"}]},{name:"expandMutex",type:"Boolean",defaultValue:!1,options:[]},{name:"expandOnRowClick",type:"Boolean",defaultValue:!0,options:[]}];const c={};c.setup=(e,l)=>{const n=p(h),a=[{label:"collapse",value:"collapse"}],t={collapse:`
        <t-collapse v-bind="configProps">
          <t-collapse-panel header="\u8FD9\u662F\u4E00\u4E2A\u6298\u53E0\u6807\u9898">
            \u8FD9\u90E8\u5206\u662F\u6BCF\u4E2A\u6298\u53E0\u9762\u677F\u6298\u53E0\u6216\u5C55\u5F00\u7684\u5185\u5BB9\uFF0C\u53EF\u6839\u636E\u4E0D\u540C\u4E1A\u52A1\u6216\u7528\u6237\u7684\u4F7F\u7528\u8BC9\u6C42\uFF0C\u8FDB\u884C\u81EA\u5B9A\u4E49\u586B\u5145\u3002\u53EF\u4EE5\u662F\u7EAF\u6587\u672C\u3001\u56FE\u6587\u3001\u5B50\u5217\u8868\u7B49\u5185\u5BB9\u5F62\u5F0F\u3002
          </t-collapse-panel>
          <t-collapse-panel header="\u8FD9\u662F\u4E00\u4E2A\u6298\u53E0\u6807\u9898">
            \u8FD9\u90E8\u5206\u662F\u6BCF\u4E2A\u6298\u53E0\u9762\u677F\u6298\u53E0\u6216\u5C55\u5F00\u7684\u5185\u5BB9\uFF0C\u53EF\u6839\u636E\u4E0D\u540C\u4E1A\u52A1\u6216\u7528\u6237\u7684\u4F7F\u7528\u8BC9\u6C42\uFF0C\u8FDB\u884C\u81EA\u5B9A\u4E49\u586B\u5145\u3002\u53EF\u4EE5\u662F\u7EAF\u6587\u672C\u3001\u56FE\u6587\u3001\u5B50\u5217\u8868\u7B49\u5185\u5BB9\u5F62\u5F0F\u3002
          </t-collapse-panel>
        </t-collapse>
      `},o=p(`<template>${t[a[0].value].trim()}</template>`);function i(m){o.value=`<template>${t[m].trim()}</template>`}return{configList:n,panelList:a,usageCode:o,onPanelChange:i}};var r=function(){var e=this,l=e.$createElement,n=e._self._c||l;return n("base-usage",{attrs:{code:e.usageCode,"config-list":e.configList,"panel-list":e.panelList},on:{PanelChange:e.onPanelChange},scopedSlots:e._u([{key:"collapse",fn:function(a){var t=a.configProps;return[n("t-collapse",e._b({},"t-collapse",t,!1),[n("t-collapse-panel",{attrs:{header:"\u8FD9\u662F\u4E00\u4E2A\u6298\u53E0\u6807\u9898"}},[e._v(" \u8FD9\u90E8\u5206\u662F\u6BCF\u4E2A\u6298\u53E0\u9762\u677F\u6298\u53E0\u6216\u5C55\u5F00\u7684\u5185\u5BB9\uFF0C\u53EF\u6839\u636E\u4E0D\u540C\u4E1A\u52A1\u6216\u7528\u6237\u7684\u4F7F\u7528\u8BC9\u6C42\uFF0C\u8FDB\u884C\u81EA\u5B9A\u4E49\u586B\u5145\u3002\u53EF\u4EE5\u662F\u7EAF\u6587\u672C\u3001\u56FE\u6587\u3001\u5B50\u5217\u8868\u7B49\u5185\u5BB9\u5F62\u5F0F\u3002 ")]),n("t-collapse-panel",{attrs:{header:"\u8FD9\u662F\u4E00\u4E2A\u6298\u53E0\u6807\u9898"}},[e._v(" \u8FD9\u90E8\u5206\u662F\u6BCF\u4E2A\u6298\u53E0\u9762\u677F\u6298\u53E0\u6216\u5C55\u5F00\u7684\u5185\u5BB9\uFF0C\u53EF\u6839\u636E\u4E0D\u540C\u4E1A\u52A1\u6216\u7528\u6237\u7684\u4F7F\u7528\u8BC9\u6C42\uFF0C\u8FDB\u884C\u81EA\u5B9A\u4E49\u586B\u5145\u3002\u53EF\u4EE5\u662F\u7EAF\u6587\u672C\u3001\u56FE\u6587\u3001\u5B50\u5217\u8868\u7B49\u5185\u5BB9\u5F62\u5F0F\u3002 ")])],1)]}}])})},v=[];r._withStripped=!0;const s={};var d=u(c,r,v,!1,b,null,null,null);function b(e){for(let l in s)this[l]=s[l]}d.options.__file="../src/collapse/_usage/index.vue";var R=function(){return d.exports}();export{g as D,R as U,x as a,C as b,k as c,y as d,I as e,_ as f,L as g,P as h,w as i};
