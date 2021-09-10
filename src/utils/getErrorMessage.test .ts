import getErrorMessage from '@/utils/getErrorMessage'

describe('getErrorMessage', () => {
  test('Should return a correct required message', () => {
    const errorMessage = getErrorMessage('required')

    expect(errorMessage).toBe('Campo obrigatório')
  })

  test('Should return a correct error not identified', () => {
    const errorMessage = getErrorMessage('another')

    expect(errorMessage).toBe('Tipo de erro não identificado')
  })
})
