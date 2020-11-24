import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import * as palette from './../../styles/variables'
import ItemList from './../../components/ItemList/ItemList'
import Services from './../../services/productsServices'
import SummaryCart from '../../components/SummaryCart/SummaryCart'
import BButton from '../../components/Button/Button'
import { SideContainer, PageContainer, Container } from './../../components/styles'
import Header from '../../components/Header/Header'

const TitleCart = styled.h1`
  margin-left: 12px;
  font-size: ${palette.FONTSIZE_2};
  font-family: ${palette.FONT_FAMILY};
  font-weight: bold;
  color: #999;
`
export default function Cart(props) {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.data)
  let history = useHistory()

  function searchProducts() {
    Services.getProducts()
      .then((res) => {
        dispatch({ type: 'ADD_CART', data: res })
      })
      .catch((error) => {
        return error
      })
  }

  useEffect(() => {
    searchProducts()
  }, [])

  function toPayment() {
    history.push('/payment')
  }

  return (
    <>
      <Header />
      <TitleCart> PRODUTOS </TitleCart>
      <PageContainer>
        <Container>
          {cart.items && cart.items.map((e) => <ItemList key={e.product.sku} item={e.product} />)}
        </Container>
        <SideContainer>
          <SummaryCart info={cart} />
          <BButton onClick={() => toPayment()}> {'SEGUIR PARA O PAGAMENTO'} </BButton>
        </SideContainer>
      </PageContainer>
    </>
  )
}
