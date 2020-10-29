import React from 'react'
import { ReactComponent as Check } from '../../assets/images/check-mark-circle-line.svg'

import { ISuccessPage } from './interface'

import CartTable from '../../components/CartTable'
import ContentBox from '../../components/ContentBox'
import ProductCard from '../../components/ProductCard'
import Title from '../../components/Title'
import { hideCardFirstNumbers } from '../../utils'
import * as S from './Success.styled'

export const Success = ({ productData, productItems, cardData }: ISuccessPage) => {
  return (
    <>
      <S.SuccessWrapper>
        <Check width={40} height={40} fill="#FF7800" />
        <S.SuccessText>Compra efetuada com sucesso</S.SuccessText>
      </S.SuccessWrapper>

      <Title>Pagamento</Title>
      <ContentBox>
        <S.PaymentText>{hideCardFirstNumbers(cardData.number.toString())}</S.PaymentText>
        <S.PaymentText>{cardData.holder}</S.PaymentText>
        <S.PaymentText>{cardData.expirationDate}</S.PaymentText>
      </ContentBox>
      <Title>Produtos</Title>
      <S.SuccessData>
        <S.SuccessProduct>
          <ContentBox>
            {productItems.map((item) => {
              return (
                <ProductCard
                  key={item.product.sku}
                  name={item.product.name}
                  imageObjects={item.product.imageObjects}
                />
              )
            })}
          </ContentBox>
        </S.SuccessProduct>
        <S.SuccessTable>
          <CartTable
            subTotal={productData.subTotal}
            shippingTotal={productData.shippingTotal}
            discount={productData.discount}
            total={productData.total}
          />
        </S.SuccessTable>
      </S.SuccessData>
    </>
  )
}
