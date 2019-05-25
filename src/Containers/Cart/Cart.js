import React, { Component } from 'react';
import Total from '../../Components/Total/Total';
import { connect } from 'react-redux';
import Auxiliary from '../../Hoc/Auxiliary/Auxiliary';
import Content  from '../../Components/Content/Content';
import Item from './Item/Item';

class Cart extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    console.log('props:', this.props);
  }

  render() {
    return (
      <Auxiliary>
        <h1>Cart</h1>
        <Content>
          {this.props.cart.items.map((item, index) => 
          <Item key={index}
            price={item.product.priceSpecification.price}
            name={item.product.name}
            smallImage={item.product.imageObjects["0"].small}/>)}
        </Content>
        <Total subTotal={this.props.cart.subTotal}
        shippingTotal={this.props.cart.shippingTotal}
        discount={this.props.cart.discount}
        total={this.props.cart.total}/>
      </Auxiliary>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(mapStateToProps, null)(Cart);