import{Y as l,n as m}from"./index.663c003f.js";var _=`<template>
  <t-space direction="vertical" :size="20">
    <t-notification theme="info" title="\u6807\u9898\u540D\u79F0" content="\u8FD9\u662F\u4E00\u6761\u6D88\u606F\u901A\u77E5" />
    <t-notification
      v-if="show"
      theme="info"
      title="\u6807\u9898\u540D\u79F0"
      content="\u8FD9\u662F\u4E00\u6761\u6D88\u606F\u901A\u77E5\uFF08\u5C55\u793A 5 \u79D2\u540E\u6D88\u5931\uFF09"
      :duration="5000"
      @duration-end="show = false"
    />
    <t-button variant="outline" @click="show = true" v-if="!show">\u70B9\u51FB\u6253\u5F00\u8BA1\u65F6\u901A\u77E5</t-button>
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      show: true,
    };
  },
};
<\/script>
`,g=`<template>
  <t-space direction="vertical" :size="20">
    <t-notification theme="info" title="\u6807\u9898\u540D\u79F0" content="\u8FD9\u662F\u4E00\u6761\u6D88\u606F\u901A\u77E5" />
    <t-notification
      v-if="show"
      theme="info"
      title="\u6807\u9898\u540D\u79F0"
      content="\u8FD9\u662F\u4E00\u6761\u6D88\u606F\u901A\u77E5\uFF08\u5C55\u793A 5 \u79D2\u540E\u6D88\u5931\uFF09"
      :duration="5000"
      @duration-end="show = false"
    />
    <t-button variant="outline" @click="show = true" v-if="!show">\u70B9\u51FB\u6253\u5F00\u8BA1\u65F6\u901A\u77E5</t-button>
  </t-space>
</template>
<script setup>
import { ref } from 'vue';

const show = ref(true);
<\/script>
`,x=`<template>
  <t-space direction="vertical" :size="20">
    <t-notification theme="info" title="\u666E\u901A\u901A\u77E5" content="\u8FD9\u662F\u4E00\u6761\u666E\u901A\u7684\u6D88\u606F\u901A\u77E5" />
    <t-notification theme="error" title="\u5371\u9669\u901A\u77E5" content="\u8FD9\u662F\u4E00\u6761\u5371\u9669\u7684\u6D88\u606F\u901A\u77E5" />
    <t-notification theme="warning" title="\u544A\u8B66\u901A\u77E5" content="\u8FD9\u662F\u4E00\u6761\u544A\u8B66\u7684\u6D88\u606F\u901A\u77E5" />
    <t-notification theme="success" title="\u6210\u529F\u901A\u77E5" content="\u8FD9\u662F\u4E00\u6761\u6210\u529F\u7684\u6D88\u606F\u901A\u77E5" />
  </t-space>
</template>
`,y=`<template>
  <t-space direction="vertical" :size="20">
    <t-notification theme="info" title="\u666E\u901A\u901A\u77E5" content="\u8FD9\u662F\u4E00\u6761\u666E\u901A\u7684\u6D88\u606F\u901A\u77E5" />
    <t-notification theme="error" title="\u5371\u9669\u901A\u77E5" content="\u8FD9\u662F\u4E00\u6761\u5371\u9669\u7684\u6D88\u606F\u901A\u77E5" />
    <t-notification theme="warning" title="\u544A\u8B66\u901A\u77E5" content="\u8FD9\u662F\u4E00\u6761\u544A\u8B66\u7684\u6D88\u606F\u901A\u77E5" />
    <t-notification theme="success" title="\u6210\u529F\u901A\u77E5" content="\u8FD9\u662F\u4E00\u6761\u6210\u529F\u7684\u6D88\u606F\u901A\u77E5" />
  </t-space>
</template>
`,C=`<template>
  <t-space direction="vertical" :size="24">
    <t-notification theme="info" title="\u8D85\u51FA\u7684\u6587\u672C\u7701\u7565\u53F7\u663E\u793A" :content="content" :footer="footer" />
    <t-notification theme="info" title="\u5E26\u5173\u95ED\u6309\u94AE" content="\u8FD9\u662F\u4E00\u6761\u6D88\u606F\u901A\u77E5" :close-btn="true" />
    <t-notification theme="info" title="\u6D88\u606F\u901A\u77E5\u6807\u9898" content="\u4F7F\u7528 function \u81EA\u5B9A\u4E49\u5E95\u90E8\u5185\u5BB9" :footer="footer2" />
    <t-notification v-if="visible" theme="info" content="1. \u4F7F\u7528\u63D2\u69FD\u81EA\u5B9A\u4E49\u6807\u9898 2. \u4F7F\u7528\u63D2\u69FD\u81EA\u5B9A\u4E49\u5E95\u90E8\u5185\u5BB9">
      <template #title>
        <div>\u6D88\u606F\u901A\u77E5\u6807\u9898 <small>\u6D88\u606F\u901A\u77E5\u526F\u6807\u9898</small></div>
      </template>
      <template #footer>
        <div class="t-notification__detail">
          <t-button class="t-notification__detail-item" theme="default" variant="text">\u53D6\u6D88</t-button>
          <t-button class="t-notification__detail-item" theme="primary" variant="text" @click="remind">
            \u7A0D\u540E\u63D0\u9192\u6211(10s)
          </t-button>
        </div>
      </template>
    </t-notification>
  </t-space>
</template>

<script lang="jsx">
export default {
  data() {
    return {
      visible: true,
    };
  },
  methods: {
    footer() {
      return (
        <div slot="footer" class="t-notification__detail">
          <t-button class="t-notification__detail-item" theme="primary" variant="text">
            \u67E5\u770B\u8BE6\u60C5
          </t-button>
        </div>
      );
    },
    footer2() {
      return (
        <div slot="footer" class="t-notification__detail">
          <t-button class="t-notification__detail-item" theme="primary" variant="text">
            \u67E5\u770B\u8BE6\u60C5
          </t-button>
        </div>
      );
    },
    content() {
      return '\u6587\u6848\u4E0D\u9650\u957F\u5EA6\uFF0C\u4F46\u5728\u5B9E\u9645\u4F7F\u7528\u65F6\u5EFA\u8BAE\u6587\u6848\u663E\u793A\u5185\u5BB9\u4E0D\u6613\u8FC7\u591A\uFF0C\u5EFA\u8BAE\u6700\u5927\u5C55\u793A\u884C\u6570\u6570\u91CF\u4EE5\u4E09\u884C\u4E3A\u5B9C\uFF0C\u6700\u540E\u4E00\u884C\u6298\u884C\u672B\u5C3E\u5904\u8D85\u51FA\u6587\u672C\u5EFA\u8BAE\u4F1A\u53D8\u4E3A\u7701\u7565\u53F7\u663E\u793A\u3002';
    },
    // title() {
    //   return (
    //     <div>
    //       \u81EA\u5B9A\u4E49\u6807\u9898 <small>\u6211\u662F\u526F\u6807\u9898</small>
    //     </div>
    //   );
    // },
    remind() {
      this.visible = false;
      setTimeout(() => {
        this.visible = true;
      }, 10000);
    },
  },
};
<\/script>
`,k=`<template>
  <t-space direction="vertical" :size="24">
    <t-notification theme="info" title="\u8D85\u51FA\u7684\u6587\u672C\u7701\u7565\u53F7\u663E\u793A" :content="content" :footer="footer" />
    <t-notification theme="info" title="\u5E26\u5173\u95ED\u6309\u94AE" content="\u8FD9\u662F\u4E00\u6761\u6D88\u606F\u901A\u77E5" :close-btn="true" />
    <t-notification theme="info" title="\u6D88\u606F\u901A\u77E5\u6807\u9898" content="\u4F7F\u7528 function \u81EA\u5B9A\u4E49\u5E95\u90E8\u5185\u5BB9" :footer="footer2" />
    <t-notification v-if="visible" theme="info" content="1. \u4F7F\u7528\u63D2\u69FD\u81EA\u5B9A\u4E49\u6807\u9898 2. \u4F7F\u7528\u63D2\u69FD\u81EA\u5B9A\u4E49\u5E95\u90E8\u5185\u5BB9">
      <template #title>
        <div>\u6D88\u606F\u901A\u77E5\u6807\u9898 <small>\u6D88\u606F\u901A\u77E5\u526F\u6807\u9898</small></div>
      </template>
      <template #footer>
        <div class="t-notification__detail">
          <t-button class="t-notification__detail-item" theme="default" variant="text">\u53D6\u6D88</t-button>
          <t-button class="t-notification__detail-item" theme="primary" variant="text" @click="remind">
            \u7A0D\u540E\u63D0\u9192\u6211(10s)
          </t-button>
        </div>
      </template>
    </t-notification>
  </t-space>
</template>

<script setup lang="jsx">
import { ref } from 'vue';

const visible = ref(true);

const footer = () => (
  <div slot="footer" class="t-notification__detail">
    <t-button class="t-notification__detail-item" theme="primary" variant="text">
      \u67E5\u770B\u8BE6\u60C5
    </t-button>
  </div>
);
const footer2 = () => (
  <div slot="footer" class="t-notification__detail">
    <t-button class="t-notification__detail-item" theme="primary" variant="text">
      \u67E5\u770B\u8BE6\u60C5
    </t-button>
  </div>
);
const content = () => '\u6587\u6848\u4E0D\u9650\u957F\u5EA6\uFF0C\u4F46\u5728\u5B9E\u9645\u4F7F\u7528\u65F6\u5EFA\u8BAE\u6587\u6848\u663E\u793A\u5185\u5BB9\u4E0D\u6613\u8FC7\u591A\uFF0C\u5EFA\u8BAE\u6700\u5927\u5C55\u793A\u884C\u6570\u6570\u91CF\u4EE5\u4E09\u884C\u4E3A\u5B9C\uFF0C\u6700\u540E\u4E00\u884C\u6298\u884C\u672B\u5C3E\u5904\u8D85\u51FA\u6587\u672C\u5EFA\u8BAE\u4F1A\u53D8\u4E3A\u7701\u7565\u53F7\u663E\u793A\u3002';
// const title = () => {
//   return <div>
//           \u81EA\u5B9A\u4E49\u6807\u9898 <small>\u6211\u662F\u526F\u6807\u9898</small>
//         </div>;
// };
const remind = () => {
  visible.value = false;
  setTimeout(() => {
    visible.value = true;
  }, 10000);
};
<\/script>
`,w=`<template>
  <t-space direction="vertical">
    <t-space direction="vertical">
      <t-input placeholder="\u8BF7\u8F93\u5165\u6A2A\u5411\u504F\u79FB\u91CF" v-model="offsetX"></t-input>
      <t-input placeholder="\u8BF7\u8F93\u5165\u7EB5\u5411\u504F\u79FB\u91CF" v-model="offsetY"></t-input>
    </t-space>
    <t-space :size="30">
      <t-space direction="vertical" :size="30">
        <t-button variant="outline" @click="$notify.info(infoList[0])">\u5DE6\u4E0A\u89D2</t-button>
        <t-button variant="outline" @click="$notify.info(infoList[2])">\u5DE6\u4E0B\u89D2</t-button>
      </t-space>
      <t-space direction="vertical" :size="30">
        <t-button variant="outline" @click="$notify.info(infoList[1])">\u53F3\u4E0A\u89D2</t-button>
        <t-button variant="outline" @click="$notify.info(infoList[3])">\u53F3\u4E0B\u89D2</t-button>
      </t-space>
    </t-space>
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
    infoList() {
      return [
        { placement: 'top-left' },
        { placement: 'top-right' },
        { placement: 'bottom-left' },
        { placement: 'bottom-right' },
      ].map((item) => ({
        title: '\u6807\u9898\u540D\u79F0',
        content: '\u8FD9\u662F\u4E00\u6761\u53EF\u4EE5\u81EA\u52A8\u5173\u95ED\u7684\u6D88\u606F\u901A\u77E5',
        duration: 3000,
        offset: [this.offsetX, this.offsetY],
        ...item,
      }));
    },
  },
};
<\/script>
`,L=`<template>
  <t-space direction="vertical">
    <t-space direction="vertical">
      <t-input placeholder="\u8BF7\u8F93\u5165\u6A2A\u5411\u504F\u79FB\u91CF" v-model="offsetX"></t-input>
      <t-input placeholder="\u8BF7\u8F93\u5165\u7EB5\u5411\u504F\u79FB\u91CF" v-model="offsetY"></t-input>
    </t-space>
    <t-space :size="30">
      <t-space direction="vertical" :size="30">
        <t-button variant="outline" @click="$notify.info(infoList[0])">\u5DE6\u4E0A\u89D2</t-button>
        <t-button variant="outline" @click="$notify.info(infoList[2])">\u5DE6\u4E0B\u89D2</t-button>
      </t-space>
      <t-space direction="vertical" :size="30">
        <t-button variant="outline" @click="$notify.info(infoList[1])">\u53F3\u4E0A\u89D2</t-button>
        <t-button variant="outline" @click="$notify.info(infoList[3])">\u53F3\u4E0B\u89D2</t-button>
      </t-space>
    </t-space>
  </t-space>
</template>

<script setup>
import { ref, computed } from 'vue';

const offsetX = ref('');
const offsetY = ref('');
const infoList = computed(() => [
  {
    placement: 'top-left',
  },
  {
    placement: 'top-right',
  },
  {
    placement: 'bottom-left',
  },
  {
    placement: 'bottom-right',
  },
].map((item) => ({
  title: '\u6807\u9898\u540D\u79F0',
  content: '\u8FD9\u662F\u4E00\u6761\u53EF\u4EE5\u81EA\u52A8\u5173\u95ED\u7684\u6D88\u606F\u901A\u77E5',
  duration: 3000,
  offset: [offsetX.value, offsetY.value],
  ...item,
})));
<\/script>
`,z=`<template>
  <t-space>
    <t-button variant="outline" @click="toggle">\u81EA\u7531\u63A7\u5236\u5173\u95ED\u65F6\u673A\uFF08{{ notification ? '\u5173\u95ED' : '\u6253\u5F00' }}\uFF09</t-button>
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      notification: null,
    };
  },
  methods: {
    toggle() {
      if (!this.notification) {
        this.notification = this.$notify.info({
          title: '\u6807\u9898\u540D\u79F0',
          content: '\u8FD9\u662F\u4E00\u6761\u9700\u8981\u624B\u52A8\u5173\u95ED\u7684\u6D88\u606F\u901A\u77E5',
          duration: 0,
        });
      } else {
        // this.notification.then(ins => ins.close()); // \u53E6\u4E00\u79CD\u5173\u95ED\u65B9\u6CD5
        this.$notify.close(this.notification);
        this.notification = null;
      }
    },
  },
};
<\/script>

<style scoped>
.t-button + .t-button {
  margin-left: 16px;
}
</style>
`,$=`<template>
  <t-space>
    <t-button variant="outline" @click="toggle">\u81EA\u7531\u63A7\u5236\u5173\u95ED\u65F6\u673A\uFF08{{ notification ? '\u5173\u95ED' : '\u6253\u5F00' }}\uFF09</t-button>
  </t-space>
</template>

<script setup>
import { NotifyPlugin } from 'tdesign-vue';
import { ref } from 'vue';

const notification = ref(null);
const toggle = () => {
  if (!notification.value) {
    notification.value = NotifyPlugin.info({
      title: '\u6807\u9898\u540D\u79F0',
      content: '\u8FD9\u662F\u4E00\u6761\u9700\u8981\u624B\u52A8\u5173\u95ED\u7684\u6D88\u606F\u901A\u77E5',
      duration: 0,
    });
  } else {
    // this.notification.then(ins => ins.close()); // \u53E6\u4E00\u79CD\u5173\u95ED\u65B9\u6CD5
    NotifyPlugin.close(notification.value);
    notification.value = null;
  }
};
<\/script>

<style scoped>
.t-button + .t-button {
  margin-left: 16px;
}
</style>
`,d=[{name:"closeBtn",type:"Boolean",defaultValue:!1,options:[]},{name:"icon",type:"Boolean",defaultValue:!0,options:[]},{name:"theme",type:"enum",defaultValue:"info",options:[{label:"info",value:"info"},{label:"success",value:"success"},{label:"warning",value:"warning"},{label:"error",value:"error"}]}];const s={};s.setup=(t,n)=>{const e=l(d),i=[{label:"notification",value:"notification"}],o={notification:'<t-notification v-bind="configProps" duration="0" title="\u6807\u9898\u540D\u79F0" content="\u8FD9\u662F\u4E00\u6761\u6D88\u606F\u901A\u77E5" />'},a=l(`<template>${o[i[0].value].trim()}</template>`);function p(u){a.value=`<template>${o[u].trim()}</template>`}return{configList:e,panelList:i,usageCode:a,onPanelChange:p}};var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("base-usage",{attrs:{code:t.usageCode,"config-list":t.configList,"panel-list":t.panelList},on:{PanelChange:t.onPanelChange},scopedSlots:t._u([{key:"notification",fn:function(i){var o=i.configProps;return[e("t-notification",t._b({attrs:{duration:"0",title:"\u6807\u9898\u540D\u79F0",content:"\u8FD9\u662F\u4E00\u6761\u6D88\u606F\u901A\u77E5"}},"t-notification",o,!1))]}}])})},v=[];r._withStripped=!0;const c={};var f=m(s,r,v,!1,h,null,null,null);function h(t){for(let n in c)this[n]=c[n]}f.options.__file="../src/notification/_usage/index.vue";var D=function(){return f.exports}();export{_ as D,D as U,g as a,x as b,y as c,C as d,k as e,w as f,L as g,z as h,$ as i};
