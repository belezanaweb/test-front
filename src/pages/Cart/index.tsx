import React from 'react'
import InfoWrapper from '../../components/InfoWrapper'
import Menu from '../../components/Menu'
import * as S from './styles'
import { useCartDetails } from '../../hooks/useCartDetails'
import Product from '../../components/Product'
import Subtotal from '../../components/Subtotal'
import Button from '../../components/Button'
import Loader from '../../components/Loader'

export function Cart() {
  const {
    discount,
    shippingTotal,
    subTotal,
    total,
    items,
    mounted
  } = useCartDetails()
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
                <Subtotal
                  shippingTotal={shippingTotal}
                  subTotal={subTotal}
                  total={total}
                  discount={discount}
                />
                <Button as={'a'} href={'/payment'}>
                  SEGUIR PARA O PAGAMENTO
                </Button>
              </S.PaymentInfo>
            </S.CartWrapper>
          </S.Wrapper>
        </>
      )}
    </>
  )
}
