import styled from "@emotion/styled";

export const HeadWrapper = styled.header`
  width: 100%;
`

export const Nav = styled.nav`
  width: 100%;
  margin: 0 auto;
 
  text-transform: uppercase;
  background-color: #FFF;
  box-shadow: 1px 1px 5px 0 rgba(0,0,29,0.22);
  color: ${({ theme }) => theme.colors.grey };
  font-weight: 700;
`

export const StepList = styled.ul`
  display: flex;
  margin: 0 auto;
  justify-content: space-around;
  width: 100%;
  max-width: ${({theme}) => theme.breakpoints.large }px;
`
export const Step = styled.li`
  padding:  0.75rem 0;
  
  .active {
    color: ${({theme}) => theme.colors.primary };
  }
`