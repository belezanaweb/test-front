import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actionCreators from "../actions/index.js"

class ProductList extends Component {
  
  
  render() {
    let items = this.props.items;

    let produtcts = Array.from(items).map((item, index)=>{
      let product = item.product;
      let name = <div> 
        <div> <img src={product.imageObjects[0].thumbnail} /> </div> 
        <div> {product.name} </div> 
        <div> {product.priceSpecification.price} </div> 
      </div> ;
      return <div>{name}</div>;
    });

    return (
      <div>
        produtos

        {produtcts}
      </div>
    );

  }
  
  componentDidMount() {
    this.props.loadData();
  }


}

const mapStateToProps = (state) => {
  return state
};

export default connect(mapStateToProps, actionCreators)(ProductList)