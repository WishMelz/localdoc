import{Y as s,n as m}from"./index.663c003f.js";var b=`<template>
  <!-- :sizeLimit="1024" \u9ED8\u8BA4\u5355\u4F4D\u4E3A\uFF1AKB \u3002\u9519\u8BEF\u63D0\u793A\u4E3A \u56FE\u7247\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 {sizeLimit} KB-->
  <!-- :sizeLimit="{ size: 2, unit: 'MB' }" -->
  <!-- :sizeLimit="{ size: 2, unit: 'MB', message: '\u56FE\u7247\u592A\u5927' }" -->
  <!-- :sizeLimit="{ size: 2, unit: 'MB', message: '\u56FE\u7247\u592A\u5927\uFF0C\u4E0D\u80FD\u8D85\u8FC7 {sizeLimit} MB' }" -->
  <t-space direction="vertical">
    <t-space>
      <t-radio-group v-model="multiple" variant="default-filled">
        <t-radio-button :value="false">\u5355\u6587\u4EF6\u4E0A\u4F20</t-radio-button>
        <t-radio-button :value="true">\u591A\u6587\u4EF6\u4E0A\u4F20</t-radio-button>
      </t-radio-group>
    </t-space>
    <t-space>
      <t-checkbox v-model="disabled">\u7981\u7528\u72B6\u6001</t-checkbox>
      <t-checkbox v-if="multiple" v-model="uploadInOneRequest">\u591A\u4E2A\u6587\u4EF6\u4E00\u4E2A\u8BF7\u6C42\u4E0A\u4F20</t-checkbox>
      <t-checkbox v-if="multiple" v-model="isBatchUpload">\u6574\u4F53\u66FF\u6362\u4E0A\u4F20</t-checkbox>
      <t-checkbox v-model="autoUpload">\u81EA\u52A8\u4E0A\u4F20</t-checkbox>
      <t-button v-if="!autoUpload" variant="base" theme="default" style="height: 22px" @click="uploadFiles">
        \u70B9\u51FB\u624B\u52A8\u4E0A\u4F20
      </t-button>
    </t-space>

    <br />
    <t-space>
      <t-upload
        ref="uploadRef1"
        v-model="files1"
        action="https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"
        :placeholder="multiple ? '\u6587\u4EF6\u6570\u91CF\u4E0D\u8D85\u8FC7 5 \u4E2A' : '\u8981\u6C42\u6587\u4EF6\u5927\u5C0F\u5728 1M \u4EE5\u5185'"
        :multiple="multiple"
        :auto-upload="autoUpload"
        :upload-all-files-in-one-request="uploadInOneRequest"
        :is-batch-upload="isBatchUpload"
        :size-limit="{ size: 1, unit: 'MB' }"
        :max="5"
        :disabled="disabled"
        :allow-upload-duplicate-file="true"
        @select-change="handleSelectChange"
        @fail="handleFail"
        @success="handleSuccess"
        @one-file-success="onOneFileSuccess"
        @validate="onValidate"
      />

      <t-upload
        ref="uploadRef2"
        v-model="files2"
        :multiple="multiple"
        :disabled="disabled"
        :auto-upload="autoUpload"
        :upload-all-files-in-one-request="uploadInOneRequest"
        :is-batch-upload="isBatchUpload"
        :trigger-button-props="{ theme: 'primary', variant: 'base' }"
        placeholder="\u8FD9\u662F\u4E00\u6BB5\u6CA1\u6709\u6587\u4EF6\u65F6\u7684\u5360\u4F4D\u6587\u672C"
        action="//service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"
        :style="{ marginLeft: '40px' }"
        @fail="handleFail"
      />

      <!-- formatResponse \u53EF\u63A7\u5236\u4E0A\u4F20\u6210\u529F\u6216\u8005\u5931\u8D25 -->
      <!-- tips="\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25\u793A\u4F8B" \u548C status="error" \u63A7\u5236\u56FA\u5B9A\u6587\u672C\u663E\u793A -->
      <t-upload
        ref="uploadRef3"
        v-model="files3"
        :multiple="multiple"
        :disabled="disabled"
        :auto-upload="autoUpload"
        :upload-all-files-in-one-request="uploadInOneRequest"
        :is-batch-upload="isBatchUpload"
        :format-response="formatResponse"
        placeholder="\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25\u793A\u4F8B"
        action="//service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"
        :style="{ marginLeft: '60px' }"
        @fail="handleFail"
      >
        <!-- \u81EA\u5B9A\u4E49\u6587\u4EF6\u5217\u8868\uFF0C\u793A\u4F8B\u4EE3\u7801\u6709\u6548\uFF0C\u52FF\u5220 -->
        <!-- <template #fileListDisplay="{ files }">
          <div>
            <div
              v-for="(file, index) in files"
              :key="file.name"
              class="t-upload__single-display-text t-upload__display-text--margin"
            >
              {{file.name}}\uFF08{{file.size}} B\uFF09
              <CloseIcon class="t-upload__icon-delete" @click="() => outsideRemove(index)" />
            </div>
          </div>
        </template> -->
      </t-upload>
    </t-space>
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      files1: [],
      files2: [
        {
          name: '\u8FD9\u662F\u4E00\u4E2A\u9ED8\u8BA4\u6587\u4EF6',
          status: 'success',
          url: 'https://tdesign.gtimg.com/site/source/figma-pc.png',
          size: 1000,
        },
      ],
      files3: [],
      multiple: false,
      uploadInOneRequest: false,
      autoUpload: true,
      isBatchUpload: false,
      disabled: false,
    };
  },

  watch: {
    multiple(val) {
      this.files3 = val
        ? [
          {
            name: '\u8FD9\u662F\u4E00\u4E2A\u4E0A\u4F20\u6210\u529F\u7684\u6587\u4EF6',
            status: 'success',
            url: 'https://tdesign.gtimg.com/site/source/figma-pc.png',
            size: 1000,
          },
          {
            name: '\u8FD9\u662F\u4E00\u4E2A\u4E0A\u4F20\u4E2D\u7684\u6587\u4EF6',
            status: 'progress',
            percent: 30,
            url: 'https://tdesign.gtimg.com/site/source/figma-pc.png',
            size: 1000,
          },
          {
            name: '\u8FD9\u662F\u4E00\u4E2A\u4E0A\u4F20\u5931\u8D25\u7684\u6587\u4EF6',
            status: 'fail',
            url: 'https://tdesign.gtimg.com/site/source/figma-pc.png',
            size: 1000,
          },
          {
            name: '\u8FD9\u662F\u4E00\u4E2A\u7B49\u5F85\u4E0A\u4F20\u7684\u6587\u4EF6',
            status: 'waiting',
            url: 'https://tdesign.gtimg.com/site/source/figma-pc.png',
            size: 1000,
          },
        ]
        : [];
    },
  },

  methods: {
    handleFail({ file }) {
      this.$message.error(\`\u6587\u4EF6 \${file.name} \u4E0A\u4F20\u5931\u8D25\`);
    },

    handleSelectChange(files) {
      console.log('onSelectChange', files);
    },

    handleSuccess(params) {
      console.log(params);
      this.$message.success('\u4E0A\u4F20\u6210\u529F');
    },

    onOneFileSuccess(params) {
      console.log('onOneFileSuccess', params);
    },

    onValidate(params) {
      const { files, type } = params;
      console.log('onValidate', type, files);
      const messageMap = {
        FILE_OVER_SIZE_LIMIT: '\u6587\u4EF6\u5927\u5C0F\u8D85\u51FA\u9650\u5236\uFF0C\u5DF2\u81EA\u52A8\u8FC7\u6EE4',
        FILES_OVER_LENGTH_LIMIT: '\u6587\u4EF6\u6570\u91CF\u8D85\u51FA\u9650\u5236\uFF0C\u4EC5\u4E0A\u4F20\u672A\u8D85\u51FA\u6570\u91CF\u7684\u6587\u4EF6',
        // if you need same name files, setting allowUploadDuplicateFile={true} please
        FILTER_FILE_SAME_NAME: '\u4E0D\u5141\u8BB8\u4E0A\u4F20\u540C\u540D\u6587\u4EF6',
        BEFORE_ALL_FILES_UPLOAD: 'beforeAllFilesUpload \u65B9\u6CD5\u62E6\u622A\u4E86\u6587\u4EF6',
        CUSTOM_BEFORE_UPLOAD: 'beforeUpload \u65B9\u6CD5\u62E6\u622A\u4E86\u6587\u4EF6',
      };
      // you can also set Upload.tips and Upload.status to show warning message.
      messageMap[type] && this.$message.warning(messageMap[type]);
    },

    // \u7528\u4E8E\u683C\u5F0F\u5316\u63A5\u53E3\u54CD\u5E94\u503C\uFF0Cerror \u4F1A\u88AB\u7528\u4E8E\u4E0A\u4F20\u5931\u8D25\u7684\u63D0\u793A\u6587\u5B57\uFF1Burl \u8868\u793A\u6587\u4EF6/\u56FE\u7247\u5730\u5740
    // error \u4E3A\u771F\u65F6\uFF0C\u7EC4\u4EF6\u4F1A\u5224\u5B9A\u4E3A\u4E0A\u4F20\u5931\u8D25
    formatResponse(res) {
      return { error: '\u4E0A\u4F20\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5', url: res.url };
    },

    // outsideRemove(index) {
    //   this.files3.splice(index, 1);
    // },

    uploadFiles() {
      this.$refs.uploadRef1.uploadFiles();
      this.$refs.uploadRef2.uploadFiles();
      this.$refs.uploadRef3.uploadFiles();
    },

    /** \u5355\u4E2A\u6587\u4EF6\u6821\u9A8C\u65B9\u6CD5\uFF0C\u793A\u4F8B\u4EE3\u7801\u6709\u6548\uFF0C\u52FF\u5220 */
    // beforeUpload(file) {
    //   this.$message.error(\`\u6587\u4EF6 \${file.name} \u4E0D\u6EE1\u8DB3\u6761\u4EF6\`);
    //   return false;
    // },

    /** \u5168\u90E8\u6587\u4EF6\u4E00\u6B21\u6027\u6821\u9A8C\u65B9\u6CD5\uFF0C\u793A\u4F8B\u4EE3\u7801\u6709\u6548\uFF0C\u52FF\u5220 */
    // beforeAllFilesUpload() {
    //   this.$message.error('\u6587\u4EF6\u4E0D\u6EE1\u8DB3\u6761\u4EF6');
    //   return false;
    // },
  },
};
<\/script>
`,w=`<template>
  <!-- :sizeLimit="1024" \u9ED8\u8BA4\u5355\u4F4D\u4E3A\uFF1AKB \u3002\u9519\u8BEF\u63D0\u793A\u4E3A \u56FE\u7247\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 {sizeLimit} KB-->
  <!-- :sizeLimit="{ size: 2, unit: 'MB' }" -->
  <!-- :sizeLimit="{ size: 2, unit: 'MB', message: '\u56FE\u7247\u592A\u5927' }" -->
  <!-- :sizeLimit="{ size: 2, unit: 'MB', message: '\u56FE\u7247\u592A\u5927\uFF0C\u4E0D\u80FD\u8D85\u8FC7 {sizeLimit} MB' }" -->
  <t-space direction="vertical">
    <t-space>
      <t-radio-group v-model="multiple" variant="default-filled">
        <t-radio-button :value="false">\u5355\u6587\u4EF6\u4E0A\u4F20</t-radio-button>
        <t-radio-button :value="true">\u591A\u6587\u4EF6\u4E0A\u4F20</t-radio-button>
      </t-radio-group>
    </t-space>
    <t-space>
      <t-checkbox v-model="disabled">\u7981\u7528\u72B6\u6001</t-checkbox>
      <t-checkbox v-if="multiple" v-model="uploadInOneRequest">\u591A\u4E2A\u6587\u4EF6\u4E00\u4E2A\u8BF7\u6C42\u4E0A\u4F20</t-checkbox>
      <t-checkbox v-if="multiple" v-model="isBatchUpload">\u6574\u4F53\u66FF\u6362\u4E0A\u4F20</t-checkbox>
      <t-checkbox v-model="autoUpload">\u81EA\u52A8\u4E0A\u4F20</t-checkbox>
      <t-button v-if="!autoUpload" variant="base" theme="default" style="height: 22px" @click="uploadFiles">
        \u70B9\u51FB\u624B\u52A8\u4E0A\u4F20
      </t-button>
    </t-space>

    <br />
    <t-space>
      <t-upload
        ref="uploadRef1"
        v-model="files1"
        action="https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"
        :placeholder="multiple ? '\u6587\u4EF6\u6570\u91CF\u4E0D\u8D85\u8FC7 5 \u4E2A' : '\u8981\u6C42\u6587\u4EF6\u5927\u5C0F\u5728 1M \u4EE5\u5185'"
        :multiple="multiple"
        :auto-upload="autoUpload"
        :upload-all-files-in-one-request="uploadInOneRequest"
        :is-batch-upload="isBatchUpload"
        :size-limit="{ size: 1, unit: 'MB' }"
        :max="5"
        :disabled="disabled"
        :allow-upload-duplicate-file="true"
        @select-change="handleSelectChange"
        @fail="handleFail"
        @success="handleSuccess"
        @one-file-success="onOneFileSuccess"
        @validate="onValidate"
      />

      <t-upload
        ref="uploadRef2"
        v-model="files2"
        :multiple="multiple"
        :disabled="disabled"
        :auto-upload="autoUpload"
        :upload-all-files-in-one-request="uploadInOneRequest"
        :is-batch-upload="isBatchUpload"
        :trigger-button-props="{ theme: 'primary', variant: 'base' }"
        placeholder="\u8FD9\u662F\u4E00\u6BB5\u6CA1\u6709\u6587\u4EF6\u65F6\u7684\u5360\u4F4D\u6587\u672C"
        action="//service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"
        :style="{ marginLeft: '40px' }"
        @fail="handleFail"
      />

      <!-- formatResponse \u53EF\u63A7\u5236\u4E0A\u4F20\u6210\u529F\u6216\u8005\u5931\u8D25 -->
      <!-- tips="\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25\u793A\u4F8B" \u548C status="error" \u63A7\u5236\u56FA\u5B9A\u6587\u672C\u663E\u793A -->
      <t-upload
        ref="uploadRef3"
        v-model="files3"
        :multiple="multiple"
        :disabled="disabled"
        :auto-upload="autoUpload"
        :upload-all-files-in-one-request="uploadInOneRequest"
        :is-batch-upload="isBatchUpload"
        :format-response="formatResponse"
        placeholder="\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25\u793A\u4F8B"
        action="//service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"
        :style="{ marginLeft: '60px' }"
        @fail="handleFail"
      >
        <!-- \u81EA\u5B9A\u4E49\u6587\u4EF6\u5217\u8868\uFF0C\u793A\u4F8B\u4EE3\u7801\u6709\u6548\uFF0C\u52FF\u5220 -->
        <!-- <template #fileListDisplay="{ files }">
          <div>
            <div
              v-for="(file, index) in files"
              :key="file.name"
              class="t-upload__single-display-text t-upload__display-text--margin"
            >
              {{file.name}}\uFF08{{file.size}} B\uFF09
              <CloseIcon class="t-upload__icon-delete" @click="() => outsideRemove(index)" />
            </div>
          </div>
        </template> -->
      </t-upload>
    </t-space>
  </t-space>
</template>
<script setup>
import { MessagePlugin } from 'tdesign-vue';
import { ref, watch } from 'vue';

const uploadRef1 = ref();
const uploadRef2 = ref();
const uploadRef3 = ref();
const files1 = ref([]);
const files2 = ref([
  {
    name: '\u8FD9\u662F\u4E00\u4E2A\u9ED8\u8BA4\u6587\u4EF6',
    status: 'success',
    url: 'https://tdesign.gtimg.com/site/source/figma-pc.png',
    size: 1000,
  },
]);
const files3 = ref([]);
const multiple = ref(false);
const uploadInOneRequest = ref(false);
const autoUpload = ref(true);
const isBatchUpload = ref(false);
const disabled = ref(false);
const handleFail = ({ file }) => {
  MessagePlugin.error(\`\u6587\u4EF6 \${file.name} \u4E0A\u4F20\u5931\u8D25\`);
};
const handleSelectChange = (files) => {
  console.log('onSelectChange', files);
};
const handleSuccess = (params) => {
  console.log(params);
  MessagePlugin.success('\u4E0A\u4F20\u6210\u529F');
};
const onOneFileSuccess = (params) => {
  console.log('onOneFileSuccess', params);
};
const onValidate = (params) => {
  const { files, type } = params;
  console.log('onValidate', type, files);
  const messageMap = {
    FILE_OVER_SIZE_LIMIT: '\u6587\u4EF6\u5927\u5C0F\u8D85\u51FA\u9650\u5236\uFF0C\u5DF2\u81EA\u52A8\u8FC7\u6EE4',
    FILES_OVER_LENGTH_LIMIT: '\u6587\u4EF6\u6570\u91CF\u8D85\u51FA\u9650\u5236\uFF0C\u4EC5\u4E0A\u4F20\u672A\u8D85\u51FA\u6570\u91CF\u7684\u6587\u4EF6',
    // if you need same name files, setting allowUploadDuplicateFile={true} please
    FILTER_FILE_SAME_NAME: '\u4E0D\u5141\u8BB8\u4E0A\u4F20\u540C\u540D\u6587\u4EF6',
    BEFORE_ALL_FILES_UPLOAD: 'beforeAllFilesUpload \u65B9\u6CD5\u62E6\u622A\u4E86\u6587\u4EF6',
    CUSTOM_BEFORE_UPLOAD: 'beforeUpload \u65B9\u6CD5\u62E6\u622A\u4E86\u6587\u4EF6',
  };
  // you can also set Upload.tips and Upload.status to show warning message.
  messageMap[type] && MessagePlugin.warning(messageMap[type]);
};
// \u7528\u4E8E\u683C\u5F0F\u5316\u63A5\u53E3\u54CD\u5E94\u503C\uFF0Cerror \u4F1A\u88AB\u7528\u4E8E\u4E0A\u4F20\u5931\u8D25\u7684\u63D0\u793A\u6587\u5B57\uFF1Burl \u8868\u793A\u6587\u4EF6/\u56FE\u7247\u5730\u5740
// error \u4E3A\u771F\u65F6\uFF0C\u7EC4\u4EF6\u4F1A\u5224\u5B9A\u4E3A\u4E0A\u4F20\u5931\u8D25
const formatResponse = (res) => ({
  error: '\u4E0A\u4F20\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5',
  url: res.url,
});
// const outsideRemove = (index) => {
//   files3.value.splice(index, 1);
// };
const uploadFiles = () => {
  uploadRef1.value.uploadFiles();
  uploadRef2.value.uploadFiles();
  uploadRef3.value.uploadFiles();
};
/** \u5355\u4E2A\u6587\u4EF6\u6821\u9A8C\u65B9\u6CD5\uFF0C\u793A\u4F8B\u4EE3\u7801\u6709\u6548\uFF0C\u52FF\u5220 */
// const beforeUpload = (file) => {
//   MessagePlugin.error(\`\u6587\u4EF6 \${file.name} \u4E0D\u6EE1\u8DB3\u6761\u4EF6\`);
//   return false;
// };
/** \u5168\u90E8\u6587\u4EF6\u4E00\u6B21\u6027\u6821\u9A8C\u65B9\u6CD5\uFF0C\u793A\u4F8B\u4EE3\u7801\u6709\u6548\uFF0C\u52FF\u5220 */
// const beforeAllFilesUpload = () => {
//   MessagePlugin.error('\u6587\u4EF6\u4E0D\u6EE1\u8DB3\u6761\u4EF6');
//   return false;
// };
watch(multiple, (val) => {
  files3.value = val
    ? [
      {
        name: '\u8FD9\u662F\u4E00\u4E2A\u4E0A\u4F20\u6210\u529F\u7684\u6587\u4EF6',
        status: 'success',
        url: 'https://tdesign.gtimg.com/site/source/figma-pc.png',
        size: 1000,
      },
      {
        name: '\u8FD9\u662F\u4E00\u4E2A\u4E0A\u4F20\u4E2D\u7684\u6587\u4EF6',
        status: 'progress',
        percent: 30,
        url: 'https://tdesign.gtimg.com/site/source/figma-pc.png',
        size: 1000,
      },
      {
        name: '\u8FD9\u662F\u4E00\u4E2A\u4E0A\u4F20\u5931\u8D25\u7684\u6587\u4EF6',
        status: 'fail',
        url: 'https://tdesign.gtimg.com/site/source/figma-pc.png',
        size: 1000,
      },
      {
        name: '\u8FD9\u662F\u4E00\u4E2A\u7B49\u5F85\u4E0A\u4F20\u7684\u6587\u4EF6',
        status: 'waiting',
        url: 'https://tdesign.gtimg.com/site/source/figma-pc.png',
        size: 1000,
      },
    ]
    : [];
});
<\/script>
`,F=`<template>
  <div class="tdesign-demo-upload">
    <div style="width: 350px">
      <t-upload
        action="https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"
        :tips="tips"
        v-model="files"
        @fail="handleFail"
        @success="onSuccess"
        theme="file-input"
        placeholder="\u672A\u9009\u62E9\u6587\u4EF6"
      ></t-upload>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      files: [],
      tips: '\u4E0A\u4F20\u6587\u4EF6\u5927\u5C0F\u5728 5M \u4EE5\u5185',
    };
  },
  methods: {
    handleFail({ file }) {
      this.$message.error(\`\u6587\u4EF6 \${file.name} \u4E0A\u4F20\u5931\u8D25\`);
    },
    onSuccess() {
      this.tips = '';
    },
  },
};
<\/script>
`,x=`<template>
  <div class="tdesign-demo-upload">
    <div style="width: 350px">
      <t-upload
        action="https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"
        :tips="tips"
        v-model="files"
        @fail="handleFail"
        @success="onSuccess"
        theme="file-input"
        placeholder="\u672A\u9009\u62E9\u6587\u4EF6"
      ></t-upload>
    </div>
  </div>
</template>
<script setup>
import { MessagePlugin } from 'tdesign-vue';
import { ref } from 'vue';

const files = ref([]);
const tips = ref('\u4E0A\u4F20\u6587\u4EF6\u5927\u5C0F\u5728 5M \u4EE5\u5185');
const handleFail = ({ file }) => {
  MessagePlugin.error(\`\u6587\u4EF6 \${file.name} \u4E0A\u4F20\u5931\u8D25\`);
};
const onSuccess = () => {
  tips.value = '';
};
<\/script>
`,U=`<template>
  <t-space direction="vertical">
    <t-space>
      <t-checkbox v-model="showImageFileName"> \u663E\u793A\u56FE\u7247\u540D\u79F0 </t-checkbox>
      <t-checkbox v-model="disabled"> \u7981\u7528\u72B6\u6001 </t-checkbox>
      <t-checkbox v-model="uploadAllFilesInOneRequest"> \u591A\u4E2A\u6587\u4EF6\u4E00\u4E2A\u8BF7\u6C42\u4E0A\u4F20 </t-checkbox>
      <t-checkbox v-model="autoUpload"> \u81EA\u52A8\u4E0A\u4F20 </t-checkbox>
      <t-button
        v-if="!autoUpload"
        variant="base"
        theme="default"
        size="small"
        style="height: 22px"
        @click="uploadFiles"
      >
        \u70B9\u51FB\u4E0A\u4F20
      </t-button>
    </t-space>

    <br />

    <t-space>
      <t-upload
        ref="uploadRef1"
        action="https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"
        v-model="file1"
        :disabled="disabled"
        :autoUpload="autoUpload"
        :showImageFileName="showImageFileName"
        :sizeLimit="sizeLimit"
        theme="image"
        tips="\u8BF7\u9009\u62E9\u5355\u5F20\u56FE\u7247\u6587\u4EF6\u4E0A\u4F20\uFF08\u4E0A\u4F20\u6210\u529F\u72B6\u6001\u6F14\u793A\uFF09"
        accept="image/*"
        @fail="handleFail"
      >
        <!-- custom UI -->
        <!-- <template #fileListDisplay="{ files }">
          <div>{{ JSON.stringify(files) }}</div>
        </template> -->
      </t-upload>

      <t-upload
        ref="uploadRef2"
        action="https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"
        v-model="fileFail"
        :disabled="disabled"
        :autoUpload="autoUpload"
        theme="image"
        tips="\u8BF7\u9009\u62E9\u5355\u5F20\u56FE\u7247\u6587\u4EF6\u4E0A\u4F20\uFF08\u4E0A\u4F20\u5931\u8D25\u72B6\u6001\u6F14\u793A\uFF09"
        accept="image/*"
        :formatResponse="formatResponse"
        :showImageFileName="showImageFileName"
      ></t-upload>
    </t-space>

    <t-upload
      ref="uploadRef3"
      action="https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"
      v-model="file2"
      :disabled="disabled"
      :autoUpload="autoUpload"
      @fail="handleFail"
      theme="image"
      tips="\u8BF7\u9009\u62E9\u5355\u5F20\u56FE\u7247\u6587\u4EF6\u4E0A\u4F20\uFF08\u81EA\u5B9A\u4E49\u9884\u89C8\u56FE\u7247\u5730\u5740\uFF09"
      accept="image/*"
      :formatResponse="formatImgResponse"
      :imageViewerProps="imageViewerProps"
      :showImageFileName="showImageFileName"
    ></t-upload>

    <!-- if you want to hide image name, set .t-upload__card-name { display: none } -->
    <t-upload
      ref="uploadRef4"
      action="https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"
      v-model="files"
      :sizeLimit="sizeLimit"
      :abridgeName="abridgeName"
      :disabled="disabled"
      :autoUpload="autoUpload"
      :uploadAllFilesInOneRequest="uploadAllFilesInOneRequest"
      :showImageFileName="showImageFileName"
      @fail="handleFail"
      theme="image"
      tips="\u5141\u8BB8\u9009\u62E9\u591A\u5F20\u56FE\u7247\u6587\u4EF6\u4E0A\u4F20\uFF0C\u6700\u591A\u53EA\u80FD\u4E0A\u4F20 3 \u5F20\u56FE\u7247"
      accept="image/*"
      multiple
      :max="3"
    ></t-upload>
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      file1: [],
      file2: [{ name: 'demo-image-1.png', url: 'https://tdesign.gtimg.com/demo/demo-image-1.png' }],
      files: [],
      fileFail: [],
      disabled: false,
      uploadAllFilesInOneRequest: false,
      autoUpload: true,
      imageViewerProps: {
        closeOnEscKeydown: false,
      },
      sizeLimit: { size: 500, unit: 'KB' },
      abridgeName: [6, 6],
      showImageFileName: true,
    };
  },
  methods: {
    // formatResponse \u8FD4\u56DE\u540E\u7684 url \u4F18\u5148\u7EA7\u9AD8\u4E8E\u63A5\u53E3\u8FD4\u56DE\u7684 url
    formatImgResponse() {
      return { url: 'https://tdesign.gtimg.com/site/avatar.jpg' };
    },
    // \u4E00\u65E6 formatResponse \u8FD4\u56DE\u503C\u5305\u542B error\uFF0C\u4FBF\u4F1A\u88AB\u7EC4\u4EF6\u5224\u5B9A\u4E3A\u4E0A\u4F20\u5931\u8D25
    formatResponse() {
      return { error: '\u7F51\u7EDC\u5F02\u5E38\uFF0C\u56FE\u7247\u4E0A\u4F20\u5931\u8D25' };
    },
    handleFail({ file }) {
      this.$message.error(\`\u6587\u4EF6 \${file.name} \u4E0A\u4F20\u5931\u8D25\`);
    },

    uploadFiles() {
      this.$refs.uploadRef1.uploadFiles();
      this.$refs.uploadRef2.uploadFiles();
      this.$refs.uploadRef3.uploadFiles();
      this.$refs.uploadRef4.uploadFiles();
    },
  },
};
<\/script>

<style scoped>
.tdesign-demo-upload-item {
  display: inline-block;
  margin-right: 80px;
}
.tdesign-demo-upload-item + .tdesign-demo-upload-item {
  margin-top: 80px;
}
</style>
`,R=`<template>
  <t-space direction="vertical">
    <t-space>
      <t-checkbox v-model="showImageFileName"> \u663E\u793A\u56FE\u7247\u540D\u79F0 </t-checkbox>
      <t-checkbox v-model="disabled"> \u7981\u7528\u72B6\u6001 </t-checkbox>
      <t-checkbox v-model="uploadAllFilesInOneRequest"> \u591A\u4E2A\u6587\u4EF6\u4E00\u4E2A\u8BF7\u6C42\u4E0A\u4F20 </t-checkbox>
      <t-checkbox v-model="autoUpload"> \u81EA\u52A8\u4E0A\u4F20 </t-checkbox>
      <t-button
        v-if="!autoUpload"
        variant="base"
        theme="default"
        size="small"
        style="height: 22px"
        @click="uploadFiles"
      >
        \u70B9\u51FB\u4E0A\u4F20
      </t-button>
    </t-space>

    <br />

    <t-space>
      <t-upload
        ref="uploadRef1"
        action="https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"
        v-model="file1"
        :disabled="disabled"
        :autoUpload="autoUpload"
        :showImageFileName="showImageFileName"
        :sizeLimit="sizeLimit"
        theme="image"
        tips="\u8BF7\u9009\u62E9\u5355\u5F20\u56FE\u7247\u6587\u4EF6\u4E0A\u4F20\uFF08\u4E0A\u4F20\u6210\u529F\u72B6\u6001\u6F14\u793A\uFF09"
        accept="image/*"
        @fail="handleFail"
      >
        <!-- custom UI -->
        <!-- <template #fileListDisplay="{ files }">
          <div>{{ JSON.stringify(files) }}</div>
        </template> -->
      </t-upload>

      <t-upload
        ref="uploadRef2"
        action="https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"
        v-model="fileFail"
        :disabled="disabled"
        :autoUpload="autoUpload"
        theme="image"
        tips="\u8BF7\u9009\u62E9\u5355\u5F20\u56FE\u7247\u6587\u4EF6\u4E0A\u4F20\uFF08\u4E0A\u4F20\u5931\u8D25\u72B6\u6001\u6F14\u793A\uFF09"
        accept="image/*"
        :formatResponse="formatResponse"
        :showImageFileName="showImageFileName"
      ></t-upload>
    </t-space>

    <t-upload
      ref="uploadRef3"
      action="https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"
      v-model="file2"
      :disabled="disabled"
      :autoUpload="autoUpload"
      @fail="handleFail"
      theme="image"
      tips="\u8BF7\u9009\u62E9\u5355\u5F20\u56FE\u7247\u6587\u4EF6\u4E0A\u4F20\uFF08\u81EA\u5B9A\u4E49\u9884\u89C8\u56FE\u7247\u5730\u5740\uFF09"
      accept="image/*"
      :formatResponse="formatImgResponse"
      :imageViewerProps="imageViewerProps"
      :showImageFileName="showImageFileName"
    ></t-upload>

    <!-- if you want to hide image name, set .t-upload__card-name { display: none } -->
    <t-upload
      ref="uploadRef4"
      action="https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"
      v-model="files"
      :sizeLimit="sizeLimit"
      :abridgeName="abridgeName"
      :disabled="disabled"
      :autoUpload="autoUpload"
      :uploadAllFilesInOneRequest="uploadAllFilesInOneRequest"
      :showImageFileName="showImageFileName"
      @fail="handleFail"
      theme="image"
      tips="\u5141\u8BB8\u9009\u62E9\u591A\u5F20\u56FE\u7247\u6587\u4EF6\u4E0A\u4F20\uFF0C\u6700\u591A\u53EA\u80FD\u4E0A\u4F20 3 \u5F20\u56FE\u7247"
      accept="image/*"
      multiple
      :max="3"
    ></t-upload>
  </t-space>
</template>
<script setup>
import { MessagePlugin } from 'tdesign-vue';
import { ref, reactive } from 'vue';

const uploadRef1 = ref();
const uploadRef2 = ref();
const uploadRef3 = ref();
const uploadRef4 = ref();
const file1 = ref([]);
const file2 = ref([
  {
    name: 'demo-image-1.png',
    url: 'https://tdesign.gtimg.com/demo/demo-image-1.png',
  },
]);
const files = ref([]);
const fileFail = ref([]);
const disabled = ref(false);
const uploadAllFilesInOneRequest = ref(false);
const autoUpload = ref(true);
const imageViewerProps = reactive({
  closeOnEscKeydown: false,
});
const sizeLimit = reactive({
  size: 500,
  unit: 'KB',
});
const abridgeName = ref([6, 6]);
const showImageFileName = ref(true);
// formatResponse \u8FD4\u56DE\u540E\u7684 url \u4F18\u5148\u7EA7\u9AD8\u4E8E\u63A5\u53E3\u8FD4\u56DE\u7684 url
const formatImgResponse = () => ({
  url: 'https://tdesign.gtimg.com/site/avatar.jpg',
});
// \u4E00\u65E6 formatResponse \u8FD4\u56DE\u503C\u5305\u542B error\uFF0C\u4FBF\u4F1A\u88AB\u7EC4\u4EF6\u5224\u5B9A\u4E3A\u4E0A\u4F20\u5931\u8D25
const formatResponse = () => ({
  error: '\u7F51\u7EDC\u5F02\u5E38\uFF0C\u56FE\u7247\u4E0A\u4F20\u5931\u8D25',
});
const handleFail = ({ file }) => {
  MessagePlugin.error(\`\u6587\u4EF6 \${file.name} \u4E0A\u4F20\u5931\u8D25\`);
};
const uploadFiles = () => {
  uploadRef1.value.uploadFiles();
  uploadRef2.value.uploadFiles();
  uploadRef3.value.uploadFiles();
  uploadRef4.value.uploadFiles();
};
<\/script>

<style scoped>
.tdesign-demo-upload-item {
  display: inline-block;
  margin-right: 80px;
}
.tdesign-demo-upload-item + .tdesign-demo-upload-item {
  margin-top: 80px;
}
</style>
`,z=`<template>
  <div class="tdesign-demo-block-column-large">
    <div class="tdesign-demo-block-column">
      <div>\u662F\u5426\u81EA\u52A8\u4E0A\u4F20\uFF1A<t-switch v-model="autoUpload"></t-switch></div>
      <div>
        <t-radio-group variant="default-filled" v-model="display">
          <t-radio-button value="file">\u6587\u4EF6\u62D6\u62FD\u4E0A\u4F20</t-radio-button>
          <t-radio-button value="image">\u56FE\u7247\u62D6\u62FD\u4E0A\u4F20</t-radio-button>
        </t-radio-group>
      </div>
    </div>

    <!-- data \u8868\u793A\u4F20\u9012\u7ED9\u4E0A\u4F20\u63A5\u53E3\u7684\u989D\u5916\u6570\u636E\uFF1B\u5982\u679C\u6709\u66F4\u590D\u6742\u7684\u6570\u636E\u573A\u666F\u4F20\u9012\uFF0C\u8BF7\u4F7F\u7528 format \u65B9\u6CD5 -->
    <!-- abridgeName \u8868\u793A\u7701\u7565\u6587\u4EF6\u540D\u4E2D\u95F4\u6587\u672C\uFF0C\u4FDD\u7559\u4E24\u4FA7\u3002\u5DE6\u4FA7\u4FDD\u7559\u7684\u6587\u672C\u6570\u91CF\uFF0C\u53F3\u4FA7\u4FDD\u7559\u7684\u6587\u672C\u6570\u91CF] -->
    <!--
      use fileListDisplay to define any file info
      fileListDisplay={(h, { files }) => <div>{JSON.stringify(files)}</div>}
    -->
    <t-space>
      <t-upload
        v-model="files"
        :autoUpload="autoUpload"
        :theme="display"
        :data="{ extra_data: 123, file_name: 'certificate' }"
        :abridgeName="[10, 8]"
        draggable
        action="https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"
        @cancel-upload="onCancelUpload"
        @remove="onRemove"
      />

      <t-upload
        v-model="files2"
        :autoUpload="autoUpload"
        :theme="display"
        :data="{ extra_data: 123, file_name: 'certificate' }"
        :abridgeName="[10, 8]"
        :formatResponse="formatResponse"
        draggable
        action="https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"
        @dragenter="onDragenter"
        @dragleave="onDragleave"
        @drop="onDrop"
      />
    </t-space>
  </div>
</template>

<script>
function getCurrentDate(needTime = false) {
  const d = new Date();
  let month = d.getMonth() + 1;
  month = month < 10 ? \`0\${month}\` : month;
  const date = \`\${d.getFullYear()}-\${month}-\${d.getDate()}\`;
  const time = \`\${d.getHours()}:\${d.getMinutes()}:\${d.getSeconds()}\`;
  if (needTime) return [date, time].join(' ');
  return date;
}

export default {
  data: () => ({
    autoUpload: true,
    display: 'file',
    files: [],
    files2: [
      {
        name: '\u9ED8\u8BA4\u6587\u4EF6',
        url: 'https://tdesign.gtimg.com/site/source/figma-pc.png',
        status: 'success',
        size: 1024,
        // \u4E0A\u4F20\u65E5\u671F\uFF0C\u5982\u679C\u63A5\u53E3\u8FD4\u56DE\u7684\u5B57\u6BB5\u5305\u542B uploadTime\uFF0C\u5219\u4F1A\u4EE5\u63A5\u53E3\u8FD4\u56DE\u7684\u4E3A\u51C6\uFF0C\u9ED8\u8BA4\u4F7F\u7528\u672C\u5730\u7535\u8111\u65F6\u95F4\u3002
        // \u5982\u679C\u5E0C\u671B\u4F7F\u7528\u63A5\u53E3\u8FD4\u56DE\u7684\u4E0A\u4F20\u65E5\u671F\uFF0C\u4F46\u662F\u63A5\u53E3\u5B57\u6BB5\u540D\u4E0D\u662F uploadTime\uFF0C\u5219\u53EF\u4EE5\u4F7F\u7528\u51FD\u6570 formatResponse \u683C\u5F0F\u5316\u63A5\u53E3\u6570\u636E
        uploadTime: '2022-09-25',
      },
    ],
  }),
  methods: {
    onCancelUpload() {
      console.log('cancel upload');
    },
    onRemove() {
      console.log('remove file');
    },
    // res.url \u56FE\u7247\u5730\u5740\uFF1Bres.uploadTime \u6587\u4EF6\u4E0A\u4F20\u65F6\u95F4\uFF1Bres.error \u4E0A\u4F20\u5931\u8D25\u7684\u539F\u56E0
    formatResponse(res) {
      // \u54CD\u5E94\u7ED3\u679C\u6DFB\u52A0\u4E0A\u4F20\u65F6\u95F4\u5B57\u6BB5\uFF0C\u7528\u4E8E UI \u663E\u793A
      res.uploadTime = getCurrentDate();
      return res;
    },
    onDragenter(p) {
      console.log('dragenter', p);
    },
    onDragleave(p) {
      console.log('dragleave', p);
    },
    onDrop(p) {
      console.log('drop', p);
    },
  },
};
<\/script>
`,I=`<template>
  <div class="tdesign-demo-block-column-large">
    <div class="tdesign-demo-block-column">
      <div>\u662F\u5426\u81EA\u52A8\u4E0A\u4F20\uFF1A<t-switch v-model="autoUpload"></t-switch></div>
      <div>
        <t-radio-group variant="default-filled" v-model="display">
          <t-radio-button value="file">\u6587\u4EF6\u62D6\u62FD\u4E0A\u4F20</t-radio-button>
          <t-radio-button value="image">\u56FE\u7247\u62D6\u62FD\u4E0A\u4F20</t-radio-button>
        </t-radio-group>
      </div>
    </div>

    <!-- data \u8868\u793A\u4F20\u9012\u7ED9\u4E0A\u4F20\u63A5\u53E3\u7684\u989D\u5916\u6570\u636E\uFF1B\u5982\u679C\u6709\u66F4\u590D\u6742\u7684\u6570\u636E\u573A\u666F\u4F20\u9012\uFF0C\u8BF7\u4F7F\u7528 format \u65B9\u6CD5 -->
    <!-- abridgeName \u8868\u793A\u7701\u7565\u6587\u4EF6\u540D\u4E2D\u95F4\u6587\u672C\uFF0C\u4FDD\u7559\u4E24\u4FA7\u3002\u5DE6\u4FA7\u4FDD\u7559\u7684\u6587\u672C\u6570\u91CF\uFF0C\u53F3\u4FA7\u4FDD\u7559\u7684\u6587\u672C\u6570\u91CF] -->
    <!--
      use fileListDisplay to define any file info
      fileListDisplay={(h, { files }) => <div>{JSON.stringify(files)}</div>}
    -->
    <t-space>
      <t-upload
        v-model="files"
        :autoUpload="autoUpload"
        :theme="display"
        :data="{ extra_data: 123, file_name: 'certificate' }"
        :abridgeName="[10, 8]"
        draggable
        action="https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"
        @cancel-upload="onCancelUpload"
        @remove="onRemove"
      />

      <t-upload
        v-model="files2"
        :autoUpload="autoUpload"
        :theme="display"
        :data="{ extra_data: 123, file_name: 'certificate' }"
        :abridgeName="[10, 8]"
        :formatResponse="formatResponse"
        draggable
        action="https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"
        @dragenter="onDragenter"
        @dragleave="onDragleave"
        @drop="onDrop"
      />
    </t-space>
  </div>
</template>

<script setup>
import { ref } from 'vue';

function getCurrentDate(needTime = false) {
  const d = new Date();
  let month = d.getMonth() + 1;
  month = month < 10 ? \`0\${month}\` : month;
  const date = \`\${d.getFullYear()}-\${month}-\${d.getDate()}\`;
  const time = \`\${d.getHours()}:\${d.getMinutes()}:\${d.getSeconds()}\`;
  if (needTime) return [date, time].join(' ');
  return date;
}
const autoUpload = ref(true);
const display = ref('file');
const files = ref([]);
const files2 = ref([
  {
    name: '\u9ED8\u8BA4\u6587\u4EF6',
    url: 'https://tdesign.gtimg.com/site/source/figma-pc.png',
    status: 'success',
    size: 1024,
    // \u4E0A\u4F20\u65E5\u671F\uFF0C\u5982\u679C\u63A5\u53E3\u8FD4\u56DE\u7684\u5B57\u6BB5\u5305\u542B uploadTime\uFF0C\u5219\u4F1A\u4EE5\u63A5\u53E3\u8FD4\u56DE\u7684\u4E3A\u51C6\uFF0C\u9ED8\u8BA4\u4F7F\u7528\u672C\u5730\u7535\u8111\u65F6\u95F4\u3002
    // \u5982\u679C\u5E0C\u671B\u4F7F\u7528\u63A5\u53E3\u8FD4\u56DE\u7684\u4E0A\u4F20\u65E5\u671F\uFF0C\u4F46\u662F\u63A5\u53E3\u5B57\u6BB5\u540D\u4E0D\u662F uploadTime\uFF0C\u5219\u53EF\u4EE5\u4F7F\u7528\u51FD\u6570 formatResponse \u683C\u5F0F\u5316\u63A5\u53E3\u6570\u636E
    uploadTime: '2022-09-25',
  },
]);
const onCancelUpload = () => {
  console.log('cancel upload');
};
const onRemove = () => {
  console.log('remove file');
};
// res.url \u56FE\u7247\u5730\u5740\uFF1Bres.uploadTime \u6587\u4EF6\u4E0A\u4F20\u65F6\u95F4\uFF1Bres.error \u4E0A\u4F20\u5931\u8D25\u7684\u539F\u56E0
const formatResponse = (res) => {
  // \u54CD\u5E94\u7ED3\u679C\u6DFB\u52A0\u4E0A\u4F20\u65F6\u95F4\u5B57\u6BB5\uFF0C\u7528\u4E8E UI \u663E\u793A
  res.uploadTime = getCurrentDate();
  return res;
};
const onDragenter = (p) => {
  console.log('dragenter', p);
};
const onDragleave = (p) => {
  console.log('dragleave', p);
};
const onDrop = (p) => {
  console.log('drop', p);
};
<\/script>
`,y=`<template>
  <t-space direction="vertical">
    <t-space breakLine>
      <t-checkbox v-model="disabled">\u7981\u7528\u72B6\u6001</t-checkbox>
      <t-checkbox v-model="autoUpload">\u81EA\u52A8\u4E0A\u4F20</t-checkbox>
      <t-checkbox v-model="showThumbnail">\u663E\u793A\u6587\u4EF6\u7F29\u7565\u56FE</t-checkbox>
      <t-checkbox v-model="allowUploadDuplicateFile"> \u5141\u8BB8\u4E0A\u4F20\u540C\u540D\u6587\u4EF6 </t-checkbox>
      <t-checkbox v-model="isBatchUpload"> \u6574\u4F53\u66FF\u6362\u4E0A\u4F20 </t-checkbox>
      <t-checkbox v-model="uploadAllFilesInOneRequest"> \u591A\u4E2A\u6587\u4EF6\u4E00\u4E2A\u8BF7\u6C42\u4E0A\u4F20 </t-checkbox>
    </t-space>

    <br />

    <t-upload
      v-model="files"
      action="https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"
      placeholder="\u652F\u6301\u6279\u91CF\u4E0A\u4F20\u6587\u4EF6\uFF0C\u6587\u4EF6\u683C\u5F0F\u4E0D\u9650\uFF0C\u6700\u591A\u53EA\u80FD\u4E0A\u4F20 10 \u4EFD\u6587\u4EF6"
      theme="file-flow"
      multiple
      :disabled="disabled"
      :abridge-name="ABRIDGE_NAME"
      :auto-upload="autoUpload"
      :show-thumbnail="showThumbnail"
      :max="max"
      :allow-upload-duplicate-file="allowUploadDuplicateFile"
      :is-batch-upload="isBatchUpload"
      :upload-all-files-in-one-request="uploadAllFilesInOneRequest"
      :format-response="formatResponse"
      @dragenter="onDragenter"
      @dragleave="onDragleave"
      @drop="onDrop"
    ></t-upload>
  </t-space>
</template>

<script>
export default {
  name: 'TUploadFileFlow',

  data() {
    return {
      max: 10,
      files: [],
      disabled: false,
      autoUpload: false,
      allowUploadDuplicateFile: false,
      isBatchUpload: false,
      uploadAllFilesInOneRequest: false,
      ABRIDGE_NAME: [10, 7],
      showThumbnail: false,
    };
  },

  methods: {
    onDragenter(p) {
      console.log('dragenter', p);
    },
    onDragleave(p) {
      console.log('dragleave', p);
    },
    onDrop(p) {
      console.log('drop', p);
    },
    formatResponse(res) {
      if (!res) {
        return { status: 'fail', error: '\u4E0A\u4F20\u5931\u8D25\uFF0C\u539F\u56E0\uFF1A\u6587\u4EF6\u8FC7\u5927\u6216\u7F51\u7EDC\u4E0D\u901A' };
      }
      return res;
    },
  },
};
<\/script>
`,M=`<template>
  <t-space direction="vertical">
    <t-space breakLine>
      <t-checkbox v-model="disabled">\u7981\u7528\u72B6\u6001</t-checkbox>
      <t-checkbox v-model="autoUpload">\u81EA\u52A8\u4E0A\u4F20</t-checkbox>
      <t-checkbox v-model="showThumbnail">\u663E\u793A\u6587\u4EF6\u7F29\u7565\u56FE</t-checkbox>
      <t-checkbox v-model="allowUploadDuplicateFile"> \u5141\u8BB8\u4E0A\u4F20\u540C\u540D\u6587\u4EF6 </t-checkbox>
      <t-checkbox v-model="isBatchUpload"> \u6574\u4F53\u66FF\u6362\u4E0A\u4F20 </t-checkbox>
      <t-checkbox v-model="uploadAllFilesInOneRequest"> \u591A\u4E2A\u6587\u4EF6\u4E00\u4E2A\u8BF7\u6C42\u4E0A\u4F20 </t-checkbox>
    </t-space>

    <br />

    <t-upload
      v-model="files"
      action="https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"
      placeholder="\u652F\u6301\u6279\u91CF\u4E0A\u4F20\u6587\u4EF6\uFF0C\u6587\u4EF6\u683C\u5F0F\u4E0D\u9650\uFF0C\u6700\u591A\u53EA\u80FD\u4E0A\u4F20 10 \u4EFD\u6587\u4EF6"
      theme="file-flow"
      multiple
      :disabled="disabled"
      :abridge-name="ABRIDGE_NAME"
      :auto-upload="autoUpload"
      :show-thumbnail="showThumbnail"
      :max="max"
      :allow-upload-duplicate-file="allowUploadDuplicateFile"
      :is-batch-upload="isBatchUpload"
      :upload-all-files-in-one-request="uploadAllFilesInOneRequest"
      :format-response="formatResponse"
      @dragenter="onDragenter"
      @dragleave="onDragleave"
      @drop="onDrop"
    ></t-upload>
  </t-space>
</template>

<script setup>
import { ref } from 'vue';

const max = ref(10);
const files = ref([]);
const disabled = ref(false);
const autoUpload = ref(false);
const allowUploadDuplicateFile = ref(false);
const isBatchUpload = ref(false);
const uploadAllFilesInOneRequest = ref(false);
const ABRIDGE_NAME = ref([10, 7]);
const showThumbnail = ref(false);
const onDragenter = (p) => {
  console.log('dragenter', p);
};
const onDragleave = (p) => {
  console.log('dragleave', p);
};
const onDrop = (p) => {
  console.log('drop', p);
};
const formatResponse = (res) => {
  if (!res) {
    return {
      status: 'fail',
      error: '\u4E0A\u4F20\u5931\u8D25\uFF0C\u539F\u56E0\uFF1A\u6587\u4EF6\u8FC7\u5927\u6216\u7F51\u7EDC\u4E0D\u901A',
    };
  }
  return res;
};
<\/script>
`,D=`<template>
  <t-space direction="vertical">
    <t-space size="36px">
      <div>
        AutoUpload:
        <t-switch v-model="autoUpload" />
      </div>
      <t-checkbox v-model="showImageFileName"> Show Image Name </t-checkbox>
      <t-checkbox v-model="showUploadButton"> Show UploadButton Or CancelUploadButton </t-checkbox>
    </t-space>
    <br />
    <!-- action \u4E0A\u4F20\u5730\u5740\uFF0C\u4F7F\u7528\u7EC4\u4EF6\u5185\u90E8\u4E0A\u4F20\u903B\u8F91\uFF0Caction="https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo" -->
    <!-- request-method \u81EA\u5B9A\u4E49\u4E0A\u4F20\u65B9\u6CD5\uFF0C\u81EA\u5B9A\u4E49\u4E0A\u4F20\u903B\u8F91 -->
    <!-- auto-upload=false, \`uploadButton\` and \`cancelUploadButton\` support ButtonProps; also support slot-->
    <t-upload
      v-model="files"
      placeholder="\u652F\u6301\u6279\u91CF\u4E0A\u4F20\u56FE\u7247\u6587\u4EF6"
      theme="image-flow"
      accept="image/*"
      multiple
      :request-method="requestMethod1"
      :auto-upload="autoUpload"
      :max="8"
      :abridge-name="[6, 6]"
      :show-image-file-name="showImageFileName"
      :upload-button="showUploadButton ? {} : null"
      :cancel-upload-button="showUploadButton ? { content: '\u53D6\u6D88\u4E0A\u4F20' } : null"
      @dragenter="onDragenter"
      @dragleave="onDragleave"
      @drop="onDrop"
    ></t-upload>

    <!-- action="https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo" -->
    <!-- request-method \u81EA\u5B9A\u4E49\u4E0A\u4F20\u65B9\u6CD5\uFF0C\u81EA\u5B9A\u4E49\u4E0A\u4F20\u903B\u8F91 -->
    <!-- <t-upload
      v-model="files"
      placeholder="\u652F\u6301\u6279\u91CF\u4E0A\u4F20\u56FE\u7247\u6587\u4EF6"
      theme="image-flow"
      accept="image/*"
      multiple
      uploadAllFilesInOneRequest
      :request-method="requestMethod2"
      :auto-upload="autoUpload"
      :abridgeName="[6, 6]"
      :max="8"
    ></t-upload> -->

    <br />
    <t-divider align="left">Different Status Images</t-divider>
    <t-upload
      :files="staticFiles"
      theme="image-flow"
      :show-image-file-name="showImageFileName"
      class="static-image-list"
    ></t-upload>
  </t-space>
</template>

<script>
export default {
  name: 'TUploadImageFlow',

  data() {
    return {
      autoUpload: false,
      showImageFileName: true,
      showUploadButton: true,
      files: [
        {
          url: 'https://tdesign.gtimg.com/demo/demo-image-1.png',
          name: 'loading.svg',
          status: 'success',
        },
      ],
      staticFiles: [
        {
          url: 'https://tdesign.gtimg.com/demo/demo-image-1.png',
          name: 'loading.svg',
          status: 'success',
        },
        {
          url: 'https://tdesign.gtimg.com/demo/demo-image-1.png',
          name: 'loading.svg',
          status: 'waiting',
        },
        {
          // url: 'https://tdesign.gtimg.com/demo/demo-image-1.png',
          name: 'loading.svg',
          status: 'progress',
          percent: 10,
        },
        {
          url: 'https://tdesign.gtimg.com/demo/demo-image-1.png',
          name: 'loading.svg',
          status: 'fail',
        },
      ],
    };
  },

  methods: {
    requestMethod1() {
      return new Promise((resolve) => {
        resolve({
          status: 'success',
          response: {
            url: 'https://tdesign.gtimg.com/site/avatar.jpg',
          },
        });
      });
    },
    requestMethod2() {
      return new Promise((resolve) => {
        resolve({
          status: 'success',
          response: {
            files: [
              { name: 'avatar1.jpg', url: 'https://tdesign.gtimg.com/site/avatar.jpg' },
              { name: 'avatar2.jpg', url: 'https://avatars.githubusercontent.com/u/11605702?v=4' },
            ],
          },
        });
      });
    },
    onDragenter(p) {
      console.log('dragenter', p);
    },
    onDragleave(p) {
      console.log('dragleave', p);
    },
    onDrop(p) {
      console.log('drop', p);
    },
  },
};
<\/script>

<style>
.static-image-list {
  .t-upload__flow-op {
    display: none;
  }
}
</style>
`,k=`<template>
  <t-space direction="vertical">
    <t-space size="36px">
      <div>
        AutoUpload:
        <t-switch v-model="autoUpload" />
      </div>
      <t-checkbox v-model="showImageFileName"> Show Image Name </t-checkbox>
      <t-checkbox v-model="showUploadButton"> Show UploadButton Or CancelUploadButton </t-checkbox>
    </t-space>
    <br />
    <!-- action \u4E0A\u4F20\u5730\u5740\uFF0C\u4F7F\u7528\u7EC4\u4EF6\u5185\u90E8\u4E0A\u4F20\u903B\u8F91\uFF0Caction="https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo" -->
    <!-- request-method \u81EA\u5B9A\u4E49\u4E0A\u4F20\u65B9\u6CD5\uFF0C\u81EA\u5B9A\u4E49\u4E0A\u4F20\u903B\u8F91 -->
    <!-- auto-upload=false, \`uploadButton\` and \`cancelUploadButton\` support ButtonProps; also support slot-->
    <t-upload
      v-model="files"
      placeholder="\u652F\u6301\u6279\u91CF\u4E0A\u4F20\u56FE\u7247\u6587\u4EF6"
      theme="image-flow"
      accept="image/*"
      multiple
      :request-method="requestMethod1"
      :auto-upload="autoUpload"
      :max="8"
      :abridge-name="[6, 6]"
      :show-image-file-name="showImageFileName"
      :upload-button="showUploadButton ? {} : null"
      :cancel-upload-button="showUploadButton ? { content: '\u53D6\u6D88\u4E0A\u4F20' } : null"
      @dragenter="onDragenter"
      @dragleave="onDragleave"
      @drop="onDrop"
    ></t-upload>

    <!-- action="https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo" -->
    <!-- request-method \u81EA\u5B9A\u4E49\u4E0A\u4F20\u65B9\u6CD5\uFF0C\u81EA\u5B9A\u4E49\u4E0A\u4F20\u903B\u8F91 -->
    <!-- <t-upload
      v-model="files"
      placeholder="\u652F\u6301\u6279\u91CF\u4E0A\u4F20\u56FE\u7247\u6587\u4EF6"
      theme="image-flow"
      accept="image/*"
      multiple
      uploadAllFilesInOneRequest
      :request-method="requestMethod2"
      :auto-upload="autoUpload"
      :abridgeName="[6, 6]"
      :max="8"
    ></t-upload> -->

    <br />
    <t-divider align="left">Different Status Images</t-divider>
    <t-upload
      :files="staticFiles"
      theme="image-flow"
      :show-image-file-name="showImageFileName"
      class="static-image-list"
    ></t-upload>
  </t-space>
</template>

<script setup>
import { ref } from 'vue';

const autoUpload = ref(false);
const showImageFileName = ref(true);
const showUploadButton = ref(true);
const files = ref([
  {
    url: 'https://tdesign.gtimg.com/demo/demo-image-1.png',
    name: 'loading.svg',
    status: 'success',
  },
]);
const staticFiles = ref([
  {
    url: 'https://tdesign.gtimg.com/demo/demo-image-1.png',
    name: 'loading.svg',
    status: 'success',
  },
  {
    url: 'https://tdesign.gtimg.com/demo/demo-image-1.png',
    name: 'loading.svg',
    status: 'waiting',
  },
  {
    // url: 'https://tdesign.gtimg.com/demo/demo-image-1.png',
    name: 'loading.svg',
    status: 'progress',
    percent: 10,
  },
  {
    url: 'https://tdesign.gtimg.com/demo/demo-image-1.png',
    name: 'loading.svg',
    status: 'fail',
  },
]);
const requestMethod1 = () => new Promise((resolve) => {
  resolve({
    status: 'success',
    response: {
      url: 'https://tdesign.gtimg.com/site/avatar.jpg',
    },
  });
});
// const requestMethod2 = () => {
//   return new Promise(resolve => {
//     resolve({
//       status: 'success',
//       response: {
//         files: [{
//           name: 'avatar1.jpg',
//           url: 'https://tdesign.gtimg.com/site/avatar.jpg'
//         }, {
//           name: 'avatar2.jpg',
//           url: 'https://avatars.githubusercontent.com/u/11605702?v=4'
//         }]
//       }
//     });
//   });
// };
const onDragenter = (p) => {
  console.log('dragenter', p);
};
const onDragleave = (p) => {
  console.log('dragleave', p);
};
const onDrop = (p) => {
  console.log('drop', p);
};
<\/script>

<style>
.static-image-list {
  .t-upload__flow-op {
    display: none;
  }
}
</style>
`,_=`<template>
  <div class="tdesign-demo-block-column-large">
    <div>
      <t-radio-group variant="default-filled" v-model="uploadMethod">
        <t-radio-button value="requestSuccessMethod">\u4E0A\u4F20\u6210\u529F\u793A\u4F8B</t-radio-button>
        <t-radio-button value="requestFailMethod">\u4E0A\u4F20\u5931\u8D25\u793A\u4F8B</t-radio-button>
      </t-radio-group>
    </div>

    <t-upload
      ref="uploadRef"
      v-model="files"
      :requestMethod="requestMethod"
      tips="\u81EA\u5B9A\u4E49\u4E0A\u4F20\u65B9\u6CD5\u9700\u8981\u8FD4\u56DE\u6210\u529F\u6216\u5931\u8D25\u4FE1\u606F"
    ></t-upload>
  </div>
</template>
<script>
/* eslint-disable no-param-reassign */
export default {
  data() {
    return {
      files: [],
      uploadMethod: 'requestSuccessMethod',
    };
  },
  computed: {
    requestMethod() {
      return {
        requestSuccessMethod: this.requestSuccessMethod,
        requestFailMethod: this.requestFailMethod,
      }[this.uploadMethod];
    },
  },
  watch: {
    // \u5207\u6362\u4E0A\u4F20\u793A\u4F8B\u65F6\uFF0C\u91CD\u7F6E files \u6570\u636E
    uploadMethod() {
      this.files = [];
    },
  },
  methods: {
    // file \u4E3A\u7B49\u5F85\u4E0A\u4F20\u7684\u6587\u4EF6\u4FE1\u606F\uFF0C\u7528\u4E8E\u63D0\u4F9B\u7ED9\u4E0A\u4F20\u63A5\u53E3\u3002file.raw \u8868\u793A\u539F\u59CB\u6587\u4EF6
    requestSuccessMethod(file /** UploadFile */) {
      console.log(file, file.raw);
      return new Promise((resolve) => {
        // \u63A7\u5236\u4E0A\u4F20\u8FDB\u5EA6
        let percent = 0;
        const percentTimer = setInterval(() => {
          if (percent + 10 < 99) {
            percent += 10;
            this.$refs.uploadRef.uploadFilePercent({ file, percent });
          } else {
            clearInterval(percentTimer);
          }
        }, 100);

        const timer = setTimeout(() => {
          // resolve \u53C2\u6570\u4E3A\u5173\u952E\u4EE3\u7801
          resolve({ status: 'success', response: { url: 'https://tdesign.gtimg.com/site/avatar.jpg' } });

          clearTimeout(timer);
          clearInterval(percentTimer);
        }, 800);
      });
    },
    requestFailMethod(file /** UploadFile */) {
      console.log(file);
      return new Promise((resolve) => {
        // resolve \u53C2\u6570\u4E3A\u5173\u952E\u4EE3\u7801
        resolve({ status: 'fail', error: '\u4E0A\u4F20\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u6587\u4EF6\u662F\u5426\u7B26\u5408\u89C4\u8303' });
      });
    },
  },
};
<\/script>
`,q=`<template>
  <div class="tdesign-demo-block-column-large">
    <div>
      <t-radio-group variant="default-filled" v-model="uploadMethod">
        <t-radio-button value="requestSuccessMethod">\u4E0A\u4F20\u6210\u529F\u793A\u4F8B</t-radio-button>
        <t-radio-button value="requestFailMethod">\u4E0A\u4F20\u5931\u8D25\u793A\u4F8B</t-radio-button>
      </t-radio-group>
    </div>

    <t-upload
      ref="uploadRef"
      v-model="files"
      :requestMethod="requestMethod"
      tips="\u81EA\u5B9A\u4E49\u4E0A\u4F20\u65B9\u6CD5\u9700\u8981\u8FD4\u56DE\u6210\u529F\u6216\u5931\u8D25\u4FE1\u606F"
    ></t-upload>
  </div>
</template>
<script setup>
import { ref, computed, watch } from 'vue';
/* eslint-disable no-param-reassign */
const uploadRef = ref();
const files = ref([]);
const uploadMethod = ref('requestSuccessMethod');
const requestMethod = computed(
  () => ({
    requestSuccessMethod,
    requestFailMethod,
  }[uploadMethod.value]),
);
// file \u4E3A\u7B49\u5F85\u4E0A\u4F20\u7684\u6587\u4EF6\u4FE1\u606F\uFF0C\u7528\u4E8E\u63D0\u4F9B\u7ED9\u4E0A\u4F20\u63A5\u53E3\u3002file.raw \u8868\u793A\u539F\u59CB\u6587\u4EF6
const requestSuccessMethod = (file /** UploadFile */) => {
  console.log(file, file.raw);
  return new Promise((resolve) => {
    // \u63A7\u5236\u4E0A\u4F20\u8FDB\u5EA6
    let percent = 0;
    const percentTimer = setInterval(() => {
      if (percent + 10 < 99) {
        percent += 10;
        uploadRef.value.uploadFilePercent({
          file,
          percent,
        });
      } else {
        clearInterval(percentTimer);
      }
    }, 100);
    const timer = setTimeout(() => {
      // resolve \u53C2\u6570\u4E3A\u5173\u952E\u4EE3\u7801
      resolve({
        status: 'success',
        response: {
          url: 'https://tdesign.gtimg.com/site/avatar.jpg',
        },
      });
      clearTimeout(timer);
      clearInterval(percentTimer);
    }, 800);
  });
};
const requestFailMethod = (file /** UploadFile */) => {
  console.log(file);
  return new Promise((resolve) => {
    // resolve \u53C2\u6570\u4E3A\u5173\u952E\u4EE3\u7801
    resolve({
      status: 'fail',
      error: '\u4E0A\u4F20\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u6587\u4EF6\u662F\u5426\u7B26\u5408\u89C4\u8303',
    });
  });
};
// \u5207\u6362\u4E0A\u4F20\u793A\u4F8B\u65F6\uFF0C\u91CD\u7F6E files \u6570\u636E
watch(uploadMethod, () => {
  files.value = [];
});
<\/script>
`,B=`<template>
  <div>
    <t-upload
      action="https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"
      :tips="tips"
      v-model="files"
      theme="custom"
      :beforeUpload="beforeUpload"
      multiple
      @fail="handleFail"
      @success="tips = ''"
    >
      <t-button theme="primary">\u81EA\u5B9A\u4E49\u4E0A\u4F20</t-button>
    </t-upload>
    <div v-if="files && files.length" class="list-custom">
      <ul>
        <li v-for="(item, index) in files" :key="index">{{ item.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tips: '\u4E0A\u4F20\u6587\u4EF6\u5927\u5C0F\u5728 5M \u4EE5\u5185',
      files: [],
    };
  },
  methods: {
    handleFail({ file }) {
      this.$message.error(\`\u6587\u4EF6 \${file.name} \u4E0A\u4F20\u5931\u8D25\`);
    },

    beforeUpload(file) {
      if (file.size > 5 * 1024 * 1024) {
        this.$message.warning('\u4E0A\u4F20\u7684\u56FE\u7247\u4E0D\u80FD\u5927\u4E8E5M');
        return false;
      }
      return true;
    },
  },
};
<\/script>
<style scoped>
.tdesign-demo-upload .list-custom {
  font-size: 13px;
}
.tdesign-demo-upload li {
  margin: 16px 0;
}
</style>
`,L=`<template>
  <div>
    <t-upload
      action="https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"
      :tips="tips"
      v-model="files"
      theme="custom"
      :beforeUpload="beforeUpload"
      multiple
      @fail="handleFail"
      @success="tips = ''"
    >
      <t-button theme="primary">\u81EA\u5B9A\u4E49\u4E0A\u4F20</t-button>
    </t-upload>
    <div v-if="files && files.length" class="list-custom">
      <ul>
        <li v-for="(item, index) in files" :key="index">{{ item.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { MessagePlugin } from 'tdesign-vue';
import { ref } from 'vue';

const tips = ref('\u4E0A\u4F20\u6587\u4EF6\u5927\u5C0F\u5728 5M \u4EE5\u5185');
const files = ref([]);
const handleFail = ({ file }) => {
  MessagePlugin.error(\`\u6587\u4EF6 \${file.name} \u4E0A\u4F20\u5931\u8D25\`);
};
const beforeUpload = (file) => {
  if (file.size > 5 * 1024 * 1024) {
    MessagePlugin.warning('\u4E0A\u4F20\u7684\u56FE\u7247\u4E0D\u80FD\u5927\u4E8E5M');
    return false;
  }
  return true;
};
<\/script>
<style scoped>
.tdesign-demo-upload .list-custom {
  font-size: 13px;
}
.tdesign-demo-upload li {
  margin: 16px 0;
}
</style>
`,S=`<template>
  <div class="tdesign-demo-upload t-upload">
    <t-button variant="outline" @click="upload"> <cloud-upload-icon slot="icon" />\u70B9\u51FB\u4E0A\u4F20 </t-button>
    <br /><br />
    <t-upload
      ref="uploadRef"
      v-model="files"
      action="https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"
      draggable
      theme="custom"
      @fail="handleFail"
      @success="handleSuccess"
      @progress="onProgress"
      @dragenter="onDrop"
    >
      <template v-slot="params">
        <ul v-if="files && files.length">
          <li v-for="file in files" :key="file.name">{{ file.name }}</li>
        </ul>
        <template v-else>
          <p v-if="params && params.dragActive">\u91CA\u653E\u9F20\u6807</p>
          <t-button v-else-if="progress < 1">\u81EA\u5B9A\u4E49\u62D6\u62FD\u533A\u57DF</t-button>
        </template>
        <t-button v-if="files && files.length" size="small" style="margin-top: 36px">\u66F4\u6362\u6587\u4EF6</t-button>
        <br /><br />
        <!-- <span>\u6570\u636E\u72B6\u6001\uFF1A{{params}}</span> -->
      </template>
    </t-upload>
  </div>
</template>
<script>
import { CloudUploadIcon } from 'tdesign-icons-vue';

export default {
  components: { CloudUploadIcon },
  data() {
    return {
      files: [],
      progress: 0,
    };
  },
  methods: {
    onDrop(e) {
      const file = e.e.dataTransfer.items;
      console.log(file, 'file');
      for (let i = 0; i < file.length; i++) {
        console.log(file[i].type, 'type');
      }
    },
    handleFail({ file }) {
      this.$message.error(\`\u6587\u4EF6 \${file.name} \u4E0A\u4F20\u5931\u8D25\`);
    },
    handleSuccess({ file }) {
      this.$message.success(\`\u6587\u4EF6 \${file.name} \u4E0A\u4F20\u6210\u529F\`);
    },
    upload() {
      this.$refs.uploadRef.triggerUpload();
    },
    onProgress(val) {
      console.log(val);
      this.progress = val;
    },
  },
};
<\/script>
`,O=`<template>
  <div class="tdesign-demo-upload t-upload">
    <t-button variant="outline" @click="upload"> <cloud-upload-icon slot="icon" />\u70B9\u51FB\u4E0A\u4F20 </t-button>
    <br /><br />
    <t-upload
      ref="uploadRef"
      v-model="files"
      action="https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"
      draggable
      theme="custom"
      @fail="handleFail"
      @success="handleSuccess"
      @progress="onProgress"
      @dragenter="onDrop"
    >
      <template v-slot="params">
        <ul v-if="files && files.length">
          <li v-for="file in files" :key="file.name">{{ file.name }}</li>
        </ul>
        <template v-else>
          <p v-if="params && params.dragActive">\u91CA\u653E\u9F20\u6807</p>
          <t-button v-else-if="progress < 1">\u81EA\u5B9A\u4E49\u62D6\u62FD\u533A\u57DF</t-button>
        </template>
        <t-button v-if="files && files.length" size="small" style="margin-top: 36px">\u66F4\u6362\u6587\u4EF6</t-button>
        <br /><br />
        <!-- <span>\u6570\u636E\u72B6\u6001\uFF1A{{params}}</span> -->
      </template>
    </t-upload>
  </div>
</template>
<script setup>
import { MessagePlugin } from 'tdesign-vue';
import { ref } from 'vue';
import { CloudUploadIcon } from 'tdesign-icons-vue';

const uploadRef = ref();
const files = ref([]);
const progress = ref(0);
const onDrop = (e) => {
  const file = e.e.dataTransfer.items;
  console.log(file, 'file');
  for (let i = 0; i < file.length; i++) {
    console.log(file[i].type, 'type');
  }
};
const handleFail = ({ file }) => {
  MessagePlugin.error(\`\u6587\u4EF6 \${file.name} \u4E0A\u4F20\u5931\u8D25\`);
};
const handleSuccess = ({ file }) => {
  MessagePlugin.success(\`\u6587\u4EF6 \${file.name} \u4E0A\u4F20\u6210\u529F\`);
};
const upload = () => {
  uploadRef.value.triggerUpload();
};
const onProgress = (val) => {
  console.log(val);
  progress.value = val;
};
<\/script>
`,g=[{name:"allowUploadDuplicateFile",type:"Boolean",defaultValue:!1,options:[]},{name:"autoUpload",type:"Boolean",defaultValue:!0,options:[]},{name:"disabled",type:"Boolean",defaultValue:!1,options:[]},{name:"draggable",type:"Boolean",defaultValue:!1,options:[]},{name:"isBatchUpload",type:"Boolean",defaultValue:!1,options:[]},{name:"method",type:"enum",defaultValue:"POST",options:[{label:"POST",value:"POST"},{label:"GET",value:"GET"},{label:"PUT",value:"PUT"},{label:"OPTIONS",value:"OPTIONS"},{label:"PATCH",value:"PATCH"},{label:"post",value:"post"},{label:"get",value:"get"},{label:"put",value:"put"},{label:"options",value:"options"},{label:"patch",value:"patch"}]},{name:"multiple",type:"Boolean",defaultValue:!1,options:[]},{name:"showUploadProgress",type:"Boolean",defaultValue:!0,options:[]},{name:"theme",type:"enum",defaultValue:"file",options:[{label:"custom",value:"custom"},{label:"file",value:"file"},{label:"file-input",value:"file-input"},{label:"file-flow",value:"file-flow"},{label:"image",value:"image"},{label:"image-flow",value:"image-flow"}]},{name:"uploadAllFilesInOneRequest",type:"Boolean",defaultValue:!1,options:[]},{name:"useMockProgress",type:"Boolean",defaultValue:!0,options:[]},{name:"withCredentials",type:"Boolean",defaultValue:!1,options:[]}];const p={};p.setup=(e,n)=>{const t=s(g),a=[{label:"upload",value:"upload"}],o={upload:'<t-upload action="https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo" v-bind="configProps" />'},l=s(`<template>${o[a[0].value].trim()}</template>`);function u(c){l.value=`<template>${o[c].trim()}</template>`}return{configList:t,panelList:a,usageCode:l,onPanelChange:u}};var d=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("base-usage",{attrs:{code:e.usageCode,"config-list":e.configList,"panel-list":e.panelList},on:{PanelChange:e.onPanelChange},scopedSlots:e._u([{key:"upload",fn:function(a){var o=a.configProps;return[t("t-upload",e._b({attrs:{action:"https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"}},"t-upload",o,!1))]}}])})},f=[];d._withStripped=!0;const i={};var r=m(p,d,f,!1,h,null,null,null);function h(e){for(let n in i)this[n]=i[n]}r.options.__file="../src/upload/_usage/index.vue";var C=function(){return r.exports}();export{b as D,C as U,w as a,F as b,x as c,U as d,R as e,z as f,I as g,y as h,M as i,D as j,k,_ as l,q as m,B as n,L as o,S as p,O as q};
