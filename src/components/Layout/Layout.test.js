import React from 'react'
import { render } from '@testing-library/react'
import { Layout, LayoutGrid, LayoutAside, LayoutContainer } from './Layout'

test('renders Layout', () => {
  const { container } = render(
    <Layout>
      <LayoutGrid>
        <LayoutContainer>Teste</LayoutContainer>
        <LayoutAside>Teste</LayoutAside>
      </LayoutGrid>
    </Layout>
  )

  expect(container).toMatchSnapshot()
})
