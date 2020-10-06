import React from 'react'
import PropTypes from 'prop-types'
import { ButtonStyled } from '../Button/styles'

type types = 'primary' | 'default' | 'link' | 'outline' | 'secondary'
interface IProps {
  type?: types
  text?: string
  className?: string
}

const ButtonSubmit: React.FC<IProps> = ({ type, text, className }) => {
  return (
    <ButtonStyled className={`${type} ${className}`} type="submit">
      {text}
    </ButtonStyled>
  )
}

ButtonSubmit.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.oneOf(['default', 'primary', 'outline', 'link', 'secondary'])
}

ButtonSubmit.defaultProps = {
  text: '',
  type: 'default',
  className: ''
}

export default ButtonSubmit
