import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  background: white;
  padding: 12px 24px;
  justify-content: space-between;
  box-shadow: 5px 0 4px 1px rgba(0, 0, 29, 0.12);
`
export const Text = styled.p`
  font-size: 13px;
  font-weight: bold;
  text-transform: uppercase;
  color: #ccc;
  ${(props) =>
    props.isActualStep &&
    css`
      color: #ff7800;
    `}
`
