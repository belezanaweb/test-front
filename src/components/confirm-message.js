import React, { Component } from 'react'
import { Message } from '../css/styles'

import checkImage from '../assets/img/checked.png'

class ConfirmMessage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: ''
    }
  }

  render() {
    return (
      <Message>
        <img src={checkImage} alt="Checkmark" />
        <span>{this.props.message}</span>
      </Message>
    )
  }
}

export default ConfirmMessage
