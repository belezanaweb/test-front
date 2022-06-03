import React from 'react'

type Props = {
  type: string
  placeholder: string
  label: string
}

function Input({ type, placeholder, label }: Props) {
  return <input type={type} placeholder={placeholder} />
}

export default Input
