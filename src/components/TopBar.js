import React from 'react'; 
import styled from 'styled-components'; 

const Wrapper = styled.div`
    height: 9vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: 1px solid #d3d3d4 ;
`

const Button = styled.button`
    padding: 0;
    margin: 0;
    height: 16px;
    width: 101px;
    color: #CCC;
    font-size: 13px;
    font-weight: 700;
    line-height: 16px;
    text-align: center;
    background-color: #FFF;
    border: none;
`

export default function TopBar(props) {
    return (
        <Wrapper>
            <Button>
               SACOLA 
            </Button>
            <Button>
               PAGAMENTO
            </Button>
            <Button>
               CONFIRMAR 
            </Button>
        </Wrapper>
    )
}