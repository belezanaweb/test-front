import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { ReactComponent as Logo } from 'assets/img/logo.svg';
import { Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: '100vh',
    '& h1':{
        fontSize: '3rem',
        marginLeft: theme.spacing(4)
    }
  },
}));

export default function StickyFooter() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <Link to="/" title="Voltar para home"><Logo/></Link>
        <Typography component="h1">
          Página não encontrada !
        </Typography>
    </div>
  );
}