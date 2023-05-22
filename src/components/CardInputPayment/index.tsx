import { useFormContext } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import { ContainerErrorMessage, Input, Label } from "./CardInputPayment.style";

export default function cardInputPayment() {
  const { register, formState: { errors } } = useFormContext();
  return (
    <div>
      <div>Cartâo de Crédito</div>
      <div>
        <div>
          <Label htmlFor='numberCard' placeholder="0000 0000 0000 0000">Número</Label>
          <Input {...register('numberCard', {
            required: "insira um número de cartão válido",
            maxLength: {
              value: 16,
              message: "O número do cartão tem 16 caractes."
            }
          })} id='numberCard' type='text' />
          <ContainerErrorMessage>
            <ErrorMessage errors={errors} name="numberCard" />
          </ContainerErrorMessage>
        </div>
        <div>
          <Label htmlFor='name' placeholder="Nome impresso no cartão">Nome do titular do cartão</Label>
          <Input {...register('name', { required: "insira um nome válido" })} id='name' type='text' />
          <ContainerErrorMessage>
            <ErrorMessage errors={errors} name="name" />
          </ContainerErrorMessage>
        </div>
        <div>
          <Label htmlFor='birthDate' placeholder="Nome impresso no cartão">Data de validade</Label>
          <Input {...register('birthDate', { required: "insira uma data válida" })} id='birthDate' type='text' />
          <ContainerErrorMessage>
            <ErrorMessage errors={errors} name="birthDate" />
          </ContainerErrorMessage>
        </div>
        <div>
          <Label htmlFor='code' placeholder="000">Código CVV:</Label>
          <Input {...register('code', { required: "insira um cvv válido" })} id='code' type='text' />
          <ContainerErrorMessage>
            <ErrorMessage errors={errors} name="code" />
          </ContainerErrorMessage>
        </div>
      </div>
    </div>
  )
}