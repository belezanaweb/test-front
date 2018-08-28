import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { saveData } from '../actions';

import Product from '../components/Product';
import Box from '../components/Box';
import Summary from '../components/Summary';

const ProductList = styled.ul`
  padding: 1px 0;
`

class CartContainer extends React.Component {

  componentDidMount() {
    fetch('https://www.mocky.io/v2/5b15c4923100004a006f3c07')
      .then(res => res.json())
      .then(
        (result) => {
          this.props.saveData(result);
        }
      )
  }

  render() {
    const { data } = this.props;

    if (!data) {
      return <span></span>
    }

    const {
      total,
      subTotal,
      shippingTotal,
      discount
    } = data

    const { items } = data;
    console.log(items)
    return (
      <Fragment>
        <Box title="produtos">
          <ProductList>
            {items.map(item =>
              <Product key={item.product.sku}
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
    );
  }
};

const mapStateToProps = ({ data }) => ({
  data
})

export default connect(
  mapStateToProps,
  {
    saveData
  }
)(CartContainer);
