import Vue from 'vue'
import App from './App'
import router from './components/router'// 自动扫描里面的路由配置

Vue.config.productionTip = false


new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})
