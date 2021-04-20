import React, { Component } from 'react'
import { Resume } from '../css/styles'

class ResumeCard extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Resume>
        <li>
          <h5>PRODUTOS</h5>
          <h5>R$ 20,00</h5>
        </li>
        <li>
          <h5>s</h5>
          <h5>s</h5>
        </li>
        <li className="discount">
          <h5>s</h5>
          <h5>s</h5>
        </li>
        <li>
          <h5 className="total">TOTAL</h5>
          <h5 className="total">R$ 500,00</h5>
        </li>
      </Resume>
    )
  }
}

export default ResumeCard
