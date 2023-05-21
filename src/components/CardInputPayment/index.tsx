import { useFormContext } from "react-hook-form";

export default function cardInputPayment() {
  const { register } = useFormContext();
  return (
    <div>
      <div>Cartâo de Crédito</div>
      <div>
        <div>
          <label htmlFor='numberCard' placeholder="0000 0000 0000 0000">Número</label>
          <input {...register('numberCard', { required: "insira um número de cartão válido" })} id='numberCard' type='text' />
        </div>
        <div>
          <label htmlFor='name' placeholder="Nome impresso no cartão">Nome do titular do cartão</label>
          <input {...register('name', { required: "insira um nome válido" })} id='name' type='text' />
        </div>
        <div>
          <label htmlFor='birthDate' placeholder="Nome impresso no cartão">Data de validade</label>
          <input {...register('birthDate', { required: "insira uma data válida" })} id='birthDate' type='text' />
        </div>
        <div>
          <label htmlFor='code' placeholder="000">Código CVV:</label>
          <input {...register('code', { required: "insira um cvv válido" })} id='code' type='text' />
        </div>
      </div>
    </div>
  )
}