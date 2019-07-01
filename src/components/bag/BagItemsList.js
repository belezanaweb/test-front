import React, { Component } from 'react'
import BagItem from './BagItem'
import PropTypes from 'prop-types'

export default class BagItemsList extends Component {
  static propTypes = {
    showPrice: PropTypes.bool.isRequired
  }
  render() {
    const bagItemListStyle = {
      width: '100%'
    }
    return (
      <div className="card" style={bagItemListStyle}>
        <div>
          <BagItem showPrice={this.props.showPrice} />
        </div>
      </div>
    )
  }
}
