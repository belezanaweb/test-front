
import { styled } from '../../stitches.config';

export const Container = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: '#FFF',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
});

export const Steps = styled('ul', {
    display: 'flex',
    padding: '0',
    margin: '0',
    listStyleType: 'none',
});

export const StepWrapper = styled('li', {
    fontSize: '0.875rem',

    '@tablet': {
        fontSize: '1rem',
    }
});

export const Step = styled('div', {
    display: 'block',
    padding: '10px 12px 8px',
    textDecoration: 'none',
    color: '#878787',
    borderBottom: '1px solid #878787',

    '&.active': {
        paddingBottom: '5px',
        color: '#000000',
        borderBottom: '4px solid #000000',
    },

    '@tablet': {
        padding: '30px 25px 8px',
    }
});
