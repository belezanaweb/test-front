import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useCreditCard } from '../../hooks/creditCard'
import { useCart } from '../../hooks/cart'

import NavBar from '../../components/NavBar'
import Card from '../../components/Card'
import ProductsList from '../../components/ProductsList'
import Total from '../../components/Total'

import Success from '../../assets/success.png'

import { Root, Container, Content, Warper, SuccessWarper, PaymentContainer } from './styles'

const Confirmation: React.FC = () => {
  const navigate = useNavigate()
  const { formData, formIsValid } = useCreditCard()
  const { items, totalData } = useCart()

  useEffect(() => {
    if(!formIsValid) navigate('/pagamento')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Root>
      <NavBar actualStep={'confirmation'} />
      <Container>
        <Content>
          <SuccessWarper>
            <img src={Success} alt={'success'} />
            <p>compra efetuada com sucesso</p>
          </SuccessWarper>
          <Warper>
            <h1>pagamento</h1>
            <PaymentContainer>
              <Card>
                <p>{`**** . **** . **** . ${formData.number.substring(
                  formData.number.length - 4
                )}`}</p>
                <p>{formData.name}</p>
                <p>{formData.expiry}</p>
              </Card>
            </PaymentContainer>
            <h1>produtos</h1>
            <ProductsList items={items} noPrice />
            <Total
              subTotal={totalData.subTotal}
              shipping={totalData.shippingTotal}
              discount={totalData.discount}
              total={totalData.total}
            />
          </Warper>
        </Content>
      </Container>
    </Root>
  )
}

export default Confirmation
