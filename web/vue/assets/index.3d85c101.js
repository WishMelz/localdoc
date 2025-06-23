import{Y as i,o as b,C as y,x,n as C}from"./index.663c003f.js";var K=`<template>
  <t-space direction="vertical">
    <!-- \u6309\u94AE\u64CD\u4F5C\u533A\u57DF -->
    <div>
      <t-radio-group v-model="size" variant="default-filled">
        <t-radio-button value="small">\u5C0F\u5C3A\u5BF8</t-radio-button>
        <t-radio-button value="medium">\u4E2D\u5C3A\u5BF8</t-radio-button>
        <t-radio-button value="large">\u5927\u5C3A\u5BF8</t-radio-button>
      </t-radio-group>
    </div>

    <t-space>
      <t-checkbox v-model="stripe">\u663E\u793A\u6591\u9A6C\u7EB9</t-checkbox>
      <t-checkbox v-model="bordered">\u663E\u793A\u8868\u683C\u8FB9\u6846</t-checkbox>
      <t-checkbox v-model="hover">\u663E\u793A\u60AC\u6D6E\u6548\u679C</t-checkbox>
      <t-checkbox v-model="tableLayout">\u5BBD\u5EA6\u81EA\u9002\u5E94</t-checkbox>
      <t-checkbox v-model="showHeader">\u663E\u793A\u8868\u5934</t-checkbox>
    </t-space>

    <!-- \u5F53\u6570\u636E\u4E3A\u7A7A\u9700\u8981\u5360\u4F4D\u65F6\uFF0C\u4F1A\u663E\u793A cellEmptyContent -->
    <t-table
      rowKey="index"
      :data="data"
      :columns="columns"
      :stripe="stripe"
      :bordered="bordered"
      :hover="hover"
      :size="size"
      :table-layout="tableLayout ? 'auto' : 'fixed'"
      :pagination="pagination"
      :showHeader="showHeader"
      cellEmptyContent="-"
      resizable
    ></t-table>
  </t-space>
</template>
<script lang="jsx">
import { ErrorCircleFilledIcon, CheckCircleFilledIcon, CloseCircleFilledIcon } from 'tdesign-icons-vue';

const initialData = [];
const total = 28;
for (let i = 0; i < total; i++) {
  initialData.push({
    index: i + 1,
    applicant: ['\u8D3E\u660E', '\u5F20\u4E09', '\u738B\u82B3'][i % 3],
    status: i % 3,
    channel: ['\u7535\u5B50\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72'][i % 3],
    detail: {
      email: ['w.cezkdudy@lhll.au', 'r.nmgw@peurezgn.sl', 'p.cumx@rampblpa.ru'][i % 3],
    },
    matters: ['\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528', 'algolia \u670D\u52A1\u62A5\u9500', '\u76F8\u5173\u5468\u8FB9\u5236\u4F5C\u8D39', '\u6FC0\u52B1\u5956\u54C1\u5FEB\u9012\u8D39'][i % 4],
    time: [2, 3, 1, 4][i % 4],
    createTime: ['2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01'][i % 4],
  });
}
export default {
  data() {
    return {
      data: initialData,
      size: 'medium',
      tableLayout: false,
      stripe: true,
      bordered: true,
      hover: false,
      showHeader: true,
      columns: [
        { colKey: 'applicant', title: '\u7533\u8BF7\u4EBA', width: '100' },
        {
          colKey: 'status',
          title: '\u7533\u8BF7\u72B6\u6001',
          width: '150',
          cell: (h, { row }) => {
            const statusNameListMap = {
              0: { label: '\u5BA1\u6279\u901A\u8FC7', theme: 'success', icon: <CheckCircleFilledIcon /> },
              1: { label: '\u5BA1\u6279\u5931\u8D25', theme: 'danger', icon: <CloseCircleFilledIcon /> },
              2: { label: '\u5BA1\u6279\u8FC7\u671F', theme: 'warning', icon: <ErrorCircleFilledIcon /> },
            };
            return (
              <t-tag shape="round" theme={statusNameListMap[row.status].theme} variant="light-outline">
                {statusNameListMap[row.status].icon}
                {statusNameListMap[row.status].label}
              </t-tag>
            );
          },
        },
        { colKey: 'channel', title: '\u7B7E\u7F72\u65B9\u5F0F' },
        { colKey: 'detail.email', title: '\u90AE\u7BB1\u5730\u5740', ellipsis: true },
        { colKey: 'createTime', title: '\u7533\u8BF7\u65F6\u95F4' },
      ],
      /** \u975E\u53D7\u63A7\u7528\u6CD5\uFF1A\u4E0E\u5206\u9875\u7EC4\u4EF6\u5BF9\u9F50 */
      pagination: {
        defaultCurrent: 1,
        defaultPageSize: 5,
        total,
      },
    };
  },
};
<\/script>
<style lang="less">
.t-table__body .t-tag span {
  display: inline-flex;
  align-items: center;
}
</style>
`,D=`<template>
  <t-space direction="vertical">
    <!-- \u6309\u94AE\u64CD\u4F5C\u533A\u57DF -->
    <div>
      <t-radio-group v-model="size" variant="default-filled">
        <t-radio-button value="small">\u5C0F\u5C3A\u5BF8</t-radio-button>
        <t-radio-button value="medium">\u4E2D\u5C3A\u5BF8</t-radio-button>
        <t-radio-button value="large">\u5927\u5C3A\u5BF8</t-radio-button>
      </t-radio-group>
    </div>

    <t-space>
      <t-checkbox v-model="stripe">\u663E\u793A\u6591\u9A6C\u7EB9</t-checkbox>
      <t-checkbox v-model="bordered">\u663E\u793A\u8868\u683C\u8FB9\u6846</t-checkbox>
      <t-checkbox v-model="hover">\u663E\u793A\u60AC\u6D6E\u6548\u679C</t-checkbox>
      <t-checkbox v-model="tableLayout">\u5BBD\u5EA6\u81EA\u9002\u5E94</t-checkbox>
      <t-checkbox v-model="showHeader">\u663E\u793A\u8868\u5934</t-checkbox>
    </t-space>

    <!-- \u5F53\u6570\u636E\u4E3A\u7A7A\u9700\u8981\u5360\u4F4D\u65F6\uFF0C\u4F1A\u663E\u793A cellEmptyContent -->
    <t-table
      rowKey="index"
      :data="data"
      :columns="columns"
      :stripe="stripe"
      :bordered="bordered"
      :hover="hover"
      :size="size"
      :table-layout="tableLayout ? 'auto' : 'fixed'"
      :pagination="pagination"
      :showHeader="showHeader"
      cellEmptyContent="-"
      resizable
    ></t-table>
  </t-space>
</template>
<script setup lang="jsx">
import { ref, reactive } from 'vue';
import { ErrorCircleFilledIcon, CheckCircleFilledIcon, CloseCircleFilledIcon } from 'tdesign-icons-vue';

const initialData = [];
const total = 28;
for (let i = 0; i < total; i++) {
  initialData.push({
    index: i + 1,
    applicant: ['\u8D3E\u660E', '\u5F20\u4E09', '\u738B\u82B3'][i % 3],
    status: i % 3,
    channel: ['\u7535\u5B50\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72'][i % 3],
    detail: {
      email: ['w.cezkdudy@lhll.au', 'r.nmgw@peurezgn.sl', 'p.cumx@rampblpa.ru'][i % 3],
    },
    matters: ['\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528', 'algolia \u670D\u52A1\u62A5\u9500', '\u76F8\u5173\u5468\u8FB9\u5236\u4F5C\u8D39', '\u6FC0\u52B1\u5956\u54C1\u5FEB\u9012\u8D39'][i % 4],
    time: [2, 3, 1, 4][i % 4],
    createTime: ['2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01'][i % 4],
  });
}
const data = ref(initialData);
const size = ref('medium');
const tableLayout = ref(false);
const stripe = ref(true);
const bordered = ref(true);
const hover = ref(false);
const showHeader = ref(true);
const columns = ref([
  {
    colKey: 'applicant',
    title: '\u7533\u8BF7\u4EBA',
    width: '100',
  },
  {
    colKey: 'status',
    title: '\u7533\u8BF7\u72B6\u6001',
    width: '150',
    cell: (h, { row }) => {
      const statusNameListMap = {
        0: {
          label: '\u5BA1\u6279\u901A\u8FC7',
          theme: 'success',
          icon: <CheckCircleFilledIcon />,
        },
        1: {
          label: '\u5BA1\u6279\u5931\u8D25',
          theme: 'danger',
          icon: <CloseCircleFilledIcon />,
        },
        2: {
          label: '\u5BA1\u6279\u8FC7\u671F',
          theme: 'warning',
          icon: <ErrorCircleFilledIcon />,
        },
      };
      return (
        <t-tag shape="round" theme={statusNameListMap[row.status].theme} variant="light-outline">
          {statusNameListMap[row.status].icon}
          {statusNameListMap[row.status].label}
        </t-tag>
      );
    },
  },
  {
    colKey: 'channel',
    title: '\u7B7E\u7F72\u65B9\u5F0F',
  },
  {
    colKey: 'detail.email',
    title: '\u90AE\u7BB1\u5730\u5740',
    ellipsis: true,
  },
  {
    colKey: 'createTime',
    title: '\u7533\u8BF7\u65F6\u95F4',
  },
]);
/** \u975E\u53D7\u63A7\u7528\u6CD5\uFF1A\u4E0E\u5206\u9875\u7EC4\u4EF6\u5BF9\u9F50 */
const pagination = reactive({
  defaultCurrent: 1,
  defaultPageSize: 5,
  total,
});
<\/script>
<style lang="less">
.t-table__body .t-tag span {
  display: inline-flex;
  align-items: center;
}
</style>
`,T=`<template>
  <t-space direction="vertical">
    <t-space align="center">
      <t-radio-group v-model="activeRowType" variant="default-filled">
        <t-radio-button value="">\u4E0D\u9AD8\u4EAE</t-radio-button>
        <t-radio-button value="single">\u5355\u884C\u9AD8\u4EAE</t-radio-button>
        <t-radio-button value="multiple">\u591A\u884C\u9AD8\u4EAE</t-radio-button>
      </t-radio-group>
      <t-checkbox v-model="hover"> \u663E\u793A\u60AC\u6D6E\u6548\u679C </t-checkbox>
    </t-space>

    <!-- v-model:activeRowKeys \u7236\u7EC4\u4EF6\u63A7\u5236\u9AD8\u4EAE\u884C -->
    <!-- defaultActiveRowKeys \u7EC4\u4EF6\u5185\u90E8\u63A7\u5236\u9AD8\u4EAE\u884C\uFF0C\u7236\u7EC4\u4EF6\u65E0\u6CD5\u4F7F\u7528\u8FD9\u4E2A\u5C5E\u6027\u63A7\u5236 -->
    <t-table
      row-key="key"
      :data="tableData"
      :columns="columns"
      :active-row-type="activeRowType"
      :hover="hover"
      @active-change="onActiveChange"
    ></t-table>
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      hover: false,
      tableData: [],
      activeRowType: 'single',
      columns: [
        { colKey: 'applicant', title: '\u7533\u8BF7\u4EBA', width: '100' },
        { colKey: 'channel', title: '\u7B7E\u7F72\u65B9\u5F0F' },
        { colKey: 'detail.email', title: '\u90AE\u7BB1\u5730\u5740', ellipsis: true },
        { colKey: 'createTime', title: '\u7533\u8BF7\u65F6\u95F4' },
      ],
    };
  },
  watch: {
    activeRowType(v) {
      if (!v) {
        this.hover = true;
      }
    },
  },
  mounted() {
    this.tableData = this.getTableData();
  },
  methods: {
    getTableData(total = 5) {
      const data = [];
      for (let i = 0; i < total; i++) {
        data.push({
          key: i + 1,
          applicant: ['\u8D3E\u660E', '\u5F20\u4E09', '\u738B\u82B3'][i % 3],
          status: i % 3,
          channel: ['\u7535\u5B50\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72'][i % 3],
          detail: {
            email: ['w.cezkdudy@lhll.au', 'r.nmgw@peurezgn.sl', 'p.cumx@rampblpa.ru'][i % 3],
          },
          matters: ['\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528', 'algolia \u670D\u52A1\u62A5\u9500', '\u76F8\u5173\u5468\u8FB9\u5236\u4F5C\u8D39', '\u6FC0\u52B1\u5956\u54C1\u5FEB\u9012\u8D39'][i % 4],
          time: [2, 3, 1, 4][i % 4],
          createTime: ['2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01'][i % 4],
        });
      }
      return data;
    },
    onActiveChange(highlightRowKeys, ctx) {
      console.log(highlightRowKeys, ctx);
    },
  },
};
<\/script>
`,L=`<template>
  <t-space direction="vertical">
    <t-space align="center">
      <t-radio-group v-model="activeRowType" variant="default-filled">
        <t-radio-button value="">\u4E0D\u9AD8\u4EAE</t-radio-button>
        <t-radio-button value="single">\u5355\u884C\u9AD8\u4EAE</t-radio-button>
        <t-radio-button value="multiple">\u591A\u884C\u9AD8\u4EAE</t-radio-button>
      </t-radio-group>
      <t-checkbox v-model="hover"> \u663E\u793A\u60AC\u6D6E\u6548\u679C </t-checkbox>
    </t-space>

    <!-- v-model:activeRowKeys \u7236\u7EC4\u4EF6\u63A7\u5236\u9AD8\u4EAE\u884C -->
    <!-- defaultActiveRowKeys \u7EC4\u4EF6\u5185\u90E8\u63A7\u5236\u9AD8\u4EAE\u884C\uFF0C\u7236\u7EC4\u4EF6\u65E0\u6CD5\u4F7F\u7528\u8FD9\u4E2A\u5C5E\u6027\u63A7\u5236 -->
    <t-table
      row-key="key"
      :data="tableData"
      :columns="columns"
      :active-row-type="activeRowType"
      :hover="hover"
      @active-change="onActiveChange"
    ></t-table>
  </t-space>
</template>

<script><\/script>

<script setup>
import { ref, watch } from 'vue';

export default {
  name: 'HighlightTable',
};

const activeRowType = ref('single');
const hover = ref(false);
const tableData = getTableData();
const columns = [
  { colKey: 'applicant', title: '\u7533\u8BF7\u4EBA', width: '100' },
  { colKey: 'channel', title: '\u7B7E\u7F72\u65B9\u5F0F' },
  { colKey: 'detail.email', title: '\u90AE\u7BB1\u5730\u5740', ellipsis: true },
  { colKey: 'createTime', title: '\u7533\u8BF7\u65F6\u95F4' },
];
const onActiveChange = (highlightRowKeys, ctx) => {
  console.log(highlightRowKeys, ctx);
};
watch([activeRowType], ([activeRowType]) => {
  if (!activeRowType) {
    hover.value = true;
  }
});
function getTableData(total = 5) {
  const data = [];
  for (let i = 0; i < total; i++) {
    data.push({
      key: i + 1,
      applicant: ['\u8D3E\u660E', '\u5F20\u4E09', '\u738B\u82B3'][i % 3],
      status: i % 3,
      channel: ['\u7535\u5B50\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72'][i % 3],
      detail: {
        email: ['w.cezkdudy@lhll.au', 'r.nmgw@peurezgn.sl', 'p.cumx@rampblpa.ru'][i % 3],
      },
      matters: ['\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528', 'algolia \u670D\u52A1\u62A5\u9500', '\u76F8\u5173\u5468\u8FB9\u5236\u4F5C\u8D39', '\u6FC0\u52B1\u5956\u54C1\u5FEB\u9012\u8D39'][i % 4],
      time: [2, 3, 1, 4][i % 4],
      createTime: ['2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01'][i % 4],
    });
  }
  return data;
}
<\/script>
`,R=`<template>
  <div class="t-demo__style">
    <!-- row-class-name \u8BBE\u7F6E\u884C\u7C7B\u540D -->
    <t-table row-key="index" :data="data" :columns="columns" :row-class-name="getRowClassName">
      <template #footerSummary>
        <div class="t-table__row-filter-inner">\u6C47\u603B\uFF1A\u8FD1\u671F\u6570\u636E\u6CE2\u52A8\u8F83\u5927</div>
      </template>
    </t-table>
  </div>
</template>

<script lang="jsx">
import { ErrorCircleFilledIcon, CheckCircleFilledIcon, CloseCircleFilledIcon } from 'tdesign-icons-vue';

const initialData = [];
const total = 5;
for (let i = 0; i < total; i++) {
  initialData.push({
    index: i,
    applicant: ['\u8D3E\u660E', '\u5F20\u4E09', '\u738B\u82B3'][i % 3],
    status: i % 3,
    channel: ['\u7535\u5B50\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72'][i % 3],
    detail: {
      email: ['w.cezkdudy@lhll.au', 'r.nmgw@peurezgn.sl', 'p.cumx@rampblpa.ru'][i % 3],
    },
    matters: ['\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528', 'algolia \u670D\u52A1\u62A5\u9500', '\u76F8\u5173\u5468\u8FB9\u5236\u4F5C\u8D39', '\u6FC0\u52B1\u5956\u54C1\u5FEB\u9012\u8D39'][i % 4],
    time: [2, 10, 1][i % 3],
    createTime: ['2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01'][i % 4],
  });
}
export default {
  data() {
    return {
      data: initialData,
      columns: [
        { colKey: 'applicant', title: '\u7533\u8BF7\u4EBA', width: 100 },
        {
          colKey: 'status',
          title: '\u5BA1\u6279\u72B6\u6001',
          width: 120,
          cell: (h, { row }) => {
            const statusNameListMap = {
              0: { label: '\u5BA1\u6279\u901A\u8FC7', theme: 'success', icon: <CheckCircleFilledIcon /> },
              1: { label: '\u5BA1\u6279\u5931\u8D25', theme: 'danger', icon: <CloseCircleFilledIcon /> },
              2: { label: '\u5BA1\u6279\u8FC7\u671F', theme: 'warning', icon: <ErrorCircleFilledIcon /> },
            };
            return (
              <t-tag shape="round" theme={statusNameListMap[row.status].theme} variant="light-outline">
                {statusNameListMap[row.status].icon}
                {statusNameListMap[row.status].label}
              </t-tag>
            );
          },
        },
        {
          colKey: 'time',
          title: '\u7533\u8BF7\u8017\u65F6(\u5929)',
          width: 120,
          align: 'center',
          // \u8BBE\u7F6E\u5355\u5143\u683C\u7C7B\u540D
          className: ({ row }) => {
            if (row.time >= 9) {
              return 'custom-cell-class-name';
            }
            return '';
          },
          attrs: ({ row }) => {
            if (row.time >= 9) {
              return {
                style: {
                  fontWeight: 600,
                  backgroundColor: 'var(--td-warning-color-light)',
                },
              };
            }
          },
        },
        {
          colKey: 'channel',
          title: '\u7B7E\u7F72\u65B9\u5F0F',
          width: 120,
          align: 'right',
          className: () => 'custom-cell-class-name',
        },
        {
          colKey: 'detail.email',
          title: '\u90AE\u7BB1\u5730\u5740',
          width: 160,
          ellipsis: true,
        },
        { colKey: 'createTime', title: '\u7533\u8BF7\u65F6\u95F4' },
      ],
    };
  },

  methods: {
    getRowClassName({ rowIndex }) {
      if (rowIndex === 2) return 'custom-third-class-name';
      return '';
    },
  },
};
<\/script>

<style>
.t-demo__style .t-table .custom-third-class-name > td {
  color: green;
  font-weight: bold;
}

.t-demo__style .t-table td.last-column-class-name {
  color: orange;
  font-weight: bold;
}

.t-table td.custom-cell-class-name {
  color: orange;
  font-size: 18px;
  font-weight: bold;
}
</style>
`,F=`<template>
  <div class="t-demo__style">
    <!-- row-class-name \u8BBE\u7F6E\u884C\u7C7B\u540D -->
    <t-table row-key="index" :data="data" :columns="columns" :row-class-name="getRowClassName">
      <template #footerSummary>
        <div class="t-table__row-filter-inner">\u6C47\u603B\uFF1A\u8FD1\u671F\u6570\u636E\u6CE2\u52A8\u8F83\u5927</div>
      </template>
    </t-table>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue';
import { ErrorCircleFilledIcon, CheckCircleFilledIcon, CloseCircleFilledIcon } from 'tdesign-icons-vue';

const initialData = [];
const total = 5;
for (let i = 0; i < total; i++) {
  initialData.push({
    index: i,
    applicant: ['\u8D3E\u660E', '\u5F20\u4E09', '\u738B\u82B3'][i % 3],
    status: i % 3,
    channel: ['\u7535\u5B50\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72'][i % 3],
    detail: {
      email: ['w.cezkdudy@lhll.au', 'r.nmgw@peurezgn.sl', 'p.cumx@rampblpa.ru'][i % 3],
    },
    matters: ['\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528', 'algolia \u670D\u52A1\u62A5\u9500', '\u76F8\u5173\u5468\u8FB9\u5236\u4F5C\u8D39', '\u6FC0\u52B1\u5956\u54C1\u5FEB\u9012\u8D39'][i % 4],
    time: [2, 10, 1][i % 3],
    createTime: ['2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01'][i % 4],
  });
}
const data = ref(initialData);
const columns = ref([
  {
    colKey: 'applicant',
    title: '\u7533\u8BF7\u4EBA',
    width: 100,
  },
  {
    colKey: 'status',
    title: '\u5BA1\u6279\u72B6\u6001',
    width: 120,
    cell: (h, { row }) => {
      const statusNameListMap = {
        0: {
          label: '\u5BA1\u6279\u901A\u8FC7',
          theme: 'success',
          icon: <CheckCircleFilledIcon />,
        },
        1: {
          label: '\u5BA1\u6279\u5931\u8D25',
          theme: 'danger',
          icon: <CloseCircleFilledIcon />,
        },
        2: {
          label: '\u5BA1\u6279\u8FC7\u671F',
          theme: 'warning',
          icon: <ErrorCircleFilledIcon />,
        },
      };
      return (
        <t-tag shape="round" theme={statusNameListMap[row.status].theme} variant="light-outline">
          {statusNameListMap[row.status].icon}
          {statusNameListMap[row.status].label}
        </t-tag>
      );
    },
  },
  {
    colKey: 'time',
    title: '\u7533\u8BF7\u8017\u65F6(\u5929)',
    width: 120,
    align: 'center',
    // \u8BBE\u7F6E\u5355\u5143\u683C\u7C7B\u540D
    className: ({ row }) => {
      if (row.time >= 9) {
        return 'custom-cell-class-name';
      }
      return '';
    },
    attrs: ({ row }) => {
      if (row.time >= 9) {
        return {
          style: {
            fontWeight: 600,
            backgroundColor: 'var(--td-warning-color-light)',
          },
        };
      }
    },
  },
  {
    colKey: 'channel',
    title: '\u7B7E\u7F72\u65B9\u5F0F',
    width: 120,
    align: 'right',
    className: () => 'custom-cell-class-name',
  },
  {
    colKey: 'detail.email',
    title: '\u90AE\u7BB1\u5730\u5740',
    width: 160,
    ellipsis: true,
  },
  {
    colKey: 'createTime',
    title: '\u7533\u8BF7\u65F6\u95F4',
  },
]);
const getRowClassName = ({ rowIndex }) => {
  if (rowIndex === 2) return 'custom-third-class-name';
  return '';
};
<\/script>

<style>
.t-demo__style .t-table .custom-third-class-name > td {
  color: green;
  font-weight: bold;
}

.t-demo__style .t-table td.last-column-class-name {
  color: orange;
  font-weight: bold;
}

.t-table td.custom-cell-class-name {
  color: orange;
  font-size: 18px;
  font-weight: bold;
}
</style>
`,N=`<template>
  <div>
    <!-- :attach="getAttach" \u7EDF\u4E00\u63A7\u5236\u8D85\u51FA\u7701\u7565\u7B49\u5143\u7D20\u6D6E\u5C42\u7684\u6302\u8F7D\u5143\u7D20 -->
    <!-- \u65B9\u5F0F\u4E00\uFF1A\u8D85\u51FA\u7701\u7565\uFF0C\u5168\u90E8\u901A\u8FC7 columns \u5B9A\u4E49\uFF1B\u53EF\u4F7F\u7528 jsx \u81EA\u5B9A\u4E49\u6D6E\u5C42\u5185\u5BB9 -->
    <t-table row-key="id" :data="data" :columns="columns" lazyLoad> </t-table>

    <!-- \u65B9\u5F0F\u4E8C\uFF1A\u8D85\u51FA\u7701\u7565\u6D6E\u5C42\u5185\u5BB9\u5B9A\u4E49\uFF0C\u4F7F\u7528\u63D2\u69FD\u540D ellipsis-<colKey> \u5B9A\u4E49\u67D0\u4E00\u5217\u7684\u8D85\u51FA\u7701\u7565\u6D6E\u5C42\u5185\u5BB9 -->
    <!-- \u793A\u4F8B\u4EE3\u7801\u6709\u6548\uFF0C\u8BF7\u52FF\u5220\u9664 -->
    <!-- <t-table row-key="id" :data="data" :columns="columns" lazyLoad>
      <template #ellipsis-applicant="{ row, col }">
        <span>\u63D2\u69FD\u5B9A\u4E49\u6D6E\u5C42\u5185\u5BB9\uFF1A{{ row[col.colKey] }}</span>
      </template>
    </t-table> -->

    <!-- \u65B9\u5F0F\u4E09\uFF1A\u8D85\u51FA\u7701\u7565\u6D6E\u5C42\u5185\u5BB9\u5B9A\u4E49\uFF0C\u4F7F\u7528\u63D2\u69FD\u540D ellipsis \u5B9A\u4E49\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u4F1A\u7528\u4E8E\u81EA\u5B9A\u4E49\u6240\u6709\u5355\u5143\u683C\u7684\u7701\u7565\u6D6E\u5C42\uFF0C\u4E00\u822C\u60C5\u51B5\u4E0D\u5EFA\u8BAE\u4F7F\u7528 -->
    <!-- \u793A\u4F8B\u4EE3\u7801\u6709\u6548\uFF0C\u8BF7\u52FF\u5220\u9664 -->
    <!-- <t-table row-key="id" :data="data" :columns="columns" lazyLoad>
      <template #ellipsis="{ row, col }">
        <span>\u63D2\u69FD\u5B9A\u4E49\u6D6E\u5C42\u5185\u5BB9\uFF1A{{ row[col.colKey] }}</span>
      </template>
    </t-table> -->
  </div>
</template>

<script lang="jsx">
import { MessagePlugin } from 'tdesign-vue';
import {
  FileCopyIcon, ErrorCircleFilledIcon, CheckCircleFilledIcon, CloseCircleFilledIcon,
} from 'tdesign-icons-vue';

// thanks to https://www.zhangxinxu.com/wordpress/2021/10/js-copy-paste-clipboard/
function copyToClipboard(text) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text);
  } else {
    const textarea = document.createElement('textarea');
    document.body.appendChild(textarea);
    textarea.style.position = 'fixed';
    textarea.style.clip = 'rect(0 0 0 0)';
    textarea.style.top = '10px';
    textarea.value = text;
    textarea.select();
    document.execCommand('copy', true);
    document.body.removeChild(textarea);
  }
  MessagePlugin.success('\u6587\u672C\u590D\u5236\u6210\u529F');
}

const initialData = [];
const total = 5;
for (let i = 0; i < total; i++) {
  initialData.push({
    id: i + 1,
    applicant: ['\u8D3E\u660E\uFF08kyrieJia\uFF09', '\u5F20\u4E09\uFF08threeZhang)', '\u738B\u82B3\uFF08fangWang)'][i % 3],
    status: i % 3,
    channel: ['\u7535\u5B50\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72'][i % 3],
    desc: ['\u5355\u5143\u683C\u6587\u672C\u8D85\u51FA\u7701\u7565\u8BBE\u7F6E', '\u8FD9\u662F\u666E\u901A\u6587\u672C\u7684\u8D85\u51FA\u7701\u7565'][i % 2],
    link: '\u70B9\u51FB\u67E5\u770B\u5BA1\u6279\u8BE6\u60C5',
    something: '\u4EC5\u6807\u9898\u7701\u7565',
    // \u900F\u4F20 Tooltip Props \u5230\u6D6E\u5C42\u7EC4\u4EF6
    ellipsisProps: ['w.cezkdudy@lhll.au', 'r.nmgw@peurezgn.sl', 'p.cumx@rampblpa.ru'][i % 3],
    // \u5B8C\u5168\u81EA\u5B9A\u4E49\u8D85\u51FA\u7701\u7565\u7684 Tips \u5185\u5BB9
    ellipsisContent: ['\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528', 'algolia \u670D\u52A1\u62A5\u9500', '\u76F8\u5173\u5468\u8FB9\u5236\u4F5C\u8D39', '\u6FC0\u52B1\u5956\u54C1\u5FEB\u9012\u8D39'][i % 4],
    propsAndContent1: ['2021-11-01', '2021-12-01', '2022-01-01', '2022-02-01', '2022-03-01'][i % 4],
    propsAndContent2: [2, 3, 1, 4][i % 4],
  });
}

export default {
  data() {
    return {
      data: initialData,
      columns: [
        {
          colKey: 'applicant',
          title: '\u7533\u8BF7\u4EBA',
          ellipsis: true,
        },
        {
          colKey: 'status',
          title: '\u5BA1\u6279\u72B6\u6001',
          width: 120,
          cell: (h, { row }) => {
            const statusNameListMap = {
              0: { label: '\u5BA1\u6279\u901A\u8FC7', theme: 'success', icon: <CheckCircleFilledIcon /> },
              1: { label: '\u5BA1\u6279\u5931\u8D25', theme: 'danger', icon: <CloseCircleFilledIcon /> },
              2: { label: '\u5BA1\u6279\u8FC7\u671F', theme: 'warning', icon: <ErrorCircleFilledIcon /> },
            };
            return (
              <t-tag shape="round" theme={statusNameListMap[row.status].theme} variant="light-outline">
                {statusNameListMap[row.status].icon}
                {statusNameListMap[row.status].label}
              </t-tag>
            );
          },
        },
        {
          title: '\u7B7E\u7F72\u65B9\u5F0F\uFF08\u8D85\u957F\u6807\u9898\u793A\u4F8B\uFF09',
          colKey: 'channel',
          width: 120,
          ellipsisTitle: true,
        },
        {
          title: '\u90AE\u7BB1\u5730\u5740',
          colKey: 'ellipsisProps',
          // \u6D6E\u5C42\u6D45\u8272\u80CC\u666F\uFF0C\u65B9\u5411\u9ED8\u8BA4\u671D\u4E0B\u51FA\u73B0
          ellipsis: {
            theme: 'light',
            placement: 'bottom',
          },
        },
        {
          title: '\u7533\u8BF7\u4E8B\u9879',
          colKey: 'ellipsisContent',
          // ellipsis \u5B9A\u4E49\u8D85\u51FA\u7701\u7565\u7684\u6D6E\u5C42\u5185\u5BB9\uFF0Ccell \u5B9A\u4E49\u5355\u5143\u683C\u5185\u5BB9
          ellipsis: (h, { row }) => (
            <div>
              {row.ellipsisContent}
              <FileCopyIcon
                style={{ cursor: 'pointer', marginLeft: '4px' }}
                onClick={() => copyToClipboard(row.ellipsisContent)}
              />
            </div>
          ),
        },
        {
          title: '\u5BA1\u6838\u65F6\u95F4',
          colKey: 'propsAndContent1',
          // \u652F\u6301\u540C\u65F6\u8BBE\u7F6E tooltipProps \u548C \u6D6E\u5C42\u5185\u5BB9,
          width: 100,
          ellipsis: {
            props: {
              theme: 'light',
              placement: 'bottom-right',
            },
            content: (h, { row }) => (
              <div>
                <p>
                  <b>\u521B\u5EFA\u65E5\u671F:</b> {row.propsAndContent1}
                </p>
                <p>
                  <b>\u5BA1\u6838\u65F6\u957F(\u5929):</b> {row.propsAndContent2}
                </p>
              </div>
            ),
          },
        },
        {
          title: '\u64CD\u4F5C',
          colKey: 'link',
          // \u8D85\u51FA\u7701\u7565\u7684\u5185\u5BB9\u663E\u793A\u7EAF\u6587\u672C\uFF0C\u4E0D\u5E26\u4EFB\u4F55\u6837\u5F0F\u548C\u5143\u7D20
          ellipsis: (h, { row }) => row.link,
          // \u6CE8\u610F\u8FD9\u79CD JSX \u5199\u6CD5\u9700\u8BBE\u7F6E <script lang="jsx" setup>
          cell: (h, { row }) => (
            <a href="/vue-next/components/table" target="_blank">
              {row.link}
            </a>
          ),
        },
      ],
    };
  },

  // methods: {
  //   getAttach() {
  //     return document.body;
  //   },
  // },
};
<\/script>
`,S=`<template>
  <div>
    <!-- :attach="getAttach" \u7EDF\u4E00\u63A7\u5236\u8D85\u51FA\u7701\u7565\u7B49\u5143\u7D20\u6D6E\u5C42\u7684\u6302\u8F7D\u5143\u7D20 -->
    <!-- \u65B9\u5F0F\u4E00\uFF1A\u8D85\u51FA\u7701\u7565\uFF0C\u5168\u90E8\u901A\u8FC7 columns \u5B9A\u4E49\uFF1B\u53EF\u4F7F\u7528 jsx \u81EA\u5B9A\u4E49\u6D6E\u5C42\u5185\u5BB9 -->
    <t-table row-key="id" :data="data" :columns="columns" lazyLoad> </t-table>

    <!-- \u65B9\u5F0F\u4E8C\uFF1A\u8D85\u51FA\u7701\u7565\u6D6E\u5C42\u5185\u5BB9\u5B9A\u4E49\uFF0C\u4F7F\u7528\u63D2\u69FD\u540D ellipsis-<colKey> \u5B9A\u4E49\u67D0\u4E00\u5217\u7684\u8D85\u51FA\u7701\u7565\u6D6E\u5C42\u5185\u5BB9 -->
    <!-- \u793A\u4F8B\u4EE3\u7801\u6709\u6548\uFF0C\u8BF7\u52FF\u5220\u9664 -->
    <!-- <t-table row-key="id" :data="data" :columns="columns" lazyLoad>
      <template #ellipsis-applicant="{ row, col }">
        <span>\u63D2\u69FD\u5B9A\u4E49\u6D6E\u5C42\u5185\u5BB9\uFF1A{{ row[col.colKey] }}</span>
      </template>
    </t-table> -->

    <!-- \u65B9\u5F0F\u4E09\uFF1A\u8D85\u51FA\u7701\u7565\u6D6E\u5C42\u5185\u5BB9\u5B9A\u4E49\uFF0C\u4F7F\u7528\u63D2\u69FD\u540D ellipsis \u5B9A\u4E49\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u4F1A\u7528\u4E8E\u81EA\u5B9A\u4E49\u6240\u6709\u5355\u5143\u683C\u7684\u7701\u7565\u6D6E\u5C42\uFF0C\u4E00\u822C\u60C5\u51B5\u4E0D\u5EFA\u8BAE\u4F7F\u7528 -->
    <!-- \u793A\u4F8B\u4EE3\u7801\u6709\u6548\uFF0C\u8BF7\u52FF\u5220\u9664 -->
    <!-- <t-table row-key="id" :data="data" :columns="columns" lazyLoad>
      <template #ellipsis="{ row, col }">
        <span>\u63D2\u69FD\u5B9A\u4E49\u6D6E\u5C42\u5185\u5BB9\uFF1A{{ row[col.colKey] }}</span>
      </template>
    </t-table> -->
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue';
import { MessagePlugin } from 'tdesign-vue';
import {
  FileCopyIcon, ErrorCircleFilledIcon, CheckCircleFilledIcon, CloseCircleFilledIcon,
} from 'tdesign-icons-vue';

// thanks to https://www.zhangxinxu.com/wordpress/2021/10/js-copy-paste-clipboard/
function copyToClipboard(text) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text);
  } else {
    const textarea = document.createElement('textarea');
    document.body.appendChild(textarea);
    textarea.style.position = 'fixed';
    textarea.style.clip = 'rect(0 0 0 0)';
    textarea.style.top = '10px';
    textarea.value = text;
    textarea.select();
    document.execCommand('copy', true);
    document.body.removeChild(textarea);
  }
  MessagePlugin.success('\u6587\u672C\u590D\u5236\u6210\u529F');
}
const initialData = [];
const total = 5;
for (let i = 0; i < total; i++) {
  initialData.push({
    id: i + 1,
    applicant: ['\u8D3E\u660E\uFF08kyrieJia\uFF09', '\u5F20\u4E09\uFF08threeZhang)', '\u738B\u82B3\uFF08fangWang)'][i % 3],
    status: i % 3,
    channel: ['\u7535\u5B50\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72'][i % 3],
    desc: ['\u5355\u5143\u683C\u6587\u672C\u8D85\u51FA\u7701\u7565\u8BBE\u7F6E', '\u8FD9\u662F\u666E\u901A\u6587\u672C\u7684\u8D85\u51FA\u7701\u7565'][i % 2],
    link: '\u70B9\u51FB\u67E5\u770B\u5BA1\u6279\u8BE6\u60C5',
    something: '\u4EC5\u6807\u9898\u7701\u7565',
    // \u900F\u4F20 Tooltip Props \u5230\u6D6E\u5C42\u7EC4\u4EF6
    ellipsisProps: ['w.cezkdudy@lhll.au', 'r.nmgw@peurezgn.sl', 'p.cumx@rampblpa.ru'][i % 3],
    // \u5B8C\u5168\u81EA\u5B9A\u4E49\u8D85\u51FA\u7701\u7565\u7684 Tips \u5185\u5BB9
    ellipsisContent: ['\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528', 'algolia \u670D\u52A1\u62A5\u9500', '\u76F8\u5173\u5468\u8FB9\u5236\u4F5C\u8D39', '\u6FC0\u52B1\u5956\u54C1\u5FEB\u9012\u8D39'][i % 4],
    propsAndContent1: ['2021-11-01', '2021-12-01', '2022-01-01', '2022-02-01', '2022-03-01'][i % 4],
    propsAndContent2: [2, 3, 1, 4][i % 4],
  });
}
const data = ref(initialData);
const columns = ref([
  {
    colKey: 'applicant',
    title: '\u7533\u8BF7\u4EBA',
    ellipsis: true,
  },
  {
    colKey: 'status',
    title: '\u5BA1\u6279\u72B6\u6001',
    width: 120,
    cell: (h, { row }) => {
      const statusNameListMap = {
        0: {
          label: '\u5BA1\u6279\u901A\u8FC7',
          theme: 'success',
          icon: <CheckCircleFilledIcon />,
        },
        1: {
          label: '\u5BA1\u6279\u5931\u8D25',
          theme: 'danger',
          icon: <CloseCircleFilledIcon />,
        },
        2: {
          label: '\u5BA1\u6279\u8FC7\u671F',
          theme: 'warning',
          icon: <ErrorCircleFilledIcon />,
        },
      };
      return (
        <t-tag shape="round" theme={statusNameListMap[row.status].theme} variant="light-outline">
          {statusNameListMap[row.status].icon}
          {statusNameListMap[row.status].label}
        </t-tag>
      );
    },
  },
  {
    title: '\u7B7E\u7F72\u65B9\u5F0F\uFF08\u8D85\u957F\u6807\u9898\u793A\u4F8B\uFF09',
    colKey: 'channel',
    width: 120,
    ellipsisTitle: true,
  },
  {
    title: '\u90AE\u7BB1\u5730\u5740',
    colKey: 'ellipsisProps',
    // \u6D6E\u5C42\u6D45\u8272\u80CC\u666F\uFF0C\u65B9\u5411\u9ED8\u8BA4\u671D\u4E0B\u51FA\u73B0
    ellipsis: {
      theme: 'light',
      placement: 'bottom',
    },
  },
  {
    title: '\u7533\u8BF7\u4E8B\u9879',
    colKey: 'ellipsisContent',
    // ellipsis \u5B9A\u4E49\u8D85\u51FA\u7701\u7565\u7684\u6D6E\u5C42\u5185\u5BB9\uFF0Ccell \u5B9A\u4E49\u5355\u5143\u683C\u5185\u5BB9
    ellipsis: (h, { row }) => (
      <div>
        {row.ellipsisContent}
        <FileCopyIcon
          style={{
            cursor: 'pointer',
            marginLeft: '4px',
          }}
          onClick={() => copyToClipboard(row.ellipsisContent)}
        />
      </div>
    ),
  },
  {
    title: '\u5BA1\u6838\u65F6\u95F4',
    colKey: 'propsAndContent1',
    // \u652F\u6301\u540C\u65F6\u8BBE\u7F6E tooltipProps \u548C \u6D6E\u5C42\u5185\u5BB9,
    width: 100,
    ellipsis: {
      props: {
        theme: 'light',
        placement: 'bottom-right',
      },
      content: (h, { row }) => (
        <div>
          <p>
            <b>\u521B\u5EFA\u65E5\u671F:</b> {row.propsAndContent1}
          </p>
          <p>
            <b>\u5BA1\u6838\u65F6\u957F(\u5929):</b> {row.propsAndContent2}
          </p>
        </div>
      ),
    },
  },
  {
    title: '\u64CD\u4F5C',
    colKey: 'link',
    // \u8D85\u51FA\u7701\u7565\u7684\u5185\u5BB9\u663E\u793A\u7EAF\u6587\u672C\uFF0C\u4E0D\u5E26\u4EFB\u4F55\u6837\u5F0F\u548C\u5143\u7D20
    ellipsis: (h, { row }) => row.link,
    // \u6CE8\u610F\u8FD9\u79CD JSX \u5199\u6CD5\u9700\u8BBE\u7F6E <script lang="jsx" setup>
    cell: (h, { row }) => (
      <a href="/vue-next/components/table" target="_blank">
        {row.link}
      </a>
    ),
  },
]);
<\/script>
`,z=`<template>
  <div>
    <div>
      <t-radio-group v-model="tableLayout" variant="default-filled">
        <t-radio-button value="fixed">table-layout: fixed</t-radio-button>
        <t-radio-button value="auto">table-layout: auto</t-radio-button>
      </t-radio-group>
    </div>
    <br /><br />
    <div><t-checkbox v-model="fixedTopAndBottomRows">\u662F\u5426\u51BB\u7ED3\u9996\u5C3E\u4E24\u884C</t-checkbox></div>
    <br /><br />
    <!-- \u5982\u679C\u5E0C\u671B\u8868\u683C\u5217\u5BBD\u81EA\u9002\u5E94\uFF0C\u8BBE\u7F6E \`table-layout: auto\` \u5373\u53EF\u3002\u5982\u679C\u5217\u5B57\u6BB5\u8FC7\u591A\u8D85\u51FA\u8868\u683C\u5BBD\u5EA6\uFF0C\u8FD8\u9700\u540C\u65F6\u8BBE\u7F6E table-content-width -->
    <!-- fixedRows: [2, 2] \u8868\u793A\u51BB\u7ED3\u8868\u683C\u7684\u5934\u4E24\u884C\u548C\u5C3E\u4E24\u884C -->
    <!-- footData \u53EF\u4EE5\u662F\u591A\u884C\uFF0C\u5747\u652F\u6301\u56FA\u5B9A\u5728\u5E95\u90E8 -->
    <t-table
      rowKey="index"
      :data="data"
      :footData="[{}]"
      :columns="columns"
      :table-layout="tableLayout"
      :max-height="fixedTopAndBottomRows ? 500 : 300"
      :fixedRows="fixedTopAndBottomRows ? [2, 2] : undefined"
      bordered
      lazyLoad
    >
      <template #operation="{ row }">
        <t-link theme="primary" hover="color" @click="rehandleClickOp(row)">
          {{ row.status === 0 ? '\u67E5\u770B\u8BE6\u60C5' : '\u518D\u6B21\u7533\u8BF7' }}
        </t-link>
      </template>
    </t-table>
  </div>
</template>
<script lang="jsx">
import { ErrorCircleFilledIcon, CheckCircleFilledIcon, CloseCircleFilledIcon } from 'tdesign-icons-vue';

const initialData = [];

for (let i = 0; i < 20; i++) {
  initialData.push({
    index: i + 1,
    applicant: ['\u8D3E\u660E', '\u5F20\u4E09', '\u738B\u82B3'][i % 3],
    status: i % 3,
    channel: ['\u7535\u5B50\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72'][i % 3],
    detail: {
      email: ['w.cezkdudy@lhll.au', 'r.nmgw@peurezgn.sl', 'p.cumx@rampblpa.ru'][i % 3],
    },
    matters: ['\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528', 'algolia \u670D\u52A1\u62A5\u9500', '\u76F8\u5173\u5468\u8FB9\u5236\u4F5C\u8D39', '\u6FC0\u52B1\u5956\u54C1\u5FEB\u9012\u8D39'][i % 4],
    time: [2, 3, 1, 4][i % 4],
    createTime: ['2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01'][i % 4],
  });
}

export default {
  data() {
    return {
      tableLayout: 'fixed',
      // \u662F\u5426\u51BB\u7ED3\u9996\u5C3E\u4E24\u884C
      fixedTopAndBottomRows: false,
      data: initialData,
      columns: [
        {
          colKey: 'applicant',
          title: '\u7533\u8BF7\u4EBA',
          width: 100,
          foot: '-',
        },
        {
          colKey: 'status',
          title: '\u5BA1\u6279\u72B6\u6001',
          width: 120,
          cell: (h, { row }) => {
            const statusNameListMap = {
              0: { label: '\u5BA1\u6279\u901A\u8FC7', theme: 'success', icon: <CheckCircleFilledIcon /> },
              1: { label: '\u5BA1\u6279\u5931\u8D25', theme: 'danger', icon: <CloseCircleFilledIcon /> },
              2: { label: '\u5BA1\u6279\u8FC7\u671F', theme: 'warning', icon: <ErrorCircleFilledIcon /> },
            };
            return (
              <t-tag shape="round" theme={statusNameListMap[row.status].theme} variant="light-outline">
                {statusNameListMap[row.status].icon}
                {statusNameListMap[row.status].label}
              </t-tag>
            );
          },
        },
        {
          colKey: 'matters',
          title: '\u7533\u8BF7\u4E8B\u9879',
          width: 150,
          foot: '-',
        },
        {
          colKey: 'detail.email',
          title: '\u90AE\u7BB1\u5730\u5740',
          width: 160,
          foot: '-',
          ellipsis: true,
        },
        {
          colKey: 'createTime',
          title: '\u7533\u8BF7\u65E5\u671F',
          width: 120,
          foot: '-',
        },
        {
          colKey: 'operation',
          title: '\u64CD\u4F5C',
          width: 120,
          foot: '-',
        },
      ],
    };
  },
  methods: {
    rehandleClickOp(data) {
      console.log(data);
    },
  },
};
<\/script>
`,M=`<template>
  <div>
    <div>
      <t-radio-group v-model="tableLayout" variant="default-filled">
        <t-radio-button value="fixed">table-layout: fixed</t-radio-button>
        <t-radio-button value="auto">table-layout: auto</t-radio-button>
      </t-radio-group>
    </div>
    <br /><br />
    <div><t-checkbox v-model="fixedTopAndBottomRows">\u662F\u5426\u51BB\u7ED3\u9996\u5C3E\u4E24\u884C</t-checkbox></div>
    <br /><br />
    <!-- \u5982\u679C\u5E0C\u671B\u8868\u683C\u5217\u5BBD\u81EA\u9002\u5E94\uFF0C\u8BBE\u7F6E \`table-layout: auto\` \u5373\u53EF\u3002\u5982\u679C\u5217\u5B57\u6BB5\u8FC7\u591A\u8D85\u51FA\u8868\u683C\u5BBD\u5EA6\uFF0C\u8FD8\u9700\u540C\u65F6\u8BBE\u7F6E table-content-width -->
    <!-- fixedRows: [2, 2] \u8868\u793A\u51BB\u7ED3\u8868\u683C\u7684\u5934\u4E24\u884C\u548C\u5C3E\u4E24\u884C -->
    <!-- footData \u53EF\u4EE5\u662F\u591A\u884C\uFF0C\u5747\u652F\u6301\u56FA\u5B9A\u5728\u5E95\u90E8 -->
    <t-table
      rowKey="index"
      :data="data"
      :footData="[{}]"
      :columns="columns"
      :table-layout="tableLayout"
      :max-height="fixedTopAndBottomRows ? 500 : 300"
      :fixedRows="fixedTopAndBottomRows ? [2, 2] : undefined"
      bordered
      lazyLoad
    >
      <template #operation="{ row }">
        <t-link theme="primary" hover="color" @click="rehandleClickOp(row)">
          {{ row.status === 0 ? '\u67E5\u770B\u8BE6\u60C5' : '\u518D\u6B21\u7533\u8BF7' }}
        </t-link>
      </template>
    </t-table>
  </div>
</template>
<script setup lang="jsx">
import { ref } from 'vue';
import { ErrorCircleFilledIcon, CheckCircleFilledIcon, CloseCircleFilledIcon } from 'tdesign-icons-vue';

const initialData = [];
for (let i = 0; i < 20; i++) {
  initialData.push({
    index: i + 1,
    applicant: ['\u8D3E\u660E', '\u5F20\u4E09', '\u738B\u82B3'][i % 3],
    status: i % 3,
    channel: ['\u7535\u5B50\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72'][i % 3],
    detail: {
      email: ['w.cezkdudy@lhll.au', 'r.nmgw@peurezgn.sl', 'p.cumx@rampblpa.ru'][i % 3],
    },
    matters: ['\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528', 'algolia \u670D\u52A1\u62A5\u9500', '\u76F8\u5173\u5468\u8FB9\u5236\u4F5C\u8D39', '\u6FC0\u52B1\u5956\u54C1\u5FEB\u9012\u8D39'][i % 4],
    time: [2, 3, 1, 4][i % 4],
    createTime: ['2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01'][i % 4],
  });
}
const tableLayout = ref('fixed');
// \u662F\u5426\u51BB\u7ED3\u9996\u5C3E\u4E24\u884C
const fixedTopAndBottomRows = ref(false);
const data = ref(initialData);
const columns = ref([
  {
    colKey: 'applicant',
    title: '\u7533\u8BF7\u4EBA',
    width: 100,
    foot: '-',
  },
  {
    colKey: 'status',
    title: '\u5BA1\u6279\u72B6\u6001',
    width: 120,
    cell: (h, { row }) => {
      const statusNameListMap = {
        0: {
          label: '\u5BA1\u6279\u901A\u8FC7',
          theme: 'success',
          icon: <CheckCircleFilledIcon />,
        },
        1: {
          label: '\u5BA1\u6279\u5931\u8D25',
          theme: 'danger',
          icon: <CloseCircleFilledIcon />,
        },
        2: {
          label: '\u5BA1\u6279\u8FC7\u671F',
          theme: 'warning',
          icon: <ErrorCircleFilledIcon />,
        },
      };
      return (
        <t-tag shape="round" theme={statusNameListMap[row.status].theme} variant="light-outline">
          {statusNameListMap[row.status].icon}
          {statusNameListMap[row.status].label}
        </t-tag>
      );
    },
  },
  {
    colKey: 'matters',
    title: '\u7533\u8BF7\u4E8B\u9879',
    width: 150,
    foot: '-',
  },
  {
    colKey: 'detail.email',
    title: '\u90AE\u7BB1\u5730\u5740',
    width: 160,
    foot: '-',
    ellipsis: true,
  },
  {
    colKey: 'createTime',
    title: '\u7533\u8BF7\u65E5\u671F',
    width: 120,
    foot: '-',
  },
  {
    colKey: 'operation',
    title: '\u64CD\u4F5C',
    width: 120,
    foot: '-',
  },
]);
const rehandleClickOp = (data) => {
  console.log(data);
};
<\/script>
`,E=`<template>
  <div class="tdesign-demo-block-column tdesign-demo__table" style="max-width: 1200px">
    <div>
      <t-radio-group v-model="leftFixedColumn" variant="default-filled">
        <t-radio-button :value="1">\u5DE6\u4FA7\u56FA\u5B9A\u4E00\u5217</t-radio-button>
        <t-radio-button :value="2">\u5DE6\u4FA7\u56FA\u5B9A\u4E24\u5217</t-radio-button>
      </t-radio-group>
    </div>

    <div>
      <t-radio-group v-model="rightFixedColumn" variant="default-filled">
        <t-radio-button :value="1">\u53F3\u4FA7\u56FA\u5B9A\u4E00\u5217</t-radio-button>
        <t-radio-button :value="2">\u53F3\u4FA7\u56FA\u5B9A\u4E24\u5217</t-radio-button>
      </t-radio-group>
    </div>

    <div>
      <t-radio-group v-model="tableLayout" variant="default-filled">
        <t-radio-button value="fixed">table-layout: fixed</t-radio-button>
        <t-radio-button value="auto">table-layout: auto</t-radio-button>
      </t-radio-group>
      <t-checkbox v-model="emptyData" style="margin-left: 16px; vertical-align: middle">\u7A7A\u6570\u636E</t-checkbox>
    </div>

    <!--
      \u5982\u679C\u5E0C\u671B\u8868\u683C\u5217\u5BBD\u81EA\u9002\u5E94\uFF0C\u8BBE\u7F6E \`table-layout: auto\`\u3002
      \`table-layout: auto\` \u6A21\u5F0F\u4E0B\u7684\u56FA\u5B9A\u5217\uFF0C\u5FC5\u987B\u6307\u5B9A tableContentWidth\uFF0C\u8868\u793A\uFF1A\u8868\u683C\u603B\u5BBD\u5EA6\u56FA\u5B9A\uFF0C\u5217\u5BBD\u968F\u5185\u5BB9\u81EA\u9002\u5E94\u3002
      \u6CE8\u610F\uFF1A\`table-layout: auto\` \u6A21\u5F0F\u4E0B\uFF0C\u4E0D\u5141\u8BB8\u4F7F\u7528 resizable
    -->
    <t-table
      ref="tableRef"
      rowKey="index"
      :data="emptyData ? [] : data"
      :columns="columns"
      :table-layout="tableLayout"
      :table-content-width="tableLayout === 'fixed' ? undefined : '1000px'"
      bordered
      resizable
    >
      <template #operation="{ row }">
        <t-link theme="primary" hover="color" @click="rehandleClickOp(row)">
          {{ row.status === 0 ? '\u67E5\u770B\u8BE6\u60C5' : '\u518D\u6B21\u7533\u8BF7' }}
        </t-link>
      </template>
    </t-table>
  </div>
</template>
<script lang="jsx">
import { ErrorCircleFilledIcon, CheckCircleFilledIcon, CloseCircleFilledIcon } from 'tdesign-icons-vue';

const initialData = [];
for (let i = 0; i < 5; i++) {
  initialData.push({
    index: i + 1,
    applicant: ['\u8D3E\u660E', '\u5F20\u4E09', '\u738B\u82B3'][i % 3],
    status: i % 3,
    channel: ['\u7535\u5B50\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72'][i % 3],
    detail: {
      email: ['w.cezkdudy@lhll.au', 'r.nmgw@peurezgn.sl', 'p.cumx@rampblpa.ru'][i % 3],
    },
    matters: ['\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528', 'algolia \u670D\u52A1\u62A5\u9500', '\u76F8\u5173\u5468\u8FB9\u5236\u4F5C\u8D39', '\u6FC0\u52B1\u5956\u54C1\u5FEB\u9012\u8D39'][i % 4],
    time: [2, 3, 1, 4][i % 4],
    createTime: ['2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01'][i % 4],
  });
}
export default {
  data() {
    return {
      data: initialData,
      tableLayout: 'fixed',
      leftFixedColumn: 2,
      rightFixedColumn: 1,
      emptyData: false,
    };
  },
  computed: {
    columns() {
      return [
        {
          colKey: 'applicant',
          title: '\u7533\u8BF7\u4EBA',
          width: 100,
          fixed: 'left',
        },
        {
          colKey: 'status',
          title: '\u5BA1\u6279\u72B6\u6001',
          width: 120,
          fixed: this.leftFixedColumn >= 2 ? 'left' : undefined,
          cell: (h, { row }) => {
            const statusNameListMap = {
              0: { label: '\u5BA1\u6279\u901A\u8FC7', theme: 'success', icon: <CheckCircleFilledIcon /> },
              1: { label: '\u5BA1\u6279\u5931\u8D25', theme: 'danger', icon: <CloseCircleFilledIcon /> },
              2: { label: '\u5BA1\u6279\u8FC7\u671F', theme: 'warning', icon: <ErrorCircleFilledIcon /> },
            };
            return (
              <t-tag shape="round" theme={statusNameListMap[row.status].theme} variant="light-outline">
                {statusNameListMap[row.status].icon}
                {statusNameListMap[row.status].label}
              </t-tag>
            );
          },
        },
        { colKey: 'detail.email', title: '\u90AE\u7BB1\u5730\u5740', width: 180 },
        { colKey: 'matters', title: '\u7533\u8BF7\u4E8B\u9879', width: 200 },
        {
          colKey: 'createTime',
          title: '\u7533\u8BF7\u65E5\u671F',
          width: 180,
          fixed: this.rightFixedColumn >= 2 ? 'right' : undefined,
        },
        {
          colKey: 'operation',
          title: '\u64CD\u4F5C',
          width: 120,
          fixed: 'right',
        },
      ];
    },
  },
  methods: {
    rehandleClickOp(data) {
      console.log(data);
    },
    // eslint-disable-next-line
    scrollToCreateTime() {
      // \u6A2A\u5411\u6EDA\u52A8\u5230\u6307\u5B9A\u5217
      this.$refs.tableRef.scrollColumnIntoView('matters');
    },
  },
};
<\/script>

<style lang="less" scoped>
.tdesign-demo-block-column {
  width: 100%;
}
</style>
`,_=`<template>
  <div class="tdesign-demo-block-column tdesign-demo__table" style="max-width: 1200px">
    <div>
      <t-radio-group v-model="leftFixedColumn" variant="default-filled">
        <t-radio-button :value="1">\u5DE6\u4FA7\u56FA\u5B9A\u4E00\u5217</t-radio-button>
        <t-radio-button :value="2">\u5DE6\u4FA7\u56FA\u5B9A\u4E24\u5217</t-radio-button>
      </t-radio-group>
    </div>

    <div>
      <t-radio-group v-model="rightFixedColumn" variant="default-filled">
        <t-radio-button :value="1">\u53F3\u4FA7\u56FA\u5B9A\u4E00\u5217</t-radio-button>
        <t-radio-button :value="2">\u53F3\u4FA7\u56FA\u5B9A\u4E24\u5217</t-radio-button>
      </t-radio-group>
    </div>

    <div>
      <t-radio-group v-model="tableLayout" variant="default-filled">
        <t-radio-button value="fixed">table-layout: fixed</t-radio-button>
        <t-radio-button value="auto">table-layout: auto</t-radio-button>
      </t-radio-group>
      <t-checkbox v-model="emptyData" style="margin-left: 16px; vertical-align: middle">\u7A7A\u6570\u636E</t-checkbox>
    </div>

    <!--
      \u5982\u679C\u5E0C\u671B\u8868\u683C\u5217\u5BBD\u81EA\u9002\u5E94\uFF0C\u8BBE\u7F6E \`table-layout: auto\`\u3002
      \`table-layout: auto\` \u6A21\u5F0F\u4E0B\u7684\u56FA\u5B9A\u5217\uFF0C\u5FC5\u987B\u6307\u5B9A tableContentWidth\uFF0C\u8868\u793A\uFF1A\u8868\u683C\u603B\u5BBD\u5EA6\u56FA\u5B9A\uFF0C\u5217\u5BBD\u968F\u5185\u5BB9\u81EA\u9002\u5E94\u3002
      \u6CE8\u610F\uFF1A\`table-layout: auto\` \u6A21\u5F0F\u4E0B\uFF0C\u4E0D\u5141\u8BB8\u4F7F\u7528 resizable
    -->
    <t-table
      ref="tableRef"
      rowKey="index"
      :data="emptyData ? [] : data"
      :columns="columns"
      :table-layout="tableLayout"
      :table-content-width="tableLayout === 'fixed' ? undefined : '1000px'"
      bordered
      resizable
    >
      <template #operation="{ row }">
        <t-link theme="primary" hover="color" @click="rehandleClickOp(row)">
          {{ row.status === 0 ? '\u67E5\u770B\u8BE6\u60C5' : '\u518D\u6B21\u7533\u8BF7' }}
        </t-link>
      </template>
    </t-table>
  </div>
</template>
<script setup lang="jsx">
import { ref, computed } from 'vue';
import { ErrorCircleFilledIcon, CheckCircleFilledIcon, CloseCircleFilledIcon } from 'tdesign-icons-vue';

const initialData = [];
for (let i = 0; i < 5; i++) {
  initialData.push({
    index: i + 1,
    applicant: ['\u8D3E\u660E', '\u5F20\u4E09', '\u738B\u82B3'][i % 3],
    status: i % 3,
    channel: ['\u7535\u5B50\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72'][i % 3],
    detail: {
      email: ['w.cezkdudy@lhll.au', 'r.nmgw@peurezgn.sl', 'p.cumx@rampblpa.ru'][i % 3],
    },
    matters: ['\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528', 'algolia \u670D\u52A1\u62A5\u9500', '\u76F8\u5173\u5468\u8FB9\u5236\u4F5C\u8D39', '\u6FC0\u52B1\u5956\u54C1\u5FEB\u9012\u8D39'][i % 4],
    time: [2, 3, 1, 4][i % 4],
    createTime: ['2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01'][i % 4],
  });
}
const tableRef = ref();
const data = ref(initialData);
const tableLayout = ref('fixed');
const leftFixedColumn = ref(2);
const rightFixedColumn = ref(1);
const emptyData = ref(false);
const columns = computed(() => [
  {
    colKey: 'applicant',
    title: '\u7533\u8BF7\u4EBA',
    width: 100,
    fixed: 'left',
  },
  {
    colKey: 'status',
    title: '\u5BA1\u6279\u72B6\u6001',
    width: 120,
    fixed: leftFixedColumn.value >= 2 ? 'left' : undefined,
    cell: (h, { row }) => {
      const statusNameListMap = {
        0: {
          label: '\u5BA1\u6279\u901A\u8FC7',
          theme: 'success',
          icon: <CheckCircleFilledIcon />,
        },
        1: {
          label: '\u5BA1\u6279\u5931\u8D25',
          theme: 'danger',
          icon: <CloseCircleFilledIcon />,
        },
        2: {
          label: '\u5BA1\u6279\u8FC7\u671F',
          theme: 'warning',
          icon: <ErrorCircleFilledIcon />,
        },
      };
      return (
        <t-tag shape="round" theme={statusNameListMap[row.status].theme} variant="light-outline">
          {statusNameListMap[row.status].icon}
          {statusNameListMap[row.status].label}
        </t-tag>
      );
    },
  },
  {
    colKey: 'detail.email',
    title: '\u90AE\u7BB1\u5730\u5740',
    width: 180,
  },
  {
    colKey: 'matters',
    title: '\u7533\u8BF7\u4E8B\u9879',
    width: 200,
  },
  {
    colKey: 'createTime',
    title: '\u7533\u8BF7\u65E5\u671F',
    width: 180,
    fixed: rightFixedColumn.value >= 2 ? 'right' : undefined,
  },
  {
    colKey: 'operation',
    title: '\u64CD\u4F5C',
    width: 120,
    fixed: 'right',
  },
]);
const rehandleClickOp = (data) => {
  console.log(data);
};
// eslint-disable-next-line
const scrollToCreateTime = () => {
  // \u6A2A\u5411\u6EDA\u52A8\u5230\u6307\u5B9A\u5217
  tableRef.value.scrollColumnIntoView('matters');
};
<\/script>

<style lang="less" scoped>
.tdesign-demo-block-column {
  width: 100%;
}
</style>
`,A=`<template>
  <!-- \u7236\u5143\u7D20\u5BBD\u5EA6\u4E0D\u80FD\u8D85\u8FC7 100% -->
  <div class="tdesign-demo-block-column tdesign-demo__table" style="width: 100%">
    <div>
      <t-radio-group v-model="tableLayout" variant="default-filled">
        <t-radio-button value="fixed">table-layout: fixed</t-radio-button>
        <t-radio-button value="auto">table-layout: auto</t-radio-button>
      </t-radio-group>
    </div>

    <div>
      <t-space>
        <t-checkbox v-model="fixedTopAndBottomRows">\u662F\u5426\u51BB\u7ED3\u9996\u5C3E\u4E24\u884C</t-checkbox>
        <t-checkbox v-model="stripe">\u662F\u5426\u663E\u793A\u6591\u9A6C\u7EB9</t-checkbox>
      </t-space>
      <!-- TODO\uFF1A\u865A\u62DF\u6EDA\u52A8\u5F00\u542F\u4E0E\u5173\u95ED\u652F\u6301\u52A8\u6001\u54CD\u5E94 -->
      <!-- <t-checkbox v-model="virtualScroll">\u5F00\u542F\u865A\u62DF\u6EDA\u52A8</t-checkbox> -->
    </div>

    <!-- \u5982\u679C\u5E0C\u671B\u8868\u683C\u5217\u5BBD\u81EA\u9002\u5E94\uFF0C\u8BBE\u7F6E \`table-layout: auto\` \u5373\u53EF\u3002\u9700\u540C\u65F6\u8BBE\u7F6E table-content-width -->
    <!-- fixedRows: [2, 2] \u8868\u793A\u51BB\u7ED3\u8868\u683C\u7684\u5934\u4E24\u884C\u548C\u5C3E\u4E24\u884C -->
    <!-- footData \u53EF\u4EE5\u662F\u591A\u884C\uFF0C\u5747\u652F\u6301\u56FA\u5B9A\u5728\u5E95\u90E8 -->
    <t-table
      rowKey="index"
      :data="data"
      :footData="[{}]"
      :columns="columns"
      :table-layout="tableLayout"
      :table-content-width="tableLayout === 'fixed' ? undefined : '1600px'"
      :max-height="fixedTopAndBottomRows ? 500 : 300"
      :fixedRows="fixedTopAndBottomRows ? [2, 2] : undefined"
      :scroll="virtualScroll ? { type: 'virtual' } : undefined"
      :stripe="stripe"
      bordered
      lazyLoad
    >
      <template #operation="{ row }">
        <t-link theme="primary" hover="color" @click="rehandleClickOp(row)">
          {{ row.status === 0 ? '\u67E5\u770B\u8BE6\u60C5' : '\u518D\u6B21\u7533\u8BF7' }}
        </t-link>
      </template>
    </t-table>
  </div>
</template>
<script lang="jsx">
import { ErrorCircleFilledIcon, CheckCircleFilledIcon, CloseCircleFilledIcon } from 'tdesign-icons-vue';

function getData(count) {
  const initialData = [];
  for (let i = 0; i < count; i++) {
    initialData.push({
      index: i + 1,
      applicant: ['\u8D3E\u660E', '\u5F20\u4E09', '\u738B\u82B3'][i % 3],
      status: i % 3,
      channel: ['\u7535\u5B50\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72'][i % 3],
      detail: {
        email: ['w.cezkdudy@lhll.au', 'r.nmgw@peurezgn.sl', 'p.cumx@rampblpa.ru'][i % 3],
      },
      matters: ['\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528', 'algolia \u670D\u52A1\u62A5\u9500', '\u76F8\u5173\u5468\u8FB9\u5236\u4F5C\u8D39', '\u6FC0\u52B1\u5956\u54C1\u5FEB\u9012\u8D39'][i % 4],
      time: [2, 3, 1, 4][i % 4],
      createTime: ['2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01'][i % 4],
    });
  }
  return initialData;
}

export default {
  data() {
    return {
      virtualScroll: false,
      fixedTopAndBottomRows: false,
      stripe: false,
      tableLayout: 'fixed',
      data: getData(14),
      columns: [
        {
          colKey: 'applicant',
          title: '\u7533\u8BF7\u4EBA',
          width: '100',
          foot: '\u517120\u6761',
          fixed: 'left',
        },
        {
          colKey: 'status',
          title: '\u5BA1\u6279\u72B6\u6001',
          width: 120,
          cell: (h, { row }) => {
            const statusNameListMap = {
              0: { label: '\u5BA1\u6279\u901A\u8FC7', theme: 'success', icon: <CheckCircleFilledIcon /> },
              1: { label: '\u5BA1\u6279\u5931\u8D25', theme: 'danger', icon: <CloseCircleFilledIcon /> },
              2: { label: '\u5BA1\u6279\u8FC7\u671F', theme: 'warning', icon: <ErrorCircleFilledIcon /> },
            };
            return (
              <t-tag shape="round" theme={statusNameListMap[row.status].theme} variant="light-outline">
                {statusNameListMap[row.status].icon}
                {statusNameListMap[row.status].label}
              </t-tag>
            );
          },
        },
        {
          colKey: 'channel',
          title: '\u7B7E\u7F72\u65B9\u5F0F',
          width: '120',
          foot: '-',
        },
        {
          colKey: 'matters',
          title: '\u7533\u8BF7\u4E8B\u9879',
          width: '150',
          foot: '-',
        },
        {
          colKey: 'detail.email',
          title: '\u90AE\u7BB1\u5730\u5740',
          width: '180',
          foot: '-',
        },
        {
          colKey: 'createTime',
          title: '\u7533\u8BF7\u65E5\u671F',
          width: '120',
          foot: '-',
        },
        {
          colKey: 'operation',
          title: '\u64CD\u4F5C',
          width: '150',
          foot: '-',
          fixed: 'right',
        },
      ],
    };
  },
  watch: {
    virtualScroll(val) {
      this.data = val ? getData(2000) : getData(15);
    },
  },
  methods: {
    rehandleClickOp(context) {
      console.log(context);
    },
  },
};
<\/script>

<style lang="less" scoped>
.link {
  cursor: pointer;
}
</style>
`,P=`<template>
  <!-- \u7236\u5143\u7D20\u5BBD\u5EA6\u4E0D\u80FD\u8D85\u8FC7 100% -->
  <div class="tdesign-demo-block-column tdesign-demo__table" style="width: 100%">
    <div>
      <t-radio-group v-model="tableLayout" variant="default-filled">
        <t-radio-button value="fixed">table-layout: fixed</t-radio-button>
        <t-radio-button value="auto">table-layout: auto</t-radio-button>
      </t-radio-group>
    </div>

    <div>
      <t-space>
        <t-checkbox v-model="fixedTopAndBottomRows">\u662F\u5426\u51BB\u7ED3\u9996\u5C3E\u4E24\u884C</t-checkbox>
        <t-checkbox v-model="stripe">\u662F\u5426\u663E\u793A\u6591\u9A6C\u7EB9</t-checkbox>
      </t-space>
      <!-- TODO\uFF1A\u865A\u62DF\u6EDA\u52A8\u5F00\u542F\u4E0E\u5173\u95ED\u652F\u6301\u52A8\u6001\u54CD\u5E94 -->
      <!-- <t-checkbox v-model="virtualScroll">\u5F00\u542F\u865A\u62DF\u6EDA\u52A8</t-checkbox> -->
    </div>

    <!-- \u5982\u679C\u5E0C\u671B\u8868\u683C\u5217\u5BBD\u81EA\u9002\u5E94\uFF0C\u8BBE\u7F6E \`table-layout: auto\` \u5373\u53EF\u3002\u9700\u540C\u65F6\u8BBE\u7F6E table-content-width -->
    <!-- fixedRows: [2, 2] \u8868\u793A\u51BB\u7ED3\u8868\u683C\u7684\u5934\u4E24\u884C\u548C\u5C3E\u4E24\u884C -->
    <!-- footData \u53EF\u4EE5\u662F\u591A\u884C\uFF0C\u5747\u652F\u6301\u56FA\u5B9A\u5728\u5E95\u90E8 -->
    <t-table
      rowKey="index"
      :data="data"
      :footData="[{}]"
      :columns="columns"
      :table-layout="tableLayout"
      :table-content-width="tableLayout === 'fixed' ? undefined : '1600px'"
      :max-height="fixedTopAndBottomRows ? 500 : 300"
      :fixedRows="fixedTopAndBottomRows ? [2, 2] : undefined"
      :scroll="virtualScroll ? { type: 'virtual' } : undefined"
      :stripe="stripe"
      bordered
      lazyLoad
    >
      <template #operation="{ row }">
        <t-link theme="primary" hover="color" @click="rehandleClickOp(row)">
          {{ row.status === 0 ? '\u67E5\u770B\u8BE6\u60C5' : '\u518D\u6B21\u7533\u8BF7' }}
        </t-link>
      </template>
    </t-table>
  </div>
</template>
<script setup lang="jsx">
import { ref, watch } from 'vue';
import { ErrorCircleFilledIcon, CheckCircleFilledIcon, CloseCircleFilledIcon } from 'tdesign-icons-vue';

function getData(count) {
  const initialData = [];
  for (let i = 0; i < count; i++) {
    initialData.push({
      index: i + 1,
      applicant: ['\u8D3E\u660E', '\u5F20\u4E09', '\u738B\u82B3'][i % 3],
      status: i % 3,
      channel: ['\u7535\u5B50\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72'][i % 3],
      detail: {
        email: ['w.cezkdudy@lhll.au', 'r.nmgw@peurezgn.sl', 'p.cumx@rampblpa.ru'][i % 3],
      },
      matters: ['\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528', 'algolia \u670D\u52A1\u62A5\u9500', '\u76F8\u5173\u5468\u8FB9\u5236\u4F5C\u8D39', '\u6FC0\u52B1\u5956\u54C1\u5FEB\u9012\u8D39'][i % 4],
      time: [2, 3, 1, 4][i % 4],
      createTime: ['2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01'][i % 4],
    });
  }
  return initialData;
}
const virtualScroll = ref(false);
const fixedTopAndBottomRows = ref(false);
const stripe = ref(false);
const tableLayout = ref('fixed');
const data = ref(getData(14));
const columns = ref([
  {
    colKey: 'applicant',
    title: '\u7533\u8BF7\u4EBA',
    width: '100',
    foot: '\u517120\u6761',
    fixed: 'left',
  },
  {
    colKey: 'status',
    title: '\u5BA1\u6279\u72B6\u6001',
    width: 120,
    cell: (h, { row }) => {
      const statusNameListMap = {
        0: {
          label: '\u5BA1\u6279\u901A\u8FC7',
          theme: 'success',
          icon: <CheckCircleFilledIcon />,
        },
        1: {
          label: '\u5BA1\u6279\u5931\u8D25',
          theme: 'danger',
          icon: <CloseCircleFilledIcon />,
        },
        2: {
          label: '\u5BA1\u6279\u8FC7\u671F',
          theme: 'warning',
          icon: <ErrorCircleFilledIcon />,
        },
      };
      return (
        <t-tag shape="round" theme={statusNameListMap[row.status].theme} variant="light-outline">
          {statusNameListMap[row.status].icon}
          {statusNameListMap[row.status].label}
        </t-tag>
      );
    },
  },
  {
    colKey: 'channel',
    title: '\u7B7E\u7F72\u65B9\u5F0F',
    width: '120',
    foot: '-',
  },
  {
    colKey: 'matters',
    title: '\u7533\u8BF7\u4E8B\u9879',
    width: '150',
    foot: '-',
  },
  {
    colKey: 'detail.email',
    title: '\u90AE\u7BB1\u5730\u5740',
    width: '180',
    foot: '-',
  },
  {
    colKey: 'createTime',
    title: '\u7533\u8BF7\u65E5\u671F',
    width: '120',
    foot: '-',
  },
  {
    colKey: 'operation',
    title: '\u64CD\u4F5C',
    width: '150',
    foot: '-',
    fixed: 'right',
  },
]);
const rehandleClickOp = (context) => {
  console.log(context);
};
watch(virtualScroll, (val) => {
  data.value = val ? getData(2000) : getData(15);
});
<\/script>

<style lang="less" scoped>
.link {
  cursor: pointer;
}
</style>
`,O=`<template>
  <div class="tdesign-demo__table">
    <t-table :data="data" :columns="columns" rowKey="property" verticalAlign="top" lazyLoad>
      <!-- \u63D2\u69FD\u65B9\u5F0F \u81EA\u5B9A\u4E49\u5355\u5143\u683C\uFF1Acell \u7684\u503C\u4E3A\u63D2\u69FD\u540D\u79F0\uFF0C\u53C2\u6570\u6709\uFF1A{col, colIndex, row, rowIndex}  -->
      <template #type-slot-name="{ col, row }"> {{ row[col.colKey] }} </template>

      <!-- \u63D2\u69FD\u65B9\u5F0F \u81EA\u5B9A\u4E49\u5355\u5143\u683C\uFF0C colKey \u7684\u503C\u9ED8\u8BA4\u4E3A\u63D2\u69FD\u540D\u79F0  -->
      <template #status="{ row }">
        <t-tag shape="round" :theme="statusNameListMap[row.status].theme" variant="light-outline">
          <check-circle-filled-icon v-if="row.status === 0" />
          <close-circle-filled-icon v-else-if="row.status === 1" />
          <error-circle-filled-icon v-else />
          {{ statusNameListMap[row.status].label }}
        </t-tag>
      </template>
    </t-table>
  </div>
</template>
<script lang="jsx">
import { ErrorCircleFilledIcon, CheckCircleFilledIcon, CloseCircleFilledIcon } from 'tdesign-icons-vue';

const initialData = [];

for (let i = 0; i < 5; i++) {
  initialData.push({
    index: i + 1,
    applicant: ['\u8D3E\u660E', '\u5F20\u4E09', '\u738B\u82B3'][i % 3],
    status: i % 3,
    channel: ['\u7535\u5B50\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72'][i % 3],
    email: ['w.cezkdudy@lhll.au', 'r.nmgw@peurezgn.sl', 'p.cumx@rampblpa.ru'][i % 3],
    matters: ['\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528', 'algolia \u670D\u52A1\u62A5\u9500', '\u76F8\u5173\u5468\u8FB9\u5236\u4F5C\u8D39', '\u6FC0\u52B1\u5956\u54C1\u5FEB\u9012\u8D39'][i % 4],
    time: [2, 3, 1, 4][i % 4],
    createTime: ['2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01'][i % 4],
  });
}

export default {
  components: {
    ErrorCircleFilledIcon,
    CheckCircleFilledIcon,
    CloseCircleFilledIcon,
  },
  data() {
    return {
      data: initialData,
      statusNameListMap: {
        0: { label: '\u5BA1\u6279\u901A\u8FC7', theme: 'success', icon: <CheckCircleFilledIcon /> },
        1: { label: '\u5BA1\u6279\u5931\u8D25', theme: 'danger', icon: <CloseCircleFilledIcon /> },
        2: { label: '\u5BA1\u6279\u8FC7\u671F', theme: 'warning', icon: <ErrorCircleFilledIcon /> },
      },
      columns: [
        {
          colKey: 'applicant',
          title: '\u7533\u8BF7\u4EBA',
          // type-slot-name \u4F1A\u88AB\u7528\u4E8E\u81EA\u5B9A\u4E49\u5355\u5143\u683C\u7684\u63D2\u69FD\u540D\u79F0
          cell: 'type-slot-name',
          width: 120,
        },
        {
          title: '\u5BA1\u6279\u72B6\u6001',
          // \u6CA1\u6709 cell \u7684\u60C5\u51B5\u4E0B\uFF0C platform \u4F1A\u88AB\u7528\u4F5C\u81EA\u5B9A\u4E49\u5355\u5143\u683C\u7684\u63D2\u69FD\u540D\u79F0
          colKey: 'status',
          width: 120,
        },
        {
          colKey: 'matters',
          title: '\u7533\u8BF7\u4E8B\u9879',
          // \u4F7F\u7528 cell \u65B9\u6CD5\u81EA\u5B9A\u4E49\u5355\u5143\u683C\uFF1A
          cell: (h, { col, row }) => <div>{row[col.colKey]}</div>,
        },
        {
          title: '\u90AE\u7BB1\u5730\u5740',
          colKey: 'email',
          // render \u5373\u53EF\u6E32\u67D3\u8868\u5934\uFF0C\u4E5F\u53EF\u4EE5\u6E32\u67D3\u5355\u5143\u683C\u3002\u4F46 cell \u53EA\u80FD\u6E32\u67D3\u5355\u5143\u683C\uFF0Ctitle \u53EA\u80FD\u6E32\u67D3\u8868\u5934
          render(h, context) {
            const { type, row, col } = context;
            if (type === 'title') return '\u90AE\u7BB1\u5730\u5740';
            return <div>{row[col.colKey]}</div>;
          },
        },
        { colKey: 'createTime', title: '\u7533\u8BF7\u65F6\u95F4' },
      ],
    };
  },
};
<\/script>

<style scoped>
.link {
  color: #0052d9;
  text-decoration: none;
}
</style>
`,j=`<template>
  <div class="tdesign-demo__table">
    <t-table :data="data" :columns="columns" rowKey="property" verticalAlign="top" lazyLoad>
      <!-- \u63D2\u69FD\u65B9\u5F0F \u81EA\u5B9A\u4E49\u5355\u5143\u683C\uFF1Acell \u7684\u503C\u4E3A\u63D2\u69FD\u540D\u79F0\uFF0C\u53C2\u6570\u6709\uFF1A{col, colIndex, row, rowIndex}  -->
      <template #type-slot-name="{ col, row }"> {{ row[col.colKey] }} </template>

      <!-- \u63D2\u69FD\u65B9\u5F0F \u81EA\u5B9A\u4E49\u5355\u5143\u683C\uFF0C colKey \u7684\u503C\u9ED8\u8BA4\u4E3A\u63D2\u69FD\u540D\u79F0  -->
      <template #status="{ row }">
        <t-tag shape="round" :theme="statusNameListMap[row.status].theme" variant="light-outline">
          <check-circle-filled-icon v-if="row.status === 0" />
          <close-circle-filled-icon v-else-if="row.status === 1" />
          <error-circle-filled-icon v-else />
          {{ statusNameListMap[row.status].label }}
        </t-tag>
      </template>
    </t-table>
  </div>
</template>
<script setup lang="jsx">
import { ref, reactive } from 'vue';
import { ErrorCircleFilledIcon, CheckCircleFilledIcon, CloseCircleFilledIcon } from 'tdesign-icons-vue';

const initialData = [];
for (let i = 0; i < 5; i++) {
  initialData.push({
    index: i + 1,
    applicant: ['\u8D3E\u660E', '\u5F20\u4E09', '\u738B\u82B3'][i % 3],
    status: i % 3,
    channel: ['\u7535\u5B50\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72'][i % 3],
    email: ['w.cezkdudy@lhll.au', 'r.nmgw@peurezgn.sl', 'p.cumx@rampblpa.ru'][i % 3],
    matters: ['\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528', 'algolia \u670D\u52A1\u62A5\u9500', '\u76F8\u5173\u5468\u8FB9\u5236\u4F5C\u8D39', '\u6FC0\u52B1\u5956\u54C1\u5FEB\u9012\u8D39'][i % 4],
    time: [2, 3, 1, 4][i % 4],
    createTime: ['2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01'][i % 4],
  });
}
const data = ref(initialData);
const statusNameListMap = reactive({
  0: {
    label: '\u5BA1\u6279\u901A\u8FC7',
    theme: 'success',
    icon: <CheckCircleFilledIcon />,
  },
  1: {
    label: '\u5BA1\u6279\u5931\u8D25',
    theme: 'danger',
    icon: <CloseCircleFilledIcon />,
  },
  2: {
    label: '\u5BA1\u6279\u8FC7\u671F',
    theme: 'warning',
    icon: <ErrorCircleFilledIcon />,
  },
});
const columns = ref([
  {
    colKey: 'applicant',
    title: '\u7533\u8BF7\u4EBA',
    // type-slot-name \u4F1A\u88AB\u7528\u4E8E\u81EA\u5B9A\u4E49\u5355\u5143\u683C\u7684\u63D2\u69FD\u540D\u79F0
    cell: 'type-slot-name',
    width: 120,
  },
  {
    title: '\u5BA1\u6279\u72B6\u6001',
    // \u6CA1\u6709 cell \u7684\u60C5\u51B5\u4E0B\uFF0C platform \u4F1A\u88AB\u7528\u4F5C\u81EA\u5B9A\u4E49\u5355\u5143\u683C\u7684\u63D2\u69FD\u540D\u79F0
    colKey: 'status',
    width: 120,
  },
  {
    colKey: 'matters',
    title: '\u7533\u8BF7\u4E8B\u9879',
    // \u4F7F\u7528 cell \u65B9\u6CD5\u81EA\u5B9A\u4E49\u5355\u5143\u683C\uFF1A
    cell: (h, { col, row }) => <div>{row[col.colKey]}</div>,
  },
  {
    title: '\u90AE\u7BB1\u5730\u5740',
    colKey: 'email',
    // render \u5373\u53EF\u6E32\u67D3\u8868\u5934\uFF0C\u4E5F\u53EF\u4EE5\u6E32\u67D3\u5355\u5143\u683C\u3002\u4F46 cell \u53EA\u80FD\u6E32\u67D3\u5355\u5143\u683C\uFF0Ctitle \u53EA\u80FD\u6E32\u67D3\u8868\u5934
    render(h, context) {
      const { type, row, col } = context;
      if (type === 'title') return '\u90AE\u7BB1\u5730\u5740';
      return <div>{row[col.colKey]}</div>;
    },
  },
  {
    colKey: 'createTime',
    title: '\u7533\u8BF7\u65F6\u95F4',
  },
]);
<\/script>

<style scoped>
.link {
  color: #0052d9;
  text-decoration: none;
}
</style>
`,$=`<template>
  <t-table :data="data" :columns="columns" rowKey="property" lazyLoad>
    <!-- \u81EA\u5B9A\u4E49\u8868\u5934\uFF0Ctitle\u503C\u4E3A\u63D2\u69FD\u540D\u79F0  -->
    <template #title-slot-name> <user-circle-icon /> \u7C7B\u578B </template>
  </t-table>
</template>
<script lang="jsx">
import {
  UserCircleIcon, CheckCircleFilledIcon, ErrorCircleFilledIcon, CloseCircleFilledIcon,
} from 'tdesign-icons-vue';

const initialData = [];

for (let i = 0; i < 5; i++) {
  initialData.push({
    index: i + 1,
    applicant: ['\u8D3E\u660E', '\u5F20\u4E09', '\u738B\u82B3'][i % 3],
    status: i % 3,
    channel: ['\u7535\u5B50\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72'][i % 3],
    detail: {
      email: ['w.cezkdudy@lhll.au', 'r.nmgw@peurezgn.sl', 'p.cumx@rampblpa.ru'][i % 3],
    },
    matters: ['\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528', 'algolia \u670D\u52A1\u62A5\u9500', '\u76F8\u5173\u5468\u8FB9\u5236\u4F5C\u8D39', '\u6FC0\u52B1\u5956\u54C1\u5FEB\u9012\u8D39'][i % 4],
    time: [2, 3, 1, 4][i % 4],
    createTime: ['2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01'][i % 4],
  });
}

const initialColumns = [
  {
    colKey: 'applicant',
    title: 'title-slot-name',
    width: 120,
  },
  {
    colKey: 'matters',
    title: (h, { colIndex }) => <b style="font-wight: bold">{['', '\u7533\u8BF7\u4E8B\u9879'][colIndex]}</b>,
  },
  {
    colKey: 'status',
    title: '\u5BA1\u6279\u72B6\u6001',
    width: 120,
    cell: (h, { row }) => {
      const statusNameListMap = {
        0: { label: '\u5BA1\u6279\u901A\u8FC7', theme: 'success', icon: <CheckCircleFilledIcon /> },
        1: { label: '\u5BA1\u6279\u5931\u8D25', theme: 'danger', icon: <CloseCircleFilledIcon /> },
        2: { label: '\u5BA1\u6279\u8FC7\u671F', theme: 'warning', icon: <ErrorCircleFilledIcon /> },
      };
      return (
        <t-tag shape="round" theme={statusNameListMap[row.status].theme} variant="light-outline">
          {statusNameListMap[row.status].icon}
          {statusNameListMap[row.status].label}
        </t-tag>
      );
    },
  },
  { title: '\u90AE\u7BB1\u5730\u5740', colKey: 'detail.email', width: 200 },
  {
    colKey: 'createTime',
    // render \u53EF\u4EE5\u6E32\u67D3\u8868\u5934\uFF0C\u4E5F\u53EF\u4EE5\u6E32\u67D3\u5355\u5143\u683C\u3002\u4F46 title \u53EA\u80FD\u6E32\u67D3\u8868\u5934\uFF0Ccell \u53EA\u80FD\u6E32\u67D3\u5355\u5143\u683C
    render(h, context) {
      const { type, row, col } = context;
      return {
        title: '\u7533\u8BF7\u65F6\u95F4',
        cell: row && row[col.colKey],
      }[type];
    },
  },
];

export default {
  components: { UserCircleIcon },
  data() {
    return {
      data: initialData,
      columns: initialColumns,
    };
  },
};
<\/script>
`,B=`<template>
  <t-table :data="data" :columns="columns" rowKey="property" lazyLoad>
    <!-- \u81EA\u5B9A\u4E49\u8868\u5934\uFF0Ctitle\u503C\u4E3A\u63D2\u69FD\u540D\u79F0  -->
    <template #title-slot-name> <user-circle-icon /> \u7C7B\u578B </template>
  </t-table>
</template>
<script setup lang="jsx">
import { ref } from 'vue';
import {
  UserCircleIcon, CheckCircleFilledIcon, ErrorCircleFilledIcon, CloseCircleFilledIcon,
} from 'tdesign-icons-vue';

const initialData = [];
for (let i = 0; i < 5; i++) {
  initialData.push({
    index: i + 1,
    applicant: ['\u8D3E\u660E', '\u5F20\u4E09', '\u738B\u82B3'][i % 3],
    status: i % 3,
    channel: ['\u7535\u5B50\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72'][i % 3],
    detail: {
      email: ['w.cezkdudy@lhll.au', 'r.nmgw@peurezgn.sl', 'p.cumx@rampblpa.ru'][i % 3],
    },
    matters: ['\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528', 'algolia \u670D\u52A1\u62A5\u9500', '\u76F8\u5173\u5468\u8FB9\u5236\u4F5C\u8D39', '\u6FC0\u52B1\u5956\u54C1\u5FEB\u9012\u8D39'][i % 4],
    time: [2, 3, 1, 4][i % 4],
    createTime: ['2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01'][i % 4],
  });
}
const initialColumns = [
  {
    colKey: 'applicant',
    title: 'title-slot-name',
    width: 120,
  },
  {
    colKey: 'matters',
    title: (h, { colIndex }) => <b style="font-wight: bold">{['', '\u7533\u8BF7\u4E8B\u9879'][colIndex]}</b>,
  },
  {
    colKey: 'status',
    title: '\u5BA1\u6279\u72B6\u6001',
    width: 120,
    cell: (h, { row }) => {
      const statusNameListMap = {
        0: {
          label: '\u5BA1\u6279\u901A\u8FC7',
          theme: 'success',
          icon: <CheckCircleFilledIcon />,
        },
        1: {
          label: '\u5BA1\u6279\u5931\u8D25',
          theme: 'danger',
          icon: <CloseCircleFilledIcon />,
        },
        2: {
          label: '\u5BA1\u6279\u8FC7\u671F',
          theme: 'warning',
          icon: <ErrorCircleFilledIcon />,
        },
      };
      return (
        <t-tag shape="round" theme={statusNameListMap[row.status].theme} variant="light-outline">
          {statusNameListMap[row.status].icon}
          {statusNameListMap[row.status].label}
        </t-tag>
      );
    },
  },
  {
    title: '\u90AE\u7BB1\u5730\u5740',
    colKey: 'detail.email',
    width: 200,
  },
  {
    colKey: 'createTime',
    // render \u53EF\u4EE5\u6E32\u67D3\u8868\u5934\uFF0C\u4E5F\u53EF\u4EE5\u6E32\u67D3\u5355\u5143\u683C\u3002\u4F46 title \u53EA\u80FD\u6E32\u67D3\u8868\u5934\uFF0Ccell \u53EA\u80FD\u6E32\u67D3\u5355\u5143\u683C
    render(h, context) {
      const { type, row, col } = context;
      return {
        title: '\u7533\u8BF7\u65F6\u95F4',
        cell: row && row[col.colKey],
      }[type];
    },
  },
];
const data = ref(initialData);
const columns = ref(initialColumns);
<\/script>
`,V=`<template>
  <div class="tdesign-demo-block-column-large tdesign-demo__table">
    <div>
      <!-- \u8868\u5C3E\u6709 3 \u79CD\u65B9\u5F0F -->
      <t-radio-group v-model="footerType" variant="default-filled">
        <t-radio-button value="normal">\u666E\u901A\u8868\u5C3E</t-radio-button>
        <t-radio-button value="full">\u901A\u680F\u8868\u5C3E</t-radio-button>
        <t-radio-button value="custom">\u81EA\u5B9A\u4E49\u8868\u5C3E\u5408\u5E76\u5217</t-radio-button>
      </t-radio-group>
    </div>
    <!-- footData \u4E4B\u6240\u4EE5\u662F\u6570\u7EC4\uFF0C\u662F\u4E3A\u4E86\u652F\u6301\u591A\u884C\u8868\u5C3E\u6570\u636E -->
    <t-table
      rowKey="index"
      bordered
      :data="data"
      :columns="columns"
      :foot-data="['normal', 'custom'].includes(footerType) ? footData : []"
      :rowClassName="rowClassName"
      :rowspanAndColspanInFooter="footerType === 'custom' ? rowspanAndColspanInFooter : undefined"
      lazyLoad
    >
      <!-- \u5982\u679C\u662F\u901A\u680F\u8868\u5C3E\uFF0C\u53EA\u9700\u8BBE\u7F6E footerSummary\uFF0C\u652F\u6301\u540C\u540D Props \u5C5E\u6027 footerSummary -->
      <!-- \u901A\u680F\u8868\u5C3E\u548C\u666E\u901A\u8868\u5C3E\uFF0C\u5141\u8BB8\u540C\u65F6\u5B58\u5728 -->
      <template #footerSummary>
        <div class="t-table__row-filter-inner" v-if="footerType === 'full'">\u8868\u5C3E\u4FE1\u606F</div>
      </template>
      <template #t-foot-required> <div style="text-align: left; font-weight: bold">\u8868\u5C3E\u4FE1\u606F</div> </template>
    </t-table>
  </div>
</template>
<script lang="jsx">
import { ErrorCircleFilledIcon, CheckCircleFilledIcon, CloseCircleFilledIcon } from 'tdesign-icons-vue';

const initialData = [];

for (let i = 0; i < 5; i++) {
  initialData.push({
    index: i + 1,
    applicant: ['\u8D3E\u660E', '\u5F20\u4E09', '\u738B\u82B3'][i % 3],
    status: i % 3,
    channel: ['\u7535\u5B50\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72'][i % 3],
    detail: {
      email: ['w.cezkdudy@lhll.au', 'r.nmgw@peurezgn.sl', 'p.cumx@rampblpa.ru'][i % 3],
    },
    matters: ['\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528', 'algolia \u670D\u52A1\u62A5\u9500', '\u76F8\u5173\u5468\u8FB9\u5236\u4F5C\u8D39', '\u6FC0\u52B1\u5956\u54C1\u5FEB\u9012\u8D39'][i % 4],
    time: [2, 3, 1, 4][i % 4],
    createTime: ['2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01'][i % 4],
  });
}
export default {
  data() {
    return {
      data: initialData,
      footerType: 'normal',
      // \u8868\u5C3E\u6709\u4E00\u884C\u6570\u636E
      footData: [
        {
          index: '123',
          type: '\u5168\u90E8\u7C7B\u578B',
          default: '',
          description: '-',
        },
      ],
      columns: [
        {
          align: 'left',
          colKey: 'applicant',
          title: '\u7533\u8BF7\u4EBA',
          foot: () => <b style="font-weight: bold">\u8868\u5C3E\u4FE1\u606F</b>,
          width: '120',
        },
        {
          colKey: 'matters',
          title: (h, { colIndex }) => <b style="font-wight: bold">{['', '\u7533\u8BF7\u4E8B\u9879'][colIndex]}</b>,
          foot: '-',
        },
        {
          colKey: 'status',
          title: '\u5BA1\u6279\u72B6\u6001',
          width: 120,
          cell: (h, { row }) => {
            const statusNameListMap = {
              0: { label: '\u5BA1\u6279\u901A\u8FC7', theme: 'success', icon: <CheckCircleFilledIcon /> },
              1: { label: '\u5BA1\u6279\u5931\u8D25', theme: 'danger', icon: <CloseCircleFilledIcon /> },
              2: { label: '\u5BA1\u6279\u8FC7\u671F', theme: 'warning', icon: <ErrorCircleFilledIcon /> },
            };
            return (
              <t-tag shape="round" theme={statusNameListMap[row.status].theme} variant="light-outline">
                {statusNameListMap[row.status].icon}
                {statusNameListMap[row.status].label}
              </t-tag>
            );
          },
          foot: '-',
        },
        {
          title: '\u90AE\u7BB1\u5730\u5740',
          colKey: 'detail.email',
          width: 200,
          foot: '-',
        },
        {
          colKey: 'createTime',
          // render \u53EF\u4EE5\u6E32\u67D3\u8868\u5934\uFF0C\u4E5F\u53EF\u4EE5\u6E32\u67D3\u5355\u5143\u683C\u3002\u4F46 title \u53EA\u80FD\u6E32\u67D3\u8868\u5934\uFF0Ccell \u53EA\u80FD\u6E32\u67D3\u5355\u5143\u683C
          render(h, context) {
            const { type, row, col } = context;
            return {
              title: '\u7533\u8BF7\u65F6\u95F4',
              cell: row && row[col.colKey],
            }[type];
          },
          foot: '-',
        },
      ],
    };
  },

  methods: {
    // type \u53EF\u9009\u503C\uFF1Afoot \u548C body
    rowClassName({ type }) {
      if (type === 'foot') return 't-tdesign__custom-footer-tr';
      return 't-tdesign__custom-body-tr';
    },

    rowspanAndColspanInFooter({ rowIndex, colIndex }) {
      // \u4E2D\u95F4\u5217\u5408\u5E76\uFF0C\u6536\u5C3E\u4E24\u5217\u4E0D\u5408\u5E76
      if (rowIndex === 0 && colIndex === 1) return { colspan: this.columns.length - 2 };
      return {};
    },
  },
};
<\/script>
`,H=`<template>
  <div class="tdesign-demo-block-column-large tdesign-demo__table">
    <div>
      <!-- \u8868\u5C3E\u6709 3 \u79CD\u65B9\u5F0F -->
      <t-radio-group v-model="footerType" variant="default-filled">
        <t-radio-button value="normal">\u666E\u901A\u8868\u5C3E</t-radio-button>
        <t-radio-button value="full">\u901A\u680F\u8868\u5C3E</t-radio-button>
        <t-radio-button value="custom">\u81EA\u5B9A\u4E49\u8868\u5C3E\u5408\u5E76\u5217</t-radio-button>
      </t-radio-group>
    </div>
    <!-- footData \u4E4B\u6240\u4EE5\u662F\u6570\u7EC4\uFF0C\u662F\u4E3A\u4E86\u652F\u6301\u591A\u884C\u8868\u5C3E\u6570\u636E -->
    <t-table
      rowKey="index"
      bordered
      :data="data"
      :columns="columns"
      :foot-data="['normal', 'custom'].includes(footerType) ? footData : []"
      :rowClassName="rowClassName"
      :rowspanAndColspanInFooter="footerType === 'custom' ? rowspanAndColspanInFooter : undefined"
      lazyLoad
    >
      <!-- \u5982\u679C\u662F\u901A\u680F\u8868\u5C3E\uFF0C\u53EA\u9700\u8BBE\u7F6E footerSummary\uFF0C\u652F\u6301\u540C\u540D Props \u5C5E\u6027 footerSummary -->
      <!-- \u901A\u680F\u8868\u5C3E\u548C\u666E\u901A\u8868\u5C3E\uFF0C\u5141\u8BB8\u540C\u65F6\u5B58\u5728 -->
      <template #footerSummary>
        <div class="t-table__row-filter-inner" v-if="footerType === 'full'">\u8868\u5C3E\u4FE1\u606F</div>
      </template>
      <template #t-foot-required> <div style="text-align: left; font-weight: bold">\u8868\u5C3E\u4FE1\u606F</div> </template>
    </t-table>
  </div>
</template>
<script setup lang="jsx">
import { ref } from 'vue';
import { ErrorCircleFilledIcon, CheckCircleFilledIcon, CloseCircleFilledIcon } from 'tdesign-icons-vue';

const initialData = [];
for (let i = 0; i < 5; i++) {
  initialData.push({
    index: i + 1,
    applicant: ['\u8D3E\u660E', '\u5F20\u4E09', '\u738B\u82B3'][i % 3],
    status: i % 3,
    channel: ['\u7535\u5B50\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72'][i % 3],
    detail: {
      email: ['w.cezkdudy@lhll.au', 'r.nmgw@peurezgn.sl', 'p.cumx@rampblpa.ru'][i % 3],
    },
    matters: ['\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528', 'algolia \u670D\u52A1\u62A5\u9500', '\u76F8\u5173\u5468\u8FB9\u5236\u4F5C\u8D39', '\u6FC0\u52B1\u5956\u54C1\u5FEB\u9012\u8D39'][i % 4],
    time: [2, 3, 1, 4][i % 4],
    createTime: ['2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01'][i % 4],
  });
}
const data = ref(initialData);
const footerType = ref('normal');
// \u8868\u5C3E\u6709\u4E00\u884C\u6570\u636E
const footData = ref([
  {
    index: '123',
    type: '\u5168\u90E8\u7C7B\u578B',
    default: '',
    description: '-',
  },
]);
const columns = ref([
  {
    align: 'left',
    colKey: 'applicant',
    title: '\u7533\u8BF7\u4EBA',
    foot: () => <b style="font-weight: bold">\u8868\u5C3E\u4FE1\u606F</b>,
    width: '120',
  },
  {
    colKey: 'matters',
    title: (h, { colIndex }) => <b style="font-wight: bold">{['', '\u7533\u8BF7\u4E8B\u9879'][colIndex]}</b>,
    foot: '-',
  },
  {
    colKey: 'status',
    title: '\u5BA1\u6279\u72B6\u6001',
    width: 120,
    cell: (h, { row }) => {
      const statusNameListMap = {
        0: {
          label: '\u5BA1\u6279\u901A\u8FC7',
          theme: 'success',
          icon: <CheckCircleFilledIcon />,
        },
        1: {
          label: '\u5BA1\u6279\u5931\u8D25',
          theme: 'danger',
          icon: <CloseCircleFilledIcon />,
        },
        2: {
          label: '\u5BA1\u6279\u8FC7\u671F',
          theme: 'warning',
          icon: <ErrorCircleFilledIcon />,
        },
      };
      return (
        <t-tag shape="round" theme={statusNameListMap[row.status].theme} variant="light-outline">
          {statusNameListMap[row.status].icon}
          {statusNameListMap[row.status].label}
        </t-tag>
      );
    },
    foot: '-',
  },
  {
    title: '\u90AE\u7BB1\u5730\u5740',
    colKey: 'detail.email',
    width: 200,
    foot: '-',
  },
  {
    colKey: 'createTime',
    // render \u53EF\u4EE5\u6E32\u67D3\u8868\u5934\uFF0C\u4E5F\u53EF\u4EE5\u6E32\u67D3\u5355\u5143\u683C\u3002\u4F46 title \u53EA\u80FD\u6E32\u67D3\u8868\u5934\uFF0Ccell \u53EA\u80FD\u6E32\u67D3\u5355\u5143\u683C
    render(h, context) {
      const { type, row, col } = context;
      return {
        title: '\u7533\u8BF7\u65F6\u95F4',
        cell: row && row[col.colKey],
      }[type];
    },
    foot: '-',
  },
]);
// type \u53EF\u9009\u503C\uFF1Afoot \u548C body
const rowClassName = ({ type }) => {
  if (type === 'foot') return 't-tdesign__custom-footer-tr';
  return 't-tdesign__custom-body-tr';
};
const rowspanAndColspanInFooter = ({ rowIndex, colIndex }) => {
  // \u4E2D\u95F4\u5217\u5408\u5E76\uFF0C\u6536\u5C3E\u4E24\u5217\u4E0D\u5408\u5E76
  if (rowIndex === 0 && colIndex === 1) {
    return {
      colspan: columns.value.length - 2,
    };
  }
  return {};
};
<\/script>
`,U=`<template>
  <!-- \u6CE8\u610F\u7EC4\u4EF6\u7236\u5143\u7D20\u7684\u5BBD\u5EA6 -->
  <div class="tdesign-demo-block-column-large tdesign-demo__table tdesign-demo__table-affix" style="width: 830px">
    <t-space>
      <t-checkbox v-model="headerAffixedTop">\u8868\u5934\u5438\u9876</t-checkbox>
      <t-checkbox v-model="footerAffixedBottom">\u8868\u5C3E\u5438\u5E95</t-checkbox>
      <t-checkbox v-model="horizontalScrollAffixedBottom">\u6EDA\u52A8\u6761\u5438\u5E95</t-checkbox>
      <t-checkbox v-model="paginationAffixedBottom">\u5206\u9875\u5668\u5438\u5E95</t-checkbox>
      <t-checkbox v-model="fixedLeftColumn">\u56FA\u5B9A\u5DE6\u4FA7\u5217</t-checkbox>
      <t-checkbox v-model="fixedRightColumn">\u56FA\u5B9A\u53F3\u4FA7\u5217</t-checkbox>
    </t-space>
    <t-table
      rowKey="index"
      :data="data"
      :columns="columns"
      :footData="footData"
      :rowClassName="rowClassName"
      :pagination="pagination"
      :header-affixed-top="headerAffixedTopProps"
      :footer-affixed-bottom="footerAffixedBottomProps"
      :horizontal-scroll-affixed-bottom="horizontalScrollAffixedBottomProps"
      :paginationAffixedBottom="paginationAffixedBottom"
      table-layout="fixed"
      dragSort="col"
      bordered
      resizable
      lazyLoad
      @drag-sort="onDragSortChange"
    >
      <template #t-foot-required> \u63D2\u69FD\u6E32\u67D3\u8868\u5C3E </template>
    </t-table>
  </div>
</template>
<script lang="jsx">
import { ErrorCircleFilledIcon, CheckCircleFilledIcon, CloseCircleFilledIcon } from 'tdesign-icons-vue';

function getData(count) {
  const initialColumns = [];
  for (let i = 0; i < count; i++) {
    initialColumns.push({
      index: i + 1,
      applicant: ['\u8D3E\u660E', '\u5F20\u4E09', '\u738B\u82B3'][i % 3],
      status: i % 3,
      channel: ['\u7535\u5B50\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72'][i % 3],
      detail: {
        email: ['w.cezkdudy@lhll.au', 'r.nmgw@peurezgn.sl', 'p.cumx@rampblpa.ru'][i % 3],
      },
      matters: ['\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528', 'algolia \u670D\u52A1\u62A5\u9500', '\u76F8\u5173\u5468\u8FB9\u5236\u4F5C\u8D39', '\u6FC0\u52B1\u5956\u54C1\u5FEB\u9012\u8D39'][i % 4],
      time: [2, 3, 1, 4][i % 4],
      createTime: ['2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01'][i % 4],
    });
  }
  return initialColumns;
}

const TOTAL = 38;

function getColumns(h, { fixedLeftColumn, fixedRightColumn }) {
  return [
    {
      align: 'left',
      colKey: 'applicant',
      title: '\u7533\u8BF7\u4EBA',
      foot: () => <b style="font-weight: bold">\u8868\u5C3E\u4FE1\u606F</b>,
      width: '120',
      fixed: fixedLeftColumn ? 'left' : undefined,
    },
    {
      colKey: 'status',
      title: '\u7533\u8BF7\u72B6\u6001',
      width: '150',
      cell: (h, { row }) => {
        const statusNameListMap = {
          0: { label: '\u5BA1\u6279\u901A\u8FC7', theme: 'success', icon: <CheckCircleFilledIcon /> },
          1: { label: '\u5BA1\u6279\u5931\u8D25', theme: 'danger', icon: <CloseCircleFilledIcon /> },
          2: { label: '\u5BA1\u6279\u8FC7\u671F', theme: 'warning', icon: <ErrorCircleFilledIcon /> },
        };
        return (
          <t-tag shape="round" theme={statusNameListMap[row.status].theme} variant="light-outline">
            {statusNameListMap[row.status].icon}
            {statusNameListMap[row.status].label}
          </t-tag>
        );
      },
    },
    { colKey: 'channel', title: '\u7B7E\u7F72\u65B9\u5F0F', width: '120' },
    { colKey: 'detail.email', title: '\u90AE\u7BB1\u5730\u5740', width: '180' },
    { colKey: 'matters', title: '\u7533\u8BF7\u4E8B\u9879', width: '180' },
    { colKey: 'createTime', title: '\u7533\u8BF7\u65F6\u95F4', width: '120' },
    {
      colKey: 'operation',
      title: '\u64CD\u4F5C',
      cell: (h, { row }) => (
        <t-link hover="color" theme="primary">
          {row.status === 0 ? '\u67E5\u770B\u8BE6\u60C5' : '\u518D\u6B21\u7533\u8BF7'}
        </t-link>
      ),
      width: 120,
      foot: '-',
      fixed: fixedRightColumn ? 'right' : undefined,
    },
  ];
}

export default {
  data() {
    return {
      data: getData(TOTAL),
      // \u91CD\u8981\uFF1A\u5982\u679C\u5728\u9884\u6E32\u67D3\u573A\u666F\u4E0B\uFF0C\u521D\u6B21\u6E32\u67D3\u7684\u8868\u683C\u5BBD\u5EA6\u548C\u6700\u7EC8\u5448\u73B0\u5BBD\u5EA6\u4E0D\u4E00\u6837\uFF0C\u8BF7\u5F02\u6B65\u8BBE\u7F6E\u8868\u5934\u5438\u9876
      headerAffixedTop: true,
      footerAffixedBottom: false,
      fixedLeftColumn: true,
      fixedRightColumn: true,
      horizontalScrollAffixedBottom: true,
      paginationAffixedBottom: true,
      // \u8868\u5C3E\u6709\u4E00\u884C\u6570\u636E
      footData: [{ index: 'footer-row-1', type: '\u5168\u90E8\u7C7B\u578B', description: '-' }],
      columns: [],
      pagination: { defaultCurrent: 1, defaultPageSize: 5, total: TOTAL },
    };
  },

  computed: {
    headerAffixedTopProps() {
      if (this.headerAffixedTop) {
        return {
          offsetTop: 87,
          zIndex: 1000,
          // container used to set scroll container, default container is body
          // container: () => document.body,
        };
      }
      return false;
    },
    footerAffixedBottomProps() {
      if (this.footerAffixedBottom) {
        return {
          offsetBottom: this.paginationAffixedBottom ? 64 : 0,
          zIndex: 1000,
        };
      }
      return false;
    },
    horizontalScrollAffixedBottomProps() {
      if (this.horizontalScrollAffixedBottom) {
        return {
          // height of pagination component is 64
          offsetBottom: this.paginationAffixedBottom ? 64 : 0,
          zIndex: 1000,
        };
      }
      return false;
    },
  },

  watch: {
    // \u5DE6\u4FA7\u56FA\u5B9A\u5217\u53D1\u751F\u53D8\u5316\u65F6
    fixedLeftColumn: {
      handler(val) {
        this.columns = getColumns(this.$createElement, {
          fixedLeftColumn: val,
          fixedRightColumn: this.fixedRightColumn,
        });
      },
      immediate: true,
    },
    // \u53F3\u4FA7\u56FA\u5B9A\u5217\u53D1\u751F\u53D8\u5316\u65F6
    fixedRightColumn(val) {
      this.columns = getColumns(this.$createElement, {
        fixedLeftColumn: this.fixedLeftColumn,
        fixedRightColumn: val,
      });
    },
  },

  methods: {
    // type \u53EF\u9009\u503C\uFF1Afoot \u548C body
    rowClassName({ type }) {
      if (type === 'foot') return 't-tdesign__custom-footer-tr';
      return 't-tdesign__custom-body-tr';
    },
    onDragSortChange({ newData }) {
      this.columns = newData;
    },
  },
};
<\/script>
`,q=`<template>
  <!-- \u6CE8\u610F\u7EC4\u4EF6\u7236\u5143\u7D20\u7684\u5BBD\u5EA6 -->
  <div class="tdesign-demo-block-column-large tdesign-demo__table tdesign-demo__table-affix" style="width: 830px">
    <t-space>
      <t-checkbox v-model="headerAffixedTop">\u8868\u5934\u5438\u9876</t-checkbox>
      <t-checkbox v-model="footerAffixedBottom">\u8868\u5C3E\u5438\u5E95</t-checkbox>
      <t-checkbox v-model="horizontalScrollAffixedBottom">\u6EDA\u52A8\u6761\u5438\u5E95</t-checkbox>
      <t-checkbox v-model="paginationAffixedBottom">\u5206\u9875\u5668\u5438\u5E95</t-checkbox>
      <t-checkbox v-model="fixedLeftColumn">\u56FA\u5B9A\u5DE6\u4FA7\u5217</t-checkbox>
      <t-checkbox v-model="fixedRightColumn">\u56FA\u5B9A\u53F3\u4FA7\u5217</t-checkbox>
    </t-space>
    <t-table
      rowKey="index"
      :data="data"
      :columns="columns"
      :footData="footData"
      :rowClassName="rowClassName"
      :pagination="pagination"
      :header-affixed-top="headerAffixedTopProps"
      :footer-affixed-bottom="footerAffixedBottomProps"
      :horizontal-scroll-affixed-bottom="horizontalScrollAffixedBottomProps"
      :paginationAffixedBottom="paginationAffixedBottom"
      table-layout="fixed"
      dragSort="col"
      bordered
      resizable
      lazyLoad
      @drag-sort="onDragSortChange"
    >
      <template #t-foot-required> \u63D2\u69FD\u6E32\u67D3\u8868\u5C3E </template>
    </t-table>
  </div>
</template>
<script setup lang="jsx">
import {
  h, ref, reactive, computed, watch,
} from 'vue';
import { ErrorCircleFilledIcon, CheckCircleFilledIcon, CloseCircleFilledIcon } from 'tdesign-icons-vue';

function getData(count) {
  const initialColumns = [];
  for (let i = 0; i < count; i++) {
    initialColumns.push({
      index: i + 1,
      applicant: ['\u8D3E\u660E', '\u5F20\u4E09', '\u738B\u82B3'][i % 3],
      status: i % 3,
      channel: ['\u7535\u5B50\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72'][i % 3],
      detail: {
        email: ['w.cezkdudy@lhll.au', 'r.nmgw@peurezgn.sl', 'p.cumx@rampblpa.ru'][i % 3],
      },
      matters: ['\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528', 'algolia \u670D\u52A1\u62A5\u9500', '\u76F8\u5173\u5468\u8FB9\u5236\u4F5C\u8D39', '\u6FC0\u52B1\u5956\u54C1\u5FEB\u9012\u8D39'][i % 4],
      time: [2, 3, 1, 4][i % 4],
      createTime: ['2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01'][i % 4],
    });
  }
  return initialColumns;
}
const TOTAL = 38;
function getColumns(h, { fixedLeftColumn, fixedRightColumn }) {
  return [
    {
      align: 'left',
      colKey: 'applicant',
      title: '\u7533\u8BF7\u4EBA',
      foot: () => <b style="font-weight: bold">\u8868\u5C3E\u4FE1\u606F</b>,
      width: '120',
      fixed: fixedLeftColumn ? 'left' : undefined,
    },
    {
      colKey: 'status',
      title: '\u7533\u8BF7\u72B6\u6001',
      width: '150',
      cell: (h, { row }) => {
        const statusNameListMap = {
          0: {
            label: '\u5BA1\u6279\u901A\u8FC7',
            theme: 'success',
            icon: <CheckCircleFilledIcon />,
          },
          1: {
            label: '\u5BA1\u6279\u5931\u8D25',
            theme: 'danger',
            icon: <CloseCircleFilledIcon />,
          },
          2: {
            label: '\u5BA1\u6279\u8FC7\u671F',
            theme: 'warning',
            icon: <ErrorCircleFilledIcon />,
          },
        };
        return (
          <t-tag shape="round" theme={statusNameListMap[row.status].theme} variant="light-outline">
            {statusNameListMap[row.status].icon}
            {statusNameListMap[row.status].label}
          </t-tag>
        );
      },
    },
    {
      colKey: 'channel',
      title: '\u7B7E\u7F72\u65B9\u5F0F',
      width: '120',
    },
    {
      colKey: 'detail.email',
      title: '\u90AE\u7BB1\u5730\u5740',
      width: '180',
    },
    {
      colKey: 'matters',
      title: '\u7533\u8BF7\u4E8B\u9879',
      width: '180',
    },
    {
      colKey: 'createTime',
      title: '\u7533\u8BF7\u65F6\u95F4',
      width: '120',
    },
    {
      colKey: 'operation',
      title: '\u64CD\u4F5C',
      cell: (h, { row }) => (
        <t-link hover="color" theme="primary">
          {row.status === 0 ? '\u67E5\u770B\u8BE6\u60C5' : '\u518D\u6B21\u7533\u8BF7'}
        </t-link>
      ),
      width: 120,
      foot: '-',
      fixed: fixedRightColumn ? 'right' : undefined,
    },
  ];
}
const data = ref(getData(TOTAL));
// \u91CD\u8981\uFF1A\u5982\u679C\u5728\u9884\u6E32\u67D3\u573A\u666F\u4E0B\uFF0C\u521D\u6B21\u6E32\u67D3\u7684\u8868\u683C\u5BBD\u5EA6\u548C\u6700\u7EC8\u5448\u73B0\u5BBD\u5EA6\u4E0D\u4E00\u6837\uFF0C\u8BF7\u5F02\u6B65\u8BBE\u7F6E\u8868\u5934\u5438\u9876
const headerAffixedTop = ref(true);
const footerAffixedBottom = ref(false);
const fixedLeftColumn = ref(true);
const fixedRightColumn = ref(true);
const horizontalScrollAffixedBottom = ref(true);
const paginationAffixedBottom = ref(true);
// \u8868\u5C3E\u6709\u4E00\u884C\u6570\u636E
const footData = ref([
  {
    index: 'footer-row-1',
    type: '\u5168\u90E8\u7C7B\u578B',
    description: '-',
  },
]);
const columns = ref([]);
const pagination = reactive({
  defaultCurrent: 1,
  defaultPageSize: 5,
  total: TOTAL,
});
const headerAffixedTopProps = computed(() => {
  if (headerAffixedTop.value) {
    return {
      offsetTop: 87,
      zIndex: 1000,
      // container used to set scroll container, default container is body
      // container: () => document.body,
    };
  }
  return false;
});
const footerAffixedBottomProps = computed(() => {
  if (footerAffixedBottom.value) {
    return {
      offsetBottom: paginationAffixedBottom.value ? 64 : 0,
      zIndex: 1000,
    };
  }
  return false;
});
const horizontalScrollAffixedBottomProps = computed(() => {
  if (horizontalScrollAffixedBottom.value) {
    return {
      // height of pagination component is 64
      offsetBottom: paginationAffixedBottom.value ? 64 : 0,
      zIndex: 1000,
    };
  }
  return false;
});
// type \u53EF\u9009\u503C\uFF1Afoot \u548C body
const rowClassName = ({ type }) => {
  if (type === 'foot') return 't-tdesign__custom-footer-tr';
  return 't-tdesign__custom-body-tr';
};
const onDragSortChange = ({ newData }) => {
  columns.value = newData;
};
// \u5DE6\u4FA7\u56FA\u5B9A\u5217\u53D1\u751F\u53D8\u5316\u65F6
watch(
  fixedLeftColumn,
  (val) => {
    columns.value = getColumns(h, {
      fixedLeftColumn: val,
      fixedRightColumn: fixedRightColumn.value,
    });
  },
  {
    immediate: true,
  },
);
// \u53F3\u4FA7\u56FA\u5B9A\u5217\u53D1\u751F\u53D8\u5316\u65F6
watch(fixedRightColumn, (val) => {
  columns.value = getColumns(h, {
    fixedLeftColumn: fixedLeftColumn.value,
    fixedRightColumn: val,
  });
});
<\/script>
`,W=`<template>
  <div class="tdesign-demo-block-column tdesign-demo__table" style="width: 100%">
    <!-- t-config-provider \u4E00\u822C\u7528\u4E8E\u5168\u5C40\u914D\u7F6E\u67D0\u4E2A\u7EC4\u4EF6\u7684\u7279\u6027\uFF0C\u6B64\u4EE3\u7801\u793A\u4F8B \u793A\u8303\u4E86\u5982\u4F55\u5BF9\u8868\u683C\u6269\u5C55\u56FE\u6807\u8FDB\u884C\u7EDF\u4E00\u914D\u7F6E -->
    <!-- \`globalLocale.table.expandIcon\` \u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u5C55\u5F00\u7BAD\u5934\u56FE\u6807 -->
    <!-- <t-config-provider :globalLocale="globalLocale"> -->

    <!-- expanded-row-keys \u4E3A\u53D7\u63A7\u5C5E\u6027 -->
    <!-- default-expanded-row-keys \u4E3A\u975E\u53D7\u63A7\u5C5E\u6027 -->

    <div>
      <t-radio-group v-model="expandControl" variant="default-filled">
        <t-radio-button value="true">\u663E\u793A\u5C55\u5F00\u56FE\u6807</t-radio-button>
        <t-radio-button value="false">\u9690\u85CF\u5C55\u5F00\u56FE\u6807</t-radio-button>
        <t-radio-button value="custom">\u81EA\u5B9A\u4E49\u5C55\u5F00\u56FE\u6807</t-radio-button>
      </t-radio-group>
    </div>

    <div>
      <t-checkbox v-model="expandOnRowClick">\u5141\u8BB8\u70B9\u51FB\u884C\u4E4B\u540E\u5C55\u5F00/\u6536\u8D77</t-checkbox>
      <t-checkbox v-model="fixedColumns" style="margin-left: 32px">\u56FA\u5B9A\u5217</t-checkbox>
      <t-checkbox v-model="emptyData" style="margin-left: 32px">\u7A7A\u6570\u636E</t-checkbox>
    </div>

    <!-- :defaultExpandedRowKeys="defaultExpandedRowKeys" -->
    <t-table
      row-key="index"
      :columns="columns"
      :data="emptyData ? [] : data"
      :expanded-row-keys="expandedRowKeys"
      :expanded-row="expandedRow"
      :expandIcon="expandIcon"
      :expandOnRowClick="expandOnRowClick"
      :horizontalScrollAffixedBottom="true"
      table-layout="auto"
      tableContentWidth="1200"
      lazyLoad
      resizable
      @expand-change="rehandleExpandChange"
    >
      <template #operation="{ row }">
        <t-link hover="color" theme="primary" @click="rehandleClickOp(row)">
          {{ row.status === 0 ? '\u67E5\u770B\u8BE6\u60C5' : '\u518D\u6B21\u7533\u8BF7' }}
        </t-link>
      </template>
    </t-table>

    <!-- </t-config-provider> -->

    <!-- !! \u4E5F\u53EF\u4EE5\u4F7F\u7528\u5177\u540D\u63D2\u69FD \`expandedRow\` \u81EA\u5B9A\u4E49\u5C55\u5F00\u884C\u5185\u5BB9 !! -->
    <!-- <template #expandedRow="{ row }">
      <div class="more-detail">
        <p class="title"><b>\u96C6\u7FA4\u540D\u79F0:</b></p><p class="content">{{row.instance}}</p><br/>
        <p class="title"><b>\u7BA1\u7406\u5458:</b></p><p class="content">{{row.owner}}</p><br/>
        <p class="title"><b>\u63CF\u8FF0:</b></p><p class="content">{{row.description}}</p>
      </div>
    </template> -->
  </div>
</template>

<script lang="jsx">
import {
  ChevronRightCircleIcon,
  ChevronRightIcon,
  CheckCircleFilledIcon,
  ErrorCircleFilledIcon,
  CloseCircleFilledIcon,
} from 'tdesign-icons-vue';

const getColumns = (isFixedColumn) => [
  {
    colKey: 'applicant',
    title: '\u7533\u8BF7\u4EBA',
    width: '80',
    fixed: isFixedColumn ? 'left' : '',
  },
  {
    colKey: 'status',
    title: '\u7533\u8BF7\u72B6\u6001',
    cell: (h, { row }) => {
      const statusNameListMap = {
        0: { label: '\u5BA1\u6279\u901A\u8FC7', theme: 'success', icon: <CheckCircleFilledIcon /> },
        1: { label: '\u5BA1\u6279\u5931\u8D25', theme: 'danger', icon: <CloseCircleFilledIcon /> },
        2: { label: '\u5BA1\u6279\u8FC7\u671F', theme: 'warning', icon: <ErrorCircleFilledIcon /> },
      };
      return (
        <t-tag shape="round" theme={statusNameListMap[row.status].theme} variant="light-outline">
          {statusNameListMap[row.status].icon}
          {statusNameListMap[row.status].label}
        </t-tag>
      );
    },
  },
  { colKey: 'channel', title: '\u7B7E\u7F72\u65B9\u5F0F' },
  { colKey: 'detail.email', title: '\u90AE\u7BB1\u5730\u5740', ellipsis: true },
  { colKey: 'createTime', title: '\u7533\u8BF7\u65F6\u95F4' },
  { colKey: 'operation', title: '\u64CD\u4F5C', fixed: isFixedColumn ? 'right' : '' },
];

const initialData = new Array(5).fill(null).map((item, i) => ({
  index: i + 1,
  applicant: ['\u8D3E\u660E', '\u5F20\u4E09', '\u738B\u82B3'][i % 3],
  status: i % 3,
  channel: ['\u7535\u5B50\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72'][i % 3],
  detail: {
    email: ['w.cezkdudy@lhll.au', 'r.nmgw@peurezgn.sl', 'p.cumx@rampblpa.ru'][i % 3],
  },
  matters: ['\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528', 'algolia \u670D\u52A1\u62A5\u9500', '\u76F8\u5173\u5468\u8FB9\u5236\u4F5C\u8D39', '\u6FC0\u52B1\u5956\u54C1\u5FEB\u9012\u8D39'][i % 4],
  time: [2, 3, 1, 4][i % 4],
  createTime: ['2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01'][i % 4],
}));

export default {
  data() {
    return {
      expandControl: 'true',
      expandIcon: true,
      expandOnRowClick: true,
      fixedColumns: false,
      emptyData: false,
      data: initialData,
      // \u6709\u54EA\u4E9B data.id \u5728 expandedRowKeys \u4E2D\uFF0C\u5C31\u663E\u793A\u8FD9\u4E9B id \u5BF9\u5E94\u7684\u884C
      expandedRowKeys: [102],
      // defaultExpandedRowKeys: [102, 104],
      expandedRow: (h, { row }) => (
        <div class="more-detail">
          <p class="title">
            <b>\u7533\u8BF7\u4EBA:</b>
          </p>
          <p class="content">{row.applicant}</p>
          <br />
          <p class="title">
            <b>\u90AE\u7BB1\u5730\u5740:</b>
          </p>
          <p class="content">{row.detail.email}</p>
          <br />
          <p class="title">
            <b>\u7B7E\u7F72\u65B9\u5F0F:</b>
          </p>
          <p class="content">{row.channel}</p>
        </div>
      ),
      // globalLocale: {
      //   table: {
      //     expandIcon: (h) => h && <ChevronRightIcon />,
      //   },
      // },
    };
  },
  computed: {
    columns() {
      return getColumns(this.fixedColumns);
    },
  },
  watch: {
    expandControl(val) {
      if (val === 'true') {
        // expandIcon \u9ED8\u8BA4\u4E3A true\uFF0C\u8868\u793A\u663E\u793A\u9ED8\u8BA4\u5C55\u5F00\u56FE\u6807
        this.expandIcon = true;
      } else if (val === 'false') {
        // expandIcon \u503C\u4E3A false\uFF0C\u5219\u8868\u793A\u9690\u85CF\u5168\u90E8\u5C55\u5F00\u56FE\u6807
        this.expandIcon = false;
      } else if (val === 'custom') {
        // \u5B8C\u5168\u81EA\u7531\u63A7\u5236\u8868\u683C\u7684\u6BCF\u4E00\u884C\u662F\u5426\u663E\u793A\u5C55\u5F00\u56FE\u6807\uFF0C\u4EE5\u53CA\u663E\u793A\u4EC0\u4E48\u5185\u5BB9
        this.expandIcon = (h, { index }) => {
          // \u7B2C\u4E00\u884C\u4E0D\u663E\u793A\u5C55\u5F00\u56FE\u6807
          if (index === 0) return false;
          // \u7B2C\u4E09\u884C\uFF0C\u4F7F\u7528\u81EA\u5B9A\u4E49\u5C55\u5F00\u56FE\u6807
          if (index === 3) return <ChevronRightIcon />;
          // \u5176\u4ED6\u884C\uFF0C\u4F7F\u7528\u8868\u683C\u540C\u6B3E\u5C55\u5F00\u56FE\u6807
          return <ChevronRightCircleIcon />;
        };
      }
    },
  },
  methods: {
    rehandleClickOp(data) {
      console.log(data);
    },
    rehandleExpandChange(value, params) {
      this.expandedRowKeys = value;
      console.log('rehandleExpandChange', params);
    },
  },
};
<\/script>

<style lang="less" scoped>
/deep/ [class*='t-table-expandable-icon-cell'] .t-icon {
  background-color: transparent;
}

/deep/ .more-detail {
  line-height: 22px;
  > p {
    display: inline-block;
    margin: 5px;
  }
  > p.title {
    width: 100px;
  }
}
</style>
`,Y=`<template>
  <div class="tdesign-demo-block-column tdesign-demo__table" style="width: 100%">
    <!-- t-config-provider \u4E00\u822C\u7528\u4E8E\u5168\u5C40\u914D\u7F6E\u67D0\u4E2A\u7EC4\u4EF6\u7684\u7279\u6027\uFF0C\u6B64\u4EE3\u7801\u793A\u4F8B \u793A\u8303\u4E86\u5982\u4F55\u5BF9\u8868\u683C\u6269\u5C55\u56FE\u6807\u8FDB\u884C\u7EDF\u4E00\u914D\u7F6E -->
    <!-- \`globalLocale.table.expandIcon\` \u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u5C55\u5F00\u7BAD\u5934\u56FE\u6807 -->
    <!-- <t-config-provider :globalLocale="globalLocale"> -->

    <!-- expanded-row-keys \u4E3A\u53D7\u63A7\u5C5E\u6027 -->
    <!-- default-expanded-row-keys \u4E3A\u975E\u53D7\u63A7\u5C5E\u6027 -->

    <div>
      <t-radio-group v-model="expandControl" variant="default-filled">
        <t-radio-button value="true">\u663E\u793A\u5C55\u5F00\u56FE\u6807</t-radio-button>
        <t-radio-button value="false">\u9690\u85CF\u5C55\u5F00\u56FE\u6807</t-radio-button>
        <t-radio-button value="custom">\u81EA\u5B9A\u4E49\u5C55\u5F00\u56FE\u6807</t-radio-button>
      </t-radio-group>
    </div>

    <div>
      <t-checkbox v-model="expandOnRowClick">\u5141\u8BB8\u70B9\u51FB\u884C\u4E4B\u540E\u5C55\u5F00/\u6536\u8D77</t-checkbox>
      <t-checkbox v-model="fixedColumns" style="margin-left: 32px">\u56FA\u5B9A\u5217</t-checkbox>
      <t-checkbox v-model="emptyData" style="margin-left: 32px">\u7A7A\u6570\u636E</t-checkbox>
    </div>

    <!-- :defaultExpandedRowKeys="defaultExpandedRowKeys" -->
    <t-table
      row-key="index"
      :columns="columns"
      :data="emptyData ? [] : data"
      :expanded-row-keys="expandedRowKeys"
      :expanded-row="expandedRow"
      :expandIcon="expandIcon"
      :expandOnRowClick="expandOnRowClick"
      :horizontalScrollAffixedBottom="true"
      table-layout="auto"
      tableContentWidth="1200"
      lazyLoad
      resizable
      @expand-change="rehandleExpandChange"
    >
      <template #operation="{ row }">
        <t-link hover="color" theme="primary" @click="rehandleClickOp(row)">
          {{ row.status === 0 ? '\u67E5\u770B\u8BE6\u60C5' : '\u518D\u6B21\u7533\u8BF7' }}
        </t-link>
      </template>
    </t-table>

    <!-- </t-config-provider> -->

    <!-- !! \u4E5F\u53EF\u4EE5\u4F7F\u7528\u5177\u540D\u63D2\u69FD \`expandedRow\` \u81EA\u5B9A\u4E49\u5C55\u5F00\u884C\u5185\u5BB9 !! -->
    <!-- <template #expandedRow="{ row }">
      <div class="more-detail">
        <p class="title"><b>\u96C6\u7FA4\u540D\u79F0:</b></p><p class="content">{{row.instance}}</p><br/>
        <p class="title"><b>\u7BA1\u7406\u5458:</b></p><p class="content">{{row.owner}}</p><br/>
        <p class="title"><b>\u63CF\u8FF0:</b></p><p class="content">{{row.description}}</p>
      </div>
    </template> -->
  </div>
</template>

<script setup lang="jsx">
import { ref, computed, watch } from 'vue';
import {
  ChevronRightCircleIcon,
  ChevronRightIcon,
  CheckCircleFilledIcon,
  ErrorCircleFilledIcon,
  CloseCircleFilledIcon,
} from 'tdesign-icons-vue';

const getColumns = (isFixedColumn) => [
  {
    colKey: 'applicant',
    title: '\u7533\u8BF7\u4EBA',
    width: '80',
    fixed: isFixedColumn ? 'left' : '',
  },
  {
    colKey: 'status',
    title: '\u7533\u8BF7\u72B6\u6001',
    cell: (h, { row }) => {
      const statusNameListMap = {
        0: {
          label: '\u5BA1\u6279\u901A\u8FC7',
          theme: 'success',
          icon: <CheckCircleFilledIcon />,
        },
        1: {
          label: '\u5BA1\u6279\u5931\u8D25',
          theme: 'danger',
          icon: <CloseCircleFilledIcon />,
        },
        2: {
          label: '\u5BA1\u6279\u8FC7\u671F',
          theme: 'warning',
          icon: <ErrorCircleFilledIcon />,
        },
      };
      return (
        <t-tag shape="round" theme={statusNameListMap[row.status].theme} variant="light-outline">
          {statusNameListMap[row.status].icon}
          {statusNameListMap[row.status].label}
        </t-tag>
      );
    },
  },
  {
    colKey: 'channel',
    title: '\u7B7E\u7F72\u65B9\u5F0F',
  },
  {
    colKey: 'detail.email',
    title: '\u90AE\u7BB1\u5730\u5740',
    ellipsis: true,
  },
  {
    colKey: 'createTime',
    title: '\u7533\u8BF7\u65F6\u95F4',
  },
  {
    colKey: 'operation',
    title: '\u64CD\u4F5C',
    fixed: isFixedColumn ? 'right' : '',
  },
];
const initialData = new Array(5).fill(null).map((item, i) => ({
  index: i + 1,
  applicant: ['\u8D3E\u660E', '\u5F20\u4E09', '\u738B\u82B3'][i % 3],
  status: i % 3,
  channel: ['\u7535\u5B50\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72'][i % 3],
  detail: {
    email: ['w.cezkdudy@lhll.au', 'r.nmgw@peurezgn.sl', 'p.cumx@rampblpa.ru'][i % 3],
  },
  matters: ['\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528', 'algolia \u670D\u52A1\u62A5\u9500', '\u76F8\u5173\u5468\u8FB9\u5236\u4F5C\u8D39', '\u6FC0\u52B1\u5956\u54C1\u5FEB\u9012\u8D39'][i % 4],
  time: [2, 3, 1, 4][i % 4],
  createTime: ['2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01'][i % 4],
}));
const expandControl = ref('true');
const expandIcon = ref(true);
const expandOnRowClick = ref(true);
const fixedColumns = ref(false);
const emptyData = ref(false);
const data = ref(initialData);
// \u6709\u54EA\u4E9B data.id \u5728 expandedRowKeys \u4E2D\uFF0C\u5C31\u663E\u793A\u8FD9\u4E9B id \u5BF9\u5E94\u7684\u884C
const expandedRowKeys = ref([102]);
// defaultExpandedRowKeys: [102, 104],
const expandedRow = ref((h, { row }) => (
  <div class="more-detail">
    <p class="title">
      <b>\u7533\u8BF7\u4EBA:</b>
    </p>
    <p class="content">{row.applicant}</p>
    <br />
    <p class="title">
      <b>\u90AE\u7BB1\u5730\u5740:</b>
    </p>
    <p class="content">{row.detail.email}</p>
    <br />
    <p class="title">
      <b>\u7B7E\u7F72\u65B9\u5F0F:</b>
    </p>
    <p class="content">{row.channel}</p>
  </div>
));
// const globalLocale = reactive({
//   table: {
//     expandIcon: (h) => h && <ChevronRightIcon />,
//   },
// });
const columns = computed(() => getColumns(fixedColumns.value));
const rehandleClickOp = (data) => {
  console.log(data);
};
const rehandleExpandChange = (value, params) => {
  expandedRowKeys.value = value;
  console.log('rehandleExpandChange', params);
};
watch(expandControl, (val) => {
  if (val === 'true') {
    // expandIcon \u9ED8\u8BA4\u4E3A true\uFF0C\u8868\u793A\u663E\u793A\u9ED8\u8BA4\u5C55\u5F00\u56FE\u6807
    expandIcon.value = true;
  } else if (val === 'false') {
    // expandIcon \u503C\u4E3A false\uFF0C\u5219\u8868\u793A\u9690\u85CF\u5168\u90E8\u5C55\u5F00\u56FE\u6807
    expandIcon.value = false;
  } else if (val === 'custom') {
    // \u5B8C\u5168\u81EA\u7531\u63A7\u5236\u8868\u683C\u7684\u6BCF\u4E00\u884C\u662F\u5426\u663E\u793A\u5C55\u5F00\u56FE\u6807\uFF0C\u4EE5\u53CA\u663E\u793A\u4EC0\u4E48\u5185\u5BB9
    expandIcon.value = (h, { index }) => {
      // \u7B2C\u4E00\u884C\u4E0D\u663E\u793A\u5C55\u5F00\u56FE\u6807
      if (index === 0) return false;
      // \u7B2C\u4E09\u884C\uFF0C\u4F7F\u7528\u81EA\u5B9A\u4E49\u5C55\u5F00\u56FE\u6807
      if (index === 3) return <ChevronRightIcon />;
      // \u5176\u4ED6\u884C\uFF0C\u4F7F\u7528\u8868\u683C\u540C\u6B3E\u5C55\u5F00\u56FE\u6807
      return <ChevronRightCircleIcon />;
    };
  }
});
<\/script>

<style lang="less" scoped>
/deep/ [class*='t-table-expandable-icon-cell'] .t-icon {
  background-color: transparent;
}

/deep/ .more-detail {
  line-height: 22px;
  > p {
    display: inline-block;
    margin: 5px;
  }
  > p.title {
    width: 100px;
  }
}
</style>
`,G=`<template>
  <div class="tdesign-demo-block-column-large tdesign-demo__table">
    <!-- \u6309\u94AE\u64CD\u4F5C\u533A\u57DF -->
    <t-space direction="vertical">
      <t-radio-group v-model="placement" variant="default-filled">
        <t-radio-button value="top-left">\u5DE6\u4E0A\u89D2</t-radio-button>
        <t-radio-button value="top-right">\u53F3\u4E0A\u89D2</t-radio-button>
        <t-radio-button value="bottom-left">\u5DE6\u4E0B\u89D2</t-radio-button>
        <t-radio-button value="bottom-right">\u53F3\u4E0B\u89D2</t-radio-button>
      </t-radio-group>

      <t-space>
        <t-checkbox v-model="groupColumn">\u5206\u7EC4\u5217\u914D\u7F6E</t-checkbox>
        <t-checkbox v-model="bordered">\u662F\u5426\u663E\u793A\u8FB9\u6846</t-checkbox>
        <t-checkbox v-model="customText" style="margin-left: 16px">\u81EA\u5B9A\u4E49\u5217\u914D\u7F6E\u6309\u94AE</t-checkbox>
      </t-space>
    </t-space>

    <!-- 1. defaultDisplayColumns = ['platform'] \u8BBE\u7F6E\u9ED8\u8BA4\u663E\u793A\u54EA\u4E9B\u5217\uFF0C\u4EC5\u7B2C\u4E00\u6B21\u6709\u6548 -->
    <!-- 2. displayColumns \u52A8\u6001\u8BBE\u7F6E\u663E\u793A\u54EA\u4E9B\u5217\uFF0C\u53D7\u63A7\u5C5E\u6027\uFF0C\u652F\u6301 displayColumns.sync \u8BED\u6CD5\u7CD6 -->
    <!-- 3. onDisplayColumnsChange \u5F53\u524D\u663E\u793A\u5217\u53D1\u751F\u53D8\u5316\u65F6\u89E6\u53D1 -->
    <!-- 4. \u5982\u679C\u5E0C\u671B\u9876\u90E8\u5185\u5BB9 \u548C \u5217\u914D\u7F6E\u6309\u94AE \u4FDD\u6301\u5728\u540C\u4E00\u884C\uFF0C\u53EF\u5C06\u5185\u5BB9\u653E\u5728 topContent\uFF0C\u5E76\u8C03\u6574\u6309\u94AE\u7236\u5143\u7D20\u5BBD\u5EA6(CSS) -->
    <!-- :locale="tableLocale" \u53EF\u7528\u4E8E\u5B9A\u4E49\u5217\u914D\u7F6E\u5F39\u6846\u6240\u6709\u6587\u672C\u4FE1\u606F -->
    <t-table
      rowKey="index"
      :data="data"
      :columns="columns"
      :displayColumns.sync="displayColumns"
      :column-controller="columnControllerConfig"
      :pagination="{ defaultPageSize: 5, defaultCurrent: 1, total: 100 }"
      :bordered="bordered"
      drag-sort="col"
      stripe
      lazyLoad
      resizable
      @drag-sort="onDragSortChange"
      @column-change="onColumnChange"
    ></t-table>

    <!-- \u975E\u53D7\u63A7\u7528\u6CD5\uFF0C\u793A\u4F8B\u4EE3\u7801\u6709\u6548\uFF0C\u52FF\u5220 -->
    <!-- <t-table
      rowKey="index"
      :data="data"
      :columns="columns"
      :columnController="{ displayType: 'fixed-width', fields: ['platform', 'type', 'default'] }"
      tableLayout="auto"
      stripe
      bordered
      @column-change="onColumnChange"
    ></t-table> -->
  </div>
</template>
<script lang="jsx">
import { ErrorCircleFilledIcon, CheckCircleFilledIcon, CloseCircleFilledIcon } from 'tdesign-icons-vue';

const initialData = [];
for (let i = 0; i < 100; i++) {
  initialData.push({
    index: i + 1,
    applicant: ['\u8D3E\u660E', '\u5F20\u4E09', '\u738B\u82B3'][i % 3],
    status: i % 3,
    channel: ['\u7535\u5B50\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72'][i % 3],
    detail: {
      email: ['w.cezkdudy@lhll.au', 'r.nmgw@peurezgn.sl', 'p.cumx@rampblpa.ru'][i % 3],
    },
    matters: ['\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528', 'algolia \u670D\u52A1\u62A5\u9500', '\u76F8\u5173\u5468\u8FB9\u5236\u4F5C\u8D39', '\u6FC0\u52B1\u5956\u54C1\u5FEB\u9012\u8D39'][i % 4],
    time: [2, 3, 1, 4][i % 4],
    createTime: ['2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01'][i % 4],
    data1: '123',
    data2: '23414',
    data3: '52435',
    data4: '132434',
  });
}

const staticColumn = ['applicant', 'status'];

const GROUP_COLUMNS = [
  {
    label: '\u6307\u6807\u7EF4\u5EA6',
    value: 'index',
    columns: ['applicant', 'status', 'channel'],
  },
  {
    label: '\u6B21\u8981\u7EF4\u5EA6',
    value: 'secondary',
    columns: ['detail.email', 'createTime'],
  },
  {
    label: '\u6570\u636E\u7EF4\u5EA6',
    value: 'data',
    columns: ['data1', 'data2', 'data3', 'data4'],
  },
];

export default {
  data() {
    return {
      data: initialData,
      placement: 'top-right',
      customText: false,
      bordered: true,
      groupColumn: false,
      displayColumns: staticColumn.concat(['channel', 'detail.email', 'createTime']),
      columns: [
        { colKey: 'applicant', title: '\u7533\u8BF7\u4EBA', width: '100' },
        {
          colKey: 'status',
          title: '\u7533\u8BF7\u72B6\u6001',
          width: '150',
          cell: (h, { row }) => {
            const statusNameListMap = {
              0: { label: '\u5BA1\u6279\u901A\u8FC7', theme: 'success', icon: <CheckCircleFilledIcon /> },
              1: { label: '\u5BA1\u6279\u5931\u8D25', theme: 'danger', icon: <CloseCircleFilledIcon /> },
              2: { label: '\u5BA1\u6279\u8FC7\u671F', theme: 'warning', icon: <ErrorCircleFilledIcon /> },
            };
            return (
              <t-tag shape="round" theme={statusNameListMap[row.status].theme} variant="light-outline">
                {statusNameListMap[row.status].icon}
                {statusNameListMap[row.status].label}
              </t-tag>
            );
          },
        },
        { colKey: 'channel', title: '\u7B7E\u7F72\u65B9\u5F0F', width: '120' },
        { colKey: 'detail.email', title: '\u90AE\u7BB1\u5730\u5740', ellipsis: true },
        { colKey: 'createTime', title: '\u7533\u8BF7\u65F6\u95F4' },
        { colKey: 'data1', title: 'Data A', align: 'right' },
        { colKey: 'data2', title: 'Data B', align: 'right' },
        { colKey: 'data3', title: 'Data C', align: 'right' },
        { colKey: 'data4', title: 'Data D', align: 'right' },
      ],
    };
  },

  computed: {
    columnControllerConfig() {
      return {
        placement: this.placement,
        fields: ['channel', 'detail.email', 'createTime', 'data1', 'data2', 'data3', 'data4'],
        // \u5F39\u6846\u7EC4\u4EF6\u5C5E\u6027\u900F\u4F20
        dialogProps: { preventScrollThrough: true },
        // \u5217\u914D\u7F6E\u6309\u94AE\u5C5E\u6027\u5934\u50CF
        buttonProps: this.customText ? { content: '\u663E\u793A\u5217\u63A7\u5236', theme: 'primary', variant: 'base' } : undefined,
        // \u6570\u636E\u5B57\u6BB5\u5206\u7EC4\u663E\u793A
        groupColumns: this.groupColumn ? GROUP_COLUMNS : undefined,
      };
    },
  },

  methods: {
    onColumnChange(params) {
      console.log(params);
    },
    onDragSortChange({ newData }) {
      this.columns = newData;
    },
  },
};
<\/script>
`,J=`<template>
  <div class="tdesign-demo-block-column-large tdesign-demo__table">
    <!-- \u6309\u94AE\u64CD\u4F5C\u533A\u57DF -->
    <t-space direction="vertical">
      <t-radio-group v-model="placement" variant="default-filled">
        <t-radio-button value="top-left">\u5DE6\u4E0A\u89D2</t-radio-button>
        <t-radio-button value="top-right">\u53F3\u4E0A\u89D2</t-radio-button>
        <t-radio-button value="bottom-left">\u5DE6\u4E0B\u89D2</t-radio-button>
        <t-radio-button value="bottom-right">\u53F3\u4E0B\u89D2</t-radio-button>
      </t-radio-group>

      <t-space>
        <t-checkbox v-model="groupColumn">\u5206\u7EC4\u5217\u914D\u7F6E</t-checkbox>
        <t-checkbox v-model="bordered">\u662F\u5426\u663E\u793A\u8FB9\u6846</t-checkbox>
        <t-checkbox v-model="customText" style="margin-left: 16px">\u81EA\u5B9A\u4E49\u5217\u914D\u7F6E\u6309\u94AE</t-checkbox>
      </t-space>
    </t-space>

    <!-- 1. defaultDisplayColumns = ['platform'] \u8BBE\u7F6E\u9ED8\u8BA4\u663E\u793A\u54EA\u4E9B\u5217\uFF0C\u4EC5\u7B2C\u4E00\u6B21\u6709\u6548 -->
    <!-- 2. displayColumns \u52A8\u6001\u8BBE\u7F6E\u663E\u793A\u54EA\u4E9B\u5217\uFF0C\u53D7\u63A7\u5C5E\u6027\uFF0C\u652F\u6301 displayColumns.sync \u8BED\u6CD5\u7CD6 -->
    <!-- 3. onDisplayColumnsChange \u5F53\u524D\u663E\u793A\u5217\u53D1\u751F\u53D8\u5316\u65F6\u89E6\u53D1 -->
    <!-- 4. \u5982\u679C\u5E0C\u671B\u9876\u90E8\u5185\u5BB9 \u548C \u5217\u914D\u7F6E\u6309\u94AE \u4FDD\u6301\u5728\u540C\u4E00\u884C\uFF0C\u53EF\u5C06\u5185\u5BB9\u653E\u5728 topContent\uFF0C\u5E76\u8C03\u6574\u6309\u94AE\u7236\u5143\u7D20\u5BBD\u5EA6(CSS) -->
    <!-- :locale="tableLocale" \u53EF\u7528\u4E8E\u5B9A\u4E49\u5217\u914D\u7F6E\u5F39\u6846\u6240\u6709\u6587\u672C\u4FE1\u606F -->
    <t-table
      rowKey="index"
      :data="data"
      :columns="columns"
      :displayColumns.sync="displayColumns"
      :column-controller="columnControllerConfig"
      :pagination="{ defaultPageSize: 5, defaultCurrent: 1, total: 100 }"
      :bordered="bordered"
      drag-sort="col"
      stripe
      lazyLoad
      resizable
      @drag-sort="onDragSortChange"
      @column-change="onColumnChange"
    ></t-table>

    <!-- \u975E\u53D7\u63A7\u7528\u6CD5\uFF0C\u793A\u4F8B\u4EE3\u7801\u6709\u6548\uFF0C\u52FF\u5220 -->
    <!-- <t-table
      rowKey="index"
      :data="data"
      :columns="columns"
      :columnController="{ displayType: 'fixed-width', fields: ['platform', 'type', 'default'] }"
      tableLayout="auto"
      stripe
      bordered
      @column-change="onColumnChange"
    ></t-table> -->
  </div>
</template>
<script setup lang="jsx">
import { ref, computed } from 'vue';
import { ErrorCircleFilledIcon, CheckCircleFilledIcon, CloseCircleFilledIcon } from 'tdesign-icons-vue';

const initialData = [];
for (let i = 0; i < 100; i++) {
  initialData.push({
    index: i + 1,
    applicant: ['\u8D3E\u660E', '\u5F20\u4E09', '\u738B\u82B3'][i % 3],
    status: i % 3,
    channel: ['\u7535\u5B50\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72'][i % 3],
    detail: {
      email: ['w.cezkdudy@lhll.au', 'r.nmgw@peurezgn.sl', 'p.cumx@rampblpa.ru'][i % 3],
    },
    matters: ['\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528', 'algolia \u670D\u52A1\u62A5\u9500', '\u76F8\u5173\u5468\u8FB9\u5236\u4F5C\u8D39', '\u6FC0\u52B1\u5956\u54C1\u5FEB\u9012\u8D39'][i % 4],
    time: [2, 3, 1, 4][i % 4],
    createTime: ['2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01'][i % 4],
    data1: '123',
    data2: '23414',
    data3: '52435',
    data4: '132434',
  });
}
const staticColumn = ['applicant', 'status'];
const GROUP_COLUMNS = [
  {
    label: '\u6307\u6807\u7EF4\u5EA6',
    value: 'index',
    columns: ['applicant', 'status', 'channel'],
  },
  {
    label: '\u6B21\u8981\u7EF4\u5EA6',
    value: 'secondary',
    columns: ['detail.email', 'createTime'],
  },
  {
    label: '\u6570\u636E\u7EF4\u5EA6',
    value: 'data',
    columns: ['data1', 'data2', 'data3', 'data4'],
  },
];
const data = ref(initialData);
const placement = ref('top-right');
const customText = ref(false);
const bordered = ref(true);
const groupColumn = ref(false);
const displayColumns = ref(staticColumn.concat(['channel', 'detail.email', 'createTime']));
const columns = ref([
  {
    colKey: 'applicant',
    title: '\u7533\u8BF7\u4EBA',
    width: '100',
  },
  {
    colKey: 'status',
    title: '\u7533\u8BF7\u72B6\u6001',
    width: '150',
    cell: (h, { row }) => {
      const statusNameListMap = {
        0: {
          label: '\u5BA1\u6279\u901A\u8FC7',
          theme: 'success',
          icon: <CheckCircleFilledIcon />,
        },
        1: {
          label: '\u5BA1\u6279\u5931\u8D25',
          theme: 'danger',
          icon: <CloseCircleFilledIcon />,
        },
        2: {
          label: '\u5BA1\u6279\u8FC7\u671F',
          theme: 'warning',
          icon: <ErrorCircleFilledIcon />,
        },
      };
      return (
        <t-tag shape="round" theme={statusNameListMap[row.status].theme} variant="light-outline">
          {statusNameListMap[row.status].icon}
          {statusNameListMap[row.status].label}
        </t-tag>
      );
    },
  },
  {
    colKey: 'channel',
    title: '\u7B7E\u7F72\u65B9\u5F0F',
    width: '120',
  },
  {
    colKey: 'detail.email',
    title: '\u90AE\u7BB1\u5730\u5740',
    ellipsis: true,
  },
  {
    colKey: 'createTime',
    title: '\u7533\u8BF7\u65F6\u95F4',
  },
  {
    colKey: 'data1',
    title: 'Data A',
    align: 'right',
  },
  {
    colKey: 'data2',
    title: 'Data B',
    align: 'right',
  },
  {
    colKey: 'data3',
    title: 'Data C',
    align: 'right',
  },
  {
    colKey: 'data4',
    title: 'Data D',
    align: 'right',
  },
]);
const columnControllerConfig = computed(() => ({
  placement: placement.value,
  fields: ['channel', 'detail.email', 'createTime', 'data1', 'data2', 'data3', 'data4'],
  // \u5F39\u6846\u7EC4\u4EF6\u5C5E\u6027\u900F\u4F20
  dialogProps: {
    preventScrollThrough: true,
  },
  // \u5217\u914D\u7F6E\u6309\u94AE\u5C5E\u6027\u5934\u50CF
  buttonProps: customText.value
    ? {
      content: '\u663E\u793A\u5217\u63A7\u5236',
      theme: 'primary',
      variant: 'base',
    }
    : undefined,
  // \u6570\u636E\u5B57\u6BB5\u5206\u7EC4\u663E\u793A
  groupColumns: groupColumn.value ? GROUP_COLUMNS : undefined,
}));
const onColumnChange = (params) => {
  console.log(params);
};
const onDragSortChange = ({ newData }) => {
  columns.value = newData;
};
<\/script>
`,X=`<template>
  <div class="tdesign-demo-block-column-large tdesign-demo__table">
    <!-- \u6309\u94AE\u64CD\u4F5C\u533A\u57DF -->
    <t-space align="center">
      <t-button @click="columnControllerVisible = true">\u663E\u793A\u5217\u914D\u7F6E\u5F39\u7A97</t-button>
      <t-checkbox v-model="groupColumn">\u5206\u7EC4\u5217\u914D\u7F6E</t-checkbox>
    </t-space>

    <!-- 1. defaultDisplayColumns = ['platform'] \u8BBE\u7F6E\u9ED8\u8BA4\u663E\u793A\u54EA\u4E9B\u5217\uFF0C\u4EC5\u7B2C\u4E00\u6B21\u6709\u6548 -->
    <!-- 2. displayColumns \u52A8\u6001\u8BBE\u7F6E\u663E\u793A\u54EA\u4E9B\u5217\uFF0C\u53D7\u63A7\u5C5E\u6027\uFF0C\u652F\u6301 displayColumns.sync \u8BED\u6CD5\u7CD6 -->
    <!-- 3. onDisplayColumnsChange \u5F53\u524D\u663E\u793A\u5217\u53D1\u751F\u53D8\u5316\u65F6\u89E6\u53D1 -->
    <!-- 4. \u5F00\u542F resizable \u4E4B\u540E\uFF0C\u8BF7\u52FF\u4F7F\u7528 tableLayout: auto -->
    <!-- :locale="tableLocale" \u53EF\u7528\u4E8E\u5B9A\u4E49\u5217\u914D\u7F6E\u5F39\u6846\u6240\u6709\u6587\u672C\u4FE1\u606F -->
    <t-table
      rowKey="index"
      :data="data"
      :columns="columns"
      :displayColumns.sync="displayColumns"
      :columnControllerVisible.sync="columnControllerVisible"
      :column-controller="columnControllerConfig"
      :locale="tableLocale"
      :pagination="{ defaultPageSize: 5, defaultCurrent: 1, total: 100 }"
      stripe
      resizable
      lazyLoad
      @column-resize-change="onColumnResizeChange"
      @column-change="onColumnChange"
    >
      <template #columnControllerTopContent>
        <div>You can custom top content of column controller dialog.</div>
      </template>
      <template #columnControllerBottomContent>
        <div>You can custom bottom content of column controller dialog.</div>
      </template>
    </t-table>
    <!-- :on-column-resize-change="onColumnResizeChange" -->
  </div>
</template>
<script lang="jsx">
import { ErrorCircleFilledIcon, CheckCircleFilledIcon, CloseCircleFilledIcon } from 'tdesign-icons-vue';

const initialData = [];
for (let i = 0; i < 100; i++) {
  initialData.push({
    index: i + 1,
    applicant: ['\u8D3E\u660E', '\u5F20\u4E09', '\u738B\u82B3'][i % 3],
    status: i % 3,
    channel: ['\u7535\u5B50\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72'][i % 3],
    detail: {
      email: ['w.cezkdudy@lhll.au', 'r.nmgw@peurezgn.sl', 'p.cumx@rampblpa.ru'][i % 3],
    },
    matters: ['\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528', 'algolia \u670D\u52A1\u62A5\u9500', '\u76F8\u5173\u5468\u8FB9\u5236\u4F5C\u8D39', '\u6FC0\u52B1\u5956\u54C1\u5FEB\u9012\u8D39'][i % 4],
    time: [2, 3, 1, 4][i % 4],
    createTime: ['2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01'][i % 4],
    data1: '123',
    data2: '23414',
    data3: '52435',
    data4: '132434',
  });
}

const GROUP_COLUMNS = [
  {
    label: '\u6307\u6807\u7EF4\u5EA6',
    value: 'index',
    columns: ['applicant', 'status', 'channel'],
  },
  {
    label: '\u6B21\u8981\u7EF4\u5EA6',
    value: 'secondary',
    columns: ['detail.email', 'createTime'],
  },
  {
    label: '\u6570\u636E\u7EF4\u5EA6',
    value: 'data',
    columns: ['data1', 'data2', 'data3', 'data4'],
  },
];

const staticColumn = ['applicant', 'status'];
export default {
  data() {
    return {
      data: initialData,
      columnControllerVisible: false,
      tableLocale: {
        columnConfigDescriptionText: 'Please check columns need to show in table.',
      },
      // show columns in controller dialog by group
      groupColumn: true,
      displayColumns: staticColumn.concat(['channel', 'detail.email', 'createTime']),
      columns: [
        { colKey: 'applicant', title: '\u7533\u8BF7\u4EBA', width: '100' },
        {
          colKey: 'status',
          title: '\u7533\u8BF7\u72B6\u6001',
          width: '150',
          cell: (h, { row }) => {
            const statusNameListMap = {
              0: { label: '\u5BA1\u6279\u901A\u8FC7', theme: 'success', icon: <CheckCircleFilledIcon /> },
              1: { label: '\u5BA1\u6279\u5931\u8D25', theme: 'danger', icon: <CloseCircleFilledIcon /> },
              2: { label: '\u5BA1\u6279\u8FC7\u671F', theme: 'warning', icon: <ErrorCircleFilledIcon /> },
            };
            return (
              <t-tag shape="round" theme={statusNameListMap[row.status].theme} variant="light-outline">
                {statusNameListMap[row.status].icon}
                {statusNameListMap[row.status].label}
              </t-tag>
            );
          },
        },
        { colKey: 'channel', title: '\u7B7E\u7F72\u65B9\u5F0F', width: '120' },
        { colKey: 'detail.email', title: '\u90AE\u7BB1\u5730\u5740', ellipsis: true },
        { colKey: 'createTime', title: '\u7533\u8BF7\u65F6\u95F4' },
        { colKey: 'data1', title: 'Data A', align: 'right' },
        { colKey: 'data2', title: 'Data B', align: 'right' },
        { colKey: 'data3', title: 'Data C', align: 'right' },
        { colKey: 'data4', title: 'Data D', align: 'right' },
      ],
    };
  },

  computed: {
    columnControllerConfig() {
      return {
        // \u9690\u85CF\u7EC4\u4EF6\u5185\u90E8\u7684 \u5217\u914D\u7F6E\u6309\u94AE
        hideTriggerButton: true,
        // \u5141\u8BB8\u54EA\u4E9B\u5217\u53C2\u4E0E\u663E\u793A-\u9690\u85CF\u63A7\u5236
        fields: ['channel', 'detail.email', 'createTime', 'data1', 'data2', 'data3', 'data4'],
        // \u900F\u4F20\u5F39\u6846\u7EC4\u4EF6\u5168\u90E8\u5C5E\u6027
        dialogProps: { preventScrollThrough: true },
        // \u6570\u636E\u5B57\u6BB5\u5206\u7EC4\u663E\u793A
        groupColumns: this.groupColumn ? GROUP_COLUMNS : undefined,
      };
    },
  },

  methods: {
    onColumnChange(params) {
      console.log(params);
    },
    onColumnResizeChange(columnsWidth) {
      // \u6CE8\u610F\uFF1A\u5BBD\u5EA6\u53EF\u80FD\u5B58\u5728\u5C0F\u6570\u70B9\uFF0C\u6839\u636E\u5B9E\u9645\u9700\u6C42\u5904\u7406\u4FDD\u5B58\u6570\u503C
      console.log(columnsWidth);
    },
  },
};
<\/script>
`,Z=`<template>
  <div class="tdesign-demo-block-column-large tdesign-demo__table">
    <!-- \u6309\u94AE\u64CD\u4F5C\u533A\u57DF -->
    <t-space align="center">
      <t-button @click="columnControllerVisible = true">\u663E\u793A\u5217\u914D\u7F6E\u5F39\u7A97</t-button>
      <t-checkbox v-model="groupColumn">\u5206\u7EC4\u5217\u914D\u7F6E</t-checkbox>
    </t-space>

    <!-- 1. defaultDisplayColumns = ['platform'] \u8BBE\u7F6E\u9ED8\u8BA4\u663E\u793A\u54EA\u4E9B\u5217\uFF0C\u4EC5\u7B2C\u4E00\u6B21\u6709\u6548 -->
    <!-- 2. displayColumns \u52A8\u6001\u8BBE\u7F6E\u663E\u793A\u54EA\u4E9B\u5217\uFF0C\u53D7\u63A7\u5C5E\u6027\uFF0C\u652F\u6301 displayColumns.sync \u8BED\u6CD5\u7CD6 -->
    <!-- 3. onDisplayColumnsChange \u5F53\u524D\u663E\u793A\u5217\u53D1\u751F\u53D8\u5316\u65F6\u89E6\u53D1 -->
    <!-- 4. \u5F00\u542F resizable \u4E4B\u540E\uFF0C\u8BF7\u52FF\u4F7F\u7528 tableLayout: auto -->
    <!-- :locale="tableLocale" \u53EF\u7528\u4E8E\u5B9A\u4E49\u5217\u914D\u7F6E\u5F39\u6846\u6240\u6709\u6587\u672C\u4FE1\u606F -->
    <t-table
      rowKey="index"
      :data="data"
      :columns="columns"
      :displayColumns.sync="displayColumns"
      :columnControllerVisible.sync="columnControllerVisible"
      :column-controller="columnControllerConfig"
      :locale="tableLocale"
      :pagination="{ defaultPageSize: 5, defaultCurrent: 1, total: 100 }"
      stripe
      resizable
      lazyLoad
      @column-resize-change="onColumnResizeChange"
      @column-change="onColumnChange"
    >
      <template #columnControllerTopContent>
        <div>You can custom top content of column controller dialog.</div>
      </template>
      <template #columnControllerBottomContent>
        <div>You can custom bottom content of column controller dialog.</div>
      </template>
    </t-table>
    <!-- :on-column-resize-change="onColumnResizeChange" -->
  </div>
</template>
<script setup lang="jsx">
import { ref, reactive, computed } from 'vue';
import { ErrorCircleFilledIcon, CheckCircleFilledIcon, CloseCircleFilledIcon } from 'tdesign-icons-vue';

const initialData = [];
for (let i = 0; i < 100; i++) {
  initialData.push({
    index: i + 1,
    applicant: ['\u8D3E\u660E', '\u5F20\u4E09', '\u738B\u82B3'][i % 3],
    status: i % 3,
    channel: ['\u7535\u5B50\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72'][i % 3],
    detail: {
      email: ['w.cezkdudy@lhll.au', 'r.nmgw@peurezgn.sl', 'p.cumx@rampblpa.ru'][i % 3],
    },
    matters: ['\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528', 'algolia \u670D\u52A1\u62A5\u9500', '\u76F8\u5173\u5468\u8FB9\u5236\u4F5C\u8D39', '\u6FC0\u52B1\u5956\u54C1\u5FEB\u9012\u8D39'][i % 4],
    time: [2, 3, 1, 4][i % 4],
    createTime: ['2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01'][i % 4],
    data1: '123',
    data2: '23414',
    data3: '52435',
    data4: '132434',
  });
}
const GROUP_COLUMNS = [
  {
    label: '\u6307\u6807\u7EF4\u5EA6',
    value: 'index',
    columns: ['applicant', 'status', 'channel'],
  },
  {
    label: '\u6B21\u8981\u7EF4\u5EA6',
    value: 'secondary',
    columns: ['detail.email', 'createTime'],
  },
  {
    label: '\u6570\u636E\u7EF4\u5EA6',
    value: 'data',
    columns: ['data1', 'data2', 'data3', 'data4'],
  },
];
const staticColumn = ['applicant', 'status'];
const data = ref(initialData);
const columnControllerVisible = ref(false);
const tableLocale = reactive({
  columnConfigDescriptionText: 'Please check columns need to show in table.',
});
// show columns in controller dialog by group
const groupColumn = ref(true);
const displayColumns = ref(staticColumn.concat(['channel', 'detail.email', 'createTime']));
const columns = ref([
  {
    colKey: 'applicant',
    title: '\u7533\u8BF7\u4EBA',
    width: '100',
  },
  {
    colKey: 'status',
    title: '\u7533\u8BF7\u72B6\u6001',
    width: '150',
    cell: (h, { row }) => {
      const statusNameListMap = {
        0: {
          label: '\u5BA1\u6279\u901A\u8FC7',
          theme: 'success',
          icon: <CheckCircleFilledIcon />,
        },
        1: {
          label: '\u5BA1\u6279\u5931\u8D25',
          theme: 'danger',
          icon: <CloseCircleFilledIcon />,
        },
        2: {
          label: '\u5BA1\u6279\u8FC7\u671F',
          theme: 'warning',
          icon: <ErrorCircleFilledIcon />,
        },
      };
      return (
        <t-tag shape="round" theme={statusNameListMap[row.status].theme} variant="light-outline">
          {statusNameListMap[row.status].icon}
          {statusNameListMap[row.status].label}
        </t-tag>
      );
    },
  },
  {
    colKey: 'channel',
    title: '\u7B7E\u7F72\u65B9\u5F0F',
    width: '120',
  },
  {
    colKey: 'detail.email',
    title: '\u90AE\u7BB1\u5730\u5740',
    ellipsis: true,
  },
  {
    colKey: 'createTime',
    title: '\u7533\u8BF7\u65F6\u95F4',
  },
  {
    colKey: 'data1',
    title: 'Data A',
    align: 'right',
  },
  {
    colKey: 'data2',
    title: 'Data B',
    align: 'right',
  },
  {
    colKey: 'data3',
    title: 'Data C',
    align: 'right',
  },
  {
    colKey: 'data4',
    title: 'Data D',
    align: 'right',
  },
]);
const columnControllerConfig = computed(() => ({
  // \u9690\u85CF\u7EC4\u4EF6\u5185\u90E8\u7684 \u5217\u914D\u7F6E\u6309\u94AE
  hideTriggerButton: true,
  // \u5141\u8BB8\u54EA\u4E9B\u5217\u53C2\u4E0E\u663E\u793A-\u9690\u85CF\u63A7\u5236
  fields: ['channel', 'detail.email', 'createTime', 'data1', 'data2', 'data3', 'data4'],
  // \u900F\u4F20\u5F39\u6846\u7EC4\u4EF6\u5168\u90E8\u5C5E\u6027
  dialogProps: {
    preventScrollThrough: true,
  },
  // \u6570\u636E\u5B57\u6BB5\u5206\u7EC4\u663E\u793A
  groupColumns: groupColumn.value ? GROUP_COLUMNS : undefined,
}));
const onColumnChange = (params) => {
  console.log(params);
};
const onColumnResizeChange = (columnsWidth) => {
  // \u6CE8\u610F\uFF1A\u5BBD\u5EA6\u53EF\u80FD\u5B58\u5728\u5C0F\u6570\u70B9\uFF0C\u6839\u636E\u5B9E\u9645\u9700\u6C42\u5904\u7406\u4FDD\u5B58\u6570\u503C
  console.log(columnsWidth);
};
<\/script>
`,Q=`<template>
  <div class="tdesign-demo-block-column-large demo-container">
    <div>
      <t-checkbox v-model="hideSortTips"> \u9690\u85CF\u6392\u5E8F\u6587\u672C\u63D0\u793A </t-checkbox>
      <span style="padding-left: 16px; vertical-align: top">\u6392\u5E8F\uFF1A{{ sort }}</span>
    </div>

    <!-- \u975E\u53D7\u63A7\u7528\u6CD5\uFF1A\u4E0D\u9700\u8981\u4F20 sort\uFF0C\u6216\u8005\u53EA\u9700\u8981\u4F20 defaultSort: { sortBy: 'status', descending: true }\uFF09\uFF0CdefaultSort \u4EC5\u7B2C\u4E00\u6B21\u6709\u6548 -->
    <!-- \u975E\u53D7\u63A7\u7528\u6CD5\uFF0C\u793A\u4F8B\u4EE3\u7801\u6709\u6548\uFF0C\u52FF\u5220 -->
    <!-- <t-table rowKey="id" :columns="columns" :data="data" @sort-change="defaultSortChange">
      <template #status="{ row }">
        <p v-if="row.status === 0" class="status">\u5065\u5EB7</p>
        <p v-if="row.status === 1" class="status warning">\u8B66\u544A</p>
        <p v-if="row.status === 2" class="status unhealth">\u5F02\u5E38</p>
      </template>
    </t-table> -->

    <!-- \u53D7\u63A7\u7528\u6CD5\uFF0C\u793A\u4F8B\u4EE3\u7801\u6709\u6548\uFF0C\u52FF\u5220 -->
    <t-table
      rowKey="index"
      :columns="columns"
      :data="data"
      :sort="sort"
      :hideSortTips="hideSortTips"
      :showSortColumnBgColor="true"
      bordered
      lazyLoad
      @sort-change="sortChange"
      @change="onChange"
    >
    </t-table>
  </div>
</template>

<script lang="jsx">
import { CheckCircleFilledIcon, ErrorCircleFilledIcon, CloseCircleFilledIcon } from 'tdesign-icons-vue';

const initialColumns = [
  { colKey: 'applicant', title: '\u7533\u8BF7\u4EBA', width: '100' },
  {
    colKey: 'status',
    title: '\u5BA1\u6279\u72B6\u6001',
    width: '150',
    sortType: 'all',
    sorter: true,
    cell: (h, { row }) => {
      const statusNameListMap = {
        0: { label: '\u5BA1\u6279\u901A\u8FC7', theme: 'success', icon: <CheckCircleFilledIcon /> },
        1: { label: '\u5BA1\u6279\u5931\u8D25', theme: 'danger', icon: <CloseCircleFilledIcon /> },
        2: { label: '\u5BA1\u6279\u8FC7\u671F', theme: 'warning', icon: <ErrorCircleFilledIcon /> },
      };
      return (
        <t-tag shape="round" theme={statusNameListMap[row.status].theme} variant="light-outline">
          {statusNameListMap[row.status].icon}
          {statusNameListMap[row.status].label}
        </t-tag>
      );
    },
  },
  {
    colKey: 'time',
    title: '\u7533\u8BF7\u8017\u65F6(\u5929)',
    width: '140',
    align: 'center',
    sortType: 'all',
    sorter: true,
  },
  { colKey: 'channel', title: '\u7B7E\u7F72\u65B9\u5F0F', width: '120' },
  { colKey: 'createTime', title: '\u7533\u8BF7\u65F6\u95F4' },
];
const initialData = new Array(4).fill(null).map((_, i) => ({
  index: i + 1,
  applicant: ['\u8D3E\u660E', '\u5F20\u4E09', '\u738B\u82B3'][i % 3],
  status: i % 3,
  channel: ['\u7535\u5B50\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72'][i % 3],
  detail: {
    email: ['w.cezkdudy@lhll.au', 'r.nmgw@peurezgn.sl', 'p.cumx@rampblpa.ru'][i % 3],
  },
  matters: ['\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528', 'algolia \u670D\u52A1\u62A5\u9500', '\u76F8\u5173\u5468\u8FB9\u5236\u4F5C\u8D39', '\u6FC0\u52B1\u5956\u54C1\u5FEB\u9012\u8D39'][i % 4],
  time: [2, 3, 1, 4][i % 4],
  createTime: ['2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01'][i % 4],
}));

export default {
  data() {
    return {
      data: initialData,
      columns: initialColumns,
      hideSortTips: false,
      sort: {
        // \u6309\u7167 status \u5B57\u6BB5\u8FDB\u884C\u6392\u5E8F
        sortBy: 'status',
        // \u662F\u5426\u6309\u7167\u964D\u5E8F\u8FDB\u884C\u6392\u5E8F
        descending: true,
      },
    };
  },
  methods: {
    sortChange(sortInfo) {
      // \u5BF9\u4E8E\u53D7\u63A7\u5C5E\u6027\u800C\u8A00\uFF0C\u8FD9\u91CC\u7684\u8D4B\u503C\u5F88\u91CD\u8981\uFF0C\u4E0D\u53EF\u7F3A\u5C11
      this.sort = sortInfo;
      this.request(sortInfo);
      console.log('sort-change', sortInfo);
    },
    // \u6392\u5E8F\u3001\u5206\u9875\u3001\u8FC7\u6EE4\u7B49\u53D1\u751F\u53D8\u5316\u65F6\u4F1A\u89E6\u53D1 change \u4E8B\u4EF6
    onChange(info, context) {
      console.log('change', info, context);
    },
    // \u975E\u53D7\u63A7\u7528\u6CD5\uFF0C\u4E0D\u9700\u8981\u4F20\u9012 sort \u7ED9 Table \u7EC4\u4EF6\uFF0C\u56E0\u800C\u6B64\u5904\u65E0\u9700\u6267\u884C this.sort = sort \u8FDB\u884C\u8D4B\u503C
    // defaultSortChange(sort) {
    //   this.request(sort);
    // },
    request(sort) {
      // \u6A21\u62DF\u5F02\u6B65\u8BF7\u6C42\uFF0C\u8FDB\u884C\u6570\u636E\u6392\u5E8F
      const timer = setTimeout(() => {
        if (sort) {
          this.data = initialData
            .concat()
            .sort((a, b) => (sort.descending ? b[sort.sortBy] - a[sort.sortBy] : a[sort.sortBy] - b[sort.sortBy]));
        } else {
          this.data = initialData.concat();
        }
        clearTimeout(timer);
      }, 100);
    },
  },
};
<\/script>
<style lang="less">
/deep/ [class*='t-table-expandable-icon-cell'] .t-icon {
  background-color: transparent;
}
</style>
`,nn=`<template>
  <div class="tdesign-demo-block-column-large demo-container">
    <div>
      <t-checkbox v-model="hideSortTips"> \u9690\u85CF\u6392\u5E8F\u6587\u672C\u63D0\u793A </t-checkbox>
      <span style="padding-left: 16px; vertical-align: top">\u6392\u5E8F\uFF1A{{ sort }}</span>
    </div>

    <!-- \u975E\u53D7\u63A7\u7528\u6CD5\uFF1A\u4E0D\u9700\u8981\u4F20 sort\uFF0C\u6216\u8005\u53EA\u9700\u8981\u4F20 defaultSort: { sortBy: 'status', descending: true }\uFF09\uFF0CdefaultSort \u4EC5\u7B2C\u4E00\u6B21\u6709\u6548 -->
    <!-- \u975E\u53D7\u63A7\u7528\u6CD5\uFF0C\u793A\u4F8B\u4EE3\u7801\u6709\u6548\uFF0C\u52FF\u5220 -->
    <!-- <t-table rowKey="id" :columns="columns" :data="data" @sort-change="defaultSortChange">
      <template #status="{ row }">
        <p v-if="row.status === 0" class="status">\u5065\u5EB7</p>
        <p v-if="row.status === 1" class="status warning">\u8B66\u544A</p>
        <p v-if="row.status === 2" class="status unhealth">\u5F02\u5E38</p>
      </template>
    </t-table> -->

    <!-- \u53D7\u63A7\u7528\u6CD5\uFF0C\u793A\u4F8B\u4EE3\u7801\u6709\u6548\uFF0C\u52FF\u5220 -->
    <t-table
      rowKey="index"
      :columns="columns"
      :data="data"
      :sort="sort"
      :hideSortTips="hideSortTips"
      :showSortColumnBgColor="true"
      bordered
      lazyLoad
      @sort-change="sortChange"
      @change="onChange"
    >
    </t-table>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue';
import { CheckCircleFilledIcon, ErrorCircleFilledIcon, CloseCircleFilledIcon } from 'tdesign-icons-vue';

const initialColumns = [
  {
    colKey: 'applicant',
    title: '\u7533\u8BF7\u4EBA',
    width: '100',
  },
  {
    colKey: 'status',
    title: '\u5BA1\u6279\u72B6\u6001',
    width: '150',
    sortType: 'all',
    sorter: true,
    cell: (h, { row }) => {
      const statusNameListMap = {
        0: {
          label: '\u5BA1\u6279\u901A\u8FC7',
          theme: 'success',
          icon: <CheckCircleFilledIcon />,
        },
        1: {
          label: '\u5BA1\u6279\u5931\u8D25',
          theme: 'danger',
          icon: <CloseCircleFilledIcon />,
        },
        2: {
          label: '\u5BA1\u6279\u8FC7\u671F',
          theme: 'warning',
          icon: <ErrorCircleFilledIcon />,
        },
      };
      return (
        <t-tag shape="round" theme={statusNameListMap[row.status].theme} variant="light-outline">
          {statusNameListMap[row.status].icon}
          {statusNameListMap[row.status].label}
        </t-tag>
      );
    },
  },
  {
    colKey: 'time',
    title: '\u7533\u8BF7\u8017\u65F6(\u5929)',
    width: '140',
    align: 'center',
    sortType: 'all',
    sorter: true,
  },
  {
    colKey: 'channel',
    title: '\u7B7E\u7F72\u65B9\u5F0F',
    width: '120',
  },
  {
    colKey: 'createTime',
    title: '\u7533\u8BF7\u65F6\u95F4',
  },
];
const initialData = new Array(4).fill(null).map((_, i) => ({
  index: i + 1,
  applicant: ['\u8D3E\u660E', '\u5F20\u4E09', '\u738B\u82B3'][i % 3],
  status: i % 3,
  channel: ['\u7535\u5B50\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72'][i % 3],
  detail: {
    email: ['w.cezkdudy@lhll.au', 'r.nmgw@peurezgn.sl', 'p.cumx@rampblpa.ru'][i % 3],
  },
  matters: ['\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528', 'algolia \u670D\u52A1\u62A5\u9500', '\u76F8\u5173\u5468\u8FB9\u5236\u4F5C\u8D39', '\u6FC0\u52B1\u5956\u54C1\u5FEB\u9012\u8D39'][i % 4],
  time: [2, 3, 1, 4][i % 4],
  createTime: ['2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01'][i % 4],
}));
const data = ref(initialData);
const columns = ref(initialColumns);
const hideSortTips = ref(false);
const sort = ref({
  // \u6309\u7167 status \u5B57\u6BB5\u8FDB\u884C\u6392\u5E8F
  sortBy: 'status',
  // \u662F\u5426\u6309\u7167\u964D\u5E8F\u8FDB\u884C\u6392\u5E8F
  descending: true,
});
const request = (sort) => {
  // \u6A21\u62DF\u5F02\u6B65\u8BF7\u6C42\uFF0C\u8FDB\u884C\u6570\u636E\u6392\u5E8F
  const timer = setTimeout(() => {
    if (sort) {
      data.value = initialData
        .concat()
        .sort((a, b) => (sort.descending ? b[sort.sortBy] - a[sort.sortBy] : a[sort.sortBy] - b[sort.sortBy]));
    } else {
      data.value = initialData.concat();
    }
    clearTimeout(timer);
  }, 100);
};
const sortChange = (sortInfo) => {
  // \u5BF9\u4E8E\u53D7\u63A7\u5C5E\u6027\u800C\u8A00\uFF0C\u8FD9\u91CC\u7684\u8D4B\u503C\u5F88\u91CD\u8981\uFF0C\u4E0D\u53EF\u7F3A\u5C11
  sort.value = sortInfo;
  request(sortInfo);
  console.log('sort-change', sortInfo);
};
// \u6392\u5E8F\u3001\u5206\u9875\u3001\u8FC7\u6EE4\u7B49\u53D1\u751F\u53D8\u5316\u65F6\u4F1A\u89E6\u53D1 change \u4E8B\u4EF6
const onChange = (info, context) => {
  console.log('change', info, context);
};
// \u975E\u53D7\u63A7\u7528\u6CD5\uFF0C\u4E0D\u9700\u8981\u4F20\u9012 sort \u7ED9 Table \u7EC4\u4EF6\uFF0C\u56E0\u800C\u6B64\u5904\u65E0\u9700\u6267\u884C this.sort = sort \u8FDB\u884C\u8D4B\u503C
// const defaultSortChange = (sort) => {
//   request(sort);
// };
<\/script>
<style lang="less">
/deep/ [class*='t-table-expandable-icon-cell'] .t-icon {
  background-color: transparent;
}
</style>
`,en=`<template>
  <div class="demo-container">
    <div class="item">
      <p style="margin-left: 24px">\u6392\u5E8F\uFF1A{{ sort }}</p>
      <br />
      <!-- \u652F\u6301\u53D7\u63A7\u7528\u6CD5 \uFF0C\u4E5F\u652F\u6301\u975E\u53D7\u63A7\u7528\u6CD5 -->
      <t-table
        rowKey="index"
        :columns="columns"
        :data="data"
        :sort="sort"
        @sort-change="sortChange"
        multipleSort
        lazyLoad
      >
        <template #status="{ row }">
          <p v-if="row.status === 0" class="status">\u5065\u5EB7</p>
          <p v-if="row.status === 1" class="status warning">\u8B66\u544A</p>
          <p v-if="row.status === 2" class="status unhealth">\u5F02\u5E38</p>
        </template>
      </t-table>
    </div>
  </div>
</template>

<script lang="jsx">
import { CheckCircleFilledIcon, ErrorCircleFilledIcon, CloseCircleFilledIcon } from 'tdesign-icons-vue';

const initialColumns = [
  { colKey: 'applicant', title: '\u7533\u8BF7\u4EBA', width: '100' },
  {
    colKey: 'status',
    title: '\u7533\u8BF7\u72B6\u6001',
    width: '150',
    sortType: 'all',
    sorter: true,
    cell: (h, { row }) => {
      const statusNameListMap = {
        0: { label: '\u5BA1\u6279\u901A\u8FC7', theme: 'success', icon: <CheckCircleFilledIcon /> },
        1: { label: '\u5BA1\u6279\u5931\u8D25', theme: 'danger', icon: <CloseCircleFilledIcon /> },
        2: { label: '\u5BA1\u6279\u8FC7\u671F', theme: 'warning', icon: <ErrorCircleFilledIcon /> },
      };
      return (
        <t-tag shape="round" theme={statusNameListMap[row.status].theme} variant="light-outline">
          {statusNameListMap[row.status].icon}
          {statusNameListMap[row.status].label}
        </t-tag>
      );
    },
  },
  {
    colKey: 'time',
    title: '\u7533\u8BF7\u8017\u65F6(\u5929)',
    align: 'center',
    width: '140',
    sortType: 'all',
    sorter: true,
  },
  { colKey: 'channel', title: '\u7B7E\u7F72\u65B9\u5F0F', width: '120' },
  { colKey: 'detail.email', title: '\u90AE\u7BB1\u5730\u5740', ellipsis: true },
  { colKey: 'createTime', title: '\u7533\u8BF7\u65F6\u95F4' },
];

const initialData = [];
for (let i = 0; i < 5; i++) {
  initialData.push({
    index: i + 1,
    applicant: ['\u8D3E\u660E', '\u5F20\u4E09', '\u738B\u82B3'][i % 3],
    status: i % 3,
    channel: ['\u7535\u5B50\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72'][i % 3],
    detail: {
      email: ['w.cezkdudy@lhll.au', 'r.nmgw@peurezgn.sl', 'p.cumx@rampblpa.ru'][i % 3],
    },
    matters: ['\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528', 'algolia \u670D\u52A1\u62A5\u9500', '\u76F8\u5173\u5468\u8FB9\u5236\u4F5C\u8D39', '\u6FC0\u52B1\u5956\u54C1\u5FEB\u9012\u8D39'][i % 4],
    time: [2, 3, 1, 4][i % 4],
    createTime: ['2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01'][i % 4],
  });
}

export default {
  data() {
    return {
      data: initialData,
      columns: initialColumns,
      sort: [
        {
          sortBy: 'status',
          descending: true,
        },
        {
          sortBy: 'time',
          descending: false,
        },
      ],
    };
  },
  methods: {
    sortChange(val) {
      this.sort = val;
      // Request: \u53D1\u8D77\u8FDC\u7A0B\u8BF7\u6C42\u8FDB\u884C\u6392\u5E8F
      console.log('\u53D1\u8D77\u8FDC\u7A0B\u8BF7\u6C42\u8FDB\u884C\u6392\u5E8F\uFF08\u672A\u6A21\u62DF\u8BF7\u6C42\u6570\u636E\uFF09');
    },
  },
};
<\/script>
<style lang="less">
/deep/ [class*='t-table-expandable-icon-cell'] .t-icon {
  background-color: transparent;
}
.demo-container {
  .title {
    font-size: 14px;
    line-height: 28px;
    display: block;
    margin: 10px 0;
    i {
      font-style: normal;
    }
  }
}
</style>
`,tn=`<template>
  <div class="demo-container">
    <div class="item">
      <p style="margin-left: 24px">\u6392\u5E8F\uFF1A{{ sort }}</p>
      <br />
      <!-- \u652F\u6301\u53D7\u63A7\u7528\u6CD5 \uFF0C\u4E5F\u652F\u6301\u975E\u53D7\u63A7\u7528\u6CD5 -->
      <t-table
        rowKey="index"
        :columns="columns"
        :data="data"
        :sort="sort"
        @sort-change="sortChange"
        multipleSort
        lazyLoad
      >
        <template #status="{ row }">
          <p v-if="row.status === 0" class="status">\u5065\u5EB7</p>
          <p v-if="row.status === 1" class="status warning">\u8B66\u544A</p>
          <p v-if="row.status === 2" class="status unhealth">\u5F02\u5E38</p>
        </template>
      </t-table>
    </div>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue';
import { CheckCircleFilledIcon, ErrorCircleFilledIcon, CloseCircleFilledIcon } from 'tdesign-icons-vue';

const initialColumns = [
  {
    colKey: 'applicant',
    title: '\u7533\u8BF7\u4EBA',
    width: '100',
  },
  {
    colKey: 'status',
    title: '\u7533\u8BF7\u72B6\u6001',
    width: '150',
    sortType: 'all',
    sorter: true,
    cell: (h, { row }) => {
      const statusNameListMap = {
        0: {
          label: '\u5BA1\u6279\u901A\u8FC7',
          theme: 'success',
          icon: <CheckCircleFilledIcon />,
        },
        1: {
          label: '\u5BA1\u6279\u5931\u8D25',
          theme: 'danger',
          icon: <CloseCircleFilledIcon />,
        },
        2: {
          label: '\u5BA1\u6279\u8FC7\u671F',
          theme: 'warning',
          icon: <ErrorCircleFilledIcon />,
        },
      };
      return (
        <t-tag shape="round" theme={statusNameListMap[row.status].theme} variant="light-outline">
          {statusNameListMap[row.status].icon}
          {statusNameListMap[row.status].label}
        </t-tag>
      );
    },
  },
  {
    colKey: 'time',
    title: '\u7533\u8BF7\u8017\u65F6(\u5929)',
    align: 'center',
    width: '140',
    sortType: 'all',
    sorter: true,
  },
  {
    colKey: 'channel',
    title: '\u7B7E\u7F72\u65B9\u5F0F',
    width: '120',
  },
  {
    colKey: 'detail.email',
    title: '\u90AE\u7BB1\u5730\u5740',
    ellipsis: true,
  },
  {
    colKey: 'createTime',
    title: '\u7533\u8BF7\u65F6\u95F4',
  },
];
const initialData = [];
for (let i = 0; i < 5; i++) {
  initialData.push({
    index: i + 1,
    applicant: ['\u8D3E\u660E', '\u5F20\u4E09', '\u738B\u82B3'][i % 3],
    status: i % 3,
    channel: ['\u7535\u5B50\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72'][i % 3],
    detail: {
      email: ['w.cezkdudy@lhll.au', 'r.nmgw@peurezgn.sl', 'p.cumx@rampblpa.ru'][i % 3],
    },
    matters: ['\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528', 'algolia \u670D\u52A1\u62A5\u9500', '\u76F8\u5173\u5468\u8FB9\u5236\u4F5C\u8D39', '\u6FC0\u52B1\u5956\u54C1\u5FEB\u9012\u8D39'][i % 4],
    time: [2, 3, 1, 4][i % 4],
    createTime: ['2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01'][i % 4],
  });
}
const data = ref(initialData);
const columns = ref(initialColumns);
const sort = ref([
  {
    sortBy: 'status',
    descending: true,
  },
  {
    sortBy: 'time',
    descending: false,
  },
]);
const sortChange = (val) => {
  sort.value = val;
  // Request: \u53D1\u8D77\u8FDC\u7A0B\u8BF7\u6C42\u8FDB\u884C\u6392\u5E8F
  console.log('\u53D1\u8D77\u8FDC\u7A0B\u8BF7\u6C42\u8FDB\u884C\u6392\u5E8F\uFF08\u672A\u6A21\u62DF\u8BF7\u6C42\u6570\u636E\uFF09');
};
<\/script>
<style lang="less">
/deep/ [class*='t-table-expandable-icon-cell'] .t-icon {
  background-color: transparent;
}
.demo-container {
  .title {
    font-size: 14px;
    line-height: 28px;
    display: block;
    margin: 10px 0;
    i {
      font-style: normal;
    }
  }
}
</style>
`,an=`<template>
  <div class="demo-container t-table-demo-sort tdesign-demo__table">
    <!-- t-locale-provider \u4E00\u822C\u7528\u4E8E\u5168\u5C40\u914D\u7F6E\u67D0\u4E2A\u7EC4\u4EF6\u7684\u7279\u6027\uFF0C\u6B64\u4EE3\u7801\u793A\u4F8B \u793A\u8303\u4E86\u5982\u4F55\u5BF9\u8868\u683C\u6392\u5E8F\u56FE\u6807\u8FDB\u884C\u7EDF\u4E00\u914D\u7F6E -->
    <t-config-provider :globalConfig="globalLocale">
      <div class="item">
        <div style="margin: 16px">
          <t-checkbox v-model="allowMultipleSort">\u662F\u5426\u5141\u8BB8\u591A\u5B57\u6BB5\u6392\u5E8F</t-checkbox>
        </div>
        <div style="margin: 16px">\u6392\u5E8F\uFF1A{{ JSON.stringify(sort) || '\u6682\u65E0' }}</div>

        <!-- \u672C\u5730\u6570\u636E\u6392\u5E8F\u6D89\u53CA\u5230 data \u7684\u53D8\u66F4\uFF0C\u76F8\u5BF9\u6BD4\u8F83\u614E\u91CD\uFF0C\u56E0\u6B64\u4EC5\u652F\u6301\u53D7\u63A7\u7528\u6CD5 -->
        <!-- 1. \u652F\u6301\u8BED\u6CD5\u7CD6\uFF1Asort.sync\uFF0C\u6548\u679C\u540C :sort="sort" + onSortChange\u30022. \u652F\u6301\u975E\u53D7\u63A7\u5C5E\u6027 defaultSort -->
        <!-- 2. \u652F\u6301\u8BED\u6CD5\u7CD6\uFF1Adata.sync\uFF0C\u6548\u679C\u540C :data="data" + onDataChange -->
        <!-- \u8BED\u6CD5\u7CD6\u7528\u6CD5\u793A\u4F8B\u4EE3\u7801\uFF0C\u6709\u6548\u52FF\u5220 -->
        <!-- <t-table
          rowKey="id"
          :columns="columns"
          :data.sync="data"
          :sort.sync="sort"
        > -->

        <t-table
          rowKey="index"
          :columns="columns"
          :data="data"
          :sort="sort"
          @sort-change="sortChange"
          @data-change="dataChange"
          :multipleSort="allowMultipleSort"
          lazyLoad
        >
          <icon slot="op-column" name="descending-order" />
          <template #status="{ row }">
            <p class="status" :class="['', 'warning', 'unhealth'][row.status]">
              {{ ['\u5065\u5EB7', '\u8B66\u544A', '\u5F02\u5E38'][row.status] }}
            </p>
          </template>
        </t-table>
      </div>
    </t-config-provider>
  </div>
</template>

<script lang="jsx">
import {
  CaretDownSmallIcon,
  Icon,
  CheckCircleFilledIcon,
  ErrorCircleFilledIcon,
  CloseCircleFilledIcon,
} from 'tdesign-icons-vue';

const initialColumns = [
  { colKey: 'applicant', title: '\u7533\u8BF7\u4EBA', width: '100' },
  {
    colKey: 'status',
    title: '\u7533\u8BF7\u72B6\u6001',
    width: '150',
    sortType: 'all',
    sorter: (a, b) => a.status - b.status,
    cell: (h, { row }) => {
      const statusNameListMap = {
        0: { label: '\u5BA1\u6279\u901A\u8FC7', theme: 'success', icon: <CheckCircleFilledIcon /> },
        1: { label: '\u5BA1\u6279\u5931\u8D25', theme: 'danger', icon: <CloseCircleFilledIcon /> },
        2: { label: '\u5BA1\u6279\u8FC7\u671F', theme: 'warning', icon: <ErrorCircleFilledIcon /> },
      };
      return (
        <t-tag shape="round" theme={statusNameListMap[row.status].theme} variant="light-outline">
          {statusNameListMap[row.status].icon}
          {statusNameListMap[row.status].label}
        </t-tag>
      );
    },
  },
  {
    title: '\u7533\u8BF7\u8017\u65F6(\u5929)',
    colKey: 'time',
    width: '140',
    align: 'center',
    sortType: 'all',
    sorter: (a, b) => a.time - b.time,
  },
  { colKey: 'channel', title: '\u7B7E\u7F72\u65B9\u5F0F', width: '120' },
  { colKey: 'detail.email', title: '\u90AE\u7BB1\u5730\u5740', ellipsis: true },
  { colKey: 'createTime', title: '\u7533\u8BF7\u65F6\u95F4' },
];

// \u672C\u5730\u6570\u636E\u6392\u5E8F\uFF0C\u8868\u793A\u7EC4\u4EF6\u5185\u90E8\u4F1A\u5BF9\u53C2\u6570 data \u8FDB\u884C\u6570\u636E\u6392\u5E8F\u3002\u5982\u679C data \u6570\u636E\u4E3A 10 \u6761\uFF0C\u5C31\u4EC5\u5BF9\u8FD9 10 \u6761\u6570\u636E\u8FDB\u884C\u6392\u5E8F\u3002
const initialData = new Array(4).fill(null).map((_, i) => ({
  index: i + 1,
  applicant: ['\u8D3E\u660E', '\u5F20\u4E09', '\u738B\u82B3'][i % 3],
  status: i % 3,
  channel: ['\u7535\u5B50\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72'][i % 3],
  detail: {
    email: ['w.cezkdudy@lhll.au', 'r.nmgw@peurezgn.sl', 'p.cumx@rampblpa.ru'][i % 3],
  },
  matters: ['\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528', 'algolia \u670D\u52A1\u62A5\u9500', '\u76F8\u5173\u5468\u8FB9\u5236\u4F5C\u8D39', '\u6FC0\u52B1\u5956\u54C1\u5FEB\u9012\u8D39'][i % 4],
  time: [2, 3, 1, 4][i % 4],
  createTime: ['2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01'][i % 4],
}));

export default {
  components: {
    Icon,
  },
  data() {
    return {
      data: initialData,
      columns: initialColumns,
      sort: {},
      singleSort: {
        sortBy: 'status',
        descending: true,
      },
      multipleSorts: [
        {
          sortBy: 'status',
          descending: true,
        },
      ],
      allowMultipleSort: false,
      globalLocale: {
        table: {
          sortIcon: (h) => h && <CaretDownSmallIcon size="16px" />,
        },
      },
    };
  },
  watch: {
    allowMultipleSort: {
      immediate: true,
      handler(val) {
        this.sort = val ? this.multipleSorts : this.singleSort;
      },
    },
  },
  methods: {
    // \u9664\u4E86\u76D1\u542C sortChange \u4E8B\u4EF6\u8C03\u6574\u6392\u5E8F\uFF0C\u4E5F\u53EF\u4EE5\u76D1\u542C change \u4E8B\u4EF6
    sortChange(sortInfo, options) {
      console.log('sort-change', sortInfo, options);
      // \u53D7\u63A7\u64CD\u4F5C\u5F53\u4E2D\uFF0Cthis.sort \u548C this.data \u7684\u8D4B\u503C\u90FD\u662F\u5FC5\u987B
      this.sort = sortInfo;
      // this.data = options.currentDataSource;
    },
    dataChange(newData) {
      // \u9664\u4E86 sortChange\uFF0C\u4E5F\u53EF\u4EE5\u5728\u8FD9\u91CC\u5BF9 data.value \u8FDB\u884C\u8D4B\u503C
      this.data = newData;
      console.log('data-change', newData);
    },
  },
};
<\/script>
<style lang="less">
/deep/ [class*='t-table-expandable-icon-cell'] .t-icon {
  background-color: transparent;
}
</style>
`,ln=`<template>
  <div class="demo-container t-table-demo-sort tdesign-demo__table">
    <!-- t-locale-provider \u4E00\u822C\u7528\u4E8E\u5168\u5C40\u914D\u7F6E\u67D0\u4E2A\u7EC4\u4EF6\u7684\u7279\u6027\uFF0C\u6B64\u4EE3\u7801\u793A\u4F8B \u793A\u8303\u4E86\u5982\u4F55\u5BF9\u8868\u683C\u6392\u5E8F\u56FE\u6807\u8FDB\u884C\u7EDF\u4E00\u914D\u7F6E -->
    <t-config-provider :globalConfig="globalLocale">
      <div class="item">
        <div style="margin: 16px">
          <t-checkbox v-model="allowMultipleSort">\u662F\u5426\u5141\u8BB8\u591A\u5B57\u6BB5\u6392\u5E8F</t-checkbox>
        </div>
        <div style="margin: 16px">\u6392\u5E8F\uFF1A{{ JSON.stringify(sort) || '\u6682\u65E0' }}</div>

        <!-- \u672C\u5730\u6570\u636E\u6392\u5E8F\u6D89\u53CA\u5230 data \u7684\u53D8\u66F4\uFF0C\u76F8\u5BF9\u6BD4\u8F83\u614E\u91CD\uFF0C\u56E0\u6B64\u4EC5\u652F\u6301\u53D7\u63A7\u7528\u6CD5 -->
        <!-- 1. \u652F\u6301\u8BED\u6CD5\u7CD6\uFF1Asort.sync\uFF0C\u6548\u679C\u540C :sort="sort" + onSortChange\u30022. \u652F\u6301\u975E\u53D7\u63A7\u5C5E\u6027 defaultSort -->
        <!-- 2. \u652F\u6301\u8BED\u6CD5\u7CD6\uFF1Adata.sync\uFF0C\u6548\u679C\u540C :data="data" + onDataChange -->
        <!-- \u8BED\u6CD5\u7CD6\u7528\u6CD5\u793A\u4F8B\u4EE3\u7801\uFF0C\u6709\u6548\u52FF\u5220 -->
        <!-- <t-table
          rowKey="id"
          :columns="columns"
          :data.sync="data"
          :sort.sync="sort"
        > -->

        <t-table
          rowKey="index"
          :columns="columns"
          :data="data"
          :sort="sort"
          @sort-change="sortChange"
          @data-change="dataChange"
          :multipleSort="allowMultipleSort"
          lazyLoad
        >
          <icon slot="op-column" name="descending-order" />
          <template #status="{ row }">
            <p class="status" :class="['', 'warning', 'unhealth'][row.status]">
              {{ ['\u5065\u5EB7', '\u8B66\u544A', '\u5F02\u5E38'][row.status] }}
            </p>
          </template>
        </t-table>
      </div>
    </t-config-provider>
  </div>
</template>

<script setup lang="jsx">
import { ref, reactive, watch } from 'vue';
import {
  CaretDownSmallIcon,
  Icon,
  CheckCircleFilledIcon,
  ErrorCircleFilledIcon,
  CloseCircleFilledIcon,
} from 'tdesign-icons-vue';

const initialColumns = [
  {
    colKey: 'applicant',
    title: '\u7533\u8BF7\u4EBA',
    width: '100',
  },
  {
    colKey: 'status',
    title: '\u7533\u8BF7\u72B6\u6001',
    width: '150',
    sortType: 'all',
    sorter: (a, b) => a.status - b.status,
    cell: (h, { row }) => {
      const statusNameListMap = {
        0: {
          label: '\u5BA1\u6279\u901A\u8FC7',
          theme: 'success',
          icon: <CheckCircleFilledIcon />,
        },
        1: {
          label: '\u5BA1\u6279\u5931\u8D25',
          theme: 'danger',
          icon: <CloseCircleFilledIcon />,
        },
        2: {
          label: '\u5BA1\u6279\u8FC7\u671F',
          theme: 'warning',
          icon: <ErrorCircleFilledIcon />,
        },
      };
      return (
        <t-tag shape="round" theme={statusNameListMap[row.status].theme} variant="light-outline">
          {statusNameListMap[row.status].icon}
          {statusNameListMap[row.status].label}
        </t-tag>
      );
    },
  },
  {
    title: '\u7533\u8BF7\u8017\u65F6(\u5929)',
    colKey: 'time',
    width: '140',
    align: 'center',
    sortType: 'all',
    sorter: (a, b) => a.time - b.time,
  },
  {
    colKey: 'channel',
    title: '\u7B7E\u7F72\u65B9\u5F0F',
    width: '120',
  },
  {
    colKey: 'detail.email',
    title: '\u90AE\u7BB1\u5730\u5740',
    ellipsis: true,
  },
  {
    colKey: 'createTime',
    title: '\u7533\u8BF7\u65F6\u95F4',
  },
];

// \u672C\u5730\u6570\u636E\u6392\u5E8F\uFF0C\u8868\u793A\u7EC4\u4EF6\u5185\u90E8\u4F1A\u5BF9\u53C2\u6570 data \u8FDB\u884C\u6570\u636E\u6392\u5E8F\u3002\u5982\u679C data \u6570\u636E\u4E3A 10 \u6761\uFF0C\u5C31\u4EC5\u5BF9\u8FD9 10 \u6761\u6570\u636E\u8FDB\u884C\u6392\u5E8F\u3002
const initialData = new Array(4).fill(null).map((_, i) => ({
  index: i + 1,
  applicant: ['\u8D3E\u660E', '\u5F20\u4E09', '\u738B\u82B3'][i % 3],
  status: i % 3,
  channel: ['\u7535\u5B50\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72'][i % 3],
  detail: {
    email: ['w.cezkdudy@lhll.au', 'r.nmgw@peurezgn.sl', 'p.cumx@rampblpa.ru'][i % 3],
  },
  matters: ['\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528', 'algolia \u670D\u52A1\u62A5\u9500', '\u76F8\u5173\u5468\u8FB9\u5236\u4F5C\u8D39', '\u6FC0\u52B1\u5956\u54C1\u5FEB\u9012\u8D39'][i % 4],
  time: [2, 3, 1, 4][i % 4],
  createTime: ['2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01'][i % 4],
}));
const data = ref(initialData);
const columns = ref(initialColumns);
const sort = ref({});
const singleSort = reactive({
  sortBy: 'status',
  descending: true,
});
const multipleSorts = ref([
  {
    sortBy: 'status',
    descending: true,
  },
]);
const allowMultipleSort = ref(false);
const globalLocale = reactive({
  table: {
    sortIcon: (h) => h && <CaretDownSmallIcon size="16px" />,
  },
});
// \u9664\u4E86\u76D1\u542C sortChange \u4E8B\u4EF6\u8C03\u6574\u6392\u5E8F\uFF0C\u4E5F\u53EF\u4EE5\u76D1\u542C change \u4E8B\u4EF6
const sortChange = (sortInfo, options) => {
  console.log('sort-change', sortInfo, options);
  // \u53D7\u63A7\u64CD\u4F5C\u5F53\u4E2D\uFF0Cthis.sort \u548C this.data \u7684\u8D4B\u503C\u90FD\u662F\u5FC5\u987B
  sort.value = sortInfo;
  // this.data = options.currentDataSource;
};
const dataChange = (newData) => {
  // \u9664\u4E86 sortChange\uFF0C\u4E5F\u53EF\u4EE5\u5728\u8FD9\u91CC\u5BF9 data.value \u8FDB\u884C\u8D4B\u503C
  data.value = newData;
  console.log('data-change', newData);
};
watch(
  allowMultipleSort,
  (val) => {
    sort.value = val ? multipleSorts.value : singleSort;
  },
  {
    immediate: true,
  },
);
<\/script>
<style lang="less">
/deep/ [class*='t-table-expandable-icon-cell'] .t-icon {
  background-color: transparent;
}
</style>
`,on=`<template>
  <div class="tdesign-demo__table">
    <!-- \u652F\u6301\u975E\u53D7\u63A7\u5C5E\u6027 default-selected-row-keys -->
    <!-- \u652F\u6301\u8BED\u6CD5\u7CD6 selected-row-keys.sync -->
    <t-table
      rowKey="index"
      :columns="columns"
      :data="data"
      @select-change="rehandleSelectChange"
      select-on-row-click
      lazyLoad
      @row-click="onRowClick"
      @row-dblclick="onRowDblclick"
    >
      <template #status="{ row }">
        <p v-if="row.status === 0" class="status">\u5065\u5EB7</p>
        <p v-if="row.status === 1" class="status unhealth">\u5F02\u5E38</p>
      </template>
      <template #op-column><p>\u64CD\u4F5C</p></template>
      <template #op="slotProps">
        <a class="link" @click="rehandleClickOp(slotProps)">\u7BA1\u7406</a>
        <a class="link" @click="rehandleClickOp(slotProps)">\u5220\u9664</a>
      </template>
    </t-table>
  </div>
</template>

<script lang="jsx">
import { ErrorCircleFilledIcon, CheckCircleFilledIcon, CloseCircleFilledIcon } from 'tdesign-icons-vue';

const initialData = [];
for (let i = 0; i < 5; i++) {
  initialData.push({
    index: i + 1,
    applicant: ['\u8D3E\u660E', '\u5F20\u4E09', '\u738B\u82B3'][i % 3],
    status: i % 3,
    channel: ['\u7535\u5B50\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72'][i % 3],
    detail: {
      email: ['w.cezkdudy@lhll.au', 'r.nmgw@peurezgn.sl', 'p.cumx@rampblpa.ru'][i % 3],
    },
    matters: ['\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528', 'algolia \u670D\u52A1\u62A5\u9500', '\u76F8\u5173\u5468\u8FB9\u5236\u4F5C\u8D39', '\u6FC0\u52B1\u5956\u54C1\u5FEB\u9012\u8D39'][i % 4],
    time: [2, 3, 1, 4][i % 4],
    createTime: ['2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01'][i % 4],
  });
}

const disabledFunc = ({ rowIndex }) => rowIndex === 1 || rowIndex === 3;

export default {
  data() {
    return {
      // highlightSelectedRow: false,
      selectedOnRowClick: false,
      selectedRowKeys: [2],
      columns: [
        {
          // title: '\u5355\u9009',
          // align: 'center',
          colKey: 'row-select',
          type: 'single',
          // \u5141\u8BB8\u5355\u9009(Radio)\u53D6\u6D88\u884C\u9009\u4E2D
          checkProps: { allowUncheck: true },

          // \u7981\u7528\u884C\u9009\u4E2D\u65B9\u5F0F\u4E00\uFF1A\u4F7F\u7528 disabled \u7981\u7528\u884C\uFF08\u793A\u4F8B\u4EE3\u7801\u6709\u6548\uFF0C\u52FF\u5220\uFF0C\u968F\u65F6\u9700\u8981\u6D4B\u8BD5\uFF09\u3002disabled \u53C2\u6570\uFF1A{row: RowData; rowIndex: number })
          // \u8FD9\u79CD\u65B9\u5F0F\u7981\u7528\u884C\u9009\u4E2D\uFF0C\u5F53\u524D\u884C\u4F1A\u6DFB\u52A0\u884C\u7C7B\u540D t-table__row--disabled\uFF0C\u7981\u7528\u884C\u6587\u5B57\u53D8\u7070
          disabled: ({ rowIndex }) => rowIndex === 1 || rowIndex === 3,

          // \u7981\u7528\u884C\u9009\u4E2D\u65B9\u5F0F\u4E8C\uFF1A\u4F7F\u7528 checkProps \u7981\u7528\u884C\uFF08\u793A\u4F8B\u4EE3\u7801\u6709\u6548\uFF0C\u52FF\u5220\uFF0C\u968F\u65F6\u9700\u8981\u6D4B\u8BD5\uFF09
          // \u8FD9\u79CD\u65B9\u5F0F\u7981\u7528\u884C\u9009\u4E2D\uFF0C\u884C\u6587\u672C\u4E0D\u4F1A\u53D8\u7070\uFF0C\u4E0D\u4F1A\u6DFB\u52A0\u7C7B\u540D t-table__row--disabled
          // checkProps: ({ rowIndex }) => ({ disabled: rowIndex % 2 !== 0 }),
          width: 50,
        },
        { colKey: 'applicant', title: '\u7533\u8BF7\u4EBA', width: '100' },
        {
          colKey: 'status',
          title: '\u7533\u8BF7\u72B6\u6001',
          width: '150',
          cell: (h, { row }) => {
            const statusNameListMap = {
              0: { label: '\u5BA1\u6279\u901A\u8FC7', theme: 'success', icon: <CheckCircleFilledIcon /> },
              1: { label: '\u5BA1\u6279\u5931\u8D25', theme: 'danger', icon: <CloseCircleFilledIcon /> },
              2: { label: '\u5BA1\u6279\u8FC7\u671F', theme: 'warning', icon: <ErrorCircleFilledIcon /> },
            };
            return (
              <t-tag shape="round" theme={statusNameListMap[row.status].theme} variant="light-outline">
                {statusNameListMap[row.status].icon}
                {statusNameListMap[row.status].label}
              </t-tag>
            );
          },
        },
        { colKey: 'channel', title: '\u7B7E\u7F72\u65B9\u5F0F', width: '120' },
        { colKey: 'detail.email', title: '\u90AE\u7BB1\u5730\u5740', ellipsis: true },
        { colKey: 'createTime', title: '\u7533\u8BF7\u65F6\u95F4' },
      ],
      data: initialData,
    };
  },
  methods: {
    rehandleClickOp(context) {
      console.log(context);
    },

    rehandleSelectChange(value, { selectedRowData }) {
      this.selectedRowKeys = value;
      console.log(value, selectedRowData);
    },

    // \u6574\u884C\u9009\u4E2D\u793A\u4F8B
    onRowClick({ row, index }) {
      if (this.selectedOnRowClick && !disabledFunc({ row, rowIndex: index })) {
        this.selectedRowKeys = [row.id];
      }
    },

    onRowDblclick(context) {
      console.log(context);
    },
  },
};
<\/script>

<style lang="less">
/** \u6B64\u5904\u793A\u8303 \u5982\u4F55\u8BBE\u7F6E\u884C\u9AD8\u4EAE */
.tdesign-demo__select-single {
  /** \u80CC\u666F\u8272\u793A\u8303 */
  .t-table__row--selected {
    background-color: #ecf2fe;
  }
  /** \u6700\u53F3\u4FA7\u9009\u4E2D\u56FE\u6807\u793A\u8303 */
  .t-table__row--selected > td:last-child::after {
    content: '\u2705';
    font-size: 12px;
    position: absolute;
    right: 0;
    bottom: 18px;
    width: 20px;
    height: 16px;
  }
}
</style>

<style lang="less" scoped>
.link {
  cursor: pointer;
  margin-right: 15px;
}
.status {
  position: relative;
  color: #00a870;
  margin-left: 10px;
  &::before {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    content: '';
    background-color: #00a870;
    width: 6px;
    height: 6px;
    margin-left: -10px;
    border-radius: 50%;
  }
}
.status.unhealth {
  color: #e34d59;
  &::before {
    background-color: #e34d59;
  }
}
</style>
`,rn=`<template>
  <div class="tdesign-demo__table">
    <!-- \u652F\u6301\u975E\u53D7\u63A7\u5C5E\u6027 default-selected-row-keys -->
    <!-- \u652F\u6301\u8BED\u6CD5\u7CD6 selected-row-keys.sync -->
    <t-table
      rowKey="index"
      :columns="columns"
      :data="data"
      @select-change="rehandleSelectChange"
      select-on-row-click
      lazyLoad
      @row-click="onRowClick"
      @row-dblclick="onRowDblclick"
    >
      <template #status="{ row }">
        <p v-if="row.status === 0" class="status">\u5065\u5EB7</p>
        <p v-if="row.status === 1" class="status unhealth">\u5F02\u5E38</p>
      </template>
      <template #op-column><p>\u64CD\u4F5C</p></template>
      <template #op="slotProps">
        <a class="link" @click="rehandleClickOp(slotProps)">\u7BA1\u7406</a>
        <a class="link" @click="rehandleClickOp(slotProps)">\u5220\u9664</a>
      </template>
    </t-table>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue';
import { ErrorCircleFilledIcon, CheckCircleFilledIcon, CloseCircleFilledIcon } from 'tdesign-icons-vue';

const initialData = [];
for (let i = 0; i < 5; i++) {
  initialData.push({
    index: i + 1,
    applicant: ['\u8D3E\u660E', '\u5F20\u4E09', '\u738B\u82B3'][i % 3],
    status: i % 3,
    channel: ['\u7535\u5B50\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72'][i % 3],
    detail: {
      email: ['w.cezkdudy@lhll.au', 'r.nmgw@peurezgn.sl', 'p.cumx@rampblpa.ru'][i % 3],
    },
    matters: ['\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528', 'algolia \u670D\u52A1\u62A5\u9500', '\u76F8\u5173\u5468\u8FB9\u5236\u4F5C\u8D39', '\u6FC0\u52B1\u5956\u54C1\u5FEB\u9012\u8D39'][i % 4],
    time: [2, 3, 1, 4][i % 4],
    createTime: ['2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01'][i % 4],
  });
}
const disabledFunc = ({ rowIndex }) => rowIndex === 1 || rowIndex === 3;
// const highlightSelectedRow = ref(false);
const selectedOnRowClick = ref(false);
const selectedRowKeys = ref([2]);
const columns = ref([
  {
    // title: '\u5355\u9009',
    // align: 'center',
    colKey: 'row-select',
    type: 'single',
    // \u5141\u8BB8\u5355\u9009(Radio)\u53D6\u6D88\u884C\u9009\u4E2D
    checkProps: {
      allowUncheck: true,
    },
    // \u7981\u7528\u884C\u9009\u4E2D\u65B9\u5F0F\u4E00\uFF1A\u4F7F\u7528 disabled \u7981\u7528\u884C\uFF08\u793A\u4F8B\u4EE3\u7801\u6709\u6548\uFF0C\u52FF\u5220\uFF0C\u968F\u65F6\u9700\u8981\u6D4B\u8BD5\uFF09\u3002disabled \u53C2\u6570\uFF1A{row: RowData; rowIndex: number })
    // \u8FD9\u79CD\u65B9\u5F0F\u7981\u7528\u884C\u9009\u4E2D\uFF0C\u5F53\u524D\u884C\u4F1A\u6DFB\u52A0\u884C\u7C7B\u540D t-table__row--disabled\uFF0C\u7981\u7528\u884C\u6587\u5B57\u53D8\u7070
    disabled: ({ rowIndex }) => rowIndex === 1 || rowIndex === 3,
    // \u7981\u7528\u884C\u9009\u4E2D\u65B9\u5F0F\u4E8C\uFF1A\u4F7F\u7528 checkProps \u7981\u7528\u884C\uFF08\u793A\u4F8B\u4EE3\u7801\u6709\u6548\uFF0C\u52FF\u5220\uFF0C\u968F\u65F6\u9700\u8981\u6D4B\u8BD5\uFF09
    // \u8FD9\u79CD\u65B9\u5F0F\u7981\u7528\u884C\u9009\u4E2D\uFF0C\u884C\u6587\u672C\u4E0D\u4F1A\u53D8\u7070\uFF0C\u4E0D\u4F1A\u6DFB\u52A0\u7C7B\u540D t-table__row--disabled
    // checkProps: ({ rowIndex }) => ({ disabled: rowIndex % 2 !== 0 }),
    width: 50,
  },
  {
    colKey: 'applicant',
    title: '\u7533\u8BF7\u4EBA',
    width: '100',
  },
  {
    colKey: 'status',
    title: '\u7533\u8BF7\u72B6\u6001',
    width: '150',
    cell: (h, { row }) => {
      const statusNameListMap = {
        0: {
          label: '\u5BA1\u6279\u901A\u8FC7',
          theme: 'success',
          icon: <CheckCircleFilledIcon />,
        },
        1: {
          label: '\u5BA1\u6279\u5931\u8D25',
          theme: 'danger',
          icon: <CloseCircleFilledIcon />,
        },
        2: {
          label: '\u5BA1\u6279\u8FC7\u671F',
          theme: 'warning',
          icon: <ErrorCircleFilledIcon />,
        },
      };
      return (
        <t-tag shape="round" theme={statusNameListMap[row.status].theme} variant="light-outline">
          {statusNameListMap[row.status].icon}
          {statusNameListMap[row.status].label}
        </t-tag>
      );
    },
  },
  {
    colKey: 'channel',
    title: '\u7B7E\u7F72\u65B9\u5F0F',
    width: '120',
  },
  {
    colKey: 'detail.email',
    title: '\u90AE\u7BB1\u5730\u5740',
    ellipsis: true,
  },
  {
    colKey: 'createTime',
    title: '\u7533\u8BF7\u65F6\u95F4',
  },
]);
const data = ref(initialData);
const rehandleClickOp = (context) => {
  console.log(context);
};
const rehandleSelectChange = (value, { selectedRowData }) => {
  selectedRowKeys.value = value;
  console.log(value, selectedRowData);
};
// \u6574\u884C\u9009\u4E2D\u793A\u4F8B
const onRowClick = ({ row, index }) => {
  if (
    selectedOnRowClick.value
    && !disabledFunc({
      row,
      rowIndex: index,
    })
  ) {
    selectedRowKeys.value = [row.id];
  }
};
const onRowDblclick = (context) => {
  console.log(context);
};
<\/script>

<style lang="less">
/** \u6B64\u5904\u793A\u8303 \u5982\u4F55\u8BBE\u7F6E\u884C\u9AD8\u4EAE */
.tdesign-demo__select-single {
  /** \u80CC\u666F\u8272\u793A\u8303 */
  .t-table__row--selected {
    background-color: #ecf2fe;
  }
  /** \u6700\u53F3\u4FA7\u9009\u4E2D\u56FE\u6807\u793A\u8303 */
  .t-table__row--selected > td:last-child::after {
    content: '\u2705';
    font-size: 12px;
    position: absolute;
    right: 0;
    bottom: 18px;
    width: 20px;
    height: 16px;
  }
}
</style>

<style lang="less" scoped>
.link {
  cursor: pointer;
  margin-right: 15px;
}
.status {
  position: relative;
  color: #00a870;
  margin-left: 10px;
  &::before {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    content: '';
    background-color: #00a870;
    width: 6px;
    height: 6px;
    margin-left: -10px;
    border-radius: 50%;
  }
}
.status.unhealth {
  color: #e34d59;
  &::before {
    background-color: #e34d59;
  }
}
</style>
`,sn=`<template>
  <div>
    <!-- \u652F\u6301\u975E\u53D7\u63A7\u5C5E\u6027 default-selected-row-keys -->
    <!-- \u652F\u6301\u8BED\u6CD5\u7CD6 selected-row-keys.sync -->
    <t-table
      row-key="index"
      :columns="columns"
      :data="data"
      lazyLoad
      :selected-row-keys="selectedRowKeys"
      @select-change="rehandleSelectChange"
    >
      <template #status="{ row }">
        <p v-if="row.status === 0" class="status">\u5065\u5EB7</p>
        <p v-if="row.status === 1" class="status unhealth">\u5F02\u5E38</p>
      </template>
      <template #op-column><p>\u64CD\u4F5C</p></template>
      <template #op="slotProps">
        <a class="link" @click="rehandleClickOp(slotProps)">\u7BA1\u7406</a>
        <a class="link" @click="rehandleClickOp(slotProps)">\u5220\u9664</a>
      </template>
    </t-table>
  </div>
</template>

<script lang="jsx">
import { ErrorCircleFilledIcon, CheckCircleFilledIcon, CloseCircleFilledIcon } from 'tdesign-icons-vue';

const initialData = new Array(5).fill(null).map((item, i) => ({
  index: i + 1,
  applicant: ['\u8D3E\u660E', '\u5F20\u4E09', '\u738B\u82B3'][i % 3],
  status: i % 3,
  channel: ['\u7535\u5B50\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72'][i % 3],
  detail: {
    email: ['w.cezkdudy@lhll.au', 'r.nmgw@peurezgn.sl', 'p.cumx@rampblpa.ru'][i % 3],
  },
  matters: ['\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528', 'algolia \u670D\u52A1\u62A5\u9500', '\u76F8\u5173\u5468\u8FB9\u5236\u4F5C\u8D39', '\u6FC0\u52B1\u5956\u54C1\u5FEB\u9012\u8D39'][i % 4],
  time: [2, 3, 1, 4][i % 4],
  createTime: ['2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01'][i % 4],
}));
export default {
  data() {
    return {
      selectedRowKeys: [1],
      columns: [
        {
          colKey: 'row-select',
          type: 'multiple',
          // \u7981\u7528\u884C\u9009\u4E2D\u65B9\u5F0F\u4E00\uFF1A\u4F7F\u7528 disabled \u7981\u7528\u884C\uFF08\u793A\u4F8B\u4EE3\u7801\u6709\u6548\uFF0C\u52FF\u5220\uFF09\u3002disabled \u53C2\u6570\uFF1A{row: RowData; rowIndex: number })
          // \u8FD9\u79CD\u65B9\u5F0F\u7981\u7528\u884C\u9009\u4E2D\uFF0C\u5F53\u524D\u884C\u4F1A\u6DFB\u52A0\u884C\u7C7B\u540D t-table__row--disabled\uFF0C\u7981\u7528\u884C\u6587\u5B57\u53D8\u7070
          // disabled: ({ rowIndex }) => rowIndex === 1 || rowIndex === 3,

          // \u7981\u7528\u884C\u9009\u4E2D\u65B9\u5F0F\u4E8C\uFF1A\u4F7F\u7528 checkProps \u7981\u7528\u884C\uFF08\u793A\u4F8B\u4EE3\u7801\u6709\u6548\uFF0C\u52FF\u5220\uFF09
          // \u8FD9\u79CD\u65B9\u5F0F\u7981\u7528\u884C\u9009\u4E2D\uFF0C\u884C\u6587\u672C\u4E0D\u4F1A\u53D8\u7070
          checkProps: ({ rowIndex }) => ({ disabled: rowIndex % 2 !== 0 }),
          width: 50,
        },
        { colKey: 'applicant', title: '\u7533\u8BF7\u4EBA', width: '100' },
        {
          colKey: 'status',
          title: '\u7533\u8BF7\u72B6\u6001',
          width: '150',
          cell: (h, { row }) => {
            const statusNameListMap = {
              0: { label: '\u5BA1\u6279\u901A\u8FC7', theme: 'success', icon: <CheckCircleFilledIcon /> },
              1: { label: '\u5BA1\u6279\u5931\u8D25', theme: 'danger', icon: <CloseCircleFilledIcon /> },
              2: { label: '\u5BA1\u6279\u8FC7\u671F', theme: 'warning', icon: <ErrorCircleFilledIcon /> },
            };
            return (
              <t-tag shape="round" theme={statusNameListMap[row.status].theme} variant="light-outline">
                {statusNameListMap[row.status].icon}
                {statusNameListMap[row.status].label}
              </t-tag>
            );
          },
        },
        { colKey: 'channel', title: '\u7B7E\u7F72\u65B9\u5F0F', width: '120' },
        { colKey: 'detail.email', title: '\u90AE\u7BB1\u5730\u5740', ellipsis: true },
        { colKey: 'createTime', title: '\u7533\u8BF7\u65F6\u95F4' },
      ],
      data: initialData,
    };
  },
  methods: {
    rehandleClickOp(context) {
      console.log(context);
    },
    rehandleSelectChange(value, { selectedRowData }) {
      this.selectedRowKeys = value;
      console.log(value, selectedRowData);
    },
  },
};
<\/script>

<style lang="less" scoped>
.link {
  cursor: pointer;
  margin-right: 15px;
}
.status {
  position: relative;
  color: #00a870;
  margin-left: 10px;
  &::before {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    content: '';
    background-color: #00a870;
    width: 6px;
    height: 6px;
    margin-left: -10px;
    border-radius: 50%;
  }
}
.status.unhealth {
  color: #e34d59;
  &::before {
    background-color: #e34d59;
  }
}
</style>
`,cn=`<template>
  <div>
    <!-- \u652F\u6301\u975E\u53D7\u63A7\u5C5E\u6027 default-selected-row-keys -->
    <!-- \u652F\u6301\u8BED\u6CD5\u7CD6 selected-row-keys.sync -->
    <t-table
      row-key="index"
      :columns="columns"
      :data="data"
      lazyLoad
      :selected-row-keys="selectedRowKeys"
      @select-change="rehandleSelectChange"
    >
      <template #status="{ row }">
        <p v-if="row.status === 0" class="status">\u5065\u5EB7</p>
        <p v-if="row.status === 1" class="status unhealth">\u5F02\u5E38</p>
      </template>
      <template #op-column><p>\u64CD\u4F5C</p></template>
      <template #op="slotProps">
        <a class="link" @click="rehandleClickOp(slotProps)">\u7BA1\u7406</a>
        <a class="link" @click="rehandleClickOp(slotProps)">\u5220\u9664</a>
      </template>
    </t-table>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue';
import { ErrorCircleFilledIcon, CheckCircleFilledIcon, CloseCircleFilledIcon } from 'tdesign-icons-vue';

const initialData = new Array(5).fill(null).map((item, i) => ({
  index: i + 1,
  applicant: ['\u8D3E\u660E', '\u5F20\u4E09', '\u738B\u82B3'][i % 3],
  status: i % 3,
  channel: ['\u7535\u5B50\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72'][i % 3],
  detail: {
    email: ['w.cezkdudy@lhll.au', 'r.nmgw@peurezgn.sl', 'p.cumx@rampblpa.ru'][i % 3],
  },
  matters: ['\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528', 'algolia \u670D\u52A1\u62A5\u9500', '\u76F8\u5173\u5468\u8FB9\u5236\u4F5C\u8D39', '\u6FC0\u52B1\u5956\u54C1\u5FEB\u9012\u8D39'][i % 4],
  time: [2, 3, 1, 4][i % 4],
  createTime: ['2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01'][i % 4],
}));
const selectedRowKeys = ref([1]);
const columns = ref([
  {
    colKey: 'row-select',
    type: 'multiple',
    // \u7981\u7528\u884C\u9009\u4E2D\u65B9\u5F0F\u4E00\uFF1A\u4F7F\u7528 disabled \u7981\u7528\u884C\uFF08\u793A\u4F8B\u4EE3\u7801\u6709\u6548\uFF0C\u52FF\u5220\uFF09\u3002disabled \u53C2\u6570\uFF1A{row: RowData; rowIndex: number })
    // \u8FD9\u79CD\u65B9\u5F0F\u7981\u7528\u884C\u9009\u4E2D\uFF0C\u5F53\u524D\u884C\u4F1A\u6DFB\u52A0\u884C\u7C7B\u540D t-table__row--disabled\uFF0C\u7981\u7528\u884C\u6587\u5B57\u53D8\u7070
    // disabled: ({ rowIndex }) => rowIndex === 1 || rowIndex === 3,

    // \u7981\u7528\u884C\u9009\u4E2D\u65B9\u5F0F\u4E8C\uFF1A\u4F7F\u7528 checkProps \u7981\u7528\u884C\uFF08\u793A\u4F8B\u4EE3\u7801\u6709\u6548\uFF0C\u52FF\u5220\uFF09
    // \u8FD9\u79CD\u65B9\u5F0F\u7981\u7528\u884C\u9009\u4E2D\uFF0C\u884C\u6587\u672C\u4E0D\u4F1A\u53D8\u7070
    checkProps: ({ rowIndex }) => ({
      disabled: rowIndex % 2 !== 0,
    }),
    width: 50,
  },
  {
    colKey: 'applicant',
    title: '\u7533\u8BF7\u4EBA',
    width: '100',
  },
  {
    colKey: 'status',
    title: '\u7533\u8BF7\u72B6\u6001',
    width: '150',
    cell: (h, { row }) => {
      const statusNameListMap = {
        0: {
          label: '\u5BA1\u6279\u901A\u8FC7',
          theme: 'success',
          icon: <CheckCircleFilledIcon />,
        },
        1: {
          label: '\u5BA1\u6279\u5931\u8D25',
          theme: 'danger',
          icon: <CloseCircleFilledIcon />,
        },
        2: {
          label: '\u5BA1\u6279\u8FC7\u671F',
          theme: 'warning',
          icon: <ErrorCircleFilledIcon />,
        },
      };
      return (
        <t-tag shape="round" theme={statusNameListMap[row.status].theme} variant="light-outline">
          {statusNameListMap[row.status].icon}
          {statusNameListMap[row.status].label}
        </t-tag>
      );
    },
  },
  {
    colKey: 'channel',
    title: '\u7B7E\u7F72\u65B9\u5F0F',
    width: '120',
  },
  {
    colKey: 'detail.email',
    title: '\u90AE\u7BB1\u5730\u5740',
    ellipsis: true,
  },
  {
    colKey: 'createTime',
    title: '\u7533\u8BF7\u65F6\u95F4',
  },
]);
const data = ref(initialData);
const rehandleClickOp = (context) => {
  console.log(context);
};
const rehandleSelectChange = (value, { selectedRowData }) => {
  selectedRowKeys.value = value;
  console.log(value, selectedRowData);
};
<\/script>

<style lang="less" scoped>
.link {
  cursor: pointer;
  margin-right: 15px;
}
.status {
  position: relative;
  color: #00a870;
  margin-left: 10px;
  &::before {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    content: '';
    background-color: #00a870;
    width: 6px;
    height: 6px;
    margin-left: -10px;
    border-radius: 50%;
  }
}
.status.unhealth {
  color: #e34d59;
  &::before {
    background-color: #e34d59;
  }
}
</style>
`,dn=`<template>
  <t-table
    :data="data"
    :columns="columns"
    :rowKey="rowKey"
    :loading="isLoading"
    :pagination="pagination"
    :selected-row-keys="selectedRowKeys"
    @change="rehandleChange"
    @page-change="onPageChange"
    @select-change="onSelectChange"
    bordered
    stripe
    lazyLoad
  >
  </t-table>
</template>

<script lang="jsx">
import { ErrorCircleFilledIcon, CheckCircleFilledIcon, CloseCircleFilledIcon } from 'tdesign-icons-vue';

export default {
  data() {
    return {
      data: [],
      isLoading: false,
      selectedRowKeys: [],
      columns: [
        {
          colKey: 'row-select',
          type: 'multiple',
          width: 46,
        },
        {
          width: 200,
          colKey: 'name',
          title: '\u59D3\u540D',
          render(h, { type, row: { name } }) {
            if (type === 'title') return '\u7533\u8BF7\u4EBA';
            return name ? \`\${name.first} \${name.last}\` : 'UNKNOWN_USER';
          },
        },
        {
          colKey: 'status',
          title: '\u7533\u8BF7\u72B6\u6001',
          width: '150',

          cell: (h, { rowIndex }) => {
            const statusNameListMap = {
              0: { label: '\u5BA1\u6279\u901A\u8FC7', theme: 'success', icon: <CheckCircleFilledIcon /> },
              1: { label: '\u5BA1\u6279\u5931\u8D25', theme: 'danger', icon: <CloseCircleFilledIcon /> },
              2: { label: '\u5BA1\u6279\u8FC7\u671F', theme: 'warning', icon: <ErrorCircleFilledIcon /> },
            };
            const status = rowIndex % 3;
            return (
              <t-tag shape="round" theme={statusNameListMap[status].theme} variant="light-outline">
                {statusNameListMap[status].icon}
                {statusNameListMap[status].label}
              </t-tag>
            );
          },
        },
        {
          width: 200,
          colKey: 'phone',
          title: '\u8054\u7CFB\u65B9\u5F0F',
          render(h, { row: { phone } }) {
            return phone;
          },
        },
        {
          colKey: 'email',
          title: '\u90AE\u7BB1',
          width: 180,
          ellipsis: true,
        },
      ],
      rowKey: 'phone',
      // tableLayout: 'auto',
      // rowClassName: 'property-class',
      pagination: {
        current: 1,
        pageSize: 10,
        // defaultCurrent: 1,
        // defaultPageSize: 10,
        showJumper: true,
        onChange: (pageInfo) => {
          console.log('pagination.onChange', pageInfo);
        },
      },
    };
  },
  async mounted() {
    await this.fetchData({
      current: this.pagination.current || this.pagination.defaultCurrent,
      pageSize: this.pagination.pageSize || this.pagination.defaultPageSize,
    });
  },
  methods: {
    async fetchData(pagination = this.pagination) {
      try {
        this.isLoading = true;
        const { current, pageSize } = pagination;
        // \u8BF7\u6C42\u53EF\u80FD\u5B58\u5728\u8DE8\u57DF\u95EE\u9898
        const url = new URL('https://randomuser.me/api');
        const params = { page: current, results: pageSize };
        Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));
        const response = await fetch(url).then((x) => x.json());
        this.data = response.results;
        // \u6570\u636E\u52A0\u8F7D\u5B8C\u6210\uFF0C\u8BBE\u7F6E\u6570\u636E\u603B\u6761\u6570
        this.pagination.total = 120;
      } catch (err) {
        this.data = [];
      }
      this.isLoading = false;
    },

    // BaseTable \u4E2D\u53EA\u6709 page-change \u4E8B\u4EF6\uFF0C\u6CA1\u6709 change \u4E8B\u4EF6
    rehandleChange(changeParams, triggerAndData) {
      console.log('\u5206\u9875\u3001\u6392\u5E8F\u3001\u8FC7\u6EE4\u7B49\u53D1\u751F\u53D8\u5316\u65F6\u4F1A\u89E6\u53D1 change \u4E8B\u4EF6\uFF1A', changeParams, triggerAndData);
    },

    // BaseTable \u4E2D\u53EA\u6709 page-change \u4E8B\u4EF6\uFF0C\u6CA1\u6709 change \u4E8B\u4EF6
    async onPageChange(pageInfo) {
      console.log('page-change', pageInfo);
      this.pagination.current = pageInfo.current;
      this.pagination.pageSize = pageInfo.pageSize;
      await this.fetchData(pageInfo);
    },

    onSelectChange(value, { selectedRowData }) {
      this.selectedRowKeys = value;
      console.log(value, selectedRowData);
    },
  },
};
<\/script>
`,un=`<template>
  <t-table
    :data="data"
    :columns="columns"
    :rowKey="rowKey"
    :loading="isLoading"
    :pagination="pagination"
    :selected-row-keys="selectedRowKeys"
    @change="rehandleChange"
    @page-change="onPageChange"
    @select-change="onSelectChange"
    bordered
    stripe
    lazyLoad
  >
  </t-table>
</template>

<script setup lang="jsx">
import { onMounted, ref, reactive } from 'vue';
import { ErrorCircleFilledIcon, CheckCircleFilledIcon, CloseCircleFilledIcon } from 'tdesign-icons-vue';

const data = ref([]);
const isLoading = ref(false);
const selectedRowKeys = ref([]);
const columns = ref([
  {
    colKey: 'row-select',
    type: 'multiple',
    width: 46,
  },
  {
    width: 200,
    colKey: 'name',
    title: '\u59D3\u540D',
    render(h, { type, row: { name } }) {
      if (type === 'title') return '\u7533\u8BF7\u4EBA';
      return name ? \`\${name.first} \${name.last}\` : 'UNKNOWN_USER';
    },
  },
  {
    colKey: 'status',
    title: '\u7533\u8BF7\u72B6\u6001',
    width: '150',
    cell: (h, { rowIndex }) => {
      const statusNameListMap = {
        0: {
          label: '\u5BA1\u6279\u901A\u8FC7',
          theme: 'success',
          icon: <CheckCircleFilledIcon />,
        },
        1: {
          label: '\u5BA1\u6279\u5931\u8D25',
          theme: 'danger',
          icon: <CloseCircleFilledIcon />,
        },
        2: {
          label: '\u5BA1\u6279\u8FC7\u671F',
          theme: 'warning',
          icon: <ErrorCircleFilledIcon />,
        },
      };
      const status = rowIndex % 3;
      return (
        <t-tag shape="round" theme={statusNameListMap[status].theme} variant="light-outline">
          {statusNameListMap[status].icon}
          {statusNameListMap[status].label}
        </t-tag>
      );
    },
  },
  {
    width: 200,
    colKey: 'phone',
    title: '\u8054\u7CFB\u65B9\u5F0F',
    render(h, { row: { phone } }) {
      return phone;
    },
  },
  {
    colKey: 'email',
    title: '\u90AE\u7BB1',
    width: 180,
    ellipsis: true,
  },
]);
const rowKey = ref('phone');
// const tableLayout = ref('auto');
// const rowClassName = ref('property-class');
const pagination = reactive({
  current: 1,
  pageSize: 10,
  // defaultCurrent: 1,
  // defaultPageSize: 10,
  showJumper: true,
  onChange: (pageInfo) => {
    console.log('pagination.onChange', pageInfo);
  },
});
const fetchData = async (paginationData = pagination) => {
  try {
    isLoading.value = true;
    const { current, pageSize } = paginationData;
    // \u8BF7\u6C42\u53EF\u80FD\u5B58\u5728\u8DE8\u57DF\u95EE\u9898
    const url = new URL('https://randomuser.me/api');
    const params = {
      page: current,
      results: pageSize,
    };
    Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));
    const response = await fetch(url).then((x) => x.json());
    data.value = response.results;
    // \u6570\u636E\u52A0\u8F7D\u5B8C\u6210\uFF0C\u8BBE\u7F6E\u6570\u636E\u603B\u6761\u6570
    pagination.total = 120;
  } catch (err) {
    data.value = [];
  }
  isLoading.value = false;
};
// BaseTable \u4E2D\u53EA\u6709 page-change \u4E8B\u4EF6\uFF0C\u6CA1\u6709 change \u4E8B\u4EF6
const rehandleChange = (changeParams, triggerAndData) => {
  console.log('\u5206\u9875\u3001\u6392\u5E8F\u3001\u8FC7\u6EE4\u7B49\u53D1\u751F\u53D8\u5316\u65F6\u4F1A\u89E6\u53D1 change \u4E8B\u4EF6\uFF1A', changeParams, triggerAndData);
};
// BaseTable \u4E2D\u53EA\u6709 page-change \u4E8B\u4EF6\uFF0C\u6CA1\u6709 change \u4E8B\u4EF6
const onPageChange = async (pageInfo) => {
  console.log('page-change', pageInfo);
  pagination.current = pageInfo.current;
  pagination.pageSize = pageInfo.pageSize;
  await fetchData(pageInfo);
};
const onSelectChange = (value, { selectedRowData }) => {
  selectedRowKeys.value = value;
  console.log(value, selectedRowData);
};
onMounted(async () => {
  await fetchData({
    current: pagination.current || pagination.defaultCurrent,
    pageSize: pagination.pageSize || pagination.defaultPageSize,
  });
});
<\/script>
`,pn=`<template>
  <t-space direction="vertical">
    <!-- \u6309\u94AE\u64CD\u4F5C\u533A\u57DF -->
    <t-radio-group v-model="reserveSelectedRowOnPaginate" variant="default-filled">
      <t-radio-button :value="true">\u8DE8\u5206\u9875\u9009\u4E2D</t-radio-button>
      <t-radio-button :value="false">\u5F53\u524D\u9875\u9009\u4E2D</t-radio-button>
    </t-radio-group>

    <t-table
      rowKey="index"
      :data="data"
      :columns="columns"
      :pagination="pagination"
      :selected-row-keys.sync="selectedRowKeys"
      :reserve-selected-row-on-paginate="reserveSelectedRowOnPaginate"
      lazyLoad
      @change="onChange"
      @page-change="onPageChange"
      @select-change="onSelectChange"
    ></t-table>
  </t-space>
</template>
<script lang="jsx">
import { ErrorCircleFilledIcon, CheckCircleFilledIcon, CloseCircleFilledIcon } from 'tdesign-icons-vue';

const initialData = [];
const TOTAL = 59;
for (let i = 0; i < TOTAL; i++) {
  initialData.push({
    index: i + 1,
    applicant: ['\u8D3E\u660E', '\u5F20\u4E09', '\u738B\u82B3'][i % 3],
    status: i % 3,
    channel: ['\u7535\u5B50\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72'][i % 3],
    detail: {
      email: ['w.cezkdudy@lhll.au', 'r.nmgw@peurezgn.sl', 'p.cumx@rampblpa.ru'][i % 3],
    },
    matters: ['\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528', 'algolia \u670D\u52A1\u62A5\u9500', '\u76F8\u5173\u5468\u8FB9\u5236\u4F5C\u8D39', '\u6FC0\u52B1\u5956\u54C1\u5FEB\u9012\u8D39'][i % 4],
    time: [2, 3, 1, 4][i % 4],
    createTime: ['2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01'][i % 4],
  });
}
export default {
  data() {
    return {
      data: initialData,
      reserveSelectedRowOnPaginate: true,
      selectedRowKeys: [],
      columns: [
        { colKey: 'serial-number', width: 80, title: '\u5E8F\u53F7' },
        { colKey: 'applicant', title: '\u7533\u8BF7\u4EBA', width: '100' },
        {
          colKey: 'status',
          title: '\u7533\u8BF7\u72B6\u6001',
          width: '150',
          cell: (h, { row }) => {
            const statusNameListMap = {
              0: { label: '\u5BA1\u6279\u901A\u8FC7', theme: 'success', icon: <CheckCircleFilledIcon /> },
              1: { label: '\u5BA1\u6279\u5931\u8D25', theme: 'danger', icon: <CloseCircleFilledIcon /> },
              2: { label: '\u5BA1\u6279\u8FC7\u671F', theme: 'warning', icon: <ErrorCircleFilledIcon /> },
            };
            return (
              <t-tag shape="round" theme={statusNameListMap[row.status].theme} variant="light-outline">
                {statusNameListMap[row.status].icon}
                {statusNameListMap[row.status].label}
              </t-tag>
            );
          },
        },
        { colKey: 'channel', title: '\u7B7E\u7F72\u65B9\u5F0F', width: '120' },
        // { colKey: 'detail.email', title: '\u90AE\u7BB1\u5730\u5740', ellipsis: true },
        { colKey: 'createTime', title: '\u7533\u8BF7\u65F6\u95F4' },
        { colKey: 'row-select', type: 'multiple', width: 46 },
      ],
      /**
       * 1. \u672C\u5730\u5206\u9875\u65B9\u5F0F\u4E00\uFF08\u975E\u53D7\u63A7\u7528\u6CD5\uFF09\uFF1A\u4F7F\u7528 defaultCurrent \u548C defaultPageSize \u8BBE\u7F6E\u9ED8\u8BA4\u5206\u9875\u4FE1\u606F\uFF0C\u4EC5\u7B2C\u4E00\u6B21\u6709\u6548
       *
       * 2. \u672C\u5730\u5206\u9875\u65B9\u5F0F\u4E8C\uFF08\u53D7\u63A7\u7528\u6CD5\uFF09\uFF1A\u4F7F\u7528 current \u548C pageSize \u8BBE\u7F6E\u5206\u9875\u4FE1\u606F\uFF0C\u4EFB\u4F55\u65F6\u5019\u6709\u6548\uFF0C
       *    \u6B64\u65F6\uFF0C\u6CE8\u610F\u9700\u8981\u5728 onPageChange \u4E2D\u5BF9 pagination.current \u548C pagination.pageSize \u8FDB\u884C\u8D4B\u503C
       * */
      pagination: {
        current: 2,
        pageSize: 5,
        // defaultCurrent: 2,
        // defaultPageSize: 5,
        total: TOTAL,
        showJumper: true,
      },
    };
  },
  methods: {
    // \u5206\u9875\u3001\u6392\u5E8F\u3001\u8FC7\u6EE4\u7B49\u64CD\u4F5C\u89E6\u53D1\u5747\u4F1A\u89E6\u53D1 change \u4E8B\u4EF6
    onChange(params, context) {
      console.log('change:', params, context);
    },
    // \u5206\u9875\u53D8\u5316\u65F6\u89E6\u53D1\u8BE5\u4E8B\u4EF6
    onPageChange(pageInfo, newData) {
      if (!this.pagination.defaultCurrent) {
        // \u53D7\u63A7\u7528\u6CD5\u6240\u9700\uFF0C\u5373\u4F7F\u7528 pagination.current \u548C pagination.pageSize \u65F6\uFF0C\u5FC5\u987B\u4FDD\u7559\u6062\u590D\u4E0B\u9762 2 \u884C\u4EE3\u7801
        this.pagination.current = pageInfo.current;
        this.pagination.pageSize = pageInfo.pageSize;
      }
      console.log('page-change:', pageInfo, newData);
    },
    onSelectChange(selectedRowKeys, context) {
      console.log(selectedRowKeys, context);
    },
  },
};
<\/script>
`,mn=`<template>
  <t-space direction="vertical">
    <!-- \u6309\u94AE\u64CD\u4F5C\u533A\u57DF -->
    <t-radio-group v-model="reserveSelectedRowOnPaginate" variant="default-filled">
      <t-radio-button :value="true">\u8DE8\u5206\u9875\u9009\u4E2D</t-radio-button>
      <t-radio-button :value="false">\u5F53\u524D\u9875\u9009\u4E2D</t-radio-button>
    </t-radio-group>

    <t-table
      rowKey="index"
      :data="data"
      :columns="columns"
      :pagination="pagination"
      :selected-row-keys.sync="selectedRowKeys"
      :reserve-selected-row-on-paginate="reserveSelectedRowOnPaginate"
      lazyLoad
      @change="onChange"
      @page-change="onPageChange"
      @select-change="onSelectChange"
    ></t-table>
  </t-space>
</template>
<script setup lang="jsx">
import { ref, reactive } from 'vue';
import { ErrorCircleFilledIcon, CheckCircleFilledIcon, CloseCircleFilledIcon } from 'tdesign-icons-vue';

const initialData = [];
const TOTAL = 59;
for (let i = 0; i < TOTAL; i++) {
  initialData.push({
    index: i + 1,
    applicant: ['\u8D3E\u660E', '\u5F20\u4E09', '\u738B\u82B3'][i % 3],
    status: i % 3,
    channel: ['\u7535\u5B50\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72'][i % 3],
    detail: {
      email: ['w.cezkdudy@lhll.au', 'r.nmgw@peurezgn.sl', 'p.cumx@rampblpa.ru'][i % 3],
    },
    matters: ['\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528', 'algolia \u670D\u52A1\u62A5\u9500', '\u76F8\u5173\u5468\u8FB9\u5236\u4F5C\u8D39', '\u6FC0\u52B1\u5956\u54C1\u5FEB\u9012\u8D39'][i % 4],
    time: [2, 3, 1, 4][i % 4],
    createTime: ['2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01'][i % 4],
  });
}
const data = ref(initialData);
const reserveSelectedRowOnPaginate = ref(true);
const selectedRowKeys = ref([]);
const columns = ref([
  {
    colKey: 'serial-number',
    width: 80,
    title: '\u5E8F\u53F7',
  },
  {
    colKey: 'applicant',
    title: '\u7533\u8BF7\u4EBA',
    width: '100',
  },
  {
    colKey: 'status',
    title: '\u7533\u8BF7\u72B6\u6001',
    width: '150',
    cell: (h, { row }) => {
      const statusNameListMap = {
        0: {
          label: '\u5BA1\u6279\u901A\u8FC7',
          theme: 'success',
          icon: <CheckCircleFilledIcon />,
        },
        1: {
          label: '\u5BA1\u6279\u5931\u8D25',
          theme: 'danger',
          icon: <CloseCircleFilledIcon />,
        },
        2: {
          label: '\u5BA1\u6279\u8FC7\u671F',
          theme: 'warning',
          icon: <ErrorCircleFilledIcon />,
        },
      };
      return (
        <t-tag shape="round" theme={statusNameListMap[row.status].theme} variant="light-outline">
          {statusNameListMap[row.status].icon}
          {statusNameListMap[row.status].label}
        </t-tag>
      );
    },
  },
  {
    colKey: 'channel',
    title: '\u7B7E\u7F72\u65B9\u5F0F',
    width: '120',
  },
  // { colKey: 'detail.email', title: '\u90AE\u7BB1\u5730\u5740', ellipsis: true },
  {
    colKey: 'createTime',
    title: '\u7533\u8BF7\u65F6\u95F4',
  },
  {
    colKey: 'row-select',
    type: 'multiple',
    width: 46,
  },
]);
/**
 * 1. \u672C\u5730\u5206\u9875\u65B9\u5F0F\u4E00\uFF08\u975E\u53D7\u63A7\u7528\u6CD5\uFF09\uFF1A\u4F7F\u7528 defaultCurrent \u548C defaultPageSize \u8BBE\u7F6E\u9ED8\u8BA4\u5206\u9875\u4FE1\u606F\uFF0C\u4EC5\u7B2C\u4E00\u6B21\u6709\u6548
 *
 * 2. \u672C\u5730\u5206\u9875\u65B9\u5F0F\u4E8C\uFF08\u53D7\u63A7\u7528\u6CD5\uFF09\uFF1A\u4F7F\u7528 current \u548C pageSize \u8BBE\u7F6E\u5206\u9875\u4FE1\u606F\uFF0C\u4EFB\u4F55\u65F6\u5019\u6709\u6548\uFF0C
 *    \u6B64\u65F6\uFF0C\u6CE8\u610F\u9700\u8981\u5728 onPageChange \u4E2D\u5BF9 pagination.current \u548C pagination.pageSize \u8FDB\u884C\u8D4B\u503C
 * */
const pagination = reactive({
  current: 2,
  pageSize: 5,
  // defaultCurrent: 2,
  // defaultPageSize: 5,
  total: TOTAL,
  showJumper: true,
});
// \u5206\u9875\u3001\u6392\u5E8F\u3001\u8FC7\u6EE4\u7B49\u64CD\u4F5C\u89E6\u53D1\u5747\u4F1A\u89E6\u53D1 change \u4E8B\u4EF6
const onChange = (params, context) => {
  console.log('change:', params, context);
};
// \u5206\u9875\u53D8\u5316\u65F6\u89E6\u53D1\u8BE5\u4E8B\u4EF6
const onPageChange = (pageInfo, newData) => {
  if (!pagination.defaultCurrent) {
    // \u53D7\u63A7\u7528\u6CD5\u6240\u9700\uFF0C\u5373\u4F7F\u7528 pagination.current \u548C pagination.pageSize \u65F6\uFF0C\u5FC5\u987B\u4FDD\u7559\u6062\u590D\u4E0B\u9762 2 \u884C\u4EE3\u7801
    pagination.current = pageInfo.current;
    pagination.pageSize = pageInfo.pageSize;
  }
  console.log('page-change:', pageInfo, newData);
};
const onSelectChange = (selectedRowKeys, context) => {
  console.log(selectedRowKeys, context);
};
<\/script>
`,hn=`<template>
  <t-form class="tdesign-demo-block-column tdesign-demo__table">
    <!-- \u662F\u5426\u663E\u793A\u8868\u683C\u8FB9\u6846 \u548C \u5BF9\u9F50\u65B9\u5F0F\u90FD\u51B3\u5B9A\u7740 \u6392\u5E8F\u56FE\u6807 \u548C \u7B5B\u9009\u56FE\u6807\u7684\u6392\u5217\u4F4D\u7F6E -->
    <div>
      <t-radio-group v-model="align" variant="default-filled">
        <t-radio-button value="left">\u5DE6\u5BF9\u9F50</t-radio-button>
        <t-radio-button value="center">\u5C45\u4E2D\u5BF9\u9F50</t-radio-button>
        <t-radio-button value="right">\u53F3\u5BF9\u9F50</t-radio-button>
      </t-radio-group>
      <t-button @click="setFilters" variant="text" style="margin-left: 36px">\u6E05\u9664\u7B5B\u9009\u6761\u4EF6</t-button>
      <span style="padding-left: 36px">\u5DF2\u9009\u7B5B\u9009\u6761\u4EF6\uFF1A{{ filterValue }}</span>
    </div>
    <div>
      <t-checkbox v-model="bordered">\u662F\u5426\u663E\u793A\u8868\u683C\u8FB9\u6846</t-checkbox>
    </div>

    <!-- 1. \u6B64\u5904\u4EE3\u7801\u6709\u6548\uFF0C\u52FF\u5220\uFF01\u652F\u6301\u8BED\u6CD5\u7CD6 filter-value.sync \uFF0C \u652F\u6301\u975E\u53D7\u63A7\u5C5E\u6027 defaultFilterValue -->
    <!-- 2. \u5176\u4E2D\uFF0CfilterIcon \u7528\u4E8E\u81EA\u5B9A\u4E49\u7B5B\u9009\u56FE\u6807\uFF0C\u652F\u6301\u6E32\u67D3\u51FD\u6570 props.filterIcon\uFF0C\u652F\u6301\u63D2\u69FD filterIcon\u3002 -->
    <!-- 3. filterRow={() => null}\uFF0C\u5219\u4E0D\u4F1A\u663E\u793A\u8FC7\u6EE4\u884C -->
    <!-- <t-table
      rowKey='key'
      :columns="columns"
      :data="data"
      :filter-value.sync="filterValue"
      :filterIcon="filterIcon"
    >
      <template #filterRow>\u81EA\u5B9A\u4E49\u8FC7\u6EE4\u884C\u4FE1\u606F</template>
    </t-table> -->

    <!-- 1. v-model:sync \u7B49\u540C\u4E8E filter-value + filter-change -->
    <!-- 2. :filter-row="() => null" \u7528\u4E8E\u9690\u85CF\u8FC7\u6EE4\u7ED3\u679C\u884C -->
    <!-- 3. <template #filterRow><p>\u8FD9\u662F\u81EA\u5B9A\u4E49\u7684\u8FC7\u6EE4\u7ED3\u679C\u884C</p></template> \uFF0C\u53EF\u4F7F\u7528\u63D2\u69FD\u5B8C\u5168\u81EA\u5B9A\u4E49\u7ED3\u679C\u884C\u5185\u5BB9-->
    <!-- 4. :attach="getAttach" \u7EDF\u4E00\u63A7\u5236\u6D6E\u5C42\u6302\u8F7D\u5143\u7D20 -->
    <!-- 5. \u6BCF\u4E00\u5217\u81EA\u5B9A\u4E49\u4E0D\u540C\u7B5B\u9009\u56FE\u6807\uFF1A
      <template #filterIcon="{ col, colIndex }">
        <div><FilterIcon /> {{ colIndex }}</div>
      </template>
    -->
    <t-table
      rowKey="key"
      :columns="columns"
      :data="data"
      :filter-value="filterValue"
      :bordered="bordered"
      table-layout="fixed"
      resizable
      lazyLoad
      @filter-change="onFilterChange"
      @change="onChange"
    ></t-table>
  </t-form>
</template>

<script lang="jsx">
import {
  DateRangePickerPanel,
  // Textarea,
} from 'tdesign-vue';
import { ErrorCircleFilledIcon, CheckCircleFilledIcon, CloseCircleFilledIcon } from 'tdesign-icons-vue';
import { isNumber } from 'lodash-es';

const initialData = new Array(5).fill(null).map((_, i) => ({
  key: String(i + 1),
  applicant: ['\u8D3E\u660E', '\u5F20\u4E09', '\u738B\u82B3'][i % 3],
  status: (i % 3) + 1,
  channel: ['\u7535\u5B50\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72'][i % 3],
  detail: {
    email: ['w.cezkdudy@lhll.au', 'r.nmgw@peurezgn.sl', 'p.cumx@rampblpa.ru'][i % 3],
  },
  matters: ['\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528', 'algolia \u670D\u52A1\u62A5\u9500', '\u76F8\u5173\u5468\u8FB9\u5236\u4F5C\u8D39', '\u6FC0\u52B1\u5956\u54C1\u5FEB\u9012\u8D39'][i % 4],
  time: [2, 3, 1, 4][i % 4],
  createTime: ['2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01'][i % 4],
}));

export default {
  data() {
    return {
      data: initialData,
      filterValue: {
        createTime: [],
      },
      bordered: true,
      align: 'left',
    };
  },

  computed: {
    columns() {
      return [
        {
          colKey: 'applicant',
          title: '\u7533\u8BF7\u4EBA',
          width: 100,
          foot: '-',
        },
        {
          title: () => '\u7533\u8BF7\u72B6\u6001',
          colKey: 'status',
          align: this.align,
          // \u5355\u9009\u8FC7\u6EE4\u914D\u7F6E
          filter: {
            // \u5F53 title \u5B57\u6BB5\u4F7F\u7528\u590D\u6742\u7684\u51FD\u6570\u6216\u63D2\u69FD\u52A8\u6001\u5B9A\u4E49\u65F6\uFF0C\u7B5B\u9009\u7ED3\u679C\u53C8\u53EA\u9700\u663E\u793A\u7B80\u5355\u7684\u6587\u672C\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528 filter.label
            // label: '\u7533\u8BF7\u72B6\u6001',
            type: 'single',
            list: [
              { label: '\u5BA1\u6279\u901A\u8FC7', value: 1 },
              { label: '\u5DF2\u8FC7\u671F', value: 2 },
              { label: '\u5BA1\u6279\u5931\u8D25', value: 3 },
            ],
            // you can also set listFilterConfig to be \`true\`
            listFilterConfig: {
              props: { placeholder: 'Search' },
              style: { width: '120px' },
              // className: '',
              // slots: {},
              // filterMethod: (option, keyword) => option.label.includes(keyword),
            },
            // confirm to search and hide filter popup
            confirmEvents: ['onChange'],
            // \u652F\u6301\u900F\u4F20\u5168\u90E8 Popup \u7EC4\u4EF6\u5C5E\u6027
            popupProps: {
              overlayInnerClassName: 't-table__list-filter-input--sticky',
              // overlayInnerStyle: { maxHeight: '280px', overflow: 'auto' },
              // attach: () => document.body,
            },
          },
          cell: (h, { row }) => {
            const statusNameListMap = {
              1: { label: '\u5BA1\u6279\u901A\u8FC7', theme: 'success', icon: <CheckCircleFilledIcon /> },
              2: { label: '\u5BA1\u6279\u5931\u8D25', theme: 'danger', icon: <CloseCircleFilledIcon /> },
              3: { label: '\u5BA1\u6279\u8FC7\u671F', theme: 'warning', icon: <ErrorCircleFilledIcon /> },
            };
            return (
              <t-tag shape="round" theme={statusNameListMap[row.status].theme} variant="light-outline">
                {statusNameListMap[row.status].icon}
                {statusNameListMap[row.status].label}
              </t-tag>
            );
          },
        },
        {
          title: '\u7B7E\u7F72\u65B9\u5F0F',
          colKey: 'channel',
          // \u591A\u9009\u8FC7\u6EE4\u914D\u7F6E
          filter: {
            type: 'multiple',
            resetValue: [],
            list: [
              { label: 'Check All', checkAll: true },
              { label: '\u7535\u5B50\u7B7E\u7F72', value: '\u7535\u5B50\u7B7E\u7F72' },
              { label: '\u7EB8\u8D28\u7B7E\u7F72', value: '\u7EB8\u8D28\u7B7E\u7F72' },
            ],
            // \u662F\u5426\u663E\u793A\u91CD\u7F6E\u53D6\u6D88\u6309\u94AE\uFF0C\u4E00\u822C\u60C5\u51B5\u4E0D\u9700\u8981\u663E\u793A
            showConfirmAndReset: true,
          },
        },
        {
          title: '\u90AE\u7BB1\u5730\u5740',
          colKey: 'detail.email',
          // \u8F93\u5165\u6846\u8FC7\u6EE4\u914D\u7F6E
          filter: {
            type: 'input',

            // \u6587\u672C\u57DF\u641C\u7D22
            // component: Textarea,

            resetValue: '',
            // \u6309\u4E0B Enter \u952E\u65F6\u4E5F\u89E6\u53D1\u786E\u8BA4\u641C\u7D22
            confirmEvents: ['onEnter'],
            props: {
              placeholder: '\u8F93\u5165\u5173\u952E\u8BCD\u8FC7\u6EE4',
              onChange: this.oneEmailChange,
            },
            // \u662F\u5426\u663E\u793A\u91CD\u7F6E\u53D6\u6D88\u6309\u94AE\uFF0C\u4E00\u822C\u60C5\u51B5\u4E0D\u9700\u8981\u663E\u793A
            showConfirmAndReset: true,
          },
        },
        {
          title: '\u7533\u8BF7\u65F6\u95F4',
          colKey: 'createTime',
          // \u7528\u4E8E\u67E5\u770B\u540C\u65F6\u5B58\u5728\u6392\u5E8F\u548C\u8FC7\u6EE4\u65F6\u7684\u56FE\u6807\u663E\u793A\u662F\u5426\u6B63\u5E38
          sorter: true,
          // \u81EA\u5B9A\u4E49\u8FC7\u6EE4\u7EC4\u4EF6\uFF1A\u65E5\u671F\u8FC7\u6EE4\u914D\u7F6E\uFF0C\u8BF7\u786E\u4FDD\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u5305\u542B value \u548C onChange \u5C5E\u6027
          filter: {
            component: DateRangePickerPanel,
            props: {
              firstDayOfWeek: 7,
            },
            attrs: {
              'data-id': 'attribute-id-value',
            },
            classNames: 'custom-class-name',
            styles: { fontSize: '14px' },
            // \u662F\u5426\u663E\u793A\u91CD\u7F6E\u53D6\u6D88\u6309\u94AE\uFF0C\u4E00\u822C\u60C5\u51B5\u4E0D\u9700\u8981\u663E\u793A
            showConfirmAndReset: true,
            // \u65E5\u671F\u8303\u56F4\u662F\u4E00\u4E2A\u7EC4\u4EF6\uFF0C\u91CD\u7F6E\u65F6\u9700\u8D4B\u503C\u4E3A []
            resetValue: [],
          },
        },
      ];
    },
  },

  methods: {
    // filters \u53C2\u6570\u5305\u542B\u81EA\u5B9A\u4E49\u8FC7\u6EE4\u7EC4\u4EF6 \u65E5\u671F\u9009\u62E9\u5668 \u7684\u503C
    onFilterChange(filters, ctx) {
      console.log('filter-change', filters, ctx);
      // \u4FDD\u8BC1\u65E5\u671F\u662F\u4E00\u4E2A\u6570\u7EC4
      this.filterValue = filters;
      // \u6A21\u62DF\u5F02\u6B65\u8BF7\u6C42\u8FDB\u884C\u6570\u636E\u8FC7\u6EE4
      this.request(this.filterValue);
    },
    // \u7B5B\u9009\u3001\u5206\u9875\u3001\u6392\u5E8F\u7B49\u529F\u80FD\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u5747\u4F1A\u89E6\u53D1 change \u4E8B\u4EF6
    onChange(info, context) {
      console.log('change', info, context, '\u7B5B\u9009\u3001\u5206\u9875\u3001\u6392\u5E8F\u7B49\u529F\u80FD\u53D1\u751F\u53D8\u5316\u5747\u4F1A\u89E6\u53D1');
    },
    setFilters() {
      this.filterValue = {};
      this.data = initialData;
    },
    // filterIcon(h) {
    //   console.log(h);
    //   return <i>icon</i>;
    // },
    oneEmailChange(val, ctx) {
      console.log(val, ctx);
    },
    // // \u7EDF\u4E00\u914D\u7F6E\u7B5B\u9009\u3001\u7701\u7565\u7B49\u6D6E\u5C42\u7ED1\u5B9A\u7684\u4F4D\u7F6E
    // getAttach() {
    //   return document.body;
    // },
    request(filters) {
      const timer = setTimeout(() => {
        clearTimeout(timer);
        this.data = initialData.filter((item) => {
          let result = true;
          if (isNumber(filters.status)) {
            result = item.status === filters.status;
          }
          if (result && filters.channel && filters.channel.length) {
            result = filters.channel.includes(item.channel);
          }
          if (result && filters.email) {
            result = item.email.indexOf(filters.email) !== -1;
          }
          if (result && filters.createTime && filters.createTime.length) {
            result = item.createTime === filters.createTime;
          }
          return result;
        });
      }, 100);
    },
  },
};
<\/script>
`,gn=`<template>
  <t-form class="tdesign-demo-block-column tdesign-demo__table">
    <!-- \u662F\u5426\u663E\u793A\u8868\u683C\u8FB9\u6846 \u548C \u5BF9\u9F50\u65B9\u5F0F\u90FD\u51B3\u5B9A\u7740 \u6392\u5E8F\u56FE\u6807 \u548C \u7B5B\u9009\u56FE\u6807\u7684\u6392\u5217\u4F4D\u7F6E -->
    <div>
      <t-radio-group v-model="align" variant="default-filled">
        <t-radio-button value="left">\u5DE6\u5BF9\u9F50</t-radio-button>
        <t-radio-button value="center">\u5C45\u4E2D\u5BF9\u9F50</t-radio-button>
        <t-radio-button value="right">\u53F3\u5BF9\u9F50</t-radio-button>
      </t-radio-group>
      <t-button @click="setFilters" variant="text" style="margin-left: 36px">\u6E05\u9664\u7B5B\u9009\u6761\u4EF6</t-button>
      <span style="padding-left: 36px">\u5DF2\u9009\u7B5B\u9009\u6761\u4EF6\uFF1A{{ filterValue }}</span>
    </div>
    <div>
      <t-checkbox v-model="bordered">\u662F\u5426\u663E\u793A\u8868\u683C\u8FB9\u6846</t-checkbox>
    </div>

    <!-- 1. \u6B64\u5904\u4EE3\u7801\u6709\u6548\uFF0C\u52FF\u5220\uFF01\u652F\u6301\u8BED\u6CD5\u7CD6 filter-value.sync \uFF0C \u652F\u6301\u975E\u53D7\u63A7\u5C5E\u6027 defaultFilterValue -->
    <!-- 2. \u5176\u4E2D\uFF0CfilterIcon \u7528\u4E8E\u81EA\u5B9A\u4E49\u7B5B\u9009\u56FE\u6807\uFF0C\u652F\u6301\u6E32\u67D3\u51FD\u6570 props.filterIcon\uFF0C\u652F\u6301\u63D2\u69FD filterIcon\u3002 -->
    <!-- 3. filterRow={() => null}\uFF0C\u5219\u4E0D\u4F1A\u663E\u793A\u8FC7\u6EE4\u884C -->
    <!-- <t-table
      rowKey='key'
      :columns="columns"
      :data="data"
      :filter-value.sync="filterValue"
      :filterIcon="filterIcon"
    >
      <template #filterRow>\u81EA\u5B9A\u4E49\u8FC7\u6EE4\u884C\u4FE1\u606F</template>
    </t-table> -->

    <!-- 1. v-model:sync \u7B49\u540C\u4E8E filter-value + filter-change -->
    <!-- 2. :filter-row="() => null" \u7528\u4E8E\u9690\u85CF\u8FC7\u6EE4\u7ED3\u679C\u884C -->
    <!-- 3. <template #filterRow><p>\u8FD9\u662F\u81EA\u5B9A\u4E49\u7684\u8FC7\u6EE4\u7ED3\u679C\u884C</p></template> \uFF0C\u53EF\u4F7F\u7528\u63D2\u69FD\u5B8C\u5168\u81EA\u5B9A\u4E49\u7ED3\u679C\u884C\u5185\u5BB9-->
    <!-- 4. :attach="getAttach" \u7EDF\u4E00\u63A7\u5236\u6D6E\u5C42\u6302\u8F7D\u5143\u7D20 -->
    <!-- 5. \u6BCF\u4E00\u5217\u81EA\u5B9A\u4E49\u4E0D\u540C\u7B5B\u9009\u56FE\u6807\uFF1A
      <template #filterIcon="{ col, colIndex }">
        <div><FilterIcon /> {{ colIndex }}</div>
      </template>
    -->
    <t-table
      rowKey="key"
      :columns="columns"
      :data="data"
      :filter-value="filterValue"
      :bordered="bordered"
      table-layout="fixed"
      resizable
      lazyLoad
      @filter-change="onFilterChange"
      @change="onChange"
    ></t-table>
  </t-form>
</template>

<script setup lang="jsx">
import { ref, reactive, computed } from 'vue';
import {
  DateRangePickerPanel,
  // Textarea,
} from 'tdesign-vue';
import { ErrorCircleFilledIcon, CheckCircleFilledIcon, CloseCircleFilledIcon } from 'tdesign-icons-vue';
import { isNumber } from 'lodash-es';

const initialData = new Array(5).fill(null).map((_, i) => ({
  key: String(i + 1),
  applicant: ['\u8D3E\u660E', '\u5F20\u4E09', '\u738B\u82B3'][i % 3],
  status: (i % 3) + 1,
  channel: ['\u7535\u5B50\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72'][i % 3],
  detail: {
    email: ['w.cezkdudy@lhll.au', 'r.nmgw@peurezgn.sl', 'p.cumx@rampblpa.ru'][i % 3],
  },
  matters: ['\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528', 'algolia \u670D\u52A1\u62A5\u9500', '\u76F8\u5173\u5468\u8FB9\u5236\u4F5C\u8D39', '\u6FC0\u52B1\u5956\u54C1\u5FEB\u9012\u8D39'][i % 4],
  time: [2, 3, 1, 4][i % 4],
  createTime: ['2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01'][i % 4],
}));
const data = ref(initialData);
let filterValue = reactive({
  createTime: [],
});
const bordered = ref(true);
const align = ref('left');
const oneEmailChange = (val, ctx) => {
  console.log(val, ctx);
};
const columns = computed(() => [
  {
    colKey: 'applicant',
    title: '\u7533\u8BF7\u4EBA',
    width: 100,
    foot: '-',
  },
  {
    title: () => '\u7533\u8BF7\u72B6\u6001',
    colKey: 'status',
    align: align.value,
    // \u5355\u9009\u8FC7\u6EE4\u914D\u7F6E
    filter: {
      // \u5F53 title \u5B57\u6BB5\u4F7F\u7528\u590D\u6742\u7684\u51FD\u6570\u6216\u63D2\u69FD\u52A8\u6001\u5B9A\u4E49\u65F6\uFF0C\u7B5B\u9009\u7ED3\u679C\u53C8\u53EA\u9700\u663E\u793A\u7B80\u5355\u7684\u6587\u672C\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528 filter.label
      // label: '\u7533\u8BF7\u72B6\u6001',
      type: 'single',
      list: [
        {
          label: '\u5BA1\u6279\u901A\u8FC7',
          value: 1,
        },
        {
          label: '\u5DF2\u8FC7\u671F',
          value: 2,
        },
        {
          label: '\u5BA1\u6279\u5931\u8D25',
          value: 3,
        },
      ],
      // you can also set listFilterConfig to be \`true\`
      listFilterConfig: {
        props: { placeholder: 'Search' },
        style: { width: '120px' },
        // className: '',
        // slots: {},
        // filterMethod: (option, keyword) => option.label.includes(keyword),
      },
      // confirm to search and hide filter popup
      confirmEvents: ['onChange'],
      // \u652F\u6301\u900F\u4F20\u5168\u90E8 Popup \u7EC4\u4EF6\u5C5E\u6027
      popupProps: {
        overlayInnerClassName: 't-table__list-filter-input--sticky',
        // overlayInnerStyle: { maxHeight: '280px', overflow: 'auto' },
        // attach: () => document.body,
      },
    },
    cell: (h, { row }) => {
      const statusNameListMap = {
        1: {
          label: '\u5BA1\u6279\u901A\u8FC7',
          theme: 'success',
          icon: <CheckCircleFilledIcon />,
        },
        2: {
          label: '\u5BA1\u6279\u5931\u8D25',
          theme: 'danger',
          icon: <CloseCircleFilledIcon />,
        },
        3: {
          label: '\u5BA1\u6279\u8FC7\u671F',
          theme: 'warning',
          icon: <ErrorCircleFilledIcon />,
        },
      };
      return (
        <t-tag shape="round" theme={statusNameListMap[row.status].theme} variant="light-outline">
          {statusNameListMap[row.status].icon}
          {statusNameListMap[row.status].label}
        </t-tag>
      );
    },
  },
  {
    title: '\u7B7E\u7F72\u65B9\u5F0F',
    colKey: 'channel',
    // \u591A\u9009\u8FC7\u6EE4\u914D\u7F6E
    filter: {
      type: 'multiple',
      resetValue: [],
      list: [
        {
          label: 'Check All',
          checkAll: true,
        },
        {
          label: '\u7535\u5B50\u7B7E\u7F72',
          value: '\u7535\u5B50\u7B7E\u7F72',
        },
        {
          label: '\u7EB8\u8D28\u7B7E\u7F72',
          value: '\u7EB8\u8D28\u7B7E\u7F72',
        },
      ],
      // \u662F\u5426\u663E\u793A\u91CD\u7F6E\u53D6\u6D88\u6309\u94AE\uFF0C\u4E00\u822C\u60C5\u51B5\u4E0D\u9700\u8981\u663E\u793A
      showConfirmAndReset: true,
    },
  },
  {
    title: '\u90AE\u7BB1\u5730\u5740',
    colKey: 'detail.email',
    // \u8F93\u5165\u6846\u8FC7\u6EE4\u914D\u7F6E
    filter: {
      type: 'input',
      // \u6587\u672C\u57DF\u641C\u7D22
      // component: Textarea,

      resetValue: '',
      // \u6309\u4E0B Enter \u952E\u65F6\u4E5F\u89E6\u53D1\u786E\u8BA4\u641C\u7D22
      confirmEvents: ['onEnter'],
      props: {
        placeholder: '\u8F93\u5165\u5173\u952E\u8BCD\u8FC7\u6EE4',
        onChange: oneEmailChange,
      },
      // \u662F\u5426\u663E\u793A\u91CD\u7F6E\u53D6\u6D88\u6309\u94AE\uFF0C\u4E00\u822C\u60C5\u51B5\u4E0D\u9700\u8981\u663E\u793A
      showConfirmAndReset: true,
    },
  },
  {
    title: '\u7533\u8BF7\u65F6\u95F4',
    colKey: 'createTime',
    // \u7528\u4E8E\u67E5\u770B\u540C\u65F6\u5B58\u5728\u6392\u5E8F\u548C\u8FC7\u6EE4\u65F6\u7684\u56FE\u6807\u663E\u793A\u662F\u5426\u6B63\u5E38
    sorter: true,
    // \u81EA\u5B9A\u4E49\u8FC7\u6EE4\u7EC4\u4EF6\uFF1A\u65E5\u671F\u8FC7\u6EE4\u914D\u7F6E\uFF0C\u8BF7\u786E\u4FDD\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u5305\u542B value \u548C onChange \u5C5E\u6027
    filter: {
      component: DateRangePickerPanel,
      props: {
        firstDayOfWeek: 7,
      },
      attrs: {
        'data-id': 'attribute-id-value',
      },
      classNames: 'custom-class-name',
      styles: {
        fontSize: '14px',
      },
      // \u662F\u5426\u663E\u793A\u91CD\u7F6E\u53D6\u6D88\u6309\u94AE\uFF0C\u4E00\u822C\u60C5\u51B5\u4E0D\u9700\u8981\u663E\u793A
      showConfirmAndReset: true,
      // \u65E5\u671F\u8303\u56F4\u662F\u4E00\u4E2A\u7EC4\u4EF6\uFF0C\u91CD\u7F6E\u65F6\u9700\u8D4B\u503C\u4E3A []
      resetValue: [],
    },
  },
]);
// filters \u53C2\u6570\u5305\u542B\u81EA\u5B9A\u4E49\u8FC7\u6EE4\u7EC4\u4EF6 \u65E5\u671F\u9009\u62E9\u5668 \u7684\u503C
const onFilterChange = (filters, ctx) => {
  console.log('filter-change', filters, ctx);
  // \u4FDD\u8BC1\u65E5\u671F\u662F\u4E00\u4E2A\u6570\u7EC4
  filterValue = filters;
  // \u6A21\u62DF\u5F02\u6B65\u8BF7\u6C42\u8FDB\u884C\u6570\u636E\u8FC7\u6EE4
  request(filterValue);
};
// \u7B5B\u9009\u3001\u5206\u9875\u3001\u6392\u5E8F\u7B49\u529F\u80FD\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u5747\u4F1A\u89E6\u53D1 change \u4E8B\u4EF6
const onChange = (info, context) => {
  console.log('change', info, context, '\u7B5B\u9009\u3001\u5206\u9875\u3001\u6392\u5E8F\u7B49\u529F\u80FD\u53D1\u751F\u53D8\u5316\u5747\u4F1A\u89E6\u53D1');
};
const setFilters = () => {
  filterValue = {};
  data.value = initialData;
};
// const filterIcon = (h) => {
//   console.log(h);
//   return <i>icon</i>;
// };
// // \u7EDF\u4E00\u914D\u7F6E\u7B5B\u9009\u3001\u7701\u7565\u7B49\u6D6E\u5C42\u7ED1\u5B9A\u7684\u4F4D\u7F6E
// getAttach() {
//   return document.body;
// },
const request = (filters) => {
  const timer = setTimeout(() => {
    clearTimeout(timer);
    data.value = initialData.filter((item) => {
      let result = true;
      if (isNumber(filters.status)) {
        result = item.status === filters.status;
      }
      if (result && filters.channel && filters.channel.length) {
        result = filters.channel.includes(item.channel);
      }
      if (result && filters.email) {
        result = item.email.indexOf(filters.email) !== -1;
      }
      if (result && filters.createTime && filters.createTime.length) {
        result = item.createTime === filters.createTime;
      }
      return result;
    });
  }, 100);
};
<\/script>
`,fn=`<template>
  <t-table
    rowKey="i"
    :bordered="true"
    :data="data"
    :columns="columns"
    :rowspanAndColspan="rowspanAndColspan"
    table-layout="fixed"
    resizable
    lazyLoad
  >
  </t-table>
</template>
<script lang="jsx">
import { CheckCircleFilledIcon, ErrorCircleFilledIcon, CloseCircleFilledIcon } from 'tdesign-icons-vue';

const initialData = new Array(6).fill(null).map((_, i) => ({
  i,
  status: i % 3,
  applicant: ['\u8D3E\u660E', '\u5F20\u4E09', '\u738B\u82B3'][i % 3],
  channel: ['\u7535\u5B50\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72'][i % 3],
  type: ['\u5BA1\u6279\u901A\u8FC7', '\u5DF2\u8FC7\u671F', '\u5BA1\u6279\u5931\u8D25', '\u5BA1\u6279\u4E2D'][i % 4],
  detail: {
    email: [
      'w.cezkdudy@lhll.au',
      'r.nmgw@peurezgn.sl',
      'p.cumx@rampblpa.ru',
      'b.nmgw@peurezgn.sl',
      'd.cumx@rampblpa.ru',
    ][i % 5],
  },
  needed: ['Y', 'N'][i % 1],
  description: ['\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528', 'algolia \u670D\u52A1\u62A5\u9500', '\u76F8\u5173\u5468\u8FB9\u5236\u4F5C\u8D39', '\u6FC0\u52B1\u5956\u54C1\u5FEB\u9012\u8D39'][i % 4],
  createTime: '2021-11-01',
}));
export default {
  data() {
    return {
      data: initialData,
      columns: [
        { colKey: 'applicant', title: '\u7533\u8BF7\u4EBA', width: '100' },
        {
          colKey: 'status',
          title: '\u7533\u8BF7\u72B6\u6001',
          width: '150',
          cell: (h, { row }) => {
            const statusNameListMap = {
              0: { label: '\u5BA1\u6279\u901A\u8FC7', theme: 'success', icon: <CheckCircleFilledIcon /> },
              1: { label: '\u5BA1\u6279\u5931\u8D25', theme: 'danger', icon: <CloseCircleFilledIcon /> },
              2: { label: '\u5BA1\u6279\u8FC7\u671F', theme: 'warning', icon: <ErrorCircleFilledIcon /> },
            };
            return (
              <t-tag shape="round" theme={statusNameListMap[row.status].theme} variant="light-outline">
                {statusNameListMap[row.status].icon}
                {statusNameListMap[row.status].label}
              </t-tag>
            );
          },
        },
        {
          colKey: 'description',
          title: '\u5BA1\u6279\u4E8B\u9879',
          width: 150,
        },
        {
          colKey: 'detail.email',
          title: '\u90AE\u7BB1\u5730\u5740',
        },
        {
          colKey: 'channel',
          // \u591A\u884C\u8868\u5934\u5408\u5E76\u8BF7\u53C2\u8003\u300C\u591A\u7EA7\u8868\u5934\u793A\u4F8B\u300D
          title: '\u5176\u4ED6\u4FE1\u606F',
          // \u4EC5\u9002\u7528\u4E8E\u5355\u884C\u8868\u5934\u5408\u5E76\u5217
          colspan: 2,
          // \u8BBE\u7F6E\u5217\u6837\u5F0F\uFF0C\u6CE8\u91CA\u7684\u793A\u4F8B\u4EE3\u7801\u6709\u6548
          // attrs: ({ type, col, row, colIndex, rowIndex }) => ({
          //   style: {
          //     color: 'blue',
          //   },
          // }),
        },
        {
          colKey: 'createTime',
          title: '\u521B\u5EFA\u65F6\u95F4',
        },
      ],
    };
  },
  methods: {
    rowspanAndColspan({ col, rowIndex, colIndex }) {
      if (colIndex === 0 && rowIndex % 2 === 0) {
        return {
          rowspan: 2,
        };
      }
      if (col.colKey === 'description' && rowIndex === 1) {
        return {
          colspan: 2,
          rowspan: 2,
        };
      }
      if (col.colKey === 'email' && rowIndex === 4) {
        return {
          colspan: 2,
          rowspan: 2,
        };
      }
    },
  },
};
<\/script>
`,wn=`<template>
  <t-table
    rowKey="i"
    :bordered="true"
    :data="data"
    :columns="columns"
    :rowspanAndColspan="rowspanAndColspan"
    table-layout="fixed"
    resizable
    lazyLoad
  >
  </t-table>
</template>
<script setup lang="jsx">
import { ref } from 'vue';
import { CheckCircleFilledIcon, ErrorCircleFilledIcon, CloseCircleFilledIcon } from 'tdesign-icons-vue';

const initialData = new Array(6).fill(null).map((_, i) => ({
  i,
  status: i % 3,
  applicant: ['\u8D3E\u660E', '\u5F20\u4E09', '\u738B\u82B3'][i % 3],
  channel: ['\u7535\u5B50\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72'][i % 3],
  type: ['\u5BA1\u6279\u901A\u8FC7', '\u5DF2\u8FC7\u671F', '\u5BA1\u6279\u5931\u8D25', '\u5BA1\u6279\u4E2D'][i % 4],
  detail: {
    email: [
      'w.cezkdudy@lhll.au',
      'r.nmgw@peurezgn.sl',
      'p.cumx@rampblpa.ru',
      'b.nmgw@peurezgn.sl',
      'd.cumx@rampblpa.ru',
    ][i % 5],
  },
  needed: ['Y', 'N'][i % 1],
  description: ['\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528', 'algolia \u670D\u52A1\u62A5\u9500', '\u76F8\u5173\u5468\u8FB9\u5236\u4F5C\u8D39', '\u6FC0\u52B1\u5956\u54C1\u5FEB\u9012\u8D39'][i % 4],
  createTime: '2021-11-01',
}));
const data = ref(initialData);
const columns = ref([
  {
    colKey: 'applicant',
    title: '\u7533\u8BF7\u4EBA',
    width: '100',
  },
  {
    colKey: 'status',
    title: '\u7533\u8BF7\u72B6\u6001',
    width: '150',
    cell: (h, { row }) => {
      const statusNameListMap = {
        0: {
          label: '\u5BA1\u6279\u901A\u8FC7',
          theme: 'success',
          icon: <CheckCircleFilledIcon />,
        },
        1: {
          label: '\u5BA1\u6279\u5931\u8D25',
          theme: 'danger',
          icon: <CloseCircleFilledIcon />,
        },
        2: {
          label: '\u5BA1\u6279\u8FC7\u671F',
          theme: 'warning',
          icon: <ErrorCircleFilledIcon />,
        },
      };
      return (
        <t-tag shape="round" theme={statusNameListMap[row.status].theme} variant="light-outline">
          {statusNameListMap[row.status].icon}
          {statusNameListMap[row.status].label}
        </t-tag>
      );
    },
  },
  {
    colKey: 'description',
    title: '\u5BA1\u6279\u4E8B\u9879',
    width: 150,
  },
  {
    colKey: 'detail.email',
    title: '\u90AE\u7BB1\u5730\u5740',
  },
  {
    colKey: 'channel',
    // \u591A\u884C\u8868\u5934\u5408\u5E76\u8BF7\u53C2\u8003\u300C\u591A\u7EA7\u8868\u5934\u793A\u4F8B\u300D
    title: '\u5176\u4ED6\u4FE1\u606F',
    // \u4EC5\u9002\u7528\u4E8E\u5355\u884C\u8868\u5934\u5408\u5E76\u5217
    colspan: 2,
    // \u8BBE\u7F6E\u5217\u6837\u5F0F\uFF0C\u6CE8\u91CA\u7684\u793A\u4F8B\u4EE3\u7801\u6709\u6548
    // attrs: ({ type, col, row, colIndex, rowIndex }) => ({
    //   style: {
    //     color: 'blue',
    //   },
    // }),
  },
  {
    colKey: 'createTime',
    title: '\u521B\u5EFA\u65F6\u95F4',
  },
]);
const rowspanAndColspan = ({ col, rowIndex, colIndex }) => {
  if (colIndex === 0 && rowIndex % 2 === 0) {
    return {
      rowspan: 2,
    };
  }
  if (col.colKey === 'description' && rowIndex === 1) {
    return {
      colspan: 2,
      rowspan: 2,
    };
  }
  if (col.colKey === 'email' && rowIndex === 4) {
    return {
      colspan: 2,
      rowspan: 2,
    };
  }
};
<\/script>
`,bn=`<template>
  <!-- \u6CE8\u610F\u63A7\u5236\u7236\u5143\u7D20\u5BBD\u5EA6 -->
  <div style="width: 100%" class="tdesign-demo-block-column-large tdesign-demo-table-multi-head tdesign-demo__tabler">
    <!-- \u6309\u94AE\u64CD\u4F5C\u533A\u57DF -->
    <t-space>
      <t-checkbox v-model="bordered">\u663E\u793A\u8868\u683C\u8FB9\u6846</t-checkbox>
      <!-- \u53EA\u8981\u6709 maxHeight\uFF0C\u5C31\u6709\u56FA\u5B9A\u8868\u5934\uFF0C\u65E0\u8BBA\u8BE5\u503C\u662F\u5426\u5B58\u5728 -->
      <t-checkbox v-model="fixedHeader">\u663E\u793A\u56FA\u5B9A\u8868\u5934</t-checkbox>
      <!-- \u4E3A\u4FDD\u8BC1\u7EC4\u4EF6\u6536\u76CA\u6700\u5927\u5316\uFF0C\u5F53\u6570\u636E\u91CF\u5C0F\u4E8E \`100\` \u65F6\uFF0C\u65E0\u8BBA\u865A\u62DF\u6EDA\u52A8\u7684\u914D\u7F6E\u662F\u5426\u5B58\u5728\uFF0C\u7EC4\u4EF6\u5185\u90E8\u90FD\u4E0D\u4F1A\u5F00\u542F\u865A\u62DF\u6EDA\u52A8 -->
      <!-- <t-checkbox v-model="virtualScroll">\u865A\u62DF\u6EDA\u52A8</t-checkbox> -->
      <t-checkbox v-model="fixedLeftCol">\u56FA\u5B9A\u5DE6\u4FA7\u5217</t-checkbox>
      <t-checkbox v-model="fixedRightCol">\u56FA\u5B9A\u53F3\u4FA7\u5217</t-checkbox>
      <t-checkbox v-model="headerAffixedTop">\u8868\u5934\u5438\u9876</t-checkbox>
    </t-space>

    <!-- tableContentWidth \u5FC5\u987B\u5927\u4E8E\u8868\u683C\u7684\u5916\u5C42\u5BBD\u5EA6\uFF0C\u5426\u5219\u8BF7\u8BBE\u7F6E width: 100% -->
    <!-- \u591A\u7EA7\u8868\u5934\u4E2D\uFF0C\u5982\u679C\u8981\u4F7F\u7528\u56FA\u5B9A\u5217\u529F\u80FD\uFF0C\u5219\u5FC5\u987B\u8BBE\u7F6E colKey \u548C fixed -->
    <!-- :scroll="{ type: 'virtual' }" virtual scroll for a lot of data rendered-->
    <t-table
      row-key="index"
      :data="data"
      :sort.sync="sortInfo"
      :columns="columns"
      :bordered="bordered"
      :max-height="fixedHeader ? 380 : undefined"
      :columnController="{ displayType: 'auto-width' }"
      :filterRow="() => null"
      :headerAffixedTop="headerAffixedTop ? { offsetTop: 87 } : false"
      :scroll="{ type: 'virtual' }"
      drag-sort="col"
      resizable
      lazyLoad
      :table-layout="'fixed'"
      @drag-sort="onDragSort"
      @data-change="onDataChange"
      @filter-change="onFilterChange"
    ></t-table>
  </div>
</template>
<script lang="jsx">
import { ErrorCircleFilledIcon, CheckCircleFilledIcon, CloseCircleFilledIcon } from 'tdesign-icons-vue';

const initialData = [];
for (let i = 0; i < 1000; i++) {
  initialData.push({
    index: i + 1,
    applicant: ['\u8D3E\u660E', '\u5F20\u4E09', '\u738B\u82B3'][i % 3],
    status: i % 3,
    channel: ['\u7535\u5B50\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72'][i % 3],
    time: [3, 2, 4, 1][i % 4],
    createTime: ['2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01'][i % 4],
    property: ['\u7EC4\u957F\u5BA1\u6279', '\u90E8\u95E8\u5BA1\u6279', '\u8D22\u52A1\u5BA1\u6279'][i % 3],
    default: i,
    detail: {
      email: ['w.cezkdudy@lhll.au', 'r.nmgw@peurezgn.sl', 'p.cumx@rampblpa.ru'][i % 3],
      position: \`\u8BFB\u53D6 \${i} \u4E2A\u6570\u636E\u7684\u5D4C\u5957\u4FE1\u606F\u503C\`,
    },
    needed: i % 4 === 0 ? '\u662F' : '\u5426',
    type_default: '-',
    description: '\u6570\u636E\u6E90',
    field1: [100, 200, 400, 500][i % 4],
    field2: [100, 200, 400, 500][i % 4],
    field3: [100, 200, 400, 500][i % 4],
    field4: [100, 200, 400, 500][i % 4],
    field5: '\u5B57\u6BB55',
    field6: '\u5B57\u6BB56',
    field7: \`\u5BA1\u6279\u5355\u53F700\${i + 1}\`,
  });
}

function getColumns(fixedLeftCol, fixedRightCol) {
  return [
    {
      title: '\u7533\u8BF7\u4EBA',
      colKey: 'applicant',
      fixed: fixedLeftCol && 'left',
      width: 100,
    },
    {
      title: '\u7533\u8BF7\u6C47\u603B',
      fixed: fixedLeftCol && 'left',
      width: 100,
      colKey: 'total_info',
      children: [
        {
          align: 'left',
          colKey: 'platform',
          title: '\u7533\u8BF7\u72B6\u6001',
          fixed: fixedLeftCol && 'left',
          width: 120,
          sorter: (a, b) => a.default - b.default,
          cell: (h, { row }) => {
            const statusNameListMap = {
              0: { label: '\u5BA1\u6279\u901A\u8FC7', theme: 'success', icon: <CheckCircleFilledIcon /> },
              1: { label: '\u5BA1\u6279\u5931\u8D25', theme: 'danger', icon: <CloseCircleFilledIcon /> },
              2: { label: '\u5BA1\u6279\u8FC7\u671F', theme: 'warning', icon: <ErrorCircleFilledIcon /> },
            };
            return (
              <t-tag shape="round" theme={statusNameListMap[row.status].theme} variant="light-outline">
                {statusNameListMap[row.status].icon}
                {statusNameListMap[row.status].label}
              </t-tag>
            );
          },
        },
        {
          title: '\u7533\u8BF7\u6E20\u9053\u548C\u91D1\u989D',
          colKey: 'type_default',
          fixed: fixedLeftCol && 'left',
          width: 100,
          children: [
            {
              align: 'left',
              colKey: 'channel',
              title: '\u7C7B\u578B',
              fixed: fixedLeftCol && 'left',
              width: 110,
            },
            {
              align: 'center',
              colKey: 'time',
              title: '\u7533\u8BF7\u8017\u65F6(\u5929)',
              fixed: fixedLeftCol && 'left',
              width: 150,
            },
          ],
        },
      ],
    },
    {
      colKey: 'field1',
      title: '\u4F4F\u5BBF\u8D39',
      width: 100,
    },
    {
      colKey: 'field3',
      title: '\u4EA4\u901A\u8D39',
      width: 100,
    },
    {
      colKey: 'field4',
      title: '\u7269\u6599\u8D39',
      width: 100,
    },
    {
      colKey: 'field2',
      title: '\u5956\u54C1\u6FC0\u52B1\u8D39',
      width: 120,
    },
    {
      title: '\u5BA1\u6279\u6C47\u603B',
      colKey: 'instruction',
      fixed: fixedRightCol && 'right',
      width: 100,
      children: [
        {
          align: 'left',
          colKey: 'property',
          title: '\u5BA1\u6279\u72B6\u6001',
          fixed: fixedRightCol && 'right',
          width: 120,
          filter: {
            type: 'single',
            list: [
              { label: '\u6240\u6709\u72B6\u6001', value: '' },
              { label: '\u7EC4\u957F\u5BA1\u6279', value: '\u7EC4\u957F\u5BA1\u6279' },
              { label: '\u90E8\u95E8\u5BA1\u6279', value: '\u90E8\u95E8\u5BA1\u6279' },
              { label: '\u8D22\u52A1\u5BA1\u6279', value: '\u8D22\u52A1\u5BA1\u6279' },
            ],
          },
        },
        {
          align: 'left',
          ellipsis: true,
          colKey: 'description',
          title: '\u8BF4\u660E',
          fixed: fixedRightCol && 'right',
          width: 100,
          children: [
            {
              colKey: 'field7',
              title: '\u5BA1\u6279\u5355\u53F7',
              fixed: fixedRightCol && 'right',
              width: 120,
            },
            {
              colKey: 'detail.email',
              title: '\u90AE\u7BB1\u5730\u5740',
              fixed: fixedRightCol && 'right',
              ellipsis: true,
              width: 150,
            },
          ],
        },
      ],
    },
    {
      colKey: 'createTime',
      title: '\u7533\u8BF7\u65F6\u95F4',
      fixed: fixedRightCol && 'right',
      width: '120',
    },
  ];
}

export default {
  data() {
    return {
      sortInfo: {},
      bordered: true,
      fixedHeader: true,
      fixedLeftCol: false,
      fixedRightCol: false,
      headerAffixedTop: false,
      // virtualScroll: true,
      data: initialData,
    };
  },
  computed: {
    columns() {
      return getColumns(this.fixedLeftCol, this.fixedRightCol);
    },
  },
  methods: {
    onDataChange(val) {
      this.data = val.concat();
    },
    onFilterChange(filterValue) {
      this.data = initialData.filter((t) => !filterValue.property || filterValue.property === t.property);
    },
    onDragSort(params) {
      console.log('\u62D6\u62FD\u6392\u5E8F\u4E8B\u4EF6\u53C2\u6570\uFF1A', params);
    },
  },
};
<\/script>
`,yn=`<template>
  <!-- \u6CE8\u610F\u63A7\u5236\u7236\u5143\u7D20\u5BBD\u5EA6 -->
  <div style="width: 100%" class="tdesign-demo-block-column-large tdesign-demo-table-multi-head tdesign-demo__tabler">
    <!-- \u6309\u94AE\u64CD\u4F5C\u533A\u57DF -->
    <t-space>
      <t-checkbox v-model="bordered">\u663E\u793A\u8868\u683C\u8FB9\u6846</t-checkbox>
      <!-- \u53EA\u8981\u6709 maxHeight\uFF0C\u5C31\u6709\u56FA\u5B9A\u8868\u5934\uFF0C\u65E0\u8BBA\u8BE5\u503C\u662F\u5426\u5B58\u5728 -->
      <t-checkbox v-model="fixedHeader">\u663E\u793A\u56FA\u5B9A\u8868\u5934</t-checkbox>
      <!-- \u4E3A\u4FDD\u8BC1\u7EC4\u4EF6\u6536\u76CA\u6700\u5927\u5316\uFF0C\u5F53\u6570\u636E\u91CF\u5C0F\u4E8E \`100\` \u65F6\uFF0C\u65E0\u8BBA\u865A\u62DF\u6EDA\u52A8\u7684\u914D\u7F6E\u662F\u5426\u5B58\u5728\uFF0C\u7EC4\u4EF6\u5185\u90E8\u90FD\u4E0D\u4F1A\u5F00\u542F\u865A\u62DF\u6EDA\u52A8 -->
      <!-- <t-checkbox v-model="virtualScroll">\u865A\u62DF\u6EDA\u52A8</t-checkbox> -->
      <t-checkbox v-model="fixedLeftCol">\u56FA\u5B9A\u5DE6\u4FA7\u5217</t-checkbox>
      <t-checkbox v-model="fixedRightCol">\u56FA\u5B9A\u53F3\u4FA7\u5217</t-checkbox>
      <t-checkbox v-model="headerAffixedTop">\u8868\u5934\u5438\u9876</t-checkbox>
    </t-space>

    <!-- tableContentWidth \u5FC5\u987B\u5927\u4E8E\u8868\u683C\u7684\u5916\u5C42\u5BBD\u5EA6\uFF0C\u5426\u5219\u8BF7\u8BBE\u7F6E width: 100% -->
    <!-- \u591A\u7EA7\u8868\u5934\u4E2D\uFF0C\u5982\u679C\u8981\u4F7F\u7528\u56FA\u5B9A\u5217\u529F\u80FD\uFF0C\u5219\u5FC5\u987B\u8BBE\u7F6E colKey \u548C fixed -->
    <!-- :scroll="{ type: 'virtual' }" virtual scroll for a lot of data rendered-->
    <t-table
      row-key="index"
      :data="data"
      :sort.sync="sortInfo"
      :columns="columns"
      :bordered="bordered"
      :max-height="fixedHeader ? 380 : undefined"
      :columnController="{ displayType: 'auto-width' }"
      :filterRow="() => null"
      :headerAffixedTop="headerAffixedTop ? { offsetTop: 87 } : false"
      :scroll="{ type: 'virtual' }"
      drag-sort="col"
      resizable
      lazyLoad
      :table-layout="'fixed'"
      @drag-sort="onDragSort"
      @data-change="onDataChange"
      @filter-change="onFilterChange"
    ></t-table>
  </div>
</template>
<script setup lang="jsx">
import { ref, reactive, computed } from 'vue';
import { ErrorCircleFilledIcon, CheckCircleFilledIcon, CloseCircleFilledIcon } from 'tdesign-icons-vue';

const initialData = [];
for (let i = 0; i < 1000; i++) {
  initialData.push({
    index: i + 1,
    applicant: ['\u8D3E\u660E', '\u5F20\u4E09', '\u738B\u82B3'][i % 3],
    status: i % 3,
    channel: ['\u7535\u5B50\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72'][i % 3],
    time: [3, 2, 4, 1][i % 4],
    createTime: ['2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01'][i % 4],
    property: ['\u7EC4\u957F\u5BA1\u6279', '\u90E8\u95E8\u5BA1\u6279', '\u8D22\u52A1\u5BA1\u6279'][i % 3],
    default: i,
    detail: {
      email: ['w.cezkdudy@lhll.au', 'r.nmgw@peurezgn.sl', 'p.cumx@rampblpa.ru'][i % 3],
      position: \`\u8BFB\u53D6 \${i} \u4E2A\u6570\u636E\u7684\u5D4C\u5957\u4FE1\u606F\u503C\`,
    },
    needed: i % 4 === 0 ? '\u662F' : '\u5426',
    type_default: '-',
    description: '\u6570\u636E\u6E90',
    field1: [100, 200, 400, 500][i % 4],
    field2: [100, 200, 400, 500][i % 4],
    field3: [100, 200, 400, 500][i % 4],
    field4: [100, 200, 400, 500][i % 4],
    field5: '\u5B57\u6BB55',
    field6: '\u5B57\u6BB56',
    field7: \`\u5BA1\u6279\u5355\u53F700\${i + 1}\`,
  });
}
function getColumns(fixedLeftCol, fixedRightCol) {
  return [
    {
      title: '\u7533\u8BF7\u4EBA',
      colKey: 'applicant',
      fixed: fixedLeftCol && 'left',
      width: 100,
    },
    {
      title: '\u7533\u8BF7\u6C47\u603B',
      fixed: fixedLeftCol && 'left',
      width: 100,
      colKey: 'total_info',
      children: [
        {
          align: 'left',
          colKey: 'platform',
          title: '\u7533\u8BF7\u72B6\u6001',
          fixed: fixedLeftCol && 'left',
          width: 120,
          sorter: (a, b) => a.default - b.default,
          cell: (h, { row }) => {
            const statusNameListMap = {
              0: {
                label: '\u5BA1\u6279\u901A\u8FC7',
                theme: 'success',
                icon: <CheckCircleFilledIcon />,
              },
              1: {
                label: '\u5BA1\u6279\u5931\u8D25',
                theme: 'danger',
                icon: <CloseCircleFilledIcon />,
              },
              2: {
                label: '\u5BA1\u6279\u8FC7\u671F',
                theme: 'warning',
                icon: <ErrorCircleFilledIcon />,
              },
            };
            return (
              <t-tag shape="round" theme={statusNameListMap[row.status].theme} variant="light-outline">
                {statusNameListMap[row.status].icon}
                {statusNameListMap[row.status].label}
              </t-tag>
            );
          },
        },
        {
          title: '\u7533\u8BF7\u6E20\u9053\u548C\u91D1\u989D',
          colKey: 'type_default',
          fixed: fixedLeftCol && 'left',
          width: 100,
          children: [
            {
              align: 'left',
              colKey: 'channel',
              title: '\u7C7B\u578B',
              fixed: fixedLeftCol && 'left',
              width: 110,
            },
            {
              align: 'center',
              colKey: 'time',
              title: '\u7533\u8BF7\u8017\u65F6(\u5929)',
              fixed: fixedLeftCol && 'left',
              width: 150,
            },
          ],
        },
      ],
    },
    {
      colKey: 'field1',
      title: '\u4F4F\u5BBF\u8D39',
      width: 100,
    },
    {
      colKey: 'field3',
      title: '\u4EA4\u901A\u8D39',
      width: 100,
    },
    {
      colKey: 'field4',
      title: '\u7269\u6599\u8D39',
      width: 100,
    },
    {
      colKey: 'field2',
      title: '\u5956\u54C1\u6FC0\u52B1\u8D39',
      width: 120,
    },
    {
      title: '\u5BA1\u6279\u6C47\u603B',
      colKey: 'instruction',
      fixed: fixedRightCol && 'right',
      width: 100,
      children: [
        {
          align: 'left',
          colKey: 'property',
          title: '\u5BA1\u6279\u72B6\u6001',
          fixed: fixedRightCol && 'right',
          width: 120,
          filter: {
            type: 'single',
            list: [
              {
                label: '\u6240\u6709\u72B6\u6001',
                value: '',
              },
              {
                label: '\u7EC4\u957F\u5BA1\u6279',
                value: '\u7EC4\u957F\u5BA1\u6279',
              },
              {
                label: '\u90E8\u95E8\u5BA1\u6279',
                value: '\u90E8\u95E8\u5BA1\u6279',
              },
              {
                label: '\u8D22\u52A1\u5BA1\u6279',
                value: '\u8D22\u52A1\u5BA1\u6279',
              },
            ],
          },
        },
        {
          align: 'left',
          ellipsis: true,
          colKey: 'description',
          title: '\u8BF4\u660E',
          fixed: fixedRightCol && 'right',
          width: 100,
          children: [
            {
              colKey: 'field7',
              title: '\u5BA1\u6279\u5355\u53F7',
              fixed: fixedRightCol && 'right',
              width: 120,
            },
            {
              colKey: 'detail.email',
              title: '\u90AE\u7BB1\u5730\u5740',
              fixed: fixedRightCol && 'right',
              ellipsis: true,
              width: 150,
            },
          ],
        },
      ],
    },
    {
      colKey: 'createTime',
      title: '\u7533\u8BF7\u65F6\u95F4',
      fixed: fixedRightCol && 'right',
      width: '120',
    },
  ];
}
const sortInfo = reactive({});
const bordered = ref(true);
const fixedHeader = ref(true);
const fixedLeftCol = ref(false);
const fixedRightCol = ref(false);
const headerAffixedTop = ref(false);
// const virtualScroll = ref(true);
const data = ref(initialData);
const columns = computed(() => getColumns(fixedLeftCol.value, fixedRightCol.value));
const onDataChange = (val) => {
  data.value = val.concat();
};
const onFilterChange = (filterValue) => {
  data.value = initialData.filter((t) => !filterValue.property || filterValue.property === t.property);
};
const onDragSort = (params) => {
  console.log('\u62D6\u62FD\u6392\u5E8F\u4E8B\u4EF6\u53C2\u6570\uFF1A', params);
};
<\/script>
`,xn=`<template>
  <div class="tdesign-demo-block-column">
    <t-table :data="data" :columns="columns" :rowKey="rowKey" :size="size" :loading="true"></t-table>

    <!-- loading-props \u7528\u4E8E\u900F\u4F20\u5168\u90E8\u52A0\u8F7D\u7EC4\u4EF6\u7279\u6027\uFF0C\u4EE5\u4FBF\u5B9E\u73B0\u66F4\u591A\u81EA\u5B9A\u4E49\u5185\u5BB9-->
    <!-- loadingProps.indicator=false \u9690\u85CF\u52A0\u8F7D\u56FE\u6807 -->
    <t-table
      :data="[]"
      :columns="columns"
      :rowKey="rowKey"
      :size="size"
      :loading="true"
      :loading-props="{ indicator: false }"
    >
      <div slot="loading" class="t-table--loading-message">\u{1F60A} \u8FD9\u91CC\u4F7F\u7528\u63D2\u69FD\u81EA\u5B9A\u4E49\u52A0\u8F7D\u72B6\u6001 \u{1F60A}</div>
    </t-table>

    <!-- loadingProps.indicator=false \u9690\u85CF\u52A0\u8F7D\u56FE\u6807 -->
    <t-table :data="[]" :columns="columns" :rowKey="rowKey" :size="size" :loading="renderLoading"></t-table>
  </div>
</template>
<script lang="jsx">
export default {
  data() {
    return {
      data: [],
      columns: [
        {
          align: 'left',
          width: '100',
          className: 'row',
          ellipsis: true,
          colKey: 'type',
          title: '\u7C7B\u578B',
        },
        {
          align: 'left',
          width: '100',
          className: 'test',
          ellipsis: true,
          colKey: 'platform',
          title: '\u5E73\u53F0',
        },
        {
          align: 'left',
          width: '100',
          className: 'test2',
          ellipsis: true,
          colKey: 'property',
          title: '\u5C5E\u6027',
        },
        {
          align: 'left',
          width: '100',
          className: 'test4',
          ellipsis: true,
          colKey: 'default',
          title: '\u9ED8\u8BA4\u503C',
        },
        {
          align: 'left',
          width: '100',
          className: 'test3',
          ellipsis: true,
          colKey: 'needed',
          title: '\u662F\u5426\u5FC5\u4F20',
        },
        {
          align: 'left',
          width: '100',
          className: 'row',
          ellipsis: true,
          colKey: 'description',
          title: '\u8BF4\u660E',
        },
      ],
      rowKey: 'property',
      size: 'small',
      // style: {
      //   height: '100px',
      //   display: 'flex',
      //   alignItems: 'center',
      //   justifyContent: 'center',
      // },
    };
  },
  methods: {
    renderLoading() {
      return <div class="t-table--loading-message">\u8FD9\u91CC\u4F7F\u7528\u6E32\u67D3\u51FD\u6570\u5B9A\u4E49\u52A0\u8F7D\u72B6\u6001</div>;
    },
  },
};
<\/script>
`,Cn=`<template>
  <div class="tdesign-demo-block-column">
    <t-table :data="data" :columns="columns" :rowKey="rowKey" :size="size" :loading="true"></t-table>

    <!-- loading-props \u7528\u4E8E\u900F\u4F20\u5168\u90E8\u52A0\u8F7D\u7EC4\u4EF6\u7279\u6027\uFF0C\u4EE5\u4FBF\u5B9E\u73B0\u66F4\u591A\u81EA\u5B9A\u4E49\u5185\u5BB9-->
    <!-- loadingProps.indicator=false \u9690\u85CF\u52A0\u8F7D\u56FE\u6807 -->
    <t-table
      :data="[]"
      :columns="columns"
      :rowKey="rowKey"
      :size="size"
      :loading="true"
      :loading-props="{ indicator: false }"
    >
      <div slot="loading" class="t-table--loading-message">\u{1F60A} \u8FD9\u91CC\u4F7F\u7528\u63D2\u69FD\u81EA\u5B9A\u4E49\u52A0\u8F7D\u72B6\u6001 \u{1F60A}</div>
    </t-table>

    <!-- loadingProps.indicator=false \u9690\u85CF\u52A0\u8F7D\u56FE\u6807 -->
    <t-table :data="[]" :columns="columns" :rowKey="rowKey" :size="size" :loading="renderLoading"></t-table>
  </div>
</template>
<script setup lang="jsx">
import { ref } from 'vue';

const data = ref([]);
const columns = ref([
  {
    align: 'left',
    width: '100',
    className: 'row',
    ellipsis: true,
    colKey: 'type',
    title: '\u7C7B\u578B',
  },
  {
    align: 'left',
    width: '100',
    className: 'test',
    ellipsis: true,
    colKey: 'platform',
    title: '\u5E73\u53F0',
  },
  {
    align: 'left',
    width: '100',
    className: 'test2',
    ellipsis: true,
    colKey: 'property',
    title: '\u5C5E\u6027',
  },
  {
    align: 'left',
    width: '100',
    className: 'test4',
    ellipsis: true,
    colKey: 'default',
    title: '\u9ED8\u8BA4\u503C',
  },
  {
    align: 'left',
    width: '100',
    className: 'test3',
    ellipsis: true,
    colKey: 'needed',
    title: '\u662F\u5426\u5FC5\u4F20',
  },
  {
    align: 'left',
    width: '100',
    className: 'row',
    ellipsis: true,
    colKey: 'description',
    title: '\u8BF4\u660E',
  },
]);
const rowKey = ref('property');
const size = ref('small');
// const style = reactive({
//   height: '100px',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// });
const renderLoading = () => <div class="t-table--loading-message">\u8FD9\u91CC\u4F7F\u7528\u6E32\u67D3\u51FD\u6570\u5B9A\u4E49\u52A0\u8F7D\u72B6\u6001</div>;
<\/script>
`,vn=`<template>
  <div class="tdesign-demo-block-column-large tdesign-demo__table">
    <div>
      <t-radio-group v-model="asyncLoading" variant="default-filled">
        <t-radio-button value="load-more">\u52A0\u8F7D\u66F4\u591A</t-radio-button>
        <t-radio-button value="loading">\u52A0\u8F7D\u4E2D</t-radio-button>
        <t-radio-button value="loading-custom">\u81EA\u5B9A\u4E49\u52A0\u8F7D\u66F4\u591A</t-radio-button>
        <t-radio-button value="">\u52A0\u8F7D\u5B8C\u6210</t-radio-button>
      </t-radio-group>
    </div>

    <t-table
      rowKey="key"
      :columns="columns"
      :data="data"
      :asyncLoading="loadingNode"
      lazyLoad
      @async-loading-click="onAsyncLoadingClick"
    ></t-table>
  </div>
</template>

<script lang="jsx">
import { ErrorCircleFilledIcon, CheckCircleFilledIcon, CloseCircleFilledIcon } from 'tdesign-icons-vue';

const initialData = [];
for (let i = 0; i < 5; i++) {
  initialData.push({
    index: i + 1,
    applicant: ['\u8D3E\u660E', '\u5F20\u4E09', '\u738B\u82B3'][i % 3],
    status: i % 3,
    channel: ['\u7535\u5B50\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72'][i % 3],
    detail: {
      email: ['w.cezkdudy@lhll.au', 'r.nmgw@peurezgn.sl', 'p.cumx@rampblpa.ru'][i % 3],
    },
    matters: ['\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528', 'algolia \u670D\u52A1\u62A5\u9500', '\u76F8\u5173\u5468\u8FB9\u5236\u4F5C\u8D39', '\u6FC0\u52B1\u5956\u54C1\u5FEB\u9012\u8D39'][i % 4],
    time: [2, 3, 1, 4][i % 4],
    createTime: ['2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01'][i % 4],
  });
}

const initialColumns = [
  { colKey: 'applicant', title: '\u7533\u8BF7\u4EBA', width: '100' },
  {
    colKey: 'status',
    title: '\u7533\u8BF7\u72B6\u6001',
    width: '150',
    cell: (h, { row }) => {
      const statusNameListMap = {
        0: { label: '\u5BA1\u6279\u901A\u8FC7', theme: 'success', icon: <CheckCircleFilledIcon /> },
        1: { label: '\u5BA1\u6279\u5931\u8D25', theme: 'danger', icon: <CloseCircleFilledIcon /> },
        2: { label: '\u5BA1\u6279\u8FC7\u671F', theme: 'warning', icon: <ErrorCircleFilledIcon /> },
      };
      return (
        <t-tag shape="round" theme={statusNameListMap[row.status].theme} variant="light-outline">
          {statusNameListMap[row.status].icon}
          {statusNameListMap[row.status].label}
        </t-tag>
      );
    },
  },
  { colKey: 'channel', title: '\u7B7E\u7F72\u65B9\u5F0F', width: '120' },
  { colKey: 'detail.email', title: '\u90AE\u7BB1\u5730\u5740', ellipsis: true },
  { colKey: 'createTime', title: '\u7533\u8BF7\u65F6\u95F4' },
];

export default {
  data() {
    return {
      data: initialData,
      columns: initialColumns,
      asyncLoading: 'loading',
    };
  },
  computed: {
    // eslint-disable-next-line
    loadingNode(h) {
      return this.asyncLoading === 'loading-custom' ? this.customLoadingNode : this.asyncLoading;
    },
  },
  methods: {
    // eslint-disable-next-line
    customLoadingNode(h) {
      return <div class="t-table__async-loading">\u8FD9\u662F\u81EA\u5B9A\u4E49\u52A0\u8F7D\u72B6\u6001\u548C\u5185\u5BB9</div>;
    },
    onAsyncLoadingClick({ status }) {
      if (status === 'load-more') {
        this.asyncLoading = 'loading';
      }
    },
  },
};
<\/script>
`,kn=`<template>
  <div class="tdesign-demo-block-column-large tdesign-demo__table">
    <div>
      <t-radio-group v-model="asyncLoading" variant="default-filled">
        <t-radio-button value="load-more">\u52A0\u8F7D\u66F4\u591A</t-radio-button>
        <t-radio-button value="loading">\u52A0\u8F7D\u4E2D</t-radio-button>
        <t-radio-button value="loading-custom">\u81EA\u5B9A\u4E49\u52A0\u8F7D\u66F4\u591A</t-radio-button>
        <t-radio-button value="">\u52A0\u8F7D\u5B8C\u6210</t-radio-button>
      </t-radio-group>
    </div>

    <t-table
      rowKey="key"
      :columns="columns"
      :data="data"
      :asyncLoading="loadingNode"
      lazyLoad
      @async-loading-click="onAsyncLoadingClick"
    ></t-table>
  </div>
</template>

<script setup lang="jsx">
import { ref, computed } from 'vue';
import { ErrorCircleFilledIcon, CheckCircleFilledIcon, CloseCircleFilledIcon } from 'tdesign-icons-vue';

const initialData = [];
for (let i = 0; i < 5; i++) {
  initialData.push({
    index: i + 1,
    applicant: ['\u8D3E\u660E', '\u5F20\u4E09', '\u738B\u82B3'][i % 3],
    status: i % 3,
    channel: ['\u7535\u5B50\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72'][i % 3],
    detail: {
      email: ['w.cezkdudy@lhll.au', 'r.nmgw@peurezgn.sl', 'p.cumx@rampblpa.ru'][i % 3],
    },
    matters: ['\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528', 'algolia \u670D\u52A1\u62A5\u9500', '\u76F8\u5173\u5468\u8FB9\u5236\u4F5C\u8D39', '\u6FC0\u52B1\u5956\u54C1\u5FEB\u9012\u8D39'][i % 4],
    time: [2, 3, 1, 4][i % 4],
    createTime: ['2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01'][i % 4],
  });
}
const initialColumns = [
  {
    colKey: 'applicant',
    title: '\u7533\u8BF7\u4EBA',
    width: '100',
  },
  {
    colKey: 'status',
    title: '\u7533\u8BF7\u72B6\u6001',
    width: '150',
    cell: (h, { row }) => {
      const statusNameListMap = {
        0: {
          label: '\u5BA1\u6279\u901A\u8FC7',
          theme: 'success',
          icon: <CheckCircleFilledIcon />,
        },
        1: {
          label: '\u5BA1\u6279\u5931\u8D25',
          theme: 'danger',
          icon: <CloseCircleFilledIcon />,
        },
        2: {
          label: '\u5BA1\u6279\u8FC7\u671F',
          theme: 'warning',
          icon: <ErrorCircleFilledIcon />,
        },
      };
      return (
        <t-tag shape="round" theme={statusNameListMap[row.status].theme} variant="light-outline">
          {statusNameListMap[row.status].icon}
          {statusNameListMap[row.status].label}
        </t-tag>
      );
    },
  },
  {
    colKey: 'channel',
    title: '\u7B7E\u7F72\u65B9\u5F0F',
    width: '120',
  },
  {
    colKey: 'detail.email',
    title: '\u90AE\u7BB1\u5730\u5740',
    ellipsis: true,
  },
  {
    colKey: 'createTime',
    title: '\u7533\u8BF7\u65F6\u95F4',
  },
];
const data = ref(initialData);
const columns = ref(initialColumns);
const asyncLoading = ref('loading');
// eslint-disable-next-line
const loadingNode = computed(() => {
  return asyncLoading.value === 'loading-custom' ? customLoadingNode : asyncLoading.value;
});
// eslint-disable-next-line
const customLoadingNode = (h) => {
  return <div class="t-table__async-loading">\u8FD9\u662F\u81EA\u5B9A\u4E49\u52A0\u8F7D\u72B6\u6001\u548C\u5185\u5BB9</div>;
};
const onAsyncLoadingClick = ({ status }) => {
  if (status === 'load-more') {
    asyncLoading.value = 'loading';
  }
};
<\/script>
`,In=`<template>
  <div class="tdesign-demo-block-column-large">
    <!-- \u9ED8\u8BA4\u7A7A\u5185\u5BB9 -->
    <t-table :data="[]" :columns="columns" :rowKey="rowKey"></t-table>

    <!-- \u4F7F\u7528\u63D2\u69FD\u81EA\u5B9A\u4E49\u7684\u7A7A\u5185\u5BB9 -->

    <t-table :data="[]" :columns="columns" :rowKey="rowKey">
      <template #empty>
        <span>\u{1F60A} \u4F7F\u7528\u63D2\u69FD\u81EA\u5B9A\u4E49\u7684\u7A7A\u5185\u5BB9 \u{1F60A}</span>
      </template>
    </t-table>

    <!-- \u4F7F\u7528\u6E32\u67D3\u51FD\u6570\u81EA\u5B9A\u4E49\u7684\u7A7A\u5185\u5BB9 -->
    <t-table :data="[]" :columns="columns" :empty="empty" :rowKey="rowKey"></t-table>
  </div>
</template>
<script lang="jsx">
export default {
  data() {
    return {
      columns: [
        {
          colKey: 'type',
          title: '\u7C7B\u578B',
        },
        {
          colKey: 'platform',
          title: '\u5E73\u53F0',
        },
        {
          colKey: 'property',
          title: '\u5C5E\u6027',
        },
        {
          colKey: 'default',
          title: '\u9ED8\u8BA4\u503C',
        },
        {
          colKey: 'needed',
          title: '\u662F\u5426\u5FC5\u4F20',
        },
        {
          colKey: 'description',
          title: '\u8BF4\u660E',
        },
      ],
      rowKey: 'property',
      empty: () => <span>\u{1F60A} \u4F7F\u7528\u6E32\u67D3\u51FD\u6570\u81EA\u5B9A\u4E49\u7684\u7A7A\u5185\u5BB9 \u{1F60A}</span>,
    };
  },
};
<\/script>
`,Kn=`<template>
  <div class="tdesign-demo-block-column-large">
    <!-- \u9ED8\u8BA4\u7A7A\u5185\u5BB9 -->
    <t-table :data="[]" :columns="columns" :rowKey="rowKey"></t-table>

    <!-- \u4F7F\u7528\u63D2\u69FD\u81EA\u5B9A\u4E49\u7684\u7A7A\u5185\u5BB9 -->

    <t-table :data="[]" :columns="columns" :rowKey="rowKey">
      <template #empty>
        <span>\u{1F60A} \u4F7F\u7528\u63D2\u69FD\u81EA\u5B9A\u4E49\u7684\u7A7A\u5185\u5BB9 \u{1F60A}</span>
      </template>
    </t-table>

    <!-- \u4F7F\u7528\u6E32\u67D3\u51FD\u6570\u81EA\u5B9A\u4E49\u7684\u7A7A\u5185\u5BB9 -->
    <t-table :data="[]" :columns="columns" :empty="empty" :rowKey="rowKey"></t-table>
  </div>
</template>
<script setup lang="jsx">
import { ref } from 'vue';

const columns = ref([
  {
    colKey: 'type',
    title: '\u7C7B\u578B',
  },
  {
    colKey: 'platform',
    title: '\u5E73\u53F0',
  },
  {
    colKey: 'property',
    title: '\u5C5E\u6027',
  },
  {
    colKey: 'default',
    title: '\u9ED8\u8BA4\u503C',
  },
  {
    colKey: 'needed',
    title: '\u662F\u5426\u5FC5\u4F20',
  },
  {
    colKey: 'description',
    title: '\u8BF4\u660E',
  },
]);
const rowKey = ref('property');
const empty = ref(() => <span>\u{1F60A} \u4F7F\u7528\u6E32\u67D3\u51FD\u6570\u81EA\u5B9A\u4E49\u7684\u7A7A\u5185\u5BB9 \u{1F60A}</span>);
<\/script>
`,Dn=`<template>
  <div class="demo-container t-table-demo-sort tdesign-demo__table">
    <div class="item">
      <!-- \u62D6\u62FD\u6392\u5E8F\u6D89\u53CA\u5230 data \u7684\u53D8\u66F4\uFF0C\u76F8\u5BF9\u6BD4\u8F83\u614E\u91CD\uFF0C\u56E0\u6B64\u4EC5\u652F\u6301\u53D7\u63A7\u7528\u6CD5 -->

      <t-table
        rowKey="index"
        :columns="columns"
        :data="data"
        :pagination="pagination1"
        dragSort="row"
        @drag-sort="onDragSort"
        lazyLoad
      >
        <template #status="{ row }">
          <p class="status" :class="['', 'warning', 'unhealth'][row && row.status]">
            {{ ['\u5065\u5EB7', '\u8B66\u544A', '\u5F02\u5E38'][row && row.status] }}
          </p>
        </template>
      </t-table>
    </div>
  </div>
</template>

<script lang="jsx">
import { ErrorCircleFilledIcon, CheckCircleFilledIcon, CloseCircleFilledIcon } from 'tdesign-icons-vue';

const initialColumns = [
  { colKey: 'index', title: '\u7F16\u53F7' },
  { colKey: 'applicant', title: '\u7533\u8BF7\u4EBA' },
  {
    colKey: 'status',
    title: '\u7533\u8BF7\u72B6\u6001',
    cell: (h, { row }) => {
      const statusNameListMap = {
        0: { label: '\u5BA1\u6279\u901A\u8FC7', theme: 'success', icon: <CheckCircleFilledIcon /> },
        1: { label: '\u5BA1\u6279\u5931\u8D25', theme: 'danger', icon: <CloseCircleFilledIcon /> },
        2: { label: '\u5BA1\u6279\u8FC7\u671F', theme: 'warning', icon: <ErrorCircleFilledIcon /> },
      };
      return (
        <t-tag shape="round" theme={statusNameListMap[row.status].theme} variant="light-outline">
          {statusNameListMap[row.status].icon}
          {statusNameListMap[row.status].label}
        </t-tag>
      );
    },
  },
  { colKey: 'channel', title: '\u7B7E\u7F72\u65B9\u5F0F' },
  { colKey: 'detail.email', title: '\u90AE\u7BB1\u5730\u5740', ellipsis: true },
  { colKey: 'createTime', title: '\u7533\u8BF7\u65F6\u95F4' },
];

const initialData = new Array(500).fill(5).map((_, i) => ({
  index: i + 1,
  applicant: ['\u8D3E\u660E', '\u5F20\u4E09', '\u738B\u82B3'][i % 3],
  status: i % 3,
  channel: ['\u7535\u5B50\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72'][i % 3],
  detail: {
    email: ['w.cezkdudy@lhll.au', 'r.nmgw@peurezgn.sl', 'p.cumx@rampblpa.ru'][i % 3],
  },
  matters: ['\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528', 'algolia \u670D\u52A1\u62A5\u9500', '\u76F8\u5173\u5468\u8FB9\u5236\u4F5C\u8D39', '\u6FC0\u52B1\u5956\u54C1\u5FEB\u9012\u8D39'][i % 4],
  time: [2, 3, 1, 4][i % 4],
  createTime: ['2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01'][i % 4],
}));

export default {
  data() {
    return {
      data: [...initialData],
      columns: initialColumns,
      // pagination: {
      //   current: 1,
      //   pageSize: 5,
      //   total: 500,
      // },
      // \u975E\u53D7\u63A7\u7528\u6CD5
      pagination1: {
        defaultCurrent: 1,
        defaultPageSize: 5,
        total: 500,
      },
    };
  },
  methods: {
    // currentData is going to be deprecated
    onDragSort({
      currentIndex, current, targetIndex, target, data, newData, e,
    }) {
      console.log('\u91CD\u65B0\u6392\u5E8F', currentIndex, current, targetIndex, target, data, newData, e);
      this.data = newData;
    },
  },
};
<\/script>
`,Tn=`<template>
  <div class="demo-container t-table-demo-sort tdesign-demo__table">
    <div class="item">
      <!-- \u62D6\u62FD\u6392\u5E8F\u6D89\u53CA\u5230 data \u7684\u53D8\u66F4\uFF0C\u76F8\u5BF9\u6BD4\u8F83\u614E\u91CD\uFF0C\u56E0\u6B64\u4EC5\u652F\u6301\u53D7\u63A7\u7528\u6CD5 -->

      <t-table
        rowKey="index"
        :columns="columns"
        :data="data"
        :pagination="pagination1"
        dragSort="row"
        @drag-sort="onDragSort"
        lazyLoad
      >
        <template #status="{ row }">
          <p class="status" :class="['', 'warning', 'unhealth'][row && row.status]">
            {{ ['\u5065\u5EB7', '\u8B66\u544A', '\u5F02\u5E38'][row && row.status] }}
          </p>
        </template>
      </t-table>
    </div>
  </div>
</template>

<script setup lang="jsx">
import { ref, reactive } from 'vue';
import { ErrorCircleFilledIcon, CheckCircleFilledIcon, CloseCircleFilledIcon } from 'tdesign-icons-vue';

const initialColumns = [
  {
    colKey: 'index',
    title: '\u7F16\u53F7',
  },
  {
    colKey: 'applicant',
    title: '\u7533\u8BF7\u4EBA',
  },
  {
    colKey: 'status',
    title: '\u7533\u8BF7\u72B6\u6001',
    cell: (h, { row }) => {
      const statusNameListMap = {
        0: {
          label: '\u5BA1\u6279\u901A\u8FC7',
          theme: 'success',
          icon: <CheckCircleFilledIcon />,
        },
        1: {
          label: '\u5BA1\u6279\u5931\u8D25',
          theme: 'danger',
          icon: <CloseCircleFilledIcon />,
        },
        2: {
          label: '\u5BA1\u6279\u8FC7\u671F',
          theme: 'warning',
          icon: <ErrorCircleFilledIcon />,
        },
      };
      return (
        <t-tag shape="round" theme={statusNameListMap[row.status].theme} variant="light-outline">
          {statusNameListMap[row.status].icon}
          {statusNameListMap[row.status].label}
        </t-tag>
      );
    },
  },
  {
    colKey: 'channel',
    title: '\u7B7E\u7F72\u65B9\u5F0F',
  },
  {
    colKey: 'detail.email',
    title: '\u90AE\u7BB1\u5730\u5740',
    ellipsis: true,
  },
  {
    colKey: 'createTime',
    title: '\u7533\u8BF7\u65F6\u95F4',
  },
];
const initialData = new Array(500).fill(5).map((_, i) => ({
  index: i + 1,
  applicant: ['\u8D3E\u660E', '\u5F20\u4E09', '\u738B\u82B3'][i % 3],
  status: i % 3,
  channel: ['\u7535\u5B50\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72'][i % 3],
  detail: {
    email: ['w.cezkdudy@lhll.au', 'r.nmgw@peurezgn.sl', 'p.cumx@rampblpa.ru'][i % 3],
  },
  matters: ['\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528', 'algolia \u670D\u52A1\u62A5\u9500', '\u76F8\u5173\u5468\u8FB9\u5236\u4F5C\u8D39', '\u6FC0\u52B1\u5956\u54C1\u5FEB\u9012\u8D39'][i % 4],
  time: [2, 3, 1, 4][i % 4],
  createTime: ['2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01'][i % 4],
}));
const data = ref([...initialData]);
const columns = ref(initialColumns);
// const pagination = reactive({
//   current: 1,
//   pageSize: 5,
//   total: 500,
// });
// \u975E\u53D7\u63A7\u7528\u6CD5
const pagination1 = reactive({
  defaultCurrent: 1,
  defaultPageSize: 5,
  total: 500,
});
// currentData is going to be deprecated
const onDragSort = ({
  currentIndex, current, targetIndex, target, data: dragSortData, newData, e,
}) => {
  console.log('\u91CD\u65B0\u6392\u5E8F', currentIndex, current, targetIndex, target, dragSortData, newData, e);
  data.value = newData;
};
<\/script>
`,Ln=`<template>
  <div class="demo-container t-table-demo-sort tdesign-demo__table">
    <div>
      <t-checkbox v-model="loading">\u52A0\u8F7D\u72B6\u6001</t-checkbox>
    </div>
    <div class="item">
      <!-- \u62D6\u62FD\u6392\u5E8F\u6D89\u53CA\u5230 data \u7684\u53D8\u66F4\uFF0C\u76F8\u5BF9\u6BD4\u8F83\u614E\u91CD\uFF0C\u56E0\u6B64\u4EC5\u652F\u6301\u53D7\u63A7\u7528\u6CD5 -->

      <t-table
        row-key="index"
        :columns="columns"
        :data="data"
        :loading="loading"
        lazyLoad
        dragSort="row-handler"
        @drag-sort="onDragSort"
      >
      </t-table>
    </div>
  </div>
</template>

<script lang="jsx">
import {
  ErrorCircleFilledIcon, CheckCircleFilledIcon, CloseCircleFilledIcon, MoveIcon,
} from 'tdesign-icons-vue';

const initialColumns = [
  {
    colKey: 'drag', // \u5217\u62D6\u62FD\u6392\u5E8F\u5FC5\u8981\u53C2\u6570
    title: '\u6392\u5E8F',
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    cell: (h) => (
      <span>
        <MoveIcon />
      </span>
    ),
    width: 46,
  },
  { colKey: 'applicant', title: '\u7533\u8BF7\u4EBA', width: '100' },
  {
    colKey: 'status',
    title: '\u7533\u8BF7\u72B6\u6001',
    width: '150',
    cell: (h, { row }) => {
      const statusNameListMap = {
        0: { label: '\u5BA1\u6279\u901A\u8FC7', theme: 'success', icon: <CheckCircleFilledIcon /> },
        1: { label: '\u5BA1\u6279\u5931\u8D25', theme: 'danger', icon: <CloseCircleFilledIcon /> },
        2: { label: '\u5BA1\u6279\u8FC7\u671F', theme: 'warning', icon: <ErrorCircleFilledIcon /> },
      };
      return (
        <t-tag shape="round" theme={statusNameListMap[row.status].theme} variant="light-outline">
          {statusNameListMap[row.status].icon}
          {statusNameListMap[row.status].label}
        </t-tag>
      );
    },
  },
  { colKey: 'channel', title: '\u7B7E\u7F72\u65B9\u5F0F', width: '120' },
  { colKey: 'detail.email', title: '\u90AE\u7BB1\u5730\u5740', ellipsis: true },
  { colKey: 'createTime', title: '\u7533\u8BF7\u65F6\u95F4' },
];

const initialData = new Array(4).fill(5).map((_, i) => ({
  index: i + 1,
  applicant: ['\u8D3E\u660E', '\u5F20\u4E09', '\u738B\u82B3'][i % 3],
  status: i % 3,
  channel: ['\u7535\u5B50\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72'][i % 3],
  detail: {
    email: ['w.cezkdudy@lhll.au', 'r.nmgw@peurezgn.sl', 'p.cumx@rampblpa.ru'][i % 3],
  },
  matters: ['\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528', 'algolia \u670D\u52A1\u62A5\u9500', '\u76F8\u5173\u5468\u8FB9\u5236\u4F5C\u8D39', '\u6FC0\u52B1\u5956\u54C1\u5FEB\u9012\u8D39'][i % 4],
  time: [2, 3, 1, 4][i % 4],
  createTime: ['2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01'][i % 4],
}));

export default {
  data() {
    return {
      loading: false,
      data: [...initialData],
      columns: initialColumns,
    };
  },
  methods: {
    // currentIndex, current, targetIndex, target, data, newData, e, sort,
    onDragSort(params) {
      console.log('\u4EA4\u6362\u884C', params);
      this.data = params.newData;
    },
  },
};
<\/script>
`,Rn=`<template>
  <div class="demo-container t-table-demo-sort tdesign-demo__table">
    <div>
      <t-checkbox v-model="loading">\u52A0\u8F7D\u72B6\u6001</t-checkbox>
    </div>
    <div class="item">
      <!-- \u62D6\u62FD\u6392\u5E8F\u6D89\u53CA\u5230 data \u7684\u53D8\u66F4\uFF0C\u76F8\u5BF9\u6BD4\u8F83\u614E\u91CD\uFF0C\u56E0\u6B64\u4EC5\u652F\u6301\u53D7\u63A7\u7528\u6CD5 -->

      <t-table
        row-key="index"
        :columns="columns"
        :data="data"
        :loading="loading"
        lazyLoad
        dragSort="row-handler"
        @drag-sort="onDragSort"
      >
      </t-table>
    </div>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue';
import {
  ErrorCircleFilledIcon, CheckCircleFilledIcon, CloseCircleFilledIcon, MoveIcon,
} from 'tdesign-icons-vue';

const initialColumns = [
  {
    colKey: 'drag',
    // \u5217\u62D6\u62FD\u6392\u5E8F\u5FC5\u8981\u53C2\u6570
    title: '\u6392\u5E8F',
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    cell: (h) => (
      <span>
        <MoveIcon />
      </span>
    ),
    width: 46,
  },
  {
    colKey: 'applicant',
    title: '\u7533\u8BF7\u4EBA',
    width: '100',
  },
  {
    colKey: 'status',
    title: '\u7533\u8BF7\u72B6\u6001',
    width: '150',
    cell: (h, { row }) => {
      const statusNameListMap = {
        0: {
          label: '\u5BA1\u6279\u901A\u8FC7',
          theme: 'success',
          icon: <CheckCircleFilledIcon />,
        },
        1: {
          label: '\u5BA1\u6279\u5931\u8D25',
          theme: 'danger',
          icon: <CloseCircleFilledIcon />,
        },
        2: {
          label: '\u5BA1\u6279\u8FC7\u671F',
          theme: 'warning',
          icon: <ErrorCircleFilledIcon />,
        },
      };
      return (
        <t-tag shape="round" theme={statusNameListMap[row.status].theme} variant="light-outline">
          {statusNameListMap[row.status].icon}
          {statusNameListMap[row.status].label}
        </t-tag>
      );
    },
  },
  {
    colKey: 'channel',
    title: '\u7B7E\u7F72\u65B9\u5F0F',
    width: '120',
  },
  {
    colKey: 'detail.email',
    title: '\u90AE\u7BB1\u5730\u5740',
    ellipsis: true,
  },
  {
    colKey: 'createTime',
    title: '\u7533\u8BF7\u65F6\u95F4',
  },
];
const initialData = new Array(4).fill(5).map((_, i) => ({
  index: i + 1,
  applicant: ['\u8D3E\u660E', '\u5F20\u4E09', '\u738B\u82B3'][i % 3],
  status: i % 3,
  channel: ['\u7535\u5B50\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72'][i % 3],
  detail: {
    email: ['w.cezkdudy@lhll.au', 'r.nmgw@peurezgn.sl', 'p.cumx@rampblpa.ru'][i % 3],
  },
  matters: ['\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528', 'algolia \u670D\u52A1\u62A5\u9500', '\u76F8\u5173\u5468\u8FB9\u5236\u4F5C\u8D39', '\u6FC0\u52B1\u5956\u54C1\u5FEB\u9012\u8D39'][i % 4],
  time: [2, 3, 1, 4][i % 4],
  createTime: ['2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01'][i % 4],
}));
const loading = ref(false);
const data = ref([...initialData]);
const columns = ref(initialColumns);
// currentIndex, current, targetIndex, target, data, newData, e, sort,
const onDragSort = (params) => {
  console.log('\u4EA4\u6362\u884C', params);
  data.value = params.newData;
};
<\/script>
`,Fn=`<template>
  <div class="demo-container t-table-demo-sort tdesign-demo__table">
    <div class="item">
      <t-table
        row-key="index"
        :columns="columns"
        :data="data"
        dragSort="col"
        @drag-sort="onDragSort"
        lazyLoad
      ></t-table>
    </div>
  </div>
</template>

<script lang="jsx">
import { ErrorCircleFilledIcon, CheckCircleFilledIcon, CloseCircleFilledIcon } from 'tdesign-icons-vue';

const initialColumns = [
  {
    colKey: 'applicant',
    title: '\u7533\u8BF7\u4EBA',
    width: '100',
    fixed: 'left',
  },
  {
    colKey: 'status',
    title: '\u7533\u8BF7\u72B6\u6001',
    width: '150',
    cell: (h, { row }) => {
      const statusNameListMap = {
        0: { label: '\u5BA1\u6279\u901A\u8FC7', theme: 'success', icon: <CheckCircleFilledIcon /> },
        1: { label: '\u5BA1\u6279\u5931\u8D25', theme: 'danger', icon: <CloseCircleFilledIcon /> },
        2: { label: '\u5BA1\u6279\u8FC7\u671F', theme: 'warning', icon: <ErrorCircleFilledIcon /> },
      };
      return (
        <t-tag shape="round" theme={statusNameListMap[row.status].theme} variant="light-outline">
          {statusNameListMap[row.status].icon}
          {statusNameListMap[row.status].label}
        </t-tag>
      );
    },
  },
  { colKey: 'channel', title: '\u7B7E\u7F72\u65B9\u5F0F', width: '120' },
  { colKey: 'detail.email', title: '\u90AE\u7BB1\u5730\u5740', ellipsis: true },
  { colKey: 'createTime', title: '\u7533\u8BF7\u65F6\u95F4' },
];

const initialData = new Array(4).fill(5).map((_, i) => ({
  index: i + 1,
  applicant: ['\u8D3E\u660E', '\u5F20\u4E09', '\u738B\u82B3'][i % 3],
  status: i % 3,
  channel: ['\u7535\u5B50\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72'][i % 3],
  detail: {
    email: ['w.cezkdudy@lhll.au', 'r.nmgw@peurezgn.sl', 'p.cumx@rampblpa.ru'][i % 3],
  },
  matters: ['\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528', 'algolia \u670D\u52A1\u62A5\u9500', '\u76F8\u5173\u5468\u8FB9\u5236\u4F5C\u8D39', '\u6FC0\u52B1\u5956\u54C1\u5FEB\u9012\u8D39'][i % 4],
  time: [2, 3, 1, 4][i % 4],
  createTime: ['2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01'][i % 4],
}));

export default {
  data() {
    return {
      data: [...initialData],
      columns: [...initialColumns],
    };
  },
  methods: {
    // currentData is going to be deprecated
    // currentIndex, current, targetIndex, target, data, newData, e, sort,
    onDragSort(params) {
      console.log('\u91CD\u65B0\u6392\u5E8F', params);
      if (params.sort === 'col') {
        this.columns = params.newData;
      }
    },
  },
};
<\/script>
`,Nn=`<template>
  <div class="demo-container t-table-demo-sort tdesign-demo__table">
    <div class="item">
      <t-table
        row-key="index"
        :columns="columns"
        :data="data"
        dragSort="col"
        @drag-sort="onDragSort"
        lazyLoad
      ></t-table>
    </div>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue';
import { ErrorCircleFilledIcon, CheckCircleFilledIcon, CloseCircleFilledIcon } from 'tdesign-icons-vue';

const initialColumns = [
  {
    colKey: 'applicant',
    title: '\u7533\u8BF7\u4EBA',
    width: '100',
    fixed: 'left',
  },
  {
    colKey: 'status',
    title: '\u7533\u8BF7\u72B6\u6001',
    width: '150',
    cell: (h, { row }) => {
      const statusNameListMap = {
        0: {
          label: '\u5BA1\u6279\u901A\u8FC7',
          theme: 'success',
          icon: <CheckCircleFilledIcon />,
        },
        1: {
          label: '\u5BA1\u6279\u5931\u8D25',
          theme: 'danger',
          icon: <CloseCircleFilledIcon />,
        },
        2: {
          label: '\u5BA1\u6279\u8FC7\u671F',
          theme: 'warning',
          icon: <ErrorCircleFilledIcon />,
        },
      };
      return (
        <t-tag shape="round" theme={statusNameListMap[row.status].theme} variant="light-outline">
          {statusNameListMap[row.status].icon}
          {statusNameListMap[row.status].label}
        </t-tag>
      );
    },
  },
  {
    colKey: 'channel',
    title: '\u7B7E\u7F72\u65B9\u5F0F',
    width: '120',
  },
  {
    colKey: 'detail.email',
    title: '\u90AE\u7BB1\u5730\u5740',
    ellipsis: true,
  },
  {
    colKey: 'createTime',
    title: '\u7533\u8BF7\u65F6\u95F4',
  },
];
const initialData = new Array(4).fill(5).map((_, i) => ({
  index: i + 1,
  applicant: ['\u8D3E\u660E', '\u5F20\u4E09', '\u738B\u82B3'][i % 3],
  status: i % 3,
  channel: ['\u7535\u5B50\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72'][i % 3],
  detail: {
    email: ['w.cezkdudy@lhll.au', 'r.nmgw@peurezgn.sl', 'p.cumx@rampblpa.ru'][i % 3],
  },
  matters: ['\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528', 'algolia \u670D\u52A1\u62A5\u9500', '\u76F8\u5173\u5468\u8FB9\u5236\u4F5C\u8D39', '\u6FC0\u52B1\u5956\u54C1\u5FEB\u9012\u8D39'][i % 4],
  time: [2, 3, 1, 4][i % 4],
  createTime: ['2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01'][i % 4],
}));
const data = ref([...initialData]);
const columns = ref([...initialColumns]);
// currentData is going to be deprecated
// currentIndex, current, targetIndex, target, data, newData, e, sort,
const onDragSort = (params) => {
  console.log('\u91CD\u65B0\u6392\u5E8F', params);
  if (params.sort === 'col') {
    columns.value = params.newData;
  }
};
<\/script>
`,Sn=`<template>
  <div class="demo-container">
    <div class="item">
      <t-button theme="default" style="margin-top: 10px" @click="reset"> \u91CD\u7F6E\u8868\u683C\u6570\u636E </t-button>
      <br /><br />
      <t-table
        row-key="id"
        :columns="columns"
        :data="data"
        :height="300"
        :scroll="{ type: 'lazy', bufferSize: 10 }"
        bordered
        lazyLoad
      />
    </div>
  </div>
</template>

<script lang="jsx">
import { ErrorCircleFilledIcon, CheckCircleFilledIcon, CloseCircleFilledIcon } from 'tdesign-icons-vue';

const initialColumns = [
  { colKey: 'applicant', title: '\u7533\u8BF7\u4EBA', width: '100' },
  {
    colKey: 'status',
    title: '\u7533\u8BF7\u72B6\u6001',
    width: '150',
    cell: (h, { rowIndex }) => {
      const status = rowIndex % 3;
      const statusNameListMap = {
        0: { label: '\u5BA1\u6279\u901A\u8FC7', theme: 'success', icon: <CheckCircleFilledIcon /> },
        1: { label: '\u5BA1\u6279\u5931\u8D25', theme: 'danger', icon: <CloseCircleFilledIcon /> },
        2: { label: '\u5BA1\u6279\u8FC7\u671F', theme: 'warning', icon: <ErrorCircleFilledIcon /> },
      };
      return (
        <t-tag shape="round" theme={statusNameListMap[status].theme} variant="light-outline">
          {statusNameListMap[status].icon}
          {statusNameListMap[status].label}
        </t-tag>
      );
    },
  },
  { colKey: 'matters', title: '\u7533\u8BF7\u4E8B\u9879', width: '140' },
  { colKey: 'detail.email', title: '\u90AE\u7BB1\u5730\u5740' },
  { colKey: 'createTime', title: '\u7533\u8BF7\u65F6\u95F4' },
];

// \u672C\u5730\u6570\u636E\u6392\u5E8F\uFF0C\u8868\u793A\u7EC4\u4EF6\u5185\u90E8\u4F1A\u5BF9\u53C2\u6570 data \u8FDB\u884C\u6570\u636E\u6392\u5E8F\u3002\u5982\u679C data \u6570\u636E\u4E3A 10 \u6761\uFF0C\u5C31\u4EC5\u5BF9\u8FD9 10 \u6761\u6570\u636E\u8FDB\u884C\u6392\u5E8F\u3002
const initialData = [];
for (let i = 0; i < 10; i++) {
  initialData.push({
    id: i + 1,
    applicant: ['\u8D3E\u660E', '\u5F20\u4E09', '\u738B\u82B3'][i % 3],
    channel: ['\u7535\u5B50\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72'][i % 3],
    detail: {
      email: ['w.cezkdudy@lhll.au', 'r.nmgw@peurezgn.sl', 'p.cumx@rampblpa.ru'][i % 3],
    },
    matters: ['\u90E8\u5206\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528', 'algolia \u670D\u52A1\u62A5\u9500', '\u76F8\u5173\u5468\u8FB9\u5236\u4F5C\u8D39', '\u6FC0\u52B1\u5956\u54C1\u5FEB\u9012\u8D39'][i % 4],
    time: [2, 3, 1, 4][i % 4],
    createTime: ['2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01'][i % 4],
  });
}

const times = Array.from(new Array(1000), () => ''); // \u6D4B\u8BD5\u5171\u8BA11k\u6761\u6570\u636E
const testData = [];
times.forEach((item, i) => {
  const k = i % 10;
  testData[i] = { ...initialData[k], id: i + 1 };
});

export default {
  name: 'LazyScroll',
  data() {
    return {
      data: [...testData],
      columns: initialColumns,
    };
  },
  methods: {
    reset() {
      this.data = [];
      setTimeout(() => {
        this.data = testData;
      });
    },
  },
};
<\/script>
`,zn=`<template>
  <div class="demo-container">
    <div class="item">
      <t-button theme="default" style="margin-top: 10px" @click="reset"> \u91CD\u7F6E\u8868\u683C\u6570\u636E </t-button>
      <br /><br />
      <t-table
        row-key="id"
        :columns="columns"
        :data="data"
        :height="300"
        :scroll="{ type: 'lazy', bufferSize: 10 }"
        bordered
        lazyLoad
      />
    </div>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue';
import { ErrorCircleFilledIcon, CheckCircleFilledIcon, CloseCircleFilledIcon } from 'tdesign-icons-vue';

const initialColumns = [
  {
    colKey: 'applicant',
    title: '\u7533\u8BF7\u4EBA',
    width: '100',
  },
  {
    colKey: 'status',
    title: '\u7533\u8BF7\u72B6\u6001',
    width: '150',
    cell: (h, { rowIndex }) => {
      const status = rowIndex % 3;
      const statusNameListMap = {
        0: {
          label: '\u5BA1\u6279\u901A\u8FC7',
          theme: 'success',
          icon: <CheckCircleFilledIcon />,
        },
        1: {
          label: '\u5BA1\u6279\u5931\u8D25',
          theme: 'danger',
          icon: <CloseCircleFilledIcon />,
        },
        2: {
          label: '\u5BA1\u6279\u8FC7\u671F',
          theme: 'warning',
          icon: <ErrorCircleFilledIcon />,
        },
      };
      return (
        <t-tag shape="round" theme={statusNameListMap[status].theme} variant="light-outline">
          {statusNameListMap[status].icon}
          {statusNameListMap[status].label}
        </t-tag>
      );
    },
  },
  {
    colKey: 'matters',
    title: '\u7533\u8BF7\u4E8B\u9879',
    width: '140',
  },
  {
    colKey: 'detail.email',
    title: '\u90AE\u7BB1\u5730\u5740',
  },
  {
    colKey: 'createTime',
    title: '\u7533\u8BF7\u65F6\u95F4',
  },
];

// \u672C\u5730\u6570\u636E\u6392\u5E8F\uFF0C\u8868\u793A\u7EC4\u4EF6\u5185\u90E8\u4F1A\u5BF9\u53C2\u6570 data \u8FDB\u884C\u6570\u636E\u6392\u5E8F\u3002\u5982\u679C data \u6570\u636E\u4E3A 10 \u6761\uFF0C\u5C31\u4EC5\u5BF9\u8FD9 10 \u6761\u6570\u636E\u8FDB\u884C\u6392\u5E8F\u3002
const initialData = [];
for (let i = 0; i < 10; i++) {
  initialData.push({
    id: i + 1,
    applicant: ['\u8D3E\u660E', '\u5F20\u4E09', '\u738B\u82B3'][i % 3],
    channel: ['\u7535\u5B50\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72'][i % 3],
    detail: {
      email: ['w.cezkdudy@lhll.au', 'r.nmgw@peurezgn.sl', 'p.cumx@rampblpa.ru'][i % 3],
    },
    matters: ['\u90E8\u5206\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528', 'algolia \u670D\u52A1\u62A5\u9500', '\u76F8\u5173\u5468\u8FB9\u5236\u4F5C\u8D39', '\u6FC0\u52B1\u5956\u54C1\u5FEB\u9012\u8D39'][i % 4],
    time: [2, 3, 1, 4][i % 4],
    createTime: ['2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01'][i % 4],
  });
}
const times = Array.from(new Array(1000), () => ''); // \u6D4B\u8BD5\u5171\u8BA11k\u6761\u6570\u636E
const testData = [];
times.forEach((item, i) => {
  const k = i % 10;
  testData[i] = {
    ...initialData[k],
    id: i + 1,
  };
});
const data = ref([...testData]);
const columns = ref(initialColumns);
const reset = () => {
  data.value = [];
  setTimeout(() => {
    data.value = testData;
  });
};
<\/script>
`,Mn=`<template>
  <t-space direction="vertical">
    <t-space align="center">
      <t-button @click="scrollToElement">\u6EDA\u52A8\u5230\u6307\u5B9A\u5143\u7D20</t-button>
      <t-checkbox v-model="bordered">\u662F\u5426\u663E\u793A\u8FB9\u6846</t-checkbox>
      <!-- <t-button @click="setLowerHeight">lower height</t-button>
      <t-button @click="setHigherHeight">higher height</t-button> -->
    </t-space>
    <!--
      1. rowHeight \u63A5\u8FD1\u5E73\u5747\u9AD8\u5EA6\u5373\u53EF
      2. bufferSize \u522B\u592A\u5927\uFF0C5 \uFF5E 30 \u4E4B\u95F4\u5408\u9002
      3. \u5982\u679C\u662F\u56FA\u5B9A\u884C\u9AD8\u8BF7\u8BBE\u7F6E isFixedRowHeight: true\u3002rowHeight \u8BBE\u7F6E\u7CBE\u786E\u503C
      4. \u5F53\u6570\u636E\u91CF\u5C0F\u4E8E \`scroll.threshold\` \u65F6\uFF0C\u65E0\u8BBA\u865A\u62DF\u6EDA\u52A8\u7684\u914D\u7F6E\u662F\u5426\u5B58\u5728\uFF0C\u7EC4\u4EF6\u5185\u90E8\u90FD\u4E0D\u4F1A\u5F00\u542F\u865A\u62DF\u6EDA\u52A8\uFF0C\u9ED8\u8BA4\u503C 100
    -->
    <t-table
      ref="tableRef"
      row-key="id"
      :columns="columns"
      :data="data"
      :scroll="{ type: 'virtual', rowHeight: 69, bufferSize: 10 }"
      :height="height"
      :bordered="bordered"
      lazyLoad
    >
    </t-table>
  </t-space>
</template>

<script lang="jsx">
import { ErrorCircleFilledIcon, CheckCircleFilledIcon, CloseCircleFilledIcon } from 'tdesign-icons-vue';

const initialColumns = [
  { colKey: 'serial-number', width: 80, title: '\u5E8F\u53F7' },
  { colKey: 'applicant', title: '\u7533\u8BF7\u4EBA', width: '100' },
  {
    colKey: 'status',
    title: '\u7533\u8BF7\u72B6\u6001',
    width: '150',
    cell: (h, { rowIndex }) => {
      const status = rowIndex % 3;
      const statusNameListMap = {
        0: { label: '\u5BA1\u6279\u901A\u8FC7', theme: 'success', icon: <CheckCircleFilledIcon /> },
        1: { label: '\u5BA1\u6279\u5931\u8D25', theme: 'danger', icon: <CloseCircleFilledIcon /> },
        2: { label: '\u5BA1\u6279\u8FC7\u671F', theme: 'warning', icon: <ErrorCircleFilledIcon /> },
      };
      return (
        <t-tag shape="round" theme={statusNameListMap[status].theme} variant="light-outline">
          {statusNameListMap[status].icon}
          {statusNameListMap[status].label}
        </t-tag>
      );
    },
  },
  { colKey: 'matters', title: '\u7533\u8BF7\u4E8B\u9879', width: '140' },
  { colKey: 'detail.email', title: '\u90AE\u7BB1\u5730\u5740' },
  { colKey: 'createTime', title: '\u7533\u8BF7\u65F6\u95F4' },
];

const initialData = [];
for (let i = 0; i < 10; i++) {
  initialData.push({
    id: i + 1,
    applicant: ['\u8D3E\u660E', '\u5F20\u4E09', '\u738B\u82B3'][i % 3],
    channel: ['\u7535\u5B50\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72'][i % 3],
    detail: {
      email: ['w.cezkdudy@lhll.au', 'r.nmgw@peurezgn.sl', 'p.cumx@rampblpa.ru'][i % 3],
    },
    matters: ['\u90E8\u5206\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528', 'algolia \u670D\u52A1\u62A5\u9500', '\u76F8\u5173\u5468\u8FB9\u5236\u4F5C\u8D39', '\u6FC0\u52B1\u5956\u54C1\u5FEB\u9012\u8D39'][i % 4],
    time: [2, 3, 1, 4][i % 4],
    createTime: ['2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01'][i % 4],
  });
}
// \u4E3A\u4E86\u4F7F\u5F97\u8868\u683C\u6EDA\u52A8\u66F4\u52A0\u5E73\u7A33\uFF0C\u5EFA\u8BAE\u6307\u5B9Arow-height\u53C2\u6570\u503C\u4E3A\u63A5\u8FD1\u8868\u683C\u7684\u5E73\u5747\u884C\u9AD8
const times = Array.from(new Array(1000), () => '');
const testData = [];
times.forEach((item, i) => {
  const k = i % 10;
  testData[i] = { ...initialData[k], id: i + 1 };
});

export default {
  name: 'VirtualScroll',
  data() {
    return {
      tableRef: null,
      data: [...testData],
      columns: initialColumns,
      bordered: true,
      height: 300,
    };
  },

  methods: {
    scrollToElement() {
      this.$refs.tableRef.scrollToElement({
        // \u65B9\u5F0F\u4E00\uFF1A\u4F7F\u7528\u4E0B\u6807\u8DF3\u8F6C\u5230\u6307\u5B9A\u884C\uFF08\u7B2C 256 \u4E2A\u5143\u7D20\u4F4D\u7F6E\uFF09
        // index: 255,
        // \u65B9\u5F0F\u4E8C\uFF1A\u4F7F\u7528\u884C\u552F\u4E00\u6807\u8BC6\u8DF3\u8F6C\u5230\u6307\u5B9A\u884C\uFF08id = 255\uFF09
        key: 255,
        // \u6EDA\u52A8\u5143\u7D20\u8DDD\u79BB\u9876\u90E8\u7684\u8DDD\u79BB\uFF08\u5982\u8868\u5934\u9AD8\u5EA6\uFF09
        top: 47,
        // \u884C\u9AD8\u5EA6\u52A8\u6001\u53D8\u5316\u573A\u666F\u573A\u666F\u4E0B\uFF0C\u5373 isFixedRowHeight = false\u3002\u5EF6\u8FDF\u8BBE\u7F6E\u5143\u7D20\u4F4D\u7F6E\uFF0C\u4E00\u822C\u7528\u4E8E\u4F9D\u8D56\u4E0D\u540C\u9AD8\u5EA6\u5F02\u6B65\u6E32\u67D3\u7B49\u573A\u666F\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2\u3002\uFF08\u56FA\u5B9A\u9AD8\u5EA6\u4E0D\u9700\u8981\u8FD9\u4E2A\uFF09
        time: 60,
      });
    },

    // setLowerHeight() {
    //   this.height = 150;
    // },

    // setHigherHeight() {
    //   this.height = 600;
    // },
  },
};
<\/script>
`,En=`<template>
  <t-space direction="vertical">
    <t-space align="center">
      <t-button @click="scrollToElement">\u6EDA\u52A8\u5230\u6307\u5B9A\u5143\u7D20</t-button>
      <t-checkbox v-model="bordered">\u662F\u5426\u663E\u793A\u8FB9\u6846</t-checkbox>
      <!-- <t-button @click="setLowerHeight">lower height</t-button>
      <t-button @click="setHigherHeight">higher height</t-button> -->
    </t-space>
    <!--
      1. rowHeight \u63A5\u8FD1\u5E73\u5747\u9AD8\u5EA6\u5373\u53EF
      2. bufferSize \u522B\u592A\u5927\uFF0C5 \uFF5E 30 \u4E4B\u95F4\u5408\u9002
      3. \u5982\u679C\u662F\u56FA\u5B9A\u884C\u9AD8\u8BF7\u8BBE\u7F6E isFixedRowHeight: true\u3002rowHeight \u8BBE\u7F6E\u7CBE\u786E\u503C
      4. \u5F53\u6570\u636E\u91CF\u5C0F\u4E8E \`scroll.threshold\` \u65F6\uFF0C\u65E0\u8BBA\u865A\u62DF\u6EDA\u52A8\u7684\u914D\u7F6E\u662F\u5426\u5B58\u5728\uFF0C\u7EC4\u4EF6\u5185\u90E8\u90FD\u4E0D\u4F1A\u5F00\u542F\u865A\u62DF\u6EDA\u52A8\uFF0C\u9ED8\u8BA4\u503C 100
    -->
    <t-table
      ref="tableRef"
      row-key="id"
      :columns="columns"
      :data="data"
      :scroll="{ type: 'virtual', rowHeight: 69, bufferSize: 10 }"
      :height="height"
      :bordered="bordered"
      lazyLoad
    >
    </t-table>
  </t-space>
</template>

<script setup lang="jsx">
import { ref } from 'vue';
import { ErrorCircleFilledIcon, CheckCircleFilledIcon, CloseCircleFilledIcon } from 'tdesign-icons-vue';

const initialColumns = [
  {
    colKey: 'serial-number',
    width: 80,
    title: '\u5E8F\u53F7',
  },
  {
    colKey: 'applicant',
    title: '\u7533\u8BF7\u4EBA',
    width: '100',
  },
  {
    colKey: 'status',
    title: '\u7533\u8BF7\u72B6\u6001',
    width: '150',
    cell: (h, { rowIndex }) => {
      const status = rowIndex % 3;
      const statusNameListMap = {
        0: {
          label: '\u5BA1\u6279\u901A\u8FC7',
          theme: 'success',
          icon: <CheckCircleFilledIcon />,
        },
        1: {
          label: '\u5BA1\u6279\u5931\u8D25',
          theme: 'danger',
          icon: <CloseCircleFilledIcon />,
        },
        2: {
          label: '\u5BA1\u6279\u8FC7\u671F',
          theme: 'warning',
          icon: <ErrorCircleFilledIcon />,
        },
      };
      return (
        <t-tag shape="round" theme={statusNameListMap[status].theme} variant="light-outline">
          {statusNameListMap[status].icon}
          {statusNameListMap[status].label}
        </t-tag>
      );
    },
  },
  {
    colKey: 'matters',
    title: '\u7533\u8BF7\u4E8B\u9879',
    width: '140',
  },
  {
    colKey: 'detail.email',
    title: '\u90AE\u7BB1\u5730\u5740',
  },
  {
    colKey: 'createTime',
    title: '\u7533\u8BF7\u65F6\u95F4',
  },
];
const initialData = [];
for (let i = 0; i < 10; i++) {
  initialData.push({
    id: i + 1,
    applicant: ['\u8D3E\u660E', '\u5F20\u4E09', '\u738B\u82B3'][i % 3],
    channel: ['\u7535\u5B50\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72'][i % 3],
    detail: {
      email: ['w.cezkdudy@lhll.au', 'r.nmgw@peurezgn.sl', 'p.cumx@rampblpa.ru'][i % 3],
    },
    matters: ['\u90E8\u5206\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528', 'algolia \u670D\u52A1\u62A5\u9500', '\u76F8\u5173\u5468\u8FB9\u5236\u4F5C\u8D39', '\u6FC0\u52B1\u5956\u54C1\u5FEB\u9012\u8D39'][i % 4],
    time: [2, 3, 1, 4][i % 4],
    createTime: ['2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01'][i % 4],
  });
}
// \u4E3A\u4E86\u4F7F\u5F97\u8868\u683C\u6EDA\u52A8\u66F4\u52A0\u5E73\u7A33\uFF0C\u5EFA\u8BAE\u6307\u5B9Arow-height\u53C2\u6570\u503C\u4E3A\u63A5\u8FD1\u8868\u683C\u7684\u5E73\u5747\u884C\u9AD8
const times = Array.from(new Array(1000), () => '');
const testData = [];
times.forEach((item, i) => {
  const k = i % 10;
  testData[i] = {
    ...initialData[k],
    id: i + 1,
  };
});
const tableRef = ref(null);
const data = ref([...testData]);
const columns = ref(initialColumns);
const bordered = ref(true);
const height = ref(300);
const scrollToElement = () => {
  tableRef.value.scrollToElement({
    // \u65B9\u5F0F\u4E00\uFF1A\u4F7F\u7528\u4E0B\u6807\u8DF3\u8F6C\u5230\u6307\u5B9A\u884C\uFF08\u7B2C 256 \u4E2A\u5143\u7D20\u4F4D\u7F6E\uFF09
    // index: 255,
    // \u65B9\u5F0F\u4E8C\uFF1A\u4F7F\u7528\u884C\u552F\u4E00\u6807\u8BC6\u8DF3\u8F6C\u5230\u6307\u5B9A\u884C\uFF08id = 255\uFF09
    key: 255,
    // \u6EDA\u52A8\u5143\u7D20\u8DDD\u79BB\u9876\u90E8\u7684\u8DDD\u79BB\uFF08\u5982\u8868\u5934\u9AD8\u5EA6\uFF09
    top: 47,
    // \u884C\u9AD8\u5EA6\u52A8\u6001\u53D8\u5316\u573A\u666F\u573A\u666F\u4E0B\uFF0C\u5373 isFixedRowHeight = false\u3002\u5EF6\u8FDF\u8BBE\u7F6E\u5143\u7D20\u4F4D\u7F6E\uFF0C\u4E00\u822C\u7528\u4E8E\u4F9D\u8D56\u4E0D\u540C\u9AD8\u5EA6\u5F02\u6B65\u6E32\u67D3\u7B49\u573A\u666F\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2\u3002\uFF08\u56FA\u5B9A\u9AD8\u5EA6\u4E0D\u9700\u8981\u8FD9\u4E2A\uFF09
    time: 60,
  });
};
<\/script>
`,_n=`<template>
  <div>
    <!-- \u5F53\u524D\u793A\u4F8B\u5305\u542B\uFF1A\u8F93\u5165\u6846\u3001\u5355\u9009\u3001\u591A\u9009\u3001\u65E5\u671F \u7B49\u573A\u666F -->
    <t-table
      ref="tableRef"
      row-key="key"
      :columns="columns"
      :data="data"
      :editable-cell-state="editableCellState"
      bordered
      lazyLoad
    />
    <!-- \u793A\u4F8B\u4EE3\u7801\u6709\u6548\uFF0C\u52FF\u5220 -->
    <!-- <t-button @click="validateTableData">\u6821\u9A8C</t-button> -->
  </div>
</template>

<script>
import {
  Input, Select, DatePicker, MessagePlugin,
} from 'tdesign-vue';
import dayjs from 'dayjs';

const initData = new Array(5).fill(null).map((_, i) => ({
  key: String(i + 1),
  firstName: ['\u8D3E\u660E', '\u5F20\u4E09', '\u738B\u82B3'][i % 3],
  status: i % 3,
  email: [
    'espinke0@apache.org',
    'gpurves1@issuu.com',
    'hkment2@nsw.gov.au',
    'lskures3@apache.org',
    'zcroson5@virginia.edu',
  ][i % 4],
  letters: [['\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528'], ['\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528'], ['\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528'], ['\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528', 'algolia \u670D\u52A1\u62A5\u9500']][
    i % 4
  ],
  createTime: ['2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01'][i % 4],
}));

const STATUS_OPTIONS = [
  { label: '\u5BA1\u6279\u901A\u8FC7', value: 0 },
  { label: '\u5BA1\u6279\u8FC7\u671F', value: 1 },
  { label: '\u5BA1\u6279\u5931\u8D25', value: 2 },
];

export default {
  name: 'TTableEditableCell',

  data() {
    return {
      align: 'left',
      data: [...initData],
    };
  },

  computed: {
    columns() {
      return [
        {
          title: '\u7533\u8BF7\u4EBA',
          colKey: 'firstName',
          align: this.align,
          // \u7F16\u8F91\u72B6\u6001\u76F8\u5173\u914D\u7F6E\uFF0C\u5168\u90E8\u96C6\u4E2D\u5728 edit
          edit: {
            // 1. \u652F\u6301\u4EFB\u610F\u7EC4\u4EF6\u3002\u9700\u4FDD\u8BC1\u7EC4\u4EF6\u5305\u542B \`value\` \u548C \`onChange\` \u4E24\u4E2A\u5C5E\u6027\uFF0C\u4E14 onChange \u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u503C\u4E3A new value\u3002
            // 2. \u5982\u679C\u5E0C\u671B\u652F\u6301\u6821\u9A8C\uFF0C\u7EC4\u4EF6\u8FD8\u9700\u5305\u542B \`status\` \u548C \`tips\` \u5C5E\u6027\u3002\u5177\u4F53 API \u542B\u4E49\u53C2\u8003 Input \u7EC4\u4EF6
            component: Input,
            // props, \u900F\u4F20\u5168\u90E8\u5C5E\u6027\u5230 Input \u7EC4\u4EF6\uFF08\u53EF\u4EE5\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u4E0D\u540C\u884C\u6709\u4E0D\u540C\u7684 props \u5C5E\u6027 \u65F6\uFF0C\u4F7F\u7528 Function\uFF09
            props: {
              clearable: true,
              autofocus: true,
            },
            // \u9664\u4E86\u70B9\u51FB\u975E\u81EA\u8EAB\u5143\u7D20\u9000\u51FA\u7F16\u8F91\u6001\u4E4B\u5916\uFF0C\u8FD8\u6709\u54EA\u4E9B\u4E8B\u4EF6\u9000\u51FA\u7F16\u8F91\u6001
            abortEditOnEvent: ['onEnter'],
            // \u7F16\u8F91\u5B8C\u6210\uFF0C\u9000\u51FA\u7F16\u8F91\u6001\u540E\u89E6\u53D1
            onEdited: (context) => {
              this.data.splice(context.rowIndex, 1, context.newRowData);
              console.log('Edit firstName:', context);
              MessagePlugin.success('Success');
            },
            // \u6821\u9A8C\u89C4\u5219\uFF0C\u6B64\u5904\u540C Form \u8868\u5355
            rules: [
              { required: true, message: '\u4E0D\u80FD\u4E3A\u7A7A' },
              { max: 10, message: '\u5B57\u7B26\u6570\u91CF\u4E0D\u80FD\u8D85\u8FC7 10', type: 'warning' },
            ],
            // \u9ED8\u8BA4\u662F\u5426\u4E3A\u7F16\u8F91\u72B6\u6001
            defaultEditable: true,
            // \u6821\u9A8C\u65F6\u673A\uFF1Aexit | change
            validateTrigger: 'change',
            // \u900F\u4F20\u7ED9 component: Input \u7684\u4E8B\u4EF6
            on: (editContext) => ({
              onBlur: () => {
                console.log('\u5931\u53BB\u7126\u70B9', editContext);
              },
              // both onEnter and enter can work
              onEnter: (ctx) => {
                console.log('\u56DE\u8F66', ctx);
              },
            }),
          },
        },
        {
          title: '\u7533\u8BF7\u72B6\u6001',
          colKey: 'status',
          cell: (h, { row }) => STATUS_OPTIONS.find((t) => t.value === row.status)?.label,
          edit: {
            component: Select,
            // props, \u900F\u4F20\u5168\u90E8\u5C5E\u6027\u5230 Select \u7EC4\u4EF6
            props: {
              clearable: true,
              options: STATUS_OPTIONS,
            },
            // \u9664\u4E86\u70B9\u51FB\u975E\u81EA\u8EAB\u5143\u7D20\u9000\u51FA\u7F16\u8F91\u6001\u4E4B\u5916\uFF0C\u8FD8\u6709\u54EA\u4E9B\u4E8B\u4EF6\u9000\u51FA\u7F16\u8F91\u6001
            // abortEditOnEvent: ['onChange'],
            // \u7F16\u8F91\u5B8C\u6210\uFF0C\u9000\u51FA\u7F16\u8F91\u6001\u540E\u89E6\u53D1
            onEdited: (context) => {
              this.data.splice(context.rowIndex, 1, context.newRowData);
              console.log('Edit Framework:', context);
              MessagePlugin.success('Success');
            },
          },
        },
        {
          title: '\u7533\u8BF7\u4E8B\u9879',
          colKey: 'letters',
          cell: (h, { row }) => row.letters.join('\u3001'),
          edit: {
            component: Select,
            keepEditMode: true,
            rules: [{ validator: (val) => val.length > 0, message: '\u81F3\u5C11\u9009\u62E9\u4E00\u79CD' }],
            // props, \u900F\u4F20\u5168\u90E8\u5C5E\u6027\u5230 Select \u7EC4\u4EF6
            // props \u4E3A\u51FD\u6570\u65F6\uFF0C\u53C2\u6570\u6709\uFF1Acol, row, rowIndex, colIndex, editedRow\u3002\u4E00\u822C\u7528\u4E8E\u5B9E\u73B0\u7F16\u8F91\u7EC4\u4EF6\u4E4B\u95F4\u7684\u8054\u52A8
            props: ({
              col, row, rowIndex, colIndex, editedRow,
            }) => {
              console.log(col, row, rowIndex, colIndex, editedRow);
              return {
                multiple: true,
                minCollapsedNum: 1,
                options: [
                  { label: '\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528', value: '\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528' },
                  { label: 'algolia \u670D\u52A1\u62A5\u9500', value: 'algolia \u670D\u52A1\u62A5\u9500' },
                  // \u5982\u679C\u72B6\u6001\u9009\u62E9\u4E86 \u5DF2\u8FC7\u671F\uFF0C\u5219 Letters \u9690\u85CF G \u548C H
                  { label: '\u76F8\u5173\u5468\u8FB9\u5236\u4F5C\u8D39', value: '\u76F8\u5173\u5468\u8FB9\u5236\u4F5C\u8D39', show: () => editedRow.status !== 0 },
                  { label: '\u6FC0\u52B1\u5956\u54C1\u5FEB\u9012\u8D39', value: '\u6FC0\u52B1\u5956\u54C1\u5FEB\u9012\u8D39', show: () => editedRow.status !== 0 },
                ].filter((t) => (t.show === undefined ? true : t.show())),
              };
            },
            // abortEditOnEvent: ['onChange'],
            onEdited: (context) => {
              this.data.splice(context.rowIndex, 1, context.newRowData);
              console.log('Edit Letters:', context);
              MessagePlugin.success('Success');
            },
          },
        },
        {
          title: '\u521B\u5EFA\u65E5\u671F',
          colKey: 'createTime',
          // props, \u900F\u4F20\u5168\u90E8\u5C5E\u6027\u5230 DatePicker \u7EC4\u4EF6
          edit: {
            component: DatePicker,
            props: {
              mode: 'date',
            },
            // \u9664\u4E86\u70B9\u51FB\u975E\u81EA\u8EAB\u5143\u7D20\u9000\u51FA\u7F16\u8F91\u6001\u4E4B\u5916\uFF0C\u8FD8\u6709\u54EA\u4E9B\u4E8B\u4EF6\u9000\u51FA\u7F16\u8F91\u6001
            abortEditOnEvent: ['onChange'],
            onEdited: (context) => {
              this.data.splice(context.rowIndex, 1, context.newRowData);
              console.log('Edit Date:', context);
              MessagePlugin.success('Success');
            },
            // \u6821\u9A8C\u89C4\u5219\uFF0C\u6B64\u5904\u540C Form \u8868\u5355
            rules: () => [
              {
                validator: (val) => dayjs(val).isAfter(dayjs()),
                message: '\u53EA\u80FD\u9009\u62E9\u4ECA\u5929\u4EE5\u540E\u65E5\u671F',
              },
            ],
          },
        },
      ];
    },
  },

  methods: {
    // \u7528\u4E8E\u63A7\u5236\u54EA\u4E9B\u884C\u6216\u54EA\u4E9B\u5355\u5143\u683C\u4E0D\u5141\u8BB8\u51FA\u73B0\u7F16\u8F91\u6001
    editableCellState(cellParams) {
      const { rowIndex } = cellParams;
      // return row.status !== 2;
      return rowIndex !== 2;
    },

    // \u7528\u4E8E\u63D0\u4EA4\u524D\u6821\u9A8C\u6570\u636E\uFF08\u793A\u4F8B\u4EE3\u7801\u6709\u6548\uFF0C\u52FF\u5220\uFF09
    // validateTableData() {
    //   // \u4EC5\u6821\u9A8C\u5904\u4E8E\u7F16\u8F91\u6001\u7684\u5355\u5143\u683C
    //   this.$refs.tableRef.validateTableData().then((result) => {
    //     console.log('validate result: ', result);
    //   });
    // },
  },
};
<\/script>

<style scoped>
.table-operations {
  margin-bottom: 16px;
}

.table-operations > button {
  margin-right: 8px;
}
</style>
`,An=`<template>
  <div>
    <!-- \u5F53\u524D\u793A\u4F8B\u5305\u542B\uFF1A\u8F93\u5165\u6846\u3001\u5355\u9009\u3001\u591A\u9009\u3001\u65E5\u671F \u7B49\u573A\u666F -->
    <t-table
      ref="tableRef"
      row-key="key"
      :columns="columns"
      :data="data"
      :editable-cell-state="editableCellState"
      bordered
      lazyLoad
    />
    <!-- \u793A\u4F8B\u4EE3\u7801\u6709\u6548\uFF0C\u52FF\u5220 -->
    <!-- <t-button @click="validateTableData">\u6821\u9A8C</t-button> -->
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import {
  Input, Select, DatePicker, MessagePlugin,
} from 'tdesign-vue';
import dayjs from 'dayjs';

const initData = new Array(5).fill(null).map((_, i) => ({
  key: String(i + 1),
  firstName: ['\u8D3E\u660E', '\u5F20\u4E09', '\u738B\u82B3'][i % 3],
  status: i % 3,
  email: [
    'espinke0@apache.org',
    'gpurves1@issuu.com',
    'hkment2@nsw.gov.au',
    'lskures3@apache.org',
    'zcroson5@virginia.edu',
  ][i % 4],
  letters: [['\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528'], ['\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528'], ['\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528'], ['\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528', 'algolia \u670D\u52A1\u62A5\u9500']][
    i % 4
  ],
  createTime: ['2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01'][i % 4],
}));
const STATUS_OPTIONS = [
  {
    label: '\u5BA1\u6279\u901A\u8FC7',
    value: 0,
  },
  {
    label: '\u5BA1\u6279\u8FC7\u671F',
    value: 1,
  },
  {
    label: '\u5BA1\u6279\u5931\u8D25',
    value: 2,
  },
];
const tableRef = ref();
const align = ref('left');
const data = ref([...initData]);
const columns = computed(() => [
  {
    title: '\u7533\u8BF7\u4EBA',
    colKey: 'firstName',
    align: align.value,
    // \u7F16\u8F91\u72B6\u6001\u76F8\u5173\u914D\u7F6E\uFF0C\u5168\u90E8\u96C6\u4E2D\u5728 edit
    edit: {
      // 1. \u652F\u6301\u4EFB\u610F\u7EC4\u4EF6\u3002\u9700\u4FDD\u8BC1\u7EC4\u4EF6\u5305\u542B \`value\` \u548C \`onChange\` \u4E24\u4E2A\u5C5E\u6027\uFF0C\u4E14 onChange \u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u503C\u4E3A new value\u3002
      // 2. \u5982\u679C\u5E0C\u671B\u652F\u6301\u6821\u9A8C\uFF0C\u7EC4\u4EF6\u8FD8\u9700\u5305\u542B \`status\` \u548C \`tips\` \u5C5E\u6027\u3002\u5177\u4F53 API \u542B\u4E49\u53C2\u8003 Input \u7EC4\u4EF6
      component: Input,
      // props, \u900F\u4F20\u5168\u90E8\u5C5E\u6027\u5230 Input \u7EC4\u4EF6\uFF08\u53EF\u4EE5\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u4E0D\u540C\u884C\u6709\u4E0D\u540C\u7684 props \u5C5E\u6027 \u65F6\uFF0C\u4F7F\u7528 Function\uFF09
      props: {
        clearable: true,
        autofocus: true,
      },
      // \u9664\u4E86\u70B9\u51FB\u975E\u81EA\u8EAB\u5143\u7D20\u9000\u51FA\u7F16\u8F91\u6001\u4E4B\u5916\uFF0C\u8FD8\u6709\u54EA\u4E9B\u4E8B\u4EF6\u9000\u51FA\u7F16\u8F91\u6001
      abortEditOnEvent: ['onEnter'],
      // \u7F16\u8F91\u5B8C\u6210\uFF0C\u9000\u51FA\u7F16\u8F91\u6001\u540E\u89E6\u53D1
      onEdited: (context) => {
        data.value.splice(context.rowIndex, 1, context.newRowData);
        console.log('Edit firstName:', context);
        MessagePlugin.success('Success');
      },
      // \u6821\u9A8C\u89C4\u5219\uFF0C\u6B64\u5904\u540C Form \u8868\u5355
      rules: [
        {
          required: true,
          message: '\u4E0D\u80FD\u4E3A\u7A7A',
        },
        {
          max: 10,
          message: '\u5B57\u7B26\u6570\u91CF\u4E0D\u80FD\u8D85\u8FC7 10',
          type: 'warning',
        },
      ],
      // \u9ED8\u8BA4\u662F\u5426\u4E3A\u7F16\u8F91\u72B6\u6001
      defaultEditable: true,
      // \u6821\u9A8C\u65F6\u673A\uFF1Aexit | change
      validateTrigger: 'change',
      // \u900F\u4F20\u7ED9 component: Input \u7684\u4E8B\u4EF6
      on: (editContext) => ({
        onBlur: () => {
          console.log('\u5931\u53BB\u7126\u70B9', editContext);
        },
        // both onEnter and enter can work
        onEnter: (ctx) => {
          console.log('\u56DE\u8F66', ctx);
        },
      }),
    },
  },
  {
    title: '\u7533\u8BF7\u72B6\u6001',
    colKey: 'status',
    cell: (h, { row }) => STATUS_OPTIONS.find((t) => t.value === row.status)?.label,
    edit: {
      component: Select,
      // props, \u900F\u4F20\u5168\u90E8\u5C5E\u6027\u5230 Select \u7EC4\u4EF6
      props: {
        clearable: true,
        options: STATUS_OPTIONS,
      },
      // \u9664\u4E86\u70B9\u51FB\u975E\u81EA\u8EAB\u5143\u7D20\u9000\u51FA\u7F16\u8F91\u6001\u4E4B\u5916\uFF0C\u8FD8\u6709\u54EA\u4E9B\u4E8B\u4EF6\u9000\u51FA\u7F16\u8F91\u6001
      // abortEditOnEvent: ['onChange'],
      // \u7F16\u8F91\u5B8C\u6210\uFF0C\u9000\u51FA\u7F16\u8F91\u6001\u540E\u89E6\u53D1
      onEdited: (context) => {
        data.value.splice(context.rowIndex, 1, context.newRowData);
        console.log('Edit Framework:', context);
        MessagePlugin.success('Success');
      },
    },
  },
  {
    title: '\u7533\u8BF7\u4E8B\u9879',
    colKey: 'letters',
    cell: (h, { row }) => row.letters.join('\u3001'),
    edit: {
      component: Select,
      keepEditMode: true,
      rules: [
        {
          validator: (val) => val.length > 0,
          message: '\u81F3\u5C11\u9009\u62E9\u4E00\u79CD',
        },
      ],
      // props, \u900F\u4F20\u5168\u90E8\u5C5E\u6027\u5230 Select \u7EC4\u4EF6
      // props \u4E3A\u51FD\u6570\u65F6\uFF0C\u53C2\u6570\u6709\uFF1Acol, row, rowIndex, colIndex, editedRow\u3002\u4E00\u822C\u7528\u4E8E\u5B9E\u73B0\u7F16\u8F91\u7EC4\u4EF6\u4E4B\u95F4\u7684\u8054\u52A8
      props: ({
        col, row, rowIndex, colIndex, editedRow,
      }) => {
        console.log(col, row, rowIndex, colIndex, editedRow);
        return {
          multiple: true,
          minCollapsedNum: 1,
          options: [
            {
              label: '\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528',
              value: '\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528',
            },
            {
              label: 'algolia \u670D\u52A1\u62A5\u9500',
              value: 'algolia \u670D\u52A1\u62A5\u9500',
            },
            // \u5982\u679C\u72B6\u6001\u9009\u62E9\u4E86 \u5DF2\u8FC7\u671F\uFF0C\u5219 Letters \u9690\u85CF G \u548C H
            {
              label: '\u76F8\u5173\u5468\u8FB9\u5236\u4F5C\u8D39',
              value: '\u76F8\u5173\u5468\u8FB9\u5236\u4F5C\u8D39',
              show: () => editedRow.status !== 0,
            },
            {
              label: '\u6FC0\u52B1\u5956\u54C1\u5FEB\u9012\u8D39',
              value: '\u6FC0\u52B1\u5956\u54C1\u5FEB\u9012\u8D39',
              show: () => editedRow.status !== 0,
            },
          ].filter((t) => (t.show === undefined ? true : t.show())),
        };
      },
      // abortEditOnEvent: ['onChange'],
      onEdited: (context) => {
        data.value.splice(context.rowIndex, 1, context.newRowData);
        console.log('Edit Letters:', context);
        MessagePlugin.success('Success');
      },
    },
  },
  {
    title: '\u521B\u5EFA\u65E5\u671F',
    colKey: 'createTime',
    // props, \u900F\u4F20\u5168\u90E8\u5C5E\u6027\u5230 DatePicker \u7EC4\u4EF6
    edit: {
      component: DatePicker,
      props: {
        mode: 'date',
      },
      // \u9664\u4E86\u70B9\u51FB\u975E\u81EA\u8EAB\u5143\u7D20\u9000\u51FA\u7F16\u8F91\u6001\u4E4B\u5916\uFF0C\u8FD8\u6709\u54EA\u4E9B\u4E8B\u4EF6\u9000\u51FA\u7F16\u8F91\u6001
      abortEditOnEvent: ['onChange'],
      onEdited: (context) => {
        data.value.splice(context.rowIndex, 1, context.newRowData);
        console.log('Edit Date:', context);
        MessagePlugin.success('Success');
      },
      // \u6821\u9A8C\u89C4\u5219\uFF0C\u6B64\u5904\u540C Form \u8868\u5355
      rules: () => [
        {
          validator: (val) => dayjs(val).isAfter(dayjs()),
          message: '\u53EA\u80FD\u9009\u62E9\u4ECA\u5929\u4EE5\u540E\u65E5\u671F',
        },
      ],
    },
  },
]);
// \u7528\u4E8E\u63A7\u5236\u54EA\u4E9B\u884C\u6216\u54EA\u4E9B\u5355\u5143\u683C\u4E0D\u5141\u8BB8\u51FA\u73B0\u7F16\u8F91\u6001
const editableCellState = (cellParams) => {
  const { rowIndex } = cellParams;
  // return row.status !== 2;
  return rowIndex !== 2;
};
// \u7528\u4E8E\u63D0\u4EA4\u524D\u6821\u9A8C\u6570\u636E\uFF08\u793A\u4F8B\u4EE3\u7801\u6709\u6548\uFF0C\u52FF\u5220\uFF09
// const validateTableData = () => {
//   // \u4EC5\u6821\u9A8C\u5904\u4E8E\u7F16\u8F91\u6001\u7684\u5355\u5143\u683C
//   tableRef.value.validateTableData().then((result) => {
//     console.log('validate result: ', result);
//   });
// };
<\/script>

<style scoped>
.table-operations {
  margin-bottom: 16px;
}

.table-operations > button {
  margin-right: 8px;
}
</style>
`,Pn=`<template>
  <div class="t-table-demo__editable-row">
    <div>
      <t-button @click="onValidateTableData">\u6821\u9A8C\u5168\u90E8</t-button>
    </div>
    <br />
    <!-- \u5F53\u524D\u793A\u4F8B\u5305\u542B\uFF1A\u8F93\u5165\u6846\u3001\u5355\u9009\u3001\u591A\u9009\u3001\u65E5\u671F \u7B49\u573A\u666F -->
    <t-table
      ref="tableRef"
      row-key="key"
      :columns="columns"
      :data="data"
      :editable-row-keys="editableRowKeys"
      table-layout="auto"
      bordered
      lazyLoad
      @row-edit="onRowEdit"
      @row-validate="onRowValidate"
      @validate="onValidate"
    />
  </div>
</template>

<script lang="jsx">
import {
  Input, Select, DatePicker, MessagePlugin,
} from 'tdesign-vue';
import dayjs from 'dayjs';

const initData = new Array(5).fill(null).map((_, i) => ({
  key: String(i + 1),
  firstName: ['\u8D3E\u660E', '\u5F20\u4E09', '\u738B\u82B3'][i % 3],
  user: {
    firstName: ['\u8D3E\u660E', '\u5F20\u4E09', '\u738B\u82B3'][i % 3],
  },
  status: i % 3,
  email: [
    'espinke0@apache.org',
    'gpurves1@issuu.com',
    'hkment2@nsw.gov.au',
    'lskures3@apache.org',
    'zcroson5@virginia.edu',
  ][i % 4],
  letters: [['\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528'], ['\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528'], ['\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528'], ['\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528', 'algolia \u670D\u52A1\u62A5\u9500']][
    i % 4
  ],
  createTime: ['2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01'][i % 4],
}));

const STATUS_OPTIONS = [
  { label: '\u5BA1\u6279\u901A\u8FC7', value: 0 },
  { label: '\u5BA1\u6279\u8FC7\u671F', value: 1 },
  { label: '\u5BA1\u6279\u5931\u8D25', value: 2 },
];

export default {
  name: 'TTableEditableCell',

  data() {
    return {
      align: 'left',
      data: [...initData],
      editableRowKeys: ['1'],
      currentSaveId: '',
      // \u4FDD\u5B58\u53D8\u5316\u8FC7\u7684\u884C\u4FE1\u606F
      editMap: {},
    };
  },

  computed: {
    columns() {
      return [
        {
          title: '\u7533\u8BF7\u4EBA',
          colKey: 'user.firstName',
          width: 120,
          align: this.align,
          // \u7F16\u8F91\u72B6\u6001\u76F8\u5173\u914D\u7F6E\uFF0C\u5168\u90E8\u96C6\u4E2D\u5728 edit
          edit: {
            // 1. \u652F\u6301\u4EFB\u610F\u7EC4\u4EF6\u3002\u9700\u4FDD\u8BC1\u7EC4\u4EF6\u5305\u542B \`value\` \u548C \`onChange\` \u4E24\u4E2A\u5C5E\u6027\uFF0C\u4E14 onChange \u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u503C\u4E3A new value\u3002
            // 2. \u5982\u679C\u5E0C\u671B\u652F\u6301\u6821\u9A8C\uFF0C\u7EC4\u4EF6\u8FD8\u9700\u5305\u542B \`status\` \u548C \`tips\` \u5C5E\u6027\u3002\u5177\u4F53 API \u542B\u4E49\u53C2\u8003 Input \u7EC4\u4EF6
            component: Input,
            // props, \u900F\u4F20\u5168\u90E8\u5C5E\u6027\u5230 Input \u7EC4\u4EF6
            props: {
              clearable: true,
              autofocus: true,
              autoWidth: true,
            },
            // \u6821\u9A8C\u89C4\u5219\uFF0C\u6B64\u5904\u540C Form \u8868\u5355
            rules: [
              { required: true, message: '\u4E0D\u80FD\u4E3A\u7A7A' },
              { max: 10, message: '\u5B57\u7B26\u6570\u91CF\u4E0D\u80FD\u8D85\u8FC7 10', type: 'warning' },
            ],
            showEditIcon: false,
          },
        },
        {
          title: '\u7533\u8BF7\u72B6\u6001',
          colKey: 'status',
          cell: (h, { row }) => STATUS_OPTIONS.find((t) => t.value === row.status)?.label,
          edit: {
            component: Select,
            // props, \u900F\u4F20\u5168\u90E8\u5C5E\u6027\u5230 Select \u7EC4\u4EF6
            props: {
              clearable: true,
              options: STATUS_OPTIONS,
            },
            // \u6821\u9A8C\u89C4\u5219\uFF0C\u6B64\u5904\u540C Form \u8868\u5355
            rules: [{ required: true, message: '\u4E0D\u80FD\u4E3A\u7A7A' }],
            showEditIcon: false,
            on: ({ updateEditedCellValue }) => ({
              onChange: () => {
                /**
                 * change other columns edited cell value
                 * \u66F4\u65B0\u672C\u884C\u5176\u4ED6\u7F16\u8F91\u6001\u5355\u5143\u683C\u7684\u6570\u636E(to update editedRow)
                 */
                updateEditedCellValue({
                  isUpdateCurrentRow: true,
                  letters: [],
                  // 'user.firstName': '',
                  // createTime: dayjs().add(1, 'day').toDate(),
                });
                /**
                 * update edited row data with row unique value is qual to 2
                 * \u66F4\u65B0\u884C\u552F\u4E00\u6807\u8BC6\u503C\u4E3A 2 \u7684\u7F16\u8F91\u6001\u6570\u636E
                 */
                // updateEditedCellValue({ rowValue: 2, letters: [] });
              },
            }),
          },
        },
        {
          title: '\u7533\u8BF7\u4E8B\u9879',
          colKey: 'letters',
          cell: (h, { row }) => row.letters.join('\u3001'),
          edit: {
            component: Select,
            // props, \u900F\u4F20\u5168\u90E8\u5C5E\u6027\u5230 Select \u7EC4\u4EF6
            // props \u4E3A\u51FD\u6570\u65F6\uFF0C\u53C2\u6570\u6709\uFF1Acol, row, rowIndex, colIndex, editedRow, updateEditedCellValue\u3002\u4E00\u822C\u7528\u4E8E\u5B9E\u73B0\u7F16\u8F91\u7EC4\u4EF6\u4E4B\u95F4\u7684\u8054\u52A8
            props: ({
              col, row, rowIndex, colIndex, editedRow, updateEditedCellValue,
            }) => {
              console.log(col, row, rowIndex, colIndex, editedRow, updateEditedCellValue);
              return {
                multiple: true,
                minCollapsedNum: 1,
                options: [
                  { label: '\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528', value: '\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528' },
                  { label: 'algolia \u670D\u52A1\u62A5\u9500', value: 'algolia \u670D\u52A1\u62A5\u9500' },
                  // \u5982\u679C\u72B6\u6001\u9009\u62E9\u4E86 \u5DF2\u8FC7\u671F\uFF0C\u5219 Letters \u9690\u85CF G \u548C H
                  { label: '\u76F8\u5173\u5468\u8FB9\u5236\u4F5C\u8D39', value: '\u76F8\u5173\u5468\u8FB9\u5236\u4F5C\u8D39', show: () => editedRow.status !== 0 },
                  { label: '\u6FC0\u52B1\u5956\u54C1\u5FEB\u9012\u8D39', value: '\u6FC0\u52B1\u5956\u54C1\u5FEB\u9012\u8D39', show: () => editedRow.status !== 0 },
                ].filter((t) => (t.show === undefined ? true : t.show())),
              };
            },
            // \u6821\u9A8C\u89C4\u5219\uFF0C\u6B64\u5904\u540C Form \u8868\u5355
            rules: [
              { validator: (val) => Boolean(val && val.length < 3), message: '\u6570\u91CF\u4E0D\u80FD\u8D85\u8FC7 2 \u4E2A' },
              { validator: (val) => Boolean(val?.length), message: '\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A' },
            ],
            showEditIcon: false,
          },
        },
        {
          title: '\u521B\u5EFA\u65E5\u671F',
          colKey: 'createTime',
          className: 't-demo-col__datepicker',
          // props, \u900F\u4F20\u5168\u90E8\u5C5E\u6027\u5230 DatePicker \u7EC4\u4EF6
          edit: {
            component: DatePicker,
            showEditIcon: false,
            // \u6821\u9A8C\u89C4\u5219\uFF0C\u6B64\u5904\u540C Form \u8868\u5355
            rules: [
              {
                validator: (val) => dayjs(val).isAfter(dayjs()),
                message: '\u53EA\u80FD\u9009\u62E9\u4ECA\u5929\u4EE5\u540E\u65E5\u671F',
              },
            ],
          },
        },
        {
          title: '\u64CD\u4F5C\u680F',
          colKey: 'operate',
          width: 150,
          cell: (h, { row }) => {
            const editable = this.editableRowKeys.includes(row.key);

            return (
              <div class="table-operations">
                {!editable && (
                  <t-link theme="primary" hover="color" data-id={row.key} onClick={this.onEdit}>
                    \u7F16\u8F91
                  </t-link>
                )}
                {editable && (
                  <t-link theme="primary" hover="color" data-id={row.key} onClick={this.onSave}>
                    \u4FDD\u5B58
                  </t-link>
                )}
                {editable && (
                  <t-link theme="primary" hover="color" data-id={row.key} onClick={this.onCancel}>
                    \u53D6\u6D88
                  </t-link>
                )}
              </div>
            );
          },
        },
      ];
    },
  },

  methods: {
    onEdit(e) {
      const { id } = e.currentTarget.dataset;
      if (!this.editableRowKeys.includes(id)) {
        this.editableRowKeys.push(id);
      }
    },
    updateEditState(id) {
      const index = this.editableRowKeys.findIndex((t) => t === id);
      this.editableRowKeys.splice(index, 1);
    },
    onCancel(e) {
      const { id } = e.currentTarget.dataset;
      this.updateEditState(id);
      this.$refs.tableRef.clearValidateData();
    },

    onSave(e) {
      const { id } = e.currentTarget.dataset;
      this.currentSaveId = id;
      // \u89E6\u53D1\u5185\u90E8\u6821\u9A8C\uFF0C\u800C\u540E\u5728 onRowValidate \u4E2D\u63A5\u6536\u5F02\u6B65\u6821\u9A8C\u7ED3\u679C
      // \u91CD\u70B9\uFF1A\u53D7\u6846\u67B6\u5C42\u9762\u9650\u5236\uFF0C\u5982\u679C\u662F EnhancedTable \u8BF7\u66F4\u4E3A\u4F7F\u7528 this.$refs.tableRef.primaryTableRef.validateRowData(id)
      // this.$refs.tableRef.primaryTableRef.validateRowData(id).then((params) => {
      this.$refs.tableRef.validateRowData(id).then((params) => {
        console.log('Event Table Promise Validate:', params);
        if (params.result.length) {
          const r = params.result[0];
          MessagePlugin.error(\`\${r.col.title} \${r.errorList[0].message}\`);
          return;
        }
        // \u5982\u679C\u662F table \u7684\u7236\u7EC4\u4EF6\u4E3B\u52A8\u89E6\u53D1\u6821\u9A8C
        if (params.trigger === 'parent' && !params.result.length) {
          const current = this.editMap[this.currentSaveId];
          if (current) {
            this.data.splice(current.rowIndex, 1, current.editedRow);
            MessagePlugin.success('\u4FDD\u5B58\u6210\u529F');
          }
          this.updateEditState(this.currentSaveId);
        }
      });
    },

    // \u884C\u6821\u9A8C\u53CD\u9988\u4E8B\u4EF6\uFF0Cthis.$refs.tableRef.validateRowData \u6267\u884C\u7ED3\u675F\u540E\u89E6\u53D1
    onRowValidate(params) {
      console.log('Event Table Row Validate:', params);
    },

    onValidateTableData() {
      // \u6267\u884C\u7ED3\u675F\u540E\u89E6\u53D1\u4E8B\u4EF6 validate
      this.$refs.tableRef.validateTableData().then((params) => {
        console.log('Promise Table Data Validate:', params);
        const cellKeys = Object.keys(params.result);
        const firstError = params.result[cellKeys[0]];
        if (firstError) {
          MessagePlugin.warning(firstError[0].message);
        }
      });
    },

    // \u8868\u683C\u5168\u91CF\u6570\u636E\u6821\u9A8C\u53CD\u9988\u4E8B\u4EF6\uFF0Cthis.$refs.tableRef.validateTableData() \u6267\u884C\u7ED3\u675F\u540E\u89E6\u53D1
    onValidate(params) {
      console.log('Event Table Data Validate:', params);
    },

    onRowEdit(params) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const {
        row,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        rowIndex,
        col,
        value,
      } = params;
      const oldRowData = this.editMap[row.key]?.editedRow || row;
      const editedRow = { ...oldRowData, [col.colKey]: value };
      this.editMap[row.key] = {
        ...params,
        editedRow,
      };

      // \u26A0\uFE0F \u91CD\u8981\uFF1A\u4EE5\u4E0B\u5185\u5BB9\u5E94\u7528\u4E8E\u5168\u91CF\u6570\u636E\u6821\u9A8C\uFF08\u5355\u72EC\u7684\u884C\u6821\u9A8C\u4E0D\u9700\u8981\uFF09
      // const newData = [...this.data];
      // newData[rowIndex] = editedRow;
      // this.data = newData;
      // \u6216\u8005
      // this.$set(this.data, rowIndex, editedRow);
    },
  },
};
<\/script>

<style>
.t-table-demo__editable-row .table-operations > .t-link {
  margin-right: 8px;
}
.t-table-demo__editable-row .t-demo-col__datepicker .t-date-picker {
  width: 120px;
}
</style>
`,On=`<template>
  <div class="t-table-demo__editable-row">
    <div>
      <t-button @click="onValidateTableData">\u6821\u9A8C\u5168\u90E8</t-button>
    </div>
    <br />
    <!-- \u5F53\u524D\u793A\u4F8B\u5305\u542B\uFF1A\u8F93\u5165\u6846\u3001\u5355\u9009\u3001\u591A\u9009\u3001\u65E5\u671F \u7B49\u573A\u666F -->
    <t-table
      ref="tableRef"
      row-key="key"
      :columns="columns"
      :data="data"
      :editable-row-keys="editableRowKeys"
      table-layout="auto"
      bordered
      lazyLoad
      @row-edit="onRowEdit"
      @row-validate="onRowValidate"
      @validate="onValidate"
    />
  </div>
</template>

<script setup lang="jsx">
import { ref, reactive, computed } from 'vue';
import {
  Input, Select, DatePicker, MessagePlugin,
} from 'tdesign-vue';
import dayjs from 'dayjs';

const initData = new Array(5).fill(null).map((_, i) => ({
  key: String(i + 1),
  firstName: ['\u8D3E\u660E', '\u5F20\u4E09', '\u738B\u82B3'][i % 3],
  user: {
    firstName: ['\u8D3E\u660E', '\u5F20\u4E09', '\u738B\u82B3'][i % 3],
  },
  status: i % 3,
  email: [
    'espinke0@apache.org',
    'gpurves1@issuu.com',
    'hkment2@nsw.gov.au',
    'lskures3@apache.org',
    'zcroson5@virginia.edu',
  ][i % 4],
  letters: [['\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528'], ['\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528'], ['\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528'], ['\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528', 'algolia \u670D\u52A1\u62A5\u9500']][
    i % 4
  ],
  createTime: ['2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01'][i % 4],
}));
const STATUS_OPTIONS = [
  {
    label: '\u5BA1\u6279\u901A\u8FC7',
    value: 0,
  },
  {
    label: '\u5BA1\u6279\u8FC7\u671F',
    value: 1,
  },
  {
    label: '\u5BA1\u6279\u5931\u8D25',
    value: 2,
  },
];
const tableRef = ref();
const align = ref('left');
const data = ref([...initData]);
const editableRowKeys = ref(['1']);
const currentSaveId = ref('');
// \u4FDD\u5B58\u53D8\u5316\u8FC7\u7684\u884C\u4FE1\u606F
const editMap = reactive({});
const onCancel = (e) => {
  const { id } = e.currentTarget.dataset;
  updateEditState(id);
  tableRef.value.clearValidateData();
};
const columns = computed(() => [
  {
    title: '\u7533\u8BF7\u4EBA',
    colKey: 'user.firstName',
    width: 120,
    align: align.value,
    // \u7F16\u8F91\u72B6\u6001\u76F8\u5173\u914D\u7F6E\uFF0C\u5168\u90E8\u96C6\u4E2D\u5728 edit
    edit: {
      // 1. \u652F\u6301\u4EFB\u610F\u7EC4\u4EF6\u3002\u9700\u4FDD\u8BC1\u7EC4\u4EF6\u5305\u542B \`value\` \u548C \`onChange\` \u4E24\u4E2A\u5C5E\u6027\uFF0C\u4E14 onChange \u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u503C\u4E3A new value\u3002
      // 2. \u5982\u679C\u5E0C\u671B\u652F\u6301\u6821\u9A8C\uFF0C\u7EC4\u4EF6\u8FD8\u9700\u5305\u542B \`status\` \u548C \`tips\` \u5C5E\u6027\u3002\u5177\u4F53 API \u542B\u4E49\u53C2\u8003 Input \u7EC4\u4EF6
      component: Input,
      // props, \u900F\u4F20\u5168\u90E8\u5C5E\u6027\u5230 Input \u7EC4\u4EF6
      props: {
        clearable: true,
        autofocus: true,
        autoWidth: true,
      },
      // \u6821\u9A8C\u89C4\u5219\uFF0C\u6B64\u5904\u540C Form \u8868\u5355
      rules: [
        {
          required: true,
          message: '\u4E0D\u80FD\u4E3A\u7A7A',
        },
        {
          max: 10,
          message: '\u5B57\u7B26\u6570\u91CF\u4E0D\u80FD\u8D85\u8FC7 10',
          type: 'warning',
        },
      ],
      showEditIcon: false,
    },
  },
  {
    title: '\u7533\u8BF7\u72B6\u6001',
    colKey: 'status',
    cell: (h, { row }) => STATUS_OPTIONS.find((t) => t.value === row.status)?.label,
    edit: {
      component: Select,
      // props, \u900F\u4F20\u5168\u90E8\u5C5E\u6027\u5230 Select \u7EC4\u4EF6
      props: {
        clearable: true,
        options: STATUS_OPTIONS,
      },
      // \u6821\u9A8C\u89C4\u5219\uFF0C\u6B64\u5904\u540C Form \u8868\u5355
      rules: [
        {
          required: true,
          message: '\u4E0D\u80FD\u4E3A\u7A7A',
        },
      ],
      showEditIcon: false,
      on: ({ updateEditedCellValue }) => ({
        onChange: () => {
          /**
           * change other columns edited cell value
           * \u66F4\u65B0\u672C\u884C\u5176\u4ED6\u7F16\u8F91\u6001\u5355\u5143\u683C\u7684\u6570\u636E(to update editedRow)
           */
          updateEditedCellValue({
            isUpdateCurrentRow: true,
            letters: [],
            // 'user.firstName': '',
            // createTime: dayjs().add(1, 'day').toDate(),
          });
          /**
           * update edited row data with row unique value is qual to 2
           * \u66F4\u65B0\u884C\u552F\u4E00\u6807\u8BC6\u503C\u4E3A 2 \u7684\u7F16\u8F91\u6001\u6570\u636E
           */
          // updateEditedCellValue({ rowValue: 2, letters: [] });
        },
      }),
    },
  },
  {
    title: '\u7533\u8BF7\u4E8B\u9879',
    colKey: 'letters',
    cell: (h, { row }) => row.letters.join('\u3001'),
    edit: {
      component: Select,
      // props, \u900F\u4F20\u5168\u90E8\u5C5E\u6027\u5230 Select \u7EC4\u4EF6
      // props \u4E3A\u51FD\u6570\u65F6\uFF0C\u53C2\u6570\u6709\uFF1Acol, row, rowIndex, colIndex, editedRow, updateEditedCellValue\u3002\u4E00\u822C\u7528\u4E8E\u5B9E\u73B0\u7F16\u8F91\u7EC4\u4EF6\u4E4B\u95F4\u7684\u8054\u52A8
      props: ({
        col, row, rowIndex, colIndex, editedRow, updateEditedCellValue,
      }) => {
        console.log(col, row, rowIndex, colIndex, editedRow, updateEditedCellValue);
        return {
          multiple: true,
          minCollapsedNum: 1,
          options: [
            {
              label: '\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528',
              value: '\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528',
            },
            {
              label: 'algolia \u670D\u52A1\u62A5\u9500',
              value: 'algolia \u670D\u52A1\u62A5\u9500',
            },
            // \u5982\u679C\u72B6\u6001\u9009\u62E9\u4E86 \u5DF2\u8FC7\u671F\uFF0C\u5219 Letters \u9690\u85CF G \u548C H
            {
              label: '\u76F8\u5173\u5468\u8FB9\u5236\u4F5C\u8D39',
              value: '\u76F8\u5173\u5468\u8FB9\u5236\u4F5C\u8D39',
              show: () => editedRow.status !== 0,
            },
            {
              label: '\u6FC0\u52B1\u5956\u54C1\u5FEB\u9012\u8D39',
              value: '\u6FC0\u52B1\u5956\u54C1\u5FEB\u9012\u8D39',
              show: () => editedRow.status !== 0,
            },
          ].filter((t) => (t.show === undefined ? true : t.show())),
        };
      },
      // \u6821\u9A8C\u89C4\u5219\uFF0C\u6B64\u5904\u540C Form \u8868\u5355
      rules: [
        {
          validator: (val) => Boolean(val && val.length < 3),
          message: '\u6570\u91CF\u4E0D\u80FD\u8D85\u8FC7 2 \u4E2A',
        },
        {
          validator: (val) => Boolean(val?.length),
          message: '\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A',
        },
      ],
      showEditIcon: false,
    },
  },
  {
    title: '\u521B\u5EFA\u65E5\u671F',
    colKey: 'createTime',
    className: 't-demo-col__datepicker',
    // props, \u900F\u4F20\u5168\u90E8\u5C5E\u6027\u5230 DatePicker \u7EC4\u4EF6
    edit: {
      component: DatePicker,
      showEditIcon: false,
      // \u6821\u9A8C\u89C4\u5219\uFF0C\u6B64\u5904\u540C Form \u8868\u5355
      rules: [
        {
          validator: (val) => dayjs(val).isAfter(dayjs()),
          message: '\u53EA\u80FD\u9009\u62E9\u4ECA\u5929\u4EE5\u540E\u65E5\u671F',
        },
      ],
    },
  },
  {
    title: '\u64CD\u4F5C\u680F',
    colKey: 'operate',
    width: 150,
    cell: (h, { row }) => {
      const editable = editableRowKeys.value.includes(row.key);
      return (
        <div class="table-operations">
          {!editable && (
            <t-link theme="primary" hover="color" data-id={row.key} onClick={onEdit}>
              \u7F16\u8F91
            </t-link>
          )}
          {editable && (
            <t-link theme="primary" hover="color" data-id={row.key} onClick={onSave}>
              \u4FDD\u5B58
            </t-link>
          )}
          {editable && (
            <t-link theme="primary" hover="color" data-id={row.key} onClick={onCancel}>
              \u53D6\u6D88
            </t-link>
          )}
        </div>
      );
    },
  },
]);
const onEdit = (e) => {
  const { id } = e.currentTarget.dataset;
  if (!editableRowKeys.value.includes(id)) {
    editableRowKeys.value.push(id);
  }
};
const updateEditState = (id) => {
  const index = editableRowKeys.value.findIndex((t) => t === id);
  editableRowKeys.value.splice(index, 1);
};
const onSave = (e) => {
  const { id } = e.currentTarget.dataset;
  currentSaveId.value = id;
  // \u89E6\u53D1\u5185\u90E8\u6821\u9A8C\uFF0C\u800C\u540E\u5728 onRowValidate \u4E2D\u63A5\u6536\u5F02\u6B65\u6821\u9A8C\u7ED3\u679C
  // \u91CD\u70B9\uFF1A\u53D7\u6846\u67B6\u5C42\u9762\u9650\u5236\uFF0C\u5982\u679C\u662F EnhancedTable \u8BF7\u66F4\u4E3A\u4F7F\u7528 this.$refs.tableRef.primaryTableRef.validateRowData(id)
  // this.$refs.tableRef.primaryTableRef.validateRowData(id).then((params) => {
  tableRef.value.validateRowData(id).then((params) => {
    console.log('Event Table Promise Validate:', params);
    if (params.result.length) {
      const r = params.result[0];
      MessagePlugin.error(\`\${r.col.title} \${r.errorList[0].message}\`);
      return;
    }
    // \u5982\u679C\u662F table \u7684\u7236\u7EC4\u4EF6\u4E3B\u52A8\u89E6\u53D1\u6821\u9A8C
    if (params.trigger === 'parent' && !params.result.length) {
      const current = editMap[currentSaveId.value];
      if (current) {
        data.value.splice(current.rowIndex, 1, current.editedRow);
        MessagePlugin.success('\u4FDD\u5B58\u6210\u529F');
      }
      updateEditState(currentSaveId.value);
    }
  });
};
// \u884C\u6821\u9A8C\u53CD\u9988\u4E8B\u4EF6\uFF0Cthis.$refs.tableRef.validateRowData \u6267\u884C\u7ED3\u675F\u540E\u89E6\u53D1
const onRowValidate = (params) => {
  console.log('Event Table Row Validate:', params);
};
const onValidateTableData = () => {
  // \u6267\u884C\u7ED3\u675F\u540E\u89E6\u53D1\u4E8B\u4EF6 validate
  tableRef.value.validateTableData().then((params) => {
    console.log('Promise Table Data Validate:', params);
    const cellKeys = Object.keys(params.result);
    const firstError = params.result[cellKeys[0]];
    if (firstError) {
      MessagePlugin.warning(firstError[0].message);
    }
  });
};
// \u8868\u683C\u5168\u91CF\u6570\u636E\u6821\u9A8C\u53CD\u9988\u4E8B\u4EF6\uFF0Cthis.$refs.tableRef.validateTableData() \u6267\u884C\u7ED3\u675F\u540E\u89E6\u53D1
const onValidate = (params) => {
  console.log('Event Table Data Validate:', params);
};
const onRowEdit = (params) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    row,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    rowIndex,
    col,
    value,
  } = params;
  const oldRowData = editMap[row.key]?.editedRow || row;
  const editedRow = {
    ...oldRowData,
    [col.colKey]: value,
  };
  editMap[row.key] = {
    ...params,
    editedRow,
  };

  // \u26A0\uFE0F \u91CD\u8981\uFF1A\u4EE5\u4E0B\u5185\u5BB9\u5E94\u7528\u4E8E\u5168\u91CF\u6570\u636E\u6821\u9A8C\uFF08\u5355\u72EC\u7684\u884C\u6821\u9A8C\u4E0D\u9700\u8981\uFF09
  // const newData = [...this.data];
  // newData[rowIndex] = editedRow;
  // this.data = newData;
  // \u6216\u8005
  // this.$set(this.data, rowIndex, editedRow);
};
<\/script>

<style>
.t-table-demo__editable-row .table-operations > .t-link {
  margin-right: 8px;
}
.t-table-demo__editable-row .t-demo-col__datepicker .t-date-picker {
  width: 120px;
}
</style>
`,jn=`<template>
  <div>
    <t-space>
      <t-button @click="appendToRoot">\u6DFB\u52A0\u6839\u8282\u70B9</t-button>
      <t-button theme="default" @click="resetData">\u91CD\u7F6E/\u66F4\u65B0\u6570\u636E</t-button>
      <t-button theme="default" @click="onRowToggle">\u4EFB\u610F\u8282\u70B9\u5C55\u5F00/\u6536\u8D77</t-button>
      <t-button theme="default" @click="onExpandAllToggle">{{ expandAll ? '\u6536\u8D77\u5168\u90E8' : '\u5C55\u5F00\u5168\u90E8' }}</t-button>
      <t-button theme="default" @click="getTreeNode">\u83B7\u53D6\u5168\u90E8\u6811\u5F62\u7ED3\u6784</t-button>
    </t-space>
    <br />
    <div>
      <t-checkbox v-model="customTreeExpandAndFoldIcon" style="vertical-align: middle">
        \u81EA\u5B9A\u4E49\u6298\u53E0/\u5C55\u5F00\u56FE\u6807
      </t-checkbox>
    </div>
    <br />
    <!-- !!! \u6811\u5F62\u7ED3\u6784 EnhancedTable \u624D\u652F\u6301\uFF0C\u666E\u901A Table \u4E0D\u652F\u6301 !!! -->
    <!-- \u7B2C\u4E00\u5217\u5C55\u5F00\u6811\u7ED3\u70B9\uFF0C\u7F29\u8FDB\u4E3A 24px\uFF0C\u5B50\u8282\u70B9\u5B57\u6BB5 childrenKey \u9ED8\u8BA4\u4E3A children -->
    <!-- :displayColumns.sync="displayColumns" used to control displayed columns -->
    <!-- expandedTreeNodes.sync is not required. you can control expanded tree node by expandedTreeNodes -->
    <t-enhanced-table
      ref="table"
      rowKey="key"
      drag-sort="row-handler"
      :data="data"
      :columns="columns"
      :tree="{ childrenKey: 'list', treeNodeColumnIndex: 2, expandTreeNodeOnClick: true }"
      :treeExpandAndFoldIcon="treeExpandIcon"
      :pagination="pagination"
      :beforeDragSort="beforeDragSort"
      :expandedTreeNodes.sync="expandedTreeNodes"
      :columnController="{
        placement: 'bottom-left',
        // \u5141\u8BB8\u63A7\u5236\u54EA\u4E9B\u5217\u663E\u793A\u6216\u9690\u85CF
        fields: ['id', 'platform', 'operate'],
        dialogProps: { preventScrollThrough: true },
      }"
      lazyLoad
      @page-change="onPageChange"
      @abnormal-drag-sort="onAbnormalDragSort"
      @drag-sort="onDragSort"
      @expanded-tree-nodes-change="onExpandedTreeNodesChange"
    ></t-enhanced-table>
    <!-- @tree-expand-change="onTreeExpandChange" -->

    <!-- \u7B2C\u4E8C\u5217\u5C55\u5F00\u6811\u7ED3\u70B9\uFF0C\u7F29\u8FDB\u4E3A 12px\uFF0C\u793A\u4F8B\u4EE3\u7801\u6709\u6548\uFF0C\u52FF\u5220 -->
    <!-- indent \u5B9A\u4E49\u7F29\u8FDB\u8DDD\u79BB -->
    <!-- \u5982\u679C\u5B50\u7ED3\u70B9\u5B57\u6BB5\u4E0D\u662F 'children'\uFF0C\u53EF\u4EE5\u4F7F\u7528 childrenKey \u5B9A\u4E49\u5B57\u6BB5\u522B\u540D\uFF0C\u5982 \`:tree="{ childrenKey: 'list' }"\` -->
    <!-- <t-enhanced-table
      ref="table"
      rowKey="key"
      :pagination="defaultPagination"
      :data="data"
      :columns="columns"
      :tree="{ indent: 12, childrenKey: 'list', defaultExpandAll: true }"
      @page-change="onPageChange"
    ></t-enhanced-table> -->
  </div>
</template>
<script lang="jsx">
import { MessagePlugin, EnhancedTable, Loading } from 'tdesign-vue';
import {
  ChevronRightIcon, ChevronDownIcon, MoveIcon, AddRectangleIcon, MinusRectangleIcon,
} from 'tdesign-icons-vue';

const TOTAL = 5;

function getObject(i, currentPage) {
  return {
    id: i,
    key: \`\u7533\u8BF7\u4EBA \${i}_\${currentPage} \u53F7\`,
    platform: ['\u7535\u5B50\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72'][i % 3],
    type: ['String', 'Number', 'Array', 'Object'][i % 4],
    default: ['-', '0', '[]', '{}'][i % 4],
    detail: {
      position: \`\u8BFB\u53D6 \${i} \u4E2A\u6570\u636E\u7684\u5D4C\u5957\u4FE1\u606F\u503C\`,
    },
    needed: i % 4 === 0 ? '\u662F' : '\u5426',
    description: '\u6570\u636E\u6E90',
  };
}

function getData(currentPage = 1) {
  const data = [];
  // const pageInfo = \`\u7B2C \${currentPage} \u9875\`;
  for (let i = 0; i < TOTAL; i++) {
    const obj = getObject(i, currentPage);
    // \u7B2C\u4E00\u884C\u4E0D\u8BBE\u7F6E\u5B50\u8282\u70B9
    obj.list = i === 0
      ? []
      : new Array(2).fill(null).map((t, j) => {
        const secondIndex = 100 * j + (i + 1) * 10;
        const secondObj = {
          ...obj,
          id: secondIndex,
          key: \`\u7533\u8BF7\u4EBA \${secondIndex}_\${currentPage} \u53F7\`,
        };
        secondObj.list = new Array(3).fill(null).map((m, n) => {
          const thirdIndex = secondIndex * 1000 + 100 * m + (n + 1) * 10;
          return {
            ...obj,
            id: thirdIndex,
            key: \`\u7533\u8BF7\u4EBA \${thirdIndex}_\${currentPage} \u53F7\`,
            list: true,
          };
        });
        return secondObj;
      });
    data.push(obj);
  }
  // \u61D2\u52A0\u8F7D1
  data.push({
    ...getObject(66666, currentPage),
    /** \u5982\u679C\u5B50\u8282\u70B9\u4E3A\u61D2\u52A0\u8F7D\uFF0C\u5219\u521D\u59CB\u503C\u8BBE\u7F6E\u4E3A true */
    list: true,
    key: '\u7533\u8BF7\u4EBA\u61D2\u52A0\u8F7D\u8282\u70B9 66666\uFF0C\u70B9\u6211\u4F53\u9A8C',
  });
  // \u61D2\u52A0\u8F7D2
  data.push({
    ...getObject(88888, currentPage),
    /** \u5982\u679C\u5B50\u8282\u70B9\u4E3A\u61D2\u52A0\u8F7D\uFF0C\u5219\u521D\u59CB\u503C\u8BBE\u7F6E\u4E3A true */
    list: true,
    key: '\u7533\u8BF7\u4EBA\u61D2\u52A0\u8F7D\u8282\u70B9 88888\uFF0C\u70B9\u6211\u4F53\u9A8C ',
  });
  return data;
}

export default {
  components: { TEnhancedTable: EnhancedTable },
  data() {
    return {
      customTreeExpandAndFoldIcon: false,
      data: getData(),
      lazyLoadingData: null,
      expandAll: false,
      expandedTreeNodes: ['\u7533\u8BF7\u4EBA 2_1 \u53F7', '\u7533\u8BF7\u4EBA 30_1 \u53F7', '\u7533\u8BF7\u4EBA 4_1 \u53F7'],
      pagination: {
        current: 1,
        pageSize: 10,
        total: TOTAL,
      },
      // defaultPagination: {
      //   defaultCurrent: 1,
      //   defaultPageSize: 10,
      //   total: TOTAL,
      // },
      // displayColumns: ['drag', 'id', 'key', 'platform', 'operate'],
      columns: [
        {
          // \u5217\u62D6\u62FD\u6392\u5E8F\u5FC5\u8981\u53C2\u6570
          colKey: 'drag',
          title: '\u6392\u5E8F',
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          cell: (h) => <MoveIcon />,
          width: 80,
        },
        {
          colKey: 'id',
          title: '\u7F16\u53F7',
          ellipsis: true,
          width: 80,
        },
        {
          width: 180,
          colKey: 'key',
          title: '\u7533\u8BF7\u4EBA',
          ellipsis: true,
        },
        {
          colKey: 'platform',
          title: '\u7B7E\u7F72\u65B9\u5F0F',
          width: 100,
          cell: (h, { row }) => row.platform === '\u7535\u5B50\u7B7E\u7F72' ? (
              <t-tag size="small" theme="primary">
                {row.platform}
              </t-tag>
          ) : (
            row.platform
          ),
        },
        {
          colKey: 'operate',
          width: 340,
          title: '\u64CD\u4F5C',
          align: 'center',
          // \u589E\u3001\u5220\u3001\u6539\u3001\u67E5 \u7B49\u64CD\u4F5C
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          cell: (h, { row }) => (
            <div class="tdesign-table-demo__table-operations">
              <t-link variant="text" hover="color" onClick={() => this.appendTo(row)}>
                \u63D2\u5165
              </t-link>
              <t-link variant="text" hover="color" onClick={() => this.insertBefore(row)}>
                \u524D\u63D2
              </t-link>
              <t-link variant="text" hover="color" onClick={() => this.insertAfter(row)}>
                \u540E\u63D2
              </t-link>
              <t-link variant="text" hover="color" onClick={() => this.onEditClick(row)}>
                \u66F4\u65B0
              </t-link>
              <t-link variant="text" hover="color" onClick={() => this.onLookUp(row)}>
                \u67E5\u770B
              </t-link>
              <t-popconfirm content="\u786E\u8BA4\u5220\u9664\u5417" onConfirm={() => this.onDeleteConfirm(row)}>
                <t-link variant="text" hover="color">
                  \u5220\u9664
                </t-link>
              </t-popconfirm>
            </div>
          ),
        },
      ],
    };
  },

  computed: {
    // \u53EF\u4EE5\u4F7F\u7528\u540C\u540D\u63D2\u69FD\u4EE3\u66FF\u6E32\u67D3\u51FD\u6570\uFF1A<template #treeExpandAndFoldIcon><icon /></template>
    treeExpandIcon() {
      // \u81EA\u5B9A\u4E49\u5C55\u5F00\u56FE\u6807
      if (this.customTreeExpandAndFoldIcon) {
        return this.treeExpandAndFoldIconRender;
      }
      return this.lazyLoadingTreeIconRender;
    },
  },

  methods: {
    // \u5168\u65B0\u8D4B\u503C\uFF1A
    resetData() {
      const newData = getData();
      // \u65B9\u5F0F\u4E00
      this.data = newData;
      this.expandedTreeNodes = [];

      // \u65B9\u5F0F\u4E8C\uFF0C\u548C\u65B9\u5F0F\u4E00\u7B49\u6548
      // this.$refs.table.resetData(newData);
    },

    // \u66F4\u65B0
    onEditClick(row) {
      const newData = {
        ...row,
        platform: 'New',
        type: 'Symbol',
        default: 'undefined',
      };
      this.$refs.table.setData(row.key, newData);
      this.$message.success('\u6570\u636E\u5DF2\u66F4\u65B0');
    },

    // \u5220\u9664
    onDeleteConfirm(row) {
      this.$refs.table.remove(row.key);
      // \u79FB\u9664\u5B50\u8282\u70B9
      // this.$refs.table.removeChildren(row.key);
      this.$message.success('\u5220\u9664\u6210\u529F');
    },

    // \u67E5\u770B\u6570\u636E
    onLookUp(row) {
      const allRowData = this.$refs.table.getData(row.key);
      const message = '\u5F53\u524D\u884C\u5168\u90E8\u6570\u636E\uFF0C\u5305\u542B\u8282\u70B9\u8DEF\u5F84\u3001\u7236\u8282\u70B9\u3001\u5B50\u8282\u70B9\u3001\u662F\u5426\u5C55\u5F00\u3001\u662F\u5426\u7981\u7528\u7B49';
      this.$message.success(\`\u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B\${message}\`);
      console.log(\`\${message}\uFF1A\`, allRowData);
    },

    // \u65B0\u589E\u5B50\u8282\u70B9
    appendTo(row) {
      const randomKey1 = Math.round(Math.random() * Math.random() * 1000) + 10000;
      this.$refs.table.appendTo(row.key, {
        id: randomKey1,
        key: \`\u7533\u8BF7\u4EBA \${randomKey1} \u53F7\`,
        platform: '\u7535\u5B50\u7B7E\u7F72',
        type: 'Number',
      });
      this.$message.success(\`\u5DF2\u63D2\u5165\u5B50\u8282\u70B9\u7533\u8BF7\u4EBA \${randomKey1} \u53F7\uFF0C\u8BF7\u5C55\u5F00\u67E5\u770B\`);

      // \u4E00\u6B21\u6027\u6DFB\u52A0\u591A\u4E2A\u5B50\u8282\u70B9\u3002\u793A\u4F8B\u4EE3\u7801\u6709\u6548\uFF0C\u52FF\u5220\uFF01!!
      // this.appendMultipleDataTo(row);
    },

    appendMultipleDataTo(row) {
      const randomKey1 = Math.round(Math.random() * Math.random() * 1000) + 10000;
      const randomKey2 = Math.round(Math.random() * Math.random() * 1000) + 10000;
      const appendList = [
        {
          id: randomKey1,
          key: \`\u7533\u8BF7\u4EBA \${randomKey1} \u53F7\`,
          platform: '\u7535\u5B50\u7B7E\u7F72',
          type: 'Number',
        },
        {
          id: randomKey2,
          key: \`\u7533\u8BF7\u4EBA \${randomKey2} \u53F7\`,
          platform: '\u7EB8\u8D28\u7B7E\u7F72',
          type: 'Number',
        },
      ];
      this.$refs.table.appendTo(row?.key, appendList);
      MessagePlugin.success(\`\u5DF2\u63D2\u5165\u5B50\u8282\u70B9\u7533\u8BF7\u4EBA \${randomKey1} \u548C \${randomKey2} \u53F7\uFF0C\u8BF7\u5C55\u5F00\u67E5\u770B\`);
    },

    // \u5F53\u524D\u8282\u70B9\u4E4B\u524D\uFF0C\u65B0\u589E\u5144\u5F1F\u8282\u524D
    insertBefore(row) {
      const randomKey = Math.round(Math.random() * Math.random() * 1000) + 10000;
      this.$refs.table.insertBefore(row.key, {
        id: randomKey,
        key: \`\u7533\u8BF7\u4EBA \${randomKey} \u53F7\`,
        platform: '\u7EB8\u8D28\u7B7E\u7F72',
        type: 'Number',
      });
      this.$message.success(\`\u5DF2\u63D2\u5165\u5B50\u8282\u70B9\u7533\u8BF7\u4EBA \${randomKey} \u53F7\uFF0C\u8BF7\u5C55\u5F00\u67E5\u770B\`);
    },

    // \u5F53\u524D\u8282\u70B9\u4E4B\u540E\uFF0C\u65B0\u589E\u5144\u5F1F\u8282\u524D
    insertAfter(row) {
      const randomKey = Math.round(Math.random() * Math.random() * 1000) + 10000;
      this.$refs.table.insertAfter(row.key, {
        id: randomKey,
        key: \`\u7533\u8BF7\u4EBA \${randomKey} \u53F7\`,
        platform: '\u7EB8\u8D28\u7B7E\u7F72',
        type: 'Number',
      });
      this.$message.success(\`\u5DF2\u63D2\u5165\u5B50\u8282\u70B9\u7533\u8BF7\u4EBA \${randomKey} \u53F7\uFF0C\u8BF7\u5C55\u5F00\u67E5\u770B\`);
    },

    onPageChange(pageInfo) {
      this.pagination.current = pageInfo.current;
      this.pagination.pageSize = pageInfo.pageSize;
      this.data = getData(pageInfo.current);
    },

    onRowToggle() {
      const rowIds = ['\u7533\u8BF7\u4EBA 1_1 \u53F7', '\u7533\u8BF7\u4EBA 2_1 \u53F7', '\u7533\u8BF7\u4EBA 3_1 \u53F7', '\u7533\u8BF7\u4EBA 4_1 \u53F7'];
      rowIds.forEach((id) => {
        // getData \u53C2\u6570\u4E3A\u884C\u552F\u4E00\u6807\u8BC6\uFF0Clodash.get(row, rowKey)
        const rowData = this.$refs.table.getData(id);
        this.$refs.table.toggleExpandData(rowData);
        // \u6216\u8005
        // this.$refs.table.toggleExpandData({ rowIndex: rowData.rowIndex, row: rowData.row });
      });
    },

    // eslint-disable-next-line
    treeExpandAndFoldIconRender(h, { type, row }) {
      if (this.lazyLoadingData && this.lazyLoadingData.key === row?.key) {
        return <Loading size="14px" />;
      }
      return type === 'expand' ? <ChevronRightIcon /> : <ChevronDownIcon />;
    },

    // \u61D2\u52A0\u8F7D\u56FE\u6807\u6E32\u67D3
    lazyLoadingTreeIconRender(h, params) {
      const { type, row } = params;
      if (this.lazyLoadingData?.key === row?.key) {
        return <Loading size="14px" />;
      }
      return type === 'expand' ? <AddRectangleIcon /> : <MinusRectangleIcon />;
    },

    onExpandedTreeNodesChange(expandedTreeNodes, context) {
      console.log(expandedTreeNodes, context);
      if (!context.rowState) return;
      this.onTreeExpandChange(context);
    },

    onTreeExpandChange(context) {
      console.log(context.rowState.expanded ? '\u5C55\u5F00' : '\u6536\u8D77', context);
      /**
       * \u5982\u679C\u662F\u61D2\u52A0\u8F7D\uFF0C\u8BF7\u786E\u8BA4\u81EA\u5DF1\u5B8C\u6210\u4E86\u4EE5\u4E0B\u51E0\u4E2A\u6B65\u9AA4
       * 1. \u63D0\u524D\u8BBE\u7F6E children \u503C\u4E3A true\uFF1B
       * 2. \u5728 onTreeExpandChange \u4E8B\u4EF6\u4E2D\u5904\u7406\u5F02\u6B65\u6570\u636E\uFF1B
       * 3. \u81EA\u5B9A\u4E49\u5C55\u5F00\u56FE\u6807\u6E32\u67D3 lazyLoadingTreeIconRender
       */
      if (context.row.list === true) {
        this.lazyLoadingData = context.row;
        const timer = setTimeout(() => {
          this.appendMultipleDataTo(context.row);
          this.lazyLoadingData = null;
          clearTimeout(timer);
        }, 200);
      }
    },

    getTreeNode() {
      // \u67E5\u770B\u6811\u5F62\u7ED3\u6784\u5E73\u94FA\u6570\u636E
      // this.$refs.table.dataSource
      const treeData = this.$refs.table.getTreeNode();
      console.log(treeData);
      this.$message.success('\u6811\u5F62\u7ED3\u6784\u83B7\u53D6\u6210\u529F\uFF0C\u8BF7\u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B');
    },

    onExpandAllToggle() {
      this.expandAll = !this.expandAll;
      this.expandAll ? this.$refs.table.expandAll() : this.$refs.table.foldAll();
    },

    appendToRoot() {
      const key = Math.round(Math.random() * 10010);
      this.$refs.table.appendTo('', {
        id: key,
        key: \`\u7533\u8BF7\u4EBA \${key}_\${1} \u53F7\`,
        platform: key % 2 === 0 ? '\u5171\u6709' : '\u79C1\u6709',
        type: ['String', 'Number', 'Array', 'Object'][key % 4],
        default: ['-', '0', '[]', '{}'][key % 4],
        detail: {
          position: \`\u8BFB\u53D6 \${key} \u4E2A\u6570\u636E\u7684\u5D4C\u5957\u4FE1\u606F\u503C\`,
        },
        needed: key % 4 === 0 ? '\u662F' : '\u5426',
        description: '\u6570\u636E\u6E90',
      });

      // \u540C\u65F6\u6DFB\u52A0\u591A\u4E2A\u5143\u7D20\uFF0C\u793A\u4F8B\u4EE3\u7801\u6709\u6548\u52FF\u5220
      // this.appendMultipleDataTo();
    },

    onAbnormalDragSort(params) {
      console.log(params);
      // this.$message.warning(params.reason);
      if (params.code === 1001) {
        this.$message.warning('\u4E0D\u540C\u5C42\u7EA7\u7684\u5143\u7D20\uFF0C\u4E0D\u5141\u8BB8\u8C03\u6574\u987A\u5E8F');
      }
    },

    // \u62D6\u62FD\u6392\u5E8F\u6210\u529F\u540E\u89E6\u53D1
    onDragSort(params) {
      console.log('onDragSort:', params);
    },

    // \u5E94\u7528\u4E8E\u9700\u8981\u963B\u6B62\u62D6\u62FD\u6392\u5E8F\u7684\u573A\u666F\u3002\u5982\uFF1A\u5F53\u5B50\u8282\u70B9\u5B58\u5728\u65F6\uFF0C\u5219\u4E0D\u5141\u8BB8\u8C03\u6574\u987A\u5E8F
    // \u8FD4\u56DE\u503C\u4E3A true\uFF0C\u5141\u8BB8\u62D6\u62FD\u6392\u5E8F\uFF1B\u8FD4\u56DE\u503C \u4E3A false\uFF0C\u5219\u963B\u6B62\u62D6\u62FD\u6392\u5E8F
    beforeDragSort(params) {
      console.log('beforeDragSort:', params);
      return true;
    },
  },
};
<\/script>

<style>
.tdesign-table-demo__table-operations .t-link {
  padding: 0 8px;
}
</style>
`,$n=`<template>
  <div>
    <t-space>
      <t-button @click="appendToRoot">\u6DFB\u52A0\u6839\u8282\u70B9</t-button>
      <t-button theme="default" @click="resetData">\u91CD\u7F6E/\u66F4\u65B0\u6570\u636E</t-button>
      <t-button theme="default" @click="onRowToggle">\u4EFB\u610F\u8282\u70B9\u5C55\u5F00/\u6536\u8D77</t-button>
      <t-button theme="default" @click="onExpandAllToggle">{{ expandAll ? '\u6536\u8D77\u5168\u90E8' : '\u5C55\u5F00\u5168\u90E8' }}</t-button>
      <t-button theme="default" @click="getTreeNode">\u83B7\u53D6\u5168\u90E8\u6811\u5F62\u7ED3\u6784</t-button>
    </t-space>
    <br />
    <div>
      <t-checkbox v-model="customTreeExpandAndFoldIcon" style="vertical-align: middle">
        \u81EA\u5B9A\u4E49\u6298\u53E0/\u5C55\u5F00\u56FE\u6807
      </t-checkbox>
    </div>
    <br />
    <!-- !!! \u6811\u5F62\u7ED3\u6784 EnhancedTable \u624D\u652F\u6301\uFF0C\u666E\u901A Table \u4E0D\u652F\u6301 !!! -->
    <!-- \u7B2C\u4E00\u5217\u5C55\u5F00\u6811\u7ED3\u70B9\uFF0C\u7F29\u8FDB\u4E3A 24px\uFF0C\u5B50\u8282\u70B9\u5B57\u6BB5 childrenKey \u9ED8\u8BA4\u4E3A children -->
    <!-- :displayColumns.sync="displayColumns" used to control displayed columns -->
    <!-- expandedTreeNodes.sync is not required. you can control expanded tree node by expandedTreeNodes -->
    <t-enhanced-table
      ref="table"
      rowKey="key"
      drag-sort="row-handler"
      :data="data"
      :columns="columns"
      :tree="{ childrenKey: 'list', treeNodeColumnIndex: 2, expandTreeNodeOnClick: true }"
      :treeExpandAndFoldIcon="treeExpandIcon"
      :pagination="pagination"
      :beforeDragSort="beforeDragSort"
      :expandedTreeNodes.sync="expandedTreeNodes"
      :columnController="{
        placement: 'bottom-left',
        // \u5141\u8BB8\u63A7\u5236\u54EA\u4E9B\u5217\u663E\u793A\u6216\u9690\u85CF
        fields: ['id', 'platform', 'operate'],
        dialogProps: { preventScrollThrough: true },
      }"
      lazyLoad
      @page-change="onPageChange"
      @abnormal-drag-sort="onAbnormalDragSort"
      @drag-sort="onDragSort"
      @expanded-tree-nodes-change="onExpandedTreeNodesChange"
    ></t-enhanced-table>
    <!-- @tree-expand-change="onTreeExpandChange" -->

    <!-- \u7B2C\u4E8C\u5217\u5C55\u5F00\u6811\u7ED3\u70B9\uFF0C\u7F29\u8FDB\u4E3A 12px\uFF0C\u793A\u4F8B\u4EE3\u7801\u6709\u6548\uFF0C\u52FF\u5220 -->
    <!-- indent \u5B9A\u4E49\u7F29\u8FDB\u8DDD\u79BB -->
    <!-- \u5982\u679C\u5B50\u7ED3\u70B9\u5B57\u6BB5\u4E0D\u662F 'children'\uFF0C\u53EF\u4EE5\u4F7F\u7528 childrenKey \u5B9A\u4E49\u5B57\u6BB5\u522B\u540D\uFF0C\u5982 \`:tree="{ childrenKey: 'list' }"\` -->
    <!-- <t-enhanced-table
      ref="table"
      rowKey="key"
      :pagination="defaultPagination"
      :data="data"
      :columns="columns"
      :tree="{ indent: 12, childrenKey: 'list', defaultExpandAll: true }"
      @page-change="onPageChange"
    ></t-enhanced-table> -->
  </div>
</template>
<script setup lang="jsx">
import { ref, reactive, computed } from 'vue';
import { MessagePlugin, EnhancedTable as TEnhancedTable, Loading } from 'tdesign-vue';
import {
  ChevronRightIcon, ChevronDownIcon, MoveIcon, AddRectangleIcon, MinusRectangleIcon,
} from 'tdesign-icons-vue';

const TOTAL = 5;
function getObject(i, currentPage) {
  return {
    id: i,
    key: \`\u7533\u8BF7\u4EBA \${i}_\${currentPage} \u53F7\`,
    platform: ['\u7535\u5B50\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72'][i % 3],
    type: ['String', 'Number', 'Array', 'Object'][i % 4],
    default: ['-', '0', '[]', '{}'][i % 4],
    detail: {
      position: \`\u8BFB\u53D6 \${i} \u4E2A\u6570\u636E\u7684\u5D4C\u5957\u4FE1\u606F\u503C\`,
    },
    needed: i % 4 === 0 ? '\u662F' : '\u5426',
    description: '\u6570\u636E\u6E90',
  };
}
function getData(currentPage = 1) {
  const data = [];
  // const pageInfo = \`\u7B2C \${currentPage} \u9875\`;
  for (let i = 0; i < TOTAL; i++) {
    const obj = getObject(i, currentPage);
    // \u7B2C\u4E00\u884C\u4E0D\u8BBE\u7F6E\u5B50\u8282\u70B9
    obj.list = i === 0
      ? []
      : new Array(2).fill(null).map((t, j) => {
        const secondIndex = 100 * j + (i + 1) * 10;
        const secondObj = {
          ...obj,
          id: secondIndex,
          key: \`\u7533\u8BF7\u4EBA \${secondIndex}_\${currentPage} \u53F7\`,
        };
        secondObj.list = new Array(3).fill(null).map((m, n) => {
          const thirdIndex = secondIndex * 1000 + 100 * m + (n + 1) * 10;
          return {
            ...obj,
            id: thirdIndex,
            key: \`\u7533\u8BF7\u4EBA \${thirdIndex}_\${currentPage} \u53F7\`,
            list: true,
          };
        });
        return secondObj;
      });
    data.push(obj);
  }
  // \u61D2\u52A0\u8F7D1
  data.push({
    ...getObject(66666, currentPage),
    /** \u5982\u679C\u5B50\u8282\u70B9\u4E3A\u61D2\u52A0\u8F7D\uFF0C\u5219\u521D\u59CB\u503C\u8BBE\u7F6E\u4E3A true */
    list: true,
    key: '\u7533\u8BF7\u4EBA\u61D2\u52A0\u8F7D\u8282\u70B9 66666\uFF0C\u70B9\u6211\u4F53\u9A8C',
  });
  // \u61D2\u52A0\u8F7D2
  data.push({
    ...getObject(88888, currentPage),
    /** \u5982\u679C\u5B50\u8282\u70B9\u4E3A\u61D2\u52A0\u8F7D\uFF0C\u5219\u521D\u59CB\u503C\u8BBE\u7F6E\u4E3A true */
    list: true,
    key: '\u7533\u8BF7\u4EBA\u61D2\u52A0\u8F7D\u8282\u70B9 88888\uFF0C\u70B9\u6211\u4F53\u9A8C ',
  });
  return data;
}
const table = ref();
const customTreeExpandAndFoldIcon = ref(false);
const data = ref(getData());
const lazyLoadingData = ref(null);
const expandAll = ref(false);
const expandedTreeNodes = ref(['\u7533\u8BF7\u4EBA 2_1 \u53F7', '\u7533\u8BF7\u4EBA 30_1 \u53F7', '\u7533\u8BF7\u4EBA 4_1 \u53F7']);
const pagination = reactive({
  current: 1,
  pageSize: 10,
  total: TOTAL,
});
// const defaultPagination = reactive({
//   defaultCurrent: 1,
//   defaultPageSize: 10,
//   total: TOTAL,
// });
// const displayColumns = ref(['drag', 'id', 'key', 'platform', 'operate']);
const columns = ref([
  {
    // \u5217\u62D6\u62FD\u6392\u5E8F\u5FC5\u8981\u53C2\u6570
    colKey: 'drag',
    title: '\u6392\u5E8F',
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    cell: (h) => <MoveIcon />,
    width: 80,
  },
  {
    colKey: 'id',
    title: '\u7F16\u53F7',
    ellipsis: true,
    width: 80,
  },
  {
    width: 180,
    colKey: 'key',
    title: '\u7533\u8BF7\u4EBA',
    ellipsis: true,
  },
  {
    colKey: 'platform',
    title: '\u7B7E\u7F72\u65B9\u5F0F',
    width: 100,
    cell: (h, { row }) => row.platform === '\u7535\u5B50\u7B7E\u7F72' ? (
        <t-tag size="small" theme="primary">
          {row.platform}
        </t-tag>
    ) : (
      row.platform
    ),
  },
  {
    colKey: 'operate',
    width: 340,
    title: '\u64CD\u4F5C',
    align: 'center',
    // \u589E\u3001\u5220\u3001\u6539\u3001\u67E5 \u7B49\u64CD\u4F5C
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    cell: (h, { row }) => (
      <div class="tdesign-table-demo__table-operations">
        <t-link variant="text" hover="color" onClick={() => appendTo(row)}>
          \u63D2\u5165
        </t-link>
        <t-link variant="text" hover="color" onClick={() => insertBefore(row)}>
          \u524D\u63D2
        </t-link>
        <t-link variant="text" hover="color" onClick={() => insertAfter(row)}>
          \u540E\u63D2
        </t-link>
        <t-link variant="text" hover="color" onClick={() => onEditClick(row)}>
          \u66F4\u65B0
        </t-link>
        <t-link variant="text" hover="color" onClick={() => onLookUp(row)}>
          \u67E5\u770B
        </t-link>
        <t-popconfirm content="\u786E\u8BA4\u5220\u9664\u5417" onConfirm={() => onDeleteConfirm(row)}>
          <t-link variant="text" hover="color">
            \u5220\u9664
          </t-link>
        </t-popconfirm>
      </div>
    ),
  },
]);
// \u61D2\u52A0\u8F7D\u56FE\u6807\u6E32\u67D3
const lazyLoadingTreeIconRender = (h, params) => {
  const { type, row } = params;
  if (lazyLoadingData.value?.key === row?.key) {
    return <Loading size="14px" />;
  }
  return type === 'expand' ? <AddRectangleIcon /> : <MinusRectangleIcon />;
};
// \u53EF\u4EE5\u4F7F\u7528\u540C\u540D\u63D2\u69FD\u4EE3\u66FF\u6E32\u67D3\u51FD\u6570\uFF1A<template #treeExpandAndFoldIcon><icon /></template>
const treeExpandIcon = computed(() => {
  // \u81EA\u5B9A\u4E49\u5C55\u5F00\u56FE\u6807
  if (customTreeExpandAndFoldIcon.value) {
    return treeExpandAndFoldIconRender;
  }
  return lazyLoadingTreeIconRender;
});
// \u5168\u65B0\u8D4B\u503C\uFF1A
const resetData = () => {
  const newData = getData();
  // \u65B9\u5F0F\u4E00
  data.value = newData;
  expandedTreeNodes.value = [];

  // \u65B9\u5F0F\u4E8C\uFF0C\u548C\u65B9\u5F0F\u4E00\u7B49\u6548
  // this.$refs.table.resetData(newData);
};
// \u66F4\u65B0
const onEditClick = (row) => {
  const newData = {
    ...row,
    platform: 'New',
    type: 'Symbol',
    default: 'undefined',
  };
  table.value.setData(row.key, newData);
  MessagePlugin.success('\u6570\u636E\u5DF2\u66F4\u65B0');
};
// \u5220\u9664
const onDeleteConfirm = (row) => {
  table.value.remove(row.key);
  // \u79FB\u9664\u5B50\u8282\u70B9
  // this.$refs.table.removeChildren(row.key);
  MessagePlugin.success('\u5220\u9664\u6210\u529F');
};
// \u67E5\u770B\u6570\u636E
const onLookUp = (row) => {
  const allRowData = table.value.getData(row.key);
  const message = '\u5F53\u524D\u884C\u5168\u90E8\u6570\u636E\uFF0C\u5305\u542B\u8282\u70B9\u8DEF\u5F84\u3001\u7236\u8282\u70B9\u3001\u5B50\u8282\u70B9\u3001\u662F\u5426\u5C55\u5F00\u3001\u662F\u5426\u7981\u7528\u7B49';
  MessagePlugin.success(\`\u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B\${message}\`);
  console.log(\`\${message}\uFF1A\`, allRowData);
};
// \u65B0\u589E\u5B50\u8282\u70B9
const appendTo = (row) => {
  const randomKey1 = Math.round(Math.random() * Math.random() * 1000) + 10000;
  table.value.appendTo(row.key, {
    id: randomKey1,
    key: \`\u7533\u8BF7\u4EBA \${randomKey1} \u53F7\`,
    platform: '\u7535\u5B50\u7B7E\u7F72',
    type: 'Number',
  });
  MessagePlugin.success(\`\u5DF2\u63D2\u5165\u5B50\u8282\u70B9\u7533\u8BF7\u4EBA \${randomKey1} \u53F7\uFF0C\u8BF7\u5C55\u5F00\u67E5\u770B\`);

  // \u4E00\u6B21\u6027\u6DFB\u52A0\u591A\u4E2A\u5B50\u8282\u70B9\u3002\u793A\u4F8B\u4EE3\u7801\u6709\u6548\uFF0C\u52FF\u5220\uFF01!!
  // this.appendMultipleDataTo(row);
};
const appendMultipleDataTo = (row) => {
  const randomKey1 = Math.round(Math.random() * Math.random() * 1000) + 10000;
  const randomKey2 = Math.round(Math.random() * Math.random() * 1000) + 10000;
  const appendList = [
    {
      id: randomKey1,
      key: \`\u7533\u8BF7\u4EBA \${randomKey1} \u53F7\`,
      platform: '\u7535\u5B50\u7B7E\u7F72',
      type: 'Number',
    },
    {
      id: randomKey2,
      key: \`\u7533\u8BF7\u4EBA \${randomKey2} \u53F7\`,
      platform: '\u7EB8\u8D28\u7B7E\u7F72',
      type: 'Number',
    },
  ];
  table.value.appendTo(row?.key, appendList);
  MessagePlugin.success(\`\u5DF2\u63D2\u5165\u5B50\u8282\u70B9\u7533\u8BF7\u4EBA \${randomKey1} \u548C \${randomKey2} \u53F7\uFF0C\u8BF7\u5C55\u5F00\u67E5\u770B\`);
};
// \u5F53\u524D\u8282\u70B9\u4E4B\u524D\uFF0C\u65B0\u589E\u5144\u5F1F\u8282\u524D
const insertBefore = (row) => {
  const randomKey = Math.round(Math.random() * Math.random() * 1000) + 10000;
  table.value.insertBefore(row.key, {
    id: randomKey,
    key: \`\u7533\u8BF7\u4EBA \${randomKey} \u53F7\`,
    platform: '\u7EB8\u8D28\u7B7E\u7F72',
    type: 'Number',
  });
  MessagePlugin.success(\`\u5DF2\u63D2\u5165\u5B50\u8282\u70B9\u7533\u8BF7\u4EBA \${randomKey} \u53F7\uFF0C\u8BF7\u5C55\u5F00\u67E5\u770B\`);
};
// \u5F53\u524D\u8282\u70B9\u4E4B\u540E\uFF0C\u65B0\u589E\u5144\u5F1F\u8282\u524D
const insertAfter = (row) => {
  const randomKey = Math.round(Math.random() * Math.random() * 1000) + 10000;
  table.value.insertAfter(row.key, {
    id: randomKey,
    key: \`\u7533\u8BF7\u4EBA \${randomKey} \u53F7\`,
    platform: '\u7EB8\u8D28\u7B7E\u7F72',
    type: 'Number',
  });
  MessagePlugin.success(\`\u5DF2\u63D2\u5165\u5B50\u8282\u70B9\u7533\u8BF7\u4EBA \${randomKey} \u53F7\uFF0C\u8BF7\u5C55\u5F00\u67E5\u770B\`);
};
const onPageChange = (pageInfo) => {
  pagination.current = pageInfo.current;
  pagination.pageSize = pageInfo.pageSize;
  data.value = getData(pageInfo.current);
};
const onRowToggle = () => {
  const rowIds = ['\u7533\u8BF7\u4EBA 1_1 \u53F7', '\u7533\u8BF7\u4EBA 2_1 \u53F7', '\u7533\u8BF7\u4EBA 3_1 \u53F7', '\u7533\u8BF7\u4EBA 4_1 \u53F7'];
  rowIds.forEach((id) => {
    // getData \u53C2\u6570\u4E3A\u884C\u552F\u4E00\u6807\u8BC6\uFF0Clodash.get(row, rowKey)
    const rowData = table.value.getData(id);
    table.value.toggleExpandData(rowData);
    // \u6216\u8005
    // this.$refs.table.toggleExpandData({ rowIndex: rowData.rowIndex, row: rowData.row });
  });
};
// eslint-disable-next-line
const treeExpandAndFoldIconRender = (h, { type, row }) => {
  if (lazyLoadingData.value && lazyLoadingData.value.key === row?.key) {
    return <Loading size="14px" />;
  }
  return type === 'expand' ? <ChevronRightIcon /> : <ChevronDownIcon />;
};
const onTreeExpandChange = (context) => {
  console.log(context.rowState.expanded ? '\u5C55\u5F00' : '\u6536\u8D77', context);
  /**
   * \u5982\u679C\u662F\u61D2\u52A0\u8F7D\uFF0C\u8BF7\u786E\u8BA4\u81EA\u5DF1\u5B8C\u6210\u4E86\u4EE5\u4E0B\u51E0\u4E2A\u6B65\u9AA4
   * 1. \u63D0\u524D\u8BBE\u7F6E children \u503C\u4E3A true\uFF1B
   * 2. \u5728 onTreeExpandChange \u4E8B\u4EF6\u4E2D\u5904\u7406\u5F02\u6B65\u6570\u636E\uFF1B
   * 3. \u81EA\u5B9A\u4E49\u5C55\u5F00\u56FE\u6807\u6E32\u67D3 lazyLoadingTreeIconRender
   */
  if (context.row.list === true) {
    lazyLoadingData.value = context.row;
    const timer = setTimeout(() => {
      appendMultipleDataTo(context.row);
      lazyLoadingData.value = null;
      clearTimeout(timer);
    }, 200);
  }
};
const onExpandedTreeNodesChange = (expandedTreeNodes, context) => {
  console.log(expandedTreeNodes, context);
  if (!context.rowState) return;
  onTreeExpandChange(context);
};
const getTreeNode = () => {
  // \u67E5\u770B\u6811\u5F62\u7ED3\u6784\u5E73\u94FA\u6570\u636E
  // this.$refs.table.dataSource
  const treeData = table.value.getTreeNode();
  console.log(treeData);
  MessagePlugin.success('\u6811\u5F62\u7ED3\u6784\u83B7\u53D6\u6210\u529F\uFF0C\u8BF7\u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B');
};
const onExpandAllToggle = () => {
  expandAll.value = !expandAll.value;
  expandAll.value ? table.value.expandAll() : table.value.foldAll();
};
const appendToRoot = () => {
  const key = Math.round(Math.random() * 10010);
  table.value.appendTo('', {
    id: key,
    key: \`\u7533\u8BF7\u4EBA \${key}_\${1} \u53F7\`,
    platform: key % 2 === 0 ? '\u5171\u6709' : '\u79C1\u6709',
    type: ['String', 'Number', 'Array', 'Object'][key % 4],
    default: ['-', '0', '[]', '{}'][key % 4],
    detail: {
      position: \`\u8BFB\u53D6 \${key} \u4E2A\u6570\u636E\u7684\u5D4C\u5957\u4FE1\u606F\u503C\`,
    },
    needed: key % 4 === 0 ? '\u662F' : '\u5426',
    description: '\u6570\u636E\u6E90',
  });

  // \u540C\u65F6\u6DFB\u52A0\u591A\u4E2A\u5143\u7D20\uFF0C\u793A\u4F8B\u4EE3\u7801\u6709\u6548\u52FF\u5220
  // this.appendMultipleDataTo();
};
const onAbnormalDragSort = (params) => {
  console.log(params);
  // this.$message.warning(params.reason);
  if (params.code === 1001) {
    MessagePlugin.warning('\u4E0D\u540C\u5C42\u7EA7\u7684\u5143\u7D20\uFF0C\u4E0D\u5141\u8BB8\u8C03\u6574\u987A\u5E8F');
  }
};
// \u62D6\u62FD\u6392\u5E8F\u6210\u529F\u540E\u89E6\u53D1
const onDragSort = (params) => {
  console.log('onDragSort:', params);
};
// \u5E94\u7528\u4E8E\u9700\u8981\u963B\u6B62\u62D6\u62FD\u6392\u5E8F\u7684\u573A\u666F\u3002\u5982\uFF1A\u5F53\u5B50\u8282\u70B9\u5B58\u5728\u65F6\uFF0C\u5219\u4E0D\u5141\u8BB8\u8C03\u6574\u987A\u5E8F
// \u8FD4\u56DE\u503C\u4E3A true\uFF0C\u5141\u8BB8\u62D6\u62FD\u6392\u5E8F\uFF1B\u8FD4\u56DE\u503C \u4E3A false\uFF0C\u5219\u963B\u6B62\u62D6\u62FD\u6392\u5E8F
const beforeDragSort = (params) => {
  console.log('beforeDragSort:', params);
  return true;
};
<\/script>

<style>
.tdesign-table-demo__table-operations .t-link {
  padding: 0 8px;
}
</style>
`,Bn=`<template>
  <t-space direction="vertical">
    <t-space>
      <t-radio-group v-model="checkStrictly" variant="default-filled">
        <t-radio-button value="true">\u7236\u5B50\u884C\u9009\u4E2D\u72EC\u7ACB</t-radio-button>
        <t-radio-button value="false">
          <t-popup
            content="\u300C\u7236\u5B50\u884C\u9009\u4E2D\u5173\u8054\u300D\u7531\u4E8E\u8868\u683C\u6570\u636E\u7684\u7279\u6B8A\u6027\uFF0C\u7236\u8282\u70B9\u9009\u4E2D\u6216\u8005\u53D6\u6D88\u9009\u4E2D\uFF0C\u4F1A\u5F71\u54CD\u5B50\u8282\u70B9\uFF1B\u4F46\u5B50\u8282\u70B9\u9009\u4E2D\u6216\u53D6\u6D88\u4E0D\u5F71\u54CD\u7236\u5143\u7D20"
          >
            \u7236\u5B50\u884C\u9009\u4E2D\u5173\u8054
          </t-popup>
        </t-radio-button>
      </t-radio-group>

      <t-button theme="default" @click="getTreeExpandedRow">\u83B7\u53D6\u6811\u5F62\u7ED3\u6784\u5C55\u5F00\u7684\u8282\u70B9</t-button>
      <t-button theme="default" @click="scrollToElement">\u6EDA\u52A8\u5230\u6307\u5B9A\u5143\u7D20</t-button>
    </t-space>
    <!-- \u5B50\u8282\u70B9\u5B57\u6BB5\u4E0D\u662F children\uFF0C\u800C\u662F childrenList -->
    <!-- expandedRow \u548C expanded-row-keys \u63A7\u5236\u662F\u5426\u663E\u793A\u5C55\u5F00\u6536\u8D77\u884C\uFF0C\u4EE5\u53CA\u54EA\u4E9B\u884C\u5C55\u5F00 -->
    <!-- !!! EnhancedTable \u624D\u652F\u6301\uFF0C\u666E\u901A Table \u4E0D\u652F\u6301 !!! -->
    <t-enhanced-table
      ref="enhancedTableRef"
      row-key="key"
      :expandedRow="expandedRowRender"
      :expanded-row-keys="expandedRowKeys"
      @expand-change="onExpandChange"
      :columns="columns"
      :data="data"
      :tree="{
        childrenKey: 'childrenList',
        checkStrictly: checkStrictly === 'true' ? true : false,
        // \u7B2C 3 \u5217\u663E\u793A\u6811\u5F62\u7ED3\u6784\u5C55\u5F00\u8282\u70B9
        treeNodeColumnIndex: 2,
        expandTreeNodeOnClick: true,
      }"
      :height="300"
      :scroll="{ type: 'virtual', rowHeight: 49, bufferSize: 10 }"
      :selected-row-keys="selectedRowKeys"
      lazyLoad
      @select-change="rehandleSelectChange"
      @row-click="onRowClick"
    ></t-enhanced-table>
  </t-space>
</template>

<script lang="jsx">
import { EnhancedTable, MessagePlugin } from 'tdesign-vue';
import { cloneDeep } from 'lodash-es';
import { ErrorCircleFilledIcon, CheckCircleFilledIcon, CloseCircleFilledIcon } from 'tdesign-icons-vue';

const initialData = [];
for (let i = 0; i < 500; i++) {
  const obj = {
    key: \`first_level_\${i}\`,
    applicant: ['\u8D3E\u660E', '\u5F20\u4E09', '\u738B\u82B3'][i % 3],
    status: i % 3,
    channel: ['\u7535\u5B50\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72'][i % 3],
    email: ['w.cezkdudy@lhll.au', 'r.nmgw@peurezgn.sl', 'p.cumx@rampblpa.ru'][i % 3],
    matters: ['\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528', 'algolia \u670D\u52A1\u62A5\u9500', '\u76F8\u5173\u5468\u8FB9\u5236\u4F5C\u8D39', '\u6FC0\u52B1\u5956\u54C1\u5FEB\u9012\u8D39'][i % 4],
    time: [2, 3, 1, 4][i % 4],
    createTime: ['2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01'][i % 4],
  };
  obj.childrenList = new Array(5).fill(null).map((t, j) => {
    const secondIndex = 100 * j + (i + 1) * 10;
    const secondObj = {
      ...obj,
      status: secondIndex % 3,
      key: \`second_level_\${secondIndex}\`,
      applicant: ['\u8D3E\u660E', '\u5F20\u4E09', '\u738B\u82B3'][secondIndex % 3],
    };
    secondObj.childrenList = new Array(5).fill(null).map((m, n) => {
      const thirdIndex = secondIndex * 1000 + 100 * m + (n + 1) * 10;
      return {
        ...obj,
        status: thirdIndex % 3,
        key: \`third_level_\${thirdIndex}\`,
        applicant: ['\u8D3E\u660E', '\u5F20\u4E09', '\u738B\u82B3'][thirdIndex % 3],
      };
    });
    return secondObj;
  });
  initialData.push(obj);
}

export default {
  components: { TEnhancedTable: EnhancedTable },

  data() {
    return {
      checkStrictly: 'true',
      selectedRowKeys: [],
      expandedRowKeys: [],
      columns: [
        {
          colKey: 'row-select',
          type: 'multiple',
          // \u7981\u7528\u884C\u9009\u4E2D\u65B9\u5F0F\u4E00\uFF1A\u4F7F\u7528 disabled \u7981\u7528\u884C\uFF08\u793A\u4F8B\u4EE3\u7801\u6709\u6548\uFF0C\u52FF\u5220\uFF09\u3002disabled \u53C2\u6570\uFF1A{row: RowData; rowIndex: number })
          // \u8FD9\u79CD\u65B9\u5F0F\u7981\u7528\u884C\u9009\u4E2D\uFF0C\u5F53\u524D\u884C\u4F1A\u6DFB\u52A0\u884C\u7C7B\u540D t-table__row--disabled\uFF0C\u7981\u7528\u884C\u6587\u5B57\u53D8\u7070
          // disabled: ({ rowIndex }) => rowIndex === 1 || rowIndex === 3,

          // \u7981\u7528\u884C\u9009\u4E2D\u65B9\u5F0F\u4E8C\uFF1A\u4F7F\u7528 checkProps \u7981\u7528\u884C\uFF08\u793A\u4F8B\u4EE3\u7801\u6709\u6548\uFF0C\u52FF\u5220\uFF09
          // \u8FD9\u79CD\u65B9\u5F0F\u7981\u7528\u884C\u9009\u4E2D\uFF0C\u884C\u6587\u672C\u4E0D\u4F1A\u53D8\u7070
          checkProps: ({ row }) => ({ disabled: !row.childrenList && row.status !== 0 }),
          // \u81EA\u7531\u8C03\u6574\u5BBD\u5EA6\uFF0C\u5982\u679C\u53D1\u73B0\u5143\u7D20\u770B\u4E0D\u89C1\uFF0C\u8BF7\u52A0\u5927\u5BBD\u5EA6
          width: 50,
        },
        { colKey: 'serial-number', width: 80, title: '\u7F16\u53F7' },
        { colKey: 'applicant', title: '\u7533\u8BF7\u4EBA', width: 120 },
        {
          colKey: 'status',
          title: '\u72B6\u6001',
          width: 144,
          cell: (h, { row }) => {
            const statusNameListMap = {
              0: { label: '\u5BA1\u6279\u901A\u8FC7', theme: 'success', icon: <CheckCircleFilledIcon /> },
              1: { label: '\u5BA1\u6279\u5931\u8D25', theme: 'danger', icon: <CloseCircleFilledIcon /> },
              2: { label: '\u5BA1\u6279\u8FC7\u671F', theme: 'warning', icon: <ErrorCircleFilledIcon /> },
            };
            return (
              <t-tag shape="round" theme={statusNameListMap[row.status].theme} variant="light-outline">
                {statusNameListMap[row.status].icon}
                {statusNameListMap[row.status].label}
              </t-tag>
            );
          },
        },
        { colKey: 'matters', title: '\u7533\u8BF7\u4E8B\u9879', width: '150' },
        { colKey: 'email', title: '\u90AE\u7BB1\u5730\u5740' },
      ],
      data: initialData,
    };
  },

  watch: {
    // \u5207\u6362\u6A21\u5F0F\uFF0C\u91CD\u7F6E\u6570\u636E\uFF0C\u907F\u514D\u4E92\u76F8\u5F71\u54CD
    checkStrictly() {
      this.selectedRowKeys = [];
      this.data = cloneDeep(initialData);
    },
  },

  methods: {
    // rehandleClickOp(context) {
    //   console.log(context);
    // },

    rehandleSelectChange(value, { selectedRowData }) {
      this.selectedRowKeys = value;
      console.log(value, selectedRowData);
    },

    expandedRowRender(h, { row }) {
      return <div>\u8FD9\u662F\u5C55\u5F00\u9879\u6570\u636E\uFF0C\u6211\u662F {row.key} \u53F7</div>;
    },

    onExpandChange(val) {
      this.expandedRowKeys = val;
    },

    getTreeExpandedRow() {
      const treeExpandedRowKeys = this.$refs.enhancedTableRef.getTreeExpandedRow('unique');
      console.log('\u884C\u552F\u4E00\u6807\u8BC6\u503C\uFF1A', treeExpandedRowKeys);

      const treeExpandedRow = this.$refs.enhancedTableRef.getTreeExpandedRow('data');
      console.log('\u884C\u6570\u636E\uFF1A', treeExpandedRow);

      const treeExpandedRowState = this.$refs.enhancedTableRef.getTreeExpandedRow('all');
      console.log('\u5168\u90E8\u884C\u4FE1\u606F\uFF1A', treeExpandedRowState);

      MessagePlugin.success('\u83B7\u53D6\u6210\u529F\uFF0C\u8BF7\u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B');
    },

    // \u865A\u62DF\u6EDA\u52A8\u573A\u666F\uFF1A\u6EDA\u52A8\u5230\u6307\u5B9A\u884C
    scrollToElement() {
      const { enhancedTableRef } = this.$refs;

      // \u65B9\u5F0F\u4E00\uFF1A\u901A\u8FC7\u884C\u552F\u4E00\u6807\u8BC6\u8DF3\u8F6C\u5230\u6307\u5B9A\u884C
      enhancedTableRef.scrollToElement({
        // \u6EDA\u52A8\u5230\u6307\u5B9A\u5143\u7D20
        key: 'first_level_150',
        // \u5982\u679C\u5143\u7D20\u6CA1\u6709\u88AB\u5C55\u5F00\uFF0C\u5219\u8DF3\u8F6C\u5230\u7236\u5143\u7D20\u6240\u5728\u4F4D\u7F6E
        // key: 'second_level_1510',
        // \u6EDA\u52A8\u5143\u7D20\u8DDD\u79BB\u9876\u90E8\u7684\u8DDD\u79BB\uFF08\u5982\u8868\u5934\u9AD8\u5EA6\uFF09
        top: 47,
        // \u9AD8\u5EA6\u52A8\u6001\u53D8\u5316\u573A\u666F\u4E0B\uFF0C\u5373 isFixedRowHeight = false\u3002\u5EF6\u8FDF\u8BBE\u7F6E\u5143\u7D20\u4F4D\u7F6E\uFF0C\u4E00\u822C\u7528\u4E8E\u4F9D\u8D56\u4E0D\u540C\u9AD8\u5EA6\u5F02\u6B65\u6E32\u67D3\u7B49\u573A\u666F\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2\u3002\uFF08\u56FA\u5B9A\u9AD8\u5EA6\u4E0D\u9700\u8981\u8FD9\u4E2A\uFF09
        time: 60,
      });

      // \u65B9\u5F0F\u4E8C\uFF1A\u901A\u8FC7\u884C\u4E0B\u6807\u8DF3\u8F6C\u5230\u6307\u5B9A\u884C\uFF08\u793A\u4F8B\u4EE3\u7801\u6709\u6548\uFF1A\u52FF\u5220\uFF09
      // const treeNodeData = enhancedTableRef.getData('first_level_150');
      // enhancedTableRef.primaryTableRef.scrollToElement({
      //   // \u8DF3\u8F6C\u5143\u7D20\u4E0B\u6807\uFF08\u7B2C 151 \u4E2A\u5143\u7D20\u4F4D\u7F6E\uFF09
      //   index: treeNodeData.rowIndex - this.expandedRowKeys.length,
      //   // \u6EDA\u52A8\u5143\u7D20\u8DDD\u79BB\u9876\u90E8\u7684\u8DDD\u79BB\uFF08\u5982\u8868\u5934\u9AD8\u5EA6\uFF09
      //   top: 47,
      //   // \u9AD8\u5EA6\u52A8\u6001\u53D8\u5316\u573A\u666F\u4E0B\uFF0C\u5373 isFixedRowHeight = false\u3002\u5EF6\u8FDF\u8BBE\u7F6E\u5143\u7D20\u4F4D\u7F6E\uFF0C\u4E00\u822C\u7528\u4E8E\u4F9D\u8D56\u4E0D\u540C\u9AD8\u5EA6\u5F02\u6B65\u6E32\u67D3\u7B49\u573A\u666F\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2\u3002\uFF08\u56FA\u5B9A\u9AD8\u5EA6\u4E0D\u9700\u8981\u8FD9\u4E2A\uFF09
      //   time: 60,
      // });
    },

    onRowClick(data) {
      console.log(data);
    },
  },
};
<\/script>

<style lang="less">
.t-table-tree-select-demo {
  .link {
    cursor: pointer;
    margin-right: 15px;
  }
  .status {
    position: relative;
    color: #00a870;
    margin-left: 10px;
    &::before {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      content: '';
      background-color: #00a870;
      width: 6px;
      height: 6px;
      margin-left: -10px;
      border-radius: 50%;
    }
  }
  .status.unhealth {
    color: #e34d59;
    &::before {
      background-color: #e34d59;
    }
  }
}
</style>
`,Vn=`<template>
  <t-space direction="vertical">
    <t-space>
      <t-radio-group v-model="checkStrictly" variant="default-filled">
        <t-radio-button value="true">\u7236\u5B50\u884C\u9009\u4E2D\u72EC\u7ACB</t-radio-button>
        <t-radio-button value="false">
          <t-popup
            content="\u300C\u7236\u5B50\u884C\u9009\u4E2D\u5173\u8054\u300D\u7531\u4E8E\u8868\u683C\u6570\u636E\u7684\u7279\u6B8A\u6027\uFF0C\u7236\u8282\u70B9\u9009\u4E2D\u6216\u8005\u53D6\u6D88\u9009\u4E2D\uFF0C\u4F1A\u5F71\u54CD\u5B50\u8282\u70B9\uFF1B\u4F46\u5B50\u8282\u70B9\u9009\u4E2D\u6216\u53D6\u6D88\u4E0D\u5F71\u54CD\u7236\u5143\u7D20"
          >
            \u7236\u5B50\u884C\u9009\u4E2D\u5173\u8054
          </t-popup>
        </t-radio-button>
      </t-radio-group>

      <t-button theme="default" @click="getTreeExpandedRow">\u83B7\u53D6\u6811\u5F62\u7ED3\u6784\u5C55\u5F00\u7684\u8282\u70B9</t-button>
      <t-button theme="default" @click="scrollToElement">\u6EDA\u52A8\u5230\u6307\u5B9A\u5143\u7D20</t-button>
    </t-space>
    <!-- \u5B50\u8282\u70B9\u5B57\u6BB5\u4E0D\u662F children\uFF0C\u800C\u662F childrenList -->
    <!-- expandedRow \u548C expanded-row-keys \u63A7\u5236\u662F\u5426\u663E\u793A\u5C55\u5F00\u6536\u8D77\u884C\uFF0C\u4EE5\u53CA\u54EA\u4E9B\u884C\u5C55\u5F00 -->
    <!-- !!! EnhancedTable \u624D\u652F\u6301\uFF0C\u666E\u901A Table \u4E0D\u652F\u6301 !!! -->
    <t-enhanced-table
      ref="enhancedTableRef"
      row-key="key"
      :expandedRow="expandedRowRender"
      :expanded-row-keys="expandedRowKeys"
      @expand-change="onExpandChange"
      :columns="columns"
      :data="data"
      :tree="{
        childrenKey: 'childrenList',
        checkStrictly: checkStrictly === 'true' ? true : false,
        // \u7B2C 3 \u5217\u663E\u793A\u6811\u5F62\u7ED3\u6784\u5C55\u5F00\u8282\u70B9
        treeNodeColumnIndex: 2,
        expandTreeNodeOnClick: true,
      }"
      :height="300"
      :scroll="{ type: 'virtual', rowHeight: 49, bufferSize: 10 }"
      :selected-row-keys="selectedRowKeys"
      lazyLoad
      @select-change="rehandleSelectChange"
      @row-click="onRowClick"
    ></t-enhanced-table>
  </t-space>
</template>

<script setup lang="jsx">
import { ref, watch } from 'vue';
import { EnhancedTable as TEnhancedTable, MessagePlugin } from 'tdesign-vue';
import { cloneDeep } from 'lodash-es';
import { ErrorCircleFilledIcon, CheckCircleFilledIcon, CloseCircleFilledIcon } from 'tdesign-icons-vue';

const initialData = [];
for (let i = 0; i < 500; i++) {
  const obj = {
    key: \`first_level_\${i}\`,
    applicant: ['\u8D3E\u660E', '\u5F20\u4E09', '\u738B\u82B3'][i % 3],
    status: i % 3,
    channel: ['\u7535\u5B50\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72', '\u7EB8\u8D28\u7B7E\u7F72'][i % 3],
    email: ['w.cezkdudy@lhll.au', 'r.nmgw@peurezgn.sl', 'p.cumx@rampblpa.ru'][i % 3],
    matters: ['\u5BA3\u4F20\u7269\u6599\u5236\u4F5C\u8D39\u7528', 'algolia \u670D\u52A1\u62A5\u9500', '\u76F8\u5173\u5468\u8FB9\u5236\u4F5C\u8D39', '\u6FC0\u52B1\u5956\u54C1\u5FEB\u9012\u8D39'][i % 4],
    time: [2, 3, 1, 4][i % 4],
    createTime: ['2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01'][i % 4],
  };
  obj.childrenList = new Array(5).fill(null).map((t, j) => {
    const secondIndex = 100 * j + (i + 1) * 10;
    const secondObj = {
      ...obj,
      status: secondIndex % 3,
      key: \`second_level_\${secondIndex}\`,
      applicant: ['\u8D3E\u660E', '\u5F20\u4E09', '\u738B\u82B3'][secondIndex % 3],
    };
    secondObj.childrenList = new Array(5).fill(null).map((m, n) => {
      const thirdIndex = secondIndex * 1000 + 100 * m + (n + 1) * 10;
      return {
        ...obj,
        status: thirdIndex % 3,
        key: \`third_level_\${thirdIndex}\`,
        applicant: ['\u8D3E\u660E', '\u5F20\u4E09', '\u738B\u82B3'][thirdIndex % 3],
      };
    });
    return secondObj;
  });
  initialData.push(obj);
}
const enhancedTableRef = ref();
const checkStrictly = ref('true');
const selectedRowKeys = ref([]);
const expandedRowKeys = ref([]);
const columns = ref([
  {
    colKey: 'row-select',
    type: 'multiple',
    // \u7981\u7528\u884C\u9009\u4E2D\u65B9\u5F0F\u4E00\uFF1A\u4F7F\u7528 disabled \u7981\u7528\u884C\uFF08\u793A\u4F8B\u4EE3\u7801\u6709\u6548\uFF0C\u52FF\u5220\uFF09\u3002disabled \u53C2\u6570\uFF1A{row: RowData; rowIndex: number })
    // \u8FD9\u79CD\u65B9\u5F0F\u7981\u7528\u884C\u9009\u4E2D\uFF0C\u5F53\u524D\u884C\u4F1A\u6DFB\u52A0\u884C\u7C7B\u540D t-table__row--disabled\uFF0C\u7981\u7528\u884C\u6587\u5B57\u53D8\u7070
    // disabled: ({ rowIndex }) => rowIndex === 1 || rowIndex === 3,

    // \u7981\u7528\u884C\u9009\u4E2D\u65B9\u5F0F\u4E8C\uFF1A\u4F7F\u7528 checkProps \u7981\u7528\u884C\uFF08\u793A\u4F8B\u4EE3\u7801\u6709\u6548\uFF0C\u52FF\u5220\uFF09
    // \u8FD9\u79CD\u65B9\u5F0F\u7981\u7528\u884C\u9009\u4E2D\uFF0C\u884C\u6587\u672C\u4E0D\u4F1A\u53D8\u7070
    checkProps: ({ row }) => ({
      disabled: !row.childrenList && row.status !== 0,
    }),
    // \u81EA\u7531\u8C03\u6574\u5BBD\u5EA6\uFF0C\u5982\u679C\u53D1\u73B0\u5143\u7D20\u770B\u4E0D\u89C1\uFF0C\u8BF7\u52A0\u5927\u5BBD\u5EA6
    width: 50,
  },
  {
    colKey: 'serial-number',
    width: 80,
    title: '\u7F16\u53F7',
  },
  {
    colKey: 'applicant',
    title: '\u7533\u8BF7\u4EBA',
    width: 120,
  },
  {
    colKey: 'status',
    title: '\u72B6\u6001',
    width: 144,
    cell: (h, { row }) => {
      const statusNameListMap = {
        0: {
          label: '\u5BA1\u6279\u901A\u8FC7',
          theme: 'success',
          icon: <CheckCircleFilledIcon />,
        },
        1: {
          label: '\u5BA1\u6279\u5931\u8D25',
          theme: 'danger',
          icon: <CloseCircleFilledIcon />,
        },
        2: {
          label: '\u5BA1\u6279\u8FC7\u671F',
          theme: 'warning',
          icon: <ErrorCircleFilledIcon />,
        },
      };
      return (
        <t-tag shape="round" theme={statusNameListMap[row.status].theme} variant="light-outline">
          {statusNameListMap[row.status].icon}
          {statusNameListMap[row.status].label}
        </t-tag>
      );
    },
  },
  {
    colKey: 'matters',
    title: '\u7533\u8BF7\u4E8B\u9879',
    width: '150',
  },
  {
    colKey: 'email',
    title: '\u90AE\u7BB1\u5730\u5740',
  },
]);
const data = ref(initialData);
// const rehandleClickOp = (context) => {
//   console.log(context);
// };
const rehandleSelectChange = (value, { selectedRowData }) => {
  selectedRowKeys.value = value;
  console.log(value, selectedRowData);
};
const expandedRowRender = (h, { row }) => <div>\u8FD9\u662F\u5C55\u5F00\u9879\u6570\u636E\uFF0C\u6211\u662F {row.key} \u53F7</div>;
const onExpandChange = (val) => {
  expandedRowKeys.value = val;
};
const getTreeExpandedRow = () => {
  const treeExpandedRowKeys = enhancedTableRef.value.getTreeExpandedRow('unique');
  console.log('\u884C\u552F\u4E00\u6807\u8BC6\u503C\uFF1A', treeExpandedRowKeys);
  const treeExpandedRow = enhancedTableRef.value.getTreeExpandedRow('data');
  console.log('\u884C\u6570\u636E\uFF1A', treeExpandedRow);
  const treeExpandedRowState = enhancedTableRef.value.getTreeExpandedRow('all');
  console.log('\u5168\u90E8\u884C\u4FE1\u606F\uFF1A', treeExpandedRowState);
  MessagePlugin.success('\u83B7\u53D6\u6210\u529F\uFF0C\u8BF7\u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B');
};
// \u865A\u62DF\u6EDA\u52A8\u573A\u666F\uFF1A\u6EDA\u52A8\u5230\u6307\u5B9A\u884C
const scrollToElement = () => {
  // \u65B9\u5F0F\u4E00\uFF1A\u901A\u8FC7\u884C\u552F\u4E00\u6807\u8BC6\u8DF3\u8F6C\u5230\u6307\u5B9A\u884C
  enhancedTableRef.value.scrollToElement({
    // \u6EDA\u52A8\u5230\u6307\u5B9A\u5143\u7D20
    key: 'first_level_150',
    // \u5982\u679C\u5143\u7D20\u6CA1\u6709\u88AB\u5C55\u5F00\uFF0C\u5219\u8DF3\u8F6C\u5230\u7236\u5143\u7D20\u6240\u5728\u4F4D\u7F6E
    // key: 'second_level_1510',
    // \u6EDA\u52A8\u5143\u7D20\u8DDD\u79BB\u9876\u90E8\u7684\u8DDD\u79BB\uFF08\u5982\u8868\u5934\u9AD8\u5EA6\uFF09
    top: 47,
    // \u9AD8\u5EA6\u52A8\u6001\u53D8\u5316\u573A\u666F\u4E0B\uFF0C\u5373 isFixedRowHeight = false\u3002\u5EF6\u8FDF\u8BBE\u7F6E\u5143\u7D20\u4F4D\u7F6E\uFF0C\u4E00\u822C\u7528\u4E8E\u4F9D\u8D56\u4E0D\u540C\u9AD8\u5EA6\u5F02\u6B65\u6E32\u67D3\u7B49\u573A\u666F\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2\u3002\uFF08\u56FA\u5B9A\u9AD8\u5EA6\u4E0D\u9700\u8981\u8FD9\u4E2A\uFF09
    time: 60,
  });

  // \u65B9\u5F0F\u4E8C\uFF1A\u901A\u8FC7\u884C\u4E0B\u6807\u8DF3\u8F6C\u5230\u6307\u5B9A\u884C\uFF08\u793A\u4F8B\u4EE3\u7801\u6709\u6548\uFF1A\u52FF\u5220\uFF09
  // const treeNodeData = enhancedTableRef.getData('first_level_150');
  // enhancedTableRef.primaryTableRef.scrollToElement({
  //   // \u8DF3\u8F6C\u5143\u7D20\u4E0B\u6807\uFF08\u7B2C 151 \u4E2A\u5143\u7D20\u4F4D\u7F6E\uFF09
  //   index: treeNodeData.rowIndex - this.expandedRowKeys.length,
  //   // \u6EDA\u52A8\u5143\u7D20\u8DDD\u79BB\u9876\u90E8\u7684\u8DDD\u79BB\uFF08\u5982\u8868\u5934\u9AD8\u5EA6\uFF09
  //   top: 47,
  //   // \u9AD8\u5EA6\u52A8\u6001\u53D8\u5316\u573A\u666F\u4E0B\uFF0C\u5373 isFixedRowHeight = false\u3002\u5EF6\u8FDF\u8BBE\u7F6E\u5143\u7D20\u4F4D\u7F6E\uFF0C\u4E00\u822C\u7528\u4E8E\u4F9D\u8D56\u4E0D\u540C\u9AD8\u5EA6\u5F02\u6B65\u6E32\u67D3\u7B49\u573A\u666F\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2\u3002\uFF08\u56FA\u5B9A\u9AD8\u5EA6\u4E0D\u9700\u8981\u8FD9\u4E2A\uFF09
  //   time: 60,
  // });
};
const onRowClick = (data) => {
  console.log(data);
};
// \u5207\u6362\u6A21\u5F0F\uFF0C\u91CD\u7F6E\u6570\u636E\uFF0C\u907F\u514D\u4E92\u76F8\u5F71\u54CD
watch(checkStrictly, () => {
  selectedRowKeys.value = [];
  data.value = cloneDeep(initialData);
});
<\/script>

<style lang="less">
.t-table-tree-select-demo {
  .link {
    cursor: pointer;
    margin-right: 15px;
  }
  .status {
    position: relative;
    color: #00a870;
    margin-left: 10px;
    &::before {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      content: '';
      background-color: #00a870;
      width: 6px;
      height: 6px;
      margin-left: -10px;
      border-radius: 50%;
    }
  }
  .status.unhealth {
    color: #e34d59;
    &::before {
      background-color: #e34d59;
    }
  }
}
</style>
`,p=[{name:"bordered",type:"Boolean",defaultValue:!1,options:[]},{name:"disableDataPage",type:"Boolean",defaultValue:!1,options:[]},{name:"footerAffixedBottom",type:"Boolean",defaultValue:!1,options:[]},{name:"headerAffixedTop",type:"Boolean",defaultValue:!1,options:[]},{name:"horizontalScrollAffixedBottom",type:"Boolean",defaultValue:!1,options:[]},{name:"hover",type:"Boolean",defaultValue:!1,options:[]},{name:"loading",type:"Boolean",defaultValue:!1,options:[]},{name:"paginationAffixedBottom",type:"Boolean",defaultValue:!1,options:[]},{name:"resizable",type:"Boolean",defaultValue:!1,options:[]},{name:"size",type:"enum",defaultValue:"medium",options:[{label:"small",value:"small"},{label:"medium",value:"medium"},{label:"large",value:"large"}]},{name:"stripe",type:"Boolean",defaultValue:!1,options:[]},{name:"tableLayout",type:"enum",defaultValue:"fixed",options:[{label:"auto",value:"auto"},{label:"fixed",value:"fixed"}]},{name:"verticalAlign",type:"enum",defaultValue:"middle",options:[{label:"top",value:"top"},{label:"middle",value:"middle"},{label:"bottom",value:"bottom"}]}];const h={};h.setup=(n,a)=>{const l=i(Array(4).fill(0).map((t,e)=>({index:e,applicant:["\u8D3E\u660E","\u5F20\u4E09","\u738B\u82B3"][e%3],status:e%3,channel:["\u7535\u5B50\u7B7E\u7F72","\u7EB8\u8D28\u7B7E\u7F72","\u7EB8\u8D28\u7B7E\u7F72"][e%3],detail:{email:["w.cezkdudy@lhll.au","r.nmgw@peurezgn.sl","p.cumx@rampblpa.ru"][e%3]}}))),r=i([{colKey:"applicant",title:"\u7533\u8BF7\u4EBA",width:"120"},{colKey:"status",title:"\u5BA1\u6279\u72B6\u6001",width:"120",cell:(t,{row:e})=>{const c={0:{label:"\u5BA1\u6279\u901A\u8FC7",theme:"success",icon:t(b)},1:{label:"\u5BA1\u6279\u5931\u8D25",theme:"danger",icon:t(y)},2:{label:"\u5BA1\u6279\u8FC7\u671F",theme:"warning",icon:t(x)}};return t("t-tag",{attrs:{shape:"round",theme:c[e.status].theme,variant:"light-outline"}},[c[e.status].icon,c[e.status].label])}},{colKey:"channel",title:"\u7B7E\u7F72\u65B9\u5F0F"},{colKey:"detail.email",title:"\u7535\u5B50\u90AE\u4EF6"}]),o=i(p),s=[{label:"Table",value:"baseTable",config:p}],d={baseTable:`<t-table
        v-bind="configProps"
        row-key="index"
        :data="data"
        :columns="columns"
      />`},u=i(`<template>${d[s[0].value].trim()}</template>`);function w(t){o.value=s.find(e=>e.value===t).config,u.value=`<template>${d[t].trim()}</template>`}return{data:l,columns:r,configList:o,panelList:s,usageCode:u,onPanelChange:w}};var g=function(){var n=this,a=n.$createElement,l=n._self._c||a;return l("base-usage",{attrs:{code:n.usageCode,"config-list":n.configList,"panel-list":n.panelList},on:{PanelChange:n.onPanelChange},scopedSlots:n._u([{key:"baseTable",fn:function(r){var o=r.configProps;return[l("t-table",n._b({attrs:{"row-key":"index",data:n.data,columns:n.columns}},"t-table",o,!1))]}}])})},v=[];g._withStripped=!0;const m={};var f=C(h,g,v,!1,k,null,null,null);function k(n){for(let a in m)this[a]=m[a]}f.options.__file="../src/table/_usage/index.vue";var Hn=function(){return f.exports}();export{In as $,Z as A,Q as B,nn as C,K as D,en as E,tn as F,an as G,ln as H,on as I,rn as J,sn as K,cn as L,dn as M,un as N,pn as O,mn as P,hn as Q,gn as R,fn as S,wn as T,Hn as U,bn as V,yn as W,xn as X,Cn as Y,vn as Z,kn as _,D as a,Kn as a0,Dn as a1,Tn as a2,Ln as a3,Rn as a4,Fn as a5,Nn as a6,Sn as a7,zn as a8,Mn as a9,En as aa,_n as ab,An as ac,Pn as ad,On as ae,jn as af,$n as ag,Bn as ah,Vn as ai,T as b,L as c,R as d,F as e,N as f,S as g,z as h,M as i,E as j,_ as k,A as l,P as m,O as n,j as o,$ as p,B as q,V as r,H as s,U as t,q as u,W as v,Y as w,G as x,J as y,X as z};
