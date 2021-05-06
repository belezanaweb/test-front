import styled from "styled-components";
import { CartProps } from "./types";

export const ProductsList = styled.div`
  > div + div {
    margin-top: 1.5rem;
  }
`;

export const Summary = styled.div`
  box-sizing: border-box;
  width: 100%;
  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  padding: 1.4rem 1.5rem;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;

  > div + div {
    margin-top: 0.8rem;
  }

  > div:last-child {
    margin-top: 1.6rem;
  }
`;

export const Content = styled.section`
  flex: 1;
  padding: 1rem;

  > div + div,
  > div + button {
    margin-top: 2rem;
  }
`;

export const AppBar = styled.div`
  height: 4.5rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.default};
  display: flex;
  flex-direction: row;
`;

export const Tabs = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TabItem = styled.a<CartProps>`
  flex: 1;
  color: ${(props) =>
    props.active
      ? props.theme.colors.primary.light
      : props.theme.colors.lightGrey};
  font-family: "Helvetica Neue";
  font-size: 1.3rem;
  font-weight: 700;
  line-height: 1.6rem;
  text-align: center;
`;
