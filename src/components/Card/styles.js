import styled from 'styled-components'
import theme from '../../styles/theme'

export const Container = styled.div`
  flex-grow: 1;
  & + & {
    margin-top: ${theme.spacing.md};
  }
`

export const Wrapper = styled.div`
  background-color: ${theme.colors.white};
  box-shadow: 1px 1px 5px rgba(0, 0, 29, 0.22);
  border-radius: 3px;
  padding: ${theme.size[1]};
  margin-bottom: 20px;
`

export const Title = styled.h2`
  font-size: ${theme.size[3]};
  font-weight: bold;
  text-transform: uppercase;
  color: ${theme.colors.grayMedium};
  margin-left: ${theme.spacing.xs};
  margin-bottom: 6px;
  ${theme.media.desktop} {
    font-size: 18px;
  }
`
