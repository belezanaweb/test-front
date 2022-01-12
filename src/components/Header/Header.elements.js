import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 4.5rem;
  padding: 0 2rem;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 1px 1px 5px rgba(0, 0, 29, 0.22);

  display: flex;
  justify-content: center;
  align-items: center;
`

export const HeaderContent = styled.div`
  width: 380px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const HeaderText = styled.span`
  color: ${({ active }) => (active ? '#FF7800' : '#ccc')};
  font-weight: bold;
`
