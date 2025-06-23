import{D as i,p as r,q as l,r as c,s as m,t as p,u as v,v as _,w as g,x as u,y as C,z as h,A as b,B as x,C as f,E as y}from"./panel.bb702c74.js";import{D,b as A}from"./value-display.21b17536.js";import{U as T,D as P,a as k,b as I,c as S,d as O,e as N,f as w,g as z,h as V,i as F,j as R,k as j,l as B,m as M,n as E,o as U,p as $,q,r as L,s as H,t as K,u as G,v as W,w as J,x as Q,y as X,z as Y,A as Z,B as ee,C as te,E as ae,F as se}from"./index.2b6d2470.js";import{P as oe}from"./prism.a27ccf6a.js";import{n as ne}from"./index.663c003f.js";var de=`<template>
  <t-space>
    <!-- \u65B9\u5F0F\u4E00\uFF1A\u4F7F\u7528 options \u81EA\u5B9A\u4E49\u4E0B\u62C9\u9009\u9879\u5185\u5BB9 -->
    <t-cascader
      v-model="value1"
      :popupProps="{ overlayClassName: 'tdesign-demo-select__overlay-option' }"
      :options="optionsData"
      clearable
    />
    <!-- \u65B9\u5F0F\u4E8C\uFF1A\u4F7F\u7528\u63D2\u69FD\u81EA\u5B9A\u4E49\u4E0B\u62C9\u9009\u9879\u5185\u5BB9 -->
    <t-cascader
      v-model="value2"
      :popupProps="{ overlayClassName: 'tdesign-demo-select__overlay-option' }"
      :options="options"
      style="width: 300px"
    >
      <template v-slot:option="{ item }">
        <div class="tdesign-demo__user-option">
          <img src="https://tdesign.gtimg.com/site/avatar.jpg" />
          <div class="tdesign-demo__user-option-info">
            <div>{{ item.label }}</div>
            <div>{{ item.value }}</div>
          </div>
        </div>
      </template>
    </t-cascader>
    <!-- \u65B9\u5F0F\u4E09\uFF1A\u4F7F\u7528option\u4F20\u53C2\u81EA\u5B9A\u4E49\u4E0B\u62C9\u9009\u9879\u5185\u5BB9 -->
    <t-cascader
      v-model="value3"
      :popupProps="{ overlayClassName: 'tdesign-demo-select__overlay-option' }"
      :options="options"
      :option="optionRender"
      style="width: 300px"
    >
    </t-cascader>
  </t-space>
</template>

<script lang="jsx">
export default {
  data() {
    return {
      value1: '',
      value2: '',
      value3: '',
      options: [
        {
          label: '\u9009\u9879\u4E00',
          value: '1',
          children: [
            {
              label: '\u5B50\u9009\u9879\u4E00',
              value: '1.1',
            },
            {
              label: '\u5B50\u9009\u9879\u4E8C',
              value: '1.2',
            },
            {
              label: '\u5B50\u9009\u9879\u4E09',
              value: '1.3',
            },
          ],
        },
        {
          label: '\u9009\u9879\u4E8C',
          value: '2',
          children: [
            {
              label: '\u5B50\u9009\u9879\u4E00',
              value: '2.1',
            },
            {
              label: '\u5B50\u9009\u9879\u4E8C',
              value: '2.2',
            },
          ],
        },
      ],
    };
  },
  computed: {
    optionsData() {
      return this.getDeepOptions(this.options);
    },
  },
  methods: {
    getDeepOptions(options) {
      if (!options) return null;
      return options.map((item) => ({
        ...item,
        children: this.getDeepOptions(item.children),
        // content \u81EA\u5B9A\u4E49\u4E0B\u62C9\u9009\u9879\u5173\u952E\u4EE3\u7801
        content: (h) => this.optionRender(h, { item }),
      }));
    },
    optionRender(h, { item }) {
      return (
        <div class="tdesign-demo__user-option">
          <img src="https://tdesign.gtimg.com/site/avatar.jpg" />
          <div class="tdesign-demo__user-option-info">
            <div>{item.label}</div>
            <div>{item.value}</div>
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

.tdesign-demo-select__overlay-option .t-cascader__item {
  height: auto;
  padding: 8px;
}
</style>
`,ie=`<template>
  <t-space>
    <!-- \u65B9\u5F0F\u4E00\uFF1A\u4F7F\u7528 options \u81EA\u5B9A\u4E49\u4E0B\u62C9\u9009\u9879\u5185\u5BB9 -->
    <t-cascader
      v-model="value1"
      :popupProps="{ overlayClassName: 'tdesign-demo-select__overlay-option' }"
      :options="optionsData"
      clearable
    />
    <!-- \u65B9\u5F0F\u4E8C\uFF1A\u4F7F\u7528\u63D2\u69FD\u81EA\u5B9A\u4E49\u4E0B\u62C9\u9009\u9879\u5185\u5BB9 -->
    <t-cascader
      v-model="value2"
      :popupProps="{ overlayClassName: 'tdesign-demo-select__overlay-option' }"
      :options="options"
      style="width: 300px"
    >
      <template v-slot:option="{ item }">
        <div class="tdesign-demo__user-option">
          <img src="https://tdesign.gtimg.com/site/avatar.jpg" />
          <div class="tdesign-demo__user-option-info">
            <div>{{ item.label }}</div>
            <div>{{ item.value }}</div>
          </div>
        </div>
      </template>
    </t-cascader>
    <!-- \u65B9\u5F0F\u4E09\uFF1A\u4F7F\u7528option\u4F20\u53C2\u81EA\u5B9A\u4E49\u4E0B\u62C9\u9009\u9879\u5185\u5BB9 -->
    <t-cascader
      v-model="value3"
      :popupProps="{ overlayClassName: 'tdesign-demo-select__overlay-option' }"
      :options="options"
      :option="optionRender"
      style="width: 300px"
    >
    </t-cascader>
  </t-space>
</template>

<script setup lang="jsx">
import { ref, computed } from 'vue';

const value1 = ref('');
const value2 = ref('');
const value3 = ref('');
const options = ref([
  {
    label: '\u9009\u9879\u4E00',
    value: '1',
    children: [
      {
        label: '\u5B50\u9009\u9879\u4E00',
        value: '1.1',
      },
      {
        label: '\u5B50\u9009\u9879\u4E8C',
        value: '1.2',
      },
      {
        label: '\u5B50\u9009\u9879\u4E09',
        value: '1.3',
      },
    ],
  },
  {
    label: '\u9009\u9879\u4E8C',
    value: '2',
    children: [
      {
        label: '\u5B50\u9009\u9879\u4E00',
        value: '2.1',
      },
      {
        label: '\u5B50\u9009\u9879\u4E8C',
        value: '2.2',
      },
    ],
  },
]);
const optionsData = computed(() => getDeepOptions(options.value));
const optionRender = (h, { item }) => (
  <div class="tdesign-demo__user-option">
    <img src="https://tdesign.gtimg.com/site/avatar.jpg" />
    <div class="tdesign-demo__user-option-info">
      <div>{item.label}</div>
      <div>{item.value}</div>
    </div>
  </div>
);
const getDeepOptions = (options) => {
  if (!options) return null;
  return options.map((item) => ({
    ...item,
    children: getDeepOptions(item.children),
    // content \u81EA\u5B9A\u4E49\u4E0B\u62C9\u9009\u9879\u5173\u952E\u4EE3\u7801
    content: (h) => optionRender(h, {
      item,
    }),
  }));
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

.tdesign-demo-select__overlay-option .t-cascader__item {
  height: auto;
  padding: 8px;
}
</style>
`,re=`<template>
  <t-space direction="vertical">
    <t-cascader v-model="value1" label="\u5355\u9009\uFF1A" :options="optionsData" clearable>
      <template #valueDisplay="{ value, selectedOptions }">
        <div v-if="value">
          <img :src="selectedOptions[0].avatar" class="avatar" />
          <span>{{ selectedOptions[0].label }}</span>
          <span>({{ value }})</span>
        </div>
      </template>
    </t-cascader>

    <t-cascader v-model="value2" label="\u591A\u9009\uFF1A" :options="optionsData" clearable multiple style="width: 500px">
      <template #valueDisplay="{ value, selectedOptions, onClose }">
        <template v-if="value && value.length">
          <t-tag v-for="(option, index) in selectedOptions" :key="option.value" closable @close="() => onClose(index)">
            <img :src="option.avatar" class="avatar" />
            <span>{{ option.label }}</span>
            <span>({{ option.value }})</span>
          </t-tag>
        </template>
      </template>
    </t-cascader>
  </t-space>
</template>
<script>
const AVATAR = 'https://tdesign.gtimg.com/site/avatar.jpg';

export default {
  data() {
    return {
      value1: '2.2',
      value2: ['1.3', '2.1', '2.2'],
      optionsData: [
        {
          label: '\u9009\u9879\u4E00',
          value: '1',
          children: [
            {
              label: '\u5B50\u9009\u9879\u4E00',
              value: '1.1',
              avatar: AVATAR,
            },
            {
              label: '\u5B50\u9009\u9879\u4E8C',
              value: '1.2',
              avatar: AVATAR,
            },
            {
              label: '\u5B50\u9009\u9879\u4E09',
              value: '1.3',
              avatar: AVATAR,
            },
          ],
        },
        {
          label: '\u9009\u9879\u4E8C',
          value: '2',
          children: [
            {
              label: '\u5B50\u9009\u9879\u4E00',
              value: '2.1',
              avatar: AVATAR,
            },
            {
              label: '\u5B50\u9009\u9879\u4E8C',
              value: '2.2',
              avatar: AVATAR,
            },
          ],
        },
      ],
    };
  },
};
<\/script>
<style lang="less" scoped>
.avatar {
  width: 16px;
  height: 16px;
  margin-top: 2px;
  vertical-align: -4px;
  margin-right: 4px;
}
</style>
`,le=`<template>
  <t-space direction="vertical">
    <t-cascader v-model="value1" label="\u5355\u9009\uFF1A" :options="optionsData" clearable>
      <template #valueDisplay="{ value, selectedOptions }">
        <div v-if="value">
          <img :src="selectedOptions[0].avatar" class="avatar" />
          <span>{{ selectedOptions[0].label }}</span>
          <span>({{ value }})</span>
        </div>
      </template>
    </t-cascader>

    <t-cascader v-model="value2" label="\u591A\u9009\uFF1A" :options="optionsData" clearable multiple style="width: 500px">
      <template #valueDisplay="{ value, selectedOptions, onClose }">
        <template v-if="value && value.length">
          <t-tag v-for="(option, index) in selectedOptions" :key="option.value" closable @close="() => onClose(index)">
            <img :src="option.avatar" class="avatar" />
            <span>{{ option.label }}</span>
            <span>({{ option.value }})</span>
          </t-tag>
        </template>
      </template>
    </t-cascader>
  </t-space>
</template>
<script setup>
import { ref } from 'vue';

const AVATAR = 'https://tdesign.gtimg.com/site/avatar.jpg';
const value1 = ref('2.2');
const value2 = ref(['1.3', '2.1', '2.2']);
const optionsData = ref([
  {
    label: '\u9009\u9879\u4E00',
    value: '1',
    children: [
      {
        label: '\u5B50\u9009\u9879\u4E00',
        value: '1.1',
        avatar: AVATAR,
      },
      {
        label: '\u5B50\u9009\u9879\u4E8C',
        value: '1.2',
        avatar: AVATAR,
      },
      {
        label: '\u5B50\u9009\u9879\u4E09',
        value: '1.3',
        avatar: AVATAR,
      },
    ],
  },
  {
    label: '\u9009\u9879\u4E8C',
    value: '2',
    children: [
      {
        label: '\u5B50\u9009\u9879\u4E00',
        value: '2.1',
        avatar: AVATAR,
      },
      {
        label: '\u5B50\u9009\u9879\u4E8C',
        value: '2.2',
        avatar: AVATAR,
      },
    ],
  },
]);
<\/script>
<style lang="less" scoped>
.avatar {
  width: 16px;
  height: 16px;
  margin-top: 2px;
  vertical-align: -4px;
  margin-right: 4px;
}
</style>
`,o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("td-doc-content",{ref:"tdDocContent",attrs:{"page-status":"hidden"}},[e("td-doc-header",{ref:"tdDocHeader",attrs:{slot:"doc-header",spline:"form",platform:"web"},slot:"doc-header"},[e("td-doc-badge",{attrs:{slot:"badge",label:"coverage",message:"91.18%"},slot:"badge"})],1),e("td-doc-tabs",{ref:"tdDocTabs",attrs:{tab:t.tab}}),e("div",{directives:[{name:"show",rawName:"v-show",value:t.tab==="demo",expression:"tab === 'demo'"}]},[e("div",{attrs:{name:"DEMO"}},[e("nav",{staticClass:"tdesign-toc_container"},[e("ol",{staticClass:"tdesign-toc_list"},[e("li",{staticClass:"tdesign-toc_list_item"},[e("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u5355\u9009\u7EA7\u8054\u9009\u62E9\u5668"}},[t._v("\u5355\u9009\u7EA7\u8054\u9009\u62E9\u5668")])]),e("li",{staticClass:"tdesign-toc_list_item"},[e("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u591A\u9009\u7EA7\u8054\u9009\u62E9\u5668"}},[t._v("\u591A\u9009\u7EA7\u8054\u9009\u62E9\u5668")])]),e("li",{staticClass:"tdesign-toc_list_item"},[e("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u53EF\u6298\u53E0\u9009\u9879\u591A\u9009\u9009\u62E9\u5668"}},[t._v("\u53EF\u6298\u53E0\u9009\u9879\u591A\u9009\u9009\u62E9\u5668")])]),e("li",{staticClass:"tdesign-toc_list_item"},[e("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u4E0D\u540C\u5C3A\u5BF8\u7684\u7EA7\u8054\u9009\u62E9\u5668"}},[t._v("\u4E0D\u540C\u5C3A\u5BF8\u7684\u7EA7\u8054\u9009\u62E9\u5668")])]),e("li",{staticClass:"tdesign-toc_list_item"},[e("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u53EF\u8FC7\u6EE4\u7684\u7EA7\u8054\u9009\u62E9\u5668"}},[t._v("\u53EF\u8FC7\u6EE4\u7684\u7EA7\u8054\u9009\u62E9\u5668")])]),e("li",{staticClass:"tdesign-toc_list_item"},[e("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u7981\u7528\u7684\u7EA7\u8054\u9009\u62E9\u5668"}},[t._v("\u7981\u7528\u7684\u7EA7\u8054\u9009\u62E9\u5668")])]),e("li",{staticClass:"tdesign-toc_list_item"},[e("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u53EA\u663E\u793A\u6700\u540E\u4E00\u7EA7\u7684\u7EA7\u8054\u9009\u62E9\u5668"}},[t._v("\u53EA\u663E\u793A\u6700\u540E\u4E00\u7EA7\u7684\u7EA7\u8054\u9009\u62E9\u5668")])]),e("li",{staticClass:"tdesign-toc_list_item"},[e("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u9009\u62E9\u4EFB\u610F\u4E00\u9879\u7684\u7EA7\u8054\u9009\u62E9\u5668"}},[t._v("\u9009\u62E9\u4EFB\u610F\u4E00\u9879\u7684\u7EA7\u8054\u9009\u62E9\u5668")])]),e("li",{staticClass:"tdesign-toc_list_item"},[e("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u5168\u8DEF\u5F84\u6A21\u5F0F\u7684\u7EA7\u8054\u9009\u62E9\u5668"}},[t._v("\u5168\u8DEF\u5F84\u6A21\u5F0F\u7684\u7EA7\u8054\u9009\u62E9\u5668")])]),e("li",{staticClass:"tdesign-toc_list_item"},[e("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u81EA\u5B9A\u4E49\u9009\u4E2D\u503C\u6A21\u5F0F"}},[t._v("\u81EA\u5B9A\u4E49\u9009\u4E2D\u503C\u6A21\u5F0F")])]),e("li",{staticClass:"tdesign-toc_list_item"},[e("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u81EA\u5B9A\u4E49\u4E0B\u62C9\u9009\u9879\u5185\u5BB9"}},[t._v("\u81EA\u5B9A\u4E49\u4E0B\u62C9\u9009\u9879\u5185\u5BB9")])]),e("li",{staticClass:"tdesign-toc_list_item"},[e("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u81EA\u5B9A\u4E49\u9009\u4E2D\u9879\u5185\u5BB9"}},[t._v("\u81EA\u5B9A\u4E49\u9009\u4E2D\u9879\u5185\u5BB9")])]),e("li",{staticClass:"tdesign-toc_list_item"},[e("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u4E0D\u540C\u7684\u89E6\u53D1\u65B9\u5F0F"}},[t._v("\u4E0D\u540C\u7684\u89E6\u53D1\u65B9\u5F0F")])]),e("li",{staticClass:"tdesign-toc_list_item"},[e("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u6587\u672C\u8FC7\u957F\u65F6\u7684\u5C55\u793A"}},[t._v("\u6587\u672C\u8FC7\u957F\u65F6\u7684\u5C55\u793A")])]),e("li",{staticClass:"tdesign-toc_list_item"},[e("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u9650\u5236\u53EF\u9009\u6570\u76EE"}},[t._v("\u9650\u5236\u53EF\u9009\u6570\u76EE")])]),e("li",{staticClass:"tdesign-toc_list_item"},[e("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u5B9A\u5236\u6570\u636E\u5B57\u6BB5\u522B\u540D"}},[t._v("\u5B9A\u5236\u6570\u636E\u5B57\u6BB5\u522B\u540D")])]),e("li",{staticClass:"tdesign-toc_list_item"},[e("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u52A8\u6001\u52A0\u8F7D"}},[t._v("\u52A8\u6001\u52A0\u8F7D")])]),e("li",{staticClass:"tdesign-toc_list_item"},[e("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u7EA7\u8054\u9762\u677F"}},[t._v("\u7EA7\u8054\u9762\u677F")])])])]),e("Usage"),e("h3",{attrs:{id:"\u5355\u9009\u7EA7\u8054\u9009\u62E9\u5668"}},[t._v("\u5355\u9009\u7EA7\u8054\u9009\u62E9\u5668 "),e("a",{staticClass:"header-anchor",attrs:{href:"#\u5355\u9009\u7EA7\u8054\u9009\u62E9\u5668"}})]),e("p",[t._v("\u63D0\u4F9B\u5355\u9009\u7684\u7EA7\u8054\u9009\u62E9\u5668\uFF0C\u9009\u53D6\u540E\u5C55\u793A\u6BCF\u4E00\u5C42\u7EA7\u6240\u9009\u7684\u5185\u5BB9\u3002")]),e("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--cascader-base tdesign-demo-item--cascader"},[e("td-doc-demo",{attrs:{"demo-name":"base",languages:"OptionsAPI,CompositionAPI","data-OptionsAPI":t.DemoexamplebaseCode,"data-CompositionAPI":t.DemoexamplebaseCompositionCode,language:"markup"}},[e("div",{attrs:{slot:"action"},slot:"action"},[e("Stackblitz",{attrs:{"demo-name":"base","component-name":" cascader"}}),e("Codesandbox",{attrs:{"demo-name":"base","component-name":" cascader"}})],1),e("div",{staticClass:"tdesign-demo-item__body"},[e("Demoexamplebase")],1)])],1),e("h3",{attrs:{id:"\u591A\u9009\u7EA7\u8054\u9009\u62E9\u5668"}},[t._v("\u591A\u9009\u7EA7\u8054\u9009\u62E9\u5668 "),e("a",{staticClass:"header-anchor",attrs:{href:"#\u591A\u9009\u7EA7\u8054\u9009\u62E9\u5668"}})]),e("p",[t._v("\u63D0\u4F9B\u591A\u9009\u7684\u7EA7\u8054\u9009\u62E9\u5668\uFF0C\u901A\u8FC7\u6807\u7B7E\u5C55\u793A\u591A\u9009\u5185\u5BB9\u3002")]),e("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--cascader-multiple tdesign-demo-item--cascader"},[e("td-doc-demo",{attrs:{"demo-name":"multiple",languages:"OptionsAPI,CompositionAPI","data-OptionsAPI":t.DemoexamplemultipleCode,"data-CompositionAPI":t.DemoexamplemultipleCompositionCode,language:"markup"}},[e("div",{attrs:{slot:"action"},slot:"action"},[e("Stackblitz",{attrs:{"demo-name":"multiple","component-name":" cascader"}}),e("Codesandbox",{attrs:{"demo-name":"multiple","component-name":" cascader"}})],1),e("div",{staticClass:"tdesign-demo-item__body"},[e("Demoexamplemultiple")],1)])],1),e("h3",{attrs:{id:"\u53EF\u6298\u53E0\u9009\u9879\u591A\u9009\u9009\u62E9\u5668"}},[t._v("\u53EF\u6298\u53E0\u9009\u9879\u591A\u9009\u9009\u62E9\u5668 "),e("a",{staticClass:"header-anchor",attrs:{href:"#\u53EF\u6298\u53E0\u9009\u9879\u591A\u9009\u9009\u62E9\u5668"}})]),e("p",[t._v("\u591A\u9009\u60C5\u51B5\u4E0B\u6298\u53E0\u9009\u4E2D\u9879\uFF0C\u8D85\u51FA\u8BE5\u6570\u503C\u7684\u9009\u4E2D\u9879\u6298\u53E0\u3002")]),e("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--cascader-collapsed tdesign-demo-item--cascader"},[e("td-doc-demo",{attrs:{"demo-name":"collapsed",languages:"OptionsAPI,CompositionAPI","data-OptionsAPI":t.DemoexamplecollapsedCode,"data-CompositionAPI":t.DemoexamplecollapsedCompositionCode,language:"markup"}},[e("div",{attrs:{slot:"action"},slot:"action"},[e("Stackblitz",{attrs:{"demo-name":"collapsed","component-name":" cascader"}}),e("Codesandbox",{attrs:{"demo-name":"collapsed","component-name":" cascader"}})],1),e("div",{staticClass:"tdesign-demo-item__body"},[e("Demoexamplecollapsed")],1)])],1),e("h3",{attrs:{id:"\u4E0D\u540C\u5C3A\u5BF8\u7684\u7EA7\u8054\u9009\u62E9\u5668"}},[t._v("\u4E0D\u540C\u5C3A\u5BF8\u7684\u7EA7\u8054\u9009\u62E9\u5668 "),e("a",{staticClass:"header-anchor",attrs:{href:"#\u4E0D\u540C\u5C3A\u5BF8\u7684\u7EA7\u8054\u9009\u62E9\u5668"}})]),e("p",[t._v("\u63D0\u4F9B\u5927\u4E2D\u5C0F\u4E09\u79CD\u4E0D\u540C\u9AD8\u5EA6\u3001\u5BBD\u5EA6\u7684\u9009\u62E9\u5668\uFF0C\u4EE5\u9002\u5E94\u4E0D\u540C\u5C3A\u5BF8\u5E03\u5C40\u3002")]),e("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--cascader-size tdesign-demo-item--cascader"},[e("td-doc-demo",{attrs:{"demo-name":"size",languages:"OptionsAPI,CompositionAPI","data-OptionsAPI":t.DemoexamplesizeCode,"data-CompositionAPI":t.DemoexamplesizeCompositionCode,language:"markup"}},[e("div",{attrs:{slot:"action"},slot:"action"},[e("Stackblitz",{attrs:{"demo-name":"size","component-name":" cascader"}}),e("Codesandbox",{attrs:{"demo-name":"size","component-name":" cascader"}})],1),e("div",{staticClass:"tdesign-demo-item__body"},[e("Demoexamplesize")],1)])],1),e("h3",{attrs:{id:"\u53EF\u8FC7\u6EE4\u7684\u7EA7\u8054\u9009\u62E9\u5668"}},[t._v("\u53EF\u8FC7\u6EE4\u7684\u7EA7\u8054\u9009\u62E9\u5668 "),e("a",{staticClass:"header-anchor",attrs:{href:"#\u53EF\u8FC7\u6EE4\u7684\u7EA7\u8054\u9009\u62E9\u5668"}})]),e("p",[t._v("\u8F93\u5165\u8FC7\u6EE4\u5DF2\u9009\u9879\u3002\u5728\u6709\u7279\u5B9A\u8BC9\u6C42\u7684\u4E1A\u52A1\u573A\u666F\u65F6\u4F7F\u7528\u3002\u9ED8\u8BA4\u8FC7\u6EE4\u6587\u672C\u3002")]),e("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--cascader-filterable tdesign-demo-item--cascader"},[e("td-doc-demo",{attrs:{"demo-name":"filterable",languages:"OptionsAPI,CompositionAPI","data-OptionsAPI":t.DemoexamplefilterableCode,"data-CompositionAPI":t.DemoexamplefilterableCompositionCode,language:"markup"}},[e("div",{attrs:{slot:"action"},slot:"action"},[e("Stackblitz",{attrs:{"demo-name":"filterable","component-name":" cascader"}}),e("Codesandbox",{attrs:{"demo-name":"filterable","component-name":" cascader"}})],1),e("div",{staticClass:"tdesign-demo-item__body"},[e("Demoexamplefilterable")],1)])],1),e("h3",{attrs:{id:"\u7981\u7528\u7684\u7EA7\u8054\u9009\u62E9\u5668"}},[t._v("\u7981\u7528\u7684\u7EA7\u8054\u9009\u62E9\u5668 "),e("a",{staticClass:"header-anchor",attrs:{href:"#\u7981\u7528\u7684\u7EA7\u8054\u9009\u62E9\u5668"}})]),e("p",[t._v("\u63D0\u4F9B\u7981\u7528\u72B6\u6001\u7684\u7EA7\u8054\u9009\u62E9\u5668\u3002")]),e("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--cascader-disabled tdesign-demo-item--cascader"},[e("td-doc-demo",{attrs:{"demo-name":"disabled",languages:"OptionsAPI,CompositionAPI","data-OptionsAPI":t.DemoexampledisabledCode,"data-CompositionAPI":t.DemoexampledisabledCompositionCode,language:"markup"}},[e("div",{attrs:{slot:"action"},slot:"action"},[e("Stackblitz",{attrs:{"demo-name":"disabled","component-name":" cascader"}}),e("Codesandbox",{attrs:{"demo-name":"disabled","component-name":" cascader"}})],1),e("div",{staticClass:"tdesign-demo-item__body"},[e("Demoexampledisabled")],1)])],1),e("h3",{attrs:{id:"\u53EA\u663E\u793A\u6700\u540E\u4E00\u7EA7\u7684\u7EA7\u8054\u9009\u62E9\u5668"}},[t._v("\u53EA\u663E\u793A\u6700\u540E\u4E00\u7EA7\u7684\u7EA7\u8054\u9009\u62E9\u5668 "),e("a",{staticClass:"header-anchor",attrs:{href:"#\u53EA\u663E\u793A\u6700\u540E\u4E00\u7EA7\u7684\u7EA7\u8054\u9009\u62E9\u5668"}})]),e("p",[t._v("\u53EF\u4EE5\u4EC5\u5728\u8F93\u5165\u6846\u4E2D\u663E\u793A\u9009\u4E2D\u9879\u6700\u540E\u4E00\u7EA7\u7684\u6807\u7B7E\uFF0C\u800C\u4E0D\u662F\u9009\u4E2D\u9879\u6240\u5728\u7684\u5B8C\u6574\u8DEF\u5F84\u3002")]),e("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--cascader-show-all-levels tdesign-demo-item--cascader"},[e("td-doc-demo",{attrs:{"demo-name":"show-all-levels",languages:"OptionsAPI,CompositionAPI","data-OptionsAPI":t.DemoexampleshowalllevelsCode,"data-CompositionAPI":t.DemoexampleshowalllevelsCompositionCode,language:"markup"}},[e("div",{attrs:{slot:"action"},slot:"action"},[e("Stackblitz",{attrs:{"demo-name":"show-all-levels","component-name":" cascader"}}),e("Codesandbox",{attrs:{"demo-name":"show-all-levels","component-name":" cascader"}})],1),e("div",{staticClass:"tdesign-demo-item__body"},[e("Demoexampleshowalllevels")],1)])],1),e("h3",{attrs:{id:"\u9009\u62E9\u4EFB\u610F\u4E00\u9879\u7684\u7EA7\u8054\u9009\u62E9\u5668"}},[t._v("\u9009\u62E9\u4EFB\u610F\u4E00\u9879\u7684\u7EA7\u8054\u9009\u62E9\u5668 "),e("a",{staticClass:"header-anchor",attrs:{href:"#\u9009\u62E9\u4EFB\u610F\u4E00\u9879\u7684\u7EA7\u8054\u9009\u62E9\u5668"}})]),e("p",[t._v("\u542F\u7528\u8BE5\u529F\u80FD\u540E\uFF0C\u53EF\u4EE5\u9009\u62E9\u4EFB\u610F\u4E00\u7EA7\u9009\u9879\u3002")]),e("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--cascader-check-strictly tdesign-demo-item--cascader"},[e("td-doc-demo",{attrs:{"demo-name":"check-strictly",languages:"OptionsAPI,CompositionAPI","data-OptionsAPI":t.DemoexamplecheckstrictlyCode,"data-CompositionAPI":t.DemoexamplecheckstrictlyCompositionCode,language:"markup"}},[e("div",{attrs:{slot:"action"},slot:"action"},[e("Stackblitz",{attrs:{"demo-name":"check-strictly","component-name":" cascader"}}),e("Codesandbox",{attrs:{"demo-name":"check-strictly","component-name":" cascader"}})],1),e("div",{staticClass:"tdesign-demo-item__body"},[e("Demoexamplecheckstrictly")],1)])],1),e("h3",{attrs:{id:"\u5168\u8DEF\u5F84\u6A21\u5F0F\u7684\u7EA7\u8054\u9009\u62E9\u5668"}},[t._v("\u5168\u8DEF\u5F84\u6A21\u5F0F\u7684\u7EA7\u8054\u9009\u62E9\u5668 "),e("a",{staticClass:"header-anchor",attrs:{href:"#\u5168\u8DEF\u5F84\u6A21\u5F0F\u7684\u7EA7\u8054\u9009\u62E9\u5668"}})]),e("p",[t._v("\u9ED8\u8BA4\u7684\u8F93\u5165\u8F93\u51FA\u503C\u7C7B\u578B\u4E3A\u53F6\u5B50\u7ED3\u70B9\u7684\u503C\uFF0C"),e("code",[t._v('value-type="full"')]),t._v(" \u65F6\u4F7F\u7528\u5168\u8DEF\u5F84\u503C")]),e("ul",[e("li",[t._v("\u5355\u9009\u60C5\u51B5\u4E0B\uFF0C\u9009\u4E2D\u540E"),e("code",[t._v("value")]),t._v("\u662F\u4E00\u7EF4\u6570\u7EC4\uFF0C\u5982\uFF1A"),e("code",[t._v("['1','1.1']")])]),e("li",[t._v("\u591A\u9009\u60C5\u51B5\u4E0B\uFF0C\u9009\u4E2D\u540E"),e("code",[t._v("value")]),t._v("\u662F\u4E8C\u7EF4\u6570\u7EC4\uFF0C\u5982\uFF1A"),e("code",[t._v("[['1','1.1'],['1','1.2']]")])])]),e("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--cascader-value-type tdesign-demo-item--cascader"},[e("td-doc-demo",{attrs:{"demo-name":"value-type",languages:"OptionsAPI,CompositionAPI","data-OptionsAPI":t.DemoexamplevaluetypeCode,"data-CompositionAPI":t.DemoexamplevaluetypeCompositionCode,language:"markup"}},[e("div",{attrs:{slot:"action"},slot:"action"},[e("Stackblitz",{attrs:{"demo-name":"value-type","component-name":" cascader"}}),e("Codesandbox",{attrs:{"demo-name":"value-type","component-name":" cascader"}})],1),e("div",{staticClass:"tdesign-demo-item__body"},[e("Demoexamplevaluetype")],1)])],1),e("h3",{attrs:{id:"\u81EA\u5B9A\u4E49\u9009\u4E2D\u503C\u6A21\u5F0F"}},[t._v("\u81EA\u5B9A\u4E49\u9009\u4E2D\u503C\u6A21\u5F0F "),e("a",{staticClass:"header-anchor",attrs:{href:"#\u81EA\u5B9A\u4E49\u9009\u4E2D\u503C\u6A21\u5F0F"}})]),e("p",[t._v("\u53EA\u5728\u591A\u9009\u6761\u4EF6\u4E0B\u751F\u6548\u3002"),e("code",[t._v("onlyLeaft")]),t._v(" \u8868\u793A\u65E0\u8BBA\u4EC0\u4E48\u60C5\u51B5\uFF0C\u9009\u4E2D\u503C\u4EC5\u5448\u73B0\u53F6\u5B50\u8282\u70B9\u3001"),e("code",[t._v("parentFirst")]),t._v(" \u8868\u793A\u5F53\u5B50\u8282\u70B9\u5168\u90E8\u9009\u4E2D\u65F6\uFF0C\u4EC5\u7236\u8282\u70B9\u5728\u9009\u4E2D\u503C\u91CC\u9762\u3001"),e("code",[t._v("all")]),t._v(" \u8868\u793A\u7236\u8282\u70B9\u548C\u5B50\u8282\u70B9\u5168\u90E8\u4F1A\u51FA\u73B0\u5728\u9009\u4E2D\u503C\u91CC\u9762\u3002")]),e("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--cascader-value-mode tdesign-demo-item--cascader"},[e("td-doc-demo",{attrs:{"demo-name":"value-mode",languages:"OptionsAPI,CompositionAPI","data-OptionsAPI":t.DemoexamplevaluemodeCode,"data-CompositionAPI":t.DemoexamplevaluemodeCompositionCode,language:"markup"}},[e("div",{attrs:{slot:"action"},slot:"action"},[e("Stackblitz",{attrs:{"demo-name":"value-mode","component-name":" cascader"}}),e("Codesandbox",{attrs:{"demo-name":"value-mode","component-name":" cascader"}})],1),e("div",{staticClass:"tdesign-demo-item__body"},[e("Demoexamplevaluemode")],1)])],1),e("h3",{attrs:{id:"\u81EA\u5B9A\u4E49\u4E0B\u62C9\u9009\u9879\u5185\u5BB9"}},[t._v("\u81EA\u5B9A\u4E49\u4E0B\u62C9\u9009\u9879\u5185\u5BB9 "),e("a",{staticClass:"header-anchor",attrs:{href:"#\u81EA\u5B9A\u4E49\u4E0B\u62C9\u9009\u9879\u5185\u5BB9"}})]),e("p",[t._v("\u53EF\u4EE5\u81EA\u5B9A\u4E49\u4E0B\u62C9\u9009\u9879\u7684\u5185\u5BB9\u5C55\u793A")]),e("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--cascader-custom-options tdesign-demo-item--cascader"},[e("td-doc-demo",{attrs:{"demo-name":"custom-options",languages:"OptionsAPI,CompositionAPI","data-OptionsAPI":t.DemoexamplecustomoptionsCode,"data-CompositionAPI":t.DemoexamplecustomoptionsCompositionCode,language:"markup"}},[e("div",{attrs:{slot:"action"},slot:"action"},[e("Stackblitz",{attrs:{"demo-name":"custom-options","component-name":" cascader"}}),e("Codesandbox",{attrs:{"demo-name":"custom-options","component-name":" cascader"}})],1),e("div",{staticClass:"tdesign-demo-item__body"},[e("Demoexamplecustomoptions")],1)])],1),e("h3",{attrs:{id:"\u81EA\u5B9A\u4E49\u9009\u4E2D\u9879\u5185\u5BB9"}},[t._v("\u81EA\u5B9A\u4E49\u9009\u4E2D\u9879\u5185\u5BB9 "),e("a",{staticClass:"header-anchor",attrs:{href:"#\u81EA\u5B9A\u4E49\u9009\u4E2D\u9879\u5185\u5BB9"}})]),e("p",[t._v("\u53EF\u4EE5\u81EA\u5B9A\u4E49\u8F93\u5165\u6846\u4E2D\u663E\u793A\u7684\u9009\u4E2D\u9879\u5185\u5BB9\u5C55\u793A")]),e("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--cascader-value-display tdesign-demo-item--cascader"},[e("td-doc-demo",{attrs:{"demo-name":"value-display",languages:"OptionsAPI,CompositionAPI","data-OptionsAPI":t.DemoexamplevaluedisplayCode,"data-CompositionAPI":t.DemoexamplevaluedisplayCompositionCode,language:"markup"}},[e("div",{attrs:{slot:"action"},slot:"action"},[e("Stackblitz",{attrs:{"demo-name":"value-display","component-name":" cascader"}}),e("Codesandbox",{attrs:{"demo-name":"value-display","component-name":" cascader"}})],1),e("div",{staticClass:"tdesign-demo-item__body"},[e("Demoexamplevaluedisplay")],1)])],1),e("h3",{attrs:{id:"\u4E0D\u540C\u7684\u89E6\u53D1\u65B9\u5F0F"}},[t._v("\u4E0D\u540C\u7684\u89E6\u53D1\u65B9\u5F0F "),e("a",{staticClass:"header-anchor",attrs:{href:"#\u4E0D\u540C\u7684\u89E6\u53D1\u65B9\u5F0F"}})]),e("p",[t._v("\u53EF\u901A\u8FC7\u4E0D\u540C\u7684\u89E6\u53D1\u65B9\u5F0F\u6765\u52A0\u8F7D\u5B50\u83DC\u5355\u3002")]),e("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--cascader-trigger tdesign-demo-item--cascader"},[e("td-doc-demo",{attrs:{"demo-name":"trigger",languages:"OptionsAPI,CompositionAPI","data-OptionsAPI":t.DemoexampletriggerCode,"data-CompositionAPI":t.DemoexampletriggerCompositionCode,language:"markup"}},[e("div",{attrs:{slot:"action"},slot:"action"},[e("Stackblitz",{attrs:{"demo-name":"trigger","component-name":" cascader"}}),e("Codesandbox",{attrs:{"demo-name":"trigger","component-name":" cascader"}})],1),e("div",{staticClass:"tdesign-demo-item__body"},[e("Demoexampletrigger")],1)])],1),e("h3",{attrs:{id:"\u6587\u672C\u8FC7\u957F\u65F6\u7684\u5C55\u793A"}},[t._v("\u6587\u672C\u8FC7\u957F\u65F6\u7684\u5C55\u793A "),e("a",{staticClass:"header-anchor",attrs:{href:"#\u6587\u672C\u8FC7\u957F\u65F6\u7684\u5C55\u793A"}})]),e("p",[t._v("\u6570\u636E\u6587\u672C\u5C55\u793A\u8FC7\u957F\u65F6\uFF0C\u4F7F\u7528\u6D4F\u89C8\u5668 "),e("code",[t._v("title")]),t._v(" \u5C55\u793A\u8FC7\u957F\u6587\u6848\u3002")]),e("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--cascader-ellipsis tdesign-demo-item--cascader"},[e("td-doc-demo",{attrs:{"demo-name":"ellipsis",languages:"OptionsAPI,CompositionAPI","data-OptionsAPI":t.DemoexampleellipsisCode,"data-CompositionAPI":t.DemoexampleellipsisCompositionCode,language:"markup"}},[e("div",{attrs:{slot:"action"},slot:"action"},[e("Stackblitz",{attrs:{"demo-name":"ellipsis","component-name":" cascader"}}),e("Codesandbox",{attrs:{"demo-name":"ellipsis","component-name":" cascader"}})],1),e("div",{staticClass:"tdesign-demo-item__body"},[e("Demoexampleellipsis")],1)])],1),e("h3",{attrs:{id:"\u9650\u5236\u53EF\u9009\u6570\u76EE"}},[t._v("\u9650\u5236\u53EF\u9009\u6570\u76EE "),e("a",{staticClass:"header-anchor",attrs:{href:"#\u9650\u5236\u53EF\u9009\u6570\u76EE"}})]),e("p",[t._v("\u9650\u5236\u591A\u9009\u9009\u62E9\u5668\u7684\u6700\u5927\u53EF\u9009\u6570\u76EE\u3002\u901A\u5E38\u5728\u9700\u8981\u9650\u5236\u591A\u9009\u53EF\u9009\u6570\u76EE\u65F6\u4F7F\u7528\u3002")]),e("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--cascader-max tdesign-demo-item--cascader"},[e("td-doc-demo",{attrs:{"demo-name":"max",languages:"OptionsAPI,CompositionAPI","data-OptionsAPI":t.DemoexamplemaxCode,"data-CompositionAPI":t.DemoexamplemaxCompositionCode,language:"markup"}},[e("div",{attrs:{slot:"action"},slot:"action"},[e("Stackblitz",{attrs:{"demo-name":"max","component-name":" cascader"}}),e("Codesandbox",{attrs:{"demo-name":"max","component-name":" cascader"}})],1),e("div",{staticClass:"tdesign-demo-item__body"},[e("Demoexamplemax")],1)])],1),e("h3",{attrs:{id:"\u5B9A\u5236\u6570\u636E\u5B57\u6BB5\u522B\u540D"}},[t._v("\u5B9A\u5236\u6570\u636E\u5B57\u6BB5\u522B\u540D "),e("a",{staticClass:"header-anchor",attrs:{href:"#\u5B9A\u5236\u6570\u636E\u5B57\u6BB5\u522B\u540D"}})]),e("p",[t._v("\u4F7F\u7528 "),e("code",[t._v("options")]),t._v(" \u914D\u7F6E\u4E0B\u62C9\u9009\u9879\u65F6\uFF0C\u5982\u679C\u6570\u636E\u5B57\u6BB5\u4E0D\u662F "),e("code",[t._v("label")]),t._v(" \u548C "),e("code",[t._v("value")]),t._v("\uFF0C\u53EF\u4EE5\u4F7F\u7528 "),e("code",[t._v("keys")]),t._v(" \u5B9A\u4E49\u522B\u540D\u3002")]),e("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--cascader-keys tdesign-demo-item--cascader"},[e("td-doc-demo",{attrs:{"demo-name":"keys",languages:"OptionsAPI,CompositionAPI","data-OptionsAPI":t.DemoexamplekeysCode,"data-CompositionAPI":t.DemoexamplekeysCompositionCode,language:"markup"}},[e("div",{attrs:{slot:"action"},slot:"action"},[e("Stackblitz",{attrs:{"demo-name":"keys","component-name":" cascader"}}),e("Codesandbox",{attrs:{"demo-name":"keys","component-name":" cascader"}})],1),e("div",{staticClass:"tdesign-demo-item__body"},[e("Demoexamplekeys")],1)])],1),e("h3",{attrs:{id:"\u52A8\u6001\u52A0\u8F7D"}},[t._v("\u52A8\u6001\u52A0\u8F7D "),e("a",{staticClass:"header-anchor",attrs:{href:"#\u52A8\u6001\u52A0\u8F7D"}})]),e("p",[t._v("\u53EF\u6839\u636E\u9700\u6C42\u5B9A\u5236\u9009\u62E9\u5668\u5185\u5BB9\u3002\u5728\u6709\u590D\u6742\u903B\u8F91\u6216\u6709\u7279\u5B9A\u8BC9\u6C42\u7684\u4E1A\u52A1\u573A\u666F\u65F6\u4F7F\u7528\u3002")]),e("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--cascader-load tdesign-demo-item--cascader"},[e("td-doc-demo",{attrs:{"demo-name":"load",languages:"OptionsAPI,CompositionAPI","data-OptionsAPI":t.DemoexampleloadCode,"data-CompositionAPI":t.DemoexampleloadCompositionCode,language:"markup"}},[e("div",{attrs:{slot:"action"},slot:"action"},[e("Stackblitz",{attrs:{"demo-name":"load","component-name":" cascader"}}),e("Codesandbox",{attrs:{"demo-name":"load","component-name":" cascader"}})],1),e("div",{staticClass:"tdesign-demo-item__body"},[e("Demoexampleload")],1)])],1),e("h3",{attrs:{id:"\u7EA7\u8054\u9762\u677F"}},[t._v("\u7EA7\u8054\u9762\u677F "),e("a",{staticClass:"header-anchor",attrs:{href:"#\u7EA7\u8054\u9762\u677F"}})]),e("p",[t._v("\u5355\u72EC\u4F7F\u7528\u7EA7\u8054\u9762\u677F\uFF0C\u7528\u4E8E\u4E0E\u5176\u4ED6\u89E6\u53D1\u5668\u7ED3\u5408")]),e("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--cascader-panel tdesign-demo-item--cascader"},[e("td-doc-demo",{attrs:{"demo-name":"panel",languages:"OptionsAPI,CompositionAPI","data-OptionsAPI":t.DemoexamplepanelCode,"data-CompositionAPI":t.DemoexamplepanelCompositionCode,language:"markup"}},[e("div",{attrs:{slot:"action"},slot:"action"},[e("Stackblitz",{attrs:{"demo-name":"panel","component-name":" cascader"}}),e("Codesandbox",{attrs:{"demo-name":"panel","component-name":" cascader"}})],1),e("div",{staticClass:"tdesign-demo-item__body"},[e("Demoexamplepanel")],1)])],1)],1),e("td-contributors",{attrs:{platform:"web",framework:"vue","component-name":"cascader"}})],1),e("div",{directives:[{name:"show",rawName:"v-show",value:t.tab==="api",expression:"tab === 'api'"}],attrs:{name:"API"}},[e("nav",{staticClass:"tdesign-toc_container"},[e("ol",{staticClass:"tdesign-toc_list"},[e("li",{staticClass:"tdesign-toc_list_item"},[e("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#cascader-props"}},[t._v("Cascader Props")])]),e("li",{staticClass:"tdesign-toc_list_item"},[e("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#cascader-events"}},[t._v("Cascader Events")])])])]),e("h3",{attrs:{id:"cascader-props"}},[t._v("Cascader Props "),e("a",{staticClass:"header-anchor",attrs:{href:"#cascader-props"}})]),e("table",[e("thead",[e("tr",[e("th",[t._v("\u540D\u79F0")]),e("th",[t._v("\u7C7B\u578B")]),e("th",[t._v("\u9ED8\u8BA4\u503C")]),e("th",[t._v("\u63CF\u8FF0")]),e("th",[t._v("\u5FC5\u4F20")])])]),e("tbody",[e("tr",[e("td",[t._v("autofocus")]),e("td",[t._v("Boolean")]),e("td",[t._v("-")]),e("td",[t._v("\u81EA\u52A8\u805A\u7126")]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("borderless")]),e("td",[t._v("Boolean")]),e("td",[t._v("false")]),e("td",[t._v("\u65E0\u8FB9\u6846\u6A21\u5F0F")]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("checkProps")]),e("td",[t._v("Object")]),e("td",[t._v("-")]),e("td",[t._v("\u53C2\u8003 checkbox \u7EC4\u4EF6 API\u3002TS \u7C7B\u578B\uFF1A"),e("code",[t._v("CheckboxProps")]),t._v("\uFF0C"),e("a",{attrs:{href:"./checkbox?tab=api"}},[t._v("Checkbox API Documents")]),t._v("\u3002"),e("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/tree/develop/src/cascader/type.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("\u8BE6\u7EC6\u7C7B\u578B\u5B9A\u4E49")])]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("checkStrictly")]),e("td",[t._v("Boolean")]),e("td",[t._v("false")]),e("td",[t._v("\u7236\u5B50\u8282\u70B9\u9009\u4E2D\u72B6\u6001\u4E0D\u518D\u5173\u8054\uFF0C\u53EF\u5404\u81EA\u9009\u4E2D\u6216\u53D6\u6D88")]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("clearable")]),e("td",[t._v("Boolean")]),e("td",[t._v("false")]),e("td",[t._v("\u662F\u5426\u652F\u6301\u6E05\u7A7A\u9009\u9879")]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("collapsedItems")]),e("td",[t._v("Slot / Function")]),e("td",[t._v("-")]),e("td",[t._v("\u591A\u9009\u60C5\u51B5\u4E0B\uFF0C\u7528\u4E8E\u8BBE\u7F6E\u6298\u53E0\u9879\u5185\u5BB9\uFF0C\u9ED8\u8BA4\u4E3A "),e("code",[t._v("+N")]),t._v("\u3002\u5982\u679C\u9700\u8981\u60AC\u6D6E\u5C31\u663E\u793A\u5176\u4ED6\u5185\u5BB9\uFF0C\u53EF\u4EE5\u4F7F\u7528 collapsedItems \u81EA\u5B9A\u4E49\u3002"),e("code",[t._v("value")]),t._v(" \u8868\u793A\u5F53\u524D\u5B58\u5728\u7684\u6240\u6709\u6807\u7B7E\uFF0C"),e("code",[t._v("collapsedSelectedItems")]),t._v(" \u8868\u793A\u6298\u53E0\u7684\u6807\u7B7E\uFF0C"),e("code",[t._v("count")]),t._v(" \u8868\u793A\u6298\u53E0\u7684\u6570\u91CF\uFF0C"),e("code",[t._v("onClose")]),t._v(" \u8868\u793A\u79FB\u9664\u6807\u7B7E\u7684\u4E8B\u4EF6\u56DE\u8C03\u3002TS \u7C7B\u578B\uFF1A"),e("code",[t._v("TNode<{ value: CascaderOption[]; collapsedSelectedItems: CascaderOption[]; count: number; onClose: (context: { index: number, e?: MouseEvent }) => void }>")]),t._v("\u3002"),e("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("\u901A\u7528\u7C7B\u578B\u5B9A\u4E49")])]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("disabled")]),e("td",[t._v("Boolean")]),e("td",[t._v("-")]),e("td",[t._v("\u662F\u5426\u7981\u7528\u7EC4\u4EF6")]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("empty")]),e("td",[t._v("String / Slot / Function")]),e("td",[t._v("-")]),e("td",[t._v("\u65E0\u5339\u914D\u9009\u9879\u65F6\u7684\u5185\u5BB9\uFF0C\u9ED8\u8BA4\u5168\u5C40\u914D\u7F6E\u4E3A '\u6682\u65E0\u6570\u636E'\u3002TS \u7C7B\u578B\uFF1A"),e("code",[t._v("string | TNode")]),t._v("\u3002"),e("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("\u901A\u7528\u7C7B\u578B\u5B9A\u4E49")])]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("filter")]),e("td",[t._v("Function")]),e("td",[t._v("-")]),e("td",[t._v("\u81EA\u5B9A\u4E49\u8FC7\u6EE4\u65B9\u6CD5\uFF0C\u7528\u4E8E\u5BF9\u73B0\u6709\u6570\u636E\u8FDB\u884C\u641C\u7D22\u8FC7\u6EE4\uFF0C\u5224\u65AD\u662F\u5426\u8FC7\u6EE4\u67D0\u4E00\u9879\u6570\u636E\u3002TS \u7C7B\u578B\uFF1A"),e("code",[t._v("(filterWords: string, node: TreeNodeModel) => boolean | Promise<boolean>")])]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("filterable")]),e("td",[t._v("Boolean")]),e("td",[t._v("false")]),e("td",[t._v("\u662F\u5426\u53EF\u641C\u7D22")]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("inputProps")]),e("td",[t._v("Object")]),e("td",[t._v("-")]),e("td",[t._v("\u900F\u4F20 Input \u8F93\u5165\u6846\u7EC4\u4EF6\u7684\u5168\u90E8\u5C5E\u6027\u3002TS \u7C7B\u578B\uFF1A"),e("code",[t._v("InputProps")]),t._v("\uFF0C"),e("a",{attrs:{href:"./input?tab=api"}},[t._v("Input API Documents")]),t._v("\u3002"),e("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/tree/develop/src/cascader/type.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("\u8BE6\u7EC6\u7C7B\u578B\u5B9A\u4E49")])]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("keys")]),e("td",[t._v("Object")]),e("td",[t._v("-")]),e("td",[t._v("\u7528\u6765\u5B9A\u4E49 value / label / children / disabled \u5728 "),e("code",[t._v("options")]),t._v(" \u4E2D\u5BF9\u5E94\u7684\u5B57\u6BB5\u522B\u540D\u3002TS \u7C7B\u578B\uFF1A"),e("code",[t._v("TreeKeysType")]),t._v("\u3002"),e("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("\u901A\u7528\u7C7B\u578B\u5B9A\u4E49")])]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("label")]),e("td",[t._v("String / Slot / Function")]),e("td",[t._v("-")]),e("td",[t._v("\u5DE6\u4FA7\u6587\u672C\u3002TS \u7C7B\u578B\uFF1A"),e("code",[t._v("string | TNode")]),t._v("\u3002"),e("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("\u901A\u7528\u7C7B\u578B\u5B9A\u4E49")])]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("lazy")]),e("td",[t._v("Boolean")]),e("td",[t._v("true")]),e("td",[t._v("\u5EF6\u8FDF\u52A0\u8F7D children \u4E3A true \u7684\u5B50\u8282\u70B9\uFF0C\u5373\u4F7F expandAll \u88AB\u8BBE\u7F6E\u4E3A true\uFF0C\u4E5F\u540C\u6837\u5EF6\u8FDF\u52A0\u8F7D")]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("load")]),e("td",[t._v("Function")]),e("td",[t._v("-")]),e("td",[t._v("\u52A0\u8F7D\u5B50\u6811\u6570\u636E\u7684\u65B9\u6CD5\uFF08\u4EC5\u5F53\u8282\u70B9 children \u4E3A true \u65F6\u751F\u6548\uFF09\u3002TS \u7C7B\u578B\uFF1A"),e("code",[t._v("(node: TreeNodeModel<CascaderOption>) => Promise<Array<CascaderOption>>")])]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("loading")]),e("td",[t._v("Boolean")]),e("td",[t._v("false")]),e("td",[t._v("\u662F\u5426\u4E3A\u52A0\u8F7D\u72B6\u6001")]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("loadingText")]),e("td",[t._v("String / Slot / Function")]),e("td",[t._v("-")]),e("td",[t._v("\u8FDC\u7A0B\u52A0\u8F7D\u65F6\u663E\u793A\u7684\u6587\u5B57\uFF0C\u652F\u6301\u81EA\u5B9A\u4E49\u3002\u5982\u52A0\u4E0A\u8D85\u94FE\u63A5\u3002TS \u7C7B\u578B\uFF1A"),e("code",[t._v("string | TNode")]),t._v("\u3002"),e("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("\u901A\u7528\u7C7B\u578B\u5B9A\u4E49")])]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("max")]),e("td",[t._v("Number")]),e("td",[t._v("0")]),e("td",[t._v("\u7528\u4E8E\u63A7\u5236\u591A\u9009\u6570\u91CF\uFF0C\u503C\u4E3A 0 \u5219\u4E0D\u9650\u5236")]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("minCollapsedNum")]),e("td",[t._v("Number")]),e("td",[t._v("0")]),e("td",[t._v("\u6700\u5C0F\u6298\u53E0\u6570\u91CF\uFF0C\u7528\u4E8E\u591A\u9009\u60C5\u51B5\u4E0B\u6298\u53E0\u9009\u4E2D\u9879\uFF0C\u8D85\u51FA\u8BE5\u6570\u503C\u7684\u9009\u4E2D\u9879\u6298\u53E0\u3002\u503C\u4E3A 0 \u5219\u8868\u793A\u4E0D\u6298\u53E0")]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("multiple")]),e("td",[t._v("Boolean")]),e("td",[t._v("false")]),e("td",[t._v("\u662F\u5426\u5141\u8BB8\u591A\u9009")]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("option")]),e("td",[t._v("Slot / Function")]),e("td",[t._v("-")]),e("td",[t._v("\u81EA\u5B9A\u4E49\u5355\u4E2A\u7EA7\u8054\u9009\u9879\u3002TS \u7C7B\u578B\uFF1A"),e("code",[t._v("TNode<{ item: CascaderOption; index: number }>")]),t._v("\u3002"),e("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("\u901A\u7528\u7C7B\u578B\u5B9A\u4E49")])]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("options")]),e("td",[t._v("Array")]),e("td",[t._v("[]")]),e("td",[t._v("\u53EF\u9009\u9879\u6570\u636E\u6E90\u3002TS \u7C7B\u578B\uFF1A"),e("code",[t._v("Array<CascaderOption>")])]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("placeholder")]),e("td",[t._v("String")]),e("td",[t._v("undefined")]),e("td",[t._v("\u5360\u4F4D\u7B26")]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("popupProps")]),e("td",[t._v("Object")]),e("td",[t._v("-")]),e("td",[t._v("\u53C2\u8003 popup \u7EC4\u4EF6 API\u3002TS \u7C7B\u578B\uFF1A"),e("code",[t._v("PopupProps")]),t._v("\uFF0C"),e("a",{attrs:{href:"./popup?tab=api"}},[t._v("Popup API Documents")]),t._v("\u3002"),e("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/tree/develop/src/cascader/type.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("\u8BE6\u7EC6\u7C7B\u578B\u5B9A\u4E49")])]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("popupVisible")]),e("td",[t._v("Boolean")]),e("td",[t._v("-")]),e("td",[t._v("\u662F\u5426\u663E\u793A\u4E0B\u62C9\u6846")]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("readonly")]),e("td",[t._v("Boolean")]),e("td",[t._v("false")]),e("td",[t._v("\u53EA\u8BFB\u72B6\u6001\uFF0C\u503C\u4E3A\u771F\u4F1A\u9690\u85CF\u8F93\u5165\u6846\uFF0C\u4E14\u65E0\u6CD5\u6253\u5F00\u4E0B\u62C9\u6846")]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("reserveKeyword")]),e("td",[t._v("Boolean")]),e("td",[t._v("false")]),e("td",[t._v("\u591A\u9009\u4E14\u53EF\u641C\u7D22\u65F6\uFF0C\u662F\u5426\u5728\u9009\u4E2D\u4E00\u4E2A\u9009\u9879\u540E\u4FDD\u7559\u5F53\u524D\u7684\u641C\u7D22\u5173\u952E\u8BCD")]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("selectInputProps")]),e("td",[t._v("Object")]),e("td",[t._v("-")]),e("td",[t._v("\u900F\u4F20 SelectInput \u7B5B\u9009\u5668\u8F93\u5165\u6846\u7EC4\u4EF6\u7684\u5168\u90E8\u5C5E\u6027\u3002TS \u7C7B\u578B\uFF1A"),e("code",[t._v("SelectInputProps")]),t._v("\uFF0C"),e("a",{attrs:{href:"./select-input?tab=api"}},[t._v("SelectInput API Documents")]),t._v("\u3002"),e("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/tree/develop/src/cascader/type.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("\u8BE6\u7EC6\u7C7B\u578B\u5B9A\u4E49")])]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("showAllLevels")]),e("td",[t._v("Boolean")]),e("td",[t._v("true")]),e("td",[t._v("\u9009\u4E2D\u503C\u4F7F\u7528\u5B8C\u6574\u8DEF\u5F84\uFF0C\u8F93\u5165\u6846\u5728\u5355\u9009\u65F6\u4E5F\u663E\u793A\u5B8C\u6574\u8DEF\u5F84")]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("size")]),e("td",[t._v("String")]),e("td",[t._v("medium")]),e("td",[t._v("\u7EC4\u4EF6\u5C3A\u5BF8\u3002\u53EF\u9009\u9879\uFF1Alarge/medium/small\u3002TS \u7C7B\u578B\uFF1A"),e("code",[t._v("SizeEnum")]),t._v("\u3002"),e("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("\u901A\u7528\u7C7B\u578B\u5B9A\u4E49")])]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("status")]),e("td",[t._v("String")]),e("td",[t._v("default")]),e("td",[t._v("\u8F93\u5165\u6846\u72B6\u6001\u3002\u53EF\u9009\u9879\uFF1Adefault/success/warning/error")]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("suffix")]),e("td",[t._v("String / Slot / Function")]),e("td",[t._v("-")]),e("td",[t._v("\u540E\u7F6E\u56FE\u6807\u524D\u7684\u540E\u7F6E\u5185\u5BB9\u3002TS \u7C7B\u578B\uFF1A"),e("code",[t._v("string | TNode")]),t._v("\u3002"),e("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("\u901A\u7528\u7C7B\u578B\u5B9A\u4E49")])]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("suffixIcon")]),e("td",[t._v("Slot / Function")]),e("td",[t._v("-")]),e("td",[t._v("\u7EC4\u4EF6\u540E\u7F6E\u56FE\u6807\u3002TS \u7C7B\u578B\uFF1A"),e("code",[t._v("TNode")]),t._v("\u3002"),e("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("\u901A\u7528\u7C7B\u578B\u5B9A\u4E49")])]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("tagInputProps")]),e("td",[t._v("Object")]),e("td",[t._v("-")]),e("td",[t._v("\u900F\u4F20 TagInput \u6807\u7B7E\u8F93\u5165\u6846\u7EC4\u4EF6\u7684\u5168\u90E8\u5C5E\u6027\u3002TS \u7C7B\u578B\uFF1A"),e("code",[t._v("TagInputProps")]),t._v("\uFF0C"),e("a",{attrs:{href:"./tag-input?tab=api"}},[t._v("TagInput API Documents")]),t._v("\u3002"),e("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/tree/develop/src/cascader/type.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("\u8BE6\u7EC6\u7C7B\u578B\u5B9A\u4E49")])]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("tagProps")]),e("td",[t._v("Object")]),e("td",[t._v("-")]),e("td",[t._v("\u900F\u4F20 Tag \u6807\u7B7E\u7EC4\u4EF6\u5168\u90E8\u5C5E\u6027\u3002TS \u7C7B\u578B\uFF1A"),e("code",[t._v("TagProps")]),t._v("\uFF0C"),e("a",{attrs:{href:"./tag?tab=api"}},[t._v("Tag API Documents")]),t._v("\u3002"),e("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/tree/develop/src/cascader/type.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("\u8BE6\u7EC6\u7C7B\u578B\u5B9A\u4E49")])]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("tips")]),e("td",[t._v("String / Slot / Function")]),e("td",[t._v("-")]),e("td",[t._v("\u8F93\u5165\u6846\u4E0B\u65B9\u63D0\u793A\u6587\u672C\uFF0C\u4F1A\u6839\u636E\u4E0D\u540C\u7684 "),e("code",[t._v("status")]),t._v(" \u5448\u73B0\u4E0D\u540C\u7684\u6837\u5F0F\u3002TS \u7C7B\u578B\uFF1A"),e("code",[t._v("string | TNode")]),t._v("\u3002"),e("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("\u901A\u7528\u7C7B\u578B\u5B9A\u4E49")])]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("trigger")]),e("td",[t._v("String")]),e("td",[t._v("click")]),e("td",[t._v("\u5C55\u5F00\u4E0B\u4E00\u5C42\u7EA7\u7684\u65B9\u5F0F\u3002\u53EF\u9009\u9879\uFF1Aclick/hover")]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("value")]),e("td",[t._v("String / Number / Array")]),e("td",[t._v("[]")]),e("td",[t._v("\u9009\u4E2D\u9879\u7684\u503C\u3002\u652F\u6301\u8BED\u6CD5\u7CD6 "),e("code",[t._v("v-model")]),t._v("\u3002TS \u7C7B\u578B\uFF1A"),e("code",[t._v("CascaderValue<CascaderOption>")]),t._v(" "),e("code",[t._v("type CascaderValue<T extends TreeOptionData = TreeOptionData> = string | number | T | Array<CascaderValue<T>>")]),t._v("\u3002"),e("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("\u901A\u7528\u7C7B\u578B\u5B9A\u4E49")]),t._v("\u3002"),e("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/tree/develop/src/cascader/type.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("\u8BE6\u7EC6\u7C7B\u578B\u5B9A\u4E49")])]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("defaultValue")]),e("td",[t._v("String / Number / Array")]),e("td",[t._v("[]")]),e("td",[t._v("\u9009\u4E2D\u9879\u7684\u503C\u3002\u975E\u53D7\u63A7\u5C5E\u6027\u3002TS \u7C7B\u578B\uFF1A"),e("code",[t._v("CascaderValue<CascaderOption>")]),t._v(" "),e("code",[t._v("type CascaderValue<T extends TreeOptionData = TreeOptionData> = string | number | T | Array<CascaderValue<T>>")]),t._v("\u3002"),e("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("\u901A\u7528\u7C7B\u578B\u5B9A\u4E49")]),t._v("\u3002"),e("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/tree/develop/src/cascader/type.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("\u8BE6\u7EC6\u7C7B\u578B\u5B9A\u4E49")])]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("valueDisplay")]),e("td",[t._v("String / Slot / Function")]),e("td",[t._v("-")]),e("td",[t._v("\u81EA\u5B9A\u4E49\u9009\u4E2D\u9879\u5448\u73B0\u7684\u5185\u5BB9\u3002TS \u7C7B\u578B\uFF1A"),e("code",[t._v("string | TNode<{ value: CascaderValue<CascaderOption>; onClose: (index: number) => void; displayValue?: CascaderValue<CascaderOption>; selectedOptions: CascaderOption[] }>")]),t._v("\u3002"),e("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("\u901A\u7528\u7C7B\u578B\u5B9A\u4E49")])]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("valueMode")]),e("td",[t._v("String")]),e("td",[t._v("onlyLeaf")]),e("td",[t._v("\u9009\u4E2D\u503C\u6A21\u5F0F\u3002all \u8868\u793A\u7236\u8282\u70B9\u548C\u5B50\u8282\u70B9\u5168\u90E8\u4F1A\u51FA\u73B0\u5728\u9009\u4E2D\u503C\u91CC\u9762\uFF1BparentFirst \u8868\u793A\u5F53\u5B50\u8282\u70B9\u5168\u90E8\u9009\u4E2D\u65F6\uFF0C\u4EC5\u7236\u8282\u70B9\u5728\u9009\u4E2D\u503C\u91CC\u9762\uFF1BonlyLeaf \u8868\u793A\u65E0\u8BBA\u4EC0\u4E48\u60C5\u51B5\uFF0C\u9009\u4E2D\u503C\u4EC5\u5448\u73B0\u53F6\u5B50\u8282\u70B9\u3002\u53EF\u9009\u9879\uFF1AonlyLeaf/parentFirst/all")]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("valueType")]),e("td",[t._v("String")]),e("td",[t._v("single")]),e("td",[t._v("\u7528\u4E8E\u63A7\u5236\u9009\u4E2D\u503C\u7684\u7C7B\u578B\u3002single \u8868\u793A\u8F93\u5165\u8F93\u51FA\u503C\u4E3A \u53F6\u5B50\u7ED3\u70B9\u503C\uFF0C full \u8868\u793A\u8F93\u5165\u8F93\u51FA\u503C\u4E3A\u5168\u8DEF\u5F84\u3002\u53EF\u9009\u9879\uFF1Asingle/full")]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("onBlur")]),e("td",[t._v("Function")]),e("td"),e("td",[t._v("TS \u7C7B\u578B\uFF1A"),e("code",[t._v("(context: { value: CascaderValue<CascaderOption> } & SelectInputBlurContext ) => void")]),e("br"),t._v("\u5F53\u8F93\u5165\u6846\u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1")]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("onChange")]),e("td",[t._v("Function")]),e("td"),e("td",[t._v("TS \u7C7B\u578B\uFF1A"),e("code",[t._v("(value: CascaderValue<CascaderOption>, context: CascaderChangeContext<CascaderOption>) => void")]),e("br"),t._v("\u9009\u4E2D\u503C\u53D1\u751F\u53D8\u5316\u65F6\u89E6\u53D1\u3002TreeNodeModel \u4ECE\u6811\u7EC4\u4EF6\u4E2D\u5BFC\u51FA\u3002"),e("code",[t._v("context.node")]),t._v(" \u8868\u793A\u89E6\u53D1\u4E8B\u4EF6\u7684\u8282\u70B9\uFF0C"),e("code",[t._v("context.source")]),t._v(" \u8868\u793A\u89E6\u53D1\u4E8B\u4EF6\u7684\u6765\u6E90\u3002"),e("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/tree/develop/src/cascader/type.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("\u8BE6\u7EC6\u7C7B\u578B\u5B9A\u4E49")]),t._v("\u3002"),e("br"),e("code",[t._v("interface CascaderChangeContext<CascaderOption> { node?: TreeNodeModel<CascaderOption>; source: CascaderChangeSource }")]),e("br"),e("br"),e("code",[t._v("import { TreeNodeModel } from '@Tree'")]),e("br"),e("br"),e("code",[t._v("type CascaderChangeSource = 'invalid-value' | 'check' | 'clear' | 'uncheck'")]),e("br")]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("onFocus")]),e("td",[t._v("Function")]),e("td"),e("td",[t._v("TS \u7C7B\u578B\uFF1A"),e("code",[t._v("(context: { value: CascaderValue<CascaderOption>; e: FocusEvent }) => void")]),e("br"),t._v("\u83B7\u5F97\u7126\u70B9\u65F6\u89E6\u53D1")]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("onPopupVisibleChange")]),e("td",[t._v("Function")]),e("td"),e("td",[t._v("TS \u7C7B\u578B\uFF1A"),e("code",[t._v("(visible: boolean, context: PopupVisibleChangeContext) => void")]),e("br"),t._v("\u4E0B\u62C9\u6846\u663E\u793A\u6216\u9690\u85CF\u65F6\u89E6\u53D1\u3002"),e("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/tree/develop/src/cascader/type.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("\u8BE6\u7EC6\u7C7B\u578B\u5B9A\u4E49")]),t._v("\u3002"),e("br"),e("code",[t._v("import { PopupVisibleChangeContext } from '@Popup'")]),e("br")]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("onRemove")]),e("td",[t._v("Function")]),e("td"),e("td",[t._v("TS \u7C7B\u578B\uFF1A"),e("code",[t._v("(context: RemoveContext<CascaderOption>) => void")]),e("br"),t._v("\u591A\u9009\u6A21\u5F0F\u4E0B\uFF0C\u9009\u4E2D\u6570\u636E\u88AB\u79FB\u9664\u65F6\u89E6\u53D1\u3002"),e("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/tree/develop/src/cascader/type.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("\u8BE6\u7EC6\u7C7B\u578B\u5B9A\u4E49")]),t._v("\u3002"),e("br"),e("code",[t._v("interface RemoveContext<T> { value: CascaderValue<T>; node: TreeNodeModel<T> }")]),e("br")]),e("td",[t._v("N")])])])]),e("h3",{attrs:{id:"cascader-events"}},[t._v("Cascader Events "),e("a",{staticClass:"header-anchor",attrs:{href:"#cascader-events"}})]),e("table",[e("thead",[e("tr",[e("th",[t._v("\u540D\u79F0")]),e("th",[t._v("\u53C2\u6570")]),e("th",[t._v("\u63CF\u8FF0")])])]),e("tbody",[e("tr",[e("td",[t._v("blur")]),e("td",[e("code",[t._v("(context: { value: CascaderValue<CascaderOption> } & SelectInputBlurContext )")])]),e("td",[t._v("\u5F53\u8F93\u5165\u6846\u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1")])]),e("tr",[e("td",[t._v("change")]),e("td",[e("code",[t._v("(value: CascaderValue<CascaderOption>, context: CascaderChangeContext<CascaderOption>)")])]),e("td",[t._v("\u9009\u4E2D\u503C\u53D1\u751F\u53D8\u5316\u65F6\u89E6\u53D1\u3002TreeNodeModel \u4ECE\u6811\u7EC4\u4EF6\u4E2D\u5BFC\u51FA\u3002"),e("code",[t._v("context.node")]),t._v(" \u8868\u793A\u89E6\u53D1\u4E8B\u4EF6\u7684\u8282\u70B9\uFF0C"),e("code",[t._v("context.source")]),t._v(" \u8868\u793A\u89E6\u53D1\u4E8B\u4EF6\u7684\u6765\u6E90\u3002"),e("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/tree/develop/src/cascader/type.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("\u8BE6\u7EC6\u7C7B\u578B\u5B9A\u4E49")]),t._v("\u3002"),e("br"),e("code",[t._v("interface CascaderChangeContext<CascaderOption> { node?: TreeNodeModel<CascaderOption>; source: CascaderChangeSource }")]),e("br"),e("br"),e("code",[t._v("import { TreeNodeModel } from '@Tree'")]),e("br"),e("br"),e("code",[t._v("type CascaderChangeSource = 'invalid-value' | 'check' | 'clear' | 'uncheck'")]),e("br")])]),e("tr",[e("td",[t._v("focus")]),e("td",[e("code",[t._v("(context: { value: CascaderValue<CascaderOption>; e: FocusEvent })")])]),e("td",[t._v("\u83B7\u5F97\u7126\u70B9\u65F6\u89E6\u53D1")])]),e("tr",[e("td",[t._v("popup-visible-change")]),e("td",[e("code",[t._v("(visible: boolean, context: PopupVisibleChangeContext)")])]),e("td",[t._v("\u4E0B\u62C9\u6846\u663E\u793A\u6216\u9690\u85CF\u65F6\u89E6\u53D1\u3002"),e("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/tree/develop/src/cascader/type.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("\u8BE6\u7EC6\u7C7B\u578B\u5B9A\u4E49")]),t._v("\u3002"),e("br"),e("code",[t._v("import { PopupVisibleChangeContext } from '@Popup'")]),e("br")])]),e("tr",[e("td",[t._v("remove")]),e("td",[e("code",[t._v("(context: RemoveContext<CascaderOption>)")])]),e("td",[t._v("\u591A\u9009\u6A21\u5F0F\u4E0B\uFF0C\u9009\u4E2D\u6570\u636E\u88AB\u79FB\u9664\u65F6\u89E6\u53D1\u3002"),e("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/tree/develop/src/cascader/type.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("\u8BE6\u7EC6\u7C7B\u578B\u5B9A\u4E49")]),t._v("\u3002"),e("br"),e("code",[t._v("interface RemoveContext<T> { value: CascaderValue<T>; node: TreeNodeModel<T> }")]),e("br")])])])])]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.tab==="design",expression:"tab === 'design'"}],attrs:{name:"DESIGN"}},[e("nav",{staticClass:"tdesign-toc_container"},[e("ol",{staticClass:"tdesign-toc_list"},[e("li",{staticClass:"tdesign-toc_list_item"},[e("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u4F55\u65F6\u4F7F\u7528"}},[t._v("\u4F55\u65F6\u4F7F\u7528")])]),e("li",{staticClass:"tdesign-toc_list_item"},[e("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u4E0E\u9875\u9762\u5E03\u5C40\u76F8\u5173"}},[t._v("\u4E0E\u9875\u9762\u5E03\u5C40\u76F8\u5173")]),e("ol",{staticClass:"tdesign-toc_list"})]),e("li",{staticClass:"tdesign-toc_list_item"},[e("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u7EC4\u4EF6\u642D\u914D\u4F7F\u7528"}},[t._v("\u7EC4\u4EF6\u642D\u914D\u4F7F\u7528")]),e("ol",{staticClass:"tdesign-toc_list"})]),e("li",{staticClass:"tdesign-toc_list_item"},[e("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u5E38\u89C1\u7528\u6CD5"}},[t._v("\u5E38\u89C1\u7528\u6CD5")]),e("ol",{staticClass:"tdesign-toc_list"})]),e("li",{staticClass:"tdesign-toc_list_item"},[e("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u63A8\u8350-\u614E\u7528\u793A\u4F8B"}},[t._v("\u63A8\u8350/\u614E\u7528\u793A\u4F8B")]),e("ol",{staticClass:"tdesign-toc_list"})]),e("li",{staticClass:"tdesign-toc_list_item"},[e("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u76F8\u4F3C\u7EC4\u4EF6"}},[t._v("\u76F8\u4F3C\u7EC4\u4EF6")])])])]),e("h3",{attrs:{id:"\u4F55\u65F6\u4F7F\u7528"}},[t._v("\u4F55\u65F6\u4F7F\u7528 "),e("a",{staticClass:"header-anchor",attrs:{href:"#\u4F55\u65F6\u4F7F\u7528"}})]),e("p",[t._v("\u5F53\u6570\u636E\u96C6\u5408\u8F83\u5927\uFF0C\u4E14\u5B50\u96C6\u5408\u6570\u636E\u95F4\u6709\u7ED3\u6784\u6027\u5173\u8054\uFF0C\u9700\u8981\u591A\u7EA7\u5206\u7C7B\u4EE5\u4FBF\u7528\u6237\u9009\u62E9\u65F6\uFF1B")]),e("p",[t._v("\u5F53\u6570\u636E\u4FE1\u606F\u6709\u660E\u786E\u7684\u5C42\u7EA7\u7ED3\u6784\uFF0C\u9700\u8981\u7528\u6237\u9010\u7EA7\u67E5\u770B\u3001\u9009\u62E9\u4F7F\u7528\u65F6\u3002")]),e("h3",{attrs:{id:"\u4E0E\u9875\u9762\u5E03\u5C40\u76F8\u5173"}},[t._v("\u4E0E\u9875\u9762\u5E03\u5C40\u76F8\u5173 "),e("a",{staticClass:"header-anchor",attrs:{href:"#\u4E0E\u9875\u9762\u5E03\u5C40\u76F8\u5173"}})]),e("h5",{attrs:{id:"\u5728\u9875\u9762\u4E2D\uFF0C\u7EA7\u8054\u9009\u62E9\u5668\u53EF\u653E\u7F6E\u4E8E\u9875\u9762\u9876\u90E8\uFF0C\u4E0E\u4E0B\u65B9\u6570\u636E\u7ED3\u679C\u4EA7\u751F\u8054\u52A8\u3002"}},[t._v("\u5728\u9875\u9762\u4E2D\uFF0C\u7EA7\u8054\u9009\u62E9\u5668\u53EF\u653E\u7F6E\u4E8E\u9875\u9762\u9876\u90E8\uFF0C\u4E0E\u4E0B\u65B9\u6570\u636E\u7ED3\u679C\u4EA7\u751F\u8054\u52A8\u3002 "),e("a",{staticClass:"header-anchor",attrs:{href:"#\u5728\u9875\u9762\u4E2D\uFF0C\u7EA7\u8054\u9009\u62E9\u5668\u53EF\u653E\u7F6E\u4E8E\u9875\u9762\u9876\u90E8\uFF0C\u4E0E\u4E0B\u65B9\u6570\u636E\u7ED3\u679C\u4EA7\u751F\u8054\u52A8\u3002"}})]),e("div",{staticClass:"legend"},[e("div",{staticClass:"item"},[e("img",{attrs:{src:"https://tdesign.gtimg.com/site/design/guide/cascader/cascader-1@2x.png"}}),e("em")])]),e("h5",{attrs:{id:"\u5728\u8868\u5355\u4E2D\uFF0C\u7EA7\u8054\u9009\u62E9\u5668\u53EF\u653E\u7F6E\u4E8E\u8868\u5355\u5185\u5BB9\u9700\u8981\u7684\u987A\u5E8F\u4E2D\uFF0C\u7528\u4E8E\u6570\u636E\u7684\u9009\u62E9\u548C\u586B\u5199\u3002"}},[t._v("\u5728\u8868\u5355\u4E2D\uFF0C\u7EA7\u8054\u9009\u62E9\u5668\u53EF\u653E\u7F6E\u4E8E\u8868\u5355\u5185\u5BB9\u9700\u8981\u7684\u987A\u5E8F\u4E2D\uFF0C\u7528\u4E8E\u6570\u636E\u7684\u9009\u62E9\u548C\u586B\u5199\u3002 "),e("a",{staticClass:"header-anchor",attrs:{href:"#\u5728\u8868\u5355\u4E2D\uFF0C\u7EA7\u8054\u9009\u62E9\u5668\u53EF\u653E\u7F6E\u4E8E\u8868\u5355\u5185\u5BB9\u9700\u8981\u7684\u987A\u5E8F\u4E2D\uFF0C\u7528\u4E8E\u6570\u636E\u7684\u9009\u62E9\u548C\u586B\u5199\u3002"}})]),e("div",{staticClass:"legend"},[e("div",{staticClass:"item"},[e("img",{attrs:{src:"https://tdesign.gtimg.com/site/design/guide/cascader/cascader-2@2x.png"}}),e("em")])]),e("h3",{attrs:{id:"\u7EC4\u4EF6\u642D\u914D\u4F7F\u7528"}},[t._v("\u7EC4\u4EF6\u642D\u914D\u4F7F\u7528 "),e("a",{staticClass:"header-anchor",attrs:{href:"#\u7EC4\u4EF6\u642D\u914D\u4F7F\u7528"}})]),e("h5",{attrs:{id:"\u4E0E\u641C\u7D22\u6846\u642D\u914D\u4F7F\u7528\uFF0C\u901A\u8FC7\u5173\u952E\u8BCD\u7B5B\u9009\u6570\u636E\u5185\u5BB9\uFF0C\u4FBF\u4E8E\u7528\u6237\u5728\u4E0D\u540C\u5C42\u7EA7\u4E2D\u5FEB\u901F\u627E\u5230\u6240\u9700\u4FE1\u606F\u3002"}},[t._v("\u4E0E\u641C\u7D22\u6846\u642D\u914D\u4F7F\u7528\uFF0C\u901A\u8FC7\u5173\u952E\u8BCD\u7B5B\u9009\u6570\u636E\u5185\u5BB9\uFF0C\u4FBF\u4E8E\u7528\u6237\u5728\u4E0D\u540C\u5C42\u7EA7\u4E2D\u5FEB\u901F\u627E\u5230\u6240\u9700\u4FE1\u606F\u3002 "),e("a",{staticClass:"header-anchor",attrs:{href:"#\u4E0E\u641C\u7D22\u6846\u642D\u914D\u4F7F\u7528\uFF0C\u901A\u8FC7\u5173\u952E\u8BCD\u7B5B\u9009\u6570\u636E\u5185\u5BB9\uFF0C\u4FBF\u4E8E\u7528\u6237\u5728\u4E0D\u540C\u5C42\u7EA7\u4E2D\u5FEB\u901F\u627E\u5230\u6240\u9700\u4FE1\u606F\u3002"}})]),e("div",{staticClass:"legend"},[e("div",{staticClass:"item"},[e("img",{attrs:{src:"https://tdesign.gtimg.com/site/design/guide/cascader/cascader-3@2x.png"}}),e("em")])]),e("h3",{attrs:{id:"\u5E38\u89C1\u7528\u6CD5"}},[t._v("\u5E38\u89C1\u7528\u6CD5 "),e("a",{staticClass:"header-anchor",attrs:{href:"#\u5E38\u89C1\u7528\u6CD5"}})]),e("h5",{attrs:{id:"\u4E00\u952E\u5168\u90E8\u6E05\u7A7A\u3002\u5728\u5168\u90E8\u9009\u9879\u672B\u5C3E\u4F7F\u7528\u5220\u9664\u6309\u94AE\uFF0C\u4FBF\u4E8E\u5FEB\u901F\u53D6\u6D88\u5DF2\u9009\u5BF9\u8C61\u3002"}},[t._v("\u4E00\u952E\u5168\u90E8\u6E05\u7A7A\u3002\u5728\u5168\u90E8\u9009\u9879\u672B\u5C3E\u4F7F\u7528\u5220\u9664\u6309\u94AE\uFF0C\u4FBF\u4E8E\u5FEB\u901F\u53D6\u6D88\u5DF2\u9009\u5BF9\u8C61\u3002 "),e("a",{staticClass:"header-anchor",attrs:{href:"#\u4E00\u952E\u5168\u90E8\u6E05\u7A7A\u3002\u5728\u5168\u90E8\u9009\u9879\u672B\u5C3E\u4F7F\u7528\u5220\u9664\u6309\u94AE\uFF0C\u4FBF\u4E8E\u5FEB\u901F\u53D6\u6D88\u5DF2\u9009\u5BF9\u8C61\u3002"}})]),e("div",{staticClass:"legend"},[e("div",{staticClass:"item"},[e("img",{attrs:{src:"https://tdesign.gtimg.com/site/design/guide/cascader/cascader-4@2x.png"}}),e("em")]),e("div",{staticClass:"item"})]),e("hr"),e("h5",{attrs:{id:"\u591A\u6B21\u90E8\u5206\u6E05\u7A7A\u3002\u5728\u6BCF\u4E2A\u5DF2\u9009\u9009\u9879\u7684\u6807\u7B7E\u4E2D\u4F7F\u7528\u5220\u9664\u6309\u94AE\uFF0C\u53EF\u4EE5\u6309\u9700\u53D6\u6D88\u4E0D\u9700\u8981\u7684\u9009\u9879\uFF0C\u4E14\u88AB\u5220\u9664\u7684\u9009\u9879\u7684\u5B50\u9009\u9879\u540C\u65F6\u5220\u9664\u3002"}},[t._v("\u591A\u6B21\u90E8\u5206\u6E05\u7A7A\u3002\u5728\u6BCF\u4E2A\u5DF2\u9009\u9009\u9879\u7684\u6807\u7B7E\u4E2D\u4F7F\u7528\u5220\u9664\u6309\u94AE\uFF0C\u53EF\u4EE5\u6309\u9700\u53D6\u6D88\u4E0D\u9700\u8981\u7684\u9009\u9879\uFF0C\u4E14\u88AB\u5220\u9664\u7684\u9009\u9879\u7684\u5B50\u9009\u9879\u540C\u65F6\u5220\u9664\u3002 "),e("a",{staticClass:"header-anchor",attrs:{href:"#\u591A\u6B21\u90E8\u5206\u6E05\u7A7A\u3002\u5728\u6BCF\u4E2A\u5DF2\u9009\u9009\u9879\u7684\u6807\u7B7E\u4E2D\u4F7F\u7528\u5220\u9664\u6309\u94AE\uFF0C\u53EF\u4EE5\u6309\u9700\u53D6\u6D88\u4E0D\u9700\u8981\u7684\u9009\u9879\uFF0C\u4E14\u88AB\u5220\u9664\u7684\u9009\u9879\u7684\u5B50\u9009\u9879\u540C\u65F6\u5220\u9664\u3002"}})]),e("div",{staticClass:"legend"},[e("div",{staticClass:"item"},[e("img",{attrs:{src:"https://tdesign.gtimg.com/site/design/guide/cascader/cascader-5@2x.png"}}),e("em")])]),e("h3",{attrs:{id:"\u63A8\u8350-\u614E\u7528\u793A\u4F8B"}},[t._v("\u63A8\u8350/\u614E\u7528\u793A\u4F8B "),e("a",{staticClass:"header-anchor",attrs:{href:"#\u63A8\u8350-\u614E\u7528\u793A\u4F8B"}})]),e("h5",{attrs:{id:"\u7EA7\u8054\u9009\u62E9\u5668\u7684\u5C42\u7EA7\u4E0D\u5B9C\u8D85\u8FC7-4-\u5C42\uFF0C\u5C42\u7EA7\u8FC7\u591A\u65F6\u5E94\u8C03\u6574\u6570\u636E\u7ED3\u6784\u6216\u6539\u7528\u5176\u4ED6\u4EA4\u4E92\u65B9\u5F0F\u3002"}},[t._v("\u7EA7\u8054\u9009\u62E9\u5668\u7684\u5C42\u7EA7\u4E0D\u5B9C\u8D85\u8FC7 4 \u5C42\uFF0C\u5C42\u7EA7\u8FC7\u591A\u65F6\u5E94\u8C03\u6574\u6570\u636E\u7ED3\u6784\u6216\u6539\u7528\u5176\u4ED6\u4EA4\u4E92\u65B9\u5F0F\u3002 "),e("a",{staticClass:"header-anchor",attrs:{href:"#\u7EA7\u8054\u9009\u62E9\u5668\u7684\u5C42\u7EA7\u4E0D\u5B9C\u8D85\u8FC7-4-\u5C42\uFF0C\u5C42\u7EA7\u8FC7\u591A\u65F6\u5E94\u8C03\u6574\u6570\u636E\u7ED3\u6784\u6216\u6539\u7528\u5176\u4ED6\u4EA4\u4E92\u65B9\u5F0F\u3002"}})]),e("div",{staticClass:"legend"},[e("div",{staticClass:"item"},[e("img",{attrs:{src:"https://tdesign.gtimg.com/site/design/guide/cascader/cascader-6@2x.png"}}),e("img",{staticClass:"tag",attrs:{src:"https://tdesign.gtimg.com/site/doc/good.png"}})]),e("div",{staticClass:"item"},[e("img",{attrs:{src:"https://tdesign.gtimg.com/site/design/guide/cascader/cascader-7@2x.png"}}),e("img",{staticClass:"tag",attrs:{src:"https://tdesign.gtimg.com/site/doc/bad.png"}})])]),e("hr"),e("h5",{attrs:{id:"\u4E0B\u62C9\u83DC\u5355\u5C55\u5F00\u65F6\u9700\u8003\u8651\u6240\u5360\u9762\u79EF\uFF0C\u5E95\u5C42\u4FE1\u606F\u5C55\u5F00\u5230\u9875\u9762\u5916\u9020\u6210\u65E0\u6CD5\u70B9\u51FB\u3002"}},[t._v("\u4E0B\u62C9\u83DC\u5355\u5C55\u5F00\u65F6\u9700\u8003\u8651\u6240\u5360\u9762\u79EF\uFF0C\u5E95\u5C42\u4FE1\u606F\u5C55\u5F00\u5230\u9875\u9762\u5916\u9020\u6210\u65E0\u6CD5\u70B9\u51FB\u3002 "),e("a",{staticClass:"header-anchor",attrs:{href:"#\u4E0B\u62C9\u83DC\u5355\u5C55\u5F00\u65F6\u9700\u8003\u8651\u6240\u5360\u9762\u79EF\uFF0C\u5E95\u5C42\u4FE1\u606F\u5C55\u5F00\u5230\u9875\u9762\u5916\u9020\u6210\u65E0\u6CD5\u70B9\u51FB\u3002"}})]),e("div",{staticClass:"legend"},[e("div",{staticClass:"item"},[e("img",{attrs:{src:"https://tdesign.gtimg.com/site/design/guide/cascader/cascader-8@2x.png"}}),e("img",{staticClass:"tag",attrs:{src:"https://tdesign.gtimg.com/site/doc/good.png"}})]),e("div",{staticClass:"item"},[e("img",{attrs:{src:"https://tdesign.gtimg.com/site/design/guide/cascader/cascader-9@2x.png"}}),e("img",{staticClass:"tag",attrs:{src:"https://tdesign.gtimg.com/site/doc/bad.png"}})])]),e("hr"),e("h5",{attrs:{id:"\u5728\u591A\u5C42\u7EA7\u4E2D\uFF0C\u5404\u5C42\u7EA7\u9009\u9879\u7684\u5F52\u5C5E\u5173\u7CFB\u5E94\u5177\u5907\u903B\u8F91\u76F8\u5173\u6027\uFF0C\u6570\u636E\u96C6\u5408\u7531\u5927\u5230\u5C0F\uFF0C\u91C7\u53D6-3\u21922\u21921-\u7684\u7ED3\u6784\uFF0C\u907F\u514D\u5F52\u5C5E\u5173\u7CFB\u6DF7\u4E71\u3002"}},[t._v("\u5728\u591A\u5C42\u7EA7\u4E2D\uFF0C\u5404\u5C42\u7EA7\u9009\u9879\u7684\u5F52\u5C5E\u5173\u7CFB\u5E94\u5177\u5907\u903B\u8F91\u76F8\u5173\u6027\uFF0C\u6570\u636E\u96C6\u5408\u7531\u5927\u5230\u5C0F\uFF0C\u91C7\u53D6 3\u21922\u21921 \u7684\u7ED3\u6784\uFF0C\u907F\u514D\u5F52\u5C5E\u5173\u7CFB\u6DF7\u4E71\u3002 "),e("a",{staticClass:"header-anchor",attrs:{href:"#\u5728\u591A\u5C42\u7EA7\u4E2D\uFF0C\u5404\u5C42\u7EA7\u9009\u9879\u7684\u5F52\u5C5E\u5173\u7CFB\u5E94\u5177\u5907\u903B\u8F91\u76F8\u5173\u6027\uFF0C\u6570\u636E\u96C6\u5408\u7531\u5927\u5230\u5C0F\uFF0C\u91C7\u53D6-3\u21922\u21921-\u7684\u7ED3\u6784\uFF0C\u907F\u514D\u5F52\u5C5E\u5173\u7CFB\u6DF7\u4E71\u3002"}})]),e("div",{staticClass:"legend"},[e("div",{staticClass:"item"},[e("img",{attrs:{src:"https://tdesign.gtimg.com/site/design/guide/cascader/cascader-10@2x.png"}}),e("img",{staticClass:"tag",attrs:{src:"https://tdesign.gtimg.com/site/doc/good.png"}})]),e("div",{staticClass:"item"},[e("img",{attrs:{src:"https://tdesign.gtimg.com/site/design/guide/cascader/cascader-11@2x.png"}}),e("img",{staticClass:"tag",attrs:{src:"https://tdesign.gtimg.com/site/doc/bad.png"}})])]),e("h3",{attrs:{id:"\u76F8\u4F3C\u7EC4\u4EF6"}},[t._v("\u76F8\u4F3C\u7EC4\u4EF6 "),e("a",{staticClass:"header-anchor",attrs:{href:"#\u76F8\u4F3C\u7EC4\u4EF6"}})]),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("\u7EC4\u4EF6\u540D")]),e("th",{staticStyle:{"text-align":"left"}},[t._v("\u4F55\u65F6\u4F7F\u7528")])])]),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("a",{attrs:{href:"./cascader"}},[t._v("\u7EA7\u8054\u9009\u62E9\u5668")])]),e("td",{staticStyle:{"text-align":"left"}},[t._v("\u5F53\u6570\u636E\u96C6\u5408\u8F83\u5927\uFF0C\u7528\u6237\u9700\u8981\u4ECE\u6709\u6E05\u6670\u5C42\u7EA7\u7ED3\u6784\u7684\u6570\u636E\u96C6\u5408\u4E2D\u8FDB\u884C\u9009\u62E9\u65F6\u3002")])]),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("a",{attrs:{href:"./transfer"}},[t._v("\u7A7F\u68AD\u6846")])]),e("td",{staticStyle:{"text-align":"left"}},[t._v("\u4E00\u7EC4\u6570\u636E\u8FDB\u884C\u4E24\u79CD\u72B6\u6001\u7684\u5206\u7C7B\u65F6\uFF1B\u603B\u7C7B\u548C\u5B50\u7C7B\u7684\u9009\u9879\u7B5B\u9009\u65F6\u3002")])]),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("a",{attrs:{href:"./tree"}},[t._v("\u6811")])]),e("td",{staticStyle:{"text-align":"left"}},[t._v("\u7528\u4E8E\u627F\u8F7D\u6709\u7236\u5B50\u5173\u7CFB\u7684\u7ED3\u6784\u5316\u5185\u5BB9\uFF0C\u63D0\u4F9B\u5185\u5BB9\u5C42\u7EA7\u7684\u5C55\u793A\u3002")])])])])]),e("div",{staticStyle:{"margin-top":"48px"}},[e("td-doc-history",{key:t.lastUpdated,attrs:{time:t.lastUpdated}})],1),e("td-doc-footer",{attrs:{slot:"doc-footer"},slot:"doc-footer"})],1)},ce=[];o._withStripped=!0;const me={components:{Usage:T,Demoexamplebase:i,Demoexamplemultiple:r,Demoexamplecollapsed:l,Demoexamplesize:c,Demoexamplefilterable:m,Demoexampledisabled:p,Demoexampleshowalllevels:v,Demoexamplecheckstrictly:_,Demoexamplevaluetype:g,Demoexamplevaluemode:u,Demoexamplecustomoptions:D,Demoexamplevaluedisplay:A,Demoexampletrigger:C,Demoexampleellipsis:h,Demoexamplemax:b,Demoexamplekeys:x,Demoexampleload:f,Demoexamplepanel:y},data(){return{DemoexamplebaseCode:P,DemoexamplebaseCompositionCode:k,DemoexamplemultipleCode:I,DemoexamplemultipleCompositionCode:S,DemoexamplecollapsedCode:O,DemoexamplecollapsedCompositionCode:N,DemoexamplesizeCode:w,DemoexamplesizeCompositionCode:z,DemoexamplefilterableCode:V,DemoexamplefilterableCompositionCode:F,DemoexampledisabledCode:R,DemoexampledisabledCompositionCode:j,DemoexampleshowalllevelsCode:B,DemoexampleshowalllevelsCompositionCode:M,DemoexamplecheckstrictlyCode:E,DemoexamplecheckstrictlyCompositionCode:U,DemoexamplevaluetypeCode:$,DemoexamplevaluetypeCompositionCode:q,DemoexamplevaluemodeCode:L,DemoexamplevaluemodeCompositionCode:H,DemoexamplecustomoptionsCode:de,DemoexamplecustomoptionsCompositionCode:ie,DemoexamplevaluedisplayCode:re,DemoexamplevaluedisplayCompositionCode:le,DemoexampletriggerCode:K,DemoexampletriggerCompositionCode:G,DemoexampleellipsisCode:W,DemoexampleellipsisCompositionCode:J,DemoexamplemaxCode:Q,DemoexamplemaxCompositionCode:X,DemoexamplekeysCode:Y,DemoexamplekeysCompositionCode:Z,DemoexampleloadCode:ee,DemoexampleloadCompositionCode:te,DemoexamplepanelCode:ae,DemoexamplepanelCompositionCode:se}},computed:{lastUpdated(){return this.tab==="design"?1739008828e3:1740128904e3},tab:{get(){return this.$route.query.tab||"demo"},set(t){this.$route.query.tab!==t&&this.$router.push({query:{tab:t}})}}},mounted(){const{tdDocContent:t,tdDocHeader:a,tdDocTabs:e}=this.$refs;a&&(a.docInfo={title:"Cascader \u7EA7\u8054\u9009\u62E9\u5668",desc:"\u7EA7\u8054\u9009\u62E9\u5668\u9002\u7528\u4E8E\u6709\u6E05\u6670\u5C42\u7EA7\u7ED3\u6784\u7684\u6570\u636E\u96C6\u5408\uFF0C\u7528\u6237\u53EF\u4EE5\u901A\u8FC7\u9010\u7EA7\u67E5\u770B\u5E76\u9009\u62E9\u3002\u4E00\u822C\u800C\u8A00\uFF0C\u7EA7\u8054\u9009\u62E9\u5668\u5305\u62EC\uFF1A\u9009\u62E9\u5668\u548C\u7EA7\u8054\u3002"}),document.title="Cascader \u7EA7\u8054\u9009\u62E9\u5668 | TDesign",e&&(e.tabs=[{tab:"demo",name:"\u793A\u4F8B"},{tab:"api",name:"API"},{tab:"design",name:"\u6307\u5357"}],e.onchange=({detail:d})=>this.tab=d),oe.highlightAll(),this.$emit("loaded",()=>{t.pageStatus="show"})}},s={};var n=ne(me,o,ce,!1,pe,null,null,null);function pe(t){for(let a in s)this[a]=s[a]}n.options.__file="../src/cascader/cascader.md";var he=function(){return n.exports}();export{he as default};
