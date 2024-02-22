<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// mock 列表数据，后续从接口中动态获取
const data = ref([{
  id: '1',
  status: 'new',
  title: '关于2024年度开展填报的通知。',
  date: '2024-1-11',
}, {
  id: '2',
  status: 'new',
  title: '人才梯队管理办法（2022-2024）',
  date: '2024-1-9',
}, {
  id: '3',
  status: 'old',
  title: '人才梯队管理办法（2022-2024）',
  date: '2024-1-9',
}])

function goToNotificationDetail(id: any) {
  router.push({ path: '/notification-detail', query: { id } })
}
</script>

<template>
  <div class="notification-wrapper">
    <p class="notification-title">
      通知公告
    </p>
    <div class="notification-content">
      <div v-for="(item, index) in data" :key="index" class="notification-content-item" @click="goToNotificationDetail(item.id)">
        <span v-if="item.status === 'new'" class="notification-content-status">NEW</span>
        <span class="notification-content-title">{{ item.title }}</span>
        <span class="notification-content-date">{{ item.date }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.notification-title {
  text-align: center;
  font-size: 16px;
  font-weight: 600;
}
.notification-content {
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;

  &-item {
    display: flex;
    align-items: center;
    font-size: 18px;
    border-bottom: 1px solid #c02121;
    box-sizing: border-box;
    padding: 10px 0;
    margin-bottom: 10px;
  }
  &-status {
    font-size: 10px;
    background: #c02121;
    color: #fff;
    padding: 1px 2px;
    margin-right: 20px;
    box-sizing: border-box;
  }
  &-title {
    flex: 1;
    margin-right: 20px;
  }
}
</style>
