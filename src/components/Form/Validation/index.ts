import { IValidation, TField, TValidateErrors, TValidationObject } from './interface'
import ValidationBuilder from './Builder'
import Validator from './custom'

export default class Validation implements IValidation {
  validation: TValidationObject

  constructor(fields: TField[]) {
    this.validation = this.createValidation(fields)
  }

  createValidation = (fields: TField[]): TValidationObject => {
    const validations = { rules: {}, attributes: {} }
    const builder = new ValidationBuilder()

    fields.forEach((field) => {
      const validation = builder.formatValidation(field)
      if (Object.keys(validation.rules).length) {
        validations.rules = { ...validations.rules, ...validation.rules }
        validations.attributes = { ...validations.attributes, ...validation.attributes }
      }
    })

    return validations
  }

  validateForm = (values: Object): TValidateErrors => {
    const validator = new Validator(values, this.validation.rules)

    validator.setAttributeNames({ ...this.validation.attributes })
    validator.passes()

    return validator.errors
  }

  validateFields = (fields: Object): TValidateErrors => {
    const allFields = Object.keys(fields)

    const filteredRules = Object.keys(this.validation.rules)
      .filter((key) => allFields.includes(key))
      .reduce((obj: any, key) => {
        obj[key] = this.validation.rules[key]
        return obj
      }, {})

    const validator = new Validator(fields, filteredRules)

    validator.setAttributeNames({ ...this.validation.attributes })
    validator.passes()

    return validator.errors
  }
}
