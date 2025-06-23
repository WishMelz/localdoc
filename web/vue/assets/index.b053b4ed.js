import{Y as l,n as m}from"./index.663c003f.js";var x=`<template>
  <t-space>
    <t-loading></t-loading>
  </t-space>
</template>
`,b=`<template>
  <t-space>
    <t-loading></t-loading>
  </t-space>
</template>
`,y=`<template>
  <t-space :size="100">
    <!-- \u4F7F\u7528 props \u5B9E\u73B0\u81EA\u5B9A\u4E49 -->
    <t-loading text="\u9759\u6001\u6587\u5B57\u52A0\u8F7D\u4E2D..." :indicator="false"></t-loading>
    <!-- \u4F7F\u7528 props \u5B9E\u73B0\u81EA\u5B9A\u4E49 -->
    <t-loading :text="renderText" :indicator="false"></t-loading>
    <t-loading :indicator="false">
      <!-- \u4F7F\u7528\u63D2\u69FD\u5B9E\u73B0\u81EA\u5B9A\u4E49 -->
      <template #text>\u63D2\u69FD\u6587\u5B57\u52A0\u8F7D\u4E2D...</template>
    </t-loading>
  </t-space>
</template>
<script lang="jsx">
export default {
  name: 'TextLoading',
  methods: {
    renderText() {
      return <span>\u53D8\u91CF\u6587\u5B57\u52A0\u8F7D\u4E2D...</span>;
    },
  },
};
<\/script>
`,z=`<template>
  <t-space :size="100">
    <!-- \u4F7F\u7528 props \u5B9E\u73B0\u81EA\u5B9A\u4E49 -->
    <t-loading text="\u9759\u6001\u6587\u5B57\u52A0\u8F7D\u4E2D..." :indicator="false"></t-loading>
    <!-- \u4F7F\u7528 props \u5B9E\u73B0\u81EA\u5B9A\u4E49 -->
    <t-loading :text="renderText" :indicator="false"></t-loading>
    <t-loading :indicator="false">
      <!-- \u4F7F\u7528\u63D2\u69FD\u5B9E\u73B0\u81EA\u5B9A\u4E49 -->
      <template #text>\u63D2\u69FD\u6587\u5B57\u52A0\u8F7D\u4E2D...</template>
    </t-loading>
  </t-space>
</template>
<script setup lang="jsx">
const renderText = () => <span>\u53D8\u91CF\u6587\u5B57\u52A0\u8F7D\u4E2D...</span>;
<\/script>
`,w=`<template>
  <t-space>
    <t-loading text="\u52A0\u8F7D\u4E2D..." size="small"></t-loading>
  </t-space>
</template>
`,T=`<template>
  <t-space>
    <t-loading text="\u52A0\u8F7D\u4E2D..." size="small"></t-loading>
  </t-space>
</template>
`,L=`<template>
  <t-space direction="vertical" size="large">
    <div>
      <t-loading size="small" text="\u52A0\u8F7D\u4E2D(\u5C0F)..."></t-loading>
    </div>
    <div>
      <t-loading size="26px" text="\u52A0\u8F7D\u4E2D(size=26px)..."></t-loading>
    </div>
    <div>
      <t-loading size="medium" text="\u52A0\u8F7D\u4E2D(\u4E2D)..."></t-loading>
    </div>
    <div>
      <t-loading style="font-size: 46px" text="\u52A0\u8F7D\u4E2D(\u6837\u5F0F\u5B9A\u4E49)..."></t-loading>
    </div>
    <div>
      <t-loading size="large" text="\u52A0\u8F7D\u4E2D(\u5927)..."></t-loading>
    </div>
  </t-space>
</template>
`,S=`<template>
  <t-space direction="vertical" size="large">
    <div>
      <t-loading size="small" text="\u52A0\u8F7D\u4E2D(\u5C0F)..."></t-loading>
    </div>
    <div>
      <t-loading size="26px" text="\u52A0\u8F7D\u4E2D(size=26px)..."></t-loading>
    </div>
    <div>
      <t-loading size="medium" text="\u52A0\u8F7D\u4E2D(\u4E2D)..."></t-loading>
    </div>
    <div>
      <t-loading style="font-size: 46px" text="\u52A0\u8F7D\u4E2D(\u6837\u5F0F\u5B9A\u4E49)..."></t-loading>
    </div>
    <div>
      <t-loading size="large" text="\u52A0\u8F7D\u4E2D(\u5927)..."></t-loading>
    </div>
  </t-space>
</template>
`,C=`<template>
  <t-space size="large" direction="vertical">
    <t-space>
      <t-loading size="small" :loading="loading" showOverlay>
        <div>this is loading component</div>
        <div>this is loading component</div>
        <div>this is loading component</div>
        <div>this is loading component</div>
        <div>this is loading component</div>
      </t-loading>
    </t-space>
    <t-space :size="24">
      <t-button @click="loading = true" size="small">\u52A0\u8F7D\u4E2D</t-button>
      <t-button @click="loading = false" size="small">\u52A0\u8F7D\u5B8C\u6210</t-button>
    </t-space>
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
<style scoped></style>
`,_=`<template>
  <t-space size="large" direction="vertical">
    <t-space>
      <t-loading size="small" :loading="loading" showOverlay>
        <div>this is loading component</div>
        <div>this is loading component</div>
        <div>this is loading component</div>
        <div>this is loading component</div>
        <div>this is loading component</div>
      </t-loading>
    </t-space>
    <t-space :size="24">
      <t-button @click="loading = true" size="small">\u52A0\u8F7D\u4E2D</t-button>
      <t-button @click="loading = false" size="small">\u52A0\u8F7D\u5B8C\u6210</t-button>
    </t-space>
  </t-space>
</template>

<script setup>
import { ref } from 'vue';

const loading = ref(true);
<\/script>
`,D=`<template>
  <t-space direction="vertical">
    <t-space>
      <t-loading v-if="loading" :delay="delay" size="small"></t-loading>
      <div v-if="data">loading \u4F5C\u4E3A\u72EC\u7ACB\u5143\u7D20\uFF1A{{ data }}</div>
    </t-space>

    <div>
      <t-loading :loading="loading" :delay="delay" size="small" showOverlay>
        <div>{{ data ? \`loading \u4F5C\u4E3A\u5305\u88F9\u5143\u7D20\uFF1A\${data}\` : '' }}</div>
      </t-loading>
    </div>

    <t-space>
      <t-button @click="loadingData" size="small">\u5FEB\u901F\u91CD\u65B0\u52A0\u8F7D\u6570\u636E\uFF08\u65E0loading\uFF09</t-button>
      <t-button @click="() => loadingData(1000)" size="small">\u6162\u901F\u91CD\u65B0\u52A0\u8F7D\u6570\u636E</t-button>
    </t-space>
  </t-space>
</template>
<script>
export default {
  name: 'loadingBase',
  data() {
    return {
      loading: false,
      delay: 500,
      data: '',
    };
  },
  created() {
    this.loadingData();
  },
  methods: {
    loadingData(time) {
      this.loading = true;
      this.data = '';
      const timer = setTimeout(() => {
        this.loading = false;
        this.data = '\u6570\u636E\u52A0\u8F7D\u5B8C\u6210\uFF0C\u77ED\u65F6\u95F4\u7684\u6570\u636E\u52A0\u8F7D\u5E76\u672A\u51FA\u73B0 loading';
        clearTimeout(timer);
      }, time || 100);
    },
  },
};
<\/script>
`,P=`<template>
  <t-space direction="vertical">
    <t-space>
      <t-loading v-if="loading" :delay="delay" size="small"></t-loading>
      <div v-if="data">loading \u4F5C\u4E3A\u72EC\u7ACB\u5143\u7D20\uFF1A{{ data }}</div>
    </t-space>

    <div>
      <t-loading :loading="loading" :delay="delay" size="small" showOverlay>
        <div>{{ data ? \`loading \u4F5C\u4E3A\u5305\u88F9\u5143\u7D20\uFF1A\${data}\` : '' }}</div>
      </t-loading>
    </div>

    <t-space>
      <t-button @click="loadingData" size="small">\u5FEB\u901F\u91CD\u65B0\u52A0\u8F7D\u6570\u636E\uFF08\u65E0loading\uFF09</t-button>
      <t-button @click="() => loadingData(1000)" size="small">\u6162\u901F\u91CD\u65B0\u52A0\u8F7D\u6570\u636E</t-button>
    </t-space>
  </t-space>
</template>
<script setup>
import { onBeforeMount, ref } from 'vue';

const loading = ref(false);
const delay = ref(500);
const data = ref('');
const loadingData = (time) => {
  loading.value = true;
  data.value = '';
  const timer = setTimeout(() => {
    loading.value = false;
    data.value = '\u6570\u636E\u52A0\u8F7D\u5B8C\u6210\uFF0C\u77ED\u65F6\u95F4\u7684\u6570\u636E\u52A0\u8F7D\u5E76\u672A\u51FA\u73B0 loading';
    clearTimeout(timer);
  }, time || 100);
};
onBeforeMount(() => {
  loadingData();
});
<\/script>
`,k=`<template>
  <t-space>
    <t-loading :loading="loading" text="\u52A0\u8F7D\u4E2D..." fullscreen />
    <div>
      \u5168\u5C40\u52A0\u8F7D\u5F00\u5173\uFF08\u5F00\u542F\u52A0\u8F7D1\u79D2\u540E\u81EA\u52A8\u5F52\u4F4D\uFF09\uFF1A
      <t-switch v-model="loading"></t-switch>
    </div>
  </t-space>
</template>
<script>
export default {
  name: 'FullScreenLoading',
  data() {
    return {
      loading: false,
    };
  },
  watch: {
    loading(v) {
      if (v) {
        const timer = setTimeout(() => {
          this.loading = false;
          clearTimeout(timer);
        }, 1000);
      }
    },
  },
};
<\/script>
`,A=`<template>
  <t-space>
    <t-loading :loading="loading" text="\u52A0\u8F7D\u4E2D..." fullscreen />
    <div>
      \u5168\u5C40\u52A0\u8F7D\u5F00\u5173\uFF08\u5F00\u542F\u52A0\u8F7D1\u79D2\u540E\u81EA\u52A8\u5F52\u4F4D\uFF09\uFF1A
      <t-switch v-model="loading"></t-switch>
    </div>
  </t-space>
</template>
<script setup>
import { ref, watch } from 'vue';

const loading = ref(false);
watch(loading, (v) => {
  if (v) {
    const timer = setTimeout(() => {
      loading.value = false;
      clearTimeout(timer);
    }, 1000);
  }
});
<\/script>
`,F=`<template>
  <t-space direction="vertical">
    <div id="alice" class="loading-attach-demo__title">Hello, I'm Alice. I'm going to be a front-end developer.</div>
    <t-loading attach="#alice" size="small" :loading="loading"></t-loading>

    <t-switch v-model="loading" :customValue="[true, false]" :label="['\u663E\u793A', '\u9690\u85CF']" />
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
.loading-attach-demo__title {
  /** \`position: relative\` is required as a parent node */
  position: relative;
  width: 360px;
  height: 48px;
  line-height: 48px;
  text-align: center;
}
</style>
`,$=`<template>
  <t-space direction="vertical">
    <div id="alice" class="loading-attach-demo__title">Hello, I'm Alice. I'm going to be a front-end developer.</div>
    <t-loading attach="#alice" size="small" :loading="loading"></t-loading>

    <t-switch v-model="loading" :customValue="[true, false]" :label="['\u663E\u793A', '\u9690\u85CF']" />
  </t-space>
</template>

<script setup>
import { ref } from 'vue';

const loading = ref(true);
<\/script>

<style scoped>
.loading-attach-demo__title {
  /** \`position: relative\` is required as a parent node */
  position: relative;
  width: 360px;
  height: 48px;
  line-height: 48px;
  text-align: center;
}
</style>
`,O=`<template>
  <t-space direction="vertical">
    <div id="loading-service-demo" ref="content" class="loading-service-demo">Loading \u6302\u8F7D\u5BB9\u5668</div>

    <p>this.$loading({ attach: '#loading-service-demo', showOverlay: true })</p>
    <p>this.$loading(true)</p>
    <p>this.$loading({ fullscreen: true, attach: 'body', preventScrollThrough: false })</p>

    <t-space>
      <t-button @click="showAttach1" size="small" :disabled="attachLoading">\u63D2\u4EF6\u65B9\u5F0F\u52A0\u8F7D\uFF08\u5C40\u90E8\uFF09</t-button>
      <t-button @click="showFullScreen1" size="small">\u63D2\u4EF6\u65B9\u5F0F\u52A0\u8F7D\uFF08\u5168\u5C4F\uFF09</t-button>
      <t-button @click="showFullScrollScreen1" size="small">\u63D2\u4EF6\u65B9\u5F0F\u52A0\u8F7D\uFF08\u5168\u5C4F-\u6EDA\u52A8\u7A7F\u900F\uFF09</t-button>
    </t-space>

    <p>LoadingPlugin({ attach: '#loading-service-demo', showOverlay: true })</p>
    <p>LoadingPlugin(true)</p>
    <p>LoadingPlugin({ fullscreen: true, attach: 'body', preventScrollThrough: false })</p>

    <t-space>
      <t-button @click="showAttach2" size="small" :disabled="attachLoading">\u51FD\u6570\u65B9\u5F0F\u52A0\u8F7D\uFF08\u5C40\u90E8\uFF09</t-button>
      <t-button @click="showFullScreen2" size="small">\u51FD\u6570\u65B9\u5F0F\u52A0\u8F7D\uFF08\u5168\u5C4F\uFF09</t-button>
      <t-button @click="showFullScrollScreen2" size="small">\u51FD\u6570\u65B9\u5F0F\u52A0\u8F7D\uFF08\u5168\u5C4F-\u6EDA\u52A8\u7A7F\u900F\uFF09</t-button>
    </t-space>
  </t-space>
</template>
<script>
import { LoadingPlugin } from 'tdesign-vue';

export default {
  name: 'LoadingPlugin',
  data() {
    return {
      attachLoading: false,
    };
  },
  methods: {
    // \u63D2\u4EF6\u5F0F\uFF1A\u5C40\u90E8\u52A0\u8F7D\uFF0C\u5C40\u90E8\u52A0\u8F7D\u6A21\u5F0F\u6DFB\u52A0 attach="body" \u65E0\u6548
    showAttach1() {
      const loadingAttachInstance = this.$loading({
        attach: '#loading-service-demo',
        showOverlay: true,
        size: '20px',
      });
      this.attachLoading = true;
      const timer = setTimeout(() => {
        loadingAttachInstance.hide();
        this.attachLoading = false;
        clearTimeout(timer);
      }, 1000);
    },
    // \u63D2\u4EF6\u5F0F\uFF1A\u5168\u5C4F\u52A0\u8F7D\uFF0C\u9ED8\u8BA4\u9632\u6B62\u6EDA\u52A8\u7A7F\u900F
    showFullScreen1() {
      this.$loading(true);
      const timer = setTimeout(() => {
        this.$loading(false);
        clearTimeout(timer);
      }, 1000);
    },
    // \u63D2\u4EF6\u5F0F\uFF1A\u5168\u5C4F\u52A0\u8F7D\uFF0C\u5141\u8BB8\u6EDA\u52A8\u7A7F\u900F
    showFullScrollScreen1() {
      const instance = this.$loading({
        fullscreen: true,
        attach: 'body',
        preventScrollThrough: false,
      });
      const timer = setTimeout(() => {
        instance.hide();
        clearTimeout(timer);
      }, 1000);
    },

    // \u51FD\u6570\u5F0F\uFF1A\u5C40\u90E8\u52A0\u8F7D
    showAttach2() {
      const loadingAttachInstance = LoadingPlugin({
        attach: () => this.$refs.content,
        showOverlay: true,
        size: '20px',
      });
      this.attachLoading = true;
      const timer = setTimeout(() => {
        loadingAttachInstance.hide();
        this.attachLoading = false;
        clearTimeout(timer);
      }, 1000);
    },
    // \u51FD\u6570\u5F0F\uFF1A\u5168\u5C4F\u52A0\u8F7D\uFF0C\u9632\u6B62\u6EDA\u52A8\u7A7F\u900F
    showFullScreen2() {
      LoadingPlugin(true);
      const timer = setTimeout(() => {
        LoadingPlugin(false);
        clearTimeout(timer);
      }, 1000);
    },
    // \u51FD\u6570\u5F0F\uFF1A\u5168\u5C4F\u52A0\u8F7D\uFF0C\u5141\u8BB8\u6EDA\u52A8\u7A7F\u900F
    showFullScrollScreen2() {
      const instance = LoadingPlugin({
        fullscreen: true,
        attach: 'body',
        preventScrollThrough: false,
      });
      const timer = setTimeout(() => {
        instance.hide();
        clearTimeout(timer);
      }, 1000);
    },
  },
};
<\/script>

<style scoped>
.loading-service-demo {
  position: relative;
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px var(--component-border, #eee) solid;
}
</style>
`,I=`<template>
  <t-space direction="vertical">
    <div id="loading-service-demo" ref="content" class="loading-service-demo">Loading \u6302\u8F7D\u5BB9\u5668</div>

    <p>this.$loading({ attach: '#loading-service-demo', showOverlay: true })</p>
    <p>this.$loading(true)</p>
    <p>this.$loading({ fullscreen: true, attach: 'body', preventScrollThrough: false })</p>

    <t-space>
      <t-button @click="showAttach1" size="small" :disabled="attachLoading">\u63D2\u4EF6\u65B9\u5F0F\u52A0\u8F7D\uFF08\u5C40\u90E8\uFF09</t-button>
      <t-button @click="showFullScreen1" size="small">\u63D2\u4EF6\u65B9\u5F0F\u52A0\u8F7D\uFF08\u5168\u5C4F\uFF09</t-button>
      <t-button @click="showFullScrollScreen1" size="small">\u63D2\u4EF6\u65B9\u5F0F\u52A0\u8F7D\uFF08\u5168\u5C4F-\u6EDA\u52A8\u7A7F\u900F\uFF09</t-button>
    </t-space>

    <p>LoadingPlugin({ attach: '#loading-service-demo', showOverlay: true })</p>
    <p>LoadingPlugin(true)</p>
    <p>LoadingPlugin({ fullscreen: true, attach: 'body', preventScrollThrough: false })</p>

    <t-space>
      <t-button @click="showAttach2" size="small" :disabled="attachLoading">\u51FD\u6570\u65B9\u5F0F\u52A0\u8F7D\uFF08\u5C40\u90E8\uFF09</t-button>
      <t-button @click="showFullScreen2" size="small">\u51FD\u6570\u65B9\u5F0F\u52A0\u8F7D\uFF08\u5168\u5C4F\uFF09</t-button>
      <t-button @click="showFullScrollScreen2" size="small">\u51FD\u6570\u65B9\u5F0F\u52A0\u8F7D\uFF08\u5168\u5C4F-\u6EDA\u52A8\u7A7F\u900F\uFF09</t-button>
    </t-space>
  </t-space>
</template>
<script setup>
import { ref } from 'vue';
import { LoadingPlugin } from 'tdesign-vue';

const content = ref();
const attachLoading = ref(false);
// \u63D2\u4EF6\u5F0F\uFF1A\u5C40\u90E8\u52A0\u8F7D\uFF0C\u5C40\u90E8\u52A0\u8F7D\u6A21\u5F0F\u6DFB\u52A0 attach="body" \u65E0\u6548
const showAttach1 = () => {
  const loadingAttachInstance = LoadingPlugin({
    attach: '#loading-service-demo',
    showOverlay: true,
    size: '20px',
  });
  attachLoading.value = true;
  const timer = setTimeout(() => {
    loadingAttachInstance.hide();
    attachLoading.value = false;
    clearTimeout(timer);
  }, 1000);
};
// \u63D2\u4EF6\u5F0F\uFF1A\u5168\u5C4F\u52A0\u8F7D\uFF0C\u9ED8\u8BA4\u9632\u6B62\u6EDA\u52A8\u7A7F\u900F
const showFullScreen1 = () => {
  LoadingPlugin(true);
  const timer = setTimeout(() => {
    LoadingPlugin(false);
    clearTimeout(timer);
  }, 1000);
};
// \u63D2\u4EF6\u5F0F\uFF1A\u5168\u5C4F\u52A0\u8F7D\uFF0C\u5141\u8BB8\u6EDA\u52A8\u7A7F\u900F
const showFullScrollScreen1 = () => {
  const instance = LoadingPlugin({
    fullscreen: true,
    attach: 'body',
    preventScrollThrough: false,
  });
  const timer = setTimeout(() => {
    instance.hide();
    clearTimeout(timer);
  }, 1000);
};
// \u51FD\u6570\u5F0F\uFF1A\u5C40\u90E8\u52A0\u8F7D
const showAttach2 = () => {
  const loadingAttachInstance = LoadingPlugin({
    attach: () => content.value,
    showOverlay: true,
    size: '20px',
  });
  attachLoading.value = true;
  const timer = setTimeout(() => {
    loadingAttachInstance.hide();
    attachLoading.value = false;
    clearTimeout(timer);
  }, 1000);
};
// \u51FD\u6570\u5F0F\uFF1A\u5168\u5C4F\u52A0\u8F7D\uFF0C\u9632\u6B62\u6EDA\u52A8\u7A7F\u900F
const showFullScreen2 = () => {
  LoadingPlugin(true);
  const timer = setTimeout(() => {
    LoadingPlugin(false);
    clearTimeout(timer);
  }, 1000);
};
// \u51FD\u6570\u5F0F\uFF1A\u5168\u5C4F\u52A0\u8F7D\uFF0C\u5141\u8BB8\u6EDA\u52A8\u7A7F\u900F
const showFullScrollScreen2 = () => {
  const instance = LoadingPlugin({
    fullscreen: true,
    attach: 'body',
    preventScrollThrough: false,
  });
  const timer = setTimeout(() => {
    instance.hide();
    clearTimeout(timer);
  }, 1000);
};
<\/script>

<style scoped>
.loading-service-demo {
  position: relative;
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px var(--component-border, #eee) solid;
}
</style>
`,u=[{name:"fullscreen",type:"Boolean",defaultValue:!1,options:[]},{name:"indicator",type:"Boolean",defaultValue:!0,options:[]},{name:"inheritColor",type:"Boolean",defaultValue:!1,options:[]},{name:"loading",type:"Boolean",defaultValue:!0,options:[]},{name:"preventScrollThrough",type:"Boolean",defaultValue:!0,options:[]},{name:"showOverlay",type:"Boolean",defaultValue:!0,options:[]}];const d={};d.setup=(n,t)=>{const e=l(u),a=[{label:"loading",value:"loading"}],i={loading:'<t-loading v-bind="configProps" />'},o=l(`<template>${i[a[0].value].trim()}</template>`);function p(g){o.value=`<template>${i[g].trim()}</template>`}return{configList:e,panelList:a,usageCode:o,onPanelChange:p}};var c=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("base-usage",{attrs:{code:n.usageCode,"config-list":n.configList,"panel-list":n.panelList},on:{PanelChange:n.onPanelChange},scopedSlots:n._u([{key:"loading",fn:function(a){var i=a.configProps;return[e("t-loading",n._b({},"t-loading",i,!1))]}}])})},h=[];c._withStripped=!0;const s={};var r=m(d,c,h,!1,v,null,null,null);function v(n){for(let t in s)this[t]=s[t]}r.options.__file="../src/loading/_usage/index.vue";var B=function(){return r.exports}();export{x as D,B as U,b as a,y as b,z as c,w as d,T as e,L as f,S as g,C as h,_ as i,D as j,P as k,k as l,A as m,F as n,$ as o,O as p,I as q};
