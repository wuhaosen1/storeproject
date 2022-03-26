import Vue from "vue";
import Vuex, { Store } from 'vuex'
import {login} from './login'
import {search} from './search'
import {home} from './home'
Vue.use(Vuex)

export default new Store({
  modules:{
    login,
    search,
    home
  }
})