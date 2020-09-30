import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as CartActions from '../../../store/modules/cart/actions';
import { bindActionCreators } from 'redux';
import { ContainerTable, ProductTable, Total } from './styles';
import Button from '../../../components/Button';

class Cart extends Component {

  componentDidMount() {
    this.props.getProducts();
  };

  render() {
    const allProductsCart = this.props.cart?.items.map(item => item.product);
    const { cart } = this.props;

    return (
      <ContainerTable>
        <ProductTable>
          <h1>Produtos</h1>

          <ul>
             {allProductsCart?.map(prod => (
                <li key={prod.sku}>
                <img src={prod.imageObjects?.map(img => img.small)} />
                <span>
                <p>{prod.name}</p>
                  <strong>R$225,90</strong>
                </span>
              </li>
            ))}
        </ul>
        </ProductTable>

        <Total>
          <div>
            <span>produtos</span>
            <span>{cart?.subTotal}</span>
          </div>
          <div>
            <span>frete</span>
            <span>{cart?.shippingTotal}</span>
          </div>
          <div>
            <span>desconto</span>
            <span>{cart?.discount}</span>
          </div>
          <div>
            <span>total</span>
            <span>{cart?.total}</span>
          </div>
        </Total>

        <Button>
          Seguir para o pagamento
        </Button>
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
