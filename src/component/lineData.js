import React, { useEffect, useState } from 'react'
import * as S from './lineData.styles'

const LineData = ({ name, price, type }) => {
  const [typePrice, setTypePrice] = useState(0)

  useEffect(() => {
    const styleNumber = () => {
      const value = price.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        style: 'currency',
        currency: 'BRL'
      })
      const negative = '- '
      if (type === 'discount') {
        setTypePrice(negative + value)
        return
      }
      setTypePrice(value)
    }

    styleNumber()
  }, [price, type])

  return (
    <S.Line lineStyle={type}>
      {name}
      <S.Price>{typePrice}</S.Price>
    </S.Line>
  )
}

export default LineData
