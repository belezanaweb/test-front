import React from 'react'; 
import styled from 'styled-components'; 

const Buttons = styled.button`
    height: 60px;
    width: 341px;
    border-radius: 3px;
    background-color: #FF6C00;
    box-shadow: inset 0 -3px 0 0 #D45A00, 0 2px 4px 0 rgba(0,0,0,0.25);
    margin-top: 3.5vh;
`
const Name = styled.div`
    height: 24px;
    /* width: 339px; */
    color: #FFF;
    font-family: "Helvetica Neue";
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0.5px;
    line-height: 24px;
    text-align: center;
`

const Button = (props) => {
    return (
        <Buttons>
            <Name>
                {props.children}
            </Name>
        </Buttons>
    )
}

export default Button;