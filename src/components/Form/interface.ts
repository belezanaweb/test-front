export interface IFields {
  id: string
  label: string
  placeholder: string
  type: string
  mask?: (string | RegExp)[]
  validations: {
    type: string
    value?: number | string
  }[]
}
