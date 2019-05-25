import React, { Component } from 'react';
import Total from '../../Components/Total/Total';
import { connect } from 'react-redux';
import Auxiliary from '../../Hoc/Auxiliary/Auxiliary';
import Content  from '../../Components/Content/Content';
import Item from './Item/Item';
import Button from '../../Components/Button/Button';
import Title from '../../Components/Title/Title';
import { TITLE_TYPES } from '../../Constants';

class Cart extends Component {

  constructor(props) {
    super(props);
  }

  //TODO: remover
  // componentDidMount = () => {
  //   console.log('props:', this.props);
  // }

  render() {
    return (
      <Auxiliary>
        <Title type={TITLE_TYPES.MAIN}>Produtos</Title>
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
          <Button action={this.navigateToPayment}>
          Seguir para o pagamento
        </Button>
      </Auxiliary>
    );
  }

  navigateToPayment = () => {
    this.props.history.push('/payment');
  }

}

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(mapStateToProps, null)(Cart);