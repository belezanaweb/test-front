/* eslint-env browser */
import React, { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { Container, Row, Col } from 'react-grid-system';

import DefaultLayout from 'layouts/default';

import Text from 'components/Text';
import Product from 'components/Product';

import Card from 'components/Card';
import Checkout from 'components/Checkout';
import success from '../../utils/img/success.png';

import ContainerStyled from '../style';

const Success = () => {
  useEffect(() => {
    document.title = `Beleza na Web - Confirmaçao`;
  }, []);

  const data = useSelector(state => state.cart.data);
  const card = useSelector(state => state.cart.card);

  return (
    <ContainerStyled className="animated fadeIn faster">
      <Container>
        {data.items &&
        data.items.length > 0 &&
        card &&
        card.cardName &&
        card.cardNumber &&
        card.cardValidity &&
        card.ccv ? (
          <Row>
            <Col
              lg={12}
              xs={12}
              className="success-message"
              data-cy="successMessage"
            >
              <img src={success} alt="" />
              <Text size="14px" uppercase bold center color="#FF7800">
                Compra efetuada com sucesso
              </Text>
            </Col>
            <Col lg={8} xs={12}>
              <Text
                size="14px"
                className="product-text"
                uppercase
                bold
                color="#999"
              >
                Pagamento
              </Text>
              <Card>
                <Text size="14px" color="#000" dataCy="successCard">
                  ****.****.****{card.cardNumber.substr(14, 18)}
                </Text>
                <Text size="14px" color="#000" uppercase dataCy="successName">
                  {card.cardName}
                </Text>
                <Text size="14px" color="#000" dataCy="successValidity">
                  {card.cardValidity}
                </Text>
              </Card>
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
                  <Product key={item.product.sku} item={item} />
                ))}
              </Card>
            </Col>
            <Checkout data={data} />
          </Row>
        ) : (
          <Redirect to="/cart" />
        )}
      </Container>
    </ContainerStyled>
  );
};

export default DefaultLayout(connect()(Success));
