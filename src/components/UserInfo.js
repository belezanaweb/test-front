import React, { Component } from 'react';

const styles = {
  container: {
    borderWidth: '1px',
    width: '100%',
    maxWidth: '800px',
    minWidth: '250px',
    margin: '20px auto',
    minHeight: '50px',
    borderColor: '#c0c0c0',
    borderStyle: 'solid',
    WebkitBoxShadow: '0 2px 2px rgba(0, 0, 0, 0.3)',
    MozBoxShadow: '0 2px 2px rgba(0, 0, 0, 0.3)',
    boxShadow: '0 2px 2px rgba(0, 0, 0, 0.3)',
    background: '#fff',
    padding: '10px 0',
    overflow: 'hidden'
  },
  item: {
    padding: '0 10px'
  }
}

class UserInfo extends Component {

  render() {
    let cardNumber = '****.****.****.'+this.props.cardNumber.slice(15, 19);
    let cardName = this.props.cardName;
    let cardDate = this.props.cardDate.split('-').reverse().join('/');

    return (
      <div style={styles.container}>
        <div style={styles.item}> {cardNumber} </div>
        <div style={styles.item}> {cardName} </div>
        <div style={styles.item}> {cardDate} </div>
      </div>
    );

  }

}

export default UserInfo;