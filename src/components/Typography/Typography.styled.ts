import styled from 'styled-components';

export const Menu = styled.span(props => ({
  color: props.theme.font.color[100],
  fontSize: props.theme.font.size.sm,
  fontWeight: props.theme.font.weight.medium,
  fontFamily: props.theme.font.family.fromText,
  letterSpacing: props.theme.font.spacing.default,
}));

export const MenuDisabled = styled.span(props => ({
  color: props.theme.font.color[25],
  fontSize: props.theme.font.size.sm,
  fontWeight: props.theme.font.weight.medium,
  fontFamily: props.theme.font.family.fromText,
  letterSpacing: props.theme.font.spacing.default,
}));
