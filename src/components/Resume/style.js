import styled from "@emotion/styled"

export const ResumeWrapper = styled.aside`
  padding: 0.5rem;
  width: 100%;

  @media (min-width: ${ ({ theme }) =>  theme.breakpoints.small }px) {
    padding: 1rem;
    width: 40%;
    padding-left: 0;
  }

  @media (min-width: 1100px) {
    width: 35%;
  }
  
`

export const ResumeContent = styled.div`
  border-radius: 3px;
  border: 1px solid ${ ({ theme }) =>  theme.colors.grey };
  padding: 0.8125rem;
  margin-bottom: 1.125rem;
`

export const ResumeItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  color: ${({ theme, color }) =>  theme.colors[color || 'darkest'] };
  font-weight: ${({ weight }) =>  weight || 'initial' };
  font-size: 0.875rem;
  text-transform: uppercase;
  margin-bottom: 0.5rem;

  &:last-of-type {
    margin-top: 1rem;
    margin-bottom: initial;
  }
`

export const ResumeTitle = styled.span`
  display: inline-block;
`

export const ResumeValue = styled.span`
  display: inline-block;
`
