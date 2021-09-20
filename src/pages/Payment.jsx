import React, { useState, useContext } from 'react'

import { ValidationsCreditCard } from '../contexts/ValidationsCreditCard'
import { useErros } from '../hooks/useErros'
import { ActiveTextStatusBar, StatusBar, TextStatusBar } from '../styles/StatusBar/StatusBar'
import {
  ButtonPaymentStyled,
  MainContainer,
  MainSubContainer,
  Box,
  DivInputs,
  Helper,
  InputForm,
  InputsSplit,
  InsideSplitInputs,
  LabelInput,
  LabelInsideSplitInputs,
  SplitInputs,
  TitleCartStyled
} from '../styles/Payment/PaymentsItens'
import SubTotal from '../components/SubTotal/SubTotal'

export default function Payment({ sendDatas, dataEndPoint }) {
  const [name, setName] = useState('')
  const [cardNumber, setCpf] = useState('')
  const [validity, setValidity] = useState('')
  const [cvv, setCvv] = useState('')
  const validations = useContext(ValidationsCreditCard)
  const [erros, validateInput, formIsValid] = useErros(validations)

  return (
    <>
      <StatusBar>
        <TextStatusBar>Sacola</TextStatusBar>
        <ActiveTextStatusBar>Pagamento</ActiveTextStatusBar>
        <TextStatusBar>Confirmação</TextStatusBar>
      </StatusBar>
      <MainContainer>
        <MainSubContainer>
          <form
            onSubmit={(event) => {
              event.preventDefault()
              if (formIsValid()) {
                sendDatas({ name, cardNumber, validity, cvv })
                console.log(dataEndPoint)
              }
            }}
          >
            <TitleCartStyled>CARTÃO DE CRÉDITO</TitleCartStyled>
            <Box>
              <DivInputs>
                <LabelInput>Número do cartão</LabelInput>
                <InputForm
                  value={cardNumber}
                  onChange={(event) => {
                    setCpf(event.target.value)
                  }}
                  onBlur={validateInput}
                  error={!erros.cardNumber.valid}
                  id="cardNumber"
                  name="cardNumber"
                  required
                  placeholder="_ _ _ _ . _ _ _ _ . _ _ _ _ . _ _ _ _"
                />
                <Helper>{erros.cardNumber.texto}</Helper>
              </DivInputs>

              <DivInputs>
                <LabelInput>Nome do Titular</LabelInput>
                <InputForm
                  value={name}
                  onChange={(event) => {
                    setName(event.target.value)
                  }}
                  id="name"
                  type="text"
                  placeholder="Como no cartão"
                  required
                />
              </DivInputs>
              <SplitInputs>
                <InsideSplitInputs>
                  <LabelInsideSplitInputs>
                    Validade (mês/ano)
                    <InputsSplit
                      value={validity}
                      onChange={(event) => {
                        setValidity(event.target.value)
                      }}
                      id="validity"
                      type="date"
                      required
                    />
                  </LabelInsideSplitInputs>
                </InsideSplitInputs>
                <InsideSplitInputs>
                  <LabelInsideSplitInputs>
                    CVV
                    <InputsSplit
                      name="cvv"
                      value={cvv}
                      onChange={(event) => {
                        setCvv(event.target.value)
                      }}
                      onBlur={validateInput}
                      error={!erros.cvv.valid}
                      id="cvv"
                      maxLength="3"
                      required
                    />
                  </LabelInsideSplitInputs>
                  <Helper>{erros.cvv.texto}</Helper>
                </InsideSplitInputs>
              </SplitInputs>
            </Box>
            <br />
            <SubTotal dataEndPoint={dataEndPoint} />
            <ButtonPaymentStyled type="submit">Finalizar Pedido</ButtonPaymentStyled>
          </form>
        </MainSubContainer>
      </MainContainer>
    </>
  )
}
