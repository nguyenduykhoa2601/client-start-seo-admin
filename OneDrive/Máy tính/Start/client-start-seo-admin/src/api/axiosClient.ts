/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'

const baseUrl = process.env.REACT_APP_ENDPOINT_API

export const axiosClient = {
  get: async (url: string) => {
    try {
      const res = await axios.get(`${baseUrl}/${url}`)
      return res.data
    } catch (error) {
      return error
    }
  },
  post: async (url: string, body?: any) => {
    try {
      const res = await axios.post(`${baseUrl}/${url}`, body, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      return res.data
    } catch (error) {
      return error
    }
  },
  patch: async (url: string, token: string) => {
    try {
      const res = await axios.get(`${baseUrl}/${url}`, {
        headers: {
          Authorization: token
        }
      })
      return res.data
    } catch (error) {
      return error
    }
  }
}
