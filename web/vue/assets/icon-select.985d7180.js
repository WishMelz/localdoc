var n=`<template>
  <t-space direction="vertical">
    <t-space break-line style="color: var(--td-brand-color)">
      <letters-t-icon @click="onIconClick" />
      <letters-d-icon />
      <letters-e-icon />
      <letters-s-icon />
      <letters-i-icon />
      <letters-g-icon />
      <letters-n-icon />
    </t-space>
    <t-space break-line>
      <component-checkbox-icon />
      <component-breadcrumb-icon />
      <component-input-icon />
      <component-switch-icon />
      <component-dropdown-icon />
      <component-radio-icon />
      <component-steps-icon />
    </t-space>
  </t-space>
</template>
<script>
import {
  LettersTIcon,
  LettersDIcon,
  LettersSIcon,
  LettersEIcon,
  LettersIIcon,
  LettersNIcon,
  LettersGIcon,
  ComponentCheckboxIcon,
  ComponentInputIcon,
  ComponentSwitchIcon,
  ComponentBreadcrumbIcon,
  ComponentDropdownIcon,
  ComponentRadioIcon,
  ComponentStepsIcon,
} from 'tdesign-icons-vue';

export default {
  components: {
    LettersTIcon,
    LettersDIcon,
    LettersSIcon,
    LettersEIcon,
    LettersIIcon,
    LettersNIcon,
    LettersGIcon,
    ComponentCheckboxIcon,
    ComponentInputIcon,
    ComponentSwitchIcon,
    ComponentBreadcrumbIcon,
    ComponentDropdownIcon,
    ComponentRadioIcon,
    ComponentStepsIcon,
  },
  methods: {
    onIconClick() {
      console.log('icon was clicked.');
    },
  },
};
<\/script>
`,e=`<template>
  <t-space direction="vertical">
    <t-space break-line style="color: var(--td-brand-color)">
      <letters-t-icon @click="onIconClick" />
      <letters-d-icon />
      <letters-e-icon />
      <letters-s-icon />
      <letters-i-icon />
      <letters-g-icon />
      <letters-n-icon />
    </t-space>
    <t-space break-line>
      <component-checkbox-icon />
      <component-breadcrumb-icon />
      <component-input-icon />
      <component-switch-icon />
      <component-dropdown-icon />
      <component-radio-icon />
      <component-steps-icon />
    </t-space>
  </t-space>
</template>
<script setup>
import {
  LettersTIcon,
  LettersDIcon,
  LettersSIcon,
  LettersEIcon,
  LettersIIcon,
  LettersNIcon,
  LettersGIcon,
  ComponentCheckboxIcon,
  ComponentInputIcon,
  ComponentSwitchIcon,
  ComponentBreadcrumbIcon,
  ComponentDropdownIcon,
  ComponentRadioIcon,
  ComponentStepsIcon,
} from 'tdesign-icons-vue';

const onIconClick = () => {
  console.log('icon was clicked.');
};
<\/script>
`,o=`<template>
  <t-space direction="vertical">
    <t-space break-line>
      <p>How do you feel today?</p>
      <icon name="sneer" @click="onIconClose" />
      <icon name="unhappy" />
      <icon name="excited" />
      <icon name="surprised" />
      <icon name="giggle" />
    </t-space>
    <t-space break-line align="center">
      <p>What's your favourite food?</p>
      <icon name="tangerinr" color="orange" />
      <icon name="bamboo-shoot" color="green" />
      <icon name="apple" color="red" />
      <icon name="milk" color="#0052D9" />
      <icon name="peach" color="pink" />
    </t-space>
    <t-space break-line>
      <p>How much icons does TDesign Icon includes?</p>
      <icon name="numbers-1" style="color: var(--td-brand-color-5)" />
      <icon name="numbers-2" style="color: var(--td-brand-color-6)" />
      <icon name="numbers-0" style="color: var(--td-brand-color-7)" />
      <icon name="numbers-3" style="color: var(--td-brand-color-8)" />
    </t-space>
  </t-space>
</template>
<script>
import { Icon } from 'tdesign-icons-vue';

export default {
  components: {
    Icon,
  },
  methods: {
    onIconClose() {
      console.log('icon was clicked.');
    },
  },
};
<\/script>
`,c=`<template>
  <t-space direction="vertical">
    <t-space break-line>
      <p>How do you feel today?</p>
      <icon name="sneer" @click="onIconClose" />
      <icon name="unhappy" />
      <icon name="excited" />
      <icon name="surprised" />
      <icon name="giggle" />
    </t-space>
    <t-space break-line align="center">
      <p>What's your favourite food?</p>
      <icon name="tangerinr" color="orange" />
      <icon name="bamboo-shoot" color="green" />
      <icon name="apple" color="red" />
      <icon name="milk" color="#0052D9" />
      <icon name="peach" color="pink" />
    </t-space>
    <t-space break-line>
      <p>How much icons does TDesign Icon includes?</p>
      <icon name="numbers-1" style="color: var(--td-brand-color-5)" />
      <icon name="numbers-2" style="color: var(--td-brand-color-6)" />
      <icon name="numbers-0" style="color: var(--td-brand-color-7)" />
      <icon name="numbers-3" style="color: var(--td-brand-color-8)" />
    </t-space>
  </t-space>
</template>
<script setup>
import { Icon } from 'tdesign-icons-vue';

const onIconClose = () => {
  console.log('icon was clicked.');
};
<\/script>
`,t=`<template>
  <t-space direction="vertical">
    <t-space break-line>
      <p>How do you feel today?</p>
      <icon-font name="sneer" />
      <icon-font name="unhappy" />
      <icon-font name="excited" />
      <icon-font name="surprised" />
      <icon-font name="giggle" />
    </t-space>
    <t-space break-line>
      <p>What's your favourite food?</p>
      <icon-font name="tangerinr" style="color: orange" />
      <icon-font name="bamboo-shoot" style="color: green" />
      <icon-font name="apple" style="color: red" />
      <icon-font name="milk" style="color: #0052d9" />
      <icon-font name="peach" style="color: pink" />
    </t-space>
    <t-space break-line>
      <p>How much icons does TDesign Icon includes?</p>
      <icon-font name="numbers-1" style="color: var(--td-brand-color-5)" />
      <icon-font name="numbers-2" style="color: var(--td-brand-color-6)" />
      <icon-font name="numbers-0" style="color: var(--td-brand-color-7)" />
      <icon-font name="numbers-3" style="color: var(--td-brand-color-8)" />
    </t-space>
  </t-space>
</template>
<script>
import { IconFont } from 'tdesign-icons-vue';

export default {
  components: {
    IconFont,
  },
};
<\/script>
`,i=`<template>
  <t-space direction="vertical">
    <t-space break-line>
      <p>How do you feel today?</p>
      <icon-font name="sneer" />
      <icon-font name="unhappy" />
      <icon-font name="excited" />
      <icon-font name="surprised" />
      <icon-font name="giggle" />
    </t-space>
    <t-space break-line>
      <p>What's your favourite food?</p>
      <icon-font name="tangerinr" style="color: orange" />
      <icon-font name="bamboo-shoot" style="color: green" />
      <icon-font name="apple" style="color: red" />
      <icon-font name="milk" style="color: #0052d9" />
      <icon-font name="peach" style="color: pink" />
    </t-space>
    <t-space break-line>
      <p>How much icons does TDesign Icon includes?</p>
      <icon-font name="numbers-1" style="color: var(--td-brand-color-5)" />
      <icon-font name="numbers-2" style="color: var(--td-brand-color-6)" />
      <icon-font name="numbers-0" style="color: var(--td-brand-color-7)" />
      <icon-font name="numbers-3" style="color: var(--td-brand-color-8)" />
    </t-space>
  </t-space>
</template>
<script setup>
import { IconFont } from 'tdesign-icons-vue';
<\/script>
`,s=`<template>
  <t-space direction="vertical">
    <t-space break-line align="center">
      <icon name="cps-icon-home-sheep" :url="newSvgUrl" />
      <icon name="cps-icon-home-sheep" :url="newSvgUrl" size="medium" />
      <icon name="cps-icon-home-sheep" :url="newSvgUrl" size="large" />
      <icon name="cps-icon-home-sheep" :url="newSvgUrl" size="25px" />
      <icon name="cps-icon-home-sheep" :url="newSvgUrl" size="2em" />
    </t-space>
    <t-space break-line align="center">
      <icon name="cps-icon-home-sheep" :url="newSvgUrl" style="color: red" />
      <icon name="cps-icon-home-sheep" :url="newSvgUrl" style="color: green" />
      <icon name="cps-icon-home-sheep" :url="newSvgUrl" style="color: orange" />
      <!-- \u5F15\u5165\u65B0 Icon \u4E4B\u540E\uFF0C\u5185\u7F6E Icon \u4F9D\u65E7\u6709\u6548\u3002name \u4F20\u5165\u56FE\u6807\u540D\u79F0\u5168\u79F0\u3002 -->
      <icon name="t-icon-home" :url="newSvgUrl" />
    </t-space>
  </t-space>
</template>

<script>
import { Icon } from 'tdesign-icons-vue';

export default {
  components: {
    Icon,
  },
  data() {
    return {
      newSvgUrl: 'https://tdesign.gtimg.com/icon/default-demo/index.js',
    };
  },
};
<\/script>
`,r=`<template>
  <t-space direction="vertical">
    <t-space break-line align="center">
      <icon name="cps-icon-home-sheep" :url="newSvgUrl" />
      <icon name="cps-icon-home-sheep" :url="newSvgUrl" size="medium" />
      <icon name="cps-icon-home-sheep" :url="newSvgUrl" size="large" />
      <icon name="cps-icon-home-sheep" :url="newSvgUrl" size="25px" />
      <icon name="cps-icon-home-sheep" :url="newSvgUrl" size="2em" />
    </t-space>
    <t-space break-line align="center">
      <icon name="cps-icon-home-sheep" :url="newSvgUrl" style="color: red" />
      <icon name="cps-icon-home-sheep" :url="newSvgUrl" style="color: green" />
      <icon name="cps-icon-home-sheep" :url="newSvgUrl" style="color: orange" />
      <!-- \u5F15\u5165\u65B0 Icon \u4E4B\u540E\uFF0C\u5185\u7F6E Icon \u4F9D\u65E7\u6709\u6548\u3002name \u4F20\u5165\u56FE\u6807\u540D\u79F0\u5168\u79F0\u3002 -->
      <icon name="t-icon-home" :url="newSvgUrl" />
    </t-space>
  </t-space>
</template>

<script setup>
import { ref } from 'vue';
import { Icon } from 'tdesign-icons-vue';

const newSvgUrl = ref('https://tdesign.gtimg.com/icon/default-demo/index.js');
<\/script>
`,a=`<template>
  <t-space direction="vertical">
    <t-space break-line align="center">
      <icon-font name="cps-icon cps-icon-home-sheep" :url="newIconfontUrl" />
      <icon-font name="cps-icon cps-icon-home-sheep" :url="newIconfontUrl" size="medium" />
      <icon-font name="cps-icon cps-icon-home-sheep" :url="newIconfontUrl" size="large" />
      <icon-font name="cps-icon cps-icon-home-sheep" :url="newIconfontUrl" size="25px" />
      <icon-font name="cps-icon cps-icon-home-sheep" :url="newIconfontUrl" size="2em" />
    </t-space>
    <t-space break-line align="center">
      <icon-font name="cps-icon cps-icon-home-sheep" :url="newIconfontUrl" style="color: red" />
      <icon-font name="cps-icon cps-icon-home-sheep" :url="newIconfontUrl" style="color: green" />
      <icon-font name="cps-icon cps-icon-home-sheep" :url="newIconfontUrl" style="color: orange" />
      <!-- \u5F15\u5165\u65B0 Icon \u4E4B\u540E\uFF0C\u5185\u7F6E Icon \u4F9D\u65E7\u6709\u6548\u3002name \u4F20\u5165\u56FE\u6807\u540D\u79F0\u5168\u79F0\u3002 -->
      <icon-font name="t-icon-home" :url="newIconfontUrl" />
    </t-space>
    <br />
  </t-space>
</template>

<script>
import { IconFont } from 'tdesign-icons-vue';

export default {
  components: { IconFont },
  data() {
    return {
      newIconfontUrl: 'https://tdesign.gtimg.com/icon/default-demo/index.css',
    };
  },
};
<\/script>
`,p=`<template>
  <t-space direction="vertical">
    <t-space break-line align="center">
      <icon-font name="cps-icon cps-icon-home-sheep" :url="newIconfontUrl" />
      <icon-font name="cps-icon cps-icon-home-sheep" :url="newIconfontUrl" size="medium" />
      <icon-font name="cps-icon cps-icon-home-sheep" :url="newIconfontUrl" size="large" />
      <icon-font name="cps-icon cps-icon-home-sheep" :url="newIconfontUrl" size="25px" />
      <icon-font name="cps-icon cps-icon-home-sheep" :url="newIconfontUrl" size="2em" />
    </t-space>
    <t-space break-line align="center">
      <icon-font name="cps-icon cps-icon-home-sheep" :url="newIconfontUrl" style="color: red" />
      <icon-font name="cps-icon cps-icon-home-sheep" :url="newIconfontUrl" style="color: green" />
      <icon-font name="cps-icon cps-icon-home-sheep" :url="newIconfontUrl" style="color: orange" />
      <!-- \u5F15\u5165\u65B0 Icon \u4E4B\u540E\uFF0C\u5185\u7F6E Icon \u4F9D\u65E7\u6709\u6548\u3002name \u4F20\u5165\u56FE\u6807\u540D\u79F0\u5168\u79F0\u3002 -->
      <icon-font name="t-icon-home" :url="newIconfontUrl" />
    </t-space>
    <br />
  </t-space>
</template>

<script setup>
import { ref } from 'vue';
import { IconFont } from 'tdesign-icons-vue';

const newIconfontUrl = ref('https://tdesign.gtimg.com/icon/default-demo/index.css');
<\/script>
`,l=`<template>
  <t-select
    v-model="value"
    placeholder="\u8BF7\u9009\u62E9"
    :style="{ width: '400px' }"
    :popup-props="{ overlayStyle: { width: '400px' } }"
  >
    <t-option v-for="item in options" :value="item.stem" :key="item.stem" class="overlay-options">
      <div>
        <t-icon :name="item.stem" />
      </div>
    </t-option>
    <div slot="valueDisplay"><t-icon :name="value" :style="{ marginRight: '8px' }" />{{ value }}</div>
  </t-select>
</template>

<script>
import { manifest } from 'tdesign-icons-vue'; // \u83B7\u53D6\u5168\u90E8\u56FE\u6807\u7684\u5217\u8868

export default {
  data() {
    return {
      options: manifest,
      value: 'edit-1',
    };
  },
};
<\/script>

<style>
.overlay-options {
  display: inline-block;
  font-size: 20px;
}
</style>
`,m=`<template>
  <t-select
    v-model="value"
    placeholder="\u8BF7\u9009\u62E9"
    :style="{ width: '400px' }"
    :popup-props="{ overlayStyle: { width: '400px' } }"
  >
    <t-option v-for="item in options" :value="item.stem" :key="item.stem" class="overlay-options">
      <div>
        <t-icon :name="item.stem" />
      </div>
    </t-option>
    <div slot="valueDisplay"><t-icon :name="value" :style="{ marginRight: '8px' }" />{{ value }}</div>
  </t-select>
</template>

<script setup>
import { ref } from 'vue';
import { manifest } from 'tdesign-icons-vue';
// \u83B7\u53D6\u5168\u90E8\u56FE\u6807\u7684\u5217\u8868
const options = ref(manifest);
const value = ref('edit-1');
<\/script>

<style>
.overlay-options {
  display: inline-block;
  font-size: 20px;
}
</style>
`;export{n as D,e as a,o as b,c,t as d,i as e,s as f,r as g,a as h,p as i,l as j,m as k};
