import{Y as l,n as d}from"./index.663c003f.js";var x=`<template>
  <div>
    <t-head-menu theme="light" v-model="menu1Value" @change="changeHandler">
      <template #logo>
        <img height="28" src="https://tdesign.gtimg.com/site/baseLogo-light.png" alt="logo" />
      </template>
      <t-menu-item value="item1">\u83DC\u53551</t-menu-item>
      <t-menu-item value="item2">\u83DC\u53552</t-menu-item>
      <t-menu-item value="item4" :disabled="true">\u7981\u7528\u83DC\u5355</t-menu-item>
      <template #operations>
        <t-button variant="text" shape="square">
          <search-icon slot="icon" shape="square" />
        </t-button>
        <t-button variant="text" shape="square">
          <mail-icon slot="icon" />
        </t-button>
        <t-button variant="text" shape="square">
          <user-icon slot="icon" />
        </t-button>
        <t-button variant="text" shape="square">
          <ellipsis-icon slot="icon" />
        </t-button>
      </template>
    </t-head-menu>

    <br />

    <t-head-menu theme="dark" v-model="menu2Value" height="120px">
      <img slot="logo" height="28" src="https://tdesign.gtimg.com/site/baseLogo-dark.png" alt="logo" />
      <t-menu-item value="item1">\u83DC\u53551</t-menu-item>
      <t-menu-item value="item2">\u83DC\u53552</t-menu-item>
      <t-menu-item value="item4" :disabled="true">\u7981\u7528\u83DC\u5355</t-menu-item>
      <template #operations>
        <div class="t-demo-menu--dark">
          <t-button variant="text" shape="square">
            <search-icon slot="icon" />
          </t-button>
          <t-button variant="text" shape="square">
            <mail-icon slot="icon" />
          </t-button>
          <t-button variant="text" shape="square">
            <user-icon slot="icon" />
          </t-button>
          <t-button variant="text" shape="square">
            <ellipsis-icon slot="icon" />
          </t-button>
        </div>
      </template>
    </t-head-menu>
  </div>
</template>

<script>
import {
  SearchIcon, MailIcon, UserIcon, EllipsisIcon,
} from 'tdesign-icons-vue';

export default {
  components: {
    SearchIcon,
    MailIcon,
    UserIcon,
    EllipsisIcon,
  },
  data() {
    return {
      menu1Value: 'item2',
      menu2Value: 'item1',
    };
  },
  methods: {
    changeHandler(active) {
      console.log('change', active);
    },
  },
};
<\/script>

<style lang="less" scoped>
.t-menu__operations {
  .t-button {
    margin-left: 8px;
  }
}
.t-demo-menu--dark {
  .t-button {
    color: #fff;

    &:hover {
      background-color: #4b4b4b;
      border-color: transparent;
      --ripple-color: #383838;
    }
  }
}
</style>
`,f=`<template>
  <div>
    <t-head-menu theme="light" v-model="menu1Value" @change="changeHandler">
      <template #logo>
        <img height="28" src="https://tdesign.gtimg.com/site/baseLogo-light.png" alt="logo" />
      </template>
      <t-menu-item value="item1">\u83DC\u53551</t-menu-item>
      <t-menu-item value="item2">\u83DC\u53552</t-menu-item>
      <t-menu-item value="item4" :disabled="true">\u7981\u7528\u83DC\u5355</t-menu-item>
      <template #operations>
        <t-button variant="text" shape="square">
          <search-icon slot="icon" shape="square" />
        </t-button>
        <t-button variant="text" shape="square">
          <mail-icon slot="icon" />
        </t-button>
        <t-button variant="text" shape="square">
          <user-icon slot="icon" />
        </t-button>
        <t-button variant="text" shape="square">
          <ellipsis-icon slot="icon" />
        </t-button>
      </template>
    </t-head-menu>

    <br />

    <t-head-menu theme="dark" v-model="menu2Value" height="120px">
      <img slot="logo" height="28" src="https://tdesign.gtimg.com/site/baseLogo-dark.png" alt="logo" />
      <t-menu-item value="item1">\u83DC\u53551</t-menu-item>
      <t-menu-item value="item2">\u83DC\u53552</t-menu-item>
      <t-menu-item value="item4" :disabled="true">\u7981\u7528\u83DC\u5355</t-menu-item>
      <template #operations>
        <div class="t-demo-menu--dark">
          <t-button variant="text" shape="square">
            <search-icon slot="icon" />
          </t-button>
          <t-button variant="text" shape="square">
            <mail-icon slot="icon" />
          </t-button>
          <t-button variant="text" shape="square">
            <user-icon slot="icon" />
          </t-button>
          <t-button variant="text" shape="square">
            <ellipsis-icon slot="icon" />
          </t-button>
        </div>
      </template>
    </t-head-menu>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {
  SearchIcon, MailIcon, UserIcon, EllipsisIcon,
} from 'tdesign-icons-vue';

const menu1Value = ref('item2');
const menu2Value = ref('item1');
const changeHandler = (active) => {
  console.log('change', active);
};
<\/script>

<style lang="less" scoped>
.t-menu__operations {
  .t-button {
    margin-left: 8px;
  }
}
.t-demo-menu--dark {
  .t-button {
    color: #fff;

    &:hover {
      background-color: #4b4b4b;
      border-color: transparent;
      --ripple-color: #383838;
    }
  }
}
</style>
`,q=`<template>
  <div class="box">
    <t-head-menu defaultValue="1-1" :defaultExpanded="expanded">
      <template #logo>
        <img height="28" src="https://tdesign.gtimg.com/site/baseLogo-light.png" alt="logo" />
      </template>
      <t-submenu value="1">
        <template #title>
          <span>\u83DC\u53551</span>
        </template>
        <t-menu-item value="1-1">\u5B50\u83DC\u53551-1</t-menu-item>
        <t-menu-item value="1-2">\u5B50\u83DC\u53551-2</t-menu-item>
        <t-menu-item value="1-3">\u5B50\u83DC\u53551-3</t-menu-item>
      </t-submenu>
      <t-submenu value="2">
        <template #title>
          <span>\u83DC\u53552</span>
        </template>
        <t-menu-item value="2-1">\u5B50\u83DC\u53552-1</t-menu-item>
        <t-menu-item value="2-2">\u5B50\u83DC\u53552-2</t-menu-item>
        <t-menu-item value="2-3">\u5B50\u83DC\u53552-3</t-menu-item>
      </t-submenu>
      <template #operations>
        <t-button variant="text" shape="square">
          <search-icon slot="icon" shape="square" />
        </t-button>
        <t-button variant="text" shape="square">
          <mail-icon slot="icon" />
        </t-button>
        <t-button variant="text" shape="square">
          <user-icon slot="icon" />
        </t-button>
        <t-button variant="text" shape="square">
          <ellipsis-icon slot="icon" />
        </t-button>
      </template>
    </t-head-menu>
    <t-head-menu
      defaultValue="1-1"
      theme="dark"
      :expanded="expanded2"
      @expand="expanded2 = $event"
      style="margin-top: 24px"
    >
      <template #logo>
        <img height="28" src="https://tdesign.gtimg.com/site/baseLogo-dark.png" alt="logo" />
      </template>
      <t-submenu value="1">
        <template #title>
          <span>\u83DC\u53551</span>
        </template>
        <t-menu-item value="1-1">\u5B50\u83DC\u53551-1</t-menu-item>
        <t-menu-item value="1-2">\u5B50\u83DC\u53551-2</t-menu-item>
        <t-menu-item value="1-3">\u5B50\u83DC\u53551-3</t-menu-item>
      </t-submenu>
      <t-submenu value="2">
        <template #title>
          <span>\u83DC\u53552</span>
        </template>
        <t-menu-item value="2-1">\u5B50\u83DC\u53552-1</t-menu-item>
        <t-menu-item value="2-2">\u5B50\u83DC\u53552-2</t-menu-item>
        <t-menu-item value="2-3">\u5B50\u83DC\u53552-3</t-menu-item>
      </t-submenu>
      <template #operations>
        <div class="t-demo-menu--dark">
          <t-button variant="text" shape="square">
            <search-icon slot="icon" />
          </t-button>
          <t-button variant="text" shape="square">
            <mail-icon slot="icon" />
          </t-button>
          <t-button variant="text" shape="square">
            <user-icon slot="icon" />
          </t-button>
          <t-button variant="text" shape="square">
            <ellipsis-icon slot="icon" />
          </t-button>
        </div>
      </template>
    </t-head-menu>
  </div>
</template>

<script>
import {
  SearchIcon, MailIcon, UserIcon, EllipsisIcon,
} from 'tdesign-icons-vue';

export default {
  components: {
    SearchIcon,
    MailIcon,
    UserIcon,
    EllipsisIcon,
  },
  data() {
    return {
      expanded: ['1'],
      expanded2: ['1'],
    };
  },
};
<\/script>
<style lang="less" scoped>
.t-menu__operations {
  .t-button {
    margin-left: 8px;
  }
}

.t-demo-menu--dark {
  .t-button {
    color: #fff;

    &:hover {
      background-color: #4b4b4b;
      border-color: transparent;
      --ripple-color: #383838;
    }
  }
}
</style>
`,y=`<template>
  <div class="box">
    <t-head-menu defaultValue="1-1" :defaultExpanded="expanded">
      <template #logo>
        <img height="28" src="https://tdesign.gtimg.com/site/baseLogo-light.png" alt="logo" />
      </template>
      <t-submenu value="1">
        <template #title>
          <span>\u83DC\u53551</span>
        </template>
        <t-menu-item value="1-1">\u5B50\u83DC\u53551-1</t-menu-item>
        <t-menu-item value="1-2">\u5B50\u83DC\u53551-2</t-menu-item>
        <t-menu-item value="1-3">\u5B50\u83DC\u53551-3</t-menu-item>
      </t-submenu>
      <t-submenu value="2">
        <template #title>
          <span>\u83DC\u53552</span>
        </template>
        <t-menu-item value="2-1">\u5B50\u83DC\u53552-1</t-menu-item>
        <t-menu-item value="2-2">\u5B50\u83DC\u53552-2</t-menu-item>
        <t-menu-item value="2-3">\u5B50\u83DC\u53552-3</t-menu-item>
      </t-submenu>
      <template #operations>
        <t-button variant="text" shape="square">
          <search-icon slot="icon" shape="square" />
        </t-button>
        <t-button variant="text" shape="square">
          <mail-icon slot="icon" />
        </t-button>
        <t-button variant="text" shape="square">
          <user-icon slot="icon" />
        </t-button>
        <t-button variant="text" shape="square">
          <ellipsis-icon slot="icon" />
        </t-button>
      </template>
    </t-head-menu>
    <t-head-menu
      defaultValue="1-1"
      theme="dark"
      :expanded="expanded2"
      @expand="expanded2 = $event"
      style="margin-top: 24px"
    >
      <template #logo>
        <img height="28" src="https://tdesign.gtimg.com/site/baseLogo-dark.png" alt="logo" />
      </template>
      <t-submenu value="1">
        <template #title>
          <span>\u83DC\u53551</span>
        </template>
        <t-menu-item value="1-1">\u5B50\u83DC\u53551-1</t-menu-item>
        <t-menu-item value="1-2">\u5B50\u83DC\u53551-2</t-menu-item>
        <t-menu-item value="1-3">\u5B50\u83DC\u53551-3</t-menu-item>
      </t-submenu>
      <t-submenu value="2">
        <template #title>
          <span>\u83DC\u53552</span>
        </template>
        <t-menu-item value="2-1">\u5B50\u83DC\u53552-1</t-menu-item>
        <t-menu-item value="2-2">\u5B50\u83DC\u53552-2</t-menu-item>
        <t-menu-item value="2-3">\u5B50\u83DC\u53552-3</t-menu-item>
      </t-submenu>
      <template #operations>
        <div class="t-demo-menu--dark">
          <t-button variant="text" shape="square">
            <search-icon slot="icon" />
          </t-button>
          <t-button variant="text" shape="square">
            <mail-icon slot="icon" />
          </t-button>
          <t-button variant="text" shape="square">
            <user-icon slot="icon" />
          </t-button>
          <t-button variant="text" shape="square">
            <ellipsis-icon slot="icon" />
          </t-button>
        </div>
      </template>
    </t-head-menu>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {
  SearchIcon, MailIcon, UserIcon, EllipsisIcon,
} from 'tdesign-icons-vue';

const expanded = ref(['1']);
const expanded2 = ref(['1']);
<\/script>
<style lang="less" scoped>
.t-menu__operations {
  .t-button {
    margin-left: 8px;
  }
}

.t-demo-menu--dark {
  .t-button {
    color: #fff;

    &:hover {
      background-color: #4b4b4b;
      border-color: transparent;
      --ripple-color: #383838;
    }
  }
}
</style>
`,k=`<template>
  <div class="box">
    <t-head-menu defaultValue="2-1" expandType="popup">
      <template #logo>
        <img height="28" src="https://tdesign.gtimg.com/site/baseLogo-light.png" alt="logo" />
      </template>
      <t-submenu value="1">
        <template #title>
          <span>\u83DC\u53551</span>
        </template>
        <t-submenu value="1-0" title="\u5B50\u83DC\u53551-1">
          <t-menu-item value="1-1-1">\u5B50\u83DC\u53551-1-1</t-menu-item>
          <t-menu-item value="1-1-2">\u5B50\u83DC\u53551-1-2</t-menu-item>
          <t-menu-item value="1-1-3">\u5B50\u83DC\u53551-1-3</t-menu-item>
        </t-submenu>
        <t-menu-item value="1-2">\u5B50\u83DC\u53551-2</t-menu-item>
        <t-menu-item value="1-3">\u5B50\u83DC\u53551-3</t-menu-item>
        <t-menu-item value="1-4">\u5B50\u83DC\u53551-4</t-menu-item>
        <t-submenu value="1-5" title="\u5B50\u83DC\u53551-5">
          <t-menu-item value="1-5-1">\u5B50\u83DC\u53551-5-1</t-menu-item>
          <t-menu-item value="1-5-2">\u5B50\u83DC\u53551-5-2</t-menu-item>
          <t-menu-item value="1-5-3">\u5B50\u83DC\u53551-5-3</t-menu-item>
        </t-submenu>
      </t-submenu>
      <t-submenu value="2" title="\u83DC\u53552">
        <t-menu-item value="2-1">\u5B50\u83DC\u53552-1</t-menu-item>
        <t-menu-item value="2-2">\u5B50\u83DC\u53552-2</t-menu-item>
        <t-menu-item value="2-3">\u5B50\u83DC\u53552-3</t-menu-item>
      </t-submenu>
      <template #operations>
        <t-button variant="text" shape="square">
          <search-icon slot="icon" shape="square" />
        </t-button>
        <t-button variant="text" shape="square">
          <mail-icon slot="icon" />
        </t-button>
        <t-button variant="text" shape="square">
          <user-icon slot="icon" />
        </t-button>
        <t-button variant="text" shape="square">
          <ellipsis-icon slot="icon" />
        </t-button>
      </template>
    </t-head-menu>

    <t-head-menu defaultValue="2-1" theme="dark" expandType="popup" style="margin-top: 24px">
      <template #logo>
        <img height="28" src="https://tdesign.gtimg.com/site/baseLogo-dark.png" alt="logo" />
      </template>
      <t-submenu value="1">
        <template #title>
          <span>\u83DC\u53551</span>
        </template>
        <t-menu-item value="1-1">\u5B50\u83DC\u53551-1</t-menu-item>
        <t-menu-item value="1-2">\u5B50\u83DC\u53551-2</t-menu-item>
        <t-menu-item value="1-3">\u5B50\u83DC\u53551-3</t-menu-item>
      </t-submenu>
      <t-submenu
        value="2"
        :popup-props="{
          overlayClassName: 'custom-popup-class',
        }"
      >
        <template #title>
          <span>\u83DC\u53552</span>
        </template>
        <t-menu-item value="2-1">\u5B50\u83DC\u53552-1</t-menu-item>
        <t-menu-item value="2-2">\u5B50\u83DC\u53552-2</t-menu-item>
        <t-menu-item value="2-3">\u5B50\u83DC\u53552-3</t-menu-item>
      </t-submenu>
      <template #operations>
        <div class="t-demo-menu--dark">
          <t-button variant="text" shape="square">
            <search-icon slot="icon" />
          </t-button>
          <t-button variant="text" shape="square">
            <mail-icon slot="icon" />
          </t-button>
          <t-button variant="text" shape="square">
            <user-icon slot="icon" />
          </t-button>
          <t-button variant="text" shape="square">
            <ellipsis-icon slot="icon" />
          </t-button>
        </div>
      </template>
    </t-head-menu>
  </div>
</template>

<script>
import {
  SearchIcon, MailIcon, UserIcon, EllipsisIcon,
} from 'tdesign-icons-vue';

export default {
  components: {
    SearchIcon,
    MailIcon,
    UserIcon,
    EllipsisIcon,
  },
};
<\/script>

<style lang="less" scoped>
.t-menu__operations {
  .t-button {
    margin-left: 8px;
  }
}

.t-demo-menu--dark {
  .t-button {
    color: #fff;

    &:hover {
      background-color: #4b4b4b;
      border-color: transparent;
      --ripple-color: #383838;
    }
  }
}
</style>
`,I=`<template>
  <div class="box">
    <t-head-menu defaultValue="2-1" expandType="popup">
      <template #logo>
        <img height="28" src="https://tdesign.gtimg.com/site/baseLogo-light.png" alt="logo" />
      </template>
      <t-submenu value="1">
        <template #title>
          <span>\u83DC\u53551</span>
        </template>
        <t-submenu value="1-0" title="\u5B50\u83DC\u53551-1">
          <t-menu-item value="1-1-1">\u5B50\u83DC\u53551-1-1</t-menu-item>
          <t-menu-item value="1-1-2">\u5B50\u83DC\u53551-1-2</t-menu-item>
          <t-menu-item value="1-1-3">\u5B50\u83DC\u53551-1-3</t-menu-item>
        </t-submenu>
        <t-menu-item value="1-2">\u5B50\u83DC\u53551-2</t-menu-item>
        <t-menu-item value="1-3">\u5B50\u83DC\u53551-3</t-menu-item>
        <t-menu-item value="1-4">\u5B50\u83DC\u53551-4</t-menu-item>
        <t-submenu value="1-5" title="\u5B50\u83DC\u53551-5">
          <t-menu-item value="1-5-1">\u5B50\u83DC\u53551-5-1</t-menu-item>
          <t-menu-item value="1-5-2">\u5B50\u83DC\u53551-5-2</t-menu-item>
          <t-menu-item value="1-5-3">\u5B50\u83DC\u53551-5-3</t-menu-item>
        </t-submenu>
      </t-submenu>
      <t-submenu value="2" title="\u83DC\u53552">
        <t-menu-item value="2-1">\u5B50\u83DC\u53552-1</t-menu-item>
        <t-menu-item value="2-2">\u5B50\u83DC\u53552-2</t-menu-item>
        <t-menu-item value="2-3">\u5B50\u83DC\u53552-3</t-menu-item>
      </t-submenu>
      <template #operations>
        <t-button variant="text" shape="square">
          <search-icon slot="icon" shape="square" />
        </t-button>
        <t-button variant="text" shape="square">
          <mail-icon slot="icon" />
        </t-button>
        <t-button variant="text" shape="square">
          <user-icon slot="icon" />
        </t-button>
        <t-button variant="text" shape="square">
          <ellipsis-icon slot="icon" />
        </t-button>
      </template>
    </t-head-menu>

    <t-head-menu defaultValue="2-1" theme="dark" expandType="popup" style="margin-top: 24px">
      <template #logo>
        <img height="28" src="https://tdesign.gtimg.com/site/baseLogo-dark.png" alt="logo" />
      </template>
      <t-submenu value="1">
        <template #title>
          <span>\u83DC\u53551</span>
        </template>
        <t-menu-item value="1-1">\u5B50\u83DC\u53551-1</t-menu-item>
        <t-menu-item value="1-2">\u5B50\u83DC\u53551-2</t-menu-item>
        <t-menu-item value="1-3">\u5B50\u83DC\u53551-3</t-menu-item>
      </t-submenu>
      <t-submenu
        value="2"
        :popup-props="{
          overlayClassName: 'custom-popup-class',
        }"
      >
        <template #title>
          <span>\u83DC\u53552</span>
        </template>
        <t-menu-item value="2-1">\u5B50\u83DC\u53552-1</t-menu-item>
        <t-menu-item value="2-2">\u5B50\u83DC\u53552-2</t-menu-item>
        <t-menu-item value="2-3">\u5B50\u83DC\u53552-3</t-menu-item>
      </t-submenu>
      <template #operations>
        <div class="t-demo-menu--dark">
          <t-button variant="text" shape="square">
            <search-icon slot="icon" />
          </t-button>
          <t-button variant="text" shape="square">
            <mail-icon slot="icon" />
          </t-button>
          <t-button variant="text" shape="square">
            <user-icon slot="icon" />
          </t-button>
          <t-button variant="text" shape="square">
            <ellipsis-icon slot="icon" />
          </t-button>
        </div>
      </template>
    </t-head-menu>
  </div>
</template>

<script setup>
import {
  SearchIcon, MailIcon, UserIcon, EllipsisIcon,
} from 'tdesign-icons-vue';
<\/script>

<style lang="less" scoped>
.t-menu__operations {
  .t-button {
    margin-left: 8px;
  }
}

.t-demo-menu--dark {
  .t-button {
    color: #fff;

    &:hover {
      background-color: #4b4b4b;
      border-color: transparent;
      --ripple-color: #383838;
    }
  }
}
</style>
`,_=`<template>
  <t-head-menu theme="dark" defaultValue="item2">
    <t-menu-item value="item1">\u83DC\u53551</t-menu-item>
    <t-menu-item value="item2">\u83DC\u53552</t-menu-item>
    <t-menu-item value="item3">\u83DC\u53553</t-menu-item>
    <t-menu-item value="item4" :disabled="true">\u7981\u7528\u83DC\u5355</t-menu-item>
    <template #operations>
      <div class="t-demo-menu--dark">
        <t-button variant="text" shape="square">
          <search-icon slot="icon" />
        </t-button>
        <t-button variant="text" shape="square">
          <mail-icon slot="icon" />
        </t-button>
        <t-button variant="text" shape="square">
          <user-icon slot="icon" />
        </t-button>
        <t-button variant="text" shape="square">
          <ellipsis-icon slot="icon" />
        </t-button>
      </div>
    </template>
  </t-head-menu>
</template>

<script>
import {
  SearchIcon, MailIcon, UserIcon, EllipsisIcon,
} from 'tdesign-icons-vue';

export default {
  components: {
    SearchIcon,
    MailIcon,
    UserIcon,
    EllipsisIcon,
  },
};
<\/script>

<style lang="less" scoped>
.t-menu__operations {
  .t-button {
    margin-left: 8px;
  }
}

.t-demo-menu--dark {
  .t-button {
    color: #fff;

    &:hover {
      background-color: #4b4b4b;
      border-color: transparent;
      --ripple-color: #383838;
    }
  }
}
</style>
`,C=`<template>
  <t-head-menu theme="dark" defaultValue="item2">
    <t-menu-item value="item1">\u83DC\u53551</t-menu-item>
    <t-menu-item value="item2">\u83DC\u53552</t-menu-item>
    <t-menu-item value="item3">\u83DC\u53553</t-menu-item>
    <t-menu-item value="item4" :disabled="true">\u7981\u7528\u83DC\u5355</t-menu-item>
    <template #operations>
      <div class="t-demo-menu--dark">
        <t-button variant="text" shape="square">
          <search-icon slot="icon" />
        </t-button>
        <t-button variant="text" shape="square">
          <mail-icon slot="icon" />
        </t-button>
        <t-button variant="text" shape="square">
          <user-icon slot="icon" />
        </t-button>
        <t-button variant="text" shape="square">
          <ellipsis-icon slot="icon" />
        </t-button>
      </div>
    </template>
  </t-head-menu>
</template>

<script setup>
import {
  SearchIcon, MailIcon, UserIcon, EllipsisIcon,
} from 'tdesign-icons-vue';
<\/script>

<style lang="less" scoped>
.t-menu__operations {
  .t-button {
    margin-left: 8px;
  }
}

.t-demo-menu--dark {
  .t-button {
    color: #fff;

    &:hover {
      background-color: #4b4b4b;
      border-color: transparent;
      --ripple-color: #383838;
    }
  }
}
</style>
`,V=`<template>
  <div class="box">
    <t-menu theme="light" defaultValue="item1" @change="changeHandler" style="margin-right: 40px">
      <template #logo>
        <img height="28" src="https://tdesign.gtimg.com/site/baseLogo-light.png" alt="logo" />
      </template>
      <t-menu-item value="item1" href="/vue" target="_blank">\u4EEA\u8868\u76D8</t-menu-item>
      <t-menu-item value="item2">\u8D44\u6E90\u5217\u8868</t-menu-item>
      <t-menu-item value="item3">\u6839\u76EE\u5F55</t-menu-item>
      <t-menu-item value="item4" :disabled="true">\u8C03\u5EA6\u5E73\u53F0</t-menu-item>
      <t-menu-item value="item5">\u7CBE\u51C6\u76D1\u63A7</t-menu-item>
      <t-menu-item value="item6">\u6D88\u606F\u533A</t-menu-item>
      <t-menu-item value="item7">\u4E2A\u4EBA\u4E2D\u5FC3</t-menu-item>
      <t-menu-item value="item8">\u89C6\u9891\u533A</t-menu-item>
      <t-menu-item value="item9">\u8D44\u6E90\u7F16\u8F91</t-menu-item>
    </t-menu>

    <t-menu theme="light" defaultValue="dashboard" style="margin-right: 40px">
      <template #logo>
        <img height="28" src="https://tdesign.gtimg.com/site/baseLogo-light.png" alt="logo" />
      </template>
      <t-menu-item value="dashboard">
        <template #icon>
          <icon name="dashboard" />
        </template>
        \u4EEA\u8868\u76D8
      </t-menu-item>
      <t-menu-item value="resource">
        <template #icon>
          <icon name="server" />
        </template>
        \u8D44\u6E90\u5217\u8868
      </t-menu-item>
      <t-menu-item value="root">
        <template #icon>
          <icon name="root-list" />
        </template>
        \u6839\u76EE\u5F55
      </t-menu-item>
      <t-menu-item value="control-platform">
        <template #icon>
          <icon name="control-platform" />
        </template>
        \u8C03\u5EA6\u5E73\u53F0
      </t-menu-item>
      <t-menu-item value="precise-monitor">
        <template #icon>
          <icon name="precise-monitor" />
        </template>
        \u7CBE\u51C6\u76D1\u63A7
      </t-menu-item>
      <t-menu-item value="mail">
        <template #icon>
          <icon name="mail" />
        </template>
        \u6D88\u606F\u533A
      </t-menu-item>
      <t-menu-item value="user-circle">
        <template #icon>
          <icon name="user-circle" />
        </template>
        \u4E2A\u4EBA\u4E2D\u5FC3
      </t-menu-item>
      <t-menu-item value="play-circle">
        <template #icon>
          <icon name="play-circle" />
        </template>
        \u89C6\u9891\u533A
      </t-menu-item>
      <t-menu-item value="edit1">
        <template #icon>
          <icon name="edit-1" />
        </template>
        \u8D44\u6E90\u7F16\u8F91
      </t-menu-item>
    </t-menu>

    <t-menu theme="dark" defaultValue="dashboard">
      <img slot="logo" height="28" src="https://tdesign.gtimg.com/site/baseLogo-dark.png" alt="logo" />
      <t-menu-item value="dashboard">
        <template #icon>
          <icon name="dashboard" />
        </template>
        \u4EEA\u8868\u76D8
      </t-menu-item>
      <t-menu-item value="resource">
        <template #icon>
          <icon name="server" />
        </template>
        \u8D44\u6E90\u5217\u8868
      </t-menu-item>
      <t-menu-item value="root">
        <template #icon>
          <icon name="root-list" />
        </template>
        \u6839\u76EE\u5F55
      </t-menu-item>
      <t-menu-item value="control-platform">
        <template #icon>
          <icon name="control-platform" />
        </template>
        \u8C03\u5EA6\u5E73\u53F0
      </t-menu-item>
      <t-menu-item value="precise-monitor">
        <template #icon>
          <icon name="precise-monitor" />
        </template>
        \u7CBE\u51C6\u76D1\u63A7
      </t-menu-item>
      <t-menu-item value="mail">
        <template #icon>
          <icon name="mail" />
        </template>
        \u6D88\u606F\u533A
      </t-menu-item>
      <t-menu-item value="user-circle">
        <template #icon>
          <icon name="user-circle" />
        </template>
        \u4E2A\u4EBA\u4E2D\u5FC3
      </t-menu-item>
      <t-menu-item value="play-circle">
        <template #icon>
          <icon name="play-circle" />
        </template>
        \u89C6\u9891\u533A
      </t-menu-item>
      <t-menu-item value="edit1">
        <template #icon>
          <icon name="edit-1" />
        </template>
        \u8D44\u6E90\u7F16\u8F91
      </t-menu-item>
    </t-menu>
  </div>
</template>

<script>
import { Icon } from 'tdesign-icons-vue';

export default {
  components: {
    Icon,
  },
  methods: {
    changeHandler(active) {
      console.log('change', active);
    },
  },
};
<\/script>
`,L=`<template>
  <div class="box">
    <t-menu theme="light" defaultValue="item1" @change="changeHandler" style="margin-right: 40px">
      <template #logo>
        <img height="28" src="https://tdesign.gtimg.com/site/baseLogo-light.png" alt="logo" />
      </template>
      <t-menu-item value="item1" href="/vue" target="_blank">\u4EEA\u8868\u76D8</t-menu-item>
      <t-menu-item value="item2">\u8D44\u6E90\u5217\u8868</t-menu-item>
      <t-menu-item value="item3">\u6839\u76EE\u5F55</t-menu-item>
      <t-menu-item value="item4" :disabled="true">\u8C03\u5EA6\u5E73\u53F0</t-menu-item>
      <t-menu-item value="item5">\u7CBE\u51C6\u76D1\u63A7</t-menu-item>
      <t-menu-item value="item6">\u6D88\u606F\u533A</t-menu-item>
      <t-menu-item value="item7">\u4E2A\u4EBA\u4E2D\u5FC3</t-menu-item>
      <t-menu-item value="item8">\u89C6\u9891\u533A</t-menu-item>
      <t-menu-item value="item9">\u8D44\u6E90\u7F16\u8F91</t-menu-item>
    </t-menu>

    <t-menu theme="light" defaultValue="dashboard" style="margin-right: 40px">
      <template #logo>
        <img height="28" src="https://tdesign.gtimg.com/site/baseLogo-light.png" alt="logo" />
      </template>
      <t-menu-item value="dashboard">
        <template #icon>
          <icon name="dashboard" />
        </template>
        \u4EEA\u8868\u76D8
      </t-menu-item>
      <t-menu-item value="resource">
        <template #icon>
          <icon name="server" />
        </template>
        \u8D44\u6E90\u5217\u8868
      </t-menu-item>
      <t-menu-item value="root">
        <template #icon>
          <icon name="root-list" />
        </template>
        \u6839\u76EE\u5F55
      </t-menu-item>
      <t-menu-item value="control-platform">
        <template #icon>
          <icon name="control-platform" />
        </template>
        \u8C03\u5EA6\u5E73\u53F0
      </t-menu-item>
      <t-menu-item value="precise-monitor">
        <template #icon>
          <icon name="precise-monitor" />
        </template>
        \u7CBE\u51C6\u76D1\u63A7
      </t-menu-item>
      <t-menu-item value="mail">
        <template #icon>
          <icon name="mail" />
        </template>
        \u6D88\u606F\u533A
      </t-menu-item>
      <t-menu-item value="user-circle">
        <template #icon>
          <icon name="user-circle" />
        </template>
        \u4E2A\u4EBA\u4E2D\u5FC3
      </t-menu-item>
      <t-menu-item value="play-circle">
        <template #icon>
          <icon name="play-circle" />
        </template>
        \u89C6\u9891\u533A
      </t-menu-item>
      <t-menu-item value="edit1">
        <template #icon>
          <icon name="edit-1" />
        </template>
        \u8D44\u6E90\u7F16\u8F91
      </t-menu-item>
    </t-menu>

    <t-menu theme="dark" defaultValue="dashboard">
      <img slot="logo" height="28" src="https://tdesign.gtimg.com/site/baseLogo-dark.png" alt="logo" />
      <t-menu-item value="dashboard">
        <template #icon>
          <icon name="dashboard" />
        </template>
        \u4EEA\u8868\u76D8
      </t-menu-item>
      <t-menu-item value="resource">
        <template #icon>
          <icon name="server" />
        </template>
        \u8D44\u6E90\u5217\u8868
      </t-menu-item>
      <t-menu-item value="root">
        <template #icon>
          <icon name="root-list" />
        </template>
        \u6839\u76EE\u5F55
      </t-menu-item>
      <t-menu-item value="control-platform">
        <template #icon>
          <icon name="control-platform" />
        </template>
        \u8C03\u5EA6\u5E73\u53F0
      </t-menu-item>
      <t-menu-item value="precise-monitor">
        <template #icon>
          <icon name="precise-monitor" />
        </template>
        \u7CBE\u51C6\u76D1\u63A7
      </t-menu-item>
      <t-menu-item value="mail">
        <template #icon>
          <icon name="mail" />
        </template>
        \u6D88\u606F\u533A
      </t-menu-item>
      <t-menu-item value="user-circle">
        <template #icon>
          <icon name="user-circle" />
        </template>
        \u4E2A\u4EBA\u4E2D\u5FC3
      </t-menu-item>
      <t-menu-item value="play-circle">
        <template #icon>
          <icon name="play-circle" />
        </template>
        \u89C6\u9891\u533A
      </t-menu-item>
      <t-menu-item value="edit1">
        <template #icon>
          <icon name="edit-1" />
        </template>
        \u8D44\u6E90\u7F16\u8F91
      </t-menu-item>
    </t-menu>
  </div>
</template>

<script setup>
import { Icon } from 'tdesign-icons-vue';

const changeHandler = (active) => {
  console.log('change', active);
};
<\/script>
`,U=`<template>
  <div class="box">
    <t-menu theme="light" defaultValue="3-2" expandMutex :defaultExpanded="expanded" :collapsed="collapsed">
      <t-submenu title="\u6D88\u606F\u533A" value="3">
        <template #icon>
          <icon name="mail" />
        </template>
        <t-submenu title="\u4E8C\u7EA7\u83DC\u5355" value="3-1">
          <t-menu-item value="3-1-1">\u4E09\u7EA7\u83DC\u5355\u5185\u5BB9</t-menu-item>
          <t-menu-item value="3-1-2">\u4E09\u7EA7\u83DC\u5355\u5185\u5BB9</t-menu-item>
          <t-menu-item value="3-1-3">\u4E09\u7EA7\u83DC\u5355\u5185\u5BB9</t-menu-item>
        </t-submenu>
        <t-submenu title="\u4E8C\u7EA7\u83DC\u5355" value="3-5">
          <t-menu-item value="3-5-1">\u4E09\u7EA7\u83DC\u5355\u5185\u5BB9</t-menu-item>
          <t-menu-item value="3-5-2">\u4E09\u7EA7\u83DC\u5355\u5185\u5BB9</t-menu-item>
          <t-menu-item value="3-5-3">\u4E09\u7EA7\u83DC\u5355\u5185\u5BB9</t-menu-item>
        </t-submenu>
        <t-menu-item value="3-2">\u4E8C\u7EA7\u83DC\u5355\u5185\u5BB9</t-menu-item>
        <t-menu-item value="3-3">\u4E8C\u7EA7\u83DC\u5355\u5185\u5BB9</t-menu-item>
        <t-menu-item value="3-4">\u4E8C\u7EA7\u83DC\u5355\u5185\u5BB9</t-menu-item>
      </t-submenu>
      <t-menu-item value="user-circle">
        <template #icon>
          <icon name="user-circle" />
        </template>
        \u4E2A\u4EBA\u4E2D\u5FC3
      </t-menu-item>
      <t-submenu disabled title="\u89C6\u9891\u533A" value="4">
        <template #icon>
          <icon name="play-circle" />
        </template>
        <t-menu-item value="4-1">\u4E8C\u7EA7\u83DC\u5355\u5185\u5BB9</t-menu-item>
        <t-menu-item value="4-2">\u4E8C\u7EA7\u83DC\u5355\u5185\u5BB9</t-menu-item>
        <t-menu-item value="4-3">\u4E8C\u7EA7\u83DC\u5355\u5185\u5BB9</t-menu-item>
      </t-submenu>
      <t-menu-item value="edit1">
        <template #icon>
          <icon name="edit-1" />
        </template>
        \u8D44\u6E90\u7F16\u8F91
      </t-menu-item>
      <template #operations>
        <t-button variant="text" shape="square">
          <t-button variant="text" shape="square" @click.native="changeCollapsed">
            <view-list-icon slot="icon" />
          </t-button>
        </t-button>
      </template>
    </t-menu>

    <t-menu
      theme="dark"
      defaultValue="2-1"
      style="margin-left: 40px"
      :expanded="expanded2"
      @expand="expanded2 = $event"
      :collapsed="collapsed2"
    >
      <t-menu-item value="item1">
        <template #icon>
          <icon name="dashboard" />
        </template>
        \u4EEA\u8868\u76D8
      </t-menu-item>
      <t-menu-item value="resource">
        <template #icon>
          <icon name="server" />
        </template>
        \u8D44\u6E90\u5217\u8868
      </t-menu-item>
      <t-menu-item value="root">
        <template #icon>
          <icon name="root-list" />
        </template>
        \u6839\u76EE\u5F55
      </t-menu-item>
      <t-submenu title="\u8C03\u5EA6\u5E73\u53F0" value="2">
        <template #icon>
          <icon name="control-platform" />
        </template>
        <t-menu-item value="2-1">\u4E8C\u7EA7\u83DC\u5355\u5185\u5BB9</t-menu-item>
        <t-menu-item value="2-2">\u4E8C\u7EA7\u83DC\u5355\u5185\u5BB9</t-menu-item>
        <t-menu-item value="2-3">\u4E8C\u7EA7\u83DC\u5355\u5185\u5BB9</t-menu-item>
      </t-submenu>
      <t-menu-item value="precise-monitor">
        <template #icon>
          <icon name="precise-monitor" />
        </template>
        \u7CBE\u51C6\u76D1\u63A7
      </t-menu-item>
      <t-submenu disabled title="\u6D88\u606F\u533A" value="3">
        <template #icon>
          <icon name="mail" />
        </template>
        <t-menu-item value="3-1">\u4E8C\u7EA7\u83DC\u5355\u5185\u5BB9</t-menu-item>
        <t-menu-item value="3-2">\u4E8C\u7EA7\u83DC\u5355\u5185\u5BB9</t-menu-item>
        <t-menu-item value="3-3">\u4E8C\u7EA7\u83DC\u5355\u5185\u5BB9</t-menu-item>
      </t-submenu>
      <t-menu-item value="user-circle">
        <template #icon>
          <icon name="user-circle" />
        </template>
        \u4E2A\u4EBA\u4E2D\u5FC3
      </t-menu-item>
      <t-submenu title="\u89C6\u9891\u533A" value="4">
        <template #icon>
          <icon name="play-circle" />
        </template>
        <t-menu-item value="4-1">\u4E8C\u7EA7\u83DC\u5355\u5185\u5BB9</t-menu-item>
        <t-menu-item value="4-2">\u4E8C\u7EA7\u83DC\u5355\u5185\u5BB9</t-menu-item>
        <t-menu-item value="4-3">\u4E8C\u7EA7\u83DC\u5355\u5185\u5BB9</t-menu-item>
      </t-submenu>
      <t-menu-item value="edit1">
        <template #icon>
          <icon name="edit-1" />
        </template>
        \u8D44\u6E90\u7F16\u8F91
      </t-menu-item>
      <template #operations>
        <t-button class="t-demo-collapse-btn" variant="text" shape="square" @click.native="changeCollapsed2">
          <view-list-icon slot="icon" />
        </t-button>
      </template>
    </t-menu>
  </div>
</template>

<script>
import { Icon, ViewListIcon } from 'tdesign-icons-vue';

export default {
  components: {
    Icon,
    ViewListIcon,
  },
  data() {
    return {
      expanded: ['2', '3'],
      expanded2: ['2'],
      collapsed: false,
      collapsed2: false,
    };
  },
  methods: {
    changeCollapsed() {
      this.collapsed = !this.collapsed;
    },
    changeCollapsed2() {
      this.collapsed2 = !this.collapsed2;
    },
  },
};
<\/script>
<style lang="less" scoped>
.t-demo-collapse-btn {
  color: #fff;

  &:hover {
    background-color: #4b4b4b;
    border-color: transparent;
    --ripple-color: #383838;
  }
}
</style>
`,w=`<template>
  <div class="box">
    <t-menu theme="light" defaultValue="3-2" expandMutex :defaultExpanded="expanded" :collapsed="collapsed">
      <t-submenu title="\u6D88\u606F\u533A" value="3">
        <template #icon>
          <icon name="mail" />
        </template>
        <t-submenu title="\u4E8C\u7EA7\u83DC\u5355" value="3-1">
          <t-menu-item value="3-1-1">\u4E09\u7EA7\u83DC\u5355\u5185\u5BB9</t-menu-item>
          <t-menu-item value="3-1-2">\u4E09\u7EA7\u83DC\u5355\u5185\u5BB9</t-menu-item>
          <t-menu-item value="3-1-3">\u4E09\u7EA7\u83DC\u5355\u5185\u5BB9</t-menu-item>
        </t-submenu>
        <t-submenu title="\u4E8C\u7EA7\u83DC\u5355" value="3-5">
          <t-menu-item value="3-5-1">\u4E09\u7EA7\u83DC\u5355\u5185\u5BB9</t-menu-item>
          <t-menu-item value="3-5-2">\u4E09\u7EA7\u83DC\u5355\u5185\u5BB9</t-menu-item>
          <t-menu-item value="3-5-3">\u4E09\u7EA7\u83DC\u5355\u5185\u5BB9</t-menu-item>
        </t-submenu>
        <t-menu-item value="3-2">\u4E8C\u7EA7\u83DC\u5355\u5185\u5BB9</t-menu-item>
        <t-menu-item value="3-3">\u4E8C\u7EA7\u83DC\u5355\u5185\u5BB9</t-menu-item>
        <t-menu-item value="3-4">\u4E8C\u7EA7\u83DC\u5355\u5185\u5BB9</t-menu-item>
      </t-submenu>
      <t-menu-item value="user-circle">
        <template #icon>
          <icon name="user-circle" />
        </template>
        \u4E2A\u4EBA\u4E2D\u5FC3
      </t-menu-item>
      <t-submenu disabled title="\u89C6\u9891\u533A" value="4">
        <template #icon>
          <icon name="play-circle" />
        </template>
        <t-menu-item value="4-1">\u4E8C\u7EA7\u83DC\u5355\u5185\u5BB9</t-menu-item>
        <t-menu-item value="4-2">\u4E8C\u7EA7\u83DC\u5355\u5185\u5BB9</t-menu-item>
        <t-menu-item value="4-3">\u4E8C\u7EA7\u83DC\u5355\u5185\u5BB9</t-menu-item>
      </t-submenu>
      <t-menu-item value="edit1">
        <template #icon>
          <icon name="edit-1" />
        </template>
        \u8D44\u6E90\u7F16\u8F91
      </t-menu-item>
      <template #operations>
        <t-button variant="text" shape="square">
          <t-button variant="text" shape="square" @click.native="changeCollapsed">
            <view-list-icon slot="icon" />
          </t-button>
        </t-button>
      </template>
    </t-menu>

    <t-menu
      theme="dark"
      defaultValue="2-1"
      style="margin-left: 40px"
      :expanded="expanded2"
      @expand="expanded2 = $event"
      :collapsed="collapsed2"
    >
      <t-menu-item value="item1">
        <template #icon>
          <icon name="dashboard" />
        </template>
        \u4EEA\u8868\u76D8
      </t-menu-item>
      <t-menu-item value="resource">
        <template #icon>
          <icon name="server" />
        </template>
        \u8D44\u6E90\u5217\u8868
      </t-menu-item>
      <t-menu-item value="root">
        <template #icon>
          <icon name="root-list" />
        </template>
        \u6839\u76EE\u5F55
      </t-menu-item>
      <t-submenu title="\u8C03\u5EA6\u5E73\u53F0" value="2">
        <template #icon>
          <icon name="control-platform" />
        </template>
        <t-menu-item value="2-1">\u4E8C\u7EA7\u83DC\u5355\u5185\u5BB9</t-menu-item>
        <t-menu-item value="2-2">\u4E8C\u7EA7\u83DC\u5355\u5185\u5BB9</t-menu-item>
        <t-menu-item value="2-3">\u4E8C\u7EA7\u83DC\u5355\u5185\u5BB9</t-menu-item>
      </t-submenu>
      <t-menu-item value="precise-monitor">
        <template #icon>
          <icon name="precise-monitor" />
        </template>
        \u7CBE\u51C6\u76D1\u63A7
      </t-menu-item>
      <t-submenu disabled title="\u6D88\u606F\u533A" value="3">
        <template #icon>
          <icon name="mail" />
        </template>
        <t-menu-item value="3-1">\u4E8C\u7EA7\u83DC\u5355\u5185\u5BB9</t-menu-item>
        <t-menu-item value="3-2">\u4E8C\u7EA7\u83DC\u5355\u5185\u5BB9</t-menu-item>
        <t-menu-item value="3-3">\u4E8C\u7EA7\u83DC\u5355\u5185\u5BB9</t-menu-item>
      </t-submenu>
      <t-menu-item value="user-circle">
        <template #icon>
          <icon name="user-circle" />
        </template>
        \u4E2A\u4EBA\u4E2D\u5FC3
      </t-menu-item>
      <t-submenu title="\u89C6\u9891\u533A" value="4">
        <template #icon>
          <icon name="play-circle" />
        </template>
        <t-menu-item value="4-1">\u4E8C\u7EA7\u83DC\u5355\u5185\u5BB9</t-menu-item>
        <t-menu-item value="4-2">\u4E8C\u7EA7\u83DC\u5355\u5185\u5BB9</t-menu-item>
        <t-menu-item value="4-3">\u4E8C\u7EA7\u83DC\u5355\u5185\u5BB9</t-menu-item>
      </t-submenu>
      <t-menu-item value="edit1">
        <template #icon>
          <icon name="edit-1" />
        </template>
        \u8D44\u6E90\u7F16\u8F91
      </t-menu-item>
      <template #operations>
        <t-button class="t-demo-collapse-btn" variant="text" shape="square" @click.native="changeCollapsed2">
          <view-list-icon slot="icon" />
        </t-button>
      </template>
    </t-menu>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Icon, ViewListIcon } from 'tdesign-icons-vue';

const expanded = ref(['2', '3']);
const expanded2 = ref(['2']);
const collapsed = ref(false);
const collapsed2 = ref(false);
const changeCollapsed = () => {
  collapsed.value = !collapsed.value;
};
const changeCollapsed2 = () => {
  collapsed2.value = !collapsed2.value;
};
<\/script>
<style lang="less" scoped>
.t-demo-collapse-btn {
  color: #fff;

  &:hover {
    background-color: #4b4b4b;
    border-color: transparent;
    --ripple-color: #383838;
  }
}
</style>
`,E=`<template>
  <t-menu
    theme="light"
    defaultValue="2-1"
    :expanded="expanded"
    :collapsed="collapsed"
    expandMutex
    @expand="handleExpand"
  >
    <template #logo>
      <img :width="collapsed ? 35 : 136" :src="iconUrl" alt="logo" />
    </template>
    <t-menu-item value="item1">
      <template #icon>
        <icon name="dashboard" />
      </template>
      \u4EEA\u8868\u76D8
    </t-menu-item>
    <t-submenu value="2">
      <template #icon>
        <icon name="user-circle" />
      </template>
      <template #title>
        <span>\u4E2A\u4EBA\u4E2D\u5FC3</span>
      </template>
      <t-menu-item value="2-1">\u5B50\u83DC\u5355\u5185\u5BB9\u4E00</t-menu-item>
      <t-menu-item value="2-2">\u5B50\u83DC\u5355\u5185\u5BB9\u4E8C</t-menu-item>
      <t-menu-item value="2-3">\u5B50\u83DC\u5355\u5185\u5BB9\u4E09</t-menu-item>
    </t-submenu>
    <t-submenu value="3">
      <template #icon>
        <icon name="root-list" />
      </template>
      <template #title>
        <span>\u6839\u76EE\u5F55</span>
      </template>
      <t-menu-item value="3-1">\u5B50\u83DC\u5355\u5185\u5BB9\u4E00</t-menu-item>
      <t-menu-item value="3-2">\u5B50\u83DC\u5355\u5185\u5BB9\u4E8C</t-menu-item>
      <t-menu-item value="3-3">\u5B50\u83DC\u5355\u5185\u5BB9\u4E09</t-menu-item>
    </t-submenu>
    <t-menu-item value="item4" :disabled="disabled">
      <template #icon>
        <icon name="server" />
      </template>
      \u8D44\u6E90\u5217\u8868
    </t-menu-item>
    <template #operations>
      <t-button class="t-demo-collapse-btn" variant="text" shape="square" @click.native="changeCollapsed">
        <icon name="view-list" />
      </t-button>
    </template>
  </t-menu>
</template>

<script>
import { Icon } from 'tdesign-icons-vue';

export default {
  components: {
    Icon,
  },
  data() {
    return {
      expanded: ['2'],
      disabled: true,
      collapsed: false,
      iconUrl: 'https://tdesign.gtimg.com/site/baseLogo-light.png',
    };
  },
  methods: {
    changeCollapsed() {
      this.collapsed = !this.collapsed;
      this.iconUrl = this.collapsed
        ? 'https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/site/logo%402x.png'
        : 'https://tdesign.gtimg.com/site/baseLogo-light.png';
    },
    handleExpand(names) {
      console.log('receive handleExpand', names);
    },
  },
};
<\/script>
`,M=`<template>
  <t-menu
    theme="light"
    defaultValue="2-1"
    :expanded="expanded"
    :collapsed="collapsed"
    expandMutex
    @expand="handleExpand"
  >
    <template #logo>
      <img :width="collapsed ? 35 : 136" :src="iconUrl" alt="logo" />
    </template>
    <t-menu-item value="item1">
      <template #icon>
        <icon name="dashboard" />
      </template>
      \u4EEA\u8868\u76D8
    </t-menu-item>
    <t-submenu value="2">
      <template #icon>
        <icon name="user-circle" />
      </template>
      <template #title>
        <span>\u4E2A\u4EBA\u4E2D\u5FC3</span>
      </template>
      <t-menu-item value="2-1">\u5B50\u83DC\u5355\u5185\u5BB9\u4E00</t-menu-item>
      <t-menu-item value="2-2">\u5B50\u83DC\u5355\u5185\u5BB9\u4E8C</t-menu-item>
      <t-menu-item value="2-3">\u5B50\u83DC\u5355\u5185\u5BB9\u4E09</t-menu-item>
    </t-submenu>
    <t-submenu value="3">
      <template #icon>
        <icon name="root-list" />
      </template>
      <template #title>
        <span>\u6839\u76EE\u5F55</span>
      </template>
      <t-menu-item value="3-1">\u5B50\u83DC\u5355\u5185\u5BB9\u4E00</t-menu-item>
      <t-menu-item value="3-2">\u5B50\u83DC\u5355\u5185\u5BB9\u4E8C</t-menu-item>
      <t-menu-item value="3-3">\u5B50\u83DC\u5355\u5185\u5BB9\u4E09</t-menu-item>
    </t-submenu>
    <t-menu-item value="item4" :disabled="disabled">
      <template #icon>
        <icon name="server" />
      </template>
      \u8D44\u6E90\u5217\u8868
    </t-menu-item>
    <template #operations>
      <t-button class="t-demo-collapse-btn" variant="text" shape="square" @click.native="changeCollapsed">
        <icon name="view-list" />
      </t-button>
    </template>
  </t-menu>
</template>

<script setup>
import { ref } from 'vue';
import { Icon } from 'tdesign-icons-vue';

const expanded = ref(['2']);
const disabled = ref(true);
const collapsed = ref(false);
const iconUrl = ref('https://tdesign.gtimg.com/site/baseLogo-light.png');
const changeCollapsed = () => {
  collapsed.value = !collapsed.value;
  iconUrl.value = collapsed.value
    ? 'https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/site/logo%402x.png'
    : 'https://tdesign.gtimg.com/site/baseLogo-light.png';
};
const handleExpand = (names) => {
  console.log('receive handleExpand', names);
};
<\/script>
`,D=`<template>
  <t-menu theme="light" defaultValue="item2" :collapsed="collapsed" @change="changeHandler">
    <template #logo>
      <img :width="collapsed ? 35 : 136" :src="iconUrl" alt="logo" />
    </template>
    <t-menu-group title="\u4E3B\u5BFC\u822A">
      <t-menu-item value="item1">
        <template #icon>
          <icon name="app" />
        </template>
        \u4EEA\u8868\u76D8
      </t-menu-item>
    </t-menu-group>
    <t-menu-group title="\u7EC4\u4EF6">
      <t-submenu title="\u5217\u8868\u9879" value="2-1">
        <template #icon>
          <icon name="server" />
        </template>
        <t-menu-item value="2-1-1">\u57FA\u7840\u5217\u8868\u9879</t-menu-item>
        <t-menu-item value="2-1-2">\u5361\u7247\u5217\u8868\u9879</t-menu-item>
        <t-menu-item value="2-1-3">\u7B5B\u9009\u5217\u8868\u9879</t-menu-item>
        <t-menu-item value="2-1-4">\u6811\u72B6\u7B5B\u9009\u5217\u8868\u9879</t-menu-item>
      </t-submenu>
      <t-menu-item value="2-2">
        <template #icon>
          <icon name="edit-1" />
        </template>
        \u8868\u5355\u9879
      </t-menu-item>
      <t-menu-item value="2-3">
        <template #icon>
          <icon name="root-list" />
        </template>
        \u8BE6\u60C5\u9875
      </t-menu-item>
      <t-menu-item value="2-4">
        <template #icon>
          <icon name="check" />
        </template>
        \u7ED3\u679C\u9875
      </t-menu-item>
    </t-menu-group>
    <t-menu-group title="\u66F4\u591A">
      <t-menu-item value="item3">
        <template #icon>
          <icon name="user" />
        </template>
        \u4E2A\u4EBA\u9875
      </t-menu-item>
      <t-menu-item value="item4">
        <template #icon>
          <icon name="login" />
        </template>
        \u767B\u5F55\u9875
      </t-menu-item>
    </t-menu-group>
    <template #operations>
      <t-button class="t-demo-collapse-btn" variant="text" shape="square" @click.native="changeCollapsed">
        <icon name="view-list" />
      </t-button>
    </template>
  </t-menu>
</template>

<script>
import { Icon } from 'tdesign-icons-vue';

export default {
  components: {
    Icon,
  },
  data() {
    return {
      collapsed: false,
      iconUrl: 'https://tdesign.gtimg.com/site/baseLogo-light.png',
    };
  },
  methods: {
    changeHandler(active) {
      console.log('change', active);
    },
    changeCollapsed() {
      this.collapsed = !this.collapsed;
      this.iconUrl = this.collapsed
        ? 'https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/site/logo%402x.png'
        : 'https://tdesign.gtimg.com/site/baseLogo-light.png';
    },
  },
};
<\/script>
`,S=`<template>
  <t-menu theme="light" defaultValue="item2" :collapsed="collapsed" @change="changeHandler">
    <template #logo>
      <img :width="collapsed ? 35 : 136" :src="iconUrl" alt="logo" />
    </template>
    <t-menu-group title="\u4E3B\u5BFC\u822A">
      <t-menu-item value="item1">
        <template #icon>
          <icon name="app" />
        </template>
        \u4EEA\u8868\u76D8
      </t-menu-item>
    </t-menu-group>
    <t-menu-group title="\u7EC4\u4EF6">
      <t-submenu title="\u5217\u8868\u9879" value="2-1">
        <template #icon>
          <icon name="server" />
        </template>
        <t-menu-item value="2-1-1">\u57FA\u7840\u5217\u8868\u9879</t-menu-item>
        <t-menu-item value="2-1-2">\u5361\u7247\u5217\u8868\u9879</t-menu-item>
        <t-menu-item value="2-1-3">\u7B5B\u9009\u5217\u8868\u9879</t-menu-item>
        <t-menu-item value="2-1-4">\u6811\u72B6\u7B5B\u9009\u5217\u8868\u9879</t-menu-item>
      </t-submenu>
      <t-menu-item value="2-2">
        <template #icon>
          <icon name="edit-1" />
        </template>
        \u8868\u5355\u9879
      </t-menu-item>
      <t-menu-item value="2-3">
        <template #icon>
          <icon name="root-list" />
        </template>
        \u8BE6\u60C5\u9875
      </t-menu-item>
      <t-menu-item value="2-4">
        <template #icon>
          <icon name="check" />
        </template>
        \u7ED3\u679C\u9875
      </t-menu-item>
    </t-menu-group>
    <t-menu-group title="\u66F4\u591A">
      <t-menu-item value="item3">
        <template #icon>
          <icon name="user" />
        </template>
        \u4E2A\u4EBA\u9875
      </t-menu-item>
      <t-menu-item value="item4">
        <template #icon>
          <icon name="login" />
        </template>
        \u767B\u5F55\u9875
      </t-menu-item>
    </t-menu-group>
    <template #operations>
      <t-button class="t-demo-collapse-btn" variant="text" shape="square" @click.native="changeCollapsed">
        <icon name="view-list" />
      </t-button>
    </template>
  </t-menu>
</template>

<script setup>
import { ref } from 'vue';
import { Icon } from 'tdesign-icons-vue';

const collapsed = ref(false);
const iconUrl = ref('https://tdesign.gtimg.com/site/baseLogo-light.png');
const changeHandler = (active) => {
  console.log('change', active);
};
const changeCollapsed = () => {
  collapsed.value = !collapsed.value;
  iconUrl.value = collapsed.value
    ? 'https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/site/logo%402x.png'
    : 'https://tdesign.gtimg.com/site/baseLogo-light.png';
};
<\/script>
`,H=`<template>
  <t-menu theme="light" defaultValue="item2">
    <template #logo>
      <img height="28" src="https://tdesign.gtimg.com/site/baseLogo-light.png" alt="logo" />
    </template>
    <t-menu-item value="item1">\u83DC\u5355\u5185\u5BB9</t-menu-item>
    <t-menu-item value="item2">\u83DC\u5355\u5185\u5BB9</t-menu-item>
    <t-menu-item value="item3">\u83DC\u5355\u5185\u5BB9</t-menu-item>
    <t-menu-item value="item4" :disabled="true">\u7981\u7528\u83DC\u5355</t-menu-item>
  </t-menu>
</template>
`,P=`<template>
  <t-menu theme="light" defaultValue="item2">
    <template #logo>
      <img height="28" src="https://tdesign.gtimg.com/site/baseLogo-light.png" alt="logo" />
    </template>
    <t-menu-item value="item1">\u83DC\u5355\u5185\u5BB9</t-menu-item>
    <t-menu-item value="item2">\u83DC\u5355\u5185\u5BB9</t-menu-item>
    <t-menu-item value="item3">\u83DC\u5355\u5185\u5BB9</t-menu-item>
    <t-menu-item value="item4" :disabled="true">\u7981\u7528\u83DC\u5355</t-menu-item>
  </t-menu>
</template>
`,$=`<template>
  <t-menu theme="light" defaultValue="2-1" :collapsed="collapsed">
    <template #logo>
      <span>LOGO</span>
    </template>
    <t-menu-item value="item1">
      <template #icon>
        <icon name="dashboard" />
      </template>
      \u4EEA\u8868\u76D8
    </t-menu-item>
    <t-submenu value="2">
      <template #icon>
        <icon name="mail" />
      </template>
      <span slot="title">\u4FE1\u606F\u533A</span>
      <t-menu-item value="2-1">\u83DC\u5355\u5185\u5BB9\u4E00</t-menu-item>
      <t-menu-item value="2-2">\u83DC\u5355\u5185\u5BB9\u4E8C</t-menu-item>
      <t-menu-item value="2-3">\u83DC\u5355\u5185\u5BB9\u4E09</t-menu-item>
    </t-submenu>
    <t-menu-item value="item3">
      <template #icon>
        <icon name="play-circle" />
      </template>
      \u89C6\u9891\u533A
    </t-menu-item>
    <t-menu-item value="item4" :disabled="true">
      <template #icon>
        <icon name="edit-1" />
      </template>
      \u8D44\u6E90\u533A
    </t-menu-item>
    <template #operations>
      <t-button class="t-demo-collapse-btn" variant="text" shape="square" @click.native="changeCollapsed">
        <icon :name="iconName" slot="icon" />
      </t-button>
    </template>
  </t-menu>
</template>

<script>
import { Icon } from 'tdesign-icons-vue';

export default {
  components: {
    Icon,
  },
  data() {
    return {
      collapsed: true,
    };
  },
  computed: {
    iconName() {
      return this.collapsed ? 'chevron-right' : 'chevron-left';
    },
  },
  methods: {
    changeCollapsed() {
      this.collapsed = !this.collapsed;
    },
  },
};
<\/script>
`,N=`<template>
  <t-menu theme="light" defaultValue="2-1" :collapsed="collapsed">
    <template #logo>
      <span>LOGO</span>
    </template>
    <t-menu-item value="item1">
      <template #icon>
        <icon name="dashboard" />
      </template>
      \u4EEA\u8868\u76D8
    </t-menu-item>
    <t-submenu value="2">
      <template #icon>
        <icon name="mail" />
      </template>
      <span slot="title">\u4FE1\u606F\u533A</span>
      <t-menu-item value="2-1">\u83DC\u5355\u5185\u5BB9\u4E00</t-menu-item>
      <t-menu-item value="2-2">\u83DC\u5355\u5185\u5BB9\u4E8C</t-menu-item>
      <t-menu-item value="2-3">\u83DC\u5355\u5185\u5BB9\u4E09</t-menu-item>
    </t-submenu>
    <t-menu-item value="item3">
      <template #icon>
        <icon name="play-circle" />
      </template>
      \u89C6\u9891\u533A
    </t-menu-item>
    <t-menu-item value="item4" :disabled="true">
      <template #icon>
        <icon name="edit-1" />
      </template>
      \u8D44\u6E90\u533A
    </t-menu-item>
    <template #operations>
      <t-button class="t-demo-collapse-btn" variant="text" shape="square" @click.native="changeCollapsed">
        <icon :name="iconName" slot="icon" />
      </t-button>
    </template>
  </t-menu>
</template>

<script setup>
import { ref, computed } from 'vue';
import { Icon } from 'tdesign-icons-vue';

const collapsed = ref(true);
const iconName = computed(() => (collapsed.value ? 'chevron-right' : 'chevron-left'));
const changeCollapsed = () => {
  collapsed.value = !collapsed.value;
};
<\/script>
`,v=[{name:"collapsed",type:"Boolean",defaultValue:!1,options:[]},{name:"expandMutex",type:"Boolean",defaultValue:!1,options:[]},{name:"expandType",type:"enum",defaultValue:"normal",options:[{label:"normal",value:"normal"},{label:"popup",value:"popup"}]},{name:"theme",type:"enum",defaultValue:"light",options:[{label:"light",value:"light"},{label:"dark",value:"dark"}]}];const o={};o.setup=(n,a)=>{const e=l(v),t=[{label:"menu",value:"menu"},{label:"headMenu",value:"headMenu"}],m={menu:`
        <div :style="{ padding: '24px', background: 'var(--bg-color-page)', borderRadius: '3px' }">
          <t-menu v-bind="configProps">
            <t-menu-item value="0">
              <template #icon>
                <t-icon name="app" />
              </template>
              \u4EEA\u8868\u76D8
            </t-menu-item>

            <t-submenu value="1" title="\u8D44\u6E90\u5217\u8868">
              <template #icon>
                <t-icon name="code" />
              </template>
              <t-menu-item value="1-1" disabled>
                <span>\u83DC\u5355\u4E8C</span>
              </t-menu-item>
            </t-submenu>
            <t-submenu value="2" title="\u8C03\u5EA6\u5E73\u53F0">
              <template #icon>
                <t-icon name="file" />
              </template>
              <t-submenu value="2-1" title="\u4E8C\u7EA7\u83DC\u5355-1">
                <t-menu-item value="3-1">\u4E09\u7EA7\u83DC\u5355-1</t-menu-item>
                <t-menu-item value="3-2">\u4E09\u7EA7\u83DC\u5355-2</t-menu-item>
                <t-menu-item value="3-3">\u4E09\u7EA7\u83DC\u5355-3</t-menu-item>
              </t-submenu>
              <t-menu-item value="2-2">
                <span>\u4E8C\u7EA7\u83DC\u5355-2</span>
              </t-menu-item>
            </t-submenu>
          </t-menu>
        </div>
      `,headMenu:`
        <div :style="{ padding: '24px', background: 'var(--bg-color-page)', borderRadius: '3px' }">
          <t-head-menu style="marginBottom: 20px" v-bind="configProps">
            <template #logo>
              <img src="https://www.tencent.com/img/index/menu_logo_hover.png" width="136" />
            </template>
            <t-menu-item value="0">
              <span>\u83DC\u53551</span>
            </t-menu-item>
            <t-menu-item value="1">
              <span>\u83DC\u53552</span>
            </t-menu-item>
          </t-head-menu>
        </div>
      `},i=l(`<template>${m[t[0].value].trim()}</template>`);function c(r){i.value=`<template>${m[r].trim()}</template>`}return{configList:e,panelList:t,usageCode:i,onPanelChange:c}};var s=function(){var n=this,a=n.$createElement,e=n._self._c||a;return e("base-usage",{attrs:{code:n.usageCode,"config-list":n.configList,"panel-list":n.panelList},on:{PanelChange:n.onPanelChange},scopedSlots:n._u([{key:"menu",fn:function(t){var m=t.configProps;return[e("div",{style:{padding:"24px",background:"var(--bg-color-page)",borderRadius:"3px"}},[e("t-menu",n._b({},"t-menu",m,!1),[e("t-menu-item",{attrs:{value:"0"},scopedSlots:n._u([{key:"icon",fn:function(){return[e("t-icon",{attrs:{name:"app"}})]},proxy:!0}],null,!0)},[n._v(" \u4EEA\u8868\u76D8 ")]),e("t-submenu",{attrs:{value:"1",title:"\u8D44\u6E90\u5217\u8868"},scopedSlots:n._u([{key:"icon",fn:function(){return[e("t-icon",{attrs:{name:"code"}})]},proxy:!0}],null,!0)},[e("t-menu-item",{attrs:{value:"1-1",disabled:""}},[e("span",[n._v("\u83DC\u5355\u4E8C")])])],1),e("t-submenu",{attrs:{value:"2",title:"\u8C03\u5EA6\u5E73\u53F0"},scopedSlots:n._u([{key:"icon",fn:function(){return[e("t-icon",{attrs:{name:"file"}})]},proxy:!0}],null,!0)},[e("t-submenu",{attrs:{value:"2-1",title:"\u4E8C\u7EA7\u83DC\u5355-1"}},[e("t-menu-item",{attrs:{value:"3-1"}},[n._v("\u4E09\u7EA7\u83DC\u5355-1")]),e("t-menu-item",{attrs:{value:"3-2"}},[n._v("\u4E09\u7EA7\u83DC\u5355-2")]),e("t-menu-item",{attrs:{value:"3-3"}},[n._v("\u4E09\u7EA7\u83DC\u5355-3")])],1),e("t-menu-item",{attrs:{value:"2-2"}},[e("span",[n._v("\u4E8C\u7EA7\u83DC\u5355-2")])])],1)],1)],1)]}},{key:"headMenu",fn:function(t){var m=t.configProps;return[e("div",{style:{padding:"24px",background:"var(--bg-color-page)",borderRadius:"3px"}},[e("t-head-menu",n._b({staticStyle:{marginbottom:"20px"},scopedSlots:n._u([{key:"logo",fn:function(){return[e("img",{attrs:{src:"https://www.tencent.com/img/index/menu_logo_hover.png",width:"136"}})]},proxy:!0}],null,!0)},"t-head-menu",m,!1),[e("t-menu-item",{attrs:{value:"0"}},[e("span",[n._v("\u83DC\u53551")])]),e("t-menu-item",{attrs:{value:"1"}},[e("span",[n._v("\u83DC\u53552")])])],1)],1)]}}])})},g=[];s._withStripped=!0;const u={};var p=d(o,s,g,!1,h,null,null,null);function h(n){for(let a in u)this[a]=u[a]}p.options.__file="../src/menu/_usage/index.vue";var z=function(){return p.exports}();export{x as D,z as U,f as a,q as b,y as c,k as d,I as e,_ as f,C as g,V as h,L as i,U as j,w as k,E as l,M as m,D as n,S as o,H as p,P as q,$ as r,N as s};
