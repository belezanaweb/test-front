import styled from 'styled-components'

export const Box = styled.div`
  padding: 10px;
  border-radius: 3px;
  background-color: #FFF;
  box-shadow: 1px 1px 5px 0 rgba(0,0,29,0.22);
  margin-bottom: 20px;
  div {
    margin-bottom: 15px;
  }
  div:last-child {
    margin-bottom: 0;
  }
}
`
export const TitleBox = styled.h2`
  font-size: 16px;
  padding-left: 10px;
  color: #999;
  margin-bottom: 5px;
  @media screen and (max-width: 1023px) {
    font-size: 14px;
  }
`
