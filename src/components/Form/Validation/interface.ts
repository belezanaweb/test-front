export interface IValidation {
  validation: any
  createValidation: (fields: TField[]) => any
  validateForm: (values: Object) => TValidateErrors
  validateFields: (values: Object) => TValidateErrors
}

export interface IBuilder {
  formatValidation: (field: TField) => TValidationObject
  concatRules: (field: TField) => TValidationList
}

export type TField = {
  id: string
  label: string
  validations?: TValidation[]
}

export type TValidation = {
  type: string
  value?: number | string
}

export type TValidateErrors = {
  errors: Object
}

export type TValidationObject = {
  rules: { [key: string]: Array<string> }
  attributes: { [key: string]: string }
}

export type TValidationList = {
  rules: Array<string>
}

export type TValidationAttributes = {
  attributes: string
}
