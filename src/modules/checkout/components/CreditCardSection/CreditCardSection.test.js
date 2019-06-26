import React from 'react'
import { render, fireEvent } from 'test-utils'
import CreditCardSection from '.'

describe('CreditCardSection', () => {
  it('should render [snapshot]', () => {
    const { container } = render(<CreditCardSection />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should have no errors on load', () => {
    const { getAllByTestId } = render(<CreditCardSection />)

    expect(() => getAllByTestId('field-error')).toThrow()
  })

  describe('field validation', () => {
    let rendered, mockSetCreditCard

    beforeEach(() => {
      mockSetCreditCard = jest.fn()
      rendered = render(<CreditCardSection setCreditCard={mockSetCreditCard} />)
    })

    describe('number field', () => {
      let input

      beforeEach(() => {
        const { getByTestId } = rendered
        input = getByTestId('field-number')
      })

      it('should validate empty data when blur', () => {
        fireEvent.focus(input)
        const { getAllByTestId, getByTestId } = rendered
        expect(() => getAllByTestId('field-error')).toThrow()
        fireEvent.blur(input)
        expect(getByTestId('field-error')).toHaveTextContent(
          'Número do cartão preenchido incorretamente.'
        )
      })

      it('should validate invalid data when blur', () => {
        fireEvent.change(input, { target: { value: '4444' } })
        const { getAllByTestId, getByTestId } = rendered
        expect(() => getAllByTestId('field-error')).toThrow()
        fireEvent.blur(input)
        expect(getByTestId('field-error')).toHaveTextContent(
          'Número do cartão preenchido incorretamente.'
        )
      })

      it('should pass with valid data', () => {
        fireEvent.change(input, { target: { value: '4111 1111 1111 1111' } })
        const { getAllByTestId } = rendered
        expect(() => getAllByTestId('field-error')).toThrow()
        fireEvent.blur(input)
        expect(() => getAllByTestId('field-error')).toThrow()
      })
    })

    describe('name field', () => {
      let input

      beforeEach(() => {
        const { getByTestId } = rendered
        input = getByTestId('field-name')
      })

      it('should validate empty data when blur', () => {
        fireEvent.focus(input)
        const { getAllByTestId, getByTestId } = rendered
        expect(() => getAllByTestId('field-error')).toThrow()
        fireEvent.blur(input)
        expect(getByTestId('field-error')).toHaveTextContent('Preenchimento obrigatório.')
      })

      it('should pass with valid data', () => {
        fireEvent.change(input, { target: { value: 'Test' } })
        const { getAllByTestId } = rendered
        expect(() => getAllByTestId('field-error')).toThrow()
        fireEvent.blur(input)
        expect(() => getAllByTestId('field-error')).toThrow()
      })
    })

    describe('exp field', () => {
      let input

      beforeEach(() => {
        const { getByTestId } = rendered
        input = getByTestId('field-exp')
      })

      it('should validate empty data when blur', () => {
        fireEvent.focus(input)
        const { getAllByTestId, getByTestId } = rendered
        expect(() => getAllByTestId('field-error')).toThrow()
        fireEvent.blur(input)
        expect(getByTestId('field-error')).toHaveTextContent('Preenchimento obrigatório.')
      })

      it('should validate invalid month when change', () => {
        fireEvent.change(input, { target: { value: '50 / 99' } })
        const { getByTestId } = rendered
        expect(getByTestId('field-error')).toHaveTextContent('Insira um mês válido.')
      })

      it('should validate invalid year when change', () => {
        fireEvent.change(input, { target: { value: '12 / 18' } })
        const { getByTestId } = rendered
        expect(getByTestId('field-error')).toHaveTextContent('Insira uma data futura.')
      })

      it('should pass with valid data', () => {
        fireEvent.change(input, { target: { value: '05/20' } })
        const { getAllByTestId } = rendered
        expect(() => getAllByTestId('field-error')).toThrow()
        fireEvent.blur(input)
        expect(() => getAllByTestId('field-error')).toThrow()
      })
    })

    describe('cvc field', () => {
      let input

      beforeEach(() => {
        const { getByTestId } = rendered
        input = getByTestId('field-cvc')
      })

      it('should validate empty data when blur', () => {
        fireEvent.focus(input)
        const { getAllByTestId, getByTestId } = rendered
        expect(() => getAllByTestId('field-error')).toThrow()
        fireEvent.blur(input)
        expect(getByTestId('field-error')).toHaveTextContent('Preenchimento obrigatório.')
      })

      it('should validate invalid data when blur', () => {
        fireEvent.change(input, { target: { value: '99' } })
        const { getAllByTestId, getByTestId } = rendered
        expect(() => getAllByTestId('field-error')).toThrow()
        fireEvent.blur(input)
        expect(getByTestId('field-error')).toHaveTextContent('Preenchimento obrigatório.')
      })

      it('should pass with valid data', () => {
        fireEvent.change(input, { target: { value: '999' } })
        const { getAllByTestId } = rendered
        expect(() => getAllByTestId('field-error')).toThrow()
        fireEvent.blur(input)
        expect(() => getAllByTestId('field-error')).toThrow()
      })
    })

    it('should call setCreditCard when all input are valid', () => {
      const mockData = {
        num: '4111111111111111',
        name: 'Test',
        exp: '5/2020',
        cvc: '999'
      }
      const { getByTestId } = rendered
      expect(mockSetCreditCard).not.toHaveBeenCalled()
      fireEvent.change(getByTestId('field-number'), { target: { value: mockData.num } })
      expect(mockSetCreditCard).not.toHaveBeenCalled()
      fireEvent.change(getByTestId('field-name'), { target: { value: mockData.name } })
      expect(mockSetCreditCard).not.toHaveBeenCalled()
      fireEvent.change(getByTestId('field-exp'), { target: { value: mockData.exp } })
      expect(mockSetCreditCard).not.toHaveBeenCalled()
      fireEvent.change(getByTestId('field-cvc'), { target: { value: mockData.cvc } })
      expect(mockSetCreditCard).toHaveBeenCalledWith(mockData)
    })
  })
})
