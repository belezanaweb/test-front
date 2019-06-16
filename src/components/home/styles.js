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
  prodCalc: {
    '@media (min-width: 767px)': {
      display: 'flex',
    },
  },
  continueDiv: {
    display: 'flex',
    justifyContent: 'center',
  },

  errorMsg: {
    margin: '10px',
  },


});

export default styles;
