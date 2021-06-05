import styled from 'styled-components'

export const Container = styled.section``

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.font.family};
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  margin: 5px 13px 5px 13px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.section.text};
`

export const Content = styled.div`
  padding: 13px;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.colors.section.background};
  box-shadow: 1px 1px 5px 0 ${({ theme }) => theme.colors.section.shadow};
`
