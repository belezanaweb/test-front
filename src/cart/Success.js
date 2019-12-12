import React, { Component } from 'react';
import ProductList from '../components/ProdutctList';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actions/index.js'
import Header from '../components/Header';
import FinalizeAccount from '../components/FinalizeAccount';
import UserInfo from '../components/UserInfo';
import Colors from '../components/Colors';

const styles = {
  msg: {
    color: Colors.orange,
    textAlign: 'center',
    fontWeight: 'bold',
    width: '100%',
    padding: '30px 0 0 0'
  }
}

class Success extends Component {
  render() {
    return (
      <div>
        <Header step={3} />
        <div style={styles.msg}>
          COMPRA EFETUADA COM SUCESSO
        </div>
        <UserInfo
          cardNumber={this.props.cardNumber}
          cardName={this.props.cardName}
          cardDate={this.props.cardDate}
          cardCvv={this.props.cardCvv}
        />
        <ProductList
          items={this.props.items}
          hidePrice={true}
        />
        <FinalizeAccount
          subTotal={this.props.subTotal}
          shippingTotal={this.props.shippingTotal}
          discount={this.props.discount}
          total={this.props.total}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state
};

export default connect(mapStateToProps, actionCreators)(Success)
