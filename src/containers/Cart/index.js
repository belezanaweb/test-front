import React, { useEffect } from 'react';
import { connect } from "react-redux";
import CardProduct from '../../components/CardProduct';
import styled from 'styled-components';
import Button from '../../components/Button';
import CardTotalShipping from '../../components/CardTotalShipping';
import { listCart } from '../../actions/cart';
import { setCurrentPage } from '../../actions/menu';
import { routes } from "../Router";
import { push } from "connected-react-router";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #EEE;
  height: 720px;
`

const CartPage = props => {

  useEffect(() => {
    props.listCart()
  })

  const goToPaymentPage = () => {
    props.goToPayment()
    props.setCurrentPage()
  }

  return (
    <Container>
      <CardProduct products={props.cart.items} isRenderPrice={true} height="50%"/>
      <CardTotalShipping />
      <Button name="SEGUIR PARA O PAGAMENTO" onClick={goToPaymentPage}/>
    </Container> 
  )
}

const mapStateToProps = state => {
  return {
    cart: state.cart.cart
  }
}

const mapDispatchToProps = dispatch => ({
  listCart: () => dispatch(listCart()),
  goToPayment: () => dispatch(push(routes.payment)),
  setCurrentPage: () => dispatch(setCurrentPage(routes.payment))
})

export default connect(mapStateToProps, mapDispatchToProps)(CartPage)