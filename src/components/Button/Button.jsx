import React from 'react'
import * as CSS from './style'
import { useNavigate } from 'react-router-dom'
import * as Global from '../../assets/styles/global'

let navigate

export default function Button({ toPage, disabled, children }) {
  navigate = useNavigate()
  return (
    <Global.Wrapper>
      <CSS.Button onClick={() => handleClick(toPage)} disabled={disabled}>
        {children ?? 'Text Button'}
      </CSS.Button>
    </Global.Wrapper>
  )
}

function handleClick(toPage) {
  navigate(`/${toPage}`)
}
