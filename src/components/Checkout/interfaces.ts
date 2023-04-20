import { FormValues } from 'components/CheckoutPayment/interfaces'

export interface ImageObjects {
  featured: boolean
  valid: boolean
  thumbnail: string
  small: string
  medium: string
  large: string
  extraLarge: string
}

export type ForwardRefProps = {
  submit: () => Promise<{
    values: FormValues
    valid: boolean
  }>
}

export interface RowWrapperProps {
  align?: 'center' | 'start' | 'end'
}
