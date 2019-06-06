import React, { Component } from 'react'

import { CheckIcon } from '../Icons'
import { Container, Text } from './styles'

export default class ResultBox extends Component {
  render() {
    return (
      <Container>
        <CheckIcon className="icon" />
        <Text>{this.props.text}</Text>
      </Container>
    )
  }
}
