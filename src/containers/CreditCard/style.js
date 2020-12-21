import styled from 'styled-components'
import Paper from '../../components/Paper'

export const Wrapper = styled(Paper)`
  border-radius: var(--border-radius);
  display: grid;
  gap: 15px;
  padding: var(--spacing);
  padding-bottom: 25px;
`

export const Divider = styled.div`
  display: flex;
  gap: 20px;
`
