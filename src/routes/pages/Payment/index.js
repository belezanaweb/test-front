import React from 'react';

import { ContainerTable, ProductTable, Total } from './styles';
import Button from '../../../components/Button'

export default function Payment () {
  return (
    <ContainerTable>
      <ProductTable>
        <h1>Cartão de crédito</h1>
        <form action="#">
          <label htmlFor="#">Número do cartão:</label>
          <input type="text" placeholder="____.____.____.____"/>

          <label htmlFor="#">Nome do Titular:</label>
          <input type="text" placeholder="Como no cartão"/>

          <label htmlFor="#">Validade (mês/ano):</label>
          <input type="text" placeholder="__/____"/>
        </form>
      </ProductTable>

      <Total>
        <div>
          <span>produtos</span>
          <span>624,80</span>
        </div>
        <div>
          <span>frete</span>
          <span>5,90</span>
        </div>
       </Total>

       <Button>
        Finalizar o pedido
       </Button>
    </ContainerTable>
  )
}
