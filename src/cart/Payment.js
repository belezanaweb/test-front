import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actions/index.js';
import FinalizeAccount from '../components/FinalizeAccount';
import Header from '../components/Header';
import Button from '../components/Button';
import UserForm from '../components/UserForm'

class Payment extends Component {
  render() {
    let isDisabled =
      !this.props.cardName ||
      !this.props.cardCvv ||
      !this.props.cardDate ||
      !this.props.cardNumber;

    return (
      <div>
        <Header />
        <UserForm 
          cardName={this.props.cardName} 
          cardCvv={this.props.cardCvv} 
          cardDate={this.props.cardDate} 
          cardNumber={this.props.cardNumber} 
        />
        <FinalizeAccount
          subTotal={this.props.subTotal}
          shippingTotal={this.props.shippingTotal}
          discount={this.props.discount}
          total={this.props.total}
        />
        <Button
          label='FINALIZAR O PEDIDO'
          handleClick='success'
          disabled={isDisabled}
        />
      </div>
    );
  }

}
const mapStateToProps = (state) => {
  return state
};

export default connect(mapStateToProps, actionCreators)(Payment);
