import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Detail from './Detail'

const Bill = ({ bill }) => (
  <ul>
    <Detail value={bill.card || '****.****.****.1234'} />
    <Detail value={bill.name || 'John Doe'} />
    <Detail value={bill.expiration || '01/2020'} />
  </ul>
)

Bill.propTypes = {
  bill: PropTypes.shape({
    card: PropTypes.string,
    name: PropTypes.string,
    expiration: PropTypes.string
  }).isRequired
}

const mapStateToProps = state => ({
  bill: state.checkout.data
})

export default connect(mapStateToProps)(Bill)
