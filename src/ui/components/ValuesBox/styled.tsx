import styled from 'styled-components/macro'

export const ValuesBox = styled.section`
  border: 1px solid ${({ theme }) => theme.colors.base};
  border-radius: 0.3rem;
  padding: 1.5rem;
  margin: 2rem 0;
`

export const ValuesBoxListItem = styled.p`
  color: ${({ theme }) => theme.colors.baseDark};
  display: flex;
  font-size: 1.4rem;
  justify-content: space-between;
  line-height: 1.7rem;
  margin-bottom: 0.8rem;
  text-transform: uppercase;
`

export const ValuesBoxActiveItem = styled(ValuesBoxListItem)`
  color: ${({ theme }) => theme.colors.primaryLight};
`

export const ValuesBoxHighlightedItem = styled(ValuesBoxListItem)`
  font-weight: bold;
  margin-bottom: 0;
  margin-top: 1.8rem;
`

export const ValuesBoxItem = styled.span``
