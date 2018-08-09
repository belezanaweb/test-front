import React, { Fragment, Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as CartActions } from "../../store/ducks/cart";

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
    this.props.getCartRequest();
  }

  render() {
    return (
      <Fragment>
        <SectionTitle>Produtos</SectionTitle>
        <Products>
          <Product>
            <figure>
              <img src="//placehold.it/65x65" alt="." />
            </figure>
            <ProductDetails>
              <ProductName>L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium</ProductName>
              {!this.props.readOnly && <ProductPrice>R$ 150,00</ProductPrice>}
            </ProductDetails>
          </Product>
          <Product>
            <figure>
              <img src="//placehold.it/65x65" alt="." />
            </figure>
            <ProductDetails>
              <ProductName>L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium</ProductName>
              {!this.props.readOnly && <ProductPrice>R$ 150,00</ProductPrice>}
            </ProductDetails>
          </Product>
          <Product>
            <figure>
              <img src="//placehold.it/65x65" alt="." />
            </figure>
            <ProductDetails>
              <ProductName>L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium</ProductName>
              {!this.props.readOnly && <ProductPrice>R$ 150,00</ProductPrice>}
            </ProductDetails>
          </Product>
          <Product>
            <figure>
              <img src="//placehold.it/65x65" alt="." />
            </figure>
            <ProductDetails>
              <ProductName>L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium</ProductName>
              {!this.props.readOnly && <ProductPrice>R$ 150,00</ProductPrice>}
            </ProductDetails>
          </Product>
        </Products>
      </Fragment>
    );
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
