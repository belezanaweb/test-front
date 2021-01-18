import React from 'react'
import { ReactComponent as SuccessIcon } from '../../ui/assets/img/success.svg'

import { ISummaryPage } from './types'

import ProductList from '../../ui/components/ProductList'
import ContentBox from '../../ui/components/ContentBox'
import ProductCard from '../../ui/components/ProductCard'
import Title from '../../ui/components/Title'
import { hideCreditCardNumbers } from '../../shared/helpers'

import theme from '../../ui/theme'
import * as S from './styled'

const Summary = ({ productData, products, cardData }: ISummaryPage) => {
  return (
    <>
      <S.SummaryWrapper>
        <SuccessIcon width={40} height={40} fill={theme.colors.primaryLight} />
        <S.SummaryText>Compra efetuada com sucesso</S.SummaryText>
      </S.SummaryWrapper>

      <Title>Pagamento</Title>
      <ContentBox>
        <S.PaymentText>{hideCreditCardNumbers(cardData.number.toString())}</S.PaymentText>
        <S.PaymentText>{cardData.holder}</S.PaymentText>
        <S.PaymentText>{cardData.expirationDate}</S.PaymentText>
      </ContentBox>
      <Title>Produtos</Title>
      <S.SummaryData>
        <S.SummaryProduct>
          <ContentBox>
            {products.map((product) => {
              return (
                <ProductCard
                  key={product.product.sku}
                  name={product.product.name}
                  images={product.product.imageObjects}
                />
              )
            })}
          </ContentBox>
        </S.SummaryProduct>
        <S.SummaryTable>
          <ProductList
            subTotal={productData.subTotal}
            shippingTotal={productData.shippingTotal}
            discount={productData.discount}
            total={productData.total}
          />
        </S.SummaryTable>
      </S.SummaryData>
    </>
  )
}

export default Summary
