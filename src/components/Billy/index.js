import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Detalis from './Detalis'

const Bill = ({ bill }) => (
  <ul>
    <Detalis value={bill.card || '****.****.****.1234'} />
    <Detalis value={bill.name || 'John Doe'} />
    <Detalis value={bill.expiration || '01/2020'} />
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
