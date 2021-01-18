import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import theme from '../../theme'
import ContentBox from './'

describe('<ContentBox />', () => {
  it('should match a snapshot', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <ContentBox />
      </ThemeProvider>
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
