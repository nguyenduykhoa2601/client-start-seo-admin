import { combineReducers } from '@reduxjs/toolkit'
import authReducer from '../slice/sliceAPI/auth'

export const rootReducer = combineReducers({
  auth: authReducer
})
