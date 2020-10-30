import React from 'react'
import { render } from '@testing-library/react'
import Breadcrumb from '../Breadcrumb'
import getBreadcrumbItems from '../breadcrumb.service'

const items = getBreadcrumbItems()

test('renders breadcrumb correctly', () => {
  const { getByText } = render(<Breadcrumb items={items} />)
  const breadCrumb = getByText('sacola')

  expect(breadCrumb).toBeInTheDocument()
})
