import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as StoreActions from '../store/actions/index.js';

class UserFormCardDate extends Component {
  state = {
    cardDate: ''
  };

  render() {
    return (
      <div>

        <input
          type='text'
          onChange={e => this.validate(e.target.value)}
          placeholder='_ _ /_ _ _ _ '
          maxLength='7'
          value={
            this.state.cardDate !== '' &&
              this.state.cardDate !== null ?
              this.state.cardDate :
              this.props.cardDate
          }
        />

      </div>
    );
  }

  validate = (updateValue) => {

    this.maskCardDate(updateValue)

    let regexdigit = /^((0[1-9])|(1[0-2]))\/(\d{4})$/;

    if (updateValue.match(regexdigit)) {

      var today = new Date();

      let updateValueFormat = updateValue
        .split('/')
        .reverse()
        .join('-');

      var dateCard = new Date(updateValueFormat)
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
      this.props.addDateCard('');
      console.log('block')
    }
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
  state
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(StoreActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserFormCardDate);