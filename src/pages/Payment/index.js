import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";

/**
 * Styles
 */
import { Inner } from '../../assets/global'

/**
 * Components
 */
import Button from '../../components/Button';
import Summary from '../../components/Summary';
import CardForm from '../../components/CardForm';
import Wizard from '../../components/Wizard';

class Payment extends Component {
  render() {
    return (
      <Fragment>
        <Wizard current={2} />
        <Inner>
          <CardForm />
          <Summary />
          <Button to="/success" disable={this.props.cardForm.validate ? false : true}>Finalizar o pedido</Button>
        </Inner>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  cardForm: state.cardForm
});

export default connect(
  mapStateToProps,
  null
)(Payment);
