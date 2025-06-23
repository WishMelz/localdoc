import{Y as m,n as d}from"./index.663c003f.js";var h=`<template>
  <t-space direction="vertical">
    <t-input-number v-model="value1" :step="0.1" :max="5" autoWidth />

    <t-input-number
      v-model="decimalValue"
      :step="0.18"
      :max="5"
      :allow-input-over-limit="false"
      @change="onNumberChange"
      style="width: 200px"
    />

    <t-input-number
      v-model="value2"
      theme="row"
      :max="15"
      :min="-2"
      :disabled="false"
      :tips="tips"
      suffix="\u4E2A"
      style="width: 250px"
      @change="handleChange"
      @validate="onValidate"
      @blur="handleBlur"
      @focus="handleFocus"
      @enter="handleEnter"
    ></t-input-number>
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      // \u5982\u679C\u5E0C\u671B\u9ED8\u8BA4\u663E\u793A\u4E3A\u7A7A\uFF0C\u8BF7\u4F7F\u7528 undefined
      value1: undefined,
      value2: 100,
      decimalValue: 3.41,
      error: undefined,
    };
  },
  computed: {
    tips() {
      if (this.error === 'exceed-maximum') return 'number can not be exceed maximum';
      if (this.error === 'below-minimum') return 'number can not be below minimum';
      return undefined;
    },
  },
  methods: {
    onNumberChange(v) {
      console.log(v);
    },
    handleChange(v, ctx) {
      console.info('change', v, ctx);
    },
    onValidate(r) {
      this.error = r.error;
    },
    handleFocus(v, ctx) {
      console.info('focus', v, ctx);
    },
    handleBlur(v, ctx) {
      console.info('blur', v, ctx);
    },
    handleEnter(v, ctx) {
      console.info('enter', v, ctx);
    },
  },
};
<\/script>

<style>
/** \u6570\u5B57\u8F93\u5165\u6846\u8FC7\u77ED\u6362\u884C\u65F6\uFF0C\u5219\u901A\u8FC7 CSS \u8C03\u6574\u5BBD\u5EA6 */
.tdesign-demo__input-number-center .t-input__tips {
  width: 300px;
}
</style>
`,x=`<template>
  <t-space direction="vertical">
    <t-input-number v-model="value1" :step="0.1" :max="5" autoWidth />

    <t-input-number
      v-model="decimalValue"
      :step="0.18"
      :max="5"
      :allow-input-over-limit="false"
      @change="onNumberChange"
      style="width: 200px"
    />

    <t-input-number
      v-model="value2"
      theme="row"
      :max="15"
      :min="-2"
      :disabled="false"
      :tips="tips"
      suffix="\u4E2A"
      style="width: 250px"
      @change="handleChange"
      @validate="onValidate"
      @blur="handleBlur"
      @focus="handleFocus"
      @enter="handleEnter"
    ></t-input-number>
  </t-space>
</template>

<script setup>
import { ref, computed } from 'vue';
// \u5982\u679C\u5E0C\u671B\u9ED8\u8BA4\u663E\u793A\u4E3A\u7A7A\uFF0C\u8BF7\u4F7F\u7528 undefined
const value1 = ref(undefined);
const value2 = ref(100);
const decimalValue = ref(3.41);
const error = ref(undefined);
const tips = computed(() => {
  if (error.value === 'exceed-maximum') return 'number can not be exceed maximum';
  if (error.value === 'below-minimum') return 'number can not be below minimum';
  return undefined;
});
const onNumberChange = (v) => {
  console.log(v);
};
const handleChange = (v, ctx) => {
  console.info('change', v, ctx);
};
const onValidate = (r) => {
  error.value = r.error;
};
const handleFocus = (v, ctx) => {
  console.info('focus', v, ctx);
};
const handleBlur = (v, ctx) => {
  console.info('blur', v, ctx);
};
const handleEnter = (v, ctx) => {
  console.info('enter', v, ctx);
};
<\/script>

<style>
/** \u6570\u5B57\u8F93\u5165\u6846\u8FC7\u77ED\u6362\u884C\u65F6\uFF0C\u5219\u901A\u8FC7 CSS \u8C03\u6574\u5BBD\u5EA6 */
.tdesign-demo__input-number-center .t-input__tips {
  width: 300px;
}
</style>
`,C=`<template>
  <t-space>
    <t-input-number v-model="value1" theme="column"></t-input-number>

    <t-input-number
      v-model="value2"
      theme="column"
      align="center"
      :max="15"
      :min="-2"
      label="\u6570\u5B57"
      style="width: 150px"
    ></t-input-number>
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      value1: 3,
      value2: 3,
    };
  },
};
<\/script>
`,y=`<template>
  <t-space>
    <t-input-number v-model="value1" theme="column"></t-input-number>

    <t-input-number
      v-model="value2"
      theme="column"
      align="center"
      :max="15"
      :min="-2"
      label="\u6570\u5B57"
      style="width: 150px"
    ></t-input-number>
  </t-space>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref(3);
const value2 = ref(3);
<\/script>
`,w=`<template>
  <t-space direction="vertical">
    <t-input-number v-model="value" theme="normal" :max="15" :min="0"></t-input-number>

    <t-input-number v-model="value" theme="normal" align="right">
      <template #label><span>\u91D1\u989D\uFF1A</span></template>
      <template #suffix><span>\u5143</span></template>
    </t-input-number>

    <t-input-number v-model="value" theme="normal" align="right" label="\u673A\u5668\uFF1A" suffix="\u53F0"></t-input-number>
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      value: 3,
    };
  },
};
<\/script>
`,_=`<template>
  <t-space direction="vertical">
    <t-input-number v-model="value" theme="normal" :max="15" :min="0"></t-input-number>

    <t-input-number v-model="value" theme="normal" align="right">
      <template #label><span>\u91D1\u989D\uFF1A</span></template>
      <template #suffix><span>\u5143</span></template>
    </t-input-number>

    <t-input-number v-model="value" theme="normal" align="right" label="\u673A\u5668\uFF1A" suffix="\u53F0"></t-input-number>
  </t-space>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(3);
<\/script>
`,D=`<template>
  <div>
    <t-input-number
      v-model="value"
      :max="15"
      :min="-5"
      :step="1.2"
      :decimal-places="2"
      @change="onChange"
    ></t-input-number>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 3.2,
    };
  },
  methods: {
    onChange(ev) {
      console.info(ev);
    },
  },
};
<\/script>
`,P=`<template>
  <div>
    <t-input-number
      v-model="value"
      :max="15"
      :min="-5"
      :step="1.2"
      :decimal-places="2"
      @change="onChange"
    ></t-input-number>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(3.2);
const onChange = (ev) => {
  console.info(ev);
};
<\/script>
`,N=`<template>
  <t-space direction="vertical">
    <t-input-number
      v-model="value1"
      :max="15"
      :min="-2"
      :format="(value) => \`\${value} %\`"
      autoWidth
      @change="onChange"
    ></t-input-number>

    <!-- \u5C0F\u6570\u4F4D\u6570\u548C\u683C\u5F0F\u5316\u51FD\u6570\u7EC4\u5408\u4F7F\u7528 -->
    <t-input-number
      v-model="value2"
      :decimalPlaces="2"
      :format="(value, { fixedNumber }) => \`\${fixedNumber} %\`"
      autoWidth
      @change="onChange"
    ></t-input-number>
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      value1: 3,
      value2: 3.01,
    };
  },
  methods: {
    onChange(ev) {
      console.info(ev);
    },
  },
};
<\/script>
`,V=`<template>
  <t-space direction="vertical">
    <t-input-number
      v-model="value1"
      :max="15"
      :min="-2"
      :format="(value) => \`\${value} %\`"
      autoWidth
      @change="onChange"
    ></t-input-number>

    <!-- \u5C0F\u6570\u4F4D\u6570\u548C\u683C\u5F0F\u5316\u51FD\u6570\u7EC4\u5408\u4F7F\u7528 -->
    <t-input-number
      v-model="value2"
      :decimalPlaces="2"
      :format="(value, { fixedNumber }) => \`\${fixedNumber} %\`"
      autoWidth
      @change="onChange"
    ></t-input-number>
  </t-space>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref(3);
const value2 = ref(3.01);
const onChange = (ev) => {
  console.info(ev);
};
<\/script>
`,$=`<template>
  <div>
    <t-input-number v-model="value1" size="small" :max="15" :min="-2"></t-input-number>

    <t-input-number style="margin: 0 50px" v-model="value2" :max="15" :min="-2"></t-input-number>

    <t-input-number v-model="value3" size="large" :max="15" :min="-2"></t-input-number>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: 3,
      value2: 3,
      value3: 3,
    };
  },
  methods: {},
};
<\/script>
`,W=`<template>
  <div>
    <t-input-number v-model="value1" size="small" :max="15" :min="-2"></t-input-number>

    <t-input-number style="margin: 0 50px" v-model="value2" :max="15" :min="-2"></t-input-number>

    <t-input-number v-model="value3" size="large" :max="15" :min="-2"></t-input-number>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref(3);
const value2 = ref(3);
const value3 = ref(3);
<\/script>
`,z=`<template>
  <div class="tdesign-demo-block-column-large">
    <div>
      <t-radio-group v-model="type" variant="default-filled">
        <t-radio-button value="hide">\u9690\u85CF\u6587\u672C\u63D0\u793A</t-radio-button>
        <t-radio-button value="align-left">\u6587\u672C\u63D0\u793A\u5DE6\u5BF9\u9F50</t-radio-button>
        <t-radio-button value="align-input">\u6587\u672C\u63D0\u793A\u5BF9\u9F50\u8F93\u5165\u6846</t-radio-button>
      </t-radio-group>
    </div>
    <t-form>
      <!-- \u9690\u85CF\u6587\u672C\u63D0\u793A -->
      <template v-if="type === 'hide'">
        <t-form-item label="\u7981\u7528">
          <t-input-number v-model="value0" disabled></t-input-number>
        </t-form-item>
        <t-form-item label="\u53EA\u8BFB">
          <t-input-number v-model="value1" readonly></t-input-number>
        </t-form-item>
        <t-form-item label="\u6B63\u5E38">
          <t-input-number v-model="value2"></t-input-number>
        </t-form-item>
        <t-form-item label="\u6210\u529F">
          <t-input-number v-model="value3" status="success"></t-input-number>
        </t-form-item>
        <t-form-item label="\u8B66\u544A">
          <t-input-number v-model="value4" status="warning"></t-input-number>
        </t-form-item>
        <t-form-item label="\u9519\u8BEF">
          <t-input-number v-model="value5" status="error"></t-input-number>
        </t-form-item>
      </template>

      <!-- \u6587\u672C\u63D0\u793A\u5DE6\u5BF9\u9F50 -->
      <template v-if="type === 'align-left'">
        <t-form-item label="\u6B63\u5E38\u63D0\u793A">
          <t-input-number v-model="value6" tips="\u8FD9\u662F\u666E\u901A\u6587\u672C\u63D0\u793A"></t-input-number> </t-form-item
        ><br />
        <t-form-item label="\u6210\u529F\u63D0\u793A">
          <t-input-number v-model="value7" status="success" tips="\u6821\u9A8C\u901A\u8FC7\u6587\u672C\u63D0\u793A"></t-input-number> </t-form-item
        ><br />
        <t-form-item label="\u8B66\u544A\u63D0\u793A">
          <t-input-number v-model="value8" status="warning" tips="\u6821\u9A8C\u4E0D\u901A\u8FC7\u6587\u672C\u63D0\u793A"></t-input-number> </t-form-item
        ><br />
        <t-form-item label="\u9519\u8BEF\u63D0\u793A">
          <t-input-number
            v-model="value9"
            status="error"
            tips="\u6821\u9A8C\u5B58\u5728\u4E25\u91CD\u95EE\u9898\u6587\u672C\u63D0\u793A"
          ></t-input-number> </t-form-item
        ><br />
      </template>

      <!-- \u6587\u672C\u63D0\u793A\u5BF9\u9F50\u8F93\u5165\u6846 -->
      <template v-if="type === 'align-input'">
        <t-form-item label="\u6B63\u5E38\u63D0\u793A">
          <t-input-number v-model="value6" :inputProps="{ tips: '\u8FD9\u662F\u666E\u901A\u6587\u672C\u63D0\u793A' }"></t-input-number> </t-form-item
        ><br />
        <t-form-item label="\u6210\u529F\u63D0\u793A">
          <t-input-number
            v-model="value7"
            status="success"
            :inputProps="{ tips: '\u6821\u9A8C\u901A\u8FC7\u6587\u672C\u63D0\u793A' }"
          ></t-input-number> </t-form-item
        ><br />
        <t-form-item label="\u8B66\u544A\u63D0\u793A">
          <t-input-number
            v-model="value8"
            status="warning"
            :inputProps="{ tips: '\u6821\u9A8C\u4E0D\u901A\u8FC7\u6587\u672C\u63D0\u793A' }"
          ></t-input-number> </t-form-item
        ><br />
        <t-form-item label="\u9519\u8BEF\u63D0\u793A">
          <t-input-number
            v-model="value9"
            status="error"
            :inputProps="{ tips: '\u6821\u9A8C\u5B58\u5728\u4E25\u91CD\u95EE\u9898\u6587\u672C\u63D0\u793A' }"
          ></t-input-number> </t-form-item
        ><br />
      </template>
    </t-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: 'align-input',
      value0: 3,
      value1: 3,
      value2: 3,
      value3: 3,
      value4: 3,
      value5: 3,
      value6: 3,
      value7: 3,
      value8: 3,
      value9: 3,
    };
  },
};
<\/script>
<style scoped>
.t-input-number {
  width: 300px;
}
</style>
`,B=`<template>
  <div class="tdesign-demo-block-column-large">
    <div>
      <t-radio-group v-model="type" variant="default-filled">
        <t-radio-button value="hide">\u9690\u85CF\u6587\u672C\u63D0\u793A</t-radio-button>
        <t-radio-button value="align-left">\u6587\u672C\u63D0\u793A\u5DE6\u5BF9\u9F50</t-radio-button>
        <t-radio-button value="align-input">\u6587\u672C\u63D0\u793A\u5BF9\u9F50\u8F93\u5165\u6846</t-radio-button>
      </t-radio-group>
    </div>
    <t-form>
      <!-- \u9690\u85CF\u6587\u672C\u63D0\u793A -->
      <template v-if="type === 'hide'">
        <t-form-item label="\u7981\u7528">
          <t-input-number v-model="value0" disabled></t-input-number>
        </t-form-item>
        <t-form-item label="\u53EA\u8BFB">
          <t-input-number v-model="value1" readonly></t-input-number>
        </t-form-item>
        <t-form-item label="\u6B63\u5E38">
          <t-input-number v-model="value2"></t-input-number>
        </t-form-item>
        <t-form-item label="\u6210\u529F">
          <t-input-number v-model="value3" status="success"></t-input-number>
        </t-form-item>
        <t-form-item label="\u8B66\u544A">
          <t-input-number v-model="value4" status="warning"></t-input-number>
        </t-form-item>
        <t-form-item label="\u9519\u8BEF">
          <t-input-number v-model="value5" status="error"></t-input-number>
        </t-form-item>
      </template>

      <!-- \u6587\u672C\u63D0\u793A\u5DE6\u5BF9\u9F50 -->
      <template v-if="type === 'align-left'">
        <t-form-item label="\u6B63\u5E38\u63D0\u793A">
          <t-input-number v-model="value6" tips="\u8FD9\u662F\u666E\u901A\u6587\u672C\u63D0\u793A"></t-input-number> </t-form-item
        ><br />
        <t-form-item label="\u6210\u529F\u63D0\u793A">
          <t-input-number v-model="value7" status="success" tips="\u6821\u9A8C\u901A\u8FC7\u6587\u672C\u63D0\u793A"></t-input-number> </t-form-item
        ><br />
        <t-form-item label="\u8B66\u544A\u63D0\u793A">
          <t-input-number v-model="value8" status="warning" tips="\u6821\u9A8C\u4E0D\u901A\u8FC7\u6587\u672C\u63D0\u793A"></t-input-number> </t-form-item
        ><br />
        <t-form-item label="\u9519\u8BEF\u63D0\u793A">
          <t-input-number
            v-model="value9"
            status="error"
            tips="\u6821\u9A8C\u5B58\u5728\u4E25\u91CD\u95EE\u9898\u6587\u672C\u63D0\u793A"
          ></t-input-number> </t-form-item
        ><br />
      </template>

      <!-- \u6587\u672C\u63D0\u793A\u5BF9\u9F50\u8F93\u5165\u6846 -->
      <template v-if="type === 'align-input'">
        <t-form-item label="\u6B63\u5E38\u63D0\u793A">
          <t-input-number v-model="value6" :inputProps="{ tips: '\u8FD9\u662F\u666E\u901A\u6587\u672C\u63D0\u793A' }"></t-input-number> </t-form-item
        ><br />
        <t-form-item label="\u6210\u529F\u63D0\u793A">
          <t-input-number
            v-model="value7"
            status="success"
            :inputProps="{ tips: '\u6821\u9A8C\u901A\u8FC7\u6587\u672C\u63D0\u793A' }"
          ></t-input-number> </t-form-item
        ><br />
        <t-form-item label="\u8B66\u544A\u63D0\u793A">
          <t-input-number
            v-model="value8"
            status="warning"
            :inputProps="{ tips: '\u6821\u9A8C\u4E0D\u901A\u8FC7\u6587\u672C\u63D0\u793A' }"
          ></t-input-number> </t-form-item
        ><br />
        <t-form-item label="\u9519\u8BEF\u63D0\u793A">
          <t-input-number
            v-model="value9"
            status="error"
            :inputProps="{ tips: '\u6821\u9A8C\u5B58\u5728\u4E25\u91CD\u95EE\u9898\u6587\u672C\u63D0\u793A' }"
          ></t-input-number> </t-form-item
        ><br />
      </template>
    </t-form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const type = ref('align-input');
const value0 = ref(3);
const value1 = ref(3);
const value2 = ref(3);
const value3 = ref(3);
const value4 = ref(3);
const value5 = ref(3);
const value6 = ref(3);
const value7 = ref(3);
const value8 = ref(3);
const value9 = ref(3);
<\/script>
<style scoped>
.t-input-number {
  width: 300px;
}
</style>
`,S=`<template>
  <t-space>
    <t-space direction="vertical">
      <t-input-number :default-value="100" align="left" />
      <t-input-number :default-value="200" align="center" />
      <t-input-number :default-value="300" align="right" />
    </t-space>
    <t-space direction="vertical" style="margin-left: 100px">
      <t-input-number :default-value="100" align="left" theme="normal" />
      <t-input-number :default-value="200" align="center" theme="normal" />
      <t-input-number :default-value="300" align="right" theme="normal" />
    </t-space>
  </t-space>
</template>
`,E=`<template>
  <t-space>
    <t-space direction="vertical">
      <t-input-number :default-value="100" align="left" />
      <t-input-number :default-value="200" align="center" />
      <t-input-number :default-value="300" align="right" />
    </t-space>
    <t-space direction="vertical" style="margin-left: 100px">
      <t-input-number :default-value="100" align="left" theme="normal" />
      <t-input-number :default-value="200" align="center" theme="normal" />
      <t-input-number :default-value="300" align="right" theme="normal" />
    </t-space>
  </t-space>
</template>
`,F=`<template>
  <div>
    <t-input-number v-model="value" :min="0" :autoWidth="true"></t-input-number>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 3,
    };
  },
};
<\/script>
`,k=`<template>
  <div>
    <t-input-number v-model="value" :min="0" :autoWidth="true"></t-input-number>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(3);
<\/script>
`,L=`<template>
  <t-space direction="vertical">
    <t-input-number v-model="value1" largeNumber :decimalPlaces="2" step="1" style="width: 300px"></t-input-number>

    <!-- format \u5B58\u5728\u65F6\uFF0CdecimalPlaces \u5931\u6548 -->
    <t-input-number v-model="value3" large-number step="100" :format="format" style="width: 300px"></t-input-number>

    <t-input-number v-model="value2" largeNumber step="0.888" style="width: 300px"></t-input-number>
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      value1: '19999999999999999',
      value2: '0.8975527383412673418',
      value3: '19999999999999999.977',
    };
  },
  methods: {
    format(val) {
      return val.replace(/\\d{1,3}(?=(\\d{3})+(\\.|$))/g, '$&,');
    },
  },
};
<\/script>
`,j=`<template>
  <t-space direction="vertical">
    <t-input-number v-model="value1" largeNumber :decimalPlaces="2" step="1" style="width: 300px"></t-input-number>

    <!-- format \u5B58\u5728\u65F6\uFF0CdecimalPlaces \u5931\u6548 -->
    <t-input-number v-model="value3" large-number step="100" :format="format" style="width: 300px"></t-input-number>

    <t-input-number v-model="value2" largeNumber step="0.888" style="width: 300px"></t-input-number>
  </t-space>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref('19999999999999999');
const value2 = ref('0.8975527383412673418');
const value3 = ref('19999999999999999.977');
const format = (val) => val.replace(/\\d{1,3}(?=(\\d{3})+(\\.|$))/g, '$&,');
<\/script>
`,c=[{name:"autoWidth",type:"Boolean",defaultValue:!1,options:[]},{name:"disabled",type:"Boolean",defaultValue:!1,options:[]},{name:"readonly",type:"Boolean",defaultValue:!1,options:[]},{name:"largeNumber",type:"Boolean",defaultValue:!1,options:[]},{name:"size",type:"enum",defaultValue:"medium",options:[{label:"small",value:"small"},{label:"medium",value:"medium"},{label:"large",value:"large"}]},{name:"theme",type:"enum",defaultValue:"row",options:[{label:"column",value:"column"},{label:"row",value:"row"},{label:"normal",value:"normal"}]}];const i={};i.setup=(n,e)=>{const t=m(c),a=[{label:"inputNumber",value:"inputNumber"}],u={inputNumber:'<t-input-number v-bind="configProps"/>'},l=m(`<template>${u[a[0].value].trim()}</template>`);function s(v){l.value=`<template>${u[v].trim()}</template>`}return{configList:t,panelList:a,usageCode:l,onPanelChange:s}};var o=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("base-usage",{attrs:{code:n.usageCode,"config-list":n.configList,"panel-list":n.panelList},on:{PanelChange:n.onPanelChange},scopedSlots:n._u([{key:"inputNumber",fn:function(a){var u=a.configProps;return[t("t-input-number",n._b({},"t-input-number",u,!1))]}}])})},b=[];o._withStripped=!0;const r={};var p=d(i,o,b,!1,f,null,null,null);function f(n){for(let e in r)this[e]=r[e]}p.options.__file="../src/input-number/_usage/index.vue";var M=function(){return p.exports}();export{h as D,M as U,x as a,C as b,y as c,w as d,_ as e,D as f,P as g,N as h,V as i,$ as j,W as k,z as l,B as m,S as n,E as o,F as p,k as q,L as r,j as s};
