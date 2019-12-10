import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActions from '../store/actions/index.js';

class UserForm extends Component {
  state = {
    cardNumber: '',
    cardName: ''
  };

  handleSubmit = () => {
    this.props.addCard(this.state.cardNumber);
  };

  render() {
    return (
      <div className='App'>
        <form id="userInfo" onSubmit={this.handleSubmit}>

          <input
            type='text'
            onChange={e => this.validateCardNumber(e.target.value)}
            value={this.state.cardNumber}
            placeholder="____-_____-_____-_____"
            maxLength="19"
          />

          <br/>

          <input
            type='text'
            onChange={e => this.setState({ cardName: e.target.value })}
            value={this.state.cardName}
            ref={input => input && input.focus()}
          />

        </form>
      </div>
    );
  }

  validateCardNumber = (updateNumber) => {
    updateNumber = updateNumber.replace(/\-/g, '');
    this.maskCardNumber(updateNumber)
    var re16digit = /^\d{16}$/;
    console.log(updateNumber)
    if (updateNumber.match(re16digit)) {
      this.props.addCard(this.maskCardNumber(updateNumber));
      console.log("credit card number!");
    }
    else {
      // return false;
    }
  }

  maskCardNumber = updateNumber => {
    const parte1 = updateNumber.slice(0,4);
    const parte2 = updateNumber.slice(4,8);
    const parte3 = updateNumber.slice(8,12);
    const parte4 = updateNumber.slice(12,16);
    if( updateNumber.length >= 4 && updateNumber.length <= 8){
      updateNumber = `${parte1}-${parte2}`
    }
    if( updateNumber.length >= 9 && updateNumber.length <= 12){
      updateNumber = `${parte1}-${parte2}-${parte3}`
    }
    if( updateNumber.length >= 13 && updateNumber.length <= 16){
      updateNumber = `${parte1}-${parte2}-${parte3}-${parte4}`
    }
    this.setState({ cardNumber: updateNumber })
    return updateNumber;
  }

}

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(TodoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);