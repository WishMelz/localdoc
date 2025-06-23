var n=`<template>
  <div class="tdesign-demo-item--grid">
    <t-row v-for="(i, idx) in demoCols" :key="idx">
      <t-col v-for="(j, jdx) in i" :key="jdx" :span="j">
        <div>{{ j }}</div>
      </t-col>
    </t-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      demoCols: [
        Array(12).fill(1),
        Array(6).fill(2),
        Array(4).fill(3),
        Array(3).fill(4),
        Array(2).fill(6),
        Array(1).fill(12),
      ],
    };
  },
};
<\/script>
`,t=`<template>
  <div class="tdesign-demo-item--grid">
    <t-row v-for="(i, idx) in demoCols" :key="idx">
      <t-col v-for="(j, jdx) in i" :key="jdx" :span="j">
        <div>{{ j }}</div>
      </t-col>
    </t-row>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const demoCols = ref([
  Array(12).fill(1),
  Array(6).fill(2),
  Array(4).fill(3),
  Array(3).fill(4),
  Array(2).fill(6),
  Array(1).fill(12),
]);
<\/script>
`,o=`<template>
  <t-space direction="vertical">
    <!-- \u53EA\u6307\u5B9A\u6C34\u5E73gutter\uFF0C\u5782\u76F4\u9ED8\u8BA4\u4E3A0 -->
    <span>\u6C34\u5E73 gutter \u4E3A\u56FA\u5B9A\u503C</span>
    <t-row :gutter="16">
      <t-col :span="3">
        <div>col-3</div>
      </t-col>
      <t-col :span="3">
        <div>col-3</div>
      </t-col>
      <t-col :span="3">
        <div>col-3</div>
      </t-col>
      <t-col :span="3">
        <div>col-3</div>
      </t-col>
    </t-row>

    <!-- \u6C34\u5E73gutter\u4E3A\u54CD\u5E94\u5F0F -->
    <span>\u6C34\u5E73 gutter \u4E3A\u54CD\u5E94\u5F0F</span>
    <t-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32, xl: 32, xxl: 40 }">
      <t-col :span="3">
        <div>col-3</div>
      </t-col>
      <t-col :span="3">
        <div>col-3</div>
      </t-col>
      <t-col :span="3">
        <div>col-3</div>
      </t-col>
      <t-col :span="3">
        <div>col-3</div>
      </t-col>
    </t-row>

    <!-- \u6307\u5B9A\u6C34\u5E73\u548C\u5782\u76F4gutter\uFF0C\u6CE8\uFF1A\u5782\u76F4gutter\u53EA\u5728\u540C\u4E00\u4E2Arow\u7EC4\u4EF6\u4E0B\u9762\u7684col\u7EC4\u4EF6\u4E4B\u95F4\u751F\u6548 -->
    <span>\u6C34\u5E73\u548C\u5782\u76F4 gutter \u5747\u4E3A\u56FA\u5B9A\u503C</span>
    <t-row :gutter="[16, 24]">
      <t-col v-for="i in 8" :key="i" :span="3">
        <div>col-3</div>
      </t-col>
    </t-row>

    <!-- \u6C34\u5E73gutter\u54CD\u5E94\u5F0F\uFF0C\u5782\u76F4gutter\u56FA\u5B9A\u503C-->
    <span>\u6C34\u5E73 gutter \u54CD\u5E94\u5F0F\uFF0C\u5782\u76F4 gutter\u56FA\u5B9A\u503C </span>
    <t-row :gutter="[{ xs: 8, sm: 16, md: 24, lg: 32, xl: 32, xxl: 40 }, 24]">
      <t-col v-for="i in 8" :key="i" :span="3">
        <div>col-3</div>
      </t-col>
    </t-row>

    <!-- \u6C34\u5E73\u548C\u5782\u76F4 gutter \u5747\u4E3A\u54CD\u5E94\u5F0F -->
    <span>\u6C34\u5E73\u548C\u5782\u76F4 gutter \u5747\u4E3A\u54CD\u5E94\u5F0F</span>
    <t-row
      :gutter="[
        { xs: 8, sm: 16, md: 24, lg: 32, xl: 32, xxl: 40 },
        { xs: 8, sm: 16, md: 24, lg: 32, xl: 32, xxl: 40 },
      ]"
    >
      <t-col v-for="i in 8" :key="i" :span="3">
        <div>col-3</div>
      </t-col>
    </t-row>
  </t-space>
</template>
`,l=`<template>
  <t-space direction="vertical">
    <!-- \u53EA\u6307\u5B9A\u6C34\u5E73gutter\uFF0C\u5782\u76F4\u9ED8\u8BA4\u4E3A0 -->
    <span>\u6C34\u5E73 gutter \u4E3A\u56FA\u5B9A\u503C</span>
    <t-row :gutter="16">
      <t-col :span="3">
        <div>col-3</div>
      </t-col>
      <t-col :span="3">
        <div>col-3</div>
      </t-col>
      <t-col :span="3">
        <div>col-3</div>
      </t-col>
      <t-col :span="3">
        <div>col-3</div>
      </t-col>
    </t-row>

    <!-- \u6C34\u5E73gutter\u4E3A\u54CD\u5E94\u5F0F -->
    <span>\u6C34\u5E73 gutter \u4E3A\u54CD\u5E94\u5F0F</span>
    <t-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32, xl: 32, xxl: 40 }">
      <t-col :span="3">
        <div>col-3</div>
      </t-col>
      <t-col :span="3">
        <div>col-3</div>
      </t-col>
      <t-col :span="3">
        <div>col-3</div>
      </t-col>
      <t-col :span="3">
        <div>col-3</div>
      </t-col>
    </t-row>

    <!-- \u6307\u5B9A\u6C34\u5E73\u548C\u5782\u76F4gutter\uFF0C\u6CE8\uFF1A\u5782\u76F4gutter\u53EA\u5728\u540C\u4E00\u4E2Arow\u7EC4\u4EF6\u4E0B\u9762\u7684col\u7EC4\u4EF6\u4E4B\u95F4\u751F\u6548 -->
    <span>\u6C34\u5E73\u548C\u5782\u76F4 gutter \u5747\u4E3A\u56FA\u5B9A\u503C</span>
    <t-row :gutter="[16, 24]">
      <t-col v-for="i in 8" :key="i" :span="3">
        <div>col-3</div>
      </t-col>
    </t-row>

    <!-- \u6C34\u5E73gutter\u54CD\u5E94\u5F0F\uFF0C\u5782\u76F4gutter\u56FA\u5B9A\u503C-->
    <span>\u6C34\u5E73 gutter \u54CD\u5E94\u5F0F\uFF0C\u5782\u76F4 gutter\u56FA\u5B9A\u503C </span>
    <t-row :gutter="[{ xs: 8, sm: 16, md: 24, lg: 32, xl: 32, xxl: 40 }, 24]">
      <t-col v-for="i in 8" :key="i" :span="3">
        <div>col-3</div>
      </t-col>
    </t-row>

    <!-- \u6C34\u5E73\u548C\u5782\u76F4 gutter \u5747\u4E3A\u54CD\u5E94\u5F0F -->
    <span>\u6C34\u5E73\u548C\u5782\u76F4 gutter \u5747\u4E3A\u54CD\u5E94\u5F0F</span>
    <t-row
      :gutter="[
        { xs: 8, sm: 16, md: 24, lg: 32, xl: 32, xxl: 40 },
        { xs: 8, sm: 16, md: 24, lg: 32, xl: 32, xxl: 40 },
      ]"
    >
      <t-col v-for="i in 8" :key="i" :span="3">
        <div>col-3</div>
      </t-col>
    </t-row>
  </t-space>
</template>
`,c=`<template>
  <t-space direction="vertical">
    <t-row>
      <t-col :span="4">
        <div>col-4</div>
      </t-col>
      <t-col :span="4" :offset="4">
        <div>col-4 col-offset-4</div>
      </t-col>
    </t-row>

    <t-row>
      <t-col :span="3" :offset="3">
        <div>col-3 col-offset-3</div>
      </t-col>
      <t-col :span="3" :offset="3">
        <div>col-3 col-offset-3</div>
      </t-col>
    </t-row>

    <t-row>
      <t-col :span="6" :offset="3">
        <div>col-6 col-offset-3</div>
      </t-col>
    </t-row>
  </t-space>
</template>
`,i=`<template>
  <t-space direction="vertical">
    <t-row>
      <t-col :span="4">
        <div>col-4</div>
      </t-col>
      <t-col :span="4" :offset="4">
        <div>col-4 col-offset-4</div>
      </t-col>
    </t-row>

    <t-row>
      <t-col :span="3" :offset="3">
        <div>col-3 col-offset-3</div>
      </t-col>
      <t-col :span="3" :offset="3">
        <div>col-3 col-offset-3</div>
      </t-col>
    </t-row>

    <t-row>
      <t-col :span="6" :offset="3">
        <div>col-6 col-offset-3</div>
      </t-col>
    </t-row>
  </t-space>
</template>
`,e=`<template>
  <t-row>
    <t-col :span="9" :push="3">
      <div>col-9 col-pull-3</div>
    </t-col>
    <t-col :span="3" :pull="9">
      <div>col-3 col-pull-9</div>
    </t-col>
  </t-row>
</template>
`,d=`<template>
  <t-row>
    <t-col :span="9" :push="3">
      <div>col-9 col-pull-3</div>
    </t-col>
    <t-col :span="3" :pull="9">
      <div>col-3 col-pull-9</div>
    </t-col>
  </t-row>
</template>
`,a=`<template>
  <t-row>
    <t-col :span="3" :order="4">
      <div>1 col-3-order-4</div>
    </t-col>
    <t-col :span="3" :order="3">
      <div>2 col-3-order-3</div>
    </t-col>
    <t-col :span="3" :order="2">
      <div>3 col-3-order-2</div>
    </t-col>
    <t-col :span="3" :order="1">
      <div>4 col-3-order-1</div>
    </t-col>
  </t-row>
</template>
`,s=`<template>
  <t-row>
    <t-col :span="3" :order="4">
      <div>1 col-3-order-4</div>
    </t-col>
    <t-col :span="3" :order="3">
      <div>2 col-3-order-3</div>
    </t-col>
    <t-col :span="3" :order="2">
      <div>3 col-3-order-2</div>
    </t-col>
    <t-col :span="3" :order="1">
      <div>4 col-3-order-1</div>
    </t-col>
  </t-row>
</template>
`,p=`<template>
  <t-space direction="vertical">
    <span>align left</span>
    <t-row justify="start">
      <t-col :span="2">
        <div>col-2</div>
      </t-col>
      <t-col :span="2">
        <div>col-2</div>
      </t-col>
      <t-col :span="2">
        <div>col-2</div>
      </t-col>
      <t-col :span="2">
        <div>col-2</div>
      </t-col>
    </t-row>

    <span>align center</span>
    <t-row justify="center">
      <t-col :span="2">
        <div>col-2</div>
      </t-col>
      <t-col :span="2">
        <div>col-2</div>
      </t-col>
      <t-col :span="2">
        <div>col-2</div>
      </t-col>
      <t-col :span="2">
        <div>col-2</div>
      </t-col>
    </t-row>

    <span>align right</span>
    <t-row justify="end">
      <t-col :span="2">
        <div>col-2</div>
      </t-col>
      <t-col :span="2">
        <div>col-2</div>
      </t-col>
      <t-col :span="2">
        <div>col-2</div>
      </t-col>
      <t-col :span="2">
        <div>col-2</div>
      </t-col>
    </t-row>

    <span>space-between</span>
    <t-row justify="space-between">
      <t-col :span="2">
        <div>col-2</div>
      </t-col>
      <t-col :span="2">
        <div>col-2</div>
      </t-col>
      <t-col :span="2">
        <div>col-2</div>
      </t-col>
      <t-col :span="2">
        <div>col-2</div>
      </t-col>
    </t-row>

    <span>space-around</span>
    <t-row justify="space-around">
      <t-col :span="2">
        <div>col-2</div>
      </t-col>
      <t-col :span="2">
        <div>col-2</div>
      </t-col>
      <t-col :span="2">
        <div>col-2</div>
      </t-col>
      <t-col :span="2">
        <div>col-2</div>
      </t-col>
    </t-row>
  </t-space>
</template>
`,v=`<template>
  <t-space direction="vertical">
    <span>align left</span>
    <t-row justify="start">
      <t-col :span="2">
        <div>col-2</div>
      </t-col>
      <t-col :span="2">
        <div>col-2</div>
      </t-col>
      <t-col :span="2">
        <div>col-2</div>
      </t-col>
      <t-col :span="2">
        <div>col-2</div>
      </t-col>
    </t-row>

    <span>align center</span>
    <t-row justify="center">
      <t-col :span="2">
        <div>col-2</div>
      </t-col>
      <t-col :span="2">
        <div>col-2</div>
      </t-col>
      <t-col :span="2">
        <div>col-2</div>
      </t-col>
      <t-col :span="2">
        <div>col-2</div>
      </t-col>
    </t-row>

    <span>align right</span>
    <t-row justify="end">
      <t-col :span="2">
        <div>col-2</div>
      </t-col>
      <t-col :span="2">
        <div>col-2</div>
      </t-col>
      <t-col :span="2">
        <div>col-2</div>
      </t-col>
      <t-col :span="2">
        <div>col-2</div>
      </t-col>
    </t-row>

    <span>space-between</span>
    <t-row justify="space-between">
      <t-col :span="2">
        <div>col-2</div>
      </t-col>
      <t-col :span="2">
        <div>col-2</div>
      </t-col>
      <t-col :span="2">
        <div>col-2</div>
      </t-col>
      <t-col :span="2">
        <div>col-2</div>
      </t-col>
    </t-row>

    <span>space-around</span>
    <t-row justify="space-around">
      <t-col :span="2">
        <div>col-2</div>
      </t-col>
      <t-col :span="2">
        <div>col-2</div>
      </t-col>
      <t-col :span="2">
        <div>col-2</div>
      </t-col>
      <t-col :span="2">
        <div>col-2</div>
      </t-col>
    </t-row>
  </t-space>
</template>
`,r=`<template>
  <t-space direction="vertical">
    <p>align top</p>
    <t-row align="top" justify="center">
      <t-col :span="3">
        <div style="height: 100px">col-3</div>
      </t-col>
      <t-col :span="3">
        <div>col-3</div>
      </t-col>
      <t-col :span="3">
        <div style="height: 100px">col-3</div>
      </t-col>
      <t-col :span="3">
        <div>col-3</div>
      </t-col>
    </t-row>

    <p>align middle</p>
    <t-row align="middle" justify="space-around">
      <t-col :span="3">
        <div style="height: 100px">col-3</div>
      </t-col>
      <t-col :span="3">
        <div>col-3</div>
      </t-col>
      <t-col :span="3">
        <div style="height: 100px">col-3</div>
      </t-col>
      <t-col :span="3">
        <div>col-3</div>
      </t-col>
    </t-row>

    <p>align bottom</p>
    <t-row align="bottom" justify="space-between">
      <t-col :span="3">
        <div style="height: 100px">col-3</div>
      </t-col>
      <t-col :span="3">
        <div>col-3</div>
      </t-col>
      <t-col :span="3">
        <div style="height: 100px">col-3</div>
      </t-col>
      <t-col :span="3">
        <div>col-3</div>
      </t-col>
    </t-row>
  </t-space>
</template>
`,m=`<template>
  <t-space direction="vertical">
    <p>align top</p>
    <t-row align="top" justify="center">
      <t-col :span="3">
        <div style="height: 100px">col-3</div>
      </t-col>
      <t-col :span="3">
        <div>col-3</div>
      </t-col>
      <t-col :span="3">
        <div style="height: 100px">col-3</div>
      </t-col>
      <t-col :span="3">
        <div>col-3</div>
      </t-col>
    </t-row>

    <p>align middle</p>
    <t-row align="middle" justify="space-around">
      <t-col :span="3">
        <div style="height: 100px">col-3</div>
      </t-col>
      <t-col :span="3">
        <div>col-3</div>
      </t-col>
      <t-col :span="3">
        <div style="height: 100px">col-3</div>
      </t-col>
      <t-col :span="3">
        <div>col-3</div>
      </t-col>
    </t-row>

    <p>align bottom</p>
    <t-row align="bottom" justify="space-between">
      <t-col :span="3">
        <div style="height: 100px">col-3</div>
      </t-col>
      <t-col :span="3">
        <div>col-3</div>
      </t-col>
      <t-col :span="3">
        <div style="height: 100px">col-3</div>
      </t-col>
      <t-col :span="3">
        <div>col-3</div>
      </t-col>
    </t-row>
  </t-space>
</template>
`,f=`<template>
  <t-space direction="vertical">
    <t-row>
      <t-col :flex="2">
        <div>2 / 5</div>
      </t-col>
      <t-col :flex="3">
        <div>3 / 5</div>
      </t-col>
    </t-row>

    <t-row>
      <t-col flex="100px">
        <div>100px</div>
      </t-col>
      <t-col flex="auto">
        <div>auto</div>
      </t-col>
    </t-row>

    <t-row>
      <t-col flex="1 1 200px">
        <div>1 1 200px</div>
      </t-col>
      <t-col flex="0 1 300px">
        <div>0 1 300px</div>
      </t-col>
    </t-row>

    <t-row>
      <t-col flex="none">
        <div style="padding: 0 16px">none</div>
      </t-col>
      <t-col flex="auto">
        <div>auto with no-wrap</div>
      </t-col>
    </t-row>
  </t-space>
</template>
`,x=`<template>
  <t-space direction="vertical">
    <t-row>
      <t-col :flex="2">
        <div>2 / 5</div>
      </t-col>
      <t-col :flex="3">
        <div>3 / 5</div>
      </t-col>
    </t-row>

    <t-row>
      <t-col flex="100px">
        <div>100px</div>
      </t-col>
      <t-col flex="auto">
        <div>auto</div>
      </t-col>
    </t-row>

    <t-row>
      <t-col flex="1 1 200px">
        <div>1 1 200px</div>
      </t-col>
      <t-col flex="0 1 300px">
        <div>0 1 300px</div>
      </t-col>
    </t-row>

    <t-row>
      <t-col flex="none">
        <div style="padding: 0 16px">none</div>
      </t-col>
      <t-col flex="auto">
        <div>auto with no-wrap</div>
      </t-col>
    </t-row>
  </t-space>
</template>
`,w=`<template>
  <t-space direction="vertical">
    <span>\u5BBD\u5EA6\u54CD\u5E94\u5F0F</span>
    <t-row>
      <t-col :xs="2" :sm="4" :md="6" :lg="8" :xl="10">
        <div>Col</div>
      </t-col>
      <t-col :xs="10" :sm="8" :md="6" :lg="4" :xl="2">
        <div>Col</div>
      </t-col>
    </t-row>

    <span>\u5176\u4ED6\u5C5E\u6027\u54CD\u5E94\u5F0F\uFF08\u652F\u6301span\uFF0Coffset\uFF0Corder\uFF0Cpull\uFF0Cpush\uFF09</span>
    <t-row>
      <t-col
        :xs="{ offset: 0, span: 3 }"
        :sm="{ offset: 2, span: 3 }"
        :md="{ offset: 4, span: 3 }"
        :lg="{ offset: 6, span: 3 }"
        :xl="{ offset: 8, span: 3 }"
      >
        <div>Col</div>
      </t-col>
    </t-row>
  </t-space>
</template>
`,g=`<template>
  <t-space direction="vertical">
    <span>\u5BBD\u5EA6\u54CD\u5E94\u5F0F</span>
    <t-row>
      <t-col :xs="2" :sm="4" :md="6" :lg="8" :xl="10">
        <div>Col</div>
      </t-col>
      <t-col :xs="10" :sm="8" :md="6" :lg="4" :xl="2">
        <div>Col</div>
      </t-col>
    </t-row>

    <span>\u5176\u4ED6\u5C5E\u6027\u54CD\u5E94\u5F0F\uFF08\u652F\u6301span\uFF0Coffset\uFF0Corder\uFF0Cpull\uFF0Cpush\uFF09</span>
    <t-row>
      <t-col
        :xs="{ offset: 0, span: 3 }"
        :sm="{ offset: 2, span: 3 }"
        :md="{ offset: 4, span: 3 }"
        :lg="{ offset: 6, span: 3 }"
        :xl="{ offset: 8, span: 3 }"
      >
        <div>Col</div>
      </t-col>
    </t-row>
  </t-space>
</template>
`;export{n as D,t as a,o as b,l as c,c as d,i as e,e as f,d as g,a as h,s as i,p as j,v as k,r as l,m,f as n,x as o,w as p,g as q};
