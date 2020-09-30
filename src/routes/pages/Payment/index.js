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
        Seguir para o pagamento
       </Button>
    </ContainerTable>
  )
}
