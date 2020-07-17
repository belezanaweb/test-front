import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import CardProduct from '../../components/CardProduct';
import styled from 'styled-components';
import Button from '../../components/Button';
import CardTotalShipping from '../../components/CardTotalShipping';
import { listCart } from '../../actions/cart';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #EEE;
  height: 720px;
`

const CartPage = props => {

  const [state, setState] = useState({})

  useEffect(() => {
    props.listCart()
  })

  return (
    <Container>
      <CardProduct products={props.cart.items}/>
      <CardTotalShipping fields={[
        {
          name: "PRODUTOS",
          value: props.cart.subTotal
        },
        {
          name: "FRETE",
          value: props.cart.shippingTotal
        },
        {
          name: "DESCONTO",
          value: props.cart.discount,
          isDiscount: true,
        },
        {
          name: "TOTAL",
          value: props.cart.total,
          isTotal: true
        },
        ]} />
      <Button name="SEGUIR PARA O PAGAMENTO"/>
    </Container> 
  )
}

const mapStateToProps = state => {
  return {
    cart: state.cart.cart
  }
}

const mapDispatchToProps = dispatch => ({
  listCart: () => dispatch(listCart()) 
})

export default connect(mapStateToProps, mapDispatchToProps)(CartPage)