/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from '@reduxjs/toolkit'
import { doGetUserInfo, doPostLogin } from '../../../redux/actions/auth'
import { UserInfo } from '../../../interfaces/auth'

const initialState = {
  isLoading: false,
  products: [] as Array<any>,
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
      state.products = action.payload
      state.isLoading = false
    })

    builder.addCase(doPostLogin.rejected, (state, action) => {
      state.error = action.payload
      state.isLoading = false
    })
  }
})

const { reducer: productReducer } = slice

export default productReducer
