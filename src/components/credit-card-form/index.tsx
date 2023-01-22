import React, { FormEvent, useState } from 'react';
import Title from '../title';

import PaymentDescription from '../../components/payment-description';

import Button from '../button';
import FormInput from '../FormInput';

import { isNumberValid, isNameValid, isDateValid, isCVVValid } from '../../services/payment/helpers'
import { useCreditCard } from '../../services/payment/hooks';
import { useNavigate } from 'react-router-dom';
import * as S from './styles'

const CreditCardForm: React.FC = () => {

    const navigate = useNavigate()
    const { creditCard, setCreditCard }  = useCreditCard();

    const [validation, setValidation] = useState({
        number: {
            isError: false,
            errorMessage: ""
        },
        name: {
            isError: false,
            errorMessage: ""
        },
        date: {
            isError: false,
            errorMessage: ""
        },
        cvv: {
            isError: false,
            errorMessage: ""
        }
    });

    const handlerOnSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let hasFormError = false;

        const form = event.currentTarget;

        const numberInput = form?.querySelector("#credit-card-form-number") as HTMLInputElement;
        const nameInput = form?.querySelector("#credit-card-form-name") as HTMLInputElement;
        const dateInput = form?.querySelector("#credit-card-form-date") as HTMLInputElement;
        const cvvInput = form?.querySelector("#credit-card-form-cvv") as HTMLInputElement;

        const number = isNumberValid(numberInput?.value);
        const name =  isNameValid(nameInput?.value);
        const date = isDateValid(dateInput?.value)
        const cvv = isCVVValid(cvvInput?.value);

        hasFormError = number.isError || name.isError || date.isError || cvv.isError

        setValidation({   
            number,
            name,
            date,
            cvv
        });
        if (!hasFormError) {
            setCreditCard({   
                number: numberInput.value,
                name: nameInput?.value,
                date: dateInput?.value,
                cvv: cvvInput?.value
            })
            
            navigate("/confirmation")
        }
    }
    return (
        <>
            <Title>CARTÃO DE CRÉDITO</Title>
            <S.Form onSubmit={handlerOnSubmit}>
                <S.Container>
                    <FormInput
                        label="Número do cartão:"
                        id="credit-card-form-number"
                        name="number"
                        mask="9999.9999.9999.9999"
                        type="text" 
                        placeholder='____.____.____.____'
                        error={validation.number}
                        defaultValue={creditCard.number} />
                    <FormInput
                        label="Nome do Titular:"
                        id="credit-card-form-name"
                        name="name"
                        mask=""
                        type="text" 
                        placeholder='Como no cartão'
                        error={validation.name}
                        defaultValue={creditCard.name}  />
                    <S.ContainerCardData>
                        <FormInput
                            label="Validade (mês/ano):"
                            id="credit-card-form-date"
                            name="date"
                            mask="99/9999"
                            type="text" 
                            placeholder='__/____'
                            error={validation.date}
                            defaultValue={creditCard.date} />
                        <FormInput
                            id="credit-card-form-cvv"
                            label="CVV:"
                            name="cvv"
                            mask="999"
                            type="text" 
                            placeholder='___'
                            error={validation.cvv}
                            defaultValue={creditCard.cvv}  />
                    </S.ContainerCardData>
                </S.Container>

                <PaymentDescription />
                <Button type="submit">FINALIZAR O PEDIDO</Button>
            </S.Form>
        </>
    );
};



export default CreditCardForm;