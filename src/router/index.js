import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import MyHome from '@/pages/Home'
import MyLogin from '@/pages/Login'
import MyRegister from '@/pages/Register'
import MySearch from '@/pages/Search'


export default new VueRouter({
  routes:[
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/home',
      component:MyHome,
      meta:{show:true}
    },
    {
      path:'/login',
      component:MyLogin,
      meta:{show:false}
    },
    {
      path:'/register',
      component:MyRegister,
      meta:{show:false}
    },
    {
      path:'/search/:keyword',
      name:'search',
      component:MySearch,
      meta:{show:true},
      props:true
    }
  ]
})