import React from 'react'
import PropTypes from 'prop-types'
import { AiOutlineCheckCircle } from 'react-icons/ai'

import colors from '../../utils/colors'

import { Container, Message, ContainerImage } from './styles.css'

const SuccessMessage = ({ message }) => {
  return (
    <Container>
      <ContainerImage>
        <AiOutlineCheckCircle size="40px" color={colors.primary} />
      </ContainerImage>
      <Message>{message}</Message>
    </Container>
  )
}

SuccessMessage.propTypes = {
  message: PropTypes.string.isRequired
}

export default SuccessMessage
