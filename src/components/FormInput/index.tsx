import React, {InputHTMLAttributes} from 'react';

import * as S from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string,
    mask: string
    error?: {
        isError: boolean,
        errorMessage: string
    }
}

const FormInput: React.FC<InputProps> = ({label, id, name, mask, type, placeholder, error, defaultValue}) => {
    return (
        <S.Container>
            <S.Label htmlFor={id}>{label}</S.Label>    
            <S.Input
                id={id}
                name={name}
                mask={mask}
                type={type} 
                placeholder={placeholder}
                isError={!!error?.isError}
                defaultValue={defaultValue} />
            
            <S.Error isError={!!error?.isError}>{error?.errorMessage}</S.Error>
        </S.Container>
    )
};

export default FormInput;