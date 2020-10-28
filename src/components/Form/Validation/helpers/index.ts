import { TValidation } from '../interface'

export const jsonToValidatorJS = (validation: TValidation): string => {
  if (validation.value) {
    return `${validation.type}:${validation.value}`
  }
  return validation.type
}
