import React from 'react'
import { render } from '@testing-library/react'

import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

const renderWithRouter = (component, history) => {
  const routerHistory = history || createMemoryHistory()

  return render(<Router history={routerHistory}>{component}</Router>)
}

export default renderWithRouter
