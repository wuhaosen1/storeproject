import axios from "axios";
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
const request = axios.create({
  //基本配置
  baseURL:'/api',
  timeout:5000,
  
})
//请求拦截器喝相应拦截器的封装
request.interceptors.request.use((config) => {
  nprogress.start()
  return config
})

request.interceptors.response.use((res) => {
  nprogress.done()
  return res.data
},(error) => {
  return Promise.reject(new Error(error))
})
export default request