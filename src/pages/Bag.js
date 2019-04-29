import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header';
import Card from '../components/Card';
import CardProduct from '../components/CardProduct';

class Bag extends Component {

  render() {
    return (
      <div>
        <Header page="bag" />

        <Card title="PRODUTOS">
          {this.props.products.map(product => (
            <CardProduct
              key={product.product.sku}
              product={product.product}
            />
          ))}
        </Card>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Bag);

function mapStateToProps(state) {
  return {
    products: state.bagProducts
  }
}
