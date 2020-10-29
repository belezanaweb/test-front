import Builder from '.'
import { fields, fieldWithoutId, fieldWithoutLabel } from '../mock/data'
import { correctData } from '../mock/response'

let builder: any

describe('Validation Builder', () => {
  beforeAll(() => {
    builder = new Builder()
  })

  it('should throw error', () => {
    expect(() => builder.formatValidation(fieldWithoutId)).toThrowError('Field need id property')
    expect(() => builder.formatValidation(fieldWithoutLabel)).toThrowError(
      'address need label property'
    )
  })

  it('should return the appropriate structure', () => {
    expect(builder.formatValidation(fields[0])).toHaveProperty('rules')
    expect(builder.formatValidation(fields[0])).toHaveProperty('attributes')
  })

  it('should return empty data', () => {
    expect(builder.formatValidation(fields[2])).toHaveProperty('rules', {})
  })

  it('should return correct data', () => {
    expect(builder.formatValidation(fields[3])).toHaveProperty('rules', correctData)
  })
})
