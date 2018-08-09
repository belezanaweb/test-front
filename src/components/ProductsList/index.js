import React, { Fragment, Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as CartActions from "../../store/actions/cart";

/**
 * Styles
 */
import { SectionTitle } from '../../assets/global';
import { Products, Product, ProductDetails, ProductName, ProductPrice } from './styles';

class ProductsList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.cartRequest();
  }

  render() {
    return this.props.cart.data.items ? (
      <Fragment>
        <SectionTitle>Produtos</SectionTitle>
        <Products>
          {this.props.cart.data.items.map((item, index) => {
            return(
              <Product key={index}>
                <figure>
                  <img src={item.product.imageObjects[0].small} alt={item.product.name} />
                </figure>
                <ProductDetails>
                  <ProductName>{item.product.name}</ProductName>
                  {!this.props.readOnly && <ProductPrice>R$ {item.product.priceSpecification.price}</ProductPrice>}
                </ProductDetails>
              </Product>
            );
          })}
        </Products>
      </Fragment>
    ) : (
      <Fragment>
        <SectionTitle>Produtos</SectionTitle>
        <Products>
          Carregando...
        </Products>
      </Fragment>
    ) ; 
  }
}

const mapStateToProps = state => ({
  cart: state.cart
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsList);
