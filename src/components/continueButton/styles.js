import { StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({

  container: {
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
  disable: {
    opacity: 0.2,
  },
});

export default styles;
