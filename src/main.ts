import 'virtual:eruda'
import 'normalize.css'
import './styles/index.scss'

import ElementPlus from 'element-plus'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'element-plus/dist/index.css'
import 'swiper/css'
import 'vant/lib/index.css'
import { Tabbar, TabbarItem } from 'vant'
import App from './App.vue'
import { setupModules } from './modules'
import { router, setupRouter } from './router'
import { setupStore } from './stores'

async function bootstrap() {
  const app = createApp(App)

  setupStore(app)
  setupRouter(app)
  setupModules(app)
  app.use(ElementPlus)
  app.use(Tabbar)
  app.use(TabbarItem)
  app.component('swiper', Swiper)
  app.component('swiper-slide', SwiperSlide)
  await router.isReady()
  app.mount('#app')
}

bootstrap().catch((e) => {
  console.error(e)
})
