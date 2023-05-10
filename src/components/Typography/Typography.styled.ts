import styled from 'styled-components';

export interface Align {
  align?: 'start' | 'end' | 'center';
};

export const Title = styled.span<Align>(props => ({
  color: props.theme.font.color[100],
  fontSize: props.theme.font.size.xl,
  fontWeight: props.theme.font.weight.medium,
  fontFamily: props.theme.font.family.fromText,
  letterSpacing: props.theme.font.spacing.default,
  textAlign: props.align,
}));

export const TitleUpper = styled.span<Align>(props => ({
  color: props.theme.font.color[100],
  fontSize: props.theme.font.size.xxl,
  fontWeight: props.theme.font.weight.medium,
  fontFamily: props.theme.font.family.fromText,
  letterSpacing: props.theme.font.spacing.default,
  textAlign: props.align,
}));

export const Menu = styled.span<Align>(props => ({
  color: props.theme.font.color[100],
  fontSize: props.theme.font.size.sm,
  fontWeight: props.theme.font.weight.medium,
  fontFamily: props.theme.font.family.fromText,
  letterSpacing: props.theme.font.spacing.default,
  textAlign: props.align,
}));

export const MenuDisabled = styled.span<Align>(props => ({
  color: props.theme.font.color[25],
  fontSize: props.theme.font.size.sm,
  fontWeight: props.theme.font.weight.medium,
  fontFamily: props.theme.font.family.fromText,
  letterSpacing: props.theme.font.spacing.default,
  textAlign: props.align,
}));

export const Paragraph = styled.span<Align>(props => ({
  color: props.theme.font.color[100],
  fontSize: props.theme.font.size.xs,
  fontWeight: props.theme.font.weight.medium,
  fontFamily: props.theme.font.family.fromText,
  letterSpacing: props.theme.font.spacing.default,
  textAlign: props.align,
}));

export const Info = styled.span<Align>(props => ({
  color: props.theme.font.color[50],
  fontSize: props.theme.font.size.sm,
  fontWeight: props.theme.font.weight.large,
  fontFamily: props.theme.font.family.fromText,
  letterSpacing: props.theme.font.spacing.default,
  textAlign: props.align,
}));

export const Label = styled.span<Align>(props => ({
  color: props.theme.font.color[100],
  fontSize: props.theme.font.size.sm,
  fontWeight: props.theme.font.weight.medium,
  fontFamily: props.theme.font.family.fromText,
  letterSpacing: props.theme.font.spacing.default,
  textAlign: props.align,
}));

export const LabelStrong = styled.span<Align>(props => ({
  color: props.theme.font.color[100],
  fontSize: props.theme.font.size.md,
  fontWeight: props.theme.font.weight.large,
  fontFamily: props.theme.font.family.fromText,
  letterSpacing: props.theme.font.spacing.default,
}));

export const Value = styled.span<Align>(props => ({
  color: props.theme.font.color[100],
  fontSize: props.theme.font.size.sm,
  fontWeight: props.theme.font.weight.medium,
  fontFamily: props.theme.font.family.fromCurrency,
  letterSpacing: props.theme.font.spacing.default,
}));

export const ValueBold = styled.span<Align>(props => ({
  color: props.theme.font.color[100],
  fontSize: props.theme.font.size.sm,
  fontWeight: props.theme.font.weight.large,
  fontFamily: props.theme.font.family.fromCurrency,
  letterSpacing: props.theme.font.spacing.default,
}));

export const ValueDisabled = styled.span<Align>(props => ({
  color: props.theme.font.color[25],
  fontSize: props.theme.font.size.sm,
  fontWeight: props.theme.font.weight.medium,
  fontFamily: props.theme.font.family.fromCurrency,
  letterSpacing: props.theme.font.spacing.default,
  textAlign: props.align,
  textDecoration: 'line-through',
}));

export const ValueStrong = styled.span<Align>(props => ({
  color: props.theme.font.color[100],
  fontSize: props.theme.font.size.md,
  fontWeight: props.theme.font.weight.large,
  fontFamily: props.theme.font.family.fromCurrency,
  letterSpacing: props.theme.font.spacing.default,
}));

export const ValuePrimary = styled.span<Align>(props => ({
  color: props.theme.colors.primary.color,
  fontSize: props.theme.font.size.sm,
  fontWeight: props.theme.font.weight.large,
  fontFamily: props.theme.font.family.fromCurrency,
  letterSpacing: props.theme.font.spacing.default,
}));
