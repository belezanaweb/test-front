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
    '@media (min-width: 1024px)': {
      width: '1024px',
      height: 'fit-content',
      padding: '10px 0',
    },
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    color: '#cccccc',
    fontFamily: 'Helvetica Neue',
    fontSize: '13px',
    fontWeight: 700,
    width: `calc(100vw - 2 * ${hMargins})`,
    '@media (min-width: 1024px)': {
      width: `calc(1024px - 2 * ${hMargins})`,
      alignItems: 'center',
      fontSize: '14px',
    },
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
  logo: {
    display: 'none',
    '@media (min-width: 1024px)': {
      display: 'block',
      width: '50%',
    },
  },
});

export default styles;
