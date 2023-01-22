
import styled from 'styled-components';

export const Form = styled.form``;

export const Container = styled.div`
    border-radius: ${({theme}) => theme.border.radius};
    background-color: ${({theme}) => theme.colors.box};
    box-shadow: ${({theme}) => theme.border.shadow};
    padding: 10px;
    margin: 0 0 20px;
`;

export const ContainerCardData = styled.div`
  display: flex;
  justify-content: space-between;
  div:nth-child(1) {
    width: 53.3%;
    margin: 0 20px 0 0;
  }
  div:nth-child(2) {
    width: 46.7%;
  }
`;