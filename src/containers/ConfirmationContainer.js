import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import Box from '../components/Box';
import Loading from '../components/Loading';
import Product, { ProductList } from '../components/Product';
import Summary from '../components/Summary';

import { saveData } from '../actions';

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--color-orange-1);

  i {
    font-size: 3rem;
    letter-space: -1px;
    border: 2px solid var(--color-orange-1);
    padding: 1rem;
    border-radius: 100%;
    margin-bottom: 1rem;
  }

  span {
    font-size: 1.4rem;
    font-weight: bold;
    text-transform: uppercase;
  }
`

const PaymentDetils = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  font-size: 1.4rem;
`

class ConfirmationContainer extends React.Component {
  constructor(props) {
    super(props);
    const params = new URLSearchParams(this.props.location.search);
    const cardNumber = params.get('numero-cartao').slice(-4);
    const cardName = params.get('nome').replace('-', ' ').toUpperCase();
    const cardDate = params.get('data-expiracao')

    this.state = {
      cardNumber,
      cardName,
      cardDate
    }
  }

  componentDidMount() {
    const { data } = this.props;
    if(!data) {
      fetch('https://www.mocky.io/v2/5b15c4923100004a006f3c07')
        .then(res => res.json())
        .then(
          (result) => {
            this.props.saveData(result);
          }
      )
    }
  }
  render() {
    const { data } = this.props;

    if (!data) {
      return <Loading />
    }


    const {
      total,
      subTotal,
      shippingTotal,
      discount
    } = data

    const { items } = data;
    return (
      <Fragment>
        <IconContainer >
          <i className='fa fa-check' aria-hidden="true"></i>
          <span>compra efetuada com sucesso</span>
        </IconContainer>
        <Box title='pagamento'>
          <PaymentDetils>
            {this.state.cardNumber && <span>****.****.****.{this.state.cardNumber}</span>}
            {this.state.cardName && <span>{this.state.cardName}</span>}
            {this.state.cardDate && <span>{this.state.cardDate}</span>}
          </PaymentDetils>
        </Box>
        <Box title="produtos">
          <ProductList>
            {items.map(item =>
              <Product hidePrice key={item.product.sku}
                thumbnail={
                  item.product.imageObjects[0].thumbnail
                }
                name={item.product.name}
                price={
                  item.product.priceSpecification.price
                } />
            )}
          </ProductList>
        </Box>
        <Summary
          products={subTotal}
          shipping={shippingTotal}
          discount={discount}
          total={total} />
      </Fragment>
    )
  }
}

const mapStateToProps = ({ data }) => ({
  data
})

export default withRouter(connect(
  mapStateToProps,
  {
    saveData
  }
)(ConfirmationContainer));
