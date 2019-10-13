import React, { Component } from 'react'
import { StyledLoader } from './style'

class Loader extends Component {
  render() {
    return (
      <StyledLoader><div></div><div></div><div></div><div></div></StyledLoader>
    )
  }
}

export default Loader
