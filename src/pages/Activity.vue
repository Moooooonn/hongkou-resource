<script lang="ts" setup>
import { onMounted, ref } from 'vue'

const date = ref('')
const week = ref('')
const day = ref('')
function updateTime() {
  const now = new Date()
  const year = now.getFullYear() // 年
  const month = now.getMonth() + 1 // 月
  day.value = now.getDate() // 日
  week.value = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'][now.getDay()] // 星期

  date.value = `${year}年${month}月`
}

function handleClickScheduleItem() {
  // 发送请求数据
  // 重新获取scheduleData
}

// mock schedule data, onmounted时获取数据
const scheduleData = ref([{
  title: '物理学科下的探讨交流展示活动',
  status: 'signed',
}, {
  title: '物理学科下的探讨交流展示活动',
  status: 'unsigned',
}])

interface User {
  date: string
  name: string
  address: string
}
function handleJoin(index: number, row: User) {
  // console.log(index, row)
}
function handleExit(index: number, row: User) {
  // console.log(index, row)
}
function goToActivityDetailPage(index: number, row: User) {
  // console.log(index, row)
}

// mock table data, onmounted时获取数据
const tableData: User[] = [
  {
    title: '物理学科实验下的实验探讨交流',
    status: 'signed',
  },
  {
    title: '物理学科实验下的实验探讨交流',
    status: 'unsigned',
  },
]

onMounted(() => {
  updateTime()
})
</script>

<template>
  <div class="activity-wrapper">
    <section class="schedule">
      <p class="schedule-title">
        梯队日程
      </p>
      <div class="schedule-content">
        <div class="calendar">
          <p>{{ week }}</p>
          <p class="day">
            {{ day }}
          </p>
          <p>{{ date }}</p>
        </div>
        <div class="schedule-content-info">
          <p v-for="(item, index) in scheduleData" :key="index">
            <span class="schedule-content-info_title">{{ item.title }}</span>
            <el-button v-if="item.status === 'unsigned'" size="small" type="success" @click="() => handleClickScheduleItem(item)">
              签到
            </el-button>
            <el-button v-if="item.status === 'signed'" size="small" type="success">
              已签到
            </el-button>
          </p>
        </div>
      </div>
    </section>
    <section class="activity">
      <p class="schedule-title">
        梯队活动
      </p>
      <el-table :data="tableData" style="width: 100%; text-align: center;">
        <el-table-column label="活动标题" fit>
          <template #default="scope">
            <div style="display: flex; align-items: center">
              <el-icon><timer /></el-icon>
              <span style="margin-left: 10px">{{ scope.row.title }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="100">
          <template #default="scope">
            <el-button v-if="scope.row.status === 'unsigned'" type="primary" size="small" @click="handleJoin(scope.$index, scope.row)">
              参与
            </el-button>
            <el-button v-if="scope.row.status === 'signed'" type="primary" size="small" @click="handleExit(scope.$index, scope.row)">
              退出
            </el-button>
            <el-button
              v-if="scope.row.status === 'signed'"
              type="success"
              size="small"
              @click="goToActivityDetailPage(scope.$index, scope.row)"
            >
              活动详情
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.activity-wrapper {
  height: calc(100% - 40px);
  padding: 0 10px;

  &:deep(.el-table .el-table__cell) {
    text-align: center;
  }
  &:deep(.el-button + .el-button) {
    margin-left: 0;
  }
}
.schedule-title {
  font-size: 16px;
  color: #c02121;
  font-weight: 600;
}
.schedule-content {
  display: flex;

  &-info {
    flex: 1;

    p {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &_title {
      font-size: 12px;
    }
  }
}
.calendar {
  width: 120px;
  box-sizing: border-box;
  text-align: center;
  background-color: #fff;
  padding: 10px 10px;
  border-top: 10px solid #c02121;
  margin-right: 5px;
  .day {
    font-size: 30px;
    font-weight: 600;
    line-height: 30px;
    padding: 0;
    margin: 0;
  }
}
</style>
