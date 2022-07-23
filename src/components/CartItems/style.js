import styled from 'styled-components'

export const SectionContainer = styled.section`
  width: 100%;
  margin-bottom: 5px;
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    width: 100%;
  }
`

export const Container = styled.section`
  width: 100%;
  padding: 13px;
  background-color: #fff;
  border-radius: ${(props) => props.theme.borderRadius};
  margin-bottom: 20px;
  box-shadow: ${(props) => props.theme.shadow};
`

export const Title = styled.h4`
  font-size: 0.875rem;
  font-weight: 800;
  color: #999;
  text-transform: uppercase;
  padding: 0 10px;
  margin-bottom: 5px;
`
