import styled from 'styled-components'
import theme from '../../styles/theme'

export const Container = styled.header`
  max-width: 100vw;
  background-color: ${theme.colors.white};
  margin-bottom: ${theme.spacing.xss};
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);

  ${theme.media.desktop} {
    margin-bottom: ${theme.spacing.lg};
  }
`

export const Wrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${theme.spacing.sm};

  ${theme.media.desktop} {
    padding: ${theme.spacing.sm} ${theme.spacing.md};
  }
`

export const Step = styled.strong`
  font-size: ${theme.size[2]};
  text-transform: uppercase;
  color: ${({ active }) => (active ? theme.colors.primaryLight : theme.colors.gray)};
  ${theme.media.desktop} {
    font-size: ${theme.size[4]};
  }
`
