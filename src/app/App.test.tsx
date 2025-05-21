import { render } from '@testing-library/react'

import App from './App'
import { BrowserRouter } from 'react-router-dom'

test('renders learn react link', () => {
  const { getByTestId } = render(<BrowserRouter><App /></BrowserRouter>)
  const linkElement = getByTestId("wrapper-app")
  expect(linkElement).toBeInTheDocument()
})
