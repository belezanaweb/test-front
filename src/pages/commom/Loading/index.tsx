import styled from "styled-components";
import { Loader } from "../../../components/Loader";
import { Header } from "../../../components/Header";

export function Loading() {
  return (
    <Content>
      <Header />
      <Loader />
    </Content>
  );
}

const Content = styled.main`
  position: relative;
`;
