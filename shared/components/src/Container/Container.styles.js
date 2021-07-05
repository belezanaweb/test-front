import styled from "styled-components";
import { Title as DefaultTitle } from "../Title/Title";

export const Wrapper = styled.section`
  margin-bottom: 20px;
`;

export const WhiteBox = styled.div`
  padding: 12px;
  border-radius: 3px;
  background-color: #fff;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
`;

export const Title = styled(DefaultTitle)`
  margin-bottom: 5px;
  padding-left: 10px;
`;
