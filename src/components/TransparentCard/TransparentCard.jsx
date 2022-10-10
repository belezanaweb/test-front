import withStyles from 'react-jss';
import Card from 'components/Card';

const TransparentCard = withStyles((theme) => ({
  root: {
    backgroundColor: 'transparent',
    border: `1px solid ${theme.palette.grey.main}`,
    padding: '12px'
  }
}))(Card);

export default TransparentCard;
