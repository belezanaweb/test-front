import React, { useState } from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'

import Input from './index'

function InputUpdate() {
  const [value, setValue] = useState('')

  return (
    <Input type="text" placeholder="placeholder" label="label" value={value} setValues={setValue} />
  )
}

describe('[Atoms] - Input', () => {
  it('should render on screen', () => {
    render(<InputUpdate />)
    expect(screen.getByText('label')).toBeInTheDocument()
  })
})
