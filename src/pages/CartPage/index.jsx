import React from 'react'
import Navbar from '../../components/Navbar'
import ProductItem from '../../components/ProductItem'
import ProductList from '../../components/ProductList'
import { useCheckoutContext } from '../../contexts/Checkout'
import CardContainer from '../../components/CardContainer'
import Container from '../../components/Container'
import Button from '../../components/Button'

const CartPage = () => {
  const { isLoading, prices, products } = useCheckoutContext()

  const cartPageText = {
    containerTitle: 'Produtos',
    buttonText: 'Seguir para o pagamento'
  }

  return (
    <>
      <Navbar step={0} />
      <Container>
        {isLoading}
        {products.length > 0 && (
          <>
            <CardContainer title={cartPageText.containerTitle}>
              {products.map((currentProduct, i) => (
                <ProductItem key={i} product={currentProduct.product} />
              ))}
            </CardContainer>
            <div>
              <ProductList prices={prices} />
              <Button text={cartPageText.buttonText} step="1" path="/payment" />
            </div>
          </>
        )}
      </Container>
    </>
  )
}

export default CartPage
