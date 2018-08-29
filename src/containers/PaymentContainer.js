import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { saveData } from '../actions';

import Box from '../components/Box';
import Summary from '../components/Summary';
import Button from '../components/Button';

class PaymentContainer extends React.Component {

  componentDidMount() {
    const { data } = this.props;

    if (!data) {
      fetch('https://www.mocky.io/v2/5b15c4923100004a006f3c07')
      .then(res => res.json())
      .then(
        result => {
          this.props.saveData(result);
        }
      )
    }
  }

  render() {
    const { data } = this.props;

    if (!data) return <span></span>

    const {
      total,
      subTotal,
      shippingTotal,
      discount
    } = data

    return (
      <Fragment>
        <Box title='cartão de crédito'>
          <span>forms here</span>
        </Box>
        <Summary
          products={subTotal}
          shipping={shippingTotal}
          discount={discount}
          total={total} />
        <Button title='finalizar o pedido' />
    </Fragment>
    )
  }
}

const mapStateToProps = ({ data }) => ({
  data
});

export default connect(
  mapStateToProps,
  {
    saveData
  }
)(PaymentContainer);
