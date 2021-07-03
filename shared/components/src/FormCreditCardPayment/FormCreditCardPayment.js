import { Form } from "../FormElements/Form/Form";
import { Input } from "../FormElements/Input/Input";
import * as S from "./FormCreditCardPayment.styles";
import { PaymentFormSchema } from "@belezanaweb/utils";

export const FormCreditCardPayment = ({ onSubmit }) => {
  return (
    <Form
      initialValues={{
        cardNumber: "",
        cardOwner: "",
        cardValidation: "",
        cardCVV: "",
      }}
      onSubmit={onSubmit}
      validationSchema={PaymentFormSchema}
    >
      <Input
        label="Número do cartão"
        id="frm-payment-card-number"
        name="cardNumber"
        placeholder="_ _ _ _._ _ _ _._ _ _ _._ _ _ _"
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
            placeholder="_ _/_ _ _"
          />
        </S.GridColumn>
        <S.GridColumn>
          <Input
            label="CVV"
            id="frm-payment-cvv"
            name="cardCVV"
            placeholder="_ _ _"
          />
        </S.GridColumn>
      </S.Grid>
    </Form>
  );
};
