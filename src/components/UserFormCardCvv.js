import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as StoreActions from '../store/actions/index.js';
import Color from '../components/Colors';

const styles = {
  container: {
    padding: '15px 0 15px 15px',
    width: '100px',
    float: 'left'
  },
  input: {
    width: '100%',
    height: '47px',
    border: '2px solid #ccc',
    textAlign: 'center'
  },
  label: {
    width: '100%',
    color: '#c0c0c0',
    fontSize: '11px',
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

class UserFormCartCvv extends Component {
  state = {
    cardCvv: '',
    error: ''
  };

  render() {
    return (
      <div style={styles.container}>
        <label style={styles.label}>CVV:</label>
        <input
          style={styles.input}
          type='text'
          onChange={e => this.validate(e.target.value)}
          maxLength={3}
          value={
            this.state.cardCvv !== '' &&
              this.state.cardCvv !== null ?
              this.state.cardCvv :
              this.props.cardCvv
          }
        />

        <div style={styles.error}>{this.state.error}</div>

      </div>
    );
  }

  validate = (updateValue) => {
    this.setState({ cardCvv: updateValue })
    if (updateValue.length === 3) {
      this.props.addCvv(updateValue)
      this.setState({ error: "" })
    } else {
      this.props.addCvv('');
      this.setState({ error: "mínimo 3 dígitos" })
    }
  }

}

const mapStateToProps = state => ({
  state
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(StoreActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserFormCartCvv);