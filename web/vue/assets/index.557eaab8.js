import{Y as s,n as u}from"./index.663c003f.js";var C=`<template>
  <t-transfer
    :data="list"
    v-model="targetValue"
    :checked.sync="checked"
    @change="onChange"
    @checked-change="handleCheckedChange"
  />
</template>
<script>
const initialList = [];
for (let i = 0; i < 20; i++) {
  initialList.push({
    value: i.toString(),
    label: \`\u5185\u5BB9\${i + 1}\`,
    disabled: i % 4 < 1,
  });
}
export default {
  data() {
    return {
      list: initialList,
      targetValue: [],
      checked: ['2'],
    };
  },
  methods: {
    handleCheckedChange({
      checked, sourceChecked, targetChecked, type,
    }) {
      console.log('handleCheckedChange', {
        checked,
        sourceChecked,
        targetChecked,
        type,
      });
    },
    onChange(newTargetValue) {
      console.log(newTargetValue);
    },
  },
};
<\/script>
`,k=`<template>
  <t-transfer
    :data="list"
    v-model="targetValue"
    :checked.sync="checked"
    @change="onChange"
    @checked-change="handleCheckedChange"
  />
</template>
<script setup>
import { ref } from 'vue';

const initialList = [];
for (let i = 0; i < 20; i++) {
  initialList.push({
    value: i.toString(),
    label: \`\u5185\u5BB9\${i + 1}\`,
    disabled: i % 4 < 1,
  });
}
const list = ref(initialList);
const targetValue = ref([]);
const checked = ref(['2']);
const handleCheckedChange = ({
  checked, sourceChecked, targetChecked, type,
}) => {
  console.log('handleCheckedChange', {
    checked,
    sourceChecked,
    targetChecked,
    type,
  });
};
const onChange = (newTargetValue) => {
  console.log(newTargetValue);
};
<\/script>
`,b=`<template>
  <t-transfer theme="primary" :data="list" v-model="targetValue" :checked-value="checkedValue" :search="true" />
</template>
<script>
const initialList = [];
for (let i = 0; i < 20; i++) {
  initialList.push({
    value: i.toString(),
    label: \`\u5185\u5BB9\${i + 1}\`,
  });
}
export default {
  data() {
    return {
      list: initialList,
      targetValue: [],
      checkedValue: [],
    };
  },
};
<\/script>
`,y=`<template>
  <t-transfer theme="primary" :data="list" v-model="targetValue" :checked-value="checkedValue" :search="true" />
</template>
<script setup>
import { ref } from 'vue';

const initialList = [];
for (let i = 0; i < 20; i++) {
  initialList.push({
    value: i.toString(),
    label: \`\u5185\u5BB9\${i + 1}\`,
  });
}
const list = ref(initialList);
const targetValue = ref([]);
const checkedValue = ref([]);
<\/script>
`,V=`<template>
  <t-transfer
    theme="primary"
    :data="list"
    v-model="targetValue"
    :checked-value="checkedValue"
    :pagination="pagination"
    :onPageChange="handlePageChange"
  />
</template>
<script>
const initialList = [];
for (let i = 0; i < 20; i++) {
  initialList.push({
    value: i.toString(),
    label: \`\u5185\u5BB9\${i + 1}\`,
  });
}
export default {
  data() {
    return {
      list: initialList,
      targetValue: [],
      checkedValue: [],
      pagination: [
        {
          pageSize: 10,
          defaultCurrent: 1,
        },
        {
          pageSize: 5,
          defaultCurrent: 1,
        },
      ],
    };
  },
  methods: {
    handlePageChange(...args) {
      console.log('handlePageChange', args);
    },
  },
};
<\/script>
`,x=`<template>
  <t-transfer
    theme="primary"
    :data="list"
    v-model="targetValue"
    :checked-value="checkedValue"
    :pagination="pagination"
    :onPageChange="handlePageChange"
  />
</template>
<script setup>
import { ref } from 'vue';

const initialList = [];
for (let i = 0; i < 20; i++) {
  initialList.push({
    value: i.toString(),
    label: \`\u5185\u5BB9\${i + 1}\`,
  });
}
const list = ref(initialList);
const targetValue = ref([]);
const checkedValue = ref([]);
const pagination = ref([
  {
    pageSize: 10,
    defaultCurrent: 1,
  },
  {
    pageSize: 5,
    defaultCurrent: 1,
  },
]);
const handlePageChange = (...args) => {
  console.log('handlePageChange', args);
};
<\/script>
`,L=`<template>
  <t-space direction="vertical">
    <p style="margin: 10px">\u81EA\u5B9A\u4E49\u5934\u90E8\u3001\u5E95\u90E8\u53CA\u64CD\u4F5C\u6309\u94AE\u7684\u6E32\u67D3</p>
    <t-transfer :data="list" :operation="['\u79FB\u9664', '\u52A0\u5165']" class="tdesign-transfer-custom">
      <template v-slot:title="props" :name="123">
        <div>{{ props.type === 'target' ? '\u76EE\u6807' : '\u6765\u6E90' }}</div>
      </template>
      <template v-slot:operation="props" :name="123">
        {{ props.direction === 'left' ? '\u79FB\u9664' : '\u52A0\u5165' }}
      </template>
      <template v-slot:footer="props" :name="123">
        <div style="padding: 12px 20px">
          <span v-if="props.type === 'source'">\u9009\u4E2D\u5E76\u52A0\u5165</span>
          <span v-else>\u9009\u4E2D\u5E76\u79FB\u9664</span>
        </div>
      </template>
    </t-transfer>
    <br />
    <p style="margin: 10px">\u81EA\u5B9A\u4E49\u6E32\u67D3\u6570\u636E</p>
    <t-transfer
      theme="primary"
      :data="customList"
      v-model="targetValue2"
      :checked-value="checkedValue2"
      :transfer-item="transferItem"
    >
    </t-transfer>
  </t-space>
</template>
<script lang="jsx">
const initialList = [];
for (let i = 0; i < 20; i++) {
  initialList.push({
    value: i.toString(),
    label: \`\u5185\u5BB9\${i + 1}\`,
  });
}

const initialCustomList = [];
for (let i = 0; i < 20; i++) {
  initialCustomList.push({
    value: i.toString(),
    label: \`\u5185\u5BB9\${i + 1}\`,
    description: \`\u7B2C\${i + 1}\u6BB5\u4FE1\u606F\`,
  });
}
export default {
  data() {
    return {
      list: initialList,
      customList: initialCustomList,
      targetValue2: [],
      checkedValue2: [],
    };
  },
  methods: {
    transferItem(h, { data, index, type }) {
      const sourceLabel = (
        <span class="transfer-item">
          {data.label} - {data.description}
        </span>
      );
      const targetLabel = (
        <span class="transfer-item">
          {index} - {data.label}
        </span>
      );
      return type === 'source' ? sourceLabel : targetLabel;
    },
  },
};
<\/script>
<style>
.tdesign-transfer-custom .t-button .t-icon {
  display: none;
}
.tdesign-transfer-custom .t-icon + .t-button__text:not(:empty) {
  margin-left: 0;
}
</style>
`,_=`<template>
  <t-space direction="vertical">
    <p style="margin: 10px">\u81EA\u5B9A\u4E49\u5934\u90E8\u3001\u5E95\u90E8\u53CA\u64CD\u4F5C\u6309\u94AE\u7684\u6E32\u67D3</p>
    <t-transfer :data="list" :operation="['\u79FB\u9664', '\u52A0\u5165']" class="tdesign-transfer-custom">
      <template v-slot:title="props" :name="123">
        <div>{{ props.type === 'target' ? '\u76EE\u6807' : '\u6765\u6E90' }}</div>
      </template>
      <template v-slot:operation="props" :name="123">
        {{ props.direction === 'left' ? '\u79FB\u9664' : '\u52A0\u5165' }}
      </template>
      <template v-slot:footer="props" :name="123">
        <div style="padding: 12px 20px">
          <span v-if="props.type === 'source'">\u9009\u4E2D\u5E76\u52A0\u5165</span>
          <span v-else>\u9009\u4E2D\u5E76\u79FB\u9664</span>
        </div>
      </template>
    </t-transfer>
    <br />
    <p style="margin: 10px">\u81EA\u5B9A\u4E49\u6E32\u67D3\u6570\u636E</p>
    <t-transfer
      theme="primary"
      :data="customList"
      v-model="targetValue2"
      :checked-value="checkedValue2"
      :transfer-item="transferItem"
    >
    </t-transfer>
  </t-space>
</template>
<script setup lang="jsx">
import { ref } from 'vue';

const initialList = [];
for (let i = 0; i < 20; i++) {
  initialList.push({
    value: i.toString(),
    label: \`\u5185\u5BB9\${i + 1}\`,
  });
}
const initialCustomList = [];
for (let i = 0; i < 20; i++) {
  initialCustomList.push({
    value: i.toString(),
    label: \`\u5185\u5BB9\${i + 1}\`,
    description: \`\u7B2C\${i + 1}\u6BB5\u4FE1\u606F\`,
  });
}
const list = ref(initialList);
const customList = ref(initialCustomList);
const targetValue2 = ref([]);
const checkedValue2 = ref([]);
const transferItem = (h, { data, index, type }) => {
  const sourceLabel = (
    <span class="transfer-item">
      {data.label} - {data.description}
    </span>
  );
  const targetLabel = (
    <span class="transfer-item">
      {index} - {data.label}
    </span>
  );
  return type === 'source' ? sourceLabel : targetLabel;
};
<\/script>
<style>
.tdesign-transfer-custom .t-button .t-icon {
  display: none;
}
.tdesign-transfer-custom .t-icon + .t-button__text:not(:empty) {
  margin-left: 0;
}
</style>
`,P=`<template>
  <t-space direction="vertical">
    <p style="margin: 10px 0">\u9ED8\u8BA4\u6682\u65E0\u6570\u636E</p>
    <t-transfer :data="list" />
    <p style="margin: 10px">\u81EA\u5B9A\u4E49\u7A7A\u72B6\u6001</p>
    <t-transfer :data="list" empty="No Data" />
  </t-space>
</template>
<script>
const initialList = [];
export default {
  data() {
    return {
      list: initialList,
    };
  },
};
<\/script>
`,S=`<template>
  <t-space direction="vertical">
    <p style="margin: 10px 0">\u9ED8\u8BA4\u6682\u65E0\u6570\u636E</p>
    <t-transfer :data="list" />
    <p style="margin: 10px">\u81EA\u5B9A\u4E49\u7A7A\u72B6\u6001</p>
    <t-transfer :data="list" empty="No Data" />
  </t-space>
</template>
<script setup>
import { ref } from 'vue';

const initialList = [];
const list = ref(initialList);
<\/script>
`,D=`<template>
  <div>
    <t-transfer
      :data="list"
      v-model="targetValue"
      :checked.sync="checked"
      @change="onChange"
      @checked-change="handleCheckedChange"
      :targetDraggable="true"
      targetSort="push"
    />
  </div>
</template>
<script>
const initialList = [];
for (let i = 0; i < 20; i++) {
  initialList.push({
    value: i.toString(),
    label: \`\u5185\u5BB9\${i + 1}\`,
    disabled: i % 4 < 1,
  });
}
export default {
  data() {
    return {
      list: initialList,
      targetValue: [],
      checked: ['2'],
    };
  },
  methods: {
    handleCheckedChange({
      checked, sourceChecked, targetChecked, type,
    }) {
      console.log('handleCheckedChange', {
        checked,
        sourceChecked,
        targetChecked,
        type,
      });
    },
    onChange(newTargetValue) {
      console.log(newTargetValue);
    },
  },
};
<\/script>
`,$=`<template>
  <div>
    <t-transfer
      :data="list"
      v-model="targetValue"
      :checked.sync="checked"
      @change="onChange"
      @checked-change="handleCheckedChange"
      :targetDraggable="true"
      targetSort="push"
    />
  </div>
</template>
<script setup>
import { ref } from 'vue';

const initialList = [];
for (let i = 0; i < 20; i++) {
  initialList.push({
    value: i.toString(),
    label: \`\u5185\u5BB9\${i + 1}\`,
    disabled: i % 4 < 1,
  });
}
const list = ref(initialList);
const targetValue = ref([]);
const checked = ref(['2']);
const handleCheckedChange = ({
  checked, sourceChecked, targetChecked, type,
}) => {
  console.log('handleCheckedChange', {
    checked,
    sourceChecked,
    targetChecked,
    type,
  });
};
const onChange = (newTargetValue) => {
  console.log(newTargetValue);
};
<\/script>
`,T=`<template>
  <t-space direction="vertical">
    <p style="margin: 10px 0">\u4F7F\u7528\u63D2\u69FD</p>
    <t-transfer
      :data="items"
      :search="true"
      v-model="targetValue1"
      :checked.sync="checked1"
      @change="onChange"
      @checked-change="handleCheckedChange"
    >
      <template v-slot:tree="slotProps">
        <t-tree
          :data="slotProps.data"
          v-model="slotProps.value"
          @change="slotProps.onChange"
          checkable
          hover
          expand-all
          transition
        />
      </template>
    </t-transfer>

    <p style="margin: 10px 0">\u4F7F\u7528\u5C5E\u6027</p>
    <t-transfer
      :data="items"
      :search="true"
      v-model="targetValue2"
      :checked.sync="checked2"
      :tree="renderTree"
      @change="onChange"
      @checked-change="handleCheckedChange"
    >
    </t-transfer>
  </t-space>
</template>
<script lang="jsx">
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
      targetValue1: [],
      checked1: [],
      targetValue2: [],
      checked2: [],
    };
  },
  methods: {
    renderTree(h, { data, value, onChange }) {
      return <t-tree data={data} value={value} onChange={onChange} checkable hover expand-all transition></t-tree>;
    },
    handleCheckedChange({
      checked, sourceChecked, targetChecked, type,
    }) {
      console.log('handleCheckedChange', {
        checked,
        sourceChecked,
        targetChecked,
        type,
      });
    },
    onChange(newTargetValue) {
      console.log('onChange', newTargetValue);
    },
  },
};
<\/script>
`,w=`<template>
  <t-space direction="vertical">
    <p style="margin: 10px 0">\u4F7F\u7528\u63D2\u69FD</p>
    <t-transfer
      :data="items"
      :search="true"
      v-model="targetValue1"
      :checked.sync="checked1"
      @change="onChange"
      @checked-change="handleCheckedChange"
    >
      <template v-slot:tree="slotProps">
        <t-tree
          :data="slotProps.data"
          v-model="slotProps.value"
          @change="slotProps.onChange"
          checkable
          hover
          expand-all
          transition
        />
      </template>
    </t-transfer>

    <p style="margin: 10px 0">\u4F7F\u7528\u5C5E\u6027</p>
    <t-transfer
      :data="items"
      :search="true"
      v-model="targetValue2"
      :checked.sync="checked2"
      :tree="renderTree"
      @change="onChange"
      @checked-change="handleCheckedChange"
    >
    </t-transfer>
  </t-space>
</template>
<script setup lang='jsx'>
import { ref } from 'vue';

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
const targetValue1 = ref([]);
const checked1 = ref([]);

const targetValue2 = ref([]);
const checked2 = ref([]);

const handleCheckedChange = ({
  checked, sourceChecked, targetChecked, type,
}) => {
  console.log('handleCheckedChange', {
    checked,
    sourceChecked,
    targetChecked,
    type,
  });
};
const onChange = (newTargetValue) => {
  console.log('onChange', newTargetValue);
};

const renderTree = (h, { data, value, onChange }) => <t-tree data={data} value={value} onChange={onChange} checkable hover expand-all transition></t-tree>;
<\/script>
`,g=[{name:"direction",type:"enum",defaultValue:"both",options:[{label:"left",value:"left"},{label:"right",value:"right"},{label:"both",value:"both"}]},{name:"disabled",type:"Boolean",defaultValue:!1,options:[]},{name:"search",type:"Boolean",defaultValue:!1,options:[]},{name:"showCheckAll",type:"Boolean",defaultValue:!0,options:[]},{name:"targetSort",type:"enum",defaultValue:"original",options:[{label:"original",value:"original"},{label:"push",value:"push"},{label:"unshift",value:"unshift"}]}];const o={};o.setup=(e,n)=>{const t=s(g),a=[{label:"transfer",value:"transfer"}],l={transfer:`
        <t-transfer :data="[{
          value: 1,
          label: '\u5185\u5BB91',
          disabled: false
        },{
          value: 2,
          label: '\u5185\u5BB92',
          disabled: true
        },{
          value: 3,
          label: '\u5185\u5BB93',
          disabled: false
        },]" v-bind="configProps" />
      `},r=s(`<template>${l[a[0].value].trim()}</template>`);function p(h){r.value=`<template>${l[h].trim()}</template>`}return{configList:t,panelList:a,usageCode:r,onPanelChange:p}};var c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("base-usage",{attrs:{code:e.usageCode,"config-list":e.configList,"panel-list":e.panelList},on:{PanelChange:e.onPanelChange},scopedSlots:e._u([{key:"transfer",fn:function(a){var l=a.configProps;return[t("t-transfer",e._b({attrs:{data:[{value:1,label:"\u5185\u5BB91",disabled:!1},{value:2,label:"\u5185\u5BB92",disabled:!0},{value:3,label:"\u5185\u5BB93",disabled:!1}]}},"t-transfer",l,!1))]}}])})},m=[];c._withStripped=!0;const i={};var d=u(o,c,m,!1,f,null,null,null);function f(e){for(let n in i)this[n]=i[n]}d.options.__file="../src/transfer/_usage/index.vue";var j=function(){return d.exports}();export{C as D,j as U,k as a,b,y as c,V as d,x as e,L as f,_ as g,P as h,S as i,D as j,$ as k,T as l,w as m};
