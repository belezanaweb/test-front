import styled from 'styled-components'

export const BagDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const BagWrapper = styled.div`
  height: 325px;
  width: 341px;
  border-radius: 3px;
  background-color: #fff;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
`

export const BagBackgroud = styled.div`
  @media only screen and (max-width: 412px) {
    max-width: 412px;
  }

  @media only screen and (min-width: 412px) and (max-width: 736px) {
    max-width: 736px;
    margin-left: 30px;
  }
`