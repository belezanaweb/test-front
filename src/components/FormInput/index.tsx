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
    font-size: ${({theme}) => theme.fontSizes.small};
    font-weight: 700;
    line-height: 14px;
    display: block;
    margin: 0 0 5px;
`;

const InputUI = styled(InputMask)<ErrorProps>`
    box-sizing: border-box;
    border-radius: ${({theme}) => theme.border.radius};
    background-color: #FFF;
    box-shadow: ${({theme}) => theme.input.boxShadow};
    display: block;
    width: 100%;
    height: 45px;
    line-height: 45px;
    padding: 0 13px;
    color: #212121;
    font-size: ${({theme}) => theme.fontSizes.large};
    ${props => (props.isError ? `border: 1px solid #F30;` : `border: 1px solid #E7E7E7;`)};
    ::placeholder {
      color: ${({theme}) => theme.colors.placeholder};
      font-size: ${({theme}) => theme.fontSizes.large};
      letter-spacing: 1.37px;
      line-height: 19px;
    }

    &:focus {
      ${({theme}) => `border: 1px solid ${theme.input.borderFocus}`};
    }

`;

const Error = styled.span<ErrorProps>`
    color: #F30;
    font-size: ${({theme}) => theme.fontSizes.small};
    margin: 3px 0 0;
    ${props => (props.isError ? `display: block` : `display: none`)};
`

export default FormInput;