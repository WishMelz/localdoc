import{Y as o,n as p}from"./index.663c003f.js";var f=`<template>
  <t-space direction="vertical">
    <t-space align="center">
      <label>\u65F6\u95F4\u8F74\u65B9\u5411</label>
      <t-radio-group default-value="vertical" @change="handleChange">
        <t-radio-button value="vertical">\u5782\u76F4\u65F6\u95F4\u8F74</t-radio-button>
        <t-radio-button value="horizontal">\u6C34\u5E73\u65F6\u95F4\u8F74</t-radio-button>
      </t-radio-group>
    </t-space>

    <t-timeline :layout="direction" mode="same">
      <t-timeline-item label="2022-01-01">\u4E8B\u4EF6\u4E00</t-timeline-item>
      <t-timeline-item label="2022-02-01">\u4E8B\u4EF6\u4E8C</t-timeline-item>
      <t-timeline-item label="2022-03-01">\u4E8B\u4EF6\u4E09</t-timeline-item>
      <t-timeline-item label="2022-04-01">\u4E8B\u4EF6\u56DB</t-timeline-item>
    </t-timeline>
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      direction: 'vertical',
    };
  },
  methods: {
    handleChange(checkedValue) {
      this.direction = checkedValue;
    },
  },
};
<\/script>
`,C=`<template>
  <t-space direction="vertical">
    <t-space align="center">
      <label>\u65F6\u95F4\u8F74\u65B9\u5411</label>
      <t-radio-group default-value="vertical" @change="handleChange">
        <t-radio-button value="vertical">\u5782\u76F4\u65F6\u95F4\u8F74</t-radio-button>
        <t-radio-button value="horizontal">\u6C34\u5E73\u65F6\u95F4\u8F74</t-radio-button>
      </t-radio-group>
    </t-space>

    <t-timeline :layout="direction" mode="same">
      <t-timeline-item label="2022-01-01">\u4E8B\u4EF6\u4E00</t-timeline-item>
      <t-timeline-item label="2022-02-01">\u4E8B\u4EF6\u4E8C</t-timeline-item>
      <t-timeline-item label="2022-03-01">\u4E8B\u4EF6\u4E09</t-timeline-item>
      <t-timeline-item label="2022-04-01">\u4E8B\u4EF6\u56DB</t-timeline-item>
    </t-timeline>
  </t-space>
</template>
<script setup>
import { ref } from 'vue';

const direction = ref('vertical');
const handleChange = (checkedValue) => {
  direction.value = checkedValue;
};
<\/script>
`,y=`<template>
  <div>
    <t-space direction="vertical" size="large">
      <t-space>
        <label>\u662F\u5426\u5012\u5E8F</label>
        <t-switch size="large" v-model="reverse"></t-switch>
      </t-space>
    </t-space>
    <t-timeline mode="same" :reverse="reverse">
      <t-timeline-item label="2022-01-01">\u4E8B\u4EF6\u4E00</t-timeline-item>
      <t-timeline-item label="2022-02-01">\u4E8B\u4EF6\u4E8C</t-timeline-item>
      <t-timeline-item label="2022-03-01">\u4E8B\u4EF6\u4E09</t-timeline-item>
      <t-timeline-item label="2022-04-01">\u4E8B\u4EF6\u56DB</t-timeline-item>
    </t-timeline>
  </div>
</template>
<script>
export default {
  data() {
    return {
      reverse: false,
    };
  },
};
<\/script>
`,x=`<template>
  <div>
    <t-space direction="vertical" size="large">
      <t-space>
        <label>\u662F\u5426\u5012\u5E8F</label>
        <t-switch size="large" v-model="reverse"></t-switch>
      </t-space>
    </t-space>
    <t-timeline mode="same" :reverse="reverse">
      <t-timeline-item label="2022-01-01">\u4E8B\u4EF6\u4E00</t-timeline-item>
      <t-timeline-item label="2022-02-01">\u4E8B\u4EF6\u4E8C</t-timeline-item>
      <t-timeline-item label="2022-03-01">\u4E8B\u4EF6\u4E09</t-timeline-item>
      <t-timeline-item label="2022-04-01">\u4E8B\u4EF6\u56DB</t-timeline-item>
    </t-timeline>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const reverse = ref(false);
<\/script>
`,_=`<template>
  <t-space direction="vertical">
    <t-space align="center">
      <label>\u65F6\u95F4\u8F74\u6837\u5F0F</label>
      <t-radio-group default-value="default" @change="handleChange" variant="default-filled">
        <t-radio-button value="default">\u9ED8\u8BA4\u6837\u5F0F</t-radio-button>
        <t-radio-button value="dot">\u70B9\u72B6\u6837\u5F0F</t-radio-button>
      </t-radio-group>
    </t-space>
    <t-timeline mode="same" :theme="docStyle">
      <t-timeline-item label="2022-01-01"
      >\u4E8B\u4EF6\u4E00
        <tips-icon size="medium" :style="{ color: color }" slot="dot" />
      </t-timeline-item>
      <t-timeline-item label="2022-02-01"
      >\u4E8B\u4EF6\u4E8C
        <user-icon size="medium" :style="{ color: color }" slot="dot" />
      </t-timeline-item>
      <t-timeline-item label="2022-03-01"
      >\u4E8B\u4EF6\u4E09
        <heart-icon size="medium" :style="{ color: color }" slot="dot" />
      </t-timeline-item>
      <t-timeline-item label="2022-04-01"
      >\u4E8B\u4EF6\u56DB
        <home-icon size="medium" :style="{ color: color }" slot="dot" />
      </t-timeline-item>
    </t-timeline>
  </t-space>
</template>
<script>
import {
  TipsIcon, UserIcon, HeartIcon, HomeIcon,
} from 'tdesign-icons-vue';

export default {
  components: {
    TipsIcon,
    UserIcon,
    HeartIcon,
    HomeIcon,
  },
  data() {
    return {
      docStyle: 'default',
      color: 'var(--td-brand-color)',
    };
  },
  methods: {
    handleChange(checkedValue) {
      this.docStyle = checkedValue;
    },
  },
};
<\/script>
`,z=`<template>
  <t-space direction="vertical">
    <t-space align="center">
      <label>\u65F6\u95F4\u8F74\u6837\u5F0F</label>
      <t-radio-group default-value="default" @change="handleChange" variant="default-filled">
        <t-radio-button value="default">\u9ED8\u8BA4\u6837\u5F0F</t-radio-button>
        <t-radio-button value="dot">\u70B9\u72B6\u6837\u5F0F</t-radio-button>
      </t-radio-group>
    </t-space>
    <t-timeline mode="same" :theme="docStyle">
      <t-timeline-item label="2022-01-01"
      >\u4E8B\u4EF6\u4E00
        <tips-icon size="medium" :style="{ color: color }" slot="dot" />
      </t-timeline-item>
      <t-timeline-item label="2022-02-01"
      >\u4E8B\u4EF6\u4E8C
        <user-icon size="medium" :style="{ color: color }" slot="dot" />
      </t-timeline-item>
      <t-timeline-item label="2022-03-01"
      >\u4E8B\u4EF6\u4E09
        <heart-icon size="medium" :style="{ color: color }" slot="dot" />
      </t-timeline-item>
      <t-timeline-item label="2022-04-01"
      >\u4E8B\u4EF6\u56DB
        <home-icon size="medium" :style="{ color: color }" slot="dot" />
      </t-timeline-item>
    </t-timeline>
  </t-space>
</template>
<script setup>
import { ref } from 'vue';
import {
  TipsIcon, UserIcon, HeartIcon, HomeIcon,
} from 'tdesign-icons-vue';

const docStyle = ref('default');
const color = ref('var(--td-brand-color)');
const handleChange = (checkedValue) => {
  docStyle.value = checkedValue;
};
<\/script>
`,V=`<template>
  <div>
    <t-timeline mode="same">
      <t-timeline-item label="2022-01-01">
        <div>\u4E8B\u4EF6\u4E00</div>
        <div class="timeline-custom-content">\u4E8B\u4EF6\u4E00\u81EA\u5B9A\u4E49\u5185\u5BB9</div>
      </t-timeline-item>
      <t-timeline-item label="2022-02-01">
        <div>\u4E8B\u4EF6\u4E8C</div>
        <div class="timeline-custom-content">\u4E8B\u4EF6\u4E8C\u81EA\u5B9A\u4E49\u5185\u5BB9</div>
      </t-timeline-item>
      <t-timeline-item label="2022-03-01">
        <div>\u4E8B\u4EF6\u4E09</div>
        <div class="timeline-custom-content">\u4E8B\u4EF6\u4E09\u81EA\u5B9A\u4E49\u5185\u5BB9</div>
      </t-timeline-item>
      <t-timeline-item label="2022-04-01">
        <div>\u4E8B\u4EF6\u56DB</div>
        <div class="timeline-custom-content">\u4E8B\u4EF6\u56DB\u81EA\u5B9A\u4E49\u5185\u5BB9</div>
      </t-timeline-item>
    </t-timeline>
  </div>
</template>

<style scoped>
.timeline-custom-content {
  font-size: 12px;
  color: var(--td-text-color-secondary);
}
</style>
`,k=`<template>
  <div>
    <t-timeline mode="same">
      <t-timeline-item label="2022-01-01">
        <div>\u4E8B\u4EF6\u4E00</div>
        <div class="timeline-custom-content">\u4E8B\u4EF6\u4E00\u81EA\u5B9A\u4E49\u5185\u5BB9</div>
      </t-timeline-item>
      <t-timeline-item label="2022-02-01">
        <div>\u4E8B\u4EF6\u4E8C</div>
        <div class="timeline-custom-content">\u4E8B\u4EF6\u4E8C\u81EA\u5B9A\u4E49\u5185\u5BB9</div>
      </t-timeline-item>
      <t-timeline-item label="2022-03-01">
        <div>\u4E8B\u4EF6\u4E09</div>
        <div class="timeline-custom-content">\u4E8B\u4EF6\u4E09\u81EA\u5B9A\u4E49\u5185\u5BB9</div>
      </t-timeline-item>
      <t-timeline-item label="2022-04-01">
        <div>\u4E8B\u4EF6\u56DB</div>
        <div class="timeline-custom-content">\u4E8B\u4EF6\u56DB\u81EA\u5B9A\u4E49\u5185\u5BB9</div>
      </t-timeline-item>
    </t-timeline>
  </div>
</template>

<style scoped>
.timeline-custom-content {
  font-size: 12px;
  color: var(--td-text-color-secondary);
}
</style>
`,D=`<template>
  <div>
    <t-space direction="vertical">
      <t-space>
        <h4>\u65F6\u95F4\u8F74\u65B9\u5411</h4>
        <t-radio-group default-value="vertical" @change="handleLayoutChange">
          <t-radio-button value="vertical">\u5782\u76F4\u65F6\u95F4\u8F74</t-radio-button>
          <t-radio-button value="horizontal">\u6C34\u5E73\u65F6\u95F4\u8F74</t-radio-button>
        </t-radio-group>
      </t-space>
      <t-space>
        <h4>\u5BF9\u9F50\u65B9\u5F0F</h4>
        <t-radio-group default-value="left" @change="handleDirectionChange">
          <t-radio-button value="left">\u5DE6\u5BF9\u9F50</t-radio-button>
          <t-radio-button value="alternate">\u4EA4\u9519\u5BF9\u9F50</t-radio-button>
          <t-radio-button value="right">\u53F3\u5BF9\u9F50</t-radio-button>
        </t-radio-group>
      </t-space>
      <t-space>
        <h4>label\u5BF9\u9F50\u65B9\u5F0F</h4>
        <t-radio-group default-value="same" @change="handleModeChange">
          <t-radio-button value="same">\u540C\u4FA7</t-radio-button>
          <t-radio-button value="alternate">\u4EA4\u9519</t-radio-button>
        </t-radio-group>
      </t-space>
    </t-space>
    <t-timeline :layout="layout" :labelAlign="direction" :mode="mode">
      <t-timeline-item label="2022-01-01">\u4E8B\u4EF6\u4E00</t-timeline-item>
      <t-timeline-item label="2022-02-01">\u4E8B\u4EF6\u4E8C</t-timeline-item>
      <t-timeline-item label="2022-03-01">\u4E8B\u4EF6\u4E09</t-timeline-item>
      <t-timeline-item label="2022-04-01">\u4E8B\u4EF6\u56DB</t-timeline-item>
    </t-timeline>
  </div>
</template>
<script>
export default {
  data() {
    return {
      layout: 'vertical',
      direction: 'left',
      mode: 'same',
    };
  },
  methods: {
    handleLayoutChange(checkedValue) {
      this.layout = checkedValue;
    },
    handleDirectionChange(checkedValue) {
      this.direction = checkedValue;
    },
    handleModeChange(checkedValue) {
      this.mode = checkedValue;
    },
  },
};
<\/script>
`,w=`<template>
  <div>
    <t-space direction="vertical">
      <t-space>
        <h4>\u65F6\u95F4\u8F74\u65B9\u5411</h4>
        <t-radio-group default-value="vertical" @change="handleLayoutChange">
          <t-radio-button value="vertical">\u5782\u76F4\u65F6\u95F4\u8F74</t-radio-button>
          <t-radio-button value="horizontal">\u6C34\u5E73\u65F6\u95F4\u8F74</t-radio-button>
        </t-radio-group>
      </t-space>
      <t-space>
        <h4>\u5BF9\u9F50\u65B9\u5F0F</h4>
        <t-radio-group default-value="left" @change="handleDirectionChange">
          <t-radio-button value="left">\u5DE6\u5BF9\u9F50</t-radio-button>
          <t-radio-button value="alternate">\u4EA4\u9519\u5BF9\u9F50</t-radio-button>
          <t-radio-button value="right">\u53F3\u5BF9\u9F50</t-radio-button>
        </t-radio-group>
      </t-space>
      <t-space>
        <h4>label\u5BF9\u9F50\u65B9\u5F0F</h4>
        <t-radio-group default-value="same" @change="handleModeChange">
          <t-radio-button value="same">\u540C\u4FA7</t-radio-button>
          <t-radio-button value="alternate">\u4EA4\u9519</t-radio-button>
        </t-radio-group>
      </t-space>
    </t-space>
    <t-timeline :layout="layout" :labelAlign="direction" :mode="mode">
      <t-timeline-item label="2022-01-01">\u4E8B\u4EF6\u4E00</t-timeline-item>
      <t-timeline-item label="2022-02-01">\u4E8B\u4EF6\u4E8C</t-timeline-item>
      <t-timeline-item label="2022-03-01">\u4E8B\u4EF6\u4E09</t-timeline-item>
      <t-timeline-item label="2022-04-01">\u4E8B\u4EF6\u56DB</t-timeline-item>
    </t-timeline>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const layout = ref('vertical');
const direction = ref('left');
const mode = ref('same');
const handleLayoutChange = (checkedValue) => {
  layout.value = checkedValue;
};
const handleDirectionChange = (checkedValue) => {
  direction.value = checkedValue;
};
const handleModeChange = (checkedValue) => {
  mode.value = checkedValue;
};
<\/script>
`,I=`<template>
  <div>
    <t-space direction="vertical">
      <t-space>
        <t-form labelWidth="200">
          <t-form-item label="\u52A0\u8F7D\u4E2D" style="margin-bottom: 5px">
            <t-switch size="large" v-model="loading" @change="onChange"></t-switch>
          </t-form-item>
        </t-form>
      </t-space>
    </t-space>
    <t-timeline mode="same">
      <t-timeline-item label="2022-01-01">\u4E8B\u4EF6\u4E00</t-timeline-item>
      <t-timeline-item label="2022-02-01" :loading="loading">\u4E8B\u4EF6\u4E8C</t-timeline-item>
      <t-timeline-item label="2022-03-01">\u4E8B\u4EF6\u4E09</t-timeline-item>
      <t-timeline-item label="2022-04-01" :loading="loading">
        \u4E8B\u4EF6\u56DB
        <!-- <t-loading size="12px" slot="dot" /> -->
      </t-timeline-item>
    </t-timeline>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    onChange(val) {
      this.loading = val;
    },
  },
};
<\/script>
`,S=`<template>
  <div>
    <t-space direction="vertical">
      <t-space>
        <t-form labelWidth="200">
          <t-form-item label="\u52A0\u8F7D\u4E2D" style="margin-bottom: 5px">
            <t-switch size="large" v-model="loading" @change="onChange"></t-switch>
          </t-form-item>
        </t-form>
      </t-space>
    </t-space>
    <t-timeline mode="same">
      <t-timeline-item label="2022-01-01">\u4E8B\u4EF6\u4E00</t-timeline-item>
      <t-timeline-item label="2022-02-01" :loading="loading">\u4E8B\u4EF6\u4E8C</t-timeline-item>
      <t-timeline-item label="2022-03-01">\u4E8B\u4EF6\u4E09</t-timeline-item>
      <t-timeline-item label="2022-04-01" :loading="loading">
        \u4E8B\u4EF6\u56DB
        <!-- <t-loading size="12px" slot="dot" /> -->
      </t-timeline-item>
    </t-timeline>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const loading = ref(false);
const onChange = (val) => {
  loading.value = val;
};
<\/script>
`,L=`<template>
  <div>
    <t-space direction="vertical">
      <t-timeline-item>123</t-timeline-item>
      <t-timeline mode="same">
        <t-timeline-item label="2022-01-01" dotColor="primary"> \u5DF2\u5B8C\u6210\u7684\u65F6\u95F4 </t-timeline-item>
        <t-timeline-item label="2022-03-01" dotColor="error"> \u5371\u9669\u65F6\u95F4 </t-timeline-item>
        <t-timeline-item label="2022-04-01" dotColor="warning"> \u544A\u8B66\u4E8B\u4EF6 </t-timeline-item>
        <t-timeline-item label="2022-05-01">\u9ED8\u8BA4\u7684\u65F6\u95F4</t-timeline-item>
        <t-timeline-item label="2022-06-01" dotColor="yellowgreen"> \u81EA\u5B9A\u4E49\u4E3B\u9898\u8272 </t-timeline-item>
      </t-timeline>
    </t-space>
  </div>
</template>
`,H=`<template>
  <div>
    <t-space direction="vertical">
      <t-timeline-item>123</t-timeline-item>
      <t-timeline mode="same">
        <t-timeline-item label="2022-01-01" dotColor="primary"> \u5DF2\u5B8C\u6210\u7684\u65F6\u95F4 </t-timeline-item>
        <t-timeline-item label="2022-03-01" dotColor="error"> \u5371\u9669\u65F6\u95F4 </t-timeline-item>
        <t-timeline-item label="2022-04-01" dotColor="warning"> \u544A\u8B66\u4E8B\u4EF6 </t-timeline-item>
        <t-timeline-item label="2022-05-01">\u9ED8\u8BA4\u7684\u65F6\u95F4</t-timeline-item>
        <t-timeline-item label="2022-06-01" dotColor="yellowgreen"> \u81EA\u5B9A\u4E49\u4E3B\u9898\u8272 </t-timeline-item>
      </t-timeline>
    </t-space>
  </div>
</template>
`,v=[{name:"mode",type:"enum",defaultValue:"same",options:[{label:"alternate",value:"alternate"},{label:"same",value:"same"}]},{name:"labelAlign",type:"enum",defaultValue:"left",options:[{label:"left",value:"left"},{label:"right",value:"right"},{label:"alternate",value:"alternate"},{label:"top",value:"top"},{label:"bottom",value:"bottom"}]},{name:"layout",type:"enum",defaultValue:"vertical",options:[{label:"horizontal",value:"horizontal"},{label:"vertical",value:"vertical"}]},{name:"reverse",type:"Boolean",defaultValue:!1,options:[]},{name:"theme",type:"enum",defaultValue:"default",options:[{label:"default",value:"default"},{label:"dot",value:"dot"}]}];const r={};r.setup=(e,n)=>{const t=o(v),i=[{label:"timeline",value:"timeline"}],l={timeline:`<t-timeline v-bind="configProps">
              <t-timeline-item label="2022-01-01">\u4E8B\u4EF6\u4E00</t-timeline-item>
              <t-timeline-item label="2022-02-01">\u4E8B\u4EF6\u4E8C</t-timeline-item>
              <t-timeline-item label="2022-03-01">\u4E8B\u4EF6\u4E09</t-timeline-item>
      </t-timeline>`},a=o(`<template>${l[i[0].value].trim()}</template>`);function s(u){a.value=`<template>${l[u].trim()}</template>`}return{configList:t,panelList:i,usageCode:a,onPanelChange:s}};var d=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("base-usage",{attrs:{code:e.usageCode,"config-list":e.configList,"panel-list":e.panelList},on:{PanelChange:e.onPanelChange},scopedSlots:e._u([{key:"timeline",fn:function(i){var l=i.configProps;return[t("t-timeline",e._b({},"t-timeline",l,!1),[t("t-timeline-item",{attrs:{label:"2022-01-01"}},[e._v("\u4E8B\u4EF6\u4E00")]),t("t-timeline-item",{attrs:{label:"2022-02-01"}},[e._v("\u4E8B\u4EF6\u4E8C")]),t("t-timeline-item",{attrs:{label:"2022-03-01"}},[e._v("\u4E8B\u4EF6\u4E09")])],1)]}}])})},b=[];d._withStripped=!0;const m={};var c=p(r,d,b,!1,h,null,null,null);function h(e){for(let n in m)this[n]=m[n]}c.options.__file="../src/timeline/_usage/index.vue";var M=function(){return c.exports}();export{f as D,M as U,C as a,y as b,x as c,_ as d,z as e,V as f,k as g,D as h,w as i,I as j,S as k,L as l,H as m};
