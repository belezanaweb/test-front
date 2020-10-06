import React, { FormEvent } from 'react'
import PropTypes from 'prop-types'
import { ButtonStyled } from './styles'

type types = 'primary' | 'default' | 'link' | 'outline' | 'secondary'
interface IProps {
  type?: types
  text?: string
  className?: string
  onClick(): void
}

const Button: React.FC<IProps> = ({ type, text, onClick, className }) => {
  function onClickButton(e: FormEvent): void {
    e.preventDefault()
    onClick()
  }

  return (
    <ButtonStyled className={`${type} ${className}`} onClick={(e) => onClickButton(e)}>
      {text}
    </ButtonStyled>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  type: PropTypes.oneOf(['default', 'primary', 'outline', 'link', 'secondary'])
}

Button.defaultProps = {
  text: '',
  type: 'default',
  className: ''
}

export default Button
