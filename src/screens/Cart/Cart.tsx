import React from 'react'
import { useHistory } from 'react-router-dom'

import { ICartScreen } from './types'

import Button from '../../ui/components/Button'
import ContentBox from '../../ui/components/ContentBox'
import ProductCard from '../../ui/components/ProductCard'
import ProductList from '../../ui/components/ProductList'
import Title from '../../ui/components/Title'

import * as S from './styled'

const Cart = ({ products, productData }: ICartScreen) => {
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
            {products.map((product) => {
              return (
                <ProductCard
                  key={product.product.sku}
                  name={product.product.name}
                  images={product.product.imageObjects}
                  priceData={product.product.priceSpecification}
                />
              )
            })}
          </ContentBox>
        </S.ProductsListWrapper>
        <S.TotalWrapper>
          <ProductList
            subTotal={productData.subTotal}
            shippingTotal={productData.shippingTotal}
            discount={productData.discount}
            total={productData.total}
          />
          <Button onClick={handleClick}>Seguir para o pagamento</Button>
        </S.TotalWrapper>
      </S.Wrapper>
    </>
  )
}

export default Cart
