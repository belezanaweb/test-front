import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { SingleTitle } from './styles'

class BLWSingleTitle extends Component {
  render() {
    const { className, id, title } = this.props

    return (
      <SingleTitle className={`title ${className}`} id={id} data-test="singleTitleComponent">
        <p data-test="title">{title}</p>
      </SingleTitle>
    )
  }
}

BLWSingleTitle.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  title: PropTypes.string
}

export default BLWSingleTitle
