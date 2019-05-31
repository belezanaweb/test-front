import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  height: 40px;
  align-items: center;
  background-color: #FFFFFF;
  border-radius: 3px;
  box-shadow: 1px 1px 5px 0 rgba(0,0,29,0.22);
`;

export const Item = styled.div`
    color: #FF7800;
    font-weight: bold;
    font-size: 13px;
    line-height: 16px;
    text-transform: uppercase;
    font-family: 'Helvetica Neue';
`;
