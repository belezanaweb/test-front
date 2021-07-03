import React from "react";
import * as S from "./Title.styles";

const elements = {
  h1: S.H1,
  h2: S.H2,
  h3: S.H3,
  h4: S.H4,
  h5: S.H5,
  h6: S.H6,
};

export const Title = ({ type, children, ...props }) => {
  return React.createElement(elements[type] || elements.h2, props, children);
};
