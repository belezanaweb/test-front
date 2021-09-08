import React from 'react'
import { RollerSpinner } from './styles'

const Loading = ({ color }) => (
  <RollerSpinner color={color} data-testid="loading">
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
  </RollerSpinner>
)

Loading.defaultProps = {
  size: 64,
  color: '#FF7800'
}

export default Loading
