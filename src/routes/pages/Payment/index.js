import React from 'react';

import { ContainerTable, ProductTable } from './styles';
import Button from '../../../components/Button';
import Total from '../../../components/Total';

export default function Payment () {

  function maskNumberCreditCard() {
    let card = document.getElementById("credit_card");
    if(card.value.length === 4 || card.value.length === 9 || card.value.length === 14){
      card.value += "."
    }
  }

  function maskCardValidity() {
    let date = document.getElementById("validity_card");
    if(date.value.length === 2 ){
      date.value += "/"
    }
  }

  return (
    <ContainerTable>
      <ProductTable>
        <h1>Cartão de crédito</h1>
        <form action="#">
          <label htmlFor="#">Número do cartão:</label>
          <input id="credit_card" onKeyUp={maskNumberCreditCard} type="text" placeholder="____.____.____.____"/>

          <label htmlFor="#">Nome do Titular:</label>
          <input type="text" placeholder="Como no cartão"/>

          <section>
            <div>
              <label htmlFor="#">Validade (mês/ano):</label>
              <input id="validity_card" onKeyUp={maskCardValidity} type="text" placeholder="__/____"/>
             </div>
            <div>
              <label htmlFor="#">CVV:</label>
              <input type="number" placeholder="___"/>
            </div>
          </section>

        </form>
      </ProductTable>

      <Total />

       <Button>
        Finalizar o pedido
       </Button>
    </ContainerTable>
  )
}
