<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { Autoplay, Pagination } from 'swiper'
import 'swiper/css/pagination'
import { useNavbar } from '~/composables'

const { t } = useI18n()
useNavbar({ title: () => t('home.title') })

const modules = [Pagination, Autoplay]

const swiperData = ref([{
  id: 'a',
  imagePath: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
}, {
  id: 'b',
  imagePath: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
}, {
  id: 'c',
  imagePath: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
}, {
  id: 'd',
  imagePath: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
}])

const swiperOption = {
  loop: true,
  autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },
  // 显示分页
  pagination: {
    el: '.swiper-pagination',
    clickable: true, // 允许分页点击跳转
  },
}

function onSwiper(swiper: any) {
  // console.log(swiper)
}
function onSlideChange() {
  // console.log('slide change')
}
</script>

<template>
  <div class="homepage-wrapper">
    <div>
      <div class="swiper">
        <swiper
          :modules="modules"
          :pagination="true"
          :autoplay="{ delay: 2000, disableOnInteraction: false }"
          :speed="500"
          :loop="true"
          :slides-per-view="1"
          @swiper="onSwiper"
          @slide-change="onSlideChange"
        >
          <swiper-slide v-for="(slide, index) in swiperData" :key="index">
            <el-image style="width: 100%; height: 100%" :src="slide.imagePath" fit="cover" />
          </swiper-slide>
        </swiper>
      </div>
    </div>

    <div class="notification">
      <p class="notification-title">
        通知公告
      </p>
      <div class="notification-content">
        <p><span>通知：</span>关于完成教师称号上报工作。</p>
        <p><span>公告：</span>关于专业人才梯队评选办法（2023-2024）。</p>
        <p><span>喜报：</span>恭喜XXX获得XX称号。</p>
        <p><span>通知：</span>因平台升级暂时关闭平台通知。</p>
      </div>
      <a class="notification-more">更多通知公告</a>
    </div>

    <div class="echelon">
      <p class="echelon-title">
        梯队风采
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.homepage-wrapper {
  display: flex;
  flex-direction: column;
  height: calc(100% - 40px);
}
.swiper {
  height: 212px;
  margin-top: 3px;

  &:deep(.swiper-pagination-bullet-active) {
    background-color: #c02121;
  }
}
.notification {
  flex: 1;
  padding: 15px;
  display: flex;
  flex-direction: column;
  height: calc(100% - 40px - 424px);
  &-title {
    font-size: 16px;
    color: #c02121;
    font-weight: bold;
  }
  &-content {
    font-size: 14px;
    line-height: 1.5;
    flex: 1;
    overflow: scroll;
  }
  &-more {
    font-size: 16px;
    color: #c02121;
    align-self: end;
  }
}
.echelon {
  height: 212px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg);
  background-repeat: no-repeat;
  background-size: cover;
  &-title {
    font-size: 24px;
    color: #c02121;
    font-weight: bold;
    width: 188px;
    height: 99px;
    text-align: center;
    line-height: 99px;
    background: rgb(244 246 248 / 50%);
  }
}
</style>
