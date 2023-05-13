
import { styled } from '../../stitches.config';

export const TrackingStepContainer = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: '$white',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',

    '@tablet': {
        width: '100%',
    }
});

export const Container = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',

    '@tablet': {
        width: '100%',
    }
});

export const Steps = styled('ul', {
    display: 'flex',
    padding: '0',
    margin: '0',
    listStyleType: 'none',

    '@tablet': {
        width: '100%',
    }
});

export const StepWrapper = styled('li', {
    fontSize: '0.875rem',

    '@tablet': {
        width: '100%',
        textAlign: 'center',
        fontSize: '1rem',
    }
});

export const Step = styled('div', {
    display: 'block',
    padding: '10px 12px 8px',
    textDecoration: 'none',
    color: '$darkGray',
    borderBottom: '1px solid darkGray',

    '&.active': {
        paddingBottom: '5px',
        color: '$black',
        borderBottom: '4px solid black',
    },

    '@tablet': {
        padding: '30px 25px 8px',
    }
});

