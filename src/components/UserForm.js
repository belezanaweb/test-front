import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActions from '../store/actions/index.js';

class UserForm extends Component {
  state = {
    cardNumber: '',
    cardNumber: '',
    cardDate: '',
    cardCvv: ''
  };

  handleSubmit = () => {
    this.props.addCard(this.state.cardNumber);
  };

  render() {
    return (
      <div className='App'>
        <form id='userInfo' onSubmit={this.handleSubmit}>

          <input
            id='cardNumber'
            type='text'
            onChange={e => this.validateCardNumber(e.target.value)}
            value={this.state.cardNumber}
            placeholder='____-_____-_____-_____'
            maxLength='19'
          />

          <br />

          <input
            id='cardName'
            type='text'
            onChange={e => this.validateCardName(e.target.value)}
            value={this.state.cardName}
          />

          <br />

          <input
            type='text'
            onChange={e => this.validateCardDate(e.target.value)}
            value={this.state.cardDate}
            placeholder='_ _ /_ _ _ _ '
            maxLength='7'
          />

          <br />

          <input
            type='number'
            onChange={e => this.validateCvv(e.target.value)}
            value={this.state.cardCvv}
            maxLength='3'
          />

        </form>
      </div>
    );
  }

  validateCvv = (updateValue) => {
    this.setState({ cardCvv: updateValue })
    if (updateValue.length >= 3) {
      this.props.addCvv(updateValue)
    } else {
      this.props.addCvv(null);
    }
  }


  validateCardDate = (updateValue) => {

    this.maskCardDate(updateValue)

    updateValue = updateValue;
    let regexdigit = /^((0[1-9])|(1[0-2]))\/(\d{4})$/;

    if (updateValue.match(regexdigit)) {

      var today = new Date();

      updateValue = updateValue
        .split('/')
        .reverse()
        .join('-');

      var dateCard = new Date(updateValue)
      dateCard.setDate(dateCard.getDate() + 30);

      if (today > dateCard) {
        console.log('cartão vencido');
        console.log('block')
      } else {
        // console.log('data válida')
        console.log('unblock')
        this.props.addDateCard(updateValue);
      }
    } else {
      // console.log('formato de dada inválido')
      this.props.addDateCard(null);
      console.log('block')
    }
  }

  validateCardName = (updateValue) => {
    if (updateValue.length > 5) {
      this.props.addName(updateValue);
    } else {
      this.props.addName(null);
    }
  }

  validateCardNumber = (updateValue) => {
    updateValue = updateValue.replace(/\-/g, '');
    this.maskCardNumber(updateValue)
    let regexdigit = /^\d{16}$/;
    if (updateValue.match(regexdigit)) {
      this.props.addCard(this.maskCardNumber(updateValue));
    } else {
      this.props.addCard(null);
    }
  }

  maskCardNumber = updateValue => {
    const parte1 = updateValue.slice(0, 4);
    const parte2 = updateValue.slice(4, 8);
    const parte3 = updateValue.slice(8, 12);
    const parte4 = updateValue.slice(12, 16);
    if (updateValue.length >= 4 && updateValue.length <= 8) {
      updateValue = `${parte1}-${parte2}`
    }
    if (updateValue.length >= 9 && updateValue.length <= 12) {
      updateValue = `${parte1}-${parte2}-${parte3}`
    }
    if (updateValue.length >= 13 && updateValue.length <= 16) {
      updateValue = `${parte1}-${parte2}-${parte3}-${parte4}`
    }
    this.setState({ cardNumber: updateValue })
    return updateValue;
  }

  maskCardDate = updateValue => {
    updateValue = updateValue.replace(/\//g, '');
    const parte1 = updateValue.slice(0, 2);
    const parte2 = updateValue.slice(2, 6);
    if (updateValue.length >= 4 && updateValue.length <= 8) {
      updateValue = `${parte1}/${parte2}`
    }
    this.setState({ cardDate: updateValue })
  }

}

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(TodoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);