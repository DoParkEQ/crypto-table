import './App.css'
import { useFetchHistory } from './hooks'
import { DEFAULT_COIN, DEFAULT_CURRENCY } from './constant'
import Table from './Table'

function App() {
  const { data, isLoading, isError, refetch } = useFetchHistory(
    DEFAULT_COIN,
    DEFAULT_CURRENCY
  )

  return (
    <div className="price-history__container">
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div className="price-history__alert">
          <span>Something wrong happened.</span>
          <button onClick={() => refetch()}>Click here to refresh</button>
        </div>
      ) : (
        <Table data={data} currency={DEFAULT_CURRENCY} coin={DEFAULT_COIN} />
      )}
    </div>
  )
}

export default App
