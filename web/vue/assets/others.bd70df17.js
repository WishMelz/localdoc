var n=`<template>
  <t-config-provider :global-config="globalConfig">
    <t-space direction="vertical">
      <p>\u4F7F\u7528<code>t-config-provider</code>\u5305\u88F9\u4E1A\u52A1\u529F\u80FD\u7684\u6700\u5916\u5C42\u7EC4\u4EF6\uFF0C\u70B9\u51FB\u4E0B\u65B9\u56FE\u6807\u67E5\u770B\u793A\u4F8B\u4EE3\u7801</p>
      <p>\u82F1\u6587\u8BED\u8A00\u5305\u5F15\u5165\u8DEF\u5F84\uFF1A<code>import enConfig from 'tdesign-vue/es/locale/en_US';</code></p>
      <p>\u4E2D\u6587\u8BED\u8A00\u5305\u5F15\u5165\u8DEF\u5F84\uFF1A<code>import zhConfig from 'tdesign-vue/es/locale/zh_CN';</code></p>
      <p>\u65E5\u6587\u8BED\u8A00\u5305\u5F15\u5165\u8DEF\u5F84\uFF1A<code>import jpConfig from 'tdesign-vue/es/locale/ja_JP';</code></p>
      <p>\u97E9\u6587\u8BED\u8A00\u5305\u5F15\u5165\u8DEF\u5F84\uFF1A<code>import koConfig from 'tdesign-vue/es/locale/ko_KR';</code></p>
    </t-space>
  </t-config-provider>
</template>

<script>
import { merge } from 'lodash-es';
import enConfig from 'tdesign-vue/es/locale/en_US';

export default {
  data() {
    return {
      // \u5168\u5C40\u7279\u6027\u914D\u7F6E\uFF0C\u5F15\u5165\u82F1\u6587\u8BED\u8A00\u914D\u7F6E\u5305 enConfig
      globalConfig: merge(enConfig, {
        // \u53EF\u4EE5\u5728\u6B64\u5904\u5B9A\u4E49\u66F4\u591A\u81EA\u5B9A\u4E49\u914D\u7F6E\uFF0C\u5177\u4F53\u53EF\u914D\u7F6E\u5185\u5BB9\u53C2\u770B API \u6587\u6863
        calendar: {},
        table: {},
        pagination: {},
      }),
    };
  },
};
<\/script>
`,e=`<template>
  <t-config-provider :global-config="globalConfig">
    <t-space direction="vertical">
      <p>\u4F7F\u7528<code>t-config-provider</code>\u5305\u88F9\u4E1A\u52A1\u529F\u80FD\u7684\u6700\u5916\u5C42\u7EC4\u4EF6\uFF0C\u70B9\u51FB\u4E0B\u65B9\u56FE\u6807\u67E5\u770B\u793A\u4F8B\u4EE3\u7801</p>
      <p>\u82F1\u6587\u8BED\u8A00\u5305\u5F15\u5165\u8DEF\u5F84\uFF1A<code>import enConfig from 'tdesign-vue/es/locale/en_US';</code></p>
      <p>\u4E2D\u6587\u8BED\u8A00\u5305\u5F15\u5165\u8DEF\u5F84\uFF1A<code>import zhConfig from 'tdesign-vue/es/locale/zh_CN';</code></p>
      <p>\u65E5\u6587\u8BED\u8A00\u5305\u5F15\u5165\u8DEF\u5F84\uFF1A<code>import jpConfig from 'tdesign-vue/es/locale/ja_JP';</code></p>
      <p>\u97E9\u6587\u8BED\u8A00\u5305\u5F15\u5165\u8DEF\u5F84\uFF1A<code>import koConfig from 'tdesign-vue/es/locale/ko_KR';</code></p>
    </t-space>
  </t-config-provider>
</template>

<script setup>
import { ref } from 'vue';
import { merge } from 'lodash-es';
import enConfig from 'tdesign-vue/es/locale/en_US';
// \u5168\u5C40\u7279\u6027\u914D\u7F6E\uFF0C\u5F15\u5165\u82F1\u6587\u8BED\u8A00\u914D\u7F6E\u5305 enConfig
const globalConfig = ref(
  merge(enConfig, {
    // \u53EF\u4EE5\u5728\u6B64\u5904\u5B9A\u4E49\u66F4\u591A\u81EA\u5B9A\u4E49\u914D\u7F6E\uFF0C\u5177\u4F53\u53EF\u914D\u7F6E\u5185\u5BB9\u53C2\u770B API \u6587\u6863
    calendar: {},
    table: {},
    pagination: {},
  }),
);
<\/script>
`,t=`<template>
  <t-config-provider :globalConfig="globalConfig" style="padding: 16px">
    <t-pagination v-model="current" :total="36" show-jumper :maxPageBtn="5" />
  </t-config-provider>
</template>

<script>
import { merge } from 'lodash-es';
import enConfig from 'tdesign-vue/es/locale/en_US';

export default {
  data() {
    return {
      current: 1,
      // \u5168\u5C40\u7279\u6027\u914D\u7F6E\uFF0C\u53EF\u4EE5\u5F15\u5165\u82F1\u6587\u9ED8\u8BA4\u914D\u7F6E enConfig\uFF0C\u8FD8\u53EF\u4EE5\u5728\u9ED8\u8BA4\u914D\u7F6E\u7684\u57FA\u7840\u4E0A\u8FDB\u884C\u81EA\u5B9A\u4E49\u914D\u7F6E
      globalConfig: merge(enConfig, {
        pagination: {
          itemsPerPage: '{size} / page',
          jumpTo: 'jump to',
          page: '',
          total: 'Total {total} items',
        },
      }),
    };
  },
};
<\/script>

<style scoped>
.tdesign-demo-item--locale-provider-base {
  margin: 24px -120px 0 0;
}
</style>
`,o=`<template>
  <t-config-provider :globalConfig="globalConfig" style="padding: 16px">
    <t-pagination v-model="current" :total="36" show-jumper :maxPageBtn="5" />
  </t-config-provider>
</template>

<script setup>
import { ref } from 'vue';
import { merge } from 'lodash-es';
import enConfig from 'tdesign-vue/es/locale/en_US';

const current = ref(1);
// \u5168\u5C40\u7279\u6027\u914D\u7F6E\uFF0C\u53EF\u4EE5\u5F15\u5165\u82F1\u6587\u9ED8\u8BA4\u914D\u7F6E enConfig\uFF0C\u8FD8\u53EF\u4EE5\u5728\u9ED8\u8BA4\u914D\u7F6E\u7684\u57FA\u7840\u4E0A\u8FDB\u884C\u81EA\u5B9A\u4E49\u914D\u7F6E
const globalConfig = ref(
  merge(enConfig, {
    pagination: {
      itemsPerPage: '{size} / page',
      jumpTo: 'jump to',
      page: '',
      total: 'Total {total} items',
    },
  }),
);
<\/script>

<style scoped>
.tdesign-demo-item--locale-provider-base {
  margin: 24px -120px 0 0;
}
</style>
`,r=`<template>
  <t-config-provider :globalConfig="globalConfig">
    <t-input type="password" default-value="520 TDesign" />
  </t-config-provider>
</template>

<script>
import { LockOnIcon, LockOffIcon } from 'tdesign-icons-vue';

export default {
  data() {
    return {
      globalConfig: {
        icon: {
          BrowseOffIcon: LockOnIcon,
          BrowseIcon: LockOffIcon,
        },
      },
    };
  },
};
<\/script>
`,a=`<template>
  <t-config-provider :globalConfig="globalConfig">
    <t-input type="password" default-value="520 TDesign" />
  </t-config-provider>
</template>

<script setup>
import { reactive } from 'vue';
import { LockOnIcon, LockOffIcon } from 'tdesign-icons-vue';

const globalConfig = reactive({
  icon: {
    BrowseOffIcon: LockOnIcon,
    BrowseIcon: LockOffIcon,
  },
});
<\/script>
`,i=`<template>
  <t-config-provider :globalConfig="globalConfig" class="tdesign-demo-item__locale-provider-date-picker">
    <t-date-picker mode="date" :firstDayOfWeek="7" />
    <br /><br />
    <t-date-picker mode="date" range />
    <br /><br />
    <t-date-picker mode="month" />
    <br /><br />
    <t-date-picker mode="month" range />
    <br /><br />
    <t-date-picker mode="year" />
    <br /><br />
    <t-date-picker mode="year" range />
    <br /><br />
  </t-config-provider>
</template>

<script>
import { merge } from 'lodash-es';
import enConfig from 'tdesign-vue/es/locale/en_US';
// import dayjs from 'dayjs';

// \u5168\u5C40\u7279\u6027\u914D\u7F6E\uFF0C\u53EF\u4EE5\u5F15\u5165\u82F1\u6587\u9ED8\u8BA4\u914D\u7F6E enConfig\uFF0C\u8FD8\u53EF\u4EE5\u5728\u9ED8\u8BA4\u914D\u7F6E\u7684\u57FA\u7840\u4E0A\u8FDB\u884C\u81EA\u5B9A\u4E49\u914D\u7F6E
const DATE_PICK_CONFIGS = merge(enConfig, {
  placeholder: {
    date: 'select date',
    month: 'select month',
    year: 'select year',
  },
  weekdays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  rangeSeparator: ' ~ ',
  format: 'DD/MM/YYYY',
  yearAriaLabel: '',
  now: 'Now',
  selectTime: 'Select Time',
  selectDate: 'Select Date',
  // \u6682\u4E0D\u652F\u6301\uFF0C\u8BA8\u8BBA\u786E\u8BA4\u4E2D
  // presets: {
  //   Today: 'Today',
  //   'Last 2 days': [dayjs().subtract(2, 'day'), dayjs()],
  //   'Last 7 days': [dayjs().subtract(7, 'day'), dayjs()],
  //   'Last 14 days': [dayjs().subtract(14, 'day'), dayjs()],
  //   'Last 30 days': [dayjs().subtract(30, 'day'), dayjs()],
  //   'Next 30 Days': [dayjs().subtract(30, 'day'), dayjs()],
  //   'Month to date': [dayjs().subtract(1, 'month'), dayjs()],
  // },
});

export default {
  data() {
    return {
      globalConfig: {
        datePicker: DATE_PICK_CONFIGS,
      },
    };
  },
};
<\/script>

<style scoped>
.tdesign-demo-item__locale-provider-date-picker {
  padding: 16px;
}
.tdesign-demo-item__locale-provider-date-picker .t-date-picker {
  width: 400px;
}
</style>
`,l=`<template>
  <t-config-provider :globalConfig="globalConfig" class="tdesign-demo-item__locale-provider-date-picker">
    <t-date-picker mode="date" :firstDayOfWeek="7" />
    <br /><br />
    <t-date-picker mode="date" range />
    <br /><br />
    <t-date-picker mode="month" />
    <br /><br />
    <t-date-picker mode="month" range />
    <br /><br />
    <t-date-picker mode="year" />
    <br /><br />
    <t-date-picker mode="year" range />
    <br /><br />
  </t-config-provider>
</template>

<script setup>
import { reactive } from 'vue';
import { merge } from 'lodash-es';
import enConfig from 'tdesign-vue/es/locale/en_US';
// import dayjs from 'dayjs';

// \u5168\u5C40\u7279\u6027\u914D\u7F6E\uFF0C\u53EF\u4EE5\u5F15\u5165\u82F1\u6587\u9ED8\u8BA4\u914D\u7F6E enConfig\uFF0C\u8FD8\u53EF\u4EE5\u5728\u9ED8\u8BA4\u914D\u7F6E\u7684\u57FA\u7840\u4E0A\u8FDB\u884C\u81EA\u5B9A\u4E49\u914D\u7F6E
const DATE_PICK_CONFIGS = merge(enConfig, {
  placeholder: {
    date: 'select date',
    month: 'select month',
    year: 'select year',
  },
  weekdays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  rangeSeparator: ' ~ ',
  format: 'DD/MM/YYYY',
  yearAriaLabel: '',
  now: 'Now',
  selectTime: 'Select Time',
  selectDate: 'Select Date',
  // \u6682\u4E0D\u652F\u6301\uFF0C\u8BA8\u8BBA\u786E\u8BA4\u4E2D
  // presets: {
  //   Today: 'Today',
  //   'Last 2 days': [dayjs().subtract(2, 'day'), dayjs()],
  //   'Last 7 days': [dayjs().subtract(7, 'day'), dayjs()],
  //   'Last 14 days': [dayjs().subtract(14, 'day'), dayjs()],
  //   'Last 30 days': [dayjs().subtract(30, 'day'), dayjs()],
  //   'Next 30 Days': [dayjs().subtract(30, 'day'), dayjs()],
  //   'Month to date': [dayjs().subtract(1, 'month'), dayjs()],
  // },
});
const globalConfig = reactive({
  datePicker: DATE_PICK_CONFIGS,
});
<\/script>

<style scoped>
.tdesign-demo-item__locale-provider-date-picker {
  padding: 16px;
}
.tdesign-demo-item__locale-provider-date-picker .t-date-picker {
  width: 400px;
}
</style>
`,s=`<template>
  <t-config-provider :globalConfig="globalConfig" style="padding: 16px">
    <t-calendar></t-calendar>
  </t-config-provider>
</template>

<script>
import { merge } from 'lodash-es';
import enConfig from 'tdesign-vue/es/locale/en_US';

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

// \u5168\u5C40\u7279\u6027\u914D\u7F6E\uFF0C\u53EF\u4EE5\u5F15\u5165\u82F1\u6587\u9ED8\u8BA4\u914D\u7F6E enConfig\uFF0C\u8FD8\u53EF\u4EE5\u5728\u9ED8\u8BA4\u914D\u7F6E\u7684\u57FA\u7840\u4E0A\u8FDB\u884C\u81EA\u5B9A\u4E49\u914D\u7F6E
const GLOBAL_CONFIG = merge(enConfig, {
  calendar: {
    yearSelection: '{year}',
    // 1 \u8868\u793A\u5468\u4E00\uFF1B7 \u8868\u793A\u5468\u65E5
    firstDayOfWeek: 7,
    monthSelection: ({ month }) => MONTHS[month - 1],
    yearRadio: 'Year',
    monthRadio: 'Month',
    hideWeekend: 'Hide Weekend',
    showWeekend: 'Show Weekend',
    today: 'Today',
    thisMonth: 'This Month',
    week: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].join(),
    cellMonth: MONTHS.join(),
    fillWithZero: false,
    controllerConfig: {
      year: {
        visible: true,
        selectProps: {
          size: 'small',
        },
      },
      month: {
        visible: true,
        selectProps: {
          size: 'small',
        },
      },
      mode: {
        visible: true,
        radioGroupProps: {
          size: 'small',
        },
      },
      weekend: {
        visible: true,
        showWeekendButtonProps: {
          size: 'small',
        },
        hideWeekendButtonProps: {
          size: 'small',
        },
      },
      current: {
        visible: true,
        currentDayButtonProps: {
          theme: 'warning',
          size: 'small',
        },
        currentMonthButtonProps: {
          theme: 'success',
          size: 'small',
        },
      },
    },
  },
});

export default {
  data() {
    return {
      globalConfig: GLOBAL_CONFIG,
    };
  },
};
<\/script>

<style scoped>
.tdesign-demo-item--locale-provider-base {
  margin: 24px -120px 0 0;
}
</style>
`,d=`<template>
  <t-config-provider :globalConfig="globalConfig" style="padding: 16px">
    <t-calendar></t-calendar>
  </t-config-provider>
</template>

<script setup>
import { ref } from 'vue';
import { merge } from 'lodash-es';
import enConfig from 'tdesign-vue/es/locale/en_US';

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

// \u5168\u5C40\u7279\u6027\u914D\u7F6E\uFF0C\u53EF\u4EE5\u5F15\u5165\u82F1\u6587\u9ED8\u8BA4\u914D\u7F6E enConfig\uFF0C\u8FD8\u53EF\u4EE5\u5728\u9ED8\u8BA4\u914D\u7F6E\u7684\u57FA\u7840\u4E0A\u8FDB\u884C\u81EA\u5B9A\u4E49\u914D\u7F6E
const GLOBAL_CONFIG = merge(enConfig, {
  calendar: {
    yearSelection: '{year}',
    // 1 \u8868\u793A\u5468\u4E00\uFF1B7 \u8868\u793A\u5468\u65E5
    firstDayOfWeek: 7,
    monthSelection: ({ month }) => MONTHS[month - 1],
    yearRadio: 'Year',
    monthRadio: 'Month',
    hideWeekend: 'Hide Weekend',
    showWeekend: 'Show Weekend',
    today: 'Today',
    thisMonth: 'This Month',
    week: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].join(),
    cellMonth: MONTHS.join(),
    fillWithZero: false,
    controllerConfig: {
      year: {
        visible: true,
        selectProps: {
          size: 'small',
        },
      },
      month: {
        visible: true,
        selectProps: {
          size: 'small',
        },
      },
      mode: {
        visible: true,
        radioGroupProps: {
          size: 'small',
        },
      },
      weekend: {
        visible: true,
        showWeekendButtonProps: {
          size: 'small',
        },
        hideWeekendButtonProps: {
          size: 'small',
        },
      },
      current: {
        visible: true,
        currentDayButtonProps: {
          theme: 'warning',
          size: 'small',
        },
        currentMonthButtonProps: {
          theme: 'success',
          size: 'small',
        },
      },
    },
  },
});
const globalConfig = ref(GLOBAL_CONFIG);
<\/script>

<style scoped>
.tdesign-demo-item--locale-provider-base {
  margin: 24px -120px 0 0;
}
</style>
`,c=`<template>
  <t-config-provider :globalConfig="globalConfig" style="padding: 16px">
    <div style="width: 480px">
      <t-dialog header="Title" body="Would you like to be my friends\uFF1F" mode="normal" theme="default" visible />
      <br />
      <t-dialog header="confirm" body="Would you like to be my friends\uFF1F" mode="normal" theme="info" visible />
      <br />
      <t-dialog header="confirm" body="Would you like to be my friends\uFF1F" mode="normal" theme="warning" visible />
      <br />
      <t-dialog header="confirm" body="Would you like to be my friends\uFF1F" mode="normal" theme="danger" visible />
      <br />
      <t-dialog header="confirm" body="Would you like to be my friends\uFF1F" mode="normal" theme="success" visible />
    </div>
  </t-config-provider>
</template>

<script>
export default {
  data() {
    return {
      globalConfig: {
        dialog: {
          confirm: 'confirm',
          // cancel: 'cancel',
          cancel: {
            theme: 'default',
            variant: 'outline',
            content: 'cancel',
          },
          confirmBtnTheme: {
            default: 'primary',
            info: 'primary',
            warning: 'warning',
            danger: 'danger',
            success: 'success',
          },
        },
      },
    };
  },
};
<\/script>
<style scoped>
.tdesign-demo-item--locale-provider-base {
  margin: 24px -120px 0 0;
}
</style>
`,p=`<template>
  <t-config-provider :globalConfig="globalConfig" style="padding: 16px">
    <div style="width: 480px">
      <t-dialog header="Title" body="Would you like to be my friends\uFF1F" mode="normal" theme="default" visible />
      <br />
      <t-dialog header="confirm" body="Would you like to be my friends\uFF1F" mode="normal" theme="info" visible />
      <br />
      <t-dialog header="confirm" body="Would you like to be my friends\uFF1F" mode="normal" theme="warning" visible />
      <br />
      <t-dialog header="confirm" body="Would you like to be my friends\uFF1F" mode="normal" theme="danger" visible />
      <br />
      <t-dialog header="confirm" body="Would you like to be my friends\uFF1F" mode="normal" theme="success" visible />
    </div>
  </t-config-provider>
</template>

<script setup>
import { reactive } from 'vue';

const globalConfig = reactive({
  dialog: {
    confirm: 'confirm',
    // cancel: 'cancel',
    cancel: {
      theme: 'default',
      variant: 'outline',
      content: 'cancel',
    },
    confirmBtnTheme: {
      default: 'primary',
      info: 'primary',
      warning: 'warning',
      danger: 'danger',
      success: 'success',
    },
  },
});
<\/script>
<style scoped>
.tdesign-demo-item--locale-provider-base {
  margin: 24px -120px 0 0;
}
</style>
`,m=`<template>
  <t-config-provider :globalConfig="globalConfig" style="padding: 16px">
    <div class="tdesign-demo-item__config-provider-base">
      <t-popconfirm theme="default" content="Do you want to delete">
        <t-button>Default</t-button>
      </t-popconfirm>
      <t-popconfirm theme="warning" content="Do you want to delete">
        <t-button theme="warning">Warning</t-button>
      </t-popconfirm>
      <t-popconfirm theme="danger" content="Do you want to delete">
        <t-button theme="danger">Danger</t-button>
      </t-popconfirm>

      <t-button theme="primary" @click="drawerVisible = true">Open Drawer</t-button>

      <t-drawer
        :visible.sync="drawerVisible"
        header="Drawer"
        :onConfirm="() => (drawerVisible = false)"
        :closeBtn="true"
      >
        <p>This is a controlled drawer</p>
      </t-drawer>
    </div>
  </t-config-provider>
</template>

<script>
export default {
  data() {
    return {
      drawerVisible: false,
      globalConfig: {
        popconfirm: {
          confirmBtnTheme: {
            default: 'primary',
            warning: 'warning',
            danger: 'danger',
          },
          confirm: 'OK',
          cancel: {
            theme: 'default',
            variant: 'outline',
            content: 'Cancel',
          },
        },
        drawer: {
          confirm: 'confirm',
          cancel: 'cancel',
        },
      },
    };
  },
};
<\/script>

<style scoped>
.tdesign-demo-item__config-provider-base {
  width: 100%;
  display: flex;
  justify-content: flex-start;
}

.tdesign-demo-item__config-provider-base .t-button {
  margin-right: 36px;
}
</style>
`,g=`<template>
  <t-config-provider :globalConfig="globalConfig" style="padding: 16px">
    <div class="tdesign-demo-item__config-provider-base">
      <t-popconfirm theme="default" content="Do you want to delete">
        <t-button>Default</t-button>
      </t-popconfirm>
      <t-popconfirm theme="warning" content="Do you want to delete">
        <t-button theme="warning">Warning</t-button>
      </t-popconfirm>
      <t-popconfirm theme="danger" content="Do you want to delete">
        <t-button theme="danger">Danger</t-button>
      </t-popconfirm>

      <t-button theme="primary" @click="drawerVisible = true">Open Drawer</t-button>

      <t-drawer
        :visible.sync="drawerVisible"
        header="Drawer"
        :onConfirm="() => (drawerVisible = false)"
        :closeBtn="true"
      >
        <p>This is a controlled drawer</p>
      </t-drawer>
    </div>
  </t-config-provider>
</template>

<script setup>
import { ref, reactive } from 'vue';

const drawerVisible = ref(false);
const globalConfig = reactive({
  popconfirm: {
    confirmBtnTheme: {
      default: 'primary',
      warning: 'warning',
      danger: 'danger',
    },
    confirm: 'OK',
    cancel: {
      theme: 'default',
      variant: 'outline',
      content: 'Cancel',
    },
  },
  drawer: {
    confirm: 'confirm',
    cancel: 'cancel',
  },
});
<\/script>

<style scoped>
.tdesign-demo-item__config-provider-base {
  width: 100%;
  display: flex;
  justify-content: flex-start;
}

.tdesign-demo-item__config-provider-base .t-button {
  margin-right: 36px;
}
</style>
`,f=`<template>
  <t-config-provider :globalConfig="globalConfig" style="padding: 16px">
    <!-- \u5168\u5C40\u914D\u7F6E\uFF1A\u7A7A\u6570\u636E\u5448\u73B0\uFF0C\u6F14\u793A -->
    <t-table :data="[]" :columns="columns" bordered rowKey="property"></t-table>
    <br /><br />

    <!-- \u5168\u5C40\u914D\u7F6E\uFF1A\u81EA\u5B9A\u4E49\u5C55\u5F00\u56FE\u6807\u548C\u6392\u5E8F\u56FE\u6807\uFF0C\u6F14\u793A -->
    <t-table :data="data" :columns="columns" :expandedRow="expandedRow" expandOnRowClick rowKey="property"></t-table>
    <br /><br />
  </t-config-provider>
</template>

<script lang="jsx">
import { ChevronRightIcon, CaretDownSmallIcon /** , ChevronDownIcon */ } from 'tdesign-icons-vue';
import { merge } from 'lodash-es';
import enConfig from 'tdesign-vue/es/locale/en_US';

const initialColumns = [
  {
    colKey: 'type',
    title: 'Type',
    sorter: true,
  },
  {
    colKey: 'platform',
    title: 'Platform',
    filter: {
      type: 'single',
    },
  },
  {
    colKey: 'property',
    title: 'Property',
    sorter: true,
    filter: {
      type: 'single',
    },
  },
];

const initialData = [
  { type: 'Array', platform: 'Vue(PC)', property: 'A' },
  { type: 'String', platform: 'React(PC)', property: 'B' },
  { type: 'Object', platform: 'Miniprogram', property: 'C' },
];

export default {
  data() {
    return {
      // \u5168\u5C40\u7279\u6027\u914D\u7F6E\uFF0C\u53EF\u4EE5\u5F15\u5165\u82F1\u6587\u9ED8\u8BA4\u914D\u7F6E enConfig\uFF0C\u8FD8\u53EF\u4EE5\u5728\u9ED8\u8BA4\u914D\u7F6E\u7684\u57FA\u7840\u4E0A\u8FDB\u884C\u81EA\u5B9A\u4E49\u914D\u7F6E
      globalConfig: merge(enConfig, {
        table: {
          // \u652F\u6301 String \u548C Function \u4E24\u79CD\u6570\u636E\u7C7B\u578B
          empty: 'Empty Data',
          // empty can also be a function
          // empty: (h) => h && <div class='custom-empty-content'>Empty Data</div>,
          expandIcon: (h) => h && <ChevronRightIcon />,
          sortIcon: (h) => h && <CaretDownSmallIcon size="18px" />,

          // More config
          // filterIcon: () => <span>Filter</span>,
          // filterInputPlaceholder: 'Enter Keyword',
          // loadingMoreText: 'Load More',
          // loadingText: 'Loading',
          // sortAscendingOperationText: 'ascending sort',
          // sortCancelOperationText: 'cancel sort',
          // sortDescendingOperationText: 'descending sort',
          // treeExpandAndFoldIcon: (h, { type }) => type === 'expand' ? <ChevronRightIcon /> : <ChevronDownIcon />,
        },
      }),
      columns: initialColumns,
      data: initialData,
    };
  },
  methods: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    expandedRow(h) {
      return <div>This is expanded row info</div>;
    },
  },
};
<\/script>
<style scoped>
.tdesign-demo-item--locale-provider-base {
  margin: 24px -120px 0 0;
}
</style>
`,u=`<template>
  <t-config-provider :globalConfig="globalConfig" style="padding: 16px">
    <!-- \u5168\u5C40\u914D\u7F6E\uFF1A\u7A7A\u6570\u636E\u5448\u73B0\uFF0C\u6F14\u793A -->
    <t-table :data="[]" :columns="columns" bordered rowKey="property"></t-table>
    <br /><br />

    <!-- \u5168\u5C40\u914D\u7F6E\uFF1A\u81EA\u5B9A\u4E49\u5C55\u5F00\u56FE\u6807\u548C\u6392\u5E8F\u56FE\u6807\uFF0C\u6F14\u793A -->
    <t-table :data="data" :columns="columns" :expandedRow="expandedRow" expandOnRowClick rowKey="property"></t-table>
    <br /><br />
  </t-config-provider>
</template>

<script setup lang="jsx">
import { ref } from 'vue';
import { ChevronRightIcon, CaretDownSmallIcon /** , ChevronDownIcon */ } from 'tdesign-icons-vue';
import { merge } from 'lodash-es';
import enConfig from 'tdesign-vue/es/locale/en_US';

const initialColumns = [
  {
    colKey: 'type',
    title: 'Type',
    sorter: true,
  },
  {
    colKey: 'platform',
    title: 'Platform',
    filter: {
      type: 'single',
    },
  },
  {
    colKey: 'property',
    title: 'Property',
    sorter: true,
    filter: {
      type: 'single',
    },
  },
];
const initialData = [
  {
    type: 'Array',
    platform: 'Vue(PC)',
    property: 'A',
  },
  {
    type: 'String',
    platform: 'React(PC)',
    property: 'B',
  },
  {
    type: 'Object',
    platform: 'Miniprogram',
    property: 'C',
  },
];
// \u5168\u5C40\u7279\u6027\u914D\u7F6E\uFF0C\u53EF\u4EE5\u5F15\u5165\u82F1\u6587\u9ED8\u8BA4\u914D\u7F6E enConfig\uFF0C\u8FD8\u53EF\u4EE5\u5728\u9ED8\u8BA4\u914D\u7F6E\u7684\u57FA\u7840\u4E0A\u8FDB\u884C\u81EA\u5B9A\u4E49\u914D\u7F6E
const globalConfig = ref(
  merge(enConfig, {
    table: {
      // \u652F\u6301 String \u548C Function \u4E24\u79CD\u6570\u636E\u7C7B\u578B
      empty: 'Empty Data',
      // empty can also be a function
      // empty: (h) => h && <div class='custom-empty-content'>Empty Data</div>,
      expandIcon: (h) => h && <ChevronRightIcon />,
      sortIcon: (h) => h && <CaretDownSmallIcon size="18px" />,

      // More config
      // filterIcon: () => <span>Filter</span>,
      // filterInputPlaceholder: 'Enter Keyword',
      // loadingMoreText: 'Load More',
      // loadingText: 'Loading',
      // sortAscendingOperationText: 'ascending sort',
      // sortCancelOperationText: 'cancel sort',
      // sortDescendingOperationText: 'descending sort',
      // treeExpandAndFoldIcon: (h, { type }) => type === 'expand' ? <ChevronRightIcon /> : <ChevronDownIcon />,
    },
  }),
);
const columns = ref(initialColumns);
const data = ref(initialData);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const expandedRow = (h) => <div>This is expanded row info</div>;
<\/script>
<style scoped>
.tdesign-demo-item--locale-provider-base {
  margin: 24px -120px 0 0;
}
</style>
`,b=`<template>
  <t-config-provider :globalConfig="globalConfig" class="tdesign-demo-item--locale-provider-base">
    <t-form :data="formData" :rules="rules">
      <t-form-item label="User Name" name="username">
        <t-input
          v-model="formData.username"
          style="width: 400px"
          placeholder="There is no required mark on the left of this input in Form"
        ></t-input>
      </t-form-item>
      <t-form-item label="Password" name="password" requiredMark>
        <t-input
          v-model="formData.password"
          type="password"
          style="width: 400px"
          placeholder="There is required mark on the left of this input in Form"
        ></t-input>
      </t-form-item>
    </t-form>
    <br /><br />

    <t-transfer :data="transferList" v-model="transferTargetValue" :checked.sync="transferChecked" :search="true" />
    <br /><br />

    <t-select :options="options1" placeholder="see clear icon, it is configurable" clearable style="width: 400px" />
    <br /><br />
    <t-select :options="[]" placeholder="select without data in Select" style="width: 400px" />
    <br /><br />
    <t-select placeholder="see loading text in Select" loading style="width: 400px" />
    <br /><br />

    <!-- \u89C2\u5BDF placeholder -->
    <t-cascader :options="[]" style="width: 400px" />
    <br /><br />
    <!-- \u89C2\u5BDF\u7A7A\u6570\u636E\u6587\u672C\u5448\u73B0 -->
    <t-cascader :options="[]" placeholder="select without data in Cascader" style="width: 400px" />
    <br /><br />
    <!-- \u89C2\u5BDF\u52A0\u8F7D\u6587\u672C -->
    <!-- <t-cascader placeholder="see loading text in Cascader" loading style="width: 400px;" /> -->
    <!-- <br><br> -->

    <t-tree-select :data="[]" placeholder="see empty data in TreeSelect" style="width: 400px" />
    <br /><br />
    <t-tree-select :data="[]" loading placeholder="see loading text in TreeSelect" style="width: 400px" />
    <br /><br />
    <t-tree-select
      v-model="treeValue"
      :data="treeOptions"
      filterable
      placeholder="tree select"
      style="width: 400px"
      clearable
    />
    <br /><br />

    <t-time-picker placeholder="select time" format="hh:mm:ss a" allowInput />
    <br /><br /><br />

    <!-- \u81EA\u5B9A\u4E49\u5173\u95ED\u6309\u94AE\u793A\u4F8B -->
    <t-tag theme="primary" closable>Feature Tag</t-tag>
    <t-tag theme="success" closable>Feature Tag</t-tag>
    <t-tag theme="warning" closable>Feature Tag</t-tag>
    <t-tag theme="danger" closable>Feature Tag</t-tag>
    <br /><br />

    <!-- \u6570\u7EC4\u4EF6\u7A7A\u6570\u636E -->
    <t-tree :data="[]" />
    <br /><br />
    <!-- \u6570\u7EC4\u4EF6\u81EA\u5B9A\u4E49\u5C42\u7EA7\u56FE\u6807 -->
    <t-tree :data="treeData" transition />
    <br /><br />
    <br />
    <t-steps :current="2" layout="vertical">
      <t-step-item title="First Step" content="You need to click the blue button"></t-step-item>
      <t-step-item title="Second Step" content="Fill your base information into the form"></t-step-item>
      <t-step-item title="Error Step" status="error" content="Something Wrong! Custom Error Icon!"></t-step-item>
      <t-step-item title="Last Step" content="You haven't finish this step."></t-step-item>
    </t-steps>
    <br /><br />

    <t-image src="1.jpg" fit="scale-down" style="width: 300px"></t-image>
  </t-config-provider>
</template>

<script lang="jsx">
import {
  ErrorIcon, ChevronRightIcon, CloseIcon, CloseCircleIcon,
} from 'tdesign-icons-vue';
import { merge } from 'lodash-es';
import enConfig from 'tdesign-vue/es/locale/en_US';

const initialTransferList = [];
for (let i = 0; i < 20; i++) {
  initialTransferList.push({
    value: i.toString(),
    label: \`content \${i + 1}\`,
    disabled: i % 4 < 1,
  });
}

const SELECT_OPTIONS = [
  { label: 'Shanghai', value: 'shanghai' },
  { label: 'Beijing', value: 'beijing' },
  { label: 'Shenzhen', value: 'shenzhen' },
];

const TREE_OPTIONS = [
  {
    label: '1',
    value: '1',
    children: [
      { label: '1.1', value: '1.1' },
      { label: '1.2', value: '1.2' },
    ],
  },
  {
    label: '2',
    value: '2',
    children: [
      { label: '2.1', value: '2.1' },
      { label: '2.2', value: '2.2' },
    ],
  },
];

const TREE_DATA = [
  {
    value: '1',
    label: 'Department A',
    children: [
      { label: '1.1 custom fold icon', value: '1.1' },
      { label: '1.2 custom fold icon', value: '1.2' },
    ],
  },
  { value: '2', label: 'Department B', children: [{ label: '2.1' }, { label: '2.2' }] },
];

export default {
  data() {
    return {
      // \u5168\u5C40\u7279\u6027\u914D\u7F6E\uFF0C\u53EF\u4EE5\u5F15\u5165\u82F1\u6587\u9ED8\u8BA4\u914D\u7F6E enConfig\uFF0C\u8FD8\u53EF\u4EE5\u5728\u9ED8\u8BA4\u914D\u7F6E\u7684\u57FA\u7840\u4E0A\u8FDB\u884C\u81EA\u5B9A\u4E49\u914D\u7F6E
      globalConfig: merge(enConfig, {
        image: {
          // \u5168\u5C40\u66FF\u6362\u56FE\u7247\u5730\u5740
          replaceImageSrc(params) {
            console.log(params);
            return 'https://tdesign.gtimg.com/demo/demo-image-1.png';
          },
        },
        form: {
          requiredMark: false,
        },
        transfer: {
          title: '{checked} / {total}',
          empty: 'Empty Data',
          placeholder: 'type keyword to search',
        },
        tree: {
          empty: 'Tree Empty Data',
          folderIcon: (h) => h && <ChevronRightIcon size="18px" />,
        },
        select: {
          empty: 'Empty Data',
          loadingText: 'loading...',
          clearIcon: (h) => h && <CloseIcon />,
        },
        treeSelect: {
          empty: 'Empty Data',
          loadingText: 'loading...',
        },
        timePicker: {
          now: 'Now',
          confirm: 'Confirm',
          anteMeridiem: 'AM',
          postMeridiem: 'PM',
          placeholder: 'select time',
        },
        tag: {
          closeIcon: (h) => h && <CloseCircleIcon />,
        },
        cascader: {
          empty: 'empty data',
          loadingText: 'loading...',
          placeholder: 'select cascader data',
        },
        steps: {
          errorIcon: (h) => h && <ErrorIcon />,
        },
      }),
      transferList: initialTransferList,
      transferChecked: [],
      transferTargetValue: [],
      options1: SELECT_OPTIONS.concat(),
      treeValue: '',
      treeOptions: TREE_OPTIONS,
      treeData: TREE_DATA,
      formData: {
        username: '',
        password: '',
      },
      rules: {
        username: [{ required: true, message: '\u6B64\u9879\u5FC5\u586B', type: 'error' }],
      },
    };
  },
};
<\/script>
<style scoped>
.tdesign-demo-item--locale-provider-base {
  margin: 24px -120px 0 0;
}

.tdesign-demo-item--locale-provider-base /deep/ .t-transfer__list {
  width: 280px;
}

.tdesign-demo-item--locale-provider-base >>> .t-tag + .t-tag {
  margin-left: 36px;
}
</style>
`,h=`<template>
  <t-config-provider :globalConfig="globalConfig" class="tdesign-demo-item--locale-provider-base">
    <t-form :data="formData" :rules="rules">
      <t-form-item label="User Name" name="username">
        <t-input
          v-model="formData.username"
          style="width: 400px"
          placeholder="There is no required mark on the left of this input in Form"
        ></t-input>
      </t-form-item>
      <t-form-item label="Password" name="password" requiredMark>
        <t-input
          v-model="formData.password"
          type="password"
          style="width: 400px"
          placeholder="There is required mark on the left of this input in Form"
        ></t-input>
      </t-form-item>
    </t-form>
    <br /><br />

    <t-transfer :data="transferList" v-model="transferTargetValue" :checked.sync="transferChecked" :search="true" />
    <br /><br />

    <t-select :options="options1" placeholder="see clear icon, it is configurable" clearable style="width: 400px" />
    <br /><br />
    <t-select :options="[]" placeholder="select without data in Select" style="width: 400px" />
    <br /><br />
    <t-select placeholder="see loading text in Select" loading style="width: 400px" />
    <br /><br />

    <!-- \u89C2\u5BDF placeholder -->
    <t-cascader :options="[]" style="width: 400px" />
    <br /><br />
    <!-- \u89C2\u5BDF\u7A7A\u6570\u636E\u6587\u672C\u5448\u73B0 -->
    <t-cascader :options="[]" placeholder="select without data in Cascader" style="width: 400px" />
    <br /><br />
    <!-- \u89C2\u5BDF\u52A0\u8F7D\u6587\u672C -->
    <!-- <t-cascader placeholder="see loading text in Cascader" loading style="width: 400px;" /> -->
    <!-- <br><br> -->

    <t-tree-select :data="[]" placeholder="see empty data in TreeSelect" style="width: 400px" />
    <br /><br />
    <t-tree-select :data="[]" loading placeholder="see loading text in TreeSelect" style="width: 400px" />
    <br /><br />
    <t-tree-select
      v-model="treeValue"
      :data="treeOptions"
      filterable
      placeholder="tree select"
      style="width: 400px"
      clearable
    />
    <br /><br />

    <t-time-picker placeholder="select time" format="hh:mm:ss a" allowInput />
    <br /><br /><br />

    <!-- \u81EA\u5B9A\u4E49\u5173\u95ED\u6309\u94AE\u793A\u4F8B -->
    <t-tag theme="primary" closable>Feature Tag</t-tag>
    <t-tag theme="success" closable>Feature Tag</t-tag>
    <t-tag theme="warning" closable>Feature Tag</t-tag>
    <t-tag theme="danger" closable>Feature Tag</t-tag>
    <br /><br />

    <!-- \u6570\u7EC4\u4EF6\u7A7A\u6570\u636E -->
    <t-tree :data="[]" />
    <br /><br />
    <!-- \u6570\u7EC4\u4EF6\u81EA\u5B9A\u4E49\u5C42\u7EA7\u56FE\u6807 -->
    <t-tree :data="treeData" transition />
    <br /><br />
    <br />
    <t-steps :current="2" layout="vertical">
      <t-step-item title="First Step" content="You need to click the blue button"></t-step-item>
      <t-step-item title="Second Step" content="Fill your base information into the form"></t-step-item>
      <t-step-item title="Error Step" status="error" content="Something Wrong! Custom Error Icon!"></t-step-item>
      <t-step-item title="Last Step" content="You haven't finish this step."></t-step-item>
    </t-steps>
    <br /><br />

    <t-image src="1.jpg" fit="scale-down" style="width: 300px"></t-image>
  </t-config-provider>
</template>

<script setup lang="jsx">
import { ref, reactive } from 'vue';
import {
  ErrorIcon, ChevronRightIcon, CloseIcon, CloseCircleIcon,
} from 'tdesign-icons-vue';
import { merge } from 'lodash-es';
import enConfig from 'tdesign-vue/es/locale/en_US';

const initialTransferList = [];
for (let i = 0; i < 20; i++) {
  initialTransferList.push({
    value: i.toString(),
    label: \`content \${i + 1}\`,
    disabled: i % 4 < 1,
  });
}
const SELECT_OPTIONS = [
  {
    label: 'Shanghai',
    value: 'shanghai',
  },
  {
    label: 'Beijing',
    value: 'beijing',
  },
  {
    label: 'Shenzhen',
    value: 'shenzhen',
  },
];
const TREE_OPTIONS = [
  {
    label: '1',
    value: '1',
    children: [
      {
        label: '1.1',
        value: '1.1',
      },
      {
        label: '1.2',
        value: '1.2',
      },
    ],
  },
  {
    label: '2',
    value: '2',
    children: [
      {
        label: '2.1',
        value: '2.1',
      },
      {
        label: '2.2',
        value: '2.2',
      },
    ],
  },
];
const TREE_DATA = [
  {
    value: '1',
    label: 'Department A',
    children: [
      {
        label: '1.1 custom fold icon',
        value: '1.1',
      },
      {
        label: '1.2 custom fold icon',
        value: '1.2',
      },
    ],
  },
  {
    value: '2',
    label: 'Department B',
    children: [
      {
        label: '2.1',
      },
      {
        label: '2.2',
      },
    ],
  },
];
// \u5168\u5C40\u7279\u6027\u914D\u7F6E\uFF0C\u53EF\u4EE5\u5F15\u5165\u82F1\u6587\u9ED8\u8BA4\u914D\u7F6E enConfig\uFF0C\u8FD8\u53EF\u4EE5\u5728\u9ED8\u8BA4\u914D\u7F6E\u7684\u57FA\u7840\u4E0A\u8FDB\u884C\u81EA\u5B9A\u4E49\u914D\u7F6E
const globalConfig = ref(
  merge(enConfig, {
    image: {
      // \u5168\u5C40\u66FF\u6362\u56FE\u7247\u5730\u5740
      replaceImageSrc(params) {
        console.log(params);
        return 'https://tdesign.gtimg.com/demo/demo-image-1.png';
      },
    },
    form: {
      requiredMark: false,
    },
    transfer: {
      title: '{checked} / {total}',
      empty: 'Empty Data',
      placeholder: 'type keyword to search',
    },
    tree: {
      empty: 'Tree Empty Data',
      folderIcon: (h) => h && <ChevronRightIcon size="18px" />,
    },
    select: {
      empty: 'Empty Data',
      loadingText: 'loading...',
      clearIcon: (h) => h && <CloseIcon />,
    },
    treeSelect: {
      empty: 'Empty Data',
      loadingText: 'loading...',
    },
    timePicker: {
      now: 'Now',
      confirm: 'Confirm',
      anteMeridiem: 'AM',
      postMeridiem: 'PM',
      placeholder: 'select time',
    },
    tag: {
      closeIcon: (h) => h && <CloseCircleIcon />,
    },
    cascader: {
      empty: 'empty data',
      loadingText: 'loading...',
      placeholder: 'select cascader data',
    },
    steps: {
      errorIcon: (h) => h && <ErrorIcon />,
    },
  }),
);
const transferList = ref(initialTransferList);
const transferChecked = ref([]);
const transferTargetValue = ref([]);
const options1 = ref(SELECT_OPTIONS.concat());
const treeValue = ref('');
const treeOptions = ref(TREE_OPTIONS);
const treeData = ref(TREE_DATA);
const formData = reactive({
  username: '',
  password: '',
});
const rules = reactive({
  username: [
    {
      required: true,
      message: '\u6B64\u9879\u5FC5\u586B',
      type: 'error',
    },
  ],
});
<\/script>
<style scoped>
.tdesign-demo-item--locale-provider-base {
  margin: 24px -120px 0 0;
}

.tdesign-demo-item--locale-provider-base /deep/ .t-transfer__list {
  width: 280px;
}

.tdesign-demo-item--locale-provider-base >>> .t-tag + .t-tag {
  margin-left: 36px;
}
</style>
`;export{n as D,e as a,t as b,o as c,r as d,a as e,i as f,l as g,s as h,d as i,c as j,p as k,m as l,g as m,f as n,u as o,b as p,h as q};
