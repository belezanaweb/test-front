import React, { Component } from 'react';
import ProductList from '../components/ProdutctList';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actions/index.js'

class Success extends Component {
  render() {
    return (
      <div>
        Success
        <ProductList items={this.props.items}  />
      </div>
    );
  }

  // componentDidMount() {
  //   this.props.loadData();
  // }

}
const mapStateToProps = (state) => {
  return state
};

export default connect(mapStateToProps, actionCreators)(Success)
