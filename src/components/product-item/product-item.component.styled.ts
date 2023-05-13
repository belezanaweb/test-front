import { styled } from '../../stitches.config';

export const ProductItemWrapper = styled('div', {
  display: 'grid',
  gridTemplateColumns: '100px 1fr 100px',
  gridTemplateRows: '1fr',
  gridGap: '10px',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '40px',

  '&:first-child': {
    marginTop: '24px',
  },
});

export const ProductImage = styled('img', {
  maxWidth: '60px',
  height: '60px',
  border: '1px solid',
  margin: '0 auto',

  '@tablet': {
    fontSize: '16px',
  },
});

export const ProductName = styled('h3', {
  fontWeight: '400',
  fontSize: '12px',
  lineHeight: '16px',
  margin: 0,

  '@tablet': {
    fontSize: '16px',
  },
});

export const PriceWrapper = styled('div', {
  display: 'flex',
  textAlign: 'right',
  flexDirection: 'column',
});

export const Price = styled('span', {
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '14px',
  lineHeight: '16px',
  color: '$black',
  margin: 0,
});

export const DiscountPrice = styled('span', {
  fontSize: '14px',
  color: '$gray',
  margin: 0,
});

export const DiscountPriceLineThrough = styled('span', {
  textDecoration: 'line-through',
});



