var t=`<template>
  <t-space direction="vertical">
    <div>
      <t-layout>
        <t-header>Header</t-header>
        <t-content>Content</t-content>
        <t-footer>Footer</t-footer>
      </t-layout>
    </div>

    <div>
      <t-layout>
        <t-header>Header</t-header>
        <t-layout>
          <t-aside>Aside</t-aside>
          <t-content>Content</t-content>
        </t-layout>
        <t-footer>Footer</t-footer>
      </t-layout>
    </div>

    <div>
      <t-layout>
        <t-header>Header</t-header>
        <t-layout>
          <t-content>Content</t-content>
          <t-aside>Aside</t-aside>
        </t-layout>
        <t-footer>Footer</t-footer>
      </t-layout>
    </div>

    <div>
      <t-layout>
        <t-aside>Aside</t-aside>
        <t-layout>
          <t-header>Header</t-header>
          <t-content>Content</t-content>
          <t-footer>Footer</t-footer>
        </t-layout>
      </t-layout>
    </div>
  </t-space>
</template>
`,e=`<template>
  <t-space direction="vertical">
    <div>
      <t-layout>
        <t-header>Header</t-header>
        <t-content>Content</t-content>
        <t-footer>Footer</t-footer>
      </t-layout>
    </div>

    <div>
      <t-layout>
        <t-header>Header</t-header>
        <t-layout>
          <t-aside>Aside</t-aside>
          <t-content>Content</t-content>
        </t-layout>
        <t-footer>Footer</t-footer>
      </t-layout>
    </div>

    <div>
      <t-layout>
        <t-header>Header</t-header>
        <t-layout>
          <t-content>Content</t-content>
          <t-aside>Aside</t-aside>
        </t-layout>
        <t-footer>Footer</t-footer>
      </t-layout>
    </div>

    <div>
      <t-layout>
        <t-aside>Aside</t-aside>
        <t-layout>
          <t-header>Header</t-header>
          <t-content>Content</t-content>
          <t-footer>Footer</t-footer>
        </t-layout>
      </t-layout>
    </div>
  </t-space>
</template>
`,n=`<template>
  <div class="tdesign-demo-item--layout">
    <t-layout>
      <t-aside>
        <t-menu theme="light" value="dashboard" style="margin-right: 50px" height="550px">
          <img
            slot="logo"
            width="136"
            class="t-menu__logo--center"
            src="https://www.tencent.com/img/index/menu_logo_hover.png"
            alt="logo"
          />
          <t-menu-item value="dashboard"> <icon slot="icon" name="dashboard" />\u4EEA\u8868\u76D8 </t-menu-item>
          <t-menu-item value="resource"> <icon slot="icon" name="server" />\u8D44\u6E90\u5217\u8868 </t-menu-item>
          <t-menu-item value="root"> <icon slot="icon" name="root-list" />\u6839\u76EE\u5F55 </t-menu-item>
          <t-menu-item value="control-platform"> <icon slot="icon" name="control-platform" />\u8C03\u5EA6\u5E73\u53F0 </t-menu-item>
          <t-menu-item value="precise-monitor"> <icon slot="icon" name="precise-monitor" />\u7CBE\u51C6\u76D1\u63A7 </t-menu-item>
          <t-menu-item value="mail"> <icon slot="icon" name="mail" />\u6D88\u606F\u533A </t-menu-item>
          <t-menu-item value="user-circle"> <icon slot="icon" name="user-circle" />\u4E2A\u4EBA\u4E2D\u5FC3 </t-menu-item>
          <t-menu-item value="play-circle"> <icon slot="icon" name="play-circle" />\u89C6\u9891\u533A </t-menu-item>
          <t-menu-item value="edit1"> <icon slot="icon" name="edit-1" />\u8D44\u6E90\u7F16\u8F91 </t-menu-item>
        </t-menu>
      </t-aside>
      <t-layout>
        <t-content>
          <div>Content</div>
        </t-content>
        <t-footer>Copyright @ 2019-{{ new Date().getFullYear() }} Tencent. All Rights Reserved</t-footer>
      </t-layout>
    </t-layout>
  </div>
</template>
<script>
import { Icon } from 'tdesign-icons-vue';

export default {
  components: {
    Icon,
  },
};
<\/script>
`,o=`<template>
  <div class="tdesign-demo-item--layout">
    <t-layout>
      <t-aside>
        <t-menu theme="light" value="dashboard" style="margin-right: 50px" height="550px">
          <img
            slot="logo"
            width="136"
            class="t-menu__logo--center"
            src="https://www.tencent.com/img/index/menu_logo_hover.png"
            alt="logo"
          />
          <t-menu-item value="dashboard"> <icon slot="icon" name="dashboard" />\u4EEA\u8868\u76D8 </t-menu-item>
          <t-menu-item value="resource"> <icon slot="icon" name="server" />\u8D44\u6E90\u5217\u8868 </t-menu-item>
          <t-menu-item value="root"> <icon slot="icon" name="root-list" />\u6839\u76EE\u5F55 </t-menu-item>
          <t-menu-item value="control-platform"> <icon slot="icon" name="control-platform" />\u8C03\u5EA6\u5E73\u53F0 </t-menu-item>
          <t-menu-item value="precise-monitor"> <icon slot="icon" name="precise-monitor" />\u7CBE\u51C6\u76D1\u63A7 </t-menu-item>
          <t-menu-item value="mail"> <icon slot="icon" name="mail" />\u6D88\u606F\u533A </t-menu-item>
          <t-menu-item value="user-circle"> <icon slot="icon" name="user-circle" />\u4E2A\u4EBA\u4E2D\u5FC3 </t-menu-item>
          <t-menu-item value="play-circle"> <icon slot="icon" name="play-circle" />\u89C6\u9891\u533A </t-menu-item>
          <t-menu-item value="edit1"> <icon slot="icon" name="edit-1" />\u8D44\u6E90\u7F16\u8F91 </t-menu-item>
        </t-menu>
      </t-aside>
      <t-layout>
        <t-content>
          <div>Content</div>
        </t-content>
        <t-footer>Copyright @ 2019-{{ new Date().getFullYear() }} Tencent. All Rights Reserved</t-footer>
      </t-layout>
    </t-layout>
  </div>
</template>
<script setup>
import { Icon } from 'tdesign-icons-vue';
<\/script>
`,i=`<template>
  <div class="tdesign-demo-item--layout">
    <t-layout>
      <t-header>
        <t-head-menu theme="light" value="item1" height="120px">
          <img
            slot="logo"
            width="136"
            class="logo"
            src="https://www.tencent.com/img/index/menu_logo_hover.png"
            alt="logo"
          />
          <t-menu-item value="item1">\u5DF2\u9009\u5185\u5BB9</t-menu-item>
          <t-menu-item value="item2">\u83DC\u5355\u5185\u5BB9\u4E00</t-menu-item>
          <t-menu-item value="item3">\u83DC\u5355\u5185\u5BB9\u4E8C</t-menu-item>
          <t-menu-item value="item4" :disabled="true">\u83DC\u5355\u5185\u5BB9\u4E09</t-menu-item>
          <template #operations>
            <a href="javascript:;"><icon class="t-menu__operations-icon" name="search" /></a>
            <a href="javascript:;"><icon class="t-menu__operations-icon" name="notification-filled" /></a>
            <a href="javascript:;"><icon class="t-menu__operations-icon" name="home" /></a>
          </template>
        </t-head-menu>
      </t-header>
      <t-content>
        <div>Content</div>
      </t-content>
      <t-footer> Copyright @ 2019-{{ new Date().getFullYear() }} Tencent. All Rights Reserved </t-footer>
    </t-layout>
  </div>
</template>

<script>
import { Icon } from 'tdesign-icons-vue';

export default {
  components: {
    Icon,
  },
};
<\/script>
`,a=`<template>
  <div class="tdesign-demo-item--layout">
    <t-layout>
      <t-header>
        <t-head-menu theme="light" value="item1" height="120px">
          <img
            slot="logo"
            width="136"
            class="logo"
            src="https://www.tencent.com/img/index/menu_logo_hover.png"
            alt="logo"
          />
          <t-menu-item value="item1">\u5DF2\u9009\u5185\u5BB9</t-menu-item>
          <t-menu-item value="item2">\u83DC\u5355\u5185\u5BB9\u4E00</t-menu-item>
          <t-menu-item value="item3">\u83DC\u5355\u5185\u5BB9\u4E8C</t-menu-item>
          <t-menu-item value="item4" :disabled="true">\u83DC\u5355\u5185\u5BB9\u4E09</t-menu-item>
          <template #operations>
            <a href="javascript:;"><icon class="t-menu__operations-icon" name="search" /></a>
            <a href="javascript:;"><icon class="t-menu__operations-icon" name="notification-filled" /></a>
            <a href="javascript:;"><icon class="t-menu__operations-icon" name="home" /></a>
          </template>
        </t-head-menu>
      </t-header>
      <t-content>
        <div>Content</div>
      </t-content>
      <t-footer> Copyright @ 2019-{{ new Date().getFullYear() }} Tencent. All Rights Reserved </t-footer>
    </t-layout>
  </div>
</template>

<script setup>
import { Icon } from 'tdesign-icons-vue';
<\/script>
`,m=`<template>
  <div class="tdesign-demo-item--layout">
    <t-layout>
      <t-header>
        <t-head-menu value="item1" height="120px">
          <img
            slot="logo"
            width="136"
            class="logo"
            src="https://www.tencent.com/img/index/menu_logo_hover.png"
            alt="logo"
          />
          <t-menu-item value="item1">\u5DF2\u9009\u5185\u5BB9</t-menu-item>
          <t-menu-item value="item2">\u83DC\u5355\u5185\u5BB9\u4E00</t-menu-item>
          <t-menu-item value="item3">\u83DC\u5355\u5185\u5BB9\u4E8C</t-menu-item>
          <t-menu-item value="item4" :disabled="true">\u83DC\u5355\u5185\u5BB9\u4E09</t-menu-item>
          <template #operations>
            <a href="javascript:;"><icon class="t-menu__operations-icon" name="search" /></a>
            <a href="javascript:;"><icon class="t-menu__operations-icon" name="notification-filled" /></a>
            <a href="javascript:;"><icon class="t-menu__operations-icon" name="home" /></a>
          </template>
        </t-head-menu>
      </t-header>
      <t-layout>
        <t-aside style="border-top: 1px solid var(--component-border)">
          <t-menu theme="light" value="dashboard" style="margin-right: 50px" height="550px">
            <t-menu-item value="dashboard"> <icon slot="icon" name="dashboard" />\u4EEA\u8868\u76D8 </t-menu-item>
            <t-menu-item value="resource"> <icon slot="icon" name="server" />\u8D44\u6E90\u5217\u8868 </t-menu-item>
            <t-menu-item value="root"> <icon slot="icon" name="root-list" />\u6839\u76EE\u5F55 </t-menu-item>
            <t-menu-item value="control-platform"> <icon slot="icon" name="control-platform" />\u8C03\u5EA6\u5E73\u53F0 </t-menu-item>
            <t-menu-item value="precise-monitor"> <icon slot="icon" name="precise-monitor" />\u7CBE\u51C6\u76D1\u63A7 </t-menu-item>
            <t-menu-item value="mail"> <icon slot="icon" name="mail" />\u6D88\u606F\u533A </t-menu-item>
            <t-menu-item value="user-circle"> <icon slot="icon" name="user-circle" />\u4E2A\u4EBA\u4E2D\u5FC3 </t-menu-item>
            <t-menu-item value="play-circle"> <icon slot="icon" name="play-circle" />\u89C6\u9891\u533A </t-menu-item>
            <t-menu-item value="edit1"> <icon slot="icon" name="edit-1" />\u8D44\u6E90\u7F16\u8F91 </t-menu-item>
          </t-menu>
        </t-aside>
        <t-layout>
          <t-content>
            <div>Content</div>
          </t-content>
          <t-footer>Copyright @ 2019-{{ new Date().getFullYear() }} Tencent. All Rights Reserved</t-footer>
        </t-layout>
      </t-layout>
    </t-layout>
  </div>
</template>
<script>
import { Icon } from 'tdesign-icons-vue';

export default {
  components: {
    Icon,
  },
};
<\/script>
`,l=`<template>
  <div class="tdesign-demo-item--layout">
    <t-layout>
      <t-header>
        <t-head-menu value="item1" height="120px">
          <img
            slot="logo"
            width="136"
            class="logo"
            src="https://www.tencent.com/img/index/menu_logo_hover.png"
            alt="logo"
          />
          <t-menu-item value="item1">\u5DF2\u9009\u5185\u5BB9</t-menu-item>
          <t-menu-item value="item2">\u83DC\u5355\u5185\u5BB9\u4E00</t-menu-item>
          <t-menu-item value="item3">\u83DC\u5355\u5185\u5BB9\u4E8C</t-menu-item>
          <t-menu-item value="item4" :disabled="true">\u83DC\u5355\u5185\u5BB9\u4E09</t-menu-item>
          <template #operations>
            <a href="javascript:;"><icon class="t-menu__operations-icon" name="search" /></a>
            <a href="javascript:;"><icon class="t-menu__operations-icon" name="notification-filled" /></a>
            <a href="javascript:;"><icon class="t-menu__operations-icon" name="home" /></a>
          </template>
        </t-head-menu>
      </t-header>
      <t-layout>
        <t-aside style="border-top: 1px solid var(--component-border)">
          <t-menu theme="light" value="dashboard" style="margin-right: 50px" height="550px">
            <t-menu-item value="dashboard"> <icon slot="icon" name="dashboard" />\u4EEA\u8868\u76D8 </t-menu-item>
            <t-menu-item value="resource"> <icon slot="icon" name="server" />\u8D44\u6E90\u5217\u8868 </t-menu-item>
            <t-menu-item value="root"> <icon slot="icon" name="root-list" />\u6839\u76EE\u5F55 </t-menu-item>
            <t-menu-item value="control-platform"> <icon slot="icon" name="control-platform" />\u8C03\u5EA6\u5E73\u53F0 </t-menu-item>
            <t-menu-item value="precise-monitor"> <icon slot="icon" name="precise-monitor" />\u7CBE\u51C6\u76D1\u63A7 </t-menu-item>
            <t-menu-item value="mail"> <icon slot="icon" name="mail" />\u6D88\u606F\u533A </t-menu-item>
            <t-menu-item value="user-circle"> <icon slot="icon" name="user-circle" />\u4E2A\u4EBA\u4E2D\u5FC3 </t-menu-item>
            <t-menu-item value="play-circle"> <icon slot="icon" name="play-circle" />\u89C6\u9891\u533A </t-menu-item>
            <t-menu-item value="edit1"> <icon slot="icon" name="edit-1" />\u8D44\u6E90\u7F16\u8F91 </t-menu-item>
          </t-menu>
        </t-aside>
        <t-layout>
          <t-content>
            <div>Content</div>
          </t-content>
          <t-footer>Copyright @ 2019-{{ new Date().getFullYear() }} Tencent. All Rights Reserved</t-footer>
        </t-layout>
      </t-layout>
    </t-layout>
  </div>
</template>
<script setup>
import { Icon } from 'tdesign-icons-vue';
<\/script>
`;export{t as D,e as a,n as b,o as c,i as d,a as e,m as f,l as g};
