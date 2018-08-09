import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as CartActions from "../../store/actions/cart";

/**
 * Styles
 */
import { InRight } from '../../assets/global';
import { SummaryDetails, SummaryItem, Off, Total } from './styles'

class Summary extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.cartRequest();
  }

  render() {
    return (
      <SummaryDetails>
        <SummaryItem>
          PRODUTOS
          <InRight> R$ {this.props.cart.data.subTotal}</InRight>
        </SummaryItem>
        <SummaryItem>
          FRETE
          <InRight>R$ {this.props.cart.data.shippingTotal}</InRight>
        </SummaryItem>
        {this.props.cart.data.discount && (
          <Off>
            Desconto
            <InRight>- R$ {this.props.cart.data.discount}</InRight>
          </Off>
        )}
        <Total>
          TOTAL
          <InRight>R$ {this.props.cart.data.total}</InRight>
        </Total>
      </SummaryDetails>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Summary);
