import { render } from '@testing-library/react'
import App from './App'

const renderComponent = () => {
  return render(<App />)
}

describe('App', () => {
  it('renders without errors', () => {
    renderComponent()
  })
})
