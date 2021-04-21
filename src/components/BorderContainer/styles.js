import styled from "styled-components";
// import theme from '../../styles/theme';

export const Container = styled.div`
  border: 2px solid ${((props) => props.color) ?? "#212121"};
  border-radius: 5px;
  padding: 5%;
  margin: 2%;
`;
