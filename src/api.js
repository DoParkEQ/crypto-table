export const getList = async (id = 'joe', days = 7, currency = 'cad') => {

  const promises = []
  const dates = []
  const currentDate = new Date()

  for (let i = 0; i <= days; i++) {
    const historicalDate = new Date(currentDate
      .setDate(currentDate.getDate() - 1))
    const formattedDate = historicalDate
      .toLocaleDateString('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit' })
      .replaceAll('/', '-')
    dates.push(historicalDate)
    promises.push(fetch(`https://api.coingecko.com/api/v3/coins/${id}/history?date=${formattedDate}`))
  }

  const res = await Promise.all(promises)
  const data = await Promise.all(res.map(el => el.json()))

  return data.reduce((acc, val, idx, arr) => {
    if (idx < arr.length - 1) {
      const { market_data: { current_price: currentPrice } } = val
      const { market_data: { current_price: prevPrice } } = arr[idx + 1]
      acc.push({
        price: currentPrice[currency],
        date: dates[idx],
        changeInPercentage: currentPrice[currency] / prevPrice[currency],
        changeInAmount: currentPrice[currency] - prevPrice[currency],
      })
    }
    return acc
  }, [])
}
