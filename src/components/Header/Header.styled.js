import styled from 'styled-components'

export const StepBar = styled.header``
export const StepUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 40px;
  border-radius: 3px;
  background-color: #fff;
  padding-left: 15px;
  padding-right: 17px;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
  list-style-type: none;

  @media (min-width: 752px) {
    display: flex;
    justify-content: space-evenly;
    margin-left: 0;
    padding-left: 15px;
    padding-right: 17px;
  }
`
export const StepItem = styled.li`
  height: 16px;
  width: 130px;
  font-size: 13px;
  font-weight: 700;
  line-height: 16px;
  padding-right: 50px;
  padding-left: 15px
  text-align: center;
  space-between: 25px;
  color: ${({ $page }) => ($page ? `#FF7800` : `#CCC`)};
  
  @media (min-width: 752px) {
    display: flex;
    justify-content: space-evenly;
    padding-right: 50px;
    padding-left: 15px
  }
`
