import { StyleSheet } from 'aphrodite';

const photoHeight = '64px';

const styles = StyleSheet.create({

  container: {
    width: '100%',
  },
  title: {
    color: '#999',
    fontSize: '14px',
    fontWeight: 700,
    height: '17px',
    marginTop: '10px',
  },
  content: {
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
    width: '100%',
    height: photoHeight,
  },
  productName: {
    overflow: 'hidden',
    maxHeight: '48px',
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

});

export default styles;
