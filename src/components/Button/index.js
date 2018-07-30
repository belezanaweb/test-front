import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

import { ButtonStyle } from './styles'

const Button = ({ title, history, formId }) => (
  <ButtonStyle onClick={() => history.push('/payment')} form={formId}>
    <p>{title}</p>
  </ButtonStyle>
)

Button.propTypes = {
  title: PropTypes.string.isRequired,
  formId: PropTypes.string.isRequired,
  history: PropTypes.shape({}).isRequired
}

export default withRouter(Button)
