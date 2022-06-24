import './App.css';
import { formatDate, formatPrice } from './helpers';
import { useFetchHistory } from './hooks';

function App() {

  const { data, isLoading, isError, refetch} = useFetchHistory()

  return <div className='price-history__container'>
    {isLoading ?  <div>Loading...</div> : isError ? <div className='price-history__alert'><span>Something wrong happened.</span><button onClick={()=>refetch()}>Click here to refresh</button></div> : <table>
      <tr>
        <th>Date</th>
        <th>Day of the week</th>
        <th>1 JOE to CAD</th>
        <th>24hr Changes</th>
        <th>Change %</th>
      </tr>
      {data.map(({ price, date, changeInPercentage, changeInAmount }) => <tr>
        <td>{formatDate(date, { year: 'numeric', month: 'long', day: '2-digit' })}</td>
        <td>{formatDate(date, { weekday: 'long' })}</td>
        <td>{formatPrice(price)}</td>
        <td className={`price-history__row${changeInAmount === 0 ? '' : changeInAmount > 0 ? '--up' : '--down'}`}><span>{formatPrice(changeInAmount)}</span></td>
        <td className={`price-history__row${changeInAmount === 0 ? '' : changeInAmount > 0 ? '--up' : '--down'}`}><span>{`${changeInPercentage.toFixed(2)}%`}</span></td>
      </tr>)}
    </table> }
  </div>
}

export default App;
