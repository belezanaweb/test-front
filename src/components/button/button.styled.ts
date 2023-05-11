import { styled } from '../../stitches.config';

export const Button = styled("button", {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '16px 5px',
    color: '#ffffff',
    fontWeight: '700',
    fontSize: '18px',
    background: '#9222DC',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '4px',
    transition: 'background-color 0.2s ease',

    "&:hover": {
        backgroundColor: "#7312b3",
    },

    "&:disabled": {
        opacity: ".3",
        cursor: 'not-allowed',
        backgroundColor: "#b9b9b9",
    },
});