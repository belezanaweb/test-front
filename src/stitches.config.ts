import { createStitches, globalCss } from '@stitches/react';

export const { styled, css } = createStitches({
    theme: {
        colors: {
            primary: 'blue',
            secondary: 'gray',
        },
        fonts: {
            body: 'sans-serif',
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



export const globalStyles = globalCss({
    'html, body': {
        position: 'relative',
        fontFamily: '$body',
        padding: 0,
        margin: 0,
        lineHeight: '1.5em',
        height: '100%',
        background: '#F5F5F5',
    },
});

globalStyles();