import React from 'react'

import Card from '../Card'

const CreditCardForm = ({ formId, handleSubmit }) => {
  return (
    <Card>
      <form id={formId} onSubmit={handleSubmit}>
        <label>
          Número do cartão:
          <input type="text" />
        </label>
        <label>
          Nome do Titular:
          <input type="text" />
        </label>
        <label>
          Validade (mês/ano):
          <input type="text" />
        </label>
        <label>
          CVV:
          <input type="text" />
        </label>
      </form>
    </Card>
  )
}

export default CreditCardForm
