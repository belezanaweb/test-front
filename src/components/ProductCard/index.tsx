import React, { useMemo } from 'react'

import formatCurrencyBRL from '../../utils/formatCurrencyBRL'

import { Container, Image, Content, Title, Price } from './styles'

interface Props {
  image: string
  title: string
  price?: number
  noPrice?: boolean
}

const ProductCard: React.FC<Props> = ({ image, title, price = 0.0, noPrice = false }) => {
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
        <Title id={'title'}>{formatTitle}</Title>
        {!noPrice && <Price id="price">{formatCurrencyBRL(price)}</Price>}
      </Content>
    </Container>
  )
}

export default ProductCard
