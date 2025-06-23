import{Y as s,n as d}from"./index.663c003f.js";var f=`<template>
  <t-space :breakLine="true" :size="16">
    <t-space v-for="item in mode" direction="vertical" align="start" :key="item">
      <t-image
        src="https://tdesign.gtimg.com/demo/demo-image-1.png"
        :fit="item"
        :style="{ width: '120px', height: '120px' }"
      />
      <span>{{ item }}</span>
    </t-space>
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      mode: ['fill', 'contain', 'cover', 'none', 'scale-down'],
    };
  },
};
<\/script>
`,y=`<template>
  <t-space :breakLine="true" :size="16">
    <t-space v-for="item in mode" direction="vertical" align="start" :key="item">
      <t-image
        src="https://tdesign.gtimg.com/demo/demo-image-1.png"
        :fit="item"
        :style="{ width: '120px', height: '120px' }"
      />
      <span>{{ item }}</span>
    </t-space>
  </t-space>
</template>

<script setup>
import { ref } from 'vue';

const mode = ref(['fill', 'contain', 'cover', 'none', 'scale-down']);
<\/script>
`,b=`<template>
  <t-space direction="vertical" :style="{ width: '100%' }">
    <t-space breakLine>
      <t-space direction="vertical" align="start">
        <t-image
          src="https://tdesign.gtimg.com/demo/demo-image-1.png"
          fit="cover"
          position="center"
          :style="{ width: '120px', height: '120px' }"
        />
        <span>cover center</span>
      </t-space>
      <t-space direction="vertical" align="start">
        <t-image
          src="https://tdesign.gtimg.com/demo/demo-image-1.png"
          fit="cover"
          :style="{ width: '120px', height: '120px' }"
          position="left"
        />
        <span>cover left</span>
      </t-space>
      <t-space direction="vertical" align="start">
        <t-image
          src="https://tdesign.gtimg.com/demo/demo-image-1.png"
          fit="cover"
          :style="{ width: '120px', height: '120px' }"
          position="right"
        />
        <span>cover right</span>
      </t-space>
    </t-space>
    <t-space :style="{ marginTop: 20 }" breakLine>
      <t-space direction="vertical" align="start">
        <t-image
          src="https://tdesign.gtimg.com/demo/demo-image-1.png"
          fit="cover"
          :style="{ width: '280px', height: '120px' }"
          position="top"
        />
        <span>cover top</span>
      </t-space>
      <t-space direction="vertical" align="start">
        <t-image
          src="https://tdesign.gtimg.com/demo/demo-image-1.png"
          fit="cover"
          :style="{ width: '280px', height: '120px' }"
          position="bottom"
        />
        <span>cover bottom</span>
      </t-space>
    </t-space>
    <t-space :style="{ marginTop: 20 }" breakLine>
      <t-space direction="vertical" align="start">
        <t-image
          src="https://tdesign.gtimg.com/demo/demo-image-1.png"
          fit="contain"
          :style="{ width: '120px', height: '200px' }"
          position="top"
        />
        <span>contain top</span>
      </t-space>
      <t-space direction="vertical" align="start">
        <t-image
          src="https://tdesign.gtimg.com/demo/demo-image-1.png"
          fit="contain"
          :style="{ width: '120px', height: '200px' }"
          position="bottom"
        />
        <span>contain bottom</span>
      </t-space>
      <t-space direction="vertical" align="start">
        <t-image
          src="https://tdesign.gtimg.com/demo/demo-image-1.png"
          fit="contain"
          :style="{ width: '120px', height: '200px' }"
          position="center"
        />
        <span>contain center</span>
      </t-space>
      <t-space :style="{ marginTop: 20 }" breakLine>
        <t-space direction="vertical" align="start">
          <t-image
            src="https://tdesign.gtimg.com/demo/demo-image-1.png"
            fit="contain"
            :style="{ width: '280px', height: '120px' }"
            position="left"
          />
          <span>contain left</span>
        </t-space>
        <t-space direction="vertical" align="start">
          <t-image
            src="https://tdesign.gtimg.com/demo/demo-image-1.png"
            fit="contain"
            :style="{ width: '280px', height: '120px' }"
            position="right"
          />
          <span>contain right</span>
        </t-space>
      </t-space>
    </t-space>
  </t-space>
</template>
`,C=`<template>
  <t-space direction="vertical" :style="{ width: '100%' }">
    <t-space breakLine>
      <t-space direction="vertical" align="start">
        <t-image
          src="https://tdesign.gtimg.com/demo/demo-image-1.png"
          fit="cover"
          position="center"
          :style="{ width: '120px', height: '120px' }"
        />
        <span>cover center</span>
      </t-space>
      <t-space direction="vertical" align="start">
        <t-image
          src="https://tdesign.gtimg.com/demo/demo-image-1.png"
          fit="cover"
          :style="{ width: '120px', height: '120px' }"
          position="left"
        />
        <span>cover left</span>
      </t-space>
      <t-space direction="vertical" align="start">
        <t-image
          src="https://tdesign.gtimg.com/demo/demo-image-1.png"
          fit="cover"
          :style="{ width: '120px', height: '120px' }"
          position="right"
        />
        <span>cover right</span>
      </t-space>
    </t-space>
    <t-space :style="{ marginTop: 20 }" breakLine>
      <t-space direction="vertical" align="start">
        <t-image
          src="https://tdesign.gtimg.com/demo/demo-image-1.png"
          fit="cover"
          :style="{ width: '280px', height: '120px' }"
          position="top"
        />
        <span>cover top</span>
      </t-space>
      <t-space direction="vertical" align="start">
        <t-image
          src="https://tdesign.gtimg.com/demo/demo-image-1.png"
          fit="cover"
          :style="{ width: '280px', height: '120px' }"
          position="bottom"
        />
        <span>cover bottom</span>
      </t-space>
    </t-space>
    <t-space :style="{ marginTop: 20 }" breakLine>
      <t-space direction="vertical" align="start">
        <t-image
          src="https://tdesign.gtimg.com/demo/demo-image-1.png"
          fit="contain"
          :style="{ width: '120px', height: '200px' }"
          position="top"
        />
        <span>contain top</span>
      </t-space>
      <t-space direction="vertical" align="start">
        <t-image
          src="https://tdesign.gtimg.com/demo/demo-image-1.png"
          fit="contain"
          :style="{ width: '120px', height: '200px' }"
          position="bottom"
        />
        <span>contain bottom</span>
      </t-space>
      <t-space direction="vertical" align="start">
        <t-image
          src="https://tdesign.gtimg.com/demo/demo-image-1.png"
          fit="contain"
          :style="{ width: '120px', height: '200px' }"
          position="center"
        />
        <span>contain center</span>
      </t-space>
      <t-space :style="{ marginTop: 20 }" breakLine>
        <t-space direction="vertical" align="start">
          <t-image
            src="https://tdesign.gtimg.com/demo/demo-image-1.png"
            fit="contain"
            :style="{ width: '280px', height: '120px' }"
            position="left"
          />
          <span>contain left</span>
        </t-space>
        <t-space direction="vertical" align="start">
          <t-image
            src="https://tdesign.gtimg.com/demo/demo-image-1.png"
            fit="contain"
            :style="{ width: '280px', height: '120px' }"
            position="right"
          />
          <span>contain right</span>
        </t-space>
      </t-space>
    </t-space>
  </t-space>
</template>
`,w=`<template>
  <t-space>
    <t-space direction="vertical" align="center">
      <t-image
        src="https://tdesign.gtimg.com/demo/demo-image-1.png"
        shape="square"
        :style="{ width: '160px', height: '160px' }"
        fit="cover"
      />
      <span>square</span>
    </t-space>
    <t-space direction="vertical" align="center">
      <t-image
        src="https://tdesign.gtimg.com/demo/demo-image-1.png"
        :style="{ width: '160px', height: '160px' }"
        fit="cover"
        shape="round"
      />
      <span>round</span>
    </t-space>
    <t-space direction="vertical" align="center">
      <t-image
        src="https://tdesign.gtimg.com/demo/demo-image-1.png"
        :style="{ width: '160px', height: '160px' }"
        shape="circle"
        fit="cover"
      />
      <span>circle</span>
    </t-space>
  </t-space>
</template>
`,k=`<template>
  <t-space>
    <t-space direction="vertical" align="center">
      <t-image
        src="https://tdesign.gtimg.com/demo/demo-image-1.png"
        shape="square"
        :style="{ width: '160px', height: '160px' }"
        fit="cover"
      />
      <span>square</span>
    </t-space>
    <t-space direction="vertical" align="center">
      <t-image
        src="https://tdesign.gtimg.com/demo/demo-image-1.png"
        :style="{ width: '160px', height: '160px' }"
        fit="cover"
        shape="round"
      />
      <span>round</span>
    </t-space>
    <t-space direction="vertical" align="center">
      <t-image
        src="https://tdesign.gtimg.com/demo/demo-image-1.png"
        :style="{ width: '160px', height: '160px' }"
        shape="circle"
        fit="cover"
      />
      <span>circle</span>
    </t-space>
  </t-space>
</template>
`,I=`<template>
  <t-image
    src="https://tdesign.gtimg.com/demo/demo-image-1.png"
    :style="{ width: '284px', height: '160px' }"
    :gallery="true"
    :overlayContent="label"
  />
</template>

<script lang="jsx">
import { Tag } from 'tdesign-vue';

export default {
  data() {
    return {
      // overlayContent \u652F\u6301\u63D2\u69FD
      // eslint-disable-next-line
      label: (h) => (
        <Tag
          shape="mark"
          theme="warning"
          style={{
            margin: '8px',
            borderRadius: '3px',
            background: 'rgba(236,242,254,1)',
            color: 'rgba(0,82,217,1)',
          }}
        >
          \u6807\u7B7E\u4E00
        </Tag>
      ),
    };
  },
  methods: {},
};
<\/script>
`,z=`<template>
  <t-image
    src="https://tdesign.gtimg.com/demo/demo-image-1.png"
    :style="{ width: '284px', height: '160px' }"
    :gallery="true"
    :overlayContent="label"
  />
</template>

<script setup lang="jsx">
import { ref } from 'vue';
import { Tag } from 'tdesign-vue';
// overlayContent \u652F\u6301\u63D2\u69FD
// eslint-disable-next-line
const label = ref((h) => (
  <Tag
    shape="mark"
    theme="warning"
    style={{
      margin: '8px',
      borderRadius: '3px',
      background: 'rgba(236,242,254,1)',
      color: 'rgba(0,82,217,1)',
    }}
  >
    \u6807\u7B7E\u4E00
  </Tag>
));
<\/script>
`,T=`<template>
  <div>
    <t-space :size="24" direction="vertical">
      <div>
        <h3 :style="{ 'margin-bottom': '15px' }">\u52A0\u8F7D\u4E2D\u7684\u56FE\u7247</h3>
        <t-space>
          <t-space direction="vertical">
            <span>\u9ED8\u8BA4\u5360\u4F4D</span>
            <t-image
              src="https://tdesign.gtimg.com/demo/demo-image-1.png"
              :key="loadingCount"
              :style="{ width: '284px', height: '160px' }"
            />
            <t-button variant="outline" @click="loadingCount = loadingCount + 3">
              <template #icon><refresh-icon /></template>
              \u91CD\u6F14 loading
            </t-button>
          </t-space>

          <t-space direction="vertical">
            <span>\u81EA\u5B9A\u4E49\u5360\u4F4D</span>
            <t-image
              :key="loadingCount"
              src="https://tdesign.gtimg.com/demo/demo-image-1.png"
              :style="{ width: '284px', height: '160px' }"
            >
              <template #loading>
                <qrcode-icon />
              </template>
            </t-image>
          </t-space>
        </t-space>
      </div>
      <div>
        <h3 :style="{ 'margin-bottom': '15px' }">\u52A0\u8F7D\u5931\u8D25\u7684\u56FE\u7247</h3>
        <t-space>
          <t-space direction="vertical">
            <span>\u9ED8\u8BA4\u9519\u8BEF</span>
            <t-image src="" :key="errorCount" :style="{ width: '284px', height: '160px' }" />

            <t-button variant="outline" @click="errorCount = errorCount + 3">
              <template #icon><refresh-icon /></template>
              \u91CD\u6F14 error
            </t-button>
          </t-space>

          <t-space direction="vertical">
            <span>\u81EA\u5B9A\u4E49\u9519\u8BEF</span>
            <t-image
              src=""
              :key="errorCount"
              :style="{ width: '284px', height: '160px' }"
              :error="renderErrorContent"
            />
          </t-space>
        </t-space>
      </div>
    </t-space>
  </div>
</template>

<script lang="jsx">
import { RefreshIcon, ImageErrorIcon, QrcodeIcon } from 'tdesign-icons-vue';

export default {
  components: { RefreshIcon, QrcodeIcon },
  data() {
    return {
      loadingCount: 0,
      errorCount: 0,
    };
  },
  methods: {
    renderErrorContent() {
      return <ImageErrorIcon size="24" />;
    },
  },
};
<\/script>
`,_=`<template>
  <div>
    <t-space :size="24" direction="vertical">
      <div>
        <h3 :style="{ 'margin-bottom': '15px' }">\u52A0\u8F7D\u4E2D\u7684\u56FE\u7247</h3>
        <t-space>
          <t-space direction="vertical">
            <span>\u9ED8\u8BA4\u5360\u4F4D</span>
            <t-image
              src="https://tdesign.gtimg.com/demo/demo-image-1.png"
              :key="loadingCount"
              :style="{ width: '284px', height: '160px' }"
            />
            <t-button variant="outline" @click="loadingCount = loadingCount + 3">
              <template #icon><refresh-icon /></template>
              \u91CD\u6F14 loading
            </t-button>
          </t-space>

          <t-space direction="vertical">
            <span>\u81EA\u5B9A\u4E49\u5360\u4F4D</span>
            <t-image
              :key="loadingCount"
              src="https://tdesign.gtimg.com/demo/demo-image-1.png"
              :style="{ width: '284px', height: '160px' }"
            >
              <template #loading>
                <qrcode-icon />
              </template>
            </t-image>
          </t-space>
        </t-space>
      </div>
      <div>
        <h3 :style="{ 'margin-bottom': '15px' }">\u52A0\u8F7D\u5931\u8D25\u7684\u56FE\u7247</h3>
        <t-space>
          <t-space direction="vertical">
            <span>\u9ED8\u8BA4\u9519\u8BEF</span>
            <t-image src="" :key="errorCount" :style="{ width: '284px', height: '160px' }" />

            <t-button variant="outline" @click="errorCount = errorCount + 3">
              <template #icon><refresh-icon /></template>
              \u91CD\u6F14 error
            </t-button>
          </t-space>

          <t-space direction="vertical">
            <span>\u81EA\u5B9A\u4E49\u9519\u8BEF</span>
            <t-image
              src=""
              :key="errorCount"
              :style="{ width: '284px', height: '160px' }"
              :error="renderErrorContent"
            />
          </t-space>
        </t-space>
      </div>
    </t-space>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue';
import { RefreshIcon, ImageErrorIcon, QrcodeIcon } from 'tdesign-icons-vue';

const loadingCount = ref(0);
const errorCount = ref(0);
const renderErrorContent = () => <ImageErrorIcon size="24" />;
<\/script>
`,L=`<template>
  <t-space direction="vertical">
    <t-image
      src="https://tdesign.gtimg.com/demo/demo-image-1.png"
      :style="{ width: '284px', height: '160px' }"
      :lazy="true"
      :placeholder="renderPlaceholder"
      :loading="renderLoading"
      :key="loadingCount"
    />
    <t-button variant="outline" :icon="renderRefreshIcon" @click="loadingCount = loadingCount + 1">
      \u91CD\u6F14 lazy load
    </t-button>
  </t-space>
</template>

<script lang="jsx">
import { RefreshIcon } from 'tdesign-icons-vue';
import { Loading } from 'tdesign-vue';

export default {
  data() {
    return {
      loadingCount: 0,

      // renderPlaceholder \u652F\u6301\u63D2\u69FD
      // eslint-disable-next-line
      renderPlaceholder: (h) => (
        <img width="100%" height="100%" src="https://tdesign.gtimg.com/demo/demo-image-5.png" />
      ),

      // renderLoading \u652F\u6301\u63D2\u69FD
      // eslint-disable-next-line
      renderLoading: (h) => (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            background: 'rgba(255,255,255,.4)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <Loading
            delay={0}
            fullscreen={false}
            indicator
            inheritColor={false}
            loading
            preventScrollThrough
            showOverlay
            size="small"
          />
        </div>
      ),
    };
  },
  methods: {
    renderRefreshIcon() {
      return <RefreshIcon />;
    },
  },
};
<\/script>
`,R=`<template>
  <t-space direction="vertical">
    <t-image
      src="https://tdesign.gtimg.com/demo/demo-image-1.png"
      :style="{ width: '284px', height: '160px' }"
      :lazy="true"
      :placeholder="renderPlaceholder"
      :loading="renderLoading"
      :key="loadingCount"
    />
    <t-button variant="outline" :icon="renderRefreshIcon" @click="loadingCount = loadingCount + 1">
      \u91CD\u6F14 lazy load
    </t-button>
  </t-space>
</template>

<script setup lang="jsx">
import { ref } from 'vue';
import { RefreshIcon } from 'tdesign-icons-vue';
import { Loading } from 'tdesign-vue';

const loadingCount = ref(0);
// renderPlaceholder \u652F\u6301\u63D2\u69FD
// eslint-disable-next-line
const renderPlaceholder = ref((h) => (
  <img width="100%" height="100%" src="https://tdesign.gtimg.com/demo/demo-image-5.png" />
));
// renderLoading \u652F\u6301\u63D2\u69FD
// eslint-disable-next-line
const renderLoading = ref((h) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      background: 'rgba(255,255,255,.4)',
      backdropFilter: 'blur(10px)',
    }}
  >
    <Loading
      delay={0}
      fullscreen={false}
      indicator
      inheritColor={false}
      loading
      preventScrollThrough
      showOverlay
      size="small"
    />
  </div>
));
const renderRefreshIcon = () => <RefreshIcon />;
<\/script>
`,D=`<template>
  <t-space direction="vertical" :key="loadingCount">
    <t-space :breakLine="true" :style="{ height: '240px', 'overflow-y': 'scroll' }">
      <t-image
        v-for="item in list"
        :key="item"
        src="https://tdesign.gtimg.com/demo/demo-image-1.png"
        :style="{ width: '230px', height: '120px' }"
        :lazy="true"
      />
    </t-space>
    <t-button variant="outline" :icon="renderRefreshIcon" @click="loadingCount = loadingCount + 1">
      \u91CD\u6F14 lazy load
    </t-button>
  </t-space>
</template>

<script lang="jsx">
import { RefreshIcon } from 'tdesign-icons-vue';

export default {
  data() {
    return {
      loadingCount: 0,
      list: Array.from({ length: 24 }).map((_, index) => index),
    };
  },
  methods: {
    renderRefreshIcon() {
      return <RefreshIcon />;
    },
  },
};
<\/script>
`,j=`<template>
  <t-space direction="vertical" :key="loadingCount">
    <t-space :breakLine="true" :style="{ height: '240px', 'overflow-y': 'scroll' }">
      <t-image
        v-for="item in list"
        :key="item"
        src="https://tdesign.gtimg.com/demo/demo-image-1.png"
        :style="{ width: '230px', height: '120px' }"
        :lazy="true"
      />
    </t-space>
    <t-button variant="outline" :icon="renderRefreshIcon" @click="loadingCount = loadingCount + 1">
      \u91CD\u6F14 lazy load
    </t-button>
  </t-space>
</template>

<script setup lang="jsx">
import { ref } from 'vue';
import { RefreshIcon } from 'tdesign-icons-vue';

const loadingCount = ref(0);
const list = ref(
  Array.from({
    length: 24,
  }).map((_, index) => index),
);
const renderRefreshIcon = () => <RefreshIcon />;
<\/script>
`,P=`<template>
  <t-space :size="32">
    <t-space direction="vertical">
      <strong :style="{ fontSize: '20px' }">\u6709\u906E\u7F69</strong>
      <t-image :src="src" :style="{ width: '284px', height: '160px' }" :overlayContent="renderMask" />
    </t-space>
    <t-space direction="vertical">
      <strong :style="{ fontSize: '20px' }">\u65E0\u906E\u7F69</strong>
      <t-image
        src="https://tdesign.gtimg.com/demo/demo-image-1.png"
        :style="{ width: '284px', height: '160px' }"
        :overlayContent="renderButton"
      />
    </t-space>
  </t-space>
</template>

<script lang="jsx">
import { PrintIcon } from 'tdesign-icons-vue';
import { Tag } from 'tdesign-vue';

export default {
  data() {
    return {
      src: '',
      // renderMask \u652F\u6301\u63D2\u69FD
      // eslint-disable-next-line
      renderMask: (h) => (
        <div
          style={{
            background: 'rgba(0,0,0,.4)',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '14px',
            lineHeight: '22px',
          }}
        >
          <Tag
            shape="mark"
            theme="warning"
            style={{
              borderRadius: '3px',
              background: 'transparent',
              color: '#fff',
            }}
          >
            <PrintIcon size="16" /> \u9AD8\u6E05
          </Tag>
        </div>
      ),
      // renderButton \u652F\u6301\u63D2\u69FD
      // eslint-disable-next-line
      renderButton: (h) => (
        <Tag
          shape="mark"
          theme="warning"
          style={{
            position: 'absolute',
            right: '8px',
            bottom: '8px',
            borderRadius: '3px',
            background: 'rgba(236,242,254,1)',
            color: 'rgba(0,82,217,1)',
          }}
        >
          <PrintIcon size="16" /> \u9AD8\u6E05
        </Tag>
      ),
    };
  },
  created() {
    const timer = setTimeout(() => {
      this.src = 'https://tdesign.gtimg.com/demo/demo-image-1.png';
      clearTimeout(timer);
    }, 100);
  },
  methods: {},
};
<\/script>
`,M=`<template>
  <t-space :size="32">
    <t-space direction="vertical">
      <strong :style="{ fontSize: '20px' }">\u6709\u906E\u7F69</strong>
      <t-image :src="src" :style="{ width: '284px', height: '160px' }" :overlayContent="renderMask" />
    </t-space>
    <t-space direction="vertical">
      <strong :style="{ fontSize: '20px' }">\u65E0\u906E\u7F69</strong>
      <t-image
        src="https://tdesign.gtimg.com/demo/demo-image-1.png"
        :style="{ width: '284px', height: '160px' }"
        :overlayContent="renderButton"
      />
    </t-space>
  </t-space>
</template>

<script setup lang="jsx">
import { onBeforeMount, ref } from 'vue';
import { PrintIcon } from 'tdesign-icons-vue';
import { Tag } from 'tdesign-vue';

const src = ref('');
// renderMask \u652F\u6301\u63D2\u69FD
// eslint-disable-next-line
const renderMask = ref((h) => (
  <div
    style={{
      background: 'rgba(0,0,0,.4)',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '14px',
      lineHeight: '22px',
    }}
  >
    <Tag
      shape="mark"
      theme="warning"
      style={{
        borderRadius: '3px',
        background: 'transparent',
        color: '#fff',
      }}
    >
      <PrintIcon size="16" /> \u9AD8\u6E05
    </Tag>
  </div>
));
// renderButton \u652F\u6301\u63D2\u69FD
// eslint-disable-next-line
const renderButton = ref((h) => (
  <Tag
    shape="mark"
    theme="warning"
    style={{
      position: 'absolute',
      right: '8px',
      bottom: '8px',
      borderRadius: '3px',
      background: 'rgba(236,242,254,1)',
      color: 'rgba(0,82,217,1)',
    }}
  >
    <PrintIcon size="16" /> \u9AD8\u6E05
  </Tag>
));
onBeforeMount(() => {
  const timer = setTimeout(() => {
    src.value = 'https://tdesign.gtimg.com/demo/demo-image-1.png';
    clearTimeout(timer);
  }, 100);
});
<\/script>
`,S=`<template>
  <t-image
    src="https://tdesign.gtimg.com/demo/demo-image-1.png"
    :style="{ width: '284px', height: '160px' }"
    :overlayContent="renderMask"
    overlayTrigger="hover"
  />
</template>

<script lang="jsx">
export default {
  data() {
    return {
      // renderMask \u652F\u6301\u63D2\u69FD
      // eslint-disable-next-line
      renderMask: (h) => (
        <div
          style={{
            background: 'rgba(0,0,0,.4)',
            color: '#fff',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          \u9884\u89C8
        </div>
      ),
    };
  },
  methods: {},
};
<\/script>
`,q=`<template>
  <t-image
    src="https://tdesign.gtimg.com/demo/demo-image-1.png"
    :style="{ width: '284px', height: '160px' }"
    :overlayContent="renderMask"
    overlayTrigger="hover"
  />
</template>

<script setup lang="jsx">
import { ref } from 'vue';
// renderMask \u652F\u6301\u63D2\u69FD
// eslint-disable-next-line
const renderMask = ref((h) => (
  <div
    style={{
      background: 'rgba(0,0,0,.4)',
      color: '#fff',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    \u9884\u89C8
  </div>
));
<\/script>
`,E=`<template>
  <t-space direction="vertical" align="center">
    <t-image
      src="https://tdesign.gtimg.com/demo/demo-image-1.png"
      :srcset="{
        'image/avif': 'https://tdesign.gtimg.com/img/tdesign-image.avif',
        'image/webp': 'https://tdesign.gtimg.com/img/tdesign-image.webp',
      }"
      shape="square"
      :style="{ maxWidth: '100%' }"
      fit="scale-down"
    />
    <span>.avif / .webp</span>
  </t-space>
</template>
`,B=`<template>
  <t-space direction="vertical" align="center">
    <t-image
      src="https://tdesign.gtimg.com/demo/demo-image-1.png"
      :srcset="{
        'image/avif': 'https://tdesign.gtimg.com/img/tdesign-image.avif',
        'image/webp': 'https://tdesign.gtimg.com/img/tdesign-image.webp',
      }"
      shape="square"
      :style="{ maxWidth: '100%' }"
      fit="scale-down"
    />
    <span>.avif / .webp</span>
  </t-space>
</template>
`,h=[];const p={};p.setup=(n,e)=>{const t=s(h),i=[{label:"image",value:"image"}],a={image:`
        <t-image v-bind="configProps" src="https://tdesign.gtimg.com/demo/demo-image-1.png" fit="cover" :style="{ width: '120px', height: '120px' }" />
      `},o=s(`<template>${a[i[0].value].trim()}</template>`);function m(l){o.value=`<template>${a[l].trim()}</template>`}return{configList:t,panelList:i,usageCode:o,onPanelChange:m}};var c=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("base-usage",{attrs:{code:n.usageCode,"config-list":n.configList,"panel-list":n.panelList},on:{PanelChange:n.onPanelChange},scopedSlots:n._u([{key:"image",fn:function(i){var a=i.configProps;return[t("t-image",n._b({style:{width:"120px",height:"120px"},attrs:{src:"https://tdesign.gtimg.com/demo/demo-image-1.png",fit:"cover"}},"t-image",a,!1))]}}])})},v=[];c._withStripped=!0;const r={};var g=d(p,c,v,!1,x,null,null,null);function x(n){for(let e in r)this[e]=r[e]}g.options.__file="../src/image/_usage/index.vue";var F=function(){return g.exports}();export{f as D,F as U,y as a,b,C as c,w as d,k as e,I as f,z as g,T as h,_ as i,L as j,R as k,D as l,j as m,P as n,M as o,S as p,q,E as r,B as s};
