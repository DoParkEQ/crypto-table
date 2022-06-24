export const formatDate = (date, option = {}) => date.toLocaleDateString('en-GB', option)

export const formatPrice = (price) => price.toLocaleString('en-GB', { style: 'currency', currency: 'CAD'})
