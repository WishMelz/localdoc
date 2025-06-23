import{Y as l,n as f}from"./index.663c003f.js";var h=`<template>
  <t-space size="80px">
    <t-popconfirm theme="default" content="\u786E\u8BA4\u5220\u9664\u8BA2\u5355\u5417">
      <t-button>\u5220\u9664\u8BA2\u5355</t-button>
    </t-popconfirm>

    <!-- \u53D7\u63A7\u7528\u6CD5\uFF1A\u81EA\u7531\u63A7\u5236\u6D6E\u5C42\u663E\u793A\u4E0E\u5426 -->
    <t-popconfirm
      :visible="visible"
      theme="default"
      content="\u662F\u5426\u63D0\u4EA4\u5BA1\u6838\uFF1F\uFF08\u81EA\u7531\u63A7\u5236\u6D6E\u5C42\u663E\u793A\u6216\u9690\u85CF\uFF09"
      @visible-change="onVisibleChange"
    >
      <t-button>\u63D0\u4EA4\u5BA1\u6838</t-button>
    </t-popconfirm>
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      visible: true,
    };
  },
  methods: {
    onVisibleChange(val, context = {}) {
      // trigger \u8868\u793A\u89E6\u53D1\u6765\u6E90\uFF0C\u53EF\u4EE5\u6839\u636E\u89E6\u53D1\u6765\u6E90\u81EA\u7531\u63A7\u5236 visible
      if (context && context.trigger === 'confirm') {
        const msg = this.$message.info('\u63D0\u4EA4\u4E2D');
        const timer = setTimeout(() => {
          this.$message.close(msg);
          this.$message.success('\u63D0\u4EA4\u6210\u529F\uFF01');
          this.visible = false;
          clearTimeout(timer);
        }, 1000);
      } else {
        this.visible = val;
      }
    },
  },
};
<\/script>
`,x=`<template>
  <t-space size="80px">
    <t-popconfirm theme="default" content="\u786E\u8BA4\u5220\u9664\u8BA2\u5355\u5417">
      <t-button>\u5220\u9664\u8BA2\u5355</t-button>
    </t-popconfirm>

    <!-- \u53D7\u63A7\u7528\u6CD5\uFF1A\u81EA\u7531\u63A7\u5236\u6D6E\u5C42\u663E\u793A\u4E0E\u5426 -->
    <t-popconfirm
      :visible="visible"
      theme="default"
      content="\u662F\u5426\u63D0\u4EA4\u5BA1\u6838\uFF1F\uFF08\u81EA\u7531\u63A7\u5236\u6D6E\u5C42\u663E\u793A\u6216\u9690\u85CF\uFF09"
      @visible-change="onVisibleChange"
    >
      <t-button>\u63D0\u4EA4\u5BA1\u6838</t-button>
    </t-popconfirm>
  </t-space>
</template>

<script setup>
import { MessagePlugin } from 'tdesign-vue';
import { ref } from 'vue';

const visible = ref(true);
const onVisibleChange = (val, context = {}) => {
  // trigger \u8868\u793A\u89E6\u53D1\u6765\u6E90\uFF0C\u53EF\u4EE5\u6839\u636E\u89E6\u53D1\u6765\u6E90\u81EA\u7531\u63A7\u5236 visible
  if (context && context.trigger === 'confirm') {
    const msg = MessagePlugin.info('\u63D0\u4EA4\u4E2D');
    const timer = setTimeout(() => {
      MessagePlugin.close(msg);
      MessagePlugin.success('\u63D0\u4EA4\u6210\u529F\uFF01');
      visible.value = false;
      clearTimeout(timer);
    }, 1000);
  } else {
    visible.value = val;
  }
};
<\/script>
`,y=`<template>
  <t-space size="60px">
    <t-popconfirm content="\u666E\u901A\u4E8B\u4EF6\u901A\u77E5\u7C7B\u578B\u504F\u5411\u4E8E\u786E\u8BA4" v-model="visible1">
      <t-button>\u9ED8\u8BA4</t-button>
    </t-popconfirm>
    <t-popconfirm theme="warning" content="\u4E8B\u4EF6\u901A\u77E5\u7C7B\u578B\u504F\u5411\u4E8E\u63D0\u793A" v-model="visible2">
      <t-button theme="warning">\u8B66\u544A</t-button>
    </t-popconfirm>
    <t-popconfirm theme="danger" content="\u4E8B\u4EF6\u901A\u77E5\u7C7B\u578B\u504F\u5411\u4E8E\u9AD8\u5371\u63D0\u9192" v-model="visible3">
      <t-button theme="danger">\u5371\u9669</t-button>
    </t-popconfirm>
    <t-popconfirm content="\u57FA\u7840\u6C14\u6CE1\u786E\u8BA4\u6846\u6587\u6848\u793A\u610F\u6587\u5B57\u6309\u94AE" :popupProps="{ placement: 'bottom' }">
      <icon name="browse" style="color: #0052d9" slot="icon" />
      <t-button variant="outline">\u81EA\u5B9A\u4E49\u56FE\u6807\uFF08\u63D2\u69FD\uFF09</t-button>
    </t-popconfirm>

    <t-popconfirm content="\u57FA\u7840\u6C14\u6CE1\u786E\u8BA4\u6846\u6587\u6848\u793A\u610F\u6587\u5B57\u6309\u94AE" :icon="customIcon" :popupProps="{ placement: 'bottom' }">
      <t-button variant="outline">\u81EA\u5B9A\u4E49\u56FE\u6807\uFF08\u5C5E\u6027\uFF09</t-button>
    </t-popconfirm>
  </t-space>
</template>

<script lang="jsx">
import { Icon } from 'tdesign-icons-vue';

export default {
  components: {
    Icon,
  },
  data() {
    return {
      visible1: true,
      visible2: false,
      visible3: false,
    };
  },
  methods: {
    customIcon() {
      return <Icon name="browse" style="margin-right: 8px" />;
    },
  },
};
<\/script>

<style scoped>
.popconfirm-demo .tdesign-demo-block {
  display: flex;
  justify-content: flex-start;
}
.popconfirm-demo .demo-item {
  width: 240px;
  text-align: left;
}
</style>
`,_=`<template>
  <t-space size="60px">
    <t-popconfirm content="\u666E\u901A\u4E8B\u4EF6\u901A\u77E5\u7C7B\u578B\u504F\u5411\u4E8E\u786E\u8BA4" v-model="visible1">
      <t-button>\u9ED8\u8BA4</t-button>
    </t-popconfirm>
    <t-popconfirm theme="warning" content="\u4E8B\u4EF6\u901A\u77E5\u7C7B\u578B\u504F\u5411\u4E8E\u63D0\u793A" v-model="visible2">
      <t-button theme="warning">\u8B66\u544A</t-button>
    </t-popconfirm>
    <t-popconfirm theme="danger" content="\u4E8B\u4EF6\u901A\u77E5\u7C7B\u578B\u504F\u5411\u4E8E\u9AD8\u5371\u63D0\u9192" v-model="visible3">
      <t-button theme="danger">\u5371\u9669</t-button>
    </t-popconfirm>
    <t-popconfirm content="\u57FA\u7840\u6C14\u6CE1\u786E\u8BA4\u6846\u6587\u6848\u793A\u610F\u6587\u5B57\u6309\u94AE" :popupProps="{ placement: 'bottom' }">
      <icon name="browse" style="color: #0052d9" slot="icon" />
      <t-button variant="outline">\u81EA\u5B9A\u4E49\u56FE\u6807\uFF08\u63D2\u69FD\uFF09</t-button>
    </t-popconfirm>

    <t-popconfirm content="\u57FA\u7840\u6C14\u6CE1\u786E\u8BA4\u6846\u6587\u6848\u793A\u610F\u6587\u5B57\u6309\u94AE" :icon="customIcon" :popupProps="{ placement: 'bottom' }">
      <t-button variant="outline">\u81EA\u5B9A\u4E49\u56FE\u6807\uFF08\u5C5E\u6027\uFF09</t-button>
    </t-popconfirm>
  </t-space>
</template>

<script setup lang="jsx">
import { ref } from 'vue';
import { Icon } from 'tdesign-icons-vue';

const visible1 = ref(true);
const visible2 = ref(false);
const visible3 = ref(false);
const customIcon = () => <Icon name="browse" style="margin-right: 8px" />;
<\/script>

<style scoped>
.popconfirm-demo .tdesign-demo-block {
  display: flex;
  justify-content: flex-start;
}
.popconfirm-demo .demo-item {
  width: 240px;
  text-align: left;
}
</style>
`,C=`<template>
  <t-space size="80px">
    <t-popconfirm theme="default">
      <template slot="content">
        <p class="title">\u5E26\u63CF\u8FF0\u7684\u6C14\u6CE1\u786E\u8BA4\u6846\u6587\u5B57\u6309\u94AE</p>
        <p class="describe">\u5E26\u63CF\u8FF0\u7684\u6C14\u6CE1\u786E\u8BA4\u6846\u5728\u4E3B\u8981\u8BF4\u660E\u4E4B\u5916\u589E\u52A0\u4E86\u64CD\u4F5C\u76F8\u5173\u7684\u8BE6\u7EC6\u63CF\u8FF0</p>
      </template>
      <t-button theme="primary">\u81EA\u5B9A\u4E49\u6D6E\u5C42\u5185\u5BB9</t-button>
    </t-popconfirm>

    <t-popconfirm theme="warning">
      <template slot="content">
        <p class="title">\u5E26\u63CF\u8FF0\u7684\u6C14\u6CE1\u786E\u8BA4\u6846\u6587\u5B57\u6309\u94AE</p>
        <p class="describe">\u5E26\u63CF\u8FF0\u7684\u6C14\u6CE1\u786E\u8BA4\u6846\u5728\u4E3B\u8981\u8BF4\u660E\u4E4B\u5916\u589E\u52A0\u4E86\u64CD\u4F5C\u76F8\u5173\u7684\u8BE6\u7EC6\u63CF\u8FF0</p>
      </template>
      <t-button theme="warning">\u81EA\u5B9A\u4E49\u6D6E\u5C42\u5185\u5BB9</t-button>
    </t-popconfirm>
  </t-space>
</template>

<style lang="less" scoped>
.title {
  font-weight: 500;
  font-size: 14px;
}
.describe {
  margin-top: 8px;
  font-size: 12px;
  color: var(--td-text-color-secondary);
}
</style>
`,w=`<template>
  <t-space size="80px">
    <t-popconfirm theme="default">
      <template slot="content">
        <p class="title">\u5E26\u63CF\u8FF0\u7684\u6C14\u6CE1\u786E\u8BA4\u6846\u6587\u5B57\u6309\u94AE</p>
        <p class="describe">\u5E26\u63CF\u8FF0\u7684\u6C14\u6CE1\u786E\u8BA4\u6846\u5728\u4E3B\u8981\u8BF4\u660E\u4E4B\u5916\u589E\u52A0\u4E86\u64CD\u4F5C\u76F8\u5173\u7684\u8BE6\u7EC6\u63CF\u8FF0</p>
      </template>
      <t-button theme="primary">\u81EA\u5B9A\u4E49\u6D6E\u5C42\u5185\u5BB9</t-button>
    </t-popconfirm>

    <t-popconfirm theme="warning">
      <template slot="content">
        <p class="title">\u5E26\u63CF\u8FF0\u7684\u6C14\u6CE1\u786E\u8BA4\u6846\u6587\u5B57\u6309\u94AE</p>
        <p class="describe">\u5E26\u63CF\u8FF0\u7684\u6C14\u6CE1\u786E\u8BA4\u6846\u5728\u4E3B\u8981\u8BF4\u660E\u4E4B\u5916\u589E\u52A0\u4E86\u64CD\u4F5C\u76F8\u5173\u7684\u8BE6\u7EC6\u63CF\u8FF0</p>
      </template>
      <t-button theme="warning">\u81EA\u5B9A\u4E49\u6D6E\u5C42\u5185\u5BB9</t-button>
    </t-popconfirm>
  </t-space>
</template>

<style lang="less" scoped>
.title {
  font-weight: 500;
  font-size: 14px;
}
.describe {
  margin-top: 8px;
  font-size: 12px;
  color: var(--td-text-color-secondary);
}
</style>
`,P=`<template>
  <t-space>
    <!-- \u548C Dialog/Drawer \u7EC4\u4EF6\u7684\u786E\u8BA4/\u53D6\u6D88 \u903B\u8F91\u4E00\u6837 -->
    <t-space>
      <!-- \u4F7F\u7528 props \u5B9A\u4E49\u6309\u94AE\u5185\u5BB9 -->
      <t-popconfirm theme="default" content="\u60A8\u786E\u5B9A\u8981\u63D0\u4EA4\u5417" confirmBtn="\u786E\u8BA4\u63D0\u4EA4" cancelBtn="\u6211\u518D\u60F3\u60F3">
        <t-button variant="outline">\u6309\u94AE\u6837\u5F0F\uFF08\u5C5E\u6027-\u5B57\u7B26\u4E32\uFF09</t-button>
      </t-popconfirm>

      <!-- \u901A\u8FC7\u900F\u4F20\u6309\u94AE\u5C5E\u6027\u81EA\u5B9A\u4E49\u6309\u94AE\uFF0CcancelBtn \u548C confirmBtn \u503C\u4E3A null \u65F6\u8868\u793A\u4E0D\u663E\u793A\u8BE5\u6309\u94AE -->
      <t-popconfirm
        theme="default"
        content="\u60A8\u786E\u5B9A\u8981\u63D0\u4EA4\u5417"
        :confirmBtn="{
          content: '\u786E\u8BA4\u63D0\u4EA4',
          theme: 'warning',
        }"
        :cancelBtn="{
          content: '\u6211\u518D\u60F3\u60F3',
          theme: 'default',
          variant: 'outline',
        }"
      >
        <t-button variant="outline">\u6309\u94AE\u6837\u5F0F\uFF08\u5C5E\u6027-\u5BF9\u8C61\uFF09</t-button>
      </t-popconfirm>

      <!-- \u4F7F\u7528\u63D2\u69FD\u5B9A\u4E49\u6309\u94AE\u5185\u5BB9 -->
      <t-popconfirm :visible="visible" theme="default" content="\u60A8\u786E\u5B9A\u8981\u63D0\u4EA4\u5417">
        <!-- \u81EA\u5B9A\u4E49\u89E6\u53D1\u5143\u7D20 -->
        <t-button variant="outline" @click="visible = true">\u6309\u94AE\u6837\u5F0F\uFF08\u63D2\u69FD\uFF09</t-button>

        <!-- \u81EA\u5B9A\u4E49\u6309\u94AE -->
        <t-button slot="cancelBtn" size="small" variant="text" style="margin-right: 12px" @click="visible = false"
        >\u53D6\u6D88</t-button
        >
        <t-button slot="confirmBtn" size="small" theme="primary" @click="visible = false">\u786E\u5B9A</t-button>
      </t-popconfirm>
    </t-space>
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      visible: true,
    };
  },
};
<\/script>
`,B=`<template>
  <t-space>
    <!-- \u548C Dialog/Drawer \u7EC4\u4EF6\u7684\u786E\u8BA4/\u53D6\u6D88 \u903B\u8F91\u4E00\u6837 -->
    <t-space>
      <!-- \u4F7F\u7528 props \u5B9A\u4E49\u6309\u94AE\u5185\u5BB9 -->
      <t-popconfirm theme="default" content="\u60A8\u786E\u5B9A\u8981\u63D0\u4EA4\u5417" confirmBtn="\u786E\u8BA4\u63D0\u4EA4" cancelBtn="\u6211\u518D\u60F3\u60F3">
        <t-button variant="outline">\u6309\u94AE\u6837\u5F0F\uFF08\u5C5E\u6027-\u5B57\u7B26\u4E32\uFF09</t-button>
      </t-popconfirm>

      <!-- \u901A\u8FC7\u900F\u4F20\u6309\u94AE\u5C5E\u6027\u81EA\u5B9A\u4E49\u6309\u94AE\uFF0CcancelBtn \u548C confirmBtn \u503C\u4E3A null \u65F6\u8868\u793A\u4E0D\u663E\u793A\u8BE5\u6309\u94AE -->
      <t-popconfirm
        theme="default"
        content="\u60A8\u786E\u5B9A\u8981\u63D0\u4EA4\u5417"
        :confirmBtn="{
          content: '\u786E\u8BA4\u63D0\u4EA4',
          theme: 'warning',
        }"
        :cancelBtn="{
          content: '\u6211\u518D\u60F3\u60F3',
          theme: 'default',
          variant: 'outline',
        }"
      >
        <t-button variant="outline">\u6309\u94AE\u6837\u5F0F\uFF08\u5C5E\u6027-\u5BF9\u8C61\uFF09</t-button>
      </t-popconfirm>

      <!-- \u4F7F\u7528\u63D2\u69FD\u5B9A\u4E49\u6309\u94AE\u5185\u5BB9 -->
      <t-popconfirm :visible="visible" theme="default" content="\u60A8\u786E\u5B9A\u8981\u63D0\u4EA4\u5417">
        <!-- \u81EA\u5B9A\u4E49\u89E6\u53D1\u5143\u7D20 -->
        <t-button variant="outline" @click="visible = true">\u6309\u94AE\u6837\u5F0F\uFF08\u63D2\u69FD\uFF09</t-button>

        <!-- \u81EA\u5B9A\u4E49\u6309\u94AE -->
        <t-button slot="cancelBtn" size="small" variant="text" style="margin-right: 12px" @click="visible = false"
        >\u53D6\u6D88</t-button
        >
        <t-button slot="confirmBtn" size="small" theme="primary" @click="visible = false">\u786E\u5B9A</t-button>
      </t-popconfirm>
    </t-space>
  </t-space>
</template>
<script setup>
import { ref } from 'vue';

const visible = ref(true);
<\/script>
`,z=`<template>
  <t-space size="80px">
    <!-- \u53EF\u4EE5\u4F7F\u7528 popupProps.placement \u63A7\u5236\u5F39\u51FA\u65B9\u5411 -->

    <t-popconfirm theme="default" content="\u76F4\u63A5\u4F7F\u7528 placement \u8FDB\u884C\u8BBE\u7F6E" placement="bottom">
      <t-button variant="outline">\u6D6E\u5C42\u51FA\u73B0\u5728\u4E0B\u65B9</t-button>
    </t-popconfirm>
    <t-popconfirm theme="default" content="\u900F\u4F20\u5C5E\u6027\u5230 Popup \u7EC4\u4EF6\u8FDB\u884C\u8BBE\u7F6E" :popupProps="{ placement: 'right' }">
      <t-button variant="outline">\u6D6E\u5C42\u51FA\u73B0\u5728\u53F3\u4FA7</t-button>
    </t-popconfirm>
  </t-space>
</template>
`,D=`<template>
  <t-space size="80px">
    <!-- \u53EF\u4EE5\u4F7F\u7528 popupProps.placement \u63A7\u5236\u5F39\u51FA\u65B9\u5411 -->

    <t-popconfirm theme="default" content="\u76F4\u63A5\u4F7F\u7528 placement \u8FDB\u884C\u8BBE\u7F6E" placement="bottom">
      <t-button variant="outline">\u6D6E\u5C42\u51FA\u73B0\u5728\u4E0B\u65B9</t-button>
    </t-popconfirm>
    <t-popconfirm theme="default" content="\u900F\u4F20\u5C5E\u6027\u5230 Popup \u7EC4\u4EF6\u8FDB\u884C\u8BBE\u7F6E" :popupProps="{ placement: 'right' }">
      <t-button variant="outline">\u6D6E\u5C42\u51FA\u73B0\u5728\u53F3\u4FA7</t-button>
    </t-popconfirm>
  </t-space>
</template>
`,b=[{name:"destroyOnClose",type:"Boolean",defaultValue:!0,options:[]},{name:"placement",type:"enum",defaultValue:"top",options:[{label:"top",value:"top"},{label:"left",value:"left"},{label:"right",value:"right"},{label:"bottom",value:"bottom"},{label:"top-left",value:"top-left"},{label:"top-right",value:"top-right"},{label:"bottom-left",value:"bottom-left"},{label:"bottom-right",value:"bottom-right"},{label:"left-top",value:"left-top"},{label:"left-bottom",value:"left-bottom"},{label:"right-top",value:"right-top"},{label:"right-bottom",value:"right-bottom"}]},{name:"showArrow",type:"Boolean",defaultValue:!0,options:[]},{name:"theme",type:"enum",defaultValue:"default",options:[{label:"default",value:"default"},{label:"warning",value:"warning"},{label:"danger",value:"danger"}]},{name:"visible",type:"Boolean",defaultValue:!1,options:[]}];const s={};s.setup=(t,n)=>{const e=l(b),o=[{label:"popconfirm",value:"popconfirm"}],i={popconfirm:`
        <t-popconfirm v-bind="configProps" :visible="true" content="\u786E\u8BA4\u5220\u9664\u5417">
          <t-button>\u5220\u9664</t-button>
        </t-popconfirm>
      `},p=l(`<template>${i[o[0].value].trim()}</template>`);function m(u){p.value=`<template>${i[u].trim()}</template>`}return{configList:e,panelList:o,usageCode:p,onPanelChange:m}};var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("base-usage",{attrs:{code:t.usageCode,"config-list":t.configList,"panel-list":t.panelList},on:{PanelChange:t.onPanelChange},scopedSlots:t._u([{key:"popconfirm",fn:function(o){var i=o.configProps;return[e("t-popconfirm",t._b({attrs:{visible:!0,content:"\u786E\u8BA4\u5220\u9664\u5417"}},"t-popconfirm",i,!1),[e("t-button",[t._v("\u5220\u9664")])],1)]}}])})},v=[];r._withStripped=!0;const a={};var c=f(s,r,v,!1,d,null,null,null);function d(t){for(let n in a)this[n]=a[n]}c.options.__file="../src/popconfirm/_usage/index.vue";var k=function(){return c.exports}();export{h as D,k as U,x as a,y as b,_ as c,C as d,w as e,P as f,B as g,z as h,D as i};
