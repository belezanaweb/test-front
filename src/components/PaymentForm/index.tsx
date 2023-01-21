import { forwardRef, useState } from "react";
import styled from "styled-components";
import { cardCVVMask, cardNumberMask, cardValidThroughMask } from "../../helpers/input";
import { Card } from "../../theme/styles";
import { Input } from "../Input";
import { PaymentFormProps, UpdateFormValidationType } from "../../types";

export const PaymentForm = forwardRef(({ isFormTriggered, handleFormDataChange }: PaymentFormProps, ref: any) => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardValidThrough, setCardValidThrough] = useState("");
  const [cardCVV, setCardCVV] = useState("");

  const updateFormValidation = ({ reference, value }: UpdateFormValidationType) => {
    ref.current[reference] = value;
    handleFormDataChange({
      cardNumber: `${cardNumber?.slice(0, 14).replace(/[0-9]/g, "*")}${cardNumber?.slice(14, 19)}`,
      cardName,
      cardValidThrough
    })
  }

  return (
    <Card>
      <Form>
        <Input
          label="Número do cartão:"
          type="text"
          name="cardNumber"
          value={cardNumber}
          placeholder="____.____.____.____"
          inputMaskChange={(text) => setCardNumber(text)}
          mask={cardNumberMask}
          validationLength={19}
          isValidated={isFormTriggered ? ref.current["cardNumber"] : true}
          setFormValidation={(returned: any) => updateFormValidation(returned)}
        />
        <Input
          label="Nome do titular:"
          type="text"
          name="cardName"
          value={cardName}
          placeholder="Como no cartão"
          inputMaskChange={(text) => setCardName(text)}
          isValidated={isFormTriggered ? ref.current["cardName"] : true}
          setFormValidation={(returned: any) => updateFormValidation(returned)}
        />
        <Row>
          <Column>
            <Input
              label="Validade (mês/ano):"
              type="text"
              name="cardValidThrough"
              value={cardValidThrough}
              placeholder="__/____"
              inputMaskChange={(text) => setCardValidThrough(text)}
              mask={cardValidThroughMask}
              validationLength={7}
              isValidated={isFormTriggered ? ref.current["cardValidThrough"] : true}
              setFormValidation={(returned: any) => updateFormValidation(returned)}
            />
          </Column>
          <Column>
            <Input
              label="CVV:"
              type="text"
              name="cardCVV"
              value={cardCVV}
              placeholder="___"
              inputMaskChange={(text) => setCardCVV(text)}
              mask={cardCVVMask}
              validationLength={3}
              isValidated={isFormTriggered ? ref.current["cardCVV"] : true}
              setFormValidation={(returned: any) => updateFormValidation(returned)}
            />
          </Column>
        </Row>
      </Form>
    </Card>
  );
});

const Form = styled.form``;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;

const Column = styled.div`
  flex: 1;

  &:first-child {
    margin-right: 10px;
  }

  &:last-child {
    margin-left: 10px;
  }
`;
