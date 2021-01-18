import styled from 'styled-components/macro'

export const Form = styled.form`
  @media (min-width: 768px) {
    display: flex;
  }
`

export const FormContent = styled.section`
  background-color: ${({ theme }) => theme.colors.baseLight};
  border-radius: 0.3rem;
  box-shadow: 0.1rem 0.1rem 0.5rem 0 rgba(0, 0, 29, 0.22);
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto;
  grid-template-areas:
    'row1 row1'
    'row2 row2'
    'row3a row3b';
  .input-number {
    grid-area: row1;
  }
  .input-holder {
    grid-area: row2;
  }
  .input-expirationDate {
    grid-area: row3a;
    margin-right: 2.5rem;
  }
  .input-cvv {
    grid-area: row3b;
  }
  padding: 1.2rem;

  @media (min-width: 768px) {
    margin-right: 2rem;
    width: 60%;
  }
`

export const InputMessage = styled.span`
  color: ${({ theme }) => theme.colors.error};
`
export const Label = styled.label`
  color: ${({ theme }) => theme.colors.base};
  display: block;
  font-size: 1.2rem;
  font-weight: bold;
  line-height: 1.4rem;
  margin-bottom: 0.5rem;
`

export const InputWrapper = styled.div`
  margin-bottom: 2.5rem;
`
