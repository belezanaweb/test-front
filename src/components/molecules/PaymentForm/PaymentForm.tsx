import * as Styles from './PaymentForm.styles'
import { inputFormatCvv, inputFormatCreditCardNumber, inputFormatValidDate } from '../../../utils/mask'
import Input from '../../atoms/Input/Input'
import { InputHTMLAttributes } from 'react';
import { DeepRequired, FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegister<FieldValues>
  errors: FieldErrorsImpl<DeepRequired<FieldValues>>
}
export const PaymentForm: React.FC<InputProps> = ({ register, errors }) => {

  return (
    <Styles.Container>
      <Styles.Form>
        <Input
          data-testid="creditCardNumber"
          id="creditCardNumber"
          label="Número do cartão:"
          maxLength={19}
          placeholder="____.____.____.____"
          patterValidator={/^[0-9]{4}\.[0-9]{4}\.[0-9]{4}\.[0-9]{4}$/i}
          error={errors?.creditCardNumber ? errors.creditCardNumber?.message?.toString() : ''}
          handlerInputValidator={inputFormatCreditCardNumber}
          register={register}
        />

        <Input
          data-testid="creditCardName"
          id="creditCardName"
          label="Nome do Titular:"
          placeholder="Como no cartão"
          maxLength={19}
          patterValidator={/^[A-Za-z\s]+$/i}
          error={errors?.creditCardName ? errors.creditCardName?.message?.toString() : ''}
          register={register}
        />

        <Styles.InputsContainer>
          <Input
            data-testid="creditCardDate"
            id="creditCardDate"
            label="Validade (mês/ano):"
            maxLength={7}
            placeholder="__/____"
            patterValidator={/^(0[1-9]|10|11|12)\/20[0-9]{2}$/i}
            error={errors?.creditCardDate ? errors.creditCardDate?.message?.toString() : ''}
            handlerInputValidator={inputFormatValidDate}
            register={register}
          />

          <Input
            data-testid="creditCardCvv"
            id="creditCardCvv"
            label="CVV:"
            maxLength={3}
            placeholder="___"
            patterValidator={/^[0-9]{3}$/i}
            error={errors?.creditCardCvv ? errors.creditCardCvv?.message?.toString() : ''}
            handlerInputValidator={inputFormatCvv}
            register={register}
          />
        </Styles.InputsContainer>

      </Styles.Form>
    </Styles.Container>
  );

}



export default PaymentForm
