import React, { useRef, useState } from 'react';
import CardValidator from 'card-validator';

import { CreditCardFormCSS } from '../styles';

function CreditCardForm({ setValidForm }){

  const { Container, Form, FormGroup, FormGroupFlex, Label, FormField } = CreditCardFormCSS;
  const creditRef = useRef();
  const nameRef = useRef();
  const dateRef = useRef();
  const cvvRef = useRef();
  const [cardStatus, setCardStatus] = useState('initial');
  const [dateStatus, setDateStatus] = useState('initial');
  const [cvvStatus, setCVVStatus]   = useState('initial');
  const [nameStatus, setNameStatus] = useState('initial');

  const CreditCardChange = () => {
    let { value } = creditRef.current;

    if(value === ""){
      setCardStatus('initial');
    } else {
      if(CardValidator.number(value).isPotentiallyValid){
        setCardStatus('valid');
      } else {
        setCardStatus('error');
      }
    }
  }

  const DateChange = () => {
    let { value } = dateRef.current;

    if(value === ""){
      setDateStatus('initial');
    } else {
      if(value.match(/(0[1-9]|10|11|12)\/20[0-9]{2}$/)){
        setDateStatus('valid');
      } else {
        setDateStatus('error');
      }
    }
  }

  const CVVChange = () => {
    let { value } = cvvRef.current;
    if(value === ""){
      setCVVStatus('initial');
    } else {
      if(value.match(/[0-9]{3,4}$/)){
        setCVVStatus('valid');
      } else {
        setCVVStatus('error');
      }
    }
  }

  const NameChange = () => {
    let { value } = nameRef.current;
    if(value === ""){
      setNameStatus('initial');
    } else {
      if(value !== "" && value.length > 5){
        setNameStatus('valid');
      } else {
        setNameStatus('error');
      }
    }
  }

  const validateForm = () => {

    if(
      cardStatus === "valid" &&
      nameStatus === "valid" &&
      dateStatus === "valid" &&
      cvvStatus  === "valid"
    ){
      const cardInfo = {
        last: creditRef.current.value.replace(/.(?=.{4,}$)/g, '*'),
        date: dateRef.current.value,
        name: nameRef.current.value
      }
      sessionStorage.setItem('bnwnumber',JSON.stringify(cardInfo));
      setValidForm(true);
    } else {
      setValidForm(false);
    }
  }

  return(
    <Container>
      <Form>
        <FormGroup className={cardStatus}>
          <Label htmlFor="card-number">Número do cartão:</Label>
          <FormField
            name="card-number"
            type="text"
            placeholder="____.____.____.____"
            ref={creditRef}
            maxLength={20}
            onChange={CreditCardChange}
          />
        </FormGroup>

        <FormGroup className={nameStatus}>
          <Label htmlFor="name">Nome do Titular:</Label>
          <FormField
            name="name"
            placeholder="Como no cartão"
            ref={nameRef}
            onChange={NameChange}
            onKeyUp={validateForm}
          />
        </FormGroup>

          <FormGroupFlex>
              <FormGroup className={dateStatus}>
                <Label htmlFor="date">Validade (mês/ano):</Label>
                <FormField
                  name="date"
                  placeholder="__/____"
                  ref={dateRef}
                  maxLength={7}
                  onChange={DateChange}
                  onKeyUp={validateForm}
                />
              </FormGroup>

              <FormGroup className={cvvStatus}>
                <Label htmlFor="cvv">CVV:</Label>
                <FormField
                  name="cvv"
                  placeholder="____"
                  maxLength={4}
                  ref={cvvRef}
                  onChange={CVVChange}
                  onKeyUp={validateForm}
                />
              </FormGroup>
          </FormGroupFlex>
      </Form>
    </Container>
  )
}

export default CreditCardForm;