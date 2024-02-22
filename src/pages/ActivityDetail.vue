<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { CircleClose, Plus } from '@element-plus/icons-vue'

const data = ref({
  date: '2023年10月30日',
  type: '日常共性类指导记录',
  title: '物理学科下的实验探讨交流展示活动',
  address: '虹口区教师进修学院',
  fileName: '教学设计.docx',
  content: '1231111',
  homework: [{
    title: '物理学科下的实验探讨交流展示活动1',
  }, {
    title: '物理学科下的实验探讨交流展示活动2',
  }],
})
const id = ref('')

onMounted(() => {
  const route = useRoute()
  id.value = route.query.id
  // 用ID请求后台接口数据，获取文章详情，赋值给data
})
</script>

<template>
  <div class="activity-detail">
    <section class="activity-basic">
      <p class="title">
        活动基本信息
      </p>
      <el-form
        label-position="left"
        label-width="100px"
        :model="data"
        style="max-width: 460px"
      >
        <el-form-item label="时间：">
          <el-input v-model="data.date" disabled />
        </el-form-item>
        <el-form-item label="类型：">
          <el-input v-model="data.type" disabled />
        </el-form-item>
        <el-form-item label="活动标题：">
          <el-input v-model="data.title" type="textarea" disabled />
        </el-form-item>
        <el-form-item label="地点：">
          <el-input v-model="data.address" disabled />
        </el-form-item>
        <el-form-item label="附件名称：">
          <el-input v-model="data.fileName" disabled />
          <el-button class="button" color="#C02121" size="small">
            查看附件
          </el-button>
        </el-form-item>
      </el-form>
    </section>
    <section class="activity-content">
      <p class="title">
        活动内容
      </p>
      <el-input
        v-model="data.content"
        :rows="8"
        type="textarea"
        placeholder="Please input"
        disabled
      />
    </section>
    <section class="upload-homework">
      <p class="title">
        作业上传
      </p>
      <div class="homework">
        <div v-for="(item, index) in data.homework" :key="index" class="homework-item">
          <p>{{ item.title }}</p>
          <el-icon color="#C02121" size="20">
            <CircleClose />
          </el-icon>
        </div>
        <div class="homework-item-plus">
          <el-icon color="#C02121" size="20">
            <Plus />
          </el-icon>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.activity-detail {
  padding: 0 20px;

  &:deep(.el-input.is-disabled .el-input__inner) {
    color: #000;
    -webkit-text-fill-color: #000;
  }

  &:deep(.el-textarea.is-disabled .el-textarea__inner) {
    color: #000;
    -webkit-text-fill-color: #000;
  }

  &:deep(.el-form-item__label) {
    font-weight: 600;
  }
}
.title {
  font-size: 24px;
  color: #c02121;
  font-weight: 600;
}
.button {
  position: absolute;
  right: 0;
}
.homework {
  background: #fff;
  border-radius: 10px;
  border: 1px solid #d8d8d8;
  margin-bottom: 20px;
  padding: 10px;
}
.homework-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    margin: 5px 0;
  }
  &-plus {
    justify-content: flex-end;
    display: flex;
    margin-top: 5px;
  }
}
</style>
