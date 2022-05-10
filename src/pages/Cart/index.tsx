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
      {mounted || !mounted ? (
        <Loader />
      ) : (
        <>
          <S.MenuWrapper>
            <Menu />
          </S.MenuWrapper>
          <S.CartWrapper>
            <InfoWrapper title="PRODUTOS">
              {items?.map((item) => (
                <Product
                  key={item.product.sku}
                  name={item.product.name}
                  imageUrl={item.product.imageObjects[0].small}
                  price={item.product.priceSpecification.price}
                />
              ))}
            </InfoWrapper>
            <Subtotal
              shippingTotal={shippingTotal}
              subTotal={subTotal}
              total={total}
              discount={discount}
            />
            <Button>SEGUIR PARA O PAGAMENTO</Button>
          </S.CartWrapper>
        </>
      )}
    </>
  )
}
