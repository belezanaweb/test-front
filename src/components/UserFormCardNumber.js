import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as StoreActions from '../store/actions/index.js';


const styles = {
  container: {
    padding: '5px 18px 5px 15px',
  },
  input: {
    width: '100%',
    height: '40px',
    border: '2px solid #ccc',
    textAlign: 'left',
    textIndent: '20px',
  },
  label: {
    width: '100%',
    color: '#c0c0c0',
    fontSize: '11px',
    clear: 'both',
  }
}

class UserFormCardNumber extends Component {
  state = {
    cardNumber: ''
  };

  render() {
    return (
      <div style={styles.container}>
        <label style={styles.label}>Número do Cartão:</label>

        <input
          id='cardNumber'
          style={styles.input}
          type='text'
          onChange={e => this.validateCardNumber(e.target.value)}
          value={this.state.cardNumber !== '' && this.state.cardNumber !== null ? this.state.cardNumber : this.props.cardNumber}
          placeholder='_ _ _ _-_ _ _ _-_ _ _ _-_ _ _ _'
          maxLength='19'
        />

      </div>
    );
  }

  validateCardNumber = (updateValue) => {
    updateValue = updateValue.replace(/-/g, '');
    this.maskCardNumber(updateValue)
    let regexdigit = /^\d{16}$/;
    if (updateValue.match(regexdigit)) {
      this.props.addCard(this.maskCardNumber(updateValue));
    } else {
      this.props.addCard('');
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

}

const mapStateToProps = state => ({
  state
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(StoreActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserFormCardNumber);