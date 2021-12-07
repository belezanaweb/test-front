import React, { useEffect } from 'react'
import { Button, Typography, Container, DivHelper, CartProducts, CartInfo } from 'components'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { getCartDetails } from 'services/CartService'
import Card from 'components/Card'

const { Paragraph } = Typography

export default function Confirmation() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { products, info, loading, card } = useSelector((state) => state.checkout)

  useEffect(() => {
    dispatch(getCartDetails())
  }, [dispatch])

  return (
    <Container>
      <DivHelper pl={10} pb={5}>
        <Paragraph color="secondary" uppercase bold>
          Pagamento
        </Paragraph>
      </DivHelper>
      <Card>
        <Paragraph>{card.number}</Paragraph>
        <Paragraph>{card.name}</Paragraph>
        <Paragraph>{card.date}</Paragraph>
      </Card>
      <DivHelper pl={10} pb={5}>
        <Paragraph color="secondary" uppercase bold>
          Produtos
        </Paragraph>
      </DivHelper>
      <CartProducts data={products} loading={loading} />
      <CartInfo data={info} loading={loading} />
      <Button onClick={() => navigate('payment')} block>
        Seguir para o pagamento
      </Button>
    </Container>
  )
}
