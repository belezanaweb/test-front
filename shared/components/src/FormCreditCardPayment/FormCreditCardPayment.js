import React from "react";

import { Form } from "@unform/web";
import { Input } from "../FormElements/Input/Input";
import * as S from "./FormCreditCardPayment.styles";

export const FormCreditCardPayment = ({ formRef, onSubmit }) => {
  return (
    <Form id="form" ref={formRef} onSubmit={onSubmit}>
      <Input
        label="Número do cartão"
        id="frm-payment-card-number"
        name="cardNumber"
        placeholder="____.____.____.____"
      />
      <Input
        label="Nome do Titular"
        id="frm-payment-owner"
        name="cardOwner"
        placeholder="Como no cartão"
      />
      <S.Grid>
        <S.GridColumn>
          <Input
            label="Validade mês/ano"
            id="frm-payment-validation"
            name="cardValidation"
            placeholder="__/____"
          />
        </S.GridColumn>
        <S.GridColumn>
          <Input
            label="CVV"
            id="frm-payment-cvv"
            name="cardCVV"
            placeholder="___"
          />
        </S.GridColumn>
      </S.Grid>
    </Form>
  );
};
