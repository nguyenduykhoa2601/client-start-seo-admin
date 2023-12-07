import { createAsyncThunk } from '@reduxjs/toolkit'
import authAPI from '../../api/auth'
import { IGetUserInfo, ILoginReq } from '../../interfaces/auth'
import { setCookies } from '../../helpers/cookies'

export const doPostLogin = createAsyncThunk('auth@post/login', async (params: ILoginReq) => {
  const res = await authAPI.login(params)

  if (res) {
    const info = await authAPI.getUserInfo({
      token: res.accesstoken
    })

    setCookies('accessTokenStart', res.accesstoken, 60 * 60 * 24 * 360)

    return info
  }

  return null
})

export const doGetUserInfo = createAsyncThunk('auth@get/userInfo', async (params: IGetUserInfo) => {
  const res = await authAPI.getUserInfo(params)
  return res
})
