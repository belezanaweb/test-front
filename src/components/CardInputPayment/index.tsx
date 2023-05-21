import { useFormContext } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';

export default function cardInputPayment() {
  const { register, formState: { errors } } = useFormContext();
  return (
    <div>
      <div>Cartâo de Crédito</div>
      <div>
        <div>
          <label htmlFor='numberCard' placeholder="0000 0000 0000 0000">Número</label>
          <input {...register('numberCard', {
            required: "insira um número de cartão válido",
            maxLength: {
              value: 16,
              message: "O número do cartão tem 16 caractes."
            }
          })} id='numberCard' type='text' />
          <ErrorMessage errors={errors} name="numberCard" />
        </div>
        <div>
          <label htmlFor='name' placeholder="Nome impresso no cartão">Nome do titular do cartão</label>
          <input {...register('name', { required: "insira um nome válido" })} id='name' type='text' />
          <ErrorMessage errors={errors} name="name" />
        </div>
        <div>
          <label htmlFor='birthDate' placeholder="Nome impresso no cartão">Data de validade</label>
          <input {...register('birthDate', { required: "insira uma data válida" })} id='birthDate' type='text' />
          <ErrorMessage errors={errors} name="birthDate" />
        </div>
        <div>
          <label htmlFor='code' placeholder="000">Código CVV:</label>
          <input {...register('code', { required: "insira um cvv válido" })} id='code' type='text' />
          <ErrorMessage errors={errors} name="code" />
        </div>
      </div>
    </div>
  )
}