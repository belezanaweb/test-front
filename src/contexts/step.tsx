import React, { createContext, useContext, useState } from 'react'

import { StepPathname } from '@/entities/Step'

export type StepContextType = {
  stepPathnameActive: StepPathname
  setStepPathnameActive: (stepPathname: StepPathname) => void
}

const StepContext = createContext<StepContextType>({
  stepPathnameActive: StepPathname.Sacola,
  setStepPathnameActive: (_steppathname) => null
})

interface OwnProps {
  children: React.ReactElement
}

export default function StepProvider (props: OwnProps): React.ReactElement {
  const { children } = props

  const [stepPathnameActive, setStepPathnameActive] = useState<StepPathname>(StepPathname.Sacola)

  return (
    <StepContext.Provider
      value={{
        stepPathnameActive,
        setStepPathnameActive
      }}
    >
      {children}
    </StepContext.Provider>
  )
}

export function useStep (): StepContextType {
  const context = useContext(StepContext)
  if (!context) throw new Error('useStep must be used within a StepProvider')
  const { stepPathnameActive, setStepPathnameActive } = context
  return { stepPathnameActive, setStepPathnameActive }
}
