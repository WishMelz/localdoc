var t=`<template>
  <t-watermark
    :watermark-content="{
      text: '\u6587\u5B57\u6C34\u5370',
    }"
    :width="120"
    :height="60"
    :y="120"
    :x="80"
  >
    <div style="height: 300px" />
  </t-watermark>
</template>
`,e=`<template>
  <t-watermark
    :watermark-content="{
      url: 'https://tdesign.gtimg.com/site/logo-watermark.svg',
    }"
    :width="104"
    :height="65.5"
    :x="90"
    :y="100"
    :rotate="0"
    :removable="false"
  >
    <div style="height: 300px" />
  </t-watermark>
</template>
`,n=`<template>
  <t-watermark
    :watermark-content="[
      { text: '\u6C34\u5370\u6587\u672C', fontColor: 'black' },
      { url: 'https://tdesign.gtimg.com/starter/brand-logo-light.png' },
    ]"
    :line-space="24"
    :x="100"
    :y="120"
    :width="158"
    :height="22"
    :alpha="0.3"
  >
    <div style="height: 300px" />
  </t-watermark>
</template>
`,a=`<template>
  <t-watermark
    :watermark-content="{
      text: '\u6587\u5B57\u6C34\u5370',
    }"
    :width="120"
    :height="60"
    :y="200"
    :x="210"
    movable
  >
    <div style="height: 300px" />
  </t-watermark>
</template>
`,r=`<template>
  <t-watermark
    :watermark-content="{
      url: 'https://tdesign.gtimg.com/starter/brand-logo-light.png',
    }"
    movable
    :width="158"
    :height="22"
    :x="90"
    :y="100"
  >
    <div style="height: 300px" />
  </t-watermark>
</template>
`,m=`<template>
  <t-watermark
    :watermark-content="{
      url: 'https://tdesign.gtimg.com/starter/brand-logo-light.png',
      isGrayscale: true,
    }"
    :x="100"
    :y="140"
    :width="158"
    :height="22"
    :alpha="0.3"
  >
    <div style="height: 300px" />
  </t-watermark>
</template>
`;export{t as D,e as a,n as b,a as c,r as d,m as e};
