import React from 'react'
import loadable from '@loadable/component'
import { Section } from './style'

const Header = loadable(() => import('../../components/Header'), {
  resolveComponent: (components) => components.Header
})

const Form = loadable(() => import('../../components/Form'), {
  resolveComponent: (components) => components.Form
})

export const Payment = () => {
  return (
    <>
      <Header />
      <Section>
        <Form />
      </Section>
    </>
  )
}
