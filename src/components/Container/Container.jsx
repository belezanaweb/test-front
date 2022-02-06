import React from 'react'
import * as CSS from './style'

export default function Container({ title, transparent, children }) {
  return (
    <CSS.Container>
      <CSS.Title>{title ?? ''}</CSS.Title>
      <CSS.Box transparent={transparent}>{children}</CSS.Box>
    </CSS.Container>
  )
}
