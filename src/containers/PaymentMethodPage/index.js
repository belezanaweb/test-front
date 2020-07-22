import React, {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import { 
    PageContainer,
    MainContainer,
    Text, 
    TextMenu,
    MenuContainer,   
    ButtonConfirmation,
    ButtonConfirmationText,
    Form,
    Label, 
    Input,
    Div
} from './styled';
import TotalAmountContainer from "../../components/TotalContainer";
import { mask, unMask } from "remask";
import Swal from "sweetalert2";

const PaymentMethodPage = (props) => {
    const history = useHistory()
    const [cardNumberValue, setCardNumberValue] = useState('')
    const [nameValue, setNameValue] = useState('')
    const [cvvCodeValue, setCvvCodeValue] = useState('')
    const [expirationDateValue, setExpirationDateValue] = useState('')
   
    const onChangeCardNumber = (event) => {
        const originalValue = unMask(event.target.value)
        const maskedValue = mask(originalValue, ["9999 9999 9999 9999"])
        setCardNumberValue(maskedValue)
    }
    const onChangeName = (event) => {
        setNameValue(event.target.value)
    }    
    const onChangeCvvCode = (event) => {
        const originalValue = unMask(event.target.value)
        const maskedValue = mask(originalValue, ["999"])
        setCvvCodeValue(maskedValue)
    }
    const onChangeExpirationDate = (event) => {
        const originalValue = unMask(event.target.value)
        const maskedValue = mask(originalValue, ["99/9999"])
        setExpirationDateValue(maskedValue)
    } 
        
    const onClickConfirmation = (event) => {
        if(cardNumberValue && nameValue && expirationDateValue && cvvCodeValue !== ""){
            event.preventDefault()
            
            const cardNumber = cardNumberValue;
            const name = nameValue;
            const date = expirationDateValue;
    
            const userPayment = [];
                
            userPayment.push({
                number: cardNumber,
                name: name,
                date: date
            });
     
            localStorage.setItem("@test-front/userPayment", JSON.stringify(userPayment));

            history.push('/confirmation')
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Você deve preencher todos os campos!'            
            })
        }        
    }
    

    return(
        <PageContainer>                 
            <MenuContainer>                
                <TextMenu primary className="bag">SACOLA</TextMenu>                            
                <TextMenu className="payment">PAGAMENTO</TextMenu>
                <TextMenu primary className="confirmation">CONFIRMAÇÂO</TextMenu>
            </MenuContainer>
            <MainContainer>
                <Text>CARTÃO DE CRÉDITO</Text>
                    <Form>
                        <Label className="cardNumber">
                            Número do cartão
                        </Label>
                        <Input 
                            name="cardNumber"
                            type={"text"}
                            className="cardNumber"
                            placeholder={"_ _ _ _ . _ _ _ _ . _ _ _ _ . _ _ _ _"}
                            value={cardNumberValue}
                            onChange={onChangeCardNumber}                        
                            required                                                         
                        /> 
                        <Label className="name">
                            Nome do títular
                        </Label>
                        <Input 
                            name="name"
                            type={"text"}
                            className="name"
                            placeholder={"Como no cartão"}
                            value={nameValue}
                            onChange={onChangeName}
                            pattern="[A-Za-z ãéÁáêõÕÊíÍçÇÚúüÜ]{3,}"
                            required 
                        />
                        <Div>
                        <Label className="expirationDate">
                            Validade (mês/ano)
                        </Label>
                        <Input 
                            name="expirationDate"
                            type={"text"}
                            className="expirationDate" 
                            placeholder={"_ _/_ _ _ _"}
                            value={expirationDateValue}
                            onChange={onChangeExpirationDate}
                            pattern="/^(0?[1-9]|1[0-2])\/(20)?\d{4}$/"
                            required 
                        />
                        <Label className="cvv">
                            CVV
                        </Label>
                        <Input 
                            name="cvv"
                            type={"text"}
                            className="cvv"
                            placeholder={"_ _ _"}
                            value={cvvCodeValue}
                            onChange={onChangeCvvCode}
                            required 
                        />
                        </Div>                   
                    </Form>
                             
                <TotalAmountContainer/>
                <ButtonConfirmation  type="submit" onClick={onClickConfirmation}>
                    <ButtonConfirmationText>
                        FINALIZAR O PEDIDO
                    </ButtonConfirmationText>
                </ButtonConfirmation>
            </MainContainer>                 
        </PageContainer>
    )
}

export default PaymentMethodPage