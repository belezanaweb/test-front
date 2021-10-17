import styled from 'styled-components'

export const Container = styled.form`
  width: 100%;
  background-color: var(--white);

  border-radius: 0.18rem;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
  padding: 0.81rem;
`

export const WrapperInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (min-width: 920px) {
    justify-content: flex-start;

    div {
      margin-right: 1rem;
    }
  }
`
