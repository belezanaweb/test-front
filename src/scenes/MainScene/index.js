import React from 'react'
import { Redirect } from 'react-router-dom'

class MainScene extends React.Component {
  componentWillMount() {
    this.props.history.push('/cart')
  }
  render() {
    return <div />
  }
}

export default MainScene
