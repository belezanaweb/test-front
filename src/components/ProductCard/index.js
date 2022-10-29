import React, { useMemo } from 'react'

import formatCurrencyBRL from '../../utils/formatCurrencyBRL'

import { Container } from './styles'

const ProductCard = ({ image, title, price }) => {
  const formatTitle = useMemo(() => {
    const threshold = 70
    let formattedTitle = title
    if (title && title.length > threshold) {
      formattedTitle = title.split(' - ')[0]
    }
    return formattedTitle
  }, [title])

  return (
    <Container>
      <img src={image} alt={formatTitle} />
      <p id="title">{formatTitle}</p>
      <p id="price">{formatCurrencyBRL(price)}</p>
    </Container>
  )
}

export default ProductCard
