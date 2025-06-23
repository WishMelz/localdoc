import{Y as s,n as v}from"./index.663c003f.js";var y=`<template>
  <div>
    <t-button theme="primary" @click="visible = true">\u57FA\u7840\u786E\u8BA4\u5BF9\u8BDD\u6846</t-button>
    <!-- :onClose="onClose" \u548C @close="onClose" \u7B49\u6548 -->
    <!-- :onConfirm="onConfirm" \u548C @confirm="onConfirm" \u7B49\u6548 -->
    <!-- :onCancel="onCancel" \u548C @cancel="onCancel" \u7B49\u6548 -->
    <!-- :onEscKeydown="onEscKeydown" \u548C @escKeydown="onEscKeydown" \u7B49\u6548 -->
    <t-dialog
      header="\u5BF9\u8BDD\u6846\u6807\u9898"
      body="\u5BF9\u8BDD\u6846\u5185\u5BB9"
      :visible.sync="visible"
      @confirm="onConfirm"
      width="40%"
      :confirmOnEnter="true"
      :onConfirm="onConfirmAnother"
      :onCancel="onCancel"
      :onEscKeydown="onKeydownEsc"
      :onCloseBtnClick="onClickCloseBtn"
      :onOverlayClick="onClickOverlay"
      :onClose="close"
    >
      <t-space direction="vertical" style="width: 100%">
        <t-button theme="primary" @click="visible1 = true">\u5F39\u7A97\u4E8C</t-button>
        <t-pagination v-model="current" :total="30" />
      </t-space>
    </t-dialog>
    <t-dialog header="\u5BF9\u8BDD\u6846\u6807\u9898\u4E8C" body="\u5BF9\u8BDD\u6846\u5185\u5BB9\u4E8C" :visible.sync="visible1" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
      visible1: false,
      current: 1,
    };
  },
  methods: {
    onConfirm(context) {
      console.log('@confirm\u4E0EonConfirm\u4EFB\u9009\u4E00\u79CD\u65B9\u5F0F\u5373\u53EF\uFF0C\u5176\u4ED6\u51E0\u4E2A\u4E8B\u4EF6\u7C7B\u4F3C', context);
      this.visible = false;
    },
    onConfirmAnother(context) {
      console.log('\u70B9\u51FB\u4E86\u786E\u8BA4\u6309\u94AE', context);
    },
    close(context) {
      console.log('\u5173\u95ED\u5F39\u7A97\uFF0C\u70B9\u51FB\u5173\u95ED\u6309\u94AE\u3001\u6309\u4E0BESC\u3001\u70B9\u51FB\u8499\u5C42\u7B49\u89E6\u53D1', context);
    },
    onCancel(context) {
      console.log('\u70B9\u51FB\u4E86\u53D6\u6D88\u6309\u94AE', context);
    },
    onKeydownEsc(context) {
      console.log('\u6309\u4E0B\u4E86ESC', context);
    },
    onClickCloseBtn(context) {
      console.log('\u70B9\u51FB\u4E86\u5173\u95ED\u6309\u94AE', context);
    },
    onClickOverlay(context) {
      console.log('\u70B9\u51FB\u4E86\u8499\u5C42', context);
    },
  },
};
<\/script>
`,C=`<template>
  <div>
    <t-button theme="primary" @click="visible = true">\u57FA\u7840\u786E\u8BA4\u5BF9\u8BDD\u6846</t-button>
    <!-- :onClose="onClose" \u548C @close="onClose" \u7B49\u6548 -->
    <!-- :onConfirm="onConfirm" \u548C @confirm="onConfirm" \u7B49\u6548 -->
    <!-- :onCancel="onCancel" \u548C @cancel="onCancel" \u7B49\u6548 -->
    <!-- :onEscKeydown="onEscKeydown" \u548C @escKeydown="onEscKeydown" \u7B49\u6548 -->
    <t-dialog
      header="\u5BF9\u8BDD\u6846\u6807\u9898"
      body="\u5BF9\u8BDD\u6846\u5185\u5BB9"
      :visible.sync="visible"
      @confirm="onConfirm"
      width="40%"
      :confirmOnEnter="true"
      :onConfirm="onConfirmAnother"
      :onCancel="onCancel"
      :onEscKeydown="onKeydownEsc"
      :onCloseBtnClick="onClickCloseBtn"
      :onOverlayClick="onClickOverlay"
      :onClose="close"
    >
      <t-space direction="vertical" style="width: 100%">
        <t-button theme="primary" @click="visible1 = true">\u5F39\u7A97\u4E8C</t-button>
        <t-pagination v-model="current" :total="30" />
      </t-space>
    </t-dialog>
    <t-dialog header="\u5BF9\u8BDD\u6846\u6807\u9898\u4E8C" body="\u5BF9\u8BDD\u6846\u5185\u5BB9\u4E8C" :visible.sync="visible1" />
  </div>
</template>
<script setup>
import { ref } from 'vue';

const visible = ref(false);
const visible1 = ref(false);
const current = ref(1);
const onConfirm = (context) => {
  console.log('@confirm\u4E0EonConfirm\u4EFB\u9009\u4E00\u79CD\u65B9\u5F0F\u5373\u53EF\uFF0C\u5176\u4ED6\u51E0\u4E2A\u4E8B\u4EF6\u7C7B\u4F3C', context);
  visible.value = false;
};
const onConfirmAnother = (context) => {
  console.log('\u70B9\u51FB\u4E86\u786E\u8BA4\u6309\u94AE', context);
};
const close = (context) => {
  console.log('\u5173\u95ED\u5F39\u7A97\uFF0C\u70B9\u51FB\u5173\u95ED\u6309\u94AE\u3001\u6309\u4E0BESC\u3001\u70B9\u51FB\u8499\u5C42\u7B49\u89E6\u53D1', context);
};
const onCancel = (context) => {
  console.log('\u70B9\u51FB\u4E86\u53D6\u6D88\u6309\u94AE', context);
};
const onKeydownEsc = (context) => {
  console.log('\u6309\u4E0B\u4E86ESC', context);
};
const onClickCloseBtn = (context) => {
  console.log('\u70B9\u51FB\u4E86\u5173\u95ED\u6309\u94AE', context);
};
const onClickOverlay = (context) => {
  console.log('\u70B9\u51FB\u4E86\u8499\u5C42', context);
};
<\/script>
`,k=`<template>
  <div>
    <t-space break-line>
      <t-button theme="primary" @click="visible1 = true">\u63D0\u793A\u53CD\u9988</t-button>
      <t-button theme="primary" @click="visible2 = true">\u6210\u529F\u53CD\u9988</t-button>
      <t-button theme="primary" @click="visible3 = true">\u8B66\u793A\u53CD\u9988</t-button>
      <t-button theme="primary" @click="visible4 = true">\u9519\u8BEF\u53CD\u9988</t-button>
      <t-button theme="primary" @click="visible5 = true">\u81EA\u5B9A\u4E49\u56FE\u6807</t-button>
    </t-space>
    <t-dialog
      theme="info"
      header="\u63D0\u793A"
      body="\u5BF9\u8BDD\u6846\u5185\u5BB9"
      :visible.sync="visible1"
      @confirm="onConfirm"
      :onClose="close1"
      :cancelBtn="null"
    />
    <t-dialog
      theme="success"
      header="\u6210\u529F"
      body="\u5BF9\u8BDD\u6846\u5185\u5BB9"
      :visible.sync="visible2"
      @confirm="onConfirm"
      :onClose="close2"
      :cancelBtn="null"
    />
    <t-dialog
      theme="warning"
      header="\u8B66\u793A"
      body="\u5BF9\u8BDD\u6846\u5185\u5BB9"
      :visible.sync="visible3"
      @confirm="onConfirm"
      :onClose="close3"
      :cancelBtn="null"
    />
    <t-dialog
      theme="danger"
      header="\u9519\u8BEF"
      body="\u5BF9\u8BDD\u6846\u5185\u5BB9"
      :visible.sync="visible4"
      @confirm="onConfirm"
      :onClose="close4"
      :cancelBtn="null"
    />
    <t-dialog
      body="\u5BF9\u8BDD\u6846\u5185\u5BB9"
      :closeBtn="false"
      :visible.sync="visible5"
      @confirm="onConfirm"
      :onClose="close5"
      :cancelBtn="null"
    >
      <div slot="header">
        <check-circle-filled-icon color="orange" />
        <span style="vertical-align: middle">\u5BF9\u8BDD\u6846\u6807\u9898</span>
      </div>
    </t-dialog>
  </div>
</template>
<script>
import { CheckCircleFilledIcon } from 'tdesign-icons-vue';

export default {
  components: {
    CheckCircleFilledIcon,
  },
  data() {
    return {
      visible1: false,
      visible2: false,
      visible3: false,
      visible4: false,
      visible5: false,
    };
  },
  methods: {
    onConfirm(context) {
      const { e } = context;
      // todo something else here
      this.sendingRequest();
      this.visible1 = false;
      this.visible2 = false;
      this.visible3 = false;
      this.visible4 = false;
      this.visible5 = false;
      e.stopPropagation();
    },
    sendingRequest() {
      console.log('sending request');
    },

    close1() {
      this.visible1 = false;
    },
    close2() {
      this.visible2 = false;
    },
    close3() {
      this.visible3 = false;
    },
    close4() {
      this.visible4 = false;
    },
    close5() {
      this.visible5 = false;
    },
  },
};
<\/script>
`,D=`<template>
  <div>
    <t-space break-line>
      <t-button theme="primary" @click="visible1 = true">\u63D0\u793A\u53CD\u9988</t-button>
      <t-button theme="primary" @click="visible2 = true">\u6210\u529F\u53CD\u9988</t-button>
      <t-button theme="primary" @click="visible3 = true">\u8B66\u793A\u53CD\u9988</t-button>
      <t-button theme="primary" @click="visible4 = true">\u9519\u8BEF\u53CD\u9988</t-button>
      <t-button theme="primary" @click="visible5 = true">\u81EA\u5B9A\u4E49\u56FE\u6807</t-button>
    </t-space>
    <t-dialog
      theme="info"
      header="\u63D0\u793A"
      body="\u5BF9\u8BDD\u6846\u5185\u5BB9"
      :visible.sync="visible1"
      @confirm="onConfirm"
      :onClose="close1"
      :cancelBtn="null"
    />
    <t-dialog
      theme="success"
      header="\u6210\u529F"
      body="\u5BF9\u8BDD\u6846\u5185\u5BB9"
      :visible.sync="visible2"
      @confirm="onConfirm"
      :onClose="close2"
      :cancelBtn="null"
    />
    <t-dialog
      theme="warning"
      header="\u8B66\u793A"
      body="\u5BF9\u8BDD\u6846\u5185\u5BB9"
      :visible.sync="visible3"
      @confirm="onConfirm"
      :onClose="close3"
      :cancelBtn="null"
    />
    <t-dialog
      theme="danger"
      header="\u9519\u8BEF"
      body="\u5BF9\u8BDD\u6846\u5185\u5BB9"
      :visible.sync="visible4"
      @confirm="onConfirm"
      :onClose="close4"
      :cancelBtn="null"
    />
    <t-dialog
      body="\u5BF9\u8BDD\u6846\u5185\u5BB9"
      :closeBtn="false"
      :visible.sync="visible5"
      @confirm="onConfirm"
      :onClose="close5"
      :cancelBtn="null"
    >
      <div slot="header">
        <check-circle-filled-icon color="orange" />
        <span style="vertical-align: middle">\u5BF9\u8BDD\u6846\u6807\u9898</span>
      </div>
    </t-dialog>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { CheckCircleFilledIcon } from 'tdesign-icons-vue';

const visible1 = ref(false);
const visible2 = ref(false);
const visible3 = ref(false);
const visible4 = ref(false);
const visible5 = ref(false);
const onConfirm = (context) => {
  const { e } = context;
  // todo something else here
  sendingRequest();
  visible1.value = false;
  visible2.value = false;
  visible3.value = false;
  visible4.value = false;
  visible5.value = false;
  e.stopPropagation();
};
const sendingRequest = () => {
  console.log('sending request');
};
const close1 = () => {
  visible1.value = false;
};
const close2 = () => {
  visible2.value = false;
};
const close3 = () => {
  visible3.value = false;
};
const close4 = () => {
  visible4.value = false;
};
const close5 = () => {
  visible5.value = false;
};
<\/script>
`,B=`<template>
  <div>
    <t-space>
      <t-button @click="visible = true">\u5F02\u6B65\u52A0\u8F7D\u7C7B\u6309\u94AE</t-button>
      <t-button @click="openAnotherDialog">\u63D2\u4EF6\u51FD\u6570\u5F02\u6B65\u52A0\u8F7D</t-button>
    </t-space>
    <t-dialog
      :visible.sync="visible"
      header="\u4FDD\u5B58"
      body="\u4FDD\u5B58\u4E2D\uFF0C\u8BF7\u7A0D\u540E"
      :confirmBtn="{
        content: '\u4FDD\u5B58',
        theme: 'primary',
        loading,
      }"
      :onConfirm="onConfirm"
      :onClose="close"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
      loading: false,
    };
  },
  methods: {
    close() {
      this.visible = false;
    },
    onConfirm() {
      this.loading = true;
      const timer = setTimeout(() => {
        this.loading = false;
        this.visible = false;
        clearTimeout(timer);
      }, 500);
    },

    openAnotherDialog() {
      const confirmDialog = this.$dialog.confirm({
        header: '\u63D0\u4EA4\u540E\u4E0D\u53EF\u518D\u7F16\u8F91\u4F1A\u8FDB\u5165\u5BA1\u6279\u6D41\u7A0B',
        body: '\u662F\u5426\u786E\u8BA4\u63D0\u4EA4\uFF1F',
        confirmBtn: {
          content: '\u63D0\u4EA4',
          theme: 'primary',
          loading: false,
        },
        theme: 'warning',
        onConfirm: () => {
          confirmDialog.update({ confirmBtn: { content: '\u63D0\u4EA4\u4E2D', loading: true } });
          // confirmDialog.update({ confirmLoading: true });
          // confirmDialog.setConfirmLoading(true);
          const timer = setTimeout(() => {
            confirmDialog.update({ confirmBtn: { content: '\u63D0\u4EA4', loading: false } });
            // confirmDialog.update({ confirmLoading: false });
            // confirmDialog.setConfirmLoading(false);
            confirmDialog.hide();
            clearTimeout(timer);
          }, 500);
        },
      });
    },
  },
};
<\/script>
`,x=`<template>
  <div>
    <t-space>
      <t-button @click="visible = true">\u5F02\u6B65\u52A0\u8F7D\u7C7B\u6309\u94AE</t-button>
      <t-button @click="openAnotherDialog">\u63D2\u4EF6\u51FD\u6570\u5F02\u6B65\u52A0\u8F7D</t-button>
    </t-space>
    <t-dialog
      :visible.sync="visible"
      header="\u4FDD\u5B58"
      body="\u4FDD\u5B58\u4E2D\uFF0C\u8BF7\u7A0D\u540E"
      :confirmBtn="{
        content: '\u4FDD\u5B58',
        theme: 'primary',
        loading,
      }"
      :onConfirm="onConfirm"
      :onClose="close"
    />
  </div>
</template>
<script setup>
import { DialogPlugin } from 'tdesign-vue';
import { ref } from 'vue';

const visible = ref(false);
const loading = ref(false);
const close = () => {
  visible.value = false;
};
const onConfirm = () => {
  loading.value = true;
  const timer = setTimeout(() => {
    loading.value = false;
    visible.value = false;
    clearTimeout(timer);
  }, 500);
};
const openAnotherDialog = () => {
  const confirmDialog = DialogPlugin.confirm({
    header: '\u63D0\u4EA4\u540E\u4E0D\u53EF\u518D\u7F16\u8F91\u4F1A\u8FDB\u5165\u5BA1\u6279\u6D41\u7A0B',
    body: '\u662F\u5426\u786E\u8BA4\u63D0\u4EA4\uFF1F',
    confirmBtn: {
      content: '\u63D0\u4EA4',
      theme: 'primary',
      loading: false,
    },
    theme: 'warning',
    onConfirm: () => {
      confirmDialog.update({
        confirmBtn: {
          content: '\u63D0\u4EA4\u4E2D',
          loading: true,
        },
      });
      // confirmDialog.update({ confirmLoading: true });
      // confirmDialog.setConfirmLoading(true);
      const timer = setTimeout(() => {
        confirmDialog.update({
          confirmBtn: {
            content: '\u63D0\u4EA4',
            loading: false,
          },
        });
        // confirmDialog.update({ confirmLoading: false });
        // confirmDialog.setConfirmLoading(false);
        confirmDialog.hide();
        clearTimeout(timer);
      }, 500);
    },
  });
};
<\/script>
`,w=`<template>
  <div>
    <p>\u5F39\u7A97\u5185\u5BB9\u81EA\u5B9A\u4E49</p>
    <br />
    <div>
      <t-space break-line>
        <t-button theme="primary" @click="bodyVisible1 = true">\u9690\u85CF\u6807\u9898</t-button>
        <t-button theme="primary" @click="bodyVisible2 = true">\u6E32\u67D3\u51FD\u6570\u5B9A\u4E49\u5185\u5BB9</t-button>
        <t-button theme="primary" @click="bodyVisible3 = true">\u63D2\u69FD\u65B9\u5F0F\u5B9A\u4E49\u5185\u5BB9</t-button>
      </t-space>
      <!-- :onClose="onClose" \u548C @close="onClose" \u7B49\u6548 -->
      <!-- :onConfirm="onConfirm" \u548C @confirm="onConfirm" \u7B49\u6548 -->
      <t-dialog
        :header="false"
        body="\u8FD9\u662F\u5BF9\u8BDD\u6846\u5185\u5BB9\uFF0C\u5BF9\u8BDD\u6846\u6807\u9898\u5DF2\u88AB\u9690\u85CF"
        :visible="bodyVisible1"
        :onClose="bodyClose1"
        :onConfirm="bodyClose1"
      />

      <t-dialog
        :visible="bodyVisible2"
        header="\u5BF9\u8BDD\u6846\u6807\u9898"
        :body="renderDialog2Body"
        :onClose="bodyClose2"
        :onConfirm="bodyClose2"
      >
        <!-- <div slot="body">\u88AB\u6E32\u67D3\u51FD\u6570\u8986\u76D6\u7684\u63D2\u69FD\u5185\u5BB9</div> -->
      </t-dialog>

      <t-dialog header="\u5BF9\u8BDD\u6846\u6807\u9898" :visible="bodyVisible3" :onClose="bodyClose3" :onConfirm="bodyClose3">
        <div slot="body">
          <div>\u8FD9\u662F\u4F7F\u7528\u63D2\u69FD\u5B9A\u4E49\u7684\u5BF9\u8BDD\u6846\u5185\u5BB9</div>
        </div>
      </t-dialog>
    </div>

    <br /><br /><br />
    <p>\u64CD\u4F5C\u6309\u94AE\u81EA\u5B9A\u4E49</p>
    <br />
    <p>
      \u5E95\u90E8\u6309\u94AE\u6709\u4E24\u4E2A\u63A7\u5236\u5C5E\u6027\uFF1AconfirmBtn \u548C cancelBtn\u3002\u5C5E\u6027\u7C7B\u578B\u6709\u591A\u79CD\uFF1Astring | ButtonProps | TNode\u3002\u4E5F\u53EF\u4EE5\u901A\u8FC7 footer
      \u6765\u81EA\u5B9A\u4E49\u63A7\u5236
    </p>
    <br />
    <t-space break-line>
      <t-button theme="primary" @click="visible1 = true">\u6309\u94AE\u6587\u5B57</t-button>
      <t-button theme="primary" @click="visible2 = true">\u6309\u94AE\u5C5E\u6027</t-button>
      <t-button theme="primary" @click="visible3 = true">\u6E32\u67D3\u51FD\u6570\u6309\u94AE</t-button>
      <t-button theme="primary" @click="visible4 = true">\u9690\u85CF\u5E95\u90E8</t-button>
    </t-space>
    <t-dialog
      :visible.sync="visible1"
      header="\u63D0\u793A"
      body="\u81EA\u5B9A\u4E49\u5E95\u90E8\u6309\u94AE\uFF0C\u76F4\u63A5\u4F20\u5165\u6587\u5B57"
      confirmBtn="\u524D\u5F80\u652F\u4ED8"
      cancelBtn="\u5173\u95ED"
      :onConfirm="onConfirm"
      :onClose="close1"
    />

    <!-- \u900F\u4F20 ButtonProps\uFF0C\u4EE5\u81EA\u5B9A\u4E49\u6309\u94AE\u6837\u5F0F -->
    <t-dialog
      :visible="visible2"
      header="\u63D0\u793A"
      body="\u81EA\u5B9A\u4E49\u5E95\u90E8\u6309\u94AE\uFF0C\u4F20\u5165 ButtonProps"
      :confirmBtn="{
        content: confirmBtnRender,
        icon: confirmBtnIconRender,
        variant: 'base',
      }"
      :cancelBtn="{
        content: '\u79BB\u5F00',
        variant: 'outline',
      }"
      :onClose="close2"
    />

    <!-- cancelBtn \u548C confirmBtn \u503C\u4E3A null \u65F6\uFF0C\u9690\u85CF\u6309\u94AE -->
    <!-- confirmBtn \u53EF\u4EE5\u4F5C\u4E3A\u6E32\u67D3\u51FD\u6570\u8F93\u51FA\u6309\u94AE -->
    <t-dialog
      :visible="visible3"
      header="\u5BF9\u8BDD\u6846\u6807\u9898"
      body="\u81EA\u5B9A\u4E49\u5E95\u90E8\u6309\u94AE\uFF0C\u4F20\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6"
      :confirmBtn="getConfirmBtn"
      :cancelBtn="null"
      :onClose="close3"
    />

    <t-dialog
      :visible="visible4"
      header="\u5BF9\u8BDD\u6846\u6807\u9898"
      body="\u4E0D\u9700\u8981\u5E95\u90E8\u6309\u94AE\u7684\u5185\u5BB9"
      :footer="false"
      :onClose="close4"
      :onConfirm="close4"
    />
  </div>
</template>
<script lang="jsx">
import { CartIcon } from 'tdesign-icons-vue';

export default {
  data() {
    return {
      visible1: false,
      visible2: false,
      visible3: false,
      visible4: false,
      bodyVisible1: false,
      bodyVisible2: false,
      bodyVisible3: false,
    };
  },
  methods: {
    getConfirmBtn() {
      return (
        <t-button theme="primary" disabled>
          \u6211\u77E5\u9053\u4E86
        </t-button>
      );
    },
    // \u4F7F\u7528 button.content \u6E32\u67D3\u51FD\u6570\u8F93\u51FA
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    confirmBtnRender(h) {
      return <span>\u524D\u5F80\u8D2D\u7269\u8F66</span>;
    },
    // \u4F7F\u7528 button.icon \u6E32\u67D3\u51FD\u6570\u8F93\u51FA
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    confirmBtnIconRender(h) {
      return <CartIcon />;
    },
    close1() {
      this.visible1 = false;
    },
    close2() {
      this.visible2 = false;
    },
    close3() {
      this.visible3 = false;
    },
    close4() {
      this.visible4 = false;
    },
    onConfirm() {
      this.visible1 = false;
      alert('\u8DF3\u8F6C\u652F\u4ED8~');
    },

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    renderDialog2Body(h) {
      // return this.$createElement('div', [this.$createElement('h2', '\u53C2\u6570\u4F20\u9012\u4F18\u5148\u4E8E\u63D2\u69FD\u5185\u5BB9'), '\u8FD9\u662F\u6E32\u67D3\u51FD\u6570\u8F93\u51FA\u7ED3\u679C']);
      return <div>\u8FD9\u91CC\u7684\u5185\u5BB9\u4F7F\u7528\u6E32\u67D3\u51FD\u6570\u8F93\u51FA\uFF0C\u6E32\u67D3\u51FD\u6570\u4F18\u5148\u7EA7\u9AD8\u4E8E\u63D2\u69FD</div>;
    },

    bodyClose1() {
      this.bodyVisible1 = false;
    },
    bodyClose2() {
      this.bodyVisible2 = false;
    },
    bodyClose3() {
      this.bodyVisible3 = false;
    },
  },
};
<\/script>
`,A=`<template>
  <div>
    <p>\u5F39\u7A97\u5185\u5BB9\u81EA\u5B9A\u4E49</p>
    <br />
    <div>
      <t-space break-line>
        <t-button theme="primary" @click="bodyVisible1 = true">\u9690\u85CF\u6807\u9898</t-button>
        <t-button theme="primary" @click="bodyVisible2 = true">\u6E32\u67D3\u51FD\u6570\u5B9A\u4E49\u5185\u5BB9</t-button>
        <t-button theme="primary" @click="bodyVisible3 = true">\u63D2\u69FD\u65B9\u5F0F\u5B9A\u4E49\u5185\u5BB9</t-button>
      </t-space>
      <!-- :onClose="onClose" \u548C @close="onClose" \u7B49\u6548 -->
      <!-- :onConfirm="onConfirm" \u548C @confirm="onConfirm" \u7B49\u6548 -->
      <t-dialog
        :header="false"
        body="\u8FD9\u662F\u5BF9\u8BDD\u6846\u5185\u5BB9\uFF0C\u5BF9\u8BDD\u6846\u6807\u9898\u5DF2\u88AB\u9690\u85CF"
        :visible="bodyVisible1"
        :onClose="bodyClose1"
        :onConfirm="bodyClose1"
      />

      <t-dialog
        :visible="bodyVisible2"
        header="\u5BF9\u8BDD\u6846\u6807\u9898"
        :body="renderDialog2Body"
        :onClose="bodyClose2"
        :onConfirm="bodyClose2"
      >
        <!-- <div slot="body">\u88AB\u6E32\u67D3\u51FD\u6570\u8986\u76D6\u7684\u63D2\u69FD\u5185\u5BB9</div> -->
      </t-dialog>

      <t-dialog header="\u5BF9\u8BDD\u6846\u6807\u9898" :visible="bodyVisible3" :onClose="bodyClose3" :onConfirm="bodyClose3">
        <div slot="body">
          <div>\u8FD9\u662F\u4F7F\u7528\u63D2\u69FD\u5B9A\u4E49\u7684\u5BF9\u8BDD\u6846\u5185\u5BB9</div>
        </div>
      </t-dialog>
    </div>

    <br /><br /><br />
    <p>\u64CD\u4F5C\u6309\u94AE\u81EA\u5B9A\u4E49</p>
    <br />
    <p>
      \u5E95\u90E8\u6309\u94AE\u6709\u4E24\u4E2A\u63A7\u5236\u5C5E\u6027\uFF1AconfirmBtn \u548C cancelBtn\u3002\u5C5E\u6027\u7C7B\u578B\u6709\u591A\u79CD\uFF1Astring | ButtonProps | TNode\u3002\u4E5F\u53EF\u4EE5\u901A\u8FC7 footer
      \u6765\u81EA\u5B9A\u4E49\u63A7\u5236
    </p>
    <br />
    <t-space break-line>
      <t-button theme="primary" @click="visible1 = true">\u6309\u94AE\u6587\u5B57</t-button>
      <t-button theme="primary" @click="visible2 = true">\u6309\u94AE\u5C5E\u6027</t-button>
      <t-button theme="primary" @click="visible3 = true">\u6E32\u67D3\u51FD\u6570\u6309\u94AE</t-button>
      <t-button theme="primary" @click="visible4 = true">\u9690\u85CF\u5E95\u90E8</t-button>
    </t-space>
    <t-dialog
      :visible.sync="visible1"
      header="\u63D0\u793A"
      body="\u81EA\u5B9A\u4E49\u5E95\u90E8\u6309\u94AE\uFF0C\u76F4\u63A5\u4F20\u5165\u6587\u5B57"
      confirmBtn="\u524D\u5F80\u652F\u4ED8"
      cancelBtn="\u5173\u95ED"
      :onConfirm="onConfirm"
      :onClose="close1"
    />

    <!-- \u900F\u4F20 ButtonProps\uFF0C\u4EE5\u81EA\u5B9A\u4E49\u6309\u94AE\u6837\u5F0F -->
    <t-dialog
      :visible="visible2"
      header="\u63D0\u793A"
      body="\u81EA\u5B9A\u4E49\u5E95\u90E8\u6309\u94AE\uFF0C\u4F20\u5165 ButtonProps"
      :confirmBtn="{
        content: confirmBtnRender,
        icon: confirmBtnIconRender,
        variant: 'base',
      }"
      :cancelBtn="{
        content: '\u79BB\u5F00',
        variant: 'outline',
      }"
      :onClose="close2"
    />

    <!-- cancelBtn \u548C confirmBtn \u503C\u4E3A null \u65F6\uFF0C\u9690\u85CF\u6309\u94AE -->
    <!-- confirmBtn \u53EF\u4EE5\u4F5C\u4E3A\u6E32\u67D3\u51FD\u6570\u8F93\u51FA\u6309\u94AE -->
    <t-dialog
      :visible="visible3"
      header="\u5BF9\u8BDD\u6846\u6807\u9898"
      body="\u81EA\u5B9A\u4E49\u5E95\u90E8\u6309\u94AE\uFF0C\u4F20\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6"
      :confirmBtn="getConfirmBtn"
      :cancelBtn="null"
      :onClose="close3"
    />

    <t-dialog
      :visible="visible4"
      header="\u5BF9\u8BDD\u6846\u6807\u9898"
      body="\u4E0D\u9700\u8981\u5E95\u90E8\u6309\u94AE\u7684\u5185\u5BB9"
      :footer="false"
      :onClose="close4"
      :onConfirm="close4"
    />
  </div>
</template>
<script setup lang="jsx">
import { ref } from 'vue';
import { CartIcon } from 'tdesign-icons-vue';

const visible1 = ref(false);
const visible2 = ref(false);
const visible3 = ref(false);
const visible4 = ref(false);
const bodyVisible1 = ref(false);
const bodyVisible2 = ref(false);
const bodyVisible3 = ref(false);
const getConfirmBtn = () => (
  <t-button theme="primary" disabled>
    \u6211\u77E5\u9053\u4E86
  </t-button>
);
// \u4F7F\u7528 button.content \u6E32\u67D3\u51FD\u6570\u8F93\u51FA
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const confirmBtnRender = (h) => <span>\u524D\u5F80\u8D2D\u7269\u8F66</span>;
// \u4F7F\u7528 button.icon \u6E32\u67D3\u51FD\u6570\u8F93\u51FA
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const confirmBtnIconRender = (h) => <CartIcon />;
const close1 = () => {
  visible1.value = false;
};
const close2 = () => {
  visible2.value = false;
};
const close3 = () => {
  visible3.value = false;
};
const close4 = () => {
  visible4.value = false;
};
const onConfirm = () => {
  visible1.value = false;
  alert('\u8DF3\u8F6C\u652F\u4ED8~');
};
const renderDialog2Body = () => <div>\u8FD9\u91CC\u7684\u5185\u5BB9\u4F7F\u7528\u6E32\u67D3\u51FD\u6570\u8F93\u51FA\uFF0C\u6E32\u67D3\u51FD\u6570\u4F18\u5148\u7EA7\u9AD8\u4E8E\u63D2\u69FD</div>;
const bodyClose1 = () => {
  bodyVisible1.value = false;
};
const bodyClose2 = () => {
  bodyVisible2.value = false;
};
const bodyClose3 = () => {
  bodyVisible3.value = false;
};
<\/script>
`,P=`<template>
  <div>
    <t-space break-line>
      <t-button theme="primary" @click="visibleModal = true">\u6A21\u6001\u5BF9\u8BDD\u6846</t-button>
      <t-button theme="primary" @click="visibleModelessDrag = true">\u975E\u6A21\u6001\u5BF9\u8BDD\u6846</t-button>
      <t-button theme="primary" @click="visibleModeless = true">\u975E\u6A21\u6001\u5BF9\u8BDD\u6846-\u4E0D\u53EF\u62D6\u62FD</t-button>
      <t-button theme="primary" @click="visibleNormal = true">\u666E\u901A\u5BF9\u8BDD\u6846-\u4E0D\u53EF\u62D6\u62FD</t-button>
    </t-space>

    <t-dialog
      header="\u6A21\u6001\u5BF9\u8BDD\u6846"
      :visible.sync="visibleModal"
      mode="modal"
      draggable
      :onConfirm="() => (this.visibleModal = false)"
    >
      <div slot="body">
        <div>\u9ED8\u8BA4\u70B9\u51FB\u8499\u5C42\u6216\u6309ESC\u53EF\u5173\u95ED</div>
        <div>\u5BF9\u8BDD\u6846\u5185\u5BB9</div>
      </div>
    </t-dialog>

    <t-dialog
      header="\u975E\u6A21\u6001\u5BF9\u8BDD\u6846"
      :visible.sync="visibleModelessDrag"
      mode="modeless"
      draggable
      :onConfirm="() => (this.visibleModelessDrag = false)"
    >
      <div slot="body">
        <div>\u5BF9\u8BDD\u6846\u5185\u5BB9</div>
      </div>
    </t-dialog>

    <t-dialog
      header="\u975E\u6A21\u6001\u5BF9\u8BDD\u6846-\u4E0D\u53EF\u62D6\u62FD"
      :visible.sync="visibleModeless"
      mode="modeless"
      :onConfirm="() => (this.visibleModeless = false)"
    >
      <div slot="body">
        <div>\u5BF9\u8BDD\u6846\u5185\u5BB9</div>
      </div>
    </t-dialog>

    <t-dialog
      header="\u666E\u901A\u5BF9\u8BDD\u6846-\u4E0D\u53EF\u62D6\u62FD"
      :visible.sync="visibleNormal"
      mode="normal"
      :onConfirm="() => (this.visibleNormal = false)"
    >
      <div slot="body">
        <div>\u5BF9\u8BDD\u6846\u5185\u5BB9</div>
      </div>
    </t-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visibleModal: false,
      visibleModelessDrag: false,
      visibleModeless: false,
      visibleNormal: false,
    };
  },
  methods: {},
};
<\/script>
`,V=`<template>
  <div>
    <t-space break-line>
      <t-button theme="primary" @click="visibleModal = true">\u6A21\u6001\u5BF9\u8BDD\u6846</t-button>
      <t-button theme="primary" @click="visibleModelessDrag = true">\u975E\u6A21\u6001\u5BF9\u8BDD\u6846</t-button>
      <t-button theme="primary" @click="visibleModeless = true">\u975E\u6A21\u6001\u5BF9\u8BDD\u6846-\u4E0D\u53EF\u62D6\u62FD</t-button>
      <t-button theme="primary" @click="visibleNormal = true">\u666E\u901A\u5BF9\u8BDD\u6846-\u4E0D\u53EF\u62D6\u62FD</t-button>
    </t-space>

    <t-dialog
      header="\u6A21\u6001\u5BF9\u8BDD\u6846"
      :visible.sync="visibleModal"
      mode="modal"
      draggable
      :onConfirm="() => (this.visibleModal = false)"
    >
      <div slot="body">
        <div>\u9ED8\u8BA4\u70B9\u51FB\u8499\u5C42\u6216\u6309ESC\u53EF\u5173\u95ED</div>
        <div>\u5BF9\u8BDD\u6846\u5185\u5BB9</div>
      </div>
    </t-dialog>

    <t-dialog
      header="\u975E\u6A21\u6001\u5BF9\u8BDD\u6846"
      :visible.sync="visibleModelessDrag"
      mode="modeless"
      draggable
      :onConfirm="() => (this.visibleModelessDrag = false)"
    >
      <div slot="body">
        <div>\u5BF9\u8BDD\u6846\u5185\u5BB9</div>
      </div>
    </t-dialog>

    <t-dialog
      header="\u975E\u6A21\u6001\u5BF9\u8BDD\u6846-\u4E0D\u53EF\u62D6\u62FD"
      :visible.sync="visibleModeless"
      mode="modeless"
      :onConfirm="() => (this.visibleModeless = false)"
    >
      <div slot="body">
        <div>\u5BF9\u8BDD\u6846\u5185\u5BB9</div>
      </div>
    </t-dialog>

    <t-dialog
      header="\u666E\u901A\u5BF9\u8BDD\u6846-\u4E0D\u53EF\u62D6\u62FD"
      :visible.sync="visibleNormal"
      mode="normal"
      :onConfirm="() => (this.visibleNormal = false)"
    >
      <div slot="body">
        <div>\u5BF9\u8BDD\u6846\u5185\u5BB9</div>
      </div>
    </t-dialog>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const visibleModal = ref(false);
const visibleModelessDrag = ref(false);
const visibleModeless = ref(false);
const visibleNormal = ref(false);
<\/script>
`,E=`<template>
  <div>
    <t-space break-line>
      <t-button theme="primary" @click="visible = true">\u9ED8\u8BA4\u4F4D\u7F6E</t-button>
      <t-button theme="primary" @click="visibleCenter = true">\u5782\u76F4\u5C45\u4E2D</t-button>
      <t-button theme="primary" @click="visibleTop = true">\u81EA\u5B9A\u4E49top</t-button>
      <t-button theme="primary" @click="visibleOverflow = true">\u6587\u672C\u6EA2\u51FA</t-button>
    </t-space>
    <t-dialog header="\u5BF9\u8BDD\u6846\u6807\u9898" body="\u5BF9\u8BDD\u6846\u5185\u5BB9" :visible="visible" :onClose="close1" :onConfirm="close1" />

    <t-dialog placement="center" header="\u5BF9\u8BDD\u6846\u6807\u9898" :visible="visibleCenter" :onConfirm="close2" :onClose="close2">
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u5BF9\u8BDD\u6846</p>
    </t-dialog>
    <t-dialog
      :placement="placement"
      header="\u5BF9\u8BDD\u6846\u6807\u9898"
      body="\u81EA\u5B9A\u4E49\u5BF9\u8BDD\u6846\u8DDD\u79BB\u7A97\u53E3\u9876\u90E8\u4F4D\u7F6E\uFF0Ctop: 50px"
      :top="'30%'"
      :visible="visibleTop"
      :onConfirm="close3"
      :onClose="close3"
    />
    <t-dialog
      placement="center"
      header="\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846\u6807\u9898"
      :visible="visibleOverflow"
      :onConfirm="close4"
      :onClose="close4"
    >
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
    </t-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
      visibleCenter: false,
      visibleTop: false,
      visibleOverflow: false,
      placement: 'top',
    };
  },
  methods: {
    close1() {
      this.visible = false;
    },
    close2() {
      this.visibleCenter = false;
    },
    close3() {
      this.visibleTop = false;
    },
    close4() {
      this.visibleOverflow = false;
    },
  },
};
<\/script>
`,I=`<template>
  <div>
    <t-space break-line>
      <t-button theme="primary" @click="visible = true">\u9ED8\u8BA4\u4F4D\u7F6E</t-button>
      <t-button theme="primary" @click="visibleCenter = true">\u5782\u76F4\u5C45\u4E2D</t-button>
      <t-button theme="primary" @click="visibleTop = true">\u81EA\u5B9A\u4E49top</t-button>
      <t-button theme="primary" @click="visibleOverflow = true">\u6587\u672C\u6EA2\u51FA</t-button>
    </t-space>
    <t-dialog header="\u5BF9\u8BDD\u6846\u6807\u9898" body="\u5BF9\u8BDD\u6846\u5185\u5BB9" :visible="visible" :onClose="close1" :onConfirm="close1" />

    <t-dialog placement="center" header="\u5BF9\u8BDD\u6846\u6807\u9898" :visible="visibleCenter" :onConfirm="close2" :onClose="close2">
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u5BF9\u8BDD\u6846</p>
    </t-dialog>
    <t-dialog
      :placement="placement"
      header="\u5BF9\u8BDD\u6846\u6807\u9898"
      body="\u81EA\u5B9A\u4E49\u5BF9\u8BDD\u6846\u8DDD\u79BB\u7A97\u53E3\u9876\u90E8\u4F4D\u7F6E\uFF0Ctop: 50px"
      :top="'30%'"
      :visible="visibleTop"
      :onConfirm="close3"
      :onClose="close3"
    />
    <t-dialog
      placement="center"
      header="\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846\u6807\u9898"
      :visible="visibleOverflow"
      :onConfirm="close4"
      :onClose="close4"
    >
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
    </t-dialog>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const visible = ref(false);
const visibleCenter = ref(false);
const visibleTop = ref(false);
const visibleOverflow = ref(false);
const placement = ref('top');
const close1 = () => {
  visible.value = false;
};
const close2 = () => {
  visibleCenter.value = false;
};
const close3 = () => {
  visibleTop.value = false;
};
const close4 = () => {
  visibleOverflow.value = false;
};
<\/script>
`,O=`<template>
  <div class="dialog-attach-wrap" ref="attachRef">
    <!-- attach\u6302\u8F7D -->
    <t-space break-line>
      <t-button theme="primary" @click="visibleBody = true">\u6302\u8F7D\u5728body</t-button>
      <t-button theme="primary" @click="visibleIdAttach = true">\u6302\u8F7D\u7279\u5B9A\u5143\u7D20</t-button>
      <t-button theme="primary" @click="visibleFunctionAttach = true">\u6302\u8F7D\u51FD\u6570\u8FD4\u56DE\u8282\u70B9</t-button>
      <t-button theme="primary" @click="visibleShowInAttachedElement = true">\u5C55\u793A\u5728\u6302\u8F7D\u5143\u7D20\u533A\u57DF</t-button>
    </t-space>
    <t-dialog
      :visible.sync="visibleBody"
      attach="body"
      header="\u6302\u8F7D\u5728body"
      destroyOnClose
      :onConfirm="() => (this.visibleBody = false)"
    >
      <div slot="body">
        <div>\u88AB\u6302\u8F7D\u5230 body \u5143\u7D20\u7684\u5BF9\u8BDD\u6846</div>
      </div>
    </t-dialog>

    <t-dialog
      :visible.sync="visibleIdAttach"
      attach="#app"
      header="\u6302\u8F7D\u5230id\u4E3Aapp\u7684\u5143\u7D20"
      destroyOnClose
      :onConfirm="() => (this.visibleIdAttach = false)"
    >
      <div slot="body">
        <div>\u901A\u8FC7querySelect\u6307\u5B9A\u5143\u7D20\u6302\u8F7D</div>
        <div>\u652F\u6301\u539F\u751Fdocument.querySelect\u9009\u62E9\u5143\u7D20</div>
        <div>querySelect\u83B7\u53D6\u5230\u7684\u7B2C\u4E00\u4E2A\u5143\u7D20\u4E3A\u6302\u8F7D\u70B9</div>
      </div>
    </t-dialog>

    <t-dialog
      :visible.sync="visibleFunctionAttach"
      :attach="getAttach"
      header="\u51FD\u6570\u8FD4\u56DE\u6302\u8F7D\u8282\u70B9"
      destroyOnClose
      :onConfirm="() => (this.visibleFunctionAttach = false)"
    >
      <div slot="body">
        <div>\u6307\u5B9A\u51FD\u6570\u8FD4\u56DE\u7684\u8282\u70B9\u4E3A\u6302\u8F7D\u70B9</div>
        <div>\u51FD\u6570\u8FD4\u56DE\u4E3ADOM\u8282\u70B9\u5BF9\u8C61</div>
      </div>
    </t-dialog>

    <t-dialog
      :visible.sync="visibleShowInAttachedElement"
      header="\u5BF9\u8BDD\u6846\u4EC5\u5C55\u793A\u5728\u6302\u8F7D\u5143\u7D20\u533A\u57DF"
      :showInAttachedElement="true"
      placement="center"
      :onConfirm="() => (this.visibleShowInAttachedElement = false)"
    >
      <div slot="body">
        <div>\u7236\u5143\u7D20\uFF08\u6302\u8F7D\u5143\u7D20\uFF09\u9700\u8981\u6709\u5B9A\u4F4D\u5C5E\u6027\uFF0C\u5982\uFF1Aposition: relative</div>
        <div>showInAttachedElement API \u4EC5\u9488\u5BF9\u6A21\u6001\u5BF9\u8BDD\u6846\u6709\u6548</div>
      </div>
    </t-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visibleBody: false,
      visibleIdAttach: false,
      visibleFunctionAttach: false,
      visibleShowInAttachedElement: false,
    };
  },
  methods: {
    getAttach() {
      return this.$refs.attachRef;
    },
  },
};
<\/script>
<style scoped>
.dialog-attach-wrap {
  position: relative;
  height: 300px;
  padding: 20px;
  border: 1px solid #ebedf0;
  border-radius: 2px;
  overflow: hidden;
}
</style>
`,M=`<template>
  <div class="dialog-attach-wrap" ref="attachRef">
    <!-- attach\u6302\u8F7D -->
    <t-space break-line>
      <t-button theme="primary" @click="visibleBody = true">\u6302\u8F7D\u5728body</t-button>
      <t-button theme="primary" @click="visibleIdAttach = true">\u6302\u8F7D\u7279\u5B9A\u5143\u7D20</t-button>
      <t-button theme="primary" @click="visibleFunctionAttach = true">\u6302\u8F7D\u51FD\u6570\u8FD4\u56DE\u8282\u70B9</t-button>
      <t-button theme="primary" @click="visibleShowInAttachedElement = true">\u5C55\u793A\u5728\u6302\u8F7D\u5143\u7D20\u533A\u57DF</t-button>
    </t-space>
    <t-dialog
      :visible.sync="visibleBody"
      attach="body"
      header="\u6302\u8F7D\u5728body"
      destroyOnClose
      :onConfirm="() => (this.visibleBody = false)"
    >
      <div slot="body">
        <div>\u88AB\u6302\u8F7D\u5230 body \u5143\u7D20\u7684\u5BF9\u8BDD\u6846</div>
      </div>
    </t-dialog>

    <t-dialog
      :visible.sync="visibleIdAttach"
      attach="#app"
      header="\u6302\u8F7D\u5230id\u4E3Aapp\u7684\u5143\u7D20"
      destroyOnClose
      :onConfirm="() => (this.visibleIdAttach = false)"
    >
      <div slot="body">
        <div>\u901A\u8FC7querySelect\u6307\u5B9A\u5143\u7D20\u6302\u8F7D</div>
        <div>\u652F\u6301\u539F\u751Fdocument.querySelect\u9009\u62E9\u5143\u7D20</div>
        <div>querySelect\u83B7\u53D6\u5230\u7684\u7B2C\u4E00\u4E2A\u5143\u7D20\u4E3A\u6302\u8F7D\u70B9</div>
      </div>
    </t-dialog>

    <t-dialog
      :visible.sync="visibleFunctionAttach"
      :attach="getAttach"
      header="\u51FD\u6570\u8FD4\u56DE\u6302\u8F7D\u8282\u70B9"
      destroyOnClose
      :onConfirm="() => (this.visibleFunctionAttach = false)"
    >
      <div slot="body">
        <div>\u6307\u5B9A\u51FD\u6570\u8FD4\u56DE\u7684\u8282\u70B9\u4E3A\u6302\u8F7D\u70B9</div>
        <div>\u51FD\u6570\u8FD4\u56DE\u4E3ADOM\u8282\u70B9\u5BF9\u8C61</div>
      </div>
    </t-dialog>

    <t-dialog
      :visible.sync="visibleShowInAttachedElement"
      header="\u5BF9\u8BDD\u6846\u4EC5\u5C55\u793A\u5728\u6302\u8F7D\u5143\u7D20\u533A\u57DF"
      :showInAttachedElement="true"
      placement="center"
      :onConfirm="() => (this.visibleShowInAttachedElement = false)"
    >
      <div slot="body">
        <div>\u7236\u5143\u7D20\uFF08\u6302\u8F7D\u5143\u7D20\uFF09\u9700\u8981\u6709\u5B9A\u4F4D\u5C5E\u6027\uFF0C\u5982\uFF1Aposition: relative</div>
        <div>showInAttachedElement API \u4EC5\u9488\u5BF9\u6A21\u6001\u5BF9\u8BDD\u6846\u6709\u6548</div>
      </div>
    </t-dialog>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const attachRef = ref();
const visibleBody = ref(false);
const visibleIdAttach = ref(false);
const visibleFunctionAttach = ref(false);
const visibleShowInAttachedElement = ref(false);
const getAttach = () => attachRef.value;
<\/script>
<style scoped>
.dialog-attach-wrap {
  position: relative;
  height: 300px;
  padding: 20px;
  border: 1px solid #ebedf0;
  border-radius: 2px;
  overflow: hidden;
}
</style>
`,_=`<template>
  <t-space break-line>
    <t-button theme="primary" @click="showDialog">dialog</t-button>
    <t-button theme="primary" @click="handleDN">handleDialogNode</t-button>
    <t-button theme="primary" @click="onConfirm">confirm</t-button>
    <t-button theme="primary" @click="onAlert">alert</t-button>
    <t-button theme="primary" @click="onDialogPluginConfirm">DialogPlugin.confirm</t-button>
  </t-space>
</template>
<script>
import { DialogPlugin } from 'tdesign-vue';

export default {
  data() {
    return {
      mydialog: null,
    };
  },
  methods: {
    // \u6BCF\u4E00\u6B21\u6267\u884C\u65B9\u6CD5\uFF0C\u90FD\u4F1A\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u5F39\u6846\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4FDD\u5B58\u5F39\u6846\u5B9E\u4F8B\uFF0C\u91CD\u590D\u5229\u7528\u3002\u907F\u514D\u591A\u6B21\u521B\u5EFA\u91CD\u590D\u5185\u5BB9
    showDialog() {
      if (this.mydialog) {
        this.mydialog.show();
        return;
      }
      this.mydialog = this.$dialog({
        header: 'Dialog-Plugin',
        body: 'Plugin \u65B9\u5F0F\u521B\u5EFA\u65B0\u5F39\u7A97',
        className: 't-dialog-new-class1 t-dialog-new-class2',
        style: 'color: rgba(0, 0, 0, 0.6)',
        onConfirm: ({ e }) => {
          console.log('confirm clicked', e);
          this.mydialog.hide();
        },
      });
    },
    // \u53EF\u4EE5\u4F7F\u7528\u7EC4\u4EF6\u5B9E\u4F8B\u65B9\u6CD5 update \u66F4\u65B0\u5F39\u6846\u5185\u5BB9\uFF0C\u53C2\u6570\u540C\u521B\u5EFA\u65F6\u4E00\u6837
    handleDN() {
      const dialogNode = this.$dialog({
        header: 'Dialog-Plugin',
        body: '\u901A\u8FC7 update \u66F4\u65B0\u5F39\u6846\u5185\u5BB9',
      });
      // \u66F4\u65B0\u5F39\u6846\u5185\u5BB9
      dialogNode.update({
        header: 'Updated-Dialog-Plugin',
        cancelBtn: '',
        onConfirm: ({ e }) => {
          console.log('confirm button has been clicked!');
          console.log('e: ', e);
          // \u9690\u85CF\u5F39\u6846
          dialogNode.hide();
        },
      });
    },
    // \u6BCF\u4E00\u6B21\u6267\u884C\u65B9\u6CD5\uFF0C\u90FD\u4F1A\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u5F39\u6846\uFF0C\u6CE8\u610F\u4F7F\u7528\u65B9\u6CD5\uFF0C\u907F\u514D\u591A\u6B21\u521B\u5EFA\u91CD\u590D\u5185\u5BB9
    onConfirm() {
      const confirmDia = this.$dialog.confirm({
        header: 'Dialog-Confirm-Plugin',
        body: '\u4F60\u786E\u5B9A\u8981\u5220\u9664\u8BE5\u9879\u4E48\uFF1F',
        confirmBtn: '\u786E\u5B9A',
        cancelBtn: '\u53D6\u6D88',
        onConfirm: ({ e }) => {
          console.log('confirm button has been clicked!');
          console.log('e: ', e);
          // \u8BF7\u6C42\u6210\u529F\u540E\uFF0C\u9500\u6BC1\u5F39\u6846
          confirmDia.destroy();
        },
        onClose: ({ e, trigger }) => {
          console.log('e: ', e);
          console.log('trigger: ', trigger);
          confirmDia.hide();
        },
      });
    },
    onAlert() {
      const alertDia = this.$dialog.alert({
        header: 'Dialog-Alert-Plugin',
        body: '\u9500\u6BC1\u540E\u4E0D\u80FD\u64A4\u9500',
        confirmBtn: {
          content: '\u786E\u5B9A!',
          variant: 'base',
          theme: 'danger',
        },
        onConfirm: ({ e }) => {
          console.log('confirm e: ', e);
          alertDia.hide();
        },
        onClose: ({ e, trigger }) => {
          console.log('close e: ', e);
          console.log('trigger: ', trigger);
          alertDia.hide();
        },
      });
    },

    onDialogPluginConfirm() {
      const confirmDia = DialogPlugin.confirm({
        header: 'Dialog-Confirm-Plugin',
        body: '\u4F60\u786E\u5B9A\u8981\u5220\u9664\u4E48?',
        confirmBtn: '\u786E\u5B9A',
        cancelBtn: '\u53D6\u6D88',
        onConfirm: ({ e }) => {
          console.log('confirm button has been clicked!');
          console.log('e: ', e);
          confirmDia.hide();
        },
        onClose: ({ e, trigger }) => {
          console.log('e: ', e);
          console.log('trigger: ', trigger);
          confirmDia.hide();
        },
      });
    },
  },
};
<\/script>
<style scoped>
p {
  line-height: 25px;
}
</style>
`,N=`<template>
  <t-space break-line>
    <t-button theme="primary" @click="showDialog">dialog</t-button>
    <t-button theme="primary" @click="handleDN">handleDialogNode</t-button>
    <t-button theme="primary" @click="onConfirm">confirm</t-button>
    <t-button theme="primary" @click="onAlert">alert</t-button>
    <t-button theme="primary" @click="onDialogPluginConfirm">DialogPlugin.confirm</t-button>
  </t-space>
</template>
<script setup>
import { ref } from 'vue';
import { DialogPlugin } from 'tdesign-vue';

const mydialog = ref(null);
// \u6BCF\u4E00\u6B21\u6267\u884C\u65B9\u6CD5\uFF0C\u90FD\u4F1A\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u5F39\u6846\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4FDD\u5B58\u5F39\u6846\u5B9E\u4F8B\uFF0C\u91CD\u590D\u5229\u7528\u3002\u907F\u514D\u591A\u6B21\u521B\u5EFA\u91CD\u590D\u5185\u5BB9
const showDialog = () => {
  if (mydialog.value) {
    mydialog.value.show();
    return;
  }
  mydialog.value = DialogPlugin({
    header: 'Dialog-Plugin',
    body: 'Plugin \u65B9\u5F0F\u521B\u5EFA\u65B0\u5F39\u7A97',
    className: 't-dialog-new-class1 t-dialog-new-class2',
    style: 'color: rgba(0, 0, 0, 0.6)',
    onConfirm: ({ e }) => {
      console.log('confirm clicked', e);
      mydialog.value.hide();
    },
  });
};
// \u53EF\u4EE5\u4F7F\u7528\u7EC4\u4EF6\u5B9E\u4F8B\u65B9\u6CD5 update \u66F4\u65B0\u5F39\u6846\u5185\u5BB9\uFF0C\u53C2\u6570\u540C\u521B\u5EFA\u65F6\u4E00\u6837
const handleDN = () => {
  const dialogNode = DialogPlugin({
    header: 'Dialog-Plugin',
    body: '\u901A\u8FC7 update \u66F4\u65B0\u5F39\u6846\u5185\u5BB9',
  });
  // \u66F4\u65B0\u5F39\u6846\u5185\u5BB9
  dialogNode.update({
    header: 'Updated-Dialog-Plugin',
    cancelBtn: '',
    onConfirm: ({ e }) => {
      console.log('confirm button has been clicked!');
      console.log('e: ', e);
      // \u9690\u85CF\u5F39\u6846
      dialogNode.hide();
    },
  });
};
// \u6BCF\u4E00\u6B21\u6267\u884C\u65B9\u6CD5\uFF0C\u90FD\u4F1A\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u5F39\u6846\uFF0C\u6CE8\u610F\u4F7F\u7528\u65B9\u6CD5\uFF0C\u907F\u514D\u591A\u6B21\u521B\u5EFA\u91CD\u590D\u5185\u5BB9
const onConfirm = () => {
  const confirmDia = DialogPlugin.confirm({
    header: 'Dialog-Confirm-Plugin',
    body: '\u4F60\u786E\u5B9A\u8981\u5220\u9664\u8BE5\u9879\u4E48\uFF1F',
    confirmBtn: '\u786E\u5B9A',
    cancelBtn: '\u53D6\u6D88',
    onConfirm: ({ e }) => {
      console.log('confirm button has been clicked!');
      console.log('e: ', e);
      // \u8BF7\u6C42\u6210\u529F\u540E\uFF0C\u9500\u6BC1\u5F39\u6846
      confirmDia.destroy();
    },
    onClose: ({ e, trigger }) => {
      console.log('e: ', e);
      console.log('trigger: ', trigger);
      confirmDia.hide();
    },
  });
};
const onAlert = () => {
  const alertDia = DialogPlugin.alert({
    header: 'Dialog-Alert-Plugin',
    body: '\u9500\u6BC1\u540E\u4E0D\u80FD\u64A4\u9500',
    confirmBtn: {
      content: '\u786E\u5B9A!',
      variant: 'base',
      theme: 'danger',
    },
    onConfirm: ({ e }) => {
      console.log('confirm e: ', e);
      alertDia.hide();
    },
    onClose: ({ e, trigger }) => {
      console.log('close e: ', e);
      console.log('trigger: ', trigger);
      alertDia.hide();
    },
  });
};
const onDialogPluginConfirm = () => {
  const confirmDia = DialogPlugin.confirm({
    header: 'Dialog-Confirm-Plugin',
    body: '\u4F60\u786E\u5B9A\u8981\u5220\u9664\u4E48?',
    confirmBtn: '\u786E\u5B9A',
    cancelBtn: '\u53D6\u6D88',
    onConfirm: ({ e }) => {
      console.log('confirm button has been clicked!');
      console.log('e: ', e);
      confirmDia.hide();
    },
    onClose: ({ e, trigger }) => {
      console.log('e: ', e);
      console.log('trigger: ', trigger);
      confirmDia.hide();
    },
  });
};
<\/script>
<style scoped>
p {
  line-height: 25px;
}
</style>
`,u=[{name:"closeBtn",type:"Boolean",defaultValue:!0,options:[]},{name:"closeOnEscKeydown",type:"Boolean",defaultValue:!0,options:[]},{name:"closeOnOverlayClick",type:"Boolean",defaultValue:!0,options:[]},{name:"destroyOnClose",type:"Boolean",defaultValue:!1,options:[]},{name:"draggable",type:"Boolean",defaultValue:!1,options:[]},{name:"footer",type:"Boolean",defaultValue:!0,options:[]},{name:"header",type:"Boolean",defaultValue:!0,options:[]},{name:"mode",type:"enum",defaultValue:"modal",options:[{label:"modal",value:"modal"},{label:"modeless",value:"modeless"},{label:"normal",value:"normal"},{label:"full-screen",value:"full-screen"}]},{name:"placement",type:"enum",defaultValue:"top",options:[{label:"top",value:"top"},{label:"center",value:"center"}]},{name:"preventScrollThrough",type:"Boolean",defaultValue:!0,options:[]},{name:"showInAttachedElement",type:"Boolean",defaultValue:!1,options:[]},{name:"showOverlay",type:"Boolean",defaultValue:!0,options:[]},{name:"theme",type:"enum",defaultValue:"default",options:[{label:"default",value:"default"},{label:"info",value:"info"},{label:"warning",value:"warning"},{label:"danger",value:"danger"},{label:"success",value:"success"}]},{name:"visible",type:"Boolean",defaultValue:!1,options:[]}];const c={};c.setup=(n,o)=>{const e=s(!1),l=s(u),i=[{label:"dialog",value:"dialog"}],t={dialog:`
        <div>
          <t-button @click="visible = true">Open Modal</t-button>
          <t-dialog v-bind="configProps" :visible.sync="visible">
            <p>This is a dialog</p>
          </t-dialog>
        </div>
      `},a=s(`<template>${t[i[0].value].trim()}</template>`);function m(p){a.value=`<template>${t[p].trim()}</template>`}return{visible:e,configList:l,panelList:i,usageCode:a,onPanelChange:m}};var d=function(){var n=this,o=n.$createElement,e=n._self._c||o;return e("base-usage",{attrs:{code:n.usageCode,"config-list":n.configList,"panel-list":n.panelList},on:{PanelChange:n.onPanelChange},scopedSlots:n._u([{key:"dialog",fn:function(l){var i=l.configProps;return[e("div",[e("t-button",{on:{click:function(t){n.visible=!0}}},[n._v("Open Modal")]),e("t-dialog",n._b({attrs:{visible:n.visible},on:{"update:visible":function(t){n.visible=t}}},"t-dialog",i,!1),[e("p",[n._v("This is a dialog")])])],1)]}}])})},f=[];d._withStripped=!0;const r={};var b=v(c,d,f,!1,g,null,null,null);function g(n){for(let o in r)this[o]=r[o]}b.options.__file="../src/dialog/_usage/index.vue";var S=function(){return b.exports}();export{y as D,S as U,C as a,k as b,D as c,B as d,x as e,w as f,A as g,P as h,V as i,E as j,I as k,O as l,M as m,_ as n,N as o};
