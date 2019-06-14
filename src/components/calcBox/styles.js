import { StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({

  container: {
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
});

export default styles;
