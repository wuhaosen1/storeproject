import {reqCategoryList,reqbannerList,reqfloorList} from '@/api'
export const home = {
  namespaced:true,
  mutations : {
    CATEGORYLIST(state,result){
      state.categorylist = result
    },
    BANNERLIST(state,result){
      state.bannerlist = result
      // console.log(result)
    },
    FLOORLIST(state,result){
      state.floorlist = result
      // console.log(result)
    }
},
  state : {
  categorylist:[],
  bannerlist:[],
  floorlist:[]
},
  actions : {
  async categoryList({commit}){
    let result = await reqCategoryList()
    if(result.code=200){commit('CATEGORYLIST',result.data)}
    
  },
  async getBannerList({commit}){
    let result = await reqbannerList()
    if(result.code=200){commit('BANNERLIST',result.data)}
  },
  async getFloorList({commit}){
    let result = await reqfloorList()
    if(result.code=200){commit('FLOORLIST',result.data)}
  }
}}



