import React, { Component } from 'react'

import Card from '../../components/UI/Card/Card';
import Title from '../../components/UI/Title/Title';
import Button from '../../components/UI/Button/Button';

import CartItemList from '../../components/Cart/CartItemList/CartItemList';
import TotalizersList from '../../components/Totalizers/TotalizersList/TotalizersList';

import { withRouter } from 'react-router-dom';

import jss from 'jss'
import preset from 'jss-preset-default'

jss.setup(preset())

const styles = {
  '@media (min-width: 1024px)': {
    row: {
      display: 'flex',
    },
    left: {
      width: '55%',
    },
    right: {
      flex: 'auto',
      padding: { left: 20 },
      margin: { top: 25 },
    },
  }
}

const { classes } = jss.createStyleSheet(styles).attach()

class CartPage extends Component {
  goToPayment() {
    this.props.history.push('/checkout/payment')
  }

  render() {
    return (
      <div className={classes.row}>
        <div className={classes.left}>
          <Title>Produtos</Title>
          <Card>
            <CartItemList />
          </Card>
        </div>

        <div className={classes.right}>
          <TotalizersList />
          <Button onClick={() => this.goToPayment()}>
            Seguir para o pagamento
          </Button>
        </div>
      </div>
    )
  }
}

export default withRouter(CartPage)
