import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  display: block;
  color: #ccc;
  font-family: ${({ theme }) => theme.font.family};
  font-size: 12px;
  font-weight: 700;
  line-height: 14px;
  margin: 0 0 2px 0;
`

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.input.error};
  font-family: ${({ theme }) => theme.font.family};
  font-size: 12px;
  line-height: 14px;
  margin-top: 5px;
`
