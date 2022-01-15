import React, { useCallback, useState } from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import Input from '../Input'

function MyOuterComponent({ mask }) {
  const [value, setValue] = useState('')

  return (
    <Input
      label="Nome do Titular:"
      id="test"
      placeholder="Como no cartão"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      mask={mask}
    />
  )
}
describe('Test of Input', () => {
  test('Verifiy if change', () => {
    render(<MyOuterComponent />)
    fireEvent.change(screen.getByLabelText('Nome do Titular:'), { target: { value: '123' } })
    expect(screen.getByLabelText('Nome do Titular:').value).toBe('123')
  })

  test('Verifiy if ', () => {
    render(<MyOuterComponent mask="9-9" />)
    fireEvent.change(screen.getByLabelText('Nome do Titular:'), { target: { value: '1' } })
    expect(screen.getByLabelText('Nome do Titular:').value).toBe('_-_')
  })
})
