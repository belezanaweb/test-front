import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/StepsNavbar.js'
import CreditCardForm from '../components/CreditCardForm'
import Resumo from '../components/Resumo'
import ButtonComponent from '../components/ButtonComponent.js'


const ComponentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: space-between;
`

const PageHeader = styled.p`
    color: #9999;
    font-family: "Helvetica Neue";
    font-size: 0.875rem;
    font-weight: bold;
    margin-top: 20px;
    margin-left: -200px;
    margin-bottom: 5px;
`

function Pagamento(){
    return (
        <ComponentWrapper>
             <Navbar/>
             <PageHeader>CARTÃO DE CRÉDITO</PageHeader>
             <CreditCardForm/>
             <Resumo/>
            <ButtonComponent texto='FINALIZAR O PEDIDO'/>
        </ComponentWrapper>
    )
}

export default Pagamento