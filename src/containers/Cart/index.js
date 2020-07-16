import React, { Fragment, useEffect } from 'react';
import { connect } from "react-redux";
import CardProduct from '../../components/CardProduct';
import styled from 'styled-components';
import Button from '../../components/Button'
import CardTotalShipping from '../../components/CardTotalShipping'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #EEE;
  height: 720px;
`

const CartPage = props => {

  return (
    <Container>
      <CardProduct />
      <CardTotalShipping />
      <Button children="SEGUIR PARA O PAGAMENTO"/>
    </Container> 
  )
}

const mapDispatchToProps = dispatch => ({
})

export default connect(null, mapDispatchToProps)(CartPage)