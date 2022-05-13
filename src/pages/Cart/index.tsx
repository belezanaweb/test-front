import React, { useState } from 'react'
import InfoWrapper from '../../components/InfoWrapper'
import Menu from '../../components/Menu'
import * as S from './styles'
import { useCartDetails } from '../../hooks/useCartDetails'
import Product from '../../components/Product'
import Subtotal from '../../components/Subtotal'
import Button from '../../components/Button'
import Loader from '../../components/Loader'
import { Redirect } from 'react-router-dom'
import Dropdown from '../../components/Dropdown'
import MediaMatch from '../../components/MediaMatch'

export function Cart() {
  const {
    discount,
    shippingTotal,
    subTotal,
    total,
    items,
    mounted
  } = useCartDetails()
  const [goToPayment, setgoToPayment] = useState(false)
  return (
    <>
      {!mounted ? (
        <Loader />
      ) : (
        <>
          <S.Wrapper>
            <S.MenuWrapper>
              <Menu activeLink="/" />
            </S.MenuWrapper>
            <S.CartWrapper>
              <InfoWrapper title="PRODUTOS">
                <S.Product>
                  {items?.map((item) => (
                    <Product
                      key={item.product.sku}
                      name={item.product.name}
                      imageUrl={item.product.imageObjects[0].small}
                      price={item.product.priceSpecification.price}
                    />
                  ))}
                </S.Product>
              </InfoWrapper>
              <S.PaymentInfo>
                <MediaMatch greaterThan="medium">
                  <S.AcessibilityWrapper>
                    <Dropdown />
                  </S.AcessibilityWrapper>
                </MediaMatch>
                <Subtotal
                  shippingTotal={shippingTotal}
                  subTotal={subTotal}
                  total={total}
                  discount={discount}
                />
                <Button type={'button'} onClick={() => setgoToPayment(true)}>
                  SEGUIR PARA O PAGAMENTO
                </Button>
              </S.PaymentInfo>
            </S.CartWrapper>
          </S.Wrapper>
          <MediaMatch lessThan="medium">
            <S.AcessibilityWrapper>
              <Dropdown />
            </S.AcessibilityWrapper>
          </MediaMatch>
          {goToPayment && <Redirect to="/payment" />}
        </>
      )}
    </>
  )
}
