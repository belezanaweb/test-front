import React from 'react'
import { useHistory } from 'react-router-dom'

import Button from '../../ui/components/Button'
import ContentBox from '../../ui/components/ContentBox'
import Title from '../../ui/components/Title'

import ProductListContainer from '../../redux/containers/ProductListContainer'
import CartValuesContainer from '../../redux/containers/CartValuesContainer'

import * as S from './styled'

const Cart = () => {
  const history = useHistory()

  const handleClick = () => {
    history.push('/payment')
  }

  return (
    <>
      <Title>Produtos</Title>
      <S.Wrapper>
        <S.ProductsListWrapper>
          <ContentBox>
            <ProductListContainer />
          </ContentBox>
        </S.ProductsListWrapper>
        <S.TotalWrapper>
          <CartValuesContainer />
          <Button onClick={handleClick}>Seguir para o pagamento</Button>
        </S.TotalWrapper>
      </S.Wrapper>
    </>
  )
}

export default Cart
