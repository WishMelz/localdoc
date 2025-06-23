import{Y as s,n as g}from"./index.663c003f.js";var h=`<template>
  <t-space size="large">
    <t-avatar :icon="icon"></t-avatar>
    <t-avatar :image="image" :hideOnLoadFailed="false" @error="onError"></t-avatar>
    <t-avatar>W</t-avatar>
  </t-space>
</template>
<script lang="jsx">
import { UserIcon } from 'tdesign-icons-vue';

export default {
  components: {},
  data() {
    return {
      image: 'https://tdesign.gtimg.com/site/avatar.jpg',
    };
  },
  computed: {
    icon() {
      return () => <UserIcon />;
    },
  },
  methods: {
    onError(params) {
      console.log(params);
    },
  },
};
<\/script>
`,z=`<template>
  <t-space size="large">
    <t-avatar :icon="icon"></t-avatar>
    <t-avatar :image="image" :hideOnLoadFailed="false" @error="onError"></t-avatar>
    <t-avatar>W</t-avatar>
  </t-space>
</template>
<script setup lang="jsx">
import { ref, computed } from 'vue';
import { UserIcon } from 'tdesign-icons-vue';

const image = ref('https://tdesign.gtimg.com/site/avatar.jpg');
const icon = computed(() => () => <UserIcon />);
const onError = (params) => {
  console.log(params);
};
<\/script>
`,W=`<template>
  <t-space size="large">
    <t-avatar>W</t-avatar>
    <t-avatar shape="round">W</t-avatar>
  </t-space>
</template>
`,C=`<template>
  <t-space size="large">
    <t-avatar>W</t-avatar>
    <t-avatar shape="round">W</t-avatar>
  </t-space>
</template>
`,b=`<template>
  <t-space direction="vertical">
    <t-space align="center" break-line>
      <t-avatar size="small">W</t-avatar>
      <t-avatar size="medium">W</t-avatar>
      <t-avatar size="large">W</t-avatar>
      <t-avatar size="100px">W</t-avatar>
    </t-space>
    <t-space align="center" break-line>
      <t-avatar shape="round" size="small">W</t-avatar>
      <t-avatar shape="round" size="medium">W</t-avatar>
      <t-avatar shape="round" size="large">W</t-avatar>
      <t-avatar shape="round" size="100px">W</t-avatar>
    </t-space>
  </t-space>
</template>
`,_=`<template>
  <t-space direction="vertical">
    <t-space align="center" break-line>
      <t-avatar size="small">W</t-avatar>
      <t-avatar size="medium">W</t-avatar>
      <t-avatar size="large">W</t-avatar>
      <t-avatar size="100px">W</t-avatar>
    </t-space>
    <t-space align="center" break-line>
      <t-avatar shape="round" size="small">W</t-avatar>
      <t-avatar shape="round" size="medium">W</t-avatar>
      <t-avatar shape="round" size="large">W</t-avatar>
      <t-avatar shape="round" size="100px">W</t-avatar>
    </t-space>
  </t-space>
</template>
`,I=`<template>
  <t-space size="large">
    <t-avatar>\u738B</t-avatar>
    <t-avatar>\u738B\u4EBF</t-avatar>
    <t-avatar>\u738B\u4EBF\u4EBF</t-avatar>
  </t-space>
</template>
`,j=`<template>
  <t-space size="large">
    <t-avatar>\u738B</t-avatar>
    <t-avatar>\u738B\u4EBF</t-avatar>
    <t-avatar>\u738B\u4EBF\u4EBF</t-avatar>
  </t-space>
</template>
`,k=`<template>
  <t-space direction="vertical">
    <t-space break-line>
      <t-avatar-group>
        <t-avatar :image="image"></t-avatar>
        <t-avatar>W</t-avatar>
        <t-avatar :icon="icon"></t-avatar>
      </t-avatar-group>
    </t-space>
    <t-space break-line>
      <t-avatar-group size="large">
        <t-avatar :image="image" @error="onError"></t-avatar>
        <t-avatar>W</t-avatar>
        <t-avatar :icon="icon"></t-avatar>
      </t-avatar-group>
    </t-space>
  </t-space>
</template>
<script lang="jsx">
import { UserIcon } from 'tdesign-icons-vue';

export default {
  data() {
    return {
      image: 'https://tdesign.gtimg.com/site/avatar.jpg',
    };
  },
  computed: {
    icon() {
      return () => <UserIcon />;
    },
  },

  methods: {
    onError(params) {
      console.log('image load failed', params);
    },
  },
};
<\/script>
`,U=`<template>
  <t-space direction="vertical">
    <t-space break-line>
      <t-avatar-group>
        <t-avatar :image="image"></t-avatar>
        <t-avatar>W</t-avatar>
        <t-avatar :icon="icon"></t-avatar>
      </t-avatar-group>
    </t-space>
    <t-space break-line>
      <t-avatar-group size="large">
        <t-avatar :image="image" @error="onError"></t-avatar>
        <t-avatar>W</t-avatar>
        <t-avatar :icon="icon"></t-avatar>
      </t-avatar-group>
    </t-space>
  </t-space>
</template>
<script setup lang="jsx">
import { ref, computed } from 'vue';
import { UserIcon } from 'tdesign-icons-vue';

const image = ref('https://tdesign.gtimg.com/site/avatar.jpg');
const icon = computed(() => () => <UserIcon />);
const onError = (params) => {
  console.log('image load failed', params);
};
<\/script>
`,D=`<template>
  <t-space direction="vertical">
    <t-space break-line>
      <t-avatar-group>
        <t-avatar :image="image"></t-avatar>
        <t-avatar>W</t-avatar>
        <t-avatar :icon="icon"></t-avatar>
      </t-avatar-group>
    </t-space>

    <t-space break-line>
      <t-avatar-group cascading="left-up">
        <t-avatar :image="image"></t-avatar>
        <t-avatar>W</t-avatar>
        <t-avatar :icon="icon"></t-avatar>
      </t-avatar-group>
    </t-space>
  </t-space>
</template>
<script lang="jsx">
import { UserIcon } from 'tdesign-icons-vue';

export default {
  data() {
    return {
      image: 'https://tdesign.gtimg.com/site/avatar.jpg',
    };
  },
  computed: {
    icon() {
      return () => <UserIcon />;
    },
  },
};
<\/script>
`,E=`<template>
  <t-space direction="vertical">
    <t-space break-line>
      <t-avatar-group>
        <t-avatar :image="image"></t-avatar>
        <t-avatar>W</t-avatar>
        <t-avatar :icon="icon"></t-avatar>
      </t-avatar-group>
    </t-space>

    <t-space break-line>
      <t-avatar-group cascading="left-up">
        <t-avatar :image="image"></t-avatar>
        <t-avatar>W</t-avatar>
        <t-avatar :icon="icon"></t-avatar>
      </t-avatar-group>
    </t-space>
  </t-space>
</template>
<script setup lang="jsx">
import { ref, computed } from 'vue';
import { UserIcon } from 'tdesign-icons-vue';

const image = ref('https://tdesign.gtimg.com/site/avatar.jpg');
const icon = computed(() => () => <UserIcon />);
<\/script>
`,A=`<template>
  <t-space direction="vertical">
    <t-space break-line>
      <t-avatar-group size="large" :max="2">
        <t-avatar :image="image"></t-avatar>
        <t-avatar>Avatar</t-avatar>
        <t-avatar :image="image"></t-avatar>
      </t-avatar-group>
    </t-space>
    <t-space break-line>
      <t-avatar-group size="large" :max="2" :collapseAvatar="ellipsisIcon">
        <t-avatar :image="image"></t-avatar>
        <t-avatar>Avatar</t-avatar>
        <t-avatar :icon="icon"></t-avatar>
      </t-avatar-group>
    </t-space>
    <t-space break-line>
      <t-avatar-group size="large" :max="2" collapseAvatar="more">
        <t-avatar :image="image"></t-avatar>
        <t-avatar>Avatar</t-avatar>
        <t-avatar :icon="icon"></t-avatar>
      </t-avatar-group>
    </t-space>
  </t-space>
</template>
<script lang="jsx">
import { UserIcon, EllipsisIcon } from 'tdesign-icons-vue';

export default {
  data() {
    return {
      image: 'https://tdesign.gtimg.com/site/avatar.jpg',
    };
  },
  computed: {
    ellipsisIcon() {
      return () => <EllipsisIcon />;
    },
    icon() {
      return () => <UserIcon />;
    },
  },
};
<\/script>
`,L=`<template>
  <t-space direction="vertical">
    <t-space break-line>
      <t-avatar-group size="large" :max="2">
        <t-avatar :image="image"></t-avatar>
        <t-avatar>Avatar</t-avatar>
        <t-avatar :image="image"></t-avatar>
      </t-avatar-group>
    </t-space>
    <t-space break-line>
      <t-avatar-group size="large" :max="2" :collapseAvatar="ellipsisIcon">
        <t-avatar :image="image"></t-avatar>
        <t-avatar>Avatar</t-avatar>
        <t-avatar :icon="icon"></t-avatar>
      </t-avatar-group>
    </t-space>
    <t-space break-line>
      <t-avatar-group size="large" :max="2" collapseAvatar="more">
        <t-avatar :image="image"></t-avatar>
        <t-avatar>Avatar</t-avatar>
        <t-avatar :icon="icon"></t-avatar>
      </t-avatar-group>
    </t-space>
  </t-space>
</template>
<script setup lang="jsx">
import { ref, computed } from 'vue';
import { UserIcon, EllipsisIcon } from 'tdesign-icons-vue';

const image = ref('https://tdesign.gtimg.com/site/avatar.jpg');
const ellipsisIcon = computed(() => () => <EllipsisIcon />);
const icon = computed(() => () => <UserIcon />);
<\/script>
`,u=[{name:"hideOnLoadFailed",type:"Boolean",defaultValue:!1,options:[]},{name:"shape",type:"enum",defaultValue:"circle",options:[{label:"circle",value:"circle"},{label:"round",value:"round"}]}];const p={};p.setup=(a,t)=>{const e=s(u),n=[{label:"avatar",value:"avatar"}],r={avatar:'<t-avatar image="https://tdesign.gtimg.com/site/avatar.jpg" v-bind="configProps" />'},o=s(`<template>${r[n[0].value].trim()}</template>`);function m(l){o.value=`<template>${r[l].trim()}</template>`}return{configList:e,panelList:n,usageCode:o,onPanelChange:m}};var c=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("base-usage",{attrs:{code:a.usageCode,"config-list":a.configList,"panel-list":a.panelList},on:{PanelChange:a.onPanelChange},scopedSlots:a._u([{key:"avatar",fn:function(n){var r=n.configProps;return[e("t-avatar",a._b({attrs:{image:"https://tdesign.gtimg.com/site/avatar.jpg"}},"t-avatar",r,!1))]}}])})},d=[];c._withStripped=!0;const i={};var v=g(p,c,d,!1,f,null,null,null);function f(a){for(let t in i)this[t]=i[t]}v.options.__file="../src/avatar/_usage/index.vue";var P=function(){return v.exports}();export{h as D,P as U,z as a,W as b,C as c,b as d,_ as e,I as f,j as g,k as h,U as i,D as j,E as k,A as l,L as m};
