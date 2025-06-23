import{D as l,b as r}from"./loading.a79e9ac6.js";import{D as c,e as m,f as g,g as d,h as p}from"./plugin.5fb605c6.js";import{U as v,D as u,a as _,b as h,c as b}from"./index.9d5ea68c.js";import{P as f}from"./prism.a27ccf6a.js";import{n as C}from"./index.663c003f.js";var k=`<template>
  <t-space direction="vertical">
    <t-message v-if="isShowMsg" :closeBtn="true" @close-btn-click="isShowMsg = false"
    >\u70B9\u51FB\u5173\u95ED\u6309\u94AE\u89E6\u53D1\u4E8B\u4EF6 close-btn-click
    </t-message>

    <t-message v-if="closableMsg" closeBtn="\u5173\u95ED" @close-btn-click="closableMsg = false"
    >\u81EA\u5B9A\u4E49\u5173\u95ED\u6309\u94AE\uFF08\u6587\u5B57\uFF09</t-message
    >

    <t-message :closeBtn="closeBtn" v-if="closableMsg1">\u81EA\u5B9A\u4E49\u5173\u95ED\u6309\u94AE\uFF08\u51FD\u6570\uFF09</t-message>

    <t-message v-if="closableMsg2">
      \u81EA\u5B9A\u4E49\u5173\u95ED\u6309\u94AE\uFF08\u63D2\u69FD\uFF09
      <template #closeBtn>
        <div class="t-message__close" @click="closableMsg2 = false">
          <b>x</b>
        </div>
      </template>
    </t-message>
  </t-space>
</template>

<script lang="jsx">
export default {
  data() {
    return {
      isShowMsg: true,
      closableMsg: true,
      closableMsg1: true,
      closableMsg2: true,
    };
  },
  methods: {
    closeBtn() {
      return (
        <div
          class="t-message__close"
          onClick={() => {
            this.closableMsg1 = false;
          }}
        >
          <b>x</b>
        </div>
      );
    },
  },
};
<\/script>

<style lang="less" scoped>
.t-demo-message {
  .t-message,
  .t-button {
    margin-bottom: 16px;
  }
}
</style>
`,M=`<template>
  <t-space direction="vertical">
    <t-message v-if="isShowMsg" :closeBtn="true" @close-btn-click="isShowMsg = false"
    >\u70B9\u51FB\u5173\u95ED\u6309\u94AE\u89E6\u53D1\u4E8B\u4EF6 close-btn-click
    </t-message>

    <t-message v-if="closableMsg" closeBtn="\u5173\u95ED" @close-btn-click="closableMsg = false"
    >\u81EA\u5B9A\u4E49\u5173\u95ED\u6309\u94AE\uFF08\u6587\u5B57\uFF09</t-message
    >

    <t-message :closeBtn="closeBtn" v-if="closableMsg1">\u81EA\u5B9A\u4E49\u5173\u95ED\u6309\u94AE\uFF08\u51FD\u6570\uFF09</t-message>

    <t-message v-if="closableMsg2">
      \u81EA\u5B9A\u4E49\u5173\u95ED\u6309\u94AE\uFF08\u63D2\u69FD\uFF09
      <template #closeBtn>
        <div class="t-message__close" @click="closableMsg2 = false">
          <b>x</b>
        </div>
      </template>
    </t-message>
  </t-space>
</template>

<script setup lang="jsx">
import { ref } from 'vue';

const isShowMsg = ref(true);
const closableMsg = ref(true);
const closableMsg1 = ref(true);
const closableMsg2 = ref(true);
const closeBtn = () => (
  <div
    class="t-message__close"
    onClick={() => {
      closableMsg1.value = false;
    }}
  >
    <b>x</b>
  </div>
);
<\/script>

<style lang="less" scoped>
.t-demo-message {
  .t-message,
  .t-button {
    margin-bottom: 16px;
  }
}
</style>
`,x=`<template>
  <t-space>
    <t-button variant="outline" @click="closeFunc"> \u81EA\u7531\u63A7\u5236\u5173\u95ED\u65F6\u673A\uFF08{{ msg ? '\u5173\u95ED' : '\u6253\u5F00' }}\uFF09 </t-button>
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      msg: null,
    };
  },
  methods: {
    // \u81EA\u7531\u63A7\u5236\u5173\u95ED\u65F6\u673A
    closeFunc() {
      if (!this.msg) {
        this.msg = this.$message.info({
          content: '\u8C03\u7528\u5173\u95ED\u51FD\u6570\u5173\u95ED\u4FE1\u606F\u63D0\u793A\u6846',
          duration: 0,
          // \u5C42\u7EA7\u63A7\u5236\uFF1A\u975E\u5F53\u524D\u573A\u666F\u81EA\u7531\u63A7\u5236\u5F00\u5173\u7684\u5173\u952E\u4EE3\u7801\uFF0C\u4EC5\u7528\u4E8E\u6D4B\u8BD5 API \u662F\u5426\u8FD0\u884C\u6B63\u5E38
          zIndex: 1001,
          // \u6302\u8F7D\u5143\u7D20\u63A7\u5236\uFF1A\u975E\u5F53\u524D\u573A\u666F\u81EA\u7531\u63A7\u5236\u5F00\u5173\u7684\u5173\u952E\u4EE3\u7801\uFF0C\u4EC5\u7528\u4E8E\u6D4B\u8BD5 API \u662F\u5426\u8FD0\u884C\u6B63\u5E38
          attach: document.body,
        });
      } else {
        // \u5173\u952E\u4EE3\u7801
        // \u53E6\u4E00\u79CD\u5173\u95ED\u65B9\u6CD5\uFF1Athis.msg.then(ins => ins.close());
        this.$message.close(this.msg);
        this.msg = null;
      }
    },
  },
};
<\/script>
`,P=`<template>
  <t-space>
    <t-button variant="outline" @click="closeFunc"> \u81EA\u7531\u63A7\u5236\u5173\u95ED\u65F6\u673A\uFF08{{ msg ? '\u5173\u95ED' : '\u6253\u5F00' }}\uFF09 </t-button>
  </t-space>
</template>

<script setup>
import { MessagePlugin } from 'tdesign-vue';
import { ref } from 'vue';

const msg = ref(null);
// \u81EA\u7531\u63A7\u5236\u5173\u95ED\u65F6\u673A
const closeFunc = () => {
  if (!msg.value) {
    msg.value = MessagePlugin.info({
      content: '\u8C03\u7528\u5173\u95ED\u51FD\u6570\u5173\u95ED\u4FE1\u606F\u63D0\u793A\u6846',
      duration: 0,
      // \u5C42\u7EA7\u63A7\u5236\uFF1A\u975E\u5F53\u524D\u573A\u666F\u81EA\u7531\u63A7\u5236\u5F00\u5173\u7684\u5173\u952E\u4EE3\u7801\uFF0C\u4EC5\u7528\u4E8E\u6D4B\u8BD5 API \u662F\u5426\u8FD0\u884C\u6B63\u5E38
      zIndex: 1001,
      // \u6302\u8F7D\u5143\u7D20\u63A7\u5236\uFF1A\u975E\u5F53\u524D\u573A\u666F\u81EA\u7531\u63A7\u5236\u5F00\u5173\u7684\u5173\u952E\u4EE3\u7801\uFF0C\u4EC5\u7528\u4E8E\u6D4B\u8BD5 API \u662F\u5426\u8FD0\u884C\u6B63\u5E38
      attach: document.body,
    });
  } else {
    // \u5173\u952E\u4EE3\u7801
    // \u53E6\u4E00\u79CD\u5173\u95ED\u65B9\u6CD5\uFF1Athis.msg.then(ins => ins.close());
    MessagePlugin.close(msg.value);
    msg.value = null;
  }
};
<\/script>
`,y=`<template>
  <t-space>
    <t-button variant="outline" @click="openSomeMsg">\u70B9\u51FB\u6253\u5F00\u591A\u4E2A\u6D88\u606F</t-button>
    <t-button variant="outline" @click="closeAll" id="t-demo-msg-close-all">\u70B9\u51FB\u5173\u95ED\u6240\u6709\u6D88\u606F</t-button>
  </t-space>
</template>

<script>
export default {
  methods: {
    openSomeMsg() {
      this.$message.info('\u8FD9\u662F\u7B2C\u4E00\u6761\u6D88\u606F');
      this.$message.warning('\u8FD9\u662F\u7B2C\u4E8C\u6761\u6D88\u606F');
      this.$message.error('\u8FD9\u662F\u7B2C\u4E09\u6761\u6D88\u606F');
    },
    closeAll() {
      this.$message.closeAll();
    },
  },
};
<\/script>
`,S=`<template>
  <t-space>
    <t-button variant="outline" @click="openSomeMsg">\u70B9\u51FB\u6253\u5F00\u591A\u4E2A\u6D88\u606F</t-button>
    <t-button variant="outline" @click="closeAll" id="t-demo-msg-close-all">\u70B9\u51FB\u5173\u95ED\u6240\u6709\u6D88\u606F</t-button>
  </t-space>
</template>

<script setup>
import { MessagePlugin } from 'tdesign-vue';

const openSomeMsg = () => {
  MessagePlugin.info('\u8FD9\u662F\u7B2C\u4E00\u6761\u6D88\u606F');
  MessagePlugin.warning('\u8FD9\u662F\u7B2C\u4E8C\u6761\u6D88\u606F');
  MessagePlugin.error('\u8FD9\u662F\u7B2C\u4E09\u6761\u6D88\u606F');
};
const closeAll = () => {
  MessagePlugin.closeAll();
};
<\/script>
`,$=`<template>
  <t-space direction="vertical" size="large">
    <t-space>
      <t-input placeholder="\u8BF7\u8F93\u5165\u6A2A\u5411\u504F\u79FB\u91CF" v-model="offsetX"></t-input>
      <t-input placeholder="\u8BF7\u8F93\u5165\u7EB5\u5411\u504F\u79FB\u91CF" v-model="offsetY"></t-input>
    </t-space>
    <div class="tdesign-tooltip-placement">
      <t-button variant="outline" @click="$message.success(msgList[0])" class="placement-center">center</t-button>
      <t-button variant="outline" @click="$message.info(msgList[1])" class="placement-top">top</t-button>
      <t-button variant="outline" @click="$message.warning(msgList[2])" class="placement-left">left</t-button>
      <t-button variant="outline" @click="$message.loading(msgList[3])" class="placement-right">right</t-button>
      <t-button variant="outline" @click="$message.warning(msgList[4])" class="placement-bottom">bottom</t-button>
      <t-button variant="outline" @click="$message.error(msgList[5])" class="placement-top-left">top-left</t-button>
      <t-button variant="outline" @click="$message.question(msgList[6])" class="placement-top-right"
      >top-right</t-button
      >
      <t-button variant="outline" @click="$message.warning(msgList[7])" class="placement-bottom-left"
      >bottom-left</t-button
      >
      <t-button variant="outline" @click="$message.warning(msgList[8])" class="placement-bottom-right"
      >bottom-right</t-button
      >
    </div>
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      offsetX: '',
      offsetY: '',
    };
  },
  computed: {
    msgList() {
      return [
        { content: '\u7528\u6237\u8868\u793A\u64CD\u4F5C\u987A\u5229\u8FBE\u6210', placement: 'center' },
        { content: '\u7528\u6237\u8868\u793A\u666E\u901A\u64CD\u4F5C\u4FE1\u606F\u63D0\u793A', placement: 'top' },
        { content: '\u7528\u6237\u8868\u793A\u64CD\u4F5C\u5F15\u8D77\u4E00\u5B9A\u540E\u679C', placement: 'left' },
        { content: '\u7528\u4E8E\u8868\u793A\u64CD\u4F5C\u6B63\u5728\u751F\u6548\u7684\u8FC7\u7A0B\u4E2D', placement: 'right' },
        { content: '\u7528\u4E8E\u8868\u793A\u64CD\u4F5C\u6B63\u5728\u751F\u6548\u7684\u8FC7\u7A0B\u4E2D', placement: 'bottom' },
        { content: '\u7528\u6237\u8868\u793A\u64CD\u4F5C\u5F15\u8D77\u4E25\u91CD\u7684\u540E\u679C', placement: 'top-left' },
        { content: '\u7528\u4E8E\u5E2E\u52A9\u7528\u6237\u64CD\u4F5C\u7684\u4FE1\u606F\u63D0\u793A', placement: 'top-right' },
        { content: '\u7528\u4E8E\u8868\u793A\u64CD\u4F5C\u6B63\u5728\u751F\u6548\u7684\u8FC7\u7A0B\u4E2D', placement: 'bottom-left' },
        { content: '\u7528\u4E8E\u8868\u793A\u64CD\u4F5C\u6B63\u5728\u751F\u6548\u7684\u8FC7\u7A0B\u4E2D', placement: 'bottom-right' },
      ].map((item) => ({
        ...item,
        offset: [this.offsetX, this.offsetY],
      }));
    },
  },
};
<\/script>

<style scoped>
/* .t-message-placement {
  margin: 0 auto;
  width: 500px;
  height: 260px;
  position: relative;
} */
.placement-top {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}
.placement-top-left {
  position: absolute;
  top: 0;
  left: 0;
}
.placement-top-right {
  position: absolute;
  top: 0;
  right: 0;
}
.placement-bottom {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
.placement-bottom-left {
  position: absolute;
  bottom: 0;
  left: 0;
}
.placement-bottom-right {
  position: absolute;
  bottom: 0;
  right: 0;
}
.placement-left {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}
.placement-right {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
.placement-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
`,w=`<template>
  <t-space direction="vertical" size="large">
    <t-space>
      <t-input placeholder="\u8BF7\u8F93\u5165\u6A2A\u5411\u504F\u79FB\u91CF" v-model="offsetX"></t-input>
      <t-input placeholder="\u8BF7\u8F93\u5165\u7EB5\u5411\u504F\u79FB\u91CF" v-model="offsetY"></t-input>
    </t-space>
    <div class="tdesign-tooltip-placement">
      <t-button variant="outline" @click="$message.success(msgList[0])" class="placement-center">center</t-button>
      <t-button variant="outline" @click="$message.info(msgList[1])" class="placement-top">top</t-button>
      <t-button variant="outline" @click="$message.warning(msgList[2])" class="placement-left">left</t-button>
      <t-button variant="outline" @click="$message.loading(msgList[3])" class="placement-right">right</t-button>
      <t-button variant="outline" @click="$message.warning(msgList[4])" class="placement-bottom">bottom</t-button>
      <t-button variant="outline" @click="$message.error(msgList[5])" class="placement-top-left">top-left</t-button>
      <t-button variant="outline" @click="$message.question(msgList[6])" class="placement-top-right"
      >top-right</t-button
      >
      <t-button variant="outline" @click="$message.warning(msgList[7])" class="placement-bottom-left"
      >bottom-left</t-button
      >
      <t-button variant="outline" @click="$message.warning(msgList[8])" class="placement-bottom-right"
      >bottom-right</t-button
      >
    </div>
  </t-space>
</template>

<script setup>
import { ref, computed } from 'vue';

const offsetX = ref('');
const offsetY = ref('');
const msgList = computed(() => [
  {
    content: '\u7528\u6237\u8868\u793A\u64CD\u4F5C\u987A\u5229\u8FBE\u6210',
    placement: 'center',
  },
  {
    content: '\u7528\u6237\u8868\u793A\u666E\u901A\u64CD\u4F5C\u4FE1\u606F\u63D0\u793A',
    placement: 'top',
  },
  {
    content: '\u7528\u6237\u8868\u793A\u64CD\u4F5C\u5F15\u8D77\u4E00\u5B9A\u540E\u679C',
    placement: 'left',
  },
  {
    content: '\u7528\u4E8E\u8868\u793A\u64CD\u4F5C\u6B63\u5728\u751F\u6548\u7684\u8FC7\u7A0B\u4E2D',
    placement: 'right',
  },
  {
    content: '\u7528\u4E8E\u8868\u793A\u64CD\u4F5C\u6B63\u5728\u751F\u6548\u7684\u8FC7\u7A0B\u4E2D',
    placement: 'bottom',
  },
  {
    content: '\u7528\u6237\u8868\u793A\u64CD\u4F5C\u5F15\u8D77\u4E25\u91CD\u7684\u540E\u679C',
    placement: 'top-left',
  },
  {
    content: '\u7528\u4E8E\u5E2E\u52A9\u7528\u6237\u64CD\u4F5C\u7684\u4FE1\u606F\u63D0\u793A',
    placement: 'top-right',
  },
  {
    content: '\u7528\u4E8E\u8868\u793A\u64CD\u4F5C\u6B63\u5728\u751F\u6548\u7684\u8FC7\u7A0B\u4E2D',
    placement: 'bottom-left',
  },
  {
    content: '\u7528\u4E8E\u8868\u793A\u64CD\u4F5C\u6B63\u5728\u751F\u6548\u7684\u8FC7\u7A0B\u4E2D',
    placement: 'bottom-right',
  },
].map((item) => ({
  ...item,
  offset: [offsetX.value, offsetY.value],
})));
<\/script>

<style scoped>
/* .t-message-placement {
  margin: 0 auto;
  width: 500px;
  height: 260px;
  position: relative;
} */
.placement-top {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}
.placement-top-left {
  position: absolute;
  top: 0;
  left: 0;
}
.placement-top-right {
  position: absolute;
  top: 0;
  right: 0;
}
.placement-bottom {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
.placement-bottom-left {
  position: absolute;
  bottom: 0;
  left: 0;
}
.placement-bottom-right {
  position: absolute;
  bottom: 0;
  right: 0;
}
.placement-left {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}
.placement-right {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
.placement-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
`,D=`<template>
  <t-space direction="vertical" size="large">
    <!--
      - \u7EC4\u4EF6\u5B9E\u4F8B\uFF0C\u5173\u95ED\u67D0\u4E00\u6761\u4FE1\u606F
      - \u7EC4\u4EF6\u5B9E\u4F8B\uFF1AMessageInstance = this.$message(options)
      - \u7EC4\u4EF6\u5B9E\u4F8B\uFF1AMessageInstance = MessagePlugin(options)
      - \u7EC4\u4EF6\u5B9E\u4F8B\u65B9\u6CD5-\u5173\u95ED\u63D0\u793A\u4FE1\u606F\uFF1AMessageInstance.close()
    -->

    <t-space direction="vertical">
      <p>\u63D2\u4EF6\u8C03\u7528</p>
      <t-space>
        <t-button theme="primary" variant="outline" @click="$message.info('\u7528\u6237\u8868\u793A\u666E\u901A\u64CD\u4F5C\u4FE1\u606F\u63D0\u793A')">\u6D88\u606F</t-button>
        <t-button
          theme="success"
          variant="outline"
          @click="
            $message.success({
              content: '\u7528\u6237\u8868\u793A\u64CD\u4F5C\u987A\u5229\u8FBE\u6210\uFF0C\u81EA\u5B9A\u4E49 className \u548C style',
              duration: 2000,
              className: 'test_class',
              style: { width: '600px' },
            })
          "
        >
          \u6210\u529F
        </t-button>
        <t-button theme="warning" variant="outline" @click="$message('warning', '\u7528\u6237\u8868\u793A\u64CD\u4F5C\u5F15\u8D77\u4E00\u5B9A\u540E\u679C')">
          \u8B66\u793A
        </t-button>
        <t-button
          theme="danger"
          variant="outline"
          @click="$message('error', { content: '\u7528\u6237\u8868\u793A\u64CD\u4F5C\u5F15\u8D77\u4E25\u91CD\u7684\u540E\u679C', duration: 4000 })"
        >
          \u5931\u8D25
        </t-button>
        <t-button theme="primary" variant="outline" @click="$message.question('\u7528\u4E8E\u5E2E\u52A9\u7528\u6237\u64CD\u4F5C\u7684\u4FE1\u606F\u63D0\u793A', 5000)">
          \u8BE2\u95EE
        </t-button>
        <!-- 0 \u8868\u793A\u6C38\u8FDC\u4E0D\u81EA\u52A8\u6D88\u5931 -->
        <t-button theme="primary" variant="outline" @click="$message.loading('\u7528\u4E8E\u8868\u793A\u64CD\u4F5C\u6B63\u5728\u751F\u6548\u7684\u8FC7\u7A0B\u4E2D', 0)">
          \u52A0\u8F7D\u4E2D
        </t-button>
        <t-button theme="default" variant="outline" @click="$message.closeAll()">\u5173\u95ED\u6240\u6709</t-button>
        <t-button theme="default" variant="outline" @click="$message.config({ placement: 'left' })">
          \u8BBE\u7F6E\u9ED8\u8BA4\u4F4D\u7F6E
        </t-button>
      </t-space>
    </t-space>

    <t-space direction="vertical">
      <p>\u51FD\u6570\u5F0F\u8C03\u7528</p>
      <t-space>
        <t-button theme="primary" variant="outline" @click="MessagePlugin.info('\u7528\u6237\u8868\u793A\u666E\u901A\u64CD\u4F5C\u4FE1\u606F\u63D0\u793A')">
          \u6D88\u606F
        </t-button>
        <t-button theme="success" variant="outline" @click="MessagePlugin('success', '\u7528\u6237\u8868\u793A\u64CD\u4F5C\u987A\u5229\u8FBE\u6210')">
          \u6210\u529F
        </t-button>
        <t-button
          theme="warning"
          variant="outline"
          @click="MessagePlugin('warning', { content: '\u7528\u6237\u8868\u793A\u64CD\u4F5C\u5F15\u8D77\u4E00\u5B9A\u540E\u679C' })"
        >
          \u8B66\u793A
        </t-button>
        <t-button theme="danger" variant="outline" @click="MessagePlugin.error({ content: content })">\u5931\u8D25</t-button>
        <t-button theme="primary" variant="outline" @click="MessagePlugin.question('\u7528\u4E8E\u5E2E\u52A9\u7528\u6237\u64CD\u4F5C\u7684\u4FE1\u606F\u63D0\u793A')">
          \u8BE2\u95EE
        </t-button>
        <t-button theme="primary" variant="outline" @click="MessagePlugin.loading('\u7528\u4E8E\u8868\u793A\u64CD\u4F5C\u6B63\u5728\u751F\u6548\u7684\u8FC7\u7A0B\u4E2D')">
          \u52A0\u8F7D\u4E2D
        </t-button>
        <t-button theme="default" variant="outline" @click="MessagePlugin.closeAll()">\u5173\u95ED\u6240\u6709</t-button>
        <t-button theme="default" variant="outline" @click="$message.config({ placement: 'right' })">
          \u8BBE\u7F6E\u9ED8\u8BA4\u4F4D\u7F6E
        </t-button>
      </t-space>
    </t-space>
  </t-space>
</template>

<script lang="jsx">
import { MessagePlugin } from 'tdesign-vue';

export default {
  data() {
    return {
      MessagePlugin,
    };
  },
  methods: {
    content() {
      return (
        <div>
          \u64CD\u4F5C\u6709\u8BEF\uFF0C<a href="#">\u524D\u5F80\u67E5\u770B</a>
        </div>
      );
    },
  },
};
<\/script>
`,I=`<template>
  <t-space direction="vertical" size="large">
    <!--
      - \u7EC4\u4EF6\u5B9E\u4F8B\uFF0C\u5173\u95ED\u67D0\u4E00\u6761\u4FE1\u606F
      - \u7EC4\u4EF6\u5B9E\u4F8B\uFF1AMessageInstance = this.$message(options)
      - \u7EC4\u4EF6\u5B9E\u4F8B\uFF1AMessageInstance = MessagePlugin(options)
      - \u7EC4\u4EF6\u5B9E\u4F8B\u65B9\u6CD5-\u5173\u95ED\u63D0\u793A\u4FE1\u606F\uFF1AMessageInstance.close()
    -->

    <t-space direction="vertical">
      <p>\u63D2\u4EF6\u8C03\u7528</p>
      <t-space>
        <t-button theme="primary" variant="outline" @click="$message.info('\u7528\u6237\u8868\u793A\u666E\u901A\u64CD\u4F5C\u4FE1\u606F\u63D0\u793A')">\u6D88\u606F</t-button>
        <t-button
          theme="success"
          variant="outline"
          @click="
            $message.success({
              content: '\u7528\u6237\u8868\u793A\u64CD\u4F5C\u987A\u5229\u8FBE\u6210\uFF0C\u81EA\u5B9A\u4E49 className \u548C style',
              duration: 2000,
              className: 'test_class',
              style: { width: '600px' },
            })
          "
        >
          \u6210\u529F
        </t-button>
        <t-button theme="warning" variant="outline" @click="$message('warning', '\u7528\u6237\u8868\u793A\u64CD\u4F5C\u5F15\u8D77\u4E00\u5B9A\u540E\u679C')">
          \u8B66\u793A
        </t-button>
        <t-button
          theme="danger"
          variant="outline"
          @click="$message('error', { content: '\u7528\u6237\u8868\u793A\u64CD\u4F5C\u5F15\u8D77\u4E25\u91CD\u7684\u540E\u679C', duration: 4000 })"
        >
          \u5931\u8D25
        </t-button>
        <t-button theme="primary" variant="outline" @click="$message.question('\u7528\u4E8E\u5E2E\u52A9\u7528\u6237\u64CD\u4F5C\u7684\u4FE1\u606F\u63D0\u793A', 5000)">
          \u8BE2\u95EE
        </t-button>
        <!-- 0 \u8868\u793A\u6C38\u8FDC\u4E0D\u81EA\u52A8\u6D88\u5931 -->
        <t-button theme="primary" variant="outline" @click="$message.loading('\u7528\u4E8E\u8868\u793A\u64CD\u4F5C\u6B63\u5728\u751F\u6548\u7684\u8FC7\u7A0B\u4E2D', 0)">
          \u52A0\u8F7D\u4E2D
        </t-button>
        <t-button theme="default" variant="outline" @click="$message.closeAll()">\u5173\u95ED\u6240\u6709</t-button>
        <t-button theme="default" variant="outline" @click="$message.config({ placement: 'left' })">
          \u8BBE\u7F6E\u9ED8\u8BA4\u4F4D\u7F6E
        </t-button>
      </t-space>
    </t-space>

    <t-space direction="vertical">
      <p>\u51FD\u6570\u5F0F\u8C03\u7528</p>
      <t-space>
        <t-button theme="primary" variant="outline" @click="MessagePlugin.info('\u7528\u6237\u8868\u793A\u666E\u901A\u64CD\u4F5C\u4FE1\u606F\u63D0\u793A')">
          \u6D88\u606F
        </t-button>
        <t-button theme="success" variant="outline" @click="MessagePlugin('success', '\u7528\u6237\u8868\u793A\u64CD\u4F5C\u987A\u5229\u8FBE\u6210')">
          \u6210\u529F
        </t-button>
        <t-button
          theme="warning"
          variant="outline"
          @click="MessagePlugin('warning', { content: '\u7528\u6237\u8868\u793A\u64CD\u4F5C\u5F15\u8D77\u4E00\u5B9A\u540E\u679C' })"
        >
          \u8B66\u793A
        </t-button>
        <t-button theme="danger" variant="outline" @click="MessagePlugin.error({ content: content })">\u5931\u8D25</t-button>
        <t-button theme="primary" variant="outline" @click="MessagePlugin.question('\u7528\u4E8E\u5E2E\u52A9\u7528\u6237\u64CD\u4F5C\u7684\u4FE1\u606F\u63D0\u793A')">
          \u8BE2\u95EE
        </t-button>
        <t-button theme="primary" variant="outline" @click="MessagePlugin.loading('\u7528\u4E8E\u8868\u793A\u64CD\u4F5C\u6B63\u5728\u751F\u6548\u7684\u8FC7\u7A0B\u4E2D')">
          \u52A0\u8F7D\u4E2D
        </t-button>
        <t-button theme="default" variant="outline" @click="MessagePlugin.closeAll()">\u5173\u95ED\u6240\u6709</t-button>
        <t-button theme="default" variant="outline" @click="$message.config({ placement: 'right' })">
          \u8BBE\u7F6E\u9ED8\u8BA4\u4F4D\u7F6E
        </t-button>
      </t-space>
    </t-space>
  </t-space>
</template>

<script setup lang="jsx">
import { MessagePlugin } from 'tdesign-vue';

const content = () => (
  <div>
    \u64CD\u4F5C\u6709\u8BEF\uFF0C<a href="#">\u524D\u5F80\u67E5\u770B</a>
  </div>
);
<\/script>
`,a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("td-doc-content",{ref:"tdDocContent",attrs:{"page-status":"hidden"}},[t("td-doc-header",{ref:"tdDocHeader",attrs:{slot:"doc-header",spline:"message",platform:"web"},slot:"doc-header"},[t("td-doc-badge",{attrs:{slot:"badge",label:"coverage",message:"87.29%"},slot:"badge"})],1),t("td-doc-tabs",{ref:"tdDocTabs",attrs:{tab:e.tab}}),t("div",{directives:[{name:"show",rawName:"v-show",value:e.tab==="demo",expression:"tab === 'demo'"}]},[t("div",{attrs:{name:"DEMO"}},[t("nav",{staticClass:"tdesign-toc_container"},[t("ol",{staticClass:"tdesign-toc_list"},[t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u666E\u901A\u5168\u5C40\u63D0\u793A"}},[e._v("\u666E\u901A\u5168\u5C40\u63D0\u793A")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u52A0\u8F7D\u4E2D\u4FE1\u606F\u63D0\u793A"}},[e._v("\u52A0\u8F7D\u4E2D\u4FE1\u606F\u63D0\u793A")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u5173\u95ED\u5168\u5C40\u63D0\u793A"}},[e._v("\u5173\u95ED\u5168\u5C40\u63D0\u793A")]),t("ol",{staticClass:"tdesign-toc_list"})]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u63A7\u5236\u5168\u5C40\u63D0\u793A\u663E\u793A\u4F4D\u7F6E"}},[e._v("\u63A7\u5236\u5168\u5C40\u63D0\u793A\u663E\u793A\u4F4D\u7F6E")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u63D2\u4EF6\u8C03\u7528\u4E0E\u51FD\u6570\u5F0F\u8C03\u7528"}},[e._v("\u63D2\u4EF6\u8C03\u7528\u4E0E\u51FD\u6570\u5F0F\u8C03\u7528")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u5168\u5C40\u65B9\u6CD5"}},[e._v("\u5168\u5C40\u65B9\u6CD5")])])])]),t("Usage"),t("h3",{attrs:{id:"\u666E\u901A\u5168\u5C40\u63D0\u793A"}},[e._v("\u666E\u901A\u5168\u5C40\u63D0\u793A "),t("a",{staticClass:"header-anchor",attrs:{href:"#\u666E\u901A\u5168\u5C40\u63D0\u793A"}})]),t("p",[e._v("\u4F7F\u7528\u7B80\u6D01\u6587\u5B57\u63CF\u8FF0\u64CD\u4F5C\u53CD\u9988\u3002\u5E38\u89C4\u5168\u5C40\u63D0\u793A\u5305\u542B\uFF1A\u666E\u901A\u4FE1\u606F\u3001\u6210\u529F\u4FE1\u606F\u3001\u8B66\u793A\u4FE1\u606F\u3001\u9519\u8BEF\u4FE1\u606F\u3001\u5E2E\u52A9\u4FE1\u606F\u548C\u52A0\u8F7D\u4E2D\u3002")]),t("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--message-base tdesign-demo-item--message"},[t("td-doc-demo",{attrs:{"demo-name":"base",languages:"OptionsAPI,CompositionAPI","data-OptionsAPI":e.DemoexamplebaseCode,"data-CompositionAPI":e.DemoexamplebaseCompositionCode,language:"markup"}},[t("div",{attrs:{slot:"action"},slot:"action"},[t("Stackblitz",{attrs:{"demo-name":"base","component-name":" message"}}),t("Codesandbox",{attrs:{"demo-name":"base","component-name":" message"}})],1),t("div",{staticClass:"tdesign-demo-item__body"},[t("Demoexamplebase")],1)])],1),t("h3",{attrs:{id:"\u52A0\u8F7D\u4E2D\u4FE1\u606F\u63D0\u793A"}},[e._v("\u52A0\u8F7D\u4E2D\u4FE1\u606F\u63D0\u793A "),t("a",{staticClass:"header-anchor",attrs:{href:"#\u52A0\u8F7D\u4E2D\u4FE1\u606F\u63D0\u793A"}})]),t("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--message-loading tdesign-demo-item--message"},[t("td-doc-demo",{attrs:{"demo-name":"loading",languages:"OptionsAPI,CompositionAPI","data-OptionsAPI":e.DemoexampleloadingCode,"data-CompositionAPI":e.DemoexampleloadingCompositionCode,language:"markup"}},[t("div",{attrs:{slot:"action"},slot:"action"},[t("Stackblitz",{attrs:{"demo-name":"loading","component-name":" message"}}),t("Codesandbox",{attrs:{"demo-name":"loading","component-name":" message"}})],1),t("div",{staticClass:"tdesign-demo-item__body"},[t("Demoexampleloading")],1)])],1),t("h3",{attrs:{id:"\u5173\u95ED\u5168\u5C40\u63D0\u793A"}},[e._v("\u5173\u95ED\u5168\u5C40\u63D0\u793A "),t("a",{staticClass:"header-anchor",attrs:{href:"#\u5173\u95ED\u5168\u5C40\u63D0\u793A"}})]),t("h4",{attrs:{id:"\u5E26\u5173\u95ED\u6309\u94AE\u7684\u5168\u5C40\u63D0\u793A"}},[e._v("\u5E26\u5173\u95ED\u6309\u94AE\u7684\u5168\u5C40\u63D0\u793A "),t("a",{staticClass:"header-anchor",attrs:{href:"#\u5E26\u5173\u95ED\u6309\u94AE\u7684\u5168\u5C40\u63D0\u793A"}})]),t("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--message-close tdesign-demo-item--message"},[t("td-doc-demo",{attrs:{"demo-name":"close",languages:"OptionsAPI,CompositionAPI","data-OptionsAPI":e.DemoexamplecloseCode,"data-CompositionAPI":e.DemoexamplecloseCompositionCode,language:"markup"}},[t("div",{attrs:{slot:"action"},slot:"action"},[t("Stackblitz",{attrs:{"demo-name":"close","component-name":" message"}}),t("Codesandbox",{attrs:{"demo-name":"close","component-name":" message"}})],1),t("div",{staticClass:"tdesign-demo-item__body"},[t("Demoexampleclose")],1)])],1),t("h4",{attrs:{id:"\u4F7F\u7528\u5173\u95ED\u51FD\u6570\u63A7\u5236\u5168\u5C40\u63D0\u793A"}},[e._v("\u4F7F\u7528\u5173\u95ED\u51FD\u6570\u63A7\u5236\u5168\u5C40\u63D0\u793A "),t("a",{staticClass:"header-anchor",attrs:{href:"#\u4F7F\u7528\u5173\u95ED\u51FD\u6570\u63A7\u5236\u5168\u5C40\u63D0\u793A"}})]),t("p",[e._v("\u5982\u679C\u4E0D\u5E0C\u671B\u901A\u8FC7\u8BA1\u65F6\u5173\u95ED\uFF0C\u6216\u8005\u7528\u6237\u70B9\u51FB\u6309\u94AE\u5173\u95ED\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5173\u95ED\u51FD\u6570\u3002")]),t("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--message-toggle tdesign-demo-item--message"},[t("td-doc-demo",{attrs:{"demo-name":"toggle",languages:"OptionsAPI,CompositionAPI","data-OptionsAPI":e.DemoexampletoggleCode,"data-CompositionAPI":e.DemoexampletoggleCompositionCode,language:"markup"}},[t("div",{attrs:{slot:"action"},slot:"action"},[t("Stackblitz",{attrs:{"demo-name":"toggle","component-name":" message"}}),t("Codesandbox",{attrs:{"demo-name":"toggle","component-name":" message"}})],1),t("div",{staticClass:"tdesign-demo-item__body"},[t("Demoexampletoggle")],1)])],1),t("h4",{attrs:{id:"\u5173\u95ED\u591A\u6761\u5168\u5C40\u63D0\u793A"}},[e._v("\u5173\u95ED\u591A\u6761\u5168\u5C40\u63D0\u793A "),t("a",{staticClass:"header-anchor",attrs:{href:"#\u5173\u95ED\u591A\u6761\u5168\u5C40\u63D0\u793A"}})]),t("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--message-close-all tdesign-demo-item--message"},[t("td-doc-demo",{attrs:{"demo-name":"close-all",languages:"OptionsAPI,CompositionAPI","data-OptionsAPI":e.DemoexamplecloseallCode,"data-CompositionAPI":e.DemoexamplecloseallCompositionCode,language:"markup"}},[t("div",{attrs:{slot:"action"},slot:"action"},[t("Stackblitz",{attrs:{"demo-name":"close-all","component-name":" message"}}),t("Codesandbox",{attrs:{"demo-name":"close-all","component-name":" message"}})],1),t("div",{staticClass:"tdesign-demo-item__body"},[t("Demoexamplecloseall")],1)])],1),t("h3",{attrs:{id:"\u63A7\u5236\u5168\u5C40\u63D0\u793A\u663E\u793A\u4F4D\u7F6E"}},[e._v("\u63A7\u5236\u5168\u5C40\u63D0\u793A\u663E\u793A\u4F4D\u7F6E "),t("a",{staticClass:"header-anchor",attrs:{href:"#\u63A7\u5236\u5168\u5C40\u63D0\u793A\u663E\u793A\u4F4D\u7F6E"}})]),t("p",[e._v("\u5168\u5C40\u63D0\u793A\u663E\u793A\u4F4D\u7F6E\u53EF\u63A7\u5236\uFF0C"),t("code",[e._v("placement")]),e._v(" \u7528\u4E8E\u63A7\u5236\u5927\u6982\u4F4D\u7F6E\uFF0C"),t("code",[e._v("offset")]),e._v(" \u7528\u4E8E\u8BBE\u7F6E\u76F8\u5BF9\u4E8E "),t("code",[e._v("placement")]),e._v(" \u6240\u5728\u4F4D\u7F6E\u7684\u504F\u79FB")]),t("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--message-placement tdesign-demo-item--message"},[t("td-doc-demo",{attrs:{"demo-name":"placement",languages:"OptionsAPI,CompositionAPI","data-OptionsAPI":e.DemoexampleplacementCode,"data-CompositionAPI":e.DemoexampleplacementCompositionCode,language:"markup"}},[t("div",{attrs:{slot:"action"},slot:"action"},[t("Stackblitz",{attrs:{"demo-name":"placement","component-name":" message"}}),t("Codesandbox",{attrs:{"demo-name":"placement","component-name":" message"}})],1),t("div",{staticClass:"tdesign-demo-item__body"},[t("Demoexampleplacement")],1)])],1),t("h3",{attrs:{id:"\u63D2\u4EF6\u8C03\u7528\u4E0E\u51FD\u6570\u5F0F\u8C03\u7528"}},[e._v("\u63D2\u4EF6\u8C03\u7528\u4E0E\u51FD\u6570\u5F0F\u8C03\u7528 "),t("a",{staticClass:"header-anchor",attrs:{href:"#\u63D2\u4EF6\u8C03\u7528\u4E0E\u51FD\u6570\u5F0F\u8C03\u7528"}})]),t("p",[e._v("\u652F\u6301\u63D2\u4EF6\u5F0F\u8C03\u7528 "),t("code",[e._v("this.$message")]),e._v(" \u548C\u51FD\u6570\u5F0F\u8C03\u7528 "),t("code",[e._v("MessagePlugin")]),e._v(" \u4E24\u79CD\u65B9\u5F0F\uFF0C\u4E24\u79CD\u65B9\u5F0F\u53C2\u6570\u5B8C\u5168\u4E00\u6837\u3002")]),t("ul",[t("li",[e._v("\u793A\u4F8B\u4E00\uFF1A"),t("code",[e._v("MessagePlugin.warning('\u8BF7\u8F93\u5165\u4FE1\u606F')")]),e._v(" \u6216 "),t("code",[e._v("this.$message.warning('\u8BF7\u8F93\u5165\u4FE1\u606F')")])]),t("li",[e._v("\u793A\u4F8B\u4E8C\uFF1A"),t("code",[e._v("MessagePlugin.warning({ content: '\u8BF7\u8F93\u5165\u4FE1\u606F', duration: 5000, placement: 'top', onDurationEnd: () => {} })")])])]),t("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--message-plugin tdesign-demo-item--message"},[t("td-doc-demo",{attrs:{"demo-name":"plugin",languages:"OptionsAPI,CompositionAPI","data-OptionsAPI":e.DemoexamplepluginCode,"data-CompositionAPI":e.DemoexamplepluginCompositionCode,language:"markup"}},[t("div",{attrs:{slot:"action"},slot:"action"},[t("Stackblitz",{attrs:{"demo-name":"plugin","component-name":" message"}}),t("Codesandbox",{attrs:{"demo-name":"plugin","component-name":" message"}})],1),t("div",{staticClass:"tdesign-demo-item__body"},[t("Demoexampleplugin")],1)])],1),t("h3",{attrs:{id:"\u5168\u5C40\u65B9\u6CD5"}},[e._v("\u5168\u5C40\u65B9\u6CD5 "),t("a",{staticClass:"header-anchor",attrs:{href:"#\u5168\u5C40\u65B9\u6CD5"}})]),t("p",[e._v("\u8FD8\u63D0\u4F9B\u4E86\u5168\u5C40\u914D\u7F6E\u65B9\u6CD5")]),t("ul",[t("li",[t("code",[e._v("this.$message.config(placement, attach, offset, zIndex)")])]),t("li",[t("code",[e._v("MessagePlugin.config(placement, attach, offset, zIndex)")])])]),t("div",{staticClass:"language-javascript"},[t("pre",{pre:!0},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("$message"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("config")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'top'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'body'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("20")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("9999")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(`
MessagePlugin`),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("config")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'top'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'body'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("20")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("9999")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(`
`)])])])],1),t("td-contributors",{attrs:{platform:"web",framework:"vue","component-name":"message"}})],1),t("div",{directives:[{name:"show",rawName:"v-show",value:e.tab==="api",expression:"tab === 'api'"}],attrs:{name:"API"}},[t("nav",{staticClass:"tdesign-toc_container"},[t("ol",{staticClass:"tdesign-toc_list"},[t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#message-props"}},[e._v("Message Props")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#message-events"}},[e._v("Message Events")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#messageoptions"}},[e._v("MessageOptions")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#messageplugin"}},[e._v("MessagePlugin")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#messageplugin-info"}},[e._v("MessagePlugin.info")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#messageplugin-error"}},[e._v("MessagePlugin.error")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#messageplugin-warning"}},[e._v("MessagePlugin.warning")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#messageplugin-success"}},[e._v("MessagePlugin.success")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#messageplugin-loading"}},[e._v("MessagePlugin.loading")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#messageplugin-question"}},[e._v("MessagePlugin.question")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#messageplugin-close"}},[e._v("MessagePlugin.close")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#messageplugin-closeall"}},[e._v("MessagePlugin.closeAll")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#messageplugin-config"}},[e._v("MessagePlugin.config")])])])]),t("h3",{attrs:{id:"message-props"}},[e._v("Message Props "),t("a",{staticClass:"header-anchor",attrs:{href:"#message-props"}})]),t("table",[t("thead",[t("tr",[t("th",[e._v("\u540D\u79F0")]),t("th",[e._v("\u7C7B\u578B")]),t("th",[e._v("\u9ED8\u8BA4\u503C")]),t("th",[e._v("\u8BF4\u660E")]),t("th",[e._v("\u5FC5\u4F20")])])]),t("tbody",[t("tr",[t("td",[e._v("closeBtn")]),t("td",[e._v("String / Boolean / Slot / Function")]),t("td",[e._v("undefined")]),t("td",[e._v("\u5173\u95ED\u6309\u94AE\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49\u3002\u503C\u4E3A true \u663E\u793A\u9ED8\u8BA4\u5173\u95ED\u6309\u94AE\uFF0C\u503C\u4E3A false \u4E0D\u663E\u793A\u5173\u95ED\u6309\u94AE\u3002\u503C\u7C7B\u578B\u4E3A string \u5219\u76F4\u63A5\u663E\u793A\u503C\uFF0C\u5982\uFF1A\u201C\u5173\u95ED\u201D\u3002\u4E5F\u53EF\u4EE5\u5B8C\u5168\u81EA\u5B9A\u4E49\u6309\u94AE\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("string | boolean | TNode")]),e._v("\u3002"),t("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("\u901A\u7528\u7C7B\u578B\u5B9A\u4E49")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("content")]),t("td",[e._v("String / Slot / Function")]),t("td",[e._v("-")]),t("td",[e._v("\u7528\u4E8E\u81EA\u5B9A\u4E49\u6D88\u606F\u5F39\u51FA\u5185\u5BB9\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("string | TNode")]),e._v("\u3002"),t("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("\u901A\u7528\u7C7B\u578B\u5B9A\u4E49")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("duration")]),t("td",[e._v("Number")]),t("td",[e._v("3000")]),t("td",[e._v("\u6D88\u606F\u5185\u7F6E\u8BA1\u65F6\u5668\uFF0C\u8BA1\u65F6\u5230\u8FBE\u65F6\u4F1A\u89E6\u53D1 duration-end \u4E8B\u4EF6\u3002\u5355\u4F4D\uFF1A\u6BEB\u79D2\u3002\u503C\u4E3A 0 \u5219\u8868\u793A\u6CA1\u6709\u8BA1\u65F6\u5668\u3002")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("icon")]),t("td",[e._v("Boolean / Slot / Function")]),t("td",[e._v("true")]),t("td",[e._v("\u7528\u4E8E\u81EA\u5B9A\u4E49\u6D88\u606F\u524D\u9762\u7684\u56FE\u6807\uFF0C\u4F18\u5148\u7EA7\u5927\u4E8E theme \u8BBE\u5B9A\u7684\u56FE\u6807\u3002\u503C\u4E3A false \u5219\u4E0D\u663E\u793A\u56FE\u6807\uFF0C\u503C\u4E3A true \u663E\u793A theme \u8BBE\u5B9A\u56FE\u6807\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("boolean | TNode")]),e._v("\u3002"),t("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("\u901A\u7528\u7C7B\u578B\u5B9A\u4E49")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("theme")]),t("td",[e._v("String")]),t("td",[e._v("info")]),t("td",[e._v("\u6D88\u606F\u7EC4\u4EF6\u98CE\u683C\u3002\u53EF\u9009\u9879\uFF1Ainfo/success/warning/error/question/loading\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("MessageThemeList")]),e._v(" "),t("code",[e._v("type MessageThemeList = 'info' | 'success' | 'warning' | 'error' | 'question' | 'loading'")]),e._v("\u3002"),t("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/tree/develop/src/message/type.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("\u8BE6\u7EC6\u7C7B\u578B\u5B9A\u4E49")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("onClose")]),t("td",[e._v("Function")]),t("td"),t("td",[e._v("TS \u7C7B\u578B\uFF1A"),t("code",[e._v("(context: { trigger: 'close-click' | 'duration-end', e?: MouseEvent }) => void")]),t("br"),e._v("\u5173\u95ED\u6D88\u606F\u65F6\u89E6\u53D1")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("onCloseBtnClick")]),t("td",[e._v("Function")]),t("td"),t("td",[e._v("TS \u7C7B\u578B\uFF1A"),t("code",[e._v("(context: { e: MouseEvent }) => void")]),t("br"),e._v("\u5F53\u5173\u95ED\u6309\u94AE\u5B58\u5728\u65F6\uFF0C\u7528\u6237\u70B9\u51FB\u5173\u95ED\u6309\u94AE\u89E6\u53D1")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("onDurationEnd")]),t("td",[e._v("Function")]),t("td"),t("td",[e._v("TS \u7C7B\u578B\uFF1A"),t("code",[e._v("() => void")]),t("br"),e._v("\u8BA1\u65F6\u7ED3\u675F\u540E\u89E6\u53D1")]),t("td",[e._v("N")])])])]),t("h3",{attrs:{id:"message-events"}},[e._v("Message Events "),t("a",{staticClass:"header-anchor",attrs:{href:"#message-events"}})]),t("table",[t("thead",[t("tr",[t("th",[e._v("\u540D\u79F0")]),t("th",[e._v("\u53C2\u6570")]),t("th",[e._v("\u63CF\u8FF0")])])]),t("tbody",[t("tr",[t("td",[e._v("close")]),t("td",[t("code",[e._v("(context: { trigger: 'close-click' | 'duration-end', e?: MouseEvent })")])]),t("td",[e._v("\u5173\u95ED\u6D88\u606F\u65F6\u89E6\u53D1")])]),t("tr",[t("td",[e._v("close-btn-click")]),t("td",[t("code",[e._v("(context: { e: MouseEvent })")])]),t("td",[e._v("\u5F53\u5173\u95ED\u6309\u94AE\u5B58\u5728\u65F6\uFF0C\u7528\u6237\u70B9\u51FB\u5173\u95ED\u6309\u94AE\u89E6\u53D1")])]),t("tr",[t("td",[e._v("duration-end")]),t("td",[e._v("-")]),t("td",[e._v("\u8BA1\u65F6\u7ED3\u675F\u540E\u89E6\u53D1")])])])]),t("h3",{attrs:{id:"messageoptions"}},[e._v("MessageOptions "),t("a",{staticClass:"header-anchor",attrs:{href:"#messageoptions"}})]),t("table",[t("thead",[t("tr",[t("th",[e._v("\u540D\u79F0")]),t("th",[e._v("\u7C7B\u578B")]),t("th",[e._v("\u9ED8\u8BA4\u503C")]),t("th",[e._v("\u8BF4\u660E")]),t("th",[e._v("\u5FC5\u4F20")])])]),t("tbody",[t("tr",[t("td",[e._v("attach")]),t("td",[e._v("String / Function")]),t("td",[e._v("'body'")]),t("td",[e._v("\u6307\u5B9A\u5F39\u6846\u6302\u8F7D\u7684\u7236\u8282\u70B9\u3002\u6570\u636E\u7C7B\u578B\u4E3A String \u65F6\uFF0C\u4F1A\u88AB\u5F53\u4F5C\u9009\u62E9\u5668\u5904\u7406\uFF0C\u8FDB\u884C\u8282\u70B9\u67E5\u8BE2\u3002\u793A\u4F8B\uFF1A'body' \u6216 () => document.body\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("AttachNode")]),e._v("\u3002"),t("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("\u901A\u7528\u7C7B\u578B\u5B9A\u4E49")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("className")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u7C7B\u540D")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("offset")]),t("td",[e._v("Array")]),t("td",[e._v("-")]),t("td",[e._v("\u76F8\u5BF9\u4E8E placement \u7684\u504F\u79FB\u91CF\uFF0C\u793A\u4F8B\uFF1A[-10, 20] \u6216 ['10em', '8rem']\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("Array<string | number>")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("placement")]),t("td",[e._v("String")]),t("td",[e._v("top")]),t("td",[e._v("\u5F39\u51FA\u6D88\u606F\u4F4D\u7F6E\u3002\u53EF\u9009\u9879\uFF1Acenter/top/left/right/bottom/top-left/top-right/bottom-left/bottom-right\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("MessagePlacementList")]),e._v(" "),t("code",[e._v("type MessagePlacementList = 'center' | 'top' | 'left' | 'right' | 'bottom' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'")]),e._v("\u3002"),t("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/tree/develop/src/message/type.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("\u8BE6\u7EC6\u7C7B\u578B\u5B9A\u4E49")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("style")]),t("td",[e._v("Object")]),t("td",[e._v("-")]),t("td",[e._v("\u5185\u655B\u6837\u5F0F\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("CSSProperties")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("zIndex")]),t("td",[e._v("Number")]),t("td",[e._v("5000")]),t("td",[e._v("\u6D88\u606F\u5C42\u7EA7")]),t("td",[e._v("N")])]),t("tr",[t("td",[t("code",[e._v("MessageProps")])]),t("td",[e._v("-")]),t("td",[e._v("-")]),t("td",[e._v("\u7EE7\u627F "),t("code",[e._v("MessageProps")]),e._v(" \u4E2D\u7684\u5168\u90E8 API")]),t("td",[e._v("N")])])])]),t("h3",{attrs:{id:"messageplugin"}},[e._v("MessagePlugin "),t("a",{staticClass:"header-anchor",attrs:{href:"#messageplugin"}})]),t("p",[e._v("\u540C\u65F6\u4E5F\u652F\u6301 "),t("code",[e._v("this.$message")]),e._v("\u3002")]),t("table",[t("thead",[t("tr",[t("th",[e._v("\u53C2\u6570\u540D\u79F0")]),t("th",[e._v("\u53C2\u6570\u7C7B\u578B")]),t("th",[e._v("\u53C2\u6570\u9ED8\u8BA4\u503C")]),t("th",[e._v("\u53C2\u6570\u8BF4\u660E")])])]),t("tbody",[t("tr",[t("td",[e._v("theme")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u5FC5\u9700\u3002\u6D88\u606F\u7C7B\u578B\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("MessageThemeList")])])]),t("tr",[t("td",[e._v("message")]),t("td",[e._v("String / Object")]),t("td",[e._v("-")]),t("td",[e._v("\u5FC5\u9700\u3002\u6D88\u606F\u5185\u5BB9\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("string | MessageOptions")])])]),t("tr",[t("td",[e._v("duration")]),t("td",[e._v("Number")]),t("td",[e._v("3000")]),t("td",[e._v("\u6D88\u606F\u663E\u793A\u65F6\u957F\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2\u3002\u503C\u4E3A 0 \u8868\u793A\u6C38\u4E45\u663E\u793A")])])])]),t("h3",{attrs:{id:"messageplugin-info"}},[e._v("MessagePlugin.info "),t("a",{staticClass:"header-anchor",attrs:{href:"#messageplugin-info"}})]),t("p",[e._v("\u540C\u65F6\u4E5F\u652F\u6301 "),t("code",[e._v("this.$message.info")]),e._v("\u3002")]),t("table",[t("thead",[t("tr",[t("th",[e._v("\u53C2\u6570\u540D\u79F0")]),t("th",[e._v("\u53C2\u6570\u7C7B\u578B")]),t("th",[e._v("\u53C2\u6570\u9ED8\u8BA4\u503C")]),t("th",[e._v("\u53C2\u6570\u8BF4\u660E")])])]),t("tbody",[t("tr",[t("td",[e._v("message")]),t("td",[e._v("String / Object")]),t("td",[e._v("-")]),t("td",[e._v("\u5FC5\u9700\u3002\u6D88\u606F\u5185\u5BB9\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("string | MessageInfoOptions")]),e._v(" "),t("code",[e._v("type MessageInfoOptions = Omit<MessageOptions, 'theme'>")]),e._v("\u3002"),t("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/tree/develop/src/message/type.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("\u8BE6\u7EC6\u7C7B\u578B\u5B9A\u4E49")])])]),t("tr",[t("td",[e._v("duration")]),t("td",[e._v("Number")]),t("td",[e._v("3000")]),t("td",[e._v("\u6D88\u606F\u663E\u793A\u65F6\u957F\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2\u3002\u503C\u4E3A 0 \u8868\u793A\u6C38\u4E45\u663E\u793A")])])])]),t("h3",{attrs:{id:"messageplugin-error"}},[e._v("MessagePlugin.error "),t("a",{staticClass:"header-anchor",attrs:{href:"#messageplugin-error"}})]),t("p",[e._v("\u540C\u65F6\u4E5F\u652F\u6301 "),t("code",[e._v("this.$message.error")]),e._v("\u3002")]),t("table",[t("thead",[t("tr",[t("th",[e._v("\u53C2\u6570\u540D\u79F0")]),t("th",[e._v("\u53C2\u6570\u7C7B\u578B")]),t("th",[e._v("\u53C2\u6570\u9ED8\u8BA4\u503C")]),t("th",[e._v("\u53C2\u6570\u8BF4\u660E")])])]),t("tbody",[t("tr",[t("td",[e._v("message")]),t("td",[e._v("String / Object")]),t("td",[e._v("-")]),t("td",[e._v("\u5FC5\u9700\u3002\u6D88\u606F\u5185\u5BB9\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("string | MessageInfoOptions")])])]),t("tr",[t("td",[e._v("duration")]),t("td",[e._v("Number")]),t("td",[e._v("3000")]),t("td",[e._v("\u6D88\u606F\u663E\u793A\u65F6\u957F\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2\u3002\u503C\u4E3A 0 \u8868\u793A\u6C38\u4E45\u663E\u793A")])])])]),t("h3",{attrs:{id:"messageplugin-warning"}},[e._v("MessagePlugin.warning "),t("a",{staticClass:"header-anchor",attrs:{href:"#messageplugin-warning"}})]),t("p",[e._v("\u540C\u65F6\u4E5F\u652F\u6301 "),t("code",[e._v("this.$message.warning")]),e._v("\u3002")]),t("table",[t("thead",[t("tr",[t("th",[e._v("\u53C2\u6570\u540D\u79F0")]),t("th",[e._v("\u53C2\u6570\u7C7B\u578B")]),t("th",[e._v("\u53C2\u6570\u9ED8\u8BA4\u503C")]),t("th",[e._v("\u53C2\u6570\u8BF4\u660E")])])]),t("tbody",[t("tr",[t("td",[e._v("message")]),t("td",[e._v("String / Object")]),t("td",[e._v("-")]),t("td",[e._v("\u5FC5\u9700\u3002\u6D88\u606F\u5185\u5BB9\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("string | MessageInfoOptions")])])]),t("tr",[t("td",[e._v("duration")]),t("td",[e._v("Number")]),t("td",[e._v("3000")]),t("td",[e._v("\u6D88\u606F\u663E\u793A\u65F6\u957F\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2\u3002\u503C\u4E3A 0 \u8868\u793A\u6C38\u4E45\u663E\u793A")])])])]),t("h3",{attrs:{id:"messageplugin-success"}},[e._v("MessagePlugin.success "),t("a",{staticClass:"header-anchor",attrs:{href:"#messageplugin-success"}})]),t("p",[e._v("\u540C\u65F6\u4E5F\u652F\u6301 "),t("code",[e._v("this.$message.success")]),e._v("\u3002")]),t("table",[t("thead",[t("tr",[t("th",[e._v("\u53C2\u6570\u540D\u79F0")]),t("th",[e._v("\u53C2\u6570\u7C7B\u578B")]),t("th",[e._v("\u53C2\u6570\u9ED8\u8BA4\u503C")]),t("th",[e._v("\u53C2\u6570\u8BF4\u660E")])])]),t("tbody",[t("tr",[t("td",[e._v("message")]),t("td",[e._v("String / Object")]),t("td",[e._v("-")]),t("td",[e._v("\u5FC5\u9700\u3002\u6D88\u606F\u5185\u5BB9\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("string | MessageInfoOptions")])])]),t("tr",[t("td",[e._v("duration")]),t("td",[e._v("Number")]),t("td",[e._v("3000")]),t("td",[e._v("\u6D88\u606F\u663E\u793A\u65F6\u957F\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2\u3002\u503C\u4E3A 0 \u8868\u793A\u6C38\u4E45\u663E\u793A")])])])]),t("h3",{attrs:{id:"messageplugin-loading"}},[e._v("MessagePlugin.loading "),t("a",{staticClass:"header-anchor",attrs:{href:"#messageplugin-loading"}})]),t("p",[e._v("\u540C\u65F6\u4E5F\u652F\u6301 "),t("code",[e._v("this.$message.loading")]),e._v("\u3002")]),t("table",[t("thead",[t("tr",[t("th",[e._v("\u53C2\u6570\u540D\u79F0")]),t("th",[e._v("\u53C2\u6570\u7C7B\u578B")]),t("th",[e._v("\u53C2\u6570\u9ED8\u8BA4\u503C")]),t("th",[e._v("\u53C2\u6570\u8BF4\u660E")])])]),t("tbody",[t("tr",[t("td",[e._v("message")]),t("td",[e._v("String / Object")]),t("td",[e._v("-")]),t("td",[e._v("\u5FC5\u9700\u3002\u6D88\u606F\u63D0\u9192\u5185\u5BB9\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("string | MessageInfoOptions")])])]),t("tr",[t("td",[e._v("duration")]),t("td",[e._v("Number")]),t("td",[e._v("3000")]),t("td",[e._v("\u6D88\u606F\u663E\u793A\u65F6\u957F\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2\u3002\u503C\u4E3A 0 \u8868\u793A\u6C38\u4E45\u663E\u793A")])])])]),t("h3",{attrs:{id:"messageplugin-question"}},[e._v("MessagePlugin.question "),t("a",{staticClass:"header-anchor",attrs:{href:"#messageplugin-question"}})]),t("p",[e._v("\u540C\u65F6\u4E5F\u652F\u6301 "),t("code",[e._v("this.$message.question")]),e._v("\u3002")]),t("table",[t("thead",[t("tr",[t("th",[e._v("\u53C2\u6570\u540D\u79F0")]),t("th",[e._v("\u53C2\u6570\u7C7B\u578B")]),t("th",[e._v("\u53C2\u6570\u9ED8\u8BA4\u503C")]),t("th",[e._v("\u53C2\u6570\u8BF4\u660E")])])]),t("tbody",[t("tr",[t("td",[e._v("message")]),t("td",[e._v("String / Object")]),t("td",[e._v("-")]),t("td",[e._v("\u5FC5\u9700\u3002\u6D88\u606F\u5185\u5BB9\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("string | MessageInfoOptions")])])]),t("tr",[t("td",[e._v("duration")]),t("td",[e._v("Number")]),t("td",[e._v("3000")]),t("td",[e._v("\u6D88\u606F\u663E\u793A\u65F6\u957F\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2\u3002\u503C\u4E3A 0 \u8868\u793A\u6C38\u4E45\u663E\u793A")])])])]),t("h3",{attrs:{id:"messageplugin-close"}},[e._v("MessagePlugin.close "),t("a",{staticClass:"header-anchor",attrs:{href:"#messageplugin-close"}})]),t("p",[e._v("\u540C\u65F6\u4E5F\u652F\u6301 "),t("code",[e._v("this.$message.close")]),e._v("\u3002")]),t("table",[t("thead",[t("tr",[t("th",[e._v("\u53C2\u6570\u540D\u79F0")]),t("th",[e._v("\u53C2\u6570\u7C7B\u578B")]),t("th",[e._v("\u53C2\u6570\u9ED8\u8BA4\u503C")]),t("th",[e._v("\u53C2\u6570\u8BF4\u660E")])])]),t("tbody",[t("tr",[t("td",[e._v("options")]),t("td",[e._v("Object")]),t("td",[e._v("-")]),t("td",[e._v("\u5FC5\u9700\u3002\u8BE5\u63D2\u4EF6\u53C2\u6570\u4E3A $Message.info() \u7B49\u63D2\u4EF6\u6267\u884C\u540E\u7684\u8FD4\u56DE\u503C\u3002\u793A\u4F8B\uFF1A"),t("code",[e._v("const msg = $Message.info({}); $Message.close(msg)")]),e._v("\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("Promise<MessageInstance>")])])])])]),t("h3",{attrs:{id:"messageplugin-closeall"}},[e._v("MessagePlugin.closeAll "),t("a",{staticClass:"header-anchor",attrs:{href:"#messageplugin-closeall"}})]),t("p",[e._v("\u540C\u65F6\u4E5F\u652F\u6301 "),t("code",[e._v("this.$message.closeAll")]),e._v("\u3002")]),t("table",[t("thead",[t("tr",[t("th",[e._v("\u53C2\u6570\u540D\u79F0")]),t("th",[e._v("\u53C2\u6570\u7C7B\u578B")]),t("th",[e._v("\u53C2\u6570\u9ED8\u8BA4\u503C")]),t("th",[e._v("\u53C2\u6570\u8BF4\u660E")])])]),t("tbody",[t("tr",[t("td",[e._v("-")]),t("td",[e._v("-")]),t("td",[e._v("-")]),t("td",[e._v("-")])])])]),t("h3",{attrs:{id:"messageplugin-config"}},[e._v("MessagePlugin.config "),t("a",{staticClass:"header-anchor",attrs:{href:"#messageplugin-config"}})]),t("p",[e._v("\u540C\u65F6\u4E5F\u652F\u6301 "),t("code",[e._v("this.$message.config")]),e._v("\u3002")]),t("table",[t("thead",[t("tr",[t("th",[e._v("\u53C2\u6570\u540D\u79F0")]),t("th",[e._v("\u53C2\u6570\u7C7B\u578B")]),t("th",[e._v("\u53C2\u6570\u9ED8\u8BA4\u503C")]),t("th",[e._v("\u53C2\u6570\u8BF4\u660E")])])]),t("tbody",[t("tr",[t("td",[e._v("message")]),t("td",[e._v("Object")]),t("td",[e._v("-")]),t("td",[e._v("\u5FC5\u9700\u3002\u5168\u5C40\u63D0\u9192\u63D2\u4EF6\u5168\u5C40\u914D\u7F6E\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("MessageOptions")])])])])])]),t("div",{directives:[{name:"show",rawName:"v-show",value:e.tab==="design",expression:"tab === 'design'"}],attrs:{name:"DESIGN"}},[t("nav",{staticClass:"tdesign-toc_container"},[t("ol",{staticClass:"tdesign-toc_list"},[t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u4F55\u65F6\u4F7F\u7528"}},[e._v("\u4F55\u65F6\u4F7F\u7528")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u4E0E\u9875\u9762\u5E03\u5C40\u76F8\u5173"}},[e._v("\u4E0E\u9875\u9762\u5E03\u5C40\u76F8\u5173")]),t("ol",{staticClass:"tdesign-toc_list"})]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u76F8\u4F3C\u7EC4\u4EF6"}},[e._v("\u76F8\u4F3C\u7EC4\u4EF6")])])])]),t("h3",{attrs:{id:"\u4F55\u65F6\u4F7F\u7528"}},[e._v("\u4F55\u65F6\u4F7F\u7528 "),t("a",{staticClass:"header-anchor",attrs:{href:"#\u4F55\u65F6\u4F7F\u7528"}})]),t("p",[e._v("\u5728\u5B8C\u6210\u67D0\u4E2A\u72EC\u7ACB\u9875\u9762\u540E\uFF0C\u9700\u8981\u53CD\u9988\u65F6\uFF1B")]),t("p",[e._v("\u5728\u67D0\u4E2A\u64CD\u4F5C\u533A\u57DF\u6216\u7CFB\u5217\u64CD\u4F5C\u5B8C\u6210\u540E\uFF0C\u9700\u8981\u603B\u4F53\u53CD\u9988\u65F6\u3002")]),t("h3",{attrs:{id:"\u4E0E\u9875\u9762\u5E03\u5C40\u76F8\u5173"}},[e._v("\u4E0E\u9875\u9762\u5E03\u5C40\u76F8\u5173 "),t("a",{staticClass:"header-anchor",attrs:{href:"#\u4E0E\u9875\u9762\u5E03\u5C40\u76F8\u5173"}})]),t("h5",{attrs:{id:"\u5168\u5C40\u63D0\u793A\u5E38\u51FA\u73B0\u5728\u9875\u9762\u9876\u90E8\u5C45\u4E2D\u3001\u5185\u5BB9\u533A\u53F3\u4E0A\u65B9\u548C\u5DE6\u4E0B\u65B9\u7B49\u4F4D\u7F6E\uFF0C\u63D0\u793A\u7528\u6237\u5374\u4E0D\u8FC7\u4E8E\u5E72\u6270"}},[e._v("\u5168\u5C40\u63D0\u793A\u5E38\u51FA\u73B0\u5728\u9875\u9762\u9876\u90E8\u5C45\u4E2D\u3001\u5185\u5BB9\u533A\u53F3\u4E0A\u65B9\u548C\u5DE6\u4E0B\u65B9\u7B49\u4F4D\u7F6E\uFF0C\u63D0\u793A\u7528\u6237\u5374\u4E0D\u8FC7\u4E8E\u5E72\u6270 "),t("a",{staticClass:"header-anchor",attrs:{href:"#\u5168\u5C40\u63D0\u793A\u5E38\u51FA\u73B0\u5728\u9875\u9762\u9876\u90E8\u5C45\u4E2D\u3001\u5185\u5BB9\u533A\u53F3\u4E0A\u65B9\u548C\u5DE6\u4E0B\u65B9\u7B49\u4F4D\u7F6E\uFF0C\u63D0\u793A\u7528\u6237\u5374\u4E0D\u8FC7\u4E8E\u5E72\u6270"}})]),t("div",{staticClass:"legend"},[t("div",{staticClass:"item"},[t("img",{attrs:{src:"https://tdesign.gtimg.com/site/design/guide/message/message-1@2x.png"}}),t("em",[e._v("\u56FE\u793A\uFF1A\u4E0A\u65B9\u5C45\u4E2D")])]),t("div",{staticClass:"item"},[t("img",{attrs:{src:"https://tdesign.gtimg.com/site/design/guide/message/message-2@2x.png"}}),t("em",[e._v("\u56FE\u793A\uFF1A\u53F3\u4E0A\u89D2")])]),t("div",{staticClass:"item"},[t("img",{attrs:{src:"https://tdesign.gtimg.com/site/design/guide/message/message-3@2x.png"}}),t("em",[e._v("\u56FE\u793A\uFF1A\u5DE6\u4E0B\u89D2")])])]),t("h3",{attrs:{id:"\u76F8\u4F3C\u7EC4\u4EF6"}},[e._v("\u76F8\u4F3C\u7EC4\u4EF6 "),t("a",{staticClass:"header-anchor",attrs:{href:"#\u76F8\u4F3C\u7EC4\u4EF6"}})]),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"left"}},[e._v("\u76F8\u4F3C\u7EC4\u4EF6")]),t("th",{staticStyle:{"text-align":"left"}},[e._v("\u4F55\u65F6\u4F7F\u7528")])])]),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"left"}},[t("a",{attrs:{href:"./message"}},[e._v("\u5168\u5C40\u63D0\u793A")])]),t("td",{staticStyle:{"text-align":"left"}},[e._v("\u5BF9\u7528\u6237\u7684\u64CD\u4F5C\u4F5C\u51FA\u8F7B\u91CF\u7684\u5168\u5C40\u53CD\u9988\u3002")])]),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[t("a",{attrs:{href:"./Alert"}},[e._v("\u8B66\u544A")])]),t("td",{staticStyle:{"text-align":"left"}},[e._v("\u8B66\u544A\u5E38\u7528\u4E8E\u627F\u8F7D\u7AD9\u5185\u76F8\u5173\u4EA7\u54C1\u67D0\u9879\u529F\u80FD\u7684\u89E3\u91CA\u8BF4\u660E\u3001\u4F7F\u7528\u6CE8\u610F\u4E8B\u9879\u7B49\uFF0C\u7F6E\u4E8E\u5185\u5BB9\u5C55\u793A\u533A\u57DF\u9876\u90E8\uFF0C\u975E\u60AC\u6D6E\u5C42\u3002")])]),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[t("a",{attrs:{href:"./Notification"}},[e._v("\u6D88\u606F\u901A\u77E5")])]),t("td",{staticStyle:{"text-align":"left"}},[e._v("\u9700\u8981\u63D0\u9192\u7528\u6237\u6765\u81EA\u7CFB\u7EDF\u7684\u6D88\u606F\uFF0C\u4E14\u4E0D\u6253\u65AD\u7528\u6237\u65F6\uFF1B\u5E26\u6709\u89E3\u91CA\u63CF\u8FF0\u7684\u63D0\u9192\u5185\u5BB9\u65F6\u3002")])])])])]),t("div",{staticStyle:{"margin-top":"48px"}},[t("td-doc-history",{key:e.lastUpdated,attrs:{time:e.lastUpdated}})],1),t("td-doc-footer",{attrs:{slot:"doc-footer"},slot:"doc-footer"})],1)},A=[];a._withStripped=!0;const N={components:{Usage:v,Demoexamplebase:l,Demoexampleloading:r,Demoexampleclose:c,Demoexampletoggle:m,Demoexamplecloseall:g,Demoexampleplacement:d,Demoexampleplugin:p},data(){return{DemoexamplebaseCode:u,DemoexamplebaseCompositionCode:_,DemoexampleloadingCode:h,DemoexampleloadingCompositionCode:b,DemoexamplecloseCode:k,DemoexamplecloseCompositionCode:M,DemoexampletoggleCode:x,DemoexampletoggleCompositionCode:P,DemoexamplecloseallCode:y,DemoexamplecloseallCompositionCode:S,DemoexampleplacementCode:$,DemoexampleplacementCompositionCode:w,DemoexamplepluginCode:D,DemoexamplepluginCompositionCode:I}},computed:{lastUpdated(){return this.tab==="design"?1739008828e3:1740128904e3},tab:{get(){return this.$route.query.tab||"demo"},set(e){this.$route.query.tab!==e&&this.$router.push({query:{tab:e}})}}},mounted(){const{tdDocContent:e,tdDocHeader:n,tdDocTabs:t}=this.$refs;n&&(n.docInfo={title:"Message \u5168\u5C40\u63D0\u793A",desc:"\u5BF9\u7528\u6237\u7684\u64CD\u4F5C\u4F5C\u51FA\u8F7B\u91CF\u7684\u5168\u5C40\u53CD\u9988\u3002"}),document.title="Message \u5168\u5C40\u63D0\u793A | TDesign",t&&(t.tabs=[{tab:"demo",name:"\u793A\u4F8B"},{tab:"api",name:"API"},{tab:"design",name:"\u6307\u5357"}],t.onchange=({detail:i})=>this.tab=i),f.highlightAll(),this.$emit("loaded",()=>{e.pageStatus="show"})}},s={};var o=C(N,a,A,!1,O,null,null,null);function O(e){for(let n in s)this[n]=s[n]}o.options.__file="../src/message/message.md";var B=function(){return o.exports}();export{B as default};
