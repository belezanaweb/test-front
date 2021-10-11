import styled from 'styled-components'
import theme from '../../styles/theme'

export const Container = styled.div`
  display: flex;
  align-items: flex-end;
  border: 1px solid ${theme.colors.grayLight};
  border-radius: 3px;
  padding: ${theme.size[1]};
  & + & {
    margin-top: ${theme.size[1]};
  }
`

export const Image = styled.div`
  flex-shrink: 0;
  width: 65px;
  height: 65px;
  img {
    width: 100%;
    height: 100%;
  }
  ${theme.media.desktop} {
    width: 80px;
    height: 80px;
  }
`

export const Wrapper = styled.div`
  flex-grow: 1;
  height: 100%;
  margin-left: ${theme.spacing.xs};
  ${theme.media.desktop} {
    margin-left: ${theme.spacing.sm};
    padding: ${theme.spacing.xs};
  }
`

export const Title = styled.h3`
  max-width: 50ch;
  font-size: ${theme.size[1]};
  margin-bottom: ${theme.spacing.xs};
  ${theme.media.desktop} {
    font-size: ${theme.size[3]};
  }
`

export const Price = styled.strong`
  display: block;
  text-align: right;
`
