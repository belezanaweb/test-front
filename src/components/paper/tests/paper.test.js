import React from 'react'
import { render } from '@testing-library/react'
import Paper from '../Paper'

const content = 'Compra efetuada com sucesso'

test('renders paper content correctly', () => {
  const { getByText } = render(<Paper>{content}</Paper>)
  const contentInPaper = getByText(content)

  expect(contentInPaper).toBeInTheDocument()
})

test('renders title correctly', () => {
  const myTitle = 'Produtos'
  const { getByText } = render(<Paper title={myTitle}>{content}</Paper>)
  const title = getByText(myTitle)

  expect(title).toBeInTheDocument()
})
