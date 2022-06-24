import { useState, useEffect } from 'react'
import { getList } from './api'
export const useFetchHistory = () => {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getList()
        setData(data)
      } catch (e) {
        setIsError(true)
      }
      setIsLoading(false)
    }

    if (isLoading && !isError) {
      fetchData()
    }
  }, [isLoading, isError])

  const refetch = () => {
    setIsLoading(true)
    setIsError(false)
  }
  return { data, isLoading, isError, refetch }
}
