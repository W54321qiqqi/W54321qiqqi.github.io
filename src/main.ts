import { createApp, App } from 'vue'
import appRoot from './App.vue'
import { registerIcons } from '/@/utils/common'
import router from '/@/router'
import '/@/styles/index.scss'
import { setupRouterGuard } from '/@/router/guard'
import { setupPinia } from '/@/store'
import { setupLoadingDirective, setupPermissionDirective } from './directive'

function start() {
  const app: App = createApp(appRoot)
  registerIcons(app) // icons
  // 注册pinia
  setupPinia(app)
  // 注册路由守卫
  setupRouterGuard(router)
  setupDirective(app)
  app.use(router)
  app.mount('#app')
}
const setupDirective = (app: App) => {
  // 注册loading自定义指令
  setupLoadingDirective(app)
  // 注册permission自定义指令
  setupPermissionDirective(app)
}
start()
