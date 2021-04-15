import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  height: 8vh;
  border-radius: 3px;
  background-color: #fff;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
`

export const OrangeText = styled.p`
  color: #ff7800;
  font-family: 'Helvetica Neue';
  font-size: 13px;
  font-weight: 700;
  letter-spacing: NaNpx;
  line-height: 16px;
  text-align: center;
  :hover {
    cursor: pointer;
  }
`

export const GreyText = styled.p`
  color: #ccc;
  font-family: 'Helvetica Neue';
  font-size: 13px;
  font-weight: 700;
  letter-spacing: NaNpx;
  line-height: 16px;
  text-align: center;
  padding-right: 10px;
  :hover {
    cursor: pointer;
  }
`
