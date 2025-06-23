var e=`<template>
  <div>
    <div class="tdesign-demo-image-viewer__base">
      <t-image-viewer v-model="visible" :images="[img]" :closeOnEscKeydown="false">
        <template #trigger="{ open }">
          <div class="tdesign-demo-image-viewer__ui-image" @click="open">
            <img alt="test" :src="img" class="tdesign-demo-image-viewer__ui-image--img" />
            <div class="tdesign-demo-image-viewer__ui-image--hover">
              <span><browse-icon size="1.4em" /> \u9884\u89C8</span>
            </div>
          </div>
        </template>
      </t-image-viewer>
    </div>
  </div>
</template>
<script>
import { BrowseIcon } from 'tdesign-icons-vue';

export default {
  components: {
    BrowseIcon,
  },
  data() {
    return {
      img: 'https://tdesign.gtimg.com/demo/demo-image-1.png',
      visible: false,
    };
  },
};
<\/script>
<style scoped>
.tdesign-demo-image-viewer__ui-image {
  width: 160px;
  height: 160px;
  display: inline-flex;
  position: relative;
  justify-content: center;
  align-items: center;
  border-radius: var(--td-radius-small);
  overflow: hidden;
}

.tdesign-demo-image-viewer__ui-image--hover {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.6);
  color: var(--td-text-color-anti);
  line-height: 22px;
  transition: 0.2s;
}

.tdesign-demo-image-viewer__ui-image:hover .tdesign-demo-image-viewer__ui-image--hover {
  opacity: 1;
  cursor: pointer;
}

.tdesign-demo-image-viewer__ui-image--img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  cursor: pointer;
  position: absolute;
}

.tdesign-demo-image-viewer__ui-image--footer {
  padding: 0 16px;
  height: 56px;
  width: 100%;
  line-height: 56px;
  font-size: 16px;
  position: absolute;
  bottom: 0;
  color: var(--td-text-color-anti);
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%);
  display: flex;
  box-sizing: border-box;
}

.tdesign-demo-image-viewer__ui-image--title {
  flex: 1;
}

.tdesign-demo-popup__reference {
  margin-left: 16px;
}

.tdesign-demo-image-viewer__ui-image--icons .tdesign-demo-icon {
  cursor: pointer;
}

.tdesign-demo-image-viewer__base {
  width: 160px;
  height: 160px;
  margin: 10px;
  border: 4px solid var(--td-bg-color-secondarycontainer);
  border-radius: var(--td-radius-medium);
}
</style>
`,n=`<template>
  <div>
    <div class="tdesign-demo-image-viewer__base">
      <t-image-viewer v-model="visible" :images="[img]" :closeOnEscKeydown="false">
        <template #trigger="{ open }">
          <div class="tdesign-demo-image-viewer__ui-image" @click="open">
            <img alt="test" :src="img" class="tdesign-demo-image-viewer__ui-image--img" />
            <div class="tdesign-demo-image-viewer__ui-image--hover">
              <span><browse-icon size="1.4em" /> \u9884\u89C8</span>
            </div>
          </div>
        </template>
      </t-image-viewer>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { BrowseIcon } from 'tdesign-icons-vue';

const img = ref('https://tdesign.gtimg.com/demo/demo-image-1.png');
const visible = ref(false);
<\/script>
<style scoped>
.tdesign-demo-image-viewer__ui-image {
  width: 160px;
  height: 160px;
  display: inline-flex;
  position: relative;
  justify-content: center;
  align-items: center;
  border-radius: var(--td-radius-small);
  overflow: hidden;
}

.tdesign-demo-image-viewer__ui-image--hover {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.6);
  color: var(--td-text-color-anti);
  line-height: 22px;
  transition: 0.2s;
}

.tdesign-demo-image-viewer__ui-image:hover .tdesign-demo-image-viewer__ui-image--hover {
  opacity: 1;
  cursor: pointer;
}

.tdesign-demo-image-viewer__ui-image--img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  cursor: pointer;
  position: absolute;
}

.tdesign-demo-image-viewer__ui-image--footer {
  padding: 0 16px;
  height: 56px;
  width: 100%;
  line-height: 56px;
  font-size: 16px;
  position: absolute;
  bottom: 0;
  color: var(--td-text-color-anti);
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%);
  display: flex;
  box-sizing: border-box;
}

.tdesign-demo-image-viewer__ui-image--title {
  flex: 1;
}

.tdesign-demo-popup__reference {
  margin-left: 16px;
}

.tdesign-demo-image-viewer__ui-image--icons .tdesign-demo-icon {
  cursor: pointer;
}

.tdesign-demo-image-viewer__base {
  width: 160px;
  height: 160px;
  margin: 10px;
  border: 4px solid var(--td-bg-color-secondarycontainer);
  border-radius: var(--td-radius-medium);
}
</style>
`,i=`<template>
  <div class="tdesign-demo-image-viewer__base">
    <t-image-viewer v-model="visible" draggable mode="modeless" :images="[img]">
      <template #trigger="{ open }">
        <div class="tdesign-demo-image-viewer__ui-image">
          <img alt="test" :src="img" class="tdesign-demo-image-viewer__ui-image--img" />
          <div class="tdesign-demo-image-viewer__ui-image--hover" @click="open">
            <span><browse-icon size="1.4em" /> \u9884\u89C8</span>
          </div>
        </div>
      </template>
    </t-image-viewer>
  </div>
</template>

<script lang="jsx">
import { BrowseIcon } from 'tdesign-icons-vue';

export default {
  components: {
    BrowseIcon,
  },
  data() {
    return {
      img: 'https://tdesign.gtimg.com/demo/demo-image-1.png',
      visible: false,
    };
  },
};
<\/script>

<style scoped>
.tdesign-demo-image-viewer__ui-image {
  width: 160px;
  height: 160px;
  display: inline-flex;
  position: relative;
  justify-content: center;
  align-items: center;
  border-radius: var(--td-radius-small);
  overflow: hidden;
}

.tdesign-demo-image-viewer__ui-image--hover {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.6);
  color: var(--td-text-color-anti);
  line-height: 22px;
  transition: 0.2s;
}

.tdesign-demo-image-viewer__ui-image:hover .tdesign-demo-image-viewer__ui-image--hover {
  opacity: 1;
  cursor: pointer;
}

.tdesign-demo-image-viewer__ui-image--img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  cursor: pointer;
  position: absolute;
}

.tdesign-demo-image-viewer__ui-image--footer {
  padding: 0 16px;
  height: 56px;
  width: 100%;
  line-height: 56px;
  font-size: 16px;
  position: absolute;
  bottom: 0;
  color: var(--td-text-color-anti);
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%);
  display: flex;
  box-sizing: border-box;
}

.tdesign-demo-image-viewer__ui-image--title {
  flex: 1;
}

.tdesign-demo-popup__reference {
  margin-left: 16px;
}

.tdesign-demo-image-viewer__ui-image--icons .tdesign-demo-icon {
  cursor: pointer;
}

.tdesign-demo-image-viewer__base {
  width: 160px;
  height: 160px;
  margin: 10px;
  border: 4px solid var(--td-bg-color-secondarycontainer);
  border-radius: var(--td-radius-medium);
}
</style>
`,t=`<template>
  <div class="tdesign-demo-image-viewer__base">
    <t-image-viewer v-model="visible" draggable mode="modeless" :images="[img]">
      <template #trigger="{ open }">
        <div class="tdesign-demo-image-viewer__ui-image">
          <img alt="test" :src="img" class="tdesign-demo-image-viewer__ui-image--img" />
          <div class="tdesign-demo-image-viewer__ui-image--hover" @click="open">
            <span><browse-icon size="1.4em" /> \u9884\u89C8</span>
          </div>
        </div>
      </template>
    </t-image-viewer>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue';
import { BrowseIcon } from 'tdesign-icons-vue';

const img = ref('https://tdesign.gtimg.com/demo/demo-image-1.png');
const visible = ref(false);
<\/script>

<style scoped>
.tdesign-demo-image-viewer__ui-image {
  width: 160px;
  height: 160px;
  display: inline-flex;
  position: relative;
  justify-content: center;
  align-items: center;
  border-radius: var(--td-radius-small);
  overflow: hidden;
}

.tdesign-demo-image-viewer__ui-image--hover {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.6);
  color: var(--td-text-color-anti);
  line-height: 22px;
  transition: 0.2s;
}

.tdesign-demo-image-viewer__ui-image:hover .tdesign-demo-image-viewer__ui-image--hover {
  opacity: 1;
  cursor: pointer;
}

.tdesign-demo-image-viewer__ui-image--img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  cursor: pointer;
  position: absolute;
}

.tdesign-demo-image-viewer__ui-image--footer {
  padding: 0 16px;
  height: 56px;
  width: 100%;
  line-height: 56px;
  font-size: 16px;
  position: absolute;
  bottom: 0;
  color: var(--td-text-color-anti);
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%);
  display: flex;
  box-sizing: border-box;
}

.tdesign-demo-image-viewer__ui-image--title {
  flex: 1;
}

.tdesign-demo-popup__reference {
  margin-left: 16px;
}

.tdesign-demo-image-viewer__ui-image--icons .tdesign-demo-icon {
  cursor: pointer;
}

.tdesign-demo-image-viewer__base {
  width: 160px;
  height: 160px;
  margin: 10px;
  border: 4px solid var(--td-bg-color-secondarycontainer);
  border-radius: var(--td-radius-medium);
}
</style>
`,o=`<template>
  <div>
    <t-image-viewer v-model="visible" :trigger="trigger" :images="['https://tdesign.gtimg.com/demo/demo-image-1.png']">
    </t-image-viewer>
  </div>
</template>

<script lang="jsx">
export default {
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    trigger(h, { open }) {
      return <t-button onClick={open}>\u9884\u89C8\u5355\u5F20\u56FE\u7247</t-button>;
    },
  },
};
<\/script>
`,a=`<template>
  <div>
    <t-image-viewer v-model="visible" :trigger="trigger" :images="['https://tdesign.gtimg.com/demo/demo-image-1.png']">
    </t-image-viewer>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue';

const visible = ref(false);
const trigger = (h, { open }) => <t-button onClick={open}>\u9884\u89C8\u5355\u5F20\u56FE\u7247</t-button>;
<\/script>
`,r=`<template>
  <div>
    <t-image-viewer v-for="(img, index) in images" :key="img" :default-index="index" :images="images">
      <template #trigger="{ open }">
        <div class="tdesign-demo-image-viewer__ui-image tdesign-demo-image-viewer__base">
          <img alt="test" :src="img" class="tdesign-demo-image-viewer__ui-image--img" />
          <div class="tdesign-demo-image-viewer__ui-image--hover" @click="open">
            <span><browse-icon size="1.4em" /> \u9884\u89C8</span>
          </div>
        </div>
      </template>
    </t-image-viewer>
  </div>
</template>

<script>
import { BrowseIcon } from 'tdesign-icons-vue';

const img3 = 'https://tdesign.gtimg.com/demo/demo-image-3.png';
const img2 = 'https://tdesign.gtimg.com/demo/demo-image-2.png';
const img1 = 'https://tdesign.gtimg.com/demo/demo-image-1.png';

export default {
  components: {
    BrowseIcon,
  },
  data() {
    return {
      images: [img1, img2, img3],
    };
  },
};
<\/script>
<style scoped>
.tdesign-demo-image-viewer__ui-image {
  width: 100%;
  height: 100%;
  display: inline-flex;
  position: relative;
  justify-content: center;
  align-items: center;
  border-radius: var(--td-radius-small);
  overflow: hidden;
}

.tdesign-demo-image-viewer__ui-image--hover {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.6);
  color: var(--td-text-color-anti);
  line-height: 22px;
  transition: 0.2s;
}

.tdesign-demo-image-viewer__ui-image:hover .tdesign-demo-image-viewer__ui-image--hover {
  opacity: 1;
  cursor: pointer;
}

.tdesign-demo-image-viewer__ui-image--img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  cursor: pointer;
  position: absolute;
}

.tdesign-demo-image-viewer__ui-image--footer {
  padding: 0 16px;
  height: 56px;
  width: 100%;
  line-height: 56px;
  font-size: 16px;
  position: absolute;
  bottom: 0;
  color: var(--td-text-color-anti);
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%);
  display: flex;
  box-sizing: border-box;
}

.tdesign-demo-image-viewer__ui-image--title {
  flex: 1;
}

.tdesign-demo-popup__reference {
  margin-left: 16px;
}

.tdesign-demo-image-viewer__ui-image--icons .tdesign-demo-icon {
  cursor: pointer;
}

.tdesign-demo-image-viewer__base {
  width: 160px;
  height: 160px;
  margin: 10px;
  border: 4px solid var(--td-bg-color-secondarycontainer);
  border-radius: var(--td-radius-medium);
}
</style>
`,s=`<template>
  <div>
    <t-image-viewer v-for="(img, index) in images" :key="img" :default-index="index" :images="images">
      <template #trigger="{ open }">
        <div class="tdesign-demo-image-viewer__ui-image tdesign-demo-image-viewer__base">
          <img alt="test" :src="img" class="tdesign-demo-image-viewer__ui-image--img" />
          <div class="tdesign-demo-image-viewer__ui-image--hover" @click="open">
            <span><browse-icon size="1.4em" /> \u9884\u89C8</span>
          </div>
        </div>
      </template>
    </t-image-viewer>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { BrowseIcon } from 'tdesign-icons-vue';

const img3 = 'https://tdesign.gtimg.com/demo/demo-image-3.png';
const img2 = 'https://tdesign.gtimg.com/demo/demo-image-2.png';
const img1 = 'https://tdesign.gtimg.com/demo/demo-image-1.png';
const images = ref([img1, img2, img3]);
<\/script>
<style scoped>
.tdesign-demo-image-viewer__ui-image {
  width: 100%;
  height: 100%;
  display: inline-flex;
  position: relative;
  justify-content: center;
  align-items: center;
  border-radius: var(--td-radius-small);
  overflow: hidden;
}

.tdesign-demo-image-viewer__ui-image--hover {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.6);
  color: var(--td-text-color-anti);
  line-height: 22px;
  transition: 0.2s;
}

.tdesign-demo-image-viewer__ui-image:hover .tdesign-demo-image-viewer__ui-image--hover {
  opacity: 1;
  cursor: pointer;
}

.tdesign-demo-image-viewer__ui-image--img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  cursor: pointer;
  position: absolute;
}

.tdesign-demo-image-viewer__ui-image--footer {
  padding: 0 16px;
  height: 56px;
  width: 100%;
  line-height: 56px;
  font-size: 16px;
  position: absolute;
  bottom: 0;
  color: var(--td-text-color-anti);
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%);
  display: flex;
  box-sizing: border-box;
}

.tdesign-demo-image-viewer__ui-image--title {
  flex: 1;
}

.tdesign-demo-popup__reference {
  margin-left: 16px;
}

.tdesign-demo-image-viewer__ui-image--icons .tdesign-demo-icon {
  cursor: pointer;
}

.tdesign-demo-image-viewer__base {
  width: 160px;
  height: 160px;
  margin: 10px;
  border: 4px solid var(--td-bg-color-secondarycontainer);
  border-radius: var(--td-radius-medium);
}
</style>
`,g=`<template>
  <div class="tdesign-demo-image-viewer__base">
    <t-image-viewer v-model="visible" :images="images" :title="title">
      <template #trigger="{ open }">
        <div class="tdesign-demo-image-viewer__ui-image">
          <img alt="test" :src="img1" class="tdesign-demo-image-viewer__ui-image--img" />
          <div class="tdesign-demo-image-viewer__ui-image--hover" @click="open">
            <span><browse-icon size="1.4em" /> \u9884\u89C8</span>
          </div>
          <div class="tdesign-demo-image-viewer__ui-image--footer">
            <span class="tdesign-demo-image-viewer__ui-image--title">{{ title }}</span>
          </div>
        </div>
      </template>
    </t-image-viewer>
  </div>
</template>

<script>
import { BrowseIcon } from 'tdesign-icons-vue';

const IMAGE3 = 'https://tdesign.gtimg.com/demo/demo-image-3.png';
const IMAGE2 = 'https://tdesign.gtimg.com/demo/demo-image-2.png';
const IMAGE1 = 'https://tdesign.gtimg.com/demo/demo-image-1.png';

export default {
  components: {
    BrowseIcon,
  },
  data() {
    return {
      visible: false,
      img1: IMAGE1,
      images: [IMAGE1, IMAGE2, IMAGE3],
      title: '\u76F8\u518C\u5C01\u9762\u6807\u9898',
    };
  },
};
<\/script>

<style scoped>
.tdesign-demo-image-viewer__ui-image {
  width: 240px;
  height: 240px;
  display: inline-flex;
  position: relative;
  justify-content: center;
  align-items: center;
  border-radius: var(--td-radius-small);
  overflow: hidden;
}

.tdesign-demo-image-viewer__ui-image--hover {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.6);
  color: var(--td-text-color-anti);
  line-height: 22px;
  transition: 0.2s;
}

.tdesign-demo-image-viewer__ui-image:hover .tdesign-demo-image-viewer__ui-image--hover {
  opacity: 1;
  cursor: pointer;
}

.tdesign-demo-image-viewer__ui-image--img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  cursor: pointer;
  position: absolute;
}

.tdesign-demo-image-viewer__ui-image--footer {
  padding: 0 16px;
  height: 56px;
  width: 100%;
  line-height: 56px;
  font-size: 16px;
  position: absolute;
  bottom: 0;
  color: var(--td-text-color-anti);
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%);
  display: flex;
  box-sizing: border-box;
}

.tdesign-demo-image-viewer__ui-image--title {
  flex: 1;
}

.tdesign-demo-popup__reference {
  margin-left: 16px;
}

.tdesign-demo-image-viewer__ui-image--icons .tdesign-demo-icon {
  cursor: pointer;
}

.tdesign-demo-image-viewer__base {
  width: 240px;
  height: 240px;
  margin: 10px;
  border: 4px solid var(--td-bg-color-secondarycontainer);
  border-radius: var(--td-radius-medium);
}
</style>
`,m=`<template>
  <div class="tdesign-demo-image-viewer__base">
    <t-image-viewer v-model="visible" :images="images" :title="title">
      <template #trigger="{ open }">
        <div class="tdesign-demo-image-viewer__ui-image">
          <img alt="test" :src="img1" class="tdesign-demo-image-viewer__ui-image--img" />
          <div class="tdesign-demo-image-viewer__ui-image--hover" @click="open">
            <span><browse-icon size="1.4em" /> \u9884\u89C8</span>
          </div>
          <div class="tdesign-demo-image-viewer__ui-image--footer">
            <span class="tdesign-demo-image-viewer__ui-image--title">{{ title }}</span>
          </div>
        </div>
      </template>
    </t-image-viewer>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { BrowseIcon } from 'tdesign-icons-vue';

const IMAGE3 = 'https://tdesign.gtimg.com/demo/demo-image-3.png';
const IMAGE2 = 'https://tdesign.gtimg.com/demo/demo-image-2.png';
const IMAGE1 = 'https://tdesign.gtimg.com/demo/demo-image-1.png';
const visible = ref(false);
const img1 = ref(IMAGE1);
const images = ref([IMAGE1, IMAGE2, IMAGE3]);
const title = ref('\u76F8\u518C\u5C01\u9762\u6807\u9898');
<\/script>

<style scoped>
.tdesign-demo-image-viewer__ui-image {
  width: 240px;
  height: 240px;
  display: inline-flex;
  position: relative;
  justify-content: center;
  align-items: center;
  border-radius: var(--td-radius-small);
  overflow: hidden;
}

.tdesign-demo-image-viewer__ui-image--hover {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.6);
  color: var(--td-text-color-anti);
  line-height: 22px;
  transition: 0.2s;
}

.tdesign-demo-image-viewer__ui-image:hover .tdesign-demo-image-viewer__ui-image--hover {
  opacity: 1;
  cursor: pointer;
}

.tdesign-demo-image-viewer__ui-image--img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  cursor: pointer;
  position: absolute;
}

.tdesign-demo-image-viewer__ui-image--footer {
  padding: 0 16px;
  height: 56px;
  width: 100%;
  line-height: 56px;
  font-size: 16px;
  position: absolute;
  bottom: 0;
  color: var(--td-text-color-anti);
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%);
  display: flex;
  box-sizing: border-box;
}

.tdesign-demo-image-viewer__ui-image--title {
  flex: 1;
}

.tdesign-demo-popup__reference {
  margin-left: 16px;
}

.tdesign-demo-image-viewer__ui-image--icons .tdesign-demo-icon {
  cursor: pointer;
}

.tdesign-demo-image-viewer__base {
  width: 240px;
  height: 240px;
  margin: 10px;
  border: 4px solid var(--td-bg-color-secondarycontainer);
  border-radius: var(--td-radius-medium);
}
</style>
`,d=`<template>
  <div>
    <div class="tdesign-demo-image-viewer__ui-image tdesign-demo-image-viewer__base">
      <t-image-viewer :trigger="trigger" :images="images"> </t-image-viewer>
    </div>
    <div class="tdesign-demo-image-viewer__ui-image tdesign-demo-image-viewer__base">
      <t-image-viewer :images="[images[0].mainImage]" :trigger="trigger"> </t-image-viewer>
    </div>
  </div>
</template>

<script lang="jsx">
import { BrowseIcon } from 'tdesign-icons-vue';

const img = 'https://tdesign.gtimg.com/demo/demo-image-1.png';
const initialImages = [
  {
    mainImage: 'https://tdesign.gtimg.com/demo/demo-image-2.png',
    thumbnail: 'https://tdesign.gtimg.com/demo/demo-image-1.png',
  },
];

export default {
  data() {
    return {
      images: initialImages,
    };
  },
  methods: {
    trigger(h, { open }) {
      return (
        <div class="tdesign-demo-image-viewer__ui-image">
          <img alt="test" src={img} class="tdesign-demo-image-viewer__ui-image--img" />
          <div class="tdesign-demo-image-viewer__ui-image--hover" onClick={open}>
            <span>
              <BrowseIcon size="1.4em" /> \u9884\u89C8
            </span>
          </div>
        </div>
      );
    },
  },
};
<\/script>

<style>
.tdesign-demo-image-viewer__ui-image {
  width: 160px;
  height: 160px;
  display: inline-flex;
  position: relative;
  justify-content: center;
  align-items: center;
  border-radius: var(--td-radius-small);
  overflow: hidden;
}

.tdesign-demo-image-viewer__ui-image--hover {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.6);
  color: var(--td-text-color-anti);
  line-height: 22px;
  transition: 0.2s;
}

.tdesign-demo-image-viewer__ui-image:hover .tdesign-demo-image-viewer__ui-image--hover {
  opacity: 1;
  cursor: pointer;
}

.tdesign-demo-image-viewer__ui-image--img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  cursor: pointer;
  position: absolute;
}

.tdesign-demo-image-viewer__ui-image--footer {
  padding: 0 16px;
  height: 56px;
  width: 100%;
  line-height: 56px;
  font-size: 16px;
  position: absolute;
  bottom: 0;
  color: var(--td-text-color-anti);
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%);
  display: flex;
  box-sizing: border-box;
}

.tdesign-demo-image-viewer__ui-image--title {
  flex: 1;
}

.tdesign-demo-popup__reference {
  margin-left: 16px;
}

.tdesign-demo-image-viewer__ui-image--icons .tdesign-demo-icon {
  cursor: pointer;
}

.tdesign-demo-image-viewer__base {
  width: 160px;
  height: 160px;
  margin: 10px;
  border: 4px solid var(--td-bg-color-secondarycontainer);
  border-radius: var(--td-radius-medium);
}
</style>
`,l=`<template>
  <div>
    <div class="tdesign-demo-image-viewer__ui-image tdesign-demo-image-viewer__base">
      <t-image-viewer :trigger="trigger" :images="images"> </t-image-viewer>
    </div>
    <div class="tdesign-demo-image-viewer__ui-image tdesign-demo-image-viewer__base">
      <t-image-viewer :images="[images[0].mainImage]" :trigger="trigger"> </t-image-viewer>
    </div>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue';
import { BrowseIcon } from 'tdesign-icons-vue';

const img = 'https://tdesign.gtimg.com/demo/demo-image-1.png';
const initialImages = [
  {
    mainImage: 'https://tdesign.gtimg.com/demo/demo-image-2.png',
    thumbnail: 'https://tdesign.gtimg.com/demo/demo-image-1.png',
  },
];
const images = ref(initialImages);
const trigger = (h, { open }) => (
  <div class="tdesign-demo-image-viewer__ui-image">
    <img alt="test" src={img} class="tdesign-demo-image-viewer__ui-image--img" />
    <div class="tdesign-demo-image-viewer__ui-image--hover" onClick={open}>
      <span>
        <BrowseIcon size="1.4em" /> \u9884\u89C8
      </span>
    </div>
  </div>
);
<\/script>

<style>
.tdesign-demo-image-viewer__ui-image {
  width: 160px;
  height: 160px;
  display: inline-flex;
  position: relative;
  justify-content: center;
  align-items: center;
  border-radius: var(--td-radius-small);
  overflow: hidden;
}

.tdesign-demo-image-viewer__ui-image--hover {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.6);
  color: var(--td-text-color-anti);
  line-height: 22px;
  transition: 0.2s;
}

.tdesign-demo-image-viewer__ui-image:hover .tdesign-demo-image-viewer__ui-image--hover {
  opacity: 1;
  cursor: pointer;
}

.tdesign-demo-image-viewer__ui-image--img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  cursor: pointer;
  position: absolute;
}

.tdesign-demo-image-viewer__ui-image--footer {
  padding: 0 16px;
  height: 56px;
  width: 100%;
  line-height: 56px;
  font-size: 16px;
  position: absolute;
  bottom: 0;
  color: var(--td-text-color-anti);
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%);
  display: flex;
  box-sizing: border-box;
}

.tdesign-demo-image-viewer__ui-image--title {
  flex: 1;
}

.tdesign-demo-popup__reference {
  margin-left: 16px;
}

.tdesign-demo-image-viewer__ui-image--icons .tdesign-demo-icon {
  cursor: pointer;
}

.tdesign-demo-image-viewer__base {
  width: 160px;
  height: 160px;
  margin: 10px;
  border: 4px solid var(--td-bg-color-secondarycontainer);
  border-radius: var(--td-radius-medium);
}
</style>
`,p=`<template>
  <div class="tdesign-demo-image-viewer-wrapper">
    <div v-for="(image, index) in images" :key="index">
      <div
        v-if="isError[index]"
        class="tdesign-demo-image-viewer__error tdesign-demo-image-viewer__ui-image tdesign-demo-image-viewer__base"
      >
        <div class="tdesign-demo-image-viewer__error-content">
          <image-error-icon name="image-error" size="2em" />
          <div>\u56FE\u7247\u65E0\u6CD5\u663E\u793A</div>
        </div>
      </div>
      <t-image-viewer v-else :visible="visible[index]" :images="images" :default-index="index" @close="onClose(index)">
        <template #trigger>
          <div class="tdesign-demo-image-viewer__ui-image tdesign-demo-image-viewer__base">
            <img alt="test" :src="image" class="tdesign-demo-image-viewer__ui-image--img" @error="onError(index)" />
            <div class="tdesign-demo-image-viewer__ui-image--hover" @click="onOpen(index)">
              <span><browse-icon size="1.4em" /> \u9884\u89C8</span>
            </div>
          </div>
        </template>
      </t-image-viewer>
    </div>
  </div>
</template>

<script>
import { BrowseIcon, ImageErrorIcon } from 'tdesign-icons-vue';

const initialImages = [
  'https://tdesign.gtimg.com/demo/demo-image-1.png',
  'https://tdesign.gtimg.com/demo/demo-image-error1.png',
  'https://tdesign.gtimg.com/demo/demo-image-error2.png',
  'https://tdesign.gtimg.com/demo/demo-image-error3.png',
];

export default {
  components: {
    BrowseIcon,
    ImageErrorIcon,
  },
  data() {
    return {
      images: initialImages,
      visible: [false, false, false, false],
      isError: [false, false, false, false],
    };
  },
  methods: {
    onOpen(index) {
      this.visible = this.visible.map((item, i) => {
        if (i === index) return true;
        return item;
      });
    },
    onClose(index) {
      this.visible = this.visible.map((item, i) => {
        if (i === index) return false;
        return item;
      });
    },
    onError(index) {
      this.isError[index] = true;
      this.isError = this.isError.map((item, i) => {
        if (i === index) {
          return true;
        }
        return item;
      });
    },
  },
};
<\/script>

<style scoped>
.tdesign-demo-image-viewer-wrapper {
  display: flex;
}
.tdesign-demo-image-viewer__ui-image {
  width: 100%;
  height: 100%;
  display: inline-flex;
  position: relative;
  justify-content: center;
  align-items: center;
  border-radius: var(--td-radius-small);
  overflow: hidden;
}

.tdesign-demo-image-viewer__ui-image--hover {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.6);
  color: var(--td-text-color-anti);
  line-height: 22px;
  transition: 0.2s;
}

.tdesign-demo-image-viewer__ui-image:hover .tdesign-demo-image-viewer__ui-image--hover {
  opacity: 1;
  cursor: pointer;
}

.tdesign-demo-image-viewer__ui-image--img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  cursor: pointer;
  position: absolute;
}

.tdesign-demo-image-viewer__ui-image--footer {
  padding: 0 16px;
  height: 56px;
  width: 100%;
  line-height: 56px;
  font-size: 16px;
  position: absolute;
  bottom: 0;
  color: var(--td-text-color-anti);
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%);
  display: flex;
  box-sizing: border-box;
}

.tdesign-demo-image-viewer__ui-image--title {
  flex: 1;
}

.tdesign-demo-popup__reference {
  margin-left: 16px;
}

.tdesign-demo-image-viewer__ui-image--icons .tdesign-demo-icon {
  cursor: pointer;
}

.tdesign-demo-image-viewer__error {
  background-color: var(--td-bg-color-component-disabled);
  border-radius: 4px;
  color: var(--td-text-color-disabled);
  cursor: inherit;
}

.tdesign-demo-image-viewer__error-content {
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  font-size: 14px;
}

.tdesign-demo-image-viewer__base {
  width: 160px;
  height: 160px;
  margin: 10px;
  border: 4px solid var(--td-bg-color-secondarycontainer);
  border-radius: var(--td-radius-medium);
}
</style>
`,c=`<template>
  <div class="tdesign-demo-image-viewer-wrapper">
    <div v-for="(image, index) in images" :key="index">
      <div
        v-if="isError[index]"
        class="tdesign-demo-image-viewer__error tdesign-demo-image-viewer__ui-image tdesign-demo-image-viewer__base"
      >
        <div class="tdesign-demo-image-viewer__error-content">
          <image-error-icon name="image-error" size="2em" />
          <div>\u56FE\u7247\u65E0\u6CD5\u663E\u793A</div>
        </div>
      </div>
      <t-image-viewer v-else :visible="visible[index]" :images="images" :default-index="index" @close="onClose(index)">
        <template #trigger>
          <div class="tdesign-demo-image-viewer__ui-image tdesign-demo-image-viewer__base">
            <img alt="test" :src="image" class="tdesign-demo-image-viewer__ui-image--img" @error="onError(index)" />
            <div class="tdesign-demo-image-viewer__ui-image--hover" @click="onOpen(index)">
              <span><browse-icon size="1.4em" /> \u9884\u89C8</span>
            </div>
          </div>
        </template>
      </t-image-viewer>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { BrowseIcon, ImageErrorIcon } from 'tdesign-icons-vue';

const initialImages = [
  'https://tdesign.gtimg.com/demo/demo-image-1.png',
  'https://tdesign.gtimg.com/demo/demo-image-error1.png',
  'https://tdesign.gtimg.com/demo/demo-image-error2.png',
  'https://tdesign.gtimg.com/demo/demo-image-error3.png',
];
const images = ref(initialImages);
const visible = ref([false, false, false, false]);
const isError = ref([false, false, false, false]);
const onOpen = (index) => {
  visible.value = visible.value.map((item, i) => {
    if (i === index) return true;
    return item;
  });
};
const onClose = (index) => {
  visible.value = visible.value.map((item, i) => {
    if (i === index) return false;
    return item;
  });
};
const onError = (index) => {
  isError.value[index] = true;
  isError.value = isError.value.map((item, i) => {
    if (i === index) {
      return true;
    }
    return item;
  });
};
<\/script>

<style scoped>
.tdesign-demo-image-viewer-wrapper {
  display: flex;
}
.tdesign-demo-image-viewer__ui-image {
  width: 100%;
  height: 100%;
  display: inline-flex;
  position: relative;
  justify-content: center;
  align-items: center;
  border-radius: var(--td-radius-small);
  overflow: hidden;
}

.tdesign-demo-image-viewer__ui-image--hover {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.6);
  color: var(--td-text-color-anti);
  line-height: 22px;
  transition: 0.2s;
}

.tdesign-demo-image-viewer__ui-image:hover .tdesign-demo-image-viewer__ui-image--hover {
  opacity: 1;
  cursor: pointer;
}

.tdesign-demo-image-viewer__ui-image--img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  cursor: pointer;
  position: absolute;
}

.tdesign-demo-image-viewer__ui-image--footer {
  padding: 0 16px;
  height: 56px;
  width: 100%;
  line-height: 56px;
  font-size: 16px;
  position: absolute;
  bottom: 0;
  color: var(--td-text-color-anti);
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%);
  display: flex;
  box-sizing: border-box;
}

.tdesign-demo-image-viewer__ui-image--title {
  flex: 1;
}

.tdesign-demo-popup__reference {
  margin-left: 16px;
}

.tdesign-demo-image-viewer__ui-image--icons .tdesign-demo-icon {
  cursor: pointer;
}

.tdesign-demo-image-viewer__error {
  background-color: var(--td-bg-color-component-disabled);
  border-radius: 4px;
  color: var(--td-text-color-disabled);
  cursor: inherit;
}

.tdesign-demo-image-viewer__error-content {
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  font-size: 14px;
}

.tdesign-demo-image-viewer__base {
  width: 160px;
  height: 160px;
  margin: 10px;
  border: 4px solid var(--td-bg-color-secondarycontainer);
  border-radius: var(--td-radius-medium);
}
</style>
`,v=`<template>
  <div class="tdesign-demo-image-viewer__base">
    <t-image-viewer v-model="visible" :title="title" :images="images" :index="index" @index-change="onIndexChange">
      <template #trigger>
        <div class="tdesign-demo-image-viewer__ui-image">
          <img alt="test" :src="img1" class="tdesign-demo-image-viewer__ui-image--img" />
          <div class="tdesign-demo-image-viewer__ui-image--hover" @click="onOpen">
            <span> <browse-icon size="1.4em" /> \u9884\u89C8 </span>
          </div>
          <div class="tdesign-demo-image-viewer__ui-image--footer">
            <span class="tdesign-demo-image-viewer__ui-image--title">{{ title }}</span>
            <span class="tdesign-demo-image-viewer__ui-image--icons">
              <browse-icon @click="onOpen" />
              <t-popup
                trigger="hover"
                placement="right-bottom"
                :overlay-style="{ width: '140px', padding: '6px' }"
                destroy-on-close
                :zIndex="1000"
              >
                <template #content>
                  <ul class="tdesign-demo-select__list">
                    <li
                      v-for="(image, i) in images"
                      :key="i"
                      class="tdesign-demo-selectdesign-demo-option"
                      @click="onOpen(i)"
                    >
                      <span>\u56FE\u7247{{ i + 1 }}</span>
                    </li>
                  </ul>
                </template>
                <ellipsis-icon class="tdesign-demo-image-viewer__ui-image--ellipsis" />
              </t-popup>
            </span>
          </div>
        </div>
      </template>
    </t-image-viewer>
  </div>
</template>

<script>
import { BrowseIcon, EllipsisIcon } from 'tdesign-icons-vue';

const IMAGE3 = 'https://tdesign.gtimg.com/demo/demo-image-3.png';
const IMAGE2 = 'https://tdesign.gtimg.com/demo/demo-image-2.png';
const IMAGE1 = 'https://tdesign.gtimg.com/demo/demo-image-1.png';

export default {
  components: {
    BrowseIcon,
    EllipsisIcon,
  },
  data() {
    return {
      images: [IMAGE1, IMAGE2, IMAGE3],
      index: 0,
      visible: false,
      img1: IMAGE1,
      title: '\u76F8\u518C\u5C01\u9762\u6807\u9898',
    };
  },
  methods: {
    onIndexChange(i) {
      this.index = i;
    },
    onOpen(i) {
      typeof i === 'number' && this.onIndexChange(i);
      this.visible = true;
    },
  },
};
<\/script>

<style scoped>
.tdesign-demo-image-viewer__ui-image {
  width: 240px;
  height: 240px;
  display: inline-flex;
  position: relative;
  justify-content: center;
  align-items: center;
  border-radius: var(--td-radius-small);
  overflow: hidden;
}

.tdesign-demo-image-viewer__ui-image--hover {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.6);
  color: var(--td-text-color-anti);
  line-height: 22px;
  transition: 0.2s;
}

.tdesign-demo-image-viewer__ui-image:hover .tdesign-demo-image-viewer__ui-image--hover {
  opacity: 1;
  cursor: pointer;
}

.tdesign-demo-image-viewer__ui-image--img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  cursor: pointer;
  position: absolute;
}

.tdesign-demo-image-viewer__ui-image--footer {
  padding: 0 16px;
  height: 56px;
  width: 100%;
  line-height: 56px;
  font-size: 16px;
  position: absolute;
  bottom: 0;
  color: var(--td-text-color-anti);
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%);
  display: flex;
  box-sizing: border-box;
}

.tdesign-demo-image-viewer__ui-image--title {
  flex: 1;
}

.tdesign-demo-popup__reference {
  margin-left: 16px;
}

.tdesign-demo-image-viewer__ui-image--icons .tdesign-demo-icon {
  cursor: pointer;
}

.tdesign-demo-image-viewer__base {
  width: 240px;
  height: 240px;
  margin: 10px;
  border: 4px solid var(--td-bg-color-secondarycontainer);
  border-radius: var(--td-radius-medium);
}
</style>
`,u=`<template>
  <div class="tdesign-demo-image-viewer__base">
    <t-image-viewer v-model="visible" :title="title" :images="images" :index="index" @index-change="onIndexChange">
      <template #trigger>
        <div class="tdesign-demo-image-viewer__ui-image">
          <img alt="test" :src="img1" class="tdesign-demo-image-viewer__ui-image--img" />
          <div class="tdesign-demo-image-viewer__ui-image--hover" @click="onOpen">
            <span> <browse-icon size="1.4em" /> \u9884\u89C8 </span>
          </div>
          <div class="tdesign-demo-image-viewer__ui-image--footer">
            <span class="tdesign-demo-image-viewer__ui-image--title">{{ title }}</span>
            <span class="tdesign-demo-image-viewer__ui-image--icons">
              <browse-icon @click="onOpen" />
              <t-popup
                trigger="hover"
                placement="right-bottom"
                :overlay-style="{ width: '140px', padding: '6px' }"
                destroy-on-close
                :zIndex="1000"
              >
                <template #content>
                  <ul class="tdesign-demo-select__list">
                    <li
                      v-for="(image, i) in images"
                      :key="i"
                      class="tdesign-demo-selectdesign-demo-option"
                      @click="onOpen(i)"
                    >
                      <span>\u56FE\u7247{{ i + 1 }}</span>
                    </li>
                  </ul>
                </template>
                <ellipsis-icon class="tdesign-demo-image-viewer__ui-image--ellipsis" />
              </t-popup>
            </span>
          </div>
        </div>
      </template>
    </t-image-viewer>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { BrowseIcon, EllipsisIcon } from 'tdesign-icons-vue';

const IMAGE3 = 'https://tdesign.gtimg.com/demo/demo-image-3.png';
const IMAGE2 = 'https://tdesign.gtimg.com/demo/demo-image-2.png';
const IMAGE1 = 'https://tdesign.gtimg.com/demo/demo-image-1.png';
const images = ref([IMAGE1, IMAGE2, IMAGE3]);
const index = ref(0);
const visible = ref(false);
const img1 = ref(IMAGE1);
const title = ref('\u76F8\u518C\u5C01\u9762\u6807\u9898');
const onIndexChange = (i) => {
  index.value = i;
};
const onOpen = (i) => {
  typeof i === 'number' && onIndexChange(i);
  visible.value = true;
};
<\/script>

<style scoped>
.tdesign-demo-image-viewer__ui-image {
  width: 240px;
  height: 240px;
  display: inline-flex;
  position: relative;
  justify-content: center;
  align-items: center;
  border-radius: var(--td-radius-small);
  overflow: hidden;
}

.tdesign-demo-image-viewer__ui-image--hover {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.6);
  color: var(--td-text-color-anti);
  line-height: 22px;
  transition: 0.2s;
}

.tdesign-demo-image-viewer__ui-image:hover .tdesign-demo-image-viewer__ui-image--hover {
  opacity: 1;
  cursor: pointer;
}

.tdesign-demo-image-viewer__ui-image--img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  cursor: pointer;
  position: absolute;
}

.tdesign-demo-image-viewer__ui-image--footer {
  padding: 0 16px;
  height: 56px;
  width: 100%;
  line-height: 56px;
  font-size: 16px;
  position: absolute;
  bottom: 0;
  color: var(--td-text-color-anti);
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%);
  display: flex;
  box-sizing: border-box;
}

.tdesign-demo-image-viewer__ui-image--title {
  flex: 1;
}

.tdesign-demo-popup__reference {
  margin-left: 16px;
}

.tdesign-demo-image-viewer__ui-image--icons .tdesign-demo-icon {
  cursor: pointer;
}

.tdesign-demo-image-viewer__base {
  width: 240px;
  height: 240px;
  margin: 10px;
  border: 4px solid var(--td-bg-color-secondarycontainer);
  border-radius: var(--td-radius-medium);
}
</style>
`;export{e as D,n as a,i as b,t as c,o as d,a as e,r as f,s as g,g as h,m as i,d as j,l as k,p as l,c as m,v as n,u as o};
