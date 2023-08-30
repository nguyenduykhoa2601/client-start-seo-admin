/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import dataQualityAPI from '../api/DataQuality'

const useDataQuality = () => {
  const [error, setError] = useState<any>(null)
  const [logsVerification, setLogsVerification] = useState<Array<any>>([])
  const [logsPSI, setLogsPSI] = useState<Array<any>>([])
  const [scoresPSI, setScoresPSI] = useState<Array<any>>([])
  const [defaultValueScore, setDefaultValueScore] = useState('')

  const [isLoadingPSIScore, setIsLoadingPSIScore] = useState(false)
  const [isLoadingLogsVerfication, setIsLoadingLogsVerification] = useState(false)
  const [isLoadingLogsPSI, setIsLoadingPSI] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const [data, setData] = useState<any>(null)

  const getLogsVerification = async () => {
    setIsLoadingLogsVerification(true)

    try {
      const res = await dataQualityAPI.getLogsVerification()
      setIsLoadingLogsVerification(false)

      if (res.data) {
        setLogsVerification(
          res.data.map((item: string) => {
            return {
              value: item,
              label: item.replaceAll('/data/jobs/rnd/production', '')
            }
          })
        )
      }
    } catch (err: any) {
      setError(err)
      setIsLoadingLogsVerification(false)
    }
  }

  const getLogsPSI = async () => {
    setIsLoadingPSI(true)

    try {
      const res = await dataQualityAPI.getLogsPSI()

      if (res.data) {
        setLogsPSI(
          res.data.map((item: string) => {
            return {
              value: item,
              label: item
            }
          })
        )
      }
      setIsLoadingPSI(false)
    } catch (err: any) {
      setError(err)
    }
  }

  const getPSIScoreFeature = async (target: string, version: string) => {
    setIsLoadingPSIScore(true)
    try {
      const res = await dataQualityAPI.getPSIScoreFeature(target, version)

      if (res.data) {
        setScoresPSI(res.data.options)

        setDefaultValueScore(res.data.defaultValue)
      }

      setIsLoadingPSIScore(false)
    } catch (err: any) {
      setError(err)
      setIsLoadingPSIScore(false)
    }
  }

  const getDataLogsVerification = async (log: string, startDate: string, endDate: string) => {
    setIsLoading(true)
    try {
      const res = await dataQualityAPI.getDataLogVerification(log, startDate, endDate)

      if (res.code === 0) {
        setData(res.data)
      }

      setIsLoading(false)
    } catch (err: any) {
      setError(err)
      setIsLoading(false)
    }
  }

  const getDataPSI = async (
    project: string,
    startDate: string,
    endDate: string,
    target: string,
    version: string,
    scoreFeature: string
  ) => {
    setIsLoading(true)

    try {
      const res = await dataQualityAPI.getDataPSI(project, startDate, endDate, target, version, scoreFeature)
      if (res.code === 0) {
        setData(res.data)
      }

      setIsLoading(false)
    } catch (error: any) {
      setError(error)
      setIsLoading(false)
    }
  }

  return {
    getLogsVerification,
    getLogsPSI,
    getPSIScoreFeature,
    getDataLogsVerification,
    getDataPSI,
    isLoading,
    data,
    error,
    isLoadingPSIScore,
    isLoadingLogsPSI,
    isLoadingLogsVerfication,
    scoresPSI,
    defaultValueScore,
    logsVerification,
    logsPSI
  }
}

export default useDataQuality
