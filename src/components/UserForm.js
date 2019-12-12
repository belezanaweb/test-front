import React, { Component } from 'react';
import UserFormCardNumber from '../components/UserFormCardNumber';
import UserFormCardName from '../components/UserFormCardName';
import UserFormCardDate from '../components/UserFormCardDate';
import UserFormCardCvv from '../components/UserFormCardCvv';

const styles = {
  container: {
    borderWidth: '1px',
    width: '100%',
    maxWidth: '800px',
    minWidth: '250px',
    margin: '0 auto',
    minHeight: '50px',
    borderColor: '#c0c0c0',
    borderStyle: 'solid',
    WebkitBoxShadow: '0 2px 2px rgba(0, 0, 0, 0.3)',
    MozBoxShadow: '0 2px 2px rgba(0, 0, 0, 0.3)',
    boxShadow: '0 2px 2px rgba(0, 0, 0, 0.3)',
    background: '#fff',
    padding: '10px 0',
    overflow: 'hidden'
  }
};

class UserForm extends Component {

  render() {
    return (
      <div style={styles.container}>
          <UserFormCardNumber cardNumber={this.props.cardNumber} />
          <UserFormCardName cardName={this.props.cardName} />
          <UserFormCardDate cardDate={this.props.cardDate} />
          <UserFormCardCvv cardCvv={this.props.cardCvv} />
      </div>
    );
  }

}

export default UserForm;