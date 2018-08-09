import React, { Fragment } from 'react';

/**
 * Styles
 */
import { SectionTitle } from '../../assets/global';
import { Form, Input, Clear } from './styles';

const CardForm = () => (
  <Fragment>
  <SectionTitle>Pagamento</SectionTitle>
  <Form>
    <Input full>
      <label htmlFor="card_number">Número do cartão</label>
        <input type="tel" id="card_number" placeholder="____.____.____.____" />
    </Input>
    <Input full>
      <label htmlFor="card_name">Nome do titular</label>
      <input type="text" id="card_name" placeholder="Como no cartão" />
    </Input>
    <Input medium>
      <label htmlFor="card_validate">Validade (mês/ano):</label>
      <input type="tel" id="card_validate" placeholder="__/____" />
    </Input>
    <Input small>
      <label htmlFor="card_cvv">CVV</label>
      <input type="tel" id="card_cvv" placeholder="___" />
    </Input>
    <Clear />
  </Form>
  </Fragment>
);

export default CardForm;
