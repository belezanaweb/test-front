import React from 'react'
import { connect } from 'react-redux'

import Detail from './Detail'

const Bill = ({ bill }) => (
  <ul>
    <Detail value={bill.card} />
    <Detail value={bill.name} />
    <Detail value={bill.expiration} />
  </ul>
)

const mapStateToProps = state => ({
  bill: state.checkout.data
})

export default connect(mapStateToProps)(Bill)
