import React from "react";
import {
  render,
  fireEvent
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import FormPayment from "../components/FormPayment";
import CardProvider from '../provider/CardProvider'

describe('initial rendering', () => {
  test('Card number input exists on the screen', () => {
    const {
      getByPlaceholderText
    } = render(<CardProvider><FormPayment /></CardProvider>  )

    const input = getByPlaceholderText('____.____.____.____')

    expect(input).toBeInTheDocument()
  })

  test('Card name input exists on the screen', () => {
    const {
      getByPlaceholderText
    } = render(<CardProvider><FormPayment /></CardProvider>  )

    const input = getByPlaceholderText('Como no cartão')

    expect(input).toBeInTheDocument()
  })

  test('Card validity input exists on the screen', () => {
    const {
      getByPlaceholderText
    } = render(<CardProvider><FormPayment /></CardProvider>  )

    const input = getByPlaceholderText('__/____')

    expect(input).toBeInTheDocument()
  })

  test('Card cvv input exists on the screen', () => {
    const {
      getByPlaceholderText
    } = render(<CardProvider><FormPayment /></CardProvider>  )

    const input = getByPlaceholderText('___')

    expect(input).toBeInTheDocument()
  })

})

describe('insert data into input', () => {
  test('when the user types in the number card input, the text must appear', () => {
    const {
      getByPlaceholderText
    } = render(<CardProvider><FormPayment /></CardProvider>)

    const input = getByPlaceholderText('____.____.____.____')

    fireEvent.change(input, {
      target: {
        value: '1234123412341234'
      }
    })

    expect(input).toHaveValue('1234.1234.1234.1234')
  })
  test('when the user types in the name card input, the text must appear', () => {
    const {
      getByPlaceholderText
    } = render(<CardProvider><FormPayment /></CardProvider>)

    const input = getByPlaceholderText('Como no cartão')

    fireEvent.change(input, {
      target: {
        value: 'melissa tammy'
      }
    })

    expect(input).toHaveValue('melissa tammy')
  })
  test('when the user types in the validity card input, the text must appear', () => {
    const {
      getByPlaceholderText
    } = render(<CardProvider><FormPayment /></CardProvider>)

    const input = getByPlaceholderText('__/____')

    fireEvent.change(input, {
      target: {
        value: '122020'
      }
    })

    expect(input).toHaveValue('12/2020')
  })
  test('when the user types in the validity card input, the text must appear', () => {
    const {
      getByPlaceholderText
    } = render(<CardProvider><FormPayment /></CardProvider>)

    const input = getByPlaceholderText('___')

    fireEvent.change(input, {
      target: {
        value: '123'
      }
    })

    expect(input).toHaveValue('123')
  })
})
