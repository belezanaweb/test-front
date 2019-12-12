import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as StoreActions from '../store/actions/index.js';
import Color from '../components/Colors';

const styles = {
  container: {
    padding: '15px 0 15px 15px',
    width: '140px',
    float: 'left',

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

class UserFormCardDate extends Component {
  state = {
    cardDate: '',
    error: ''
  };

  render() {
    return (
      <div style={styles.container}>
        <label style={styles.label}>Validade (mês/ano):</label>
        <input
          style={styles.input}
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
        <div style={styles.error}>{this.state.error}</div>


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
        this.setState({ error: 'cartão vencido' })
        
      } else {
        this.setState({ error: "" })
        this.props.addDateCard(updateValue);
      }
    } else {
      this.setState({ error: 'formato de dada inválido' })
      this.props.addDateCard('');
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