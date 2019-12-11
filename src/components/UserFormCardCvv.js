import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as StoreActions from '../store/actions/index.js';

class UserFormCartCvv extends Component {
  state = {
    cardCvv: ''
  };

  render() {
    return (
      <div>

        <input
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

      </div>
    );
  }

  validate = (updateValue) => {
    this.setState({ cardCvv: updateValue })
    if (updateValue.length === 3) {
      this.props.addCvv(updateValue)
    } else {
      this.props.addCvv('');
    }
  }

}

const mapStateToProps = state => ({
  state
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(StoreActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserFormCartCvv);