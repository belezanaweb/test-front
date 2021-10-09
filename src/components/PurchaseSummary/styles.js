import styled from 'styled-components'
import theme from '../../styles/theme'

export const Container = styled.div`
  border: 1px solid ${theme.colors.gray};
  border-radius: 3px;
  padding: ${theme.size[3]};
`

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  font-size: ${theme.size[3]};
  color: ${({ discount }) => (discount ? theme.colors.primaryLight : 'inhreit')};
  :not(:last-of-type) {
    margin-bottom: ${theme.spacing.xs};
  }
  :last-of-type {
    margin-top: ${theme.size[4]};
  }
  ${theme.media.desktop} {
    font-size: ${theme.size[4]};
  }
`
