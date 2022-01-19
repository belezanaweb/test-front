import styled from 'styled-components'

export const SecondContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  padding: 20px 0;
  flex: 1;
  margin-left: 20px;

  @media screen and (max-width: 1023px) {
    margin: 0;
    display: inherit;
    padding: 0;
  }
`

export const FirstContainer = styled.div`
  flex: 2;
`
export const DesktopFlex = styled.div`
  display: flex;

  @media screen and (max-width: 1023px) {
    display: inherit;
  }
`
