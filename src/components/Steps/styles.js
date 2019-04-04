import styled from 'styled-components'

export const Container = styled.ul`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;

  display: flex;
  justify-content: space-between;
  flex: 1;
  background-color: #fff;
  padding: 12px 18px;

  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);

  @media (min-width: 960px) {
    width: 480px;
    margin-left: auto;
    margin-bottom: 50px;
    margin-right: auto;

    border-radius: 4px;
  }
`

export const Item = styled.li`
  font-size: 0.8125rem;
  font-weight: 700;
  text-transform: uppercase;
  color: ${props => (props.isActive ? '#ff7800' : '#ccc')};
`