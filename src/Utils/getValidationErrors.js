import { ValidationError } from 'yup'

export default function getValidationErrors(err) {
  const validationErrors = {}

  err.inner.forEach((error) => {
    if (error.path) {
      validationErrors[error.path] = error.message
    }
  })

  return validationErrors
}
