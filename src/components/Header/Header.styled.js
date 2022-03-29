import styled from 'styled-components'

export const StepBar = styled.header`
  width: 100%;
`
export const StepUl = styled.ul`
  padding: 0px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  margin-top: 0px;
  border-radius: 3px;
  background-color: #fff;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
  list-style-type: none;
`
export const StepItem = styled.li`
  height: 40px;
  width: 100%/3px;
  display: flex;
  align-items: center;
  font-size: 33px;
  font-weight: 700;
  line-height: 16px;
  font-size: 13px;

  p {
    text-align: center;
    border: none;
    margin: 0 0px;
    padding: 0px 15px;
  }

  color: ${({ $page }) => ($page ? `#FF7800` : `#CCC`)};
`
