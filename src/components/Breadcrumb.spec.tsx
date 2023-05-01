import { Mock, afterEach, describe, it, vi } from 'vitest'
import BreadcrumbItem from './BreadcrumbItem'
import Breadcrumb from './Breadcrumb'
import { render } from '@testing-library/react'
import { useLocation } from 'react-router-dom'

vi.mock('react-router-dom', () => ({
  useLocation: vi.fn().mockImplementation(() => ({
    pathname: '/'
  }))
}))

vi.mock('./BreadcrumbItem', () => ({
  default: vi.fn()
}))

describe('Testing the Breadcrumb component', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })
  it('should render the BreadcrumbItem component with the correct props given the user location', () => {
    render(<Breadcrumb />)
    expect(BreadcrumbItem).toBeCalledWith({ isActive: true, children: 'Sacola' }, {})
    expect(BreadcrumbItem).toBeCalledWith({ isActive: false, children: 'Pagamento' }, {})
    expect(BreadcrumbItem).toBeCalledWith({ isActive: false, children: 'Confirmação' }, {})
    expect(BreadcrumbItem).toHaveBeenCalledTimes(3)
  })

  it('should render the BreadcrumbItem component with the correct props given the new user location', () => {
    (useLocation as Mock).mockImplementationOnce(() => ({pathname: "pagamento"}))
    render(<Breadcrumb />)
    expect(BreadcrumbItem).toBeCalledWith({ isActive: false, children: 'Sacola' }, {})
    expect(BreadcrumbItem).toBeCalledWith({ isActive: true, children: 'Pagamento' }, {})
    expect(BreadcrumbItem).toBeCalledWith({ isActive: false, children: 'Confirmação' }, {})
    expect(BreadcrumbItem).toHaveBeenCalledTimes(3)
  })
})
