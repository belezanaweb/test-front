import React, { Component } from 'react';
import Checkout from './Layout/Checkout'
import '../Components/Text.css';
import './Confirmation.css';
import { connect } from 'react-redux'
import ProductList from '../Components/ProductList'

class Confirmation extends Component {
  render() {
    const { productList, paymentInfo } = this.props;

    return(<Checkout style={{
      paddingTop: "50px"
    }}>
      <div className="confirmation-msg">
        <svg viewBox="0 0 365 365" >
          <g stroke="rgb(255, 120, 0)" fill="rgb(255, 120, 0)" strokeWidth={5}>
            <path d="M181.512,363.024C81.43,363.024,0,281.601,0,181.513C0,81.424,81.43,0,181.512,0 c100.083,0,181.513,81.424,181.513,181.513C363.025,281.601,281.595,363.024,181.512,363.024z M181.512,11.71 C87.88,11.71,11.71,87.886,11.71,181.513s76.17,169.802,169.802,169.802c93.633,0,169.803-76.175,169.803-169.802 S275.145,11.71,181.512,11.71z"/>
            <polygon points="147.957,258.935 83.068,194.046 91.348,185.767 147.957,242.375 271.171,119.166 279.451,127.445"/>
          </g>
        </svg>
        <p className="text-highlight">Compra efetuada com sucesso</p>
      </div>

      <div>
        <p className="group-title">Pagamento</p>
        <div className="confirmation-info">
          <p>****.****.****.{paymentInfo.cardLastDigits}</p>
          <p>{paymentInfo.cardHolderName}</p>
          <p>{paymentInfo.expireDate}</p>
        </div>
      </div>

      <ProductList products={productList} compactMode={true} />
    </Checkout>)
  }
}


const mapStateToProps = store => ({
  productList: store.cartState.productList,
  paymentInfo: store.paymentState.paymentInfo
});


export default connect(mapStateToProps)(Confirmation);
