import { createStitches, globalCss } from '@stitches/react';

export const { styled, css } = createStitches({
    theme: {
        colors: {
            primary: 'blue',
            secondary: 'gray',
        },
        fonts: {
            body: 'Arial',
        },
        fontSizes: {
            1: '16px',
            2: '18px',
            3: '20px',
        },
    },
    media: {
        mobile: '(min-width: 480px)',
        tablet: '(min-width: 768px)',
        laptop: '(min-width: 1024px)',
        desktop: '(min-width: 1200px)',
    },
});

export const AppContainer = styled('div', {
    background: '#F5F5F5',
});

export const Base = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    padding: '20px 0',

    '@tablet': {
        maxWidth: '900px',
        margin: '0 auto',
    },
});

export const BackgroundSection = styled('div', {
    margin: '0 8px',
    padding: '10px',
    backgroundColor: '#FFFFFF',
    border: '1px solid #CCCCCC',
    borderRadius: '4px',
});

export const TotalResult = styled('div', {
    width: '100%',
    padding: '10px',
    backgroundColor: '#FFFFFF',
});


export const globalStyles = globalCss({
    'html, body': {
        position: 'relative',
        fontFamily: '$body',
        padding: 0,
        margin: 0,
        lineHeight: '1.5em',
        height: '100%',
        background: '#FFFFFF',
    },

    '*': {
        boxSizing: 'border-box',
    }
});

globalStyles();