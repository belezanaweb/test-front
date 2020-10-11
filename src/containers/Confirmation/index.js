import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import PropTypes from 'prop-types';
import {
  Container, Data, PaymentDate, Img,
} from './style';
import Card from '../../components/Card';
import CardProduct from '../../components/CardProduct';
import CardTotalShipping from '../../components/CardTotalShipping';
import sucess from '../../assets/success.png';
import routes from '../../enums/routes';

const ConfirmationShippingPage = (props) => {
  const {
    currentPage, goToCart, payment, cart,
  } = props;

  useEffect(() => {
    if (currentPage === routes.root) {
      goToCart();
    }
  }, [goToCart, currentPage]);

  return (
    <Container>
      <Img src={sucess} />
      <Card title="PAGAMENTO" gridAreaName="payment">
        <PaymentDate>
          <Data>
            ****.****.****.
            {payment && payment.numberCard && payment.numberCard.substring(15)}
          </Data>
          <Data>
            {payment && payment.nameCardholder && payment.nameCardholder.toUpperCase()}
          </Data>
          <Data>
            {payment && payment.validity}
          </Data>
        </PaymentDate>
      </Card>
      <CardProduct products={cart.items} height="40%" />
      {/* <div> */}
      <CardTotalShipping />
      {/* </div> */}
    </Container>
  );
};

const mapStateToProps = (state) => ({
  payment: state.cart.payment,
  cart: state.cart.cart,
  currentPage: state.menu,
});

const mapDispatchToProps = (dispatch) => ({
  goToCart: () => dispatch(push(routes.root)),
});

ConfirmationShippingPage.propTypes = {
  currentPage: PropTypes.func.isRequired,
  goToCart: PropTypes.func.isRequired,
  payment: PropTypes.func.isRequired,
  cart: PropTypes.instanceOf(Object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmationShippingPage);
