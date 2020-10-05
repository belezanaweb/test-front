import React, { Component } from 'react';
import { AiOutlineCheckCircle  } from 'react-icons/ai';
import Total from '../../../components/Total';
import { connect } from 'react-redux';
import * as CartActions from '../../../store/modules/cart/actions';
import { bindActionCreators } from 'redux';
import { Container } from './styles';
import Header from '../../../components/Header';

class Success extends Component {

  componentDidMount() {
    this.props.getProducts();
  };

  render() {
    const {data, cart} = this.props;
    const allProductsCart = cart?.items.map(item => item.product);
    const arrayNumberCard = data?.numberCard.split(".");

    return (
      <Container>
        <Header page={3} />
        <AiOutlineCheckCircle />
        <h1>Compra efetuada com sucesso</h1>

      <section>
        <h1>Pagamento</h1>
        <div className="payment">
          <p>****.****.****.{arrayNumberCard[3]}</p>
          <p>{data.holder}</p>
          <p>{data.numberCard}</p>
        </div>
      </section>

      <section>
        <h1>Produtos</h1>

        <ul>
          {allProductsCart?.map(prod => (
              <li key={prod.sku}>
              <img src={prod.imageObjects?.map(img => img.small)} />
                <p>{prod.name}</p>
            </li>
            ))}
        </ul>
      </section>

      <Total />

      </Container>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart.productsCart,
  data: state.cart.dataCard
});

const mapDispatchToProps = dispatch =>
    bindActionCreators( CartActions , dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Success);
