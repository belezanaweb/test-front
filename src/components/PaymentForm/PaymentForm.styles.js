import styled from 'styled-components'
import {
  GenericWrapperSection,
  GenericWrapperTitle,
  GenericWrapperWrapper
} from '../GenericWrapper/GenericWrapper'
import { Input } from '../Input/Input'

export const PaymentFormSection = styled(GenericWrapperSection)``

export const PaymentFormWrapper = styled(GenericWrapperWrapper)`
  display: grid;
  grid-template-columns: 52.45901% 1fr;
  grid-gap: 25px 20px;
`

export const PaymentFormWideInput = styled(Input)`
  grid-column-end: span 2;
`

export const PaymentFormTitle = styled(GenericWrapperTitle)``
