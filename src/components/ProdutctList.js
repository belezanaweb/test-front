import React, { Component } from 'react';
class ProductList extends Component {
  
  render() {
    let items = this.props.items;

    let produtcts = Array.from(items).map((item, index)=>{
      let product = item.product;
      let listItems = <div key={index} > 
                    <div> <img src={product.imageObjects[0].thumbnail} alt='' /> </div> 
                    <div> {product.name} </div> 
                    <div> {product.priceSpecification.price} </div> 
                </div> ;
      return listItems;
    });

    return (
      <div>
        produtos
        {produtcts}
      </div>
    );

  }
  
  


}

export default ProductList;