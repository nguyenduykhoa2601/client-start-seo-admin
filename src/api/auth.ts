import { IGetUserInfo, ILoginReq } from '../interfaces/auth'
import { axiosClient } from './axiosClient'

const authAPI = {
  login: (params: ILoginReq) => {
    const url = 'user/login'

    return axiosClient.post(url, {
      email: params.userName,
      password: params.password
    })
  },
  getUserInfo: (params: IGetUserInfo) => {
    const url = 'user/infor'
    return axiosClient.patch(url, params.token)
  },

  getRefreshToken: () => {
    const url = '/user/refresh_token'
    return axiosClient.get(url)
  }
}

export default authAPI
