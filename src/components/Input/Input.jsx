import React from 'react'
import * as CSS from './style'

export default function Input({ label, type, placeholder }) {
  return (
    <CSS.Wrapper>
      <CSS.Label>{label}</CSS.Label>
      <CSS.Input type={type} placeholder={placeholder ?? 'Placeholder'} />
    </CSS.Wrapper>
  )
}
