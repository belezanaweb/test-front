import React, { Component } from 'react';

class UserInfo extends Component {

  render() {
    let cardNumber = '****.****.****.'+this.props.cardNumber.slice(15, 19);
    let cardName = this.props.cardName;
    let cardDate = this.props.cardDate.split('-').reverse().join('/');

    return (
      <div>
        <div> {cardNumber} </div>
        <div> {cardName} </div>
        <div> {cardDate} </div>
      </div>
    );

  }

}

export default UserInfo;