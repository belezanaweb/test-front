import styled from "styled-components";
import { TypographyProps } from "./types";

export const Wrapper = styled.div<TypographyProps>`
  font-family: "Helvetica Neue";
  font-size: 1.4rem;
  font-weight: ${(props) => (props.bold ? 700 : 0)};
  line-height: 1.7rem;
  text-align: ${(props) => props.align || "left"};
  color: ${(props) => props.color || "#999"};
  margin-bottom: ${(props) => (props.gutterBottom ? "0.5rem" : 0)};
`;
