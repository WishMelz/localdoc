import{Y as s,n as d}from"./index.663c003f.js";var C=`<template>
  <t-space direction="vertical">
    <t-space>
      <a href="https://www.tencent.com/zh-cn" target="_blank">
        <t-tag>\u8D85\u94FE\u63A5</t-tag>
      </a>
    </t-space>
    <t-space>
      <t-tag @click="onClick">\u7070\u6807\u7B7E</t-tag>
      <t-tag theme="primary">\u6807\u7B7E\u4E00</t-tag>
      <t-tag theme="success">\u6807\u7B7E\u4E8C</t-tag>
      <t-tag theme="warning">\u6807\u7B7E\u4E09</t-tag>
      <t-tag theme="danger">\u6807\u7B7E\u56DB</t-tag>
    </t-space>
    <t-space>
      <t-tag variant="light">\u7070\u6807\u7B7E</t-tag>
      <t-tag theme="primary" variant="light">\u6807\u7B7E\u4E00</t-tag>
      <t-tag theme="success" variant="light">\u6807\u7B7E\u4E8C</t-tag>
      <t-tag theme="warning" variant="light">\u6807\u7B7E\u4E09</t-tag>
      <t-tag theme="danger" variant="light">\u6807\u7B7E\u56DB</t-tag>
    </t-space>
    <t-space>
      <t-tag variant="outline">\u7070\u6807\u7B7E</t-tag>
      <t-tag theme="primary" variant="outline">\u6807\u7B7E\u4E00</t-tag>
      <t-tag theme="success" variant="outline">\u6807\u7B7E\u4E8C</t-tag>
      <t-tag theme="warning" variant="outline">\u6807\u7B7E\u4E09</t-tag>
      <t-tag theme="danger" variant="outline">\u6807\u7B7E\u56DB</t-tag>
    </t-space>
    <t-space>
      <t-tag variant="light-outline">\u7070\u6807\u7B7E</t-tag>
      <t-tag theme="primary" variant="light-outline">\u6807\u7B7E\u4E00</t-tag>
      <t-tag theme="success" variant="light-outline">\u6807\u7B7E\u4E8C</t-tag>
      <t-tag theme="warning" variant="light-outline">\u6807\u7B7E\u4E09</t-tag>
      <t-tag theme="danger" variant="light-outline">\u6807\u7B7E\u56DB</t-tag>
    </t-space>
  </t-space>
</template>

<script>
export default {
  methods: {
    onClick({ e }) {
      e.stopPropagation();
    },
  },
};
<\/script>
`,_=`<template>
  <t-space direction="vertical">
    <t-space>
      <a href="https://www.tencent.com/zh-cn" target="_blank">
        <t-tag>\u8D85\u94FE\u63A5</t-tag>
      </a>
    </t-space>
    <t-space>
      <t-tag @click="onClick">\u7070\u6807\u7B7E</t-tag>
      <t-tag theme="primary">\u6807\u7B7E\u4E00</t-tag>
      <t-tag theme="success">\u6807\u7B7E\u4E8C</t-tag>
      <t-tag theme="warning">\u6807\u7B7E\u4E09</t-tag>
      <t-tag theme="danger">\u6807\u7B7E\u56DB</t-tag>
    </t-space>
    <t-space>
      <t-tag variant="light">\u7070\u6807\u7B7E</t-tag>
      <t-tag theme="primary" variant="light">\u6807\u7B7E\u4E00</t-tag>
      <t-tag theme="success" variant="light">\u6807\u7B7E\u4E8C</t-tag>
      <t-tag theme="warning" variant="light">\u6807\u7B7E\u4E09</t-tag>
      <t-tag theme="danger" variant="light">\u6807\u7B7E\u56DB</t-tag>
    </t-space>
    <t-space>
      <t-tag variant="outline">\u7070\u6807\u7B7E</t-tag>
      <t-tag theme="primary" variant="outline">\u6807\u7B7E\u4E00</t-tag>
      <t-tag theme="success" variant="outline">\u6807\u7B7E\u4E8C</t-tag>
      <t-tag theme="warning" variant="outline">\u6807\u7B7E\u4E09</t-tag>
      <t-tag theme="danger" variant="outline">\u6807\u7B7E\u56DB</t-tag>
    </t-space>
    <t-space>
      <t-tag variant="light-outline">\u7070\u6807\u7B7E</t-tag>
      <t-tag theme="primary" variant="light-outline">\u6807\u7B7E\u4E00</t-tag>
      <t-tag theme="success" variant="light-outline">\u6807\u7B7E\u4E8C</t-tag>
      <t-tag theme="warning" variant="light-outline">\u6807\u7B7E\u4E09</t-tag>
      <t-tag theme="danger" variant="light-outline">\u6807\u7B7E\u56DB</t-tag>
    </t-space>
  </t-space>
</template>

<script setup>
const onClick = ({ e }) => {
  e.stopPropagation();
};
<\/script>
`,b=`<template>
  <t-space>
    <t-tag :icon="renderDiscountIcon">\u51FD\u6570\u56FE\u6807</t-tag>

    <t-tag>
      <template #icon>
        <discount-icon />
      </template>
      \u63D2\u69FD\u56FE\u6807
    </t-tag>
  </t-space>
</template>

<script lang="jsx">
import { DiscountIcon } from 'tdesign-icons-vue';

export default {
  components: { DiscountIcon },
  methods: {
    renderDiscountIcon() {
      return <DiscountIcon />;
    },
  },
};
<\/script>
`,E=`<template>
  <t-space>
    <t-tag :icon="renderDiscountIcon">\u51FD\u6570\u56FE\u6807</t-tag>

    <t-tag>
      <template #icon>
        <discount-icon />
      </template>
      \u63D2\u69FD\u56FE\u6807
    </t-tag>
  </t-space>
</template>

<script setup lang="jsx">
import { DiscountIcon } from 'tdesign-icons-vue';

const renderDiscountIcon = () => <DiscountIcon />;
<\/script>
`,f=`<template>
  <t-space direction="vertical">
    <t-space>
      <t-tag theme="primary" closable>\u6807\u7B7E\u4E00</t-tag>
      <t-tag theme="success" closable>\u6807\u7B7E\u4E8C</t-tag>
      <t-tag theme="warning" closable>\u6807\u7B7E\u4E09</t-tag>
      <t-tag theme="danger" closable>\u6807\u7B7E\u56DB</t-tag>
    </t-space>
    <t-space>
      <t-tag theme="primary" variant="light" closable>\u6807\u7B7E\u4E00</t-tag>
      <t-tag theme="success" variant="light" closable>\u6807\u7B7E\u4E8C</t-tag>
      <t-tag theme="warning" variant="light" closable>\u6807\u7B7E\u4E09</t-tag>
      <t-tag theme="danger" variant="light" closable>\u6807\u7B7E\u56DB</t-tag>
    </t-space>
    <t-space>
      <t-tag variant="outline" theme="primary" closable>\u6807\u7B7E\u4E00</t-tag>
      <t-tag variant="outline" theme="success" closable>\u6807\u7B7E\u4E8C</t-tag>
      <t-tag variant="outline" theme="warning" closable>\u6807\u7B7E\u4E09</t-tag>
      <t-tag variant="outline" theme="danger" closable>\u6807\u7B7E\u56DB</t-tag>
    </t-space>
    <t-space>
      <t-tag
        v-for="(tag, index) in tags"
        :key="index"
        :theme="tag.type"
        :closable="tag.showClose"
        :icon="tag.icon"
        :disabled="!!tag.disabled"
        :maxWidth="tag.maxWidth"
        @click="handleClick"
        @close="handleClose(index)"
      >
        {{ tag.name }}
      </t-tag>
    </t-space>
    <div class="tag-block editable">
      <t-tag v-if="!inputVisible" @click="handleClickAdd">
        <add-icon />
        \u6DFB\u52A0\u6807\u7B7E
      </t-tag>
      <t-input v-else ref="input" size="small" style="width: 94px" @blur="handleInputEnter" @enter="handleInputEnter" />
    </div>
  </t-space>
</template>

<script lang="jsx">
import { AddIcon } from 'tdesign-icons-vue';
import Vue from 'vue';

export default {
  components: {
    AddIcon,
  },
  data() {
    return {
      inputVisible: false,
      tags: [
        {
          name: '\u53EF\u5220\u9664\u6807\u7B7E\u53EF\u5220\u9664\u6807\u7B7E',
          type: 'default',
          showClose: true,
          maxWidth: 100,
        },
        {
          name: '\u53EF\u5220\u9664\u6807\u7B7E\u53EF\u5220\u9664\u6807\u7B7E',
          type: 'default',
          icon: () => <discount-icon />,
          showClose: true,
          maxWidth: 100,
        },
        {
          name: '\u53EF\u5220\u9664\u6807\u7B7E',
          type: 'default',
          showClose: true,
          disabled: true,
        },
      ],
    };
  },
  methods: {
    handleClose(index) {
      this.tags.splice(index, 1);
    },
    handleClick(event) {
      console.log(event);
    },
    handleInputEnter(val) {
      if (val && !this.tags.some((item) => item.name === val)) {
        this.tags.push({ name: val, type: 'default', showClose: true });
      }
      this.inputVisible = false;
    },
    handleClickAdd() {
      this.inputVisible = true;
      Vue.nextTick(() => {
        this.$refs.input.focus();
      });
    },
  },
};
<\/script>

<style lang="less" scoped>
.tag-block {
  display: flex;
  margin-bottom: 30px;
  > * {
    margin-right: 30px;
  }
}

.editable .t-tag {
  cursor: pointer;
}
</style>
`,S=`<template>
  <t-space direction="vertical">
    <t-space>
      <t-tag theme="primary" closable>\u6807\u7B7E\u4E00</t-tag>
      <t-tag theme="success" closable>\u6807\u7B7E\u4E8C</t-tag>
      <t-tag theme="warning" closable>\u6807\u7B7E\u4E09</t-tag>
      <t-tag theme="danger" closable>\u6807\u7B7E\u56DB</t-tag>
    </t-space>
    <t-space>
      <t-tag theme="primary" variant="light" closable>\u6807\u7B7E\u4E00</t-tag>
      <t-tag theme="success" variant="light" closable>\u6807\u7B7E\u4E8C</t-tag>
      <t-tag theme="warning" variant="light" closable>\u6807\u7B7E\u4E09</t-tag>
      <t-tag theme="danger" variant="light" closable>\u6807\u7B7E\u56DB</t-tag>
    </t-space>
    <t-space>
      <t-tag variant="outline" theme="primary" closable>\u6807\u7B7E\u4E00</t-tag>
      <t-tag variant="outline" theme="success" closable>\u6807\u7B7E\u4E8C</t-tag>
      <t-tag variant="outline" theme="warning" closable>\u6807\u7B7E\u4E09</t-tag>
      <t-tag variant="outline" theme="danger" closable>\u6807\u7B7E\u56DB</t-tag>
    </t-space>
    <t-space>
      <t-tag
        v-for="(tag, index) in tags"
        :key="index"
        :theme="tag.type"
        :closable="tag.showClose"
        :icon="tag.icon"
        :disabled="!!tag.disabled"
        :maxWidth="tag.maxWidth"
        @click="handleClick"
        @close="handleClose(index)"
      >
        {{ tag.name }}
      </t-tag>
    </t-space>
    <div class="tag-block editable">
      <t-tag v-if="!inputVisible" @click="handleClickAdd">
        <add-icon />
        \u6DFB\u52A0\u6807\u7B7E
      </t-tag>
      <t-input v-else ref="input" size="small" style="width: 94px" @blur="handleInputEnter" @enter="handleInputEnter" />
    </div>
  </t-space>
</template>

<script setup lang="jsx">
import { ref, nextTick } from 'vue';
import { AddIcon } from 'tdesign-icons-vue';

const input = ref();
const inputVisible = ref(false);
const tags = ref([
  {
    name: '\u53EF\u5220\u9664\u6807\u7B7E\u53EF\u5220\u9664\u6807\u7B7E',
    type: 'default',
    showClose: true,
    maxWidth: 100,
  },
  {
    name: '\u53EF\u5220\u9664\u6807\u7B7E\u53EF\u5220\u9664\u6807\u7B7E',
    type: 'default',
    icon: () => <discount-icon />,
    showClose: true,
    maxWidth: 100,
  },
  {
    name: '\u53EF\u5220\u9664\u6807\u7B7E',
    type: 'default',
    showClose: true,
    disabled: true,
  },
]);
const handleClose = (index) => {
  tags.value.splice(index, 1);
};
const handleClick = (event) => {
  console.log(event);
};
const handleInputEnter = (val) => {
  if (val && !tags.value.some((item) => item.name === val)) {
    tags.value.push({
      name: val,
      type: 'default',
      showClose: true,
    });
  }
  inputVisible.value = false;
};
const handleClickAdd = () => {
  inputVisible.value = true;
  nextTick(() => {
    input.value.focus();
  });
};
<\/script>

<style lang="less" scoped>
.tag-block {
  display: flex;
  margin-bottom: 30px;
  > * {
    margin-right: 30px;
  }
}

.editable .t-tag {
  cursor: pointer;
}
</style>
`,x=`<template>
  <t-space direction="vertical">
    <t-space align="center">
      <label>StyleA</label>

      <t-check-tag v-model="checked1" style="margin-right: 32px">\u9009\u4E2D/\u672A\u9009\u6001</t-check-tag>

      <t-check-tag :checked="true">\u9009\u4E2D\u6001</t-check-tag>
      <t-check-tag :checked="false">\u672A\u9009\u6001</t-check-tag>
      <t-check-tag :checked="true" disabled>\u9009\u4E2D\u7981\u7528</t-check-tag>
      <t-check-tag :checked="false" disabled>\u672A\u9009\u7981\u7528</t-check-tag>
    </t-space>

    <t-space align="center">
      <label>StyleB</label>

      <t-check-tag v-model="checked2" :unchecked-props="STYLE_B_UNCHECKED_PROPS" style="margin-right: 32px"
      >\u9009\u4E2D/\u672A\u9009\u6001</t-check-tag
      >

      <t-check-tag :checked="true">\u9009\u4E2D\u6001</t-check-tag>
      <t-check-tag :checked="false" :unchecked-props="STYLE_B_UNCHECKED_PROPS">\u672A\u9009\u6001</t-check-tag>
      <t-check-tag :checked="true" disabled>\u9009\u4E2D\u7981\u7528</t-check-tag>
      <t-check-tag :checked="false" disabled :unchecked-props="STYLE_B_UNCHECKED_PROPS">\u672A\u9009\u7981\u7528</t-check-tag>
    </t-space>

    <t-space align="center">
      <label>StyleC</label>

      <t-check-tag
        v-model="checked3"
        :checked-props="STYLE_C_CHECKED_PROPS"
        :unchecked-props="STYLE_B_UNCHECKED_PROPS"
        style="margin-right: 32px"
      >Outline Tag</t-check-tag
      >

      <t-check-tag :checked="true" :checked-props="STYLE_C_CHECKED_PROPS">Checked</t-check-tag>
      <t-check-tag :checked="false" :unchecked-props="STYLE_B_UNCHECKED_PROPS">Unchecked</t-check-tag>
      <t-check-tag :checked="true" disabled :checked-props="STYLE_C_CHECKED_PROPS">Disabled</t-check-tag>
      <t-check-tag :checked="false" disabled :unchecked-props="STYLE_B_UNCHECKED_PROPS">Disabled</t-check-tag>
    </t-space>
  </t-space>
</template>

<script>
const STYLE_B_UNCHECKED_PROPS = {
  theme: 'default',
  variant: 'outline',
};

const STYLE_C_CHECKED_PROPS = {
  theme: 'primary',
  variant: 'outline',
};

export default {
  data() {
    return {
      checked1: false,
      checked2: false,
      checked3: false,
      STYLE_B_UNCHECKED_PROPS,
      STYLE_C_CHECKED_PROPS,
    };
  },
};
<\/script>
`,T=`<template>
  <t-space direction="vertical">
    <t-space align="center">
      <label>StyleA</label>

      <t-check-tag v-model="checked1" style="margin-right: 32px">\u9009\u4E2D/\u672A\u9009\u6001</t-check-tag>

      <t-check-tag :checked="true">\u9009\u4E2D\u6001</t-check-tag>
      <t-check-tag :checked="false">\u672A\u9009\u6001</t-check-tag>
      <t-check-tag :checked="true" disabled>\u9009\u4E2D\u7981\u7528</t-check-tag>
      <t-check-tag :checked="false" disabled>\u672A\u9009\u7981\u7528</t-check-tag>
    </t-space>

    <t-space align="center">
      <label>StyleB</label>

      <t-check-tag v-model="checked2" :unchecked-props="STYLE_B_UNCHECKED_PROPS" style="margin-right: 32px"
      >\u9009\u4E2D/\u672A\u9009\u6001</t-check-tag
      >

      <t-check-tag :checked="true">\u9009\u4E2D\u6001</t-check-tag>
      <t-check-tag :checked="false" :unchecked-props="STYLE_B_UNCHECKED_PROPS">\u672A\u9009\u6001</t-check-tag>
      <t-check-tag :checked="true" disabled>\u9009\u4E2D\u7981\u7528</t-check-tag>
      <t-check-tag :checked="false" disabled :unchecked-props="STYLE_B_UNCHECKED_PROPS">\u672A\u9009\u7981\u7528</t-check-tag>
    </t-space>

    <t-space align="center">
      <label>StyleC</label>

      <t-check-tag
        v-model="checked3"
        :checked-props="STYLE_C_CHECKED_PROPS"
        :unchecked-props="STYLE_B_UNCHECKED_PROPS"
        style="margin-right: 32px"
      >Outline Tag</t-check-tag
      >

      <t-check-tag :checked="true" :checked-props="STYLE_C_CHECKED_PROPS">Checked</t-check-tag>
      <t-check-tag :checked="false" :unchecked-props="STYLE_B_UNCHECKED_PROPS">Unchecked</t-check-tag>
      <t-check-tag :checked="true" disabled :checked-props="STYLE_C_CHECKED_PROPS">Disabled</t-check-tag>
      <t-check-tag :checked="false" disabled :unchecked-props="STYLE_B_UNCHECKED_PROPS">Disabled</t-check-tag>
    </t-space>
  </t-space>
</template>

<script setup>
import { ref } from 'vue';

const STYLE_B_UNCHECKED_PROPS = {
  theme: 'default',
  variant: 'outline',
};
const STYLE_C_CHECKED_PROPS = {
  theme: 'primary',
  variant: 'outline',
};
const checked1 = ref(false);
const checked2 = ref(false);
const checked3 = ref(false);
<\/script>
`,P=`<template>
  <t-space direction="vertical">
    <t-space align="center">
      <label>StyleA</label>
      <t-check-tag-group v-model="checkTagValue1" :options="options" />
    </t-space>

    <t-space align="center">
      <label>StyleB</label>
      <t-check-tag-group
        v-model="checkTagValue2"
        :options="options"
        :unchecked-props="STYLE_B_UNCHECKED_PROPS"
        multiple
      />
    </t-space>

    <t-space align="center">
      <label>StyleC</label>
      <t-check-tag-group
        v-model="checkTagValue3"
        :options="options"
        :checked-props="STYLE_C_CHECKED_PROPS"
        :unchecked-props="STYLE_B_UNCHECKED_PROPS"
        multiple
      />
    </t-space>

    <t-space align="center">
      <label>CustomContent</label>
      <t-check-tag-group
        v-model="checkTagValue4"
        :options="options2"
        :checked-props="STYLE_C_CHECKED_PROPS"
        :unchecked-props="STYLE_B_UNCHECKED_PROPS"
        multiple
      >
        <template #option="{ label, value, avatar }">
          <div>
            <img :src="avatar" class="avatar" />
            <span>{{ label }}({{ value }})</span>
          </div>
        </template>
      </t-check-tag-group>
    </t-space>
  </t-space>
</template>

<!-- \u5982\u679C\u662F TS \u9879\u76EE\uFF0C\u8BF7\u8BBE\u7F6E lang="tsx" -->
<script lang="jsx">
const AVATAR = 'https://tdesign.gtimg.com/site/avatar.jpg';
const STYLE_B_UNCHECKED_PROPS = {
  theme: 'default',
  variant: 'outline',
};

const STYLE_C_CHECKED_PROPS = {
  theme: 'primary',
  variant: 'outline',
};

export default {
  name: 'CheckTagGroupDemo',

  data() {
    return {
      checkTagValue1: [1],
      checkTagValue2: [2],
      checkTagValue3: [3],
      checkTagValue4: [4, 6],
      STYLE_B_UNCHECKED_PROPS,
      STYLE_C_CHECKED_PROPS,
      options: [
        { label: '\u6807\u7B7E1', value: 1 },
        { label: '\u6807\u7B7E2', value: 2 },
        { label: () => <span>\u6807\u7B7E3</span>, value: 3 },
        { label: '\u6807\u7B7E4', value: 4 },
        { label: '\u6807\u7B7E5', value: '5' },
        { label: '\u6807\u7B7E6', value: 6 },
      ],
      options2: [
        { label: 'TAG_A', value: 1, avatar: AVATAR },
        { label: 'TAG_B', value: 2, avatar: AVATAR },
        { label: 'TAG_C', value: 3, avatar: AVATAR },
        { label: 'TAG_D', value: 4, avatar: AVATAR },
        { label: 'TAG_E', value: '5', avatar: AVATAR },
        { label: 'TAG_F', value: 6, avatar: AVATAR },
      ],
    };
  },
};
<\/script>

<style lang="less" scoped>
.avatar {
  width: 16px;
  height: 16px;
  border-radius: 2px;
  vertical-align: -4px;
  margin-right: 4px;
}
</style>
`,y=`<template>
  <t-space direction="vertical">
    <t-space align="center">
      <label>StyleA</label>
      <t-check-tag-group v-model="checkTagValue1" :options="options" />
    </t-space>

    <t-space align="center">
      <label>StyleB</label>
      <t-check-tag-group
        v-model="checkTagValue2"
        :options="options"
        :unchecked-props="STYLE_B_UNCHECKED_PROPS"
        multiple
      />
    </t-space>

    <t-space align="center">
      <label>StyleC</label>
      <t-check-tag-group
        v-model="checkTagValue3"
        :options="options"
        :checked-props="STYLE_C_CHECKED_PROPS"
        :unchecked-props="STYLE_B_UNCHECKED_PROPS"
        multiple
      />
    </t-space>

    <t-space align="center">
      <label>CustomContent</label>
      <t-check-tag-group
        v-model="checkTagValue4"
        :options="options2"
        :checked-props="STYLE_C_CHECKED_PROPS"
        :unchecked-props="STYLE_B_UNCHECKED_PROPS"
        multiple
      >
        <template #option="{ label, value, avatar }">
          <div>
            <img :src="avatar" class="avatar" />
            <span>{{ label }}({{ value }})</span>
          </div>
        </template>
      </t-check-tag-group>
    </t-space>
  </t-space>
</template>

<script setup lang="jsx">
import { ref } from 'vue';

const AVATAR = 'https://tdesign.gtimg.com/site/avatar.jpg';
const STYLE_B_UNCHECKED_PROPS = {
  theme: 'default',
  variant: 'outline',
};
const STYLE_C_CHECKED_PROPS = {
  theme: 'primary',
  variant: 'outline',
};
const checkTagValue1 = ref([1]);
const checkTagValue2 = ref([2]);
const checkTagValue3 = ref([3]);
const checkTagValue4 = ref([4, 6]);
const options = ref([
  {
    label: '\u6807\u7B7E1',
    value: 1,
  },
  {
    label: '\u6807\u7B7E2',
    value: 2,
  },
  {
    label: () => <span>\u6807\u7B7E3</span>,
    value: 3,
  },
  {
    label: '\u6807\u7B7E4',
    value: 4,
  },
  {
    label: '\u6807\u7B7E5',
    value: '5',
  },
  {
    label: '\u6807\u7B7E6',
    value: 6,
  },
]);
const options2 = ref([
  {
    label: 'TAG_A',
    value: 1,
    avatar: AVATAR,
  },
  {
    label: 'TAG_B',
    value: 2,
    avatar: AVATAR,
  },
  {
    label: 'TAG_C',
    value: 3,
    avatar: AVATAR,
  },
  {
    label: 'TAG_D',
    value: 4,
    avatar: AVATAR,
  },
  {
    label: 'TAG_E',
    value: '5',
    avatar: AVATAR,
  },
  {
    label: 'TAG_F',
    value: 6,
    avatar: AVATAR,
  },
]);
<\/script>

<style lang="less" scoped>
.avatar {
  width: 16px;
  height: 16px;
  border-radius: 2px;
  vertical-align: -4px;
  margin-right: 4px;
}
</style>
`,D=`<template>
  <div>
    <t-tag max-width="150" title="\u9ED8\u8BA4\u8D85\u516B\u4E2A\u5B57\u8D85\u957F\u6587\u672C\u6807\u7B7E\u8D85\u957F\u7701\u7565\u6587\u672C\u6807\u7B7E"
    >\u9ED8\u8BA4\u8D85\u516B\u4E2A\u5B57\u8D85\u957F\u6587\u672C\u6807\u7B7E\u8D85\u957F\u7701\u7565\u6587\u672C\u6807\u7B7E</t-tag
    >
  </div>
</template>
`,A=`<template>
  <div>
    <t-tag max-width="150" title="\u9ED8\u8BA4\u8D85\u516B\u4E2A\u5B57\u8D85\u957F\u6587\u672C\u6807\u7B7E\u8D85\u957F\u7701\u7565\u6587\u672C\u6807\u7B7E"
    >\u9ED8\u8BA4\u8D85\u516B\u4E2A\u5B57\u8D85\u957F\u6587\u672C\u6807\u7B7E\u8D85\u957F\u7701\u7565\u6587\u672C\u6807\u7B7E</t-tag
    >
  </div>
</template>
`,R=`<template>
  <t-space size="30px">
    <t-tag size="small">\u5C0F\u578B\u6807\u7B7E</t-tag>
    <t-tag>\u9ED8\u8BA4\u6807\u7B7E</t-tag>
    <t-tag size="large">\u5927\u578B\u6807\u7B7E</t-tag>
  </t-space>
</template>
`,V=`<template>
  <t-space size="30px">
    <t-tag size="small">\u5C0F\u578B\u6807\u7B7E</t-tag>
    <t-tag>\u9ED8\u8BA4\u6807\u7B7E</t-tag>
    <t-tag size="large">\u5927\u578B\u6807\u7B7E</t-tag>
  </t-space>
</template>
`,L=`<template>
  <t-space direction="vertical">
    <t-space>
      <t-tag>\u6807\u7B7E\u4E00</t-tag>
      <t-tag theme="primary">\u6807\u7B7E\u4E00</t-tag>
    </t-space>
    <t-space>
      <t-tag shape="round">\u6807\u7B7E\u4E00</t-tag>
      <t-tag shape="round" theme="primary">\u6807\u7B7E\u4E00</t-tag>
    </t-space>
    <t-space>
      <t-tag shape="mark">\u6807\u7B7E\u4E00</t-tag>
      <t-tag shape="mark" theme="primary">\u6807\u7B7E\u4E00</t-tag>
    </t-space>
  </t-space>
</template>

<style lang="less" scoped>
.tag-demo {
  width: 500px;
  display: flex;
  margin-bottom: 15px;
  > * {
    margin-right: 30px;
  }
}
</style>
`,O=`<template>
  <t-space direction="vertical">
    <t-space>
      <t-tag>\u6807\u7B7E\u4E00</t-tag>
      <t-tag theme="primary">\u6807\u7B7E\u4E00</t-tag>
    </t-space>
    <t-space>
      <t-tag shape="round">\u6807\u7B7E\u4E00</t-tag>
      <t-tag shape="round" theme="primary">\u6807\u7B7E\u4E00</t-tag>
    </t-space>
    <t-space>
      <t-tag shape="mark">\u6807\u7B7E\u4E00</t-tag>
      <t-tag shape="mark" theme="primary">\u6807\u7B7E\u4E00</t-tag>
    </t-space>
  </t-space>
</template>

<style lang="less" scoped>
.tag-demo {
  width: 500px;
  display: flex;
  margin-bottom: 15px;
  > * {
    margin-right: 30px;
  }
}
</style>
`,w=`<template>
  <div>
    <p class="color-picker">
      <t-space align="center">
        <label>\u8C03\u6574\u989C\u8272\u67E5\u770B\u6548\u679C</label>
        <t-color-picker :color-modes="['monochrome']" v-model="color"></t-color-picker>
      </t-space>
    </p>
    <t-space direction="horizontal">
      <t-space>
        <t-tag theme="primary" :color="color">\u9ED8\u8BA4</t-tag>
      </t-space>
      <t-space>
        <t-tag :color="color" variant="light">\u6D45\u8272</t-tag>
      </t-space>
      <t-space>
        <t-tag :color="color" variant="outline">outline</t-tag>
      </t-space>
      <t-space>
        <t-tag :color="color" variant="light-outline">light-outline</t-tag>
      </t-space>
    </t-space>
  </div>
</template>
<script>
export default {
  data() {
    return {
      color: 'rgb(0, 82, 217)',
    };
  },
};
<\/script>

<style lang="less" scoped>
.color-picker {
  margin-bottom: 20px;
}
</style>
`,m=[{name:"closable",type:"Boolean",defaultValue:!1,options:[]},{name:"disabled",type:"Boolean",defaultValue:!1,options:[]},{name:"shape",type:"enum",defaultValue:"square",options:[{label:"square",value:"square"},{label:"round",value:"round"},{label:"mark",value:"mark"}]},{name:"size",type:"enum",defaultValue:"medium",options:[{label:"small",value:"small"},{label:"medium",value:"medium"},{label:"large",value:"large"}]},{name:"theme",type:"enum",defaultValue:"default",options:[{label:"default",value:"default"},{label:"primary",value:"primary"},{label:"warning",value:"warning"},{label:"danger",value:"danger"},{label:"success",value:"success"}]},{name:"variant",type:"enum",defaultValue:"dark",options:[{label:"dark",value:"dark"},{label:"light",value:"light"},{label:"outline",value:"outline"},{label:"light-outline",value:"light-outline"}]}];const o={};o.setup=(t,e)=>{const n=s(m),a=[{label:"tag",value:"tag"}],l={tag:'<t-tag v-bind="configProps">\u6807\u7B7E</t-tag>'},c=s(`<template>${l[a[0].value].trim()}</template>`);function p(h){c.value=`<template>${l[h].trim()}</template>`}return{configList:n,panelList:a,usageCode:c,onPanelChange:p}};var g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("base-usage",{attrs:{code:t.usageCode,"config-list":t.configList,"panel-list":t.panelList},on:{PanelChange:t.onPanelChange},scopedSlots:t._u([{key:"tag",fn:function(a){var l=a.configProps;return[n("t-tag",t._b({},"t-tag",l,!1),[t._v("\u6807\u7B7E")])]}}])})},u=[];g._withStripped=!0;const i={};var r=d(o,g,u,!1,v,null,null,null);function v(t){for(let e in i)this[e]=i[e]}r.options.__file="../src/tag/_usage/index.vue";var Y=function(){return r.exports}();export{C as D,Y as U,_ as a,b,E as c,f as d,S as e,x as f,T as g,P as h,y as i,D as j,A as k,R as l,V as m,L as n,O as o,w as p};
