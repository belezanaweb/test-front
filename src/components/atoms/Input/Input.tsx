import React from "react";
import * as Styles from './Input.styles'
import {
    FieldValues,
    UseFormRegister
} from "react-hook-form";

export const inputErrors = {
    required: 'Campo requerido',
    invalid: 'Campo inválido'
}

export interface InputProps {
    id: string;
    label: string;
    maxLength: number;
    placeholder: string;
    patterValidator: RegExp;
    register: UseFormRegister<FieldValues>;
    handlerInputValidator?: (event: string) => string | void;
    error?: string | undefined;
}

export const Input: React.FC<InputProps> = ({ id, label, patterValidator, error, maxLength, placeholder, handlerInputValidator, register, ...rest }) => {
    return (
        <Styles.Container>
            <Styles.Label htmlFor={id}>{label}</Styles.Label>
            <Styles.Input
                type="text"
                hasError={!!error}
                maxLength={maxLength}
                id={id}
                placeholder={placeholder}
                {...register(id, {
                    required: {
                        value: true,
                        message: inputErrors.required
                    },
                    maxLength: {
                        value: maxLength,
                        message: inputErrors.invalid
                    },
                    pattern: {
                        value: patterValidator,
                        message: inputErrors.invalid
                    }, onChange(e) {
                        if (handlerInputValidator)
                            e.target.value = handlerInputValidator(e.target.value)
                    },
                })} {...rest} />
            {error && <Styles.InputError>{error}</Styles.InputError>}
        </Styles.Container>
    );
};

export default Input;