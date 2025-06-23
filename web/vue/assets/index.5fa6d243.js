import{Y as l,n as b}from"./index.663c003f.js";var f=`<template>
  <t-space>
    <!-- \u5171\u4E09\u79CD\u65B9\u5F0F\u81EA\u5B9A\u4E49\u6D6E\u5C42\u5185\u5BB9 -->

    <!-- \u4F7F\u7528 content \u5C5E\u6027\u6E32\u67D3\u6D6E\u5C42\u5185\u5BB9 -->
    <t-space>
      <t-popup content="\u53EF\u4EE5\u5728\u6D6E\u5C42\u5185\u5BB9\u4E2D\u63CF\u8FF0\u7981\u7528\u539F\u56E0">
        <t-button variant="outline" disabled>\u7981\u7528\u72B6\u6001</t-button>
      </t-popup>
    </t-space>

    <!-- \u4F7F\u7528 content \u63D2\u69FD\u6E32\u67D3\u6D6E\u5C42\u5185\u5BB9 -->
    <!-- slot="content" \u5199\u6CD5\u4E0D\u5EFA\u8BAE\u4F7F\u7528\uFF0C\u8BF7\u4F7F\u7528 #content \u5199\u6CD5 -->
    <t-space>
      <t-popup>
        <t-button variant="outline">\u89E6\u53D1\u5143\u7D20</t-button>
        <!-- <t-space slot="content">\u89E6\u53D1\u5143\u7D20\u662F\u6307\u89E6\u53D1\u6D6E\u5C42\u5185\u5BB9\u663E\u793A\u7684\u5143\u7D20</t-space> -->
        <template #content>
          <div>\u89E6\u53D1\u5143\u7D20\u662F\u6307\u89E6\u53D1\u6D6E\u5C42\u5185\u5BB9\u663E\u793A\u7684\u5143\u7D20</div>
        </template>
      </t-popup>
    </t-space>

    <!-- \u4F7F\u7528 content \u6E32\u67D3\u51FD\u6570\u8F93\u51FA\u6D6E\u5C42\u5185\u5BB9 -->
    <t-space>
      <t-popup :content="renderPopupContent">
        <t-button variant="outline">\u6D6E\u5C42\u5185\u5BB9</t-button>
      </t-popup>
    </t-space>
  </t-space>
</template>

<script lang="jsx">
export default {
  methods: {
    renderPopupContent() {
      return <div>\u6D6E\u5C42\u5185\u5BB9\u662F\u6307\u6D6E\u5C42\u91CC\u9762\u663E\u793A\u7684\u5168\u90E8\u5185\u5BB9\uFF0C\u8FD9\u91CC\u7684\u6D6E\u5C42\u5185\u5BB9\u4F7F\u7528\u6E32\u67D3\u51FD\u6570\u5B9A\u4E49</div>;
    },
  },
};
<\/script>
`,y=`<template>
  <t-space>
    <!-- \u5171\u4E09\u79CD\u65B9\u5F0F\u81EA\u5B9A\u4E49\u6D6E\u5C42\u5185\u5BB9 -->

    <!-- \u4F7F\u7528 content \u5C5E\u6027\u6E32\u67D3\u6D6E\u5C42\u5185\u5BB9 -->
    <t-space>
      <t-popup content="\u53EF\u4EE5\u5728\u6D6E\u5C42\u5185\u5BB9\u4E2D\u63CF\u8FF0\u7981\u7528\u539F\u56E0">
        <t-button variant="outline" disabled>\u7981\u7528\u72B6\u6001</t-button>
      </t-popup>
    </t-space>

    <!-- \u4F7F\u7528 content \u63D2\u69FD\u6E32\u67D3\u6D6E\u5C42\u5185\u5BB9 -->
    <!-- slot="content" \u5199\u6CD5\u4E0D\u5EFA\u8BAE\u4F7F\u7528\uFF0C\u8BF7\u4F7F\u7528 #content \u5199\u6CD5 -->
    <t-space>
      <t-popup>
        <t-button variant="outline">\u89E6\u53D1\u5143\u7D20</t-button>
        <!-- <t-space slot="content">\u89E6\u53D1\u5143\u7D20\u662F\u6307\u89E6\u53D1\u6D6E\u5C42\u5185\u5BB9\u663E\u793A\u7684\u5143\u7D20</t-space> -->
        <template #content>
          <div>\u89E6\u53D1\u5143\u7D20\u662F\u6307\u89E6\u53D1\u6D6E\u5C42\u5185\u5BB9\u663E\u793A\u7684\u5143\u7D20</div>
        </template>
      </t-popup>
    </t-space>

    <!-- \u4F7F\u7528 content \u6E32\u67D3\u51FD\u6570\u8F93\u51FA\u6D6E\u5C42\u5185\u5BB9 -->
    <t-space>
      <t-popup :content="renderPopupContent">
        <t-button variant="outline">\u6D6E\u5C42\u5185\u5BB9</t-button>
      </t-popup>
    </t-space>
  </t-space>
</template>

<script setup lang="jsx">
const renderPopupContent = () => <div>\u6D6E\u5C42\u5185\u5BB9\u662F\u6307\u6D6E\u5C42\u91CC\u9762\u663E\u793A\u7684\u5168\u90E8\u5185\u5BB9\uFF0C\u8FD9\u91CC\u7684\u6D6E\u5C42\u5185\u5BB9\u4F7F\u7528\u6E32\u67D3\u51FD\u6570\u5B9A\u4E49</div>;
<\/script>
`,C=`<template>
  <t-space direction="vertical">
    <!-- \u603B\u5171\u56DB\u79CD\u81EA\u5B9A\u4E49\u89E6\u53D1\u5143\u7D20\u7684\u65B9\u5F0F -->
    <t-space>
      <t-space>
        <t-popup content="\u6211\u7684\u89E6\u53D1\u5143\u7D20\u901A\u8FC7\u9ED8\u8BA4\u63D2\u69FD\u6E32\u67D3">
          <t-button variant="outline">\u9ED8\u8BA4\u63D2\u69FD\u5B9A\u4E49\u89E6\u53D1\u5143\u7D20</t-button>
        </t-popup>
      </t-space>
      <t-space>
        <t-popup content="\u6211\u7684\u89E6\u53D1\u5143\u7D20\u901A\u8FC7\u63D2\u69FD(triggerElement)\u6E32\u67D3">
          <t-button variant="outline" slot="triggerElement">\u5177\u540D\u63D2\u69FD\u5B9A\u4E49\u89E6\u53D1\u5143\u7D20</t-button>
        </t-popup>
      </t-space>
    </t-space>
    <t-space>
      <t-space>
        <t-popup content="\u6211\u7684\u89E6\u53D1\u5143\u7D20\u901A\u8FC7\u6E32\u67D3\u51FD\u6570 default \u6E32\u67D3" :default="renderTriggerElement1"></t-popup>
      </t-space>
      <t-space>
        <t-popup
          content="\u6211\u7684\u89E6\u53D1\u5143\u7D20\u901A\u8FC7\u6E32\u67D3\u51FD\u6570 triggerElement \u6E32\u67D3"
          :triggerElement="renderTriggerElement2"
        ></t-popup>
      </t-space>
    </t-space>
  </t-space>
</template>

<script lang="jsx">
export default {
  methods: {
    renderTriggerElement1() {
      return <t-button variant="outline">\u6E32\u67D3\u51FD\u6570\u5B9A\u4E49\u89E6\u53D1\u5143\u7D201</t-button>;
    },
    renderTriggerElement2() {
      return <t-button variant="outline">\u6E32\u67D3\u51FD\u6570\u5B9A\u4E49\u89E6\u53D1\u5143\u7D202</t-button>;
    },
  },
};
<\/script>
<style scoped>
.t-popup-demo-base-item {
  display: inline-block;
  width: 200px;
}
.t-popup-demo-base-item + .t-popup-demo-base-item {
  margin-left: 30px;
}
</style>
`,x=`<template>
  <t-space direction="vertical">
    <!-- \u603B\u5171\u56DB\u79CD\u81EA\u5B9A\u4E49\u89E6\u53D1\u5143\u7D20\u7684\u65B9\u5F0F -->
    <t-space>
      <t-space>
        <t-popup content="\u6211\u7684\u89E6\u53D1\u5143\u7D20\u901A\u8FC7\u9ED8\u8BA4\u63D2\u69FD\u6E32\u67D3">
          <t-button variant="outline">\u9ED8\u8BA4\u63D2\u69FD\u5B9A\u4E49\u89E6\u53D1\u5143\u7D20</t-button>
        </t-popup>
      </t-space>
      <t-space>
        <t-popup content="\u6211\u7684\u89E6\u53D1\u5143\u7D20\u901A\u8FC7\u63D2\u69FD(triggerElement)\u6E32\u67D3">
          <t-button variant="outline" slot="triggerElement">\u5177\u540D\u63D2\u69FD\u5B9A\u4E49\u89E6\u53D1\u5143\u7D20</t-button>
        </t-popup>
      </t-space>
    </t-space>
    <t-space>
      <t-space>
        <t-popup content="\u6211\u7684\u89E6\u53D1\u5143\u7D20\u901A\u8FC7\u6E32\u67D3\u51FD\u6570 default \u6E32\u67D3" :default="renderTriggerElement1"></t-popup>
      </t-space>
      <t-space>
        <t-popup
          content="\u6211\u7684\u89E6\u53D1\u5143\u7D20\u901A\u8FC7\u6E32\u67D3\u51FD\u6570 triggerElement \u6E32\u67D3"
          :triggerElement="renderTriggerElement2"
        ></t-popup>
      </t-space>
    </t-space>
  </t-space>
</template>

<script setup lang="jsx">
const renderTriggerElement1 = () => <t-button variant="outline">\u6E32\u67D3\u51FD\u6570\u5B9A\u4E49\u89E6\u53D1\u5143\u7D201</t-button>;
const renderTriggerElement2 = () => <t-button variant="outline">\u6E32\u67D3\u51FD\u6570\u5B9A\u4E49\u89E6\u53D1\u5143\u7D202</t-button>;
<\/script>
<style scoped>
.t-popup-demo-base-item {
  display: inline-block;
  width: 200px;
}
.t-popup-demo-base-item + .t-popup-demo-base-item {
  margin-left: 30px;
}
</style>
`,w=`<template>
  <t-space>
    <t-popup content="\u6587\u5B57\u63D0\u793A\u4EC5\u5C55\u793A\u6587\u672C\u5185\u5BB9" destroyOnClose>
      <t-button variant="outline">\u60AC\u6D6E\u65F6\u89E6\u53D1\uFF08\u9ED8\u8BA4\uFF09</t-button>
    </t-popup>
    <t-popup content="\u6587\u5B57\u63D0\u793A\u4EC5\u5C55\u793A\u6587\u672C\u5185\u5BB9" destroyOnClose trigger="click">
      <t-button variant="outline">\u70B9\u51FB\u65F6\u89E6\u53D1</t-button>
    </t-popup>
    <t-popup content="\u6587\u5B57\u63D0\u793A\u4EC5\u5C55\u793A\u6587\u672C\u5185\u5BB9" destroyOnClose trigger="focus">
      <t-input placeholder="\u83B7\u5F97\u7126\u70B9\u65F6\u89E6\u53D1" />
    </t-popup>
    <t-popup content="\u6587\u5B57\u63D0\u793A\u4EC5\u5C55\u793A\u6587\u672C\u5185\u5BB9" destroyOnClose trigger="context-menu">
      <t-button variant="outline">\u53F3\u51FB\u65F6\u89E6\u53D1</t-button>
    </t-popup>
  </t-space>
</template>
`,O=`<template>
  <t-space>
    <t-popup content="\u6587\u5B57\u63D0\u793A\u4EC5\u5C55\u793A\u6587\u672C\u5185\u5BB9" destroyOnClose>
      <t-button variant="outline">\u60AC\u6D6E\u65F6\u89E6\u53D1\uFF08\u9ED8\u8BA4\uFF09</t-button>
    </t-popup>
    <t-popup content="\u6587\u5B57\u63D0\u793A\u4EC5\u5C55\u793A\u6587\u672C\u5185\u5BB9" destroyOnClose trigger="click">
      <t-button variant="outline">\u70B9\u51FB\u65F6\u89E6\u53D1</t-button>
    </t-popup>
    <t-popup content="\u6587\u5B57\u63D0\u793A\u4EC5\u5C55\u793A\u6587\u672C\u5185\u5BB9" destroyOnClose trigger="focus">
      <t-input placeholder="\u83B7\u5F97\u7126\u70B9\u65F6\u89E6\u53D1" />
    </t-popup>
    <t-popup content="\u6587\u5B57\u63D0\u793A\u4EC5\u5C55\u793A\u6587\u672C\u5185\u5BB9" destroyOnClose trigger="context-menu">
      <t-button variant="outline">\u53F3\u51FB\u65F6\u89E6\u53D1</t-button>
    </t-popup>
  </t-space>
</template>
`,_=`<template>
  <div class="container">
    <t-popup class="placement top center" content="\u8FD9\u662Fpopup\u5185\u5BB9" placement="top" showArrow destroyOnClose>
      <t-button variant="outline"> top </t-button>
    </t-popup>
    <t-popup class="placement top left" content="\u8FD9\u662Fpopup\u5185\u5BB9" placement="top-left" showArrow destroyOnClose>
      <t-button variant="outline"> top-left </t-button>
    </t-popup>
    <t-popup class="placement top right" content="\u8FD9\u662Fpopup\u5185\u5BB9" placement="top-right" showArrow destroyOnClose>
      <t-button variant="outline"> top-right </t-button>
    </t-popup>
    <t-popup class="placement bottom center" content="\u8FD9\u662Fpopup\u5185\u5BB9" placement="bottom" showArrow destroyOnClose>
      <t-button variant="outline"> bottom </t-button>
    </t-popup>
    <t-popup class="placement bottom left" content="\u8FD9\u662Fpopup\u5185\u5BB9" placement="bottom-left" showArrow destroyOnClose>
      <t-button variant="outline"> bottom-left </t-button>
    </t-popup>
    <t-popup class="placement bottom right" content="\u8FD9\u662Fpopup\u5185\u5BB9" placement="bottom-right" showArrow destroyOnClose>
      <t-button variant="outline"> bottom-right </t-button>
    </t-popup>
    <t-popup class="placement align" content="\u8FD9\u662Fpopup\u5185\u5BB9" placement="left" showArrow destroyOnClose>
      <t-button variant="outline"> left </t-button>
    </t-popup>
    <t-popup class="placement top-align" content="\u8FD9\u662Fpopup\u5185\u5BB9" placement="left-top" showArrow destroyOnClose>
      <t-button variant="outline"> left-top </t-button>
    </t-popup>
    <t-popup class="placement bottom-align" content="\u8FD9\u662Fpopup\u5185\u5BB9" placement="left-bottom" showArrow destroyOnClose>
      <t-button variant="outline"> left-bottom </t-button>
    </t-popup>
    <t-popup class="placement right-full align" content="\u8FD9\u662Fpopup\u5185\u5BB9" placement="right" showArrow destroyOnClose>
      <t-button variant="outline"> right </t-button>
    </t-popup>
    <t-popup
      class="placement right-full top-align"
      content="\u8FD9\u662Fpopup\u5185\u5BB9"
      placement="right-top"
      show-arrow
      destroy-on-hide
    >
      <t-button variant="outline"> right-top </t-button>
    </t-popup>
    <t-popup
      class="placement right-full bottom-align"
      content="\u8FD9\u662Fpopup\u5185\u5BB9"
      placement="right-bottom"
      show-arrow
      destroy-on-hide
    >
      <t-button variant="outline"> right-bottom </t-button>
    </t-popup>
  </div>
</template>

<style lang="less" scoped>
.container {
  margin: 0 auto;
  width: 500px;
  height: 260px;
  position: relative;
}
.placement {
  position: absolute;
  &.top {
    top: 0;
  }
  &.center {
    left: 42%;
  }
  &.left {
    left: 70px;
  }
  &.right {
    right: 70px;
  }
  &.bottom {
    bottom: 0;
  }
  &.align {
    top: 42%;
  }
  &.top-align {
    top: 50px;
  }
  &.bottom-align {
    bottom: 50px;
  }
  &.right-full {
    right: 0;
  }
}
</style>
`,A=`<template>
  <div class="container">
    <t-popup class="placement top center" content="\u8FD9\u662Fpopup\u5185\u5BB9" placement="top" showArrow destroyOnClose>
      <t-button variant="outline"> top </t-button>
    </t-popup>
    <t-popup class="placement top left" content="\u8FD9\u662Fpopup\u5185\u5BB9" placement="top-left" showArrow destroyOnClose>
      <t-button variant="outline"> top-left </t-button>
    </t-popup>
    <t-popup class="placement top right" content="\u8FD9\u662Fpopup\u5185\u5BB9" placement="top-right" showArrow destroyOnClose>
      <t-button variant="outline"> top-right </t-button>
    </t-popup>
    <t-popup class="placement bottom center" content="\u8FD9\u662Fpopup\u5185\u5BB9" placement="bottom" showArrow destroyOnClose>
      <t-button variant="outline"> bottom </t-button>
    </t-popup>
    <t-popup class="placement bottom left" content="\u8FD9\u662Fpopup\u5185\u5BB9" placement="bottom-left" showArrow destroyOnClose>
      <t-button variant="outline"> bottom-left </t-button>
    </t-popup>
    <t-popup class="placement bottom right" content="\u8FD9\u662Fpopup\u5185\u5BB9" placement="bottom-right" showArrow destroyOnClose>
      <t-button variant="outline"> bottom-right </t-button>
    </t-popup>
    <t-popup class="placement align" content="\u8FD9\u662Fpopup\u5185\u5BB9" placement="left" showArrow destroyOnClose>
      <t-button variant="outline"> left </t-button>
    </t-popup>
    <t-popup class="placement top-align" content="\u8FD9\u662Fpopup\u5185\u5BB9" placement="left-top" showArrow destroyOnClose>
      <t-button variant="outline"> left-top </t-button>
    </t-popup>
    <t-popup class="placement bottom-align" content="\u8FD9\u662Fpopup\u5185\u5BB9" placement="left-bottom" showArrow destroyOnClose>
      <t-button variant="outline"> left-bottom </t-button>
    </t-popup>
    <t-popup class="placement right-full align" content="\u8FD9\u662Fpopup\u5185\u5BB9" placement="right" showArrow destroyOnClose>
      <t-button variant="outline"> right </t-button>
    </t-popup>
    <t-popup
      class="placement right-full top-align"
      content="\u8FD9\u662Fpopup\u5185\u5BB9"
      placement="right-top"
      show-arrow
      destroy-on-hide
    >
      <t-button variant="outline"> right-top </t-button>
    </t-popup>
    <t-popup
      class="placement right-full bottom-align"
      content="\u8FD9\u662Fpopup\u5185\u5BB9"
      placement="right-bottom"
      show-arrow
      destroy-on-hide
    >
      <t-button variant="outline"> right-bottom </t-button>
    </t-popup>
  </div>
</template>

<style lang="less" scoped>
.container {
  margin: 0 auto;
  width: 500px;
  height: 260px;
  position: relative;
}
.placement {
  position: absolute;
  &.top {
    top: 0;
  }
  &.center {
    left: 42%;
  }
  &.left {
    left: 70px;
  }
  &.right {
    right: 70px;
  }
  &.bottom {
    bottom: 0;
  }
  &.align {
    top: 42%;
  }
  &.top-align {
    top: 50px;
  }
  &.bottom-align {
    bottom: 50px;
  }
  &.right-full {
    right: 0;
  }
}
</style>
`,E=`<template>
  <t-space>
    <t-popup
      content="\u6D6E\u5C42\u62E5\u6709\u81EA\u5B9A\u4E49\u7C7B\u540D\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49\u6D6E\u5C42\u6837\u5F0F"
      overlayClassName="tdesign-demo__custom-popup"
      placement="bottom"
    >
      <t-button variant="outline">\u81EA\u5B9A\u4E49\u6D6E\u5C42\u7C7B\u540D</t-button>
    </t-popup>

    <t-popup
      content="\u6D6E\u5C42\u5BBD\u5EA6\u662F\u56FA\u5B9A\u7684\uFF0C\u4E0D\u4F1A\u968F\u5185\u5BB9\u53D8\u5316\u800C\u53D8\u5316"
      :overlayInnerStyle="{ width: '350px', textAlign: 'center' }"
      placement="bottom"
    >
      <t-button variant="outline">\u56FA\u5B9A\u6D6E\u5C42\u5BBD\u5EA6</t-button>
    </t-popup>

    <t-popup
      content="\u53EF\u4EE5\u8BBE\u7F6E\u6D6E\u5C42\u6700\u5927\u5BBD\u5EA6\uFF0C\u5F53\u5185\u5BB9\u8D85\u51FA\u6700\u5927\u5BBD\u5EA6\u65F6\uFF0C\u6587\u672C\u5185\u5BB9\u624D\u4F1A\u6362\u884C"
      :overlayStyle="{ maxWidth: '250px' }"
      placement="bottom"
    >
      <t-button variant="outline">\u6D6E\u5C42\u6700\u5927\u5BBD\u5EA6</t-button>
    </t-popup>

    <t-popup
      content="overlayInnerStyle \u4F5C\u4E3A\u51FD\u6570\u4F7F\u7528\uFF0C\u53EF\u4EE5\u8BA9\u6D6E\u5C42\u5185\u5BB9\u548C\u89E6\u53D1\u5143\u7D20\u540C\u5BBD"
      :overlayInnerStyle="(triggerElem) => ({ width: \`\${triggerElem.offsetWidth}px\` })"
      placement="bottom"
    >
      <t-button variant="outline">\u6D6E\u5C42\u548C\u89E6\u53D1\u5143\u7D20\u540C\u5BBD</t-button>
    </t-popup>
  </t-space>
</template>
`,D=`<template>
  <t-space>
    <t-popup
      content="\u6D6E\u5C42\u62E5\u6709\u81EA\u5B9A\u4E49\u7C7B\u540D\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49\u6D6E\u5C42\u6837\u5F0F"
      overlayClassName="tdesign-demo__custom-popup"
      placement="bottom"
    >
      <t-button variant="outline">\u81EA\u5B9A\u4E49\u6D6E\u5C42\u7C7B\u540D</t-button>
    </t-popup>

    <t-popup
      content="\u6D6E\u5C42\u5BBD\u5EA6\u662F\u56FA\u5B9A\u7684\uFF0C\u4E0D\u4F1A\u968F\u5185\u5BB9\u53D8\u5316\u800C\u53D8\u5316"
      :overlayInnerStyle="{ width: '350px', textAlign: 'center' }"
      placement="bottom"
    >
      <t-button variant="outline">\u56FA\u5B9A\u6D6E\u5C42\u5BBD\u5EA6</t-button>
    </t-popup>

    <t-popup
      content="\u53EF\u4EE5\u8BBE\u7F6E\u6D6E\u5C42\u6700\u5927\u5BBD\u5EA6\uFF0C\u5F53\u5185\u5BB9\u8D85\u51FA\u6700\u5927\u5BBD\u5EA6\u65F6\uFF0C\u6587\u672C\u5185\u5BB9\u624D\u4F1A\u6362\u884C"
      :overlayStyle="{ maxWidth: '250px' }"
      placement="bottom"
    >
      <t-button variant="outline">\u6D6E\u5C42\u6700\u5927\u5BBD\u5EA6</t-button>
    </t-popup>

    <t-popup
      content="overlayInnerStyle \u4F5C\u4E3A\u51FD\u6570\u4F7F\u7528\uFF0C\u53EF\u4EE5\u8BA9\u6D6E\u5C42\u5185\u5BB9\u548C\u89E6\u53D1\u5143\u7D20\u540C\u5BBD"
      :overlayInnerStyle="(triggerElem) => ({ width: \`\${triggerElem.offsetWidth}px\` })"
      placement="bottom"
    >
      <t-button variant="outline">\u6D6E\u5C42\u548C\u89E6\u53D1\u5143\u7D20\u540C\u5BBD</t-button>
    </t-popup>
  </t-space>
</template>
`,S=`<template>
  <div>
    <t-popup :visible="visible">
      <t-button variant="outline" @click="onToggle">\u70B9\u51FB\u63A7\u5236\u6D6E\u5C42\u663E\u793A</t-button>
      <template #content>
        <div>\u6D6E\u5C42\u663E\u793A\u4E0E\u5426\u53EF\u4EE5\u5728\u5916\u90E8\u81EA\u7531\u63A7\u5236</div>
      </template>
    </t-popup>
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
    onToggle() {
      this.visible = !this.visible;
    },
  },
};
<\/script>
`,P=`<template>
  <div>
    <t-popup :visible="visible">
      <t-button variant="outline" @click="onToggle">\u70B9\u51FB\u63A7\u5236\u6D6E\u5C42\u663E\u793A</t-button>
      <template #content>
        <div>\u6D6E\u5C42\u663E\u793A\u4E0E\u5426\u53EF\u4EE5\u5728\u5916\u90E8\u81EA\u7531\u63A7\u5236</div>
      </template>
    </t-popup>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const visible = ref(false);
const onToggle = () => {
  visible.value = !visible.value;
};
<\/script>
`,T=`<template>
  <t-space>
    <t-space>
      <t-popup content="\u89E6\u53D1\u5143\u7D20\u7684\u7236\u5143\u7D20\u662F\u7EC4\u4EF6\u6839\u5143\u7D20\uFF0C\u901A\u8FC7 CSSSelector \u5B9A\u4E49" attach="#myPopup">
        <div id="myPopup">
          <t-button variant="outline">\u7236\u5143\u7D20\u4E3A\u7EC4\u4EF6\u672C\u8EAB</t-button>
        </div>
      </t-popup>
    </t-space>
    <t-space id="second-popup">
      <t-popup content="\u89E6\u53D1\u5143\u7D20\u7684\u7236\u5143\u7D20\u662F\u7EC4\u4EF6\u8DDF\u5143\u7D20\uFF0C\u901A\u8FC7 Function \u5B9A\u4E49" :attach="getAttach">
        <t-button variant="outline">\u7236\u5143\u7D20\u4E3A\u5176\u4ED6\u5143\u7D20</t-button>
      </t-popup>
    </t-space>
  </t-space>
</template>

<script>
export default {
  methods: {
    getAttach() {
      return document.querySelector('#second-popup');
    },
  },
};
<\/script>
`,k=`<template>
  <t-space>
    <t-space>
      <t-popup content="\u89E6\u53D1\u5143\u7D20\u7684\u7236\u5143\u7D20\u662F\u7EC4\u4EF6\u6839\u5143\u7D20\uFF0C\u901A\u8FC7 CSSSelector \u5B9A\u4E49" attach="#myPopup">
        <div id="myPopup">
          <t-button variant="outline">\u7236\u5143\u7D20\u4E3A\u7EC4\u4EF6\u672C\u8EAB</t-button>
        </div>
      </t-popup>
    </t-space>
    <t-space id="second-popup">
      <t-popup content="\u89E6\u53D1\u5143\u7D20\u7684\u7236\u5143\u7D20\u662F\u7EC4\u4EF6\u8DDF\u5143\u7D20\uFF0C\u901A\u8FC7 Function \u5B9A\u4E49" :attach="getAttach">
        <t-button variant="outline">\u7236\u5143\u7D20\u4E3A\u5176\u4ED6\u5143\u7D20</t-button>
      </t-popup>
    </t-space>
  </t-space>
</template>

<script setup>
const getAttach = () => document.querySelector('#second-popup');
<\/script>
`,V=`<template>
  <div>
    <t-popup content="\u5F53\u6D6E\u5C42\u5185\u5BB9\u88AB\u9690\u85CF\u65F6\uFF0C\u5C31\u4F1A\u4ECE DOM \u8282\u70B9\u4E2D\u79FB\u9664" destroyOnClose>
      <t-button variant="outline">\u9690\u85CF\u5373\u9500\u6BC1</t-button>
    </t-popup>
  </div>
</template>
`,j=`<template>
  <div>
    <t-popup content="\u5F53\u6D6E\u5C42\u5185\u5BB9\u88AB\u9690\u85CF\u65F6\uFF0C\u5C31\u4F1A\u4ECE DOM \u8282\u70B9\u4E2D\u79FB\u9664" destroyOnClose>
      <t-button variant="outline">\u9690\u85CF\u5373\u9500\u6BC1</t-button>
    </t-popup>
  </div>
</template>
`,B=`<template>
  <div>
    <t-popup content="\u6211\u88AB\u7981\u7528\u4E86\uFF0C\u65E0\u6CD5\u663E\u793A" disabled>
      <t-button variant="outline" disabled>\u7981\u7528\u6D6E\u5C42\u663E\u793A</t-button>
    </t-popup>
  </div>
</template>
`,I=`<template>
  <div>
    <t-popup content="\u6211\u88AB\u7981\u7528\u4E86\uFF0C\u65E0\u6CD5\u663E\u793A" disabled>
      <t-button variant="outline" disabled>\u7981\u7528\u6D6E\u5C42\u663E\u793A</t-button>
    </t-popup>
  </div>
</template>
`,d=[{name:"destroyOnClose",type:"Boolean",defaultValue:!1,options:[]},{name:"disabled",type:"Boolean",defaultValue:!1,options:[]},{name:"hideEmptyPopup",type:"Boolean",defaultValue:!1,options:[]},{name:"overlayStyle",type:"Boolean",defaultValue:!1,options:[]},{name:"showArrow",type:"Boolean",defaultValue:!1,options:[]},{name:"trigger",type:"enum",defaultValue:"hover",options:[{label:"hover",value:"hover"},{label:"click",value:"click"},{label:"focus",value:"focus"},{label:"context-menu",value:"context-menu"}]},{name:"visible",type:"Boolean",defaultValue:!1,options:[]}];const i={};i.setup=(t,n)=>{const e=l(d),o=[{label:"popup",value:"popup"}],p={popup:`
        <t-popup content="\u8FD9\u662F\u4E00\u4E2A\u5F39\u51FA\u6846" v-bind="configProps">
          <t-button>\u6309\u94AE</t-button>
        </t-popup>
      `},a=l(`<template>${p[o[0].value].trim()}</template>`);function c(m){a.value=`<template>${p[m].trim()}</template>`}return{configList:e,panelList:o,usageCode:a,onPanelChange:c}};var s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("base-usage",{attrs:{code:t.usageCode,"config-list":t.configList,"panel-list":t.panelList},on:{PanelChange:t.onPanelChange},scopedSlots:t._u([{key:"popup",fn:function(o){var p=o.configProps;return[e("t-popup",t._b({attrs:{content:"\u8FD9\u662F\u4E00\u4E2A\u5F39\u51FA\u6846"}},"t-popup",p,!1),[e("t-button",[t._v("\u6309\u94AE")])],1)]}}])})},v=[];s._withStripped=!0;const u={};var r=b(i,s,v,!1,g,null,null,null);function g(t){for(let n in u)this[n]=u[n]}r.options.__file="../src/popup/_usage/index.vue";var $=function(){return r.exports}();export{f as D,$ as U,y as a,C as b,x as c,w as d,O as e,_ as f,A as g,E as h,D as i,S as j,P as k,T as l,k as m,V as n,j as o,B as p,I as q};
