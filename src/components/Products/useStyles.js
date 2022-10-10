import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  title: {
    ...theme.typography.large,
    fontWeight: 700,
    color: theme.palette.grey.dark,
    marginLeft: '11px',
    marginBottom: '5px'
  },
  card: {
    padding: '12px'
  },
  productContainer: {
    borderRadius: '3px',
    border: `1px solid ${theme.palette.background.main}`,
    display: 'flex',
    padding: '12px 10px 14px 10px',
    '& + &': {
      marginTop: '15px'
    }
  },
  productImage: {
    height: '65px',
    width: '65px',
    marginRight: '10px'
  },
  productInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  productName: {
    ...theme.typography.medium,
    whiteSpace: 'break-spaces'
  },
  productPrice: {
    ...theme.typography.large,
    fontWeight: 700,
    textAlign: 'end'
  }
}));

export default useStyles;
