import React from 'react';

import Total from '../../components/Total';
import { creditCardStorageName, productsStorageName } from '../../utils';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { Container } from './styles';

function Success() {
  const product = JSON.parse(localStorage.getItem(productsStorageName));
  const creditCard = JSON.parse(localStorage.getItem(creditCardStorageName));

  return (
    <Container data-testid="success">
      <div className="message">
        <CheckCircleOutlineIcon style={{ height: "52px", width: "52px", color: "#FF7800" }} />

        <h4>Compra efetuada com sucesso</h4>
      </div>

      <h4>Pagamento</h4>

      <div className="credit-card">
        <div>****.****.****.{creditCard.number.substring(creditCard.number.length - 4)}</div>

        <div className="name">{creditCard.name}</div>

        <div>{creditCard.expiration}</div>
      </div>

      <h4>Produtos</h4>

      <ul className="product-list">
        {product.items.map(item => (
          <li key={item.product.sku} className="product">
            <img src={item.product.imageObjects[0].small} alt={item.product.name} />

            <div>
              <h6>{item.product.name}</h6>
            </div>
          </li>
        ))}
      </ul>

      {product !== null && product.items && <Total {...product} />}
    </Container>
  );
}

export default Success;
