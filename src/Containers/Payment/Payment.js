import React, {Component} from 'react';
import Auxiliary from '../../Hoc/Auxiliary/Auxiliary';
import Content from '../../Components/Content/Content';
import classes from './Payment.module.scss';
import Button from '../../Components/Button/Button';
import Total from '../../Components/Total/Total';
import { connect } from 'react-redux'

class Payment extends Component {

  componentDidMount = () => {
    console.log('props:', this.props);
  }
  
  render() {

    const {discount, shippingTotal, subTotal, total} = this.props.cart;

    return (
      <Auxiliary>
        <Content>
          <form>
            <input name="name"/>
            <input name="cardNumber"/>
            <div className={classes.Col}>
              <input name="validDate"/>
            </div>
            <div className={classes.Col}>
              <input name="cvv"/>
            </div>
          </form>
        </Content>
        <Total discount={discount}
        shippingTotal={shippingTotal}
        subTotal={subTotal}
        total={total}/>
        <Button action={this.concludePayment}>Finalizar pedido</Button>
      </Auxiliary>
    );
  }

  concludePayment = () => {

  }

}

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(mapStateToProps, null)(Payment);