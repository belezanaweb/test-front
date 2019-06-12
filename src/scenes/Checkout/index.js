import React, { Component } from 'react'

//components
import Flash from './components/Flash'
import Header from './components/Header'

//styles
import { General } from './styles'
import { connect } from 'react-redux'

//pages
import Page from './pages'
class Checkout extends Component {
  render() {
    const { page } = this.props
    return (
      <General>
        <Flash />
        <Header />
        <Page component={page} />
      </General>
    )
  }
}

export default connect(state => ({
  page: state.page.page
}))(Checkout)
