import{Y as l,n as v}from"./index.663c003f.js";var x=`<template>
  <div class="tdesign-demo-dropdown">
    <t-dropdown :options="options" @click="clickHandler">
      <t-button variant="text">
        <span class="tdesign-demo-dropdown__text">
          \u66F4\u591A
          <chevron-down-icon size="16" />
        </span>
      </t-button>
    </t-dropdown>
  </div>
</template>
<script lang="jsx">
import { ChevronDownIcon } from 'tdesign-icons-vue';

export default {
  components: {
    ChevronDownIcon,
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
        {
          content: '\u64CD\u4F5C\u4E09',
          value: 3,
        },
        {
          content: this.getContent,
          value: 4,
        },
      ],
    };
  },
  methods: {
    clickHandler(data) {
      this.$message.success(\`\u9009\u4E2D\u3010\${data.value}\u3011\`);
    },
    getContent() {
      return <div>\u64CD\u4F5C\u56DB</div>;
    },
  },
};
<\/script>
<style lang="less" scoped>
.tdesign-demo-dropdown {
  &__text {
    display: inline-flex;
    align-items: center;
    .t-icon {
      margin-left: 8px;
    }
  }
}
</style>
`,b=`<template>
  <div class="tdesign-demo-dropdown">
    <t-dropdown :options="options" @click="clickHandler">
      <t-button variant="text">
        <span class="tdesign-demo-dropdown__text">
          \u66F4\u591A
          <chevron-down-icon size="16" />
        </span>
      </t-button>
    </t-dropdown>
  </div>
</template>
<script setup lang="jsx">
import { MessagePlugin } from 'tdesign-vue';
import { ref } from 'vue';
import { ChevronDownIcon } from 'tdesign-icons-vue';

const options = ref([
  {
    content: '\u64CD\u4F5C\u4E00',
    value: 1,
  },
  {
    content: '\u64CD\u4F5C\u4E8C',
    value: 2,
  },
  {
    content: '\u64CD\u4F5C\u4E09',
    value: 3,
  },
  {
    content: getContent,
    value: 4,
  },
]);
const clickHandler = (data) => {
  MessagePlugin.success(\`\u9009\u4E2D\u3010\${data.value}\u3011\`);
};
const getContent = () => <div>\u64CD\u4F5C\u56DB</div>;
<\/script>
<style lang="less" scoped>
.tdesign-demo-dropdown {
  &__text {
    display: inline-flex;
    align-items: center;
    .t-icon {
      margin-left: 8px;
    }
  }
}
</style>
`,w=`<template>
  <div>
    <t-dropdown :options="options" @click="clickHandler">
      <t-button theme="default" variant="outline" shape="square">
        <t-icon name="ellipsis" size="16" />
      </t-button>
    </t-dropdown>
  </div>
</template>
<script>
export default {
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
        {
          content: '\u64CD\u4F5C\u4E09',
          value: 3,
        },
        {
          content: '\u64CD\u4F5C\u56DB',
          value: 4,
        },
      ],
    };
  },
  methods: {
    clickHandler(data) {
      this.$message.success(\`\u9009\u4E2D\u3010\${data.content}\u3011\`);
    },
  },
};
<\/script>
<style scoped>
.t-button {
  margin-right: 20px;
}
</style>
`,C=`<template>
  <div>
    <t-dropdown :options="options" @click="clickHandler">
      <t-button theme="default" variant="outline" shape="square">
        <t-icon name="ellipsis" size="16" />
      </t-button>
    </t-dropdown>
  </div>
</template>
<script setup>
import { MessagePlugin } from 'tdesign-vue';
import { ref } from 'vue';

const options = ref([
  {
    content: '\u64CD\u4F5C\u4E00',
    value: 1,
  },
  {
    content: '\u64CD\u4F5C\u4E8C',
    value: 2,
  },
  {
    content: '\u64CD\u4F5C\u4E09',
    value: 3,
  },
  {
    content: '\u64CD\u4F5C\u56DB',
    value: 4,
  },
]);
const clickHandler = (data) => {
  MessagePlugin.success(\`\u9009\u4E2D\u3010\${data.content}\u3011\`);
};
<\/script>
<style scoped>
.t-button {
  margin-right: 20px;
}
</style>
`,k=`<template>
  <div>
    <t-dropdown :options="options">
      <t-button theme="default" variant="outline">\u4E0B\u62C9\u83DC\u5355</t-button>
    </t-dropdown>
  </div>
</template>
<script>
export default {
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
        {
          content: '\u64CD\u4F5C\u4E09',
          value: 3,
          divider: true,
        },
        {
          content: '\u64CD\u4F5C\u56DB',
          value: 4,
        },
      ],
    };
  },
};
<\/script>
<style scoped>
.t-button {
  margin-right: 20px;
}
</style>
`,_=`<template>
  <div>
    <t-dropdown :options="options">
      <t-button theme="default" variant="outline">\u4E0B\u62C9\u83DC\u5355</t-button>
    </t-dropdown>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const options = ref([
  {
    content: '\u64CD\u4F5C\u4E00',
    value: 1,
  },
  {
    content: '\u64CD\u4F5C\u4E8C',
    value: 2,
  },
  {
    content: '\u64CD\u4F5C\u4E09',
    value: 3,
    divider: true,
  },
  {
    content: '\u64CD\u4F5C\u56DB',
    value: 4,
  },
]);
<\/script>
<style scoped>
.t-button {
  margin-right: 20px;
}
</style>
`,D=`<template>
  <div class="tdesign-demo-dropdown">
    <t-dropdown :options="options" @click="clickHandler" :maxColumnWidth="120" :maxHeight="200">
      <t-button variant="text">
        \u4E0B\u62C9\u83DC\u5355
        <chevron-down-icon size="16" slot="suffix" />
      </t-button>
    </t-dropdown>
  </div>
</template>
<script>
import { ChevronDownIcon } from 'tdesign-icons-vue';

export default {
  components: {
    ChevronDownIcon,
  },
  data() {
    return {
      options: [
        {
          content: '\u64CD\u4F5C\u4E00',
          value: 1,
          children: [
            {
              content: '\u64CD\u4F5C\u4E5D',
              value: 9,
            },
          ],
        },
        {
          content: '\u64CD\u4F5C\u4E8C\u64CD\u4F5C\u4E8C\u64CD\u4F5C\u4E8C\u64CD\u4F5C\u4E8C',
          value: 2,
          children: [
            {
              content: '\u64CD\u4F5C\u4E94',
              value: 5,
            },
            {
              content: '\u64CD\u4F5C\u516D',
              value: 6,
            },
          ],
        },
        {
          content: '\u64CD\u4F5C\u4E09',
          value: 3,
          children: [
            {
              content: '\u64CD\u4F5C\u5341',
              value: 10,
            },
          ],
        },
        {
          content: '\u64CD\u4F5C\u56DB',
          value: 4,
          children: [
            {
              content: '\u64CD\u4F5C\u5341\u4E00',
              value: 11,
            },
          ],
        },
        {
          content: '\u64CD\u4F5C\u4E94',
          value: 5,
          children: [
            {
              content: '\u64CD\u4F5C\u5341\u4E8C',
              value: 12,
            },
          ],
        },
        {
          content: '\u64CD\u4F5C\u516D',
          value: 6,
          children: [
            {
              content: '\u64CD\u4F5C\u5341\u4E09',
              value: 13,
            },
          ],
        },
        {
          content: '\u64CD\u4F5C\u4E03',
          value: 7,
        },
        {
          content: '\u64CD\u4F5C\u516B',
          value: 8,
        },
        {
          content: '\u64CD\u4F5C\u5341\u516B',
          value: 18,
          children: [
            {
              content: '\u64CD\u4F5C\u5341\u56DB',
              value: 14,
            },
            {
              content: '\u64CD\u4F5C\u5341\u4E94',
              value: 15,
            },
            {
              content: '\u64CD\u4F5C\u5341\u516D',
              value: 16,
              children: [
                {
                  content: '\u4E09\u7EA7\u64CD\u4F5C\u4E00',
                  value: 20,
                },
                {
                  content: '\u4E09\u7EA7\u64CD\u4F5C\u4E8C',
                  value: 21,
                },
              ],
            },
            {
              content: '\u64CD\u4F5C\u5341\u4E03',
              value: 17,
            },
          ],
        },
      ],
    };
  },
  methods: {
    clickHandler(data, context) {
      console.log(data);
      console.log(context);
    },
  },
};
<\/script>
`,I=`<template>
  <div class="tdesign-demo-dropdown">
    <t-dropdown :options="options" @click="clickHandler" :maxColumnWidth="120" :maxHeight="200">
      <t-button variant="text">
        \u4E0B\u62C9\u83DC\u5355
        <chevron-down-icon size="16" slot="suffix" />
      </t-button>
    </t-dropdown>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { ChevronDownIcon } from 'tdesign-icons-vue';

const options = ref([
  {
    content: '\u64CD\u4F5C\u4E00',
    value: 1,
    children: [
      {
        content: '\u64CD\u4F5C\u4E5D',
        value: 9,
      },
    ],
  },
  {
    content: '\u64CD\u4F5C\u4E8C\u64CD\u4F5C\u4E8C\u64CD\u4F5C\u4E8C\u64CD\u4F5C\u4E8C',
    value: 2,
    children: [
      {
        content: '\u64CD\u4F5C\u4E94',
        value: 5,
      },
      {
        content: '\u64CD\u4F5C\u516D',
        value: 6,
      },
    ],
  },
  {
    content: '\u64CD\u4F5C\u4E09',
    value: 3,
    children: [
      {
        content: '\u64CD\u4F5C\u5341',
        value: 10,
      },
    ],
  },
  {
    content: '\u64CD\u4F5C\u56DB',
    value: 4,
    children: [
      {
        content: '\u64CD\u4F5C\u5341\u4E00',
        value: 11,
      },
    ],
  },
  {
    content: '\u64CD\u4F5C\u4E94',
    value: 5,
    children: [
      {
        content: '\u64CD\u4F5C\u5341\u4E8C',
        value: 12,
      },
    ],
  },
  {
    content: '\u64CD\u4F5C\u516D',
    value: 6,
    children: [
      {
        content: '\u64CD\u4F5C\u5341\u4E09',
        value: 13,
      },
    ],
  },
  {
    content: '\u64CD\u4F5C\u4E03',
    value: 7,
  },
  {
    content: '\u64CD\u4F5C\u516B',
    value: 8,
  },
  {
    content: '\u64CD\u4F5C\u5341\u516B',
    value: 18,
    children: [
      {
        content: '\u64CD\u4F5C\u5341\u56DB',
        value: 14,
      },
      {
        content: '\u64CD\u4F5C\u5341\u4E94',
        value: 15,
      },
      {
        content: '\u64CD\u4F5C\u5341\u516D',
        value: 16,
        children: [
          {
            content: '\u4E09\u7EA7\u64CD\u4F5C\u4E00',
            value: 20,
          },
          {
            content: '\u4E09\u7EA7\u64CD\u4F5C\u4E8C',
            value: 21,
          },
        ],
      },
      {
        content: '\u64CD\u4F5C\u5341\u4E03',
        value: 17,
      },
    ],
  },
]);
const clickHandler = (data, context) => {
  console.log(data);
  console.log(context);
};
<\/script>
`,y=`<template>
  <div class="tdesign-demo-dropdown">
    <t-dropdown :options="options">
      <t-button variant="text">
        <span class="tdesign-demo-dropdown__text">
          \u4E0B\u62C9\u83DC\u5355
          <chevron-down-icon size="16" slot="suffix" />
        </span>
      </t-button>
    </t-dropdown>
  </div>
</template>
<script>
import { ChevronDownIcon } from 'tdesign-icons-vue';

export default {
  components: {
    ChevronDownIcon,
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
        {
          content: '\u64CD\u4F5C\u4E09',
          value: 3,
          disabled: true,
        },
        {
          content: '\u64CD\u4F5C\u56DB',
          value: 4,
          disabled: true,
        },
      ],
    };
  },
};
<\/script>
`,H=`<template>
  <div class="tdesign-demo-dropdown">
    <t-dropdown :options="options">
      <t-button variant="text">
        <span class="tdesign-demo-dropdown__text">
          \u4E0B\u62C9\u83DC\u5355
          <chevron-down-icon size="16" slot="suffix" />
        </span>
      </t-button>
    </t-dropdown>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { ChevronDownIcon } from 'tdesign-icons-vue';

const options = ref([
  {
    content: '\u64CD\u4F5C\u4E00',
    value: 1,
  },
  {
    content: '\u64CD\u4F5C\u4E8C',
    value: 2,
  },
  {
    content: '\u64CD\u4F5C\u4E09',
    value: 3,
    disabled: true,
  },
  {
    content: '\u64CD\u4F5C\u56DB',
    value: 4,
    disabled: true,
  },
]);
<\/script>
`,P=`<template>
  <div>
    <t-dropdown
      :options="options"
      placement="top-left"
      trigger="click"
      :hideAfterItemClick="false"
      :minColumnWidth="100"
    >
      <t-button variant="text">\u4E0B\u62C9\u83DC\u5355</t-button>
    </t-dropdown>
  </div>
</template>
<script>
export default {
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
          children: [
            {
              content: '\u64CD\u4F5C\u4E94',
              value: 5,
            },
            {
              content: '\u64CD\u4F5C\u516D',
              value: 6,
            },
          ],
        },
        {
          content: '\u64CD\u4F5C\u4E09',
          value: 3,
        },
        {
          content: '\u64CD\u4F5C\u56DB',
          value: 4,
        },
      ],
    };
  },
};
<\/script>
<style scoped>
.t-button {
  margin-right: 20px;
}
</style>
`,$=`<template>
  <div>
    <t-dropdown
      :options="options"
      placement="top-left"
      trigger="click"
      :hideAfterItemClick="false"
      :minColumnWidth="100"
    >
      <t-button variant="text">\u4E0B\u62C9\u83DC\u5355</t-button>
    </t-dropdown>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const options = ref([
  {
    content: '\u64CD\u4F5C\u4E00',
    value: 1,
  },
  {
    content: '\u64CD\u4F5C\u4E8C',
    value: 2,
    children: [
      {
        content: '\u64CD\u4F5C\u4E94',
        value: 5,
      },
      {
        content: '\u64CD\u4F5C\u516D',
        value: 6,
      },
    ],
  },
  {
    content: '\u64CD\u4F5C\u4E09',
    value: 3,
  },
  {
    content: '\u64CD\u4F5C\u56DB',
    value: 4,
  },
]);
<\/script>
<style scoped>
.t-button {
  margin-right: 20px;
}
</style>
`,M=`<template>
  <div>
    <t-dropdown :options="options" :maxHeight="400" :minColumnWidth="88">
      <t-button variant="text">\u4E0B\u62C9\u83DC\u5355</t-button>
    </t-dropdown>
  </div>
</template>
<script>
export default {
  data() {
    const initialOptions = Array.from({ length: 20 }).map((v, k) => ({
      content: \`\u64CD\u4F5C\${k + 1}\`,
      value: k + 1,
    }));
    return {
      options: initialOptions,
    };
  },
};
<\/script>
<style scoped>
.t-button {
  margin-right: 20px;
}
</style>
`,O=`<template>
  <div>
    <t-dropdown :options="options" :maxHeight="400" :minColumnWidth="88">
      <t-button variant="text">\u4E0B\u62C9\u83DC\u5355</t-button>
    </t-dropdown>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const initialOptions = Array.from({
  length: 20,
}).map((v, k) => ({
  content: \`\u64CD\u4F5C\${k + 1}\`,
  value: k + 1,
}));
const options = ref(initialOptions);
<\/script>
<style scoped>
.t-button {
  margin-right: 20px;
}
</style>
`,z=`<template>
  <t-space class="tdesign-demo-dropdown">
    <t-dropdown :options="options" @click="clickHandler">
      <t-button variant="text"> \u4E0B\u62C9\u83DC\u5355 </t-button>
    </t-dropdown>
  </t-space>
</template>
<script>
import { MessagePlugin } from 'tdesign-vue';

const initialOptions = [
  {
    content: '\u9009\u9879\u4E00',
    value: 1,
    children: [
      {
        content: '\u9009\u9879\u4E5D',
        value: 9,
      },
    ],
  },
  {
    content: '\u9009\u9879\u4E8C',
    value: 3,
    children: [
      {
        content: '\u9009\u9879\u5341',
        value: 10,
      },
    ],
  },
  {
    content: '\u5371\u9669\u64CD\u4F5C',
    value: 4,
    theme: 'error',
    children: [
      {
        content: '\u5371\u9669\u64CD\u4F5C\u4E00',
        value: 11,
        theme: 'error',
        children: [
          {
            content: '\u5371\u9669\u64CD\u4F5C\u9879',
            value: 13,
            theme: 'error',
          },
          {
            content: '\u64CD\u4F5C\u9879',
            value: 12,
          },
        ],
      },
    ],
  },
];

export default {
  data() {
    return {
      options: initialOptions,
    };
  },
  methods: {
    clickHandler(data) {
      MessagePlugin.success(\`\u9009\u4E2D\u3010\${data.content}\u3011\`);
    },
  },
};
<\/script>
`,j=`<template>
  <t-space class="tdesign-demo-dropdown">
    <t-dropdown :options="options" @click="clickHandler">
      <t-button variant="text"> \u4E0B\u62C9\u83DC\u5355 </t-button>
    </t-dropdown>
  </t-space>
</template>
<script setup>
import { ref } from 'vue';
import { MessagePlugin } from 'tdesign-vue';

const initialOptions = [
  {
    content: '\u9009\u9879\u4E00',
    value: 1,
    children: [
      {
        content: '\u9009\u9879\u4E5D',
        value: 9,
      },
    ],
  },
  {
    content: '\u9009\u9879\u4E8C',
    value: 3,
    children: [
      {
        content: '\u9009\u9879\u5341',
        value: 10,
      },
    ],
  },
  {
    content: '\u5371\u9669\u64CD\u4F5C',
    value: 4,
    theme: 'error',
    children: [
      {
        content: '\u5371\u9669\u64CD\u4F5C\u4E00',
        value: 11,
        theme: 'error',
        children: [
          {
            content: '\u5371\u9669\u64CD\u4F5C\u9879',
            value: 13,
            theme: 'error',
          },
          {
            content: '\u64CD\u4F5C\u9879',
            value: 12,
          },
        ],
      },
    ],
  },
];
const options = ref(initialOptions);
const clickHandler = (data) => {
  MessagePlugin.success(\`\u9009\u4E2D\u3010\${data.content}\u3011\`);
};
<\/script>
`,W=`<template>
  <t-space>
    <t-dropdown :options="options" :max-column-width="120" direction="left" @click="clickHandler">
      <t-button variant="text"> \u4E0B\u62C9\u83DC\u5355 </t-button>
    </t-dropdown>
  </t-space>
</template>
<script>
import { MessagePlugin } from 'tdesign-vue';

const initialOptions = [
  {
    content: '\u9009\u9879\u4E00',
    value: 1,
    children: [
      {
        content: '\u9009\u9879\u4E5D',
        value: 9,
      },
    ],
  },
  {
    content: '\u9009\u9879\u4E8C',
    value: 2,
    children: [
      {
        content: '\u9009\u9879\u4E94',
        value: 5,
      },
      {
        content: '\u9009\u9879\u516D',
        value: 6,
        children: [
          {
            content: '\u9009\u9879\u4E03',
            value: 7,
          },
          {
            content: '\u9009\u9879\u516B',
            value: 8,
          },
        ],
      },
    ],
  },
  {
    content: '\u9009\u9879\u4E09',
    value: 3,
    children: [
      {
        content: '\u9009\u9879\u5341',
        value: 10,
      },
    ],
  },
];

export default {
  data() {
    return {
      options: initialOptions,
    };
  },
  methods: {
    clickHandler(data) {
      MessagePlugin.success(\`\u9009\u4E2D\u3010\${data.content}\u3011\`);
    },
  },
};
<\/script>
`,A=`<template>
  <t-space>
    <t-dropdown :options="options" :max-column-width="120" direction="left" @click="clickHandler">
      <t-button variant="text"> \u4E0B\u62C9\u83DC\u5355 </t-button>
    </t-dropdown>
  </t-space>
</template>
<script setup>
import { ref } from 'vue';
import { MessagePlugin } from 'tdesign-vue';

const initialOptions = [
  {
    content: '\u9009\u9879\u4E00',
    value: 1,
    children: [
      {
        content: '\u9009\u9879\u4E5D',
        value: 9,
      },
    ],
  },
  {
    content: '\u9009\u9879\u4E8C',
    value: 2,
    children: [
      {
        content: '\u9009\u9879\u4E94',
        value: 5,
      },
      {
        content: '\u9009\u9879\u516D',
        value: 6,
        children: [
          {
            content: '\u9009\u9879\u4E03',
            value: 7,
          },
          {
            content: '\u9009\u9879\u516B',
            value: 8,
          },
        ],
      },
    ],
  },
  {
    content: '\u9009\u9879\u4E09',
    value: 3,
    children: [
      {
        content: '\u9009\u9879\u5341',
        value: 10,
      },
    ],
  },
];
const options = ref(initialOptions);
const clickHandler = (data) => {
  MessagePlugin.success(\`\u9009\u4E2D\u3010\${data.content}\u3011\`);
};
<\/script>
`,V=`<template>
  <div class="tdesign-demo-dropdown">
    <t-dropdown :options="options" @click="clickHandler">
      <t-button variant="text">
        <span class="tdesign-demo-dropdown__text">
          \u66F4\u591A
          <chevron-down-icon size="16" />
        </span>
      </t-button>
    </t-dropdown>
  </div>
</template>
<script lang="jsx">
import { ChevronDownIcon, DiscountIcon } from 'tdesign-icons-vue';

export default {
  components: {
    ChevronDownIcon,
  },
  data() {
    return {
      options: [
        {
          content: '\u64CD\u4F5C\u4E00',
          value: 1,
          prefixIcon: <DiscountIcon />,
        },
        {
          content: '\u64CD\u4F5C\u4E8C',
          value: 2,
          prefixIcon: <DiscountIcon />,
        },
        {
          content: '\u64CD\u4F5C\u4E09',
          value: 3,
          prefixIcon: <DiscountIcon />,
        },
        {
          content: '\u64CD\u4F5C\u56DB',
          value: 4,
          prefixIcon: <DiscountIcon />,
          children: [
            {
              content: '\u9009\u9879\u4E94',
              value: 5,
              prefixIcon: () => <DiscountIcon />,
            },
            {
              content: '\u9009\u9879\u516D',
              value: 6,
              prefixIcon: () => <DiscountIcon />,
            },
          ],
        },
      ],
    };
  },
  methods: {
    clickHandler(data) {
      this.$message.success(\`\u9009\u4E2D\u3010\${data.value}\u3011\`);
    },
  },
};
<\/script>
<style lang="less" scoped>
.tdesign-demo-dropdown {
  &__text {
    display: inline-flex;
    align-items: center;
    .t-icon {
      margin-left: 8px;
    }
  }
}
</style>
`,L=`<template>
  <div class="tdesign-demo-dropdown">
    <t-dropdown :options="options" @click="clickHandler">
      <t-button variant="text">
        <span class="tdesign-demo-dropdown__text">
          \u66F4\u591A
          <chevron-down-icon size="16" />
        </span>
      </t-button>
    </t-dropdown>
  </div>
</template>
<script setup lang="jsx">
import { MessagePlugin } from 'tdesign-vue';
import { ref } from 'vue';
import { ChevronDownIcon, DiscountIcon } from 'tdesign-icons-vue';

const options = ref([
  {
    content: '\u64CD\u4F5C\u4E00',
    value: 1,
    prefixIcon: <DiscountIcon />,
  },
  {
    content: '\u64CD\u4F5C\u4E8C',
    value: 2,
    prefixIcon: <DiscountIcon />,
  },
  {
    content: '\u64CD\u4F5C\u4E09',
    value: 3,
    prefixIcon: <DiscountIcon />,
  },
  {
    content: '\u64CD\u4F5C\u56DB',
    value: 4,
    prefixIcon: <DiscountIcon />,
    children: [
      {
        content: '\u9009\u9879\u4E94',
        value: 5,
        prefixIcon: () => <DiscountIcon />,
      },
      {
        content: '\u9009\u9879\u516D',
        value: 6,
        prefixIcon: () => <DiscountIcon />,
      },
    ],
  },
]);
const clickHandler = (data) => {
  MessagePlugin.success(\`\u9009\u4E2D\u3010\${data.value}\u3011\`);
};
<\/script>
<style lang="less" scoped>
.tdesign-demo-dropdown {
  &__text {
    display: inline-flex;
    align-items: center;
    .t-icon {
      margin-left: 8px;
    }
  }
}
</style>
`,m=[{name:"direction",type:"enum",defaultValue:"right",options:[{label:"left",value:"left"},{label:"right",value:"right"}]},{name:"disabled",type:"Boolean",defaultValue:!1,options:[]},{name:"hideAfterItemClick",type:"Boolean",defaultValue:!0,options:[]},{name:"placement",type:"enum",defaultValue:"bottom-left",options:[{label:"top",value:"top"},{label:"left",value:"left"},{label:"right",value:"right"},{label:"bottom",value:"bottom"},{label:"top-left",value:"top-left"},{label:"top-right",value:"top-right"},{label:"bottom-left",value:"bottom-left"},{label:"bottom-right",value:"bottom-right"},{label:"left-top",value:"left-top"},{label:"left-bottom",value:"left-bottom"},{label:"right-top",value:"right-top"},{label:"right-bottom",value:"right-bottom"}]},{name:"trigger",type:"enum",defaultValue:"hover",options:[{label:"hover",value:"hover"},{label:"click",value:"click"},{label:"focus",value:"focus"},{label:"context-menu",value:"context-menu"}]}];const s={};s.setup=(n,t)=>{const e=l(m),o=[{label:"dropdown",value:"dropdown"}],a={dropdown:`
        <t-dropdown :options="[{ content: '\u64CD\u4F5C\u4E00', value: 1 }, { content: '\u64CD\u4F5C\u4E8C', value: 2 }]" v-bind="configProps">
          <t-button>\u66F4\u591A...</t-button>
        </t-dropdown>
      `},i=l(`<template>${a[o[0].value].trim()}</template>`);function p(u){i.value=`<template>${a[u].trim()}</template>`}return{configList:e,panelList:o,usageCode:i,onPanelChange:p}};var r=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("base-usage",{attrs:{code:n.usageCode,"config-list":n.configList,"panel-list":n.panelList},on:{PanelChange:n.onPanelChange},scopedSlots:n._u([{key:"dropdown",fn:function(o){var a=o.configProps;return[e("t-dropdown",n._b({attrs:{options:[{content:"\u64CD\u4F5C\u4E00",value:1},{content:"\u64CD\u4F5C\u4E8C",value:2}]}},"t-dropdown",a,!1),[e("t-button",[n._v("\u66F4\u591A...")])],1)]}}])})},g=[];r._withStripped=!0;const c={};var d=v(s,r,g,!1,f,null,null,null);function f(n){for(let t in c)this[t]=c[t]}d.options.__file="../src/dropdown/_usage/index.vue";var q=function(){return d.exports}();export{x as D,q as U,b as a,w as b,C as c,k as d,_ as e,D as f,I as g,y as h,H as i,P as j,$ as k,M as l,O as m,z as n,j as o,W as p,A as q,V as r,L as s};
