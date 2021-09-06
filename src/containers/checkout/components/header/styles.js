import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;

  height: 3.125rem;
  margin-bottom: 0.625rem;
  background-color: var(--content);
  border-radius: 3px;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);

  @media (min-width: 500px) {
    & {
      margin: 15px;
    }
  }
`

export const Step = styled.strong`
  font-size: 0.813rem;
  line-height: 16px;
  color: var(--text);
  ${({ isActivated }) => isActivated && 'color: var(--primary)'}
`
