import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { getList, getPrice } from './api';

const URL = 'https://api.coingecko.com/api/v3/coins/joe/history?date=30-12-2017'

function App() {

  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getList()
        setData(data)
        isLoading(false)
      }
      catch (e) {
        setIsError(true)
      }

    }
    fetchData()
  }, [])

  return <div></div>
}

export default App;
