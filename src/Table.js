import React from 'react'
import { formatDate, formatPrice } from './helpers'

const Table = ({ data, currency, coin }) => {
  return (
    <table>
      <tr>
        <th>Date</th>
        <th>Day of the week</th>
        <th>{`1 ${coin.toUpperCase()} to ${currency.toUpperCase()}`}</th>
        <th>24hr Changes</th>
        <th>Change %</th>
      </tr>
      {data.map(({ price, date, changeInPercentage, changeInAmount }) => (
        <tr>
          <td>
            {formatDate(date, {
              year: 'numeric',
              month: 'long',
              day: '2-digit',
            })}
          </td>
          <td>{formatDate(date, { weekday: 'long' })}</td>
          <td>{formatPrice(price)}</td>
          <td
            className={`price-history__row${
              changeInAmount === 0 ? '' : changeInAmount > 0 ? '--up' : '--down'
            }`}
          >
            <span>{formatPrice(changeInAmount)}</span>
          </td>
          <td
            className={`price-history__row${
              changeInAmount === 0 ? '' : changeInAmount > 0 ? '--up' : '--down'
            }`}
          >
            <span>{`${changeInPercentage.toFixed(2)}%`}</span>
          </td>
        </tr>
      ))}
    </table>
  )
}

export default Table
