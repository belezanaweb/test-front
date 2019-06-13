import React from 'react'

class MainScene extends React.Component {
  componentWillMount() {
    this.props.history.push('/cart')
  }
  render() {
    return <div />
  }
}

export default MainScene
