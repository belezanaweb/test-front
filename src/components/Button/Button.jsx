import React from 'react'
import * as CSS from './style'

export default function Button({ disabled, children }) {
  return <CSS.Button disabled={disabled}>{children ?? 'Text Button'}</CSS.Button>
}
