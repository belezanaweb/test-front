import React, { useEffect, useState } from 'react';
import * as yup from "yup";
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { CreditCardRow, CreditCardWrapper, WrapperDate, WrapperCvv, Label, Input, ErrorMessage } from './credit-card.styled';
import { withHookFormMask } from 'use-mask-input';

export type FormProps = {
    cardNumber: string;
    cardName: string;
    expirationDate: string;
    cvv: string;
}

interface CreditCardFormProps {
    onValid: (isValid: boolean) => void;
    onSend: (data: FormProps) => void;
}

const schema = yup.object({
    cardNumber: yup.string()
        .matches(/^(\d{4}\s){3}\d{4}$/, "insira um número de cartão válido")
        .required("O número do cartão é obrigatório"),
    cardName: yup.string().required("O nome do titular é obrigatório"),
    expirationDate: yup.string()
        .matches(
            /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/,
            "insira uma data válida"
        )
        .required("A data de validade é obrigatória"),
    cvv: yup.string()
        .matches(/^[0-9]{3}$/, "insira um cvv válido")
        .required("O código CVV é obrigatório"),
});

export const CreditCardForm: React.FC<CreditCardFormProps> = ({ onValid, onSend }: CreditCardFormProps) => {
    const { register, handleSubmit, formState: { errors, isValid } } = useForm<FormProps>({ resolver: yupResolver(schema) });
    const onSubmit: SubmitHandler<FormProps> = data => onSend(data);

    const [cardName] = useState('');
    const [cardNumber] = useState('');
    const [expirationDate] = useState('');
    const [cvv] = useState('');

    useEffect(() => {
        onValid(isValid);
    }, [isValid]);

    return (
        <form id='credit-cart-form' onSubmit={handleSubmit(onSubmit)}>
            <CreditCardWrapper>
                <Label htmlFor='cardNumber'>Número</Label>
                <Input
                    {...withHookFormMask(register('cardNumber'), ['9999 9999 9999 9999', '9999 9999 9999 9999'], { required: true })}
                    defaultValue={cardNumber}
                    placeholder='0000 0000 0000 0000'
                />
                <ErrorMessage>{errors.cardNumber?.message}</ErrorMessage>
            </CreditCardWrapper>

            <CreditCardWrapper>
                <Label htmlFor='cardName'>Nome do titular do cartão</Label>
                <Input
                    type="text"
                    {...register('cardName', { required: true })}
                    defaultValue={cardName}
                    placeholder='Nome impresso no cartão'
                />
                <ErrorMessage>{errors.cardName?.message}</ErrorMessage>
            </CreditCardWrapper>

            <CreditCardRow>
                <WrapperDate>
                    <Label htmlFor='expirationDate'>Data de validade</Label>
                    <Input
                        {...withHookFormMask(register('expirationDate'), ['99/99', '99/99'], { required: true })}
                        defaultValue={expirationDate}
                        placeholder='MM/AA'
                    />
                    <ErrorMessage>{errors.expirationDate?.message}</ErrorMessage>
                </WrapperDate>
                <WrapperCvv>
                    <Label htmlFor='cvv'>Código CVV:</Label>
                    <Input
                        {...withHookFormMask(register('cvv'), ['999', '999'], { required: true })}
                        defaultValue={cvv}
                        placeholder='000'
                    />
                    <ErrorMessage>{errors.cvv?.message}</ErrorMessage>
                </WrapperCvv>
            </CreditCardRow>
        </form>
    );
};