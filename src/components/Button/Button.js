import React from 'react'
import styled from 'styled-components'
import * as palette from './../../styles/variables'

const Button = styled.button`
  background-color: ${palette.PRIMARY_BUTTON};
  color: #fff;
  width: 100%;
  border: none;
  border-radius: 3px;
  font-size: 20px;
  height: 60px;
  box-shadow: 0 3px 0 0 #d45a00;
  outline-style: none;

  &:hover {
    outline-style: none;
    background-color: #d45a00;
  }

  @media (min-width: 900px) {
    width: 100%;
  }
`

Button.displayName = 'button'

export default function BButton(props) {
  function onClick(e) {
    if (props.onClick) {
      props.onClick(e)
    }
  }

  return (
    <Button
      onClick={() => {
        onClick()
      }}
    >
      {' '}
      {props.children}{' '}
    </Button>
  )
}
