import{Y as s,n as v}from"./index.663c003f.js";var x=`<template>
  <t-space direction="vertical">
    <t-switch v-model="loading"></t-switch>
    <t-skeleton :loading="loading">
      <div class="t-skeleton-demo-paragraph">
        <p>
          \u9AA8\u67B6\u5C4F\u7EC4\u4EF6\uFF0C\u662F\u6307\u5F53\u7F51\u7EDC\u8F83\u6162\u65F6\uFF0C\u5728\u9875\u9762\u771F\u5B9E\u6570\u636E\u52A0\u8F7D\u4E4B\u524D\uFF0C\u7ED9\u7528\u6237\u5C55\u793A\u51FA\u9875\u9762\u7684\u5927\u81F4\u7ED3\u6784\u3002
          \u4E00\u65B9\u9762\u8BA9\u7528\u6237\u5BF9\u9875\u9762\u6709\u4E00\u5B9A\u7684\u5FC3\u7406\u9884\u671F\uFF0C\u53E6\u4E00\u65B9\u9762\u53EF\u4EE5\u6539\u5584\u957F\u671F\u505C\u7559\u5728\u7A7A\u767D\u5C4F\u7ED9\u7528\u6237\u5E26\u6765\u7684\u67AF\u71E5\u548C\u4E0D\u9002\u611F\u3002\u5B83\u53EF\u4EE5\u4E3A\u7528\u6237\u63D0\u4F9B\u66F4\u597D\u89C6\u89C9\u6548\u679C\u548C\u4F7F\u7528\u4F53\u9A8C\u3002
        </p>
      </div>
    </t-skeleton>
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

<style scoped>
.t-skeleton-demo-paragraph {
  line-height: 25px;
}
</style>
`,f=`<template>
  <t-space direction="vertical">
    <t-switch v-model="loading"></t-switch>
    <t-skeleton :loading="loading">
      <div class="t-skeleton-demo-paragraph">
        <p>
          \u9AA8\u67B6\u5C4F\u7EC4\u4EF6\uFF0C\u662F\u6307\u5F53\u7F51\u7EDC\u8F83\u6162\u65F6\uFF0C\u5728\u9875\u9762\u771F\u5B9E\u6570\u636E\u52A0\u8F7D\u4E4B\u524D\uFF0C\u7ED9\u7528\u6237\u5C55\u793A\u51FA\u9875\u9762\u7684\u5927\u81F4\u7ED3\u6784\u3002
          \u4E00\u65B9\u9762\u8BA9\u7528\u6237\u5BF9\u9875\u9762\u6709\u4E00\u5B9A\u7684\u5FC3\u7406\u9884\u671F\uFF0C\u53E6\u4E00\u65B9\u9762\u53EF\u4EE5\u6539\u5584\u957F\u671F\u505C\u7559\u5728\u7A7A\u767D\u5C4F\u7ED9\u7528\u6237\u5E26\u6765\u7684\u67AF\u71E5\u548C\u4E0D\u9002\u611F\u3002\u5B83\u53EF\u4EE5\u4E3A\u7528\u6237\u63D0\u4F9B\u66F4\u597D\u89C6\u89C9\u6548\u679C\u548C\u4F7F\u7528\u4F53\u9A8C\u3002
        </p>
      </div>
    </t-skeleton>
  </t-space>
</template>

<script setup>
import { ref } from 'vue';

const loading = ref(true);
<\/script>

<style scoped>
.t-skeleton-demo-paragraph {
  line-height: 25px;
}
</style>
`,y=`<template>
  <t-row class="t-skeleton-demo">
    <t-col v-for="(animation, index) in animations" :key="\`animation-\${index}\`">
      <section class="t-skeleton-demo-card">
        <div class="header">
          {{ animation.label }}
        </div>
        <div class="content">
          <t-skeleton :animation="animation.value"></t-skeleton>
        </div>
      </section>
    </t-col>
  </t-row>
</template>

<script>
export default {
  data() {
    return {
      animations: [
        { label: '\u6E10\u53D8\u52A0\u8F7D\u52A8\u753B', value: 'gradient' },
        { label: '\u95EA\u70C1\u52A0\u8F7D\u52A8\u753B', value: 'flashed' },
      ],
    };
  },
};
<\/script>
`,b=`<template>
  <t-row class="t-skeleton-demo">
    <t-col v-for="(animation, index) in animations" :key="\`animation-\${index}\`">
      <section class="t-skeleton-demo-card">
        <div class="header">
          {{ animation.label }}
        </div>
        <div class="content">
          <t-skeleton :animation="animation.value"></t-skeleton>
        </div>
      </section>
    </t-col>
  </t-row>
</template>

<script setup>
import { ref } from 'vue';

const animations = ref([
  {
    label: '\u6E10\u53D8\u52A0\u8F7D\u52A8\u753B',
    value: 'gradient',
  },
  {
    label: '\u95EA\u70C1\u52A0\u8F7D\u52A8\u753B',
    value: 'flashed',
  },
]);
<\/script>
`,w=`<template>
  <t-space direction="vertical">
    <t-space>
      <t-button @click="loadingData(0)" size="small">\u65E0 delay \u5C5E\u6027\u5FEB\u901F\u52A0\u8F7D\u6570\u636E\uFF08\u4F1A\u95EA\u5C4F\uFF09</t-button>
      <t-button @click="loadingData(500)" size="small">\u6709 delay \u5C5E\u6027\u5FEB\u901F\u52A0\u8F7D\u6570\u636E\uFF08\u65E0\u95EA\u5C4F\uFF09</t-button>
    </t-space>

    <t-skeleton :loading="loading" :delay="delay">
      <div class="t-skeleton-demo-paragraph">
        <p>
          \u9AA8\u67B6\u5C4F\u7EC4\u4EF6\uFF0C\u662F\u6307\u5F53\u7F51\u7EDC\u8F83\u6162\u65F6\uFF0C\u5728\u9875\u9762\u771F\u5B9E\u6570\u636E\u52A0\u8F7D\u4E4B\u524D\uFF0C\u7ED9\u7528\u6237\u5C55\u793A\u51FA\u9875\u9762\u7684\u5927\u81F4\u7ED3\u6784\u3002
          \u4E00\u65B9\u9762\u8BA9\u7528\u6237\u5BF9\u9875\u9762\u6709\u4E00\u5B9A\u7684\u5FC3\u7406\u9884\u671F\uFF0C\u53E6\u4E00\u65B9\u9762\u53EF\u4EE5\u6539\u5584\u957F\u671F\u505C\u7559\u5728\u7A7A\u767D\u5C4F\u7ED9\u7528\u6237\u5E26\u6765\u7684\u67AF\u71E5\u548C\u4E0D\u9002\u611F\u3002\u5B83\u53EF\u4EE5\u4E3A\u7528\u6237\u63D0\u4F9B\u66F4\u597D\u89C6\u89C9\u6548\u679C\u548C\u4F7F\u7528\u4F53\u9A8C\u3002
        </p>
      </div>
    </t-skeleton>
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      delay: 500,
    };
  },
  methods: {
    loadingData(delayTime) {
      this.delay = delayTime;
      this.loading = true;
      const timer = setTimeout(() => {
        this.loading = false;
        clearTimeout(timer);
      }, 100);
    },
  },
};
<\/script>
`,_=`<template>
  <t-space direction="vertical">
    <t-space>
      <t-button @click="loadingData(0)" size="small">\u65E0 delay \u5C5E\u6027\u5FEB\u901F\u52A0\u8F7D\u6570\u636E\uFF08\u4F1A\u95EA\u5C4F\uFF09</t-button>
      <t-button @click="loadingData(500)" size="small">\u6709 delay \u5C5E\u6027\u5FEB\u901F\u52A0\u8F7D\u6570\u636E\uFF08\u65E0\u95EA\u5C4F\uFF09</t-button>
    </t-space>

    <t-skeleton :loading="loading" :delay="delay">
      <div class="t-skeleton-demo-paragraph">
        <p>
          \u9AA8\u67B6\u5C4F\u7EC4\u4EF6\uFF0C\u662F\u6307\u5F53\u7F51\u7EDC\u8F83\u6162\u65F6\uFF0C\u5728\u9875\u9762\u771F\u5B9E\u6570\u636E\u52A0\u8F7D\u4E4B\u524D\uFF0C\u7ED9\u7528\u6237\u5C55\u793A\u51FA\u9875\u9762\u7684\u5927\u81F4\u7ED3\u6784\u3002
          \u4E00\u65B9\u9762\u8BA9\u7528\u6237\u5BF9\u9875\u9762\u6709\u4E00\u5B9A\u7684\u5FC3\u7406\u9884\u671F\uFF0C\u53E6\u4E00\u65B9\u9762\u53EF\u4EE5\u6539\u5584\u957F\u671F\u505C\u7559\u5728\u7A7A\u767D\u5C4F\u7ED9\u7528\u6237\u5E26\u6765\u7684\u67AF\u71E5\u548C\u4E0D\u9002\u611F\u3002\u5B83\u53EF\u4EE5\u4E3A\u7528\u6237\u63D0\u4F9B\u66F4\u597D\u89C6\u89C9\u6548\u679C\u548C\u4F7F\u7528\u4F53\u9A8C\u3002
        </p>
      </div>
    </t-skeleton>
  </t-space>
</template>

<script setup>
import { ref } from 'vue';

const loading = ref(false);
const delay = ref(500);
const loadingData = (delayTime) => {
  delay.value = delayTime;
  loading.value = true;
  const timer = setTimeout(() => {
    loading.value = false;
    clearTimeout(timer);
  }, 100);
};
<\/script>
`,C=`<template>
  <t-row class="t-skeleton-demo">
    <t-col v-for="(theme, index) in themes" :key="\`theme-\${index}\`">
      <section class="t-skeleton-demo-card">
        <div class="header">
          {{ theme.label }}
        </div>
        <div class="content">
          <t-skeleton :theme="theme.value"></t-skeleton>
        </div>
      </section>
    </t-col>
  </t-row>
</template>

<script>
export default {
  data() {
    return {
      themes: [
        { label: '\u6587\u672C', value: 'text' },
        { label: '\u5934\u50CF', value: 'avatar' },
        { label: '\u6BB5\u843D', value: 'paragraph' },
        { label: '\u5934\u50CF\u63CF\u8FF0', value: 'avatar-text' },
        { label: '\u9009\u9879\u5361', value: 'tab' },
        { label: '\u6587\u7AE0', value: 'article' },
      ],
    };
  },
};
<\/script>
`,D=`<template>
  <t-row class="t-skeleton-demo">
    <t-col v-for="(theme, index) in themes" :key="\`theme-\${index}\`">
      <section class="t-skeleton-demo-card">
        <div class="header">
          {{ theme.label }}
        </div>
        <div class="content">
          <t-skeleton :theme="theme.value"></t-skeleton>
        </div>
      </section>
    </t-col>
  </t-row>
</template>

<script setup>
import { ref } from 'vue';

const themes = ref([
  {
    label: '\u6587\u672C',
    value: 'text',
  },
  {
    label: '\u5934\u50CF',
    value: 'avatar',
  },
  {
    label: '\u6BB5\u843D',
    value: 'paragraph',
  },
  {
    label: '\u5934\u50CF\u63CF\u8FF0',
    value: 'avatar-text',
  },
  {
    label: '\u9009\u9879\u5361',
    value: 'tab',
  },
  {
    label: '\u6587\u7AE0',
    value: 'article',
  },
]);
<\/script>
`,T=`<template>
  <t-space direction="vertical">
    <section class="t-skeleton-demo-card">
      <div class="header">\u7EC4\u5408\u6210\u7F51\u9875\u6548\u679C</div>
      <div class="content">
        <t-skeleton :rowCol="rowCol"></t-skeleton>
      </div>
    </section>

    <section class="t-skeleton-demo-card">
      <div class="header">\u7EC4\u5408\u6210\u5217\u8868\u6548\u679C</div>
      <div class="content">
        <ul class="t-skeleton-demo-list">
          <li v-for="i in 3" :key="i">
            <t-skeleton class="avatar" theme="avatar"></t-skeleton>
            <t-skeleton class="paragraph" theme="paragraph"></t-skeleton>
          </li>
        </ul>
      </div>
    </section>
  </t-space>
</template>

<script lang="jsx">
export default {
  data() {
    return {
      rowCol: [
        [1, 1, 1].map(() => ({
          type: 'rect',
          content: 'image',
          width: '33%',
          height: '180px',
        })),
        [
          {
            type: 'circle',
            size: '50px',
          },
          {
            type: 'rect',
            margin: '20px 0',
            width: '80%',
            height: '30px',
          },
          {
            type: 'rect',
            marginLeft: '20px',
            width: '80px',
            height: '30px',
            content: '\u786E\u5B9A',
          },
        ],
        1,
        1,
        { type: 'text', width: '70%', margin: '0 0 16px 0' },
        {
          type: 'rect',
          width: '100%',
          height: '300px',
          content: () => (
            <div class="row-col-content">
              <h3 class="row-col-content__header">\u6807\u9898</h3>
              <section class="row-col-content__content"> \u5185\u5BB9</section>
            </div>
          ),
        },
      ],
    };
  },
};
<\/script>

<style scoped lang="less">
.t-skeleton-demo {
  width: 100%;

  &-list {
    > li {
      display: flex;
      align-items: center;
      padding: 16px 0;
      .avatar {
        display: inline-block;
        line-height: 68px;
        margin-right: 16px;
      }
      .paragraph {
        display: inline-block;
        width: 90%;
      }
    }
  }
}
</style>
`,z=`<template>
  <t-space direction="vertical">
    <section class="t-skeleton-demo-card">
      <div class="header">\u7EC4\u5408\u6210\u7F51\u9875\u6548\u679C</div>
      <div class="content">
        <t-skeleton :rowCol="rowCol"></t-skeleton>
      </div>
    </section>

    <section class="t-skeleton-demo-card">
      <div class="header">\u7EC4\u5408\u6210\u5217\u8868\u6548\u679C</div>
      <div class="content">
        <ul class="t-skeleton-demo-list">
          <li v-for="i in 3" :key="i">
            <t-skeleton class="avatar" theme="avatar"></t-skeleton>
            <t-skeleton class="paragraph" theme="paragraph"></t-skeleton>
          </li>
        </ul>
      </div>
    </section>
  </t-space>
</template>

<script setup lang="jsx">
import { ref } from 'vue';

const rowCol = ref([
  [1, 1, 1].map(() => ({
    type: 'rect',
    content: 'image',
    width: '33%',
    height: '180px',
  })),
  [
    {
      type: 'circle',
      size: '50px',
    },
    {
      type: 'rect',
      margin: '20px 0',
      width: '80%',
      height: '30px',
    },
    {
      type: 'rect',
      marginLeft: '20px',
      width: '80px',
      height: '30px',
      content: '\u786E\u5B9A',
    },
  ],
  1,
  1,
  {
    type: 'text',
    width: '70%',
    margin: '0 0 16px 0',
  },
  {
    type: 'rect',
    width: '100%',
    height: '300px',
    content: () => (
      <div class="row-col-content">
        <h3 class="row-col-content__header">\u6807\u9898</h3>
        <section class="row-col-content__content"> \u5185\u5BB9</section>
      </div>
    ),
  },
]);
<\/script>

<style lang="less" scoped>
.t-skeleton-demo {
  width: 100%;

  &-list {
    > li {
      display: flex;
      align-items: center;
      padding: 16px 0;
      .avatar {
        display: inline-block;
        line-height: 68px;
        margin-right: 16px;
      }
      .paragraph {
        display: inline-block;
        width: 90%;
      }
    }
  }
}
</style>
`,h=[{name:"loading",type:"Boolean",defaultValue:!0,options:[]},{name:"theme",type:"enum",defaultValue:"text",options:[{label:"text",value:"text"},{label:"avatar",value:"avatar"},{label:"paragraph",value:"paragraph"},{label:"avatar-text",value:"avatar-text"},{label:"tab",value:"tab"},{label:"article",value:"article"}]}];const r={};r.setup=(n,t)=>{const e=s(h),a=[{label:"skeleton",value:"skeleton"}],l={skeleton:`
        <t-skeleton v-bind="configProps">
          <div class="t-skeleton-demo-paragraph">
            <p>
              \u9AA8\u67B6\u5C4F\u7EC4\u4EF6\uFF0C\u662F\u6307\u5F53\u7F51\u7EDC\u8F83\u6162\u65F6\uFF0C\u5728\u9875\u9762\u771F\u5B9E\u6570\u636E\u52A0\u8F7D\u4E4B\u524D\uFF0C\u7ED9\u7528\u6237\u5C55\u793A\u51FA\u9875\u9762\u7684\u5927\u81F4\u7ED3\u6784\u3002
              \u4E00\u65B9\u9762\u8BA9\u7528\u6237\u5BF9\u9875\u9762\u6709\u4E00\u5B9A\u7684\u5FC3\u7406\u9884\u671F\uFF0C\u53E6\u4E00\u65B9\u9762\u53EF\u4EE5\u6539\u5584\u957F\u671F\u505C\u7559\u5728\u7A7A\u767D\u5C4F\u7ED9\u7528\u6237\u5E26\u6765\u7684\u67AF\u71E5\u548C\u4E0D\u9002\u611F\u3002\u5B83\u53EF\u4EE5\u4E3A\u7528\u6237\u63D0\u4F9B\u66F4\u597D\u89C6\u89C9\u6548\u679C\u548C\u4F7F\u7528\u4F53\u9A8C\u3002
            </p>
          </div>
        </t-skeleton>
      `},o=s(`<template>${l[a[0].value].trim()}</template>`);function p(m){o.value=`<template>${l[m].trim()}</template>`}return{configList:e,panelList:a,usageCode:o,onPanelChange:p}};var c=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("base-usage",{attrs:{code:n.usageCode,"config-list":n.configList,"panel-list":n.panelList},on:{PanelChange:n.onPanelChange},scopedSlots:n._u([{key:"skeleton",fn:function(a){var l=a.configProps;return[e("t-skeleton",n._b({},"t-skeleton",l,!1),[e("div",{staticClass:"t-skeleton-demo-paragraph"},[e("p",[n._v(" \u9AA8\u67B6\u5C4F\u7EC4\u4EF6\uFF0C\u662F\u6307\u5F53\u7F51\u7EDC\u8F83\u6162\u65F6\uFF0C\u5728\u9875\u9762\u771F\u5B9E\u6570\u636E\u52A0\u8F7D\u4E4B\u524D\uFF0C\u7ED9\u7528\u6237\u5C55\u793A\u51FA\u9875\u9762\u7684\u5927\u81F4\u7ED3\u6784\u3002 \u4E00\u65B9\u9762\u8BA9\u7528\u6237\u5BF9\u9875\u9762\u6709\u4E00\u5B9A\u7684\u5FC3\u7406\u9884\u671F\uFF0C\u53E6\u4E00\u65B9\u9762\u53EF\u4EE5\u6539\u5584\u957F\u671F\u505C\u7559\u5728\u7A7A\u767D\u5C4F\u7ED9\u7528\u6237\u5E26\u6765\u7684\u67AF\u71E5\u548C\u4E0D\u9002\u611F\u3002\u5B83\u53EF\u4EE5\u4E3A\u7528\u6237\u63D0\u4F9B\u66F4\u597D\u89C6\u89C9\u6548\u679C\u548C\u4F7F\u7528\u4F53\u9A8C\u3002 ")])])])]}}])})},u=[];c._withStripped=!0;const i={};var d=v(r,c,u,!1,g,null,null,null);function g(n){for(let t in i)this[t]=i[t]}d.options.__file="../src/skeleton/_usage/index.vue";var $=function(){return d.exports}();export{x as D,$ as U,f as a,y as b,b as c,w as d,_ as e,C as f,D as g,T as h,z as i};
