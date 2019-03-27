import React, { PureComponent } from "react";
import { Container } from './styles';
import { getProducts } from '../../redux/products/actions';
import { connect } from 'react-redux';

 class Products extends PureComponent {

  componentDidMount (){
    this.props.getProducts();
  }

  render(){
    return(
      <Container>
        <h1>{this.props.titulo}</h1>
        <div className="card">
          {
            this.props.products.items &&

            this.props.products.items.map((item, index)=>{
              return(
                <div className="item" key={index}>
                  <img src={item.product.imageObjects[0].thumbnail} />
                  <div className="detalhe">
                    <p className="desc">{item.product.name}</p>
                    { this.props.price && <p className="preco">R$ {parseFloat(item.product.priceSpecification.price).toFixed(2).replace(".", ",")}</p> }
                  </div>
                </div>
              )
            })

          }
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
)(Products);
