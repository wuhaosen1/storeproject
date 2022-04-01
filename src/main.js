import Vue from 'vue'
import App from './App.vue'
//注册全局组件
import TypeNav from '@/components/TypeNav'
import MyBanner from '@/components/Banner'
import router from '@/router'
import store from '@/store'
// import {reqCategoryList} from '@/api'
//引入mock获取数据
import '@/mock/mockServe'
//引入swiper样式
import 'swiper/css/swiper.css'
// reqCategoryList()
Vue.config.productionTip = false
//全局组件传两个参数第一个是组件名，第二个是组件
Vue.component(TypeNav.name,TypeNav)
Vue.component(MyBanner.name,MyBanner)
new Vue({
  render: h => h(App),
  router,
  beforeCreate(){
    Vue.prototype.$bus = this
  },
  store
}).$mount('#app')
