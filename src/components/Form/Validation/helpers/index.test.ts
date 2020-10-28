import { jsonToValidatorJS } from '.'
import { validationReq, validationMin } from '../mock/data'
import { helperSimpleResponse, helperValueResponse } from '../mock/response'

describe('Validation Helper', () => {
  it('should format json to correct validatorjs requirements', () => {
    expect(jsonToValidatorJS(validationReq)).toBe(helperSimpleResponse)
    expect(jsonToValidatorJS(validationMin)).toBe(helperValueResponse)
  })
})
