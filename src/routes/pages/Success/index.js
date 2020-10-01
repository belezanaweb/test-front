import React from 'react';
import { AiOutlineCheckCircle  } from 'react-icons/ai';
import Total from '../../../components/Total';

import { Container } from './styles';

function Success() {
  return (
    <Container>
      <AiOutlineCheckCircle />
      <h1>Compra efetuada com sucesso</h1>

     <section>
       <h1>Pagamento</h1>
       <div className="payment">
         <p>****.****.****.1234</p>
         <p>José da Silva</p>
         <p>05/2019</p>
       </div>
     </section>

     <section>
       <h1>Produtos</h1>
      <div>
        <span>oi</span>
      </div>
     </section>

    <Total />

    </Container>
  );
}

export default Success;
