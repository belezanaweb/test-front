import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import {
  MainContainer,
  Steps,
  RectangleSteps,
  RectangleBackground,
  Products,
  RectangleProducts,
  Total,
  Button,
  Product,
  ImageProduct,
  TextProducts,
  NameProduct,
  PriceProduct,
  TextBag,
  TextPayment,
  TextConfirm,
  TextTotalProducts,
  TextPriceProducts,
  TextShipment,
  TextPriceShipment,
  TextDiscount,
  TextPriceDiscount,
  TextTotal,
  TextPriceTotal,
  TextGoToPayment,
  Container1,
  Container2,
  Container3,
  Container4
} from './styles'

function BagPage() {
  const [cart, setCart] = useState('')
  const history = useHistory()
  const baseUrl = 'http://www.mocky.io/v2/5b15c4923100004a006f3c07'

  const total = cart.subTotal + cart.shippingTotal - cart.discount

  useEffect(() => {
    if (!cart) {
      getCart()
    } else {
      localStorage.setItem('infoCart', JSON.stringify(cart))
    }
  }, [cart])

  const getCart = async () => {
    try {
      const result = await axios.get(baseUrl)
      setCart(result.data)
    } catch (error) {
      alert('Erro ocorrido!')
    }
  }

  const goToPayment = () => {
    history.push('/payment')
  }

  const listProductsCart =
    cart &&
    cart.items.map((item) =>
      item.product.imageObjects.map((image) => (
        <Product>
          <ImageProduct src={image.small} alt="product"></ImageProduct>
          <div>
            <NameProduct>{item.product.name}</NameProduct>
            <PriceProduct>R$ {item.product.priceSpecification.price.toFixed(2)}</PriceProduct>
          </div>
        </Product>
      ))
    )

  return (
    <MainContainer>
      <Steps>
        <RectangleSteps>
          <TextBag>SACOLA</TextBag>
          <TextPayment>PAGAMENTO</TextPayment>
          <TextConfirm>CONFIRMAÇÃO</TextConfirm>
        </RectangleSteps>
      </Steps>

      <RectangleBackground>
        <Products>
          <TextProducts>PRODUTOS</TextProducts>
          <RectangleProducts>{listProductsCart}</RectangleProducts>
          <Total>
            {cart && (
              <div>
                <Container1>
                  <TextTotalProducts>PRODUTOS</TextTotalProducts>
                  <TextPriceProducts>R$ {cart.subTotal.toFixed(2)}</TextPriceProducts>
                </Container1>
                <Container2>
                  <TextShipment>FRETE</TextShipment>
                  <TextPriceShipment>R$ {cart.shippingTotal.toFixed(2)}</TextPriceShipment>
                </Container2>
                <Container3>
                  <TextDiscount>DESCONTO</TextDiscount>
                  <TextPriceDiscount>- R$ {cart.discount.toFixed(2)}</TextPriceDiscount>
                </Container3>
                <Container4>
                  <TextTotal>TOTAL</TextTotal>
                  <TextPriceTotal>R$ {total.toFixed(2)} </TextPriceTotal>
                </Container4>
              </div>
            )}
          </Total>

          <Button onClick={goToPayment}>
            <div>
              <TextGoToPayment>SEGUIR PARA O PAGAMENTO</TextGoToPayment>
            </div>
          </Button>
        </Products>
      </RectangleBackground>
    </MainContainer>
  )
}

export default BagPage
