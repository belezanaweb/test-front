import { FieldProps } from 'formik'

export interface IFieldProps extends FieldProps {
  error?: boolean
  id?: string
  mask?: (string | RegExp)[]
  placeholder?: string
}
