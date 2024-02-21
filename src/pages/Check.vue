<script lang="ts" setup>
import { ref } from 'vue'

const activeName = ref('1')
const personalData = ref([{
  title: '个人信息',
  list: [{
    label: '真实姓名',
    value: '袁芳',
  }, {
    label: '单位',
    value: '华东师大一附中',
  }, {
    label: '出生年月',
    value: '1971-10-09',
  }, {
    label: '申报称号',
    value: '学科培训基地主持人',
  }, {
    label: '申报学段',
    value: '普通高中',
  }, {
    label: '申报学科',
    value: '物理',
  }, {
    label: '任教学段',
    value: '普通高中',
  }, {
    label: '真实姓名',
    value: '袁芳',
  }, {
    label: '任教学科',
    value: '物理',
  }, {
    label: '现任专技职称',
    value: '正高级教师(正高级)',
  }, {
    label: '学历',
    value: '大学本科毕业',
  }, {
    label: '学位',
    value: '教育硕士专业学位',
  }],
}, {
  title: '自我发展计划',
  list: [{
    label: '第一年计划',
    value: '',
  }],
}, {
  title: '公开课',
  list: [{
    label: '时间',
    value: '',
  }],
}, {
  title: '指导课',
  list: [{
    label: '时间',
    value: '',
  }],
}, {
  title: '项目研究',
  list: [{
    label: '时间',
    value: '',
  }],
}, {
  title: '个人信息',
  list: [{
    label: '真实姓名',
    value: '袁芳',
  }, {
    label: '单位',
    value: '华东师大一附中',
  }, {
    label: '出生年月',
    value: '1971-10-09',
  }, {
    label: '申报称号',
    value: '学科培训基地主持人',
  }, {
    label: '申报学段',
    value: '普通高中',
  }, {
    label: '申报学科',
    value: '物理',
  }, {
    label: '任教学段',
    value: '普通高中',
  }, {
    label: '真实姓名',
    value: '袁芳',
  }, {
    label: '任教学科',
    value: '物理',
  }, {
    label: '现任专技职称',
    value: '正高级教师(正高级)',
  }, {
    label: '学历',
    value: '大学本科毕业',
  }, {
    label: '学位',
    value: '教育硕士专业学位',
  }],
}, {
  title: '自我发展计划',
  list: [{
    label: '第一年计划',
    value: '',
  }],
}, {
  title: '公开课',
  list: [{
    label: '时间',
    value: '',
  }],
}, {
  title: '指导课',
  list: [{
    label: '时间',
    value: '',
  }],
}, {
  title: '项目研究',
  list: [{
    label: '时间',
    value: '',
  }],
}, {
  title: '指导课',
  list: [{
    label: '时间',
    value: '',
  }],
}, {
  title: '项目研究',
  list: [{
    label: '时间',
    value: '',
  }],
}, {
  title: '指导课',
  list: [{
    label: '时间',
    value: '',
  }],
}, {
  title: '项目研究',
  list: [{
    label: '时间',
    value: '',
  }],
}])

const examData = ref([{
  label: '称号申报审核通过',
  value: '2023-3-31',
}, {
  label: '2023年度填报考核评分：88分。',
  value: '2023-8-30',
}])
</script>

<template>
  <div class="checkpage-wrapper">
    <section class="personal-info">
      <p class="personal-info_title">
        个人填报信息查看：
      </p>
      <div class="collapse">
        <el-collapse v-model="activeName" accordion>
          <el-collapse-item v-for="(item, index) in personalData" :key="index" :title="item.title" :name="index">
            <el-descriptions :column="1">
              <el-descriptions-item v-for="(listItem, listIndex) in item.list" :key="listIndex" :label="listItem.label">
                {{ listItem.value }}
              </el-descriptions-item>
            </el-descriptions>
          </el-collapse-item>
        </el-collapse>
      </div>
    </section>
    <section class="exam-info">
      <p class="personal-info_title">
        考核情况：
      </p>
      <el-descriptions :column="1">
        <el-descriptions-item v-for="(item, index) in examData" :key="index" :label="item.label">
          {{ item.value }}
        </el-descriptions-item>
      </el-descriptions>
    </section>
  </div>
</template>

<style lang="scss">
.checkpage-wrapper {
  height: calc(100% - 40px);
  padding: 0 10px;
}
.personal-info {
  &_title {
    font-size: 16px;
    color: #c02121;
    font-weight: 600;
  }
}
.exam-info {
  .el-descriptions__body {
    height: 17vh;
    overflow: scroll;
  }
}
.el-collapse {
  overflow: scroll;
  height: 55vh;
}
.el-collapse-item__header {
  padding-left: 5px;
}
.el-descriptions__body .el-descriptions__table .el-descriptions__cell {
  padding-left: 5px;
}
</style>
