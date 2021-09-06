import styled from 'styled-components'

export const Container = styled.header`
  height: 3.125rem;
  margin-bottom: 0.625rem;
  background-color: var(--content);
  border-radius: 3px;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);

  display: flex;
  align-items: center;
  justify-content: center;

  .steps {
    display: flex;
    width: 100%;
    justify-content: space-around;
  }

  @media (min-width: 600px) {
    & {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 12px;
      gap: 1rem;
      padding: 0 1rem;
    }

    & .steps {
      justify-content: flex-end;
      gap: 1rem;
    }
  }
`

export const StyledImage = styled.img`
  height: 35px;
  width: 35px;
`

export const Step = styled.strong`
  font-size: 0.813rem;
  line-height: 16px;
  color: var(--text);
  ${({ isActivated }) => isActivated && 'color: var(--primary)'}
`
