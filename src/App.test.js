import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import axios from 'axios'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})

axios.get = jest.fn().mockResolvedValue({ data: [] })

describe("Initial render", () => {
  test("Button exist in screen", () => {
    const { getByText } = render(<App />)

    expect(getByText(/SEGUIR PARA O PAGAMENTO/)).toBeInTheDocument()
  })

  test("Get data", async () => {
    axios.get = jest.fn().mockResolvedValue({
      data:
      {
        "id": "5b15c171e4b0023bb624f616",
        "items": [],
        "subTotal": 624.8,
        "shippingTotal": 5.3,
        "discount": 30,
        "total": 618.9
      }

    })
    render(<App />)

    expect(axios.get).toHaveBeenCalledWith("http://www.mocky.io/v2/5b15c4923100004a006f3c07")
  })
})