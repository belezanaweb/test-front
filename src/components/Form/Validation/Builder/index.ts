import { jsonToValidatorJS } from '../helpers'
import { IBuilder, TField, TValidation, TValidationObject, TValidationList } from '../interface'

export default class Builder implements IBuilder {
  formatValidation = (field: TField): TValidationObject => {
    if (!field.id) throw new Error('Field need id property')
    if (!field.label) throw new Error(`${field.id} need label property`)

    const validations: TValidationObject = { rules: {}, attributes: {} }
    const validation: TValidationList = this.concatRules(field)

    if (validation.rules.length) {
      validations.attributes[field.id] = field.label.toLowerCase()
      validations.rules[field.id] = validation.rules
    }

    return validations
  }

  concatRules = (field: TField): TValidationList => {
    const fieldValidations: TValidationList = { rules: [] }

    if (field.validations) {
      field.validations.forEach((validation: TValidation) => {
        fieldValidations.rules.push(jsonToValidatorJS(validation))
      })
    }

    return fieldValidations
  }
}
