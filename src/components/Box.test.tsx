import React from 'react'
import { screen, render } from '@testing-library/react'

import Box from '@/components/Box'

describe('Box Component', () => {
  test('Should render title correctly', async () => {
    render(
      <Box title="Produtos">
        <span>Children</span>
      </Box>
    )

    const box = await screen.findByTestId('box-title')

    expect(box.innerHTML).toBe('Produtos')
  })
})
