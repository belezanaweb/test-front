import React, { Component } from 'react'
import BagItemsList from './BagItemsList'

export default class Bag extends Component {
  render() {
    return (
      <div>
        <p>Produtos</p>
        <BagItemsList />
      </div>
    )
  }
}
