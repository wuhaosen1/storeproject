import {reqSearchInfo} from '@/api'
export const search = {
  namespaced:true,
  state:{
    searchList : {}
  },
  mutations:{
    SEARCHLIST(state,data){
      state.searchList = data
    }
  },
  actions:{
    async reqSearchInfo({commit},params){
      let result = await reqSearchInfo(params)
      commit('SEARCHLIST',result.data)
    }
  },
  getters:{
    attrsList(state){
      return state.searchList.attrsList || []
    },
    goodsList(state){
      return state.searchList.goodsList || []
    },
    trademarkList(state){
      return state.searchList.trademarkList || []
    }
    }
  }
  
