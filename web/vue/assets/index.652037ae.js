import{Y as a,n as m}from"./index.663c003f.js";var f=`<template>
  <t-space direction="vertical" :size="24">
    <h3>\u9ED8\u8BA4\u5728\u7EBF\u5F62\u5916\u5C55\u793A\u8FDB\u5EA6\u548C\u72B6\u6001</h3>
    <div>
      <div class="t-progress-domo-margin">\u9ED8\u8BA4\u6837\u5F0F</div>
      <t-progress theme="line" :percentage="30" />
      <div class="t-progress-domo-margin">100%</div>
      <t-progress theme="line" :percentage="100" />
      <div class="t-progress-domo-margin">\u8FDB\u5EA6\u5B8C\u6210</div>
      <t-progress theme="line" :status="'success'" :percentage="60" />
      <div class="t-progress-domo-margin">\u8FDB\u5EA6\u72B6\u6001\u53D1\u751F\u91CD\u5927\u9519\u8BEF</div>
      <t-progress theme="line" :status="'error'" :percentage="60" />
      <div class="t-progress-domo-margin">\u8FDB\u5EA6\u88AB\u4E2D\u65AD</div>

      <t-progress theme="line" :status="'warning'" :percentage="60" />
      <div class="t-progress-domo-margin">\u6E10\u53D8\u8272</div>
      <t-progress theme="line" :color="{ from: '#0052D9', to: '#00A870' }" :percentage="60" :status="'active'" />
    </div>

    <h3>\u53EF\u4EE5\u5728\u7EBF\u5F62\u5185\u5C55\u793A\u8FDB\u5EA6\u4FE1\u606F</h3>
    <div>
      <div class="t-progress-domo-margin">\u9ED8\u8BA4\u6837\u5F0F</div>
      <t-progress theme="plump" :percentage="30" />
      <div class="t-progress-domo-margin">\u8FDB\u5EA60-10%\u65F6\u6570\u5B57\u4F4D\u7F6E\u51FA\u73B0\u5728\u76EE\u524D\u8FDB\u5EA6\u7684\u53F3\u8FB9\u533A\u57DF</div>
      <t-progress theme="plump" :percentage="5" />
    </div>
  </t-space>
</template>

<style scoped>
div > .t-progress-domo-margin:first-child {
  margin-top: 0;
}

.t-progress-domo-margin {
  margin: 16px 0 4px;
}
</style>
`,x=`<template>
  <t-space direction="vertical" :size="24">
    <h3>\u9ED8\u8BA4\u5728\u7EBF\u5F62\u5916\u5C55\u793A\u8FDB\u5EA6\u548C\u72B6\u6001</h3>
    <div>
      <div class="t-progress-domo-margin">\u9ED8\u8BA4\u6837\u5F0F</div>
      <t-progress theme="line" :percentage="30" />
      <div class="t-progress-domo-margin">100%</div>
      <t-progress theme="line" :percentage="100" />
      <div class="t-progress-domo-margin">\u8FDB\u5EA6\u5B8C\u6210</div>
      <t-progress theme="line" :status="'success'" :percentage="60" />
      <div class="t-progress-domo-margin">\u8FDB\u5EA6\u72B6\u6001\u53D1\u751F\u91CD\u5927\u9519\u8BEF</div>
      <t-progress theme="line" :status="'error'" :percentage="60" />
      <div class="t-progress-domo-margin">\u8FDB\u5EA6\u88AB\u4E2D\u65AD</div>

      <t-progress theme="line" :status="'warning'" :percentage="60" />
      <div class="t-progress-domo-margin">\u6E10\u53D8\u8272</div>
      <t-progress theme="line" :color="{ from: '#0052D9', to: '#00A870' }" :percentage="60" :status="'active'" />
    </div>

    <h3>\u53EF\u4EE5\u5728\u7EBF\u5F62\u5185\u5C55\u793A\u8FDB\u5EA6\u4FE1\u606F</h3>
    <div>
      <div class="t-progress-domo-margin">\u9ED8\u8BA4\u6837\u5F0F</div>
      <t-progress theme="plump" :percentage="30" />
      <div class="t-progress-domo-margin">\u8FDB\u5EA60-10%\u65F6\u6570\u5B57\u4F4D\u7F6E\u51FA\u73B0\u5728\u76EE\u524D\u8FDB\u5EA6\u7684\u53F3\u8FB9\u533A\u57DF</div>
      <t-progress theme="plump" :percentage="5" />
    </div>
  </t-space>
</template>

<style scoped>
div > .t-progress-domo-margin:first-child {
  margin-top: 0;
}

.t-progress-domo-margin {
  margin: 16px 0 4px;
}
</style>
`,_=`<template>
  <t-space direction="vertical" :size="36">
    <div>\u9ED8\u8BA4</div>
    <!-- \u91CD\u8981\uFF1AstrokeWidth \u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 size \u7684\u4E00\u534A\uFF0C\u5426\u5219\u65E0\u6CD5\u6E32\u67D3\u51FA\u73AF\u5F62 -->
    <t-space :size="78" class="ml-36px">
      <t-space direction="vertical" align="center" :size="10">
        <div>\u9ED8\u8BA4\u6837\u5F0F</div>
        <t-progress theme="circle" :percentage="30"></t-progress>
      </t-space>
      <t-space direction="vertical" align="center" :size="10">
        <div>\u4E0D\u663E\u793A\u6570\u5B57</div>
        <t-progress theme="circle" :label="false" :percentage="100" :status="'success'"></t-progress>
      </t-space>
      <t-space direction="vertical" align="center" :size="10">
        <div>\u81EA\u5B9A\u4E49\u5185\u5BB9</div>
        <t-progress theme="circle" :label="'75day'" :percentage="50" :status="'success'"></t-progress>
      </t-space>
    </t-space>

    <t-space :size="78" class="ml-36px">
      <t-space direction="vertical" align="center" :size="10">
        <div>\u8FDB\u5EA6\u5B8C\u6210</div>
        <t-progress theme="circle" :percentage="100" :status="'success'"></t-progress>
      </t-space>
      <t-space direction="vertical" align="center" :size="10">
        <div>\u8FDB\u5EA6\u72B6\u6001\u53D1\u751F\u9519\u8BEF</div>
        <t-progress theme="circle" :percentage="75" :status="'error'"></t-progress>
      </t-space>
      <t-space direction="vertical" align="center" :size="10">
        <div>\u8FDB\u5EA6\u88AB\u4E2D\u65AD</div>
        <t-progress theme="circle" :percentage="50" :status="'warning'"></t-progress>
      </t-space>
    </t-space>

    <div>\u9ED8\u8BA4\u4E0D\u540C\u5C3A\u5BF8</div>
    <t-space :size="110" class="ml-44px">
      <t-space direction="vertical" align="center" :size="10">
        <div>\u5C0F\u5C3A\u5BF8</div>
        <t-progress theme="circle" :percentage="30" :size="'small'"></t-progress>
      </t-space>
      <t-space direction="vertical" align="center" :size="10">
        <div>\u9ED8\u8BA4\u5C3A\u5BF8</div>
        <t-progress theme="circle" :percentage="30" :size="'medium'"></t-progress>
      </t-space>
      <t-space direction="vertical" align="center" :size="10">
        <div>\u5927\u5C3A\u5BF8</div>
        <t-progress theme="circle" :percentage="75" :size="'large'"></t-progress>
      </t-space>
    </t-space>
  </t-space>
</template>

<style lang="less" scoped>
.ml-36px {
  margin-left: 36px;
}
.ml-44px {
  margin-left: 44px;
}
</style>
`,y=`<template>
  <t-space direction="vertical" :size="36">
    <div>\u9ED8\u8BA4</div>
    <!-- \u91CD\u8981\uFF1AstrokeWidth \u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 size \u7684\u4E00\u534A\uFF0C\u5426\u5219\u65E0\u6CD5\u6E32\u67D3\u51FA\u73AF\u5F62 -->
    <t-space :size="78" class="ml-36px">
      <t-space direction="vertical" align="center" :size="10">
        <div>\u9ED8\u8BA4\u6837\u5F0F</div>
        <t-progress theme="circle" :percentage="30"></t-progress>
      </t-space>
      <t-space direction="vertical" align="center" :size="10">
        <div>\u4E0D\u663E\u793A\u6570\u5B57</div>
        <t-progress theme="circle" :label="false" :percentage="100" :status="'success'"></t-progress>
      </t-space>
      <t-space direction="vertical" align="center" :size="10">
        <div>\u81EA\u5B9A\u4E49\u5185\u5BB9</div>
        <t-progress theme="circle" :label="'75day'" :percentage="50" :status="'success'"></t-progress>
      </t-space>
    </t-space>

    <t-space :size="78" class="ml-36px">
      <t-space direction="vertical" align="center" :size="10">
        <div>\u8FDB\u5EA6\u5B8C\u6210</div>
        <t-progress theme="circle" :percentage="100" :status="'success'"></t-progress>
      </t-space>
      <t-space direction="vertical" align="center" :size="10">
        <div>\u8FDB\u5EA6\u72B6\u6001\u53D1\u751F\u9519\u8BEF</div>
        <t-progress theme="circle" :percentage="75" :status="'error'"></t-progress>
      </t-space>
      <t-space direction="vertical" align="center" :size="10">
        <div>\u8FDB\u5EA6\u88AB\u4E2D\u65AD</div>
        <t-progress theme="circle" :percentage="50" :status="'warning'"></t-progress>
      </t-space>
    </t-space>

    <div>\u9ED8\u8BA4\u4E0D\u540C\u5C3A\u5BF8</div>
    <t-space :size="110" class="ml-44px">
      <t-space direction="vertical" align="center" :size="10">
        <div>\u5C0F\u5C3A\u5BF8</div>
        <t-progress theme="circle" :percentage="30" :size="'small'"></t-progress>
      </t-space>
      <t-space direction="vertical" align="center" :size="10">
        <div>\u9ED8\u8BA4\u5C3A\u5BF8</div>
        <t-progress theme="circle" :percentage="30" :size="'medium'"></t-progress>
      </t-space>
      <t-space direction="vertical" align="center" :size="10">
        <div>\u5927\u5C3A\u5BF8</div>
        <t-progress theme="circle" :percentage="75" :size="'large'"></t-progress>
      </t-space>
    </t-space>
  </t-space>
</template>

<style lang="less" scoped>
.ml-36px {
  margin-left: 36px;
}
.ml-44px {
  margin-left: 44px;
}
</style>
`,v=[{name:"label",type:"Boolean",defaultValue:!0,options:[]},{name:"theme",type:"enum",defaultValue:"line",options:[{label:"line",value:"line"},{label:"plump",value:"plump"},{label:"circle",value:"circle"}]}];const p={};p.setup=(e,s)=>{const n=a(v),t=[{label:"progress",value:"progress"}],r={progress:`
        <div style="width:200px">
          <t-progress :percentage="50"  v-bind="configProps" />
        </div>
      `},i=a(`<template>${r[t[0].value].trim()}</template>`);function g(d){i.value=`<template>${r[d].trim()}</template>`}return{configList:n,panelList:t,usageCode:i,onPanelChange:g}};var o=function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("base-usage",{attrs:{code:e.usageCode,"config-list":e.configList,"panel-list":e.panelList},on:{PanelChange:e.onPanelChange},scopedSlots:e._u([{key:"progress",fn:function(t){var r=t.configProps;return[n("div",{staticStyle:{width:"200px"}},[n("t-progress",e._b({attrs:{percentage:50}},"t-progress",r,!1))],1)]}}])})},u=[];o._withStripped=!0;const c={};var l=m(p,o,u,!1,h,null,null,null);function h(e){for(let s in c)this[s]=c[s]}l.options.__file="../src/progress/_usage/index.vue";var b=function(){return l.exports}();export{f as D,b as U,x as a,_ as b,y as c};
