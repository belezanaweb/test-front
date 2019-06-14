import { StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({

  container: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    marginBottom: '5px',
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
    width: '100%',
    borderRadius: '3px',
    backgroundColor: '#ffffff',
    boxShadow: '1px 1px 5px 0 rgba(0,0,29,0.22)',
    marginTop: '10px',
    padding: '10px 0',
    fontSize: '14px',
    color: '#212122',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '12px 15px',
  },
});

export default styles;
