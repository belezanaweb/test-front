import React from 'react'
import ContainerPage from '../ContainerPage'
import { render, screen } from '@testing-library/react'

describe('Test of ContainerPage', () => {
  test('Test if is rendering', () => {
    render(
      <ContainerPage>
        <div>teste</div>
      </ContainerPage>
    )
    expect(screen.getByText('teste')).toBeInTheDocument()
  })
})
