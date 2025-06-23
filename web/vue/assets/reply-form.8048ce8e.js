var n=`<template>
  <t-comment
    avatar="https://tdesign.gtimg.com/site/avatar.jpg"
    author="\u8BC4\u8BBA\u4F5C\u8005\u540D"
    datetime="\u4ECA\u592916:38"
    content="\u8FD9\u91CC\u662F\u8BC4\u8BBA\u8005\u5199\u7684\u8BC4\u8BBA\u5185\u5BB9\u3002"
  ></t-comment>
</template>
`,t=`<template>
  <t-comment
    avatar="https://tdesign.gtimg.com/site/avatar.jpg"
    author="\u8BC4\u8BBA\u4F5C\u8005\u540D"
    datetime="\u4ECA\u592916:38"
    content="\u8FD9\u91CC\u662F\u8BC4\u8BBA\u8005\u5199\u7684\u8BC4\u8BBA\u5185\u5BB9\u3002"
  ></t-comment>
</template>
`,e=`<template>
  <t-comment
    avatar="https://tdesign.gtimg.com/site/avatar.jpg"
    author="\u8BC4\u8BBA\u4F5C\u8005\u540D"
    datetime="\u4ECA\u592916:38"
    content="\u8FD9\u91CC\u662F\u8BC4\u8BBA\u8005\u5199\u7684\u8BC4\u8BBA\u5185\u5BB9\u3002"
  >
    <template #actions>
      <span key="thumbUp">
        <thumb-up-icon />
        <span class="action-text">6</span>
      </span>
      <span key="chat">
        <chat-icon />
        <span class="action-text">\u56DE\u590D</span>
      </span>
    </template>
  </t-comment>
</template>

<script>
import { ThumbUpIcon, ChatIcon } from 'tdesign-icons-vue';

export default {
  components: {
    ThumbUpIcon,
    ChatIcon,
  },
};
<\/script>

<style lang="less" scoped>
.action-text {
  display: inline-block;
  margin-left: 6px;
  line-height: 15px;
}
</style>
`,a=`<template>
  <t-comment
    avatar="https://tdesign.gtimg.com/site/avatar.jpg"
    author="\u8BC4\u8BBA\u4F5C\u8005\u540D"
    datetime="\u4ECA\u592916:38"
    content="\u8FD9\u91CC\u662F\u8BC4\u8BBA\u8005\u5199\u7684\u8BC4\u8BBA\u5185\u5BB9\u3002"
  >
    <template #actions>
      <span key="thumbUp">
        <thumb-up-icon />
        <span class="action-text">6</span>
      </span>
      <span key="chat">
        <chat-icon />
        <span class="action-text">\u56DE\u590D</span>
      </span>
    </template>
  </t-comment>
</template>

<script setup>
import { ThumbUpIcon, ChatIcon } from 'tdesign-icons-vue';
<\/script>

<style lang="less" scoped>
.action-text {
  display: inline-block;
  margin-left: 6px;
  line-height: 15px;
}
</style>
`,s=`<template>
  <t-list :split="true">
    <t-list-item v-for="(item, index) in commentsData" :key="index">
      <template #content>
        <t-comment :avatar="item.avatar" :author="item.author" :datetime="item.datetime" :content="item.content">
          <template #actions>
            <span key="thumbUp">
              <icon name="thumb-up" />
              <span class="action-text">6</span>
            </span>
            <span key="chat">
              <icon name="chat" />
              <span class="action-text">\u56DE\u590D</span>
            </span>
          </template>
        </t-comment>
      </template>
    </t-list-item>
  </t-list>
</template>

<script>
import { Icon } from 'tdesign-icons-vue';

export default {
  name: 'list',
  components: {
    Icon,
  },
  data() {
    return {
      commentsData: [
        {
          id: 'A',
          avatar: 'https://tdesign.gtimg.com/site/avatar.jpg',
          author: '\u8BC4\u8BBA\u4F5C\u8005\u540DA',
          datetime: '\u4ECA\u592916:38',
          content: '\u8BC4\u8BBA\u4F5C\u8005\u540DA\u5199\u7684\u8BC4\u8BBA\u5185\u5BB9\u3002',
        },
        {
          id: 'B',
          avatar: 'https://tdesign.gtimg.com/site/avatar.jpg',
          author: '\u8BC4\u8BBA\u4F5C\u8005\u540DB',
          datetime: '\u4ECA\u592916:38',
          content: '\u8BC4\u8BBA\u4F5C\u8005\u540DB\u5199\u7684\u8BC4\u8BBA\u5185\u5BB9\u3002',
        },
        {
          id: 'C',
          avatar: 'https://tdesign.gtimg.com/site/avatar.jpg',
          author: '\u8BC4\u8BBA\u4F5C\u8005\u540DC',
          datetime: '\u4ECA\u592916:38',
          content: '\u8BC4\u8BBA\u4F5C\u8005\u540DC\u5199\u7684\u8BC4\u8BBA\u5185\u5BB9\u3002',
        },
      ],
    };
  },
};
<\/script>

<style lang="less" scoped>
.action-text {
  display: inline-block;
  margin-left: 6px;
  line-height: 15px;
}
</style>
`,o=`<template>
  <t-list :split="true">
    <t-list-item v-for="(item, index) in commentsData" :key="index">
      <template #content>
        <t-comment :avatar="item.avatar" :author="item.author" :datetime="item.datetime" :content="item.content">
          <template #actions>
            <span key="thumbUp">
              <icon name="thumb-up" />
              <span class="action-text">6</span>
            </span>
            <span key="chat">
              <icon name="chat" />
              <span class="action-text">\u56DE\u590D</span>
            </span>
          </template>
        </t-comment>
      </template>
    </t-list-item>
  </t-list>
</template>

<script setup>
import { ref } from 'vue';
import { Icon } from 'tdesign-icons-vue';

const commentsData = ref([
  {
    id: 'A',
    avatar: 'https://tdesign.gtimg.com/site/avatar.jpg',
    author: '\u8BC4\u8BBA\u4F5C\u8005\u540DA',
    datetime: '\u4ECA\u592916:38',
    content: '\u8BC4\u8BBA\u4F5C\u8005\u540DA\u5199\u7684\u8BC4\u8BBA\u5185\u5BB9\u3002',
  },
  {
    id: 'B',
    avatar: 'https://tdesign.gtimg.com/site/avatar.jpg',
    author: '\u8BC4\u8BBA\u4F5C\u8005\u540DB',
    datetime: '\u4ECA\u592916:38',
    content: '\u8BC4\u8BBA\u4F5C\u8005\u540DB\u5199\u7684\u8BC4\u8BBA\u5185\u5BB9\u3002',
  },
  {
    id: 'C',
    avatar: 'https://tdesign.gtimg.com/site/avatar.jpg',
    author: '\u8BC4\u8BBA\u4F5C\u8005\u540DC',
    datetime: '\u4ECA\u592916:38',
    content: '\u8BC4\u8BBA\u4F5C\u8005\u540DC\u5199\u7684\u8BC4\u8BBA\u5185\u5BB9\u3002',
  },
]);
<\/script>

<style lang="less" scoped>
.action-text {
  display: inline-block;
  margin-left: 6px;
  line-height: 15px;
}
</style>
`,i=`<template>
  <t-comment
    avatar="https://tdesign.gtimg.com/site/avatar.jpg"
    author="\u8BC4\u8BBA\u4F5C\u8005\u540D"
    datetime="\u4ECA\u592916:38"
    content="\u8FD9\u91CC\u662F\u8BC4\u8BBA\u8005\u5199\u7684\u8BC4\u8BBA\u5185\u5BB9\u3002"
  >
    <template #actions>
      <span key="thumbUp">
        <icon name="thumb-up" />
        <span class="action-text">6</span>
      </span>
      <span key="chat">
        <icon name="chat" />
        <span class="action-text">\u56DE\u590D</span>
      </span>
    </template>

    <template #reply>
      <t-comment
        avatar="https://tdesign.gtimg.com/site/avatar.jpg"
        datetime="\u4ECA\u592916:38"
        content="\u8FD9\u91CC\u662F\u8BC4\u8BBA\u8005\u5199\u7684\u8BC4\u8BBA\u5185\u5BB9\u3002"
      >
        <template #author>
          <span>\u8BC4\u8BBA\u4F5C\u8005\u540DB</span>
          <caret-right-small-icon size="small" class="author-icon" />
          <span>\u8BC4\u8BBA\u4F5C\u8005\u540DA</span>
        </template>

        <template #actions>
          <span key="thumbUp">
            <thumb-up-icon />
            <span class="action-text">6</span>
          </span>
          <span key="chat">
            <chat-icon />
            <span class="action-text">\u56DE\u590D</span>
          </span>
        </template>
      </t-comment>
    </template>
  </t-comment>
</template>

<script>
import { CaretRightSmallIcon, ThumbUpIcon, ChatIcon } from 'tdesign-icons-vue';

export default {
  components: {
    CaretRightSmallIcon,
    ThumbUpIcon,
    ChatIcon,
  },
};
<\/script>

<style lang="less" scoped>
.action-text {
  display: inline-block;
  margin-left: 6px;
  line-height: 15px;
}

.author-icon {
  display: inline-block;
  margin: 0 4px;
}
</style>
`,p=`<template>
  <t-comment
    avatar="https://tdesign.gtimg.com/site/avatar.jpg"
    author="\u8BC4\u8BBA\u4F5C\u8005\u540D"
    datetime="\u4ECA\u592916:38"
    content="\u8FD9\u91CC\u662F\u8BC4\u8BBA\u8005\u5199\u7684\u8BC4\u8BBA\u5185\u5BB9\u3002"
  >
    <template #actions>
      <span key="thumbUp">
        <icon name="thumb-up" />
        <span class="action-text">6</span>
      </span>
      <span key="chat">
        <icon name="chat" />
        <span class="action-text">\u56DE\u590D</span>
      </span>
    </template>

    <template #reply>
      <t-comment
        avatar="https://tdesign.gtimg.com/site/avatar.jpg"
        datetime="\u4ECA\u592916:38"
        content="\u8FD9\u91CC\u662F\u8BC4\u8BBA\u8005\u5199\u7684\u8BC4\u8BBA\u5185\u5BB9\u3002"
      >
        <template #author>
          <span>\u8BC4\u8BBA\u4F5C\u8005\u540DB</span>
          <caret-right-small-icon size="small" class="author-icon" />
          <span>\u8BC4\u8BBA\u4F5C\u8005\u540DA</span>
        </template>

        <template #actions>
          <span key="thumbUp">
            <thumb-up-icon />
            <span class="action-text">6</span>
          </span>
          <span key="chat">
            <chat-icon />
            <span class="action-text">\u56DE\u590D</span>
          </span>
        </template>
      </t-comment>
    </template>
  </t-comment>
</template>

<script setup>
import { CaretRightSmallIcon, ThumbUpIcon, ChatIcon } from 'tdesign-icons-vue';
<\/script>

<style lang="less" scoped>
.action-text {
  display: inline-block;
  margin-left: 6px;
  line-height: 15px;
}

.author-icon {
  display: inline-block;
  margin: 0 4px;
}
</style>
`,m=`<template>
  <t-comment
    avatar="https://tdesign.gtimg.com/site/avatar.jpg"
    author="\u8BC4\u8BBA\u4F5C\u8005\u540D"
    datetime="\u4ECA\u592916:38"
    content="\u8FD9\u91CC\u662F\u8BC4\u8BBA\u8005\u5199\u7684\u8BC4\u8BBA\u5185\u5BB9\u3002"
  >
    <template #actions>
      <span key="thumbUp">
        <thumb-up-icon />
        <span class="action-text">6</span>
      </span>
      <span key="chat">
        <chat-icon />
        <span class="action-text">\u56DE\u590D</span>
      </span>
    </template>

    <template #quote>
      <t-comment author="\u5F15\u7528\u5185\u5BB9\u6807\u9898" content="\u5F15\u7528\u8BC4\u8BBA\u5185\u5BB9\u3002"></t-comment>
    </template>
  </t-comment>
</template>

<script>
import { ThumbUpIcon, ChatIcon } from 'tdesign-icons-vue';

export default {
  components: {
    ThumbUpIcon,
    ChatIcon,
  },
};
<\/script>

<style lang="less" scoped>
.action-text {
  display: inline-block;
  margin-left: 6px;
  line-height: 15px;
}
</style>
`,c=`<template>
  <t-comment
    avatar="https://tdesign.gtimg.com/site/avatar.jpg"
    author="\u8BC4\u8BBA\u4F5C\u8005\u540D"
    datetime="\u4ECA\u592916:38"
    content="\u8FD9\u91CC\u662F\u8BC4\u8BBA\u8005\u5199\u7684\u8BC4\u8BBA\u5185\u5BB9\u3002"
  >
    <template #actions>
      <span key="thumbUp">
        <thumb-up-icon />
        <span class="action-text">6</span>
      </span>
      <span key="chat">
        <chat-icon />
        <span class="action-text">\u56DE\u590D</span>
      </span>
    </template>

    <template #quote>
      <t-comment author="\u5F15\u7528\u5185\u5BB9\u6807\u9898" content="\u5F15\u7528\u8BC4\u8BBA\u5185\u5BB9\u3002"></t-comment>
    </template>
  </t-comment>
</template>

<script setup>
import { ThumbUpIcon, ChatIcon } from 'tdesign-icons-vue';
<\/script>

<style lang="less" scoped>
.action-text {
  display: inline-block;
  margin-left: 6px;
  line-height: 15px;
}
</style>
`,l=`<template>
  <t-comment avatar="https://tdesign.gtimg.com/site/avatar.jpg">
    <template #content>
      <div class="form-container">
        <t-textarea placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" v-model="replyData" />
        <t-button class="form-submit" @click="submitReply">\u56DE\u590D</t-button>
      </div>
    </template>
  </t-comment>
</template>

<script>
import { NotifyPlugin } from 'tdesign-vue';

export default {
  name: 'replyForm',
  data() {
    return {
      replyData: '',
    };
  },
  methods: {
    submitReply() {
      NotifyPlugin.info({
        title: '\u56DE\u590D\u5185\u5BB9',
        content: this.replyData,
        duration: 3000,
      });
    },
  },
};
<\/script>

<style lang="less" scoped>
.form-container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  .form-submit {
    margin-top: 8px;
  }
}
</style>
`,r=`<template>
  <t-comment avatar="https://tdesign.gtimg.com/site/avatar.jpg">
    <template #content>
      <div class="form-container">
        <t-textarea placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" v-model="replyData" />
        <t-button class="form-submit" @click="submitReply">\u56DE\u590D</t-button>
      </div>
    </template>
  </t-comment>
</template>

<script setup>
import { ref } from 'vue';
import { NotifyPlugin } from 'tdesign-vue';

const replyData = ref('');

const submitReply = () => {
  NotifyPlugin.info({
    title: '\u56DE\u590D\u5185\u5BB9',
    content: replyData.value,
    duration: 3000,
  });
};
<\/script>

<style lang="less" scoped>
.form-container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  .form-submit {
    margin-top: 8px;
  }
}
</style>
`;export{n as D,t as a,e as b,a as c,s as d,o as e,i as f,p as g,m as h,c as i,l as j,r as k};
