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
    margin: '10px',
  },
  title: {
    color: '#999',
    fontSize: '14px',
    fontWeight: 700,
    height: '17px',
    marginTop: '10px',
  },
  formBox: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
    borderRadius: '3px',
    backgroundColor: '#ffffff',
    boxShadow: '1px 1px 5px 0 rgba(0,0,29,0.22)',
    marginTop: '10px',
    padding: '10px 0px',
    fontSize: '14px',
    color: '#212122',
  },
  inputBox: {
    width: 'calc(100% - 20px)',
    marginBottom: '25px',
  },
  inputLabel: {
    color: '#c5c5c5',
    fontWeight: 'bold',
    marginBottom: '5px',
    fontSize: '13px',
  },
  inputBig: {
    width: 'calc(100% - 22px)',
    border: '1px solid #e0e0e0',
    borderRadius: '3px',
    padding: '10px',
    fontSize: '16px',
    '::placeholder': {
      color: '#d0d0d0',
    },
    ':focus': {
      borderColor: '#a43287',
      outline: 'none',
    },
  },
  inputBoxDual: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  inputExpires: {
    width: 'calc(100% - 40px)',
  },
  inputCV: {
    width: '120px',
    '@media (max-width: 359px)': {
      width: '100px',
    },
  },
  continueDiv: {
    display: 'flex',
    justifyContent: 'center',
  },
  prodCalc: {
    '@media (min-width: 767px)': {
      display: 'flex',
      justifyContent: 'space-between',
    },
  },
});

export default styles;
