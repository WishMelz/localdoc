import{Y as s,n as d}from"./index.663c003f.js";var g=`<template>
  <t-cascader v-model="value" :options="options" clearable @change="onChange">
    <template #label>
      <div>\u5355\u9009\uFF1A</div>
    </template>
  </t-cascader>
</template>
<script>
export default {
  data() {
    return {
      options: [
        {
          label: '\u9009\u9879\u4E00',
          value: '1',
          children: [
            {
              label: '\u5B50\u9009\u9879\u4E00',
              value: '1.1',
            },
            {
              label: '\u5B50\u9009\u9879\u4E8C',
              value: '1.2',
            },
            {
              label: '\u5B50\u9009\u9879\u4E09',
              value: '1.3',
            },
          ],
        },
        {
          label: '\u9009\u9879\u4E8C',
          value: '2',
          children: [
            {
              label: '\u5B50\u9009\u9879\u4E00',
              value: '2.1',
            },
            {
              label: '\u5B50\u9009\u9879\u4E8C',
              value: '2.2',
            },
          ],
        },
      ],
      value: '1.1',
    };
  },
  methods: {
    onChange(val, context) {
      console.log(this.value, val, context);
      console.log('path: ', context.node.getPath());
    },
  },
};
<\/script>
`,x=`<template>
  <t-cascader v-model="value" :options="options" clearable @change="onChange">
    <template #label>
      <div>\u5355\u9009\uFF1A</div>
    </template>
  </t-cascader>
</template>
<script setup>
import { ref } from 'vue';

const options = ref([
  {
    label: '\u9009\u9879\u4E00',
    value: '1',
    children: [
      {
        label: '\u5B50\u9009\u9879\u4E00',
        value: '1.1',
      },
      {
        label: '\u5B50\u9009\u9879\u4E8C',
        value: '1.2',
      },
      {
        label: '\u5B50\u9009\u9879\u4E09',
        value: '1.3',
      },
    ],
  },
  {
    label: '\u9009\u9879\u4E8C',
    value: '2',
    children: [
      {
        label: '\u5B50\u9009\u9879\u4E00',
        value: '2.1',
      },
      {
        label: '\u5B50\u9009\u9879\u4E8C',
        value: '2.2',
      },
    ],
  },
]);
const value = ref('1.1');
const onChange = (val, context) => {
  console.log(value.value, val, context);
  console.log('path: ', context.node.getPath());
};
<\/script>
`,C=`<template>
  <t-cascader v-model="value" :options="options" multiple clearable />
</template>
<script>
export default {
  data() {
    return {
      options: [
        {
          label: '\u9009\u9879\u4E00',
          value: '1',
          children: [
            {
              label: '\u5B50\u9009\u9879\u4E00',
              value: '1.1',
            },
            {
              label: '\u5B50\u9009\u9879\u4E8C',
              value: '1.2',
            },
            {
              label: '\u5B50\u9009\u9879\u4E09',
              value: '1.3',
            },
          ],
        },
        {
          label: '\u9009\u9879\u4E8C',
          value: '2',
          children: [
            {
              label: '\u5B50\u9009\u9879\u4E00',
              value: '2.1',
            },
            {
              label: '\u5B50\u9009\u9879\u4E8C',
              value: '2.2',
            },
          ],
        },
      ],
      value: ['1.1'],
    };
  },
};
<\/script>
`,y=`<template>
  <t-cascader v-model="value" :options="options" multiple clearable />
</template>
<script setup>
import { ref } from 'vue';

const options = ref([
  {
    label: '\u9009\u9879\u4E00',
    value: '1',
    children: [
      {
        label: '\u5B50\u9009\u9879\u4E00',
        value: '1.1',
      },
      {
        label: '\u5B50\u9009\u9879\u4E8C',
        value: '1.2',
      },
      {
        label: '\u5B50\u9009\u9879\u4E09',
        value: '1.3',
      },
    ],
  },
  {
    label: '\u9009\u9879\u4E8C',
    value: '2',
    children: [
      {
        label: '\u5B50\u9009\u9879\u4E00',
        value: '2.1',
      },
      {
        label: '\u5B50\u9009\u9879\u4E8C',
        value: '2.2',
      },
    ],
  },
]);
const value = ref(['1.1']);
<\/script>
`,D=`<template>
  <t-space direction="vertical">
    <h3>default:</h3>
    <t-cascader v-model="value" :options="options" :on-remove="handleBlur" multiple :min-collapsed-num="1" />

    <h3>use collapsedItems:</h3>
    <t-space>
      <div>size control:</div>
      <t-radio-group :value="size" :options="['small', 'medium', 'large']" @change="(value) => (size = value)" />
    </t-space>
    <t-space>
      <span>disabled control:</span>
      <t-checkbox :checked="disabled" @change="(value) => (disabled = value)" />
    </t-space>
    <t-space>
      <span>readonly control:</span>
      <t-checkbox :checked="readonly" @change="(value) => (readonly = value)" />
    </t-space>
    <t-cascader
      v-model="value"
      :options="options"
      multiple
      :min-collapsed-num="minCollapsedNum"
      :collapsed-items="collapsedItems"
      :size="size"
      :disabled="disabled"
      :readonly="readonly"
    />
  </t-space>
</template>
<script lang="jsx">
export default {
  data() {
    return {
      options: [
        {
          label: '\u9009\u9879\u4E00',
          value: '1',
          children: [
            {
              label: '\u5B50\u9009\u9879\u4E00',
              value: '1.1',
            },
            {
              label: '\u5B50\u9009\u9879\u4E8C',
              value: '1.2',
            },
            {
              label: '\u5B50\u9009\u9879\u4E09',
              value: '1.3',
            },
          ],
        },
        {
          label: '\u9009\u9879\u4E8C',
          value: '2',
          children: [
            {
              label: '\u5B50\u9009\u9879\u4E00',
              value: '2.1',
            },
            {
              label: '\u5B50\u9009\u9879\u4E8C',
              value: '2.2',
            },
          ],
        },
      ],
      value: ['1.1', '1.2', '1.3'],
      size: 'medium',
      disabled: false,
      readonly: false,
      minCollapsedNum: 1,
    };
  },
  methods: {
    collapsedItems(h, { value, onClose }) {
      if (!(value instanceof Array)) return null;
      const count = value.length - this.minCollapsedNum;
      const collapsedTags = value.slice(this.minCollapsedNum, value.length);
      if (count <= 0) return null;
      return (
        <t-popup>
          <div slot="content">
            {collapsedTags.map((item, index) => (
              <t-tag
                key={item}
                style={{ marginRight: '4px' }}
                size={this.size}
                disabled={this.disabled}
                closable={!this.readonly && !this.disabled}
                onClose={(context) => onClose({ e: context.e, index: this.minCollapsedNum + index })}
              >
                {item}
              </t-tag>
            ))}
          </div>
          <t-tag size={this.size} disabled={this.disabled}>
            Function - More({count})
          </t-tag>
        </t-popup>
      );
    },
    handleBlur(e) {
      console.log(e);
    },
  },
};
<\/script>
`,_=`<template>
  <t-space direction="vertical">
    <t-cascader v-model="value" :options="options" :on-remove="handleBlur" multiple :min-collapsed-num="1" />
    <t-cascader v-model="value" :options="options" :collapsed-items="collapsedItems" multiple :min-collapsed-num="1" />
    <t-cascader v-model="value" :options="options" multiple clearable :min-collapsed-num="1">
      <template #collapsedItems="{ collapsedSelectedItems, count }">
        <t-popup>
          <template #content>
            <p v-for="(item, index) in collapsedSelectedItems" :key="index" style="padding: 10px">
              {{ item }}
            </p>
          </template>
          <span v-show="count > 0" style="color: #00a870; margin-left: 10px">+{{ count }}</span>
        </t-popup>
      </template>
    </t-cascader>
  </t-space>
</template>
<script setup lang="jsx">
import { ref } from 'vue';

const options = ref([
  {
    label: '\u9009\u9879\u4E00',
    value: '1',
    children: [
      {
        label: '\u5B50\u9009\u9879\u4E00',
        value: '1.1',
      },
      {
        label: '\u5B50\u9009\u9879\u4E8C',
        value: '1.2',
      },
      {
        label: '\u5B50\u9009\u9879\u4E09',
        value: '1.3',
      },
    ],
  },
  {
    label: '\u9009\u9879\u4E8C',
    value: '2',
    children: [
      {
        label: '\u5B50\u9009\u9879\u4E00',
        value: '2.1',
      },
      {
        label: '\u5B50\u9009\u9879\u4E8C',
        value: '2.2',
      },
    ],
  },
]);
const value = ref(['1.1', '1.2', '1.3']);
const collapsedItems = (h, { value: selectedValue, count }) => {
  if (!count) return;
  const value = selectedValue instanceof Array ? selectedValue : [selectedValue];
  // hover\u5C55\u793A\u5168\u90E8\u5DF2\u9009\u9879
  return (
    <t-popup>
      <div slot="content">
        {value.map((item) => (
          <p style="padding: 10px;">{item.label}</p>
        ))}
      </div>
      <span v-show={count > 0} style="color: #ED7B2F; margin-left: 10px;">
        +{count}
      </span>
    </t-popup>
  );
};
const handleBlur = (e) => {
  console.log(e);
};
<\/script>
`,k=`<template>
  <t-space direction="vertical">
    <!-- \u975E\u53D7\u63A7\u7528\u6CD5 -->
    <t-cascader :options="options" :default-value="value" clearable size="small" />
    <!-- \u53D7\u63A7+\u8BED\u6CD5\u7CD6\u7528\u6CD5 -->
    <t-cascader v-model="value" :options="options" clearable size="medium" />
    <!-- \u53D7\u63A7\u7528\u6CD5 -->
    <t-cascader :options="options" :value="value" clearable size="large" @change="handleValueChange" />
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      options: [
        {
          label: '\u9009\u9879\u4E00',
          value: '1',
          children: [
            {
              label: '\u5B50\u9009\u9879\u4E00',
              value: '1.1',
            },
            {
              label: '\u5B50\u9009\u9879\u4E8C',
              value: '1.2',
            },
            {
              label: '\u5B50\u9009\u9879\u4E09',
              value: '1.3',
            },
          ],
        },
        {
          label: '\u9009\u9879\u4E8C',
          value: '2',
          children: [
            {
              label: '\u5B50\u9009\u9879\u4E00',
              value: '2.1',
            },
            {
              label: '\u5B50\u9009\u9879\u4E8C',
              value: '2.2',
            },
          ],
        },
      ],
      value: '1.1',
    };
  },
  methods: {
    handleValueChange(e) {
      this.value = e;
    },
  },
};
<\/script>
`,z=`<template>
  <t-space direction="vertical">
    <!-- \u975E\u53D7\u63A7\u7528\u6CD5 -->
    <t-cascader :options="options" :default-value="value" clearable size="small" />
    <!-- \u53D7\u63A7+\u8BED\u6CD5\u7CD6\u7528\u6CD5 -->
    <t-cascader v-model="value" :options="options" clearable size="medium" />
    <!-- \u53D7\u63A7\u7528\u6CD5 -->
    <t-cascader :options="options" :value="value" clearable size="large" @change="handleValueChange" />
  </t-space>
</template>
<script setup>
import { ref } from 'vue';

const options = ref([
  {
    label: '\u9009\u9879\u4E00',
    value: '1',
    children: [
      {
        label: '\u5B50\u9009\u9879\u4E00',
        value: '1.1',
      },
      {
        label: '\u5B50\u9009\u9879\u4E8C',
        value: '1.2',
      },
      {
        label: '\u5B50\u9009\u9879\u4E09',
        value: '1.3',
      },
    ],
  },
  {
    label: '\u9009\u9879\u4E8C',
    value: '2',
    children: [
      {
        label: '\u5B50\u9009\u9879\u4E00',
        value: '2.1',
      },
      {
        label: '\u5B50\u9009\u9879\u4E8C',
        value: '2.2',
      },
    ],
  },
]);
const value = ref('1.1');
const handleValueChange = (e) => {
  value.value = e;
};
<\/script>
`,P=`<template>
  <t-space direction="vertical">
    <t-cascader v-model="value" :options="options" filterable clearable />
    <t-cascader v-model="value2" :options="options" filterable clearable multiple :min-collapsed-num="2" />
    <t-cascader v-model="value3" :filter="filterMethod" :options="options" clearable :min-collapsed-num="2" />
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      options: [
        {
          label: '\u5F53\u9009\u9879\u4E00\u6570\u636E\u5C55\u793A\u6587\u672C\u8FC7\u957F\u65F6',
          value: '1',
          children: [
            {
              label: '\u5B50\u9009\u9879\u4E00',
              value: '1.1',
            },
            {
              label: '\u5B50\u9009\u9879\u4E8C',
              value: '1.2',
            },
            {
              label: '\u5F53\u9009\u9879\u6570\u636E\u5C55\u793A\u6587\u672C\u8FC7\u957F\u65F6',
              value: '1.3',
            },
          ],
        },
        {
          label: '\u9009\u9879\u4E8C',
          value: '2',
          children: [
            {
              label: '\u5B50\u9009\u9879\u4E00',
              value: '2.1',
            },
            {
              label: '\u5F53\u9009\u9879\u6570\u636E\u5C55\u793A\u6587\u672C\u8FC7\u957F\u65F6',
              value: '2.2',
            },
          ],
        },
      ],
      value: '',
      value2: ['1.1'],
      value3: '',
    };
  },
  methods: {
    filterMethod(search, node) {
      console.log('filter:', search, node.label);
      return node.label.indexOf(search) !== -1;
    },
  },
};
<\/script>
`,V=`<template>
  <t-space direction="vertical">
    <t-cascader v-model="value" :options="options" filterable clearable />
    <t-cascader v-model="value2" :options="options" filterable clearable multiple :min-collapsed-num="2" />
    <t-cascader v-model="value3" :filter="filterMethod" :options="options" clearable :min-collapsed-num="2" />
  </t-space>
</template>
<script setup>
import { ref } from 'vue';

const options = ref([
  {
    label: '\u5F53\u9009\u9879\u4E00\u6570\u636E\u5C55\u793A\u6587\u672C\u8FC7\u957F\u65F6',
    value: '1',
    children: [
      {
        label: '\u5B50\u9009\u9879\u4E00',
        value: '1.1',
      },
      {
        label: '\u5B50\u9009\u9879\u4E8C',
        value: '1.2',
      },
      {
        label: '\u5F53\u9009\u9879\u6570\u636E\u5C55\u793A\u6587\u672C\u8FC7\u957F\u65F6',
        value: '1.3',
      },
    ],
  },
  {
    label: '\u9009\u9879\u4E8C',
    value: '2',
    children: [
      {
        label: '\u5B50\u9009\u9879\u4E00',
        value: '2.1',
      },
      {
        label: '\u5F53\u9009\u9879\u6570\u636E\u5C55\u793A\u6587\u672C\u8FC7\u957F\u65F6',
        value: '2.2',
      },
    ],
  },
]);
const value = ref('');
const value2 = ref(['1.1']);
const value3 = ref('');
const filterMethod = (search, node) => {
  console.log('filter:', search, node.label);
  return node.label.indexOf(search) !== -1;
};
<\/script>
`,w=`<template>
  <t-space direction="vertical">
    <t-cascader v-model="value1" :options="options" disabled />
    <t-cascader v-model="value2" :options="options" disabled multiple />
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      options: [
        {
          label: '\u9009\u9879\u4E00',
          value: '1',
          children: [
            {
              label: '\u5B50\u9009\u9879\u4E00',
              value: '1.1',
            },
            {
              label: '\u5B50\u9009\u9879\u4E8C',
              value: '1.2',
            },
            {
              label: '\u5B50\u9009\u9879\u4E09',
              value: '1.3',
            },
          ],
        },
        {
          label: '\u9009\u9879\u4E8C',
          value: '2',
          children: [
            {
              label: '\u5B50\u9009\u9879\u4E00',
              value: '2.1',
            },
            {
              label: '\u5B50\u9009\u9879\u4E8C',
              value: '2.2',
            },
          ],
        },
      ],
      value1: '1.1',
      value2: ['1.1'],
    };
  },
};
<\/script>
`,B=`<template>
  <t-space direction="vertical">
    <t-cascader v-model="value1" :options="options" disabled />
    <t-cascader v-model="value2" :options="options" disabled multiple />
  </t-space>
</template>
<script setup>
import { ref } from 'vue';

const options = ref([
  {
    label: '\u9009\u9879\u4E00',
    value: '1',
    children: [
      {
        label: '\u5B50\u9009\u9879\u4E00',
        value: '1.1',
      },
      {
        label: '\u5B50\u9009\u9879\u4E8C',
        value: '1.2',
      },
      {
        label: '\u5B50\u9009\u9879\u4E09',
        value: '1.3',
      },
    ],
  },
  {
    label: '\u9009\u9879\u4E8C',
    value: '2',
    children: [
      {
        label: '\u5B50\u9009\u9879\u4E00',
        value: '2.1',
      },
      {
        label: '\u5B50\u9009\u9879\u4E8C',
        value: '2.2',
      },
    ],
  },
]);
const value1 = ref('1.1');
const value2 = ref(['1.1']);
<\/script>
`,$=`<template>
  <t-space direction="vertical">
    <t-cascader v-model="value" :options="options" :show-all-levels="false" />
    <t-cascader v-model="value2" :options="options" :show-all-levels="false" multiple />
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      options: [
        {
          label: '\u9009\u9879\u4E00',
          value: '1',
          children: [
            {
              label: '\u5B50\u9009\u9879\u4E00',
              value: '1.1',
            },
            {
              label: '\u5B50\u9009\u9879\u4E8C',
              value: '1.2',
            },
            {
              label: '\u5B50\u9009\u9879\u4E09',
              value: '1.3',
            },
          ],
        },
        {
          label: '\u9009\u9879\u4E8C',
          value: '2',
          children: [
            {
              label: '\u5B50\u9009\u9879\u4E00',
              value: '2.1',
            },
            {
              label: '\u5B50\u9009\u9879\u4E8C',
              value: '2.2',
            },
          ],
        },
      ],
      value: '',
      value2: [],
    };
  },
};
<\/script>
`,L=`<template>
  <t-space direction="vertical">
    <t-cascader v-model="value" :options="options" :show-all-levels="false" />
    <t-cascader v-model="value2" :options="options" :show-all-levels="false" multiple />
  </t-space>
</template>
<script setup>
import { ref } from 'vue';

const options = ref([
  {
    label: '\u9009\u9879\u4E00',
    value: '1',
    children: [
      {
        label: '\u5B50\u9009\u9879\u4E00',
        value: '1.1',
      },
      {
        label: '\u5B50\u9009\u9879\u4E8C',
        value: '1.2',
      },
      {
        label: '\u5B50\u9009\u9879\u4E09',
        value: '1.3',
      },
    ],
  },
  {
    label: '\u9009\u9879\u4E8C',
    value: '2',
    children: [
      {
        label: '\u5B50\u9009\u9879\u4E00',
        value: '2.1',
      },
      {
        label: '\u5B50\u9009\u9879\u4E8C',
        value: '2.2',
      },
    ],
  },
]);
const value = ref('');
const value2 = ref([]);
<\/script>
`,F=`<template>
  <t-space direction="vertical">
    <t-cascader v-model="value1" :options="options" check-strictly />
    <t-cascader v-model="value2" :options="options" check-strictly multiple />
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      options: [
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
      ],
      value1: '1.2.2',
      value2: ['1.1.2.1', '2'],
    };
  },
};
<\/script>
`,I=`<template>
  <t-space direction="vertical">
    <t-cascader v-model="value1" :options="options" check-strictly />
    <t-cascader v-model="value2" :options="options" check-strictly multiple />
  </t-space>
</template>
<script setup>
import { ref } from 'vue';

const options = ref([
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
]);
const value1 = ref('1.2.2');
const value2 = ref(['1.1.2.1', '2']);
<\/script>
`,M=`<template>
  <t-space direction="vertical">
    <div>{{ value }}</div>
    <t-cascader v-model="value" :options="options" value-type="full" />
    <div>{{ value2 }}</div>
    <t-cascader v-model="value2" multiple :options="options" value-type="full" />
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      options: [
        {
          label: '\u9009\u9879\u4E00',
          value: '1',
          children: [
            {
              label: '\u5B50\u9009\u9879\u4E00',
              value: '1.1',
            },
            {
              label: '\u5B50\u9009\u9879\u4E8C',
              value: '1.2',
            },
            {
              label: '\u5B50\u9009\u9879\u4E09',
              value: '1.3',
            },
          ],
        },
        {
          label: '\u9009\u9879\u4E8C',
          value: '2',
          children: [
            {
              label: '\u5B50\u9009\u9879\u4E00',
              value: '2.1',
            },
            {
              label: '\u5B50\u9009\u9879\u4E8C',
              value: '2.2',
            },
          ],
        },
      ],
      value: ['1', '1.1'],
      value2: [
        ['1', '1.1'],
        ['1', '1.2'],
      ],
    };
  },
};
<\/script>
`,j=`<template>
  <t-space direction="vertical">
    <div>{{ value }}</div>
    <t-cascader v-model="value" :options="options" value-type="full" />
    <div>{{ value2 }}</div>
    <t-cascader v-model="value2" multiple :options="options" value-type="full" />
  </t-space>
</template>
<script setup>
import { ref } from 'vue';

const options = ref([
  {
    label: '\u9009\u9879\u4E00',
    value: '1',
    children: [
      {
        label: '\u5B50\u9009\u9879\u4E00',
        value: '1.1',
      },
      {
        label: '\u5B50\u9009\u9879\u4E8C',
        value: '1.2',
      },
      {
        label: '\u5B50\u9009\u9879\u4E09',
        value: '1.3',
      },
    ],
  },
  {
    label: '\u9009\u9879\u4E8C',
    value: '2',
    children: [
      {
        label: '\u5B50\u9009\u9879\u4E00',
        value: '2.1',
      },
      {
        label: '\u5B50\u9009\u9879\u4E8C',
        value: '2.2',
      },
    ],
  },
]);
const value = ref(['1', '1.1']);
const value2 = ref([
  ['1', '1.1'],
  ['1', '1.2'],
]);
<\/script>
`,S=`<template>
  <t-space direction="vertical">
    <t-cascader v-model="value1" :options="options" multiple value-mode="onlyLeaf" />
    <t-cascader v-model="value2" :options="options" multiple value-mode="parentFirst" />
    <t-cascader v-model="value3" :options="options" multiple value-mode="all" />
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      options: [
        {
          label: '\u9009\u9879\u4E00',
          value: '1',
          children: [
            {
              label: '\u5B50\u9009\u9879\u4E00',
              value: '1.1',
            },
            {
              label: '\u5B50\u9009\u9879\u4E8C',
              value: '1.2',
            },
            {
              label: '\u5B50\u9009\u9879\u4E09',
              value: '1.3',
            },
          ],
        },
        {
          label: '\u9009\u9879\u4E8C',
          value: '2',
          children: [
            {
              label: '\u5B50\u9009\u9879\u4E00',
              value: '2.1',
            },
            {
              label: '\u5B50\u9009\u9879\u4E8C',
              value: '2.2',
            },
          ],
        },
      ],
      value1: [],
      value2: [],
      value3: [],
    };
  },
};
<\/script>
`,N=`<template>
  <t-space direction="vertical">
    <t-cascader v-model="value1" :options="options" multiple value-mode="onlyLeaf" />
    <t-cascader v-model="value2" :options="options" multiple value-mode="parentFirst" />
    <t-cascader v-model="value3" :options="options" multiple value-mode="all" />
  </t-space>
</template>
<script setup>
import { ref } from 'vue';

const options = ref([
  {
    label: '\u9009\u9879\u4E00',
    value: '1',
    children: [
      {
        label: '\u5B50\u9009\u9879\u4E00',
        value: '1.1',
      },
      {
        label: '\u5B50\u9009\u9879\u4E8C',
        value: '1.2',
      },
      {
        label: '\u5B50\u9009\u9879\u4E09',
        value: '1.3',
      },
    ],
  },
  {
    label: '\u9009\u9879\u4E8C',
    value: '2',
    children: [
      {
        label: '\u5B50\u9009\u9879\u4E00',
        value: '2.1',
      },
      {
        label: '\u5B50\u9009\u9879\u4E8C',
        value: '2.2',
      },
    ],
  },
]);
const value1 = ref([]);
const value2 = ref([]);
const value3 = ref([]);
<\/script>
`,T=`<template>
  <t-space direction="vertical">
    <t-cascader v-model="value" :options="options" trigger="click" />
    <t-cascader v-model="value" :options="options" trigger="hover" />
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      options: [
        {
          label: '\u9009\u9879\u4E00',
          value: '1',
          children: [
            {
              label: '\u5B50\u9009\u9879\u4E00',
              value: '1.1',
            },
            {
              label: '\u5B50\u9009\u9879\u4E8C',
              value: '1.2',
            },
            {
              label: '\u5B50\u9009\u9879\u4E09',
              value: '1.3',
            },
          ],
        },
        {
          label: '\u9009\u9879\u4E8C',
          value: '2',
          children: [
            {
              label: '\u5B50\u9009\u9879\u4E00',
              value: '2.1',
            },
            {
              label: '\u5B50\u9009\u9879\u4E8C',
              value: '2.2',
            },
          ],
        },
      ],
      value: '',
    };
  },
};
<\/script>
`,A=`<template>
  <t-space direction="vertical">
    <t-cascader v-model="value" :options="options" trigger="click" />
    <t-cascader v-model="value" :options="options" trigger="hover" />
  </t-space>
</template>
<script setup>
import { ref } from 'vue';

const options = ref([
  {
    label: '\u9009\u9879\u4E00',
    value: '1',
    children: [
      {
        label: '\u5B50\u9009\u9879\u4E00',
        value: '1.1',
      },
      {
        label: '\u5B50\u9009\u9879\u4E8C',
        value: '1.2',
      },
      {
        label: '\u5B50\u9009\u9879\u4E09',
        value: '1.3',
      },
    ],
  },
  {
    label: '\u9009\u9879\u4E8C',
    value: '2',
    children: [
      {
        label: '\u5B50\u9009\u9879\u4E00',
        value: '2.1',
      },
      {
        label: '\u5B50\u9009\u9879\u4E8C',
        value: '2.2',
      },
    ],
  },
]);
const value = ref('');
<\/script>
`,E=`<template>
  <t-space direction="vertical">
    <t-cascader v-model="value1" :options="options" clearable placeholder="\u8BF7\u9009\u62E9" />
    <t-cascader v-model="value2" multiple :options="options" clearable placeholder="\u8BF7\u9009\u62E9" />
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      options: [
        {
          label: '\u5F53\u9009\u9879\u4E00\u6570\u636E\u5C55\u793A\u6587\u672C\u8FC7\u957F\u65F6',
          value: '1',
          children: [
            {
              label: '\u5B50\u9009\u9879\u4E00',
              value: '1.1',
            },
            {
              label: '\u5B50\u9009\u9879\u4E8C',
              value: '1.2',
            },
            {
              label: '\u5F53\u9009\u9879\u6570\u636E\u5C55\u793A\u6587\u672C\u8FC7\u957F\u65F6',
              value: '1.3',
            },
          ],
        },
        {
          label: '\u9009\u9879\u4E8C',
          value: '2',
          children: [
            {
              label: '\u5B50\u9009\u9879\u4E00',
              value: '2.1',
            },
            {
              label: '\u5F53\u9009\u9879\u6570\u636E\u5C55\u793A\u6587\u672C\u8FC7\u957F\u65F6',
              value: '2.2',
            },
          ],
        },
      ],
      value1: '1.1',
      value2: ['1.1'],
    };
  },
};
<\/script>
`,O=`<template>
  <t-space direction="vertical">
    <t-cascader v-model="value1" :options="options" clearable placeholder="\u8BF7\u9009\u62E9" />
    <t-cascader v-model="value2" multiple :options="options" clearable placeholder="\u8BF7\u9009\u62E9" />
  </t-space>
</template>
<script setup>
import { ref } from 'vue';

const options = ref([
  {
    label: '\u5F53\u9009\u9879\u4E00\u6570\u636E\u5C55\u793A\u6587\u672C\u8FC7\u957F\u65F6',
    value: '1',
    children: [
      {
        label: '\u5B50\u9009\u9879\u4E00',
        value: '1.1',
      },
      {
        label: '\u5B50\u9009\u9879\u4E8C',
        value: '1.2',
      },
      {
        label: '\u5F53\u9009\u9879\u6570\u636E\u5C55\u793A\u6587\u672C\u8FC7\u957F\u65F6',
        value: '1.3',
      },
    ],
  },
  {
    label: '\u9009\u9879\u4E8C',
    value: '2',
    children: [
      {
        label: '\u5B50\u9009\u9879\u4E00',
        value: '2.1',
      },
      {
        label: '\u5F53\u9009\u9879\u6570\u636E\u5C55\u793A\u6587\u672C\u8FC7\u957F\u65F6',
        value: '2.2',
      },
    ],
  },
]);
const value1 = ref('1.1');
const value2 = ref(['1.1']);
<\/script>
`,R=`<template>
  <t-cascader v-model="value" :options="options" multiple clearable :max="3" />
</template>
<script>
export default {
  data() {
    return {
      options: [
        {
          label: '\u9009\u9879\u4E00',
          value: '1',
          children: [
            {
              label: '\u5B50\u9009\u9879\u4E00',
              value: '1.1',
            },
            {
              label: '\u5B50\u9009\u9879\u4E8C',
              value: '1.2',
            },
            {
              label: '\u5B50\u9009\u9879\u4E09',
              value: '1.3',
            },
          ],
        },
        {
          label: '\u9009\u9879\u4E8C',
          value: '2',
          children: [
            {
              label: '\u5B50\u9009\u9879\u4E00',
              value: '2.1',
            },
            {
              label: '\u5B50\u9009\u9879\u4E8C',
              value: '2.2',
            },
          ],
        },
      ],
      value: [],
    };
  },
};
<\/script>
`,U=`<template>
  <t-cascader v-model="value" :options="options" multiple clearable :max="3" />
</template>
<script setup>
import { ref } from 'vue';

const options = ref([
  {
    label: '\u9009\u9879\u4E00',
    value: '1',
    children: [
      {
        label: '\u5B50\u9009\u9879\u4E00',
        value: '1.1',
      },
      {
        label: '\u5B50\u9009\u9879\u4E8C',
        value: '1.2',
      },
      {
        label: '\u5B50\u9009\u9879\u4E09',
        value: '1.3',
      },
    ],
  },
  {
    label: '\u9009\u9879\u4E8C',
    value: '2',
    children: [
      {
        label: '\u5B50\u9009\u9879\u4E00',
        value: '2.1',
      },
      {
        label: '\u5B50\u9009\u9879\u4E8C',
        value: '2.2',
      },
    ],
  },
]);
const value = ref([]);
<\/script>
`,q=`<template>
  <t-space direction="vertical">
    <t-cascader
      v-model="value"
      :keys="{ label: 'name', value: 'code', children: 'items' }"
      :options="options"
      clearable
    />
    <t-cascader
      v-model="value2"
      :keys="{ label: 'name', value: 'code', children: 'items' }"
      :options="options"
      clearable
      multiple
    />
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      options: [
        {
          name: '\u9009\u9879\u4E00',
          code: '1',
          items: [
            {
              name: '\u5B50\u9009\u9879\u4E00',
              code: '1.1',
            },
            {
              name: '\u5B50\u9009\u9879\u4E8C',
              code: '1.2',
            },
            {
              name: '\u5B50\u9009\u9879\u4E09',
              code: '1.3',
            },
          ],
        },
        {
          name: '\u9009\u9879\u4E8C',
          code: '2',
          items: [
            {
              name: '\u5B50\u9009\u9879\u4E00',
              code: '2.1',
            },
            {
              name: '\u5B50\u9009\u9879\u4E8C',
              code: '2.2',
            },
          ],
        },
      ],
      value: '1.1',
      value2: ['1.1'],
    };
  },
};
<\/script>
`,J=`<template>
  <t-space direction="vertical">
    <t-cascader
      v-model="value"
      :keys="{ label: 'name', value: 'code', children: 'items' }"
      :options="options"
      clearable
    />
    <t-cascader
      v-model="value2"
      :keys="{ label: 'name', value: 'code', children: 'items' }"
      :options="options"
      clearable
      multiple
    />
  </t-space>
</template>
<script setup>
import { ref } from 'vue';

const options = ref([
  {
    name: '\u9009\u9879\u4E00',
    code: '1',
    items: [
      {
        name: '\u5B50\u9009\u9879\u4E00',
        code: '1.1',
      },
      {
        name: '\u5B50\u9009\u9879\u4E8C',
        code: '1.2',
      },
      {
        name: '\u5B50\u9009\u9879\u4E09',
        code: '1.3',
      },
    ],
  },
  {
    name: '\u9009\u9879\u4E8C',
    code: '2',
    items: [
      {
        name: '\u5B50\u9009\u9879\u4E00',
        code: '2.1',
      },
      {
        name: '\u5B50\u9009\u9879\u4E8C',
        code: '2.2',
      },
    ],
  },
]);
const value = ref('1.1');
const value2 = ref(['1.1']);
<\/script>
`,Y=`<template>
  <t-space direction="vertical">
    <t-cascader v-model="value" :options="options" clearable :load="load" @change="handleChange" />
    <t-cascader
      v-model="value1"
      value-type="full"
      clearable
      :options="options"
      :load="load"
      :input-props="inputProps"
      @change="handleChange1"
    />
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      options: [
        {
          label: '\u9009\u98791',
          value: '1',
          children: true,
        },
        {
          label: '\u9009\u98792',
          value: '2',
          children: true,
        },
      ],
      value: '',
      value1: ['1', '1-1.0', '1-1.0-1.1'],
      inputProps: {
        value: '\u9009\u98791 / \u9009\u98791.1 / \u9009\u98791.1.1',
      },
    };
  },
  methods: {
    load(node) {
      return new Promise((resolve) => {
        setTimeout(() => {
          let nodes = [];
          if (node.level < 2) {
            nodes = [
              {
                label: \`\${node.label}.1\`,
                value: \`\${node.value}-1.\${node.level}\`,
                children: node.level < 1,
              },
              {
                label: \`\${node.label}.2\`,
                value: \`\${node.value}-2.\${node.level}\`,
                children: node.level < 1,
              },
            ];
          }
          resolve(nodes);
        }, 1000);
      });
    },
    handleChange(value) {
      console.log('value', value);
    },
    handleChange1(value, context) {
      const { node } = context;
      const path = node.getPath();
      const labelPath = path.map((item) => item.label).join(' / ');
      this.inputProps.value = labelPath;
      console.log('value1', value);
    },
  },
};
<\/script>
`,G=`<template>
  <t-space direction="vertical">
    <t-cascader v-model="value" :options="options" clearable :load="load" @change="handleChange" />
    <t-cascader
      v-model="value1"
      value-type="full"
      clearable
      :options="options"
      :load="load"
      :input-props="inputProps"
      @change="handleChange1"
    />
  </t-space>
</template>
<script setup>
import { ref, reactive } from 'vue';

const options = ref([
  {
    label: '\u9009\u98791',
    value: '1',
    children: true,
  },
  {
    label: '\u9009\u98792',
    value: '2',
    children: true,
  },
]);
const value = ref('');
const value1 = ref(['1', '1-1.0', '1-1.0-1.1']);
const inputProps = reactive({
  value: '\u9009\u98791 / \u9009\u98791.1 / \u9009\u98791.1.1',
});
const load = (node) => new Promise((resolve) => {
  setTimeout(() => {
    let nodes = [];
    if (node.level < 2) {
      nodes = [
        {
          label: \`\${node.label}.1\`,
          value: \`\${node.value}-1.\${node.level}\`,
          children: node.level < 1,
        },
        {
          label: \`\${node.label}.2\`,
          value: \`\${node.value}-2.\${node.level}\`,
          children: node.level < 1,
        },
      ];
    }
    resolve(nodes);
  }, 1000);
});
const handleChange = (value) => {
  console.log('value', value);
};
const handleChange1 = (value, context) => {
  const { node } = context;
  const path = node.getPath();
  const labelPath = path.map((item) => item.label).join(' / ');
  inputProps.value = labelPath;
  console.log('value1', value);
};
<\/script>
`,H=`<template>
  <t-space direction="vertical">
    <div class="cascader-demo-panel-container">
      <t-cascader-panel v-model="value" :options="options" />
    </div>
    <div class="cascader-demo-panel-container">
      <t-cascader-panel v-model="value2" :options="options" multiple />
    </div>
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      options: [
        {
          label: '\u9009\u9879\u4E00',
          value: '1',
          children: [
            {
              label: '\u5B50\u9009\u9879\u4E00',
              value: '1.1',
            },
            {
              label: '\u5B50\u9009\u9879\u4E8C',
              value: '1.2',
            },
            {
              label: '\u5B50\u9009\u9879\u4E09',
              value: '1.3',
            },
          ],
        },
        {
          label: '\u9009\u9879\u4E8C',
          value: '2',
          children: [
            {
              label: '\u5B50\u9009\u9879\u4E00',
              value: '2.1',
            },
            {
              label: '\u5B50\u9009\u9879\u4E8C',
              value: '2.2',
            },
          ],
        },
      ],
      value: '',
      value2: [],
    };
  },
};
<\/script>
<style>
.cascader-demo-panel-container {
  border: 1px solid #eee;
  width: 100%;
}
</style>
`,K=`<template>
  <t-space direction="vertical">
    <div class="cascader-demo-panel-container">
      <t-cascader-panel v-model="value" :options="options" />
    </div>
    <div class="cascader-demo-panel-container">
      <t-cascader-panel v-model="value2" :options="options" multiple />
    </div>
  </t-space>
</template>
<script setup>
import { ref } from 'vue';

const options = ref([
  {
    label: '\u9009\u9879\u4E00',
    value: '1',
    children: [
      {
        label: '\u5B50\u9009\u9879\u4E00',
        value: '1.1',
      },
      {
        label: '\u5B50\u9009\u9879\u4E8C',
        value: '1.2',
      },
      {
        label: '\u5B50\u9009\u9879\u4E09',
        value: '1.3',
      },
    ],
  },
  {
    label: '\u9009\u9879\u4E8C',
    value: '2',
    children: [
      {
        label: '\u5B50\u9009\u9879\u4E00',
        value: '2.1',
      },
      {
        label: '\u5B50\u9009\u9879\u4E8C',
        value: '2.2',
      },
    ],
  },
]);
const value = ref('');
const value2 = ref([]);
<\/script>
<style>
.cascader-demo-panel-container {
  border: 1px solid #eee;
  width: 100%;
}
</style>
`,m=[{name:"checkStrictly",type:"Boolean",defaultValue:!1,options:[]},{name:"clearable",type:"Boolean",defaultValue:!1,options:[]},{name:"disabled",type:"Boolean",defaultValue:!1,options:[]},{name:"filterable",type:"Boolean",defaultValue:!1,options:[]},{name:"lazy",type:"Boolean",defaultValue:!0,options:[]},{name:"loading",type:"Boolean",defaultValue:!1,options:[]},{name:"multiple",type:"Boolean",defaultValue:!1,options:[]},{name:"readonly",type:"Boolean",defaultValue:!1,options:[]},{name:"showAllLevels",type:"Boolean",defaultValue:!0,options:[]},{name:"size",type:"enum",defaultValue:"medium",options:[{label:"large",value:"large"},{label:"medium",value:"medium"},{label:"small",value:"small"}]},{name:"trigger",type:"enum",defaultValue:"click",options:[{label:"click",value:"click"},{label:"hover",value:"hover"}]},{name:"valueMode",type:"enum",defaultValue:"onlyLeaf",options:[{label:"onlyLeaf",value:"onlyLeaf"},{label:"parentFirst",value:"parentFirst"},{label:"all",value:"all"}]},{name:"valueType",type:"enum",defaultValue:"single",options:[{label:"single",value:"single"},{label:"full",value:"full"}]}];const c={};c.setup=(n,e)=>{const l=s(m),a=[{label:"cascader",value:"cascader"}],t={cascader:`
        <t-cascader :options="[
          {
            label: '\u9009\u9879\u4E00',
            value: '1',
            children: [
              { label: '\u5B50\u9009\u9879\u4E00', value: '1.1' },
              { label: '\u5B50\u9009\u9879\u4E8C', value: '1.2' },
            ],
          },
          {
            label: '\u9009\u9879\u4E8C',
            value: '2',
            children: [
              { label: '\u5B50\u9009\u9879\u4E00', value: '2.1' },
              { label: '\u5B50\u9009\u9879\u4E8C', value: '2.2' },
            ],
          },
        ]" v-bind="configProps" />
      `},o=s(`<template>${t[a[0].value].trim()}</template>`);function p(v){o.value=`<template>${t[v].trim()}</template>`}return{configList:l,panelList:a,usageCode:o,onPanelChange:p}};var u=function(){var n=this,e=n.$createElement,l=n._self._c||e;return l("base-usage",{attrs:{code:n.usageCode,"config-list":n.configList,"panel-list":n.panelList},on:{PanelChange:n.onPanelChange},scopedSlots:n._u([{key:"cascader",fn:function(a){var t=a.configProps;return[l("t-cascader",n._b({attrs:{options:[{label:"\u9009\u9879\u4E00",value:"1",children:[{label:"\u5B50\u9009\u9879\u4E00",value:"1.1"},{label:"\u5B50\u9009\u9879\u4E8C",value:"1.2"}]},{label:"\u9009\u9879\u4E8C",value:"2",children:[{label:"\u5B50\u9009\u9879\u4E00",value:"2.1"},{label:"\u5B50\u9009\u9879\u4E8C",value:"2.2"}]}]}},"t-cascader",t,!1))]}}])})},b=[];u._withStripped=!0;const i={};var r=d(c,u,b,!1,h,null,null,null);function h(n){for(let e in i)this[e]=i[e]}r.options.__file="../src/cascader/_usage/index.vue";var Q=function(){return r.exports}();export{J as A,Y as B,G as C,g as D,H as E,K as F,Q as U,x as a,C as b,y as c,D as d,_ as e,k as f,z as g,P as h,V as i,w as j,B as k,$ as l,L as m,F as n,I as o,M as p,j as q,S as r,N as s,T as t,A as u,E as v,O as w,R as x,U as y,q as z};
