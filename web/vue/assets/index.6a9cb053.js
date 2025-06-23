import{Y as p,n as d}from"./index.663c003f.js";var h=`<template>
  <t-space direction="vertical" size="large">
    <!-- \u5982\u679C t-step-item \u6CA1\u6709\u4F20\u5165 value\uFF0C\u5219\u4F7F\u7528 index \u4F5C\u4E3A\u552F\u4E00\u6807\u8BC6 -->
    <t-steps :defaultCurrent="1">
      <t-step-item title="\u5DF2\u5B8C\u6210\u7684\u6B65\u9AA4"></t-step-item>
      <t-step-item title="\u8FDB\u884C\u4E2D\u7684\u6B65\u9AA4"></t-step-item>
      <t-step-item title="\u672A\u8FDB\u884C\u7684\u6B65\u9AA4"></t-step-item>
      <t-step-item title="\u672A\u8FDB\u884C\u7684\u6B65\u9AA4"></t-step-item>
    </t-steps>
    <!-- \u4F7F\u7528 options \u6E32\u67D3\u6B65\u9AA4\u6761 -->
    <t-steps v-model="current" :options="steps"></t-steps>
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      current: 'third',
      steps: [
        { title: '\u5DF2\u5B8C\u6210\u7684\u6B65\u9AA4', value: 'first', content: '\u70B9\u51FB\u5207\u6362\u6B65\u9AA4' },
        { title: '\u8FDB\u884C\u4E2D\u7684\u6B65\u9AA4', value: 'second', content: '\u70B9\u51FB\u5207\u6362\u6B65\u9AA4' },
        { title: '\u8FDB\u884C\u4E2D\u7684\u6B65\u9AA4', value: 'third', content: () => '\u8FD9\u662F\u8FDB\u884C\u4E2D\u7684\u6B65\u9AA4' },
        { title: '\u5DF2\u5B8C\u6210\u7684\u6B65\u9AA4', value: 'forth', content: '\u70B9\u51FB\u5207\u6362\u6B65\u9AA4' },
      ],
    };
  },
};
<\/script>
`,b=`<template>
  <t-space direction="vertical" size="large">
    <!-- \u5982\u679C t-step-item \u6CA1\u6709\u4F20\u5165 value\uFF0C\u5219\u4F7F\u7528 index \u4F5C\u4E3A\u552F\u4E00\u6807\u8BC6 -->
    <t-steps :defaultCurrent="1">
      <t-step-item title="\u5DF2\u5B8C\u6210\u7684\u6B65\u9AA4"></t-step-item>
      <t-step-item title="\u8FDB\u884C\u4E2D\u7684\u6B65\u9AA4"></t-step-item>
      <t-step-item title="\u672A\u8FDB\u884C\u7684\u6B65\u9AA4"></t-step-item>
      <t-step-item title="\u672A\u8FDB\u884C\u7684\u6B65\u9AA4"></t-step-item>
    </t-steps>
    <!-- \u4F7F\u7528 options \u6E32\u67D3\u6B65\u9AA4\u6761 -->
    <t-steps v-model="current" :options="steps"></t-steps>
  </t-space>
</template>

<script setup>
import { ref } from 'vue';

const current = ref('third');
const steps = ref([
  {
    title: '\u5DF2\u5B8C\u6210\u7684\u6B65\u9AA4',
    value: 'first',
    content: '\u70B9\u51FB\u5207\u6362\u6B65\u9AA4',
  },
  {
    title: '\u8FDB\u884C\u4E2D\u7684\u6B65\u9AA4',
    value: 'second',
    content: '\u70B9\u51FB\u5207\u6362\u6B65\u9AA4',
  },
  {
    title: '\u8FDB\u884C\u4E2D\u7684\u6B65\u9AA4',
    value: 'third',
    content: () => '\u8FD9\u662F\u8FDB\u884C\u4E2D\u7684\u6B65\u9AA4',
  },
  {
    title: '\u5DF2\u5B8C\u6210\u7684\u6B65\u9AA4',
    value: 'forth',
    content: '\u70B9\u51FB\u5207\u6362\u6B65\u9AA4',
  },
]);
<\/script>
`,g=`<template>
  <t-steps theme="dot" :current="current" readonly>
    <t-step-item title="\u5DF2\u5B8C\u6210\u7684\u6B65\u9AA4" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"></t-step-item>
    <t-step-item title="\u8FDB\u884C\u4E2D\u7684\u6B65\u9AA4" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"></t-step-item>
    <t-step-item title="\u672A\u8FDB\u884C\u7684\u6B65\u9AA4" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"></t-step-item>
    <t-step-item title="\u672A\u8FDB\u884C\u7684\u6B65\u9AA4" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"></t-step-item>
  </t-steps>
</template>

<script>
export default {
  data() {
    return {
      current: 1,
    };
  },
};
<\/script>
`,x=`<template>
  <t-steps theme="dot" :current="current" readonly>
    <t-step-item title="\u5DF2\u5B8C\u6210\u7684\u6B65\u9AA4" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"></t-step-item>
    <t-step-item title="\u8FDB\u884C\u4E2D\u7684\u6B65\u9AA4" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"></t-step-item>
    <t-step-item title="\u672A\u8FDB\u884C\u7684\u6B65\u9AA4" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"></t-step-item>
    <t-step-item title="\u672A\u8FDB\u884C\u7684\u6B65\u9AA4" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"></t-step-item>
  </t-steps>
</template>

<script setup>
import { ref } from 'vue';

const current = ref(1);
<\/script>
`,I=`<template>
  <t-space class="justify-around">
    <t-steps layout="vertical" theme="dot" :current="1" readonly>
      <t-step-item title="\u5DF2\u5B8C\u6210\u7684\u6B65\u9AA4" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"></t-step-item>
      <t-step-item title="\u8FDB\u884C\u4E2D\u7684\u6B65\u9AA4" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"></t-step-item>
      <t-step-item title="\u672A\u8FDB\u884C\u7684\u6B65\u9AA4" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"></t-step-item>
      <t-step-item title="\u672A\u8FDB\u884C\u7684\u6B65\u9AA4" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"></t-step-item>
    </t-steps>

    <t-steps layout="vertical" sequence="reverse" theme="dot" :current="1" readonly>
      <t-step-item title="\u5DF2\u5B8C\u6210\u7684\u6B65\u9AA4" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"></t-step-item>
      <t-step-item title="\u5DF2\u5B8C\u6210\u7684\u6B65\u9AA4" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"></t-step-item>
      <t-step-item title="\u8FDB\u884C\u4E2D\u7684\u6B65\u9AA4" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"></t-step-item>
      <t-step-item title="\u672A\u8FDB\u884C\u7684\u6B65\u9AA4" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"></t-step-item>
    </t-steps>
  </t-space>
</template>
<style scoped>
.justify-around {
  justify-content: space-around;
}
</style>
`,_=`<template>
  <t-space class="justify-around">
    <t-steps layout="vertical" theme="dot" :current="1" readonly>
      <t-step-item title="\u5DF2\u5B8C\u6210\u7684\u6B65\u9AA4" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"></t-step-item>
      <t-step-item title="\u8FDB\u884C\u4E2D\u7684\u6B65\u9AA4" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"></t-step-item>
      <t-step-item title="\u672A\u8FDB\u884C\u7684\u6B65\u9AA4" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"></t-step-item>
      <t-step-item title="\u672A\u8FDB\u884C\u7684\u6B65\u9AA4" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"></t-step-item>
    </t-steps>

    <t-steps layout="vertical" sequence="reverse" theme="dot" :current="1" readonly>
      <t-step-item title="\u5DF2\u5B8C\u6210\u7684\u6B65\u9AA4" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"></t-step-item>
      <t-step-item title="\u5DF2\u5B8C\u6210\u7684\u6B65\u9AA4" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"></t-step-item>
      <t-step-item title="\u8FDB\u884C\u4E2D\u7684\u6B65\u9AA4" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"></t-step-item>
      <t-step-item title="\u672A\u8FDB\u884C\u7684\u6B65\u9AA4" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"></t-step-item>
    </t-steps>
  </t-space>
</template>
<style scoped>
.justify-around {
  justify-content: space-around;
}
</style>
`,z=`<template>
  <t-space :size="236" class="justify-around">
    <t-steps layout="vertical" :current="1" readonly>
      <t-step-item title="\u5DF2\u5B8C\u6210\u7684\u6B65\u9AA4" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"></t-step-item>
      <t-step-item title="\u8FDB\u884C\u4E2D\u7684\u6B65\u9AA4" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"></t-step-item>
      <t-step-item title="\u672A\u8FDB\u884C\u7684\u6B65\u9AA4" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"></t-step-item>
      <t-step-item title="\u672A\u8FDB\u884C\u7684\u6B65\u9AA4" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"></t-step-item>
    </t-steps>
    <t-steps layout="vertical" sequence="reverse" :current="1" readonly>
      <t-step-item title="\u5DF2\u5B8C\u6210\u7684\u6B65\u9AA4" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"></t-step-item>
      <t-step-item title="\u5DF2\u5B8C\u6210\u7684\u6B65\u9AA4" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"></t-step-item>
      <t-step-item title="\u8FDB\u884C\u4E2D\u7684\u6B65\u9AA4" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"></t-step-item>
      <t-step-item title="\u672A\u8FDB\u884C\u7684\u6B65\u9AA4" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"></t-step-item>
    </t-steps>
  </t-space>
</template>

<style scoped>
.justify-around {
  justify-content: space-around;
}
</style>
`,j=`<template>
  <t-space :size="236" class="justify-around">
    <t-steps layout="vertical" :current="1" readonly>
      <t-step-item title="\u5DF2\u5B8C\u6210\u7684\u6B65\u9AA4" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"></t-step-item>
      <t-step-item title="\u8FDB\u884C\u4E2D\u7684\u6B65\u9AA4" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"></t-step-item>
      <t-step-item title="\u672A\u8FDB\u884C\u7684\u6B65\u9AA4" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"></t-step-item>
      <t-step-item title="\u672A\u8FDB\u884C\u7684\u6B65\u9AA4" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"></t-step-item>
    </t-steps>
    <t-steps layout="vertical" sequence="reverse" :current="1" readonly>
      <t-step-item title="\u5DF2\u5B8C\u6210\u7684\u6B65\u9AA4" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"></t-step-item>
      <t-step-item title="\u5DF2\u5B8C\u6210\u7684\u6B65\u9AA4" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"></t-step-item>
      <t-step-item title="\u8FDB\u884C\u4E2D\u7684\u6B65\u9AA4" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"></t-step-item>
      <t-step-item title="\u672A\u8FDB\u884C\u7684\u6B65\u9AA4" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"></t-step-item>
    </t-steps>
  </t-space>
</template>

<style scoped>
.justify-around {
  justify-content: space-around;
}
</style>
`,k=`<template>
  <t-space direction="vertical" size="large">
    <t-steps :current="1" readonly>
      <t-step-item title="\u5DF2\u5B8C\u6210\u7684\u6B65\u9AA4" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"></t-step-item>
      <t-step-item title="\u8FDB\u884C\u4E2D\u7684\u6B65\u9AA4" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"></t-step-item>
      <t-step-item title="\u672A\u8FDB\u884C\u7684\u6B65\u9AA4" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"></t-step-item>
      <t-step-item title="\u672A\u8FDB\u884C\u7684\u6B65\u9AA4" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"></t-step-item>
    </t-steps>
    <t-steps :current="2" readonly>
      <t-step-item title="\u5DF2\u5B8C\u6210\u7684\u6B65\u9AA4" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"></t-step-item>
      <t-step-item title="\u5DF2\u5B8C\u6210\u7684\u6B65\u9AA4" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"></t-step-item>
      <t-step-item title="\u9519\u8BEF\u7684\u6B65\u9AA4" status="error" content="\u8FD9\u91CC\u662F\u9519\u8BEF\u63D0\u793A\u6587\u5B57"></t-step-item>
      <t-step-item title="\u672A\u8FDB\u884C\u7684\u6B65\u9AA4" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"></t-step-item>
    </t-steps>
  </t-space>
</template>
`,D=`<template>
  <t-space direction="vertical" size="large">
    <t-steps :current="1" readonly>
      <t-step-item title="\u5DF2\u5B8C\u6210\u7684\u6B65\u9AA4" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"></t-step-item>
      <t-step-item title="\u8FDB\u884C\u4E2D\u7684\u6B65\u9AA4" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"></t-step-item>
      <t-step-item title="\u672A\u8FDB\u884C\u7684\u6B65\u9AA4" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"></t-step-item>
      <t-step-item title="\u672A\u8FDB\u884C\u7684\u6B65\u9AA4" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"></t-step-item>
    </t-steps>
    <t-steps :current="2" readonly>
      <t-step-item title="\u5DF2\u5B8C\u6210\u7684\u6B65\u9AA4" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"></t-step-item>
      <t-step-item title="\u5DF2\u5B8C\u6210\u7684\u6B65\u9AA4" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"></t-step-item>
      <t-step-item title="\u9519\u8BEF\u7684\u6B65\u9AA4" status="error" content="\u8FD9\u91CC\u662F\u9519\u8BEF\u63D0\u793A\u6587\u5B57"></t-step-item>
      <t-step-item title="\u672A\u8FDB\u884C\u7684\u6B65\u9AA4" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"></t-step-item>
    </t-steps>
  </t-space>
</template>
`,q=`<template>
  <t-steps :current="1" readonly>
    <!-- \u65B9\u5F0F\u4E00\uFF1A\u4F7F\u7528\u63D2\u69FD\u81EA\u5B9A\u4E49\u56FE\u6807 -->
    <t-step-item title="\u767B\u5F55" content="\u5DF2\u5B8C\u6210\u72B6\u6001">
      <t-login-icon slot="icon" />
    </t-step-item>
    <!-- \u65B9\u5F0F\u4E8C\uFF1A\u4F7F\u7528\u6E32\u67D3\u51FD\u6570 icon \u81EA\u5B9A\u4E49\u56FE\u6807 -->
    <t-step-item title="\u8D2D\u7269" content="\u8FDB\u884C\u4E2D\u72B6\u6001" :icon="renderCartIcon"></t-step-item>
    <t-step-item title="\u652F\u4ED8" content="\u672A\u5F00\u59CB" :icon="renderWalletIcon"></t-step-item>
    <t-step-item title="\u5B8C\u6210" content="\u672A\u5F00\u59CB" :icon="renderSuccessIcon"></t-step-item>
  </t-steps>
</template>

<script lang="jsx">
import {
  LoginIcon, CartIcon, WalletIcon, CheckCircleIcon,
} from 'tdesign-icons-vue';

export default {
  components: {
    TLoginIcon: LoginIcon,
  },
  methods: {
    // \u5982\u679C\u9047\u5230 h / createElement \u51FD\u6570\u62A5\u9519\uFF0C\u8BF7\u7ED9\u6E32\u67D3\u51FD\u6570\u6DFB\u52A0\u53C2\u6570 h\u3002\u793A\u4F8B\uFF1ArenderCartIcon(h) {}
    renderCartIcon() {
      return <CartIcon />;
    },
    renderWalletIcon() {
      return <WalletIcon />;
    },
    renderSuccessIcon() {
      return <CheckCircleIcon />;
    },
  },
};
<\/script>
`,L=`<template>
  <t-steps :current="1" readonly>
    <!-- \u65B9\u5F0F\u4E00\uFF1A\u4F7F\u7528\u63D2\u69FD\u81EA\u5B9A\u4E49\u56FE\u6807 -->
    <t-step-item title="\u767B\u5F55" content="\u5DF2\u5B8C\u6210\u72B6\u6001">
      <t-login-icon slot="icon" />
    </t-step-item>
    <!-- \u65B9\u5F0F\u4E8C\uFF1A\u4F7F\u7528\u6E32\u67D3\u51FD\u6570 icon \u81EA\u5B9A\u4E49\u56FE\u6807 -->
    <t-step-item title="\u8D2D\u7269" content="\u8FDB\u884C\u4E2D\u72B6\u6001" :icon="renderCartIcon"></t-step-item>
    <t-step-item title="\u652F\u4ED8" content="\u672A\u5F00\u59CB" :icon="renderWalletIcon"></t-step-item>
    <t-step-item title="\u5B8C\u6210" content="\u672A\u5F00\u59CB" :icon="renderSuccessIcon"></t-step-item>
  </t-steps>
</template>

<script setup lang="jsx">
import {
  LoginIcon as TLoginIcon, CartIcon, WalletIcon, CheckCircleIcon,
} from 'tdesign-icons-vue';
// \u5982\u679C\u9047\u5230 h / createElement \u51FD\u6570\u62A5\u9519\uFF0C\u8BF7\u7ED9\u6E32\u67D3\u51FD\u6570\u6DFB\u52A0\u53C2\u6570 h\u3002\u793A\u4F8B\uFF1ArenderCartIcon(h) {}
const renderCartIcon = () => <CartIcon />;
const renderWalletIcon = () => <WalletIcon />;
const renderSuccessIcon = () => <CheckCircleIcon />;
<\/script>
`,S=`<template>
  <t-steps layout="vertical" :current="current" :onChange="onCurChanged">
    <t-step-item :title="renderTitle" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57">
      <template slot="extra" v-if="current === 0">
        <t-button size="small" variant="base" @click.stop="current++">\u4E0B\u4E00\u6B65</t-button>
      </template>
    </t-step-item>
    <t-step-item title="\u6B65\u9AA42" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57">
      <template slot="extra" v-if="current === 1">
        <t-space size="small">
          <t-button size="small" variant="text" @click.stop="current--">\u4E0A\u4E00\u6B65</t-button>
          <t-button size="small" variant="base" @click.stop="current++">\u4E0B\u4E00\u6B65</t-button>
        </t-space>
      </template>
    </t-step-item>
    <t-step-item title="\u6B65\u9AA43" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57">
      <template slot="extra" v-if="current === 2">
        <t-space size="small">
          <t-button size="small" variant="text" @click.stop="current--">\u4E0A\u4E00\u6B65</t-button>
          <t-button size="small" variant="base" @click.stop="current++">\u4E0B\u4E00\u6B65</t-button>
        </t-space>
      </template>
    </t-step-item>
    <t-step-item title="\u6B65\u9AA44" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57">
      <template slot="extra" v-if="current === 3">
        <t-button size="small" @click.stop="current--">\u4E0A\u4E00\u6B65</t-button>
      </template>
    </t-step-item>
  </t-steps>
</template>

<script lang="jsx">
export default {
  data() {
    return {
      current: 1,
    };
  },
  methods: {
    onCurChanged(cur, pre) {
      this.current = cur;
      console.log('TDesign Steps:', \`current: \${cur}, previous: \${pre}\`);
    },
    renderTitle() {
      return <div class="demo">\u6B65\u9AA41</div>;
    },
  },
};
<\/script>
`,T=`<template>
  <t-steps layout="vertical" :current="current" :onChange="onCurChanged">
    <t-step-item :title="renderTitle" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57">
      <template slot="extra" v-if="current === 0">
        <t-button size="small" variant="base" @click.stop="current++">\u4E0B\u4E00\u6B65</t-button>
      </template>
    </t-step-item>
    <t-step-item title="\u6B65\u9AA42" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57">
      <template slot="extra" v-if="current === 1">
        <t-space size="small">
          <t-button size="small" variant="text" @click.stop="current--">\u4E0A\u4E00\u6B65</t-button>
          <t-button size="small" variant="base" @click.stop="current++">\u4E0B\u4E00\u6B65</t-button>
        </t-space>
      </template>
    </t-step-item>
    <t-step-item title="\u6B65\u9AA43" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57">
      <template slot="extra" v-if="current === 2">
        <t-space size="small">
          <t-button size="small" variant="text" @click.stop="current--">\u4E0A\u4E00\u6B65</t-button>
          <t-button size="small" variant="base" @click.stop="current++">\u4E0B\u4E00\u6B65</t-button>
        </t-space>
      </template>
    </t-step-item>
    <t-step-item title="\u6B65\u9AA44" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57">
      <template slot="extra" v-if="current === 3">
        <t-button size="small" @click.stop="current--">\u4E0A\u4E00\u6B65</t-button>
      </template>
    </t-step-item>
  </t-steps>
</template>

<script setup lang="jsx">
import { ref } from 'vue';

const current = ref(1);
const onCurChanged = (cur, pre) => {
  current.value = cur;
  console.log('TDesign Steps:', \`current: \${cur}, previous: \${pre}\`);
};
const renderTitle = () => <div class="demo">\u6B65\u9AA41</div>;
<\/script>
`,v=[{name:"layout",type:"enum",defaultValue:"horizontal",options:[{label:"horizontal",value:"horizontal"},{label:"vertical",value:"vertical"}]},{name:"readonly",type:"Boolean",defaultValue:!1,options:[]},{name:"separator",type:"enum",defaultValue:"line",options:[{label:"line",value:"line"},{label:"dashed",value:"dashed"},{label:"arrow",value:"arrow"}]},{name:"sequence",type:"enum",defaultValue:"positive",options:[{label:"positive",value:"positive"},{label:"reverse",value:"reverse"}]},{name:"theme",type:"enum",defaultValue:"default",options:[{label:"default",value:"default"},{label:"dot",value:"dot"}]}];const r={};r.setup=(t,n)=>{const e=p(v),s=[{label:"steps",value:"steps"}],i={steps:`
        <t-steps :defaultCurrent="1" v-bind="configProps">
          <t-step-item title="\u6B65\u9AA41" content="\u63D0\u793A\u6587\u5B57" />
          <t-step-item title="\u6B65\u9AA42" content="\u63D0\u793A\u6587\u5B57" />
          <t-step-item title="\u6B65\u9AA43" content="\u63D0\u793A\u6587\u5B57" />
        </t-steps>
      `},o=p(`<template>${i[s[0].value].trim()}</template>`);function m(u){o.value=`<template>${i[u].trim()}</template>`}return{configList:e,panelList:s,usageCode:o,onPanelChange:m}};var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("base-usage",{attrs:{code:t.usageCode,"config-list":t.configList,"panel-list":t.panelList},on:{PanelChange:t.onPanelChange},scopedSlots:t._u([{key:"steps",fn:function(s){var i=s.configProps;return[e("t-steps",t._b({attrs:{defaultCurrent:1}},"t-steps",i,!1),[e("t-step-item",{attrs:{title:"\u6B65\u9AA41",content:"\u63D0\u793A\u6587\u5B57"}}),e("t-step-item",{attrs:{title:"\u6B65\u9AA42",content:"\u63D0\u793A\u6587\u5B57"}}),e("t-step-item",{attrs:{title:"\u6B65\u9AA43",content:"\u63D0\u793A\u6587\u5B57"}})],1)]}}])})},f=[];a._withStripped=!0;const l={};var c=d(r,a,f,!1,C,null,null,null);function C(t){for(let n in l)this[n]=l[n]}c.options.__file="../src/steps/_usage/index.vue";var W=function(){return c.exports}();export{h as D,W as U,b as a,g as b,x as c,I as d,_ as e,z as f,j as g,k as h,D as i,q as j,L as k,S as l,T as m};
