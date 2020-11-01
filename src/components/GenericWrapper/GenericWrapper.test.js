import React from 'react'
import { render, screen } from '@testing-library/react'
import { GenericWrapperSection, GenericWrapperWrapper, GenericWrapperTitle } from './GenericWrapper'

test('renders GenericWrapperSection', () => {
  render(<GenericWrapperSection>Teste</GenericWrapperSection>)

  screen.getByText('Teste')
})

test('renders GenericWrapperWrapper', () => {
  render(<GenericWrapperWrapper>Teste</GenericWrapperWrapper>)

  screen.getByText('Teste')
})

test('renders GenericWrapperTitle', () => {
  render(<GenericWrapperTitle>Teste</GenericWrapperTitle>)

  screen.getByText('Teste')
})
