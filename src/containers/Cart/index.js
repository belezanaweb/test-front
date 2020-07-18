import React, { useEffect } from 'react';
import { connect } from "react-redux";
import CardProduct from '../../components/CardProduct';
import styled from 'styled-components';
import Button from '../../components/Button';
import CardTotalShipping from '../../components/CardTotalShipping';
import { listCart } from '../../actions/cart';
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

  return (
    <Container>
      <CardProduct products={props.cart.items}/>
      <CardTotalShipping />
      <Button name="SEGUIR PARA O PAGAMENTO" onClick={props.goToPayment}/>
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
  goToPayment: () => dispatch(push(routes.payment))
})

export default connect(mapStateToProps, mapDispatchToProps)(CartPage)