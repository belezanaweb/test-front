import React from 'react'
import { Formbox } from './styles'
import Campo from './Inputs/index'

export default function Form() {
  return (
    <Formbox>
      <div className="row">
        <div className="col-12">
          <label>Número do Cartão:</label>
          <Campo
            mask="9999.9999.9999.9999"
            placeholder="____.____.____.____"
            data="numberCard"
            type="text"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <label>Nome do Titular:</label>
          <Campo placeholder="Como no cartão" data="name" type="text" />
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <label>Validade Mês/Ano:</label>
          <Campo mask="99/9999" placeholder="__/____" data="expiration" type="text" />
        </div>
        <div className="col-6">
          <label>CVV:</label>
          <Campo mask="999" placeholder="___" data="cvv" type="text" />
        </div>
      </div>
    </Formbox>
  )
}
