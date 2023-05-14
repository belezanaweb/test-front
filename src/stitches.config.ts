import { createStitches, globalCss } from '@stitches/react';

export const { styled, css } = createStitches({
  theme: {
    colors: {
      white: '#FFFFFF',
      primary: '#9222DC',
      primaryHover: '#7312B3',
      disabled: '#B9B9B9',
      black: '#000000',
      gray: '#333333',
      lightGray: '#F5F5F5',
      darkGray: '#878787',
      darkerGray: '#515151',
      customGray: '#CCCCCC'
    },
    fonts: {
      body: 'Arial, sans-serif',
    },
    fontSizes: {
      sm: '14px',
      md: '16px',
      lg: '18px',
      xl: '20px',
      xxl: '22px',
    },
  },
  media: {
    mobile: '(min-width: 480px)',
    tablet: '(min-width: 768px)',
    laptop: '(min-width: 1024px)',
    desktop: '(min-width: 1200px)',
  },
});

export const globalStyles = globalCss({
  'html, body': {
    position: 'relative',
    fontFamily: '$body',
    padding: 0,
    margin: 0,
    lineHeight: '1.5em',
    height: '100%',
    background: 'white',
  },

  '*': {
    boxSizing: 'border-box',
  }
});

globalStyles();

// **** //
// Shared styles
// **** //

export const AppContainer = styled('div', {
  background: '$lightGray',
});

export const Base = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  margin: '0 8px',

  '@tablet': {
    maxWidth: '960px',
    width: '100%',
    margin: '0 auto',
  },
});

export const BackgroundSection = styled('div', {
  padding: '10px',
  backgroundColor: 'white',
  border: '1px solid $customGray',
  borderRadius: '4px',
});

export const TotalResult = styled('div', {
  width: '100%',
  backgroundColor: 'white',
});
