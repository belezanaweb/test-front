import React, { FormEvent, useState } from 'react';
import styled from 'styled-components';
import Title from '../title';

import PaymentDescription from '../../components/payment-description';

import Button from '../button';
import FormInput from '../FormInput';

import { isNumberValid, isNameValid, isDateValid, isCVVValid } from '../../services/payment/helpers'
import { useCreditCard } from '../../services/payment/hooks';
import { useNavigate } from 'react-router-dom';

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

        const formData = new FormData(event.currentTarget);

        if (!formData) {
            return
        }
        const number = isNumberValid(formData?.get("number") as string);
        const name =  isNameValid(formData.get("name") as string);
        const date = isDateValid(formData.get("date") as string)
        const cvv = isCVVValid(formData.get("cvv") as string);

        hasFormError = number.isError || name.isError || date.isError || cvv.isError

        setValidation({   
            number,
            name,
            date,
            cvv
        });

        if (!hasFormError) {
            setCreditCard({   
                number: formData?.get("number"),
                name: formData?.get("name") ,
                date: formData?.get("date"),
                cvv: formData?.get("cvv")
            })
            navigate("/confirmation")
        }
    }
    return (
        <>
            <Title>CARTÃO DE CRÉDITO</Title>
            <Form onSubmit={handlerOnSubmit}>
            <Container>
                <FormInput
                    label="Número do cartão:"
                    name="number"
                    mask="9999.9999.9999.9999"
                    type="text" 
                    placeholder='____.____.____.____'
                    error={validation.number}
                    defaultValue={creditCard.number} />
                <FormInput
                    label="Nome do Titular:"
                    name="name"
                    mask=""
                    type="text" 
                    placeholder='Como no cartão'
                    error={validation.name}
                    defaultValue={creditCard.name}  />
                <ContainerCardData>
                    <FormInput
                        label="Validade (mês/ano):"
                        name="date"
                        mask="99/9999"
                        type="text" 
                        placeholder='__/____'
                        error={validation.date}
                        defaultValue={creditCard.date} />
                    <FormInput
                        label="CVV:"
                        name="cvv"
                        mask="999"
                        type="text" 
                        placeholder='___'
                        error={validation.cvv}
                        defaultValue={creditCard.cvv}  />
                </ContainerCardData>
            </Container>

            <PaymentDescription />
            <Button>FINALIZAR O PEDIDO</Button>
            </Form>
        </>
    );
};


const Form = styled.form`
`

const Container = styled.div`
  border-radius: 3px;
  background-color: #FFF;
  box-shadow: 1px 1px 5px 0 rgba(0,0,29,0.22);
  padding: 10px;
  margin: 0 0 20px;
`;

const ContainerCardData = styled.div`
  display: flex;
  justify-content: space-between;
  
  div:nth-child(1) {
    width: 53.3%;
    margin: 0 20px 0 0;
  }

  div:nth-child(2) {
    width: 46.7%;
  }

`;

export default CreditCardForm;