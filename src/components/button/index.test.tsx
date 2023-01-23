import { fireEvent, render } from '@testing-library/react'
import Button from '.'
import { vi } from 'vitest'
import { renderWithTheme } from '../../utils/helpers';

describe('Button component', () => {

  it('should render a button', () => {
    const { getByText } = render(renderWithTheme(<Button>teste</Button>)); 
    expect(getByText("teste")).toBeDefined()
  });
  it('should render a button disabled', () => {
    const { getByText } = render(renderWithTheme(<Button disabled={true}>teste</Button>)) 
    expect(getByText("teste")).toBeDisabled()
  });
  it('should fire event click', () => {
    const onClickMock = vi.fn();
    const { getByText } = render(renderWithTheme(<Button onClick={onClickMock}>teste</Button>)); 
    fireEvent.click(getByText("teste"))
    expect(onClickMock).toBeCalled()
  });
})