import React, { useCallback, useState } from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import Input from '../Input'
import TestUtils from 'react-dom/test-utils'

const changeInputMaskValue = (element, value) => {
  element.value = value
  element.selectionStart = element.selectionEnd = value.length
  TestUtils.Simulate.change(element)
}

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

  test('Verifiy if render mask', () => {
    render(<MyOuterComponent mask="9-9" />)
    fireEvent.change(screen.getByLabelText('Nome do Titular:'), { target: { value: '1' } })
    changeInputMaskValue(screen.getByLabelText('Nome do Titular:'), '1')
    expect(screen.getByLabelText('Nome do Titular:').value).toBe('1-_')
  })
})
