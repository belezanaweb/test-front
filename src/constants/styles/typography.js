import { css } from 'styled-components'

export const PRIMARY_FONT = "'Nunito Sans', sans-serif"

export const SIZES = {
  xl: '2rem',
  lg: '1.6rem',
  md: '1.4rem',
  sm: '1.3rem',
  xs: '1.2rem'
}

export const TITLE_EXTRA_LARGE = css`
  & {
    font-size: ${SIZES.md};
    font-weight: 700;
  }
`

export const TITLE_LARGE = css`
  & {
    font-size: ${SIZES.sm};
    font-weight: 700;
  }
`

export const BODY_TEXT_EXTRA_LARGE = css`
  & {
    font-size: ${SIZES.lg};
    font-weight: 400;
  }
`

export const BODY_TEXT_LARGE = css`
  & {
    font-size: ${SIZES.md};
    font-weight: 400;
  }
`

export const BODY_TEXT_MEDIUM = css`
  & {
    font-size: ${SIZES.sm};
    font-weight: 400;
  }
`

export const BODY_TEXT_SMALL = css`
  & {
    font-size: ${SIZES.xs};
    font-weight: 400;
  }
`

export const LABEL_TEXT = css`
  & {
    font-size: ${SIZES.xs};
    font-weight: 700;
  }
`
