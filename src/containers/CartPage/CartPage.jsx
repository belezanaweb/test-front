import React, { Component } from 'react'

import Card from '../../components/UI/Card/Card';
import Title from '../../components/UI/Title/Title';
import Button from '../../components/UI/Button/Button';

import CartItemList from '../../components/Cart/CartItemList/CartItemList';
import TotalizersList from '../../components/Totalizers/TotalizersList/TotalizersList';

import { withRouter } from 'react-router-dom';

class CartPage extends Component {
  goToPayment() {
    this.props.history.push('/checkout/payment')
  }

  render() {
    return (
      <div>
        <Title>Produtos</Title>
        <Card>
          <CartItemList />
        </Card>
        <TotalizersList />
        <Button onClick={() => this.goToPayment()}>
          Seguir para o pagamento
        </Button>
      </div>
    )
  }
}

export default withRouter(CartPage)
