import React from 'react'
import * as router from 'react-router'
import { render } from '../../test-utils'
import { Confirmation } from './Confirmation'

const navigate = jest.fn()

beforeEach(() => {
  jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate)
})

const renderComponent = () => render(<Confirmation />)

describe('Confirmation', () => {
  test('goes to bag when there is not products', async () => {
    renderComponent()
    expect(navigate).toHaveBeenCalledWith('/')
  })
})
