import styled from 'styled-components'

export const Container = styled.form``

export const Group = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ButtonContainer = styled.div`
  position: absolute;
  right: 10px;

  @media (max-width: 960px) {
    left: 10px;
    bottom: -58px;

    margin-bottom: 14px;
  }

  @media (min-width: 960px) {
    top: 186px;

    width: 338px;
  }
`
