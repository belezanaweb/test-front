import React from 'react'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import mockStore from '../../shared/mockedStore'
import theme from '../../../ui/theme'

import Container from './CardDataContainer'

describe('<CardDataContainer />', () => {
  it('should shows payments stored data', () => {
    const { container } = render(
      <Provider
        store={mockStore({
          payment: {
            number: '1234567887654321',
            holder: 'Dummy User',
            expirationDate: '07/29'
          }
        })}
      >
        <ThemeProvider theme={theme}>
          <Container />
        </ThemeProvider>
      </Provider>
    )

    expect(container.children[0].textContent).toBe('****.****.****.4321')
    expect(container.children[1].textContent).toBe('Dummy User')
    expect(container.children[2].textContent).toBe('07/29')
  })
})
