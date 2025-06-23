import{Y as o,n as m}from"./index.663c003f.js";var g=`<template>
  <t-space direction="vertical">
    <t-tree :data="items" activable hover transition />
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          label: '\u7B2C\u4E00\u6BB5',
          children: [
            {
              label: '\u7B2C\u4E8C\u6BB5',
            },
            {
              label: '\u7B2C\u4E8C\u6BB5',
            },
          ],
        },
        {
          label: '\u7B2C\u4E00\u6BB5',
          children: [
            {
              label: '\u7B2C\u4E8C\u6BB5',
            },
            {
              label: '\u7B2C\u4E8C\u6BB5',
            },
          ],
        },
        {
          label: '\u7B2C\u4E00\u6BB5',
          children: [
            {
              label: '\u7B2C\u4E8C\u6BB5',
            },
            {
              label: '\u7B2C\u4E8C\u6BB5',
            },
          ],
        },
        {
          label: '\u7B2C\u4E00\u6BB5',
          children: [
            {
              label: '\u7B2C\u4E8C\u6BB5',
            },
            {
              label: '\u7B2C\u4E8C\u6BB5',
            },
          ],
        },
      ],
    };
  },
};
<\/script>
`,k=`<template>
  <t-space direction="vertical">
    <t-tree :data="items" activable hover transition />
  </t-space>
</template>

<script setup>
import { ref } from 'vue';

const items = ref([
  {
    label: '\u7B2C\u4E00\u6BB5',
    children: [
      {
        label: '\u7B2C\u4E8C\u6BB5',
      },
      {
        label: '\u7B2C\u4E8C\u6BB5',
      },
    ],
  },
  {
    label: '\u7B2C\u4E00\u6BB5',
    children: [
      {
        label: '\u7B2C\u4E8C\u6BB5',
      },
      {
        label: '\u7B2C\u4E8C\u6BB5',
      },
    ],
  },
  {
    label: '\u7B2C\u4E00\u6BB5',
    children: [
      {
        label: '\u7B2C\u4E8C\u6BB5',
      },
      {
        label: '\u7B2C\u4E8C\u6BB5',
      },
    ],
  },
  {
    label: '\u7B2C\u4E00\u6BB5',
    children: [
      {
        label: '\u7B2C\u4E8C\u6BB5',
      },
      {
        label: '\u7B2C\u4E8C\u6BB5',
      },
    ],
  },
]);
<\/script>
`,C=`<template>
  <t-space direction="vertical">
    <t-space>
      <span>\u53EF\u9009:</span>
      <t-switch v-model="checkable" />
    </t-space>
    <t-space>
      <span>\u4E25\u683C\u6A21\u5F0F:</span>
      <t-switch v-model="checkStrictly" />
    </t-space>
    <t-space>
      <t-radio-group v-model="valueMode" name="value-mode" variant="default-filled">
        <t-radio-button v-for="item in valueOptions" :key="item.value" :value="item.value">{{
          item.label
        }}</t-radio-button>
      </t-radio-group>
    </t-space>
    <t-space>
      <t-button theme="primary" @click="selectInvert">\u53CD\u9009</t-button>
    </t-space>
    <t-tree
      ref="tree"
      v-model="allChecked"
      :data="items"
      :checkable="checkable"
      :check-strictly="checkStrictly"
      :value-mode="valueMode"
      hover
      expand-all
      @change="onChange"
      @click="onClick"
    />
  </t-space>
</template>

<script>
const treeItems = [
  {
    value: '1',
    label: '1',
    children: [
      {
        value: '1.1',
        label: '1.1',
        children: [
          {
            value: '1.1.1',
            label: '1.1.1',
            children: [
              {
                value: '1.1.1.1',
                label: '1.1.1.1',
              },
              {
                value: '1.1.1.2',
                label: '1.1.1.2',
              },
            ],
          },
          {
            value: '1.1.2',
            label: '1.1.2',
            children: [
              {
                value: '1.1.2.1',
                label: '1.1.2.1',
              },
              {
                value: '1.1.2.2',
                label: '1.1.2.2',
              },
            ],
          },
        ],
      },
      {
        value: '1.2',
        label: '1.2',
        children: [
          {
            value: '1.2.1',
            label: '1.2.1',
            children: [
              {
                value: '1.2.1.1',
                label: '1.2.1.1',
              },
              {
                value: '1.2.1.2',
                label: '1.2.1.2',
              },
            ],
          },
          {
            value: '1.2.2',
            label: '1.2.2',
            children: [
              {
                value: '1.2.2.1',
                label: '1.2.2.1',
              },
              {
                value: '1.2.2.2',
                label: '1.2.2.2',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    value: '2',
    label: '2',
    children: [
      {
        value: '2.1',
        label: '2.1',
      },
      {
        value: '2.2',
        label: '2.2',
      },
    ],
  },
];

export default {
  data() {
    return {
      valueMode: 'onlyLeaf',
      checkable: true,
      checkStrictly: false,
      allChecked: [],
      valueOptions: [
        {
          value: 'onlyLeaf',
          label: 'onlyLeaf',
        },
        {
          value: 'parentFirst',
          label: 'parentFirst',
        },
        {
          value: 'all',
          label: 'all',
        },
      ],
      items: treeItems,
    };
  },
  methods: {
    onClick(context) {
      console.info('onClick context:', context);
      const { node } = context;
      console.info(node.value, 'onClick context.node.checked:', node.checked);
    },
    onChange(checked, context) {
      console.info('onChange checked:', checked, 'context:', context);
      const { node } = context;
      console.info(node.value, 'onChange context.node.checked:', node.checked);
    },
    selectInvert() {
      const { tree } = this.$refs;
      // \u53D6\u5F97\u6240\u6709\u8282\u70B9
      const items = tree.getItems();
      const revertSelection = [];
      items.forEach((item) => {
        if (!item.checked && !item.indeterminate) {
          // checked \u4E3A true, \u4E3A\u76F4\u63A5\u9009\u4E2D\u72B6\u6001
          // indeterminate \u4E3A true, \u4E3A\u534A\u9009\u72B6\u6001
          revertSelection.push(item.value);
        }
      });
      this.allChecked = revertSelection;
    },
  },
};
<\/script>
`,y=`<template>
  <t-space direction="vertical">
    <t-space>
      <span>\u53EF\u9009:</span>
      <t-switch v-model="checkable" />
    </t-space>
    <t-space>
      <span>\u4E25\u683C\u6A21\u5F0F:</span>
      <t-switch v-model="checkStrictly" />
    </t-space>
    <t-space>
      <t-radio-group v-model="valueMode" name="value-mode" variant="default-filled">
        <t-radio-button v-for="item in valueOptions" :key="item.value" :value="item.value">{{
          item.label
        }}</t-radio-button>
      </t-radio-group>
    </t-space>
    <t-space>
      <t-button theme="primary" @click="selectInvert">\u53CD\u9009</t-button>
    </t-space>
    <t-tree
      ref="tree"
      v-model="allChecked"
      :data="items"
      :checkable="checkable"
      :check-strictly="checkStrictly"
      :value-mode="valueMode"
      hover
      expand-all
      @change="onChange"
      @click="onClick"
    />
  </t-space>
</template>

<script setup>
import { ref } from 'vue';

const treeItems = [
  {
    value: '1',
    label: '1',
    children: [
      {
        value: '1.1',
        label: '1.1',
        children: [
          {
            value: '1.1.1',
            label: '1.1.1',
            children: [
              {
                value: '1.1.1.1',
                label: '1.1.1.1',
              },
              {
                value: '1.1.1.2',
                label: '1.1.1.2',
              },
            ],
          },
          {
            value: '1.1.2',
            label: '1.1.2',
            children: [
              {
                value: '1.1.2.1',
                label: '1.1.2.1',
              },
              {
                value: '1.1.2.2',
                label: '1.1.2.2',
              },
            ],
          },
        ],
      },
      {
        value: '1.2',
        label: '1.2',
        children: [
          {
            value: '1.2.1',
            label: '1.2.1',
            children: [
              {
                value: '1.2.1.1',
                label: '1.2.1.1',
              },
              {
                value: '1.2.1.2',
                label: '1.2.1.2',
              },
            ],
          },
          {
            value: '1.2.2',
            label: '1.2.2',
            children: [
              {
                value: '1.2.2.1',
                label: '1.2.2.1',
              },
              {
                value: '1.2.2.2',
                label: '1.2.2.2',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    value: '2',
    label: '2',
    children: [
      {
        value: '2.1',
        label: '2.1',
      },
      {
        value: '2.2',
        label: '2.2',
      },
    ],
  },
];
const tree = ref();
const valueMode = ref('onlyLeaf');
const checkable = ref(true);
const checkStrictly = ref(false);
const allChecked = ref([]);
const valueOptions = ref([
  {
    value: 'onlyLeaf',
    label: 'onlyLeaf',
  },
  {
    value: 'parentFirst',
    label: 'parentFirst',
  },
  {
    value: 'all',
    label: 'all',
  },
]);
const items = ref(treeItems);
const onClick = (context) => {
  console.info('onClick context:', context);
  const { node } = context;
  console.info(node.value, 'onClick context.node.checked:', node.checked);
};
const onChange = (checked, context) => {
  console.info('onChange checked:', checked, 'context:', context);
  const { node } = context;
  console.info(node.value, 'onChange context.node.checked:', node.checked);
};
const selectInvert = () => {
  // \u53D6\u5F97\u6240\u6709\u8282\u70B9
  const items = tree.value.getItems();
  const revertSelection = [];
  items.forEach((item) => {
    if (!item.checked && !item.indeterminate) {
      // checked \u4E3A true, \u4E3A\u76F4\u63A5\u9009\u4E2D\u72B6\u6001
      // indeterminate \u4E3A true, \u4E3A\u534A\u9009\u72B6\u6001
      revertSelection.push(item.value);
    }
  });
  allChecked.value = revertSelection;
};
<\/script>
`,I=`<template>
  <t-space direction="vertical">
    <t-space>
      <span>\u8282\u70B9\u53EF\u9AD8\u4EAE: </span>
      <t-switch v-model="activable" />
    </t-space>
    <t-space>
      <span>\u8282\u70B9\u53EF\u591A\u9009\u9AD8\u4EAE:</span>
      <t-switch v-model="activeMultiple" />
    </t-space>
    <t-space>
      <span>\u6574\u4E2A\u8282\u70B9\u53EF\u70B9\u51FB:</span>
      <t-switch v-model="expandOnClickNode" />
    </t-space>
    <t-tree
      :data="items"
      expand-all
      :activable="activable"
      :active-multiple="activeMultiple"
      :expand-on-click-node="expandOnClickNode"
      :on-active="propOnActive"
      hover
      @click="onClick"
      @active="onActive"
    />
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      activable: true,
      activeMultiple: false,
      expandOnClickNode: false,
      items: [
        {
          value: 't1',
          label: '1',
          children: [
            {
              value: 't1.1',
              label: '1.1',
            },
            {
              value: 't1.2',
              label: '1.2',
            },
          ],
        },
        {
          value: 't2',
          label: '2',
          children: [
            {
              value: 't2.1',
              label: '2.1',
            },
            {
              value: 't2.2',
              label: '2.2',
            },
          ],
        },
      ],
    };
  },
  methods: {
    onClick(context) {
      console.info('onClick', context);
      const { node } = context;
      console.info(node.value, 'actived:', node.actived);
    },
    onActive(value, context) {
      console.info('onActive', value, context);
      const { node } = context;
      console.info(node.value, 'actived:', node.actived);
    },
    propOnActive(value, context) {
      console.info('propOnActive', value, context);
      const { node } = context;
      console.info(node.value, 'actived:', node.actived);
    },
  },
};
<\/script>
`,A=`<template>
  <t-space direction="vertical">
    <t-space>
      <span>\u8282\u70B9\u53EF\u9AD8\u4EAE: </span>
      <t-switch v-model="activable" />
    </t-space>
    <t-space>
      <span>\u8282\u70B9\u53EF\u591A\u9009\u9AD8\u4EAE:</span>
      <t-switch v-model="activeMultiple" />
    </t-space>
    <t-space>
      <span>\u6574\u4E2A\u8282\u70B9\u53EF\u70B9\u51FB:</span>
      <t-switch v-model="expandOnClickNode" />
    </t-space>
    <t-tree
      :data="items"
      expand-all
      :activable="activable"
      :active-multiple="activeMultiple"
      :expand-on-click-node="expandOnClickNode"
      :on-active="propOnActive"
      hover
      @click="onClick"
      @active="onActive"
    />
  </t-space>
</template>

<script setup>
import { ref } from 'vue';

const activable = ref(true);
const activeMultiple = ref(false);
const expandOnClickNode = ref(false);
const items = ref([
  {
    value: 't1',
    label: '1',
    children: [
      {
        value: 't1.1',
        label: '1.1',
      },
      {
        value: 't1.2',
        label: '1.2',
      },
    ],
  },
  {
    value: 't2',
    label: '2',
    children: [
      {
        value: 't2.1',
        label: '2.1',
      },
      {
        value: 't2.2',
        label: '2.2',
      },
    ],
  },
]);
const onClick = (context) => {
  console.info('onClick', context);
  const { node } = context;
  console.info(node.value, 'actived:', node.actived);
};
const onActive = (value, context) => {
  console.info('onActive', value, context);
  const { node } = context;
  console.info(node.value, 'actived:', node.actived);
};
const propOnActive = (value, context) => {
  console.info('propOnActive', value, context);
  const { node } = context;
  console.info(node.value, 'actived:', node.actived);
};
<\/script>
`,w=`<template>
  <t-space direction="vertical">
    <t-tree
      :data="items"
      activable
      hover
      transition
      expand-all
      draggable
      :allow-drop="handleAllowDrop"
      @drag-start="handleDragStart"
      @drag-end="handleDragEnd"
      @drag-over="handleDragOver"
      @drag-leave="handleDragLeave"
      @drop="handleDrop"
    />
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          value: '1',
          label: '1',
          children: [
            {
              value: '1.1',
              label: '1.1',
              children: [
                {
                  value: '1.1.1',
                  label: '1.1.1',
                  children: [
                    {
                      value: '1.1.1.1',
                      label: '1.1.1.1',
                    },
                    {
                      value: '1.1.1.2',
                      label: '1.1.1.2',
                    },
                  ],
                },
                {
                  value: '1.1.2',
                  label: '1.1.2',
                  children: [
                    {
                      value: '1.1.2.1',
                      label: '1.1.2.1',
                    },
                    {
                      value: '1.1.2.2',
                      label: '1.1.2.2',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          value: '2',
          label: '2',
          children: [
            {
              value: '2.1',
              label: '2.1',
            },
            {
              value: '2.2',
              label: '2.2 \u4E0D\u5141\u8BB8\u62D6\u653E\u4E3A 2.2 \u7684\u5B50\u8282\u70B9',
            },
          ],
        },
      ],
    };
  },
  methods: {
    handleDragStart(ctx) {
      console.log('handleDragStart', ctx);
    },
    handleDragEnd(ctx) {
      console.log('handleDragEnd', ctx);
    },
    handleDragOver(ctx) {
      console.log('handleDragOver', ctx);
    },
    handleDragLeave(ctx) {
      console.log('handleDragLeave', ctx);
    },
    handleDrop(ctx) {
      console.log('handleDrop', ctx);
    },
    handleAllowDrop(ctx) {
      const { dropNode, dropPosition } = ctx;
      if (dropNode.value === '2.2' && dropPosition === 0) {
        return false;
      }
    },
  },
};
<\/script>
`,D=`<template>
  <t-space direction="vertical">
    <t-tree
      :data="items"
      activable
      hover
      transition
      expand-all
      draggable
      @drag-start="handleDragStart"
      @drag-end="handleDragEnd"
      @drag-over="handleDragOver"
      @drag-leave="handleDragLeave"
      @drop="handleDrop"
    />
  </t-space>
</template>

<script setup>
import { ref } from 'vue';

const items = ref([
  {
    value: '1',
    label: '1',
    children: [
      {
        value: '1.1',
        label: '1.1',
        children: [
          {
            value: '1.1.1',
            label: '1.1.1',
            children: [
              {
                value: '1.1.1.1',
                label: '1.1.1.1',
              },
              {
                value: '1.1.1.2',
                label: '1.1.1.2',
              },
            ],
          },
          {
            value: '1.1.2',
            label: '1.1.2',
            children: [
              {
                value: '1.1.2.1',
                label: '1.1.2.1',
              },
              {
                value: '1.1.2.2',
                label: '1.1.2.2',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    value: '2',
    label: '2',
    children: [
      {
        value: '2.1',
        label: '2.1',
      },
      {
        value: '2.2',
        label: '2.2',
      },
    ],
  },
]);
const handleDragStart = (ctx) => {
  console.log('handleDragStart', ctx);
};
const handleDragEnd = (ctx) => {
  console.log('handleDragEnd', ctx);
};
const handleDragOver = (ctx) => {
  console.log('handleDragOver', ctx);
};
const handleDragLeave = (ctx) => {
  console.log('handleDragLeave', ctx);
};
const handleDrop = (ctx) => {
  console.log('handleDrop', ctx);
};
<\/script>
`,L=`<template>
  <t-space :size="32" direction="vertical">
    <t-space direction="vertical">
      <t-space>
        <t-input-adornment prepend="filter:">
          <t-input v-model="demo1Text" style="width: 300px" @change="demo1Input" />
        </t-input-adornment>
      </t-space>
      <t-tree ref="tree" :data="items" expand-on-click-node :filter="demo1Filter" hover line />
    </t-space>

    <t-space direction="vertical">
      <t-space>
        <t-input-adornment prepend="filter:">
          <t-input
            v-model="demo2Text"
            placeholder="allow expand or fold tree nodes on filter"
            style="width: 300px"
            @change="demo2Input"
          />
        </t-input-adornment>
      </t-space>
      <t-tree
        ref="tree"
        :data="items"
        expand-on-click-node
        allow-fold-node-on-filter
        :filter="demo2Filter"
        hover
        line
      />
    </t-space>
  </t-space>
</template>

<script>
const exampleItems = [
  {
    value: '1',
    label: '1',
    children: [
      {
        value: '1.1',
        label: '1.1',
        children: [
          {
            value: '1.1.1',
            label: '1.1.1',
            children: [
              {
                value: '1.1.1.1',
                label: '1.1.1.1',
              },
              {
                value: '1.1.1.2',
                label: '1.1.1.2',
              },
            ],
          },
          {
            value: '1.1.2',
            label: '1.1.2',
            children: [
              {
                value: '1.1.2.1',
                label: '1.1.2.1',
              },
              {
                value: '1.1.2.2',
                label: '1.1.2.2',
              },
            ],
          },
        ],
      },
      {
        value: '1.2',
        label: '1.2',
        children: [
          {
            value: '1.2.1',
            label: '1.2.1',
            children: [
              {
                value: '1.2.1.1',
                label: '1.2.1.1',
              },
              {
                value: '1.2.1.2',
                label: '1.2.1.2',
              },
            ],
          },
          {
            value: '1.2.2',
            label: '1.2.2',
            children: [
              {
                value: '1.2.2.1',
                label: '1.2.2.1',
              },
              {
                value: '1.2.2.2',
                label: '1.2.2.2',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    value: '2',
    label: '2',
    children: [
      {
        value: '2.1',
        label: '2.1',
      },
      {
        value: '2.2',
        label: '2.2',
      },
    ],
  },
];

export default {
  data() {
    return {
      demo1Text: '',
      demo1Filter: null,
      demo2Text: '',
      demo2Filter: null,
      items: exampleItems,
    };
  },
  methods: {
    demo1Input(state) {
      console.info('demo1 input:', state);
      if (this.demo1Text) {
        // \u5B58\u5728\u8FC7\u6EE4\u6587\u6848\uFF0C\u624D\u542F\u7528\u8FC7\u6EE4
        this.demo1Filter = (node) => {
          const rs = node.data.label.indexOf(this.demo1Text) >= 0;
          // \u547D\u4E2D\u7684\u8282\u70B9\u4F1A\u5F3A\u5236\u5C55\u793A
          // \u547D\u4E2D\u8282\u70B9\u7684\u8DEF\u5F84\u8282\u70B9\u4F1A\u9501\u5B9A\u5C55\u793A
          // \u672A\u547D\u4E2D\u7684\u8282\u70B9\u4F1A\u9690\u85CF
          return rs;
        };
      } else {
        // \u8FC7\u6EE4\u6587\u6848\u4E3A\u7A7A\uFF0C\u5219\u8FD8\u539F tree \u4E3A\u65E0\u8FC7\u6EE4\u72B6\u6001
        this.demo1Filter = null;
      }
    },
    demo2Input() {
      this.demo2Filter = this.demo2Text ? (node) => node.data.label.indexOf(this.demo2Text) >= 0 : null;
    },
  },
};
<\/script>
`,N=`<template>
  <t-space :size="32" direction="vertical">
    <t-space direction="vertical">
      <t-space>
        <t-input-adornment prepend="filter:">
          <t-input v-model="demo1Text" style="width: 300px" @change="demo1Input" />
        </t-input-adornment>
      </t-space>
      <t-tree ref="tree" :data="items" expand-on-click-node :filter="demo1Filter" hover line />
    </t-space>

    <t-space direction="vertical">
      <t-space>
        <t-input-adornment prepend="filter:">
          <t-input
            v-model="demo2Text"
            placeholder="allow expand or fold tree nodes on filter"
            style="width: 300px"
            @change="demo2Input"
          />
        </t-input-adornment>
      </t-space>
      <t-tree
        ref="tree"
        :data="items"
        expand-on-click-node
        allow-fold-node-on-filter
        :filter="demo2Filter"
        hover
        line
      />
    </t-space>
  </t-space>
</template>

<script setup>
import { ref } from 'vue';

const exampleItems = [
  {
    value: '1',
    label: '1',
    children: [
      {
        value: '1.1',
        label: '1.1',
        children: [
          {
            value: '1.1.1',
            label: '1.1.1',
            children: [
              {
                value: '1.1.1.1',
                label: '1.1.1.1',
              },
              {
                value: '1.1.1.2',
                label: '1.1.1.2',
              },
            ],
          },
          {
            value: '1.1.2',
            label: '1.1.2',
            children: [
              {
                value: '1.1.2.1',
                label: '1.1.2.1',
              },
              {
                value: '1.1.2.2',
                label: '1.1.2.2',
              },
            ],
          },
        ],
      },
      {
        value: '1.2',
        label: '1.2',
        children: [
          {
            value: '1.2.1',
            label: '1.2.1',
            children: [
              {
                value: '1.2.1.1',
                label: '1.2.1.1',
              },
              {
                value: '1.2.1.2',
                label: '1.2.1.2',
              },
            ],
          },
          {
            value: '1.2.2',
            label: '1.2.2',
            children: [
              {
                value: '1.2.2.1',
                label: '1.2.2.1',
              },
              {
                value: '1.2.2.2',
                label: '1.2.2.2',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    value: '2',
    label: '2',
    children: [
      {
        value: '2.1',
        label: '2.1',
      },
      {
        value: '2.2',
        label: '2.2',
      },
    ],
  },
];
const demo1Text = ref('');
const demo1Filter = ref(null);
const demo2Text = ref('');
const demo2Filter = ref(null);
const items = ref(exampleItems);
const demo1Input = (state) => {
  console.info('demo1 input:', state);
  if (demo1Text.value) {
    // \u5B58\u5728\u8FC7\u6EE4\u6587\u6848\uFF0C\u624D\u542F\u7528\u8FC7\u6EE4
    demo1Filter.value = (node) => {
      const rs = node.data.label.indexOf(demo1Text.value) >= 0;
      // \u547D\u4E2D\u7684\u8282\u70B9\u4F1A\u5F3A\u5236\u5C55\u793A
      // \u547D\u4E2D\u8282\u70B9\u7684\u8DEF\u5F84\u8282\u70B9\u4F1A\u9501\u5B9A\u5C55\u793A
      // \u672A\u547D\u4E2D\u7684\u8282\u70B9\u4F1A\u9690\u85CF
      return rs;
    };
  } else {
    // \u8FC7\u6EE4\u6587\u6848\u4E3A\u7A7A\uFF0C\u5219\u8FD8\u539F tree \u4E3A\u65E0\u8FC7\u6EE4\u72B6\u6001
    demo1Filter.value = null;
  }
};
const demo2Input = () => {
  demo2Filter.value = demo2Text.value ? (node) => node.data.label.indexOf(demo2Text.value) >= 0 : null;
};
<\/script>
`,T=`<template>
  <t-space direction="vertical" style="width: 100%" class="tdesign-tree-operations">
    <t-space>
      <span>\u63D2\u5165\u8282\u70B9\u4F7F\u7528\u9AD8\u4EAE\u8282\u70B9:</span>
      <t-switch v-model="useActived" />
    </t-space>
    <t-space>
      <span>\u5B50\u8282\u70B9\u5C55\u5F00\u89E6\u53D1\u7236\u8282\u70B9\u5C55\u5F00:</span>
      <t-switch v-model="expandParent" />
    </t-space>
    <t-space>
      <t-input-adornment prepend="filter:">
        <t-input v-model="filterText" @change="onInputChange" />
      </t-input-adornment>
    </t-space>
    <t-tree
      ref="tree"
      :data="items"
      hover
      expand-all
      activable
      checkable
      :expand-on-click-node="false"
      :label="getLabel"
      :expand-parent="expandParent"
      :filter="filterByText"
      line
      @expand="onExpand"
      @change="onChange"
      @active="onActive"
    >
      <template #operations="{ node }">
        <t-space :size="10">
          <t-button size="small" variant="base" @click="append(node)">\u6DFB\u52A0\u5B50\u8282\u70B9</t-button>
          <t-button size="small" variant="outline" @click="insertBefore(node)">\u524D\u63D2\u8282\u70B9</t-button>
          <t-button size="small" variant="outline" @click="insertAfter(node)">\u540E\u63D2\u8282\u70B9</t-button>
          <t-button
            size="small"
            :theme="node.disabled ? 'success' : 'warning'"
            variant="base"
            @click="toggleDisable(node)"
          >
            {{ node.disabled ? 'enable' : 'disable' }}
          </t-button>
          <t-button size="small" variant="base" theme="danger" @click="remove(node)">\u5220\u9664</t-button>
        </t-space>
      </template>
    </t-tree>
    <h3>\u64CD\u4F5C\u6811\u8282\u70B9</h3>
    <t-space :size="10" break-line>
      <t-button theme="primary" variant="outline" @click="getItem">\u83B7\u53D6 value \u4E3A 'node1' \u7684\u5355\u4E2A\u8282\u70B9</t-button>
      <t-button theme="primary" variant="outline" @click="getAllItems">\u83B7\u53D6\u6240\u6709\u8282\u70B9</t-button>
      <t-button theme="primary" variant="outline" @click="getActiveChildren">\u83B7\u53D6\u9AD8\u4EAE\u8282\u70B9\u7684\u6240\u6709\u5B50\u8282\u70B9</t-button>
      <t-button theme="primary" variant="outline" @click="getAllActived">\u83B7\u53D6\u6240\u6709\u9AD8\u4EAE\u8282\u70B9</t-button>
      <t-button theme="primary" variant="outline" @click="getActiveChecked">\u83B7\u53D6\u9AD8\u4EAE\u8282\u70B9\u4E0B\u7684\u9009\u4E2D\u8282\u70B9</t-button>
      <t-button theme="primary" variant="outline" @click="append()">\u63D2\u5165\u4E00\u4E2A\u6839\u8282\u70B9</t-button>
      <t-button theme="primary" variant="outline" @click="getActiveParent">\u83B7\u53D6\u9AD8\u4EAE\u8282\u70B9\u7684\u7236\u8282\u70B9</t-button>
      <t-button theme="primary" variant="outline" @click="getActiveParents">\u83B7\u53D6\u9AD8\u4EAE\u8282\u70B9\u7684\u6240\u6709\u7236\u8282\u70B9</t-button>
      <t-button theme="primary" variant="outline" @click="getActiveIndex">\u83B7\u53D6\u9AD8\u4EAE\u8282\u70B9\u5728\u5B50\u8282\u70B9\u4E2D\u7684\u4F4D\u7F6E</t-button>
      <t-button theme="primary" variant="outline" @click="setActiveChecked">\u9009\u4E2D\u9AD8\u4EAE\u8282\u70B9</t-button>
      <t-button theme="primary" variant="outline" @click="setActiveUnChecked">\u53D6\u6D88\u9009\u4E2D\u9AD8\u4EAE\u8282\u70B9</t-button>
      <t-button theme="primary" variant="outline" @click="setActiveExpanded">\u5C55\u5F00\u9AD8\u4EAE\u8282\u70B9</t-button>
      <t-button theme="primary" variant="outline" @click="getActivePlainData">\u83B7\u53D6\u9AD8\u4EAE\u8282\u70B9\u4E0E\u5176\u5B50\u8282\u70B9\u7684\u6570\u636E</t-button>
    </t-space>
    <div>* \u76F8\u5173\u4FE1\u606F\u901A\u8FC7\u63A7\u5236\u53F0\u8F93\u51FA</div>
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      index: 2,
      activeId: '',
      activeIds: [],
      expandIds: [],
      checkedIds: [],
      useActived: false,
      expandParent: true,
      filterText: '',
      filterByText: null,
      items: [
        {
          value: 'node1',
        },
        {
          value: 'node2',
        },
      ],
    };
  },
  methods: {
    getLabelContent(node) {
      const pathNodes = node.getPath();
      let label = pathNodes.map((itemNode) => itemNode.getIndex() + 1).join('.');
      label = \`\${label} | value: \${node.value}\`;
      return label;
    },
    getLabel(h, node) {
      const label = this.getLabelContent(node);
      const { data } = node;
      data.label = label;
      return label;
    },
    setLabel(value) {
      const { tree } = this.$refs;
      const node = tree.getItem(value);
      const label = this.getLabelContent(node);
      const { data } = node;
      data.label = label;
    },
    getItem() {
      const { tree } = this.$refs;
      const node = tree.getItem('node1');
      console.info('getItem:', node.value);
    },
    getAllItems() {
      const { tree } = this.$refs;
      const nodes = tree.getItems();
      console.info(
        'getAllItems:',
        nodes.map((node) => node.value),
      );
    },
    getActiveChildren() {
      const node = this.getActivedNode();
      if (!node) return;
      let nodes = [];
      if (node) {
        nodes = node.getChildren(true) || [];
      }
      console.info(
        'getActiveChildren:',
        nodes.map((node) => node.value),
      );
    },
    getAllActived() {
      console.info('getActived value:', this.activeIds.slice(0));
    },
    getActiveChecked() {
      const { tree } = this.$refs;
      const node = this.getActivedNode();
      if (!node) return;
      const nodes = tree.getItems(node.value);
      console.info(
        'getChecked:',
        nodes.filter((node) => node.checked).map((node) => node.value),
      );
    },
    getActivedNode() {
      const { tree } = this.$refs;
      const { activeId } = this;
      const activeNode = tree.getItem(activeId);
      return activeNode;
    },
    getInsertItem() {
      let item = null;
      if (this.useActived) {
        item = this.getActivedNode();
      } else {
        this.index += 1;
        const value = \`t\${this.index}\`;
        item = {
          value,
        };
      }
      return item;
    },
    append(node) {
      const { tree } = this.$refs;
      const item = this.getInsertItem();
      if (item) {
        if (!node) {
          tree.appendTo('', item);
        } else {
          tree.appendTo(node.value, item);
        }
        this.setLabel(item.value);
      }
      if (this.useActived) {
        this.activeId = '';
      }
    },
    insertBefore(node) {
      const { tree } = this.$refs;
      const item = this.getInsertItem();
      if (item) {
        tree.insertBefore(node.value, item);
        this.setLabel(item.value);
      }
    },
    insertAfter(node) {
      const { tree } = this.$refs;
      const item = this.getInsertItem();
      if (item) {
        tree.insertAfter(node.value, item);
        this.setLabel(item.value);
      }
    },
    getActiveParent() {
      const { tree } = this.$refs;
      const node = this.getActivedNode();
      if (!node) return;
      const parent = tree.getParent(node.value);
      console.info('getParent', parent?.value);
    },
    getActiveParents() {
      const { tree } = this.$refs;
      const node = this.getActivedNode();
      if (!node) return;
      const parents = tree.getParents(node.value);
      console.info(
        'getParents',
        parents.map((node) => node.value),
      );
    },
    setActiveChecked() {
      const { tree } = this.$refs;
      const node = this.getActivedNode();
      if (!node) return;
      tree.setItem(node?.value, {
        checked: true,
      });
    },
    setActiveUnChecked() {
      const { tree } = this.$refs;
      const node = this.getActivedNode();
      if (!node) return;
      tree.setItem(node?.value, {
        checked: false,
      });
    },
    setActiveExpanded() {
      const { tree } = this.$refs;
      const node = this.getActivedNode();
      if (!node) return;
      tree.setItem(node?.value, {
        expanded: true,
      });
    },
    getActiveIndex() {
      const { tree } = this.$refs;
      const node = this.getActivedNode();
      if (!node) return;
      const index = tree.getIndex(node.value);
      console.info('getIndex', index);
    },
    getActivePlainData() {
      const { tree } = this.$refs;
      const node = this.getActivedNode();
      let treeNodes = [];
      if (!node) {
        treeNodes = tree.getTreeData();
      } else {
        treeNodes = tree.getTreeData(node.value);
      }
      console.info('\u6811\u7ED3\u6784\u6570\u636E:', treeNodes);
    },
    toggleDisable(node) {
      const { tree } = this.$refs;
      tree.setItem(node.value, {
        disabled: !node.disabled,
      });
    },
    remove(node) {
      const { tree } = this.$refs;
      tree.remove(node.value);
    },
    onChange(vals, state) {
      console.info('on change:', vals, state);
      this.checkedIds = vals;
    },
    onExpand(vals, state) {
      console.info('on expand:', vals, state);
      this.expandIds = vals;
    },
    onActive(vals, state) {
      console.info('on active:', vals, state);
      this.activeIds = vals;
      this.activeId = vals[0] || '';
    },
    onInputChange(state) {
      console.info('on input:', state);
      if (this.filterText) {
        this.filterByText = (node) => {
          const label = node?.data?.label || '';
          const rs = label.indexOf(this.filterText) >= 0;
          return rs;
        };
      } else {
        this.filterByText = null;
      }
    },
  },
};
<\/script>
<style>
.tdesign-tree-operations .t-is-active .t-tree__label,
.tdesign-tree-operations .t-is-active .t-checkbox__label {
  background-color: rgba(255, 0, 0, 0.3);
}
.tdesign-tree-operations .tips p {
  line-height: 24px;
  text-indent: 1em;
}
</style>
`,$=`<template>
  <t-space direction="vertical" style="width: 100%" class="tdesign-tree-operations">
    <t-space>
      <span>\u63D2\u5165\u8282\u70B9\u4F7F\u7528\u9AD8\u4EAE\u8282\u70B9:</span>
      <t-switch v-model="useActived" />
    </t-space>
    <t-space>
      <span>\u5B50\u8282\u70B9\u5C55\u5F00\u89E6\u53D1\u7236\u8282\u70B9\u5C55\u5F00:</span>
      <t-switch v-model="expandParent" />
    </t-space>
    <t-space>
      <t-input-adornment prepend="filter:">
        <t-input v-model="filterText" @change="onInputChange" />
      </t-input-adornment>
    </t-space>
    <t-tree
      ref="tree"
      :data="items"
      hover
      expand-all
      activable
      checkable
      :expand-on-click-node="false"
      :label="getLabel"
      :expand-parent="expandParent"
      :filter="filterByText"
      line
      @expand="onExpand"
      @change="onChange"
      @active="onActive"
    >
      <template #operations="{ node }">
        <t-space :size="10">
          <t-button size="small" variant="base" @click="append(node)">\u6DFB\u52A0\u5B50\u8282\u70B9</t-button>
          <t-button size="small" variant="outline" @click="insertBefore(node)">\u524D\u63D2\u8282\u70B9</t-button>
          <t-button size="small" variant="outline" @click="insertAfter(node)">\u540E\u63D2\u8282\u70B9</t-button>
          <t-button
            size="small"
            :theme="node.disabled ? 'success' : 'warning'"
            variant="base"
            @click="toggleDisable(node)"
          >
            {{ node.disabled ? 'enable' : 'disable' }}
          </t-button>
          <t-button size="small" variant="base" theme="danger" @click="remove(node)">\u5220\u9664</t-button>
        </t-space>
      </template>
    </t-tree>
    <h3>\u64CD\u4F5C\u6811\u8282\u70B9</h3>
    <t-space :size="10" break-line>
      <t-button theme="primary" variant="outline" @click="getItem">\u83B7\u53D6 value \u4E3A 'node1' \u7684\u5355\u4E2A\u8282\u70B9</t-button>
      <t-button theme="primary" variant="outline" @click="getAllItems">\u83B7\u53D6\u6240\u6709\u8282\u70B9</t-button>
      <t-button theme="primary" variant="outline" @click="getActiveChildren">\u83B7\u53D6\u9AD8\u4EAE\u8282\u70B9\u7684\u6240\u6709\u5B50\u8282\u70B9</t-button>
      <t-button theme="primary" variant="outline" @click="getAllActived">\u83B7\u53D6\u6240\u6709\u9AD8\u4EAE\u8282\u70B9</t-button>
      <t-button theme="primary" variant="outline" @click="getActiveChecked">\u83B7\u53D6\u9AD8\u4EAE\u8282\u70B9\u4E0B\u7684\u9009\u4E2D\u8282\u70B9</t-button>
      <t-button theme="primary" variant="outline" @click="append()">\u63D2\u5165\u4E00\u4E2A\u6839\u8282\u70B9</t-button>
      <t-button theme="primary" variant="outline" @click="getActiveParent">\u83B7\u53D6\u9AD8\u4EAE\u8282\u70B9\u7684\u7236\u8282\u70B9</t-button>
      <t-button theme="primary" variant="outline" @click="getActiveParents">\u83B7\u53D6\u9AD8\u4EAE\u8282\u70B9\u7684\u6240\u6709\u7236\u8282\u70B9</t-button>
      <t-button theme="primary" variant="outline" @click="getActiveIndex">\u83B7\u53D6\u9AD8\u4EAE\u8282\u70B9\u5728\u5B50\u8282\u70B9\u4E2D\u7684\u4F4D\u7F6E</t-button>
      <t-button theme="primary" variant="outline" @click="setActiveChecked">\u9009\u4E2D\u9AD8\u4EAE\u8282\u70B9</t-button>
      <t-button theme="primary" variant="outline" @click="setActiveUnChecked">\u53D6\u6D88\u9009\u4E2D\u9AD8\u4EAE\u8282\u70B9</t-button>
      <t-button theme="primary" variant="outline" @click="setActiveExpanded">\u5C55\u5F00\u9AD8\u4EAE\u8282\u70B9</t-button>
      <t-button theme="primary" variant="outline" @click="getActivePlainData">\u83B7\u53D6\u9AD8\u4EAE\u8282\u70B9\u4E0E\u5176\u5B50\u8282\u70B9\u7684\u6570\u636E</t-button>
    </t-space>
    <div>* \u76F8\u5173\u4FE1\u606F\u901A\u8FC7\u63A7\u5236\u53F0\u8F93\u51FA</div>
  </t-space>
</template>

<script setup>
import { ref } from 'vue';

const tree = ref();
const index = ref(2);
const activeId = ref('');
const activeIds = ref([]);
const expandIds = ref([]);
const checkedIds = ref([]);
const useActived = ref(false);
const expandParent = ref(true);
const filterText = ref('');
const filterByText = ref(null);
const items = ref([
  {
    value: 'node1',
  },
  {
    value: 'node2',
  },
]);
const getLabelContent = (node) => {
  const pathNodes = node.getPath();
  let label = pathNodes.map((itemNode) => itemNode.getIndex() + 1).join('.');
  label = \`\${label} | value: \${node.value}\`;
  return label;
};
const getLabel = (h, node) => {
  const label = getLabelContent(node);
  const { data } = node;
  data.label = label;
  return label;
};
const setLabel = (value) => {
  const node = tree.value.getItem(value);
  const label = getLabelContent(node);
  const { data } = node;
  data.label = label;
};
const getItem = () => {
  const node = tree.value.getItem('node1');
  console.info('getItem:', node.value);
};
const getAllItems = () => {
  const nodes = tree.value.getItems();
  console.info(
    'getAllItems:',
    nodes.map((node) => node.value),
  );
};
const getActivedNode = () => {
  const activeNode = tree.value.getItem(activeId.value);
  return activeNode;
};
const getActiveChildren = () => {
  const node = getActivedNode();
  if (!node) return;
  let nodes = [];
  if (node) {
    nodes = node.getChildren(true) || [];
  }
  console.info(
    'getActiveChildren:',
    nodes.map((node) => node.value),
  );
};
const getAllActived = () => {
  console.info('getActived value:', activeIds.value.slice(0));
};
const getActiveChecked = () => {
  const node = getActivedNode();
  if (!node) return;
  const nodes = tree.value.getItems(node.value);
  console.info(
    'getChecked:',
    nodes.filter((node) => node.checked).map((node) => node.value),
  );
};
const getInsertItem = () => {
  let item = null;
  if (useActived.value) {
    item = getActivedNode();
  } else {
    index.value += 1;
    const value = \`t\${index.value}\`;
    item = {
      value,
    };
  }
  return item;
};
const append = (node) => {
  const item = getInsertItem();
  if (item) {
    if (!node) {
      tree.value.appendTo('', item);
    } else {
      tree.value.appendTo(node.value, item);
    }
    setLabel(item.value);
  }
  if (useActived.value) {
    activeId.value = '';
  }
};
const insertBefore = (node) => {
  const item = getInsertItem();
  if (item) {
    tree.value.insertBefore(node.value, item);
    setLabel(item.value);
  }
};
const insertAfter = (node) => {
  const item = getInsertItem();
  if (item) {
    tree.value.insertAfter(node.value, item);
    setLabel(item.value);
  }
};
const getActiveParent = () => {
  const node = getActivedNode();
  if (!node) return;
  const parent = tree.value.getParent(node.value);
  console.info('getParent', parent?.value);
};
const getActiveParents = () => {
  const node = getActivedNode();
  if (!node) return;
  const parents = tree.value.getParents(node.value);
  console.info(
    'getParents',
    parents.map((node) => node.value),
  );
};
const setActiveChecked = () => {
  const node = getActivedNode();
  if (!node) return;
  tree.value.setItem(node?.value, {
    checked: true,
  });
};
const setActiveUnChecked = () => {
  const node = getActivedNode();
  if (!node) return;
  tree.value.setItem(node?.value, {
    checked: false,
  });
};
const setActiveExpanded = () => {
  const node = getActivedNode();
  if (!node) return;
  tree.value.setItem(node?.value, {
    expanded: true,
  });
};
const getActiveIndex = () => {
  const node = getActivedNode();
  if (!node) return;
  const index = tree.value.getIndex(node.value);
  console.info('getIndex', index);
};
const getActivePlainData = () => {
  const node = getActivedNode();
  let treeNodes = [];
  if (!node) {
    treeNodes = tree.value.getTreeData();
  } else {
    treeNodes = tree.value.getTreeData(node.value);
  }
  console.info('\u6811\u7ED3\u6784\u6570\u636E:', treeNodes);
};
const toggleDisable = (node) => {
  tree.value.setItem(node.value, {
    disabled: !node.disabled,
  });
};
const remove = (node) => {
  tree.value.remove(node.value);
};
const onChange = (vals, state) => {
  console.info('on change:', vals, state);
  checkedIds.value = vals;
};
const onExpand = (vals, state) => {
  console.info('on expand:', vals, state);
  expandIds.value = vals;
};
const onActive = (vals, state) => {
  console.info('on active:', vals, state);
  activeIds.value = vals;
  activeId.value = vals[0] || '';
};
const onInputChange = (state) => {
  console.info('on input:', state);
  if (filterText.value) {
    filterByText.value = (node) => {
      const label = node?.data?.label || '';
      const rs = label.indexOf(filterText.value) >= 0;
      return rs;
    };
  } else {
    filterByText.value = null;
  }
};
<\/script>
<style>
.tdesign-tree-operations .t-is-active .t-tree__label,
.tdesign-tree-operations .t-is-active .t-checkbox__label {
  background-color: rgba(255, 0, 0, 0.3);
}
.tdesign-tree-operations .tips p {
  line-height: 24px;
  text-indent: 1em;
}
</style>
`,z=`<template>
  <t-space :size="32" direction="vertical">
    <t-space direction="vertical">
      <h3>\u5C5E\u6027\u8BBE\u7F6E jsx \u5F62\u5F0F</h3>
      <t-tree :data="items" hover expand-all :load="load" :icon="icon" />
    </t-space>
    <t-space direction="vertical">
      <h3>slot \u5F62\u5F0F</h3>
      <t-tree :data="items" hover lazy :load="load">
        <template #icon="{ node }">
          <icon v-if="node.getChildren() && !node.expanded" name="caret-right" />
          <icon v-else-if="node.getChildren() && node.expanded && node.loading" name="loading" />
          <icon v-else-if="node.getChildren() && node.expanded" name="caret-down" />
          <icon v-else name="attach" />
        </template>
      </t-tree>
    </t-space>
  </t-space>
</template>

<script lang="jsx">
import { Icon } from 'tdesign-icons-vue';

export default {
  components: {
    Icon,
  },
  data() {
    return {
      items: [
        {
          label: '1',
          children: true,
        },
        {
          label: '2',
          children: true,
        },
      ],
    };
  },
  methods: {
    icon(h, node) {
      let name = 'file';
      if (node.getChildren()) {
        if (node.expanded) {
          name = 'folder-open';
          if (node.loading) {
            name = 'loading';
          }
        } else {
          name = 'folder';
        }
      }
      return <Icon name={name} />;
    },
    load(node) {
      const maxLevel = 2;
      return new Promise((resolve) => {
        setTimeout(() => {
          let nodes = [];
          if (node.level < maxLevel) {
            nodes = [
              {
                label: \`\${node.label}.1\`,
                children: node.level < maxLevel - 1,
              },
              {
                label: \`\${node.label}.2\`,
                children: node.level < maxLevel - 1,
              },
            ];
          }
          resolve(nodes);
        }, 500);
      });
    },
  },
};
<\/script>
`,P=`<template>
  <t-space :size="32" direction="vertical">
    <t-space direction="vertical">
      <h3>\u5C5E\u6027\u8BBE\u7F6E jsx \u5F62\u5F0F</h3>
      <t-tree :data="items" hover expand-all :load="load" :icon="icon" />
    </t-space>
    <t-space direction="vertical">
      <h3>slot \u5F62\u5F0F</h3>
      <t-tree :data="items" hover lazy :load="load">
        <template #icon="{ node }">
          <icon v-if="node.getChildren() && !node.expanded" name="caret-right" />
          <icon v-else-if="node.getChildren() && node.expanded && node.loading" name="loading" />
          <icon v-else-if="node.getChildren() && node.expanded" name="caret-down" />
          <icon v-else name="attach" />
        </template>
      </t-tree>
    </t-space>
  </t-space>
</template>

<script setup lang="jsx">
import { ref } from 'vue';
import { Icon } from 'tdesign-icons-vue';

const items = ref([
  {
    label: '1',
    children: true,
  },
  {
    label: '2',
    children: true,
  },
]);
const icon = (h, node) => {
  let name = 'file';
  if (node.getChildren()) {
    if (node.expanded) {
      name = 'folder-open';
      if (node.loading) {
        name = 'loading';
      }
    } else {
      name = 'folder';
    }
  }
  return <Icon name={name} />;
};
const load = (node) => {
  const maxLevel = 2;
  return new Promise((resolve) => {
    setTimeout(() => {
      let nodes = [];
      if (node.level < maxLevel) {
        nodes = [
          {
            label: \`\${node.label}.1\`,
            children: node.level < maxLevel - 1,
          },
          {
            label: \`\${node.label}.2\`,
            children: node.level < maxLevel - 1,
          },
        ];
      }
      resolve(nodes);
    }, 500);
  });
};
<\/script>
`,E=`<template>
  <t-space :size="32" direction="vertical">
    <t-space direction="vertical">
      <h3>\u9ED8\u8BA4\u4E3A\u7A7A\u72B6\u6001</h3>
      <t-tree :data="[]" />
    </t-space>
    <t-space direction="vertical">
      <h3>\u8BBE\u7F6E empty \u5C5E\u6027\u4E3A\u6307\u5B9A\u5B57\u7B26\u4E32</h3>
      <t-tree :data="[]" empty="\u{1F60A} \u7A7A\u6570\u636E\uFF08string\uFF09" />
    </t-space>
    <t-space direction="vertical">
      <h3>jsx \u5F62\u5F0F</h3>
      <t-tree :data="[]" :empty="empty" />
    </t-space>
    <t-space direction="vertical">
      <h3>slot \u5F62\u5F0F</h3>
      <t-tree :data="[]">
        <template #empty>
          <div>\u{1F60A} \u7A7A\u6570\u636E\uFF08slot\uFF09</div>
        </template>
      </t-tree>
    </t-space>
  </t-space>
</template>

<script lang="jsx">
export default {
  data() {
    return {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      empty(h) {
        return <div>\u{1F60A} \u7A7A\u6570\u636E\uFF08 empty props \uFF09</div>;
      },
    };
  },
};
<\/script>
`,S=`<template>
  <t-space :size="32" direction="vertical">
    <t-space direction="vertical">
      <h3>\u9ED8\u8BA4\u4E3A\u7A7A\u72B6\u6001</h3>
      <t-tree :data="[]" />
    </t-space>
    <t-space direction="vertical">
      <h3>\u8BBE\u7F6E empty \u5C5E\u6027\u4E3A\u6307\u5B9A\u5B57\u7B26\u4E32</h3>
      <t-tree :data="[]" empty="\u{1F60A} \u7A7A\u6570\u636E\uFF08string\uFF09" />
    </t-space>
    <t-space direction="vertical">
      <h3>jsx \u5F62\u5F0F</h3>
      <t-tree :data="[]" :empty="empty" />
    </t-space>
    <t-space direction="vertical">
      <h3>slot \u5F62\u5F0F</h3>
      <t-tree :data="[]">
        <template #empty>
          <div>\u{1F60A} \u7A7A\u6570\u636E\uFF08slot\uFF09</div>
        </template>
      </t-tree>
    </t-space>
  </t-space>
</template>

<script setup lang="jsx">
import { ref } from 'vue';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const empty = ref((h) => <div>\u{1F60A} \u7A7A\u6570\u636E\uFF08 empty props \uFF09</div>);
<\/script>
`,O=`<template>
  <t-space :size="32" direction="vertical">
    <t-space direction="vertical">
      <h3>\u5C5E\u6027\u8BBE\u7F6E jsx \u5F62\u5F0F</h3>
      <t-tree :data="items" expand-all :label="label"></t-tree>
    </t-space>
    <t-space direction="vertical">
      <h3>slot \u5F62\u5F0F</h3>
      <t-tree :data="items" expand-all checkable>
        <template #label="{ node }">
          <span style="color: blue">label: {{ node.label }}, value: {{ node.value }}</span>
        </template>
      </t-tree>
    </t-space>
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          label: '1',
          children: [
            {
              label: '1.1',
            },
            {
              label: '1.2',
            },
          ],
        },
        {
          label: '2',
          children: [
            {
              label: '2.1',
            },
            {
              label: '2.2',
            },
          ],
        },
      ],
    };
  },

  methods: {
    label(h, node) {
      // \u6CE8\u610F vue2 \u548C vue3 \u4E0B h \u7684\u4F7F\u7528\u65B9\u6CD5\u5B9E\u9645\u4E0A\u5B58\u5728\u5DEE\u5F02
      return h('strong', \`value: \${node.value}, label: \${node.label}\`);
    },
  },
};
<\/script>
`,M=`<template>
  <t-space :size="32" direction="vertical">
    <t-space direction="vertical">
      <h3>\u5C5E\u6027\u8BBE\u7F6E jsx \u5F62\u5F0F</h3>
      <t-tree :data="items" expand-all :label="label"></t-tree>
    </t-space>
    <t-space direction="vertical">
      <h3>slot \u5F62\u5F0F</h3>
      <t-tree :data="items" expand-all checkable>
        <template #label="{ node }">
          <span style="color: blue">label: {{ node.label }}, value: {{ node.value }}</span>
        </template>
      </t-tree>
    </t-space>
  </t-space>
</template>

<script setup>
import { ref } from 'vue';

const items = ref([
  {
    label: '1',
    children: [
      {
        label: '1.1',
      },
      {
        label: '1.2',
      },
    ],
  },
  {
    label: '2',
    children: [
      {
        label: '2.1',
      },
      {
        label: '2.2',
      },
    ],
  },
]);
const label = (h, node) => h('strong', \`value: \${node.value}, label: \${node.label}\`);
<\/script>
`,_=`<template>
  <t-space :size="32" direction="vertical">
    <t-space direction="vertical">
      <t-space>
        <span>\u663E\u793A\u8FDE\u7EBF:</span>
        <t-switch v-model="showLine" />
      </t-space>
      <t-space>
        <span>\u663E\u793A\u56FE\u6807:</span>
        <t-switch v-model="showIcon" />
      </t-space>
    </t-space>
    <t-space direction="vertical">
      <h3>\u9ED8\u8BA4\u6837\u5F0F</h3>
      <t-tree :data="items" :line="showLine" :icon="showIcon" expand-all />
    </t-space>
    <t-space direction="vertical" class="tdesign-tree-line">
      <h3>\u4F7F\u7528\u5C5E\u6027\u7ED3\u5408 jsx \u6765\u81EA\u5B9A\u4E49\u5448\u73B0</h3>
      <t-tree :data="items" :icon="showIcon" expand-all :line="renderLine" />
    </t-space>
    <t-space direction="vertical" class="tdesign-tree-line">
      <h3>slot \u5F62\u5F0F</h3>
      <t-tree :data="items" :icon="showIcon" line expand-all>
        <template #line="{ node }">
          <div v-if="showLine" :class="lineClass(node)">
            <div class="custom-line-box">
              <span
                v-for="(item, index) in getLineNodes(node)"
                :key="index"
                :class="{ 'custom-line-cross': item.cross }"
              ></span>
            </div>
            <i v-if="node.isLeaf()" class="custom-line-icon">
              <icon name="heart-filled" />
            </i>
          </div>
        </template>
      </t-tree>
    </t-space>
  </t-space>
</template>

<script lang="jsx">
import { Icon } from 'tdesign-icons-vue';

export default {
  components: {
    Icon,
  },
  data() {
    return {
      showLine: true,
      showIcon: true,
      items: [
        {
          value: '1',
          label: '1',
          children: [
            {
              value: '1.1',
              label: '1.1',
            },
            {
              value: '1.2',
              label: '1.2',
            },
          ],
        },
        {
          value: '2',
          label: '2',
          children: [
            {
              value: '2.1',
              label: '2.1',
              children: [
                {
                  value: '2.1.1',
                  label: '2.1.1',
                  children: [
                    {
                      value: '2.1.1.1',
                      label: '2.1.1.1',
                      children: [
                        {
                          value: '2.1.1.1.1',
                          label: '2.1.1.1.1',
                        },
                        {
                          value: '2.1.1.1.2',
                          label: '2.1.1.1.2',
                        },
                      ],
                    },
                  ],
                },
                {
                  value: '2.1.2',
                  label: '2.1.2',
                },
              ],
            },
            {
              value: '2.2',
              label: '2.2',
            },
          ],
        },
        {
          value: '3',
          label: '3',
          children: [
            {
              value: '3.1',
              label: '3.1',
            },
            {
              value: '3.2',
              label: '3.2',
            },
          ],
        },
        {
          value: '4',
          label: '4',
        },
      ],
    };
  },
  methods: {
    getLineNodes(node) {
      const nodes = node.getParents().reverse();
      const lineNodes = [];
      nodes.forEach((item, index) => {
        const line = {};
        const nextItem = nodes[index + 1];
        if (index < nodes.length - 1 && nextItem) {
          line.cross = !nextItem.isLast();
        }
        lineNodes.push(line);
      });
      return lineNodes;
    },
    lineClass(node) {
      const list = ['custom-line'];
      if (node.isFirst()) {
        list.push('custom-line-first');
      }
      if (node.isLeaf()) {
        list.push('custom-line-leaf');
      }
      if (node.isLast()) {
        list.push('custom-line-last');
      }
      return list;
    },
    renderLine(h, node) {
      if (!this.showLine) return null;

      const lineChildren = [];

      const lines = this.getLineNodes(node).map((item) => h('span', {
        class: {
          'custom-line-cross': item.cross,
        },
      }));

      lineChildren.push(
        h(
          'div',
          {
            class: 'custom-line-box',
          },
          lines,
        ),
      );

      if (node.isLeaf()) {
        const tIcon = <Icon name="heart-filled" />;
        const iconNode = h(
          'i',
          {
            class: 'custom-line-icon',
          },
          [tIcon],
        );
        lineChildren.push(iconNode);
      }

      return h(
        'div',
        {
          class: this.lineClass(node),
        },
        lineChildren,
      );
    },
  },
};
<\/script>
<style scoped>
.tdesign-tree-line .custom-line {
  display: flex;
  position: absolute;
  top: 2px;
  left: 9px;
}
.tdesign-tree-line .custom-line-box {
  display: flex;
  flex: 0 0 auto;
}
.tdesign-tree-line .custom-line span {
  position: relative;
  flex: 0 0 auto;
  width: 24px;
  height: 40px;
}
.tdesign-tree-line .custom-line span:last-child:before {
  content: '';
  position: absolute;
  display: block;
  bottom: 22px;
  left: 6px;
  width: 12px;
  height: 26px;
  border-left: 1px solid #ddd;
  border-bottom: 1px solid #0052d9;
}
.tdesign-tree-line .custom-line-leaf span:last-child:before {
  width: 16px;
}
.tdesign-tree-line .custom-line-cross:before {
  content: '';
  display: block;
  position: absolute;
  left: 6px;
  top: -15px;
  height: 44px;
  width: 1px;
  border-left: 1px solid #ddd;
}
.tdesign-tree-line .custom-line-icon {
  position: absolute;
  top: 10px;
  right: -14px;
  display: flex;
  box-sizing: border-box;
  width: 16px;
  height: 16px;
  border-radius: 16px;
  border: 1px solid #0052d9;
  background-color: #fff;
  justify-content: center;
  align-items: center;
}
.tdesign-tree-line .custom-line span:last-child:after {
  content: '';
  position: absolute;
  display: block;
  box-sizing: border-box;
  top: 14px;
  left: 3px;
  z-index: 1;
  width: 7px;
  height: 7px;
  border-radius: 2px;
  border: 1px solid #0052d9;
  background-color: #fff;
  transform: rotate(45deg);
  transform-origin: 50% 50%;
}
</style>
`,j=`<template>
  <t-space :size="32" direction="vertical">
    <t-space direction="vertical">
      <t-space>
        <span>\u663E\u793A\u8FDE\u7EBF:</span>
        <t-switch v-model="showLine" />
      </t-space>
      <t-space>
        <span>\u663E\u793A\u56FE\u6807:</span>
        <t-switch v-model="showIcon" />
      </t-space>
    </t-space>
    <t-space direction="vertical">
      <h3>\u9ED8\u8BA4\u6837\u5F0F</h3>
      <t-tree :data="items" :line="showLine" :icon="showIcon" expand-all />
    </t-space>
    <t-space direction="vertical" class="tdesign-tree-line">
      <h3>\u4F7F\u7528\u5C5E\u6027\u7ED3\u5408 jsx \u6765\u81EA\u5B9A\u4E49\u5448\u73B0</h3>
      <t-tree :data="items" :icon="showIcon" expand-all :line="renderLine" />
    </t-space>
    <t-space direction="vertical" class="tdesign-tree-line">
      <h3>slot \u5F62\u5F0F</h3>
      <t-tree :data="items" :icon="showIcon" line expand-all>
        <template #line="{ node }">
          <div v-if="showLine" :class="lineClass(node)">
            <div class="custom-line-box">
              <span
                v-for="(item, index) in getLineNodes(node)"
                :key="index"
                :class="{ 'custom-line-cross': item.cross }"
              ></span>
            </div>
            <i v-if="node.isLeaf()" class="custom-line-icon">
              <icon name="heart-filled" />
            </i>
          </div>
        </template>
      </t-tree>
    </t-space>
  </t-space>
</template>

<script setup lang="jsx">
import { ref } from 'vue';
import { Icon } from 'tdesign-icons-vue';

const showLine = ref(true);
const showIcon = ref(true);
const items = ref([
  {
    value: '1',
    label: '1',
    children: [
      {
        value: '1.1',
        label: '1.1',
      },
      {
        value: '1.2',
        label: '1.2',
      },
    ],
  },
  {
    value: '2',
    label: '2',
    children: [
      {
        value: '2.1',
        label: '2.1',
        children: [
          {
            value: '2.1.1',
            label: '2.1.1',
            children: [
              {
                value: '2.1.1.1',
                label: '2.1.1.1',
                children: [
                  {
                    value: '2.1.1.1.1',
                    label: '2.1.1.1.1',
                  },
                  {
                    value: '2.1.1.1.2',
                    label: '2.1.1.1.2',
                  },
                ],
              },
            ],
          },
          {
            value: '2.1.2',
            label: '2.1.2',
          },
        ],
      },
      {
        value: '2.2',
        label: '2.2',
      },
    ],
  },
  {
    value: '3',
    label: '3',
    children: [
      {
        value: '3.1',
        label: '3.1',
      },
      {
        value: '3.2',
        label: '3.2',
      },
    ],
  },
  {
    value: '4',
    label: '4',
  },
]);
const getLineNodes = (node) => {
  const nodes = node.getParents().reverse();
  const lineNodes = [];
  nodes.forEach((item, index) => {
    const line = {};
    const nextItem = nodes[index + 1];
    if (index < nodes.length - 1 && nextItem) {
      line.cross = !nextItem.isLast();
    }
    lineNodes.push(line);
  });
  return lineNodes;
};
const lineClass = (node) => {
  const list = ['custom-line'];
  if (node.isFirst()) {
    list.push('custom-line-first');
  }
  if (node.isLeaf()) {
    list.push('custom-line-leaf');
  }
  if (node.isLast()) {
    list.push('custom-line-last');
  }
  return list;
};
const renderLine = (h, node) => {
  if (!showLine.value) return null;
  const lineChildren = [];
  const lines = getLineNodes(node).map((item) => h('span', {
    class: {
      'custom-line-cross': item.cross,
    },
  }));
  lineChildren.push(
    h(
      'div',
      {
        class: 'custom-line-box',
      },
      lines,
    ),
  );
  if (node.isLeaf()) {
    const tIcon = <Icon name="heart-filled" />;
    const iconNode = h(
      'i',
      {
        class: 'custom-line-icon',
      },
      [tIcon],
    );
    lineChildren.push(iconNode);
  }
  return h(
    'div',
    {
      class: lineClass(node),
    },
    lineChildren,
  );
};
<\/script>
<style scoped>
.tdesign-tree-line .custom-line {
  display: flex;
  position: absolute;
  top: 2px;
  left: 9px;
}
.tdesign-tree-line .custom-line-box {
  display: flex;
  flex: 0 0 auto;
}
.tdesign-tree-line .custom-line span {
  position: relative;
  flex: 0 0 auto;
  width: 24px;
  height: 40px;
}
.tdesign-tree-line .custom-line span:last-child:before {
  content: '';
  position: absolute;
  display: block;
  bottom: 22px;
  left: 6px;
  width: 12px;
  height: 26px;
  border-left: 1px solid #ddd;
  border-bottom: 1px solid #0052d9;
}
.tdesign-tree-line .custom-line-leaf span:last-child:before {
  width: 16px;
}
.tdesign-tree-line .custom-line-cross:before {
  content: '';
  display: block;
  position: absolute;
  left: 6px;
  top: -15px;
  height: 44px;
  width: 1px;
  border-left: 1px solid #ddd;
}
.tdesign-tree-line .custom-line-icon {
  position: absolute;
  top: 10px;
  right: -14px;
  display: flex;
  box-sizing: border-box;
  width: 16px;
  height: 16px;
  border-radius: 16px;
  border: 1px solid #0052d9;
  background-color: #fff;
  justify-content: center;
  align-items: center;
}
.tdesign-tree-line .custom-line span:last-child:after {
  content: '';
  position: absolute;
  display: block;
  box-sizing: border-box;
  top: 14px;
  left: 3px;
  z-index: 1;
  width: 7px;
  height: 7px;
  border-radius: 2px;
  border: 1px solid #0052d9;
  background-color: #fff;
  transform: rotate(45deg);
  transform-origin: 50% 50%;
}
</style>
`,F=`<template>
  <t-space direction="vertical">
    <t-space>
      <span>\u5207\u6362\u6570\u636E:</span>
      <t-switch @change="toggleData" />
    </t-space>
    <t-space>
      <span>\u5C55\u5F00\u52A8\u753B:</span>
      <t-switch v-model="transition" />
    </t-space>
    <t-tree :data="items" :label="label" expand-all :transition="transition" />
  </t-space>
</template>

<script>
const data1 = [
  {
    value: 't1',
    children: [
      {
        value: 't1.1',
        children: [
          {
            value: 't1.1.1',
          },
          {
            value: 't1.1.2',
          },
        ],
      },
      {
        value: 't1.2',
        children: [
          {
            value: '1.2.1',
          },
          {
            value: '1.2.2',
          },
        ],
      },
    ],
  },
  {
    value: 't2',
    children: [
      {
        value: 't2.1',
      },
      {
        value: 't2.2',
      },
    ],
  },
];

const data2 = [
  {
    value: 'd1',
    children: [
      {
        value: 'd1.1',
        label: 'd1.1 custom label',
        children: [
          {
            value: 'd1.1.1',
          },
        ],
      },
      {
        value: 'd1.2',
        children: [
          {
            value: 'd1.2.1',
          },
          {
            value: 'd1.2.2',
          },
        ],
      },
    ],
  },
  {
    value: 'd2',
    children: [
      {
        value: 'd2.1',
      },
      {
        value: 'd2.2',
      },
    ],
  },
];

export default {
  data() {
    return {
      transition: true,
      items: data1,
    };
  },
  methods: {
    toggleData() {
      const tmpItems = this.items[0].value === 't1' ? data2 : data1;
      this.items = tmpItems;
    },
    label(h, node) {
      return node.label || node.value;
    },
  },
};
<\/script>
`,V=`<template>
  <t-space direction="vertical">
    <t-space>
      <span>\u5207\u6362\u6570\u636E:</span>
      <t-switch @change="toggleData" />
    </t-space>
    <t-space>
      <span>\u5C55\u5F00\u52A8\u753B:</span>
      <t-switch v-model="transition" />
    </t-space>
    <t-tree :data="items" :label="label" expand-all :transition="transition" />
  </t-space>
</template>

<script setup>
import { ref } from 'vue';

const data1 = [
  {
    value: 't1',
    children: [
      {
        value: 't1.1',
        children: [
          {
            value: 't1.1.1',
          },
          {
            value: 't1.1.2',
          },
        ],
      },
      {
        value: 't1.2',
        children: [
          {
            value: '1.2.1',
          },
          {
            value: '1.2.2',
          },
        ],
      },
    ],
  },
  {
    value: 't2',
    children: [
      {
        value: 't2.1',
      },
      {
        value: 't2.2',
      },
    ],
  },
];
const data2 = [
  {
    value: 'd1',
    children: [
      {
        value: 'd1.1',
        label: 'd1.1 custom label',
        children: [
          {
            value: 'd1.1.1',
          },
        ],
      },
      {
        value: 'd1.2',
        children: [
          {
            value: 'd1.2.1',
          },
          {
            value: 'd1.2.2',
          },
        ],
      },
    ],
  },
  {
    value: 'd2',
    children: [
      {
        value: 'd2.1',
      },
      {
        value: 'd2.2',
      },
    ],
  },
];
const transition = ref(true);
const items = ref(data1);
const toggleData = () => {
  const tmpItems = items.value[0].value === 't1' ? data2 : data1;
  items.value = tmpItems;
};
const label = (h, node) => node.label || node.value;
<\/script>
`,B=`<template>
  <t-space direction="vertical">
    <t-tree :data="items" hover :expand-level="1" />
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          label: '1',
          children: [
            {
              label: '1.1',
              children: [
                {
                  label: '1.1.1',
                },
                {
                  label: '1.1.2',
                },
              ],
            },
            {
              label: '1.2',
              children: [
                {
                  label: '1.2.1',
                },
                {
                  label: '1.2.2',
                },
              ],
            },
          ],
        },
        {
          label: '2',
          children: [
            {
              label: '2.1',
            },
            {
              label: '2.2',
            },
          ],
        },
      ],
    };
  },
};
<\/script>
`,U=`<template>
  <t-space direction="vertical">
    <t-tree :data="items" hover :expand-level="1" />
  </t-space>
</template>

<script setup>
import { ref } from 'vue';

const items = ref([
  {
    label: '1',
    children: [
      {
        label: '1.1',
        children: [
          {
            label: '1.1.1',
          },
          {
            label: '1.1.2',
          },
        ],
      },
      {
        label: '1.2',
        children: [
          {
            label: '1.2.1',
          },
          {
            label: '1.2.2',
          },
        ],
      },
    ],
  },
  {
    label: '2',
    children: [
      {
        label: '2.1',
      },
      {
        label: '2.2',
      },
    ],
  },
]);
<\/script>
`,H=`<template>
  <t-space direction="vertical">
    <t-space>
      <span>\u4E92\u65A5\u5C55\u5F00:</span>
      <t-switch v-model="mutex" />
    </t-space>
    <t-space>
      <span>\u6574\u4E2A\u8282\u70B9\u53EF\u70B9\u51FB:</span>
      <t-switch v-model="expandOnClickNode" />
    </t-space>
    <t-tree
      :data="items"
      hover
      :expand-mutex="mutex"
      :expand-on-click-node="expandOnClickNode"
      :on-expand="propOnExpand"
      @click="onClick"
      @expand="onExpand"
    />
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      mutex: true,
      expandOnClickNode: true,
      items: [
        {
          label: '1',
          children: [
            {
              label: '1.1',
              children: [
                {
                  label: '1.1.1',
                },
                {
                  label: '1.1.2',
                },
              ],
            },
            {
              label: '1.2',
              children: [
                {
                  label: '1.2.1',
                },
                {
                  label: '1.2.2',
                },
              ],
            },
          ],
        },
        {
          label: '2',
          children: [
            {
              label: '2.1',
              children: [
                {
                  label: '2.1.1',
                },
                {
                  label: '2.1.2',
                },
              ],
            },
            {
              label: '2.2',
              children: [
                {
                  label: '2.2.1',
                },
                {
                  label: '2.2.2',
                },
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {
    onClick(context) {
      console.info('onClick', context);
    },
    onExpand(value, context) {
      console.info('onExpand', value, context);
    },
    propOnExpand(value, context) {
      console.info('propOnExpand', value, context);
    },
  },
};
<\/script>
`,J=`<template>
  <t-space direction="vertical">
    <t-space>
      <span>\u4E92\u65A5\u5C55\u5F00:</span>
      <t-switch v-model="mutex" />
    </t-space>
    <t-space>
      <span>\u6574\u4E2A\u8282\u70B9\u53EF\u70B9\u51FB:</span>
      <t-switch v-model="expandOnClickNode" />
    </t-space>
    <t-tree
      :data="items"
      hover
      :expand-mutex="mutex"
      :expand-on-click-node="expandOnClickNode"
      :on-expand="propOnExpand"
      @click="onClick"
      @expand="onExpand"
    />
  </t-space>
</template>

<script setup>
import { ref } from 'vue';

const mutex = ref(true);
const expandOnClickNode = ref(true);
const items = ref([
  {
    label: '1',
    children: [
      {
        label: '1.1',
        children: [
          {
            label: '1.1.1',
          },
          {
            label: '1.1.2',
          },
        ],
      },
      {
        label: '1.2',
        children: [
          {
            label: '1.2.1',
          },
          {
            label: '1.2.2',
          },
        ],
      },
    ],
  },
  {
    label: '2',
    children: [
      {
        label: '2.1',
        children: [
          {
            label: '2.1.1',
          },
          {
            label: '2.1.2',
          },
        ],
      },
      {
        label: '2.2',
        children: [
          {
            label: '2.2.1',
          },
          {
            label: '2.2.2',
          },
        ],
      },
    ],
  },
]);
const onClick = (context) => {
  console.info('onClick', context);
};
const onExpand = (value, context) => {
  console.info('onExpand', value, context);
};
const propOnExpand = (value, context) => {
  console.info('propOnExpand', value, context);
};
<\/script>
`,q=`<template>
  <t-space direction="vertical" style="width: 90%">
    <t-space>
      <span>\u662F\u5426\u7981\u7528\u6574\u4E2A tree:</span>
      <t-switch v-model="disabled" />
    </t-space>
    <t-space>
      <span>\u53EF\u9009:</span>
      <t-switch v-model="checkable" />
    </t-space>
    <t-space>
      <span>\u53EF\u6FC0\u6D3B:</span>
      <t-switch v-model="activable" />
    </t-space>
    <t-tree
      ref="tree"
      hover
      expand-all
      :checkable="checkable"
      :activable="activable"
      :data="items"
      :label="label"
      :disabled="disabled"
      :disable-check="fnDisableCheck"
      :check-strictly="false"
    >
      <template #operations="{ node }">
        <t-space :size="10">
          <t-button v-if="node.disabled" size="small" theme="success" variant="base" @click="setEnable(node)">
            enable
          </t-button>
          <t-button v-if="!node.disabled" size="small" theme="warning" variant="base" @click="setDisable(node)">
            disable
          </t-button>
        </t-space>
      </template>
    </t-tree>
  </t-space>
</template>

<script>
// \u9884\u671F\u89C4\u5219:
// \u9ED8\u8BA4\u7236\u8282\u70B9\u88AB\u7981\u7528\uFF0C\u6240\u6709\u5B50\u8282\u70B9\u4E00\u5E76\u5448\u73B0\u7981\u7528\u72B6\u6001
// checkStrictly = true \u65F6\uFF0C\u7236\u8282\u70B9\u7981\u7528\u72B6\u6001\u4E0D\u5F71\u54CD\u5B50\u8282\u70B9\u7981\u7528\u72B6\u6001\u3002
// \u7236\u8282\u70B9\u64CD\u4F5C\u9009\u4E2D\uFF0C\u4E0D\u5F71\u54CD\u88AB\u7981\u7528\u7684\u5B50\u8282\u70B9\u7684\u539F\u59CB\u9009\u4E2D\u72B6\u6001\u3002
// \u5B50\u8282\u70B9\u88AB\u7981\u7528\u4E14\u672A\u9009\u4E2D\uFF0C\u7236\u8282\u70B9\u534A\u9009\u72B6\u6001\u518D\u6B21\u70B9\u51FB\u53EF\u5207\u6362\u4E3A\u672A\u9009\u4E2D\u72B6\u6001\u3002

export default {
  data() {
    return {
      checkable: true,
      activable: false,
      disabled: false,
      disabledMap: new Map([['1.1', true]]),
      items: [
        {
          value: '1',
          children: [
            {
              value: '1.1',
              children: [
                {
                  value: '1.1.1',
                },
                {
                  value: '1.1.2',
                },
              ],
            },
            {
              value: '1.2',
              children: [
                {
                  value: '1.2.1',
                },
                {
                  value: '1.2.2',
                },
              ],
            },
          ],
        },
        {
          value: '2',
          children: [
            {
              value: '2.1',
              disabled: true,
              children: [
                {
                  value: '2.1.1',
                },
                {
                  value: '2.1.2',
                },
              ],
            },
            {
              value: '2.2',
              children: [
                {
                  value: '2.2.1',
                },
                {
                  value: '2.2.2',
                },
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {
    fnDisableCheck(node) {
      const map = this.disabledMap;
      return map.get(node.value);
    },
    label(h, node) {
      return node.value;
    },
    setEnable(node) {
      const { tree } = this.$refs;
      const map = this.disabledMap;
      if (node.disabled) {
        map.delete(node.value);
        // \u79FB\u9664\u8282\u70B9\u672C\u8EAB\u7684 disabled \u5C5E\u6027
        // \u8FD9\u4E2A\u5C5E\u6027\u5728 data \u4E2D\u88AB\u9884\u5148\u5B9A\u4E49
        // \u5982\u679C\u4E0D\u66F4\u65B0\u72B6\u6001\uFF0C\u5219\u8BE5\u8282\u70B9\u4ECD\u7136\u88AB\u89C6\u4E3A\u7981\u7528\u72B6\u6001
        tree.setItem(node.value, {
          disabled: false,
        });
        tree.refresh();
      }
    },
    setDisable(node) {
      const { tree } = this.$refs;
      const map = this.disabledMap;
      // \u4EA4\u7ED9 disable-check \u63A5\u7BA1 disabled \u5C5E\u6027\u5224\u65AD
      // \u6CE8\u610F\u8FD9\u91CC\u7684\u903B\u8F91: \u5982\u679C\u5148\u7981\u7528\u4E86\u67D0\u4E2A\u5B50\u8282\u70B9\uFF0C\u518D\u7981\u7528\u5176\u7236\u8282\u70B9
      // \u542F\u7528\u7236\u8282\u70B9\u65F6\uFF0C\u5B50\u8282\u70B9\u4F1A\u4ECD\u7136\u4E3A\u7981\u7528\u72B6\u6001\uFF0C\u56E0\u4E3A\u5B83\u8FD8\u5728 map \u5F53\u4E2D\uFF0C\u8FD9\u662F\u7B26\u5408\u903B\u8F91\u7684
      map.set(node.value, true);
      // \u7531\u4E8E\u4F20\u9012\u7ED9 tree \u7684 disableCheck \u51FD\u6570\u672A\u53D8\u66F4\uFF0C\u6240\u4EE5\u4E0D\u4F1A\u81EA\u52A8\u66F4\u65B0\u8282\u70B9\u72B6\u6001
      // \u9700\u8981\u8C03\u7528 refresh \u65B9\u6CD5\u6765\u66F4\u65B0\u8282\u70B9\u72B6\u6001
      tree.refresh();
    },
  },
};
<\/script>
`,G=`<template>
  <t-space direction="vertical" style="width: 90%">
    <t-space>
      <span>\u662F\u5426\u7981\u7528\u6574\u4E2A tree:</span>
      <t-switch v-model="disabled" />
    </t-space>
    <t-space>
      <span>\u53EF\u9009:</span>
      <t-switch v-model="checkable" />
    </t-space>
    <t-space>
      <span>\u53EF\u6FC0\u6D3B:</span>
      <t-switch v-model="activable" />
    </t-space>
    <t-tree
      ref="tree"
      hover
      expand-all
      :checkable="checkable"
      :activable="activable"
      :data="items"
      :label="label"
      :disabled="disabled"
      :disable-check="fnDisableCheck"
      :check-strictly="false"
    >
      <template #operations="{ node }">
        <t-space :size="10">
          <t-button v-if="node.disabled" size="small" theme="success" variant="base" @click="setEnable(node)">
            enable
          </t-button>
          <t-button v-if="!node.disabled" size="small" theme="warning" variant="base" @click="setDisable(node)">
            disable
          </t-button>
        </t-space>
      </template>
    </t-tree>
  </t-space>
</template>

<script setup>
import { ref } from 'vue'; // \u9884\u671F\u89C4\u5219:
// \u9ED8\u8BA4\u7236\u8282\u70B9\u88AB\u7981\u7528\uFF0C\u6240\u6709\u5B50\u8282\u70B9\u4E00\u5E76\u5448\u73B0\u7981\u7528\u72B6\u6001
// checkStrictly = true \u65F6\uFF0C\u7236\u8282\u70B9\u7981\u7528\u72B6\u6001\u4E0D\u5F71\u54CD\u5B50\u8282\u70B9\u7981\u7528\u72B6\u6001\u3002
// \u7236\u8282\u70B9\u64CD\u4F5C\u9009\u4E2D\uFF0C\u4E0D\u5F71\u54CD\u88AB\u7981\u7528\u7684\u5B50\u8282\u70B9\u7684\u539F\u59CB\u9009\u4E2D\u72B6\u6001\u3002
// \u5B50\u8282\u70B9\u88AB\u7981\u7528\u4E14\u672A\u9009\u4E2D\uFF0C\u7236\u8282\u70B9\u534A\u9009\u72B6\u6001\u518D\u6B21\u70B9\u51FB\u53EF\u5207\u6362\u4E3A\u672A\u9009\u4E2D\u72B6\u6001\u3002
const tree = ref();
const checkable = ref(true);
const activable = ref(false);
const disabled = ref(false);
const disabledMap = ref(new Map([['1.1', true]]));
const items = ref([
  {
    value: '1',
    children: [
      {
        value: '1.1',
        children: [
          {
            value: '1.1.1',
          },
          {
            value: '1.1.2',
          },
        ],
      },
      {
        value: '1.2',
        children: [
          {
            value: '1.2.1',
          },
          {
            value: '1.2.2',
          },
        ],
      },
    ],
  },
  {
    value: '2',
    children: [
      {
        value: '2.1',
        disabled: true,
        children: [
          {
            value: '2.1.1',
          },
          {
            value: '2.1.2',
          },
        ],
      },
      {
        value: '2.2',
        children: [
          {
            value: '2.2.1',
          },
          {
            value: '2.2.2',
          },
        ],
      },
    ],
  },
]);
const fnDisableCheck = (node) => {
  const map = disabledMap.value;
  return map.get(node.value);
};
const label = (h, node) => node.value;
const setEnable = (node) => {
  const map = disabledMap.value;
  if (node.disabled) {
    map.delete(node.value);
    // \u79FB\u9664\u8282\u70B9\u672C\u8EAB\u7684 disabled \u5C5E\u6027
    // \u8FD9\u4E2A\u5C5E\u6027\u5728 data \u4E2D\u88AB\u9884\u5148\u5B9A\u4E49
    // \u5982\u679C\u4E0D\u66F4\u65B0\u72B6\u6001\uFF0C\u5219\u8BE5\u8282\u70B9\u4ECD\u7136\u88AB\u89C6\u4E3A\u7981\u7528\u72B6\u6001
    tree.value.setItem(node.value, {
      disabled: false,
    });
    tree.value.refresh();
  }
};
const setDisable = (node) => {
  const map = disabledMap.value;
  // \u4EA4\u7ED9 disable-check \u63A5\u7BA1 disabled \u5C5E\u6027\u5224\u65AD
  // \u6CE8\u610F\u8FD9\u91CC\u7684\u903B\u8F91: \u5982\u679C\u5148\u7981\u7528\u4E86\u67D0\u4E2A\u5B50\u8282\u70B9\uFF0C\u518D\u7981\u7528\u5176\u7236\u8282\u70B9
  // \u542F\u7528\u7236\u8282\u70B9\u65F6\uFF0C\u5B50\u8282\u70B9\u4F1A\u4ECD\u7136\u4E3A\u7981\u7528\u72B6\u6001\uFF0C\u56E0\u4E3A\u5B83\u8FD8\u5728 map \u5F53\u4E2D\uFF0C\u8FD9\u662F\u7B26\u5408\u903B\u8F91\u7684
  map.set(node.value, true);
  // \u7531\u4E8E\u4F20\u9012\u7ED9 tree \u7684 disableCheck \u51FD\u6570\u672A\u53D8\u66F4\uFF0C\u6240\u4EE5\u4E0D\u4F1A\u81EA\u52A8\u66F4\u65B0\u8282\u70B9\u72B6\u6001
  // \u9700\u8981\u8C03\u7528 refresh \u65B9\u6CD5\u6765\u66F4\u65B0\u8282\u70B9\u72B6\u6001
  tree.value.refresh();
};
<\/script>
`,K=`<template>
  <t-space direction="vertical">
    <t-space>
      <span>\u53EF\u9009:</span>
      <t-switch v-model="checkable" />
    </t-space>
    <t-space>
      <t-button @click="reload()">\u91CD\u65B0\u52A0\u8F7D\u6570\u636E</t-button>
    </t-space>
    <t-tree v-model="value" :data="items" hover expand-all :checkable="checkable" :load="load" :lazy="false" />
  </t-space>
</template>

<script>
const treeData = [
  {
    label: '1',
    value: '1',
    children: true,
  },
  {
    label: '2',
    value: '2',
    children: true,
  },
];

export default {
  data() {
    return {
      checkable: true,
      value: ['1.1.1'],
      items: [],
    };
  },
  methods: {
    reload() {
      this.items = [];
      setTimeout(() => {
        this.items = treeData;
      });
    },
    load(node) {
      return new Promise((resolve) => {
        setTimeout(() => {
          let nodes = [];
          if (node.level < 2) {
            nodes = [
              {
                label: \`\${node.label}.1\`,
                value: \`\${node.value}.1\`,
                children: true,
              },
              {
                label: \`\${node.label}.2\`,
                value: \`\${node.value}.2\`,
                children: true,
              },
            ];
          }
          resolve(nodes);
        }, 1000);
      });
    },
  },
};
<\/script>
`,R=`<template>
  <t-space direction="vertical">
    <t-space>
      <span>\u53EF\u9009:</span>
      <t-switch v-model="checkable" />
    </t-space>
    <t-space>
      <t-button @click="reload()">\u91CD\u65B0\u52A0\u8F7D\u6570\u636E</t-button>
    </t-space>
    <t-tree v-model="value" :data="items" hover expand-all :checkable="checkable" :load="load" :lazy="false" />
  </t-space>
</template>

<script setup>
import { ref } from 'vue';

const treeData = [
  {
    label: '1',
    value: '1',
    children: true,
  },
  {
    label: '2',
    value: '2',
    children: true,
  },
];
const checkable = ref(true);
const value = ref(['1.1.1']);
const items = ref([]);
const reload = () => {
  items.value = [];
  setTimeout(() => {
    items.value = treeData;
  });
};
const load = (node) => new Promise((resolve) => {
  setTimeout(() => {
    let nodes = [];
    if (node.level < 2) {
      nodes = [
        {
          label: \`\${node.label}.1\`,
          value: \`\${node.value}.1\`,
          children: true,
        },
        {
          label: \`\${node.label}.2\`,
          value: \`\${node.value}.2\`,
          children: true,
        },
      ];
    }
    resolve(nodes);
  }, 1000);
});
<\/script>
`,Y=`<template>
  <t-space direction="vertical">
    <t-space>
      <span>\u53EF\u9009:</span>
      <t-switch v-model="checkable" />
    </t-space>
    <t-space>
      <span>\u4E25\u683C\u6A21\u5F0F:</span>
      <t-switch v-model="checkStrictly" />
    </t-space>
    <t-tree
      ref="tree"
      :data="items"
      hover
      expand-all
      :checkable="checkable"
      :check-strictly="checkStrictly"
      :load="load"
      value-mode="all"
      @load="onLoad"
    />
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      checkable: true,
      checkStrictly: false,
      items: [
        {
          label: '1',
          value: '1',
          children: true,
        },
        {
          label: '2',
          value: '2',
          children: true,
        },
      ],
    };
  },
  methods: {
    onLoad(state) {
      console.log('on load:', state);
    },
    load(node) {
      return new Promise((resolve) => {
        setTimeout(() => {
          let nodes = [];
          if (node.level < 2) {
            nodes = [
              {
                label: \`\${node.label}.1\`,
                value: \`\${node.value}.1\`,
                children: true,
              },
              {
                label: \`\${node.label}.2\`,
                value: \`\${node.value}.2\`,
                children: true,
              },
            ];
          }
          resolve(nodes);
        }, 1000);
      });
    },
  },
};
<\/script>
`,Q=`<template>
  <t-space direction="vertical">
    <t-space>
      <span>\u53EF\u9009:</span>
      <t-switch v-model="checkable" />
    </t-space>
    <t-space>
      <span>\u4E25\u683C\u6A21\u5F0F:</span>
      <t-switch v-model="checkStrictly" />
    </t-space>
    <t-tree
      ref="tree"
      :data="items"
      hover
      expand-all
      :checkable="checkable"
      :check-strictly="checkStrictly"
      :load="load"
      value-mode="all"
      @load="onLoad"
    />
  </t-space>
</template>

<script setup>
import { ref } from 'vue';

const checkable = ref(true);
const checkStrictly = ref(false);
const items = ref([
  {
    label: '1',
    value: '1',
    children: true,
  },
  {
    label: '2',
    value: '2',
    children: true,
  },
]);
const onLoad = (state) => {
  console.log('on load:', state);
};
const load = (node) => new Promise((resolve) => {
  setTimeout(() => {
    let nodes = [];
    if (node.level < 2) {
      nodes = [
        {
          label: \`\${node.label}.1\`,
          value: \`\${node.value}.1\`,
          children: true,
        },
        {
          label: \`\${node.label}.2\`,
          value: \`\${node.value}.2\`,
          children: true,
        },
      ];
    }
    resolve(nodes);
  }, 1000);
});
<\/script>
`,W=`<template>
  <t-space direction="vertical">
    <t-space>
      <span>\u9009\u4E2D\u8282\u70B9:</span>
      <t-input-adornment prepend="checked:">
        <t-input :value="allChecked" />
      </t-input-adornment>
    </t-space>
    <t-space>
      <span>\u5C55\u5F00\u8282\u70B9:</span>
      <t-input-adornment prepend="expanded:">
        <t-input :value="allExpanded" />
      </t-input-adornment>
    </t-space>
    <t-space>
      <span>\u9AD8\u4EAE\u8282\u70B9:</span>
      <t-input-adornment prepend="actived:">
        <t-input :value="allActived" />
      </t-input-adornment>
    </t-space>
    <t-space>
      <span>\u53EF\u9009:</span>
      <t-switch v-model="checkable" />
    </t-space>
    <t-space>
      <span>\u8282\u70B9\u53EF\u9AD8\u4EAE: </span>
      <t-switch v-model="activable" />
    </t-space>
    <t-space>
      <span>\u53D7\u63A7\u540C\u6B65\u8282\u70B9:</span>
      <t-switch v-model="syncProps" />
    </t-space>
    <t-space>
      <t-button theme="primary" variant="outline" @click="selectNode">\u9009\u4E2D\u8282\u70B9 1.1</t-button>
      <t-button theme="primary" variant="outline" @click="activeNode">\u6FC0\u6D3B\u8282\u70B9 2</t-button>
      <t-button theme="primary" variant="outline" @click="expandNode">\u5C55\u5F00\u8282\u70B9 1.2</t-button>
    </t-space>
    <t-tree
      :data="items"
      :activable="activable"
      :checkable="checkable"
      :expand-on-click-node="false"
      :active-multiple="false"
      :expanded="expanded"
      :actived="actived"
      :value="checked"
      :value-mode="valueMode"
      @expand="onExpand"
      @change="onChange"
      @active="onActive"
      @click="onClick"
    />
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      syncProps: false,
      checkable: true,
      activable: false,
      valueMode: 'onlyLeaf',
      checked: ['1.2.1', '1.2.2'],
      expanded: ['1', '1.1'],
      actived: [],
      items: [
        {
          value: '1',
          label: '1',
          children: [
            {
              value: '1.1',
              label: '1.1',
              children: [
                {
                  value: '1.1.1',
                  label: '1.1.1',
                },
                {
                  value: '1.1.2',
                  label: '1.1.2',
                },
              ],
            },
            {
              value: '1.2',
              label: '1.2',
              children: [
                {
                  value: '1.2.1',
                  label: '1.2.1',
                },
                {
                  value: '1.2.2',
                  label: '1.2.2',
                },
              ],
            },
          ],
        },
        {
          value: '2',
          label: '2',
          checkable: false,
          children: [
            {
              value: '2.1',
              label: '2.1 \u8FD9\u4E2A\u8282\u70B9\u4E0D\u5141\u8BB8\u9009\u4E2D',
            },
            {
              value: '2.2',
              label: '2.2 \u8FD9\u4E2A\u8282\u70B9\u4E0D\u5141\u8BB8\u6FC0\u6D3B',
              checkable: false,
            },
            {
              value: '2.3',
              label: '2.3 \u8FD9\u4E2A\u8282\u70B9\u4E0D\u5141\u8BB8\u5C55\u5F00',
              checkable: false,
              children: [
                {
                  value: '2.3.1',
                  label: '2.3.1',
                  checkable: false,
                },
                {
                  value: '2.3.2',
                  label: '2.3.2',
                  checkable: false,
                },
              ],
            },
          ],
        },
      ],
    };
  },
  computed: {
    allChecked() {
      let arr = [];
      if (Array.isArray(this.checked)) {
        arr = this.checked;
      }
      return arr.join(', ');
    },
    allExpanded() {
      let arr = [];
      if (Array.isArray(this.expanded)) {
        arr = this.expanded;
      }
      return arr.join(', ');
    },
    allActived() {
      let arr = [];
      if (Array.isArray(this.actived)) {
        arr = this.actived;
      }
      return arr.join(', ');
    },
  },
  methods: {
    selectNode() {
      this.checked = ['1.1'];
    },
    activeNode() {
      this.actived = ['2'];
    },
    expandNode() {
      this.expanded = ['1', '1.2'];
    },
    onClick(context) {
      console.info('onClick context:', context);
    },
    onChange(vals, context) {
      console.info('onChange value:', vals, 'context:', context);
      const { node } = context;
      // onChange \u4E8B\u4EF6\u53D1\u751F\u65F6\uFF0Ccontext.node \u72B6\u6001\u9884\u5148\u53D1\u751F\u53D8\u66F4\uFF0C\u6B64\u65F6\u62FF\u5230\u9884\u5148\u53D8\u66F4\u7684\u8282\u70B9\u72B6\u6001
      console.info(node.value, 'context.node.checked:', node.checked);
      if (this.syncProps) {
        const tmpChecked = vals.filter((val) => {
          if (val === '2.1') {
            console.info('\u8282\u70B9 2.1 \u4E0D\u5141\u8BB8\u9009\u4E2D');
            return false;
          }
          return true;
        });
        // \u53D7\u63A7\u72B6\u6001\u4E0B, tree \u7684 props.value \u53EF\u88AB\u4FEE\u6539\u4E3A\u9884\u671F\u7684\u503C
        console.log('before set this.checked, expect checked:', tmpChecked);
        this.checked = tmpChecked;
      }
      // \u8D4B\u503C\u53D8\u66F4\u540E\u7684\u9009\u4E2D\u6001\u4E4B\u540E\uFF0CnextTick \u4E4B\u540E\u89E6\u53D1\u89C6\u56FE\u66F4\u65B0
      // node.checked \u72B6\u6001\u53D1\u751F\u53D8\u66F4\uFF0C\u7B26\u5408 tree \u7684 props.value \u7684\u53D6\u503C
      this.$nextTick(() => {
        console.info(node.value, 'nextTick context.node.checked:', node.checked);
      });
    },
    onActive(vals, context) {
      console.info('onActive actived:', vals, 'context:', context);
      const { node } = context;
      console.info(node.value, 'context.node.actived:', node.actived);
      const actived = vals.filter((val) => {
        if (val === '2.2') {
          console.info('\u8282\u70B9 2.2 \u4E0D\u5141\u8BB8\u6FC0\u6D3B');
          return false;
        }
        return true;
      });
      if (this.syncProps) {
        this.actived = actived;
      }
    },
    onExpand(vals, context) {
      console.info('onExpand expanded:', vals, 'context:', context);
      const { node } = context;
      console.info(node.value, 'context.node.expanded:', node.expanded);
      const expanded = vals.filter((val) => {
        if (val === '2.3') {
          console.info('\u8282\u70B9 2.3 \u4E0D\u5141\u8BB8\u5C55\u5F00');
          return false;
        }
        return true;
      });
      if (this.syncProps) {
        this.expanded = expanded;
      }
    },
  },
};
<\/script>
`,X=`<template>
  <t-space direction="vertical">
    <t-space>
      <span>\u9009\u4E2D\u8282\u70B9:</span>
      <t-input-adornment prepend="checked:">
        <t-input :value="allChecked" />
      </t-input-adornment>
    </t-space>
    <t-space>
      <span>\u5C55\u5F00\u8282\u70B9:</span>
      <t-input-adornment prepend="expanded:">
        <t-input :value="allExpanded" />
      </t-input-adornment>
    </t-space>
    <t-space>
      <span>\u9AD8\u4EAE\u8282\u70B9:</span>
      <t-input-adornment prepend="actived:">
        <t-input :value="allActived" />
      </t-input-adornment>
    </t-space>
    <t-space>
      <span>\u53EF\u9009:</span>
      <t-switch v-model="checkable" />
    </t-space>
    <t-space>
      <span>\u8282\u70B9\u53EF\u9AD8\u4EAE: </span>
      <t-switch v-model="activable" />
    </t-space>
    <t-space>
      <span>\u53D7\u63A7\u540C\u6B65\u8282\u70B9:</span>
      <t-switch v-model="syncProps" />
    </t-space>
    <t-space>
      <t-button theme="primary" variant="outline" @click="selectNode">\u9009\u4E2D\u8282\u70B9 1.1</t-button>
      <t-button theme="primary" variant="outline" @click="activeNode">\u6FC0\u6D3B\u8282\u70B9 2</t-button>
      <t-button theme="primary" variant="outline" @click="expandNode">\u5C55\u5F00\u8282\u70B9 1.2</t-button>
    </t-space>
    <t-tree
      :data="items"
      :activable="activable"
      :checkable="checkable"
      :expand-on-click-node="false"
      :active-multiple="false"
      :expanded="expanded"
      :actived="actived"
      :value="checked"
      :value-mode="valueMode"
      @expand="onExpand"
      @change="onChange"
      @active="onActive"
      @click="onClick"
    />
  </t-space>
</template>

<script setup>
import { nextTick, ref, computed } from 'vue';

const syncProps = ref(false);
const checkable = ref(true);
const activable = ref(false);
const valueMode = ref('onlyLeaf');
const checked = ref(['1.2.1', '1.2.2']);
const expanded = ref(['1', '1.1']);
const actived = ref([]);
const items = ref([
  {
    value: '1',
    label: '1',
    children: [
      {
        value: '1.1',
        label: '1.1',
        children: [
          {
            value: '1.1.1',
            label: '1.1.1',
          },
          {
            value: '1.1.2',
            label: '1.1.2',
          },
        ],
      },
      {
        value: '1.2',
        label: '1.2',
        children: [
          {
            value: '1.2.1',
            label: '1.2.1',
          },
          {
            value: '1.2.2',
            label: '1.2.2',
          },
        ],
      },
    ],
  },
  {
    value: '2',
    label: '2',
    checkable: false,
    children: [
      {
        value: '2.1',
        label: '2.1 \u8FD9\u4E2A\u8282\u70B9\u4E0D\u5141\u8BB8\u9009\u4E2D',
      },
      {
        value: '2.2',
        label: '2.2 \u8FD9\u4E2A\u8282\u70B9\u4E0D\u5141\u8BB8\u6FC0\u6D3B',
        checkable: false,
      },
      {
        value: '2.3',
        label: '2.3 \u8FD9\u4E2A\u8282\u70B9\u4E0D\u5141\u8BB8\u5C55\u5F00',
        checkable: false,
        children: [
          {
            value: '2.3.1',
            label: '2.3.1',
            checkable: false,
          },
          {
            value: '2.3.2',
            label: '2.3.2',
            checkable: false,
          },
        ],
      },
    ],
  },
]);
const allChecked = computed(() => {
  let arr = [];
  if (Array.isArray(checked.value)) {
    arr = checked.value;
  }
  return arr.join(', ');
});
const allExpanded = computed(() => {
  let arr = [];
  if (Array.isArray(expanded.value)) {
    arr = expanded.value;
  }
  return arr.join(', ');
});
const allActived = computed(() => {
  let arr = [];
  if (Array.isArray(actived.value)) {
    arr = actived.value;
  }
  return arr.join(', ');
});
const selectNode = () => {
  checked.value = ['1.1'];
};
const activeNode = () => {
  actived.value = ['2'];
};
const expandNode = () => {
  expanded.value = ['1', '1.2'];
};
const onClick = (context) => {
  console.info('onClick context:', context);
};
const onChange = (vals, context) => {
  console.info('onChange value:', vals, 'context:', context);
  const { node } = context;
  // onChange \u4E8B\u4EF6\u53D1\u751F\u65F6\uFF0Ccontext.node \u72B6\u6001\u9884\u5148\u53D1\u751F\u53D8\u66F4\uFF0C\u6B64\u65F6\u62FF\u5230\u9884\u5148\u53D8\u66F4\u7684\u8282\u70B9\u72B6\u6001
  console.info(node.value, 'context.node.checked:', node.checked);
  if (syncProps.value) {
    const tmpChecked = vals.filter((val) => {
      if (val === '2.1') {
        console.info('\u8282\u70B9 2.1 \u4E0D\u5141\u8BB8\u9009\u4E2D');
        return false;
      }
      return true;
    });
    // \u53D7\u63A7\u72B6\u6001\u4E0B, tree \u7684 props.value \u53EF\u88AB\u4FEE\u6539\u4E3A\u9884\u671F\u7684\u503C
    console.log('before set this.checked, expect checked:', tmpChecked);
    checked.value = tmpChecked;
  }
  // \u8D4B\u503C\u53D8\u66F4\u540E\u7684\u9009\u4E2D\u6001\u4E4B\u540E\uFF0CnextTick \u4E4B\u540E\u89E6\u53D1\u89C6\u56FE\u66F4\u65B0
  // node.checked \u72B6\u6001\u53D1\u751F\u53D8\u66F4\uFF0C\u7B26\u5408 tree \u7684 props.value \u7684\u53D6\u503C
  nextTick(() => {
    console.info(node.value, 'nextTick context.node.checked:', node.checked);
  });
};
const onActive = (vals, context) => {
  console.info('onActive actived:', vals, 'context:', context);
  const { node } = context;
  console.info(node.value, 'context.node.actived:', node.actived);
  const actived = vals.filter((val) => {
    if (val === '2.2') {
      console.info('\u8282\u70B9 2.2 \u4E0D\u5141\u8BB8\u6FC0\u6D3B');
      return false;
    }
    return true;
  });
  if (syncProps.value) {
    actived.value = actived;
  }
};
const onExpand = (vals, context) => {
  console.info('onExpand expanded:', vals, 'context:', context);
  const { node } = context;
  console.info(node.value, 'context.node.expanded:', node.expanded);
  const expanded = vals.filter((val) => {
    if (val === '2.3') {
      console.info('\u8282\u70B9 2.3 \u4E0D\u5141\u8BB8\u5C55\u5F00');
      return false;
    }
    return true;
  });
  if (syncProps.value) {
    expanded.value = expanded;
  }
};
<\/script>
`,Z=`<template>
  <t-space direction="vertical">
    <t-space>
      <t-input-adornment prepend="checked:">
        <t-input :value="allChecked" @change="onAllCheckedInput" />
      </t-input-adornment>
    </t-space>
    <t-space>
      <t-input-adornment prepend="expanded:">
        <t-input :value="allExpanded" @change="onAllExpandedInput" />
      </t-input-adornment>
    </t-space>
    <t-space>
      <t-input-adornment prepend="actived:">
        <t-input :value="allActived" @change="onAllActivedInput" />
      </t-input-adornment>
    </t-space>
    <t-tree
      v-model="checked"
      :expanded.sync="expanded"
      :actived.sync="actived"
      :data="items"
      checkable
      activable
      :expand-on-click-node="false"
      :active-multiple="false"
      :value-mode="valueMode"
    />
  </t-space>
</template>

<script>
// \u6CE8\u610F\u8FD9\u4E2A\u793A\u4F8B\uFF0C\u540C\u6B65\u5C5E\u6027\u7684\u8D4B\u503C\u65B9\u5F0F\u4E0E vue3 api \u4E0D\u540C
export default {
  data() {
    return {
      valueMode: 'onlyLeaf',
      checked: ['1.1.1.1', '1.1.1.2'],
      expanded: ['1', '1.1', '1.1.1', '2'],
      actived: ['2'],
      items: [
        {
          value: '1',
          label: '1',
          children: [
            {
              value: '1.1',
              label: '1.1',
              children: [
                {
                  value: '1.1.1',
                  label: '1.1.1',
                  children: [
                    {
                      value: '1.1.1.1',
                      label: '1.1.1.1',
                    },
                    {
                      value: '1.1.1.2',
                      label: '1.1.1.2',
                    },
                  ],
                },
                {
                  value: '1.1.2',
                  label: '1.1.2',
                  children: [
                    {
                      value: '1.1.2.1',
                      label: '1.1.2.1',
                    },
                    {
                      value: '1.1.2.2',
                      label: '1.1.2.2',
                    },
                  ],
                },
              ],
            },
            {
              value: '1.2',
              label: '1.2',
              children: [
                {
                  value: '1.2.1',
                  label: '1.2.1',
                  children: [
                    {
                      value: '1.2.1.1',
                      label: '1.2.1.1',
                    },
                    {
                      value: '1.2.1.2',
                      label: '1.2.1.2',
                    },
                  ],
                },
                {
                  value: '1.2.2',
                  label: '1.2.2',
                  children: [
                    {
                      value: '1.2.2.1',
                      label: '1.2.2.1',
                    },
                    {
                      value: '1.2.2.2',
                      label: '1.2.2.2',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          value: '2',
          label: '2',
          checkable: false,
          children: [
            {
              value: '2.1',
              label: '2.1',
              checkable: false,
            },
            {
              value: '2.2',
              label: '2.2',
              checkable: false,
            },
          ],
        },
      ],
    };
  },
  computed: {
    allChecked() {
      let arr = [];
      if (Array.isArray(this.checked)) {
        arr = this.checked;
      }
      return arr.map((val) => \`{\${val}}\`).join(', ');
    },
    allExpanded() {
      let arr = [];
      if (Array.isArray(this.expanded)) {
        arr = this.expanded;
      }
      return arr.map((val) => \`{\${val}}\`).join(', ');
    },
    allActived() {
      let arr = [];
      if (Array.isArray(this.actived)) {
        arr = this.actived;
      }
      return arr.map((val) => \`{\${val}}\`).join(', ');
    },
  },
  methods: {
    getValueFromString(val) {
      const arr = val.split(',');
      const vals = [];
      arr
        .map((str) => str.trim())
        .forEach((tag) => {
          const match = /^\\{([^{}]+)\\}$/.exec(tag);
          if (match && match[1]) {
            vals.push(match[1]);
          }
        });
      return vals;
    },
    onAllCheckedInput(val) {
      console.log('checked input on change', val);
      const vals = this.getValueFromString(val);
      this.checked = vals;
    },
    onAllExpandedInput(val) {
      console.log('expanded input on change', val);
      const vals = this.getValueFromString(val);
      this.expanded = vals;
    },
    onAllActivedInput(val) {
      console.log('actived input on change', val);
      const vals = this.getValueFromString(val);
      this.actived = vals;
    },
  },
};
<\/script>
`,nn=`<template>
  <t-space direction="vertical">
    <t-space>
      <t-input-adornment prepend="checked:">
        <t-input :value="allChecked" @change="onAllCheckedInput" />
      </t-input-adornment>
    </t-space>
    <t-space>
      <t-input-adornment prepend="expanded:">
        <t-input :value="allExpanded" @change="onAllExpandedInput" />
      </t-input-adornment>
    </t-space>
    <t-space>
      <t-input-adornment prepend="actived:">
        <t-input :value="allActived" @change="onAllActivedInput" />
      </t-input-adornment>
    </t-space>
    <t-tree
      v-model="checked"
      :expanded.sync="expanded"
      :actived.sync="actived"
      :data="items"
      checkable
      activable
      :expand-on-click-node="false"
      :active-multiple="false"
      :value-mode="valueMode"
    />
  </t-space>
</template>

<script setup>
import { ref, computed } from 'vue';
// \u6CE8\u610F\u8FD9\u4E2A\u793A\u4F8B\uFF0C\u540C\u6B65\u5C5E\u6027\u7684\u8D4B\u503C\u65B9\u5F0F\u4E0E vue3 api \u4E0D\u540C
const valueMode = ref('onlyLeaf');
const checked = ref(['1.1.1.1', '1.1.1.2']);
const expanded = ref(['1', '1.1', '1.1.1', '2']);
const actived = ref(['2']);
const items = ref([
  {
    value: '1',
    label: '1',
    children: [
      {
        value: '1.1',
        label: '1.1',
        children: [
          {
            value: '1.1.1',
            label: '1.1.1',
            children: [
              {
                value: '1.1.1.1',
                label: '1.1.1.1',
              },
              {
                value: '1.1.1.2',
                label: '1.1.1.2',
              },
            ],
          },
          {
            value: '1.1.2',
            label: '1.1.2',
            children: [
              {
                value: '1.1.2.1',
                label: '1.1.2.1',
              },
              {
                value: '1.1.2.2',
                label: '1.1.2.2',
              },
            ],
          },
        ],
      },
      {
        value: '1.2',
        label: '1.2',
        children: [
          {
            value: '1.2.1',
            label: '1.2.1',
            children: [
              {
                value: '1.2.1.1',
                label: '1.2.1.1',
              },
              {
                value: '1.2.1.2',
                label: '1.2.1.2',
              },
            ],
          },
          {
            value: '1.2.2',
            label: '1.2.2',
            children: [
              {
                value: '1.2.2.1',
                label: '1.2.2.1',
              },
              {
                value: '1.2.2.2',
                label: '1.2.2.2',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    value: '2',
    label: '2',
    checkable: false,
    children: [
      {
        value: '2.1',
        label: '2.1',
        checkable: false,
      },
      {
        value: '2.2',
        label: '2.2',
        checkable: false,
      },
    ],
  },
]);
const allChecked = computed(() => {
  let arr = [];
  if (Array.isArray(checked.value)) {
    arr = checked.value;
  }
  return arr.map((val) => \`{\${val}}\`).join(', ');
});
const allExpanded = computed(() => {
  let arr = [];
  if (Array.isArray(expanded.value)) {
    arr = expanded.value;
  }
  return arr.map((val) => \`{\${val}}\`).join(', ');
});
const allActived = computed(() => {
  let arr = [];
  if (Array.isArray(actived.value)) {
    arr = actived.value;
  }
  return arr.map((val) => \`{\${val}}\`).join(', ');
});
const getValueFromString = (val) => {
  const arr = val.split(',');
  const vals = [];
  arr
    .map((str) => str.trim())
    .forEach((tag) => {
      const match = /^\\{([^{}]+)\\}$/.exec(tag);
      if (match && match[1]) {
        vals.push(match[1]);
      }
    });
  return vals;
};
const onAllCheckedInput = (val) => {
  console.log('checked input on change', val);
  const vals = getValueFromString(val);
  checked.value = vals;
};
const onAllExpandedInput = (val) => {
  console.log('expanded input on change', val);
  const vals = getValueFromString(val);
  expanded.value = vals;
};
const onAllActivedInput = (val) => {
  console.log('actived input on change', val);
  const vals = getValueFromString(val);
  actived.value = vals;
};
<\/script>
`,en=`<template>
  <t-space direction="vertical">
    <t-space>
      <t-button @click="append()">\u63D2\u5165\u4E00\u4E2A\u6839\u8282\u70B9</t-button>
    </t-space>
    <t-tree
      ref="tree"
      :data="items"
      hover
      expand-all
      activable
      checkable
      :expand-on-click-node="false"
      line
      :label="label"
      :icon="icon"
    >
      <template #operations="{ node }">
        <div class="tdesign-demo-block-row">
          <t-button size="small" variant="base" @click="check(node)">\u68C0\u67E5\u8282\u70B9\u4FE1\u606F</t-button>
          <t-button size="small" variant="base" @click="changeTime(node)">\u53D8\u66F4\u65F6\u95F4</t-button>
          <t-button size="small" variant="base" @click="changeIcon(node)">\u53D8\u66F4\u56FE\u6807</t-button>
          <t-button size="small" variant="base" @click="append(node)">\u6DFB\u52A0\u5B50\u8282\u70B9</t-button>
          <t-button size="small" variant="base" theme="danger" @click="remove(node)">\u5220\u9664</t-button>
        </div>
      </template>
    </t-tree>
  </t-space>
</template>

<script lang="jsx">
import { Icon } from 'tdesign-icons-vue';

export default {
  data() {
    return {
      index: 2,
      items: [
        {
          value: 'node1',
        },
        {
          value: 'node2',
        },
      ],
    };
  },
  methods: {
    icon(h, node) {
      const { data } = node;
      let name = 'file';
      if (node.getChildren()) {
        if (node.expanded) {
          name = 'folder-open';
        } else {
          name = 'folder';
        }
      }
      if (data.icon) {
        name = data.icon;
      }
      return <Icon name={name} />;
    },
    label(h, node) {
      const timeStamp = node.data.timeStamp || '--';
      return \`\${node.value}: \${timeStamp}\`;
    },
    getInsertItem() {
      let item = null;
      this.index += 1;
      const value = \`t\${this.index}\`;
      item = {
        value,
      };
      return item;
    },
    append(node) {
      const { tree } = this.$refs;
      const item = this.getInsertItem();
      if (item) {
        if (!node) {
          tree.appendTo('', item);
        } else {
          tree.appendTo(node.value, item);
        }
      }
    },
    check(node) {
      console.info('check:', node);
    },
    changeIcon(node) {
      const { data } = node;
      const icon = data.icon === 'folder' ? 'folder-open' : 'folder';
      // vue3 \u4E2D\uFF0C\u7531\u4E8E\u5E76\u672A\u4F7F\u7528 defineProperty \u8FDB\u884C\u5C5E\u6027\u76D1\u542C\uFF0C\u6240\u4EE5\u8282\u70B9\u6570\u636E\u7684\u76F4\u63A5\u53D8\u66F4\u672A\u80FD\u53CD\u9988\u5230 ui \u7EC4\u4EF6
      // \u56E0\u6B64\u63D0\u4F9B node.setData \u65B9\u6CD5\u4E13\u95E8\u5904\u7406\u8FD9\u4E2A\u95EE\u9898\uFF0CsetData \u65B9\u6CD5\u89E6\u53D1 update \u4E8B\u4EF6\uFF0C\u901A\u77E5 ui \u7EC4\u4EF6\u66F4\u65B0
      node.setData({
        icon,
      });
    },
    changeTime(node) {
      const timeStamp = new Date().getTime();
      node.setData({
        timeStamp,
      });
    },
    remove(node) {
      node.remove();
    },
  },
};
<\/script>
`,tn=`<template>
  <t-space direction="vertical">
    <t-space>
      <t-button @click="append()">\u63D2\u5165\u4E00\u4E2A\u6839\u8282\u70B9</t-button>
    </t-space>
    <t-tree
      ref="tree"
      :data="items"
      hover
      expand-all
      activable
      checkable
      :expand-on-click-node="false"
      line
      :label="label"
      :icon="icon"
    >
      <template #operations="{ node }">
        <div class="tdesign-demo-block-row">
          <t-button size="small" variant="base" @click="check(node)">\u68C0\u67E5\u8282\u70B9\u4FE1\u606F</t-button>
          <t-button size="small" variant="base" @click="changeTime(node)">\u53D8\u66F4\u65F6\u95F4</t-button>
          <t-button size="small" variant="base" @click="changeIcon(node)">\u53D8\u66F4\u56FE\u6807</t-button>
          <t-button size="small" variant="base" @click="append(node)">\u6DFB\u52A0\u5B50\u8282\u70B9</t-button>
          <t-button size="small" variant="base" theme="danger" @click="remove(node)">\u5220\u9664</t-button>
        </div>
      </template>
    </t-tree>
  </t-space>
</template>

<script setup lang="jsx">
import { ref } from 'vue';
import { Icon } from 'tdesign-icons-vue';

const tree = ref();
const index = ref(2);
const items = ref([
  {
    value: 'node1',
  },
  {
    value: 'node2',
  },
]);
const icon = (h, node) => {
  const { data } = node;
  let name = 'file';
  if (node.getChildren()) {
    if (node.expanded) {
      name = 'folder-open';
    } else {
      name = 'folder';
    }
  }
  if (data.icon) {
    name = data.icon;
  }
  return <Icon name={name} />;
};
const label = (h, node) => {
  const timeStamp = node.data.timeStamp || '--';
  return \`\${node.value}: \${timeStamp}\`;
};
const getInsertItem = () => {
  let item = null;
  index.value += 1;
  const value = \`t\${index.value}\`;
  item = {
    value,
  };
  return item;
};
const append = (node) => {
  const item = getInsertItem();
  if (item) {
    if (!node) {
      tree.value.appendTo('', item);
    } else {
      tree.value.appendTo(node.value, item);
    }
  }
};
const check = (node) => {
  console.info('check:', node);
};
const changeIcon = (node) => {
  const { data } = node;
  const icon = data.icon === 'folder' ? 'folder-open' : 'folder';
  // vue3 \u4E2D\uFF0C\u7531\u4E8E\u5E76\u672A\u4F7F\u7528 defineProperty \u8FDB\u884C\u5C5E\u6027\u76D1\u542C\uFF0C\u6240\u4EE5\u8282\u70B9\u6570\u636E\u7684\u76F4\u63A5\u53D8\u66F4\u672A\u80FD\u53CD\u9988\u5230 ui \u7EC4\u4EF6
  // \u56E0\u6B64\u63D0\u4F9B node.setData \u65B9\u6CD5\u4E13\u95E8\u5904\u7406\u8FD9\u4E2A\u95EE\u9898\uFF0CsetData \u65B9\u6CD5\u89E6\u53D1 update \u4E8B\u4EF6\uFF0C\u901A\u77E5 ui \u7EC4\u4EF6\u66F4\u65B0
  node.setData({
    icon,
  });
};
const changeTime = (node) => {
  const timeStamp = new Date().getTime();
  node.setData({
    timeStamp,
  });
};
const remove = (node) => {
  node.remove();
};
<\/script>
`,an=`<template>
  <t-space :size="32" direction="vertical" style="width: 100%">
    <t-space direction="vertical" style="width: 80%">
      <h3>\u865A\u62DF\u6EDA\u52A8 - virtual \u6A21\u5F0F</h3>
      <t-space>
        <span>\u52A8\u753B:</span>
        <t-switch v-model="transition" />
      </t-space>
      <t-space>
        <span>\u663E\u793A\u8FDE\u7EBF:</span>
        <t-switch v-model="showLine" />
      </t-space>
      <t-space>
        <span>\u663E\u793A\u56FE\u6807:</span>
        <t-switch v-model="showIcon" />
      </t-space>
      <t-space>
        <span>\u53EF\u9009:</span>
        <t-switch v-model="isCheckable" />
      </t-space>
      <t-space>
        <span>\u53EF\u64CD\u4F5C:</span>
        <t-switch v-model="isOperateAble" />
      </t-space>
      <t-space>
        <t-input-adornment prepend="\u63D2\u5165\u8282\u70B9\u6570\u91CF:">
          <t-input v-model="textInsertCount" />
        </t-input-adornment>
      </t-space>
      <t-space>
        <t-button @click="append()">\u63D2\u5165\u6839\u8282\u70B9</t-button>
      </t-space>
      <t-space>
        <t-button @click="scrollTo()">\u6EDA\u52A8\u5230\u6307\u5B9A\u8282\u70B9</t-button>
      </t-space>
    </t-space>
    <t-tree
      ref="tree"
      :data="items"
      hover
      activable
      :checkable="isCheckable"
      expand-all
      :height="300"
      :transition="transition"
      :expand-on-click-node="false"
      :line="showLine"
      :icon="showIcon"
      :label="label"
      :scroll="{
        rowHeight: 34,
        bufferSize: 10,
        threshold: 10,
        type: 'virtual',
      }"
    >
      <template #operations="{ node }">
        <div v-if="isOperateAble" class="tdesign-demo-block-row">
          <t-button size="small" variant="base" @click="append(node)">\u6DFB\u52A0\u5B50\u8282\u70B9</t-button>
          <t-button size="small" variant="base" theme="danger" @click="remove(node)">\u5220\u9664</t-button>
        </div>
      </template>
    </t-tree>
    <div style="height: 100px"></div>
  </t-space>
</template>

<script>
const allLevels = [5, 5, 5];

function createTreeData() {
  let cacheIndex = 0;

  function getValue() {
    cacheIndex += 1;
    return \`t\${cacheIndex}\`;
  }

  function createNodes(items, level) {
    const count = allLevels[level];
    if (count) {
      let index = 0;
      for (index = 0; index < count; index += 1) {
        const value = getValue();
        const item = { value };
        items.push(item);
        if (allLevels[level + 1]) {
          item.children = [];
          createNodes(item.children, level + 1);
        }
      }
    }
  }

  const items = [];
  createNodes(items, 0);

  return {
    getValue,
    items,
  };
}

const virtualTree = createTreeData();

export default {
  data() {
    return {
      transition: true,
      textInsertCount: '1',
      showLine: true,
      showIcon: true,
      isCheckable: true,
      isOperateAble: true,
      items: virtualTree.items,
    };
  },
  computed: {
    insertCount() {
      return parseInt(this.textInsertCount, 10) || 1;
    },
  },
  methods: {
    label(h, node) {
      return \`\${node.value}\`;
    },
    getInsertItem() {
      const value = virtualTree.getValue();
      return {
        value,
      };
    },
    append(node) {
      const { tree } = this.$refs;
      if (!node) {
        for (let index = 0; index < this.insertCount; index += 1) {
          const item = this.getInsertItem();
          tree.appendTo('', item);
        }
      } else {
        for (let index = 0; index < this.insertCount; index += 1) {
          const item = this.getInsertItem();
          tree.appendTo(node.value, item);
        }
      }
    },
    remove(node) {
      node.remove();
    },
    scrollTo() {
      const { tree } = this.$refs;
      tree.scrollTo({
        // \u6307\u5B9Akey\u6EDA\u52A8\uFF0C\u5373\u5F53\u524D\u8282\u70B9\u5BF9\u5E94\u7684\u552F\u4E00\u503C\uFF0C\u63A8\u8350\u4F7F\u7528
        key: 't30',
        behavior: 'smooth',
        // \u6307\u5B9Aindex\u6EDA\u52A8\uFF0C\u5982\u679C\u5B58\u5728\u591A\u7EA7\u5D4C\u5957\uFF0C\u9700\u8981\u81EA\u5DF1\u8BA1\u7B97index
        // index: 100,
      });
    },
  },
};
<\/script>
`,ln=`<template>
  <t-space :size="32" direction="vertical" style="width: 100%">
    <t-space direction="vertical" style="width: 80%">
      <h3>\u865A\u62DF\u6EDA\u52A8 - virtual \u6A21\u5F0F</h3>
      <t-space>
        <span>\u52A8\u753B:</span>
        <t-switch v-model="transition" />
      </t-space>
      <t-space>
        <span>\u663E\u793A\u8FDE\u7EBF:</span>
        <t-switch v-model="showLine" />
      </t-space>
      <t-space>
        <span>\u663E\u793A\u56FE\u6807:</span>
        <t-switch v-model="showIcon" />
      </t-space>
      <t-space>
        <span>\u53EF\u9009:</span>
        <t-switch v-model="isCheckable" />
      </t-space>
      <t-space>
        <span>\u53EF\u64CD\u4F5C:</span>
        <t-switch v-model="isOperateAble" />
      </t-space>
      <t-space>
        <t-input-adornment prepend="\u63D2\u5165\u8282\u70B9\u6570\u91CF:">
          <t-input v-model="textInsertCount" />
        </t-input-adornment>
      </t-space>
      <t-space>
        <t-button @click="append()">\u63D2\u5165\u6839\u8282\u70B9</t-button>
      </t-space>
      <t-space>
        <t-button @click="scrollTo()">\u6EDA\u52A8\u5230\u6307\u5B9A\u8282\u70B9</t-button>
      </t-space>
    </t-space>
    <t-tree
      ref="tree"
      :data="items"
      hover
      activable
      :checkable="isCheckable"
      expand-all
      :height="300"
      :transition="transition"
      :expand-on-click-node="false"
      :line="showLine"
      :icon="showIcon"
      :label="label"
      :scroll="{
        rowHeight: 34,
        bufferSize: 10,
        threshold: 10,
        type: 'virtual',
      }"
    >
      <template #operations="{ node }">
        <div v-if="isOperateAble" class="tdesign-demo-block-row">
          <t-button size="small" variant="base" @click="append(node)">\u6DFB\u52A0\u5B50\u8282\u70B9</t-button>
          <t-button size="small" variant="base" theme="danger" @click="remove(node)">\u5220\u9664</t-button>
        </div>
      </template>
    </t-tree>
    <div style="height: 100px"></div>
  </t-space>
</template>

<script setup>
import { ref, computed } from 'vue';

const allLevels = [5, 5, 5];
function createTreeData() {
  let cacheIndex = 0;
  function getValue() {
    cacheIndex += 1;
    return \`t\${cacheIndex}\`;
  }
  function createNodes(items, level) {
    const count = allLevels[level];
    if (count) {
      let index = 0;
      for (index = 0; index < count; index += 1) {
        const value = getValue();
        const item = {
          value,
        };
        items.push(item);
        if (allLevels[level + 1]) {
          item.children = [];
          createNodes(item.children, level + 1);
        }
      }
    }
  }
  const items = [];
  createNodes(items, 0);
  return {
    getValue,
    items,
  };
}
const virtualTree = createTreeData();
const tree = ref();
const transition = ref(true);
const textInsertCount = ref('1');
const showLine = ref(true);
const showIcon = ref(true);
const isCheckable = ref(true);
const isOperateAble = ref(true);
const items = ref(virtualTree.items);
const insertCount = computed(() => parseInt(textInsertCount.value, 10) || 1);
const label = (h, node) => \`\${node.value}\`;
const getInsertItem = () => {
  const value = virtualTree.getValue();
  return {
    value,
  };
};
const append = (node) => {
  if (!node) {
    for (let index = 0; index < insertCount.value; index += 1) {
      const item = getInsertItem();
      tree.value.appendTo('', item);
    }
  } else {
    for (let index = 0; index < insertCount.value; index += 1) {
      const item = getInsertItem();
      tree.value.appendTo(node.value, item);
    }
  }
};
const remove = (node) => {
  node.remove();
};

const scrollTo = () => {
  tree.value.scrollTo({
    // \u6307\u5B9Akey\u6EDA\u52A8\uFF0C\u5373\u5F53\u524D\u8282\u70B9\u5BF9\u5E94\u7684\u552F\u4E00\u503C\uFF0C\u63A8\u8350\u4F7F\u7528
    key: 't30',
    behavior: 'smooth',
    // \u6307\u5B9Aindex\u6EDA\u52A8\uFF0C\u5982\u679C\u5B58\u5728\u591A\u7EA7\u5D4C\u5957\uFF0C\u9700\u8981\u81EA\u5DF1\u8BA1\u7B97index
    // index: 100,
  });
};
<\/script>
`,h=[{name:"activable",type:"Boolean",defaultValue:!1,options:[]},{name:"activeMultiple",type:"Boolean",defaultValue:!1,options:[]},{name:"allowFoldNodeOnFilter",type:"Boolean",defaultValue:!1,options:[]},{name:"checkable",type:"Boolean",defaultValue:!1,options:[]},{name:"checkStrictly",type:"Boolean",defaultValue:!1,options:[]},{name:"disableCheck",type:"Boolean",defaultValue:!1,options:[]},{name:"disabled",type:"Boolean",defaultValue:!1,options:[]},{name:"expandAll",type:"Boolean",defaultValue:!1,options:[]},{name:"expandMutex",type:"Boolean",defaultValue:!1,options:[]},{name:"expandOnClickNode",type:"Boolean",defaultValue:!1,options:[]},{name:"expandParent",type:"Boolean",defaultValue:!1,options:[]},{name:"hover",type:"Boolean",defaultValue:!1,options:[]},{name:"icon",type:"Boolean",defaultValue:!0,options:[]},{name:"label",type:"Boolean",defaultValue:!0,options:[]},{name:"lazy",type:"Boolean",defaultValue:!0,options:[]},{name:"line",type:"Boolean",defaultValue:!1,options:[]},{name:"transition",type:"Boolean",defaultValue:!0,options:[]},{name:"valueMode",type:"enum",defaultValue:"onlyLeaf",options:[{label:"onlyLeaf",value:"onlyLeaf"},{label:"parentFirst",value:"parentFirst"},{label:"all",value:"all"}]}];const d={};d.setup=(n,e)=>{const t=o([{label:"\u7B2C\u4E00\u6BB5",children:[{label:"\u7B2C\u4E8C\u6BB5"},{label:"\u7B2C\u4E8C\u6BB5"}]},{label:"\u7B2C\u4E00\u6BB5",children:[{label:"\u7B2C\u4E8C\u6BB5"},{label:"\u7B2C\u4E8C\u6BB5"}]},{label:"\u7B2C\u4E00\u6BB5",children:[{label:"\u7B2C\u4E8C\u6BB5"},{label:"\u7B2C\u4E8C\u6BB5"}]}]),l=o(h),a=[{label:"tree",value:"tree"}],i={tree:`
        <t-tree :data="data" v-bind="configProps" />
      `},c=o(`<template>${i[a[0].value].trim()}</template>`);function v(u){c.value=`<template>${i[u].trim()}</template>`}return{data:t,configList:l,panelList:a,usageCode:c,onPanelChange:v}};var r=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("base-usage",{attrs:{code:n.usageCode,"config-list":n.configList,"panel-list":n.panelList},on:{PanelChange:n.onPanelChange},scopedSlots:n._u([{key:"tree",fn:function(l){var a=l.configProps;return[t("t-tree",n._b({attrs:{data:n.data}},"t-tree",a,!1))]}}])})},b=[];r._withStripped=!0;const s={};var p=m(d,r,b,!1,f,null,null,null);function f(n){for(let e in s)this[e]=s[e]}p.options.__file="../src/tree/_usage/index.vue";var on=function(){return p.exports}();export{G as A,K as B,R as C,g as D,Y as E,Q as F,W as G,X as H,Z as I,nn as J,en as K,tn as L,an as M,ln as N,on as U,k as a,C as b,y as c,I as d,A as e,w as f,D as g,L as h,N as i,T as j,$ as k,z as l,P as m,E as n,S as o,O as p,M as q,_ as r,j as s,F as t,V as u,B as v,U as w,H as x,J as y,q as z};
