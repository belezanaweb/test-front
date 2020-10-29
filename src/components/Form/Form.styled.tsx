import styled from 'styled-components'
import { Form as ExternalForm } from 'formik'

export const Message = styled.span`
  color: ${({ theme }) => theme.colors.error};
`
export const Label = styled.label`
  color: ${({ theme }) => theme.colors.base};
  display: inline-block;
  font-size: 1.2rem;
  font-weight: bold;
  line-height: 1.4rem;
  margin-bottom: 0.5rem;
`

export const FieldWrapper = styled.div`
  margin-bottom: 2.5rem;
`

export const Form = styled(ExternalForm)``

export const FormContentBox = styled.section`
  background-color: ${({ theme }) => theme.colors.baseLighten};
  border-radius: 0.3rem;
  box-shadow: 0.1rem 0.1rem 0.5rem 0 rgba(0, 0, 29, 0.22);
  padding: 1.2rem;

  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto;
  grid-template-areas:
    'row1 row1'
    'row2 row2'
    'row3a row3b';

  .field-number {
    grid-area: row1;
  }

  .field-holder {
    grid-area: row2;
  }

  .field-expirationDate {
    grid-area: row3a;
    margin-right: 2.5rem;
  }

  .field-cvv {
    grid-area: row3b;
  }
`
