import React from 'react'

import { renderWithThemeProvider } from '../../../utils/test.utils'

import Label from './Label'

describe('Label', () => {
  it('should render without crash', () => {
    const id = 'label'

    const { getByTestId } = renderWithThemeProvider(<Label data-testid={id} text="Some label" />)

    const label = getByTestId(id)

    expect(label).toBeInTheDocument()
  })

  it('should add ":" in the end of the text', () => {
    const id = 'label'
    const text = 'Some label'
    const expectedText = 'Some label:'

    const { getByTestId } = renderWithThemeProvider(<Label data-testid={id} text={text} />)

    const label = getByTestId(id)

    expect(label.textContent).toEqual(expectedText)
  })
})
