import React, { Fragment, Component } from 'react';
import { connect } from "react-redux";

/**
 * Styles
 */
import { SectionTitle, BoxArea } from '../../assets/global';
import { PaymentInfo } from './styles';

class PaymentDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <SectionTitle>Pagamento</SectionTitle>
        <BoxArea>
          <PaymentInfo>
            ****.****.****.{this.props.cardForm.data.cardNumber.split('.')[3]} <br />
            {this.props.cardForm.data.cardName} <br />
            {this.props.cardForm.data.cardExpiration}
      </PaymentInfo>
        </BoxArea>
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
)(PaymentDetails);
