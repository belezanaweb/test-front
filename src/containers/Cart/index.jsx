/* eslint-env browser */
import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-grid-system';
import { Link } from 'react-router-dom';
import { getCartData } from 'store/cart/actions';
import DefaultLayout from 'layouts/default';

import Text from 'components/Text';
import Button from 'components/Button';
import Product from 'components/Product';
import Card from 'components/Card';
import Checkout from 'components/Checkout';

import ContainerStyled from '../style';

const Cart = () => {
  useEffect(() => {
    document.title = `Beleza na Web - Sacola`;
  }, []);
  const dispatch = useDispatch();
  const data = useSelector(state => state.cart.data);

  useEffect(() => {
    if (!data) {
      dispatch(getCartData());
    }
  }, [dispatch, data]);

  return (
    <ContainerStyled className="animated fadeIn faster">
      <Container>
        {data.items && data.items.length > 0 ? (
          <Row>
            <Col lg={8} xs={12}>
              <Text
                size="14px"
                className="product-text"
                uppercase
                bold
                color="#999"
              >
                Produtos
              </Text>
              <Card>
                {data.items.map(item => (
                  <Product showPrice key={item.product.sku} item={item} />
                ))}
              </Card>
            </Col>
            <Checkout data={data} />
            <Col xs={12}>
              <Link
                to="/payment"
                className="animated fadeIn"
                data-cy="buttonCart"
              >
                <Button>Seguir para o pagamento</Button>
              </Link>
            </Col>
          </Row>
        ) : (
          <Text>Sem items no carrinho.</Text>
        )}
      </Container>
    </ContainerStyled>
  );
};

export default DefaultLayout(connect()(Cart));
