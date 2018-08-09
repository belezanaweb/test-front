import React, { Fragment } from 'react';
import MaskedInput from 'react-text-mask';

/**
 * Styles
 */
import { SectionTitle, BoxArea, Input, Clear } from '../../assets/global';


/**
 * Methods
 */
const validateForm = input => {
  input = input.target;
  let value = input.value;
  const type = input.dataset.validate;

  switch(type) {
    case 'empty':
      if (value === '' || value.slice(-1) === '_') {
        input.parentNode.classList.add('invalid');
        input.parentNode.querySelector('label').innerHTML = input.parentNode.querySelector('label').dataset.errormessage;
      } else {
        input.parentNode.classList.remove('invalid');
        input.parentNode.querySelector('label').innerHTML = input.parentNode.querySelector('label').dataset.label;
      }
    break;
    case 'expiration':
      let month = parseInt(value.split('/')[0], 10);
      let year = parseInt(value.split('/')[1], 10);

      if (month < 1 || month > 12 || year < (new Date()).getFullYear() || value.slice(-1) === '') {
        input.parentNode.classList.add('invalid');
        input.parentNode.querySelector('label').innerHTML = input.parentNode.querySelector('label').dataset.errormessage;
      } else {
        input.parentNode.classList.remove('invalid');
        input.parentNode.querySelector('label').innerHTML = input.parentNode.querySelector('label').dataset.label;
      }
      break;
    default:
      return true;
  }
};

const CardForm = () => (
  <Fragment>
  <SectionTitle>Pagamento</SectionTitle>
  <BoxArea>
    <Input full>
      <label data-errormessage="Número do cartão inválido" data-label="Número do cartão" htmlFor="card_number">Número do cartão</label>
      <MaskedInput
        id="card_number"
        placeholder="____.____.____.____"
        type="tel"
        onBlur={validateForm}
        data-validate="empty"
        mask={[/\d/, /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/]}
      />
    </Input>
    <Input full>
      <label data-errormessage="Esse campo é obrigatório" data-label="Nome do titular" htmlFor="card_name">Nome do titular</label>
      <input type="text" id="card_name" placeholder="Como no cartão" data-validate="empty" onBlur={validateForm} />
    </Input>
    <Input medium>
      <label data-errormessage="Validade do cartão inválida" data-label="Validade (mês/ano)" htmlFor="card_validate">Validade (mês/ano):</label>
      <MaskedInput
        id="card_validate"
        placeholder="__/____"
        type="tel"
        mask={[/\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
        data-validate="expiration"
        onBlur={validateForm}
      />
    </Input>
    <Input small>
      <label htmlFor="card_cvv" data-errormessage="CVV inválido" data-label="CVV">CVV</label>
      <MaskedInput
        id="card_cvv"
        placeholder="___"
        type="tel"
        onBlur={validateForm}
        data-validate="empty"
        mask={[/\d/, /\d/, /\d/]}
      />
    </Input>
    <Clear />
  </BoxArea>
  </Fragment>
);

export default CardForm;
