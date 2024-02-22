<script lang="ts" setup>
import { reactive, toRefs } from 'vue'
import { ArrowRightBold } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'

const router = useRouter()
// mock 数据，后续需要从接口获取
const state = reactive({
  circleUrl:
    'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
  name: '贝儿',
  school: '上海虹口教育学院',
  applyName: '学科培训基地主持人',
  applyPhase: '高中',
  applySubject: '物理',

})

function goToLoginPage() {
  router.replace({ path: '/login' })
}

const { circleUrl, name, school, applyName, applyPhase, applySubject } = toRefs(state)
</script>

<template>
  <div class="mypage-wrapper">
    <section class="basic-info">
      <el-avatar :size="50" :src="circleUrl" />
      <p class="name">
        [姓名]{{ name }}
      </p>
    </section>
    <section class="school">
      [学校]{{ school }}
    </section>
    <section class="apply">
      <div class="apply-item">
        <p class="apply-item_title">
          申报称号
        </p><p>{{ applyName }}</p>
      </div>
      <div class="apply-item">
        <p class="apply-item_title">
          申报学段
        </p><p>{{ applyPhase }}</p>
      </div>
      <div class="apply-item">
        <p class="apply-item_title">
          申报学科
        </p><p>{{ applySubject }}</p>
      </div>
    </section>
    <section class="password">
      <p>修改密码</p>
      <el-icon><ArrowRightBold /></el-icon>
    </section>
    <div class="logout" @click="goToLoginPage">
      退出登录
    </div>
  </div>
</template>

<style lang="scss" scoped>
.basic-info {
  padding: 40px 40px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .name {
    font-weight: 600;
  }
}
.school {
  text-align: center;
  font-weight: 600;
  font-size: 20px;
}
.apply {
  width: calc(356 / 393 * 100%);
  margin: 30px auto;
  display: flex;
  background: #eee;
  padding: 20px 10px;
  border-radius: 5%;
  box-shadow: 1px 1px 5px #bcb5b5;
  box-sizing: border-box;

  &-item {
    width: calc(1 / 3 * 100%);
    text-align: center;
    margin: 0 auto;
    font-size: 18px;
    border-right: 2px solid #d8d8d8;
    padding: 5px;

    &:last-child {
      border-right: none;
    }

    p {
      margin: 0;
    }

    &_title {
      font-weight: 600;
      padding-bottom: 15px;
    }
  }
}
.password {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  background: #fff;
  font-size: 20px;
  font-weight: 600;
  height: 63px;
}
.logout {
  text-align: center;
  position: absolute;
  bottom: 70px;
  height: 63px;
  font-size: 20px;
  left: 0;
  right: 0;
  color: #c02121;
  font-weight: 600;
  background: #fff;
  line-height: 20px;
  align-items: center;
  display: flex;
  justify-content: center;
}
</style>
