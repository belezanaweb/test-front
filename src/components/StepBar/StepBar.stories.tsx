import React from 'react'
import { MemoryRouter, Route } from 'react-router'

import StepBar from '.'

export default {
  title: 'Components/StepBar',
  component: StepBar
}

export const Default: React.FC<{}> = () => {
  return (
    <MemoryRouter initialEntries={['/']}>
      <Route component={(routerProps: any) => <StepBar {...routerProps} />} path="/" />
    </MemoryRouter>
  )
}
