/* eslint-disable */
import React, { useContext, useMemo } from 'react'
import { IoCheckmarkOutline } from 'react-icons/io5'
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

  const hideNumbers = useMemo(() => {
    return `****.****.****.${user?.creditCard.split('.')[3]}`
  }, [user])

  const upperName = useMemo(() => {
    return user?.name.toUpperCase()
  }, [user])

  return (
    <S.Wrapper>
      <HeaderNav page="confirmation" />
      <S.Content>
        <S.Success>
          <IoCheckmarkOutline />
          <span>compra efetuada com sucesso</span>
        </S.Success>
        <S.BlockContent>
          <S.ContentInfo>
            <Heading title="Pagamento" />
            <S.Payment>
              <span>{user && hideNumbers}</span>
              <span>{user && upperName}</span>
              <span>{user && user.date}</span>
            </S.Payment>
            <Heading title="produtos" />
            <S.Products>
              {product &&
                product.items.map(item => (
                  <Product
                    key={item.product.sku}
                    image={item.product.imageObjects[0].small}
                    description={item.product.name}
                    type="small"
                  />
                ))}
            </S.Products>
          </S.ContentInfo>
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
        </S.BlockContent>
      </S.Content>
    </S.Wrapper>
  )
}
