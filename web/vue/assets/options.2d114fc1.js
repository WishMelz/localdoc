var e=`<template>
  <t-breadcrumb :maxItemWidth="'150'">
    <t-breadcrumbItem>\u9875\u97621</t-breadcrumbItem>
    <t-breadcrumbItem>\u9875\u97622\u9762\u5305\u5C51\u6587\u6848\u8D85\u957F\u65F6\u60AC\u6D6E\u663E\u793A\u6587\u6848\u5168\u90E8\u4FE1\u606F</t-breadcrumbItem>
    <t-breadcrumbItem :maxWidth="'160'">\u9762\u5305\u5C51\u4E2D\u6587\u6848\u8FC7\u957F\u65F6\u53EF\u7F29\u7565\u663E\u793A\uFF0C\u9F20\u6807hover\u65F6\u663E\u793A\u5168\u90E8</t-breadcrumbItem>
  </t-breadcrumb>
</template>
`,t=`<template>
  <t-breadcrumb :maxItemWidth="'150'">
    <t-breadcrumbItem>\u9875\u97621</t-breadcrumbItem>
    <t-breadcrumbItem>\u9875\u97622\u9762\u5305\u5C51\u6587\u6848\u8D85\u957F\u65F6\u60AC\u6D6E\u663E\u793A\u6587\u6848\u5168\u90E8\u4FE1\u606F</t-breadcrumbItem>
    <t-breadcrumbItem :maxWidth="'160'">\u9762\u5305\u5C51\u4E2D\u6587\u6848\u8FC7\u957F\u65F6\u53EF\u7F29\u7565\u663E\u793A\uFF0C\u9F20\u6807hover\u65F6\u663E\u793A\u5168\u90E8</t-breadcrumbItem>
  </t-breadcrumb>
</template>
`,n=`<template>
  <t-breadcrumb>
    <t-breadcrumbItem><bookmark-icon name="bookmark" slot="icon" />\u9875\u97621</t-breadcrumbItem>
    <t-breadcrumbItem><bookmark-icon name="bookmark" slot="icon" />\u9875\u97622</t-breadcrumbItem>
    <t-breadcrumbItem><bookmark-icon name="bookmark" slot="icon" />\u9875\u97623</t-breadcrumbItem>
  </t-breadcrumb>
</template>
<script>
import { BookmarkIcon } from 'tdesign-icons-vue';

export default {
  components: {
    BookmarkIcon,
  },
};
<\/script>
`,r=`<template>
  <t-breadcrumb>
    <t-breadcrumbItem><BookmarkIcon name="bookmark" slot="icon" />\u9875\u97621</t-breadcrumbItem>
    <t-breadcrumbItem><BookmarkIcon name="bookmark" slot="icon" />\u9875\u97622</t-breadcrumbItem>
    <t-breadcrumbItem><BookmarkIcon name="bookmark" slot="icon" />\u9875\u97623</t-breadcrumbItem>
  </t-breadcrumb>
</template>
<script setup>
import { BookmarkIcon } from 'tdesign-icons-vue';
<\/script>
`,m=`<template>
  <t-breadcrumb>
    <template v-slot:default>
      <t-breadcrumbItem>\u9875\u97621</t-breadcrumbItem>
      <t-breadcrumbItem>\u9875\u97622</t-breadcrumbItem>
      <t-breadcrumbItem>\u9875\u97623</t-breadcrumbItem>
    </template>
    <template v-slot:separator> <chevron-right-icon name="chevron-right" /> </template>
  </t-breadcrumb>
</template>
<script>
import { ChevronRightIcon } from 'tdesign-icons-vue';

export default {
  components: {
    ChevronRightIcon,
  },
};
<\/script>
`,o=`<template>
  <t-breadcrumb>
    <template v-slot:default>
      <t-breadcrumbItem>\u9875\u97621</t-breadcrumbItem>
      <t-breadcrumbItem>\u9875\u97622</t-breadcrumbItem>
      <t-breadcrumbItem>\u9875\u97623</t-breadcrumbItem>
    </template>
    <template v-slot:separator> <chevron-right-icon name="chevron-right" /> </template>
  </t-breadcrumb>
</template>
<script setup>
import { ChevronRightIcon } from 'tdesign-icons-vue';
<\/script>
`,a=`<template>
  <t-breadcrumb :separator="() => '/'">
    <t-breadcrumbItem>\u9875\u97621</t-breadcrumbItem>
    <t-breadcrumbItem>\u9875\u97622 <chevron-down-icon name="chevron-down" /></t-breadcrumbItem>
    <t-breadcrumbItem>\u9875\u97623</t-breadcrumbItem>
  </t-breadcrumb>
</template>
<script>
import { ChevronDownIcon } from 'tdesign-icons-vue';

export default {
  components: {
    ChevronDownIcon,
  },
};
<\/script>
`,b=`<template>
  <t-breadcrumb :separator="() => '/'">
    <t-breadcrumbItem>\u9875\u97621</t-breadcrumbItem>
    <t-breadcrumbItem>\u9875\u97622 <chevron-down-icon name="chevron-down" /></t-breadcrumbItem>
    <t-breadcrumbItem>\u9875\u97623</t-breadcrumbItem>
  </t-breadcrumb>
</template>
<script setup>
import { ChevronDownIcon } from 'tdesign-icons-vue';
<\/script>
`,c=`<template>
  <t-breadcrumb :options="options"> </t-breadcrumb>
</template>

<script>
export default {
  name: 'options',
  data() {
    return {
      options: [{ content: '\u9875\u97621' }, { content: '\u9875\u97622' }, { content: '\u9875\u97623', href: '//tdesign.tencent.com/' }],
    };
  },
};
<\/script>
`,d=`<template>
  <t-breadcrumb :options="options"> </t-breadcrumb>
</template>

<script setup>
import { ref } from 'vue';

const options = ref([
  {
    content: '\u9875\u97621',
  },
  {
    content: '\u9875\u97622',
  },
  {
    content: '\u9875\u97623',
    href: '//tdesign.tencent.com/',
  },
]);
<\/script>
`;export{e as D,t as a,n as b,r as c,m as d,o as e,a as f,b as g,c as h,d as i};
