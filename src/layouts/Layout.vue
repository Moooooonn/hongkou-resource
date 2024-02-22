<script lang="ts">
import { useRoute } from 'vue-router'

import home from '../assets/tabbar/home.png'
import homeActive from '../assets/tabbar/home-active.png'
import check from '../assets/tabbar/check.png'
import activity from '../assets/tabbar/activity.png'
import activityActive from '../assets/tabbar/activity-active.png'
import myPng from '../assets/tabbar/user.png'
import myActivePng from '../assets/tabbar/user-active.png'
import checkActive from '../assets/tabbar/check-active.png'

import type { ITabList } from '../components/Navbar.vue'
import TabBar from '../components/Navbar.vue'
import TopBar from '../components/TopBar.vue'

interface ILayoutState {
  tabbars: Array<ITabList>
  defaultActive: number
}

export default defineComponent({
  name: 'Layouts',
  components: { TabBar, TopBar },
  setup() {
    const route = useRoute()
    const state: ILayoutState = reactive({
      tabbars: [
        {
          title: '首页',
          to: { name: 'Home' },
          image: home,
          image_active: homeActive,
        },
        {
          title: '查看',
          to: { name: 'Check' },
          image: check,
          image_active: checkActive,
        },
        {
          title: '活动',
          to: { name: 'Activity' },
          image: activity,
          image_active: activityActive,
        },
        {
          title: '我的',
          to: { name: 'My' },
          image: myPng,
          image_active: myActivePng,
        },
      ],
      defaultActive: computed(() => {
        return state.tabbars.findIndex((item: ITabList) => {
          return item.to.name === route.name
        })
      }),
    })
    const handleChange = (v: number) => {
      // console.log('tab value:', v)
    }

    return {
      ...toRefs(state),
      handleChange,
    }
  },
})
</script>

<template>
  <div class="app-container">
    <TopBar />
    <div class="layout-content">
      <keep-alive v-if="$route.meta.keepAlive">
        <router-view />
      </keep-alive>
      <router-view v-else />
    </div>
    <div v-if="$route.meta.showTab" class="layout-footer">
      <!-- 这里@change默认绑定在了van-tabbar上，参考vue的$attr -->
      <TabBar
        :tabbars="tabbars"
        :default-active="defaultActive"
        @change="handleChange"
      />
    </div>
  </div>
</template>

<style lang="scss">
.app-container {
  box-sizing: border-box;
  height: 100vh;
  padding-top: 40px;
  padding-bottom: 70px;
  overflow: scroll;
}
.layout-content {
  height: 100%;
}
</style>
