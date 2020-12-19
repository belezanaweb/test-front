import React from 'react'

export const formatPrice = (value) => {
  const wapperRef = React.createRef()

  if (isNaN(value)) return <span ref={wapperRef}>{value}</span>

  return (
    <span ref={wapperRef}>
      {value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
    </span>
  )
}

export const formatCardExpiry = (val) => {
  let month = val.substring(0, 2)
  month =
    month.length === 1 && Number(month) > 1
      ? '0' + month
      : Number(month) > 12
      ? (month = '12')
      : month

  let year = val.substring(2, 6)
  if (year.length === 1 && Number(year[0]) !== 2) year = '2'
  if (year.length === 2 && Number(year[0]) !== '20') year = '20'
  if (year.length === 4) {
    const thisYear = new Date().getFullYear()
    year = Number(year) < thisYear ? thisYear.toString() : year
  }

  return month + (year.length ? '/' + year : '')
}
