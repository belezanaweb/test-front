import React from 'react';
import ListProductsAmount from './components/ListProductsAmount';
import Products from './components/ListProducts';
import TitleStep from './components/TitleSteps';
import CcInfoPayment from './components/CcInfoPayment';
import sucesso from 'assets/img/success.png'
import { Typography } from '@material-ui/core';
import { makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    success: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: theme.spacing(1.5),
        '& p':{
            color: theme.palette.primary.main,
            textTransform: 'uppercase',
            fontWeight: 700,
            marginTop: theme.spacing(1.5),
        },
        '& img':{
            width: '40px',
            height: 'auto'
        }
    },
  }));


export default (props) =>{
    const classes = useStyles();
    return(
        <>
            <div className={classes.success}>
                <img src={sucesso} alt="Compra efetuada com sucesso"/>
                <Typography variant="body2">Compra efetuada com sucesso</Typography>
            </div>
            <TitleStep title="Pagamento"/>
            <CcInfoPayment/>
            <TitleStep title="Produtos"/>
            <Products listItens={props.data.listItens} small="true"/>
            <ListProductsAmount amount={props.data.amountProducts}/>
        </>
    )
}
