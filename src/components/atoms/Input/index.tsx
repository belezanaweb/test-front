import React from 'react'

type Props = {
  type: string
}

function Input({ type }: Props) {
  return <input type={type} />
}

export default Input
