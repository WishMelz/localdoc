import{D as u,h as C,i as f,j as b,k,l as x,m as P,n as y}from"./status-readonly.b31518ed.js";import{Y as s,n as i}from"./index.663c003f.js";import{P as D}from"./prism.a27ccf6a.js";var A=`<template>
  <t-space>
    <t-space direction="vertical">
      <label>\u5355\u8272</label>
      <t-color-picker-panel
        v-model="color"
        :show-primary-color-preview="false"
        :color-modes="['monochrome']"
        @change="handleChange"
        @palette-bar-change="handlePaletteChange"
        @recent-colors-change="handleRecentColorsChange"
      />
    </t-space>
    <t-space direction="vertical">
      <label>\u6E10\u53D8</label>
      <t-color-picker-panel
        v-model="color2"
        enable-alpha
        :color-modes="['linear-gradient']"
        @change="handleChange"
        @palette-bar-change="handlePaletteChange"
        @recent-colors-change="handleRecentColorsChange"
        :enable-multiple-gradient="false"
      /></t-space>
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      color: '#0052d9',
      color2: 'linear-gradient(45deg, #4facfe 0%, #00f2fe 100%)',
    };
  },
  methods: {
    handleChange(value, context) {
      console.log(value, context);
    },
    handlePaletteChange(context) {
      console.log('\u8272\u76F8\u9762\u677F\u6539\u53D8', context);
    },
    handleRecentColorsChange(value) {
      console.log('\u6700\u8FD1\u4F7F\u7528\u989C\u8272\u6539\u53D8', value);
    },
  },
};
<\/script>
`,S=`<template>
  <t-space>
    <t-space direction="vertical">
      <label>\u5355\u8272</label>
      <t-color-picker-panel
        v-model="color"
        :show-primary-color-preview="false"
        :color-modes="['monochrome']"
        @change="handleChange"
        @palette-bar-change="handlePaletteChange"
        @recent-colors-change="handleRecentColorsChange"
      />
    </t-space>
    <t-space direction="vertical">
      <label>\u6E10\u53D8</label>
      <t-color-picker-panel
        v-model="color2"
        enable-alpha
        :color-modes="['linear-gradient']"
        @change="handleChange"
        @palette-bar-change="handlePaletteChange"
        @recent-colors-change="handleRecentColorsChange"
        :enable-multiple-gradient="false"
      /></t-space>
  </t-space>
</template>
<script setup>
import { ref } from 'vue';

const color = ref('#0052d9');
const color2 = ref('linear-gradient(45deg, #4facfe 0%, #00f2fe 100%)');
const handleChange = (value, context) => {
  console.log(value, context);
};
const handlePaletteChange = (context) => {
  console.log('\u8272\u76F8\u9762\u677F\u6539\u53D8', context);
};
const handleRecentColorsChange = (value) => {
  console.log('\u6700\u8FD1\u4F7F\u7528\u989C\u8272\u6539\u53D8', value);
};
<\/script>
`,w=`<template>
  <t-color-picker v-model="color" />
</template>
<script>
export default {
  data() {
    return {
      color: '#0052d9',
    };
  },
};
<\/script>
`,I=`<template>
  <t-color-picker v-model="color" />
</template>
<script setup>
import { ref } from 'vue';

const color = ref('#0052d9');
<\/script>
`,z=`<template>
  <t-space direction="vertical" size="32px">
    <t-space size="36px">
      <t-space direction="vertical" size="10px" class="item">
        <h5>\u9ED8\u8BA4\uFF08\u5355\u8272 + \u7EBF\u6027\u6E10\u53D8\uFF09</h5>
        <t-color-picker v-model="color1" format="CSS" />
      </t-space>
      <t-space direction="vertical" size="10px" class="item">
        <h5>\u4EC5\u5355\u8272\u6A21\u5F0F</h5>
        <t-color-picker v-model="color2" format="CSS" :color-modes="['monochrome']" />
      </t-space>
    </t-space>

    <t-space direction="vertical" size="10px" class="item">
      <h5>\u4EC5\u7EBF\u6027\u6E10\u53D8\u6A21\u5F0F</h5>
      <t-color-picker v-model="color3" format="CSS" :color-modes="['linear-gradient']" />
    </t-space>
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      color1: 'red',
      color2: '#0052d9',
      color3: 'linear-gradient(45deg, #4facfe 0%, #00f2fe 100%)',
    };
  },
};
<\/script>

<style scoped>
.item h5 {
  font-weight: normal;
}
</style>
`,T=`<template>
  <t-space direction="vertical" size="32px">
    <t-space size="36px">
      <t-space direction="vertical" size="10px" class="item">
        <h5>\u9ED8\u8BA4\uFF08\u5355\u8272 + \u7EBF\u6027\u6E10\u53D8\uFF09</h5>
        <t-color-picker v-model="color1" format="CSS" />
      </t-space>
      <t-space direction="vertical" size="10px" class="item">
        <h5>\u4EC5\u5355\u8272\u6A21\u5F0F</h5>
        <t-color-picker v-model="color2" format="CSS" :color-modes="['monochrome']" />
      </t-space>
    </t-space>

    <t-space direction="vertical" size="10px" class="item">
      <h5>\u4EC5\u7EBF\u6027\u6E10\u53D8\u6A21\u5F0F</h5>
      <t-color-picker v-model="color3" format="CSS" :color-modes="['linear-gradient']" />
    </t-space>
  </t-space>
</template>
<script setup>
import { ref } from 'vue';

const color1 = ref('red');
const color2 = ref('#0052d9');
const color3 = ref('linear-gradient(45deg, #4facfe 0%, #00f2fe 100%)');
<\/script>

<style scoped>
.item h5 {
  font-weight: normal;
}
</style>
`,N=`<template>
  <t-color-picker-panel v-model="color" format="RGBA" :enable-alpha="true" @change="handleChange" />
</template>
<script>
export default {
  data() {
    return {
      color: 'red',
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
  },
};
<\/script>
`,O=`<template>
  <t-color-picker-panel v-model="color" format="RGBA" :enable-alpha="true" @change="handleChange" />
</template>
<script setup>
import { ref } from 'vue';

const color = ref('red');
const handleChange = (value) => {
  console.log(value);
};
<\/script>
`,B=`<template>
  <t-space>
    <t-space direction="vertical" size="10px">
      <h6>\u81EA\u5B9A\u4E49\u7CFB\u7EDF\u8272</h6>
      <t-color-picker-panel v-model="color" :swatch-colors="systemColors" />
    </t-space>
    <t-space direction="vertical" size="10px">
      <h6>\u5B8C\u5168\u4E0D\u663E\u793A\u7CFB\u7EDF\u8272</h6>
      <t-color-picker-panel v-model="color" :swatch-colors="null" />
    </t-space>
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      color: '#0052d9',
      systemColors: ['red', 'green', 'yellow', 'blue', 'purple'],
    };
  },
};
<\/script>
`,R=`<template>
  <t-space>
    <t-space direction="vertical" size="10px">
      <h6>\u81EA\u5B9A\u4E49\u7CFB\u7EDF\u8272</h6>
      <t-color-picker-panel v-model="color" :swatch-colors="systemColors" />
    </t-space>
    <t-space direction="vertical" size="10px">
      <h6>\u5B8C\u5168\u4E0D\u663E\u793A\u7CFB\u7EDF\u8272</h6>
      <t-color-picker-panel v-model="color" :swatch-colors="null" />
    </t-space>
  </t-space>
</template>
<script setup>
import { ref } from 'vue';

const color = ref('#0052d9');
const systemColors = ref(['red', 'green', 'yellow', 'blue', 'purple']);
<\/script>
`,$=`<template>
  <t-space>
    <t-space direction="vertical" size="10px">
      <h6>\u9884\u8BBE\u6700\u8FD1\u4F7F\u7528\u8272</h6>
      <t-color-picker-panel
        v-model="color"
        :recent-colors="[
          'red',
          'green',
          'yellow',
          'blue',
          'purple',
          'linear-gradient(to right, #fa709a 0%, #fee140 100%)',
          'linear-gradient(45deg, #eea2a2 0%, #bbc1bf 19%, #57c6e1 42%, #b49fda 79%, #7ac5d8 100%)',
          'linear-gradient(120deg, #fcc5e4 0%, #fda34b 15%, #ff7882 35%, #c8699e 52%, #7046aa 71%, #0c1db8 87%, #020f75 100%)',
        ]"
      />
    </t-space>
    <t-space direction="vertical" size="10px">
      <h6>\u5B8C\u5168\u4E0D\u663E\u793A\u6700\u8FD1\u4F7F\u7528\u8272</h6>
      <t-color-picker-panel v-model="color" :recent-colors="null" />
    </t-space>
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      color: 'red',
    };
  },
};
<\/script>
`,j=`<template>
  <t-space>
    <t-space direction="vertical" size="10px">
      <h6>\u9884\u8BBE\u6700\u8FD1\u4F7F\u7528\u8272</h6>
      <t-color-picker-panel
        v-model="color"
        :recent-colors="[
          'red',
          'green',
          'yellow',
          'blue',
          'purple',
          'linear-gradient(to right, #fa709a 0%, #fee140 100%)',
          'linear-gradient(45deg, #eea2a2 0%, #bbc1bf 19%, #57c6e1 42%, #b49fda 79%, #7ac5d8 100%)',
          'linear-gradient(120deg, #fcc5e4 0%, #fda34b 15%, #ff7882 35%, #c8699e 52%, #7046aa 71%, #0c1db8 87%, #020f75 100%)',
        ]"
      />
    </t-space>
    <t-space direction="vertical" size="10px">
      <h6>\u5B8C\u5168\u4E0D\u663E\u793A\u6700\u8FD1\u4F7F\u7528\u8272</h6>
      <t-color-picker-panel v-model="color" :recent-colors="null" />
    </t-space>
  </t-space>
</template>
<script setup>
import { ref } from 'vue';

const color = ref('red');
<\/script>
`,G=`<template>
  <t-color-picker v-model="color" disabled />
</template>
<script>
export default {
  data() {
    return {
      color: 'red',
    };
  },
};
<\/script>
`,H=`<template>
  <t-color-picker v-model="color" disabled />
</template>
<script setup>
import { ref } from 'vue';

const color = ref('red');
<\/script>
`,E=`<template>
  <t-color-picker-panel v-model="color" disabled />
</template>
<script>
export default {
  data() {
    return {
      color: '#0052d9',
    };
  },
};
<\/script>
`,M=`<template>
  <t-color-picker-panel v-model="color" disabled />
</template>
<script setup>
import { ref } from 'vue';

const color = ref('#0052d9');
<\/script>
`,V=[{name:"closeBtn",type:"Boolean",defaultValue:!0,options:[]},{name:"disabled",type:"Boolean",defaultValue:!1,options:[]},{name:"enableAlpha",type:"Boolean",defaultValue:!1,options:[]},{name:"showPrimaryColorPreview",type:"Boolean",defaultValue:!0,options:[]}];const d={};d.setup=(t,o)=>{const e=s(V),a=[{label:"colorPicker",value:"colorPicker"}],n={colorPicker:'<t-color-picker-panel v-bind="configProps"/>'},r=s(`<template>${n[a[0].value].trim()}</template>`);function g(h){r.value=`<template>${n[h].trim()}</template>`}return{configList:e,panelList:a,usageCode:r,onPanelChange:g}};var p=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("base-usage",{attrs:{code:t.usageCode,"config-list":t.configList,"panel-list":t.panelList},on:{PanelChange:t.onPanelChange},scopedSlots:t._u([{key:"colorPicker",fn:function(a){var n=a.configProps;return[e("t-color-picker-panel",t._b({},"t-color-picker-panel",n,!1))]}}])})},L=[];p._withStripped=!0;const l={};var m=i(d,p,L,!1,F,null,null,null);function F(t){for(let o in l)this[o]=l[o]}m.options.__file="../src/color-picker/_usage/index.vue";var U=function(){return m.exports}(),v=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("td-doc-content",{ref:"tdDocContent",attrs:{"page-status":"hidden"}},[e("td-doc-header",{ref:"tdDocHeader",attrs:{slot:"doc-header",spline:"form",platform:"web"},slot:"doc-header"},[e("td-doc-badge",{attrs:{slot:"badge",label:"coverage",message:"94.54%"},slot:"badge"})],1),e("td-doc-tabs",{ref:"tdDocTabs",attrs:{tab:t.tab}}),e("div",{directives:[{name:"show",rawName:"v-show",value:t.tab==="demo",expression:"tab === 'demo'"}]},[e("div",{attrs:{name:"DEMO"}},[e("nav",{staticClass:"tdesign-toc_container"},[e("ol",{staticClass:"tdesign-toc_list"},[e("li",{staticClass:"tdesign-toc_list_item"},[e("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u9762\u677F\u989C\u8272\u9009\u62E9\u5668"}},[t._v("\u9762\u677F\u989C\u8272\u9009\u62E9\u5668")])]),e("li",{staticClass:"tdesign-toc_list_item"},[e("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u5E26\u89E6\u53D1\u5143\u7D20\u7684\u989C\u8272\u9009\u62E9\u5668"}},[t._v("\u5E26\u89E6\u53D1\u5143\u7D20\u7684\u989C\u8272\u9009\u62E9\u5668")])]),e("li",{staticClass:"tdesign-toc_list_item"},[e("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u4E0D\u540C\u8272\u5F69\u6A21\u5F0F\u7684\u989C\u8272\u9009\u62E9\u5668"}},[t._v("\u4E0D\u540C\u8272\u5F69\u6A21\u5F0F\u7684\u989C\u8272\u9009\u62E9\u5668")])]),e("li",{staticClass:"tdesign-toc_list_item"},[e("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u5141\u8BB8\u8C03\u6574\u900F\u660E\u5EA6\u7684\u989C\u8272\u9009\u62E9\u5668"}},[t._v("\u5141\u8BB8\u8C03\u6574\u900F\u660E\u5EA6\u7684\u989C\u8272\u9009\u62E9\u5668")])]),e("li",{staticClass:"tdesign-toc_list_item"},[e("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u53EF\u914D\u7F6E\u7CFB\u7EDF\u8272\u7684\u989C\u8272\u9009\u62E9\u5668"}},[t._v("\u53EF\u914D\u7F6E\u7CFB\u7EDF\u8272\u7684\u989C\u8272\u9009\u62E9\u5668")])]),e("li",{staticClass:"tdesign-toc_list_item"},[e("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u53EF\u914D\u7F6E\u6700\u8FD1\u4F7F\u7528\u989C\u8272\u7684\u989C\u8272\u9009\u62E9\u5668"}},[t._v("\u53EF\u914D\u7F6E\u6700\u8FD1\u4F7F\u7528\u989C\u8272\u7684\u989C\u8272\u9009\u62E9\u5668")])]),e("li",{staticClass:"tdesign-toc_list_item"},[e("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u7981\u7528\u72B6\u6001\u7684\u989C\u8272\u9009\u62E9\u5668"}},[t._v("\u7981\u7528\u72B6\u6001\u7684\u989C\u8272\u9009\u62E9\u5668")])]),e("li",{staticClass:"tdesign-toc_list_item"},[e("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u53EA\u8BFB\u72B6\u6001\u7684\u989C\u8272\u9009\u62E9\u5668"}},[t._v("\u53EA\u8BFB\u72B6\u6001\u7684\u989C\u8272\u9009\u62E9\u5668")])])])]),e("Usage"),e("h3",{attrs:{id:"\u9762\u677F\u989C\u8272\u9009\u62E9\u5668"}},[t._v("\u9762\u677F\u989C\u8272\u9009\u62E9\u5668 "),e("a",{staticClass:"header-anchor",attrs:{href:"#\u9762\u677F\u989C\u8272\u9009\u62E9\u5668"}})]),e("p",[t._v("\u6CA1\u6709\u89E6\u53D1\u5668\uFF0C\u76F4\u63A5\u663E\u793A\u989C\u8272\u9009\u62E9\u5668\u9762\u677F\u3002")]),e("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--color-picker-panel tdesign-demo-item--color-picker"},[e("td-doc-demo",{attrs:{"demo-name":"panel",languages:"OptionsAPI,CompositionAPI","data-OptionsAPI":t.DemoexamplepanelCode,"data-CompositionAPI":t.DemoexamplepanelCompositionCode,language:"markup"}},[e("div",{attrs:{slot:"action"},slot:"action"},[e("Stackblitz",{attrs:{"demo-name":"panel","component-name":" color-picker"}}),e("Codesandbox",{attrs:{"demo-name":"panel","component-name":" color-picker"}})],1),e("div",{staticClass:"tdesign-demo-item__body"},[e("Demoexamplepanel")],1)])],1),e("h3",{attrs:{id:"\u5E26\u89E6\u53D1\u5143\u7D20\u7684\u989C\u8272\u9009\u62E9\u5668"}},[t._v("\u5E26\u89E6\u53D1\u5143\u7D20\u7684\u989C\u8272\u9009\u62E9\u5668 "),e("a",{staticClass:"header-anchor",attrs:{href:"#\u5E26\u89E6\u53D1\u5143\u7D20\u7684\u989C\u8272\u9009\u62E9\u5668"}})]),e("p",[t._v("\u901A\u8FC7\u89E6\u53D1\u5668\u89E6\u53D1\u663E\u793A\u9009\u62E9\u5668\u9762\u677F\uFF0C\u900F\u4F20\u5168\u90E8\u5C5E\u6027\u5230\u9762\u677F\u9009\u62E9\u5668\u7EC4\u4EF6\u3002")]),e("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--color-picker-trigger tdesign-demo-item--color-picker"},[e("td-doc-demo",{attrs:{"demo-name":"trigger",languages:"OptionsAPI,CompositionAPI","data-OptionsAPI":t.DemoexampletriggerCode,"data-CompositionAPI":t.DemoexampletriggerCompositionCode,language:"markup"}},[e("div",{attrs:{slot:"action"},slot:"action"},[e("Stackblitz",{attrs:{"demo-name":"trigger","component-name":" color-picker"}}),e("Codesandbox",{attrs:{"demo-name":"trigger","component-name":" color-picker"}})],1),e("div",{staticClass:"tdesign-demo-item__body"},[e("Demoexampletrigger")],1)])],1),e("h3",{attrs:{id:"\u4E0D\u540C\u8272\u5F69\u6A21\u5F0F\u7684\u989C\u8272\u9009\u62E9\u5668"}},[t._v("\u4E0D\u540C\u8272\u5F69\u6A21\u5F0F\u7684\u989C\u8272\u9009\u62E9\u5668 "),e("a",{staticClass:"header-anchor",attrs:{href:"#\u4E0D\u540C\u8272\u5F69\u6A21\u5F0F\u7684\u989C\u8272\u9009\u62E9\u5668"}})]),e("p",[t._v("\u652F\u6301\u5355\u8272\u6A21\u5F0F\u3001\u7EBF\u6027\u6E10\u53D8\u4E24\u79CD\u989C\u8272\u6A21\u5F0F\u9009\u62E9\uFF0C\u53EF\u5355\u72EC\u4E00\u79CD\u6A21\u5F0F\u4F7F\u7528\uFF0C\u4E5F\u53EF\u540C\u65F6\u4E24\u79CD\u6A21\u5F0F\u5207\u6362\u3002\u4F7F\u7528 "),e("code",[t._v("colorMode")]),t._v(" \u8FDB\u884C\u914D\u7F6E\u3002")]),e("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--color-picker-color-mode tdesign-demo-item--color-picker"},[e("td-doc-demo",{attrs:{"demo-name":"color-mode",languages:"OptionsAPI,CompositionAPI","data-OptionsAPI":t.DemoexamplecolormodeCode,"data-CompositionAPI":t.DemoexamplecolormodeCompositionCode,language:"markup"}},[e("div",{attrs:{slot:"action"},slot:"action"},[e("Stackblitz",{attrs:{"demo-name":"color-mode","component-name":" color-picker"}}),e("Codesandbox",{attrs:{"demo-name":"color-mode","component-name":" color-picker"}})],1),e("div",{staticClass:"tdesign-demo-item__body"},[e("Demoexamplecolormode")],1)])],1),e("h3",{attrs:{id:"\u5141\u8BB8\u8C03\u6574\u900F\u660E\u5EA6\u7684\u989C\u8272\u9009\u62E9\u5668"}},[t._v("\u5141\u8BB8\u8C03\u6574\u900F\u660E\u5EA6\u7684\u989C\u8272\u9009\u62E9\u5668 "),e("a",{staticClass:"header-anchor",attrs:{href:"#\u5141\u8BB8\u8C03\u6574\u900F\u660E\u5EA6\u7684\u989C\u8272\u9009\u62E9\u5668"}})]),e("p",[t._v("\u8BBE\u7F6E "),e("code",[t._v("enableAlpha=true")]),t._v(" \u5373\u53EF\u5F00\u542F\u9009\u62E9\u5668\u7684\u900F\u660E\u5EA6\u8BBE\u7F6E\u3002")]),e("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--color-picker-enable-alpha tdesign-demo-item--color-picker"},[e("td-doc-demo",{attrs:{"demo-name":"enable-alpha",languages:"OptionsAPI,CompositionAPI","data-OptionsAPI":t.DemoexampleenablealphaCode,"data-CompositionAPI":t.DemoexampleenablealphaCompositionCode,language:"markup"}},[e("div",{attrs:{slot:"action"},slot:"action"},[e("Stackblitz",{attrs:{"demo-name":"enable-alpha","component-name":" color-picker"}}),e("Codesandbox",{attrs:{"demo-name":"enable-alpha","component-name":" color-picker"}})],1),e("div",{staticClass:"tdesign-demo-item__body"},[e("Demoexampleenablealpha")],1)])],1),e("h3",{attrs:{id:"\u53EF\u914D\u7F6E\u7CFB\u7EDF\u8272\u7684\u989C\u8272\u9009\u62E9\u5668"}},[t._v("\u53EF\u914D\u7F6E\u7CFB\u7EDF\u8272\u7684\u989C\u8272\u9009\u62E9\u5668 "),e("a",{staticClass:"header-anchor",attrs:{href:"#\u53EF\u914D\u7F6E\u7CFB\u7EDF\u8272\u7684\u989C\u8272\u9009\u62E9\u5668"}})]),e("p",[t._v("\u53EF\u4EE5\u901A\u8FC7 "),e("code",[t._v("swatchColors")]),t._v(" \u914D\u7F6E\u7CFB\u7EDF\u9884\u8BBE\u989C\u8272\uFF0C\u503C\u4E3A null \u6216 [] \u5219\u4E0D\u663E\u793A\u7CFB\u7EDF\u8272\u3002")]),e("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--color-picker-swatch-color tdesign-demo-item--color-picker"},[e("td-doc-demo",{attrs:{"demo-name":"swatch-color",languages:"OptionsAPI,CompositionAPI","data-OptionsAPI":t.DemoexampleswatchcolorCode,"data-CompositionAPI":t.DemoexampleswatchcolorCompositionCode,language:"markup"}},[e("div",{attrs:{slot:"action"},slot:"action"},[e("Stackblitz",{attrs:{"demo-name":"swatch-color","component-name":" color-picker"}}),e("Codesandbox",{attrs:{"demo-name":"swatch-color","component-name":" color-picker"}})],1),e("div",{staticClass:"tdesign-demo-item__body"},[e("Demoexampleswatchcolor")],1)])],1),e("h3",{attrs:{id:"\u53EF\u914D\u7F6E\u6700\u8FD1\u4F7F\u7528\u989C\u8272\u7684\u989C\u8272\u9009\u62E9\u5668"}},[t._v("\u53EF\u914D\u7F6E\u6700\u8FD1\u4F7F\u7528\u989C\u8272\u7684\u989C\u8272\u9009\u62E9\u5668 "),e("a",{staticClass:"header-anchor",attrs:{href:"#\u53EF\u914D\u7F6E\u6700\u8FD1\u4F7F\u7528\u989C\u8272\u7684\u989C\u8272\u9009\u62E9\u5668"}})]),e("p",[t._v("\u53EF\u4EE5\u901A\u8FC7 "),e("code",[t._v("recentColors")]),t._v(" \u914D\u7F6E\u6700\u8FD1\u4F7F\u7528\u7684\u989C\u8272\uFF0C\u503C\u4E3A [] \u8868\u793A\u4EE5\u7EC4\u4EF6\u5185\u90E8\u7684\u201C\u6700\u8FD1\u4F7F\u7528\u989C\u8272\u201D\u4E3A\u51C6\uFF0C\u503C\u957F\u5EA6\u5927\u4E8E 0 \u5219\u4EE5\u8BE5\u503C\u4E3A\u51C6\u663E\u793A\u201C\u6700\u8FD1\u4F7F\u7528\u989C\u8272\u201D\u3002\u503C\u4E3A null \u5219\u5B8C\u5168\u4E0D\u663E\u793A\u201C\u6700\u8FD1\u4F7F\u7528\u989C\u8272\u201D\u3002")]),e("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--color-picker-recent-color tdesign-demo-item--color-picker"},[e("td-doc-demo",{attrs:{"demo-name":"recent-color",languages:"OptionsAPI,CompositionAPI","data-OptionsAPI":t.DemoexamplerecentcolorCode,"data-CompositionAPI":t.DemoexamplerecentcolorCompositionCode,language:"markup"}},[e("div",{attrs:{slot:"action"},slot:"action"},[e("Stackblitz",{attrs:{"demo-name":"recent-color","component-name":" color-picker"}}),e("Codesandbox",{attrs:{"demo-name":"recent-color","component-name":" color-picker"}})],1),e("div",{staticClass:"tdesign-demo-item__body"},[e("Demoexamplerecentcolor")],1)])],1),e("h3",{attrs:{id:"\u7981\u7528\u72B6\u6001\u7684\u989C\u8272\u9009\u62E9\u5668"}},[t._v("\u7981\u7528\u72B6\u6001\u7684\u989C\u8272\u9009\u62E9\u5668 "),e("a",{staticClass:"header-anchor",attrs:{href:"#\u7981\u7528\u72B6\u6001\u7684\u989C\u8272\u9009\u62E9\u5668"}})]),e("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--color-picker-status-disabled tdesign-demo-item--color-picker"},[e("td-doc-demo",{attrs:{"demo-name":"status-disabled",languages:"OptionsAPI,CompositionAPI","data-OptionsAPI":t.DemoexamplestatusdisabledCode,"data-CompositionAPI":t.DemoexamplestatusdisabledCompositionCode,language:"markup"}},[e("div",{attrs:{slot:"action"},slot:"action"},[e("Stackblitz",{attrs:{"demo-name":"status-disabled","component-name":" color-picker"}}),e("Codesandbox",{attrs:{"demo-name":"status-disabled","component-name":" color-picker"}})],1),e("div",{staticClass:"tdesign-demo-item__body"},[e("Demoexamplestatusdisabled")],1)])],1),e("h3",{attrs:{id:"\u53EA\u8BFB\u72B6\u6001\u7684\u989C\u8272\u9009\u62E9\u5668"}},[t._v("\u53EA\u8BFB\u72B6\u6001\u7684\u989C\u8272\u9009\u62E9\u5668 "),e("a",{staticClass:"header-anchor",attrs:{href:"#\u53EA\u8BFB\u72B6\u6001\u7684\u989C\u8272\u9009\u62E9\u5668"}})]),e("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--color-picker-status-readonly tdesign-demo-item--color-picker"},[e("td-doc-demo",{attrs:{"demo-name":"status-readonly",languages:"OptionsAPI,CompositionAPI","data-OptionsAPI":t.DemoexamplestatusreadonlyCode,"data-CompositionAPI":t.DemoexamplestatusreadonlyCompositionCode,language:"markup"}},[e("div",{attrs:{slot:"action"},slot:"action"},[e("Stackblitz",{attrs:{"demo-name":"status-readonly","component-name":" color-picker"}}),e("Codesandbox",{attrs:{"demo-name":"status-readonly","component-name":" color-picker"}})],1),e("div",{staticClass:"tdesign-demo-item__body"},[e("Demoexamplestatusreadonly")],1)])],1)],1),e("td-contributors",{attrs:{platform:"web",framework:"vue","component-name":"color-picker"}})],1),e("div",{directives:[{name:"show",rawName:"v-show",value:t.tab==="api",expression:"tab === 'api'"}],attrs:{name:"API"}},[e("nav",{staticClass:"tdesign-toc_container"},[e("ol",{staticClass:"tdesign-toc_list"},[e("li",{staticClass:"tdesign-toc_list_item"},[e("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#colorpicker-props"}},[t._v("ColorPicker Props")])]),e("li",{staticClass:"tdesign-toc_list_item"},[e("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#colorpicker-events"}},[t._v("ColorPicker Events")])])])]),e("h3",{attrs:{id:"colorpicker-props"}},[t._v("ColorPicker Props "),e("a",{staticClass:"header-anchor",attrs:{href:"#colorpicker-props"}})]),e("table",[e("thead",[e("tr",[e("th",[t._v("\u540D\u79F0")]),e("th",[t._v("\u7C7B\u578B")]),e("th",[t._v("\u9ED8\u8BA4\u503C")]),e("th",[t._v("\u63CF\u8FF0")]),e("th",[t._v("\u5FC5\u4F20")])])]),e("tbody",[e("tr",[e("td",[t._v("borderless")]),e("td",[t._v("Boolean")]),e("td",[t._v("false")]),e("td",[t._v("\u65E0\u8FB9\u6846\u6A21\u5F0F")]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("clearable")]),e("td",[t._v("Boolean")]),e("td",[t._v("false")]),e("td",[t._v("\u662F\u5426\u53EF\u6E05\u7A7A")]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("closeBtn")]),e("td",[t._v("String / Boolean / Slot / Function")]),e("td",[t._v("true")]),e("td",[t._v("\u5173\u95ED\u6309\u94AE\uFF0C\u503C\u4E3A "),e("code",[t._v("true")]),t._v(" \u663E\u793A\u9ED8\u8BA4\u5173\u95ED\u6309\u94AE\uFF1B\u503C\u4E3A "),e("code",[t._v("false")]),t._v(" \u6216 "),e("code",[t._v("undefined")]),t._v(" \u5219\u4E0D\u663E\u793A\u5173\u95ED\u6309\u94AE\uFF1B\u503C\u7C7B\u578B\u4E3A\u51FD\u6570\uFF0C\u5219\u8868\u793A\u81EA\u5B9A\u4E49\u5173\u95ED\u6309\u94AE\u3002TS \u7C7B\u578B\uFF1A"),e("code",[t._v("string | boolean | TNode")]),t._v("\u3002"),e("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("\u901A\u7528\u7C7B\u578B\u5B9A\u4E49")])]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("colorModes")]),e("td",[t._v("Array")]),e("td",[t._v('["monochrome", "linear-gradient"]')]),e("td",[t._v("\u989C\u8272\u6A21\u5F0F\u9009\u62E9\u3002\u540C\u65F6\u652F\u6301\u5355\u8272\u548C\u6E10\u53D8\u4E24\u79CD\u6A21\u5F0F\uFF0C\u53EF\u4EC5\u4F7F\u7528\u5355\u8272\u6216\u8005\u6E10\u53D8\u5176\u4E2D\u4E00\u79CD\u6A21\u5F0F\uFF0C\u4E5F\u53EF\u4EE5\u540C\u65F6\u4F7F\u7528\u3002"),e("code",[t._v("monochrome")]),t._v(" \u8868\u793A\u5355\u8272\uFF0C"),e("code",[t._v("linear-gradient")]),t._v(" \u8868\u793A\u6E10\u53D8\u8272\u3002TS \u7C7B\u578B\uFF1A"),e("code",[t._v("Array<'monochrome' | 'linear-gradient'>")])]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("disabled")]),e("td",[t._v("Boolean")]),e("td",[t._v("undefined")]),e("td",[t._v("\u662F\u5426\u7981\u7528\u7EC4\u4EF6")]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("enableAlpha")]),e("td",[t._v("Boolean")]),e("td",[t._v("false")]),e("td",[t._v("\u662F\u5426\u5F00\u542F\u900F\u660E\u901A\u9053")]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("enableMultipleGradient")]),e("td",[t._v("Boolean")]),e("td",[t._v("true")]),e("td",[t._v("\u662F\u5426\u5141\u8BB8\u5F00\u542F\u901A\u8FC7\u70B9\u51FB\u6E10\u53D8\u8F74\u589E\u52A0\u6E10\u53D8\u68AF\u5EA6\uFF0C\u9ED8\u8BA4\u5F00\u542F\uFF0C\u5173\u95ED\u65F6\u53EA\u4F1A\u5B58\u5728\u8D77\u59CB\u548C\u7ED3\u675F\u4E24\u4E2A\u989C\u8272")]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("format")]),e("td",[t._v("String")]),e("td",[t._v("RGB")]),e("td",[t._v("\u683C\u5F0F\u5316\u8272\u503C\u3002"),e("code",[t._v("enableAlpha")]),t._v(" \u4E3A\u771F\u65F6\uFF0C"),e("code",[t._v("RGBA/HSLA/HSVA")]),t._v(" \u7B49\u503C\u6709\u6548\u3002\u53EF\u9009\u9879\uFF1ARGB/RGBA/HSL/HSLA/HSB/HSV/HSVA/HEX/CMYK/CSS")]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("inputProps")]),e("td",[t._v("Object")]),e("td",[t._v("-")]),e("td",[t._v("\u900F\u4F20 Input \u8F93\u5165\u6846\u7EC4\u4EF6\u5168\u90E8\u5C5E\u6027\u3002TS \u7C7B\u578B\uFF1A"),e("code",[t._v("InputProps")]),t._v("\uFF0C"),e("a",{attrs:{href:"./input?tab=api"}},[t._v("Input API Documents")]),t._v("\u3002"),e("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/tree/develop/src/color-picker/type.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("\u8BE6\u7EC6\u7C7B\u578B\u5B9A\u4E49")])]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("multiple")]),e("td",[t._v("Boolean")]),e("td",[t._v("false")]),e("td",[t._v("\u3010\u5F00\u53D1\u4E2D\u3011\u662F\u5426\u5141\u8BB8\u9009\u4E2D\u591A\u4E2A\u989C\u8272")]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("popupProps")]),e("td",[t._v("Object")]),e("td",[t._v("-")]),e("td",[t._v("\u900F\u4F20 Popup \u7EC4\u4EF6\u5168\u90E8\u5C5E\u6027\uFF0C\u5982 "),e("code",[t._v("placement")]),t._v(" "),e("code",[t._v("overlayStyle")]),t._v(" "),e("code",[t._v("overlayClassName")]),t._v(" "),e("code",[t._v("trigger")]),t._v("\u7B49\u3002TS \u7C7B\u578B\uFF1A"),e("code",[t._v("PopupProps")]),t._v("\uFF0C"),e("a",{attrs:{href:"./popup?tab=api"}},[t._v("Popup API Documents")]),t._v("\u3002"),e("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/tree/develop/src/color-picker/type.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("\u8BE6\u7EC6\u7C7B\u578B\u5B9A\u4E49")])]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("recentColors")]),e("td",[t._v("Array")]),e("td",[t._v("[]")]),e("td",[t._v("\u6700\u8FD1\u4F7F\u7528\u7684\u989C\u8272\u3002\u503C\u4E3A [] \u8868\u793A\u4EE5\u7EC4\u4EF6\u5185\u90E8\u7684\u201C\u6700\u8FD1\u4F7F\u7528\u989C\u8272\u201D\u4E3A\u51C6\uFF0C\u503C\u957F\u5EA6\u5927\u4E8E 0 \u5219\u4EE5\u8BE5\u503C\u4E3A\u51C6\u663E\u793A\u201C\u6700\u8FD1\u4F7F\u7528\u989C\u8272\u201D\u3002\u503C\u4E3A null \u5219\u5B8C\u5168\u4E0D\u663E\u793A\u201C\u6700\u8FD1\u4F7F\u7528\u989C\u8272\u201D\u3002\u652F\u6301\u8BED\u6CD5\u7CD6 "),e("code",[t._v(".sync")]),t._v("\u3002TS \u7C7B\u578B\uFF1A"),e("code",[t._v("boolean | Array<string> | null")])]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("defaultRecentColors")]),e("td",[t._v("Array")]),e("td",[t._v("[]")]),e("td",[t._v("\u6700\u8FD1\u4F7F\u7528\u7684\u989C\u8272\u3002\u503C\u4E3A [] \u8868\u793A\u4EE5\u7EC4\u4EF6\u5185\u90E8\u7684\u201C\u6700\u8FD1\u4F7F\u7528\u989C\u8272\u201D\u4E3A\u51C6\uFF0C\u503C\u957F\u5EA6\u5927\u4E8E 0 \u5219\u4EE5\u8BE5\u503C\u4E3A\u51C6\u663E\u793A\u201C\u6700\u8FD1\u4F7F\u7528\u989C\u8272\u201D\u3002\u503C\u4E3A null \u5219\u5B8C\u5168\u4E0D\u663E\u793A\u201C\u6700\u8FD1\u4F7F\u7528\u989C\u8272\u201D\u3002\u975E\u53D7\u63A7\u5C5E\u6027\u3002TS \u7C7B\u578B\uFF1A"),e("code",[t._v("boolean | Array<string> | null")])]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("selectInputProps")]),e("td",[t._v("Object")]),e("td",[t._v("-")]),e("td",[t._v("\u900F\u4F20 SelectInputProps \u7B5B\u9009\u5668\u8F93\u5165\u6846\u7EC4\u4EF6\u5168\u90E8\u5C5E\u6027\u3002TS \u7C7B\u578B\uFF1A"),e("code",[t._v("SelectInputProps")]),t._v("\uFF0C"),e("a",{attrs:{href:"./select-input?tab=api"}},[t._v("SelectInput API Documents")]),t._v("\u3002"),e("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/tree/develop/src/color-picker/type.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("\u8BE6\u7EC6\u7C7B\u578B\u5B9A\u4E49")])]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("showPrimaryColorPreview")]),e("td",[t._v("Boolean")]),e("td",[t._v("true")]),e("td",[t._v("\u662F\u5426\u5C55\u793A\u989C\u8272\u9009\u62E9\u6761\u53F3\u4FA7\u7684\u989C\u8272\u9884\u89C8\u533A\u57DF")]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("size")]),e("td",[t._v("String")]),e("td",[t._v("medium")]),e("td",[t._v("\u7EC4\u4EF6\u5C3A\u5BF8\u3002\u53EF\u9009\u9879\uFF1Asmall/medium/large\u3002TS \u7C7B\u578B\uFF1A"),e("code",[t._v("SizeEnum")]),t._v("\u3002"),e("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("\u901A\u7528\u7C7B\u578B\u5B9A\u4E49")])]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("swatchColors")]),e("td",[t._v("Array")]),e("td",[t._v("-")]),e("td",[t._v("\u7CFB\u7EDF\u9884\u8BBE\u7684\u989C\u8272\u6837\u4F8B\uFF0C\u503C\u4E3A "),e("code",[t._v("null")]),t._v(" \u6216 "),e("code",[t._v("[]")]),t._v(" \u5219\u4E0D\u663E\u793A\u7CFB\u7EDF\u8272\uFF0C\u503C\u4E3A "),e("code",[t._v("undefined")]),t._v(" \u4F1A\u663E\u793A\u7EC4\u4EF6\u5185\u7F6E\u7684\u7CFB\u7EDF\u9ED8\u8BA4\u8272\u3002TS \u7C7B\u578B\uFF1A"),e("code",[t._v("Array<string> | null")])]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("value")]),e("td",[t._v("String")]),e("td",[t._v("-")]),e("td",[t._v("\u8272\u503C\u3002\u652F\u6301\u8BED\u6CD5\u7CD6 "),e("code",[t._v("v-model")])]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("defaultValue")]),e("td",[t._v("String")]),e("td",[t._v("-")]),e("td",[t._v("\u8272\u503C\u3002\u975E\u53D7\u63A7\u5C5E\u6027")]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("onChange")]),e("td",[t._v("Function")]),e("td"),e("td",[t._v("TS \u7C7B\u578B\uFF1A"),e("code",[t._v("(value: string, context: { color: ColorObject; trigger: ColorPickerChangeTrigger }) => void")]),e("br"),t._v("\u9009\u4E2D\u7684\u8272\u503C\u53D1\u751F\u53D8\u5316\u65F6\u89E6\u53D1\uFF0C\u7B2C\u4E00\u4E2A\u53C2\u6570 "),e("code",[t._v("value")]),t._v(" \u8868\u793A\u65B0\u8272\u503C\uFF0C"),e("code",[t._v("context.color")]),t._v(" \u8868\u793A\u5F53\u524D\u8C03\u8272\u677F\u63A7\u5236\u5668\u7684\u8272\u503C\uFF0C"),e("code",[t._v("context.trigger")]),t._v(" \u8868\u793A\u89E6\u53D1\u989C\u8272\u53D8\u5316\u7684\u6765\u6E90\u3002"),e("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/tree/develop/src/color-picker/type.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("\u8BE6\u7EC6\u7C7B\u578B\u5B9A\u4E49")]),t._v("\u3002"),e("br"),e("code",[t._v("type ColorPickerChangeTrigger = 'palette-saturation-brightness' | 'palette-saturation' | 'palette-brightness' | 'palette-hue-bar' | 'palette-alpha-bar' | 'input' | 'preset' | 'recent' ")]),e("br")]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("onPaletteBarChange")]),e("td",[t._v("Function")]),e("td"),e("td",[t._v("TS \u7C7B\u578B\uFF1A"),e("code",[t._v("(context: { color: ColorObject }) => void")]),e("br"),t._v("\u8C03\u8272\u677F\u63A7\u5236\u5668\u7684\u503C\u53D8\u5316\u65F6\u89E6\u53D1\uFF0C"),e("code",[t._v("context.color")]),t._v(" \u6307\u8C03\u8272\u677F\u63A7\u5236\u5668\u7684\u503C\u3002"),e("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/tree/develop/src/color-picker/type.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("\u8BE6\u7EC6\u7C7B\u578B\u5B9A\u4E49")]),t._v("\u3002"),e("br"),e("code",[t._v("interface ColorObject { alpha: number; css: string; hex: string; hex8: string; hsl: string; hsla: string; hsv: string; hsva: string; rgb: string; rgba: string; saturation: number; value: number; isGradient: boolean; linearGradient?: string; }")]),e("br")]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("onRecentColorsChange")]),e("td",[t._v("Function")]),e("td"),e("td",[t._v("TS \u7C7B\u578B\uFF1A"),e("code",[t._v("(value: Array<string>) => void")]),e("br"),t._v("\u6700\u8FD1\u4F7F\u7528\u989C\u8272\u53D1\u751F\u53D8\u5316\u65F6\u89E6\u53D1")]),e("td",[t._v("N")])])])]),e("h3",{attrs:{id:"colorpicker-events"}},[t._v("ColorPicker Events "),e("a",{staticClass:"header-anchor",attrs:{href:"#colorpicker-events"}})]),e("table",[e("thead",[e("tr",[e("th",[t._v("\u540D\u79F0")]),e("th",[t._v("\u53C2\u6570")]),e("th",[t._v("\u63CF\u8FF0")])])]),e("tbody",[e("tr",[e("td",[t._v("change")]),e("td",[e("code",[t._v("(value: string, context: { color: ColorObject; trigger: ColorPickerChangeTrigger })")])]),e("td",[t._v("\u9009\u4E2D\u7684\u8272\u503C\u53D1\u751F\u53D8\u5316\u65F6\u89E6\u53D1\uFF0C\u7B2C\u4E00\u4E2A\u53C2\u6570 "),e("code",[t._v("value")]),t._v(" \u8868\u793A\u65B0\u8272\u503C\uFF0C"),e("code",[t._v("context.color")]),t._v(" \u8868\u793A\u5F53\u524D\u8C03\u8272\u677F\u63A7\u5236\u5668\u7684\u8272\u503C\uFF0C"),e("code",[t._v("context.trigger")]),t._v(" \u8868\u793A\u89E6\u53D1\u989C\u8272\u53D8\u5316\u7684\u6765\u6E90\u3002"),e("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/tree/develop/src/color-picker/type.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("\u8BE6\u7EC6\u7C7B\u578B\u5B9A\u4E49")]),t._v("\u3002"),e("br"),e("code",[t._v("type ColorPickerChangeTrigger = 'palette-saturation-brightness' | 'palette-saturation' | 'palette-brightness' | 'palette-hue-bar' | 'palette-alpha-bar' | 'input' | 'preset' | 'recent' ")]),e("br")])]),e("tr",[e("td",[t._v("palette-bar-change")]),e("td",[e("code",[t._v("(context: { color: ColorObject })")])]),e("td",[t._v("\u8C03\u8272\u677F\u63A7\u5236\u5668\u7684\u503C\u53D8\u5316\u65F6\u89E6\u53D1\uFF0C"),e("code",[t._v("context.color")]),t._v(" \u6307\u8C03\u8272\u677F\u63A7\u5236\u5668\u7684\u503C\u3002"),e("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/tree/develop/src/color-picker/type.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("\u8BE6\u7EC6\u7C7B\u578B\u5B9A\u4E49")]),t._v("\u3002"),e("br"),e("code",[t._v("interface ColorObject { alpha: number; css: string; hex: string; hex8: string; hsl: string; hsla: string; hsv: string; hsva: string; rgb: string; rgba: string; saturation: number; value: number; isGradient: boolean; linearGradient?: string; }")]),e("br")])]),e("tr",[e("td",[t._v("recent-colors-change")]),e("td",[e("code",[t._v("(value: Array<string>)")])]),e("td",[t._v("\u6700\u8FD1\u4F7F\u7528\u989C\u8272\u53D1\u751F\u53D8\u5316\u65F6\u89E6\u53D1")])])])])]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.tab==="design",expression:"tab === 'design'"}],attrs:{name:"DESIGN"}},[e("nav",{staticClass:"tdesign-toc_container"},[e("ol",{staticClass:"tdesign-toc_list"},[e("li",{staticClass:"tdesign-toc_list_item"},[e("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u4F55\u65F6\u4F7F\u7528"}},[t._v("\u4F55\u65F6\u4F7F\u7528")])]),e("li",{staticClass:"tdesign-toc_list_item"},[e("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u4E0E\u9875\u9762\u5E03\u5C40\u76F8\u5173"}},[t._v("\u4E0E\u9875\u9762\u5E03\u5C40\u76F8\u5173")]),e("ol",{staticClass:"tdesign-toc_list"})])])]),e("h3",{attrs:{id:"\u4F55\u65F6\u4F7F\u7528"}},[t._v("\u4F55\u65F6\u4F7F\u7528 "),e("a",{staticClass:"header-anchor",attrs:{href:"#\u4F55\u65F6\u4F7F\u7528"}})]),e("p",[t._v("\u5F53\u7528\u6237\u9700\u8981\u5BF9\u5F62\u72B6\u3001\u5B57\u4F53\u6216\u53EF\u4FEE\u6539\u7684\u5143\u7D20\u81EA\u5B9A\u4E49\u66F4\u6539\u989C\u8272\u65F6\u3002")]),e("h3",{attrs:{id:"\u4E0E\u9875\u9762\u5E03\u5C40\u76F8\u5173"}},[t._v("\u4E0E\u9875\u9762\u5E03\u5C40\u76F8\u5173 "),e("a",{staticClass:"header-anchor",attrs:{href:"#\u4E0E\u9875\u9762\u5E03\u5C40\u76F8\u5173"}})]),e("h5",{attrs:{id:"\u56FA\u5B9A\u5E03\u5C40\uFF1A\u53EF\u5E03\u5C40\u4E8E\u5DE6\u4FA7\u6216\u53F3\u4FA7\u7F16\u8F91\u680F\u4E0A\uFF0C\u533A\u5206\u5185\u5BB9\u8BFB\u53D6\u533A\u548C\u5DE5\u5177\u64CD\u4F5C\u533A\uFF0C\u9AD8\u6548\u5F15\u5BFC\u7528\u6237\u53D1\u73B0\u548C\u4F7F\u7528\u3002"}},[t._v("\u56FA\u5B9A\u5E03\u5C40\uFF1A\u53EF\u5E03\u5C40\u4E8E\u5DE6\u4FA7\u6216\u53F3\u4FA7\u7F16\u8F91\u680F\u4E0A\uFF0C\u533A\u5206\u5185\u5BB9\u8BFB\u53D6\u533A\u548C\u5DE5\u5177\u64CD\u4F5C\u533A\uFF0C\u9AD8\u6548\u5F15\u5BFC\u7528\u6237\u53D1\u73B0\u548C\u4F7F\u7528\u3002 "),e("a",{staticClass:"header-anchor",attrs:{href:"#\u56FA\u5B9A\u5E03\u5C40\uFF1A\u53EF\u5E03\u5C40\u4E8E\u5DE6\u4FA7\u6216\u53F3\u4FA7\u7F16\u8F91\u680F\u4E0A\uFF0C\u533A\u5206\u5185\u5BB9\u8BFB\u53D6\u533A\u548C\u5DE5\u5177\u64CD\u4F5C\u533A\uFF0C\u9AD8\u6548\u5F15\u5BFC\u7528\u6237\u53D1\u73B0\u548C\u4F7F\u7528\u3002"}})]),e("div",{staticClass:"legend"},[e("div",{staticClass:"item"},[e("img",{attrs:{src:"https://tdesign.gtimg.com/site/design/guide/color-picker/color-picker-1@2x.png"}}),e("em",[t._v("\u56FE\u793A\uFF1A\u7F6E\u4E8E\u5DE6\u4FA7\u7F16\u8F91\u680F")])]),e("div",{staticClass:"item"},[e("img",{attrs:{src:"https://tdesign.gtimg.com/site/design/guide/color-picker/color-picker-2@2x.png"}}),e("em",[t._v("\u56FE\u793A\uFF1A\u7F6E\u4E8E\u53F3\u4FA7\u7F16\u8F91\u680F")])])]),e("hr"),e("h5",{attrs:{id:"\u81EA\u7531\u5E03\u5C40\uFF1A\u4EE5\u6D6E\u7A97\u7684\u5F62\u5F0F\u5448\u73B0\uFF0C\u62D6\u62FD\u4EFB\u610F\u79FB\u52A8\u4F4D\u7F6E\uFF0C\u9632\u6B62\u6D6E\u7A97\u906E\u6321\u9875\u9762\u5185\u5BB9\uFF0C\u589E\u5F3A\u9875\u9762\u5E03\u5C40\u7075\u6D3B\u6027\u3002"}},[t._v("\u81EA\u7531\u5E03\u5C40\uFF1A\u4EE5\u6D6E\u7A97\u7684\u5F62\u5F0F\u5448\u73B0\uFF0C\u62D6\u62FD\u4EFB\u610F\u79FB\u52A8\u4F4D\u7F6E\uFF0C\u9632\u6B62\u6D6E\u7A97\u906E\u6321\u9875\u9762\u5185\u5BB9\uFF0C\u589E\u5F3A\u9875\u9762\u5E03\u5C40\u7075\u6D3B\u6027\u3002 "),e("a",{staticClass:"header-anchor",attrs:{href:"#\u81EA\u7531\u5E03\u5C40\uFF1A\u4EE5\u6D6E\u7A97\u7684\u5F62\u5F0F\u5448\u73B0\uFF0C\u62D6\u62FD\u4EFB\u610F\u79FB\u52A8\u4F4D\u7F6E\uFF0C\u9632\u6B62\u6D6E\u7A97\u906E\u6321\u9875\u9762\u5185\u5BB9\uFF0C\u589E\u5F3A\u9875\u9762\u5E03\u5C40\u7075\u6D3B\u6027\u3002"}})]),e("div",{staticClass:"legend"},[e("div",{staticClass:"item"},[e("img",{attrs:{src:"https://tdesign.gtimg.com/site/design/guide/color-picker/color-picker-3@2x.png"}}),e("em")])])]),e("div",{staticStyle:{"margin-top":"48px"}},[e("td-doc-history",{key:t.lastUpdated,attrs:{time:t.lastUpdated}})],1),e("td-doc-footer",{attrs:{slot:"doc-footer"},slot:"doc-footer"})],1)},q=[];v._withStripped=!0;const Y={components:{Usage:U,Demoexamplepanel:u,Demoexampletrigger:C,Demoexamplecolormode:f,Demoexampleenablealpha:b,Demoexampleswatchcolor:k,Demoexamplerecentcolor:x,Demoexamplestatusdisabled:P,Demoexamplestatusreadonly:y},data(){return{DemoexamplepanelCode:A,DemoexamplepanelCompositionCode:S,DemoexampletriggerCode:w,DemoexampletriggerCompositionCode:I,DemoexamplecolormodeCode:z,DemoexamplecolormodeCompositionCode:T,DemoexampleenablealphaCode:N,DemoexampleenablealphaCompositionCode:O,DemoexampleswatchcolorCode:B,DemoexampleswatchcolorCompositionCode:R,DemoexamplerecentcolorCode:$,DemoexamplerecentcolorCompositionCode:j,DemoexamplestatusdisabledCode:G,DemoexamplestatusdisabledCompositionCode:H,DemoexamplestatusreadonlyCode:E,DemoexamplestatusreadonlyCompositionCode:M}},computed:{lastUpdated(){return this.tab==="design"?1739008828e3:1740128904e3},tab:{get(){return this.$route.query.tab||"demo"},set(t){this.$route.query.tab!==t&&this.$router.push({query:{tab:t}})}}},mounted(){const{tdDocContent:t,tdDocHeader:o,tdDocTabs:e}=this.$refs;o&&(o.docInfo={title:"ColorPicker \u989C\u8272\u9009\u62E9\u5668",desc:"\u7528\u4E8E\u989C\u8272\u9009\u62E9\uFF0C\u652F\u6301\u591A\u79CD\u683C\u5F0F\u3002"}),document.title="ColorPicker \u989C\u8272\u9009\u62E9\u5668 | TDesign",e&&(e.tabs=[{tab:"demo",name:"\u793A\u4F8B"},{tab:"api",name:"API"},{tab:"design",name:"\u6307\u5357"}],e.onchange=({detail:a})=>this.tab=a),D.highlightAll(),this.$emit("loaded",()=>{t.pageStatus="show"})}},c={};var _=i(Y,v,q,!1,J,null,null,null);function J(t){for(let o in c)this[o]=c[o]}_.options.__file="../src/color-picker/color-picker.md";var W=function(){return _.exports}();export{W as default};
