import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as CartActions from '../../../store/modules/cart/actions';
import { bindActionCreators } from 'redux';
import { formatPrice } from '../../../util/format';
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
                  <strong>{formatPrice(prod.priceSpecification.price)}</strong>
                </span>
              </li>
            ))}
        </ul>
        </ProductTable>

        <Total>
          <div>
            <span>produtos</span>
            <span>{formatPrice(cart?.subTotal)}</span>
          </div>
          <div>
            <span>frete</span>
            <span>{formatPrice(cart?.shippingTotal)}</span>
          </div>
          <div className="discount">
            <span>desconto</span>
            <span >{formatPrice(cart?.discount)}</span>
          </div>
          <div className="total">
            <span>total</span>
            <span>{formatPrice(cart?.total)}</span>
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
