import React, { Component } from 'react';
import Content from '../../Components/Content/Content';
import classes from './Payment.module.scss';
import Button from '../../Components/Button/Button';
import Total from '../../Components/Total/Total';
import { connect } from 'react-redux';
import Title from '../../Components/Title/Title';
import { TITLE_TYPES } from '../../Constants';
import validator from 'validator'
import InputMask from 'react-input-mask';
import moment from 'moment';
import { finishShopping } from '../../Store/Actions/PaymentAction';
import 'moment/locale/pt-br';

class Payment extends Component {

  state = {
    cardNumber: '',
    name: '',
    validDate: '',
    cvv: '',
    cardNumberError: '',
    nameError: '',
    validDateError: '',
    cvvError: ''
  }

  render() {

    const { discount, shippingTotal, subTotal, total } = this.props.cart;
    const { cardNumberError, nameError, validDateError, cvvError } = this.state;

    return (
      <div className={classes.Payment}>
        <Title type={TITLE_TYPES.MAIN}>Cartão de crédito</Title>
        <Content>
          <form>
            <div className={classes.Row}>
              <div className={classes.Col}>
                <label>Número do cartão</label>
                <InputMask 
                  name="cardNumber"
                  className={cardNumberError.length > 0 ? classes.Invalid : null}
                  onChange={this.handleForm}
                  mask="9999.9999.9999.9999"
                  maskChar=""
                  placeholder="____.____.____.____" />
                  {cardNumberError.length > 0 ? <span>{cardNumberError}</span> : null}
              </div>

              <div className={classes.Col}>
                <label>Nome do Titular</label>
                <input name="name"
                  className={nameError.length > 0 ? classes.Invalid : null}
                  onChange={this.handleForm}
                  placeholder="Como no cartão" />
              </div>
            </div>
            <div className={classes.Row}>
              <div className={classes.Col}>
                
                <label>Validade (mês/ano):</label>

                <InputMask name="validDate"
                  className={validDateError.length > 0 ? classes.Invalid : null}
                  mask="99/9999" 
                  placeholder="__/____" 
                  onChange={this.handleForm}/>

              </div>
              <div className={classes.Col}>
                <label>CVV:</label>
                <InputMask name="cvv"
                  className={cvvError.length > 0 ? classes.Invalid : null}
                  placeholder="___"
                  mask="999" 
                  onChange={this.handleForm}/>
              </div>
            </div>
          </form>
        </Content>
        <Total discount={discount}
          shippingTotal={shippingTotal}
          subTotal={subTotal}
          total={total} />
        <Button action={this.concludePayment} isInvalid={this.isInvalid()}>Finalizar pedido</Button>
      </div>
    );
  }

  concludePayment = () => {
    
  }

  handleForm = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({[name]: value}, () => this.validate(name));
  }

  validate = (fieldName) => {

    moment.locale('pt-BR');

    let errors = {
      cardNumberError: '',
      nameError: '',
      validDateError: '',
      cvvError: '',
    };

    const {cardNumber, name, cvv, validDate} = this.state;

    const day = moment().get('date');

    if (fieldName ==='name'
    && validator.isEmpty(name)) {
      errors.nameError = 'Esse campo é obrigatório e deve conter 15 caracteres';
    }

    if (fieldName.includes('cardNumber') 
    && (validator.isEmpty(cardNumber) 
    || cardNumber.replace(/\./g, "").length < 15)) {
      errors.cardNumberError = 'Obrigatório e deve conter 15 caracteres';
    }

    if (fieldName.includes('validDate') 
    && (validator.isEmpty(validDate) || moment(`${day}/${validDate}`, 'L').isBefore(moment()))) {
      errors.validDateError = 'A data não é valida';
    }

    if (fieldName.includes('cvv') 
    && (validator.isEmpty(cvv) 
    || cvv.replace(/_/g, '').length < 3)) {
      errors.validDateError = 'A data não é valida';
    }

    this.setState(errors);


  }


  isInvalid = () => {

    const {cardNumber, name, cvv, validDate} = this.state;

    const day = moment().get('date');

    if (validator.isEmpty(name)) {
      return true;
    }

    if ((validator.isEmpty(cardNumber) || cardNumber.replace(/\./g, "").length < 15)) {
      return true;
    }

    if ((validator.isEmpty(validDate) || moment(`${day}/${validDate}`, 'L').isBefore(moment()))) {
      return true;
    }

    if ((validator.isEmpty(cvv) || cvv.replace(/_/g, '').length < 3)) {
      return true;
    }

    return false;
  }


  concludePayment = () => {
    const { name, cardNumber, validDate, cvv } = this.state;
    this.props.finishShopping({ name, cardNumber, validDate, cvv });
    this.props.history.push('/success');
  }



}

const mapStateToProps = state => ({
  cart: state.cart,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  finishShopping: (user) => dispatch(finishShopping(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Payment);