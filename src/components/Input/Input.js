import React from 'react'

const Input = (props) => {
  const { type = 'text' } = props
  return <input type={type}></input>
}

export default Input
