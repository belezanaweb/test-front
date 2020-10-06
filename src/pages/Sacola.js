import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/StepsNavbar.js'
import Produtos from '../components/Produtos'
import Resumo from '../components/Resumo'
import ButtonComponent from '../components/ButtonComponent'

const ComponentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: space-between;
`
function Sacola(){
    return (
        <ComponentWrapper>
            <Navbar/>
            <Produtos/>
            <Resumo/>
            <ButtonComponent texto='SEGUIR PARA O PAGAMENTO'/>
        </ComponentWrapper>
    )
}

export default Sacola