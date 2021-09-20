import styled from 'styled-components'

export const StatusBar = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  padding: 12px 20px;
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 29, 0.22);
`

export const TextStatusBar = styled.span`
  font-size: 13px;
  font-weight: bold;
  text-transform: uppercase;
`

export const ActiveTextStatusBar = styled(TextStatusBar)`
  color: #ff7800;
`
