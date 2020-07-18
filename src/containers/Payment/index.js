import React, { useState } from 'react';
import { connect } from "react-redux";
import styled from 'styled-components';
import Button from '../../components/Button';
import CardTotalShipping from '../../components/CardTotalShipping';
import Card from '../../components/Card';
import { setPayment } from '../../actions/payment';
import { routes } from "../Router";
import { push } from "connected-react-router";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #EEE;
    height: 720px;
`

const InputBigger = styled.input`
    box-sizing: border-box;
    height: 45px;
    width: 320px;
    border-radius: 3px;
    background-color: #FFF;
    border: 1px solid #E7E7E7;
    padding-left: 1vh;
    box-shadow: inset 0 1px 2px 0 rgba(0,0,0,0.2);
    font-family: "Helvetica Neue";
    font-size: 16px;
    line-height: 19px;
    ::placeholder {
        color: #E0E7EE;
    }
`

const BoxBigger = styled.div`
    padding: 1vh;
`
const BoxSmaller = styled.div`
    display: flex;
    padding: 1vh;
`

const LabelBigger = styled.label`
    height: 14px;
    width: 129.71px;
    color: #CCC;
    font-family: "Helvetica Neue";
    font-size: 12px;
    font-weight: 700;
    line-height: 14px;
`

const LabelSmaller = styled.label`
    height: 64px;
    width: 160px;
    color: #CCC;
    font-family: "Helvetica Neue";
    font-size: 12px;
    font-weight: 700;
    line-height: 14px;
`

const InputSmaller = styled.input`
  box-sizing: border-box;
  height: 45px;
  width: 140px;
  border-radius: 3px;
  background-color: #FFF;
  border: 1px solid #E7E7E7;
  padding-left: 1vh;
  box-shadow: inset 0 1px 2px 0 rgba(0,0,0,0.2);
  ::placeholder {
        color: #E0E7EE;
    }
`

const PaymentPage = props => {

    const [state, setState] = useState({
        numberCard: "",
        nameCardholder: "",
        validity: "",
        cvv: ""
    })

    const handleFieldChange = (event) => {
        const fieldName = event.target.name
        setState({...state, [fieldName]: event.target.value})
    }

    const onSubmitForm = (event) => {
        event.preventDefault();
        props.setPayment(state);
        props.goToConfirmation();
    }

  return (
    <Container>
        <form onSubmit={onSubmitForm}>
        <Card title="CARTÃO DE CRÉDITO">
                <BoxBigger>
                    <LabelBigger>
                        Número do cartão:
                        <InputBigger 
                            type="text" 
                            name="numberCard"
                            value={state.numberCard} 
                            placeholder="____.____.____.____" 
                            onChange={handleFieldChange}
                            pattern="^[0-9]{4}\.[0-9]{4}\.[0-9]{4}\.[0-9]{4}$"
                            required={true}
                        />
                    </LabelBigger>
                </BoxBigger>
                <BoxBigger>
                    <LabelBigger>
                        Nome do Titular:
                        <InputBigger 
                            type="text"
                            name="nameCardholder" 
                            value={state.nameCardholder} 
                            placeholder="Como no cartão" 
                            /* pattern="^[a-z-A-Z\\s]{3,}$" */
                            onChange={handleFieldChange}
                            required={true}
                        />
                    </LabelBigger>
                </BoxBigger>
                <BoxSmaller>
                    <LabelSmaller>
                        Validade(mês/ano):
                        <InputSmaller 
                            type="text"
                            name="validity" 
                            value={state.validity} 
                            placeholder="__.____" 
                            onChange={handleFieldChange}
                            pattern="^[0-9]{2}\.[0-9]{4}$"
                            required={true}
                        />
                    </LabelSmaller>
                    <LabelSmaller>
                        CVV:
                        <InputSmaller
                            type="text"
                            name="cvv" 
                            value={state.cvv} 
                            placeholder="___" 
                            onChange={handleFieldChange}
                            pattern="^[0-9]{3}$"
                            required={true}
                        />
                    </LabelSmaller>
                </BoxSmaller>
        </Card>
        <CardTotalShipping />
        <Button name="FINALIZAR PEDIDO" isSubmit={true}/>
            </form>
    </Container> 
  )
}

const mapDispatchToProps = dispatch => ({
    setPayment: (payment) => dispatch(setPayment(payment)),
    goToConfirmation: () => dispatch(push(routes.confirmation))
})

export default connect(null, mapDispatchToProps)(PaymentPage)