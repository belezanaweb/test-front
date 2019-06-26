import React from 'react'
import { render } from 'test-utils'
import Navigation from '.'

describe('Navigation', () => {
  it('should render [snapshot]', () => {
    const { container } = render(
      <Navigation>
        <Navigation.List>
          <Navigation.Item active>Sacola</Navigation.Item>
          <Navigation.Item>Pagamento</Navigation.Item>
          <Navigation.Item>Confirmação</Navigation.Item>
        </Navigation.List>
      </Navigation>
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
