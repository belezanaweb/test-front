import styled from 'styled-components'

export const StepBar = styled.header`
  width: 100%;
`
export const StepUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 40px;
  margin-top: 0px;
  border-radius: 3px;
  background-color: #fff;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
  list-style-type: none;

  @media (max-width: 991px) {
    font-size: 93%;
  }
`
export const StepItem = styled.li`
  height: 16px;
  width: 130px;
  font-size: 13px;
  font-weight: 700;
  line-height: 16px;
  padding-right: 40px;
  padding-left: 15px
  text-align: center;
  space-between: 25px;
  color: ${({ $page }) => ($page ? `#FF7800` : `#CCC`)};
  
  @media (max-width:991px) {
    height: calc(8px + 3px)
    font-size: calc(7px + 5px);
  }

  @media (max-width:1040px) {
    font-size: calc(7px + 3px);
  }
`
