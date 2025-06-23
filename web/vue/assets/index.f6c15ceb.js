import{Y as s,n as v}from"./index.663c003f.js";var g=`<template>
  <t-space>
    <!-- \u65B9\u5F0F\u4E00\uFF1A\u4F7F\u7528 options \u8F93\u51FA\u4E0B\u62C9\u9009\u9879\u3002\u4F18\u5148\u7EA7\u9AD8\u4E8E t-option-->
    <t-select label="\u5C5E\u6027\uFF1A" v-model="value1" :options="options1" placeholder="\u8BF7\u9009\u62E9\u4E91\u89E3\u51B3\u65B9\u6848" />

    <!-- \u65B9\u5F0F\u4E8C\uFF1A\u4F7F\u7528 t-option \u8F93\u51FA\u4E0B\u62C9\u9009\u9879\u3002options \u548C t-option \u4E24\u79CD\u5B9E\u73B0\u65B9\u5F0F\u4E8C\u9009\u4E00\u5373\u53EF -->
    <t-select label="\u63D2\u69FD\uFF1A" v-model="value2" placeholder="\u8BF7\u9009\u62E9\u4E91\u4EA7\u54C1">
      <t-option v-for="item in options2" :value="item.value" :label="item.label" :key="item.value"></t-option>
    </t-select>
  </t-space>
</template>

<script lang="jsx">
export default {
  data() {
    return {
      value1: '',
      value2: '',
      // \u5982\u679C\u6B64\u5904\u6570\u636E\u5B57\u6BB5\u4E0D\u662F label \u548C value\uFF0C\u800C\u662F name \u548C id\uFF0C\u5219\u53EF\u4EE5\u4F20\u5165\u53C2\u6570 \`keys\` \u5B9A\u4E49\u522B\u540D
      // \u793A\u4F8B\uFF1A <t-select :options="options1" :keys="{ label: 'name', value: 'id' }" />
      options1: [
        { label: '\u67B6\u6784\u4E91', value: '1', title: '\u67B6\u6784\u4E91\u9009\u9879' },
        { label: '\u5927\u6570\u636E', value: '2' },
        { label: '\u533A\u5757\u94FE', value: '3' },
        { label: '\u7269\u8054\u7F51', value: '4', disabled: true },
        { label: '\u4EBA\u5DE5\u667A\u80FD', value: '5' },
        // \u53EF\u4EE5\u4F7F\u7528\u6E32\u67D3\u51FD\u6570\u81EA\u5B9A\u4E49\u4E0B\u62C9\u9009\u9879\u5185\u5BB9\u548C\u6837\u5F0F
        {
          label: '\u8BA1\u7B97\u573A\u666F',
          value: true,
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          content: (h) => <span>\u8BA1\u7B97\u573A\u666F\uFF08\u9AD8\u6027\u80FD\u8BA1\u7B97\uFF09</span>,
        },
      ],
      options2: [
        { label: '\u4E91\u670D\u52A1\u5668', value: '1' },
        { label: '\u4E91\u6570\u636E\u5E93', value: '2' },
        { label: '\u57DF\u540D\u6CE8\u518C', value: '3' },
        { label: '\u7F51\u7AD9\u5907\u6848', value: '4' },
        { label: '\u5BF9\u8C61\u5B58\u50A8', value: '5' },
        { label: '\u4F4E\u4EE3\u7801\u5E73\u53F0', value: '6' },
      ],
    };
  },
};
<\/script>
`,x=`<template>
  <t-space>
    <!-- \u65B9\u5F0F\u4E00\uFF1A\u4F7F\u7528 options \u8F93\u51FA\u4E0B\u62C9\u9009\u9879\u3002\u4F18\u5148\u7EA7\u9AD8\u4E8E t-option-->
    <t-select label="\u5C5E\u6027\uFF1A" v-model="value1" :options="options1" placeholder="\u8BF7\u9009\u62E9\u4E91\u89E3\u51B3\u65B9\u6848" />

    <!-- \u65B9\u5F0F\u4E8C\uFF1A\u4F7F\u7528 t-option \u8F93\u51FA\u4E0B\u62C9\u9009\u9879\u3002options \u548C t-option \u4E24\u79CD\u5B9E\u73B0\u65B9\u5F0F\u4E8C\u9009\u4E00\u5373\u53EF -->
    <t-select label="\u63D2\u69FD\uFF1A" v-model="value2" placeholder="\u8BF7\u9009\u62E9\u4E91\u4EA7\u54C1">
      <t-option v-for="item in options2" :value="item.value" :label="item.label" :key="item.value"></t-option>
    </t-select>
  </t-space>
</template>

<script setup lang="jsx">
import { ref } from 'vue';

const value1 = ref('');
const value2 = ref('');
// \u5982\u679C\u6B64\u5904\u6570\u636E\u5B57\u6BB5\u4E0D\u662F label \u548C value\uFF0C\u800C\u662F name \u548C id\uFF0C\u5219\u53EF\u4EE5\u4F20\u5165\u53C2\u6570 \`keys\` \u5B9A\u4E49\u522B\u540D
// \u793A\u4F8B\uFF1A <t-select :options="options1" :keys="{ label: 'name', value: 'id' }" />
const options1 = ref([
  {
    label: '\u67B6\u6784\u4E91',
    value: '1',
    title: '\u67B6\u6784\u4E91\u9009\u9879',
  },
  {
    label: '\u5927\u6570\u636E',
    value: '2',
  },
  {
    label: '\u533A\u5757\u94FE',
    value: '3',
  },
  {
    label: '\u7269\u8054\u7F51',
    value: '4',
    disabled: true,
  },
  {
    label: '\u4EBA\u5DE5\u667A\u80FD',
    value: '5',
  },
  // \u53EF\u4EE5\u4F7F\u7528\u6E32\u67D3\u51FD\u6570\u81EA\u5B9A\u4E49\u4E0B\u62C9\u9009\u9879\u5185\u5BB9\u548C\u6837\u5F0F
  {
    label: '\u8BA1\u7B97\u573A\u666F',
    value: true,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    content: (h) => <span>\u8BA1\u7B97\u573A\u666F\uFF08\u9AD8\u6027\u80FD\u8BA1\u7B97\uFF09</span>,
  },
]);
const options2 = ref([
  {
    label: '\u4E91\u670D\u52A1\u5668',
    value: '1',
  },
  {
    label: '\u4E91\u6570\u636E\u5E93',
    value: '2',
  },
  {
    label: '\u57DF\u540D\u6CE8\u518C',
    value: '3',
  },
  {
    label: '\u7F51\u7AD9\u5907\u6848',
    value: '4',
  },
  {
    label: '\u5BF9\u8C61\u5B58\u50A8',
    value: '5',
  },
  {
    label: '\u4F4E\u4EE3\u7801\u5E73\u53F0',
    value: '6',
  },
]);
<\/script>
`,y=`<template>
  <t-space direction="vertical">
    <!-- \u65B9\u5F0F\u4E00\uFF1A\u4F7F\u7528 options \u8F93\u51FA\u4E0B\u62C9\u9009\u9879\u3002\u4F18\u5148\u7EA7\u9AD8\u4E8E t-option-->
    <t-select v-model="value1" :options="options1" placeholder="\u8BF7\u9009\u62E9\u4E91\u89E3\u51B3\u65B9\u6848" multiple @change="handleChange" />
    <!-- \u65B9\u5F0F\u4E8C\uFF1A\u4F7F\u7528 t-option \u8F93\u51FA\u4E0B\u62C9\u9009\u9879\u3002options \u548C t-option \u4E24\u79CD\u5B9E\u73B0\u65B9\u5F0F\u4E8C\u9009\u4E00\u5373\u53EF -->
    <t-select v-model="value2" placeholder="\u8BF7\u9009\u62E9\u4E91\u4EA7\u54C1" multiple clearable>
      <t-option v-for="item in options2" :value="item.value" :label="item.label" :key="item.value"></t-option>
    </t-select>

    <!-- \u8D85\u51FA 2 \u4E2A\u7684\u9009\u4E2D\u9879\u6298\u53E0\uFF0C\u5982\u679C\u60F3\u8981\u81EA\u5B9A\u4E49\u6298\u53E0\u9879\uFF0C\u53C2\u8003\u4E0B\u6587\u300C\u81EA\u5B9A\u4E49\u6298\u53E0\u7684\u9009\u4E2D\u9879\u300D -->
    <t-select
      v-model="value3"
      :options="options1"
      :minCollapsedNum="2"
      placeholder="\u8BF7\u9009\u62E9\u4E91\u89E3\u51B3\u65B9\u6848"
      multiple
      :valueDisplay="valueDisplay"
      clearable
      filterable
    />
  </t-space>
</template>

<script lang="jsx">
export default {
  data() {
    return {
      value1: ['3', '5'],
      value2: ['1', '2', '3', '4', '5', '6'],
      value3: ['3', '5', '6', '2'],
      options1: [
        { label: '\u5168\u9009', checkAll: true },
        { label: '\u67B6\u6784\u4E91', value: '1' },
        { label: '\u5927\u6570\u636E', value: '2' },
        { label: '\u533A\u5757\u94FE', value: '3' },
        { label: '\u7269\u8054\u7F51', value: '4', disabled: true },
        { label: '\u4EBA\u5DE5\u667A\u80FD', value: '5' },
        // \u53EF\u4EE5\u4F7F\u7528\u6E32\u67D3\u51FD\u6570\u81EA\u5B9A\u4E49\u4E0B\u62C9\u9009\u9879\u5185\u5BB9\u548C\u6837\u5F0F
        {
          label: '\u8BA1\u7B97\u573A\u666F',
          value: '6',
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          content: (h) => <span>\u8BA1\u7B97\u573A\u666F\uFF08\u9AD8\u6027\u80FD\u8BA1\u7B97\uFF09</span>,
        },
      ],
      options2: [
        { label: '\u4E91\u670D\u52A1\u5668', value: '1' },
        { label: '\u4E91\u6570\u636E\u5E93', value: '2' },
        { label: '\u57DF\u540D\u6CE8\u518C', value: '3' },
        { label: '\u7F51\u7AD9\u5907\u6848', value: '4' },
        { label: '\u5BF9\u8C61\u5B58\u50A8', value: '5' },
        { label: '\u4F4E\u4EE3\u7801\u5E73\u53F0', value: '6' },
      ],
    };
  },
  methods: {
    handleChange(...args) {
      console.log('change', ...args);
    },
    valueDisplay(h, { onClose, displayValue }) {
      if (!(displayValue instanceof Array)) return;
      return displayValue.map((item, index) => (
        <t-tag
          key={index}
          closable={true}
          onClose={(context) => {
            context.e && context.e.stopPropagation();
            onClose(index);
          }}
        >
          {item.label}
        </t-tag>
      ));
    },
  },
};
<\/script>
`,C=`<template>
  <t-space direction="vertical">
    <!-- \u65B9\u5F0F\u4E00\uFF1A\u4F7F\u7528 options \u8F93\u51FA\u4E0B\u62C9\u9009\u9879\u3002\u4F18\u5148\u7EA7\u9AD8\u4E8E t-option-->
    <t-select v-model="value1" :options="options1" placeholder="\u8BF7\u9009\u62E9\u4E91\u89E3\u51B3\u65B9\u6848" multiple @change="handleChange" />
    <!-- \u65B9\u5F0F\u4E8C\uFF1A\u4F7F\u7528 t-option \u8F93\u51FA\u4E0B\u62C9\u9009\u9879\u3002options \u548C t-option \u4E24\u79CD\u5B9E\u73B0\u65B9\u5F0F\u4E8C\u9009\u4E00\u5373\u53EF -->
    <t-select v-model="value2" placeholder="\u8BF7\u9009\u62E9\u4E91\u4EA7\u54C1" multiple clearable>
      <t-option v-for="item in options2" :value="item.value" :label="item.label" :key="item.value"></t-option>
    </t-select>

    <!-- \u8D85\u51FA 2 \u4E2A\u7684\u9009\u4E2D\u9879\u6298\u53E0\uFF0C\u5982\u679C\u60F3\u8981\u81EA\u5B9A\u4E49\u6298\u53E0\u9879\uFF0C\u53C2\u8003\u4E0B\u6587\u300C\u81EA\u5B9A\u4E49\u6298\u53E0\u7684\u9009\u4E2D\u9879\u300D -->
    <t-select
      v-model="value3"
      :options="options1"
      :minCollapsedNum="2"
      placeholder="\u8BF7\u9009\u62E9\u4E91\u89E3\u51B3\u65B9\u6848"
      multiple
      :valueDisplay="valueDisplay"
      clearable
      filterable
    />
  </t-space>
</template>

<script setup lang="jsx">
import { ref } from 'vue';

const value1 = ref(['3', '5']);
const value2 = ref(['1', '2', '3', '4', '5', '6']);
const value3 = ref(['3', '5', '6', '2']);
const options1 = ref([
  {
    label: '\u5168\u9009',
    checkAll: true,
  },
  {
    label: '\u67B6\u6784\u4E91',
    value: '1',
  },
  {
    label: '\u5927\u6570\u636E',
    value: '2',
  },
  {
    label: '\u533A\u5757\u94FE',
    value: '3',
  },
  {
    label: '\u7269\u8054\u7F51',
    value: '4',
    disabled: true,
  },
  {
    label: '\u4EBA\u5DE5\u667A\u80FD',
    value: '5',
  },
  // \u53EF\u4EE5\u4F7F\u7528\u6E32\u67D3\u51FD\u6570\u81EA\u5B9A\u4E49\u4E0B\u62C9\u9009\u9879\u5185\u5BB9\u548C\u6837\u5F0F
  {
    label: '\u8BA1\u7B97\u573A\u666F',
    value: '6',
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    content: (h) => <span>\u8BA1\u7B97\u573A\u666F\uFF08\u9AD8\u6027\u80FD\u8BA1\u7B97\uFF09</span>,
  },
]);
const options2 = ref([
  {
    label: '\u4E91\u670D\u52A1\u5668',
    value: '1',
  },
  {
    label: '\u4E91\u6570\u636E\u5E93',
    value: '2',
  },
  {
    label: '\u57DF\u540D\u6CE8\u518C',
    value: '3',
  },
  {
    label: '\u7F51\u7AD9\u5907\u6848',
    value: '4',
  },
  {
    label: '\u5BF9\u8C61\u5B58\u50A8',
    value: '5',
  },
  {
    label: '\u4F4E\u4EE3\u7801\u5E73\u53F0',
    value: '6',
  },
]);
const handleChange = (...args) => {
  console.log('change', ...args);
};
const valueDisplay = (h, { onClose, displayValue }) => {
  if (!(displayValue instanceof Array)) return;
  return displayValue.map((item, index) => (
    <t-tag
      key={index}
      closable={true}
      onClose={(context) => {
        context.e && context.e.stopPropagation();
        onClose(index);
      }}
    >
      {item.label}
    </t-tag>
  ));
};
<\/script>
`,k=`<template>
  <t-space>
    <!-- \u65B9\u5F0F\u4E00\uFF1A\u76F4\u63A5\u4F20 options \u6570\u636E\uFF0C\u6BD4\u63D2\u69FD\u7684\u65B9\u5F0F\u66F4\u7B80\u5355 -->
    <t-select v-model="value1" :options="options" placeholder="\u8BF7\u9009\u62E9" filterable />

    <!-- \u65B9\u5F0F\u4E8C\uFF1A\u4F7F\u7528\u63D2\u69FD\u8282\u70B9 -->
    <t-select multiple v-model="value2" placeholder="\u8BF7\u9009\u62E9" filterable :style="{ minWidth: '240px' }">
      <t-option :checkAll="true">\u5168\u9009</t-option>
      <t-option-group
        v-for="(list, index) in options"
        :key="index"
        :label="typeof list.group === 'object' ? list.group.label : list.group"
        divider
      >
        <t-option v-for="item in list.children" :value="item.value" :label="item.label" :key="item.value">
          {{ item.label }}
        </t-option>
      </t-option-group>
    </t-select>
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      value1: '',
      value2: [],
      options: [
        {
          group: '\u5206\u7EC4\u4E00',
          children: [
            { label: '\u9009\u9879\u4E00', value: 1 },
            { label: '\u9009\u9879\u4E8C', value: 2 },
          ],
        },
        {
          group: '\u5206\u7EC4\u4E8C',
          children: [
            { label: '\u9009\u9879\u4E09', value: 4 },
            { label: '\u9009\u9879\u56DB', value: 5 },
            { label: '\u9009\u9879\u4E94', value: 6 },
          ],
        },
        {
          group: '\u5206\u7EC4\u4E09',
          divider: true,
          children: [
            { label: '\u9009\u9879\u516D', value: 7 },
            { label: '\u9009\u9879\u4E03', value: 8 },
            { label: '\u9009\u9879\u516B', value: 9 },
          ],
        },
      ],
    };
  },
};
<\/script>
`,_=`<template>
  <t-space>
    <!-- \u65B9\u5F0F\u4E00\uFF1A\u76F4\u63A5\u4F20 options \u6570\u636E\uFF0C\u6BD4\u63D2\u69FD\u7684\u65B9\u5F0F\u66F4\u7B80\u5355 -->
    <t-select v-model="value1" :options="options" placeholder="\u8BF7\u9009\u62E9" filterable />

    <!-- \u65B9\u5F0F\u4E8C\uFF1A\u4F7F\u7528\u63D2\u69FD\u8282\u70B9 -->
    <t-select multiple v-model="value2" placeholder="\u8BF7\u9009\u62E9" filterable :style="{ minWidth: '240px' }">
      <t-option :checkAll="true">\u5168\u9009</t-option>
      <t-option-group
        v-for="(list, index) in options"
        :key="index"
        :label="typeof list.group === 'object' ? list.group.label : list.group"
        divider
      >
        <t-option v-for="item in list.children" :value="item.value" :label="item.label" :key="item.value">
          {{ item.label }}
        </t-option>
      </t-option-group>
    </t-select>
  </t-space>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref('');
const value2 = ref([]);
const options = ref([
  {
    group: '\u5206\u7EC4\u4E00',
    children: [
      {
        label: '\u9009\u9879\u4E00',
        value: 1,
      },
      {
        label: '\u9009\u9879\u4E8C',
        value: 2,
      },
    ],
  },
  {
    group: '\u5206\u7EC4\u4E8C',
    children: [
      {
        label: '\u9009\u9879\u4E09',
        value: 4,
      },
      {
        label: '\u9009\u9879\u56DB',
        value: 5,
      },
      {
        label: '\u9009\u9879\u4E94',
        value: 6,
      },
    ],
  },
  {
    group: '\u5206\u7EC4\u4E09',
    divider: true,
    children: [
      {
        label: '\u9009\u9879\u516D',
        value: 7,
      },
      {
        label: '\u9009\u9879\u4E03',
        value: 8,
      },
      {
        label: '\u9009\u9879\u516B',
        value: 9,
      },
    ],
  },
]);
<\/script>
`,w=`<template>
  <t-space>
    <t-select v-model="value1" :options="options" placeholder="\u8BF7\u9009\u62E9\u4E91\u89E3\u51B3\u65B9\u6848" />

    <t-select v-model="value2" :options="options" disabled placeholder="\u8BF7\u9009\u62E9\u4E91\u89E3\u51B3\u65B9\u6848" />

    <t-select v-model="value3" :options="options" loading placeholder="\u8BF7\u9009\u62E9\u4E91\u89E3\u51B3\u65B9\u6848" />
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      value1: '',
      value2: '',
      value3: '',
      // \u5982\u679C\u6B64\u5904\u6570\u636E\u5B57\u6BB5\u4E0D\u662F label \u548C value\uFF0C\u800C\u662F name \u548C id\uFF0C\u5219\u53EF\u4EE5\u4F20\u5165\u53C2\u6570 \`keys\` \u5B9A\u4E49\u522B\u540D
      // \u793A\u4F8B\uFF1A <t-select :options="options1" :keys="{ label: 'name', value: 'id' }" />
      options: [
        { label: '\u67B6\u6784\u4E91', value: '1' },
        { label: '\u5927\u6570\u636E', value: '2' },
        { label: '\u533A\u5757\u94FE', value: '3' },
        { label: '\u7269\u8054\u7F51', value: '4', disabled: true },
        { label: '\u4EBA\u5DE5\u667A\u80FD', value: '5' },
      ],
    };
  },
};
<\/script>
`,D=`<template>
  <t-space>
    <t-select v-model="value1" :options="options" placeholder="\u8BF7\u9009\u62E9\u4E91\u89E3\u51B3\u65B9\u6848" />

    <t-select v-model="value2" :options="options" disabled placeholder="\u8BF7\u9009\u62E9\u4E91\u89E3\u51B3\u65B9\u6848" />

    <t-select v-model="value3" :options="options" loading placeholder="\u8BF7\u9009\u62E9\u4E91\u89E3\u51B3\u65B9\u6848" />
  </t-space>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref('');
const value2 = ref('');
const value3 = ref('');
// \u5982\u679C\u6B64\u5904\u6570\u636E\u5B57\u6BB5\u4E0D\u662F label \u548C value\uFF0C\u800C\u662F name \u548C id\uFF0C\u5219\u53EF\u4EE5\u4F20\u5165\u53C2\u6570 \`keys\` \u5B9A\u4E49\u522B\u540D
// \u793A\u4F8B\uFF1A <t-select :options="options1" :keys="{ label: 'name', value: 'id' }" />
const options = ref([
  {
    label: '\u67B6\u6784\u4E91',
    value: '1',
  },
  {
    label: '\u5927\u6570\u636E',
    value: '2',
  },
  {
    label: '\u533A\u5757\u94FE',
    value: '3',
  },
  {
    label: '\u7269\u8054\u7F51',
    value: '4',
    disabled: true,
  },
  {
    label: '\u4EBA\u5DE5\u667A\u80FD',
    value: '5',
  },
]);
<\/script>
`,O=`<template>
  <t-space align="center">
    <t-select
      size="small"
      v-model="value1"
      :popupProps="popupProps"
      placeholder="\u8BF7\u9009\u62E9"
      style="width: 200px; display: inline-block; margin-right: 20px"
      clearable
    >
      <t-option v-for="(item, index) in options" :value="item.value" :label="item.label" :key="index">
        {{ item.label }}
      </t-option>
    </t-select>
    <t-select
      v-model="value"
      placeholder="\u8BF7\u9009\u62E9"
      :options="options"
      size="medium"
      style="width: 200px; display: inline-block; margin-right: 20px"
    />
    <t-select
      v-model="value2"
      placeholder="\u8BF7\u9009\u62E9"
      :options="options"
      size="large"
      style="width: 200px; display: inline-block"
    />
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      options: [
        { label: '\u9009\u9879\u4E00', value: '1' },
        { label: '\u9009\u9879\u4E8C', value: '2' },
        { label: '\u9009\u9879\u4E09', value: '3' },
      ],
      value: '',
      value1: '',
      value2: '',
      popupProps: {
        overlayStyle: {
          width: '300px',
        },
      },
    };
  },
};
<\/script>
`,I=`<template>
  <t-space align="center">
    <t-select
      size="small"
      v-model="value1"
      :popupProps="popupProps"
      placeholder="\u8BF7\u9009\u62E9"
      style="width: 200px; display: inline-block; margin-right: 20px"
      clearable
    >
      <t-option v-for="(item, index) in options" :value="item.value" :label="item.label" :key="index">
        {{ item.label }}
      </t-option>
    </t-select>
    <t-select
      v-model="value"
      placeholder="\u8BF7\u9009\u62E9"
      :options="options"
      size="medium"
      style="width: 200px; display: inline-block; margin-right: 20px"
    />
    <t-select
      v-model="value2"
      placeholder="\u8BF7\u9009\u62E9"
      :options="options"
      size="large"
      style="width: 200px; display: inline-block"
    />
  </t-space>
</template>

<script setup>
import { ref, reactive } from 'vue';

const options = ref([
  {
    label: '\u9009\u9879\u4E00',
    value: '1',
  },
  {
    label: '\u9009\u9879\u4E8C',
    value: '2',
  },
  {
    label: '\u9009\u9879\u4E09',
    value: '3',
  },
]);
const value = ref('');
const value1 = ref('');
const value2 = ref('');
const popupProps = reactive({
  overlayStyle: {
    width: '300px',
  },
});
<\/script>
`,P=`<template>
  <t-space>
    <!-- \u65B9\u5F0F\u4E00\uFF1A\u4F7F\u7528 options \u81EA\u5B9A\u4E49\u4E0B\u62C9\u9009\u9879\u5185\u5BB9 -->
    <t-select
      v-model="value1"
      :options="optionsData"
      :popupProps="{ overlayClassName: 'tdesign-demo-select__overlay-option' }"
      placeholder="\u8BF7\u9009\u62E9"
      style="width: 300px"
    />
    <br /><br />

    <!-- \u65B9\u5F0F\u4E8C\uFF1A\u4F7F\u7528\u63D2\u69FD\u81EA\u5B9A\u4E49\u4E0B\u62C9\u9009\u9879\u5185\u5BB9 -->
    <t-select
      v-model="value2"
      placeholder="\u8BF7\u9009\u62E9"
      :popupProps="{ overlayClassName: 'tdesign-demo-select__overlay-option' }"
      style="width: 300px"
    >
      <t-option v-for="item in options" :value="item.value" :label="item.label" :key="item.value">
        <div class="tdesign-demo__user-option">
          <img src="https://tdesign.gtimg.com/site/avatar.jpg" />
          <div class="tdesign-demo__user-option-info">
            <div>{{ item.label }}</div>
            <div class="tdesign-demo__user-option-desc">{{ item.description }}</div>
          </div>
        </div>
      </t-option>
    </t-select>
  </t-space>
</template>

<script lang="jsx">
export default {
  data() {
    return {
      value1: '',
      value2: '',
      options: [
        { label: '\u7528\u6237\u4E00', value: '1', description: '\u8FD9\u662F\u4E00\u6BB5\u7528\u6237\u63CF\u8FF0\u4FE1\u606F\uFF0C\u53EF\u81EA\u5B9A\u4E49\u5185\u5BB9' },
        { label: '\u7528\u6237\u4E8C', value: '2', description: '\u8FD9\u662F\u4E00\u6BB5\u7528\u6237\u63CF\u8FF0\u4FE1\u606F\uFF0C\u53EF\u81EA\u5B9A\u4E49\u5185\u5BB9' },
        { label: '\u7528\u6237\u4E09', value: '3', description: '\u8FD9\u662F\u4E00\u6BB5\u7528\u6237\u63CF\u8FF0\u4FE1\u606F\uFF0C\u53EF\u81EA\u5B9A\u4E49\u5185\u5BB9' },
        { label: '\u7528\u6237\u56DB', value: '4', description: '\u8FD9\u662F\u4E00\u6BB5\u7528\u6237\u63CF\u8FF0\u4FE1\u606F\uFF0C\u53EF\u81EA\u5B9A\u4E49\u5185\u5BB9' },
        { label: '\u7528\u6237\u4E94', value: '5', description: '\u8FD9\u662F\u4E00\u6BB5\u7528\u6237\u63CF\u8FF0\u4FE1\u606F\uFF0C\u53EF\u81EA\u5B9A\u4E49\u5185\u5BB9' },
        { label: '\u7528\u6237\u516D', value: '6', description: '\u8FD9\u662F\u4E00\u6BB5\u7528\u6237\u63CF\u8FF0\u4FE1\u606F\uFF0C\u53EF\u81EA\u5B9A\u4E49\u5185\u5BB9' },
        { label: '\u7528\u6237\u4E03', value: '7', description: '\u8FD9\u662F\u4E00\u6BB5\u7528\u6237\u63CF\u8FF0\u4FE1\u606F\uFF0C\u53EF\u81EA\u5B9A\u4E49\u5185\u5BB9' },
        { label: '\u7528\u6237\u516B', value: '8', description: '\u8FD9\u662F\u4E00\u6BB5\u7528\u6237\u63CF\u8FF0\u4FE1\u606F\uFF0C\u53EF\u81EA\u5B9A\u4E49\u5185\u5BB9' },
        { label: '\u7528\u6237\u4E5D', value: '9', description: '\u8FD9\u662F\u4E00\u6BB5\u7528\u6237\u63CF\u8FF0\u4FE1\u606F\uFF0C\u53EF\u81EA\u5B9A\u4E49\u5185\u5BB9' },
      ],
    };
  },
  computed: {
    optionsData() {
      return this.options.map((item) => ({
        ...item,
        // options \u81EA\u5B9A\u4E49\u4E0B\u62C9\u9009\u9879\u5173\u952E\u4EE3\u7801
        content: (h) => this.optionRender(h, item),
      }));
    },
  },
  methods: {
    optionRender(h, option) {
      return (
        <div class="tdesign-demo__user-option">
          <img src="https://tdesign.gtimg.com/site/avatar.jpg" />
          <div class="tdesign-demo__user-option-info">
            <div>{option.label}</div>
            <div class="tdesign-demo__user-option-desc">{option.description}</div>
          </div>
        </div>
      );
    },
  },
};
<\/script>

<style>
.tdesign-demo__user-option {
  display: flex;
}

.tdesign-demo__user-option > img {
  max-width: 40px;
  max-height: 40px;
  border-radius: 50%;
}

.tdesign-demo__user-option-desc {
  font-size: 14px;
  color: var(--td-text-color-secondary);
}

.tdesign-demo__user-option-info {
  margin-left: 16px;
}

.tdesign-demo-select__overlay-option .t-select-option {
  height: 100%;
  padding: 8px;
}
</style>
`,S=`<template>
  <t-space>
    <!-- \u65B9\u5F0F\u4E00\uFF1A\u4F7F\u7528 options \u81EA\u5B9A\u4E49\u4E0B\u62C9\u9009\u9879\u5185\u5BB9 -->
    <t-select
      v-model="value1"
      :options="optionsData"
      :popupProps="{ overlayClassName: 'tdesign-demo-select__overlay-option' }"
      placeholder="\u8BF7\u9009\u62E9"
      style="width: 300px"
    />
    <br /><br />

    <!-- \u65B9\u5F0F\u4E8C\uFF1A\u4F7F\u7528\u63D2\u69FD\u81EA\u5B9A\u4E49\u4E0B\u62C9\u9009\u9879\u5185\u5BB9 -->
    <t-select
      v-model="value2"
      placeholder="\u8BF7\u9009\u62E9"
      :popupProps="{ overlayClassName: 'tdesign-demo-select__overlay-option' }"
      style="width: 300px"
    >
      <t-option v-for="item in options" :value="item.value" :label="item.label" :key="item.value">
        <div class="tdesign-demo__user-option">
          <img src="https://tdesign.gtimg.com/site/avatar.jpg" />
          <div class="tdesign-demo__user-option-info">
            <div>{{ item.label }}</div>
            <div class="tdesign-demo__user-option-desc">{{ item.description }}</div>
          </div>
        </div>
      </t-option>
    </t-select>
  </t-space>
</template>

<script setup lang="jsx">
import { ref, computed } from 'vue';

const value1 = ref('');
const value2 = ref('');
const options = ref([
  {
    label: '\u7528\u6237\u4E00',
    value: '1',
    description: '\u8FD9\u662F\u4E00\u6BB5\u7528\u6237\u63CF\u8FF0\u4FE1\u606F\uFF0C\u53EF\u81EA\u5B9A\u4E49\u5185\u5BB9',
  },
  {
    label: '\u7528\u6237\u4E8C',
    value: '2',
    description: '\u8FD9\u662F\u4E00\u6BB5\u7528\u6237\u63CF\u8FF0\u4FE1\u606F\uFF0C\u53EF\u81EA\u5B9A\u4E49\u5185\u5BB9',
  },
  {
    label: '\u7528\u6237\u4E09',
    value: '3',
    description: '\u8FD9\u662F\u4E00\u6BB5\u7528\u6237\u63CF\u8FF0\u4FE1\u606F\uFF0C\u53EF\u81EA\u5B9A\u4E49\u5185\u5BB9',
  },
  {
    label: '\u7528\u6237\u56DB',
    value: '4',
    description: '\u8FD9\u662F\u4E00\u6BB5\u7528\u6237\u63CF\u8FF0\u4FE1\u606F\uFF0C\u53EF\u81EA\u5B9A\u4E49\u5185\u5BB9',
  },
  {
    label: '\u7528\u6237\u4E94',
    value: '5',
    description: '\u8FD9\u662F\u4E00\u6BB5\u7528\u6237\u63CF\u8FF0\u4FE1\u606F\uFF0C\u53EF\u81EA\u5B9A\u4E49\u5185\u5BB9',
  },
  {
    label: '\u7528\u6237\u516D',
    value: '6',
    description: '\u8FD9\u662F\u4E00\u6BB5\u7528\u6237\u63CF\u8FF0\u4FE1\u606F\uFF0C\u53EF\u81EA\u5B9A\u4E49\u5185\u5BB9',
  },
  {
    label: '\u7528\u6237\u4E03',
    value: '7',
    description: '\u8FD9\u662F\u4E00\u6BB5\u7528\u6237\u63CF\u8FF0\u4FE1\u606F\uFF0C\u53EF\u81EA\u5B9A\u4E49\u5185\u5BB9',
  },
  {
    label: '\u7528\u6237\u516B',
    value: '8',
    description: '\u8FD9\u662F\u4E00\u6BB5\u7528\u6237\u63CF\u8FF0\u4FE1\u606F\uFF0C\u53EF\u81EA\u5B9A\u4E49\u5185\u5BB9',
  },
  {
    label: '\u7528\u6237\u4E5D',
    value: '9',
    description: '\u8FD9\u662F\u4E00\u6BB5\u7528\u6237\u63CF\u8FF0\u4FE1\u606F\uFF0C\u53EF\u81EA\u5B9A\u4E49\u5185\u5BB9',
  },
]);
const optionRender = (h, option) => (
  <div class="tdesign-demo__user-option">
    <img src="https://tdesign.gtimg.com/site/avatar.jpg" />
    <div class="tdesign-demo__user-option-info">
      <div>{option.label}</div>
      <div class="tdesign-demo__user-option-desc">{option.description}</div>
    </div>
  </div>
);
const optionsData = computed(() => options.value.map((item) => ({
  ...item,
  // options \u81EA\u5B9A\u4E49\u4E0B\u62C9\u9009\u9879\u5173\u952E\u4EE3\u7801
  content: (h) => optionRender(h, item),
})));
<\/script>

<style>
.tdesign-demo__user-option {
  display: flex;
}

.tdesign-demo__user-option > img {
  max-width: 40px;
  max-height: 40px;
  border-radius: 50%;
}

.tdesign-demo__user-option-desc {
  font-size: 14px;
  color: var(--td-text-color-secondary);
}

.tdesign-demo__user-option-info {
  margin-left: 16px;
}

.tdesign-demo-select__overlay-option .t-select-option {
  height: 100%;
  padding: 8px;
}
</style>
`,$=`<template>
  <t-space>
    <!-- \u81EA\u5B9A\u4E49\u9762\u677F\u9876\u90E8\u5185\u5BB9\uFF1A\u5982\u81EA\u5B9A\u4E49\u641C\u7D22\u6846\u3002\u540C\u65F6\u652F\u6301\u63D2\u69FD\u548C Props(this,panelTopContent) -->
    <t-select v-model="value1" :options="options1" clearable placeholder="\u8BF7\u9009\u62E9\u4E91\u89E3\u51B3\u65B9\u6848">
      <div slot="panelTopContent" style="padding: 6px 6px 0 6px">
        <t-input v-model="search" placeholder="\u8BF7\u8F93\u5165\u5173\u952E\u8BCD\u641C\u7D22" @change="onSearch" />
      </div>
    </t-select>

    <!-- \u81EA\u5B9A\u4E49\u9762\u677F\u5E95\u90E8\u5185\u5BB9\uFF1B\u5982\u65B0\u589E\u9879 \u3002\u540C\u65F6\u652F\u6301\u63D2\u69FD\u548C Props\uFF08this,panelBottomContent\uFF09-->
    <t-select v-model="value2" placeholder="\u8BF7\u9009\u62E9\u4E91\u4EA7\u54C1" clearable :options="options2">
      <!-- \u81EA\u5B9A\u4E49\u5E95\u90E8\u5185\u5BB9 -->
      <div slot="panelBottomContent" class="select-panel-footer">
        <t-button v-if="editOrCreate === 'create'" theme="primary" variant="text" block @click="onAdd"
        >\u65B0\u589E\u9009\u9879</t-button
        >
        <div v-else>
          <t-input v-model="newOption" autofocus></t-input>
          <t-button @click="onAddConfirm" size="small" style="margin-top: 8px"> \u786E\u8BA4 </t-button>
          <t-button @click="onAddCancel" theme="default" size="small" style="margin-top: 8px; margin-left: 8px">
            \u53D6\u6D88
          </t-button>
        </div>
      </div>
    </t-select>
  </t-space>
</template>

<script lang="jsx">
const OPTIONS = [
  { label: '\u67B6\u6784\u4E91', value: '1' },
  { label: '\u5927\u6570\u636E', value: '2' },
  { label: '\u533A\u5757\u94FE', value: '3' },
  { label: '\u7269\u8054\u7F51', value: '4', disabled: true },
  { label: '\u4EBA\u5DE5\u667A\u80FD', value: '5' },
];
export default {
  data() {
    return {
      search: '',
      value1: '',
      value2: '',
      editOrCreate: 'create',
      newOption: '',
      // \u5982\u679C\u6B64\u5904\u6570\u636E\u5B57\u6BB5\u4E0D\u662F label \u548C value\uFF0C\u800C\u662F name \u548C id\uFF0C\u5219\u53EF\u4EE5\u4F20\u5165\u53C2\u6570 \`keys\` \u5B9A\u4E49\u522B\u540D
      // \u793A\u4F8B\uFF1A <t-select :options="options1" :keys="{ label: 'name', value: 'id' }" />
      options1: OPTIONS,
      options2: [
        { label: '\u4E91\u670D\u52A1\u5668', value: '1' },
        { label: '\u4E91\u6570\u636E\u5E93', value: '2' },
        { label: '\u57DF\u540D\u6CE8\u518C', value: '3' },
      ],
    };
  },
  methods: {
    onSearch() {
      this.options1 = OPTIONS.filter((item) => item.label.indexOf(this.search) !== -1);
    },
    onAdd() {
      this.editOrCreate = 'edit';
    },
    onAddConfirm() {
      const id = Math.round(Math.random() * 100);
      this.options2.push({ label: this.newOption, value: id });
      this.newOption = '';
      this.editOrCreate = 'create';
    },
    onAddCancel() {
      this.editOrCreate = 'create';
    },
  },
};
<\/script>

<style scoped>
.select-panel-footer {
  border-top: 1px solid var(--td-component-stroke);
  padding: 6px;
}
</style>
`,B=`<template>
  <t-space>
    <!-- \u81EA\u5B9A\u4E49\u9762\u677F\u9876\u90E8\u5185\u5BB9\uFF1A\u5982\u81EA\u5B9A\u4E49\u641C\u7D22\u6846\u3002\u540C\u65F6\u652F\u6301\u63D2\u69FD\u548C Props(this,panelTopContent) -->
    <t-select v-model="value1" :options="options1" clearable placeholder="\u8BF7\u9009\u62E9\u4E91\u89E3\u51B3\u65B9\u6848">
      <div slot="panelTopContent" style="padding: 6px 6px 0 6px">
        <t-input v-model="search" placeholder="\u8BF7\u8F93\u5165\u5173\u952E\u8BCD\u641C\u7D22" @change="onSearch" />
      </div>
    </t-select>

    <!-- \u81EA\u5B9A\u4E49\u9762\u677F\u5E95\u90E8\u5185\u5BB9\uFF1B\u5982\u65B0\u589E\u9879 \u3002\u540C\u65F6\u652F\u6301\u63D2\u69FD\u548C Props\uFF08this,panelBottomContent\uFF09-->
    <t-select v-model="value2" placeholder="\u8BF7\u9009\u62E9\u4E91\u4EA7\u54C1" clearable :options="options2">
      <!-- \u81EA\u5B9A\u4E49\u5E95\u90E8\u5185\u5BB9 -->
      <div slot="panelBottomContent" class="select-panel-footer">
        <t-button v-if="editOrCreate === 'create'" theme="primary" variant="text" block @click="onAdd"
        >\u65B0\u589E\u9009\u9879</t-button
        >
        <div v-else>
          <t-input v-model="newOption" autofocus></t-input>
          <t-button @click="onAddConfirm" size="small" style="margin-top: 8px"> \u786E\u8BA4 </t-button>
          <t-button @click="onAddCancel" theme="default" size="small" style="margin-top: 8px; margin-left: 8px">
            \u53D6\u6D88
          </t-button>
        </div>
      </div>
    </t-select>
  </t-space>
</template>

<script setup lang="jsx">
import { ref } from 'vue';

const OPTIONS = [
  {
    label: '\u67B6\u6784\u4E91',
    value: '1',
  },
  {
    label: '\u5927\u6570\u636E',
    value: '2',
  },
  {
    label: '\u533A\u5757\u94FE',
    value: '3',
  },
  {
    label: '\u7269\u8054\u7F51',
    value: '4',
    disabled: true,
  },
  {
    label: '\u4EBA\u5DE5\u667A\u80FD',
    value: '5',
  },
];
const search = ref('');
const value1 = ref('');
const value2 = ref('');
const editOrCreate = ref('create');
const newOption = ref('');
// \u5982\u679C\u6B64\u5904\u6570\u636E\u5B57\u6BB5\u4E0D\u662F label \u548C value\uFF0C\u800C\u662F name \u548C id\uFF0C\u5219\u53EF\u4EE5\u4F20\u5165\u53C2\u6570 \`keys\` \u5B9A\u4E49\u522B\u540D
// \u793A\u4F8B\uFF1A <t-select :options="options1" :keys="{ label: 'name', value: 'id' }" />
const options1 = ref(OPTIONS);
const options2 = ref([
  {
    label: '\u4E91\u670D\u52A1\u5668',
    value: '1',
  },
  {
    label: '\u4E91\u6570\u636E\u5E93',
    value: '2',
  },
  {
    label: '\u57DF\u540D\u6CE8\u518C',
    value: '3',
  },
]);
const onSearch = () => {
  options1.value = OPTIONS.filter((item) => item.label.indexOf(search.value) !== -1);
};
const onAdd = () => {
  editOrCreate.value = 'edit';
};
const onAddConfirm = () => {
  const id = Math.round(Math.random() * 100);
  options2.value.push({
    label: newOption.value,
    value: id,
  });
  newOption.value = '';
  editOrCreate.value = 'create';
};
const onAddCancel = () => {
  editOrCreate.value = 'create';
};
<\/script>

<style scoped>
.select-panel-footer {
  border-top: 1px solid var(--td-component-stroke);
  padding: 6px;
}
</style>
`,j=`<template>
  <t-space direction="vertical">
    <!-- \u81EA\u5B9A\u4E49\u9009\u4E2D\u9879\u5185\u5BB9\uFF0CvalueDisplay \u4E3A\u6E32\u67D3\u51FD\u6570\uFF08function\uFF09 -->
    <t-select
      v-model="value1"
      :options="options"
      :valueDisplay="valueDisplay"
      placeholder="\u8BF7\u9009\u62E9"
      multiple
      clearable
    />

    <!-- \u81EA\u5B9A\u4E49\u9009\u4E2D\u9879\u5185\u5BB9\uFF0CvalueDisplay \u4E3A \u63D2\u69FD(slot) -->
    <t-select v-model="value2" :options="options" placeholder="\u8BF7\u9009\u62E9" multiple clearable>
      <template #valueDisplay="{ value, onClose }">
        <t-tag
          v-for="(item, index) in value"
          :key="index"
          :closable="true"
          :onClose="
            (context) => {
              context.e && context.e.stopPropagation();
              onClose(index);
            }
          "
        >
          {{ item.label }}({{ item.value[0].toUpperCase() }})
        </t-tag>
      </template>
    </t-select>
  </t-space>
</template>

<script lang="jsx">
export default {
  data() {
    return {
      value1: ['1', '2', '3'],
      value2: ['4', '5', '6', '7'],
      options: [
        { label: '\u9009\u9879\u4E00', value: '1' },
        { label: '\u9009\u9879\u4E8C', value: '2' },
        { label: '\u9009\u9879\u4E09', value: '3' },
        { label: '\u9009\u9879\u56DB', value: '4' },
        { label: '\u9009\u9879\u4E94', value: '5' },
        { label: '\u9009\u9879\u516D', value: '6' },
        { label: '\u9009\u9879\u4E03', value: '7' },
        { label: '\u9009\u9879\u516B', value: '8' },
        { label: '\u9009\u9879\u4E5D', value: '9' },
      ],
    };
  },
  methods: {
    valueDisplay(h, { value, onClose }) {
      if (!(value instanceof Array)) return;
      return value.map((item, index) => (
        <t-tag
          key={index}
          closable={true}
          onClose={(context) => {
            context.e && context.e.stopPropagation();
            onClose(index);
          }}
        >
          {item.label}({item.value[0].toUpperCase()})
        </t-tag>
      ));
    },
  },
};
<\/script>
`,T=`<template>
  <t-space direction="vertical">
    <!-- \u81EA\u5B9A\u4E49\u9009\u4E2D\u9879\u5185\u5BB9\uFF0CvalueDisplay \u4E3A\u6E32\u67D3\u51FD\u6570\uFF08function\uFF09 -->
    <t-select
      v-model="value1"
      :options="options"
      :valueDisplay="valueDisplay"
      placeholder="\u8BF7\u9009\u62E9"
      multiple
      clearable
    />

    <!-- \u81EA\u5B9A\u4E49\u9009\u4E2D\u9879\u5185\u5BB9\uFF0CvalueDisplay \u4E3A \u63D2\u69FD(slot) -->
    <t-select v-model="value2" :options="options" placeholder="\u8BF7\u9009\u62E9" multiple clearable>
      <template #valueDisplay="{ value, onClose }">
        <t-tag
          v-for="(item, index) in value"
          :key="index"
          :closable="true"
          :onClose="
            (context) => {
              context.e && context.e.stopPropagation();
              onClose(index);
            }
          "
        >
          {{ item.label }}({{ item.value[0].toUpperCase() }})
        </t-tag>
      </template>
    </t-select>
  </t-space>
</template>

<script setup lang="jsx">
import { ref } from 'vue';

const value1 = ref(['1', '2', '3']);
const value2 = ref(['4', '5', '6', '7']);
const options = ref([
  {
    label: '\u9009\u9879\u4E00',
    value: '1',
  },
  {
    label: '\u9009\u9879\u4E8C',
    value: '2',
  },
  {
    label: '\u9009\u9879\u4E09',
    value: '3',
  },
  {
    label: '\u9009\u9879\u56DB',
    value: '4',
  },
  {
    label: '\u9009\u9879\u4E94',
    value: '5',
  },
  {
    label: '\u9009\u9879\u516D',
    value: '6',
  },
  {
    label: '\u9009\u9879\u4E03',
    value: '7',
  },
  {
    label: '\u9009\u9879\u516B',
    value: '8',
  },
  {
    label: '\u9009\u9879\u4E5D',
    value: '9',
  },
]);
const valueDisplay = (h, { value, onClose }) => {
  if (!(value instanceof Array)) return;
  return value.map((item, index) => (
    <t-tag
      key={index}
      closable={true}
      onClose={(context) => {
        context.e && context.e.stopPropagation();
        onClose(index);
      }}
    >
      {item.label}({item.value[0].toUpperCase()})
    </t-tag>
  ));
};
<\/script>
`,N=`<template>
  <t-space direction="vertical">
    <!-- \u9009\u9879\u8FC7\u591A\u65F6\uFF0C\u53EF\u6298\u53E0 -->
    <t-select v-model="value" placeholder="\u8BF7\u9009\u62E9" multiple :minCollapsedNum="minCollapsedNum" :options="options" />

    <!-- \u81EA\u5B9A\u4E49\u6298\u53E0\u9879\u5185\u5BB9\uFF0CcollapsedItems \u4E3A\u6E32\u67D3\u51FD\u6570 (value, count, collapsedSelectedItems) -->
    <t-select
      v-model="value"
      placeholder="\u8BF7\u9009\u62E9"
      multiple
      :minCollapsedNum="minCollapsedNum"
      :collapsedItems="collapsedItems"
      :options="options"
    />

    <!-- \u81EA\u5B9A\u4E49\u6298\u53E0\u9879\u5185\u5BB9\uFF0CcollapsedItems \u4E3A \u63D2\u69FD(slot) { value, count, collapsedSelectedItems }-->
    <t-select v-model="value" placeholder="\u8BF7\u9009\u62E9" multiple :minCollapsedNum="minCollapsedNum" :options="options">
      <!-- hover\u5C55\u793A\u6298\u53E0\u90E8\u5206\u7684\u5DF2\u9009\u9879 -->
      <template #collapsedItems="{ collapsedSelectedItems, count }">
        <t-popup>
          <template #content>
            <p v-for="(item, index) in collapsedSelectedItems" :key="index" style="padding: 8px">
              {{ item.label }}
            </p>
          </template>
          <span v-show="count > 0" style="color: #00a870; margin-left: 8px">+{{ count }}</span>
        </t-popup>
      </template>
    </t-select>
  </t-space>
</template>

<script lang="jsx">
export default {
  data() {
    return {
      options: [
        { label: '\u9009\u9879\u4E00', value: '1' },
        { label: '\u9009\u9879\u4E8C', value: '2' },
        { label: '\u9009\u9879\u4E09', value: '3' },
        { label: '\u9009\u9879\u56DB', value: '4' },
        { label: '\u9009\u9879\u4E94', value: '5' },
        { label: '\u9009\u9879\u516D', value: '6' },
        { label: '\u9009\u9879\u4E03', value: '7' },
        { label: '\u9009\u9879\u516B', value: '8' },
        { label: '\u9009\u9879\u4E5D', value: '9' },
      ],
      value: ['1', '3', '9'],
      minCollapsedNum: 1,
    };
  },
  methods: {
    collapsedItems(h, {
      value, count, collapsedSelectedItems, onClose,
    }) {
      console.log('collapsedItems: ', value, collapsedSelectedItems, count, onClose);
      if (!count) return;
      // hover\u5C55\u793A\u5168\u90E8\u5DF2\u9009\u9879
      return (
        <t-popup>
          <div slot="content">
            {collapsedSelectedItems.map((item, index) => (
              <p style="padding: 2px;">
                <t-tag
                  closable={true}
                  onClick={() => {
                    onClose(index + 1);
                  }}
                >
                  {item.label}
                </t-tag>
              </p>
            ))}
          </div>
          <span v-show={count > 0} style="color: #ED7B2F; margin-left: 8px">
            +{count}
          </span>
        </t-popup>
      );
    },
  },
};
<\/script>
`,A=`<template>
  <t-space direction="vertical">
    <!-- \u9009\u9879\u8FC7\u591A\u65F6\uFF0C\u53EF\u6298\u53E0 -->
    <t-select v-model="value" placeholder="\u8BF7\u9009\u62E9" multiple :minCollapsedNum="minCollapsedNum" :options="options" />

    <!-- \u81EA\u5B9A\u4E49\u6298\u53E0\u9879\u5185\u5BB9\uFF0CcollapsedItems \u4E3A\u6E32\u67D3\u51FD\u6570 (value, count, collapsedSelectedItems) -->
    <t-select
      v-model="value"
      placeholder="\u8BF7\u9009\u62E9"
      multiple
      :minCollapsedNum="minCollapsedNum"
      :collapsedItems="collapsedItems"
      :options="options"
    />

    <!-- \u81EA\u5B9A\u4E49\u6298\u53E0\u9879\u5185\u5BB9\uFF0CcollapsedItems \u4E3A \u63D2\u69FD(slot) { value, count, collapsedSelectedItems }-->
    <t-select v-model="value" placeholder="\u8BF7\u9009\u62E9" multiple :minCollapsedNum="minCollapsedNum" :options="options">
      <!-- hover\u5C55\u793A\u6298\u53E0\u90E8\u5206\u7684\u5DF2\u9009\u9879 -->
      <template #collapsedItems="{ collapsedSelectedItems, count }">
        <t-popup>
          <template #content>
            <p v-for="(item, index) in collapsedSelectedItems" :key="index" style="padding: 8px">
              {{ item.label }}
            </p>
          </template>
          <span v-show="count > 0" style="color: #00a870; margin-left: 8px">+{{ count }}</span>
        </t-popup>
      </template>
    </t-select>
  </t-space>
</template>

<script setup lang="jsx">
import { ref } from 'vue';

const options = ref([
  {
    label: '\u9009\u9879\u4E00',
    value: '1',
  },
  {
    label: '\u9009\u9879\u4E8C',
    value: '2',
  },
  {
    label: '\u9009\u9879\u4E09',
    value: '3',
  },
  {
    label: '\u9009\u9879\u56DB',
    value: '4',
  },
  {
    label: '\u9009\u9879\u4E94',
    value: '5',
  },
  {
    label: '\u9009\u9879\u516D',
    value: '6',
  },
  {
    label: '\u9009\u9879\u4E03',
    value: '7',
  },
  {
    label: '\u9009\u9879\u516B',
    value: '8',
  },
  {
    label: '\u9009\u9879\u4E5D',
    value: '9',
  },
]);
const value = ref(['1', '3', '9']);
const minCollapsedNum = ref(1);
const collapsedItems = (h, {
  value, count, collapsedSelectedItems, onClose,
}) => {
  console.log('collapsedItems: ', value, collapsedSelectedItems, count, onClose);
  if (!count) return;
  // hover\u5C55\u793A\u5168\u90E8\u5DF2\u9009\u9879
  return (
    <t-popup>
      <div slot="content">
        {collapsedSelectedItems.map((item, index) => (
          <p style="padding: 2px;">
            <t-tag
              closable={true}
              onClick={() => {
                onClose(index + 1);
              }}
            >
              {item.label}
            </t-tag>
          </p>
        ))}
      </div>
      <span v-show={count > 0} style="color: #ED7B2F; margin-left: 8px">
        +{count}
      </span>
    </t-popup>
  );
};
<\/script>
`,V=`<template>
  <t-space>
    <t-select
      v-model="value"
      placeholder="-\u8BF7\u9009\u62E9-"
      :options="options"
      style="width: 200px; display: inline-block; margin: 0 20px 20px 0"
      filterable
      @blur="handleBlur"
      @focus="handleFocus"
      @enter="handleEnter"
    />
    <t-select
      v-model="value2"
      multiple
      placeholder="-\u8BF7\u9009\u62E9-"
      :options="options"
      :filter="filterMethod"
      style="width: 400px; display: inline-block"
      @blur="handleBlur"
      @focus="handleFocus"
    />
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      options: [
        { label: '\u9009\u9879\u4E00', value: '1' },
        { label: '\u9009\u9879\u4E8C', value: '2' },
        { label: '\u9009\u9879\u4E09', value: '3' },
        { label: 'option4', value: '4' },
        { label: 'OPTION5', value: '5' },
      ],
      value: '',
      value2: [],
    };
  },
  methods: {
    filterMethod(search, option) {
      console.log('search:', search, ', option:', option);
      return option.label.indexOf(search) !== -1;
    },
    handleBlur({ value, e }) {
      console.log('handleBlur: ', value, e);
    },
    handleFocus({ value, e }) {
      console.log('handleFocus: ', value, e);
    },
    handleEnter({ value, e, inputValue }) {
      console.log('handleEnter: ', value, e, inputValue);
    },
  },
};
<\/script>
`,M=`<template>
  <t-space>
    <t-select
      v-model="value"
      placeholder="-\u8BF7\u9009\u62E9-"
      :options="options"
      style="width: 200px; display: inline-block; margin: 0 20px 20px 0"
      filterable
      @blur="handleBlur"
      @focus="handleFocus"
      @enter="handleEnter"
    />
    <t-select
      v-model="value2"
      multiple
      placeholder="-\u8BF7\u9009\u62E9-"
      :options="options"
      :filter="filterMethod"
      style="width: 400px; display: inline-block"
      @blur="handleBlur"
      @focus="handleFocus"
    />
  </t-space>
</template>

<script setup>
import { ref } from 'vue';

const options = ref([
  {
    label: '\u9009\u9879\u4E00',
    value: '1',
  },
  {
    label: '\u9009\u9879\u4E8C',
    value: '2',
  },
  {
    label: '\u9009\u9879\u4E09',
    value: '3',
  },
  {
    label: 'option4',
    value: '4',
  },
  {
    label: 'OPTION5',
    value: '5',
  },
]);
const value = ref('');
const value2 = ref([]);
const filterMethod = (search, option) => {
  console.log('search:', search, ', option:', option);
  return option.label.indexOf(search) !== -1;
};
const handleBlur = ({ value, e }) => {
  console.log('handleBlur: ', value, e);
};
const handleFocus = ({ value, e }) => {
  console.log('handleFocus: ', value, e);
};
const handleEnter = ({ value, e, inputValue }) => {
  console.log('handleEnter: ', value, e, inputValue);
};
<\/script>
`,z=`<template>
  <!-- \u8FDC\u7A0B\u641C\u7D22\u573A\u666F\u4F1A\u6539\u53D8 options \u6570\u7EC4\uFF0C\u5BFC\u81F4\u65E0\u6CD5\u68C0\u7D22\u5386\u53F2\u9009\u9879\uFF0C\u53EF\u901A\u8FC7\u5C06 valueType \u6539\u4E3A \`object\` \u4EE5\u4ECE value \u4E2D\u8BFB\u53D6 \`label\`\uFF0C\u89E3\u51B3\u65E0\u6CD5\u56DE\u663E\u7684\u95EE\u9898 -->

  <t-space>
    <t-select
      v-model="value"
      value-type="object"
      filterable
      placeholder="\u8BF7\u9009\u62E9"
      :onSearch="remoteMethod"
      :loading="loading"
      :options="options"
      style="width: 200px; display: inline-block; margin: 0 20px 20px 0"
    />
    <t-select
      v-model="value2"
      value-type="object"
      multiple
      filterable
      placeholder="\u8BF7\u8F93\u5165\u641C\u7D22"
      :options="options2"
      @search="remoteMethod2"
      :loading="loading2"
      reserveKeyword
      style="width: 400px; display: inline-block"
    />
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      options: [
        { label: '\u9009\u9879\u4E00', value: '1' },
        { label: '\u9009\u9879\u4E8C', value: '2' },
        { label: '\u9009\u9879\u4E09', value: '3' },
      ],
      options2: [],
      value: {},
      value2: [],
      loading: false,
      loading2: false,
    };
  },
  methods: {
    remoteMethod(search) {
      console.log('search', search);
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.options = [
          {
            value: \`\${search}1\`,
            label: \`\${search}test1\`,
          },
          {
            value: \`\${search}2\`,
            label: \`\${search}test2\`,
          },
          {
            value: \`\${search}3\`,
            label: \`\${search}test3\`,
          },
        ];
      }, 500);
    },
    remoteMethod2(search) {
      console.log('search2', search);
      this.loading2 = true;
      setTimeout(() => {
        this.loading2 = false;
        this.options2 = [
          {
            value: \`\${search}1\`,
            label: \`\${search}test1\`,
          },
          {
            value: \`\${search}2\`,
            label: \`\${search}test2\`,
          },
          {
            value: \`\${search}3\`,
            label: \`\${search}test3\`,
          },
        ];
      }, 500);
    },
  },
};
<\/script>
`,F=`<template>
  <!-- \u8FDC\u7A0B\u641C\u7D22\u573A\u666F\u4F1A\u6539\u53D8 options \u6570\u7EC4\uFF0C\u5BFC\u81F4\u65E0\u6CD5\u68C0\u7D22\u5386\u53F2\u9009\u9879\uFF0C\u53EF\u901A\u8FC7\u5C06 valueType \u6539\u4E3A \`object\` \u4EE5\u4ECE value \u4E2D\u8BFB\u53D6 \`label\`\uFF0C\u89E3\u51B3\u65E0\u6CD5\u56DE\u663E\u7684\u95EE\u9898 -->

  <t-space>
    <t-select
      v-model="value"
      value-type="object"
      filterable
      placeholder="\u8BF7\u9009\u62E9"
      :onSearch="remoteMethod"
      :loading="loading"
      :options="options"
      style="width: 200px; display: inline-block; margin: 0 20px 20px 0"
    />
    <t-select
      v-model="value2"
      value-type="object"
      multiple
      filterable
      placeholder="\u8BF7\u8F93\u5165\u641C\u7D22"
      :options="options2"
      @search="remoteMethod2"
      :loading="loading2"
      reserveKeyword
      style="width: 400px; display: inline-block"
    />
  </t-space>
</template>

<script setup>
import { ref, reactive } from 'vue';

const options = ref([
  {
    label: '\u9009\u9879\u4E00',
    value: '1',
  },
  {
    label: '\u9009\u9879\u4E8C',
    value: '2',
  },
  {
    label: '\u9009\u9879\u4E09',
    value: '3',
  },
]);
const options2 = ref([]);
const value = reactive({});
const value2 = ref([]);
const loading = ref(false);
const loading2 = ref(false);
const remoteMethod = (search) => {
  console.log('search', search);
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    options.value = [
      {
        value: \`\${search}1\`,
        label: \`\${search}test1\`,
      },
      {
        value: \`\${search}2\`,
        label: \`\${search}test2\`,
      },
      {
        value: \`\${search}3\`,
        label: \`\${search}test3\`,
      },
    ];
  }, 500);
};
const remoteMethod2 = (search) => {
  console.log('search2', search);
  loading2.value = true;
  setTimeout(() => {
    loading2.value = false;
    options2.value = [
      {
        value: \`\${search}1\`,
        label: \`\${search}test1\`,
      },
      {
        value: \`\${search}2\`,
        label: \`\${search}test2\`,
      },
      {
        value: \`\${search}3\`,
        label: \`\${search}test3\`,
      },
    ];
  }, 500);
};
<\/script>
`,E=`<template>
  <t-space>
    <t-select
      v-model="value"
      creatable
      filterable
      placeholder="\u5355\u9009\u652F\u6301\u81EA\u5B9A\u4E49\u521B\u5EFA"
      :options="options"
      style="width: 200px; display: inline-block; margin: 0 20px 20px 0"
      @create="createOptions"
    />
    <t-select
      v-model="value2"
      creatable
      filterable
      multiple
      placeholder="\u591A\u9009\u652F\u6301\u81EA\u5B9A\u4E49\u521B\u5EFA"
      :options="options"
      style="width: 400px; display: inline-block"
      @create="createOptions"
    />
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      options: [
        { label: '\u9009\u9879\u4E00', value: '1' },
        { label: '\u9009\u9879\u4E8C', value: '2' },
        { label: '\u9009\u9879\u4E09', value: '3' },
      ],
      value: '',
      value2: [],
    };
  },
  methods: {
    createOptions(value) {
      this.options.push({
        value,
        label: value,
      });
      console.log('create option:', value);
    },
  },
};
<\/script>
`,H=`<template>
  <t-space>
    <t-select
      v-model="value"
      creatable
      filterable
      placeholder="\u5355\u9009\u652F\u6301\u81EA\u5B9A\u4E49\u521B\u5EFA"
      :options="options"
      style="width: 200px; display: inline-block; margin: 0 20px 20px 0"
      @create="createOptions"
    />
    <t-select
      v-model="value2"
      creatable
      filterable
      multiple
      placeholder="\u591A\u9009\u652F\u6301\u81EA\u5B9A\u4E49\u521B\u5EFA"
      :options="options"
      style="width: 400px; display: inline-block"
      @create="createOptions"
    />
  </t-space>
</template>

<script setup>
import { ref } from 'vue';

const options = ref([
  {
    label: '\u9009\u9879\u4E00',
    value: '1',
  },
  {
    label: '\u9009\u9879\u4E8C',
    value: '2',
  },
  {
    label: '\u9009\u9879\u4E09',
    value: '3',
  },
]);
const value = ref('');
const value2 = ref([]);
const createOptions = (value) => {
  options.value.push({
    value,
    label: value,
  });
  console.log('create option:', value);
};
<\/script>
`,U=`<template>
  <t-select v-model="value" placeholder="-\u8BF7\u9009\u62E9-" multiple :max="2" :options="options" style="width: 200px" />
</template>

<script>
export default {
  data() {
    return {
      options: [
        { label: '\u9009\u9879\u4E00', value: '1' },
        { label: '\u9009\u9879\u4E8C', value: '2' },
        { label: '\u9009\u9879\u4E09', value: '3' },
      ],
      value: [],
    };
  },
};
<\/script>
`,L=`<template>
  <t-select v-model="value" placeholder="-\u8BF7\u9009\u62E9-" multiple :max="2" :options="options" style="width: 200px" />
</template>

<script setup>
import { ref } from 'vue';

const options = ref([
  {
    label: '\u9009\u9879\u4E00',
    value: '1',
  },
  {
    label: '\u9009\u9879\u4E8C',
    value: '2',
  },
  {
    label: '\u9009\u9879\u4E09',
    value: '3',
  },
]);
const value = ref([]);
<\/script>
`,R=`<template>
  <t-select v-model="value" style="width: 200px" :options="options" clearable placeholder="-\u8BF7\u9009\u62E9-">
    <browse-icon slot="prefixIcon" style="margin-right: 8px" />
  </t-select>
</template>

<script>
import { BrowseIcon } from 'tdesign-icons-vue';

export default {
  components: {
    BrowseIcon,
  },
  data() {
    return {
      options: [
        { label: '\u9009\u9879\u4E00', value: '1' },
        { label: '\u9009\u9879\u4E8C', value: '2' },
        { label: '\u9009\u9879\u4E09', value: '3' },
      ],
      value: '',
    };
  },
};
<\/script>
`,W=`<template>
  <t-select v-model="value" style="width: 200px" :options="options" clearable placeholder="-\u8BF7\u9009\u62E9-">
    <browse-icon slot="prefixIcon" style="margin-right: 8px" />
  </t-select>
</template>

<script setup>
import { ref } from 'vue';
import { BrowseIcon } from 'tdesign-icons-vue';

const options = ref([
  {
    label: '\u9009\u9879\u4E00',
    value: '1',
  },
  {
    label: '\u9009\u9879\u4E8C',
    value: '2',
  },
  {
    label: '\u9009\u9879\u4E09',
    value: '3',
  },
]);
const value = ref('');
<\/script>
`,K=`<template>
  <t-space>
    <t-select
      v-model="value"
      :borderless="true"
      style="width: 200px"
      placeholder="-\u8BF7\u9009\u62E9-"
      clearable
      :options="options"
    />
    <t-select
      v-model="value2"
      :borderless="true"
      placeholder="-\u8BF7\u9009\u62E9-"
      clearable
      auto-width
      :options="options"
      multiple
    />
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          label: '\u5DF2\u9009\u62E9\u7684\u9009\u9879',
          value: '1',
        },
        {
          label: '\u77ED\u7684\u9009\u9879\u4E8C',
          value: '2',
        },
        {
          label: '\u9009\u9879\u5185\u5BB9\u8FC7\u957F\u7684\u9009\u62E9\u5668\u9009\u9879',
          value: '3',
        },
      ],
      value: '1',
      value2: [],
    };
  },
};
<\/script>
`,J=`<template>
  <t-space>
    <t-select
      v-model="value"
      :borderless="true"
      style="width: 200px"
      placeholder="-\u8BF7\u9009\u62E9-"
      clearable
      :options="options"
    />
    <t-select
      v-model="value2"
      :borderless="true"
      placeholder="-\u8BF7\u9009\u62E9-"
      clearable
      auto-width
      :options="options"
      multiple
    />
  </t-space>
</template>

<script setup>
import { ref } from 'vue';

const options = ref([
  {
    label: '\u5DF2\u9009\u62E9\u7684\u9009\u9879',
    value: '1',
  },
  {
    label: '\u77ED\u7684\u9009\u9879\u4E8C',
    value: '2',
  },
  {
    label: '\u9009\u9879\u5185\u5BB9\u8FC7\u957F\u7684\u9009\u62E9\u5668\u9009\u9879',
    value: '3',
  },
]);
const value = ref('1');
const value2 = ref([]);
<\/script>
`,q=`<template>
  <t-space>
    <t-select
      v-model="value"
      valueType="object"
      clearable
      placeholder="-\u8BF7\u9009\u62E9-"
      :options="options"
      style="width: 200px; display: inline-block; margin-right: 20px"
      @change="handleChange"
    />
    <t-select
      v-model="value2"
      valueType="object"
      clearable
      multiple
      placeholder="-\u8BF7\u9009\u62E9-"
      :options="options"
      style="width: 200px; display: inline-block"
      @change="handleChange"
    />
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      options: [
        { label: '\u9009\u9879\u4E00', value: '1' },
        { label: '\u9009\u9879\u4E8C', value: '2' },
        { label: '\u9009\u9879\u4E09', value: '3' },
      ],
      value: { value: '1', label: '\u9009\u9879\u4E00' },
      value2: [{ value: '1', label: '\u9009\u9879\u4E00' }],
    };
  },
  methods: {
    handleChange(value, context) {
      console.log('handleChange:', value, context);
    },
  },
};
<\/script>
`,G=`<template>
  <t-space>
    <t-select
      v-model="value"
      valueType="object"
      clearable
      placeholder="-\u8BF7\u9009\u62E9-"
      :options="options"
      style="width: 200px; display: inline-block; margin-right: 20px"
      @change="handleChange"
    />
    <t-select
      v-model="value2"
      valueType="object"
      clearable
      multiple
      placeholder="-\u8BF7\u9009\u62E9-"
      :options="options"
      style="width: 200px; display: inline-block"
      @change="handleChange"
    />
  </t-space>
</template>

<script setup>
import { ref, reactive } from 'vue';

const options = ref([
  {
    label: '\u9009\u9879\u4E00',
    value: '1',
  },
  {
    label: '\u9009\u9879\u4E8C',
    value: '2',
  },
  {
    label: '\u9009\u9879\u4E09',
    value: '3',
  },
]);
const value = reactive({
  value: '1',
  label: '\u9009\u9879\u4E00',
});
const value2 = ref([
  {
    value: '1',
    label: '\u9009\u9879\u4E00',
  },
]);
const handleChange = (value, context) => {
  console.log('handleChange:', value, context);
};
<\/script>
`,Y=`<template>
  <t-space>
    <t-select
      v-model="value"
      placeholder="-\u8BF7\u9009\u62E9-"
      :options="options"
      :popupProps="popupProps"
      style="width: 200px; display: inline-block"
    />
    <t-select
      v-model="value2"
      placeholder="-\u8BF7\u9009\u62E9-"
      :options="options2"
      :popupProps="popupProps2"
      style="width: 300px; display: inline-block; margin-left: 20px"
    />
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      value: '1',
      options: [
        {
          label: '\u56FA\u5B9A300px\u5BBD\u5EA6',
          value: '1',
        },
        {
          label: '\u9009\u9879\u5185\u5BB9\u8D85\u957F\u8D85\u957F\u8D85\u957F\u8D85\u957F\u8D85\u957F\u8D85\u957F\u8D85\u957F\u8D85\u957F\u8D85\u957F\u8D85\u957F\u8D85\u957F\u7684\u9009\u9879',
          value: '2',
        },
      ],
      // \u81EA\u5B9A\u4E49\u4E0B\u62C9\u9009\u9879\u5BBD\u5EA6\u4E3A300px
      popupProps: {
        overlayInnerStyle: {
          width: '300px',
        },
      },

      value2: '1',
      options2: [
        {
          label: '\u4E0B\u62C9\u6846\u5F3A\u5236\u548C\u8F93\u5165\u6846\u540C\u5BBD',
          value: '1',
        },
        {
          label: '\u9009\u9879\u5185\u5BB9\u8D85\u957F\u8D85\u957F\u8D85\u957F\u8D85\u957F\u8D85\u957F\u8D85\u957F\u8D85\u957F\u8D85\u957F\u8D85\u957F\u8D85\u957F\u8D85\u957F\u7684\u9009\u9879',
          value: '2',
        },
      ],
      // \u5B9A\u4E49\u4E0B\u62C9\u5BBD\u5EA6\u59CB\u7EC8\u4E0E\u89E6\u53D1\u6D6E\u5C42\u7684\u5143\u7D20\uFF08\u5373select\u7EC4\u4EF6\uFF09\u7B49\u5BBD
      popupProps2: {
        overlayInnerStyle: (trigger) => ({ width: \`\${trigger.offsetWidth}px\` }),
      },
    };
  },
};
<\/script>
`,Q=`<template>
  <t-space>
    <t-select
      v-model="value"
      placeholder="-\u8BF7\u9009\u62E9-"
      :options="options"
      :popupProps="popupProps"
      style="width: 200px; display: inline-block"
    />
    <t-select
      v-model="value2"
      placeholder="-\u8BF7\u9009\u62E9-"
      :options="options2"
      :popupProps="popupProps2"
      style="width: 300px; display: inline-block; margin-left: 20px"
    />
  </t-space>
</template>

<script setup>
import { ref, reactive } from 'vue';

const value = ref('1');
const options = ref([
  {
    label: '\u56FA\u5B9A300px\u5BBD\u5EA6',
    value: '1',
  },
  {
    label: '\u9009\u9879\u5185\u5BB9\u8D85\u957F\u8D85\u957F\u8D85\u957F\u8D85\u957F\u8D85\u957F\u8D85\u957F\u8D85\u957F\u8D85\u957F\u8D85\u957F\u8D85\u957F\u8D85\u957F\u7684\u9009\u9879',
    value: '2',
  },
]);
// \u81EA\u5B9A\u4E49\u4E0B\u62C9\u9009\u9879\u5BBD\u5EA6\u4E3A300px
const popupProps = reactive({
  overlayInnerStyle: {
    width: '300px',
  },
});
const value2 = ref('1');
const options2 = ref([
  {
    label: '\u4E0B\u62C9\u6846\u5F3A\u5236\u548C\u8F93\u5165\u6846\u540C\u5BBD',
    value: '1',
  },
  {
    label: '\u9009\u9879\u5185\u5BB9\u8D85\u957F\u8D85\u957F\u8D85\u957F\u8D85\u957F\u8D85\u957F\u8D85\u957F\u8D85\u957F\u8D85\u957F\u8D85\u957F\u8D85\u957F\u8D85\u957F\u7684\u9009\u9879',
    value: '2',
  },
]);
// \u5B9A\u4E49\u4E0B\u62C9\u5BBD\u5EA6\u59CB\u7EC8\u4E0E\u89E6\u53D1\u6D6E\u5C42\u7684\u5143\u7D20\uFF08\u5373select\u7EC4\u4EF6\uFF09\u7B49\u5BBD
const popupProps2 = reactive({
  overlayInnerStyle: (trigger) => ({
    width: \`\${trigger.offsetWidth}px\`,
  }),
});
<\/script>
`,X=`<template>
  <t-space>
    <t-select
      style="width: 300px"
      :options="options"
      placeholder="\u8BF7\u9009\u62E9"
      :popup-props="{ 'on-scroll-to-bottom': handleScrollToBottom }"
    />
  </t-space>
</template>
<script>
const initialOptions = [];
for (let i = 1; i < 15; i++) {
  initialOptions.push({ label: \`\u7B2C \${i} \u9879\`, value: i });
}
export default {
  data() {
    return {
      options: initialOptions,
    };
  },
  methods: {
    // \u901A\u8FC7\u76D1\u542Cscroll\u6EDA\u52A8\u4E8B\u4EF6\u81EA\u884C\u5224\u65AD
    // handleScroll({ e }) {
    //   const { scrollTop, clientHeight, scrollHeight } = e.target;
    //   if (clientHeight + Math.floor(scrollTop) === scrollHeight) {
    //     console.log('\u5230\u5E95\u90E8\u4E86');
    //     this.options = this.options.concat({
    //       label: \`\u6EDA\u52A8\u65B0\u589E\u9009\u9879\${this.options.length + 1}\`,
    //       value: this.options.length + 1,
    //     });
    //   }
    // },

    handleScrollToBottom() {
      // \u76F4\u63A5\u4F7F\u7528\u6EDA\u52A8\u89E6\u5E95\u4E8B\u4EF6
      this.options = this.options.concat({
        label: \`\u6EDA\u52A8\u65B0\u589E\u9009\u9879\${this.options.length + 1}\`,
        value: this.options.length + 1,
      });
    },
  },
};
<\/script>
`,Z=`<template>
  <t-space>
    <t-select
      style="width: 300px"
      :options="options"
      placeholder="\u8BF7\u9009\u62E9"
      :popup-props="{ 'on-scroll-to-bottom': handleScrollToBottom }"
    />
  </t-space>
</template>
<script setup>
import { ref } from 'vue';

const initialOptions = [];
for (let i = 1; i < 15; i++) {
  initialOptions.push({
    label: \`\u7B2C \${i} \u9879\`,
    value: i,
  });
}
const options = ref(initialOptions);
// \u901A\u8FC7\u76D1\u542Cscroll\u6EDA\u52A8\u4E8B\u4EF6\u81EA\u884C\u5224\u65AD
// const handleScroll = ({
//   e
// }) => {
//   const {
//     scrollTop,
//     clientHeight,
//     scrollHeight
//   } = e.target;
//   if (clientHeight + Math.floor(scrollTop) === scrollHeight) {
//     console.log('\u5230\u5E95\u90E8\u4E86');
//     options.value = options.value.concat({
//       label: \`\u6EDA\u52A8\u65B0\u589E\u9009\u9879\${options.value.length + 1}\`,
//       value: options.value.length + 1
//     });
//   }
// };
const handleScrollToBottom = () => {
  // \u76F4\u63A5\u4F7F\u7528\u6EDA\u52A8\u89E6\u5E95\u4E8B\u4EF6
  options.value = options.value.concat({
    label: \`\u6EDA\u52A8\u65B0\u589E\u9009\u9879\${options.value.length + 1}\`,
    value: options.value.length + 1,
  });
};
<\/script>
`,nn=`<template>
  <!-- \u5F00\u542F\u865A\u62DF\u6EDA\u52A8\u8BF7\u4E3Aselect\u7684panel\u8BBE\u5B9A\u597Dheight \u901A\u8FC7popupProps\u8FDB\u884C\u900F\u4F20 -->
  <t-space>
    <t-select
      v-model="value1"
      :options="options"
      filterable
      placeholder="\u8BF7\u9009\u62E9"
      :style="{ width: '300px' }"
      :scroll="{ type: 'virtual' }"
      :popup-props="{ overlayInnerStyle: { height: '300px' } }"
    />
    <!-- \u5F00\u542F\u865A\u62DF\u6EDA\u52A8\u8BF7\u4E3Aselect\u7684panel\u8BBE\u5B9A\u597Dheight \u901A\u8FC7popupProps\u8FDB\u884C\u900F\u4F20 -->
    <t-select
      v-model="value2"
      placeholder="\u8BF7\u9009\u62E9"
      :style="{ width: '300px' }"
      :scroll="{ type: 'virtual' }"
      :popup-props="{ overlayInnerStyle: { height: '300px' } }"
    >
      <t-option v-for="item in options" :value="item.value" :label="item.label" :key="item.value"></t-option>
    </t-select>
  </t-space>
</template>

<script lang="jsx">
export default {
  data() {
    const initialOptions = [];
    for (let i = 0; i < 10000; i++) {
      initialOptions.push({ label: \`\u9009\u9879\${i + 1}\`, value: String(i) });
    }
    return {
      value1: '',
      value2: '',
      options: initialOptions,
    };
  },
};
<\/script>
`,en=`<template>
  <!-- \u5F00\u542F\u865A\u62DF\u6EDA\u52A8\u8BF7\u4E3Aselect\u7684panel\u8BBE\u5B9A\u597Dheight \u901A\u8FC7popupProps\u8FDB\u884C\u900F\u4F20 -->
  <t-space>
    <t-select
      v-model="value1"
      :options="options"
      filterable
      placeholder="\u8BF7\u9009\u62E9"
      :style="{ width: '300px' }"
      :scroll="{ type: 'virtual' }"
      :popup-props="{ overlayInnerStyle: { height: '300px' } }"
    />
    <!-- \u5F00\u542F\u865A\u62DF\u6EDA\u52A8\u8BF7\u4E3Aselect\u7684panel\u8BBE\u5B9A\u597Dheight \u901A\u8FC7popupProps\u8FDB\u884C\u900F\u4F20 -->
    <t-select
      v-model="value2"
      placeholder="\u8BF7\u9009\u62E9"
      :style="{ width: '300px' }"
      :scroll="{ type: 'virtual' }"
      :popup-props="{ overlayInnerStyle: { height: '300px' } }"
    >
      <t-option v-for="item in options" :value="item.value" :label="item.label" :key="item.value"></t-option>
    </t-select>
  </t-space>
</template>

<script setup lang="jsx">
import { ref } from 'vue';

const initialOptions = [];
for (let i = 0; i < 10000; i++) {
  options.push({
    label: \`\u9009\u9879\${i + 1}\`,
    value: String(i),
  });
}
const value1 = ref('');
const value2 = ref('');
const options = ref(initialOptions);
<\/script>
`,m=[{name:"autoWidth",type:"Boolean",defaultValue:!1,options:[]},{name:"borderless",type:"Boolean",defaultValue:!1,options:[]},{name:"clearable",type:"Boolean",defaultValue:!1,options:[]},{name:"creatable",type:"Boolean",defaultValue:!1,options:[]},{name:"disabled",type:"Boolean",defaultValue:!1,options:[]},{name:"filterable",type:"Boolean",defaultValue:!1,options:[]},{name:"loading",type:"Boolean",defaultValue:!1,options:[]},{name:"multiple",type:"Boolean",defaultValue:!1,options:[]},{name:"readonly",type:"Boolean",defaultValue:!1,options:[]},{name:"reserveKeyword",type:"Boolean",defaultValue:!1,options:[]},{name:"showArrow",type:"Boolean",defaultValue:!0,options:[]},{name:"size",type:"enum",defaultValue:"medium",options:[{label:"small",value:"small"},{label:"medium",value:"medium"},{label:"large",value:"large"}]},{name:"valueType",type:"enum",defaultValue:"value",options:[{label:"value",value:"value"},{label:"object",value:"object"}]}];const i={};i.setup=(n,l)=>{const e=s(m),t=[{label:"select",value:"select"}],a={select:`
        <t-select v-bind="configProps">
          <t-option key="apple" label="Apple" value="apple" />
          <t-option key="orange" value="orange">Orange</t-option>
          <t-option key="banana" label="Banana" value="banana" />
        </t-select>
      `},o=s(`<template>${a[t[0].value].trim()}</template>`);function c(d){o.value=`<template>${a[d].trim()}</template>`}return{configList:e,panelList:t,usageCode:o,onPanelChange:c}};var r=function(){var n=this,l=n.$createElement,e=n._self._c||l;return e("base-usage",{attrs:{code:n.usageCode,"config-list":n.configList,"panel-list":n.panelList},on:{PanelChange:n.onPanelChange},scopedSlots:n._u([{key:"select",fn:function(t){var a=t.configProps;return[e("t-select",n._b({},"t-select",a,!1),[e("t-option",{key:"apple",attrs:{label:"Apple",value:"apple"}}),e("t-option",{key:"orange",attrs:{value:"orange"}},[n._v("Orange")]),e("t-option",{key:"banana",attrs:{label:"Banana",value:"banana"}})],1)]}}])})},b=[];r._withStripped=!0;const p={};var u=v(i,r,b,!1,h,null,null,null);function h(n){for(let l in p)this[l]=p[l]}u.options.__file="../src/select/_usage/index.vue";var ln=function(){return u.exports}();export{W as A,K as B,J as C,g as D,q as E,G as F,Y as G,Q as H,X as I,Z as J,nn as K,en as L,ln as U,x as a,y as b,C as c,k as d,_ as e,w as f,D as g,O as h,I as i,P as j,S as k,$ as l,B as m,j as n,T as o,N as p,A as q,V as r,M as s,z as t,F as u,E as v,H as w,U as x,L as y,R as z};
