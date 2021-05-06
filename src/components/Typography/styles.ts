import styled from "styled-components";
import { TypographyProps } from "./types";

export const Wrapper = styled.div<TypographyProps>`
  height: 17px;
  font-family: "Helvetica Neue";
  font-size: 14px;
  font-weight: ${(props) => (props.bold ? 700 : 0)};
  line-height: 17px;
  text-align: ${(props) => props.align || "left"};
  color: ${(props) => props.color || "#999"};
  margin-bottom: ${(props) => (props.gutterBottom ? "5px" : 0)};
`;
