import Vue from 'vue'
import App from './App.vue'
import TypeNav from '@/pages/Home/TypeNav'
import router from '@/router'
import store from '@/store'
import {reqCategoryList} from '@/api'
reqCategoryList()
Vue.config.productionTip = false
//全局组件传两个参数第一个是组件名，第二个是组件
Vue.component(TypeNav.name,TypeNav)
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
