var n=`<template>
  <t-space direction="vertical" style="max-width: 500px">
    <t-input-adornment prepend="http://">
      <t-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" />
    </t-input-adornment>

    <t-input-adornment append=".com">
      <t-tag-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" />
    </t-input-adornment>

    <t-input-adornment prepend="http://" append=".com">
      <t-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" />
    </t-input-adornment>
  </t-space>
</template>
`,t=`<template>
  <t-space direction="vertical" style="max-width: 500px">
    <t-input-adornment prepend="http://">
      <t-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" />
    </t-input-adornment>

    <t-input-adornment append=".com">
      <t-tag-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" />
    </t-input-adornment>

    <t-input-adornment prepend="http://" append=".com">
      <t-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" />
    </t-input-adornment>
  </t-space>
</template>
`,e=`<template>
  <t-space direction="vertical" class="adornment-select" style="max-width: 500px">
    <t-input-adornment :prepend="protocolSelect">
      <t-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" />
    </t-input-adornment>

    <t-input-adornment :append="tldSelect">
      <t-tag-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" />
    </t-input-adornment>

    <t-input-adornment :prepend="protocolSelect" :append="tldSelect">
      <t-select
        :options="['tencent', 'qq', 'cloud.tencent'].map((value) => ({ label: value, value }))"
        defaultValue="tencent"
      />
    </t-input-adornment>
  </t-space>
</template>

<script lang="jsx">
export default {
  methods: {
    protocolSelect() {
      return (
        <t-select
          autoWidth
          options={['http://', 'https://'].map((value) => ({ label: value, value }))}
          defaultValue="http://"
        />
      );
    },
    tldSelect() {
      return (
        <t-select
          autoWidth
          options={['.com', '.cn', '.net', '.org'].map((value) => ({ label: value, value }))}
          defaultValue=".cn"
        />
      );
    },
  },
};
<\/script>
`,p=`<template>
  <t-space direction="vertical" class="adornment-select" style="max-width: 500px">
    <t-input-adornment :prepend="protocolSelect">
      <t-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" />
    </t-input-adornment>

    <t-input-adornment :append="tldSelect">
      <t-tag-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" />
    </t-input-adornment>

    <t-input-adornment :prepend="protocolSelect" :append="tldSelect">
      <t-select
        :options="['tencent', 'qq', 'cloud.tencent'].map((value) => ({ label: value, value }))"
        defaultValue="tencent"
      />
    </t-input-adornment>
  </t-space>
</template>

<script setup lang="jsx">
const protocolSelect = () => (
  <t-select
    autoWidth
    options={['http://', 'https://'].map((value) => ({
      label: value,
      value,
    }))}
    defaultValue="http://"
  />
);
const tldSelect = () => (
  <t-select
    autoWidth
    options={['.com', '.cn', '.net', '.org'].map((value) => ({
      label: value,
      value,
    }))}
    defaultValue=".cn"
  />
);
<\/script>
`;export{n as D,t as a,e as b,p as c};
