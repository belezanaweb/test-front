import React from 'react'
import { render } from '../../../test-utils'
import { ProductPaper } from './ProductPaper'
import { bagMock } from '../../../../mock/bag'

const renderComponent = () => render(<ProductPaper bag={bagMock} />)

describe('ProductPaper', () => {
  test('renders correctly', async () => {
    const { getByText } = renderComponent()
    getByText(/L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium/i)
    getByText(/225,90 BRL/i)

    getByText(/Good Girl Carolina Herrera Eau de Parfum - Perfume Feminino 30ml/i)
    getByText(/299,00 BRL/i)

    getByText(/Senscience Inner Restore Intensif - Máscara Capilar 50ml/i)
    getByText(/99,90 BRL/i)
  })
})
