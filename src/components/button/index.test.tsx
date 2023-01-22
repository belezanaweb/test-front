import { ThemeProvider } from 'styled-components';
import { fireEvent, render } from '@testing-library/react'

import Theme from '../../theme';
import Button from '.'
import { vi } from 'vitest'

describe('Button component', () => {

  it('should render a button', () => {
    const { getByText } = render(
      <ThemeProvider theme={Theme}>
        <Button>teste</Button>
      </ThemeProvider>
    ); 
    expect(getByText("teste")).toBeDefined()
  });
  it('should render a button disabled', () => {
    const { getByText } = render(
      <ThemeProvider theme={Theme}>
        <Button disabled={true}>teste</Button>
      </ThemeProvider>
      ) 
    expect(getByText("teste")).toBeDisabled()
  });
  it('should fire event click', () => {
    const onClickMock = vi.fn();
    const { getByText } = render(
      <ThemeProvider theme={Theme}>
        <Button onClick={onClickMock}>teste</Button>
      </ThemeProvider>
      ) 
    fireEvent.click(getByText("teste"))
    expect(onClickMock).toBeCalled()
  });
})