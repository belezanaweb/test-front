import React, { Component } from 'react';

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Creators as ProductsActions} from '../../store/ducks/products'

import Product from '../product/index'
import { Container, ProductSection } from './style';

class Products extends Component {

  componentDidMount(){
    this.props.getProductsRequest();
  }

  render() {
    return (
      <Container>
        <h1>Produtos</h1>
        <ProductSection>
          {this.props.items.map(item =>
            <Product key={Math.random()} item={item} />
          )}
        </ProductSection>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  items: state.products.items
});

const mapDispatchToProps = dispatch => bindActionCreators(ProductsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Products)
