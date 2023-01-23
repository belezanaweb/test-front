import React, { FormEvent, useState, useCallback, ChangeEvent } from 'react';
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
    const { number, name, date, cvv } = creditCard; 
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

        const validationNumber = isNumberValid(number);
        const validationName =  isNameValid(name);
        const validationDate = isDateValid(date)
        const validationCvv = isCVVValid(cvv);

        hasFormError = validationNumber.isError || validationName.isError || validationDate.isError || validationCvv.isError

        setValidation({   
            number: validationNumber,
            name: validationName,
            date: validationDate,
            cvv: validationCvv
        });
        
        if (!hasFormError) {
            navigate("/confirmation")
        }
    }

    const handleCardNumberChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setCreditCard({number: e.target.value})
    }, [])

    const handleNameChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setCreditCard({name: e.target.value})
    }, []);

    const handleDateChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setCreditCard({date: e.target.value})
    }, []);

    const handleCvvChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setCreditCard({cvv: e.target.value})
    }, []);

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
                        onChange={handleCardNumberChange}
                        defaultValue={number} />
                    <FormInput
                        label="Nome do Titular:"
                        id="credit-card-form-name"
                        name="name"
                        mask=""
                        type="text" 
                        placeholder='Como no cartão'
                        error={validation.name}
                        defaultValue={name}
                        onChange={handleNameChange}  />
                    <S.ContainerCardData>
                        <FormInput
                            label="Validade (mês/ano):"
                            id="credit-card-form-date"
                            name="date"
                            mask="99/9999"
                            type="text" 
                            placeholder='__/____'
                            error={validation.date}
                            defaultValue={date}
                            onChange={handleDateChange}  />
                        <FormInput
                            id="credit-card-form-cvv"
                            label="CVV:"
                            name="cvv"
                            mask="999"
                            type="text" 
                            placeholder='___'
                            error={validation.cvv}
                            defaultValue={cvv}
                            onChange={handleCvvChange}   />
                    </S.ContainerCardData>
                </S.Container>

                <PaymentDescription />
                <Button type="submit">FINALIZAR O PEDIDO</Button>
            </S.Form>
        </>
    );
};



export default CreditCardForm;