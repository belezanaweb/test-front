import React from 'react'
import Main from './components/Main'
import { ValidationsCreditCard } from './contexts/ValidationsCreditCard'
import { validateCreditCard, validateCreditCardCVV } from './models/creditCard'
import { MainContainer } from './styles/global/Container'

export default function App() {
  return (
    <>
      <MainContainer>
        <ValidationsCreditCard.Provider
          value={{ cardNumber: validateCreditCard, cvv: validateCreditCardCVV }}
        >
          <Main sendDatas={sendFormData} />
        </ValidationsCreditCard.Provider>
      </MainContainer>
    </>
  )
}

function sendFormData(dados) {
  // console.log(dados);
}
