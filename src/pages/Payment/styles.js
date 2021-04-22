import styled from 'styled-components'

export const Container = styled.div`
  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 16% 42% 42%;
  }
`

export const FormWrapper = styled.div`
  @media (min-width: 1000px) {
    grid-column: 1 / 2;
    margin: 5%;
  }
`

export const ContainerWrapper = styled.div`
  /* padding: 0 5%; */
  @media (min-width: 1000px) {
    height: 40rem;
    padding: 10%;
  }
`
export const InputWrapper = styled.div`
  /* padding: 0 5%; */
  &:first-child {
    margin-right: 5%;
  }
`
