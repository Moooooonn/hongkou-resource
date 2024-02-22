<script lang="ts" setup>
import { onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'
import Identity from '~/components/login/Identity.vue'

const router = useRouter()
let form = reactive({
  userName: '',
  mobile: '',
  password: '',
  mobileCode: '',
  identity: '',
})
const loginType = ref('password')
const error = ref([])
const identifyCode = ref('')
const identifyCodes = '123456789ABCDEFGHGKMNPQRSTUVWXYZ'
const countDown = ref(0)

/**
 * 切换登录模式
 * password = 用户登录
 * mobile = 动态码登录
 */
function switchType(type) {
  loginType.value = type
  refreshCode()
  form = {
    userName: '',
    mobile: '',
    password: '',
    mobileCode: '',
    identity: '',
  }
  error.value = []
}

/**
 * 刷新图形验证码
 */
function refreshCode() {
  identifyCode.value = ''
  makeCode(identifyCodes, 4)
}
// 生成随机验证码
function makeCode(o, l) {
  for (let i = 0; i < l; i++) {
    identifyCode.value += identifyCodes[
      Math.floor(Math.random() * (identifyCodes.length - 0) + 0)
    ]
  }
}

/**
 * click 登录
 * 校验表单
 * 发送登录请求
 */
function login() {
  if (!validateInput())
    return false

  /**
   * 登录处理，用户名密码通过form获取
   */
  // todo
  console.log(111)
  router.replace({ path: '/' })
}

function validateInput() {
  const { userName, password, identity, mobile, mobileCode } = form
  const errorList: Array<string> = []

  if (loginType.value === 'password') {
    if (!userName.trim())
      errorList.push('请输入用户名')

    if (!password.trim())
      errorList.push('请输入密码')
  }

  if (loginType.value === 'mobile') {
    if (!mobile.trim())
      errorList.push('请输入手机号')

    // 后期加入判断手机验证码是否相等
    if (!mobileCode.trim())
      errorList.push('请输入手机验证码')
  }

  if (identity.toUpperCase() !== identifyCode.value)
    errorList.push('请输入正确的验证码')

  error.value = errorList
  return !errorList.length
}

/**
 * 发送手机验证码
 * 先验证手机号
 * 然后发送验证码，同时倒计时
 */
function sendCode() {
  if (countDown.value > 0)
    return
  if (!/^1(3\d|4[5-9]|5[0-35-9]|6[2567]|7[0-8]|8\d|9[0-35-9])\d{8}$/.test(form.mobile)) {
    error.value = ['请输入手机号']
    return
  }
  // todo 发送手机号获取验证码

  // 验证码发送成功后倒计时
  countDown.value = 60
  startCountDown()
}

function startCountDown() {
  setTimeout(() => {
    if (countDown.value > 0) {
      countDown.value = countDown.value - 1
      startCountDown()
    }
  }, 1000)
}

onMounted(() => {
  refreshCode()
})
</script>

<template>
  <img src="../assets/images/login.jpg" width="100%">
  <div class="login-wrapper">
    <div class="login-type">
      <a :class="loginType === 'password' ? 'active' : null" @click="switchType('password')">用户登录</a>
      <span> / </span>
      <a :class="loginType === 'mobile' ? 'active' : null" @click="switchType('mobile')">动态码登录</a>
    </div>
    <div v-if="error.length" class="login-error">
      <p v-for="(item, index) in error" :key="index">
        {{ item }}
      </p>
    </div>
    <block v-if="loginType === 'password'">
      <div class="input-wrapper">
        <input v-model="form.userName" class="input" placeholder="用户名">
      </div>
      <div class="input-wrapper">
        <input v-model="form.password" class="input" placeholder="密码" type="password">
        <p class="forget-password">
          忘记密码？
        </p>
      </div>
      <div class="input-wrapper">
        <input v-model="form.identity" class="input" placeholder="验证码">
        <Identity class="identity" :identify-code="identifyCode" @click="refreshCode" />
      </div>
    </block>
    <block v-if="loginType === 'mobile'">
      <div class="input-wrapper">
        <input v-model="form.mobile" class="input" placeholder="手机号" type="tel">
      </div>
      <div class="input-wrapper">
        <input v-model="form.password" class="input" placeholder="手机验证码">
        <p class="forget-password" @click="sendCode">
          <span v-if="countDown > 0">{{ countDown }}秒后重发</span>
          <span v-else>发送验证码</span>
        </p>
      </div>
      <div class="input-wrapper">
        <input v-model="form.identity" class="input" placeholder="验证码">
        <Identity class="identity" :identify-code="identifyCode" @click="refreshCode" />
      </div>
    </block>
    <p class="sign-up">
      还没有账号？<a>点击注册新账号</a>
    </p>
    <button class="login-btn" @click="login">
      登录
    </button>
  </div>
</template>

<style lang="scss" scoped>
.login-wrapper {
  padding: 20px 40px;
}

.login-type {
  margin-bottom: 30px;
  color: #767676;

  a {
    display: inline-block;
    text-decoration: none;
    &.active {
      font-weight: 600;
      color: #1c1c1c;
    }
  }
}
.input-wrapper {
  display: flex;
  margin-bottom: 25px;
}
.input {
  padding: 10px;
  border: 0;
  border-bottom: 1px solid #767676;
  background: transparent;
  color: #1c1c1c;
}
.identity {
  transform: scale(0.7);
}
.login-error {
  padding: 5px 10px;
  margin-bottom: 20px;
  font-size: 12px;
  color: #c02121;
  border: 1px solid #c02121;

  p {
    margin: 2px 0;
  }
}
.forget-password {
  margin-left: 20px;
  font-size: 12px;
}
.sign-up {
  text-align: center;
  font-size: 12px;

  a {
    color: #c02121;
  }
}
.login-btn {
  width: 160px;
  height: 36px;
  display: block;
  margin: 30px auto;
  color: #fff;
  background: #c02121;
  border-radius: 10px;
  border: 0;
}
</style>
