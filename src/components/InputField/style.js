import styled from '@emotion/styled'
import { css } from '@emotion/core'

export const Input = styled.input`
  display: block;
  width: 100%;
  outline: none;
  border-radius: 3px;
  background-color: #FFF;
  border: 1px solid ${ ({ theme }) =>  theme.colors.ligth };
  box-shadow: inset 0 1px 2px 0 rgba(0,0,0,0.2);
  
  color: ${ ({ theme }) =>  theme.colors.dark };
  
  padding: 0.75rem 0.875rem;

  &::placeholder {
    color: ${ ({ theme }) =>  theme.colors.greyLigth };
  }

  &:focus {
    border: 1px solid ${ ({ theme }) =>  theme.colors.alert };
  }


  ${({ theme, error }) => 
    error && css`
      border: 1px solid ${ theme.colors.warning };
    `
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 0.5rem;
  width: calc( 100% / ${({ column }) => column });
  &:first-of-type {
    padding-top: 1rem;
  }
`

export const Label = styled.label`
  width: 100%;
  margin: 0 auto;
  font-size:  0.75rem;
  font-weight: 700;
  line-height: 14px;
  color: #CCC;

  > input {
    margin-top: 5px;
  }
`

export const Error = styled.div`
  width: 100%;
  margin: 0.5rem auto 0;
  color: ${ ({ theme }) =>  theme.colors.warning };
  font-size:  0.75rem;
  line-height: 14px;

`
