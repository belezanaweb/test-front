import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as StoreActions from '../store/actions/index.js';

class UserFormCartName extends Component {
  state = {
    cardName: ''
  };

  render() {
    return (
      <div>

        <input
          id='cardName'
          type='text'
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