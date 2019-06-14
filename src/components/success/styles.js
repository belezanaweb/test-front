import { StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({

  container: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  content: {
    width: 'calc(100vw - 20px)',
  },
  errorMsg: {
    margin: '20px',
  },
  successBox: {
    textAlign: 'center',
    width: '100%',
    color: '#ff7800',
    fontSize: '14px',
    fontWeight: 700,
    margin: '12px 0 20px 0',
  },
  successImages: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '13px',
  },
  checkImageDiv: {
    position: 'absolute',
    width: '39px',
    height: '39px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paymentBox: {
    marginBottom: '20px',
  },
  title: {
    color: '#999',
    fontSize: '14px',
    fontWeight: 700,
    height: '17px',
    marginTop: '10px',
  },
  paymentContent: {
    // display: 'flex',
    // justifyContent: 'left',
    width: 'calc(100% - 20px)',
    borderRadius: '3px',
    backgroundColor: '#ffffff',
    boxShadow: '1px 1px 5px 0 rgba(0,0,29,0.22)',
    marginTop: '10px',
    padding: '8px 10px',
    fontSize: '14px',
    lineHeight: '25px',
    color: '#212122',
  },


});

export default styles;
