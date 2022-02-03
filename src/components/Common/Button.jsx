import React from 'react'
import styled from 'styled-components'

/**
 *  Function to render button
 *  @property {string} text - text of the button
 *  @property {string} type - type of the button
 *  @property {function} onClick - function to handle click
 *  @property {string} disabled - disable the button
 */

const Button = ({ text, type, onClick, ref, disabled = false, ...buttonProps }) => {
  return (
    <button type={type} onClick={onClick} ref={ref} disabled={disabled} {...buttonProps}>
      {text}
    </button>
  )
}

export default styled(Button)`
  width: 100%;
  min-width: 316px;
  border-radius: 3px;
  background-color: #ff6c00;
  box-shadow: inset 0 -3px 0 0 #d45a00, 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  padding: 18px 0px;
  color: #fff;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 24px;
  text-align: center;
  cursor: pointer;
  outline: none;
  border-style: none;

  &:hover {
    background-color: #d45a00;
  }
`
