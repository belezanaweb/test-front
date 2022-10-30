import { CircularProgress } from "@mui/material";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ShadowPaper } from "../components/ShadowPaper/styles";
import { colors } from "../styles/style-config";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  height: 100%;
  min-height: 700px;

  > div,
  > form {
    max-width: 520px;
  }
`;

export const Tabs = styled(ShadowPaper)`
  border-radius: 0;
  justify-content: center;
  div {
    display: flex;
    justify-content: center;
    justify-content: space-around;
    width: 100%;
    max-width: 820px;
  }
`;

interface LinkProps {
  selected?: boolean;
  disabled?: boolean;
}
export const Link = styled(NavLink)`
  color: ${({ selected }: LinkProps) =>
    selected ? colors.highLightColor : colors.inputLabelColor};
  text-decoration: none;
  font-weight: 700;
  font-size: 1.3rem;
  line-height: 16px;
`;

export const DisabledLink = styled.span`
  color: ${colors.inputLabelColor};
  font-weight: 700;
  font-size: 1.3rem;
  line-height: 16px;
`;

export const Loading = styled(CircularProgress)`
  color: ${colors.highLightColor} !important;
`;
