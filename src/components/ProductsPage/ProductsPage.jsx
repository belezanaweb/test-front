import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HeaderMenu from '../HeaderMenu';
import ProductsContent from './ProductsContent';
import { fetchProductsData } from '../../actions/productsAction';

class ProductsPage extends Component {
  static propTypes = {
    fetchProductsData: PropTypes.func,
  };

  static defaultProps = {
    fetchProductsData: () => {},
  };

  componentWillMount() {
    this.props.fetchProductsData();
  }

  render() {
    return (
      <div className="App" style={{ width:'100%' }}>
        <HeaderMenu />
        <ProductsContent />
      </div>
    );
  }
}

export default connect(null, { fetchProductsData })(ProductsPage);
