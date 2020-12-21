import styled from 'styled-components'

export const Ul = styled.ul`
  border: 1px solid #ccc;
  border-radius: var(--border-radius);
  display: grid;
  gap: var(--spacing-sm);
  margin: 0;
  padding: 15px;
  text-transform: uppercase;
`

export const Li = styled.li`
  display: flex;
  justify-content: space-between;
`

export const Discount = styled(Li)`
  color: var(--primary);
`

export const Total = styled(Li)`
  font-weight: 700;
  margin-top: var(--spacing-sm);
`
