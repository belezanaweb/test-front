import styles from '../Text.module.css';

export const colors = {
  primary: styles.colorTextPrimary,
  secondary: styles.colorTextSecondary,
  emphasis: styles.colorTextEmphasis,
  disabled: styles.colorTextDisabled,
  subtle: styles.colorTextSubtle,
  neutral: styles.colorTextNeutral,
  error: styles.colorTextError,
};

export const sizes = {
  xsmall: styles.fontSizeXsmall,
  small: styles.fontSizeSmall,
  medium: styles.fontSizeMedium,
  large: styles.fontSizeLarge,
  xlarge: styles.fontSizeXlarge,
};

export const weights = {
  bold: styles.fontWeightBold,
  normal: styles.fontWeightNormal,
};

export const decorations = {
  none: styles.defaultTextDecoration,
  scratch: styles.scratchTextDecoration,
};
