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
});

export default styles;
