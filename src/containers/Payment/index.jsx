/* eslint-env browser */
import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import { Container, Row, Col } from 'react-grid-system';

import DefaultLayout from 'layouts/default';

import Button from 'components/Button';
import Text from 'components/Text';
import Checkout from 'components/Checkout';

import Card from 'components/Card';
import Input from 'components/Input';

import { setCardData } from 'store/cart/actions';
import ContainerStyled from '../style';

const Payment = () => {
  useEffect(() => {
    document.title = `Beleza na Web - Pagamento`;
  }, []);
  const dispatch = useDispatch();
  const data = useSelector(state => state.cart.data);

  const [cardNumber, setCardNumber] = useState();
  const [cardName, setCardName] = useState(undefined);
  const [cardValidity, setCardValidity] = useState(undefined);
  const [cardError, setCardError] = useState(undefined);
  const [ccv, setCcv] = useState(undefined);

  const handleFormValid = () => {
    if (
      !cardNumber ||
      cardNumber.length < 19 ||
      !ccv ||
      ccv.length < 3 ||
      !cardValidity ||
      cardValidity.length < 7 ||
      !cardName
    ) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    const mc = /^5[1-5][0-9]{14}$|^5[1-5][0-9.X]{17}$/;
    const vi = /^4[0-9]{12}(?:[0-9]{3})?$|^4[0-9.X]{15}(?:[0-9]{3})?$/;
    const dc = /^3(?:0[0-5]|[68][0-9])[0-9]{11}$|^3(?:0[0-5]|[68][0-9])[0-9.X]{13}$/;

    if (typeof cardNumber !== 'undefined' && mc.test(cardNumber)) {
      return setCardError(true);
    }
    if (typeof cardNumber !== 'undefined' && vi.test(cardNumber)) {
      return setCardError(true);
    }
    if (typeof cardNumber !== 'undefined' && dc.test(cardNumber)) {
      return setCardError(true);
    }
    return setCardError(false);
  }, [cardNumber, setCardError]);

  const handleSubmit = () => {
    const card = {
      cardNumber,
      cardName,
      cardValidity,
      ccv,
    };
    dispatch(setCardData(card));
  };

  return (
    <ContainerStyled className="animated fadeIn faster">
      <Container>
        {data && data.items ? (
          <Row>
            <Col lg={8} xs={12}>
              <Text
                size="14px"
                className="product-text"
                uppercase
                bold
                color="#999"
              >
                CARTÃO DE CRÉDITO
              </Text>
              <Card>
                <Row>
                  <Col lg={12}>
                    <Input
                      dataCy="card"
                      defaultValue={cardNumber}
                      placeholder="____.____.____.____"
                      label="Número do cartão:"
                      mask="9999.9999.9999.9999"
                      onChange={e => setCardNumber(e.target.value)}
                      error={
                        !cardError &&
                        cardNumber &&
                        cardNumber.length !== 0 &&
                        typeof cardNumber !== 'undefined'
                          ? 'Numero de cartao invalido'
                          : null
                      }
                    />
                  </Col>
                  <Col lg={12}>
                    <Input
                      dataCy="name"
                      placeholder="Como no cartao"
                      defaultValue={cardName}
                      onChange={e => setCardName(e.target.value)}
                      label="Nome do titular:"
                      error={
                        typeof cardName !== 'undefined' && cardName.length === 0
                          ? 'Digite seu nome'
                          : null
                      }
                    />
                  </Col>
                  <Col lg={6} xs={6}>
                    <Input
                      dataCy="validity"
                      defaultValue={cardValidity}
                      placeholder="__/____"
                      mask="99/9999"
                      onChange={e => setCardValidity(e.target.value)}
                      label="Validade (mes/ano):"
                      error={
                        typeof cardValidity !== 'undefined' &&
                        cardValidity.length < 7
                          ? 'Data invalida'
                          : null
                      }
                    />
                  </Col>
                  <Col lg={6} xs={6}>
                    <Input
                      dataCy="ccv"
                      defaultValue={ccv}
                      onChange={e => setCcv(e.target.value)}
                      placeholder="____"
                      mask="999"
                      label="CVV:"
                      error={
                        typeof ccv !== 'undefined' && ccv.length < 3
                          ? 'CCV invalido'
                          : null
                      }
                    />
                  </Col>
                </Row>
              </Card>
            </Col>

            <Checkout data={data} />

            <Col lg={12} xs={12}>
              <Link
                to="/success"
                className="animated fadeIn"
                data-cy="buttonPayment"
              >
                <Button
                  disabled={handleFormValid() || !cardError}
                  onClick={handleSubmit()}
                >
                  Finalizar o pedido
                </Button>
              </Link>
            </Col>
          </Row>
        ) : (
          <Redirect to="/cart" />
        )}
      </Container>
    </ContainerStyled>
  );
};

export default DefaultLayout(connect()(Payment));
