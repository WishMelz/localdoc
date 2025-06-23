var n=`<template>
  <t-space>
    <t-sticky-tool
      :style="{ position: 'relative', overflow: 'hidden' }"
      :offset="[-500, -24]"
      @click="handleClick"
      @hover="handleHover"
    >
      <t-sticky-item label="chat" :icon="renderChatIcon"> </t-sticky-item>
      <t-sticky-item label="add" :icon="renderAddIcon"> </t-sticky-item>
      <t-sticky-item
        trigger="click"
        label="aqcode"
        :icon="renderQrIcon"
        :popup="renderPopup"
        :popup-props="{ overlayInnerStyle: { padding: '4px', height: '128px' } }"
      >
      </t-sticky-item>
    </t-sticky-tool>
  </t-space>
</template>

<script lang="jsx">
import { ChatIcon, AddIcon, QrcodeIcon } from 'tdesign-icons-vue';

export default {
  methods: {
    renderChatIcon() {
      return <ChatIcon />;
    },
    renderAddIcon() {
      return <AddIcon />;
    },
    renderQrIcon() {
      return <QrcodeIcon />;
    },
    renderPopup() {
      return <img alt="TDesign Logo" width="120" height="120" src="https://tdesign.gtimg.com/site/site.jpg" />;
    },
    handleClick(context) {
      console.log('click', context);
    },
    handleHover(context) {
      console.log('hover', context);
    },
  },
};
<\/script>
`,e=`<template>
  <t-space>
    <t-sticky-tool
      :style="{ position: 'relative', overflow: 'hidden' }"
      :offset="[-500, -24]"
      @click="handleClick"
      @hover="handleHover"
    >
      <t-sticky-item label="chat" :icon="renderChatIcon"> </t-sticky-item>
      <t-sticky-item label="add" :icon="renderAddIcon"> </t-sticky-item>
      <t-sticky-item
        trigger="click"
        label="aqcode"
        :icon="renderQrIcon"
        :popup="renderPopup"
        :popup-props="{ overlayInnerStyle: { padding: '4px', height: '128px' } }"
      >
      </t-sticky-item>
    </t-sticky-tool>
  </t-space>
</template>

<script setup lang="jsx">
import { ChatIcon, AddIcon, QrcodeIcon } from 'tdesign-icons-vue';

const renderChatIcon = () => <ChatIcon />;
const renderAddIcon = () => <AddIcon />;
const renderQrIcon = () => <QrcodeIcon />;
const renderPopup = () => (
  <img alt="TDesign Logo" width="120" height="120" src="https://tdesign.gtimg.com/site/site.jpg" />
);
const handleClick = (context) => {
  console.log('click', context);
};
const handleHover = (context) => {
  console.log('hover', context);
};
<\/script>
`,t=`<template>
  <t-space>
    <t-sticky-tool
      :style="{ position: 'relative', overflow: 'hidden' }"
      type="compact"
      :offset="[-500, -24]"
      @click="handleClick"
      @hover="handleHover"
    >
      <t-sticky-item :icon="renderChatIcon" popup="chat"> </t-sticky-item>
      <t-sticky-item :icon="renderAddIcon" popup="add"> </t-sticky-item>
      <t-sticky-item
        :icon="renderQrIcon"
        :popup="renderPopup"
        :popup-props="{ overlayInnerStyle: { padding: '4px', height: '128px' } }"
      >
      </t-sticky-item>
    </t-sticky-tool>
  </t-space>
</template>

<script lang="jsx">
import { ChatIcon, AddIcon, QrcodeIcon } from 'tdesign-icons-vue';

export default {
  methods: {
    renderChatIcon() {
      return <ChatIcon />;
    },
    renderAddIcon() {
      return <AddIcon />;
    },
    renderQrIcon() {
      return <QrcodeIcon />;
    },
    renderPopup() {
      return <img alt="TDesign Logo" width="120" height="120" src="https://tdesign.gtimg.com/site/site.jpg" />;
    },
    handleClick(context) {
      console.log('click', context);
    },
    handleHover(context) {
      console.log('hover', context);
    },
  },
};
<\/script>
`,o=`<template>
  <t-space>
    <t-sticky-tool
      :style="{ position: 'relative', overflow: 'hidden' }"
      type="compact"
      :offset="[-500, -24]"
      @click="handleClick"
      @hover="handleHover"
    >
      <t-sticky-item :icon="renderChatIcon" popup="chat"> </t-sticky-item>
      <t-sticky-item :icon="renderAddIcon" popup="add"> </t-sticky-item>
      <t-sticky-item
        :icon="renderQrIcon"
        :popup="renderPopup"
        :popup-props="{ overlayInnerStyle: { padding: '4px', height: '128px' } }"
      >
      </t-sticky-item>
    </t-sticky-tool>
  </t-space>
</template>

<script setup lang="jsx">
import { ChatIcon, AddIcon, QrcodeIcon } from 'tdesign-icons-vue';

const renderChatIcon = () => <ChatIcon />;
const renderAddIcon = () => <AddIcon />;
const renderQrIcon = () => <QrcodeIcon />;
const renderPopup = () => (
  <img alt="TDesign Logo" width="120" height="120" src="https://tdesign.gtimg.com/site/site.jpg" />
);
const handleClick = (context) => {
  console.log('click', context);
};
const handleHover = (context) => {
  console.log('hover', context);
};
<\/script>
`,c=`<template>
  <t-space>
    <t-sticky-tool
      :style="{ position: 'relative', overflow: 'hidden' }"
      :offset="[-500, -24]"
      @click="handleClick"
      @hover="handleHover"
    >
      <t-sticky-item label="chat" :icon="renderChatIcon"> </t-sticky-item>
      <t-sticky-item label="add" :icon="renderAddIcon"> </t-sticky-item>
      <t-sticky-item
        label="aqcode"
        :icon="renderQrIcon"
        :popup="renderPopup"
        :popup-props="{ overlayInnerStyle: { padding: '4px', height: '128px' } }"
      >
      </t-sticky-item>
    </t-sticky-tool>
    <t-sticky-tool
      :style="{ position: 'relative', overflow: 'hidden' }"
      shape="round"
      :offset="[-300, -24]"
      @click="handleClick"
      @hover="handleHover"
    >
      <t-sticky-item label="chat" :icon="renderChatIcon"> </t-sticky-item>
      <t-sticky-item label="add" :icon="renderAddIcon"> </t-sticky-item>
      <t-sticky-item
        label="aqcode"
        :icon="renderQrIcon"
        :popup="renderPopup"
        :popup-props="{ overlayInnerStyle: { padding: '4px', height: '128px' } }"
      >
      </t-sticky-item>
    </t-sticky-tool>
  </t-space>
</template>

<script lang="jsx">
import { ChatIcon, AddIcon, QrcodeIcon } from 'tdesign-icons-vue';

export default {
  methods: {
    renderChatIcon() {
      return <ChatIcon />;
    },
    renderAddIcon() {
      return <AddIcon />;
    },
    renderQrIcon() {
      return <QrcodeIcon />;
    },
    renderPopup() {
      return <img alt="TDesign Logo" width="120" height="120" src="https://tdesign.gtimg.com/site/site.jpg" />;
    },
    handleClick(context) {
      console.log('click', context);
    },
    handleHover(context) {
      console.log('hover', context);
    },
  },
};
<\/script>
`,i=`<template>
  <t-space>
    <t-sticky-tool
      :style="{ position: 'relative', overflow: 'hidden' }"
      :offset="[-500, -24]"
      @click="handleClick"
      @hover="handleHover"
    >
      <t-sticky-item label="chat" :icon="renderChatIcon"> </t-sticky-item>
      <t-sticky-item label="add" :icon="renderAddIcon"> </t-sticky-item>
      <t-sticky-item
        label="aqcode"
        :icon="renderQrIcon"
        :popup="renderPopup"
        :popup-props="{ overlayInnerStyle: { padding: '4px', height: '128px' } }"
      >
      </t-sticky-item>
    </t-sticky-tool>
    <t-sticky-tool
      :style="{ position: 'relative', overflow: 'hidden' }"
      shape="round"
      :offset="[-300, -24]"
      @click="handleClick"
      @hover="handleHover"
    >
      <t-sticky-item label="chat" :icon="renderChatIcon"> </t-sticky-item>
      <t-sticky-item label="add" :icon="renderAddIcon"> </t-sticky-item>
      <t-sticky-item
        label="aqcode"
        :icon="renderQrIcon"
        :popup="renderPopup"
        :popup-props="{ overlayInnerStyle: { padding: '4px', height: '128px' } }"
      >
      </t-sticky-item>
    </t-sticky-tool>
  </t-space>
</template>

<script setup lang="jsx">
import { ChatIcon, AddIcon, QrcodeIcon } from 'tdesign-icons-vue';

const renderChatIcon = () => <ChatIcon />;
const renderAddIcon = () => <AddIcon />;
const renderQrIcon = () => <QrcodeIcon />;
const renderPopup = () => (
  <img alt="TDesign Logo" width="120" height="120" src="https://tdesign.gtimg.com/site/site.jpg" />
);
const handleClick = (context) => {
  console.log('click', context);
};
const handleHover = (context) => {
  console.log('hover', context);
};
<\/script>
`;export{n as D,e as a,t as b,o as c,c as d,i as e};
