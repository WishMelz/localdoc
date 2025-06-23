var t=`<template>
  <t-empty />
</template>
`,e=`<template>
  <t-empty />
</template>
`,n=`<template>
  <t-empty :description="description" :title="title"> </t-empty>
</template>
<script>
export default {
  data() {
    return {
      title: 'Empty',
      description: 'Description',
    };
  },
  methods: {
    goToIndex() {
      console.log('go to index');
      location.href = '/';
    },
  },
};
<\/script>
`,o=`<template>
  <t-empty :description="description" :title="title"> </t-empty>
</template>
<script setup>
import { ref } from 'vue';

const title = ref('Empty');
const description = ref('Description');
<\/script>
`,p=`<template>
  <t-empty>
    <template #action>
      <t-button @click="goToIndex">\u8FD4\u56DE\u9996\u9875</t-button>
    </template>
  </t-empty>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    goToIndex() {
      console.log('go to index');
      location.href = '/';
    },
  },
};
<\/script>
`,i=`<template>
  <t-empty>
    <template #action>
      <t-button @click="goToIndex">\u8FD4\u56DE\u9996\u9875</t-button>
    </template>
  </t-empty>
</template>
<script setup>
function goToIndex() {
  console.log('go to index');
  location.href = '/';
}
<\/script>
`,m=`<template>
  <t-row :gutter="40">
    <t-col>
      <t-empty type="empty"></t-empty>
    </t-col>
    <t-col>
      <t-empty type="maintenance"></t-empty>
    </t-col>
    <t-col>
      <t-empty type="network-error"></t-empty>
    </t-col>
    <t-col>
      <t-empty type="success"></t-empty>
    </t-col>
    <t-col>
      <t-empty type="fail"></t-empty>
    </t-col>
  </t-row>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
<\/script>
`,a=`<template>
  <t-row :gutter="40">
    <t-col>
      <t-empty type="empty"></t-empty>
    </t-col>
    <t-col>
      <t-empty type="maintenance"></t-empty>
    </t-col>
    <t-col>
      <t-empty type="network-error"></t-empty>
    </t-col>
    <t-col>
      <t-empty type="success"></t-empty>
    </t-col>
    <t-col>
      <t-empty type="fail"></t-empty>
    </t-col>
  </t-row>
</template>
`,r=`<template>
  <t-space direction="vertical">
    <t-radio-group variant="default-filled" :value="size" @change="onChange">
      <t-radio-button value="small">small</t-radio-button>
      <t-radio-button value="medium">medium</t-radio-button>
      <t-radio-button value="large">large</t-radio-button>
    </t-radio-group>
    <div style="margin-top: 20px; height: 100px">
      <t-row :gutter="40">
        <t-col>
          <t-empty type="empty" :size="size"></t-empty>
        </t-col>
        <t-col>
          <t-empty type="maintenance" :size="size"></t-empty>
        </t-col>
        <t-col>
          <t-empty type="network-error" :size="size"></t-empty>
        </t-col>
        <t-col>
          <t-empty type="success" :size="size"></t-empty>
        </t-col>
        <t-col>
          <t-empty type="fail" :size="size"></t-empty>
        </t-col>
      </t-row>
    </div>
  </t-space>
</template>
<script lang="ts">
type SIZE = 'small' | 'medium' | 'large';

export default {
  data() {
    return {
      size: 'medium',
    };
  },
  methods: {
    onChange(value: SIZE) {
      this.size = value;
    },
  },
};
<\/script>
`,l=`<template>
  <t-space direction="vertical">
    <t-radio-group variant="primary-filled" :value="size" @change="onChange">
      <t-radio-button value="small">small</t-radio-button>
      <t-radio-button value="medium">medium</t-radio-button>
      <t-radio-button value="large">large</t-radio-button>
    </t-radio-group>
    <div style="margin-top: 20px; height: 100px">
      <t-row :gutter="40">
        <t-col>
          <t-empty type="empty" :size="size"></t-empty>
        </t-col>
        <t-col>
          <t-empty type="maintenance" :size="size"></t-empty>
        </t-col>
        <t-col>
          <t-empty type="network-error" :size="size"></t-empty>
        </t-col>
        <t-col>
          <t-empty type="success" :size="size"></t-empty>
        </t-col>
        <t-col>
          <t-empty type="fail" :size="size"></t-empty>
        </t-col>
      </t-row>
    </div>
  </t-space>
</template>
<script setup>
import { ref } from 'vue';

const size = ref('medium');

const onChange = (value) => {
  this.size = value;
};
<\/script>
`,c=`<template>
  <t-row :gutter="40">
    <t-col>
      <t-empty description="\u6682\u65E0\u6570\u636E">
        <template #image>
          <error-circle-icon :size="64" color="var(--td-text-color-placeholder)" />
        </template>
      </t-empty>
    </t-col>
    <t-col>
      <t-empty description="\u6682\u65E0\u6570\u636E">
        <template #image>
          <div
            :style="{
              width: '64px',
              height: '64px',
              backgroundImage: 'url(https://tdesign.gtimg.com/demo/demo-image-1.png)',
              backgroundSize: '100% 100%',
            }"
          ></div>
        </template>
      </t-empty>
    </t-col>
  </t-row>
</template>
<script>
import { ErrorCircleIcon } from 'tdesign-icons-vue';

export default {
  components: {
    ErrorCircleIcon,
  },
};
<\/script>
`,s=`<template>
  <t-row :gutter="40">
    <t-col>
      <t-empty description="\u6682\u65E0\u6570\u636E">
        <template #image>
          <error-circle-icon :size="64" color="var(--td-text-color-placeholder)" />
        </template>
      </t-empty>
    </t-col>
    <t-col>
      <t-empty description="\u6682\u65E0\u6570\u636E">
        <template #image>
          <div
            :style="{
              width: '64px',
              height: '64px',
              backgroundImage: 'url(https://tdesign.gtimg.com/demo/demo-image-1.png)',
              backgroundSize: '100% 100%',
            }"
          ></div>
        </template>
      </t-empty>
    </t-col>
  </t-row>
</template>
<script setup>
import { ErrorCircleIcon } from 'tdesign-icons-vue';
<\/script>
`;export{t as D,e as a,n as b,o as c,p as d,i as e,m as f,a as g,r as h,l as i,c as j,s as k};
