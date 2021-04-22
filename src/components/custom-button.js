import React, { Component } from 'react'
import { Button, Margin } from '../css/styles'

class CustomButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: ''
    }
  }

  render() {
    return (
      <Margin>
        <Button>{this.props.title}</Button>
      </Margin>
    )
  }
}

export default CustomButton
