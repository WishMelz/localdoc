var t=`<template>
  <t-space :size="100">
    <t-statistic title="Total Assets" :value="82.76" unit="%" trend="increase" />
    <t-statistic title="Total Assets" :value="82.76" unit="USD" trend="increase" />
  </t-space>
</template>
`,e=`<template>
  <t-space :size="100">
    <t-statistic title="Total Assets" :value="82.76" unit="%" trend="increase" />
    <t-statistic title="Total Assets" :value="82.76" unit="USD" trend="increase" />
  </t-space>
</template>
`,n=`<template>
  <t-space :size="100">
    <t-statistic title="Total Assets" :value="82.76" unit="%" trend="increase" />
    <t-statistic title="Total Assets" :value="82.76" unit="%" trend="decrease" />
    <t-statistic title="Total Assets" :value="82.76" unit="%" trend="decrease" trendPlacement="right" />
  </t-space>
</template>
`,a=`<template>
  <t-space :size="100">
    <t-statistic title="Total Assets" :value="82.76" unit="%" trend="increase" />
    <t-statistic title="Total Assets" :value="82.76" unit="%" trend="decrease" />
    <t-statistic title="Total Assets" :value="82.76" unit="%" trend="decrease" trendPlacement="right" />
  </t-space>
</template>
`,s=`<template>
  <t-space>
    <t-statistic title="Total Assets" :value="82.76" unit="%" trend="increase" color="black" />
    <t-statistic title="Total Assets" :value="82.76" unit="%" trend="increase" color="blue" />
    <t-statistic title="Total Assets" :value="82.76" unit="%" trend="increase" color="red" />
    <t-statistic title="Total Assets" :value="82.76" unit="%" trend="increase" color="orange" />
    <t-statistic title="Total Assets" :value="82.76" unit="%" trend="increase" color="green" />
  </t-space>
</template>
`,i=`<template>
  <t-space>
    <t-statistic title="Total Assets" :value="82.76" unit="%" trend="increase" color="black" />
    <t-statistic title="Total Assets" :value="82.76" unit="%" trend="increase" color="blue" />
    <t-statistic title="Total Assets" :value="82.76" unit="%" trend="increase" color="red" />
    <t-statistic title="Total Assets" :value="82.76" unit="%" trend="increase" color="orange" />
    <t-statistic title="Total Assets" :value="82.76" unit="%" trend="increase" color="green" />
  </t-space>
</template>
`,r=`<template>
  <t-space :size="32">
    <t-statistic title="Total Assets" :value="56.32" unit="%">
      <template #prefix>
        <control-platform-icon />
      </template>
    </t-statistic>
    <t-statistic title="Total Assets" :value="176059" prefix="$" unit="%" trend="increase" />

    <t-statistic title="Total Assets" :value="62.58">
      <template #suffix>
        <arrow-triangle-down-filled-icon style="color: #ee4d38" />
      </template>
    </t-statistic>
  </t-space>
</template>
<script>
import { ControlPlatformIcon, ArrowTriangleDownFilledIcon } from 'tdesign-icons-vue';

export default {
  components: {
    ArrowTriangleDownFilledIcon,
    ControlPlatformIcon,
  },
};
<\/script>
`,l=`<template>
  <t-space :size="32">
    <t-statistic title="Total Assets" :value="56.32" unit="%">
      <template #prefix>
        <control-platform-icon />
      </template>
    </t-statistic>
    <t-statistic title="Total Assets" :value="176059" prefix="$" unit="%" trend="increase" />

    <t-statistic title="Total Assets" :value="62.58">
      <template #suffix>
        <arrow-triangle-down-filled-icon style="color: #ee4d38" />
      </template>
    </t-statistic>
  </t-space>
</template>
<script setup>
import { ControlPlatformIcon, ArrowTriangleDownFilledIcon } from 'tdesign-icons-vue';
<\/script>
`,o=`<template>
  <t-space direction="vertical">
    <t-space>
      <t-button @click="start = true">Start</t-button>
      <t-button @click="value = 98.12">Update value</t-button>
      <t-button @click="$refs.refUp.start()">refs</t-button>
    </t-space>
    <t-statistic
      ref="refUp"
      title="Total Assets"
      suffix="%"
      :value="value"
      :animation="{
        valueFrom: 0,
        duration: 2000,
      }"
      :decimal-places="2"
      :animation-start="start"
    />
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      start: false,
      value: 56.32,
    };
  },
};
<\/script>
`,c=`<template>
  <t-space direction="vertical">
    <t-space>
      <t-button @click="start = true">Start</t-button>
      <t-button @click="value = 98.12">Update value</t-button>
      <t-button @click="$refs.refUp.start()">refs</t-button>
    </t-space>
    <t-statistic
      ref="refUp"
      title="Total Assets"
      suffix="%"
      :value="value"
      :animation="{
        valueFrom: 0,
        duration: 2000,
      }"
      :decimal-places="2"
      :animation-start="start"
    />
  </t-space>
</template>

<script setup>
import { ref } from 'vue';

const start = ref(false);
const value = ref(56.32);
<\/script>
`,p=`<template>
  <t-space direction="vertical">
    <t-switch v-model="loading" size="large" />
    <t-statistic title="Downloads" :value="123456" :loading="loading" />
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
    };
  },
};
<\/script>
`,d=`<template>
  <t-space direction="vertical">
    <t-switch v-model="loading" size="large" />
    <t-statistic title="Downloads" :value="123456" :loading="loading" />
  </t-space>
</template>

<script setup>
import { ref } from 'vue';

const loading = ref(true);
<\/script>
`,u=`<template>
  <t-space :size="100" breakLine>
    <t-space align="center">
      <t-icon name="chart" class="icon" />
      <t-statistic title="Total Assets" :value="82.76" unit="%" trend="increase" trendPlacement="right" />
    </t-space>

    <t-space align="center">
      <t-statistic title="Total Assets" :value="52.18" unit="%" trend="decrease" />
      <t-icon name="internet" class="icon" style="border-radius: 50%" />
    </t-space>

    <t-card title="Yesterday traffic" header-bordered hover-shadow>
      <t-space :separator="separator">
        <t-statistic title="Voice duration" :value="789" unit="minute" extra="the day before 9%" />
        <t-statistic title="Total number of voice DAUs" :value="188" color="red">
          <template #extra>
            <t-space direction="vertical" :size="0">
              <span>
                the day before
                <t-icon name="arrow-up" style="color: #d54941" />
                9%
              </span>
              <span>
                last week
                <t-icon name="arrow-down" style="color: #2ba471" />
                9%
              </span>
            </t-space>
          </template>
        </t-statistic>
        <t-statistic title="Total Assets" :value="52.18" unit="%" trend="decrease" color="green" />
      </t-space>
    </t-card>
  </t-space>
</template>

<script lang="jsx">
export default {
  data() {
    return {
      separator: () => <t-divider layout="vertical" style="height:100%" />,
    };
  },
};
<\/script>
<style>
.icon {
  font-size: 32px;
  color: var(--td-brand-color);
  background: var(--td-brand-color-light);
  border-radius: var(--td-radius-medium);
  padding: 12px;
}
</style>
`,m=`<template>
  <t-space :size="100" breakLine>
    <t-space align="center">
      <t-icon name="chart" class="icon" />
      <t-statistic title="Total Assets" :value="82.76" unit="%" trend="increase" trendPlacement="right" />
    </t-space>

    <t-space align="center">
      <t-statistic title="Total Assets" :value="52.18" unit="%" trend="decrease" />
      <t-icon name="internet" class="icon" style="border-radius: 50%" />
    </t-space>

    <t-card title="Yesterday traffic" header-bordered hover-shadow>
      <t-space :separator="separator">
        <t-statistic title="Voice duration" :value="789" unit="minute" extra="the day before 9%" />
        <t-statistic title="Total number of voice DAUs" :value="188" color="red">
          <template #extra>
            <t-space direction="vertical" :size="0">
              <span>
                the day before
                <t-icon name="arrow-up" style="color: #d54941" />
                9%
              </span>
              <span>
                last week
                <t-icon name="arrow-down" style="color: #2ba471" />
                9%
              </span>
            </t-space>
          </template>
        </t-statistic>
        <t-statistic title="Total Assets" :value="52.18" unit="%" trend="decrease" color="green" />
      </t-space>
    </t-card>
  </t-space>
</template>

<script setup lang="jsx">
import { ref } from 'vue';

const separator = ref(() => <t-divider layout="vertical" style="height:100%" />);
<\/script>
<style>
.icon {
  font-size: 32px;
  color: var(--td-brand-color);
  background: var(--td-brand-color-light);
  border-radius: var(--td-radius-medium);
  padding: 12px;
}
</style>
`;export{t as D,e as a,n as b,a as c,s as d,i as e,r as f,l as g,o as h,c as i,p as j,d as k,u as l,m};
