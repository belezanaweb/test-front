import { StyleSheet } from 'aphrodite';

const hMargins = '20px';

const styles = StyleSheet.create({

  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '40px',
    backgroundColor: '#ffffff',
    color: '#c5c5c5',
    boxShadow: '1px 1px 5px 0 rgba(0,0,29,0.22)',
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    color: '#cccccc',
    fontFamily: 'Helvetica Neue',
    fontSize: '13px',
    fontWeight: 700,
    width: `calc(100vw - 2 * ${hMargins})`,
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
});

export default styles;
