import { styled } from '../../stitches.config';

export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    padding: '0 10px',
});

export const RowContainer = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '14px',
    paddingBottom: '5px',

    '@tablet': {
        borderBottom: '1px solid $customGray',
    },
});

export const RowContainerSubTotal = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '16px',
    fontWeight: '700',
});

export const RowContainerDiscount = styled('div', {
    color: '$primary',
});
