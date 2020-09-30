import React from 'react';

import { ContainerTable, ProductTable, Total, Button } from './styles';

export default function Cart () {
  return (
    <ContainerTable>
      <ProductTable>
        <h1>Produtos</h1>

        <ul>
        <li>
          <img src="#" />
          <span>
           <p>Lorem ipsum dolor sit amet, rchitecto nam, autem libero adipisci.</p>
            <strong>R$225,90</strong>
          </span>
        </li>
        <li>
          <img src="#" />
          <span>
           <p>Lorem ipsum dolor sit amet, rchitecto nam, autem libero adipisci.</p>
            <strong>R$225,90</strong>
          </span>
        </li>
      </ul>
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
