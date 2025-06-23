import{Y as o,n as u}from"./index.663c003f.js";var b=`<template>
  <t-space direction="vertical" style="width: 80%">
    <t-tag-input v-model="tags1" clearable @paste="onPaste" @enter="onTagInputEnter" />

    <t-tag-input :value="tags2" label="Controlled: " clearable @change="onChange" />

    <t-tag-input :default-value="tags3" :input-value.sync="inputValue" label="UnControlled: " clearable />
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      tags1: ['Vue', 'React1'],
      tags2: ['Vue', 'React2'],
      tags3: ['Vue', 'React3'],
      inputValue: '',
    };
  },
  methods: {
    onTagInputEnter(val, context) {
      console.log(val, context);
    },
    onChange(val, context) {
      console.log(val, context);
      this.tags2 = val;
    },
    onPaste(context) {
      console.log(context);
    },
  },
};
<\/script>
`,f=`<template>
  <t-space direction="vertical" style="width: 80%">
    <t-tag-input v-model="tags1" clearable @paste="onPaste" @enter="onTagInputEnter" />

    <t-tag-input :value="tags2" label="Controlled: " clearable @change="onChange" />

    <t-tag-input :default-value="tags3" :input-value.sync="inputValue" label="UnControlled: " clearable />
  </t-space>
</template>
<script setup>
import { ref } from 'vue';

const tags1 = ref(['Vue', 'React1']);
const tags2 = ref(['Vue', 'React2']);
const tags3 = ref(['Vue', 'React3']);
const inputValue = ref('');
const onTagInputEnter = (val, context) => {
  console.log(val, context);
};
const onChange = (val, context) => {
  console.log(val, context);
  tags2.value = val;
};
const onPaste = (context) => {
  console.log(context);
};
<\/script>
`,C=`<template>
  <t-space direction="vertical" style="width: 80%">
    <!-- \u6807\u7B7E\u6570\u91CF\u8D85\u51FA\u65F6\uFF0C\u6EDA\u52A8\u663E\u793A -->
    <t-tag-input v-model="tags" label="Scroll: " excess-tags-display-type="scroll" clearable />

    <!-- \u6807\u7B7E\u6570\u91CF\u8D85\u51FA\u65F6\uFF0C\u6362\u884C\u663E\u793A -->
    <t-tag-input v-model="tags" label="BreakLine: " clearable />
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      tags: ['Vue', 'React', 'VueNext', 'MiniProgram', 'Angular', 'Starter Kit'],
    };
  },
};
<\/script>
`,y=`<template>
  <t-space direction="vertical" style="width: 80%">
    <!-- \u6807\u7B7E\u6570\u91CF\u8D85\u51FA\u65F6\uFF0C\u6EDA\u52A8\u663E\u793A -->
    <t-tag-input v-model="tags" label="Scroll: " excess-tags-display-type="scroll" clearable />

    <!-- \u6807\u7B7E\u6570\u91CF\u8D85\u51FA\u65F6\uFF0C\u6362\u884C\u663E\u793A -->
    <t-tag-input v-model="tags" label="BreakLine: " clearable />
  </t-space>
</template>
<script setup>
import { ref } from 'vue';

const tags = ref(['Vue', 'React', 'VueNext', 'MiniProgram', 'Angular', 'Starter Kit']);
<\/script>
`,_=`<template>
  <t-tag-input v-model="tags" placeholder="\u6700\u591A\u53EA\u80FD\u8F93\u5165 3 \u4E2A\u6807\u7B7E" :max="3" @enter="onEnter" style="width: 80%" />
</template>
<script>
import { MessagePlugin } from 'tdesign-vue';

export default {
  data() {
    return {
      tags: [],
    };
  },
  methods: {
    onEnter(value, { inputValue }) {
      if (value.length >= 3 && inputValue) {
        MessagePlugin.warning('\u6700\u591A\u53EA\u80FD\u8F93\u5165 3 \u4E2A\u6807\u7B7E!');
      }
    },
  },
};
<\/script>
`,V=`<template>
  <t-tag-input v-model="tags" placeholder="\u6700\u591A\u53EA\u80FD\u8F93\u5165 3 \u4E2A\u6807\u7B7E" :max="3" @enter="onEnter" style="width: 80%" />
</template>
<script setup>
import { ref } from 'vue';
import { MessagePlugin } from 'tdesign-vue';

const tags = ref([]);
const onEnter = (value, { inputValue }) => {
  if (value.length >= 3 && inputValue) {
    MessagePlugin.warning('\u6700\u591A\u53EA\u80FD\u8F93\u5165 3 \u4E2A\u6807\u7B7E!');
  }
};
<\/script>
`,I=`<template>
  <t-space direction="vertical" style="width: 80%">
    <t-tag-input v-model="tags1" size="small" clearable />

    <t-tag-input v-model="tags2" clearable />

    <t-tag-input v-model="tags3" size="large" clearable />
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      tags1: ['Vue', 'React'],
      tags2: ['Vue', 'React'],
      tags3: ['Vue', 'React'],
    };
  },
};
<\/script>
`,D=`<template>
  <t-space direction="vertical" style="width: 80%">
    <t-tag-input v-model="tags1" size="small" clearable />

    <t-tag-input v-model="tags2" clearable />

    <t-tag-input v-model="tags3" size="large" clearable />
  </t-space>
</template>
<script setup>
import { ref } from 'vue';

const tags1 = ref(['Vue', 'React']);
const tags2 = ref(['Vue', 'React']);
const tags3 = ref(['Vue', 'React']);
<\/script>
`,R=`<template>
  <t-space direction="vertical" style="width: 80%">
    <t-tag-input v-model="tags" :min-collapsed-num="1" />

    <!-- \u65B9\u5F0F\u4E00\uFF1A\u4F7F\u7528\u6E32\u67D3\u51FD\u6570\u81EA\u5B9A\u4E49\u6298\u53E0\u9879 -->
    <t-tag-input v-model="tags" :min-collapsed-num="2" :collapsed-items="renderCollapsedItems" />

    <!-- \u65B9\u5F0F\u4E8C\uFF1A\u4F7F\u7528\u63D2\u69FD\u81EA\u5B9A\u4E49\u6298\u53E0\u9879 -->
    <t-tag-input v-model="tags" :min-collapsed-num="3">
      <template #collapsedItems="{ collapsedTags }">
        <t-popup>
          <t-tag>More({{ collapsedTags.length }})</t-tag>
          <template #content>
            <t-tag v-for="item in collapsedTags" :key="item" style="margin-right: 4px">
              {{ item }}
            </t-tag>
          </template>
        </t-popup>
      </template>
    </t-tag-input>
  </t-space>
</template>
<script lang="jsx">
import { Tag } from 'tdesign-vue';

export default {
  data() {
    return {
      tags: ['Vue', 'React', 'Miniprogram', 'Angular', 'Flutter'],
    };
  },
  methods: {
    renderCollapsedItems(_, { collapsedTags }) {
      return <Tag>\u66F4\u591A({collapsedTags.length})</Tag>;
    },
  },
};
<\/script>
`,w=`<template>
  <t-space direction="vertical" style="width: 80%">
    <t-tag-input v-model="tags" :min-collapsed-num="1" />

    <!-- \u65B9\u5F0F\u4E00\uFF1A\u4F7F\u7528\u6E32\u67D3\u51FD\u6570\u81EA\u5B9A\u4E49\u6298\u53E0\u9879 -->
    <t-tag-input v-model="tags" :min-collapsed-num="2" :collapsed-items="renderCollapsedItems" />

    <!-- \u65B9\u5F0F\u4E8C\uFF1A\u4F7F\u7528\u63D2\u69FD\u81EA\u5B9A\u4E49\u6298\u53E0\u9879 -->
    <t-tag-input v-model="tags" :min-collapsed-num="3">
      <template #collapsedItems="{ collapsedTags }">
        <t-popup>
          <t-tag>More({{ collapsedTags.length }})</t-tag>
          <template #content>
            <t-tag v-for="item in collapsedTags" :key="item" style="margin-right: 4px">
              {{ item }}
            </t-tag>
          </template>
        </t-popup>
      </template>
    </t-tag-input>
  </t-space>
</template>
<script setup lang="jsx">
import { ref } from 'vue';
import { Tag } from 'tdesign-vue';

const tags = ref(['Vue', 'React', 'Miniprogram', 'Angular', 'Flutter']);

const renderCollapsedItems = (_, { collapsedTags }) => <Tag>\u66F4\u591A({collapsedTags.length})</Tag>;
<\/script>
`,M=`<template>
  <t-space direction="vertical">
    <!-- \u65B9\u5F0F\u4E00\uFF1A\u4F7F\u7528 tag \u5B9A\u4E49\u6807\u7B7E\u5185\u90E8\u5185\u5BB9\u3002\u4E5F\u53EF\u4EE5\u4F7F\u7528\u540C\u540D\u6E32\u67D3\u51FD\u6570 tag -->
    <t-tag-input v-model="tags" clearable :min-collapsed-num="2">
      <template #tag="{ value }">
        <img
          src="https://tdesign.gtimg.com/site/avatar.jpg"
          style="max-width: 20px; max-height: 20px; border-radius: 50%; vertical-align: text-top"
        />
        <span>&nbsp;&nbsp;{{ value }}</span>
      </template>
    </t-tag-input>
    <!-- \u65B9\u5F0F\u4E8C\uFF1A\u4F7F\u7528 valueDisplay \u5B9A\u4E49\u5168\u90E8\u5185\u5BB9\u3002\u4E5F\u53EF\u4EE5\u4F7F\u7528\u540C\u540D\u6E32\u67D3\u51FD\u6570 valueDisplay -->
    <t-tag-input v-model="tags" clearable>
      <template #valueDisplay="{ value, onClose }">
        <t-tag
          v-for="(item, index) in value"
          :key="item"
          closable
          style="margin-right: 4px"
          @close="() => onClose(index)"
        >
          <img
            src="https://tdesign.gtimg.com/site/avatar.jpg"
            style="max-width: 20px; max-height: 20px; border-radius: 50%; vertical-align: text-top"
          />
          <span>&nbsp;&nbsp;{{ item }}</span>
        </t-tag>
      </template>
    </t-tag-input>
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      tags: ['StudentA', 'StudentB', 'StudentC'],
    };
  },
};
<\/script>
`,T=`<template>
  <t-space direction="vertical">
    <!-- \u65B9\u5F0F\u4E00\uFF1A\u4F7F\u7528 tag \u5B9A\u4E49\u6807\u7B7E\u5185\u90E8\u5185\u5BB9\u3002\u4E5F\u53EF\u4EE5\u4F7F\u7528\u540C\u540D\u6E32\u67D3\u51FD\u6570 tag -->
    <t-tag-input v-model="tags" clearable :min-collapsed-num="2">
      <template #tag="{ value }">
        <img
          src="https://tdesign.gtimg.com/site/avatar.jpg"
          style="max-width: 20px; max-height: 20px; border-radius: 50%; vertical-align: text-top"
        />
        <span>&nbsp;&nbsp;{{ value }}</span>
      </template>
    </t-tag-input>
    <!-- \u65B9\u5F0F\u4E8C\uFF1A\u4F7F\u7528 valueDisplay \u5B9A\u4E49\u5168\u90E8\u5185\u5BB9\u3002\u4E5F\u53EF\u4EE5\u4F7F\u7528\u540C\u540D\u6E32\u67D3\u51FD\u6570 valueDisplay -->
    <t-tag-input v-model="tags" clearable>
      <template #valueDisplay="{ value, onClose }">
        <t-tag
          v-for="(item, index) in value"
          :key="item"
          closable
          style="margin-right: 4px"
          @close="() => onClose(index)"
        >
          <img
            src="https://tdesign.gtimg.com/site/avatar.jpg"
            style="max-width: 20px; max-height: 20px; border-radius: 50%; vertical-align: text-top"
          />
          <span>&nbsp;&nbsp;{{ item }}</span>
        </t-tag>
      </template>
    </t-tag-input>
  </t-space>
</template>
<script setup>
import { ref } from 'vue';

const tags = ref(['StudentA', 'StudentB', 'StudentC']);
<\/script>
`,S=`<template>
  <t-space direction="vertical" size="32px">
    <div class="t-tdesign-demo__tag-input">
      <label>\u7981\u7528\u72B6\u6001\uFF1A</label>
      <t-tag-input :value="tags1" disabled />
    </div>

    <div class="t-tdesign-demo__tag-input">
      <label>\u53EA\u8BFB\u72B6\u6001\uFF1A</label>
      <t-tag-input :value="tags2" tips="\u8FD9\u662F\u666E\u901A\u6587\u672C\u63D0\u793A" readonly />
    </div>

    <div class="t-tdesign-demo__tag-input">
      <label>\u6210\u529F\u72B6\u6001\uFF1A</label>
      <t-tag-input v-model="tags3" status="success" tips="\u6821\u9A8C\u901A\u8FC7\u6587\u672C\u63D0\u793A" clearable />
    </div>

    <div class="t-tdesign-demo__tag-input">
      <label>\u544A\u8B66\u72B6\u6001\uFF1A</label>
      <t-tag-input v-model="tags4" status="warning" tips="\u6821\u9A8C\u4E0D\u901A\u8FC7\u6587\u672C\u63D0\u793A" clearable />
    </div>

    <div class="t-tdesign-demo__tag-input">
      <label>\u9519\u8BEF\u72B6\u6001\uFF1A</label>
      <t-tag-input v-model="tags5" status="error" tips="\u6821\u9A8C\u5B58\u5728\u4E25\u91CD\u95EE\u9898\u6587\u672C\u63D0\u793A" clearable />
    </div>
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      tags1: ['Vue', 'React', 'Miniprogram'],
      tags2: ['Vue', 'React', 'Miniprogram'],
      tags3: ['Vue', 'React', 'Miniprogram'],
      tags4: ['Vue', 'React', 'Miniprogram'],
      tags5: ['Vue', 'React', 'Miniprogram'],
    };
  },
};
<\/script>
<style lang="less">
.t-tdesign-demo__tag-input {
  display: flex;
  align-items: baseline;
  > label {
    width: 100px;
  }
}
</style>
`,P=`<template>
  <t-space direction="vertical" size="32px">
    <div class="t-tdesign-demo__tag-input">
      <label>\u7981\u7528\u72B6\u6001\uFF1A</label>
      <t-tag-input :value="tags1" disabled />
    </div>

    <div class="t-tdesign-demo__tag-input">
      <label>\u53EA\u8BFB\u72B6\u6001\uFF1A</label>
      <t-tag-input :value="tags2" tips="\u8FD9\u662F\u666E\u901A\u6587\u672C\u63D0\u793A" readonly />
    </div>

    <div class="t-tdesign-demo__tag-input">
      <label>\u6210\u529F\u72B6\u6001\uFF1A</label>
      <t-tag-input v-model="tags3" status="success" tips="\u6821\u9A8C\u901A\u8FC7\u6587\u672C\u63D0\u793A" clearable />
    </div>

    <div class="t-tdesign-demo__tag-input">
      <label>\u544A\u8B66\u72B6\u6001\uFF1A</label>
      <t-tag-input v-model="tags4" status="warning" tips="\u6821\u9A8C\u4E0D\u901A\u8FC7\u6587\u672C\u63D0\u793A" clearable />
    </div>

    <div class="t-tdesign-demo__tag-input">
      <label>\u9519\u8BEF\u72B6\u6001\uFF1A</label>
      <t-tag-input v-model="tags5" status="error" tips="\u6821\u9A8C\u5B58\u5728\u4E25\u91CD\u95EE\u9898\u6587\u672C\u63D0\u793A" clearable />
    </div>
  </t-space>
</template>
<script setup>
import { ref } from 'vue';

const tags1 = ref(['Vue', 'React', 'Miniprogram']);
const tags2 = ref(['Vue', 'React', 'Miniprogram']);
const tags3 = ref(['Vue', 'React', 'Miniprogram']);
const tags4 = ref(['Vue', 'React', 'Miniprogram']);
const tags5 = ref(['Vue', 'React', 'Miniprogram']);
<\/script>
<style lang="less">
.t-tdesign-demo__tag-input {
  display: flex;
  align-items: baseline;
  > label {
    width: 100px;
  }
}
</style>
`,E=`<template>
  <t-space direction="vertical">
    <t-tag-input v-model="tags" placeholder="\u6DFB\u52A0\u65B0\u6807\u7B7E" :tag-props="{ theme: 'primary' }" />
    <t-tag-input v-model="tags" placeholder="\u6DFB\u52A0\u65B0\u6807\u7B7E" :tag-props="{ theme: 'success' }" />
    <t-tag-input v-model="tags" placeholder="\u6DFB\u52A0\u65B0\u6807\u7B7E" :tag-props="{ theme: 'warning' }" />
    <t-tag-input v-model="tags" placeholder="\u6DFB\u52A0\u65B0\u6807\u7B7E" :tag-props="{ theme: 'danger' }" />
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      tags: ['Vue', 'React', 'Miniprogram'],
    };
  },
};
<\/script>
`,k=`<template>
  <t-space direction="vertical">
    <t-tag-input v-model="tags" placeholder="\u6DFB\u52A0\u65B0\u6807\u7B7E" :tag-props="{ theme: 'primary' }" />
    <t-tag-input v-model="tags" placeholder="\u6DFB\u52A0\u65B0\u6807\u7B7E" :tag-props="{ theme: 'success' }" />
    <t-tag-input v-model="tags" placeholder="\u6DFB\u52A0\u65B0\u6807\u7B7E" :tag-props="{ theme: 'warning' }" />
    <t-tag-input v-model="tags" placeholder="\u6DFB\u52A0\u65B0\u6807\u7B7E" :tag-props="{ theme: 'danger' }" />
  </t-space>
</template>
<script setup>
import { ref } from 'vue';

const tags = ref(['Vue', 'React', 'Miniprogram']);
<\/script>
`,z=`<template>
  <t-tag-input v-model="tags" auto-width clearable />
</template>
<script>
export default {
  data() {
    return {
      tags: ['Vue', 'React'],
    };
  },
};
<\/script>
`,A=`<template>
  <t-tag-input v-model="tags" auto-width clearable />
</template>
<script setup>
import { ref } from 'vue';

const tags = ref(['Vue', 'React']);
<\/script>
`,B=`<template>
  <t-space direction="vertical">
    <t-tag-input
      v-model="tags1"
      clearable
      drag-sort
      placeholder="\u8BF7\u8F93\u5165"
      @paste="onPaste"
      @enter="onTagInputEnter"
      @change="onChange"
      @drag-sort="onDragSort"
    />
    <t-tag-input
      v-model="tags2"
      drag-sort
      clearable
      label="Controlled: "
      excess-tags-display-type="break-line"
      placeholder="\u8BF7\u8F93\u5165"
      @change="onChange2"
      @drag-sort="onDragSort2"
    />
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      tags1: ['Vue', 'React', 'Angular'],
      tags2: ['Vue', 'React', 'Angular', 'Miniprogram'],
    };
  },
  methods: {
    onTagInputEnter(val, context) {
      console.log(val, context);
    },

    onChange(val, context) {
      console.log(val, context);
    },

    onChange2(val, context) {
      console.log(val, context);
    },

    onPaste(context) {
      console.log(context);
    },

    onDragSort({ currentIndex, targetIndex }) {
      const temp = this.tags1[targetIndex];
      this.$set(this.tags1, targetIndex, this.tags1[currentIndex]);
      this.$set(this.tags1, currentIndex, temp);
    },

    onDragSort2({ currentIndex, targetIndex }) {
      const temp = this.tags2[targetIndex];
      this.$set(this.tags2, targetIndex, this.tags2[currentIndex]);
      this.$set(this.tags2, currentIndex, temp);
    },
  },
};
<\/script>
`,j=`<template>
  <t-space direction="vertical">
    <t-tag-input
      v-model="tags1"
      clearable
      drag-sort
      placeholder="\u8BF7\u8F93\u5165"
      @paste="onPaste"
      @enter="onTagInputEnter"
      @change="onChange"
      @drag-sort="onDragSort"
    />
    <t-tag-input
      v-model="tags2"
      drag-sort
      clearable
      label="Controlled: "
      excess-tags-display-type="break-line"
      placeholder="\u8BF7\u8F93\u5165"
      @change="onChange2"
      @drag-sort="onDragSort2"
    />
  </t-space>
</template>

<script setup>
import { reactive } from 'vue';

const tags1 = reactive(['Vue', 'React', 'Angular']);
const tags2 = reactive(['Vue', 'React', 'Angular', 'Miniprogram']);
const onTagInputEnter = (val, context) => {
  console.log(val, context);
};
const onChange = (val, context) => {
  console.log(val, context);
};
const onChange2 = (val, context) => {
  console.log(val, context);
};
const onPaste = (context) => {
  console.log(context);
};
const onDragSort = ({ currentIndex, targetIndex }) => {
  const temp = tags1[targetIndex];
  tags1[targetIndex] = tags1[currentIndex];
  tags1[currentIndex] = temp;
};
const onDragSort2 = ({ currentIndex, targetIndex }) => {
  const temp = tags2[targetIndex];
  tags2[targetIndex] = tags2[currentIndex];
  tags2[currentIndex] = temp;
};
<\/script>
`,d=[{name:"autoWidth",type:"Boolean",defaultValue:!1,options:[]},{name:"borderless",type:"Boolean",defaultValue:!1,options:[]},{name:"clearable",type:"Boolean",defaultValue:!1,options:[]},{name:"disabled",type:"Boolean",defaultValue:!1,options:[]},{name:"dragSort",type:"Boolean",defaultValue:!1,options:[]},{name:"excessTagsDisplayType",type:"enum",defaultValue:"scroll",options:[{label:"scroll",value:"scroll"},{label:"break-line",value:"break-line"}]},{name:"readonly",type:"Boolean",defaultValue:!1,options:[]},{name:"size",type:"enum",defaultValue:"medium",options:[{label:"small",value:"small"},{label:"medium",value:"medium"},{label:"large",value:"large"}]}];const p={};p.setup=(t,e)=>{const n=o(d),a=[{label:"tagInput",value:"tagInput"}],l={tagInput:'<t-tagInput v-bind="configProps" />'},s=o(`<template>${l[a[0].value].trim()}</template>`);function c(m){s.value=`<template>${l[m].trim()}</template>`}return{configList:n,panelList:a,usageCode:s,onPanelChange:c}};var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("base-usage",{attrs:{code:t.usageCode,"config-list":t.configList,"panel-list":t.panelList},on:{PanelChange:t.onPanelChange},scopedSlots:t._u([{key:"tagInput",fn:function(a){var l=a.configProps;return[n("t-tagInput",t._b({},"t-tagInput",l,!1))]}}])})},v=[];i._withStripped=!0;const r={};var g=u(p,i,v,!1,x,null,null,null);function x(t){for(let e in r)this[e]=r[e]}g.options.__file="../src/tag-input/_usage/index.vue";var $=function(){return g.exports}();export{b as D,$ as U,f as a,C as b,y as c,_ as d,V as e,I as f,D as g,R as h,w as i,M as j,T as k,S as l,P as m,E as n,k as o,z as p,A as q,B as r,j as s};
