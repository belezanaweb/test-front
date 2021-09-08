import React from 'react'
import { render, screen } from '@testing-library/react'

import Loading from './Loading'

describe('Loading component', () => {
  it('Should render correctly', async () => {
    render(<Loading />)

    expect(screen.getByTestId('loading')).toHaveStyle('color: var(--primary')
  })
})
