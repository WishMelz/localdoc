import{Y as l,n as m}from"./index.663c003f.js";var y=`<template>
  <div>
    <t-drawer :visible.sync="visible" header="\u62BD\u5C49\u6807\u9898" :onConfirm="onClickConfirm" :closeBtn="true">
      <p>\u62BD\u5C49\u7684\u5185\u5BB9</p>
    </t-drawer>
    <t-button variant="outline" @click="handleClick">\u6253\u5F00\u62BD\u5C49</t-button>
  </div>
</template>

<script>
import { MessagePlugin as Message } from 'tdesign-vue';

export default {
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    handleClick() {
      this.visible = true;
    },
    onClickConfirm() {
      Message.info('\u6570\u636E\u4FDD\u5B58\u4E2D...', 1000);
      const timer = setTimeout(() => {
        clearTimeout(timer);
        this.visible = false;
        Message.info('\u6570\u636E\u4FDD\u5B58\u6210\u529F!');
      }, 1000);
    },
  },
};
<\/script>
<style scoped>
.t-button {
  margin-right: 20px;
}
</style>
`,w=`<template>
  <div>
    <t-drawer :visible.sync="visible" header="\u62BD\u5C49\u6807\u9898" :onConfirm="onClickConfirm" :closeBtn="true">
      <p>\u62BD\u5C49\u7684\u5185\u5BB9</p>
    </t-drawer>
    <t-button variant="outline" @click="handleClick">\u6253\u5F00\u62BD\u5C49</t-button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { MessagePlugin as Message } from 'tdesign-vue';

const visible = ref(false);
const handleClick = () => {
  visible.value = true;
};
const onClickConfirm = () => {
  Message.info('\u6570\u636E\u4FDD\u5B58\u4E2D...', 1000);
  const timer = setTimeout(() => {
    clearTimeout(timer);
    visible.value = false;
    Message.info('\u6570\u636E\u4FDD\u5B58\u6210\u529F!');
  }, 1000);
};
<\/script>
<style scoped>
.t-button {
  margin-right: 20px;
}
</style>
`,k=`<template>
  <div>
    <t-drawer :visible="visible" @close="handleClose" :onConfirm="handleClose" header="\u62BD\u5C49\u6807\u9898">
      <div class="t-drawer-demo-div">
        <span>\u6807\u7B7E A</span>
        <t-input />
      </div>
      <div class="t-drawer-demo-div">
        <span>\u6807\u7B7E B</span>
        <t-input />
      </div>
      <div class="t-drawer-demo-div">
        <span>\u6807\u7B7E C</span>
        <t-input />
      </div>
    </t-drawer>
    <t-button variant="outline" @click="handleClick">\u6253\u5F00\u62BD\u5C49</t-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    setVisible(state) {
      this.visible = state;
    },
    handleClick() {
      this.setVisible(true);
    },
    handleClose() {
      this.setVisible(false);
    },
  },
};
<\/script>
<style scoped>
.t-button {
  margin-right: 20px;
}
.t-drawer-demo-div {
  margin-bottom: 24px;
}
</style>
`,x=`<template>
  <div>
    <t-drawer :visible="visible" @close="handleClose" :onConfirm="handleClose" header="\u62BD\u5C49\u6807\u9898">
      <div class="t-drawer-demo-div">
        <span>\u6807\u7B7E A</span>
        <t-input />
      </div>
      <div class="t-drawer-demo-div">
        <span>\u6807\u7B7E B</span>
        <t-input />
      </div>
      <div class="t-drawer-demo-div">
        <span>\u6807\u7B7E C</span>
        <t-input />
      </div>
    </t-drawer>
    <t-button variant="outline" @click="handleClick">\u6253\u5F00\u62BD\u5C49</t-button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const visible = ref(false);
const setVisible = (state) => {
  visible.value = state;
};
const handleClick = () => {
  setVisible(true);
};
const handleClose = () => {
  setVisible(false);
};
<\/script>
<style scoped>
.t-button {
  margin-right: 20px;
}
.t-drawer-demo-div {
  margin-bottom: 24px;
}
</style>
`,V=`<template>
  <div>
    <t-drawer
      :visible="visible"
      :showOverlay="false"
      :onConfirm="handleClose"
      :preventScrollThrough="false"
      header="\u62BD\u5C49\u6807\u9898"
      @close="handleClose"
    >
      <p>\u62BD\u5C49\u7684\u5185\u5BB9</p>
    </t-drawer>

    <t-button variant="outline" @click="handleClick">\u6253\u5F00\u62BD\u5C49</t-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    setVisible(state) {
      this.visible = state;
    },
    handleClick() {
      this.setVisible(true);
    },
    handleClose() {
      this.setVisible(false);
    },
  },
};
<\/script>
`,_=`<template>
  <div>
    <t-drawer
      :visible="visible"
      :showOverlay="false"
      :onConfirm="handleClose"
      :preventScrollThrough="false"
      header="\u62BD\u5C49\u6807\u9898"
      @close="handleClose"
    >
      <p>\u62BD\u5C49\u7684\u5185\u5BB9</p>
    </t-drawer>

    <t-button variant="outline" @click="handleClick">\u6253\u5F00\u62BD\u5C49</t-button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const visible = ref(false);
const setVisible = (state) => {
  visible.value = state;
};
const handleClick = () => {
  setVisible(true);
};
const handleClose = () => {
  setVisible(false);
};
<\/script>
`,D=`<template>
  <t-space>
    <!-- @click-cancel \u548C :onClickCancel \u4E24\u79CD\u5199\u6CD5\u90FD\u652F\u6301\uFF1B :onClickOverlay \u548C @click-overlay \u4E24\u79CD\u5199\u6CD5\u90FD\u652F\u6301-->
    <t-drawer
      header="\u62BD\u5C49\u6807\u9898"
      :visible="visible"
      @cancel="visible = false"
      :onOverlayClick="() => (visible = false)"
      :onConfirm="() => (visible = false)"
      :placement="placement"
    >
      <p>\u62BD\u5C49\u7684\u5185\u5BB9</p>
    </t-drawer>
    <t-space direction="vertical">
      <t-radio-group :defaultValue="placement" v-model="placement">
        <t-radio-button value="left">\u5DE6\u4FA7</t-radio-button>
        <t-radio-button value="right">\u53F3\u4FA7</t-radio-button>
        <t-radio-button value="top">\u4E0A\u65B9</t-radio-button>
        <t-radio-button value="bottom">\u4E0B\u65B9</t-radio-button>
      </t-radio-group>
      <t-button variant="outline" @click="visible = true" class="btn-top-margin">\u6253\u5F00\u62BD\u5C49</t-button>
    </t-space>
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      placement: 'right',
    };
  },
};
<\/script>
`,B=`<template>
  <t-space>
    <!-- @click-cancel \u548C :onClickCancel \u4E24\u79CD\u5199\u6CD5\u90FD\u652F\u6301\uFF1B :onClickOverlay \u548C @click-overlay \u4E24\u79CD\u5199\u6CD5\u90FD\u652F\u6301-->
    <t-drawer
      header="\u62BD\u5C49\u6807\u9898"
      :visible="visible"
      @cancel="visible = false"
      :onOverlayClick="() => (visible = false)"
      :onConfirm="() => (visible = false)"
      :placement="placement"
    >
      <p>\u62BD\u5C49\u7684\u5185\u5BB9</p>
    </t-drawer>
    <t-space direction="vertical">
      <t-radio-group :defaultValue="placement" v-model="placement">
        <t-radio-button value="left">\u5DE6\u4FA7</t-radio-button>
        <t-radio-button value="right">\u53F3\u4FA7</t-radio-button>
        <t-radio-button value="top">\u4E0A\u65B9</t-radio-button>
        <t-radio-button value="bottom">\u4E0B\u65B9</t-radio-button>
      </t-radio-group>
      <t-button variant="outline" @click="visible = true" class="btn-top-margin">\u6253\u5F00\u62BD\u5C49</t-button>
    </t-space>
  </t-space>
</template>

<script setup>
import { ref } from 'vue';

const visible = ref(false);
const placement = ref('right');
<\/script>
`,O=`<template>
  <t-space>
    <t-drawer
      :visible.sync="visible"
      :placement="placement"
      :size="size"
      :onConfirm="() => (visible = false)"
      header="\u62BD\u5C49\u6807\u9898"
    >
      <p>\u62BD\u5C49\u7684\u5185\u5BB9</p>
    </t-drawer>
    <t-space direction="vertical">
      <t-radio-group :defaultValue="size" v-model="size">
        <t-radio-button value="small">\u5C0F</t-radio-button>
        <t-radio-button value="medium">\u4E2D</t-radio-button>
        <t-radio-button value="large">\u5927</t-radio-button>
        <t-radio-button value="200">200</t-radio-button>
        <t-radio-button value="400px">400px</t-radio-button>
        <t-radio-button value="50%">50%</t-radio-button>
      </t-radio-group>

      <t-button variant="outline" @click="visible = true">\u6253\u5F00\u62BD\u5C49</t-button>
    </t-space>
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      size: 'small',
      placement: 'right',
    };
  },
};
<\/script>
`,z=`<template>
  <t-space>
    <t-drawer
      :visible.sync="visible"
      :placement="placement"
      :size="size"
      :onConfirm="() => (visible = false)"
      header="\u62BD\u5C49\u6807\u9898"
    >
      <p>\u62BD\u5C49\u7684\u5185\u5BB9</p>
    </t-drawer>
    <t-space direction="vertical">
      <t-radio-group :defaultValue="size" v-model="size">
        <t-radio-button value="small">\u5C0F</t-radio-button>
        <t-radio-button value="medium">\u4E2D</t-radio-button>
        <t-radio-button value="large">\u5927</t-radio-button>
        <t-radio-button value="200">200</t-radio-button>
        <t-radio-button value="400px">400px</t-radio-button>
        <t-radio-button value="50%">50%</t-radio-button>
      </t-radio-group>

      <t-button variant="outline" @click="visible = true">\u6253\u5F00\u62BD\u5C49</t-button>
    </t-space>
  </t-space>
</template>

<script setup>
import { ref } from 'vue';

const visible = ref(false);
const size = ref('small');
const placement = ref('right');
<\/script>
`,M=`<template>
  <div>
    <!-- \u4F7F\u7528\u63D2\u69FD\u81EA\u5B9A\u4E49 -->
    <t-drawer :visible.sync="visible" :closeBtn="true">
      <p>\u62BD\u5C49\u7684\u5185\u5BB9</p>
      <template #header>
        <div>\u81EA\u5B9A\u4E49\u5934\u90E8</div>
      </template>
      <template #footer>
        <t-button @click="visible = false">\u786E\u5B9A</t-button>
        <t-button variant="outline" @click="visible = false">\u53D6\u6D88</t-button>
      </template>
    </t-drawer>

    <!-- \u4F7F\u7528 props \u81EA\u5B9A\u4E49 -->
    <t-drawer :visible.sync="visible2" :header="() => '\u62BD\u5C49\u6807\u9898'" :footer="renderFooter" :closeBtn="true">
      <p>\u62BD\u5C49\u7684\u5185\u5BB9</p>
    </t-drawer>

    <!-- \u5355\u72EC\u5B9A\u4E49\u786E\u8BA4/\u53D6\u6D88\u6309\u94AE -->
    <t-drawer
      :visible.sync="visible3"
      header="\u62BD\u5C49\u6807\u9898"
      cancelBtn="\u53D6\u6D88"
      :confirmBtn="{
        content: '\u786E\u8BA4',
        disabled: true,
      }"
      :closeBtn="true"
    >
      <p>\u62BD\u5C49\u7684\u5185\u5BB9</p>
    </t-drawer>

    <t-button variant="outline" @click="visible = true">\u6253\u5F00(\u63D2\u69FD\u5B9A\u4E49)</t-button>
    &nbsp;&nbsp;
    <t-button variant="outline" @click="visible2 = true">\u6253\u5F00(\u5C5E\u6027\u5B9A\u4E49)</t-button>
    &nbsp;&nbsp;
    <t-button variant="outline" @click="visible3 = true">\u6253\u5F00(\u5355\u72EC\u8BBE\u7F6E\u786E\u8BA4/\u53D6\u6D88\u6309\u94AE)</t-button>
  </div>
</template>

<script lang="jsx">
export default {
  data() {
    return {
      visible: false,
      visible2: false,
      visible3: false,
    };
  },
  methods: {
    renderFooter() {
      return (
        <div>
          <t-button>confirm</t-button>
          <t-button variant="outline" onClick={() => (this.visible2 = false)}>
            cancel
          </t-button>
        </div>
      );
    },
  },
};
<\/script>
`,T=`<template>
  <div>
    <!-- \u4F7F\u7528\u63D2\u69FD\u81EA\u5B9A\u4E49 -->
    <t-drawer :visible.sync="visible" :closeBtn="true">
      <p>\u62BD\u5C49\u7684\u5185\u5BB9</p>
      <template #header>
        <div>\u81EA\u5B9A\u4E49\u5934\u90E8</div>
      </template>
      <template #footer>
        <t-button @click="visible = false">\u786E\u5B9A</t-button>
        <t-button variant="outline" @click="visible = false">\u53D6\u6D88</t-button>
      </template>
    </t-drawer>

    <!-- \u4F7F\u7528 props \u81EA\u5B9A\u4E49 -->
    <t-drawer :visible.sync="visible2" :header="() => '\u62BD\u5C49\u6807\u9898'" :footer="renderFooter" :closeBtn="true">
      <p>\u62BD\u5C49\u7684\u5185\u5BB9</p>
    </t-drawer>

    <!-- \u5355\u72EC\u5B9A\u4E49\u786E\u8BA4/\u53D6\u6D88\u6309\u94AE -->
    <t-drawer
      :visible.sync="visible3"
      header="\u62BD\u5C49\u6807\u9898"
      cancelBtn="\u53D6\u6D88"
      :confirmBtn="{
        content: '\u786E\u8BA4',
        disabled: true,
      }"
      :closeBtn="true"
    >
      <p>\u62BD\u5C49\u7684\u5185\u5BB9</p>
    </t-drawer>

    <t-button variant="outline" @click="visible = true">\u6253\u5F00(\u63D2\u69FD\u5B9A\u4E49)</t-button>
    &nbsp;&nbsp;
    <t-button variant="outline" @click="visible2 = true">\u6253\u5F00(\u5C5E\u6027\u5B9A\u4E49)</t-button>
    &nbsp;&nbsp;
    <t-button variant="outline" @click="visible3 = true">\u6253\u5F00(\u5355\u72EC\u8BBE\u7F6E\u786E\u8BA4/\u53D6\u6D88\u6309\u94AE)</t-button>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue';

const visible = ref(false);
const visible2 = ref(false);
const visible3 = ref(false);
const renderFooter = () => (
  <div>
    <t-button>confirm</t-button>
    <t-button variant="outline" onClick={() => (visible2.value = false)}>
      cancel
    </t-button>
  </div>
);
<\/script>
`,P=`<template>
  <div>
    <t-drawer :visible.sync="visible" attach="body" :mode="mode" :placement="placement" header="\u62BD\u5C49\u6807\u9898">
      <p>\u62BD\u5C49\u7684\u5185\u5BB9</p>
    </t-drawer>

    <!-- \u72B6\u6001\u63A7\u5236\u533A -->
    <t-space>
      \u62BD\u5C49\u5F39\u51FA\u6A21\u5F0F\uFF1A
      <t-radio-group v-model="mode">
        <t-radio-button value="overlay">overlay</t-radio-button>
        <t-radio-button value="push">push</t-radio-button>
      </t-radio-group>
    </t-space>
    <br /><br />
    <t-button variant="outline" @click="visible = true">\u6253\u5F00\u62BD\u5C49</t-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      mode: 'push',
      placement: 'right',
    };
  },
};
<\/script>
`,S=`<template>
  <div>
    <t-drawer :visible.sync="visible" attach="body" :mode="mode" :placement="placement" header="\u62BD\u5C49\u6807\u9898">
      <p>\u62BD\u5C49\u7684\u5185\u5BB9</p>
    </t-drawer>

    <!-- \u72B6\u6001\u63A7\u5236\u533A -->
    <t-space>
      \u62BD\u5C49\u5F39\u51FA\u6A21\u5F0F\uFF1A
      <t-radio-group v-model="mode">
        <t-radio-button value="overlay">overlay</t-radio-button>
        <t-radio-button value="push">push</t-radio-button>
      </t-radio-group>
    </t-space>
    <br /><br />
    <t-button variant="outline" @click="visible = true">\u6253\u5F00\u62BD\u5C49</t-button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const visible = ref(false);
const mode = ref('push');
const placement = ref('right');
<\/script>
`,A=`<template>
  <div class="t-container">
    <div class="t-suf-container">
      <t-drawer :visible.sync="visible" :placement="placement" :mode="mode" header="\u62BD\u5C49\u6807\u9898" showInAttachedElement>
        <p>\u62BD\u5C49\u7684\u5185\u5BB9</p>
      </t-drawer>
      <div class="tdesign-radio-button">
        \u62BD\u5C49\u5F39\u51FA\u65B9\u5411\uFF1A
        <t-radio-group v-model="placement">
          <t-radio-button value="left">\u5DE6\u4FA7</t-radio-button>
          <t-radio-button value="right">\u53F3\u4FA7</t-radio-button>
          <t-radio-button value="top">\u4E0A\u65B9</t-radio-button>
          <t-radio-button value="bottom">\u4E0B\u65B9</t-radio-button>
        </t-radio-group>
      </div>
      <br />
      <div class="tdesign-radio-button">
        \u62BD\u5C49\u5F39\u51FA\u6A21\u5F0F\uFF1A
        <t-radio-group v-model="mode">
          <t-radio-button value="overlay">overlay</t-radio-button>
          <t-radio-button value="push">push</t-radio-button>
        </t-radio-group>
      </div>
      <br /><br />
      <t-button variant="outline" @click="visible = true">\u6253\u5F00\u62BD\u5C49</t-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      placement: 'right',
      mode: 'overlay',
    };
  },
};
<\/script>
<style scoped>
.t-container {
  position: relative;
  height: 400px;
  overflow: hidden;
  border: 1px solid #ebedf0;
  border-radius: 2px;
}
.t-suf-container {
  height: 100%;
  padding: 48px;
}
</style>
`,E=`<template>
  <div class="t-container">
    <div class="t-suf-container">
      <t-drawer :visible.sync="visible" :placement="placement" :mode="mode" header="\u62BD\u5C49\u6807\u9898" showInAttachedElement>
        <p>\u62BD\u5C49\u7684\u5185\u5BB9</p>
      </t-drawer>
      <div class="tdesign-radio-button">
        \u62BD\u5C49\u5F39\u51FA\u65B9\u5411\uFF1A
        <t-radio-group v-model="placement">
          <t-radio-button value="left">\u5DE6\u4FA7</t-radio-button>
          <t-radio-button value="right">\u53F3\u4FA7</t-radio-button>
          <t-radio-button value="top">\u4E0A\u65B9</t-radio-button>
          <t-radio-button value="bottom">\u4E0B\u65B9</t-radio-button>
        </t-radio-group>
      </div>
      <br />
      <div class="tdesign-radio-button">
        \u62BD\u5C49\u5F39\u51FA\u6A21\u5F0F\uFF1A
        <t-radio-group v-model="mode">
          <t-radio-button value="overlay">overlay</t-radio-button>
          <t-radio-button value="push">push</t-radio-button>
        </t-radio-group>
      </div>
      <br /><br />
      <t-button variant="outline" @click="visible = true">\u6253\u5F00\u62BD\u5C49</t-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const visible = ref(false);
const placement = ref('right');
const mode = ref('overlay');
<\/script>
<style scoped>
.t-container {
  position: relative;
  height: 400px;
  overflow: hidden;
  border: 1px solid #ebedf0;
  border-radius: 2px;
}
.t-suf-container {
  height: 100%;
  padding: 48px;
}
</style>
`,F=`<template>
  <div>
    <!-- \u52A8\u753B\u6548\u679C\u5F85\u5F00\u53D1 -->
    <t-drawer :visible.sync="visible" header="\u62BD\u5C49\u6807\u9898" destroyOnClose>
      <p>\u62BD\u5C49\u7684\u5185\u5BB9</p>
    </t-drawer>

    <t-button variant="outline" @click="visible = true">\u6253\u5F00\u62BD\u5C49</t-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
    };
  },
};
<\/script>
`,j=`<template>
  <div>
    <!-- \u52A8\u753B\u6548\u679C\u5F85\u5F00\u53D1 -->
    <t-drawer :visible.sync="visible" header="\u62BD\u5C49\u6807\u9898" destroyOnClose>
      <p>\u62BD\u5C49\u7684\u5185\u5BB9</p>
    </t-drawer>

    <t-button variant="outline" @click="visible = true">\u6253\u5F00\u62BD\u5C49</t-button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const visible = ref(false);
<\/script>
`,L=`<template>
  <div>
    <!-- @click-cancel \u548C :onClickCancel \u4E24\u79CD\u5199\u6CD5\u90FD\u652F\u6301\uFF1B :onClickOverlay \u548C @click-overlay \u4E24\u79CD\u5199\u6CD5\u90FD\u652F\u6301-->
    <t-drawer
      header="\u62BD\u5C49\u6807\u9898"
      :visible="visible"
      @cancel="visible = false"
      :onOverlayClick="() => (visible = false)"
      :onConfirm="() => (visible = false)"
      :placement="placement"
      :sizeDraggable="true"
    >
      <p>\u62BD\u5C49\u7684\u5185\u5BB9</p>
    </t-drawer>
    <t-space direction="vertical">
      <t-radio-group :defaultValue="placement" v-model="placement">
        <t-radio-button value="left">\u4ECE\u5DE6\u4FA7\u62D6\u62FD\u62BD\u5C49</t-radio-button>
        <t-radio-button value="right">\u4ECE\u53F3\u4FA7\u62D6\u62FD\u62BD\u5C49</t-radio-button>
        <t-radio-button value="top">\u4ECE\u4E0A\u65B9\u62D6\u62FD\u62BD\u5C49</t-radio-button>
        <t-radio-button value="bottom">\u4ECE\u4E0B\u65B9\u62D6\u62FD\u62BD\u5C49</t-radio-button>
      </t-radio-group>
      <t-button variant="outline" @click="visible = true">\u6253\u5F00\u62BD\u5C49</t-button>
    </t-space>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      placement: 'right',
    };
  },
};
<\/script>
`,I=`<template>
  <div>
    <!-- @click-cancel \u548C :onClickCancel \u4E24\u79CD\u5199\u6CD5\u90FD\u652F\u6301\uFF1B :onClickOverlay \u548C @click-overlay \u4E24\u79CD\u5199\u6CD5\u90FD\u652F\u6301-->
    <t-drawer
      header="\u62BD\u5C49\u6807\u9898"
      :visible="visible"
      @cancel="visible = false"
      :onOverlayClick="() => (visible = false)"
      :onConfirm="() => (visible = false)"
      :placement="placement"
      :sizeDraggable="true"
    >
      <p>\u62BD\u5C49\u7684\u5185\u5BB9</p>
    </t-drawer>
    <t-space direction="vertical">
      <t-radio-group :defaultValue="placement" v-model="placement">
        <t-radio-button value="left">\u4ECE\u5DE6\u4FA7\u62D6\u62FD\u62BD\u5C49</t-radio-button>
        <t-radio-button value="right">\u4ECE\u53F3\u4FA7\u62D6\u62FD\u62BD\u5C49</t-radio-button>
        <t-radio-button value="top">\u4ECE\u4E0A\u65B9\u62D6\u62FD\u62BD\u5C49</t-radio-button>
        <t-radio-button value="bottom">\u4ECE\u4E0B\u65B9\u62D6\u62FD\u62BD\u5C49</t-radio-button>
      </t-radio-group>
      <t-button variant="outline" @click="visible = true">\u6253\u5F00\u62BD\u5C49</t-button>
    </t-space>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const visible = ref(false);
const placement = ref('right');
<\/script>
`,f=[{name:"closeBtn",type:"Boolean",defaultValue:!0,options:[]},{name:"closeOnEscKeydown",type:"Boolean",defaultValue:!0,options:[]},{name:"closeOnOverlayClick",type:"Boolean",defaultValue:!0,options:[]},{name:"destroyOnClose",type:"Boolean",defaultValue:!1,options:[]},{name:"footer",type:"Boolean",defaultValue:!0,options:[]},{name:"header",type:"Boolean",defaultValue:!0,options:[]},{name:"mode",type:"enum",defaultValue:"overlay",options:[{label:"overlay",value:"overlay"},{label:"push",value:"push"}]},{name:"placement",type:"enum",defaultValue:"right",options:[{label:"left",value:"left"},{label:"right",value:"right"},{label:"top",value:"top"},{label:"bottom",value:"bottom"}]},{name:"preventScrollThrough",type:"Boolean",defaultValue:!0,options:[]},{name:"showInAttachedElement",type:"Boolean",defaultValue:!1,options:[]},{name:"showOverlay",type:"Boolean",defaultValue:!0,options:[]},{name:"sizeDraggable",type:"Boolean",defaultValue:!1,options:[]},{name:"visible",type:"Boolean",defaultValue:!1,options:[]}];const u={};u.setup=(n,e)=>{const t=l(!1),i=()=>{t.value=!0},o=l(f),a=[{label:"drawer",value:"drawer"}],r={drawer:`
        <div>
          <t-button @click="handleClick">Open Drawer</t-button>
          <t-drawer v-bind="configProps" :visible.sync="visible">
            <template #header>header</template>
            <p>This is a Drawer</p>
          </t-drawer>
        </div>
      `},s=l(`<template>${r[a[0].value].trim()}</template>`);function v(b){s.value=`<template>${r[b].trim()}</template>`}return{visible:t,handleClick:i,configList:o,panelList:a,usageCode:s,onPanelChange:v}};var p=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("base-usage",{attrs:{code:n.usageCode,"config-list":n.configList,"panel-list":n.panelList},on:{PanelChange:n.onPanelChange},scopedSlots:n._u([{key:"drawer",fn:function(i){var o=i.configProps;return[t("div",[t("t-button",{on:{click:n.handleClick}},[n._v("Open Drawer")]),t("t-drawer",n._b({attrs:{visible:n.visible},on:{"update:visible":function(a){n.visible=a}},scopedSlots:n._u([{key:"header",fn:function(){return[n._v("header")]},proxy:!0}],null,!0)},"t-drawer",o,!1),[t("p",[n._v("This is a Drawer")])])],1)]}}])})},h=[];p._withStripped=!0;const d={};var c=m(u,p,h,!1,g,null,null,null);function g(n){for(let e in d)this[e]=d[e]}c.options.__file="../src/drawer/_usage/index.vue";var $=function(){return c.exports}();export{y as D,$ as U,w as a,k as b,x as c,V as d,_ as e,D as f,B as g,O as h,z as i,M as j,T as k,P as l,S as m,A as n,E as o,F as p,j as q,L as r,I as s};
