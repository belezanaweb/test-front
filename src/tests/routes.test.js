import React from 'react'
import { render, waitForElement } from '@testing-library/react'
import App from '../App'

const renderComponent = () => render(<App />)
test('renders without crashing', async () => {
  const { getByText } = renderComponent()
  await waitForElement(() => getByText('PRODUTOS'))
})
