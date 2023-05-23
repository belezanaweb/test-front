import { useFormContext } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import { ContainerCardInputPayment, ContainerErrorMessage, ContainerField, HeaderInputPayment, Input, Label } from "./CardInputPayment.style";

export default function cardInputPayment() {
  const { register, formState: { errors } } = useFormContext();
  return (
    <ContainerCardInputPayment>
      <HeaderInputPayment>Cartâo de Crédito</HeaderInputPayment>
      <div>
        <ContainerField>
          <Label htmlFor='numberCard' >Número</Label>
          <Input {...register('numberCard', {
            required: "insira um número de cartão válido",
            maxLength: {
              value: 16,
              message: "O número do cartão tem 16 caractes."
            },
            minLength: {
              value: 16,
              message: "O número do cartão tem 16 caractes."
            },
            pattern:{
              value: /^(0|[1-9]\d*)(\.\d+)?$/,
              message: 'Campo deve conter apenas números'
           },
          })} id='numberCard' type='text' placeholder="0000 0000 0000 0000" />
          <ContainerErrorMessage>
            <ErrorMessage errors={errors} name="numberCard" />
          </ContainerErrorMessage>
        </ContainerField>
        <ContainerField>
          <Label htmlFor='name' >Nome do titular do cartão</Label>
          <Input {...register('name', { required: "insira um nome válido" })}
            id='name' type='text' placeholder="Nome impresso no cartão" />
          <ContainerErrorMessage>
            <ErrorMessage errors={errors} name="name" />
          </ContainerErrorMessage>
        </ContainerField>
        <ContainerField>
          <Label htmlFor='birthDate' >Data de validade</Label>
          <Input {...register('birthDate', { 
            required: "insira uma data válida",
            maxLength: {
              value: 7,
              message: "A data deve ter 7 caracteres."
            },
            minLength: {
              value: 7,
              message: "A data deve ter 7 caracteres."
            },
            pattern:{
              value: /(0[1-9]|10|11|12)\/20[0-9]{2}$/,
              message: "insira uma data válida"
           },
          
            })}
            id='birthDate' type='text' placeholder="MM/AAAA" />
          <ContainerErrorMessage>
            <ErrorMessage errors={errors} name="birthDate" />
          </ContainerErrorMessage>
        </ContainerField>
        <ContainerField>
          <Label htmlFor='code' >Código CVV:</Label>
          <Input {...register('code', { 
            required: "insira um cvv válido",
            maxLength: {
              value: 3,
              message: "O código CVV é um número de 3 caracteres."
            }, 
            minLength: {
              value: 3,
              message: "O código CVV é um número de 3 caracteres."
            },
            pattern:{
              value: /^(0|[1-9]\d*)(\.\d+)?$/,
              message: 'Campo deve conter apenas números'
           },
          })}
            id='code' type='text' placeholder="000" />
          <ContainerErrorMessage>
            <ErrorMessage errors={errors} name="code" />
          </ContainerErrorMessage>
        </ContainerField>
      </div>
    </ContainerCardInputPayment>
  )
}