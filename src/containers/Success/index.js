import React from "react";
import MenuTabs from "../../components/MenuTabs";
import ContainerTotalPrice from "../../components/ContainerTotalPrice";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    height: "100%",
    '& > *': {
      margin: theme.spacing(3),
      width: theme.spacing(100),
    }
  },
  submit: {
    justifyContent: 'center',
    display: 'flex',
  },
}
));

const Success = () => {
  const classes = useStyles();

  return (
    <div>
      <MenuTabs />
      <div className={classes.root}>
        <Typography
          color="secondary"
          variant="h4"
          display="inline"
        >
          CONFIRMAÇÃO
                </Typography>
        <ContainerTotalPrice />
      </div>
    </div>
  )
}

export default Success;