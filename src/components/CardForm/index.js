import React, { Fragment, Component } from 'react';
import MaskedInput from 'react-text-mask';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as formActions from "../../store/actions/cardForm";

/**
 * Styles
 */
import { SectionTitle, BoxArea, Input, Clear } from '../../assets/global';

class CardForm extends Component {
  constructor(props) {
    super(props);
    this.validateForm = this.validateForm.bind(this);
  }

  /**
   * Validate Method
   */
  validateForm(input) {
    input = input.target;
    let value = input.value;
    const type = input.dataset.validate;

    switch (type) {
      case 'empty':
        if (value === '' || value.slice(-1) === '_') {
          input.parentNode.classList.add('invalid');
          input.parentNode.querySelector('label').innerHTML = input.parentNode.querySelector('label').dataset.errormessage;
          input.setAttribute('data-passed', false);
        } else {
          input.parentNode.classList.remove('invalid');
          input.parentNode.querySelector('label').innerHTML = input.parentNode.querySelector('label').dataset.label;
          input.setAttribute('data-passed', true);
        }
        break;
        case 'expiration':
        let month = parseInt(value.split('/')[0], 10);
        let year = parseInt(value.split('/')[1], 10);
        
        if (month < 1 || month > 12 || year < (new Date()).getFullYear() || value.slice(-1) === '') {
          input.parentNode.classList.add('invalid');
          input.parentNode.querySelector('label').innerHTML = input.parentNode.querySelector('label').dataset.errormessage;
          input.setAttribute('data-passed', false);
        } else {
          input.parentNode.classList.remove('invalid');
          input.parentNode.querySelector('label').innerHTML = input.parentNode.querySelector('label').dataset.label;
          input.setAttribute('data-passed', true);
        }
        break;
      default:
        return true;
    }

    this.verifyInputs();
  };

  verifyInputs() {
    const inputsInvalids = document.getElementById('payment-form').querySelectorAll('[data-passed="false"]');
    const formData = {
      cardName: document.getElementById('card_name').value,
      cardNumber: document.getElementById('card_number').value,
      cardExpiration: document.getElementById('card_validate').value,
    }

    if (inputsInvalids.length > 0) {
      this.props.inValidateForm();
    } else {
      this.props.validateForm(formData);
    }
  }

  render() {
    return (
      <Fragment>
        <SectionTitle>Pagamento</SectionTitle>
        <BoxArea id="payment-form">
          <Input full>
            <label data-errormessage="Número do cartão inválido" data-label="Número do cartão" htmlFor="card_number">Número do cartão</label>
            <MaskedInput
              id="card_number"
              placeholder="____.____.____.____"
              type="tel"
              onBlur={this.validateForm}
              data-validate="empty"
              data-passed={false}
              mask={[/\d/, /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/]}
              />
          </Input>
          <Input full>
            <label data-errormessage="Esse campo é obrigatório" data-label="Nome do titular" htmlFor="card_name">Nome do titular</label>
            <input type="text" data-passed={false} id="card_name" placeholder="Como no cartão" data-validate="empty" onBlur={this.validateForm} />
          </Input>
          <Input medium>
            <label data-errormessage="Validade do cartão inválida" data-label="Validade (mês/ano)" htmlFor="card_validate">Validade (mês/ano):</label>
            <MaskedInput
              id="card_validate"
              placeholder="__/____"
              type="tel"
              mask={[/\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
              data-passed={false}
              data-validate="expiration"
              onBlur={this.validateForm}
              />
          </Input>
          <Input small>
            <label htmlFor="card_cvv" data-errormessage="CVV inválido" data-label="CVV">CVV</label>
            <MaskedInput
              id="card_cvv"
              placeholder="___"
              type="tel"
              onBlur={this.validateForm}
              data-passed={false}
              data-validate="empty"
              mask={[/\d/, /\d/, /\d/]}
            />
          </Input>
          <Clear />
        </BoxArea>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  cardForm: state.cardForm
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(formActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardForm);
