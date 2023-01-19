import React, {InputHTMLAttributes} from 'react';

import styled from 'styled-components';
import InputMask from "react-input-mask";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string,
    mask: string
    error?: {
        isError: boolean,
        errorMessage: string
    }
}
interface ErrorProps {
    isError: boolean
}
const FormInput: React.FC<InputProps> = ({label, id, name, mask, type, placeholder, error, defaultValue}) => {
    return (
        <Container>
            <Label htmlFor={id}>{label}</Label>    
            <InputUI
                id={id}
                name={name}
                mask={mask}
                type={type} 
                placeholder={placeholder}
                isError={!!error?.isError}
                defaultValue={defaultValue} />
            
            <Error isError={!!error?.isError}>{error?.errorMessage}</Error>
        </Container>
    )
};

const Container = styled.div`
    margin: 0 0 25px;
`;
const Label = styled.label`
    color: #CCC;
    font-size: 12px;
    font-weight: 700;
    line-height: 14px;
    display: block;
    margin: 0 0 5px;
`;

const InputUI = styled(InputMask)<ErrorProps>`
    box-sizing: border-box;
    border-radius: 3px;
    background-color: #FFF;
    box-shadow: inset 0 1px 2px 0 rgba(0,0,0,0.2)
    display: block;
    width: 100%;
    height: 45px;
    line-height: 45px;
    padding: 0 13px;
    color: #212121;
    font-size: 16px;
    font-family: "Helvetica Neue";
    ${props => (props.isError ? `  border: 1px solid #F30;
    ` : `border: 1px solid #E7E7E7;`)};
    ::placeholder {
      color: #E0E7EE;
      font-size: 16px;
      letter-spacing: 1.37px;
      line-height: 19px;
    }

    &:focus {
      border: 1px solid #A43287;
    }

`;

const Error = styled.span<ErrorProps>`
    color: #F30;
    font-size: 12px;
    margin: 3px 0 0;
    ${props => (props.isError ? `display: block` : `display: none`)};
`

export default FormInput;