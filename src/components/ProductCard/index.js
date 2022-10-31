import React, { useMemo } from 'react'

import formatCurrencyBRL from '../../utils/formatCurrencyBRL'

import { Container, Image, Content, Title, Price } from './styles'

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
      <Image src={image} alt={formatTitle} noPrice={!price} />
      <Content>
        <Title id="title">{formatTitle}</Title>
        {price && <Price id="price">{formatCurrencyBRL(parseFloat(price))}</Price>}
      </Content>
    </Container>
  )
}

export default ProductCard
