import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { getList, getPrice } from './api';

const URL = 'https://api.coingecko.com/api/v3/coins/joe/history?date=30-12-2017'

const formatDate = (date, option = {}) => date.toLocaleDateString('en-GB', option)

const formatPrice = (price) => price.toLocaleString('en-GB', { style: 'currency', currency: 'CAD'})

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
  console.log(data)
  return  <table>
  <tr>
    <th>Date</th>
    <th>Day of the week</th>
    <th>1 JOE to CAD</th>
    <th>24hr Changes</th>
    <th>Change %</th>
  </tr>
    {data.map(({ price, date, changeInPercentage, changeInAmount }) => <tr>
      <td>{formatDate(date, { year: 'numeric', month: 'long', day: '2-digit' })}</td>
      <td>{formatDate(date, {weekday: 'long'})}</td>
      <td>{formatPrice(price)}</td>
      <td>{formatPrice(changeInAmount)}</td>
      <td>{`${changeInPercentage.toFixed(1)}%`}</td>
    </tr>)}
</table>
}

export default App;
