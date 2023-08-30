/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from '@reduxjs/toolkit'
import { doGetUserInfo, doPostLogin } from '../../../redux/actions/auth'
import { UserInfo } from '../../../interfaces/auth'

const initialState = {
  isLoading: false,
  userInfo: null as unknown as UserInfo,
  error: {} as any
}

const slice = createSlice({
  name: 'auth@',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doPostLogin.pending, (state) => {
      state.isLoading = true
    })

    builder.addCase(doPostLogin.fulfilled, (state, action) => {
      state.userInfo = action.payload
      state.isLoading = false
    })

    builder.addCase(doPostLogin.rejected, (state, action) => {
      state.error = action.payload
      state.isLoading = false
    })

    builder.addCase(doGetUserInfo.pending, (state) => {
      state.isLoading = true
    })

    builder.addCase(doGetUserInfo.fulfilled, (state, action) => {
      state.userInfo = action.payload
      state.isLoading = false
    })

    builder.addCase(doGetUserInfo.rejected, (state, action) => {
      state.error = action.payload
      state.isLoading = false
    })
  }
})

const { reducer: authReducer } = slice

export default authReducer
