import React from 'react'

import { bagData } from 'constants/data/containers/cart'

import { Wrapper } from 'components/Wrapper'
import { ContentWrapper } from 'components/ContentWrapper'
import { Loader } from 'components/Loader'
import { CardProduct } from 'components/ProductItem'
import { CardValues } from 'components/CardValues'
import { Button } from 'components/Buttons'
import { Header } from 'components/Header'
import { useProductsContext } from 'contexts/checkout'

const Cart = () => {
  const { isLoading, prices, products } = useProductsContext()

  return (
    <React.Fragment>
      <Header step={0} />
      <Wrapper>
        {isLoading && <Loader />}
        {products.length > 0 && (
          <React.Fragment>
            <ContentWrapper title={bagData.title}>
              {products.map((el, index) => (
                <CardProduct key={index} product={el.product} />
              ))}
            </ContentWrapper>

            <div>
              <CardValues prices={prices} />
              <Button text={bagData.buttonText} step="1" path="payment" />
            </div>
          </React.Fragment>
        )}
      </Wrapper>
    </React.Fragment>
  )
}

export default Cart
