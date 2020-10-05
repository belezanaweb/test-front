import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as CartActions from '../../../store/modules/cart/actions';
import { bindActionCreators } from 'redux';
import { formatPrice } from '../../../util/format';
import { ContainerTable, ProductTable } from './styles';
import Button from '../../../components/Button';
import Total from '../../../components/Total';
import { Link } from 'react-router-dom';
import Header from '../../../components/Header';

class Cart extends Component {

  componentDidMount() {
    this.props.getProducts();
  };

  render() {
    const allProductsCart = this.props.cart?.items.map(item => item.product);

    return (
      <ContainerTable>
               <Header page={1} />

        <ProductTable>
          <h1>Produtos</h1>

          <ul>
             {allProductsCart?.map(prod => (
                <li key={prod.sku}>
                <img src={prod.imageObjects?.map(img => img.small)} />
                <span>
                <p>{prod.name}</p>
                  <strong>{formatPrice(prod.priceSpecification.price)}</strong>
                </span>
              </li>
            ))}
        </ul>
        </ProductTable>

        <Total />
        <Link to="/payment">
          <Button type="submit">
            Seguir para o pagamento
          </Button>
        </Link>
      </ContainerTable>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.cart.productsCart
});

const mapDispatchToProps = dispatch =>
    bindActionCreators( CartActions , dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
