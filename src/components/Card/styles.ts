import styled from 'styled-components'

export const Container = styled.div`
  background: ${(props) => props.theme.light.colors['--c-base']};
  padding: 12px;
  border-radius: 3px;
  box-shadow: 1px 1px 10px 1px rgb(0 0 29 / 12%);
`
