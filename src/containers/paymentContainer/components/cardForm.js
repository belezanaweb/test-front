import React from 'react'
import './cardForm.css'
import { TextField } from './textField'

const CardForm = () => (
  <form className="cardForm">
    <TextField label="Número do cartão:" />
    <TextField label="Nome do Titular:" />
    <div className="formRow">
      <TextField label="Validade (mês/ano):" />
      <TextField label="CVV:" />
    </div>
  </form>
)

export { CardForm }
