import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as CartActions from "../../store/actions/cart";

/**
 * Styles
 */
import { InRight } from '../../assets/global';
import { SummaryDetails, SummaryItem, Off, Total } from './styles'

/**
 * Utils
 */
import { money_format } from '../../utils';

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
          <InRight> R$ {money_format(this.props.cart.data.subTotal, 2, ',', '.')}</InRight>
        </SummaryItem>
        <SummaryItem>
          FRETE
          <InRight>R$ {money_format(this.props.cart.data.shippingTotal, 2, ',', '.')}</InRight>
        </SummaryItem>
        {this.props.cart.data.discount && (
          <Off>
            Desconto
            <InRight>- R$ {money_format(this.props.cart.data.discount, 2, ',', '.')}</InRight>
          </Off>
        )}
        <Total>
          TOTAL
          <InRight>R$ {money_format(this.props.cart.data.total, 2, ',', '.')}</InRight>
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
