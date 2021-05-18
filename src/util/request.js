/**
 * 基于 axios 封装的请求模块
 */
import axios from 'axios'

//创建axios实例
const request = axios.create({
    //客户端和后台通信验证，接口验签，gateway模块的springsecutity应该做了验证
    // headers: {
    //     'Authorization':'Basic c2FiZXI6c2FiZXJfc2VjcmV0'
    // }
})
// 请求拦截器
request.interceptors.request.use(
  // 任何所有请求会经过这里
  // config 是当前请求相关的配置信息对象
  // config 是可以修改的
  // function (config) {
  //     if (sessionStorage.getItem('token') !== null) {
  //         config.headers['Wishbuild-Auth'] = sessionStorage.getItem('token')
  //     }
  //   // 当这里 return config 之后请求在会真正的发出去
  //   return config
  // },
  // 请求失败，会经过这里
  function (error) {
    return Promise.reject(error)
  }
)

// 导出请求方法
export default request

//客户端和后台通信验证，接口验签，gateway模块的springsecutity应该做了验证
// export function getAuthorization () {
//     return `Basic ${Base64.encode(`saber:${website.clientSecret}`)}`
// }
