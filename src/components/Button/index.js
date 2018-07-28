import React from 'react'
import { withRouter } from 'react-router-dom'

import { ButtonStyle } from './styles'

const Button = ({ title, history }) => (
  <ButtonStyle onClick={() => history.push('/payment')}>
    <p>{title}</p>
  </ButtonStyle>
)

export default withRouter(Button)
