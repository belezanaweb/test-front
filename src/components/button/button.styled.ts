import { styled } from '../../stitches.config';

export const Button = styled("button", {
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '16px 5px',
  fontWeight: '700',
  fontSize: '18px',
  color: '$white',
  cursor: 'pointer',
  border: 'none',
  borderRadius: '4px',
  transition: 'background-color 0.2s ease',

  variants: {
    color: {
      primary: {
        backgroundColor: '$primary',

        '&:hover': {
          backgroundColor: '$primaryHover',
        },
        '&:disabled': {
          opacity: '.3',
          cursor: 'not-allowed',
          backgroundColor: '$disabled',
        },
      },
      secondary: {
        backgroundColor: '$black',

        '&:hover': {
          backgroundColor: '$gray',
        },
        '&:disabled': {
          opacity: '.3',
          cursor: 'not-allowed',
          backgroundColor: '$gray',
        },
      },
    },
  },
});