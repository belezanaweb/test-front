import React, { Fragment, Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as CartActions from "../../store/actions/cart";

/**
 * Styles
 */
import { SectionTitle, BoxArea } from '../../assets/global';
import { Product, ProductDetails, ProductName, ProductPrice } from './styles';

/**
 * Utils
 */
import { money_format } from '../../utils';

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
        <BoxArea>
          {this.props.cart.data.items.map((item, index) => {
            return(
              <Product key={index}>
                <figure>
                  <img src={item.product.imageObjects[0].small} alt={item.product.name} />
                </figure>
                <ProductDetails>
                  <ProductName>{item.product.name}</ProductName>
                  {!this.props.readOnly && <ProductPrice>R$ {money_format(item.product.priceSpecification.price, 2, ',', '.')}</ProductPrice>}
                </ProductDetails>
              </Product>
            );
          })}
        </BoxArea>
      </Fragment>
    ) : (
      <Fragment>
        <SectionTitle>Produtos</SectionTitle>
        <BoxArea>
          Carregando...
        </BoxArea>
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
