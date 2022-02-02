import React from 'react'
import styled from 'styled-components'

/**
 *  Function to render button
 *  @property {string} labelText - label of the input
 *  @property {string} type - type of the input
 *  @property {string} id - id of the input
 *  @property {function} onChange - function to change the state
 */

export const Input = ({ id, labelText, type, placeholder, pattern, onChange, ...inputProps }) => {
  return (
    <div>
      <Label>{labelText}</Label>
      <InputClass
        type={type}
        onChange={onChange}
        pattern={pattern}
        placeholder={placeholder}
        {...inputProps}
      />
    </div>
  )
}

export const InputClass = styled.input`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border-radius: 3px;
  background-color: #FFF;
  border: 1px solid #E7E7E7;
  box-shadow: inset 0 1px 2px 0 rgba(0,0,0,0.2);
  margin-top: 5px;
  margin-bottom: 25px;
  padding: 13px;

  ::placeholder {
    color: #E0E7EE;
    font-size: 16px;
    line-height: 19px;
  }

  :-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: #E0E7EE;
    font-size: 16px;
    line-height: 19px;
  }
}
`

export const Label = styled.label`
  color: #ccc;
  font-size: 12px;
  font-weight: 700;
  line-height: 14px;
`
