import React, { Component } from 'react'
import BagItemsList from './BagItemsList'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { getBagItems } from '../../actions/bagActions'
import BagResume from './BagResume'

export class Bag extends Component {
  componentWillMount() {
    this.props.getBagItems()
  }

  static propTypes = {
    getBagItems: PropTypes.func.isRequired
  }

  render() {
    const bagStyle = {
      backgroundColor: '#EEE',
      paddingLeft: '9px',
      paddingRight: '10px',
      paddingBottom: '100%',
      width: '100%'
    }

    const bagTitleStyle = {
      marginLeft: '13px'
    }

    return (
      <div style={bagStyle}>
        <p style={bagTitleStyle}>Produtos</p>
        <BagItemsList showPrice={true} />
        <br />
        <BagResume />
        <br />
        <Link to="/payment">SEGUIR PARA O PAGAMENTO</Link>
      </div>
    )
  }
}

export default connect(
  null,
  { getBagItems }
)(Bag)
