import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import PropTypes from 'prop-types';
import CardProduct from '../../components/CardProduct';
import InformationShipping from '../../components/InformationShipping';
import { listCart as listCartAction } from '../../actions/cart';
import setCurrentPageAction from '../../actions/menu';
import routes from '../../enums/routes';
import Container from './style';

const CartPage = (props) => {
  const {
    listCart, goToPayment, setCurrentPage, cart,
  } = props;

  useEffect(() => {
    listCart();
  }, [listCart]);

  const goToPaymentPage = () => {
    goToPayment();
    setCurrentPage();
  };

  return (
    <Container>
      <CardProduct products={cart.items} isRenderPrice />
      <InformationShipping nameButton="SEGUIR PARA O PAGAMENTO" onClick={goToPaymentPage} />
    </Container>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart.cart,
});

const mapDispatchToProps = (dispatch) => ({
  listCart: () => dispatch(listCartAction()),
  goToPayment: () => dispatch(push(routes.payment)),
  setCurrentPage: () => dispatch(setCurrentPageAction(routes.payment)),
});

CartPage.propTypes = {
  listCart: PropTypes.func.isRequired,
  goToPayment: PropTypes.func.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  cart: PropTypes.instanceOf(Object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
