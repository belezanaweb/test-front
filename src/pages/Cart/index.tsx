import React from 'react'
import TextField from '../../components/TextField'

export function Cart() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        height: '100vh',
        alignItems: 'center'
      }}
    >
      <TextField label="Número do cartão" placeholder="Placeholder" />
    </div>
  )
}
