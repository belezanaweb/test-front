import { styled } from '../../stitches.config';

export const CreditCardWrapper = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    height: '90px',

    '&:last-child': {
        marginBottom: '0px',
    }
});

export const CreditCardRow = styled(CreditCardWrapper, {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    overflow: 'hidden',

    '@tablet': {
        justifyContent: 'flex-start',
    }
});

export const WrapperDate = styled(CreditCardWrapper, {
    width: '100%',
    marginRight: '10px',
    marginBottom: '0px',

    '@tablet': {
        width: 'auto',
    }
});

export const WrapperCvv = styled(CreditCardWrapper, {
    width: '100%',
    marginLeft: '10px',
    marginBottom: '0px',

    '@tablet': {
        width: 'auto',
    }
});

export const Label = styled('label', {
    fontWeight: '400',
    marginBottom: '5px',
    fontSize: '14px',
    lineHeight: '16px',
    color: '$darkerGray',
});

export const Input = styled('input', {
    width: '100%',
    background: '$white',
    border: '1px solid #CCCCCC',
    borderRadius: '4px',
    padding: '14px',
});

export const ErrorMessage = styled('div', {
    width: '100%',
    fontSize: '10px',
    lineHeight: '16px',
    color: 'red',
});