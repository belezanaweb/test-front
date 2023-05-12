import React, { useEffect, useState } from 'react';
import * as yup from "yup";
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { CreditCardRow, CreditCardWrapper, WrapperDate, WrapperCvv, Label, Input, ErrorMessage } from './credit-card.styled';

type FormProps = {
    cardNumber: string;
    cardName: string;
    expirationDate: string;
    cvv: string;
}

interface CreditCardFormProps {
    onValid: (isValid: boolean) => void;
}

const schema = yup.object({
    cardNumber: yup.string()
        .matches(/^[0-9]{16}$/, "Número do cartão inválido")
        .required("O número do cartão é obrigatório"),
    cardName: yup.string().required("O nome do titular é obrigatório"),
    expirationDate: yup.string()
        .matches(
            /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/,
            "Data de validade inválida"
        )
        .required("A data de validade é obrigatória"),
    cvv: yup.string()
        .matches(/^[0-9]{3}$/, "Código CVV inválido")
        .required("O código CVV é obrigatório"),
});

export const CreditCardForm: React.FC<CreditCardFormProps> = ({ onValid }: CreditCardFormProps) => {
    const { register, handleSubmit, formState: { errors, isValid } } = useForm<FormProps>({ resolver: yupResolver(schema) });
    const onSubmit: SubmitHandler<FormProps> = data => console.log(data);

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
                    type="number"
                    {...register('cardNumber', { required: true })}
                    defaultValue={cardNumber}
                />
                <ErrorMessage>{errors.cardNumber?.message}</ErrorMessage>
            </CreditCardWrapper>

            <CreditCardWrapper>
                <Label htmlFor='cardName'>Nome do titular do cartão</Label>
                <Input
                    type="text"
                    {...register('cardName', { required: true })}
                    defaultValue={cardName}
                />
                <ErrorMessage>{errors.cardName?.message}</ErrorMessage>
            </CreditCardWrapper>

            <CreditCardRow>
                <WrapperDate>
                    <Label htmlFor='expirationDate'>Data de validade</Label>
                    <Input
                        type="number"
                        {...register('expirationDate', { required: true })}
                        defaultValue={expirationDate}
                    />
                    <ErrorMessage>{errors.expirationDate?.message}</ErrorMessage>
                </WrapperDate>
                <WrapperCvv>
                    <Label htmlFor='cvv'>Código CVV:</Label>
                    <Input
                        type="number"
                        {...register('cvv', { required: true })}
                        defaultValue={cvv}
                    />
                    <ErrorMessage>{errors.cvv?.message}</ErrorMessage>
                </WrapperCvv>
            </CreditCardRow>
        </form>
    );
};