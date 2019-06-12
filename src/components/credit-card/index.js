import React, { Fragment, Component } from 'react';
import Yup from 'yup'

import ValueDescription from '../../components/value-description'
import Button from '../../components/button/';
import { Container, Section, FormControl, FormControlFloat} from './style';

import { withFormik, Form, Field, ErrorMessage } from 'formik'
import handleCreditCardValidation from '../../utils/handleCreditCardValidation';

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Creators as PaymentActions} from '../../store/ducks/payment'

class CreditCard extends Component {

  componentWillUnmount(){
    this.props.setPayment(this.props.values)
  }
    render(){
      return(
        <Fragment>
          <Container>
            <h1>Cartão de Crédito</h1>
            <Section>
              <Form>
                <FormControl>
                  <label htmlFor="cardNumber">Número do Cartão</label>
                  <Field className={'cardNumber' in this.props.errors ? 'error' : ''} name="cardNumber" /> <br />
                  <p><ErrorMessage name="cardNumber" /></p>
                </FormControl>
                <FormControl>
                  <label htmlFor="cardHolder">Nome do Titular</label>
                  <Field className={'cardHolder' in this.props.errors ? 'error' : ''} name="cardHolder" /> <br />
                  <p><ErrorMessage name="cardHolder" /></p>
                </FormControl>
                <div>
                  <FormControlFloat className="push">
                    <label htmlFor="validity">Validade (mês/ano)</label>
                    <Field className={'validity' in this.props.errors ? 'error' : ''} name="validity" /> <br />
                    <p><ErrorMessage name="validity" /></p>
                  </FormControlFloat>
                  <FormControlFloat className="push">
                    <label htmlFor="cvv">CVV</label>
                    <Field className={'cvv' in this.props.errors ? 'error' : ''} name="cvv" /> <br />
                    <p><ErrorMessage name="cvv" /></p>
                  </FormControlFloat>
                </div>
              </Form>
            </Section>
          </Container>
          <ValueDescription
            subTotal={this.props.shoppingCart.subTotal}
            shippingTotal={this.props.shoppingCart.shippingTotal}
            discount={this.props.shoppingCart.discount}
            total={this.props.shoppingCart.total}
          />
          <Button
            type={"submit"}
            content={"Finalizar o Pedido"}
            routeTo={"success"}
            enable={this.props.isValid}
            />
        </Fragment>
      )
    }
}

const enhanceWithFormik = withFormik({
  mapPropsToValues: () => ({cardNumber: '', cardHolder: '', validity: '', cvv: ''}),
  isInitialValid: false,
  validateOnChange: true,
  validateOnBlur: true,
  validationSchema: Yup.object().shape({
    cardNumber: Yup.string()
      .test('credit-card-validation', 'Cartão de crédito inválido', cardNumber => handleCreditCardValidation(cardNumber))
      .required('Preencha o campo Número do Cartão'),
    cardHolder: Yup.string()
      .required('Preencha o campo Nome do Titular'),
    validity: Yup.string()
      .required('Preencha o campo Validade'),
    cvv: Yup.string()
      .required('Preencha o campo CVV'),
  }),
})

const mapDispatchToProps = dispatch => bindActionCreators(PaymentActions, dispatch);

export default connect(null, mapDispatchToProps)(enhanceWithFormik(CreditCard))
