import{D as r,g as s,h as d,i as c,j as p}from"./custom-popup.0da87e1e.js";import{P as v}from"./prism.a27ccf6a.js";import{n as u}from"./index.663c003f.js";var m=`<template>
  <t-row justify="center">
    <t-button @click="handleClick">\u65B0\u624B\u5F15\u5BFC</t-button>
    <t-drawer :visible.sync="visible" header="\u6F14\u793A\u65B0\u624B\u5F15\u5BFC" size="60%" :show-overlay="false" destroy-on-close>
      <template #footer>
        <t-button @click="visible = false"> \u5173\u95ED\u62BD\u5C49 </t-button>
      </template>
      <div class="guide-container">
        <div class="main-title">
          <div class="title-major">Guide \u7528\u6237\u5F15\u5BFC</div>
          <div class="title-sub">\u6309\u94AE\u7528\u4E8E\u5F00\u542F\u4E00\u4E2A\u95ED\u73AF\u7684\u64CD\u4F5C\u4EFB\u52A1\uFF0C\u5982\u201C\u5220\u9664\u201D\u5BF9\u8C61\u3001\u201C\u8D2D\u4E70\u201D\u5546\u54C1\u7B49\u3002</div>
        </div>
        <div class="field label-field">
          <div class="label">Label</div>
          <t-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" />
        </div>
        <div class="field">
          <div class="label">Label</div>
          <t-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" />
        </div>
        <t-row class="action">
          <t-button>\u786E\u5B9A</t-button>
          <t-button theme="default" variant="base">\u53D6\u6D88</t-button>
        </t-row>
      </div>

      <t-guide
        :current.sync="current"
        :steps="steps"
        :highlightPadding="32"
        @change="handleChange"
        @prev-step-click="handlePrevStepClick"
        @next-step-click="handleNextStepClick"
        @finish="handleFinish"
        @skip="handleSkip"
      />
    </t-drawer>
  </t-row>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      current: -1,
      steps: [
        {
          element: '.main-title',
          title: '\u65B0\u624B\u5F15\u5BFC\u6807\u9898',
          body: '\u65B0\u624B\u5F15\u5BFC\u7684\u8BF4\u660E\u6587\u6848',
          placement: 'bottom-right',
        },
        {
          element: '.label-field',
          title: '\u65B0\u624B\u5F15\u5BFC\u6807\u9898',
          body: '\u65B0\u624B\u5F15\u5BFC\u7684\u8BF4\u660E\u6587\u6848',
          placement: 'bottom',
        },
        {
          element: '.action',
          title: '\u65B0\u624B\u5F15\u5BFC\u6807\u9898',
          body: '\u65B0\u624B\u5F15\u5BFC\u7684\u8BF4\u660E\u6587\u6848',
          placement: 'right',
        },
      ],
    };
  },
  methods: {
    handleClick() {
      this.visible = true;
      setTimeout(() => {
        this.current = 0;
      }, 1000);
    },
    handleChange(current, { e, total }) {
      console.log(current, e, total);
    },
    handlePrevStepClick({
      e, prev, current, total,
    }) {
      console.log(e, prev, current, total);
    },
    handleNextStepClick({
      e, next, current, total,
    }) {
      console.log(e, next, current, total);
    },
    handleFinish({ e, current, total }) {
      this.visible = false;
      console.log(e, current, total);
    },
    handleSkip({ e, current, total }) {
      this.visible = false;
      console.log(e, current, total);
    },
  },
};
<\/script>

<style scoped>
.guide-container {
  max-width: 600px;
  padding: 40px;
}

.title-major {
  color: var(--td-text-color-primary);
  font-size: 36px;
  font-weight: 700;
  line-height: 44px;
}

.title-sub {
  margin-top: 8px;
  color: var(--td-text-color-secondary);
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
}

.field {
  margin-top: 50px;
}

.label {
  margin-bottom: 8px;
  color: var(--td-text-color-primary);
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
}

.action {
  display: inline-flex;
  margin-top: 50px;
}

.action button:first-child {
  margin-right: 10px;
}
</style>
`,h=`<template>
  <t-row justify="center">
    <t-button @click="handleClick">\u65B0\u624B\u5F15\u5BFC</t-button>
    <t-drawer :visible.sync="visible" header="\u6F14\u793A\u65B0\u624B\u5F15\u5BFC" size="60%" :show-overlay="false" destroy-on-close>
      <template #footer>
        <t-button @click="visible = false"> \u5173\u95ED\u62BD\u5C49 </t-button>
      </template>
      <div class="guide-container">
        <div class="main-title">
          <div class="title-major">Guide \u7528\u6237\u5F15\u5BFC</div>
          <div class="title-sub">\u6309\u94AE\u7528\u4E8E\u5F00\u542F\u4E00\u4E2A\u95ED\u73AF\u7684\u64CD\u4F5C\u4EFB\u52A1\uFF0C\u5982\u201C\u5220\u9664\u201D\u5BF9\u8C61\u3001\u201C\u8D2D\u4E70\u201D\u5546\u54C1\u7B49\u3002</div>
        </div>
        <div class="field label-field">
          <div class="label">Label</div>
          <t-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" />
        </div>
        <div class="field">
          <div class="label">Label</div>
          <t-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" />
        </div>
        <t-row class="action">
          <t-button>\u786E\u5B9A</t-button>
          <t-button theme="default" variant="base">\u53D6\u6D88</t-button>
        </t-row>
      </div>

      <t-guide
        :current.sync="current"
        :steps="steps"
        :highlightPadding="32"
        @change="handleChange"
        @prev-step-click="handlePrevStepClick"
        @next-step-click="handleNextStepClick"
        @finish="handleFinish"
        @skip="handleSkip"
      />
    </t-drawer>
  </t-row>
</template>

<script setup>
import { ref } from 'vue';

const visible = ref(false);
const current = ref(-1);
const steps = ref([
  {
    element: '.main-title',
    title: '\u65B0\u624B\u5F15\u5BFC\u6807\u9898',
    body: '\u65B0\u624B\u5F15\u5BFC\u7684\u8BF4\u660E\u6587\u6848',
    placement: 'bottom-right',
  },
  {
    element: '.label-field',
    title: '\u65B0\u624B\u5F15\u5BFC\u6807\u9898',
    body: '\u65B0\u624B\u5F15\u5BFC\u7684\u8BF4\u660E\u6587\u6848',
    placement: 'bottom',
  },
  {
    element: '.action',
    title: '\u65B0\u624B\u5F15\u5BFC\u6807\u9898',
    body: '\u65B0\u624B\u5F15\u5BFC\u7684\u8BF4\u660E\u6587\u6848',
    placement: 'right',
  },
]);
const handleClick = () => {
  visible.value = true;
  setTimeout(() => {
    current.value = 0;
  }, 1000);
};
const handleChange = (current, { e, total }) => {
  console.log(current, e, total);
};
const handlePrevStepClick = ({
  e, prev, current, total,
}) => {
  console.log(e, prev, current, total);
};
const handleNextStepClick = ({
  e, next, current, total,
}) => {
  console.log(e, next, current, total);
};
const handleFinish = ({ e, current, total }) => {
  visible.value = false;
  console.log(e, current, total);
};
const handleSkip = ({ e, current, total }) => {
  visible.value = false;
  console.log(e, current, total);
};
<\/script>

<style scoped>
.guide-container {
  max-width: 600px;
  padding: 40px;
}

.title-major {
  color: var(--td-text-color-primary);
  font-size: 36px;
  font-weight: 700;
  line-height: 44px;
}

.title-sub {
  margin-top: 8px;
  color: var(--td-text-color-secondary);
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
}

.field {
  margin-top: 50px;
}

.label {
  margin-bottom: 8px;
  color: var(--td-text-color-primary);
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
}

.action {
  display: inline-flex;
  margin-top: 50px;
}

.action button:first-child {
  margin-right: 10px;
}
</style>
`,g=`<template>
  <t-row justify="center">
    <t-button @click="handleClick">\u65B0\u624B\u5F15\u5BFC</t-button>
    <t-drawer :visible.sync="visible" header="\u6F14\u793A\u65B0\u624B\u5F15\u5BFC" size="60%" :show-overlay="false" destroy-on-close>
      <template #footer>
        <t-button @click="visible = false"> \u5173\u95ED\u62BD\u5C49 </t-button>
      </template>
      <div class="guide-container">
        <div class="main-title">
          <div class="title-major">Guide \u7528\u6237\u5F15\u5BFC</div>
          <div class="title-sub">\u6309\u94AE\u7528\u4E8E\u5F00\u542F\u4E00\u4E2A\u95ED\u73AF\u7684\u64CD\u4F5C\u4EFB\u52A1\uFF0C\u5982\u201C\u5220\u9664\u201D\u5BF9\u8C61\u3001\u201C\u8D2D\u4E70\u201D\u5546\u54C1\u7B49\u3002</div>
        </div>
        <div class="field label-field">
          <div class="label">Label</div>
          <t-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" />
        </div>
        <div class="field">
          <div class="label">Label</div>
          <t-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" />
        </div>
        <t-row class="action">
          <t-button>\u786E\u5B9A</t-button>
          <t-button theme="default" variant="base">\u53D6\u6D88</t-button>
        </t-row>
      </div>

      <t-guide
        :current.sync="current"
        :steps="steps"
        :show-overlay="false"
        @change="handleChange"
        @prev-step-click="handlePrevStepClick"
        @next-step-click="handleNextStepClick"
        @finish="handleFinish"
        @skip="handleSkip"
      />
    </t-drawer>
  </t-row>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      current: -1,
      steps: [
        {
          element: '.main-title',
          title: '\u65B0\u624B\u5F15\u5BFC\u6807\u9898',
          body: '\u65B0\u624B\u5F15\u5BFC\u7684\u8BF4\u660E\u6587\u6848',
          placement: 'bottom-right',
        },
        {
          element: '.label-field',
          title: '\u65B0\u624B\u5F15\u5BFC\u6807\u9898',
          body: '\u65B0\u624B\u5F15\u5BFC\u7684\u8BF4\u660E\u6587\u6848',
          placement: 'bottom',
        },
        {
          element: '.action',
          title: '\u65B0\u624B\u5F15\u5BFC\u6807\u9898',
          body: '\u65B0\u624B\u5F15\u5BFC\u7684\u8BF4\u660E\u6587\u6848',
          placement: 'right',
        },
      ],
    };
  },
  methods: {
    handleClick() {
      this.visible = true;
      setTimeout(() => {
        this.current = 0;
      }, 1000);
    },

    handleChange(current, { e, total }) {
      console.log(current, e, total);
    },

    handlePrevStepClick({
      e, prev, current, total,
    }) {
      console.log(e, prev, current, total);
    },

    handleNextStepClick({
      e, next, current, total,
    }) {
      console.log(e, next, current, total);
    },

    handleFinish({ e, current, total }) {
      this.visible = false;
      console.log(e, current, total);
    },

    handleSkip({ e, current, total }) {
      this.visible = false;
      console.log(e, current, total);
    },
  },
};
<\/script>

<style scoped>
.guide-container {
  max-width: 600px;
  padding: 40px;
}

.title-major {
  color: var(--td-text-color-primary);
  font-size: 36px;
  font-weight: 700;
  line-height: 44px;
}

.title-sub {
  margin-top: 8px;
  color: var(--td-text-color-secondary);
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
}

.field {
  margin-top: 50px;
}

.label {
  margin-bottom: 8px;
  color: var(--td-text-color-primary);
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
}

.action {
  display: inline-flex;
  margin-top: 50px;
}

.action button:first-child {
  margin-right: 10px;
}
</style>
`,b=`<template>
  <t-row justify="center">
    <t-button @click="handleClick">\u65B0\u624B\u5F15\u5BFC</t-button>
    <t-drawer :visible.sync="visible" header="\u6F14\u793A\u65B0\u624B\u5F15\u5BFC" size="60%" :show-overlay="false" destroy-on-close>
      <template #footer>
        <t-button @click="visible = false"> \u5173\u95ED\u62BD\u5C49 </t-button>
      </template>
      <div class="guide-container">
        <div class="main-title">
          <div class="title-major">Guide \u7528\u6237\u5F15\u5BFC</div>
          <div class="title-sub">\u6309\u94AE\u7528\u4E8E\u5F00\u542F\u4E00\u4E2A\u95ED\u73AF\u7684\u64CD\u4F5C\u4EFB\u52A1\uFF0C\u5982\u201C\u5220\u9664\u201D\u5BF9\u8C61\u3001\u201C\u8D2D\u4E70\u201D\u5546\u54C1\u7B49\u3002</div>
        </div>
        <div class="field label-field">
          <div class="label">Label</div>
          <t-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" />
        </div>
        <div class="field">
          <div class="label">Label</div>
          <t-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" />
        </div>
        <t-row class="action">
          <t-button>\u786E\u5B9A</t-button>
          <t-button theme="default" variant="base">\u53D6\u6D88</t-button>
        </t-row>
      </div>

      <t-guide
        :current.sync="current"
        :steps="steps"
        :show-overlay="false"
        @change="handleChange"
        @prev-step-click="handlePrevStepClick"
        @next-step-click="handleNextStepClick"
        @finish="handleFinish"
        @skip="handleSkip"
      />
    </t-drawer>
  </t-row>
</template>

<script setup>
import { ref } from 'vue';

const visible = ref(false);
const current = ref(-1);
const steps = ref([
  {
    element: '.main-title',
    title: '\u65B0\u624B\u5F15\u5BFC\u6807\u9898',
    body: '\u65B0\u624B\u5F15\u5BFC\u7684\u8BF4\u660E\u6587\u6848',
    placement: 'bottom-right',
  },
  {
    element: '.label-field',
    title: '\u65B0\u624B\u5F15\u5BFC\u6807\u9898',
    body: '\u65B0\u624B\u5F15\u5BFC\u7684\u8BF4\u660E\u6587\u6848',
    placement: 'bottom',
  },
  {
    element: '.action',
    title: '\u65B0\u624B\u5F15\u5BFC\u6807\u9898',
    body: '\u65B0\u624B\u5F15\u5BFC\u7684\u8BF4\u660E\u6587\u6848',
    placement: 'right',
  },
]);
const handleClick = () => {
  visible.value = true;
  setTimeout(() => {
    current.value = 0;
  }, 1000);
};
const handleChange = (current, { e, total }) => {
  console.log(current, e, total);
};
const handlePrevStepClick = ({
  e, prev, current, total,
}) => {
  console.log(e, prev, current, total);
};
const handleNextStepClick = ({
  e, next, current, total,
}) => {
  console.log(e, next, current, total);
};
const handleFinish = ({ e, current, total }) => {
  visible.value = false;
  console.log(e, current, total);
};
const handleSkip = ({ e, current, total }) => {
  visible.value = false;
  console.log(e, current, total);
};
<\/script>

<style scoped>
.guide-container {
  max-width: 600px;
  padding: 40px;
}

.title-major {
  color: var(--td-text-color-primary);
  font-size: 36px;
  font-weight: 700;
  line-height: 44px;
}

.title-sub {
  margin-top: 8px;
  color: var(--td-text-color-secondary);
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
}

.field {
  margin-top: 50px;
}

.label {
  margin-bottom: 8px;
  color: var(--td-text-color-primary);
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
}

.action {
  display: inline-flex;
  margin-top: 50px;
}

.action button:first-child {
  margin-right: 10px;
}
</style>
`,_=`<template>
  <t-row justify="center">
    <t-button @click="handleClick">\u65B0\u624B\u5F15\u5BFC</t-button>
    <t-drawer :visible.sync="visible" header="\u6F14\u793A\u65B0\u624B\u5F15\u5BFC" size="60%" :show-overlay="false" destroy-on-close>
      <template #footer>
        <t-button @click="visible = false"> \u5173\u95ED\u62BD\u5C49 </t-button>
      </template>
      <div class="guide-container">
        <div class="main-title">
          <div class="title-major">Guide \u7528\u6237\u5F15\u5BFC</div>
          <div class="title-sub">\u6309\u94AE\u7528\u4E8E\u5F00\u542F\u4E00\u4E2A\u95ED\u73AF\u7684\u64CD\u4F5C\u4EFB\u52A1\uFF0C\u5982\u201C\u5220\u9664\u201D\u5BF9\u8C61\u3001\u201C\u8D2D\u4E70\u201D\u5546\u54C1\u7B49\u3002</div>
        </div>
        <div class="field label-field">
          <div class="label">Label</div>
          <t-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" />
        </div>
        <div class="field">
          <div class="label">Label</div>
          <t-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" />
        </div>
        <t-row class="action">
          <t-button>\u786E\u5B9A</t-button>
          <t-button theme="default" variant="base">\u53D6\u6D88</t-button>
        </t-row>
      </div>

      <t-guide
        :current.sync="current"
        :steps="steps"
        mode="dialog"
        @change="handleChange"
        @prev-step-click="handlePrevStepClick"
        @next-step-click="handleNextStepClick"
        @finish="handleFinish"
        @skip="handleSkip"
      />
    </t-drawer>
  </t-row>
</template>

<script>
import DialogBody from './dialog-body.vue';

export default {
  data() {
    return {
      visible: false,
      current: -1,
      steps: [
        {
          element: '.main-title',
          title: '\u65B0\u624B\u5F15\u5BFC\u6807\u9898',
          body: DialogBody,
          placement: 'bottom-right',
        },
        {
          element: '.label-field',
          title: '\u65B0\u624B\u5F15\u5BFC\u6807\u9898',
          body: DialogBody,
          placement: 'bottom',
        },
        {
          element: '.action',
          title: '\u65B0\u624B\u5F15\u5BFC\u6807\u9898',
          body: DialogBody,
          placement: 'right',
        },
      ],
    };
  },
  methods: {
    handleClick() {
      this.visible = true;
      setTimeout(() => {
        this.current = 0;
      }, 1000);
    },

    handleChange(current, { e, total }) {
      console.log(current, e, total);
    },

    handlePrevStepClick({
      e, prev, current, total,
    }) {
      console.log(e, prev, current, total);
    },

    handleNextStepClick({
      e, next, current, total,
    }) {
      console.log(e, next, current, total);
    },

    handleFinish({ e, current, total }) {
      this.visible = false;
      console.log(e, current, total);
    },

    handleSkip({ e, current, total }) {
      this.visible = false;
      console.log(e, current, total);
    },
  },
};
<\/script>

<style scoped>
.guide-container {
  max-width: 600px;
  padding: 40px;
}

.title-major {
  color: var(--td-text-color-primary);
  font-size: 36px;
  font-weight: 700;
  line-height: 44px;
}

.title-sub {
  margin-top: 8px;
  color: var(--td-text-color-secondary);
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
}

.field {
  margin-top: 50px;
}

.label {
  margin-bottom: 8px;
  color: var(--td-text-color-primary);
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
}

.action {
  display: inline-flex;
  margin-top: 50px;
}

.action button:first-child {
  margin-right: 10px;
}
</style>
`,f=`<template>
  <t-row justify="center">
    <t-button @click="handleClick">\u65B0\u624B\u5F15\u5BFC</t-button>
    <t-drawer :visible.sync="visible" header="\u6F14\u793A\u65B0\u624B\u5F15\u5BFC" size="60%" :show-overlay="false" destroy-on-close>
      <template #footer>
        <t-button @click="visible = false"> \u5173\u95ED\u62BD\u5C49 </t-button>
      </template>
      <div class="guide-container">
        <div class="main-title">
          <div class="title-major">Guide \u7528\u6237\u5F15\u5BFC</div>
          <div class="title-sub">\u6309\u94AE\u7528\u4E8E\u5F00\u542F\u4E00\u4E2A\u95ED\u73AF\u7684\u64CD\u4F5C\u4EFB\u52A1\uFF0C\u5982\u201C\u5220\u9664\u201D\u5BF9\u8C61\u3001\u201C\u8D2D\u4E70\u201D\u5546\u54C1\u7B49\u3002</div>
        </div>
        <div class="field label-field">
          <div class="label">Label</div>
          <t-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" />
        </div>
        <div class="field">
          <div class="label">Label</div>
          <t-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" />
        </div>
        <t-row class="action">
          <t-button>\u786E\u5B9A</t-button>
          <t-button theme="default" variant="base">\u53D6\u6D88</t-button>
        </t-row>
      </div>

      <t-guide
        :current.sync="current"
        :steps="steps"
        mode="dialog"
        @change="handleChange"
        @prev-step-click="handlePrevStepClick"
        @next-step-click="handleNextStepClick"
        @finish="handleFinish"
        @skip="handleSkip"
      />
    </t-drawer>
  </t-row>
</template>

<script setup>
import { ref } from 'vue';
import DialogBody from './dialog-body.vue';

const visible = ref(false);
const current = ref(-1);
const steps = ref([
  {
    element: '.main-title',
    title: '\u65B0\u624B\u5F15\u5BFC\u6807\u9898',
    body: DialogBody,
    placement: 'bottom-right',
  },
  {
    element: '.label-field',
    title: '\u65B0\u624B\u5F15\u5BFC\u6807\u9898',
    body: DialogBody,
    placement: 'bottom',
  },
  {
    element: '.action',
    title: '\u65B0\u624B\u5F15\u5BFC\u6807\u9898',
    body: DialogBody,
    placement: 'right',
  },
]);
const handleClick = () => {
  visible.value = true;
  setTimeout(() => {
    current.value = 0;
  }, 1000);
};
const handleChange = (current, { e, total }) => {
  console.log(current, e, total);
};
const handlePrevStepClick = ({
  e, prev, current, total,
}) => {
  console.log(e, prev, current, total);
};
const handleNextStepClick = ({
  e, next, current, total,
}) => {
  console.log(e, next, current, total);
};
const handleFinish = ({ e, current, total }) => {
  visible.value = false;
  console.log(e, current, total);
};
const handleSkip = ({ e, current, total }) => {
  visible.value = false;
  console.log(e, current, total);
};
<\/script>

<style scoped>
.guide-container {
  max-width: 600px;
  padding: 40px;
}

.title-major {
  color: var(--td-text-color-primary);
  font-size: 36px;
  font-weight: 700;
  line-height: 44px;
}

.title-sub {
  margin-top: 8px;
  color: var(--td-text-color-secondary);
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
}

.field {
  margin-top: 50px;
}

.label {
  margin-bottom: 8px;
  color: var(--td-text-color-primary);
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
}

.action {
  display: inline-flex;
  margin-top: 50px;
}

.action button:first-child {
  margin-right: 10px;
}
</style>
`,x=`<template>
  <t-row justify="center">
    <t-button @click="handleClick">\u65B0\u624B\u5F15\u5BFC</t-button>
    <t-drawer :visible.sync="visible" header="\u6F14\u793A\u65B0\u624B\u5F15\u5BFC" size="60%" :show-overlay="false" destroy-on-close>
      <template #footer>
        <t-button @click="visible = false"> \u5173\u95ED\u62BD\u5C49 </t-button>
      </template>
      <div class="guide-container">
        <div class="main-title">
          <div class="title-major">Guide \u7528\u6237\u5F15\u5BFC</div>
          <div class="title-sub">\u6309\u94AE\u7528\u4E8E\u5F00\u542F\u4E00\u4E2A\u95ED\u73AF\u7684\u64CD\u4F5C\u4EFB\u52A1\uFF0C\u5982\u201C\u5220\u9664\u201D\u5BF9\u8C61\u3001\u201C\u8D2D\u4E70\u201D\u5546\u54C1\u7B49\u3002</div>
        </div>
        <div class="field label-field">
          <div class="label">Label</div>
          <t-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" />
        </div>
        <div class="field">
          <div class="label">Label</div>
          <t-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" />
        </div>
        <t-row class="action">
          <t-button>\u786E\u5B9A</t-button>
          <t-button theme="default" variant="base">\u53D6\u6D88</t-button>
        </t-row>
      </div>

      <t-guide
        :current.sync="current"
        :steps="steps"
        @change="handleChange"
        @prev-step-click="handlePrevStepClick"
        @next-step-click="handleNextStepClick"
        @finish="handleFinish"
        @skip="handleSkip"
      />
    </t-drawer>
  </t-row>
</template>

<script>
import DialogBody from './dialog-body.vue';

export default {
  data() {
    return {
      visible: false,
      current: -1,
      steps: [
        {
          element: '.main-title',
          title: '\u65B0\u624B\u5F15\u5BFC\u6807\u9898',
          body: '\u65B0\u624B\u5F15\u5BFC\u7684\u8BF4\u660E\u6587\u6848',
          placement: 'bottom-right',
        },
        {
          element: '.label-field',
          title: '\u65B0\u624B\u5F15\u5BFC\u6807\u9898',
          body: DialogBody,
          placement: 'bottom',
          mode: 'dialog',
        },
        {
          element: '.action',
          title: '\u65B0\u624B\u5F15\u5BFC\u6807\u9898',
          body: '\u65B0\u624B\u5F15\u5BFC\u7684\u8BF4\u660E\u6587\u6848',
          placement: 'right',
        },
      ],
    };
  },
  methods: {
    handleClick() {
      this.visible = true;
      setTimeout(() => {
        this.current = 0;
      }, 800);
    },

    handleChange(current, { e, total }) {
      console.log(current, e, total);
    },

    handlePrevStepClick({
      e, prev, current, total,
    }) {
      console.log(e, prev, current, total);
    },

    handleNextStepClick({
      e, next, current, total,
    }) {
      console.log(e, next, current, total);
    },

    handleFinish({ e, current, total }) {
      this.visible = false;
      console.log(e, current, total);
    },

    handleSkip({ e, current, total }) {
      this.visible = false;
      console.log(e, current, total);
    },
  },
};
<\/script>

<style scoped>
.guide-container {
  max-width: 600px;
  padding: 40px;
}

.title-major {
  color: var(--td-text-color-primary);
  font-size: 36px;
  font-weight: 700;
  line-height: 44px;
}

.title-sub {
  margin-top: 8px;
  color: var(--td-text-color-secondary);
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
}

.field {
  margin-top: 50px;
}

.label {
  margin-bottom: 8px;
  color: var(--td-text-color-primary);
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
}

.action {
  display: inline-flex;
  margin-top: 50px;
}

.action button:first-child {
  margin-right: 10px;
}
</style>
`,y=`<template>
  <t-row justify="center">
    <t-button @click="handleClick">\u65B0\u624B\u5F15\u5BFC</t-button>
    <t-drawer :visible.sync="visible" header="\u6F14\u793A\u65B0\u624B\u5F15\u5BFC" size="60%" :show-overlay="false" destroy-on-close>
      <template #footer>
        <t-button @click="visible = false"> \u5173\u95ED\u62BD\u5C49 </t-button>
      </template>
      <div class="guide-container">
        <div class="main-title">
          <div class="title-major">Guide \u7528\u6237\u5F15\u5BFC</div>
          <div class="title-sub">\u6309\u94AE\u7528\u4E8E\u5F00\u542F\u4E00\u4E2A\u95ED\u73AF\u7684\u64CD\u4F5C\u4EFB\u52A1\uFF0C\u5982\u201C\u5220\u9664\u201D\u5BF9\u8C61\u3001\u201C\u8D2D\u4E70\u201D\u5546\u54C1\u7B49\u3002</div>
        </div>
        <div class="field label-field">
          <div class="label">Label</div>
          <t-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" />
        </div>
        <div class="field">
          <div class="label">Label</div>
          <t-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" />
        </div>
        <t-row class="action">
          <t-button>\u786E\u5B9A</t-button>
          <t-button theme="default" variant="base">\u53D6\u6D88</t-button>
        </t-row>
      </div>

      <t-guide
        :current.sync="current"
        :steps="steps"
        @change="handleChange"
        @prev-step-click="handlePrevStepClick"
        @next-step-click="handleNextStepClick"
        @finish="handleFinish"
        @skip="handleSkip"
      />
    </t-drawer>
  </t-row>
</template>

<script setup>
import { ref } from 'vue';
import DialogBody from './dialog-body.vue';

const visible = ref(false);
const current = ref(-1);
const steps = ref([
  {
    element: '.main-title',
    title: '\u65B0\u624B\u5F15\u5BFC\u6807\u9898',
    body: '\u65B0\u624B\u5F15\u5BFC\u7684\u8BF4\u660E\u6587\u6848',
    placement: 'bottom-right',
  },
  {
    element: '.label-field',
    title: '\u65B0\u624B\u5F15\u5BFC\u6807\u9898',
    body: DialogBody,
    placement: 'bottom',
    mode: 'dialog',
  },
  {
    element: '.action',
    title: '\u65B0\u624B\u5F15\u5BFC\u6807\u9898',
    body: '\u65B0\u624B\u5F15\u5BFC\u7684\u8BF4\u660E\u6587\u6848',
    placement: 'right',
  },
]);
const handleClick = () => {
  visible.value = true;
  setTimeout(() => {
    current.value = 0;
  }, 800);
};
const handleChange = (current, { e, total }) => {
  console.log(current, e, total);
};
const handlePrevStepClick = ({
  e, prev, current, total,
}) => {
  console.log(e, prev, current, total);
};
const handleNextStepClick = ({
  e, next, current, total,
}) => {
  console.log(e, next, current, total);
};
const handleFinish = ({ e, current, total }) => {
  visible.value = false;
  console.log(e, current, total);
};
const handleSkip = ({ e, current, total }) => {
  visible.value = false;
  console.log(e, current, total);
};
<\/script>

<style scoped>
.guide-container {
  max-width: 600px;
  padding: 40px;
}

.title-major {
  color: var(--td-text-color-primary);
  font-size: 36px;
  font-weight: 700;
  line-height: 44px;
}

.title-sub {
  margin-top: 8px;
  color: var(--td-text-color-secondary);
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
}

.field {
  margin-top: 50px;
}

.label {
  margin-bottom: 8px;
  color: var(--td-text-color-primary);
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
}

.action {
  display: inline-flex;
  margin-top: 50px;
}

.action button:first-child {
  margin-right: 10px;
}
</style>
`,C=`<template>
  <t-row justify="center">
    <t-button @click="handleClick">\u65B0\u624B\u5F15\u5BFC</t-button>
    <t-drawer :visible.sync="visible" header="\u6F14\u793A\u65B0\u624B\u5F15\u5BFC" size="60%" :show-overlay="false" destroy-on-close>
      <template #footer>
        <t-button @click="visible = false"> \u5173\u95ED\u62BD\u5C49 </t-button>
      </template>
      <div class="guide-container">
        <div class="main-title-popup">
          <div class="title-major">Guide \u7528\u6237\u5F15\u5BFC</div>
          <div class="title-sub">\u6309\u94AE\u7528\u4E8E\u5F00\u542F\u4E00\u4E2A\u95ED\u73AF\u7684\u64CD\u4F5C\u4EFB\u52A1\uFF0C\u5982\u201C\u5220\u9664\u201D\u5BF9\u8C61\u3001\u201C\u8D2D\u4E70\u201D\u5546\u54C1\u7B49\u3002</div>
        </div>
        <div class="field label-field-1">
          <div class="label">Label</div>
          <t-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" />
        </div>
        <div class="field label-field-2">
          <div class="label">Label</div>
          <t-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" />
        </div>
        <t-row class="action">
          <t-button>\u786E\u5B9A</t-button>
          <t-button theme="default" variant="base">\u53D6\u6D88</t-button>
        </t-row>
      </div>

      <t-guide
        :current.sync="current"
        :steps="steps"
        @change="handleChange"
        @prev-step-click="handlePrevStepClick"
        @next-step-click="handleNextStepClick"
        @finish="handleFinish"
        @skip="handleSkip"
      />
    </t-drawer>
  </t-row>
</template>

<script lang="jsx">
import MyPopup from './my-popup.vue';

export default {
  data() {
    return {
      visible: false,
      current: -1,
      steps: [
        {
          element: '.main-title-popup',
          title: '\u65B0\u624B\u5F15\u5BFC\u6807\u9898',
          description: '\u65B0\u624B\u5F15\u5BFC\u7684\u8BF4\u660E\u6587\u6848',
          placement: 'bottom-right',
          content: MyPopup,
        },
        {
          element: '.label-field-1',
          title: '\u65B0\u624B\u5F15\u5BFC\u6807\u9898',
          description: '\u65B0\u624B\u5F15\u5BFC\u7684\u8BF4\u660E\u6587\u6848',
          placement: 'bottom',
          content: MyPopup,
        },
        {
          element: '.label-field-2',
          title: '\u65B0\u624B\u5F15\u5BFC\u6807\u9898',
          description: '\u65B0\u624B\u5F15\u5BFC\u7684\u8BF4\u660E\u6587\u6848',
          placement: 'bottom-left',
          content: MyPopup,
        },
      ],
    };
  },
  methods: {
    handleClick() {
      this.visible = true;
      setTimeout(() => {
        this.current = 0;
      }, 1000);
    },
    handleChange(current, { e, total }) {
      console.log(current, e, total);
    },

    handlePrevStepClick({
      e, prev, current, total,
    }) {
      console.log(e, prev, current, total);
    },

    handleNextStepClick({
      e, next, current, total,
    }) {
      console.log(e, next, current, total);
    },

    handleFinish({ e, current, total }) {
      this.visible = false;
      console.log(e, current, total);
    },

    handleSkip({ e, current, total }) {
      this.visible = false;
      console.log(e, current, total);
    },
  },
};
<\/script>

<style scoped>
.guide-container {
  max-width: 600px;
  padding: 40px;
}

.title-major {
  color: var(--td-text-color-primary);
  font-size: 36px;
  font-weight: 700;
  line-height: 44px;
}

.title-sub {
  margin-top: 8px;
  color: var(--td-text-color-secondary);
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
}

.field {
  margin-top: 50px;
}

.label {
  margin-bottom: 8px;
  color: var(--td-text-color-primary);
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
}

.action {
  display: inline-flex;
  margin-top: 50px;
}

.action button:first-child {
  margin-right: 10px;
}
</style>
`,k=`<template>
  <t-row justify="center">
    <t-button @click="handleClick">\u65B0\u624B\u5F15\u5BFC</t-button>
    <t-drawer :visible.sync="visible" header="\u6F14\u793A\u65B0\u624B\u5F15\u5BFC" size="60%" :show-overlay="false" destroy-on-close>
      <template #footer>
        <t-button @click="visible = false"> \u5173\u95ED\u62BD\u5C49 </t-button>
      </template>
      <div class="guide-container">
        <div class="main-title-popup">
          <div class="title-major">Guide \u7528\u6237\u5F15\u5BFC</div>
          <div class="title-sub">\u6309\u94AE\u7528\u4E8E\u5F00\u542F\u4E00\u4E2A\u95ED\u73AF\u7684\u64CD\u4F5C\u4EFB\u52A1\uFF0C\u5982\u201C\u5220\u9664\u201D\u5BF9\u8C61\u3001\u201C\u8D2D\u4E70\u201D\u5546\u54C1\u7B49\u3002</div>
        </div>
        <div class="field label-field-1">
          <div class="label">Label</div>
          <t-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" />
        </div>
        <div class="field label-field-2">
          <div class="label">Label</div>
          <t-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" />
        </div>
        <t-row class="action">
          <t-button>\u786E\u5B9A</t-button>
          <t-button theme="default" variant="base">\u53D6\u6D88</t-button>
        </t-row>
      </div>

      <t-guide
        :current.sync="current"
        :steps="steps"
        @change="handleChange"
        @prev-step-click="handlePrevStepClick"
        @next-step-click="handleNextStepClick"
        @finish="handleFinish"
        @skip="handleSkip"
      />
    </t-drawer>
  </t-row>
</template>

<script setup lang="jsx">
import { ref } from 'vue';
import MyPopup from './my-popup.vue';

const visible = ref(false);
const current = ref(-1);
const steps = ref([
  {
    element: '.main-title-popup',
    title: '\u65B0\u624B\u5F15\u5BFC\u6807\u9898',
    description: '\u65B0\u624B\u5F15\u5BFC\u7684\u8BF4\u660E\u6587\u6848',
    placement: 'bottom-right',
    content: MyPopup,
  },
  {
    element: '.label-field-1',
    title: '\u65B0\u624B\u5F15\u5BFC\u6807\u9898',
    description: '\u65B0\u624B\u5F15\u5BFC\u7684\u8BF4\u660E\u6587\u6848',
    placement: 'bottom',
    content: MyPopup,
  },
  {
    element: '.label-field-2',
    title: '\u65B0\u624B\u5F15\u5BFC\u6807\u9898',
    description: '\u65B0\u624B\u5F15\u5BFC\u7684\u8BF4\u660E\u6587\u6848',
    placement: 'bottom-left',
    content: MyPopup,
  },
]);
const handleClick = () => {
  visible.value = true;
  setTimeout(() => {
    current.value = 0;
  }, 1000);
};
const handleChange = (current, { e, total }) => {
  console.log(current, e, total);
};
const handlePrevStepClick = ({
  e, prev, current, total,
}) => {
  console.log(e, prev, current, total);
};
const handleNextStepClick = ({
  e, next, current, total,
}) => {
  console.log(e, next, current, total);
};
const handleFinish = ({ e, current, total }) => {
  visible.value = false;
  console.log(e, current, total);
};
const handleSkip = ({ e, current, total }) => {
  visible.value = false;
  console.log(e, current, total);
};
<\/script>

<style scoped>
.guide-container {
  max-width: 600px;
  padding: 40px;
}

.title-major {
  color: var(--td-text-color-primary);
  font-size: 36px;
  font-weight: 700;
  line-height: 44px;
}

.title-sub {
  margin-top: 8px;
  color: var(--td-text-color-secondary);
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
}

.field {
  margin-top: 50px;
}

.label {
  margin-bottom: 8px;
  color: var(--td-text-color-primary);
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
}

.action {
  display: inline-flex;
  margin-top: 50px;
}

.action button:first-child {
  margin-right: 10px;
}
</style>
`,i=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("td-doc-content",{ref:"tdDocContent",attrs:{"page-status":"hidden"}},[t("td-doc-header",{ref:"tdDocHeader",attrs:{slot:"doc-header",spline:"layout",platform:"web"},slot:"doc-header"},[t("td-doc-badge",{attrs:{slot:"badge",label:"coverage",message:"97.46%"},slot:"badge"})],1),t("td-doc-tabs",{ref:"tdDocTabs",attrs:{tab:n.tab}}),t("div",{directives:[{name:"show",rawName:"v-show",value:n.tab==="demo",expression:"tab === 'demo'"}]},[t("div",{attrs:{name:"DEMO"}},[t("nav",{staticClass:"tdesign-toc_container"},[t("ol",{staticClass:"tdesign-toc_list"},[t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u57FA\u672C\u5F15\u5BFC"}},[n._v("\u57FA\u672C\u5F15\u5BFC")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u4E0D\u5E26\u906E\u7F69\u7684\u5F15\u5BFC"}},[n._v("\u4E0D\u5E26\u906E\u7F69\u7684\u5F15\u5BFC")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u5F39\u7A97\u5F62\u5F0F\u7684\u5F15\u5BFC"}},[n._v("\u5F39\u7A97\u5F62\u5F0F\u7684\u5F15\u5BFC")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u6C14\u6CE1\u4E0E\u5F39\u7A97\u6DF7\u5408\u7684\u5F15\u5BFC"}},[n._v("\u6C14\u6CE1\u4E0E\u5F39\u7A97\u6DF7\u5408\u7684\u5F15\u5BFC")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u81EA\u5B9A\u4E49\u6C14\u6CE1"}},[n._v("\u81EA\u5B9A\u4E49\u6C14\u6CE1")])])])]),t("h3",{attrs:{id:"\u57FA\u672C\u5F15\u5BFC"}},[n._v("\u57FA\u672C\u5F15\u5BFC "),t("a",{staticClass:"header-anchor",attrs:{href:"#\u57FA\u672C\u5F15\u5BFC"}})]),t("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--guide-base tdesign-demo-item--guide"},[t("td-doc-demo",{attrs:{"demo-name":"base",languages:"OptionsAPI,CompositionAPI","data-OptionsAPI":n.DemoexamplebaseCode,"data-CompositionAPI":n.DemoexamplebaseCompositionCode,language:"markup"}},[t("div",{attrs:{slot:"action"},slot:"action"},[t("Stackblitz",{attrs:{"demo-name":"base","component-name":" guide"}}),t("Codesandbox",{attrs:{"demo-name":"base","component-name":" guide"}})],1),t("div",{staticClass:"tdesign-demo-item__body"},[t("Demoexamplebase")],1)])],1),t("h3",{attrs:{id:"\u4E0D\u5E26\u906E\u7F69\u7684\u5F15\u5BFC"}},[n._v("\u4E0D\u5E26\u906E\u7F69\u7684\u5F15\u5BFC "),t("a",{staticClass:"header-anchor",attrs:{href:"#\u4E0D\u5E26\u906E\u7F69\u7684\u5F15\u5BFC"}})]),t("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--guide-no-mask tdesign-demo-item--guide"},[t("td-doc-demo",{attrs:{"demo-name":"no-mask",languages:"OptionsAPI,CompositionAPI","data-OptionsAPI":n.DemoexamplenomaskCode,"data-CompositionAPI":n.DemoexamplenomaskCompositionCode,language:"markup"}},[t("div",{attrs:{slot:"action"},slot:"action"},[t("Stackblitz",{attrs:{"demo-name":"no-mask","component-name":" guide"}}),t("Codesandbox",{attrs:{"demo-name":"no-mask","component-name":" guide"}})],1),t("div",{staticClass:"tdesign-demo-item__body"},[t("Demoexamplenomask")],1)])],1),t("h3",{attrs:{id:"\u5F39\u7A97\u5F62\u5F0F\u7684\u5F15\u5BFC"}},[n._v("\u5F39\u7A97\u5F62\u5F0F\u7684\u5F15\u5BFC "),t("a",{staticClass:"header-anchor",attrs:{href:"#\u5F39\u7A97\u5F62\u5F0F\u7684\u5F15\u5BFC"}})]),t("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--guide-dialog tdesign-demo-item--guide"},[t("td-doc-demo",{attrs:{"demo-name":"dialog",languages:"OptionsAPI,CompositionAPI","data-OptionsAPI":n.DemoexampledialogCode,"data-CompositionAPI":n.DemoexampledialogCompositionCode,language:"markup"}},[t("div",{attrs:{slot:"action"},slot:"action"},[t("Stackblitz",{attrs:{"demo-name":"dialog","component-name":" guide"}}),t("Codesandbox",{attrs:{"demo-name":"dialog","component-name":" guide"}})],1),t("div",{staticClass:"tdesign-demo-item__body"},[t("Demoexampledialog")],1)])],1),t("h3",{attrs:{id:"\u6C14\u6CE1\u4E0E\u5F39\u7A97\u6DF7\u5408\u7684\u5F15\u5BFC"}},[n._v("\u6C14\u6CE1\u4E0E\u5F39\u7A97\u6DF7\u5408\u7684\u5F15\u5BFC "),t("a",{staticClass:"header-anchor",attrs:{href:"#\u6C14\u6CE1\u4E0E\u5F39\u7A97\u6DF7\u5408\u7684\u5F15\u5BFC"}})]),t("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--guide-popup-dialog tdesign-demo-item--guide"},[t("td-doc-demo",{attrs:{"demo-name":"popup-dialog",languages:"OptionsAPI,CompositionAPI","data-OptionsAPI":n.DemoexamplepopupdialogCode,"data-CompositionAPI":n.DemoexamplepopupdialogCompositionCode,language:"markup"}},[t("div",{attrs:{slot:"action"},slot:"action"},[t("Stackblitz",{attrs:{"demo-name":"popup-dialog","component-name":" guide"}}),t("Codesandbox",{attrs:{"demo-name":"popup-dialog","component-name":" guide"}})],1),t("div",{staticClass:"tdesign-demo-item__body"},[t("Demoexamplepopupdialog")],1)])],1),t("h3",{attrs:{id:"\u81EA\u5B9A\u4E49\u6C14\u6CE1"}},[n._v("\u81EA\u5B9A\u4E49\u6C14\u6CE1 "),t("a",{staticClass:"header-anchor",attrs:{href:"#\u81EA\u5B9A\u4E49\u6C14\u6CE1"}})]),t("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--guide-custom-popup tdesign-demo-item--guide"},[t("td-doc-demo",{attrs:{"demo-name":"custom-popup",languages:"OptionsAPI,CompositionAPI","data-OptionsAPI":n.DemoexamplecustompopupCode,"data-CompositionAPI":n.DemoexamplecustompopupCompositionCode,language:"markup"}},[t("div",{attrs:{slot:"action"},slot:"action"},[t("Stackblitz",{attrs:{"demo-name":"custom-popup","component-name":" guide"}}),t("Codesandbox",{attrs:{"demo-name":"custom-popup","component-name":" guide"}})],1),t("div",{staticClass:"tdesign-demo-item__body"},[t("Demoexamplecustompopup")],1)])],1)]),t("td-contributors",{attrs:{platform:"web",framework:"vue","component-name":"guide"}})],1),t("div",{directives:[{name:"show",rawName:"v-show",value:n.tab==="api",expression:"tab === 'api'"}],attrs:{name:"API"}},[t("nav",{staticClass:"tdesign-toc_container"},[t("ol",{staticClass:"tdesign-toc_list"},[t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#guide-props"}},[n._v("Guide Props")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#guide-events"}},[n._v("Guide Events")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#guidestep"}},[n._v("GuideStep")])])])]),t("h3",{attrs:{id:"guide-props"}},[n._v("Guide Props "),t("a",{staticClass:"header-anchor",attrs:{href:"#guide-props"}})]),t("table",[t("thead",[t("tr",[t("th",[n._v("\u540D\u79F0")]),t("th",[n._v("\u7C7B\u578B")]),t("th",[n._v("\u9ED8\u8BA4\u503C")]),t("th",[n._v("\u8BF4\u660E")]),t("th",[n._v("\u5FC5\u4F20")])])]),t("tbody",[t("tr",[t("td",[n._v("counter")]),t("td",[n._v("Slot / Function")]),t("td",[n._v("-")]),t("td",[n._v("\u7528\u4E8E\u81EA\u5B9A\u4E49\u6E32\u67D3\u8BA1\u6570\u90E8\u5206\u3002TS \u7C7B\u578B\uFF1A"),t("code",[n._v("TNode<{ current: number; total: number }>")]),n._v("\u3002"),t("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts",target:"_blank",rel:"noopener noreferrer"}},[n._v("\u901A\u7528\u7C7B\u578B\u5B9A\u4E49")])]),t("td",[n._v("N")])]),t("tr",[t("td",[n._v("current")]),t("td",[n._v("Number")]),t("td",[n._v("-")]),t("td",[n._v("\u5F53\u524D\u6B65\u9AA4\uFF0C\u5373\u6574\u4E2A\u5F15\u5BFC\u7684\u8FDB\u5EA6\u3002-1 \u5219\u4E0D\u5C55\u793A\uFF0C\u7528\u4E8E\u9700\u8981\u4E2D\u65AD\u5C55\u793A\u7684\u573A\u666F\u3002\u652F\u6301\u8BED\u6CD5\u7CD6 "),t("code",[n._v("v-model")])]),t("td",[n._v("N")])]),t("tr",[t("td",[n._v("defaultCurrent")]),t("td",[n._v("Number")]),t("td",[n._v("-")]),t("td",[n._v("\u5F53\u524D\u6B65\u9AA4\uFF0C\u5373\u6574\u4E2A\u5F15\u5BFC\u7684\u8FDB\u5EA6\u3002-1 \u5219\u4E0D\u5C55\u793A\uFF0C\u7528\u4E8E\u9700\u8981\u4E2D\u65AD\u5C55\u793A\u7684\u573A\u666F\u3002\u975E\u53D7\u63A7\u5C5E\u6027")]),t("td",[n._v("N")])]),t("tr",[t("td",[n._v("finishButtonProps")]),t("td",[n._v("Object")]),t("td",[n._v("-")]),t("td",[n._v("\u900F\u4F20 \u5B8C\u6210 \u7684\u5168\u90E8\u5C5E\u6027\uFF0C\u793A\u4F8B\uFF1A"),t("code",[n._v("{ content: '\u5B8C\u6210', theme: 'primary' }")]),n._v("\u3002TS \u7C7B\u578B\uFF1A"),t("code",[n._v("ButtonProps")])]),t("td",[n._v("N")])]),t("tr",[t("td",[n._v("hideCounter")]),t("td",[n._v("Boolean")]),t("td",[n._v("false")]),t("td",[n._v("\u662F\u5426\u9690\u85CF\u8BA1\u6570")]),t("td",[n._v("N")])]),t("tr",[t("td",[n._v("hidePrev")]),t("td",[n._v("Boolean")]),t("td",[n._v("false")]),t("td",[n._v("\u662F\u5426\u9690\u85CF\u4E0A\u4E00\u6B65\u6309\u94AE")]),t("td",[n._v("N")])]),t("tr",[t("td",[n._v("hideSkip")]),t("td",[n._v("Boolean")]),t("td",[n._v("false")]),t("td",[n._v("\u662F\u5426\u9690\u85CF\u8DF3\u8FC7\u6309\u94AE")]),t("td",[n._v("N")])]),t("tr",[t("td",[n._v("highlightPadding")]),t("td",[n._v("Number")]),t("td",[n._v("8")]),t("td",[n._v("\u9AD8\u4EAE\u6846\u7684\u5185\u8FB9\u8DDD")]),t("td",[n._v("N")])]),t("tr",[t("td",[n._v("mode")]),t("td",[n._v("String")]),t("td",[n._v("popup")]),t("td",[n._v("\u5F15\u5BFC\u6846\u7684\u7C7B\u578B\u3002\u53EF\u9009\u9879\uFF1Apopup/dialog")]),t("td",[n._v("N")])]),t("tr",[t("td",[n._v("nextButtonProps")]),t("td",[n._v("Object")]),t("td",[n._v("-")]),t("td",[n._v("\u900F\u4F20 \u4E0B\u4E00\u6B65\u6309\u94AE \u7684\u5168\u90E8\u5C5E\u6027\uFF0C\u793A\u4F8B\uFF1A{ content: '\u4E0B\u4E00\u6B65', theme: 'primary' }\u3002TS \u7C7B\u578B\uFF1A"),t("code",[n._v("ButtonProps")]),n._v("\uFF0C"),t("a",{attrs:{href:"./button?tab=api"}},[n._v("Button API Documents")]),n._v("\u3002"),t("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/tree/develop/src/guide/type.ts",target:"_blank",rel:"noopener noreferrer"}},[n._v("\u8BE6\u7EC6\u7C7B\u578B\u5B9A\u4E49")])]),t("td",[n._v("N")])]),t("tr",[t("td",[n._v("prevButtonProps")]),t("td",[n._v("Object")]),t("td",[n._v("-")]),t("td",[n._v("\u900F\u4F20 \u4E0A\u4E00\u6B65\u6309\u94AE \u7684\u5168\u90E8\u5C5E\u6027\uFF0C\u793A\u4F8B\uFF1A{ content: '\u4E0A\u4E00\u6B65', theme: 'default' }\u3002TS \u7C7B\u578B\uFF1A"),t("code",[n._v("ButtonProps")])]),t("td",[n._v("N")])]),t("tr",[t("td",[n._v("showOverlay")]),t("td",[n._v("Boolean")]),t("td",[n._v("true")]),t("td",[n._v("\u662F\u5426\u51FA\u73B0\u906E\u7F69\u5C42")]),t("td",[n._v("N")])]),t("tr",[t("td",[n._v("skipButtonProps")]),t("td",[n._v("Object")]),t("td",[n._v("-")]),t("td",[n._v("\u900F\u4F20 \u8DF3\u8FC7\u6309\u94AE \u7684\u5168\u90E8\u5C5E\u6027\uFF0C{ content: '\u8DF3\u8FC7', theme: 'default' }\u3002TS \u7C7B\u578B\uFF1A"),t("code",[n._v("ButtonProps")])]),t("td",[n._v("N")])]),t("tr",[t("td",[n._v("steps")]),t("td",[n._v("Array")]),t("td",[n._v("-")]),t("td",[n._v("\u7528\u4E8E\u5B9A\u4E49\u6BCF\u4E2A\u6B65\u9AA4\u7684\u5185\u5BB9\uFF0C\u5305\u62EC\u9AD8\u4EAE\u7684\u8282\u70B9\u3001\u76F8\u5BF9\u4F4D\u7F6E\u548C\u5177\u4F53\u7684\u6587\u6848\u5185\u5BB9\u7B49\u3002\u3002TS \u7C7B\u578B\uFF1A"),t("code",[n._v("Array<GuideStep>")])]),t("td",[n._v("N")])]),t("tr",[t("td",[n._v("zIndex")]),t("td",[n._v("Number")]),t("td",[n._v("999999")]),t("td",[n._v("\u63D0\u793A\u6846\u7684\u5C42\u7EA7")]),t("td",[n._v("N")])]),t("tr",[t("td",[n._v("onChange")]),t("td",[n._v("Function")]),t("td"),t("td",[n._v("TS \u7C7B\u578B\uFF1A"),t("code",[n._v("(current: number, context?: { e: MouseEvent, total: number }) => void")]),t("br"),n._v("\u5F53\u524D\u6B65\u9AA4\u53D1\u751F\u53D8\u5316\u65F6\u89E6\u53D1")]),t("td",[n._v("N")])]),t("tr",[t("td",[n._v("onFinish")]),t("td",[n._v("Function")]),t("td"),t("td",[n._v("TS \u7C7B\u578B\uFF1A"),t("code",[n._v("(context: { e: MouseEvent, current: number, total: number }) => void")]),t("br"),n._v("\u70B9\u51FB\u5B8C\u6210\u6309\u94AE\u65F6\u89E6\u53D1")]),t("td",[n._v("N")])]),t("tr",[t("td",[n._v("onNextStepClick")]),t("td",[n._v("Function")]),t("td"),t("td",[n._v("TS \u7C7B\u578B\uFF1A"),t("code",[n._v("(context: { e: MouseEvent, next: number, current: number, total: number }) => void")]),t("br"),n._v("\u70B9\u51FB\u4E0B\u4E00\u6B65\u65F6\u89E6\u53D1")]),t("td",[n._v("N")])]),t("tr",[t("td",[n._v("onPrevStepClick")]),t("td",[n._v("Function")]),t("td"),t("td",[n._v("TS \u7C7B\u578B\uFF1A"),t("code",[n._v("(context: { e: MouseEvent, prev: number, current: number, total: number }) => void")]),t("br"),n._v("\u70B9\u51FB\u4E0A\u4E00\u6B65\u65F6\u89E6\u53D1")]),t("td",[n._v("N")])]),t("tr",[t("td",[n._v("onSkip")]),t("td",[n._v("Function")]),t("td"),t("td",[n._v("TS \u7C7B\u578B\uFF1A"),t("code",[n._v("(context: { e: MouseEvent, current: number, total: number }) => void")]),t("br"),n._v("\u70B9\u51FB\u8DF3\u8FC7\u6309\u94AE\u65F6\u89E6\u53D1")]),t("td",[n._v("N")])])])]),t("h3",{attrs:{id:"guide-events"}},[n._v("Guide Events "),t("a",{staticClass:"header-anchor",attrs:{href:"#guide-events"}})]),t("table",[t("thead",[t("tr",[t("th",[n._v("\u540D\u79F0")]),t("th",[n._v("\u53C2\u6570")]),t("th",[n._v("\u63CF\u8FF0")])])]),t("tbody",[t("tr",[t("td",[n._v("change")]),t("td",[t("code",[n._v("(current: number, context?: { e: MouseEvent, total: number })")])]),t("td",[n._v("\u5F53\u524D\u6B65\u9AA4\u53D1\u751F\u53D8\u5316\u65F6\u89E6\u53D1")])]),t("tr",[t("td",[n._v("finish")]),t("td",[t("code",[n._v("(context: { e: MouseEvent, current: number, total: number })")])]),t("td",[n._v("\u70B9\u51FB\u5B8C\u6210\u6309\u94AE\u65F6\u89E6\u53D1")])]),t("tr",[t("td",[n._v("next-step-click")]),t("td",[t("code",[n._v("(context: { e: MouseEvent, next: number, current: number, total: number })")])]),t("td",[n._v("\u70B9\u51FB\u4E0B\u4E00\u6B65\u65F6\u89E6\u53D1")])]),t("tr",[t("td",[n._v("prev-step-click")]),t("td",[t("code",[n._v("(context: { e: MouseEvent, prev: number, current: number, total: number })")])]),t("td",[n._v("\u70B9\u51FB\u4E0A\u4E00\u6B65\u65F6\u89E6\u53D1")])]),t("tr",[t("td",[n._v("skip")]),t("td",[t("code",[n._v("(context: { e: MouseEvent, current: number, total: number })")])]),t("td",[n._v("\u70B9\u51FB\u8DF3\u8FC7\u6309\u94AE\u65F6\u89E6\u53D1")])])])]),t("h3",{attrs:{id:"guidestep"}},[n._v("GuideStep "),t("a",{staticClass:"header-anchor",attrs:{href:"#guidestep"}})]),t("table",[t("thead",[t("tr",[t("th",[n._v("\u540D\u79F0")]),t("th",[n._v("\u7C7B\u578B")]),t("th",[n._v("\u9ED8\u8BA4\u503C")]),t("th",[n._v("\u8BF4\u660E")]),t("th",[n._v("\u5FC5\u4F20")])])]),t("tbody",[t("tr",[t("td",[n._v("body")]),t("td",[n._v("String / Slot / Function")]),t("td",[n._v("-")]),t("td",[n._v("\u5F53\u524D\u6B65\u9AA4\u63D0\u793A\u6846\u7684\u5185\u5BB9\u3002TS \u7C7B\u578B\uFF1A"),t("code",[n._v("string | TNode")]),n._v("\u3002"),t("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts",target:"_blank",rel:"noopener noreferrer"}},[n._v("\u901A\u7528\u7C7B\u578B\u5B9A\u4E49")])]),t("td",[n._v("N")])]),t("tr",[t("td",[n._v("content")]),t("td",[n._v("Slot / Function")]),t("td",[n._v("-")]),t("td",[n._v("\u7528\u6237\u81EA\u5B9A\u4E49\u5F15\u5BFC\u5F39\u6846\u7684\u5185\u5BB9\uFF0C\u4E00\u65E6\u5B58\u5728\uFF0C\u6B64\u65F6\u9664 "),t("code",[n._v("placement")]),n._v("\u3001"),t("code",[n._v("offset")]),n._v("\u548C"),t("code",[n._v("element")]),n._v(" \u5916\uFF0C\u5176\u5B83\u5C5E\u6027\u5168\u90E8\u5931\u6548\uFF09\u3002TS \u7C7B\u578B\uFF1A"),t("code",[n._v("TNode")]),n._v("\u3002"),t("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts",target:"_blank",rel:"noopener noreferrer"}},[n._v("\u901A\u7528\u7C7B\u578B\u5B9A\u4E49")])]),t("td",[n._v("N")])]),t("tr",[t("td",[n._v("element")]),t("td",[n._v("String / Function")]),t("td",[n._v("-")]),t("td",[n._v("\u5FC5\u9700\u3002\u9AD8\u4EAE\u7684\u8282\u70B9\u3002\u6570\u636E\u7C7B\u578B\u4E3A String \u65F6\uFF0C\u4F1A\u88AB\u5F53\u4F5C\u9009\u62E9\u5668\u5904\u7406\uFF0C\u8FDB\u884C\u8282\u70B9\u67E5\u8BE2\u3002\u793A\u4F8B\uFF1A'#tdesign' \u6216 () => document.querySelector('#tdesign')\u3002TS \u7C7B\u578B\uFF1A"),t("code",[n._v("AttachNode")]),n._v("\u3002"),t("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts",target:"_blank",rel:"noopener noreferrer"}},[n._v("\u901A\u7528\u7C7B\u578B\u5B9A\u4E49")])]),t("td",[n._v("Y")])]),t("tr",[t("td",[n._v("highlightContent")]),t("td",[n._v("Slot / Function")]),t("td",[n._v("-")]),t("td",[n._v("\u7528\u6237\u81EA\u5B9A\u4E49\u7684\u9AD8\u4EAE\u6846 (\u4EC5\u5F53 "),t("code",[n._v("mode")]),n._v(" \u4E3A "),t("code",[n._v("popup")]),n._v(" \u65F6\u751F\u6548)\u3002TS \u7C7B\u578B\uFF1A"),t("code",[n._v("TNode")]),n._v("\u3002"),t("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts",target:"_blank",rel:"noopener noreferrer"}},[n._v("\u901A\u7528\u7C7B\u578B\u5B9A\u4E49")])]),t("td",[n._v("N")])]),t("tr",[t("td",[n._v("highlightPadding")]),t("td",[n._v("Number")]),t("td",[n._v("-")]),t("td",[n._v("\u9AD8\u4EAE\u6846\u7684\u5185\u8FB9\u8DDD")]),t("td",[n._v("N")])]),t("tr",[t("td",[n._v("mode")]),t("td",[n._v("String")]),t("td",[n._v("-")]),t("td",[n._v("\u5F15\u5BFC\u6846\u7684\u7C7B\u578B\u3002\u53EF\u9009\u9879\uFF1Apopup/dialog")]),t("td",[n._v("N")])]),t("tr",[t("td",[n._v("nextButtonProps")]),t("td",[n._v("Object")]),t("td",[n._v("-")]),t("td",[n._v("\u7528\u4E8E\u81EA\u5B9A\u4E49\u5F53\u524D\u5F15\u5BFC\u6846\u7684\u4E0B\u4E00\u6B65\u6309\u94AE\u7684\u5185\u5BB9\u3002TS \u7C7B\u578B\uFF1A"),t("code",[n._v("ButtonProps")])]),t("td",[n._v("N")])]),t("tr",[t("td",[n._v("offset")]),t("td",[n._v("Array")]),t("td",[n._v("-")]),t("td",[n._v("\u3010\u8BA8\u8BBA\u786E\u8BA4\u4E2D\u3011\u76F8\u5BF9\u4E8E placement \u7684\u504F\u79FB\u91CF\uFF0C\u793A\u4F8B\uFF1A[-10, 20] \u6216 ['10px', '8px']\u3002TS \u7C7B\u578B\uFF1A"),t("code",[n._v("Array<string | number>")])]),t("td",[n._v("N")])]),t("tr",[t("td",[n._v("placement")]),t("td",[n._v("String")]),t("td",[n._v("'top'")]),t("td",[n._v("\u5F15\u5BFC\u6846\u76F8\u5BF9\u4E8E\u9AD8\u4EAE\u5143\u7D20\u51FA\u73B0\u7684\u4F4D\u7F6E\u3002TS \u7C7B\u578B\uFF1A"),t("code",[n._v("StepPopupPlacement | StepDialogPlacement")]),n._v(" "),t("code",[n._v("type StepPopupPlacement = 'top'|'left'|'right'|'bottom'|'top-left'|'top-right'|'bottom-left'|'bottom-right'|'left-top'|'left-bottom'|'right-top'|'right-bottom'")]),n._v(" "),t("code",[n._v("type StepDialogPlacement = 'top'|'center' ")]),n._v("\u3002"),t("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/tree/develop/src/guide/type.ts",target:"_blank",rel:"noopener noreferrer"}},[n._v("\u8BE6\u7EC6\u7C7B\u578B\u5B9A\u4E49")])]),t("td",[n._v("N")])]),t("tr",[t("td",[n._v("popupProps")]),t("td",[n._v("Object")]),t("td",[n._v("-")]),t("td",[n._v("\u900F\u4F20\u5168\u90E8\u5C5E\u6027\u5230 Popup \u7EC4\u4EF6\u3002"),t("code",[n._v("mode=popup")]),n._v(" \u65F6\u6709\u6548\u3002TS \u7C7B\u578B\uFF1A"),t("code",[n._v("PopupProps")]),n._v("\uFF0C"),t("a",{attrs:{href:"./popup?tab=api"}},[n._v("Popup API Documents")]),n._v("\u3002"),t("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/tree/develop/src/guide/type.ts",target:"_blank",rel:"noopener noreferrer"}},[n._v("\u8BE6\u7EC6\u7C7B\u578B\u5B9A\u4E49")])]),t("td",[n._v("N")])]),t("tr",[t("td",[n._v("prevButtonProps")]),t("td",[n._v("Object")]),t("td",[n._v("-")]),t("td",[n._v("\u7528\u4E8E\u81EA\u5B9A\u4E49\u5F53\u524D\u5F15\u5BFC\u6846\u7684\u4E0A\u4E00\u6B65\u6309\u94AE\u7684\u5185\u5BB9\u3002TS \u7C7B\u578B\uFF1A"),t("code",[n._v("ButtonProps")])]),t("td",[n._v("N")])]),t("tr",[t("td",[n._v("showOverlay")]),t("td",[n._v("Boolean")]),t("td",[n._v("true")]),t("td",[n._v("\u662F\u5426\u51FA\u73B0\u906E\u7F69\u5C42")]),t("td",[n._v("N")])]),t("tr",[t("td",[n._v("skipButtonProps")]),t("td",[n._v("Object")]),t("td",[n._v("-")]),t("td",[n._v("\u7528\u4E8E\u81EA\u5B9A\u4E49\u5F53\u524D\u6B65\u9AA4\u5F15\u5BFC\u6846\u7684\u8DF3\u8FC7\u6309\u94AE\u7684\u5185\u5BB9\u3002TS \u7C7B\u578B\uFF1A"),t("code",[n._v("ButtonProps")])]),t("td",[n._v("N")])]),t("tr",[t("td",[n._v("stepOverlayClass")]),t("td",[n._v("String")]),t("td",[n._v("-")]),t("td",[n._v("\u8986\u76D6\u5F15\u5BFC\u6846\u7684\u7C7B\u540D")]),t("td",[n._v("N")])]),t("tr",[t("td",[n._v("title")]),t("td",[n._v("String")]),t("td",[n._v("-")]),t("td",[n._v("\u5F53\u524D\u6B65\u9AA4\u7684\u6807\u9898\u5185\u5BB9")]),t("td",[n._v("N")])])])])]),t("div",{directives:[{name:"show",rawName:"v-show",value:n.tab==="design",expression:"tab === 'design'"}],attrs:{name:"DESIGN"}},[t("nav",{staticClass:"tdesign-toc_container"},[t("ol",{staticClass:"tdesign-toc_list"},[t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u4F55\u65F6\u4F7F\u7528"}},[n._v("\u4F55\u65F6\u4F7F\u7528")])])])]),t("h3",{attrs:{id:"\u4F55\u65F6\u4F7F\u7528"}},[n._v("\u4F55\u65F6\u4F7F\u7528 "),t("a",{staticClass:"header-anchor",attrs:{href:"#\u4F55\u65F6\u4F7F\u7528"}})]),t("p",[n._v("\u9010\u6B65\u9AA4\u8FDB\u884C\u6307\u5F15\u6216\u89E3\u91CA\u8BF4\u660E\u7684\u7EC4\u4EF6\uFF0C\u5E38\u7528\u4E8E\u7528\u6237\u4E0D\u719F\u6089\u7684\u6216\u9700\u8FDB\u884C\u7279\u522B\u5F3A\u8C03\u7684\u9875\u9762")])]),t("div",{staticStyle:{"margin-top":"48px"}},[t("td-doc-history",{key:n.lastUpdated,attrs:{time:n.lastUpdated}})],1),t("td-doc-footer",{attrs:{slot:"doc-footer"},slot:"doc-footer"})],1)},w=[];i._withStripped=!0;const S={components:{Demoexamplebase:r,Demoexamplenomask:s,Demoexampledialog:d,Demoexamplepopupdialog:c,Demoexamplecustompopup:p},data(){return{DemoexamplebaseCode:m,DemoexamplebaseCompositionCode:h,DemoexamplenomaskCode:g,DemoexamplenomaskCompositionCode:b,DemoexampledialogCode:_,DemoexampledialogCompositionCode:f,DemoexamplepopupdialogCode:x,DemoexamplepopupdialogCompositionCode:y,DemoexamplecustompopupCode:C,DemoexamplecustompopupCompositionCode:k}},computed:{lastUpdated(){return this.tab==="design"?1739008828e3:1740128904e3},tab:{get(){return this.$route.query.tab||"demo"},set(n){this.$route.query.tab!==n&&this.$router.push({query:{tab:n}})}}},mounted(){const{tdDocContent:n,tdDocHeader:e,tdDocTabs:t}=this.$refs;e&&(e.docInfo={title:"Guide \u5F15\u5BFC",desc:"\u9010\u6B65\u9AA4\u8FDB\u884C\u6307\u5F15\u6216\u89E3\u91CA\u8BF4\u660E\u7684\u7EC4\u4EF6\uFF0C\u5E38\u7528\u4E8E\u7528\u6237\u4E0D\u719F\u6089\u7684\u6216\u9700\u8FDB\u884C\u7279\u522B\u5F3A\u8C03\u7684\u9875\u9762\u3002"}),document.title="Guide \u5F15\u5BFC | TDesign",t&&(t.tabs=[{tab:"demo",name:"\u793A\u4F8B"},{tab:"api",name:"API"},{tab:"design",name:"\u6307\u5357"}],t.onchange=({detail:a})=>this.tab=a),v.highlightAll(),this.$emit("loaded",()=>{n.pageStatus="show"})}},o={};var l=u(S,i,w,!1,P,null,null,null);function P(n){for(let e in o)this[e]=o[e]}l.options.__file="../src/guide/guide.md";var T=function(){return l.exports}();export{T as default};
