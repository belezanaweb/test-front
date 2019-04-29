import React, { Component } from 'react';
import { connect } from 'react-redux';

class Bag extends Component {

  render() {
    return (
      <div>
        {this.props.products.map(product => (
          <p key={product.product.sku}>
            {product.product.name}
          </p>
        ))}
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
