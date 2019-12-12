import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as StoreActions from '../store/actions/index.js';
import Color from '../components/Colors';

const styles = {
  container: {
    padding: '5px 18px 5px 15px'
  },
  input: {
    width: '100%',
    height: '47px',
    border: '2px solid #ccc',
    textIndent: '20px',
  },
  label: {
    width: '100%',
    color: '#c0c0c0',
    fontSize: '11px',
    clear: 'both',
  },
  error: {
    width: '100%',
    color: Color.orange,
    fontWeight: 'bold',
    fontSize: '14px',
    padding: '0 5px',
    clear: 'both',
  }
}

class UserFormCartName extends Component {

  state = {
    cardName: '',
    error: ''
  };

  render() {
    return (
      <div style={styles.container}>
        <label style={styles.label}>Nome do Titular:</label>
        <input
          style={styles.input}
          id='cardName'
          type='text'
          placeholder='Como no cartão'
          onChange={e => this.validateCardName(e.target.value)}
          value={
            this.state.cardName !== '' &&
              this.state.cardName !== null ?
              this.state.cardName :
              this.props.cardName
          }
        />

        <div style={styles.error}>{this.state.error}</div>

      </div>
    );
  }

  validateCardName = (updateValue) => {
    updateValue = updateValue.toUpperCase()
    this.setState({ cardName: updateValue })
    if (updateValue.length > 5) {
      this.props.addName(updateValue);
      this.setState({ error: "" })
    } else {
      this.props.addName('');
      this.setState({ error: "mínimo 6 dígitos" })
    }
  }

}

const mapStateToProps = state => ({
  state
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(StoreActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserFormCartName);