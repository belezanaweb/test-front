import React, { Component, Fragment } from 'react';

import {connect} from 'react-redux'

import { Container, Section, Title } from './style';

class Payment extends Component {

  componentDidMount(){
    console.log(this.props.payment)
  }

  renderPaymentData(){
    return(
      <Fragment>
        <p>****.****.****.{this.props.payment.cardNumber ? this.props.payment.cardNumber.substr(this.props.payment.cardNumber.length-4, this.props.payment.cardNumber.length) : ''}</p>
        <p>{this.props.payment.cardHolder}</p>
        <p>{this.props.payment.validity}</p>
      </Fragment>
    )
  }

  render() {
    return (
      this.props.payment.cardNumber ?
      <Container>
        <div>
          <i class="far fa-check-circle"></i>
          <Title className="success">Compra Efetuada com Sucesso</Title>
        </div>
        <Title>Pagamento</Title>
        <Section>
          {this.renderPaymentData()}
        </Section>
      </Container>
      : ''
    );
  }
}

const mapStateToProps = state => ({
  payment: state.payment.data
});

export default connect(mapStateToProps, null)(Payment)
