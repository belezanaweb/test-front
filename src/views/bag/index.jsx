import React, { useEffect } from 'react'
import { Button, Typography, Container, DivHelper, CartProducts, CartInfo } from 'components'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { getCartDetails } from 'services/CartService'

const { Paragraph } = Typography

export default function Bag() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { products, info, loading } = useSelector((state) => state.checkout)

  useEffect(() => {
    dispatch(getCartDetails())
  }, [dispatch])

  return (
    <Container>
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
