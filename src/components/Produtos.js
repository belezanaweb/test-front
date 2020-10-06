import React from 'react'
import styled from 'styled-components'


const ComponentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    align-content: space-between;
`
const ComponentContainer = styled.div`
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-items: space-between;
    width: 96vw;
    height: 90vw;
    align-self: center; 
    border-radius: 1.15%;
    box-shadow: 1px 1px 5px 0 rgba(0,0,29,0.22);
`
const ProductWrapper = styled.div`

`
const PageHeader = styled.p`
    color: #9999;
    font-family: "Helvetica Neue";
    font-size: 0.875rem;
    font-weight: bold;
    margin-top: 20px;

    margin-bottom: 5px;
`
function Produtos() {
    return (
        <ComponentWrapper>
            <PageHeader>PRODUTOS</PageHeader>
            <ComponentContainer>
                <ProductWrapper>L'oreal</ProductWrapper>
                <ProductWrapper>Good girl</ProductWrapper>
                <ProductWrapper>Senscience</ProductWrapper>
            </ComponentContainer>
        </ComponentWrapper>
    )
}

export default Produtos