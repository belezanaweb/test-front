import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { DataContext } from '../../../context/Context'
import { MemoryRouter } from 'react-router-dom'
import PaymentData from '../PaymentData'
import TestUtils from 'react-dom/test-utils'

const mockedNavigator = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedNavigator
}))

jest.mock('react-hook-form', () => ({
  useForm: () => ({ ...jest.requireActual('react-hook-form').useForm(), handleSubmit: (a) => a })
}))

const changeInputMaskValue = (element, value) => {
  element.value = value
  element.selectionStart = element.selectionEnd = value.length
  TestUtils.Simulate.change(element)
}

describe('Test of PaymentData', () => {
  test('verify if is required', () => {
    const testFunc = jest.fn()
    const [data, setData] = [
      JSON.parse(
        `{"id":"5b15c171e4b0023bb624f616","items":[{"quantity":1,"product":{"sku":"24410","name":"L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium - Máscara de Reconstrução 500g","imageObjects":[{"featured":true,"thumbnail":"https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/1/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png","small":"https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/2/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png","medium":"https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/6/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png","large":"https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/4/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png","extraLarge":"https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/5/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png","valid":true}],"priceSpecification":{"sku":"24410","price":225.9,"originalPrice":225.9,"maxPrice":243.9,"percent":7,"discount":18}}},{"quantity":1,"product":{"sku":"38273","name":"Good Girl Carolina Herrera Eau de Parfum - Perfume Feminino 30ml","imageObjects":[{"featured":true,"thumbnail":"https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/1/good-girl-carolina-herrera-eau-de-parfum-perfume-feminino-30ml-38273-1960525940762131267.jpg","small":"https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/2/good-girl-carolina-herrera-eau-de-parfum-perfume-feminino-30ml-38273-1960525940762131267.jpg","medium":"https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/6/good-girl-carolina-herrera-eau-de-parfum-perfume-feminino-30ml-38273-1960525940762131267.jpg","large":"https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/4/good-girl-carolina-herrera-eau-de-parfum-perfume-feminino-30ml-38273-1960525940762131267.jpg","extraLarge":"https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/5/good-girl-carolina-herrera-eau-de-parfum-perfume-feminino-30ml-38273-1960525940762131267.jpg","valid":true}],"priceSpecification":{"sku":"38273","price":299,"originalPrice":299,"maxPrice":299,"percent":0,"discount":0}}},{"quantity":1,"product":{"sku":"3019","name":"Senscience Inner Restore Intensif - Máscara Capilar 50ml","imageObjects":[{"featured":true,"thumbnail":"https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/1/senscience-inner-restore-intesif-deep-repairing-masque-mascara-de-tratamento-50ml-3019-7903251722539384904.png","small":"https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/2/senscience-inner-restore-intesif-deep-repairing-masque-mascara-de-tratamento-50ml-3019-7903251722539384904.png","medium":"https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/6/senscience-inner-restore-intesif-deep-repairing-masque-mascara-de-tratamento-50ml-3019-7903251722539384904.png","large":"https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/4/senscience-inner-restore-intesif-deep-repairing-masque-mascara-de-tratamento-50ml-3019-7903251722539384904.png","extraLarge":"https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/5/senscience-inner-restore-intesif-deep-repairing-masque-mascara-de-tratamento-50ml-3019-7903251722539384904.png","valid":true}],"priceSpecification":{"sku":"3019","price":99.9,"originalPrice":99.9,"maxPrice":99.9,"percent":0,"discount":0}}}],"subTotal":624.8,"shippingTotal":5.3,"discount":30,"total":618.9}`
      ),
      testFunc
    ]
    render(
      <DataContext.Provider value={[data, setData]}>
        <MemoryRouter initialEntries={['/sacola']}>
          <PaymentData />
        </MemoryRouter>
      </DataContext.Provider>
    )

    userEvent.type(screen.getByLabelText('Número do cartão:'), '1111111111111111')
    changeInputMaskValue(screen.getByLabelText('Número do cartão:'), '1111111111111111')
    expect(screen.getByLabelText('Número do cartão:').value).toBe('1111.1111.1111.1111')
  })

  test('verify the working form', () => {
    const testFunc = jest.fn(() => Promise.resolve(true))
    const [data, setData] = [
      JSON.parse(
        `{"id":"5b15c171e4b0023bb624f616","items":[{"quantity":1,"product":{"sku":"24410","name":"L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium - Máscara de Reconstrução 500g","imageObjects":[{"featured":true,"thumbnail":"https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/1/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png","small":"https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/2/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png","medium":"https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/6/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png","large":"https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/4/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png","extraLarge":"https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/5/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png","valid":true}],"priceSpecification":{"sku":"24410","price":225.9,"originalPrice":225.9,"maxPrice":243.9,"percent":7,"discount":18}}},{"quantity":1,"product":{"sku":"38273","name":"Good Girl Carolina Herrera Eau de Parfum - Perfume Feminino 30ml","imageObjects":[{"featured":true,"thumbnail":"https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/1/good-girl-carolina-herrera-eau-de-parfum-perfume-feminino-30ml-38273-1960525940762131267.jpg","small":"https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/2/good-girl-carolina-herrera-eau-de-parfum-perfume-feminino-30ml-38273-1960525940762131267.jpg","medium":"https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/6/good-girl-carolina-herrera-eau-de-parfum-perfume-feminino-30ml-38273-1960525940762131267.jpg","large":"https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/4/good-girl-carolina-herrera-eau-de-parfum-perfume-feminino-30ml-38273-1960525940762131267.jpg","extraLarge":"https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/5/good-girl-carolina-herrera-eau-de-parfum-perfume-feminino-30ml-38273-1960525940762131267.jpg","valid":true}],"priceSpecification":{"sku":"38273","price":299,"originalPrice":299,"maxPrice":299,"percent":0,"discount":0}}},{"quantity":1,"product":{"sku":"3019","name":"Senscience Inner Restore Intensif - Máscara Capilar 50ml","imageObjects":[{"featured":true,"thumbnail":"https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/1/senscience-inner-restore-intesif-deep-repairing-masque-mascara-de-tratamento-50ml-3019-7903251722539384904.png","small":"https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/2/senscience-inner-restore-intesif-deep-repairing-masque-mascara-de-tratamento-50ml-3019-7903251722539384904.png","medium":"https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/6/senscience-inner-restore-intesif-deep-repairing-masque-mascara-de-tratamento-50ml-3019-7903251722539384904.png","large":"https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/4/senscience-inner-restore-intesif-deep-repairing-masque-mascara-de-tratamento-50ml-3019-7903251722539384904.png","extraLarge":"https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/5/senscience-inner-restore-intesif-deep-repairing-masque-mascara-de-tratamento-50ml-3019-7903251722539384904.png","valid":true}],"priceSpecification":{"sku":"3019","price":99.9,"originalPrice":99.9,"maxPrice":99.9,"percent":0,"discount":0}}}],"subTotal":624.8,"shippingTotal":5.3,"discount":30,"total":618.9}`
      ),
      testFunc
    ]
    const { container } = render(
      <DataContext.Provider value={[data, setData]}>
        <MemoryRouter initialEntries={['/pagamento']}>
          <PaymentData />
        </MemoryRouter>
      </DataContext.Provider>
    )

    userEvent.type(screen.getByLabelText('Número do cartão:'), '1111111111111111')
    changeInputMaskValue(screen.getByLabelText('Número do cartão:'), '1111111111111111')
    expect(screen.getByLabelText('Número do cartão:').value).toBe('1111.1111.1111.1111')
    userEvent.type(screen.getByLabelText('Nome do Titular:'), 'joao')
    changeInputMaskValue(screen.getByLabelText('Nome do Titular:'), 'joao')
    expect(screen.getByLabelText('Nome do Titular:').value).toBe('joao')
    userEvent.type(screen.getByLabelText('Validade (mês/ano):'), '122022')
    changeInputMaskValue(screen.getByLabelText('Validade (mês/ano):'), '122022')
    expect(screen.getByLabelText('Validade (mês/ano):').value).toBe('12/2022')
    userEvent.type(screen.getByLabelText('CVV:'), '1234')
    changeInputMaskValue(screen.getByLabelText('CVV:'), '1234')
    expect(screen.getByLabelText('CVV:').value).toBe('1234')
    fireEvent.submit(container.querySelector('#creditForm'))
    TestUtils.Simulate.submit(container.querySelector('#creditForm'))

    expect(mockedNavigator).toBeCalled()
    expect(testFunc).toBeCalled()
  })
})
