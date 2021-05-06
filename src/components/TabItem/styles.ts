import styled from "styled-components";
import { TabItemProps } from "./types";

export const Container = styled.a<TabItemProps>`
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
