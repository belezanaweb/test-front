import React from 'react'
import styled from 'styled-components'

const NextStepButton = styled.button`
    width: 96vw;
    height: 15vw;
    background-color: #FF6C00;
    box-shadow: inset 0 -3px 0 0 #D45A00, 0 2px 4px 0 rgba(0,0,0,0.25);
    color: #FFFFFF;
    text-align: center;
    margin-top: 20px;
    border: none;
    margin-bottom: 5vw;
    font-size: 1.25rem;
    font-weight: bold;
`
function ButtonComponent(props) {
    return(
            <NextStepButton>{props.texto}</NextStepButton>   
    )
}

export default ButtonComponent