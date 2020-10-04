import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3vw;
  h1{
    margin-left:3vw;
    color: #999;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 700;
    line-height: 17px;
  }
`

export const ContentContainer = styled.div`
  height: fit-content;
  width: 100%;
  padding: 3vw;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: #FFF;
  border-radius: 3px;
  box-shadow: 1px 1px 5px 0 rgba(0,0,29,0.22);
  @media only screen and (min-width: 1024px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content:space-between;
  }
`

