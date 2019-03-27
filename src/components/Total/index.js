import React, { PureComponent } from "react";
import { getProducts } from '../../redux/products/actions';
import { connect } from 'react-redux';
import { Container } from './styles';

class Total extends PureComponent {

  render(){

    return(
      <Container>
        <div className="frame">
          <p className="produtos"><span>Produtos</span><span>R$ {parseFloat(this.props.products.subTotal).toFixed(2).replace(".", ",")}</span></p>
          <p className="frete"><span>Frete</span><span>R$ {parseFloat(this.props.products.shippingTotal).toFixed(2).replace(".", ",")}</span></p>
           <p className="desconto"><span>Desconto</span><span>- R$ {parseFloat(this.props.products.discount).toFixed(2).replace(".", ",")}</span></p>
          <p className="total"><span>Total</span><span>R$ {parseFloat(this.props.products.total).toFixed(2).replace(".", ",")}</span></p>
        </div>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  products: state.productReducer.products
});

export default connect(
  mapStateToProps,
  { getProducts }
)(Total);
