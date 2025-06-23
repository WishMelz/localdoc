var n=`<template>
  <t-card bordered :style="{ width: '400px' }"> {{ infoMessage }} </t-card>
</template>

<script>
export default {
  data() {
    return {
      infoMessage:
        '\u4EC5\u6709\u5185\u5BB9\u533A\u57DF\u7684\u5361\u7247\u5F62\u5F0F\u3002\u5361\u7247\u5185\u5BB9\u533A\u57DF\u53EF\u4EE5\u662F\u6587\u5B57\u3001\u56FE\u7247\u3001\u8868\u5355\u3001\u8868\u683C\u7B49\u5F62\u5F0F\u4FE1\u606F\u5185\u5BB9\u3002\u53EF\u4F7F\u7528\u5927\u4E2D\u5C0F\u4E0D\u540C\u7684\u5361\u7247\u5C3A\u5BF8\uFF0C\u6309\u4E1A\u52A1\u9700\u6C42\u8FDB\u884C\u5448\u73B0\u3002',
    };
  },
};
<\/script>
`,t=`<template>
  <t-card bordered :style="{ width: '400px' }"> {{ infoMessage }} </t-card>
</template>

<script setup>
import { ref } from 'vue';

const infoMessage = ref(
  '\u4EC5\u6709\u5185\u5BB9\u533A\u57DF\u7684\u5361\u7247\u5F62\u5F0F\u3002\u5361\u7247\u5185\u5BB9\u533A\u57DF\u53EF\u4EE5\u662F\u6587\u5B57\u3001\u56FE\u7247\u3001\u8868\u5355\u3001\u8868\u683C\u7B49\u5F62\u5F0F\u4FE1\u606F\u5185\u5BB9\u3002\u53EF\u4F7F\u7528\u5927\u4E2D\u5C0F\u4E0D\u540C\u7684\u5361\u7247\u5C3A\u5BF8\uFF0C\u6309\u4E1A\u52A1\u9700\u6C42\u8FDB\u884C\u5448\u73B0\u3002',
);
<\/script>
`,e=`<template>
  <div class="demo-card">
    <t-card :title="title" :bordered="false" hover-shadow :style="{ width: '400px' }">
      {{ infoMessage }}
      <template #actions>
        <a href="javascript:void(0)" @click="clickHandler" style="line-height: 24px">\u64CD\u4F5C</a>
      </template>
    </t-card>
  </div>
</template>
<script>
import { MessagePlugin } from 'tdesign-vue';

export default {
  data() {
    return {
      title: '\u6807\u9898',
      infoMessage:
        '\u4EC5\u6709\u5185\u5BB9\u533A\u57DF\u7684\u5361\u7247\u5F62\u5F0F\u3002\u5361\u7247\u5185\u5BB9\u533A\u57DF\u53EF\u4EE5\u662F\u6587\u5B57\u3001\u56FE\u7247\u3001\u8868\u5355\u3001\u8868\u683C\u7B49\u5F62\u5F0F\u4FE1\u606F\u5185\u5BB9\u3002\u53EF\u4F7F\u7528\u5927\u4E2D\u5C0F\u4E0D\u540C\u7684\u5361\u7247\u5C3A\u5BF8\uFF0C\u6309\u4E1A\u52A1\u9700\u6C42\u8FDB\u884C\u5448\u73B0\u3002',
    };
  },
  methods: {
    clickHandler() {
      MessagePlugin.success('\u64CD\u4F5C');
    },
  },
};
<\/script>
<style lang="less" scoped>
.demo-card {
  padding: 16px;
  background-color: var(--td-bg-color-container-hover);
}
</style>
`,o=`<template>
  <div class="demo-card">
    <t-card :title="title" :bordered="false" hover-shadow :style="{ width: '400px' }">
      {{ infoMessage }}
      <template #actions>
        <a href="javascript:void(0)" @click="clickHandler" style="line-height: 24px">\u64CD\u4F5C</a>
      </template>
    </t-card>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { MessagePlugin } from 'tdesign-vue';

const title = ref('\u6807\u9898');
const infoMessage = ref(
  '\u4EC5\u6709\u5185\u5BB9\u533A\u57DF\u7684\u5361\u7247\u5F62\u5F0F\u3002\u5361\u7247\u5185\u5BB9\u533A\u57DF\u53EF\u4EE5\u662F\u6587\u5B57\u3001\u56FE\u7247\u3001\u8868\u5355\u3001\u8868\u683C\u7B49\u5F62\u5F0F\u4FE1\u606F\u5185\u5BB9\u3002\u53EF\u4F7F\u7528\u5927\u4E2D\u5C0F\u4E0D\u540C\u7684\u5361\u7247\u5C3A\u5BF8\uFF0C\u6309\u4E1A\u52A1\u9700\u6C42\u8FDB\u884C\u5448\u73B0\u3002',
);
const clickHandler = () => {
  MessagePlugin.success('\u64CD\u4F5C');
};
<\/script>
<style lang="less" scoped>
.demo-card {
  padding: 16px;
  background-color: var(--td-bg-color-container-hover);
}
</style>
`,a=`<template>
  <t-card :title="title" hover-shadow :style="{ width: '400px' }">
    {{ infoMessage }}
    <template #actions>
      <a href="javascript:void(0)" @click="clickHandler" style="line-height: 24px">\u64CD\u4F5C</a>
    </template>
  </t-card>
</template>
<script>
import { MessagePlugin } from 'tdesign-vue';

export default {
  data() {
    return {
      title: '\u6807\u9898',
      infoMessage: '\u5361\u7247\u5185\u5BB9\uFF0C\u4EE5\u63CF\u8FF0\u6027\u4E3A\u4E3B\uFF0C\u53EF\u4EE5\u662F\u6587\u5B57\u3001\u56FE\u7247\u6216\u56FE\u6587\u7EC4\u5408\u7684\u5F62\u5F0F\u3002\u6309\u4E1A\u52A1\u9700\u6C42\u8FDB\u884C\u81EA\u5B9A\u4E49\u7EC4\u5408\u3002',
    };
  },
  methods: {
    clickHandler() {
      MessagePlugin.success('\u64CD\u4F5C');
    },
  },
};
<\/script>
`,s=`<template>
  <t-card :title="title" hover-shadow :style="{ width: '400px' }">
    {{ infoMessage }}
    <template #actions>
      <a href="javascript:void(0)" @click="clickHandler" style="line-height: 24px">\u64CD\u4F5C</a>
    </template>
  </t-card>
</template>
<script setup>
import { ref } from 'vue';
import { MessagePlugin } from 'tdesign-vue';

const title = ref('\u6807\u9898');
const infoMessage = ref('\u5361\u7247\u5185\u5BB9\uFF0C\u4EE5\u63CF\u8FF0\u6027\u4E3A\u4E3B\uFF0C\u53EF\u4EE5\u662F\u6587\u5B57\u3001\u56FE\u7247\u6216\u56FE\u6587\u7EC4\u5408\u7684\u5F62\u5F0F\u3002\u6309\u4E1A\u52A1\u9700\u6C42\u8FDB\u884C\u81EA\u5B9A\u4E49\u7EC4\u5408\u3002');
const clickHandler = () => {
  MessagePlugin.success('\u64CD\u4F5C');
};
<\/script>
`,i=`<template>
  <t-card :title="title" header-bordered :style="{ width: '400px' }">
    {{ infoMessage }}
    <template #actions>
      <a href="javascript:void(0)" @click="clickHandler" style="line-height: 24px">\u64CD\u4F5C</a>
    </template>
  </t-card>
</template>
<script>
import { MessagePlugin } from 'tdesign-vue';

export default {
  data() {
    return {
      title: '\u6807\u9898',
      infoMessage: '\u5361\u7247\u5185\u5BB9\uFF0C\u4EE5\u63CF\u8FF0\u6027\u4E3A\u4E3B\uFF0C\u53EF\u4EE5\u662F\u6587\u5B57\u3001\u56FE\u7247\u6216\u56FE\u6587\u7EC4\u5408\u7684\u5F62\u5F0F\u3002\u6309\u4E1A\u52A1\u9700\u6C42\u8FDB\u884C\u81EA\u5B9A\u4E49\u7EC4\u5408\u3002',
    };
  },
  methods: {
    clickHandler() {
      MessagePlugin.success('\u64CD\u4F5C');
    },
  },
};
<\/script>
`,r=`<template>
  <t-card :title="title" header-bordered :style="{ width: '400px' }">
    {{ infoMessage }}
    <template #actions>
      <a href="javascript:void(0)" @click="clickHandler" style="line-height: 24px">\u64CD\u4F5C</a>
    </template>
  </t-card>
</template>
<script setup>
import { ref } from 'vue';
import { MessagePlugin } from 'tdesign-vue';

const title = ref('\u6807\u9898');
const infoMessage = ref('\u5361\u7247\u5185\u5BB9\uFF0C\u4EE5\u63CF\u8FF0\u6027\u4E3A\u4E3B\uFF0C\u53EF\u4EE5\u662F\u6587\u5B57\u3001\u56FE\u7247\u6216\u56FE\u6587\u7EC4\u5408\u7684\u5F62\u5F0F\u3002\u6309\u4E1A\u52A1\u9700\u6C42\u8FDB\u884C\u81EA\u5B9A\u4E49\u7EC4\u5408\u3002');
const clickHandler = () => {
  MessagePlugin.success('\u64CD\u4F5C');
};
<\/script>
`,c=`<template>
  <t-card :cover="cover" bordered :style="{ width: '400px' }">
    <template #footer>
      <t-row :align="'middle'" justify="center" style="gap: 24px">
        <t-col flex="auto" style="display: inline-flex; justify-content: center">
          <t-button variant="text" shape="square">
            <thumb-up-icon />
          </t-button>
        </t-col>

        <t-col flex="auto" style="display: inline-flex; justify-content: center">
          <t-button variant="text" shape="square">
            <chat-icon />
          </t-button>
        </t-col>

        <t-col flex="auto" style="display: inline-flex; justify-content: center">
          <t-button variant="text" shape="square">
            <share-icon />
          </t-button>
        </t-col>
      </t-row>
    </template>
  </t-card>
</template>
<script lang="jsx">
import { ThumbUpIcon, ChatIcon, ShareIcon } from 'tdesign-icons-vue';

export default {
  components: {
    ThumbUpIcon,
    ChatIcon,
    ShareIcon,
  },
  data() {
    return {
      cover: 'https://tdesign.gtimg.com/site/source/card-demo.png',
    };
  },
};
<\/script>
`,l=`<template>
  <t-card :cover="cover" bordered :style="{ width: '400px' }">
    <template #footer>
      <t-row :align="'middle'" justify="center" style="gap: 24px">
        <t-col flex="auto" style="display: inline-flex; justify-content: center">
          <t-button variant="text" shape="square">
            <thumb-up-icon />
          </t-button>
        </t-col>

        <t-col flex="auto" style="display: inline-flex; justify-content: center">
          <t-button variant="text" shape="square">
            <chat-icon />
          </t-button>
        </t-col>

        <t-col flex="auto" style="display: inline-flex; justify-content: center">
          <t-button variant="text" shape="square">
            <share-icon />
          </t-button>
        </t-col>
      </t-row>
    </template>
  </t-card>
</template>
<script setup lang="jsx">
import { ref } from 'vue';
import { ThumbUpIcon, ChatIcon, ShareIcon } from 'tdesign-icons-vue';

const cover = ref('https://tdesign.gtimg.com/site/source/card-demo.png');
<\/script>
`,p=`<template>
  <t-space direction="vertical">
    <t-card :cover="cover" theme="poster2" :style="{ width: '400px' }">
      <template #footer>
        <t-row :align="'middle'" justify="center" style="gap: 24px">
          <t-col flex="auto" style="display: inline-flex; justify-content: center">
            <t-button variant="text" shape="square">
              <thumb-up-icon />
            </t-button>
          </t-col>

          <t-col flex="auto" style="display: inline-flex; justify-content: center">
            <t-button variant="text" shape="square">
              <chat-icon />
            </t-button>
          </t-col>

          <t-col flex="auto" style="display: inline-flex; justify-content: center">
            <t-button variant="text" shape="square">
              <share-icon />
            </t-button>
          </t-col>
        </t-row>
      </template>
    </t-card>
    <t-card :cover="cover" theme="poster2" :style="{ width: '400px' }">
      <template #footer>
        <t-button variant="text" shape="square" :style="{ 'margin-right': '8px' }">
          <heart-icon />
        </t-button>
        <t-button variant="text" shape="square" :style="{ 'margin-right': '8px' }">
          <chat-icon />
        </t-button>
        <t-button variant="text" shape="square">
          <share-icon />
        </t-button>
      </template>
      <template #actions>
        <t-dropdown :options="options" :min-column-width="112" @click="clickHandler">
          <t-button variant="text" shape="square">
            <more-icon />
          </t-button>
        </t-dropdown>
      </template>
    </t-card>
    <t-card :cover="cover" theme="poster2" :style="{ width: '400px' }">
      <template #footer>
        <t-avatar-group cascading="left-up" :max="2">
          <t-avatar :image="image" />
          <t-avatar>Q</t-avatar>
          <t-avatar>C</t-avatar>
          <t-avatar>G</t-avatar>
          <t-avatar :icon="icon" />
        </t-avatar-group>
      </template>
      <template #actions>
        <t-dropdown :options="options" :min-column-width="112" @click="clickHandler">
          <t-button variant="text" shape="square">
            <more-icon />
          </t-button>
        </t-dropdown>
      </template>
    </t-card>
  </t-space>
</template>
<script lang="jsx">
import {
  ThumbUpIcon, ChatIcon, ShareIcon, HeartIcon, MoreIcon, UserIcon,
} from 'tdesign-icons-vue';
import { MessagePlugin } from 'tdesign-vue';

export default {
  components: {
    ThumbUpIcon,
    ChatIcon,
    ShareIcon,
    HeartIcon,
    MoreIcon,
  },
  data() {
    return {
      cover: 'https://tdesign.gtimg.com/site/source/card-demo.png',
      image: 'https://tdesign.gtimg.com/site/avatar-boy.jpg',
      options: [
        {
          content: '\u64CD\u4F5C\u4E00',
          value: 1,
        },
        {
          content: '\u64CD\u4F5C\u4E8C',
          value: 2,
        },
      ],
    };
  },
  methods: {
    icon() {
      return <UserIcon />;
    },
    clickHandler(data) {
      MessagePlugin.success(\`\u9009\u4E2D\u3010\${data.content}\u3011\`);
    },
  },
};
<\/script>
`,d=`<template>
  <t-space direction="vertical">
    <t-card :cover="cover" theme="poster2" :style="{ width: '400px' }">
      <template #footer>
        <t-row :align="'middle'" justify="center" style="gap: 24px">
          <t-col flex="auto" style="display: inline-flex; justify-content: center">
            <t-button variant="text" shape="square">
              <thumb-up-icon />
            </t-button>
          </t-col>

          <t-col flex="auto" style="display: inline-flex; justify-content: center">
            <t-button variant="text" shape="square">
              <chat-icon />
            </t-button>
          </t-col>

          <t-col flex="auto" style="display: inline-flex; justify-content: center">
            <t-button variant="text" shape="square">
              <share-icon />
            </t-button>
          </t-col>
        </t-row>
      </template>
    </t-card>
    <t-card :cover="cover" theme="poster2" :style="{ width: '400px' }">
      <template #footer>
        <t-button variant="text" shape="square" :style="{ 'margin-right': '8px' }">
          <heart-icon />
        </t-button>
        <t-button variant="text" shape="square" :style="{ 'margin-right': '8px' }">
          <chat-icon />
        </t-button>
        <t-button variant="text" shape="square">
          <share-icon />
        </t-button>
      </template>
      <template #actions>
        <t-dropdown :options="options" :min-column-width="112" @click="clickHandler">
          <t-button variant="text" shape="square">
            <more-icon />
          </t-button>
        </t-dropdown>
      </template>
    </t-card>
    <t-card :cover="cover" theme="poster2" :style="{ width: '400px' }">
      <template #footer>
        <t-avatar-group cascading="left-up" :max="2">
          <t-avatar :image="image" />
          <t-avatar>Q</t-avatar>
          <t-avatar>C</t-avatar>
          <t-avatar>G</t-avatar>
          <t-avatar :icon="icon" />
        </t-avatar-group>
      </template>
      <template #actions>
        <t-dropdown :options="options" :min-column-width="112" @click="clickHandler">
          <t-button variant="text" shape="square">
            <more-icon />
          </t-button>
        </t-dropdown>
      </template>
    </t-card>
  </t-space>
</template>
<script setup lang="jsx">
import { ref } from 'vue';
import {
  ThumbUpIcon, ChatIcon, ShareIcon, HeartIcon, MoreIcon, UserIcon,
} from 'tdesign-icons-vue';
import { MessagePlugin } from 'tdesign-vue';

const cover = ref('https://tdesign.gtimg.com/site/source/card-demo.png');
const image = ref('https://tdesign.gtimg.com/site/avatar-boy.jpg');
const options = ref([
  {
    content: '\u64CD\u4F5C\u4E00',
    value: 1,
  },
  {
    content: '\u64CD\u4F5C\u4E8C',
    value: 2,
  },
]);
const icon = () => <UserIcon />;
const clickHandler = (data) => {
  MessagePlugin.success(\`\u9009\u4E2D\u3010\${data.content}\u3011\`);
};
<\/script>
`,m=`<template>
  <t-card :cover="cover" theme="poster2" :style="{ width: '400px' }">
    <template #footer>
      <t-comment avatar="https://tdesign.gtimg.com/site/avatar-boy.jpg" author="\u6807\u9898" content="\u5361\u7247\u5185\u5BB9" />
    </template>
  </t-card>
</template>
<script lang="jsx">
export default {
  data() {
    return {
      cover: 'https://tdesign.gtimg.com/site/source/card-demo.png',
    };
  },
};
<\/script>
`,u=`<template>
  <t-card :cover="cover" theme="poster2" :style="{ width: '400px' }">
    <template #footer>
      <t-comment avatar="https://tdesign.gtimg.com/site/avatar-boy.jpg" author="\u6807\u9898" content="\u5361\u7247\u5185\u5BB9" />
    </template>
  </t-card>
</template>
<script setup lang="jsx">
import { ref } from 'vue';

const cover = ref('https://tdesign.gtimg.com/site/source/card-demo.png');
<\/script>
`,g=`<template>
  <t-card :cover="cover" theme="poster2" :style="{ width: '400px' }">
    <template #footer>
      <t-comment avatar="https://tdesign.gtimg.com/site/avatar-boy.jpg" author="\u6807\u9898" content="\u5361\u7247\u5185\u5BB9" />
    </template>
    <template #actions>
      <t-dropdown :options="options" :min-column-width="112" @click="clickHandler">
        <t-button variant="text" shape="square">
          <more-icon />
        </t-button>
      </t-dropdown>
    </template>
  </t-card>
</template>
<script>
import { MessagePlugin } from 'tdesign-vue';
import { MoreIcon } from 'tdesign-icons-vue';

export default {
  components: {
    MoreIcon,
  },
  data() {
    return {
      options: [
        {
          content: '\u64CD\u4F5C\u4E00',
          value: 1,
        },
        {
          content: '\u64CD\u4F5C\u4E8C',
          value: 2,
        },
      ],
      cover: 'https://tdesign.gtimg.com/site/source/card-demo.png',
    };
  },
  methods: {
    clickHandler(data) {
      MessagePlugin.success(\`\u9009\u4E2D\u3010\${data.content}\u3011\`);
    },
  },
};
<\/script>
<style scoped>
.tdesign-demo-block /deep/ .t-card__actions {
  display: flex;
  align-items: center;
}
</style>
`,h=`<template>
  <t-card :cover="cover" theme="poster2" :style="{ width: '400px' }">
    <template #footer>
      <t-comment avatar="https://tdesign.gtimg.com/site/avatar-boy.jpg" author="\u6807\u9898" content="\u5361\u7247\u5185\u5BB9" />
    </template>
    <template #actions>
      <t-dropdown :options="options" :min-column-width="112" @click="clickHandler">
        <t-button variant="text" shape="square">
          <more-icon />
        </t-button>
      </t-dropdown>
    </template>
  </t-card>
</template>
<script setup>
import { ref } from 'vue';
import { MessagePlugin } from 'tdesign-vue';
import { MoreIcon } from 'tdesign-icons-vue';

const options = ref([
  {
    content: '\u64CD\u4F5C\u4E00',
    value: 1,
  },
  {
    content: '\u64CD\u4F5C\u4E8C',
    value: 2,
  },
]);
const cover = ref('https://tdesign.gtimg.com/site/source/card-demo.png');
const clickHandler = (data) => {
  MessagePlugin.success(\`\u9009\u4E2D\u3010\${data.content}\u3011\`);
};
<\/script>
<style scoped>
.tdesign-demo-block /deep/ .t-card__actions {
  display: flex;
  align-items: center;
}
</style>
`,v=`<template>
  <t-card :title="title" :subtitle="subtitle" :cover="cover" :style="{ width: '400px' }">
    <template #actions>
      <t-dropdown :options="options" :min-column-width="112" @click="clickHandler">
        <div class="tdesign-demo-dropdown-trigger">
          <t-button variant="text" shape="square">
            <more-icon />
          </t-button>
        </div>
      </t-dropdown>
    </template>
    <template #footer>
      <t-row :align="'middle'" justify="center" style="gap: 24px">
        <t-col flex="auto" style="display: inline-flex; justify-content: center">
          <t-button variant="text" shape="square">
            <thumb-up-icon />
          </t-button>
        </t-col>

        <t-col flex="auto" style="display: inline-flex; justify-content: center">
          <t-button variant="text" shape="square">
            <chat-icon />
          </t-button>
        </t-col>

        <t-col flex="auto" style="display: inline-flex; justify-content: center">
          <t-button variant="text" shape="square">
            <share-icon />
          </t-button>
        </t-col>
      </t-row>
    </template>
  </t-card>
</template>
<script lang="jsx">
import {
  ThumbUpIcon, ChatIcon, ShareIcon, MoreIcon,
} from 'tdesign-icons-vue';
import { MessagePlugin } from 'tdesign-vue';

export default {
  components: {
    ThumbUpIcon,
    ChatIcon,
    ShareIcon,
    MoreIcon,
  },
  data() {
    return {
      title: '\u6807\u9898',
      subtitle: '\u526F\u6807\u9898',
      cover: 'https://tdesign.gtimg.com/site/source/card-demo.png',
      options: [
        {
          content: '\u64CD\u4F5C\u4E00',
          value: 1,
        },
        {
          content: '\u64CD\u4F5C\u4E8C',
          value: 2,
        },
      ],
    };
  },
  methods: {
    clickHandler() {
      MessagePlugin.success('\u64CD\u4F5C');
    },
  },
};
<\/script>
`,f=`<template>
  <t-card :title="title" :subtitle="subtitle" :cover="cover" :style="{ width: '400px' }">
    <template #actions>
      <t-dropdown :options="options" :min-column-width="112" @click="clickHandler">
        <div class="tdesign-demo-dropdown-trigger">
          <t-button variant="text" shape="square">
            <more-icon />
          </t-button>
        </div>
      </t-dropdown>
    </template>
    <template #footer>
      <t-row :align="'middle'" justify="center" style="gap: 24px">
        <t-col flex="auto" style="display: inline-flex; justify-content: center">
          <t-button variant="text" shape="square">
            <thumb-up-icon />
          </t-button>
        </t-col>

        <t-col flex="auto" style="display: inline-flex; justify-content: center">
          <t-button variant="text" shape="square">
            <chat-icon />
          </t-button>
        </t-col>

        <t-col flex="auto" style="display: inline-flex; justify-content: center">
          <t-button variant="text" shape="square">
            <share-icon />
          </t-button>
        </t-col>
      </t-row>
    </template>
  </t-card>
</template>
<script setup lang="jsx">
import { ref } from 'vue';
import {
  ThumbUpIcon, ChatIcon, ShareIcon, MoreIcon,
} from 'tdesign-icons-vue';
import { MessagePlugin } from 'tdesign-vue';

const title = ref('\u6807\u9898');
const subtitle = ref('\u526F\u6807\u9898');
const cover = ref('https://tdesign.gtimg.com/site/source/card-demo.png');
const options = ref([
  {
    content: '\u64CD\u4F5C\u4E00',
    value: 1,
  },
  {
    content: '\u64CD\u4F5C\u4E8C',
    value: 2,
  },
]);
const clickHandler = () => {
  MessagePlugin.success('\u64CD\u4F5C');
};
<\/script>
`,x=`<template>
  <t-card :cover="cover" title="\u6807\u9898" description="\u5361\u7247\u5185\u5BB9" :style="{ width: '400px' }">
    <template #avatar>
      <t-avatar image="https://tdesign.gtimg.com/site/avatar-boy.jpg" size="56px"></t-avatar>
    </template>
    <template #actions>
      <t-dropdown :options="options" :min-column-width="112" @click="clickHandler">
        <div class="tdesign-demo-dropdown-trigger">
          <t-button variant="text" shape="square">
            <more-icon />
          </t-button>
        </div>
      </t-dropdown>
    </template>
    <template #footer>
      <t-button variant="text" shape="square" :style="{ 'margin-right': '8px' }">
        <heart-icon />
      </t-button>
      <t-button variant="text" shape="square" :style="{ 'margin-right': '8px' }">
        <chat-icon />
      </t-button>
      <t-button variant="text" shape="square">
        <share-icon />
      </t-button>
    </template>
  </t-card>
</template>
<script>
import {
  HeartIcon, ChatIcon, ShareIcon, MoreIcon,
} from 'tdesign-icons-vue';

import { MessagePlugin } from 'tdesign-vue';

export default {
  components: {
    HeartIcon,
    ChatIcon,
    ShareIcon,
    MoreIcon,
  },
  data() {
    return {
      cover: 'https://tdesign.gtimg.com/site/source/card-demo.png',
      options: [
        {
          content: '\u64CD\u4F5C\u4E00',
          value: 1,
        },
        {
          content: '\u64CD\u4F5C\u4E8C',
          value: 2,
        },
      ],
    };
  },
  methods: {
    clickHandler() {
      MessagePlugin.success('\u64CD\u4F5C');
    },
  },
};
<\/script>
<style scoped>
.tdesign-demo-block /deep/ .t-card__actions {
  display: flex;
  align-items: center;
}
</style>
`,b=`<template>
  <t-card :cover="cover" title="\u6807\u9898" description="\u5361\u7247\u5185\u5BB9" :style="{ width: '400px' }">
    <template #avatar>
      <t-avatar image="https://tdesign.gtimg.com/site/avatar-boy.jpg" size="56px"></t-avatar>
    </template>
    <template #actions>
      <t-dropdown :options="options" :min-column-width="112" @click="clickHandler">
        <div class="tdesign-demo-dropdown-trigger">
          <t-button variant="text" shape="square">
            <more-icon />
          </t-button>
        </div>
      </t-dropdown>
    </template>
    <template #footer>
      <t-button variant="text" shape="square" :style="{ 'margin-right': '8px' }">
        <heart-icon />
      </t-button>
      <t-button variant="text" shape="square" :style="{ 'margin-right': '8px' }">
        <chat-icon />
      </t-button>
      <t-button variant="text" shape="square">
        <share-icon />
      </t-button>
    </template>
  </t-card>
</template>
<script setup>
import { ref } from 'vue';
import {
  HeartIcon, ChatIcon, ShareIcon, MoreIcon,
} from 'tdesign-icons-vue';
import { MessagePlugin } from 'tdesign-vue';

const cover = ref('https://tdesign.gtimg.com/site/source/card-demo.png');
const options = ref([
  {
    content: '\u64CD\u4F5C\u4E00',
    value: 1,
  },
  {
    content: '\u64CD\u4F5C\u4E8C',
    value: 2,
  },
]);
const clickHandler = () => {
  MessagePlugin.success('\u64CD\u4F5C');
};
<\/script>
<style scoped>
.tdesign-demo-block /deep/ .t-card__actions {
  display: flex;
  align-items: center;
}
</style>
`,y=`<template>
  <t-card
    :title="title"
    :subtitle="subtitle"
    :actions="actions"
    hover-shadow
    @actions="clickHandler"
    :style="{ width: '400px' }"
  >
    {{ infoMessage }}
  </t-card>
</template>
<script>
import { MessagePlugin } from 'tdesign-vue';

export default {
  data() {
    return {
      title: '\u6807\u9898',
      subtitle: '\u526F\u6807\u9898',
      actions: '\u64CD\u4F5C',
      infoMessage: '\u5361\u7247\u5185\u5BB9\uFF0C\u4EE5\u63CF\u8FF0\u6027\u4E3A\u4E3B\uFF0C\u53EF\u4EE5\u662F\u6587\u5B57\u3001\u56FE\u7247\u6216\u56FE\u6587\u7EC4\u5408\u7684\u5F62\u5F0F\u3002\u6309\u4E1A\u52A1\u9700\u6C42\u8FDB\u884C\u81EA\u5B9A\u4E49\u7EC4\u5408\u3002',
    };
  },
  methods: {
    clickHandler() {
      MessagePlugin.success('\u64CD\u4F5C');
    },
  },
};
<\/script>
`,w=`<template>
  <t-card
    :title="title"
    :subtitle="subtitle"
    :actions="actions"
    hover-shadow
    @actions="clickHandler"
    :style="{ width: '400px' }"
  >
    {{ infoMessage }}
  </t-card>
</template>
<script setup>
import { ref } from 'vue';
import { MessagePlugin } from 'tdesign-vue';

const title = ref('\u6807\u9898');
const subtitle = ref('\u526F\u6807\u9898');
const actions = ref('\u64CD\u4F5C');
const infoMessage = ref('\u5361\u7247\u5185\u5BB9\uFF0C\u4EE5\u63CF\u8FF0\u6027\u4E3A\u4E3B\uFF0C\u53EF\u4EE5\u662F\u6587\u5B57\u3001\u56FE\u7247\u6216\u56FE\u6587\u7EC4\u5408\u7684\u5F62\u5F0F\u3002\u6309\u4E1A\u52A1\u9700\u6C42\u8FDB\u884C\u81EA\u5B9A\u4E49\u7EC4\u5408\u3002');
const clickHandler = () => {
  MessagePlugin.success('\u64CD\u4F5C');
};
<\/script>
`,M=`<template>
  <t-card
    :title="title"
    :description="description"
    :actions="actions"
    hover-shadow
    @actions="clickHandler"
    :style="{ width: '400px' }"
  >
    {{ infoMessage }}
  </t-card>
</template>
<script>
import { MessagePlugin } from 'tdesign-vue';

export default {
  data() {
    return {
      title: '\u6807\u9898',
      description: '\u63CF\u8FF0',
      actions: '\u64CD\u4F5C',
      infoMessage: '\u5361\u7247\u5185\u5BB9\uFF0C\u4EE5\u63CF\u8FF0\u6027\u4E3A\u4E3B\uFF0C\u53EF\u4EE5\u662F\u6587\u5B57\u3001\u56FE\u7247\u6216\u56FE\u6587\u7EC4\u5408\u7684\u5F62\u5F0F\u3002\u6309\u4E1A\u52A1\u9700\u6C42\u8FDB\u884C\u81EA\u5B9A\u4E49\u7EC4\u5408\u3002',
    };
  },
  methods: {
    clickHandler() {
      MessagePlugin.success('\u64CD\u4F5C');
    },
  },
};
<\/script>
`,k=`<template>
  <t-card
    :title="title"
    :description="description"
    :actions="actions"
    hover-shadow
    @actions="clickHandler"
    :style="{ width: '400px' }"
  >
    {{ infoMessage }}
  </t-card>
</template>
<script setup>
import { ref } from 'vue';
import { MessagePlugin } from 'tdesign-vue';

const title = ref('\u6807\u9898');
const description = ref('\u63CF\u8FF0');
const actions = ref('\u64CD\u4F5C');
const infoMessage = ref('\u5361\u7247\u5185\u5BB9\uFF0C\u4EE5\u63CF\u8FF0\u6027\u4E3A\u4E3B\uFF0C\u53EF\u4EE5\u662F\u6587\u5B57\u3001\u56FE\u7247\u6216\u56FE\u6587\u7EC4\u5408\u7684\u5F62\u5F0F\u3002\u6309\u4E1A\u52A1\u9700\u6C42\u8FDB\u884C\u81EA\u5B9A\u4E49\u7EC4\u5408\u3002');
const clickHandler = () => {
  MessagePlugin.success('\u64CD\u4F5C');
};
<\/script>
`,C=`<template>
  <t-card
    :title="title"
    :subtitle="subtitle"
    :description="description"
    :actions="actions"
    hover-shadow
    @actions="clickHandler"
    :style="{ width: '400px' }"
  >
    {{ infoMessage }}
  </t-card>
</template>
<script>
import { MessagePlugin } from 'tdesign-vue';

export default {
  data() {
    return {
      title: '\u6807\u9898',
      subtitle: '\u526F\u6807\u9898',
      description: '\u63CF\u8FF0',
      actions: '\u64CD\u4F5C',
      infoMessage: '\u5361\u7247\u5185\u5BB9\uFF0C\u4EE5\u63CF\u8FF0\u6027\u4E3A\u4E3B\uFF0C\u53EF\u4EE5\u662F\u6587\u5B57\u3001\u56FE\u7247\u6216\u56FE\u6587\u7EC4\u5408\u7684\u5F62\u5F0F\u3002\u6309\u4E1A\u52A1\u9700\u6C42\u8FDB\u884C\u81EA\u5B9A\u4E49\u7EC4\u5408\u3002',
    };
  },
  methods: {
    clickHandler() {
      MessagePlugin.success('\u64CD\u4F5C');
    },
  },
};
<\/script>
`,I=`<template>
  <t-card
    :title="title"
    :subtitle="subtitle"
    :description="description"
    :actions="actions"
    hover-shadow
    @actions="clickHandler"
    :style="{ width: '400px' }"
  >
    {{ infoMessage }}
  </t-card>
</template>
<script setup>
import { ref } from 'vue';
import { MessagePlugin } from 'tdesign-vue';

const title = ref('\u6807\u9898');
const subtitle = ref('\u526F\u6807\u9898');
const description = ref('\u63CF\u8FF0');
const actions = ref('\u64CD\u4F5C');
const infoMessage = ref('\u5361\u7247\u5185\u5BB9\uFF0C\u4EE5\u63CF\u8FF0\u6027\u4E3A\u4E3B\uFF0C\u53EF\u4EE5\u662F\u6587\u5B57\u3001\u56FE\u7247\u6216\u56FE\u6587\u7EC4\u5408\u7684\u5F62\u5F0F\u3002\u6309\u4E1A\u52A1\u9700\u6C42\u8FDB\u884C\u81EA\u5B9A\u4E49\u7EC4\u5408\u3002');
const clickHandler = () => {
  MessagePlugin.success('\u64CD\u4F5C');
};
<\/script>
`,H=`<template>
  <t-card bordered :title="title" :loading="isLoading" :style="{ width: '400px' }" :loading-props="customProps">
    {{ infoMessage }}
  </t-card>
</template>

<script>
export default {
  data() {
    return {
      title: '\u81EA\u5B9A\u4E49loadingProps Card',
      isLoading: true,
      customProps: {
        text: 'TDesign\u52AA\u529B\u52A0\u8F7D\u4E2D...',
      },
      infoMessage: '\u5361\u7247\u5185\u5BB9\uFF0C\u4EE5\u63CF\u8FF0\u6027\u4E3A\u4E3B\uFF0C\u53EF\u4EE5\u662F\u6587\u5B57\u3001\u56FE\u7247\u6216\u56FE\u6587\u7EC4\u5408\u7684\u5F62\u5F0F\u3002\u6309\u4E1A\u52A1\u9700\u6C42\u8FDB\u884C\u81EA\u5B9A\u4E49\u7EC4\u5408\u3002',
    };
  },
};
<\/script>
`,j=`<template>
  <t-card bordered :title="title" :loading="isLoading" :style="{ width: '400px' }" :loading-props="customProps">
    {{ infoMessage }}
  </t-card>
</template>

<script setup>
import { ref, reactive } from 'vue';

const title = ref('\u81EA\u5B9A\u4E49loadingProps Card');
const isLoading = ref(true);
const customProps = reactive({
  text: 'TDesign\u52AA\u529B\u52A0\u8F7D\u4E2D...',
});
const infoMessage = ref('\u5361\u7247\u5185\u5BB9\uFF0C\u4EE5\u63CF\u8FF0\u6027\u4E3A\u4E3B\uFF0C\u53EF\u4EE5\u662F\u6587\u5B57\u3001\u56FE\u7247\u6216\u56FE\u6587\u7EC4\u5408\u7684\u5F62\u5F0F\u3002\u6309\u4E1A\u52A1\u9700\u6C42\u8FDB\u884C\u81EA\u5B9A\u4E49\u7EC4\u5408\u3002');
<\/script>
`;export{j as A,n as D,t as a,e as b,o as c,a as d,s as e,i as f,r as g,c as h,l as i,p as j,d as k,m as l,u as m,g as n,h as o,v as p,f as q,x as r,b as s,y as t,w as u,M as v,k as w,C as x,I as y,H as z};
