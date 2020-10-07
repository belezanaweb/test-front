import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/StepsNavbar.js'
import Produtos from '../components/Produtos'
import Resumo from '../components/Resumo'

const ConfirmCreditCardContainer = styled.div`
    background-color: #FFFFFF;
    border: 1px solid green;
`
const ConfirmContainer = styled.div`
    border: 1px solid orange;
`
function Confirmacao(){
    return (
        <div>
             <Navbar/>
            <ConfirmContainer>
                Compra efetuada com sucesso
            </ConfirmContainer>
            <ConfirmCreditCardContainer>
                <p>PAGAMENTO</p>
            </ConfirmCreditCardContainer>
            <Produtos/>
            <Resumo/>
        </div>
    )
}

export default Confirmacao