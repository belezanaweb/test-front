import React, { Component } from 'react';
import UserFormCardNumber from '../components/UserFormCardNumber';
import UserFormCardName from '../components/UserFormCardName';
import UserFormCardDate from '../components/UserFormCardDate';
import UserFormCardCvv from '../components/UserFormCardCvv';


class UserForm extends Component {

  render() {
    return (
      <div>
          <UserFormCardNumber cardNumber={this.props.cardNumber} />
          <UserFormCardName cardName={this.props.cardName} />
          <UserFormCardDate cardDate={this.props.cardDate} />
          <UserFormCardCvv cardCvv={this.props.cardCvv} />
      </div>
    );
  }

}

export default UserForm;