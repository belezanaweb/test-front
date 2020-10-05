import styled, { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, html {
    font-size: 13px !important;
    font-family: 'Helvetica Neue', Helvetica,Arial,sans-serif;
  }

  button {
    cursor: pointer;
  }
  ::-moz-selection {
    color:#fff;
    background-color:#FF7800
  }
  ::selection {
    color:#fff;
    background-color:#FF7800
  }
  ul {
    display: flex;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
  }
  a {
    -webkit-transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
    -ms-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
  }
`

export const ContainerStyled = styled.div`
  margin-right: auto;
  margin-left: auto;
  width: 70vw;
  @media (max-width: 991.98px) {
    width: 90vw;
  }
`

export const DFlexStyled = styled.div<{ justifyContent: string; alignItems: string }>`
  display: flex;
  justify-content: ${(props) => (props.justifyContent ? props.justifyContent : 'start')};
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'start')};
`

export const TextColorStyled = styled.span<{ color: string }>`
  color: ${(props) => (props.color ? props.color : '#000')};
`

export const TooltipStyled = styled.span`
  cursor: pointer;

  &:after {
    position: absolute;
    top: -200px;
    left: 0;
    padding: 0.6rem;
    font-size: 0.84rem;
    background-color: ${(props) => props.theme.colors.secondary};
    transition: all 0.4s;
    opacity: 0;
    visibility: hidden;
    content: attr(data-tooltip);
  }

  &:hover {
    &:after {
      top: -90px;
      color: #fff;
      opacity: 1;
      visibility: visible;
    }
  }
`

export const ContentStyled = styled.div`
  background-color: ${(props) => props.theme.colors.bgContent};
  border-radius: 3px;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
  padding: ${(props) => props.theme.spacing};
  margin: ${(props) => props.theme.spacing} 0;
`
