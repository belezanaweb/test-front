import React from 'react'
import * as CSS from './style'

export default function Container({ title, children }) {
  return (
    <CSS.Container>
      <CSS.Title>{title ?? 'label'}</CSS.Title>
      {children}
    </CSS.Container>
  )
}
