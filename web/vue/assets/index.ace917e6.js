import{Y as p,n as c}from"./index.663c003f.js";var h=`<template>
  <div>
    <t-pagination
      v-model="current"
      :total="36"
      :page-size.sync="pageSize"
      @current-change="onCurrentChange"
      @page-size-change="onPageSizeChange"
      @change="onChange"
    />
    <br /><br />
    <!-- :pageSizeOptions="[]" \u8868\u793A\u9690\u85CF\u5206\u9875\u5668\u9009\u9879 -->
    <!-- \u975E\u53D7\u63A7\u7528\u6CD5\uFF0C\u4EE3\u7801\u6709\u6548\uFF0C\u52FF\u5220\u3002 -->
    <t-pagination
      showFirstAndLastPageBtn
      :total="36"
      :default-current="2"
      :default-page-size="10"
      @current-change="onCurrentChange"
      @page-size-change="onPageSizeChange"
      @change="onChange"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 12,
      pageSize: 5,
    };
  },
  methods: {
    onPageSizeChange(size, pageInfo) {
      console.log('Page Size:', this.pageSize, size, pageInfo);
    },
    onCurrentChange(current, pageInfo) {
      console.log('Current Page', this.current, current, pageInfo);
    },
    onChange(pageInfo) {
      console.log('Page Info: ', pageInfo);
    },
  },
};
<\/script>
`,C=`<template>
  <div>
    <t-pagination
      v-model="current"
      :total="36"
      :page-size.sync="pageSize"
      @current-change="onCurrentChange"
      @page-size-change="onPageSizeChange"
      @change="onChange"
    />
    <br /><br />
    <!-- :pageSizeOptions="[]" \u8868\u793A\u9690\u85CF\u5206\u9875\u5668\u9009\u9879 -->
    <!-- \u975E\u53D7\u63A7\u7528\u6CD5\uFF0C\u4EE3\u7801\u6709\u6548\uFF0C\u52FF\u5220\u3002 -->
    <t-pagination
      showFirstAndLastPageBtn
      :total="36"
      :default-current="2"
      :default-page-size="10"
      @current-change="onCurrentChange"
      @page-size-change="onPageSizeChange"
      @change="onChange"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const current = ref(12);
const pageSize = ref(5);
const onPageSizeChange = (size, pageInfo) => {
  console.log('Page Size:', pageSize.value, size, pageInfo);
};
const onCurrentChange = (current, pageInfo) => {
  console.log('Current Page', current.value, current, pageInfo);
};
const onChange = (pageInfo) => {
  console.log('Page Info: ', pageInfo);
};
<\/script>
`,S=`<template>
  <div>
    <t-space direction="vertical" size="large" style="width: 100%">
      <span>\u5C55\u793A\u9996\u5C3E\u9875\u7801\u7701\u7565</span>
      <t-pagination v-model="current" :total="100" :page-size.sync="pageSize" />
      <span>\u4E0D\u5C55\u793A\u9996\u5C3E\u9875\u7801\u7701\u7565</span>
      <t-pagination v-model="current" page-ellipsis-mode="both-ends" :total="100" :page-size.sync="pageSize" />
    </t-space>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 12,
      pageSize: 5,
    };
  },
};
<\/script>
`,b=`<template>
  <div>
    <t-space direction="vertical" size="large" style="width: 100%">
      <span>\u5C55\u793A\u9996\u5C3E\u9875\u7801\u7701\u7565</span>
      <t-pagination v-model="current" :total="100" :page-size.sync="pageSize" />
      <span>\u4E0D\u5C55\u793A\u9996\u5C3E\u9875\u7801\u7701\u7565</span>
      <t-pagination v-model="current" page-ellipsis-mode="both-ends" :total="100" :page-size.sync="pageSize" />
    </t-space>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const current = ref(12);
const pageSize = ref(5);
<\/script>
`,y=`<template>
  <div>
    <t-pagination v-model="current" :total="total" :page-size.sync="pageSize" :totalContent="renderTotalContent" />
  </div>
</template>

<script lang="jsx">
export default {
  data() {
    return {
      current: 12,
      pageSize: 10,
      total: 685,
    };
  },
  methods: {
    renderTotalContent() {
      return <div class="t-pagination__total">{\`\u5171 \${this.total} \u9879\u6570\u636E\`}</div>;
    },
  },
};
<\/script>
`,x=`<template>
  <div>
    <t-pagination v-model="current" :total="total" :page-size.sync="pageSize" :totalContent="renderTotalContent" />
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue';

const current = ref(12);
const pageSize = ref(10);
const total = ref(685);
const renderTotalContent = () => <div class="t-pagination__total">{\`\u5171 \${total.value} \u9879\u6570\u636E\`}</div>;
<\/script>
`,_=`<template>
  <div>
    <t-pagination
      :total="645"
      :page-size.sync="pageSize"
      v-model="current"
      :on-page-size-change="onPageSizeChange"
      show-sizer
      :page-size-options="pageSizeOptions"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageSize: 30,
      current: 1,
      pageSizeOptions: [
        { label: '\u6BCF\u9875 10 \u6761', value: 10 },
        { label: '\u6BCF\u9875 30 \u6761', value: 30 },
        { label: '\u6BCF\u9875 100 \u6761', value: 100 },
        { label: '\u6BCF\u9875 50 \u6761', value: 50 },
      ],
    };
  },
  methods: {
    onPageSizeChange(pageSize, pageInfo) {
      console.log(pageSize, pageInfo);
    },
  },
};
<\/script>
`,P=`<template>
  <div>
    <t-pagination
      :total="645"
      :page-size.sync="pageSize"
      v-model="current"
      :on-page-size-change="onPageSizeChange"
      show-sizer
      :page-size-options="pageSizeOptions"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const pageSize = ref(30);
const current = ref(1);
const pageSizeOptions = ref([
  {
    label: '\u6BCF\u9875 10 \u6761',
    value: 10,
  },
  {
    label: '\u6BCF\u9875 30 \u6761',
    value: 30,
  },
  {
    label: '\u6BCF\u9875 100 \u6761',
    value: 100,
  },
  {
    label: '\u6BCF\u9875 50 \u6761',
    value: 50,
  },
]);
const onPageSizeChange = (pageSize, pageInfo) => {
  console.log(pageSize, pageInfo);
};
<\/script>
`,D=`<template>
  <div>
    <t-pagination v-model="current" :total="101" :page-size.sync="pageSize" show-jumper />
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageSize: 20,
      current: 1,
    };
  },
};
<\/script>
`,I=`<template>
  <div>
    <t-pagination v-model="current" :total="101" :page-size.sync="pageSize" show-jumper />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const pageSize = ref(20);
const current = ref(1);
<\/script>
`,w=`<template>
  <div>
    <t-pagination theme="simple" :total="100" :page-size.sync="pageSize" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageSize: 5,
    };
  },
};
<\/script>
`,B=`<template>
  <div>
    <t-pagination theme="simple" :total="100" :page-size.sync="pageSize" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const pageSize = ref(5);
<\/script>
`,V=`<template>
  <div>
    <t-pagination size="small" :total="100" :page-size.sync="pageSize" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageSize: 5,
    };
  },
};
<\/script>
`,j=`<template>
  <div>
    <t-pagination size="small" :total="100" :page-size.sync="pageSize" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const pageSize = ref(5);
<\/script>
`,L=`<template>
  <t-pagination theme="simple" size="small" :total="100" :page-size.sync="pageSize" />
</template>

<script>
export default {
  data() {
    return {
      pageSize: 5,
    };
  },
};
<\/script>
`,O=`<template>
  <t-pagination theme="simple" size="small" :total="100" :page-size.sync="pageSize" />
</template>

<script setup>
import { ref } from 'vue';

const pageSize = ref(5);
<\/script>
`,$=`<template>
  <t-space direction="vertical" :size="16">
    <t-space align="center">
      <span>layout:</span>
      <t-radio-group v-model="layout" variant="default-filled">
        <t-radio-button value="vertical">vertical</t-radio-button>
        <t-radio-button value="horizontal">horizontal</t-radio-button>
      </t-radio-group>
    </t-space>
    <t-space align="center">
      <span>size:</span>
      <t-radio-group v-model="size" variant="default-filled">
        <t-radio-button value="small">small</t-radio-button>
        <t-radio-button value="medium">medium</t-radio-button>
        <t-radio-button value="large">large</t-radio-button>
      </t-radio-group>
    </t-space>
    <t-pagination-mini :layout="layout" :size="size" :tips="tips" />
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      layout: 'vertical',
      size: 'medium',
      tips: { prev: '\u524D\u5C18\u5FC6\u68A6', current: '\u56DE\u5230\u73B0\u5728', next: '\u5C55\u671B\u672A\u6765' },
    };
  },
};
<\/script>
`,A=`<template>
  <t-space direction="vertical" :size="16">
    <t-space align="center">
      <span>layout:</span>
      <t-radio-group v-model="layout" variant="default-filled">
        <t-radio-button value="vertical">vertical</t-radio-button>
        <t-radio-button value="horizontal">horizontal</t-radio-button>
      </t-radio-group>
    </t-space>
    <t-space align="center">
      <span>size:</span>
      <t-radio-group v-model="size" variant="default-filled">
        <t-radio-button value="small">small</t-radio-button>
        <t-radio-button value="medium">medium</t-radio-button>
        <t-radio-button value="large">large</t-radio-button>
      </t-radio-group>
    </t-space>
    <t-pagination-mini :layout="layout" :size="size" :tips="tips" />
  </t-space>
</template>

<script setup>
import { ref, reactive } from 'vue';

const layout = ref('vertical');
const size = ref('medium');
const tips = reactive({
  prev: '\u524D\u5C18\u5FC6\u68A6',
  current: '\u56DE\u5230\u73B0\u5728',
  next: '\u5C55\u671B\u672A\u6765',
});
<\/script>
`,d=[{name:"disabled",type:"Boolean",defaultValue:!1,options:[]},{name:"showFirstAndLastPageBtn",type:"Boolean",defaultValue:!1,options:[]},{name:"showJumper",type:"Boolean",defaultValue:!1,options:[]},{name:"showPageNumber",type:"Boolean",defaultValue:!0,options:[]},{name:"showPageSize",type:"Boolean",defaultValue:!0,options:[]},{name:"showPreviousAndNextBtn",type:"Boolean",defaultValue:!0,options:[]},{name:"size",type:"enum",defaultValue:"medium",options:[{label:"small",value:"small"},{label:"medium",value:"medium"}]},{name:"theme",type:"enum",defaultValue:"default",options:[{label:"default",value:"default"},{label:"simple",value:"simple"}]},{name:"totalContent",type:"Boolean",defaultValue:!0,options:[]}];const s={};s.setup=(n,e)=>{const t=p(d),a=[{label:"pagination",value:"pagination"}],o={pagination:'<t-pagination :total="30" v-bind="configProps" />'},i=p(`<template>${o[a[0].value].trim()}</template>`);function u(m){i.value=`<template>${o[m].trim()}</template>`}return{configList:t,panelList:a,usageCode:i,onPanelChange:u}};var l=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("base-usage",{attrs:{code:n.usageCode,"config-list":n.configList,"panel-list":n.panelList},on:{PanelChange:n.onPanelChange},scopedSlots:n._u([{key:"pagination",fn:function(a){var o=a.configProps;return[t("t-pagination",n._b({attrs:{total:30}},"t-pagination",o,!1))]}}])})},v=[];l._withStripped=!0;const r={};var g=c(s,l,v,!1,z,null,null,null);function z(n){for(let e in r)this[e]=r[e]}g.options.__file="../src/pagination/_usage/index.vue";var F=function(){return g.exports}();export{h as D,F as U,C as a,S as b,b as c,y as d,x as e,_ as f,P as g,D as h,I as i,w as j,B as k,V as l,j as m,L as n,O as o,$ as p,A as q};
