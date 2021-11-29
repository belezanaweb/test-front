/* eslint-disable */
import React, { useContext, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'
import { HeaderNav } from '../../components/HeaderNav'
import { Heading } from '../../components/Heading'
import { Product } from '../../components/Product'
import { TotalPriceModule } from '../../components/TotalPriceModule'
import { CheckoutContext } from '../../contexts/CheckoutContext'

import * as S from './styles'

export const Confirmation: React.FC = () => {
  const { product, user } = useContext(CheckoutContext)

  const totalPrice = useMemo(() => {
    if (product) {
      return product?.shippingTotal + product?.subTotal - product?.discount
    }
  }, [product])

  console.log(user)

  return (
    <S.Wrapper>
      <HeaderNav page="confirmation" />
      <S.Content>
        <Heading title="produtos" />
        <S.Products>
          {product &&
            product.items.map(item => (
              <Product
                key={item.product.sku}
                image={item.product.imageObjects[0].small}
                description={item.product.name}
                price={item.product.priceSpecification.originalPrice}
              />
            ))}
        </S.Products>
        <S.Price>
          {product && totalPrice && (
            <TotalPriceModule
              discount={product?.discount}
              freightage={product?.shippingTotal}
              products={product?.subTotal}
              total={totalPrice}
            />
          )}
        </S.Price>
        <S.Button>
          <Link to="/payment">
            <Button text="finalizar pedido" />
          </Link>
        </S.Button>
      </S.Content>
    </S.Wrapper>
  )
}
