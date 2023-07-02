import { screen, render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from '../../theme'
import Text from '.'
import { describe, expect, it } from 'vitest'

describe('<Text />', () => {
  it('should render successfully', () => {
    render(
      <ThemeProvider theme={theme}>
        <Text color="black" fontSize="small" fontWeight="light">
          text
        </Text>
      </ThemeProvider>
    )

    expect(screen.getByText('text')).toBeInTheDocument()
  })
})
