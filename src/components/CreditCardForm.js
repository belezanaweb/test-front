import React from 'react'
import styled from 'styled-components'

const PaymentForm = styled.div`
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-items: space-around;
    width: 96vw;
    height: 67vw;
    border-radius: 1.15%;
    box-shadow: 1px 1px 5px 0 rgba(0,0,29,0.22);
    padding: 0.7%;
    padding-top: 3%;
`
const ColumnContainer = styled.div`
    display: flex;
    flex-direction: row;  
    justify-content: space-around;
`
const RowContainer = styled.div`
    display: flex;
    flex-direction: column;
` 
const InputName = styled.p`
  color: #CCCC;
  font-family: 'Helvetica Neue';
  font-size: 0.875rem;
  font-weight: bold;
  padding: 1%;
`

const CreditCardFormInput = styled.input`
    width: 90vw;
    height: 10vw;
    font-family: 'Helvetica';
    font-size: 0.875rem;
    font-weight: bold;
    border: 1px solid #E7E7E7;
    margin-bottom: 6%;
    align-self: center;
    border-radius: 1.85%;
    box-shadow: inset 0 1px 2px 0 rgba(0,0,0,0.2);
    ::placeholder{
        color: #E0E7EE;
    }
`
const LowerInputs = styled.input`
    width: 40vw;
    height: 12vw;
    border: 1px solid #E7E7E7;
    font-family: 'Helvetica';
    font-size: 0.875rem;
    font-weight: bold;
    align-self: center;
    border-radius: 1.85%;
    box-shadow: inset 0 1px 2px 0 rgba(0,0,0,0.2);
    ::placeholder{
        color: #E0E7EE;
    }
`
function CreditCardForm() {
    return (
        <div>
            <PaymentForm>
                <InputName>Número do cartão:</InputName>
                <CreditCardFormInput type='text' placeholder='____.____.____.____'></CreditCardFormInput>
                <InputName>Nome do Titular:</InputName>
                <CreditCardFormInput type='text' placeholder='Como no cartão'></CreditCardFormInput>
                <ColumnContainer>
                    <RowContainer>
                        <InputName>Validade(mês/ano):</InputName>
                        <LowerInputs type='number' placeholder='__/____'></LowerInputs>
                    </RowContainer>
                    <RowContainer>
                        <InputName>CVV:</InputName>
                        <LowerInputs type='number' placeholder='___'></LowerInputs>
                    </RowContainer>
                </ColumnContainer>
            </PaymentForm>
        </div>
    )
}

export default CreditCardForm