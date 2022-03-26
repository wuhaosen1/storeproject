import {reqCategoryList} from '@/api'
export const home = {
  namespaced:true,
  mutations : {
    CATEGORYLIST(state,result){
   state.categorylist = result
   console.log(state.categorylist);
  }
},
  state : {
  categorylist:[]
},
  actions : {
  async categoryList({commit}){
    let result = await reqCategoryList()
    if(result.code=200){commit('CATEGORYLIST',result.data)}
    
  }
}}


