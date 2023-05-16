import { fakeCartModel } from '@/test/mocks'
import { render, screen } from 'common-test-config'
import { TabNavigation } from './tab_navigation'

describe('TabNavigation Component', () => {
  let element: HTMLElement

  it('should render element correctly', () => {
    render(<TabNavigation cartData={fakeCartModel} />)

    element = screen.getByTestId('tab-navigation')
    expect(element).toBeInTheDocument()
  })
})
