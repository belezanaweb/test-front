import React from 'react'
import { useHistory } from 'react-router-dom'

import { ICartPage } from './interface'

import Button from '../../components/Button'
import CartTable from '../../components/CartTable'
import ContentBox from '../../components/ContentBox'
import ProductCard from '../../components/ProductCard'
import Title from '../../components/Title'
import * as S from './Cart.styled'

export const Cart = ({ productItems, productData }: ICartPage) => {
  const history = useHistory()

  const handleClick = () => {
    history.push('/pagamento')
  }

  return (
    <>
      <Title>Produtos</Title>
      <S.CartWrapper>
        <S.ProductsListWrapper>
          <ContentBox>
            {productItems.map((item) => {
              return (
                <ProductCard
                  key={item.product.sku}
                  name={item.product.name}
                  imageObjects={item.product.imageObjects}
                  priceSpecification={item.product.priceSpecification}
                />
              )
            })}
          </ContentBox>
        </S.ProductsListWrapper>
        <S.ProductsTotalWrapper>
          <CartTable
            subTotal={productData.subTotal}
            shippingTotal={productData.shippingTotal}
            discount={productData.discount}
            total={productData.total}
          />
          <Button onClick={handleClick}>Seguir para o pagamento</Button>
        </S.ProductsTotalWrapper>
      </S.CartWrapper>
    </>
  )
}
