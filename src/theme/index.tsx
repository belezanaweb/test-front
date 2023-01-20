import React  from "react";
import { DefaultTheme} from "styled-components";

const Theme: DefaultTheme = {
  colors: {
    box: "#FFF",
    default: "#212122",
    secondary: "#CCC",
    tertiary: "#FF6C00",
    placeholder: "#E0E7EE",
    highlight: "#FF7800"
  },
  button: {
    default: "#FF6C00",
    hoverDefault: "#D45A00"
  },
  input: {
    borderFocus: "#A43287",
    boxShadow: "inset 0 1px 2px 0 rgba(0,0,0,0.2)"
  },
  fontSizes: {
    small: "12px",
    medium: "13px",
    large: "16px",
    h1: "14px"
  },
  border: {
    radius: "3px",
    shadow: "1px 1px 5px 0 rgba(0,0,29,0.22)"
  }
};

export default Theme;
