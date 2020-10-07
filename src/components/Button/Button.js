import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

const StyledButton = styled.button`
  border-radius: 3px;
  background-color: #ff6c00;
  box-shadow: inset 0 -3px 0 0 #d45a00, 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-align: center;
  text-transform: uppercase;
  border: none;
  margin: 0 auto;
  display: flex;
  height: 59px;
  align-items: center;
  justify-content: center;
  width: calc(100% - 19px);
  padding-top: 6px;

  &:disabled {
    pointer-events: none;
    background-color: #ccc;
    box-shadow: inset 0 -3px 0 0 #999, 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  }
`

function Button({ handleClick, text, disabled = false }) {
  return (
    <StyledButton type="button" onClick={handleClick} disabled={disabled ? disabled : ''}>
      {text}
    </StyledButton>
  )
}

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool
}

export default Button
