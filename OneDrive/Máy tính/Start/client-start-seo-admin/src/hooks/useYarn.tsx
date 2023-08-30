/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import yarnAPI from '../api/Yarn'

const useYarn = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<any>(null)
  const [data, setData] = useState<any>(null)
  const [dataRnd, setDataRnd] = useState<any>(null)
  const [generalInfo, setGeneralInfo] = useState<any>(null)
  const [dataServer, setDataServer] = useState<any>([])
  const [optionsYarn, setOptionsYarn] = useState<Array<any>>([])
  const [optionsRnd, setOptionsRnd] = useState<Array<any>>([])
  const [optionsServer, setOptionsServer] = useState<Array<any>>([])

  const getGeneralInfo = async () => {
    setIsLoading(true)

    try {
      const res = await yarnAPI.getGeneralInfo()
      if (res.data) {
        setGeneralInfo(res.data)
      }

      setIsLoading(false)
    } catch (error) {
      setError(error)
      setIsLoading(false)
    }
  }

  const getDataRnd = async (name: string, startDate: string, endDate: string) => {
    setIsLoading(true)

    try {
      const res = await yarnAPI.getRndData(name, startDate, endDate)

      if (res.data) {
        setDataRnd(res.data)
      }
      setIsLoading(false)
    } catch (error) {
      setError(error)
      setIsLoading(false)
    }
  }

  const getDataServer = async (name: string, startDate: string, endDate: string) => {
    setIsLoading(true)

    try {
      const res = await yarnAPI.getServerData(name, startDate, endDate)

      if (res.data) {
        setDataServer(res.data)
      }
      setIsLoading(false)
    } catch (error) {
      setError(error)
      setIsLoading(false)
    }
  }

  const getDataYarn = async (name: string, startDate: string, endDate: string) => {
    setIsLoading(true)

    try {
      const res = await yarnAPI.getYarnData(name, startDate, endDate)

      if (res.data) {
        setData(res.data)
      }
      setIsLoading(false)
    } catch (error) {
      setError(error)
      setIsLoading(false)
    }
  }

  const getOptionsYarn = async () => {
    setIsLoading(true)

    try {
      const res = await yarnAPI.getYarnTab()

      if (res.data) {
        setOptionsYarn(
          res.data.map((item: string) => {
            return {
              value: item,
              label: item
            }
          })
        )
      }
      setIsLoading(false)
    } catch (error) {
      setError(error)
      setIsLoading(false)
    }
  }

  const getOptionsRnd = async () => {
    setIsLoading(true)

    try {
      const res = await yarnAPI.getRndTab()

      if (res.data) {
        setOptionsRnd(
          res.data.map((item: string) => {
            return {
              value: item,
              label: item
            }
          })
        )
      }
      setIsLoading(false)
    } catch (error) {
      setError(error)
      setIsLoading(false)
    }
  }

  const getOptionsServer = async () => {
    setIsLoading(true)

    try {
      const res = await yarnAPI.getServerTab()

      if (res.data) {
        setOptionsServer(
          res.data.map((item: string) => {
            return {
              value: item,
              label: item
            }
          })
        )
      }
      setIsLoading(false)
    } catch (error) {
      setError(error)
      setIsLoading(false)
    }
  }

  return {
    getDataRnd,
    getDataYarn,
    getDataServer,
    getOptionsYarn,
    getOptionsRnd,
    getOptionsServer,
    getGeneralInfo,
    generalInfo,
    isLoading,
    error,
    data,
    dataRnd,
    dataServer,
    optionsRnd,
    optionsServer,
    optionsYarn
  }
}

export default useYarn
