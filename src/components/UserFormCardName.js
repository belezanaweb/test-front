import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as StoreActions from '../store/actions/index.js';

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
  }
}

class UserFormCartName extends Component {

  state = {
    cardName: ''
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
      </div>
    );
  }

  validateCardName = (updateValue) => {
    updateValue = updateValue.toUpperCase()
    this.setState({ cardName: updateValue })
    if (updateValue.length > 5) {
      this.props.addName(updateValue);
    } else {
      this.props.addName('');
    }
  }

}

const mapStateToProps = state => ({
  state
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(StoreActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserFormCartName);