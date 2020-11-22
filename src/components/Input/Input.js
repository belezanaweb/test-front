import React from 'react'
import styled from 'styled-components'
import * as palette from './../../styles/variables'

const Input = styled.input`
  height: 45px;
  border: 1px solid #e7e7e7;
  border-radius: 3px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  font-size: 16px;
  font-family: ${palette.FONT_FAMILY};
  max-width: 100%;
  padding: 0px 10px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #e0e7ee;
  }
  &:focus {
    outline-style: none;
    border: 1px solid #a43287;
  }
`

const Label = styled.span`
  color: #ccc;
  font-size: 12px;
  font-family: ${palette.FONT_FAMILY};
  padding-bottom: 5px;
  font-weight: bold;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-bottom: 25px;
  width: 100%;
`

export default function BInput(props) {
  function onChange(e) {
    if (props.onChange) {
      props.onChange(e)
    }
  }

  return (
    <Container>
      <Label> {props.label} </Label>
      <Input
        maxLength={props.maxlength}
        type={props.type}
        onChange={(e) => {
          onChange(e.target.value)
        }}
        placeholder={props.placeHolder ? props.placeHolder : null}
      />
    </Container>
  )
}
