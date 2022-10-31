import styled from 'styled-components'

export const Container = styled.div`
  border: 1px solid ${(props) => props.theme.light.colors['--c-one']};
  border-radius: 3px;
  padding: 15px 13px 15px 14px;
  margin: 20px 0;
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    text-transform: uppercase;
    font-weight: regular;
    line-height: 17px;
    font-size: ${(props) => props.theme.fontSizes.mediumLarge};
    color: #212122;
  }

  &.orange {
    p {
      color: ${(props) => props.theme.light.colors['--c-contrast-one']};
    }
  }

  &:not(:last-of-type) {
    margin-bottom: 9px;
  }

  &:last-of-type {
    padding-top: 7px;
    font-weight: bold;
  }
`
