import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatPrice } from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';
import { bindActionCreators } from 'redux';
import { Container } from './styles';

class Total extends Component {

  componentDidMount() {
    this.props.getProducts();
  };

  render() {
    const { cart } = this.props;

    return (
        <Container>
        <div>
          <span>produtos</span>
          <span>{formatPrice(cart?.subTotal)}</span>
        </div>
        <div>
          <span>frete</span>
          <span>{formatPrice(cart?.shippingTotal)}</span>
        </div>
        <div className="discount">
          <span>desconto</span>
          <span >- {formatPrice(cart?.discount)}</span>
        </div>
        <div className="total">
          <span>total</span>
          <span>{formatPrice(cart?.subTotal + cart?.shippingTotal - cart?.discount )}</span>
        </div>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.cart.productsCart
});

const mapDispatchToProps = dispatch =>
    bindActionCreators( CartActions , dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Total);
