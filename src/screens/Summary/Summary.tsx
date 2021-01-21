import React from 'react'
import { ReactComponent as SuccessIcon } from '../../ui/assets/img/success.svg'

import ContentBox from '../../ui/components/ContentBox'
import Title from '../../ui/components/Title'

import ProductListContainer from '../../redux/containers/ProductListContainer'
import CartValuesContainer from '../../redux/containers/CartValuesContainer'
import CardDataContainer from '../../redux/containers/CardDataContainer'

import theme from '../../ui/theme'
import * as S from './styled'

const Summary = () => {
  return (
    <>
      <S.SummaryWrapper>
        <SuccessIcon width={40} height={40} fill={theme.colors.primaryLight} />
        <S.SummaryText>Compra efetuada com sucesso</S.SummaryText>
      </S.SummaryWrapper>

      <Title>Pagamento</Title>
      <ContentBox>
        <CardDataContainer />
      </ContentBox>
      <Title>Produtos</Title>
      <S.SummaryData>
        <S.SummaryProduct>
          <ContentBox>
            <ProductListContainer />
          </ContentBox>
        </S.SummaryProduct>
        <S.SummaryTable>
          <CartValuesContainer />
        </S.SummaryTable>
      </S.SummaryData>
    </>
  )
}

export default Summary
