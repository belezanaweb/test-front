export default function cardInputPayment() {
  return (
    <div>
      <div>Cartâo de Crédito</div>
      <div>
        <div>
          <label htmlFor='numberCard' placeholder="0000 0000 0000 0000">Número</label>
          <input id='numberCard' type='text' />
        </div>
        <div>
          <label htmlFor='name' placeholder="Nome impresso no cartão">Nome do titular do cartão</label>
          <input id='name' type='text' />
        </div>
        <div>
          <label htmlFor='birthDate' placeholder="Nome impresso no cartão">Data de validade</label>
          <input id='birthDate' type='text' />
        </div>
        <div>
          <label htmlFor='code' placeholder="000">Código CVV:</label>
          <input id='code' type='text' />
        </div>
      </div>
    </div>
  )
}