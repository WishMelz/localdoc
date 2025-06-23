import{Y as i,n as d}from"./index.663c003f.js";var f=`<template>
  <t-space direction="vertical" class="t-demo-auto-complete__base">
    <t-auto-complete
      v-model="value"
      :options="options"
      highlightKeyword
      :filterable="false"
      placeholder="\u8BF7\u8F93\u5165\u5173\u952E\u8BCD\u641C\u7D22"
      clearable
      @change="onChange"
    />

    <!-- \u590D\u6742 UI \u9700\u6C42\uFF0C\u53EF\u53C2\u8003\u5F53\u524D\u793A\u4F8B\u5B8C\u6210 -->
    <t-auto-complete
      v-model="value2"
      :options="options"
      placeholder="\u8BF7\u8F93\u5165\u5173\u952E\u8BCD\u641C\u7D22\uFF08\u53F3\u4FA7\u641C\u7D22\u6309\u94AE\u53EF\u4EE5\u4F7F\u7528\u63D2\u69FD\u81EA\u5B9A\u4E49\uFF09"
      highlightKeyword
      filterable
      class="t-demo-autocomplete__search"
    >
      <template v-if="value2" #suffix>
        <close-circle-filled-icon class="t-input__suffix-clear" @click="value2 = ''" />
      </template>
      <template #suffixIcon>
        <t-button shape="square"><search-icon /></t-button>
      </template>
    </t-auto-complete>
  </t-space>
</template>

<script>
import { SearchIcon, CloseCircleFilledIcon } from 'tdesign-icons-vue';

export default {
  name: 'AutoCompleteBase',

  components: {
    SearchIcon,
    CloseCircleFilledIcon,
  },

  data() {
    return {
      value: '',
      value2: '',
      options: ['\u7B2C\u4E00\u4E2A\u9ED8\u8BA4\u8054\u60F3\u8BCD', '\u7B2C\u4E8C\u4E2A\u9ED8\u8BA4\u8054\u60F3\u8BCD', '\u7B2C\u4E09\u4E2A\u9ED8\u8BA4\u8054\u60F3\u8BCD'],
      timer: null,
    };
  },

  methods: {
    // \u8F93\u5165\u6846\u5185\u5BB9\u53D1\u751F\u53D8\u5316\u65F6\u8FDB\u884C\u641C\u7D22\uFF0C200ms \u641C\u7D22\u4E00\u6B21
    onChange(value) {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        const text = '\u641C\u7D22\u8054\u60F3\u8BCD';
        const pureValue = value.replace(\`\u7B2C\u4E00\u4E2A\${text}\`, '').replace(\`\u7B2C\u4E8C\u4E2A\${text}\`, '').replace(\`\u7B2C\u4E09\u4E2A\${text}\`, '');

        this.options = [\`\${pureValue}\u7B2C\u4E00\u4E2A\${text}\`, \`\${pureValue}\u7B2C\u4E8C\u4E2A\${text}\`, \`\${pureValue}\u7B2C\u4E09\u4E2A\${text}\`];
        clearTimeout(this.timer);
      }, 200);
    },
  },
};
<\/script>

<style>
.t-demo-autocomplete__search .t-input {
  padding-right: 0;
}
.t-demo-auto-complete__base .t-button svg {
  font-size: 20px;
}
</style>
`,C=`<template>
  <t-space direction="vertical" class="t-demo-auto-complete__base">
    <t-auto-complete
      v-model="value"
      :options="options"
      highlightKeyword
      :filterable="false"
      placeholder="\u8BF7\u8F93\u5165\u5173\u952E\u8BCD\u641C\u7D22"
      clearable
      @change="onChange"
    />

    <!-- \u590D\u6742 UI \u9700\u6C42\uFF0C\u53EF\u53C2\u8003\u5F53\u524D\u793A\u4F8B\u5B8C\u6210 -->
    <t-auto-complete
      v-model="value2"
      :options="options"
      placeholder="\u8BF7\u8F93\u5165\u5173\u952E\u8BCD\u641C\u7D22\uFF08\u53F3\u4FA7\u641C\u7D22\u6309\u94AE\u53EF\u4EE5\u4F7F\u7528\u63D2\u69FD\u81EA\u5B9A\u4E49\uFF09"
      highlightKeyword
      filterable
      class="t-demo-autocomplete__search"
    >
      <template v-if="value2" #suffix>
        <close-circle-filled-icon class="t-input__suffix-clear" @click="value2 = ''" />
      </template>
      <template #suffixIcon>
        <t-button shape="square"><search-icon /></t-button>
      </template>
    </t-auto-complete>
  </t-space>
</template>

<script setup>
import { ref } from 'vue';
import { SearchIcon, CloseCircleFilledIcon } from 'tdesign-icons-vue';

const value = ref('');
const value2 = ref('');
const options = ref(['\u7B2C\u4E00\u4E2A\u9ED8\u8BA4\u8054\u60F3\u8BCD', '\u7B2C\u4E8C\u4E2A\u9ED8\u8BA4\u8054\u60F3\u8BCD', '\u7B2C\u4E09\u4E2A\u9ED8\u8BA4\u8054\u60F3\u8BCD']);
const timer = ref(null);
// \u8F93\u5165\u6846\u5185\u5BB9\u53D1\u751F\u53D8\u5316\u65F6\u8FDB\u884C\u641C\u7D22\uFF0C200ms \u641C\u7D22\u4E00\u6B21
const onChange = (value) => {
  clearTimeout(timer.value);
  timer.value = setTimeout(() => {
    const text = '\u641C\u7D22\u8054\u60F3\u8BCD';
    const pureValue = value.replace(\`\u7B2C\u4E00\u4E2A\${text}\`, '').replace(\`\u7B2C\u4E8C\u4E2A\${text}\`, '').replace(\`\u7B2C\u4E09\u4E2A\${text}\`, '');
    options.value = [\`\${pureValue}\u7B2C\u4E00\u4E2A\${text}\`, \`\${pureValue}\u7B2C\u4E8C\u4E2A\${text}\`, \`\${pureValue}\u7B2C\u4E09\u4E2A\${text}\`];
    clearTimeout(timer.value);
  }, 200);
};
<\/script>

<style>
.t-demo-autocomplete__search .t-input {
  padding-right: 0;
}
.t-demo-auto-complete__base .t-button svg {
  font-size: 20px;
}
</style>
`,y=`<template>
  <t-space>
    <!-- \u7EC4\u4EF6\u5185\u7F6E\u7684\u8FC7\u6EE4\u89C4\u5219\uFF1A\u4E0D\u533A\u5206\u5927\u5C0F\u5199\uFF0C\u6587\u672C\u4EFB\u610F\u4F4D\u7F6E\u5339\u914D -->
    <t-auto-complete
      v-model="value1"
      :options="options"
      highlightKeyword
      filterable
      placeholder="\u7EC4\u4EF6\u9ED8\u8BA4\u8FC7\u6EE4\u89C4\u5219\uFF08\u4E0D\u533A\u5206\u5927\u5C0F\u5199\uFF09"
      style="width: 280px"
    />

    <!-- \u5916\u90E8\u81EA\u5B9A\u4E49\u8FC7\u6EE4\u89C4\u5219\uFF1A\u533A\u5206\u5927\u5C0F\u5199\uFF0C\u6587\u672C\u5F00\u59CB\u4F4D\u7F6E\u5339\u914D -->
    <t-auto-complete
      v-model="value2"
      :options="options"
      :filter="filterWords"
      highlightKeyword
      placeholder="\u81EA\u5B9A\u4E49\u8FC7\u6EE4\u89C4\u5219\uFF08\u533A\u5206\u5927\u5C0F\u5199\uFF09"
      style="width: 280px"
    />
  </t-space>
</template>

<script>
import { escapeRegExp } from 'lodash-es';

const LIST = ['\u7B2C\u4E00\u4E2A AutoComplete \u9ED8\u8BA4\u8054\u60F3\u8BCD', '\u7B2C\u4E8C\u4E2A AutoComplete \u9ED8\u8BA4\u8054\u60F3\u8BCD', '\u7B2C\u4E09\u4E2A AutoComplete \u9ED8\u8BA4\u8054\u60F3\u8BCD'];

export default {
  name: 'AutoCompleteFilter',

  data() {
    return {
      value1: '',
      value2: '',
      options: [...LIST],
    };
  },

  methods: {
    filterWords(keyword, option) {
      const regExp = new RegExp(escapeRegExp(keyword));
      return regExp.test(option.text);
    },
  },
};
<\/script>
`,_=`<template>
  <t-space>
    <!-- \u7EC4\u4EF6\u5185\u7F6E\u7684\u8FC7\u6EE4\u89C4\u5219\uFF1A\u4E0D\u533A\u5206\u5927\u5C0F\u5199\uFF0C\u6587\u672C\u4EFB\u610F\u4F4D\u7F6E\u5339\u914D -->
    <t-auto-complete
      v-model="value1"
      :options="options"
      highlightKeyword
      filterable
      placeholder="\u7EC4\u4EF6\u9ED8\u8BA4\u8FC7\u6EE4\u89C4\u5219\uFF08\u4E0D\u533A\u5206\u5927\u5C0F\u5199\uFF09"
      style="width: 280px"
    />

    <!-- \u5916\u90E8\u81EA\u5B9A\u4E49\u8FC7\u6EE4\u89C4\u5219\uFF1A\u533A\u5206\u5927\u5C0F\u5199\uFF0C\u6587\u672C\u5F00\u59CB\u4F4D\u7F6E\u5339\u914D -->
    <t-auto-complete
      v-model="value2"
      :options="options"
      :filter="filterWords"
      highlightKeyword
      placeholder="\u81EA\u5B9A\u4E49\u8FC7\u6EE4\u89C4\u5219\uFF08\u533A\u5206\u5927\u5C0F\u5199\uFF09"
      style="width: 280px"
    />
  </t-space>
</template>

<script setup>
import { ref } from 'vue';
import { escapeRegExp } from 'lodash-es';

const LIST = ['\u7B2C\u4E00\u4E2A AutoComplete \u9ED8\u8BA4\u8054\u60F3\u8BCD', '\u7B2C\u4E8C\u4E2A AutoComplete \u9ED8\u8BA4\u8054\u60F3\u8BCD', '\u7B2C\u4E09\u4E2A AutoComplete \u9ED8\u8BA4\u8054\u60F3\u8BCD'];
const value1 = ref('');
const value2 = ref('');
const options = ref([...LIST]);
const filterWords = (keyword, option) => {
  const regExp = new RegExp(escapeRegExp(keyword));
  return regExp.test(option.text);
};
<\/script>
`,$=`<template>
  <t-space direction="vertical" class="t-demo-autocomplete-option">
    <!-- \u4F7F\u7528 options \u81EA\u5B9A\u4E49\u4E0B\u62C9\u9009\u9879 -->
    <t-auto-complete
      v-model="value1"
      :options="options1"
      :popupProps="{ overlayClassName: 't-demo-autocomplete-option-list' }"
      placeholder="\u4F7F\u7528\u5C5E\u6027\u81EA\u5B9A\u4E49\u8054\u60F3\u8BCD\u9009\u9879\u5185\u5BB9"
    />

    <!-- \u4F7F\u7528\u63D2\u69FD\u81EA\u5B9A\u4E49\u4E0B\u62C9\u9009\u9879 -->
    <t-auto-complete
      v-model="value2"
      :options="options2"
      :popupProps="{ overlayClassName: 't-demo-autocomplete-option-list' }"
      placeholder="\u4F7F\u7528\u63D2\u69FD\u81EA\u5B9A\u4E49\u8054\u60F3\u8BCD\u9009\u9879\u5185\u5BB9"
    >
      <template #option="{ option }">
        <div class="custom-option">
          <img :src="option.avatar" />
          <div class="custom-option__main">
            <!-- highlightKeyword -->
            <t-highlight-option :content="option.text" :keyword="value2" />
            <small class="description">{{ option.description }}</small>
          </div>
        </div>
      </template>
    </t-auto-complete>
  </t-space>
</template>

<!-- lang="jsx" \u91CD\u8981  -->
<script lang="jsx">
import { HighlightOption } from 'tdesign-vue';

const TEXTS = ['\u7B2C\u4E00\u4E2A\u9ED8\u8BA4\u8054\u60F3\u8BCD', '\u7B2C\u4E8C\u4E2A\u9ED8\u8BA4\u8054\u60F3\u8BCD', '\u7B2C\u4E09\u4E2A\u9ED8\u8BA4\u8054\u60F3\u8BCD'];

export default {
  name: 'AutoCompleteOption',

  components: {
    THighlightOption: HighlightOption,
  },

  data() {
    return {
      value1: '',
      value2: '',
      options2: [
        {
          label: '\u7B2C\u4E00\u4E2A\u9ED8\u8BA4\u8054\u60F3\u8BCD',
          description: '\u8FD9\u662F\u5173\u4E8E\u8054\u60F3\u8BCD\u7684\u63CF\u8FF0\u3002\u4F7F\u7528\u63D2\u69FD\u6E32\u67D3',
          avatar: 'https://tdesign.gtimg.com/site/avatar.jpg',
        },
        {
          label: '\u7B2C\u4E8C\u4E2A\u9ED8\u8BA4\u8054\u60F3\u8BCD',
          description: '\u8FD9\u662F\u5173\u4E8E\u8054\u60F3\u8BCD\u7684\u63CF\u8FF0\u3002\u4F7F\u7528\u63D2\u69FD\u6E32\u67D3',
          avatar: 'https://tdesign.gtimg.com/site/avatar.jpg',
        },
        {
          label: '\u7B2C\u4E09\u4E2A\u9ED8\u8BA4\u8054\u60F3\u8BCD',
          description: '\u8FD9\u662F\u5173\u4E8E\u8054\u60F3\u8BCD\u7684\u63CF\u8FF0\u3002\u4F7F\u7528\u63D2\u69FD\u6E32\u67D3',
          avatar: 'https://tdesign.gtimg.com/site/avatar.jpg',
        },
      ],
      // timer: null,
    };
  },

  computed: {
    options1() {
      return TEXTS.map((text) => ({
        text,
        label: () => (
          <div class="custom-option">
            <img src="https://tdesign.gtimg.com/site/avatar.jpg" />
            <div class="custom-option__main">
              <t-highlight-option content={text} keyword={this.value1} />
              <small class="description">\u8FD9\u662F\u5173\u4E8E\u8054\u60F3\u8BCD\u7684\u63CF\u8FF0\uFF0C\u4F7F\u7528 Props \u5C5E\u6027\u6E32\u67D3</small>
            </div>
          </div>
        ),
      }));
    },
  },
};
<\/script>

<style>
.t-demo-autocomplete-option-list .t-select-option {
  height: 50px;
}

.t-demo-autocomplete-option-list .custom-option {
  display: flex;
  align-items: center;
}

.t-demo-autocomplete-option-list .custom-option > img {
  max-height: 40px;
  border-radius: 50%;
}

.t-demo-autocomplete-option-list .custom-option__main {
  margin-left: 8px;
}

.t-demo-autocomplete-option-list .custom-option .description {
  color: var(--td-gray-color-9);
}
</style>
`,b=`<template>
  <t-space direction="vertical" class="t-demo-autocomplete-option">
    <!-- \u4F7F\u7528 options \u81EA\u5B9A\u4E49\u4E0B\u62C9\u9009\u9879 -->
    <t-auto-complete
      v-model="value1"
      :options="options1"
      :popupProps="{ overlayClassName: 't-demo-autocomplete-option-list' }"
      placeholder="\u4F7F\u7528\u5C5E\u6027\u81EA\u5B9A\u4E49\u8054\u60F3\u8BCD\u9009\u9879\u5185\u5BB9"
    />

    <!-- \u4F7F\u7528\u63D2\u69FD\u81EA\u5B9A\u4E49\u4E0B\u62C9\u9009\u9879 -->
    <t-auto-complete
      v-model="value2"
      :options="options2"
      :popupProps="{ overlayClassName: 't-demo-autocomplete-option-list' }"
      placeholder="\u4F7F\u7528\u63D2\u69FD\u81EA\u5B9A\u4E49\u8054\u60F3\u8BCD\u9009\u9879\u5185\u5BB9"
    >
      <template #option="{ option }">
        <div class="custom-option">
          <img :src="option.avatar" />
          <div class="custom-option__main">
            <!-- highlightKeyword -->
            <t-highlight-option :content="option.text" :keyword="value2" />
            <small class="description">{{ option.description }}</small>
          </div>
        </div>
      </template>
    </t-auto-complete>
  </t-space>
</template>

<script setup lang="jsx">
import { ref, computed } from 'vue';
import { HighlightOption as THighlightOption } from 'tdesign-vue';

const TEXTS = ['\u7B2C\u4E00\u4E2A\u9ED8\u8BA4\u8054\u60F3\u8BCD', '\u7B2C\u4E8C\u4E2A\u9ED8\u8BA4\u8054\u60F3\u8BCD', '\u7B2C\u4E09\u4E2A\u9ED8\u8BA4\u8054\u60F3\u8BCD'];
const value1 = ref('');
const value2 = ref('');
const options2 = ref([
  {
    label: '\u7B2C\u4E00\u4E2A\u9ED8\u8BA4\u8054\u60F3\u8BCD',
    description: '\u8FD9\u662F\u5173\u4E8E\u8054\u60F3\u8BCD\u7684\u63CF\u8FF0\u3002\u4F7F\u7528\u63D2\u69FD\u6E32\u67D3',
    avatar: 'https://tdesign.gtimg.com/site/avatar.jpg',
  },
  {
    label: '\u7B2C\u4E8C\u4E2A\u9ED8\u8BA4\u8054\u60F3\u8BCD',
    description: '\u8FD9\u662F\u5173\u4E8E\u8054\u60F3\u8BCD\u7684\u63CF\u8FF0\u3002\u4F7F\u7528\u63D2\u69FD\u6E32\u67D3',
    avatar: 'https://tdesign.gtimg.com/site/avatar.jpg',
  },
  {
    label: '\u7B2C\u4E09\u4E2A\u9ED8\u8BA4\u8054\u60F3\u8BCD',
    description: '\u8FD9\u662F\u5173\u4E8E\u8054\u60F3\u8BCD\u7684\u63CF\u8FF0\u3002\u4F7F\u7528\u63D2\u69FD\u6E32\u67D3',
    avatar: 'https://tdesign.gtimg.com/site/avatar.jpg',
  },
]);
// const timer = ref(null);
const options1 = computed(() => TEXTS.map((text) => ({
  text,
  label: () => (
      <div class="custom-option">
        <img src="https://tdesign.gtimg.com/site/avatar.jpg" />
        <div class="custom-option__main">
          <t-highlight-option content={text} keyword={value1.value} />
          <small class="description">\u8FD9\u662F\u5173\u4E8E\u8054\u60F3\u8BCD\u7684\u63CF\u8FF0\uFF0C\u4F7F\u7528 Props \u5C5E\u6027\u6E32\u67D3</small>
        </div>
      </div>
  ),
})));
<\/script>

<style>
.t-demo-autocomplete-option-list .t-select-option {
  height: 50px;
}

.t-demo-autocomplete-option-list .custom-option {
  display: flex;
  align-items: center;
}

.t-demo-autocomplete-option-list .custom-option > img {
  max-height: 40px;
  border-radius: 50%;
}

.t-demo-autocomplete-option-list .custom-option__main {
  margin-left: 8px;
}

.t-demo-autocomplete-option-list .custom-option .description {
  color: var(--td-gray-color-9);
}
</style>
`,T=`<template>
  <div>
    <!-- \u4E0B\u62C9\u6D6E\u5C42\u9ED8\u8BA4\u89E6\u53D1\u65B9\u5F0F\u4E3A focus\uFF0C\u5982\u679C\u671F\u671B\u66F4\u4E3A\u5176\u4ED6\uFF0C\u53EF\u4EE5\u8BBE\u7F6E :popupProps="{ trigger: 'click' }" -->
    <t-auto-complete v-model="value" :options="options" highlightKeyword @change="onChange">
      <t-textarea v-model="value" placeholder="\u81EA\u5B9A\u4E49\u8054\u60F3\u8BCD\u89E6\u53D1\u5143\u7D20"></t-textarea>
    </t-auto-complete>
  </div>
</template>

<script>
export default {
  name: 'AutoCompleteTriggerElement',

  data() {
    return {
      value: '',
      options: ['First AutoComplete Textarea', 'Second AutoComplete Textarea', 'Third AutoComplete Textarea'],
      timer: null,
    };
  },

  methods: {
    // \u8F93\u5165\u6846\u5185\u5BB9\u53D1\u751F\u53D8\u5316\u65F6\u8FDB\u884C\u641C\u7D22\uFF0C200ms \u641C\u7D22\u4E00\u6B21
    onChange(value) {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        const text = 'AutoComplete Textarea';
        const pureValue = value.replace(\`First \${text}\`, '').replace(\`Second \${text}\`, '').replace(\`Third \${text}\`, '');

        this.options = [\`\${pureValue}First \${text}\`, \`\${pureValue}Second \${text}\`, \`\${pureValue}Third \${text}\`];
        clearTimeout(this.timer);
      }, 200);
    },
  },
};
<\/script>
`,w=`<template>
  <div>
    <!-- \u4E0B\u62C9\u6D6E\u5C42\u9ED8\u8BA4\u89E6\u53D1\u65B9\u5F0F\u4E3A focus\uFF0C\u5982\u679C\u671F\u671B\u66F4\u4E3A\u5176\u4ED6\uFF0C\u53EF\u4EE5\u8BBE\u7F6E :popupProps="{ trigger: 'click' }" -->
    <t-auto-complete v-model="value" :options="options" highlightKeyword @change="onChange">
      <t-textarea v-model="value" placeholder="\u81EA\u5B9A\u4E49\u8054\u60F3\u8BCD\u89E6\u53D1\u5143\u7D20"></t-textarea>
    </t-auto-complete>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');
const options = ref(['First AutoComplete Textarea', 'Second AutoComplete Textarea', 'Third AutoComplete Textarea']);
const timer = ref(null);
// \u8F93\u5165\u6846\u5185\u5BB9\u53D1\u751F\u53D8\u5316\u65F6\u8FDB\u884C\u641C\u7D22\uFF0C200ms \u641C\u7D22\u4E00\u6B21
const onChange = (value) => {
  clearTimeout(timer.value);
  timer.value = setTimeout(() => {
    const text = 'AutoComplete Textarea';
    const pureValue = value.replace(\`First \${text}\`, '').replace(\`Second \${text}\`, '').replace(\`Third \${text}\`, '');
    options.value = [\`\${pureValue}First \${text}\`, \`\${pureValue}Second \${text}\`, \`\${pureValue}Third \${text}\`];
    clearTimeout(timer.value);
  }, 200);
};
<\/script>
`,V=`<template>
  <t-space direction="vertical">
    <t-auto-complete
      v-model="value1"
      size="small"
      :inputProps="{ label: '\u5C0F\u5C3A\u5BF8\uFF1A' }"
      :options="['\u7B2C\u4E00\u4E2A\u8054\u60F3\u8BCD', '\u7B2C\u4E8C\u4E2A\u8054\u60F3\u8BCD', '\u7B2C\u4E09\u4E2A\u8054\u60F3\u8BCD']"
    />

    <t-auto-complete
      v-model="value2"
      :inputProps="{ label: '\u4E2D\u5C3A\u5BF8\uFF1A' }"
      :options="['\u7B2C\u4E00\u4E2A\u8054\u60F3\u8BCD', '\u7B2C\u4E8C\u4E2A\u8054\u60F3\u8BCD', '\u7B2C\u4E09\u4E2A\u8054\u60F3\u8BCD']"
    />

    <t-auto-complete
      v-model="value3"
      size="large"
      :inputProps="{ label: '\u5927\u5C3A\u5BF8\uFF1A' }"
      :options="['\u7B2C\u4E00\u4E2A\u8054\u60F3\u8BCD', '\u7B2C\u4E8C\u4E2A\u8054\u60F3\u8BCD', '\u7B2C\u4E09\u4E2A\u8054\u60F3\u8BCD']"
    />
  </t-space>
</template>

<script>
export default {
  name: 'AutoCompleteSize',

  data() {
    return {
      value1: '',
      value2: '',
      value3: '',
    };
  },
};
<\/script>
`,K=`<template>
  <t-space direction="vertical">
    <t-auto-complete
      v-model="value1"
      size="small"
      :inputProps="{ label: '\u5C0F\u5C3A\u5BF8\uFF1A' }"
      :options="['\u7B2C\u4E00\u4E2A\u8054\u60F3\u8BCD', '\u7B2C\u4E8C\u4E2A\u8054\u60F3\u8BCD', '\u7B2C\u4E09\u4E2A\u8054\u60F3\u8BCD']"
    />

    <t-auto-complete
      v-model="value2"
      :inputProps="{ label: '\u4E2D\u5C3A\u5BF8\uFF1A' }"
      :options="['\u7B2C\u4E00\u4E2A\u8054\u60F3\u8BCD', '\u7B2C\u4E8C\u4E2A\u8054\u60F3\u8BCD', '\u7B2C\u4E09\u4E2A\u8054\u60F3\u8BCD']"
    />

    <t-auto-complete
      v-model="value3"
      size="large"
      :inputProps="{ label: '\u5927\u5C3A\u5BF8\uFF1A' }"
      :options="['\u7B2C\u4E00\u4E2A\u8054\u60F3\u8BCD', '\u7B2C\u4E8C\u4E2A\u8054\u60F3\u8BCD', '\u7B2C\u4E09\u4E2A\u8054\u60F3\u8BCD']"
    />
  </t-space>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref('');
const value2 = ref('');
const value3 = ref('');
<\/script>
`,A=`<template>
  <t-space direction="vertical" size="32px">
    <t-auto-complete
      v-model="value1"
      :options="options"
      disabled
      tips="\u8FD9\u662F\u7981\u7528\u72B6\u6001"
      highlightKeyword
      placeholder="\u8BF7\u8F93\u5165\u5173\u952E\u8BCD\u641C\u7D22"
      @change="onChange"
    />
    <t-auto-complete
      v-model="value2"
      :options="options"
      readonly
      tips="\u8FD9\u662F\u53EA\u8BFB\u72B6\u6001"
      highlightKeyword
      placeholder="\u8BF7\u8F93\u5165\u5173\u952E\u8BCD\u641C\u7D22"
      @change="onChange"
    />
    <t-auto-complete
      v-model="value3"
      :options="options"
      tips="\u8FD9\u662F\u666E\u901A\u72B6\u6001"
      highlightKeyword
      placeholder="\u8BF7\u8F93\u5165\u5173\u952E\u8BCD\u641C\u7D22"
      @change="onChange"
    />
    <t-auto-complete
      v-model="value4"
      :options="options"
      tips="\u8FD9\u662F\u544A\u8B66\u72B6\u6001"
      status="warning"
      highlightKeyword
      placeholder="\u8BF7\u8F93\u5165\u5173\u952E\u8BCD\u641C\u7D22"
      @change="onChange"
    />
    <t-auto-complete
      v-model="value5"
      :options="options"
      tips="\u8FD9\u662F\u9519\u8BEF\u72B6\u6001"
      status="error"
      highlightKeyword
      placeholder="\u8BF7\u8F93\u5165\u5173\u952E\u8BCD\u641C\u7D22"
      @change="onChange"
    />
    <t-auto-complete
      v-model="value6"
      :options="options"
      tips="\u8FD9\u662F\u6210\u529F\u72B6\u6001"
      status="success"
      highlightKeyword
      placeholder="\u8BF7\u8F93\u5165\u5173\u952E\u8BCD\u641C\u7D22"
      @change="onChange"
    />
  </t-space>
</template>

<script>
export default {
  name: 'AutoCompleteStatus',

  data() {
    return {
      value1: '\u7B2C\u4E00\u4E2A\u9ED8\u8BA4\u8054\u60F3\u8BCD',
      value2: '\u7B2C\u4E00\u4E2A\u9ED8\u8BA4\u8054\u60F3\u8BCD',
      value3: '',
      value4: '',
      value5: '',
      value6: '',
      options: ['\u7B2C\u4E00\u4E2A\u9ED8\u8BA4\u8054\u60F3\u8BCD', '\u7B2C\u4E8C\u4E2A\u9ED8\u8BA4\u8054\u60F3\u8BCD', '\u7B2C\u4E09\u4E2A\u9ED8\u8BA4\u8054\u60F3\u8BCD'],
      timer: null,
    };
  },

  methods: {
    // \u8F93\u5165\u6846\u5185\u5BB9\u53D1\u751F\u53D8\u5316\u65F6\u8FDB\u884C\u641C\u7D22\uFF0C200ms \u641C\u7D22\u4E00\u6B21
    onChange(value) {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        const text = '\u641C\u7D22\u8054\u60F3\u8BCD';
        const pureValue = value.replace(\`\u7B2C\u4E00\u4E2A\${text}\`, '').replace(\`\u7B2C\u4E8C\u4E2A\${text}\`, '').replace(\`\u7B2C\u4E09\u4E2A\${text}\`, '');

        this.options = [\`\${pureValue}\u7B2C\u4E00\u4E2A\${text}\`, \`\${pureValue}\u7B2C\u4E8C\u4E2A\${text}\`, \`\${pureValue}\u7B2C\u4E09\u4E2A\${text}\`];
        clearTimeout(this.timer);
      }, 200);
    },
  },
};
<\/script>
`,S=`<template>
  <t-space direction="vertical" size="32px">
    <t-auto-complete
      v-model="value1"
      :options="options"
      disabled
      tips="\u8FD9\u662F\u7981\u7528\u72B6\u6001"
      highlightKeyword
      placeholder="\u8BF7\u8F93\u5165\u5173\u952E\u8BCD\u641C\u7D22"
      @change="onChange"
    />
    <t-auto-complete
      v-model="value2"
      :options="options"
      readonly
      tips="\u8FD9\u662F\u53EA\u8BFB\u72B6\u6001"
      highlightKeyword
      placeholder="\u8BF7\u8F93\u5165\u5173\u952E\u8BCD\u641C\u7D22"
      @change="onChange"
    />
    <t-auto-complete
      v-model="value3"
      :options="options"
      tips="\u8FD9\u662F\u666E\u901A\u72B6\u6001"
      highlightKeyword
      placeholder="\u8BF7\u8F93\u5165\u5173\u952E\u8BCD\u641C\u7D22"
      @change="onChange"
    />
    <t-auto-complete
      v-model="value4"
      :options="options"
      tips="\u8FD9\u662F\u544A\u8B66\u72B6\u6001"
      status="warning"
      highlightKeyword
      placeholder="\u8BF7\u8F93\u5165\u5173\u952E\u8BCD\u641C\u7D22"
      @change="onChange"
    />
    <t-auto-complete
      v-model="value5"
      :options="options"
      tips="\u8FD9\u662F\u9519\u8BEF\u72B6\u6001"
      status="error"
      highlightKeyword
      placeholder="\u8BF7\u8F93\u5165\u5173\u952E\u8BCD\u641C\u7D22"
      @change="onChange"
    />
    <t-auto-complete
      v-model="value6"
      :options="options"
      tips="\u8FD9\u662F\u6210\u529F\u72B6\u6001"
      status="success"
      highlightKeyword
      placeholder="\u8BF7\u8F93\u5165\u5173\u952E\u8BCD\u641C\u7D22"
      @change="onChange"
    />
  </t-space>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref('\u7B2C\u4E00\u4E2A\u9ED8\u8BA4\u8054\u60F3\u8BCD');
const value2 = ref('\u7B2C\u4E00\u4E2A\u9ED8\u8BA4\u8054\u60F3\u8BCD');
const value3 = ref('');
const value4 = ref('');
const value5 = ref('');
const value6 = ref('');
const options = ref(['\u7B2C\u4E00\u4E2A\u9ED8\u8BA4\u8054\u60F3\u8BCD', '\u7B2C\u4E8C\u4E2A\u9ED8\u8BA4\u8054\u60F3\u8BCD', '\u7B2C\u4E09\u4E2A\u9ED8\u8BA4\u8054\u60F3\u8BCD']);
const timer = ref(null);
// \u8F93\u5165\u6846\u5185\u5BB9\u53D1\u751F\u53D8\u5316\u65F6\u8FDB\u884C\u641C\u7D22\uFF0C200ms \u641C\u7D22\u4E00\u6B21
const onChange = (value) => {
  clearTimeout(timer.value);
  timer.value = setTimeout(() => {
    const text = '\u641C\u7D22\u8054\u60F3\u8BCD';
    const pureValue = value.replace(\`\u7B2C\u4E00\u4E2A\${text}\`, '').replace(\`\u7B2C\u4E8C\u4E2A\${text}\`, '').replace(\`\u7B2C\u4E09\u4E2A\${text}\`, '');
    options.value = [\`\${pureValue}\u7B2C\u4E00\u4E2A\${text}\`, \`\${pureValue}\u7B2C\u4E8C\u4E2A\${text}\`, \`\${pureValue}\u7B2C\u4E09\u4E2A\${text}\`];
    clearTimeout(timer.value);
  }, 200);
};
<\/script>
`,v=[{name:"borderless",type:"Boolean",defaultValue:!1,options:[]},{name:"clearable",type:"Boolean",defaultValue:!1,options:[]},{name:"disabled",type:"Boolean",defaultValue:!1,options:[]},{name:"highlightKeyword",type:"Boolean",defaultValue:!1,options:[]},{name:"readonly",type:"Boolean",defaultValue:!1,options:[]},{name:"size",type:"enum",defaultValue:"medium",options:[{label:"small",value:"small"},{label:"medium",value:"medium"},{label:"large",value:"large"}]}];const s={};s.setup=(e,n)=>{const t=i(v),o=[{label:"AutoComplete",value:"AutoComplete"}],a={AutoComplete:`<t-auto-complete v-bind="configProps" :options="['\u7B2C\u4E00\u4E2A\u8054\u60F3\u8BCD', '\u7B2C\u4E8C\u4E2A\u8054\u60F3\u8BCD', '\u7B2C\u4E09\u4E2A\u8054\u60F3\u8BCD']" />`},l=i(`<template>${a[o[0].value].trim()}</template>`);function u(m){l.value=`<template>${a[m].trim()}</template>`}return{configList:t,panelList:o,usageCode:l,onPanelChange:u}};var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("base-usage",{attrs:{code:e.usageCode,"config-list":e.configList,"panel-list":e.panelList},on:{PanelChange:e.onPanelChange},scopedSlots:e._u([{key:"AutoComplete",fn:function(o){var a=o.configProps;return[t("t-auto-complete",e._b({attrs:{options:["\u7B2C\u4E00\u4E2A\u8054\u60F3\u8BCD","\u7B2C\u4E8C\u4E2A\u8054\u60F3\u8BCD","\u7B2C\u4E09\u4E2A\u8054\u60F3\u8BCD"]}},"t-auto-complete",a,!1))]}}])})},h=[];r._withStripped=!0;const p={};var c=d(s,r,h,!1,g,null,null,null);function g(e){for(let n in p)this[n]=p[n]}c.options.__file="../src/auto-complete/_usage/index.vue";var P=function(){return c.exports}();export{f as D,P as U,C as a,y as b,_ as c,$ as d,b as e,T as f,w as g,V as h,K as i,A as j,S as k};
