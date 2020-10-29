import Validator from '.'
import { fields, values } from './mock/data'
import { formErrors } from './mock/response'

let validator: any

describe('Validation', () => {
  beforeAll(() => {
    validator = new Validator(fields)
  })

  it('should validation property not undefined', () => {
    expect(validator.validation).not.toBeUndefined()
  })

  it('should have property error', () => {
    expect(validator.validateForm(values)).toHaveProperty('errors')
  })

  it('should validade fields and return errors', () => {
    expect(validator.validateForm(values)).toEqual(formErrors)
  })
})
