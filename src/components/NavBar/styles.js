import styled from 'styled-components';

export const Container = styled.div`
  height: 42px;
  width: 100%;
  border-radius: 3px;
  background-color: #FFF;
  box-shadow: 1px 1px 5px 0 rgba(0,0,29,0.22);
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 999;

  ul {
    display: flex;
    justify-content: space-around;
    width: 100%;

    li {
      height: 16px;
      text-align: center;
      line-height: 16px;
    }

    a {
      text-transform: uppercase;
      color: #CCC;
      font-size: 13px;
      font-weight: 700;

      &.active {
        color: #FF7800;
      }
    }
  }
`;
