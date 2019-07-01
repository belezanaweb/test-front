import React, { Component } from 'react'
import BagItem from './BagItem'

export default class BagItemsList extends Component {
  render() {
    const bagItemListStyle = {
      width: '100%'
    }
    return (
      <div className="card" style={bagItemListStyle}>
        <div>
          <BagItem />
        </div>
      </div>
    )
  }
}
