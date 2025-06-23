import{Y as i,n as g}from"./index.663c003f.js";var x=`<template>
  <!-- :popup-props="{ trigger: 'hover' }" -->
  <t-select-input
    :value="selectValue"
    :popup-visible="popupVisible"
    :popup-props="{ overlayInnerStyle: { padding: '6px' } }"
    style="width: 300px"
    placeholder="Please Select"
    clearable
    allow-input
    @popup-visible-change="onPopupVisibleChange"
    @clear="onClear"
    @input-change="onInputChange"
    @focus="onFocus"
  >
    <template #panel>
      <ul class="tdesign-demo__select-input-ul-single">
        <li v-for="item in options" :key="item.value" @click="() => onOptionClick(item)">
          {{ item.label }}
        </li>
      </ul>
    </template>
    <template #suffixIcon>
      <chevron-down-icon />
    </template>
  </t-select-input>
</template>
<script>
import { ChevronDownIcon } from 'tdesign-icons-vue';

export default {
  components: {
    ChevronDownIcon,
  },
  data() {
    return {
      options: [
        { label: 'tdesign-vue', value: 1 },
        { label: 'tdesign-react', value: 2 },
        { label: 'tdesign-miniprogram', value: 3 },
        { label: 'tdesign-angular', value: 4 },
        { label: 'tdesign-mobile-vue', value: 5 },
        { label: 'tdesign-mobile-react', value: 6 },
      ],
      selectValue: { label: 'tdesign-vue', value: 1 },
      popupVisible: false,
    };
  },
  methods: {
    onOptionClick(item) {
      this.selectValue = item;
      this.popupVisible = false;
    },
    onClear() {
      this.selectValue = undefined;
    },
    onPopupVisibleChange(val) {
      console.log(val);
      this.popupVisible = val;
    },
    onInputChange(val, context) {
      // \u8FC7\u6EE4\u529F\u80FD
      console.log(val, context);
    },
    onFocus(val, context) {
      console.log('focus:', val, context);
    },
  },
};
<\/script>
<style lang="less" scoped>
.tdesign-demo__select-input-ul-single {
  display: flex;
  flex-direction: column;
  padding: 0;
  gap: 2px;
}
.tdesign-demo__select-input-ul-single > li {
  display: block;
  border-radius: 3px;
  line-height: 22px;
  cursor: pointer;
  padding: 3px 8px;
  color: var(--td-text-color-primary);
  transition: background-color 0.2s linear;
  white-space: nowrap;
  word-wrap: normal;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tdesign-demo__select-input-ul-single > li:hover {
  background-color: var(--td-bg-color-container-hover);
}
</style>
`,f=`<template>
  <!-- :popup-props="{ trigger: 'hover' }" -->
  <t-select-input
    :value="selectValue"
    :popup-visible="popupVisible"
    :popup-props="{ overlayInnerStyle: { padding: '6px' } }"
    style="width: 300px"
    placeholder="Please Select"
    clearable
    allow-input
    @popup-visible-change="onPopupVisibleChange"
    @clear="onClear"
    @input-change="onInputChange"
    @focus="onFocus"
  >
    <template #panel>
      <ul class="tdesign-demo__select-input-ul-single">
        <li v-for="item in options" :key="item.value" @click="() => onOptionClick(item)">
          {{ item.label }}
        </li>
      </ul>
    </template>
    <template #suffixIcon>
      <chevron-down-icon />
    </template>
  </t-select-input>
</template>
<script setup>
import { ref } from 'vue';
import { ChevronDownIcon } from 'tdesign-icons-vue';

const options = ref([
  {
    label: 'tdesign-vue',
    value: 1,
  },
  {
    label: 'tdesign-react',
    value: 2,
  },
  {
    label: 'tdesign-miniprogram',
    value: 3,
  },
  {
    label: 'tdesign-angular',
    value: 4,
  },
  {
    label: 'tdesign-mobile-vue',
    value: 5,
  },
  {
    label: 'tdesign-mobile-react',
    value: 6,
  },
]);
const selectValue = ref({
  label: 'tdesign-vue',
  value: 1,
});
const popupVisible = ref(false);
const onOptionClick = (item) => {
  selectValue.value = item;
  popupVisible.value = false;
};
const onClear = () => {
  selectValue.value = undefined;
};
const onPopupVisibleChange = (val) => {
  console.log(val);
  popupVisible.value = val;
};
const onInputChange = (val, context) => {
  // \u8FC7\u6EE4\u529F\u80FD
  console.log(val, context);
};
const onFocus = (val, context) => {
  console.log('focus:', val, context);
};
<\/script>
<style lang="less" scoped>
.tdesign-demo__select-input-ul-single {
  display: flex;
  flex-direction: column;
  padding: 0;
  gap: 2px;
}
.tdesign-demo__select-input-ul-single > li {
  display: block;
  border-radius: 3px;
  line-height: 22px;
  cursor: pointer;
  padding: 3px 8px;
  color: var(--td-text-color-primary);
  transition: background-color 0.2s linear;
  white-space: nowrap;
  word-wrap: normal;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tdesign-demo__select-input-ul-single > li:hover {
  background-color: var(--td-bg-color-container-hover);
}
</style>
`,y=`<template>
  <t-space direction="vertical" class="tdesign-demo__select-input-multiple" style="width: 100%">
    <div>
      <t-checkbox v-model="allowInput">\u662F\u5426\u5141\u8BB8\u8F93\u5165</t-checkbox>
      <t-checkbox v-model="creatable">\u5141\u8BB8\u521B\u5EFA\u65B0\u9009\u9879\uFF08Enter \u521B\u5EFA\uFF09</t-checkbox>
    </div>
    <div>
      <t-radio-group
        v-model="excessTagsDisplayType"
        :options="[
          { label: '\u9009\u4E2D\u9879\u8FC7\u591A\u6A2A\u5411\u6EDA\u52A8', value: 'scroll' },
          { label: '\u9009\u4E2D\u9879\u8FC7\u591A\u6362\u884C\u663E\u793A', value: 'break-line' },
        ]"
      />
    </div>

    <!-- :popup-props="{ trigger: 'hover' }" -->
    <t-select-input
      :input-value.sync="inputValue"
      :value="value"
      :allow-input="allowInput"
      :placeholder="allowInput ? '\u8BF7\u9009\u62E9\u6216\u8F93\u5165' : '\u8BF7\u9009\u62E9'"
      :tag-input-props="{ excessTagsDisplayType }"
      :popup-props="{
        overlayInnerClassName: ['narrow-scrollbar'],
        overlayInnerStyle: {
          maxHeight: '280px',
          overflowY: 'auto',
          overscrollBehavior: 'contain',
          padding: '6px',
        },
      }"
      clearable
      multiple
      @focus="handleFocus"
      @blur="handleBlur"
      @tag-change="onTagChange"
      @input-change="onInputChange"
      @clear="handleClear"
      @enter="handleEnter"
      @mouseenter="handleMouseenter"
      @change="handleChange"
    >
      <template #panel>
        <t-checkbox-group
          v-if="options.length"
          :value="checkboxValue"
          :options="options"
          class="tdesign-demo__panel-options-multiple"
          @change="onCheckedChange"
        />
        <div v-else class="tdesign-demo__select-empty-multiple">\u6682\u65E0\u6570\u636E</div>
      </template>
      <template #suffixIcon>
        <chevron-down-icon />
      </template>
    </t-select-input>
  </t-space>
</template>
<script>
import { ChevronDownIcon } from 'tdesign-icons-vue';

const OPTIONS = [
  // \u5168\u9009
  { label: 'Check All', checkAll: true },
  { label: 'tdesign-vue', value: 1 },
  { label: 'tdesign-react', value: 2 },
  { label: 'tdesign-miniprogram', value: 3 },
  { label: 'tdesign-angular', value: 4 },
  { label: 'tdesign-mobile-vue', value: 5 },
  { label: 'tdesign-mobile-react', value: 6 },
];

export default {
  components: {
    ChevronDownIcon,
  },
  data() {
    return {
      excessTagsDisplayType: 'break-line',
      allowInput: true,
      creatable: true,
      inputValue: '',
      options: [...OPTIONS],
      value: [
        { label: 'Vue', value: 1 },
        { label: 'React', value: 2 },
        { label: 'Miniprogram', value: 3 },
      ],
    };
  },
  computed: {
    checkboxValue() {
      const arr = [];
      const list = this.value;
      // \u6B64\u5904\u4E0D\u4F7F\u7528 forEach\uFF0C\u51CF\u5C11\u51FD\u6570\u8FED\u4EE3
      for (let i = 0, len = list.length; i < len; i++) {
        list[i].value && arr.push(list[i].value);
      }
      return arr;
    },
  },
  methods: {
    handleFocus(value, context) {
      console.log('focus', value, context);
    },
    handleBlur() {
      console.log('Blur');
    },
    handleClear() {
      console.log('Clear');
    },
    handleEnter() {
      console.log('Enter');
    },
    handleMouseenter() {
      console.log('Mouseenter');
    },
    handleChange() {
      console.log('Change');
    },
    onCheckedChange(val, { current, type }) {
      console.log(current);
      // current \u4E0D\u5B58\u5728\uFF0C\u5219\u8868\u793A\u64CD\u4F5C\u5168\u9009
      if (!current) {
        this.value = type === 'check' ? this.options.slice(1) : [];
        return;
      }
      // \u666E\u901A\u64CD\u4F5C
      if (type === 'check') {
        const option = this.options.find((t) => t.value === current);
        this.value.push(option);
      } else {
        this.value = this.value.filter((v) => v.value !== current);
      }
    },
    onTagChange(currentTags, context) {
      console.log(currentTags, context);
      const { trigger, index, item } = context;
      if (trigger === 'clear') {
        this.value = [];
      }
      if (['tag-remove', 'backspace'].includes(trigger)) {
        this.value.splice(index, 1);
      }
      // \u5982\u679C\u5141\u8BB8\u521B\u5EFA\u65B0\u6761\u76EE
      if (this.creatable && trigger === 'enter') {
        const current = { label: item, value: item };
        this.value.push(current);
        const newOptions = this.options.concat(current);
        this.options = newOptions;
        this.inputValue = '';
      }
    },
    onInputChange(val, context) {
      console.log(val, context);
    },
  },
};
<\/script>
<style>
.tdesign-demo__panel-options-multiple {
  width: 100%;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.tdesign-demo__panel-options-multiple .t-checkbox {
  display: flex;
  border-radius: 3px;
  line-height: 22px;
  cursor: pointer;
  padding: 3px 8px;
  color: var(--td-text-color-primary);
  transition: background-color 0.2s linear;
  white-space: nowrap;
  word-wrap: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
}
.tdesign-demo__panel-options-multiple .t-checkbox:hover {
  background-color: var(--td-bg-color-container-hover);
}
</style>
`,_=`<template>
  <t-space direction="vertical" class="tdesign-demo__select-input-multiple" style="width: 100%">
    <div>
      <t-checkbox v-model="allowInput">\u662F\u5426\u5141\u8BB8\u8F93\u5165</t-checkbox>
      <t-checkbox v-model="creatable">\u5141\u8BB8\u521B\u5EFA\u65B0\u9009\u9879\uFF08Enter \u521B\u5EFA\uFF09</t-checkbox>
    </div>
    <div>
      <t-radio-group
        v-model="excessTagsDisplayType"
        :options="[
          { label: '\u9009\u4E2D\u9879\u8FC7\u591A\u6A2A\u5411\u6EDA\u52A8', value: 'scroll' },
          { label: '\u9009\u4E2D\u9879\u8FC7\u591A\u6362\u884C\u663E\u793A', value: 'break-line' },
        ]"
      />
    </div>

    <!-- :popup-props="{ trigger: 'hover' }" -->
    <t-select-input
      :input-value.sync="inputValue"
      :value="value"
      :allow-input="allowInput"
      :placeholder="allowInput ? '\u8BF7\u9009\u62E9\u6216\u8F93\u5165' : '\u8BF7\u9009\u62E9'"
      :tag-input-props="{ excessTagsDisplayType }"
      :popup-props="{
        overlayInnerClassName: ['narrow-scrollbar'],
        overlayInnerStyle: {
          maxHeight: '280px',
          overflowY: 'auto',
          overscrollBehavior: 'contain',
          padding: '6px',
        },
      }"
      clearable
      multiple
      @focus="handleFocus"
      @blur="handleBlur"
      @tag-change="onTagChange"
      @input-change="onInputChange"
      @clear="handleClear"
      @enter="handleEnter"
      @mouseenter="handleMouseenter"
      @change="handleChange"
    >
      <template #panel>
        <t-checkbox-group
          v-if="options.length"
          :value="checkboxValue"
          :options="options"
          class="tdesign-demo__panel-options-multiple"
          @change="onCheckedChange"
        />
        <div v-else class="tdesign-demo__select-empty-multiple">\u6682\u65E0\u6570\u636E</div>
      </template>
      <template #suffixIcon>
        <chevron-down-icon />
      </template>
    </t-select-input>
  </t-space>
</template>
<script setup>
import { ref, computed } from 'vue';
import { ChevronDownIcon } from 'tdesign-icons-vue';

const OPTIONS = [
  // \u5168\u9009
  {
    label: 'Check All',
    checkAll: true,
  },
  {
    label: 'tdesign-vue',
    value: 1,
  },
  {
    label: 'tdesign-react',
    value: 2,
  },
  {
    label: 'tdesign-miniprogram',
    value: 3,
  },
  {
    label: 'tdesign-angular',
    value: 4,
  },
  {
    label: 'tdesign-mobile-vue',
    value: 5,
  },
  {
    label: 'tdesign-mobile-react',
    value: 6,
  },
];
const excessTagsDisplayType = ref('break-line');
const allowInput = ref(true);
const creatable = ref(true);
const inputValue = ref('');
const options = ref([...OPTIONS]);
const value = ref([
  {
    label: 'Vue',
    value: 1,
  },
  {
    label: 'React',
    value: 2,
  },
  {
    label: 'Miniprogram',
    value: 3,
  },
]);
const checkboxValue = computed(() => {
  const arr = [];
  const list = value.value;
  // \u6B64\u5904\u4E0D\u4F7F\u7528 forEach\uFF0C\u51CF\u5C11\u51FD\u6570\u8FED\u4EE3
  for (let i = 0, len = list.length; i < len; i++) {
    list[i].value && arr.push(list[i].value);
  }
  return arr;
});
const handleFocus = (value, context) => {
  console.log('focus', value, context);
};
const handleBlur = () => {
  console.log('Blur');
};
const handleClear = () => {
  console.log('Clear');
};
const handleEnter = () => {
  console.log('Enter');
};
const handleMouseenter = () => {
  console.log('Mouseenter');
};
const handleChange = () => {
  console.log('Change');
};
const onCheckedChange = (val, { current, type }) => {
  console.log(current);
  // current \u4E0D\u5B58\u5728\uFF0C\u5219\u8868\u793A\u64CD\u4F5C\u5168\u9009
  if (!current) {
    value.value = type === 'check' ? options.value.slice(1) : [];
    return;
  }
  // \u666E\u901A\u64CD\u4F5C
  if (type === 'check') {
    const option = options.value.find((t) => t.value === current);
    value.value.push(option);
  } else {
    value.value = value.value.filter((v) => v.value !== current);
  }
};
const onTagChange = (currentTags, context) => {
  console.log(currentTags, context);
  const { trigger, index, item } = context;
  if (trigger === 'clear') {
    value.value = [];
  }
  if (['tag-remove', 'backspace'].includes(trigger)) {
    value.value.splice(index, 1);
  }
  // \u5982\u679C\u5141\u8BB8\u521B\u5EFA\u65B0\u6761\u76EE
  if (creatable.value && trigger === 'enter') {
    const current = {
      label: item,
      value: item,
    };
    value.value.push(current);
    const newOptions = options.value.concat(current);
    options.value = newOptions;
    inputValue.value = '';
  }
};
const onInputChange = (val, context) => {
  console.log(val, context);
};
<\/script>
<style>
.tdesign-demo__panel-options-multiple {
  width: 100%;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.tdesign-demo__panel-options-multiple .t-checkbox {
  display: flex;
  border-radius: 3px;
  line-height: 22px;
  cursor: pointer;
  padding: 3px 8px;
  color: var(--td-text-color-primary);
  transition: background-color 0.2s linear;
  white-space: nowrap;
  word-wrap: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
}
.tdesign-demo__panel-options-multiple .t-checkbox:hover {
  background-color: var(--td-bg-color-container-hover);
}
</style>
`,w=`<template>
  <t-select-input
    :value="selectValue"
    :popup-visible="popupVisible"
    :popup-props="{ overlayInnerStyle: { padding: '6px' } }"
    placeholder="\u8BF7\u8F93\u5165\u4EFB\u610F\u5173\u952E\u8BCD"
    allow-input
    clearable
    style="width: 300px"
    @input-change="onInputChange"
    @popup-visible-change="onPopupVisibleChange"
  >
    <template #panel>
      <ul class="tdesign-demo__select-input-ul-autocomplete">
        <li v-for="item in options" :key="item" @click="() => onOptionClick(item)">
          {{ item }}
        </li>
      </ul>
    </template>
    <template #suffixIcon><search-icon /></template>
  </t-select-input>
</template>
<script>
import { SearchIcon } from 'tdesign-icons-vue';

export default {
  components: {
    SearchIcon,
  },
  data() {
    return {
      selectValue: '',
      popupVisible: false,
      options: ['Student A', 'Student B', 'Student C', 'Student D', 'Student E', 'Student F'],
    };
  },
  methods: {
    onOptionClick(item) {
      this.selectValue = item;
      this.popupVisible = false;
    },
    onInputChange(keyword) {
      this.selectValue = keyword;
      this.options = new Array(5).fill(null).map((t, index) => \`\${keyword} Student \${index}\`);
    },
    onPopupVisibleChange(val) {
      this.popupVisible = val;
    },
  },
};
<\/script>
<style lang="less">
.tdesign-demo__select-input-ul-autocomplete {
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.tdesign-demo__select-input-ul-autocomplete > li {
  display: block;
  border-radius: 3px;
  line-height: 22px;
  cursor: pointer;
  padding: 3px 8px;
  color: var(--td-text-color-primary);
  transition: background-color 0.2s linear;
  white-space: nowrap;
  word-wrap: normal;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tdesign-demo__select-input-ul-autocomplete > li:hover {
  background-color: var(--td-bg-color-container-hover);
}
</style>
`,k=`<template>
  <t-select-input
    :value="selectValue"
    :popup-visible="popupVisible"
    :popup-props="{ overlayInnerStyle: { padding: '6px' } }"
    placeholder="\u8BF7\u8F93\u5165\u4EFB\u610F\u5173\u952E\u8BCD"
    allow-input
    clearable
    style="width: 300px"
    @input-change="onInputChange"
    @popup-visible-change="onPopupVisibleChange"
  >
    <template #panel>
      <ul class="tdesign-demo__select-input-ul-autocomplete">
        <li v-for="item in options" :key="item" @click="() => onOptionClick(item)">
          {{ item }}
        </li>
      </ul>
    </template>
    <template #suffixIcon><search-icon /></template>
  </t-select-input>
</template>
<script setup>
import { ref } from 'vue';
import { SearchIcon } from 'tdesign-icons-vue';

const selectValue = ref('');
const popupVisible = ref(false);
const options = ref(['Student A', 'Student B', 'Student C', 'Student D', 'Student E', 'Student F']);
const onOptionClick = (item) => {
  selectValue.value = item;
  popupVisible.value = false;
};
const onInputChange = (keyword) => {
  selectValue.value = keyword;
  options.value = new Array(5).fill(null).map((t, index) => \`\${keyword} Student \${index}\`);
};
const onPopupVisibleChange = (val) => {
  popupVisible.value = val;
};
<\/script>
<style lang="less">
.tdesign-demo__select-input-ul-autocomplete {
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.tdesign-demo__select-input-ul-autocomplete > li {
  display: block;
  border-radius: 3px;
  line-height: 22px;
  cursor: pointer;
  padding: 3px 8px;
  color: var(--td-text-color-primary);
  transition: background-color 0.2s linear;
  white-space: nowrap;
  word-wrap: normal;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tdesign-demo__select-input-ul-autocomplete > li:hover {
  background-color: var(--td-bg-color-container-hover);
}
</style>
`,C=`<template>
  <t-space direction="vertical">
    <!-- :popup-props="{ trigger: 'hover' }" -->
    <!-- \u524D\u7F6E\u5185\u5BB9\u4F7F\u7528 label \u81EA\u5B9A\u4E49\uFF0C\u652F\u6301\u540C\u540D\u63D2\u69FD label -->
    <t-select-input
      :value="selectValue"
      :popup-visible="popupVisible"
      :popup-props="{ overlayInnerStyle: { padding: '6px' } }"
      label="\u524D\u7F6E\u5185\u5BB9\uFF1A"
      style="width: 300px"
      placeholder="Please Select"
      clearable
      @popup-visible-change="onPopupVisibleChange"
      @clear="onClear"
    >
      <template #panel>
        <ul class="tdesign-demo__select-input-ul-label-suffix">
          <li v-for="item in options" :key="item.value" @click="() => onOptionClick(item)">
            {{ item.label }}
          </li>
        </ul>
      </template>
      <!-- \u540E\u7F6E\u56FE\u6807 -->
      <template #suffixIcon>
        <chevron-down-icon />
      </template>
    </t-select-input>
    <br /><br />

    <!-- \u540E\u7F6E\u5185\u5BB9\u4F7F\u7528 suffix \u81EA\u5B9A\u4E49\uFF0C\u652F\u6301\u540C\u540D\u63D2\u69FD suffix -->
    <t-select-input
      :value="selectValue"
      :popup-visible="popupVisible2"
      :popup-props="{ overlayInnerStyle: { padding: '6px' } }"
      suffix="\u5355\u4F4D\uFF1A\u5143"
      style="width: 300px"
      placeholder="Please Select"
      clearable
      @popup-visible-change="onPopupVisibleChange2"
      @clear="onClear"
    >
      <template #panel>
        <ul class="tdesign-demo__select-input-ul-label-suffix">
          <li v-for="item in options" :key="item.value" @click="() => onOptionClick(item)">
            {{ item.label }}
          </li>
        </ul>
      </template>
      <template #suffixIcon>
        <chevron-down-icon />
      </template>
    </t-select-input>
  </t-space>
</template>
<script>
import { ChevronDownIcon } from 'tdesign-icons-vue';

const initialOptions = [
  // \u5168\u9009
  { label: 'Check All', checkAll: true },
  { label: 'tdesign-vue', value: 1 },
  { label: 'tdesign-react', value: 2 },
  { label: 'tdesign-miniprogram', value: 3 },
  { label: 'tdesign-angular', value: 4 },
  { label: 'tdesign-mobile-vue', value: 5 },
  { label: 'tdesign-mobile-react', value: 6 },
];

export default {
  components: {
    ChevronDownIcon,
  },
  data() {
    return {
      options: initialOptions,
      selectValue: { label: 'tdesign-vue', value: 1 },
      popupVisible: false,
      popupVisible2: false,
    };
  },
  methods: {
    onOptionClick(item) {
      this.selectValue = item;
      // \u9009\u4E2D\u540E\u7ACB\u5373\u5173\u95ED\u6D6E\u5C42
      this.popupVisible = false;
      this.popupVisible2 = false;
    },
    onClear() {
      this.selectValue = undefined;
    },
    onPopupVisibleChange(val, context) {
      console.log(context);
      this.popupVisible = val;
    },
    onPopupVisibleChange2(val) {
      this.popupVisible2 = val;
    },
  },
};
<\/script>
<style lang="less" scoped>
.tdesign-demo__select-input-ul-label-suffix {
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.tdesign-demo__select-input-ul-label-suffix > li {
  display: block;
  border-radius: 3px;
  line-height: 22px;
  cursor: pointer;
  padding: 3px 8px;
  color: var(--td-text-color-primary);
  transition: background-color 0.2s linear;
  white-space: nowrap;
  word-wrap: normal;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tdesign-demo__select-input-ul-label-suffix > li:hover {
  background-color: var(--td-bg-color-container-hover);
}
</style>
`,V=`<template>
  <t-space direction="vertical">
    <!-- :popup-props="{ trigger: 'hover' }" -->
    <!-- \u524D\u7F6E\u5185\u5BB9\u4F7F\u7528 label \u81EA\u5B9A\u4E49\uFF0C\u652F\u6301\u540C\u540D\u63D2\u69FD label -->
    <t-select-input
      :value="selectValue"
      :popup-visible="popupVisible"
      :popup-props="{ overlayInnerStyle: { padding: '6px' } }"
      label="\u524D\u7F6E\u5185\u5BB9\uFF1A"
      style="width: 300px"
      placeholder="Please Select"
      clearable
      @popup-visible-change="onPopupVisibleChange"
      @clear="onClear"
    >
      <template #panel>
        <ul class="tdesign-demo__select-input-ul-label-suffix">
          <li v-for="item in options" :key="item.value" @click="() => onOptionClick(item)">
            {{ item.label }}
          </li>
        </ul>
      </template>
      <!-- \u540E\u7F6E\u56FE\u6807 -->
      <template #suffixIcon>
        <chevron-down-icon />
      </template>
    </t-select-input>
    <br /><br />

    <!-- \u540E\u7F6E\u5185\u5BB9\u4F7F\u7528 suffix \u81EA\u5B9A\u4E49\uFF0C\u652F\u6301\u540C\u540D\u63D2\u69FD suffix -->
    <t-select-input
      :value="selectValue"
      :popup-visible="popupVisible2"
      :popup-props="{ overlayInnerStyle: { padding: '6px' } }"
      suffix="\u5355\u4F4D\uFF1A\u5143"
      style="width: 300px"
      placeholder="Please Select"
      clearable
      @popup-visible-change="onPopupVisibleChange2"
      @clear="onClear"
    >
      <template #panel>
        <ul class="tdesign-demo__select-input-ul-label-suffix">
          <li v-for="item in options" :key="item.value" @click="() => onOptionClick(item)">
            {{ item.label }}
          </li>
        </ul>
      </template>
      <template #suffixIcon>
        <chevron-down-icon />
      </template>
    </t-select-input>
  </t-space>
</template>
<script setup>
import { ref } from 'vue';
import { ChevronDownIcon } from 'tdesign-icons-vue';

const initialOptions = [
  // \u5168\u9009
  {
    label: 'Check All',
    checkAll: true,
  },
  {
    label: 'tdesign-vue',
    value: 1,
  },
  {
    label: 'tdesign-react',
    value: 2,
  },
  {
    label: 'tdesign-miniprogram',
    value: 3,
  },
  {
    label: 'tdesign-angular',
    value: 4,
  },
  {
    label: 'tdesign-mobile-vue',
    value: 5,
  },
  {
    label: 'tdesign-mobile-react',
    value: 6,
  },
];
const options = ref(initialOptions);
const selectValue = ref({
  label: 'tdesign-vue',
  value: 1,
});
const popupVisible = ref(false);
const popupVisible2 = ref(false);
const onOptionClick = (item) => {
  selectValue.value = item;
  // \u9009\u4E2D\u540E\u7ACB\u5373\u5173\u95ED\u6D6E\u5C42
  popupVisible.value = false;
  popupVisible2.value = false;
};
const onClear = () => {
  selectValue.value = undefined;
};
const onPopupVisibleChange = (val, context) => {
  console.log(context);
  popupVisible.value = val;
};
const onPopupVisibleChange2 = (val) => {
  popupVisible2.value = val;
};
<\/script>
<style lang="less" scoped>
.tdesign-demo__select-input-ul-label-suffix {
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.tdesign-demo__select-input-ul-label-suffix > li {
  display: block;
  border-radius: 3px;
  line-height: 22px;
  cursor: pointer;
  padding: 3px 8px;
  color: var(--td-text-color-primary);
  transition: background-color 0.2s linear;
  white-space: nowrap;
  word-wrap: normal;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tdesign-demo__select-input-ul-label-suffix > li:hover {
  background-color: var(--td-bg-color-container-hover);
}
</style>
`,I=`<template>
  <t-space direction="vertical" class="tdesign-demo-select-input-status" style="width: 100%">
    <t-space align="center">
      <span>\u7981\u7528\u72B6\u6001\uFF1A</span>
      <t-select-input :value="selectValue" disabled tips="\u8FD9\u662F\u7981\u7528\u72B6\u6001\u6587\u672C\u63D0\u793A" placeholder="Please Select">
        <template #panel>
          <div class="tdesign-demo__select-empty-status">\u6682\u65E0\u6570\u636E</div>
        </template>
      </t-select-input>
    </t-space>

    <t-space align="center">
      <span>\u53EA\u8BFB\u72B6\u6001\uFF1A</span>
      <t-select-input :value="selectValue" readonly tips="\u8FD9\u662F\u666E\u901A\u72B6\u6001\u7684\u6587\u672C\u63D0\u793A" placeholder="Please Select">
        <template #panel>
          <div class="tdesign-demo__select-empty-status">\u6682\u65E0\u6570\u636E</div>
        </template>
      </t-select-input>
    </t-space>

    <t-space align="center">
      <span>\u6210\u529F\u72B6\u6001\uFF1A</span>
      <t-select-input :value="selectValue" status="success" tips="\u6821\u9A8C\u901A\u8FC7\u6587\u672C\u63D0\u793A" placeholder="Please Select">
        <template #panel>
          <div class="tdesign-demo__select-empty-status">\u6682\u65E0\u6570\u636E</div>
        </template>
      </t-select-input>
    </t-space>

    <t-space align="center">
      <span>\u8B66\u544A\u72B6\u6001\uFF1A</span>
      <t-select-input :value="selectValue" status="warning" tips="\u6821\u9A8C\u4E0D\u901A\u8FC7\u6587\u672C\u63D0\u793A" placeholder="Please Select">
        <template #panel>
          <div class="tdesign-demo__select-empty-status">\u6682\u65E0\u6570\u636E</div>
        </template>
      </t-select-input>
    </t-space>

    <t-space align="center">
      <span>\u9519\u8BEF\u72B6\u6001\uFF1A</span>
      <t-select-input :value="selectValue" status="error" tips="\u6821\u9A8C\u5B58\u5728\u4E25\u91CD\u95EE\u9898\u6587\u672C\u63D0\u793A" placeholder="Please Select">
        <template #panel>
          <div class="tdesign-demo__select-empty-status">\u6682\u65E0\u6570\u636E</div>
        </template>
      </t-select-input>
    </t-space>
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      selectValue: 'TDesign',
    };
  },
};
<\/script>
<style>
.tdesign-demo__select-empty-status {
  text-align: center;
  color: var(--td-text-color-disabled);
  line-height: 32px;
}
.tdesign-demo-select-input-status > div {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.tdesign-demo-select-input-status .t-select-input__wrap {
  width: 300px;
  height: 32px;
}
</style>
`,T=`<template>
  <t-space direction="vertical" class="tdesign-demo-select-input-status" style="width: 100%">
    <t-space align="center">
      <span>\u7981\u7528\u72B6\u6001\uFF1A</span>
      <t-select-input :value="selectValue" disabled tips="\u8FD9\u662F\u7981\u7528\u72B6\u6001\u6587\u672C\u63D0\u793A" placeholder="Please Select">
        <template #panel>
          <div class="tdesign-demo__select-empty-status">\u6682\u65E0\u6570\u636E</div>
        </template>
      </t-select-input>
    </t-space>

    <t-space align="center">
      <span>\u53EA\u8BFB\u72B6\u6001\uFF1A</span>
      <t-select-input :value="selectValue" readonly tips="\u8FD9\u662F\u666E\u901A\u72B6\u6001\u7684\u6587\u672C\u63D0\u793A" placeholder="Please Select">
        <template #panel>
          <div class="tdesign-demo__select-empty-status">\u6682\u65E0\u6570\u636E</div>
        </template>
      </t-select-input>
    </t-space>

    <t-space align="center">
      <span>\u6210\u529F\u72B6\u6001\uFF1A</span>
      <t-select-input :value="selectValue" status="success" tips="\u6821\u9A8C\u901A\u8FC7\u6587\u672C\u63D0\u793A" placeholder="Please Select">
        <template #panel>
          <div class="tdesign-demo__select-empty-status">\u6682\u65E0\u6570\u636E</div>
        </template>
      </t-select-input>
    </t-space>

    <t-space align="center">
      <span>\u8B66\u544A\u72B6\u6001\uFF1A</span>
      <t-select-input :value="selectValue" status="warning" tips="\u6821\u9A8C\u4E0D\u901A\u8FC7\u6587\u672C\u63D0\u793A" placeholder="Please Select">
        <template #panel>
          <div class="tdesign-demo__select-empty-status">\u6682\u65E0\u6570\u636E</div>
        </template>
      </t-select-input>
    </t-space>

    <t-space align="center">
      <span>\u9519\u8BEF\u72B6\u6001\uFF1A</span>
      <t-select-input :value="selectValue" status="error" tips="\u6821\u9A8C\u5B58\u5728\u4E25\u91CD\u95EE\u9898\u6587\u672C\u63D0\u793A" placeholder="Please Select">
        <template #panel>
          <div class="tdesign-demo__select-empty-status">\u6682\u65E0\u6570\u636E</div>
        </template>
      </t-select-input>
    </t-space>
  </t-space>
</template>
<script setup>
import { ref } from 'vue';

const selectValue = ref('TDesign');
<\/script>
<style>
.tdesign-demo__select-empty-status {
  text-align: center;
  color: var(--td-text-color-disabled);
  line-height: 32px;
}
.tdesign-demo-select-input-status > div {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.tdesign-demo-select-input-status .t-select-input__wrap {
  width: 300px;
  height: 32px;
}
</style>
`,S=`<template>
  <t-space class="tdesign-demo__select-input-width" direction="vertical">
    <div>
      <span>\u4E0B\u62C9\u6846\u9ED8\u8BA4\u5BBD\u5EA6\uFF1A</span>
      <t-select-input :value="selectValue" placeholder="Please Select" class="t-demo-normal">
        <template #panel>
          <div class="tdesign-demo__select-empty-width">\u4E0B\u62C9\u6846\u5BBD\u5EA6\u548C\u89E6\u53D1\u5143\u7D20\u5BBD\u5EA6\u4FDD\u6301\u4E00\u81F4\uFF08\u9ED8\u8BA4\uFF09</div>
        </template>
      </t-select-input>
    </div>

    <div>
      <span>\u4E0B\u62C9\u6846\u6700\u5927\u5BBD\u5EA6\uFF1A</span>
      <t-select-input :value="selectValue" placeholder="Please Select" class="t-demo-normal">
        <template #panel>
          <div class="tdesign-demo__select-empty-width">
            \u4E0B\u62C9\u6846\u5BBD\u5EA6\u548C\u89E6\u53D1\u5143\u7D20\u5BBD\u5EA6\u4FDD\u6301\u4E00\u81F4\uFF0C\u4F46\u662F\u5F53\u4E0B\u62C9\u6846\u5185\u5BB9\u5BBD\u5EA6\u8D85\u51FA\u65F6\uFF0C\u81EA\u52A8\u6491\u5F00\u4E0B\u62C9\u6846\u5BBD\u5EA6\uFF0C\u6700\u5927\u4E0D\u8D85\u8FC7 1000px\uFF08\u9ED8\u8BA4\uFF09
          </div>
        </template>
      </t-select-input>
    </div>

    <div>
      <span>\u4E0E\u5185\u5BB9\u5BBD\u5EA6\u4E00\u81F4\uFF1A</span>
      <t-select-input
        :value="selectValue"
        :popup-props="{
          overlayInnerStyle: { width: 'auto' },
        }"
        placeholder="Please Select"
        class="t-demo-normal"
      >
        <template #panel>
          <div class="tdesign-demo__select-empty-width">\u5BBD\u5EA6\u968F\u5185\u5BB9\u5BBD\u5EA6\u81EA\u9002\u5E94</div>
        </template>
      </t-select-input>
    </div>

    <div>
      <span>\u4E0B\u62C9\u6846\u56FA\u5B9A\u5BBD\u5EA6\uFF1A</span>
      <t-select-input
        :value="selectValue"
        :popup-props="{
          overlayInnerStyle: { width: '360px' },
        }"
        placeholder="Please Select"
        class="t-demo-normal"
      >
        <template #panel>
          <div class="tdesign-demo__select-empty-width">\u56FA\u5B9A\u5BBD\u5EA6 360px</div>
        </template>
      </t-select-input>
    </div>
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      selectValue: 'TDesign',
    };
  },
};
<\/script>
<style>
.tdesign-demo__select-empty-width {
  text-align: center;
  color: var(--td-text-color-disabled);
  line-height: 32px;
}
.tdesign-demo__select-input-width .t-input__wrap {
  width: 380px;
  vertical-align: middle;
  display: inline-flex;
}

.tdesign-demo__select-input-width .t-demo-normal {
  width: 380px;
  vertical-align: middle;
  display: inline-flex;
}
</style>
`,O=`<template>
  <t-space class="tdesign-demo__select-input-width" direction="vertical">
    <div>
      <span>\u4E0B\u62C9\u6846\u9ED8\u8BA4\u5BBD\u5EA6\uFF1A</span>
      <t-select-input :value="selectValue" placeholder="Please Select" class="t-demo-normal">
        <template #panel>
          <div class="tdesign-demo__select-empty-width">\u4E0B\u62C9\u6846\u5BBD\u5EA6\u548C\u89E6\u53D1\u5143\u7D20\u5BBD\u5EA6\u4FDD\u6301\u4E00\u81F4\uFF08\u9ED8\u8BA4\uFF09</div>
        </template>
      </t-select-input>
    </div>

    <div>
      <span>\u4E0B\u62C9\u6846\u6700\u5927\u5BBD\u5EA6\uFF1A</span>
      <t-select-input :value="selectValue" placeholder="Please Select" class="t-demo-normal">
        <template #panel>
          <div class="tdesign-demo__select-empty-width">
            \u4E0B\u62C9\u6846\u5BBD\u5EA6\u548C\u89E6\u53D1\u5143\u7D20\u5BBD\u5EA6\u4FDD\u6301\u4E00\u81F4\uFF0C\u4F46\u662F\u5F53\u4E0B\u62C9\u6846\u5185\u5BB9\u5BBD\u5EA6\u8D85\u51FA\u65F6\uFF0C\u81EA\u52A8\u6491\u5F00\u4E0B\u62C9\u6846\u5BBD\u5EA6\uFF0C\u6700\u5927\u4E0D\u8D85\u8FC7 1000px\uFF08\u9ED8\u8BA4\uFF09
          </div>
        </template>
      </t-select-input>
    </div>

    <div>
      <span>\u4E0E\u5185\u5BB9\u5BBD\u5EA6\u4E00\u81F4\uFF1A</span>
      <t-select-input
        :value="selectValue"
        :popup-props="{
          overlayInnerStyle: { width: 'auto' },
        }"
        placeholder="Please Select"
        class="t-demo-normal"
      >
        <template #panel>
          <div class="tdesign-demo__select-empty-width">\u5BBD\u5EA6\u968F\u5185\u5BB9\u5BBD\u5EA6\u81EA\u9002\u5E94</div>
        </template>
      </t-select-input>
    </div>

    <div>
      <span>\u4E0B\u62C9\u6846\u56FA\u5B9A\u5BBD\u5EA6\uFF1A</span>
      <t-select-input
        :value="selectValue"
        :popup-props="{
          overlayInnerStyle: { width: '360px' },
        }"
        placeholder="Please Select"
        class="t-demo-normal"
      >
        <template #panel>
          <div class="tdesign-demo__select-empty-width">\u56FA\u5B9A\u5BBD\u5EA6 360px</div>
        </template>
      </t-select-input>
    </div>
  </t-space>
</template>
<script setup>
import { ref } from 'vue';

const selectValue = ref('TDesign');
<\/script>
<style>
.tdesign-demo__select-empty-width {
  text-align: center;
  color: var(--td-text-color-disabled);
  line-height: 32px;
}
.tdesign-demo__select-input-width .t-input__wrap {
  width: 380px;
  vertical-align: middle;
  display: inline-flex;
}

.tdesign-demo__select-input-width .t-demo-normal {
  width: 380px;
  vertical-align: middle;
  display: inline-flex;
}
</style>
`,P=`<template>
  <t-space direction="vertical" class="tdesign-demo__select-input-excess-tags-display-type" style="width: 100%">
    <!-- excessTagsDisplayType: 'scroll'\uFF0C\u8D85\u51FA\u65F6\uFF0C\u6EDA\u52A8\u663E\u793A -->
    <p>\u7B2C\u4E00\u79CD\u5448\u73B0\u65B9\u5F0F\uFF1A\u8D85\u51FA\u65F6\u6EDA\u52A8\u663E\u793A</p>
    <t-select-input
      :value="value"
      :tag-input-props="{ excessTagsDisplayType: 'scroll' }"
      :popup-props="{ overlayInnerStyle: { padding: '6px' } }"
      placeholder="\u8BF7\u9009\u62E9"
      allow-input
      clearable
      multiple
      @tag-change="onTagChange"
    >
      <template #panel>
        <t-checkbox-group
          :value="checkboxValue"
          :options="options"
          class="tdesign-demo__panel-options-excess-tags-display-type"
          @change="onCheckedChange"
        />
      </template>
    </t-select-input>

    <!-- excessTagsDisplayType: 'scroll'\uFF0C\u8D85\u51FA\u65F6\uFF0C\u6362\u884C\u663E\u793A -->
    <p>\u7B2C\u4E8C\u79CD\u5448\u73B0\u65B9\u5F0F\uFF1A\u8D85\u51FA\u65F6\u6362\u884C\u663E\u793A</p>
    <t-select-input
      :value="value"
      :tag-input-props="{ excessTagsDisplayType: 'break-line' }"
      :popup-props="{ overlayInnerStyle: { padding: '6px' } }"
      placeholder="\u8BF7\u9009\u62E9"
      allow-input
      clearable
      multiple
      @tag-change="onTagChange"
    >
      <template #panel>
        <t-checkbox-group
          :value="checkboxValue"
          :options="options"
          class="tdesign-demo__panel-options-excess-tags-display-type"
          @change="onCheckedChange"
        />
      </template>
    </t-select-input>
  </t-space>
</template>
<script>
const OPTIONS = [
  // \u5168\u9009
  { label: 'Check All', checkAll: true },
  { label: 'tdesign-vue', value: 1 },
  { label: 'tdesign-react', value: 2 },
  { label: 'tdesign-miniprogram', value: 3 },
  { label: 'tdesign-angular', value: 4 },
  { label: 'tdesign-mobile-vue', value: 5 },
  { label: 'tdesign-mobile-react', value: 6 },
];

export default {
  data() {
    return {
      options: [...OPTIONS],
      value: OPTIONS.slice(1),
    };
  },
  computed: {
    checkboxValue() {
      const arr = [];
      const list = this.value;
      // \u6B64\u5904\u4E0D\u4F7F\u7528 forEach\uFF0C\u51CF\u5C11\u51FD\u6570\u8FED\u4EE3
      for (let i = 0, len = list.length; i < len; i++) {
        list[i].value && arr.push(list[i].value);
      }
      return arr;
    },
  },
  methods: {
    onCheckedChange(val, { current, type }) {
      // current \u4E0D\u5B58\u5728\uFF0C\u5219\u8868\u793A\u64CD\u4F5C\u5168\u9009
      if (!current) {
        this.value = type === 'check' ? this.options.slice(1) : [];
        return;
      }
      // \u666E\u901A\u64CD\u4F5C
      if (type === 'check') {
        const option = this.options.find((t) => t.value === current);
        this.value.push(option);
      } else {
        this.value = this.value.filter((v) => v.value !== current);
      }
    },
    onTagChange(currentTags, context) {
      console.log(currentTags, context);
      const { trigger, index, item } = context;
      if (trigger === 'clear') {
        this.value = [];
      }
      if (['tag-remove', 'backspace'].includes(trigger)) {
        this.value.splice(index, 1);
      }
      if (trigger === 'enter') {
        const current = { label: item, value: item };
        this.value.push(current);
        this.options = this.options.concat(current);
      }
    },
  },
};
<\/script>
<style>
.tdesign-demo__panel-options-excess-tags-display-type {
  width: 100%;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.tdesign-demo__panel-options-excess-tags-display-type .t-checkbox {
  display: flex;
  border-radius: 3px;
  line-height: 22px;
  cursor: pointer;
  padding: 3px 8px;
  color: var(--td-text-color-primary);
  transition: background-color 0.2s linear;
  white-space: nowrap;
  word-wrap: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: 0;
}

.tdesign-demo__panel-options-excess-tags-display-type .t-checkbox:hover {
  background-color: var(--td-bg-color-container-hover);
}
</style>
`,D=`<template>
  <t-space direction="vertical" class="tdesign-demo__select-input-excess-tags-display-type" style="width: 100%">
    <!-- excessTagsDisplayType: 'scroll'\uFF0C\u8D85\u51FA\u65F6\uFF0C\u6EDA\u52A8\u663E\u793A -->
    <p>\u7B2C\u4E00\u79CD\u5448\u73B0\u65B9\u5F0F\uFF1A\u8D85\u51FA\u65F6\u6EDA\u52A8\u663E\u793A</p>
    <t-select-input
      :value="value"
      :tag-input-props="{ excessTagsDisplayType: 'scroll' }"
      :popup-props="{ overlayInnerStyle: { padding: '6px' } }"
      placeholder="\u8BF7\u9009\u62E9"
      allow-input
      clearable
      multiple
      @tag-change="onTagChange"
    >
      <template #panel>
        <t-checkbox-group
          :value="checkboxValue"
          :options="options"
          class="tdesign-demo__panel-options-excess-tags-display-type"
          @change="onCheckedChange"
        />
      </template>
    </t-select-input>

    <!-- excessTagsDisplayType: 'scroll'\uFF0C\u8D85\u51FA\u65F6\uFF0C\u6362\u884C\u663E\u793A -->
    <p>\u7B2C\u4E8C\u79CD\u5448\u73B0\u65B9\u5F0F\uFF1A\u8D85\u51FA\u65F6\u6362\u884C\u663E\u793A</p>
    <t-select-input
      :value="value"
      :tag-input-props="{ excessTagsDisplayType: 'break-line' }"
      :popup-props="{ overlayInnerStyle: { padding: '6px' } }"
      placeholder="\u8BF7\u9009\u62E9"
      allow-input
      clearable
      multiple
      @tag-change="onTagChange"
    >
      <template #panel>
        <t-checkbox-group
          :value="checkboxValue"
          :options="options"
          class="tdesign-demo__panel-options-excess-tags-display-type"
          @change="onCheckedChange"
        />
      </template>
    </t-select-input>
  </t-space>
</template>
<script setup>
import { ref, computed } from 'vue';

const OPTIONS = [
  // \u5168\u9009
  {
    label: 'Check All',
    checkAll: true,
  },
  {
    label: 'tdesign-vue',
    value: 1,
  },
  {
    label: 'tdesign-react',
    value: 2,
  },
  {
    label: 'tdesign-miniprogram',
    value: 3,
  },
  {
    label: 'tdesign-angular',
    value: 4,
  },
  {
    label: 'tdesign-mobile-vue',
    value: 5,
  },
  {
    label: 'tdesign-mobile-react',
    value: 6,
  },
];
const options = ref([...OPTIONS]);
const value = ref(OPTIONS.slice(1));
const checkboxValue = computed(() => {
  const arr = [];
  const list = value.value;
  // \u6B64\u5904\u4E0D\u4F7F\u7528 forEach\uFF0C\u51CF\u5C11\u51FD\u6570\u8FED\u4EE3
  for (let i = 0, len = list.length; i < len; i++) {
    list[i].value && arr.push(list[i].value);
  }
  return arr;
});
const onCheckedChange = (val, { current, type }) => {
  // current \u4E0D\u5B58\u5728\uFF0C\u5219\u8868\u793A\u64CD\u4F5C\u5168\u9009
  if (!current) {
    value.value = type === 'check' ? options.value.slice(1) : [];
    return;
  }
  // \u666E\u901A\u64CD\u4F5C
  if (type === 'check') {
    const option = options.value.find((t) => t.value === current);
    value.value.push(option);
  } else {
    value.value = value.value.filter((v) => v.value !== current);
  }
};
const onTagChange = (currentTags, context) => {
  console.log(currentTags, context);
  const { trigger, index, item } = context;
  if (trigger === 'clear') {
    value.value = [];
  }
  if (['tag-remove', 'backspace'].includes(trigger)) {
    value.value.splice(index, 1);
  }
  if (trigger === 'enter') {
    const current = {
      label: item,
      value: item,
    };
    value.value.push(current);
    options.value = options.value.concat(current);
  }
};
<\/script>
<style>
.tdesign-demo__panel-options-excess-tags-display-type {
  width: 100%;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.tdesign-demo__panel-options-excess-tags-display-type .t-checkbox {
  display: flex;
  border-radius: 3px;
  line-height: 22px;
  cursor: pointer;
  padding: 3px 8px;
  color: var(--td-text-color-primary);
  transition: background-color 0.2s linear;
  white-space: nowrap;
  word-wrap: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: 0;
}

.tdesign-demo__panel-options-excess-tags-display-type .t-checkbox:hover {
  background-color: var(--td-bg-color-container-hover);
}
</style>
`,A=`<template>
  <t-space direction="vertical" class="tdesign-demo__select-input-collapsed-items">
    <t-select-input
      :value="value"
      :min-collapsed-num="1"
      :popup-props="{ overlayInnerStyle: { padding: '6px' } }"
      placeholder="\u8BF7\u9009\u62E9"
      allow-input
      clearable
      multiple
      @tag-change="onTagChange"
    >
      <template #panel>
        <t-checkbox-group
          :value="checkboxValue"
          :options="options"
          class="tdesign-demo__panel-options-collapsed-items"
          @change="onCheckedChange"
        />
      </template>
    </t-select-input>

    <!-- \u7B2C\u4E00\u79CD\u65B9\u5F0F\uFF1A\u4F7F\u7528\u6E32\u67D3\u51FD\u6570 collapsed-items \u81EA\u5B9A\u4E49\u6298\u53E0\u9879 -->
    <t-select-input
      :value="value"
      :min-collapsed-num="2"
      :collapsed-items="renderCollapsedItems"
      :popup-props="{ overlayInnerStyle: { padding: '6px' } }"
      placeholder="\u8BF7\u9009\u62E9"
      allow-input
      clearable
      multiple
      @tag-change="onTagChange"
    >
      <template #panel>
        <t-checkbox-group
          :value="checkboxValue"
          :options="options"
          class="tdesign-demo__panel-options-collapsed-items"
          @change="onCheckedChange"
        />
      </template>
    </t-select-input>

    <!-- \u7B2C\u4E8C\u79CD\u65B9\u5F0F\uFF1A\u4F7F\u7528\u63D2\u69FD collapsedItems \u81EA\u5B9A\u4E49\u6298\u53E0\u9879 -->
    <t-select-input
      :value="value"
      :min-collapsed-num="3"
      :popup-props="{ overlayInnerStyle: { padding: '6px' } }"
      placeholder="\u8BF7\u9009\u62E9"
      allow-input
      clearable
      multiple
      @tag-change="onTagChange"
    >
      <template #collapsedItems="{ collapsedTags }">
        <t-popup>
          <t-tag>More({{ collapsedTags.length }})</t-tag>
          <template #content>
            <t-tag v-for="item in collapsedTags" :key="item" style="margin: 4px 4px 4px 0">
              {{ item }}
            </t-tag>
          </template>
        </t-popup>
      </template>
      <template #panel>
        <t-checkbox-group
          :value="checkboxValue"
          :options="options"
          class="tdesign-demo__panel-options-collapsed-items"
          @change="onCheckedChange"
        />
      </template>
    </t-select-input>
  </t-space>
</template>
<script lang="jsx">
import { Tag } from 'tdesign-vue';

const OPTIONS = [
  // \u5168\u9009
  { label: 'Check All', checkAll: true },
  { label: 'tdesign-vue', value: 1 },
  { label: 'tdesign-react', value: 2 },
  { label: 'tdesign-miniprogram', value: 3 },
  { label: 'tdesign-angular', value: 4 },
  { label: 'tdesign-mobile-vue', value: 5 },
  { label: 'tdesign-mobile-react', value: 6 },
];

export default {
  data() {
    return {
      options: [...OPTIONS],
      value: OPTIONS.slice(1),
    };
  },
  computed: {
    checkboxValue() {
      const arr = [];
      const list = this.value;
      // \u6B64\u5904\u4E0D\u4F7F\u7528 forEach\uFF0C\u51CF\u5C11\u51FD\u6570\u8FED\u4EE3
      for (let i = 0, len = list.length; i < len; i++) {
        list[i].value && arr.push(list[i].value);
      }
      return arr;
    },
  },
  methods: {
    onCheckedChange(val, { current, type }) {
      // current \u4E0D\u5B58\u5728\uFF0C\u5219\u8868\u793A\u64CD\u4F5C\u5168\u9009
      if (!current) {
        this.value = type === 'check' ? this.options.slice(1) : [];
        return;
      }
      // \u666E\u901A\u64CD\u4F5C
      if (type === 'check') {
        const option = this.options.find((t) => t.value === current);
        this.value.push(option);
      } else {
        this.value = this.value.filter((v) => v.value !== current);
      }
    },
    onTagChange(currentTags, context) {
      console.log(currentTags, context);
      const { trigger, index, item } = context;
      if (trigger === 'clear') {
        this.value = [];
      }
      if (['tag-remove', 'backspace'].includes(trigger)) {
        this.value.splice(index, 1);
      }
      if (trigger === 'enter') {
        const current = { label: item, value: item };
        this.value.push(current);
        this.options = this.options.concat(current);
      }
    },
    renderCollapsedItems(_, { collapsedTags }) {
      return <Tag>\u66F4\u591A({collapsedTags.length})</Tag>;
    },
  },
};
<\/script>
<style>
.tdesign-demo__panel-options-collapsed-items {
  width: 100%;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.tdesign-demo__panel-options-collapsed-items .t-checkbox {
  display: flex;
  border-radius: 3px;
  line-height: 22px;
  cursor: pointer;
  padding: 3px 8px;
  color: var(--td-text-color-primary);
  transition: background-color 0.2s linear;
  white-space: nowrap;
  word-wrap: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
}

.tdesign-demo__panel-options-collapsed-items .t-checkbox:hover {
  background-color: var(--td-bg-color-container-hover);
}
</style>
`,N=`<template>
  <t-space direction="vertical" class="tdesign-demo__select-input-collapsed-items">
    <t-select-input
      :value="value"
      :min-collapsed-num="1"
      :popup-props="{ overlayInnerStyle: { padding: '6px' } }"
      placeholder="\u8BF7\u9009\u62E9"
      allow-input
      clearable
      multiple
      @tag-change="onTagChange"
    >
      <template #panel>
        <t-checkbox-group
          :value="checkboxValue"
          :options="options"
          class="tdesign-demo__panel-options-collapsed-items"
          @change="onCheckedChange"
        />
      </template>
    </t-select-input>

    <!-- \u7B2C\u4E00\u79CD\u65B9\u5F0F\uFF1A\u4F7F\u7528\u6E32\u67D3\u51FD\u6570 collapsed-items \u81EA\u5B9A\u4E49\u6298\u53E0\u9879 -->
    <t-select-input
      :value="value"
      :min-collapsed-num="2"
      :collapsed-items="renderCollapsedItems"
      :popup-props="{ overlayInnerStyle: { padding: '6px' } }"
      placeholder="\u8BF7\u9009\u62E9"
      allow-input
      clearable
      multiple
      @tag-change="onTagChange"
    >
      <template #panel>
        <t-checkbox-group
          :value="checkboxValue"
          :options="options"
          class="tdesign-demo__panel-options-collapsed-items"
          @change="onCheckedChange"
        />
      </template>
    </t-select-input>

    <!-- \u7B2C\u4E8C\u79CD\u65B9\u5F0F\uFF1A\u4F7F\u7528\u63D2\u69FD collapsedItems \u81EA\u5B9A\u4E49\u6298\u53E0\u9879 -->
    <t-select-input
      :value="value"
      :min-collapsed-num="3"
      :popup-props="{ overlayInnerStyle: { padding: '6px' } }"
      placeholder="\u8BF7\u9009\u62E9"
      allow-input
      clearable
      multiple
      @tag-change="onTagChange"
    >
      <template #collapsedItems="{ collapsedTags }">
        <t-popup>
          <t-tag>More({{ collapsedTags.length }})</t-tag>
          <template #content>
            <t-tag v-for="item in collapsedTags" :key="item" style="margin: 4px 4px 4px 0">
              {{ item }}
            </t-tag>
          </template>
        </t-popup>
      </template>
      <template #panel>
        <t-checkbox-group
          :value="checkboxValue"
          :options="options"
          class="tdesign-demo__panel-options-collapsed-items"
          @change="onCheckedChange"
        />
      </template>
    </t-select-input>
  </t-space>
</template>
<script setup lang="jsx">
import { ref, computed } from 'vue';
import { Tag } from 'tdesign-vue';

const OPTIONS = [
  // \u5168\u9009
  {
    label: 'Check All',
    checkAll: true,
  },
  {
    label: 'tdesign-vue',
    value: 1,
  },
  {
    label: 'tdesign-react',
    value: 2,
  },
  {
    label: 'tdesign-miniprogram',
    value: 3,
  },
  {
    label: 'tdesign-angular',
    value: 4,
  },
  {
    label: 'tdesign-mobile-vue',
    value: 5,
  },
  {
    label: 'tdesign-mobile-react',
    value: 6,
  },
];
const options = ref([...OPTIONS]);
const value = ref(OPTIONS.slice(1));
const checkboxValue = computed(() => {
  const arr = [];
  const list = value.value;
  // \u6B64\u5904\u4E0D\u4F7F\u7528 forEach\uFF0C\u51CF\u5C11\u51FD\u6570\u8FED\u4EE3
  for (let i = 0, len = list.length; i < len; i++) {
    list[i].value && arr.push(list[i].value);
  }
  return arr;
});
const onCheckedChange = (val, { current, type }) => {
  // current \u4E0D\u5B58\u5728\uFF0C\u5219\u8868\u793A\u64CD\u4F5C\u5168\u9009
  if (!current) {
    value.value = type === 'check' ? options.value.slice(1) : [];
    return;
  }
  // \u666E\u901A\u64CD\u4F5C
  if (type === 'check') {
    const option = options.value.find((t) => t.value === current);
    value.value.push(option);
  } else {
    value.value = value.value.filter((v) => v.value !== current);
  }
};
const onTagChange = (currentTags, context) => {
  console.log(currentTags, context);
  const { trigger, index, item } = context;
  if (trigger === 'clear') {
    value.value = [];
  }
  if (['tag-remove', 'backspace'].includes(trigger)) {
    value.value.splice(index, 1);
  }
  if (trigger === 'enter') {
    const current = {
      label: item,
      value: item,
    };
    value.value.push(current);
    options.value = options.value.concat(current);
  }
};
const renderCollapsedItems = (_, { collapsedTags }) => <Tag>\u66F4\u591A({collapsedTags.length})</Tag>;
<\/script>
<style>
.tdesign-demo__panel-options-collapsed-items {
  width: 100%;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.tdesign-demo__panel-options-collapsed-items .t-checkbox {
  display: flex;
  border-radius: 3px;
  line-height: 22px;
  cursor: pointer;
  padding: 3px 8px;
  color: var(--td-text-color-primary);
  transition: background-color 0.2s linear;
  white-space: nowrap;
  word-wrap: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
}

.tdesign-demo__panel-options-collapsed-items .t-checkbox:hover {
  background-color: var(--td-bg-color-container-hover);
}
</style>
`,E=`<template>
  <t-space direction="vertical" class="tdesign-demo-select-input-custom-tag">
    <!-- \u5355\u9009\uFF0C\u4F7F\u7528 valueDisplay \u63D2\u69FD\u5B9A\u4E49\u9009\u4E2D\u7684\u67D0\u4E00\u9879\u7684\u5185\u5BB9\uFF0C\u4E5F\u53EF\u4F7F\u7528\u540C\u540D\u6E32\u67D3\u51FD\u6570 props.valueDisplay -->
    <t-select-input
      :popup-props="{ overlayInnerStyle: { padding: '6px' } }"
      :value="selectValue1"
      placeholder="Please Select"
      clearable
      @clear="onClear"
    >
      <template #valueDisplay>
        <span v-if="selectValue1" class="displaySpan">
          <control-platform-icon class="tdesign-demo-select-input__img" />
          {{ selectValue1.label }}
        </span>
      </template>
      <template #panel>
        <ul class="tdesign-demo__select-input-ul-single">
          <li v-for="item in options" :key="item.value" @click="() => onOptionClick(item)">
            {{ item.label }}
          </li>
        </ul>
      </template>
    </t-select-input>

    <!-- \u591A\u9009\uFF0C\u7B2C\u4E00\u79CD\u65B9\u5F0F\uFF1A\u4F7F\u7528 tag \u63D2\u69FD\u5B9A\u4E49\u9009\u4E2D\u7684\u67D0\u4E00\u9879\u7684\u5185\u5BB9\uFF0C\u4E5F\u53EF\u4F7F\u7528\u540C\u540D\u6E32\u67D3\u51FD\u6570 props.tag -->
    <t-select-input :value="selectValue2" clearable placeholder="Please Select" multiple @tag-change="onTagChange2">
      <template #tag="{ value }">
        <span class="displaySpan">
          <control-platform-icon />
          {{ value }}
        </span>
      </template>
      <template #panel>
        <div class="tdesign-demo__select-empty-custom">\u6682\u65E0\u793A\u610F\u6570\u636E</div>
      </template>
    </t-select-input>

    <!-- \u591A\u9009\uFF0C\u7B2C\u4E8C\u79CD\u65B9\u5F0F\uFF1A\u4F7F\u7528 valueDisplay \u63D2\u69FD\u5B9A\u4E49\u5168\u90E8\u9009\u4E2D\u9879\u7684\u5185\u5BB9\uFF0C\u4E5F\u53EF\u4F7F\u7528\u540C\u540D\u6E32\u67D3\u51FD\u6570 props.valueDisplay -->
    <t-select-input :value="selectValue3" placeholder="Please Select" multiple @tag-change="onTagChange3">
      <template #valueDisplay="{ value, onClose }">
        <!-- <span><LayersIcon />{{ value }}</span> -->
        <t-tag
          v-for="(item, index) in value"
          :key="item"
          closable
          style="margin-right: 4px"
          @close="() => onClose(index)"
        >
          <span class="displaySpan">
            <control-platform-icon />
            <span>{{ item }}</span>
          </span>
        </t-tag>
      </template>
      <template #panel>
        <div class="tdesign-demo__select-empty-custom">\u6682\u65E0\u793A\u610F\u6570\u636E</div>
      </template>
    </t-select-input>
  </t-space>
</template>
<script>
import { ControlPlatformIcon } from 'tdesign-icons-vue';

const initialOptions = [
  { label: 'tdesign-vue', value: 1 },
  { label: 'tdesign-react', value: 2 },
  { label: 'tdesign-miniprogram', value: 3 },
  { label: 'tdesign-angular', value: 4 },
  { label: 'tdesign-mobile-vue', value: 5 },
  { label: 'tdesign-mobile-react', value: 6 },
];
export default {
  components: { ControlPlatformIcon },
  data() {
    return {
      options: initialOptions,
      selectValue1: { label: 'tdesign-vue', value: 1 },
      selectValue2: ['tdesign-vue', 'tdesign-react'],
      selectValue3: ['tdesign-vue', 'tdesign-react', 'tdesign-mobile-vue'],
    };
  },
  methods: {
    onOptionClick(item) {
      this.selectValue1 = item;
    },
    onClear() {
      this.selectValue1 = undefined;
    },
    onTagChange2(val) {
      this.selectValue2 = val;
    },
    onTagChange3(val) {
      this.selectValue3 = val;
    },
  },
};
<\/script>
<style lang="less" scoped>
.tdesign-demo__select-input-ul-single {
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.tdesign-demo__select-input-ul-single > li {
  display: block;
  border-radius: 3px;
  line-height: 22px;
  cursor: pointer;
  padding: 3px 8px;
  color: var(--td-text-color-primary);
  transition: background-color 0.2s linear;
  white-space: nowrap;
  word-wrap: normal;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tdesign-demo__select-input-ul-single > li:hover {
  background-color: var(--td-bg-color-container-hover);
}

.tdesign-demo-select-input-custom-tag .tdesign-demo-select-input__img {
  font-size: 16px;
  margin-right: 4px;
}

.tdesign-demo__select-empty-custom {
  text-align: center;
  color: var(--td-text-color-disabled);
  line-height: 32px;
}
.displaySpan {
  line-height: 24px;
}
</style>
`,B=`<template>
  <t-space direction="vertical" class="tdesign-demo-select-input-custom-tag">
    <!-- \u5355\u9009\uFF0C\u4F7F\u7528 valueDisplay \u63D2\u69FD\u5B9A\u4E49\u9009\u4E2D\u7684\u67D0\u4E00\u9879\u7684\u5185\u5BB9\uFF0C\u4E5F\u53EF\u4F7F\u7528\u540C\u540D\u6E32\u67D3\u51FD\u6570 props.valueDisplay -->
    <t-select-input
      :popup-props="{ overlayInnerStyle: { padding: '6px' } }"
      :value="selectValue1"
      placeholder="Please Select"
      clearable
      @clear="onClear"
    >
      <template #valueDisplay>
        <span v-if="selectValue1" class="displaySpan">
          <control-platform-icon class="tdesign-demo-select-input__img" />
          {{ selectValue1.label }}
        </span>
      </template>
      <template #panel>
        <ul class="tdesign-demo__select-input-ul-single">
          <li v-for="item in options" :key="item.value" @click="() => onOptionClick(item)">
            {{ item.label }}
          </li>
        </ul>
      </template>
    </t-select-input>

    <!-- \u591A\u9009\uFF0C\u7B2C\u4E00\u79CD\u65B9\u5F0F\uFF1A\u4F7F\u7528 tag \u63D2\u69FD\u5B9A\u4E49\u9009\u4E2D\u7684\u67D0\u4E00\u9879\u7684\u5185\u5BB9\uFF0C\u4E5F\u53EF\u4F7F\u7528\u540C\u540D\u6E32\u67D3\u51FD\u6570 props.tag -->
    <t-select-input :value="selectValue2" clearable placeholder="Please Select" multiple @tag-change="onTagChange2">
      <template #tag="{ value }">
        <span class="displaySpan">
          <control-platform-icon />
          {{ value }}
        </span>
      </template>
      <template #panel>
        <div class="tdesign-demo__select-empty-custom">\u6682\u65E0\u793A\u610F\u6570\u636E</div>
      </template>
    </t-select-input>

    <!-- \u591A\u9009\uFF0C\u7B2C\u4E8C\u79CD\u65B9\u5F0F\uFF1A\u4F7F\u7528 valueDisplay \u63D2\u69FD\u5B9A\u4E49\u5168\u90E8\u9009\u4E2D\u9879\u7684\u5185\u5BB9\uFF0C\u4E5F\u53EF\u4F7F\u7528\u540C\u540D\u6E32\u67D3\u51FD\u6570 props.valueDisplay -->
    <t-select-input :value="selectValue3" placeholder="Please Select" multiple @tag-change="onTagChange3">
      <template #valueDisplay="{ value, onClose }">
        <!-- <span><LayersIcon />{{ value }}</span> -->
        <t-tag
          v-for="(item, index) in value"
          :key="item"
          closable
          style="margin-right: 4px"
          @close="() => onClose(index)"
        >
          <span class="displaySpan">
            <control-platform-icon />
            <span>{{ item }}</span>
          </span>
        </t-tag>
      </template>
      <template #panel>
        <div class="tdesign-demo__select-empty-custom">\u6682\u65E0\u793A\u610F\u6570\u636E</div>
      </template>
    </t-select-input>
  </t-space>
</template>
<script setup>
import { ref } from 'vue';
import { ControlPlatformIcon } from 'tdesign-icons-vue';

const initialOptions = [
  {
    label: 'tdesign-vue',
    value: 1,
  },
  {
    label: 'tdesign-react',
    value: 2,
  },
  {
    label: 'tdesign-miniprogram',
    value: 3,
  },
  {
    label: 'tdesign-angular',
    value: 4,
  },
  {
    label: 'tdesign-mobile-vue',
    value: 5,
  },
  {
    label: 'tdesign-mobile-react',
    value: 6,
  },
];
const options = ref(initialOptions);
const selectValue1 = ref({
  label: 'tdesign-vue',
  value: 1,
});
const selectValue2 = ref(['tdesign-vue', 'tdesign-react']);
const selectValue3 = ref(['tdesign-vue', 'tdesign-react', 'tdesign-mobile-vue']);
const onOptionClick = (item) => {
  selectValue1.value = item;
};
const onClear = () => {
  selectValue1.value = undefined;
};
const onTagChange2 = (val) => {
  selectValue2.value = val;
};
const onTagChange3 = (val) => {
  selectValue3.value = val;
};
<\/script>
<style lang="less" scoped>
.tdesign-demo__select-input-ul-single {
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.tdesign-demo__select-input-ul-single > li {
  display: block;
  border-radius: 3px;
  line-height: 22px;
  cursor: pointer;
  padding: 3px 8px;
  color: var(--td-text-color-primary);
  transition: background-color 0.2s linear;
  white-space: nowrap;
  word-wrap: normal;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tdesign-demo__select-input-ul-single > li:hover {
  background-color: var(--td-bg-color-container-hover);
}

.tdesign-demo-select-input-custom-tag .tdesign-demo-select-input__img {
  font-size: 16px;
  margin-right: 4px;
}

.tdesign-demo__select-empty-custom {
  text-align: center;
  color: var(--td-text-color-disabled);
  line-height: 32px;
}
.displaySpan {
  line-height: 24px;
}
</style>
`,M=`<template>
  <t-select-input
    :value="selectValue"
    :popup-visible="popupVisible"
    :popup-props="{ overlayInnerStyle: { padding: '6px' } }"
    placeholder="Please Select"
    borderless
    clearable
    @popup-visible-change="onPopupVisibleChange"
    @clear="onClear"
  >
    <template #panel>
      <ul class="tdesign-demo__select-input-ul-borderless">
        <li v-for="item in options" :key="item.value" @click="() => onOptionClick(item)">
          {{ item.label }}
        </li>
      </ul>
    </template>
  </t-select-input>
</template>
<script lang="jsx">
const initialOptions = [
  // \u5168\u9009
  { label: 'all frameworks', checkAll: true },
  { label: 'tdesign-vue', value: 1 },
  { label: 'tdesign-react', value: 2 },
  { label: 'tdesign-miniprogram', value: 3 },
  { label: 'tdesign-angular', value: 4 },
  { label: 'tdesign-mobile-vue', value: 5 },
  { label: 'tdesign-mobile-react', value: 6 },
];

export default {
  data() {
    return {
      selectValue: { label: 'tdesign-vue', value: 1 },
      options: initialOptions,
      popupVisible: false,
    };
  },
  methods: {
    onOptionClick(item) {
      this.selectValue = item;
      this.popupVisible = false;
    },
    onClear() {
      this.selectValue = undefined;
    },
    onPopupVisibleChange(val) {
      this.popupVisible = val;
    },
  },
};
<\/script>
<style lang="less" scoped>
.tdesign-demo__select-input-ul-borderless {
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.tdesign-demo__select-input-ul-borderless > li {
  display: block;
  border-radius: 3px;
  line-height: 22px;
  cursor: pointer;
  padding: 3px 8px;
  color: var(--td-text-color-primary);
  transition: background-color 0.2s linear;
  white-space: nowrap;
  word-wrap: normal;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tdesign-demo__select-input-ul-borderless > li:hover {
  background-color: var(--td-bg-color-container-hover);
}
</style>
`,F=`<template>
  <t-select-input
    :value="selectValue"
    :popup-visible="popupVisible"
    :popup-props="{ overlayInnerStyle: { padding: '6px' } }"
    placeholder="Please Select"
    borderless
    clearable
    @popup-visible-change="onPopupVisibleChange"
    @clear="onClear"
  >
    <template #panel>
      <ul class="tdesign-demo__select-input-ul-borderless">
        <li v-for="item in options" :key="item.value" @click="() => onOptionClick(item)">
          {{ item.label }}
        </li>
      </ul>
    </template>
  </t-select-input>
</template>
<script setup lang="jsx">
import { ref } from 'vue';

const initialOptions = [
  // \u5168\u9009
  {
    label: 'all frameworks',
    checkAll: true,
  },
  {
    label: 'tdesign-vue',
    value: 1,
  },
  {
    label: 'tdesign-react',
    value: 2,
  },
  {
    label: 'tdesign-miniprogram',
    value: 3,
  },
  {
    label: 'tdesign-angular',
    value: 4,
  },
  {
    label: 'tdesign-mobile-vue',
    value: 5,
  },
  {
    label: 'tdesign-mobile-react',
    value: 6,
  },
];
const selectValue = ref({
  label: 'tdesign-vue',
  value: 1,
});
const options = ref(initialOptions);
const popupVisible = ref(false);
const onOptionClick = (item) => {
  selectValue.value = item;
  popupVisible.value = false;
};
const onClear = () => {
  selectValue.value = undefined;
};
const onPopupVisibleChange = (val) => {
  popupVisible.value = val;
};
<\/script>
<style lang="less" scoped>
.tdesign-demo__select-input-ul-borderless {
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.tdesign-demo__select-input-ul-borderless > li {
  display: block;
  border-radius: 3px;
  line-height: 22px;
  cursor: pointer;
  padding: 3px 8px;
  color: var(--td-text-color-primary);
  transition: background-color 0.2s linear;
  white-space: nowrap;
  word-wrap: normal;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tdesign-demo__select-input-ul-borderless > li:hover {
  background-color: var(--td-bg-color-container-hover);
}
</style>
`,R=`<template>
  <div class="tdesign-demo__select-input-borderless-multiple" style="width: 100%">
    <t-select-input
      :value="value"
      :min-collapsed-num="1"
      :popup-props="{ overlayInnerStyle: { padding: '6px' } }"
      borderless
      allow-input
      placeholder="select frameworks"
      clearable
      multiple
      style="width: 250px"
      @tag-change="onTagChange"
    >
      <template #panel>
        <t-checkbox-group
          :value="checkboxValue"
          :options="options"
          class="tdesign-demo__panel-options-borderless-multiple"
          @change="onCheckedChange"
        />
      </template>
    </t-select-input>
  </div>
</template>
<script>
const OPTIONS = [
  // \u5168\u9009
  { label: 'all frameworks', checkAll: true },
  { label: 'tdesign-vue', value: 1 },
  { label: 'tdesign-react', value: 2 },
  { label: 'tdesign-miniprogram', value: 3 },
  { label: 'tdesign-angular', value: 4 },
  { label: 'tdesign-mobile-vue', value: 5 },
  { label: 'tdesign-mobile-react', value: 6 },
];

export default {
  data() {
    return {
      options: OPTIONS,
      value: [
        { label: 'Vue', value: 1 },
        { label: 'React', value: 2 },
        { label: 'Miniprogram', value: 3 },
      ],
    };
  },
  computed: {
    checkboxValue() {
      const arr = [];
      const list = this.value;
      // \u6B64\u5904\u4E0D\u4F7F\u7528 forEach\uFF0C\u51CF\u5C11\u51FD\u6570\u8FED\u4EE3
      for (let i = 0, len = list.length; i < len; i++) {
        list[i].value && arr.push(list[i].value);
      }
      return arr;
    },
  },
  methods: {
    onCheckedChange(val, { current, type }) {
      // current \u4E0D\u5B58\u5728\uFF0C\u5219\u8868\u793A\u64CD\u4F5C\u5168\u9009
      if (!current) {
        this.value = type === 'check' ? this.options.slice(1) : [];
        return;
      }
      // \u666E\u901A\u64CD\u4F5C
      if (type === 'check') {
        const option = this.options.find((t) => t.value === current);
        this.value.push(option);
      } else {
        this.value = this.value.filter((v) => v.value !== current);
      }
    },
    onTagChange(currentTags, context) {
      const { trigger, index, item } = context;
      if (trigger === 'clear') {
        this.value = [];
      }
      if (['tag-remove', 'backspace'].includes(trigger)) {
        this.value.splice(index, 1);
      }
      // \u5982\u679C\u5141\u8BB8\u521B\u5EFA\u65B0\u6761\u76EE
      if (trigger === 'enter') {
        const current = { label: item, value: item };
        this.value.push(current);
        this.options = this.options.concat(current);
      }
    },
  },
};
<\/script>
<style lang="less">
.tdesign-demo__panel-options-borderless-multiple {
  width: 100%;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.tdesign-demo__panel-options-borderless-multiple .t-checkbox {
  display: flex;
  border-radius: 3px;
  line-height: 22px;
  cursor: pointer;
  padding: 3px 8px;
  color: var(--td-text-color-primary);
  transition: background-color 0.2s linear;
  white-space: nowrap;
  word-wrap: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
}

.tdesign-demo__panel-options-borderless-multiple .t-checkbox:hover {
  background-color: var(--td-bg-color-container-hover);
}
</style>
`,$=`<template>
  <div class="tdesign-demo__select-input-borderless-multiple" style="width: 100%">
    <t-select-input
      :value="value"
      :min-collapsed-num="1"
      :popup-props="{ overlayInnerStyle: { padding: '6px' } }"
      borderless
      allow-input
      placeholder="select frameworks"
      clearable
      multiple
      style="width: 250px"
      @tag-change="onTagChange"
    >
      <template #panel>
        <t-checkbox-group
          :value="checkboxValue"
          :options="options"
          class="tdesign-demo__panel-options-borderless-multiple"
          @change="onCheckedChange"
        />
      </template>
    </t-select-input>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue';

const OPTIONS = [
  // \u5168\u9009
  {
    label: 'all frameworks',
    checkAll: true,
  },
  {
    label: 'tdesign-vue',
    value: 1,
  },
  {
    label: 'tdesign-react',
    value: 2,
  },
  {
    label: 'tdesign-miniprogram',
    value: 3,
  },
  {
    label: 'tdesign-angular',
    value: 4,
  },
  {
    label: 'tdesign-mobile-vue',
    value: 5,
  },
  {
    label: 'tdesign-mobile-react',
    value: 6,
  },
];
const options = ref(OPTIONS);
const value = ref([
  {
    label: 'Vue',
    value: 1,
  },
  {
    label: 'React',
    value: 2,
  },
  {
    label: 'Miniprogram',
    value: 3,
  },
]);
const checkboxValue = computed(() => {
  const arr = [];
  const list = value.value;
  // \u6B64\u5904\u4E0D\u4F7F\u7528 forEach\uFF0C\u51CF\u5C11\u51FD\u6570\u8FED\u4EE3
  for (let i = 0, len = list.length; i < len; i++) {
    list[i].value && arr.push(list[i].value);
  }
  return arr;
});
const onCheckedChange = (val, { current, type }) => {
  // current \u4E0D\u5B58\u5728\uFF0C\u5219\u8868\u793A\u64CD\u4F5C\u5168\u9009
  if (!current) {
    value.value = type === 'check' ? options.value.slice(1) : [];
    return;
  }
  // \u666E\u901A\u64CD\u4F5C
  if (type === 'check') {
    const option = options.value.find((t) => t.value === current);
    value.value.push(option);
  } else {
    value.value = value.value.filter((v) => v.value !== current);
  }
};
const onTagChange = (currentTags, context) => {
  const { trigger, index, item } = context;
  if (trigger === 'clear') {
    value.value = [];
  }
  if (['tag-remove', 'backspace'].includes(trigger)) {
    value.value.splice(index, 1);
  }
  // \u5982\u679C\u5141\u8BB8\u521B\u5EFA\u65B0\u6761\u76EE
  if (trigger === 'enter') {
    const current = {
      label: item,
      value: item,
    };
    value.value.push(current);
    options.value = options.value.concat(current);
  }
};
<\/script>
<style lang="less">
.tdesign-demo__panel-options-borderless-multiple {
  width: 100%;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.tdesign-demo__panel-options-borderless-multiple .t-checkbox {
  display: flex;
  border-radius: 3px;
  line-height: 22px;
  cursor: pointer;
  padding: 3px 8px;
  color: var(--td-text-color-primary);
  transition: background-color 0.2s linear;
  white-space: nowrap;
  word-wrap: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
}

.tdesign-demo__panel-options-borderless-multiple .t-checkbox:hover {
  background-color: var(--td-bg-color-container-hover);
}
</style>
`,j=`<template>
  <!-- :popup-props="{ trigger: 'hover' }" -->
  <t-select-input
    :value="selectValue"
    :popup-visible="popupVisible"
    placeholder="Please Select"
    clearable
    auto-width
    allow-input
    @popup-visible-change="onPopupVisibleChange"
    @clear="onClear"
    @input-change="onInputChange"
  >
    <template #panel>
      <ul class="tdesign-demo__select-input-ul-auto-width">
        <li v-for="item in options" :key="item.value" @click="() => onOptionClick(item)">
          {{ item.label }}
        </li>
      </ul>
    </template>
    <template #suffixIcon>
      <chevron-down-icon />
    </template>
  </t-select-input>
</template>
<script>
import { ChevronDownIcon } from 'tdesign-icons-vue';

const initialOptions = [
  // \u5168\u9009
  { label: 'all frameworks', checkAll: true },
  { label: 'tdesign-vue', value: 1 },
  { label: 'tdesign-react', value: 2 },
  { label: 'tdesign-miniprogram', value: 3 },
  { label: 'tdesign-angular', value: 4 },
  { label: 'tdesign-mobile-vue', value: 5 },
  { label: 'tdesign-mobile-react', value: 6 },
];

export default {
  components: { ChevronDownIcon },
  data() {
    return {
      selectValue: { label: 'tdesign-vue', value: 1 },
      options: initialOptions,
      popupVisible: false,
    };
  },
  methods: {
    onOptionClick(item) {
      this.selectValue = item;
      this.popupVisible = false;
    },
    onClear() {
      this.selectValue = undefined;
    },
    onPopupVisibleChange(val) {
      this.popupVisible = val;
    },
    onInputChange(ctx) {
      console.log(ctx);
    },
  },
};
<\/script>
<style>
.tdesign-demo__select-input-ul-auto-width {
  padding: 2px 0;
  margin: 0 -2px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.tdesign-demo__select-input-ul-auto-width > li {
  display: block;
  border-radius: 3px;
  line-height: 22px;
  cursor: pointer;
  padding: 3px 8px;
  color: var(--td-text-color-primary);
  transition: background-color 0.2s linear;
  white-space: nowrap;
  word-wrap: normal;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tdesign-demo__select-input-ul-auto-width > li:hover {
  background-color: var(--td-bg-color-container-hover);
}
</style>
`,L=`<template>
  <!-- :popup-props="{ trigger: 'hover' }" -->
  <t-select-input
    :value="selectValue"
    :popup-visible="popupVisible"
    placeholder="Please Select"
    clearable
    auto-width
    allow-input
    @popup-visible-change="onPopupVisibleChange"
    @clear="onClear"
    @input-change="onInputChange"
  >
    <template #panel>
      <ul class="tdesign-demo__select-input-ul-auto-width">
        <li v-for="item in options" :key="item.value" @click="() => onOptionClick(item)">
          {{ item.label }}
        </li>
      </ul>
    </template>
    <template #suffixIcon>
      <chevron-down-icon />
    </template>
  </t-select-input>
</template>
<script setup>
import { ref } from 'vue';
import { ChevronDownIcon } from 'tdesign-icons-vue';

const initialOptions = [
  // \u5168\u9009
  {
    label: 'all frameworks',
    checkAll: true,
  },
  {
    label: 'tdesign-vue',
    value: 1,
  },
  {
    label: 'tdesign-react',
    value: 2,
  },
  {
    label: 'tdesign-miniprogram',
    value: 3,
  },
  {
    label: 'tdesign-angular',
    value: 4,
  },
  {
    label: 'tdesign-mobile-vue',
    value: 5,
  },
  {
    label: 'tdesign-mobile-react',
    value: 6,
  },
];
const selectValue = ref({
  label: 'tdesign-vue',
  value: 1,
});
const options = ref(initialOptions);
const popupVisible = ref(false);
const onOptionClick = (item) => {
  selectValue.value = item;
  popupVisible.value = false;
};
const onClear = () => {
  selectValue.value = undefined;
};
const onPopupVisibleChange = (val) => {
  popupVisible.value = val;
};
const onInputChange = (ctx) => {
  console.log(ctx);
};
<\/script>
<style>
.tdesign-demo__select-input-ul-auto-width {
  padding: 2px 0;
  margin: 0 -2px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.tdesign-demo__select-input-ul-auto-width > li {
  display: block;
  border-radius: 3px;
  line-height: 22px;
  cursor: pointer;
  padding: 3px 8px;
  color: var(--td-text-color-primary);
  transition: background-color 0.2s linear;
  white-space: nowrap;
  word-wrap: normal;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tdesign-demo__select-input-ul-auto-width > li:hover {
  background-color: var(--td-bg-color-container-hover);
}
</style>
`,z=`<template>
  <div class="tdesign-demo__select-input-autowidth-multiple" style="width: 100%">
    <t-select-input
      :value="value"
      :min-collapsed-num="1"
      auto-width
      allow-input
      placeholder="select frameworks"
      clearable
      multiple
      @tag-change="onTagChange"
    >
      <template #panel>
        <t-checkbox-group
          :value="checkboxValue"
          :options="options"
          class="tdesign-demo__panel-options-autowidth-multiple"
          @change="onCheckedChange"
        />
      </template>
      <template #suffixIcon>
        <chevron-down-icon />
      </template>
    </t-select-input>
  </div>
</template>
<script>
import { ChevronDownIcon } from 'tdesign-icons-vue';

const OPTIONS = [
  // \u5168\u9009
  { label: 'all frameworks', checkAll: true },
  { label: 'tdesign-vue', value: 1 },
  { label: 'tdesign-react', value: 2 },
  { label: 'tdesign-miniprogram', value: 3 },
  { label: 'tdesign-angular', value: 4 },
  { label: 'tdesign-mobile-vue', value: 5 },
  { label: 'tdesign-mobile-react', value: 6 },
];

export default {
  components: { ChevronDownIcon },
  data() {
    return {
      options: OPTIONS,
      value: [
        { label: 'Vue', value: 1 },
        { label: 'React', value: 2 },
        { label: 'Miniprogram', value: 3 },
      ],
    };
  },
  computed: {
    checkboxValue() {
      const arr = [];
      const list = this.value;
      // \u6B64\u5904\u4E0D\u4F7F\u7528 forEach\uFF0C\u51CF\u5C11\u51FD\u6570\u8FED\u4EE3
      for (let i = 0, len = list.length; i < len; i++) {
        list[i].value && arr.push(list[i].value);
      }
      return arr;
    },
  },
  methods: {
    onCheckedChange(val, { current, type }) {
      // current \u4E0D\u5B58\u5728\uFF0C\u5219\u8868\u793A\u64CD\u4F5C\u5168\u9009
      if (!current) {
        this.value = type === 'check' ? this.options.slice(1) : [];
        return;
      }
      // \u666E\u901A\u64CD\u4F5C
      if (type === 'check') {
        const option = this.options.find((t) => t.value === current);
        this.value.push(option);
      } else {
        this.value = this.value.filter((v) => v.value !== current);
      }
    },
    onTagChange(currentTags, context) {
      const { trigger, index, item } = context;
      if (trigger === 'clear') {
        this.value = [];
      }
      if (['tag-remove', 'backspace'].includes(trigger)) {
        this.value.splice(index, 1);
      }
      // \u5982\u679C\u5141\u8BB8\u521B\u5EFA\u65B0\u6761\u76EE
      if (trigger === 'enter') {
        const current = { label: item, value: item };
        this.value.push(current);
        this.options = this.options.concat(current);
      }
    },
  },
};
<\/script>
<style>
.tdesign-demo__panel-options-autowidth-multiple {
  width: 100%;
  padding: 2px 0;
  margin: 0 -2px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.tdesign-demo__panel-options-autowidth-multiple .t-checkbox {
  display: flex;
  border-radius: 3px;
  line-height: 22px;
  cursor: pointer;
  padding: 3px 8px;
  color: var(--td-text-color-primary);
  transition: background-color 0.2s linear;
  white-space: nowrap;
  word-wrap: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
}

.tdesign-demo__panel-options-autowidth-multiple .t-checkbox:hover {
  background-color: var(--td-bg-color-container-hover);
}
</style>
`,Y=`<template>
  <div class="tdesign-demo__select-input-autowidth-multiple" style="width: 100%">
    <t-select-input
      :value="value"
      :min-collapsed-num="1"
      auto-width
      allow-input
      placeholder="select frameworks"
      clearable
      multiple
      @tag-change="onTagChange"
    >
      <template #panel>
        <t-checkbox-group
          :value="checkboxValue"
          :options="options"
          class="tdesign-demo__panel-options-autowidth-multiple"
          @change="onCheckedChange"
        />
      </template>
      <template #suffixIcon>
        <chevron-down-icon />
      </template>
    </t-select-input>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue';
import { ChevronDownIcon } from 'tdesign-icons-vue';

const OPTIONS = [
  // \u5168\u9009
  {
    label: 'all frameworks',
    checkAll: true,
  },
  {
    label: 'tdesign-vue',
    value: 1,
  },
  {
    label: 'tdesign-react',
    value: 2,
  },
  {
    label: 'tdesign-miniprogram',
    value: 3,
  },
  {
    label: 'tdesign-angular',
    value: 4,
  },
  {
    label: 'tdesign-mobile-vue',
    value: 5,
  },
  {
    label: 'tdesign-mobile-react',
    value: 6,
  },
];
const options = ref(OPTIONS);
const value = ref([
  {
    label: 'Vue',
    value: 1,
  },
  {
    label: 'React',
    value: 2,
  },
  {
    label: 'Miniprogram',
    value: 3,
  },
]);
const checkboxValue = computed(() => {
  const arr = [];
  const list = value.value;
  // \u6B64\u5904\u4E0D\u4F7F\u7528 forEach\uFF0C\u51CF\u5C11\u51FD\u6570\u8FED\u4EE3
  for (let i = 0, len = list.length; i < len; i++) {
    list[i].value && arr.push(list[i].value);
  }
  return arr;
});
const onCheckedChange = (val, { current, type }) => {
  // current \u4E0D\u5B58\u5728\uFF0C\u5219\u8868\u793A\u64CD\u4F5C\u5168\u9009
  if (!current) {
    value.value = type === 'check' ? options.value.slice(1) : [];
    return;
  }
  // \u666E\u901A\u64CD\u4F5C
  if (type === 'check') {
    const option = options.value.find((t) => t.value === current);
    value.value.push(option);
  } else {
    value.value = value.value.filter((v) => v.value !== current);
  }
};
const onTagChange = (currentTags, context) => {
  const { trigger, index, item } = context;
  if (trigger === 'clear') {
    value.value = [];
  }
  if (['tag-remove', 'backspace'].includes(trigger)) {
    value.value.splice(index, 1);
  }
  // \u5982\u679C\u5141\u8BB8\u521B\u5EFA\u65B0\u6761\u76EE
  if (trigger === 'enter') {
    const current = {
      label: item,
      value: item,
    };
    value.value.push(current);
    options.value = options.value.concat(current);
  }
};
<\/script>
<style>
.tdesign-demo__panel-options-autowidth-multiple {
  width: 100%;
  padding: 2px 0;
  margin: 0 -2px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.tdesign-demo__panel-options-autowidth-multiple .t-checkbox {
  display: flex;
  border-radius: 3px;
  line-height: 22px;
  cursor: pointer;
  padding: 3px 8px;
  color: var(--td-text-color-primary);
  transition: background-color 0.2s linear;
  white-space: nowrap;
  word-wrap: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
}

.tdesign-demo__panel-options-autowidth-multiple .t-checkbox:hover {
  background-color: var(--td-bg-color-container-hover);
}
</style>
`,v=[{name:"allowInput",type:"Boolean",defaultValue:!1,options:[]},{name:"autoWidth",type:"Boolean",defaultValue:!1,options:[]},{name:"borderless",type:"Boolean",defaultValue:!1,options:[]},{name:"clearable",type:"Boolean",defaultValue:!1,options:[]},{name:"disabled",type:"Boolean",defaultValue:!1,options:[]},{name:"loading",type:"Boolean",defaultValue:!1,options:[]},{name:"multiple",type:"Boolean",defaultValue:!1,options:[]},{name:"readonly",type:"Boolean",defaultValue:!1,options:[]},{name:"status",type:"enum",defaultValue:"",options:[{label:"default",value:""},{label:"success",value:"success"},{label:"warning",value:"warning"},{label:"error",value:"error"}]}];const p={};p.setup=(n,e)=>{const l=i(v),t=[{label:"selectInput",value:"selectInput"}],a={selectInput:'<t-select-input panel="\u6682\u65E0\u6570\u636E" tips="\u8FD9\u662F tips \u6587\u672C\u4FE1\u606F" v-bind="configProps" />'},o=i(`<template>${a[t[0].value].trim()}</template>`);function u(d){o.value=`<template>${a[d].trim()}</template>`}return{configList:l,panelList:t,usageCode:o,onPanelChange:u}};var r=function(){var n=this,e=n.$createElement,l=n._self._c||e;return l("base-usage",{attrs:{code:n.usageCode,"config-list":n.configList,"panel-list":n.panelList},on:{PanelChange:n.onPanelChange},scopedSlots:n._u([{key:"selectInput",fn:function(t){var a=t.configProps;return[l("t-select-input",n._b({attrs:{panel:"\u6682\u65E0\u6570\u636E",tips:"\u8FD9\u662F tips \u6587\u672C\u4FE1\u606F"}},"t-select-input",a,!1))]}}])})},m=[];r._withStripped=!0;const s={};var c=g(p,r,m,!1,h,null,null,null);function h(n){for(let e in s)this[e]=s[e]}c.options.__file="../src/select-input/_usage/index.vue";var H=function(){return c.exports}();export{x as D,H as U,f as a,y as b,_ as c,w as d,k as e,C as f,V as g,I as h,T as i,S as j,O as k,P as l,D as m,A as n,N as o,E as p,B as q,M as r,F as s,R as t,$ as u,j as v,L as w,z as x,Y as y};
