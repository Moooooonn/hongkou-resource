<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const data = ref({
  title: '标题-XXXX的新闻',
  subTitle: '【*版块 新闻】管理员  2024-01-02',
  imgPath: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
  contentTitle: '正文内容',
  content: '上海申花队在海口的冬训备战已经进入了尾声，球队在海口已经持续了近2周的训练。明天下午，球队将迎来冬训期间的第二场热身赛，对手是同为中超球队的长春亚泰。下周一，申花队将从海口启程前往深圳，备战将于下周三晚上在深圳大运中心进行的与C罗效力的利雅得胜利之间的友谊赛。近日，主教练斯卢茨基接受了上海申花俱乐部的专访，谈到了冬训时球员们的状态，和球迷的支持等话题。专访内容如下：',
  signature: '项目小组',
})
const id = ref('')

onMounted(() => {
  const route = useRoute()
  id.value = route.query.id
  // 用ID请求后台接口数据，获取文章详情，赋值给data
})
</script>

<template>
  <div class="notification-detail">
    <p class="title">
      {{ data.title }} {{ id }}
    </p>
    <p class="sub-title">
      {{ data.subTitle }}
    </p>
    <p class="content-title">
      {{ data.contentTitle }}
    </p>
    <p class="content">
      {{ data.content }}
    </p>
    <p class="signature">
      {{ data.signature }}
    </p>
    <div class="download">
      <p>附件：</p>
      <p>XXXXX的通知.PDF</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.notification-detail {
  .title {
    font-size: 16px;
    color: #000;
    font-weight: 600;
    text-align: center;
  }
  .sub-title {
    font-size: 14px;
    color: #767676;
    text-align: right;
    font-weight: 600;
    margin-right: 20px;
  }
  .content-title {
    margin-top: 20px;
  }
  .content-title,
  .content {
    font-size: 16px;
    padding: 0 10px;
    line-height: 24px;
    margin: 0;
  }
  .signature {
    text-align: right;
    padding-right: 10px;
  }
  .download {
    font-size: 16px;
    font-weight: bold;
    padding-left: 10px;
  }
}
</style>
