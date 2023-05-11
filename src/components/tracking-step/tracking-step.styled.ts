
import { styled } from '../../stitches.config';
import { NavLink } from 'react-router-dom';

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

export const Step = styled('li', {
    fontSize: '0.875rem',

    '@tablet': {
        fontSize: '1rem',
    }
});

export const StyledNavLink = styled(NavLink, {
    display: 'block',
    padding: '10px 12px 8px',
    textDecoration: 'none',
    color: '#878787',
    borderBottom: '1px solid #878787',

    '&.active': {
        color: '#000000',
        paddingBottom: '5px',
        borderBottom: '4px solid #000000',
    },

    '@tablet': {
        padding: '30px 25px 8px',
    }
});
