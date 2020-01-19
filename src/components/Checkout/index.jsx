import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import { Col } from 'react-grid-system'; // eslint-disable-line import/no-extraneous-dependencies
import { useSelector } from 'react-redux'; // eslint-disable-line import/no-extraneous-dependencies

import Text from 'components/Text';
import Card from 'components/Card';
import { maskMoneyPtBr } from '../../utils/mask';

import CheckoutStyled from './style';

const Checkout = () => {
  const data = useSelector(state => state.cart.data);
  return (
    <>
      {data.items.length > 0 ? (
        <Col lg={4} xs={12} data-cy="checkout">
          <CheckoutStyled>
            <Card transparent>
              <div className="checkout">
                <Text size="14px" uppercase color="#212122">
                  Produtos
                </Text>
                <Text size="14px" uppercase color="#212122">
                  {`R$ ${maskMoneyPtBr(data.subTotal)}`}
                </Text>
              </div>
              <div className="checkout">
                <Text size="14px" uppercase color="#212122">
                  Frete
                </Text>
                <Text size="14px" uppercase color="#212122">
                  {`R$ ${maskMoneyPtBr(data.shippingTotal)}`}
                </Text>
              </div>
              <div className="checkout">
                <Text size="14px" uppercase color="#FF7800">
                  Desconto
                </Text>
                <Text size="14px" uppercase color="#FF7800">
                  {`- R$ ${maskMoneyPtBr(data.discount)}`}
                </Text>
              </div>
              <div className="checkout total">
                <Text size="14px" uppercase bold color="#212122">
                  Total
                </Text>
                <Text size="14px" uppercase bold color="#212122">
                  {`R$ ${maskMoneyPtBr(data.total)}`}
                </Text>
              </div>
            </Card>
          </CheckoutStyled>
        </Col>
      ) : null}
    </>
  );
};

export default Checkout;
