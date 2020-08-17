import React, {useState}  from 'react'
import { Title, Section } from "../styles"
import {ButtonConfirmation, FormPay, InputForm, LabelForm, DivForm, FormBack, Span} from "./styles"
import Total from"../Total"
import { useHistory } from "react-router-dom";



const Payment = () => {  
 
const history = useHistory();
const messageButton = 'Finalizar o pedido';
const [cardNumber, setCardNumber]=useState('');
const [nameCard, setNameCard]= useState('');
const [expiry, setExpiry]=useState('');
const [cvvNumber, setCvvNumber]=useState('');

const[cardNumberInValid, setcardNumberInValid]=useState("");
const[nameCardInValid, setnameCardInValid]=useState("");
const[expiryInValid, setexpiryInValid]=useState("");
const[cvvNumberInValid, setcvvNumberInValid]=useState("");

function maskCard(numero){
    const textoAtual = cardNumber;
    const correct = textoAtual.length === 16;
    let newNumber;
        if(correct) {
        const part1 = textoAtual.slice(0,4)
        const part2 = textoAtual.slice(4,8)
        const part3 = textoAtual.slice(8,12)
        const part4 = textoAtual.slice(12,16)
        newNumber = `${part1}.${part2}.${part3}.${part4}`;
        } else {
          
        }
    return newNumber;
}
function maskExpiry(numero){
  const textoAtual = expiry;
  const correct = textoAtual.length === 6;
  let newNumber;
      if(correct) {
      const part1 = textoAtual.slice(0,2)
      const part2 = textoAtual.slice(2,6)
      
      newNumber = `${part1}/${part2}`;
      } else {
        
      }
  return newNumber;
}


function handleConfirmation(e){
    
  e.preventDefault();
  history.push(`/confirmation/${cardNumber.replace(/\b(?:\d{4}[ -]?){3}(?=\d{4}\b)/gm, "****.****.****.")},${expiry},${nameCard}`);
}

  return (
    <Section>
      
      <Title>
        Cartão de Crédito
      </Title>
   
      <FormPay onSubmit={handleConfirmation}>  
      
      <FormBack>
        <LabelForm htmlFor="number">Número do cartão:</LabelForm>
        <InputForm         
        required                
        name="cardnumber"
        type="text" 
        minLength="16" 
        maxLength="16"        
        placeholder="____.____.____.____" value={maskCard(cardNumber)} onChange={(e) => {
          setCardNumber(e.target.value)
          if(cardNumber === "" || cardNumber.length <15){
            setcardNumberInValid("campo inválido")}
            else{
              setcardNumberInValid('');
            }                                 
            }}/>
            <Span>{cardNumberInValid}</Span>
            
           
        <LabelForm htmlFor="number">Nome do Titular:</LabelForm>     
        <InputForm       
         required 
        minLength="3" 
        type="text"         
        placeholder="Como no cartão" 
        value={nameCard} onChange={(e) => {
                        setNameCard(e.target.value)
                        if(nameCard === "" || cardNumber.length <3){
                          setnameCardInValid("campo inválido")}
                          else{
                            setnameCardInValid('');
                          }                 
            }}
            />
             <Span>{nameCardInValid}</Span>
        <DivForm>
        <LabelForm htmlFor="number">Validade (mês/ano):</LabelForm>
        <LabelForm htmlFor="number">CVV:</LabelForm>
         
        </DivForm>
        <DivForm>
        
        <InputForm 
        minLength="6" 
        required 
        maxLength="6" 
        type="text" 
        placeholder="__/____" value={maskExpiry(expiry)} onChange={(e) => {
              setExpiry(e.target.value)
              if(expiry === "" || expiry.length <5){
                setexpiryInValid("campo inválido")}
                else{
                  setexpiryInValid('');
                }             
         
            }}/>
             
        <InputForm 
        required 
        minLength="3" 
        maxLength="3" 
        pattern="[0-9]+$" 
        placeholder="___" value={cvvNumber} onChange={(e) => {          
              setCvvNumber(e.target.value)
              if(cvvNumber === "" || cvvNumber.length < 2){
                setcvvNumberInValid("campo inválido")}
                else{
                  setcvvNumberInValid('');
                }                 
          }}/>         
           <Span>{expiryInValid}</Span>
           <Span>{cvvNumberInValid}</Span>
        </DivForm>    
        </FormBack>
        
      <Section>  
            <Total />          
            <ButtonConfirmation path={"/confirmation"} type="submit" on>
              <p>{messageButton}</p>
            </ButtonConfirmation>
            
      </Section>
      
      </FormPay>
     
 
    
    </Section>
  )
}

  

export default Payment
