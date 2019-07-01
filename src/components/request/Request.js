import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import BagResume from '../bag/BagResume'
import BagItemsList from '../bag/BagItemsList'
import CardData from '../payment/CardData'
import { getBagItems } from '../../actions/bagActions'

export class Request extends Component {
  componentWillMount() {
    this.props.getBagItems()
  }

  static propTypes = {
    getBagItems: PropTypes.func.isRequired
  }

  render() {
    const requestStyle = {
      backgroundColor: '#EEE',
      paddingLeft: '9px',
      paddingRight: '10px',
      paddingBottom: '100%',
      width: '100%'
    }

    const requestTitleStyle = {
      marginLeft: '13px',
      paddingTop: '10px',
      color: 'gray'
    }

    const succededPaymentStyle = {
      color: 'orange',
      textAlign: 'center'
    }
    return (
      <div style={requestStyle}>
        <p style={{ ...requestTitleStyle, ...succededPaymentStyle }}>Compra efetuada com sucesso</p>
        <CardData />
        <p style={requestTitleStyle}>PRODUTOS</p>
        <BagItemsList showPrice={false} />
        <br />
        <BagResume />
      </div>
    )
  }
}

export default connect(
  null,
  { getBagItems }
)(Request)
