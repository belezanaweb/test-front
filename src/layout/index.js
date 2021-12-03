import React from 'react'
import { StepWizzard } from 'components'
import { useLocation } from 'react-router'

const getActiveStep = (pathname) => {
  switch (pathname) {
    case '/':
      return 0
    case '/payment':
      return 1
    case '/confirmation':
      return 2
    default:
      return 0
  }
}

export default function Layout(props) {
  const { pathname } = useLocation()

  return (
    <React.Fragment>
      <StepWizzard
        steps={['Sacola', 'Pagamento', 'Confirmação']}
        activeStep={getActiveStep(pathname)}
      />
      {props.children}
    </React.Fragment>
  )
}
