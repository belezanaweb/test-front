import React from 'react'

import StepBar from '.'

export default {
  title: 'Components/StepBar',
  component: StepBar
}

export const Default: React.FC<{}> = () => (
  <StepBar
    steps={[
      { name: 'Sacola', isActive: false },
      { name: 'Pagamento', isActive: true },
      { name: 'Confirmação', isActive: false }
    ]}
  />
)
