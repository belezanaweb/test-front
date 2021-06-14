import styled from 'styled-components'

export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
`

export const Input = styled.input`
  box-sizing: border-box;
  border-radius: var(--border-radius-md);
  padding: var(--spacing-2);
  height: 45px;
  background-color: #fff;
  border: 1px solid #e7e7e7;
  outline: none;
  font-size: 16px;
  line-height: 19px;
  box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.2);

  &[aria-invalid='true'] {
    border: 1px solid var(--colors-red-300);
  }

  &:focus {
    border: 1px solid #a43287;
  }

  &::placeholder {
    color: #e0e7ee;
  }
`

export const Label = styled.label`
  color: var(--colors-gray-200);
  margin-bottom: var(--spacing-1);
  font-weight: bold;
  line-height: var(--line-height-md);
  font-size: var(--font-size-xs);
`

export const ErrorMessage = styled.small`
  color: var(--colors-red-300);
  margin-top: var(--spacing-1);
  line-height: var(--line-height-md);
  font-size: var(--font-size-xs);
`
