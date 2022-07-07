import React from 'react'
import { render } from '../../../test-utils'
import { PageSkeleton } from './PageSkeleton'

const renderComponent = () => render(<PageSkeleton />)

describe('PageSkeleton', () => {
  test('renders correctly', () => {
    const { baseElement } = renderComponent()
    expect(baseElement).toMatchSnapshot()
  })
})
