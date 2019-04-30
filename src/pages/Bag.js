import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header';
import Card from '../components/Card';
import CardProduct from '../components/CardProduct';
import CardResume from '../components/CardResume';

class Bag extends Component {

  render() {
    return (
      <div>
        <Header page="bag" />

        <Card title="PRODUTOS">
          <div>
            {this.props.products.map(product => (
              <CardProduct
                key={product.product.sku}
                product={product.product}
              />
            ))}
          </div>
        </Card>

        <CardResume resume={this.props.resume} />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Bag);

function mapStateToProps(state) {
  return {
    resume: state.bag.resume,
    products: state.bag.products
  }
}
