import request from "./request";
import mockrequest from './mockrequest'
//获取导航数据
export const reqCategoryList = () => {
  return request({
    url:'/product/getBaseCategoryList',
    method:'get'
  })
}
//获取搜索数据
export const reqSearchInfo = (params) => {
  return request({
    url:'/list',
    method:'post',
    data:params
  })
}

export const reqbannerList = () => mockrequest.get('/banner')
export const reqfloorList = () => mockrequest.get('/floor')