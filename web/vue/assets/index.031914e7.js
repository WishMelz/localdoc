import{Y as l,n as p}from"./index.663c003f.js";var h=`<template>
  <!--  scrollToFirstError="smooth" -->
  <t-form :data="formData" :rules="rules" ref="form" @reset="onReset" @submit="onSubmit">
    <t-form-item label="\u7528\u6237\u540D" help="\u8FD9\u91CC\u53EF\u4EE5\u5C55\u793A\u4E00\u6BB5\u8BF4\u660E\u6587\u5B57" name="account">
      <t-input v-model="formData.account" placeholder="\u8BF7\u8F93\u5165\u7528\u6237\u540D"></t-input>
    </t-form-item>
    <t-form-item label="\u5E74\u9F84" name="age">
      <t-input-number v-model="formData.age" placeholder="\u5E74\u9F84" />
    </t-form-item>
    <t-form-item label="\u7C4D\u8D2F" name="region">
      <t-cascader v-model="formData.region" placeholder="\u8BF7\u9009\u62E9\u7C4D\u8D2F" :options="regionOptions" clearable filterable />
    </t-form-item>
    <t-form-item label="\u5BC6\u7801" name="password">
      <t-input type="password" v-model="formData.password" placeholder="\u8BF7\u8F93\u5165\u5BC6\u7801"></t-input>
    </t-form-item>
    <t-form-item label="\u90AE\u7BB1" name="email">
      <t-input v-model="formData.email" placeholder="\u8BF7\u8F93\u5165\u90AE\u7BB1"></t-input>
    </t-form-item>
    <t-form-item label="\u6027\u522B" name="gender">
      <t-radio-group v-model="formData.gender">
        <t-radio value="male">\u7537</t-radio>
        <t-radio value="female">\u5973</t-radio>
      </t-radio-group>
    </t-form-item>
    <t-form-item label="\u8BFE\u7A0B" name="course">
      <t-checkbox-group v-model="formData.course" :options="courseOptions"></t-checkbox-group>
    </t-form-item>
    <t-form-item label="\u5B66\u9662" name="college">
      <t-select v-model="formData.college" class="demo-select-base" clearable filterable placeholder="\u8BF7\u9009\u62E9\u6240\u5728\u5B66\u9662">
        <t-option v-for="(item, index) in options" :value="item.value" :label="item.label" :key="index">
          {{ item.label }}
        </t-option>
      </t-select>
    </t-form-item>
    <t-form-item
      label="\u5165\u5B66\u65F6\u95F4"
      name="date"
      :rules="[
        { required: true, message: '\u6B64\u9879\u5FC5\u586B' },
        { date: { delimiters: ['/', '-', '.'] }, message: '\u65E5\u671F\u683C\u5F0F\u6709\u8BEF' },
      ]"
    >
      <t-date-picker v-model="formData.date"></t-date-picker>
    </t-form-item>
    <t-form-item label="\u4E2A\u4EBA\u7F51\u7AD9" name="content.url">
      <t-input v-model="formData.content.url" placeholder="\u8BF7\u8F93\u5165\u4E2A\u4EBA\u7F51\u7AD9\u5730\u5740"></t-input>
    </t-form-item>
    <t-form-item label="\u4E2A\u4EBA\u7B80\u4ECB" help="\u8BF7\u7528\u4E00\u53E5\u8BDD\u4ECB\u7ECD\u81EA\u5DF1" name="description">
      <t-textarea v-model="formData.description" placeholder="\u8BF7\u7528\u4E00\u53E5\u8BDD\u4ECB\u7ECD\u81EA\u5DF1"></t-textarea>
    </t-form-item>
    <t-form-item label="\u5174\u8DA3\u7231\u597D" name="hobby">
      <t-tree-select
        v-model="formData.hobby"
        filterable
        :data="hobbyOptions"
        placeholder="\u8BF7\u9009\u62E9\u4F60\u7684\u5174\u8DA3\u7231\u597D"
      ></t-tree-select>
    </t-form-item>

    <t-form-item style="margin-left: 100px">
      <t-space size="10px">
        <t-button theme="primary" type="submit">\u63D0\u4EA4</t-button>
        <t-button theme="default" variant="base" type="reset">\u91CD\u7F6E</t-button>
        <t-button theme="default" variant="base" @click="handleClear">\u6E05\u7A7A\u6821\u9A8C\u7ED3\u679C</t-button>
      </t-space>
    </t-form-item>
  </t-form>
</template>
<script>
const INITIAL_DATA = {
  account: '',
  password: '',
  // description: '',
  age: undefined,
  region: '',
  email: '',
  gender: '',
  college: '',
  date: '',
  content: {
    url: '',
  },
  hobby: [],
  course: [],
};
export default {
  data() {
    return {
      formData: { ...INITIAL_DATA },
      hobbyOptions: [
        {
          label: '\u8FD0\u52A8',
          value: 'sports',
          children: [
            {
              label: '\u8DB3\u7403',
              value: 'soccer',
            },
            {
              label: '\u7BEE\u7403',
              value: 'basketball',
            },
          ],
        },
        {
          label: '\u5A31\u4E50',
          value: 'entertainment',
          children: [
            {
              label: '\u7535\u5F71',
              value: 'movie',
            },
            {
              label: '\u65C5\u6E38',
              value: 'trip',
            },
          ],
        },
      ],
      regionOptions: [
        {
          label: '\u5E7F\u4E1C',
          value: '1',
          children: [
            {
              label: '\u6DF1\u5733',
              value: '1.1',
            },
            {
              label: '\u5E7F\u5DDE',
              value: '1.2',
            },
          ],
        },
        {
          label: '\u6E56\u5357',
          value: '2',
          children: [
            {
              label: '\u957F\u6C99',
              value: '2.1',
            },
          ],
        },
      ],
      courseOptions: [
        { label: '\u8BED\u6587', value: '1' },
        { label: '\u6570\u5B66', value: '2' },
        { label: '\u82F1\u8BED', value: '3' },
        { label: '\u4F53\u80B2', value: '4' },
      ],
      options: [
        { label: '\u8BA1\u7B97\u673A\u5B66\u9662', value: '1' },
        { label: '\u8F6F\u4EF6\u5B66\u9662', value: '2' },
        { label: '\u7269\u8054\u7F51\u5B66\u9662', value: '3' },
      ],
      // FormItem.rules \u4F18\u5148\u7EA7\u5927\u4E8E Form.rules
      rules: {
        account: [
          {
            required: true,
            message: '\u59D3\u540D\u5FC5\u586B',
            type: 'error',
            trigger: 'blur',
          },
          // trigger \u9ED8\u8BA4\u4E3A 'change'
          { required: true, message: '\u59D3\u540D\u5FC5\u586B', type: 'error' },
          { whitespace: true, message: '\u59D3\u540D\u4E0D\u80FD\u4E3A\u7A7A' },
          {
            min: 2,
            message: '\u81F3\u5C11\u9700\u8981\u4E24\u4E2A\u5B57\u7B26\uFF0C\u4E00\u4E2A\u4E2D\u6587\u7B49\u4E8E\u4E24\u4E2A\u5B57\u7B26',
            type: 'warning',
            trigger: 'blur',
          },
          {
            max: 10,
            message: '\u59D3\u540D\u5B57\u7B26\u957F\u5EA6\u8D85\u51FA',
            type: 'warning',
            trigger: 'blur',
          },
        ],
        description: [
          {
            validator: (val) => val.length >= 5,
            message: '\u81F3\u5C11 5 \u4E2A\u5B57\uFF0C\u4E2D\u6587\u957F\u5EA6\u7B49\u4E8E\u82F1\u6587\u957F\u5EA6',
            type: 'warning',
          },
          {
            validator: (val) => val.length < 20,
            message: '\u4E0D\u80FD\u8D85\u8FC7 20 \u4E2A\u5B57\uFF0C\u4E2D\u6587\u957F\u5EA6\u7B49\u4E8E\u82F1\u6587\u957F\u5EA6',
            type: 'warning',
          },
        ],
        age: [{ required: true, message: '\u5E74\u9F84\u5FC5\u586B', type: 'error' }],
        region: [{ required: true, message: '\u7C4D\u8D2F\u5FC5\u586B', type: 'error' }],

        password: [
          { required: true, message: '\u5BC6\u7801\u5FC5\u586B', type: 'error' },
          { len: 8, message: '\u8BF7\u8F93\u5165 8 \u4F4D\u5BC6\u7801', type: 'warning' },
          { pattern: /[A-Z]+/, message: '\u5BC6\u7801\u5FC5\u987B\u5305\u542B\u5927\u5199\u5B57\u6BCD', type: 'warning' },
        ],
        college: [{ required: true, message: '\u6B64\u9879\u5FC5\u586B' }],
        email: [
          { required: true, message: '\u90AE\u7BB1\u5FC5\u586B' },
          { email: { ignore_max_length: true }, message: '\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u90AE\u7BB1\u5730\u5740' },
        ],
        gender: [{ required: true, message: '\u6027\u522B\u5FC5\u586B' }],
        course: [
          { required: true, message: '\u8BFE\u7A0B\u5FC5\u586B' },
          { validator: (val) => val.length <= 2, message: '\u6700\u591A\u9009\u62E9 2 \u95E8\u8BFE\u7A0B', type: 'warning' },
        ],
        hobby: [{ required: true, message: '\u7231\u597D\u5FC5\u586B', type: 'error' }],
        'content.url': [
          { required: true, message: '\u4E2A\u4EBA\u7F51\u7AD9\u5FC5\u586B' },
          {
            url: {
              protocols: ['http', 'https', 'ftp'],
              require_protocol: true,
            },
            message: '\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u4E2A\u4EBA\u4E3B\u9875',
          },
        ],
      },
    };
  },

  methods: {
    onReset() {
      this.$message.success('\u91CD\u7F6E\u6210\u529F');
      console.log('formData', this.formData);
    },
    onSubmit({ validateResult, firstError }) {
      if (validateResult === true) {
        this.$message.success('\u63D0\u4EA4\u6210\u529F');
      } else {
        console.log('Errors: ', validateResult);
        this.$message.warning(firstError);
      }
    },
    handleClear() {
      this.$refs.form.clearValidate();
    },
  },
};
<\/script>

<style scoped>
.demo-select-base {
  width: 300px;
}
</style>
`,D=`<template>
  <!--  scrollToFirstError="smooth" -->
  <t-form :data="formData" :rules="rules" ref="form" @reset="onReset" @submit="onSubmit">
    <t-form-item label="\u7528\u6237\u540D" help="\u8FD9\u91CC\u53EF\u4EE5\u5C55\u793A\u4E00\u6BB5\u8BF4\u660E\u6587\u5B57" name="account">
      <t-input v-model="formData.account" placeholder="\u8BF7\u8F93\u5165\u7528\u6237\u540D"></t-input>
    </t-form-item>
    <t-form-item label="\u5E74\u9F84" name="age">
      <t-input-number v-model="formData.age" placeholder="\u5E74\u9F84" />
    </t-form-item>
    <t-form-item label="\u7C4D\u8D2F" name="region">
      <t-cascader v-model="formData.region" placeholder="\u8BF7\u9009\u62E9\u7C4D\u8D2F" :options="regionOptions" clearable filterable />
    </t-form-item>
    <t-form-item label="\u5BC6\u7801" name="password">
      <t-input type="password" v-model="formData.password" placeholder="\u8BF7\u8F93\u5165\u5BC6\u7801"></t-input>
    </t-form-item>
    <t-form-item label="\u90AE\u7BB1" name="email">
      <t-input v-model="formData.email" placeholder="\u8BF7\u8F93\u5165\u90AE\u7BB1"></t-input>
    </t-form-item>
    <t-form-item label="\u6027\u522B" name="gender">
      <t-radio-group v-model="formData.gender">
        <t-radio value="male">\u7537</t-radio>
        <t-radio value="female">\u5973</t-radio>
      </t-radio-group>
    </t-form-item>
    <t-form-item label="\u8BFE\u7A0B" name="course">
      <t-checkbox-group v-model="formData.course" :options="courseOptions"></t-checkbox-group>
    </t-form-item>
    <t-form-item label="\u5B66\u9662" name="college">
      <t-select v-model="formData.college" class="demo-select-base" clearable filterable placeholder="\u8BF7\u9009\u62E9\u6240\u5728\u5B66\u9662">
        <t-option v-for="(item, index) in options" :value="item.value" :label="item.label" :key="index">
          {{ item.label }}
        </t-option>
      </t-select>
    </t-form-item>
    <t-form-item
      label="\u5165\u5B66\u65F6\u95F4"
      name="date"
      :rules="[
        { required: true, message: '\u6B64\u9879\u5FC5\u586B' },
        { date: { delimiters: ['/', '-', '.'] }, message: '\u65E5\u671F\u683C\u5F0F\u6709\u8BEF' },
      ]"
    >
      <t-date-picker v-model="formData.date"></t-date-picker>
    </t-form-item>
    <t-form-item label="\u4E2A\u4EBA\u7F51\u7AD9" name="content.url">
      <t-input v-model="formData.content.url" placeholder="\u8BF7\u8F93\u5165\u4E2A\u4EBA\u7F51\u7AD9\u5730\u5740"></t-input>
    </t-form-item>
    <t-form-item label="\u4E2A\u4EBA\u7B80\u4ECB" help="\u8BF7\u7528\u4E00\u53E5\u8BDD\u4ECB\u7ECD\u81EA\u5DF1" name="description">
      <t-textarea v-model="formData.description" placeholder="\u8BF7\u7528\u4E00\u53E5\u8BDD\u4ECB\u7ECD\u81EA\u5DF1"></t-textarea>
    </t-form-item>
    <t-form-item label="\u5174\u8DA3\u7231\u597D" name="hobby">
      <t-tree-select
        v-model="formData.hobby"
        filterable
        :data="hobbyOptions"
        placeholder="\u8BF7\u9009\u62E9\u4F60\u7684\u5174\u8DA3\u7231\u597D"
      ></t-tree-select>
    </t-form-item>

    <t-form-item style="margin-left: 100px">
      <t-space size="10px">
        <t-button theme="primary" type="submit">\u63D0\u4EA4</t-button>
        <t-button theme="default" variant="base" type="reset">\u91CD\u7F6E</t-button>
        <t-button theme="default" variant="base" @click="handleClear">\u6E05\u7A7A\u6821\u9A8C\u7ED3\u679C</t-button>
      </t-space>
    </t-form-item>
  </t-form>
</template>
<script setup>
import { MessagePlugin } from 'tdesign-vue';
import { ref, reactive } from 'vue';

const INITIAL_DATA = {
  account: '',
  password: '',
  // description: '',
  age: undefined,
  region: '',
  email: '',
  gender: '',
  college: '',
  date: '',
  content: {
    url: '',
  },
  hobby: [],
  course: [],
};
const form = ref();
const formData = reactive({
  ...INITIAL_DATA,
});
const hobbyOptions = ref([
  {
    label: '\u8FD0\u52A8',
    value: 'sports',
    children: [
      {
        label: '\u8DB3\u7403',
        value: 'soccer',
      },
      {
        label: '\u7BEE\u7403',
        value: 'basketball',
      },
    ],
  },
  {
    label: '\u5A31\u4E50',
    value: 'entertainment',
    children: [
      {
        label: '\u7535\u5F71',
        value: 'movie',
      },
      {
        label: '\u65C5\u6E38',
        value: 'trip',
      },
    ],
  },
]);
const regionOptions = ref([
  {
    label: '\u5E7F\u4E1C',
    value: '1',
    children: [
      {
        label: '\u6DF1\u5733',
        value: '1.1',
      },
      {
        label: '\u5E7F\u5DDE',
        value: '1.2',
      },
    ],
  },
  {
    label: '\u6E56\u5357',
    value: '2',
    children: [
      {
        label: '\u957F\u6C99',
        value: '2.1',
      },
    ],
  },
]);
const courseOptions = ref([
  {
    label: '\u8BED\u6587',
    value: '1',
  },
  {
    label: '\u6570\u5B66',
    value: '2',
  },
  {
    label: '\u82F1\u8BED',
    value: '3',
  },
  {
    label: '\u4F53\u80B2',
    value: '4',
  },
]);
const options = ref([
  {
    label: '\u8BA1\u7B97\u673A\u5B66\u9662',
    value: '1',
  },
  {
    label: '\u8F6F\u4EF6\u5B66\u9662',
    value: '2',
  },
  {
    label: '\u7269\u8054\u7F51\u5B66\u9662',
    value: '3',
  },
]);
// FormItem.rules \u4F18\u5148\u7EA7\u5927\u4E8E Form.rules
const rules = reactive({
  account: [
    {
      required: true,
      message: '\u59D3\u540D\u5FC5\u586B',
      type: 'error',
      trigger: 'blur',
    },
    // trigger \u9ED8\u8BA4\u4E3A 'change'
    {
      required: true,
      message: '\u59D3\u540D\u5FC5\u586B',
      type: 'error',
    },
    {
      whitespace: true,
      message: '\u59D3\u540D\u4E0D\u80FD\u4E3A\u7A7A',
    },
    {
      min: 2,
      message: '\u81F3\u5C11\u9700\u8981\u4E24\u4E2A\u5B57\u7B26\uFF0C\u4E00\u4E2A\u4E2D\u6587\u7B49\u4E8E\u4E24\u4E2A\u5B57\u7B26',
      type: 'warning',
      trigger: 'blur',
    },
    {
      max: 10,
      message: '\u59D3\u540D\u5B57\u7B26\u957F\u5EA6\u8D85\u51FA',
      type: 'warning',
      trigger: 'blur',
    },
  ],
  description: [
    {
      validator: (val) => val.length >= 5,
      message: '\u81F3\u5C11 5 \u4E2A\u5B57\uFF0C\u4E2D\u6587\u957F\u5EA6\u7B49\u4E8E\u82F1\u6587\u957F\u5EA6',
      type: 'warning',
    },
    {
      validator: (val) => val.length < 20,
      message: '\u4E0D\u80FD\u8D85\u8FC7 20 \u4E2A\u5B57\uFF0C\u4E2D\u6587\u957F\u5EA6\u7B49\u4E8E\u82F1\u6587\u957F\u5EA6',
      type: 'warning',
    },
  ],
  age: [
    {
      required: true,
      message: '\u5E74\u9F84\u5FC5\u586B',
      type: 'error',
    },
  ],
  region: [
    {
      required: true,
      message: '\u7C4D\u8D2F\u5FC5\u586B',
      type: 'error',
    },
  ],
  password: [
    {
      required: true,
      message: '\u5BC6\u7801\u5FC5\u586B',
      type: 'error',
    },
    {
      len: 8,
      message: '\u8BF7\u8F93\u5165 8 \u4F4D\u5BC6\u7801',
      type: 'warning',
    },
    {
      pattern: /[A-Z]+/,
      message: '\u5BC6\u7801\u5FC5\u987B\u5305\u542B\u5927\u5199\u5B57\u6BCD',
      type: 'warning',
    },
  ],
  college: [
    {
      required: true,
      message: '\u6B64\u9879\u5FC5\u586B',
    },
  ],
  email: [
    {
      required: true,
      message: '\u90AE\u7BB1\u5FC5\u586B',
    },
    {
      email: {
        ignore_max_length: true,
      },
      message: '\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u90AE\u7BB1\u5730\u5740',
    },
  ],
  gender: [
    {
      required: true,
      message: '\u6027\u522B\u5FC5\u586B',
    },
  ],
  course: [
    {
      required: true,
      message: '\u8BFE\u7A0B\u5FC5\u586B',
    },
    {
      validator: (val) => val.length <= 2,
      message: '\u6700\u591A\u9009\u62E9 2 \u95E8\u8BFE\u7A0B',
      type: 'warning',
    },
  ],
  hobby: [
    {
      required: true,
      message: '\u7231\u597D\u5FC5\u586B',
      type: 'error',
    },
  ],
  'content.url': [
    {
      required: true,
      message: '\u4E2A\u4EBA\u7F51\u7AD9\u5FC5\u586B',
    },
    {
      url: {
        protocols: ['http', 'https', 'ftp'],
        require_protocol: true,
      },
      message: '\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u4E2A\u4EBA\u4E3B\u9875',
    },
  ],
});
const onReset = () => {
  MessagePlugin.success('\u91CD\u7F6E\u6210\u529F');
  console.log('formData', formData);
};
const onSubmit = ({ validateResult, firstError }) => {
  if (validateResult === true) {
    MessagePlugin.success('\u63D0\u4EA4\u6210\u529F');
  } else {
    console.log('Errors: ', validateResult);
    MessagePlugin.warning(firstError);
  }
};
const handleClear = () => {
  form.value.clearValidate();
};
<\/script>

<style scoped>
.demo-select-base {
  width: 300px;
}
</style>
`,y=`<template>
  <t-space style="width: 350px">
    <t-form :data="formData" ref="form" @reset="onReset" @submit="onSubmit" :colon="true" :labelWidth="0">
      <t-form-item name="account">
        <t-input clearable v-model="formData.account" placeholder="\u8BF7\u8F93\u5165\u8D26\u6237\u540D">
          <desktop-icon slot="prefix-icon"></desktop-icon>
        </t-input>
      </t-form-item>
      <t-form-item name="password">
        <t-input type="password" clearable v-model="formData.password" placeholder="\u8BF7\u8F93\u5165\u5BC6\u7801">
          <lock-on-icon slot="prefix-icon"></lock-on-icon>
        </t-input>
      </t-form-item>
      <t-form-item>
        <t-button theme="primary" type="submit" block>\u767B\u5F55</t-button>
      </t-form-item>
    </t-form>
  </t-space>
</template>
<script>
import { DesktopIcon, LockOnIcon } from 'tdesign-icons-vue';

const INITIAL_DATA = {
  account: '',
  password: '',
};

export default {
  components: {
    DesktopIcon,
    LockOnIcon,
  },
  data() {
    return {
      formData: { ...INITIAL_DATA },
    };
  },

  methods: {
    onReset() {
      this.$message.success('\u91CD\u7F6E\u6210\u529F');
    },
    onSubmit({ validateResult, firstError }) {
      if (validateResult === true) {
        this.$message.success('\u63D0\u4EA4\u6210\u529F');
      } else {
        console.log('Errors: ', validateResult);
        this.$message.warning(firstError);
      }
    },
  },
};
<\/script>
`,I=`<template>
  <t-space style="width: 350px">
    <t-form :data="formData" ref="form" @reset="onReset" @submit="onSubmit" :colon="true" :labelWidth="0">
      <t-form-item name="account">
        <t-input clearable v-model="formData.account" placeholder="\u8BF7\u8F93\u5165\u8D26\u6237\u540D">
          <desktop-icon slot="prefix-icon"></desktop-icon>
        </t-input>
      </t-form-item>
      <t-form-item name="password">
        <t-input type="password" clearable v-model="formData.password" placeholder="\u8BF7\u8F93\u5165\u5BC6\u7801">
          <lock-on-icon slot="prefix-icon"></lock-on-icon>
        </t-input>
      </t-form-item>
      <t-form-item>
        <t-button theme="primary" type="submit" block>\u767B\u5F55</t-button>
      </t-form-item>
    </t-form>
  </t-space>
</template>
<script setup>
import { MessagePlugin } from 'tdesign-vue';
import { reactive } from 'vue';
import { DesktopIcon, LockOnIcon } from 'tdesign-icons-vue';

const INITIAL_DATA = {
  account: '',
  password: '',
};
const formData = reactive({
  ...INITIAL_DATA,
});
const onReset = () => {
  MessagePlugin.success('\u91CD\u7F6E\u6210\u529F');
};
const onSubmit = ({ validateResult, firstError }) => {
  if (validateResult === true) {
    MessagePlugin.success('\u63D0\u4EA4\u6210\u529F');
  } else {
    console.log('Errors: ', validateResult);
    MessagePlugin.warning(firstError);
  }
};
<\/script>
`,x=`<template>
  <t-space direction="vertical" size="32px">
    <t-radio-group v-model="formData.labelAlign" variant="default-filled">
      <t-radio-button value="left">\u5DE6\u5BF9\u9F50</t-radio-button>
      <t-radio-button value="right">\u53F3\u5BF9\u9F50</t-radio-button>
      <t-radio-button value="top">\u9876\u90E8\u5BF9\u9F50</t-radio-button>
    </t-radio-group>

    <t-form :data="formData" :labelAlign="formData.labelAlign" :labelWidth="100">
      <t-form-item name="name">
        <template #label>\u59D3\u540D</template>
        <t-input v-model="formData.name" placeholder="\u8BF7\u8F93\u5165\u59D3\u540D"></t-input>
      </t-form-item>
      <t-form-item label="\u521D\u59CB\u5BC6\u7801" name="password">
        <t-input v-model="formData.password" type="password" placeholder="\u8BF7\u8F93\u5165\u521D\u59CB\u5BC6\u7801"></t-input>
      </t-form-item>
    </t-form>
  </t-space>
</template>
<script>
const INITIAL_DATA = {
  labelAlign: 'right',
  name: '',
  password: '',
};
export default {
  data() {
    return {
      formData: { ...INITIAL_DATA },
    };
  },
};
<\/script>
`,w=`<template>
  <t-space direction="vertical" size="32px">
    <t-radio-group v-model="formData.labelAlign" variant="default-filled">
      <t-radio-button value="left">\u5DE6\u5BF9\u9F50</t-radio-button>
      <t-radio-button value="right">\u53F3\u5BF9\u9F50</t-radio-button>
      <t-radio-button value="top">\u9876\u90E8\u5BF9\u9F50</t-radio-button>
    </t-radio-group>

    <t-form :data="formData" :labelAlign="formData.labelAlign" :labelWidth="100">
      <t-form-item name="name">
        <template #label>\u59D3\u540D</template>
        <t-input v-model="formData.name" placeholder="\u8BF7\u8F93\u5165\u59D3\u540D"></t-input>
      </t-form-item>
      <t-form-item label="\u521D\u59CB\u5BC6\u7801" name="password">
        <t-input v-model="formData.password" type="password" placeholder="\u8BF7\u8F93\u5165\u521D\u59CB\u5BC6\u7801"></t-input>
      </t-form-item>
    </t-form>
  </t-space>
</template>
<script setup>
import { reactive } from 'vue';

const INITIAL_DATA = {
  labelAlign: 'right',
  name: '',
  password: '',
};
const formData = reactive({
  ...INITIAL_DATA,
});
<\/script>
`,T=`<template>
  <t-space direction="vertical" size="32px">
    <t-radio-group v-model="formData.layout" variant="default-filled">
      <t-radio-button value="vertical">\u7EB5\u5411\u5E03\u5C40</t-radio-button>
      <t-radio-button value="inline">\u884C\u5185\u5E03\u5C40</t-radio-button>
    </t-radio-group>

    <t-form
      :data="formData"
      labelWidth="calc(2em + 24px)"
      :layout="formData.layout"
      ref="form"
      @reset="onReset"
      @submit="onSubmit"
      scrollToFirstError="smooth"
    >
      <t-form-item label="\u59D3\u540D" name="name">
        <t-input v-model="formData.name" placeholder="\u8BF7\u8F93\u5165\u59D3\u540D"></t-input>
      </t-form-item>
      <t-form-item label="\u5BC6\u7801" name="password">
        <t-input v-model="formData.password" type="password" placeholder="\u8BF7\u8F93\u5165\u5BC6\u7801"></t-input>
      </t-form-item>
    </t-form>
  </t-space>
</template>
<script>
const INITIAL_DATA = {
  layout: 'inline',
  name: '',
  password: '',
};
export default {
  data() {
    return {
      formData: { ...INITIAL_DATA },
    };
  },
  methods: {
    onReset() {
      this.$message.success('\u91CD\u7F6E\u6210\u529F');
    },
    onSubmit({ validateResult, firstError }) {
      if (validateResult === true) {
        this.$message.success('\u63D0\u4EA4\u6210\u529F');
      } else {
        console.log('Errors: ', validateResult);
        this.$message.warning(firstError);
      }
    },
  },
};
<\/script>
`,A=`<template>
  <t-space direction="vertical" size="32px">
    <t-radio-group v-model="formData.layout" variant="default-filled">
      <t-radio-button value="vertical">\u7EB5\u5411\u5E03\u5C40</t-radio-button>
      <t-radio-button value="inline">\u884C\u5185\u5E03\u5C40</t-radio-button>
    </t-radio-group>

    <t-form
      :data="formData"
      labelWidth="calc(2em + 24px)"
      :layout="formData.layout"
      ref="form"
      @reset="onReset"
      @submit="onSubmit"
      scrollToFirstError="smooth"
    >
      <t-form-item label="\u59D3\u540D" name="name">
        <t-input v-model="formData.name" placeholder="\u8BF7\u8F93\u5165\u59D3\u540D"></t-input>
      </t-form-item>
      <t-form-item label="\u5BC6\u7801" name="password">
        <t-input v-model="formData.password" type="password" placeholder="\u8BF7\u8F93\u5165\u5BC6\u7801"></t-input>
      </t-form-item>
    </t-form>
  </t-space>
</template>
<script setup>
import { MessagePlugin } from 'tdesign-vue';
import { reactive } from 'vue';

const INITIAL_DATA = {
  layout: 'inline',
  name: '',
  password: '',
};
const formData = reactive({
  ...INITIAL_DATA,
});
const onReset = () => {
  MessagePlugin.success('\u91CD\u7F6E\u6210\u529F');
};
const onSubmit = ({ validateResult, firstError }) => {
  if (validateResult === true) {
    MessagePlugin.success('\u63D0\u4EA4\u6210\u529F');
  } else {
    console.log('Errors: ', validateResult);
    MessagePlugin.warning(firstError);
  }
};
<\/script>
`,k=`<template>
  <t-space direction="vertical" size="32px">
    <t-radio-group v-model="resetType" variant="default-filled">
      <t-radio-button value="empty">\u91CD\u7F6E\u4E3A\u7A7A</t-radio-button>
      <t-radio-button value="initial">
        <t-popup content="\u6539\u53D8\u8868\u5355\u6570\u636E\u540E\uFF0C\u70B9\u51FB\u91CD\u7F6E\u6309\u94AE\uFF0C\u89C2\u5BDF\u6570\u636E\u91CD\u7F6E\u60C5\u51B5"> \u91CD\u7F6E\u4E3A\u521D\u59CB\u503C </t-popup>
      </t-radio-button>
    </t-radio-group>

    <!-- colon \u8868\u793A\uFF0C\u662F\u5426\u7EDF\u4E00\u663E\u793A label \u5192\u53F7 -->
    <t-form ref="form" :data="formData" :resetType="resetType" colon @reset="onReset" @submit="onSubmit">
      <t-form-item label="\u59D3\u540D" name="name">
        <t-input v-model="formData.name" placeholder="\u8BF7\u8F93\u5165\u59D3\u540D" @enter="onEnter"></t-input>
      </t-form-item>
      <t-form-item label="\u624B\u673A\u53F7\u7801" name="tel">
        <t-input v-model="formData.tel" placeholder="\u8BF7\u8F93\u5165\u624B\u673A\u53F7\u7801" @enter="onEnter"></t-input>
      </t-form-item>
      <t-form-item label="\u8BFE\u7A0B" name="course">
        <t-checkbox-group v-model="formData.course" :options="courseOptions"></t-checkbox-group>
      </t-form-item>
      <t-form-item style="margin-left: 100px">
        <t-space size="10px">
          <t-button theme="primary" type="submit">\u63D0\u4EA4</t-button>
          <t-button theme="default" variant="base" type="reset">\u91CD\u7F6E</t-button>
          <t-button theme="default" variant="base" @click="resetPhoneNumber">\u53EA\u91CD\u7F6E\u624B\u673A\u53F7\u7801</t-button>
        </t-space>
      </t-form-item>
    </t-form>
  </t-space>
</template>
<script>
// \u8FD9\u662F\u521D\u59CB\u503C\uFF0C\u6570\u636E\u53D8\u5316\u540E\u53EF\u4EE5\u8BBE\u7F6E\u8868\u5355\u91CD\u7F6E\u4E3A\u8FD9\u4E2A\u521D\u59CB\u503C
const INITIAL_DATA = {
  name: 'TDesign',
  tel: '18612345678',
  course: ['1'],
};

export default {
  data() {
    return {
      resetType: 'initial',
      formData: { ...INITIAL_DATA },
      courseOptions: [
        { label: '\u8BED\u6587', value: '1' },
        { label: '\u6570\u5B66', value: '2' },
        { label: '\u82F1\u8BED', value: '3' },
      ],
    };
  },

  methods: {
    onReset() {
      this.$message.success('\u91CD\u7F6E\u6210\u529F');
    },
    onSubmit({ validateResult, firstError }) {
      if (validateResult === true) {
        this.$message.success('\u63D0\u4EA4\u6210\u529F');
      } else {
        console.log('Errors: ', validateResult);
        this.$message.warning(firstError);
      }
    },

    // \u7981\u7528 Input \u7EC4\u4EF6\uFF0C\u6309\u4E0B Enter \u952E\u65F6\uFF0C\u89E6\u53D1 submit \u4E8B\u4EF6
    onEnter(_, { e }) {
      e.preventDefault();
    },

    // \u91CD\u7F6E\u6307\u5B9A\u5B57\u6BB5\uFF1A\u624B\u673A\u53F7\u7801
    resetPhoneNumber() {
      this.$refs.form.reset({ fields: ['tel'] });
    },
  },
};
<\/script>
`,R=`<template>
  <t-space direction="vertical" size="32px">
    <t-radio-group v-model="resetType" variant="default-filled">
      <t-radio-button value="empty">\u91CD\u7F6E\u4E3A\u7A7A</t-radio-button>
      <t-radio-button value="initial">
        <t-popup content="\u6539\u53D8\u8868\u5355\u6570\u636E\u540E\uFF0C\u70B9\u51FB\u91CD\u7F6E\u6309\u94AE\uFF0C\u89C2\u5BDF\u6570\u636E\u91CD\u7F6E\u60C5\u51B5"> \u91CD\u7F6E\u4E3A\u521D\u59CB\u503C </t-popup>
      </t-radio-button>
    </t-radio-group>

    <!-- colon \u8868\u793A\uFF0C\u662F\u5426\u7EDF\u4E00\u663E\u793A label \u5192\u53F7 -->
    <t-form ref="form" :data="formData" :resetType="resetType" colon @reset="onReset" @submit="onSubmit">
      <t-form-item label="\u59D3\u540D" name="name">
        <t-input v-model="formData.name" placeholder="\u8BF7\u8F93\u5165\u59D3\u540D" @enter="onEnter"></t-input>
      </t-form-item>
      <t-form-item label="\u624B\u673A\u53F7\u7801" name="tel">
        <t-input v-model="formData.tel" placeholder="\u8BF7\u8F93\u5165\u624B\u673A\u53F7\u7801" @enter="onEnter"></t-input>
      </t-form-item>
      <t-form-item label="\u8BFE\u7A0B" name="course">
        <t-checkbox-group v-model="formData.course" :options="courseOptions"></t-checkbox-group>
      </t-form-item>
      <t-form-item style="margin-left: 100px">
        <t-space size="10px">
          <t-button theme="primary" type="submit">\u63D0\u4EA4</t-button>
          <t-button theme="default" variant="base" type="reset">\u91CD\u7F6E</t-button>
          <t-button theme="default" variant="base" @click="resetPhoneNumber">\u53EA\u91CD\u7F6E\u624B\u673A\u53F7\u7801</t-button>
        </t-space>
      </t-form-item>
    </t-form>
  </t-space>
</template>
<script setup>
import { MessagePlugin } from 'tdesign-vue';
import { ref, reactive } from 'vue';
// \u8FD9\u662F\u521D\u59CB\u503C\uFF0C\u6570\u636E\u53D8\u5316\u540E\u53EF\u4EE5\u8BBE\u7F6E\u8868\u5355\u91CD\u7F6E\u4E3A\u8FD9\u4E2A\u521D\u59CB\u503C
const INITIAL_DATA = {
  name: 'TDesign',
  tel: '18612345678',
  course: ['1'],
};
const form = ref();
const resetType = ref('initial');
const formData = reactive({
  ...INITIAL_DATA,
});
const courseOptions = ref([
  {
    label: '\u8BED\u6587',
    value: '1',
  },
  {
    label: '\u6570\u5B66',
    value: '2',
  },
  {
    label: '\u82F1\u8BED',
    value: '3',
  },
]);
const onReset = () => {
  MessagePlugin.success('\u91CD\u7F6E\u6210\u529F');
};
const onSubmit = ({ validateResult, firstError }) => {
  if (validateResult === true) {
    MessagePlugin.success('\u63D0\u4EA4\u6210\u529F');
  } else {
    console.log('Errors: ', validateResult);
    MessagePlugin.warning(firstError);
  }
};
// \u7981\u7528 Input \u7EC4\u4EF6\uFF0C\u6309\u4E0B Enter \u952E\u65F6\uFF0C\u89E6\u53D1 submit \u4E8B\u4EF6
const onEnter = (_, { e }) => {
  e.preventDefault();
};
// \u91CD\u7F6E\u6307\u5B9A\u5B57\u6BB5\uFF1A\u624B\u673A\u53F7\u7801
const resetPhoneNumber = () => {
  form.value.reset({
    fields: ['tel'],
  });
};
<\/script>
`,_=`<template>
  <t-space direction="vertical" size="32px" class="tdesign-demo-form-status">
    <!--
      1. statusIcon \u503C\u4E3A true\uFF0C\u663E\u793A\u9ED8\u8BA4\u56FE\u6807\u3002\u9ED8\u8BA4\u56FE\u6807\u6709 \u6210\u529F\u3001\u5931\u8D25\u3001\u8B66\u544A \u7B49\uFF0C\u4E0D\u540C\u7684\u72B6\u6001\u56FE\u6807\u4E0D\u540C
      2. statusIcon \u503C\u4E3A false\uFF0C\u4E0D\u663E\u793A\u56FE\u6807
      3. statusIcon \u503C\u7C7B\u578B\u4E3A function\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49\u53F3\u4FA7\u72B6\u6001\u56FE\u6807
      4. statusIcon \u4E3A slot(\u63D2\u69FD)\uFF0C\u53EF\u81EA\u5B9A\u4E49\u53F3\u4FA7\u72B6\u6001\u56FE\u6807
    -->

    <t-radio-group v-model="formStatusIcon" variant="default-filled">
      <t-radio-button :value="true">\u663E\u793A\u6821\u9A8C\u56FE\u6807</t-radio-button>
      <t-radio-button :value="false">\u9690\u85CF\u6821\u9A8C\u56FE\u6807</t-radio-button>
    </t-radio-group>

    <t-form
      :data="formData"
      :rules="rules"
      :labelWidth="80"
      :statusIcon="formStatusIcon"
      ref="formValidatorStatus"
      @reset="onReset"
      @submit="onSubmit"
    >
      <t-form-item label="\u5931\u8D25" name="fail">
        <t-input v-model="formData.fail" placeholder="\u6821\u9A8C\u4E0D\u901A\u8FC7\u72B6\u6001"></t-input>
      </t-form-item>
      <t-form-item label="\u8B66\u544A" name="warning">
        <t-input v-model="formData.warning" placeholder="\u6821\u9A8C\u8B66\u544A\u72B6\u6001"></t-input>
      </t-form-item>
      <t-form-item label="\u6210\u529F" name="success">
        <t-input v-model="formData.success" placeholder="\u4E0D\u5E26\u7EFF\u8272\u8FB9\u6846\u7684\u6210\u529F\u72B6\u6001"></t-input>
      </t-form-item>
      <t-form-item label="\u6210\u529F" name="success" successBorder>
        <t-input v-model="formData.success" placeholder="\u5E26\u7EFF\u8272\u8FB9\u6846\u7684\u6210\u529F\u72B6\u6001"></t-input>
      </t-form-item>
      <t-form-item label="\u5931\u8D25" name="failB" :statusIcon="false">
        <t-input v-model="formData.failB" placeholder="\u9690\u85CF\u72B6\u6001\u56FE\u6807"></t-input>
      </t-form-item>
      <t-form-item label="\u8B66\u544A" name="warningB">
        <t-input v-model="formData.warningB" placeholder="\u6821\u9A8C\u8B66\u544A\u72B6\u6001"></t-input>
      </t-form-item>
      <t-form-item label="\u52A0\u8F7D\u4E2D" name="loading">
        <t-input v-model="formData.loading" placeholder="\u6B63\u5728\u6821\u9A8C\u4E2D\uFF0C\u8BF7\u7A0D\u7B49"></t-input>
        <template #statusIcon>
          <div style="width: 24px; display: flex; justify-content: center">
            <t-loading slot="statusIcon" size="small"></t-loading>
          </div>
        </template>
      </t-form-item>

      <!-- \u81EA\u5B9A\u4E49\u56FE\u6807\uFF1A\u53EF\u4EE5\u4F7F\u7528\u6E32\u67D3\u51FD\u6570 statusIcon\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u63D2\u69FD statusIcon -->
      <t-form-item label="\u5E2E\u52A9" :statusIcon="getStatusIcon" name="help">
        <t-input v-model="formData.help" placeholder="\u81EA\u5B9A\u4E49\u53F3\u4FA7\u56FE\u6807"></t-input>
        <!-- <t-icon slot="statusIcon" name='help-circle' size="24px" style="color: #0006"/> -->
      </t-form-item>

      <t-form-item v-for="(item, index) in addlist" :key="item.id" label="\u65B0\u589E" :name="item.name">
        <t-input v-model="formData[item.name]"></t-input>
        <t-button
          v-if="item.id === 0 || item.id === lastAddItem - 1"
          @click="addItem"
          slot="statusIcon"
          variant="dashed"
        >
          <icon name="add" />
        </t-button>
        <t-button v-if="item.id > 0" @click="removeItem(item, index)" slot="statusIcon" variant="dashed">
          <icon name="remove" />
        </t-button>
      </t-form-item>

      <t-form-item :statusIcon="false" style="margin-left: 80px">
        <t-space size="10px">
          <t-button theme="primary" type="submit">\u63D0\u4EA4</t-button>
          <t-button theme="default" variant="base" type="reset">\u91CD\u7F6E</t-button>
        </t-space>
      </t-form-item>
    </t-form>
  </t-space>
</template>
<script lang="jsx">
import { Icon } from 'tdesign-icons-vue';

const INITIAL_DATA = {
  fail: '',
  warning: '',
  success: '',
  failB: '',
  warningB: '',
  loading: '',
  add: '',
  help: '',
};

export default {
  components: {
    Icon,
  },
  data() {
    return {
      formStatusIcon: true,
      formData: { ...INITIAL_DATA },
      rules: {
        fail: [{ required: true, message: '\u5FC5\u586B', type: 'error' }],
        warning: [{ required: true, message: '\u5FC5\u586B', type: 'warning' }],
        success: [{ validator: () => true }],
        failB: [{ required: true, message: '\u5FC5\u586B', type: 'error' }],
        warningB: [{ required: true, message: '\u5FC5\u586B', type: 'warning' }],
      },
      addlist: [{ id: 0, name: 'add0' }],
      lastAddItem: 1,
    };
  },
  mounted() {
    this.$refs.formValidatorStatus.validate();
  },
  methods: {
    addItem() {
      const addNum = this.lastAddItem;
      INITIAL_DATA[\`add\${addNum}\`] = '';
      this.addlist.push({ id: addNum, name: \`add\${addNum}\` });
      this.lastAddItem += 1;
    },
    removeItem(item, index) {
      delete INITIAL_DATA[\`add\${item.id}\`];
      this.addlist.splice(index, 1);
    },
    onReset() {
      this.$message.success('\u91CD\u7F6E\u6210\u529F');
    },
    onSubmit({ validateResult, firstError }) {
      if (validateResult === true) {
        this.$message.success('\u63D0\u4EA4\u6210\u529F');
      } else {
        console.log('Errors: ', validateResult);
        this.$message.warning(firstError);
      }
    },
    getStatusIcon() {
      return <Icon name="help-circle" size="16px" style="color: #0006" />;
    },
  },
};
<\/script>

<style>
.tdesign-demo-form-status .t-input {
  width: 520px;
}
</style>
`,E=`<template>
  <t-space direction="vertical" size="32px" class="tdesign-demo-form-status">
    <!--
      1. statusIcon \u503C\u4E3A true\uFF0C\u663E\u793A\u9ED8\u8BA4\u56FE\u6807\u3002\u9ED8\u8BA4\u56FE\u6807\u6709 \u6210\u529F\u3001\u5931\u8D25\u3001\u8B66\u544A \u7B49\uFF0C\u4E0D\u540C\u7684\u72B6\u6001\u56FE\u6807\u4E0D\u540C
      2. statusIcon \u503C\u4E3A false\uFF0C\u4E0D\u663E\u793A\u56FE\u6807
      3. statusIcon \u503C\u7C7B\u578B\u4E3A function\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49\u53F3\u4FA7\u72B6\u6001\u56FE\u6807
      4. statusIcon \u4E3A slot(\u63D2\u69FD)\uFF0C\u53EF\u81EA\u5B9A\u4E49\u53F3\u4FA7\u72B6\u6001\u56FE\u6807
    -->

    <t-radio-group v-model="formStatusIcon" variant="default-filled">
      <t-radio-button :value="true">\u663E\u793A\u6821\u9A8C\u56FE\u6807</t-radio-button>
      <t-radio-button :value="false">\u9690\u85CF\u6821\u9A8C\u56FE\u6807</t-radio-button>
    </t-radio-group>

    <t-form
      :data="formData"
      :rules="rules"
      :labelWidth="80"
      :statusIcon="formStatusIcon"
      ref="formValidatorStatus"
      @reset="onReset"
      @submit="onSubmit"
    >
      <t-form-item label="\u5931\u8D25" name="fail">
        <t-input v-model="formData.fail" placeholder="\u6821\u9A8C\u4E0D\u901A\u8FC7\u72B6\u6001"></t-input>
      </t-form-item>
      <t-form-item label="\u8B66\u544A" name="warning">
        <t-input v-model="formData.warning" placeholder="\u6821\u9A8C\u8B66\u544A\u72B6\u6001"></t-input>
      </t-form-item>
      <t-form-item label="\u6210\u529F" name="success">
        <t-input v-model="formData.success" placeholder="\u4E0D\u5E26\u7EFF\u8272\u8FB9\u6846\u7684\u6210\u529F\u72B6\u6001"></t-input>
      </t-form-item>
      <t-form-item label="\u6210\u529F" name="success" successBorder>
        <t-input v-model="formData.success" placeholder="\u5E26\u7EFF\u8272\u8FB9\u6846\u7684\u6210\u529F\u72B6\u6001"></t-input>
      </t-form-item>
      <t-form-item label="\u5931\u8D25" name="failB" :statusIcon="false">
        <t-input v-model="formData.failB" placeholder="\u9690\u85CF\u72B6\u6001\u56FE\u6807"></t-input>
      </t-form-item>
      <t-form-item label="\u8B66\u544A" name="warningB">
        <t-input v-model="formData.warningB" placeholder="\u6821\u9A8C\u8B66\u544A\u72B6\u6001"></t-input>
      </t-form-item>
      <t-form-item label="\u52A0\u8F7D\u4E2D" name="loading">
        <t-input v-model="formData.loading" placeholder="\u6B63\u5728\u6821\u9A8C\u4E2D\uFF0C\u8BF7\u7A0D\u7B49"></t-input>
        <template #statusIcon>
          <div style="width: 24px; display: flex; justify-content: center">
            <t-loading slot="statusIcon" size="small"></t-loading>
          </div>
        </template>
      </t-form-item>

      <!-- \u81EA\u5B9A\u4E49\u56FE\u6807\uFF1A\u53EF\u4EE5\u4F7F\u7528\u6E32\u67D3\u51FD\u6570 statusIcon\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u63D2\u69FD statusIcon -->
      <t-form-item label="\u5E2E\u52A9" :statusIcon="getStatusIcon" name="help">
        <t-input v-model="formData.help" placeholder="\u81EA\u5B9A\u4E49\u53F3\u4FA7\u56FE\u6807"></t-input>
        <!-- <t-icon slot="statusIcon" name='help-circle' size="24px" style="color: #0006"/> -->
      </t-form-item>

      <t-form-item v-for="(item, index) in addlist" :key="item.id" label="\u65B0\u589E" :name="item.name">
        <t-input v-model="formData[item.name]"></t-input>
        <t-button
          v-if="item.id === 0 || item.id === lastAddItem - 1"
          @click="addItem"
          slot="statusIcon"
          variant="dashed"
        >
          <icon name="add" />
        </t-button>
        <t-button v-if="item.id > 0" @click="removeItem(item, index)" slot="statusIcon" variant="dashed">
          <icon name="remove" />
        </t-button>
      </t-form-item>

      <t-form-item :statusIcon="false" style="margin-left: 80px">
        <t-space size="10px">
          <t-button theme="primary" type="submit">\u63D0\u4EA4</t-button>
          <t-button theme="default" variant="base" type="reset">\u91CD\u7F6E</t-button>
        </t-space>
      </t-form-item>
    </t-form>
  </t-space>
</template>
<script setup lang="jsx">
import { MessagePlugin } from 'tdesign-vue';
import { onMounted, ref, reactive } from 'vue';
import { Icon } from 'tdesign-icons-vue';

const INITIAL_DATA = {
  fail: '',
  warning: '',
  success: '',
  failB: '',
  warningB: '',
  loading: '',
  add: '',
  help: '',
};
const formValidatorStatus = ref();
const formStatusIcon = ref(true);
const formData = reactive({
  ...INITIAL_DATA,
});
const rules = reactive({
  fail: [
    {
      required: true,
      message: '\u5FC5\u586B',
      type: 'error',
    },
  ],
  warning: [
    {
      required: true,
      message: '\u5FC5\u586B',
      type: 'warning',
    },
  ],
  success: [
    {
      validator: () => true,
    },
  ],
  failB: [
    {
      required: true,
      message: '\u5FC5\u586B',
      type: 'error',
    },
  ],
  warningB: [
    {
      required: true,
      message: '\u5FC5\u586B',
      type: 'warning',
    },
  ],
});
const addlist = ref([
  {
    id: 0,
    name: 'add0',
  },
]);
const lastAddItem = ref(1);
const addItem = () => {
  const addNum = lastAddItem.value;
  INITIAL_DATA[\`add\${addNum}\`] = '';
  addlist.value.push({
    id: addNum,
    name: \`add\${addNum}\`,
  });
  lastAddItem.value += 1;
};
const removeItem = (item, index) => {
  delete INITIAL_DATA[\`add\${item.id}\`];
  addlist.value.splice(index, 1);
};
const onReset = () => {
  MessagePlugin.success('\u91CD\u7F6E\u6210\u529F');
};
const onSubmit = ({ validateResult, firstError }) => {
  if (validateResult === true) {
    MessagePlugin.success('\u63D0\u4EA4\u6210\u529F');
  } else {
    console.log('Errors: ', validateResult);
    MessagePlugin.warning(firstError);
  }
};
const getStatusIcon = () => <Icon name="help-circle" size="16px" style="color: #0006" />;
onMounted(() => {
  formValidatorStatus.value.validate();
});
<\/script>

<style>
.tdesign-demo-form-status .t-input {
  width: 520px;
}
</style>
`,S=`<template>
  <!--  scrollToFirstError="smooth" -->
  <t-form :data="formData" :rules="rules" ref="form" @reset="onReset" @submit="onSubmit">
    <t-form-item label="\u7528\u6237\u540D" help="\u8FD9\u91CC\u53EF\u4EE5\u5C55\u793A\u4E00\u6BB5\u8BF4\u660E\u6587\u5B57" name="account">
      <t-input v-model="formData.account" placeholder="\u8BF7\u8F93\u5165\u7528\u6237\u540D"></t-input>
    </t-form-item>
    <t-form-item label="\u5E74\u9F84" name="age">
      <t-input-number v-model="formData.age" placeholder="\u5E74\u9F84" />
    </t-form-item>
    <t-form-item label="\u7C4D\u8D2F" name="region">
      <t-cascader v-model="formData.region" placeholder="\u8BF7\u9009\u62E9\u7C4D\u8D2F" :options="regionOptions" clearable filterable />
    </t-form-item>
    <t-form-item label="\u5BC6\u7801" name="password">
      <t-input type="password" v-model="formData.password" placeholder="\u8BF7\u8F93\u5165\u5BC6\u7801"></t-input>
    </t-form-item>
    <t-form-item label="\u90AE\u7BB1" name="email">
      <t-input v-model="formData.email" placeholder="\u8BF7\u8F93\u5165\u90AE\u7BB1"></t-input>
    </t-form-item>
    <t-form-item label="\u6027\u522B" name="gender">
      <t-radio-group v-model="formData.gender">
        <t-radio value="male">\u7537</t-radio>
        <t-radio value="female">\u5973</t-radio>
      </t-radio-group>
    </t-form-item>
    <t-form-item label="\u8BFE\u7A0B" name="course">
      <t-checkbox-group v-model="formData.course" :options="courseOptions"></t-checkbox-group>
    </t-form-item>
    <t-form-item label="\u5B66\u9662" name="college">
      <t-select v-model="formData.college" class="demo-select-base" clearable filterable placeholder="\u8BF7\u9009\u62E9\u6240\u5728\u5B66\u9662">
        <t-option v-for="(item, index) in options" :value="item.value" :label="item.label" :key="index">
          {{ item.label }}
        </t-option>
      </t-select>
    </t-form-item>
    <t-form-item
      label="\u5165\u5B66\u65F6\u95F4"
      name="date"
      :rules="[
        { required: true, message: '\u6B64\u9879\u5FC5\u586B' },
        { date: { delimiters: ['/', '-', '.'] }, message: '\u65E5\u671F\u683C\u5F0F\u6709\u8BEF' },
      ]"
    >
      <t-date-picker v-model="formData.date"></t-date-picker>
    </t-form-item>
    <t-form-item label="\u4E2A\u4EBA\u7F51\u7AD9" name="content.url">
      <t-input v-model="formData.content.url" placeholder="\u8BF7\u8F93\u5165\u4E2A\u4EBA\u7F51\u7AD9\u5730\u5740"></t-input>
    </t-form-item>
    <t-form-item label="\u4E2A\u4EBA\u7B80\u4ECB" help="\u8BF7\u7528\u4E00\u53E5\u8BDD\u4ECB\u7ECD\u81EA\u5DF1" name="description">
      <t-textarea v-model="formData.description" placeholder="\u8BF7\u7528\u4E00\u53E5\u8BDD\u4ECB\u7ECD\u81EA\u5DF1"></t-textarea>
    </t-form-item>
    <t-form-item label="\u5174\u8DA3\u7231\u597D" name="hobby">
      <t-tree-select
        v-model="formData.hobby"
        filterable
        :data="hobbyOptions"
        placeholder="\u8BF7\u9009\u62E9\u4F60\u7684\u5174\u8DA3\u7231\u597D"
      ></t-tree-select>
    </t-form-item>

    <t-form-item style="margin-left: 100px">
      <t-space size="10px">
        <t-button theme="primary" type="submit">\u63D0\u4EA4</t-button>
        <t-button theme="default" variant="base" type="reset">\u91CD\u7F6E</t-button>
        <t-button theme="default" variant="base" @click="handleClear">\u6E05\u7A7A\u6821\u9A8C\u7ED3\u679C</t-button>
      </t-space>
    </t-form-item>
  </t-form>
</template>
<script>
const INITIAL_DATA = {
  account: '',
  password: '',
  description: '',
  age: undefined,
  region: '',
  email: '',
  gender: '',
  college: '',
  date: '',
  content: {
    url: '',
  },
  hobby: '',
  course: [],
};
export default {
  data() {
    return {
      formData: { ...INITIAL_DATA },
      hobbyOptions: [
        {
          label: '\u8FD0\u52A8',
          value: 'sports',
          children: [
            {
              label: '\u8DB3\u7403',
              value: 'soccer',
            },
            {
              label: '\u7BEE\u7403',
              value: 'basketball',
            },
          ],
        },
        {
          label: '\u5A31\u4E50',
          value: 'entertainment',
          children: [
            {
              label: '\u7535\u5F71',
              value: 'movie',
            },
            {
              label: '\u65C5\u6E38',
              value: 'trip',
            },
          ],
        },
      ],
      regionOptions: [
        {
          label: '\u5E7F\u4E1C',
          value: '1',
          children: [
            {
              label: '\u6DF1\u5733',
              value: '1.1',
            },
            {
              label: '\u5E7F\u5DDE',
              value: '1.2',
            },
          ],
        },
        {
          label: '\u6E56\u5357',
          value: '2',
          children: [
            {
              label: '\u957F\u6C99',
              value: '2.1',
            },
          ],
        },
      ],
      courseOptions: [
        { label: '\u8BED\u6587', value: '1' },
        { label: '\u6570\u5B66', value: '2' },
        { label: '\u82F1\u8BED', value: '3' },
        { label: '\u4F53\u80B2', value: '4' },
      ],
      options: [
        { label: '\u8BA1\u7B97\u673A\u5B66\u9662', value: '1' },
        { label: '\u8F6F\u4EF6\u5B66\u9662', value: '2' },
        { label: '\u7269\u8054\u7F51\u5B66\u9662', value: '3' },
      ],
      // FormItem.rules \u4F18\u5148\u7EA7\u5927\u4E8E Form.rules
      rules: {
        account: [
          {
            required: true,
            message: '\u59D3\u540D\u5FC5\u586B',
            type: 'error',
            trigger: 'blur',
          },
          // trigger \u9ED8\u8BA4\u4E3A 'change'
          { required: true, message: '\u59D3\u540D\u5FC5\u586B', type: 'error' },
          { whitespace: true, message: '\u59D3\u540D\u4E0D\u80FD\u4E3A\u7A7A' },
          {
            min: 2,
            message: '\u81F3\u5C11\u9700\u8981\u4E24\u4E2A\u5B57\u7B26\uFF0C\u4E00\u4E2A\u4E2D\u6587\u7B49\u4E8E\u4E24\u4E2A\u5B57\u7B26',
            type: 'warning',
            trigger: 'blur',
          },
          {
            max: 10,
            message: '\u59D3\u540D\u5B57\u7B26\u957F\u5EA6\u8D85\u51FA',
            type: 'warning',
            trigger: 'blur',
          },
        ],
        description: [
          {
            validator: (val) => val.length >= 5,
            message: '\u81F3\u5C11 5 \u4E2A\u5B57\uFF0C\u4E2D\u6587\u957F\u5EA6\u7B49\u4E8E\u82F1\u6587\u957F\u5EA6',
            type: 'warning',
          },
          {
            validator: (val) => val.length < 20,
            message: '\u4E0D\u80FD\u8D85\u8FC7 20 \u4E2A\u5B57\uFF0C\u4E2D\u6587\u957F\u5EA6\u7B49\u4E8E\u82F1\u6587\u957F\u5EA6',
            type: 'warning',
          },
        ],
        age: [{ required: true, message: '\u5E74\u9F84\u5FC5\u586B', type: 'error' }],
        region: [{ required: true, message: '\u7C4D\u8D2F\u5FC5\u586B', type: 'error' }],

        password: [
          { required: true, message: '\u5BC6\u7801\u5FC5\u586B', type: 'error' },
          { len: 8, message: '\u8BF7\u8F93\u5165 8 \u4F4D\u5BC6\u7801', type: 'warning' },
          { pattern: /[A-Z]+/, message: '\u5BC6\u7801\u5FC5\u987B\u5305\u542B\u5927\u5199\u5B57\u6BCD', type: 'warning' },
        ],
        college: [{ required: true, message: '\u6B64\u9879\u5FC5\u586B' }],
        email: [
          { required: true, message: '\u90AE\u7BB1\u5FC5\u586B' },
          { email: { ignore_max_length: true }, message: '\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u90AE\u7BB1\u5730\u5740' },
        ],
        gender: [{ required: true, message: '\u6027\u522B\u5FC5\u586B' }],
        course: [
          { required: true, message: '\u8BFE\u7A0B\u5FC5\u586B' },
          { validator: (val) => val.length <= 2, message: '\u6700\u591A\u9009\u62E9 2 \u95E8\u8BFE\u7A0B', type: 'warning' },
        ],
        hobby: [{ required: true, message: '\u7231\u597D\u5FC5\u586B', type: 'error' }],
        'content.url': [
          { required: true, message: '\u4E2A\u4EBA\u7F51\u7AD9\u5FC5\u586B' },
          {
            url: {
              protocols: ['http', 'https', 'ftp'],
              require_protocol: true,
            },
            message: '\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u4E2A\u4EBA\u4E3B\u9875',
          },
        ],
      },
    };
  },

  methods: {
    onReset() {
      this.$message.success('\u91CD\u7F6E\u6210\u529F');
      console.log('formData', this.formData);
    },
    onSubmit({ validateResult, firstError }) {
      if (validateResult === true) {
        this.$message.success('\u63D0\u4EA4\u6210\u529F');
      } else {
        console.log('Errors: ', validateResult);
        this.$message.warning(firstError);
      }
    },
    handleClear() {
      this.$refs.form.clearValidate();
    },
  },
};
<\/script>

<style scoped>
.demo-select-base {
  width: 300px;
}
</style>
`,O=`<template>
  <!--  scrollToFirstError="smooth" -->
  <t-form :data="formData" :rules="rules" ref="form" @reset="onReset" @submit="onSubmit">
    <t-form-item label="\u7528\u6237\u540D" help="\u8FD9\u91CC\u53EF\u4EE5\u5C55\u793A\u4E00\u6BB5\u8BF4\u660E\u6587\u5B57" name="account">
      <t-input v-model="formData.account" placeholder="\u8BF7\u8F93\u5165\u7528\u6237\u540D"></t-input>
    </t-form-item>
    <t-form-item label="\u5E74\u9F84" name="age">
      <t-input-number v-model="formData.age" placeholder="\u5E74\u9F84" />
    </t-form-item>
    <t-form-item label="\u7C4D\u8D2F" name="region">
      <t-cascader v-model="formData.region" placeholder="\u8BF7\u9009\u62E9\u7C4D\u8D2F" :options="regionOptions" clearable filterable />
    </t-form-item>
    <t-form-item label="\u5BC6\u7801" name="password">
      <t-input type="password" v-model="formData.password" placeholder="\u8BF7\u8F93\u5165\u5BC6\u7801"></t-input>
    </t-form-item>
    <t-form-item label="\u90AE\u7BB1" name="email">
      <t-input v-model="formData.email" placeholder="\u8BF7\u8F93\u5165\u90AE\u7BB1"></t-input>
    </t-form-item>
    <t-form-item label="\u6027\u522B" name="gender">
      <t-radio-group v-model="formData.gender">
        <t-radio value="male">\u7537</t-radio>
        <t-radio value="female">\u5973</t-radio>
      </t-radio-group>
    </t-form-item>
    <t-form-item label="\u8BFE\u7A0B" name="course">
      <t-checkbox-group v-model="formData.course" :options="courseOptions"></t-checkbox-group>
    </t-form-item>
    <t-form-item label="\u5B66\u9662" name="college">
      <t-select v-model="formData.college" class="demo-select-base" clearable filterable placeholder="\u8BF7\u9009\u62E9\u6240\u5728\u5B66\u9662">
        <t-option v-for="(item, index) in options" :value="item.value" :label="item.label" :key="index">
          {{ item.label }}
        </t-option>
      </t-select>
    </t-form-item>
    <t-form-item
      label="\u5165\u5B66\u65F6\u95F4"
      name="date"
      :rules="[
        { required: true, message: '\u6B64\u9879\u5FC5\u586B' },
        { date: { delimiters: ['/', '-', '.'] }, message: '\u65E5\u671F\u683C\u5F0F\u6709\u8BEF' },
      ]"
    >
      <t-date-picker v-model="formData.date"></t-date-picker>
    </t-form-item>
    <t-form-item label="\u4E2A\u4EBA\u7F51\u7AD9" name="content.url">
      <t-input v-model="formData.content.url" placeholder="\u8BF7\u8F93\u5165\u4E2A\u4EBA\u7F51\u7AD9\u5730\u5740"></t-input>
    </t-form-item>
    <t-form-item label="\u4E2A\u4EBA\u7B80\u4ECB" help="\u8BF7\u7528\u4E00\u53E5\u8BDD\u4ECB\u7ECD\u81EA\u5DF1" name="description">
      <t-textarea v-model="formData.description" placeholder="\u8BF7\u7528\u4E00\u53E5\u8BDD\u4ECB\u7ECD\u81EA\u5DF1"></t-textarea>
    </t-form-item>
    <t-form-item label="\u5174\u8DA3\u7231\u597D" name="hobby">
      <t-tree-select
        v-model="formData.hobby"
        filterable
        :data="hobbyOptions"
        placeholder="\u8BF7\u9009\u62E9\u4F60\u7684\u5174\u8DA3\u7231\u597D"
      ></t-tree-select>
    </t-form-item>

    <t-form-item style="margin-left: 100px">
      <t-space size="10px">
        <t-button theme="primary" type="submit">\u63D0\u4EA4</t-button>
        <t-button theme="default" variant="base" type="reset">\u91CD\u7F6E</t-button>
        <t-button theme="default" variant="base" @click="handleClear">\u6E05\u7A7A\u6821\u9A8C\u7ED3\u679C</t-button>
      </t-space>
    </t-form-item>
  </t-form>
</template>
<script setup>
import { MessagePlugin } from 'tdesign-vue';
import { ref, reactive } from 'vue';

const INITIAL_DATA = {
  account: '',
  password: '',
  description: '',
  age: undefined,
  region: '',
  email: '',
  gender: '',
  college: '',
  date: '',
  content: {
    url: '',
  },
  hobby: '',
  course: [],
};
const form = ref();
const formData = reactive({
  ...INITIAL_DATA,
});
const hobbyOptions = ref([
  {
    label: '\u8FD0\u52A8',
    value: 'sports',
    children: [
      {
        label: '\u8DB3\u7403',
        value: 'soccer',
      },
      {
        label: '\u7BEE\u7403',
        value: 'basketball',
      },
    ],
  },
  {
    label: '\u5A31\u4E50',
    value: 'entertainment',
    children: [
      {
        label: '\u7535\u5F71',
        value: 'movie',
      },
      {
        label: '\u65C5\u6E38',
        value: 'trip',
      },
    ],
  },
]);
const regionOptions = ref([
  {
    label: '\u5E7F\u4E1C',
    value: '1',
    children: [
      {
        label: '\u6DF1\u5733',
        value: '1.1',
      },
      {
        label: '\u5E7F\u5DDE',
        value: '1.2',
      },
    ],
  },
  {
    label: '\u6E56\u5357',
    value: '2',
    children: [
      {
        label: '\u957F\u6C99',
        value: '2.1',
      },
    ],
  },
]);
const courseOptions = ref([
  {
    label: '\u8BED\u6587',
    value: '1',
  },
  {
    label: '\u6570\u5B66',
    value: '2',
  },
  {
    label: '\u82F1\u8BED',
    value: '3',
  },
  {
    label: '\u4F53\u80B2',
    value: '4',
  },
]);
const options = ref([
  {
    label: '\u8BA1\u7B97\u673A\u5B66\u9662',
    value: '1',
  },
  {
    label: '\u8F6F\u4EF6\u5B66\u9662',
    value: '2',
  },
  {
    label: '\u7269\u8054\u7F51\u5B66\u9662',
    value: '3',
  },
]);
// FormItem.rules \u4F18\u5148\u7EA7\u5927\u4E8E Form.rules
const rules = reactive({
  account: [
    {
      required: true,
      message: '\u59D3\u540D\u5FC5\u586B',
      type: 'error',
      trigger: 'blur',
    },
    // trigger \u9ED8\u8BA4\u4E3A 'change'
    {
      required: true,
      message: '\u59D3\u540D\u5FC5\u586B',
      type: 'error',
    },
    {
      whitespace: true,
      message: '\u59D3\u540D\u4E0D\u80FD\u4E3A\u7A7A',
    },
    {
      min: 2,
      message: '\u81F3\u5C11\u9700\u8981\u4E24\u4E2A\u5B57\u7B26\uFF0C\u4E00\u4E2A\u4E2D\u6587\u7B49\u4E8E\u4E24\u4E2A\u5B57\u7B26',
      type: 'warning',
      trigger: 'blur',
    },
    {
      max: 10,
      message: '\u59D3\u540D\u5B57\u7B26\u957F\u5EA6\u8D85\u51FA',
      type: 'warning',
      trigger: 'blur',
    },
  ],
  description: [
    {
      validator: (val) => val.length >= 5,
      message: '\u81F3\u5C11 5 \u4E2A\u5B57\uFF0C\u4E2D\u6587\u957F\u5EA6\u7B49\u4E8E\u82F1\u6587\u957F\u5EA6',
      type: 'warning',
    },
    {
      validator: (val) => val.length < 20,
      message: '\u4E0D\u80FD\u8D85\u8FC7 20 \u4E2A\u5B57\uFF0C\u4E2D\u6587\u957F\u5EA6\u7B49\u4E8E\u82F1\u6587\u957F\u5EA6',
      type: 'warning',
    },
  ],
  age: [
    {
      required: true,
      message: '\u5E74\u9F84\u5FC5\u586B',
      type: 'error',
    },
  ],
  region: [
    {
      required: true,
      message: '\u7C4D\u8D2F\u5FC5\u586B',
      type: 'error',
    },
  ],
  password: [
    {
      required: true,
      message: '\u5BC6\u7801\u5FC5\u586B',
      type: 'error',
    },
    {
      len: 8,
      message: '\u8BF7\u8F93\u5165 8 \u4F4D\u5BC6\u7801',
      type: 'warning',
    },
    {
      pattern: /[A-Z]+/,
      message: '\u5BC6\u7801\u5FC5\u987B\u5305\u542B\u5927\u5199\u5B57\u6BCD',
      type: 'warning',
    },
  ],
  college: [
    {
      required: true,
      message: '\u6B64\u9879\u5FC5\u586B',
    },
  ],
  email: [
    {
      required: true,
      message: '\u90AE\u7BB1\u5FC5\u586B',
    },
    {
      email: {
        ignore_max_length: true,
      },
      message: '\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u90AE\u7BB1\u5730\u5740',
    },
  ],
  gender: [
    {
      required: true,
      message: '\u6027\u522B\u5FC5\u586B',
    },
  ],
  course: [
    {
      required: true,
      message: '\u8BFE\u7A0B\u5FC5\u586B',
    },
    {
      validator: (val) => val.length <= 2,
      message: '\u6700\u591A\u9009\u62E9 2 \u95E8\u8BFE\u7A0B',
      type: 'warning',
    },
  ],
  hobby: [
    {
      required: true,
      message: '\u7231\u597D\u5FC5\u586B',
      type: 'error',
    },
  ],
  'content.url': [
    {
      required: true,
      message: '\u4E2A\u4EBA\u7F51\u7AD9\u5FC5\u586B',
    },
    {
      url: {
        protocols: ['http', 'https', 'ftp'],
        require_protocol: true,
      },
      message: '\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u4E2A\u4EBA\u4E3B\u9875',
    },
  ],
});
const onReset = () => {
  MessagePlugin.success('\u91CD\u7F6E\u6210\u529F');
  console.log('formData', formData);
};
const onSubmit = ({ validateResult, firstError }) => {
  if (validateResult === true) {
    MessagePlugin.success('\u63D0\u4EA4\u6210\u529F');
  } else {
    console.log('Errors: ', validateResult);
    MessagePlugin.warning(firstError);
  }
};
const handleClear = () => {
  form.value.clearValidate();
};
<\/script>

<style scoped>
.demo-select-base {
  width: 300px;
}
</style>
`,P=`<template>
  <t-form :data="formData" :rules="rules" ref="form" @reset="onReset" @submit="onSubmit" @validate="onValidate">
    <t-form-item label="\u7528\u6237\u540D" name="account">
      <t-input v-model="formData.account" placeholder="\u8BF7\u8F93\u5165\u7528\u6237\u540D"></t-input>
    </t-form-item>
    <t-form-item label="\u5BC6\u7801" name="password" help="\u540C\u4E00\u4E2A\u6821\u9A8C\u65B9\u6CD5\u53EF\u8F93\u51FA\u4E0D\u540C\u7684\u9519\u8BEF\u4FE1\u606F\u548C\u7C7B\u578B\uFF0C\u4F9D\u6B21\u8F93\u5165\uFF1A1234 \u89C2\u5BDF\u53D8\u5316">
      <t-input type="password" v-model="formData.password" placeholder="\u8BF7\u8F93\u5165\u5BC6\u7801"></t-input>
    </t-form-item>
    <t-form-item label="\u786E\u8BA4\u5BC6\u7801" name="rePassword" help="\u81EA\u5B9A\u4E49\u5F02\u6B65\u6821\u9A8C\u65B9\u6CD5">
      <t-input type="password" v-model="formData.rePassword" placeholder="\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801"></t-input>
    </t-form-item>
    <t-form-item style="margin-left: 100px">
      <t-space size="10px">
        <t-button theme="primary" type="submit">\u63D0\u4EA4</t-button>
        <t-button theme="default" variant="base" type="reset">\u91CD\u7F6E</t-button>
      </t-space>
    </t-form-item>
  </t-form>
</template>
<script>
const INITIAL_DATA = {
  account: '',
  password: '',
  rePassword: '',
};
export default {
  data() {
    return {
      formData: { ...INITIAL_DATA },
      rules: {
        account: [
          { required: true, message: '\u7528\u6237\u540D\u5FC5\u586B', type: 'error' },
          {
            validator: this.userNameValidator,
          },
        ],
        password: [
          { required: true, message: '\u5BC6\u7801\u5FC5\u586B', type: 'error' },
          // \u81EA\u5B9A\u4E49\u6821\u9A8C\u89C4\u5219\uFF1A\u4E0D\u540C\u7684\u503C\u53EF\u4EE5\u6709\u4E0D\u540C\u7684\u6821\u9A8C\u7ED3\u679C\uFF0C\u4E0D\u540C\u7684\u6821\u9A8C\u7C7B\u578B
          { validator: this.passwordValidator },
        ],
        rePassword: [
          { required: true, message: '\u5BC6\u7801\u5FC5\u586B', type: 'error' },
          // \u81EA\u5B9A\u4E49\u6821\u9A8C\u89C4\u5219\uFF1A\u81EA\u5B9A\u4E49\u5F02\u6B65\u6821\u9A8C\u89C4\u5219
          { validator: this.rePassword, message: '\u4E24\u6B21\u5BC6\u7801\u4E0D\u4E00\u81F4' },
        ],
      },
    };
  },

  methods: {
    onReset() {
      this.$message.success('\u91CD\u7F6E\u6210\u529F');
    },
    onSubmit({ validateResult, firstError }) {
      if (validateResult === true) {
        this.$message.success('\u63D0\u4EA4\u6210\u529F');
      } else {
        console.log('Errors: ', validateResult);
        this.$message.warning(firstError);
      }
    },
    onValidate({ validateResult, firstError }) {
      if (validateResult === true) {
        console.log('Validate Success');
      } else {
        console.log('Validate Errors: ', firstError, validateResult);
      }
    },
    // \u81EA\u5B9A\u4E49\u5F02\u6B65\u6821\u9A8C\u5668\uFF0C\u4F7F\u7528 resolve \u8FD4\u56DE\u7ED3\u679C\u63A7\u5236\u6821\u9A8C\u7ED3\u679C\u3001\u6821\u9A8C\u4FE1\u606F\u3001\u6821\u9A8C\u7ED3\u679C\u7C7B\u578B
    userNameValidator(val) {
      return new Promise((resolve) => {
        const timer = setTimeout(() => {
          if (['Zhang', 'Li', 'Wang'].includes(val)) {
            resolve({ result: true });
          } else {
            resolve({ result: false, message: '\u7528\u6237\u540D\u4E0D\u5B58\u5728', type: 'error' });
          }
          clearTimeout(timer);
        }, 10);
      });
    },
    // \u81EA\u5B9A\u4E49\u6821\u9A8C\u5668\uFF0C\u4E0D\u540C\u7684\u503C\u8F93\u51FA\u4E0D\u540C\u7684\u6821\u9A8C\u7ED3\u679C\u3002\u652F\u6301\u5F02\u6B65\u6821\u9A8C\uFF08\u6587\u6848\u9009\u81EA\u67D0\u5BC6\u7801\u91CD\u7F6E\u7AD9\u70B9\uFF0C\u5982\u6709\u4FB5\u6743\uFF0C\u8BF7\u8054\u7CFB\u6211\u4EEC\u5220\u9664\uFF09
    passwordValidator(val) {
      if (val.length > 0 && val.length <= 2) {
        return { result: false, message: '\u592A\u7B80\u5355\u4E86\uFF01\u518D\u5F00\u52A8\u4E00\u4E0B\u4F60\u7684\u5C0F\u8111\u7B4B\u5427\uFF01', type: 'error' };
      }
      if (val.length > 2 && val.length < 4) {
        return { result: false, message: '\u8FD8\u5DEE\u4E00\u70B9\u70B9\uFF0C\u5C31\u662F\u4E00\u4E2A\u5B8C\u7F8E\u7684\u5BC6\u7801\u4E86\uFF01', type: 'warning' };
      }
      return { result: true, message: '\u592A\u5F3A\u4E86\uFF0C\u4F60\u786E\u5B9A\u81EA\u5DF1\u8BB0\u5F97\u4F4F\u5417\uFF01', type: 'success' };
    },
    // \u81EA\u5B9A\u4E49\u5F02\u6B65\u6821\u9A8C\u5668
    rePassword(val) {
      return new Promise((resolve) => {
        const timer = setTimeout(() => {
          resolve(this.formData.password === val);
          clearTimeout(timer);
        });
      });
    },
  },
};
<\/script>
`,q=`<template>
  <t-form :data="formData" :rules="rules" ref="form" @reset="onReset" @submit="onSubmit" @validate="onValidate">
    <t-form-item label="\u7528\u6237\u540D" name="account">
      <t-input v-model="formData.account" placeholder="\u8BF7\u8F93\u5165\u7528\u6237\u540D"></t-input>
    </t-form-item>
    <t-form-item label="\u5BC6\u7801" name="password" help="\u540C\u4E00\u4E2A\u6821\u9A8C\u65B9\u6CD5\u53EF\u8F93\u51FA\u4E0D\u540C\u7684\u9519\u8BEF\u4FE1\u606F\u548C\u7C7B\u578B\uFF0C\u4F9D\u6B21\u8F93\u5165\uFF1A1234 \u89C2\u5BDF\u53D8\u5316">
      <t-input type="password" v-model="formData.password" placeholder="\u8BF7\u8F93\u5165\u5BC6\u7801"></t-input>
    </t-form-item>
    <t-form-item label="\u786E\u8BA4\u5BC6\u7801" name="rePassword" help="\u81EA\u5B9A\u4E49\u5F02\u6B65\u6821\u9A8C\u65B9\u6CD5">
      <t-input type="password" v-model="formData.rePassword" placeholder="\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801"></t-input>
    </t-form-item>
    <t-form-item style="margin-left: 100px">
      <t-space size="10px">
        <t-button theme="primary" type="submit">\u63D0\u4EA4</t-button>
        <t-button theme="default" variant="base" type="reset">\u91CD\u7F6E</t-button>
      </t-space>
    </t-form-item>
  </t-form>
</template>
<script setup>
import { MessagePlugin } from 'tdesign-vue';
import { reactive } from 'vue';

const INITIAL_DATA = {
  account: '',
  password: '',
  rePassword: '',
};
const formData = reactive({
  ...INITIAL_DATA,
});
const rules = reactive({
  account: [
    {
      required: true,
      message: '\u7528\u6237\u540D\u5FC5\u586B',
      type: 'error',
    },
    {
      validator: userNameValidator,
    },
  ],
  password: [
    {
      required: true,
      message: '\u5BC6\u7801\u5FC5\u586B',
      type: 'error',
    },
    // \u81EA\u5B9A\u4E49\u6821\u9A8C\u89C4\u5219\uFF1A\u4E0D\u540C\u7684\u503C\u53EF\u4EE5\u6709\u4E0D\u540C\u7684\u6821\u9A8C\u7ED3\u679C\uFF0C\u4E0D\u540C\u7684\u6821\u9A8C\u7C7B\u578B
    {
      validator: passwordValidator,
    },
  ],
  rePassword: [
    {
      required: true,
      message: '\u5BC6\u7801\u5FC5\u586B',
      type: 'error',
    },
    // \u81EA\u5B9A\u4E49\u6821\u9A8C\u89C4\u5219\uFF1A\u81EA\u5B9A\u4E49\u5F02\u6B65\u6821\u9A8C\u89C4\u5219
    {
      validator: rePassword,
      message: '\u4E24\u6B21\u5BC6\u7801\u4E0D\u4E00\u81F4',
    },
  ],
});
const onReset = () => {
  MessagePlugin.success('\u91CD\u7F6E\u6210\u529F');
};
const onSubmit = ({ validateResult, firstError }) => {
  if (validateResult === true) {
    MessagePlugin.success('\u63D0\u4EA4\u6210\u529F');
  } else {
    console.log('Errors: ', validateResult);
    MessagePlugin.warning(firstError);
  }
};
const onValidate = ({ validateResult, firstError }) => {
  if (validateResult === true) {
    console.log('Validate Success');
  } else {
    console.log('Validate Errors: ', firstError, validateResult);
  }
};
// \u81EA\u5B9A\u4E49\u5F02\u6B65\u6821\u9A8C\u5668\uFF0C\u4F7F\u7528 resolve \u8FD4\u56DE\u7ED3\u679C\u63A7\u5236\u6821\u9A8C\u7ED3\u679C\u3001\u6821\u9A8C\u4FE1\u606F\u3001\u6821\u9A8C\u7ED3\u679C\u7C7B\u578B
const userNameValidator = (val) => new Promise((resolve) => {
  const timer = setTimeout(() => {
    if (['Zhang', 'Li', 'Wang'].includes(val)) {
      resolve({
        result: true,
      });
    } else {
      resolve({
        result: false,
        message: '\u7528\u6237\u540D\u4E0D\u5B58\u5728',
        type: 'error',
      });
    }
    clearTimeout(timer);
  }, 10);
});
// \u81EA\u5B9A\u4E49\u6821\u9A8C\u5668\uFF0C\u4E0D\u540C\u7684\u503C\u8F93\u51FA\u4E0D\u540C\u7684\u6821\u9A8C\u7ED3\u679C\u3002\u652F\u6301\u5F02\u6B65\u6821\u9A8C\uFF08\u6587\u6848\u9009\u81EA\u67D0\u5BC6\u7801\u91CD\u7F6E\u7AD9\u70B9\uFF0C\u5982\u6709\u4FB5\u6743\uFF0C\u8BF7\u8054\u7CFB\u6211\u4EEC\u5220\u9664\uFF09
const passwordValidator = (val) => {
  if (val.length > 0 && val.length <= 2) {
    return {
      result: false,
      message: '\u592A\u7B80\u5355\u4E86\uFF01\u518D\u5F00\u52A8\u4E00\u4E0B\u4F60\u7684\u5C0F\u8111\u7B4B\u5427\uFF01',
      type: 'error',
    };
  }
  if (val.length > 2 && val.length < 4) {
    return {
      result: false,
      message: '\u8FD8\u5DEE\u4E00\u70B9\u70B9\uFF0C\u5C31\u662F\u4E00\u4E2A\u5B8C\u7F8E\u7684\u5BC6\u7801\u4E86\uFF01',
      type: 'warning',
    };
  }
  return {
    result: true,
    message: '\u592A\u5F3A\u4E86\uFF0C\u4F60\u786E\u5B9A\u81EA\u5DF1\u8BB0\u5F97\u4F4F\u5417\uFF01',
    type: 'success',
  };
};
// \u81EA\u5B9A\u4E49\u5F02\u6B65\u6821\u9A8C\u5668
const rePassword = (val) => new Promise((resolve) => {
  const timer = setTimeout(() => {
    resolve(formData.password === val);
    clearTimeout(timer);
  });
});
<\/script>
`,$=`<template>
  <t-form :data="formData" :rules="rules" ref="form" @reset="onReset" @submit="onSubmit" scrollToFirstError="smooth">
    <t-form-item label="\u7528\u6237\u540D" help="\u8FD9\u91CC\u53EF\u4EE5\u5C55\u793A\u4E00\u6BB5\u8BF4\u660E\u6587\u5B57" name="account">
      <t-input v-model="formData.account" placeholder="\u8BF7\u8F93\u5165\u7528\u6237\u540D"></t-input>
    </t-form-item>
    <t-form-item label="\u4E2A\u4EBA\u7B80\u4ECB" help="\u8BF7\u7528\u4E00\u53E5\u8BDD\u4ECB\u7ECD\u81EA\u5DF1" name="description">
      <t-input v-model="formData.description" placeholder="\u8BF7\u8F93\u5165\u4E2A\u4EBA\u7B80\u4ECB"></t-input>
    </t-form-item>
    <t-form-item label="\u5BC6\u7801" name="password">
      <t-input type="password" v-model="formData.password" placeholder="\u8BF7\u8F93\u5165\u5BC6\u7801"></t-input>
    </t-form-item>
    <t-form-item label="\u90AE\u7BB1" name="email">
      <t-input v-model="formData.email" placeholder="\u8BF7\u8F93\u5165\u90AE\u7BB1"></t-input>
    </t-form-item>
    <t-form-item label="\u6027\u522B" name="gender">
      <t-radio-group v-model="formData.gender">
        <t-radio value="male">\u7537</t-radio>
        <t-radio value="female">\u5973</t-radio>
      </t-radio-group>
    </t-form-item>
    <t-form-item label="\u8BFE\u7A0B" name="course">
      <t-checkbox-group v-model="formData.course" :options="courseOptions"></t-checkbox-group>
    </t-form-item>
    <t-form-item label="\u5B66\u9662" name="college">
      <t-select v-model="formData.college" class="demo-select-base" clearable placeholder="\u8BF7\u9009\u62E9\u6240\u5728\u9662\u6821">
        <t-option v-for="(item, index) in options" :value="item.value" :label="item.label" :key="index">
          {{ item.label }}
        </t-option>
      </t-select>
    </t-form-item>
    <t-form-item
      label="\u5165\u5B66\u65F6\u95F4"
      name="date"
      :rules="[{ date: { delimiters: ['/', '-', '.'] }, message: '\u65E5\u671F\u683C\u5F0F\u6709\u8BEF' }]"
    >
      <t-input v-model="formData.date" placeholder="\u8BF7\u8F93\u5165\u5165\u5B66\u65F6\u95F4"></t-input>
    </t-form-item>
    <t-form-item label="\u4E2A\u4EBA\u7F51\u7AD9" name="content.url">
      <t-input v-model="formData.content.url" placeholder="\u8BF7\u8F93\u5165\u4E2A\u4EBA\u7F51\u7AD9\u5730\u5740"></t-input>
    </t-form-item>
    <t-form-item style="margin-left: 100px">
      <t-space size="10px">
        <t-button theme="primary" type="submit"> \u63D0\u4EA4 </t-button>
        <t-button theme="default" variant="base" type="reset"> \u91CD\u7F6E </t-button>
        <t-button theme="default" variant="base" @click="handleClear"> \u6E05\u7A7A\u6821\u9A8C\u7ED3\u679C </t-button>
        <t-button theme="default" variant="base" @click="clearFieldsValidateResult"> \u6E05\u9664\u6307\u5B9A\u5B57\u6BB5\u7684\u6821\u9A8C\u7ED3\u679C </t-button>
      </t-space>
    </t-form-item>
  </t-form>
</template>
<script>
const INITIAL_DATA = {
  account: '',
  password: '',
  description: '',
  email: '',
  gender: '',
  college: '',
  date: '',
  content: {
    url: '',
  },
  course: [],
};
export default {
  data() {
    return {
      formData: { ...INITIAL_DATA },
      courseOptions: [
        { label: '\u8BED\u6587', value: '1' },
        { label: '\u6570\u5B66', value: '2' },
        { label: '\u82F1\u8BED', value: '3' },
        { label: '\u4F53\u80B2', value: '4' },
      ],
      options: [
        { label: '\u8BA1\u7B97\u673A\u5B66\u9662', value: '1' },
        { label: '\u8F6F\u4EF6\u5B66\u9662', value: '2' },
        { label: '\u7269\u8054\u7F51\u5B66\u9662', value: '3' },
      ],
      rules: {
        account: [
          { required: true, message: '\u59D3\u540D\u5FC5\u586B' },
          { min: 2, message: '\u81F3\u5C11\u9700\u8981\u4E24\u4E2A\u5B57\u7B26\uFF0C\u4E00\u4E2A\u4E2D\u6587\u7B49\u4E8E\u4E24\u4E2A\u5B57\u7B26' },
          { max: 10, message: '\u59D3\u540D\u5B57\u7B26\u957F\u5EA6\u8D85\u51FA' },
        ],
        description: [
          { validator: (val) => val.length >= 5, message: '\u81F3\u5C11 5 \u4E2A\u5B57\uFF0C\u4E2D\u6587\u957F\u5EA6\u7B49\u4E8E\u82F1\u6587\u957F\u5EA6' },
          { validator: (val) => val.length < 20, message: '\u4E0D\u80FD\u8D85\u8FC7 20 \u4E2A\u5B57\uFF0C\u4E2D\u6587\u957F\u5EA6\u7B49\u4E8E\u82F1\u6587\u957F\u5EA6' },
        ],
        password: [
          { required: true, message: '\u5BC6\u7801\u5FC5\u586B' },
          { len: 8, message: '\u8BF7\u8F93\u5165 8 \u4F4D\u5BC6\u7801' },
          { pattern: /[A-Z]+/, message: '\u5BC6\u7801\u5FC5\u987B\u5305\u542B\u5927\u5199\u5B57\u6BCD' },
        ],
        email: [
          { required: true, message: '\u90AE\u7BB1\u5FC5\u586B' },
          { email: { ignore_max_length: true }, message: '\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u90AE\u7BB1\u5730\u5740' },
        ],
        gender: [{ required: true, message: '\u6027\u522B\u5FC5\u586B' }],
        course: [
          { required: true, message: '\u8BFE\u7A0B\u5FC5\u586B' },
          { validator: (val) => val.length <= 2, message: '\u6700\u591A\u9009\u62E9 2 \u95E8\u8BFE\u7A0B' },
        ],
        'content.url': [
          { required: true, message: '\u4E2A\u4EBA\u7F51\u7AD9\u5FC5\u586B' },
          {
            url: {
              protocols: ['http', 'https', 'ftp'],
              require_protocol: true,
            },
            message: '\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u4E2A\u4EBA\u4E3B\u9875',
          },
        ],
      },
    };
  },

  methods: {
    onReset() {
      this.$message.success('\u91CD\u7F6E\u6210\u529F');
      console.log('formData', this.formData);
    },
    onSubmit({ validateResult, firstError }) {
      if (validateResult === true) {
        this.$message.success('\u63D0\u4EA4\u6210\u529F');
      } else {
        console.log('Errors: ', validateResult);
        this.$message.warning(firstError);
      }
    },
    handleClear() {
      this.$refs.form.clearValidate();
    },
    // \u6E05\u9664\u6307\u5B9A\u5B57\u6BB5\u7684\u6821\u9A8C\u7ED3\u679C
    clearFieldsValidateResult() {
      this.$refs.form.clearValidate(['email', 'course', 'content.url']);
      this.$message.success('\u5DF2\u6E05\u9664\u90AE\u7BB1\u3001\u8BFE\u7A0B\u3001\u4E2A\u4EBA\u7F51\u7AD9\u7B49\u5B57\u6BB5\u6821\u9A8C\u7ED3\u679C');
    },
  },
};
<\/script>

<style scoped>
.demo-select-base {
  width: 300px;
}
</style>
`,N=`<template>
  <t-form :data="formData" :rules="rules" ref="form" @reset="onReset" @submit="onSubmit" scrollToFirstError="smooth">
    <t-form-item label="\u7528\u6237\u540D" help="\u8FD9\u91CC\u53EF\u4EE5\u5C55\u793A\u4E00\u6BB5\u8BF4\u660E\u6587\u5B57" name="account">
      <t-input v-model="formData.account" placeholder="\u8BF7\u8F93\u5165\u7528\u6237\u540D"></t-input>
    </t-form-item>
    <t-form-item label="\u4E2A\u4EBA\u7B80\u4ECB" help="\u8BF7\u7528\u4E00\u53E5\u8BDD\u4ECB\u7ECD\u81EA\u5DF1" name="description">
      <t-input v-model="formData.description" placeholder="\u8BF7\u8F93\u5165\u4E2A\u4EBA\u7B80\u4ECB"></t-input>
    </t-form-item>
    <t-form-item label="\u5BC6\u7801" name="password">
      <t-input type="password" v-model="formData.password" placeholder="\u8BF7\u8F93\u5165\u5BC6\u7801"></t-input>
    </t-form-item>
    <t-form-item label="\u90AE\u7BB1" name="email">
      <t-input v-model="formData.email" placeholder="\u8BF7\u8F93\u5165\u90AE\u7BB1"></t-input>
    </t-form-item>
    <t-form-item label="\u6027\u522B" name="gender">
      <t-radio-group v-model="formData.gender">
        <t-radio value="male">\u7537</t-radio>
        <t-radio value="female">\u5973</t-radio>
      </t-radio-group>
    </t-form-item>
    <t-form-item label="\u8BFE\u7A0B" name="course">
      <t-checkbox-group v-model="formData.course" :options="courseOptions"></t-checkbox-group>
    </t-form-item>
    <t-form-item label="\u5B66\u9662" name="college">
      <t-select v-model="formData.college" class="demo-select-base" clearable placeholder="\u8BF7\u9009\u62E9\u6240\u5728\u9662\u6821">
        <t-option v-for="(item, index) in options" :value="item.value" :label="item.label" :key="index">
          {{ item.label }}
        </t-option>
      </t-select>
    </t-form-item>
    <t-form-item
      label="\u5165\u5B66\u65F6\u95F4"
      name="date"
      :rules="[{ date: { delimiters: ['/', '-', '.'] }, message: '\u65E5\u671F\u683C\u5F0F\u6709\u8BEF' }]"
    >
      <t-input v-model="formData.date" placeholder="\u8BF7\u8F93\u5165\u5165\u5B66\u65F6\u95F4"></t-input>
    </t-form-item>
    <t-form-item label="\u4E2A\u4EBA\u7F51\u7AD9" name="content.url">
      <t-input v-model="formData.content.url" placeholder="\u8BF7\u8F93\u5165\u4E2A\u4EBA\u7F51\u7AD9\u5730\u5740"></t-input>
    </t-form-item>
    <t-form-item style="margin-left: 100px">
      <t-space size="10px">
        <t-button theme="primary" type="submit"> \u63D0\u4EA4 </t-button>
        <t-button theme="default" variant="base" type="reset"> \u91CD\u7F6E </t-button>
        <t-button theme="default" variant="base" @click="handleClear"> \u6E05\u7A7A\u6821\u9A8C\u7ED3\u679C </t-button>
        <t-button theme="default" variant="base" @click="clearFieldsValidateResult"> \u6E05\u9664\u6307\u5B9A\u5B57\u6BB5\u7684\u6821\u9A8C\u7ED3\u679C </t-button>
      </t-space>
    </t-form-item>
  </t-form>
</template>
<script setup>
import { MessagePlugin } from 'tdesign-vue';
import { ref, reactive } from 'vue';

const INITIAL_DATA = {
  account: '',
  password: '',
  description: '',
  email: '',
  gender: '',
  college: '',
  date: '',
  content: {
    url: '',
  },
  course: [],
};
const form = ref();
const formData = reactive({
  ...INITIAL_DATA,
});
const courseOptions = ref([
  {
    label: '\u8BED\u6587',
    value: '1',
  },
  {
    label: '\u6570\u5B66',
    value: '2',
  },
  {
    label: '\u82F1\u8BED',
    value: '3',
  },
  {
    label: '\u4F53\u80B2',
    value: '4',
  },
]);
const options = ref([
  {
    label: '\u8BA1\u7B97\u673A\u5B66\u9662',
    value: '1',
  },
  {
    label: '\u8F6F\u4EF6\u5B66\u9662',
    value: '2',
  },
  {
    label: '\u7269\u8054\u7F51\u5B66\u9662',
    value: '3',
  },
]);
const rules = reactive({
  account: [
    {
      required: true,
      message: '\u59D3\u540D\u5FC5\u586B',
    },
    {
      min: 2,
      message: '\u81F3\u5C11\u9700\u8981\u4E24\u4E2A\u5B57\u7B26\uFF0C\u4E00\u4E2A\u4E2D\u6587\u7B49\u4E8E\u4E24\u4E2A\u5B57\u7B26',
    },
    {
      max: 10,
      message: '\u59D3\u540D\u5B57\u7B26\u957F\u5EA6\u8D85\u51FA',
    },
  ],
  description: [
    {
      validator: (val) => val.length >= 5,
      message: '\u81F3\u5C11 5 \u4E2A\u5B57\uFF0C\u4E2D\u6587\u957F\u5EA6\u7B49\u4E8E\u82F1\u6587\u957F\u5EA6',
    },
    {
      validator: (val) => val.length < 20,
      message: '\u4E0D\u80FD\u8D85\u8FC7 20 \u4E2A\u5B57\uFF0C\u4E2D\u6587\u957F\u5EA6\u7B49\u4E8E\u82F1\u6587\u957F\u5EA6',
    },
  ],
  password: [
    {
      required: true,
      message: '\u5BC6\u7801\u5FC5\u586B',
    },
    {
      len: 8,
      message: '\u8BF7\u8F93\u5165 8 \u4F4D\u5BC6\u7801',
    },
    {
      pattern: /[A-Z]+/,
      message: '\u5BC6\u7801\u5FC5\u987B\u5305\u542B\u5927\u5199\u5B57\u6BCD',
    },
  ],
  email: [
    {
      required: true,
      message: '\u90AE\u7BB1\u5FC5\u586B',
    },
    {
      email: {
        ignore_max_length: true,
      },
      message: '\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u90AE\u7BB1\u5730\u5740',
    },
  ],
  gender: [
    {
      required: true,
      message: '\u6027\u522B\u5FC5\u586B',
    },
  ],
  course: [
    {
      required: true,
      message: '\u8BFE\u7A0B\u5FC5\u586B',
    },
    {
      validator: (val) => val.length <= 2,
      message: '\u6700\u591A\u9009\u62E9 2 \u95E8\u8BFE\u7A0B',
    },
  ],
  'content.url': [
    {
      required: true,
      message: '\u4E2A\u4EBA\u7F51\u7AD9\u5FC5\u586B',
    },
    {
      url: {
        protocols: ['http', 'https', 'ftp'],
        require_protocol: true,
      },
      message: '\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u4E2A\u4EBA\u4E3B\u9875',
    },
  ],
});
const onReset = () => {
  MessagePlugin.success('\u91CD\u7F6E\u6210\u529F');
  console.log('formData', formData);
};
const onSubmit = ({ validateResult, firstError }) => {
  if (validateResult === true) {
    MessagePlugin.success('\u63D0\u4EA4\u6210\u529F');
  } else {
    console.log('Errors: ', validateResult);
    MessagePlugin.warning(firstError);
  }
};
const handleClear = () => {
  form.value.clearValidate();
};
// \u6E05\u9664\u6307\u5B9A\u5B57\u6BB5\u7684\u6821\u9A8C\u7ED3\u679C
const clearFieldsValidateResult = () => {
  form.value.clearValidate(['email', 'course', 'content.url']);
  MessagePlugin.success('\u5DF2\u6E05\u9664\u90AE\u7BB1\u3001\u8BFE\u7A0B\u3001\u4E2A\u4EBA\u7F51\u7AD9\u7B49\u5B57\u6BB5\u6821\u9A8C\u7ED3\u679C');
};
<\/script>

<style scoped>
.demo-select-base {
  width: 300px;
}
</style>
`,C=`<template>
  <t-space direction="vertical" size="32px">
    <!-- \u53EF\u4EE5\u4F7F\u7528\u5168\u5C40 ConfigProvider errorMessage \u914D\u7F6E\u89C4\u5219\u6821\u9A8C\u7ED3\u679C\u63CF\u8FF0\uFF0C\u800C\u65E0\u9700\u7ED9\u6BCF\u4E00\u4E2A\u8868\u5355\u90FD\u914D\u7F6E\u6821\u9A8C\u4FE1\u606F -->

    <t-radio-group v-model="errorConfig" variant="default-filled">
      <t-radio-button value="default">
        <t-popup content="Form.errorMessage \u4E3A\u7A7A\uFF0C\u4F7F\u7528\u7EC4\u4EF6\u5185\u7F6E\u6821\u9A8C\u4FE1\u606F\u3002\u91CD\u7F6E\u540E\uFF0C\u70B9\u51FB\u63D0\u4EA4\u89C2\u5BDF\u6821\u9A8C\u7ED3\u679C\u4FE1\u606F">
          \u4F7F\u7528\u8868\u5355\u9ED8\u8BA4\u6821\u9A8C\u4FE1\u606F
        </t-popup>
      </t-radio-button>
      <t-radio-button value="config">
        <t-popup content="\u7EDF\u4E00\u914D\u7F6E Form.errorMessage\uFF0C\u4F7F\u7528\u81EA\u5B9A\u4E49\u914D\u7F6E\u7684\u6821\u9A8C\u4FE1\u606F\u3002\u91CD\u7F6E\u540E\uFF0C\u70B9\u51FB\u63D0\u4EA4\u89C2\u5BDF\u6821\u9A8C\u7ED3\u679C\u4FE1\u606F">
          \u8868\u5355\u7EDF\u4E00\u914D\u7F6E\u6821\u9A8C\u4FE1\u606F
        </t-popup>
      </t-radio-button>
    </t-radio-group>

    <!-- error-message \u975E\u5FC5\u9700 -->
    <t-form
      :data="formData"
      :rules="rules"
      :error-message="errorConfig === 'default' ? undefined : errorMessage"
      ref="form"
      @reset="onReset"
      @submit="onSubmit"
      scrollToFirstError="smooth"
    >
      <!-- !!!\u6CE8\u610F\uFF1A\u5F53 FormItem \u7684 label \u5C5E\u6027\u4E3A Function \u65F6\uFF0CerrorMessage \u6A21\u677F\u4E2D\u7684 \${name} \u4F1A\u88AB\u66FF\u6362\u4E3A FormItem.name \u5C5E\u6027\u503C -->
      <t-form-item :label="renderAccountLabel" help="\u8FD9\u91CC\u53EF\u4EE5\u5C55\u793A\u4E00\u6BB5\u8BF4\u660E\u6587\u5B57" name="account">
        <t-input v-model="formData.account" placeholder="\u8BF7\u8F93\u5165\u7528\u6237\u540D"></t-input>
      </t-form-item>
      <t-form-item label="\u4E2A\u4EBA\u7B80\u4ECB" help="\u4E00\u53E5\u8BDD\u4ECB\u7ECD\u81EA\u5DF1" name="description">
        <t-input v-model="formData.description" placeholder="\u8BF7\u8F93\u5165\u4E2A\u4EBA\u7B80\u4ECB"></t-input>
      </t-form-item>
      <t-form-item label="\u5BC6\u7801" name="password">
        <t-input type="password" v-model="formData.password" placeholder="\u8BF7\u8F93\u5165\u5BC6\u7801"></t-input>
      </t-form-item>
      <t-form-item label="\u90AE\u7BB1" name="email">
        <t-input v-model="formData.email" placeholder="\u8BF7\u8F93\u5165\u90AE\u7BB1"></t-input>
      </t-form-item>
      <t-form-item label="\u6027\u522B" name="gender">
        <t-radio-group v-model="formData.gender">
          <t-radio value="male">\u7537</t-radio>
          <t-radio value="female">\u5973</t-radio>
        </t-radio-group>
      </t-form-item>
      <t-form-item label="\u8BFE\u7A0B" name="course">
        <t-checkbox-group v-model="formData.course" :options="courseOptions"></t-checkbox-group>
      </t-form-item>
      <t-form-item label="\u5B66\u9662" name="college">
        <t-select v-model="formData.college" class="demo-select-base" clearable placeholder="\u8BF7\u9009\u62E9\u6240\u5728\u5B66\u9662">
          <t-option v-for="(item, index) in options" :value="item.value" :label="item.label" :key="index">
            {{ item.label }}
          </t-option>
        </t-select>
      </t-form-item>
      <t-form-item
        label="\u5165\u5B66\u65F6\u95F4"
        name="date"
        :rules="[{ date: { delimiters: ['/', '-', '.'] }, message: '\u65E5\u671F\u683C\u5F0F\u6709\u8BEF' }]"
      >
        <t-input v-model="formData.date" placeholder="\u8BF7\u8F93\u5165\u5165\u5B66\u65F6\u95F4"></t-input>
      </t-form-item>
      <t-form-item label="\u4E2A\u4EBA\u7F51\u7AD9" name="content.url">
        <t-input v-model="formData.content.url" placeholder="\u8BF7\u8F93\u5165\u4E2A\u4EBA\u7F51\u7AD9\u5730\u5740"></t-input>
      </t-form-item>
      <t-form-item style="margin-left: 100px">
        <t-space size="10px">
          <t-button theme="primary" type="submit">\u63D0\u4EA4</t-button>
          <t-button theme="default" variant="base" type="reset">\u91CD\u7F6E</t-button>
          <t-button theme="default" variant="base" @click="handleClear">\u6E05\u7A7A\u6821\u9A8C\u7ED3\u679C</t-button>
        </t-space>
      </t-form-item>
    </t-form>
  </t-space>
</template>
<script>
/* eslint-disable no-template-curly-in-string */
const INITIAL_DATA = {
  account: '',
  password: '',
  description: '',
  email: '',
  gender: '',
  college: '',
  date: '',
  content: {
    url: '',
  },
  course: [],
};
export default {
  data() {
    return {
      errorConfig: 'default',
      formData: { ...INITIAL_DATA },
      courseOptions: [
        { label: '\u8BED\u6587', value: '1' },
        { label: '\u6570\u5B66', value: '2' },
        { label: '\u82F1\u8BED', value: '3' },
        { label: '\u4F53\u80B2', value: '4' },
      ],
      options: [
        { label: '\u8BA1\u7B97\u673A\u5B66\u9662', value: '1' },
        { label: '\u8F6F\u4EF6\u5B66\u9662', value: '2' },
        { label: '\u7269\u8054\u7F51\u5B66\u9662', value: '3' },
      ],
      errorMessage: {
        date: '\${name}\u4E0D\u6B63\u786E',
        url: '\${name}\u4E0D\u6B63\u786E',
        required: '\u8BF7\u8F93\u5165\${name}',
        max: '\${name}\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u8D85\u8FC7 \${validate} \u4E2A\u5B57\u7B26\uFF0C\u4E00\u4E2A\u4E2D\u6587\u7B49\u4E8E\u4E24\u4E2A\u5B57\u7B26',
        min: '\${name}\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5C11\u4E8E \${validate} \u4E2A\u5B57\u7B26\uFF0C\u4E00\u4E2A\u4E2D\u6587\u7B49\u4E8E\u4E24\u4E2A\u5B57\u7B26',
        len: '\${name}\u5B57\u7B26\u957F\u5EA6\u5FC5\u987B\u662F \${validate}',
        pattern: '\${name}\u4E0D\u6B63\u786E',
        validator: '\${name}\u6709\u8BEF',
      },
      rules: {
        account: [
          { required: true },
          // { enum: ['sheep', 'name'] },
          { min: 2 },
          { max: 10, type: 'warning' },
        ],
        description: [
          { validator: (val) => val.length >= 5 },
          { validator: (val) => val.length < 10, message: '\u4E0D\u80FD\u8D85\u8FC7 20 \u4E2A\u5B57\uFF0C\u4E2D\u6587\u957F\u5EA6\u7B49\u4E8E\u82F1\u6587\u957F\u5EA6' },
        ],
        password: [
          { required: true },
          { len: 8, message: '\u8BF7\u8F93\u5165 8 \u4F4D\u5BC6\u7801' },
          { pattern: /[A-Z]+/, message: '\u5BC6\u7801\u5FC5\u987B\u5305\u542B\u5927\u5199\u5B57\u6BCD' },
        ],
        email: [{ required: true }, { email: { ignore_max_length: true } }],
        gender: [{ required: true }],
        course: [
          { required: true },
          { validator: (val) => val.length <= 2, message: '\u6700\u591A\u9009\u62E9 2 \u95E8\u8BFE\u7A0B', type: 'warning' },
        ],
        'content.url': [
          { required: true },
          {
            url: {
              protocols: ['http', 'https', 'ftp'],
              require_protocol: true,
            },
          },
        ],
      },
    };
  },

  methods: {
    renderAccountLabel() {
      return '\u7528\u6237\u540D';
    },
    onReset() {
      this.$message.success('\u91CD\u7F6E\u6210\u529F');
    },
    onSubmit({ validateResult, firstError }) {
      if (validateResult === true) {
        this.$message.success('\u63D0\u4EA4\u6210\u529F');
      } else {
        console.log('Errors: ', validateResult);
        this.$message.warning(firstError);
      }
    },
    handleClear() {
      this.$refs.form.clearValidate();
    },
  },
};
<\/script>

<style scoped>
.demo-select-base {
  width: 300px;
}
</style>
`,M=`<template>
  <t-space direction="vertical" size="32px">
    <!-- \u53EF\u4EE5\u4F7F\u7528\u5168\u5C40 ConfigProvider errorMessage \u914D\u7F6E\u89C4\u5219\u6821\u9A8C\u7ED3\u679C\u63CF\u8FF0\uFF0C\u800C\u65E0\u9700\u7ED9\u6BCF\u4E00\u4E2A\u8868\u5355\u90FD\u914D\u7F6E\u6821\u9A8C\u4FE1\u606F -->

    <t-radio-group v-model="errorConfig" variant="default-filled">
      <t-radio-button value="default">
        <t-popup content="Form.errorMessage \u4E3A\u7A7A\uFF0C\u4F7F\u7528\u7EC4\u4EF6\u5185\u7F6E\u6821\u9A8C\u4FE1\u606F\u3002\u91CD\u7F6E\u540E\uFF0C\u70B9\u51FB\u63D0\u4EA4\u89C2\u5BDF\u6821\u9A8C\u7ED3\u679C\u4FE1\u606F">
          \u4F7F\u7528\u8868\u5355\u9ED8\u8BA4\u6821\u9A8C\u4FE1\u606F
        </t-popup>
      </t-radio-button>
      <t-radio-button value="config">
        <t-popup content="\u7EDF\u4E00\u914D\u7F6E Form.errorMessage\uFF0C\u4F7F\u7528\u81EA\u5B9A\u4E49\u914D\u7F6E\u7684\u6821\u9A8C\u4FE1\u606F\u3002\u91CD\u7F6E\u540E\uFF0C\u70B9\u51FB\u63D0\u4EA4\u89C2\u5BDF\u6821\u9A8C\u7ED3\u679C\u4FE1\u606F">
          \u8868\u5355\u7EDF\u4E00\u914D\u7F6E\u6821\u9A8C\u4FE1\u606F
        </t-popup>
      </t-radio-button>
    </t-radio-group>

    <!-- error-message \u975E\u5FC5\u9700 -->
    <t-form
      :data="formData"
      :rules="rules"
      :error-message="errorConfig === 'default' ? undefined : errorMessage"
      ref="form"
      @reset="onReset"
      @submit="onSubmit"
      scrollToFirstError="smooth"
    >
      <!-- !!!\u6CE8\u610F\uFF1A\u5F53 FormItem \u7684 label \u5C5E\u6027\u4E3A Function \u65F6\uFF0CerrorMessage \u6A21\u677F\u4E2D\u7684 \${name} \u4F1A\u88AB\u66FF\u6362\u4E3A FormItem.name \u5C5E\u6027\u503C -->
      <t-form-item :label="renderAccountLabel" help="\u8FD9\u91CC\u53EF\u4EE5\u5C55\u793A\u4E00\u6BB5\u8BF4\u660E\u6587\u5B57" name="account">
        <t-input v-model="formData.account" placeholder="\u8BF7\u8F93\u5165\u7528\u6237\u540D"></t-input>
      </t-form-item>
      <t-form-item label="\u4E2A\u4EBA\u7B80\u4ECB" help="\u4E00\u53E5\u8BDD\u4ECB\u7ECD\u81EA\u5DF1" name="description">
        <t-input v-model="formData.description" placeholder="\u8BF7\u8F93\u5165\u4E2A\u4EBA\u7B80\u4ECB"></t-input>
      </t-form-item>
      <t-form-item label="\u5BC6\u7801" name="password">
        <t-input type="password" v-model="formData.password" placeholder="\u8BF7\u8F93\u5165\u5BC6\u7801"></t-input>
      </t-form-item>
      <t-form-item label="\u90AE\u7BB1" name="email">
        <t-input v-model="formData.email" placeholder="\u8BF7\u8F93\u5165\u90AE\u7BB1"></t-input>
      </t-form-item>
      <t-form-item label="\u6027\u522B" name="gender">
        <t-radio-group v-model="formData.gender">
          <t-radio value="male">\u7537</t-radio>
          <t-radio value="female">\u5973</t-radio>
        </t-radio-group>
      </t-form-item>
      <t-form-item label="\u8BFE\u7A0B" name="course">
        <t-checkbox-group v-model="formData.course" :options="courseOptions"></t-checkbox-group>
      </t-form-item>
      <t-form-item label="\u5B66\u9662" name="college">
        <t-select v-model="formData.college" class="demo-select-base" clearable placeholder="\u8BF7\u9009\u62E9\u6240\u5728\u5B66\u9662">
          <t-option v-for="(item, index) in options" :value="item.value" :label="item.label" :key="index">
            {{ item.label }}
          </t-option>
        </t-select>
      </t-form-item>
      <t-form-item
        label="\u5165\u5B66\u65F6\u95F4"
        name="date"
        :rules="[{ date: { delimiters: ['/', '-', '.'] }, message: '\u65E5\u671F\u683C\u5F0F\u6709\u8BEF' }]"
      >
        <t-input v-model="formData.date" placeholder="\u8BF7\u8F93\u5165\u5165\u5B66\u65F6\u95F4"></t-input>
      </t-form-item>
      <t-form-item label="\u4E2A\u4EBA\u7F51\u7AD9" name="content.url">
        <t-input v-model="formData.content.url" placeholder="\u8BF7\u8F93\u5165\u4E2A\u4EBA\u7F51\u7AD9\u5730\u5740"></t-input>
      </t-form-item>
      <t-form-item style="margin-left: 100px">
        <t-space size="10px">
          <t-button theme="primary" type="submit">\u63D0\u4EA4</t-button>
          <t-button theme="default" variant="base" type="reset">\u91CD\u7F6E</t-button>
          <t-button theme="default" variant="base" @click="handleClear">\u6E05\u7A7A\u6821\u9A8C\u7ED3\u679C</t-button>
        </t-space>
      </t-form-item>
    </t-form>
  </t-space>
</template>
<script setup>
import { MessagePlugin } from 'tdesign-vue';
import { ref, reactive } from 'vue';
/* eslint-disable no-template-curly-in-string */
const INITIAL_DATA = {
  account: '',
  password: '',
  description: '',
  email: '',
  gender: '',
  college: '',
  date: '',
  content: {
    url: '',
  },
  course: [],
};
const form = ref();
const errorConfig = ref('default');
const formData = reactive({
  ...INITIAL_DATA,
});
const courseOptions = ref([
  {
    label: '\u8BED\u6587',
    value: '1',
  },
  {
    label: '\u6570\u5B66',
    value: '2',
  },
  {
    label: '\u82F1\u8BED',
    value: '3',
  },
  {
    label: '\u4F53\u80B2',
    value: '4',
  },
]);
const options = ref([
  {
    label: '\u8BA1\u7B97\u673A\u5B66\u9662',
    value: '1',
  },
  {
    label: '\u8F6F\u4EF6\u5B66\u9662',
    value: '2',
  },
  {
    label: '\u7269\u8054\u7F51\u5B66\u9662',
    value: '3',
  },
]);
const errorMessage = reactive({
  date: '\${name}\u4E0D\u6B63\u786E',
  url: '\${name}\u4E0D\u6B63\u786E',
  required: '\u8BF7\u8F93\u5165\${name}',
  max: '\${name}\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u8D85\u8FC7 \${validate} \u4E2A\u5B57\u7B26\uFF0C\u4E00\u4E2A\u4E2D\u6587\u7B49\u4E8E\u4E24\u4E2A\u5B57\u7B26',
  min: '\${name}\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5C11\u4E8E \${validate} \u4E2A\u5B57\u7B26\uFF0C\u4E00\u4E2A\u4E2D\u6587\u7B49\u4E8E\u4E24\u4E2A\u5B57\u7B26',
  len: '\${name}\u5B57\u7B26\u957F\u5EA6\u5FC5\u987B\u662F \${validate}',
  pattern: '\${name}\u4E0D\u6B63\u786E',
  validator: '\${name}\u6709\u8BEF',
});
const rules = reactive({
  account: [
    {
      required: true,
    },
    // { enum: ['sheep', 'name'] },
    {
      min: 2,
    },
    {
      max: 10,
      type: 'warning',
    },
  ],
  description: [
    {
      validator: (val) => val.length >= 5,
    },
    {
      validator: (val) => val.length < 10,
      message: '\u4E0D\u80FD\u8D85\u8FC7 20 \u4E2A\u5B57\uFF0C\u4E2D\u6587\u957F\u5EA6\u7B49\u4E8E\u82F1\u6587\u957F\u5EA6',
    },
  ],
  password: [
    {
      required: true,
    },
    {
      len: 8,
      message: '\u8BF7\u8F93\u5165 8 \u4F4D\u5BC6\u7801',
    },
    {
      pattern: /[A-Z]+/,
      message: '\u5BC6\u7801\u5FC5\u987B\u5305\u542B\u5927\u5199\u5B57\u6BCD',
    },
  ],
  email: [
    {
      required: true,
    },
    {
      email: {
        ignore_max_length: true,
      },
    },
  ],
  gender: [
    {
      required: true,
    },
  ],
  course: [
    {
      required: true,
    },
    {
      validator: (val) => val.length <= 2,
      message: '\u6700\u591A\u9009\u62E9 2 \u95E8\u8BFE\u7A0B',
      type: 'warning',
    },
  ],
  'content.url': [
    {
      required: true,
    },
    {
      url: {
        protocols: ['http', 'https', 'ftp'],
        require_protocol: true,
      },
    },
  ],
});
const renderAccountLabel = () => '\u7528\u6237\u540D';
const onReset = () => {
  MessagePlugin.success('\u91CD\u7F6E\u6210\u529F');
};
const onSubmit = ({ validateResult, firstError }) => {
  if (validateResult === true) {
    MessagePlugin.success('\u63D0\u4EA4\u6210\u529F');
  } else {
    console.log('Errors: ', validateResult);
    MessagePlugin.warning(firstError);
  }
};
const handleClear = () => {
  form.value.clearValidate();
};
<\/script>

<style scoped>
.demo-select-base {
  width: 300px;
}
</style>
`,L=`<template>
  <t-form
    :data="formData"
    :rules="rules"
    resetType="initial"
    ref="form"
    style="max-width: 100%"
    @reset="onReset"
    @submit="onSubmit"
  >
    <t-form-item label="\u5B66\u6821" name="school">
      <t-radio-group v-model="formData.school" :options="SCHOOL_OPTIONS" />
    </t-form-item>
    <t-tabs
      v-model="studentTab"
      theme="card"
      addable
      @add="onAddStudent"
      style="margin-left: 30px; border: 1px solid var(--td-component-stroke)"
    >
      <t-tab-panel
        v-for="(student, index) in formData.students"
        :key="student.id"
        :value="student.id"
        :label="student.label"
        :destroyOnHide="false"
      >
        <t-space direction="vertical" size="24px" style="padding: 24px 24px 24px 0">
          <!-- \u91CD\u70B9\u9605\u8BFB\uFF1A\u6570\u7EC4\u91CC\u9762\uFF0C\u6CE8\u610F name \u5B9A\u4E49\uFF0C\u7528\u4E8E\u533A\u5206\u4E0D\u540C\u7684\u5B57\u6BB5 -->
          <t-form-item label="\u59D3\u540D" :name="\`students[\${index}].name\`" :label-width="80">
            <t-input v-model="formData.students[index].name" placeholder="\u8BF7\u8F93\u5165\u59D3\u540D"></t-input>
          </t-form-item>

          <t-form-item label="\u9009\u79D1" :name="\`students[\${index}].courseType\`" :label-width="80">
            <t-radio-group v-model="formData.students[index].courseType">
              <t-radio value="wenke">\u6587\u79D1</t-radio>
              <t-radio value="like">\u7406\u79D1</t-radio>
            </t-radio-group>
          </t-form-item>

          <t-form-item label="\u8BFE\u7A0B" :name="\`students[\${index}].course\`" :label-width="80">
            <t-checkbox-group v-model="formData.students[index].course" :options="courseOptions"></t-checkbox-group>
          </t-form-item>

          <t-form-item style="margin-left: 100px" :label-width="80">
            <t-space size="10px">
              <t-button theme="primary" type="submit">\u63D0\u4EA4</t-button>
              <t-button theme="default" variant="base" type="reset">\u91CD\u7F6E</t-button>
            </t-space>
          </t-form-item>
        </t-space>
      </t-tab-panel>
    </t-tabs>
  </t-form>
</template>

<script>
let id = 0;
function getId() {
  id += 1;
  return id;
}

const INITIAL_DATA = {
  school: 1,
  students: [
    {
      id: getId(),
      label: '\u5B66\u751F1',
      name: 'Student A',
      courseType: 'wenke',
      course: ['1'],
    },
    {
      id: getId(),
      label: '\u5B66\u751F2',
      name: 'Student B',
      courseType: 'wenke',
      course: [],
    },
  ],
};

const COURSE_OPTIONS = [
  { label: '\u5168\u90E8', checkAll: true },
  { label: '\u8BED\u6587', value: '1', courseTypes: ['wenke', 'like'] },
  { label: '\u6570\u5B66', value: '2', courseTypes: ['wenke', 'like'] },
  { label: '\u7269\u7406', value: '3', courseTypes: ['like'] },
  { label: '\u5316\u5B66', value: '4', courseTypes: ['like'] },
  { label: '\u5730\u7406', value: '5', courseTypes: ['wenke'] },
  { label: '\u5386\u53F2', value: '6', courseTypes: ['wenke'] },
];

const SCHOOL_OPTIONS = [
  { label: '\u5B66\u6821\u4E00', value: 1 },
  { label: '\u5B66\u6821\u4E8C', value: 2 },
  { label: '\u5B66\u6821\u4E09', value: 3 },
];

export default {
  data() {
    return {
      studentTab: 1,
      formData: { ...INITIAL_DATA },
      SCHOOL_OPTIONS,
      // courseOptions: COURSE_OPTIONS,
      rules: {
        school: [{ required: true, message: '\u5B66\u6821\u5FC5\u586B' }],
        name: [{ required: true, message: '\u7528\u6237\u540D\u5FC5\u586B' }],
        courseType: [{ required: true, message: '\u9009\u79D1\u5FC5\u586B' }],
        course: [{ required: true, message: '\u8BFE\u7A0B\u5FC5\u586B' }],
      },
    };
  },

  computed: {
    courseOptions() {
      return COURSE_OPTIONS.filter((item) => {
        if (!this.formData.courseType || !item.courseTypes) return true;
        return item.courseTypes.includes(this.formData.courseType);
      });
    },
  },

  watch: {
    'formData.courseType': function () {
      this.formData.course = [];
    },
  },

  methods: {
    // \u91CD\u7F6E\u65B9\u6CD5\uFF1Athis.$refs.reset()
    onReset() {
      this.$message.success('\u91CD\u7F6E\u6210\u529F');
    },
    // \u63D0\u4EA4\u65B9\u6CD5\uFF1Athis.$refs.submit()
    onSubmit({ validateResult, firstError }) {
      if (validateResult === true) {
        this.$message.success('\u63D0\u4EA4\u6210\u529F');
      } else {
        console.log('Errors: ', validateResult);
        this.$message.warning(firstError);
        // \u5224\u65AD\u9519\u8BEF\u5728\u7B2C\u51E0\u4E2A Tab\uFF0C\u800C\u540E\u81EA\u52A8\u5207\u6362\u5230\u7B2C\u51E0\u4E2A
        for (let i = 0, len = this.formData.students.length; i < len; i++) {
          const item = this.formData.students[i];
          const keys = Object.keys(item).map((key) => \`students[\${i}].\${key}\`);
          // \u6570\u7EC4\u6570\u636E key \u5728 validateResult \u4E2D\u5B58\u5728\uFF0C\u5219\u8868\u793A\u6821\u9A8C\u4E0D\u901A\u8FC7
          const isInvalid = keys.find((key) => validateResult[key]);
          if (isInvalid) {
            this.studentTab = item.id;
            return;
          }
        }
      }
    },
    onAddStudent() {
      const id = getId();
      this.formData.students.push({
        id,
        label: \`\u5B66\u751F\${id}\`,
        name: '',
        courseType: 'wenke',
        course: [],
        status: false,
      });
      this.studentTab = id;
    },
  },
};
<\/script>
`,V=`<template>
  <t-form
    :data="formData"
    :rules="rules"
    resetType="initial"
    ref="form"
    style="max-width: 100%"
    @reset="onReset"
    @submit="onSubmit"
  >
    <t-form-item label="\u5B66\u6821" name="school">
      <t-radio-group v-model="formData.school" :options="SCHOOL_OPTIONS" />
    </t-form-item>
    <t-tabs
      v-model="studentTab"
      theme="card"
      addable
      @add="onAddStudent"
      style="margin-left: 30px; border: 1px solid var(--td-component-stroke)"
    >
      <t-tab-panel
        v-for="(student, index) in formData.students"
        :key="student.id"
        :value="student.id"
        :label="student.label"
        :destroyOnHide="false"
      >
        <t-space direction="vertical" size="24px" style="padding: 24px 24px 24px 0">
          <!-- \u91CD\u70B9\u9605\u8BFB\uFF1A\u6570\u7EC4\u91CC\u9762\uFF0C\u6CE8\u610F name \u5B9A\u4E49\uFF0C\u7528\u4E8E\u533A\u5206\u4E0D\u540C\u7684\u5B57\u6BB5 -->
          <t-form-item label="\u59D3\u540D" :name="\`students[\${index}].name\`" :label-width="80">
            <t-input v-model="formData.students[index].name" placeholder="\u8BF7\u8F93\u5165\u59D3\u540D"></t-input>
          </t-form-item>

          <t-form-item label="\u9009\u79D1" :name="\`students[\${index}].courseType\`" :label-width="80">
            <t-radio-group v-model="formData.students[index].courseType">
              <t-radio value="wenke">\u6587\u79D1</t-radio>
              <t-radio value="like">\u7406\u79D1</t-radio>
            </t-radio-group>
          </t-form-item>

          <t-form-item label="\u8BFE\u7A0B" :name="\`students[\${index}].course\`" :label-width="80">
            <t-checkbox-group v-model="formData.students[index].course" :options="courseOptions"></t-checkbox-group>
          </t-form-item>

          <t-form-item style="margin-left: 100px" :label-width="80">
            <t-space size="10px">
              <t-button theme="primary" type="submit">\u63D0\u4EA4</t-button>
              <t-button theme="default" variant="base" type="reset">\u91CD\u7F6E</t-button>
            </t-space>
          </t-form-item>
        </t-space>
      </t-tab-panel>
    </t-tabs>
  </t-form>
</template>

<script setup>
import { MessagePlugin } from 'tdesign-vue';
import {
  ref, reactive, computed, watch,
} from 'vue';

let id = 0;
function getId() {
  id += 1;
  return id;
}
const INITIAL_DATA = {
  school: 1,
  students: [
    {
      id: getId(),
      label: '\u5B66\u751F1',
      name: 'Student A',
      courseType: 'wenke',
      course: ['1'],
    },
    {
      id: getId(),
      label: '\u5B66\u751F2',
      name: 'Student B',
      courseType: 'wenke',
      course: [],
    },
  ],
};
const COURSE_OPTIONS = [
  {
    label: '\u5168\u90E8',
    checkAll: true,
  },
  {
    label: '\u8BED\u6587',
    value: '1',
    courseTypes: ['wenke', 'like'],
  },
  {
    label: '\u6570\u5B66',
    value: '2',
    courseTypes: ['wenke', 'like'],
  },
  {
    label: '\u7269\u7406',
    value: '3',
    courseTypes: ['like'],
  },
  {
    label: '\u5316\u5B66',
    value: '4',
    courseTypes: ['like'],
  },
  {
    label: '\u5730\u7406',
    value: '5',
    courseTypes: ['wenke'],
  },
  {
    label: '\u5386\u53F2',
    value: '6',
    courseTypes: ['wenke'],
  },
];
const SCHOOL_OPTIONS = [
  {
    label: '\u5B66\u6821\u4E00',
    value: 1,
  },
  {
    label: '\u5B66\u6821\u4E8C',
    value: 2,
  },
  {
    label: '\u5B66\u6821\u4E09',
    value: 3,
  },
];
const studentTab = ref(1);
const formData = reactive({
  ...INITIAL_DATA,
});
// courseOptions: COURSE_OPTIONS,
const rules = reactive({
  school: [
    {
      required: true,
      message: '\u5B66\u6821\u5FC5\u586B',
    },
  ],
  name: [
    {
      required: true,
      message: '\u7528\u6237\u540D\u5FC5\u586B',
    },
  ],
  courseType: [
    {
      required: true,
      message: '\u9009\u79D1\u5FC5\u586B',
    },
  ],
  course: [
    {
      required: true,
      message: '\u8BFE\u7A0B\u5FC5\u586B',
    },
  ],
});
const courseOptions = computed(() => COURSE_OPTIONS.filter((item) => {
  if (!formData.courseType || !item.courseTypes) return true;
  return item.courseTypes.includes(formData.courseType);
}));
// \u91CD\u7F6E\u65B9\u6CD5\uFF1Athis.$refs.reset()
const onReset = () => {
  MessagePlugin.success('\u91CD\u7F6E\u6210\u529F');
};
// \u63D0\u4EA4\u65B9\u6CD5\uFF1Athis.$refs.submit()
const onSubmit = ({ validateResult, firstError }) => {
  if (validateResult === true) {
    MessagePlugin.success('\u63D0\u4EA4\u6210\u529F');
  } else {
    console.log('Errors: ', validateResult);
    MessagePlugin.warning(firstError);
    // \u5224\u65AD\u9519\u8BEF\u5728\u7B2C\u51E0\u4E2A Tab\uFF0C\u800C\u540E\u81EA\u52A8\u5207\u6362\u5230\u7B2C\u51E0\u4E2A
    for (let i = 0, len = formData.students.length; i < len; i++) {
      const item = formData.students[i];
      const keys = Object.keys(item).map((key) => \`students[\${i}].\${key}\`);
      // \u6570\u7EC4\u6570\u636E key \u5728 validateResult \u4E2D\u5B58\u5728\uFF0C\u5219\u8868\u793A\u6821\u9A8C\u4E0D\u901A\u8FC7
      const isInvalid = keys.find((key) => validateResult[key]);
      if (isInvalid) {
        studentTab.value = item.id;
        return;
      }
    }
  }
};
const onAddStudent = () => {
  const id = getId();
  formData.students.push({
    id,
    label: \`\u5B66\u751F\${id}\`,
    name: '',
    courseType: 'wenke',
    course: [],
    status: false,
  });
  studentTab.value = id;
};
watch(
  () => formData.courseType,
  () => {
    formData.course = [];
  },
);
<\/script>
`,z=`<template>
  <t-space direction="vertical" size="32px">
    <t-space style="margin-left: 36px">
      <t-checkbox v-model="formDisabled" variant="default-filled"> \u662F\u5426\u7981\u7528\u8868\u5355 </t-checkbox>
    </t-space>

    <t-form
      :data="formData"
      ref="form"
      resetType="initial"
      :disabled="formDisabled"
      colon
      @reset="onReset"
      @submit="onSubmit"
    >
      <t-form-item label="\u59D3\u540D" name="name">
        <t-input v-model="formData.name" @enter="onEnter" placeholder="\u8BF7\u8F93\u5165\u59D3\u540D"></t-input>
      </t-form-item>
      <t-form-item label="\u5B66\u9662" name="college">
        <t-select
          v-model="formData.college"
          :options="COLLEGE_OPTIONS"
          clearable
          placeholder="\u8BF7\u9009\u62E9\u6240\u5728\u5B66\u9662"
        ></t-select>
      </t-form-item>
      <t-form-item label="\u5BC4\u4EF6\u5730\u5740" name="address1">
        <t-tree-select v-model="formData.address1" :data="ADDRESS_OPTIONS" clearable placeholder="\u8BF7\u9009\u62E9\u5BC4\u4EF6\u5730\u5740" />
      </t-form-item>
      <t-form-item label="\u6536\u4EF6\u5730\u5740" name="address2">
        <t-cascader v-model="formData.address2" :options="ADDRESS_OPTIONS" clearable placeholder="\u8BF7\u9009\u62E9\u6536\u4EF6\u5730\u5740" />
      </t-form-item>
      <t-form-item label="\u65E5\u671F" name="date">
        <t-date-picker v-model="formData.date" mode="date" clearable placeholder="\u8BF7\u9009\u62E9\u65E5\u671F" />
      </t-form-item>
      <t-form-item label="\u4E2A\u4EBA\u7B80\u4ECB" name="personalProfile">
        <t-textarea v-model="formData.personalProfile" placeholder="\u8BF7\u7528\u4E00\u53E5\u8BDD\u4ECB\u7ECD\u81EA\u5DF1" clearable />
      </t-form-item>
      <t-form-item label="\u77ED\u4FE1" name="message">
        <t-switch v-model="formData.message" :label="['\u63A5\u53D7', '\u4E0D\u63A5']"></t-switch>
      </t-form-item>
      <t-form-item label="\u6027\u522B" name="gender">
        <t-radio-group v-model="formData.gender">
          <t-radio value="1">\u7537</t-radio>
          <t-radio value="2">\u5973</t-radio>
        </t-radio-group>
      </t-form-item>
      <t-form-item label="\u8BFE\u7A0B" name="course">
        <t-checkbox-group v-model="formData.course" :options="courseOptions" />
      </t-form-item>
      <t-form-item label="\u7EE9\u70B9" name="gradePoint">
        <t-input-number v-model="formData.gradePoint" placeholder="\u5206\u6570\u503C" />
      </t-form-item>
      <t-form-item label="\u5934\u50CF" name="avatar">
        <t-upload
          action="https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"
          v-model="formData.avatar"
          theme="image"
          tips="\u8BF7\u9009\u62E9\u5355\u5F20\u56FE\u7247\u6587\u4EF6\u4E0A\u4F20"
          accept="image/*"
        ></t-upload>
      </t-form-item>
      <t-form-item style="margin-left: 100px">
        <t-space size="10px">
          <t-button theme="primary" type="submit">\u63D0\u4EA4</t-button>
          <t-button theme="default" variant="base" type="reset">\u91CD\u7F6E</t-button>
        </t-space>
      </t-form-item>
    </t-form>
  </t-space>
</template>
<script>
const INITIAL_DATA = {
  name: '',
  message: true,
  gender: '',
  course: [],
  college: '',
  personalProfile: '',
  address1: undefined,
  address2: undefined,
  gradePoint: undefined,
  date: '',
  avatar: [{ url: 'https://tdesign.gtimg.com/site/avatar.jpg' }],
};

const COLLEGE_OPTIONS = [
  { label: '\u5B66\u9662 A', value: 1 },
  { label: '\u5B66\u9662 B', value: 2 },
  { label: '\u5B66\u9662 C', value: 3 },
];

const ADDRESS_OPTIONS = [
  { label: '\u6C5F\u82CF', value: 1, children: [{ label: '\u5357\u4EAC\u5E02', value: 300 }] },
  { label: '\u4E0A\u6D77', value: 2, children: [{ label: '\u5F90\u6C47\u533A', value: 400 }] },
  { label: '\u56DB\u5DDD', value: 3, children: [{ label: '\u6210\u90FD\u5E02', value: 500 }] },
];

export default {
  data() {
    return {
      formDisabled: true,
      formData: { ...INITIAL_DATA },
      COLLEGE_OPTIONS,
      ADDRESS_OPTIONS,
      courseOptions: [
        { label: '\u8BED\u6587', value: '1' },
        { label: '\u6570\u5B66', value: '2' },
        { label: '\u82F1\u8BED', value: '3' },
      ],
    };
  },

  methods: {
    // \u91CD\u7F6E\u65B9\u6CD5\uFF1Athis.$refs.reset()
    onReset() {
      this.$message.success('\u91CD\u7F6E\u6210\u529F');
    },
    // \u63D0\u4EA4\u65B9\u6CD5\uFF1Athis.$refs.submit()
    onSubmit({ validateResult, firstError }) {
      if (validateResult === true) {
        this.$message.success('\u63D0\u4EA4\u6210\u529F');
      } else {
        console.log('Errors: ', validateResult);
        this.$message.warning(firstError);
      }
    },
    // \u963B\u6B62\u8868\u5355\u9ED8\u8BA4\u63D0\u4EA4\u4E8B\u4EF6
    onEnter(_, ctx) {
      if (ctx && ctx.e) {
        ctx.e.preventDefault();
      }
    },
  },
};
<\/script>
`,F=`<template>
  <t-space direction="vertical" size="32px">
    <t-space style="margin-left: 36px">
      <t-checkbox v-model="formDisabled" variant="default-filled"> \u662F\u5426\u7981\u7528\u8868\u5355 </t-checkbox>
    </t-space>

    <t-form
      :data="formData"
      ref="form"
      resetType="initial"
      :disabled="formDisabled"
      colon
      @reset="onReset"
      @submit="onSubmit"
    >
      <t-form-item label="\u59D3\u540D" name="name">
        <t-input v-model="formData.name" @enter="onEnter" placeholder="\u8BF7\u8F93\u5165\u59D3\u540D"></t-input>
      </t-form-item>
      <t-form-item label="\u5B66\u9662" name="college">
        <t-select
          v-model="formData.college"
          :options="COLLEGE_OPTIONS"
          clearable
          placeholder="\u8BF7\u9009\u62E9\u6240\u5728\u5B66\u9662"
        ></t-select>
      </t-form-item>
      <t-form-item label="\u5BC4\u4EF6\u5730\u5740" name="address1">
        <t-tree-select v-model="formData.address1" :data="ADDRESS_OPTIONS" clearable placeholder="\u8BF7\u9009\u62E9\u5BC4\u4EF6\u5730\u5740" />
      </t-form-item>
      <t-form-item label="\u6536\u4EF6\u5730\u5740" name="address2">
        <t-cascader v-model="formData.address2" :options="ADDRESS_OPTIONS" clearable placeholder="\u8BF7\u9009\u62E9\u6536\u4EF6\u5730\u5740" />
      </t-form-item>
      <t-form-item label="\u65E5\u671F" name="date">
        <t-date-picker v-model="formData.date" mode="date" clearable placeholder="\u8BF7\u9009\u62E9\u65E5\u671F" />
      </t-form-item>
      <t-form-item label="\u4E2A\u4EBA\u7B80\u4ECB" name="personalProfile">
        <t-textarea v-model="formData.personalProfile" placeholder="\u8BF7\u7528\u4E00\u53E5\u8BDD\u4ECB\u7ECD\u81EA\u5DF1" clearable />
      </t-form-item>
      <t-form-item label="\u77ED\u4FE1" name="message">
        <t-switch v-model="formData.message" :label="['\u63A5\u53D7', '\u4E0D\u63A5']"></t-switch>
      </t-form-item>
      <t-form-item label="\u6027\u522B" name="gender">
        <t-radio-group v-model="formData.gender">
          <t-radio value="1">\u7537</t-radio>
          <t-radio value="2">\u5973</t-radio>
        </t-radio-group>
      </t-form-item>
      <t-form-item label="\u8BFE\u7A0B" name="course">
        <t-checkbox-group v-model="formData.course" :options="courseOptions" />
      </t-form-item>
      <t-form-item label="\u7EE9\u70B9" name="gradePoint">
        <t-input-number v-model="formData.gradePoint" placeholder="\u5206\u6570\u503C" />
      </t-form-item>
      <t-form-item label="\u5934\u50CF" name="avatar">
        <t-upload
          action="https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"
          v-model="formData.avatar"
          theme="image"
          tips="\u8BF7\u9009\u62E9\u5355\u5F20\u56FE\u7247\u6587\u4EF6\u4E0A\u4F20"
          accept="image/*"
        ></t-upload>
      </t-form-item>
      <t-form-item style="margin-left: 100px">
        <t-space size="10px">
          <t-button theme="primary" type="submit">\u63D0\u4EA4</t-button>
          <t-button theme="default" variant="base" type="reset">\u91CD\u7F6E</t-button>
        </t-space>
      </t-form-item>
    </t-form>
  </t-space>
</template>
<script setup>
import { MessagePlugin } from 'tdesign-vue';
import { ref, reactive } from 'vue';

const INITIAL_DATA = {
  name: '',
  message: true,
  gender: '',
  course: [],
  college: '',
  personalProfile: '',
  address1: undefined,
  address2: undefined,
  gradePoint: undefined,
  date: '',
  avatar: [
    {
      url: 'https://tdesign.gtimg.com/site/avatar.jpg',
    },
  ],
};
const COLLEGE_OPTIONS = [
  {
    label: '\u5B66\u9662 A',
    value: 1,
  },
  {
    label: '\u5B66\u9662 B',
    value: 2,
  },
  {
    label: '\u5B66\u9662 C',
    value: 3,
  },
];
const ADDRESS_OPTIONS = [
  {
    label: '\u6C5F\u82CF',
    value: 1,
    children: [
      {
        label: '\u5357\u4EAC\u5E02',
        value: 300,
      },
    ],
  },
  {
    label: '\u4E0A\u6D77',
    value: 2,
    children: [
      {
        label: '\u5F90\u6C47\u533A',
        value: 400,
      },
    ],
  },
  {
    label: '\u56DB\u5DDD',
    value: 3,
    children: [
      {
        label: '\u6210\u90FD\u5E02',
        value: 500,
      },
    ],
  },
];
const formDisabled = ref(true);
const formData = reactive({
  ...INITIAL_DATA,
});
const courseOptions = ref([
  {
    label: '\u8BED\u6587',
    value: '1',
  },
  {
    label: '\u6570\u5B66',
    value: '2',
  },
  {
    label: '\u82F1\u8BED',
    value: '3',
  },
]);
// \u91CD\u7F6E\u65B9\u6CD5\uFF1Athis.$refs.reset()
const onReset = () => {
  MessagePlugin.success('\u91CD\u7F6E\u6210\u529F');
};
// \u63D0\u4EA4\u65B9\u6CD5\uFF1Athis.$refs.submit()
const onSubmit = ({ validateResult, firstError }) => {
  if (validateResult === true) {
    MessagePlugin.success('\u63D0\u4EA4\u6210\u529F');
  } else {
    console.log('Errors: ', validateResult);
    MessagePlugin.warning(firstError);
  }
};
// \u963B\u6B62\u8868\u5355\u9ED8\u8BA4\u63D0\u4EA4\u4E8B\u4EF6
const onEnter = (_, ctx) => {
  if (ctx && ctx.e) {
    ctx.e.preventDefault();
  }
};
<\/script>
`,B=`<template>
  <!-- error-message \u975E\u5FC5\u9700 -->
  <t-form :data="formData" :rules="rules" ref="form" @reset="onReset" @submit="onSubmit" scrollToFirstError="smooth">
    <t-form-item label="\u7528\u6237\u540D" help="\u8FD9\u91CC\u53EF\u4EE5\u5C55\u793A\u4E00\u6BB5\u8BF4\u660E\u6587\u5B57" name="account">
      <t-input v-model="formData.account" placeholder="\u8BF7\u8F93\u5165\u7528\u6237\u540D"></t-input>
    </t-form-item>
    <t-form-item label="\u4E2A\u4EBA\u7B80\u4ECB" help="\u8BF7\u7528\u4E00\u53E5\u8BDD\u4ECB\u7ECD\u81EA\u5DF1" name="description">
      <t-input v-model="formData.description" placeholder="\u8BF7\u8F93\u5165\u4E2A\u4EBA\u7B80\u4ECB"></t-input>
    </t-form-item>
    <t-form-item label="\u5BC6\u7801" name="password">
      <t-input type="password" v-model="formData.password" placeholder="\u8BF7\u8F93\u5165\u5BC6\u7801"></t-input>
    </t-form-item>
    <t-form-item style="margin-left: 100px">
      <t-space size="10px">
        <t-button theme="primary" type="submit">\u63D0\u4EA4</t-button>
        <t-button theme="default" variant="base" type="reset">\u91CD\u7F6E</t-button>
        <t-button theme="default" variant="base" @click="handleValidateMessage">\u8BBE\u7F6E\u6821\u9A8C\u4FE1\u606F\u63D0\u793A</t-button>
      </t-space>
    </t-form-item>
  </t-form>
</template>
<script>
/* eslint-disable no-template-curly-in-string */
const INITIAL_DATA = {
  account: '',
  description: '',
  password: '',
};

const validateMessage = {
  account: [
    {
      type: 'error',
      message: '\u81EA\u5B9A\u4E49\u7528\u6237\u540D\u6821\u9A8C\u4FE1\u606F\u63D0\u793A',
    },
  ],
  description: [
    {
      type: 'warning',
      message: '\u81EA\u5B9A\u4E49\u4E2A\u4EBA\u7B80\u4ECB\u6821\u9A8C\u4FE1\u606F\u63D0\u793A',
    },
  ],
};

export default {
  data() {
    return {
      formData: { ...INITIAL_DATA },
      rules: {
        account: [{ required: true }, { min: 2 }, { max: 10, type: 'warning' }],
        description: [{ validator: (val) => val.length < 10, message: '\u4E0D\u80FD\u8D85\u8FC7 20 \u4E2A\u5B57\uFF0C\u4E2D\u6587\u957F\u5EA6\u7B49\u4E8E\u82F1\u6587\u957F\u5EA6' }],
        password: [{ required: true }, { len: 8, message: '\u8BF7\u8F93\u5165 8 \u4F4D\u5BC6\u7801' }],
      },
    };
  },
  mounted() {
    this.$refs.form.setValidateMessage(validateMessage);
  },
  methods: {
    onReset() {
      this.$message.success('\u91CD\u7F6E\u6210\u529F');
    },
    onSubmit({ validateResult, firstError }) {
      if (validateResult === true) {
        this.$message.success('\u63D0\u4EA4\u6210\u529F');
      } else {
        console.log('Errors: ', validateResult);
        this.$message.warning(firstError);
      }
    },
    handleValidateMessage() {
      this.$message.success('\u8BBE\u7F6E\u8868\u5355\u6821\u9A8C\u4FE1\u606F\u63D0\u793A\u6210\u529F');
      this.$refs.form.setValidateMessage(validateMessage);
    },
  },
};
<\/script>
`,W=`<template>
  <!-- error-message \u975E\u5FC5\u9700 -->
  <t-form :data="formData" :rules="rules" ref="form" @reset="onReset" @submit="onSubmit" scrollToFirstError="smooth">
    <t-form-item label="\u7528\u6237\u540D" help="\u8FD9\u91CC\u53EF\u4EE5\u5C55\u793A\u4E00\u6BB5\u8BF4\u660E\u6587\u5B57" name="account">
      <t-input v-model="formData.account" placeholder="\u8BF7\u8F93\u5165\u7528\u6237\u540D"></t-input>
    </t-form-item>
    <t-form-item label="\u4E2A\u4EBA\u7B80\u4ECB" help="\u8BF7\u7528\u4E00\u53E5\u8BDD\u4ECB\u7ECD\u81EA\u5DF1" name="description">
      <t-input v-model="formData.description" placeholder="\u8BF7\u8F93\u5165\u4E2A\u4EBA\u7B80\u4ECB"></t-input>
    </t-form-item>
    <t-form-item label="\u5BC6\u7801" name="password">
      <t-input type="password" v-model="formData.password" placeholder="\u8BF7\u8F93\u5165\u5BC6\u7801"></t-input>
    </t-form-item>
    <t-form-item style="margin-left: 100px">
      <t-space size="10px">
        <t-button theme="primary" type="submit">\u63D0\u4EA4</t-button>
        <t-button theme="default" variant="base" type="reset">\u91CD\u7F6E</t-button>
        <t-button theme="default" variant="base" @click="handleValidateMessage">\u8BBE\u7F6E\u6821\u9A8C\u4FE1\u606F\u63D0\u793A</t-button>
      </t-space>
    </t-form-item>
  </t-form>
</template>
<script setup>
import { MessagePlugin } from 'tdesign-vue';
import { onMounted, ref, reactive } from 'vue';
/* eslint-disable no-template-curly-in-string */
const INITIAL_DATA = {
  account: '',
  description: '',
  password: '',
};
const validateMessage = {
  account: [
    {
      type: 'error',
      message: '\u81EA\u5B9A\u4E49\u7528\u6237\u540D\u6821\u9A8C\u4FE1\u606F\u63D0\u793A',
    },
  ],
  description: [
    {
      type: 'warning',
      message: '\u81EA\u5B9A\u4E49\u4E2A\u4EBA\u7B80\u4ECB\u6821\u9A8C\u4FE1\u606F\u63D0\u793A',
    },
  ],
};
const form = ref();
const formData = reactive({
  ...INITIAL_DATA,
});
const rules = reactive({
  account: [
    {
      required: true,
    },
    {
      min: 2,
    },
    {
      max: 10,
      type: 'warning',
    },
  ],
  description: [
    {
      validator: (val) => val.length < 10,
      message: '\u4E0D\u80FD\u8D85\u8FC7 20 \u4E2A\u5B57\uFF0C\u4E2D\u6587\u957F\u5EA6\u7B49\u4E8E\u82F1\u6587\u957F\u5EA6',
    },
  ],
  password: [
    {
      required: true,
    },
    {
      len: 8,
      message: '\u8BF7\u8F93\u5165 8 \u4F4D\u5BC6\u7801',
    },
  ],
});
const onReset = () => {
  MessagePlugin.success('\u91CD\u7F6E\u6210\u529F');
};
const onSubmit = ({ validateResult, firstError }) => {
  if (validateResult === true) {
    MessagePlugin.success('\u63D0\u4EA4\u6210\u529F');
  } else {
    console.log('Errors: ', validateResult);
    MessagePlugin.warning(firstError);
  }
};
const handleValidateMessage = () => {
  MessagePlugin.success('\u8BBE\u7F6E\u8868\u5355\u6821\u9A8C\u4FE1\u606F\u63D0\u793A\u6210\u529F');
  form.value.setValidateMessage(validateMessage);
};
onMounted(() => {
  form.value.setValidateMessage(validateMessage);
});
<\/script>
`,f=[{name:"colon",type:"Boolean",defaultValue:!1,options:[]},{name:"disabled",type:"Boolean",defaultValue:!1,options:[]},{name:"labelAlign",type:"enum",defaultValue:"right",options:[{label:"left",value:"left"},{label:"right",value:"right"},{label:"top",value:"top"}]},{name:"layout",type:"enum",defaultValue:"vertical",options:[{label:"vertical",value:"vertical"},{label:"inline",value:"inline"}]},{name:"preventSubmitDefault",type:"Boolean",defaultValue:!0,options:[]},{name:"requiredMark",type:"Boolean",defaultValue:!1,options:[]},{name:"resetType",type:"enum",defaultValue:"empty",options:[{label:"empty",value:"empty"},{label:"initial",value:"initial"}]},{name:"showErrorMessage",type:"Boolean",defaultValue:!0,options:[]},{name:"statusIcon",type:"Boolean",defaultValue:!1,options:[]},{name:"submitWithWarningMessage",type:"Boolean",defaultValue:!1,options:[]}];const i={};i.setup=(e,t)=>{const n=l(f),a=[{label:"form",value:"form"}],r={form:`
        <t-form v-bind="configProps">
          <t-form-item label="\u59D3\u540D" name="name" initialData="TDesign">
            <t-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" />
          </t-form-item>
          <t-form-item label="\u624B\u673A\u53F7\u7801" name="tel" initialData="123456">
            <t-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" />
          </t-form-item>
          <t-form-item label="\u8BFE\u7A0B" name="course" initialData="['1']">
            <t-checkbox-group>
              <t-checkbox value="1">\u8BED\u6587</t-checkbox>
              <t-checkbox value="2">\u6570\u5B66</t-checkbox>
              <t-checkbox value="3">\u82F1\u8BED</t-checkbox>
              <t-checkbox value="4">\u4F53\u80B2</t-checkbox>
            </t-checkbox-group>
          </t-form-item>
        </t-form>
      `},o=l(`<template>${r[a[0].value].trim()}</template>`);function d(c){o.value=`<template>${r[c].trim()}</template>`}return{configList:n,panelList:a,usageCode:o,onPanelChange:d}};var m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("base-usage",{attrs:{code:e.usageCode,"config-list":e.configList,"panel-list":e.panelList},on:{PanelChange:e.onPanelChange},scopedSlots:e._u([{key:"form",fn:function(a){var r=a.configProps;return[n("t-form",e._b({},"t-form",r,!1),[n("t-form-item",{attrs:{label:"\u59D3\u540D",name:"name",initialData:"TDesign"}},[n("t-input",{attrs:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}})],1),n("t-form-item",{attrs:{label:"\u624B\u673A\u53F7\u7801",name:"tel",initialData:"123456"}},[n("t-input",{attrs:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}})],1),n("t-form-item",{attrs:{label:"\u8BFE\u7A0B",name:"course",initialData:"['1']"}},[n("t-checkbox-group",[n("t-checkbox",{attrs:{value:"1"}},[e._v("\u8BED\u6587")]),n("t-checkbox",{attrs:{value:"2"}},[e._v("\u6570\u5B66")]),n("t-checkbox",{attrs:{value:"3"}},[e._v("\u82F1\u8BED")]),n("t-checkbox",{attrs:{value:"4"}},[e._v("\u4F53\u80B2")])],1)],1)],1)]}}])})},b=[];m._withStripped=!0;const s={};var u=p(i,m,b,!1,g,null,null,null);function g(e){for(let t in s)this[t]=s[t]}u.options.__file="../src/form/_usage/index.vue";var j=function(){return u.exports}();export{h as D,j as U,D as a,y as b,I as c,x as d,w as e,T as f,A as g,k as h,R as i,_ as j,E as k,S as l,O as m,P as n,q as o,$ as p,N as q,C as r,M as s,L as t,V as u,z as v,F as w,B as x,W as y};
