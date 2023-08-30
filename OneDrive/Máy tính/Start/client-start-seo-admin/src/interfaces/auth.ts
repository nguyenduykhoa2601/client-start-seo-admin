/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ILoginReq {
  userName: string
  password: string
}

export interface IGetUserInfo {
  token: string
}

export interface UserInfo {
  role: number
  cart: Array<any>
  _id: string
  name: string
  email: string
  createdAt: string
  updatedAt: string
  __v: number
}
