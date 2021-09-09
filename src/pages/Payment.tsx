import React from 'react'

import ResumeValues from '@/components/resume/ResumeValues'
import Button from '@/components/Button'

import { StepPathname } from '@/entities/Step'

function Payment (): React.ReactElement {
  return (
    <>
      <ResumeValues />
      <Button text="Finalizar pedido" href={StepPathname.Confirmacao} />
    </>
  )
}

export default Payment
