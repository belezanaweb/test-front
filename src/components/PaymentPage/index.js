import React from "react";
import { useHistory } from "react-router-dom";

import { InputCardContainer, InputLabel, Input, InputExpirationDate, InputCode, InputLabelWrapper, 
         ExpirationAndCodeWrapper, ErrorContainer, ErrorMessage } from "./styles";
import { MainContainer, Header, SelectedHeaderText, HeaderText, Body, Heading, CardContainer, Button } from "../../layout/globalstyles";
import TotalPurchasePriceCard from "../TotalPurchasePriceCard"

import { useForm } from "../../hooks/useForm";
import  validatePayment from "../../functions/validatePayment"

import { PaymentInfoContext } from "../../contexts/PaymentInfoContext.js";

const PaymentPage = (props) => {
    const history = useHistory();
    const { values, handleChange, handleSubmit, errors } = useForm(submit, validatePayment);
    const { handleContextForm } = props;

    const changePage = (page) =>  { history.push(page) }

    const maskedDigits = values.creditCard.slice(0, 15).replace(/[0-9]/g, "*") + values.creditCard.slice(15, 19);
    const paymentInfo = { 
        creditCard: maskedDigits, 
        name: values.name, 
        expirationDate: values.expirationDate, 
        securityCode: values.securityCode
    };

    function submit() {
        handleContextForm(paymentInfo); 
        changePage("/success")
    };

     return(
        <PaymentInfoContext.Provider value={values}>
            <MainContainer>
                <Header>
                    <HeaderText testId="header" onClick={() => changePage("/cart")}>SACOLA</HeaderText>
                    <SelectedHeaderText>PAGAMENTO</SelectedHeaderText>
                    <HeaderText>CONFIRMAÇÃO</HeaderText>
                </Header>
                <form noValidate onSubmit={handleSubmit}>
                    <Body>
                    <Heading>CARTÃO DE CRÉDITO</Heading>
                        <CardContainer>
                            <InputCardContainer>
                                <InputLabel htmlFor="creditCard">Número do cartão:</InputLabel>
                                    <Input 
                                        name="creditCard"
                                        id="creditCard"
                                        value={values.creditCard}
                                        type="text"
                                        minLength="19"
                                        maxLength="19"
                                        onChange={handleChange}
                                        required
                                    />
                                    <ErrorContainer>
                                    {errors.creditCard && <ErrorMessage>{errors.creditCard}</ErrorMessage>}
                                    </ErrorContainer>
                                <InputLabel htmlFor="name">Nome do titular:</InputLabel>
                                    <Input
                                        name="name"
                                        id="name"
                                        value={values.name}
                                        type="text"
                                        onChange={handleChange}
                                        required
                                    />
                                    <ErrorContainer>
                                    {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
                                    </ErrorContainer>
                                <InputLabelWrapper>
                                    <InputLabel htmlFor="expirationDate">Validade (mês/ano):</InputLabel>
                                    <InputLabel htmlFor="securityCode">CVV:</InputLabel>
                                </InputLabelWrapper>
                                <ExpirationAndCodeWrapper>
                                    <InputExpirationDate 
                                        name="expirationDate"
                                        id="expirationDate"
                                        value={values.expirationDate}
                                        type="text"
                                        minLength="7"
                                        maxLength="7"
                                        onChange={handleChange}
                                        required
                                    />
                                    <InputCode
                                        name="securityCode"
                                        id="securityCode"
                                        value={values.securityCode}
                                        type="text"
                                        minLength="3"
                                        maxLength="3"
                                        onChange={handleChange}
                                        required
                                    />
                                </ExpirationAndCodeWrapper>
                                <ErrorContainer>
                                    {errors.expirationDate && <ErrorMessage>{errors.expirationDate}</ErrorMessage>}
                                    {errors.securityCode && <ErrorMessage>{errors.securityCode}</ErrorMessage>}
                                </ErrorContainer>
                            </InputCardContainer>
                        </CardContainer>
                        <TotalPurchasePriceCard/>
                        <Button type="submit">FINALIZAR O PEDIDO</Button>
                    </Body>
                </form>
            </MainContainer>
        </PaymentInfoContext.Provider>
     )
}

export default PaymentPage;