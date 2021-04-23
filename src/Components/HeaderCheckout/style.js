import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  @media (min-width: 800px) {
    width: 1024px;
  }

  span {
    text-transform: uppercase;
    flex: 1;
    font-weight: bold;
    font-size: 13px;
    display: block;
    text-align: center;
    color: #ccc; // FF7800 selected
    padding: 10px;

    &.current {
      color: #ff7800;
    }
  }
`
