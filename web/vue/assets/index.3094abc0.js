import{Y as i,n as v}from"./index.663c003f.js";var f=`<template>
  <t-space direction="vertical">
    <!-- \u57FA\u7840\u793A\u4F8B\uFF0C\u5355\u9009\u573A\u666F\uFF0CvalueMode: 'onlyLeaf' \u8868\u793A\u53EA\u5141\u8BB8\u9009\u4E2D\u53F6\u5B50\u8282\u70B9 -->
    <t-tree-select
      style="width: 500px"
      :data="options"
      v-model="value1"
      :treeProps="{ expandAll: true, valueMode: 'onlyLeaf' }"
      filterable
      clearable
      placeholder="\u8BF7\u9009\u62E9\uFF08\u4EC5\u663E\u793A\u53F6\u5B50\u8282\u70B9\uFF09"
      @blur="onBlurTrigger"
      @change="onChange"
    />

    <!-- \u9009\u4E2D\u503C\u4E3A\u53F6\u5B50\u8282\u70B9\uFF0C\u8F93\u5165\u6846\u663E\u793A\u5168\u90E8\u5C42\u7EA7 -->
    <t-tree-select
      ref="single-tree-select"
      style="width: 500px"
      :data="options"
      v-model="value2"
      label="\u5355\u9009\uFF1A"
      :treeProps="{ expandAll: true, valueMode: 'onlyLeaf' }"
      clearable
      placeholder="\u8BF7\u9009\u62E9\uFF08\u663E\u793A\u9009\u4E2D\u8282\u70B9\u7684\u5168\u90E8\u8DEF\u5F84\uFF09"
      @blur="onBlurTrigger"
      @change="onChange"
    >
      <template #valueDisplay="{ value }">
        <div v-if="value.label">{{ getNodePath(value) }}</div>
      </template>
    </t-tree-select>

    <!-- \u81EA\u7531\u63A7\u5236\u4E0B\u62C9\u6846\u663E\u793A\u4E0E\u5426\uFF0C\u793A\u4F8B\u4EE3\u7801\u6709\u6548\uFF0C\u52FF\u5220 -->
    <!-- <t-tree-select
      style="width: 500px"
      :data="options"
      v-model="value"
      :popupVisible="popupVisible"
      :treeProps="{ expandAll: true, valueMode: 'onlyLeaf' }"
      filterable
      clearable
      placeholder="\u8BF7\u9009\u62E9"
      @blur="onBlurTrigger"
      @change="onChange"
      @popup-visible-change="onVisibleChange"
    /> -->
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      value1: '',
      value2: '',
      // popupVisible: false,
      options: [
        {
          label: '\u5E7F\u4E1C\u7701',
          value: 'guangdong',
          children: [
            {
              label: '\u5E7F\u5DDE\u5E02',
              value: 'guangzhou',
            },
            {
              label: '\u6DF1\u5733\u5E02',
              value: 'shenzhen',
              children: [
                {
                  label: '\u5357\u5C71\u533A\u6D77\u5929\u4E8C\u8DEF33\u53F7\u817E\u8BAF\u6EE8\u6D77\u5927\u53A6',
                  value: 'Tencent',
                },
              ],
            },
          ],
        },
        {
          label: '\u6C5F\u82CF\u7701',
          value: 'jiangsu',
          disabled: true,
          children: [
            {
              label: '\u5357\u4EAC\u5E02',
              value: 'nanjing',
            },
            {
              label: '\u82CF\u5DDE\u5E02',
              value: 'suzhou',
            },
          ],
        },
      ],
    };
  },
  methods: {
    onBlurTrigger(context) {
      console.log('blur:', context);
    },
    onChange(value, context) {
      console.log('change:', value, context, context.node?.getPath());
    },
    // onVisibleChange(v, c) {
    //   if (c.trigger || c.node?.label !== '\u5E7F\u5DDE\u5E02') {
    //     this.popupVisible = v;
    //   }
    // },
    getNodePath(nodeInfo) {
      if (!nodeInfo.value || !this.$refs['single-tree-select']) return;
      const path = this.$refs['single-tree-select'].$refs.treeRef?.getPath(nodeInfo.value);
      return path.map((node) => node.data.label).join('/');
    },
  },
};
<\/script>
`,y=`<template>
  <t-space direction="vertical">
    <!-- \u57FA\u7840\u793A\u4F8B\uFF0C\u5355\u9009\u573A\u666F\uFF0CvalueMode: 'onlyLeaf' \u8868\u793A\u53EA\u5141\u8BB8\u9009\u4E2D\u53F6\u5B50\u8282\u70B9 -->
    <t-tree-select
      style="width: 500px"
      :data="options"
      v-model="value1"
      :treeProps="{ expandAll: true, valueMode: 'onlyLeaf' }"
      filterable
      clearable
      placeholder="\u8BF7\u9009\u62E9\uFF08\u4EC5\u663E\u793A\u53F6\u5B50\u8282\u70B9\uFF09"
      @blur="onBlurTrigger"
      @change="onChange"
    />

    <!-- \u9009\u4E2D\u503C\u4E3A\u53F6\u5B50\u8282\u70B9\uFF0C\u8F93\u5165\u6846\u663E\u793A\u5168\u90E8\u5C42\u7EA7 -->
    <t-tree-select
      ref="single-tree-select"
      style="width: 500px"
      :data="options"
      v-model="value2"
      label="\u5355\u9009\uFF1A"
      :treeProps="{ expandAll: true, valueMode: 'onlyLeaf' }"
      clearable
      placeholder="\u8BF7\u9009\u62E9\uFF08\u663E\u793A\u9009\u4E2D\u8282\u70B9\u7684\u5168\u90E8\u8DEF\u5F84\uFF09"
      @blur="onBlurTrigger"
      @change="onChange"
    >
      <template #valueDisplay="{ value }">
        <div v-if="value.label">{{ getNodePath(value) }}</div>
      </template>
    </t-tree-select>

    <!-- \u81EA\u7531\u63A7\u5236\u4E0B\u62C9\u6846\u663E\u793A\u4E0E\u5426\uFF0C\u793A\u4F8B\u4EE3\u7801\u6709\u6548\uFF0C\u52FF\u5220 -->
    <!-- <t-tree-select
      style="width: 500px"
      :data="options"
      v-model="value"
      :popupVisible="popupVisible"
      :treeProps="{ expandAll: true, valueMode: 'onlyLeaf' }"
      filterable
      clearable
      placeholder="\u8BF7\u9009\u62E9"
      @blur="onBlurTrigger"
      @change="onChange"
      @popup-visible-change="onVisibleChange"
    /> -->
  </t-space>
</template>

<script setup>
import { ref } from 'vue';

const singleTreeSelect = ref();
const value1 = ref('');
const value2 = ref('');
// const popupVisible = ref(false);
const options = ref([
  {
    label: '\u5E7F\u4E1C\u7701',
    value: 'guangdong',
    children: [
      {
        label: '\u5E7F\u5DDE\u5E02',
        value: 'guangzhou',
      },
      {
        label: '\u6DF1\u5733\u5E02',
        value: 'shenzhen',
        children: [
          {
            label: '\u5357\u5C71\u533A\u6D77\u5929\u4E8C\u8DEF33\u53F7\u817E\u8BAF\u6EE8\u6D77\u5927\u53A6',
            value: 'Tencent',
          },
        ],
      },
    ],
  },
  {
    label: '\u6C5F\u82CF\u7701',
    value: 'jiangsu',
    disabled: true,
    children: [
      {
        label: '\u5357\u4EAC\u5E02',
        value: 'nanjing',
      },
      {
        label: '\u82CF\u5DDE\u5E02',
        value: 'suzhou',
      },
    ],
  },
]);
const onBlurTrigger = (context) => {
  console.log('blur:', context);
};
const onChange = (value, context) => {
  console.log('change:', value, context, context.node?.getPath());
};
// const onVisibleChange = (v, c) => {
//   if (c.trigger || c.node?.label !== '\u5E7F\u5DDE\u5E02') {
//     popupVisible.value = v;
//   }
// };
const getNodePath = (nodeInfo) => {
  if (!nodeInfo.value || !singleTreeSelect.value) return;
  const path = singleTreeSelect.value.$refs.treeRef?.getPath(nodeInfo.value);
  return path.map((node) => node.data.label).join('/');
};
<\/script>
`,x=`<template>
  <t-tree-select v-model="value" :data="options" multiple clearable placeholder="\u8BF7\u9009\u62E9" @remove="handleRemove">
  </t-tree-select>
</template>
<script lang="jsx">
const OPTIONS = [
  { label: 'tdesign-vue', value: 1 },
  {
    label: 'tdesign-react',
    value: 2,
    children: [
      { label: 'tdesign-web-react', value: '2.1' },
      { label: 'tdesign-mobile-react', value: '2.2' },
    ],
  },
  { label: 'tdesign-miniprogram', value: 3 },
  // eslint-disable-next-line
  { label: (h) => <span>tdesign-mobile-react</span>, text: 'tdesign-mobile-react', value: '4' },
  { label: 'tdesign-angular', value: '5' },
  { label: 'tdesign-mobile-vue', value: '6' },
];
export default {
  data() {
    return {
      value: [1, 2, 3],
      options: OPTIONS,
    };
  },
  methods: {
    handleRemove(ctx) {
      console.log('\u79FB\u9664\u9009\u9879', ctx);
    },
  },
};
<\/script>
`,z=`<template>
  <t-tree-select v-model="value" :data="options" multiple clearable placeholder="\u8BF7\u9009\u62E9" @remove="handleRemove">
  </t-tree-select>
</template>
<script setup lang="jsx">
import { ref } from 'vue';

const OPTIONS = [
  {
    label: 'tdesign-vue',
    value: 1,
  },
  {
    label: 'tdesign-react',
    value: 2,
    children: [
      {
        label: 'tdesign-web-react',
        value: '2.1',
      },
      {
        label: 'tdesign-mobile-react',
        value: '2.2',
      },
    ],
  },
  {
    label: 'tdesign-miniprogram',
    value: 3,
  },
  {
    label: () => <span>tdesign-mobile-react</span>,
    text: 'tdesign-mobile-react',
    value: '4',
  },
  {
    label: 'tdesign-angular',
    value: '5',
  },
  {
    label: 'tdesign-mobile-vue',
    value: '6',
  },
];
const value = ref([1, 2, 3]);
const options = ref(OPTIONS);
const handleRemove = (ctx) => {
  console.log('\u79FB\u9664\u9009\u9879', ctx);
};
<\/script>
`,C=`<template>
  <t-space direction="vertical">
    <t-radio-group v-model="type" variant="default-filled">
      <t-radio-button value="filterable">\u9ED8\u8BA4\u8FC7\u6EE4\u89C4\u5219</t-radio-button>
      <t-radio-button value="filter">\u81EA\u5B9A\u4E49\u8FC7\u6EE4\u89C4\u5219</t-radio-button>
      <t-radio-button value="search">\u8FDC\u7A0B\u641C\u7D22</t-radio-button>
    </t-radio-group>
    <t-radio-group v-model="multiple" variant="default-filled">
      <t-radio-button :value="true">\u591A\u9009</t-radio-button>
      <t-radio-button :value="false">\u5355\u9009</t-radio-button>
    </t-radio-group>

    <template v-if="multiple">
      <!-- \u591A\u9009\uFF1A\u9ED8\u8BA4\u8FC7\u6EE4\u89C4\u5219 -->
      <t-tree-select
        v-if="type === 'filterable'"
        v-model="multipleValue1"
        :data="options"
        multiple
        clearable
        filterable
        placeholder="\u8BF7\u9009\u62E9"
        style="width: 500px"
      ></t-tree-select>

      <!-- \u591A\u9009\uFF1A\u81EA\u5B9A\u4E49\u8FC7\u6EE4\u89C4\u5219 -->
      <t-tree-select
        v-else-if="type === 'filter'"
        v-model="multipleValue2"
        :data="options"
        multiple
        clearable
        :filter="filterFunction"
        :treeProps="{ expandAll: true, valueMode: 'onlyLeaf' }"
        placeholder="\u8BF7\u9009\u62E9"
        style="width: 500px"
      ></t-tree-select>

      <!-- \u591A\u9009\uFF1A\u8FDC\u7A0B\u641C\u7D22 -->
      <!-- :loadingText="loadingText" -->
      <t-tree-select
        v-else
        v-model="multipleValue3"
        :data="options"
        multiple
        clearable
        placeholder="\u8BF7\u9009\u62E9"
        style="width: 500px"
        :popupVisible="true"
        :loading="loading"
        :treeProps="{ expandAll: true, valueMode: 'onlyLeaf' }"
        @search="onMultipleRemoteSearch"
      ></t-tree-select>
    </template>

    <template v-else>
      <!-- \u5355\u9009\uFF1A\u9ED8\u8BA4\u8FC7\u6EE4\u89C4\u5219 -->
      <t-tree-select
        v-if="type === 'filterable'"
        v-model="singleValue1"
        :data="options"
        :treeProps="{ expandAll: true, valueMode: 'onlyLeaf' }"
        clearable
        filterable
        placeholder="\u8BF7\u9009\u62E9"
        style="width: 300px"
        @focus="onFocus"
      ></t-tree-select>

      <!-- \u5355\u9009\uFF1A\u81EA\u5B9A\u4E49\u8FC7\u6EE4\u89C4\u5219 -->
      <t-tree-select
        v-else-if="type === 'filter'"
        v-model="singleValue2"
        :data="options"
        clearable
        :filter="filterFunction"
        :treeProps="{ expandAll: true, valueMode: 'onlyLeaf' }"
        placeholder="\u8BF7\u9009\u62E9"
        style="width: 300px"
      ></t-tree-select>

      <!-- \u5355\u9009\uFF1A\u8FDC\u7A0B\u641C\u7D22 -->
      <!-- :loadingText="loadingText" -->
      <t-tree-select
        v-else
        v-model="singleValue3"
        :data="options"
        clearable
        placeholder="\u8BF7\u9009\u62E9"
        style="width: 500px"
        :loading="loading"
        :treeProps="{ expandAll: true, valueMode: 'onlyLeaf' }"
        @search="onMultipleRemoteSearch"
      ></t-tree-select>
    </template>
  </t-space>
</template>
<script lang="jsx">
const OPTIONS = [
  {
    label: '\u5E7F\u4E1C\u7701',
    value: 'guangdong',
    children: [
      {
        label: '\u5E7F\u5DDE\u5E02',
        value: 'guangzhou',
      },
      {
        label: '\u6DF1\u5733\u5E02',
        value: 'shenzhen',
      },
    ],
  },
  {
    label: '\u6C5F\u82CF\u7701',
    value: 'jiangsu',
    children: [
      {
        label: '\u5357\u4EAC\u5E02',
        value: 'nanjing',
      },
      {
        label: '\u82CF\u5DDE\u5E02',
        value: 'suzhou',
      },
    ],
  },
];
export default {
  data() {
    return {
      multiple: true,
      multipleValue1: [],
      multipleValue2: [],
      multipleValue3: [],
      loading: false,
      singleValue1: '',
      singleValue2: '',
      singleValue3: '',
      type: 'filterable',
      options: OPTIONS,
    };
  },

  methods: {
    filterFunction(searchText, node) {
      return node.data.label.indexOf(searchText) >= 0;
    },
    onMultipleRemoteSearch(keyword) {
      if (!keyword) {
        this.options = OPTIONS;
        return;
      }
      console.log('search', keyword);
      this.loading = true;
      const timer = setTimeout(() => {
        this.options = [
          { label: \`\u641C\u7D22\u7ED3\u679C\u4E00\uFF1A\${keyword}\`, value: \`\${keyword}1\` },
          { label: \`\u641C\u7D22\u7ED3\u679C\u4E8C\uFF1A\${keyword}\`, value: \`\${keyword}2\` },
        ];
        this.loading = false;
        clearTimeout(timer);
      }, 300);
    },
    // eslint-disable-next-line
    // loadingText(h) {
    //   return <div>123</div>;
    // },
    onFocus() {
      console.log('focus');
    },
  },
};
<\/script>
`,P=`<template>
  <t-space direction="vertical">
    <t-radio-group v-model="type" variant="default-filled">
      <t-radio-button value="filterable">\u9ED8\u8BA4\u8FC7\u6EE4\u89C4\u5219</t-radio-button>
      <t-radio-button value="filter">\u81EA\u5B9A\u4E49\u8FC7\u6EE4\u89C4\u5219</t-radio-button>
      <t-radio-button value="search">\u8FDC\u7A0B\u641C\u7D22</t-radio-button>
    </t-radio-group>
    <t-radio-group v-model="multiple" variant="default-filled">
      <t-radio-button :value="true">\u591A\u9009</t-radio-button>
      <t-radio-button :value="false">\u5355\u9009</t-radio-button>
    </t-radio-group>

    <template v-if="multiple">
      <!-- \u591A\u9009\uFF1A\u9ED8\u8BA4\u8FC7\u6EE4\u89C4\u5219 -->
      <t-tree-select
        v-if="type === 'filterable'"
        v-model="multipleValue1"
        :data="options"
        multiple
        clearable
        filterable
        placeholder="\u8BF7\u9009\u62E9"
        style="width: 500px"
      ></t-tree-select>

      <!-- \u591A\u9009\uFF1A\u81EA\u5B9A\u4E49\u8FC7\u6EE4\u89C4\u5219 -->
      <t-tree-select
        v-else-if="type === 'filter'"
        v-model="multipleValue2"
        :data="options"
        multiple
        clearable
        :filter="filterFunction"
        :treeProps="{ expandAll: true, valueMode: 'onlyLeaf' }"
        placeholder="\u8BF7\u9009\u62E9"
        style="width: 500px"
      ></t-tree-select>

      <!-- \u591A\u9009\uFF1A\u8FDC\u7A0B\u641C\u7D22 -->
      <!-- :loadingText="loadingText" -->
      <t-tree-select
        v-else
        v-model="multipleValue3"
        :data="options"
        multiple
        clearable
        placeholder="\u8BF7\u9009\u62E9"
        style="width: 500px"
        :popupVisible="true"
        :loading="loading"
        :treeProps="{ expandAll: true, valueMode: 'onlyLeaf' }"
        @search="onMultipleRemoteSearch"
      ></t-tree-select>
    </template>

    <template v-else>
      <!-- \u5355\u9009\uFF1A\u9ED8\u8BA4\u8FC7\u6EE4\u89C4\u5219 -->
      <t-tree-select
        v-if="type === 'filterable'"
        v-model="singleValue1"
        :data="options"
        :treeProps="{ expandAll: true, valueMode: 'onlyLeaf' }"
        clearable
        filterable
        placeholder="\u8BF7\u9009\u62E9"
        style="width: 300px"
        @focus="onFocus"
      ></t-tree-select>

      <!-- \u5355\u9009\uFF1A\u81EA\u5B9A\u4E49\u8FC7\u6EE4\u89C4\u5219 -->
      <t-tree-select
        v-else-if="type === 'filter'"
        v-model="singleValue2"
        :data="options"
        clearable
        :filter="filterFunction"
        :treeProps="{ expandAll: true, valueMode: 'onlyLeaf' }"
        placeholder="\u8BF7\u9009\u62E9"
        style="width: 300px"
      ></t-tree-select>

      <!-- \u5355\u9009\uFF1A\u8FDC\u7A0B\u641C\u7D22 -->
      <!-- :loadingText="loadingText" -->
      <t-tree-select
        v-else
        v-model="singleValue3"
        :data="options"
        clearable
        placeholder="\u8BF7\u9009\u62E9"
        style="width: 500px"
        :loading="loading"
        :treeProps="{ expandAll: true, valueMode: 'onlyLeaf' }"
        @search="onMultipleRemoteSearch"
      ></t-tree-select>
    </template>
  </t-space>
</template>
<script setup lang="jsx">
import { ref } from 'vue';

const OPTIONS = [
  {
    label: '\u5E7F\u4E1C\u7701',
    value: 'guangdong',
    children: [
      {
        label: '\u5E7F\u5DDE\u5E02',
        value: 'guangzhou',
      },
      {
        label: '\u6DF1\u5733\u5E02',
        value: 'shenzhen',
      },
    ],
  },
  {
    label: '\u6C5F\u82CF\u7701',
    value: 'jiangsu',
    children: [
      {
        label: '\u5357\u4EAC\u5E02',
        value: 'nanjing',
      },
      {
        label: '\u82CF\u5DDE\u5E02',
        value: 'suzhou',
      },
    ],
  },
];
const multiple = ref(true);
const multipleValue1 = ref([]);
const multipleValue2 = ref([]);
const multipleValue3 = ref([]);
const loading = ref(false);
const singleValue1 = ref('');
const singleValue2 = ref('');
const singleValue3 = ref('');
const type = ref('filterable');
const options = ref(OPTIONS);
const filterFunction = (searchText, node) => node.data.label.indexOf(searchText) >= 0;
const onMultipleRemoteSearch = (keyword) => {
  if (!keyword) {
    options.value = OPTIONS;
    return;
  }
  console.log('search', keyword);
  loading.value = true;
  const timer = setTimeout(() => {
    options.value = [
      {
        label: \`\u641C\u7D22\u7ED3\u679C\u4E00\uFF1A\${keyword}\`,
        value: \`\${keyword}1\`,
      },
      {
        label: \`\u641C\u7D22\u7ED3\u679C\u4E8C\uFF1A\${keyword}\`,
        value: \`\${keyword}2\`,
      },
    ];
    loading.value = false;
    clearTimeout(timer);
  }, 300);
};
// eslint-disable-next-line
// const loadingText = h => {
//   return <div>123</div>;
// };
const onFocus = () => {
  console.log('focus');
};
<\/script>
`,V=`<template>
  <t-space direction="vertical">
    <t-tree-select
      style="width: 300px"
      :data="options"
      v-model="value"
      clearable
      valueType="object"
      placeholder="\u8BF7\u9009\u62E9"
    />
    <t-tree-select
      style="width: 300px"
      :data="options"
      v-model="mulValue"
      clearable
      multiple
      valueType="object"
      placeholder="\u8BF7\u9009\u62E9"
    />
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      value: { label: '\u6DF1\u5733\u5E02', value: 'shenzhen' },
      mulValue: [
        { label: '\u5E7F\u5DDE\u5E02', value: 'guangzhou' },
        { label: '\u6DF1\u5733\u5E02', value: 'shenzhen' },
      ],
      options: [
        {
          label: '\u5E7F\u4E1C\u7701',
          value: 'guangdong',
          children: [
            {
              label: '\u5E7F\u5DDE\u5E02',
              value: 'guangzhou',
            },
            {
              label: '\u6DF1\u5733\u5E02',
              value: 'shenzhen',
            },
          ],
        },
        {
          label: '\u6C5F\u82CF\u7701',
          value: 'jiangsu',
          children: [
            {
              label: '\u5357\u4EAC\u5E02',
              value: 'nanjing',
            },
            {
              label: '\u82CF\u5DDE\u5E02',
              value: 'suzhou',
            },
          ],
        },
      ],
    };
  },
};
<\/script>
`,w=`<template>
  <t-space direction="vertical">
    <t-tree-select
      style="width: 300px"
      :data="options"
      v-model="value"
      clearable
      valueType="object"
      placeholder="\u8BF7\u9009\u62E9"
    />
    <t-tree-select
      style="width: 300px"
      :data="options"
      v-model="mulValue"
      clearable
      multiple
      valueType="object"
      placeholder="\u8BF7\u9009\u62E9"
    />
  </t-space>
</template>
<script setup>
import { ref, reactive } from 'vue';

const value = reactive({
  label: '\u6DF1\u5733\u5E02',
  value: 'shenzhen',
});
const mulValue = ref([
  {
    label: '\u5E7F\u5DDE\u5E02',
    value: 'guangzhou',
  },
  {
    label: '\u6DF1\u5733\u5E02',
    value: 'shenzhen',
  },
]);
const options = ref([
  {
    label: '\u5E7F\u4E1C\u7701',
    value: 'guangdong',
    children: [
      {
        label: '\u5E7F\u5DDE\u5E02',
        value: 'guangzhou',
      },
      {
        label: '\u6DF1\u5733\u5E02',
        value: 'shenzhen',
      },
    ],
  },
  {
    label: '\u6C5F\u82CF\u7701',
    value: 'jiangsu',
    children: [
      {
        label: '\u5357\u4EAC\u5E02',
        value: 'nanjing',
      },
      {
        label: '\u82CF\u5DDE\u5E02',
        value: 'suzhou',
      },
    ],
  },
]);
<\/script>
`,T=`<template>
  <!-- :keys="treeProps.keys" -->
  <t-tree-select
    :data="options"
    v-model="value"
    clearable
    placeholder="\u8BF7\u9009\u62E9"
    :popupProps="popupProps"
    :treeProps="treeProps"
    style="width: 300px"
  />
</template>
<script>
export default {
  data() {
    return {
      value: 'shenzhen',
      options: [
        {
          name: '\u5E7F\u4E1C\u7701',
          pinyin: 'guangdong',
          children: [
            {
              name: '\u5E7F\u5DDE\u5E02',
              pinyin: 'guangzhou',
            },
            {
              name: '\u6DF1\u5733\u5E02',
              pinyin: 'shenzhen',
            },
          ],
        },
        {
          name: '\u6C5F\u82CF\u7701',
          pinyin: 'jiangsu',
          children: [
            {
              name: '\u5357\u4EAC\u5E02',
              pinyin: 'nanjing',
            },
            {
              name: '\u82CF\u5DDE\u5E02',
              pinyin: 'suzhou',
            },
          ],
        },
      ],
      popupProps: {
        overlayInnerStyle: {
          width: '500px',
        },
      },
      treeProps: {
        keys: {
          label: 'name',
          value: 'pinyin',
          children: 'children',
        },
      },
    };
  },
};
<\/script>
`,j=`<template>
  <!-- :keys="treeProps.keys" -->
  <t-tree-select
    :data="options"
    v-model="value"
    clearable
    placeholder="\u8BF7\u9009\u62E9"
    :popupProps="popupProps"
    :treeProps="treeProps"
    style="width: 300px"
  />
</template>
<script setup>
import { ref, reactive } from 'vue';

const value = ref('shenzhen');
const options = ref([
  {
    name: '\u5E7F\u4E1C\u7701',
    pinyin: 'guangdong',
    children: [
      {
        name: '\u5E7F\u5DDE\u5E02',
        pinyin: 'guangzhou',
      },
      {
        name: '\u6DF1\u5733\u5E02',
        pinyin: 'shenzhen',
      },
    ],
  },
  {
    name: '\u6C5F\u82CF\u7701',
    pinyin: 'jiangsu',
    children: [
      {
        name: '\u5357\u4EAC\u5E02',
        pinyin: 'nanjing',
      },
      {
        name: '\u82CF\u5DDE\u5E02',
        pinyin: 'suzhou',
      },
    ],
  },
]);
const popupProps = reactive({
  overlayInnerStyle: {
    width: '500px',
  },
});
const treeProps = reactive({
  keys: {
    label: 'name',
    value: 'pinyin',
    children: 'children',
  },
});
<\/script>
`,S=`<template>
  <t-tree-select
    v-model="value"
    :data="options"
    clearable
    placeholder="\u8BF7\u9009\u62E9"
    :treeProps="{
      load: loadFunc,
    }"
    style="width: 300px"
  />
</template>
<script>
export default {
  data() {
    return {
      value: '',
      options: [
        {
          label: '\u9009\u98791',
          value: '1',
          children: true,
        },
        {
          label: '\u9009\u98792',
          value: '2',
          children: true,
        },
      ],
    };
  },
  methods: {
    loadFunc(node) {
      return new Promise((resolve) => {
        setTimeout(() => {
          let nodes = [];
          if (node.level < 2) {
            nodes = [
              {
                label: \`\${node.label}.1\`,
                value: \`\${node.value}.1\`,
                children: true,
              },
              {
                label: \`\${node.label}.2\`,
                value: \`\${node.value}.2\`,
                children: true,
              },
            ];
          }
          resolve(nodes);
        }, 2000);
      });
    },
  },
};
<\/script>
`,_=`<template>
  <t-tree-select
    v-model="value"
    :data="options"
    clearable
    placeholder="\u8BF7\u9009\u62E9"
    :treeProps="{
      load: loadFunc,
    }"
    style="width: 300px"
  />
</template>
<script setup>
import { ref } from 'vue';

const value = ref('');
const options = ref([
  {
    label: '\u9009\u98791',
    value: '1',
    children: true,
  },
  {
    label: '\u9009\u98792',
    value: '2',
    children: true,
  },
]);
const loadFunc = (node) => new Promise((resolve) => {
  setTimeout(() => {
    let nodes = [];
    if (node.level < 2) {
      nodes = [
        {
          label: \`\${node.label}.1\`,
          value: \`\${node.value}.1\`,
          children: true,
        },
        {
          label: \`\${node.label}.2\`,
          value: \`\${node.value}.2\`,
          children: true,
        },
      ];
    }
    resolve(nodes);
  }, 2000);
});
<\/script>
`,M=`<template>
  <t-space direction="vertical">
    <t-tree-select
      v-model="value"
      style="width: 300px"
      placeholder="\u8BF7\u9009\u62E9"
      :data="options"
      clearable
      multiple
      :min-collapsed-num="minCollapsedNum"
      :collapsed-items="collapsedItems"
      :size="size"
      :disabled="disabled"
      :readonly="readonly"
    >
    </t-tree-select>
  </t-space>
</template>

<script lang="jsx">
export default {
  data() {
    return {
      value: ['guangzhou', 'shenzhen'],
      options: [
        {
          label: '\u5E7F\u4E1C\u7701',
          value: 'guangdong',
          children: [
            {
              label: '\u5E7F\u5DDE\u5E02',
              value: 'guangzhou',
            },
            {
              label: '\u6DF1\u5733\u5E02',
              value: 'shenzhen',
            },
          ],
        },
        {
          label: '\u6C5F\u82CF\u7701',
          value: 'jiangsu',
          children: [
            {
              label: '\u5357\u4EAC\u5E02',
              value: 'nanjing',
            },
            {
              label: '\u82CF\u5DDE\u5E02',
              value: 'suzhou',
            },
          ],
        },
      ],
      size: 'medium',
      disabled: false,
      readonly: false,
      minCollapsedNum: 1,
    };
  },
  methods: {
    collapsedItems(h, { value, onClose }) {
      if (!(value instanceof Array)) return null;
      const count = value.length - this.minCollapsedNum;
      const collapsedTags = value.slice(this.minCollapsedNum, value.length);
      if (count <= 0) return null;
      return (
        <t-popup>
          <div slot="content">
            {collapsedTags.map((item, index) => (
              <t-tag
                key={item}
                style={{ marginRight: '4px' }}
                size={this.size}
                disabled={this.disabled}
                closable={!this.readonly && !this.disabled}
                onClose={(context) => onClose({ e: context.e, index: this.minCollapsedNum + index })}
              >
                {item}
              </t-tag>
            ))}
          </div>
          <t-tag size={this.size} disabled={this.disabled}>
            ({count})
          </t-tag>
        </t-popup>
      );
    },
  },
};
<\/script>
`,k=`<template>
  <t-space direction="vertical">
    <t-tree-select
      v-model="value"
      :data="options"
      multiple
      clearable
      placeholder="\u8BF7\u9009\u62E9"
      :minCollapsedNum="1"
      style="width: 300px"
    >
    </t-tree-select>
    <t-tree-select
      v-model="slotValue"
      style="width: 300px"
      :data="options"
      multiple
      clearable
      placeholder="\u8BF7\u9009\u62E9"
      :minCollapsedNum="1"
    >
      <template slot="collapsedItems">
        <t-tag>\u66F4\u591A...</t-tag>
      </template>
    </t-tree-select>
  </t-space>
</template>
<script setup>
import { ref } from 'vue';

const value = ref(['guangzhou', 'shenzhen']);
const slotValue = ref(['guangzhou', 'shenzhen']);
const options = ref([
  {
    label: '\u5E7F\u4E1C\u7701',
    value: 'guangdong',
    children: [
      {
        label: '\u5E7F\u5DDE\u5E02',
        value: 'guangzhou',
      },
      {
        label: '\u6DF1\u5733\u5E02',
        value: 'shenzhen',
      },
    ],
  },
  {
    label: '\u6C5F\u82CF\u7701',
    value: 'jiangsu',
    children: [
      {
        label: '\u5357\u4EAC\u5E02',
        value: 'nanjing',
      },
      {
        label: '\u82CF\u5DDE\u5E02',
        value: 'suzhou',
      },
    ],
  },
]);
<\/script>
`,D=`<template>
  <t-space direction="vertical">
    <t-tree-select :data="options" v-model="value" clearable placeholder="\u8BF7\u9009\u62E9" style="width: 400px">
      <template #valueDisplay="{ value }" v-if="value"> {{ value.label }}({{ value.value }})</template>
    </t-tree-select>
    <t-tree-select
      :data="options"
      v-model="mulValue"
      multiple
      clearable
      filterable
      style="width: 400px"
      placeholder="\u8BF7\u9009\u62E9"
    >
      <template #valueDisplay="{ value, onClose }">
        <t-tag v-for="(item, index) in value" :key="index" closable :onClose="() => onClose(index)">
          {{ item.label }}({{ item.value }})
        </t-tag>
      </template>
    </t-tree-select>
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      value: 'shenzhen',
      mulValue: ['shenzhen', 'guangzhou'],
      options: [
        {
          label: '\u5E7F\u4E1C\u7701',
          value: 'guangdong',
          children: [
            {
              label: '\u5E7F\u5DDE\u5E02',
              value: 'guangzhou',
            },
            {
              label: '\u6DF1\u5733\u5E02',
              value: 'shenzhen',
            },
          ],
        },
        {
          label: '\u6C5F\u82CF\u7701',
          value: 'jiangsu',
          children: [
            {
              label: '\u5357\u4EAC\u5E02',
              value: 'nanjing',
            },
            {
              label: '\u82CF\u5DDE\u5E02',
              value: 'suzhou',
            },
          ],
        },
      ],
    };
  },
};
<\/script>
`,$=`<template>
  <t-space direction="vertical">
    <t-tree-select :data="options" v-model="value" clearable placeholder="\u8BF7\u9009\u62E9" style="width: 400px">
      <template #valueDisplay="{ value }" v-if="value"> {{ value.label }}({{ value.value }})</template>
    </t-tree-select>
    <t-tree-select
      :data="options"
      v-model="mulValue"
      multiple
      clearable
      filterable
      style="width: 400px"
      placeholder="\u8BF7\u9009\u62E9"
    >
      <template #valueDisplay="{ value, onClose }">
        <t-tag v-for="(item, index) in value" :key="index" closable :onClose="() => onClose(index)">
          {{ item.label }}({{ item.value }})
        </t-tag>
      </template>
    </t-tree-select>
  </t-space>
</template>
<script setup>
import { ref } from 'vue';

const value = ref('shenzhen');
const mulValue = ref(['shenzhen', 'guangzhou']);
const options = ref([
  {
    label: '\u5E7F\u4E1C\u7701',
    value: 'guangdong',
    children: [
      {
        label: '\u5E7F\u5DDE\u5E02',
        value: 'guangzhou',
      },
      {
        label: '\u6DF1\u5733\u5E02',
        value: 'shenzhen',
      },
    ],
  },
  {
    label: '\u6C5F\u82CF\u7701',
    value: 'jiangsu',
    children: [
      {
        label: '\u5357\u4EAC\u5E02',
        value: 'nanjing',
      },
      {
        label: '\u82CF\u5DDE\u5E02',
        value: 'suzhou',
      },
    ],
  },
]);
<\/script>
`,m=[{name:"autoWidth",type:"Boolean",defaultValue:!1,options:[]},{name:"borderless",type:"Boolean",defaultValue:!1,options:[]},{name:"clearable",type:"Boolean",defaultValue:!1,options:[]},{name:"disabled",type:"Boolean",defaultValue:!1,options:[]},{name:"filterable",type:"Boolean",defaultValue:!1,options:[]},{name:"loading",type:"Boolean",defaultValue:!1,options:[]},{name:"multiple",type:"Boolean",defaultValue:!1,options:[]},{name:"readonly",type:"Boolean",defaultValue:!1,options:[]},{name:"size",type:"enum",defaultValue:"medium",options:[{label:"small",value:"small"},{label:"medium",value:"medium"},{label:"large",value:"large"}]},{name:"valueType",type:"enum",defaultValue:"value",options:[{label:"value",value:"value"},{label:"object",value:"object"}]}];const s={};s.setup=(e,n)=>{const l=i(m),a=[{label:"treeSelect",value:"treeSelect"}],t={treeSelect:`
        <t-tree-select v-bind="configProps"
          :data="[{
              label: '\u5E7F\u4E1C\u7701',
              value: 'guangdong',
              children: [{
                label: '\u5E7F\u5DDE\u5E02',
                value: 'guangzhou',
              }, {
                label: '\u6DF1\u5733\u5E02',
                value: 'shenzhen',
              }],
            }, {
              label: '\u6C5F\u82CF\u7701',
              value: 'jiangsu',
              children: [{
                label: '\u5357\u4EAC\u5E02',
                value: 'nanjing',
              }, {
                label: '\u82CF\u5DDE\u5E02',
                value: 'suzhou',
              }],
            }]"
        placeholder="\u8BF7\u9009\u62E9"
        />
      `},o=i(`<template>${t[a[0].value].trim()}</template>`);function d(c){o.value=`<template>${t[c].trim()}</template>`}return{configList:l,panelList:a,usageCode:o,onPanelChange:d}};var u=function(){var e=this,n=e.$createElement,l=e._self._c||n;return l("base-usage",{attrs:{code:e.usageCode,"config-list":e.configList,"panel-list":e.panelList},on:{PanelChange:e.onPanelChange},scopedSlots:e._u([{key:"treeSelect",fn:function(a){var t=a.configProps;return[l("t-tree-select",e._b({attrs:{data:[{label:"\u5E7F\u4E1C\u7701",value:"guangdong",children:[{label:"\u5E7F\u5DDE\u5E02",value:"guangzhou"},{label:"\u6DF1\u5733\u5E02",value:"shenzhen"}]},{label:"\u6C5F\u82CF\u7701",value:"jiangsu",children:[{label:"\u5357\u4EAC\u5E02",value:"nanjing"},{label:"\u82CF\u5DDE\u5E02",value:"suzhou"}]}],placeholder:"\u8BF7\u9009\u62E9"}},"t-tree-select",t,!1))]}}])})},h=[];u._withStripped=!0;const r={};var p=v(s,u,h,!1,g,null,null,null);function g(e){for(let n in r)this[n]=r[n]}p.options.__file="../src/tree-select/_usage/index.vue";var L=function(){return p.exports}();export{f as D,L as U,y as a,x as b,z as c,C as d,P as e,V as f,w as g,T as h,j as i,S as j,_ as k,M as l,k as m,D as n,$ as o};
