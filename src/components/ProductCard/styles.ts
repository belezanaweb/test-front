import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  padding: 11px 10px 14px;
  border: 1px solid ${(props) => props.theme.light.colors['--c-background']};
  border-radius: 3px;

  &:not(:last-of-type) {
    margin-bottom: 15px;
  }
`
export const Image = styled.img`
  height: 64px;
  width: 64px;
  ${(props: {noPrice: boolean}) =>
    props.noPrice &&
    css`
      height: 44px;
      width: 44px;
    `}
`

export const Content = styled.div`
  margin-left: 11px;
  display: flex;
  flex-direction: column;
`

export const Title = styled.p`
  font-size: ${(props) => props.theme.fontSizes.medium};
  color: ${(props) => props.theme.light.colors['--c-base-contrast']};
  line-height: 16px;
`

export const Price = styled.p`
  font-size: ${(props) => props.theme.fontSizes.mediumLarge};
  color: ${(props) => props.theme.light.colors['--c-base-contrast']};
  font-weight: bold;
  text-align: right;
  margin-top: auto;
`
