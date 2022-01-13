import styled from 'styled-components'

export const FormTitle = styled.span`
  margin: 2rem 1rem 0.5rem;
  color: #999;
  font-weight: bold;
  display: block;
`

export const FormContainer = styled.form`
  padding: 2rem;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 1px 1px 5px rgba(0, 0, 29, 0.22);

  display: flex;
  flex-direction: column;

  & div + div {
    margin-top: 2rem;
  }

  @media (max-width: 720px) {
    padding: 1rem;

    & div + div {
      margin-top: 1rem;
    }
  }
`

export const FormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const FormInputLabel = styled.label`
  font-size: 1rem;
  font-weight: bold;
  line-height: 0.875rem;
  color: #ccc;
  margin-bottom: 0.5rem;

  @media (max-width: 720px) {
    font-size: 0.75rem;
  }
`

export const FormInput = styled.input`
  width: 100%;
  font-size: 1rem;
  padding: 0.5rem;
  height: 2.875rem;
  border-radius: 3px;
  border: 1px solid #e7e7e7;
  box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.2);

  &::placeholder {
    color: #e0e7ee;
  }
`

export const FormInputContainerSpecial = styled.div`
  width: 100%;
  display: flex;

  & div + div {
    margin-left: 2rem;
  }

  & div:last-child {
    margin-top: 0;
  }
`
