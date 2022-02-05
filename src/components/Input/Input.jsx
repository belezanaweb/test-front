import React from 'react'
import * as CSS from './style'

export default function Input({ type, placeholder }) {
  return <CSS.Input type={type} placeholder={placeholder ?? 'Placeholder'} />
}
