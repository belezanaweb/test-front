import React from 'react'
import PropTypes from 'prop-types'
import { HeaderBox, HeaderItem } from './styled'

StepWizzard.propTypes = {
  steps: PropTypes.array,
  activeStep: PropTypes.number
}

StepWizzard.defaultProps = {
  steps: [],
  activeStep: 0
}

export default function StepWizzard(props) {
  const { steps, activeStep } = props
  return (
    <HeaderBox>
      {steps.map((step, key) => {
        return <HeaderItem selected={activeStep === key ? true : false}>{step}</HeaderItem>
      })}
    </HeaderBox>
  )
}
