import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

import { ButtonStyle } from './styles'

const Button = ({ title, history }) => (
  <ButtonStyle onClick={() => history.push('/payment')}>
    <p>{title}</p>
  </ButtonStyle>
)

Button.propTypes = {
  title: PropTypes.string.isRequired,
  history: PropTypes.shape({}).isRequired
}

export default withRouter(Button)
