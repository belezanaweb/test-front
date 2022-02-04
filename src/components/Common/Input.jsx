import React from 'react'
import styled from 'styled-components'
import InputMask from 'react-input-mask'

/**
 *  Function to render button
 *  @property {string} labelText - label of the input
 *  @property {string} type - type of the input
 *  @property {string} id - id of the input
 *  @property {function} onChange - function to change the state
 */

export const Input = ({
  id,
  labelText,
  type,
  placeholder,
  mask,
  register,
  error,
  defaultValue,
  onChange,
  maxLength
}) => {
  return (
    <Container error={!!error}>
      <Label>{labelText}</Label>
      {mask ? (
        <InputMask
          mask={mask}
          placeholder={placeholder}
          id={id}
          className="inputMask"
          defaultValue={defaultValue}
          {...register}
        ></InputMask>
      ) : (
        <input
          className="inputMask"
          maxLength={maxLength}
          placeholder={placeholder}
          id={id}
          type={type}
          defaultValue={defaultValue}
          onChange={onChange}
          {...register}
        />
      )}
      {error && <Error>{error}</Error>}
    </Container>
  )
}

export const Container = styled.div`
  .inputMask {
    width: 100%;
    height: 45px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    border-radius: 3px;
    background-color: #fff;
    border: ${(props) => (props.error ? '1px solid #F30' : '1px solid #E7E7E7')};
    box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.2);
    margin-top: 5px;
    margin-bottom: ${(props) => (props.error ? '0' : '25px')};
    padding: 13px;
    font-size: 16px;
    line-height: 19px;
    outline: none;
    text-transform: uppercase;

    &:focus {
      border: 1px solid #a43287;
    }

    ::placeholder {
      color: #e0e7ee;
      text-transform: none;
    }

    :-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: #e0e7ee;
      text-transform: none;
    }
  }
`

export const Label = styled.label`
  color: #ccc;
  font-size: 12px;
  font-weight: 700;
  line-height: 14px;
`

export const Error = styled.h2`
  margin: 0px;
  margin: 3px 0px 20px 0px;
  color: #f30;
  font-size: 12px;
  line-height: 14px;
  font-weight: normal;
`
