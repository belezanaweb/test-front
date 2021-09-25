import styled, { css } from 'styled-components'

export const Page = styled.div`
  min-height: 100vh;
  flex-direction: column;
`

export const PageContainer = styled.div`
  flex-direction: column;
`

export const Container = styled.div`
  justify-content: center;

  ${(props) =>
    props.mx &&
    css`
      padding-left: ${(props) => props.mx};
      padding-right: ${(props) => props.mx};
    `}

  ${(props) =>
    props.my &&
    css`
      padding-top: ${(props) => props.my};
      padding-bottom: ${(props) => props.my};
    `}
`

export const Content = styled.div``

export const Title = styled.h3`
  font-size: 14px;
  text-transform: uppercase;
  color: #999;
  margin-bottom: 3px;
  margin-left: 10px;
`
