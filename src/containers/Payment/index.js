import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import PropTypes from 'prop-types';
import InformationShipping from '../../components/InformationShipping';
import Card from '../../components/Card';
import setPaymentAction from '../../actions/payment';
import setCurrentPageAction from '../../actions/menu';
import routes from '../../enums/routes';
import {
  Container,
  InputBigger,
  InputSmaller,
  BoxBigger,
  BoxSmaller,
  LabelBigger,
  LabelSmaller,
} from './style';

const PaymentPage = (props) => {
  const {
    currentPage,
    goToCart,
    setPayment,
    goToConfirmation,
    setCurrentPage,
  } = props;

  const [state, setState] = useState({
    numberCard: '',
    nameCardholder: '',
    validity: '',
    cvv: '',
  });

  useEffect(() => {
    if (currentPage === routes.root) {
      goToCart();
    }
  }, [currentPage, goToCart]);

  const handleFieldChange = (event) => {
    const fieldName = event.target.name;
    setState({ ...state, [fieldName]: event.target.value });
  };

  const goToConfirmationPage = () => {
    goToConfirmation();
    setCurrentPage();
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    setPayment(state);
    goToConfirmationPage();
  };

  const maskCartNumber = (value) => value
    .replace(/(\d{4})(\d)/g, '$1.$2')
    .replace(/(\d{4})(\d)/g, '$1.$2')
    .replace(/(\d{4})(\d)/g, '$1.$2')
    .replace(/(\d{4})(\d)/g, '$1.$2');

  const patternNameCard = () => (`^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅ
                    ĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$`);

  return (
    <Container>
      <form>
        <Card title="CARTÃO DE CRÉDITO">
          <BoxBigger>
            <LabelBigger>
              Número do cartão:
              <InputBigger
                type="text"
                name="numberCard"
                placeholder="____.____.____.____"
                onChange={handleFieldChange}
                pattern="^[0-9]{4}\.[0-9]{4}\.[0-9]{4}\.[0-9]{4}$"
                maxLength="19"
                value={maskCartNumber(state.numberCard)}
                required
              />
            </LabelBigger>
          </BoxBigger>
          <BoxBigger>
            <LabelBigger>
              Nome do Titular:
              <InputBigger
                type="text"
                name="nameCardholder"
                value={state.nameCardholder}
                placeholder="Como no cartão"
                onChange={handleFieldChange}
                required
                pattern={patternNameCard}
              />
            </LabelBigger>
          </BoxBigger>
          <BoxSmaller>
            <LabelSmaller>
              Validade(mês/ano):
              <InputSmaller
                type="text"
                name="validity"
                value={state.validity.replace(/^([0-9]{2})([0-9]{1,4})$/g, '$1.$2')}
                maxLength="7"
                placeholder="__.____"
                onChange={handleFieldChange}
                pattern="^[0-9]{2}\.[0-9]{4}$"
                required
              />
            </LabelSmaller>
            <LabelSmaller>
              CVV:
              <InputSmaller
                type="text"
                name="cvv"
                value={state.cvv}
                placeholder="___"
                onChange={handleFieldChange}
                pattern="^[0-9]{3}$"
                required
                maxLength="3"
              />
            </LabelSmaller>
          </BoxSmaller>
        </Card>
      </form>
      <InformationShipping nameButton="FINALIZAR PEDIDO" onClick={onSubmitForm} />
    </Container>
  );
};

const mapStateToProps = (state) => ({
  currentPage: state.menu,
});

const mapDispatchToProps = (dispatch) => ({
  setPayment: (payment) => dispatch(setPaymentAction(payment)),
  goToConfirmation: () => dispatch(push(routes.confirmation)),
  setCurrentPage: () => dispatch(setCurrentPageAction(routes.confirmation)),
  goToCart: () => dispatch(push(routes.root)),
});

PaymentPage.propTypes = {
  currentPage: PropTypes.func.isRequired,
  goToCart: PropTypes.func.isRequired,
  setPayment: PropTypes.func.isRequired,
  goToConfirmation: PropTypes.func.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PaymentPage);
