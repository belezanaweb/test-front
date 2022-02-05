import React from 'react'
import * as CSS from './style'
import { useNavigate } from 'react-router-dom'

let navigate

export default function Button({ toPage, disabled, children }) {
  navigate = useNavigate()
  return (
    <CSS.Button onClick={() => handleClick(toPage)} disabled={disabled}>
      {children ?? 'Text Button'}
    </CSS.Button>
  )
}

function handleClick(toPage) {
  navigate(`/${toPage}`)
}
