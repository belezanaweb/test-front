import { StyleSheet } from 'aphrodite';

const photoHeight = '64px';

const styles = StyleSheet.create({

  container: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  content: {
    width: 'calc(100vw - 20px)',
  },
  title: {
    color: '#999',
    fontSize: '14px',
    fontWeight: 700,
    height: '17px',
    marginTop: '10px',
  },
  productsBox: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
    borderRadius: '3px',
    backgroundColor: '#ffffff',
    boxShadow: '1px 1px 5px 0 rgba(0,0,29,0.22)',
    marginTop: '10px',
    padding: '5px 0',
  },
  productName: {
    overflow: 'hidden',
    maxHeight: '48px',
  },
  itemContainer: {
    boxSizing: 'border-box',
    width: 'calc(100% - 24px)',
    borderRadius: '3px',
    border: '1px solid #eeeeee',
    margin: '7px 0 8px 0',

  },
  itemContent: {
    display: 'flex',
    alignItems: 'flex-end',
    padding: '12px 10px 14px 10px',
    color: '#212122',
    fontSize: '13px',
    lineHeight: '16px',
  },
  photoDiv: {
    width: '64px',
    minWidth: '64px',
    height: photoHeight,
    marginRight: '10px',
  },
  namePriceDiv: {
    position: 'relative',
    height: photoHeight,
  },
  price: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    fontSize: '14px',
    color: '#212122',
    fontWeight: 700,
    lineHeight: '17px',
  },
  calcBox: {
    boxSizing: 'border-box',
    width: '100%',
    borderRadius: '3px',
    border: '1px solid #cccccc',
    marginTop: '20px',
    padding: '8px 14px',
    fontSize: '14px',
    color: '#212122',
  },
  calcRow: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '7px 0',
  },
  orange: {
    color: '#ff7800',
  },
  calTotal: {
    fontWeight: 700,
    marginTop: '16px',
  },
  goPay: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '60px',
    width: '100%',
    borderRadius: '3px',
    backgroundColor: '#ff6c00',
    boxShadow: 'inset 0 -3px 0 0 #D45A00, 0 2px 4px 0 rgba(0,0,0,0.25)',
    color: '#ffffff',
    fontSize: '20px',
    fontWeight: 700,
    letterSpacing: '0.5px',
    lineHeight: '24px',
    margin: '20px 0 5px 0',
    '@media (max-width: 359px)': {
      fontSize: '18px',
    },
  },
  link: {
    textDecoration: 'unset',
    color: 'unset',
  },

});

export default styles;
