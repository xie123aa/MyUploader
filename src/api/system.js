/**
 * 系统相关模块
 */
import request from '@/util/request'

/**
 * 登录接口
 */
export const login = params => {
  return request({
    method: 'post',
	  url:'/api/wishbuild-foundation/oauth/token',
	  headers: {
		  'Content-Type':
			  'application/json'
	  },
	  params
  })
}

