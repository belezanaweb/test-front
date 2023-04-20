import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${({ theme }) => theme.margin.m3};
  margin: ${({ theme }) => theme.margin.m10} ${({ theme }) => theme.margin.m0};
`

export const Input = styled.input`
  background: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 4px;
  width: 100%;
  padding: 14px;
  box-sizing: border-box;
  outline: none;
`
