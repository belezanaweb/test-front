import React, { Component } from 'react';
import Colors from '../components/Colors'

const styles = {
  container: {
    borderWidth: '1px',
    width: '100%',
    maxWidth: '800px',
    margin: '15px auto',
    minHeight: '130px',
    borderColor: '#ccc',
    borderStyle: 'solid',
  },
  row: {
    fontSize: '0.9rem',
    padding: '14px 20px'
  },
  title: {
    width: '60%',
    float: 'left'
  },
  price: {
    width: '40%',
    float: 'left',
    textAlign: 'right'
  },
  discount: {
    color: Colors.orange,
    fontSize: '0.9rem',
    padding: '12px 20px 24px 20px'
  },
  total: {
    fontSize: '0.9rem',
    padding: '12px 20px',
    fontWeight: 'bold'
  },
};

class FinalizeAccount extends Component {
  render() {

    let subTotal = this.props.subTotal;
    let shippingTotal = this.props.shippingTotal;
    let discount = this.props.discount;
    let total = this.props.total;

    return (
      <div style={styles.container}>
        <div style={styles.row}>
          <div style={styles.title}> PRODUTOS </div>
          <div style={styles.price}> R$ {subTotal} </div>
        </div>
        <div style={styles.row}>
          <div style={styles.title}> FRETE</div>
          <div style={styles.price}> R$ {shippingTotal} </div>
        </div>
        <div style={styles.discount}>
          <div style={styles.title}> DESCONTO</div>
          <div style={styles.price}> -R$ {discount} </div>
        </div>
        <div style={styles.total}>
          <div style={styles.title}> TOTAL</div>
          <div style={styles.price}> R$ {total} </div>
        </div>
      </div>
    );

  }
}

export default FinalizeAccount;