// test utils file
import { BrowserRouter } from 'react-router-dom'
import { render } from '@testing-library/react'

export const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, document.title, route)

  return render(ui, { wrapper: BrowserRouter })
}
